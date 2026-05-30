#!/usr/bin/env python3
"""
V123: AI Email Archival & Search Engine
Intelligent email archival with semantic search, conversation threading, and instant recall of any commitment or fact.
"""
import re, json, hashlib
from datetime import datetime, timedelta
from dataclasses import dataclass, field
from typing import List, Dict, Optional, Tuple
from enum import Enum
from collections import defaultdict

class EntityType(Enum):
    COMMITMENT = "commitment"
    DECISION = "decision"
    FACT = "fact"
    DEADLINE = "deadline"
    CONTACT_INFO = "contact_info"
    FINANCIAL = "financial"
    TECHNICAL = "technical"
    MEETING_REF = "meeting_reference"

@dataclass
class ArchivedEntity:
    entity_id: str
    entity_type: EntityType
    content: str
    source_email_id: str
    sender: str
    recipients: List[str]
    date: datetime
    thread_id: str
    confidence: float
    tags: List[str] = field(default_factory=list)
    related_entities: List[str] = field(default_factory=list)

@dataclass
class SearchResult:
    query: str
    results: List[ArchivedEntity]
    total_matches: int
    search_time_ms: float
    thread_contexts: Dict[str, List[ArchivedEntity]]
    timeline: List[Dict]

class EmailArchivalEngine:
    """V123: Intelligent archival with semantic search and instant recall."""
    
    COMMITMENT_PATTERNS = [
        r"(?:I|we)\s+(?:will|shall|promise|commit to|agree to)\s+(.{10,100})",
        r"(?:let'?s?\s+|we'?ll?\s+)(.{10,80})",
        r"(?:action item|todo|task)[:\s]+(.{10,80})",
    ]
    
    DECISION_PATTERNS = [
        r"(?:we(?:'ve|\shave)?\s+(?:decided|agreed|chosen|approved))\s+(.{10,100})",
        r"(?:the decision is|going with|selected)\s+(.{10,100})",
    ]
    
    DEADLINE_PATTERNS = [
        r"(?:deadline|due|by|before)\s+([^.!?\n]{5,40})",
        r"(?:we need.*by|must.*by)\s+([^.!?\n]{5,40})",
    ]
    
    FINANCIAL_PATTERNS = [
        r"\$[\d,]+(?:\.\d+)?(?:\s*(?:per|/)\s*(?:month|year|user|seat))?",
        r"(?:budget|cost|price|revenue|investment)\s+(?:of|is|was|:)?\s*\$?[\d,]+",
    ]
    
    CONTACT_PATTERNS = [
        r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}",
        r"\+?\d{1,3}[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}",
    ]
    
    def __init__(self):
        self.archive: Dict[str, ArchivedEntity] = {}
        self.threads: Dict[str, List[str]] = defaultdict(list)
        self.search_index: Dict[str, List[str]] = defaultdict(list)
        self.total_archived = 0
        self.reply_all_count = 0
    
    def archive_email(self, email: Dict) -> List[ArchivedEntity]:
        """Archive an email and extract structured entities."""
        body = email.get("body", "")
        subject = email.get("subject", "")
        sender = email.get("from", "")
        recipients = email.get("to", []) + email.get("cc", [])
        email_id = email.get("id", hashlib.md5(f"{sender}{subject}{datetime.now().isoformat()}".encode()).hexdigest()[:12])
        thread_id = email.get("thread_id", email_id)
        date = datetime.now()
        
        entities = []
        text = subject + " " + body
        
        # Extract commitments
        for pattern in self.COMMITMENT_PATTERNS:
            for match in re.findall(pattern, text, re.I):
                entity = self._create_entity(
                    EntityType.COMMITMENT, match.strip(), email_id, sender, recipients, date, thread_id, 0.9
                )
                entities.append(entity)
        
        # Extract decisions
        for pattern in self.DECISION_PATTERNS:
            for match in re.findall(pattern, text, re.I):
                entity = self._create_entity(
                    EntityType.DECISION, match.strip(), email_id, sender, recipients, date, thread_id, 0.85
                )
                entities.append(entity)
        
        # Extract deadlines
        for pattern in self.DEADLINE_PATTERNS:
            for match in re.findall(pattern, text, re.I):
                entity = self._create_entity(
                    EntityType.DEADLINE, match.strip(), email_id, sender, recipients, date, thread_id, 0.8
                )
                entities.append(entity)
        
        # Extract financial data
        for match in re.findall(self.FINANCIAL_PATTERNS[0], text):
            entity = self._create_entity(
                EntityType.FINANCIAL, match.strip(), email_id, sender, recipients, date, thread_id, 0.95
            )
            entities.append(entity)
        
        # Extract contact info
        for match in re.findall(self.CONTACT_PATTERNS[0], text):
            entity = self._create_entity(
                EntityType.CONTACT_INFO, match.strip(), email_id, sender, recipients, date, thread_id, 0.95
            )
            entities.append(entity)
        
        # Archive the full email as a fact
        fact_entity = self._create_entity(
            EntityType.FACT, f"{subject}: {body[:300]}", email_id, sender, recipients, date, thread_id, 1.0
        )
        entities.append(fact_entity)
        
        # Store all entities
        for entity in entities:
            self.archive[entity.entity_id] = entity
            self.threads[thread_id].append(entity.entity_id)
            # Index by words
            for word in entity.content.lower().split():
                word = word.strip(".,!?;:")
                if len(word) > 3:
                    self.search_index[word].append(entity.entity_id)
        
        self.total_archived += 1
        
        # Reply-all tracking
        if len(recipients) > 1:
            self.reply_all_count += 1
        
        return entities
    
    def _create_entity(self, etype: EntityType, content: str, email_id: str, sender: str,
                       recipients: List[str], date: datetime, thread_id: str, confidence: float) -> ArchivedEntity:
        entity_id = hashlib.md5(f"{etype.value}{content}{email_id}".encode()).hexdigest()[:12]
        tags = self._auto_tag(content)
        return ArchivedEntity(
            entity_id=entity_id,
            entity_type=etype,
            content=content[:500],
            source_email_id=email_id,
            sender=sender,
            recipients=recipients,
            date=date,
            thread_id=thread_id,
            confidence=confidence,
            tags=tags
        )
    
    def _auto_tag(self, content: str) -> List[str]:
        tags = []
        content_lower = content.lower()
        tag_keywords = {
            "pricing": ["price", "cost", "budget", "quote", "pricing"],
            "technical": ["api", "code", "deploy", "server", "bug", "fix"],
            "legal": ["contract", "agreement", "nda", "terms", "compliance"],
            "sales": ["deal", "proposal", "prospect", "client", "customer"],
            "support": ["issue", "ticket", "help", "problem", "bug"],
        }
        for tag, keywords in tag_keywords.items():
            if any(kw in content_lower for kw in keywords):
                tags.append(tag)
        return tags
    
    def search(self, query: str, entity_types: List[EntityType] = None, limit: int = 20) -> SearchResult:
        """Semantic search across the email archive."""
        start = datetime.now()
        query_words = set(query.lower().split())
        
        # Find matching entity IDs
        candidate_ids = set()
        for word in query_words:
            word = word.strip(".,!?;:")
            if word in self.search_index:
                candidate_ids.update(self.search_index[word])
        
        # Score and filter
        results = []
        for eid in candidate_ids:
            entity = self.archive.get(eid)
            if not entity:
                continue
            if entity_types and entity.entity_type not in entity_types:
                continue
            # Score by word overlap
            content_words = set(entity.content.lower().split())
            overlap = len(query_words & content_words)
            score = overlap / max(1, len(query_words))
            if score > 0:
                results.append((score * entity.confidence, entity))
        
        results.sort(key=lambda x: x[0], reverse=True)
        top_results = [r[1] for r in results[:limit]]
        
        # Group by thread
        thread_contexts = defaultdict(list)
        for r in top_results:
            thread_contexts[r.thread_id].append(r)
        
        # Build timeline
        timeline = [{"date": r.date.isoformat(), "type": r.entity_type.value, "content": r.content[:80]}
                    for r in top_results[:10]]
        
        elapsed = (datetime.now() - start).total_seconds() * 1000
        
        return SearchResult(
            query=query,
            results=top_results,
            total_matches=len(results),
            search_time_ms=round(elapsed, 2),
            thread_contexts=dict(thread_contexts),
            timeline=timeline
        )
    
    def recall_commitments(self, sender: str = None) -> List[ArchivedEntity]:
        """Recall all commitments, optionally filtered by sender."""
        commitments = [e for e in self.archive.values() if e.entity_type == EntityType.COMMITMENT]
        if sender:
            commitments = [c for c in commitments if sender.lower() in c.sender.lower()]
        return sorted(commitments, key=lambda x: x.date, reverse=True)
    
    def get_stats(self) -> Dict:
        type_counts = defaultdict(int)
        for e in self.archive.values():
            type_counts[e.entity_type.value] += 1
        return {
            "emails_archived": self.total_archived,
            "entities_extracted": len(self.archive),
            "threads_tracked": len(self.threads),
            "indexed_terms": len(self.search_index),
            "entity_types": dict(type_counts),
            "reply_all_tracked": self.reply_all_count,
            "engine_version": "V123"
        }


if __name__ == "__main__":
    engine = EmailArchivalEngine()
    
    print("=" * 60)
    print("V123: AI Email Archival & Search Engine")
    print("=" * 60)
    
    test_emails = [
        {"id": "arch1", "from": "pm@company.com", "to": ["team@zion.com", "dev@zion.com"], "cc": ["vp@company.com"], "thread_id": "thread1",
         "subject": "Project Alpha kickoff", "body": "We've decided to go with the phased approach. I will send the project charter by Friday. The budget is $250,000 for phase 1. Deadline for completion is March 31st. John will lead the technical implementation."},
        {"id": "arch2", "from": "dev@zion.com", "to": ["pm@company.com", "team@zion.com"], "cc": ["vp@company.com"], "thread_id": "thread1",
         "subject": "Re: Project Alpha kickoff", "body": "Sounds great. I'll have the technical architecture ready by next Wednesday. We'll need 3 additional developers. The estimated cost is $75,000 for the additional resources. Contact me at john@zion.com or +1-555-0123 for any questions."},
        {"id": "arch3", "from": "sales@zion.com", "to": ["client@bigco.com", "manager@zion.com"], "cc": ["exec@zion.com"], "thread_id": "thread2",
         "subject": "Enterprise license agreement", "body": "We've agreed to the enterprise license at $500,000/year. I promise to have the contract ready by Monday. The implementation will start within 2 weeks of signing. Please reach out to legal@zion.com for any contract questions."},
    ]
    
    for email in test_emails:
        entities = engine.archive_email(email)
        print(f"\n--- Archived: {email['subject']} ---")
        print(f"  Extracted {len(entities)} entities:")
        for e in entities:
            print(f"    [{e.entity_type.value}] {e.content[:80]}... (confidence: {e.confidence:.0%})")
    
    # Search
    print(f"\n--- Search: 'budget project' ---")
    results = engine.search("budget project")
    print(f"  Found {results.total_matches} matches in {results.search_time_ms}ms")
    for r in results.results[:5]:
        print(f"    [{r.entity_type.value}] {r.content[:80]}...")
    
    # Recall commitments
    print(f"\n--- All Commitments ---")
    for c in engine.recall_commitments():
        print(f"  • {c.sender}: {c.content[:80]}")
    
    print(f"\n--- Stats ---")
    for k, v in engine.get_stats().items():
        print(f"  {k}: {v}")

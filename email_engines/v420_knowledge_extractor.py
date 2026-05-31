#!/usr/bin/env python3
"""
V420: AI Email Knowledge Extractor
Extracts, categorizes, and stores knowledge from emails for future reference.
Builds a searchable knowledge base from email conversations including
FAQs, procedures, contacts, decisions, and lessons learned.
Enforces reply-all for multi-recipient emails.
"""

import json
import re
from typing import Dict, List
from datetime import datetime
from dataclasses import dataclass, asdict


@dataclass
class KnowledgeEntry:
    id: str
    category: str  # faq, procedure, contact, decision, lesson, fact
    title: str
    content: str
    source_email_id: str
    tags: List[str]
    confidence: float
    created_at: str
    access_count: int = 0


class V420KnowledgeExtractor:
    """Extracts and organizes knowledge from emails"""

    def __init__(self):
        self.knowledge_base: List[KnowledgeEntry] = []
        self._id_counter = 0

    def _next_id(self) -> str:
        self._id_counter += 1
        return f"KB-{self._id_counter:06d}"

    def extract_knowledge(self, email_data: Dict) -> Dict:
        """Extract all knowledge from a single email"""
        body = email_data.get("body", "")
        subject = email_data.get("subject", "")
        entries = []

        # Extract FAQs
        entries.extend(self._extract_faqs(body, subject, email_data))

        # Extract procedures/steps
        entries.extend(self._extract_procedures(body, email_data))

        # Extract contacts/relationships
        entries.extend(self._extract_contacts(email_data))

        # Extract decisions
        entries.extend(self._extract_decisions(body, email_data))

        # Extract facts/data points
        entries.extend(self._extract_facts(body, email_data))

        # Extract lessons learned
        entries.extend(self._extract_lessons(body, email_data))

        # Store entries
        for entry in entries:
            self.knowledge_base.append(entry)

        # Check reply-all
        total_recipients = len(email_data.get("to", [])) + len(email_data.get("cc", []))
        should_reply_all = total_recipients > 1

        return {
            "engine": "V420 Knowledge Extractor",
            "email_id": email_data.get("id", "unknown"),
            "knowledge_extracted": len(entries),
            "categories": list(set(e.category for e in entries)),
            "entries": [asdict(e) for e in entries],
            "reply_all": should_reply_all,
            "knowledge_base_size": len(self.knowledge_base)
        }

    def _extract_faqs(self, body: str, subject: str, email_data: Dict) -> List[KnowledgeEntry]:
        """Extract FAQ-style knowledge"""
        entries = []
        # Find question-answer pairs
        questions = re.findall(r'(?:how|what|when|where|why|is|can|does|do)\s+[^?]+\?', body, re.I)

        for q in questions[:3]:
            # Try to find answer after the question
            q_pos = body.find(q)
            answer_text = body[q_pos + len(q):q_pos + len(q) + 500] if q_pos >= 0 else ""
            # Clean up answer
            answer = answer_text.strip()[:300]

            if answer:
                entries.append(KnowledgeEntry(
                    id=self._next_id(),
                    category="faq",
                    title=q.strip(),
                    content=answer,
                    source_email_id=email_data.get("id", ""),
                    tags=["faq", subject[:30].lower()],
                    confidence=0.7,
                    created_at=datetime.now().isoformat()
                ))

        return entries

    def _extract_procedures(self, body: str, email_data: Dict) -> List[KnowledgeEntry]:
        """Extract step-by-step procedures"""
        entries = []

        # Look for numbered steps
        steps = re.findall(r'(?:^|\n)\s*(\d+)[.)]\s*(.+)', body)
        if len(steps) >= 2:
            procedure = "\n".join(f"{i}. {s}" for i, s in steps)
            entries.append(KnowledgeEntry(
                id=self._next_id(),
                category="procedure",
                title=f"Procedure: {email_data.get('subject', 'Steps')[:50]}",
                content=procedure,
                source_email_id=email_data.get("id", ""),
                tags=["procedure", "steps"],
                confidence=0.85,
                created_at=datetime.now().isoformat()
            ))

        # Look for bullet-point lists
        bullets = re.findall(r'(?:^|\n)\s*[-*•]\s*(.+)', body)
        if len(bullets) >= 3:
            procedure = "\n".join(f"• {b}" for b in bullets)
            entries.append(KnowledgeEntry(
                id=self._next_id(),
                category="procedure",
                title=f"Checklist: {email_data.get('subject', 'Items')[:50]}",
                content=procedure,
                source_email_id=email_data.get("id", ""),
                tags=["checklist", "procedure"],
                confidence=0.75,
                created_at=datetime.now().isoformat()
            ))

        return entries

    def _extract_contacts(self, email_data: Dict) -> List[KnowledgeEntry]:
        """Extract contact and relationship information"""
        entries = []
        sender = email_data.get("from", "")

        # Extract role/title from signature
        body = email_data.get("body", "")
        title_match = re.search(r'(?:CEO|CTO|CFO|VP|Director|Manager|Engineer|Analyst|Consultant|Founder)', body, re.I)

        if sender and title_match:
            entries.append(KnowledgeEntry(
                id=self._next_id(),
                category="contact",
                title=f"Contact: {sender}",
                content=f"Role: {title_match.group()}",
                source_email_id=email_data.get("id", ""),
                tags=["contact", title_match.group().lower()],
                confidence=0.9,
                created_at=datetime.now().isoformat()
            ))

        return entries

    def _extract_decisions(self, body: str, email_data: Dict) -> List[KnowledgeEntry]:
        """Extract decisions made in emails"""
        entries = []
        decision_patterns = [
            r"(?:we(?:'ve| have)? (?:decided|agreed|chosen|selected))[^.]+",
            r'(?:the decision (?:is|was))[^.]+',
            r"(?:let's (?:go with|proceed with|choose))[^.]+",
            r'(?:approved?[:\s]+)[^.]+',
        ]

        for pattern in decision_patterns:
            matches = re.findall(pattern, body, re.I)
            for match in matches[:2]:
                entries.append(KnowledgeEntry(
                    id=self._next_id(),
                    category="decision",
                    title=f"Decision: {match.strip()[:60]}",
                    content=match.strip(),
                    source_email_id=email_data.get("id", ""),
                    tags=["decision", email_data.get("from", "").split("@")[0] if "@" in email_data.get("from", "") else "unknown"],
                    confidence=0.8,
                    created_at=datetime.now().isoformat()
                ))

        return entries

    def _extract_facts(self, body: str, email_data: Dict) -> List[KnowledgeEntry]:
        """Extract factual data points"""
        entries = []

        # Extract numbers/metrics
        metrics = re.findall(r'(\d+(?:\.\d+)?%|\$\d+(?:,\d{3})*(?:\.\d{2})?|\d+(?:,\d{3})+\s+(?:users|customers|clients|accounts))', body)
        if metrics:
            entries.append(KnowledgeEntry(
                id=self._next_id(),
                category="fact",
                title=f"Metrics from {email_data.get('subject', 'email')[:40]}",
                content=f"Key metrics: {', '.join(metrics[:5])}",
                source_email_id=email_data.get("id", ""),
                tags=["metrics", "data"],
                confidence=0.85,
                created_at=datetime.now().isoformat()
            ))

        # Extract dates/deadlines
        dates = re.findall(r'(?:deadline|due|by|before)\s*[:\s]*([A-Z][a-z]+ \d{1,2}(?:,?\s*\d{4})?)', body)
        if dates:
            entries.append(KnowledgeEntry(
                id=self._next_id(),
                category="fact",
                title=f"Deadlines from {email_data.get('subject', 'email')[:40]}",
                content=f"Key dates: {', '.join(dates[:5])}",
                source_email_id=email_data.get("id", ""),
                tags=["deadline", "date"],
                confidence=0.9,
                created_at=datetime.now().isoformat()
            ))

        return entries

    def _extract_lessons(self, body: str, email_data: Dict) -> List[KnowledgeEntry]:
        """Extract lessons learned"""
        entries = []
        lesson_patterns = [
            r'(?:we learned|lesson learned|key takeaway|important note)[:\s]+[^.]+',
            r'(?:next time|in the future|going forward)[,:\s]+[^.]+',
            r'(?:don\'t forget|remember to|always)[^.\n]+',
        ]

        for pattern in lesson_patterns:
            matches = re.findall(pattern, body, re.I)
            for match in matches[:2]:
                entries.append(KnowledgeEntry(
                    id=self._next_id(),
                    category="lesson",
                    title=f"Lesson: {match.strip()[:60]}",
                    content=match.strip(),
                    source_email_id=email_data.get("id", ""),
                    tags=["lesson", "best-practice"],
                    confidence=0.75,
                    created_at=datetime.now().isoformat()
                ))

        return entries

    def search_knowledge(self, query: str, category: str = None) -> List[Dict]:
        """Search the knowledge base"""
        query_lower = query.lower()
        results = []

        for entry in self.knowledge_base:
            if category and entry.category != category:
                continue

            # Simple relevance scoring
            score = 0
            if query_lower in entry.title.lower():
                score += 3
            if query_lower in entry.content.lower():
                score += 2
            for tag in entry.tags:
                if query_lower in tag:
                    score += 1

            if score > 0:
                entry.access_count += 1
                results.append({**asdict(entry), "relevance_score": score})

        results.sort(key=lambda x: x["relevance_score"], reverse=True)
        return results[:10]

    def get_stats(self) -> Dict:
        """Get knowledge base statistics"""
        categories = {}
        for entry in self.knowledge_base:
            categories[entry.category] = categories.get(entry.category, 0) + 1

        return {
            "engine": "V420 Knowledge Base Stats",
            "total_entries": len(self.knowledge_base),
            "by_category": categories,
            "most_accessed": sorted(
                [asdict(e) for e in self.knowledge_base],
                key=lambda x: x["access_count"],
                reverse=True
            )[:5]
        }


def process_email(email_data: Dict) -> Dict:
    extractor = V420KnowledgeExtractor()
    return extractor.extract_knowledge(email_data)


if __name__ == "__main__":
    test_email = {
        "id": "email-test-001",
        "subject": "Q3 Project Update and Next Steps",
        "from": "pm@client.com",
        "to": ["dev@ziontechgroup.com", "lead@ziontechgroup.com"],
        "cc": ["cto@ziontechgroup.com"],
        "body": """Hi team,

Here's the Q3 update:
- Revenue grew 23% to $2.4M
- We've acquired 1,200 new users
- Customer satisfaction is at 94%

We've decided to proceed with the cloud migration plan.

Next steps:
1. Complete infrastructure audit by June 15
2. Begin migration phase 1 by July 1
3. Full migration complete by September 30

Key takeaway: Always test in staging before production deployment.

Remember to update the documentation before each release.

Best regards,
John Smith
VP of Engineering"""
    }

    result = process_email(test_email)
    print(json.dumps(result, indent=2))

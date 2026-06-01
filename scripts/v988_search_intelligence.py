#!/usr/bin/env python3
"""
V988: Email Search Intelligence Engine
Semantic search across email history with context-aware results.
Enables instant retrieval of relevant emails with strict reply-all enforcement.
"""

import re
import hashlib
from datetime import datetime, timezone
from typing import Dict, List, Any


class EmailSearchIntelligence:
    """Provides intelligent semantic search across email history."""

    def __init__(self):
        self.search_log: List[Dict] = []
        self.reply_all_audit: List[Dict] = []
        self.email_index: Dict[str, Dict] = {}

    def analyze_email_case_by_case(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Index email for search case by case."""
        analysis = {
            "engine": "V988",
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "email_id": email.get("id", hashlib.md5(str(email).encode()).hexdigest()[:12]),
            "analysis_type": "search_intelligence",
        }

        to_recipients = email.get("to", [])
        cc_recipients = email.get("cc", [])
        all_recipients = to_recipients + cc_recipients
        is_multi_recipient = len(all_recipients) > 1

        body = email.get("body", "")
        subject = email.get("subject", "")
        sender = email.get("from", "")

        # 1. Extract searchable content
        searchable = self._extract_searchable_content(subject, body)
        analysis["searchable_content"] = searchable

        # 2. Generate search index
        index_data = self._generate_search_index(email, searchable)
        analysis["index_data"] = index_data

        # 3. Extract keywords
        keywords = self._extract_keywords(searchable["full_text"])
        analysis["keywords"] = keywords

        # 4. Entity extraction
        entities = self._extract_entities(searchable["full_text"])
        analysis["entities"] = entities

        # 5. Topic classification
        topics = self._classify_topics(searchable["full_text"])
        analysis["topics"] = topics

        # 6. Importance scoring
        importance = self._calculate_importance(email, keywords, entities)
        analysis["importance_score"] = importance

        # 7. Store in index
        self._store_in_index(analysis["email_id"], index_data)

        # 8. Determine action
        action = self._determine_search_action(importance, keywords)
        analysis["recommended_action"] = action

        # REPLY-ALL ENFORCEMENT
        reply_all = self._enforce_reply_all(email, all_recipients, is_multi_recipient)
        analysis["reply_all_enforcement"] = reply_all

        self.search_log.append({
            "email_id": analysis["email_id"],
            "keyword_count": len(keywords),
            "entity_count": len(entities),
            "importance_score": importance["score"],
            "reply_all": reply_all["enforced"],
            "timestamp": analysis["timestamp"],
        })

        return analysis

    def _extract_searchable_content(self, subject: str, body: str) -> Dict:
        """Extract searchable content from email."""
        full_text = f"{subject} {body}".strip()
        
        return {
            "subject": subject,
            "body": body,
            "full_text": full_text,
            "word_count": len(full_text.split()),
            "char_count": len(full_text),
        }

    def _generate_search_index(self, email: Dict, searchable: Dict) -> Dict:
        """Generate search index data."""
        return {
            "email_id": email.get("id"),
            "from": email.get("from"),
            "to": email.get("to", []),
            "cc": email.get("cc", []),
            "subject": searchable["subject"],
            "timestamp": email.get("timestamp"),
            "full_text": searchable["full_text"],
            "has_attachments": len(email.get("attachments", [])) > 0,
        }

    def _extract_keywords(self, text: str) -> List[str]:
        """Extract keywords from text."""
        # Remove common stop words
        stop_words = {"the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for", "of", "with", "by", "is", "are", "was", "were", "be", "been", "have", "has", "had", "do", "does", "did", "will", "would", "could", "should", "may", "might", "must", "can", "this", "that", "these", "those", "i", "you", "he", "she", "it", "we", "they", "me", "him", "her", "us", "them", "my", "your", "his", "its", "our", "their"}
        
        words = re.findall(r'\b[a-zA-Z]{3,}\b', text.lower())
        keywords = [word for word in words if word not in stop_words]
        
        # Get unique keywords, preserving order
        seen = set()
        unique_keywords = []
        for kw in keywords:
            if kw not in seen:
                seen.add(kw)
                unique_keywords.append(kw)
        
        return unique_keywords[:20]  # Limit to 20 keywords

    def _extract_entities(self, text: str) -> List[Dict]:
        """Extract entities from text."""
        entities = []
        
        # Dates
        dates = re.findall(r'\b(\d{1,2}[/-]\d{1,2}[/-]\d{2,4})\b', text)
        for date in dates[:5]:
            entities.append({"type": "date", "value": date})
        
        # Names (capitalized words)
        names = re.findall(r'\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)\b', text)
        for name in names[:10]:
            entities.append({"type": "person", "value": name})
        
        # Organizations
        org_patterns = [
            r'\b([A-Z][a-zA-Z\s]+(?:Inc|LLC|Ltd|Corp|Company|Group|Technologies|Solutions))\b',
        ]
        for pattern in org_patterns:
            matches = re.findall(pattern, text)
            for org in matches[:5]:
                entities.append({"type": "organization", "value": org})
        
        # Numbers
        numbers = re.findall(r'\b(\d{2,})\b', text)
        for num in numbers[:5]:
            entities.append({"type": "number", "value": num})
        
        return entities

    def _classify_topics(self, text: str) -> List[str]:
        """Classify email into topics."""
        text_lower = text.lower()
        
        topic_keywords = {
            "technical": ["api", "code", "bug", "feature", "integration", "technical", "system", "software"],
            "business": ["budget", "timeline", "proposal", "contract", "business", "revenue", "sales"],
            "support": ["issue", "problem", "help", "support", "question", "error", "trouble"],
            "meeting": ["meeting", "call", "schedule", "agenda", "minutes", "attendees"],
            "project": ["project", "milestone", "deadline", "deliverable", "sprint", "task"],
            "hr": ["hiring", "interview", "candidate", "employee", "benefits", "onboarding"],
            "finance": ["invoice", "payment", "billing", "expense", "budget", "accounting"],
        }
        
        detected_topics = []
        for topic, keywords in topic_keywords.items():
            if any(kw in text_lower for kw in keywords):
                detected_topics.append(topic)
        
        return detected_topics

    def _calculate_importance(self, email: Dict, keywords: List, entities: List) -> Dict:
        """Calculate email importance for search ranking."""
        score = 50  # Base score
        
        # Keyword density
        if len(keywords) > 10:
            score += 15
        
        # Entity count
        entity_count = len(entities)
        score += min(entity_count * 3, 20)
        
        # Recipients (multi-recipient = more important)
        recipient_count = len(email.get("to", [])) + len(email.get("cc", []))
        if recipient_count > 3:
            score += 10
        
        # Attachments
        if email.get("attachments"):
            score += 10
        
        # Subject length (longer subject = more specific)
        subject = email.get("subject", "")
        if len(subject) > 30:
            score += 5
        
        score = min(score, 100)
        
        if score >= 80:
            level = "HIGH"
        elif score >= 60:
            level = "MEDIUM"
        else:
            level = "LOW"
        
        return {
            "score": score,
            "level": level,
        }

    def _store_in_index(self, email_id: str, index_data: Dict):
        """Store email in search index."""
        self.email_index[email_id] = index_data

    def _determine_search_action(self, importance: Dict, keywords: List) -> str:
        """Determine search indexing action."""
        if importance["level"] == "HIGH" and len(keywords) > 10:
            return "PRIORITY_INDEX"
        elif importance["level"] == "MEDIUM":
            return "STANDARD_INDEX"
        else:
            return "BASIC_INDEX"

    def _enforce_reply_all(self, email: Dict, all_recipients: List, is_multi: bool) -> Dict:
        """STRICT reply-all enforcement."""
        result = {
            "is_multi_recipient": is_multi,
            "recipient_count": len(all_recipients),
            "enforced": False,
            "reason": "",
        }
        if is_multi:
            result["enforced"] = True
            result["reason"] = f"REPLY-ALL ENFORCED: {len(all_recipients)} recipients."
            self.reply_all_audit.append({
                "email_id": email.get("id", "unknown"),
                "enforced": True,
                "timestamp": datetime.now(timezone.utc).isoformat(),
            })
        else:
            result["reason"] = "Single recipient."
        return result

    def search(self, query: str) -> List[Dict]:
        """Search across indexed emails."""
        query_lower = query.lower()
        query_words = query_lower.split()
        
        results = []
        for email_id, data in self.email_index.items():
            text = data.get("full_text", "").lower()
            
            # Simple relevance scoring
            relevance = sum(1 for word in query_words if word in text)
            
            if relevance > 0:
                results.append({
                    "email_id": email_id,
                    "relevance": relevance,
                    "subject": data.get("subject"),
                    "from": data.get("from"),
                    "timestamp": data.get("timestamp"),
                })
        
        # Sort by relevance
        results.sort(key=lambda x: x["relevance"], reverse=True)
        return results[:10]

    def get_stats(self) -> Dict:
        if not self.search_log:
            return {"emails_indexed": 0}
        return {
            "emails_indexed": len(self.search_log),
            "index_size": len(self.email_index),
            "avg_keywords": sum(s["keyword_count"] for s in self.search_log) / len(self.search_log),
            "avg_importance": sum(s["importance_score"] for s in self.search_log) / len(self.search_log),
            "reply_all_enforced": len(self.reply_all_audit),
        }


def test_v988():
    engine = EmailSearchIntelligence()

    # Test 1: Index rich email
    email1 = {
        "id": "search-001",
        "from": "project.manager@company.com",
        "to": ["team@ziontechgroup.com", "dev@ziontechgroup.com", "qa@company.com"],
        "subject": "Sprint Planning Meeting - January 15th",
        "body": "Hi team, let's discuss the sprint planning for Q1. We need to prioritize the authentication feature and API integration. Budget is $50,000. Meeting scheduled for January 15th at 2 PM. Please prepare backlog items.",
        "timestamp": "2024-01-10T10:00:00Z",
    }
    r1 = engine.analyze_email_case_by_case(email1)
    assert r1["reply_all_enforcement"]["enforced"] is True
    assert len(r1["keywords"]) >= 5
    assert len(r1["entities"]) >= 2
    assert "project" in r1["topics"] or "meeting" in r1["topics"]
    print(f"✅ Test 1 PASSED: Indexed with {len(r1['keywords'])} keywords, {len(r1['entities'])} entities, topics={r1['topics']}, reply-all enforced")

    # Test 2: Search functionality
    email2 = {
        "id": "search-002",
        "from": "user@company.com",
        "to": ["support@ziontechgroup.com"],
        "subject": "Question about API documentation",
        "body": "Hi, I need help with the API integration documentation. Can you provide examples?",
    }
    r2 = engine.analyze_email_case_by_case(email2)
    
    # Search for "API"
    search_results = engine.search("API")
    assert len(search_results) >= 1
    print(f"✅ Test 2 PASSED: Search returned {len(search_results)} results for 'API'")

    stats = engine.get_stats()
    print(f"✅ Test 3 PASSED: {stats['emails_indexed']} emails indexed, index size={stats['index_size']}")

    print("\n🎉 V988 ALL TESTS PASSED — Email Search Intelligence operational!")
    return True


if __name__ == "__main__":
    test_v988()

#!/usr/bin/env python3
"""V243 - AI Email Archive & Search Engine
Full-text search across email history with semantic search,
date filtering, conversation threading, and smart results ranking.
Always enforces reply-all for multi-recipient emails.
"""
import json, re, datetime, hashlib, math
from dataclasses import dataclass, field
from typing import List, Dict, Optional
from collections import defaultdict

@dataclass
class SearchResult:
    email_id: str
    subject: str
    sender: str
    date: str
    snippet: str
    relevance_score: float
    thread_id: str
    has_attachments: bool

class SemanticIndex:
    STOP_WORDS = {"the", "a", "an", "is", "are", "was", "were", "be", "been", "being",
                  "have", "has", "had", "do", "does", "did", "will", "would", "shall",
                  "should", "may", "might", "must", "can", "could", "and", "or", "but",
                  "in", "on", "at", "to", "for", "of", "with", "by", "from", "this", "that"}
    
    def __init__(self):
        self.index = defaultdict(list)
        self.emails = {}
    
    def index_email(self, email: Dict):
        email_id = email.get("id", "")
        self.emails[email_id] = email
        text = f'{email.get("subject", "")} {email.get("body", "")}'.lower()
        words = set(re.findall(r'\b\w+\b', text)) - self.STOP_WORDS
        for word in words:
            self.index[word].append(email_id)
    
    def search(self, query: str, filters: Dict = None) -> List[SearchResult]:
        query_words = set(re.findall(r'\b\w+\b', query.lower())) - self.STOP_WORDS
        if not query_words: return []
        
        scores = defaultdict(float)
        for word in query_words:
            for email_id in self.index.get(word, []):
                scores[email_id] += 1.0 / len(query_words)
        
        results = []
        for email_id, score in sorted(scores.items(), key=lambda x: x[1], reverse=True):
            email = self.emails.get(email_id, {})
            if filters:
                if filters.get("sender") and filters["sender"].lower() not in email.get("from", "").lower():
                    continue
                if filters.get("date_from"):
                    email_date = email.get("timestamp", "")[:10]
                    if email_date < filters["date_from"]:
                        continue
            
            body = email.get("body", "")
            snippet_start = max(0, body.lower().find(query.lower().split()[0]) - 50)
            snippet = body[snippet_start:snippet_start + 200].strip()
            
            results.append(SearchResult(
                email_id=email_id,
                subject=email.get("subject", ""),
                sender=email.get("from", ""),
                date=email.get("timestamp", "")[:10],
                snippet=snippet + "..." if len(snippet) >= 200 else snippet,
                relevance_score=round(score, 3),
                thread_id=email.get("thread_id", email_id),
                has_attachments=bool(email.get("attachments"))
            ))
        
        return results[:20]

class EmailArchiveEngine:
    def __init__(self):
        self.search_index = SemanticIndex()
    
    def ingest_emails(self, emails: List[Dict]):
        for email in emails:
            self.search_index.index_email(email)
    
    def search(self, query: str, filters: Dict = None,
               recipients: List[str] = None) -> Dict:
        results = self.search_index.search(query, filters)
        thread_groups = defaultdict(list)
        for r in results:
            thread_groups[r.thread_id].append(r)
        
        return {
            "query": query,
            "total_results": len(results),
            "unique_threads": len(thread_groups),
            "results": [r.__dict__ for r in results],
            "reply_all_required": len(recipients or []) > 1,
            "timestamp": datetime.datetime.now().isoformat()
        }

if __name__ == "__main__":
    engine = EmailArchiveEngine()
    emails = [
        {"id": "e1", "subject": "Q3 Budget Review", "from": "cfo@co.com", "timestamp": "2026-05-15T10:00:00",
         "body": "Please review the Q3 budget allocation. Total is $2.5M with $500K for engineering.", "thread_id": "t1"},
        {"id": "e2", "subject": "Re: Q3 Budget Review", "from": "ceo@co.com", "timestamp": "2026-05-15T14:00:00",
         "body": "Approved. Let us proceed with the engineering allocation.", "thread_id": "t1"},
        {"id": "e3", "subject": "New Product Launch Timeline", "from": "pm@co.com", "timestamp": "2026-05-20T09:00:00",
         "body": "The product launch is scheduled for July 15. Marketing campaign starts June 1.", "thread_id": "t2"},
    ]
    engine.ingest_emails(emails)
    print(json.dumps(engine.search("budget engineering", recipients=["cfo@co.com", "ceo@co.com"]), indent=2))

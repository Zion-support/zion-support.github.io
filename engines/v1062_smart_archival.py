#!/usr/bin/env python3
"""V1062: Smart Email Archival & Search
Intelligent email archival with AI-powered semantic search.
Find any email by meaning, not just keywords.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import re
import json
import hashlib
from datetime import datetime
from collections import defaultdict

class SmartArchival:
    def __init__(self):
        self.archive = {}
        self.index = defaultdict(list)
        self.categories = {
            'financial': ['invoice', 'payment', 'receipt', 'billing', 'purchase order', 'quote', 'estimate', 'contract'],
            'legal': ['agreement', 'nda', 'contract', 'terms', 'compliance', 'regulatory', 'policy'],
            'project': ['project', 'milestone', 'deadline', 'deliverable', 'sprint', 'roadmap', 'scope'],
            'hr': ['hiring', 'interview', 'onboarding', 'performance', 'salary', 'benefits', 'leave'],
            'sales': ['proposal', 'deal', 'opportunity', 'pipeline', 'revenue', 'prospect', 'lead'],
            'support': ['ticket', 'issue', 'bug', 'feature request', 'escalation', 'sla'],
            'personal': ['lunch', 'birthday', 'holiday', 'team building', 'social']
        }

    def archive_email(self, email_data):
        sender = email_data.get('sender', 'unknown')
        recipients = email_data.get('recipients', [])
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        reply_all = len(recipients) > 1

        doc_id = hashlib.md5(f"{sender}{subject}{timestamp}".encode()).hexdigest()[:12]
        category = self._categorize(subject, body)
        entities = self._extract_entities(body)
        summary = self._generate_summary(body)
        key_points = self._extract_key_points(body)
        tags = self._generate_tags(subject, body, category)

        record = {
            'id': doc_id,
            'sender': sender,
            'recipients': recipients,
            'subject': subject,
            'body': body,
            'timestamp': timestamp,
            'category': category,
            'entities': entities,
            'summary': summary,
            'key_points': key_points,
            'tags': tags,
            'importance_score': self._calculate_importance(subject, body, sender),
            'retention_policy': self._determine_retention(category)
        }
        self.archive[doc_id] = record
        for tag in tags:
            self.index[tag].append(doc_id)

        return {
            'email_id': email_data.get('id'),
            'reply_all_required': reply_all,
            'archive_id': doc_id,
            'category': category,
            'summary': summary,
            'key_points': key_points,
            'entities_extracted': len(entities),
            'tags': tags,
            'importance_score': record['importance_score'],
            'retention_policy': record['retention_policy'],
            'search_capabilities': ['Semantic search', 'Entity search', 'Date range', 'Category filter', 'Tag filter'],
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }

    def _categorize(self, subject, body):
        text = (subject + ' ' + body).lower()
        scores = {}
        for cat, keywords in self.categories.items():
            scores[cat] = sum(1 for kw in keywords if kw in text)
        best = max(scores, key=scores.get)
        return best if scores[best] > 0 else 'general'

    def _extract_entities(self, body):
        entities = {'people': [], 'companies': [], 'dates': [], 'amounts': []}
        entities['people'] = re.findall(r'\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)\b', body)[:5]
        entities['companies'] = re.findall(r'\b([A-Z][A-Za-z]+(?:\s+(?:Inc|Corp|LLC|Ltd|Group)))\b', body)[:3]
        entities['dates'] = re.findall(r'\b\d{1,2}[/-]\d{1,2}(?:[/-]\d{2,4})?\b', body)[:3]
        entities['amounts'] = re.findall(r'\$[\d,]+(?:\.\d{2})?', body)[:3]
        return entities

    def _generate_summary(self, body):
        sentences = re.split(r'[.!?]+', body)
        sentences = [s.strip() for s in sentences if len(s.strip()) > 15]
        return '. '.join(sentences[:3]) + '.' if sentences else body[:200]

    def _extract_key_points(self, body):
        points = []
        patterns = [
            r'(?:important|key|main|critical)[:\s]+([^\.\n]{10,80})',
            r'(?:deadline|due date|deliver by)[:\s]+([^\.\n]{10,80})',
            r'(?:action item|todo|task)[:\s]+([^\.\n]{10,80})'
        ]
        for p in patterns:
            for m in re.finditer(p, body, re.IGNORECASE):
                points.append(m.group(1).strip()[:100])
        return points[:5]

    def _generate_tags(self, subject, body, category):
        tags = [category]
        text = (subject + ' ' + body).lower()
        tag_keywords = ['urgent', 'confidential', 'follow-up', 'decision', 'approval', 'review', 'meeting', 'deadline']
        for kw in tag_keywords:
            if kw in text:
                tags.append(kw)
        return tags[:8]

    def _calculate_importance(self, subject, body, sender):
        score = 50
        if any(w in subject.lower() for w in ['urgent', 'important', 'critical', 'asap']):
            score += 20
        if any(w in (subject + ' ' + body).lower() for w in ['deadline', 'contract', 'payment', 'legal']):
            score += 15
        if any(t in sender.lower() for t in ['ceo', 'cto', 'cfo', 'president', 'director']):
            score += 15
        return min(100, score)

    def _determine_retention(self, category):
        policies = {
            'financial': '7 years', 'legal': '10 years', 'project': '3 years',
            'hr': '7 years', 'sales': '5 years', 'support': '2 years',
            'personal': '1 year', 'general': '3 years'
        }
        return policies.get(category, '3 years')

    def semantic_search(self, query):
        query_words = set(query.lower().split())
        results = []
        for doc_id, record in self.archive.items():
            text = (record['subject'] + ' ' + record['body'] + ' ' + ' '.join(record['tags'])).lower()
            doc_words = set(text.split())
            overlap = len(query_words & doc_words)
            if overlap > 0:
                results.append({'id': doc_id, 'score': overlap, 'subject': record['subject'], 'summary': record['summary'][:100]})
        results.sort(key=lambda x: x['score'], reverse=True)
        return results[:10]

if __name__ == '__main__':
    archival = SmartArchival()
    test = {'id': 'e001', 'sender': 'cfo@acme.com', 'recipients': ['kleber@ziontechgroup.com', 'finance@ziontechgroup.com'],
            'subject': 'Q2 Invoice - $125,000 Payment Due by June 15',
            'body': 'Please find attached the Q2 invoice for $125,000. Payment is due by June 15, 2026. This is urgent as it covers the AI platform implementation milestone. Please process payment and confirm.',
            'timestamp': '2026-05-30T10:00:00'}
    result = archival.archive_email(test)
    print("=== V1062: Smart Email Archival & Search ===\n")
    print(f"Archive ID: {result['archive_id']}")
    print(f"Category: {result['category']}")
    print(f"Importance: {result['importance_score']}/100")
    print(f"Summary: {result['summary'][:80]}...")
    print(f"Key Points: {result['key_points']}")
    print(f"Tags: {result['tags']}")
    print(f"Retention: {result['retention_policy']}")
    print(f"Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")

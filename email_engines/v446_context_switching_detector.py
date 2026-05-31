#!/usr/bin/env python3
"""
V446 - AI Email Context Switching Detector
Detects when users switch between multiple email threads and helps maintain context.
Features: Thread tracking, context summaries, confusion prevention, quick recall.
CRITICAL: Always enforces reply-all for multi-recipient emails.
"""

import json
import re
import hashlib
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Any


class ContextSwitchingDetector:
    """Detects and manages context switching across email threads."""
    
    def __init__(self):
        self.active_threads: Dict[str, Dict] = {}
        self.context_cache: Dict[str, Dict] = {}
        self.switch_history: List[Dict] = []
        
    def analyze_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze incoming email and detect context switches."""
        thread_id = self._extract_thread_id(email)
        recipients = email.get('to', []) + email.get('cc', [])
        subject = email.get('subject', '')
        body = email.get('body', '')
        
        # Detect if this is a new thread or context switch
        is_context_switch = self._detect_context_switch(thread_id, subject, body)
        
        # Build context summary for this thread
        context_summary = self._build_context_summary(thread_id, email)
        
        # Get related threads
        related_threads = self._find_related_threads(thread_id, subject, body)
        
        # Check for potential confusion
        confusion_warnings = self._check_confusion_risk(thread_id, subject, body)
        
        # CRITICAL: Enforce reply-all
        reply_all_required = len(recipients) > 1
        
        result = {
            'engine': 'V446_ContextSwitchingDetector',
            'thread_id': thread_id,
            'is_context_switch': is_context_switch,
            'context_summary': context_summary,
            'active_threads_count': len(self.active_threads),
            'related_threads': related_threads,
            'confusion_warnings': confusion_warnings,
            'reply_all_required': reply_all_required,
            'reply_all_enforced': reply_all_required,
            'recipients': recipients,
            'suggested_actions': self._suggest_actions(is_context_switch, confusion_warnings),
            'timestamp': datetime.now().isoformat()
        }
        
        # Update thread tracking
        self._update_thread(thread_id, email)
        
        return result
    
    def _extract_thread_id(self, email: Dict) -> str:
        """Extract or generate thread ID."""
        if 'message_id' in email:
            return email['message_id']
        if 'in_reply_to' in email:
            return email['in_reply_to']
        subject = email.get('subject', '')
        sender = email.get('from', '')
        return hashlib.md5(f"{subject}:{sender}".encode()).hexdigest()[:16]
    
    def _detect_context_switch(self, thread_id: str, subject: str, body: str) -> bool:
        """Detect if this email represents a context switch."""
        if thread_id not in self.active_threads:
            return len(self.active_threads) > 0
        
        last_active = max(self.active_threads.values(), 
                         key=lambda x: x.get('last_activity', ''), default=None)
        if last_active and last_active.get('thread_id') != thread_id:
            time_diff = datetime.now() - datetime.fromisoformat(last_active.get('last_activity', datetime.now().isoformat()))
            if time_diff < timedelta(minutes=5):
                return True
        return False
    
    def _build_context_summary(self, thread_id: str, email: Dict) -> Dict:
        """Build a quick context summary for the thread."""
        subject = email.get('subject', '')
        body = email.get('body', '')
        
        key_topics = self._extract_topics(subject + ' ' + body)
        action_items = self._extract_action_items(body)
        decisions = self._extract_decisions(body)
        
        return {
            'thread_id': thread_id,
            'subject': subject,
            'key_topics': key_topics[:5],
            'action_items': action_items[:3],
            'decisions_made': decisions[:3],
            'participants': self._extract_participants(email),
            'last_activity': datetime.now().isoformat()
        }
    
    def _extract_topics(self, text: str) -> List[str]:
        """Extract key topics from text."""
        words = re.findall(r'\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*\b', text)
        topics = list(set(words))[:10]
        return topics
    
    def _extract_action_items(self, body: str) -> List[str]:
        """Extract action items from email body."""
        patterns = [
            r'(?:please|kindly)\s+(.+?)(?:\.|$)',
            r'(?:need to|must|should)\s+(.+?)(?:\.|$)',
            r'(?:action item|todo|task)[:\s]+(.+?)(?:\.|$)',
        ]
        items = []
        for pattern in patterns:
            matches = re.findall(pattern, body, re.IGNORECASE)
            items.extend(matches)
        return items[:5]
    
    def _extract_decisions(self, body: str) -> List[str]:
        """Extract decisions made in the email."""
        patterns = [
            r'(?:decided|agreed|approved|confirmed)\s+(?:to|that)\s+(.+?)(?:\.|$)',
            r'(?:we will|let\'s)\s+(.+?)(?:\.|$)',
        ]
        decisions = []
        for pattern in patterns:
            matches = re.findall(pattern, body, re.IGNORECASE)
            decisions.extend(matches)
        return decisions[:3]
    
    def _extract_participants(self, email: Dict) -> List[str]:
        """Extract all participants."""
        participants = []
        if 'from' in email:
            participants.append(email['from'])
        for field in ['to', 'cc', 'bcc']:
            if field in email:
                if isinstance(email[field], list):
                    participants.extend(email[field])
                else:
                    participants.append(email[field])
        return list(set(participants))
    
    def _find_related_threads(self, thread_id: str, subject: str, body: str) -> List[Dict]:
        """Find threads related to the current one."""
        related = []
        keywords = set(re.findall(r'\b\w{4,}\b', (subject + ' ' + body).lower()))
        
        for tid, thread in self.active_threads.items():
            if tid == thread_id:
                continue
            thread_keywords = set(re.findall(r'\b\w{4,}\b', thread.get('subject', '').lower()))
            overlap = keywords & thread_keywords
            if len(overlap) >= 2:
                related.append({
                    'thread_id': tid,
                    'subject': thread.get('subject', ''),
                    'relevance_score': len(overlap) / max(len(keywords), 1),
                    'last_activity': thread.get('last_activity', '')
                })
        
        return sorted(related, key=lambda x: x['relevance_score'], reverse=True)[:3]
    
    def _check_confusion_risk(self, thread_id: str, subject: str, body: str) -> List[Dict]:
        """Check for potential confusion risks."""
        warnings = []
        
        similar_subjects = [
            t for t in self.active_threads.values()
            if t.get('subject', '').lower()[:20] == subject.lower()[:20]
            and t.get('thread_id') != thread_id
        ]
        
        if similar_subjects:
            warnings.append({
                'type': 'similar_subject',
                'severity': 'high',
                'message': f'Found {len(similar_subjects)} thread(s) with similar subjects. Double-check which thread you are replying to.'
            })
        
        return warnings
    
    def _suggest_actions(self, is_switch: bool, warnings: List) -> List[str]:
        """Suggest actions based on context."""
        actions = []
        if is_switch:
            actions.append("Review context summary before responding")
            actions.append("Check for pending action items in previous thread")
        if warnings:
            actions.append("Verify correct thread before replying")
        actions.append("Use reply-all for multi-recipient emails")
        return actions
    
    def _update_thread(self, thread_id: str, email: Dict):
        """Update thread tracking."""
        self.active_threads[thread_id] = {
            'thread_id': thread_id,
            'subject': email.get('subject', ''),
            'last_activity': datetime.now().isoformat(),
            'message_count': self.active_threads.get(thread_id, {}).get('message_count', 0) + 1,
            'participants': self._extract_participants(email)
        }


def main():
    """Test V446 engine."""
    engine = ContextSwitchingDetector()
    
    test_email = {
        'from': 'client@acme.com',
        'to': ['kleber@ziontechgroup.com', 'sales@ziontechgroup.com'],
        'cc': ['manager@acme.com'],
        'subject': 'Re: Enterprise AI Platform Implementation',
        'body': 'Hi Kleber, We decided to proceed with the Enterprise AI Platform. Please prepare the implementation timeline. We need to have the first milestone ready by Q3.',
        'message_id': 'msg-446-001'
    }
    
    result = engine.analyze_email(test_email)
    print(json.dumps(result, indent=2))
    print(f"\n✅ Reply-all enforced: {result['reply_all_enforced']}")
    print(f"✅ Context switch detected: {result['is_context_switch']}")
    print(f"✅ Topics: {result['context_summary']['key_topics']}")
    print(f"✅ Action items: {result['context_summary']['action_items']}")


if __name__ == '__main__':
    main()

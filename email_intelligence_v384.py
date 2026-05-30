"""
V384: Email Priority Decay Engine

Dynamically adjusts email priority over time based on age, sender importance,
and content urgency. Emails that remain unaddressed automatically escalate
in priority to prevent oversight.
"""

import json
import math
from datetime import datetime, timedelta
from typing import Dict, List


class PriorityDecayEngine:
    """Manages dynamic email priority with decay and escalation."""
    
    def __init__(self):
        self.sender_tiers = {
            'executive': 1.5,  # CEO, CTO, etc.
            'manager': 1.3,    # Direct managers
            'peer': 1.0,       # Colleagues
            'external': 0.8,   # External contacts
            'newsletter': 0.3  # Automated/newsletter
        }
        
    def calculate_priority(self, email: Dict, current_time: datetime = None) -> Dict:
        """
        Calculate dynamic priority for an email.
        
        Priority formula:
        base_priority * sender_multiplier * urgency_multiplier * decay_factor
        
        Args:
            email: Email dict with 'timestamp', 'sender', 'body', 'subject' keys
            current_time: Current time for age calculation
            
        Returns:
            Dict with priority score and breakdown
        """
        if current_time is None:
            current_time = datetime.now()
        
        # Base priority from content analysis
        base_priority = self._analyze_content_priority(email)
        
        # Sender tier multiplier
        sender = email.get('sender', '')
        sender_tier = self._classify_sender(sender)
        sender_multiplier = self.sender_tiers.get(sender_tier, 1.0)
        
        # Urgency multiplier from content
        urgency_multiplier = self._detect_urgency(email.get('body', ''))
        
        # Age-based escalation (older emails get higher priority if unread)
        email_time = datetime.fromisoformat(email.get('timestamp', current_time.isoformat()))
        age_hours = (current_time - email_time).total_seconds() / 3600
        decay_factor = self._calculate_escalation(age_hours)
        
        # Final priority score (0-100)
        priority_score = min(100, base_priority * sender_multiplier * urgency_multiplier * decay_factor)
        
        # Priority level
        if priority_score >= 80:
            level = 'critical'
        elif priority_score >= 60:
            level = 'high'
        elif priority_score >= 40:
            level = 'medium'
        else:
            level = 'low'
        
        # Check reply-all requirement
        reply_all_required = len(email.get('recipients', [])) > 1
        
        return {
            'engine': 'V384',
            'priority_score': round(priority_score, 2),
            'priority_level': level,
            'breakdown': {
                'base_priority': base_priority,
                'sender_tier': sender_tier,
                'sender_multiplier': sender_multiplier,
                'urgency_multiplier': urgency_multiplier,
                'age_hours': round(age_hours, 2),
                'decay_factor': decay_factor
            },
            'reply_all_required': reply_all_required,
            'timestamp': current_time.isoformat()
        }
    
    def _analyze_content_priority(self, email: Dict) -> float:
        """Analyze email content for priority indicators."""
        text = (email.get('subject', '') + ' ' + email.get('body', '')).lower()
        
        high_priority_keywords = ['urgent', 'asap', 'immediately', 'critical', 'deadline', 'emergency']
        medium_priority_keywords = ['important', 'please', 'request', 'meeting', 'review']
        
        score = 30  # Base score
        
        for keyword in high_priority_keywords:
            if keyword in text:
                score += 20
        
        for keyword in medium_priority_keywords:
            if keyword in text:
                score += 10
        
        return min(100, score)
    
    def _classify_sender(self, sender: str) -> str:
        """Classify sender into tier based on email pattern."""
        sender_lower = sender.lower()
        
        if any(title in sender_lower for title in ['ceo', 'cto', 'cfo', 'president', 'executive']):
            return 'executive'
        elif any(title in sender_lower for title in ['manager', 'director', 'lead', 'head']):
            return 'manager'
        elif any(domain in sender_lower for domain in ['newsletter', 'noreply', 'automated']):
            return 'newsletter'
        elif '@' in sender_lower:
            return 'peer'  # Default for known senders
        else:
            return 'external'
    
    def _detect_urgency(self, body: str) -> float:
        """Detect urgency level from email body."""
        body_lower = body.lower()
        
        urgent_phrases = ['as soon as possible', 'immediately', 'right away', 'urgent', 'emergency']
        if any(phrase in body_lower for phrase in urgent_phrases):
            return 1.5
        
        time_sensitive = ['today', 'tomorrow', 'this week', 'by eod', 'by cob']
        if any(phrase in body_lower for phrase in time_sensitive):
            return 1.2
        
        return 1.0
    
    def _calculate_escalation(self, age_hours: float) -> float:
        """Calculate escalation factor based on email age."""
        if age_hours < 1:
            return 1.0
        elif age_hours < 4:
            return 1.0 + (age_hours * 0.1)
        elif age_hours < 24:
            return 1.4 + ((age_hours - 4) * 0.05)
        else:
            # Cap escalation at 2.5x for very old emails
            return min(2.5, 2.0 + ((age_hours - 24) * 0.01))


if __name__ == '__main__':
    engine = PriorityDecayEngine()
    
    sample_email = {
        'sender': 'ceo@company.com',
        'subject': 'URGENT: Q2 Budget Review',
        'body': 'Please review the attached budget proposal immediately. We need approval by EOD today.',
        'timestamp': (datetime.now() - timedelta(hours=3)).isoformat(),
        'recipients': ['cfo@company.com', 'finance@company.com']
    }
    
    result = engine.calculate_priority(sample_email)
    print(json.dumps(result, indent=2))

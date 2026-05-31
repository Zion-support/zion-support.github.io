#!/usr/bin/env python3
"""
V472 - AI Email Priority Queue Manager
Intelligent email prioritization based on sender, content, urgency, and business context.
Features: Priority scoring, smart queuing, deadline detection, VIP sender recognition.
CRITICAL: Always enforces reply-all for multi-recipient emails.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Any


class PriorityQueueManager:
    """Manages intelligent email priority queuing."""
    
    VIP_SENDERS = ['ceo', 'president', 'director', 'vp', 'executive']
    URGENCY_KEYWORDS = {
        'critical': ['urgent', 'asap', 'immediately', 'emergency', 'critical', 'now'],
        'high': ['important', 'priority', 'deadline', 'soon', 'quick'],
        'medium': ['when you can', 'at your convenience', 'no rush']
    }
    
    def analyze_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze email and assign priority."""
        sender = email.get('from', '')
        subject = email.get('subject', '')
        body = email.get('body', '')
        recipients = email.get('to', []) + email.get('cc', [])
        
        # Calculate priority score
        priority_score = self._calculate_priority_score(email)
        
        # Detect deadlines
        deadlines = self._detect_deadlines(body + ' ' + subject)
        
        # Determine priority level
        priority_level = self._determine_priority_level(priority_score)
        
        # Generate queue position
        queue_position = self._calculate_queue_position(priority_score)
        
        reply_all_required = len(recipients) > 1
        
        return {
            'engine': 'V472_PriorityQueueManager',
            'priority_score': priority_score,
            'priority_level': priority_level,
            'queue_position': queue_position,
            'deadlines_detected': deadlines,
            'sender_importance': self._assess_sender_importance(sender),
            'estimated_response_time': self._estimate_response_time(priority_level),
            'reply_all_required': reply_all_required,
            'reply_all_enforced': reply_all_required,
            'recipients': recipients,
            'timestamp': datetime.now().isoformat()
        }
    
    def _calculate_priority_score(self, email: Dict) -> int:
        """Calculate overall priority score (0-100)."""
        score = 50  # Base score
        
        # Sender importance (0-25 points)
        sender_score = self._assess_sender_importance(email.get('from', ''))
        score += sender_score.get('points', 0)
        
        # Urgency keywords (0-20 points)
        text = (email.get('subject', '') + ' ' + email.get('body', '')).lower()
        for level, keywords in self.URGENCY_KEYWORDS.items():
            matches = sum(1 for kw in keywords if kw in text)
            if level == 'critical':
                score += matches * 10
            elif level == 'high':
                score += matches * 5
            elif level == 'medium':
                score -= matches * 5
        
        # Deadline detection (0-15 points)
        deadlines = self._detect_deadlines(text)
        score += len(deadlines) * 5
        
        # Direct recipient vs CC (0-10 points)
        if email.get('from') in email.get('to', []):
            score += 10
        
        return min(100, max(0, score))
    
    def _assess_sender_importance(self, sender: str) -> Dict:
        """Assess sender importance."""
        sender_lower = sender.lower()
        
        for vip in self.VIP_SENDERS:
            if vip in sender_lower:
                return {'level': 'vip', 'points': 25, 'reason': f'{vip.title()} detected'}
        
        if 'client' in sender_lower or 'customer' in sender_lower:
            return {'level': 'high', 'points': 15, 'reason': 'Client/Customer'}
        
        if 'ziontechgroup.com' in sender_lower:
            return {'level': 'internal', 'points': 10, 'reason': 'Internal team'}
        
        return {'level': 'standard', 'points': 5, 'reason': 'Standard sender'}
    
    def _detect_deadlines(self, text: str) -> List[Dict]:
        """Detect deadlines in text."""
        deadlines = []
        
        patterns = [
            (r'\b(?:by|before|deadline)[:\s]+(\w+\s+\d{1,2}(?:st|nd|rd|th)?)', 'explicit'),
            (r'\b(?:today|tonight|eod|end of day)\b', 'immediate'),
            (r'\b(?:tomorrow|next week|this week)\b', 'short_term'),
            (r'\b(\d{1,2}:\d{2}\s*(?:am|pm)?)\b', 'time_specific')
        ]
        
        for pattern, dtype in patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            for match in matches:
                deadlines.append({
                    'deadline': match if isinstance(match, str) else str(match),
                    'type': dtype,
                    'urgency': 'high' if dtype in ['immediate', 'time_specific'] else 'medium'
                })
        
        return deadlines
    
    def _determine_priority_level(self, score: int) -> str:
        """Determine priority level from score."""
        if score >= 80:
            return 'critical'
        elif score >= 60:
            return 'high'
        elif score >= 40:
            return 'medium'
        else:
            return 'low'
    
    def _calculate_queue_position(self, score: int) -> Dict:
        """Calculate position in priority queue."""
        if score >= 80:
            return {'position': 'immediate', 'action': 'respond within 15 minutes'}
        elif score >= 60:
            return {'position': 'urgent', 'action': 'respond within 1 hour'}
        elif score >= 40:
            return {'position': 'normal', 'action': 'respond within 4 hours'}
        else:
            return {'position': 'low', 'action': 'respond within 24 hours'}
    
    def _estimate_response_time(self, priority: str) -> str:
        """Estimate appropriate response time."""
        times = {
            'critical': '15 minutes',
            'high': '1 hour',
            'medium': '4 hours',
            'low': '24 hours'
        }
        return times.get(priority, '24 hours')


def main():
    """Test V472 engine."""
    engine = PriorityQueueManager()
    
    test_email = {
        'from': 'ceo@client.com',
        'to': ['kleber@ziontechgroup.com', 'team@ziontechgroup.com'],
        'cc': ['assistant@client.com'],
        'subject': 'URGENT: Critical Issue - Need Response ASAP',
        'body': 'We have a critical issue that needs immediate attention. Please respond by 5 PM today.'
    }
    
    result = engine.analyze_email(test_email)
    print(json.dumps(result, indent=2))
    print(f"\n✅ Priority score: {result['priority_score']}/100")
    print(f"✅ Priority level: {result['priority_level']}")
    print(f"✅ Queue position: {result['queue_position']['position']}")
    print(f"✅ Deadlines: {len(result['deadlines_detected'])}")
    print(f"✅ Reply-all enforced: {result['reply_all_enforced']}")


if __name__ == '__main__':
    main()

#!/usr/bin/env python3
"""
V927: Email Priority Decay Engine
Dynamically adjusts email priority based on time elapsed, urgency indicators, and sender importance.
Prevents priority inflation and ensures truly urgent items get attention first.
"""

import re
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional

class PriorityDecayEngine:
    def __init__(self):
        self.urgency_keywords = {
            'critical': ['urgent', 'emergency', 'critical', 'asap', 'immediately', 'now'],
            'high': ['important', 'priority', 'soon', 'quick', 'fast'],
            'medium': ['please', 'when possible', 'soon'],
            'low': ['fyi', 'no rush', 'whenever']
        }
        
        self.sender_importance = {}  # Maps sender to importance score
        
    def calculate_dynamic_priority(self, email: Dict[str, Any], current_time: Optional[datetime] = None) -> Dict[str, Any]:
        """Calculate dynamic priority with time decay."""
        if current_time is None:
            current_time = datetime.now()
        
        # Extract email metadata
        email_time_str = email.get('timestamp', current_time.isoformat())
        try:
            email_time = datetime.fromisoformat(email_time_str.replace('Z', '+00:00'))
        except:
            email_time = current_time
        
        sender = email.get('sender', 'unknown')
        subject = email.get('subject', '').lower()
        body = email.get('body', '').lower()
        recipients = email.get('recipients', [])
        
        # Calculate base priority
        base_priority = self._calculate_base_priority(subject, body, sender)
        
        # Calculate time decay
        time_elapsed = current_time - email_time
        decay_factor = self._calculate_decay_factor(time_elapsed, base_priority['level'])
        
        # Calculate sender importance boost
        sender_boost = self._get_sender_importance(sender)
        
        # Calculate final priority score
        final_score = self._calculate_final_score(base_priority['score'], decay_factor, sender_boost)
        
        # Determine priority level
        priority_level = self._score_to_level(final_score)
        
        # Check if reply-all is required
        reply_all_required = len(recipients) > 1
        
        result = {
            'email_id': email.get('id', ''),
            'original_priority': base_priority['level'],
            'original_score': base_priority['score'],
            'time_elapsed': str(time_elapsed),
            'decay_factor': round(decay_factor, 2),
            'sender_importance': sender_boost,
            'final_score': round(final_score, 2),
            'final_priority': priority_level,
            'should_respond': self._should_respond(final_score, time_elapsed),
            'response_deadline': self._calculate_deadline(priority_level, email_time),
            'reply_all_required': reply_all_required,
            'actions': self._generate_priority_actions(priority_level, time_elapsed, reply_all_required)
        }
        
        return result
    
    def _calculate_base_priority(self, subject: str, body: str, sender: str) -> Dict[str, Any]:
        """Calculate base priority from email content."""
        text = f"{subject} {body}"
        
        # Count urgency indicators
        critical_count = sum(1 for kw in self.urgency_keywords['critical'] if kw in text)
        high_count = sum(1 for kw in self.urgency_keywords['high'] if kw in text)
        medium_count = sum(1 for kw in self.urgency_keywords['medium'] if kw in text)
        low_count = sum(1 for kw in self.urgency_keywords['low'] if kw in text)
        
        # Determine level
        if critical_count > 0 or '!!!' in text:
            level = 'critical'
            score = 100
        elif high_count > 1:
            level = 'high'
            score = 75
        elif high_count > 0 or medium_count > 2:
            level = 'medium'
            score = 50
        elif low_count > 0:
            level = 'low'
            score = 25
        else:
            level = 'normal'
            score = 40
        
        return {'level': level, 'score': score}
    
    def _calculate_decay_factor(self, time_elapsed: timedelta, priority_level: str) -> float:
        """Calculate how priority decays over time."""
        hours = time_elapsed.total_seconds() / 3600
        
        # Different decay rates for different priorities
        if priority_level == 'critical':
            # Critical priorities decay slowly (maintain urgency)
            decay_rate = 0.02  # 2% per hour
        elif priority_level == 'high':
            # High priorities decay moderately
            decay_rate = 0.05  # 5% per hour
        elif priority_level == 'medium':
            # Medium priorities decay faster
            decay_rate = 0.10  # 10% per hour
        else:
            # Low priorities decay quickly
            decay_rate = 0.15  # 15% per hour
        
        # Calculate decay factor (0 to 1)
        decay_factor = max(0.1, 1.0 - (decay_rate * hours))
        
        return decay_factor
    
    def _get_sender_importance(self, sender: str) -> float:
        """Get sender importance boost."""
        # Check if sender has custom importance
        if sender in self.sender_importance:
            return self.sender_importance[sender]
        
        # Default importance based on domain patterns
        sender_lower = sender.lower()
        
        if any(pattern in sender_lower for pattern in ['ceo', 'president', 'executive', 'director']):
            return 1.3  # 30% boost
        elif any(pattern in sender_lower for pattern in ['manager', 'lead', 'head']):
            return 1.2  # 20% boost
        elif 'vip' in sender_lower or 'important' in sender_lower:
            return 1.5  # 50% boost
        else:
            return 1.0  # No boost
    
    def _calculate_final_score(self, base_score: float, decay_factor: float, sender_boost: float) -> float:
        """Calculate final priority score."""
        decayed_score = base_score * decay_factor
        boosted_score = decayed_score * sender_boost
        
        # Cap at 100
        return min(100, boosted_score)
    
    def _score_to_level(self, score: float) -> str:
        """Convert score to priority level."""
        if score >= 80:
            return 'critical'
        elif score >= 60:
            return 'high'
        elif score >= 40:
            return 'medium'
        elif score >= 20:
            return 'low'
        else:
            return 'informational'
    
    def _should_respond(self, score: float, time_elapsed: timedelta) -> bool:
        """Determine if response is still needed."""
        hours = time_elapsed.total_seconds() / 3600
        
        # Critical items always need response
        if score >= 80:
            return True
        
        # High priority within 48 hours
        if score >= 60 and hours < 48:
            return True
        
        # Medium priority within 24 hours
        if score >= 40 and hours < 24:
            return True
        
        # Low priority within 8 hours
        if score >= 20 and hours < 8:
            return True
        
        return False
    
    def _calculate_deadline(self, priority_level: str, email_time: datetime) -> str:
        """Calculate response deadline."""
        if priority_level == 'critical':
            deadline = email_time + timedelta(hours=2)
        elif priority_level == 'high':
            deadline = email_time + timedelta(hours=8)
        elif priority_level == 'medium':
            deadline = email_time + timedelta(hours=24)
        elif priority_level == 'low':
            deadline = email_time + timedelta(hours=72)
        else:
            deadline = email_time + timedelta(days=7)
        
        return deadline.isoformat()
    
    def _generate_priority_actions(self, priority_level: str, time_elapsed: timedelta, reply_all: bool) -> List[str]:
        """Generate recommended actions based on priority."""
        actions = []
        hours = time_elapsed.total_seconds() / 3600
        
        if priority_level == 'critical':
            actions.append("Respond immediately (within 2 hours)")
            if hours > 2:
                actions.append("⚠️ OVERDUE: Escalate to management")
        elif priority_level == 'high':
            actions.append("Respond within 8 hours")
            if hours > 8:
                actions.append("⚠️ OVERDUE: Prioritize now")
        elif priority_level == 'medium':
            actions.append("Respond within 24 hours")
            if hours > 24:
                actions.append("Consider if still relevant")
        elif priority_level == 'low':
            actions.append("Respond when convenient")
        else:
            actions.append("No response required (informational)")
        
        if reply_all:
            actions.append("⚠️ REPLY ALL: Multiple recipients - ensure all are included")
        
        return actions


def main():
    """Test the Priority Decay Engine."""
    engine = PriorityDecayEngine()
    
    # Test case: email sent 6 hours ago with high priority
    current_time = datetime(2026, 5, 31, 16, 0, 0)
    
    test_emails = [
        {
            'id': 'email_1',
            'timestamp': '2026-05-31T10:00:00',  # 6 hours ago
            'sender': 'ceo@client.com',
            'subject': 'URGENT: Critical issue with deployment',
            'body': 'We have a critical production issue. Need immediate assistance ASAP!!!',
            'recipients': ['team@company.com', 'support@company.com', 'manager@company.com']
        },
        {
            'id': 'email_2',
            'timestamp': '2026-05-30T09:00:00',  # 31 hours ago
            'sender': 'colleague@company.com',
            'subject': 'Meeting notes',
            'body': 'Here are the meeting notes from yesterday. Please review when possible.',
            'recipients': ['team@company.com']
        }
    ]
    
    print("=" * 60)
    print("V927: Priority Decay Engine - Test Results")
    print("=" * 60)
    
    for email in test_emails:
        result = engine.calculate_dynamic_priority(email, current_time)
        
        print(f"\nEmail: {email['subject']}")
        print(f"  Original Priority: {result['original_priority']} (score: {result['original_score']})")
        print(f"  Time Elapsed: {result['time_elapsed']}")
        print(f"  Decay Factor: {result['decay_factor']}")
        print(f"  Sender Boost: {result['sender_importance']}")
        print(f"  Final Priority: {result['final_priority']} (score: {result['final_score']})")
        print(f"  Should Respond: {result['should_respond']}")
        print(f"  Actions:")
        for action in result['actions']:
            print(f"    - {action}")
    
    print("\n✅ V927 Priority Decay Engine: OPERATIONAL")


if __name__ == '__main__':
    main()

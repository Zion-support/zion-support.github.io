#!/usr/bin/env python3
"""
V248: Smart Notification Engine
Batch non-urgent emails into digestible summaries, send push notifications
only for high-priority emails, respect focus time and working hours.
CRITICAL: Enforces reply-all for multi-recipient emails.
"""
import json
from datetime import datetime, time
from typing import Dict, List, Tuple


class SmartNotificationEngine:
    """Intelligent email notification batching and focus time management."""
    
    def __init__(self):
        self.working_hours = {'start': time(9, 0), 'end': time(17, 0)}
        self.focus_time_blocks = [
            {'start': time(9, 0), 'end': time(11, 0)},   # Morning focus
            {'start': time(14, 0), 'end': time(16, 0)}   # Afternoon focus
        ]
        self.notification_preferences = {
            'critical_threshold': 80,  # Score threshold for immediate notification
            'high_threshold': 60,      # Score threshold for batch notification
            'batch_interval_minutes': 30  # How often to send batch notifications
        }
        self.email_queue = []
        self.last_batch_time = datetime.now()
    
    def is_focus_time(self, current_time: datetime = None) -> bool:
        """Check if current time is within a focus time block."""
        if not current_time:
            current_time = datetime.now()
        
        current_time_only = current_time.time()
        
        for block in self.focus_time_blocks:
            if block['start'] <= current_time_only <= block['end']:
                return True
        
        return False
    
    def is_working_hours(self, current_time: datetime = None) -> bool:
        """Check if current time is within working hours."""
        if not current_time:
            current_time = datetime.now()
        
        current_time_only = current_time.time()
        return self.working_hours['start'] <= current_time_only <= self.working_hours['end']
    
    def should_notify_immediately(self, email_score: int, current_time: datetime = None) -> Tuple[bool, str]:
        """Determine if email requires immediate notification."""
        if not current_time:
            current_time = datetime.now()
        
        # Critical emails always notify (unless outside working hours)
        if email_score >= self.notification_preferences['critical_threshold']:
            if self.is_working_hours(current_time):
                return True, "Critical priority - immediate notification"
            else:
                return False, "Critical but outside working hours - queue for morning"
        
        # High priority emails notify unless in focus time
        if email_score >= self.notification_preferences['high_threshold']:
            if self.is_focus_time(current_time):
                return False, "High priority but in focus time - batch notification"
            else:
                return True, "High priority - immediate notification"
        
        # Low priority emails always batch
        return False, "Low/medium priority - batch notification"
    
    def queue_email(self, email: Dict, score: int, recipients: List[str] = None):
        """Queue email for batch notification."""
        self.email_queue.append({
            'email': email,
            'score': score,
            'timestamp': datetime.now(),
            'recipients': recipients or [],
            'reply_all_required': len(recipients) > 1 if recipients else False
        })
    
    def generate_batch_summary(self) -> Dict:
        """Generate a batch notification summary for queued emails."""
        if not self.email_queue:
            return {'has_emails': False, 'message': 'No emails to notify'}
        
        # Sort by score descending
        sorted_queue = sorted(self.email_queue, key=lambda x: x['score'], reverse=True)
        
        # Categorize emails
        critical = [e for e in sorted_queue if e['score'] >= 80]
        high = [e for e in sorted_queue if 60 <= e['score'] < 80]
        medium = [e for e in sorted_queue if 40 <= e['score'] < 60]
        low = [e for e in sorted_queue if e['score'] < 40]
        
        # Count reply-all requirements
        reply_all_count = sum(1 for e in sorted_queue if e['reply_all_required'])
        
        summary = {
            'has_emails': True,
            'total_count': len(sorted_queue),
            'categories': {
                'critical': len(critical),
                'high': len(high),
                'medium': len(medium),
                'low': len(low)
            },
            'reply_all_required_count': reply_all_count,
            'top_emails': [
                {
                    'id': e['email'].get('id', 'unknown'),
                    'from': e['email'].get('from', 'unknown'),
                    'subject': e['email'].get('subject', 'No subject'),
                    'score': e['score'],
                    'reply_all_required': e['reply_all_required']
                }
                for e in sorted_queue[:5]  # Top 5 emails
            ],
            'batch_period': {
                'start': self.last_batch_time.isoformat(),
                'end': datetime.now().isoformat()
            },
            'action_items': []
        }
        
        # Generate action items
        if critical:
            summary['action_items'].append(f"⚠️ {len(critical)} critical email(s) need immediate attention")
        
        if reply_all_count > 0:
            summary['action_items'].append(f"📨 {reply_all_count} email(s) require reply-all")
        
        if high:
            summary['action_items'].append(f"📧 {len(high)} high-priority email(s) should be addressed soon")
        
        # Clear queue after generating summary
        self.email_queue = []
        self.last_batch_time = datetime.now()
        
        return summary
    
    def process_email(self, email: Dict, score: int, recipients: List[str] = None) -> Dict:
        """Process email and determine notification strategy."""
        current_time = datetime.now()
        notify_now, reason = self.should_notify_immediately(score, current_time)
        
        # CRITICAL: Check reply-all requirement
        reply_all_required = len(recipients) > 1 if recipients else False
        
        result = {
            'email_id': email.get('id', 'unknown'),
            'score': score,
            'notification_decision': {
                'notify_immediately': notify_now,
                'reason': reason,
                'is_focus_time': self.is_focus_time(current_time),
                'is_working_hours': self.is_working_hours(current_time)
            },
            'reply_all_required': reply_all_required,
            'recipient_count': len(recipients) if recipients else 0
        }
        
        # If not notifying immediately, queue the email
        if not notify_now:
            self.queue_email(email, score, recipients)
            result['queued_for_batch'] = True
        else:
            result['queued_for_batch'] = False
        
        return result
    
    def configure_working_hours(self, start_hour: int, end_hour: int):
        """Configure working hours."""
        self.working_hours = {
            'start': time(start_hour, 0),
            'end': time(end_hour, 0)
        }
    
    def configure_focus_time(self, blocks: List[Dict]):
        """Configure focus time blocks."""
        self.focus_time_blocks = [
            {'start': time(b['start_hour'], 0), 'end': time(b['end_hour'], 0)}
            for b in blocks
        ]


if __name__ == '__main__':
    # Test the smart notification engine
    notifier = SmartNotificationEngine()
    
    # Simulate current time (2pm - within focus time)
    test_time = datetime.now().replace(hour=14, minute=30)
    
    test_emails = [
        {'email': {'id': 'e1', 'from': 'ceo@company.com', 'subject': 'URGENT: Board meeting'}, 'score': 95, 'recipients': ['team@company.com', 'manager@company.com']},
        {'email': {'id': 'e2', 'from': 'client@corp.com', 'subject': 'Project deadline'}, 'score': 75, 'recipients': ['pm@company.com']},
        {'email': {'id': 'e3', 'from': 'newsletter@blog.com', 'subject': 'Weekly digest'}, 'score': 25, 'recipients': ['user@company.com']},
        {'email': {'id': 'e4', 'from': 'manager@company.com', 'subject': 'Team update'}, 'score': 55, 'recipients': ['team@company.com', 'lead@company.com', 'manager@company.com']},
    ]
    
    print("=== V248: Smart Notification Engine Test ===\n")
    print(f"Current Time: {test_time.strftime('%I:%M %p')}")
    print(f"Is Focus Time: {notifier.is_focus_time(test_time)}")
    print(f"Is Working Hours: {notifier.is_working_hours(test_time)}\n")
    
    for data in test_emails:
        result = notifier.process_email(data['email'], data['score'], data['recipients'])
        
        print(f"Email: {result['email_id']} (Score: {result['score']})")
        print(f"  Notify Now: {result['notification_decision']['notify_immediately']}")
        print(f"  Reason: {result['notification_decision']['reason']}")
        print(f"  Reply-All Required: {result['reply_all_required']}")
        print(f"  Queued for Batch: {result['queued_for_batch']}")
        print()
    
    # Generate batch summary
    print("📦 Batch Notification Summary:")
    batch = notifier.generate_batch_summary()
    
    if batch['has_emails']:
        print(f"  Total Emails: {batch['total_count']}")
        print(f"  Critical: {batch['categories']['critical']}")
        print(f"  High: {batch['categories']['high']}")
        print(f"  Medium: {batch['categories']['medium']}")
        print(f"  Low: {batch['categories']['low']}")
        print(f"  Reply-All Required: {batch['reply_all_required_count']}")
        print("\n  Action Items:")
        for item in batch['action_items']:
            print(f"    {item}")

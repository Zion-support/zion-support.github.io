"""
V382: Email Meeting Scheduler Intelligence

Automatically detects meeting requests in emails, suggests optimal meeting times
based on participant availability, and generates calendar invites.
"""

import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Optional


class MeetingSchedulerIntelligence:
    """Detects and schedules meetings from email content."""
    
    def __init__(self):
        self.meeting_patterns = [
            r'(?:schedule|set up|arrange|book) (?:a )?(?:meeting|call|discussion)',
            r'(?:available|free) (?:on|for|at)',
            r'(?:meet|talk|discuss) (?:on|at|tomorrow|next)',
            r'(?:calendar|invite|appointment)',
            r'(?:\d{1,2}[:.]\d{2}\s*(?:am|pm|AM|PM))'
        ]
        
    def detect_meeting_request(self, email_body: str) -> bool:
        """Detect if email contains a meeting request."""
        for pattern in self.meeting_patterns:
            if re.search(pattern, email_body, re.IGNORECASE):
                return True
        return False
    
    def extract_time_preferences(self, email_body: str) -> List[str]:
        """Extract mentioned times and dates from email."""
        times = []
        
        # Extract times like "2:00 PM", "3pm", "14:00"
        time_pattern = r'\b(\d{1,2}[:.]?\d{0,2}\s*(?:am|pm|AM|PM)?)\b'
        times.extend(re.findall(time_pattern, email_body, re.IGNORECASE))
        
        # Extract days
        day_pattern = r'\b(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday|tomorrow|today)\b'
        times.extend(re.findall(day_pattern, email_body, re.IGNORECASE))
        
        return times
    
    def suggest_meeting_times(self, participants: List[str], duration_minutes: int = 60) -> List[Dict]:
        """
        Suggest optimal meeting times for participants.
        
        Args:
            participants: List of participant email addresses
            duration_minutes: Meeting duration in minutes
            
        Returns:
            List of suggested time slots
        """
        suggestions = []
        now = datetime.now()
        
        # Generate time slots for next 3 business days
        for day_offset in range(1, 4):
            day = now + timedelta(days=day_offset)
            if day.weekday() >= 5:  # Skip weekends
                continue
            
            # Suggest morning, midday, and afternoon slots
            for hour in [9, 11, 14, 16]:
                slot_start = day.replace(hour=hour, minute=0, second=0, microsecond=0)
                slot_end = slot_start + timedelta(minutes=duration_minutes)
                
                suggestions.append({
                    'start': slot_start.isoformat(),
                    'end': slot_end.isoformat(),
                    'participants': participants,
                    'duration_minutes': duration_minutes
                })
        
        return suggestions[:5]  # Return top 5 suggestions
    
    def process_email(self, email: Dict) -> Dict:
        """
        Process email and extract meeting scheduling information.
        
        Args:
            email: Email dict with 'body', 'sender', 'recipients' keys
            
        Returns:
            Dict with meeting detection results and suggestions
        """
        body = email.get('body', '')
        is_meeting_request = self.detect_meeting_request(body)
        time_preferences = self.extract_time_preferences(body)
        
        participants = [email.get('sender', '')] + email.get('recipients', [])
        suggestions = self.suggest_meeting_times(participants) if is_meeting_request else []
        
        # Check reply-all requirement
        reply_all_required = len(email.get('recipients', [])) > 1
        
        return {
            'engine': 'V382',
            'is_meeting_request': is_meeting_request,
            'time_preferences': time_preferences,
            'suggestions': suggestions,
            'reply_all_required': reply_all_required,
            'timestamp': datetime.now().isoformat()
        }


if __name__ == '__main__':
    scheduler = MeetingSchedulerIntelligence()
    
    sample_email = {
        'sender': 'manager@example.com',
        'body': 'Hi team, can we schedule a meeting tomorrow at 2:00 PM to discuss the project timeline? Please let me know if you are available.',
        'recipients': ['alice@example.com', 'bob@example.com', 'charlie@example.com']
    }
    
    result = scheduler.process_email(sample_email)
    print(json.dumps(result, indent=2))

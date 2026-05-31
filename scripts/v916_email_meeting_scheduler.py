#!/usr/bin/env python3
"""
V916: Smart Email Meeting Scheduler
Analyzes emails to detect meeting requests, suggests optimal times,
creates calendar invites, and enforces reply-all for multi-recipient scheduling.
"""

import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Any

class SmartMeetingScheduler:
    def __init__(self):
        self.meeting_keywords = ['meeting', 'call', 'schedule', 'discuss', 'sync', 'chat', 'appointment']
        self.time_patterns = [
            r'\b(\d{1,2})[:\.]?(\d{2})?\s*(am|pm|AM|PM)\b',
            r'\btomorrow\b',
            r'\bnext\s+(monday|tuesday|wednesday|thursday|friday)\b',
            r'\bthis\s+(week|afternoon|morning)\b'
        ]
        self.duration_keywords = {
            'quick': 15, 'brief': 30, 'short': 30,
            'standard': 60, 'hour': 60, 'long': 90, 'extended': 120
        }
        self.scheduling_history = []
        
    def analyze_email(self, email_data: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze email for meeting scheduling intent"""
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        recipients = email_data.get('recipients', [])
        full_text = f"{subject} {body}".lower()
        
        # Detect meeting intent
        is_meeting_request = any(kw in full_text for kw in self.meeting_keywords)
        
        if not is_meeting_request:
            return {
                'is_meeting_request': False,
                'action': 'no_action',
                'reason': 'No meeting scheduling intent detected'
            }
        
        # Extract meeting details
        duration = self._extract_duration(full_text)
        preferred_times = self._extract_time_preferences(full_text)
        urgency = self._detect_urgency(full_text)
        
        # Suggest optimal meeting times
        suggestions = self._suggest_optimal_times(duration, preferred_times, len(recipients))
        
        # Track for learning
        self.scheduling_history.append({
            'timestamp': datetime.now().isoformat(),
            'participants': len(recipients),
            'duration': duration,
            'urgency': urgency
        })
        
        # Generate response with reply-all enforcement
        response = self._generate_scheduling_response(
            suggestions, duration, recipients, urgency
        )
        
        return {
            'is_meeting_request': True,
            'action': 'schedule_meeting',
            'meeting_details': {
                'duration_minutes': duration,
                'urgency': urgency,
                'suggested_times': suggestions,
                'participant_count': len(recipients)
            },
            'response': response,
            'reply_all_required': len(recipients) > 1,
            'create_calendar_invite': True
        }
    
    def _extract_duration(self, text: str) -> int:
        """Extract meeting duration from text"""
        for keyword, minutes in self.duration_keywords.items():
            if keyword in text:
                return minutes
        
        # Check for explicit duration
        duration_match = re.search(r'(\d+)\s*(?:min|minutes|hour|hours)', text)
        if duration_match:
            value = int(duration_match.group(1))
            if 'hour' in text:
                return value * 60
            return value
        
        return 60  # Default 1 hour
    
    def _extract_time_preferences(self, text: str) -> List[str]:
        """Extract time preferences from email"""
        preferences = []
        
        for pattern in self.time_patterns:
            matches = re.finditer(pattern, text)
            for match in matches:
                preferences.append(match.group(0))
        
        return preferences
    
    def _detect_urgency(self, text: str) -> str:
        """Detect meeting urgency"""
        urgent_keywords = ['urgent', 'asap', 'immediately', 'emergency', 'critical']
        soon_keywords = ['soon', 'quickly', 'this week', 'tomorrow']
        
        if any(kw in text for kw in urgent_keywords):
            return 'high'
        elif any(kw in text for kw in soon_keywords):
            return 'medium'
        return 'normal'
    
    def _suggest_optimal_times(self, duration: int, preferences: List[str], 
                              participant_count: int) -> List[Dict[str, str]]:
        """Suggest optimal meeting times based on constraints"""
        suggestions = []
        now = datetime.now()
        
        # Base times (business hours)
        base_times = [
            now.replace(hour=9, minute=0, second=0),
            now.replace(hour=11, minute=0, second=0),
            now.replace(hour=14, minute=0, second=0),
            now.replace(hour=16, minute=0, second=0)
        ]
        
        # Generate suggestions for next 3 business days
        for day_offset in range(1, 4):
            for base_time in base_times:
                suggested_time = base_time + timedelta(days=day_offset)
                
                # Skip weekends
                if suggested_time.weekday() >= 5:
                    continue
                
                suggestions.append({
                    'datetime': suggested_time.isoformat(),
                    'formatted': suggested_time.strftime('%A, %B %d at %I:%M %p'),
                    'duration_minutes': duration,
                    'score': self._calculate_time_score(suggested_time, participant_count)
                })
        
        # Sort by score and return top 5
        suggestions.sort(key=lambda x: x['score'], reverse=True)
        return suggestions[:5]
    
    def _calculate_time_score(self, meeting_time: datetime, participants: int) -> float:
        """Calculate suitability score for a meeting time"""
        score = 100.0
        
        # Penalize early morning and late afternoon
        hour = meeting_time.hour
        if hour < 9 or hour > 17:
            score -= 30
        elif hour < 10 or hour > 16:
            score -= 15
        
        # Penalize lunch time
        if 12 <= hour <= 13:
            score -= 20
        
        # Penalize for large groups (harder to coordinate)
        if participants > 5:
            score -= 10
        
        # Bonus for mid-week
        if meeting_time.weekday() in [1, 2, 3]:  # Tue-Thu
            score += 10
        
        return max(0, score)
    
    def _generate_scheduling_response(self, suggestions: List[Dict], 
                                     duration: int, recipients: List[str],
                                     urgency: str) -> Dict[str, Any]:
        """Generate professional scheduling response"""
        
        if urgency == 'high':
            tone = "I understand this is urgent and will prioritize scheduling immediately."
        else:
            tone = "Thank you for reaching out about scheduling a meeting."
        
        # Format top 3 suggestions
        time_options = []
        for i, suggestion in enumerate(suggestions[:3], 1):
            time_options.append(f"{i}. {suggestion['formatted']}")
        
        response_text = f"""{tone}

Here are my available time slots for a {duration}-minute meeting:

{chr(10).join(time_options)}

Please let me know which option works best for you, or suggest an alternative time that suits your schedule.

{f'Note: This email is sent to {len(recipients)} participants. Please use Reply All to keep everyone in the loop.' if len(recipients) > 1 else ''}

I'll send a calendar invitation once we confirm the time.

Best regards"""
        
        return {
            'text': response_text,
            'reply_all': len(recipients) > 1,
            'include_calendar_link': True,
            'urgency_level': urgency
        }


def main():
    """Test the scheduler with sample emails"""
    scheduler = SmartMeetingScheduler()
    
    test_emails = [
        {
            'subject': 'Quick sync call tomorrow?',
            'body': 'Hi team, can we schedule a quick 30-minute call tomorrow to discuss the project status? I am available in the afternoon.',
            'recipients': ['alice@example.com', 'bob@example.com', 'carol@example.com']
        },
        {
            'subject': 'Meeting request',
            'body': 'I would like to schedule a meeting to review the quarterly results. Please let me know your availability next week.',
            'recipients': ['manager@example.com']
        }
    ]
    
    results = []
    for email in test_emails:
        result = scheduler.analyze_email(email)
        results.append(result)
        print(f"\n{'='*60}")
        print(f"Subject: {email['subject']}")
        print(f"Is Meeting Request: {result['is_meeting_request']}")
        if result['is_meeting_request']:
            print(f"Duration: {result['meeting_details']['duration_minutes']} minutes")
            print(f"Urgency: {result['meeting_details']['urgency']}")
            print(f"Suggestions: {len(result['meeting_details']['suggested_times'])} time slots")
            print(f"Reply All Required: {result['reply_all_required']}")
    
    print(f"\n{'='*60}")
    print(f"Total emails analyzed: {len(results)}")
    print(f"Meeting requests detected: {sum(1 for r in results if r['is_meeting_request'])}")
    print("V916 Smart Meeting Scheduler: OPERATIONAL")


if __name__ == '__main__':
    main()

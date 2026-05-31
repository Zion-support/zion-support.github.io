#!/usr/bin/env python3
"""
V423: AI Smart Meeting Scheduler
Analyzes emails to extract meeting preferences, availability hints,
and timezone information. Suggests optimal meeting times and
generates calendar invites automatically.
Enforces reply-all for multi-recipient scheduling emails.
"""

import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Tuple


class V423SmartScheduler:
    """Extracts scheduling information and suggests meeting times"""
    
    # Day patterns
    DAY_PATTERNS = {
        'monday': 0, 'tuesday': 1, 'wednesday': 2, 'thursday': 3,
        'friday': 4, 'saturday': 5, 'sunday': 6,
        'mon': 0, 'tue': 1, 'tues': 1, 'wed': 2, 'thu': 3, 'thur': 3, 'fri': 4, 'sat': 5, 'sun': 6
    }
    
    # Time patterns
    TIME_PATTERNS = [
        r'(\d{1,2}):(\d{2})\s*(am|pm|AM|PM)',
        r'(\d{1,2})\s*(am|pm|AM|PM)',
        r'(\d{1,2}):(\d{2})',
        r'(\d{1,2})\s*o\'clock'
    ]
    
    # Time preference keywords
    TIME_PREFERENCES = {
        'morning': (8, 12),
        'afternoon': (12, 17),
        'evening': (17, 21),
        'early': (7, 9),
        'late': (16, 20)
    }
    
    # Availability indicators
    AVAILABLE_INDICATORS = [
        'available', 'free', 'open', 'can do', 'works for me',
        'that time is good', 'i\'m free', 'no conflicts'
    ]
    
    UNAVAILABLE_INDICATORS = [
        'busy', 'unavailable', 'booked', 'can\'t', 'cannot',
        'not free', 'have a conflict', 'not available', 'tied up'
    ]
    
    def extract_time_preferences(self, text: str) -> Dict:
        """Extract time preferences from email text"""
        text_lower = text.lower()
        preferences = {
            "specific_times": [],
            "time_windows": [],
            "days_mentioned": [],
            "availability": "unknown"
        }
        
        # Extract specific times
        for pattern in self.TIME_PATTERNS:
            matches = re.finditer(pattern, text, re.IGNORECASE)
            for match in matches:
                time_str = match.group(0)
                preferences["specific_times"].append(time_str)
        
        # Extract time windows (morning, afternoon, etc.)
        for window, (start, end) in self.TIME_PREFERENCES.items():
            if window in text_lower:
                preferences["time_windows"].append({
                    "window": window,
                    "start_hour": start,
                    "end_hour": end
                })
        
        # Extract days
        for day_name, day_num in self.DAY_PATTERNS.items():
            if re.search(r'\b' + day_name + r'\b', text_lower):
                preferences["days_mentioned"].append({
                    "name": day_name.capitalize(),
                    "number": day_num
                })
        
        # Determine availability
        available_count = sum(1 for ind in self.AVAILABLE_INDICATORS if ind in text_lower)
        unavailable_count = sum(1 for ind in self.UNAVAILABLE_INDICATORS if ind in text_lower)
        
        if available_count > unavailable_count:
            preferences["availability"] = "available"
        elif unavailable_count > available_count:
            preferences["availability"] = "unavailable"
        else:
            preferences["availability"] = "unknown"
        
        return preferences
    
    def extract_duration_hints(self, text: str) -> Optional[int]:
        """Extract meeting duration hints"""
        text_lower = text.lower()
        
        # Look for explicit durations
        duration_patterns = [
            r'(\d+)\s*(?:minute|min)s?',
            r'(\d+)\s*hour(?:s)?',
            r'(\d+)\s*(?:hr|hrs)',
            r'(?:quick|brief|short)\s+(?:call|meeting|chat)',
            r'(?:long|extended|detailed)\s+(?:call|meeting|discussion)'
        ]
        
        for pattern in duration_patterns[:3]:
            match = re.search(pattern, text_lower)
            if match:
                value = int(match.group(1))
                if 'hour' in pattern or 'hr' in pattern:
                    return value * 60
                return value
        
        # Infer from keywords
        if any(word in text_lower for word in ['quick', 'brief', 'short']):
            return 15
        if any(word in text_lower for word in ['long', 'extended', 'detailed']):
            return 90
        
        # Default
        return 30
    
    def extract_meeting_type(self, text: str) -> str:
        """Extract meeting type"""
        text_lower = text.lower()
        
        types = {
            'video': ['zoom', 'teams', 'meet', 'video call', 'video chat', 'face to face'],
            'phone': ['call', 'phone', 'telephone'],
            'in_person': ['meet in person', 'come by', 'visit', 'office', 'coffee'],
            'chat': ['chat', 'slack', 'message', 'text']
        }
        
        for meeting_type, keywords in types.items():
            if any(keyword in text_lower for keyword in keywords):
                return meeting_type
        
        return 'video'  # Default
    
    def extract_timezone(self, text: str) -> Optional[str]:
        """Extract timezone information"""
        # Common timezone patterns
        tz_patterns = [
            r'(?:EST|EDT|CST|CDT|MST|MDT|PST|PDT|GMT|UTC)(?:\s*[-+]?\d+)?',
            r'(?:Eastern|Central|Mountain|Pacific)\s+(?:Time|Standard|Daylight)',
            r'(?:GMT|UTC)\s*[-+]?\d+'
        ]
        
        for pattern in tz_patterns:
            match = re.search(pattern, text, re.IGNORECASE)
            if match:
                return match.group(0)
        
        return None
    
    def suggest_times(self, preferences: Dict, duration: int = 30) -> List[Dict]:
        """Suggest meeting times based on preferences"""
        suggestions = []
        
        # Get available days (default to next 5 business days)
        days = preferences.get("days_mentioned", [])
        if not days:
            # Generate next 5 business days
            today = datetime.now()
            for i in range(1, 8):
                date = today + timedelta(days=i)
                if date.weekday() < 5:  # Monday = 0, Friday = 4
                    days.append({"name": date.strftime("%A"), "number": date.weekday(), "date": date.strftime("%Y-%m-%d")})
        
        # Get preferred time windows
        windows = preferences.get("time_windows", [])
        if not windows:
            # Default to business hours
            windows = [{"window": "business hours", "start_hour": 9, "end_hour": 17}]
        
        # Generate suggestions
        for day in days[:3]:  # Limit to 3 days
            for window in windows[:2]:  # Limit to 2 windows per day
                start_hour = window.get("start_hour", 9)
                end_hour = window.get("end_hour", 17)
                
                # Suggest 2-3 time slots per window
                for hour in range(start_hour, min(end_hour, start_hour + 3)):
                    suggestions.append({
                        "day": day.get("name", "Unknown"),
                        "date": day.get("date", ""),
                        "time": f"{hour:02d}:00",
                        "duration_minutes": duration,
                        "window": window.get("window", "business hours")
                    })
        
        return suggestions[:9]  # Return top 9 suggestions
    
    def generate_calendar_invite(self, meeting: Dict, participants: List[str]) -> Dict:
        """Generate calendar invite data"""
        return {
            "title": meeting.get("subject", "Meeting"),
            "description": meeting.get("description", ""),
            "start_time": meeting.get("start_time", ""),
            "end_time": meeting.get("end_time", ""),
            "duration_minutes": meeting.get("duration", 30),
            "participants": participants,
            "meeting_type": meeting.get("type", "video"),
            "timezone": meeting.get("timezone", "UTC"),
            "location": meeting.get("location", ""),
            "reminder_minutes": 15
        }
    
    def process(self, email: Dict) -> Dict:
        """Process email and extract scheduling information"""
        text = f"{email.get('subject', '')} {email.get('body', '')}"
        recipients = email.get('to', [])
        cc = email.get('cc', [])
        
        # Extract preferences
        preferences = self.extract_time_preferences(text)
        duration = self.extract_duration_hints(text)
        meeting_type = self.extract_meeting_type(text)
        timezone = self.extract_timezone(text)
        
        # Generate suggestions
        suggestions = self.suggest_times(preferences, duration)
        
        # Check if this is a scheduling email
        scheduling_keywords = ['schedule', 'meeting', 'call', 'chat', 'discuss', 'available', 'free', 'when']
        is_scheduling_email = any(keyword in text.lower() for keyword in scheduling_keywords)
        
        # Check reply-all
        all_recipients = list(set(recipients + cc))
        should_reply_all = len(all_recipients) > 1
        
        # Generate calendar invite template
        if suggestions:
            first_suggestion = suggestions[0]
            calendar_invite = self.generate_calendar_invite(
                {
                    "subject": email.get("subject", "Meeting"),
                    "description": email.get("body", "")[:200],
                    "start_time": f"{first_suggestion.get('date', '')}T{first_suggestion.get('time', '09:00')}:00",
                    "duration": duration,
                    "type": meeting_type,
                    "timezone": timezone or "UTC"
                },
                all_recipients
            )
        else:
            calendar_invite = None
        
        result = {
            "engine": "V423 Smart Meeting Scheduler",
            "timestamp": datetime.now().isoformat(),
            "is_scheduling_email": is_scheduling_email,
            "preferences": preferences,
            "duration_minutes": duration,
            "meeting_type": meeting_type,
            "timezone": timezone,
            "suggestions": suggestions,
            "calendar_invite": calendar_invite,
            "reply_all_enforced": should_reply_all,
            "reply_all_reason": f"Scheduling involves {len(all_recipients)} participants" if should_reply_all else "Single participant"
        }
        
        return result


if __name__ == "__main__":
    # Test with scheduling email
    test_email = {
        "sender": "client@example.com",
        "subject": "Let's schedule a call",
        "body": "Hi team,\n\nI'd like to schedule a quick 30-minute call to discuss the project. I'm available Tuesday or Wednesday afternoon (EST). Would 2pm or 3pm work for you?\n\nLet me know what works best.\n\nBest,\nJohn",
        "to": ["manager@company.com", "lead@company.com"],
        "cc": ["team@company.com"]
    }
    
    scheduler = V423SmartScheduler()
    result = scheduler.process(test_email)
    print(json.dumps(result, indent=2))

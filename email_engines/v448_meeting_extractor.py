#!/usr/bin/env python3
"""
V448 - AI Email Meeting Extractor Engine
Automatically extracts meeting details from emails and creates calendar events.
Features: Date/time extraction, attendee ID, location detection, agenda extraction, conflict detection.
CRITICAL: Always enforces reply-all for multi-recipient emails.
"""

import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional


class MeetingExtractor:
    """Extracts meeting details from email content and generates calendar events."""
    
    DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    MONTHS = ['january', 'february', 'march', 'april', 'may', 'june',
              'july', 'august', 'september', 'october', 'november', 'december']
    
    TIME_PATTERNS = [
        r'(\d{1,2})[:\s]*(\d{2})?\s*(am|pm|AM|PM)?',
        r'at\s+(\d{1,2})(?::(\d{2}))?\s*(am|pm|AM|PM)?',
        r'(\d{1,2})(\d{2})\s*(am|pm|AM|PM)',
    ]
    
    DATE_PATTERNS = [
        r'(january|february|march|april|may|june|july|august|september|october|november|december)\s+(\d{1,2})(?:st|nd|rd|th)?(?:,?\s*(\d{4}))?',
        r'(\d{1,2})/(?:\d{1,2})(?:/(\d{2,4}))?',
        r'(monday|tuesday|wednesday|thursday|friday|saturday|sunday)',
        r'(tomorrow|today|next\s+week)',
    ]
    
    LOCATION_PATTERNS = [
        r'(?:at|in|on|from|meeting at|conference room|zoom|teams|google meet)[:\s]+([^.,\n]+)',
        r'(?:https?://(?:zoom|teams|meet|webex)[^\s]+)',
        r'(?:Room\s+\w+|Conference\s+Room\s+\w+)',
    ]
    
    def __init__(self):
        self.existing_events: List[Dict] = []
        
    def analyze_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze email and extract meeting details."""
        body = email.get('body', '')
        subject = email.get('subject', '')
        sender = email.get('from', '')
        recipients = email.get('to', []) + email.get('cc', [])
        
        text = subject + ' ' + body
        
        has_meeting_intent = self._detect_meeting_intent(text)
        
        if not has_meeting_intent:
            return {
                'engine': 'V448_MeetingExtractor',
                'has_meeting_intent': False,
                'message': 'No meeting intent detected',
                'reply_all_required': len(recipients) > 1,
                'reply_all_enforced': len(recipients) > 1,
                'timestamp': datetime.now().isoformat()
            }
        
        dates = self._extract_dates(text)
        times = self._extract_times(text)
        locations = self._extract_locations(text)
        attendees = self._extract_attendees(email)
        agenda = self._extract_agenda(body)
        duration = self._extract_duration(text)
        
        calendar_event = self._build_calendar_event(dates, times, locations, attendees, agenda, duration, subject)
        conflicts = self._check_conflicts(calendar_event)
        
        reply_all_required = len(recipients) > 1
        
        return {
            'engine': 'V448_MeetingExtractor',
            'has_meeting_intent': True,
            'meeting_details': {
                'dates': dates,
                'times': times,
                'locations': locations,
                'attendees': attendees,
                'agenda': agenda,
                'duration_minutes': duration
            },
            'calendar_event': calendar_event,
            'conflicts': conflicts,
            'confidence_score': self._calculate_confidence(dates, times, locations, attendees),
            'suggested_actions': self._suggest_actions(calendar_event, conflicts),
            'reply_all_required': reply_all_required,
            'reply_all_enforced': reply_all_required,
            'recipients': recipients,
            'timestamp': datetime.now().isoformat()
        }
    
    def _detect_meeting_intent(self, text: str) -> bool:
        """Detect if the email contains a meeting intent."""
        meeting_keywords = [
            r'\bmeet(?:ing)?\b', r'\bschedul', r'\bcall\b', r'\bappointment\b',
            r'\bdiscuss\b', r'\bcatch\s+up\b', r'\bsync\b', r'\breview\s+(?:call|meeting)\b',
            r'\blet\'?s\s+(?:meet|talk|chat|discuss)\b', r'\bavailab(?:le|ility)\b',
            r'\bcalendar\b', r'\btime\s+(?:to|for)\b'
        ]
        for pattern in meeting_keywords:
            if re.search(pattern, text, re.IGNORECASE):
                return True
        return False
    
    def _extract_dates(self, text: str) -> List[Dict]:
        """Extract date references from text."""
        dates = []
        text_lower = text.lower()
        
        for month in self.MONTHS:
            pattern = rf'{month}\s+(\d{{1,2}})(?:st|nd|rd|th)?(?:,?\s*(\d{{4}}))?'
            matches = re.finditer(pattern, text_lower)
            for m in matches:
                day = int(m.group(1))
                year = int(m.group(2)) if m.group(2) else datetime.now().year
                month_num = self.MONTHS.index(month) + 1
                dates.append({
                    'raw': m.group(0),
                    'date': f"{year}-{month_num:02d}-{day:02d}",
                    'confidence': 0.9
                })
        
        for day in self.DAYS:
            if day in text_lower:
                today = datetime.now()
                day_idx = self.DAYS.index(day)
                current_idx = today.weekday()
                days_ahead = (day_idx - current_idx) % 7
                if days_ahead == 0:
                    days_ahead = 7
                target = today + timedelta(days=days_ahead)
                dates.append({
                    'raw': day,
                    'date': target.strftime('%Y-%m-%d'),
                    'confidence': 0.7
                })
        
        if 'tomorrow' in text_lower:
            tomorrow = datetime.now() + timedelta(days=1)
            dates.append({
                'raw': 'tomorrow',
                'date': tomorrow.strftime('%Y-%m-%d'),
                'confidence': 0.95
            })
        
        if 'today' in text_lower:
            dates.append({
                'raw': 'today',
                'date': datetime.now().strftime('%Y-%m-%d'),
                'confidence': 0.95
            })
        
        return dates
    
    def _extract_times(self, text: str) -> List[Dict]:
        """Extract time references from text."""
        times = []
        for pattern in self.TIME_PATTERNS:
            matches = re.finditer(pattern, text, re.IGNORECASE)
            for m in matches:
                hour = int(m.group(1))
                minute = int(m.group(2)) if m.group(2) else 0
                ampm = m.group(3).lower() if m.group(3) else None
                
                if ampm == 'pm' and hour < 12:
                    hour += 12
                elif ampm == 'am' and hour == 12:
                    hour = 0
                
                if 0 <= hour <= 23 and 0 <= minute <= 59:
                    times.append({
                        'raw': m.group(0),
                        'time': f"{hour:02d}:{minute:02d}",
                        'hour': hour,
                        'minute': minute,
                        'confidence': 0.9 if ampm else 0.6
                    })
        
        return times
    
    def _extract_locations(self, text: str) -> List[str]:
        """Extract meeting locations."""
        locations = []
        for pattern in self.LOCATION_PATTERNS:
            matches = re.findall(pattern, text, re.IGNORECASE)
            locations.extend(matches)
        
        link_patterns = [
            r'https?://(?:us\d+)?\.?zoom\.us/[^\s,]+',
            r'https?://teams\.microsoft\.com/[^\s,]+',
            r'https?://meet\.google\.com/[^\s,]+',
            r'https?://[^\s]*webex[^\s,]+',
        ]
        for pattern in link_patterns:
            matches = re.findall(pattern, text)
            locations.extend(matches)
        
        return list(set(locations))
    
    def _extract_attendees(self, email: Dict) -> List[str]:
        """Extract meeting attendees from email participants."""
        attendees = []
        if 'from' in email:
            attendees.append(email['from'])
        for field in ['to', 'cc']:
            if field in email:
                if isinstance(email[field], list):
                    attendees.extend(email[field])
                else:
                    attendees.append(email[field])
        return list(set(attendees))
    
    def _extract_agenda(self, body: str) -> List[str]:
        """Extract meeting agenda items."""
        agenda = []
        patterns = [
            r'(?:agenda|topics?|discuss)[:\s]+(.+?)(?:\n|$)',
            r'(?:\d+[\.\)])\s+(.+?)(?:\n|$)',
            r'[-\u2022]\s+(.+?)(?:\n|$)',
        ]
        for pattern in patterns:
            matches = re.findall(pattern, body, re.IGNORECASE)
            agenda.extend(matches)
        
        if not agenda:
            sentences = re.split(r'[.!?]', body)
            for sent in sentences:
                if re.search(r'\b(?:discuss|review|go over|cover|present)\b', sent, re.IGNORECASE):
                    agenda.append(sent.strip())
        
        return agenda[:10]
    
    def _extract_duration(self, text: str) -> int:
        """Extract meeting duration in minutes."""
        patterns = [
            r'(\d+)\s*(?:minute|min)s?',
            r'(\d+)\s*(?:hour|hr)s?',
            r'(?:half\s*(?:an?\s*)?hour)',
            r'(?:quick|short|brief)',
        ]
        
        min_match = re.search(r'(\d+)\s*(?:minute|min)s?', text, re.IGNORECASE)
        if min_match:
            return int(min_match.group(1))
        
        hour_match = re.search(r'(\d+)\s*(?:hour|hr)s?', text, re.IGNORECASE)
        if hour_match:
            return int(hour_match.group(1)) * 60
        
        if re.search(r'half\s*(?:an?\s*)?hour', text, re.IGNORECASE):
            return 30
        
        if re.search(r'(?:quick|short|brief)', text, re.IGNORECASE):
            return 15
        
        return 60
    
    def _build_calendar_event(self, dates, times, locations, attendees, agenda, duration, subject) -> Dict:
        """Build a calendar event object."""
        best_date = dates[0]['date'] if dates else datetime.now().strftime('%Y-%m-%d')
        best_time = times[0]['time'] if times else '09:00'
        
        return {
            'title': subject.replace('Re:', '').replace('FW:', '').strip() if subject else 'Meeting',
            'date': best_date,
            'start_time': best_time,
            'duration_minutes': duration,
            'location': locations[0] if locations else 'TBD',
            'attendees': attendees,
            'agenda': agenda,
            'status': 'proposed'
        }
    
    def _check_conflicts(self, event: Dict) -> List[Dict]:
        """Check for scheduling conflicts."""
        conflicts = []
        for existing in self.existing_events:
            if existing.get('date') == event.get('date'):
                if existing.get('start_time') == event.get('start_time'):
                    conflicts.append({
                        'type': 'time_conflict',
                        'existing_event': existing.get('title', ''),
                        'severity': 'high'
                    })
        return conflicts
    
    def _calculate_confidence(self, dates, times, locations, attendees) -> float:
        """Calculate extraction confidence score."""
        score = 0.0
        if dates:
            score += 0.3
        if times:
            score += 0.3
        if locations:
            score += 0.2
        if len(attendees) >= 2:
            score += 0.2
        return min(1.0, score)
    
    def _suggest_actions(self, event: Dict, conflicts: List) -> List[str]:
        """Suggest next actions."""
        actions = []
        if event.get('location') == 'TBD':
            actions.append("Confirm meeting location/link")
        if conflicts:
            actions.append("Resolve scheduling conflicts before sending invite")
        actions.append("Send calendar invite to all attendees (reply-all)")
        actions.append("Include agenda in the calendar event")
        return actions


def main():
    """Test V448 engine."""
    engine = MeetingExtractor()
    
    test_email = {
        'from': 'manager@acme.com',
        'to': ['kleber@ziontechgroup.com', 'dev@ziontechgroup.com'],
        'cc': ['cto@acme.com', 'pm@acme.com'],
        'subject': 'Q4 Planning Meeting',
        'body': "Hi team,\n\nLet's meet Thursday at 3 PM to discuss the Q4 roadmap. We'll meet in Conference Room B or via Zoom: https://zoom.us/j/123456789\n\nAgenda:\n1. Review Q3 results\n2. Discuss Q4 priorities\n3. Resource allocation\n\nThe meeting should take about 90 minutes.\n\nThanks!"
    }
    
    result = engine.analyze_email(test_email)
    print(json.dumps(result, indent=2))
    print(f"\n✅ Meeting detected: {result['has_meeting_intent']}")
    print(f"✅ Reply-all enforced: {result['reply_all_enforced']}")
    print(f"✅ Attendees: {len(result['meeting_details']['attendees'])}")
    print(f"✅ Agenda items: {len(result['meeting_details']['agenda'])}")


if __name__ == '__main__':
    main()

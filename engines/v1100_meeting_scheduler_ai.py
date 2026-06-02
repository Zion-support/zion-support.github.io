#!/usr/bin/env python3
"""
V1100 - Email Meeting Scheduler AI
Automatically schedule meetings from email conversations
Detect availability and time zone preferences
Generate calendar invites with context
Handle rescheduling and cancellations
Integrate with calendar systems
"""

import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional, Tuple
from collections import defaultdict

class MeetingSchedulerAI:
    def __init__(self):
        self.meetings = defaultdict(list)
        self.availability = defaultdict(list)
        self.timezone_preferences = {}
        self.meeting_history = []
        
        self.work_hours = {
            'start': 9,  # 9 AM
            'end': 17,   # 5 PM
            'days': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
        }
        
        self.meeting_durations = {
            'quick_sync': 15,
            'standard': 30,
            'extended': 60,
            'workshop': 90,
            'all_hands': 120
        }
    
    def detect_meeting_intent(self, text: str) -> Dict[str, Any]:
        """Detect if email contains meeting scheduling intent"""
        meeting_patterns = [
            (r'(?:let\'?s?|can we|could we|shall we)\s+(?:meet|schedule|have a call|hop on a call|chat)', 'explicit_request'),
            (r'(?:available|free|open)\s+(?:this week|next week|today|tomorrow|monday|tuesday|wednesday|thursday|friday)', 'availability_mention'),
            (r'(?:schedule|book|set up|arrange)\s+(?:a|the)?\s*(?:meeting|call|discussion|review)', 'scheduling_request'),
            (r'(?:what time|when|what day)\s+(?:works|is good|are you free)', 'time_inquiry'),
            (r'(?:calendar|invite|invitation)\s+(?:invite|send|for)', 'calendar_action')
        ]
        
        text_lower = text.lower()
        intents = []
        
        for pattern, intent_type in meeting_patterns:
            if re.search(pattern, text_lower):
                intents.append(intent_type)
        
        # Detect meeting type
        meeting_type = 'standard'
        if any(w in text_lower for w in ['quick', 'brief', 'sync', 'touch base']):
            meeting_type = 'quick_sync'
        elif any(w in text_lower for w in ['workshop', 'training', 'brainstorm']):
            meeting_type = 'workshop'
        elif any(w in text_lower for w in ['review', 'deep dive', 'detailed']):
            meeting_type = 'extended'
        elif any(w in text_lower for w in ['all hands', 'team meeting', 'company']):
            meeting_type = 'all_hands'
        
        return {
            'has_meeting_intent': len(intents) > 0,
            'intents': intents,
            'meeting_type': meeting_type,
            'confidence': 'high' if len(intents) >= 2 else 'medium' if len(intents) == 1 else 'low',
            'suggested_duration': self.meeting_durations.get(meeting_type, 30)
        }
    
    def extract_time_preferences(self, text: str) -> Dict[str, Any]:
        """Extract time preferences from email text"""
        text_lower = text.lower()
        preferences = {
            'specific_times': [],
            'specific_days': [],
            'time_ranges': [],
            'timezone': None,
            'flexibility': 'medium'
        }
        
        # Extract specific times
        time_patterns = [
            r'(\d{1,2}:\d{2}\s*(?:am|pm))',
            r'(\d{1,2}\s*(?:am|pm))',
            r'(at\s+\d{1,2}(?::\d{2})?\s*(?:am|pm)?)'
        ]
        
        for pattern in time_patterns:
            matches = re.findall(pattern, text_lower)
            preferences['specific_times'].extend(matches)
        
        # Extract days
        days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
        for day in days:
            if day in text_lower:
                preferences['specific_days'].append(day.capitalize())
        
        # Extract time ranges
        range_patterns = [
            r'(?:morning|afternoon|evening)',
            r'(?:before|after)\s+\d{1,2}',
            r'(?:between|from)\s+\d{1,2}\s*(?:and|to)\s*\d{1,2}'
        ]
        
        for pattern in range_patterns:
            matches = re.findall(pattern, text_lower)
            preferences['time_ranges'].extend(matches)
        
        # Detect timezone
        tz_patterns = [
            r'(?:est|edt|cst|cdt|mst|mdt|pst|pdt|gmt|utc|ist)',
            r'(?:eastern|central|mountain|pacific)\s*(?:time|standard|daylight)'
        ]
        
        for pattern in tz_patterns:
            match = re.search(pattern, text_lower)
            if match:
                preferences['timezone'] = match.group(0).upper()
                break
        
        # Detect flexibility
        if any(w in text_lower for w in ['flexible', 'any time', 'whenever works', 'no preference']):
            preferences['flexibility'] = 'high'
        elif any(w in text_lower for w in ['must be', 'only', 'strictly', 'exactly']):
            preferences['flexibility'] = 'low'
        
        return preferences
    
    def find_available_slots(self, participants: List[str], duration_minutes: int, 
                           search_days: int = 7) -> List[Dict[str, Any]]:
        """Find available meeting slots for all participants"""
        now = datetime.now()
        available_slots = []
        
        for day_offset in range(search_days):
            candidate_date = now + timedelta(days=day_offset)
            day_name = candidate_date.strftime('%A')
            
            # Skip weekends
            if day_name not in self.work_hours['days']:
                continue
            
            # Check each hour in work hours
            for hour in range(self.work_hours['start'], self.work_hours['end']):
                slot_start = candidate_date.replace(hour=hour, minute=0, second=0, microsecond=0)
                slot_end = slot_start + timedelta(minutes=duration_minutes)
                
                # Skip if end time exceeds work hours
                if slot_end.hour >= self.work_hours['end']:
                    continue
                
                # Skip past times
                if slot_start <= now:
                    continue
                
                # Check conflicts for all participants
                conflict = False
                for participant in participants:
                    for meeting in self.meetings.get(participant, []):
                        if (slot_start < meeting['end'] and slot_end > meeting['start']):
                            conflict = True
                            break
                    if conflict:
                        break
                
                if not conflict:
                    available_slots.append({
                        'start': slot_start.isoformat(),
                        'end': slot_end.isoformat(),
                        'day': day_name,
                        'date': slot_start.strftime('%Y-%m-%d'),
                        'time_range': f"{slot_start.strftime('%I:%M %p')} - {slot_end.strftime('%I:%M %p')}",
                        'score': self.score_slot(slot_start, participants)
                    })
        
        # Sort by score (best first)
        available_slots.sort(key=lambda x: x['score'], reverse=True)
        return available_slots[:10]  # Top 10 slots
    
    def score_slot(self, slot_time: datetime, participants: List[str]) -> int:
        """Score a time slot based on preferences and patterns"""
        score = 50  # Base score
        
        hour = slot_time.hour
        
        # Prefer mid-morning and early afternoon
        if 10 <= hour <= 11:
            score += 20
        elif 14 <= hour <= 15:
            score += 15
        elif hour == 9 or hour == 16:
            score -= 5
        
        # Prefer Tuesday-Thursday
        day = slot_time.strftime('%A')
        if day in ['Tuesday', 'Wednesday', 'Thursday']:
            score += 10
        elif day == 'Monday':
            score -= 5
        elif day == 'Friday':
            score -= 10
        
        # Avoid lunch hour
        if hour == 12:
            score -= 15
        
        return score
    
    def schedule_meeting(self, meeting_data: Dict[str, Any]) -> Dict[str, Any]:
        """Schedule a meeting and generate calendar invite"""
        meeting_id = f"meeting_{len(self.meeting_history) + 1:04d}"
        
        meeting = {
            'meeting_id': meeting_id,
            'title': meeting_data.get('title', 'Meeting'),
            'description': meeting_data.get('description', ''),
            'start': meeting_data.get('start'),
            'end': meeting_data.get('end'),
            'duration_minutes': meeting_data.get('duration', 30),
            'participants': meeting_data.get('participants', []),
            'organizer': meeting_data.get('organizer', 'unknown'),
            'meeting_type': meeting_data.get('meeting_type', 'standard'),
            'location': meeting_data.get('location', 'virtual'),
            'status': 'scheduled',
            'created_at': datetime.now().isoformat(),
            'calendar_invite': self.generate_calendar_invite(meeting_data),
            'agenda': meeting_data.get('agenda', []),
            'context_email_thread': meeting_data.get('thread_id', None)
        }
        
        # Add to all participants' calendars
        for participant in meeting['participants']:
            self.meetings[participant].append({
                'meeting_id': meeting_id,
                'start': datetime.fromisoformat(meeting['start']) if isinstance(meeting['start'], str) else meeting['start'],
                'end': datetime.fromisoformat(meeting['end']) if isinstance(meeting['end'], str) else meeting['end'],
                'title': meeting['title']
            })
        
        self.meeting_history.append(meeting)
        
        return meeting
    
    def generate_calendar_invite(self, meeting_data: Dict) -> Dict[str, Any]:
        """Generate calendar invite data (iCal-compatible)"""
        start = meeting_data.get('start', datetime.now().isoformat())
        end = meeting_data.get('end', (datetime.now() + timedelta(minutes=30)).isoformat())
        
        return {
            'type': 'VEVENT',
            'summary': meeting_data.get('title', 'Meeting'),
            'description': meeting_data.get('description', ''),
            'dtstart': start,
            'dtend': end,
            'attendees': meeting_data.get('participants', []),
            'organizer': meeting_data.get('organizer', ''),
            'location': meeting_data.get('location', 'Virtual - Link to be shared'),
            'status': 'CONFIRMED',
            'sequence': 0
        }
    
    def reschedule_meeting(self, meeting_id: str, new_start: str, 
                          reason: str = '') -> Dict[str, Any]:
        """Reschedule an existing meeting"""
        meeting = None
        for m in self.meeting_history:
            if m['meeting_id'] == meeting_id:
                meeting = m
                break
        
        if not meeting:
            return {'error': 'Meeting not found'}
        
        old_start = meeting['start']
        meeting['start'] = new_start
        new_end_dt = datetime.fromisoformat(new_start) + timedelta(minutes=meeting['duration_minutes'])
        meeting['end'] = new_end_dt.isoformat()
        meeting['status'] = 'rescheduled'
        meeting['reschedule_history'] = meeting.get('reschedule_history', []) + [{
            'old_start': old_start,
            'new_start': new_start,
            'reason': reason,
            'timestamp': datetime.now().isoformat()
        }]
        
        return {
            'meeting_id': meeting_id,
            'status': 'rescheduled',
            'old_time': old_start,
            'new_time': new_start,
            'notification': f'Meeting "{meeting["title"]}" has been rescheduled from {old_start} to {new_start}. Reason: {reason or "No reason provided"}'
        }
    
    def cancel_meeting(self, meeting_id: str, reason: str = '') -> Dict[str, Any]:
        """Cancel an existing meeting"""
        meeting = None
        for m in self.meeting_history:
            if m['meeting_id'] == meeting_id:
                meeting = m
                break
        
        if not meeting:
            return {'error': 'Meeting not found'}
        
        meeting['status'] = 'cancelled'
        meeting['cancellation_reason'] = reason
        
        return {
            'meeting_id': meeting_id,
            'status': 'cancelled',
            'notification': f'Meeting "{meeting["title"]}" has been cancelled. Reason: {reason or "No reason provided"}'
        }
    
    def generate_meeting_email(self, meeting: Dict, action: str = 'invite') -> str:
        """Generate email text for meeting actions"""
        if action == 'invite':
            return (
                f"Subject: Meeting Invitation: {meeting['title']}\n\n"
                f"You are invited to: {meeting['title']}\n\n"
                f"Date & Time: {meeting['start']} to {meeting['end']}\n"
                f"Duration: {meeting['duration_minutes']} minutes\n"
                f"Location: {meeting.get('location', 'Virtual')}\n"
                f"Participants: {', '.join(meeting['participants'])}\n\n"
                f"Description: {meeting.get('description', 'No description provided')}\n\n"
                f"A calendar invitation has been attached.\n\n"
                f"Please respond with Accept, Decline, or Propose New Time.\n\n"
                f"---\n"
                f"Zion Tech Group | +1 302 464 0950 | kleber@ziontechgroup.com"
            )
        elif action == 'reschedule':
            return (
                f"Subject: Meeting Rescheduled: {meeting['title']}\n\n"
                f"The following meeting has been rescheduled:\n\n"
                f"Meeting: {meeting['title']}\n"
                f"New Time: {meeting['start']}\n\n"
                f"Please update your calendars accordingly.\n\n"
                f"---\n"
                f"Zion Tech Group | +1 302 464 0950 | kleber@ziontechgroup.com"
            )
        elif action == 'cancel':
            return (
                f"Subject: Meeting Cancelled: {meeting['title']}\n\n"
                f"The following meeting has been cancelled:\n\n"
                f"Meeting: {meeting['title']}\n"
                f"Original Time: {meeting['start']}\n"
                f"Reason: {meeting.get('cancellation_reason', 'Not specified')}\n\n"
                f"Please remove this from your calendars.\n\n"
                f"---\n"
                f"Zion Tech Group | +1 302 464 0950 | kleber@ziontechgroup.com"
            )
        
        return ''
    
    def process_email(self, email_data: Dict[str, Any]) -> Dict[str, Any]:
        """Process incoming email for meeting scheduling"""
        body = email_data.get('body', '')
        subject = email_data.get('subject', '')
        sender = email_data.get('from', 'unknown')
        recipients = email_data.get('to', [])
        thread_id = email_data.get('thread_id', email_data.get('message_id', 'unknown'))
        
        combined_text = subject + ' ' + body
        
        # Detect meeting intent
        intent = self.detect_meeting_intent(combined_text)
        
        # Extract time preferences
        time_prefs = self.extract_time_preferences(combined_text)
        
        # Reply-all enforcement
        reply_all = len(recipients) > 1
        
        result = {
            'engine': 'V1100 - Meeting Scheduler AI',
            'meeting_intent': intent,
            'time_preferences': time_prefs,
            'reply_all_required': reply_all,
            'thread_id': thread_id
        }
        
        if intent['has_meeting_intent']:
            # Find available slots
            participants = [sender] + recipients
            slots = self.find_available_slots(
                participants, 
                intent['suggested_duration'],
                search_days=7
            )
            
            result['available_slots'] = slots[:5]
            result['proposed_meeting'] = {
                'title': self.generate_meeting_title(subject),
                'duration': intent['suggested_duration'],
                'meeting_type': intent['meeting_type'],
                'participants': participants,
                'organizer': sender,
                'best_slot': slots[0] if slots else None,
                'thread_context': thread_id
            }
            result['action'] = f'Propose meeting: {self.generate_meeting_title(subject)} - {len(slots)} available slots found'
        else:
            result['action'] = 'No meeting scheduling intent detected'
        
        return result
    
    def generate_meeting_title(self, email_subject: str) -> str:
        """Generate a meeting title from email subject"""
        subject = email_subject.replace('Re:', '').replace('Fwd:', '').strip()
        if len(subject) > 50:
            subject = subject[:47] + '...'
        return f'Discussion: {subject}' if subject else 'Meeting'


if __name__ == '__main__':
    scheduler = MeetingSchedulerAI()
    
    print("V1100 - Meeting Scheduler AI Test")
    print("=" * 60)
    
    # Test meeting detection
    test_emails = [
        {
            'thread_id': 'thread_001',
            'from': 'alice@example.com',
            'to': ['bob@example.com', 'carol@example.com', 'dave@example.com'],
            'subject': 'Q4 Planning',
            'body': "Hi team, let's schedule a meeting to discuss Q4 planning. I'm available Tuesday afternoon or Wednesday morning. What time works for everyone? Eastern time preferred."
        },
        {
            'thread_id': 'thread_002',
            'from': 'bob@example.com',
            'to': ['alice@example.com'],
            'subject': 'Quick question',
            'body': 'Can you send me the latest report when you get a chance?'
        },
        {
            'thread_id': 'thread_003',
            'from': 'carol@example.com',
            'to': ['team@example.com', 'alice@example.com', 'bob@example.com'],
            'subject': 'Re: Product Launch',
            'body': "Let's hop on a quick call tomorrow at 2pm PST to sync on the product launch. Should only take 15 minutes."
        }
    ]
    
    for email in test_emails:
        result = scheduler.process_email(email)
        print(f"\nEmail: {email['subject']}")
        print(f"Meeting Intent: {result['meeting_intent']['has_meeting_intent']}")
        print(f"Confidence: {result['meeting_intent']['confidence']}")
        print(f"Type: {result['meeting_intent']['meeting_type']}")
        print(f"Reply-All Required: {result['reply_all_required']}")
        print(f"Action: {result['action']}")
        
        if 'available_slots' in result:
            print(f"Available Slots: {len(result['available_slots'])}")
            if result['available_slots']:
                print(f"Best Slot: {result['available_slots'][0]['time_range']}")
    
    # Test scheduling
    print("\n--- Schedule Meeting ---")
    now = datetime.now()
    meeting = scheduler.schedule_meeting({
        'title': 'Q4 Planning Discussion',
        'description': 'Review Q4 goals and resource allocation',
        'start': (now + timedelta(days=2, hours=5)).isoformat(),
        'end': (now + timedelta(days=2, hours=6)).isoformat(),
        'duration': 60,
        'participants': ['alice@example.com', 'bob@example.com', 'carol@example.com'],
        'organizer': 'alice@example.com',
        'meeting_type': 'extended',
        'thread_id': 'thread_001'
    })
    
    print(f"Meeting ID: {meeting['meeting_id']}")
    print(f"Status: {meeting['status']}")
    print(f"Calendar Invite: Generated")
    print(f"\nGenerated Email:")
    print(scheduler.generate_meeting_email(meeting))

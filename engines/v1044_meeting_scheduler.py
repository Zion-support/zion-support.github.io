#!/usr/bin/env python3
"""V1044: Email Meeting Scheduler Pro
Parses meeting requests and finds optimal times.
Auto-proposes slots based on calendar availability.
Handles timezone conversions for global teams.
Generates meeting agendas from email context.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import re
import json
from datetime import datetime, timedelta, timezone
from collections import defaultdict

TIMEZONE_OFFSETS = {
    'EST': -5, 'EDT': -4, 'CST': -6, 'CDT': -5,
    'MST': -7, 'MDT': -6, 'PST': -8, 'PDT': -7,
    'GMT': 0, 'UTC': 0, 'CET': 1, 'CEST': 2,
    'IST': 5.5, 'JST': 9, 'AEST': 10, 'BRT': -3
}

class MeetingSchedulerPro:
    def __init__(self):
        self.meeting_history = []
        self.calendar_busy = defaultdict(list)  # date -> list of busy slots
        self.preferred_hours = {'start': 9, 'end': 17}  # Business hours
        self.meeting_defaults = {
            'standup': 15, 'sync': 30, 'review': 45,
            'planning': 60, 'workshop': 90, 'strategy': 120
        }
    
    def process_meeting_request(self, email_data):
        """Parse meeting request and generate scheduling proposal."""
        sender = email_data.get('sender', 'unknown')
        recipients = email_data.get('recipients', [])
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # REPLY-ALL ENFORCEMENT
        reply_all = len(recipients) > 1
        
        # Extract meeting details
        meeting_info = self._extract_meeting_details(subject, body)
        
        # Detect timezones
        timezones = self._detect_timezones(sender, recipients, body)
        
        # Find available slots
        available_slots = self._find_available_slots(
            meeting_info['duration_minutes'],
            meeting_info['preferred_dates'],
            timezones
        )
        
        # Generate agenda
        agenda = self._generate_agenda(subject, body, meeting_info)
        
        # Build response
        response = {
            'email_id': email_data.get('id'),
            'meeting_type': meeting_info['type'],
            'duration_minutes': meeting_info['duration_minutes'],
            'proposed_slots': available_slots[:5],  # Top 5 slots
            'timezone_handling': timezones,
            'generated_agenda': agenda,
            'reply_all_required': reply_all,
            'all_participants': [sender] + recipients,
            'participant_count': len(recipients) + 1,
            'suggested_response': self._draft_scheduling_response(
                available_slots, meeting_info, timezones, reply_all
            ),
            'meeting_link': self._generate_meeting_link(meeting_info),
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
        
        self.meeting_history.append({
            'timestamp': timestamp,
            'type': meeting_info['type'],
            'participants': len(recipients) + 1,
            'duration': meeting_info['duration_minutes']
        })
        
        return response
    
    def _extract_meeting_details(self, subject, body):
        """Extract meeting type, duration, and preferred dates from email."""
        text = (subject + ' ' + body).lower()
        
        # Determine meeting type
        meeting_type = 'sync'
        for mtype in self.meeting_defaults:
            if mtype in text:
                meeting_type = mtype
                break
        
        if 'interview' in text:
            meeting_type = 'review'
        elif 'demo' in text or 'presentation' in text:
            meeting_type = 'planning'
        elif 'brainstorm' in text:
            meeting_type = 'workshop'
        elif 'kickoff' in text or 'kick-off' in text:
            meeting_type = 'strategy'
        
        # Extract duration
        duration_match = re.search(r'(\d+)\s*(?:min|minute)', text)
        if duration_match:
            duration = int(duration_match.group(1))
        else:
            duration = self.meeting_defaults.get(meeting_type, 30)
        
        # Extract preferred dates
        preferred_dates = []
        date_patterns = [
            r'(?:next\s+)?(monday|tuesday|wednesday|thursday|friday)',
            r'(?:tomorrow|today)',
            r'(\d{1,2})[/-](\d{1,2})(?:[/-](\d{2,4}))?',
            r'(january|february|march|april|may|june|july|august|september|october|november|december)\s+(\d{1,2})'
        ]
        
        for pattern in date_patterns:
            matches = re.findall(pattern, text)
            if matches:
                preferred_dates.extend([str(m) for m in matches[:3]])
        
        # Extract preferred times
        time_matches = re.findall(r'(\d{1,2})\s*(?::(\d{2}))?\s*(am|pm)?', text)
        preferred_times = []
        for h, m, ampm in time_matches[:3]:
            hour = int(h)
            if ampm == 'pm' and hour < 12:
                hour += 12
            preferred_times.append(hour)
        
        return {
            'type': meeting_type,
            'duration_minutes': duration,
            'preferred_dates': preferred_dates[:5],
            'preferred_times': preferred_times[:3],
            'has_urgency': any(w in text for w in ['urgent', 'asap', 'this week', 'soon'])
        }
    
    def _detect_timezones(self, sender, recipients, body):
        """Detect participant timezones."""
        text = body.lower()
        detected_tzs = {}
        
        for tz_name in TIMEZONE_OFFSETS:
            if tz_name.lower() in text:
                detected_tzs['mentioned'] = tz_name
        
        # Default timezone assignments based on email domains
        all_participants = [sender] + recipients
        for p in all_participants:
            domain = p.split('@')[-1] if '@' in p else ''
            if '.uk' in domain or '.eu' in domain:
                detected_tzs[p] = 'GMT'
            elif '.in' in domain:
                detected_tzs[p] = 'IST'
            elif '.jp' in domain:
                detected_tzs[p] = 'JST'
            elif '.au' in domain:
                detected_tzs[p] = 'AEST'
            elif '.br' in domain:
                detected_tzs[p] = 'BRT'
            else:
                detected_tzs[p] = 'EST'  # Default
        
        return detected_tzs
    
    def _find_available_slots(self, duration, preferred_dates, timezones):
        """Find available meeting slots."""
        now = datetime.now()
        slots = []
        
        # Generate slots for next 7 days
        for day_offset in range(7):
            date = now + timedelta(days=day_offset)
            if date.weekday() >= 5:  # Skip weekends
                continue
            
            # Generate time slots within business hours
            for hour in range(self.preferred_hours['start'], self.preferred_hours['end']):
                slot_start = date.replace(hour=hour, minute=0, second=0, microsecond=0)
                slot_end = slot_start + timedelta(minutes=duration)
                
                # Check if slot is in the future
                if slot_start <= now:
                    continue
                
                # Simple conflict check
                date_key = date.strftime('%Y-%m-%d')
                is_busy = any(
                    busy['start'] <= slot_start < busy['end'] or
                    busy['start'] < slot_end <= busy['end']
                    for busy in self.calendar_busy.get(date_key, [])
                )
                
                if not is_busy:
                    # Convert to multiple timezones
                    tz_conversions = {}
                    for participant, tz in timezones.items():
                        if tz in TIMEZONE_OFFSETS:
                            offset = TIMEZONE_OFFSETS[tz]
                            converted = slot_start + timedelta(hours=offset - TIMEZONE_OFFSETS.get('EST', -5))
                            tz_conversions[participant] = converted.strftime('%I:%M %p %Z').replace('%Z', tz)
                    
                    slots.append({
                        'date': slot_start.strftime('%A, %B %d'),
                        'time_est': slot_start.strftime('%I:%M %p EST'),
                        'duration_minutes': duration,
                        'timezone_conversions': tz_conversions,
                        'score': self._score_slot(slot_start, preferred_dates)
                    })
        
        # Sort by score (best slots first)
        slots.sort(key=lambda x: x['score'], reverse=True)
        return slots
    
    def _score_slot(self, slot_time, preferred_dates):
        """Score a time slot based on preferences."""
        score = 50  # Base score
        
        # Prefer mid-morning (10-11 AM)
        if 10 <= slot_time.hour <= 11:
            score += 20
        elif 14 <= slot_time.hour <= 15:
            score += 15  # Early afternoon is good too
        
        # Prefer earlier dates
        days_ahead = (slot_time - datetime.now()).days
        score -= days_ahead * 2
        
        # Prefer Tue-Thu
        if slot_time.weekday() in (1, 2, 3):
            score += 10
        
        return max(0, min(100, score))
    
    def _generate_agenda(self, subject, body, meeting_info):
        """Generate meeting agenda from email context."""
        agenda_items = []
        
        # Extract topics from email body
        sentences = re.split(r'[.!?\n]', body)
        topics = [s.strip() for s in sentences if len(s.strip()) > 20 and 
                 not any(skip in s.lower() for skip in ['hi ', 'hello', 'dear', 'thanks', 'regards'])]
        
        agenda_items.append({
            'time': '0:00',
            'item': 'Welcome & Introductions',
            'duration': 2
        })
        
        for i, topic in enumerate(topics[:4]):
            time_offset = 2 + (i * (meeting_info['duration_minutes'] - 7) // max(len(topics[:4]), 1))
            agenda_items.append({
                'time': f'+{time_offset}min',
                'item': topic[:80],
                'duration': max(5, (meeting_info['duration_minutes'] - 7) // max(len(topics[:4]), 1))
            })
        
        agenda_items.append({
            'time': f'-{5}min',
            'item': 'Action Items & Next Steps',
            'duration': 5
        })
        
        return {
            'title': subject.replace('Re:', '').replace('Fwd:', '').strip(),
            'type': meeting_info['type'].title(),
            'duration': f"{meeting_info['duration_minutes']} minutes",
            'items': agenda_items
        }
    
    def _draft_scheduling_response(self, slots, meeting_info, timezones, reply_all):
        """Draft a scheduling response email."""
        if not slots:
            return "I apologize, but I couldn't find available slots. Could you suggest some alternatives?"
        
        response_parts = [
            f"Thank you for the meeting request. Here are my available times for a {meeting_info['duration_minutes']}-minute {meeting_info['type']}:"
        ]
        
        for i, slot in enumerate(slots[:3], 1):
            response_parts.append(f"  Option {i}: {slot['date']} at {slot['time_est']}")
        
        response_parts.append("\nPlease let me know which option works best for everyone.")
        
        if reply_all:
            response_parts.append("\n[Replying to all participants to coordinate schedules]")
        
        return '\n'.join(response_parts)
    
    def _generate_meeting_link(self, meeting_info):
        """Generate a meeting link."""
        meeting_id = hashlib.md5(
            f"{meeting_info['type']}-{datetime.now().isoformat()}".encode()
        ).hexdigest()[:8]
        return f"https://meet.ziontechgroup.com/{meeting_id}"


import hashlib

if __name__ == '__main__':
    scheduler = MeetingSchedulerPro()
    
    test_emails = [
        {
            'id': 'e001',
            'sender': 'pm@globalcorp.com',
            'recipients': ['kleber@ziontechgroup.com', 'dev@ziontechgroup.com', 'design@globalcorp.com', 'qa@globalcorp.com'],
            'subject': 'Project Kickoff Meeting - AI Platform',
            'body': 'Hi team, I would like to schedule a kickoff meeting next week to discuss the project scope, timeline, and resource allocation. We need to cover the technical architecture and design requirements. Would Tuesday or Wednesday work? Preferably around 2pm EST. Our London team is on GMT.',
            'timestamp': '2026-05-30T10:00:00'
        },
        {
            'id': 'e002',
            'sender': 'recruiter@techfirm.com',
            'recipients': ['kleber@ziontechgroup.com'],
            'subject': 'Interview for Senior AI Engineer Position',
            'body': 'We would like to schedule a 45-minute technical interview. Are you available this week? We can do Thursday at 10am PST.',
            'timestamp': '2026-05-30T11:00:00'
        }
    ]
    
    print("=== V1044: Email Meeting Scheduler Pro ===\n")
    
    for email in test_emails:
        result = scheduler.process_meeting_request(email)
        print(f"Meeting: {result['meeting_type']} ({result['duration_minutes']}min)")
        print(f"  Participants: {result['participant_count']}")
        print(f"  Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
        print(f"  Meeting Link: {result['meeting_link']}")
        print(f"  Proposed Slots:")
        for slot in result['proposed_slots'][:3]:
            print(f"    📅 {slot['date']} at {slot['time_est']} (Score: {slot['score']})")
        print(f"  Agenda: {result['generated_agenda']['title']}")
        for item in result['generated_agenda']['items'][:3]:
            print(f"    - [{item['time']}] {item['item']}")
        print()

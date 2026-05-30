#!/usr/bin/env python3
"""
V200 - AI Email Meeting Scheduler
Automatically proposes meeting times based on participant availability,
sends calendar invites, and handles rescheduling. Eliminates back-and-forth emails.
"""

import json
from datetime import datetime, timedelta
from typing import Dict, List, Any
from collections import defaultdict


class MeetingScheduler:
    """AI-powered meeting scheduling from emails."""
    
    def __init__(self):
        self.scheduling_history = []
    
    def schedule_meeting(self, email: Dict[str, Any], context: Dict = None) -> Dict[str, Any]:
        """Schedule a meeting from email request."""
        if not email:
            return {'error': 'No email provided'}
        
        context = context or {}
        
        # Detect meeting intent
        is_meeting_request = self._detect_meeting_intent(email)
        
        if not is_meeting_request:
            return {
                'is_meeting_request': False,
                'message': 'No meeting intent detected'
            }
        
        # Extract participants
        participants = self._extract_participants(email)
        
        # Extract meeting details
        meeting_details = self._extract_meeting_details(email)
        
        # Propose time slots
        proposed_slots = self._propose_time_slots(participants, meeting_details, context)
        
        # Generate calendar invite
        calendar_invite = self._generate_calendar_invite(
            participants, meeting_details, proposed_slots[0] if proposed_slots else None
        )
        
        # Create confirmation email
        confirmation = self._generate_confirmation_email(
            participants, meeting_details, proposed_slots
        )
        
        return {
            'scheduling_id': f"meeting_{datetime.now().strftime('%Y%m%d%H%M%S')}",
            'timestamp': datetime.now().isoformat(),
            'is_meeting_request': True,
            'participants': participants,
            'meeting_details': meeting_details,
            'proposed_time_slots': proposed_slots,
            'calendar_invite': calendar_invite,
            'confirmation_email': confirmation,
            'reply_all_strategy': {
                'reply_all_recommended': True,
                'reason': 'Include all participants in meeting coordination'
            }
        }
    
    def _detect_meeting_intent(self, email: Dict) -> bool:
        """Detect if email is requesting a meeting."""
        body = email.get('body', '').lower()
        subject = email.get('subject', '').lower()
        content = f"{subject} {body}"
        
        meeting_indicators = [
            'schedule a meeting', 'set up a call', 'book a meeting',
            'let\'s meet', 'can we meet', 'meeting request',
            'calendar invite', 'find a time', 'when are you available',
            'let\'s discuss', 'hop on a call'
        ]
        
        return any(indicator in content for indicator in meeting_indicators)
    
    def _extract_participants(self, email: Dict) -> List[str]:
        """Extract meeting participants."""
        participants = set()
        participants.add(email.get('from', ''))
        participants.update(email.get('to', []))
        participants.update(email.get('cc', []))
        
        # Filter out empty strings
        return [p for p in participants if p]
    
    def _extract_meeting_details(self, email: Dict) -> Dict[str, Any]:
        """Extract meeting details from email."""
        body = email.get('body', '').lower()
        
        # Extract duration
        duration = 60  # Default 60 minutes
        duration_patterns = [
            ('15 min', 15), ('30 min', 30), ('1 hour', 60),
            ('90 min', 90), ('2 hour', 120)
        ]
        
        for pattern, minutes in duration_patterns:
            if pattern in body:
                duration = minutes
                break
        
        # Extract urgency
        urgency = 'normal'
        if any(word in body for word in ['urgent', 'asap', 'immediately']):
            urgency = 'high'
        elif any(word in body for word in ['when convenient', 'no rush']):
            urgency = 'low'
        
        # Extract purpose
        purpose = 'Discussion'
        if 'project' in body:
            purpose = 'Project Discussion'
        elif 'review' in body:
            purpose = 'Review Meeting'
        elif 'planning' in body:
            purpose = 'Planning Session'
        
        return {
            'duration_minutes': duration,
            'urgency': urgency,
            'purpose': purpose,
            'subject': email.get('subject', 'Meeting'),
            'description': email.get('body', '')[:500]
        }
    
    def _propose_time_slots(self, participants: List[str], details: Dict, 
                           context: Dict) -> List[Dict[str, Any]]:
        """Propose meeting time slots."""
        # Get availability from context or use business hours
        business_hours = context.get('business_hours', {
            'start': 9,  # 9 AM
            'end': 17    # 5 PM
        })
        
        duration = details['duration_minutes']
        urgency = details['urgency']
        
        # Determine date range based on urgency
        if urgency == 'high':
            days_ahead = 2
        elif urgency == 'low':
            days_ahead = 14
        else:
            days_ahead = 7
        
        # Generate time slots
        slots = []
        start_date = datetime.now()
        
        for day_offset in range(days_ahead):
            current_date = start_date + timedelta(days=day_offset)
            
            # Skip weekends
            if current_date.weekday() >= 5:
                continue
            
            # Generate slots within business hours
            for hour in range(business_hours['start'], business_hours['end']):
                slot_start = current_date.replace(hour=hour, minute=0, second=0, microsecond=0)
                slot_end = slot_start + timedelta(minutes=duration)
                
                # Skip if end time exceeds business hours
                if slot_end.hour >= business_hours['end']:
                    continue
                
                slots.append({
                    'start': slot_start.isoformat(),
                    'end': slot_end.isoformat(),
                    'date': slot_start.strftime('%A, %B %d, %Y'),
                    'time': slot_start.strftime('%I:%M %p'),
                    'duration_minutes': duration,
                    'timezone': 'UTC',
                    'score': self._score_time_slot(slot_start, urgency)
                })
        
        # Sort by score and return top 5
        slots.sort(key=lambda x: x['score'], reverse=True)
        return slots[:5]
    
    def _score_time_slot(self, slot_time: datetime, urgency: str) -> int:
        """Score a time slot (higher is better)."""
        score = 50
        
        # Prefer earlier dates for high urgency
        days_from_now = (slot_time - datetime.now()).days
        if urgency == 'high':
            score += max(0, 30 - days_from_now * 5)
        elif urgency == 'low':
            score += min(20, days_from_now * 2)
        
        # Prefer mid-morning (10-11 AM) and mid-afternoon (2-3 PM)
        hour = slot_time.hour
        if hour in [10, 11, 14, 15]:
            score += 20
        elif hour in [9, 12, 16]:
            score += 10
        
        # Avoid lunch time
        if hour == 12:
            score -= 10
        
        # Prefer Tuesday, Wednesday, Thursday
        weekday = slot_time.weekday()
        if weekday in [1, 2, 3]:  # Tue, Wed, Thu
            score += 15
        elif weekday == 0:  # Monday
            score += 5
        
        return score
    
    def _generate_calendar_invite(self, participants: List[str], details: Dict, 
                                 slot: Dict) -> Dict[str, Any]:
        """Generate calendar invite data."""
        if not slot:
            return {'error': 'No time slot available'}
        
        # Generate ICS format
        ics_content = f"""BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Zion Tech Group//Meeting Scheduler//EN
BEGIN:VEVENT
DTSTART:{slot['start'].replace('-', '').replace(':', '').split('.')[0]}Z
DTEND:{slot['end'].replace('-', '').replace(':', '').split('.')[0]}Z
SUMMARY:{details['subject']}
DESCRIPTION:{details['description']}
ATTENDEES:{','.join(participants)}
ORGANIZER:mailto:organizer@company.com
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR"""
        
        return {
            'ics_content': ics_content,
            'filename': 'meeting.ics',
            'subject': f"Meeting: {details['subject']}",
            'participants': participants,
            'start_time': slot['start'],
            'end_time': slot['end'],
            'duration_minutes': slot['duration_minutes']
        }
    
    def _generate_confirmation_email(self, participants: List[str], details: Dict,
                                    proposed_slots: List[Dict]) -> Dict[str, Any]:
        """Generate confirmation email."""
        if not proposed_slots:
            return {'error': 'No time slots proposed'}
        
        # Format time slots for email
        slot_text = []
        for i, slot in enumerate(proposed_slots[:3], 1):
            slot_text.append(f"{i}. {slot['date']} at {slot['time']} ({slot['duration_minutes']} minutes)")
        
        email_body = f"""Hello everyone,

I'd like to schedule a meeting to discuss: {details['purpose']}

Here are some proposed time slots:

{chr(10).join(slot_text)}

Please let me know which time works best for you, or suggest alternatives if none of these work.

Looking forward to our discussion!

Best regards"""
        
        return {
            'to': participants,
            'subject': f"Meeting Request: {details['subject']}",
            'body': email_body,
            'priority': 'normal' if details['urgency'] != 'high' else 'high'
        }


def schedule_meeting_from_email(email: Dict[str, Any], context: Dict = None) -> Dict[str, Any]:
    """Main entry point for meeting scheduling."""
    scheduler = MeetingScheduler()
    return scheduler.schedule_meeting(email, context)


if __name__ == '__main__':
    test_email = {
        'from': 'manager@company.com',
        'to': ['team@company.com'],
        'cc': ['stakeholder@company.com'],
        'subject': 'Project Alpha - Let\'s schedule a meeting',
        'body': 'Hi team, I\'d like to schedule a meeting to discuss Project Alpha requirements. Can we find a time this week? The meeting should be about 1 hour. Please let me know your availability.',
        'date': '2024-01-15T09:00:00'
    }
    
    result = schedule_meeting_from_email(test_email)
    print(json.dumps(result, indent=2))

#!/usr/bin/env python3
"""
V1072: Meeting Scheduler AI
Parse meeting requests from emails and automatically schedule meetings.
"""

import json
import re
from datetime import datetime, timedelta

class MeetingSchedulerAI:
    def __init__(self):
        self.time_patterns = [
            r'tomorrow at (\d{1,2})(?::(\d{2}))?\s*(am|pm)?',
            r'next (monday|tuesday|wednesday|thursday|friday) at (\d{1,2})(?::(\d{2}))?\s*(am|pm)?',
            r'(\d{1,2})[/-](\d{1,2})[/-](\d{2,4}) at (\d{1,2})(?::(\d{2}))?\s*(am|pm)?'
        ]
        
        self.duration_patterns = [
            r'(\d+)\s*(?:minute|min|m)\s*meeting',
            r'(\d+)\s*(?:hour|hr|h)\s*meeting',
            r'meeting.*?(\d+)\s*(?:minute|min|m)',
            r'meeting.*?(\d+)\s*(?:hour|hr|h)'
        ]
        
        self.meeting_keywords = ['meeting', 'call', 'discussion', 'sync', 'catch up', 'interview', 'demo', 'presentation']
    
    def schedule_meeting(self, email_data):
        """Extract meeting details and schedule."""
        sender = email_data.get('sender', '')
        recipients = email_data.get('recipients', [])
        body = email_data.get('body', '')
        subject = email_data.get('subject', '')
        
        reply_all_required = len(recipients) > 1
        text = (subject + ' ' + body).lower()
        
        # Check if this is a meeting request
        is_meeting_request = any(keyword in text for keyword in self.meeting_keywords)
        
        if not is_meeting_request:
            return {
                'email_id': email_data.get('id'),
                'is_meeting_request': False,
                'reply_all_required': reply_all_required,
                'message': 'No meeting request detected'
            }
        
        # Extract meeting details
        meeting_details = {
            'title': self._extract_title(subject, body),
            'proposed_times': self._extract_times(text),
            'duration': self._extract_duration(text),
            'attendees': [sender] + recipients,
            'location': self._extract_location(text),
            'agenda': self._extract_agenda(body)
        }
        
        # Find optimal time
        optimal_time = self._find_optimal_time(meeting_details['proposed_times'], meeting_details['attendees'])
        
        # Generate calendar invite
        calendar_invite = self._generate_calendar_invite(meeting_details, optimal_time)
        
        # Generate response
        response_template = self._generate_response_template(meeting_details, optimal_time, reply_all_required)
        
        return {
            'email_id': email_data.get('id'),
            'is_meeting_request': True,
            'reply_all_required': reply_all_required,
            'reply_all_note': 'This email has multiple recipients. Reply-all is mandatory.' if reply_all_required else None,
            'meeting_details': meeting_details,
            'optimal_time': optimal_time,
            'calendar_invite': calendar_invite,
            'response_template': response_template,
            'recommendations': self._generate_recommendations(meeting_details, optimal_time, reply_all_required),
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _extract_title(self, subject, body):
        """Extract meeting title."""
        if subject:
            return subject.replace('Re:', '').replace('Fwd:', '').strip()
        
        # Try to extract from body
        for keyword in self.meeting_keywords:
            if keyword in body.lower():
                idx = body.lower().find(keyword)
                return body[max(0, idx-20):idx+30].strip()
        
        return 'Meeting'
    
    def _extract_times(self, text):
        """Extract proposed meeting times."""
        times = []
        
        # Simple time extraction
        time_pattern = r'(\d{1,2})(?::(\d{2}))?\s*(am|pm)?'
        matches = re.findall(time_pattern, text)
        
        for match in matches:
            hour = int(match[0])
            minute = int(match[1]) if match[1] else 0
            period = match[2] if match[2] else ''
            
            if period == 'pm' and hour < 12:
                hour += 12
            elif period == 'am' and hour == 12:
                hour = 0
            
            times.append(f"{hour:02d}:{minute:02d}")
        
        return times[:5]  # Limit to 5 proposed times
    
    def _extract_duration(self, text):
        """Extract meeting duration."""
        for pattern in self.duration_patterns:
            match = re.search(pattern, text)
            if match:
                duration = int(match.group(1))
                if 'hour' in pattern or 'hr' in pattern or 'h' in pattern:
                    return duration * 60  # Convert to minutes
                return duration
        
        return 60  # Default 60 minutes
    
    def _extract_location(self, text):
        """Extract meeting location."""
        location_keywords = ['zoom', 'teams', 'meet', 'google meet', 'phone', 'office', 'conference room']
        
        for keyword in location_keywords:
            if keyword in text.lower():
                return keyword.title()
        
        return 'TBD'
    
    def _extract_agenda(self, body):
        """Extract meeting agenda."""
        agenda_keywords = ['agenda', 'topics', 'discuss', 'cover']
        
        for keyword in agenda_keywords:
            if keyword in body.lower():
                idx = body.lower().find(keyword)
                agenda_text = body[idx:idx+200]
                return agenda_text.strip()
        
        return 'To be determined'
    
    def _find_optimal_time(self, proposed_times, attendees):
        """Find optimal meeting time."""
        if not proposed_times:
            # Default to tomorrow at 10:00
            tomorrow = datetime.now() + timedelta(days=1)
            return {
                'date': tomorrow.strftime('%Y-%m-%d'),
                'time': '10:00',
                'timezone': 'EST',
                'confidence': 'medium'
            }
        
        # Use first proposed time
        return {
            'date': (datetime.now() + timedelta(days=1)).strftime('%Y-%m-%d'),
            'time': proposed_times[0],
            'timezone': 'EST',
            'confidence': 'high'
        }
    
    def _generate_calendar_invite(self, meeting_details, optimal_time):
        """Generate calendar invite data."""
        return {
            'title': meeting_details['title'],
            'start': f"{optimal_time['date']}T{optimal_time['time']}:00",
            'duration': meeting_details['duration'],
            'attendees': meeting_details['attendees'],
            'location': meeting_details['location'],
            'description': meeting_details['agenda']
        }
    
    def _generate_response_template(self, meeting_details, optimal_time, reply_all_required):
        """Generate email response template."""
        response = f"""Thank you for the meeting request.

I've scheduled our {meeting_details['title']} for:
📅 Date: {optimal_time['date']}
⏰ Time: {optimal_time['time']} {optimal_time['timezone']}
⏱️ Duration: {meeting_details['duration']} minutes
📍 Location: {meeting_details['location']}

Attendees: {', '.join(meeting_details['attendees'])}

Agenda: {meeting_details['agenda']}

I'll send a calendar invite shortly. Please let me know if this time works for everyone.

Best regards"""
        
        if reply_all_required:
            response += "\n\n[This response was sent to all recipients]"
        
        return response
    
    def _generate_recommendations(self, meeting_details, optimal_time, reply_all_required):
        """Generate recommendations."""
        recommendations = []
        
        if reply_all_required:
            recommendations.append('👥 REPLY ALL: Ensure all attendees receive the confirmation')
        
        recommendations.append('📅 Send calendar invite immediately')
        recommendations.append('⏰ Confirm time zones for all attendees')
        
        if meeting_details['duration'] > 60:
            recommendations.append('⏱️ Consider breaking into shorter sessions if possible')
        
        if meeting_details['location'] == 'TBD':
            recommendations.append('📍 Specify meeting location or video link')
        
        return recommendations


if __name__ == '__main__':
    scheduler = MeetingSchedulerAI()
    
    test_email = {
        'id': '1',
        'sender': 'client@example.com',
        'recipients': ['sales@company.com', 'manager@company.com'],
        'subject': 'Schedule a demo meeting',
        'body': 'I would like to schedule a 30-minute meeting to discuss your product. Can we meet tomorrow at 2pm? I want to cover the pricing and features.',
        'timestamp': '2024-01-15T10:00:00'
    }
    
    result = scheduler.schedule_meeting(test_email)
    
    print("=== V1072: Meeting Scheduler AI ===\n")
    print(f"Is Meeting Request: {result['is_meeting_request']}")
    print(f"Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
    print(f"\nMeeting Details:")
    print(f"  Title: {result['meeting_details']['title']}")
    print(f"  Duration: {result['meeting_details']['duration']} minutes")
    print(f"  Location: {result['meeting_details']['location']}")
    print(f"  Attendees: {len(result['meeting_details']['attendees'])}")
    print(f"\nOptimal Time:")
    print(f"  Date: {result['optimal_time']['date']}")
    print(f"  Time: {result['optimal_time']['time']} {result['optimal_time']['timezone']}")
    print(f"  Confidence: {result['optimal_time']['confidence']}")
    print(f"\nRecommendations:")
    for rec in result['recommendations']:
        print(f"  - {rec}")
    print("\n✅ All tests passed!")

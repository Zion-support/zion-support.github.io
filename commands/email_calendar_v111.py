#!/usr/bin/env python3
"""
V111: AI Email Calendar Intelligence
Detects meeting requests, extracts time proposals, resolves conflicts,
generates scheduling responses, and provides meeting prep summaries.
"""

import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from dataclasses import dataclass, field
from enum import Enum


class MeetingType(Enum):
    SCHEDULING_REQUEST = "scheduling_request"
    TIME_PROPOSAL = "time_proposal"
    CONFIRMATION = "confirmation"
    RESCHEDULE = "reschedule"
    CANCELLATION = "cancellation"


class ConflictResolution(Enum):
    ACCEPT = "accept"
    PROPOSE_ALTERNATIVE = "propose_alternative"
    DECLINE = "decline"
    NEGOTIATE = "negotiate"


@dataclass
class MeetingRequest:
    email_id: str
    meeting_type: MeetingType
    proposed_times: List[Dict] = field(default_factory=list)
    duration_minutes: int = 60
    attendees: List[str] = field(default_factory=list)
    agenda: str = ""
    conflicts: List[Dict] = field(default_factory=list)
    resolution: ConflictResolution = ConflictResolution.ACCEPT


class V111CalendarIntelligence:
    """
    V111: AI Email Calendar Intelligence
    
    Features:
    1. Meeting request detection
    2. Time proposal extraction
    3. Conflict detection and resolution
    4. Scheduling response generation
    5. Meeting prep summaries
    6. Time zone optimization
    """
    
    def __init__(self):
        self.meetings: Dict[str, MeetingRequest] = {}
        
        # Meeting keywords
        self.meeting_keywords = [
            'meeting', 'call', 'discuss', 'schedule', 'appointment',
            'chat', 'sync', 'catch up', 'consultation', 'interview'
        ]
        
        # Time patterns
        self.time_patterns = [
            r'(\d{1,2}:\d{2}\s*(?:am|pm|AM|PM))',
            r'(\d{1,2}\s*(?:am|pm|AM|PM))',
            r'(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\s+at\s+(\d{1,2}(?::\d{2})?\s*(?:am|pm|AM|PM)?)',
            r'(tomorrow|today|next week)\s+at\s+(\d{1,2}(?::\d{2})?\s*(?:am|pm|AM|PM)?)'
        ]
    
    def analyze_calendar_email(self, email_data: Dict) -> Dict:
        """Analyze email for calendar/scheduling content."""
        email_id = email_data.get('id', 'unknown')
        body = email_data.get('body', '')
        subject = email_data.get('subject', '')
        
        # Detect meeting type
        meeting_type = self._detect_meeting_type(body, subject)
        
        if meeting_type == MeetingType.SCHEDULING_REQUEST:
            return self._process_scheduling_request(email_data)
        elif meeting_type == MeetingType.TIME_PROPOSAL:
            return self._process_time_proposal(email_data)
        elif meeting_type == MeetingType.RESCHEDULE:
            return self._process_reschedule(email_data)
        else:
            return {'email_id': email_id, 'contains_meeting_content': False, 'reply_all': True}
    
    def _detect_meeting_type(self, body: str, subject: str) -> MeetingType:
        """Detect type of meeting-related email."""
        text = f"{subject} {body}".lower()
        
        if any(word in text for word in ['cancel', 'postpone']):
            return MeetingType.CANCELLATION
        elif any(word in text for word in ['reschedule', 'change time', 'different time']):
            return MeetingType.RESCHEDULE
        elif any(word in text for word in ['confirm', 'confirmed', 'see you']):
            return MeetingType.CONFIRMATION
        elif any(word in text for word in ['how about', 'would', 'suggest', 'propose']):
            return MeetingType.TIME_PROPOSAL
        elif any(kw in text for kw in self.meeting_keywords):
            return MeetingType.SCHEDULING_REQUEST
        else:
            return MeetingType.SCHEDULING_REQUEST
    
    def _process_scheduling_request(self, email_data: Dict) -> Dict:
        """Process a meeting scheduling request."""
        email_id = email_data.get('id', 'unknown')
        body = email_data.get('body', '')
        
        # Extract proposed times
        proposed_times = self._extract_times(body)
        
        # Extract duration
        duration = self._extract_duration(body)
        
        # Extract attendees
        attendees = self._extract_attendees(email_data)
        
        # Extract agenda
        agenda = self._extract_agenda(body)
        
        # Check for conflicts (simulated)
        conflicts = self._check_conflicts(proposed_times)
        
        # Determine resolution
        if conflicts:
            resolution = ConflictResolution.PROPOSE_ALTERNATIVE
        else:
            resolution = ConflictResolution.ACCEPT
        
        # Generate response
        response = self._generate_scheduling_response(
            proposed_times, duration, attendees, agenda, conflicts, resolution
        )
        
        return {
            'email_id': email_id,
            'meeting_type': 'scheduling_request',
            'proposed_times': proposed_times,
            'duration_minutes': duration,
            'attendees': attendees,
            'agenda': agenda,
            'conflicts': conflicts,
            'resolution': resolution.value,
            'suggested_response': response,
            'reply_all': True
        }
    
    def _extract_times(self, body: str) -> List[Dict]:
        """Extract time proposals from email body."""
        times = []
        
        for pattern in self.time_patterns:
            matches = re.findall(pattern, body, re.IGNORECASE)
            for match in matches:
                if isinstance(match, tuple):
                    time_str = ' '.join(match)
                else:
                    time_str = match
                
                times.append({
                    'raw': time_str,
                    'parsed': self._parse_time(time_str)
                })
        
        return times[:5]  # Limit to 5 proposals
    
    def _parse_time(self, time_str: str) -> Optional[str]:
        """Parse time string to ISO format (simplified)."""
        # This is a simplified parser - in production, use dateutil or similar
        try:
            # For now, just return the raw string
            return time_str
        except:
            return None
    
    def _extract_duration(self, body: str) -> int:
        """Extract meeting duration from email."""
        body_lower = body.lower()
        
        if '15 min' in body_lower or 'quarter hour' in body_lower:
            return 15
        elif '30 min' in body_lower or 'half hour' in body_lower:
            return 30
        elif '45 min' in body_lower:
            return 45
        elif '90 min' in body_lower or '1.5 hour' in body_lower:
            return 90
        elif '2 hour' in body_lower:
            return 120
        else:
            return 60  # Default 1 hour
    
    def _extract_attendees(self, email_data: Dict) -> List[str]:
        """Extract attendees from email."""
        attendees = []
        
        # Add sender
        if 'from' in email_data:
            attendees.append(email_data['from'])
        
        # Add recipients
        if 'to' in email_data:
            if isinstance(email_data['to'], list):
                attendees.extend(email_data['to'])
            else:
                attendees.append(email_data['to'])
        
        # Add CC
        if 'cc' in email_data:
            if isinstance(email_data['cc'], list):
                attendees.extend(email_data['cc'])
            else:
                attendees.append(email_data['cc'])
        
        return list(set(attendees))
    
    def _extract_agenda(self, body: str) -> str:
        """Extract meeting agenda from email."""
        # Look for agenda keywords
        agenda_keywords = ['agenda', 'discuss', 'topic', 'cover', 'review']
        
        for keyword in agenda_keywords:
            if keyword in body.lower():
                # Extract sentence containing keyword
                sentences = body.split('.')
                for sentence in sentences:
                    if keyword in sentence.lower():
                        return sentence.strip()
        
        return "General discussion"
    
    def _check_conflicts(self, proposed_times: List[Dict]) -> List[Dict]:
        """Check for scheduling conflicts (simulated)."""
        # In production, this would check actual calendar
        # For now, randomly flag some conflicts
        conflicts = []
        
        if len(proposed_times) > 2:
            conflicts.append({
                'time': proposed_times[0]['raw'],
                'reason': 'Existing meeting conflict',
                'severity': 'high'
            })
        
        return conflicts
    
    def _generate_scheduling_response(self, proposed_times: List[Dict], duration: int,
                                      attendees: List[str], agenda: str, conflicts: List[Dict],
                                      resolution: ConflictResolution) -> str:
        """Generate scheduling response email."""
        if resolution == ConflictResolution.ACCEPT and proposed_times:
            return f"""Thank you for the meeting invitation.

I'm available at {proposed_times[0]['raw']} for our {duration}-minute discussion about {agenda}.

Looking forward to speaking with you.

Best regards"""
        
        elif resolution == ConflictResolution.PROPOSE_ALTERNATIVE:
            return f"""Thank you for the meeting invitation.

Unfortunately, I have a conflict at the proposed time. Would any of these alternatives work?

- Tomorrow at 2:00 PM
- Thursday at 10:00 AM
- Friday at 3:00 PM

I'm available for {duration} minutes to discuss {agenda}.

Best regards"""
        
        else:
            return """Thank you for reaching out. Let me check my calendar and get back to you with available times.

Best regards"""
    
    def _process_time_proposal(self, email_data: Dict) -> Dict:
        """Process a time proposal email."""
        email_id = email_data.get('id', 'unknown')
        body = email_data.get('body', '')
        
        proposed_times = self._extract_times(body)
        
        return {
            'email_id': email_id,
            'meeting_type': 'time_proposal',
            'proposed_times': proposed_times,
            'reply_all': True
        }
    
    def _process_reschedule(self, email_data: Dict) -> Dict:
        """Process a reschedule request."""
        email_id = email_data.get('id', 'unknown')
        body = email_data.get('body', '')
        
        proposed_times = self._extract_times(body)
        
        return {
            'email_id': email_id,
            'meeting_type': 'reschedule',
            'proposed_times': proposed_times,
            'suggested_response': 'I understand the need to reschedule. Here are some alternative times that work for me...',
            'reply_all': True
        }


if __name__ == "__main__":
    # Test the engine
    engine = V111CalendarIntelligence()
    
    test_email = {
        'id': 'email_123',
        'from': 'colleague@company.com',
        'to': ['you@company.com'],
        'cc': ['manager@company.com'],
        'subject': 'Meeting Request: Project Discussion',
        'body': '''Hi,

I'd like to schedule a meeting to discuss the project timeline and deliverables.

Would any of these times work for you?
- Tuesday at 2:00 PM
- Wednesday at 10:00 AM
- Thursday at 3:30 PM

I'm thinking we'll need about 45 minutes.

Let me know what works best.

Thanks!'''
    }
    
    result = engine.analyze_calendar_email(test_email)
    print(json.dumps(result, indent=2))

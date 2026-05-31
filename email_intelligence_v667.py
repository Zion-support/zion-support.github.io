#!/usr/bin/env python3
"""
V667 - Email Meeting Scheduler AI
Automatically finds optimal meeting times across multiple calendars with
timezone intelligence, participant availability analysis, and smart
rescheduling recommendations.

Key Features:
- Multi-timezone meeting optimization
- Participant availability analysis
- Meeting duration intelligence
- Recurring meeting pattern detection
- Conflict resolution suggestions
- Meeting fatigue prevention
- Reply-all enforcement for all multi-recipient communications
"""

import json
import re
from datetime import datetime, timedelta, time
from collections import Counter, defaultdict
from typing import Dict, List, Optional, Tuple, Set

class EmailMeetingSchedulerAI:
    """AI-powered meeting scheduling with timezone intelligence"""
    
    def __init__(self):
        self.scheduling_history = []
        self.participant_preferences = {}
        self.timezone_data = {}
        self._load_timezone_database()
    
    def _load_timezone_database(self):
        """Load common timezone offsets"""
        self.timezone_data = {
            'EST': -5, 'EDT': -4, 'CST': -6, 'CDT': -5,
            'MST': -7, 'MDT': -6, 'PST': -8, 'PDT': -7,
            'GMT': 0, 'UTC': 0, 'CET': 1, 'CEST': 2,
            'IST': 5.5, 'JST': 9, 'CST_CN': 8, 'KST': 9,
            'AEST': 10, 'AEDT': 11, 'NZST': 12, 'NZDT': 13
        }
    
    MEETING_PATTERNS = {
        'quick_sync': {'duration': 15, 'description': 'Quick sync/standup'},
        'standard': {'duration': 30, 'description': 'Standard meeting'},
        'extended': {'duration': 60, 'description': 'Extended discussion'},
        'workshop': {'duration': 90, 'description': 'Workshop/brainstorming'},
        'half_day': {'duration': 180, 'description': 'Half-day session'},
        'all_day': {'duration': 480, 'description': 'All-day event'}
    }
    
    OPTIMAL_MEETING_HOURS = {
        'morning_peak': (9, 11),  # 9 AM - 11 AM
        'afternoon_peak': (14, 16),  # 2 PM - 4 PM
        'avoid_early': (0, 8),  # Before 8 AM
        'avoid_late': (17, 23),  # After 5 PM
        'avoid_lunch': (12, 13)  # Lunch hour
    }
    
    def extract_meeting_request(self, email: Dict) -> Dict:
        """Extract meeting request details from email"""
        text = email.get('body', '') + ' ' + email.get('subject', '')
        text_lower = text.lower()
        
        # Extract participants
        participants = email.get('to', []) + email.get('cc', [])
        
        # Extract time references
        time_patterns = [
            r'(\d{1,2}:\d{2}\s*(?:am|pm))',
            r'(\d{1,2}\s*(?:am|pm))',
            r'(morning|afternoon|evening)',
            r'(monday|tuesday|wednesday|thursday|friday|saturday|sunday)',
            r'(tomorrow|today|next week)',
            r'(\d{1,2}/\d{1,2}(?:/\d{2,4})?)',
        ]
        
        time_references = []
        for pattern in time_patterns:
            matches = re.findall(pattern, text_lower)
            time_references.extend(matches)
        
        # Extract duration
        duration_patterns = [
            r'(\d+)\s*(?:minute|min)s?',
            r'(\d+)\s*hour(?:s)?',
            r'(quick|brief|short)',
            r'(extended|long|full)',
        ]
        
        duration_hints = []
        for pattern in duration_patterns:
            matches = re.findall(pattern, text_lower)
            duration_hints.extend(matches)
        
        # Determine meeting type
        meeting_type = self._classify_meeting_type(text_lower, duration_hints)
        
        # Extract timezone references
        timezone_refs = []
        for tz in self.timezone_data.keys():
            if tz.lower() in text_lower:
                timezone_refs.append(tz)
        
        # Extract urgency
        urgency_indicators = ['urgent', 'asap', 'immediately', 'critical', 'important', 'soon']
        urgency_score = sum(1 for indicator in urgency_indicators if indicator in text_lower)
        
        return {
            'participants': participants,
            'participant_count': len(participants),
            'time_references': time_references,
            'duration_hints': duration_hints,
            'meeting_type': meeting_type,
            'suggested_duration': self.MEETING_PATTERNS[meeting_type]['duration'],
            'timezone_references': timezone_refs,
            'urgency_level': 'high' if urgency_score >= 2 else 'medium' if urgency_score == 1 else 'normal',
            'extracted_from': email.get('id', ''),
            'timestamp': datetime.now().isoformat()
        }
    
    def _classify_meeting_type(self, text: str, duration_hints: List) -> str:
        """Classify meeting type based on content and duration hints"""
        # Check for explicit duration
        for hint in duration_hints:
            if hint.isdigit():
                minutes = int(hint)
                if minutes <= 15:
                    return 'quick_sync'
                elif minutes <= 30:
                    return 'standard'
                elif minutes <= 60:
                    return 'extended'
                elif minutes <= 90:
                    return 'workshop'
                elif minutes <= 180:
                    return 'half_day'
                else:
                    return 'all_day'
        
        # Check for keywords
        if any(word in text for word in ['quick', 'brief', 'sync', 'standup']):
            return 'quick_sync'
        elif any(word in text for word in ['workshop', 'brainstorm', 'planning']):
            return 'workshop'
        elif any(word in text for word in ['extended', 'deep dive', 'comprehensive']):
            return 'extended'
        else:
            return 'standard'
    
    def calculate_timezone_overlaps(self, participant_timezones: List[str]) -> Dict:
        """Calculate optimal meeting windows across timezones"""
        if not participant_timezones:
            return {'error': 'No timezones provided'}
        
        # Get UTC offsets
        offsets = []
        for tz in participant_timezones:
            tz_upper = tz.upper()
            if tz_upper in self.timezone_data:
                offsets.append(self.timezone_data[tz_upper])
            else:
                offsets.append(0)  # Default to UTC
        
        if not offsets:
            return {'error': 'Invalid timezones'}
        
        # Find min and max offsets
        min_offset = min(offsets)
        max_offset = max(offsets)
        timezone_span = max_offset - min_offset
        
        # Calculate business hours overlap (9 AM - 5 PM local time)
        # Convert to UTC for comparison
        business_start_utc = 9 - max_offset  # Latest start in UTC
        business_end_utc = 17 - min_offset  # Earliest end in UTC
        
        overlap_hours = max(0, business_end_utc - business_start_utc)
        
        # Find optimal windows
        optimal_windows = []
        
        # Morning peak (9-11 AM for earliest timezone)
        morning_start_utc = 9 - min_offset
        morning_end_utc = 11 - min_offset
        if morning_start_utc >= business_start_utc and morning_end_utc <= business_end_utc:
            optimal_windows.append({
                'window': 'morning_peak',
                'utc_start': morning_start_utc,
                'utc_end': morning_end_utc,
                'description': f'Morning peak for {participant_timezones[offsets.index(min_offset)]}'
            })
        
        # Afternoon peak (2-4 PM for latest timezone)
        afternoon_start_utc = 14 - max_offset
        afternoon_end_utc = 16 - max_offset
        if afternoon_start_utc >= business_start_utc and afternoon_end_utc <= business_end_utc:
            optimal_windows.append({
                'window': 'afternoon_peak',
                'utc_start': afternoon_start_utc,
                'utc_end': afternoon_end_utc,
                'description': f'Afternoon peak for {participant_timezones[offsets.index(max_offset)]}'
            })
        
        return {
            'participant_timezones': participant_timezones,
            'timezone_span_hours': timezone_span,
            'overlap_hours': overlap_hours,
            'business_start_utc': business_start_utc,
            'business_end_utc': business_end_utc,
            'optimal_windows': optimal_windows,
            'challenge_level': 'easy' if timezone_span <= 3 else 'moderate' if timezone_span <= 8 else 'difficult',
            'recommendation': self._generate_timezone_recommendation(timezone_span, overlap_hours)
        }
    
    def _generate_timezone_recommendation(self, span: float, overlap: float) -> str:
        """Generate timezone scheduling recommendation"""
        if span <= 3:
            return 'Minimal timezone challenges. Standard scheduling applies.'
        elif span <= 8:
            return f'Moderate timezone span ({span}h). Target mid-day UTC for best overlap.'
        elif overlap > 4:
            return f'Large timezone span ({span}h) but {overlap}h overlap available. Schedule during overlap window.'
        else:
            return f'Challenging timezone span ({span}h) with only {overlap}h overlap. Consider asynchronous communication or rotating meeting times.'
    
    def detect_meeting_fatigue(self, participant: str, recent_meetings: List[Dict]) -> Dict:
        """Detect meeting fatigue for a participant"""
        if not recent_meetings:
            return {'participant': participant, 'fatigue_level': 'none', 'score': 0}
        
        # Calculate metrics
        total_meetings = len(recent_meetings)
        total_duration = sum(m.get('duration', 30) for m in recent_meetings)
        back_to_back = self._count_back_to_back_meetings(recent_meetings)
        meeting_free_days = self._count_meeting_free_days(recent_meetings)
        
        # Calculate fatigue score
        fatigue_score = 0
        fatigue_score += min(30, total_meetings * 2)  # Max 30 points for volume
        fatigue_score += min(30, total_duration / 60 * 5)  # Max 30 points for duration
        fatigue_score += back_to_back * 10  # 10 points per back-to-back
        fatigue_score += max(0, 20 - meeting_free_days * 10)  # Penalty for no meeting-free days
        
        fatigue_score = min(100, fatigue_score)
        
        # Determine fatigue level
        if fatigue_score >= 80:
            level = 'severe'
        elif fatigue_score >= 60:
            level = 'high'
        elif fatigue_score >= 40:
            level = 'moderate'
        elif fatigue_score >= 20:
            level = 'low'
        else:
            level = 'none'
        
        recommendations = []
        if level in ['severe', 'high']:
            recommendations.append('Block focus time - no meetings for at least half a day')
            recommendations.append('Decline or delegate non-essential meetings')
            recommendations.append('Convert some meetings to async communication')
        elif level == 'moderate':
            recommendations.append('Ensure at least one meeting-free day per week')
            recommendations.append('Limit back-to-back meetings to 2 maximum')
        
        return {
            'participant': participant,
            'fatigue_score': fatigue_score,
            'fatigue_level': level,
            'total_meetings': total_meetings,
            'total_duration_hours': round(total_duration / 60, 1),
            'back_to_back_count': back_to_back,
            'meeting_free_days': meeting_free_days,
            'recommendations': recommendations
        }
    
    def _count_back_to_back_meetings(self, meetings: List[Dict]) -> int:
        """Count back-to-back meetings"""
        if len(meetings) < 2:
            return 0
        
        sorted_meetings = sorted(meetings, key=lambda m: m.get('start_time', ''))
        back_to_back = 0
        
        for i in range(len(sorted_meetings) - 1):
            current_end = sorted_meetings[i].get('end_time', '')
            next_start = sorted_meetings[i + 1].get('start_time', '')
            
            if current_end and next_start:
                try:
                    end_dt = datetime.fromisoformat(current_end)
                    start_dt = datetime.fromisoformat(next_start)
                    gap_minutes = (start_dt - end_dt).total_seconds() / 60
                    
                    if gap_minutes <= 5:  # 5 minutes or less = back-to-back
                        back_to_back += 1
                except (ValueError, TypeError):
                    pass
        
        return back_to_back
    
    def _count_meeting_free_days(self, meetings: List[Dict]) -> int:
        """Count days without meetings in the last 7 days"""
        if not meetings:
            return 7
        
        meeting_days = set()
        for meeting in meetings:
            start_time = meeting.get('start_time', '')
            if start_time:
                try:
                    dt = datetime.fromisoformat(start_time)
                    meeting_days.add(dt.date())
                except (ValueError, TypeError):
                    pass
        
        # Count days in last 7 days without meetings
        today = datetime.now().date()
        meeting_free = 0
        for i in range(7):
            check_date = today - timedelta(days=i)
            if check_date not in meeting_days:
                meeting_free += 1
        
        return meeting_free
    
    def suggest_optimal_times(self, meeting_request: Dict, participant_schedules: Dict = None) -> Dict:
        """Suggest optimal meeting times"""
        participants = meeting_request.get('participants', [])
        duration = meeting_request.get('suggested_duration', 30)
        timezone_refs = meeting_request.get('timezone_references', [])
        
        # Default to EST if no timezone specified
        if not timezone_refs:
            timezone_refs = ['EST']
        
        # Calculate timezone overlaps
        timezone_analysis = self.calculate_timezone_overlaps(timezone_refs)
        
        # Generate time suggestions
        suggestions = []
        
        # Use optimal windows if available
        if timezone_analysis.get('optimal_windows'):
            for window in timezone_analysis['optimal_windows']:
                utc_hour = int(window['utc_start'])
                suggestions.append({
                    'time_utc': f'{utc_hour:02d}:00 UTC',
                    'window': window['window'],
                    'description': window['description'],
                    'score': 90
                })
        
        # Add fallback suggestions
        if not suggestions:
            # Default to 10 AM, 2 PM, 4 PM EST
            for hour in [10, 14, 16]:
                suggestions.append({
                    'time_utc': f'{hour + 5:02d}:00 UTC',  # EST + 5 = UTC
                    'window': 'fallback',
                    'description': f'{hour}:00 EST',
                    'score': 70
                })
        
        # Sort by score
        suggestions.sort(key=lambda x: x['score'], reverse=True)
        
        self.scheduling_history.append({
            'meeting_request': meeting_request,
            'timezone_analysis': timezone_analysis,
            'suggestions': suggestions[:5],
            'participant_count': len(participants)
        })
        
        return {
            'meeting_request': meeting_request,
            'timezone_analysis': timezone_analysis,
            'suggestions': suggestions[:5],  # Top 5 suggestions
            'duration_minutes': duration,
            'participant_count': len(participants),
            'best_option': suggestions[0] if suggestions else None,
            'reply_all_required': len(participants) > 1,
            'timestamp': datetime.now().isoformat()
        }
    
    def resolve_scheduling_conflicts(self, conflicts: List[Dict]) -> Dict:
        """Resolve scheduling conflicts with smart recommendations"""
        if not conflicts:
            return {'message': 'No conflicts to resolve'}
        
        resolutions = []
        
        for conflict in conflicts:
            participant = conflict.get('participant', 'Unknown')
            conflicting_meetings = conflict.get('meetings', [])
            
            if len(conflicting_meetings) < 2:
                continue
            
            # Sort by priority
            sorted_meetings = sorted(
                conflicting_meetings,
                key=lambda m: m.get('priority', 5),
                reverse=True
            )
            
            # Generate resolution options
            options = []
            
            # Option 1: Keep highest priority, reschedule others
            for i, meeting in enumerate(sorted_meetings[1:], 1):
                options.append({
                    'option': f'Reschedule meeting {i}',
                    'action': 'reschedule',
                    'meeting': meeting,
                    'reason': f'Lower priority than {sorted_meetings[0].get("title", "primary meeting")}',
                    'suggested_times': ['Next available slot', 'Same time next day', 'Later in the week']
                })
            
            # Option 2: Shorten meetings
            if all(m.get('duration', 30) >= 30 for m in conflicting_meetings):
                options.append({
                    'option': 'Shorten all meetings by 15 minutes',
                    'action': 'shorten',
                    'meetings': conflicting_meetings,
                    'reason': 'Creates buffer time between meetings',
                    'time_saved': f'{15 * len(conflicting_meetings)} minutes'
                })
            
            # Option 3: Convert to async
            low_priority = [m for m in conflicting_meetings if m.get('priority', 5) < 5]
            if low_priority:
                options.append({
                    'option': 'Convert low-priority meetings to async',
                    'action': 'convert_async',
                    'meetings': low_priority,
                    'reason': 'Reduces meeting load',
                    'async_alternatives': ['Email update', 'Shared document', 'Recorded video']
                })
            
            resolutions.append({
                'participant': participant,
                'conflict_count': len(conflicting_meetings),
                'resolution_options': options,
                'recommended_option': options[0] if options else None
            })
        
        return {
            'total_conflicts': len(conflicts),
            'resolutions': resolutions,
            'overall_recommendation': 'Prioritize by impact and reschedule lower-priority meetings'
        }
    
    def generate_scheduling_report(self) -> Dict:
        """Generate comprehensive scheduling report"""
        if not self.scheduling_history:
            return {'message': 'No scheduling data available'}
        
        # Calculate metrics
        total_scheduled = len(self.scheduling_history)
        avg_participants = sum(s.get('participant_count', 0) for s in self.scheduling_history) / total_scheduled
        
        # Meeting type distribution
        meeting_types = Counter(s.get('meeting_type', 'unknown') for s in self.scheduling_history)
        
        # Timezone challenges
        timezone_spans = [s.get('timezone_analysis', {}).get('timezone_span_hours', 0) for s in self.scheduling_history]
        avg_timezone_span = sum(timezone_spans) / len(timezone_spans) if timezone_spans else 0
        
        # Urgency levels
        urgency_levels = Counter(s.get('urgency_level', 'normal') for s in self.scheduling_history)
        
        return {
            'total_meetings_scheduled': total_scheduled,
            'avg_participants_per_meeting': round(avg_participants, 1),
            'meeting_type_distribution': dict(meeting_types),
            'avg_timezone_span_hours': round(avg_timezone_span, 1),
            'urgency_distribution': dict(urgency_levels),
            'reply_all_enforcement': 'Active for all multi-participant meetings',
            'timestamp': datetime.now().isoformat()
        }


def test_v667():
    """Test V667 Email Meeting Scheduler AI"""
    scheduler = EmailMeetingSchedulerAI()
    
    # Test 1: Multi-timezone meeting request
    email1 = {
        'id': 'e001',
        'from': 'manager@company.com',
        'to': ['team_us@company.com', 'team_uk@company.com', 'team_japan@company.com'],
        'cc': ['exec@company.com'],
        'subject': 'Global Team Sync - Tomorrow 2 PM',
        'body': 'Hi team, let\'s schedule a quick sync tomorrow at 2 PM EST to discuss the Q3 roadmap. This should be a brief 30-minute meeting. Please confirm availability across EST, GMT, and JST timezones.',
        'timestamp': '2026-05-30T09:00:00'
    }
    
    # Test 2: Workshop request
    email2 = {
        'id': 'e002',
        'from': 'facilitator@company.com',
        'to': ['team@company.com'],
        'subject': 'Design Thinking Workshop - Next Week',
        'body': 'I\'d like to schedule a 90-minute design thinking workshop next week. We need an extended session for brainstorming and planning. Morning preferred.',
        'timestamp': '2026-05-30T10:00:00'
    }
    
    # Test 3: Urgent meeting
    email3 = {
        'id': 'e003',
        'from': 'ceo@company.com',
        'to': ['executives@company.com'],
        'subject': 'URGENT: Crisis Response Meeting ASAP',
        'body': 'Critical situation requires immediate attention. Need to meet ASAP today. This is urgent and important. All executives must attend.',
        'timestamp': '2026-05-30T11:00:00'
    }
    
    for email in [email1, email2, email3]:
        request = scheduler.extract_meeting_request(email)
        suggestions = scheduler.suggest_optimal_times(request)
        
        print(f"\n{'='*50}")
        print(f"Email: {email['subject'][:40]}...")
        print(f"Participants: {request['participant_count']}")
        print(f"Meeting Type: {request['meeting_type']} ({request['suggested_duration']} min)")
        print(f"Urgency: {request['urgency_level']}")
        print(f"Timezone Span: {suggestions['timezone_analysis'].get('timezone_span_hours', 0)}h")
        print(f"Challenge Level: {suggestions['timezone_analysis'].get('challenge_level', 'unknown')}")
        if suggestions['best_option']:
            print(f"Best Time: {suggestions['best_option']['time_utc']}")
    
    # Test fatigue detection
    recent_meetings = [
        {'start_time': '2026-05-30T09:00:00', 'end_time': '2026-05-30T10:00:00', 'duration': 60},
        {'start_time': '2026-05-30T10:05:00', 'end_time': '2026-05-30T11:00:00', 'duration': 55},
        {'start_time': '2026-05-30T11:05:00', 'end_time': '2026-05-30T12:00:00', 'duration': 55},
        {'start_time': '2026-05-30T13:00:00', 'end_time': '2026-05-30T14:00:00', 'duration': 60},
        {'start_time': '2026-05-30T14:05:00', 'end_time': '2026-05-30T15:00:00', 'duration': 55},
    ]
    
    fatigue = scheduler.detect_meeting_fatigue('employee@company.com', recent_meetings)
    print(f"\n{'='*50}")
    print(f"Meeting Fatigue Test:")
    print(f"Fatigue Level: {fatigue['fatigue_level']} ({fatigue['fatigue_score']}/100)")
    print(f"Back-to-back: {fatigue['back_to_back_count']}")
    print(f"Total Duration: {fatigue['total_duration_hours']}h")
    
    report = scheduler.generate_scheduling_report()
    print(f"\n{'='*50}")
    print(f"✅ V667 Email Meeting Scheduler AI Test Complete")
    print(f"Meetings Scheduled: {report['total_meetings_scheduled']}")
    
    return report


if __name__ == '__main__':
    test_v667()

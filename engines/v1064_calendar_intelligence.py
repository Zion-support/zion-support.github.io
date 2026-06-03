#!/usr/bin/env python3
"""V1064: Email Calendar Intelligence
Parse scheduling requests, detect timezone conflicts, propose optimal meeting times.
Auto-generate calendar invites from email conversations.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import re
import json
from datetime import datetime, timedelta
from collections import defaultdict

class CalendarIntelligence:
    def __init__(self):
        self.timezone_offsets = {
            'EST': -5, 'EDT': -4, 'CST': -6, 'CDT': -5, 'MST': -7, 'MDT': -6,
            'PST': -8, 'PDT': -7, 'GMT': 0, 'UTC': 0, 'CET': 1, 'IST': 5.5,
            'JST': 9, 'AEST': 10, 'BRT': -3
        }
        self.meeting_types = {
            'standup': 15, 'sync': 30, 'review': 45, 'planning': 60,
            'workshop': 90, 'strategy': 120, 'interview': 45, 'demo': 60
        }

    def process_scheduling_email(self, email_data):
        sender = email_data.get('sender', 'unknown')
        recipients = email_data.get('recipients', [])
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        reply_all = len(recipients) > 1

        meeting_info = self._extract_meeting_info(subject, body)
        timezones = self._detect_timezones(sender, recipients, body)
        conflicts = self._detect_conflicts(meeting_info, timezones)
        proposed_times = self._propose_times(meeting_info, timezones, conflicts)
        calendar_invite = self._generate_calendar_invite(meeting_info, proposed_times, email_data)

        return {
            'email_id': email_data.get('id'),
            'reply_all_required': reply_all,
            'meeting_info': meeting_info,
            'timezone_analysis': timezones,
            'conflicts_detected': conflicts,
            'proposed_times': proposed_times[:5],
            'calendar_invite': calendar_invite,
            'scheduling_difficulty': self._calculate_difficulty(timezones, conflicts),
            'recommendations': self._generate_recommendations(meeting_info, timezones, conflicts, reply_all),
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }

    def _extract_meeting_info(self, subject, body):
        text = (subject + ' ' + body).lower()
        meeting_type = 'sync'
        for mtype in self.meeting_types:
            if mtype in text:
                meeting_type = mtype
                break
        duration = self.meeting_types.get(meeting_type, 30)
        dur_match = re.search(r'(\d+)\s*(?:min|minute|hour)', text)
        if dur_match:
            val = int(dur_match.group(1))
            duration = val if val <= 180 else val // 60 * 60 if val >= 60 else duration
        preferred_days = re.findall(r'(?:next\s+)?(monday|tuesday|wednesday|thursday|friday)', text)
        preferred_times = re.findall(r'(\d{1,2})(?::(\d{2}))?\s*(am|pm)?', text)
        return {
            'type': meeting_type,
            'duration_minutes': duration,
            'preferred_days': preferred_days[:3],
            'preferred_times': preferred_times[:3],
            'title': subject.replace('Re:', '').replace('Fwd:', '').strip()
        }

    def _detect_timezones(self, sender, recipients, body):
        text = body.lower()
        timezones = {}
        for tz in self.timezone_offsets:
            if tz.lower() in text:
                timezones['mentioned'] = tz
        all_participants = [sender] + recipients
        for p in all_participants:
            domain = p.split('@')[-1] if '@' in p else ''
            if '.uk' in domain or '.eu' in domain: timezones[p] = 'GMT'
            elif '.in' in domain: timezones[p] = 'IST'
            elif '.jp' in domain: timezones[p] = 'JST'
            elif '.br' in domain: timezones[p] = 'BRT'
            else: timezones[p] = 'EST'
        return timezones

    def _detect_conflicts(self, meeting_info, timezones):
        conflicts = []
        tz_values = [v for k, v in timezones.items() if k != 'mentioned']
        if len(set(tz_values)) > 3:
            conflicts.append({'type': 'timezone_spread', 'severity': 'high', 'description': f'{len(set(tz_values))} different timezones - finding common hours will be difficult'})
        offsets = [self.timezone_offsets.get(tz, 0) for tz in tz_values]
        if offsets:
            max_diff = max(offsets) - min(offsets)
            if max_diff > 12:
                conflicts.append({'type': 'extreme_timezone_gap', 'severity': 'critical', 'description': f'{max_diff}h timezone gap - consider async alternatives'})
            elif max_diff > 8:
                conflicts.append({'type': 'large_timezone_gap', 'severity': 'medium', 'description': f'{max_diff}h timezone gap - limited overlap window'})
        return conflicts

    def _propose_times(self, meeting_info, timezones, conflicts):
        now = datetime.now()
        proposals = []
        for day_offset in range(1, 8):
            date = now + timedelta(days=day_offset)
            if date.weekday() >= 5:
                continue
            for hour in [10, 11, 14, 15]:
                slot = date.replace(hour=hour, minute=0, second=0, microsecond=0)
                score = 50
                if 10 <= hour <= 11: score += 20
                elif 14 <= hour <= 15: score += 15
                if date.weekday() in (1, 2, 3): score += 10
                proposals.append({
                    'datetime': slot.strftime('%A, %B %d at %I:%M %p EST'),
                    'score': score,
                    'timezone_conversions': {
                        'GMT': (slot + timedelta(hours=5)).strftime('%I:%M %p'),
                        'IST': (slot + timedelta(hours=10.5)).strftime('%I:%M %p'),
                        'PST': (slot - timedelta(hours=3)).strftime('%I:%M %p')
                    }
                })
        proposals.sort(key=lambda x: x['score'], reverse=True)
        return proposals

    def _generate_calendar_invite(self, meeting_info, proposed_times, email_data):
        if not proposed_times:
            return None
        best = proposed_times[0]
        return {
            'title': meeting_info['title'],
            'duration': f"{meeting_info['duration_minutes']} minutes",
            'suggested_time': best['datetime'],
            'attendees': [email_data.get('sender', '')] + email_data.get('recipients', []),
            'description': f"Auto-generated from email: {email_data.get('subject', '')}"
        }

    def _calculate_difficulty(self, timezones, conflicts):
        base = 30
        base += len(conflicts) * 15
        tz_count = len(set(v for k, v in timezones.items() if k != 'mentioned'))
        base += tz_count * 5
        if base >= 80: return {'level': 'difficult', 'score': min(100, base), 'suggestion': 'Consider async alternatives'}
        elif base >= 50: return {'level': 'moderate', 'score': base, 'suggestion': 'Use scheduling tool for availability'}
        return {'level': 'easy', 'score': base, 'suggestion': 'Propose times directly'}

    def _generate_recommendations(self, meeting_info, timezones, conflicts, reply_all):
        recs = []
        if conflicts:
            for c in conflicts[:2]:
                recs.append(f"⚠️ {c['description']}")
        if len(set(v for k, v in timezones.items() if k != 'mentioned')) > 3:
            recs.append('🌍 Use a scheduling poll (e.g., When2Meet) for multi-timezone meetings')
        if meeting_info['duration_minutes'] > 60:
            recs.append(f"⏰ Consider breaking {meeting_info['duration_minutes']}min meeting into shorter sessions")
        if reply_all:
            recs.append('👥 REPLY ALL: Ensure all participants receive scheduling details')
        if not recs:
            recs.append('✅ Scheduling looks straightforward - propose times directly')
        return recs

if __name__ == '__main__':
    cal = CalendarIntelligence()
    test = {'id': 'e001', 'sender': 'pm@globalcorp.uk',
            'recipients': ['dev@ziontechgroup.com', 'design@company.jp', 'qa@firm.in'],
            'subject': 'Strategy Meeting - Project Phoenix Kickoff',
            'body': 'Let us schedule a 90-minute strategy meeting next week. Tuesday or Wednesday would work best. Our London team is on GMT, Tokyo on JST, and Bangalore on IST.',
            'timestamp': '2026-05-30T10:00:00'}
    result = cal.process_scheduling_email(test)
    print("=== V1064: Email Calendar Intelligence ===\n")
    print(f"Meeting Type: {result['meeting_info']['type']} ({result['meeting_info']['duration_minutes']}min)")
    print(f"Timezones: {len(set(v for k,v in result['timezone_analysis'].items() if k != 'mentioned'))} different")
    print(f"Conflicts: {len(result['conflicts_detected'])}")
    for c in result['conflicts_detected']:
        print(f"  [{c['severity']}] {c['description']}")
    print(f"Scheduling Difficulty: {result['scheduling_difficulty']['level']} ({result['scheduling_difficulty']['score']}/100)")
    print(f"Top Proposed Times:")
    for p in result['proposed_times'][:3]:
        print(f"  📅 {p['datetime']} (score: {p['score']})")
    print(f"Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")

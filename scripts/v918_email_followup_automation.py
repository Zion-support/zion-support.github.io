#!/usr/bin/env python3
"""
V918: Email Follow-Up Automation Engine
Tracks emails needing follow-up, detects deadlines, sends reminders,
enforces reply-all for follow-up chains.
"""
import json, re
from datetime import datetime, timedelta
from typing import Dict, List, Any

class FollowUpAutomation:
    def __init__(self):
        self.followup_keywords = ['follow up', 'followup', 'circle back', 'check in', 'reminder', 'pending']
        self.tracked_emails = []

    def analyze_email(self, email_data: Dict[str, Any]) -> Dict[str, Any]:
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        recipients = email_data.get('recipients', [])
        full_text = f"{subject} {body}".lower()
        needs = self._detect_followup(full_text)
        if not needs['needs_followup']:
            return {'needs_followup': False, 'action': 'no_action'}
        deadline = self._extract_deadline(full_text)
        priority = self._determine_priority(full_text, deadline)
        tid = f"FU-{len(self.tracked_emails)+1:04d}"
        self.tracked_emails.append({'id': tid, 'subject': subject, 'recipients': recipients, 'deadline': deadline, 'priority': priority, 'status': 'pending'})
        schedule = self._generate_schedule(deadline, priority)
        response = self._generate_response(tid, deadline, priority, recipients, schedule)
        return {'needs_followup': True, 'action': 'track_and_schedule', 'tracking_id': tid, 'deadline': deadline, 'priority': priority, 'followup_schedule': schedule, 'response': response, 'reply_all_required': len(recipients) > 1}

    def _detect_followup(self, text):
        if any(kw in text for kw in self.followup_keywords):
            return {'needs_followup': True, 'reason': 'explicit'}
        if '?' in text and ('let me know' in text or 'please respond' in text):
            return {'needs_followup': True, 'reason': 'awaiting_response'}
        if any(ind in text for ind in ['please', 'could you', 'need you to']):
            return {'needs_followup': True, 'reason': 'action_item'}
        return {'needs_followup': False, 'reason': 'none'}

    def _extract_deadline(self, text):
        now = datetime.now()
        if 'tomorrow' in text: return (now + timedelta(days=1)).isoformat()
        if 'next week' in text or 'eow' in text: return (now + timedelta(days=7)).isoformat()
        if 'today' in text: return now.isoformat()
        match = re.search(r'by\s+(monday|tuesday|wednesday|thursday|friday)', text)
        if match:
            day_map = {'monday':0,'tuesday':1,'wednesday':2,'thursday':3,'friday':4}
            target = day_map[match.group(1)]
            days_ahead = (target - now.weekday()) % 7 or 7
            return (now + timedelta(days=days_ahead)).isoformat()
        return (now + timedelta(days=7)).isoformat()

    def _determine_priority(self, text, deadline):
        if any(w in text for w in ['urgent', 'asap', 'critical']): return 'high'
        days = (datetime.fromisoformat(deadline) - datetime.now()).days
        if days <= 1: return 'high'
        if days <= 3: return 'medium'
        return 'normal'

    def _generate_schedule(self, deadline, priority):
        dl = datetime.fromisoformat(deadline)
        schedule = []
        offsets = [3,2,1,0] if priority == 'high' else [5,3,1,0] if priority == 'medium' else [7,3,1,0]
        for d in offsets:
            rd = dl - timedelta(days=d)
            if rd > datetime.now():
                schedule.append({'date': rd.isoformat(), 'type': 'reminder' if d > 0 else 'deadline', 'days_until': d})
        return schedule

    def _generate_response(self, tid, deadline, priority, recipients, schedule):
        dl = datetime.fromisoformat(deadline)
        days_left = (dl - datetime.now()).days
        text = f"Follow-Up Tracked: {tid}\nPriority: {priority.upper()}\nDeadline: {dl.strftime('%B %d, %Y')} ({days_left} days)\nReminders: {len(schedule)}"
        if len(recipients) > 1:
            text += f"\n\nPlease Reply All to keep all {len(recipients)} participants informed."
        return {'text': text, 'reply_all': len(recipients) > 1, 'auto_followup': True}

def main():
    auto = FollowUpAutomation()
    tests = [
        {'subject': 'Budget Proposal - Need by Friday', 'body': 'Hi team, please prepare Q4 budget. Need by Friday EOW. Let me know questions.', 'recipients': ['fin@ex.com','mgr@ex.com']},
        {'subject': 'Project Update', 'body': 'Checking in on project status. Could you send latest report?', 'recipients': ['team@ex.com']}
    ]
    print("=" * 60)
    print("V918 Email Follow-Up Automation Engine")
    print("=" * 60)
    for e in tests:
        r = auto.analyze_email(e)
        print(f"\nSubject: {e['subject']}")
        print(f"  Follow-Up: {r['needs_followup']}")
        if r['needs_followup']:
            print(f"  ID: {r['tracking_id']}, Priority: {r['priority']}, Deadline: {r['deadline'][:10]}, Reminders: {len(r['followup_schedule'])}, Reply All: {r['reply_all_required']}")
    print("\nV918 Follow-Up Automation: OPERATIONAL")

if __name__ == '__main__':
    main()

#!/usr/bin/env python3
"""V233 - AI Email Meeting Minutes Generator
Convert email discussions into structured meeting minutes with attendees,
agenda items, decisions, action items, and follow-ups.
Always enforces reply-all for multi-recipient emails.
"""
import json, re, datetime
from dataclasses import dataclass, field
from typing import List, Dict

@dataclass
class MeetingMinutes:
    meeting_title: str
    date: str
    attendees: List[str]
    agenda_items: List[str]
    decisions: List[Dict]
    action_items: List[Dict]
    discussion_summary: str
    follow_up_date: str
    reply_all_required: bool

class MinutesGenerator:
    def generate(self, emails: List[Dict], recipients: List[str] = None) -> MeetingMinutes:
        attendees = set()
        decisions, actions, agenda = [], [], []
        discussion_parts = []
        
        for email in emails:
            sender = email.get("from", "")
            attendees.add(sender)
            body = email.get("body", "")
            
            # Extract decisions
            for m in re.findall(r"(?:we(?:'ve| have)?) (?:decided|agreed|chosen|approved)\s+(.{10,200}?)(?:\.|$)", body, re.IGNORECASE):
                decisions.append({"decision": m.strip(), "made_by": sender})
            
            # Extract action items
            for m in re.findall(r'(?:please|action item|todo|@\w+)\s+(.{10,200}?)(?:\.|$)', body, re.IGNORECASE):
                actions.append({"task": m.strip(), "assigned_to": sender, "status": "pending"})
            
            # Extract agenda items from subject
            subject = email.get("subject", "")
            if subject and subject not in agenda:
                agenda.append(subject)
            
            discussion_parts.append(f"{sender}: {body[:150]}")
        
        # Extract follow-up date
        follow_up = ""
        for email in emails:
            body = email.get("body", "")
            date_match = re.search(r'(?:follow.?up|next meeting|check.?in)\s+(?:on|by)?\s*(\d{1,2}[/-]\d{1,2}(?:[/-]\d{2,4})?)', body, re.IGNORECASE)
            if date_match:
                follow_up = date_match.group(1)
                break
        
        title = emails[0].get("subject", "Meeting Discussion") if emails else "Meeting"
        date = emails[0].get("timestamp", datetime.datetime.now().isoformat())[:10] if emails else ""
        
        return MeetingMinutes(
            meeting_title=title, date=date,
            attendees=list(attendees), agenda_items=agenda[:10],
            decisions=decisions, action_items=actions,
            discussion_summary="\n".join(discussion_parts[:5]),
            follow_up_date=follow_up,
            reply_all_required=len(recipients or []) > 1
        )
    
    def format_report(self, minutes: MeetingMinutes) -> Dict:
        return {
            "meeting_title": minutes.meeting_title,
            "date": minutes.date,
            "attendees": minutes.attendees,
            "agenda": minutes.agenda_items,
            "decisions_made": minutes.decisions,
            "action_items": minutes.action_items,
            "discussion_summary": minutes.discussion_summary,
            "next_follow_up": minutes.follow_up_date,
            "reply_all_enforced": minutes.reply_all_required,
            "generated_at": datetime.datetime.now().isoformat()
        }

if __name__ == "__main__":
    gen = MinutesGenerator()
    emails = [
        {"from": "alice@co.com", "subject": "Q3 Planning Meeting", "timestamp": "2026-05-28T10:00:00",
         "body": "We've decided to prioritize the mobile app launch. Please prepare the marketing plan by June 10."},
        {"from": "bob@co.com", "timestamp": "2026-05-28T11:30:00",
         "body": "Agreed on the mobile priority. I'll handle the API development. Action item: set up the staging environment by next Friday. Follow-up on 06/05/2026."},
        {"from": "carol@co.com", "timestamp": "2026-05-28T14:00:00",
         "body": "We've approved the budget of $200K. Please coordinate with the design team. Todo: create the project timeline."},
    ]
    minutes = gen.generate(emails, ["alice@co.com", "bob@co.com", "carol@co.com"])
    print(json.dumps(gen.format_report(minutes), indent=2))

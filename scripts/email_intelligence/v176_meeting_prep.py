#!/usr/bin/env python3
"""V176 - AI Email Meeting Prep Assistant
Auto-generates meeting briefs from email history with key facts, open items,
talking points, and context from past interactions."""
import json, re
from datetime import datetime, timedelta
from typing import Dict, List, Any
from collections import defaultdict

class MeetingPrepAssistant:
    def __init__(self):
        self.contact_history = defaultdict(list)
        self.open_items = defaultdict(list)
        self.key_facts = defaultdict(list)
        self.meeting_history = defaultdict(list)

    def add_email_context(self, email: Dict[str, Any]):
        sender = email.get("from", "")
        if not sender:
            return
        self.contact_history[sender].append({
            "date": email.get("date", datetime.now().isoformat()),
            "subject": email.get("subject", ""),
            "summary": email.get("body", "")[:300],
            "action_items": self._extract_actions(email.get("body", "")),
            "key_points": self._extract_key_points(email.get("body", "")),
            "commitments": self._extract_commitments(email.get("body", ""))
        })

    def _extract_actions(self, body: str) -> List[str]:
        patterns = [r"(?:please|kindly|need to|must|should|will)\s+(.+?)(?:\.|$)"]
        items = []
        for p in patterns:
            items.extend([m.strip()[:100] for m in re.findall(p, body, re.IGNORECASE) if len(m.strip()) > 10])
        return items[:5]

    def _extract_key_points(self, body: str) -> List[str]:
        sentences = re.split(r"[.!?]+", body)
        key = [s.strip() for s in sentences if len(s.strip()) > 30 and any(w in s.lower() for w in ["important", "key", "decided", "agreed", "budget", "deadline", "milestone"])]
        return key[:5]

    def _extract_commitments(self, body: str) -> List[str]:
        patterns = [r"(?:will|shall|promise|commit)\s+(.+?)(?:\.|$)"]
        items = []
        for p in patterns:
            items.extend([m.strip()[:100] for m in re.findall(p, body, re.IGNORECASE) if len(m.strip()) > 10])
        return items[:5]

    def generate_brief(self, attendees: List[str], meeting_subject: str, meeting_type: str = "general") -> Dict[str, Any]:
        briefs = {}
        all_open_items = []
        all_commitments = []
        all_facts = []
        for attendee in attendees:
            history = self.contact_history.get(attendee, [])
            recent = history[-10:]
            open_items = []
            commitments = []
            for h in recent:
                open_items.extend(h.get("action_items", []))
                commitments.extend(h.get("commitments", []))
                all_facts.extend(h.get("key_points", []))
            briefs[attendee] = {
                "total_interactions": len(history),
                "last_contact": history[-1]["date"] if history else "Never",
                "recent_subjects": [h["subject"] for h in recent[-5:]],
                "open_items": open_items[:5],
                "commitments_made": commitments[:5]
            }
            all_open_items.extend(open_items)
            all_commitments.extend(commitments)
        talking_points = self._generate_talking_points(meeting_subject, all_open_items, all_commitments, all_facts)
        return {
            "meeting_subject": meeting_subject, "meeting_type": meeting_type,
            "attendees_briefs": briefs, "talking_points": talking_points,
            "open_items_to_discuss": list(set(all_open_items))[:10],
            "pending_commitments": list(set(all_commitments))[:10],
            "agenda_suggestion": self._suggest_agenda(meeting_subject, meeting_type, all_open_items),
            "reply_all_reminder": len(attendees) > 1,
            "prep_checklist": self._generate_prep_checklist(attendees, all_open_items)
        }

    def _generate_talking_points(self, subject: str, items: List, commitments: List, facts: List) -> List[str]:
        points = [f"Review status of: {subject}"]
        if items:
            points.append(f"Address {len(items)} open action items")
            points.extend([f"  - {item[:80]}" for item in items[:3]])
        if commitments:
            points.append(f"Follow up on {len(commitments)} commitments")
        if facts:
            points.append("Key context from recent communications:")
            points.extend([f"  - {fact[:80]}" for fact in facts[:3]])
        return points

    def _suggest_agenda(self, subject: str, meeting_type: str, items: List) -> List[Dict]:
        agenda = [{"item": "Welcome & introductions", "duration_min": 5}]
        if items:
            agenda.append({"item": f"Review {len(items)} open action items", "duration_min": 15})
        agenda.extend([
            {"item": f"Main discussion: {subject}", "duration_min": 20},
            {"item": "Decisions & next steps", "duration_min": 10},
            {"item": "Wrap-up & action item assignment", "duration_min": 5}
        ])
        return agenda

    def _generate_prep_checklist(self, attendees: List, items: List) -> List[str]:
        checklist = [f"Review history with {len(attendees)} attendee(s)"]
        if items:
            checklist.append(f"Prepare status update on {len(items)} open items")
        checklist.extend(["Prepare meeting agenda", "Share pre-read materials", "Set up meeting notes template", "Confirm reply-all for post-meeting summary"])
        return checklist

if __name__ == "__main__":
    assistant = MeetingPrepAssistant()
    assistant.add_email_context({"from": "alice@client.com", "subject": "Project Alpha kickoff", "body": "We agreed to deliver the MVP by March 15. Budget is $50,000. Please prepare the technical architecture. The key milestone is the demo on April 1.", "date": "2024-01-15T10:00:00"})
    assistant.add_email_context({"from": "bob@client.com", "subject": "Project Alpha - questions", "body": "Can we discuss the API design? We need to review the security requirements. The compliance deadline is February 28.", "date": "2024-01-20T14:00:00"})
    result = assistant.generate_brief(["alice@client.com", "bob@client.com"], "Project Alpha Status Update", "status_meeting")
    print(json.dumps(result, indent=2))

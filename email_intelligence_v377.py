"""
V377 - Email Meeting Intelligence
Extract meeting requests, detect scheduling conflicts, suggest optimal times based on
availability patterns, auto-generate meeting agendas from context.
"""
import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from collections import defaultdict


class EmailMeetingIntelligence:
    """Extract and manage meeting intelligence from emails."""

    TIME_PATTERNS = [
        r"(\d{1,2}:\d{2}\s*(?:AM|PM|am|pm))",
        r"(\d{1,2}\s*(?:AM|PM|am|pm))",
        r"(tomorrow|next\s+\w+day|today)",
        r"(\d{1,2}/\d{1,2}(?:/\d{2,4})?)",
    ]

    MEETING_KEYWORDS = [
        "meeting", "call", "sync", "catch up", "discuss", "review",
        "presentation", "demo", "standup", "1:1", "one-on-one",
        "interview", "kickoff", "retro", "planning",
    ]

    def __init__(self):
        self.meetings = []
        self.availability = defaultdict(list)
        self.existing_events = []

    def extract_meeting_requests(self, email: Dict) -> List[Dict]:
        """Extract meeting requests from email content."""
        subject = email.get("subject", "").lower()
        body = email.get("body", "").lower()
        combined = f"{subject} {body}"
        recipients = email.get("recipients", [])

        is_meeting = any(kw in combined for kw in self.MEETING_KEYWORDS)
        if not is_meeting:
            return []

        proposed_times = self._extract_times(body)
        attendees = [email.get("sender", "")] + recipients

        meeting = {
            "source_email_id": email.get("id", "unknown"),
            "subject": email.get("subject", ""),
            "organizer": email.get("sender", ""),
            "attendees": attendees,
            "proposed_times": proposed_times,
            "extracted_date": self._extract_date(body),
            "duration_estimate": self._estimate_duration(combined),
            "meeting_type": self._classify_meeting_type(combined),
            "priority": self._assess_priority(combined),
        }

        self.meetings.append(meeting)
        return [meeting]

    def _extract_times(self, text: str) -> List[str]:
        """Extract time references from text."""
        times = []
        for pattern in self.TIME_PATTERNS:
            matches = re.findall(pattern, text, re.IGNORECASE)
            times.extend(matches)
        return list(set(times))

    def _extract_date(self, text: str) -> Optional[str]:
        """Extract date references."""
        if "tomorrow" in text.lower():
            return (datetime.now() + timedelta(days=1)).strftime("%Y-%m-%d")
        if "today" in text.lower():
            return datetime.now().strftime("%Y-%m-%d")
        days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
        for i, day in enumerate(days):
            if f"next {day}" in text.lower() or day in text.lower():
                today = datetime.now().weekday()
                diff = (i - today) % 7
                if diff == 0:
                    diff = 7
                return (datetime.now() + timedelta(days=diff)).strftime("%Y-%m-%d")
        return None

    def _estimate_duration(self, text: str) -> int:
        """Estimate meeting duration in minutes."""
        if "quick" in text or "brief" in text:
            return 15
        if "standup" in text:
            return 15
        if "1:1" in text or "one-on-one" in text:
            return 30
        if "workshop" in text or "planning" in text:
            return 120
        return 60

    def _classify_meeting_type(self, text: str) -> str:
        """Classify the type of meeting."""
        if "standup" in text:
            return "standup"
        if "1:1" in text or "one-on-one" in text:
            return "one_on_one"
        if "retro" in text:
            return "retrospective"
        if "planning" in text:
            return "planning"
        if "interview" in text:
            return "interview"
        if "demo" in text or "presentation" in text:
            return "presentation"
        return "general"

    def _assess_priority(self, text: str) -> str:
        """Assess meeting priority."""
        if any(w in text for w in ["urgent", "critical", "asap", "emergency"]):
            return "high"
        if any(w in text for w in ["optional", "if available", "when convenient"]):
            return "low"
        return "medium"

    def detect_conflicts(self, proposed_time: str, attendees: List[str]) -> List[Dict]:
        """Detect scheduling conflicts for a proposed time."""
        conflicts = []
        for event in self.existing_events:
            if event.get("time") == proposed_time:
                overlapping = set(attendees) & set(event.get("attendees", []))
                if overlapping:
                    conflicts.append({
                        "conflict_event": event.get("title", "Unknown"),
                        "conflicting_attendees": list(overlapping),
                        "time": proposed_time,
                        "severity": "hard" if len(overlapping) > 1 else "soft",
                    })
        return conflicts

    def suggest_optimal_times(self, attendees: List[str], duration: int = 60) -> List[Dict]:
        """Suggest optimal meeting times based on availability patterns."""
        suggestions = []
        base = datetime.now().replace(hour=9, minute=0, second=0, microsecond=0)

        preferred_slots = [
            (9, 0), (10, 0), (11, 0), (13, 0), (14, 0), (15, 0), (16, 0),
        ]

        for day_offset in range(1, 6):
            day = base + timedelta(days=day_offset)
            if day.weekday() >= 5:
                continue
            for hour, minute in preferred_slots:
                slot_start = day.replace(hour=hour, minute=minute)
                slot_end = slot_start + timedelta(minutes=duration)

                conflict = False
                for event in self.existing_events:
                    if event.get("time") == slot_start.isoformat():
                        conflict = True
                        break

                if not conflict:
                    suggestions.append({
                        "suggested_time": slot_start.isoformat(),
                        "end_time": slot_end.isoformat(),
                        "day_of_week": slot_start.strftime("%A"),
                        "preference_score": self._score_time_slot(hour),
                        "attendee_count": len(attendees),
                    })

        suggestions.sort(key=lambda x: x["preference_score"], reverse=True)
        return suggestions[:5]

    def _score_time_slot(self, hour: int) -> float:
        """Score a time slot based on typical preference."""
        if 10 <= hour <= 11:
            return 95.0
        if 14 <= hour <= 15:
            return 90.0
        if hour == 9 or hour == 16:
            return 70.0
        if hour == 13:
            return 60.0
        return 50.0

    def generate_agenda(self, meeting: Dict, related_emails: List[Dict] = None) -> Dict:
        """Auto-generate meeting agenda from context."""
        agenda_items = []
        context_topics = set()

        subject = meeting.get("subject", "")
        if subject:
            context_topics.add(subject.replace("Re:", "").replace("Fwd:", "").strip())

        if related_emails:
            for email in related_emails:
                body = email.get("body", "")
                sentences = [s.strip() for s in body.split(".") if len(s.strip()) > 10]
                for sent in sentences[:3]:
                    context_topics.add(sent)

        agenda_items = [
            {"order": 1, "item": "Welcome & introductions", "duration_min": 5},
            {"order": 2, "item": f"Discussion: {subject}", "duration_min": meeting.get("duration_estimate", 60) - 15},
        ]
        for i, topic in enumerate(list(context_topics)[:3]):
            agenda_items.append({
                "order": len(agenda_items) + 1,
                "item": f"Review: {topic}",
                "duration_min": 10,
            })
        agenda_items.append({
            "order": len(agenda_items) + 1,
            "item": "Action items & next steps",
            "duration_min": 10,
        })

        return {
            "meeting_subject": subject,
            "total_duration_min": meeting.get("duration_estimate", 60),
            "agenda_items": agenda_items,
            "preparation_notes": [
                "Review related email threads",
                "Prepare status updates",
                "Identify blockers or dependencies",
            ],
        }

    def analyze(self, emails: List[Dict], recipients: List[str]) -> Dict:
        """Full meeting intelligence analysis."""
        enforce_reply_all = len(recipients) > 1

        all_meetings = []
        for email in emails:
            meetings = self.extract_meeting_requests(email)
            all_meetings.extend(meetings)

        conflicts_all = []
        suggestions_all = []
        agendas = []
        for meeting in all_meetings:
            for time_prop in meeting.get("proposed_times", []):
                conflicts = self.detect_conflicts(time_prop, meeting["attendees"])
                conflicts_all.extend(conflicts)
            suggestions = self.suggest_optimal_times(meeting["attendees"], meeting.get("duration_estimate", 60))
            suggestions_all.extend(suggestions)
            agenda = self.generate_agenda(meeting, emails)
            agendas.append(agenda)

        return {
            "engine": "V377 - Email Meeting Intelligence",
            "timestamp": datetime.now().isoformat(),
            "reply_all_required": enforce_reply_all,
            "reply_all_enforced": enforce_reply_all,
            "meetings_extracted": len(all_meetings),
            "meetings": all_meetings,
            "scheduling_conflicts": conflicts_all,
            "optimal_time_suggestions": suggestions_all[:5],
            "generated_agendas": agendas,
        }


def main():
    engine = EmailMeetingIntelligence()

    engine.existing_events = [
        {
            "title": "Team Standup",
            "time": (datetime.now() + timedelta(days=1)).replace(hour=10, minute=0).isoformat(),
            "attendees": ["alice@company.com", "bob@team.com"],
        },
    ]

    sample_emails = [
        {
            "id": "msg_001",
            "sender": "alice@company.com",
            "recipients": ["bob@partner.com", "carol@vendor.com"],
            "subject": "Q3 Planning Meeting Tomorrow",
            "body": "Hi team, let's have a planning meeting tomorrow at 2:00 PM to discuss the Q3 roadmap. We need to review priorities and assign ownership. This will be a 90-minute workshop.",
            "timestamp": datetime.now().isoformat(),
        },
        {
            "id": "msg_002",
            "sender": "bob@partner.com",
            "recipients": ["alice@company.com"],
            "subject": "Re: Quick sync call",
            "body": "Can we do a quick 1:1 sync next Monday at 3 PM? I want to discuss the contract renewal.",
            "timestamp": datetime.now().isoformat(),
        },
        {
            "id": "msg_003",
            "sender": "dave@client.com",
            "recipients": ["alice@company.com", "eve@company.com"],
            "subject": "Demo Presentation Request",
            "body": "We'd love to schedule a demo presentation for our leadership team. How about next Wednesday at 10:00 AM? Please prepare slides covering the new features.",
            "timestamp": datetime.now().isoformat(),
        },
    ]

    recipients_list = ["bob@partner.com", "carol@vendor.com"]
    result = engine.analyze(sample_emails, recipients=recipients_list)
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()

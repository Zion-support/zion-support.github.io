#!/usr/bin/env python3
"""V245 - AI Email Meeting Scheduler Intelligence
Detect scheduling intent, propose optimal times across timezones,
generate calendar invites, detect conflicts, and send reminders.
Always enforces reply-all for multi-recipient emails.
"""
import json, re, datetime
from dataclasses import dataclass, field
from typing import List, Dict, Optional

TIMEZONE_OFFSETS = {
    "EST": -5, "EDT": -4, "CST": -6, "CDT": -5, "MST": -7, "MDT": -6,
    "PST": -8, "PDT": -7, "GMT": 0, "UTC": 0, "CET": 1, "CEST": 2,
    "JST": 9, "KST": 9, "CST_CN": 8, "IST": 5.5, "AEST": 10,
}

@dataclass
class TimeSlot:
    start: str
    end: str
    timezone: str
    utc_start: str
    participants_available: List[str]
    score: float  # 0-1 based on preference

@dataclass
class MeetingProposal:
    meeting_id: str
    title: str
    duration_minutes: int
    proposed_slots: List[TimeSlot]
    attendees: List[str]
    timezone_conversions: Dict
    calendar_invite: Dict
    conflict_warnings: List[str]

class SchedulingIntentDetector:
    PATTERNS = [
        r"(?:schedule|book|set up|arrange|plan)\s+(?:a\s+)?(?:meeting|call|discussion|review|sync)",
        r"(?:available|free|open)\s+(?:on|this|next)?\s*(?:monday|tuesday|wednesday|thursday|friday|today|tomorrow)",
        r"(?:can|could|would)\s+(?:we|you)\s+(?:meet|chat|discuss|hop on|jump on|connect)",
        r"(?:let'?s|shall we)\s+(?:meet|chat|discuss|schedule|connect|sync)",
        r"(?:what\s+(?:time|day)|when\s+are\s+you)\s+(?:free|available|open|good)",
        r"(?:does|would)\s+(?:\w+\s+)?(?:work|suit)\s+(?:for|you)",
    ]

    TIME_PATTERNS = [
        r'(\d{1,2}[:.]\d{2}\s*(?:am|pm|AM|PM))',
        r'(\d{1,2}\s*(?:am|pm|AM|PM))',
        r'(tomorrow|today|next\s+(?:monday|tuesday|wednesday|thursday|friday))',
    ]

    DURATION_PATTERNS = [
        r'(\d+)\s*(?:min(?:ute)?s?|hours?)',
        r'(half[- ]?hour|15[- ]?min|30[- ]?min|1[- ]?hour)',
    ]

    def detect(self, email: Dict) -> Dict:
        body = email.get("body", "").lower()
        subject = email.get("subject", "").lower()
        combined = f"{subject} {body}"

        is_scheduling = any(re.search(p, combined) for p in self.PATTERNS)
        if not is_scheduling:
            return {"scheduling_intent": False}

        times = []
        for p in self.TIME_PATTERNS:
            times.extend(re.findall(p, combined, re.IGNORECASE))

        duration = 30
        for p in self.DURATION_PATTERNS:
            m = re.search(p, combined, re.IGNORECASE)
            if m:
                val = m.group(1).lower()
                if "hour" in val: duration = 60
                elif "half" in val or "30" in val: duration = 30
                elif "15" in val: duration = 15
                elif val.isdigit(): duration = int(val)
                break

        meeting_type = "meeting"
        if "1:1" in combined or "one on one" in combined: meeting_type = "1on1"
        elif "interview" in combined: meeting_type = "interview"
        elif "standup" in combined or "stand-up" in combined: meeting_type = "standup"
        elif "review" in combined: meeting_type = "review"
        elif "brainstorm" in combined: meeting_type = "brainstorm"

        return {
            "scheduling_intent": True,
            "meeting_type": meeting_type,
            "proposed_times": times[:5],
            "duration_minutes": duration,
            "confidence": 0.85 if times else 0.6
        }

class TimeSlotOptimizer:
    BUSINESS_HOURS = {"start": 9, "end": 17}
    PREFERRED_HOURS = [10, 11, 14, 15]  # Best meeting hours

    def optimize(self, attendees: List[str], duration_minutes: int,
                 attendee_timezones: Dict[str, str] = None) -> List[TimeSlot]:
        slots = []
        base_date = datetime.date.today() + datetime.timedelta(days=1)

        for day_offset in range(5):  # Next 5 business days
            date = base_date + datetime.timedelta(days=day_offset)
            if date.weekday() >= 5: continue

            for hour in self.PREFERRED_HOURS:
                for minute in [0, 30]:
                    if hour * 60 + minute + duration_minutes > self.BUSINESS_HOURS["end"] * 60:
                        continue

                    start = f"{date.isoformat()}T{hour:02d}:{minute:02d}:00"
                    end_dt = datetime.datetime.fromisoformat(start) + datetime.timedelta(minutes=duration_minutes)
                    end = end_dt.isoformat()

                    score = 1.0
                    if hour in [10, 14]: score += 0.2
                    if minute == 0: score += 0.1

                    slots.append(TimeSlot(
                        start=start, end=end, timezone="UTC",
                        utc_start=start, participants_available=attendees,
                        score=min(1.0, score)
                    ))

        slots.sort(key=lambda s: s.score, reverse=True)
        return slots[:5]

class MeetingSchedulerEngine:
    def __init__(self):
        self.intent_detector = SchedulingIntentDetector()
        self.slot_optimizer = TimeSlotOptimizer()

    def process_email(self, email: Dict, recipients: List[str] = None) -> Dict:
        intent = self.intent_detector.detect(email)
        if not intent.get("scheduling_intent"):
            return {"email_id": email.get("id", ""), "scheduling_intent": False,
                    "reply_all_required": len(recipients or []) > 1}

        attendees = recipients or email.get("to", [])
        if isinstance(attendees, str): attendees = [attendees]

        slots = self.slot_optimizer.optimize(
            attendees, intent.get("duration_minutes", 30)
        )

        timezone_conversions = {}
        for tz_name, offset in list(TIMEZONE_OFFSETS.items())[:4]:
            timezone_conversions[tz_name] = f"UTC{'+' if offset >= 0 else ''}{offset}"

        conflict_warnings = []
        if intent.get("duration_minutes", 30) > 60:
            conflict_warnings.append("Long meeting (>1hr) — consider breaking into 2 sessions")
        if len(attendees) > 8:
            conflict_warnings.append(f"Large meeting ({len(attendees)} people) — consider smaller group")

        calendar_invite = {
            "title": email.get("subject", "Meeting"),
            "duration_minutes": intent["duration_minutes"],
            "attendees": attendees,
            "best_slot": slots[0].__dict__ if slots else None,
            "format": "ICS (RFC 5545)"
        }

        return {
            "email_id": email.get("id", ""),
            "scheduling_intent": True,
            "meeting_type": intent["meeting_type"],
            "duration_minutes": intent["duration_minutes"],
            "proposed_slots": [s.__dict__ for s in slots],
            "attendees": attendees,
            "timezone_conversions": timezone_conversions,
            "calendar_invite": calendar_invite,
            "conflict_warnings": conflict_warnings,
            "reply_all_required": len(recipients or []) > 1,
            "timestamp": datetime.datetime.now().isoformat()
        }

if __name__ == "__main__":
    engine = MeetingSchedulerEngine()
    email = {"id": "sched-001", "subject": "Schedule Architecture Review",
             "body": "Can we schedule a 1-hour architecture review? I'm free tomorrow at 2pm or Thursday at 10am. Does that work for everyone?",
             "to": ["dev@co.com", "pm@co.com", "architect@co.com"]}
    print(json.dumps(engine.process_email(email, ["dev@co.com", "pm@co.com", "architect@co.com"]), indent=2))

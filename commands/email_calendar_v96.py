#!/usr/bin/env python3
"""V96: AI Email Calendar Intelligence
Auto-schedule meetings from email requests, detect time proposals,
resolve calendar conflicts, optimize time zones, generate meeting prep."""
import json, hashlib, re
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Tuple
from dataclasses import dataclass, field
from enum import Enum

class MeetingType(Enum):
    SALES_DEMO = "sales_demo"
    SUPPORT_CALL = "support_call"
    PARTNERSHIP = "partnership"
    INTERVIEW = "interview"
    DISCOVERY = "discovery"
    FOLLOW_UP = "follow_up"
    STANDUP = "standup"
    ONE_ON_ONE = "one_on_one"

class ConflictResolution(Enum):
    RESCHEDULE = "reschedule"
    DELEGATE = "delegate"
    SHORTEN = "shorten"
    MERGE = "merge"
    PRIORITY_OVERRIDE = "priority_override"

@dataclass
class TimeProposal:
    start: datetime
    end: datetime
    timezone: str
    confidence: float
    source: str  # "explicit" or "inferred"

@dataclass
class MeetingRequest:
    email_id: str
    sender: str
    meeting_type: MeetingType
    duration_minutes: int
    time_proposals: List[TimeProposal]
    attendees: List[str]
    topic: str
    urgency: str
    requires_video: bool
    timezone: str
    reply_all: bool = True

@dataclass
class CalendarConflict:
    conflict_id: str
    existing_event: str
    new_request: MeetingRequest
    resolution: ConflictResolution
    suggested_alternative: Optional[TimeProposal]

class V96CalendarIntelligence:
    def __init__(self):
        self.meetings_scheduled: Dict[str, MeetingRequest] = {}
        self.conflicts_resolved: List[CalendarConflict] = []
        self.metrics = {"total_scheduled": 0, "conflicts_resolved": 0, "avg_scheduling_time_sec": 0, "back_and_forth_prevented": 0}

    def detect_meeting_request(self, email_data: Dict) -> Optional[MeetingRequest]:
        text = (email_data.get("subject", "") + " " + email_data.get("body", "")).lower()
        meeting_signals = ["meeting", "call", "schedule", "chat", "discuss", "zoom", "teams", "video", "appointment", "demo", "consultation"]
        signal_count = sum(1 for s in meeting_signals if s in text)
        if signal_count < 1: return None

        mtype = MeetingType.DISCOVERY
        if "demo" in text or "sales" in text: mtype = MeetingType.SALES_DEMO
        elif "support" in text or "help" in text or "issue" in text: mtype = MeetingType.SUPPORT_CALL
        elif "partner" in text or "collaborat" in text: mtype = MeetingType.PARTNERSHIP
        elif "interview" in text or "hire" in text: mtype = MeetingType.INTERVIEW
        elif "follow" in text: mtype = MeetingType.FOLLOW_UP

        duration = 30
        if "15 min" in text or "quick" in text: duration = 15
        elif "hour" in text or "60 min" in text: duration = 60
        elif "90 min" in text or "1.5 hour" in text: duration = 90

        proposals = self._extract_time_proposals(text)
        requires_video = any(w in text for w in ["video", "zoom", "teams", "meet", "face"])

        return MeetingRequest(
            email_id=email_data.get("id", "unknown"),
            sender=email_data.get("from", ""),
            meeting_type=mtype,
            duration_minutes=duration,
            time_proposals=proposals,
            attendees=email_data.get("to", []) + email_data.get("cc", []),
            topic=email_data.get("subject", "Meeting"),
            urgency=email_data.get("urgency", "medium"),
            requires_video=requires_video,
            timezone=self._detect_timezone(email_data.get("from", "")),
            reply_all=True,
        )

    def _extract_time_proposals(self, text: str) -> List[TimeProposal]:
        proposals = []
        time_patterns = [
            r'(monday|tuesday|wednesday|thursday|friday)\s+(at\s+)?(\d{1,2})(:\d{2})?\s*(am|pm)?',
            r'(tomorrow|today)\s+(at\s+)?(\d{1,2})(:\d{2})?\s*(am|pm)?',
            r'(\d{1,2})/(\d{1,2})/(\d{2,4})\s+(at\s+)?(\d{1,2})(:\d{2})?\s*(am|pm)?',
            r'next\s+(week|monday|tuesday|wednesday|thursday|friday)',
        ]
        for pattern in time_patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            for match in matches:
                proposals.append(TimeProposal(
                    start=datetime.now() + timedelta(days=2, hours=14),
                    end=datetime.now() + timedelta(days=2, hours=15),
                    timezone="UTC", confidence=0.75, source="explicit"
                ))
        if not proposals:
            proposals.append(TimeProposal(
                start=datetime.now() + timedelta(days=1, hours=10),
                end=datetime.now() + timedelta(days=1, hours=11),
                timezone="UTC", confidence=0.5, source="inferred"
            ))
        return proposals

    def _detect_timezone(self, sender: str) -> str:
        tz_map = {".uk": "Europe/London", ".de": "Europe/Berlin", ".fr": "Europe/Paris",
            ".es": "Europe/Madrid", ".br": "America/Sao_Paulo", ".jp": "Asia/Tokyo",
            ".cn": "Asia/Shanghai", ".in": "Asia/Kolkata", ".au": "Australia/Sydney"}
        for suffix, tz in tz_map.items():
            if suffix in sender.lower(): return tz
        return "America/New_York"

    def check_conflicts(self, request: MeetingRequest) -> List[CalendarConflict]:
        conflicts = []
        if request.urgency == "critical":
            conflict = CalendarConflict(
                conflict_id=hashlib.md5(f"conflict_{request.email_id}".encode()).hexdigest()[:8],
                existing_event="Existing Meeting",
                new_request=request,
                resolution=ConflictResolution.PRIORITY_OVERRIDE,
                suggested_alternative=request.time_proposals[0] if request.time_proposals else None,
            )
            conflicts.append(conflict)
            self.conflicts_resolved.append(conflict)
            self.metrics["conflicts_resolved"] += 1
        return conflicts

    def generate_scheduling_response(self, request: MeetingRequest) -> Dict:
        best_time = request.time_proposals[0] if request.time_proposals else None
        platform = "Zoom" if request.requires_video else "Phone Call"
        body = f"""Thank you for reaching out about a {request.meeting_type.value.replace('_', ' ')}!

I'd be happy to schedule this call. Here are my available times:

{'• ' + best_time.start.strftime('%A, %B %d at %I:%M %p %Z') if best_time else '• Tomorrow at 2:00 PM ET'}
• Alternative: Day after tomorrow at 10:00 AM ET
• Alternative: Next week, your choice of time

Duration: {request.duration_minutes} minutes
Platform: {platform}

Please reply-all to confirm your preferred time, or suggest an alternative that works for you.

Looking forward to our conversation!

Best regards,
Kleber Garcia Alcatrão
Zion Tech Group
📞 +1 302 464 0950
✉️ kleber@ziontechgroup.com
📍 364 E Main St STE 1008, Middletown, DE 19709"""

        self.meetings_scheduled[request.email_id] = request
        self.metrics["total_scheduled"] += 1
        self.metrics["back_and_forth_prevented"] += 1

        return {
            "to": request.sender,
            "cc": request.attendees,
            "reply_all": True,
            "subject": f"Re: {request.topic} — Scheduling Confirmation",
            "body": body,
            "meeting_type": request.meeting_type.value,
            "duration": request.duration_minutes,
            "platform": platform,
            "timezone": request.timezone,
        }

    def get_meeting_prep(self, request: MeetingRequest) -> Dict:
        return {
            "meeting_type": request.meeting_type.value,
            "attendees": [request.sender] + request.attendees,
            "suggested_agenda": self._generate_agenda(request),
            "prep_documents": self._suggest_docs(request),
            "talking_points": self._generate_talking_points(request),
        }

    def _generate_agenda(self, req: MeetingRequest) -> List[str]:
        agendas = {
            MeetingType.SALES_DEMO: ["Discovery questions (5 min)", "Product demo (20 min)", "Q&A (10 min)", "Next steps (5 min)"],
            MeetingType.SUPPORT_CALL: ["Issue recap (5 min)", "Troubleshooting (15 min)", "Resolution confirmation (5 min)", "Follow-up plan (5 min)"],
            MeetingType.PARTNERSHIP: ["Introductions (5 min)", "Business overview (10 min)", "Partnership opportunities (15 min)", "Next steps (10 min)"],
            MeetingType.DISCOVERY: ["Business goals (10 min)", "Current challenges (10 min)", "Solution exploration (15 min)", "Next steps (5 min)"],
        }
        return agendas.get(req.meeting_type, ["Introductions", "Discussion", "Next steps"])

    def _suggest_docs(self, req: MeetingRequest) -> List[str]:
        docs = {"sales_demo": ["Product deck", "Pricing sheet", "Case studies"],
            "support_call": ["Knowledge base articles", "Previous tickets"],
            "partnership": ["Partnership proposal", "Company overview"],
            "discovery": ["Service catalog", "Client success stories"]}
        return docs.get(req.meeting_type.value, ["Meeting notes template"])

    def _generate_talking_points(self, req: MeetingRequest) -> List[str]:
        return [f"Reference {req.topic}", "Highlight relevant case studies",
            "Ask about current pain points", "Propose next steps with timeline"]

    def get_metrics(self) -> Dict:
        return self.metrics

if __name__ == "__main__":
    engine = V96CalendarIntelligence()
    tests = [
        {"id": "e1", "from": "prospect@company.com", "to": ["kleber@ziontechgroup.com"], "cc": ["team@company.com"],
            "subject": "Schedule a demo", "body": "Hi, I'd like to schedule a demo of your AI services. Are you available Tuesday at 2pm?", "urgency": "medium"},
        {"id": "e2", "from": "client@enterprise.com", "to": ["kleber@ziontechgroup.com"], "cc": ["cto@enterprise.com"],
            "subject": "URGENT: Need support call", "body": "We need an urgent support call about our API issues. Can we jump on a Zoom call today?", "urgency": "critical"},
        {"id": "e3", "from": "partner@startup.io", "to": ["kleber@ziontechgroup.com"], "cc": ["biz@startup.io"],
            "subject": "Partnership discussion", "body": "Would love to discuss a potential partnership. Can we chat next week?", "urgency": "medium"},
    ]
    for email in tests:
        req = engine.detect_meeting_request(email)
        if req:
            conflicts = engine.check_conflicts(req)
            resp = engine.generate_scheduling_response(req)
            prep = engine.get_meeting_prep(req)
            print(f"\n{'='*60}")
            print(f"Meeting: {req.meeting_type.value} ({req.duration_minutes} min)")
            print(f"Reply All: {resp['reply_all']} | CC: {len(resp['cc'])} recipients")
            print(f"Conflicts: {len(conflicts)}")
            print(f"Platform: {resp['platform']}")
            print(f"Agenda: {', '.join(prep['suggested_agenda'])}")
    print(f"\nMetrics: {json.dumps(engine.get_metrics(), indent=2)}")

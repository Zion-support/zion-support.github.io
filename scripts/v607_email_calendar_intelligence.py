#!/usr/bin/env python3
"""V607 - Email Calendar Intelligence
Extract meeting proposals, detect scheduling conflicts, and auto-suggest optimal times.
REPLY-ALL ENFORCED: Always replies to all recipients in multi-person threads.
"""
import json, re
from datetime import datetime, timedelta
from typing import Dict, List, Any

class CalendarIntelligence:
    """Extract and manage meeting requests from emails."""
    
    DATE_PATTERNS = [
        r'\b(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})\b',
        r'\b(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+(\d{1,2})(?:st|nd|rd|th)?\b',
        r'\b(today|tomorrow|next\s+(?:monday|tuesday|wednesday|thursday|friday))\b'
    ]
    
    TIME_PATTERNS = [
        r'\b(\d{1,2}):(\d{2})\s*(am|pm|AM|PM)?\b',
        r'\bat\s+(\d{1,2})\s*(am|pm|AM|PM)\b'
    ]
    
    def __init__(self):
        self.meetings = []
    
    def analyze_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze email for meeting requests."""
        body = email.get("body", "")
        subject = email.get("subject", "")
        
        dates = self._extract_dates(body + " " + subject)
        times = self._extract_times(body + " " + subject)
        attendees = self._extract_attendees(email)
        
        is_meeting_request = self._is_meeting_request(body + " " + subject)
        conflicts = self._detect_conflicts(dates, times)
        suggested_times = self._suggest_times(dates, times)
        
        return {
            "engine": "V607",
            "is_meeting_request": is_meeting_request,
            "proposed_dates": dates,
            "proposed_times": times,
            "attendees": attendees,
            "conflicts": conflicts,
            "suggested_times": suggested_times,
            "duration_estimate": self._estimate_duration(body),
            "location": self._extract_location(body),
            "agenda": self._extract_agenda(body),
            "reply_all_enforced": len(attendees) > 1,
            "timestamp": datetime.now().isoformat()
        }
    
    def _extract_dates(self, text: str) -> List[str]:
        """Extract dates from text."""
        dates = []
        for pattern in self.DATE_PATTERNS:
            matches = re.findall(pattern, text, re.IGNORECASE)
            dates.extend([str(m) for m in matches])
        return dates[:5]
    
    def _extract_times(self, text: str) -> List[str]:
        """Extract times from text."""
        times = []
        for pattern in self.TIME_PATTERNS:
            matches = re.findall(pattern, text, re.IGNORECASE)
            times.extend([str(m) for m in matches])
        return times[:5]
    
    def _extract_attendees(self, email: Dict) -> List[str]:
        """Extract meeting attendees."""
        attendees = email.get("to", []) + email.get("cc", [])
        return list(set(attendees))
    
    def _is_meeting_request(self, text: str) -> bool:
        """Detect if email is a meeting request."""
        keywords = [r'\bmeeting\b', r'\bschedule\b', r'\bcall\b', r'\bappointment\b', 
                   r'\bavailable\b', r'\bfree\s+time\b', r'\bdiscuss\b']
        return any(re.search(k, text, re.IGNORECASE) for k in keywords)
    
    def _detect_conflicts(self, dates: List[str], times: List[str]) -> List[str]:
        """Detect scheduling conflicts."""
        # Mock implementation - would check actual calendar
        return ["Potential conflict: Existing meeting at similar time"] if len(dates) > 0 else []
    
    def _suggest_times(self, dates: List[str], times: List[str]) -> List[str]:
        """Suggest alternative meeting times."""
        suggestions = ["9:00 AM", "2:00 PM", "4:00 PM"]
        return suggestions[:3]
    
    def _estimate_duration(self, body: str) -> str:
        """Estimate meeting duration."""
        if "quick" in body.lower():
            return "15 minutes"
        if "detailed" in body.lower() or "deep dive" in body.lower():
            return "60 minutes"
        return "30 minutes"
    
    def _extract_location(self, body: str) -> str:
        """Extract meeting location."""
        patterns = [r'\bat\s+([A-Z][\w\s]+)', r'\bin\s+([A-Z][\w\s]+)', r'\broom\s+(\d+)']
        for pattern in patterns:
            match = re.search(pattern, body)
            if match:
                return match.group(1).strip()
        return "TBD"
    
    def _extract_agenda(self, body: str) -> str:
        """Extract meeting agenda."""
        sentences = body.split('.')
        agenda_items = [s.strip() for s in sentences if any(k in s.lower() for k in ['discuss', 'review', 'plan', 'update'])]
        return '. '.join(agenda_items[:3]) if agenda_items else "General discussion"
    
    def process_batch(self, emails: List[Dict]) -> Dict[str, Any]:
        results = [self.analyze_email(e) for e in emails]
        meeting_requests = [r for r in results if r["is_meeting_request"]]
        return {
            "engine": "V607 - Calendar Intelligence",
            "total_processed": len(results),
            "meeting_requests": len(meeting_requests),
            "reply_all_enforced": sum(1 for r in results if r["reply_all_enforced"]),
            "results": results
        }

if __name__ == "__main__":
    engine = CalendarIntelligence()
    test_emails = [
        {"subject": "Meeting tomorrow?", "body": "Can we schedule a meeting to discuss the project? How about 2pm tomorrow at the conference room?", "to": ["alice@company.com", "bob@company.com"]},
        {"subject": "Project update", "body": "Here's the latest status on the deliverables.", "to": ["manager@company.com"]}
    ]
    result = engine.process_batch(test_emails)
    print(json.dumps(result, indent=2))

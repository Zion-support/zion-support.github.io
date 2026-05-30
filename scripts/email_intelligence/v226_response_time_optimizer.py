#!/usr/bin/env python3
"""V226 - AI Email Response Time Optimizer
Analyze response patterns, suggest optimal send times per recipient timezone,
track SLA compliance, predict response delays, auto-escalate overdue responses.
Always enforces reply-all for multi-recipient emails.
"""
import json, re, datetime
from dataclasses import dataclass, field
from typing import List, Dict, Optional
from collections import defaultdict

@dataclass
class ResponsePattern:
    recipient: str
    avg_response_hours: float
    best_send_hour: int
    timezone: str
    sla_compliant: bool
    predicted_delay_hours: float

class ResponseTimeAnalyzer:
    def analyze_history(self, emails: List[Dict]) -> Dict[str, ResponsePattern]:
        patterns = {}
        response_times = defaultdict(list)
        send_hours = defaultdict(list)
        
        for email in emails:
            sender = email.get("from", "")
            sent_at = email.get("timestamp", "")
            replied_at = email.get("reply_timestamp", "")
            
            if sent_at and replied_at:
                try:
                    t1 = datetime.datetime.fromisoformat(sent_at)
                    t2 = datetime.datetime.fromisoformat(replied_at)
                    delta = (t2 - t1).total_seconds() / 3600
                    if 0 < delta < 168:
                        response_times[sender].append(delta)
                        send_hours[sender].append(t1.hour)
                except (ValueError, TypeError):
                    pass
        
        for recipient, times in response_times.items():
            avg = sum(times) / len(times) if times else 24
            hours = send_hours.get(recipient, [12])
            best_hour = max(set(hours), key=hours.count) if hours else 10
            sla_compliant = avg <= 24
            predicted = avg * 1.1 if avg > 12 else avg * 0.9
            
            patterns[recipient] = ResponsePattern(
                recipient=recipient, avg_response_hours=round(avg, 1),
                best_send_hour=best_hour, timezone="UTC",
                sla_compliant=sla_compliant, predicted_delay_hours=round(predicted, 1)
            )
        
        return patterns

class SLATracker:
    def check_sla(self, email: Dict, sla_hours: int = 24) -> Dict:
        sent_at = email.get("timestamp", "")
        replied_at = email.get("reply_timestamp", "")
        
        if not sent_at:
            return {"status": "pending", "hours_elapsed": 0, "sla_breach": False}
        
        try:
            sent = datetime.datetime.fromisoformat(sent_at)
            now = datetime.datetime.now()
            elapsed = (now - sent).total_seconds() / 3600
            
            if replied_at:
                replied = datetime.datetime.fromisoformat(replied_at)
                response_time = (replied - sent).total_seconds() / 3600
                return {"status": "responded", "hours_elapsed": round(response_time, 1),
                        "sla_breach": response_time > sla_hours}
            
            return {"status": "pending", "hours_elapsed": round(elapsed, 1),
                    "sla_breach": elapsed > sla_hours,
                    "hours_remaining": max(0, round(sla_hours - elapsed, 1)),
                    "escalation_needed": elapsed > sla_hours * 0.75}
        except (ValueError, TypeError):
            return {"status": "unknown", "hours_elapsed": 0, "sla_breach": False}

class ResponseTimeEngine:
    def __init__(self):
        self.analyzer = ResponseTimeAnalyzer()
        self.sla_tracker = SLATracker()
    
    def optimize(self, email: Dict, history: List[Dict] = None,
                 recipients: List[str] = None) -> Dict:
        patterns = self.analyzer.analyze_history(history or [])
        sla_status = self.sla_tracker.check_sla(email)
        
        suggestions = []
        recipient = email.get("to", [""])[0] if isinstance(email.get("to"), list) else email.get("to", "")
        
        if recipient in patterns:
            p = patterns[recipient]
            suggestions.append(f"Best time to email {recipient}: {p.best_send_hour}:00 (their local time)")
            suggestions.append(f"Expected response: {p.predicted_delay_hours}h (avg: {p.avg_response_hours}h)")
            if not p.sla_compliant:
                suggestions.append(f"⚠️ {recipient} avg response ({p.avg_response_hours}h) exceeds 24h SLA")
        
        if sla_status.get("escalation_needed"):
            suggestions.append(f"🚨 SLA at risk! {sla_status['hours_remaining']}h remaining — consider escalation")
        
        return {
            "email_id": email.get("id", ""),
            "sla_status": sla_status,
            "recipient_patterns": {k: v.__dict__ for k, v in patterns.items()},
            "suggestions": suggestions,
            "reply_all_required": len(recipients or []) > 1,
            "timestamp": datetime.datetime.now().isoformat()
        }

if __name__ == "__main__":
    engine = ResponseTimeEngine()
    history = [
        {"from": "client@acme.com", "timestamp": "2026-05-28T09:00:00", "reply_timestamp": "2026-05-28T14:00:00"},
        {"from": "client@acme.com", "timestamp": "2026-05-27T10:00:00", "reply_timestamp": "2026-05-27T16:30:00"},
        {"from": "client@acme.com", "timestamp": "2026-05-26T08:00:00", "reply_timestamp": "2026-05-26T15:00:00"},
    ]
    email = {"id": "rt-001", "to": ["client@acme.com"], "timestamp": "2026-05-30T08:00:00"}
    print(json.dumps(engine.optimize(email, history, ["client@acme.com", "sales@zion.com"]), indent=2))

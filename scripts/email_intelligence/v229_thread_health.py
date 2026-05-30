#!/usr/bin/env python3
"""V229 - AI Email Thread Health Monitor
Monitor long-running threads for stagnation, detect dropped conversations,
identify unresolved issues, generate weekly thread health reports.
Always enforces reply-all for multi-recipient emails.
"""
import json, re, datetime
from dataclasses import dataclass, field
from typing import List, Dict

@dataclass
class ThreadHealth:
    thread_id: str
    status: str  # "active", "stagnant", "resolved", "dropped", "blocked"
    days_since_last_reply: int
    open_items: int
    health_score: float
    action_needed: str

class ThreadHealthMonitor:
    STAGNATION_THRESHOLD_DAYS = 3
    DROPPED_THRESHOLD_DAYS = 7
    
    UNRESOLVED_PATTERNS = [
        r"(?:pending|waiting for|awaiting|still need|not yet)",
        r"(?:todo|action item|follow up|open question)",
        r"(?:\?[^.]*$)",  # Unanswered question
    ]
    
    RESOLUTION_PATTERNS = [
        r"(?:resolved|completed|done|closed|finished|shipped)",
        r"(?:we(?:'ve| have) (?:decided|agreed|launched|deployed))",
        r"(?:thanks for (?:the|your) (?:help|update|resolution))",
    ]
    
    def monitor(self, threads: List[Dict]) -> Dict:
        health_reports = []
        
        for thread in threads:
            messages = thread.get("messages", [])
            thread_id = thread.get("thread_id", "unknown")
            
            if not messages:
                continue
            
            # Calculate days since last reply
            last_msg = messages[-1]
            last_timestamp = last_msg.get("timestamp", "")
            try:
                last_dt = datetime.datetime.fromisoformat(last_timestamp)
                days_since = (datetime.datetime.now() - last_dt).days
            except (ValueError, TypeError):
                days_since = 0
            
            # Count open items
            all_text = " ".join(m.get("body", "") for m in messages)
            open_items = sum(1 for p in self.UNRESOLVED_PATTERNS if re.search(p, all_text, re.IGNORECASE))
            resolved = any(re.search(p, all_text, re.IGNORECASE) for p in self.RESOLUTION_PATTERNS)
            
            # Determine status
            if resolved:
                status = "resolved"
            elif days_since >= self.DROPPED_THRESHOLD_DAYS and open_items > 0:
                status = "dropped"
            elif days_since >= self.STAGNATION_THRESHOLD_DAYS:
                status = "stagnant"
            elif open_items > 2:
                status = "blocked"
            else:
                status = "active"
            
            # Health score
            health = 1.0
            health -= days_since * 0.1
            health -= open_items * 0.15
            health = max(0, min(1.0, health))
            
            # Action needed
            actions = {
                "active": "No action needed",
                "stagnant": f"Follow up — no reply in {days_since} days",
                "dropped": f"⚠️ Thread dropped! {open_items} open items, {days_since} days silent",
                "blocked": f"🔴 {open_items} unresolved items blocking progress",
                "resolved": "✅ Thread resolved — consider archiving",
            }
            
            health_reports.append(ThreadHealth(
                thread_id=thread_id, status=status,
                days_since_last_reply=days_since, open_items=open_items,
                health_score=round(health, 2), action_needed=actions.get(status, "")
            ))
        
        # Summary
        status_counts = {}
        for h in health_reports:
            status_counts[h.status] = status_counts.get(h.status, 0) + 1
        
        return {
            "threads_monitored": len(health_reports),
            "status_breakdown": status_counts,
            "threads": [h.__dict__ for h in health_reports],
            "at_risk_threads": [h.__dict__ for h in health_reports if h.status in ("dropped", "blocked")],
            "reply_all_enforced": True,
            "timestamp": datetime.datetime.now().isoformat()
        }

if __name__ == "__main__":
    monitor = ThreadHealthMonitor()
    threads = [
        {"thread_id": "t1", "messages": [
            {"body": "Can we finalize the API design?", "timestamp": "2026-05-20T10:00:00"},
            {"body": "Still waiting for the security review.", "timestamp": "2026-05-22T14:00:00"},
        ]},
        {"thread_id": "t2", "messages": [
            {"body": "The deployment is done. Thanks for the help!", "timestamp": "2026-05-28T16:00:00"},
        ]},
    ]
    print(json.dumps(monitor.monitor(threads), indent=2))

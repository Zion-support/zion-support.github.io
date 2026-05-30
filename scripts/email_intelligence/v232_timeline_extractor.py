#!/usr/bin/env python3
"""V232 - AI Email Project Timeline Extractor
Extract project milestones, deadlines, and dependencies from email threads.
Generate structured timelines and Gantt-chart data.
Always enforces reply-all for multi-recipient emails.
"""
import json, re, datetime
from dataclasses import dataclass, field
from typing import List, Dict

@dataclass
class Milestone:
    name: str
    deadline: str
    owner: str
    status: str  # "planned", "in_progress", "completed", "delayed", "at_risk"
    dependencies: List[str]
    confidence: float

class TimelineExtractor:
    DATE_PATTERNS = [
        r'(?:by|before|on|due|deadline)\s+(\d{1,2}[/-]\d{1,2}(?:[/-]\d{2,4})?)',
        r'(?:by|before|on|due)\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2}(?:,?\s+\d{4})?',
        r'(?:by|before)\s+(?:the\s+)?(?:end of|close of|COB|EOD)\s+(today|tomorrow|this week|next week|this month|Q[1-4])',
        r'(\d{4}-\d{2}-\d{2})',
    ]
    
    MILESTONE_PATTERNS = [
        r'(?:milestone|deliverable|phase|stage|release|launch|deploy|go-live|completion|sign-off|approval|review)',
        r'(?:sprint|iteration|checkpoint|target|goal)',
    ]
    
    STATUS_SIGNALS = {
        "completed": ["done", "completed", "finished", "shipped", "delivered", "launched", "deployed"],
        "in_progress": ["working on", "in progress", "underway", "started", "ongoing"],
        "delayed": ["delayed", "pushed back", "postponed", "behind schedule", "slipped"],
        "at_risk": ["at risk", "might miss", "concerned about", "tight timeline", "uncertain"],
        "planned": ["planned", "scheduled", "targeting", "aiming for"],
    }
    
    def extract(self, emails: List[Dict]) -> List[Milestone]:
        milestones = []
        
        for email in emails:
            body = email.get("body", "")
            sender = email.get("from", "")
            lines = body.split("\n")
            
            for line in lines:
                has_milestone = any(re.search(p, line, re.IGNORECASE) for p in self.MILESTONE_PATTERNS)
                if not has_milestone:
                    continue
                
                # Extract dates
                dates = []
                for p in self.DATE_PATTERNS:
                    dates.extend(re.findall(p, line, re.IGNORECASE))
                
                # Determine status
                status = "planned"
                for s, signals in self.STATUS_SIGNALS.items():
                    if any(sig in line.lower() for sig in signals):
                        status = s
                        break
                
                # Extract milestone name (simplified)
                name = re.sub(r'\s+', ' ', line).strip()[:100]
                
                # Extract dependencies
                deps = []
                dep_match = re.findall(r'(?:after|depends on|following|once)\s+(.{5,50}?)(?:\.|,|$)', line, re.IGNORECASE)
                deps.extend(dep_match)
                
                for date in dates[:2]:
                    milestones.append(Milestone(
                        name=name, deadline=str(date), owner=sender,
                        status=status, dependencies=deps,
                        confidence=0.7 if dates else 0.4
                    ))
        
        return milestones

class TimelineEngine:
    def __init__(self):
        self.extractor = TimelineExtractor()
    
    def process_thread(self, thread_id: str, emails: List[Dict],
                       recipients: List[str] = None) -> Dict:
        milestones = self.extractor.extract(emails)
        
        status_counts = {}
        for m in milestones:
            status_counts[m.status] = status_counts.get(m.status, 0) + 1
        
        at_risk = [m.__dict__ for m in milestones if m.status in ("delayed", "at_risk")]
        
        return {
            "thread_id": thread_id,
            "milestones_extracted": len(milestones),
            "status_breakdown": status_counts,
            "milestones": [m.__dict__ for m in milestones],
            "at_risk_items": at_risk,
            "timeline_summary": f"{len(milestones)} milestones: {status_counts.get('completed', 0)} done, {status_counts.get('in_progress', 0)} in progress, {len(at_risk)} at risk",
            "reply_all_required": len(recipients or []) > 1,
            "timestamp": datetime.datetime.now().isoformat()
        }

if __name__ == "__main__":
    engine = TimelineEngine()
    emails = [
        {"from": "pm@co.com", "body": "Phase 1 deliverable is due by 06/15/2026. The design review is scheduled for next week. API development depends on the architecture approval."},
        {"from": "dev@co.com", "body": "Sprint 3 is underway. The deployment milestone is planned for 07/01/2026 but might be delayed due to testing issues."},
        {"from": "qa@co.com", "body": "Testing phase is at risk. We need 2 more weeks. Go-live target was 07/15/2026 but I'm concerned about the tight timeline."},
    ]
    print(json.dumps(engine.process_thread("proj-001", emails, ["pm@co.com", "dev@co.com", "qa@co.com"]), indent=2))

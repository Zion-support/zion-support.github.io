#!/usr/bin/env python3
"""
V119: AI Meeting Notes-to-Action Engine
Convert meeting transcripts into actionable tasks, calendar events, follow-up emails with deadline tracking.
"""
import re, json, hashlib
from datetime import datetime, timedelta
from dataclasses import dataclass, field
from typing import List, Dict, Optional, Tuple
from enum import Enum

class ActionType(Enum):
    TASK = "task"
    CALENDAR_EVENT = "calendar_event"
    FOLLOW_UP_EMAIL = "follow_up_email"
    DECISION_LOG = "decision_log"
    INFORMATION_SHARE = "information_share"
    DEADLINE = "deadline"

class Priority(Enum):
    CRITICAL = 1
    HIGH = 2
    MEDIUM = 3
    LOW = 4

@dataclass
class ActionItem:
    item_id: str
    action_type: ActionType
    description: str
    assignee: Optional[str]
    deadline: Optional[datetime]
    priority: Priority
    source_text: str
    related_items: List[str] = field(default_factory=list)
    status: str = "pending"
    follow_up_date: Optional[datetime] = None
    reply_all_required: bool = False

@dataclass
class MeetingSummary:
    meeting_id: str
    title: str
    date: datetime
    participants: List[str]
    duration_minutes: int
    key_decisions: List[str]
    action_items: List[ActionItem]
    follow_up_emails: List[Dict]
    calendar_events: List[Dict]
    sentiment: float
    engagement_score: float
    next_meeting: Optional[datetime] = None

class MeetingToActionEngine:
    """V119: Convert meeting notes into structured actions automatically."""
    
    ACTION_PATTERNS = [
        r"(?:will|shall|going to|need to|must|should)\s+(.{10,80})",
        r"(?:action item|todo|task|follow.?up)[:\s]+(.{10,80})",
        r"([A-Z][a-z]+)\s+(?:will|shall|is going to|needs to)\s+(.{10,80})",
        r"(?:deadline|due|by)\s+(.{5,30})",
        r"(?:let'?s?\s+(?:schedule|set up|plan|book))\s+(.{10,80})",
    ]
    
    DECISION_PATTERNS = [
        r"(?:we(?:'ve|\shave)?\s+(?:decided|agreed|chosen))\s+(.{10,100})",
        r"(?:the decision is|we will go with|approved)\s+(.{10,100})",
        r"(?:going forward|from now on)\s*[,:]?\s*(.{10,100})",
    ]
    
    DEADLINE_PATTERNS = [
        r"(?:by|before|due|deadline)\s+(\w+\s+\d{1,2}(?:st|nd|rd|th)?)",
        r"(?:by|before)\s+(end of\s+(?:week|month|quarter|day))",
        r"(?:by|before)\s+(next\s+\w+day?)",
        r"(?:by|before)\s+(tomorrow|today|monday|tuesday|wednesday|thursday|friday)",
    ]
    
    ASSIGNEE_PATTERNS = [
        r"([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)\s+(?:will|shall|can|should|is going to|needs to)",
        r"(?:@|assigned to)\s*([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)",
        r"(?:let'?s?\s+have|ask)\s+([A-Z][a-z]+)\s+(?:to\s+)?",
    ]
    
    def __init__(self):
        self.meetings_processed = 0
        self.total_actions_created = 0
        self.total_follow_ups = 0
        self.reply_all_count = 0
    
    def process_meeting(self, transcript: str, metadata: Dict = None) -> MeetingSummary:
        """Process meeting transcript into structured summary and actions."""
        self.meetings_processed += 1
        metadata = metadata or {}
        
        title = metadata.get("title", "Meeting")
        participants = metadata.get("participants", self._extract_participants(transcript))
        date = datetime.now()
        
        # Extract action items
        action_items = self._extract_action_items(transcript, participants)
        
        # Extract decisions
        decisions = self._extract_decisions(transcript)
        
        # Generate follow-up emails
        follow_ups = self._generate_follow_up_emails(action_items, participants, title)
        
        # Generate calendar events
        calendar_events = self._generate_calendar_events(action_items, decisions, title)
        
        # Sentiment analysis
        sentiment = self._analyze_sentiment(transcript)
        
        # Engagement scoring
        engagement = self._score_engagement(transcript, participants)
        
        # Detect next meeting
        next_meeting = self._detect_next_meeting(transcript)
        
        meeting_id = hashlib.md5(f"{title}{date.isoformat()}".encode()).hexdigest()[:12]
        
        summary = MeetingSummary(
            meeting_id=meeting_id,
            title=title,
            date=date,
            participants=participants,
            duration_minutes=metadata.get("duration", len(transcript.split()) // 150),
            key_decisions=decisions,
            action_items=action_items,
            follow_up_emails=follow_ups,
            calendar_events=calendar_events,
            sentiment=sentiment,
            engagement_score=engagement,
            next_meeting=next_meeting
        )
        
        self.total_actions_created += len(action_items)
        self.total_follow_ups += len(follow_ups)
        
        return summary
    
    def _extract_participants(self, text: str) -> List[str]:
        names = re.findall(r'\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)\s*:', text)
        return list(set(names))[:10]
    
    def _extract_action_items(self, text: str, participants: List[str]) -> List[ActionItem]:
        items = []
        sentences = re.split(r'[.!?\n]+', text)
        
        for sent in sentences:
            sent = sent.strip()
            if len(sent) < 15:
                continue
            
            # Check for action patterns
            is_action = False
            for pattern in self.ACTION_PATTERNS:
                if re.search(pattern, sent, re.I):
                    is_action = True
                    break
            
            if not is_action:
                continue
            
            # Extract assignee
            assignee = None
            for pattern in self.ASSIGNEE_PATTERNS:
                match = re.search(pattern, sent)
                if match:
                    candidate = match.group(1).strip()
                    if any(p.lower().startswith(candidate.lower()[:3]) for p in participants):
                        assignee = candidate
                        break
            
            # Extract deadline
            deadline = None
            for pattern in self.DEADLINE_PATTERNS:
                if re.search(pattern, sent, re.I):
                    deadline = datetime.now() + timedelta(days=7)  # default 1 week
                    break
            
            # Priority
            priority = Priority.MEDIUM
            if any(w in sent.lower() for w in ["urgent", "critical", "asap", "immediately"]):
                priority = Priority.CRITICAL
            elif any(w in sent.lower() for w in ["important", "soon", "priority"]):
                priority = Priority.HIGH
            
            # Determine action type
            action_type = ActionType.TASK
            if any(w in sent.lower() for w in ["schedule", "meeting", "call", "book"]):
                action_type = ActionType.CALENDAR_EVENT
            elif any(w in sent.lower() for w in ["send", "email", "notify", "update"]):
                action_type = ActionType.FOLLOW_UP_EMAIL
            
            # Reply-all if multiple participants
            reply_all = len(participants) > 1
            if reply_all:
                self.reply_all_count += 1
            
            item_id = hashlib.md5(f"{sent}{len(items)}".encode()).hexdigest()[:12]
            items.append(ActionItem(
                item_id=item_id,
                action_type=action_type,
                description=sent[:200],
                assignee=assignee,
                deadline=deadline,
                priority=priority,
                source_text=sent,
                reply_all_required=reply_all
            ))
        
        return items
    
    def _extract_decisions(self, text: str) -> List[str]:
        decisions = []
        for pattern in self.DECISION_PATTERNS:
            matches = re.findall(pattern, text, re.I)
            decisions.extend([m.strip()[:150] for m in matches])
        return list(set(decisions))[:10]
    
    def _generate_follow_up_emails(self, items: List[ActionItem], participants: List[str], title: str) -> List[Dict]:
        emails = []
        # Group items by assignee
        by_assignee = {}
        for item in items:
            key = item.assignee or "team"
            if key not in by_assignee:
                by_assignee[key] = []
            by_assignee[key].append(item)
        
        for assignee, assignee_items in by_assignee.items():
            task_list = "\n".join([f"  - {i.description[:80]}" for i in assignee_items])
            deadlines = [i for i in assignee_items if i.deadline]
            
            email = {
                "to": [assignee] if assignee != "team" else participants,
                "cc": participants if assignee != "team" else [],
                "subject": f"Action Items from: {title}",
                "body": f"Hi {assignee},\n\nHere are your action items from today's meeting:\n\n{task_list}\n\n"
                       f"{'Please prioritize items with upcoming deadlines.' if deadlines else ''}\n\n"
                       f"Best regards,\nZion Tech Group\n📱 +1 302 464 0950\n📧 kleber@ziontechgroup.com",
                "reply_all": len(participants) > 1,
                "item_count": len(assignee_items)
            }
            emails.append(email)
        
        return emails
    
    def _generate_calendar_events(self, items: List[ActionItem], decisions: List[str], title: str) -> List[Dict]:
        events = []
        for item in items:
            if item.action_type == ActionType.CALENDAR_EVENT or item.deadline:
                events.append({
                    "title": item.description[:80],
                    "date": (item.deadline or datetime.now() + timedelta(days=7)).isoformat(),
                    "assignee": item.assignee,
                    "priority": item.priority.name
                })
        
        if decisions:
            events.append({
                "title": f"Review: {title} decisions",
                "date": (datetime.now() + timedelta(days=30)).isoformat(),
                "assignee": None,
                "priority": "LOW"
            })
        
        return events
    
    def _analyze_sentiment(self, text: str) -> float:
        positive = ["agree", "great", "excellent", "good", "progress", "done", "complete", "approved", "success"]
        negative = ["disagree", "concern", "issue", "problem", "block", "delay", "risk", "worried"]
        pos = sum(1 for w in positive if w in text.lower())
        neg = sum(1 for w in negative if w in text.lower())
        total = pos + neg
        return round((pos - neg) / max(1, total), 2)
    
    def _score_engagement(self, text: str, participants: List[str]) -> float:
        word_count = len(text.split())
        participant_mentions = sum(1 for p in participants if p.lower() in text.lower())
        questions = text.count("?")
        score = min(1.0, (word_count / 500 + participant_mentions * 0.1 + questions * 0.05))
        return round(score, 2)
    
    def _detect_next_meeting(self, text: str) -> Optional[datetime]:
        if any(w in text.lower() for w in ["next meeting", "follow up meeting", "reconvene", "meet again"]):
            return datetime.now() + timedelta(days=7)
        return None
    
    def get_stats(self) -> Dict:
        return {
            "meetings_processed": self.meetings_processed,
            "total_actions_created": self.total_actions_created,
            "total_follow_ups": self.total_follow_ups,
            "reply_all_enforced": self.reply_all_count,
            "engine_version": "V119"
        }


if __name__ == "__main__":
    engine = MeetingToActionEngine()
    
    transcript = """
    John: We need to finalize the Q3 budget by next Friday. Sarah, can you prepare the financial projections?
    Sarah: Yes, I'll have the projections ready by Wednesday. We also need to discuss the new hire for the AI team.
    Mike: I've decided we're going with the AWS migration plan. Let's schedule a kickoff meeting for next Monday.
    John: Great decision. Mike, please send the migration timeline to the team. We should also update the stakeholders.
    Sarah: I'll draft the stakeholder update email. Deadline is end of week.
    Mike: Let's also book a follow-up meeting to review progress in two weeks. Action item: John needs to set up the monitoring dashboard.
    """
    
    print("=" * 60)
    print("V119: AI Meeting Notes-to-Action Engine")
    print("=" * 60)
    
    summary = engine.process_meeting(transcript, {
        "title": "Q3 Planning Meeting",
        "participants": ["John", "Sarah", "Mike"],
        "duration": 45
    })
    
    print(f"\n--- Meeting: {summary.title} ---")
    print(f"  Participants: {summary.participants}")
    print(f"  Duration: {summary.duration_minutes} min")
    print(f"  Sentiment: {summary.sentiment}")
    print(f"  Engagement: {summary.engagement_score}")
    print(f"  Next Meeting: {summary.next_meeting}")
    
    print(f"\n--- {len(summary.key_decisions)} Decisions ---")
    for d in summary.key_decisions:
        print(f"  • {d[:80]}")
    
    print(f"\n--- {len(summary.action_items)} Action Items ---")
    for item in summary.action_items:
        print(f"  [{item.priority.name}] {item.description[:60]}")
        print(f"    Assignee: {item.assignee or 'Unassigned'} | Deadline: {item.deadline}")
        print(f"    Type: {item.action_type.value} | Reply-All: {item.reply_all_required}")
    
    print(f"\n--- {len(summary.follow_up_emails)} Follow-up Emails ---")
    for e in summary.follow_up_emails:
        print(f"  To: {e['to']} | Subject: {e['subject']}")
        print(f"    Reply-All: {e['reply_all']} | Items: {e['item_count']}")
    
    print(f"\n--- Stats ---")
    for k, v in engine.get_stats().items():
        print(f"  {k}: {v}")

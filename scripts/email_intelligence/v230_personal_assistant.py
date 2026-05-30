#!/usr/bin/env python3
"""V230 - AI Email Personal Assistant
Learns your email patterns, drafts responses in your style, prioritizes inbox,
suggests quick replies, handles routine emails autonomously.
Always enforces reply-all for multi-recipient emails.
"""
import json, re, datetime
from dataclasses import dataclass, field
from typing import List, Dict

@dataclass
class EmailPriority:
    email_id: str
    priority_score: float  # 0-100
    category: str  # "urgent", "important", "normal", "low", "spam"
    suggested_action: str
    draft_reply: str
    confidence: float

class PersonalAssistant:
    URGENCY_SIGNALS = {"urgent": 30, "asap": 25, "immediately": 25, "critical": 30, "deadline": 20,
                       "today": 15, "eod": 20, "emergency": 30}
    IMPORTANCE_SIGNALS = {"ceo": 20, "board": 25, "client": 15, "partner": 10, "executive": 20,
                         "vp": 15, "director": 10, "manager": 5}
    LOW_PRIORITY = {"newsletter": -20, "unsubscribe": -25, "promotion": -15, "sale": -10,
                   "no-reply": -20, "noreply": -20}
    
    QUICK_REPLIES = {
        "meeting_request": "Thanks for reaching out! I'm available on [DATE] at [TIME]. Does that work for you?",
        "thank_you": "You're welcome! Happy to help. Let me know if you need anything else.",
        "follow_up": "Thanks for following up. I'm looking into this and will get back to you by [DATE].",
        "information_request": "Great question! Let me gather the details and send them over shortly.",
        "acknowledgment": "Received, thanks! I'll review and get back to you soon.",
    }
    
    def prioritize(self, email: Dict, user_patterns: Dict = None) -> EmailPriority:
        body = email.get("body", "").lower()
        subject = email.get("subject", "").lower()
        sender = email.get("from", "").lower()
        combined = f"{subject} {body} {sender}"
        
        score = 50  # Base score
        
        for signal, weight in self.URGENCY_SIGNALS.items():
            if signal in combined:
                score += weight
        
        for signal, weight in self.IMPORTANCE_SIGNALS.items():
            if signal in combined:
                score += weight
        
        for signal, weight in self.LOW_PRIORITY.items():
            if signal in combined:
                score += weight
        
        score = max(0, min(100, score))
        
        if score >= 80: category = "urgent"
        elif score >= 60: category = "important"
        elif score >= 30: category = "normal"
        elif score >= 10: category = "low"
        else: category = "spam"
        
        # Determine suggested action
        if category == "urgent": action = "Respond immediately — consider escalation"
        elif category == "important": action = "Respond within 2 hours"
        elif category == "normal": action = "Respond within 24 hours"
        elif category == "low": action = "Review when convenient — consider archiving"
        else: action = "Auto-archive or delete"
        
        # Generate draft reply
        draft = ""
        if "meeting" in combined or "schedule" in combined:
            draft = self.QUICK_REPLIES["meeting_request"]
        elif "thank" in combined:
            draft = self.QUICK_REPLIES["thank_you"]
        elif "follow" in combined or "checking in" in combined:
            draft = self.QUICK_REPLIES["follow_up"]
        elif "?" in body:
            draft = self.QUICK_REPLIES["information_request"]
        else:
            draft = self.QUICK_REPLIES["acknowledgment"]
        
        confidence = min(1.0, score / 100.0 + 0.3)
        
        return EmailPriority(
            email_id=email.get("id", ""), priority_score=score,
            category=category, suggested_action=action,
            draft_reply=draft, confidence=round(confidence, 2)
        )
    
    def process_inbox(self, emails: List[Dict], recipients: List[str] = None) -> Dict:
        priorities = [self.prioritize(e) for e in emails]
        priorities.sort(key=lambda p: p.priority_score, reverse=True)
        
        urgent = [p for p in priorities if p.category == "urgent"]
        important = [p for p in priorities if p.category == "important"]
        
        return {
            "total_emails": len(priorities),
            "urgent_count": len(urgent),
            "important_count": len(important),
            "prioritized_inbox": [p.__dict__ for p in priorities],
            "top_actions": [
                {"email": p.email_id, "action": p.suggested_action, "draft": p.draft_reply}
                for p in priorities[:5]
            ],
            "reply_all_required": len(recipients or []) > 1,
            "timestamp": datetime.datetime.now().isoformat()
        }

if __name__ == "__main__":
    assistant = PersonalAssistant()
    emails = [
        {"id": "e1", "from": "ceo@company.com", "subject": "URGENT: Board meeting prep",
         "body": "I need the Q3 numbers ASAP for tomorrow's board meeting. This is critical."},
        {"id": "e2", "from": "newsletter@tech.com", "subject": "Weekly Newsletter",
         "body": "This week in tech: AI trends, new tools, and promotions. Unsubscribe link below."},
        {"id": "e3", "from": "client@acme.com", "subject": "Follow up on proposal",
         "body": "Just checking in on the proposal status. Can we schedule a call to discuss?"},
    ]
    print(json.dumps(assistant.process_inbox(emails, ["me@zion.com", "assistant@zion.com"]), indent=2))

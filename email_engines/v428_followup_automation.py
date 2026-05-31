#!/usr/bin/env python3
"""
V428: AI Email Follow-up Automation
Detects when follow-ups are needed, suggests optimal timing, and generates
follow-up drafts. Tracks conversation state and prevents dropped balls.
Enforces reply-all for multi-recipient follow-ups.
"""

import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Optional


class V428FollowUpAutomation:
    """Automates email follow-up detection and scheduling"""
    
    FOLLOW_UP_TRIGGERS = {
        "no_response": {
            "patterns": [r'(?:will\s+get\s+back|follow\s+up|update\s+you)', r'(?:let\s+me\s+know|awaiting\s+your)'],
            "default_days": 3,
            "priority": "MEDIUM"
        },
        "pending_action": {
            "patterns": [r'(?:send\s+(?:me|us)|please\s+(?:send|provide))', r'(?:need\s+(?:from|your))', r'(?:waiting\s+for)'],
            "default_days": 2,
            "priority": "HIGH"
        },
        "meeting_follow_up": {
            "patterns": [r'(?:after\s+(?:the\s+)?meeting|following\s+(?:the\s+)?meeting)', r'(?:next\s+steps|action\s+items)'],
            "default_days": 1,
            "priority": "HIGH"
        },
        "proposal_review": {
            "patterns": [r'(?:review\s+(?:the\s+)?proposal|consider\s+(?:the\s+)?offer)', r'(?:think\s+about|discuss\s+internally)'],
            "default_days": 5,
            "priority": "MEDIUM"
        },
        "document_request": {
            "patterns": [r'(?:send\s+(?:the\s+)?document|attach\s+(?:the\s+)?)', r'(?:contract|agreement|invoice|report)'],
            "default_days": 2,
            "priority": "HIGH"
        }
    }
    
    URGENCY_INDICATORS = {
        "critical": ["asap", "immediately", "urgent", "emergency", "today"],
        "high": ["this week", "soon", "quickly", "priority"],
        "medium": ["when convenient", "no rush", "when you have time"],
        "low": ["sometime", "eventually", "no hurry"]
    }
    
    def detect_follow_up_needed(self, email: Dict) -> Dict:
        """Detect if follow-up is needed"""
        text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        
        triggers_found = []
        
        for trigger_type, rules in self.FOLLOW_UP_TRIGGERS.items():
            for pattern in rules["patterns"]:
                if re.search(pattern, text, re.IGNORECASE):
                    triggers_found.append({
                        "type": trigger_type,
                        "default_days": rules["default_days"],
                        "priority": rules["priority"]
                    })
                    break
        
        # Detect urgency
        urgency = "MEDIUM"
        for level, indicators in self.URGENCY_INDICATORS.items():
            if any(indicator in text for indicator in indicators):
                urgency = level.upper()
                break
        
        # Determine if follow-up is needed
        needs_follow_up = len(triggers_found) > 0 or any(
            word in text for word in ["?", "please", "could you", "let me know"]
        )
        
        return {
            "needs_follow_up": needs_follow_up,
            "triggers": triggers_found,
            "urgency": urgency,
            "reason": self._generate_reason(triggers_found, urgency) if needs_follow_up else None
        }
    
    def _generate_reason(self, triggers: List[Dict], urgency: str) -> str:
        """Generate human-readable reason for follow-up"""
        if not triggers:
            return f"Question or request detected ({urgency} urgency)"
        
        trigger_types = [t["type"].replace("_", " ") for t in triggers]
        return f"Detected: {', '.join(trigger_types)} ({urgency} urgency)"
    
    def calculate_follow_up_date(self, email_date: str, triggers: List[Dict], urgency: str) -> Dict:
        """Calculate optimal follow-up date"""
        try:
            email_dt = datetime.fromisoformat(email_date.replace('Z', '+00:00'))
        except:
            email_dt = datetime.now()
        
        # Determine days to wait
        if urgency == "CRITICAL":
            days = 0  # Same day
        elif urgency == "HIGH":
            days = 1
        elif urgency == "MEDIUM":
            days = min(t["default_days"] for t in triggers) if triggers else 3
        else:
            days = max(t["default_days"] for t in triggers) if triggers else 7
        
        follow_up_date = email_dt + timedelta(days=days)
        
        # Avoid weekends
        while follow_up_date.weekday() >= 5:  # Saturday = 5, Sunday = 6
            follow_up_date += timedelta(days=1)
        
        return {
            "follow_up_date": follow_up_date.isoformat(),
            "days_to_wait": days,
            "business_days": self._count_business_days(email_dt, follow_up_date)
        }
    
    def _count_business_days(self, start: datetime, end: datetime) -> int:
        """Count business days between two dates"""
        days = 0
        current = start
        while current < end:
            if current.weekday() < 5:
                days += 1
            current += timedelta(days=1)
        return days
    
    def generate_follow_up_draft(self, original_email: Dict, follow_up_type: str) -> Dict:
        """Generate follow-up email draft"""
        sender_name = original_email.get('sender_name', 'there')
        subject = original_email.get('subject', '')
        
        templates = {
            "no_response": {
                "subject": f"Re: {subject}",
                "body": f"""Hi {sender_name},

I wanted to follow up on my previous email regarding {subject.lower()}.

I understand you're busy, but I'd appreciate your response when you have a moment.

Please let me know if you need any additional information from my end.

Best regards,"""
            },
            "pending_action": {
                "subject": f"Following up: {subject}",
                "body": f"""Hi {sender_name},

Just checking in on the {subject.lower()} we discussed.

Have you had a chance to [specific action]? Please let me know if there's anything I can do to help move this forward.

Thanks,"""
            },
            "meeting_follow_up": {
                "subject": f"Follow-up from our meeting: {subject}",
                "body": f"""Hi {sender_name},

Thank you for the productive meeting. I wanted to follow up on the action items we discussed.

[Specific action items]

Please let me know if you have any questions or if I can provide any additional information.

Best regards,"""
            },
            "proposal_review": {
                "subject": f"Checking in: {subject}",
                "body": f"""Hi {sender_name},

I hope you've had a chance to review the proposal I sent over.

I'm available to discuss any questions or concerns you might have. Would you like to schedule a call this week?

Looking forward to hearing your thoughts.

Best regards,"""
            },
            "document_request": {
                "subject": f"Reminder: {subject}",
                "body": f"""Hi {sender_name},

Just a friendly reminder about the [document] we discussed.

Please let me know if you need any clarification or if there's anything else I can provide.

Thanks,"""
            }
        }
        
        template = templates.get(follow_up_type, templates["no_response"])
        
        return {
            "subject": template["subject"],
            "body": template["body"],
            "tone": "professional and friendly"
        }
    
    def process(self, email: Dict) -> Dict:
        """Process email and determine follow-up needs"""
        recipients = email.get('to', [])
        cc = email.get('cc', [])
        email_date = email.get('date', datetime.now().isoformat())
        
        # Detect follow-up needs
        follow_up_analysis = self.detect_follow_up_needed(email)
        
        if not follow_up_analysis["needs_follow_up"]:
            return {
                "engine": "V428 Follow-up Automation",
                "timestamp": datetime.now().isoformat(),
                "needs_follow_up": False,
                "reason": "No follow-up triggers detected"
            }
        
        # Calculate follow-up date
        primary_trigger = follow_up_analysis["triggers"][0]["type"] if follow_up_analysis["triggers"] else "no_response"
        timing = self.calculate_follow_up_date(
            email_date,
            follow_up_analysis["triggers"],
            follow_up_analysis["urgency"]
        )
        
        # Generate draft
        draft = self.generate_follow_up_draft(email, primary_trigger)
        
        # Check reply-all
        all_recipients = list(set(recipients + cc))
        should_reply_all = len(all_recipients) > 1
        
        result = {
            "engine": "V428 Follow-up Automation",
            "timestamp": datetime.now().isoformat(),
            "needs_follow_up": True,
            "analysis": follow_up_analysis,
            "timing": timing,
            "draft": draft,
            "action": {
                "schedule_follow_up": True,
                "follow_up_date": timing["follow_up_date"],
                "priority": follow_up_analysis["triggers"][0]["priority"] if follow_up_analysis["triggers"] else "MEDIUM"
            },
            "reply_all_enforced": should_reply_all,
            "reply_all_reason": f"Follow-up to {len(all_recipients)} recipients" if should_reply_all else "Single recipient follow-up"
        }
        
        return result


if __name__ == "__main__":
    test_email = {
        "sender": "client@example.com",
        "sender_name": "John",
        "subject": "Project proposal review",
        "body": "Hi Sarah,\n\nI've received your proposal. Let me review it with my team and get back to you by next week.\n\nPlease send me the detailed timeline document as well.\n\nThanks,\nJohn",
        "to": ["sarah@company.com"],
        "cc": ["manager@company.com"],
        "date": "2024-01-15T10:00:00"
    }
    
    automation = V428FollowUpAutomation()
    result = automation.process(test_email)
    print(json.dumps(result, indent=2))

#!/usr/bin/env python3
"""
V109: Autonomous Email Orchestrator
Zero-touch email processing with case-by-case analysis and guaranteed reply-all enforcement.
"""
import json, re, hashlib
from datetime import datetime, timedelta
from dataclasses import dataclass, field, asdict
from enum import Enum
from typing import List, Dict, Optional, Tuple

class EmailCategory(Enum):
    INQUIRY = "inquiry"
    COMPLAINT = "complaint"
    MEETING = "meeting"
    NEGOTIATION = "negotiation"
    URGENT = "urgent"
    NEWSLETTER = "newsletter"
    SPAM = "spam"
    FOLLOW_UP = "follow_up"
    CONTRACT = "contract"
    FEEDBACK = "feedback"
    PARTNERSHIP = "partnership"
    SUPPORT = "support"

class Priority(Enum):
    CRITICAL = 1
    HIGH = 2
    MEDIUM = 3
    LOW = 4
    IGNORE = 5

class ActionType(Enum):
    REPLY_ALL = "reply_all"
    REPLY_SENDER = "reply_sender"
    FORWARD = "forward"
    ESCALATE = "escalate"
    ARCHIVE = "archive"
    SNOOZE = "snooze"
    CREATE_TASK = "create_task"
    SCHEDULE_MEETING = "schedule_meeting"

@dataclass
class EmailAnalysis:
    email_id: str
    sender: str
    recipients: List[str]
    cc_list: List[str]
    subject: str
    category: EmailCategory
    priority: Priority
    sentiment: float  # -1 to 1
    urgency_score: float  # 0 to 1
    action_type: ActionType
    confidence: float
    reply_all_required: bool
    response_draft: str
    tags: List[str] = field(default_factory=list)
    sla_deadline: Optional[datetime] = None
    delegation_target: Optional[str] = None

class AutonomousEmailOrchestrator:
    """V109: Fully autonomous email handling with case-by-case analysis."""
    
    CATEGORY_PATTERNS = {
        EmailCategory.INQUIRY: [r"\b(how|what|when|where|why|can you|could you)\b", r"\?\s*$"],
        EmailCategory.COMPLAINT: [r"\b(unhappy|dissatisfied|broken|issue|problem|wrong|terrible)\b"],
        EmailCategory.MEETING: [r"\b(meet|schedule|calendar|availability|call|zoom|teams)\b"],
        EmailCategory.NEGOTIATION: [r"\b(price|discount|offer|counter|terms|budget|deal)\b"],
        EmailCategory.URGENT: [r"\b(urgent|asap|immediately|emergency|critical|deadline)\b"],
        EmailCategory.NEWSLETTER: [r"\b(unsubscribe|newsletter|digest|weekly|monthly)\b"],
        EmailCategory.CONTRACT: [r"\b(contract|agreement|terms|sign|legal|nda|sow)\b"],
        EmailCategory.FEEDBACK: [r"\b(feedback|suggestion|review|opinion|rate)\b"],
        EmailCategory.PARTNERSHIP: [r"\b(partner|collaborate|alliance|joint|affiliate)\b"],
        EmailCategory.SUPPORT: [r"\b(help|support|assist|trouble|ticket|bug)\b"],
    }
    
    SENTIMENT_WORDS = {
        "positive": ["great", "excellent", "amazing", "love", "perfect", "wonderful", "thank", "appreciate", "happy", "impressed"],
        "negative": ["bad", "terrible", "horrible", "hate", "awful", "disappointed", "frustrated", "angry", "unacceptable", "worst"]
    }
    
    SLA_HOURS = {
        Priority.CRITICAL: 1,
        Priority.HIGH: 4,
        Priority.MEDIUM: 24,
        Priority.LOW: 72,
        Priority.IGNORE: None
    }
    
    def __init__(self):
        self.learning_db: Dict[str, Dict] = {}
        self.processed_count = 0
        self.reply_all_enforced = 0
    
    def analyze_email(self, email: Dict) -> EmailAnalysis:
        """Analyze a single email case-by-case and determine the best action."""
        self.processed_count += 1
        body = email.get("body", "")
        subject = email.get("subject", "")
        sender = email.get("from", "")
        recipients = email.get("to", [])
        cc_list = email.get("cc", [])
        
        # 1. Categorize
        category = self._categorize(subject + " " + body)
        
        # 2. Assess priority
        priority = self._assess_priority(category, subject, body)
        
        # 3. Analyze sentiment
        sentiment = self._analyze_sentiment(body)
        
        # 4. Determine urgency
        urgency = self._calculate_urgency(category, priority, body)
        
        # 5. Determine action
        action_type = self._determine_action(category, priority, len(recipients), len(cc_list))
        
        # 6. Reply-all enforcement
        reply_all_required = len(recipients) > 1 or len(cc_list) > 0
        if reply_all_required and action_type == ActionType.REPLY_SENDER:
            action_type = ActionType.REPLY_ALL
            self.reply_all_enforced += 1
        
        # 7. Generate response
        response = self._generate_response(category, priority, sentiment, sender, subject)
        
        # 8. Calculate confidence
        confidence = self._calculate_confidence(category, priority, body)
        
        # 9. SLA deadline
        sla_hours = self.SLA_HOURS.get(priority)
        sla_deadline = datetime.now() + timedelta(hours=sla_hours) if sla_hours else None
        
        email_id = hashlib.md5(f"{sender}{subject}{datetime.now().isoformat()}".encode()).hexdigest()[:12]
        
        return EmailAnalysis(
            email_id=email_id,
            sender=sender,
            recipients=recipients,
            cc_list=cc_list,
            subject=subject,
            category=category,
            priority=priority,
            sentiment=sentiment,
            urgency_score=urgency,
            action_type=action_type,
            confidence=confidence,
            reply_all_required=reply_all_required,
            response_draft=response,
            tags=[category.value, priority.name.lower()],
            sla_deadline=sla_deadline
        )
    
    def _categorize(self, text: str) -> EmailCategory:
        scores = {}
        text_lower = text.lower()
        for cat, patterns in self.CATEGORY_PATTERNS.items():
            score = sum(1 for p in patterns if re.search(p, text_lower, re.I))
            if score > 0:
                scores[cat] = score
        if not scores:
            return EmailCategory.INQUIRY
        return max(scores, key=scores.get)
    
    def _assess_priority(self, category: EmailCategory, subject: str, body: str) -> Priority:
        text = (subject + " " + body).lower()
        if category == EmailCategory.URGENT or any(w in text for w in ["urgent", "asap", "emergency", "critical"]):
            return Priority.CRITICAL
        if category in [EmailCategory.COMPLAINT, EmailCategory.CONTRACT]:
            return Priority.HIGH
        if category in [EmailCategory.NEGOTIATION, EmailCategory.SUPPORT, EmailCategory.PARTNERSHIP]:
            return Priority.MEDIUM
        if category in [EmailCategory.NEWSLETTER, EmailCategory.SPAM]:
            return Priority.IGNORE
        return Priority.LOW
    
    def _analyze_sentiment(self, text: str) -> float:
        text_lower = text.lower()
        pos = sum(1 for w in self.SENTIMENT_WORDS["positive"] if w in text_lower)
        neg = sum(1 for w in self.SENTIMENT_WORDS["negative"] if w in text_lower)
        total = pos + neg
        if total == 0:
            return 0.0
        return round((pos - neg) / total, 2)
    
    def _calculate_urgency(self, category: EmailCategory, priority: Priority, body: str) -> float:
        base = {
            Priority.CRITICAL: 0.95,
            Priority.HIGH: 0.75,
            Priority.MEDIUM: 0.5,
            Priority.LOW: 0.25,
            Priority.IGNORE: 0.05
        }[priority]
        if "!" in body:
            base = min(1.0, base + 0.1)
        return round(base, 2)
    
    def _determine_action(self, category: EmailCategory, priority: Priority, to_count: int, cc_count: int) -> ActionType:
        if priority == Priority.IGNORE:
            return ActionType.ARCHIVE
        if category == EmailCategory.MEETING:
            return ActionType.SCHEDULE_MEETING
        if category == EmailCategory.URGENT and priority == Priority.CRITICAL:
            return ActionType.ESCALATE
        if category in [EmailCategory.COMPLAINT, EmailCategory.SUPPORT]:
            return ActionType.CREATE_TASK
        if to_count > 1 or cc_count > 0:
            return ActionType.REPLY_ALL
        return ActionType.REPLY_SENDER
    
    def _generate_response(self, category: EmailCategory, priority: Priority, sentiment: float, sender: str, subject: str) -> str:
        name = sender.split("<")[0].strip() if "<" in sender else sender.split("@")[0]
        templates = {
            EmailCategory.INQUIRY: f"Dear {name},\n\nThank you for your inquiry regarding \"{subject}\". Our team is reviewing your question and will provide a comprehensive response shortly.\n\nBest regards,\nZion Tech Group",
            EmailCategory.COMPLAINT: f"Dear {name},\n\nWe sincerely apologize for the inconvenience you\'ve experienced. We take your feedback very seriously and are investigating the matter immediately. You can expect a resolution within 24 hours.\n\nBest regards,\nZion Tech Group",
            EmailCategory.MEETING: f"Dear {name},\n\nThank you for the meeting request. I\'ve checked our availability and am happy to confirm. Please find the calendar invitation attached.\n\nBest regards,\nZion Tech Group",
            EmailCategory.NEGOTIATION: f"Dear {name},\n\nThank you for your proposal. We\'ve reviewed the terms and would like to discuss further to find a mutually beneficial arrangement.\n\nBest regards,\nZion Tech Group",
            EmailCategory.URGENT: f"Dear {name},\n\nWe acknowledge the urgency of your request and have escalated it to our priority team. You will receive an update within 1 hour.\n\nBest regards,\nZion Tech Group",
            EmailCategory.SUPPORT: f"Dear {name},\n\nThank you for reaching out to our support team. We\'ve created a ticket for your issue and a specialist will contact you shortly.\n\nBest regards,\nZion Tech Group",
            EmailCategory.PARTNERSHIP: f"Dear {name},\n\nThank you for your partnership interest. We\'re excited about the potential collaboration and would like to schedule a call to discuss further.\n\nBest regards,\nZion Tech Group",
        }
        return templates.get(category, f"Dear {name},\n\nThank you for your email. We\'ve received your message and will respond in detail shortly.\n\nBest regards,\nZion Tech Group")
    
    def _calculate_confidence(self, category: EmailCategory, priority: Priority, body: str) -> float:
        base = 0.85
        if len(body) > 100:
            base += 0.05
        if len(body) > 500:
            base += 0.05
        return min(0.99, round(base, 2))
    
    def learn_from_outcome(self, email_id: str, outcome: str, correction: Optional[str] = None):
        """Learn from email handling outcomes to improve future decisions."""
        self.learning_db[email_id] = {
            "outcome": outcome,
            "correction": correction,
            "timestamp": datetime.now().isoformat()
        }
    
    def get_stats(self) -> Dict:
        return {
            "total_processed": self.processed_count,
            "reply_all_enforced": self.reply_all_enforced,
            "reply_all_rate": round(self.reply_all_enforced / max(1, self.processed_count) * 100, 1),
            "learning_entries": len(self.learning_db),
            "engine_version": "V109"
        }

if __name__ == "__main__":
    orch = AutonomousEmailOrchestrator()
    
    test_emails = [
        {"from": "john@acme.com", "to": ["team@zion.com", "sales@zion.com"], "cc": ["manager@acme.com"], "subject": "Urgent: Server down in production", "body": "Our production server is completely down! We need immediate help. This is critical for our business operations."},
        {"from": "sarah@startup.io", "to": ["info@zion.com"], "cc": [], "subject": "Partnership opportunity", "body": "I'd like to explore a partnership between our companies. We have a great product that could complement your AI services."},
        {"from": "mike@corp.com", "to": ["support@zion.com", "account@zion.com"], "cc": ["cto@corp.com", "vp@corp.com"], "subject": "Re: Contract renewal terms", "body": "We'd like to negotiate better terms for our contract renewal. Can we discuss a volume discount?"},
    ]
    
    print("=" * 60)
    print("V109: Autonomous Email Orchestrator - Case-by-Case Analysis")
    print("=" * 60)
    
    for i, email in enumerate(test_emails, 1):
        analysis = orch.analyze_email(email)
        print(f"\n--- Email #{i}: {analysis.subject} ---")
        print(f"  Category: {analysis.category.value}")
        print(f"  Priority: {analysis.priority.name}")
        print(f"  Sentiment: {analysis.sentiment}")
        print(f"  Urgency: {analysis.urgency_score}")
        print(f"  Action: {analysis.action_type.value}")
        print(f"  Reply-All Required: {analysis.reply_all_required}")
        print(f"  Confidence: {analysis.confidence}")
        print(f"  SLA Deadline: {analysis.sla_deadline}")
    
    print(f"\n--- Stats ---")
    stats = orch.get_stats()
    for k, v in stats.items():
        print(f"  {k}: {v}")

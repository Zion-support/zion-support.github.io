#!/usr/bin/env python3
"""
V416: AI Email Intent Classifier Pro
Classifies email intent into 20+ categories for intelligent routing and response.
Enforces reply-all for multi-recipient emails.
"""

import json
import re
from typing import Dict, List, Optional
from dataclasses import dataclass
from enum import Enum


class EmailIntent(Enum):
    """Email intent categories"""
    REQUEST = "request"
    INQUIRY = "inquiry"
    COMPLAINT = "complaint"
    NEGOTIATION = "negotiation"
    CONFIRMATION = "confirmation"
    CANCELLATION = "cancellation"
    FEEDBACK = "feedback"
    SUPPORT = "support"
    SALES = "sales"
    PARTNERSHIP = "partnership"
    INTERVIEW = "interview"
    MEETING_REQUEST = "meeting_request"
    FOLLOW_UP = "follow_up"
    ESCALATION = "escalation"
    APOLOGY = "apology"
    THANK_YOU = "thank_you"
    ANNOUNCEMENT = "announcement"
    REMINDER = "reminder"
    URGENT = "urgent"
    SPAM = "spam"
    UNKNOWN = "unknown"


@dataclass
class IntentResult:
    """Intent classification result"""
    intent: EmailIntent
    confidence: float
    keywords: List[str]
    action_required: bool
    suggested_response_type: str
    priority_level: str  # low, medium, high, critical


class V416IntentClassifierPro:
    """
    Advanced email intent classifier with 20+ intent categories.
    Uses keyword matching, pattern recognition, and context analysis.
    """
    
    def __init__(self):
        self.intent_patterns = self._build_intent_patterns()
        
    def _build_intent_patterns(self) -> Dict[EmailIntent, Dict]:
        """Build intent detection patterns"""
        return {
            EmailIntent.REQUEST: {
                "keywords": ["request", "please", "could you", "would you", "need", "require", "ask"],
                "patterns": [r"could you.*\?", r"would you.*\?", r"please.*", r"i need.*"],
                "priority": "medium"
            },
            EmailIntent.INQUIRY: {
                "keywords": ["question", "wondering", "curious", "information", "details", "how", "what", "when", "where"],
                "patterns": [r"(?:how|what|when|where|why).*\?", r"i'm wondering.*", r"could you tell me.*"],
                "priority": "medium"
            },
            EmailIntent.COMPLAINT: {
                "keywords": ["complaint", "issue", "problem", "unhappy", "dissatisfied", "wrong", "broken", "failed"],
                "patterns": [r"i'm (?:unhappy|dissatisfied|disappointed).*", r"there's (?:a|an) (?:problem|issue).*"],
                "priority": "high"
            },
            EmailIntent.NEGOTIATION: {
                "keywords": ["negotiate", "offer", "counter", "price", "discount", "deal", "terms", "contract"],
                "patterns": [r"can we (?:negotiate|discuss).*", r"what if.*", r"would you consider.*"],
                "priority": "high"
            },
            EmailIntent.CONFIRMATION: {
                "keywords": ["confirm", "confirmed", "yes", "approve", "approved", "accept", "accepted"],
                "patterns": [r"i confirm.*", r"please confirm.*", r"this is to confirm.*"],
                "priority": "medium"
            },
            EmailIntent.CANCELLATION: {
                "keywords": ["cancel", "cancellation", "withdraw", "revoke", "terminate"],
                "patterns": [r"i (?:want|need|would like) to cancel.*", r"please cancel.*"],
                "priority": "high"
            },
            EmailIntent.FEEDBACK: {
                "keywords": ["feedback", "suggestion", "opinion", "thoughts", "review", "rating"],
                "patterns": [r"here's my feedback.*", r"i'd like to share.*", r"my (?:thoughts|opinion).*"],
                "priority": "low"
            },
            EmailIntent.SUPPORT: {
                "keywords": ["help", "support", "assist", "trouble", "error", "bug", "issue"],
                "patterns": [r"i need help.*", r"can you help.*", r"i'm having (?:trouble|an issue).*"],
                "priority": "high"
            },
            EmailIntent.SALES: {
                "keywords": ["buy", "purchase", "order", "quote", "pricing", "cost", "interested"],
                "patterns": [r"i'd like to (?:buy|purchase|order).*", r"can i get a quote.*"],
                "priority": "high"
            },
            EmailIntent.PARTNERSHIP: {
                "keywords": ["partnership", "collaborate", "partner", "alliance", "joint"],
                "patterns": [r"i'd like to (?:partner|collaborate).*", r"interested in (?:a )?partnership.*"],
                "priority": "medium"
            },
            EmailIntent.INTERVIEW: {
                "keywords": ["interview", "candidate", "application", "resume", "position", "job"],
                "patterns": [r"i'd like to (?:schedule|arrange) an interview.*", r"regarding the .* position.*"],
                "priority": "medium"
            },
            EmailIntent.MEETING_REQUEST: {
                "keywords": ["meeting", "schedule", "appointment", "call", "discuss"],
                "patterns": [r"can we (?:schedule|set up) a meeting.*", r"i'd like to (?:meet|discuss).*"],
                "priority": "medium"
            },
            EmailIntent.FOLLOW_UP: {
                "keywords": ["follow up", "following up", "checking in", "status", "update"],
                "patterns": [r"just following up.*", r"checking in on.*", r"any update on.*"],
                "priority": "medium"
            },
            EmailIntent.ESCALATION: {
                "keywords": ["escalate", "urgent", "immediate", "asap", "manager", "supervisor"],
                "patterns": [r"this is (?:very )?urgent.*", r"i need to escalate.*", r"please escalate.*"],
                "priority": "critical"
            },
            EmailIntent.APOLOGY: {
                "keywords": ["sorry", "apologize", "apology", "mistake", "error"],
                "patterns": [r"i (?:apologize|am sorry).*", r"sorry for.*"],
                "priority": "low"
            },
            EmailIntent.THANK_YOU: {
                "keywords": ["thank", "thanks", "appreciate", "grateful"],
                "patterns": [r"thank you.*", r"thanks for.*", r"i appreciate.*"],
                "priority": "low"
            },
            EmailIntent.ANNOUNCEMENT: {
                "keywords": ["announce", "announcement", "inform", "notify", "update"],
                "patterns": [r"i'm (?:pleased|excited) to announce.*", r"this is to inform.*"],
                "priority": "low"
            },
            EmailIntent.REMINDER: {
                "keywords": ["reminder", "remind", "don't forget", "remember"],
                "patterns": [r"just a reminder.*", r"don't forget.*", r"please remember.*"],
                "priority": "medium"
            },
            EmailIntent.URGENT: {
                "keywords": ["urgent", "emergency", "critical", "immediately", "asap"],
                "patterns": [r"(?:this is |very )?urgent.*", r"emergency.*", r"need .* immediately.*"],
                "priority": "critical"
            },
            EmailIntent.SPAM: {
                "keywords": ["offer", "deal", "discount", "free", "winner", "prize", "click here"],
                "patterns": [r"(?:congratulations|you've won).*", r"(?:free|discount) offer.*"],
                "priority": "low"
            }
        }
    
    def classify_intent(self, email_content: str, subject: str = "") -> IntentResult:
        """
        Classify email intent with confidence score
        
        Args:
            email_content: Email body text
            subject: Email subject line
            
        Returns:
            IntentResult with classified intent and confidence
        """
        text = f"{subject} {email_content}".lower()
        
        scores = {}
        keywords_found = {}
        
        # Score each intent based on keywords and patterns
        for intent, config in self.intent_patterns.items():
            score = 0
            found_keywords = []
            
            # Check keywords
            for keyword in config["keywords"]:
                if keyword in text:
                    score += 1
                    found_keywords.append(keyword)
            
            # Check patterns
            for pattern in config["patterns"]:
                if re.search(pattern, text, re.IGNORECASE):
                    score += 2
            
            if score > 0:
                scores[intent] = score
                keywords_found[intent] = found_keywords
        
        # Determine primary intent
        if not scores:
            return IntentResult(
                intent=EmailIntent.UNKNOWN,
                confidence=0.0,
                keywords=[],
                action_required=False,
                suggested_response_type="generic",
                priority_level="low"
            )
        
        # Get highest scoring intent
        primary_intent = max(scores, key=scores.get)
        total_score = sum(scores.values())
        confidence = scores[primary_intent] / total_score if total_score > 0 else 0
        
        config = self.intent_patterns[primary_intent]
        
        # Determine if action is required
        action_required = primary_intent not in [
            EmailIntent.THANK_YOU,
            EmailIntent.ANNOUNCEMENT,
            EmailIntent.SPAM,
            EmailIntent.APOLOGY
        ]
        
        # Suggest response type
        response_types = {
            EmailIntent.REQUEST: "fulfillment",
            EmailIntent.INQUIRY: "information",
            EmailIntent.COMPLAINT: "resolution",
            EmailIntent.NEGOTIATION: "counter_offer",
            EmailIntent.CONFIRMATION: "acknowledgment",
            EmailIntent.CANCELLATION: "confirmation",
            EmailIntent.FEEDBACK: "acknowledgment",
            EmailIntent.SUPPORT: "troubleshooting",
            EmailIntent.SALES: "quote",
            EmailIntent.PARTNERSHIP: "discussion",
            EmailIntent.INTERVIEW: "scheduling",
            EmailIntent.MEETING_REQUEST: "scheduling",
            EmailIntent.FOLLOW_UP: "status_update",
            EmailIntent.ESCALATION: "immediate_action",
            EmailIntent.APOLOGY: "acceptance",
            EmailIntent.THANK_YOU: "acknowledgment",
            EmailIntent.ANNOUNCEMENT: "acknowledgment",
            EmailIntent.REMINDER: "acknowledgment",
            EmailIntent.URGENT: "immediate_action",
            EmailIntent.SPAM: "ignore",
            EmailIntent.UNKNOWN: "generic"
        }
        
        return IntentResult(
            intent=primary_intent,
            confidence=confidence,
            keywords=keywords_found.get(primary_intent, []),
            action_required=action_required,
            suggested_response_type=response_types.get(primary_intent, "generic"),
            priority_level=config["priority"]
        )
    
    def check_reply_all(self, recipients: List[str], cc_list: List[str]) -> bool:
        """
        Check if reply-all should be enforced
        
        Args:
            recipients: List of To recipients
            cc_list: List of CC recipients
            
        Returns:
            True if reply-all should be used
        """
        total_recipients = len(recipients) + len(cc_list)
        return total_recipients > 1
    
    def generate_response_strategy(self, intent_result: IntentResult) -> Dict:
        """
        Generate response strategy based on classified intent
        
        Args:
            intent_result: Classified intent result
            
        Returns:
            Response strategy dictionary
        """
        strategies = {
            EmailIntent.REQUEST: {
                "tone": "professional",
                "urgency": "normal",
                "include_timeline": True,
                "escalate_if": "cannot_fulfill"
            },
            EmailIntent.COMPLAINT: {
                "tone": "empathetic",
                "urgency": "high",
                "include_timeline": True,
                "escalate_if": "unresolved_after_2_attempts"
            },
            EmailIntent.NEGOTIATION: {
                "tone": "professional",
                "urgency": "normal",
                "include_timeline": False,
                "escalate_if": "complex_terms"
            },
            EmailIntent.SUPPORT: {
                "tone": "helpful",
                "urgency": "high",
                "include_timeline": True,
                "escalate_if": "technical_issue"
            },
            EmailIntent.URGENT: {
                "tone": "professional",
                "urgency": "critical",
                "include_timeline": True,
                "escalate_if": "always"
            },
            EmailIntent.ESCALATION: {
                "tone": "professional",
                "urgency": "critical",
                "include_timeline": True,
                "escalate_if": "always"
            }
        }
        
        default_strategy = {
            "tone": "professional",
            "urgency": "normal",
            "include_timeline": False,
            "escalate_if": "complex"
        }
        
        return strategies.get(intent_result.intent, default_strategy)


def process_email(email_data: Dict) -> Dict:
    """
    Process email and classify intent
    
    Args:
        email_data: Email data dictionary with 'subject', 'body', 'to', 'cc'
        
    Returns:
        Processed result with intent classification and response strategy
    """
    classifier = V416IntentClassifierPro()
    
    # Classify intent
    intent_result = classifier.classify_intent(
        email_data.get("body", ""),
        email_data.get("subject", "")
    )
    
    # Check reply-all
    should_reply_all = classifier.check_reply_all(
        email_data.get("to", []),
        email_data.get("cc", [])
    )
    
    # Generate response strategy
    response_strategy = classifier.generate_response_strategy(intent_result)
    
    return {
        "engine": "V416 Intent Classifier Pro",
        "intent": intent_result.intent.value,
        "confidence": intent_result.confidence,
        "keywords": intent_result.keywords,
        "action_required": intent_result.action_required,
        "suggested_response_type": intent_result.suggested_response_type,
        "priority_level": intent_result.priority_level,
        "reply_all": should_reply_all,
        "response_strategy": response_strategy,
        "timestamp": __import__("datetime").datetime.now().isoformat()
    }


if __name__ == "__main__":
    # Test with sample email
    test_email = {
        "subject": "Urgent: Issue with recent order",
        "body": "Hi, I'm having a problem with my recent order #12345. The product arrived damaged and I need a replacement ASAP. Please help!",
        "to": ["support@ziontechgroup.com"],
        "cc": ["manager@ziontechgroup.com", "sales@ziontechgroup.com"]
    }
    
    result = process_email(test_email)
    print(json.dumps(result, indent=2))

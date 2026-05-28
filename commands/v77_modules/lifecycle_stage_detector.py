#!/usr/bin/env python3
"""
V77 – Customer Lifecycle Stage Detector

Classifies incoming email senders into lifecycle stages:
  prospect      → first contact, evaluating options
  qualified      → showed interest, requesting details/quote
  proposal      → received proposal, negotiating
  customer      → active user, using the service
  at_risk       → silence, dissatisfaction signals, renewal risk
  churned       → cancelled, asked to leave, long silence after active
  reengaging    → past customer returning after silence

Each stage has routing, urgency, and recommended action rules.
Also tracks stage history across the email thread.
"""

import re
from typing import Dict, List, Optional, Tuple
from datetime import datetime, timedelta

# ── Stage Definitions ─────────────────────────────────────────────────────────

LIFECYCLE_STAGES = {
    "prospect": {
        "weight": 1,
        "routing": "sales",
        "urgency": "normal",
        "reply_tone": "enthusiastic_professional",
        "reply_all": False,
        "escalation_threshold": 0.2,  # escalate if probability > 20%
        "auto_create_lead": True,
        "description": "First contact — evaluating options, no prior relationship",
        "keywords": [
            "interested in", "looking into", "exploring options", "considering",
            "evaluating", " researching", "we are new", "first time",
            "what do you offer", "learn more", "not sure where to start",
            "can you help", "we need information", "I'd like to know",
            "tell me about", "how does this work", "first contact",
            "how much", "pricing", "cost", "demo"
        ],
    },
    "qualified": {
        "weight": 2,
        "routing": "sales",
        "urgency": "high",
        "reply_tone": "engaged_professional",
        "reply_all": False,
        "escalation_threshold": 0.35,
        "auto_create_lead": False,
        "description": "Showed interest, requesting details, quotes, or comparisons",
        "keywords": [
            "could you send", "please send", "need a quote", "pricing details",
            "compare to", "vs ", "versus", "alternative", "similar to",
            "can you match", "discount", "negotiate", "special offer",
            "budget", "timeline", "implementation", "onboarding",
            "how long", "when can we", "next steps", "schedule demo",
            "talk to", "call me", "meeting", "proposal request",
            "statement of work", "contract", "agreement"
        ],
    },
    "proposal": {
        "weight": 3,
        "routing": "sales",
        "urgency": "high",
        "reply_tone": "engaged_professional",
        "reply_all": False,
        "escalation_threshold": 0.5,
        "auto_create_lead": False,
        "description": "Received proposal, in negotiation or legal review",
        "keywords": [
            "proposal", "contract", "legal review", "terms", "conditions",
            "sow", "scope of work", "agreement", "negotiation",
            "redline", "amend", "modification", "appendix",
            "signature", "sign", "execute", "counter-offer",
            "board approval", "procurement", "compliance",
            "security questionnaire", "vendor approval", "IT review"
        ],
    },
    "customer": {
        "weight": 4,
        "routing": "support",
        "urgency": "normal",
        "reply_tone": "helpful_expert",
        "reply_all": True,
        "escalation_threshold": 0.4,
        "auto_create_lead": False,
        "description": "Active customer using the service — support, upsell, renewals",
        "keywords": [
            "our account", "subscription", "current plan", "upgrade",
            "additional", "more users", "renewal", "invoice",
            "billing", "account", "dashboard", "access",
            "technical issue", "not working", "error", "bug",
            "feature request", "suggestion", "feedback",
            "love", "great", "thank you", "appreciate",
            "colleague", "team member", "recommend"
        ],
    },
    "at_risk": {
        "weight": 5,
        "routing": "retention",
        "urgency": "urgent",
        "reply_tone": "empathetic_proactive",
        "reply_all": False,
        "escalation_threshold": 0.6,
        "auto_create_lead": False,
        "description": "Silence, dissatisfaction signals, or renewal risk",
        "keywords": [
            "frustrated", "disappointed", "not satisfied", "let us down",
            "poor experience", "bad", "worse", "deteriorating",
            "not good enough", "considering alternatives", "looking elsewhere",
            "competitor", "switching", "cancel", "churn",
            "silence", "no response", "unresponsive", "ghosted",
            "unhappy", "upset", "angry", "terrible", "worst",
            "nothing happened", "no progress", "stuck"
        ],
    },
    "churned": {
        "weight": 6,
        "routing": "winback",
        "urgency": "low",
        "reply_tone": "reconnecting_warm",
        "reply_all": False,
        "escalation_threshold": 0.7,
        "auto_create_lead": False,
        "description": "Cancelled, asked to leave, or long silence after active use",
        "keywords": [
            "cancel", "cancelled", "terminated", "closed account",
            "no longer", "ended", "stop using", "left",
            "churn", "withdrawn", "refund", "exit",
            "come back", "return", "rejoin", "reinstate",
            "miss you", "need you again", "changed circumstances"
        ],
    },
    "reengaging": {
        "weight": 7,
        "routing": "sales",
        "urgency": "normal",
        "reply_tone": "welcoming_enthusiastic",
        "reply_all": False,
        "escalation_threshold": 0.3,
        "auto_create_lead": True,
        "description": "Past customer or prospect returning after silence",
        "keywords": [
            "long time", "have not heard", "been a while", "sorry for delay",
            "back in touch", "returning", "ready to proceed",
            "picking this up again", "resuming", "revisiting",
            "new project", "new initiative", "fresh start",
            "next chapter", "new phase", "expanding"
        ],
    },
}

# ── Core Detection ────────────────────────────────────────────────────────────

def compute_keyword_score(text: str, keywords: List[str]) -> float:
    """Count keyword matches, return normalized score."""
    if not text or not keywords:
        return 0.0
    text_lower = text.lower()
    score = sum(1 for kw in keywords if kw.lower() in text_lower)
    return min(1.0, score / max(3, len(keywords) * 0.15))

def detect_lifecycle_stage(
    email_body: str,
    sender_email: str,
    subject: str,
    prior_stage: Optional[str] = None,
    days_since_last_email: Optional[int] = None,
    reply_direction: str = "received",  # 'received' | 'we_sent'
) -> Dict:
    """
    Detect the lifecycle stage of the email sender.
    
    Args:
        email_body: Full email body text
        sender_email: Sender's email address
        subject: Email subject
        prior_stage: Previously known stage (from CRM/email history)
        days_since_last_email: Days since last email from this sender
        reply_direction: 'received' (incoming) or 'we_sent' (outgoing)
    
    Returns:
        {
            "stage": str,
            "confidence": float,
            "reasoning": str,
            "routing": str,
            "urgency": str,
            "reply_tone": str,
            "reply_all": bool,
            "escalation_needed": bool,
            "auto_create_lead": bool,
            "action_plan": List[str],
        }
    """
    combined = f"{subject} {email_body}"
    
    # Score each stage
    scores = {}
    for stage, cfg in LIFECYCLE_STAGES.items():
        kw_score = compute_keyword_score(combined, cfg["keywords"])
        scores[stage] = kw_score
    
    # Handle prior stage persistence
    if prior_stage and prior_stage in LIFECYCLE_STAGES:
        # If prior stage was at_risk/churned and no new strong signals, keep at_risk/churned
        if prior_stage in ("at_risk", "churned"):
            prior_score = scores.get(prior_stage, 0)
            if prior_score < 0.5 and max(scores.values()) < 0.4:
                scores[prior_stage] = max(prior_score, 0.6)
        
        # Customers rarely revert to prospect without explicit churn signals
        if prior_stage == "customer":
            if "cancel" not in combined.lower() and "churn" not in combined.lower():
                scores["customer"] = max(scores.get("customer", 0), 0.7)
    
    # Silence-based escalation for existing customers
    if days_since_last_email is not None:
        if prior_stage == "customer" and days_since_last_email > 14:
            scores["at_risk"] = max(scores.get("at_risk", 0), 0.4 + (days_since_last_email / 100))
        if prior_stage == "proposal" and days_since_last_email > 10:
            scores["at_risk"] = max(scores.get("at_risk", 0), 0.5)
    
    # Determine best stage
    best_stage = max(scores, key=scores.get)
    best_score = scores[best_stage]
    confidence = min(0.95, 0.4 + best_score * 0.55)
    
    cfg = LIFECYCLE_STAGES[best_stage]
    
    # Escalation check
    escalation_needed = best_score > cfg["escalation_threshold"]
    
    # Action plan based on stage
    action_plan = _build_action_plan(best_stage, subject, email_body, cfg)
    
    # Urgency override for strong signals
    urgency = cfg["urgency"]
    if any(kw in combined.lower() for kw in ["urgent", "asap", "immediately", "critical", "emergency", "deadline today"]):
        urgency = "critical"
        escalation_needed = True
    
    return {
        "stage": best_stage,
        "confidence": round(confidence, 2),
        "stage_description": cfg["description"],
        "routing": cfg["routing"],
        "urgency": urgency,
        "reply_tone": cfg["reply_tone"],
        "reply_all": cfg["reply_all"],
        "escalation_needed": escalation_needed,
        "auto_create_lead": cfg["auto_create_lead"] and best_score > 0.5,
        "reasoning": f"Best match: {best_stage} (score={best_score:.2f}, conf={confidence:.0%})",
        "all_scores": {k: round(v, 3) for k, v in scores.items()},
        "action_plan": action_plan,
    }

def _build_action_plan(stage: str, subject: str, body: str, cfg: Dict) -> List[str]:
    """Generate actionable next steps based on lifecycle stage."""
    plans = {
        "prospect": [
            "Respond within 2 hours with warm, informative reply",
            "Qualify the lead: budget, timeline, decision criteria",
            "Offer a personalized demo or consultation call",
            "Add to CRM as new prospect, set follow-up reminder",
            "Send intro email with relevant case studies",
        ],
        "qualified": [
            "Respond within 1 hour — high urgency for qualified leads",
            "Prepare and send formal pricing proposal",
            "Schedule discovery call within 48 hours",
            "Notify sales manager of active opportunity",
            "Create/update CRM opportunity record",
        ],
        "proposal": [
            "Escalate to sales team immediately",
            "Confirm receipt and assign account manager",
            "Flag for legal review if contract/redline involved",
            "Schedule negotiation call within 24-48 hours",
            "Set reminder to follow up in 3 days if no response",
        ],
        "customer": [
            "Acknowledge and route to customer support queue",
            "Check account status and renewal date",
            "Identify upsell opportunity if relevant",
            "Open support ticket if technical issue detected",
            "Log interaction in CRM account history",
        ],
        "at_risk": [
            "⚠️ ESCALATE IMMEDIATELY to customer success manager",
            "Respond within 30 minutes — critical urgency",
            "Do NOT auto-resolve — requires human review",
            "Prepare retention offer or escalation path",
            "Log all context in CRM for retention team handoff",
        ],
        "churned": [
            "Route to winback team, not standard support",
            "Check cancellation reason in CRM before responding",
            "Prepare re-engagement offer or return credit",
            "Do not oversell — focus on understanding needs",
            "Set follow-up in 7 days if no response",
        ],
        "reengaging": [
            "Welcome back warmly — redetermine needs",
            "Check account history and previous use case",
            "Offer re-engagement walkthrough or refresh demo",
            "Assess if new pricing/plan changes apply",
            "Update CRM lifecycle status to reengaging",
        ],
    }
    return plans.get(stage, ["Standard response — no specific action required"])

def get_reply_tone_prescription(stage: str, base_tone: str) -> Dict:
    """
    Return full tone prescription for a given lifecycle stage.
    Used by the responder to format the reply appropriately.
    """
    prescriptions = {
        "enthusiastic_professional": {
            "greeting": "Hi {name}!",
            "energy": "high",
            "sentence_length": "medium",
            "personalization": "high",
            "cta_frequency": "every email",
        },
        "engaged_professional": {
            "greeting": "Hi {name},",
            "energy": "medium-high",
            "sentence_length": "short-medium",
            "personalization": "medium",
            "cta_frequency": "once per email",
        },
        "helpful_expert": {
            "greeting": "Hi {name},",
            "energy": "medium",
            "sentence_length": "medium",
            "personalization": "medium",
            "cta_frequency": "as needed",
        },
        "empathetic_proactive": {
            "greeting": "Hi {name},",
            "energy": "medium-calm",
            "sentence_length": "medium-long",
            "personalization": "high",
            "cta_frequency": "once, urgent framing",
        },
        "reconnecting_warm": {
            "greeting": "Hi {name},",
            "energy": "warm-medium",
            "sentence_length": "medium",
            "personalization": "high",
            "cta_frequency": "gentle, non-pushy",
        },
        "welcoming_enthusiastic": {
            "greeting": "Welcome back, {name}!",
            "energy": "high",
            "sentence_length": "medium",
            "personalization": "high",
            "cta_frequency": "present but soft",
        },
    }
    return prescriptions.get(base_tone, prescriptions["engaged_professional"])

if __name__ == "__main__":
    # ── Test Suite ───────────────────────────────────────────────────────────
    test_cases = [
        {
            "name": "Fresh prospect inquiry",
            "email_body": "Hello, I am interested in your Cloud Cost Anomaly Detector service. Could you send me pricing details and a demo? We are evaluating a few options for our engineering team.",
            "sender_email": "john@startup.com",
            "subject": "Pricing and demo for Cloud Cost Anomaly Detector",
            "prior_stage": None,
        },
        {
            "name": "Active customer with technical issue",
            "email_body": "Hi, our account team is having trouble accessing the dashboard. We keep getting a 500 error when loading the API Usage Analytics page. This is blocking our integration work. Could you help?",
            "sender_email": "mike@enterprise.com",
            "subject": "Re: API Usage Analytics Dashboard Error",
            "prior_stage": "customer",
            "days_since_last_email": 3,
        },
        {
            "name": "At-risk customer showing frustration",
            "email_body": "I am very frustrated. We have been waiting for the SSL Certificate Monitor integration for 3 weeks and nothing has happened. Our team is considering switching to a competitor because of this.",
            "sender_email": "sarah@midmarket.com",
            "subject": "Urgent: SSL Monitor integration delays — considering alternatives",
            "prior_stage": "customer",
            "days_since_last_email": 21,
        },
        {
            "name": "Returning past customer",
            "email_body": "Hi Kleber, it has been a while! We left last year but we are starting a new project and I think we need the Compliance Evidence Collector again. Can we schedule a call?",
            "sender_email": "linda@corp.com",
            "subject": "Back in touch — Compliance tool for new project",
            "prior_stage": "churned",
        },
    ]

    print("=" * 70)
    print("V77 — Customer Lifecycle Stage Detector — Test Suite")
    print("=" * 70)

    for tc in test_cases:
        result = detect_lifecycle_stage(
            email_body=tc["email_body"],
            sender_email=tc["sender_email"],
            subject=tc["subject"],
            prior_stage=tc.get("prior_stage"),
            days_since_last_email=tc.get("days_since_last_email"),
        )
        
        print(f"\n{'='*50}")
        print(f"📧 [{tc['name']}]")
        print(f"   Stage: {result['stage'].upper()} "
              f"(conf={result['confidence']:.0%}) "
              f"| Routing: {result['routing']} "
              f"| Urgency: {result['urgency']}")
        print(f"   Reply tone: {result['reply_tone']} | Reply all: {result['reply_all']}")
        print(f"   Escalation: {'YES ⚠️' if result['escalation_needed'] else 'No'}")
        print(f"   Reasoning: {result['reasoning']}")
        if result.get('action_plan'):
            print(f"   Action plan:")
            for step in result['action_plan'][:3]:
                print(f"     → {step}")

    print("\n" + "=" * 70)
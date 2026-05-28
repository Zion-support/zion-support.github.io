#!/usr/bin/env python3
"""
V42-P1: Smart Response Router
Analyzes each email case-by-case and routes to the most appropriate response action.
Uses multi-dimensional analysis: intent category + sentiment + urgency + sender tier + language.
"""

import re
from typing import Optional

# Response type registry — maps intent categories to response handlers
_RESPONSE_TYPES = {
    "sales_inquiry": {
        "handler": "sales_response",
        "tone": "enthusiastic_professional",
        "priority": "high",
        "reply_all_recommended": False,
        "response_timing": "fast",
    },
    "support_request": {
        "handler": "support_response",
        "tone": "empathetic_helpful",
        "priority": "high",
        "reply_all_recommended": False,
        "response_timing": "immediate",
    },
    "billing_inquiry": {
        "handler": "billing_response",
        "tone": "clear_professional",
        "priority": "high",
        "reply_all_recommended": True,
        "response_timing": "fast",
    },
    "partnership": {
        "handler": "partnership_response",
        "tone": "formal_corporate",
        "priority": "medium",
        "reply_all_recommended": True,
        "response_timing": "normal",
    },
    "press_media": {
        "handler": "press_response",
        "tone": "formal_press",
        "priority": "medium",
        "reply_all_recommended": False,
        "response_timing": "fast",
    },
    "job_application": {
        "handler": "hr_response",
        "tone": "warm_professional",
        "priority": "medium",
        "reply_all_recommended": False,
        "response_timing": "normal",
    },
    "vendor_inquiry": {
        "handler": "vendor_response",
        "tone": "business_professional",
        "priority": "medium",
        "reply_all_recommended": True,
        "response_timing": "normal",
    },
    "meeting_request": {
        "handler": "meeting_response",
        "tone": "professional",
        "priority": "high",
        "reply_all_recommended": True,
        "response_timing": "fast",
    },
    "follow_up": {
        "handler": "followup_response",
        "tone": "friendly_professional",
        "priority": "medium",
        "reply_all_recommended": True,
        "response_timing": "immediate",
    },
    "complaint": {
        "handler": "complaint_response",
        "tone": "empathetic_apologetic",
        "priority": "high",
        "reply_all_recommended": False,
        "response_timing": "immediate",
    },
    "newsletter": {
        "handler": "skip",
        "tone": None,
        "priority": "low",
        "reply_all_recommended": False,
        "response_timing": "never",
    },
    "auto_reply": {
        "handler": "skip",
        "tone": None,
        "priority": "low",
        "reply_all_recommended": False,
        "response_timing": "never",
    },
    "unknown": {
        "handler": "generic_response",
        "tone": "professional",
        "priority": "medium",
        "reply_all_recommended": False,
        "response_timing": "normal",
    },
}

# Keywords for intent classification
_INTENT_KEYWORDS = {
    "sales_inquiry": [
        r"price", r"pricing", r"quote", r"cost", r"buy", r"purchase",
        r"demo", r" trial ", r"free trial", r"interested", r"information about",
        r"how much", r"license", r"subscription", r"plan", r"package"
    ],
    "support_request": [
        r"help", r"support", r"problem", r"issue", r"error", r"bug",
        r"not working", r"fix", r"broken", r"crash", r"fail", r"urgent",
        r"asap", r"critical", r"server down", r"access denied", r"cannot"
    ],
    "billing_inquiry": [
        r"invoice", r"bill", r"payment", r"charge", r"credit", r"refund",
        r"subscription fee", r"receipt", r"billing", r"overcharged", r"receber",
        r"fatura", r"pagamento", r"cobranca"
    ],
    "partnership": [
        r"partnership", r"partner", r"reseller", r"affiliate", r"collaboration",
        r"joint", r"integrate", r"integration", r"joint venture"
    ],
    "press_media": [
        r"press", r"media", r"journalist", r"interview", r"article",
        r"news", r"publication", r"blog", r"podcast", r"Influencer"
    ],
    "job_application": [
        r"job", r"career", r"position", r"application", r"resume", r"cv",
        r"hire", r"employment", r"opportunity", r"skills", r"experience",
        r"vaga", r"emprego", r"trabalhe", r"curriculo"
    ],
    "vendor_inquiry": [
        r"vendor", r"supplier", r"proposal", r"rfp", r" quotation ",
        r"scope of work", r"sow", r"contract", r"proposta", r"fornecedor"
    ],
    "meeting_request": [
        r"meeting", r"call", r"schedule", r"calendar", r" available ",
        r"zoom", r"teams", r"google meet", r"reuniao", r"reunião",
        r"schedule a call", r"let me know when", r"30 minutes", r"1 hour"
    ],
    "follow_up": [
        r"following up", r"follow up", r"just checking", r"any update",
        r"any news", r"status", r"Delayed", r"waiting", r"pendente"
    ],
    "complaint": [
        r"complaint", r"disappointed", r"unhappy", r"frustrated", r"terrible",
        r"worst", r"hate", r"angry", r"furious", r"completely unacceptable",
        r"reclamacao", r"reclamação", r"insatisfeito", r"frustrado"
    ],
}


def _classify_intent(subject: str, snippet: str, body: str = "") -> tuple[str, float]:
    """Classify email intent from subject/snippet/body. Returns (intent_label, confidence)."""
    text = f"{subject} {snippet} {body}".lower()
    
    intent_scores: dict[str, float] = {}
    
    for intent, keywords in _INTENT_KEYWORDS.items():
        score = 0.0
        matched = 0
        for kw in keywords:
            if re.search(kw, text, re.IGNORECASE):
                matched += 1
                score += 1.0
        if matched > 0:
            # Normalize by number of keywords to prevent bias toward large keyword sets
            intent_scores[intent] = score / len(keywords)
    
    if not intent_scores:
        return "unknown", 0.5
    
    # Pick highest scoring intent
    best_intent = max(intent_scores, key=lambda k: intent_scores[k])
    best_score = intent_scores[best_intent]
    
    # Confidence based on score relative to runner-up
    sorted_scores = sorted(intent_scores.values(), reverse=True)
    if len(sorted_scores) >= 2:
        margin = sorted_scores[0] - sorted_scores[1]
        confidence = min(0.5 + margin, 1.0)
    else:
        confidence = min(0.5 + best_score, 1.0)
    
    return best_intent, round(confidence, 2)


def route_email(email: dict) -> dict:
    """
    Main entry point: analyze email case-by-case and return routing decision.
    
    Args:
        email: dict with 'subject', 'snippet', 'body', optional 'sender',
               optional '_sentiment' from sentiment_analyzer
    
    Returns:
        dict: {
            'intent': str,
            'confidence': float,
            'response_type': str,
            'tone': str,
            'reply_all_recommended': bool,
            'response_timing': str,
            'priority': str,
            'suggested_action': str,
        }
    """
    subject = email.get("subject", "")
    snippet = email.get("snippet", "")
    body = email.get("body", "")
    sentiment_data = email.get("_sentiment", {})
    sender = email.get("sender", "")
    
    # Step 1: Intent classification
    intent, intent_confidence = _classify_intent(subject, snippet, body)
    
    # Step 2: Get response type config
    resp_cfg = _RESPONSE_TYPES.get(intent, _RESPONSE_TYPES["unknown"])
    
    # Step 3: Adjust tone based on sentiment
    tone = resp_cfg["tone"]
    sentiment_label = sentiment_data.get("sentiment_label", "neutral")
    
    if sentiment_label == "negative" and tone:
        # Upgrade tone for negative emails (more empathetic)
        if "empathetic" not in tone and "apologetic" not in tone:
            tone = f"empathetic_{tone}"
    
    # Step 4: Override timing for high-sentiment negative (immediate)
    response_timing = resp_cfg["response_timing"]
    if sentiment_label == "negative" and intent_confidence > 0.8:
        response_timing = "immediate"
    
    # Step 5: Determine action
    handler = resp_cfg["handler"]
    if handler == "skip":
        suggested_action = "skip"
    elif handler == "generic_response":
        suggested_action = "process_with_template"
    else:
        suggested_action = f"use_{handler}"
    
    return {
        "intent": intent,
        "confidence": intent_confidence,
        "response_type": handler,
        "tone": tone,
        "reply_all_recommended": resp_cfg["reply_all_recommended"],
        "response_timing": response_timing,
        "priority": resp_cfg["priority"],
        "suggested_action": suggested_action,
    }

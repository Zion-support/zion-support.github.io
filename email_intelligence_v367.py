#!/usr/bin/env python
"""
Email Intelligence Engine V367 - Email Urgency Detector
=======================================================

Classifies urgency levels (critical/high/medium/low) and detects deadlines
in emails. Analyzes temporal expressions, urgency keywords, escalation signals,
and deadline patterns to determine priority classification.

CRITICAL: Enforces reply-all for multi-recipient emails.

Version: V367
Author: Email Intelligence Series
"""

import json
import re
from datetime import datetime, timezone


# Urgency keyword dictionaries with severity weights
CRITICAL_KEYWORDS = {
    "immediately": 1.0, "asap": 1.0, "emergency": 1.0, "critical": 1.0,
    "urgent": 0.95, "crisis": 1.0, "outage": 0.95, "down": 0.9,
    "broken": 0.85, "security breach": 1.0, "data loss": 1.0,
    "system failure": 1.0, "production down": 1.0, "all hands": 0.95,
    "drop everything": 1.0, "right now": 0.95, "this instant": 1.0,
    "severe": 0.9, "catastrophic": 1.0, "escalate": 0.85, "p0": 1.0,
    "p1": 0.95, "severity 1": 1.0, "severity one": 1.0
}

HIGH_KEYWORDS = {
    "important": 0.7, "priority": 0.7, "deadline": 0.75, "time-sensitive": 0.8,
    "soon": 0.6, "quickly": 0.65, "promptly": 0.7, "eod": 0.75,
    "end of day": 0.75, "today": 0.65, "tomorrow": 0.6, "this week": 0.55,
    "as soon as possible": 0.7, "at your earliest": 0.5, "p2": 0.75,
    "high priority": 0.8, "top priority": 0.85, "needs attention": 0.7,
    "respond quickly": 0.7, "need this by": 0.75, "due": 0.6
}

MEDIUM_KEYWORDS = {
    "when you can": 0.3, "at your convenience": 0.25, "this month": 0.35,
    "next week": 0.4, "by friday": 0.45, "scheduled": 0.3, "planned": 0.3,
    "upcoming": 0.35, "review": 0.3, "consider": 0.25, "please": 0.2,
    "would appreciate": 0.3, "if possible": 0.25, "sometime": 0.2,
    "eventually": 0.15, "no rush": -0.3, "low priority": -0.2, "p3": 0.35
}

LOW_KEYWORDS = {
    "fyi": 0.1, "for your information": 0.1, "no action needed": -0.2,
    "just sharing": 0.05, "optional": 0.1, "whenever": 0.1, "someday": 0.05,
    "no hurry": -0.2, "low priority": -0.3, "background": 0.1, "newsletter": 0.05,
    "update": 0.15, "heads up": 0.2, "for reference": 0.1
}

# Temporal patterns for deadline detection
DEADLINE_PATTERNS = [
    r'(?:due|deadline|by|before|no later than|must be done by|needs? to be (?:done|completed|finished|submitted|ready))\s+(?:by\s+)?(.{5,50}?)(?:\.|,|\n|$)',
    r'(?:due|deadline)\s*:\s*(.{3,40}?)(?:\.|,|\n|$)',
    r'(?:need|need this|need it|complete|finish|submit|deliver)\s+(?:it\s+)?(?:by|before|no later than)\s+(.{3,40}?)(?:\.|,|\n|$)',
    r'(?:EOD|COB|end of day|close of business)\s*(?:today|tomorrow|[\w]+day)?',
    r'(?:by|before)\s+(\d{1,2}(?::\d{2})?\s*(?:am|pm|AM|PM)?)\s*(?:today|tomorrow|[\w]+day)?',
    r'(\d{1,2}/\d{1,2}(?:/\d{2,4})?)',
    r'(?:january|february|march|april|may|june|july|august|september|october|november|december)\s+\d{1,2}(?:st|nd|rd|th)?',
]

ESCALATION_SIGNALS = [
    "escalat", "management", "vp", "director", "ceo", "cto", "exec",
    "board", "stakeholder", "client complaint", "legal", "compliance",
    "regulatory", "sla breach", "service level", "customer impact",
    "revenue impact", "financial loss"
]


def classify_urgency(text, subject=""):
    """
    Classify the urgency level of an email.
    
    Args:
        text (str): The email body text.
        subject (str): The email subject line.
    
    Returns:
        dict: Urgency classification with confidence and contributing factors.
    """
    full_text = f"{subject} {text}".lower()
    
    # Score each urgency level
    scores = {"critical": 0.0, "high": 0.0, "medium": 0.0, "low": 0.0}
    contributing_factors = {"critical": [], "high": [], "medium": [], "low": []}
    
    # Check critical keywords
    for keyword, weight in CRITICAL_KEYWORDS.items():
        if keyword in full_text:
            scores["critical"] += weight
            contributing_factors["critical"].append(keyword)
    
    # Check high keywords
    for keyword, weight in HIGH_KEYWORDS.items():
        if keyword in full_text:
            scores["high"] += weight
            contributing_factors["high"].append(keyword)
    
    # Check medium keywords
    for keyword, weight in MEDIUM_KEYWORDS.items():
        if keyword in full_text:
            scores["medium"] += weight
            contributing_factors["medium"].append(keyword)
    
    # Check low keywords
    for keyword, weight in LOW_KEYWORDS.items():
        if keyword in full_text:
            scores["low"] += weight
            contributing_factors["low"].append(keyword)
    
    # Check for escalation signals (boosts urgency)
    escalation_found = []
    for signal in ESCALATION_SIGNALS:
        if signal in full_text:
            scores["critical"] += 0.3
            scores["high"] += 0.2
            escalation_found.append(signal)
    
    # Check for exclamation marks (amplifier)
    exclaim_count = full_text.count("!")
    if exclaim_count > 3:
        scores["critical"] += 0.2
        scores["high"] += 0.1
    
    # Check for ALL CAPS words (urgency amplifier)
    caps_words = re.findall(r'\b[A-Z]{3,}\b', subject + " " + text)
    caps_urgency = [w for w in caps_words if w not in ("THE", "AND", "FOR", "ARE", "BUT", "NOT", "YOU", "ALL", "CAN", "HER", "WAS", "ONE", "OUR", "OUT")]
    if caps_urgency:
        scores["high"] += len(caps_urgency) * 0.15
    
    # Determine final classification
    max_score = max(scores.values())
    if max_score == 0:
        classification = "low"
        confidence = 0.5
    else:
        classification = max(scores, key=scores.get)
        # Confidence based on how dominant the top score is
        total_scores = sum(max(0, s) for s in scores.values())
        confidence = min(1.0, max_score / max(total_scores, 0.01))
    
    return {
        "urgency_level": classification,
        "confidence": round(confidence, 3),
        "scores": {k: round(max(0, v), 3) for k, v in scores.items()},
        "contributing_factors": {k: v for k, v in contributing_factors.items() if v},
        "escalation_signals": escalation_found,
        "caps_urgency_words": caps_urgency,
        "exclamation_count": exclaim_count
    }


def detect_deadlines(text):
    """
    Detect deadline mentions in the email text.
    
    Args:
        text (str): The email body text.
    
    Returns:
        dict: Detected deadlines and temporal expressions.
    """
    full_text = text
    deadlines = []
    
    for pattern in DEADLINE_PATTERNS:
        matches = re.finditer(pattern, full_text, re.IGNORECASE)
        for match in matches:
            matched_text = match.group(0).strip()
            deadline_text = match.group(1).strip() if match.lastindex else matched_text
            deadlines.append({
                "raw_match": matched_text[:100],
                "deadline_text": deadline_text[:80],
                "pattern_matched": True
            })
    
    # Detect specific time references
    time_refs = re.findall(
        r'(?:today|tomorrow|next\s+\w+day|this\s+\w+day|'
        r'\d{1,2}(?::\d{2})?\s*(?:am|pm|AM|PM)|'
        r'\d{1,2}/\d{1,2}(?:/\d{2,4})?|'
        r'(?:january|february|march|april|may|june|july|august|september|october|november|december)\s+\d{1,2})',
        full_text, re.IGNORECASE
    )
    
    # Check for "asap" type urgency markers
    asap_markers = re.findall(
        r'(?:asap|as soon as possible|immediately|right away|at once|without delay|stat)',
        full_text, re.IGNORECASE
    )
    
    return {
        "deadlines_found": len(deadlines) > 0,
        "deadline_count": len(deadlines),
        "deadlines": deadlines[:10],  # Limit to first 10
        "time_references": list(set(time_refs))[:10],
        "asap_markers": list(set(asap_markers)),
        "has_immediate_deadline": len(asap_markers) > 0
    }


def detect_time_pressure(text):
    """
    Detect time pressure indicators in the email.
    
    Args:
        text (str): The email body text.
    
    Returns:
        dict: Time pressure analysis.
    """
    text_lower = text.lower()
    
    pressure_indicators = {
        "explicit_deadline": bool(re.search(r'(?:due|deadline|by|before)\s+\w+', text_lower)),
        "immediate_action": bool(re.search(r'(?:immediately|asap|right now|urgent)', text_lower)),
        "time_constraint": bool(re.search(r'(?:only \d+ (?:hours?|days?|minutes?)|running out of time|time is (?:running|short))', text_lower)),
        "follow_up_pressure": bool(re.search(r'(?:still waiting|haven.t heard|any update|status update|following up)', text_lower)),
        "consequence_mentioned": bool(re.search(r'(?:otherwise|or else|will be delayed|impact|consequence|penalty)', text_lower))
    }
    
    pressure_score = sum(pressure_indicators.values()) / len(pressure_indicators)
    
    if pressure_score > 0.7:
        pressure_level = "extreme"
    elif pressure_score > 0.5:
        pressure_level = "high"
    elif pressure_score > 0.3:
        pressure_level = "moderate"
    elif pressure_score > 0.1:
        pressure_level = "low"
    else:
        pressure_level = "none"
    
    return {
        "pressure_level": pressure_level,
        "pressure_score": round(pressure_score, 3),
        "indicators": pressure_indicators
    }


def enforce_reply_all(recipients):
    """
    Enforce reply-all behavior for multi-recipient emails.
    
    Args:
        recipients (list): List of email recipients.
    
    Returns:
        dict: Reply-all enforcement status.
    """
    recipient_count = len(recipients) if recipients else 0
    reply_all_required = recipient_count > 1
    reply_all_enforced = reply_all_required
    
    return {
        "recipient_count": recipient_count,
        "reply_all_required": reply_all_required,
        "reply_all_enforced": reply_all_enforced,
        "enforcement_message": (
            "Reply-all is enforced: this email has multiple recipients."
            if reply_all_required
            else "Single recipient - reply-all not required."
        )
    }


def analyze_email(email_data):
    """
    Perform complete urgency analysis on an email.
    
    Args:
        email_data (dict): Email data containing 'subject', 'body', 'recipients', 'sender'.
    
    Returns:
        dict: Complete analysis result as JSON-serializable dictionary.
    """
    subject = email_data.get("subject", "")
    body = email_data.get("body", "")
    recipients = email_data.get("recipients", [])
    sender = email_data.get("sender", "")
    
    # Perform analyses
    urgency = classify_urgency(body, subject)
    deadlines = detect_deadlines(f"{subject}\n{body}")
    time_pressure = detect_time_pressure(body)
    reply_all = enforce_reply_all(recipients)
    
    # Build result
    result = {
        "version": "V367",
        "engine": "Email Urgency Detector",
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "reply_all_required": reply_all["reply_all_required"],
        "reply_all_enforced": reply_all["reply_all_enforced"],
        "metadata": {
            "sender": sender,
            "recipients": recipients,
            "recipient_count": reply_all["recipient_count"],
            "subject": subject
        },
        "urgency_classification": urgency,
        "deadline_detection": deadlines,
        "time_pressure_analysis": time_pressure,
        "reply_all_enforcement": reply_all,
        "recommended_action": _get_recommended_action(urgency["urgency_level"], deadlines["has_immediate_deadline"])
    }
    
    return result


def _get_recommended_action(urgency_level, has_immediate_deadline):
    """Generate recommended action based on urgency analysis."""
    if urgency_level == "critical" or has_immediate_deadline:
        return "IMMEDIATE ACTION REQUIRED - Respond and act within 1 hour"
    elif urgency_level == "high":
        return "HIGH PRIORITY - Respond within 4 hours"
    elif urgency_level == "medium":
        return "MEDIUM PRIORITY - Respond within 24 hours"
    else:
        return "LOW PRIORITY - Respond when convenient"


def main():
    """
    Main entry point demonstrating the Email Urgency Detector engine.
    Runs sample analyses on example emails.
    """
    print("=" * 70)
    print("  Email Intelligence Engine V367 - Email Urgency Detector")
    print("=" * 70)
    print()
    
    # Sample email 1: Critical urgency
    sample_email_1 = {
        "sender": "ops-team@company.com",
        "recipients": ["oncall@company.com", "manager@company.com", "vp-eng@company.com"],
        "subject": "CRITICAL: Production database down - P0 incident",
        "body": (
            "URGENT - Production database is DOWN!\n\n"
            "The primary database has been unresponsive for the last 15 minutes. "
            "All customer-facing services are impacted. This is a P0 severity incident.\n\n"
            "We need everyone to respond IMMEDIATELY. Drop everything and join the "
            "war room. Escalation to VP has been initiated.\n\n"
            "SLA breach is imminent - we have 30 minutes before penalties kick in.\n\n"
            "Need resolution ASAP!\n\n"
            "Operations Team"
        )
    }
    
    # Sample email 2: Medium urgency
    sample_email_2 = {
        "sender": "project-lead@company.com",
        "recipients": ["dev-team@company.com"],
        "subject": "Sprint planning review needed",
        "body": (
            "Hi team,\n\n"
            "Please review the sprint planning document before our meeting next Tuesday. "
            "I'd appreciate your feedback on the proposed priorities.\n\n"
            "The deadline for submitting your input is by Friday EOD.\n\n"
            "Thanks,\nProject Lead"
        )
    }
    
    # Sample email 3: Low urgency with multiple recipients
    sample_email_3 = {
        "sender": "newsletter@company.com",
        "recipients": ["all-staff@company.com", "partners@company.com"],
        "subject": "Monthly company update - FYI",
        "body": (
            "Hello everyone,\n\n"
            "Here's your monthly company update for your information. No action needed.\n\n"
            "We had a great month with several achievements. Check out the highlights "
            "in the attached newsletter whenever you have time.\n\n"
            "Best regards,\nCommunications Team"
        )
    }
    
    samples = [
        ("Critical Urgency - Multi-Recipient", sample_email_1),
        ("Medium Urgency - Single Recipient", sample_email_2),
        ("Low Urgency - Multi-Recipient FYI", sample_email_3)
    ]
    
    for name, email in samples:
        print(f"--- Analyzing: {name} ---")
        result = analyze_email(email)
        print(json.dumps(result, indent=2))
        print()
    
    print("=" * 70)
    print("  V367 Analysis Complete")
    print("=" * 70)


if __name__ == "__main__":
    main()

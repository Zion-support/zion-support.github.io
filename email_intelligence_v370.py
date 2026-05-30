#!/usr/bin/env python
"""
Email Intelligence Engine V370 - Email Intent Classifier
========================================================

Classifies email purpose/intent into categories such as request, inquiry,
complaint, follow-up, notification, announcement, feedback, and more.
Uses multi-signal analysis including subject line patterns, body keywords,
structural cues, and linguistic markers.

CRITICAL: Enforces reply-all for multi-recipient emails.

Version: V370
Author: Email Intelligence Series
"""

import json
import re
from datetime import datetime, timezone


# Intent classification rules with keyword signals
INTENT_DEFINITIONS = {
    "request": {
        "description": "Asking someone to do something or provide something",
        "subject_signals": ["request", "please", "need", "can you", "could you", "ask"],
        "body_signals": [
            "please", "could you", "can you", "would you", "i need",
            "we need", "request", "asking", "require", "would appreciate",
            "kindly", "if you could", "it would be great if"
        ],
        "structural_signals": ["?", "please"]
    },
    "inquiry": {
        "description": "Seeking information or asking questions",
        "subject_signals": ["question", "inquiry", "wondering", "help", "clarification", "?"],
        "body_signals": [
            "question", "wondering", "could you tell", "do you know",
            "can you explain", "what is", "how do", "when will",
            "i'd like to know", "clarification", "understand", "curious"
        ],
        "structural_signals": ["?"]
    },
    "complaint": {
        "description": "Expressing dissatisfaction or reporting problems",
        "subject_signals": ["complaint", "issue", "problem", "unacceptable", "dissatisfied", "concern"],
        "body_signals": [
            "complaint", "unacceptable", "dissatisfied", "disappointed",
            "frustrated", "terrible", "horrible", "worst", "never again",
            "demand", "escalate", "formal complaint", "unhappy", "outraged",
            "appalling", "pathetic", "ridiculous"
        ],
        "structural_signals": ["!", "!!"]
    },
    "follow_up": {
        "description": "Following up on previous communication or pending items",
        "subject_signals": ["follow up", "follow-up", "re:", "checking in", "status", "update on"],
        "body_signals": [
            "follow up", "following up", "checking in", "any update",
            "status update", "haven't heard", "still waiting", "circling back",
            "per our conversation", "as discussed", "regarding our previous",
            "just wanted to check", "pinging", "gentle reminder", "reminder"
        ],
        "structural_signals": []
    },
    "notification": {
        "description": "Informing about an event, change, or status",
        "subject_signals": ["notice", "notification", "announcement", "update", "info", "alert"],
        "body_signals": [
            "please be advised", "this is to inform", "notification",
            "please note", "be aware", "for your information", "fyi",
            "we would like to inform", "heads up", "be informed",
            "take note", "important notice"
        ],
        "structural_signals": []
    },
    "announcement": {
        "description": "Sharing news, changes, or organizational updates",
        "subject_signals": ["announcing", "excited to share", "big news", "launch", "introducing"],
        "body_signals": [
            "excited to announce", "pleased to share", "proud to introduce",
            "we are launching", "new feature", "big news", "thrilled to",
            "happy to share", "introducing", "we're excited", "great news",
            "we are pleased"
        ],
        "structural_signals": []
    },
    "feedback": {
        "description": "Providing feedback, review, or evaluation",
        "subject_signals": ["feedback", "review", "thoughts", "opinion", "suggestions"],
        "body_signals": [
            "feedback", "my thoughts", "suggestions", "recommendation",
            "in my opinion", "i think", "i feel", "from my perspective",
            "here's what i think", "my review", "assessment", "evaluation",
            "constructive", "areas for improvement"
        ],
        "structural_signals": []
    },
    "apology": {
        "description": "Apologizing or expressing regret",
        "subject_signals": ["sorry", "apologize", "apology", "regret", "sincere apologies"],
        "body_signals": [
            "i apologize", "i'm sorry", "we apologize", "sincere apologies",
            "please accept", "we regret", "deeply sorry", "our mistake",
            "oversight on our part", "we take responsibility", "make it right",
            "we understand the inconvenience"
        ],
        "structural_signals": []
    },
    "confirmation": {
        "description": "Confirming details, acceptance, or agreement",
        "subject_signals": ["confirmed", "confirmation", "approved", "accepted", "agreed"],
        "body_signals": [
            "confirmed", "i confirm", "we confirm", "approved", "accepted",
            "agreed", "go ahead", "proceed", "green light", "signed off",
            "you have my approval", "looks good", "that works", "count me in"
        ],
        "structural_signals": []
    },
    "scheduling": {
        "description": "Scheduling meetings, calls, or events",
        "subject_signals": ["meeting", "schedule", "calendar", "invite", "availability"],
        "body_signals": [
            "schedule", "meeting", "calendar", "available", "availability",
            "let's meet", "can we meet", "book a time", "time slot",
            "does ... work for you", "free to", "calendar invite",
            "set up a call", "zoom", "teams meeting"
        ],
        "structural_signals": []
    }
}


def classify_intent(subject, body):
    """
    Classify the primary intent of an email.
    
    Args:
        subject (str): Email subject line.
        body (str): Email body text.
    
    Returns:
        dict: Intent classification with confidence scores for all categories.
    """
    subject_lower = subject.lower()
    body_lower = body.lower()
    full_text = f"{subject_lower} {body_lower}"
    
    intent_scores = {}
    intent_details = {}
    
    for intent, definition in INTENT_DEFINITIONS.items():
        score = 0.0
        signals_found = []
        
        # Check subject signals (weighted higher)
        for signal in definition["subject_signals"]:
            if signal.lower() in subject_lower:
                score += 0.4
                signals_found.append(f"subject:{signal}")
        
        # Check body signals
        for signal in definition["body_signals"]:
            if signal.lower() in body_lower:
                score += 0.2
                signals_found.append(f"body:{signal}")
        
        # Check structural signals
        for signal in definition["structural_signals"]:
            if signal in body:
                score += 0.1
                signals_found.append(f"structure:{signal}")
        
        # Normalize score
        max_possible = (len(definition["subject_signals"]) * 0.4 +
                       len(definition["body_signals"]) * 0.2 +
                       len(definition["structural_signals"]) * 0.1)
        normalized_score = min(1.0, score / max(max_possible * 0.3, 0.01))
        
        intent_scores[intent] = round(normalized_score, 4)
        intent_details[intent] = {
            "score": round(normalized_score, 4),
            "raw_score": round(score, 4),
            "signals_matched": signals_found,
            "signal_count": len(signals_found),
            "description": definition["description"]
        }
    
    # Determine primary intent
    primary_intent = max(intent_scores, key=intent_scores.get)
    primary_confidence = intent_scores[primary_intent]
    
    # If no strong signal, mark as "general"
    if primary_confidence < 0.15:
        primary_intent = "general"
        primary_confidence = 0.5
    
    # Find secondary intent
    sorted_intents = sorted(intent_scores.items(), key=lambda x: x[1], reverse=True)
    secondary_intent = sorted_intents[1][0] if len(sorted_intents) > 1 else None
    secondary_confidence = sorted_intents[1][1] if len(sorted_intents) > 1 else 0.0
    
    return {
        "primary_intent": primary_intent,
        "primary_confidence": round(primary_confidence, 4),
        "primary_description": INTENT_DEFINITIONS.get(primary_intent, {}).get("description", "General communication"),
        "secondary_intent": secondary_intent if secondary_confidence > 0.1 else None,
        "secondary_confidence": round(secondary_confidence, 4) if secondary_intent else 0.0,
        "all_intent_scores": intent_scores,
        "intent_details": intent_details
    }


def detect_response_expected(subject, body, intent_classification):
    """
    Determine if a response is expected based on email content and intent.
    
    Args:
        subject (str): Email subject line.
        body (str): Email body text.
        intent_classification (dict): Intent classification results.
    
    Returns:
        dict: Response expectation analysis.
    """
    body_lower = body.lower()
    primary_intent = intent_classification["primary_intent"]
    
    # Intents that typically require a response
    response_likely_intents = {"request", "inquiry", "complaint", "follow_up", "scheduling", "feedback"}
    
    # Direct response indicators
    response_indicators = [
        "please respond", "please reply", "let me know", "your thoughts",
        "what do you think", "can you confirm", "please confirm",
        "awaiting your response", "looking forward to hearing", "get back to me",
        "do you agree", "your input", "feedback please", "any objections"
    ]
    
    # No response indicators
    no_response_indicators = [
        "no reply needed", "fyi only", "for your information", "no action required",
        "no response needed", "just fyi", "informational only"
    ]
    
    indicator_matches = [ind for ind in response_indicators if ind in body_lower]
    no_response_matches = [ind for ind in no_response_indicators if ind in body_lower]
    
    # Determine response expectation
    if no_response_matches:
        response_expected = False
        confidence = 0.85
    elif indicator_matches:
        response_expected = True
        confidence = 0.9
    elif primary_intent in response_likely_intents:
        response_expected = True
        confidence = 0.65
    else:
        response_expected = False
        confidence = 0.5
    
    # Check for question marks
    question_count = body.count("?")
    if question_count > 0:
        response_expected = True
        confidence = min(1.0, confidence + 0.1)
    
    return {
        "response_expected": response_expected,
        "confidence": round(confidence, 3),
        "response_indicators_found": indicator_matches,
        "no_response_indicators_found": no_response_matches,
        "question_count": question_count,
        "reasoning": _get_response_reasoning(response_expected, primary_intent, indicator_matches, no_response_matches)
    }


def _get_response_reasoning(response_expected, primary_intent, response_indicators, no_response_indicators):
    """Generate human-readable reasoning for response expectation."""
    if no_response_indicators:
        return f"No response expected - explicit no-response indicators found: {no_response_indicators}"
    elif response_indicators:
        return f"Response expected - direct response indicators found: {response_indicators[:3]}"
    elif response_expected:
        return f"Response likely expected - primary intent '{primary_intent}' typically requires a response"
    else:
        return f"No response expected - intent '{primary_intent}' is typically informational"


def detect_formality_level(subject, body):
    """
    Detect the formality level of the email communication.
    
    Args:
        subject (str): Email subject line.
        body (str): Email body text.
    
    Returns:
        dict: Formality analysis.
    """
    full_text = f"{subject} {body}"
    
    formal_indicators = [
        "dear", "sincerely", "regards", "yours truly", "respectfully",
        "please find", "enclosed", "hereby", "pursuant to", "in accordance",
        "we would like to", "kindly be advised", "formal"
    ]
    
    informal_indicators = [
        "hey", "hi there", "what's up", "cheers", "lol", "btw", "fyi",
        "gonna", "wanna", "tho", "cool", "awesome", "no worries",
        "np", "thx", "k", "yep", "nope", "stuff"
    ]
    
    formal_matches = [ind for ind in formal_indicators if ind in full_text.lower()]
    informal_matches = [ind for ind in informal_indicators if ind in full_text.lower()]
    
    formal_score = len(formal_matches)
    informal_score = len(informal_matches)
    
    if formal_score > informal_score + 1:
        level = "formal"
        confidence = min(1.0, 0.5 + formal_score * 0.1)
    elif informal_score > formal_score + 1:
        level = "informal"
        confidence = min(1.0, 0.5 + informal_score * 0.1)
    else:
        level = "semi-formal"
        confidence = 0.6
    
    return {
        "formality_level": level,
        "confidence": round(confidence, 3),
        "formal_indicators": formal_matches,
        "informal_indicators": informal_matches
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
    Perform complete intent classification analysis on an email.
    
    Args:
        email_data (dict): Email data with 'subject', 'body', 'sender', 'recipients'.
    
    Returns:
        dict: Complete analysis result as JSON-serializable dictionary.
    """
    subject = email_data.get("subject", "")
    body = email_data.get("body", "")
    recipients = email_data.get("recipients", [])
    sender = email_data.get("sender", "")
    
    # Perform analyses
    intent = classify_intent(subject, body)
    response = detect_response_expected(subject, body, intent)
    formality = detect_formality_level(subject, body)
    reply_all = enforce_reply_all(recipients)
    
    # Build result
    result = {
        "version": "V370",
        "engine": "Email Intent Classifier",
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "reply_all_required": reply_all["reply_all_required"],
        "reply_all_enforced": reply_all["reply_all_enforced"],
        "metadata": {
            "sender": sender,
            "recipients": recipients,
            "recipient_count": reply_all["recipient_count"],
            "subject": subject
        },
        "intent_classification": intent,
        "response_analysis": response,
        "formality_analysis": formality,
        "reply_all_enforcement": reply_all,
        "recommended_response_type": _get_response_recommendation(
            intent["primary_intent"], response["response_expected"], formality["formality_level"]
        )
    }
    
    return result


def _get_response_recommendation(intent, response_expected, formality):
    """Generate a recommended response type based on analysis."""
    if not response_expected:
        return "No response required - informational email"
    
    recommendations = {
        "request": f"Provide the requested item/information ({formality} tone)",
        "inquiry": f"Answer the question(s) posed ({formality} tone)",
        "complaint": f"Acknowledge the issue and propose resolution ({formality} tone)",
        "follow_up": f"Provide status update or requested information ({formality} tone)",
        "scheduling": f"Confirm availability or propose alternative times ({formality} tone)",
        "feedback": f"Acknowledge feedback and outline next steps ({formality} tone)",
        "apology": f"Accept apology and confirm resolution path ({formality} tone)",
        "confirmation": f"Acknowledge confirmation and proceed ({formality} tone)",
        "notification": "No response typically required unless clarification needed",
        "announcement": "Congratulate or acknowledge if appropriate",
        "general": f"Respond as appropriate to the content ({formality} tone)"
    }
    
    return recommendations.get(intent, f"Respond appropriately ({formality} tone)")


def main():
    """
    Main entry point demonstrating the Email Intent Classifier engine.
    Runs sample analyses on example emails with various intents.
    """
    print("=" * 70)
    print("  Email Intelligence Engine V370 - Email Intent Classifier")
    print("=" * 70)
    print()
    
    # Sample email 1: Request intent
    sample_email_1 = {
        "sender": "client@partner.com",
        "recipients": ["account-mgr@company.com", "support@company.com", "tech-lead@company.com"],
        "subject": "Request for API documentation update",
        "body": (
            "Dear Team,\n\n"
            "I would like to request an update to the API documentation for the "
            "v3 endpoints. Could you please provide the updated specifications?\n\n"
            "We need the following information:\n"
            "- Authentication flow changes\n"
            "- New endpoint parameters\n"
            "- Rate limiting details\n\n"
            "Please let me know when this can be completed. Your prompt response "
            "would be greatly appreciated.\n\n"
            "Kind regards,\nClient Partner"
        )
    }
    
    # Sample email 2: Complaint intent
    sample_email_2 = {
        "sender": "frustrated-user@customer.com",
        "recipients": ["support@company.com"],
        "subject": "Complaint: Service outage unacceptable!",
        "body": (
            "This is absolutely unacceptable! Your service has been down THREE times "
            "this week and nobody seems to care!!\n\n"
            "I'm extremely frustrated and disappointed with the lack of communication. "
            "We've lost significant revenue due to these outages. This is the worst "
            "service experience I've ever had.\n\n"
            "I demand an explanation and immediate resolution. If this continues, "
            "I will escalate this to management and consider switching providers.\n\n"
            "This is a formal complaint. I expect a response within 24 hours.\n\n"
            "Very unhappy customer"
        )
    }
    
    # Sample email 3: Follow-up intent
    sample_email_3 = {
        "sender": "sales@company.com",
        "recipients": ["prospect@client.com", "manager@company.com"],
        "subject": "Follow-up: Proposal discussion from last week",
        "body": (
            "Hi there,\n\n"
            "Just following up on our conversation from last Tuesday regarding the "
            "enterprise proposal. I wanted to check if you've had a chance to review "
            "the materials I sent over.\n\n"
            "Any update on your end? I'm happy to jump on a call to answer any "
            "questions you might have.\n\n"
            "As discussed, the pricing is valid until end of month, so please let "
            "me know your thoughts when you get a chance.\n\n"
            "Cheers,\nSales Rep"
        )
    }
    
    # Sample email 4: Announcement intent
    sample_email_4 = {
        "sender": "ceo@company.com",
        "recipients": ["all-staff@company.com", "board@company.com", "investors@company.com"],
        "subject": "Exciting news: Series B funding secured!",
        "body": (
            "Dear Team,\n\n"
            "I'm thrilled to announce that we have successfully closed our Series B "
            "funding round, raising $50M led by TechVentures Capital!\n\n"
            "This is great news for everyone. The funding will enable us to:\n"
            "- Expand our engineering team\n"
            "- Launch in 3 new markets\n"
            "- Accelerate product development\n\n"
            "We are excited about the future and grateful for everyone's hard work "
            "that made this possible.\n\n"
            "More details to follow in our all-hands meeting next week.\n\n"
            "Best regards,\nCEO"
        )
    }
    
    # Sample email 5: Scheduling intent
    sample_email_5 = {
        "sender": "assistant@company.com",
        "recipients": ["exec1@company.com", "exec2@company.com", "exec3@company.com"],
        "subject": "Meeting: Q3 Strategy Review - Please confirm availability",
        "body": (
            "Hello,\n\n"
            "I'd like to schedule the Q3 Strategy Review meeting. Could you please "
            "confirm your availability for the following time slots?\n\n"
            "- Tuesday 2:00 PM - 4:00 PM\n"
            "- Wednesday 10:00 AM - 12:00 PM\n"
            "- Thursday 3:00 PM - 5:00 PM\n\n"
            "Please let me know which time works best. I'll send a calendar invite "
            "once we have consensus.\n\n"
            "The meeting will be held via Zoom. Agenda to follow.\n\n"
            "Thank you,\nExecutive Assistant"
        )
    }
    
    samples = [
        ("Request Intent - Multi-Recipient", sample_email_1),
        ("Complaint Intent - Single Recipient", sample_email_2),
        ("Follow-up Intent - Multi-Recipient", sample_email_3),
        ("Announcement Intent - Multi-Recipient", sample_email_4),
        ("Scheduling Intent - Multi-Recipient", sample_email_5)
    ]
    
    for name, email in samples:
        print(f"--- Analyzing: {name} ---")
        result = analyze_email(email)
        print(json.dumps(result, indent=2))
        print()
    
    print("=" * 70)
    print("  V370 Analysis Complete")
    print("=" * 70)


if __name__ == "__main__":
    main()

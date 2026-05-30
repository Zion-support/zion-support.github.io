#!/usr/bin/env python
"""
Email Intelligence Engine V366 - Email Sentiment Analyzer
=========================================================

Detects emotional tone, sentiment intensity, and mood shifts in emails.
Analyzes text for positive/negative/neutral sentiment, emotional keywords,
intensity scoring, and mood transitions throughout the email body.

CRITICAL: Enforces reply-all for multi-recipient emails.

Version: V366
Author: Email Intelligence Series
"""

import json
import re
from datetime import datetime, timezone


# Sentiment keyword dictionaries with intensity weights
POSITIVE_KEYWORDS = {
    "excellent": 0.9, "wonderful": 0.9, "fantastic": 0.95, "amazing": 0.95,
    "great": 0.8, "good": 0.6, "happy": 0.7, "pleased": 0.7, "delighted": 0.85,
    "thank": 0.5, "thanks": 0.5, "appreciate": 0.7, "grateful": 0.8,
    "love": 0.85, "enjoy": 0.7, "excited": 0.8, "thrilled": 0.9,
    "outstanding": 0.9, "superb": 0.9, "brilliant": 0.85, "impressive": 0.8,
    "awesome": 0.85, "perfect": 0.9, "beautiful": 0.7, "helpful": 0.6,
    "kind": 0.6, "generous": 0.7, "remarkable": 0.8, "exceptional": 0.9,
    "glad": 0.6, "satisfied": 0.7, "positive": 0.6, "success": 0.7,
    "achieve": 0.7, "progress": 0.6, "improve": 0.5, "celebrate": 0.8
}

NEGATIVE_KEYWORDS = {
    "terrible": -0.9, "horrible": -0.9, "awful": -0.9, "disgusting": -0.95,
    "bad": -0.6, "poor": -0.6, "disappointed": -0.7, "frustrated": -0.75,
    "angry": -0.85, "furious": -0.95, "upset": -0.7, "annoyed": -0.65,
    "hate": -0.9, "dislike": -0.6, "unacceptable": -0.8, "pathetic": -0.85,
    "failure": -0.7, "problem": -0.5, "issue": -0.4, "concern": -0.5,
    "worried": -0.6, "anxious": -0.65, "stressed": -0.7, "overwhelmed": -0.75,
    "sad": -0.7, "depressed": -0.8, "miserable": -0.85, "dreadful": -0.85,
    "disastrous": -0.95, "catastrophic": -0.95, "tragic": -0.9, "regret": -0.7,
    "apologize": -0.4, "sorry": -0.4, "unfortunately": -0.5, "unfortunately": -0.5,
    "complain": -0.6, "complaint": -0.6, "dissatisfied": -0.7, "incompetent": -0.8
}

EMOTION_CATEGORIES = {
    "joy": ["happy", "joy", "delighted", "pleased", "glad", "thrilled", "excited", "celebrate"],
    "anger": ["angry", "furious", "rage", "infuriated", "outraged", "irritated", "annoyed"],
    "sadness": ["sad", "disappointed", "heartbroken", "grief", "sorrow", "unfortunate", "regret"],
    "fear": ["worried", "anxious", "concerned", "afraid", "scared", "nervous", "alarmed"],
    "surprise": ["surprised", "shocked", "astonished", "amazed", "unexpected", "remarkable"],
    "disgust": ["disgusted", "revolted", "appalled", "horrified", "repulsed", "sickened"],
    "trust": ["trust", "confident", "reliable", "dependable", "faithful", "assured"],
    "anticipation": ["looking forward", "eager", "excited", "hopeful", "expect", "await"]
}


def detect_sentiment(text):
    """
    Detect overall sentiment of the email text.
    
    Args:
        text (str): The email body text to analyze.
    
    Returns:
        dict: Sentiment analysis results including score, label, and intensity.
    """
    words = re.findall(r'\b\w+\b', text.lower())
    
    positive_score = 0.0
    negative_score = 0.0
    positive_matches = []
    negative_matches = []
    
    for word in words:
        if word in POSITIVE_KEYWORDS:
            positive_score += POSITIVE_KEYWORDS[word]
            positive_matches.append(word)
        if word in NEGATIVE_KEYWORDS:
            negative_score += abs(NEGATIVE_KEYWORDS[word])
            negative_matches.append(word)
    
    # Calculate net sentiment score (-1 to 1)
    total = positive_score + negative_score
    if total == 0:
        net_score = 0.0
        intensity = 0.0
    else:
        net_score = (positive_score - negative_score) / max(len(words), 1) * 10
        net_score = max(-1.0, min(1.0, net_score))
        intensity = total / max(len(words), 1) * 10
        intensity = min(1.0, intensity)
    
    # Determine sentiment label
    if net_score > 0.2:
        label = "positive"
    elif net_score < -0.2:
        label = "negative"
    else:
        label = "neutral"
    
    # Determine intensity level
    if intensity > 0.7:
        intensity_level = "very_high"
    elif intensity > 0.5:
        intensity_level = "high"
    elif intensity > 0.3:
        intensity_level = "medium"
    elif intensity > 0.1:
        intensity_level = "low"
    else:
        intensity_level = "minimal"
    
    return {
        "sentiment_score": round(net_score, 4),
        "sentiment_label": label,
        "intensity_score": round(intensity, 4),
        "intensity_level": intensity_level,
        "positive_keywords_found": list(set(positive_matches)),
        "negative_keywords_found": list(set(negative_matches)),
        "positive_count": len(positive_matches),
        "negative_count": len(negative_matches)
    }


def detect_emotions(text):
    """
    Detect emotional categories present in the email.
    
    Args:
        text (str): The email body text to analyze.
    
    Returns:
        dict: Detected emotions with confidence scores.
    """
    text_lower = text.lower()
    detected_emotions = {}
    
    for emotion, keywords in EMOTION_CATEGORIES.items():
        matches = [kw for kw in keywords if kw in text_lower]
        if matches:
            confidence = min(1.0, len(matches) * 0.3)
            detected_emotions[emotion] = {
                "detected": True,
                "confidence": round(confidence, 2),
                "matched_keywords": matches
            }
        else:
            detected_emotions[emotion] = {
                "detected": False,
                "confidence": 0.0,
                "matched_keywords": []
            }
    
    # Find dominant emotion
    active_emotions = {k: v["confidence"] for k, v in detected_emotions.items() if v["detected"]}
    dominant_emotion = max(active_emotions, key=active_emotions.get) if active_emotions else "neutral"
    
    return {
        "emotions": detected_emotions,
        "dominant_emotion": dominant_emotion,
        "emotion_count": len(active_emotions)
    }


def detect_mood_shifts(text):
    """
    Detect mood shifts within the email by analyzing paragraph-by-paragraph sentiment.
    
    Args:
        text (str): The email body text to analyze.
    
    Returns:
        dict: Mood shift analysis with paragraph-level sentiment.
    """
    # Split into paragraphs
    paragraphs = [p.strip() for p in re.split(r'\n\s*\n', text) if p.strip()]
    
    if len(paragraphs) < 2:
        return {
            "has_mood_shift": False,
            "paragraph_sentiments": [],
            "shift_detected": False,
            "shift_description": "Insufficient paragraphs to detect mood shifts"
        }
    
    paragraph_sentiments = []
    for i, para in enumerate(paragraphs):
        sentiment = detect_sentiment(para)
        paragraph_sentiments.append({
            "paragraph_index": i + 1,
            "sentiment_label": sentiment["sentiment_label"],
            "sentiment_score": sentiment["sentiment_score"],
            "preview": para[:80] + "..." if len(para) > 80 else para
        })
    
    # Detect shifts (changes in sentiment label between consecutive paragraphs)
    shifts = []
    for i in range(1, len(paragraph_sentiments)):
        prev_label = paragraph_sentiments[i-1]["sentiment_label"]
        curr_label = paragraph_sentiments[i]["sentiment_label"]
        if prev_label != curr_label:
            shifts.append({
                "from_paragraph": i,
                "to_paragraph": i + 1,
                "from_sentiment": prev_label,
                "to_sentiment": curr_label
            })
    
    has_shift = len(shifts) > 0
    
    return {
        "has_mood_shift": has_shift,
        "shift_count": len(shifts),
        "paragraph_sentiments": paragraph_sentiments,
        "shifts": shifts,
        "shift_description": f"Detected {len(shifts)} mood shift(s)" if has_shift else "No mood shifts detected"
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
    reply_all_enforced = reply_all_required  # Always enforced when required
    
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
    Perform complete sentiment analysis on an email.
    
    Args:
        email_data (dict): Email data containing 'subject', 'body', 'recipients', 'sender'.
    
    Returns:
        dict: Complete analysis result as JSON-serializable dictionary.
    """
    subject = email_data.get("subject", "")
    body = email_data.get("body", "")
    recipients = email_data.get("recipients", [])
    sender = email_data.get("sender", "")
    
    # Full text analysis (subject + body)
    full_text = f"{subject}\n{body}"
    
    # Perform analyses
    sentiment = detect_sentiment(full_text)
    emotions = detect_emotions(full_text)
    mood_shifts = detect_mood_shifts(body)
    reply_all = enforce_reply_all(recipients)
    
    # Build result
    result = {
        "version": "V366",
        "engine": "Email Sentiment Analyzer",
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "reply_all_required": reply_all["reply_all_required"],
        "reply_all_enforced": reply_all["reply_all_enforced"],
        "metadata": {
            "sender": sender,
            "recipients": recipients,
            "recipient_count": reply_all["recipient_count"],
            "subject": subject
        },
        "sentiment_analysis": sentiment,
        "emotion_analysis": emotions,
        "mood_shift_analysis": mood_shifts,
        "reply_all_enforcement": reply_all
    }
    
    return result


def main():
    """
    Main entry point demonstrating the Email Sentiment Analyzer engine.
    Runs sample analyses on example emails.
    """
    print("=" * 70)
    print("  Email Intelligence Engine V366 - Email Sentiment Analyzer")
    print("=" * 70)
    print()
    
    # Sample email 1: Positive email with multiple recipients
    sample_email_1 = {
        "sender": "alice@company.com",
        "recipients": ["bob@company.com", "carol@company.com", "dave@company.com"],
        "subject": "Great news about the Q4 results!",
        "body": (
            "Hi team,\n\n"
            "I'm thrilled to share that our Q4 results are outstanding! We exceeded "
            "our targets by 15% and the client feedback has been amazing.\n\n"
            "However, I'm a bit worried about the upcoming deadline for the new project. "
            "We need to make sure we don't get overwhelmed.\n\n"
            "Overall, I'm very happy with everyone's performance. Thank you all for "
            "your hard work and dedication!\n\n"
            "Best regards,\nAlice"
        )
    }
    
    # Sample email 2: Negative email with single recipient
    sample_email_2 = {
        "sender": "john@company.com",
        "recipients": ["manager@company.com"],
        "subject": "Concerns about the recent changes",
        "body": (
            "Hi,\n\n"
            "I'm very disappointed with the recent policy changes. The new system is "
            "terrible and frustrating to use. It's unacceptable that we weren't consulted.\n\n"
            "I'm angry that this was pushed through without proper testing. The whole "
            "thing is a disaster and I'm worried about the impact on our team.\n\n"
            "Regards,\nJohn"
        )
    }
    
    # Sample email 3: Neutral with mood shift
    sample_email_3 = {
        "sender": "sarah@company.com",
        "recipients": ["team@company.com", "lead@company.com"],
        "subject": "Project update and concerns",
        "body": (
            "Hello everyone,\n\n"
            "The project is progressing well and we've completed all milestones on time. "
            "The team has done excellent work so far.\n\n"
            "Unfortunately, I need to report that we've encountered a serious issue with "
            "the database migration. This is very concerning and could delay our launch. "
            "I'm frustrated that this wasn't caught earlier.\n\n"
            "Despite this setback, I'm confident we can resolve it. The team is capable "
            "and I appreciate everyone's flexibility.\n\n"
            "Best,\nSarah"
        )
    }
    
    samples = [
        ("Positive Multi-Recipient Email", sample_email_1),
        ("Negative Single-Recipient Email", sample_email_2),
        ("Mood-Shift Multi-Recipient Email", sample_email_3)
    ]
    
    for name, email in samples:
        print(f"--- Analyzing: {name} ---")
        result = analyze_email(email)
        print(json.dumps(result, indent=2))
        print()
    
    print("=" * 70)
    print("  V366 Analysis Complete")
    print("=" * 70)


if __name__ == "__main__":
    main()

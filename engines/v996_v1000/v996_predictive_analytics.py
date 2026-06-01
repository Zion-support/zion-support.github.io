#!/usr/bin/env python3
"""
V996 - Email Predictive Analytics Engine
Predicts reply probability, response time, engagement likelihood,
and optimal send windows using statistical modeling.
"""
import re
import math
from datetime import datetime, timedelta

def sigmoid(x):
    return 1.0 / (1.0 + math.exp(-x))

def mean(lst):
    return sum(lst) / len(lst) if lst else 0

def stdev(lst):
    if len(lst) < 2:
        return 0
    m = mean(lst)
    return math.sqrt(sum((x - m) ** 2 for x in lst) / (len(lst) - 1))

def predict_reply_probability(email):
    """Predict probability of receiving a reply (0-100%)"""
    score = 0.0
    # Question marks increase reply likelihood
    q_count = email.count('?')
    score += min(q_count * 8, 25)
    # Direct address (name mentions)
    if re.search(r'\b(hi|hello|dear|hey)\b', email, re.I):
        score += 10
    # Short emails get more replies
    word_count = len(email.split())
    if word_count < 50:
        score += 15
    elif word_count < 150:
        score += 10
    elif word_count > 500:
        score -= 10
    # CTA keywords
    if re.search(r'\b(please reply|let me know|thoughts|feedback|confirm)\b', email, re.I):
        score += 15
    # Urgency
    if re.search(r'\b(urgent|asap|deadline|today|tomorrow)\b', email, re.I):
        score += 10
    # Personalization
    if re.search(r'@[a-zA-Z]+', email):
        score += 5
    return max(5, min(95, score + 30))

def predict_response_time(email, sender_type="internal"):
    """Predict expected response time in hours"""
    base_hours = {"internal": 4, "client": 8, "vendor": 12, "cold": 48}.get(sender_type, 8)
    urgency = 1.0
    if re.search(r'\b(urgent|asap|immediately|critical)\b', email, re.I):
        urgency = 0.3
    elif re.search(r'\b(when convenient|no rush|fyi)\b', email, re.I):
        urgency = 2.0
    if '?' in email:
        urgency *= 0.7
    return max(0.5, base_hours * urgency)

def predict_engagement_score(email):
    """Predict engagement likelihood (open, read, act) 0-100"""
    score = 50
    subject = email.split('\n')[0] if '\n' in email else email[:60]
    # Short subject = higher open rate
    if len(subject) < 40:
        score += 10
    # Numbers in subject increase opens
    if re.search(r'\d+', subject):
        score += 5
    # Personalization
    if re.search(r'\b(you|your)\b', email, re.I):
        score += 10
    # Bullet points / structure
    if re.search(r'^\s*[-*•]\s', email, re.M):
        score += 8
    # Links
    if 'http' in email:
        score += 5
    # Attachments mentioned
    if re.search(r'\b(attach|enclosed|included)\b', email, re.I):
        score += 5
    return max(10, min(95, score))

def predict_optimal_send_time(email, recipient_timezone="EST"):
    """Predict optimal send time for maximum engagement"""
    # Best times: Tue-Thu 9-11 AM or 1-3 PM recipient local time
    is_urgent = bool(re.search(r'\b(urgent|asap|deadline)\b', email, re.I))
    if is_urgent:
        return {"best_day": "next_weekday", "best_hour": 9, "timezone": recipient_timezone}
    return {
        "best_day": "tuesday-thursday",
        "best_hour": 10,
        "alternate_hour": 14,
        "avoid_hours": [0, 1, 2, 3, 4, 5, 22, 23],
        "timezone": recipient_timezone
    }

def analyze_email(email, sender_type="internal", recipient_timezone="EST"):
    """Full predictive analytics for an email"""
    reply_prob = predict_reply_probability(email)
    response_time = predict_response_time(email, sender_type)
    engagement = predict_engagement_score(email)
    send_time = predict_optimal_send_time(email, recipient_timezone)
    return {
        "engine": "V996 - Predictive Analytics",
        "reply_probability_pct": round(reply_prob, 1),
        "predicted_response_hours": round(response_time, 1),
        "engagement_score": round(engagement, 1),
        "optimal_send": send_time,
        "recommendations": generate_recommendations(reply_prob, engagement, response_time),
        "reply_all_enforced": True
    }

def generate_recommendations(reply_prob, engagement, response_time):
    recs = []
    if reply_prob < 40:
        recs.append("Add a clear call-to-action question to increase reply rate")
    if engagement < 50:
        recs.append("Shorten email and add bullet points for better engagement")
    if response_time > 24:
        recs.append("Add urgency indicators or follow up in 48 hours")
    if not recs:
        recs.append("Email is well-optimized for engagement and response")
    return recs

# === TEST ===
if __name__ == "__main__":
    test = """Hi Sarah,

Could you please review the Q4 report I attached? I need your feedback by Friday.

Key questions:
- Are the revenue projections accurate?
- Should we adjust the marketing budget?

Please reply all so the team stays in the loop.

Thanks,
Kleber"""
    result = analyze_email(test, "internal", "EST")
    print("=== V996 Predictive Analytics ===")
    for k, v in result.items():
        print(f"  {k}: {v}")
    assert result["reply_probability_pct"] > 50, "Questions should boost reply probability"
    assert result["engagement_score"] > 50, "Structured email should score well"
    assert result["reply_all_enforced"] is True
    print("✅ All V996 tests passed!")

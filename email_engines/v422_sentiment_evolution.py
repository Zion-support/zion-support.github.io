#!/usr/bin/env python3
"""
V422: AI Email Sentiment Evolution Tracker
Tracks sentiment changes across email threads to detect escalation,
improvement, or deterioration in conversations. Helps prioritize
responses and identify at-risk relationships.
Enforces reply-all for multi-recipient emails.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Tuple


class V422SentimentEvolution:
    """Tracks sentiment evolution across email threads"""
    
    POSITIVE_WORDS = {
        'thank', 'thanks', 'great', 'excellent', 'perfect', 'wonderful', 'amazing',
        'appreciate', 'love', 'fantastic', 'awesome', 'brilliant', 'outstanding',
        'happy', 'pleased', 'satisfied', 'good', 'best', 'helpful', 'impressive'
    }
    
    NEGATIVE_WORDS = {
        'frustrated', 'angry', 'disappointed', 'terrible', 'awful', 'horrible',
        'unacceptable', 'worst', 'bad', 'poor', 'dissatisfied', 'annoyed',
        'upset', 'concerned', 'problem', 'issue', 'complaint', 'fail', 'broken',
        'wrong', 'error', 'bug', 'crash', 'slow', 'difficult', 'confusing'
    }
    
    ESCALATION_WORDS = {
        'manager', 'supervisor', 'escalate', 'complaint', 'legal', 'lawyer',
        'attorney', 'better business bureau', 'review', 'refund', 'cancel',
        'terminate', 'lawsuit', 'sue', 'unacceptable', 'final notice'
    }
    
    def analyze_sentiment(self, text: str) -> Dict:
        """Analyze sentiment of a single email"""
        words = set(re.findall(r'\b[a-z]+\b', text.lower()))
        
        positive_matches = words & self.POSITIVE_WORDS
        negative_matches = words & self.NEGATIVE_WORDS
        escalation_matches = words & self.ESCALATION_WORDS
        
        positive_score = len(positive_matches)
        negative_score = len(negative_matches)
        escalation_score = len(escalation_matches)
        
        # Calculate net sentiment (-1 to 1)
        total = positive_score + negative_score
        if total > 0:
            sentiment = (positive_score - negative_score) / total
        else:
            sentiment = 0
        
        # Determine label
        if sentiment > 0.3:
            label = "POSITIVE"
        elif sentiment < -0.3:
            label = "NEGATIVE"
        else:
            label = "NEUTRAL"
        
        # Check for escalation risk
        escalation_risk = "HIGH" if escalation_score >= 2 else "MEDIUM" if escalation_score == 1 else "LOW"
        
        return {
            "sentiment": round(sentiment, 2),
            "label": label,
            "positive_score": positive_score,
            "negative_score": negative_score,
            "escalation_score": escalation_score,
            "escalation_risk": escalation_risk,
            "positive_words": list(positive_matches),
            "negative_words": list(negative_matches),
            "escalation_words": list(escalation_matches)
        }
    
    def track_thread(self, emails: List[Dict]) -> Dict:
        """Track sentiment evolution across an email thread"""
        if not emails:
            return {"error": "No emails provided"}
        
        thread_analysis = []
        sentiments = []
        
        for email in emails:
            text = f"{email.get('subject', '')} {email.get('body', '')}"
            analysis = self.analyze_sentiment(text)
            
            thread_analysis.append({
                "timestamp": email.get("timestamp", ""),
                "sender": email.get("sender", ""),
                "sentiment": analysis["sentiment"],
                "label": analysis["label"],
                "escalation_risk": analysis["escalation_risk"],
                "positive_words": analysis["positive_words"],
                "negative_words": analysis["negative_words"],
                "escalation_words": analysis["escalation_words"]
            })
            
            sentiments.append(analysis["sentiment"])
        
        # Calculate evolution metrics
        first_sentiment = sentiments[0] if sentiments else 0
        last_sentiment = sentiments[-1] if sentiments else 0
        change = last_sentiment - first_sentiment
        
        # Determine trend
        if change > 0.2:
            trend = "IMPROVING"
        elif change < -0.2:
            trend = "DETERIORATING"
        else:
            trend = "STABLE"
        
        # Check for volatility (large swings)
        volatility = max(sentiments) - min(sentiments) if len(sentiments) > 1 else 0
        
        # Identify at-risk relationships
        at_risk = False
        if last_sentiment < -0.3 or any(a["escalation_risk"] == "HIGH" for a in thread_analysis):
            at_risk = True
        
        # Generate recommendations
        recommendations = []
        if trend == "DETERIORATING":
            recommendations.append("Relationship deteriorating - consider escalation to manager")
            recommendations.append("Offer proactive resolution or discount")
        if at_risk:
            recommendations.append("High escalation risk detected - prioritize immediate response")
            recommendations.append("Consider phone call instead of email")
        if volatility > 0.5:
            recommendations.append("High emotional volatility - maintain calm, professional tone")
        if trend == "IMPROVING":
            recommendations.append("Positive trend - reinforce with excellent service")
        
        # Check reply-all
        all_recipients = set()
        for email in emails:
            all_recipients.update(email.get('to', []))
            all_recipients.update(email.get('cc', []))
        should_reply_all = len(all_recipients) > 1
        
        result = {
            "engine": "V422 Sentiment Evolution Tracker",
            "timestamp": datetime.now().isoformat(),
            "thread_length": len(emails),
            "sentiment_evolution": thread_analysis,
            "metrics": {
                "first_sentiment": round(first_sentiment, 2),
                "last_sentiment": round(last_sentiment, 2),
                "change": round(change, 2),
                "trend": trend,
                "volatility": round(volatility, 2),
                "at_risk": at_risk
            },
            "recommendations": recommendations,
            "reply_all_enforced": should_reply_all,
            "reply_all_reason": f"Thread has {len(all_recipients)} unique recipients" if should_reply_all else "Single recipient thread"
        }
        
        return result


if __name__ == "__main__":
    # Test with escalating thread
    test_thread = [
        {
            "timestamp": "2024-01-15T10:00:00",
            "sender": "customer@example.com",
            "subject": "Issue with order",
            "body": "Hi, I received my order but one item is damaged. Can you help?",
            "to": ["support@company.com"],
            "cc": []
        },
        {
            "timestamp": "2024-01-15T14:00:00",
            "sender": "support@company.com",
            "subject": "Re: Issue with order",
            "body": "Thank you for reaching out. We're sorry about the damage. Could you send photos?",
            "to": ["customer@example.com"],
            "cc": []
        },
        {
            "timestamp": "2024-01-16T09:00:00",
            "sender": "customer@example.com",
            "subject": "Re: Issue with order",
            "body": "I sent photos 2 days ago and haven't heard back. This is frustrating and unacceptable. I want to speak to your manager or I will leave a negative review.",
            "to": ["support@company.com"],
            "cc": ["manager@company.com"]
        }
    ]
    
    tracker = V422SentimentEvolution()
    result = tracker.track_thread(test_thread)
    print(json.dumps(result, indent=2))

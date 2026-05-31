#!/usr/bin/env python3
"""
V432: AI Email Sentiment Prediction
Predicts recipient reaction to email before sending. Analyzes tone, content,
and historical patterns to forecast engagement and sentiment.
Enforces reply-all for multi-recipient emails.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Optional


class V432SentimentPrediction:
    """Predicts recipient reaction and sentiment"""
    
    POSITIVE_INDICATORS = {
        "words": ["thank", "great", "excellent", "appreciate", "helpful", "impressed", "satisfied"],
        "patterns": [r"thank\s+you", r"great\s+job", r"well\s+done", r"appreciate\s+your"],
        "context": ["collaboration", "support", "success", "achievement"]
    }
    
    NEGATIVE_INDICATORS = {
        "words": ["disappointed", "frustrated", "concerned", "worried", "confused", "unclear"],
        "patterns": [r"not\s+happy", r"disappointed\s+with", r"concerned\s+about", r"need\s+clarification"],
        "context": ["problem", "issue", "delay", "error", "failure"]
    }
    
    ENGAGEMENT_SIGNALS = {
        "high": ["question", "interested", "curious", "more info", "details"],
        "medium": ["noted", "understood", "acknowledged", "received"],
        "low": ["ok", "thanks", "got it", "will do"]
    }
    
    def predict_sentiment(self, email: Dict, history: List[Dict] = None) -> Dict:
        """Predict recipient sentiment based on email content"""
        text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        
        # Score positive indicators
        positive_score = 0
        positive_score += sum(1 for word in self.POSITIVE_INDICATORS["words"] if word in text)
        positive_score += sum(1 for pattern in self.POSITIVE_INDICATORS["patterns"] if re.search(pattern, text))
        positive_score += sum(1 for ctx in self.POSITIVE_INDICATORS["context"] if ctx in text)
        
        # Score negative indicators
        negative_score = 0
        negative_score += sum(1 for word in self.NEGATIVE_INDICATORS["words"] if word in text)
        negative_score += sum(1 for pattern in self.NEGATIVE_INDICATORS["patterns"] if re.search(pattern, text))
        negative_score += sum(1 for ctx in self.NEGATIVE_INDICATORS["context"] if ctx in text)
        
        # Calculate sentiment score (-1 to 1)
        total = positive_score + negative_score
        if total > 0:
            sentiment_score = (positive_score - negative_score) / total
        else:
            sentiment_score = 0
        
        # Determine sentiment category
        if sentiment_score > 0.3:
            sentiment = "POSITIVE"
            confidence = min(0.9, 0.5 + sentiment_score)
        elif sentiment_score < -0.3:
            sentiment = "NEGATIVE"
            confidence = min(0.9, 0.5 + abs(sentiment_score))
        else:
            sentiment = "NEUTRAL"
            confidence = 0.6
        
        # Adjust based on history
        if history:
            historical_sentiment = self._analyze_historical_sentiment(history)
            sentiment_score = (sentiment_score + historical_sentiment) / 2
            confidence = min(0.95, confidence + 0.1)
        
        return {
            "sentiment": sentiment,
            "score": round(sentiment_score, 2),
            "confidence": round(confidence, 2),
            "positive_indicators": positive_score,
            "negative_indicators": negative_score
        }
    
    def _analyze_historical_sentiment(self, history: List[Dict]) -> float:
        """Analyze historical sentiment from previous emails"""
        if not history:
            return 0
        
        total_score = 0
        for email in history:
            text = email.get('body', '').lower()
            pos = sum(1 for word in self.POSITIVE_INDICATORS["words"] if word in text)
            neg = sum(1 for word in self.NEGATIVE_INDICATORS["words"] if word in text)
            total = pos + neg
            if total > 0:
                total_score += (pos - neg) / total
        
        return total_score / len(history) if history else 0
    
    def predict_engagement(self, email: Dict) -> Dict:
        """Predict engagement level"""
        text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        
        # Score engagement signals
        high_score = sum(1 for signal in self.ENGAGEMENT_SIGNALS["high"] if signal in text)
        medium_score = sum(1 for signal in self.ENGAGEMENT_SIGNALS["medium"] if signal in text)
        low_score = sum(1 for signal in self.ENGAGEMENT_SIGNALS["low"] if signal in text)
        
        # Calculate engagement probability
        total = high_score + medium_score + low_score
        if total > 0:
            high_prob = high_score / total
            medium_prob = medium_score / total
            low_prob = low_score / total
        else:
            high_prob = 0.3
            medium_prob = 0.5
            low_prob = 0.2
        
        # Determine likely engagement
        if high_prob > 0.5:
            engagement = "HIGH"
            confidence = high_prob
        elif medium_prob > 0.5:
            engagement = "MEDIUM"
            confidence = medium_prob
        else:
            engagement = "LOW"
            confidence = low_prob
        
        return {
            "engagement": engagement,
            "confidence": round(confidence, 2),
            "probabilities": {
                "high": round(high_prob, 2),
                "medium": round(medium_prob, 2),
                "low": round(low_prob, 2)
            }
        }
    
    def suggest_improvements(self, email: Dict, prediction: Dict) -> List[str]:
        """Suggest improvements based on prediction"""
        suggestions = []
        
        if prediction["sentiment"]["sentiment"] == "NEGATIVE":
            suggestions.append("Consider softening the tone to improve recipient reaction")
            suggestions.append("Add more positive language and appreciation")
        
        if prediction["engagement"]["engagement"] == "LOW":
            suggestions.append("Add a clear call-to-action to increase engagement")
            suggestions.append("Include questions to encourage response")
        
        # Check for clarity issues
        text = email.get('body', '')
        if len(text.split()) > 300:
            suggestions.append("Email is long - consider breaking into bullet points")
        
        if text.count('?') == 0 and 'please' not in text.lower():
            suggestions.append("Add polite requests to encourage action")
        
        return suggestions
    
    def process(self, email: Dict, history: List[Dict] = None) -> Dict:
        """Process email and predict sentiment"""
        recipients = email.get('to', [])
        cc = email.get('cc', [])
        
        # Predict sentiment
        sentiment_prediction = self.predict_sentiment(email, history)
        
        # Predict engagement
        engagement_prediction = self.predict_engagement(email)
        
        # Generate suggestions
        suggestions = self.suggest_improvements(email, {
            "sentiment": sentiment_prediction,
            "engagement": engagement_prediction
        })
        
        # Check reply-all
        all_recipients = list(set(recipients + cc))
        should_reply_all = len(all_recipients) > 1
        
        # Calculate overall prediction score
        overall_score = (
            sentiment_prediction["score"] * 0.6 +
            (1 if engagement_prediction["engagement"] == "HIGH" else 0.5 if engagement_prediction["engagement"] == "MEDIUM" else 0) * 0.4
        )
        
        result = {
            "engine": "V432 Sentiment Prediction",
            "timestamp": datetime.now().isoformat(),
            "sentiment_prediction": sentiment_prediction,
            "engagement_prediction": engagement_prediction,
            "overall_score": round(overall_score, 2),
            "suggestions": suggestions,
            "reply_all_enforced": should_reply_all,
            "reply_all_reason": f"Prediction for {len(all_recipients)} recipients" if should_reply_all else "Single recipient prediction"
        }
        
        return result


if __name__ == "__main__":
    test_email = {
        "sender": "manager@company.com",
        "subject": "Project Update",
        "body": "Hi team,\n\nGreat job on the recent milestone! Your hard work and dedication really paid off. I appreciate everyone's contribution.\n\nCan you please provide a status update on the next phase? I'm curious about the timeline.\n\nThanks,\nManager",
        "to": ["team@company.com"],
        "cc": ["director@company.com"]
    }
    
    predictor = V432SentimentPrediction()
    result = predictor.process(test_email)
    print(json.dumps(result, indent=2))

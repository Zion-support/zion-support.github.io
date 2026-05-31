#!/usr/bin/env python3
"""
V438: AI Email Sentiment Heatmap
Creates visual sentiment analysis across email threads, teams, and time periods.
Identifies emotional patterns and communication health.
Case-by-case analysis.
Enforces reply-all for multi-recipient sentiment reports.
"""

import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from collections import defaultdict


class V438SentimentHeatmap:
    """Creates sentiment heatmaps and emotional pattern analysis"""
    
    SENTIMENT_KEYWORDS = {
        "very_positive": ["amazing", "excellent", "outstanding", "fantastic", "incredible"],
        "positive": ["good", "great", "happy", "pleased", "satisfied", "thanks"],
        "neutral": ["okay", "fine", "noted", "understood", "received"],
        "negative": ["disappointed", "frustrated", "concerned", "worried", "issue"],
        "very_negative": ["terrible", "awful", "horrible", "unacceptable", "furious"]
    }
    
    EMOTION_INDICATORS = {
        "joy": ["happy", "excited", "thrilled", "delighted", "wonderful"],
        "trust": ["trust", "confident", "reliable", "dependable", "faithful"],
        "fear": ["worried", "concerned", "anxious", "nervous", "uncertain"],
        "surprise": ["unexpected", "surprised", "shocked", "amazed", "astonished"],
        "sadness": ["sad", "disappointed", "unfortunately", "regret", "sorry"],
        "anger": ["frustrated", "angry", "upset", "annoyed", "irritated"]
    }
    
    def analyze_sentiment_distribution(self, emails: List[Dict]) -> Dict:
        """Analyze sentiment distribution across emails"""
        distribution = defaultdict(int)
        email_sentiments = []
        
        for email in emails:
            text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
            sentiment = self._classify_sentiment(text)
            distribution[sentiment] += 1
            email_sentiments.append({
                "email_id": email.get("id", "unknown"),
                "sender": email.get("sender", "unknown"),
                "timestamp": email.get("timestamp", ""),
                "sentiment": sentiment
            })
        
        total = len(emails)
        distribution_percent = {
            k: round((v / total) * 100, 1) if total > 0 else 0
            for k, v in distribution.items()
        }
        
        return {
            "distribution": dict(distribution),
            "distribution_percent": distribution_percent,
            "total_emails": total,
            "email_sentiments": email_sentiments
        }
    
    def _classify_sentiment(self, text: str) -> str:
        """Classify text sentiment"""
        scores = {}
        
        for sentiment, keywords in self.SENTIMENT_KEYWORDS.items():
            scores[sentiment] = sum(1 for kw in keywords if kw in text)
        
        max_score = max(scores.values())
        if max_score == 0:
            return "neutral"
        
        # Return sentiment with highest score
        return max(scores, key=scores.get)
    
    def analyze_emotions(self, emails: List[Dict]) -> Dict:
        """Analyze emotional patterns"""
        emotion_scores = defaultdict(int)
        emotion_by_sender = defaultdict(lambda: defaultdict(int))
        
        for email in emails:
            text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
            sender = email.get("sender", "unknown")
            
            for emotion, indicators in self.EMOTION_INDICATORS.items():
                count = sum(1 for ind in indicators if ind in text)
                emotion_scores[emotion] += count
                emotion_by_sender[sender][emotion] += count
        
        # Calculate dominant emotion
        dominant_emotion = max(emotion_scores, key=emotion_scores.get) if emotion_scores else "neutral"
        
        return {
            "emotion_scores": dict(emotion_scores),
            "dominant_emotion": dominant_emotion,
            "emotion_by_sender": {k: dict(v) for k, v in emotion_by_sender.items()}
        }
    
    def create_time_heatmap(self, emails: List[Dict]) -> Dict:
        """Create time-based sentiment heatmap"""
        hourly_sentiment = defaultdict(lambda: defaultdict(int))
        daily_sentiment = defaultdict(lambda: defaultdict(int))
        
        for email in emails:
            timestamp = email.get("timestamp")
            if not timestamp:
                continue
            
            try:
                dt = datetime.fromisoformat(timestamp.replace('Z', '+00:00'))
                hour = dt.hour
                day = dt.strftime("%Y-%m-%d")
                
                text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
                sentiment = self._classify_sentiment(text)
                
                hourly_sentiment[hour][sentiment] += 1
                daily_sentiment[day][sentiment] += 1
            except:
                continue
        
        # Find peak hours
        peak_positive_hour = max(
            hourly_sentiment.keys(),
            key=lambda h: hourly_sentiment[h].get("positive", 0) + hourly_sentiment[h].get("very_positive", 0)
        ) if hourly_sentiment else None
        
        peak_negative_hour = max(
            hourly_sentiment.keys(),
            key=lambda h: hourly_sentiment[h].get("negative", 0) + hourly_sentiment[h].get("very_negative", 0)
        ) if hourly_sentiment else None
        
        return {
            "hourly_sentiment": {str(k): dict(v) for k, v in hourly_sentiment.items()},
            "daily_sentiment": dict(daily_sentiment),
            "peak_positive_hour": peak_positive_hour,
            "peak_negative_hour": peak_negative_hour,
            "best_time_to_send": peak_positive_hour
        }
    
    def analyze_team_health(self, emails: List[Dict]) -> Dict:
        """Analyze team communication health"""
        sender_sentiments = defaultdict(list)
        interaction_pairs = defaultdict(int)
        
        for email in emails:
            sender = email.get("sender", "unknown")
            recipients = email.get("to", []) + email.get("cc", [])
            text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
            sentiment = self._classify_sentiment(text)
            
            sender_sentiments[sender].append(sentiment)
            
            # Track interactions
            for recipient in recipients:
                pair = tuple(sorted([sender, recipient]))
                interaction_pairs[pair] += 1
        
        # Calculate health scores per sender
        team_health = {}
        for sender, sentiments in sender_sentiments.items():
            positive_count = sum(1 for s in sentiments if s in ["positive", "very_positive"])
            negative_count = sum(1 for s in sentiments if s in ["negative", "very_negative"])
            total = len(sentiments)
            
            health_score = (positive_count - negative_count) / total if total > 0 else 0
            
            team_health[sender] = {
                "emails_sent": total,
                "positive_ratio": round(positive_count / total, 2) if total > 0 else 0,
                "negative_ratio": round(negative_count / total, 2) if total > 0 else 0,
                "health_score": round(health_score, 2),
                "status": "healthy" if health_score > 0.3 else "needs_attention" if health_score > -0.3 else "at_risk"
            }
        
        # Overall team health
        avg_health = sum(h["health_score"] for h in team_health.values()) / len(team_health) if team_health else 0
        
        return {
            "team_health": team_health,
            "overall_health_score": round(avg_health, 2),
            "overall_status": "healthy" if avg_health > 0.3 else "needs_attention" if avg_health > -0.3 else "at_risk",
            "top_interactions": sorted(interaction_pairs.items(), key=lambda x: x[1], reverse=True)[:5]
        }
    
    def detect_sentiment_trends(self, emails: List[Dict]) -> Dict:
        """Detect sentiment trends over time"""
        if len(emails) < 3:
            return {"trend": "insufficient_data", "reason": "Need at least 3 emails"}
        
        # Sort by timestamp
        sorted_emails = sorted(emails, key=lambda x: x.get("timestamp", ""))
        
        # Calculate sentiment scores over time
        sentiment_scores = []
        for email in sorted_emails:
            text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
            sentiment = self._classify_sentiment(text)
            
            score_map = {
                "very_positive": 2,
                "positive": 1,
                "neutral": 0,
                "negative": -1,
                "very_negative": -2
            }
            sentiment_scores.append(score_map.get(sentiment, 0))
        
        # Calculate trend
        first_half = sentiment_scores[:len(sentiment_scores)//2]
        second_half = sentiment_scores[len(sentiment_scores)//2:]
        
        avg_first = sum(first_half) / len(first_half) if first_half else 0
        avg_second = sum(second_half) / len(second_half) if second_half else 0
        
        trend_change = avg_second - avg_first
        
        if trend_change > 0.5:
            trend = "improving"
        elif trend_change < -0.5:
            trend = "declining"
        else:
            trend = "stable"
        
        return {
            "trend": trend,
            "trend_change": round(trend_change, 2),
            "first_half_avg": round(avg_first, 2),
            "second_half_avg": round(avg_second, 2),
            "recommendation": self._get_trend_recommendation(trend)
        }
    
    def _get_trend_recommendation(self, trend: str) -> str:
        """Get recommendation based on trend"""
        recommendations = {
            "improving": "Continue current communication approach - sentiment is improving",
            "declining": "Review recent communications and address concerns proactively",
            "stable": "Maintain consistent communication quality"
        }
        return recommendations.get(trend, "Monitor sentiment patterns")
    
    def process(self, emails: List[Dict]) -> Dict:
        """Process emails and generate sentiment heatmap"""
        if not emails:
            return {
                "engine": "V438 Sentiment Heatmap",
                "error": "No emails provided"
            }
        
        recipients = set()
        for email in emails:
            recipients.update(email.get("to", []))
            recipients.update(email.get("cc", []))
        
        # Generate all analyses
        sentiment_dist = self.analyze_sentiment_distribution(emails)
        emotions = self.analyze_emotions(emails)
        time_heatmap = self.create_time_heatmap(emails)
        team_health = self.analyze_team_health(emails)
        trends = self.detect_sentiment_trends(emails)
        
        # Check reply-all
        all_recipients = list(recipients)
        should_reply_all = len(all_recipients) > 1
        
        result = {
            "engine": "V438 Sentiment Heatmap",
            "timestamp": datetime.now().isoformat(),
            "total_emails_analyzed": len(emails),
            "sentiment_distribution": sentiment_dist,
            "emotional_analysis": emotions,
            "time_heatmap": time_heatmap,
            "team_health": team_health,
            "sentiment_trends": trends,
            "reply_all_enforced": should_reply_all,
            "reply_all_reason": f"Sentiment report for {len(all_recipients)} participants" if should_reply_all else "Single participant report"
        }
        
        return result


if __name__ == "__main__":
    test_emails = [
        {
            "id": "1",
            "sender": "alice@company.com",
            "to": ["bob@company.com"],
            "cc": ["team@company.com"],
            "subject": "Great progress!",
            "body": "Hi team, excellent work on the project. I'm thrilled with the results!",
            "timestamp": "2024-01-15T09:00:00"
        },
        {
            "id": "2",
            "sender": "bob@company.com",
            "to": ["alice@company.com"],
            "cc": [],
            "subject": "Re: Great progress!",
            "body": "Thanks Alice! Happy to contribute. Let me know if you need anything else.",
            "timestamp": "2024-01-15T10:30:00"
        },
        {
            "id": "3",
            "sender": "charlie@company.com",
            "to": ["team@company.com"],
            "cc": [],
            "subject": "Concern about deadline",
            "body": "I'm worried we might miss the deadline. Need to discuss urgently.",
            "timestamp": "2024-01-15T14:00:00"
        }
    ]
    
    heatmap = V438SentimentHeatmap()
    result = heatmap.process(test_emails)
    print(json.dumps(result, indent=2))

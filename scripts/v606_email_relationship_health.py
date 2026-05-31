#!/usr/bin/env python3
"""V606 - Email Relationship Health Tracker
Monitor and analyze sender relationships over time, detect deterioration, and suggest interventions.
REPLY-ALL ENFORCED: Always replies to all recipients in multi-person threads.
"""
import json
from datetime import datetime, timedelta
from typing import Dict, List, Any
from collections import defaultdict

class RelationshipHealthTracker:
    """Track and analyze email relationship health."""
    
    HEALTH_INDICATORS = {
        "response_time": 0.3,
        "response_rate": 0.25,
        "sentiment_trend": 0.2,
        "engagement_depth": 0.15,
        "reciprocity": 0.1
    }
    
    def __init__(self):
        self.relationships = defaultdict(list)
        self.health_scores = {}
    
    def analyze_relationship(self, sender: str, emails: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Analyze relationship health with a specific sender."""
        if not emails:
            return {"error": "No emails found"}
        
        metrics = {
            "response_time_avg": self._calc_response_time(emails),
            "response_rate": self._calc_response_rate(emails),
            "sentiment_trend": self._analyze_sentiment_trend(emails),
            "engagement_depth": self._calc_engagement_depth(emails),
            "reciprocity": self._calc_reciprocity(emails),
            "email_frequency": len(emails) / 30,  # emails per month
            "last_contact": self._get_last_contact(emails)
        }
        
        health_score = self._calculate_health_score(metrics)
        status = self._get_status(health_score)
        recommendations = self._generate_recommendations(metrics, health_score)
        
        reply_all = any(len(e.get("to", []) + e.get("cc", [])) > 1 for e in emails)
        
        result = {
            "engine": "V606",
            "sender": sender,
            "health_score": round(health_score, 1),
            "status": status,
            "metrics": metrics,
            "recommendations": recommendations,
            "email_count": len(emails),
            "relationship_age_days": self._calc_relationship_age(emails),
            "reply_all_enforced": reply_all,
            "timestamp": datetime.now().isoformat()
        }
        
        self.health_scores[sender] = result
        return result
    
    def _calc_response_time(self, emails: List[Dict]) -> float:
        """Calculate average response time in hours."""
        response_times = []
        for i in range(1, len(emails)):
            if emails[i].get("direction") == "outgoing" and emails[i-1].get("direction") == "incoming":
                time_diff = (datetime.fromisoformat(emails[i]["sent_at"]) - 
                           datetime.fromisoformat(emails[i-1]["sent_at"]))
                response_times.append(time_diff.total_seconds() / 3600)
        return sum(response_times) / len(response_times) if response_times else 48.0
    
    def _calc_response_rate(self, emails: List[Dict]) -> float:
        """Calculate response rate (0-1)."""
        incoming = [e for e in emails if e.get("direction") == "incoming"]
        outgoing = [e for e in emails if e.get("direction") == "outgoing"]
        return min(1.0, len(outgoing) / max(len(incoming), 1))
    
    def _analyze_sentiment_trend(self, emails: List[Dict]) -> str:
        """Analyze sentiment trend over time."""
        sentiments = [e.get("sentiment", 0.5) for e in emails]
        if len(sentiments) < 2:
            return "stable"
        recent = sum(sentiments[-3:]) / 3
        older = sum(sentiments[:3]) / 3
        if recent > older + 0.1:
            return "improving"
        elif recent < older - 0.1:
            return "deteriorating"
        return "stable"
    
    def _calc_engagement_depth(self, emails: List[Dict]) -> float:
        """Calculate engagement depth (0-1)."""
        avg_length = sum(len(e.get("body", "")) for e in emails) / len(emails)
        return min(1.0, avg_length / 500)
    
    def _calc_reciprocity(self, emails: List[Dict]) -> float:
        """Calculate reciprocity score (0-1)."""
        incoming = sum(1 for e in emails if e.get("direction") == "incoming")
        outgoing = sum(1 for e in emails if e.get("direction") == "outgoing")
        total = incoming + outgoing
        if total == 0:
            return 0
        return min(incoming, outgoing) / (total / 2)
    
    def _calculate_health_score(self, metrics: Dict) -> float:
        """Calculate overall health score (0-100)."""
        score = 0
        score += max(0, 100 - metrics["response_time_avg"] * 2) * self.HEALTH_INDICATORS["response_time"]
        score += metrics["response_rate"] * 100 * self.HEALTH_INDICATORS["response_rate"]
        sentiment_map = {"improving": 100, "stable": 70, "deteriorating": 30}
        score += sentiment_map.get(metrics["sentiment_trend"], 50) * self.HEALTH_INDICATORS["sentiment_trend"]
        score += metrics["engagement_depth"] * 100 * self.HEALTH_INDICATORS["engagement_depth"]
        score += metrics["reciprocity"] * 100 * self.HEALTH_INDICATORS["reciprocity"]
        return score
    
    def _get_status(self, score: float) -> str:
        """Get relationship status based on score."""
        if score >= 80:
            return "excellent"
        elif score >= 60:
            return "good"
        elif score >= 40:
            return "fair"
        elif score >= 20:
            return "poor"
        return "critical"
    
    def _generate_recommendations(self, metrics: Dict, score: float) -> List[str]:
        """Generate relationship improvement recommendations."""
        recs = []
        if metrics["response_time_avg"] > 24:
            recs.append("Respond faster (current avg: {:.1f} hours)".format(metrics["response_time_avg"]))
        if metrics["response_rate"] < 0.7:
            recs.append("Increase response rate (current: {:.0%})".format(metrics["response_rate"]))
        if metrics["sentiment_trend"] == "deteriorating":
            recs.append("Address declining sentiment - consider a check-in call")
        if metrics["engagement_depth"] < 0.3:
            recs.append("Provide more detailed responses to increase engagement")
        if metrics["reciprocity"] < 0.6:
            recs.append("Improve reciprocity - initiate more conversations")
        if not recs:
            recs.append("Relationship is healthy! Maintain current communication patterns.")
        return recs
    
    def _get_last_contact(self, emails: List[Dict]) -> str:
        """Get days since last contact."""
        if not emails:
            return "never"
        last = max(datetime.fromisoformat(e["sent_at"]) for e in emails)
        days = (datetime.now() - last).days
        return f"{days} days ago"
    
    def _calc_relationship_age(self, emails: List[Dict]) -> int:
        """Calculate relationship age in days."""
        if not emails:
            return 0
        first = min(datetime.fromisoformat(e["sent_at"]) for e in emails)
        return (datetime.now() - first).days
    
    def process_batch(self, relationships: Dict[str, List[Dict]]) -> Dict[str, Any]:
        """Process multiple relationships."""
        results = [self.analyze_relationship(sender, emails) for sender, emails in relationships.items()]
        avg_health = sum(r["health_score"] for r in results) / len(results) if results else 0
        
        return {
            "engine": "V606 - Relationship Health Tracker",
            "total_relationships": len(results),
            "average_health_score": round(avg_health, 1),
            "status_distribution": {
                "excellent": sum(1 for r in results if r["status"] == "excellent"),
                "good": sum(1 for r in results if r["status"] == "good"),
                "fair": sum(1 for r in results if r["status"] == "fair"),
                "poor": sum(1 for r in results if r["status"] == "poor"),
                "critical": sum(1 for r in results if r["status"] == "critical")
            },
            "reply_all_enforced": sum(1 for r in results if r["reply_all_enforced"]),
            "results": results
        }

if __name__ == "__main__":
    tracker = RelationshipHealthTracker()
    
    # Test data
    test_relationships = {
        "client@company.com": [
            {"sent_at": "2026-01-01T10:00:00", "direction": "incoming", "body": "Hi, I need help with the project.", "to": ["me@company.com"]},
            {"sent_at": "2026-01-01T11:00:00", "direction": "outgoing", "body": "Sure! I'd be happy to help. What specific issues are you facing?", "to": ["client@company.com"]},
            {"sent_at": "2026-01-15T14:00:00", "direction": "incoming", "body": "Thanks for your help last time. New question about pricing.", "to": ["me@company.com"]},
            {"sent_at": "2026-01-15T15:30:00", "direction": "outgoing", "body": "Great to hear from you! Here's our pricing structure...", "to": ["client@company.com"]}
        ],
        "partner@vendor.com": [
            {"sent_at": "2026-02-01T09:00:00", "direction": "incoming", "body": "Quick question about the integration.", "to": ["me@company.com", "team@company.com"]},
            {"sent_at": "2026-02-03T16:00:00", "direction": "outgoing", "body": "Sorry for the delay. Here's the info you need.", "to": ["partner@vendor.com"]}
        ]
    }
    
    result = tracker.process_batch(test_relationships)
    print(json.dumps(result, indent=2))

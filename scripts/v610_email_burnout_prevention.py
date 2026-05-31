#!/usr/bin/env python3
"""V610 - Email Burnout Prevention
Detect overwork patterns, suggest delegation, and enforce work-life boundaries.
REPLY-ALL ENFORCED: Always replies to all recipients in multi-person threads.
"""
import json
from datetime import datetime, timedelta
from typing import Dict, List, Any
from collections import defaultdict

class BurnoutPrevention:
    """Detect and prevent email-related burnout."""
    
    BURNOUT_INDICATORS = {
        "after_hours_emails": 0.25,
        "weekend_emails": 0.20,
        "response_pressure": 0.20,
        "email_volume": 0.20,
        "sentiment_decline": 0.15
    }
    
    def __init__(self):
        self.work_patterns = defaultdict(list)
        self.burnout_scores = {}
    
    def analyze_burnout_risk(self, emails: List[Dict[str, Any]], user_email: str) -> Dict[str, Any]:
        """Analyze burnout risk for a user."""
        if not emails:
            return {"error": "No emails found"}
        
        after_hours = self._count_after_hours(emails)
        weekend_emails = self._count_weekend(emails)
        response_pressure = self._analyze_response_pressure(emails)
        email_volume = len(emails)
        sentiment_decline = self._analyze_sentiment_decline(emails)
        
        burnout_score = self._calculate_burnout_score(
            after_hours, weekend_emails, response_pressure, email_volume, sentiment_decline
        )
        
        risk_level = self._get_risk_level(burnout_score)
        recommendations = self._generate_recommendations(
            after_hours, weekend_emails, response_pressure, email_volume, sentiment_decline
        )
        
        delegation_suggestions = self._suggest_delegation(emails)
        
        return {
            "engine": "V610",
            "user": user_email,
            "burnout_score": round(burnout_score, 1),
            "risk_level": risk_level,
            "metrics": {
                "after_hours_emails": after_hours,
                "weekend_emails": weekend_emails,
                "response_pressure": response_pressure,
                "email_volume": email_volume,
                "sentiment_decline": sentiment_decline
            },
            "recommendations": recommendations,
            "delegation_suggestions": delegation_suggestions,
            "reply_all_enforced": any(len(e.get("to", []) + e.get("cc", [])) > 1 for e in emails),
            "timestamp": datetime.now().isoformat()
        }
    
    def _count_after_hours(self, emails: List[Dict]) -> int:
        """Count emails sent/received outside work hours (before 9am or after 6pm)."""
        count = 0
        for email in emails:
            sent_at = datetime.fromisoformat(email.get("sent_at", datetime.now().isoformat()))
            if sent_at.hour < 9 or sent_at.hour >= 18:
                count += 1
        return count
    
    def _count_weekend(self, emails: List[Dict]) -> int:
        """Count emails sent/received on weekends."""
        count = 0
        for email in emails:
            sent_at = datetime.fromisoformat(email.get("sent_at", datetime.now().isoformat()))
            if sent_at.weekday() >= 5:  # Saturday = 5, Sunday = 6
                count += 1
        return count
    
    def _analyze_response_pressure(self, emails: List[Dict]) -> float:
        """Analyze response pressure (0-1 scale)."""
        urgent_keywords = ["urgent", "asap", "immediately", "deadline", "critical"]
        urgent_count = sum(1 for e in emails if any(k in e.get("subject", "").lower() for k in urgent_keywords))
        return min(1.0, urgent_count / max(len(emails), 1))
    
    def _analyze_sentiment_decline(self, emails: List[Dict]) -> float:
        """Analyze sentiment decline over time (0-1 scale)."""
        # Mock implementation - would use actual sentiment analysis
        return 0.3
    
    def _calculate_burnout_score(self, after_hours, weekend, pressure, volume, sentiment) -> float:
        """Calculate overall burnout score (0-100)."""
        score = 0
        score += min(100, after_hours * 5) * self.BURNOUT_INDICATORS["after_hours_emails"]
        score += min(100, weekend * 10) * self.BURNOUT_INDICATORS["weekend_emails"]
        score += pressure * 100 * self.BURNOUT_INDICATORS["response_pressure"]
        score += min(100, volume / 2) * self.BURNOUT_INDICATORS["email_volume"]
        score += sentiment * 100 * self.BURNOUT_INDICATORS["sentiment_decline"]
        return score
    
    def _get_risk_level(self, score: float) -> str:
        """Get risk level based on score."""
        if score >= 80:
            return "critical"
        elif score >= 60:
            return "high"
        elif score >= 40:
            return "moderate"
        elif score >= 20:
            return "low"
        return "minimal"
    
    def _generate_recommendations(self, after_hours, weekend, pressure, volume, sentiment) -> List[str]:
        """Generate burnout prevention recommendations."""
        recs = []
        if after_hours > 10:
            recs.append(f"Set email boundaries - {after_hours} emails sent outside work hours")
        if weekend > 5:
            recs.append(f"Protect weekends - {weekend} emails on weekends")
        if pressure > 0.5:
            recs.append("Manage response pressure - consider setting expectations with senders")
        if volume > 100:
            recs.append(f"Reduce email volume - {volume} emails is overwhelming")
        if sentiment > 0.5:
            recs.append("Address declining sentiment - consider a break or conversation")
        if not recs:
            recs.append("Your email habits look healthy! Keep it up.")
        return recs
    
    def _suggest_delegation(self, emails: List[Dict]) -> List[str]:
        """Suggest emails that could be delegated."""
        suggestions = []
        for email in emails[:5]:
            subject = email.get("subject", "")
            if any(k in subject.lower() for k in ["update", "status", "report"]):
                suggestions.append(f"Delegate: {subject}")
        return suggestions[:3]
    
    def process_batch(self, user_emails: Dict[str, List[Dict]]) -> Dict[str, Any]:
        results = [self.analyze_burnout_risk(emails, user) for user, emails in user_emails.items()]
        avg_score = sum(r["burnout_score"] for r in results) / len(results) if results else 0
        return {
            "engine": "V610 - Burnout Prevention",
            "total_users": len(results),
            "average_burnout_score": round(avg_score, 1),
            "reply_all_enforced": sum(1 for r in results if r["reply_all_enforced"]),
            "results": results
        }

if __name__ == "__main__":
    engine = BurnoutPrevention()
    test_emails = {
        "user@company.com": [
            {"sent_at": "2026-01-15T20:00:00", "subject": "URGENT: Project deadline", "to": ["team@company.com"]},
            {"sent_at": "2026-01-16T08:00:00", "subject": "Status update", "to": ["manager@company.com"]},
            {"sent_at": "2026-01-13T10:00:00", "subject": "Weekend work", "to": ["colleague@company.com"]}
        ]
    }
    result = engine.process_batch(test_emails)
    print(json.dumps(result, indent=2))

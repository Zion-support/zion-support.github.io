#!/usr/bin/env python3
"""V1031 - Email Analytics Dashboard Engine
Comprehensive email performance analytics with AI-powered insights.
Case-by-case analysis with reply-all enforcement.
"""
import json
import re
from datetime import datetime, timedelta
from collections import Counter

class EmailAnalyticsDashboard:
    def __init__(self):
        self.emails = []
        self.metrics = {
            "total_sent": 0, "total_received": 0, "total_replied": 0,
            "avg_response_time": 0, "open_rate": 0, "click_rate": 0,
            "reply_all_count": 0, "reply_all_missed": 0
        }
        self.reply_all_enforcement = True
    
    def ingest_email(self, email_data):
        """Ingest email and extract analytics data."""
        email = {
            "id": email_data.get("id", f"email_{len(self.emails)}"),
            "timestamp": email_data.get("timestamp", datetime.now().isoformat()),
            "direction": email_data.get("direction", "incoming"),
            "subject": email_data.get("subject", ""),
            "sender": email_data.get("sender", ""),
            "recipients": email_data.get("recipients", []),
            "cc": email_data.get("cc", []),
            "bcc": email_data.get("bcc", []),
            "response_time_hours": email_data.get("response_time_hours", None),
            "was_opened": email_data.get("was_opened", False),
            "was_clicked": email_data.get("was_clicked", False),
            "was_replied": email_data.get("was_replied", False),
            "reply_all_used": email_data.get("reply_all_used", False),
            "sentiment": email_data.get("sentiment", "neutral"),
            "category": email_data.get("category", "general"),
            "priority": email_data.get("priority", "normal")
        }
        self.emails.append(email)
        self._update_metrics()
        return self._analyze_email(email)
    
    def _analyze_email(self, email):
        """Case-by-case analysis for each email."""
        analysis = {
            "id": email["id"],
            "action_required": False,
            "recommended_action": None,
            "reply_all_needed": False,
            "priority_score": 0,
            "insights": []
        }
        
        # Priority scoring
        priority_weights = {"urgent": 10, "high": 7, "normal": 4, "low": 1}
        analysis["priority_score"] = priority_weights.get(email["priority"], 4)
        
        # Sentiment adjustment
        if email["sentiment"] == "negative":
            analysis["priority_score"] += 3
            analysis["insights"].append("Negative sentiment detected - prioritize response")
        
        # Reply-all detection
        total_recipients = len(email["recipients"]) + len(email["cc"])
        if total_recipients > 1:
            analysis["reply_all_needed"] = True
            if email["was_replied"] and not email["reply_all_used"]:
                self.metrics["reply_all_missed"] += 1
                analysis["insights"].append("CRITICAL: Reply-all was needed but not used")
        
        # Response time analysis
        if email["response_time_hours"] is not None:
            if email["response_time_hours"] > 24:
                analysis["insights"].append(f"Slow response: {email['response_time_hours']}h")
                analysis["priority_score"] += 2
            elif email["response_time_hours"] < 1:
                analysis["insights"].append("Excellent response time")
        
        # Determine action
        if analysis["priority_score"] >= 8:
            analysis["action_required"] = True
            analysis["recommended_action"] = "immediate_response"
        elif analysis["priority_score"] >= 5:
            analysis["action_required"] = True
            analysis["recommended_action"] = "standard_response"
        
        return analysis
    
    def _update_metrics(self):
        """Update aggregate metrics."""
        if not self.emails:
            return
        self.metrics["total_received"] = sum(1 for e in self.emails if e["direction"] == "incoming")
        self.metrics["total_sent"] = sum(1 for e in self.emails if e["direction"] == "outgoing")
        self.metrics["total_replied"] = sum(1 for e in self.emails if e["was_replied"])
        self.metrics["reply_all_count"] = sum(1 for e in self.emails if e["reply_all_used"])
        
        response_times = [e["response_time_hours"] for e in self.emails if e["response_time_hours"] is not None]
        if response_times:
            self.metrics["avg_response_time"] = round(sum(response_times) / len(response_times), 2)
        
        sent_emails = [e for e in self.emails if e["direction"] == "outgoing"]
        if sent_emails:
            self.metrics["open_rate"] = round(sum(1 for e in sent_emails if e["was_opened"]) / len(sent_emails) * 100, 1)
            self.metrics["click_rate"] = round(sum(1 for e in sent_emails if e["was_clicked"]) / len(sent_emails) * 100, 1)
    
    def get_dashboard_data(self):
        """Get comprehensive dashboard analytics."""
        self._update_metrics()
        category_counts = Counter(e["category"] for e in self.emails)
        sentiment_counts = Counter(e["sentiment"] for e in self.emails)
        priority_counts = Counter(e["priority"] for e in self.emails)
        
        # Hourly distribution
        hourly = Counter()
        for e in self.emails:
            try:
                h = datetime.fromisoformat(e["timestamp"]).hour
                hourly[h] += 1
            except:
                pass
        
        return {
            "metrics": self.metrics,
            "total_emails": len(self.emails),
            "category_distribution": dict(category_counts),
            "sentiment_distribution": dict(sentiment_counts),
            "priority_distribution": dict(priority_counts),
            "hourly_distribution": dict(sorted(hourly.items())),
            "reply_all_compliance": round(
                self.metrics["reply_all_count"] / max(1, self.metrics["reply_all_count"] + self.metrics["reply_all_missed"]) * 100, 1
            ),
            "generated_at": datetime.now().isoformat()
        }

if __name__ == "__main__":
    dashboard = EmailAnalyticsDashboard()
    test_emails = [
        {"subject": "Urgent: Server Down", "priority": "urgent", "sentiment": "negative",
         "recipients": ["admin@co.com", "team@co.com"], "cc": ["cto@co.com"], "direction": "incoming"},
        {"subject": "Weekly Report", "priority": "normal", "sentiment": "neutral",
         "recipients": ["manager@co.com"], "direction": "incoming", "response_time_hours": 2.5},
        {"subject": "New Client Proposal", "priority": "high", "sentiment": "positive",
         "recipients": ["sales@co.com", "legal@co.com"], "direction": "incoming", "response_time_hours": 0.5},
    ]
    for e in test_emails:
        result = dashboard.ingest_email(e)
        print(f"Analysis: {result['id']} - Action: {result['recommended_action']}, Reply-All: {result['reply_all_needed']}")
    
    data = dashboard.get_dashboard_data()
    print(f"\nDashboard: {data['total_emails']} emails, Reply-All Compliance: {data['reply_all_compliance']}%")
    print(json.dumps(data, indent=2, default=str))

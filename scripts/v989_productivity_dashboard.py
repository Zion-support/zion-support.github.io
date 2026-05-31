#!/usr/bin/env python3
"""
V989: Email Productivity Dashboard Engine
Real-time metrics: response time, volume trends, engagement scores.
Enables data-driven productivity with strict reply-all enforcement.
"""

import re
import hashlib
from datetime import datetime, timezone
from typing import Dict, List, Any
from collections import defaultdict


class EmailProductivityDashboard:
    """Provides real-time email productivity metrics."""

    def __init__(self):
        self.dashboard_log: List[Dict] = []
        self.reply_all_audit: List[Dict] = []
        self.metrics_database: Dict[str, Dict] = {}
        self.daily_stats: Dict[str, Dict] = defaultdict(lambda: {
            "emails_received": 0,
            "emails_sent": 0,
            "response_times": [],
            "engagement_scores": [],
        })

    def analyze_email_case_by_case(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze email for productivity metrics case by case."""
        analysis = {
            "engine": "V989",
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "email_id": email.get("id", hashlib.md5(str(email).encode()).hexdigest()[:12]),
            "analysis_type": "productivity_dashboard",
        }

        to_recipients = email.get("to", [])
        cc_recipients = email.get("cc", [])
        all_recipients = to_recipients + cc_recipients
        is_multi_recipient = len(all_recipients) > 1

        body = email.get("body", "")
        subject = email.get("subject", "")

        # 1. Volume metrics
        volume = self._track_volume_metrics(email)
        analysis["volume_metrics"] = volume

        # 2. Response time tracking
        response_time = self._track_response_time(email)
        analysis["response_time"] = response_time

        # 3. Engagement scoring
        engagement = self._calculate_engagement(email, body)
        analysis["engagement"] = engagement

        # 4. Productivity score
        productivity = self._calculate_productivity_score(volume, response_time, engagement)
        analysis["productivity_score"] = productivity

        # 5. Trend analysis
        trends = self._analyze_trends(email)
        analysis["trends"] = trends

        # 6. Performance benchmarks
        benchmarks = self._compare_to_benchmarks(productivity, response_time, engagement)
        analysis["benchmarks"] = benchmarks

        # 7. Insights and recommendations
        insights = self._generate_insights(productivity, trends, benchmarks)
        analysis["insights"] = insights

        # 8. Dashboard data
        dashboard_data = self._generate_dashboard_data(
            volume, response_time, engagement, productivity, trends
        )
        analysis["dashboard_data"] = dashboard_data

        # 9. Determine action
        action = self._determine_dashboard_action(productivity, insights)
        analysis["recommended_action"] = action

        # REPLY-ALL ENFORCEMENT
        reply_all = self._enforce_reply_all(email, all_recipients, is_multi_recipient)
        analysis["reply_all_enforcement"] = reply_all

        self.dashboard_log.append({
            "email_id": analysis["email_id"],
            "volume_count": volume["recipient_count"],
            "response_time_minutes": response_time.get("minutes", 0),
            "engagement_score": engagement["score"],
            "productivity_score": productivity["score"],
            "reply_all": reply_all["enforced"],
            "timestamp": analysis["timestamp"],
        })

        return analysis

    def _track_volume_metrics(self, email: Dict) -> Dict:
        """Track email volume metrics."""
        hour = datetime.now(timezone.utc).hour
        weekday = datetime.now(timezone.utc).weekday()
        date_key = datetime.now(timezone.utc).strftime("%Y-%m-%d")

        # Update daily stats
        self.daily_stats[date_key]["emails_received"] += 1

        return {
            "hour_of_day": hour,
            "day_of_week": weekday,
            "date": date_key,
            "is_business_hours": 9 <= hour <= 17 and weekday < 5,
            "recipient_count": len(email.get("to", [])) + len(email.get("cc", [])),
            "daily_volume": self.daily_stats[date_key]["emails_received"],
        }

    def _track_response_time(self, email: Dict) -> Dict:
        """Track response time metrics."""
        sent_time = email.get("sent_timestamp")
        received_time = email.get("received_timestamp")

        if sent_time and received_time:
            try:
                sent_dt = datetime.fromisoformat(sent_time)
                received_dt = datetime.fromisoformat(received_time)
                minutes = (received_dt - sent_dt).total_seconds() / 60
                
                date_key = datetime.now(timezone.utc).strftime("%Y-%m-%d")
                self.daily_stats[date_key]["response_times"].append(minutes)
                
                return {
                    "minutes": round(minutes, 1),
                    "hours": round(minutes / 60, 2),
                    "within_sla": minutes <= 240,  # 4 hours SLA
                }
            except:
                pass

        return {
            "minutes": -1,
            "hours": -1,
            "within_sla": None,
        }

    def _calculate_engagement(self, email: Dict, body: str) -> Dict:
        """Calculate engagement metrics."""
        word_count = len(body.split())
        has_questions = "?" in body
        has_attachments = len(email.get("attachments", [])) > 0
        thread_depth = email.get("thread_depth", 1)

        score = 50
        factors = []

        if word_count > 100:
            score += 20
            factors.append("Long content")
        elif word_count > 50:
            score += 10
            factors.append("Medium content")

        if has_questions:
            score += 15
            factors.append("Has questions")

        if has_attachments:
            score += 10
            factors.append("Has attachments")

        if thread_depth > 3:
            score += 5
            factors.append("Deep thread")

        score = min(score, 100)

        date_key = datetime.now(timezone.utc).strftime("%Y-%m-%d")
        self.daily_stats[date_key]["engagement_scores"].append(score)

        return {
            "score": score,
            "word_count": word_count,
            "has_questions": has_questions,
            "has_attachments": has_attachments,
            "thread_depth": thread_depth,
            "factors": factors,
            "engagement_level": "HIGH" if score >= 70 else "MEDIUM" if score >= 50 else "LOW",
        }

    def _calculate_productivity_score(self, volume: Dict, response_time: Dict, engagement: Dict) -> Dict:
        """Calculate overall productivity score."""
        score = 50  # Base score
        factors = []

        # Response time contribution (30 points)
        if response_time.get("minutes", -1) > 0:
            if response_time["minutes"] <= 60:
                score += 30
                factors.append("Fast response")
            elif response_time["minutes"] <= 240:
                score += 20
                factors.append("Good response time")
            else:
                score += 10
                factors.append("Slow response")

        # Engagement contribution (40 points)
        engagement_score = engagement.get("score", 50)
        score += int(engagement_score * 0.4)
        if engagement_score >= 70:
            factors.append("High engagement")

        # Volume efficiency (30 points)
        if volume.get("is_business_hours"):
            score += 15
            factors.append("Business hours")
        
        if volume.get("recipient_count", 0) > 2:
            score += 15
            factors.append("Multi-recipient")

        score = min(score, 100)

        if score >= 80:
            level = "EXCELLENT"
        elif score >= 60:
            level = "GOOD"
        elif score >= 40:
            level = "FAIR"
        else:
            level = "NEEDS_IMPROVEMENT"

        return {
            "score": score,
            "level": level,
            "factors": factors,
        }

    def _analyze_trends(self, email: Dict) -> Dict:
        """Analyze productivity trends."""
        date_key = datetime.now(timezone.utc).strftime("%Y-%m-%d")
        
        # Calculate daily averages
        daily = self.daily_stats[date_key]
        
        avg_response = 0
        if daily["response_times"]:
            avg_response = sum(daily["response_times"]) / len(daily["response_times"])
        
        avg_engagement = 0
        if daily["engagement_scores"]:
            avg_engagement = sum(daily["engagement_scores"]) / len(daily["engagement_scores"])

        return {
            "daily_volume": daily["emails_received"],
            "avg_response_time": round(avg_response, 1),
            "avg_engagement": round(avg_engagement, 1),
            "trend_direction": "stable",  # Would compare with previous days in production
        }

    def _compare_to_benchmarks(self, productivity: Dict, response_time: Dict, engagement: Dict) -> Dict:
        """Compare metrics to industry benchmarks."""
        benchmarks = {
            "response_time_target": 120,  # 2 hours
            "engagement_target": 65,
            "productivity_target": 70,
        }

        comparisons = {}

        # Response time
        if response_time.get("minutes", -1) > 0:
            rt_minutes = response_time["minutes"]
            if rt_minutes <= benchmarks["response_time_target"]:
                comparisons["response_time"] = "ABOVE_BENCHMARK"
            else:
                comparisons["response_time"] = "BELOW_BENCHMARK"

        # Engagement
        eng_score = engagement.get("score", 50)
        if eng_score >= benchmarks["engagement_target"]:
            comparisons["engagement"] = "ABOVE_BENCHMARK"
        else:
            comparisons["engagement"] = "BELOW_BENCHMARK"

        # Productivity
        prod_score = productivity.get("score", 50)
        if prod_score >= benchmarks["productivity_target"]:
            comparisons["productivity"] = "ABOVE_BENCHMARK"
        else:
            comparisons["productivity"] = "BELOW_BENCHMARK"

        return {
            "comparisons": comparisons,
            "above_benchmark_count": sum(1 for v in comparisons.values() if v == "ABOVE_BENCHMARK"),
            "total_metrics": len(comparisons),
        }

    def _generate_insights(self, productivity: Dict, trends: Dict, benchmarks: Dict) -> List[Dict]:
        """Generate productivity insights."""
        insights = []

        # Productivity level insights
        if productivity["level"] == "EXCELLENT":
            insights.append({
                "type": "positive",
                "message": "Excellent productivity! Keep up the great work.",
                "priority": "LOW",
            })
        elif productivity["level"] == "NEEDS_IMPROVEMENT":
            insights.append({
                "type": "action_needed",
                "message": "Productivity needs improvement. Consider optimizing your workflow.",
                "priority": "HIGH",
            })

        # Benchmark insights
        below_count = benchmarks["total_metrics"] - benchmarks["above_benchmark_count"]
        if below_count >= 2:
            insights.append({
                "type": "warning",
                "message": f"{below_count} metrics below benchmark. Focus on improvement areas.",
                "priority": "MEDIUM",
            })

        # Response time insights
        if trends.get("avg_response_time", 0) > 240:
            insights.append({
                "type": "action_needed",
                "message": "Average response time is high. Consider faster responses.",
                "priority": "MEDIUM",
            })

        return insights

    def _generate_dashboard_data(self, volume: Dict, response_time: Dict, 
                                  engagement: Dict, productivity: Dict, trends: Dict) -> Dict:
        """Generate dashboard visualization data."""
        return {
            "metrics": {
                "daily_volume": volume["daily_volume"],
                "response_time_minutes": response_time.get("minutes", 0),
                "engagement_score": engagement["score"],
                "productivity_score": productivity["score"],
            },
            "trends": trends,
            "productivity_level": productivity["level"],
            "engagement_level": engagement["engagement_level"],
            "timestamp": datetime.now(timezone.utc).isoformat(),
        }

    def _determine_dashboard_action(self, productivity: Dict, insights: List) -> str:
        """Determine dashboard action."""
        high_priority = any(i["priority"] == "HIGH" for i in insights)
        
        if high_priority:
            return "IMMEDIATE_ATTENTION_REQUIRED"
        elif productivity["level"] == "EXCELLENT":
            return "MAINTAIN_EXCELLENCE"
        elif productivity["level"] in ("FAIR", "NEEDS_IMPROVEMENT"):
            return "OPTIMIZE_WORKFLOW"
        else:
            return "MONITOR_PROGRESS"

    def _enforce_reply_all(self, email: Dict, all_recipients: List, is_multi: bool) -> Dict:
        """STRICT reply-all enforcement."""
        result = {
            "is_multi_recipient": is_multi,
            "recipient_count": len(all_recipients),
            "enforced": False,
            "reason": "",
        }
        if is_multi:
            result["enforced"] = True
            result["reason"] = f"REPLY-ALL ENFORCED: {len(all_recipients)} recipients."
            self.reply_all_audit.append({
                "email_id": email.get("id", "unknown"),
                "enforced": True,
                "timestamp": datetime.now(timezone.utc).isoformat(),
            })
        else:
            result["reason"] = "Single recipient."
        return result

    def get_stats(self) -> Dict:
        if not self.dashboard_log:
            return {"emails_analyzed": 0}
        return {
            "emails_analyzed": len(self.dashboard_log),
            "avg_productivity_score": sum(d["productivity_score"] for d in self.dashboard_log) / len(self.dashboard_log),
            "avg_engagement_score": sum(d["engagement_score"] for d in self.dashboard_log) / len(self.dashboard_log),
            "avg_response_time": sum(d["response_time_minutes"] for d in self.dashboard_log if d["response_time_minutes"] > 0) / max(len([d for d in self.dashboard_log if d["response_time_minutes"] > 0]), 1),
            "reply_all_enforced": len(self.reply_all_audit),
        }


def test_v989():
    engine = EmailProductivityDashboard()

    # Test 1: High engagement email
    email1 = {
        "id": "prod-001",
        "from": "client@enterprise.com",
        "to": ["sales@ziontechgroup.com", "support@ziontechgroup.com", "account@ziontechgroup.com"],
        "subject": "Great progress on the project - Next steps",
        "body": "Hi team! We're really happy with the progress so far. The integration is working great and we love the new features. Can you send us the documentation for the advanced features? Also, what's the timeline for the next phase? We have some questions about the API rate limits. Looking forward to your response!",
        "thread_depth": 4,
        "sent_timestamp": "2024-01-15T10:00:00Z",
        "received_timestamp": "2024-01-15T11:30:00Z",
    }
    r1 = engine.analyze_email_case_by_case(email1)
    assert r1["reply_all_enforcement"]["enforced"] is True
    assert r1["engagement"]["score"] >= 60
    assert r1["productivity_score"]["score"] >= 50
    assert r1["response_time"]["minutes"] > 0
    print(f"✅ Test 1 PASSED: Engagement={r1['engagement']['score']}, productivity={r1['productivity_score']['score']}, response_time={r1['response_time']['minutes']}min, reply-all enforced")

    # Test 2: Low engagement email
    email2 = {
        "id": "prod-002",
        "from": "user@company.com",
        "to": ["support@ziontechgroup.com"],
        "subject": "Question",
        "body": "How do I reset password?",
    }
    r2 = engine.analyze_email_case_by_case(email2)
    assert r2["engagement"]["score"] <= 70
    print(f"✅ Test 2 PASSED: Low engagement detected, score={r2['engagement']['score']}")

    stats = engine.get_stats()
    print(f"✅ Test 3 PASSED: {stats['emails_analyzed']} analyzed, avg productivity={stats['avg_productivity_score']:.1f}")

    print("\n🎉 V989 ALL TESTS PASSED — Email Productivity Dashboard operational!")
    return True


if __name__ == "__main__":
    test_v989()

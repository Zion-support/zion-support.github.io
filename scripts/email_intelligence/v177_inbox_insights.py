#!/usr/bin/env python3
"""V177 - AI Email Inbox Insights Dashboard
Real-time analytics on email volume, response patterns, busiest contacts,
time allocation, and productivity metrics."""
import json, re
from datetime import datetime, timedelta
from typing import Dict, List, Any
from collections import defaultdict, Counter
import statistics

class InboxInsightsDashboard:
    def __init__(self):
        self.email_log = []
        self.response_times = defaultdict(list)
        self.hourly_volume = defaultdict(int)
        self.daily_volume = defaultdict(int)

    def log_email(self, email: Dict[str, Any], action: str = "received"):
        self.email_log.append({
            "timestamp": email.get("date", datetime.now().isoformat()),
            "from": email.get("from", ""), "subject": email.get("subject", ""),
            "action": action, "category": email.get("category", "general"),
            "response_time_hours": email.get("response_time_hours")
        })
        try:
            dt = datetime.fromisoformat(email.get("date", datetime.now().isoformat()))
            self.hourly_volume[dt.hour] += 1
            self.daily_volume[dt.strftime("%A")] += 1
        except: pass
        if email.get("response_time_hours"):
            self.response_times[email.get("from", "")].append(email["response_time_hours"])

    def generate_dashboard(self, days: int = 30) -> Dict[str, Any]:
        cutoff = datetime.now() - timedelta(days=days)
        recent = [e for e in self.email_log if self._parse_date(e["timestamp"]) >= cutoff]
        if not recent:
            return {"error": "No data in period"}
        volume = self._analyze_volume(recent)
        contacts = self._analyze_contacts(recent)
        categories = self._analyze_categories(recent)
        response = self._analyze_response_times(recent)
        time_alloc = self._analyze_time_allocation(recent)
        productivity = self._calculate_productivity(recent)
        return {
            "period_days": days, "total_emails": len(recent),
            "volume_analytics": volume, "top_contacts": contacts,
            "category_breakdown": categories, "response_analytics": response,
            "time_allocation": time_alloc, "productivity_score": productivity,
            "insights": self._generate_insights(volume, contacts, response, productivity),
            "reply_all_rate": self._calculate_reply_all_rate(recent)
        }

    def _parse_date(self, ts: str) -> datetime:
        try: return datetime.fromisoformat(ts)
        except: return datetime.now()

    def _analyze_volume(self, emails: List) -> Dict:
        days = set(e["timestamp"][:10] for e in emails)
        return {
            "total": len(emails), "avg_per_day": round(len(emails) / max(len(days), 1), 1),
            "peak_hour": max(self.hourly_volume, key=self.hourly_volume.get) if self.hourly_volume else None,
            "peak_day": max(self.daily_volume, key=self.daily_volume.get) if self.daily_volume else None,
            "hourly_distribution": dict(sorted(self.hourly_volume.items())),
            "daily_distribution": dict(self.daily_volume)
        }

    def _analyze_contacts(self, emails: List) -> List[Dict]:
        counts = Counter(e["from"] for e in emails)
        return [{"contact": c, "email_count": n, "pct": round(n / len(emails) * 100, 1)} for c, n in counts.most_common(10)]

    def _analyze_categories(self, emails: List) -> Dict:
        counts = Counter(e.get("category", "general") for e in emails)
        total = len(emails)
        return {cat: {"count": n, "pct": round(n / total * 100, 1)} for cat, n in counts.most_common()}

    def _analyze_response_times(self, emails: List) -> Dict:
        times = [e["response_time_hours"] for e in emails if e.get("response_time_hours")]
        if not times:
            return {"avg_hours": None, "data_points": 0}
        return {
            "avg_hours": round(statistics.mean(times), 1),
            "median_hours": round(statistics.median(times), 1),
            "fastest_hours": round(min(times), 1),
            "slowest_hours": round(max(times), 1),
            "data_points": len(times)
        }

    def _analyze_time_allocation(self, emails: List) -> Dict:
        cat_times = defaultdict(int)
        for e in emails:
            cat = e.get("category", "general")
            cat_times[cat] += 1
        total = sum(cat_times.values())
        return {cat: {"emails": n, "time_pct": round(n / total * 100, 1)} for cat, n in sorted(cat_times.items(), key=lambda x: x[1], reverse=True)}

    def _calculate_productivity(self, emails: List) -> Dict:
        processed = sum(1 for e in emails if e["action"] in ["replied", "archived", "deleted"])
        replied = sum(1 for e in emails if e["action"] == "replied")
        rate = processed / max(len(emails), 1)
        score = min(100, round(rate * 100))
        return {"score": score, "processed_rate": round(rate * 100, 1), "reply_rate": round(replied / max(len(emails), 1) * 100, 1), "grade": "A" if score >= 80 else "B" if score >= 60 else "C" if score >= 40 else "D"}

    def _generate_insights(self, volume, contacts, response, productivity) -> List[str]:
        insights = []
        if volume["avg_per_day"] > 50:
            insights.append("High email volume — consider delegation or filtering rules.")
        if response.get("avg_hours") and response["avg_hours"] > 24:
            insights.append("Average response time exceeds 24h — consider faster triage.")
        if productivity["score"] >= 80:
            insights.append("Excellent productivity! You're processing emails efficiently.")
        if contacts and contacts[0]["pct"] > 30:
            insights.append(f"{contacts[0]['pct']}% of emails from {contacts[0]['contact']} — consider dedicated channel.")
        return insights or ["Email patterns look healthy. Keep up the good work!"]

    def _calculate_reply_all_rate(self, emails: List) -> float:
        reply_all = sum(1 for e in emails if e.get("reply_all", False))
        return round(reply_all / max(len(emails), 1) * 100, 1)

if __name__ == "__main__":
    dashboard = InboxInsightsDashboard()
    for i in range(50):
        dashboard.log_email({"from": f"contact{i%5}@company.com", "subject": f"Email {i}", "category": ["support", "sales", "internal"][i%3], "date": (datetime.now() - timedelta(hours=i*2)).isoformat(), "response_time_hours": (i % 12) + 1, "reply_all": i % 3 == 0}, "replied")
    result = dashboard.generate_dashboard(days=7)
    print(json.dumps(result, indent=2))

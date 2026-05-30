"""
V376 - Email Relationship Health Monitor
Track communication frequency, response reciprocity, engagement trends per contact.
Score relationship health 1-100. Identify at-risk relationships before they deteriorate.
"""
import json
from datetime import datetime, timedelta
from collections import defaultdict
from typing import Dict, List, Optional


class EmailRelationshipHealthMonitor:
    """Monitor and score email relationship health per contact."""

    def __init__(self):
        self.contacts = defaultdict(lambda: {
            "sent_count": 0,
            "received_count": 0,
            "response_count": 0,
            "response_times": [],
            "last_interaction": None,
            "interaction_dates": [],
            "engagement_scores": [],
        })
        self.health_thresholds = {
            "at_risk": 30,
            "needs_attention": 50,
            "healthy": 70,
            "excellent": 90,
        }

    def ingest_email(self, email: Dict) -> None:
        """Process an email and update contact metrics."""
        sender = email.get("sender", "")
        recipients = email.get("recipients", [])
        timestamp = email.get("timestamp", "")
        is_reply = email.get("is_reply", False)

        for contact in recipients:
            self.contacts[contact]["received_count"] += 1
            if timestamp:
                self.contacts[contact]["interaction_dates"].append(timestamp)
                self.contacts[contact]["last_interaction"] = timestamp
            if is_reply:
                self.contacts[contact]["response_count"] += 1

        if sender:
            self.contacts[sender]["sent_count"] += 1
            if timestamp:
                self.contacts[sender]["interaction_dates"].append(timestamp)
                self.contacts[sender]["last_interaction"] = timestamp

    def calculate_frequency_score(self, contact_data: Dict) -> float:
        """Score based on communication frequency."""
        dates = sorted(contact_data.get("interaction_dates", []))
        if len(dates) < 2:
            return 30.0
        total = contact_data["sent_count"] + contact_data["received_count"]
        return min(100.0, total * 5.0)

    def calculate_reciprocity_score(self, contact_data: Dict) -> float:
        """Score based on response reciprocity."""
        sent = contact_data.get("sent_count", 0)
        responses = contact_data.get("response_count", 0)
        if sent == 0:
            return 50.0
        ratio = responses / sent
        return min(100.0, ratio * 100.0)

    def calculate_recency_score(self, contact_data: Dict) -> float:
        """Score based on how recent the last interaction was."""
        last = contact_data.get("last_interaction")
        if not last:
            return 0.0
        try:
            last_dt = datetime.fromisoformat(last)
            days_ago = (datetime.now() - last_dt).days
            if days_ago <= 3:
                return 100.0
            elif days_ago <= 7:
                return 80.0
            elif days_ago <= 14:
                return 60.0
            elif days_ago <= 30:
                return 40.0
            else:
                return max(0.0, 40.0 - (days_ago - 30) * 0.5)
        except Exception:
            return 50.0

    def score_contact(self, contact: str) -> Dict:
        """Compute composite health score for a contact."""
        data = self.contacts[contact]
        freq = self.calculate_frequency_score(data)
        recip = self.calculate_reciprocity_score(data)
        recency = self.calculate_recency_score(data)

        composite = (freq * 0.35 + recip * 0.35 + recency * 0.30)
        composite = max(1.0, min(100.0, composite))

        if composite < self.health_thresholds["at_risk"]:
            status = "at_risk"
        elif composite < self.health_thresholds["needs_attention"]:
            status = "needs_attention"
        elif composite < self.health_thresholds["excellent"]:
            status = "healthy"
        else:
            status = "excellent"

        return {
            "contact": contact,
            "health_score": round(composite, 1),
            "status": status,
            "breakdown": {
                "frequency_score": round(freq, 1),
                "reciprocity_score": round(recip, 1),
                "recency_score": round(recency, 1),
            },
            "stats": {
                "total_sent": data["sent_count"],
                "total_received": data["received_count"],
                "responses_received": data["response_count"],
                "last_interaction": data.get("last_interaction"),
            },
        }

    def identify_at_risk(self, threshold: float = 30.0) -> List[Dict]:
        """Identify contacts with deteriorating relationships."""
        at_risk = []
        for contact in self.contacts:
            score_data = self.score_contact(contact)
            if score_data["health_score"] <= threshold:
                at_risk.append({
                    **score_data,
                    "recommended_action": "Reach out with a friendly check-in or value-add message",
                    "urgency": "high" if score_data["health_score"] < 15 else "medium",
                })
        return sorted(at_risk, key=lambda x: x["health_score"])

    def generate_report(self, recipients: List[str]) -> Dict:
        """Generate full relationship health report."""
        enforce_reply_all = len(recipients) > 1
        all_scores = [self.score_contact(c) for c in self.contacts]
        at_risk = self.identify_at_risk()

        return {
            "engine": "V376 - Email Relationship Health Monitor",
            "timestamp": datetime.now().isoformat(),
            "total_contacts_monitored": len(self.contacts),
            "reply_all_required": enforce_reply_all,
            "reply_all_enforced": enforce_reply_all,
            "overall_health_avg": round(
                sum(s["health_score"] for s in all_scores) / max(len(all_scores), 1), 1
            ),
            "relationship_scores": all_scores,
            "at_risk_contacts": at_risk,
            "distribution": {
                "excellent": sum(1 for s in all_scores if s["status"] == "excellent"),
                "healthy": sum(1 for s in all_scores if s["status"] == "healthy"),
                "needs_attention": sum(1 for s in all_scores if s["status"] == "needs_attention"),
                "at_risk": sum(1 for s in all_scores if s["status"] == "at_risk"),
            },
        }


def main():
    monitor = EmailRelationshipHealthMonitor()

    now = datetime.now()
    sample_emails = [
        {
            "sender": "alice@company.com",
            "recipients": ["bob@partner.com", "carol@vendor.com"],
            "timestamp": (now - timedelta(days=1)).isoformat(),
            "is_reply": False,
            "subject": "Q3 Partnership Review",
        },
        {
            "sender": "bob@partner.com",
            "recipients": ["alice@company.com"],
            "timestamp": (now - timedelta(days=1, hours=2)).isoformat(),
            "is_reply": True,
            "subject": "Re: Q3 Partnership Review",
        },
        {
            "sender": "alice@company.com",
            "recipients": ["dave@client.com"],
            "timestamp": (now - timedelta(days=45)).isoformat(),
            "is_reply": False,
            "subject": "Follow-up on proposal",
        },
        {
            "sender": "carol@vendor.com",
            "recipients": ["alice@company.com", "bob@partner.com"],
            "timestamp": (now - timedelta(days=2)).isoformat(),
            "is_reply": True,
            "subject": "Re: Q3 Partnership Review",
        },
        {
            "sender": "alice@company.com",
            "recipients": ["eve@stakeholder.com"],
            "timestamp": (now - timedelta(days=90)).isoformat(),
            "is_reply": False,
            "subject": "Annual planning sync",
        },
        {
            "sender": "alice@company.com",
            "recipients": ["frank@team.com"],
            "timestamp": (now - timedelta(hours=6)).isoformat(),
            "is_reply": False,
            "subject": "Sprint planning notes",
        },
        {
            "sender": "frank@team.com",
            "recipients": ["alice@company.com"],
            "timestamp": (now - timedelta(hours=5)).isoformat(),
            "is_reply": True,
            "subject": "Re: Sprint planning notes",
        },
    ]

    recipients_list = ["bob@partner.com", "carol@vendor.com", "dave@client.com"]

    for email in sample_emails:
        monitor.ingest_email(email)

    report = monitor.generate_report(recipients=recipients_list)
    print(json.dumps(report, indent=2))


if __name__ == "__main__":
    main()

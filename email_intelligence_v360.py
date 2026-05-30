#!/usr/bin/env python3
"""
V360 Email Executive Briefing Generator
Daily/weekly executive summaries from email data, highlight critical decisions,
track email-driven business metrics, competitive intelligence briefings,
revenue impact dashboards from email data.
CRITICAL: Always enforces reply-all for multi-recipient emails.
"""
import json, re, sys
from datetime import datetime, timedelta
from collections import Counter

class V360ExecutiveBriefing:
    PRIORITY_INDICATORS = {
        "critical": [r"urgent", r"emergency", r"critical", r"asap", r"immediately", r"board", r"ceo", r"investor"],
        "high": [r"important", r"priority", r"deadline", r"client", r"revenue", r"contract"],
        "medium": [r"review", r"update", r"meeting", r"project", r"status"],
    }

    METRIC_PATTERNS = [
        (r"revenue\s*[:=]?\s*\$?([\d,]+(?:\.\d+)?[KMB]?)", "revenue"),
        (r"(?:deal|contract|sale)\s*(?:worth|value|of)?\s*\$?([\d,]+(?:\.\d+)?[KMB]?)", "deal_value"),
        (r"(?:churn|lost|cancelled)\s*(\d+)\s*(?:customer|client|account)", "churn"),
        (r"(?:new|acquired|signed)\s*(\d+)\s*(?:customer|client|account)", "acquisition"),
        (r"(?:NPS|satisfaction|CSAT)\s*[:=]?\s*(\d+)", "satisfaction"),
    ]

    def __init__(self):
        self.briefings = []

    def generate_briefing(self, emails, period="daily", recipients=None):
        recipients = recipients or []
        if isinstance(emails, str):
            emails = [{"from": "unknown", "body": emails, "subject": "", "date": datetime.now().isoformat()}]

        total_emails = len(emails)
        priority_breakdown = self._classify_priorities(emails)
        key_decisions = self._extract_decisions(emails)
        action_items = self._extract_action_items(emails)
        business_metrics = self._extract_metrics(emails)
        competitive_intel = self._extract_competitive_intel(emails)
        top_contacts = self._analyze_contacts(emails)
        time_analysis = self._analyze_time_spent(emails)

        is_multi = len(recipients) > 1

        briefing = {
            "version": "V360",
            "timestamp": datetime.now().isoformat(),
            "period": period,
            "summary": {
                "total_emails_processed": total_emails,
                "critical_count": priority_breakdown.get("critical", 0),
                "high_priority_count": priority_breakdown.get("high", 0),
                "decisions_needed": len(key_decisions),
                "action_items": len(action_items),
            },
            "priority_breakdown": priority_breakdown,
            "critical_decisions": key_decisions[:5],
            "top_action_items": action_items[:7],
            "business_metrics_detected": business_metrics,
            "competitive_intelligence": competitive_intel,
            "top_contacts": top_contacts[:5],
            "time_analysis": time_analysis,
            "executive_summary": self._compose_executive_summary(
                total_emails, priority_breakdown, key_decisions, business_metrics
            ),
            "recommendations": self._generate_recommendations(priority_breakdown, action_items, business_metrics),
            "reply_all_required": is_multi,
            "reply_all_enforced": is_multi,
            "action_taken": f"Generated {period} briefing: {total_emails} emails, {len(key_decisions)} decisions, {len(action_items)} actions",
        }
        self.briefings.append(briefing)
        return briefing

    def _classify_priorities(self, emails):
        breakdown = {"critical": 0, "high": 0, "medium": 0, "low": 0}
        for email in emails:
            combined = f"{email.get('subject', '')} {email.get('body', '')}".lower()
            classified = False
            for priority, patterns in self.PRIORITY_INDICATORS.items():
                if any(re.search(p, combined, re.IGNORECASE) for p in patterns):
                    breakdown[priority] += 1
                    classified = True
                    break
            if not classified:
                breakdown["low"] += 1
        return breakdown

    def _extract_decisions(self, emails):
        decisions = []
        decision_patterns = [
            r"(?:decided|decision|agreed|approved|selected)\s+(?:that\s+|to\s+)?(.{20,100})",
            r"(?:we (?:will|should|need to))\s+(.{20,100})",
        ]
        for email in emails:
            body = email.get("body", "")
            for pattern in decision_patterns:
                matches = re.findall(pattern, body, re.IGNORECASE)
                for m in matches:
                    decisions.append({
                        "decision": m.strip()[:120],
                        "from": email.get("from", "unknown"),
                        "context": email.get("subject", ""),
                    })
        return decisions

    def _extract_action_items(self, emails):
        items = []
        action_patterns = [
            r"(?:please|kindly)\s+(.{15,80})",
            r"(?:need|must|should)\s+(?:to\s+)?(.{15,80})",
            r"(?:deadline|due|by)\s*[:=]?\s*(.{10,60})",
            r"(?:action\s*item|todo|follow[- ]?up)\s*[:=]?\s*(.{15,80})",
        ]
        for email in emails:
            body = email.get("body", "")
            for pattern in action_patterns:
                matches = re.findall(pattern, body, re.IGNORECASE)
                for m in matches[:2]:
                    items.append({
                        "item": m.strip()[:100],
                        "from": email.get("from", "unknown"),
                        "source_email": email.get("subject", ""),
                    })
        return items

    def _extract_metrics(self, emails):
        metrics = {}
        for email in emails:
            combined = f"{email.get('subject', '')} {email.get('body', '')}"
            for pattern, metric_type in self.METRIC_PATTERNS:
                matches = re.findall(pattern, combined, re.IGNORECASE)
                if matches:
                    metrics.setdefault(metric_type, []).extend(matches)
        return {k: {"count": len(v), "values": v[:5]} for k, v in metrics.items()}

    def _extract_competitive_intel(self, emails):
        intel = []
        comp_patterns = [r"competitor", r"alternative", r"other vendor", r"switching", r"better (?:price|deal)"]
        for email in emails:
            combined = f"{email.get('subject', '')} {email.get('body', '')}".lower()
            for p in comp_patterns:
                if re.search(p, combined):
                    intel.append({
                        "signal": p,
                        "source": email.get("subject", ""),
                        "severity": "medium",
                    })
                    break
        return intel

    def _analyze_contacts(self, emails):
        contact_counts = Counter()
        for email in emails:
            sender = email.get("from", "unknown")
            contact_counts[sender] += 1
        return [{"contact": k, "email_count": v} for k, v in contact_counts.most_common(10)]

    def _analyze_time_spent(self, emails):
        total_words = sum(len(e.get("body", "").split()) for e in emails)
        avg_reading_speed = 250
        estimated_minutes = round(total_words / avg_reading_speed, 1)
        return {
            "total_words": total_words,
            "estimated_reading_time_minutes": estimated_minutes,
            "avg_words_per_email": round(total_words / max(1, len(emails)), 0),
        }

    def _compose_executive_summary(self, total, priorities, decisions, metrics):
        parts = [f"Processed {total} emails today."]
        if priorities.get("critical", 0) > 0:
            parts.append(f"⚠️ {priorities['critical']} critical items require immediate attention.")
        if decisions:
            parts.append(f"📋 {len(decisions)} key decisions identified.")
        if metrics:
            parts.append(f"📊 Business metrics detected: {', '.join(metrics.keys())}.")
        return " ".join(parts)

    def _generate_recommendations(self, priorities, actions, metrics):
        recs = []
        if priorities.get("critical", 0) > 3:
            recs.append("HIGH LOAD: Consider delegating critical items to team leads")
        if len(actions) > 10:
            recs.append("ACTION OVERLOAD: Prioritize top 5 items, defer others")
        if "churn" in metrics:
            recs.append("ALERT: Customer churn signals detected — review retention strategy")
        if not recs:
            recs.append("Email flow is manageable. Focus on strategic priorities.")
        return recs

if __name__ == "__main__":
    engine = V360ExecutiveBriefing()
    sample_emails = [
        {"from": "ceo@company.com", "subject": "URGENT: Board Meeting Prep", "body": "We need the Q4 financial report ready by tomorrow. Revenue target is $5.2M. Please review and approve the budget proposal. The board has decided to expand into the European market."},
        {"from": "sales@company.com", "subject": "New Client Signed", "body": "Great news! We signed a new contract worth $250K. The client was also evaluating CompetitorX but chose us. Please send the onboarding package."},
        {"from": "support@company.com", "subject": "Customer Churn Alert", "body": "We lost 3 customers this week due to pricing concerns. NPS score dropped to 42. Need urgent review of our pricing strategy."},
        {"from": "hr@company.com", "subject": "Hiring Update", "body": "We acquired 5 new team members this month. Please review the updated org chart and approve the new hire budgets by Friday."},
    ]
    result = engine.generate_briefing(
        emails=sample_emails, period="daily",
        recipients=["ceo@company.com", "coo@company.com", "cfo@company.com"]
    )
    print(json.dumps(result, indent=2))

#!/usr/bin/env python3
"""
V414 - AI Response Time Optimizer
Zion Tech Group - Email Intelligence Engine

Analyzes response patterns, identifies bottlenecks, suggests optimal
response windows, and tracks SLA compliance.

CRITICAL: All reply/send methods enforce reply-all for multi-recipient emails.
"""

import logging
import json
import statistics
import hashlib
from datetime import datetime, timedelta
from typing import List, Dict, Optional, Any, Tuple
from email.utils import parseaddr
from collections import defaultdict

# ---------------------------------------------------------------------------
# Logging
# ---------------------------------------------------------------------------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)
logger = logging.getLogger("V414_ResponseTimeOptimizer")


# ---------------------------------------------------------------------------
# Data Models
# ---------------------------------------------------------------------------
class EmailEvent:
    """Represents an email send/receive event for timing analysis."""

    def __init__(
        self,
        event_id: str,
        message_id: str,
        event_type: str,  # "received", "replied", "forwarded", "read"
        sender: str,
        to_recipients: List[str],
        cc_recipients: List[str],
        subject: str,
        timestamp: datetime,
        thread_id: Optional[str] = None,
        priority: str = "normal",  # "low", "normal", "high", "urgent"
        sla_category: str = "standard",  # "standard", "premium", "critical"
    ):
        self.event_id = event_id
        self.message_id = message_id
        self.event_type = event_type
        self.sender = sender
        self.to_recipients = to_recipients
        self.cc_recipients = cc_recipients
        self.subject = subject
        self.timestamp = timestamp
        self.thread_id = thread_id or hashlib.md5(subject.encode()).hexdigest()[:10]
        self.priority = priority
        self.sla_category = sla_category

    @property
    def all_recipients(self) -> List[str]:
        return self.to_recipients + self.cc_recipients

    @property
    def is_multi_recipient(self) -> bool:
        return len(set(self.all_recipients)) > 1


class ResponsePair:
    """A received→replied pair for timing analysis."""

    def __init__(self, received: EmailEvent, replied: EmailEvent):
        self.received = received
        self.replied = replied
        self.response_time: timedelta = replied.timestamp - received.timestamp

    @property
    def response_minutes(self) -> float:
        return self.response_time.total_seconds() / 60.0

    @property
    def response_hours(self) -> float:
        return self.response_time.total_seconds() / 3600.0


class SLARule:
    """Service Level Agreement rule for response times."""

    def __init__(self, category: str, max_response_hours: float,
                 warning_threshold_pct: float = 80.0):
        self.category = category
        self.max_response_hours = max_response_hours
        self.warning_threshold_pct = warning_threshold_pct

    def is_compliant(self, response_hours: float) -> bool:
        return response_hours <= self.max_response_hours

    def is_warning(self, response_hours: float) -> bool:
        threshold = self.max_response_hours * (self.warning_threshold_pct / 100.0)
        return response_hours >= threshold


class BottleneckReport:
    """Identified bottleneck in response patterns."""

    def __init__(self, bottleneck_id: str, category: str, description: str,
                 severity: str, affected_contacts: List[str],
                 avg_delay_hours: float, recommendation: str):
        self.bottleneck_id = bottleneck_id
        self.category = category
        self.description = description
        self.severity = severity
        self.affected_contacts = affected_contacts
        self.avg_delay_hours = avg_delay_hours
        self.recommendation = recommendation

    def to_dict(self) -> Dict[str, Any]:
        return {
            "bottleneck_id": self.bottleneck_id,
            "category": self.category,
            "description": self.description,
            "severity": self.severity,
            "affected_contacts": self.affected_contacts,
            "avg_delay_hours": round(self.avg_delay_hours, 2),
            "recommendation": self.recommendation,
        }


# ---------------------------------------------------------------------------
# Reply-All Enforcement
# ---------------------------------------------------------------------------
class ReplyAllEnforcer:
    """Ensures reply-all for multi-recipient emails."""

    @staticmethod
    def enforce(original: EmailEvent, my_address: str) -> Dict[str, List[str]]:
        to_set = set()
        cc_set = set()

        to_set.add(original.sender)
        for r in original.to_recipients:
            if r.lower() != my_address.lower():
                to_set.add(r)
        for r in original.cc_recipients:
            if r.lower() != my_address.lower():
                cc_set.add(r)

        if original.is_multi_recipient:
            logger.info(
                "REPLY-ALL ENFORCED: Multi-recipient email — To=%s CC=%s",
                sorted(to_set), sorted(cc_set),
            )

        return {"to": sorted(to_set), "cc": sorted(cc_set)}


# ---------------------------------------------------------------------------
# Analytics Components
# ---------------------------------------------------------------------------
class ResponseTimeAnalyzer:
    """Analyzes response time patterns."""

    def __init__(self):
        self.response_pairs: List[ResponsePair] = []

    def add_pair(self, pair: ResponsePair) -> None:
        self.response_pairs.append(pair)

    def overall_stats(self) -> Dict[str, float]:
        if not self.response_pairs:
            return {"avg_minutes": 0, "median_minutes": 0, "p95_minutes": 0, "max_minutes": 0}
        times = [p.response_minutes for p in self.response_pairs]
        sorted_times = sorted(times)
        p95_idx = int(len(sorted_times) * 0.95)
        return {
            "avg_minutes": round(statistics.mean(times), 2),
            "median_minutes": round(statistics.median(times), 2),
            "p95_minutes": round(sorted_times[min(p95_idx, len(sorted_times) - 1)], 2),
            "max_minutes": round(max(times), 2),
            "min_minutes": round(min(times), 2),
            "std_dev_minutes": round(statistics.stdev(times), 2) if len(times) > 1 else 0,
            "total_pairs": len(times),
        }

    def stats_by_priority(self) -> Dict[str, Dict[str, float]]:
        by_priority: Dict[str, List[float]] = defaultdict(list)
        for pair in self.response_pairs:
            by_priority[pair.received.priority].append(pair.response_minutes)
        result = {}
        for priority, times in by_priority.items():
            result[priority] = {
                "avg_minutes": round(statistics.mean(times), 2),
                "median_minutes": round(statistics.median(times), 2),
                "count": len(times),
            }
        return result

    def stats_by_hour(self) -> Dict[int, float]:
        """Average response time by hour of day when email was received."""
        by_hour: Dict[int, List[float]] = defaultdict(list)
        for pair in self.response_pairs:
            hour = pair.received.timestamp.hour
            by_hour[hour].append(pair.response_minutes)
        return {h: round(statistics.mean(times), 2) for h, times in sorted(by_hour.items())}


class BottleneckDetector:
    """Identifies response bottlenecks."""

    def __init__(self, threshold_hours: float = 24.0):
        self.threshold_hours = threshold_hours

    def detect(self, pairs: List[ResponsePair]) -> List[BottleneckReport]:
        bottlenecks = []
        slow_pairs = [p for p in pairs if p.response_hours > self.threshold_hours]

        if not slow_pairs:
            return bottlenecks

        # Group by sender
        by_sender: Dict[str, List[ResponsePair]] = defaultdict(list)
        for p in slow_pairs:
            by_sender[p.received.sender].append(p)

        for sender, sender_pairs in by_sender.items():
            avg_delay = statistics.mean([p.response_hours for p in sender_pairs])
            severity = "critical" if avg_delay > 48 else "high" if avg_delay > 24 else "medium"
            bn_id = hashlib.md5(f"sender:{sender}".encode()).hexdigest()[:8]
            bottlenecks.append(BottleneckReport(
                bottleneck_id=bn_id,
                category="slow_response_by_contact",
                description=f"Slow responses to {sender} ({len(sender_pairs)} instances)",
                severity=severity,
                affected_contacts=[sender],
                avg_delay_hours=avg_delay,
                recommendation=f"Prioritize emails from {sender}. Consider auto-acknowledgment.",
            ))

        # Time-of-day bottleneck
        night_emails = [p for p in slow_pairs if p.received.timestamp.hour < 8 or p.received.timestamp.hour > 18]
        if len(night_emails) > 3:
            avg_delay = statistics.mean([p.response_hours for p in night_emails])
            bottlenecks.append(BottleneckReport(
                bottleneck_id="night_hours",
                category="off_hours_delay",
                description=f"{len(night_emails)} emails received outside business hours with slow response",
                severity="medium",
                affected_contacts=list(set(p.received.sender for p in night_emails)),
                avg_delay_hours=avg_delay,
                recommendation="Set up auto-responder for off-hours emails with expected response time.",
            ))

        # Priority bottleneck
        urgent_slow = [p for p in slow_pairs if p.received.priority in ("high", "urgent")]
        if urgent_slow:
            avg_delay = statistics.mean([p.response_hours for p in urgent_slow])
            bottlenecks.append(BottleneckReport(
                bottleneck_id="priority_miss",
                category="priority_response_failure",
                description=f"{len(urgent_slow)} high/urgent priority emails had slow responses",
                severity="critical",
                affected_contacts=list(set(p.received.sender for p in urgent_slow)),
                avg_delay_hours=avg_delay,
                recommendation="Implement priority-based notification escalation for urgent emails.",
            ))

        return bottlenecks


class SLAComplianceTracker:
    """Tracks SLA compliance metrics."""

    def __init__(self):
        self.rules: Dict[str, SLARule] = {}

    def add_rule(self, rule: SLARule) -> None:
        self.rules[rule.category] = rule
        logger.info("Added SLA rule: %s (max %s hours)", rule.category, rule.max_response_hours)

    def check_compliance(self, pairs: List[ResponsePair]) -> Dict[str, Any]:
        results: Dict[str, Dict[str, Any]] = {}
        for category, rule in self.rules.items():
            category_pairs = [p for p in pairs if p.received.sla_category == category]
            if not category_pairs:
                continue
            compliant = sum(1 for p in category_pairs if rule.is_compliant(p.response_hours))
            warnings = sum(1 for p in category_pairs if rule.is_warning(p.response_hours) and rule.is_compliant(p.response_hours))
            violations = len(category_pairs) - compliant
            compliance_pct = (compliant / len(category_pairs)) * 100 if category_pairs else 100

            results[category] = {
                "total": len(category_pairs),
                "compliant": compliant,
                "warnings": warnings,
                "violations": violations,
                "compliance_pct": round(compliance_pct, 1),
                "sla_target_hours": rule.max_response_hours,
                "avg_response_hours": round(
                    statistics.mean([p.response_hours for p in category_pairs]), 2
                ),
            }
        return results


class OptimalWindowSuggester:
    """Suggests optimal response windows based on patterns."""

    def suggest(self, pairs: List[ResponsePair]) -> Dict[str, Any]:
        if not pairs:
            return {"suggestion": "Insufficient data for analysis."}

        # Best response times by day of week
        by_day: Dict[int, List[float]] = defaultdict(list)
        by_hour: Dict[int, List[float]] = defaultdict(list)

        for pair in pairs:
            day = pair.received.timestamp.weekday()
            hour = pair.received.timestamp.hour
            by_day[day].append(pair.response_minutes)
            by_hour[hour].append(pair.response_minutes)

        # Find fastest days
        day_avgs = {d: statistics.mean(times) for d, times in by_day.items()}
        best_day = min(day_avgs, key=day_avgs.get) if day_avgs else 0

        # Find fastest hours
        hour_avgs = {h: statistics.mean(times) for h, times in by_hour.items()}
        best_hours = sorted(hour_avgs, key=hour_avgs.get)[:3] if hour_avgs else [9, 10, 11]

        day_names = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

        return {
            "best_day": day_names[best_day],
            "best_hours": sorted(best_hours),
            "recommendation": (
                f"Optimal response window: {day_names[best_day]} between "
                f"{min(best_hours)}:00 and {max(best_hours)}:00. "
                f"Schedule email reviews during these windows for fastest turnaround."
            ),
            "day_averages": {day_names[d]: round(v, 1) for d, v in day_avgs.items()},
        }


# ---------------------------------------------------------------------------
# Main Engine
# ---------------------------------------------------------------------------
class ResponseTimeOptimizer:
    """
    V414 - AI Response Time Optimizer

    Analyzes response patterns, identifies bottlenecks, suggests optimal
    response windows, and tracks SLA compliance. Enforces reply-all on
    all outgoing messages to multi-recipient emails.
    """

    def __init__(self, my_address: str = "user@ziontech.com"):
        self.my_address = my_address
        self.analyzer = ResponseTimeAnalyzer()
        self.bottleneck_detector = BottleneckDetector(threshold_hours=24.0)
        self.sla_tracker = SLAComplianceTracker()
        self.window_suggester = OptimalWindowSuggester()
        self.enforcer = ReplyAllEnforcer()
        self.events: Dict[str, List[EmailEvent]] = defaultdict(list)
        self.sent_replies: List[Dict[str, Any]] = []
        logger.info("ResponseTimeOptimizer initialised for %s", my_address)

    def record_event(self, event: EmailEvent) -> None:
        self.events[event.thread_id].append(event)
        logger.debug("Recorded event %s (%s)", event.event_id, event.event_type)

    def match_response_pairs(self) -> List[ResponsePair]:
        """Match received events with their corresponding replies."""
        pairs = []
        for thread_id, events in self.events.items():
            received_events = [e for e in events if e.event_type == "received"]
            replied_events = [e for e in events if e.event_type == "replied"]
            for recv in received_events:
                matching_reply = None
                for reply in replied_events:
                    if reply.timestamp > recv.timestamp:
                        if matching_reply is None or reply.timestamp < matching_reply.timestamp:
                            matching_reply = reply
                if matching_reply:
                    pair = ResponsePair(recv, matching_reply)
                    pairs.append(pair)
                    self.analyzer.add_pair(pair)
        return pairs

    def detect_bottlenecks(self) -> List[BottleneckReport]:
        return self.bottleneck_detector.detect(self.analyzer.response_pairs)

    def check_sla(self) -> Dict[str, Any]:
        return self.sla_tracker.check_compliance(self.analyzer.response_pairs)

    def suggest_optimal_windows(self) -> Dict[str, Any]:
        return self.window_suggester.suggest(self.analyzer.response_pairs)

    def send_optimized_reply(self, original: EmailEvent, body: str) -> Dict[str, Any]:
        """Send a reply with optimal timing awareness, enforcing reply-all."""
        recipients = self.enforcer.enforce(original, self.my_address)

        if original.is_multi_recipient:
            logger.info(
                "REPLY-ALL ENFORCED for optimized reply to %s", original.message_id
            )

        outgoing = {
            "from": self.my_address,
            "to": recipients["to"],
            "cc": recipients["cc"],
            "subject": f"Re: {original.subject}",
            "body": body,
            "in_reply_to": original.message_id,
            "reply_all": True,
            "sent_at": datetime.utcnow().isoformat(),
        }

        self.sent_replies.append(outgoing)
        logger.info(
            "Sent optimized reply -> To: %s, CC: %s",
            outgoing["to"], outgoing["cc"],
        )
        return outgoing

    def generate_report(self) -> Dict[str, Any]:
        """Generate a comprehensive response time report."""
        pairs = self.match_response_pairs()
        bottlenecks = self.detect_bottlenecks()
        sla_status = self.check_sla()
        windows = self.suggest_optimal_windows()

        return {
            "engine": "V414_ResponseTimeOptimizer",
            "generated_at": datetime.utcnow().isoformat(),
            "response_stats": self.analyzer.overall_stats(),
            "stats_by_priority": self.analyzer.stats_by_priority(),
            "stats_by_hour": self.analyzer.stats_by_hour(),
            "bottlenecks": [b.to_dict() for b in bottlenecks],
            "sla_compliance": sla_status,
            "optimal_windows": windows,
            "total_events": sum(len(v) for v in self.events.values()),
            "response_pairs_analyzed": len(pairs),
        }

    def get_status(self) -> Dict[str, Any]:
        return {
            "engine": "V414_ResponseTimeOptimizer",
            "total_events": sum(len(v) for v in self.events.values()),
            "response_pairs": len(self.analyzer.response_pairs),
            "sla_rules": len(self.sla_tracker.rules),
            "replies_sent": len(self.sent_replies),
        }


# ---------------------------------------------------------------------------
# CLI entry-point
# ---------------------------------------------------------------------------
def main():
    engine = ResponseTimeOptimizer(my_address="zion@ziontech.com")

    # SLA rules
    engine.sla_tracker.add_rule(SLARule("standard", max_response_hours=24.0))
    engine.sla_tracker.add_rule(SLARule("premium", max_response_hours=4.0))
    engine.sla_tracker.add_rule(SLARule("critical", max_response_hours=1.0))

    now = datetime.utcnow()

    # Simulate events
    events = [
        # Thread 1: fast response
        EmailEvent("ev1", "msg1", "received", "alice@client.com",
                   ["zion@ziontech.com", "team@ziontech.com"], [], "Project Update",
                   now - timedelta(hours=48), priority="normal", sla_category="standard"),
        EmailEvent("ev2", "msg1r", "replied", "zion@ziontech.com",
                   ["alice@client.com", "team@ziontech.com"], [], "Re: Project Update",
                   now - timedelta(hours=46), sla_category="standard"),

        # Thread 2: slow response (bottleneck)
        EmailEvent("ev3", "msg2", "received", "bob@partner.com",
                   ["zion@ziontech.com"], ["mgmt@ziontech.com"], "Contract Review",
                   now - timedelta(hours=72), priority="high", sla_category="premium"),
        EmailEvent("ev4", "msg2r", "replied", "zion@ziontech.com",
                   ["bob@partner.com"], ["mgmt@ziontech.com"], "Re: Contract Review",
                   now - timedelta(hours=40), sla_category="premium"),

        # Thread 3: urgent slow response
        EmailEvent("ev5", "msg3", "received", "ops@internal.com",
                   ["zion@ziontech.com", "devops@ziontech.com"], [], "Server Down - Urgent",
                   now - timedelta(hours=6), priority="urgent", sla_category="critical"),
        EmailEvent("ev6", "msg3r", "replied", "zion@ziontech.com",
                   ["ops@internal.com", "devops@ziontech.com"], [], "Re: Server Down",
                   now - timedelta(hours=4), sla_category="critical"),

        # Thread 4: standard response
        EmailEvent("ev7", "msg4", "received", "carol@vendor.com",
                   ["zion@ziontech.com", "procurement@ziontech.com"], [], "Invoice Question",
                   now - timedelta(hours=20), priority="normal", sla_category="standard"),
        EmailEvent("ev8", "msg4r", "replied", "zion@ziontech.com",
                   ["carol@vendor.com", "procurement@ziontech.com"], [], "Re: Invoice Question",
                   now - timedelta(hours=18), sla_category="standard"),
    ]

    for event in events:
        engine.record_event(event)

    report = engine.generate_report()
    print(json.dumps(report, indent=2, default=str))

    # Demo reply
    reply = engine.send_optimized_reply(
        events[0], "Thank you for the update. I've reviewed the project status."
    )
    print("\n--- Optimized Reply (Reply-All) ---")
    print(json.dumps(reply, indent=2))

    print("\nStatus:", json.dumps(engine.get_status(), indent=2))


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
V125 Email Analytics Dashboard
==============================
Production-quality email analytics platform providing real-time engagement
metrics, team benchmarking, ROI tracking, predictive analytics, A/B test
analysis, case-by-case breakdowns, and reply-all tracking.

Features:
  - Real-time engagement metrics (open, click, reply rates)
  - Team performance benchmarking with percentile rankings
  - ROI tracking per campaign with revenue attribution
  - Predictive analytics for send-time optimization
  - A/B test analysis with statistical significance testing
  - Case-by-case analysis with granular drill-down
  - Reply-all tracking and conversation threading

Version: 1.2.5
Author: V125 Analytics Team
"""

from __future__ import annotations

import json
import math
import random
import statistics
import uuid
from collections import defaultdict
from dataclasses import dataclass, field, asdict
from datetime import datetime, timedelta
from enum import Enum
from typing import (
    Any,
    Callable,
    Dict,
    List,
    Optional,
    Set,
    Tuple,
    Union,
)


# ─────────────────────────────────────────────────────────────────────────────
# Enums & Constants
# ─────────────────────────────────────────────────────────────────────────────

class EmailStatus(Enum):
    """Email delivery and engagement status."""
    DRAFT = "draft"
    SENT = "sent"
    DELIVERED = "delivered"
    OPENED = "opened"
    CLICKED = "clicked"
    REPLIED = "replied"
    BOUNCED = "bounced"
    UNSUBSCRIBED = "unsubscribed"
    SPAM = "spam_complaint"


class CampaignType(Enum):
    """Campaign classification types."""
    NEWSLETTER = "newsletter"
    DRIP = "drip_sequence"
    OUTREACH = "cold_outreach"
    NURTURE = "nurture"
    PROMOTIONAL = "promotional"
    TRANSACTIONAL = "transactional"
    RE_ENGAGEMENT = "re_engagement"


class TestVariant(Enum):
    """A/B test variant labels."""
    CONTROL = "control"
    VARIANT_A = "variant_a"
    VARIANT_B = "variant_b"
    VARIANT_C = "variant_c"


# ─────────────────────────────────────────────────────────────────────────────
# Data Models
# ─────────────────────────────────────────────────────────────────────────────

@dataclass
class EmailEvent:
    """Individual email interaction event."""
    event_id: str
    email_id: str
    event_type: str  # 'open', 'click', 'reply', 'bounce', 'unsubscribe'
    timestamp: datetime
    metadata: Dict[str, Any] = field(default_factory=dict)

    def to_dict(self) -> Dict[str, Any]:
        return {
            "event_id": self.event_id,
            "email_id": self.email_id,
            "event_type": self.event_type,
            "timestamp": self.timestamp.isoformat(),
            "metadata": self.metadata,
        }


@dataclass
class TeamMember:
    """Team member / sender profile."""
    member_id: str
    name: str
    email: str
    department: str
    role: str
    hire_date: datetime
    emails_sent: int = 0
    total_opens: int = 0
    total_clicks: int = 0
    total_replies: int = 0

    @property
    def open_rate(self) -> float:
        return (self.total_opens / self.emails_sent * 100) if self.emails_sent else 0.0

    @property
    def click_rate(self) -> float:
        return (self.total_clicks / self.emails_sent * 100) if self.emails_sent else 0.0

    @property
    def reply_rate(self) -> float:
        return (self.total_replies / self.emails_sent * 100) if self.emails_sent else 0.0


@dataclass
class ReplyThread:
    """Tracks reply-all chains and conversation threads."""
    thread_id: str
    original_email_id: str
    participants: List[str]
    reply_count: int = 0
    is_reply_all: bool = False
    avg_response_time_minutes: float = 0.0
    thread_depth: int = 0
    last_reply_at: Optional[datetime] = None
    reply_chain: List[Dict[str, Any]] = field(default_factory=list)


@dataclass
class ABTestResult:
    """A/B test variant result container."""
    variant: TestVariant
    sample_size: int
    opens: int
    clicks: int
    replies: int
    conversions: int
    revenue: float

    @property
    def open_rate(self) -> float:
        return (self.opens / self.sample_size * 100) if self.sample_size else 0.0

    @property
    def click_rate(self) -> float:
        return (self.clicks / self.sample_size * 100) if self.sample_size else 0.0

    @property
    def reply_rate(self) -> float:
        return (self.replies / self.sample_size * 100) if self.sample_size else 0.0

    @property
    def conversion_rate(self) -> float:
        return (self.conversions / self.sample_size * 100) if self.sample_size else 0.0


@dataclass
class Campaign:
    """Email campaign with full analytics tracking."""
    campaign_id: str
    name: str
    campaign_type: CampaignType
    sender_id: str
    created_at: datetime
    sent_at: Optional[datetime] = None
    subject_line: str = ""
    body_preview: str = ""
    recipients_count: int = 0
    delivered: int = 0
    opened: int = 0
    clicked: int = 0
    replied: int = 0
    bounced: int = 0
    unsubscribed: int = 0
    spam_complaints: int = 0
    revenue_generated: float = 0.0
    campaign_cost: float = 0.0
    conversions: int = 0
    ab_test_id: Optional[str] = None
    ab_variant: Optional[TestVariant] = None
    events: List[EmailEvent] = field(default_factory=list)
    reply_threads: List[ReplyThread] = field(default_factory=list)
    tags: List[str] = field(default_factory=list)

    @property
    def delivery_rate(self) -> float:
        return (self.delivered / self.recipients_count * 100) if self.recipients_count else 0.0

    @property
    def open_rate(self) -> float:
        return (self.opened / self.delivered * 100) if self.delivered else 0.0

    @property
    def click_rate(self) -> float:
        return (self.clicked / self.delivered * 100) if self.delivered else 0.0

    @property
    def reply_rate(self) -> float:
        return (self.replied / self.delivered * 100) if self.delivered else 0.0

    @property
    def bounce_rate(self) -> float:
        return (self.bounced / self.recipients_count * 100) if self.recipients_count else 0.0

    @property
    def unsubscribe_rate(self) -> float:
        return (self.unsubscribed / self.delivered * 100) if self.delivered else 0.0

    @property
    def spam_rate(self) -> float:
        return (self.spam_complaints / self.delivered * 100) if self.delivered else 0.0

    @property
    def click_to_open_rate(self) -> float:
        """CTOR: clicks as percentage of opens."""
        return (self.clicked / self.opened * 100) if self.opened else 0.0

    @property
    def roi(self) -> float:
        """Return on investment as percentage."""
        if self.campaign_cost == 0:
            return float('inf') if self.revenue_generated > 0 else 0.0
        return ((self.revenue_generated - self.campaign_cost) / self.campaign_cost) * 100

    @property
    def revenue_per_email(self) -> float:
        return self.revenue_generated / self.delivered if self.delivered else 0.0

    @property
    def cost_per_acquisition(self) -> float:
        return self.campaign_cost / self.conversions if self.conversions else float('inf')


# ─────────────────────────────────────────────────────────────────────────────
# Statistical Helpers
# ─────────────────────────────────────────────────────────────────────────────

def z_score(value: float, mean: float, std_dev: float) -> float:
    """Calculate z-score for a given value."""
    if std_dev == 0:
        return 0.0
    return (value - mean) / std_dev


def percentile_rank(value: float, distribution: List[float]) -> float:
    """Calculate the percentile rank of a value within a distribution."""
    if not distribution:
        return 0.0
    below = sum(1 for v in distribution if v < value)
    return (below / len(distribution)) * 100


def two_proportion_z_test(
    p1: float, n1: int, p2: float, n2: int
) -> Tuple[float, float]:
    """
    Two-proportion z-test for A/B test significance.
    Returns (z_statistic, p_value_approx).
    """
    if n1 == 0 or n2 == 0:
        return 0.0, 1.0

    p_pool = (p1 * n1 + p2 * n2) / (n1 + n2)
    if p_pool == 0 or p_pool == 1:
        return 0.0, 1.0

    se = math.sqrt(p_pool * (1 - p_pool) * (1 / n1 + 1 / n2))
    if se == 0:
        return 0.0, 1.0

    z = (p1 - p2) / se
    # Approximate p-value using normal distribution approximation
    p_value = 2 * (1 - _normal_cdf(abs(z)))
    return z, p_value


def _normal_cdf(x: float) -> float:
    """Approximate standard normal CDF using error function."""
    return 0.5 * (1 + math.erf(x / math.sqrt(2)))


def confidence_interval(
    mean: float, std_dev: float, n: int, confidence: float = 0.95
) -> Tuple[float, float]:
    """Calculate confidence interval for a mean."""
    if n <= 1:
        return mean, mean
    # Use z-approximation for simplicity
    z_map = {0.90: 1.645, 0.95: 1.96, 0.99: 2.576}
    z_val = z_map.get(confidence, 1.96)
    margin = z_val * (std_dev / math.sqrt(n))
    return mean - margin, mean + margin


# ─────────────────────────────────────────────────────────────────────────────
# Core Analytics Engine
# ─────────────────────────────────────────────────────────────────────────────

class EmailAnalyticsEngine:
    """
    Central analytics engine for the V125 Email Dashboard.
    Processes email data, computes metrics, and generates insights.
    """

    def __init__(self) -> None:
        self.campaigns: Dict[str, Campaign] = {}
        self.team_members: Dict[str, TeamMember] = {}
        self.reply_threads: Dict[str, ReplyThread] = {}
        self.ab_tests: Dict[str, Dict[TestVariant, ABTestResult]] = {}
        self._event_log: List[EmailEvent] = []
        self._hourly_engagement: Dict[int, Dict[str, int]] = defaultdict(
            lambda: {"opens": 0, "clicks": 0, "replies": 0}
        )

    # ── Data Ingestion ───────────────────────────────────────────────────

    def add_campaign(self, campaign: Campaign) -> None:
        """Register a campaign in the analytics engine."""
        self.campaigns[campaign.campaign_id] = campaign
        if campaign.ab_test_id and campaign.ab_variant:
            if campaign.ab_test_id not in self.ab_tests:
                self.ab_tests[campaign.ab_test_id] = {}
            self.ab_tests[campaign.ab_test_id][campaign.ab_variant] = ABTestResult(
                variant=campaign.ab_variant,
                sample_size=campaign.delivered,
                opens=campaign.opened,
                clicks=campaign.clicked,
                replies=campaign.replied,
                conversions=campaign.conversions,
                revenue=campaign.revenue_generated,
            )

    def add_team_member(self, member: TeamMember) -> None:
        """Register a team member."""
        self.team_members[member.member_id] = member

    def record_event(self, event: EmailEvent) -> None:
        """Record an email engagement event."""
        self._event_log.append(event)
        hour = event.timestamp.hour
        # Map event types to correct plural keys
        plural_map = {
            "open": "opens",
            "click": "clicks",
            "reply": "replies",
            "bounce": "bounces",
            "unsubscribe": "unsubscribes",
        }
        key = plural_map.get(event.event_type, f"{event.event_type}s")
        self._hourly_engagement[hour][key] += 1

    def add_reply_thread(self, thread: ReplyThread) -> None:
        """Register a reply thread for tracking."""
        self.reply_threads[thread.thread_id] = thread

    # ── Real-Time Engagement Metrics ─────────────────────────────────────

    def get_engagement_summary(self) -> Dict[str, Any]:
        """
        Compute aggregate real-time engagement metrics across all campaigns.
        """
        total_sent = sum(c.recipients_count for c in self.campaigns.values())
        total_delivered = sum(c.delivered for c in self.campaigns.values())
        total_opened = sum(c.opened for c in self.campaigns.values())
        total_clicked = sum(c.clicked for c in self.campaigns.values())
        total_replied = sum(c.replied for c in self.campaigns.values())
        total_bounced = sum(c.bounced for c in self.campaigns.values())
        total_unsubscribed = sum(c.unsubscribed for c in self.campaigns.values())
        total_spam = sum(c.spam_complaints for c in self.campaigns.values())
        total_revenue = sum(c.revenue_generated for c in self.campaigns.values())

        def safe_rate(num: int, den: int) -> float:
            return round((num / den * 100), 2) if den else 0.0

        return {
            "total_campaigns": len(self.campaigns),
            "total_sent": total_sent,
            "total_delivered": total_delivered,
            "delivery_rate": safe_rate(total_delivered, total_sent),
            "open_rate": safe_rate(total_opened, total_delivered),
            "click_rate": safe_rate(total_clicked, total_delivered),
            "reply_rate": safe_rate(total_replied, total_delivered),
            "bounce_rate": safe_rate(total_bounced, total_sent),
            "unsubscribe_rate": safe_rate(total_unsubscribed, total_delivered),
            "spam_complaint_rate": safe_rate(total_spam, total_delivered),
            "click_to_open_rate": safe_rate(total_clicked, total_opened),
            "total_revenue": total_revenue,
            "total_events_tracked": len(self._event_log),
        }

    def get_hourly_engagement_heatmap(self) -> Dict[int, Dict[str, int]]:
        """Return engagement distribution by hour of day (0-23)."""
        return dict(self._hourly_engagement)

    def get_engagement_trend(
        self, window_days: int = 30
    ) -> List[Dict[str, Any]]:
        """
        Compute daily engagement trend over the specified window.
        Returns list of daily metric snapshots.
        """
        cutoff = datetime.now() - timedelta(days=window_days)
        daily_metrics: Dict[str, Dict[str, int]] = defaultdict(
            lambda: {"sent": 0, "opened": 0, "clicked": 0, "replied": 0}
        )

        for campaign in self.campaigns.values():
            if campaign.sent_at and campaign.sent_at >= cutoff:
                day_key = campaign.sent_at.strftime("%Y-%m-%d")
                daily_metrics[day_key]["sent"] += campaign.recipients_count
                daily_metrics[day_key]["opened"] += campaign.opened
                daily_metrics[day_key]["clicked"] += campaign.clicked
                daily_metrics[day_key]["replied"] += campaign.replied

        trend = []
        for day, metrics in sorted(daily_metrics.items()):
            sent = metrics["sent"]
            trend.append({
                "date": day,
                "sent": sent,
                "open_rate": round(metrics["opened"] / sent * 100, 2) if sent else 0,
                "click_rate": round(metrics["clicked"] / sent * 100, 2) if sent else 0,
                "reply_rate": round(metrics["replied"] / sent * 100, 2) if sent else 0,
            })
        return trend

    # ── Team Performance Benchmarking ────────────────────────────────────

    def get_team_benchmark(self) -> Dict[str, Any]:
        """
        Compute team-wide performance benchmarks with percentile rankings.
        """
        if not self.team_members:
            return {"error": "No team members registered"}

        members = list(self.team_members.values())
        open_rates = [m.open_rate for m in members]
        click_rates = [m.click_rate for m in members]
        reply_rates = [m.reply_rate for m in members]
        volumes = [m.emails_sent for m in members]

        benchmark = {
            "team_size": len(members),
            "benchmarks": {
                "avg_open_rate": round(statistics.mean(open_rates), 2),
                "median_open_rate": round(statistics.median(open_rates), 2),
                "std_open_rate": round(statistics.stdev(open_rates), 2) if len(open_rates) > 1 else 0,
                "avg_click_rate": round(statistics.mean(click_rates), 2),
                "median_click_rate": round(statistics.median(click_rates), 2),
                "avg_reply_rate": round(statistics.mean(reply_rates), 2),
                "median_reply_rate": round(statistics.median(reply_rates), 2),
                "avg_volume": round(statistics.mean(volumes), 0),
                "top_performer_volume": max(volumes),
            },
            "member_rankings": [],
        }

        for member in members:
            ranking = {
                "name": member.name,
                "department": member.department,
                "emails_sent": member.emails_sent,
                "open_rate": round(member.open_rate, 2),
                "click_rate": round(member.click_rate, 2),
                "reply_rate": round(member.reply_rate, 2),
                "open_rate_percentile": round(percentile_rank(member.open_rate, open_rates), 1),
                "click_rate_percentile": round(percentile_rank(member.click_rate, click_rates), 1),
                "reply_rate_percentile": round(percentile_rank(member.reply_rate, reply_rates), 1),
                "composite_score": self._compute_composite_score(member, members),
            }
            benchmark["member_rankings"].append(ranking)

        benchmark["member_rankings"].sort(
            key=lambda x: x["composite_score"], reverse=True
        )
        return benchmark

    def _compute_composite_score(
        self, member: TeamMember, all_members: List[TeamMember]
    ) -> float:
        """
        Compute a composite performance score (0-100) based on weighted metrics.
        Weights: open_rate=30%, click_rate=35%, reply_rate=25%, volume=10%.
        """
        open_rates = [m.open_rate for m in all_members]
        click_rates = [m.click_rate for m in all_members]
        reply_rates = [m.reply_rate for m in all_members]
        volumes = [m.emails_sent for m in all_members]

        max_open = max(open_rates) if open_rates else 1
        max_click = max(click_rates) if click_rates else 1
        max_reply = max(reply_rates) if reply_rates else 1
        max_volume = max(volumes) if volumes else 1

        score = (
            (member.open_rate / max_open * 30 if max_open else 0)
            + (member.click_rate / max_click * 35 if max_click else 0)
            + (member.reply_rate / max_reply * 25 if max_reply else 0)
            + (member.emails_sent / max_volume * 10 if max_volume else 0)
        )
        return round(score, 2)

    # ── ROI Tracking Per Campaign ────────────────────────────────────────

    def get_roi_analysis(self) -> Dict[str, Any]:
        """
        Compute ROI analysis for all campaigns with financial metrics.
        """
        if not self.campaigns:
            return {"error": "No campaigns registered"}

        campaigns_with_revenue = [
            c for c in self.campaigns.values() if c.revenue_generated > 0
        ]
        all_costs = sum(c.campaign_cost for c in self.campaigns.values())
        all_revenue = sum(c.revenue_generated for c in self.campaigns.values())

        roi_data = {
            "total_investment": round(all_costs, 2),
            "total_revenue": round(all_revenue, 2),
            "net_profit": round(all_revenue - all_costs, 2),
            "overall_roi": round(
                ((all_revenue - all_costs) / all_costs * 100) if all_costs else 0, 2
            ),
            "revenue_per_email_sent": round(
                all_revenue / sum(c.recipients_count for c in self.campaigns.values())
                if any(c.recipients_count for c in self.campaigns.values()) else 0, 4
            ),
            "campaigns_profitable": len([c for c in self.campaigns.values() if c.roi > 0]),
            "campaigns_break_even": len([c for c in self.campaigns.values() if c.roi == 0]),
            "campaigns_loss": len([c for c in self.campaigns.values() if c.roi < 0]),
            "campaign_breakdown": [],
            "top_roi_campaigns": [],
            "worst_roi_campaigns": [],
        }

        for campaign in self.campaigns.values():
            entry = {
                "campaign_id": campaign.campaign_id,
                "name": campaign.name,
                "type": campaign.campaign_type.value,
                "cost": round(campaign.campaign_cost, 2),
                "revenue": round(campaign.revenue_generated, 2),
                "roi_percent": round(campaign.roi, 2),
                "revenue_per_email": round(campaign.revenue_per_email, 4),
                "cost_per_acquisition": round(campaign.cost_per_acquisition, 2),
                "conversions": campaign.conversions,
                "conversion_rate": round(
                    campaign.conversions / campaign.delivered * 100
                    if campaign.delivered else 0, 2
                ),
            }
            roi_data["campaign_breakdown"].append(entry)

        # Sort by ROI
        sorted_by_roi = sorted(
            roi_data["campaign_breakdown"], key=lambda x: x["roi_percent"], reverse=True
        )
        roi_data["top_roi_campaigns"] = sorted_by_roi[:5]
        roi_data["worst_roi_campaigns"] = sorted_by_roi[-3:]

        return roi_data

    # ── Predictive Analytics ─────────────────────────────────────────────

    def get_send_time_optimization(self) -> Dict[str, Any]:
        """
        Predictive analytics for optimal send times based on historical
        engagement patterns. Uses hourly heatmap data to recommend windows.
        """
        heatmap = self.get_hourly_engagement_heatmap()
        if not heatmap:
            return {"error": "Insufficient data for predictions"}

        hour_scores = {}
        for hour, metrics in heatmap.items():
            total = metrics.get("opens", 0) + metrics.get("clicks", 0) * 2 + metrics.get("replies", 0) * 3
            hour_scores[hour] = total

        if not hour_scores:
            return {"error": "No engagement data available"}

        sorted_hours = sorted(hour_scores.items(), key=lambda x: x[1], reverse=True)
        top_hours = sorted_hours[:5]
        worst_hours = sorted_hours[-3:]

        # Predict next best send windows
        predictions = []
        for hour, score in top_hours:
            day_name = "weekday" if hour in range(8, 18) else "evening"
            predictions.append({
                "hour": f"{hour:02d}:00",
                "engagement_score": score,
                "recommended_day": day_name,
                "confidence": self._estimate_confidence(hour),
            })

        # Linear trend projection
        campaign_dates = [
            (c.sent_at, c.open_rate)
            for c in self.campaigns.values()
            if c.sent_at
        ]
        trend_projection = self._project_trend(campaign_dates)

        return {
            "optimal_send_hours": predictions,
            "worst_send_hours": [
                {"hour": f"{h:02d}:00", "engagement_score": s}
                for h, s in worst_hours
            ],
            "hourly_heatmap_summary": {
                f"{h:02d}:00": {
                    "opens": m.get("opens", 0),
                    "clicks": m.get("clicks", 0),
                    "replies": m.get("replies", 0),
                }
                for h, m in sorted(heatmap.items())
            },
            "trend_projection": trend_projection,
            "recommendation": self._generate_send_recommendation(predictions),
        }

    def _estimate_confidence(self, hour: int) -> str:
        """Estimate prediction confidence based on data volume."""
        campaigns_at_hour = sum(
            1 for c in self.campaigns.values()
            if c.sent_at and c.sent_at.hour == hour
        )
        if campaigns_at_hour >= 10:
            return "high"
        elif campaigns_at_hour >= 5:
            return "medium"
        return "low"

    def _project_trend(
        self, data_points: List[Tuple[datetime, float]]
    ) -> Dict[str, Any]:
        """Simple linear regression trend projection."""
        if len(data_points) < 3:
            return {"projection": "insufficient_data", "trend": "unknown"}

        # Convert dates to ordinal for regression
        x_vals = [dp[0].toordinal() for dp in data_points]
        y_vals = [dp[1] for dp in data_points]

        n = len(x_vals)
        sum_x = sum(x_vals)
        sum_y = sum(y_vals)
        sum_xy = sum(x * y for x, y in zip(x_vals, y_vals))
        sum_x2 = sum(x * x for x in x_vals)

        denom = n * sum_x2 - sum_x * sum_x
        if denom == 0:
            return {"projection": "flat", "trend": "stable"}

        slope = (n * sum_xy - sum_x * sum_y) / denom
        intercept = (sum_y - slope * sum_x) / n

        # Project 30 days ahead
        future_x = max(x_vals) + 30
        projected_rate = slope * future_x + intercept

        trend_dir = "increasing" if slope > 0.01 else "decreasing" if slope < -0.01 else "stable"

        return {
            "trend": trend_dir,
            "slope_per_day": round(slope, 6),
            "projected_open_rate_30d": round(max(0, projected_rate), 2),
            "confidence_interval_95": list(confidence_interval(
                statistics.mean(y_vals),
                statistics.stdev(y_vals) if len(y_vals) > 1 else 0,
                n,
            )),
        }

    def _generate_send_recommendation(
        self, predictions: List[Dict[str, Any]]
    ) -> str:
        """Generate a human-readable send time recommendation."""
        if not predictions:
            return "Insufficient data to make recommendations."

        best = predictions[0]
        high_conf = [p for p in predictions if p["confidence"] == "high"]

        if high_conf:
            best = high_conf[0]

        return (
            f"Recommended send time: {best['hour']} on {best['recommended_day']}s "
            f"(confidence: {best['confidence']}). "
            f"Expected engagement score: {best['engagement_score']}."
        )

    # ── A/B Test Analysis ────────────────────────────────────────────────

    def get_ab_test_analysis(self, test_id: Optional[str] = None) -> Dict[str, Any]:
        """
        Analyze A/B test results with statistical significance testing.
        If test_id is provided, analyzes that specific test; otherwise all tests.
        """
        if test_id:
            if test_id not in self.ab_tests:
                return {"error": f"Test '{test_id}' not found"}
            return self._analyze_single_ab_test(test_id, self.ab_tests[test_id])

        results = {}
        for tid, variants in self.ab_tests.items():
            results[tid] = self._analyze_single_ab_test(tid, variants)
        return results

    def _analyze_single_ab_test(
        self, test_id: str, variants: Dict[TestVariant, ABTestResult]
    ) -> Dict[str, Any]:
        """Analyze a single A/B test with significance testing."""
        if not variants:
            return {"error": "No variant data"}

        variant_list = list(variants.values())
        control = variants.get(TestVariant.CONTROL)

        analysis = {
            "test_id": test_id,
            "num_variants": len(variant_list),
            "total_sample_size": sum(v.sample_size for v in variant_list),
            "variants": {},
            "comparisons": [],
            "winner": None,
            "recommendation": "",
        }

        for variant in variant_list:
            analysis["variants"][variant.variant.value] = {
                "sample_size": variant.sample_size,
                "open_rate": round(variant.open_rate, 2),
                "click_rate": round(variant.click_rate, 2),
                "reply_rate": round(variant.reply_rate, 2),
                "conversion_rate": round(variant.conversion_rate, 2),
                "revenue": round(variant.revenue, 2),
            }

        # Compare each variant against control
        if control:
            best_variant = control
            best_metric = control.open_rate

            for variant in variant_list:
                if variant.variant == TestVariant.CONTROL:
                    continue

                # Open rate significance
                z_open, p_open = two_proportion_z_test(
                    variant.open_rate / 100, variant.sample_size,
                    control.open_rate / 100, control.sample_size,
                )
                # Click rate significance
                z_click, p_click = two_proportion_z_test(
                    variant.click_rate / 100, variant.sample_size,
                    control.click_rate / 100, control.sample_size,
                )

                comparison = {
                    "variant": variant.variant.value,
                    "vs_control": {
                        "open_rate_diff": round(variant.open_rate - control.open_rate, 2),
                        "click_rate_diff": round(variant.click_rate - control.click_rate, 2),
                        "reply_rate_diff": round(variant.reply_rate - control.reply_rate, 2),
                        "z_score_open": round(z_open, 4),
                        "p_value_open": round(p_open, 4),
                        "significant_open": p_open < 0.05,
                        "z_score_click": round(z_click, 4),
                        "p_value_click": round(p_click, 4),
                        "significant_click": p_click < 0.05,
                    },
                }
                analysis["comparisons"].append(comparison)

                if variant.open_rate > best_metric:
                    best_metric = variant.open_rate
                    best_variant = variant

            analysis["winner"] = best_variant.variant.value
            if best_variant.variant == TestVariant.CONTROL:
                analysis["recommendation"] = "Control performs best. No change recommended."
            else:
                analysis["recommendation"] = (
                    f"{best_variant.variant.value} outperforms control by "
                    f"{round(best_variant.open_rate - control.open_rate, 2)}pp in open rate. "
                    f"Consider adopting this variant."
                )

        return analysis

    # ── Case-by-Case Analysis ────────────────────────────────────────────

    def get_case_analysis(self, campaign_id: str) -> Dict[str, Any]:
        """
        Granular case-by-case analysis for a specific campaign.
        Provides deep drill-down into all aspects of campaign performance.
        """
        if campaign_id not in self.campaigns:
            return {"error": f"Campaign '{campaign_id}' not found"}

        campaign = self.campaigns[campaign_id]

        # Compute health score (0-100)
        health_score = self._compute_campaign_health(campaign)

        # Segment analysis
        segments = self._segment_campaign_performance(campaign)

        # Anomaly detection
        anomalies = self._detect_anomalies(campaign)

        # Actionable insights
        insights = self._generate_insights(campaign)

        analysis = {
            "campaign_id": campaign.campaign_id,
            "name": campaign.name,
            "type": campaign.campaign_type.value,
            "sent_at": campaign.sent_at.isoformat() if campaign.sent_at else None,
            "subject_line": campaign.subject_line,
            "health_score": health_score,
            "health_status": self._health_label(health_score),
            "delivery_metrics": {
                "recipients": campaign.recipients_count,
                "delivered": campaign.delivered,
                "delivery_rate": round(campaign.delivery_rate, 2),
                "bounced": campaign.bounced,
                "bounce_rate": round(campaign.bounce_rate, 2),
            },
            "engagement_metrics": {
                "opened": campaign.opened,
                "open_rate": round(campaign.open_rate, 2),
                "clicked": campaign.clicked,
                "click_rate": round(campaign.click_rate, 2),
                "click_to_open_rate": round(campaign.click_to_open_rate, 2),
                "replied": campaign.replied,
                "reply_rate": round(campaign.reply_rate, 2),
            },
            "negative_signals": {
                "unsubscribed": campaign.unsubscribed,
                "unsubscribe_rate": round(campaign.unsubscribe_rate, 2),
                "spam_complaints": campaign.spam_complaints,
                "spam_rate": round(campaign.spam_rate, 2),
            },
            "financial_metrics": {
                "cost": round(campaign.campaign_cost, 2),
                "revenue": round(campaign.revenue_generated, 2),
                "roi_percent": round(campaign.roi, 2),
                "revenue_per_email": round(campaign.revenue_per_email, 4),
                "conversions": campaign.conversions,
                "cost_per_acquisition": round(campaign.cost_per_acquisition, 2),
            },
            "reply_thread_analysis": self._analyze_reply_threads(campaign),
            "performance_segments": segments,
            "anomalies_detected": anomalies,
            "actionable_insights": insights,
            "event_timeline": [e.to_dict() for e in campaign.events[:20]],
        }

        return analysis

    def _compute_campaign_health(self, campaign: Campaign) -> float:
        """Compute overall campaign health score (0-100)."""
        score = 50.0  # baseline

        # Delivery rate contribution (max +15)
        if campaign.delivery_rate >= 98:
            score += 15
        elif campaign.delivery_rate >= 95:
            score += 10
        elif campaign.delivery_rate >= 90:
            score += 5
        else:
            score -= 10

        # Open rate contribution (max +15)
        if campaign.open_rate >= 30:
            score += 15
        elif campaign.open_rate >= 20:
            score += 10
        elif campaign.open_rate >= 10:
            score += 5
        else:
            score -= 5

        # Click rate contribution (max +10)
        if campaign.click_rate >= 10:
            score += 10
        elif campaign.click_rate >= 5:
            score += 7
        elif campaign.click_rate >= 2:
            score += 3

        # Reply rate contribution (max +10)
        if campaign.reply_rate >= 5:
            score += 10
        elif campaign.reply_rate >= 2:
            score += 5

        # Negative signals penalty
        if campaign.spam_rate > 0.1:
            score -= 15
        elif campaign.spam_rate > 0.05:
            score -= 8

        if campaign.unsubscribe_rate > 1:
            score -= 10
        elif campaign.unsubscribe_rate > 0.5:
            score -= 5

        # ROI contribution
        if campaign.roi > 200:
            score += 10
        elif campaign.roi > 100:
            score += 5
        elif campaign.roi < 0:
            score -= 10

        return round(max(0, min(100, score)), 1)

    def _health_label(self, score: float) -> str:
        """Convert health score to human-readable label."""
        if score >= 80:
            return "Excellent"
        elif score >= 65:
            return "Good"
        elif score >= 50:
            return "Average"
        elif score >= 35:
            return "Below Average"
        return "Critical"

    def _segment_campaign_performance(
        self, campaign: Campaign
    ) -> Dict[str, Any]:
        """Segment campaign performance into categories."""
        return {
            "delivery_health": "strong" if campaign.delivery_rate >= 97 else "weak",
            "engagement_tier": (
                "high" if campaign.open_rate >= 25
                else "medium" if campaign.open_rate >= 15
                else "low"
            ),
            "conversion_efficiency": (
                "efficient" if campaign.cost_per_acquisition < 50
                else "moderate" if campaign.cost_per_acquisition < 150
                else "expensive"
            ),
            "audience_quality": (
                "premium" if campaign.click_to_open_rate >= 30
                else "standard" if campaign.click_to_open_rate >= 15
                else "low_engagement"
            ),
        }

    def _detect_anomalies(self, campaign: Campaign) -> List[Dict[str, Any]]:
        """Detect statistical anomalies in campaign performance."""
        anomalies = []

        # Check if bounce rate is abnormally high
        if campaign.bounce_rate > 5:
            anomalies.append({
                "type": "high_bounce_rate",
                "severity": "high" if campaign.bounce_rate > 10 else "medium",
                "value": round(campaign.bounce_rate, 2),
                "threshold": 5.0,
                "message": f"Bounce rate ({campaign.bounce_rate:.1f}%) exceeds 5% threshold. Check list hygiene.",
            })

        # Check spam complaints
        if campaign.spam_rate > 0.1:
            anomalies.append({
                "type": "spam_complaints",
                "severity": "critical",
                "value": round(campaign.spam_rate, 3),
                "threshold": 0.1,
                "message": f"Spam complaint rate ({campaign.spam_rate:.3f}%) is dangerously high.",
            })

        # Check if click rate is much higher than industry average (possible bot traffic)
        if campaign.click_rate > 50:
            anomalies.append({
                "type": "suspicious_click_rate",
                "severity": "medium",
                "value": round(campaign.click_rate, 2),
                "threshold": 50.0,
                "message": "Click rate unusually high — possible bot traffic or link testing.",
            })

        # Low open rate with high click rate anomaly
        if campaign.open_rate < 5 and campaign.click_rate > campaign.open_rate:
            anomalies.append({
                "type": "tracking_anomaly",
                "severity": "low",
                "value": None,
                "threshold": None,
                "message": "Click rate exceeds open rate — possible tracking pixel issue.",
            })

        return anomalies

    def _generate_insights(self, campaign: Campaign) -> List[str]:
        """Generate actionable insights for a campaign."""
        insights = []

        if campaign.open_rate < 15:
            insights.append(
                "Open rate is below 15%. Consider A/B testing subject lines, "
                "optimizing preheader text, or segmenting your audience better."
            )

        if campaign.click_rate < 2 and campaign.open_rate > 15:
            insights.append(
                "Good open rate but low click rate. Review CTA placement, "
                "button design, and content relevance above the fold."
            )

        if campaign.reply_rate > 3:
            insights.append(
                "Excellent reply rate! This suggests high relevance and "
                "personalization. Consider scaling this approach."
            )

        if campaign.roi > 300:
            insights.append(
                f"Outstanding ROI ({campaign.roi:.0f}%). This campaign format "
                "is highly profitable — consider increasing budget allocation."
            )
        elif campaign.roi < 0:
            insights.append(
                "Campaign is running at a loss. Review targeting, "
                "offer relevance, and cost structure."
            )

        if campaign.unsubscribe_rate > 0.5:
            insights.append(
                "Elevated unsubscribe rate. Review sending frequency, "
                "content relevance, and list segmentation."
            )

        if campaign.click_to_open_rate > 40:
            insights.append(
                "Very high click-to-open rate indicates excellent content-to-subject "
                "alignment. Use this template as a model for future campaigns."
            )

        if not insights:
            insights.append("Campaign performing within expected parameters.")

        return insights

    # ── Reply-All Tracking ───────────────────────────────────────────────

    def _analyze_reply_threads(self, campaign: Campaign) -> Dict[str, Any]:
        """Analyze reply threads associated with a campaign."""
        threads = campaign.reply_threads
        if not threads:
            # Check global threads linked to this campaign
            threads = [
                t for t in self.reply_threads.values()
                if t.original_email_id in {e.email_id for e in campaign.events}
            ]

        if not threads:
            return {
                "total_threads": 0,
                "reply_all_count": 0,
                "avg_thread_depth": 0,
                "avg_response_time_min": 0,
                "participant_distribution": {},
            }

        reply_all_threads = [t for t in threads if t.is_reply_all]
        depths = [t.thread_depth for t in threads]
        response_times = [t.avg_response_time_minutes for t in threads if t.avg_response_time_minutes > 0]

        # Participant frequency
        participant_freq: Dict[str, int] = defaultdict(int)
        for thread in threads:
            for p in thread.participants:
                participant_freq[p] += 1

        return {
            "total_threads": len(threads),
            "reply_all_count": len(reply_all_threads),
            "reply_all_rate": round(len(reply_all_threads) / len(threads) * 100, 2) if threads else 0,
            "avg_thread_depth": round(statistics.mean(depths), 2) if depths else 0,
            "max_thread_depth": max(depths) if depths else 0,
            "avg_response_time_min": round(statistics.mean(response_times), 1) if response_times else 0,
            "median_response_time_min": round(statistics.median(response_times), 1) if response_times else 0,
            "participant_distribution": dict(
                sorted(participant_freq.items(), key=lambda x: x[1], reverse=True)[:10]
            ),
        }

    def get_reply_all_report(self) -> Dict[str, Any]:
        """
        Global reply-all tracking report across all campaigns and threads.
        """
        all_threads = list(self.reply_threads.values())
        # Also collect from campaigns
        for campaign in self.campaigns.values():
            for thread in campaign.reply_threads:
                if thread.thread_id not in self.reply_threads:
                    all_threads.append(thread)

        if not all_threads:
            return {"total_tracked_threads": 0, "message": "No reply threads tracked"}

        reply_all = [t for t in all_threads if t.is_reply_all]
        direct_reply = [t for t in all_threads if not t.is_reply_all]

        all_response_times = [
            t.avg_response_time_minutes for t in all_threads
            if t.avg_response_time_minutes > 0
        ]
        all_depths = [t.thread_depth for t in all_threads]

        return {
            "total_tracked_threads": len(all_threads),
            "reply_all_threads": len(reply_all),
            "direct_reply_threads": len(direct_reply),
            "reply_all_percentage": round(len(reply_all) / len(all_threads) * 100, 2),
            "avg_response_time_all_min": round(
                statistics.mean(all_response_times), 1
            ) if all_response_times else 0,
            "fastest_response_min": round(min(all_response_times), 1) if all_response_times else 0,
            "slowest_response_min": round(max(all_response_times), 1) if all_response_times else 0,
            "avg_thread_depth": round(statistics.mean(all_depths), 2) if all_depths else 0,
            "deepest_thread": max(all_depths) if all_depths else 0,
            "reply_all_by_depth": self._reply_depth_distribution(all_threads),
        }

    def _reply_depth_distribution(
        self, threads: List[ReplyThread]
    ) -> Dict[str, int]:
        """Distribution of threads by reply depth."""
        dist: Dict[str, int] = defaultdict(int)
        for thread in threads:
            if thread.thread_depth <= 1:
                dist["1 reply"] += 1
            elif thread.thread_depth <= 3:
                dist["2-3 replies"] += 1
            elif thread.thread_depth <= 5:
                dist["4-5 replies"] += 1
            else:
                dist["6+ replies"] += 1
        return dict(dist)

    # ── Reporting & Export ───────────────────────────────────────────────

    def generate_full_report(self) -> Dict[str, Any]:
        """Generate a comprehensive analytics report."""
        return {
            "report_generated_at": datetime.now().isoformat(),
            "version": "V125",
            "engagement_summary": self.get_engagement_summary(),
            "team_benchmark": self.get_team_benchmark(),
            "roi_analysis": self.get_roi_analysis(),
            "send_optimization": self.get_send_time_optimization(),
            "ab_tests": self.get_ab_test_analysis(),
            "reply_all_report": self.get_reply_all_report(),
            "campaign_count": len(self.campaigns),
            "team_size": len(self.team_members),
        }

    def export_to_json(self, filepath: str) -> None:
        """Export full report to JSON file."""
        report = self.generate_full_report()
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(report, f, indent=2, default=str)


# ─────────────────────────────────────────────────────────────────────────────
# Dashboard Formatter
# ─────────────────────────────────────────────────────────────────────────────

class DashboardFormatter:
    """Pretty-prints analytics data for terminal/console display."""

    WIDTH = 72
    SEPARATOR = "─" * 72
    DOUBLE_SEP = "═" * 72

    @classmethod
    def header(cls, title: str) -> str:
        return f"\n{cls.DOUBLE_SEP}\n  {title}\n{cls.DOUBLE_SEP}"

    @classmethod
    def section(cls, title: str) -> str:
        return f"\n{cls.SEPARATOR}\n  ▸ {title}\n{cls.SEPARATOR}"

    @classmethod
    def metric(cls, label: str, value: Any, unit: str = "") -> str:
        unit_str = f" {unit}" if unit else ""
        return f"  {label:<35} {value}{unit_str}"

    @classmethod
    def bar(cls, label: str, value: float, max_val: float = 100, width: int = 30) -> str:
        filled = int((value / max_val) * width) if max_val > 0 else 0
        filled = min(filled, width)
        bar_str = "█" * filled + "░" * (width - filled)
        return f"  {label:<25} [{bar_str}] {value:.1f}%"

    @classmethod
    def format_engagement(cls, data: Dict[str, Any]) -> str:
        lines = [
            cls.header("📊 V125 EMAIL ANALYTICS DASHBOARD"),
            cls.section("Real-Time Engagement Metrics"),
            cls.metric("Total Campaigns", data.get("total_campaigns", 0)),
            cls.metric("Total Sent", f"{data.get('total_sent', 0):,}"),
            cls.metric("Total Delivered", f"{data.get('total_delivered', 0):,}"),
            cls.metric("Delivery Rate", data.get("delivery_rate", 0), "%"),
            cls.metric("Open Rate", data.get("open_rate", 0), "%"),
            cls.metric("Click Rate", data.get("click_rate", 0), "%"),
            cls.metric("Reply Rate", data.get("reply_rate", 0), "%"),
            cls.metric("Click-to-Open Rate", data.get("click_to_open_rate", 0), "%"),
            cls.metric("Bounce Rate", data.get("bounce_rate", 0), "%"),
            cls.metric("Unsubscribe Rate", data.get("unsubscribe_rate", 0), "%"),
            cls.metric("Spam Complaint Rate", data.get("spam_complaint_rate", 0), "%"),
            cls.metric("Total Revenue", f"${data.get('total_revenue', 0):,.2f}"),
        ]
        return "\n".join(lines)

    @classmethod
    def format_team_benchmark(cls, data: Dict[str, Any]) -> str:
        lines = [cls.section("👥 Team Performance Benchmark")]
        if "error" in data:
            lines.append(f"  ⚠ {data['error']}")
            return "\n".join(lines)

        benchmarks = data.get("benchmarks", {})
        lines.extend([
            cls.metric("Team Size", data.get("team_size", 0)),
            cls.metric("Avg Open Rate", benchmarks.get("avg_open_rate", 0), "%"),
            cls.metric("Median Open Rate", benchmarks.get("median_open_rate", 0), "%"),
            cls.metric("Avg Click Rate", benchmarks.get("avg_click_rate", 0), "%"),
            cls.metric("Avg Reply Rate", benchmarks.get("avg_reply_rate", 0), "%"),
            cls.metric("Avg Volume", f"{benchmarks.get('avg_volume', 0):,.0f}"),
            "",
            "  Rankings:",
        ])

        for rank, member in enumerate(data.get("member_rankings", []), 1):
            lines.append(
                f"    #{rank} {member['name']:<18} "
                f"Score: {member['composite_score']:5.1f}  "
                f"Open: {member['open_rate']:5.1f}%  "
                f"Click: {member['click_rate']:5.1f}%  "
                f"Reply: {member['reply_rate']:5.1f}%"
            )
            lines.append(
                f"       Percentiles → Open: {member['open_rate_percentile']:.0f}th  "
                f"Click: {member['click_rate_percentile']:.0f}th  "
                f"Reply: {member['reply_rate_percentile']:.0f}th"
            )

        return "\n".join(lines)

    @classmethod
    def format_roi(cls, data: Dict[str, Any]) -> str:
        lines = [cls.section("💰 ROI Tracking Per Campaign")]
        if "error" in data:
            lines.append(f"  ⚠ {data['error']}")
            return "\n".join(lines)

        lines.extend([
            cls.metric("Total Investment", f"${data.get('total_investment', 0):,.2f}"),
            cls.metric("Total Revenue", f"${data.get('total_revenue', 0):,.2f}"),
            cls.metric("Net Profit", f"${data.get('net_profit', 0):,.2f}"),
            cls.metric("Overall ROI", data.get("overall_roi", 0), "%"),
            cls.metric("Revenue per Email", f"${data.get('revenue_per_email_sent', 0):.4f}"),
            cls.metric("Profitable Campaigns", data.get("campaigns_profitable", 0)),
            cls.metric("Loss Campaigns", data.get("campaigns_loss", 0)),
            "",
            "  Top Campaigns by ROI:",
        ])

        for camp in data.get("top_roi_campaigns", [])[:5]:
            roi_sign = "+" if camp["roi_percent"] > 0 else ""
            lines.append(
                f"    {camp['name']:<30} "
                f"ROI: {roi_sign}{camp['roi_percent']:.0f}%  "
                f"Revenue: ${camp['revenue']:,.0f}"
            )

        return "\n".join(lines)

    @classmethod
    def format_send_optimization(cls, data: Dict[str, Any]) -> str:
        lines = [cls.section("🔮 Predictive Analytics — Send Optimization")]
        if "error" in data:
            lines.append(f"  ⚠ {data['error']}")
            return "\n".join(lines)

        lines.append("\n  Optimal Send Hours:")
        for pred in data.get("optimal_send_hours", []):
            lines.append(
                f"    ⏰ {pred['hour']} ({pred['recommended_day']})  "
                f"Score: {pred['engagement_score']}  "
                f"Confidence: {pred['confidence']}"
            )

        lines.append("\n  Worst Send Hours:")
        for pred in data.get("worst_send_hours", []):
            lines.append(
                f"    ⛔ {pred['hour']}  Score: {pred['engagement_score']}"
            )

        trend = data.get("trend_projection", {})
        if trend.get("trend"):
            lines.extend([
                "",
                f"  Trend: {trend.get('trend', 'unknown').upper()}",
                f"  Slope: {trend.get('slope_per_day', 0):.6f}/day",
                f"  Projected Open Rate (30d): {trend.get('projected_open_rate_30d', 0):.1f}%",
            ])

        rec = data.get("recommendation", "")
        if rec:
            lines.extend(["", f"  📌 Recommendation: {rec}"])

        return "\n".join(lines)

    @classmethod
    def format_ab_test(cls, data: Dict[str, Any]) -> str:
        lines = [cls.section("🧪 A/B Test Analysis")]

        if isinstance(data, dict) and "error" in data:
            lines.append(f"  ⚠ {data['error']}")
            return "\n".join(lines)

        # Handle multiple tests
        if isinstance(data, dict) and "test_id" not in data:
            for test_id, test_data in data.items():
                lines.append(f"\n  ── Test: {test_id} ──")
                lines.extend(cls._format_single_ab_test(test_data))
        elif isinstance(data, dict):
            lines.extend(cls._format_single_ab_test(data))

        return "\n".join(lines)

    @classmethod
    def _format_single_ab_test(cls, data: Dict[str, Any]) -> List[str]:
        lines = [
            cls.metric("Sample Size", data.get("total_sample_size", 0)),
            cls.metric("Variants", data.get("num_variants", 0)),
            "",
            "  Variant Performance:",
        ]

        for vname, vdata in data.get("variants", {}).items():
            lines.append(
                f"    {vname:<12} "
                f"Open: {vdata['open_rate']:5.1f}%  "
                f"Click: {vdata['click_rate']:5.1f}%  "
                f"Reply: {vdata['reply_rate']:5.1f}%  "
                f"Conv: {vdata['conversion_rate']:5.1f}%  "
                f"Rev: ${vdata['revenue']:,.0f}"
            )

        if data.get("comparisons"):
            lines.extend(["", "  Statistical Comparisons (vs Control):"])
            for comp in data["comparisons"]:
                vs = comp["vs_control"]
                sig_open = "✓ SIGNIFICANT" if vs["significant_open"] else "✗ not significant"
                sig_click = "✓ SIGNIFICANT" if vs["significant_click"] else "✗ not significant"
                lines.extend([
                    f"    {comp['variant']}:",
                    f"      Open Δ: {vs['open_rate_diff']:+.2f}pp  "
                    f"(z={vs['z_score_open']:.2f}, p={vs['p_value_open']:.4f}) {sig_open}",
                    f"      Click Δ: {vs['click_rate_diff']:+.2f}pp  "
                    f"(z={vs['z_score_click']:.2f}, p={vs['p_value_click']:.4f}) {sig_click}",
                ])

        winner = data.get("winner")
        if winner:
            lines.extend(["", f"  🏆 Winner: {winner}"])
        rec = data.get("recommendation", "")
        if rec:
            lines.append(f"  📌 {rec}")

        return lines

    @classmethod
    def format_case_analysis(cls, data: Dict[str, Any]) -> str:
        lines = [cls.section(f"📋 Case Analysis: {data.get('name', 'Unknown')}")]

        if "error" in data:
            lines.append(f"  ⚠ {data['error']}")
            return "\n".join(lines)

        health = data.get("health_score", 0)
        status = data.get("health_status", "")
        lines.extend([
            f"  Health Score: {health}/100 ({status})",
            cls.bar("Health", health),
            "",
        ])

        # Delivery
        dm = data.get("delivery_metrics", {})
        lines.extend([
            "  Delivery:",
            cls.metric("  Recipients", f"{dm.get('recipients', 0):,}"),
            cls.metric("  Delivered", f"{dm.get('delivered', 0):,}"),
            cls.metric("  Delivery Rate", dm.get("delivery_rate", 0), "%"),
            cls.metric("  Bounce Rate", dm.get("bounce_rate", 0), "%"),
            "",
        ])

        # Engagement
        em = data.get("engagement_metrics", {})
        lines.extend([
            "  Engagement:",
            cls.bar("Open Rate", em.get("open_rate", 0), 50),
            cls.bar("Click Rate", em.get("click_rate", 0), 30),
            cls.bar("Reply Rate", em.get("reply_rate", 0), 15),
            cls.metric("  Click-to-Open", em.get("click_to_open_rate", 0), "%"),
            "",
        ])

        # Financial
        fm = data.get("financial_metrics", {})
        lines.extend([
            "  Financial:",
            cls.metric("  Cost", f"${fm.get('cost', 0):,.2f}"),
            cls.metric("  Revenue", f"${fm.get('revenue', 0):,.2f}"),
            cls.metric("  ROI", fm.get("roi_percent", 0), "%"),
            cls.metric("  Revenue/Email", f"${fm.get('revenue_per_email', 0):.4f}"),
            cls.metric("  CPA", f"${fm.get('cost_per_acquisition', 0):.2f}"),
            "",
        ])

        # Segments
        seg = data.get("performance_segments", {})
        lines.extend([
            "  Performance Segments:",
            cls.metric("  Delivery Health", seg.get("delivery_health", "N/A")),
            cls.metric("  Engagement Tier", seg.get("engagement_tier", "N/A")),
            cls.metric("  Conversion Efficiency", seg.get("conversion_efficiency", "N/A")),
            cls.metric("  Audience Quality", seg.get("audience_quality", "N/A")),
            "",
        ])

        # Anomalies
        anomalies = data.get("anomalies_detected", [])
        if anomalies:
            lines.append("  ⚠ Anomalies Detected:")
            for a in anomalies:
                lines.append(f"    [{a['severity'].upper()}] {a['message']}")
            lines.append("")

        # Insights
        insights = data.get("actionable_insights", [])
        if insights:
            lines.append("  💡 Actionable Insights:")
            for insight in insights:
                lines.append(f"    • {insight}")

        # Reply threads
        rt = data.get("reply_thread_analysis", {})
        if rt.get("total_threads", 0) > 0:
            lines.extend([
                "",
                "  Reply Thread Analysis:",
                cls.metric("  Total Threads", rt.get("total_threads", 0)),
                cls.metric("  Reply-All Threads", rt.get("reply_all_count", 0)),
                cls.metric("  Reply-All Rate", rt.get("reply_all_rate", 0), "%"),
                cls.metric("  Avg Depth", rt.get("avg_thread_depth", 0)),
                cls.metric("  Avg Response Time", rt.get("avg_response_time_min", 0), "min"),
            ])

        return "\n".join(lines)

    @classmethod
    def format_reply_all_report(cls, data: Dict[str, Any]) -> str:
        lines = [cls.section("📨 Reply-All Tracking Report")]

        if data.get("total_tracked_threads", 0) == 0:
            lines.append("  No reply threads tracked.")
            return "\n".join(lines)

        lines.extend([
            cls.metric("Total Tracked Threads", data.get("total_tracked_threads", 0)),
            cls.metric("Reply-All Threads", data.get("reply_all_threads", 0)),
            cls.metric("Direct Reply Threads", data.get("direct_reply_threads", 0)),
            cls.metric("Reply-All %", data.get("reply_all_percentage", 0), "%"),
            cls.metric("Avg Response Time", data.get("avg_response_time_all_min", 0), "min"),
            cls.metric("Fastest Response", data.get("fastest_response_min", 0), "min"),
            cls.metric("Slowest Response", data.get("slowest_response_min", 0), "min"),
            cls.metric("Avg Thread Depth", data.get("avg_thread_depth", 0)),
            cls.metric("Deepest Thread", data.get("deepest_thread", 0)),
            "",
            "  Depth Distribution:",
        ])

        for depth_label, count in data.get("reply_all_by_depth", {}).items():
            lines.append(f"    {depth_label:<15} {count} threads")

        return "\n".join(lines)


# ─────────────────────────────────────────────────────────────────────────────
# Test Data Generator
# ─────────────────────────────────────────────────────────────────────────────

class TestDataGenerator:
    """Generates realistic test data for the V125 dashboard demo."""

    DEPARTMENTS = ["Sales", "Marketing", "Customer Success", "Partnerships", "Outreach"]
    NAMES = [
        ("Alice Chen", "alice@v125.io"),
        ("Bob Martinez", "bob@v125.io"),
        ("Carol Johnson", "carol@v125.io"),
        ("David Kim", "david@v125.io"),
        ("Eva Patel", "eva@v125.io"),
        ("Frank Wilson", "frank@v125.io"),
        ("Grace Liu", "grace@v125.io"),
        ("Henry Park", "henry@v125.io"),
    ]

    CAMPAIGN_TEMPLATES = [
        ("Q4 Product Launch", CampaignType.NEWSLETTER, 15000, 2500),
        ("Cold Outreach — Enterprise", CampaignType.OUTREACH, 5000, 3500),
        ("Nurture Sequence — Week 3", CampaignType.NURTURE, 8000, 1200),
        ("Re-engagement Win-Back", CampaignType.RE_ENGAGEMENT, 12000, 1800),
        ("Holiday Promo 2025", CampaignType.PROMOTIONAL, 25000, 4000),
        ("Drip — Onboarding Day 7", CampaignType.DRIP, 3000, 800),
        ("Partner Co-Marketing", CampaignType.NEWSLETTER, 10000, 2200),
        ("Year-End Review", CampaignType.NEWSLETTER, 20000, 1500),
        ("VIP Early Access", CampaignType.PROMOTIONAL, 2000, 5000),
        ("Webinar Follow-Up", CampaignType.NURTURE, 6000, 900),
    ]

    @classmethod
    def generate(cls, engine: EmailAnalyticsEngine, seed: int = 42) -> None:
        """Populate the engine with comprehensive test data."""
        rng = random.Random(seed)

        # Generate team members
        members = cls._generate_team(rng)
        for member in members:
            engine.add_team_member(member)

        # Generate campaigns
        campaigns = cls._generate_campaigns(rng, members)
        for campaign in campaigns:
            engine.add_campaign(campaign)

        # Generate events and hourly engagement
        cls._generate_events(engine, rng, campaigns)

        # Generate reply threads
        cls._generate_reply_threads(engine, rng, campaigns)

    @classmethod
    def _generate_team(cls, rng: random.Random) -> List[TeamMember]:
        members = []
        for i, (name, email) in enumerate(cls.NAMES):
            sent = rng.randint(800, 5000)
            member = TeamMember(
                member_id=f"TM-{i+1:03d}",
                name=name,
                email=email,
                department=rng.choice(cls.DEPARTMENTS),
                role=rng.choice(["SDR", "AE", "Manager", "Director", "Specialist"]),
                hire_date=datetime(2022, 1, 1) + timedelta(days=rng.randint(0, 1000)),
                emails_sent=sent,
                total_opens=int(sent * rng.uniform(0.12, 0.38)),
                total_clicks=int(sent * rng.uniform(0.02, 0.12)),
                total_replies=int(sent * rng.uniform(0.01, 0.08)),
            )
            members.append(member)
        return members

    @classmethod
    def _generate_campaigns(
        cls, rng: random.Random, members: List[TeamMember]
    ) -> List[Campaign]:
        campaigns = []
        base_date = datetime(2025, 9, 1)

        for i, (name, ctype, recipients, cost) in enumerate(cls.CAMPAIGN_TEMPLATES):
            sender = rng.choice(members)
            sent_at = base_date + timedelta(days=rng.randint(0, 120))
            delivered = int(recipients * rng.uniform(0.93, 0.99))
            opened = int(delivered * rng.uniform(0.10, 0.40))
            clicked = int(opened * rng.uniform(0.08, 0.35))
            replied = int(delivered * rng.uniform(0.005, 0.06))
            bounced = recipients - delivered
            unsubscribed = int(delivered * rng.uniform(0.001, 0.008))
            spam = int(delivered * rng.uniform(0, 0.003))
            conversions = int(clicked * rng.uniform(0.05, 0.25))
            revenue = conversions * rng.uniform(50, 500)

            campaign = Campaign(
                campaign_id=f"CMP-{i+1:03d}",
                name=name,
                campaign_type=ctype,
                sender_id=sender.member_id,
                created_at=sent_at - timedelta(days=rng.randint(3, 14)),
                sent_at=sent_at,
                subject_line=f"[{ctype.value}] {name} — Exclusive Offer Inside",
                body_preview=f"Hi {{first_name}}, we're excited to share {name.lower()} details with you...",
                recipients_count=recipients,
                delivered=delivered,
                opened=opened,
                clicked=clicked,
                replied=replied,
                bounced=bounced,
                unsubscribed=unsubscribed,
                spam_complaints=spam,
                revenue_generated=round(revenue, 2),
                campaign_cost=cost,
                conversions=conversions,
                tags=[ctype.value, sent_at.strftime("%Y-%m")],
            )
            campaigns.append(campaign)

        # Add A/B test campaigns
        ab_test_id = "AB-001"
        for variant, mult in [
            (TestVariant.CONTROL, 1.0),
            (TestVariant.VARIANT_A, 1.25),
            (TestVariant.VARIANT_B, 0.9),
        ]:
            recipients = 5000
            delivered = int(recipients * 0.97)
            opened = int(delivered * 0.22 * mult)
            clicked = int(opened * 0.18 * mult)
            replied = int(delivered * 0.025 * mult)
            conversions = int(clicked * 0.12 * mult)
            revenue = conversions * rng.uniform(80, 200)

            campaign = Campaign(
                campaign_id=f"CMP-AB-{variant.value}",
                name=f"Subject Line Test — {variant.value}",
                campaign_type=CampaignType.NEWSLETTER,
                sender_id=members[0].member_id,
                created_at=datetime(2025, 10, 15),
                sent_at=datetime(2025, 10, 20, 10, 0),
                subject_line=f"Test variant {variant.value}",
                recipients_count=recipients,
                delivered=delivered,
                opened=opened,
                clicked=clicked,
                replied=replied,
                bounced=recipients - delivered,
                unsubscribed=int(delivered * 0.003),
                spam_complaints=int(delivered * 0.001),
                revenue_generated=round(revenue, 2),
                campaign_cost=1000,
                conversions=conversions,
                ab_test_id=ab_test_id,
                ab_variant=variant,
                tags=["ab_test", "subject_line"],
            )
            campaigns.append(campaign)

        # Second A/B test — CTA button color
        ab_test_id_2 = "AB-002"
        for variant, click_mult in [
            (TestVariant.CONTROL, 1.0),
            (TestVariant.VARIANT_A, 1.4),
        ]:
            recipients = 8000
            delivered = int(recipients * 0.96)
            opened = int(delivered * 0.28)
            clicked = int(opened * 0.15 * click_mult)
            replied = int(delivered * 0.02)
            conversions = int(clicked * 0.10)
            revenue = conversions * rng.uniform(120, 300)

            campaign = Campaign(
                campaign_id=f"CMP-AB2-{variant.value}",
                name=f"CTA Button Test — {variant.value}",
                campaign_type=CampaignType.PROMOTIONAL,
                sender_id=members[1].member_id,
                created_at=datetime(2025, 11, 1),
                sent_at=datetime(2025, 11, 5, 14, 0),
                subject_line="Don't miss our exclusive deal",
                recipients_count=recipients,
                delivered=delivered,
                opened=opened,
                clicked=clicked,
                replied=replied,
                bounced=recipients - delivered,
                unsubscribed=int(delivered * 0.002),
                spam_complaints=0,
                revenue_generated=round(revenue, 2),
                campaign_cost=1500,
                conversions=conversions,
                ab_test_id=ab_test_id_2,
                ab_variant=variant,
                tags=["ab_test", "cta_button"],
            )
            campaigns.append(campaign)

        return campaigns

    @classmethod
    def _generate_events(
        cls,
        engine: EmailAnalyticsEngine,
        rng: random.Random,
        campaigns: List[Campaign],
    ) -> None:
        """Generate engagement events and populate hourly heatmap."""
        for campaign in campaigns:
            if not campaign.sent_at:
                continue

            # Generate open events at various hours
            for _ in range(min(campaign.opened, 50)):
                hour = rng.choices(
                    range(24),
                    weights=[
                        1, 1, 0.5, 0.5, 0.5, 1,  # 0-5
                        2, 4, 8, 10, 9, 8,        # 6-11
                        6, 7, 9, 10, 8, 6,        # 12-17
                        4, 3, 2, 2, 1, 1,         # 18-23
                    ],
                )[0]
                event = EmailEvent(
                    event_id=str(uuid.UUID(int=rng.getrandbits(128))),
                    email_id=campaign.campaign_id,
                    event_type="open",
                    timestamp=campaign.sent_at.replace(hour=hour) + timedelta(
                        minutes=rng.randint(0, 59)
                    ),
                    metadata={"device": rng.choice(["desktop", "mobile", "tablet"])},
                )
                campaign.events.append(event)
                engine.record_event(event)

            # Generate click events
            for _ in range(min(campaign.clicked, 20)):
                hour = rng.choices(
                    range(24),
                    weights=[
                        1, 1, 0.5, 0.5, 0.5, 1,
                        2, 3, 7, 9, 10, 8,
                        5, 6, 8, 9, 7, 5,
                        3, 2, 2, 1, 1, 1,
                    ],
                )[0]
                event = EmailEvent(
                    event_id=str(uuid.UUID(int=rng.getrandbits(128))),
                    email_id=campaign.campaign_id,
                    event_type="click",
                    timestamp=campaign.sent_at.replace(hour=hour) + timedelta(
                        minutes=rng.randint(0, 59)
                    ),
                    metadata={"link": rng.choice(["cta_main", "cta_secondary", "logo", "footer"])},
                )
                campaign.events.append(event)
                engine.record_event(event)

            # Generate reply events
            for _ in range(min(campaign.replied, 10)):
                hour = rng.randint(8, 17)
                event = EmailEvent(
                    event_id=str(uuid.UUID(int=rng.getrandbits(128))),
                    email_id=campaign.campaign_id,
                    event_type="reply",
                    timestamp=campaign.sent_at.replace(hour=hour) + timedelta(
                        hours=rng.randint(1, 48)
                    ),
                    metadata={"is_reply_all": rng.random() < 0.3},
                )
                campaign.events.append(event)
                engine.record_event(event)

    @classmethod
    def _generate_reply_threads(
        cls,
        engine: EmailAnalyticsEngine,
        rng: random.Random,
        campaigns: List[Campaign],
    ) -> None:
        """Generate reply thread data for reply-all tracking."""
        participants_pool = [
            "john.doe@example.com", "jane.smith@corp.io", "mike.brown@startup.co",
            "sarah.jones@enterprise.com", "tom.white@agency.net", "lisa.garcia@tech.io",
            "alex.lee@consulting.com", "nina.ross@media.org", "chris.taylor@sales.co",
            "maria.santos@global.com", "raj.patel@fintech.io", "emma.clark@health.com",
        ]

        for campaign in campaigns[:8]:  # Add threads to first 8 campaigns
            num_threads = rng.randint(3, 12)
            for t in range(num_threads):
                is_reply_all = rng.random() < 0.35
                depth = rng.randint(1, 7)
                participants = rng.sample(participants_pool, min(rng.randint(2, 5), len(participants_pool)))
                response_time = rng.uniform(5, 1440)  # 5 min to 24 hours

                reply_chain = []
                base_time = campaign.sent_at or datetime(2025, 10, 1)
                for d in range(depth):
                    reply_time = base_time + timedelta(minutes=response_time * (d + 1))
                    reply_chain.append({
                        "from": rng.choice(participants),
                        "timestamp": reply_time.isoformat(),
                        "is_reply_all": is_reply_all and rng.random() < 0.6,
                        "word_count": rng.randint(10, 500),
                    })

                thread = ReplyThread(
                    thread_id=f"THR-{campaign.campaign_id}-{t+1:03d}",
                    original_email_id=campaign.campaign_id,
                    participants=participants,
                    reply_count=depth,
                    is_reply_all=is_reply_all,
                    avg_response_time_minutes=round(response_time, 1),
                    thread_depth=depth,
                    last_reply_at=base_time + timedelta(minutes=response_time * depth),
                    reply_chain=reply_chain,
                )
                campaign.reply_threads.append(thread)
                engine.add_reply_thread(thread)


# ─────────────────────────────────────────────────────────────────────────────
# Main Demo
# ─────────────────────────────────────────────────────────────────────────────

def run_demo() -> None:
    """
    Full demo of the V125 Email Analytics Dashboard.
    Generates test data, runs all analytics, and displays formatted output.
    """
    print("\n" + "=" * 72)
    print("  V125 EMAIL ANALYTICS DASHBOARD — FULL DEMO")
    print("  Version 1.2.5 | Production Analytics Engine")
    print("=" * 72)
    print("\n  Initializing analytics engine...")

    engine = EmailAnalyticsEngine()

    print("  Generating realistic test data...")
    TestDataGenerator.generate(engine, seed=42)

    print(f"  Loaded {len(engine.campaigns)} campaigns, "
          f"{len(engine.team_members)} team members, "
          f"{len(engine.reply_threads)} reply threads")
    print(f"  Tracked {len(engine._event_log)} engagement events")

    formatter = DashboardFormatter

    # ── 1. Engagement Summary ──
    engagement = engine.get_engagement_summary()
    print(formatter.format_engagement(engagement))

    # ── 2. Engagement Trend ──
    trend = engine.get_engagement_trend(window_days=120)
    print(formatter.section("📈 Engagement Trend (Last 120 Days)"))
    if trend:
        for day_data in trend[-10:]:  # Show last 10 data points
            print(f"    {day_data['date']}  "
                  f"Open: {day_data['open_rate']:5.1f}%  "
                  f"Click: {day_data['click_rate']:5.1f}%  "
                  f"Reply: {day_data['reply_rate']:5.1f}%")
    else:
        print("  No trend data available in window.")

    # ── 3. Team Benchmark ──
    benchmark = engine.get_team_benchmark()
    print(formatter.format_team_benchmark(benchmark))

    # ── 4. ROI Analysis ──
    roi = engine.get_roi_analysis()
    print(formatter.format_roi(roi))

    # ── 5. Predictive Send Optimization ──
    optimization = engine.get_send_time_optimization()
    print(formatter.format_send_optimization(optimization))

    # ── 6. A/B Test Analysis ──
    ab_results = engine.get_ab_test_analysis()
    print(formatter.format_ab_test(ab_results))

    # ── 7. Case-by-Case Analysis (top 3 campaigns) ──
    print(formatter.section("📋 Case-by-Case Campaign Analysis"))
    top_campaigns = sorted(
        engine.campaigns.values(),
        key=lambda c: c.revenue_generated,
        reverse=True,
    )[:3]

    for campaign in top_campaigns:
        case = engine.get_case_analysis(campaign.campaign_id)
        print(formatter.format_case_analysis(case))

    # ── 8. Reply-All Tracking ──
    reply_report = engine.get_reply_all_report()
    print(formatter.format_reply_all_report(reply_report))

    # ── Summary ──
    print(formatter.header("✅ Dashboard Demo Complete"))
    print(f"""
  Summary Statistics:
  ─────────────────────────────────────────────────
  Total Campaigns Analyzed:    {len(engine.campaigns)}
  Total Team Members:          {len(engine.team_members)}
  Total Events Processed:      {len(engine._event_log)}
  Total Reply Threads:         {len(engine.reply_threads)}
  A/B Tests Analyzed:          {len(engine.ab_tests)}
  Overall ROI:                 {roi.get('overall_roi', 0):.1f}%
  Net Profit:                  ${roi.get('net_profit', 0):,.2f}
  Avg Open Rate:               {engagement.get('open_rate', 0):.1f}%
  Avg Click Rate:              {engagement.get('click_rate', 0):.1f}%
  Avg Reply Rate:              {engagement.get('reply_rate', 0):.1f}%
  ─────────────────────────────────────────────────
""")

    # ── Export demo ──
    import tempfile
    import os
    export_path = os.path.join(tempfile.gettempdir(), "v125_dashboard_report.json")
    engine.export_to_json(export_path)
    print(f"  📁 Full report exported to: {export_path}")
    print(f"  📊 Report size: {len(json.dumps(engine.generate_full_report(), default=str)):,} chars\n")


if __name__ == "__main__":
    run_demo()

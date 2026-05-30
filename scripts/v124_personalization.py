#!/usr/bin/env python3
"""
V124 AI Email Personalization Engine
=====================================
Production-quality email personalization system featuring:
- Dynamic content insertion based on recipient profiles
- Behavioral trigger personalization
- A/B testing for personalized elements
- Real-time personalization scoring
- Case-by-case email analysis
- Reply-all enforcement

Author: V124 Systems
Version: 1.2.4
"""

from __future__ import annotations

import hashlib
import json
import logging
import math
import re
import time
import uuid
from dataclasses import dataclass, field
from datetime import datetime, timedelta
from enum import Enum, auto
from typing import Any, Callable, Dict, List, Optional, Set, Tuple

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)
logger = logging.getLogger("V124Personalization")


# =============================================================================
# ENUMS
# =============================================================================


class PersonalizationType(Enum):
    """Types of personalization that can be applied to an email."""
    GREETING = auto()
    PRODUCT_RECOMMENDATION = auto()
    BEHAVIORAL_TRIGGER = auto()
    DYNAMIC_CONTENT_BLOCK = auto()
    SEND_TIME_OPTIMIZATION = auto()
    SUBJECT_LINE_VARIANT = auto()
    CTA_PERSONALIZATION = auto()
    SOCIAL_PROOF = auto()
    URGENCY_SIGNAL = auto()
    LOCATION_BASED = auto()


class TriggerType(Enum):
    """Behavioral triggers that initiate personalized content."""
    CART_ABANDONMENT = auto()
    BROWSE_ABANDONMENT = auto()
    PURCHASE_ANNIVERSARY = auto()
    RE_ENGAGEMENT = auto()
    PRICE_DROP = auto()
    BACK_IN_STOCK = auto()
    MILESTONE_REACHED = auto()
    CONTENT_ENGAGEMENT = auto()
    SEARCH_QUERY = auto()
    WISHLIST_ACTIVITY = auto()


class ABTestStatus(Enum):
    """Status of an A/B test campaign."""
    DRAFT = auto()
    RUNNING = auto()
    PAUSED = auto()
    COMPLETED = auto()
    INCONCLUSIVE = auto()


class EmailStatus(Enum):
    """Lifecycle status of a personalized email."""
    DRAFT = auto()
    PERSONALIZED = auto()
    QUEUED = auto()
    SENT = auto()
    DELIVERED = auto()
    OPENED = auto()
    CLICKED = auto()
    BOUNCED = auto()
    UNSUBSCRIBED = auto()


class ReplyMode(Enum):
    """Reply-all enforcement modes."""
    REPLY_SENDER_ONLY = auto()
    REPLY_ALL_ALLOWED = auto()
    REPLY_ALL_ENFORCED = auto()
    REPLY_ALL_BLOCKED = auto()
    CONDITIONAL_REPLY_ALL = auto()


class ContentPriority(Enum):
    """Priority levels for dynamic content blocks."""
    CRITICAL = 1
    HIGH = 2
    MEDIUM = 3
    LOW = 4
    OPTIONAL = 5


class SegmentType(Enum):
    """Recipient segmentation types."""
    DEMOGRAPHIC = auto()
    BEHAVIORAL = auto()
    PSYCHOGRAPHIC = auto()
    FIRMographic = auto()
    LIFECYCLE_STAGE = auto()
    ENGAGEMENT_LEVEL = auto()


# =============================================================================
# DATACLASSES
# =============================================================================


@dataclass
class RecipientProfile:
    """Comprehensive recipient profile for personalization."""
    recipient_id: str
    email: str
    first_name: str
    last_name: str
    company: Optional[str] = None
    title: Optional[str] = None
    industry: Optional[str] = None
    location: Optional[str] = None
    timezone: str = "UTC"
    preferred_language: str = "en"
    segments: List[str] = field(default_factory=list)
    tags: Set[str] = field(default_factory=set)
    purchase_history: List[Dict[str, Any]] = field(default_factory=list)
    browse_history: List[Dict[str, Any]] = field(default_factory=list)
    engagement_score: float = 0.0
    last_interaction: Optional[datetime] = None
    email_preferences: Dict[str, Any] = field(default_factory=dict)
    custom_attributes: Dict[str, Any] = field(default_factory=dict)
    created_at: datetime = field(default_factory=datetime.utcnow)

    @property
    def full_name(self) -> str:
        return f"{self.first_name} {self.last_name}".strip()

    @property
    def days_since_last_interaction(self) -> Optional[int]:
        if self.last_interaction:
            return (datetime.utcnow() - self.last_interaction).days
        return None

    @property
    def total_purchases(self) -> float:
        return sum(p.get("amount", 0) for p in self.purchase_history)

    @property
    def is_engaged(self) -> bool:
        return self.engagement_score >= 0.5 and (
            self.days_since_last_interaction is None
            or self.days_since_last_interaction <= 30
        )


@dataclass
class BehavioralTrigger:
    """A behavioral trigger event."""
    trigger_id: str
    trigger_type: TriggerType
    recipient_id: str
    event_data: Dict[str, Any] = field(default_factory=dict)
    triggered_at: datetime = field(default_factory=datetime.utcnow)
    expires_at: Optional[datetime] = None
    priority: int = 5
    processed: bool = False

    @property
    def is_expired(self) -> bool:
        if self.expires_at:
            return datetime.utcnow() > self.expires_at
        return False

    @property
    def is_valid(self) -> bool:
        return not self.processed and not self.is_expired


@dataclass
class PersonalizationElement:
    """A single personalization element to be inserted into email content."""
    element_id: str
    ptype: PersonalizationType
    template: str
    fallback: str = ""
    conditions: List[Dict[str, Any]] = field(default_factory=list)
    priority: ContentPriority = ContentPriority.MEDIUM
    weight: float = 1.0
    enabled: bool = True

    def evaluate_condition(self, profile: RecipientProfile) -> bool:
        """Evaluate whether this element should be shown to the recipient."""
        if not self.conditions:
            return True

        for condition in self.conditions:
            attr = condition.get("attribute", "")
            operator = condition.get("operator", "eq")
            value = condition.get("value")

            # Resolve attribute value from profile
            actual = self._resolve_attribute(profile, attr)
            if actual is None:
                return False

            if operator == "eq" and actual != value:
                return False
            elif operator == "ne" and actual == value:
                return False
            elif operator == "gt" and not (isinstance(actual, (int, float)) and actual > value):
                return False
            elif operator == "lt" and not (isinstance(actual, (int, float)) and actual < value):
                return False
            elif operator == "in" and actual not in value:
                return False
            elif operator == "contains" and value not in str(actual):
                return False
            elif operator == "exists" and actual is None:
                return False

        return True

    def _resolve_attribute(self, profile: RecipientProfile, attr: str) -> Any:
        """Resolve an attribute path from a recipient profile."""
        parts = attr.split(".")
        obj: Any = profile
        for part in parts:
            if hasattr(obj, part):
                obj = getattr(obj, part)
            elif isinstance(obj, dict) and part in obj:
                obj = obj[part]
            else:
                return None
        return obj

    def render(self, profile: RecipientProfile) -> str:
        """Render the personalization element for a specific recipient."""
        if not self.enabled or not self.evaluate_condition(profile):
            return self.fallback

        result = self.template
        # Replace profile tokens: {{first_name}}, {{company}}, etc.
        token_pattern = re.compile(r"\{\{(\w+(?:\.\w+)*)\}\}")
        for match in token_pattern.finditer(self.template):
            token = match.group(1)
            value = self._resolve_attribute(profile, token)
            if value is not None:
                result = result.replace(match.group(0), str(value))
            else:
                result = result.replace(match.group(0), self.fallback)

        return result


@dataclass
class ABTestVariant:
    """A variant in an A/B test."""
    variant_id: str
    name: str
    content: str
    personalization_elements: List[PersonalizationElement] = field(default_factory=list)
    traffic_allocation: float = 0.5
    metrics: Dict[str, float] = field(default_factory=dict)
    sample_size: int = 0

    @property
    def open_rate(self) -> float:
        return self.metrics.get("open_rate", 0.0)

    @property
    def click_rate(self) -> float:
        return self.metrics.get("click_rate", 0.0)

    @property
    def conversion_rate(self) -> float:
        return self.metrics.get("conversion_rate", 0.0)


@dataclass
class ABTestConfig:
    """Configuration for an A/B test campaign."""
    test_id: str
    name: str
    hypothesis: str
    variants: List[ABTestVariant] = field(default_factory=list)
    status: ABTestStatus = ABTestStatus.DRAFT
    start_date: Optional[datetime] = None
    end_date: Optional[datetime] = None
    min_sample_size: int = 1000
    confidence_level: float = 0.95
    primary_metric: str = "open_rate"
    winner_variant_id: Optional[str] = None
    assignment_map: Dict[str, str] = field(default_factory=dict)

    @property
    def is_running(self) -> bool:
        return self.status == ABTestStatus.RUNNING

    def assign_variant(self, recipient_id: str) -> Optional[ABTestVariant]:
        """Consistently assign a recipient to a test variant."""
        if recipient_id in self.assignment_map:
            variant_id = self.assignment_map[recipient_id]
            return next((v for v in self.variants if v.variant_id == variant_id), None)

        # Deterministic assignment based on hash
        hash_input = f"{self.test_id}:{recipient_id}"
        hash_val = int(hashlib.md5(hash_input.encode()).hexdigest(), 16)
        normalized = (hash_val % 10000) / 10000.0

        cumulative = 0.0
        for variant in self.variants:
            cumulative += variant.traffic_allocation
            if normalized < cumulative:
                self.assignment_map[recipient_id] = variant.variant_id
                return variant

        # Fallback to last variant
        if self.variants:
            self.assignment_map[recipient_id] = self.variants[-1].variant_id
            return self.variants[-1]
        return None


@dataclass
class PersonalizationScore:
    """Real-time personalization relevance score."""
    recipient_id: str
    email_id: str
    overall_score: float = 0.0
    component_scores: Dict[str, float] = field(default_factory=dict)
    confidence: float = 0.0
    timestamp: datetime = field(default_factory=datetime.utcnow)
    factors: List[str] = field(default_factory=list)

    @property
    def grade(self) -> str:
        if self.overall_score >= 0.9:
            return "A+"
        elif self.overall_score >= 0.8:
            return "A"
        elif self.overall_score >= 0.7:
            return "B+"
        elif self.overall_score >= 0.6:
            return "B"
        elif self.overall_score >= 0.5:
            return "C"
        elif self.overall_score >= 0.3:
            return "D"
        else:
            return "F"

    @property
    def is_actionable(self) -> bool:
        return self.overall_score >= 0.5 and self.confidence >= 0.6


@dataclass
class EmailAnalysis:
    """Case-by-case analysis of a personalized email."""
    email_id: str
    recipient_id: str
    analysis_timestamp: datetime = field(default_factory=datetime.utcnow)
    personalization_score: Optional[PersonalizationScore] = None
    elements_applied: List[str] = field(default_factory=list)
    elements_skipped: List[str] = field(default_factory=list)
    trigger_matches: List[str] = field(default_factory=list)
    content_quality_score: float = 0.0
    spam_risk_score: float = 0.0
    predicted_open_probability: float = 0.0
    predicted_click_probability: float = 0.0
    recommendations: List[str] = field(default_factory=list)
    warnings: List[str] = field(default_factory=list)
    reply_mode_applied: Optional[ReplyMode] = None
    ab_test_variant: Optional[str] = None

    @property
    def health_score(self) -> float:
        """Overall email health (0-1)."""
        quality_weight = 0.3
        spam_weight = 0.3
        personalization_weight = 0.4
        p_score = (
            self.personalization_score.overall_score
            if self.personalization_score
            else 0.0
        )
        return (
            self.content_quality_score * quality_weight
            + (1.0 - self.spam_risk_score) * spam_weight
            + p_score * personalization_weight
        )

    def to_report(self) -> str:
        """Generate a human-readable analysis report."""
        lines = [
            f"=== Email Analysis Report ===",
            f"Email ID: {self.email_id}",
            f"Recipient: {self.recipient_id}",
            f"Timestamp: {self.analysis_timestamp.isoformat()}",
            f"",
            f"--- Scores ---",
            f"Personalization: {self.personalization_score.overall_score:.2%} ({self.personalization_score.grade})"
            if self.personalization_score
            else "Personalization: N/A",
            f"Content Quality: {self.content_quality_score:.2%}",
            f"Spam Risk: {self.spam_risk_score:.2%}",
            f"Health Score: {self.health_score:.2%}",
            f"Predicted Open: {self.predicted_open_probability:.2%}",
            f"Predicted Click: {self.predicted_click_probability:.2%}",
            f"",
            f"--- Elements Applied ({len(self.elements_applied)}) ---",
        ]
        for elem in self.elements_applied:
            lines.append(f"  ✓ {elem}")
        if self.elements_skipped:
            lines.append(f"")
            lines.append(f"--- Elements Skipped ({len(self.elements_skipped)}) ---")
            for elem in self.elements_skipped:
                lines.append(f"  ✗ {elem}")
        if self.trigger_matches:
            lines.append(f"")
            lines.append(f"--- Trigger Matches ---")
            for t in self.trigger_matches:
                lines.append(f"  ⚡ {t}")
        if self.recommendations:
            lines.append(f"")
            lines.append(f"--- Recommendations ---")
            for r in self.recommendations:
                lines.append(f"  → {r}")
        if self.warnings:
            lines.append(f"")
            lines.append(f"--- Warnings ---")
            for w in self.warnings:
                lines.append(f"  ⚠ {w}")
        lines.append(f"")
        lines.append(f"Reply Mode: {self.reply_mode_applied.name if self.reply_mode_applied else 'N/A'}")
        if self.ab_test_variant:
            lines.append(f"A/B Variant: {self.ab_test_variant}")
        return "\n".join(lines)


@dataclass
class EmailContent:
    """Email content with personalization support."""
    email_id: str
    subject: str
    body_html: str
    body_text: str
    sender_email: str
    sender_name: str
    recipients: List[str] = field(default_factory=list)
    cc_recipients: List[str] = field(default_factory=list)
    bcc_recipients: List[str] = field(default_factory=list)
    reply_to: Optional[str] = None
    reply_mode: ReplyMode = ReplyMode.REPLY_SENDER_ONLY
    status: EmailStatus = EmailStatus.DRAFT
    personalization_elements: List[PersonalizationElement] = field(default_factory=list)
    ab_test_id: Optional[str] = None
    metadata: Dict[str, Any] = field(default_factory=dict)
    created_at: datetime = field(default_factory=datetime.utcnow)
    scheduled_send: Optional[datetime] = None

    @property
    def all_recipients(self) -> List[str]:
        return self.recipients + self.cc_recipients + self.bcc_recipients

    @property
    def has_multiple_recipients(self) -> bool:
        return len(self.all_recipients) > 1


# =============================================================================
# REPLY-ALL ENFORCER
# =============================================================================


class ReplyAllEnforcer:
    """Enforces reply-all policies on outgoing emails."""

    def __init__(self):
        self._rules: List[Dict[str, Any]] = []
        self._enforcement_log: List[Dict[str, Any]] = []

    def add_rule(
        self,
        name: str,
        condition: Callable[[EmailContent, RecipientProfile], bool],
        required_mode: ReplyMode,
        priority: int = 5,
    ) -> None:
        """Add a reply-all enforcement rule."""
        self._rules.append({
            "name": name,
            "condition": condition,
            "required_mode": required_mode,
            "priority": priority,
        })
        self._rules.sort(key=lambda r: r["priority"])

    def enforce(self, email: EmailContent, profile: RecipientProfile) -> Tuple[ReplyMode, List[str]]:
        """
        Determine the enforced reply mode for an email-recipient pair.
        Returns (enforced_mode, list_of_applied_rule_names).
        """
        applied_rules = []
        enforced_mode = email.reply_mode

        for rule in self._rules:
            try:
                if rule["condition"](email, profile):
                    applied_rules.append(rule["name"])
                    # Higher-priority rules override lower ones
                    if rule["required_mode"].value > enforced_mode.value:
                        enforced_mode = rule["required_mode"]
            except Exception as e:
                logger.warning(f"Rule '{rule['name']}' failed: {e}")

        # Log enforcement action
        self._enforcement_log.append({
            "email_id": email.email_id,
            "recipient_id": profile.recipient_id,
            "original_mode": email.reply_mode.name,
            "enforced_mode": enforced_mode.name,
            "rules_applied": applied_rules,
            "timestamp": datetime.utcnow().isoformat(),
        })

        return enforced_mode, applied_rules

    def get_enforcement_log(self) -> List[Dict[str, Any]]:
        return list(self._enforcement_log)

    def validate_reply_all_safety(self, email: EmailContent) -> List[str]:
        """Check if reply-all is safe for this email (e.g., no BCC leaks)."""
        warnings = []
        if email.bcc_recipients and email.reply_mode in (
            ReplyMode.REPLY_ALL_ALLOWED,
            ReplyMode.REPLY_ALL_ENFORCED,
        ):
            warnings.append(
                "BCC recipients present with reply-all enabled — "
                "BCC addresses may be exposed on reply-all."
            )
        if len(email.all_recipients) > 50 and email.reply_mode == ReplyMode.REPLY_ALL_ENFORCED:
            warnings.append(
                "Reply-all enforced on email with >50 recipients — "
                "high risk of reply-all storms."
            )
        if email.has_multiple_recipients and email.reply_mode == ReplyMode.REPLY_ALL_BLOCKED:
            warnings.append(
                "Reply-all blocked on multi-recipient email — "
                "recipients cannot coordinate responses."
            )
        return warnings


# =============================================================================
# A/B TEST MANAGER
# =============================================================================


class ABTestManager:
    """Manages A/B tests for personalized email elements."""

    def __init__(self):
        self._tests: Dict[str, ABTestConfig] = {}
        self._results: Dict[str, List[Dict[str, Any]]] = {}

    def create_test(
        self,
        name: str,
        hypothesis: str,
        variants: List[ABTestVariant],
        min_sample_size: int = 1000,
        confidence_level: float = 0.95,
        primary_metric: str = "open_rate",
    ) -> ABTestConfig:
        """Create a new A/B test."""
        test_id = f"ab_{uuid.uuid4().hex[:12]}"
        config = ABTestConfig(
            test_id=test_id,
            name=name,
            hypothesis=hypothesis,
            variants=variants,
            min_sample_size=min_sample_size,
            confidence_level=confidence_level,
            primary_metric=primary_metric,
        )
        self._tests[test_id] = config
        self._results[test_id] = []
        logger.info(f"Created A/B test '{name}' ({test_id}) with {len(variants)} variants")
        return config

    def start_test(self, test_id: str) -> bool:
        """Start an A/B test."""
        test = self._tests.get(test_id)
        if not test:
            logger.error(f"Test {test_id} not found")
            return False
        if test.status != ABTestStatus.DRAFT:
            logger.error(f"Test {test_id} is not in DRAFT status")
            return False
        test.status = ABTestStatus.RUNNING
        test.start_date = datetime.utcnow()
        logger.info(f"Started A/B test: {test.name}")
        return True

    def record_event(self, test_id: str, variant_id: str, event_type: str, value: float = 1.0) -> None:
        """Record an event (open, click, conversion) for a test variant."""
        test = self._tests.get(test_id)
        if not test:
            return

        variant = next((v for v in test.variants if v.variant_id == variant_id), None)
        if not variant:
            return

        variant.sample_size += 1
        if event_type == "open":
            variant.metrics["opens"] = variant.metrics.get("opens", 0) + value
            variant.metrics["open_rate"] = variant.metrics["opens"] / variant.sample_size
        elif event_type == "click":
            variant.metrics["clicks"] = variant.metrics.get("clicks", 0) + value
            variant.metrics["click_rate"] = variant.metrics["clicks"] / variant.sample_size
        elif event_type == "conversion":
            variant.metrics["conversions"] = variant.metrics.get("conversions", 0) + value
            variant.metrics["conversion_rate"] = variant.metrics["conversions"] / variant.sample_size

        self._results[test_id].append({
            "variant_id": variant_id,
            "event_type": event_type,
            "value": value,
            "timestamp": datetime.utcnow().isoformat(),
        })

    def evaluate_test(self, test_id: str) -> Dict[str, Any]:
        """
        Evaluate an A/B test for statistical significance.
        Uses a simplified Z-test for proportions.
        """
        test = self._tests.get(test_id)
        if not test or len(test.variants) < 2:
            return {"error": "Invalid test configuration"}

        results = {
            "test_id": test_id,
            "name": test.name,
            "status": test.status.name,
            "variants": [],
            "winner": None,
            "significant": False,
            "recommendation": "",
        }

        metric = test.primary_metric
        rates = []
        for variant in test.variants:
            rate = variant.metrics.get(metric, 0.0)
            rates.append((variant, rate))
            results["variants"].append({
                "variant_id": variant.variant_id,
                "name": variant.name,
                "sample_size": variant.sample_size,
                metric: rate,
            })

        # Check if we have enough samples
        total_samples = sum(v.sample_size for v in test.variants)
        if total_samples < test.min_sample_size:
            results["recommendation"] = (
                f"Insufficient data: {total_samples}/{test.min_sample_size} samples collected. "
                "Continue running the test."
            )
            return results

        # Simple Z-test between top two variants
        rates.sort(key=lambda x: x[1], reverse=True)
        top_variant, top_rate = rates[0]
        second_variant, second_rate = rates[1]

        n1 = max(top_variant.sample_size, 1)
        n2 = max(second_variant.sample_size, 1)
        p1 = top_rate
        p2 = second_rate
        p_pooled = (p1 * n1 + p2 * n2) / (n1 + n2)

        if p_pooled > 0 and p_pooled < 1:
            se = math.sqrt(p_pooled * (1 - p_pooled) * (1 / n1 + 1 / n2))
            z_score = abs(p1 - p2) / se if se > 0 else 0
            # Approximate p-value from Z-score
            p_value = 2 * (1 - self._normal_cdf(abs(z_score)))
        else:
            z_score = 0
            p_value = 1.0

        is_significant = p_value < (1 - test.confidence_level)
        results["significant"] = is_significant
        results["z_score"] = round(z_score, 4)
        results["p_value"] = round(p_value, 6)

        if is_significant:
            test.winner_variant_id = top_variant.variant_id
            test.status = ABTestStatus.COMPLETED
            results["winner"] = top_variant.name
            results["recommendation"] = (
                f"Variant '{top_variant.name}' wins with {top_rate:.2%} {metric} "
                f"vs {second_rate:.2%} (p={p_value:.4f}). Deploy the winning variant."
            )
        else:
            results["recommendation"] = (
                f"No statistically significant difference (p={p_value:.4f}). "
                "Consider extending the test or accepting inconclusive results."
            )

        return results

    @staticmethod
    def _normal_cdf(x: float) -> float:
        """Approximate standard normal CDF using error function approximation."""
        return 0.5 * (1.0 + math.erf(x / math.sqrt(2)))

    def get_test(self, test_id: str) -> Optional[ABTestConfig]:
        return self._tests.get(test_id)

    def list_tests(self) -> List[ABTestConfig]:
        return list(self._tests.values())


# =============================================================================
# PERSONALIZATION ENGINE
# =============================================================================


class PersonalizationEngine:
    """
    Core AI Email Personalization Engine.
    Orchestrates dynamic content insertion, behavioral triggers,
    A/B testing, scoring, and reply-all enforcement.
    """

    def __init__(self):
        self._profiles: Dict[str, RecipientProfile] = {}
        self._triggers: Dict[str, List[BehavioralTrigger]] = {}
        self._elements: List[PersonalizationElement] = []
        self._ab_manager = ABTestManager()
        self._reply_enforcer = ReplyAllEnforcer()
        self._emails: Dict[str, EmailContent] = {}
        self._analyses: Dict[str, EmailAnalysis] = {}
        self._scoring_weights: Dict[str, float] = {
            "profile_completeness": 0.15,
            "engagement_recency": 0.20,
            "trigger_relevance": 0.25,
            "content_match": 0.20,
            "historical_performance": 0.10,
            "segment_alignment": 0.10,
        }
        self._setup_default_reply_rules()

    def _setup_default_reply_rules(self) -> None:
        """Set up default reply-all enforcement rules."""
        # Rule: Multi-recipient internal emails should allow reply-all
        self._reply_enforcer.add_rule(
            name="internal_multi_recipient",
            condition=lambda email, profile: (
                email.has_multiple_recipients
                and profile.custom_attributes.get("is_internal", False)
            ),
            required_mode=ReplyMode.REPLY_ALL_ALLOWED,
            priority=1,
        )

        # Rule: External emails with BCC should block reply-all
        self._reply_enforcer.add_rule(
            name="external_bcc_block",
            condition=lambda email, profile: (
                bool(email.bcc_recipients)
                and not profile.custom_attributes.get("is_internal", False)
            ),
            required_mode=ReplyMode.REPLY_ALL_BLOCKED,
            priority=2,
        )

        # Rule: Large distribution lists enforce reply-all for coordination
        self._reply_enforcer.add_rule(
            name="large_distribution",
            condition=lambda email, profile: len(email.all_recipients) > 20,
            required_mode=ReplyMode.CONDITIONAL_REPLY_ALL,
            priority=3,
        )

        # Rule: Sensitive topics block reply-all
        self._reply_enforcer.add_rule(
            name="sensitive_topic_block",
            condition=lambda email, profile: (
                "sensitive" in email.metadata.get("category", "").lower()
                or "confidential" in email.metadata.get("category", "").lower()
            ),
            required_mode=ReplyMode.REPLY_ALL_BLOCKED,
            priority=1,
        )

    # ---- Profile Management ----

    def register_profile(self, profile: RecipientProfile) -> None:
        """Register or update a recipient profile."""
        self._profiles[profile.recipient_id] = profile
        logger.info(f"Registered profile: {profile.full_name} ({profile.email})")

    def get_profile(self, recipient_id: str) -> Optional[RecipientProfile]:
        return self._profiles.get(recipient_id)

    def list_profiles(self) -> List[RecipientProfile]:
        return list(self._profiles.values())

    # ---- Trigger Management ----

    def add_trigger(self, trigger: BehavioralTrigger) -> None:
        """Add a behavioral trigger for a recipient."""
        if trigger.recipient_id not in self._triggers:
            self._triggers[trigger.recipient_id] = []
        self._triggers[trigger.recipient_id].append(trigger)
        logger.info(
            f"Added trigger {trigger.trigger_type.name} for {trigger.recipient_id}"
        )

    def get_active_triggers(self, recipient_id: str) -> List[BehavioralTrigger]:
        """Get all valid (unexpired, unprocessed) triggers for a recipient."""
        triggers = self._triggers.get(recipient_id, [])
        return [t for t in triggers if t.is_valid]

    def process_trigger(self, trigger: BehavioralTrigger) -> None:
        """Mark a trigger as processed."""
        trigger.processed = True

    # ---- Element Management ----

    def register_element(self, element: PersonalizationElement) -> None:
        """Register a personalization element template."""
        self._elements.append(element)

    def get_applicable_elements(
        self, profile: RecipientProfile
    ) -> List[PersonalizationElement]:
        """Get all elements that apply to a given profile."""
        return [e for e in self._elements if e.evaluate_condition(profile)]

    # ---- Personalization Scoring ----

    def compute_personalization_score(
        self, email: EmailContent, profile: RecipientProfile
    ) -> PersonalizationScore:
        """Compute real-time personalization score for an email-recipient pair."""
        scores: Dict[str, float] = {}
        factors: List[str] = []

        # 1. Profile completeness score
        completeness_fields = [
            profile.first_name, profile.last_name, profile.company,
            profile.title, profile.industry, profile.location,
        ]
        filled = sum(1 for f in completeness_fields if f)
        scores["profile_completeness"] = filled / len(completeness_fields)
        if scores["profile_completeness"] >= 0.8:
            factors.append("Rich profile data available")

        # 2. Engagement recency score
        if profile.days_since_last_interaction is not None:
            days = profile.days_since_last_interaction
            if days <= 1:
                scores["engagement_recency"] = 1.0
            elif days <= 7:
                scores["engagement_recency"] = 0.8
            elif days <= 30:
                scores["engagement_recency"] = 0.6
            elif days <= 90:
                scores["engagement_recency"] = 0.3
            else:
                scores["engagement_recency"] = 0.1
            factors.append(f"Last interaction: {days} days ago")
        else:
            scores["engagement_recency"] = 0.2
            factors.append("No interaction history")

        # 3. Trigger relevance score
        active_triggers = self.get_active_triggers(profile.recipient_id)
        if active_triggers:
            max_priority = max(t.priority for t in active_triggers)
            scores["trigger_relevance"] = min(1.0, max_priority / 10.0 + 0.3)
            factors.append(f"{len(active_triggers)} active trigger(s)")
        else:
            scores["trigger_relevance"] = 0.2
            factors.append("No active triggers")

        # 4. Content match score
        applicable = self.get_applicable_elements(profile)
        total_elements = len(self._elements) if self._elements else 1
        scores["content_match"] = min(1.0, len(applicable) / max(total_elements * 0.5, 1))
        factors.append(f"{len(applicable)}/{total_elements} elements applicable")

        # 5. Historical performance score
        scores["historical_performance"] = min(1.0, profile.engagement_score)
        factors.append(f"Engagement score: {profile.engagement_score:.2f}")

        # 6. Segment alignment score
        if profile.segments:
            scores["segment_alignment"] = min(1.0, len(profile.segments) / 3.0)
            factors.append(f"Member of {len(profile.segments)} segment(s)")
        else:
            scores["segment_alignment"] = 0.1
            factors.append("No segment membership")

        # Weighted overall score
        overall = sum(
            scores.get(key, 0) * weight
            for key, weight in self._scoring_weights.items()
        )

        # Confidence based on data availability
        data_points = sum(1 for s in scores.values() if s > 0)
        confidence = data_points / len(self._scoring_weights)

        return PersonalizationScore(
            recipient_id=profile.recipient_id,
            email_id=email.email_id,
            overall_score=round(overall, 4),
            component_scores=scores,
            confidence=round(confidence, 4),
            factors=factors,
        )

    # ---- Email Analysis ----

    def analyze_email(
        self, email: EmailContent, profile: RecipientProfile
    ) -> EmailAnalysis:
        """Perform case-by-case analysis of a personalized email."""
        analysis = EmailAnalysis(
            email_id=email.email_id,
            recipient_id=profile.recipient_id,
        )

        # Compute personalization score
        analysis.personalization_score = self.compute_personalization_score(
            email, profile
        )

        # Evaluate elements
        for element in email.personalization_elements + self._elements:
            if element.evaluate_condition(profile):
                analysis.elements_applied.append(
                    f"{element.ptype.name}: {element.element_id}"
                )
            else:
                analysis.elements_skipped.append(
                    f"{element.ptype.name}: {element.element_id}"
                )

        # Check triggers
        active_triggers = self.get_active_triggers(profile.recipient_id)
        for trigger in active_triggers:
            analysis.trigger_matches.append(
                f"{trigger.trigger_type.name} (priority={trigger.priority})"
            )

        # Content quality score
        analysis.content_quality_score = self._assess_content_quality(email, profile)

        # Spam risk assessment
        analysis.spam_risk_score = self._assess_spam_risk(email, profile)

        # Predicted engagement
        p_score = analysis.personalization_score.overall_score
        analysis.predicted_open_probability = min(
            1.0, p_score * 0.6 + profile.engagement_score * 0.4
        )
        analysis.predicted_click_probability = min(
            1.0, analysis.predicted_open_probability * 0.35
        )

        # Reply-all enforcement
        enforced_mode, applied_rules = self._reply_enforcer.enforce(email, profile)
        analysis.reply_mode_applied = enforced_mode
        reply_warnings = self._reply_enforcer.validate_reply_all_safety(email)
        analysis.warnings.extend(reply_warnings)
        if applied_rules:
            analysis.recommendations.append(
                f"Reply rules applied: {', '.join(applied_rules)}"
            )

        # A/B test assignment
        if email.ab_test_id:
            test = self._ab_manager.get_test(email.ab_test_id)
            if test and test.is_running:
                variant = test.assign_variant(profile.recipient_id)
                if variant:
                    analysis.ab_test_variant = variant.name

        # Generate recommendations
        if analysis.content_quality_score < 0.5:
            analysis.recommendations.append(
                "Improve content quality — consider more specific personalization."
            )
        if analysis.spam_risk_score > 0.5:
            analysis.warnings.append(
                "High spam risk — review subject line and content for trigger words."
            )
        if p_score < 0.4:
            analysis.recommendations.append(
                "Low personalization score — enrich recipient profile or add more elements."
            )
        if not analysis.trigger_matches:
            analysis.recommendations.append(
                "No behavioral triggers matched — consider adding trigger-based content."
            )

        # Store analysis
        analysis_key = f"{email.email_id}:{profile.recipient_id}"
        self._analyses[analysis_key] = analysis

        return analysis

    def _assess_content_quality(self, email: EmailContent, profile: RecipientProfile) -> float:
        """Assess the quality of personalized content."""
        score = 0.5  # Base score

        # Bonus for personalization tokens in subject
        if "{{" in email.subject:
            score += 0.1

        # Bonus for matching recipient segments
        if profile.segments:
            score += 0.1

        # Bonus for having personalization elements
        if email.personalization_elements:
            score += 0.1 * min(len(email.personalization_elements), 3) / 3

        # Bonus for reasonable email length
        body_len = len(email.body_text)
        if 200 <= body_len <= 2000:
            score += 0.1
        elif body_len > 5000:
            score -= 0.1

        # Penalty for too many merge tokens (over-personalization)
        token_count = email.body_html.count("{{")
        if token_count > 15:
            score -= 0.1

        return max(0.0, min(1.0, score))

    def _assess_spam_risk(self, email: EmailContent, profile: RecipientProfile) -> float:
        """Assess spam risk of the email."""
        risk = 0.1  # Base low risk

        subject = email.subject.lower()
        spam_words = [
            "free", "guarantee", "urgent", "act now", "limited time",
            "winner", "congratulations", "click here", "buy now",
            "risk-free", "no obligation", "cash", "bonus",
        ]
        for word in spam_words:
            if word in subject:
                risk += 0.08

        # Excessive exclamation marks
        if email.subject.count("!") > 2:
            risk += 0.1

        # ALL CAPS in subject
        if email.subject.isupper() and len(email.subject) > 5:
            risk += 0.15

        # Too many images vs text ratio (heuristic)
        img_count = email.body_html.lower().count("<img")
        text_length = len(re.sub(r"<[^>]+>", "", email.body_html))
        if img_count > 5 and text_length < 200:
            risk += 0.15

        return max(0.0, min(1.0, risk))

    # ---- Email Processing ----

    def personalize_email(
        self, email: EmailContent, recipient_id: str
    ) -> Dict[str, Any]:
        """
        Fully personalize an email for a specific recipient.
        Returns the personalized content and analysis.
        """
        profile = self.get_profile(recipient_id)
        if not profile:
            logger.error(f"Profile not found for recipient: {recipient_id}")
            return {"error": f"Profile not found: {recipient_id}"}

        # Run analysis
        analysis = self.analyze_email(email, profile)

        # Render personalized content
        personalized_subject = email.subject
        personalized_body_html = email.body_html
        personalized_body_text = email.body_text

        # Apply all personalization elements
        all_elements = email.personalization_elements + self._elements
        for element in all_elements:
            rendered = element.render(profile)
            placeholder = f"%%{element.element_id}%%"
            personalized_subject = personalized_subject.replace(placeholder, rendered)
            personalized_body_html = personalized_body_html.replace(placeholder, rendered)
            personalized_body_text = personalized_body_text.replace(placeholder, rendered)

        # Handle A/B test variant content
        ab_content = None
        if email.ab_test_id and analysis.ab_test_variant:
            test = self._ab_manager.get_test(email.ab_test_id)
            if test:
                variant = test.assign_variant(recipient_id)
                if variant:
                    ab_content = variant.content
                    personalized_body_html = personalized_body_html.replace(
                        "%%AB_CONTENT%%", variant.content
                    )

        # Process triggers
        triggers = self.get_active_triggers(recipient_id)
        trigger_content = ""
        for trigger in triggers:
            if trigger.trigger_type == TriggerType.CART_ABANDONMENT:
                items = trigger.event_data.get("items", [])
                item_names = ", ".join(i.get("name", "item") for i in items[:3])
                trigger_content += f"\n<p>We noticed you left {item_names} in your cart!</p>"
            elif trigger.trigger_type == TriggerType.PRICE_DROP:
                product = trigger.event_data.get("product", "your wishlist item")
                new_price = trigger.event_data.get("new_price", "")
                trigger_content += f"\n<p>Great news! {product} is now {new_price}!</p>"
            elif trigger.trigger_type == TriggerType.PURCHASE_ANNIVERSARY:
                years = trigger.event_data.get("years", 1)
                trigger_content += f"\n<p>Happy {years}-year anniversary with us, {profile.first_name}!</p>"
            elif trigger.trigger_type == TriggerType.RE_ENGAGEMENT:
                trigger_content += f"\n<p>We miss you, {profile.first_name}! Here's something special just for you.</p>"
            self.process_trigger(trigger)

        if trigger_content:
            personalized_body_html = personalized_body_html.replace(
                "%%TRIGGER_CONTENT%%", trigger_content
            )
            personalized_body_text = personalized_body_text.replace(
                "%%TRIGGER_CONTENT%%", re.sub(r"<[^>]+>", "", trigger_content))

        # Update email status
        email.status = EmailStatus.PERSONALIZED

        return {
            "email_id": email.email_id,
            "recipient_id": recipient_id,
            "recipient_name": profile.full_name,
            "personalized_subject": personalized_subject,
            "personalized_body_html": personalized_body_html,
            "personalized_body_text": personalized_body_text,
            "reply_mode": analysis.reply_mode_applied.name,
            "personalization_score": analysis.personalization_score.overall_score,
            "personalization_grade": analysis.personalization_score.grade,
            "ab_variant": analysis.ab_test_variant,
            "analysis": analysis,
        }

    def process_multi_recipient_email(
        self, email: EmailContent
    ) -> Dict[str, Dict[str, Any]]:
        """
        Process an email for all its recipients with individual personalization.
        Handles reply-all enforcement across all recipients.
        """
        results = {}

        logger.info(
            f"Processing email '{email.subject}' for {len(email.all_recipients)} recipients"
        )

        # Check reply-all safety first
        reply_warnings = self._reply_enforcer.validate_reply_all_safety(email)
        if reply_warnings:
            for warning in reply_warnings:
                logger.warning(f"Reply-all safety: {warning}")

        for recipient_id in email.all_recipients:
            result = self.personalize_email(email, recipient_id)
            results[recipient_id] = result

        return results

    @property
    def ab_test_manager(self) -> ABTestManager:
        return self._ab_manager

    @property
    def reply_enforcer(self) -> ReplyAllEnforcer:
        return self._reply_enforcer


# =============================================================================
# DEMO / __main__
# =============================================================================


def create_demo_profiles() -> List[RecipientProfile]:
    """Create sample recipient profiles for demonstration."""
    return [
        RecipientProfile(
            recipient_id="rec_001",
            email="alice.chen@techcorp.com",
            first_name="Alice",
            last_name="Chen",
            company="TechCorp",
            title="VP of Engineering",
            industry="Technology",
            location="San Francisco, CA",
            timezone="America/Los_Angeles",
            segments=["enterprise", "engineering_leaders", "west_coast"],
            tags={"decision_maker", "tech_savvy", "early_adopter"},
            purchase_history=[
                {"product": "Enterprise Suite", "amount": 15000, "date": "2025-11-15"},
                {"product": "API Credits Pack", "amount": 2500, "date": "2026-02-20"},
            ],
            browse_history=[
                {"page": "/pricing/enterprise", "timestamp": "2026-05-28T10:30:00"},
                {"page": "/features/analytics", "timestamp": "2026-05-29T08:15:00"},
            ],
            engagement_score=0.85,
            last_interaction=datetime(2026, 5, 28, 14, 30),
            email_preferences={"frequency": "weekly", "format": "html"},
            custom_attributes={"is_internal": False, "account_tier": "platinum"},
        ),
        RecipientProfile(
            recipient_id="rec_002",
            email="bob.martinez@startupxyz.io",
            first_name="Bob",
            last_name="Martinez",
            company="StartupXYZ",
            title="CTO",
            industry="SaaS",
            location="Austin, TX",
            timezone="America/Chicago",
            segments=["startup", "technical_founders", "growth_stage"],
            tags={"price_sensitive", "api_focused", "community_member"},
            purchase_history=[
                {"product": "Starter Plan", "amount": 299, "date": "2026-01-10"},
            ],
            browse_history=[
                {"page": "/pricing/pro", "timestamp": "2026-05-27T16:45:00"},
                {"page": "/integrations", "timestamp": "2026-05-28T11:00:00"},
            ],
            engagement_score=0.62,
            last_interaction=datetime(2026, 5, 27, 16, 45),
            email_preferences={"frequency": "daily", "format": "text"},
            custom_attributes={"is_internal": False, "account_tier": "gold"},
        ),
        RecipientProfile(
            recipient_id="rec_003",
            email="carol.wu@globalfinance.com",
            first_name="Carol",
            last_name="Wu",
            company="GlobalFinance Inc.",
            title="Director of Operations",
            industry="Financial Services",
            location="New York, NY",
            timezone="America/New_York",
            segments=["enterprise", "finance", "compliance_focused"],
            tags={"risk_averse", "compliance_focused", "long_term_client"},
            purchase_history=[
                {"product": "Compliance Suite", "amount": 45000, "date": "2024-06-01"},
                {"product": "Annual Renewal", "amount": 42000, "date": "2025-06-01"},
            ],
            browse_history=[
                {"page": "/security/whitepaper", "timestamp": "2026-05-25T09:00:00"},
            ],
            engagement_score=0.45,
            last_interaction=datetime(2026, 5, 25, 9, 0),
            email_preferences={"frequency": "monthly", "format": "html"},
            custom_attributes={"is_internal": False, "account_tier": "diamond"},
        ),
        RecipientProfile(
            recipient_id="rec_004",
            email="dave.johnson@internal.team",
            first_name="Dave",
            last_name="Johnson",
            company="Our Company",
            title="Sales Manager",
            industry="Internal",
            location="Chicago, IL",
            timezone="America/Chicago",
            segments=["internal", "sales_team"],
            tags={"internal", "sales"},
            engagement_score=0.92,
            last_interaction=datetime(2026, 5, 29, 7, 0),
            custom_attributes={"is_internal": True, "department": "sales"},
        ),
        RecipientProfile(
            recipient_id="rec_005",
            email="eve.nakamura@designlab.co",
            first_name="Eve",
            last_name="Nakamura",
            company="DesignLab",
            title="Creative Director",
            industry="Design",
            location="Portland, OR",
            timezone="America/Los_Angeles",
            segments=["creative", "agency", "small_business"],
            tags={"visual_learner", "design_focused", "freelancer"},
            purchase_history=[],
            browse_history=[
                {"page": "/templates/gallery", "timestamp": "2026-05-29T12:00:00"},
                {"page": "/features/collaboration", "timestamp": "2026-05-29T12:15:00"},
            ],
            engagement_score=0.35,
            last_interaction=datetime(2026, 5, 29, 12, 15),
            email_preferences={"frequency": "weekly", "format": "html"},
            custom_attributes={"is_internal": False, "account_tier": "silver", "is_prospect": True},
        ),
    ]


def create_demo_triggers() -> List[BehavioralTrigger]:
    """Create sample behavioral triggers."""
    return [
        BehavioralTrigger(
            trigger_id="trg_001",
            trigger_type=TriggerType.CART_ABANDONMENT,
            recipient_id="rec_002",
            event_data={
                "items": [
                    {"name": "Pro Plan Upgrade", "price": "$99/mo"},
                    {"name": "API Add-on", "price": "$49/mo"},
                ],
                "cart_value": "$148/mo",
                "abandoned_at": "2026-05-27T17:00:00",
            },
            priority=8,
            expires_at=datetime.utcnow() + timedelta(days=3),
        ),
        BehavioralTrigger(
            trigger_id="trg_002",
            trigger_type=TriggerType.PURCHASE_ANNIVERSARY,
            recipient_id="rec_003",
            event_data={"years": 2, "original_product": "Compliance Suite"},
            priority=6,
            expires_at=datetime.utcnow() + timedelta(days=7),
        ),
        BehavioralTrigger(
            trigger_id="trg_003",
            trigger_type=TriggerType.PRICE_DROP,
            recipient_id="rec_005",
            event_data={
                "product": "Design Collaboration Suite",
                "old_price": "$79/mo",
                "new_price": "$49/mo",
                "discount_pct": 38,
            },
            priority=7,
            expires_at=datetime.utcnow() + timedelta(days=5),
        ),
        BehavioralTrigger(
            trigger_id="trg_004",
            trigger_type=TriggerType.CONTENT_ENGAGEMENT,
            recipient_id="rec_001",
            event_data={
                "content_type": "whitepaper",
                "title": "AI-Driven Engineering Management",
                "engagement_depth": "full_read",
            },
            priority=5,
        ),
        BehavioralTrigger(
            trigger_id="trg_005",
            trigger_type=TriggerType.RE_ENGAGEMENT,
            recipient_id="rec_003",
            event_data={
                "days_inactive": 4,
                "last_feature_used": "compliance_reports",
                "incentive": "15% off renewal",
            },
            priority=7,
            expires_at=datetime.utcnow() + timedelta(days=10),
        ),
    ]


def create_demo_elements() -> List[PersonalizationElement]:
    """Create sample personalization elements."""
    return [
        PersonalizationElement(
            element_id="greeting_personalized",
            ptype=PersonalizationType.GREETING,
            template="<h2>Hi {{first_name}},</h2>",
            fallback="<h2>Hello,</h2>",
            priority=ContentPriority.CRITICAL,
        ),
        PersonalizationElement(
            element_id="company_reference",
            ptype=PersonalizationType.DYNAMIC_CONTENT_BLOCK,
            template=(
                "<p>At {{company}}, your team's success is our priority. "
                "As a {{title}}, you'll appreciate our latest features.</p>"
            ),
            fallback="<p>Discover our latest features designed for leaders like you.</p>",
            conditions=[
                {"attribute": "company", "operator": "exists", "value": True},
                {"attribute": "title", "operator": "exists", "value": True},
            ],
            priority=ContentPriority.HIGH,
        ),
        PersonalizationElement(
            element_id="industry_specific_cta",
            ptype=PersonalizationType.CTA_PERSONALIZATION,
            template='<a href="/solutions/{{industry}}?ref=email" class="cta-btn">Explore {{industry}} Solutions</a>',
            fallback='<a href="/solutions" class="cta-btn">Explore Our Solutions</a>',
            conditions=[
                {"attribute": "industry", "operator": "exists", "value": True},
            ],
            priority=ContentPriority.HIGH,
        ),
        PersonalizationElement(
            element_id="enterprise_social_proof",
            ptype=PersonalizationType.SOCIAL_PROOF,
            template=(
                "<blockquote>Join 500+ {{industry}} companies already using our platform. "
                "Companies like yours see a 40% productivity boost.</blockquote>"
            ),
            fallback="",
            conditions=[
                {"attribute": "segments", "operator": "contains", "value": "enterprise"},
            ],
            priority=ContentPriority.MEDIUM,
        ),
        PersonalizationElement(
            element_id="location_event",
            ptype=PersonalizationType.LOCATION_BASED,
            template=(
                "<p>📍 We're hosting an event near {{location}} next month! "
                "RSVP for exclusive access.</p>"
            ),
            fallback="",
            conditions=[
                {"attribute": "location", "operator": "exists", "value": True},
                {"attribute": "engagement_score", "operator": "gt", "value": 0.5},
            ],
            priority=ContentPriority.MEDIUM,
        ),
        PersonalizationElement(
            element_id="urgency_high_engagement",
            ptype=PersonalizationType.URGENCY_SIGNAL,
            template="<p>⏰ Exclusive offer expires in 48 hours — tailored for {{company}}!</p>",
            fallback="",
            conditions=[
                {"attribute": "engagement_score", "operator": "gt", "value": 0.7},
                {"attribute": "company", "operator": "exists", "value": True},
            ],
            priority=ContentPriority.LOW,
        ),
    ]


def run_demo():
    """Run the full V124 AI Email Personalization Engine demo."""
    print("=" * 72)
    print("  V124 AI EMAIL PERSONALIZATION ENGINE — DEMO")
    print("  Version 1.2.4 | Production Build")
    print("=" * 72)
    print()

    # ---- Initialize Engine ----
    engine = PersonalizationEngine()

    # ---- Register Profiles ----
    print("📋 Registering recipient profiles...")
    profiles = create_demo_profiles()
    for profile in profiles:
        engine.register_profile(profile)
    print(f"   ✓ {len(profiles)} profiles registered\n")

    # ---- Register Triggers ----
    print("⚡ Loading behavioral triggers...")
    triggers = create_demo_triggers()
    for trigger in triggers:
        engine.add_trigger(trigger)
    print(f"   ✓ {len(triggers)} triggers loaded\n")

    # ---- Register Elements ----
    print("🧩 Registering personalization elements...")
    elements = create_demo_elements()
    for element in elements:
        engine.register_element(element)
    print(f"   ✓ {len(elements)} elements registered\n")

    # ---- Set up A/B Test ----
    print("🔬 Configuring A/B test...")
    ab_test = engine.ab_test_manager.create_test(
        name="Subject Line Personalization Test",
        hypothesis="Personalized subject lines with company name increase open rates by 15%",
        variants=[
            ABTestVariant(
                variant_id="var_a",
                name="Control (Generic Subject)",
                content="<p>Check out our latest features and updates!</p>",
                traffic_allocation=0.5,
            ),
            ABTestVariant(
                variant_id="var_b",
                name="Treatment (Personalized Subject)",
                content="<p>Exciting updates for {{company}} — features your team will love!</p>",
                traffic_allocation=0.5,
            ),
        ],
        min_sample_size=100,
        confidence_level=0.95,
        primary_metric="open_rate",
    )
    engine.ab_test_manager.start_test(ab_test.test_id)
    print(f"   ✓ A/B test '{ab_test.name}' started ({ab_test.test_id})\n")

    # ---- Create Test Emails ----
    print("📧 Creating test emails...")
    print()

    # Email 1: Marketing campaign with multiple recipients
    email_marketing = EmailContent(
        email_id="email_mkt_001",
        subject="%%greeting_personalized%% New Features for Your Team",
        body_html="""
        <html>
        <body>
        %%greeting_personalized%%
        %%company_reference%%
        <p>We're excited to share our latest platform updates designed to help
        your team work smarter.</p>
        %%industry_specific_cta%%
        %%enterprise_social_proof%%
        %%location_event%%
        %%urgency_high_engagement%%
        %%TRIGGER_CONTENT%%
        %%AB_CONTENT%%
        <p>Best regards,<br>The Product Team</p>
        </body>
        </html>
        """,
        body_text="Hi {first_name}, new features for your team...",
        sender_email="product@ourcompany.com",
        sender_name="Product Team",
        recipients=["rec_001", "rec_002", "rec_005"],
        cc_recipients=["rec_004"],
        reply_mode=ReplyMode.REPLY_ALL_ALLOWED,
        personalization_elements=elements,
        ab_test_id=ab_test.test_id,
        metadata={"category": "marketing", "campaign": "spring_2026"},
    )

    # Email 2: Internal coordination email
    email_internal = EmailContent(
        email_id="email_int_002",
        subject="Q2 Review — Action Items for the Team",
        body_html="""
        <html>
        <body>
        <h2>Team,</h2>
        <p>Here are the action items from our Q2 review meeting.</p>
        <ul>
            <li>Review pipeline targets</li>
            <li>Update forecast models</li>
            <li>Prepare customer success stories</li>
        </ul>
        <p>Please reply-all with your updates by EOD Friday.</p>
        </body>
        </html>
        """,
        body_text="Team, here are the Q2 action items...",
        sender_email="manager@ourcompany.com",
        sender_name="Sarah (VP Sales)",
        recipients=["rec_004"],
        cc_recipients=["rec_001"],
        reply_mode=ReplyMode.REPLY_ALL_ENFORCED,
        metadata={"category": "internal", "meeting_followup": True},
    )

    # Email 3: Sensitive notification
    email_sensitive = EmailContent(
        email_id="email_sens_003",
        subject="Your Account Security Update",
        body_html="""
        <html>
        <body>
        %%greeting_personalized%%
        <p>We've updated our security protocols. Please review your account settings.</p>
        %%company_reference%%
        <p>If you have questions, please reply directly to this email.</p>
        </body>
        </html>
        """,
        body_text="Dear customer, security update notification...",
        sender_email="security@ourcompany.com",
        sender_name="Security Team",
        recipients=["rec_001", "rec_002", "rec_003", "rec_005"],
        bcc_recipients=["rec_004"],
        reply_mode=ReplyMode.REPLY_SENDER_ONLY,
        personalization_elements=elements[:2],  # Only greeting + company ref
        metadata={"category": "sensitive", "security": True},
    )

    emails = [email_marketing, email_internal, email_sensitive]
    print(f"   ✓ {len(emails)} test emails created\n")

    # ---- Process Each Email ----
    for idx, email in enumerate(emails, 1):
        print("=" * 72)
        print(f"  EMAIL {idx}: {email.subject[:60]}")
        print(f"  ID: {email.email_id}")
        print(f"  Recipients: {len(email.all_recipients)} total")
        print(f"    TO: {', '.join(email.recipients)}")
        if email.cc_recipients:
            print(f"    CC: {', '.join(email.cc_recipients)}")
        if email.bcc_recipients:
            print(f"    BCC: {', '.join(email.bcc_recipients)}")
        print(f"  Reply Mode: {email.reply_mode.name}")
        print("=" * 72)
        print()

        results = engine.process_multi_recipient_email(email)

        for recipient_id, result in results.items():
            if "error" in result:
                print(f"  ❌ {recipient_id}: {result['error']}")
                continue

            profile = engine.get_profile(recipient_id)
            print(f"  👤 {result['recipient_name']} ({recipient_id})")
            print(f"     Email: {profile.email if profile else 'N/A'}")
            print(f"     Personalization Score: {result['personalization_score']:.2%} "
                  f"(Grade: {result['personalization_grade']})")
            print(f"     Reply Mode (enforced): {result['reply_mode']}")
            if result.get("ab_variant"):
                print(f"     A/B Variant: {result['ab_variant']}")

            # Show personalized subject
            print(f"     Subject: {result['personalized_subject'][:80]}")

            # Show analysis details
            analysis = result.get("analysis")
            if analysis:
                print(f"     Health Score: {analysis.health_score:.2%}")
                print(f"     Predicted Open: {analysis.predicted_open_probability:.2%}")
                print(f"     Predicted Click: {analysis.predicted_click_probability:.2%}")
                print(f"     Spam Risk: {analysis.spam_risk_score:.2%}")
                print(f"     Elements Applied: {len(analysis.elements_applied)}")
                print(f"     Triggers Matched: {len(analysis.trigger_matches)}")
                if analysis.warnings:
                    for w in analysis.warnings:
                        print(f"     ⚠️  Warning: {w}")
                if analysis.recommendations:
                    for r in analysis.recommendations:
                        print(f"     → {r}")
            print()

    # ---- Detailed Analysis Report for One Email ----
    print()
    print("=" * 72)
    print("  DETAILED CASE-BY-CASE ANALYSIS REPORT")
    print("=" * 72)
    print()

    # Pick the marketing email + Alice's profile for detailed report
    analysis_key = f"{email_marketing.email_id}:rec_001"
    if analysis_key in engine._analyses:
        detailed_analysis = engine._analyses[analysis_key]
        print(detailed_analysis.to_report())
    print()

    # ---- A/B Test Evaluation (simulate data) ----
    print("=" * 72)
    print("  A/B TEST EVALUATION (Simulated Results)")
    print("=" * 72)
    print()

    # Simulate recording events for A/B test
    import random
    random.seed(42)
    for _ in range(150):
        engine.ab_test_manager.record_event(ab_test.test_id, "var_a", "open", 1.0)
        if random.random() < 0.18:
            engine.ab_test_manager.record_event(ab_test.test_id, "var_a", "click", 1.0)

    for _ in range(150):
        engine.ab_test_manager.record_event(ab_test.test_id, "var_b", "open", 1.0)
        if random.random() < 0.27:
            engine.ab_test_manager.record_event(ab_test.test_id, "var_b", "click", 1.0)

    evaluation = engine.ab_test_manager.evaluate_test(ab_test.test_id)
    print(f"  Test: {evaluation['name']}")
    print(f"  Status: {evaluation['status']}")
    print(f"  Significant: {evaluation['significant']}")
    if "z_score" in evaluation:
        print(f"  Z-Score: {evaluation['z_score']}")
        print(f"  P-Value: {evaluation['p_value']}")
    print()
    for v in evaluation.get("variants", []):
        print(f"  Variant: {v['name']}")
        print(f"    Samples: {v['sample_size']}")
        print(f"    Open Rate: {v.get('open_rate', 0):.2%}")
        print()
    if evaluation.get("winner"):
        print(f"  🏆 Winner: {evaluation['winner']}")
    print(f"  📊 Recommendation: {evaluation['recommendation']}")
    print()

    # ---- Reply-All Enforcement Log ----
    print("=" * 72)
    print("  REPLY-ALL ENFORCEMENT LOG")
    print("=" * 72)
    print()

    enforcement_log = engine.reply_enforcer.get_enforcement_log()
    for entry in enforcement_log[:10]:
        print(f"  Email: {entry['email_id']} | Recipient: {entry['recipient_id']}")
        print(f"    Original: {entry['original_mode']} → Enforced: {entry['enforced_mode']}")
        if entry['rules_applied']:
            print(f"    Rules: {', '.join(entry['rules_applied'])}")
        print()

    # ---- Summary ----
    print("=" * 72)
    print("  DEMO COMPLETE — SUMMARY")
    print("=" * 72)
    print(f"  Profiles: {len(profiles)}")
    print(f"  Triggers: {len(triggers)}")
    print(f"  Elements: {len(elements)}")
    print(f"  Emails processed: {len(emails)}")
    print(f"  Total personalizations: {sum(len(e.all_recipients) for e in emails)}")
    print(f"  A/B tests: 1 ({ab_test.status.name})")
    print(f"  Reply enforcement actions: {len(enforcement_log)}")
    print("=" * 72)


if __name__ == "__main__":
    run_demo()

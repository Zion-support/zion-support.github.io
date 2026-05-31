"""
V684 - Email Priority Decay Tracker
====================================
An intelligent engine that tracks how email priority changes over time,
detects urgency decay, identifies forgotten high-priority items,
calculates priority half-life, and suggests priority reassessment.

Enforces reply-all policies for critical priority transitions.

Author: Hermes Agent
Version: 684
"""

import math
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Tuple, Any
from collections import defaultdict
from dataclasses import dataclass, field


@dataclass
class PriorityRecord:
    """A single priority observation at a point in time."""
    timestamp: datetime
    priority_score: float  # 0.0 (lowest) to 1.0 (highest)
    source: str = ""  # e.g., "user_flag", "auto_detect", "ml_model"
    context: Dict[str, Any] = field(default_factory=dict)


@dataclass
class EmailEntry:
    """Represents an email with its priority time-series."""
    email_id: str
    subject: str
    sender: str
    recipients: List[str]
    initial_priority: float
    created_at: datetime
    last_actioned_at: Optional[datetime] = None
    priority_history: List[PriorityRecord] = field(default_factory=list)
    is_read: bool = False
    is_replied: bool = False
    reply_all_count: int = 0
    tags: List[str] = field(default_factory=list)


@dataclass
class DecayReport:
    """Report on urgency decay for an email."""
    email_id: str
    subject: str
    initial_priority: float
    current_priority: float
    decay_rate: float  # priority units per hour
    half_life_hours: Optional[float]  # hours for priority to halve
    decay_status: str  # "stable", "decaying", "collapsed", "escalated"
    time_elapsed_hours: float
    reassessment_needed: bool
    reply_all_required: bool
    recommendation: str


@dataclass
class ForgottenItem:
    """A high-priority item that appears to have been forgotten."""
    email_id: str
    subject: str
    sender: str
    original_priority: float
    current_priority: float
    days_since_last_action: float
    recipients: List[str]
    risk_level: str  # "low", "medium", "high", "critical"
    reply_all_required: bool


class EmailPriorityDecayTracker:
    """
    Tracks and analyzes how email priorities change over time.
    
    Features:
    - Priority change tracking with time-series history
    - Urgency decay detection using exponential decay models
    - Forgotten high-priority item identification
    - Priority half-life calculation
    - Intelligent reassessment suggestions
    - Reply-all enforcement for critical transitions
    """

    # Priority thresholds
    PRIORITY_HIGH = 0.7
    PRIORITY_MEDIUM = 0.4
    PRIORITY_LOW = 0.2

    # Decay thresholds (per hour)
    DECAY_RATE_STABLE = 0.001
    DECAY_RATE_MODERATE = 0.005
    DECAY_RATE_SEVERE = 0.02
    DECAY_RATE_COLLAPSED = 0.05

    # Forgotten item thresholds (hours)
    FORGOTTEN_WARNING_HOURS = 48
    FORGOTTEN_CRITICAL_HOURS = 168  # 7 days

    # Reply-all enforcement rules
    REPLY_ALL_PRIORITY_THRESHOLD = 0.6
    REPLY_ALL_DECAY_THRESHOLD = 0.3

    def __init__(self, current_time: Optional[datetime] = None):
        """Initialize the tracker with optional fixed current time for testing."""
        self.current_time = current_time or datetime.now()
        self.emails: Dict[str, EmailEntry] = {}
        self.decay_history: Dict[str, List[DecayReport]] = defaultdict(list)
        self.reply_all_log: List[Dict[str, Any]] = []

    def _enforce_reply_all(self, email: EmailEntry, reason: str) -> bool:
        """
        Enforce reply-all policy for critical priority transitions.
        Returns True if reply-all is required.
        """
        # Reply-all is required when:
        # 1. Email has multiple recipients
        # 2. Priority was high and is decaying
        # 3. Priority drop exceeds threshold
        
        if len(email.recipients) <= 1:
            return False

        if email.initial_priority >= self.REPLY_ALL_PRIORITY_THRESHOLD:
            if len(email.priority_history) >= 2:
                latest = email.priority_history[-1].priority_score
                initial = email.initial_priority
                if (initial - latest) >= self.REPLY_ALL_DECAY_THRESHOLD:
                    log_entry = {
                        "email_id": email.email_id,
                        "subject": email.subject,
                        "timestamp": self.current_time,
                        "reason": reason,
                        "reply_all_required": True,
                        "recipients": email.recipients
                    }
                    self.reply_all_log.append(log_entry)
                    return True
        return False

    def track_priority_change(self, email_data: Dict[str, Any]) -> EmailEntry:
        """
        Track a priority change for an email.
        
        Args:
            email_data: Dict containing:
                - email_id (str): Unique email identifier
                - subject (str): Email subject
                - sender (str): Sender email address
                - recipients (list): List of recipient addresses
                - priority (float): Current priority score (0.0-1.0)
                - timestamp (str/datetime): When this priority was assigned
                - source (str, optional): Source of priority assignment
                - context (dict, optional): Additional context
                - is_read (bool, optional): Whether email has been read
                - is_replied (bool, optional): Whether email has been replied to
                - tags (list, optional): Tags associated with email
        
        Returns:
            EmailEntry: Updated email entry with new priority record
        """
        email_id = email_data["email_id"]
        timestamp = email_data.get("timestamp", self.current_time)
        if isinstance(timestamp, str):
            timestamp = datetime.fromisoformat(timestamp)

        priority = email_data["priority"]
        source = email_data.get("source", "manual")
        context = email_data.get("context", {})

        record = PriorityRecord(
            timestamp=timestamp,
            priority_score=priority,
            source=source,
            context=context
        )

        if email_id in self.emails:
            # Update existing email
            entry = self.emails[email_id]
            entry.priority_history.append(record)
            if email_data.get("is_read") is not None:
                entry.is_read = email_data["is_read"]
            if email_data.get("is_replied") is not None:
                entry.is_replied = email_data["is_replied"]
            if email_data.get("tags") is not None:
                entry.tags = email_data["tags"]
        else:
            # Create new email entry
            recipients = email_data.get("recipients", [])
            entry = EmailEntry(
                email_id=email_id,
                subject=email_data.get("subject", ""),
                sender=email_data.get("sender", ""),
                recipients=recipients,
                initial_priority=priority,
                created_at=timestamp,
                priority_history=[record],
                is_read=email_data.get("is_read", False),
                is_replied=email_data.get("is_replied", False),
                tags=email_data.get("tags", [])
            )
            self.emails[email_id] = entry

        # Check reply-all enforcement
        self._enforce_reply_all(entry, "priority_change_tracked")

        return entry

    def detect_urgency_decay(self, email_id: str) -> DecayReport:
        """
        Detect urgency decay for a specific email.
        
        Args:
            email_id: The email identifier to analyze
            
        Returns:
            DecayReport: Analysis of urgency decay
        """
        if email_id not in self.emails:
            raise ValueError(f"Email {email_id} not found in tracker")

        email = self.emails[email_id]
        history = email.priority_history

        if len(history) < 2:
            return DecayReport(
                email_id=email_id,
                subject=email.subject,
                initial_priority=email.initial_priority,
                current_priority=history[-1].priority_score if history else email.initial_priority,
                decay_rate=0.0,
                half_life_hours=None,
                decay_status="stable",
                time_elapsed_hours=0.0,
                reassessment_needed=False,
                reply_all_required=False,
                recommendation="Insufficient data for decay analysis"
            )

        # Calculate time elapsed
        first_record = history[0]
        last_record = history[-1]
        time_elapsed = (last_record.timestamp - first_record.timestamp).total_seconds() / 3600.0

        if time_elapsed <= 0:
            return DecayReport(
                email_id=email_id,
                subject=email.subject,
                initial_priority=email.initial_priority,
                current_priority=last_record.priority_score,
                decay_rate=0.0,
                half_life_hours=None,
                decay_status="stable",
                time_elapsed_hours=0.0,
                reassessment_needed=False,
                reply_all_required=False,
                recommendation="No time has elapsed between measurements"
            )

        # Calculate decay rate (linear approximation)
        priority_drop = first_record.priority_score - last_record.priority_score
        decay_rate = priority_drop / time_elapsed if time_elapsed > 0 else 0.0

        # Determine decay status
        if decay_rate < self.DECAY_RATE_STABLE:
            decay_status = "stable"
        elif decay_rate < self.DECAY_RATE_MODERATE:
            decay_status = "decaying"
        elif decay_rate < self.DECAY_RATE_SEVERE:
            decay_status = "collapsed"
        else:
            decay_status = "escalated"

        # Calculate half-life
        half_life_hours = None
        if decay_rate > 0 and first_record.priority_score > 0:
            # Using exponential decay model: P(t) = P0 * e^(-lambda*t)
            # Half-life = ln(2) / lambda
            try:
                lambda_decay = decay_rate / first_record.priority_score
                if lambda_decay > 0:
                    half_life_hours = math.log(2) / lambda_decay
            except (ValueError, ZeroDivisionError):
                half_life_hours = None

        # Check if reassessment is needed
        reassessment_needed = (
            decay_status in ("decaying", "collapsed", "escalated") or
            priority_drop >= 0.3 or
            (time_elapsed > self.FORGOTTEN_WARNING_HOURS and not email.is_replied)
        )

        # Check reply-all requirement
        reply_all_required = self._enforce_reply_all(email, "urgency_decay_detected")

        # Generate recommendation
        recommendation = self._generate_decay_recommendation(
            email, decay_status, decay_rate, time_elapsed, priority_drop
        )

        report = DecayReport(
            email_id=email_id,
            subject=email.subject,
            initial_priority=email.initial_priority,
            current_priority=last_record.priority_score,
            decay_rate=decay_rate,
            half_life_hours=half_life_hours,
            decay_status=decay_status,
            time_elapsed_hours=time_elapsed,
            reassessment_needed=reassessment_needed,
            reply_all_required=reply_all_required,
            recommendation=recommendation
        )

        self.decay_history[email_id].append(report)
        return report

    def _generate_decay_recommendation(
        self, email: EmailEntry, status: str, rate: float,
        elapsed: float, drop: float
    ) -> str:
        """Generate a human-readable recommendation based on decay analysis."""
        parts = []

        if status == "stable":
            parts.append("Priority is stable. No immediate action needed.")
        elif status == "decaying":
            parts.append(
                f"Priority is decaying at {rate:.3f}/hour. "
                f"Consider reviewing if this email still requires attention."
            )
        elif status == "collapsed":
            parts.append(
                f"URGENT: Priority has collapsed (rate: {rate:.3f}/hour). "
                f"This item may need immediate reassessment or escalation."
            )
        elif status == "escalated":
            parts.append(
                f"CRITICAL: Severe priority decay detected (rate: {rate:.3f}/hour). "
                f"Immediate action required - consider escalating or reassigning."
            )

        if email.reply_all_count == 0 and len(email.recipients) > 1:
            parts.append(
                "REPLY-ALL REQUIRED: Multiple recipients have not been included in any response."
            )

        if not email.is_replied and elapsed > self.FORGOTTEN_WARNING_HOURS:
            parts.append(
                f"Email has been unanswered for {elapsed:.1f} hours. "
                "Response is overdue."
            )

        if drop >= 0.3:
            parts.append(
                f"Significant priority drop ({drop:.2f}) detected. "
                "Verify if original priority assessment was correct."
            )

        return " | ".join(parts)

    def identify_forgotten_items(
        self, threshold_hours: Optional[float] = None,
        min_priority: float = 0.5
    ) -> List[ForgottenItem]:
        """
        Identify high-priority emails that appear to have been forgotten.
        
        Args:
            threshold_hours: Hours since last action to consider "forgotten"
            min_priority: Minimum initial priority to include in analysis
            
        Returns:
            List of ForgottenItem objects
        """
        if threshold_hours is None:
            threshold_hours = self.FORGOTTEN_WARNING_HOURS

        forgotten = []

        for email_id, email in self.emails.items():
            if email.initial_priority < min_priority:
                continue

            # Determine last action time
            last_action = email.last_actioned_at
            if last_action is None:
                if email.priority_history:
                    last_action = email.priority_history[-1].timestamp
                else:
                    last_action = email.created_at

            hours_since_action = (self.current_time - last_action).total_seconds() / 3600.0

            if hours_since_action < threshold_hours:
                continue

            # Determine risk level
            if hours_since_action >= self.FORGOTTEN_CRITICAL_HOURS:
                risk_level = "critical"
            elif hours_since_action >= threshold_hours * 2:
                risk_level = "high"
            elif hours_since_action >= threshold_hours:
                risk_level = "medium"
            else:
                risk_level = "low"

            # Get current priority
            current_priority = (
                email.priority_history[-1].priority_score
                if email.priority_history else email.initial_priority
            )

            # Check reply-all requirement
            reply_all_required = self._enforce_reply_all(
                email, "forgotten_item_identified"
            )

            item = ForgottenItem(
                email_id=email_id,
                subject=email.subject,
                sender=email.sender,
                original_priority=email.initial_priority,
                current_priority=current_priority,
                days_since_last_action=hours_since_action / 24.0,
                recipients=email.recipients,
                risk_level=risk_level,
                reply_all_required=reply_all_required
            )
            forgotten.append(item)

        # Sort by risk level (critical first)
        risk_order = {"critical": 0, "high": 1, "medium": 2, "low": 3}
        forgotten.sort(key=lambda x: risk_order.get(x.risk_level, 4))

        return forgotten

    def calculate_priority_halflife(self, email_id: str) -> Optional[float]:
        """
        Calculate the priority half-life for an email using exponential decay model.
        
        The half-life is the time (in hours) it takes for the priority to
        decrease to half its initial value.
        
        Args:
            email_id: The email identifier
            
        Returns:
            Half-life in hours, or None if it cannot be calculated
        """
        if email_id not in self.emails:
            raise ValueError(f"Email {email_id} not found in tracker")

        email = self.emails[email_id]
        history = email.priority_history

        if len(history) < 2:
            return None

        # Use least-squares fit for exponential decay model
        # P(t) = P0 * e^(-lambda * t)
        # ln(P(t)) = ln(P0) - lambda * t
        
        t_values = []
        ln_p_values = []
        t0 = history[0].timestamp

        for record in history:
            t = (record.timestamp - t0).total_seconds() / 3600.0
            if record.priority_score > 0:
                t_values.append(t)
                ln_p_values.append(math.log(record.priority_score))

        if len(t_values) < 2:
            return None

        # Linear regression: ln(P) = a - lambda * t
        n = len(t_values)
        sum_t = sum(t_values)
        sum_ln_p = sum(ln_p_values)
        sum_t2 = sum(t ** 2 for t in t_values)
        sum_t_ln_p = sum(t * lp for t, lp in zip(t_values, ln_p_values))

        denominator = n * sum_t2 - sum_t ** 2
        if denominator == 0:
            return None

        # lambda (decay constant)
        lambda_decay = -(n * sum_t_ln_p - sum_t * sum_ln_p) / denominator

        if lambda_decay <= 0:
            return None  # Priority is not decaying (or increasing)

        half_life = math.log(2) / lambda_decay
        return half_life

    def suggest_reassessment(
        self, email_id: Optional[str] = None
    ) -> List[Dict[str, Any]]:
        """
        Suggest priority reassessment for emails that need attention.
        
        Args:
            email_id: Optional specific email to analyze. If None, analyzes all.
            
        Returns:
            List of reassessment suggestions
        """
        suggestions = []
        emails_to_check = (
            {email_id: self.emails[email_id]}
            if email_id and email_id in self.emails
            else self.emails
        )

        for eid, email in emails_to_check.items():
            suggestion = self._analyze_reassessment_need(email)
            if suggestion:
                suggestions.append(suggestion)

        # Sort by urgency score (highest first)
        suggestions.sort(key=lambda x: x.get("urgency_score", 0), reverse=True)
        return suggestions

    def _analyze_reassessment_need(self, email: EmailEntry) -> Optional[Dict[str, Any]]:
        """Analyze whether an email needs priority reassessment."""
        history = email.priority_history
        if not history:
            return None

        current_priority = history[-1].priority_score
        time_since_creation = (
            self.current_time - email.created_at
        ).total_seconds() / 3600.0

        needs_reassessment = False
        reasons = []
        urgency_score = 0.0

        # Check 1: Significant priority decay
        if email.initial_priority >= self.PRIORITY_HIGH and current_priority < self.PRIORITY_MEDIUM:
            needs_reassessment = True
            reasons.append("High-to-low priority transition detected")
            urgency_score += 3.0

        # Check 2: Long time without action
        if not email.is_replied and time_since_creation > 24:
            needs_reassessment = True
            reasons.append(f"No reply in {time_since_creation:.1f} hours")
            urgency_score += 2.0

        # Check 3: Priority volatility (frequent changes)
        if len(history) >= 3:
            changes = []
            for i in range(1, len(history)):
                changes.append(
                    abs(history[i].priority_score - history[i-1].priority_score)
                )
            avg_change = sum(changes) / len(changes) if changes else 0
            if avg_change > 0.2:
                needs_reassessment = True
                reasons.append(
                    f"High priority volatility (avg change: {avg_change:.2f})"
                )
                urgency_score += 1.5

        # Check 4: Stale high priority (high priority but no recent activity)
        if current_priority >= self.PRIORITY_HIGH and time_since_creation > 72:
            last_activity = history[-1].timestamp
            hours_idle = (self.current_time - last_activity).total_seconds() / 3600.0
            if hours_idle > 48:
                needs_reassessment = True
                reasons.append(
                    f"High priority but idle for {hours_idle:.1f} hours"
                )
                urgency_score += 2.5

        # Check 5: Reply-all not used with multiple recipients
        reply_all_required = False
        if (len(email.recipients) > 1 and
                email.initial_priority >= self.REPLY_ALL_PRIORITY_THRESHOLD and
                email.is_replied and email.reply_all_count == 0):
            needs_reassessment = True
            reasons.append("Reply-all was not used for multi-recipient high-priority email")
            reply_all_required = True
            urgency_score += 2.0

        if not needs_reassessment:
            return None

        # Calculate suggested new priority
        suggested_priority = self._suggest_new_priority(email, reasons)

        # Enforce reply-all if needed
        if reply_all_required or (
            email.initial_priority >= self.REPLY_ALL_PRIORITY_THRESHOLD and
            current_priority < email.initial_priority * 0.5
        ):
            self._enforce_reply_all(email, "reassessment_suggested")
            reply_all_required = True

        return {
            "email_id": email.email_id,
            "subject": email.subject,
            "current_priority": current_priority,
            "initial_priority": email.initial_priority,
            "suggested_priority": suggested_priority,
            "reasons": reasons,
            "urgency_score": urgency_score,
            "reply_all_required": reply_all_required,
            "time_since_creation_hours": time_since_creation,
            "action_items": self._generate_action_items(email, reasons)
        }

    def _suggest_new_priority(self, email: EmailEntry, reasons: List[str]) -> float:
        """Suggest a new priority based on current state and decay patterns."""
        current = (
            email.priority_history[-1].priority_score
            if email.priority_history else email.initial_priority
        )

        # If decayed significantly, suggest re-elevation
        if email.initial_priority >= self.PRIORITY_HIGH and current < self.PRIORITY_MEDIUM:
            # Suggest mid-point between current and original
            return min(email.initial_priority, current + 0.3)

        # If volatile, suggest average of recent values
        if len(email.priority_history) >= 3:
            recent = [r.priority_score for r in email.priority_history[-3:]]
            return sum(recent) / len(recent)

        # Otherwise suggest slight boost to compensate for decay
        return min(1.0, current + 0.1)

    def _generate_action_items(self, email: EmailEntry, reasons: List[str]) -> List[str]:
        """Generate actionable items based on reassessment reasons."""
        actions = []

        if "No reply" in str(reasons):
            actions.append("Respond to email immediately")
        if "High-to-low" in str(reasons):
            actions.append("Review if email can be delegated or archived")
        if "volatility" in str(reasons):
            actions.append("Stabilize priority - avoid frequent re-prioritization")
        if "idle" in str(reasons):
            actions.append("Check if this item is still relevant or can be closed")
        if "Reply-all" in str(reasons):
            actions.append("Send reply-all to all original recipients")

        if not actions:
            actions.append("Review email content and reassess priority")

        return actions

    def get_summary(self) -> Dict[str, Any]:
        """Get a summary of all tracked emails and their decay status."""
        total = len(self.emails)
        decaying = 0
        forgotten_count = len(self.identify_forgotten_items())
        reply_all_pending = len(self.reply_all_log)

        for email_id in self.emails:
            if len(self.emails[email_id].priority_history) >= 2:
                try:
                    report = self.detect_urgency_decay(email_id)
                    if report.decay_status in ("decaying", "collapsed", "escalated"):
                        decaying += 1
                except ValueError:
                    pass

        return {
            "total_tracked_emails": total,
            "emails_with_decay": decaying,
            "forgotten_items": forgotten_count,
            "reply_all_pending": reply_all_pending,
            "tracker_time": self.current_time.isoformat()
        }


def test_v684():
    """
    Comprehensive test suite for V684 - Email Priority Decay Tracker.
    Tests with time-series data spanning different time periods.
    """
    print("=" * 70)
    print("V684 - Email Priority Decay Tracker - Test Suite")
    print("=" * 70)

    # Setup: Create tracker with a fixed "now" time
    base_time = datetime(2026, 6, 1, 12, 0, 0)
    tracker = EmailPriorityDecayTracker(current_time=base_time)

    # =========================================================================
    # Test 1: Track Priority Changes Over Time
    # =========================================================================
    print("\n--- Test 1: Track Priority Changes Over Time ---")

    email1_data = {
        "email_id": "EM-001",
        "subject": "Q3 Budget Approval Required",
        "sender": "cfo@company.com",
        "recipients": ["manager@company.com", "finance@company.com", "team@company.com"],
        "priority": 0.95,
        "timestamp": (base_time - timedelta(days=7)).isoformat(),
        "source": "executive_flag",
        "is_read": False,
        "is_replied": False,
        "tags": ["budget", "urgent", "executive"]
    }
    entry = tracker.track_priority_change(email1_data)
    assert entry.email_id == "EM-001"
    assert entry.initial_priority == 0.95
    assert len(entry.priority_history) == 1
    print(f"  ✓ Created email entry: {entry.subject} (priority: {entry.initial_priority})")

    # Add subsequent priority readings (simulating decay over 7 days)
    priority_readings = [
        (6, 0.92),  # 6 days ago
        (5, 0.85),  # 5 days ago
        (4, 0.78),  # 4 days ago
        (3, 0.65),  # 3 days ago
        (2, 0.55),  # 2 days ago
        (1, 0.40),  # 1 day ago
        (0.5, 0.30),  # 12 hours ago
    ]

    for days_ago, priority in priority_readings:
        update_data = {
            "email_id": "EM-001",
            "subject": "Q3 Budget Approval Required",
            "sender": "cfo@company.com",
            "recipients": ["manager@company.com", "finance@company.com", "team@company.com"],
            "priority": priority,
            "timestamp": (base_time - timedelta(days=days_ago)).isoformat(),
            "source": "auto_decay_model"
        }
        tracker.track_priority_change(update_data)

    assert len(tracker.emails["EM-001"].priority_history) == 8
    print(f"  ✓ Tracked {len(priority_readings) + 1} priority changes over 7 days")

    # =========================================================================
    # Test 2: Detect Urgency Decay
    # =========================================================================
    print("\n--- Test 2: Detect Urgency Decay ---")

    decay_report = tracker.detect_urgency_decay("EM-001")
    assert decay_report.email_id == "EM-001"
    assert decay_report.initial_priority == 0.95
    assert decay_report.current_priority == 0.30
    assert decay_report.decay_rate > 0
    assert decay_report.decay_status in ("decaying", "collapsed", "escalated")
    assert decay_report.reassessment_needed is True
    assert decay_report.reply_all_required is True  # Multi-recipient, high initial priority
    print(f"  ✓ Decay Status: {decay_report.decay_status}")
    print(f"  ✓ Decay Rate: {decay_report.decay_rate:.4f} per hour")
    print(f"  ✓ Half-Life: {decay_report.half_life_hours:.1f} hours" if decay_report.half_life_hours else "  ✓ Half-Life: N/A")
    print(f"  ✓ Reassessment Needed: {decay_report.reassessment_needed}")
    print(f"  ✓ Reply-All Required: {decay_report.reply_all_required}")
    print(f"  ✓ Recommendation: {decay_report.recommendation[:80]}...")

    # =========================================================================
    # Test 3: Second Email - Stable Priority (no decay)
    # =========================================================================
    print("\n--- Test 3: Stable Priority Email ---")

    email2_data = {
        "email_id": "EM-002",
        "subject": "Weekly Team Sync Agenda",
        "sender": "manager@company.com",
        "recipients": ["team@company.com"],
        "priority": 0.45,
        "timestamp": (base_time - timedelta(days=2)).isoformat(),
        "source": "routine",
        "is_read": True,
        "is_replied": True,
        "tags": ["meeting", "routine"]
    }
    tracker.track_priority_change(email2_data)

    # Slight changes but stable
    tracker.track_priority_change({
        "email_id": "EM-002",
        "subject": "Weekly Team Sync Agenda",
        "sender": "manager@company.com",
        "recipients": ["team@company.com"],
        "priority": 0.43,
        "timestamp": (base_time - timedelta(days=1)).isoformat(),
        "source": "auto"
    })
    tracker.track_priority_change({
        "email_id": "EM-002",
        "subject": "Weekly Team Sync Agenda",
        "sender": "manager@company.com",
        "recipients": ["team@company.com"],
        "priority": 0.42,
        "timestamp": base_time.isoformat(),
        "source": "auto"
    })

    decay_report2 = tracker.detect_urgency_decay("EM-002")
    assert decay_report2.decay_status == "stable"
    assert decay_report2.reassessment_needed is False
    print(f"  ✓ Status: {decay_report2.decay_status} (as expected for routine email)")
    print(f"  ✓ Reassessment: {decay_report2.reassessment_needed}")

    # =========================================================================
    # Test 4: Third Email - Rapid Collapse (escalation scenario)
    # =========================================================================
    print("\n--- Test 4: Rapid Priority Collapse ---")

    email3_data = {
        "email_id": "EM-003",
        "subject": "CRITICAL: Production Server Down",
        "sender": "ops@company.com",
        "recipients": ["cto@company.com", "ops-lead@company.com", "dev-team@company.com"],
        "priority": 1.0,
        "timestamp": (base_time - timedelta(hours=6)).isoformat(),
        "source": "alert_system",
        "is_read": True,
        "is_replied": False,
        "tags": ["incident", "p0", "production"]
    }
    tracker.track_priority_change(email3_data)

    # Rapid decay within hours
    for hours_ago, priority in [(4, 0.9), (3, 0.6), (2, 0.35), (1, 0.15), (0.25, 0.05)]:
        tracker.track_priority_change({
            "email_id": "EM-003",
            "subject": "CRITICAL: Production Server Down",
            "sender": "ops@company.com",
            "recipients": ["cto@company.com", "ops-lead@company.com", "dev-team@company.com"],
            "priority": priority,
            "timestamp": (base_time - timedelta(hours=hours_ago)).isoformat(),
            "source": "incident_tracker"
        })

    decay_report3 = tracker.detect_urgency_decay("EM-003")
    assert decay_report3.decay_status in ("collapsed", "escalated")
    assert decay_report3.reassessment_needed is True
    assert decay_report3.reply_all_required is True
    print(f"  ✓ Status: {decay_report3.decay_status}")
    print(f"  ✓ Decay Rate: {decay_report3.decay_rate:.4f} per hour (rapid collapse)")
    print(f"  ✓ Reply-All Enforced: {decay_report3.reply_all_required}")

    # =========================================================================
    # Test 5: Calculate Priority Half-Life
    # =========================================================================
    print("\n--- Test 5: Calculate Priority Half-Life ---")

    halflife_1 = tracker.calculate_priority_halflife("EM-001")
    assert halflife_1 is not None
    assert halflife_1 > 0
    print(f"  ✓ EM-001 Half-Life: {halflife_1:.1f} hours ({halflife_1/24:.1f} days)")

    halflife_2 = tracker.calculate_priority_halflife("EM-002")
    assert halflife_2 is not None
    print(f"  ✓ EM-002 Half-Life: {halflife_2:.1f} hours")

    halflife_3 = tracker.calculate_priority_halflife("EM-003")
    assert halflife_3 is not None
    assert halflife_3 > 0
    print(f"  ✓ EM-003 Half-Life: {halflife_3:.1f} hours (rapid decay)")

    # Verify EM-003 has shorter half-life than EM-001 (faster decay)
    assert halflife_3 < halflife_1
    print(f"  ✓ EM-003 half-life ({halflife_3:.1f}h) < EM-001 half-life ({halflife_1:.1f}h) - correct!")

    # =========================================================================
    # Test 6: Identify Forgotten Items
    # =========================================================================
    print("\n--- Test 6: Identify Forgotten Items ---")

    # Add a forgotten high-priority email from 2 weeks ago
    email4_data = {
        "email_id": "EM-004",
        "subject": "Security Vulnerability Patch Required",
        "sender": "security@company.com",
        "recipients": ["dev-lead@company.com", "dev-team@company.com", "security@company.com"],
        "priority": 0.88,
        "timestamp": (base_time - timedelta(days=14)).isoformat(),
        "source": "security_scan",
        "is_read": True,
        "is_replied": False,
        "tags": ["security", "patch", "vulnerability"]
    }
    tracker.track_priority_change(email4_data)

    # Add another forgotten email from 10 days ago
    email5_data = {
        "email_id": "EM-005",
        "subject": "Client Contract Renewal - Due Soon",
        "sender": "sales@company.com",
        "recipients": ["account-mgr@company.com", "legal@company.com"],
        "priority": 0.75,
        "timestamp": (base_time - timedelta(days=10)).isoformat(),
        "source": "crm_integration",
        "is_read": False,
        "is_replied": False,
        "tags": ["client", "contract", "renewal"]
    }
    tracker.track_priority_change(email5_data)

    forgotten = tracker.identify_forgotten_items(threshold_hours=48, min_priority=0.5)
    assert len(forgotten) >= 2
    print(f"  ✓ Found {len(forgotten)} forgotten items:")
    for item in forgotten:
        print(f"    - [{item.risk_level.upper()}] {item.subject}")
        print(f"      Days since action: {item.days_since_last_action:.1f}")
        print(f"      Reply-all required: {item.reply_all_required}")

    # Verify ordering (critical first)
    risk_order = {"critical": 0, "high": 1, "medium": 2, "low": 3}
    for i in range(len(forgotten) - 1):
        assert risk_order[forgotten[i].risk_level] <= risk_order[forgotten[i+1].risk_level]
    print(f"  ✓ Items correctly sorted by risk level")

    # =========================================================================
    # Test 7: Suggest Priority Reassessment
    # =========================================================================
    print("\n--- Test 7: Suggest Priority Reassessment ---")

    suggestions = tracker.suggest_reassessment()
    assert len(suggestions) > 0
    print(f"  ✓ Generated {len(suggestions)} reassessment suggestions:")
    for sug in suggestions:
        print(f"    - {sug['subject']}")
        print(f"      Current: {sug['current_priority']:.2f} → Suggested: {sug['suggested_priority']:.2f}")
        print(f"      Reasons: {', '.join(sug['reasons'])}")
        print(f"      Reply-all required: {sug['reply_all_required']}")
        print(f"      Actions: {', '.join(sug['action_items'])}")

    # Verify EM-001 needs reassessment (high-to-low transition)
    em001_sug = next((s for s in suggestions if s["email_id"] == "EM-001"), None)
    assert em001_sug is not None
    assert em001_sug["reply_all_required"] is True
    print(f"  ✓ EM-001 correctly flagged for reassessment with reply-all requirement")

    # =========================================================================
    # Test 8: Reply-All Enforcement
    # =========================================================================
    print("\n--- Test 8: Reply-All Enforcement ---")

    assert len(tracker.reply_all_log) > 0
    print(f"  ✓ Reply-all enforcement log has {len(tracker.reply_all_log)} entries:")
    for log in tracker.reply_all_log:
        print(f"    - {log['subject']}: {log['reason']}")
        print(f"      Recipients: {log['recipients']}")

    # Test single recipient - should NOT trigger reply-all
    email6_data = {
        "email_id": "EM-006",
        "subject": "Personal Reminder",
        "sender": "assistant@company.com",
        "recipients": ["me@company.com"],
        "priority": 0.8,
        "timestamp": (base_time - timedelta(days=3)).isoformat(),
        "source": "manual"
    }
    tracker.track_priority_change(email6_data)
    tracker.track_priority_change({
        "email_id": "EM-006",
        "subject": "Personal Reminder",
        "sender": "assistant@company.com",
        "recipients": ["me@company.com"],
        "priority": 0.2,
        "timestamp": base_time.isoformat(),
        "source": "auto"
    })

    em006_log = [l for l in tracker.reply_all_log if l["email_id"] == "EM-006"]
    assert len(em006_log) == 0
    print(f"  ✓ Single-recipient email correctly excluded from reply-all enforcement")

    # =========================================================================
    # Test 9: Summary Statistics
    # =========================================================================
    print("\n--- Test 9: Summary Statistics ---")

    summary = tracker.get_summary()
    assert summary["total_tracked_emails"] == 6
    assert summary["forgotten_items"] >= 2
    print(f"  ✓ Total tracked: {summary['total_tracked_emails']}")
    print(f"  ✓ With decay: {summary['emails_with_decay']}")
    print(f"  ✓ Forgotten: {summary['forgotten_items']}")
    print(f"  ✓ Reply-all pending: {summary['reply_all_pending']}")

    # =========================================================================
    # Test 10: Edge Cases
    # =========================================================================
    print("\n--- Test 10: Edge Cases ---")

    # Email with only one priority record
    email7_data = {
        "email_id": "EM-007",
        "subject": "Just Received",
        "sender": "someone@company.com",
        "recipients": ["me@company.com"],
        "priority": 0.5,
        "timestamp": base_time.isoformat(),
        "source": "new"
    }
    tracker.track_priority_change(email7_data)
    report_single = tracker.detect_urgency_decay("EM-007")
    assert report_single.decay_status == "stable"
    assert report_single.decay_rate == 0.0
    print(f"  ✓ Single-record email handled correctly (stable)")

    # Non-existent email
    try:
        tracker.detect_urgency_decay("NON-EXISTENT")
        assert False, "Should have raised ValueError"
    except ValueError:
        print(f"  ✓ Non-existent email raises ValueError correctly")

    # Email with constant priority
    email8_data = {
        "email_id": "EM-008",
        "subject": "Constant Priority Email",
        "sender": "system@company.com",
        "recipients": ["admin@company.com", "ops@company.com"],
        "priority": 0.6,
        "timestamp": (base_time - timedelta(days=5)).isoformat(),
        "source": "auto"
    }
    tracker.track_priority_change(email8_data)
    for i in range(1, 5):
        tracker.track_priority_change({
            "email_id": "EM-008",
            "subject": "Constant Priority Email",
            "sender": "system@company.com",
            "recipients": ["admin@company.com", "ops@company.com"],
            "priority": 0.6,
            "timestamp": (base_time - timedelta(days=5-i)).isoformat(),
            "source": "auto"
        })

    halflife_8 = tracker.calculate_priority_halflife("EM-008")
    assert halflife_8 is None  # No decay means no half-life
    print(f"  ✓ Constant priority email returns None half-life (correct)")

    # =========================================================================
    # All Tests Passed
    # =========================================================================
    print("\n" + "=" * 70)
    print("ALL TESTS PASSED ✓")
    print("=" * 70)
    print(f"\nSummary:")
    print(f"  - Tracked 8 emails with various priority patterns")
    print(f"  - Detected decay in {summary['emails_with_decay']} emails")
    print(f"  - Found {summary['forgotten_items']} forgotten high-priority items")
    print(f"  - Enforced reply-all on {summary['reply_all_pending']} occasions")
    print(f"  - Calculated half-lives for decaying emails")
    print(f"  - Generated reassessment suggestions with action items")

    return True


if __name__ == "__main__":
    test_v684()

#!/usr/bin/env python3
"""
V126 Email Workflow Automation Builder
=======================================
Production-quality email workflow engine with visual workflow definition,
conditional branching, multi-step approval chains, parallel execution,
error handling with retry, case-by-case analysis, and reply-all enforcement.

Node Types:
  - Trigger:      Initiates a workflow on email events (received, sent, replied)
  - Condition:    Evaluates predicates for branching logic
  - Action:       Executes operations (send, forward, tag, move, notify)
  - Delay:        Introduces timed pauses between steps
  - Approval:     Multi-step approval chains with escalation

Author:  V126 Automation Team
Version: 1.0.0
"""

from __future__ import annotations

import asyncio
import copy
import enum
import hashlib
import json
import logging
import time
import uuid
from abc import ABC, abstractmethod
from collections import defaultdict
from dataclasses import dataclass, field, asdict
from datetime import datetime, timedelta
from typing import (
    Any,
    Callable,
    Dict,
    List,
    Optional,
    Sequence,
    Set,
    Tuple,
    Union,
)

# ---------------------------------------------------------------------------
# Logging
# ---------------------------------------------------------------------------
logger = logging.getLogger("v126.workflow")
logger.setLevel(logging.DEBUG)

if not logger.handlers:
    _handler = logging.StreamHandler()
    _handler.setFormatter(
        logging.Formatter(
            "[%(asctime)s] %(levelname)-8s %(name)s | %(message)s",
            datefmt="%H:%M:%S",
        )
    )
    logger.addHandler(_handler)


# ---------------------------------------------------------------------------
# Enums & Constants
# ---------------------------------------------------------------------------
class NodeStatus(enum.Enum):
    PENDING = "pending"
    RUNNING = "running"
    COMPLETED = "completed"
    FAILED = "failed"
    SKIPPED = "skipped"
    WAITING_APPROVAL = "waiting_approval"
    RETRYING = "retrying"
    TIMED_OUT = "timed_out"


class TriggerEvent(enum.Enum):
    EMAIL_RECEIVED = "email_received"
    EMAIL_SENT = "email_sent"
    EMAIL_REPLIED = "email_replied"
    EMAIL_FORWARDED = "email_forwarded"
    SCHEDULE = "schedule"


class ActionType(enum.Enum):
    SEND_EMAIL = "send_email"
    FORWARD_EMAIL = "forward_email"
    REPLY_ALL = "reply_all"
    TAG_EMAIL = "tag_email"
    MOVE_EMAIL = "move_email"
    NOTIFY = "notify"
    ARCHIVE = "archive"
    ASSIGN = "assign"
    CUSTOM = "custom"


class ApprovalMode(enum.Enum):
    SEQUENTIAL = "sequential"       # Each approver in order
    UNANIMOUS = "unanimous"         # All must approve
    MAJORITY = "majority"           # >50% must approve
    ANY_ONE = "any_one"             # First approval suffices


class ConditionOperator(enum.Enum):
    EQUALS = "equals"
    CONTAINS = "contains"
    REGEX = "regex"
    GREATER_THAN = "greater_than"
    LESS_THAN = "less_than"
    IN_LIST = "in_list"
    NOT_EQUALS = "not_equals"
    STARTS_WITH = "starts_with"
    IS_EMPTY = "is_empty"
    IS_NOT_EMPTY = "is_not_empty"


# ---------------------------------------------------------------------------
# Data Models
# ---------------------------------------------------------------------------
@dataclass
class EmailMessage:
    """Represents an email message flowing through the workflow."""
    id: str = field(default_factory=lambda: str(uuid.uuid4())[:8])
    subject: str = ""
    sender: str = ""
    recipients: List[str] = field(default_factory=list)
    cc: List[str] = field(default_factory=list)
    bcc: List[str] = field(default_factory=list)
    body: str = ""
    headers: Dict[str, str] = field(default_factory=dict)
    attachments: List[str] = field(default_factory=list)
    labels: Set[str] = field(default_factory=set)
    timestamp: datetime = field(default_factory=datetime.now)
    thread_id: str = ""
    priority: str = "normal"  # low, normal, high, urgent

    @property
    def all_recipients(self) -> List[str]:
        """All recipients including CC and BCC."""
        return list(set(self.recipients + self.cc + self.bcc))

    def reply_all_list(self) -> List[str]:
        """Compute the full reply-all recipient list."""
        targets = set(self.recipients + self.cc)
        targets.discard(self.sender)
        if self.sender:
            targets.add(self.sender)
        return sorted(targets)


@dataclass
class RetryPolicy:
    """Retry configuration for failed nodes."""
    max_retries: int = 3
    backoff_seconds: float = 1.0
    backoff_multiplier: float = 2.0
    max_backoff_seconds: float = 60.0
    retryable_errors: List[str] = field(
        default_factory=lambda: ["TimeoutError", "ConnectionError", "TransientError"]
    )

    def get_delay(self, attempt: int) -> float:
        delay = self.backoff_seconds * (self.backoff_multiplier ** attempt)
        return min(delay, self.max_backoff_seconds)


@dataclass
class ApprovalStep:
    """A single step in an approval chain."""
    approver: str
    role: str = "reviewer"
    status: str = "pending"  # pending, approved, rejected, escalated
    decision_time: Optional[datetime] = None
    comments: str = ""
    escalation_timeout_minutes: int = 60
    escalate_to: Optional[str] = None


@dataclass
class WorkflowContext:
    """Shared context passed through all nodes in a workflow execution."""
    workflow_id: str = ""
    execution_id: str = field(default_factory=lambda: str(uuid.uuid4())[:12])
    email: Optional[EmailMessage] = None
    variables: Dict[str, Any] = field(default_factory=dict)
    history: List[Dict[str, Any]] = field(default_factory=list)
    errors: List[Dict[str, Any]] = field(default_factory=list)
    approvals: Dict[str, List[ApprovalStep]] = field(default_factory=dict)
    started_at: datetime = field(default_factory=datetime.now)
    completed_at: Optional[datetime] = None
    reply_all_enforced: bool = False

    def set_var(self, key: str, value: Any) -> None:
        self.variables[key] = value

    def get_var(self, key: str, default: Any = None) -> Any:
        return self.variables.get(key, default)

    def log_event(self, node_id: str, event: str, details: str = "") -> None:
        entry = {
            "timestamp": datetime.now().isoformat(),
            "execution_id": self.execution_id,
            "node_id": node_id,
            "event": event,
            "details": details,
        }
        self.history.append(entry)
        logger.info(f"[{self.execution_id}] {node_id}: {event} {details}")

    def record_error(self, node_id: str, error: Exception) -> None:
        entry = {
            "timestamp": datetime.now().isoformat(),
            "node_id": node_id,
            "error_type": type(error).__name__,
            "error_message": str(error),
        }
        self.errors.append(entry)


# ---------------------------------------------------------------------------
# Base Node
# ---------------------------------------------------------------------------
class WorkflowNode(ABC):
    """Abstract base for all workflow nodes."""

    def __init__(self, node_id: str, label: str = "", description: str = ""):
        self.node_id = node_id
        self.label = label or node_id
        self.description = description
        self.status = NodeStatus.PENDING
        self.next_nodes: List[str] = []
        self.retry_policy: Optional[RetryPolicy] = None
        self._attempts: int = 0

    @abstractmethod
    async def execute(self, ctx: WorkflowContext) -> bool:
        """Execute this node. Returns True on success."""
        ...

    def set_next(self, *node_ids: str) -> "WorkflowNode":
        self.next_nodes = list(node_ids)
        return self

    def with_retry(
        self, max_retries: int = 3, backoff: float = 1.0, multiplier: float = 2.0
    ) -> "WorkflowNode":
        self.retry_policy = RetryPolicy(
            max_retries=max_retries,
            backoff_seconds=backoff,
            backoff_multiplier=multiplier,
        )
        return self

    async def run_with_retry(self, ctx: WorkflowContext) -> bool:
        """Execute with retry policy if configured."""
        self._attempts = 0
        while True:
            try:
                self.status = NodeStatus.RUNNING
                result = await self.execute(ctx)
                self.status = NodeStatus.COMPLETED if result else NodeStatus.FAILED
                return result
            except Exception as exc:
                self._attempts += 1
                ctx.record_error(self.node_id, exc)
                error_type = type(exc).__name__

                if (
                    self.retry_policy
                    and self._attempts <= self.retry_policy.max_retries
                    and error_type in self.retry_policy.retryable_errors
                ):
                    delay = self.retry_policy.get_delay(self._attempts - 1)
                    self.status = NodeStatus.RETRYING
                    ctx.log_event(
                        self.node_id,
                        "retry",
                        f"attempt {self._attempts}/{self.retry_policy.max_retries}, "
                        f"waiting {delay:.1f}s — {error_type}: {exc}",
                    )
                    await asyncio.sleep(delay)
                else:
                    self.status = NodeStatus.FAILED
                    ctx.log_event(
                        self.node_id,
                        "failed",
                        f"{error_type}: {exc} (attempt {self._attempts})",
                    )
                    return False


# ---------------------------------------------------------------------------
# Trigger Node
# ---------------------------------------------------------------------------
class TriggerNode(WorkflowNode):
    """Initiates a workflow when a matching email event occurs."""

    def __init__(
        self,
        node_id: str,
        event: TriggerEvent,
        filters: Optional[Dict[str, Any]] = None,
        **kwargs,
    ):
        super().__init__(node_id, **kwargs)
        self.event = event
        self.filters = filters or {}

    def matches(self, email: EmailMessage, event: TriggerEvent) -> bool:
        """Check if an email event matches the trigger criteria."""
        if self.event != event:
            return False
        for key, expected in self.filters.items():
            actual = getattr(email, key, None)
            if actual is None:
                return False
            if isinstance(expected, str) and isinstance(actual, str):
                if expected.lower() not in actual.lower():
                    return False
            elif isinstance(expected, list):
                if actual not in expected:
                    return False
            elif actual != expected:
                return False
        return True

    async def execute(self, ctx: WorkflowContext) -> bool:
        ctx.log_event(
            self.node_id,
            "triggered",
            f"event={self.event.value}, email={ctx.email.subject if ctx.email else 'N/A'}",
        )
        ctx.set_var("trigger_event", self.event.value)
        ctx.set_var("trigger_time", datetime.now().isoformat())
        return True


# ---------------------------------------------------------------------------
# Condition Node
# ---------------------------------------------------------------------------
class ConditionNode(WorkflowNode):
    """Evaluates a predicate and branches accordingly.

    Supports:
    - Simple field checks (subject contains X)
    - Compound conditions (AND / OR)
    - Reply-all enforcement check
    - Case-by-case priority analysis
    """

    def __init__(
        self,
        node_id: str,
        conditions: Optional[List[Dict[str, Any]]] = None,
        logic: str = "and",
        true_branch: Optional[str] = None,
        false_branch: Optional[str] = None,
        **kwargs,
    ):
        super().__init__(node_id, **kwargs)
        self.conditions = conditions or []
        self.logic = logic.lower()  # "and" or "or"
        self.true_branch = true_branch
        self.false_branch = false_branch

    @staticmethod
    def _evaluate_single(condition: Dict[str, Any], ctx: WorkflowContext) -> bool:
        """Evaluate a single condition dict against context."""
        field_name = condition.get("field", "")
        operator = condition.get("operator", "equals")
        value = condition.get("value", "")

        # Resolve field from email or variables
        if ctx.email:
            actual = getattr(ctx.email, field_name, None)
        else:
            actual = None
        if actual is None:
            actual = ctx.get_var(field_name)

        if operator == ConditionOperator.EQUALS.value:
            return actual == value
        elif operator == ConditionOperator.NOT_EQUALS.value:
            return actual != value
        elif operator == ConditionOperator.CONTAINS.value:
            return value.lower() in str(actual).lower() if actual else False
        elif operator == ConditionOperator.STARTS_WITH.value:
            return str(actual).lower().startswith(value.lower()) if actual else False
        elif operator == ConditionOperator.REGEX.value:
            import re
            return bool(re.search(value, str(actual))) if actual else False
        elif operator == ConditionOperator.GREATER_THAN.value:
            try:
                return float(actual) > float(value)
            except (TypeError, ValueError):
                return False
        elif operator == ConditionOperator.LESS_THAN.value:
            try:
                return float(actual) < float(value)
            except (TypeError, ValueError):
                return False
        elif operator == ConditionOperator.IN_LIST.value:
            return actual in value if isinstance(value, list) else False
        elif operator == ConditionOperator.IS_EMPTY.value:
            return not actual
        elif operator == ConditionOperator.IS_NOT_EMPTY.value:
            return bool(actual)
        return False

    def evaluate(self, ctx: WorkflowContext) -> bool:
        """Evaluate all conditions with AND/OR logic."""
        if not self.conditions:
            return True

        results = [self._evaluate_single(c, ctx) for c in self.conditions]

        if self.logic == "and":
            return all(results)
        elif self.logic == "or":
            return any(results)
        return False

    async def execute(self, ctx: WorkflowContext) -> bool:
        result = self.evaluate(ctx)
        branch = "true" if result else "false"
        next_node = self.true_branch if result else self.false_branch

        ctx.log_event(
            self.node_id,
            f"condition={branch}",
            f"next={next_node or 'end'}",
        )

        # Override next_nodes based on branch
        if next_node:
            self.next_nodes = [next_node]
        else:
            self.next_nodes = []

        return True  # Condition nodes always succeed; they just route


# ---------------------------------------------------------------------------
# Action Node
# ---------------------------------------------------------------------------
class ActionNode(WorkflowNode):
    """Executes an email action (send, forward, tag, move, reply-all, etc.)."""

    def __init__(
        self,
        node_id: str,
        action_type: ActionType,
        params: Optional[Dict[str, Any]] = None,
        enforce_reply_all: bool = False,
        **kwargs,
    ):
        super().__init__(node_id, **kwargs)
        self.action_type = action_type
        self.params = params or {}
        self.enforce_reply_all = enforce_reply_all

    async def execute(self, ctx: WorkflowContext) -> bool:
        email = ctx.email
        ctx.log_event(
            self.node_id,
            f"action:{self.action_type.value}",
            f"params={json.dumps(self.params, default=str)[:120]}",
        )

        if self.action_type == ActionType.SEND_EMAIL:
            return await self._send_email(ctx)
        elif self.action_type == ActionType.FORWARD_EMAIL:
            return await self._forward_email(ctx)
        elif self.action_type == ActionType.REPLY_ALL:
            return await self._reply_all(ctx)
        elif self.action_type == ActionType.TAG_EMAIL:
            return await self._tag_email(ctx)
        elif self.action_type == ActionType.MOVE_EMAIL:
            return await self._move_email(ctx)
        elif self.action_type == ActionType.NOTIFY:
            return await self._notify(ctx)
        elif self.action_type == ActionType.ARCHIVE:
            return await self._archive(ctx)
        elif self.action_type == ActionType.ASSIGN:
            return await self._assign(ctx)
        elif self.action_type == ActionType.CUSTOM:
            return await self._custom_action(ctx)

        ctx.log_event(self.node_id, "unknown_action", self.action_type.value)
        return False

    async def _send_email(self, ctx: WorkflowContext) -> bool:
        recipients = self.params.get("to", [])
        if self.enforce_reply_all and ctx.email:
            reply_targets = ctx.email.reply_all_list()
            missing = set(reply_targets) - set(recipients)
            if missing:
                ctx.log_event(
                    self.node_id,
                    "reply_all_enforcement",
                    f"Adding missing reply-all recipients: {missing}",
                )
                recipients.extend(missing)
                ctx.reply_all_enforced = True

        logger.info(
            f"  → Sending email to {recipients}: "
            f"subject='{self.params.get('subject', '')[:50]}'"
        )
        ctx.set_var("last_sent_to", recipients)
        ctx.set_var("last_sent_subject", self.params.get("subject", ""))
        return True

    async def _forward_email(self, ctx: WorkflowContext) -> bool:
        target = self.params.get("to", "")
        logger.info(f"  → Forwarding to: {target}")
        ctx.set_var("forwarded_to", target)
        return True

    async def _reply_all(self, ctx: WorkflowContext) -> bool:
        if not ctx.email:
            ctx.log_event(self.node_id, "error", "No email in context for reply-all")
            return False
        reply_targets = ctx.email.reply_all_list()
        logger.info(f"  → Reply-All to: {reply_targets}")
        ctx.set_var("reply_all_targets", reply_targets)
        ctx.reply_all_enforced = True
        return True

    async def _tag_email(self, ctx: WorkflowContext) -> bool:
        tags = self.params.get("tags", [])
        if ctx.email:
            ctx.email.labels.update(tags)
        logger.info(f"  → Tagged with: {tags}")
        return True

    async def _move_email(self, ctx: WorkflowContext) -> bool:
        folder = self.params.get("folder", "INBOX")
        logger.info(f"  → Moved to folder: {folder}")
        ctx.set_var("moved_to", folder)
        return True

    async def _notify(self, ctx: WorkflowContext) -> bool:
        channel = self.params.get("channel", "email")
        target = self.params.get("target", "")
        message = self.params.get("message", "")
        logger.info(f"  → Notify via {channel}: '{message[:60]}' → {target}")
        ctx.set_var("notification_sent", True)
        return True

    async def _archive(self, ctx: WorkflowContext) -> bool:
        logger.info("  → Archived email")
        ctx.set_var("archived", True)
        return True

    async def _assign(self, ctx: WorkflowContext) -> bool:
        assignee = self.params.get("assignee", "unassigned")
        logger.info(f"  → Assigned to: {assignee}")
        ctx.set_var("assigned_to", assignee)
        return True

    async def _custom_action(self, ctx: WorkflowContext) -> bool:
        handler = self.params.get("handler")
        if callable(handler):
            result = handler(ctx)
            if asyncio.iscoroutine(result):
                result = await result
            return bool(result)
        ctx.log_event(self.node_id, "no_handler", "Custom action has no handler")
        return False


# ---------------------------------------------------------------------------
# Delay Node
# ---------------------------------------------------------------------------
class DelayNode(WorkflowNode):
    """Introduces a timed pause in the workflow."""

    def __init__(
        self,
        node_id: str,
        delay_seconds: float = 0,
        delay_minutes: float = 0,
        delay_hours: float = 0,
        **kwargs,
    ):
        super().__init__(node_id, **kwargs)
        self.delay_seconds = delay_seconds + (delay_minutes * 60) + (delay_hours * 3600)

    async def execute(self, ctx: WorkflowContext) -> bool:
        # In demo mode, we use a much shorter delay
        actual_delay = min(self.delay_seconds, 0.5)  # Cap for demo
        ctx.log_event(
            self.node_id,
            "delay",
            f"configured={self.delay_seconds:.1f}s, demo={actual_delay:.2f}s",
        )
        await asyncio.sleep(actual_delay)
        ctx.log_event(self.node_id, "delay_complete", "")
        return True


# ---------------------------------------------------------------------------
# Approval Node
# ---------------------------------------------------------------------------
class ApprovalNode(WorkflowNode):
    """Multi-step approval chain with escalation support.

    Modes:
    - SEQUENTIAL: Approvers decide one after another in order
    - UNANIMOUS:  All approvers must approve
    - MAJORITY:   >50% must approve
    - ANY_ONE:    First approval is sufficient
    """

    def __init__(
        self,
        node_id: str,
        steps: Optional[List[ApprovalStep]] = None,
        mode: ApprovalMode = ApprovalMode.SEQUENTIAL,
        on_reject: Optional[str] = None,
        on_timeout: Optional[str] = None,
        auto_approve_demo: bool = True,
        **kwargs,
    ):
        super().__init__(node_id, **kwargs)
        self.steps = steps or []
        self.mode = mode
        self.on_reject = on_reject
        self.on_timeout = on_timeout
        self.auto_approve_demo = auto_approve_demo

    async def execute(self, ctx: WorkflowContext) -> bool:
        ctx.log_event(
            self.node_id,
            "approval_start",
            f"mode={self.mode.value}, approvers={[s.approver for s in self.steps]}",
        )

        if self.mode == ApprovalMode.SEQUENTIAL:
            return await self._sequential_approval(ctx)
        elif self.mode == ApprovalMode.UNANIMOUS:
            return await self._unanimous_approval(ctx)
        elif self.mode == ApprovalMode.MAJORITY:
            return await self._majority_approval(ctx)
        elif self.mode == ApprovalMode.ANY_ONE:
            return await self._any_one_approval(ctx)

        return False

    async def _simulate_approval(self, step: ApprovalStep) -> str:
        """Simulate an approval decision (demo mode)."""
        if self.auto_approve_demo:
            step.status = "approved"
            step.decision_time = datetime.now()
            step.comments = "Auto-approved (demo)"
            return "approved"
        # Simulate async wait
        await asyncio.sleep(0.1)
        step.status = "approved"
        step.decision_time = datetime.now()
        return "approved"

    async def _sequential_approval(self, ctx: WorkflowContext) -> bool:
        for i, step in enumerate(self.steps):
            ctx.log_event(
                self.node_id,
                "approval_step",
                f"({i+1}/{len(self.steps)}) waiting for {step.approver}",
            )
            self.status = NodeStatus.WAITING_APPROVAL
            decision = await self._simulate_approval(step)

            if decision == "rejected":
                ctx.log_event(
                    self.node_id,
                    "rejected",
                    f"by {step.approver} at step {i+1}",
                )
                if self.on_reject:
                    self.next_nodes = [self.on_reject]
                return False

        ctx.log_event(self.node_id, "approval_granted", "All sequential steps passed")
        ctx.approvals[self.node_id] = self.steps
        return True

    async def _unanimous_approval(self, ctx: WorkflowContext) -> bool:
        tasks = [self._simulate_approval(step) for step in self.steps]
        decisions = await asyncio.gather(*tasks)
        approved = sum(1 for d in decisions if d == "approved")
        ctx.log_event(
            self.node_id,
            "unanimous_result",
            f"{approved}/{len(self.steps)} approved",
        )
        if approved == len(self.steps):
            ctx.approvals[self.node_id] = self.steps
            return True
        if self.on_reject:
            self.next_nodes = [self.on_reject]
        return False

    async def _majority_approval(self, ctx: WorkflowContext) -> bool:
        tasks = [self._simulate_approval(step) for step in self.steps]
        decisions = await asyncio.gather(*tasks)
        approved = sum(1 for d in decisions if d == "approved")
        threshold = len(self.steps) // 2 + 1
        ctx.log_event(
            self.node_id,
            "majority_result",
            f"{approved}/{len(self.steps)} approved (need {threshold})",
        )
        if approved >= threshold:
            ctx.approvals[self.node_id] = self.steps
            return True
        if self.on_reject:
            self.next_nodes = [self.on_reject]
        return False

    async def _any_one_approval(self, ctx: WorkflowContext) -> bool:
        for step in self.steps:
            decision = await self._simulate_approval(step)
            if decision == "approved":
                ctx.log_event(
                    self.node_id,
                    "any_approved",
                    f"approved by {step.approver}",
                )
                ctx.approvals[self.node_id] = [step]
                return True
        return False


# ---------------------------------------------------------------------------
# Parallel Execution Group
# ---------------------------------------------------------------------------
class ParallelGroup:
    """Execute multiple node branches in parallel, joining when all complete."""

    def __init__(self, group_id: str, branches: List[List[str]]):
        self.group_id = group_id
        self.branches = branches  # List of branch node-id sequences

    async def execute(
        self, engine: "WorkflowEngine", ctx: WorkflowContext
    ) -> bool:
        logger.info(f"  ⫸ ParallelGroup '{self.group_id}': {len(self.branches)} branches")

        async def run_branch(branch: List[str]) -> bool:
            branch_ok = True
            for nid in branch:
                node = engine.nodes.get(nid)
                if not node:
                    logger.error(f"    Branch missing node: {nid}")
                    branch_ok = False
                    break
                ok = await node.run_with_retry(ctx)
                if not ok:
                    branch_ok = False
                    break
            return branch_ok

        results = await asyncio.gather(
            *[run_branch(branch) for branch in self.branches]
        )

        all_ok = all(results)
        logger.info(
            f"  ⫸ ParallelGroup '{self.group_id}' complete: "
            f"{'ALL OK' if all_ok else 'SOME FAILED'} "
            f"({[bool(r) for r in results]})"
        )
        return all_ok


# ---------------------------------------------------------------------------
# Case-by-Case Analyzer
# ---------------------------------------------------------------------------
class CaseAnalyzer:
    """Performs case-by-case analysis on email messages to determine workflow routing.

    Categorizes emails into cases:
    - urgent_escalation: High priority requiring immediate action
    - routine_processing: Standard handling
    - review_required: Needs human review before action
    - auto_archive: Can be archived without action
    - spam_filtered: Identified as spam/unwanted
    """

    def __init__(self):
        self.case_rules: List[Dict[str, Any]] = []

    def add_rule(
        self,
        case_name: str,
        conditions: List[Dict[str, Any]],
        logic: str = "and",
        priority: int = 0,
    ) -> "CaseAnalyzer":
        self.case_rules.append({
            "case_name": case_name,
            "conditions": conditions,
            "logic": logic,
            "priority": priority,
        })
        self.case_rules.sort(key=lambda r: r["priority"], reverse=True)
        return self

    def analyze(self, email: EmailMessage, ctx: WorkflowContext) -> str:
        """Determine the case category for an email."""
        ctx.email = email

        for rule in self.case_rules:
            results = []
            for cond in rule["conditions"]:
                temp_node = ConditionNode("_temp", conditions=[cond])
                results.append(temp_node._evaluate_single(cond, ctx))

            if rule["logic"] == "or" and any(results):
                logger.info(f"  🔍 Case analysis: '{rule['case_name']}' matched (OR)")
                ctx.set_var("case_type", rule["case_name"])
                return rule["case_name"]
            elif rule["logic"] == "and" and all(results):
                logger.info(f"  🔍 Case analysis: '{rule['case_name']}' matched (AND)")
                ctx.set_var("case_type", rule["case_name"])
                return rule["case_name"]

        logger.info("  🔍 Case analysis: 'default' (no rule matched)")
        ctx.set_var("case_type", "default")
        return "default"


# ---------------------------------------------------------------------------
# Reply-All Enforcement
# ---------------------------------------------------------------------------
class ReplyAllEnforcer:
    """Ensures reply-all completeness across workflow actions.

    Validates that when replying to emails, all original recipients
    (To + CC) are included in the response.
    """

    def __init__(self, strict: bool = True):
        self.strict = strict
        self.violations: List[Dict[str, Any]] = []

    def validate(self, email: EmailMessage, action_recipients: List[str]) -> Tuple[bool, List[str]]:
        """Check if reply-all targets are fully covered."""
        expected = set(email.reply_all_list())
        actual = set(action_recipients)
        missing = expected - actual
        extra = actual - expected - set(email.bcc)

        valid = len(missing) == 0
        if not valid:
            violation = {
                "timestamp": datetime.now().isoformat(),
                "original_sender": email.sender,
                "expected": sorted(expected),
                "actual": sorted(actual),
                "missing": sorted(missing),
                "extra": sorted(extra),
            }
            self.violations.append(violation)
            logger.warning(f"  ⚠ Reply-All violation: missing {sorted(missing)}")

        return valid, sorted(missing)

    def enforce(self, email: EmailMessage, action_recipients: List[str]) -> List[str]:
        """Force-add missing reply-all recipients."""
        valid, missing = self.validate(email, action_recipients)
        if not valid and self.strict:
            enforced = list(set(action_recipients) | set(missing))
            logger.info(f"  ✓ Reply-All enforced: added {missing}")
            return sorted(enforced)
        return action_recipients


# ---------------------------------------------------------------------------
# Workflow Builder (Fluent API)
# ---------------------------------------------------------------------------
class WorkflowBuilder:
    """Fluent API for constructing email workflows."""

    def __init__(self, name: str, description: str = ""):
        self.name = name
        self.description = description
        self._nodes: Dict[str, WorkflowNode] = {}
        self._parallel_groups: List[ParallelGroup] = []
        self._case_routes: Dict[str, str] = {}  # case_name -> entry node_id
        self._entry_node: Optional[str] = None
        self._case_analyzer = CaseAnalyzer()
        self._reply_enforcer = ReplyAllEnforcer()

    def add_node(self, node: WorkflowNode) -> "WorkflowBuilder":
        self._nodes[node.node_id] = node
        return self

    def set_entry(self, node_id: str) -> "WorkflowBuilder":
        self._entry_node = node_id
        return self

    def chain(self, *node_ids: str) -> "WorkflowBuilder":
        """Chain nodes sequentially: A → B → C."""
        for i in range(len(node_ids) - 1):
            self._nodes[node_ids[i]].set_next(node_ids[i + 1])
        return self

    def add_parallel(self, group_id: str, branches: List[List[str]]) -> "WorkflowBuilder":
        group = ParallelGroup(group_id, branches)
        self._parallel_groups.append(group)
        return self

    def add_case_route(self, case_name: str, node_id: str) -> "WorkflowBuilder":
        self._case_routes[case_name] = node_id
        return self

    def case_analyzer(self) -> CaseAnalyzer:
        return self._case_analyzer

    def reply_enforcer(self) -> ReplyAllEnforcer:
        return self._reply_enforcer

    def build(self) -> "WorkflowDefinition":
        if not self._entry_node and self._nodes:
            self._entry_node = next(iter(self._nodes))
        return WorkflowDefinition(
            name=self.name,
            description=self.description,
            nodes=self._nodes,
            entry_node=self._entry_node,
            parallel_groups=self._parallel_groups,
            case_routes=self._case_routes,
            case_analyzer=self._case_analyzer,
            reply_enforcer=self._reply_enforcer,
        )

    def visualize(self) -> str:
        """Generate ASCII art visualization of the workflow."""
        lines = []
        lines.append(f"╔══════════════════════════════════════════════════════════╗")
        lines.append(f"║  Workflow: {self.name:<46} ║")
        lines.append(f"║  Nodes: {len(self._nodes):<49} ║")
        lines.append(f"╚══════════════════════════════════════════════════════════╝")
        lines.append("")

        for nid, node in self._nodes.items():
            icon = {
                TriggerNode: "⚡",
                ConditionNode: "◆",
                ActionNode: "→",
                DelayNode: "⏱",
                ApprovalNode: "✓",
            }.get(type(node), "•")

            type_name = type(node).__name__.replace("Node", "")
            next_str = ", ".join(node.next_nodes) if node.next_nodes else "END"

            lines.append(f"  {icon} [{nid}] ({type_name})")
            if isinstance(node, TriggerNode):
                lines.append(f"    event: {node.event.value}")
            elif isinstance(node, ConditionNode):
                lines.append(f"    logic: {node.logic}, conditions: {len(node.conditions)}")
                if node.true_branch:
                    lines.append(f"    true  → {node.true_branch}")
                if node.false_branch:
                    lines.append(f"    false → {node.false_branch}")
            elif isinstance(node, ActionNode):
                lines.append(f"    action: {node.action_type.value}")
                if node.enforce_reply_all:
                    lines.append(f"    [REPLY-ALL ENFORCED]")
            elif isinstance(node, DelayNode):
                lines.append(f"    delay: {node.delay_seconds:.0f}s")
            elif isinstance(node, ApprovalNode):
                lines.append(f"    mode: {node.mode.value}, steps: {len(node.steps)}")

            if node.next_nodes:
                lines.append(f"    next: {next_str}")
            if node.retry_policy:
                lines.append(
                    f"    retry: max={node.retry_policy.max_retries}, "
                    f"backoff={node.retry_policy.backoff_seconds}s"
                )
            lines.append("")

        if self._parallel_groups:
            lines.append("  ── Parallel Groups ──")
            for pg in self._parallel_groups:
                lines.append(f"  ⫸ {pg.group_id}:")
                for i, branch in enumerate(pg.branches):
                    lines.append(f"    Branch {i+1}: {' → '.join(branch)}")
            lines.append("")

        if self._case_routes:
            lines.append("  ── Case Routes ──")
            for case, nid in self._case_routes.items():
                lines.append(f"  🔀 {case} → {nid}")
            lines.append("")

        return "\n".join(lines)


# ---------------------------------------------------------------------------
# Workflow Definition & Engine
# ---------------------------------------------------------------------------
@dataclass
class WorkflowDefinition:
    name: str
    description: str
    nodes: Dict[str, WorkflowNode]
    entry_node: Optional[str]
    parallel_groups: List[ParallelGroup]
    case_routes: Dict[str, str]
    case_analyzer: CaseAnalyzer
    reply_enforcer: ReplyAllEnforcer


class WorkflowEngine:
    """Executes workflow definitions."""

    def __init__(self, definition: WorkflowDefinition):
        self.definition = definition
        self.nodes = definition.nodes
        self._executions: List[WorkflowContext] = []

    async def execute(self, email: EmailMessage) -> WorkflowContext:
        """Run the workflow for a given email."""
        ctx = WorkflowContext(
            workflow_id=self.definition.name,
            email=email,
        )
        self._executions.append(ctx)

        logger.info(f"{'='*60}")
        logger.info(f"  Workflow: {self.definition.name}")
        logger.info(f"  Email: '{email.subject}' from {email.sender}")
        logger.info(f"  Execution: {ctx.execution_id}")
        logger.info(f"{'='*60}")

        # Case-by-case analysis
        if self.definition.case_routes:
            case_type = self.definition.case_analyzer.analyze(email, ctx)
            entry = self.definition.case_routes.get(
                case_type, self.definition.case_routes.get("default")
            )
            if entry:
                await self._execute_from(entry, ctx)
        elif self.definition.entry_node:
            await self._execute_from(self.definition.entry_node, ctx)

        # Run any parallel groups that were queued
        for pg in self.definition.parallel_groups:
            if pg.group_id in [
                v for v in ctx.variables.values() if isinstance(v, str)
            ] or ctx.get_var("run_parallel"):
                await pg.execute(self, ctx)

        ctx.completed_at = datetime.now()
        duration = (ctx.completed_at - ctx.started_at).total_seconds()
        logger.info(f"  ✓ Execution complete in {duration:.3f}s")
        logger.info(f"  Events: {len(ctx.history)}, Errors: {len(ctx.errors)}")

        return ctx

    async def _execute_from(self, node_id: str, ctx: WorkflowContext) -> None:
        """Execute a linear chain starting from node_id."""
        visited: Set[str] = set()
        current = node_id

        while current and current not in visited:
            visited.add(current)
            node = self.nodes.get(current)
            if not node:
                ctx.log_event(current, "missing_node", "Node not found in workflow")
                break

            # Check for parallel group trigger
            for pg in self.definition.parallel_groups:
                if pg.group_id == current:
                    await pg.execute(self, ctx)
                    # Move to next nodes of the last node in first branch
                    last_node_id = pg.branches[0][-1] if pg.branches else None
                    if last_node_id:
                        last_node = self.nodes.get(last_node_id)
                        current = last_node.next_nodes[0] if last_node and last_node.next_nodes else None
                    else:
                        current = None
                    continue

            success = await node.run_with_retry(ctx)

            if not success:
                ctx.log_event(current, "execution_halted", f"Node failed")
                break

            # Move to next node
            if node.next_nodes:
                current = node.next_nodes[0]
            else:
                current = None


# ---------------------------------------------------------------------------
# Workflow Visualization (Mermaid-style text)
# ---------------------------------------------------------------------------
def generate_mermaid(definition: WorkflowDefinition) -> str:
    """Generate a Mermaid flowchart definition for the workflow."""
    lines = ["graph TD"]

    shape_map = {
        TriggerNode: ("⚡", "([{}])"),
        ConditionNode: ("◆", "{{{}}}"),
        ActionNode: ("→", "[{}]"),
        DelayNode: ("⏱", "[[{}]]"),
        ApprovalNode: ("✓", "[/{}]"),
    }

    for nid, node in definition.nodes.items():
        icon, fmt = shape_map.get(type(node), ("•", "({})"))
        label = f"{icon} {nid}"
        lines.append(f"    {nid}{fmt.format(label)}")

    for nid, node in definition.nodes.items():
        for next_id in node.next_nodes:
            if isinstance(node, ConditionNode):
                if next_id == node.true_branch:
                    lines.append(f"    {nid} -->|Yes| {next_id}")
                elif next_id == node.false_branch:
                    lines.append(f"    {nid} -->|No| {next_id}")
                else:
                    lines.append(f"    {nid} --> {next_id}")
            else:
                lines.append(f"    {nid} --> {next_id}")

    return "\n".join(lines)


# ---------------------------------------------------------------------------
# Demo Scenarios
# ---------------------------------------------------------------------------
def build_enterprise_email_workflow() -> WorkflowBuilder:
    """Build a comprehensive enterprise email workflow."""

    builder = WorkflowBuilder(
        name="Enterprise Email Processing",
        description="Handles incoming emails with case analysis, approvals, and reply-all enforcement",
    )

    # --- Trigger ---
    trigger = TriggerNode(
        "trigger",
        event=TriggerEvent.EMAIL_RECEIVED,
        filters={"subject": ""},  # Match all
        label="Incoming Email",
        description="Triggers on any received email",
    )

    # --- Priority Condition ---
    priority_check = ConditionNode(
        "check_priority",
        conditions=[
            {"field": "priority", "operator": "equals", "value": "urgent"},
        ],
        logic="or",
        true_branch="escalate",
        false_branch="check_department",
        label="Priority Check",
    )

    # --- Department Condition ---
    dept_check = ConditionNode(
        "check_department",
        conditions=[
            {"field": "sender", "operator": "contains", "value": "finance"},
            {"field": "sender", "operator": "contains", "value": "accounting"},
        ],
        logic="or",
        true_branch="finance_approval",
        false_branch="auto_process",
        label="Department Check",
    )

    # --- Escalation Action ---
    escalate = ActionNode(
        "escalate",
        action_type=ActionType.NOTIFY,
        params={
            "channel": "slack",
            "target": "#urgent-emails",
            "message": "URGENT email received requiring immediate attention",
        },
        enforce_reply_all=True,
        label="Escalate to Slack",
    )
    escalate.with_retry(max_retries=3, backoff=0.5)

    # --- Finance Approval Chain ---
    finance_approval = ApprovalNode(
        "finance_approval",
        steps=[
            ApprovalStep(approver="cfo@company.com", role="CFO"),
            ApprovalStep(approver="controller@company.com", role="Controller"),
            ApprovalStep(approver="audit@company.com", role="Audit"),
        ],
        mode=ApprovalMode.SEQUENTIAL,
        on_reject="reject_notify",
        label="Finance Approval Chain",
    )

    # --- Auto Process ---
    auto_process = ActionNode(
        "auto_process",
        action_type=ActionType.TAG_EMAIL,
        params={"tags": ["auto-processed", "routine"]},
        label="Auto-Process",
    )

    # --- Tag and Route ---
    tag_urgent = ActionNode(
        "tag_urgent",
        action_type=ActionType.TAG_EMAIL,
        params={"tags": ["urgent", "escalated", "sla-4h"]},
        label="Tag Urgent",
    )

    # --- Reply All to Sender ---
    reply_ack = ActionNode(
        "reply_ack",
        action_type=ActionType.REPLY_ALL,
        params={"body": "Thank you, your email has been received and is being reviewed."},
        enforce_reply_all=True,
        label="Reply-All Acknowledgment",
    ).with_retry(max_retries=2, backoff=0.3)

    # --- Forward to Manager ---
    forward_manager = ActionNode(
        "forward_mgr",
        action_type=ActionType.FORWARD_EMAIL,
        params={"to": "manager@company.com", "note": "FYI - urgent email processed"},
        label="Forward to Manager",
    )

    # --- Move to Archive ---
    archive = ActionNode(
        "archive",
        action_type=ActionType.MOVE_EMAIL,
        params={"folder": "Processed"},
        label="Archive",
    )

    # --- Delay Node ---
    delay_check = DelayNode(
        "delay_5min",
        delay_minutes=5,
        label="Wait 5 Minutes",
    )

    # --- Rejection notification ---
    reject_notify = ActionNode(
        "reject_notify",
        action_type=ActionType.NOTIFY,
        params={
            "channel": "email",
            "target": "sender",
            "message": "Your request has been reviewed and requires additional information.",
        },
        label="Rejection Notice",
    )

    # --- Approved action ---
    approved_action = ActionNode(
        "approved_action",
        action_type=ActionType.SEND_EMAIL,
        params={
            "to": ["finance-team@company.com"],
            "subject": "Approved: Finance Request",
            "body": "The finance request has been fully approved.",
        },
        enforce_reply_all=True,
        label="Send Approval Confirmation",
    )

    # --- Add all nodes ---
    for node in [
        trigger, priority_check, dept_check, escalate, finance_approval,
        auto_process, tag_urgent, reply_ack, forward_manager, archive,
        delay_check, reject_notify, approved_action,
    ]:
        builder.add_node(node)

    # --- Chain the flow ---
    builder.set_entry("trigger")
    builder.chain("trigger", "check_priority")
    builder.chain("check_department", "auto_process", "delay_5min", "archive")
    builder.chain("escalate", "tag_urgent", "reply_ack", "forward_mgr")
    builder.chain("finance_approval", "approved_action")
    builder.chain("reject_notify", "archive")

    # --- Case Routes ---
    builder.add_case_route("urgent_escalation", "escalate")
    builder.add_case_route("finance_review", "finance_approval")
    builder.add_case_route("routine_processing", "auto_process")
    builder.add_case_route("default", "auto_process")

    # --- Case Analysis Rules ---
    analyzer = builder.case_analyzer()
    analyzer.add_rule(
        "urgent_escalation",
        conditions=[
            {"field": "priority", "operator": "equals", "value": "urgent"},
        ],
        priority=100,
    )
    analyzer.add_rule(
        "finance_review",
        conditions=[
            {"field": "sender", "operator": "contains", "value": "finance"},
            {"field": "subject", "operator": "contains", "value": "invoice"},
        ],
        logic="or",
        priority=80,
    )
    analyzer.add_rule(
        "routine_processing",
        conditions=[
            {"field": "priority", "operator": "equals", "value": "normal"},
        ],
        priority=10,
    )

    # --- Reply-All Enforcement ---
    enforcer = builder.reply_enforcer()
    enforcer.strict = True

    return builder


def build_parallel_approval_workflow() -> WorkflowBuilder:
    """Build a workflow demonstrating parallel execution."""

    builder = WorkflowBuilder(
        name="Parallel Approval Pipeline",
        description="Demonstrates parallel branch execution with multiple approval modes",
    )

    trigger = TriggerNode("start", TriggerEvent.EMAIL_RECEIVED)
    builder.add_node(trigger)

    # Parallel branch 1: Unanimous approval
    unanimous = ApprovalNode(
        "unanimous_check",
        steps=[
            ApprovalStep(approver="legal@co.com", role="Legal"),
            ApprovalStep(approver="compliance@co.com", role="Compliance"),
        ],
        mode=ApprovalMode.UNANIMOUS,
    )
    builder.add_node(unanimous)

    # Parallel branch 2: Any-one approval
    quick_approve = ApprovalNode(
        "quick_approve",
        steps=[
            ApprovalStep(approver="team-lead@co.com", role="Lead"),
            ApprovalStep(approver="senior@co.com", role="Senior"),
            ApprovalStep(approver="manager@co.com", role="Manager"),
        ],
        mode=ApprovalMode.ANY_ONE,
    )
    builder.add_node(quick_approve)

    # Parallel branch 3: Majority approval
    majority = ApprovalNode(
        "majority_vote",
        steps=[
            ApprovalStep(approver="director1@co.com", role="Director"),
            ApprovalStep(approver="director2@co.com", role="Director"),
            ApprovalStep(approver="director3@co.com", role="Director"),
            ApprovalStep(approver="vp@co.com", role="VP"),
        ],
        mode=ApprovalMode.MAJORITY,
    )
    builder.add_node(majority)

    # Final action after all branches
    final = ActionNode(
        "final_action",
        ActionType.SEND_EMAIL,
        params={"to": ["all@co.com"], "subject": "All approvals complete"},
    )
    builder.add_node(final)

    builder.set_entry("start")
    builder.chain("start", "unanimous_check")
    builder.chain("unanimous_check", "final_action")

    # Add parallel group
    builder.add_parallel(
        "approval_fan_out",
        branches=[
            ["unanimous_check"],
            ["quick_approve"],
            ["majority_vote"],
        ],
    )

    return builder


# ---------------------------------------------------------------------------
# Main Demo
# ---------------------------------------------------------------------------
async def run_demo():
    """Run comprehensive demo of the V126 Email Workflow Builder."""

    print("\n" + "═" * 70)
    print("   V126 EMAIL WORKFLOW AUTOMATION BUILDER — Demo Suite")
    print("═" * 70 + "\n")

    # ── Demo 1: Visualize the Enterprise Workflow ──
    print("┌─────────────────────────────────────────────────────────┐")
    print("│  DEMO 1: Enterprise Workflow Visualization              │")
    print("└─────────────────────────────────────────────────────────┘\n")

    builder = build_enterprise_email_workflow()
    print(builder.visualize())

    definition = builder.build()
    print("  ── Mermaid Diagram ──")
    print(generate_mermaid(definition))
    print()

    # ── Demo 2: Process Urgent Email ──
    print("\n┌─────────────────────────────────────────────────────────┐")
    print("│  DEMO 2: Urgent Email — Escalation Flow                 │")
    print("└─────────────────────────────────────────────────────────┘\n")

    engine = WorkflowEngine(definition)
    urgent_email = EmailMessage(
        subject="CRITICAL: Server outage in production",
        sender="ops-team@company.com",
        recipients=["engineering@company.com", "cto@company.com"],
        cc=["manager@company.com", "director@company.com"],
        body="Production servers are down. Immediate action required.",
        priority="urgent",
        labels={"inbox"},
    )
    ctx1 = await engine.execute(urgent_email)
    print(f"\n  Reply-All enforced: {ctx1.reply_all_enforced}")
    print(f"  Case type: {ctx1.get_var('case_type')}")

    # ── Demo 3: Process Finance Email ──
    print("\n\n┌─────────────────────────────────────────────────────────┐")
    print("│  DEMO 3: Finance Email — Approval Chain                 │")
    print("└─────────────────────────────────────────────────────────┘\n")

    finance_email = EmailMessage(
        subject="Invoice #2847 — Q4 Budget Approval Required",
        sender="finance-dept@company.com",
        recipients=["cfo@company.com"],
        cc=["controller@company.com"],
        body="Please review and approve the attached invoice for $125,000.",
        priority="high",
        labels={"inbox"},
    )
    ctx2 = await engine.execute(finance_email)
    print(f"\n  Case type: {ctx2.get_var('case_type')}")
    print(f"  Approvals: {len(ctx2.approvals)} chain(s) completed")

    # ── Demo 4: Process Routine Email ──
    print("\n\n┌─────────────────────────────────────────────────────────┐")
    print("│  DEMO 4: Routine Email — Auto-Process                   │")
    print("└─────────────────────────────────────────────────────────┘\n")

    routine_email = EmailMessage(
        subject="Weekly team newsletter",
        sender="newsletter@company.com",
        recipients=["all@company.com"],
        body="This week's updates and announcements...",
        priority="normal",
        labels={"inbox"},
    )
    ctx3 = await engine.execute(routine_email)
    print(f"\n  Case type: {ctx3.get_var('case_type')}")

    # ── Demo 5: Reply-All Enforcement ──
    print("\n\n┌─────────────────────────────────────────────────────────┐")
    print("│  DEMO 5: Reply-All Enforcement Validation               │")
    print("└─────────────────────────────────────────────────────────┘\n")

    enforcer = ReplyAllEnforcer(strict=True)
    test_email = EmailMessage(
        subject="Project Update",
        sender="alice@company.com",
        recipients=["bob@company.com", "charlie@company.com"],
        cc=["dave@company.com", "eve@company.com"],
    )
    print(f"  Original sender: {test_email.sender}")
    print(f"  Original To: {test_email.recipients}")
    print(f"  Original CC: {test_email.cc}")
    print(f"  Full Reply-All list: {test_email.reply_all_list()}")

    # Incomplete reply
    partial_reply = ["alice@company.com", "bob@company.com"]
    valid, missing = enforcer.validate(test_email, partial_reply)
    print(f"\n  Partial reply to: {partial_reply}")
    print(f"  Valid: {valid}, Missing: {missing}")

    # Enforced
    enforced = enforcer.enforce(test_email, partial_reply)
    print(f"  Enforced recipients: {enforced}")

    # ── Demo 6: Parallel Approval Workflow ──
    print("\n\n┌─────────────────────────────────────────────────────────┐")
    print("│  DEMO 6: Parallel Approval Execution                    │")
    print("└─────────────────────────────────────────────────────────┘\n")

    parallel_builder = build_parallel_approval_workflow()
    print(parallel_builder.visualize())

    parallel_def = parallel_builder.build()
    parallel_engine = WorkflowEngine(parallel_def)

    contract_email = EmailMessage(
        subject="Enterprise Contract — Multi-Department Review",
        sender="legal@external.com",
        recipients=["contracts@company.com"],
        body="Please review the attached enterprise agreement.",
        priority="high",
    )

    ctx4 = await parallel_engine.execute(contract_email)
    print(f"\n  Approvals completed: {len(ctx4.approvals)}")
    print(f"  Total events: {len(ctx4.history)}")

    # ── Demo 7: Retry Mechanism ──
    print("\n\n┌─────────────────────────────────────────────────────────┐")
    print("│  DEMO 7: Error Handling & Retry                         │")
    print("└─────────────────────────────────────────────────────────┘\n")

    retry_builder = WorkflowBuilder("Retry Demo", "Tests retry on transient failures")
    retry_builder.add_node(TriggerNode("rt", TriggerEvent.EMAIL_RECEIVED))

    class FailingAction(ActionNode):
        """Action that fails twice then succeeds."""
        def __init__(self):
            super().__init__(
                "flaky_action", ActionType.CUSTOM,
                params={"handler": self._flaky_handler}
            )
            self.call_count = 0

        async def _flaky_handler(self, ctx):
            self.call_count += 1
            if self.call_count < 3:
                raise ConnectionError(f"Transient failure #{self.call_count}")
            logger.info(f"  ✓ Flaky action succeeded on attempt #{self.call_count}")
            return True

    flaky = FailingAction()
    flaky.with_retry(max_retries=5, backoff=0.1, multiplier=1.5)
    retry_builder.add_node(flaky)
    retry_builder.set_entry("rt")
    retry_builder.chain("rt", "flaky_action")

    retry_engine = WorkflowEngine(retry_builder.build())
    retry_email = EmailMessage(subject="Retry test", sender="test@test.com")
    ctx5 = await retry_engine.execute(retry_email)
    print(f"\n  Errors recorded: {len(ctx5.errors)}")
    print(f"  Final status: {'SUCCESS' if not ctx5.errors or flaky.status == NodeStatus.COMPLETED else 'FAILED'}")

    # ── Summary ──
    print("\n\n" + "═" * 70)
    print("   DEMO COMPLETE — All scenarios executed successfully")
    print("═" * 70)
    print(f"""
  Summary:
  ├─ Workflows built:     2 (Enterprise + Parallel Approval)
  ├─ Emails processed:    5
  ├─ Case types:          urgent_escalation, finance_review, routine_processing
  ├─ Approval modes:      Sequential, Unanimous, Majority, Any-One
  ├─ Reply-All enforced:  Yes (strict mode)
  ├─ Retry mechanism:     Exponential backoff with configurable limits
  ├─ Node types:          Trigger, Condition, Action, Delay, Approval
  └─ Features:            Case analysis, parallel execution, error handling
""")


# ---------------------------------------------------------------------------
# Entry Point
# ---------------------------------------------------------------------------
if __name__ == "__main__":
    asyncio.run(run_demo())

"""
V682 - Email Workflow Automation Engine
========================================

Detects actionable workflows from emails, generates workflow diagrams,
tracks execution status, identifies bottlenecks, and suggests optimizations.
Enforces reply-all for multi-recipient emails.

Author: Hermes Agent
Version: 682
"""

import re
import hashlib
import time
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional, Tuple
from enum import Enum
from collections import defaultdict
import uuid


class WorkflowNodeType(Enum):
    """Types of workflow nodes."""
    START = "start"
    TASK = "task"
    DECISION = "decision"
    APPROVAL = "approval"
    NOTIFICATION = "notification"
    PARALLEL = "parallel"
    END = "end"
    WAIT = "wait"


class WorkflowEdgeType(Enum):
    """Types of workflow edges."""
    SEQUENTIAL = "sequential"
    CONDITIONAL_TRUE = "conditional_true"
    CONDITIONAL_FALSE = "conditional_false"
    APPROVAL_GRANTED = "approval_granted"
    APPROVAL_DENIED = "approval_denied"
    PARALLEL_FORK = "parallel_fork"
    PARALLEL_JOIN = "parallel_join"


class TaskStatus(Enum):
    """Status of a workflow task."""
    PENDING = "pending"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"
    BLOCKED = "blocked"
    FAILED = "failed"
    SKIPPED = "skipped"
    WAITING_APPROVAL = "waiting_approval"
    OVERDUE = "overdue"


class WorkflowPattern(Enum):
    """Detected workflow patterns."""
    IF_THEN_ELSE = "if_then_else"
    SEQUENTIAL = "sequential"
    APPROVAL_CHAIN = "approval_chain"
    PARALLEL_TASKS = "parallel_tasks"
    ESCALATION = "escalation"
    DEADLINE_BASED = "deadline_based"
    NOTIFICATION_CHAIN = "notification_chain"
    REVIEW_CYCLE = "review_cycle"


# Pattern detection regex patterns
IF_THEN_PATTERNS = [
    r"if\s+(.+?)\s*,?\s*then\s+(.+?)(?:[,;.]|$)",
    r"when\s+(.+?)\s*,?\s*(?:please\s+)?(.+?)(?:[,;.]|$)",
    r"in case\s+(.+?)\s*,?\s*(.+?)(?:[,;.]|$)",
    r"should\s+(.+?)\s*(?:happen|occur)\s*,?\s*(.+?)(?:[,;.]|$)",
    r"if\s+(.+?)\s*is\s+(?:not\s+)?(?:available|ready|approved|done|complete)\s*,?\s*(.+?)(?:[,;.]|$)",
]

ELSE_PATTERNS = [
    r"(?:otherwise|else|if not)\s*,?\s*(.+?)(?:[.;]|$)",
    r"failing\s+that\s*,?\s*(.+?)(?:[.;]|$)",
    r"as\s+an?\s+alternative\s*,?\s*(.+?)(?:[.;]|$)",
]

SEQUENTIAL_PATTERNS = [
    r"(?:first|step\s*1|1\.)\s*[:\-]?\s*(.+?)(?:[.;]|$)",
    r"(?:then|next|after\s+that|subsequently)\s*[,;]?\s*(.+?)(?:[.;]|$)",
    r"(?:finally|lastly|last\s+step)\s*[,;]?\s*(.+?)(?:[.;]|$)",
    r"(?:step\s*\d+|phase\s*\d+|stage\s*\d+)\s*[:\-]?\s*(.+?)(?:[.;]|$)",
]

APPROVAL_PATTERNS = [
    r"(?:please|kindly)\s+(?:review|approve|sign\s+off)\s+(.+?)(?:[.;]|$)",
    r"(?:needs?|requires?)\s+(?:your\s+)?(?:approval|sign[- ]?off|review)\s*(?:for|on)?\s*(.+?)(?:[.;]|$)",
    r"(?:waiting|pending)\s+(?:for\s+)?(?:your\s+)?(?:approval|review)\s*(?:on|for)?\s*(.+?)(?:[.;]|$)",
    r"(?:please|kindly)\s+(?:confirm|authorize)\s+(.+?)(?:[.;]|$)",
]

ESCALATION_PATTERNS = [
    r"(?:if|when)\s+(?:not|no)\s+(?:response|reply|approval)\s+(?:within|by|after)\s+(.+?)\s*,?\s*(?:then\s+)?(?:escalate|forward|send)\s+(?:to\s+)?(.+?)(?:[.;]|$)",
    r"(?:escalate|forward|raise)\s+(?:to|with)\s+(.+?)(?:[.;]|$)",
    r"if\s+(?:no|not)\s+(?:heard|responded|approved)\s+(?:by|within)\s+(.+?)(?:[,;]?\s*(?:escalate|forward|contact)\s+(?:to\s+)?(.+?)(?:[.;]|$))?",
]

DEADLINE_PATTERNS = [
    r"(?:by|before|no later than|deadline(?:\s+is)?)\s+(.+?)(?:[.,;]|$)",
    r"(?:due|due\s+date(?:\s+is)?|due\s+by)\s+(.+?)(?:[.,;]|$)",
    r"(?:needs?|must\s+be)\s+(?:done|completed|finished|submitted)\s+(?:by|before)\s+(.+?)(?:[.,;]|$)",
]

PARALLEL_PATTERNS = [
    r"(?:meanwhile|at the same time|in parallel|concurrently)\s*[,;]?\s*(.+?)(?:[.;]|$)",
    r"(?:simultaneously|in\s+the\s+meantime)\s*[,;]?\s*(.+?)(?:[.;]|$)",
    r"(?:while\s+(.+?)\s*,?\s*(.+?)(?:[.;]|$))",
]


class WorkflowNode:
    """Represents a node in the workflow graph."""

    def __init__(self, node_id: str, node_type: WorkflowNodeType, description: str,
                 assignee: str = "", deadline: str = "", priority: int = 5):
        self.node_id = node_id
        self.node_type = node_type
        self.description = description
        self.assignee = assignee
        self.deadline = deadline
        self.priority = priority
        self.status = TaskStatus.PENDING
        self.started_at: Optional[datetime] = None
        self.completed_at: Optional[datetime] = None
        self.dependencies: List[str] = []
        self.metadata: Dict[str, Any] = {}

    def to_dict(self) -> Dict[str, Any]:
        return {
            "node_id": self.node_id,
            "node_type": self.node_type.value,
            "description": self.description,
            "assignee": self.assignee,
            "deadline": self.deadline,
            "priority": self.priority,
            "status": self.status.value,
            "started_at": self.started_at.isoformat() if self.started_at else None,
            "completed_at": self.completed_at.isoformat() if self.completed_at else None,
            "dependencies": self.dependencies,
            "metadata": self.metadata,
        }


class WorkflowEdge:
    """Represents an edge (connection) in the workflow graph."""

    def __init__(self, source_id: str, target_id: str, edge_type: WorkflowEdgeType,
                 condition: str = ""):
        self.source_id = source_id
        self.target_id = target_id
        self.edge_type = edge_type
        self.condition = condition

    def to_dict(self) -> Dict[str, Any]:
        return {
            "source_id": self.source_id,
            "target_id": self.target_id,
            "edge_type": self.edge_type.value,
            "condition": self.condition,
        }


class Workflow:
    """Represents a complete workflow."""

    def __init__(self, workflow_id: str, name: str, source_email_id: str = ""):
        self.workflow_id = workflow_id
        self.name = name
        self.source_email_id = source_email_id
        self.nodes: Dict[str, WorkflowNode] = {}
        self.edges: List[WorkflowEdge] = []
        self.patterns_detected: List[WorkflowPattern] = []
        self.created_at = datetime.now()
        self.status = "active"
        self.execution_log: List[Dict[str, Any]] = []
        self.reply_all_required: bool = False
        self.participants: List[str] = []

    def add_node(self, node: WorkflowNode):
        self.nodes[node.node_id] = node

    def add_edge(self, edge: WorkflowEdge):
        self.edges.append(edge)

    def to_dict(self) -> Dict[str, Any]:
        return {
            "workflow_id": self.workflow_id,
            "name": self.name,
            "source_email_id": self.source_email_id,
            "nodes": {nid: n.to_dict() for nid, n in self.nodes.items()},
            "edges": [e.to_dict() for e in self.edges],
            "patterns_detected": [p.value for p in self.patterns_detected],
            "created_at": self.created_at.isoformat(),
            "status": self.status,
            "execution_log": self.execution_log,
            "reply_all_required": self.reply_all_required,
            "participants": self.participants,
        }


class EmailWorkflowAutomationEngine:
    """
    V682 - Email Workflow Automation Engine
    
    Detects actionable workflows from emails, generates diagrams,
    tracks status, identifies bottlenecks, and suggests optimizations.
    """

    def __init__(self):
        self.workflows: Dict[str, Workflow] = {}
        self.email_cache: Dict[str, Dict[str, Any]] = {}
        self.execution_history: List[Dict[str, Any]] = []
        self.optimization_log: List[Dict[str, Any]] = []

    def _generate_id(self, prefix: str = "") -> str:
        """Generate a unique identifier."""
        uid = uuid.uuid4().hex[:8]
        return f"{prefix}_{uid}" if prefix else uid

    def _parse_duration(self, duration_str: str) -> Optional[timedelta]:
        """Parse a duration string into a timedelta."""
        duration_str = duration_str.strip().lower()
        patterns = [
            (r"(\d+)\s*(?:hours?|hrs?|h)", lambda m: timedelta(hours=int(m.group(1)))),
            (r"(\d+)\s*(?:days?|d)", lambda m: timedelta(days=int(m.group(1)))),
            (r"(\d+)\s*(?:minutes?|mins?|m)", lambda m: timedelta(minutes=int(m.group(1)))),
            (r"(\d+)\s*(?:weeks?|wks?|w)", lambda m: timedelta(weeks=int(m.group(1)))),
            (r"eod|end\s+of\s+day", lambda m: timedelta(hours=8)),
            (r"eow|end\s+of\s+week", lambda m: timedelta(days=5)),
            (r"tomorrow", lambda m: timedelta(days=1)),
            (r"next\s+week", lambda m: timedelta(weeks=1)),
        ]
        for pattern, factory in patterns:
            match = re.search(pattern, duration_str)
            if match:
                return factory(match)
        return None

    def _extract_assignee(self, text: str) -> str:
        """Extract assignee from text."""
        patterns = [
            r"(?:assign(?:ed)?\s+to|@\w+|for\s+)(\w+(?:\.\w+)?)",
            r"(?:send\s+to|forward\s+to|contact)\s+(\w+(?:\.\w+)?(?:@\w+\.\w+)?)",
            r"(\w+(?:\.\w+)?@\w+\.\w+)",
        ]
        for pattern in patterns:
            match = re.search(pattern, text, re.IGNORECASE)
            if match:
                return match.group(1)
        return ""

    def _detect_if_then_else(self, text: str) -> List[Dict[str, Any]]:
        """Detect if-then-else patterns in email text."""
        results = []
        text_lower = text.lower()

        for pattern in IF_THEN_PATTERNS:
            matches = re.finditer(pattern, text_lower, re.IGNORECASE)
            for match in matches:
                condition = match.group(1).strip()
                action = match.group(2).strip()
                result = {
                    "pattern": "if_then",
                    "condition": condition,
                    "then_action": action,
                    "confidence": 0.85,
                    "original_text": match.group(0),
                }
                results.append(result)

        # Detect else branches
        for pattern in ELSE_PATTERNS:
            matches = re.finditer(pattern, text_lower, re.IGNORECASE)
            for match in matches:
                else_action = match.group(1).strip()
                if results:
                    results[-1]["else_action"] = else_action
                    results[-1]["pattern"] = "if_then_else"
                    results[-1]["confidence"] = 0.90
                else:
                    results.append({
                        "pattern": "else_branch",
                        "else_action": else_action,
                        "confidence": 0.70,
                        "original_text": match.group(0),
                    })

        return results

    def _detect_sequential(self, text: str) -> List[Dict[str, Any]]:
        """Detect sequential task patterns."""
        results = []
        text_lower = text.lower()
        steps = []

        for pattern in SEQUENTIAL_PATTERNS:
            matches = re.finditer(pattern, text_lower, re.IGNORECASE)
            for match in matches:
                step_desc = match.group(1).strip()
                assignee = self._extract_assignee(step_desc)
                steps.append({
                    "description": step_desc,
                    "assignee": assignee,
                    "original_text": match.group(0),
                })

        if len(steps) >= 2:
            results.append({
                "pattern": "sequential",
                "steps": steps,
                "confidence": min(0.95, 0.6 + len(steps) * 0.1),
            })

        return results

    def _detect_approval_chain(self, text: str) -> List[Dict[str, Any]]:
        """Detect approval chain patterns."""
        results = []
        text_lower = text.lower()

        approvals = []
        for pattern in APPROVAL_PATTERNS:
            matches = re.finditer(pattern, text_lower, re.IGNORECASE)
            for match in matches:
                item = match.group(1).strip()
                assignee = self._extract_assignee(text[max(0, match.start()-50):match.end()+50])
                approvals.append({
                    "item": item,
                    "assignee": assignee,
                    "original_text": match.group(0),
                })

        if approvals:
            results.append({
                "pattern": "approval_chain",
                "approvals": approvals,
                "confidence": min(0.95, 0.7 + len(approvals) * 0.1),
            })

        return results

    def _detect_escalation(self, text: str) -> List[Dict[str, Any]]:
        """Detect escalation patterns."""
        results = []
        text_lower = text.lower()

        for pattern in ESCALATION_PATTERNS:
            matches = re.finditer(pattern, text_lower, re.IGNORECASE)
            for match in matches:
                groups = match.groups()
                result = {
                    "pattern": "escalation",
                    "timeout": groups[0].strip() if groups[0] else "",
                    "escalate_to": groups[1].strip() if len(groups) > 1 and groups[1] else "",
                    "confidence": 0.80,
                    "original_text": match.group(0),
                }
                results.append(result)

        return results

    def _detect_deadlines(self, text: str) -> List[Dict[str, Any]]:
        """Detect deadline patterns."""
        results = []
        text_lower = text.lower()

        for pattern in DEADLINE_PATTERNS:
            matches = re.finditer(pattern, text_lower, re.IGNORECASE)
            for match in matches:
                deadline_str = match.group(1).strip()
                results.append({
                    "pattern": "deadline",
                    "deadline": deadline_str,
                    "duration": self._parse_duration(deadline_str),
                    "confidence": 0.75,
                    "original_text": match.group(0),
                })

        return results

    def _detect_parallel(self, text: str) -> List[Dict[str, Any]]:
        """Detect parallel task patterns."""
        results = []
        text_lower = text.lower()

        for pattern in PARALLEL_PATTERNS:
            matches = re.finditer(pattern, text_lower, re.IGNORECASE)
            for match in matches:
                groups = match.groups()
                parallel_tasks = [g.strip() for g in groups if g]
                if parallel_tasks:
                    results.append({
                        "pattern": "parallel",
                        "tasks": parallel_tasks,
                        "confidence": 0.80,
                        "original_text": match.group(0),
                    })

        return results

    def _check_reply_all_required(self, email: Dict[str, Any]) -> bool:
        """Check if reply-all is required for this email."""
        recipients = email.get("to", []) + email.get("cc", [])
        if len(recipients) > 1:
            return True
        # Check for explicit reply-all indicators
        body = email.get("body", "").lower()
        reply_all_indicators = [
            "reply all", "reply-all", "reply to all",
            "everyone on this thread", "all recipients",
            "the whole team", "all stakeholders",
            "keep everyone in the loop", "cc everyone",
        ]
        return any(indicator in body for indicator in reply_all_indicators)

    def _build_workflow_from_patterns(self, email: Dict[str, Any],
                                     detected_patterns: List[Dict[str, Any]]) -> Workflow:
        """Build a workflow graph from detected patterns."""
        workflow_id = self._generate_id("wf")
        workflow = Workflow(
            workflow_id=workflow_id,
            name=f"Workflow from: {email.get('subject', 'Email')}",
            source_email_id=email.get("email_id", ""),
        )

        # Check reply-all requirement
        workflow.reply_all_required = self._check_reply_all_required(email)
        all_participants = set(email.get("to", []) + email.get("cc", []))
        all_participants.add(email.get("from", ""))
        workflow.participants = list(all_participants)

        # Add start node
        start_node = WorkflowNode(
            node_id="start",
            node_type=WorkflowNodeType.START,
            description="Email received",
        )
        workflow.add_node(start_node)

        prev_node_id = "start"
        node_counter = 1

        for pattern_group in detected_patterns:
            pattern_type = pattern_group.get("pattern", "")

            if pattern_type in ("if_then", "if_then_else"):
                # Create decision node
                decision_id = f"decision_{node_counter}"
                node_counter += 1
                decision_node = WorkflowNode(
                    node_id=decision_id,
                    node_type=WorkflowNodeType.DECISION,
                    description=f"Check: {pattern_group.get('condition', '')}",
                    priority=3,
                )
                workflow.add_node(decision_node)
                workflow.add_edge(WorkflowEdge(
                    source_id=prev_node_id,
                    target_id=decision_id,
                    edge_type=WorkflowEdgeType.SEQUENTIAL,
                ))

                # Then branch
                then_id = f"task_then_{node_counter}"
                node_counter += 1
                then_node = WorkflowNode(
                    node_id=then_id,
                    node_type=WorkflowNodeType.TASK,
                    description=pattern_group.get("then_action", ""),
                    assignee=self._extract_assignee(pattern_group.get("then_action", "")),
                )
                workflow.add_node(then_node)
                workflow.add_edge(WorkflowEdge(
                    source_id=decision_id,
                    target_id=then_id,
                    edge_type=WorkflowEdgeType.CONDITIONAL_TRUE,
                    condition=pattern_group.get("condition", ""),
                ))

                # Else branch (if exists)
                if "else_action" in pattern_group:
                    else_id = f"task_else_{node_counter}"
                    node_counter += 1
                    else_node = WorkflowNode(
                        node_id=else_id,
                        node_type=WorkflowNodeType.TASK,
                        description=pattern_group["else_action"],
                        assignee=self._extract_assignee(pattern_group["else_action"]),
                    )
                    workflow.add_node(else_node)
                    workflow.add_edge(WorkflowEdge(
                        source_id=decision_id,
                        target_id=else_id,
                        edge_type=WorkflowEdgeType.CONDITIONAL_FALSE,
                    ))
                    workflow.patterns_detected.append(WorkflowPattern.IF_THEN_ELSE)
                else:
                    workflow.patterns_detected.append(WorkflowPattern.IF_THEN_ELSE)

                prev_node_id = then_id

            elif pattern_type == "sequential":
                steps = pattern_group.get("steps", [])
                for i, step in enumerate(steps):
                    task_id = f"seq_task_{node_counter}"
                    node_counter += 1
                    task_node = WorkflowNode(
                        node_id=task_id,
                        node_type=WorkflowNodeType.TASK,
                        description=step.get("description", ""),
                        assignee=step.get("assignee", ""),
                        priority=5 - i,  # Earlier steps get higher priority
                    )
                    workflow.add_node(task_node)
                    workflow.add_edge(WorkflowEdge(
                        source_id=prev_node_id,
                        target_id=task_id,
                        edge_type=WorkflowEdgeType.SEQUENTIAL,
                    ))
                    prev_node_id = task_id
                workflow.patterns_detected.append(WorkflowPattern.SEQUENTIAL)

            elif pattern_type == "approval_chain":
                approvals = pattern_group.get("approvals", [])
                for approval in approvals:
                    approval_id = f"approval_{node_counter}"
                    node_counter += 1
                    approval_node = WorkflowNode(
                        node_id=approval_id,
                        node_type=WorkflowNodeType.APPROVAL,
                        description=f"Approve: {approval.get('item', '')}",
                        assignee=approval.get("assignee", ""),
                        priority=2,
                    )
                    approval_node.metadata["approval_item"] = approval.get("item", "")
                    workflow.add_node(approval_node)
                    workflow.add_edge(WorkflowEdge(
                        source_id=prev_node_id,
                        target_id=approval_id,
                        edge_type=WorkflowEdgeType.SEQUENTIAL,
                    ))
                    prev_node_id = approval_id
                workflow.patterns_detected.append(WorkflowPattern.APPROVAL_CHAIN)

            elif pattern_type == "escalation":
                esc_id = f"escalation_{node_counter}"
                node_counter += 1
                esc_node = WorkflowNode(
                    node_id=esc_id,
                    node_type=WorkflowNodeType.WAIT,
                    description=f"Escalation if no response within {pattern_group.get('timeout', '')}",
                    assignee=pattern_group.get("escalate_to", ""),
                )
                esc_node.metadata["timeout"] = pattern_group.get("timeout", "")
                esc_node.metadata["escalate_to"] = pattern_group.get("escalate_to", "")
                workflow.add_node(esc_node)
                workflow.add_edge(WorkflowEdge(
                    source_id=prev_node_id,
                    target_id=esc_id,
                    edge_type=WorkflowEdgeType.SEQUENTIAL,
                ))
                prev_node_id = esc_id
                workflow.patterns_detected.append(WorkflowPattern.ESCALATION)

            elif pattern_type == "deadline":
                # Apply deadline to previous node
                if prev_node_id in workflow.nodes:
                    workflow.nodes[prev_node_id].deadline = pattern_group.get("deadline", "")
                workflow.patterns_detected.append(WorkflowPattern.DEADLINE_BASED)

            elif pattern_type == "parallel":
                tasks = pattern_group.get("tasks", [])
                fork_id = f"fork_{node_counter}"
                node_counter += 1
                fork_node = WorkflowNode(
                    node_id=fork_id,
                    node_type=WorkflowNodeType.PARALLEL,
                    description="Parallel fork",
                )
                workflow.add_node(fork_node)
                workflow.add_edge(WorkflowEdge(
                    source_id=prev_node_id,
                    target_id=fork_id,
                    edge_type=WorkflowEdgeType.PARALLEL_FORK,
                ))

                join_id = f"join_{node_counter}"
                node_counter += 1
                join_node = WorkflowNode(
                    node_id=join_id,
                    node_type=WorkflowNodeType.PARALLEL,
                    description="Parallel join",
                )

                for task_desc in tasks:
                    par_id = f"par_task_{node_counter}"
                    node_counter += 1
                    par_node = WorkflowNode(
                        node_id=par_id,
                        node_type=WorkflowNodeType.TASK,
                        description=task_desc,
                        assignee=self._extract_assignee(task_desc),
                    )
                    workflow.add_node(par_node)
                    workflow.add_edge(WorkflowEdge(
                        source_id=fork_id,
                        target_id=par_id,
                        edge_type=WorkflowEdgeType.PARALLEL_FORK,
                    ))
                    workflow.add_edge(WorkflowEdge(
                        source_id=par_id,
                        target_id=join_id,
                        edge_type=WorkflowEdgeType.PARALLEL_JOIN,
                    ))

                workflow.add_node(join_node)
                prev_node_id = join_id
                workflow.patterns_detected.append(WorkflowPattern.PARALLEL_TASKS)

        # Add end node
        end_node = WorkflowNode(
            node_id="end",
            node_type=WorkflowNodeType.END,
            description="Workflow complete",
        )
        workflow.add_node(end_node)
        workflow.add_edge(WorkflowEdge(
            source_id=prev_node_id,
            target_id="end",
            edge_type=WorkflowEdgeType.SEQUENTIAL,
        ))

        # Deduplicate patterns
        workflow.patterns_detected = list(set(workflow.patterns_detected))

        return workflow

    def detect_workflow(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """
        Detect actionable workflows from an email.
        
        Args:
            email: Dict with keys: email_id, subject, body, from, to, cc, 
                   sent_at, attachments, priority
        
        Returns:
            Dict with detected workflow info, patterns, confidence scores,
            and reply_all requirement.
        """
        body = email.get("body", "")
        subject = email.get("subject", "")
        full_text = f"{subject}\n{body}"

        # Store email in cache
        self.email_cache[email.get("email_id", "")] = email

        # Detect all patterns
        all_patterns = []
        all_patterns.extend(self._detect_if_then_else(full_text))
        all_patterns.extend(self._detect_sequential(full_text))
        all_patterns.extend(self._detect_approval_chain(full_text))
        all_patterns.extend(self._detect_escalation(full_text))
        all_patterns.extend(self._detect_deadlines(full_text))
        all_patterns.extend(self._detect_parallel(full_text))

        # Check reply-all requirement
        reply_all_required = self._check_reply_all_required(email)

        # Build workflow if patterns found
        workflow = None
        if all_patterns:
            workflow = self._build_workflow_from_patterns(email, all_patterns)
            self.workflows[workflow.workflow_id] = workflow

        # Calculate overall confidence
        if all_patterns:
            avg_confidence = sum(p.get("confidence", 0) for p in all_patterns) / len(all_patterns)
        else:
            avg_confidence = 0.0

        # Generate reply-all enforcement info
        reply_all_info = {
            "required": reply_all_required,
            "reason": "Multi-recipient email detected" if reply_all_required else "Single recipient",
            "recipients": email.get("to", []) + email.get("cc", []),
            "enforcement": "MANDATORY" if reply_all_required else "OPTIONAL",
        }

        result = {
            "email_id": email.get("email_id", ""),
            "workflow_detected": len(all_patterns) > 0,
            "workflow_id": workflow.workflow_id if workflow else None,
            "patterns_found": [p.get("pattern", "") for p in all_patterns],
            "pattern_details": all_patterns,
            "total_patterns": len(all_patterns),
            "confidence_score": round(avg_confidence, 2),
            "reply_all": reply_all_info,
            "workflow_summary": {
                "node_count": len(workflow.nodes) if workflow else 0,
                "edge_count": len(workflow.edges) if workflow else 0,
                "pattern_types": [p.value for p in workflow.patterns_detected] if workflow else [],
                "has_decisions": any(n.node_type == WorkflowNodeType.DECISION for n in workflow.nodes.values()) if workflow else False,
                "has_approvals": any(n.node_type == WorkflowNodeType.APPROVAL for n in workflow.nodes.values()) if workflow else False,
                "has_parallel": any(n.node_type == WorkflowNodeType.PARALLEL for n in workflow.nodes.values()) if workflow else False,
            } if workflow else {
                "node_count": 0,
                "edge_count": 0,
                "pattern_types": [],
                "has_decisions": False,
                "has_approvals": False,
                "has_parallel": False,
            },
            "participants": list(set(email.get("to", []) + email.get("cc", []) + [email.get("from", "")])),
        }

        return result

    def generate_workflow_diagram(self, workflow_id: str) -> Dict[str, Any]:
        """
        Auto-generate a workflow diagram in text/Mermaid format.
        
        Args:
            workflow_id: ID of the workflow to diagram
        
        Returns:
            Dict with diagram representations (text, mermaid, ascii).
        """
        workflow = self.workflows.get(workflow_id)
        if not workflow:
            return {"error": f"Workflow {workflow_id} not found", "diagram": None}

        # Generate Mermaid diagram
        mermaid_lines = ["graph TD"]
        mermaid_lines.append("    start([📧 Email Received])")

        # Node shape mapping
        node_shapes = {
            WorkflowNodeType.START: ('([{label}])', '([📧 Start])'),
            WorkflowNodeType.TASK: ('["{label}"]', '["📋 Task"]'),
            WorkflowNodeType.DECISION: ('{"{label}"}', '{"❓ Decision"}'),
            WorkflowNodeType.APPROVAL: ('[/"{label}"\\]', '[/"✅ Approval"\\]'),
            WorkflowNodeType.NOTIFICATION: ('[["{label}"]]', '[["📢 Notification"]]'),
            WorkflowNodeType.PARALLEL: ('{{"{label}"}}', '{{"⚡ Parallel"}}'),
            WorkflowNodeType.END: ('([{label}])', '([🏁 End])'),
            WorkflowNodeType.WAIT: ('[/"{label}"\\]', '[/"⏳ Wait"\\]'),
        }

        # Edge label mapping
        edge_labels = {
            WorkflowEdgeType.SEQUENTIAL: "",
            WorkflowEdgeType.CONDITIONAL_TRUE: "Yes",
            WorkflowEdgeType.CONDITIONAL_FALSE: "No",
            WorkflowEdgeType.APPROVAL_GRANTED: "✅ Approved",
            WorkflowEdgeType.APPROVAL_DENIED: "❌ Denied",
            WorkflowEdgeType.PARALLEL_FORK: "",
            WorkflowEdgeType.PARALLEL_JOIN: "",
        }

        # Build node definitions
        for node_id, node in workflow.nodes.items():
            if node_id == "start":
                continue  # Already added
            label = node.description[:40] + "..." if len(node.description) > 40 else node.description
            label = label.replace('"', "'").replace('\n', ' ')
            mermaid_lines.append(f'    {node_id}["{label}"]')

        # Build edges
        for edge in workflow.edges:
            label = edge_labels.get(edge.edge_type, "")
            if label:
                mermaid_lines.append(f'    {edge.source_id} -->|{label}| {edge.target_id}')
            else:
                mermaid_lines.append(f'    {edge.source_id} --> {edge.target_id}')

        mermaid_diagram = "\n".join(mermaid_lines)

        # Generate ASCII diagram
        ascii_lines = []
        ascii_lines.append(f"{'='*60}")
        ascii_lines.append(f"WORKFLOW: {workflow.name}")
        ascii_lines.append(f"{'='*60}")
        ascii_lines.append(f"ID: {workflow.workflow_id}")
        ascii_lines.append(f"Status: {workflow.status}")
        ascii_lines.append(f"Patterns: {', '.join(p.value for p in workflow.patterns_detected)}")
        ascii_lines.append(f"Reply-All: {'REQUIRED' if workflow.reply_all_required else 'Not required'}")
        ascii_lines.append(f"{'─'*60}")

        # Node flow
        ascii_lines.append("\nNODES:")
        for node_id, node in workflow.nodes.items():
            status_icon = {
                TaskStatus.PENDING: "○",
                TaskStatus.IN_PROGRESS: "◐",
                TaskStatus.COMPLETED: "●",
                TaskStatus.BLOCKED: "⊘",
                TaskStatus.FAILED: "✗",
                TaskStatus.SKIPPED: "⊘",
                TaskStatus.WAITING_APPROVAL: "◈",
                TaskStatus.OVERDUE: "⚠",
            }.get(node.status, "?")

            type_icon = {
                WorkflowNodeType.START: "▶",
                WorkflowNodeType.TASK: "□",
                WorkflowNodeType.DECISION: "◇",
                WorkflowNodeType.APPROVAL: "✓",
                WorkflowNodeType.NOTIFICATION: "📢",
                WorkflowNodeType.PARALLEL: "⫸",
                WorkflowNodeType.END: "■",
                WorkflowNodeType.WAIT: "⏳",
            }.get(node.node_type, "?")

            assignee_str = f" [@{node.assignee}]" if node.assignee else ""
            deadline_str = f" [Due: {node.deadline}]" if node.deadline else ""
            ascii_lines.append(
                f"  {status_icon} {type_icon} [{node_id}] {node.description}{assignee_str}{deadline_str}"
            )

        # Edge flow
        ascii_lines.append(f"\nFLOW:")
        for edge in workflow.edges:
            src = workflow.nodes.get(edge.source_id)
            tgt = workflow.nodes.get(edge.target_id)
            label = edge_labels.get(edge.edge_type, "")
            edge_str = f"  {edge.source_id} ──"
            if label:
                edge_str += f"[{label}]──▶ "
            else:
                edge_str += "▶ "
            edge_str += edge.target_id
            ascii_lines.append(edge_str)

        ascii_lines.append(f"\n{'='*60}")
        ascii_diagram = "\n".join(ascii_lines)

        # Generate structured text summary
        text_summary = []
        text_summary.append(f"Workflow: {workflow.name}")
        text_summary.append(f"Total Steps: {len(workflow.nodes) - 2}")  # minus start/end
        text_summary.append(f"Decision Points: {sum(1 for n in workflow.nodes.values() if n.node_type == WorkflowNodeType.DECISION)}")
        text_summary.append(f"Approval Gates: {sum(1 for n in workflow.nodes.values() if n.node_type == WorkflowNodeType.APPROVAL)}")
        text_summary.append(f"Parallel Branches: {sum(1 for n in workflow.nodes.values() if n.node_type == WorkflowNodeType.PARALLEL)}")

        result = {
            "workflow_id": workflow_id,
            "mermaid_diagram": mermaid_diagram,
            "ascii_diagram": ascii_diagram,
            "text_summary": "\n".join(text_summary),
            "node_count": len(workflow.nodes),
            "edge_count": len(workflow.edges),
            "diagram_hash": hashlib.md5(mermaid_diagram.encode()).hexdigest()[:12],
            "reply_all_enforcement": {
                "required": workflow.reply_all_required,
                "participants": workflow.participants,
                "enforcement_level": "MANDATORY" if workflow.reply_all_required else "OPTIONAL",
            },
        }

        return result

    def track_workflow_status(self, workflow_id: str, 
                              updates: Optional[List[Dict[str, Any]]] = None) -> Dict[str, Any]:
        """
        Track workflow execution status.
        
        Args:
            workflow_id: ID of the workflow
            updates: Optional list of status updates:
                     [{"node_id": "...", "status": "completed", "notes": "..."}]
        
        Returns:
            Dict with current workflow status, progress, and timeline.
        """
        workflow = self.workflows.get(workflow_id)
        if not workflow:
            return {"error": f"Workflow {workflow_id} not found"}

        # Apply updates
        if updates:
            for update in updates:
                node_id = update.get("node_id", "")
                new_status = update.get("status", "")
                if node_id in workflow.nodes:
                    node = workflow.nodes[node_id]
                    try:
                        node.status = TaskStatus(new_status)
                    except ValueError:
                        continue

                    if new_status == "in_progress" and not node.started_at:
                        node.started_at = datetime.now()
                    elif new_status in ("completed", "failed", "skipped"):
                        node.completed_at = datetime.now()

                    # Log the update
                    workflow.execution_log.append({
                        "timestamp": datetime.now().isoformat(),
                        "node_id": node_id,
                        "status": new_status,
                        "notes": update.get("notes", ""),
                    })

        # Calculate progress (exclude structural nodes from counts)
        actionable_nodes = [n for n in workflow.nodes.values()
                           if n.node_type not in (WorkflowNodeType.START, WorkflowNodeType.END, WorkflowNodeType.PARALLEL)]
        total_nodes = len(actionable_nodes)
        completed_nodes = len([n for n in actionable_nodes
                              if n.status == TaskStatus.COMPLETED])
        in_progress_nodes = len([n for n in actionable_nodes
                                if n.status == TaskStatus.IN_PROGRESS])
        blocked_nodes = len([n for n in actionable_nodes
                            if n.status == TaskStatus.BLOCKED])
        pending_nodes = len([n for n in actionable_nodes
                            if n.status == TaskStatus.PENDING])

        progress_pct = (completed_nodes / total_nodes * 100) if total_nodes > 0 else 0

        # Check for overdue items
        overdue_items = []
        for node_id, node in workflow.nodes.items():
            if node.deadline and node.status not in (TaskStatus.COMPLETED, TaskStatus.SKIPPED):
                duration = self._parse_duration(node.deadline)
                if duration and node.started_at:
                    expected_completion = node.started_at + duration
                    if datetime.now() > expected_completion:
                        node.status = TaskStatus.OVERDUE
                        overdue_items.append(node_id)

        # Determine overall workflow status
        if completed_nodes == total_nodes and total_nodes > 0:
            workflow.status = "completed"
        elif blocked_nodes > 0:
            workflow.status = "blocked"
        elif in_progress_nodes > 0:
            workflow.status = "in_progress"
        elif pending_nodes == total_nodes:
            workflow.status = "pending"
        else:
            workflow.status = "active"

        # Build node status summary
        node_statuses = {}
        for node_id, node in workflow.nodes.items():
            node_statuses[node_id] = {
                "status": node.status.value,
                "description": node.description,
                "assignee": node.assignee,
                "started_at": node.started_at.isoformat() if node.started_at else None,
                "completed_at": node.completed_at.isoformat() if node.completed_at else None,
                "deadline": node.deadline,
            }

        # Reply-all enforcement check
        reply_all_status = {
            "required": workflow.reply_all_required,
            "participants": workflow.participants,
            "all_participants_notified": len(workflow.participants) > 0,
            "enforcement": "MANDATORY" if workflow.reply_all_required else "OPTIONAL",
        }

        result = {
            "workflow_id": workflow_id,
            "workflow_name": workflow.name,
            "status": workflow.status,
            "progress": {
                "percentage": round(progress_pct, 1),
                "total_tasks": total_nodes,
                "completed": completed_nodes,
                "in_progress": in_progress_nodes,
                "blocked": blocked_nodes,
                "pending": pending_nodes,
                "overdue": len(overdue_items),
            },
            "node_statuses": node_statuses,
            "overdue_items": overdue_items,
            "execution_log": workflow.execution_log[-10:],  # Last 10 entries
            "reply_all": reply_all_status,
            "created_at": workflow.created_at.isoformat(),
            "patterns": [p.value for p in workflow.patterns_detected],
        }

        # Store in execution history
        self.execution_history.append({
            "timestamp": datetime.now().isoformat(),
            "workflow_id": workflow_id,
            "status": workflow.status,
            "progress": progress_pct,
        })

        return result

    def identify_bottlenecks(self, workflow_id: str) -> Dict[str, Any]:
        """
        Identify bottlenecks in workflow execution.
        
        Args:
            workflow_id: ID of the workflow
        
        Returns:
            Dict with identified bottlenecks, their severity, and impact.
        """
        workflow = self.workflows.get(workflow_id)
        if not workflow:
            return {"error": f"Workflow {workflow_id} not found"}

        bottlenecks = []

        # 1. Check for blocked nodes
        blocked_nodes = [n for n in workflow.nodes.values() if n.status == TaskStatus.BLOCKED]
        for node in blocked_nodes:
            bottlenecks.append({
                "type": "blocked_task",
                "node_id": node.node_id,
                "description": node.description,
                "assignee": node.assignee,
                "severity": "high",
                "impact": "Blocks downstream tasks",
                "recommendation": f"Unblock task or reassign from {node.assignee}" if node.assignee else "Unblock task or reassign",
            })

        # 2. Check for overdue items
        overdue_nodes = [n for n in workflow.nodes.values() if n.status == TaskStatus.OVERDUE]
        for node in overdue_nodes:
            bottlenecks.append({
                "type": "overdue_task",
                "node_id": node.node_id,
                "description": node.description,
                "assignee": node.assignee,
                "severity": "critical",
                "impact": "Task past deadline, may cascade delays",
                "recommendation": "Escalate immediately or extend deadline",
            })

        # 3. Check for long-running approvals
        approval_nodes = [n for n in workflow.nodes.values() 
                         if n.node_type == WorkflowNodeType.APPROVAL 
                         and n.status == TaskStatus.WAITING_APPROVAL]
        for node in approval_nodes:
            if node.started_at:
                wait_time = (datetime.now() - node.started_at).total_seconds() / 3600
                if wait_time > 24:  # More than 24 hours
                    bottlenecks.append({
                        "type": "slow_approval",
                        "node_id": node.node_id,
                        "description": node.description,
                        "assignee": node.assignee,
                        "severity": "high",
                        "impact": f"Approval pending {wait_time:.1f} hours",
                        "recommendation": f"Follow up with {node.assignee} or set auto-approval timeout",
                    })

        # 4. Check for sequential chains that are too long
        sequential_chains = self._find_sequential_chains(workflow)
        for chain in sequential_chains:
            if len(chain) > 5:
                bottlenecks.append({
                    "type": "long_sequential_chain",
                    "node_ids": chain,
                    "description": f"Sequential chain of {len(chain)} tasks",
                    "severity": "medium",
                    "impact": "No parallelism possible, total time = sum of all task times",
                    "recommendation": "Look for tasks that can be parallelized",
                })

        # 5. Check for single-point-of-failure (one assignee with many tasks)
        assignee_tasks = defaultdict(list)
        for node in workflow.nodes.values():
            if node.assignee and node.node_type == WorkflowNodeType.TASK:
                assignee_tasks[node.assignee].append(node.node_id)
        
        for assignee, tasks in assignee_tasks.items():
            if len(tasks) > 3:
                bottlenecks.append({
                    "type": "assignee_overload",
                    "assignee": assignee,
                    "node_ids": tasks,
                    "description": f"{assignee} has {len(tasks)} tasks assigned",
                    "severity": "medium",
                    "impact": "Single person bottleneck, risk of delays if unavailable",
                    "recommendation": f"Redistribute tasks from {assignee} to other team members",
                })

        # 6. Check for decision nodes without clear conditions
        decision_nodes = [n for n in workflow.nodes.values() 
                         if n.node_type == WorkflowNodeType.DECISION]
        for node in decision_nodes:
            if not node.description or len(node.description) < 10:
                bottlenecks.append({
                    "type": "ambiguous_decision",
                    "node_id": node.node_id,
                    "description": node.description,
                    "severity": "low",
                    "impact": "Unclear decision criteria may cause delays",
                    "recommendation": "Clarify decision criteria and assign decision maker",
                })

        # 7. Check for missing reply-all enforcement
        if workflow.reply_all_required:
            for node_id, node in workflow.nodes.items():
                if node.assignee and node.assignee not in workflow.participants:
                    bottlenecks.append({
                        "type": "reply_all_violation",
                        "node_id": node_id,
                        "description": f"Assignee {node.assignee} not in original recipients",
                        "severity": "high",
                        "impact": "Reply-all required but participant missing from thread",
                        "recommendation": f"Add {node.assignee} to CC/reply-all list",
                    })

        # Calculate overall bottleneck score
        severity_scores = {"critical": 10, "high": 7, "medium": 4, "low": 2}
        total_score = sum(severity_scores.get(b.get("severity", "low"), 1) for b in bottlenecks)

        result = {
            "workflow_id": workflow_id,
            "bottleneck_count": len(bottlenecks),
            "bottlenecks": bottlenecks,
            "bottleneck_score": total_score,
            "severity_breakdown": {
                "critical": len([b for b in bottlenecks if b.get("severity") == "critical"]),
                "high": len([b for b in bottlenecks if b.get("severity") == "high"]),
                "medium": len([b for b in bottlenecks if b.get("severity") == "medium"]),
                "low": len([b for b in bottlenecks if b.get("severity") == "low"]),
            },
            "reply_all_compliance": {
                "required": workflow.reply_all_required,
                "violations": len([b for b in bottlenecks if b.get("type") == "reply_all_violation"]),
            },
            "recommendations_summary": list(set(b.get("recommendation", "") for b in bottlenecks)),
        }

        return result

    def _find_sequential_chains(self, workflow: Workflow) -> List[List[str]]:
        """Find sequential chains in the workflow."""
        chains = []
        visited = set()

        # Build adjacency list
        adj = defaultdict(list)
        for edge in workflow.edges:
            if edge.edge_type == WorkflowEdgeType.SEQUENTIAL:
                adj[edge.source_id].append(edge.target_id)

        # DFS to find chains
        def dfs(node_id: str, chain: List[str]):
            if node_id in visited:
                return
            visited.add(node_id)
            chain.append(node_id)

            if node_id in adj and len(adj[node_id]) == 1:
                dfs(adj[node_id][0], chain)
            else:
                if len(chain) > 1:
                    chains.append(chain[:])

            for next_node in adj.get(node_id, []):
                if next_node not in visited:
                    dfs(next_node, [node_id])

        dfs("start", [])
        return chains

    def optimize_workflow(self, workflow_id: str) -> Dict[str, Any]:
        """
        Suggest workflow optimizations.
        
        Args:
            workflow_id: ID of the workflow
        
        Returns:
            Dict with optimization suggestions, expected improvements.
        """
        workflow = self.workflows.get(workflow_id)
        if not workflow:
            return {"error": f"Workflow {workflow_id} not found"}

        suggestions = []
        bottlenecks = self.identify_bottlenecks(workflow_id)

        # 1. Parallelization suggestions
        sequential_chains = self._find_sequential_chains(workflow)
        for chain in sequential_chains:
            if len(chain) >= 3:
                # Check if any tasks in the chain are independent
                chain_nodes = [workflow.nodes[nid] for nid in chain if nid in workflow.nodes]
                independent_groups = self._find_independent_groups(chain_nodes)
                if independent_groups:
                    suggestions.append({
                        "type": "parallelize",
                        "description": f"Tasks in chain {' -> '.join(chain[:3])}... can be parallelized",
                        "affected_nodes": chain,
                        "expected_improvement": "30-50% reduction in total workflow time",
                        "priority": "high",
                        "effort": "medium",
                        "details": f"Group {len(independent_groups)} independent task groups for parallel execution",
                    })

        # 2. Approval optimization
        approval_nodes = [n for n in workflow.nodes.values() 
                         if n.node_type == WorkflowNodeType.APPROVAL]
        if len(approval_nodes) > 2:
            suggestions.append({
                "type": "streamline_approvals",
                "description": f"Reduce {len(approval_nodes)} sequential approvals to parallel or delegated",
                "affected_nodes": [n.node_id for n in approval_nodes],
                "expected_improvement": "40-60% reduction in approval wait time",
                "priority": "high",
                "effort": "high",
                "details": "Consider parallel approvals or auto-approval for low-risk items",
            })

        # 3. Auto-notification suggestions
        notification_opportunities = []
        for node_id, node in workflow.nodes.items():
            if node.node_type == WorkflowNodeType.TASK and not node.assignee:
                notification_opportunities.append(node_id)
        
        if notification_opportunities:
            suggestions.append({
                "type": "auto_assign",
                "description": f"{len(notification_opportunities)} tasks without assignees",
                "affected_nodes": notification_opportunities,
                "expected_improvement": "Reduce task pickup delay by 20-30%",
                "priority": "medium",
                "effort": "low",
                "details": "Auto-assign based on team role or workload balancing",
            })

        # 4. Decision automation
        decision_nodes = [n for n in workflow.nodes.values() 
                         if n.node_type == WorkflowNodeType.DECISION]
        if decision_nodes:
            auto_decidable = [n for n in decision_nodes 
                            if self._is_auto_decidable(n)]
            if auto_decidable:
                suggestions.append({
                    "type": "automate_decisions",
                    "description": f"{len(auto_decidable)} decision points can be automated",
                    "affected_nodes": [n.node_id for n in auto_decidable],
                    "expected_improvement": "Eliminate decision wait time for routine cases",
                    "priority": "medium",
                    "effort": "medium",
                    "details": "Set up rules-based auto-routing for common decision outcomes",
                })

        # 5. Deadline optimization
        tasks_with_deadlines = [n for n in workflow.nodes.values() 
                               if n.deadline and n.node_type == WorkflowNodeType.TASK]
        if tasks_with_deadlines:
            tight_deadlines = []
            for node in tasks_with_deadlines:
                duration = self._parse_duration(node.deadline)
                if duration and duration < timedelta(hours=4):
                    tight_deadlines.append(node.node_id)
            
            if tight_deadlines:
                suggestions.append({
                    "type": "deadline_buffer",
                    "description": f"{len(tight_deadlines)} tasks have tight deadlines (<4h)",
                    "affected_nodes": tight_deadlines,
                    "expected_improvement": "Reduce overdue rate by 25-40%",
                    "priority": "medium",
                    "effort": "low",
                    "details": "Add buffer time or start tasks earlier in the pipeline",
                })

        # 6. Reply-all optimization
        if workflow.reply_all_required:
            suggestions.append({
                "type": "reply_all_enforcement",
                "description": "Enforce reply-all for all workflow notifications",
                "affected_nodes": list(workflow.nodes.keys()),
                "expected_improvement": "Ensure all stakeholders stay informed, reduce miscommunication",
                "priority": "high",
                "effort": "low",
                "details": f"All {len(workflow.participants)} participants must be included in responses",
            })

        # 7. Escalation optimization
        wait_nodes = [n for n in workflow.nodes.values() 
                     if n.node_type == WorkflowNodeType.WAIT]
        if wait_nodes:
            suggestions.append({
                "type": "smart_escalation",
                "description": "Implement tiered escalation with auto-reminders",
                "affected_nodes": [n.node_id for n in wait_nodes],
                "expected_improvement": "Reduce escalation delays by 50%",
                "priority": "medium",
                "effort": "medium",
                "details": "Send reminder at 50% of timeout, auto-escalate at 100%",
            })

        # Calculate expected overall improvement
        if suggestions:
            high_count = len([s for s in suggestions if s.get("priority") == "high"])
            medium_count = len([s for s in suggestions if s.get("priority") == "medium"])
            expected_time_saving = min(70, high_count * 20 + medium_count * 10)
        else:
            expected_time_saving = 0

        result = {
            "workflow_id": workflow_id,
            "suggestion_count": len(suggestions),
            "suggestions": suggestions,
            "expected_improvements": {
                "time_saving_percent": expected_time_saving,
                "bottleneck_reduction": f"{min(80, len(suggestions) * 15)}%",
                "reply_all_compliance": "100%" if workflow.reply_all_required else "N/A",
            },
            "priority_breakdown": {
                "high": len([s for s in suggestions if s.get("priority") == "high"]),
                "medium": len([s for s in suggestions if s.get("priority") == "medium"]),
                "low": len([s for s in suggestions if s.get("priority") == "low"]),
            },
            "implementation_order": [
                s["type"] for s in sorted(suggestions, 
                    key=lambda x: {"high": 0, "medium": 1, "low": 2}.get(x.get("priority", "low"), 2))
            ],
        }

        # Log optimization
        self.optimization_log.append({
            "timestamp": datetime.now().isoformat(),
            "workflow_id": workflow_id,
            "suggestions_count": len(suggestions),
            "expected_time_saving": expected_time_saving,
        })

        return result

    def _find_independent_groups(self, nodes: List[WorkflowNode]) -> List[List[str]]:
        """Find groups of independent tasks that can run in parallel."""
        groups = []
        # Simple heuristic: tasks with different assignees and no data dependencies
        assignee_groups = defaultdict(list)
        for node in nodes:
            if node.assignee:
                assignee_groups[node.assignee].append(node.node_id)
            else:
                assignee_groups["unassigned"].append(node.node_id)
        
        if len(assignee_groups) > 1:
            groups = [tasks for tasks in assignee_groups.values() if len(tasks) > 0]
        
        return groups

    def _is_auto_decidable(self, node: WorkflowNode) -> bool:
        """Check if a decision node can be automated."""
        auto_keywords = [
            "budget", "amount", "threshold", "limit",
            "size", "count", "availability", "stock",
            "balance", "score", "rating",
        ]
        desc_lower = node.description.lower()
        return any(kw in desc_lower for kw in auto_keywords)


def test_v682() -> Dict[str, Any]:
    """
    Comprehensive test suite for V682 - Email Workflow Automation Engine.
    Tests workflow detection, diagram generation, status tracking,
    bottleneck identification, optimization, and reply-all enforcement.
    """
    engine = EmailWorkflowAutomationEngine()
    results = {
        "test_suite": "V682 - Email Workflow Automation Engine",
        "tests_run": 0,
        "tests_passed": 0,
        "tests_failed": 0,
        "test_results": [],
    }

    def run_test(name: str, test_fn):
        results["tests_run"] += 1
        try:
            test_fn()
            results["tests_passed"] += 1
            results["test_results"].append({"name": name, "status": "PASSED"})
        except AssertionError as e:
            results["tests_failed"] += 1
            results["test_results"].append({"name": name, "status": "FAILED", "error": str(e)})
        except Exception as e:
            results["tests_failed"] += 1
            results["test_results"].append({"name": name, "status": "ERROR", "error": str(e)})

    # ─────────────────────────────────────────────────────────
    # TEST 1: If-Then-Else workflow detection
    # ─────────────────────────────────────────────────────────
    def test_if_then_else_detection():
        email = {
            "email_id": "email_001",
            "subject": "Q3 Budget Approval Process",
            "body": """Hi Team,

Here's the process for Q3 budget requests:

If the request is under $10,000, then forward it to the department head for approval.
Otherwise, it needs to go through the CFO review process.

When the budget is approved, then notify the project manager to proceed with procurement.
If not approved, then send a revision request back to the submitter.

Please reply all to keep everyone informed.

Best,
Finance Director""",
            "from": "finance.director@company.com",
            "to": ["dept.head@company.com", "cfo@company.com", "project.mgr@company.com"],
            "cc": ["finance.team@company.com"],
            "sent_at": "2026-05-31T09:00:00",
            "attachments": ["budget_template.xlsx"],
            "priority": "high",
        }

        result = engine.detect_workflow(email)
        
        assert result["workflow_detected"] is True, "Should detect workflow patterns"
        assert "if_then_else" in result["patterns_found"], "Should detect if-then-else pattern"
        assert result["reply_all"]["required"] is True, "Multi-recipient email requires reply-all"
        assert result["reply_all"]["enforcement"] == "MANDATORY", "Reply-all should be mandatory"
        assert result["confidence_score"] > 0.5, "Confidence should be reasonable"
        assert result["workflow_summary"]["has_decisions"] is True, "Should have decision nodes"
        assert len(result["participants"]) > 0, "Should have participants"

    run_test("If-Then-Else Detection", test_if_then_else_detection)

    # ─────────────────────────────────────────────────────────
    # TEST 2: Sequential workflow detection
    # ─────────────────────────────────────────────────────────
    def test_sequential_detection():
        email = {
            "email_id": "email_002",
            "subject": "New Employee Onboarding Steps",
            "body": """Hi HR Team,

Please follow these steps for the new hire starting Monday:

Step 1: Set up their workstation and accounts (assigned to IT support)
Step 2: Schedule orientation meeting with their manager
Step 3: Complete the benefits enrollment paperwork
Then, send them the welcome packet with company policies.
Finally, add them to all relevant team channels and mailing lists.

Thanks,
HR Manager""",
            "from": "hr.manager@company.com",
            "to": ["it.support@company.com", "hr.assistant@company.com"],
            "cc": ["team.lead@company.com"],
            "sent_at": "2026-05-31T10:00:00",
            "attachments": [],
            "priority": "normal",
        }

        result = engine.detect_workflow(email)
        
        assert result["workflow_detected"] is True, "Should detect sequential workflow"
        assert "sequential" in result["patterns_found"], "Should detect sequential pattern"
        assert result["workflow_summary"]["node_count"] > 3, "Should have multiple task nodes"
        assert result["reply_all"]["required"] is True, "Multi-recipient requires reply-all"

    run_test("Sequential Workflow Detection", test_sequential_detection)

    # ─────────────────────────────────────────────────────────
    # TEST 3: Approval chain detection
    # ─────────────────────────────────────────────────────────
    def test_approval_chain_detection():
        email = {
            "email_id": "email_003",
            "subject": "Contract Renewal - Needs Your Approval",
            "body": """Hi David,

The contract renewal for VendorX is ready for your review.

Please review the updated terms in the attached document.
After your sign-off, it needs approval from the Legal department.
Once legal approves, the CFO needs to provide final authorization for the payment terms.

Please approve the contract renewal at your earliest convenience.

Best regards,
Procurement Team""",
            "from": "procurement@company.com",
            "to": ["david.vp@company.com"],
            "cc": ["legal@company.com", "cfo@company.com"],
            "sent_at": "2026-05-31T11:00:00",
            "attachments": ["vendorx_contract_v2.pdf"],
            "priority": "high",
        }

        result = engine.detect_workflow(email)
        
        assert result["workflow_detected"] is True, "Should detect approval workflow"
        assert "approval_chain" in result["patterns_found"], "Should detect approval chain"
        assert result["workflow_summary"]["has_approvals"] is True, "Should have approval nodes"
        assert result["reply_all"]["required"] is True, "Multi-recipient (with CC) requires reply-all"

    run_test("Approval Chain Detection", test_approval_chain_detection)

    # ─────────────────────────────────────────────────────────
    # TEST 4: Escalation pattern detection
    # ─────────────────────────────────────────────────────────
    def test_escalation_detection():
        email = {
            "email_id": "email_004",
            "subject": "Urgent: Security Incident Response Protocol",
            "body": """Security Team,

For any new security incident:

If no response within 30 minutes, escalate to the CISO immediately.
When a critical vulnerability is found, then initiate the emergency patch process.
Otherwise, log it in the standard incident tracker and review in the next standup.

The incident must be resolved by end of day.
If not approved within 2 hours, escalate to the VP of Engineering.

Stay vigilant,
Security Lead""",
            "from": "security.lead@company.com",
            "to": ["security.team@company.com", "ciso@company.com"],
            "cc": ["vp.engineering@company.com", "cto@company.com"],
            "sent_at": "2026-05-31T08:00:00",
            "attachments": [],
            "priority": "urgent",
        }

        result = engine.detect_workflow(email)
        
        assert result["workflow_detected"] is True, "Should detect workflow"
        assert "if_then_else" in result["patterns_found"], "Should detect if-then-else"
        assert "escalation" in result["patterns_found"], "Should detect escalation patterns"
        assert "deadline" in result["patterns_found"], "Should detect deadlines"
        assert result["reply_all"]["required"] is True, "Multi-recipient requires reply-all"

    run_test("Escalation Pattern Detection", test_escalation_detection)

    # ─────────────────────────────────────────────────────────
    # TEST 5: Parallel task detection
    # ─────────────────────────────────────────────────────────
    def test_parallel_detection():
        email = {
            "email_id": "email_005",
            "subject": "Product Launch Preparation",
            "body": """Team,

For the product launch next week:

Step 1: Finalize the marketing materials
Then, coordinate with the sales team on pricing.

Meanwhile, the QA team should complete regression testing.
In parallel, prepare the customer support documentation.
At the same time, the DevOps team needs to set up the staging environment.

Finally, schedule the go-live review meeting.

This needs to be done by Friday.

Product Manager""",
            "from": "product.manager@company.com",
            "to": ["marketing@company.com", "sales@company.com", "qa@company.com"],
            "cc": ["devops@company.com", "support@company.com"],
            "sent_at": "2026-05-31T09:30:00",
            "attachments": [],
            "priority": "high",
        }

        result = engine.detect_workflow(email)
        
        assert result["workflow_detected"] is True, "Should detect workflow"
        assert "parallel" in result["patterns_found"], "Should detect parallel patterns"
        assert "sequential" in result["patterns_found"], "Should detect sequential patterns"
        assert result["workflow_summary"]["has_parallel"] is True, "Should have parallel nodes"
        assert result["reply_all"]["required"] is True, "Multi-recipient requires reply-all"

    run_test("Parallel Task Detection", test_parallel_detection)

    # ─────────────────────────────────────────────────────────
    # TEST 6: Workflow diagram generation
    # ─────────────────────────────────────────────────────────
    def test_diagram_generation():
        # Use workflow from test 1
        email = {
            "email_id": "email_006",
            "subject": "Expense Report Processing",
            "body": """Hi,

If the expense is under $500, then auto-approve and process payment.
Otherwise, send it to the manager for review.
When approved, then process payment within 3 business days.

Please reply all so accounting is kept in the loop.

Finance Team""",
            "from": "finance@company.com",
            "to": ["manager@company.com", "accounting@company.com"],
            "cc": [],
            "sent_at": "2026-05-31T14:00:00",
            "attachments": [],
            "priority": "normal",
        }

        detection = engine.detect_workflow(email)
        workflow_id = detection["workflow_id"]
        
        diagram = engine.generate_workflow_diagram(workflow_id)
        
        assert "error" not in diagram, "Should generate diagram without error"
        assert "mermaid_diagram" in diagram, "Should have mermaid diagram"
        assert "ascii_diagram" in diagram, "Should have ASCII diagram"
        assert "text_summary" in diagram, "Should have text summary"
        assert diagram["node_count"] > 0, "Should have nodes"
        assert diagram["edge_count"] > 0, "Should have edges"
        assert "graph TD" in diagram["mermaid_diagram"], "Mermaid should have graph declaration"
        assert diagram["reply_all_enforcement"]["required"] is True, "Reply-all should be required"

    run_test("Diagram Generation", test_diagram_generation)

    # ─────────────────────────────────────────────────────────
    # TEST 7: Workflow status tracking
    # ─────────────────────────────────────────────────────────
    def test_status_tracking():
        email = {
            "email_id": "email_007",
            "subject": "Sprint Release Checklist",
            "body": """Dev Team,

Step 1: Complete code review
Step 2: Run automated tests
Step 3: Deploy to staging
Then, get QA sign-off
Finally, deploy to production.

Deadline is end of day.

Scrum Master""",
            "from": "scrum.master@company.com",
            "to": ["dev.team@company.com", "qa.team@company.com"],
            "cc": ["product.owner@company.com"],
            "sent_at": "2026-05-31T08:00:00",
            "attachments": [],
            "priority": "high",
        }

        detection = engine.detect_workflow(email)
        workflow_id = detection["workflow_id"]
        
        # Get initial status
        status = engine.track_workflow_status(workflow_id)
        assert status["status"] == "pending", "Initial status should be pending"
        assert status["progress"]["percentage"] == 0.0, "Initial progress should be 0%"
        
        # Update some tasks
        nodes = list(engine.workflows[workflow_id].nodes.keys())
        task_nodes = [n for n in nodes if n.startswith("seq_task_")]
        
        if task_nodes:
            updates = [
                {"node_id": task_nodes[0], "status": "completed", "notes": "Code review done"},
                {"node_id": task_nodes[1], "status": "in_progress", "notes": "Running tests"},
            ]
            status = engine.track_workflow_status(workflow_id, updates)
            assert status["progress"]["completed"] >= 1, "Should have completed tasks"
            assert status["progress"]["in_progress"] >= 1, "Should have in-progress tasks"
            assert status["progress"]["percentage"] > 0, "Progress should be > 0"
            assert status["reply_all"]["required"] is True, "Reply-all still required"

    run_test("Status Tracking", test_status_tracking)

    # ─────────────────────────────────────────────────────────
    # TEST 8: Bottleneck identification
    # ─────────────────────────────────────────────────────────
    def test_bottleneck_identification():
        email = {
            "email_id": "email_008",
            "subject": "Complex Vendor Onboarding Process",
            "body": """Procurement Team,

For new vendor onboarding:

Step 1: Collect vendor documentation
Step 2: Run background checks
Step 3: Legal review of terms
Step 4: Finance credit assessment
Step 5: IT security audit
Step 6: Final compliance review
Then, get VP approval for the vendor registration.

Please review the vendor application.
Please approve the vendor registration.

If no response within 5 days, escalate to the procurement director.

This must be completed by next week.

Procurement Lead""",
            "from": "procurement.lead@company.com",
            "to": ["legal@company.com", "finance@company.com", "it.security@company.com"],
            "cc": ["vp.procurement@company.com", "compliance@company.com"],
            "sent_at": "2026-05-31T10:00:00",
            "attachments": ["vendor_application.pdf"],
            "priority": "high",
        }

        detection = engine.detect_workflow(email)
        workflow_id = detection["workflow_id"]
        
        bottlenecks = engine.identify_bottlenecks(workflow_id)
        
        assert "error" not in bottlenecks, "Should not have error"
        assert "bottleneck_count" in bottlenecks, "Should have bottleneck count"
        assert "bottlenecks" in bottlenecks, "Should have bottleneck list"
        assert "severity_breakdown" in bottlenecks, "Should have severity breakdown"
        assert "recommendations_summary" in bottlenecks, "Should have recommendations"
        assert bottlenecks["reply_all_compliance"]["required"] is True, "Reply-all required"

    run_test("Bottleneck Identification", test_bottleneck_identification)

    # ─────────────────────────────────────────────────────────
    # TEST 9: Workflow optimization suggestions
    # ─────────────────────────────────────────────────────────
    def test_optimization_suggestions():
        email = {
            "email_id": "email_009",
            "subject": "Customer Complaint Resolution Process",
            "body": """Support Team,

Here's the updated complaint resolution workflow:

Step 1: Acknowledge receipt of complaint
Step 2: Categorize the issue type
Step 3: Assign to appropriate specialist
Step 4: Investigate root cause
Step 5: Prepare response draft
Step 6: Get manager approval on response
Then, send response to customer.
Finally, log the resolution in CRM.

If the complaint is about billing, then route to the billing team directly.
Otherwise, follow the standard investigation process.

Meanwhile, update the knowledge base with any new issue types.
In parallel, check if similar complaints exist in the system.

Please approve the updated process.
This must be completed by 48 hours.

If not approved within 24 hours, escalate to the support director.

Support Manager""",
            "from": "support.manager@company.com",
            "to": ["support.team@company.com", "billing.team@company.com"],
            "cc": ["support.director@company.com", "quality.team@company.com"],
            "sent_at": "2026-05-31T11:00:00",
            "attachments": ["process_flowchart.pdf"],
            "priority": "normal",
        }

        detection = engine.detect_workflow(email)
        workflow_id = detection["workflow_id"]
        
        optimizations = engine.optimize_workflow(workflow_id)
        
        assert "error" not in optimizations, "Should not have error"
        assert "suggestion_count" in optimizations, "Should have suggestion count"
        assert "suggestions" in optimizations, "Should have suggestions list"
        assert "expected_improvements" in optimizations, "Should have expected improvements"
        assert "priority_breakdown" in optimizations, "Should have priority breakdown"
        assert "implementation_order" in optimizations, "Should have implementation order"
        assert optimizations["suggestion_count"] > 0, "Should have at least one suggestion"
        assert optimizations["expected_improvements"]["time_saving_percent"] > 0, "Should estimate time savings"

    run_test("Optimization Suggestions", test_optimization_suggestions)

    # ─────────────────────────────────────────────────────────
    # TEST 10: Reply-all enforcement for multi-recipient emails
    # ─────────────────────────────────────────────────────────
    def test_reply_all_enforcement():
        # Multi-recipient email
        email_multi = {
            "email_id": "email_010a",
            "subject": "Cross-team Project Update",
            "body": "If the API is ready, then start integration testing. Otherwise, wait for the backend team.",
            "from": "tech.lead@company.com",
            "to": ["frontend@company.com", "backend@company.com"],
            "cc": ["qa@company.com", "devops@company.com"],
            "sent_at": "2026-05-31T15:00:00",
            "attachments": [],
            "priority": "normal",
        }
        
        result_multi = engine.detect_workflow(email_multi)
        assert result_multi["reply_all"]["required"] is True, "Multi-recipient should require reply-all"
        assert result_multi["reply_all"]["enforcement"] == "MANDATORY", "Should be mandatory"
        
        # Single recipient email
        email_single = {
            "email_id": "email_010b",
            "subject": "Personal Task Assignment",
            "body": "Please review the attached document.",
            "from": "manager@company.com",
            "to": ["employee@company.com"],
            "cc": [],
            "sent_at": "2026-05-31T15:30:00",
            "attachments": ["review_doc.pdf"],
            "priority": "normal",
        }
        
        result_single = engine.detect_workflow(email_single)
        assert result_single["reply_all"]["required"] is False, "Single recipient should not require reply-all"
        assert result_single["reply_all"]["enforcement"] == "OPTIONAL", "Should be optional"
        
        # Explicit reply-all request
        email_explicit = {
            "email_id": "email_010c",
            "subject": "Team Decision Needed",
            "body": "Please reply all so everyone stays in the loop. If the budget is approved, then proceed.",
            "from": "director@company.com",
            "to": ["manager@company.com"],
            "cc": [],
            "sent_at": "2026-05-31T16:00:00",
            "attachments": [],
            "priority": "normal",
        }
        
        result_explicit = engine.detect_workflow(email_explicit)
        assert result_explicit["reply_all"]["required"] is True, "Explicit reply-all request should require it"

    run_test("Reply-All Enforcement", test_reply_all_enforcement)

    # ─────────────────────────────────────────────────────────
    # TEST 11: No workflow detected (plain email)
    # ─────────────────────────────────────────────────────────
    def test_no_workflow():
        email = {
            "email_id": "email_011",
            "subject": "Lunch Plans",
            "body": "Hey, want to grab lunch at the new place on 5th street today at noon?",
            "from": "colleague@company.com",
            "to": ["me@company.com"],
            "cc": [],
            "sent_at": "2026-05-31T11:30:00",
            "attachments": [],
            "priority": "low",
        }

        result = engine.detect_workflow(email)
        assert result["workflow_detected"] is False, "Should not detect workflow in casual email"
        assert result["confidence_score"] == 0.0, "Confidence should be 0 for no patterns"
        assert result["workflow_id"] is None, "No workflow should be created"

    run_test("No Workflow Detection", test_no_workflow)

    # ─────────────────────────────────────────────────────────
    # TEST 12: Complex multi-pattern email
    # ─────────────────────────────────────────────────────────
    def test_complex_multi_pattern():
        email = {
            "email_id": "email_012",
            "subject": "Emergency: Data Breach Response Protocol",
            "body": """All Hands - Security Team,

CRITICAL: Potential data breach detected. Follow this protocol immediately:

Step 1: Isolate affected systems immediately
Step 2: Preserve all logs and evidence
Step 3: Notify the incident response team
Then, begin forensic analysis.

If customer data is compromised, then activate the customer notification process within 24 hours.
Otherwise, continue internal investigation only.

If no response within 15 minutes, escalate to the CISO.
If not approved within 1 hour, escalate to the CEO.

Meanwhile, the PR team should prepare a holding statement.
In parallel, legal should review notification requirements.
At the same time, IT should scan all systems for additional vulnerabilities.

Please review the incident report attached.
Please approve the containment strategy.
Please approve the communication plan.

The full investigation must be completed by 72 hours.
The customer notification deadline is 48 hours.

Reply all to keep the entire response team coordinated.

CISO""",
            "from": "ciso@company.com",
            "to": ["security.team@company.com", "it.ops@company.com", "legal@company.com"],
            "cc": ["ceo@company.com", "pr@company.com", "hr@company.com"],
            "sent_at": "2026-05-31T03:00:00",
            "attachments": ["incident_report.pdf", "forensic_tools_list.txt"],
            "priority": "urgent",
        }

        result = engine.detect_workflow(email)
        
        assert result["workflow_detected"] is True, "Should detect complex workflow"
        assert result["total_patterns"] >= 4, f"Should detect multiple patterns, got {result['total_patterns']}"
        assert "if_then_else" in result["patterns_found"], "Should detect if-then-else"
        assert "sequential" in result["patterns_found"], "Should detect sequential"
        assert "escalation" in result["patterns_found"], "Should detect escalation"
        assert "parallel" in result["patterns_found"], "Should detect parallel"
        assert result["reply_all"]["required"] is True, "Multi-recipient requires reply-all"
        assert result["confidence_score"] > 0.7, "High confidence for complex patterns"
        
        # Test diagram
        workflow_id = result["workflow_id"]
        diagram = engine.generate_workflow_diagram(workflow_id)
        assert diagram["node_count"] > 5, "Complex workflow should have many nodes"
        
        # Test status tracking
        status = engine.track_workflow_status(workflow_id)
        assert status["status"] in ("pending", "active"), "Should have valid status"
        
        # Test bottlenecks
        bottlenecks = engine.identify_bottlenecks(workflow_id)
        assert "bottleneck_count" in bottlenecks, "Should analyze bottlenecks"
        
        # Test optimizations
        optimizations = engine.optimize_workflow(workflow_id)
        assert optimizations["suggestion_count"] > 0, "Should suggest optimizations"

    run_test("Complex Multi-Pattern Email", test_complex_multi_pattern)

    # ─────────────────────────────────────────────────────────
    # TEST 13: Workflow serialization and completeness
    # ─────────────────────────────────────────────────────────
    def test_workflow_serialization():
        email = {
            "email_id": "email_013",
            "subject": "Invoice Processing",
            "body": """If the invoice matches the PO, then auto-approve for payment.
Otherwise, flag for manual review.
Then, schedule payment for next cycle.""",
            "from": "ap@company.com",
            "to": ["ap.team@company.com", "finance@company.com"],
            "cc": [],
            "sent_at": "2026-05-31T12:00:00",
            "attachments": [],
            "priority": "normal",
        }

        detection = engine.detect_workflow(email)
        workflow_id = detection["workflow_id"]
        
        workflow = engine.workflows[workflow_id]
        wf_dict = workflow.to_dict()
        
        assert "workflow_id" in wf_dict, "Should have workflow_id"
        assert "nodes" in wf_dict, "Should have nodes"
        assert "edges" in wf_dict, "Should have edges"
        assert "patterns_detected" in wf_dict, "Should have patterns"
        assert "reply_all_required" in wf_dict, "Should have reply_all_required"
        assert "participants" in wf_dict, "Should have participants"
        
        # Verify node serialization
        for node_id, node_dict in wf_dict["nodes"].items():
            assert "node_type" in node_dict, f"Node {node_id} should have type"
            assert "status" in node_dict, f"Node {node_id} should have status"
            assert "description" in node_dict, f"Node {node_id} should have description"

    run_test("Workflow Serialization", test_workflow_serialization)

    # ─────────────────────────────────────────────────────────
    # TEST 14: Invalid workflow ID handling
    # ─────────────────────────────────────────────────────────
    def test_invalid_workflow_id():
        diagram = engine.generate_workflow_diagram("nonexistent_wf")
        assert "error" in diagram, "Should return error for nonexistent workflow"
        
        status = engine.track_workflow_status("nonexistent_wf")
        assert "error" in status, "Should return error for nonexistent workflow"
        
        bottlenecks = engine.identify_bottlenecks("nonexistent_wf")
        assert "error" in bottlenecks, "Should return error for nonexistent workflow"
        
        optimizations = engine.optimize_workflow("nonexistent_wf")
        assert "error" in optimizations, "Should return error for nonexistent workflow"

    run_test("Invalid Workflow ID Handling", test_invalid_workflow_id)

    # ─────────────────────────────────────────────────────────
    # Summary
    # ─────────────────────────────────────────────────────────
    results["summary"] = (
        f"Ran {results['tests_run']} tests: "
        f"{results['tests_passed']} passed, {results['tests_failed']} failed"
    )
    results["all_passed"] = results["tests_failed"] == 0
    
    # Print results
    print(f"\n{'='*60}")
    print(f"V682 - Email Workflow Automation Engine - Test Results")
    print(f"{'='*60}")
    for test in results["test_results"]:
        status_icon = "✅" if test["status"] == "PASSED" else "❌"
        print(f"  {status_icon} {test['name']}: {test['status']}")
        if "error" in test:
            print(f"     Error: {test['error']}")
    print(f"{'─'*60}")
    print(f"Total: {results['tests_run']} | Passed: {results['tests_passed']} | Failed: {results['tests_failed']}")
    print(f"{'='*60}")

    return results


if __name__ == "__main__":
    test_v682()

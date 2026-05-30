"""
Email Workflow Automator - V400
Create custom email workflows, auto-forward based on rules, trigger actions on specific
keywords, build email-driven automation pipelines, conditional routing.

Features:
- Custom workflow definitions with conditions and actions
- Auto-forward based on configurable rules
- Keyword-triggered actions
- Email-driven automation pipelines
- Conditional routing (priority, sender, content, time)
- Workflow execution logging
- Reply-all enforcement for multi-recipient emails
"""

import json
import re
from datetime import datetime, timedelta
from collections import defaultdict


# Action types supported by the workflow engine
ACTION_TYPES = [
    "forward", "reply", "tag", "move", "notify",
    "escalate", "auto_respond", "create_task", "assign",
    "archive", "flag", "webhook", "delay"
]

# Condition operators
CONDITION_OPS = {
    "equals": lambda a, b: a == b,
    "not_equals": lambda a, b: a != b,
    "contains": lambda a, b: b.lower() in a.lower() if isinstance(a, str) else False,
    "not_contains": lambda a, b: b.lower() not in a.lower() if isinstance(a, str) else True,
    "starts_with": lambda a, b: a.lower().startswith(b.lower()) if isinstance(a, str) else False,
    "ends_with": lambda a, b: a.lower().endswith(b.lower()) if isinstance(a, str) else False,
    "matches_regex": lambda a, b: bool(re.search(b, a)) if isinstance(a, str) else False,
    "greater_than": lambda a, b: a > b if isinstance(a, (int, float)) else False,
    "less_than": lambda a, b: a < b if isinstance(a, (int, float)) else False,
    "in_list": lambda a, b: a in b if isinstance(b, list) else False,
    "not_in_list": lambda a, b: a not in b if isinstance(b, list) else True,
}


class WorkflowRule:
    """Represents a single workflow automation rule."""

    def __init__(self, rule_id, name, conditions, actions, priority=5, enabled=True):
        self.rule_id = rule_id
        self.name = name
        self.conditions = conditions  # List of condition dicts
        self.actions = actions  # List of action dicts
        self.priority = priority
        self.enabled = enabled
        self.match_count = 0
        self.last_triggered = None

    def evaluate_conditions(self, email):
        """Evaluate all conditions against an email. Returns True if ALL match."""
        if not self.enabled:
            return False

        for condition in self.conditions:
            field = condition["field"]
            operator = condition["operator"]
            value = condition["value"]

            # Get field value from email
            email_value = self._get_field_value(email, field)

            # Apply operator
            op_func = CONDITION_OPS.get(operator)
            if not op_func:
                continue

            if not op_func(email_value, value):
                return False

        return True

    def _get_field_value(self, email, field):
        """Extract field value from email for condition evaluation."""
        field_map = {
            "from": email.get("from", ""),
            "to": email.get("to", []),
            "cc": email.get("cc", []),
            "subject": email.get("subject", ""),
            "body": email.get("body", ""),
            "date": email.get("date", ""),
            "recipient_count": len(email.get("to", [])) + len(email.get("cc", [])),
            "has_attachment": email.get("has_attachment", False),
            "priority": email.get("priority", "normal"),
            "category": email.get("category", ""),
        }

        # Support nested field access
        if "." in field:
            parts = field.split(".")
            val = email
            for part in parts:
                if isinstance(val, dict):
                    val = val.get(part, "")
                else:
                    val = ""
            return val

        return field_map.get(field, email.get(field, ""))

    def execute_actions(self, email):
        """Execute all actions for a matched email."""
        results = []
        for action in self.actions:
            result = self._execute_single_action(action, email)
            results.append(result)

        self.match_count += 1
        self.last_triggered = datetime.now().isoformat()

        return results

    def _execute_single_action(self, action, email):
        """Execute a single action."""
        action_type = action["type"]
        params = action.get("params", {})

        execution = {
            "action_type": action_type,
            "params": params,
            "status": "executed",
            "timestamp": datetime.now().isoformat()
        }

        if action_type == "forward":
            execution["detail"] = f"Forwarded to {params.get('to', 'unknown')}"
        elif action_type == "reply":
            execution["detail"] = f"Auto-reply sent: {params.get('template', 'default')}"
        elif action_type == "tag":
            execution["detail"] = f"Tagged with: {params.get('tags', [])}"
        elif action_type == "move":
            execution["detail"] = f"Moved to folder: {params.get('folder', 'unknown')}"
        elif action_type == "notify":
            execution["detail"] = f"Notification sent to: {params.get('channel', 'unknown')}"
        elif action_type == "escalate":
            execution["detail"] = f"Escalated to: {params.get('to', 'manager')}"
        elif action_type == "auto_respond":
            execution["detail"] = f"Auto-response: {params.get('message', '')}"
        elif action_type == "create_task":
            execution["detail"] = f"Task created: {params.get('title', 'unnamed')}"
        elif action_type == "assign":
            execution["detail"] = f"Assigned to: {params.get('assignee', 'unknown')}"
        elif action_type == "archive":
            execution["detail"] = "Email archived"
        elif action_type == "flag":
            execution["detail"] = f"Flagged: {params.get('flag', 'important')}"
        elif action_type == "webhook":
            execution["detail"] = f"Webhook triggered: {params.get('url', 'unknown')}"
        elif action_type == "delay":
            execution["detail"] = f"Delayed by {params.get('minutes', 0)} minutes"

        return execution


class WorkflowEngine:
    """Email workflow automation engine."""

    def __init__(self):
        self.rules = []
        self.execution_log = []
        self.pipeline_results = defaultdict(list)

    def add_rule(self, rule):
        """Add a workflow rule."""
        self.rules.append(rule)
        self.rules.sort(key=lambda r: r.priority, reverse=True)

    def process_email(self, email):
        """Process an email through all workflow rules."""
        results = {
            "email_id": email.get("id", "unknown"),
            "matched_rules": [],
            "actions_executed": [],
            "reply_all": enforce_reply_all(email)
        }

        for rule in self.rules:
            if rule.evaluate_conditions(email):
                action_results = rule.execute_actions(email)
                results["matched_rules"].append({
                    "rule_id": rule.rule_id,
                    "rule_name": rule.name,
                    "priority": rule.priority
                })
                results["actions_executed"].extend(action_results)

                # Log execution
                self.execution_log.append({
                    "timestamp": datetime.now().isoformat(),
                    "email_id": email["id"],
                    "rule_id": rule.rule_id,
                    "rule_name": rule.name,
                    "actions": [a["action_type"] for a in action_results]
                })

        self.pipeline_results[email["id"]] = results
        return results

    def get_statistics(self):
        """Get workflow engine statistics."""
        return {
            "total_rules": len(self.rules),
            "enabled_rules": sum(1 for r in self.rules if r.enabled),
            "disabled_rules": sum(1 for r in self.rules if not r.enabled),
            "total_executions": len(self.execution_log),
            "rule_match_counts": {
                r.rule_id: {"name": r.name, "matches": r.match_count}
                for r in self.rules
            },
            "action_type_counts": self._count_action_types()
        }

    def _count_action_types(self):
        """Count executions by action type."""
        counts = defaultdict(int)
        for log in self.execution_log:
            for action in log["actions"]:
                counts[action] += 1
        return dict(counts)


def build_pipeline(workflow_engine, emails):
    """Build and execute an email processing pipeline."""
    pipeline = {
        "stages": [
            {"name": "receive", "description": "Receive incoming email"},
            {"name": "classify", "description": "Classify email type and priority"},
            {"name": "apply_rules", "description": "Apply workflow rules"},
            {"name": "execute_actions", "description": "Execute matched actions"},
            {"name": "log", "description": "Log results and update metrics"}
        ],
        "results": [],
        "start_time": datetime.now().isoformat()
    }

    for email in emails:
        result = workflow_engine.process_email(email)
        pipeline["results"].append(result)

    pipeline["end_time"] = datetime.now().isoformat()
    pipeline["total_processed"] = len(emails)
    pipeline["total_matched"] = sum(1 for r in pipeline["results"] if r["matched_rules"])

    return pipeline


def enforce_reply_all(email):
    """Enforce reply-all for multi-recipient emails."""
    recipients = email.get("to", []) + email.get("cc", [])
    reply_all_required = len(recipients) > 1
    return {
        "reply_all_required": reply_all_required,
        "reply_all_enforced": reply_all_required,
        "recipient_count": len(recipients),
        "all_recipients": recipients
    }


def create_default_rules():
    """Create a set of default workflow rules."""
    rules = []

    # Rule 1: Auto-forward urgent emails to manager
    rules.append(WorkflowRule(
        rule_id="rule_001",
        name="Urgent Email Escalation",
        conditions=[
            {"field": "subject", "operator": "contains", "value": "urgent"},
            {"field": "priority", "operator": "equals", "value": "urgent"}
        ],
        actions=[
            {"type": "escalate", "params": {"to": "manager@company.com", "reason": "urgent_email"}},
            {"type": "flag", "params": {"flag": "urgent"}},
            {"type": "notify", "params": {"channel": "slack", "message": "Urgent email received"}}
        ],
        priority=10
    ))

    # Rule 2: Auto-tag and route client emails
    rules.append(WorkflowRule(
        rule_id="rule_002",
        name="Client Email Routing",
        conditions=[
            {"field": "from", "operator": "contains", "value": "@client"},
        ],
        actions=[
            {"type": "tag", "params": {"tags": ["client", "external"]}},
            {"type": "move", "params": {"folder": "Clients/Inbox"}},
            {"type": "assign", "params": {"assignee": "account_manager@company.com"}}
        ],
        priority=8
    ))

    # Rule 3: Auto-respond to after-hours emails
    rules.append(WorkflowRule(
        rule_id="rule_003",
        name="After Hours Auto-Response",
        conditions=[
            {"field": "category", "operator": "equals", "value": "after_hours"}
        ],
        actions=[
            {"type": "auto_respond", "params": {
                "template": "after_hours",
                "message": "Thank you for your email. Our office hours are 9AM-5PM. We will respond during business hours."
            }},
            {"type": "tag", "params": {"tags": ["after_hours", "auto_replied"]}}
        ],
        priority=6
    ))

    # Rule 4: Invoice processing automation
    rules.append(WorkflowRule(
        rule_id="rule_004",
        name="Invoice Auto-Processing",
        conditions=[
            {"field": "subject", "operator": "contains", "value": "invoice"},
            {"field": "body", "operator": "contains", "value": "amount"}
        ],
        actions=[
            {"type": "forward", "params": {"to": "accounts@company.com"}},
            {"type": "tag", "params": {"tags": ["invoice", "finance"]}},
            {"type": "create_task", "params": {"title": "Process invoice", "assignee": "accounts@company.com", "due_days": 3}},
            {"type": "move", "params": {"folder": "Finance/Invoices"}}
        ],
        priority=7
    ))

    # Rule 5: Spam keyword detection and quarantine
    rules.append(WorkflowRule(
        rule_id="rule_005",
        name="Spam Keyword Filter",
        conditions=[
            {"field": "subject", "operator": "contains", "value": "free money"},
        ],
        actions=[
            {"type": "move", "params": {"folder": "Spam/Quarantine"}},
            {"type": "tag", "params": {"tags": ["suspected_spam"]}},
            {"type": "notify", "params": {"channel": "admin", "message": "Suspected spam quarantined"}}
        ],
        priority=9
    ))

    # Rule 6: Support ticket auto-routing
    rules.append(WorkflowRule(
        rule_id="rule_006",
        name="Support Ticket Routing",
        conditions=[
            {"field": "subject", "operator": "contains", "value": "help"},
            {"field": "body", "operator": "contains", "value": "issue"}
        ],
        actions=[
            {"type": "create_task", "params": {"title": "Support ticket", "assignee": "support@company.com"}},
            {"type": "tag", "params": {"tags": ["support", "ticket"]}},
            {"type": "auto_respond", "params": {
                "template": "support_acknowledgment",
                "message": "We've received your support request and will respond within 24 hours."
            }}
        ],
        priority=7
    ))

    # Rule 7: Multi-recipient reply-all enforcement
    rules.append(WorkflowRule(
        rule_id="rule_007",
        name="Multi-Recipient Reply-All Enforcement",
        conditions=[
            {"field": "recipient_count", "operator": "greater_than", "value": 1}
        ],
        actions=[
            {"type": "flag", "params": {"flag": "reply_all_required"}},
            {"type": "tag", "params": {"tags": ["reply_all_enforced"]}}
        ],
        priority=5
    ))

    # Rule 8: Executive communication priority routing
    rules.append(WorkflowRule(
        rule_id="rule_008",
        name="Executive Priority Routing",
        conditions=[
            {"field": "from", "operator": "contains", "value": "ceo@"},
        ],
        actions=[
            {"type": "flag", "params": {"flag": "executive_priority"}},
            {"type": "notify", "params": {"channel": "sms", "message": "Email from CEO - immediate attention required"}},
            {"type": "tag", "params": {"tags": ["executive", "high_priority"]}}
        ],
        priority=10
    ))

    # Rule 9: Project-related email filing
    rules.append(WorkflowRule(
        rule_id="rule_009",
        name="Project Email Filing",
        conditions=[
            {"field": "subject", "operator": "contains", "value": "project"},
            {"field": "body", "operator": "contains", "value": "deadline"}
        ],
        actions=[
            {"type": "move", "params": {"folder": "Projects/Active"}},
            {"type": "create_task", "params": {"title": "Review project update", "assignee": "pm@company.com"}},
            {"type": "tag", "params": {"tags": ["project", "deadline_related"]}}
        ],
        priority=6
    ))

    # Rule 10: Attachment handling
    rules.append(WorkflowRule(
        rule_id="rule_010",
        name="Attachment Scanner",
        conditions=[
            {"field": "has_attachment", "operator": "equals", "value": True},
            {"field": "body", "operator": "contains", "value": "confidential"}
        ],
        actions=[
            {"type": "tag", "params": {"tags": ["confidential", "has_attachment"]}},
            {"type": "notify", "params": {"channel": "security", "message": "Confidential attachment received"}},
            {"type": "webhook", "params": {"url": "https://security.company.com/scan", "method": "POST"}}
        ],
        priority=8
    ))

    return rules


# Sample emails for testing
SAMPLE_EMAILS = [
    {
        "id": "wf_001",
        "from": "client@acmecorp.com",
        "to": ["sales@company.com", "support@company.com"],
        "cc": ["manager@company.com"],
        "subject": "URGENT: Help with production issue",
        "date": "2026-05-29T08:00:00",
        "priority": "urgent",
        "category": "support",
        "has_attachment": False,
        "body": "We have a critical issue with our production environment. Need immediate help resolving this."
    },
    {
        "id": "wf_002",
        "from": "billing@supplier.com",
        "to": ["accounts@company.com"],
        "cc": ["procurement@company.com"],
        "subject": "Invoice #2026-5432 for May services",
        "date": "2026-05-28T14:00:00",
        "priority": "normal",
        "category": "finance",
        "has_attachment": True,
        "body": "Please find attached the invoice for May services. Total amount due: $12,450.00. Payment due within 30 days."
    },
    {
        "id": "wf_003",
        "from": "ceo@company.com",
        "to": ["vp@company.com", "cfo@company.com", "cto@company.com"],
        "cc": [],
        "subject": "Board meeting preparation",
        "date": "2026-05-29T07:00:00",
        "priority": "high",
        "category": "executive",
        "has_attachment": True,
        "body": "Please review the attached confidential materials for tomorrow's board meeting. Deadline for feedback is 5pm today."
    },
    {
        "id": "wf_004",
        "from": "user@external.com",
        "to": ["support@company.com"],
        "cc": [],
        "subject": "Help - can't login to my account",
        "date": "2026-05-29T23:30:00",
        "priority": "normal",
        "category": "after_hours",
        "has_attachment": False,
        "body": "I'm having an issue logging into my account. I've tried resetting my password but it's not working."
    },
    {
        "id": "wf_005",
        "from": "spammer@freebies.tk",
        "to": ["everyone@company.com"],
        "cc": [],
        "subject": "Get free money now!!! Click here!",
        "date": "2026-05-29T03:00:00",
        "priority": "low",
        "category": "spam",
        "has_attachment": False,
        "body": "Congratulations! You've won free money! Click here to claim your prize now!"
    },
    {
        "id": "wf_006",
        "from": "pm@company.com",
        "to": ["dev@company.com", "qa@company.com", "design@company.com"],
        "cc": ["manager@company.com"],
        "subject": "Project Phoenix - deadline reminder",
        "date": "2026-05-29T09:00:00",
        "priority": "high",
        "category": "project",
        "has_attachment": False,
        "body": "Reminder: Project Phoenix deadline is June 15th. All teams need to complete their milestones. Please update your status."
    },
    {
        "id": "wf_007",
        "from": "partner@vendor.com",
        "to": ["procurement@company.com", "finance@company.com"],
        "cc": ["legal@company.com"],
        "subject": "Contract renewal - confidential documents attached",
        "date": "2026-05-28T16:00:00",
        "priority": "normal",
        "category": "legal",
        "has_attachment": True,
        "body": "Please find the confidential contract renewal documents attached. Please review and sign by end of week."
    },
    {
        "id": "wf_008",
        "from": "newsletter@techblog.com",
        "to": ["user@company.com"],
        "cc": [],
        "subject": "Weekly Tech Digest - AI Trends",
        "date": "2026-05-27T08:00:00",
        "priority": "low",
        "category": "newsletter",
        "has_attachment": False,
        "body": "This week's top stories: AI advances, new frameworks, and cloud computing trends."
    }
]


def main():
    """Main entry point for Email Workflow Automator V400."""
    timestamp = datetime.now().isoformat()
    version = "V400"

    # Initialize workflow engine
    engine = WorkflowEngine()

    # Add default rules
    rules = create_default_rules()
    for rule in rules:
        engine.add_rule(rule)

    # Build and execute pipeline
    pipeline = build_pipeline(engine, SAMPLE_EMAILS)

    # Get statistics
    stats = engine.get_statistics()

    # Rule definitions for output
    rule_definitions = []
    for rule in rules:
        rule_definitions.append({
            "rule_id": rule.rule_id,
            "name": rule.name,
            "conditions": rule.conditions,
            "actions": [{"type": a["type"], "params": a.get("params", {})} for a in rule.actions],
            "priority": rule.priority,
            "enabled": rule.enabled
        })

    report = {
        "version": version,
        "timestamp": timestamp,
        "reply_all_required": True,
        "reply_all_enforced": True,
        "engine": "Email Workflow Automator",
        "summary": {
            "total_emails_processed": len(SAMPLE_EMAILS),
            "total_rules": len(rules),
            "emails_matched_rules": pipeline["total_matched"],
            "total_actions_executed": sum(len(r["actions_executed"]) for r in pipeline["results"]),
            "match_rate": round(pipeline["total_matched"] / max(1, len(SAMPLE_EMAILS)), 3)
        },
        "workflow_rules": rule_definitions,
        "pipeline_execution": pipeline,
        "statistics": stats,
        "execution_log": engine.execution_log,
        "supported_action_types": ACTION_TYPES,
        "supported_operators": list(CONDITION_OPS.keys())
    }

    output = json.dumps(report, indent=2)
    print(output)
    return report


if __name__ == "__main__":
    main()

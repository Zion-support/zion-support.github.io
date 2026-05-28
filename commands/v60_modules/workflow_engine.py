#!/usr/bin/env python3
"""
V60: Email Workflow Automation Engine
Visual workflow builder for email automation: if/then/else branching, wait steps,
condition checks, CRM updates, task creation, Slack notifications, calendar events,
and API webhooks — all triggered by email events without code.
Data stored in: data/v60_workflows.json, data/v60_execution_log.json
"""
import json, os, re
from pathlib import Path
from datetime import datetime, timezone, timedelta
from typing import Optional, Any
from collections import defaultdict

DATA_DIR = Path("data")
WORKFLOWS_FILE = DATA_DIR / "v60_workflows.json"
EXEC_LOG_FILE = DATA_DIR / "v60_execution_log.json"
os.makedirs(DATA_DIR, exist_ok=True)

# ── Workflow step types ─────────────────────────────────────────────────────────
STEP_TYPES = {
    "trigger":     {"label": "Trigger",         "desc": "What starts the workflow"},
    "condition":   {"label": "If/Else",          "desc": "Branch on conditions"},
    "wait":        {"label": "Wait",             "desc": "Delay before next step"},
    "send_email":  {"label": "Send Email",       "desc": "Send a response or forward"},
    "reply":       {"label": "Reply",             "desc": "Reply to trigger email"},
    "forward":     {"label": "Forward",          "desc": "Forward to another address"},
    "crm_update":  {"label": "Update CRM",       "desc": "Update Salesforce/HubSpot"},
    "create_task": {"label": "Create Task",       "desc": "Create task in Asana/Jira"},
    "slack":       {"label": "Notify Slack",      "desc": "Send Slack notification"},
    "calendar":    {"label": "Schedule Event",    "desc": "Create calendar event"},
    "webhook":     {"label": "Webhook/API Call",  "desc": "Call external API"},
    "filter":      {"label": "Filter",            "desc": "Filter emails by criteria"},
    "route":       {"label": "Route to Queue",    "desc": "Route to team queue"},
    "ai_action":   {"label": "AI Action",         "desc": "Run AI module (V42-V59)"},
    "end":         {"label": "End",               "desc": "End workflow"},
}

# ── Condition operators ─────────────────────────────────────────────────────────
CONDITION_OPS = {
    "equals":         lambda a, b: str(a).lower() == str(b).lower(),
    "not_equals":     lambda a, b: str(a).lower() != str(b).lower(),
    "contains":        lambda a, b: str(b).lower() in str(a).lower(),
    "not_contains":    lambda a, b: str(b).lower() not in str(a).lower(),
    "starts_with":     lambda a, b: str(a).lower().startswith(str(b).lower()),
    "ends_with":       lambda a, b: str(a).lower().endswith(str(b).lower()),
    "greater_than":    lambda a, b: float(a) > float(b) if _is_number(a) and _is_number(b) else str(a) > str(b),
    "less_than":       lambda a, b: float(a) < float(b) if _is_number(a) and _is_number(b) else str(a) < str(b),
    "is_empty":        lambda a, b: str(a).strip() == "",
    "is_not_empty":    lambda a, b: str(a).strip() != "",
    "matches_regex":    lambda a, b: bool(re.search(b, str(a), re.I)),
}

def _is_number(v: Any) -> bool:
    try:
        float(v)
        return True
    except:
        return False

# ── Email field paths for conditions ───────────────────────────────────────────
EMAIL_FIELDS = {
    "subject":        "email.subject",
    "body":           "email.body",
    "sender":         "email.sender",
    "sender_domain":  "email.sender_domain",
    "recipient":      "email.recipient",
    "has_attachment": "email.has_attachment",
    "attachment_count": "email.attachment_count",
    "thread_id":      "email.thread_id",
    "date":           "email.date",
    "hour":           "email.hour",
    "day_of_week":    "email.day_of_week",
    "language":        "email.language",
    "sentiment":       "email.sentiment",
    "intent":          "email.intent",
    "urgency":         "email.urgency",
}

def _get_field(email: dict, field_path: str) -> Any:
    """Get a field from email data using dot notation."""
    parts = field_path.split(".")
    val = email
    for p in parts:
        if isinstance(val, dict):
            val = val.get(p, "")
        else:
            return ""
    return val

def _evaluate_condition(condition: dict, email: dict) -> bool:
    """Evaluate a single condition against email data."""
    field_key = condition.get("field", "")
    operator = condition.get("operator", "contains")
    value = condition.get("value", "")

    if field_key not in EMAIL_FIELDS:
        return False

    actual = _get_field(email, EMAIL_FIELDS[field_key])

    if operator not in CONDITION_OPS:
        return False

    try:
        return CONDITION_OPS[operator](str(actual), str(value))
    except Exception:
        return False

def _evaluate_conditions(conditions: list, logic: str = "all", email: dict) -> bool:
    """Evaluate a list of conditions with AND/OR logic."""
    if logic == "any":
        return any(_evaluate_condition(c, email) for c in conditions)
    return all(_evaluate_condition(c, email) for c in conditions)

# ── Workflow engine ────────────────────────────────────────────────────────────
def create_workflow(
    name: str,
    trigger_type: str,
    steps: list,
    description: str = "",
    tags: list = [],
) -> dict:
    """Create a new workflow."""
    workflows = _load_workflows()
    workflow_id = re.sub(r'[^a-z0-9]+', '-', name.lower()) + "-" + datetime.now(timezone.utc).strftime("%Y%m%d%H%M%S")
    workflow = {
        "id": workflow_id,
        "name": name,
        "description": description,
        "trigger_type": trigger_type,
        "steps": steps,
        "tags": tags,
        "enabled": True,
        "created_at": datetime.now(timezone.utc).isoformat(),
        "last_triggered": None,
        "trigger_count": 0,
        "error_count": 0,
    }
    workflows[workflow_id] = workflow
    _save_workflows(workflows)
    return {"success": True, "workflow_id": workflow_id, "workflow": workflow}

def _load_workflows() -> dict:
    if WORKFLOWS_FILE.exists():
        try: return json.loads(WORKFLOWS_FILE.read_text())
        except: pass
    return {}

def _save_workflows(workflows: dict) -> None:
    WORKFLOWS_FILE.write_text(json.dumps(workflows, indent=2, ensure_ascii=False))

def _load_exec_log() -> list:
    if EXEC_LOG_FILE.exists():
        try: return json.loads(EXEC_LOG_FILE.read_text())
        except: pass
    return []

def _save_exec_log(log: list) -> None:
    EXEC_LOG_FILE.write_text(json.dumps(log[-1000:], indent=2, ensure_ascii=False))

def _execute_step(step: dict, email: dict, context: dict) -> dict:
    """Execute a single workflow step. Returns: {success, output, next_step}."""
    step_type = step.get("type")
    step_id = step.get("id", "unknown")

    if step_type == "end":
        return {"success": True, "output": "Workflow ended", "next_step": None, "action_taken": "end"}

    elif step_type == "wait":
        delay = step.get("delay_minutes", 5)
        return {"success": True, "output": f"Wait {delay} minutes", "next_step": "continue", "action_taken": "wait", "delay_minutes": delay}

    elif step_type == "send_email":
        to = step.get("to", "{sender}")
        subject = step.get("subject", "Re: {subject}")
        body = step.get("body", "")
        # Resolve tokens
        resolved_to = _resolve_tokens(to, email, context)
        resolved_subj = _resolve_tokens(subject, email, context)
        resolved_body = _resolve_tokens(body, email, context)
        return {
            "success": True,
            "output": f"Send to: {resolved_to} | Subject: {resolved_subj[:40]}",
            "next_step": "continue",
            "action_taken": "send_email",
            "email_sent": {"to": resolved_to, "subject": resolved_subj, "body": resolved_body[:100]},
        }

    elif step_type == "reply":
        body = step.get("body", "")
        resolved_body = _resolve_tokens(body, email, context)
        return {
            "success": True,
            "output": f"Reply to {email.get('sender','')}: {resolved_body[:60]}",
            "next_step": "continue",
            "action_taken": "reply",
            "reply_to": email.get("sender"),
            "reply_body": resolved_body[:100],
        }

    elif step_type == "forward":
        to = _resolve_tokens(step.get("to", ""), email, context)
        return {
            "success": True,
            "output": f"Forward to {to}",
            "next_step": "continue",
            "action_taken": "forward",
            "forward_to": to,
        }

    elif step_type == "condition":
        conditions = step.get("conditions", [])
        logic = step.get("logic", "all")
        result = _evaluate_conditions(conditions, logic, email)
        return {
            "success": True,
            "output": f"Condition {'MET' if result else 'NOT MET'} ({logic})",
            "next_step": "continue",
            "action_taken": "condition",
            "condition_result": result,
            "true_branch": step.get("true_branch"),
            "false_branch": step.get("false_branch"),
        }

    elif step_type == "crm_update":
        field = step.get("field", "")
        value = _resolve_tokens(step.get("value", ""), email, context)
        crm = step.get("crm_type", "salesforce")
        return {
            "success": True,
            "output": f"Update {crm}: {field} = {value}",
            "next_step": "continue",
            "action_taken": "crm_update",
            "crm_update": {"crm": crm, "field": field, "value": value},
        }

    elif step_type == "create_task":
        title = _resolve_tokens(step.get("title", "Task from email"), email, context)
        assignee = step.get("assignee", "")
        tool = step.get("tool", "asana")
        return {
            "success": True,
            "output": f"Create {tool} task: {title[:40]}",
            "next_step": "continue",
            "action_taken": "create_task",
            "task": {"tool": tool, "title": title, "assignee": assignee},
        }

    elif step_type == "slack":
        channel = step.get("channel", "#general")
        message = _resolve_tokens(step.get("message", ""), email, context)
        return {
            "success": True,
            "output": f"Slack {channel}: {message[:40]}",
            "next_step": "continue",
            "action_taken": "slack",
            "slack_message": {"channel": channel, "message": message},
        }

    elif step_type == "webhook":
        url = step.get("url", "")
        method = step.get("method", "POST")
        body_str = _resolve_tokens(json.dumps(step.get("body", {})), email, context)
        return {
            "success": True,
            "output": f"Webhook {method} {url[:40]}",
            "next_step": "continue",
            "action_taken": "webhook",
            "webhook": {"url": url, "method": method, "body": body_str[:100]},
        }

    elif step_type == "ai_action":
        ai_module = step.get("module", "V42")
        action = step.get("action", "route")
        return {
            "success": True,
            "output": f"AI Module {ai_module}: {action}",
            "next_step": "continue",
            "action_taken": "ai_action",
            "ai_module": ai_module,
        }

    elif step_type == "route":
        queue = step.get("queue", "general")
        priority = step.get("priority", "normal")
        return {
            "success": True,
            "output": f"Route to queue: {queue} (priority: {priority})",
            "next_step": "continue",
            "action_taken": "route",
            "routed_to": {"queue": queue, "priority": priority},
        }

    elif step_type == "calendar":
        title = _resolve_tokens(step.get("title", "Meeting"), email, context)
        duration = step.get("duration_minutes", 30)
        invitees = step.get("invitees", [])
        return {
            "success": True,
            "output": f"Calendar: {title} ({duration}min)",
            "next_step": "continue",
            "action_taken": "calendar",
            "calendar_event": {"title": title, "duration": duration, "invitees": invitees},
        }

    elif step_type == "filter":
        filter_conditions = step.get("conditions", [])
        filter_logic = step.get("logic", "all")
        result = _evaluate_conditions(filter_conditions, filter_logic, email)
        return {
            "success": True,
            "output": f"Filter {'PASSED' if result else 'FAILED'}",
            "next_step": "continue",
            "action_taken": "filter",
            "filter_result": result,
        }

    return {"success": False, "output": f"Unknown step type: {step_type}", "next_step": None}

def _resolve_tokens(text: str, email: dict, context: dict) -> str:
    """Resolve {tokens} in text against email fields and context."""
    if not text:
        return text
    # Common tokens
    replacements = {
        "{sender}": email.get("sender", ""),
        "{recipient}": email.get("recipient", ""),
        "{subject}": email.get("subject", ""),
        "{sender_domain}": email.get("sender", "").split("@")[-1] if "@" in email.get("sender","") else "",
        "{first_name}": email.get("sender","").split("@")[0].split(".")[0].capitalize() if "@" in email.get("sender","") else "",
        "{thread_id}": email.get("thread_id", ""),
    }
    result = text
    for token, value in replacements.items():
        result = result.replace(token, str(value))
    return result

def run_workflow(workflow_id: str, email: dict) -> dict:
    """Run a workflow against an email. Returns execution trace."""
    workflows = _load_workflows()
    if workflow_id not in workflows:
        return {"success": False, "error": f"Workflow {workflow_id} not found"}

    wf = workflows[workflow_id]
    if not wf.get("enabled", True):
        return {"success": False, "error": "Workflow is disabled"}

    exec_log = _load_exec_log()
    steps = wf["steps"]
    step_results = []
    context = {"workflow_id": workflow_id, "started_at": datetime.now(timezone.utc).isoformat()}
    i = 0
    error = None

    while i < len(steps):
        step = steps[i]
        result = _execute_step(step, email, context)
        step_results.append({"step_id": step.get("id", i), "step_type": step.get("type"), "result": result})

        if not result.get("success", False):
            error = result.get("output", "Step failed")
            break

        # Handle condition branching
        if result.get("action_taken") == "condition":
            if result.get("condition_result"):
                branch_steps = result.get("true_branch", [])
            else:
                branch_steps = result.get("false_branch", [])
            if branch_steps:
                # Insert branch steps
                steps = steps[:i+1] + branch_steps + steps[i+1:]

        if result.get("next_step") is None:
            break

        i += 1

    # Update workflow stats
    wf["last_triggered"] = datetime.now(timezone.utc).isoformat()
    wf["trigger_count"] = wf.get("trigger_count", 0) + 1
    if error:
        wf["error_count"] = wf.get("error_count", 0) + 1
    _save_workflows(workflows)

    # Log execution
    exec_entry = {
        "workflow_id": workflow_id,
        "workflow_name": wf["name"],
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "email_subject": email.get("subject", "")[:80],
        "sender": email.get("sender", ""),
        "steps_executed": len(step_results),
        "success": error is None,
        "error": error,
        "steps": step_results[-10:],  # Last 10 steps
    }
    exec_log.append(exec_entry)
    _save_exec_log(exec_log)

    return {
        "success": error is None,
        "workflow_id": workflow_id,
        "workflow_name": wf["name"],
        "steps_executed": len(step_results),
        "error": error,
        "step_trace": step_results,
    }

def get_available_workflows() -> list:
    """List all available workflows."""
    workflows = _load_workflows()
    return [
        {
            "id": wid,
            "name": wf["name"],
            "description": wf.get("description", ""),
            "trigger_type": wf["trigger_type"],
            "enabled": wf.get("enabled", True),
            "trigger_count": wf.get("trigger_count", 0),
            "error_count": wf.get("error_count", 0),
            "last_triggered": wf.get("last_triggered"),
            "tags": wf.get("tags", []),
        }
        for wid, wf in workflows.items()
    ]

# ── Built-in workflow templates ─────────────────────────────────────────────────
def create_template_workflows() -> list:
    """Create common workflow templates."""
    templates = [
        {
            "name": "High-Value Lead Router",
            "description": "Route emails from large companies with purchase intent to VIP sales queue",
            "trigger_type": "new_email",
            "steps": [
                {"id":"filter1","type":"filter","conditions":[{"field":"body","operator":"contains","value":"budget"},{"field":"body","operator":"contains","value":"enterprise"}],"logic":"any"},
                {"id":"enrich1","type":"ai_action","module":"V42","action":"route"},
                {"id":"slack1","type":"slack","channel":"#vip-leads","message":"High-value lead from {sender}"},
                {"id":"task1","type":"create_task","title":"VIP Follow-up: {subject}","tool":"asana"},
                {"id":"end1","type":"end"},
            ],
            "tags":["sales","lead-routing","automation"],
        },
        {
            "name": "Competitive Loss Alert",
            "description": "Alert sales team when competitor is mentioned negatively — trigger win-back sequence",
            "trigger_type": "new_email",
            "steps": [
                {"id":"ai1","type":"ai_action","module":"V58","action":"track_competitor"},
                {"id":"cond1","type":"condition","conditions":[{"field":"sentiment","operator":"equals","value":"negative"}],"logic":"all","true_branch":[{"id":"slack1","type":"slack","channel":"#sales-competitors","message":"Competitor mentioned negatively by {sender}"},{"id":"crm1","type":"crm_update","crm_type":"salesforce","field":"Status","value":"Competitive Loss Alert"}]},
                {"id":"end1","type":"end"},
            ],
            "tags":["competitive","sales","alerts"],
        },
        {
            "name": "Invoice Received → Auto-File",
            "description": "Detect invoice emails, extract fields, file to accounting, alert finance team",
            "trigger_type": "new_email",
            "steps": [
                {"id":"ai1","type":"ai_action","module":"V54","action":"analyze_attachment"},
                {"id":"cond1","type":"condition","conditions":[{"field":"body","operator":"contains","value":"invoice"}],"logic":"all"},
                {"id":"crm1","type":"crm_update","crm_type":"salesforce","field":"Invoice_Amount","value":"{extracted_amount}"},
                {"id":"slack1","type":"slack","channel":"#finance","message":"Invoice received from {sender}"},
                {"id":"end1","type":"end"},
            ],
            "tags":["finance","automation","invoice"],
        },
        {
            "name": "Urgent Email → Immediate SLA",
            "description": "Route urgent emails to top-priority queue with 15-min SLA",
            "trigger_type": "new_email",
            "steps": [
                {"id":"ai1","type":"ai_action","module":"V49","action":"score_urgency"},
                {"id":"cond1","type":"condition","conditions":[{"field":"urgency","operator":"greater_than","value":"80"}],"logic":"all","true_branch":[{"id":"route1","type":"route","queue":"urgent","priority":"critical"},{"id":"slack1","type":"slack","channel":"#support-urgent","message":"URGENT from {sender}: {subject}"},{"id":"task1","type":"create_task","title":"URGENT: {subject}","assignee":"support-lead","tool":"jira"}]},
                {"id":"end1","type":"end"},
            ],
            "tags":["support","sla","urgent"],
        },
    ]

    created = []
    for t in templates:
        result = create_workflow(t["name"], t["trigger_type"], t["steps"], t["description"], t["tags"])
        created.append(result)
    return created

if __name__ == "__main__":
    print("V60: Email Workflow Automation Engine")
    print(f"\nAvailable step types: {len(STEP_TYPES)}")
    for st, info in STEP_TYPES.items():
        print(f"  {st}: {info['label']} — {info['desc']}")

    print("\n--- Creating Template Workflows ---")
    templates = create_template_workflows()
    for t in templates:
        print(f"  Created: {t['workflow_id']} | {t['workflow']['name']}")

    print("\n--- Available Workflows ---")
    wfs = get_available_workflows()
    for wf in wfs:
        print(f"  {wf['id']} | {wf['name']} | enabled={wf['enabled']} | triggers={wf['trigger_count']}")

    print("\n--- Test Execution ---")
    test_email = {
        "sender": "alice@enterprise.com",
        "recipient": "sales@ziontechgroup.com",
        "subject": "Budget Approval for Enterprise Contract",
        "body": "We have budget approved and want to move forward. Enterprise license for 500 seats.",
        "thread_id": "thread-001",
        "has_attachment": True,
        "sentiment": "positive",
        "intent": "purchase_intent",
        "urgency": "85",
    }
    if wfs:
        result = run_workflow(wfs[0]["id"], test_email)
        print(f"  Workflow: {result['workflow_name']}")
        print(f"  Success: {result['success']} | Steps: {result['steps_executed']}")
        for sr in result.get("step_trace", []):
            print(f"    [{sr['step_type']}] {sr['result'].get('action_taken', sr['result'].get('output',''))[:60]}")

#!/usr/bin/env python3
"""V92: AI Email Workflow Automation Chains"""
import json, hashlib
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Any
from dataclasses import dataclass, field
from enum import Enum

class TriggerType(Enum):
    KEYWORD = "keyword"
    CATEGORY = "category"
    SENDER = "sender"
    URGENCY = "urgency"

class ActionType(Enum):
    SEND_EMAIL = "send_email"
    CREATE_TASK = "create_task"
    UPDATE_CRM = "update_crm"
    SCHEDULE_MEETING = "schedule_meeting"
    NOTIFY_SLACK = "notify_slack"
    CREATE_TICKET = "create_ticket"
    SEND_SMS = "send_sms"
    TRIGGER_WEBHOOK = "trigger_webhook"

class WorkflowStatus(Enum):
    ACTIVE = "active"
    COMPLETED = "completed"
    FAILED = "failed"

@dataclass
class WorkflowTrigger:
    trigger_type: TriggerType
    condition: str
    value: Any

@dataclass
class WorkflowAction:
    action_id: str
    action_type: ActionType
    parameters: Dict[str, Any]
    delay_seconds: int = 0
    next_action: Optional[str] = None

@dataclass
class WorkflowExecution:
    execution_id: str
    workflow_id: str
    email_id: str
    started_at: datetime
    completed_at: Optional[datetime] = None
    status: WorkflowStatus = WorkflowStatus.ACTIVE
    actions_completed: List[str] = field(default_factory=list)
    context: Dict = field(default_factory=dict)
    logs: List[str] = field(default_factory=list)

@dataclass
class Workflow:
    workflow_id: str
    name: str
    description: str
    triggers: List[WorkflowTrigger]
    actions: List[WorkflowAction]
    execution_count: int = 0
    success_rate: float = 0.0
    is_active: bool = True

class V92WorkflowAutomationEngine:
    def __init__(self):
        self.workflows: Dict[str, Workflow] = {}
        self.executions: Dict[str, WorkflowExecution] = {}
        self.metrics = {"total_workflows": 0, "total_executions": 0, "successful_executions": 0}
        self._create_default_workflows()

    def _create_default_workflows(self):
        sales_wf = Workflow("sales_inquiry_auto", "Sales Inquiry Automation",
            "Auto-handle sales inquiries", [WorkflowTrigger(TriggerType.CATEGORY, "equals", "sales_inquiry")],
            [WorkflowAction("send_reply", ActionType.SEND_EMAIL, {"template": "sales_reply"}, 0, "create_crm"),
             WorkflowAction("create_crm", ActionType.UPDATE_CRM, {"action": "create_contact"}, 5, "create_task"),
             WorkflowAction("create_task", ActionType.CREATE_TASK, {"title": "Follow up", "priority": "high"}, 10, "notify"),
             WorkflowAction("notify", ActionType.NOTIFY_SLACK, {"channel": "#sales"}, 15)])
        self.workflows[sales_wf.workflow_id] = sales_wf
        support_wf = Workflow("support_ticket_auto", "Support Ticket Automation",
            "Auto-create support tickets", [WorkflowTrigger(TriggerType.CATEGORY, "equals", "support_request")],
            [WorkflowAction("ack", ActionType.SEND_EMAIL, {"template": "support_ack"}, 0, "ticket"),
             WorkflowAction("ticket", ActionType.CREATE_TICKET, {"system": "jira"}, 5, "notify"),
             WorkflowAction("notify", ActionType.NOTIFY_SLACK, {"channel": "#support"}, 10)])
        self.workflows[support_wf.workflow_id] = support_wf
        urgent_wf = Workflow("urgent_escalation", "Urgent Issue Escalation",
            "Immediate escalation", [WorkflowTrigger(TriggerType.URGENCY, "equals", "critical")],
            [WorkflowAction("reply", ActionType.SEND_EMAIL, {"template": "urgent_ack"}, 0, "page"),
             WorkflowAction("page", ActionType.SEND_SMS, {"message": "URGENT"}, 5, "incident"),
             WorkflowAction("incident", ActionType.CREATE_TICKET, {"severity": "critical"}, 10, "alert"),
             WorkflowAction("alert", ActionType.NOTIFY_SLACK, {"channel": "#incident"}, 15)])
        self.workflows[urgent_wf.workflow_id] = urgent_wf
        self.metrics["total_workflows"] = len(self.workflows)

    def execute_workflow(self, workflow_id: str, email_data: Dict) -> Optional[str]:
        if workflow_id not in self.workflows: return None
        workflow = self.workflows[workflow_id]
        if not workflow.is_active or not self._check_triggers(workflow.triggers, email_data): return None
        exec_id = hashlib.md5(f"{workflow_id}_{datetime.now().isoformat()}".encode()).hexdigest()[:12]
        execution = WorkflowExecution(exec_id, workflow_id, email_data.get("id",""), datetime.now(), context={"email": email_data})
        self.executions[exec_id] = execution
        action_map = {a.action_id: a for a in workflow.actions}
        current = workflow.actions[0].action_id if workflow.actions else None
        while current:
            action = action_map.get(current)
            if not action: break
            execution.logs.append(f"[{datetime.now().isoformat()}] Executing {action.action_id}")
            execution.actions_completed.append(action.action_id)
            current = action.next_action
        execution.status = WorkflowStatus.COMPLETED
        execution.completed_at = datetime.now()
        workflow.execution_count += 1
        self.metrics["total_executions"] += 1
        self.metrics["successful_executions"] += 1
        return exec_id

    def _check_triggers(self, triggers, email_data):
        text = (email_data.get("subject","") + " " + email_data.get("body","")).lower()
        for t in triggers:
            if t.trigger_type == TriggerType.CATEGORY and email_data.get("category") == t.value: return True
            if t.trigger_type == TriggerType.URGENCY and email_data.get("urgency") == t.value: return True
            if t.trigger_type == TriggerType.KEYWORD and t.value.lower() in text: return True
        return False

    def get_metrics(self): return self.metrics

if __name__ == "__main__":
    engine = V92WorkflowAutomationEngine()
    test_emails = [
        {"id": "e1", "from": "prospect@co.com", "subject": "Pricing", "body": "Interested in AI services", "category": "sales_inquiry"},
        {"id": "e2", "from": "client@co.com", "subject": "API help", "body": "Need help with API", "category": "support_request"},
        {"id": "e3", "from": "client@co.com", "subject": "Production down!", "body": "System down!", "urgency": "critical"},
    ]
    for email in test_emails:
        for wf_id in engine.workflows:
            eid = engine.execute_workflow(wf_id, email)
            if eid:
                ex = engine.executions[eid]
                print(f"Workflow: {wf_id} | Status: {ex.status.value} | Actions: {len(ex.actions_completed)}")
    print(json.dumps(engine.get_metrics(), indent=2))

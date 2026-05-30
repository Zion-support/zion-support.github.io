#!/usr/bin/env python3
"""
V150 - AI Email Workflow Automation Builder
Visual workflow builder for email automation chains.
Supports triggers, conditions, actions, and complex routing logic.
"""

import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional, Tuple
from enum import Enum


class TriggerType(Enum):
    ON_RECEIVE = "on_receive"
    ON_READ = "on_read"
    ON_REPLY = "on_reply"
    ON_FORWARD = "on_forward"
    ON_SCHEDULE = "on_schedule"
    ON_NO_RESPONSE = "on_no_response"


class ActionType(Enum):
    FORWARD = "forward"
    REPLY = "reply"
    CATEGORIZE = "categorize"
    ASSIGN = "assign"
    ESCALATE = "escalate"
    SNOOZE = "snooze"
    CREATE_TASK = "create_task"
    CREATE_EVENT = "create_event"
    NOTIFY = "notify"
    ARCHIVE = "archive"
    STAR = "star"
    LABEL = "label"


class WorkflowAutomationBuilder:
    """AI-powered email workflow automation builder."""
    
    def __init__(self):
        self.workflows = []
        self.execution_log = []
        self.template_library = self._build_template_library()
        
    def _build_template_library(self) -> Dict[str, Dict]:
        """Build a library of pre-built workflow templates."""
        return {
            'client_onboarding': {
                'name': 'Client Onboarding Flow',
                'description': 'Automate client onboarding from first contact',
                'triggers': [{'type': 'on_receive', 'condition': 'sender_domain not in known_domains'}],
                'actions': [
                    {'type': 'label', 'value': 'New Client'},
                    {'type': 'reply', 'value': 'welcome_template'},
                    {'type': 'create_task', 'value': 'Schedule onboarding call'},
                    {'type': 'assign', 'value': 'sales_team'}
                ]
            },
            'invoice_processing': {
                'name': 'Invoice Processing Flow',
                'description': 'Auto-process incoming invoices',
                'triggers': [{'type': 'on_receive', 'condition': 'subject contains "invoice"'}],
                'actions': [
                    {'type': 'label', 'value': 'Invoice'},
                    {'type': 'categorize', 'value': 'finance'},
                    {'type': 'forward', 'value': 'finance@ziontechgroup.com'},
                    {'type': 'create_task', 'value': 'Review and process invoice'}
                ]
            },
            'support_escalation': {
                'name': 'Support Escalation Flow',
                'description': 'Auto-escalate unresolved support tickets',
                'triggers': [{'type': 'on_no_response', 'condition': 'hours > 24'}],
                'actions': [
                    {'type': 'escalate', 'value': 'manager'},
                    {'type': 'label', 'value': 'Escalated'},
                    {'type': 'notify', 'value': 'team_lead'}
                ]
            },
            'meeting_followup': {
                'name': 'Meeting Follow-up Flow',
                'description': 'Auto-follow up after meetings',
                'triggers': [{'type': 'on_receive', 'condition': 'subject contains "meeting" OR "call"'}],
                'actions': [
                    {'type': 'label', 'value': 'Meeting'},
                    {'type': 'create_task', 'value': 'Send meeting follow-up'},
                    {'type': 'create_event', 'value': 'Follow-up reminder +3days'}
                ]
            },
            'vip_handling': {
                'name': 'VIP Client Handling',
                'description': 'Priority handling for VIP clients',
                'triggers': [{'type': 'on_receive', 'condition': 'sender in vip_list'}],
                'actions': [
                    {'type': 'star', 'value': True},
                    {'type': 'label', 'value': 'VIP'},
                    {'type': 'notify', 'value': 'account_manager'},
                    {'type': 'reply', 'value': 'vip_acknowledgment'}
                ]
            }
        }
    
    def create_workflow(self, name: str, description: str = "") -> Dict[str, Any]:
        """Create a new workflow."""
        workflow = {
            'id': f"wf_{len(self.workflows) + 1:04d}",
            'name': name,
            'description': description,
            'created_at': datetime.now().isoformat(),
            'enabled': True,
            'triggers': [],
            'conditions': [],
            'actions': [],
            'execution_count': 0,
            'last_executed': None,
            'success_rate': 0.0
        }
        self.workflows.append(workflow)
        return workflow
    
    def add_trigger(self, workflow_id: str, trigger_type: str, condition: str) -> Dict[str, Any]:
        """Add a trigger to a workflow."""
        workflow = self._find_workflow(workflow_id)
        if not workflow:
            return {'error': 'Workflow not found'}
        
        trigger = {
            'type': trigger_type,
            'condition': condition,
            'created_at': datetime.now().isoformat()
        }
        workflow['triggers'].append(trigger)
        return {'success': True, 'trigger': trigger}
    
    def add_action(self, workflow_id: str, action_type: str, value: Any, order: int = 0) -> Dict[str, Any]:
        """Add an action to a workflow."""
        workflow = self._find_workflow(workflow_id)
        if not workflow:
            return {'error': 'Workflow not found'}
        
        action = {
            'type': action_type,
            'value': value,
            'order': order or len(workflow['actions']),
            'created_at': datetime.now().isoformat()
        }
        workflow['actions'].append(action)
        workflow['actions'].sort(key=lambda x: x['order'])
        return {'success': True, 'action': action}
    
    def add_condition(self, workflow_id: str, field: str, operator: str, value: Any) -> Dict[str, Any]:
        """Add a condition to a workflow."""
        workflow = self._find_workflow(workflow_id)
        if not workflow:
            return {'error': 'Workflow not found'}
        
        condition = {
            'field': field,
            'operator': operator,
            'value': value,
            'created_at': datetime.now().isoformat()
        }
        workflow['conditions'].append(condition)
        return {'success': True, 'condition': condition}
    
    def execute_workflows(self, email: Dict[str, Any], event_type: str = 'on_receive') -> List[Dict[str, Any]]:
        """Execute all matching workflows for an email."""
        results = []
        
        for workflow in self.workflows:
            if not workflow['enabled']:
                continue
            
            # Check triggers
            trigger_matched = any(
                t['type'] == event_type for t in workflow['triggers']
            )
            
            if not trigger_matched:
                continue
            
            # Check conditions
            conditions_met = all(
                self._evaluate_condition(c, email) for c in workflow['conditions']
            ) if workflow['conditions'] else True
            
            if not conditions_met:
                continue
            
            # Execute actions
            action_results = []
            for action in workflow['actions']:
                result = self._execute_action(action, email)
                action_results.append(result)
            
            # Update workflow stats
            workflow['execution_count'] += 1
            workflow['last_executed'] = datetime.now().isoformat()
            
            execution_record = {
                'workflow_id': workflow['id'],
                'workflow_name': workflow['name'],
                'email_subject': email.get('subject', ''),
                'executed_at': datetime.now().isoformat(),
                'actions_executed': len(action_results),
                'results': action_results
            }
            
            self.execution_log.append(execution_record)
            results.append(execution_record)
        
        return results
    
    def _evaluate_condition(self, condition: Dict, email: Dict[str, Any]) -> bool:
        """Evaluate a condition against an email."""
        field = condition['field']
        operator = condition['operator']
        value = condition['value']
        
        email_value = email.get(field, '')
        
        if operator == 'contains':
            return value.lower() in str(email_value).lower()
        elif operator == 'equals':
            return str(email_value).lower() == str(value).lower()
        elif operator == 'not_contains':
            return value.lower() not in str(email_value).lower()
        elif operator == 'starts_with':
            return str(email_value).lower().startswith(str(value).lower())
        elif operator == 'ends_with':
            return str(email_value).lower().endswith(str(value).lower())
        elif operator == 'regex':
            return bool(re.search(value, str(email_value), re.IGNORECASE))
        elif operator == 'in':
            return str(email_value).lower() in [v.lower() for v in value]
        
        return False
    
    def _execute_action(self, action: Dict, email: Dict[str, Any]) -> Dict[str, Any]:
        """Execute a single action."""
        action_type = action['type']
        value = action['value']
        
        result = {
            'action_type': action_type,
            'value': value,
            'status': 'success',
            'executed_at': datetime.now().isoformat()
        }
        
        # Simulate action execution
        if action_type == 'forward':
            result['message'] = f"Forwarded to {value}"
        elif action_type == 'reply':
            result['message'] = f"Replied with template: {value}"
        elif action_type == 'categorize':
            result['message'] = f"Categorized as: {value}"
        elif action_type == 'assign':
            result['message'] = f"Assigned to: {value}"
        elif action_type == 'escalate':
            result['message'] = f"Escalated to: {value}"
        elif action_type == 'snooze':
            result['message'] = f"Snoozed for: {value}"
        elif action_type == 'create_task':
            result['message'] = f"Task created: {value}"
        elif action_type == 'create_event':
            result['message'] = f"Event created: {value}"
        elif action_type == 'notify':
            result['message'] = f"Notified: {value}"
        elif action_type == 'archive':
            result['message'] = "Email archived"
        elif action_type == 'star':
            result['message'] = "Email starred"
        elif action_type == 'label':
            result['message'] = f"Label applied: {value}"
        
        return result
    
    def _find_workflow(self, workflow_id: str) -> Optional[Dict]:
        """Find a workflow by ID."""
        for workflow in self.workflows:
            if workflow['id'] == workflow_id:
                return workflow
        return None
    
    def get_workflow_stats(self) -> Dict[str, Any]:
        """Get workflow execution statistics."""
        total_executions = sum(w['execution_count'] for w in self.workflows)
        
        return {
            'total_workflows': len(self.workflows),
            'enabled_workflows': sum(1 for w in self.workflows if w['enabled']),
            'total_executions': total_executions,
            'recent_executions': self.execution_log[-10:],
            'top_workflows': sorted(
                self.workflows,
                key=lambda w: w['execution_count'],
                reverse=True
            )[:5]
        }
    
    def import_template(self, template_name: str) -> Dict[str, Any]:
        """Import a workflow template."""
        if template_name not in self.template_library:
            return {'error': f'Template "{template_name}" not found'}
        
        template = self.template_library[template_name]
        workflow = self.create_workflow(template['name'], template['description'])
        
        for trigger in template['triggers']:
            self.add_trigger(workflow['id'], trigger['type'], trigger['condition'])
        
        for action in template['actions']:
            self.add_action(workflow['id'], action['type'], action.get('value', ''))
        
        return {'success': True, 'workflow': workflow}


def process_email_workflows(email_data: Dict[str, Any], workflows: List[Dict] = None) -> Dict[str, Any]:
    """Main entry point for workflow automation processing."""
    builder = WorkflowAutomationBuilder()
    
    # Import default templates
    for template_name in builder.template_library:
        builder.import_template(template_name)
    
    # Execute workflows
    results = builder.execute_workflows(email_data)
    stats = builder.get_workflow_stats()
    
    return {
        'executed_workflows': len(results),
        'results': results,
        'stats': stats
    }


if __name__ == '__main__':
    test_email = {
        'from': 'newclient@company.com',
        'subject': 'Interested in your services',
        'body': 'Hi, I would like to learn more about your AI services.',
        'sender_domain': 'company.com'
    }
    
    result = process_email_workflows(test_email)
    print(json.dumps(result, indent=2, default=str))

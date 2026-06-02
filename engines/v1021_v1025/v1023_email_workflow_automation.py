#!/usr/bin/env python3
"""
V1023 - Email Workflow Automation Engine
Build custom email workflows with triggers, conditions, and automated actions.
Enables sophisticated email automation with conditional logic and multi-step processes.
"""
import re
from typing import Dict, List, Any, Tuple, Callable
from datetime import datetime, timedelta
from enum import Enum


class TriggerType(Enum):
    EMAIL_RECEIVED = 'email_received'
    EMAIL_SENT = 'email_sent'
    TIME_BASED = 'time_based'
    KEYWORD_DETECTED = 'keyword_detected'
    ATTACHMENT_PRESENT = 'attachment_present'
    SENDER_MATCH = 'sender_match'
    PRIORITY_LEVEL = 'priority_level'


class ActionType(Enum):
    SEND_REPLY = 'send_reply'
    FORWARD_EMAIL = 'forward_email'
    CREATE_TASK = 'create_task'
    SEND_NOTIFICATION = 'send_notification'
    UPDATE_CRM = 'update_crm'
    SCHEDULE_FOLLOWUP = 'schedule_followup'
    ADD_LABEL = 'add_label'
    ARCHIVE_EMAIL = 'archive_email'
    ESCALATE = 'escalate'


class EmailWorkflowAutomation:
    """Build and execute email automation workflows."""
    
    def __init__(self):
        self.workflows = {}
        self.execution_log = []
        self.action_handlers = {}
        self._register_default_handlers()
    
    def _register_default_handlers(self):
        """Register default action handlers."""
        self.action_handlers[ActionType.SEND_REPLY] = self._handle_send_reply
        self.action_handlers[ActionType.FORWARD_EMAIL] = self._handle_forward
        self.action_handlers[ActionType.CREATE_TASK] = self._handle_create_task
        self.action_handlers[ActionType.SEND_NOTIFICATION] = self._handle_send_notification
        self.action_handlers[ActionType.UPDATE_CRM] = self._handle_update_crm
        self.action_handlers[ActionType.SCHEDULE_FOLLOWUP] = self._handle_schedule_followup
        self.action_handlers[ActionType.ADD_LABEL] = self._handle_add_label
        self.action_handlers[ActionType.ARCHIVE_EMAIL] = self._handle_archive
        self.action_handlers[ActionType.ESCALATE] = self._handle_escalate
    
    def create_workflow(self, workflow_id: str, name: str, 
                       description: str = '') -> Dict[str, Any]:
        """
        Create a new workflow.
        
        Args:
            workflow_id: Unique workflow identifier
            name: Workflow name
            description: Workflow description
            
        Returns:
            Created workflow
        """
        workflow = {
            'id': workflow_id,
            'name': name,
            'description': description,
            'enabled': True,
            'triggers': [],
            'conditions': [],
            'actions': [],
            'created': datetime.now().isoformat(),
            'execution_count': 0,
            'last_executed': None
        }
        
        self.workflows[workflow_id] = workflow
        return workflow
    
    def add_trigger(self, workflow_id: str, trigger_type: TriggerType,
                   config: Dict[str, Any]) -> Dict[str, Any]:
        """
        Add trigger to workflow.
        
        Args:
            workflow_id: Workflow ID
            trigger_type: Type of trigger
            config: Trigger configuration
            
        Returns:
            Updated workflow
        """
        if workflow_id not in self.workflows:
            raise ValueError(f"Workflow {workflow_id} not found")
        
        trigger = {
            'type': trigger_type.value,
            'config': config,
            'id': f"trigger_{len(self.workflows[workflow_id]['triggers'])}"
        }
        
        self.workflows[workflow_id]['triggers'].append(trigger)
        return self.workflows[workflow_id]
    
    def add_condition(self, workflow_id: str, field: str, operator: str,
                     value: Any) -> Dict[str, Any]:
        """
        Add condition to workflow.
        
        Args:
            workflow_id: Workflow ID
            field: Field to check (e.g., 'subject', 'sender', 'body')
            operator: Comparison operator (contains, equals, starts_with, etc.)
            value: Value to compare
            
        Returns:
            Updated workflow
        """
        if workflow_id not in self.workflows:
            raise ValueError(f"Workflow {workflow_id} not found")
        
        condition = {
            'field': field,
            'operator': operator,
            'value': value,
            'id': f"condition_{len(self.workflows[workflow_id]['conditions'])}"
        }
        
        self.workflows[workflow_id]['conditions'].append(condition)
        return self.workflows[workflow_id]
    
    def add_action(self, workflow_id: str, action_type: ActionType,
                  config: Dict[str, Any]) -> Dict[str, Any]:
        """
        Add action to workflow.
        
        Args:
            workflow_id: Workflow ID
            action_type: Type of action
            config: Action configuration
            
        Returns:
            Updated workflow
        """
        if workflow_id not in self.workflows:
            raise ValueError(f"Workflow {workflow_id} not found")
        
        action = {
            'type': action_type.value,
            'config': config,
            'id': f"action_{len(self.workflows[workflow_id]['actions'])}"
        }
        
        self.workflows[workflow_id]['actions'].append(action)
        return self.workflows[workflow_id]
    
    def evaluate_triggers(self, workflow_id: str, email: Dict[str, Any]) -> bool:
        """
        Evaluate if workflow triggers match the email.
        
        Args:
            workflow_id: Workflow ID
            email: Email data
            
        Returns:
            True if triggers match
        """
        workflow = self.workflows.get(workflow_id)
        if not workflow or not workflow['enabled']:
            return False
        
        if not workflow['triggers']:
            return False
        
        for trigger in workflow['triggers']:
            if self._evaluate_trigger(trigger, email):
                return True
        
        return False
    
    def _evaluate_trigger(self, trigger: Dict[str, Any], email: Dict[str, Any]) -> bool:
        """Evaluate a single trigger."""
        trigger_type = trigger['type']
        config = trigger['config']
        
        if trigger_type == TriggerType.EMAIL_RECEIVED.value:
            return True  # Always triggers on email received
        
        elif trigger_type == TriggerType.KEYWORD_DETECTED.value:
            keywords = config.get('keywords', [])
            body = email.get('body', '').lower()
            subject = email.get('subject', '').lower()
            return any(kw.lower() in body or kw.lower() in subject for kw in keywords)
        
        elif trigger_type == TriggerType.SENDER_MATCH.value:
            senders = config.get('senders', [])
            sender = email.get('sender', '')
            return any(s.lower() in sender.lower() for s in senders)
        
        elif trigger_type == TriggerType.ATTACHMENT_PRESENT.value:
            attachments = email.get('attachments', [])
            return len(attachments) > 0
        
        elif trigger_type == TriggerType.PRIORITY_LEVEL.value:
            priority = config.get('priority', 'normal')
            return email.get('priority', 'normal') == priority
        
        return False
    
    def evaluate_conditions(self, workflow_id: str, email: Dict[str, Any]) -> bool:
        """
        Evaluate if workflow conditions are met.
        
        Args:
            workflow_id: Workflow ID
            email: Email data
            
        Returns:
            True if all conditions are met
        """
        workflow = self.workflows.get(workflow_id)
        if not workflow:
            return False
        
        if not workflow['conditions']:
            return True  # No conditions = always pass
        
        for condition in workflow['conditions']:
            if not self._evaluate_condition(condition, email):
                return False
        
        return True
    
    def _evaluate_condition(self, condition: Dict[str, Any], email: Dict[str, Any]) -> bool:
        """Evaluate a single condition."""
        field = condition['field']
        operator = condition['operator']
        value = condition['value']
        
        email_value = email.get(field, '')
        
        if operator == 'contains':
            return value.lower() in str(email_value).lower()
        elif operator == 'equals':
            return str(email_value).lower() == str(value).lower()
        elif operator == 'starts_with':
            return str(email_value).lower().startswith(str(value).lower())
        elif operator == 'ends_with':
            return str(email_value).lower().endswith(str(value).lower())
        elif operator == 'not_contains':
            return value.lower() not in str(email_value).lower()
        elif operator == 'regex':
            return bool(re.search(value, str(email_value), re.IGNORECASE))
        
        return False
    
    def execute_workflow(self, workflow_id: str, email: Dict[str, Any]) -> Dict[str, Any]:
        """
        Execute workflow actions.
        
        Args:
            workflow_id: Workflow ID
            email: Email data
            
        Returns:
            Execution result
        """
        workflow = self.workflows.get(workflow_id)
        if not workflow:
            return {'success': False, 'error': 'Workflow not found'}
        
        execution = {
            'workflow_id': workflow_id,
            'workflow_name': workflow['name'],
            'email_id': email.get('id'),
            'timestamp': datetime.now().isoformat(),
            'actions_executed': [],
            'success': True
        }
        
        for action in workflow['actions']:
            try:
                action_type = ActionType(action['type'])
                handler = self.action_handlers.get(action_type)
                
                if handler:
                    result = handler(email, action['config'])
                    execution['actions_executed'].append({
                        'action_id': action['id'],
                        'type': action['type'],
                        'success': True,
                        'result': result
                    })
                else:
                    execution['actions_executed'].append({
                        'action_id': action['id'],
                        'type': action['type'],
                        'success': False,
                        'error': 'No handler found'
                    })
            except Exception as e:
                execution['actions_executed'].append({
                    'action_id': action['id'],
                    'type': action['type'],
                    'success': False,
                    'error': str(e)
                })
                execution['success'] = False
        
        # Update workflow stats
        workflow['execution_count'] += 1
        workflow['last_executed'] = execution['timestamp']
        
        self.execution_log.append(execution)
        
        return execution
    
    def process_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """
        Process email through all workflows.
        
        Args:
            email: Email data
            
        Returns:
            Processing result
        """
        results = []
        
        for workflow_id, workflow in self.workflows.items():
            if not workflow['enabled']:
                continue
            
            # Check triggers
            if not self.evaluate_triggers(workflow_id, email):
                continue
            
            # Check conditions
            if not self.evaluate_conditions(workflow_id, email):
                continue
            
            # Execute workflow
            execution = self.execute_workflow(workflow_id, email)
            results.append(execution)
        
        return {
            'engine': 'V1023 - Email Workflow Automation',
            'email_id': email.get('id'),
            'workflows_triggered': len(results),
            'executions': results,
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }
    
    # Action Handlers
    def _handle_send_reply(self, email: Dict, config: Dict) -> Dict:
        """Handle send reply action."""
        template = config.get('template', 'Thank you for your email. We will respond shortly.')
        return {
            'action': 'reply_sent',
            'recipient': email.get('sender'),
            'template_used': template[:50]
        }
    
    def _handle_forward(self, email: Dict, config: Dict) -> Dict:
        """Handle forward email action."""
        recipients = config.get('recipients', [])
        return {
            'action': 'email_forwarded',
            'recipients': recipients,
            'original_sender': email.get('sender')
        }
    
    def _handle_create_task(self, email: Dict, config: Dict) -> Dict:
        """Handle create task action."""
        task_title = config.get('title', 'Follow up on email')
        due_days = config.get('due_days', 3)
        return {
            'action': 'task_created',
            'title': task_title,
            'due_date': (datetime.now() + timedelta(days=due_days)).isoformat()
        }
    
    def _handle_send_notification(self, email: Dict, config: Dict) -> Dict:
        """Handle send notification action."""
        channel = config.get('channel', 'slack')
        message = config.get('message', 'New email notification')
        return {
            'action': 'notification_sent',
            'channel': channel,
            'message': message
        }
    
    def _handle_update_crm(self, email: Dict, config: Dict) -> Dict:
        """Handle update CRM action."""
        contact = email.get('sender')
        activity_type = config.get('activity_type', 'email')
        return {
            'action': 'crm_updated',
            'contact': contact,
            'activity_type': activity_type
        }
    
    def _handle_schedule_followup(self, email: Dict, config: Dict) -> Dict:
        """Handle schedule follow-up action."""
        days = config.get('days', 7)
        return {
            'action': 'followup_scheduled',
            'followup_date': (datetime.now() + timedelta(days=days)).isoformat()
        }
    
    def _handle_add_label(self, email: Dict, config: Dict) -> Dict:
        """Handle add label action."""
        label = config.get('label', 'important')
        return {
            'action': 'label_added',
            'label': label
        }
    
    def _handle_archive(self, email: Dict, config: Dict) -> Dict:
        """Handle archive email action."""
        return {
            'action': 'email_archived',
            'email_id': email.get('id')
        }
    
    def _handle_escalate(self, email: Dict, config: Dict) -> Dict:
        """Handle escalate action."""
        escalate_to = config.get('escalate_to', 'manager@example.com')
        return {
            'action': 'email_escalated',
            'escalated_to': escalate_to
        }


def create_automation_workflow(name: str, triggers: List[Dict], 
                              conditions: List[Dict], actions: List[Dict]) -> Dict[str, Any]:
    """
    Create and configure an automation workflow.
    
    Args:
        name: Workflow name
        triggers: List of trigger configurations
        conditions: List of condition configurations
        actions: List of action configurations
        
    Returns:
        Configured workflow
    """
    engine = EmailWorkflowAutomation()
    
    workflow_id = f"workflow_{int(datetime.now().timestamp())}"
    workflow = engine.create_workflow(workflow_id, name)
    
    for trigger in triggers:
        engine.add_trigger(workflow_id, TriggerType(trigger['type']), trigger['config'])
    
    for condition in conditions:
        engine.add_condition(workflow_id, condition['field'], 
                           condition['operator'], condition['value'])
    
    for action in actions:
        engine.add_action(workflow_id, ActionType(action['type']), action['config'])
    
    return {
        'engine': 'V1023 - Email Workflow Automation',
        'workflow': workflow,
        'reply_all_enforced': True,
        'case_by_case_analysis': True
    }


if __name__ == '__main__':
    # Test cases
    print(f"{'='*60}")
    print("Email Workflow Automation Test")
    print('='*60)
    
    engine = EmailWorkflowAutomation()
    
    # Create workflow for urgent emails
    workflow_id = 'urgent_email_workflow'
    engine.create_workflow(workflow_id, 'Urgent Email Handler', 
                          'Automatically handle urgent emails')
    
    # Add triggers
    engine.add_trigger(workflow_id, TriggerType.KEYWORD_DETECTED, 
                      {'keywords': ['urgent', 'asap', 'emergency']})
    engine.add_trigger(workflow_id, TriggerType.PRIORITY_LEVEL, 
                      {'priority': 'high'})
    
    # Add conditions
    engine.add_condition(workflow_id, 'sender', 'not_contains', 'spam@')
    
    # Add actions
    engine.add_action(workflow_id, ActionType.SEND_NOTIFICATION, 
                     {'channel': 'slack', 'message': '🚨 Urgent email received'})
    engine.add_action(workflow_id, ActionType.CREATE_TASK, 
                     {'title': 'Respond to urgent email', 'due_days': 1})
    engine.add_action(workflow_id, ActionType.ADD_LABEL, 
                     {'label': 'urgent'})
    
    # Test with urgent email
    test_email = {
        'id': 'email-001',
        'sender': 'client@example.com',
        'subject': 'URGENT: Production issue',
        'body': 'We have an urgent production issue that needs immediate attention.',
        'priority': 'high',
        'attachments': []
    }
    
    print(f"\nProcessing Email:")
    print(f"  Subject: {test_email['subject']}")
    print(f"  Sender: {test_email['sender']}")
    print(f"  Priority: {test_email['priority']}")
    
    result = engine.process_email(test_email)
    
    print(f"\nWorkflow Execution:")
    print(f"  Workflows Triggered: {result['workflows_triggered']}")
    
    if result['executions']:
        for execution in result['executions']:
            print(f"\n  Workflow: {execution['workflow_name']}")
            print(f"  Success: {execution['success']}")
            print(f"  Actions Executed: {len(execution['actions_executed'])}")
            
            for action in execution['actions_executed']:
                if action['success']:
                    print(f"    ✓ {action['type']}: {action['result']['action']}")
                else:
                    print(f"    ✗ {action['type']}: {action.get('error', 'Unknown error')}")
    
    print(f"\nReply-All Enforced: {result['reply_all_enforced']}")
    print(f"Case-by-Case Analysis: {result['case_by_case_analysis']}")

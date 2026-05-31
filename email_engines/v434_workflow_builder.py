#!/usr/bin/env python3
"""
V434: AI Email Workflow Builder
Creates visual automation workflows for email sequences, triggers, and actions.
Case-by-case analysis.
Enforces reply-all for multi-recipient workflow emails.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Optional


class V434WorkflowBuilder:
    """Builds and optimizes email automation workflows"""
    
    TRIGGER_TYPES = {
        "email_received": {
            "description": "Trigger when email is received",
            "conditions": ["sender", "subject", "keywords", "time"]
        },
        "email_opened": {
            "description": "Trigger when email is opened",
            "conditions": ["recipient", "time_range"]
        },
        "email_clicked": {
            "description": "Trigger when link is clicked",
            "conditions": ["link_url", "recipient"]
        },
        "no_response": {
            "description": "Trigger when no response after X days",
            "conditions": ["days", "original_email"]
        },
        "specific_date": {
            "description": "Trigger on specific date/time",
            "conditions": ["date", "time", "timezone"]
        },
        "tag_added": {
            "description": "Trigger when tag is added to contact",
            "conditions": ["tag_name", "contact"]
        }
    }
    
    ACTION_TYPES = {
        "send_email": {
            "description": "Send an email",
            "parameters": ["template", "recipient", "delay"]
        },
        "wait": {
            "description": "Wait for specified time",
            "parameters": ["duration", "unit"]
        },
        "add_tag": {
            "description": "Add tag to contact",
            "parameters": ["tag_name", "contact"]
        },
        "remove_tag": {
            "description": "Remove tag from contact",
            "parameters": ["tag_name", "contact"]
        },
        "update_field": {
            "description": "Update contact field",
            "parameters": ["field_name", "value", "contact"]
        },
        "notify": {
            "description": "Send notification to team",
            "parameters": ["message", "recipients", "channel"]
        },
        "conditional": {
            "description": "Conditional branch",
            "parameters": ["condition", "if_true", "if_false"]
        }
    }
    
    WORKFLOW_TEMPLATES = {
        "welcome_series": {
            "name": "Welcome Email Series",
            "triggers": ["email_received"],
            "actions": ["send_email", "wait", "send_email", "wait", "send_email"],
            "description": "3-email welcome sequence for new subscribers"
        },
        "follow_up_sequence": {
            "name": "Follow-up Sequence",
            "triggers": ["no_response"],
            "actions": ["wait", "send_email", "wait", "send_email"],
            "description": "Automatic follow-up for non-responders"
        },
        "lead_nurturing": {
            "name": "Lead Nurturing",
            "triggers": ["tag_added"],
            "actions": ["send_email", "wait", "conditional", "send_email"],
            "description": "Nurture leads based on engagement"
        },
        "customer_onboarding": {
            "name": "Customer Onboarding",
            "triggers": ["tag_added"],
            "actions": ["send_email", "wait", "send_email", "wait", "notify"],
            "description": "Guide new customers through onboarding"
        }
    }
    
    def analyze_email_for_workflow(self, email: Dict) -> Dict:
        """Analyze email to suggest workflow triggers"""
        subject = email.get('subject', '').lower()
        body = email.get('body', '').lower()
        text = f"{subject} {body}"
        
        triggers_suggested = []
        
        # Check for workflow patterns
        if "welcome" in text or "new subscriber" in text:
            triggers_suggested.append("welcome_series")
        
        if "follow up" in text or "no response" in text:
            triggers_suggested.append("follow_up_sequence")
        
        if "lead" in text or "prospect" in text:
            triggers_suggested.append("lead_nurturing")
        
        if "customer" in text or "onboarding" in text:
            triggers_suggested.append("customer_onboarding")
        
        # Check for time-based patterns
        if re.search(r'\d+\s*days?', text):
            triggers_suggested.append("no_response")
        
        return {
            "suggested_workflows": triggers_suggested,
            "detected_patterns": self._detect_patterns(text)
        }
    
    def _detect_patterns(self, text: str) -> List[str]:
        """Detect workflow patterns in text"""
        patterns = []
        
        # Time patterns
        if re.search(r'\d+\s*(?:day|week|month)s?', text):
            patterns.append("time_based")
        
        # Conditional patterns
        if re.search(r'if\s+.*then', text):
            patterns.append("conditional")
        
        # Sequence patterns
        if re.search(r'(?:first|then|next|finally)', text):
            patterns.append("sequence")
        
        # Repetition patterns
        if re.search(r'every\s+\d+', text):
            patterns.append("recurring")
        
        return patterns
    
    def build_workflow(self, requirements: Dict) -> Dict:
        """Build workflow from requirements"""
        workflow_type = requirements.get('type', 'custom')
        
        # Get template if available
        if workflow_type in self.WORKFLOW_TEMPLATES:
            template = self.WORKFLOW_TEMPLATES[workflow_type]
            workflow = self._create_workflow_from_template(template, requirements)
        else:
            workflow = self._create_custom_workflow(requirements)
        
        # Validate workflow
        validation = self._validate_workflow(workflow)
        
        return {
            "workflow": workflow,
            "validation": validation,
            "estimated_contacts": requirements.get('contact_count', 0),
            "estimated_duration": self._estimate_duration(workflow)
        }
    
    def _create_workflow_from_template(self, template: Dict, requirements: Dict) -> Dict:
        """Create workflow from template"""
        workflow = {
            "name": template["name"],
            "description": template["description"],
            "status": "draft",
            "created_at": datetime.now().isoformat(),
            "triggers": [],
            "actions": []
        }
        
        # Add triggers
        for trigger_type in template["triggers"]:
            workflow["triggers"].append({
                "type": trigger_type,
                "config": requirements.get('trigger_config', {})
            })
        
        # Add actions
        for action_type in template["actions"]:
            action_config = self._get_action_config(action_type, requirements)
            workflow["actions"].append({
                "type": action_type,
                "config": action_config
            })
        
        return workflow
    
    def _create_custom_workflow(self, requirements: Dict) -> Dict:
        """Create custom workflow"""
        return {
            "name": requirements.get('name', 'Custom Workflow'),
            "description": requirements.get('description', ''),
            "status": "draft",
            "created_at": datetime.now().isoformat(),
            "triggers": requirements.get('triggers', []),
            "actions": requirements.get('actions', [])
        }
    
    def _get_action_config(self, action_type: str, requirements: Dict) -> Dict:
        """Get action configuration"""
        if action_type == "wait":
            return {"duration": 2, "unit": "days"}
        elif action_type == "send_email":
            return {"template_id": requirements.get('template_id'), "delay": 0}
        elif action_type == "notify":
            return {"message": "Workflow completed", "recipients": requirements.get('notify_recipients', [])}
        return {}
    
    def _validate_workflow(self, workflow: Dict) -> Dict:
        """Validate workflow structure"""
        errors = []
        warnings = []
        
        # Check for triggers
        if not workflow.get('triggers'):
            errors.append("Workflow must have at least one trigger")
        
        # Check for actions
        if not workflow.get('actions'):
            errors.append("Workflow must have at least one action")
        
        # Check for infinite loops
        if self._detect_infinite_loop(workflow.get('actions', [])):
            errors.append("Infinite loop detected in workflow")
        
        # Check for missing configurations
        for action in workflow.get('actions', []):
            if action.get('type') == "send_email" and not action.get('config', {}).get('template_id'):
                warnings.append("Send email action missing template configuration")
        
        return {
            "valid": len(errors) == 0,
            "errors": errors,
            "warnings": warnings
        }
    
    def _detect_infinite_loop(self, actions: List[Dict]) -> bool:
        """Detect infinite loops in workflow"""
        # Simplified check - look for wait actions without conditions
        wait_count = sum(1 for action in actions if action.get('type') == 'wait')
        conditional_count = sum(1 for action in actions if action.get('type') == 'conditional')
        
        # If many waits without conditionals, might be infinite
        return wait_count > 5 and conditional_count == 0
    
    def _estimate_duration(self, workflow: Dict) -> Dict:
        """Estimate workflow duration"""
        total_days = 0
        
        for action in workflow.get('actions', []):
            if action.get('type') == 'wait':
                duration = action.get('config', {}).get('duration', 1)
                unit = action.get('config', {}).get('unit', 'days')
                
                if unit == 'hours':
                    total_days += duration / 24
                elif unit == 'days':
                    total_days += duration
                elif unit == 'weeks':
                    total_days += duration * 7
        
        return {
            "total_days": round(total_days, 1),
            "estimated_completion": (datetime.now() + __import__('datetime').timedelta(days=total_days)).isoformat()
        }
    
    def process(self, email: Dict, requirements: Dict = None) -> Dict:
        """Process email and build workflow"""
        recipients = email.get('to', [])
        cc = email.get('cc', [])
        
        # Analyze email for workflow suggestions
        analysis = self.analyze_email_for_workflow(email)
        
        # Build workflow if requirements provided
        if requirements:
            workflow_result = self.build_workflow(requirements)
        else:
            # Create default workflow based on analysis
            default_requirements = {
                'type': analysis['suggested_workflows'][0] if analysis['suggested_workflows'] else 'custom',
                'name': 'Auto-generated Workflow',
                'contact_count': len(recipients) + len(cc)
            }
            workflow_result = self.build_workflow(default_requirements)
        
        # Check reply-all
        all_recipients = list(set(recipients + cc))
        should_reply_all = len(all_recipients) > 1
        
        result = {
            "engine": "V434 Workflow Builder",
            "timestamp": datetime.now().isoformat(),
            "email_analysis": analysis,
            "workflow": workflow_result,
            "available_templates": list(self.WORKFLOW_TEMPLATES.keys()),
            "reply_all_enforced": should_reply_all,
            "reply_all_reason": f"Workflow affects {len(all_recipients)} recipients" if should_reply_all else "Single recipient workflow"
        }
        
        return result


if __name__ == "__main__":
    test_email = {
        "sender": "marketing@company.com",
        "subject": "Set up welcome email series",
        "body": "Hi team,\n\nWe need to set up a 3-email welcome series for new subscribers. The first email should go out immediately, then wait 2 days, send the second email, wait 3 days, and send the final email.\n\nThanks,\nMarketing",
        "to": ["automation@company.com"],
        "cc": ["manager@company.com"]
    }
    
    builder = V434WorkflowBuilder()
    result = builder.process(test_email)
    print(json.dumps(result, indent=2))

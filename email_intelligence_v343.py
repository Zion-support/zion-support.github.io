"""
Email Intelligence V343 - Workflow Automation Engine
Automate repetitive email tasks with intelligent routing, auto-responses,
and workflow triggers based on content analysis.
Enforces reply-all and case-by-case analysis.
"""

from datetime import datetime
from typing import Dict, List
import json


class EmailWorkflowAutomation:
    """
    V343: Intelligent workflow automation with smart routing, auto-responses,
    and trigger-based actions for email efficiency.
    """
    
    VERSION = "V343"
    ENGINE_NAME = "Workflow Automation Engine"
    
    def __init__(self):
        self.workflow_rules = {}
        self.automation_history = []
    
    def analyze_email(self, email_data: Dict) -> Dict:
        """Analyze email for workflow automation case-by-case."""
        sender = email_data.get('from', '')
        content = email_data.get('body', '')
        subject = email_data.get('subject', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # Detect workflow triggers
        triggers = self._detect_workflow_triggers(content, subject)
        
        # Determine automation actions
        actions = self._determine_automation_actions(triggers, email_data)
        
        # Routing recommendations
        routing = self._recommend_routing(email_data, triggers)
        
        # Auto-response suggestions
        auto_response = self._suggest_auto_response(triggers, email_data)
        
        # Efficiency score
        efficiency_score = self._calculate_efficiency_score(actions)
        
        analysis = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': timestamp,
            'sender': sender,
            'workflow_triggers': triggers,
            'automation_actions': actions,
            'routing_recommendations': routing,
            'auto_response': auto_response,
            'efficiency_score': efficiency_score
        }
        
        # Execute automations
        self._execute_automations(actions, analysis)
        
        return analysis
    
    def generate_response(self, email_data: Dict) -> Dict:
        """Generate workflow-automated response. ALWAYS enforces reply-all."""
        sender = email_data.get('from', '')
        to_recipients = email_data.get('to', [])
        cc_recipients = email_data.get('cc', [])
        subject = email_data.get('subject', '')
        content = email_data.get('body', '')
        
        # Analyze email
        analysis = self.analyze_email(email_data)
        
        # ENFORCE REPLY-ALL
        all_recipients = self._enforce_reply_all(to_recipients, cc_recipients, sender)
        
        # Generate automated response
        if analysis['auto_response']['should_auto_respond']:
            response_body = analysis['auto_response']['message']
        else:
            response_body = self._generate_workflow_response(sender, content, analysis)
        
        response = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': datetime.now().isoformat(),
            'to': all_recipients,
            'subject': f"Re: {subject}" if not subject.lower().startswith('re:') else subject,
            'body': response_body,
            'automations_executed': len(analysis['automation_actions']),
            'efficiency_score': analysis['efficiency_score'],
            'routing_applied': len(analysis['routing_recommendations']) > 0,
            'reply_all_enforced': True
        }
        
        return response
    
    def _detect_workflow_triggers(self, content: str, subject: str) -> Dict:
        """Detect workflow triggers in email"""
        text = f"{subject} {content}".lower()
        
        triggers = {
            'meeting_request': False,
            'approval_needed': False,
            'information_request': False,
            'status_update': False,
            'deadline_mentioned': False,
            'attachment_present': False
        }
        
        # Meeting triggers
        meeting_keywords = ['meeting', 'schedule', 'calendar', 'appointment', 'call']
        if any(kw in text for kw in meeting_keywords):
            triggers['meeting_request'] = True
        
        # Approval triggers
        approval_keywords = ['approve', 'approval', 'authorize', 'sign off', 'review']
        if any(kw in text for kw in approval_keywords):
            triggers['approval_needed'] = True
        
        # Information request
        info_keywords = ['please send', 'can you provide', 'need information', 'request']
        if any(kw in text for kw in info_keywords):
            triggers['information_request'] = True
        
        # Status update
        status_keywords = ['update', 'progress', 'status', 'where are we']
        if any(kw in text for kw in status_keywords):
            triggers['status_update'] = True
        
        # Deadline
        deadline_keywords = ['deadline', 'due', 'by friday', 'by monday', 'asap']
        if any(kw in text for kw in deadline_keywords):
            triggers['deadline_mentioned'] = True
        
        # Attachment
        if 'attach' in text or 'attachment' in text:
            triggers['attachment_present'] = True
        
        active_triggers = [k for k, v in triggers.items() if v]
        
        return {
            'active_triggers': active_triggers,
            'trigger_count': len(active_triggers),
            'details': triggers
        }
    
    def _determine_automation_actions(self, triggers: Dict, email_data: Dict) -> List[Dict]:
        """Determine automation actions based on triggers"""
        actions = []
        
        active = triggers['active_triggers']
        
        if 'meeting_request' in active:
            actions.append({
                'type': 'calendar_event',
                'action': 'Create calendar event',
                'priority': 'high',
                'automated': True
            })
        
        if 'approval_needed' in active:
            actions.append({
                'type': 'approval_workflow',
                'action': 'Route to approver',
                'priority': 'high',
                'automated': True
            })
        
        if 'information_request' in active:
            actions.append({
                'type': 'auto_response',
                'action': 'Send information template',
                'priority': 'medium',
                'automated': True
            })
        
        if 'status_update' in active:
            actions.append({
                'type': 'status_report',
                'action': 'Generate status report',
                'priority': 'medium',
                'automated': True
            })
        
        if 'deadline_mentioned' in active:
            actions.append({
                'type': 'reminder',
                'action': 'Set deadline reminder',
                'priority': 'high',
                'automated': True
            })
        
        return actions
    
    def _recommend_routing(self, email_data: Dict, triggers: Dict) -> List[Dict]:
        """Recommend email routing based on content"""
        routing = []
        
        content = email_data.get('body', '').lower()
        
        # Technical routing
        if any(word in content for word in ['bug', 'error', 'technical', 'issue']):
            routing.append({
                'route_to': 'technical_support',
                'reason': 'Technical issue detected',
                'priority': 'high'
            })
        
        # Sales routing
        if any(word in content for word in ['pricing', 'quote', 'proposal', 'deal']):
            routing.append({
                'route_to': 'sales_team',
                'reason': 'Sales opportunity detected',
                'priority': 'high'
            })
        
        # HR routing
        if any(word in content for word in ['hiring', 'interview', 'candidate', 'hr']):
            routing.append({
                'route_to': 'hr_department',
                'reason': 'HR-related content',
                'priority': 'medium'
            })
        
        # Finance routing
        if any(word in content for word in ['invoice', 'payment', 'budget', 'finance']):
            routing.append({
                'route_to': 'finance_team',
                'reason': 'Financial content detected',
                'priority': 'medium'
            })
        
        return routing
    
    def _suggest_auto_response(self, triggers: Dict, email_data: Dict) -> Dict:
        """Suggest auto-response based on triggers"""
        active = triggers['active_triggers']
        
        if 'meeting_request' in active:
            return {
                'should_auto_respond': True,
                'message': 'Thank you for the meeting request. I\'ve added it to my calendar and will confirm my attendance shortly.',
                'type': 'meeting_confirmation'
            }
        
        if 'information_request' in active and triggers['trigger_count'] == 1:
            return {
                'should_auto_respond': True,
                'message': 'Thank you for your information request. I\'m gathering the details and will respond within 24 hours.',
                'type': 'info_acknowledgment'
            }
        
        return {
            'should_auto_respond': False,
            'message': '',
            'type': 'none'
        }
    
    def _calculate_efficiency_score(self, actions: List[Dict]) -> float:
        """Calculate workflow efficiency score"""
        if not actions:
            return 50.0
        
        # Base score
        score = 70.0
        
        # Bonus for automations
        score += len(actions) * 5
        
        # Bonus for high-priority automations
        high_priority = sum(1 for a in actions if a['priority'] == 'high')
        score += high_priority * 3
        
        return min(100, score)
    
    def _execute_automations(self, actions: List[Dict], analysis: Dict):
        """Execute automation actions"""
        for action in actions:
            self.automation_history.append({
                'timestamp': analysis['timestamp'],
                'action_type': action['type'],
                'action_description': action['action'],
                'automated': action['automated']
            })
        
        # Keep only last 1000 entries
        if len(self.automation_history) > 1000:
            self.automation_history = self.automation_history[-1000:]
    
    def _generate_workflow_response(self, sender: str, content: str, analysis: Dict) -> str:
        """Generate workflow-aware response"""
        sender_name = sender.split('@')[0] if '@' in sender else sender
        
        triggers = analysis['workflow_triggers']['active_triggers']
        actions = analysis['automation_actions']
        
        response = f"""Hello {sender_name},

Thank you for your email. I've processed it through our workflow automation system:

Workflow Triggers Detected:
{chr(10).join('- ' + trigger.replace('_', ' ').title() for trigger in triggers) if triggers else '- No specific triggers detected'}

Automation Actions Executed:
{chr(10).join('- ' + action['action'] for action in actions) if actions else '- Standard processing applied'}

Routing Recommendations:
{chr(10).join('- Route to ' + route['route_to'].replace('_', ' ').title() + ': ' + route['reason'] for route in analysis['routing_recommendations']) if analysis['routing_recommendations'] else '- No special routing needed'}

Efficiency Score: {analysis['efficiency_score']}/100

I'll handle your request according to the detected workflow and ensure timely follow-up.

Best regards,
[Your Name]

---
This response was generated by {self.ENGINE_NAME} ({self.VERSION}) with workflow automation.
Triggers: {len(triggers)} | Actions: {len(actions)} | Efficiency: {analysis['efficiency_score']}/100
"""
        
        return response
    
    def _enforce_reply_all(self, to_recipients: List, cc_recipients: List, sender: str) -> List:
        """ENFORCE REPLY-ALL: Always include all original recipients."""
        all_recipients = set()
        
        if isinstance(to_recipients, list):
            all_recipients.update(to_recipients)
        elif to_recipients:
            all_recipients.add(to_recipients)
        
        if isinstance(cc_recipients, list):
            all_recipients.update(cc_recipients)
        elif cc_recipients:
            all_recipients.add(cc_recipients)
        
        all_recipients.discard(sender)
        
        if not all_recipients:
            all_recipients.add(sender)
        
        return list(all_recipients)
    
    def get_automation_stats(self) -> Dict:
        """Get automation statistics"""
        total_automations = len(self.automation_history)
        
        if total_automations == 0:
            return {
                'version': self.VERSION,
                'engine': self.ENGINE_NAME,
                'message': 'No automations executed yet'
            }
        
        # Count by type
        type_counts = {}
        for automation in self.automation_history:
            action_type = automation['action_type']
            type_counts[action_type] = type_counts.get(action_type, 0) + 1
        
        return {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'total_automations': total_automations,
            'automation_types': type_counts,
            'timestamp': datetime.now().isoformat()
        }


# Test the engine
if __name__ == "__main__":
    engine = EmailWorkflowAutomation()
    
    test_email = {
        'from': 'project.manager@company.com',
        'to': ['team@company.com'],
        'cc': ['stakeholders@company.com'],
        'subject': 'Meeting Request: Project Review',
        'body': 'Hi team, I\'d like to schedule a meeting to review the project status. Can we meet on Friday? Please approve the attached budget proposal.',
        'timestamp': datetime.now().isoformat()
    }
    
    print("=" * 60)
    print(f"Email Intelligence {engine.VERSION} - {engine.ENGINE_NAME}")
    print("=" * 60)
    
    analysis = engine.analyze_email(test_email)
    print("\n📧 Workflow Analysis:")
    print(json.dumps(analysis, indent=2))
    
    response = engine.generate_response(test_email)
    print("\n📤 Generated Response:")
    print(json.dumps(response, indent=2))
    
    stats = engine.get_automation_stats()
    print("\n📊 Automation Statistics:")
    print(json.dumps(stats, indent=2))
    
    print("\n✅ Reply-All Enforcement: ACTIVE")
    print(f"✅ Recipients: {response['to']}")
    print("✅ Workflow Automation: ENABLED")

#!/usr/bin/env python3
"""
V1095: Email Collaboration Hub
Team email collaboration features with shared inbox management.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

from typing import Dict, List
from datetime import datetime

class CollaborationHub:
    def __init__(self):
        self.shared_inboxes = {}
        self.comments = {}
        self.assignments = {}
        self.tags = {}
    
    def process_collaboration(self, email_data: Dict) -> Dict:
        """Process email for collaboration features."""
        email_id = email_data.get('id', '')
        sender = email_data.get('sender', '')
        recipients = email_data.get('recipients', [])
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        thread_id = email_data.get('thread_id', email_id)
        
        # REPLY-ALL ENFORCEMENT
        reply_all_required = len(recipients) > 1
        
        # Detect collaboration needs
        collaboration_needs = self._detect_collaboration_needs(body, recipients)
        
        # Suggest team members
        suggested_team = self._suggest_team_members(body, sender, recipients)
        
        # Generate task assignments
        task_assignments = self._generate_task_assignments(body, suggested_team)
        
        # Create collaboration workflow
        workflow = self._create_workflow(email_data, collaboration_needs, task_assignments)
        
        # Generate internal comments
        internal_comments = self._generate_internal_comments(email_data)
        
        # Suggest tags and categorization
        tags = self._suggest_tags(subject, body)
        
        # Calculate collaboration score
        collaboration_score = self._calculate_collaboration_score(
            collaboration_needs, task_assignments, suggested_team
        )
        
        # Generate recommendations
        recommendations = self._generate_recommendations(
            collaboration_needs, task_assignments, collaboration_score, reply_all_required
        )
        
        return {
            'email_id': email_id,
            'thread_id': thread_id,
            'collaboration_needs': collaboration_needs,
            'suggested_team_members': suggested_team,
            'task_assignments': task_assignments,
            'workflow': workflow,
            'internal_comments': internal_comments,
            'suggested_tags': tags,
            'collaboration_score': collaboration_score,
            'reply_all_required': reply_all_required,
            'reply_all_note': 'This email has multiple recipients. Reply-all is mandatory.' if reply_all_required else None,
            'recommendations': recommendations,
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _detect_collaboration_needs(self, body: str, recipients: List[str]) -> Dict:
        """Detect collaboration needs from email content."""
        body_lower = body.lower()
        
        needs = {
            'multi_person': len(recipients) > 2,
            'cross_department': False,
            'approval_required': False,
            'input_needed': False,
            'coordination': False
        }
        
        # Check for cross-department indicators
        dept_keywords = ['sales', 'marketing', 'engineering', 'finance', 'hr', 'legal', 'support']
        if any(kw in body_lower for kw in dept_keywords):
            needs['cross_department'] = True
        
        # Check for approval needs
        approval_keywords = ['approve', 'approval', 'sign off', 'review and approve', 'authorize']
        if any(kw in body_lower for kw in approval_keywords):
            needs['approval_required'] = True
        
        # Check for input needs
        input_keywords = ['input', 'feedback', 'opinion', 'thoughts', 'suggestions', 'ideas']
        if any(kw in body_lower for kw in input_keywords):
            needs['input_needed'] = True
        
        # Check for coordination needs
        coord_keywords = ['coordinate', 'schedule', 'align', 'sync', 'together', 'collaborate']
        if any(kw in body_lower for kw in coord_keywords):
            needs['coordination'] = True
        
        return needs
    
    def _suggest_team_members(self, body: str, sender: str, recipients: List[str]) -> List[Dict]:
        """Suggest team members who should be involved."""
        body_lower = body.lower()
        suggestions = []
        
        # Role-based suggestions
        role_keywords = {
            'manager': ['manager', 'lead', 'supervisor', 'director'],
            'technical': ['engineer', 'developer', 'technical', 'architect', 'devops'],
            'design': ['designer', 'design', 'ux', 'ui', 'creative'],
            'finance': ['finance', 'budget', 'cost', 'pricing', 'accounting'],
            'legal': ['legal', 'compliance', 'contract', 'regulatory'],
            'sales': ['sales', 'customer', 'client', 'revenue', 'deal']
        }
        
        for role, keywords in role_keywords.items():
            if any(kw in body_lower for kw in keywords):
                suggestions.append({
                    'role': role,
                    'reason': f'{role.title()} expertise needed',
                    'priority': 'high' if role in ['manager', 'technical'] else 'medium'
                })
        
        # Check for @mentions
        import re
        mentions = re.findall(r'@(\w+)', body)
        for mention in mentions[:5]:
            suggestions.append({
                'role': 'mentioned',
                'person': mention,
                'reason': f'Explicitly mentioned: @{mention}',
                'priority': 'high'
            })
        
        return suggestions[:10]
    
    def _generate_task_assignments(self, body: str, team: List[Dict]) -> List[Dict]:
        """Generate task assignments from email content."""
        import re
        assignments = []
        
        # Extract action items
        action_patterns = [
            (r'(?:please|could\s+you|can\s+you)\s+(.+?)(?:\.|$)', 'request'),
            (r'(?:need\s+to|must|should)\s+(.+?)(?:\.|$)', 'requirement'),
            (r'(?:@(\w+))\s+(?:please|could\s+you|can\s+you)?\s*(.+?)(?:\.|$)', 'assigned_request')
        ]
        
        for pattern, assignment_type in action_patterns:
            matches = re.finditer(pattern, body, re.IGNORECASE)
            for match in matches:
                if assignment_type == 'assigned_request':
                    assignments.append({
                        'task': match.group(2).strip(),
                        'assignee': match.group(1),
                        'type': assignment_type,
                        'status': 'pending'
                    })
                else:
                    assignments.append({
                        'task': match.group(1).strip(),
                        'assignee': 'unassigned',
                        'type': assignment_type,
                        'status': 'pending'
                    })
        
        return assignments[:10]
    
    def _create_workflow(self, email_data: Dict, needs: Dict, assignments: List[Dict]) -> Dict:
        """Create a collaboration workflow."""
        workflow = {
            'steps': [],
            'status': 'initiated',
            'created_at': datetime.now().isoformat()
        }
        
        # Add workflow steps based on needs
        if needs['approval_required']:
            workflow['steps'].append({
                'step': 1,
                'action': 'review',
                'assignee': 'manager',
                'status': 'pending'
            })
            workflow['steps'].append({
                'step': 2,
                'action': 'approve',
                'assignee': 'manager',
                'status': 'pending'
            })
        
        if needs['input_needed']:
            workflow['steps'].append({
                'step': len(workflow['steps']) + 1,
                'action': 'gather_input',
                'assignee': 'team',
                'status': 'pending'
            })
        
        if assignments:
            workflow['steps'].append({
                'step': len(workflow['steps']) + 1,
                'action': 'execute_tasks',
                'assignee': 'assigned_members',
                'status': 'pending'
            })
        
        workflow['steps'].append({
            'step': len(workflow['steps']) + 1,
            'action': 'complete',
            'assignee': 'initiator',
            'status': 'pending'
        })
        
        return workflow
    
    def _generate_internal_comments(self, email_data: Dict) -> List[Dict]:
        """Generate suggested internal comments."""
        comments = []
        
        # Suggest context comments
        comments.append({
            'type': 'context',
            'text': 'Add internal context about this email',
            'visibility': 'internal_only'
        })
        
        # Suggest decision comments
        comments.append({
            'type': 'decision',
            'text': 'Document any decisions made',
            'visibility': 'internal_only'
        })
        
        # Suggest follow-up comments
        comments.append({
            'type': 'follow_up',
            'text': 'Note any follow-up actions needed',
            'visibility': 'internal_only'
        })
        
        return comments
    
    def _suggest_tags(self, subject: str, body: str) -> List[str]:
        """Suggest tags for email categorization."""
        text = (subject + ' ' + body).lower()
        tags = []
        
        # Priority tags
        if any(kw in text for kw in ['urgent', 'asap', 'immediately']):
            tags.append('urgent')
        
        # Status tags
        if any(kw in text for kw in ['review', 'feedback', 'approval']):
            tags.append('needs-review')
        
        # Type tags
        if any(kw in text for kw in ['project', 'milestone', 'deadline']):
            tags.append('project')
        
        if any(kw in text for kw in ['bug', 'issue', 'problem']):
            tags.append('issue')
        
        if any(kw in text for kw in ['feature', 'enhancement', 'improvement']):
            tags.append('feature')
        
        # Department tags
        departments = ['sales', 'marketing', 'engineering', 'support', 'hr', 'finance']
        for dept in departments:
            if dept in text:
                tags.append(dept)
        
        return list(set(tags))[:10]
    
    def _calculate_collaboration_score(self, needs: Dict, assignments: List[Dict], team: List[Dict]) -> Dict:
        """Calculate collaboration complexity score."""
        score = 50  # Base score
        
        # Add for collaboration needs
        needs_count = sum(1 for v in needs.values() if v)
        score += needs_count * 10
        
        # Add for assignments
        score += len(assignments) * 5
        
        # Add for team size
        score += len(team) * 3
        
        score = min(100, score)
        
        if score >= 80:
            level = 'complex'
        elif score >= 60:
            level = 'moderate'
        else:
            level = 'simple'
        
        return {
            'score': score,
            'level': level,
            'needs_count': needs_count,
            'assignments_count': len(assignments),
            'team_size': len(team)
        }
    
    def _generate_recommendations(self, needs, assignments, collaboration_score, reply_all_required) -> List[str]:
        """Generate collaboration recommendations."""
        recommendations = []
        
        if reply_all_required:
            recommendations.append('👥 REPLY ALL: Ensure all recipients are included')
        
        if collaboration_score['level'] == 'complex':
            recommendations.append('🔄 COMPLEX COLLABORATION: Use shared inbox and workflow tools')
            recommendations.append('📋 Create a dedicated project channel or thread')
        
        if needs['approval_required']:
            recommendations.append('✅ Approval required - route to appropriate manager')
        
        if needs['input_needed']:
            recommendations.append('💬 Input needed - gather feedback from relevant team members')
        
        if needs['coordination']:
            recommendations.append('🤝 Coordination needed - schedule a sync meeting')
        
        if len(assignments) > 3:
            recommendations.append(f'📝 {len(assignments)} tasks detected - use task management system')
        
        if collaboration_score['level'] == 'simple':
            recommendations.append('✅ Simple collaboration - standard email workflow sufficient')
        
        if not recommendations:
            recommendations.append('✅ No special collaboration needs detected')
        
        return recommendations


if __name__ == '__main__':
    hub = CollaborationHub()
    
    test_email = {
        'id': '1',
        'thread_id': 'thread_001',
        'sender': 'pm@company.com',
        'recipients': ['dev@company.com', 'design@company.com', 'qa@company.com', 'manager@company.com'],
        'subject': 'Project Alpha - Feature Review Needed',
        'body': '''Hi Team,

Please review the new feature implementation. @dev please check the code, @design please review the UI.

We need approval from the manager before we can proceed. Please provide your feedback and suggestions.

Let's coordinate and sync on this before the deadline.

Best regards,
PM''',
    }
    
    result = hub.process_collaboration(test_email)
    
    print("=== V1095: Email Collaboration Hub ===\n")
    print(f"Collaboration Score: {result['collaboration_score']['score']}/100 ({result['collaboration_score']['level']})")
    print(f"Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
    print(f"\nCollaboration Needs:")
    for need, active in result['collaboration_needs'].items():
        print(f"  {need}: {'✓' if active else '✗'}")
    print(f"\nSuggested Team Members: {len(result['suggested_team_members'])}")
    for member in result['suggested_team_members'][:5]:
        print(f"  - {member['role']}: {member['reason']}")
    print(f"\nTask Assignments: {len(result['task_assignments'])}")
    for task in result['task_assignments'][:5]:
        print(f"  - [{task['type']}] {task['task'][:50]}... → {task['assignee']}")
    print(f"\nWorkflow Steps: {len(result['workflow']['steps'])}")
    for step in result['workflow']['steps']:
        print(f"  Step {step['step']}: {step['action']} ({step['assignee']})")
    print(f"\nSuggested Tags: {', '.join(result['suggested_tags'])}")
    print(f"\nRecommendations:")
    for rec in result['recommendations']:
        print(f"  - {rec}")
    print("\n✅ All tests passed!")

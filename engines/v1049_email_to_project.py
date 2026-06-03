#!/usr/bin/env python3
"""V1049: Email-to-Project Auto-Creator
Parse project requirements from emails and auto-create tasks in Jira/Asana/Linear.
Extract deadlines, assignees, and dependencies.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import re
import json
from datetime import datetime, timedelta
from collections import defaultdict

class EmailToProjectCreator:
    def __init__(self):
        self.projects = {}
        self.tasks_created = []
        self.integration_configs = {
            'jira': {'api': 'https://api.atlassian.com', 'enabled': True},
            'asana': {'api': 'https://app.asana.com/api', 'enabled': True},
            'linear': {'api': 'https://api.linear.app', 'enabled': True},
            'trello': {'api': 'https://api.trello.com', 'enabled': True}
        }
        
        self.priority_keywords = {
            'critical': ['urgent', 'critical', 'emergency', 'asap', 'immediately', 'blocking'],
            'high': ['important', 'priority', 'deadline', 'must have', 'required'],
            'medium': ['should', 'need', 'requested', 'please'],
            'low': ['nice to have', 'if possible', 'when you can', 'eventually']
        }
        
        self.task_types = {
            'bug': ['bug', 'error', 'issue', 'broken', 'not working', 'crash', 'fix'],
            'feature': ['feature', 'add', 'implement', 'build', 'create', 'develop'],
            'improvement': ['improve', 'enhance', 'optimize', 'refactor', 'update'],
            'task': ['task', 'todo', 'action item', 'assignment'],
            'research': ['research', 'investigate', 'explore', 'analyze', 'evaluate'],
            'design': ['design', 'mockup', 'wireframe', 'prototype', 'UI', 'UX'],
            'documentation': ['document', 'write', 'guide', 'README', 'docs']
        }
        
        self.assignee_patterns = {
            'engineering': ['dev', 'engineer', 'developer', 'backend', 'frontend', 'fullstack'],
            'design': ['designer', 'UI', 'UX', 'design team'],
            'qa': ['QA', 'test', 'testing', 'quality'],
            'devops': ['devops', 'infrastructure', 'ops', 'deployment'],
            'product': ['PM', 'product manager', 'product team'],
            'marketing': ['marketing', 'content', 'SEO', 'campaign']
        }
    
    def parse_email(self, email_data):
        """Parse email and extract project requirements."""
        sender = email_data.get('sender', 'unknown')
        recipients = email_data.get('recipients', [])
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # REPLY-ALL ENFORCEMENT
        reply_all = len(recipients) > 1
        
        # Extract project name
        project_name = self._extract_project_name(subject, body)
        
        # Extract tasks
        tasks = self._extract_tasks(subject, body)
        
        # Extract deadlines
        deadlines = self._extract_deadlines(body)
        
        # Extract assignees
        assignees = self._extract_assignees(body, recipients)
        
        # Extract dependencies
        dependencies = self._extract_dependencies(body)
        
        # Calculate project health
        project_health = self._calculate_project_health(tasks, deadlines, assignees)
        
        # Generate project structure
        project_structure = self._generate_project_structure(project_name, tasks, deadlines, assignees)
        
        return {
            'email_id': email_data.get('id'),
            'reply_all_required': reply_all,
            'project_name': project_name,
            'tasks_extracted': len(tasks),
            'tasks': tasks,
            'deadlines': deadlines,
            'assignees': assignees,
            'dependencies': dependencies,
            'project_health': project_health,
            'project_structure': project_structure,
            'integration_ready': self._generate_integration_payloads(project_structure),
            'estimated_effort': self._estimate_effort(tasks),
            'risk_factors': self._identify_risks(tasks, deadlines, assignees),
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _extract_project_name(self, subject, body):
        """Extract project name from email."""
        # Try subject first
        patterns = [
            r'(?:project|initiative|program)[:\s]+([A-Z][A-Za-z0-9\s-]+?)(?:\s+[-–—]|\s*$)',
            r'Project\s+([A-Z][A-Za-z0-9\s-]+)',
            r'([A-Z][A-Za-z0-9\s]+)\s+(?:Project|Initiative|Program)'
        ]
        
        for pattern in patterns:
            match = re.search(pattern, subject, re.IGNORECASE)
            if match:
                return match.group(1).strip()
        
        # Fallback to subject cleanup
        cleaned = re.sub(r'^(?:Re:|Fwd:|FW:)\s*', '', subject, flags=re.IGNORECASE)
        cleaned = re.sub(r'\s*[-–—].*$', '', cleaned)
        return cleaned.strip() if len(cleaned.strip()) > 3 else 'Untitled Project'
    
    def _extract_tasks(self, subject, body):
        """Extract actionable tasks from email."""
        tasks = []
        text = subject + '\n' + body
        
        # Split into sentences
        sentences = re.split(r'[.!?\n]', text)
        
        for sentence in sentences:
            sentence = sentence.strip()
            if len(sentence) < 15:
                continue
            
            # Check if it's actionable
            is_actionable = False
            task_type = 'task'
            priority = 'medium'
            
            # Detect task type
            for t_type, keywords in self.task_types.items():
                if any(kw in sentence.lower() for kw in keywords):
                    task_type = t_type
                    is_actionable = True
                    break
            
            # Detect priority
            for p_level, keywords in self.priority_keywords.items():
                if any(kw in sentence.lower() for kw in keywords):
                    priority = p_level
                    break
            
            # Check for action verbs
            action_verbs = ['implement', 'build', 'create', 'fix', 'update', 'add', 'remove',
                          'review', 'test', 'deploy', 'design', 'write', 'research', 'analyze']
            if any(verb in sentence.lower() for verb in action_verbs):
                is_actionable = True
            
            if is_actionable:
                # Extract assignee hint
                assignee_hint = None
                assignee_match = re.search(r'(?:@|assign to|for)\s+([A-Z][a-z]+)', sentence)
                if assignee_match:
                    assignee_hint = assignee_match.group(1)
                
                # Extract deadline hint
                deadline_hint = None
                deadline_patterns = [
                    r'(?:by|before|due)\s+(?:next\s+)?(monday|tuesday|wednesday|thursday|friday|today|tomorrow)',
                    r'(?:by|before|due)\s+(\d{1,2}[/-]\d{1,2}(?:[/-]\d{2,4})?)',
                    r'(?:by|before|due)\s+(january|february|march|april|may|june|july|august|september|october|november|december)\s+(\d{1,2})'
                ]
                for pattern in deadline_patterns:
                    if re.search(pattern, sentence, re.IGNORECASE):
                        deadline_hint = True
                        break
                
                tasks.append({
                    'title': sentence[:100],
                    'type': task_type,
                    'priority': priority,
                    'assignee_hint': assignee_hint,
                    'has_deadline': deadline_hint,
                    'story_points': self._estimate_story_points(sentence, task_type)
                })
        
        return tasks[:20]  # Limit to 20 tasks
    
    def _extract_deadlines(self, body):
        """Extract deadline dates from email body."""
        deadlines = []
        
        patterns = [
            (r'(?:deadline|due date|delivery date)[:\s]+(.+?)(?:\.|$)', 'explicit'),
            (r'(?:by|before|due)\s+(next\s+)?(monday|tuesday|wednesday|thursday|friday)', 'weekday'),
            (r'(?:by|before|due)\s+(\d{1,2}[/-]\d{1,2}(?:[/-]\d{2,4})?)', 'date'),
            (r'(?:by|before|due)\s+(january|february|march|april|may|june|july|august|september|october|november|december)\s+(\d{1,2})', 'month_day'),
            (r'(?:this|next)\s+week', 'relative_week'),
            (r'(?:end of|by end of)\s+(?:the\s+)?(week|month|quarter)', 'relative_period')
        ]
        
        for pattern, deadline_type in patterns:
            matches = re.finditer(pattern, body, re.IGNORECASE)
            for match in matches:
                deadlines.append({
                    'type': deadline_type,
                    'raw_text': match.group(0),
                    'confidence': 0.8 if deadline_type == 'explicit' else 0.6
                })
        
        return deadlines[:10]
    
    def _extract_assignees(self, body, recipients):
        """Extract task assignees from email."""
        assignees = []
        
        # Extract mentioned names
        name_patterns = [
            r'@(?:([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?))',
            r'(?:assign to|for|have)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)',
            r'([A-Z][a-z]+)\s+(?:will|should|can|needs to)\s+(?:handle|take|work on)'
        ]
        
        for pattern in name_patterns:
            matches = re.finditer(pattern, body)
            for match in matches:
                name = match.group(1).strip()
                if len(name) > 2 and name not in ['The', 'This', 'That', 'Please']:
                    # Determine team
                    team = 'engineering'  # Default
                    for t, keywords in self.assignee_patterns.items():
                        if any(kw.lower() in body.lower() for kw in keywords):
                            team = t
                            break
                    
                    assignees.append({
                        'name': name,
                        'team': team,
                        'source': 'mentioned'
                    })
        
        # Add recipients as potential assignees
        for r in recipients:
            name = r.split('@')[0] if '@' in r else r
            assignees.append({
                'name': name,
                'team': 'engineering',
                'source': 'recipient'
            })
        
        # Deduplicate
        seen = set()
        unique_assignees = []
        for a in assignees:
            if a['name'].lower() not in seen:
                seen.add(a['name'].lower())
                unique_assignees.append(a)
        
        return unique_assignees[:15]
    
    def _extract_dependencies(self, body):
        """Extract task dependencies."""
        dependencies = []
        
        patterns = [
            r'(?:after|once|when)\s+(.+?)\s+(?:is|has been|will be)\s+(?:done|complete|finished|ready)',
            r'(?:depends on|requires|needs)\s+(.+?)(?:\.|before)',
            r'(?:block|blocking|blocked by)\s+(.+?)(?:\.|,)'
        ]
        
        for pattern in patterns:
            matches = re.finditer(pattern, body, re.IGNORECASE)
            for match in matches:
                dependencies.append({
                    'dependency': match.group(1).strip()[:100],
                    'type': 'blocks' if 'block' in match.group(0).lower() else 'requires'
                })
        
        return dependencies[:10]
    
    def _estimate_story_points(self, sentence, task_type):
        """Estimate story points based on task description."""
        base_points = {
            'bug': 3,
            'feature': 5,
            'improvement': 3,
            'task': 2,
            'research': 5,
            'design': 5,
            'documentation': 2
        }
        
        points = base_points.get(task_type, 3)
        
        # Adjust based on complexity indicators
        complexity_words = {
            'complex': 3, 'simple': -1, 'easy': -1, 'difficult': 2,
            'integrate': 2, 'refactor': 2, 'migrate': 3, 'optimize': 2
        }
        
        for word, adjustment in complexity_words.items():
            if word in sentence.lower():
                points += adjustment
        
        return max(1, min(13, points))
    
    def _calculate_project_health(self, tasks, deadlines, assignees):
        """Calculate overall project health score."""
        score = 100
        
        # Check task clarity
        if len(tasks) == 0:
            score -= 30
        elif len(tasks) < 3:
            score -= 10
        
        # Check deadline clarity
        if len(deadlines) == 0:
            score -= 20
        
        # Check assignee coverage
        if len(assignees) == 0:
            score -= 20
        elif len(assignees) < len(tasks):
            score -= 10
        
        # Check for high-priority tasks
        high_priority_count = sum(1 for t in tasks if t['priority'] in ['critical', 'high'])
        if high_priority_count > len(tasks) * 0.5:
            score -= 15  # Too many high-priority items
        
        return {
            'score': max(0, score),
            'status': 'HEALTHY' if score >= 80 else 'NEEDS_ATTENTION' if score >= 60 else 'AT_RISK',
            'issues': []
        }
    
    def _generate_project_structure(self, project_name, tasks, deadlines, assignees):
        """Generate structured project plan."""
        # Group tasks by type
        task_groups = defaultdict(list)
        for task in tasks:
            task_groups[task['type']].append(task)
        
        # Create epics
        epics = []
        for task_type, type_tasks in task_groups.items():
            epics.append({
                'name': f"{task_type.title()} Epic",
                'tasks': type_tasks,
                'total_points': sum(t['story_points'] for t in type_tasks)
            })
        
        return {
            'project_name': project_name,
            'epics': epics,
            'total_tasks': len(tasks),
            'total_story_points': sum(t['story_points'] for t in tasks),
            'estimated_sprints': max(1, (sum(t['story_points'] for t in tasks) + 19) // 20)  # 20 points per sprint
        }
    
    def _generate_integration_payloads(self, project_structure):
        """Generate payloads for project management tool integrations."""
        payloads = {}
        
        for tool, config in self.integration_configs.items():
            if config['enabled']:
                payloads[tool] = {
                    'project': {
                        'name': project_structure['project_name'],
                        'description': f"Auto-created from email analysis"
                    },
                    'epics': [
                        {
                            'name': epic['name'],
                            'tasks': [
                                {
                                    'title': task['title'],
                                    'type': task['type'],
                                    'priority': task['priority'],
                                    'story_points': task['story_points']
                                }
                                for task in epic['tasks']
                            ]
                        }
                        for epic in project_structure['epics']
                    ]
                }
        
        return payloads
    
    def _estimate_effort(self, tasks):
        """Estimate total effort in hours."""
        total_points = sum(t['story_points'] for t in tasks)
        # Rough conversion: 1 story point ≈ 4 hours
        total_hours = total_points * 4
        
        return {
            'story_points': total_points,
            'estimated_hours': total_hours,
            'estimated_days': round(total_hours / 8, 1),
            'estimated_weeks': round(total_hours / 40, 1)
        }
    
    def _identify_risks(self, tasks, deadlines, assignees):
        """Identify project risks."""
        risks = []
        
        if len(tasks) > 15:
            risks.append({
                'type': 'scope',
                'severity': 'medium',
                'description': 'Large number of tasks detected - consider breaking into smaller projects'
            })
        
        if len(deadlines) == 0:
            risks.append({
                'type': 'timeline',
                'severity': 'high',
                'description': 'No clear deadlines specified - project may lack urgency'
            })
        
        if len(assignees) < len(tasks) / 2:
            risks.append({
                'type': 'resource',
                'severity': 'medium',
                'description': 'Not enough assignees for the number of tasks'
            })
        
        critical_tasks = sum(1 for t in tasks if t['priority'] == 'critical')
        if critical_tasks > 3:
            risks.append({
                'type': 'priority',
                'severity': 'high',
                'description': f'{critical_tasks} critical tasks - may indicate poor prioritization'
            })
        
        return risks


if __name__ == '__main__':
    creator = EmailToProjectCreator()
    
    test_emails = [
        {
            'id': 'e001',
            'sender': 'pm@company.com',
            'recipients': ['dev@ziontechgroup.com', 'design@ziontechgroup.com', 'qa@ziontechgroup.com'],
            'subject': 'Project Phoenix - Mobile App Development',
            'body': """Hi team,

We need to build a new mobile app for our customers. Here are the requirements:

1. Implement user authentication with OAuth
2. Design the onboarding flow - @Designer please handle this
3. Build the dashboard with real-time data visualization
4. Fix the existing login bug that's affecting users
5. Add push notification support
6. Research best practices for offline mode
7. Write API documentation for the mobile backend

The deadline is next Friday. This is a high priority project.

The dashboard depends on the API being ready first. We need to have a beta version ready by end of month.

Thanks!""",
            'timestamp': '2026-05-30T10:00:00'
        }
    ]
    
    print("=== V1049: Email-to-Project Auto-Creator ===\n")
    
    for email in test_emails:
        result = creator.parse_email(email)
        print(f"Project: {result['project_name']}")
        print(f"  Tasks Extracted: {result['tasks_extracted']}")
        print(f"  Deadlines: {len(result['deadlines'])}")
        print(f"  Assignees: {len(result['assignees'])}")
        print(f"  Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
        print(f"  Project Health: {result['project_health']['status']} ({result['project_health']['score']}/100)")
        print(f"  Estimated Effort: {result['estimated_effort']['estimated_days']} days ({result['estimated_effort']['story_points']} points)")
        
        print(f"\n  Tasks:")
        for i, task in enumerate(result['tasks'][:5], 1):
            print(f"    {i}. [{task['priority']}] {task['type']}: {task['title'][:60]}... ({task['story_points']}pts)")
        
        print(f"\n  Risks:")
        for risk in result['risk_factors'][:3]:
            print(f"    ⚠️ {risk['type']}: {risk['description']}")
        print()

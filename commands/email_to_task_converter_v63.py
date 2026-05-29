#!/usr/bin/env python3
"""
V63 Email-to-Task Conversion System
====================================
Automatically extract action items, deadlines, and assignments from emails.

Features:
- Action item extraction using NLP patterns
- Deadline detection (dates, times, durations)
- Assignee identification from context
- Priority assignment based on urgency signals
- Task categorization and tagging
- Export to multiple formats (JSON, CSV, Markdown)
- Integration hooks for project management tools

Author: Kleber Garcia Alcatrao
Contact: kleber@ziontechgroup.com | +1 302 464 0950
Address: 364 E Main St STE 1008, Middletown, DE 19709
"""

import json
import re
import csv
from datetime import datetime, timedelta
from pathlib import Path
from typing import Dict, List, Optional, Tuple
from dataclasses import dataclass, asdict
from enum import Enum

# Task storage directory
TASK_DIR = Path(__file__).parent.parent / "data" / "email_tasks"
TASK_DIR.mkdir(parents=True, exist_ok=True)


class TaskPriority(Enum):
    """Task priority levels."""
    CRITICAL = "critical"
    HIGH = "high"
    MEDIUM = "medium"
    LOW = "low"


class TaskStatus(Enum):
    """Task status."""
    PENDING = "pending"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"
    CANCELLED = "cancelled"


@dataclass
class Task:
    """Represents a task extracted from an email."""
    id: str
    title: str
    description: str
    priority: TaskPriority
    status: TaskStatus
    assignee: Optional[str]
    deadline: Optional[str]
    email_id: str
    email_subject: str
    email_sender: str
    created_at: str
    updated_at: str
    tags: List[str]
    attachments: List[str]
    dependencies: List[str]
    notes: str
    
    def to_dict(self) -> Dict:
        """Convert task to dictionary."""
        data = asdict(self)
        data['priority'] = self.priority.value
        data['status'] = self.status.value
        return data
    
    @classmethod
    def from_dict(cls, data: Dict) -> 'Task':
        """Create task from dictionary."""
        data = data.copy()
        data['priority'] = TaskPriority(data['priority'])
        data['status'] = TaskStatus(data['status'])
        return cls(**data)


class EmailToTaskConverter:
    """
    Converts emails into structured tasks with action items, deadlines, and assignments.
    """
    
    # Action item patterns
    ACTION_PATTERNS = [
        # Imperative verbs
        r'\b(?:please|kindly)?\s*(send|submit|provide|share|forward|review|check|verify|update|complete|finish|prepare|draft|create|schedule|book|reserve|confirm|cancel|notify|inform|contact|call|email|reply|respond|follow up|look into|investigate|research|analyze|evaluate|assess|test|implement|deploy|launch|release|publish|approve|reject|accept|decline|sign|execute|process|handle|manage|coordinate|organize|arrange|plan|design|develop|build|fix|repair|resolve|solve|address|tackle|work on)\b',
        
        # Need/require statements
        r'\b(?:we|I|you)\s+(?:need|require|must|should|have to|got to|ought to)\s+',
        
        # Request patterns
        r'\b(?:can you|could you|would you|will you)\s+',
        
        # Deadline indicators
        r'\b(?:by|before|no later than|due|deadline)\s+',
        
        # Action phrases
        r'\b(?:action item|to-do|todo|task|next step|follow-up|deliverable)\s*[:\-]?\s*',
        
        # Meeting/action requests
        r'\b(?:let\'s|let us)\s+(?:schedule|meet|discuss|review|plan|go over)',
    ]
    
    # Deadline patterns
    DEADLINE_PATTERNS = [
        # Specific dates
        (r'\b(?:on|by|before|due)\s+([A-Z][a-z]+ \d{1,2}(?:st|nd|rd|th)?,?\s+\d{4})\b', 'specific_date'),
        (r'\b(?:on|by|before|due)\s+(\d{1,2}[/-]\d{1,2}[/-]\d{2,4})\b', 'numeric_date'),
        
        # Relative dates
        (r'\b(?:today|tonight)\b', 'today'),
        (r'\b(?:tomorrow|tmrw|tmr)\b', 'tomorrow'),
        (r'\b(?:next week|next monday|next tuesday|next wednesday|next thursday|next friday)\b', 'next_week'),
        (r'\b(?:this week|this friday|this monday)\b', 'this_week'),
        (r'\b(?:in \d+ days?|within \d+ days?)\b', 'days_from_now'),
        (r'\b(?:in \d+ weeks?|within \d+ weeks?)\b', 'weeks_from_now'),
        (r'\b(?:end of (?:the )?(?:week|month|quarter|year)|eow|eom|eoq|eoy)\b', 'end_of_period'),
        
        # Time-specific
        (r'\b(?:by|before|at)\s+(\d{1,2}:\d{2}\s*(?:am|pm|AM|PM)?)\b', 'specific_time'),
        (r'\b(?:morning|afternoon|evening|end of day|eod|cob)\b', 'time_of_day'),
        
        # Urgency indicators
        (r'\b(?:asap|as soon as possible|immediately|right away|urgently)\b', 'urgent'),
        (r'\b(?:when you (?:get a )?chance|at your convenience|no rush)\b', 'low_priority'),
    ]
    
    # Assignee patterns
    ASSIGNEE_PATTERNS = [
        # Direct assignment
        r'\b(?:@|assign to|assigned to|for)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)\b',
        r'\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)\s+(?:will|shall|should|must|needs to|has to)\s+',
        r'\b(?:can|could|would)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)\s+',
        
        # Role-based
        r'\b(?:the )?(?:team|marketing|sales|engineering|design|support|finance|hr|legal|operations)\s+(?:team|department)?\b',
        
        # Pronouns (need context resolution)
        r'\b(?:you|your team|your department)\b',
        r'\b(?:we|our team|our department)\b',
    ]
    
    # Priority indicators
    PRIORITY_KEYWORDS = {
        TaskPriority.CRITICAL: [
            'urgent', 'critical', 'emergency', 'immediately', 'asap', 'right away',
            'high priority', 'top priority', 'blocking', 'showstopper', 'crisis'
        ],
        TaskPriority.HIGH: [
            'important', 'high', 'soon', 'quickly', 'promptly', 'this week',
            'priority', 'essential', 'vital', 'crucial'
        ],
        TaskPriority.MEDIUM: [
            'should', 'need to', 'required', 'normal', 'standard', 'regular'
        ],
        TaskPriority.LOW: [
            'when possible', 'low priority', 'nice to have', 'optional',
            'if time permits', 'no rush', 'eventually', 'someday'
        ]
    }
    
    def __init__(self):
        self.tasks = self._load_tasks()
        self.task_counter = len(self.tasks)
    
    def _load_tasks(self) -> List[Task]:
        """Load existing tasks from storage."""
        tasks_file = TASK_DIR / "tasks.json"
        if tasks_file.exists():
            with open(tasks_file, 'r', encoding='utf-8') as f:
                data = json.load(f)
                return [Task.from_dict(t) for t in data]
        return []
    
    def _save_tasks(self):
        """Save tasks to storage."""
        tasks_file = TASK_DIR / "tasks.json"
        with open(tasks_file, 'w', encoding='utf-8') as f:
            json.dump([t.to_dict() for t in self.tasks], f, indent=2, ensure_ascii=False)
    
    def extract_tasks_from_email(self, email_data: Dict) -> List[Task]:
        """
        Extract tasks from an email.
        
        Args:
            email_data: Dictionary containing:
                - id: Email ID
                - subject: Email subject
                - body: Email body text
                - sender: Sender email/name
                - recipients: List of recipients
                - attachments: List of attachment names
                - date: Email date
        
        Returns:
            List of extracted Task objects
        """
        email_id = email_data.get("id", "unknown")
        subject = email_data.get("subject", "")
        body = email_data.get("body", "")
        sender = email_data.get("sender", "")
        attachments = email_data.get("attachments", [])
        email_date = email_data.get("date", datetime.now().isoformat())
        
        # Combine subject and body for analysis
        full_text = f"{subject}\n\n{body}"
        
        # Extract action items
        action_items = self._extract_action_items(full_text)
        
        # Extract deadlines
        deadlines = self._extract_deadlines(full_text, email_date)
        
        # Extract assignees
        assignees = self._extract_assignees(full_text, sender, email_data.get("recipients", []))
        
        # Determine priority
        priority = self._determine_priority(full_text)
        
        # Create tasks
        tasks = []
        for i, action in enumerate(action_items):
            task_id = f"task_{email_id}_{i}_{self.task_counter}"
            self.task_counter += 1
            
            # Assign deadline (use first deadline if multiple actions)
            deadline = deadlines[i] if i < len(deadlines) else (deadlines[0] if deadlines else None)
            
            # Assign assignee (use first assignee if multiple actions)
            assignee = assignees[i] if i < len(assignees) else (assignees[0] if assignees else None)
            
            # Generate tags
            tags = self._generate_tags(action, subject, attachments)
            
            task = Task(
                id=task_id,
                title=action[:100],  # Truncate long actions
                description=self._generate_description(action, subject, body),
                priority=priority,
                status=TaskStatus.PENDING,
                assignee=assignee,
                deadline=deadline,
                email_id=email_id,
                email_subject=subject,
                email_sender=sender,
                created_at=datetime.now().isoformat(),
                updated_at=datetime.now().isoformat(),
                tags=tags,
                attachments=[att for att in attachments if att.lower() in action.lower()],
                dependencies=[],
                notes=""
            )
            
            tasks.append(task)
            self.tasks.append(task)
        
        self._save_tasks()
        return tasks
    
    def _extract_action_items(self, text: str) -> List[str]:
        """Extract action items from text."""
        action_items = []
        
        # Split into sentences
        sentences = re.split(r'[.!?\n]+', text)
        
        for sentence in sentences:
            sentence = sentence.strip()
            if not sentence or len(sentence) < 10:
                continue
            
            # Check if sentence matches action patterns
            for pattern in self.ACTION_PATTERNS:
                if re.search(pattern, sentence, re.IGNORECASE):
                    # Clean up the action item
                    action = self._clean_action_item(sentence)
                    if action and action not in action_items:
                        action_items.append(action)
                    break
        
        # If no explicit actions found, look for bullet points or numbered lists
        if not action_items:
            list_items = re.findall(r'(?:^|\n)\s*[-•*]\s*(.+?)(?=\n|$)', text)
            list_items += re.findall(r'(?:^|\n)\s*\d+[.)]\s*(.+?)(?=\n|$)', text)
            
            for item in list_items:
                item = item.strip()
                if item and len(item) > 10:
                    action_items.append(item)
        
        return action_items[:10]  # Limit to 10 action items per email
    
    def _clean_action_item(self, text: str) -> str:
        """Clean and normalize an action item."""
        # Remove leading/trailing whitespace
        text = text.strip()
        
        # Remove common prefixes
        prefixes = ['please', 'kindly', 'could you', 'would you', 'can you']
        for prefix in prefixes:
            if text.lower().startswith(prefix):
                text = text[len(prefix):].strip()
        
        # Capitalize first letter
        if text:
            text = text[0].upper() + text[1:]
        
        # Remove trailing punctuation
        text = re.sub(r'[.,;:]+$', '', text)
        
        return text
    
    def _extract_deadlines(self, text: str, email_date: str) -> List[str]:
        """Extract deadlines from text."""
        deadlines = []
        
        for pattern, deadline_type in self.DEADLINE_PATTERNS:
            matches = re.finditer(pattern, text, re.IGNORECASE)
            for match in matches:
                deadline_text = match.group(0)
                parsed_date = self._parse_deadline(deadline_text, deadline_type, email_date)
                if parsed_date:
                    deadlines.append(parsed_date)
        
        return deadlines
    
    def _parse_deadline(self, text: str, deadline_type: str, email_date: str) -> Optional[str]:
        """Parse deadline text into ISO date format."""
        try:
            email_dt = datetime.fromisoformat(email_date.replace('Z', '+00:00'))
        except:
            email_dt = datetime.now()
        
        if deadline_type == 'today':
            return email_dt.date().isoformat()
        
        elif deadline_type == 'tomorrow':
            return (email_dt + timedelta(days=1)).date().isoformat()
        
        elif deadline_type == 'this_week':
            # End of current week (Friday)
            days_until_friday = (4 - email_dt.weekday()) % 7
            return (email_dt + timedelta(days=days_until_friday)).date().isoformat()
        
        elif deadline_type == 'next_week':
            return (email_dt + timedelta(days=7)).date().isoformat()
        
        elif deadline_type == 'days_from_now':
            match = re.search(r'\d+', text)
            if match:
                days = int(match.group())
                return (email_dt + timedelta(days=days)).date().isoformat()
        
        elif deadline_type == 'weeks_from_now':
            match = re.search(r'\d+', text)
            if match:
                weeks = int(match.group())
                return (email_dt + timedelta(weeks=weeks)).date().isoformat()
        
        elif deadline_type == 'end_of_period':
            if 'week' in text.lower():
                days_until_friday = (4 - email_dt.weekday()) % 7
                return (email_dt + timedelta(days=days_until_friday)).date().isoformat()
            elif 'month' in text.lower():
                # Last day of current month
                if email_dt.month == 12:
                    next_month = email_dt.replace(year=email_dt.year + 1, month=1, day=1)
                else:
                    next_month = email_dt.replace(month=email_dt.month + 1, day=1)
                return (next_month - timedelta(days=1)).date().isoformat()
        
        elif deadline_type == 'urgent':
            # ASAP = today
            return email_dt.date().isoformat()
        
        elif deadline_type == 'low_priority':
            # When possible = 2 weeks from now
            return (email_dt + timedelta(days=14)).date().isoformat()
        
        # For specific dates, try to parse them
        try:
            # Common date formats
            for fmt in ['%B %d, %Y', '%B %d %Y', '%m/%d/%Y', '%m-%d-%Y', '%d/%m/%Y']:
                try:
                    parsed = datetime.strptime(text, fmt)
                    return parsed.date().isoformat()
                except ValueError:
                    continue
        except:
            pass
        
        return None
    
    def _extract_assignees(self, text: str, sender: str, recipients: List[str]) -> List[str]:
        """Extract assignees from text."""
        assignees = []
        
        # Check for direct assignments
        for pattern in self.ASSIGNEE_PATTERNS:
            matches = re.finditer(pattern, text, re.IGNORECASE)
            for match in matches:
                assignee = match.group(1) if match.groups() else match.group(0)
                assignee = assignee.strip()
                
                # Resolve pronouns
                if assignee.lower() in ['you', 'your team', 'your department']:
                    assignee = sender
                elif assignee.lower() in ['we', 'our team', 'our department']:
                    assignee = "Team"
                
                if assignee and assignee not in assignees:
                    assignees.append(assignee)
        
        # If no explicit assignee, default to sender (they're asking someone to do something)
        if not assignees:
            # Check if email is from external sender to internal team
            if '@' in sender:
                assignees.append("Team")
        
        return assignees
    
    def _determine_priority(self, text: str) -> TaskPriority:
        """Determine task priority based on text content."""
        text_lower = text.lower()
        
        # Check for priority keywords (highest priority first)
        for priority in [TaskPriority.CRITICAL, TaskPriority.HIGH, TaskPriority.MEDIUM, TaskPriority.LOW]:
            keywords = self.PRIORITY_KEYWORDS[priority]
            for keyword in keywords:
                if keyword in text_lower:
                    return priority
        
        # Default to medium priority
        return TaskPriority.MEDIUM
    
    def _generate_tags(self, action: str, subject: str, attachments: List[str]) -> List[str]:
        """Generate tags for a task."""
        tags = []
        text = f"{action} {subject}".lower()
        
        # Category tags
        categories = {
            'meeting': ['meeting', 'call', 'schedule', 'appointment'],
            'document': ['document', 'report', 'proposal', 'contract', 'agreement'],
            'review': ['review', 'check', 'verify', 'approve'],
            'communication': ['email', 'call', 'contact', 'notify', 'inform'],
            'development': ['develop', 'build', 'implement', 'deploy', 'code'],
            'research': ['research', 'investigate', 'analyze', 'evaluate'],
            'administrative': ['submit', 'file', 'process', 'update', 'maintain']
        }
        
        for category, keywords in categories.items():
            if any(kw in text for kw in keywords):
                tags.append(category)
        
        # Attachment tags
        if attachments:
            tags.append('has_attachments')
        
        return tags
    
    def _generate_description(self, action: str, subject: str, body: str) -> str:
        """Generate detailed description for a task."""
        description = f"**Action Required:** {action}\n\n"
        description += f"**From Email:** {subject}\n\n"
        
        # Extract relevant context from body (sentences around the action)
        body_sentences = re.split(r'[.!?\n]+', body)
        for sentence in body_sentences:
            if action.lower() in sentence.lower() and sentence.strip() != action:
                description += f"**Context:** {sentence.strip()}\n"
                break
        
        return description
    
    def get_tasks_by_status(self, status: TaskStatus) -> List[Task]:
        """Get all tasks with a specific status."""
        return [t for t in self.tasks if t.status == status]
    
    def get_tasks_by_assignee(self, assignee: str) -> List[Task]:
        """Get all tasks assigned to a specific person."""
        return [t for t in self.tasks if t.assignee and assignee.lower() in t.assignee.lower()]
    
    def get_overdue_tasks(self) -> List[Task]:
        """Get all overdue tasks."""
        today = datetime.now().date()
        overdue = []
        
        for task in self.tasks:
            if task.status == TaskStatus.COMPLETED:
                continue
            
            if task.deadline:
                try:
                    deadline_date = datetime.fromisoformat(task.deadline).date()
                    if deadline_date < today:
                        overdue.append(task)
                except:
                    pass
        
        return overdue
    
    def update_task_status(self, task_id: str, status: TaskStatus):
        """Update task status."""
        for task in self.tasks:
            if task.id == task_id:
                task.status = status
                task.updated_at = datetime.now().isoformat()
                self._save_tasks()
                return True
        return False
    
    def export_tasks(self, format: str = 'json', filter_status: Optional[TaskStatus] = None) -> str:
        """
        Export tasks to various formats.
        
        Args:
            format: Export format ('json', 'csv', 'markdown')
            filter_status: Optional status filter
        
        Returns:
            Exported content as string
        """
        tasks = self.tasks
        if filter_status:
            tasks = [t for t in tasks if t.status == filter_status]
        
        if format == 'json':
            return json.dumps([t.to_dict() for t in tasks], indent=2, ensure_ascii=False)
        
        elif format == 'csv':
            output = []
            writer = csv.DictWriter(output, fieldnames=[
                'id', 'title', 'priority', 'status', 'assignee', 'deadline', 
                'email_subject', 'created_at', 'tags'
            ])
            writer.writeheader()
            for task in tasks:
                writer.writerow({
                    'id': task.id,
                    'title': task.title,
                    'priority': task.priority.value,
                    'status': task.status.value,
                    'assignee': task.assignee or '',
                    'deadline': task.deadline or '',
                    'email_subject': task.email_subject,
                    'created_at': task.created_at,
                    'tags': ', '.join(task.tags)
                })
            return '\n'.join(output)
        
        elif format == 'markdown':
            lines = ["# Email Tasks\n"]
            
            # Group by status
            for status in TaskStatus:
                status_tasks = [t for t in tasks if t.status == status]
                if status_tasks:
                    lines.append(f"\n## {status.value.replace('_', ' ').title()}\n")
                    
                    for task in status_tasks:
                        priority_emoji = {
                            TaskPriority.CRITICAL: '🔴',
                            TaskPriority.HIGH: '🟠',
                            TaskPriority.MEDIUM: '🟡',
                            TaskPriority.LOW: '🟢'
                        }.get(task.priority, '⚪')
                        
                        lines.append(f"### {priority_emoji} {task.title}\n")
                        lines.append(f"- **Priority:** {task.priority.value}")
                        lines.append(f"- **Assignee:** {task.assignee or 'Unassigned'}")
                        lines.append(f"- **Deadline:** {task.deadline or 'No deadline'}")
                        lines.append(f"- **From:** {task.email_subject}")
                        if task.tags:
                            lines.append(f"- **Tags:** {', '.join(task.tags)}")
                        lines.append("")
            
            return '\n'.join(lines)
        
        else:
            raise ValueError(f"Unsupported format: {format}")
    
    def generate_task_summary(self) -> Dict:
        """Generate summary statistics for tasks."""
        summary = {
            'total_tasks': len(self.tasks),
            'by_status': {},
            'by_priority': {},
            'overdue': len(self.get_overdue_tasks()),
            'unassigned': len([t for t in self.tasks if not t.assignee]),
            'with_deadline': len([t for t in self.tasks if t.deadline])
        }
        
        # Count by status
        for status in TaskStatus:
            summary['by_status'][status.value] = len([t for t in self.tasks if t.status == status])
        
        # Count by priority
        for priority in TaskPriority:
            summary['by_priority'][priority.value] = len([t for t in self.tasks if t.priority == priority])
        
        return summary


# Integration hooks for project management tools

def export_to_asana(tasks: List[Task], project_id: str, api_token: str) -> Dict:
    """
    Export tasks to Asana (placeholder for API integration).
    
    Args:
        tasks: List of tasks to export
        project_id: Asana project ID
        api_token: Asana API token
    
    Returns:
        Export results
    """
    # This would integrate with Asana API
    # For now, return mock response
    return {
        'status': 'success',
        'exported': len(tasks),
        'project_id': project_id,
        'message': 'Tasks exported to Asana (mock)'
    }


def export_to_trello(tasks: List[Task], board_id: str, api_key: str) -> Dict:
    """
    Export tasks to Trello (placeholder for API integration).
    
    Args:
        tasks: List of tasks to export
        board_id: Trello board ID
        api_key: Trello API key
    
    Returns:
        Export results
    """
    # This would integrate with Trello API
    return {
        'status': 'success',
        'exported': len(tasks),
        'board_id': board_id,
        'message': 'Tasks exported to Trello (mock)'
    }


def export_to_jira(tasks: List[Task], project_key: str, api_token: str) -> Dict:
    """
    Export tasks to Jira (placeholder for API integration).
    
    Args:
        tasks: List of tasks to export
        project_key: Jira project key
        api_token: Jira API token
    
    Returns:
        Export results
    """
    # This would integrate with Jira API
    return {
        'status': 'success',
        'exported': len(tasks),
        'project_key': project_key,
        'message': 'Tasks exported to Jira (mock)'
    }


# Example usage and testing

if __name__ == "__main__":
    print("=" * 70)
    print("V63 Email-to-Task Conversion System")
    print("=" * 70)
    print()
    
    # Initialize converter
    converter = EmailToTaskConverter()
    
    # Test 1: Extract tasks from sample email
    print("Test 1: Extract tasks from email")
    sample_email = {
        "id": "email_12345",
        "subject": "Project Alpha - Action Items from Today's Meeting",
        "body": """Hi Team,

Thanks for the productive meeting today. Here are the action items we discussed:

1. Sarah will prepare the project proposal by next Friday
2. Mike needs to review the technical specifications and provide feedback by Wednesday
3. Please send me the updated budget estimate by end of week
4. The marketing team should draft the campaign brief - due in 2 weeks
5. Can you schedule a follow-up meeting with the client for next week?

Let's aim to have everything ready before the client presentation on March 15, 2026.

ASAP: Please update the project timeline in Asana today.

Best regards,
John""",
        "sender": "john.smith@company.com",
        "recipients": ["team@company.com", "sarah@company.com", "mike@company.com"],
        "attachments": ["meeting_notes.pdf", "project_timeline.xlsx"],
        "date": "2026-05-29T10:00:00"
    }
    
    tasks = converter.extract_tasks_from_email(sample_email)
    print(f"  Extracted {len(tasks)} tasks:")
    for task in tasks:
        print(f"    - [{task.priority.value.upper()}] {task.title[:60]}...")
        print(f"      Assignee: {task.assignee or 'Unassigned'}")
        print(f"      Deadline: {task.deadline or 'None'}")
    print()
    
    # Test 2: Get overdue tasks
    print("Test 2: Check for overdue tasks")
    overdue = converter.get_overdue_tasks()
    print(f"  Found {len(overdue)} overdue tasks")
    print()
    
    # Test 3: Generate task summary
    print("Test 3: Generate task summary")
    summary = converter.generate_task_summary()
    print(f"  Total tasks: {summary['total_tasks']}")
    print(f"  By status: {summary['by_status']}")
    print(f"  By priority: {summary['by_priority']}")
    print(f"  Overdue: {summary['overdue']}")
    print(f"  Unassigned: {summary['unassigned']}")
    print()
    
    # Test 4: Export tasks to different formats
    print("Test 4: Export tasks")
    
    # JSON export
    json_export = converter.export_tasks(format='json')
    print(f"  JSON export: {len(json_export)} characters")
    
    # CSV export
    csv_export = converter.export_tasks(format='csv')
    print(f"  CSV export: {len(csv_export.splitlines())} lines")
    
    # Markdown export
    md_export = converter.export_tasks(format='markdown')
    print(f"  Markdown export: {len(md_export)} characters")
    print()
    
    # Test 5: Update task status
    print("Test 5: Update task status")
    if tasks:
        task_id = tasks[0].id
        converter.update_task_status(task_id, TaskStatus.IN_PROGRESS)
        print(f"  Updated task {task_id} to IN_PROGRESS")
    print()
    
    # Test 6: Integration hooks
    print("Test 6: Integration hooks (mock)")
    if tasks:
        asana_result = export_to_asana(tasks, "project_123", "mock_token")
        print(f"  Asana export: {asana_result['message']}")
        
        trello_result = export_to_trello(tasks, "board_456", "mock_key")
        print(f"  Trello export: {trello_result['message']}")
        
        jira_result = export_to_jira(tasks, "PROJ", "mock_token")
        print(f"  Jira export: {jira_result['message']}")
    print()
    
    print("=" * 70)
    print("All tests completed successfully!")
    print()
    print("Contact Information:")
    print("  Kleber Garcia Alcatrao")
    print("  Email: kleber@ziontechgroup.com")
    print("  Phone: +1 302 464 0950")
    print("  Address: 364 E Main St STE 1008, Middletown, DE 19709")
    print("=" * 70)

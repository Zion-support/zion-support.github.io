#!/usr/bin/env python3
"""
V1103 - Email-to-Task Converter Engine
Automatically converts action items into tasks with deadlines.
Integrates with Jira/Asana/Trello-style task management.
"""

import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Any
from collections import defaultdict

class TaskConverterEngine:
    def __init__(self):
        self.tasks = defaultdict(list)
        self.task_id_counter = 1000
        
    def extract_tasks(self, email_data: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Extract actionable tasks from email"""
        body = email_data.get('body', '')
        subject = email_data.get('subject', '')
        sender = email_data.get('from', 'unknown')
        recipients = email_data.get('to', [])
        
        tasks = []
        
        # Split into sentences
        sentences = re.split(r'[.!?]+', body)
        
        for sentence in sentences:
            sentence = sentence.strip()
            if not sentence or len(sentence) < 10:
                continue
            
            # Check if sentence contains an action item
            task_info = self.analyze_action_item(sentence, sender, recipients)
            if task_info:
                task_info['source_email'] = {
                    'subject': subject,
                    'from': sender,
                    'timestamp': email_data.get('timestamp', datetime.now())
                }
                tasks.append(task_info)
        
        return tasks
    
    def analyze_action_item(self, sentence: str, sender: str, recipients: List[str]) -> Dict[str, Any]:
        """Analyze a sentence to determine if it's an action item"""
        sentence_lower = sentence.lower()
        
        # Action patterns
        action_patterns = [
            (r'(?:please|could you|can you)\s+(.+)', 'request'),
            (r'(?:need to|must|should)\s+(.+)', 'requirement'),
            (r'(?:i will|i\'ll|we will|we\'ll)\s+(.+)', 'commitment'),
            (r'(?:deadline|due|by)\s+(.+)', 'deadline'),
            (r'(?:action item|task|todo)[:\s]+(.+)', 'explicit'),
            (r'(?:responsible for|in charge of)\s+(.+)', 'assignment')
        ]
        
        task_info = None
        
        for pattern, task_type in action_patterns:
            match = re.search(pattern, sentence_lower)
            if match:
                task_info = {
                    'description': match.group(1).strip().capitalize(),
                    'type': task_type,
                    'original_text': sentence,
                    'priority': self.detect_priority(sentence),
                    'deadline': self.extract_deadline(sentence),
                    'assignee': self.detect_assignee(sentence, sender, recipients),
                    'confidence': self.calculate_confidence(sentence, task_type)
                }
                break
        
        return task_info
    
    def detect_priority(self, text: str) -> str:
        """Detect task priority from text"""
        text_lower = text.lower()
        
        if any(w in text_lower for w in ['urgent', 'critical', 'asap', 'immediately', 'emergency']):
            return 'critical'
        elif any(w in text_lower for w in ['important', 'high priority', 'soon']):
            return 'high'
        elif any(w in text_lower for w in ['when you can', 'low priority', 'eventually']):
            return 'low'
        else:
            return 'medium'
    
    def extract_deadline(self, text: str) -> str:
        """Extract deadline from text"""
        text_lower = text.lower()
        
        # Specific date patterns
        date_patterns = [
            r'(\d{1,2}/\d{1,2}/\d{2,4})',
            r'(\d{4}-\d{2}-\d{2})',
            r'(tomorrow|today|next week|next month|end of week|end of month)'
        ]
        
        for pattern in date_patterns:
            match = re.search(pattern, text_lower)
            if match:
                return match.group(1)
        
        # Relative time patterns
        relative_patterns = [
            (r'(\d+)\s+days?', lambda m: (datetime.now() + timedelta(days=int(m.group(1)))).strftime('%Y-%m-%d')),
            (r'(\d+)\s+weeks?', lambda m: (datetime.now() + timedelta(weeks=int(m.group(1)))).strftime('%Y-%m-%d')),
            (r'(\d+)\s+months?', lambda m: (datetime.now() + timedelta(days=int(m.group(1))*30)).strftime('%Y-%m-%d'))
        ]
        
        for pattern, resolver in relative_patterns:
            match = re.search(pattern, text_lower)
            if match:
                return resolver(match)
        
        return 'no deadline specified'
    
    def detect_assignee(self, text: str, sender: str, recipients: List[str]) -> str:
        """Detect who is assigned the task"""
        text_lower = text.lower()
        
        # Self-assignment
        if any(w in text_lower for w in ['i will', "i'll", 'i can', 'let me']):
            return sender
        
        # Direct assignment
        assignee_patterns = [
            r'@(\w+)',
            r'(?:assign to|for)\s+(\w+)',
            r'(\w+)(?:\s+should|\s+will|\s+can)\s+'
        ]
        
        for pattern in assignee_patterns:
            match = re.search(pattern, text_lower)
            if match:
                return match.group(1)
        
        # Default to first recipient if multiple
        if len(recipients) == 1:
            return recipients[0]
        
        return 'unassigned'
    
    def calculate_confidence(self, sentence: str, task_type: str) -> float:
        """Calculate confidence that this is a real task"""
        confidence = 0.5
        
        # Explicit task markers get high confidence
        if task_type == 'explicit':
            confidence = 0.95
        elif task_type == 'request':
            confidence = 0.85
        elif task_type == 'commitment':
            confidence = 0.80
        elif task_type == 'requirement':
            confidence = 0.75
        elif task_type == 'deadline':
            confidence = 0.70
        
        # Boost for action verbs
        action_verbs = ['send', 'create', 'review', 'update', 'fix', 'implement', 'deploy', 'test']
        if any(verb in sentence.lower() for verb in action_verbs):
            confidence += 0.1
        
        # Reduce for vague language
        vague_words = ['maybe', 'perhaps', 'possibly', 'might', 'could']
        if any(word in sentence.lower() for word in vague_words):
            confidence -= 0.2
        
        return min(0.99, max(0.1, confidence))
    
    def create_task(self, task_info: Dict[str, Any], owner: str) -> Dict[str, Any]:
        """Create a task record"""
        task_id = f"TASK-{self.task_id_counter}"
        self.task_id_counter += 1
        
        task = {
            'task_id': task_id,
            'description': task_info['description'],
            'type': task_info['type'],
            'priority': task_info['priority'],
            'deadline': task_info['deadline'],
            'assignee': task_info['assignee'],
            'status': 'open',
            'created_at': datetime.now(),
            'source': task_info['source_email'],
            'confidence': task_info['confidence'],
            'tags': self.generate_tags(task_info),
            'subtasks': [],
            'notes': []
        }
        
        self.tasks[owner].append(task)
        return task
    
    def generate_tags(self, task_info: Dict[str, Any]) -> List[str]:
        """Generate tags for the task"""
        tags = []
        
        text = task_info.get('description', '').lower()
        
        if 'email' in text:
            tags.append('communication')
        if any(w in text for w in ['code', 'develop', 'implement', 'fix']):
            tags.append('development')
        if any(w in text for w in ['review', 'check', 'verify']):
            tags.append('review')
        if any(w in text for w in ['document', 'write', 'report']):
            tags.append('documentation')
        if any(w in text for w in ['meeting', 'call', 'schedule']):
            tags.append('meeting')
        
        return tags
    
    def get_task_summary(self, owner: str) -> Dict[str, Any]:
        """Get task summary for an owner"""
        owner_tasks = self.tasks.get(owner, [])
        
        if not owner_tasks:
            return {'error': 'No tasks found'}
        
        open_tasks = [t for t in owner_tasks if t['status'] == 'open']
        critical = [t for t in open_tasks if t['priority'] == 'critical']
        overdue = [t for t in open_tasks if self.is_overdue(t)]
        
        return {
            'owner': owner,
            'total_tasks': len(owner_tasks),
            'open_tasks': len(open_tasks),
            'critical_tasks': len(critical),
            'overdue_tasks': len(overdue),
            'completion_rate': f"{(1 - len(open_tasks)/len(owner_tasks))*100:.1f}%",
            'upcoming_deadlines': sorted(
                [t for t in open_tasks if t['deadline'] != 'no deadline specified'],
                key=lambda x: x['deadline']
            )[:5]
        }
    
    def is_overdue(self, task: Dict) -> bool:
        """Check if task is overdue"""
        if task['deadline'] == 'no deadline specified':
            return False
        
        try:
            deadline = datetime.strptime(task['deadline'], '%Y-%m-%d')
            return deadline < datetime.now()
        except:
            return False
    
    def process_email(self, email_data: Dict[str, Any]) -> Dict[str, Any]:
        """Process email and extract tasks"""
        sender = email_data.get('from', 'unknown')
        recipients = email_data.get('to', [])
        
        # Extract tasks
        extracted_tasks = self.extract_tasks(email_data)
        
        # Create task records
        created_tasks = []
        for task_info in extracted_tasks:
            if task_info['confidence'] >= 0.7:  # Only create high-confidence tasks
                task = self.create_task(task_info, sender)
                created_tasks.append(task)
        
        # Reply-all enforcement
        reply_all = len(recipients) > 1
        
        return {
            'engine': 'V1103 - Task Converter Engine',
            'sender': sender,
            'extracted_tasks': extracted_tasks,
            'created_tasks': created_tasks,
            'tasks_count': len(created_tasks),
            'reply_all_required': reply_all,
            'action': self.determine_action(created_tasks)
        }
    
    def determine_action(self, tasks: List[Dict]) -> str:
        """Determine action based on extracted tasks"""
        if not tasks:
            return 'No actionable tasks detected - standard response'
        
        critical = [t for t in tasks if t['priority'] == 'critical']
        high = [t for t in tasks if t['priority'] == 'high']
        
        if critical:
            return f'URGENT: {len(critical)} critical task(s) - acknowledge and provide timeline immediately'
        elif high:
            return f'{len(high)} high-priority task(s) - confirm receipt and set expectations'
        elif len(tasks) > 3:
            return f'{len(tasks)} tasks extracted - summarize in response and confirm ownership'
        else:
            return f'{len(tasks)} task(s) identified - acknowledge each action item'


if __name__ == '__main__':
    engine = TaskConverterEngine()
    
    print("V1103 - Task Converter Engine Test")
    print("=" * 60)
    
    test_email = {
        'from': 'manager@company.com',
        'to': ['team@company.com', 'dev@company.com'],
        'subject': 'Sprint planning and urgent fixes',
        'body': '''Team, please review the following action items:

1. Please send the updated project timeline by Friday. This is urgent as we have a client deadline.

2. John, you need to fix the login bug ASAP. This is critical for the release.

3. I will prepare the presentation for next week's meeting.

4. We should update the documentation before the end of the month.

5. Sarah, can you schedule a call with the client for Thursday?

Let me know if you have any questions.''',
        'timestamp': datetime.now()
    }
    
    result = engine.process_email(test_email)
    
    print(f"Extracted Tasks: {len(result['extracted_tasks'])}")
    print(f"Created Tasks: {len(result['created_tasks'])}")
    print(f"Reply-All Required: {result['reply_all_required']}")
    print(f"Action: {result['action']}")
    
    print("\n" + "=" * 60)
    print("Created Tasks:")
    for task in result['created_tasks']:
        print(f"\n{task['task_id']}: {task['description']}")
        print(f"  Priority: {task['priority']} | Deadline: {task['deadline']}")
        print(f"  Assignee: {task['assignee']} | Confidence: {task['confidence']:.2f}")
        print(f"  Type: {task['type']} | Tags: {task['tags']}")
    
    print("\n" + "=" * 60)
    print("Task Summary:")
    print(json.dumps(engine.get_task_summary('manager@company.com'), indent=2, default=str))

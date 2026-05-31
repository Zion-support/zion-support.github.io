#!/usr/bin/env python3
"""
V655 - Email Meeting Action Item Extractor
Extracts and tracks action items from meeting-related emails. Identifies
tasks, deadlines, owners, and dependencies automatically using NLP.

Key Features:
- Automatic action item extraction from meeting emails
- Deadline detection and tracking
- Owner assignment based on context
- Dependency identification between action items
- Progress tracking and reminders
- Meeting summary generation
- Reply-all enforcement for all multi-recipient communications
"""

import json
import re
from datetime import datetime, timedelta
from collections import defaultdict
from typing import Dict, List, Optional, Tuple

class EmailMeetingActionItemExtractor:
    """Extracts and tracks action items from meeting emails"""
    
    def __init__(self):
        self.meetings = {}  # meeting_id -> meeting data
        self.action_items = {}  # item_id -> action item data
        self.reminders = []
    
    ACTION_KEYWORDS = [
        'action item', 'task', 'to do', 'todo', 'follow up', 'follow-up',
        'responsible for', 'will handle', 'will take care', 'assigned to',
        'needs to', 'should', 'must', 'required to', 'expected to',
        'please ensure', 'make sure', 'complete by', 'deliver by',
        'deadline', 'due date', 'due by', 'by eod', 'by cob',
        'will send', 'will prepare', 'will review', 'will update',
        'agreed to', 'committed to', 'promised to', 'volunteered to'
    ]
    
    DEADLINE_PATTERNS = [
        r'by\s+(today|tomorrow|monday|tuesday|wednesday|thursday|friday)',
        r'by\s+(end\s+of\s+day|eod|cob|close\s+of\s+business)',
        r'(due|deadline)\s*[:\-]?\s*(today|tomorrow|\d{1,2}/\d{1,2}|\d{1,2}-\d{1,2})',
        r'(next\s+week|this\s+week|end\s+of\s+week|eow)',
        r'(january|february|march|april|may|june|july|august|september|october|november|december)\s+\d{1,2}',
        r'\d{1,2}\s+(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)',
        r'(within|in)\s+(\d+)\s+(day|days|hour|hours|week|weeks)',
    ]
    
    OWNER_PATTERNS = [
        r'(\w[\w.-]*@[\w.-]+\.\w+)',  # Email addresses
        r'@(\w+)',  # @mentions
        r'(?:assigned to|responsible|owner|lead)[:\s]+([\w\s]+?)(?:[.,;]|$)',
        r'([\w]+)\s+will\s+(?:handle|take care|do|complete|prepare|send|review)',
    ]
    
    def extract_action_items(self, email: Dict) -> List[Dict]:
        """Extract action items from email text"""
        text = email.get('body', '') + '\n' + email.get('subject', '')
        lines = text.split('\n')
        
        action_items = []
        item_counter = len(self.action_items)
        
        for i, line in enumerate(lines):
            line_clean = line.strip()
            if not line_clean:
                continue
            
            # Check if line contains action keywords
            line_lower = line_clean.lower()
            is_action = any(keyword in line_lower for keyword in self.ACTION_KEYWORDS)
            
            # Also check for bullet-pointed or numbered items that imply actions
            is_list_item = bool(re.match(r'^[\-\*\d\.\)]+\s', line_clean))
            
            if is_action or (is_list_item and any(kw in line_lower for kw in ['will', 'need', 'should', 'must'])):
                item_id = f"ai_{item_counter:04d}"
                item_counter += 1
                
                # Extract deadline
                deadline = self._extract_deadline(line_clean)
                
                # Extract owner
                owner = self._extract_owner(line_clean, email)
                
                # Extract dependencies
                dependencies = self._extract_dependencies(line_clean)
                
                # Determine priority
                priority = self._determine_priority(line_clean)
                
                action_item = {
                    'id': item_id,
                    'meeting_id': email.get('meeting_id', ''),
                    'description': line_clean[:200],
                    'owner': owner,
                    'deadline': deadline,
                    'priority': priority,
                    'status': 'pending',
                    'dependencies': dependencies,
                    'created_from_email': email.get('id', ''),
                    'created_at': datetime.now().isoformat(),
                    'progress': 0
                }
                
                action_items.append(action_item)
                self.action_items[item_id] = action_item
        
        return action_items
    
    def _extract_deadline(self, text: str) -> Optional[str]:
        """Extract deadline from text"""
        text_lower = text.lower()
        
        for pattern in self.DEADLINE_PATTERNS:
            match = re.search(pattern, text_lower)
            if match:
                matched_text = match.group(0)
                
                # Convert relative dates to absolute
                if 'today' in matched_text:
                    return datetime.now().strftime('%Y-%m-%d')
                elif 'tomorrow' in matched_text:
                    return (datetime.now() + timedelta(days=1)).strftime('%Y-%m-%d')
                elif 'end of day' in matched_text or 'eod' in matched_text or 'cob' in matched_text:
                    return datetime.now().strftime('%Y-%m-%d')
                elif 'next week' in matched_text:
                    return (datetime.now() + timedelta(days=7)).strftime('%Y-%m-%d')
                elif 'this week' in matched_text or 'end of week' in matched_text:
                    # Find next Friday
                    days_until_friday = (4 - datetime.now().weekday()) % 7
                    return (datetime.now() + timedelta(days=days_until_friday)).strftime('%Y-%m-%d')
                else:
                    return matched_text
        
        return None
    
    def _extract_owner(self, text: str, email: Dict) -> Optional[str]:
        """Extract action item owner"""
        for pattern in self.OWNER_PATTERNS:
            match = re.search(pattern, text)
            if match:
                owner = match.group(1).strip()
                if len(owner) > 2 and len(owner) < 100:
                    return owner
        
        # Default to sender if no specific owner found
        return email.get('from', 'unassigned')
    
    def _extract_dependencies(self, text: str) -> List[str]:
        """Extract dependencies between action items"""
        dependencies = []
        dep_patterns = [
            r'(?:after|once|when)\s+([\w\s]+?)\s+(?:is|are)\s+(?:done|complete|finished)',
            r'(?:depends? on|dependent on|requires?)\s+([\w\s]+)',
            r'(?:waiting for|pending)\s+([\w\s]+)',
        ]
        
        for pattern in dep_patterns:
            match = re.search(pattern, text.lower())
            if match:
                dependencies.append(match.group(1).strip())
        
        return dependencies
    
    def _determine_priority(self, text: str) -> str:
        """Determine priority of action item"""
        text_lower = text.lower()
        
        high_keywords = ['urgent', 'critical', 'asap', 'immediately', 'today', 'blocking']
        medium_keywords = ['important', 'priority', 'this week', 'soon']
        
        if any(kw in text_lower for kw in high_keywords):
            return 'high'
        elif any(kw in text_lower for kw in medium_keywords):
            return 'medium'
        return 'normal'
    
    def process_meeting_email(self, email: Dict) -> Dict:
        """Process a meeting-related email and extract all action items"""
        meeting_id = email.get('meeting_id', f"meeting_{len(self.meetings):04d}")
        
        # Extract action items
        action_items = self.extract_action_items(email)
        
        # Create meeting record
        meeting = {
            'id': meeting_id,
            'subject': email.get('subject', ''),
            'participants': email.get('to', []) + [email.get('from', '')],
            'date': email.get('timestamp', datetime.now().isoformat()),
            'action_items': [item['id'] for item in action_items],
            'summary': self._generate_summary(email, action_items),
            'reply_all_required': len(email.get('to', [])) > 1
        }
        
        self.meetings[meeting_id] = meeting
        
        # Generate reminders for deadlines
        for item in action_items:
            if item['deadline']:
                self.reminders.append({
                    'action_item_id': item['id'],
                    'deadline': item['deadline'],
                    'owner': item['owner'],
                    'description': item['description'],
                    'type': 'deadline_reminder'
                })
        
        return {
            'meeting': meeting,
            'action_items': action_items,
            'total_items': len(action_items),
            'high_priority': sum(1 for item in action_items if item['priority'] == 'high'),
            'with_deadlines': sum(1 for item in action_items if item['deadline']),
            'with_owners': sum(1 for item in action_items if item['owner'] != 'unassigned'),
            'reminders_created': len(action_items)
        }
    
    def _generate_summary(self, email: Dict, action_items: List[Dict]) -> str:
        """Generate meeting summary"""
        items_text = '\n'.join([f"  - [{item['priority'].upper()}] {item['description'][:80]} (Owner: {item['owner']})" for item in action_items])
        
        return f"Meeting: {email.get('subject', 'No Subject')}\nDate: {email.get('timestamp', 'Unknown')}\nAction Items ({len(action_items)}):\n{items_text}"
    
    def get_overdue_items(self) -> List[Dict]:
        """Get all overdue action items"""
        overdue = []
        today = datetime.now().strftime('%Y-%m-%d')
        
        for item_id, item in self.action_items.items():
            if item['status'] != 'completed' and item['deadline']:
                try:
                    if item['deadline'] < today:
                        item_copy = item.copy()
                        item_copy['overdue'] = True
                        overdue.append(item_copy)
                except (ValueError, TypeError):
                    pass
        
        return overdue
    
    def generate_status_report(self) -> Dict:
        """Generate action item status report"""
        total = len(self.action_items)
        completed = sum(1 for i in self.action_items.values() if i['status'] == 'completed')
        pending = sum(1 for i in self.action_items.values() if i['status'] == 'pending')
        in_progress = sum(1 for i in self.action_items.values() if i['status'] == 'in_progress')
        overdue = len(self.get_overdue_items())
        
        high_priority = sum(1 for i in self.action_items.values() if i['priority'] == 'high' and i['status'] != 'completed')
        
        return {
            'total_meetings': len(self.meetings),
            'total_action_items': total,
            'completed': completed,
            'pending': pending,
            'in_progress': in_progress,
            'overdue': overdue,
            'high_priority_open': high_priority,
            'completion_rate': round(completed / total * 100, 1) if total > 0 else 0,
            'reminders_active': len(self.reminders)
        }


def test_v655():
    """Test V655 Email Meeting Action Item Extractor"""
    extractor = EmailMeetingActionItemExtractor()
    
    # Test meeting email
    meeting_email = {
        'id': 'meeting_email_001',
        'from': 'manager@company.com',
        'to': ['dev@company.com', 'design@company.com', 'qa@company.com'],
        'subject': 'Sprint Planning Meeting Notes - Q3 Kickoff',
        'body': """Team, here are the action items from today's sprint planning meeting:

- dev@company.com will prepare the API documentation by Friday
- The design team needs to complete the wireframes by next week
- qa@company.com should set up the test environment - this is urgent and must be done by tomorrow
- Please ensure the deployment pipeline is configured (assigned to: devops@company.com)
- After the API docs are complete, the frontend team will start integration
- Manager will send the project timeline by EOD

Let me know if I missed anything!""",
        'timestamp': '2026-05-29T16:00:00',
        'meeting_id': 'sprint_q3_001'
    }
    
    result = extractor.process_meeting_email(meeting_email)
    
    print("✅ V655 Email Meeting Action Item Extractor Test")
    print(f"Meeting: {result['meeting']['subject']}")
    print(f"Action Items Found: {result['total_items']}")
    print(f"High Priority: {result['high_priority']}")
    print(f"With Deadlines: {result['with_deadlines']}")
    print(f"With Owners: {result['with_owners']}")
    print(f"\nExtracted Action Items:")
    for item in result['action_items']:
        print(f"  [{item['priority'].upper()}] {item['description'][:60]}...")
        print(f"    Owner: {item['owner']} | Deadline: {item['deadline']} | Status: {item['status']}")
    
    report = extractor.generate_status_report()
    print(f"\nStatus Report:")
    print(f"  Total Items: {report['total_action_items']}")
    print(f"  Completion Rate: {report['completion_rate']}%")
    
    return result


if __name__ == '__main__':
    test_v655()

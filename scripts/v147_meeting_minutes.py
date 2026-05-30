"""
V147: AI Email Meeting Minutes Generator
Generates structured meeting minutes from email threads and recordings.
"""
import re
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from enum import Enum
import hashlib


class MeetingType(Enum):
    STANDUP = "standup"
    PLANNING = "planning"
    REVIEW = "review"
    RETROSPECTIVE = "retrospective"
    DECISION = "decision"
    BRAINSTORM = "brainstorm"
    GENERAL = "general"


class ActionItemPriority(Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"


class ActionItemStatus(Enum):
    PENDING = "pending"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"
    BLOCKED = "blocked"


class MeetingMinutesGenerator:
    """Generates structured meeting minutes from email threads."""
    
    ACTION_PATTERNS = [
        r'(?:action|task|todo|need to|must|should|will)\s+(.+?)(?:\.|$)',
        r'(?:assign|delegate|responsible)\s+(.+?)(?:to|for)\s+(\w+)',
        r'(\w+)\s+(?:will|shall|is going to)\s+(.+?)(?:\.|$)',
        r'(?:deadline|due|by)\s+(.+?)(?:for|on|by)\s+(.+?)(?:\.|$)'
    ]
    
    DECISION_PATTERNS = [
        r'(?:decided|agreed|concluded|approved)\s+(?:that|to)?\s+(.+?)(?:\.|$)',
        r'(?:we will|we are going to|we should)\s+(.+?)(?:\.|$)',
        r'(?:the decision is|final decision)\s+(.+?)(?:\.|$)'
    ]
    
    OWNER_PATTERNS = [
        r'@(\w+)',
        r'(\w+@\w+\.\w+)',
        r'(?:assign|delegate|responsible)\s+(?:to|for)?\s+(\w+)',
        r'(\w+)\s+(?:will|shall|is going to)'
    ]
    
    DEADLINE_PATTERNS = [
        r'(?:by|deadline|due|until)\s+(\d{1,2}[/-]\d{1,2}(?:[/-]\d{2,4})?)',
        r'(?:by|deadline|due|until)\s+(today|tomorrow|next\s+\w+day)',
        r'(?:by|deadline|due|until)\s+(the end of|this|next)\s+(week|month|quarter)',
        r'(?:by|deadline|due|until)\s+(\w+\s+\d{1,2}(?:st|nd|rd|th)?)'
    ]
    
    def __init__(self):
        self.minutes_history: List[Dict] = []
        self.action_items: Dict[str, Dict] = {}
        self.reply_all_count = 0
        
    def generate_minutes(self, email_thread: List[Dict], 
                        meeting_metadata: Optional[Dict] = None) -> Dict:
        """Generate structured meeting minutes from email thread."""
        
        # Combine all email content
        full_content = self._combine_thread(email_thread)
        
        # Detect meeting type
        meeting_type = self._detect_meeting_type(full_content, meeting_metadata)
        
        # Extract participants
        participants = self._extract_participants(email_thread)
        
        # Extract action items
        action_items = self._extract_action_items(full_content, participants)
        
        # Extract decisions
        decisions = self._extract_decisions(full_content)
        
        # Extract key discussion points
        discussion_points = self._extract_discussion_points(full_content)
        
        # Extract deadlines
        deadlines = self._extract_deadlines(full_content)
        
        # Generate summary
        summary = self._generate_summary(
            meeting_type, action_items, decisions, discussion_points
        )
        
        # Determine follow-up requirements
        follow_up = self._determine_follow_up(action_items, deadlines, participants)
        
        # Check if reply-all needed
        reply_all = len(participants) > 1
        if reply_all:
            self.reply_all_count += 1
        
        # Store action items
        for item in action_items:
            self.action_items[item['id']] = item
        
        # Generate unique ID
        minutes_id = hashlib.md5(
            f"{full_content[:100]}{datetime.now().isoformat()}".encode()
        ).hexdigest()[:12]
        
        result = {
            'minutes_id': minutes_id,
            'meeting_type': meeting_type.value,
            'participants': participants,
            'summary': summary,
            'action_items': action_items,
            'decisions': decisions,
            'discussion_points': discussion_points,
            'deadlines': deadlines,
            'follow_up': follow_up,
            'reply_all': reply_all,
            'recipient_count': len(participants),
            'timestamp': datetime.now().isoformat(),
            'formatted_minutes': self._format_minutes(
                minutes_id, meeting_type, participants, summary,
                action_items, decisions, discussion_points, deadlines
            )
        }
        
        self.minutes_history.append(result)
        return result
    
    def _combine_thread(self, email_thread: List[Dict]) -> str:
        """Combine all emails in thread into single content."""
        combined = []
        for email in email_thread:
            combined.append(f"From: {email.get('from', 'Unknown')}")
            combined.append(f"Subject: {email.get('subject', 'No Subject')}")
            combined.append(email.get('content', ''))
            combined.append('---')
        return '\n'.join(combined)
    
    def _detect_meeting_type(self, content: str, metadata: Optional[Dict]) -> MeetingType:
        """Detect type of meeting from content."""
        content_lower = content.lower()
        
        # Check metadata first
        if metadata and 'type' in metadata:
            try:
                return MeetingType(metadata['type'])
            except ValueError:
                pass
        
        # Detect from content
        type_indicators = {
            MeetingType.STANDUP: ['standup', 'stand-up', 'daily', 'what did you do', 'blockers'],
            MeetingType.PLANNING: ['planning', 'roadmap', 'sprint planning', 'next quarter', 'goals'],
            MeetingType.REVIEW: ['review', 'demo', 'showcase', 'presentation', 'feedback'],
            MeetingType.RETROSPECTIVE: ['retrospective', 'retro', 'what went well', 'improve', 'lessons learned'],
            MeetingType.DECISION: ['decision', 'approve', 'choose', 'select', 'final call'],
            MeetingType.BRAINSTORM: ['brainstorm', 'ideas', 'creative', 'think outside the box', 'explore']
        }
        
        for meeting_type, indicators in type_indicators.items():
            if any(indicator in content_lower for indicator in indicators):
                return meeting_type
        
        return MeetingType.GENERAL
    
    def _extract_participants(self, email_thread: List[Dict]) -> List[str]:
        """Extract unique participants from email thread."""
        participants = set()
        for email in email_thread:
            participants.add(email.get('from', ''))
            participants.update(email.get('to', []))
            participants.update(email.get('cc', []))
        
        # Remove empty strings and duplicates
        return [p for p in participants if p and p.strip()]
    
    def _extract_action_items(self, content: str, participants: List[str]) -> List[Dict]:
        """Extract action items from content."""
        action_items = []
        
        for pattern in self.ACTION_PATTERNS:
            matches = re.finditer(pattern, content, re.IGNORECASE)
            for match in matches:
                action_text = match.group(1).strip()
                
                # Extract owner
                owner = self._extract_owner(match.group(0), participants)
                
                # Extract deadline
                deadline = self._extract_deadline_from_text(match.group(0))
                
                # Determine priority
                priority = self._determine_priority(action_text)
                
                # Generate unique ID
                item_id = hashlib.md5(
                    f"{action_text}{owner}{datetime.now().isoformat()}".encode()
                ).hexdigest()[:12]
                
                action_items.append({
                    'id': item_id,
                    'text': action_text,
                    'owner': owner,
                    'deadline': deadline,
                    'priority': priority.value,
                    'status': ActionItemStatus.PENDING.value,
                    'created_at': datetime.now().isoformat()
                })
        
        # Remove duplicates
        seen = set()
        unique_items = []
        for item in action_items:
            key = (item['text'], item['owner'])
            if key not in seen:
                seen.add(key)
                unique_items.append(item)
        
        return unique_items
    
    def _extract_owner(self, text: str, participants: List[str]) -> Optional[str]:
        """Extract action item owner from text."""
        for pattern in self.OWNER_PATTERNS:
            match = re.search(pattern, text, re.IGNORECASE)
            if match:
                potential_owner = match.group(1).strip()
                # Check if it's a valid participant
                for participant in participants:
                    if potential_owner.lower() in participant.lower():
                        return participant
                return potential_owner
        return None
    
    def _extract_deadline_from_text(self, text: str) -> Optional[str]:
        """Extract deadline from text."""
        for pattern in self.DEADLINE_PATTERNS:
            match = re.search(pattern, text, re.IGNORECASE)
            if match:
                return self._normalize_deadline(match.group(1))
        return None
    
    def _normalize_deadline(self, deadline_text: str) -> str:
        """Normalize deadline to standard format."""
        deadline_lower = deadline_text.lower()
        
        # Handle relative dates
        if 'today' in deadline_lower:
            return datetime.now().strftime('%Y-%m-%d')
        elif 'tomorrow' in deadline_lower:
            return (datetime.now() + timedelta(days=1)).strftime('%Y-%m-%d')
        elif 'next week' in deadline_lower:
            return (datetime.now() + timedelta(weeks=1)).strftime('%Y-%m-%d')
        elif 'end of week' in deadline_lower:
            # Calculate end of current week (Friday)
            days_until_friday = (4 - datetime.now().weekday()) % 7
            return (datetime.now() + timedelta(days=days_until_friday)).strftime('%Y-%m-%d')
        elif 'end of month' in deadline_lower:
            # Last day of current month
            next_month = datetime.now().replace(day=28) + timedelta(days=4)
            last_day = next_month - timedelta(days=next_month.day)
            return last_day.strftime('%Y-%m-%d')
        
        # Return as-is for now (could add more parsing)
        return deadline_text
    
    def _determine_priority(self, action_text: str) -> ActionItemPriority:
        """Determine priority of action item."""
        text_lower = action_text.lower()
        
        # Critical indicators
        if any(word in text_lower for word in ['critical', 'emergency', 'immediately', 'asap', 'urgent']):
            return ActionItemPriority.CRITICAL
        
        # High priority indicators
        if any(word in text_lower for word in ['important', 'high priority', 'must', 'deadline']):
            return ActionItemPriority.HIGH
        
        # Medium priority indicators
        if any(word in text_lower for word in ['should', 'need to', 'required']):
            return ActionItemPriority.MEDIUM
        
        return ActionItemPriority.LOW
    
    def _extract_decisions(self, content: str) -> List[Dict]:
        """Extract decisions made during meeting."""
        decisions = []
        
        for pattern in self.DECISION_PATTERNS:
            matches = re.finditer(pattern, content, re.IGNORECASE)
            for match in matches:
                decision_text = match.group(1).strip()
                
                # Generate unique ID
                decision_id = hashlib.md5(
                    f"{decision_text}{datetime.now().isoformat()}".encode()
                ).hexdigest()[:12]
                
                decisions.append({
                    'id': decision_id,
                    'text': decision_text,
                    'timestamp': datetime.now().isoformat()
                })
        
        return decisions
    
    def _extract_discussion_points(self, content: str) -> List[str]:
        """Extract key discussion points."""
        # Split into paragraphs
        paragraphs = content.split('\n\n')
        
        # Filter for substantive paragraphs
        points = []
        for para in paragraphs:
            para = para.strip()
            if len(para) > 50 and len(para) < 500:
                # Remove email headers
                if not any(para.startswith(prefix) for prefix in ['From:', 'Subject:', 'Date:', '---']):
                    points.append(para)
        
        # Return top 5 points
        return points[:5]
    
    def _extract_deadlines(self, content: str) -> List[Dict]:
        """Extract all deadlines mentioned."""
        deadlines = []
        
        for pattern in self.DEADLINE_PATTERNS:
            matches = re.finditer(pattern, content, re.IGNORECASE)
            for match in matches:
                deadline_date = self._normalize_deadline(match.group(1))
                
                # Extract context
                context_start = max(0, match.start() - 50)
                context_end = min(len(content), match.end() + 50)
                context = content[context_start:context_end].strip()
                
                deadlines.append({
                    'date': deadline_date,
                    'context': context,
                    'extracted_at': datetime.now().isoformat()
                })
        
        return deadlines
    
    def _generate_summary(self, meeting_type: MeetingType, action_items: List[Dict],
                         decisions: List[Dict], discussion_points: List[str]) -> str:
        """Generate executive summary of meeting."""
        summary_parts = []
        
        # Meeting type context
        type_context = {
            MeetingType.STANDUP: "Daily standup meeting",
            MeetingType.PLANNING: "Planning session",
            MeetingType.REVIEW: "Review meeting",
            MeetingType.RETROSPECTIVE: "Retrospective meeting",
            MeetingType.DECISION: "Decision-making meeting",
            MeetingType.BRAINSTORM: "Brainstorming session",
            MeetingType.GENERAL: "General meeting"
        }
        
        summary_parts.append(f"{type_context[meeting_type]} completed.")
        
        # Action items count
        if action_items:
            summary_parts.append(f"{len(action_items)} action item(s) identified.")
        
        # Decisions count
        if decisions:
            summary_parts.append(f"{len(decisions)} decision(s) made.")
        
        # Key points
        if discussion_points:
            summary_parts.append(f"{len(discussion_points)} key discussion point(s) captured.")
        
        return ' '.join(summary_parts)
    
    def _determine_follow_up(self, action_items: List[Dict], deadlines: List[Dict],
                            participants: List[str]) -> Dict:
        """Determine follow-up requirements."""
        follow_up = {
            'required': len(action_items) > 0 or len(deadlines) > 0,
            'next_meeting': None,
            'reminders': [],
            'participants': participants
        }
        
        # Schedule next meeting based on type
        if action_items:
            # Suggest follow-up in 1 week
            follow_up['next_meeting'] = (
                datetime.now() + timedelta(weeks=1)
            ).strftime('%Y-%m-%d')
        
        # Create reminders for deadlines
        for deadline in deadlines:
            follow_up['reminders'].append({
                'deadline': deadline['date'],
                'context': deadline['context']
            })
        
        return follow_up
    
    def _format_minutes(self, minutes_id: str, meeting_type: MeetingType,
                       participants: List[str], summary: str, action_items: List[Dict],
                       decisions: List[Dict], discussion_points: List[str],
                       deadlines: List[Dict]) -> str:
        """Format minutes in readable format."""
        lines = []
        lines.append(f"=" * 60)
        lines.append(f"MEETING MINUTES - {meeting_type.value.upper()}")
        lines.append(f"ID: {minutes_id}")
        lines.append(f"Date: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
        lines.append(f"=" * 60)
        lines.append("")
        
        # Participants
        lines.append("PARTICIPANTS:")
        for participant in participants:
            lines.append(f"  • {participant}")
        lines.append("")
        
        # Summary
        lines.append("SUMMARY:")
        lines.append(f"  {summary}")
        lines.append("")
        
        # Action Items
        if action_items:
            lines.append("ACTION ITEMS:")
            for i, item in enumerate(action_items, 1):
                lines.append(f"  {i}. {item['text']}")
                if item['owner']:
                    lines.append(f"     Owner: {item['owner']}")
                if item['deadline']:
                    lines.append(f"     Deadline: {item['deadline']}")
                lines.append(f"     Priority: {item['priority']}")
                lines.append(f"     Status: {item['status']}")
                lines.append("")
        
        # Decisions
        if decisions:
            lines.append("DECISIONS:")
            for i, decision in enumerate(decisions, 1):
                lines.append(f"  {i}. {decision['text']}")
            lines.append("")
        
        # Discussion Points
        if discussion_points:
            lines.append("KEY DISCUSSION POINTS:")
            for i, point in enumerate(discussion_points, 1):
                lines.append(f"  {i}. {point[:100]}...")
            lines.append("")
        
        # Deadlines
        if deadlines:
            lines.append("UPCOMING DEADLINES:")
            for deadline in deadlines:
                lines.append(f"  • {deadline['date']}: {deadline['context'][:80]}...")
            lines.append("")
        
        lines.append(f"=" * 60)
        lines.append("End of Minutes")
        lines.append(f"=" * 60)
        
        return '\n'.join(lines)
    
    def update_action_item(self, item_id: str, status: ActionItemStatus,
                          notes: Optional[str] = None) -> Dict:
        """Update action item status."""
        if item_id not in self.action_items:
            return {'success': False, 'error': 'Action item not found'}
        
        item = self.action_items[item_id]
        item['status'] = status.value
        item['updated_at'] = datetime.now().isoformat()
        
        if notes:
            item['notes'] = notes
        
        return {'success': True, 'item': item}
    
    def get_action_items_by_owner(self, owner: str) -> List[Dict]:
        """Get all action items for a specific owner."""
        return [
            item for item in self.action_items.values()
            if item.get('owner', '').lower() == owner.lower()
        ]
    
    def get_overdue_items(self) -> List[Dict]:
        """Get all overdue action items."""
        today = datetime.now().strftime('%Y-%m-%d')
        overdue = []
        
        for item in self.action_items.values():
            if item['status'] != ActionItemStatus.COMPLETED.value and item.get('deadline'):
                if item['deadline'] < today:
                    overdue.append(item)
        
        return overdue
    
    def get_stats(self) -> Dict:
        """Get generator statistics."""
        total_minutes = len(self.minutes_history)
        total_actions = len(self.action_items)
        completed_actions = sum(
            1 for item in self.action_items.values()
            if item['status'] == ActionItemStatus.COMPLETED.value
        )
        overdue_actions = len(self.get_overdue_items())
        
        return {
            'minutes_generated': total_minutes,
            'total_action_items': total_actions,
            'completed_actions': completed_actions,
            'overdue_actions': overdue_actions,
            'completion_rate': completed_actions / max(1, total_actions),
            'reply_all_enforcements': self.reply_all_count
        }


def demo():
    """Demonstrate V147 meeting minutes generator."""
    generator = MeetingMinutesGenerator()
    
    print("=" * 60)
    print("V147: AI Email Meeting Minutes Generator - Demo")
    print("=" * 60)
    
    # Simulate email thread from planning meeting
    email_thread = [
        {
            'from': 'manager@company.com',
            'to': ['team@company.com'],
            'cc': ['director@company.com'],
            'subject': 'Q1 Planning Meeting Notes',
            'content': """
            Hi team,
            
            Thanks for attending today's Q1 planning meeting. Here are the key points:
            
            1. We decided to launch the new product by March 15th.
            2. @john will lead the marketing campaign and needs to prepare the launch plan by next Friday.
            3. @sarah is responsible for the technical implementation. The deadline is February 28th.
            4. We agreed to increase the budget by 20% for this initiative.
            5. The team should focus on user testing in January.
            
            Action items:
            - John must prepare marketing materials by Jan 20
            - Sarah will complete technical specs by Jan 15
            - Mike needs to set up testing environment by end of week
            
            Let me know if I missed anything.
            
            Best regards,
            Manager
            """
        },
        {
            'from': 'john@company.com',
            'to': ['manager@company.com', 'team@company.com'],
            'cc': ['director@company.com'],
            'subject': 'Re: Q1 Planning Meeting Notes',
            'content': """
            Thanks for the summary. I'll start working on the marketing plan immediately.
            
            One addition: We also decided to hire 2 additional designers. I'll post the job listings by tomorrow.
            
            Best,
            John
            """
        }
    ]
    
    print("\n[Generating Meeting Minutes]")
    print(f"Thread: {len(email_thread)} emails")
    print(f"Participants: manager, john, sarah, mike, director")
    
    minutes = generator.generate_minutes(email_thread, {'type': 'planning'})
    
    print(f"\n{'=' * 60}")
    print("GENERATED MINUTES:")
    print(f"{'=' * 60}")
    print(minutes['formatted_minutes'])
    
    print(f"\n{'=' * 60}")
    print("METADATA:")
    print(f"Meeting Type: {minutes['meeting_type']}")
    print(f"Action Items: {len(minutes['action_items'])}")
    print(f"Decisions: {len(minutes['decisions'])}")
    print(f"Discussion Points: {len(minutes['discussion_points'])}")
    print(f"Deadlines: {len(minutes['deadlines'])}")
    print(f"Reply-All: {minutes['reply_all']}")
    print(f"Follow-up Required: {minutes['follow_up']['required']}")
    
    # Test action item updates
    print(f"\n{'=' * 60}")
    print("ACTION ITEM MANAGEMENT:")
    
    if minutes['action_items']:
        first_item = minutes['action_items'][0]
        print(f"\nUpdating item: {first_item['text']}")
        update_result = generator.update_action_item(
            first_item['id'],
            ActionItemStatus.IN_PROGRESS,
            "Started working on this"
        )
        print(f"Update successful: {update_result['success']}")
        print(f"New status: {update_result['item']['status']}")
    
    # Get items by owner
    print(f"\n{'=' * 60}")
    print("ACTION ITEMS BY OWNER:")
    john_items = generator.get_action_items_by_owner('john')
    print(f"John's items: {len(john_items)}")
    for item in john_items:
        print(f"  • {item['text']} (Status: {item['status']})")
    
    # Statistics
    print(f"\n{'=' * 60}")
    print("\n[Generator Statistics]")
    stats = generator.get_stats()
    for key, value in stats.items():
        if isinstance(value, float):
            print(f"{key}: {value:.2f}")
        else:
            print(f"{key}: {value}")


if __name__ == "__main__":
    demo()

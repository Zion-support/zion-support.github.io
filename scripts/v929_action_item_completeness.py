#!/usr/bin/env python3
"""
V929: Email Action Item Completeness Checker
Verifies that all action items from previous emails have been addressed before allowing new requests.
Prevents task abandonment and ensures follow-through.
"""

import re
from datetime import datetime
from typing import Dict, List, Any, Tuple
from collections import defaultdict

class ActionItemCompletenessChecker:
    def __init__(self):
        self.action_patterns = [
            r'(?:please|kindly)\s+(.+?)(?:\.|$)',
            r'(?:can you|could you)\s+(.+?)(?:\.|\?)',
            r'(?:need to|must)\s+(.+?)(?:\.|$)',
            r'(?:action item|todo|task):\s*(.+?)(?:\.|$)',
            r'(?:responsible for|in charge of)\s+(.+?)(?:\.|$)',
            r'(?:deadline|due|by)\s+(.+?)(?:\.|$)',
        ]
        self.completion_indicators = ['done', 'completed', 'finished', 'delivered', 'submitted', 'resolved', 'shipped', 'deployed', 'merged']
        self.pending_indicators = ['still working', 'in progress', 'not yet', 'pending', 'waiting', 'blocked', 'delayed']
        
    def check_completeness(self, thread_emails: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Check if all action items in a thread have been addressed."""
        if not thread_emails:
            return {
                'error': 'No emails provided',
                'action_items': [],
                'completeness_score': 0.0,
                'status': 'unknown',
                'recommendations': []
            }
        
        # Sort emails chronologically
        sorted_emails = sorted(thread_emails, key=lambda x: x.get('timestamp', ''))
        
        # Extract action items from all emails
        all_action_items = []
        for email in sorted_emails:
            items = self._extract_action_items(email)
            all_action_items.extend(items)
        
        # Check completion status for each action item
        for item in all_action_items:
            item['status'] = self._check_item_status(item, sorted_emails)
        
        # Calculate completeness score
        total_items = len(all_action_items)
        completed_items = sum(1 for item in all_action_items if item['status'] == 'completed')
        in_progress_items = sum(1 for item in all_action_items if item['status'] == 'in_progress')
        pending_items = sum(1 for item in all_action_items if item['status'] == 'pending')
        
        if total_items > 0:
            completeness_score = (completed_items + in_progress_items * 0.5) / total_items
        else:
            completeness_score = 1.0
        
        # Determine overall status
        if completeness_score >= 0.9:
            status = 'complete'
        elif completeness_score >= 0.6:
            status = 'mostly_complete'
        elif completeness_score >= 0.3:
            status = 'partially_complete'
        else:
            status = 'incomplete'
        
        # Generate recommendations
        recommendations = self._generate_recommendations(all_action_items, status, completeness_score)
        
        # Check if reply-all is needed
        all_recipients = set()
        for email in sorted_emails:
            all_recipients.add(email.get('sender', ''))
            all_recipients.update(email.get('recipients', []))
        reply_all_required = len(all_recipients) > 1
        
        result = {
            'action_items': all_action_items,
            'total_items': total_items,
            'completed_items': completed_items,
            'in_progress_items': in_progress_items,
            'pending_items': pending_items,
            'completeness_score': round(completeness_score, 2),
            'status': status,
            'recommendations': recommendations,
            'reply_all_required': reply_all_required,
            'can_proceed_with_new_requests': completeness_score >= 0.5,
            'summary': self._generate_summary(all_action_items, completeness_score, status)
        }
        
        return result
    
    def _extract_action_items(self, email: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Extract action items from an email."""
        items = []
        subject = email.get('subject', '')
        body = email.get('body', '')
        text = f"{subject} {body}"
        
        for pattern in self.action_patterns:
            matches = re.finditer(pattern, text, re.IGNORECASE)
            for match in matches:
                item_text = match.group(1).strip()
                if len(item_text) > 10:  # Filter out very short matches
                    # Try to identify assignee
                    assignee = self._identify_assignee(item_text, email)
                    
                    # Try to identify deadline
                    deadline = self._identify_deadline(item_text)
                    
                    items.append({
                        'id': f"action_{len(items)}",
                        'text': item_text[:200],
                        'source_email_id': email.get('id', ''),
                        'source_timestamp': email.get('timestamp', ''),
                        'assignee': assignee,
                        'deadline': deadline,
                        'status': 'pending'  # Will be updated later
                    })
        
        return items
    
    def _identify_assignee(self, item_text: str, email: Dict[str, Any]) -> str:
        """Identify who is assigned the action item."""
        text_lower = item_text.lower()
        
        # Check for explicit mentions
        for recipient in email.get('recipients', []):
            name = recipient.split('@')[0].lower()
            if name in text_lower:
                return recipient
        
        # Check for @mentions
        mention_match = re.search(r'@(\w+)', item_text)
        if mention_match:
            return mention_match.group(1)
        
        # Default to email recipients
        recipients = email.get('recipients', [])
        if len(recipients) == 1:
            return recipients[0]
        
        return 'unassigned'
    
    def _identify_deadline(self, item_text: str) -> str:
        """Identify deadline from action item text."""
        text_lower = item_text.lower()
        
        # Check for common deadline patterns
        if 'today' in text_lower:
            return 'today'
        elif 'tomorrow' in text_lower:
            return 'tomorrow'
        elif 'this week' in text_lower:
            return 'this week'
        elif 'next week' in text_lower:
            return 'next week'
        elif 'eod' in text_lower or 'end of day' in text_lower:
            return 'EOD'
        elif 'eow' in text_lower or 'end of week' in text_lower:
            return 'EOW'
        
        # Check for specific dates
        date_match = re.search(r'(?:by|before|due)\s+(\d{1,2}/\d{1,2}(?:/\d{2,4})?)', text_lower)
        if date_match:
            return date_match.group(1)
        
        return 'none'
    
    def _check_item_status(self, item: Dict, thread_emails: List[Dict]) -> str:
        """Check if an action item has been completed."""
        item_text = item['text'].lower()
        
        # Look for completion indicators in subsequent emails
        for email in thread_emails:
            if email.get('timestamp', '') <= item['source_timestamp']:
                continue  # Only check emails after the action was requested
            
            email_text = (email.get('subject', '') + ' ' + email.get('body', '')).lower()
            
            # Check for completion indicators
            for indicator in self.completion_indicators:
                if indicator in email_text:
                    # Check if it relates to this action item
                    if any(word in email_text for word in item_text.split()[:5]):
                        return 'completed'
            
            # Check for in-progress indicators
            for indicator in self.pending_indicators:
                if indicator in email_text:
                    if any(word in email_text for word in item_text.split()[:5]):
                        return 'in_progress'
        
        return 'pending'
    
    def _generate_recommendations(self, action_items: List[Dict], status: str, score: float) -> List[str]:
        """Generate recommendations based on completeness status."""
        recommendations = []
        
        pending_items = [item for item in action_items if item['status'] == 'pending']
        in_progress_items = [item for item in action_items if item['status'] == 'in_progress']
        
        if status == 'incomplete':
            recommendations.append("⚠️ Multiple action items remain unaddressed")
            recommendations.append("Complete pending items before adding new requests")
        
        if pending_items:
            recommendations.append(f"📋 {len(pending_items)} action items still pending:")
            for item in pending_items[:3]:
                recommendations.append(f"   - {item['text'][:80]}...")
        
        if in_progress_items:
            recommendations.append(f"🔄 {len(in_progress_items)} items in progress")
        
        if score < 0.5:
            recommendations.append("❌ Consider blocking new requests until completion improves")
        elif score >= 0.9:
            recommendations.append("✅ Excellent follow-through - ready for new initiatives")
        
        return recommendations
    
    def _generate_summary(self, action_items: List[Dict], score: float, status: str) -> str:
        """Generate human-readable summary."""
        total = len(action_items)
        completed = sum(1 for item in action_items if item['status'] == 'completed')
        
        summary_parts = [
            f"Tracked {total} action items.",
            f"{completed} completed ({score:.0%} completeness).",
            f"Status: {status.replace('_', ' ').title()}."
        ]
        
        if status == 'incomplete':
            summary_parts.append("⚠️ Significant work remains before proceeding.")
        elif status == 'complete':
            summary_parts.append("✅ All commitments fulfilled.")
        
        return ' '.join(summary_parts)


def main():
    """Test the Action Item Completeness Checker."""
    checker = ActionItemCompletenessChecker()
    
    # Test case: thread with mixed completion
    test_emails = [
        {
            'id': 'email_1',
            'timestamp': '2026-05-25T10:00:00',
            'sender': 'manager@company.com',
            'subject': 'Project tasks',
            'body': 'Please prepare the budget report by Friday. Also, could you update the project timeline? Need to schedule the client demo for next week.',
            'recipients': ['alice@company.com', 'bob@company.com']
        },
        {
            'id': 'email_2',
            'timestamp': '2026-05-27T14:30:00',
            'sender': 'alice@company.com',
            'subject': 'Re: Project tasks',
            'body': 'The budget report is completed and submitted. Working on the project timeline update - should be done tomorrow.',
            'recipients': ['manager@company.com', 'bob@company.com']
        },
        {
            'id': 'email_3',
            'timestamp': '2026-05-29T09:15:00',
            'sender': 'bob@company.com',
            'subject': 'Re: Project tasks',
            'body': 'Project timeline is finished. Still working on scheduling the client demo.',
            'recipients': ['manager@company.com', 'alice@company.com']
        }
    ]
    
    result = checker.check_completeness(test_emails)
    
    print("=" * 60)
    print("V929: Action Item Completeness Checker - Test Results")
    print("=" * 60)
    print(f"\nTotal Action Items: {result['total_items']}")
    print(f"Completed: {result['completed_items']}")
    print(f"In Progress: {result['in_progress_items']}")
    print(f"Pending: {result['pending_items']}")
    print(f"Completeness Score: {result['completeness_score']:.0%}")
    print(f"Status: {result['status'].replace('_', ' ').title()}")
    print(f"Can Proceed: {result['can_proceed_with_new_requests']}")
    print(f"Reply All Required: {result['reply_all_required']}")
    print(f"\nRecommendations:")
    for rec in result['recommendations']:
        print(f"  {rec}")
    print(f"\nSummary: {result['summary']}")
    print("\n✅ V929 Action Item Completeness Checker: OPERATIONAL")


if __name__ == '__main__':
    main()

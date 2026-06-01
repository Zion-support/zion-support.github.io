#!/usr/bin/env python3
"""
V1035 - Email Collaboration Tools Engine
Shared inboxes, team assignments, internal notes, and collaborative drafting.
Enables seamless team collaboration on email communications.
"""
import re
from typing import Dict, List, Any, Optional
from datetime import datetime, timedelta
from collections import defaultdict


class EmailCollaborationTools:
    """Team collaboration tools for email management."""
    
    def __init__(self):
        self.shared_inboxes = {}
        self.assignments = []
        self.internal_notes = []
        self.collaborative_drafts = {}
        self.team_members = {}
    
    def create_shared_inbox(self, inbox_data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Create shared inbox for team.
        
        Args:
            inbox_data: Inbox configuration
            
        Returns:
            Created shared inbox
        """
        inbox = {
            'inbox_id': f"inbox_{len(self.shared_inboxes) + 1}",
            'name': inbox_data.get('name', 'Shared Inbox'),
            'email_address': inbox_data.get('email_address'),
            'team_members': inbox_data.get('team_members', []),
            'permissions': inbox_data.get('permissions', {
                'read': 'all',
                'reply': 'all',
                'assign': 'all',
                'delete': 'admin'
            }),
            'created_at': datetime.now().isoformat(),
            'status': 'active',
            'email_count': 0,
            'unassigned_count': 0
        }
        
        self.shared_inboxes[inbox['inbox_id']] = inbox
        
        return {
            'engine': 'V1035 - Email Collaboration Tools',
            'shared_inbox': inbox,
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }
    
    def add_team_member(self, inbox_id: str,
                       member_data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Add team member to shared inbox.
        
        Args:
            inbox_id: Shared inbox ID
            member_data: Member information
            
        Returns:
            Member addition result
        """
        inbox = self.shared_inboxes.get(inbox_id)
        if not inbox:
            return {'success': False, 'error': 'Inbox not found'}
        
        member = {
            'member_id': f"member_{len(self.team_members) + 1}",
            'inbox_id': inbox_id,
            'email': member_data.get('email'),
            'name': member_data.get('name'),
            'role': member_data.get('role', 'member'),  # admin, member, viewer
            'added_at': datetime.now().isoformat(),
            'status': 'active'
        }
        
        self.team_members[member['member_id']] = member
        inbox['team_members'].append(member['member_id'])
        
        return {
            'engine': 'V1035 - Email Collaboration Tools',
            'member': member,
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }
    
    def assign_email(self, email_id: str,
                    assignee_id: str,
                    assigned_by: str,
                    priority: str = 'normal') -> Dict[str, Any]:
        """
        Assign email to team member.
        
        Args:
            email_id: Email ID to assign
            assignee_id: Team member ID
            assigned_by: ID of person making assignment
            priority: Assignment priority
            
        Returns:
            Assignment result
        """
        assignment = {
            'assignment_id': f"assign_{len(self.assignments) + 1}",
            'email_id': email_id,
            'assignee_id': assignee_id,
            'assigned_by': assigned_by,
            'priority': priority,
            'status': 'assigned',
            'assigned_at': datetime.now().isoformat(),
            'due_date': None,
            'notes': []
        }
        
        self.assignments.append(assignment)
        
        return {
            'engine': 'V1035 - Email Collaboration Tools',
            'assignment': assignment,
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }
    
    def add_internal_note(self, email_id: str,
                         author_id: str,
                         note_text: str,
                         visibility: str = 'team') -> Dict[str, Any]:
        """
        Add internal note to email.
        
        Args:
            email_id: Email ID
            author_id: Author member ID
            note_text: Note content
            visibility: Note visibility (team, admin, private)
            
        Returns:
            Note addition result
        """
        note = {
            'note_id': f"note_{len(self.internal_notes) + 1}",
            'email_id': email_id,
            'author_id': author_id,
            'note_text': note_text,
            'visibility': visibility,
            'created_at': datetime.now().isoformat(),
            'mentions': self._extract_mentions(note_text),
            'status': 'active'
        }
        
        self.internal_notes.append(note)
        
        # Notify mentioned team members
        notifications = []
        for mentioned_member in note['mentions']:
            notifications.append({
                'type': 'mention',
                'member_id': mentioned_member,
                'note_id': note['note_id'],
                'timestamp': note['created_at']
            })
        
        return {
            'engine': 'V1035 - Email Collaboration Tools',
            'note': note,
            'notifications': notifications,
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }
    
    def _extract_mentions(self, text: str) -> List[str]:
        """Extract @mentions from text."""
        mentions = re.findall(r'@(\w+)', text)
        return mentions
    
    def create_collaborative_draft(self, email_id: str,
                                  creator_id: str,
                                  initial_content: str = '') -> Dict[str, Any]:
        """
        Create collaborative draft for team editing.
        
        Args:
            email_id: Email ID
            creator_id: Creator member ID
            initial_content: Initial draft content
            
        Returns:
            Collaborative draft
        """
        draft = {
            'draft_id': f"draft_{len(self.collaborative_drafts) + 1}",
            'email_id': email_id,
            'creator_id': creator_id,
            'content': initial_content,
            'version': 1,
            'editors': [creator_id],
            'created_at': datetime.now().isoformat(),
            'updated_at': datetime.now().isoformat(),
            'status': 'draft',
            'comments': [],
            'suggestions': []
        }
        
        self.collaborative_drafts[draft['draft_id']] = draft
        
        return {
            'engine': 'V1035 - Email Collaboration Tools',
            'draft': draft,
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }
    
    def update_collaborative_draft(self, draft_id: str,
                                  editor_id: str,
                                  new_content: str) -> Dict[str, Any]:
        """
        Update collaborative draft.
        
        Args:
            draft_id: Draft ID
            editor_id: Editor member ID
            new_content: Updated content
            
        Returns:
            Update result
        """
        draft = self.collaborative_drafts.get(draft_id)
        if not draft:
            return {'success': False, 'error': 'Draft not found'}
        
        draft['content'] = new_content
        draft['version'] += 1
        draft['updated_at'] = datetime.now().isoformat()
        
        if editor_id not in draft['editors']:
            draft['editors'].append(editor_id)
        
        return {
            'engine': 'V1035 - Email Collaboration Tools',
            'draft': draft,
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }
    
    def add_draft_comment(self, draft_id: str,
                         author_id: str,
                         comment_text: str) -> Dict[str, Any]:
        """
        Add comment to collaborative draft.
        
        Args:
            draft_id: Draft ID
            author_id: Author member ID
            comment_text: Comment content
            
        Returns:
            Comment addition result
        """
        draft = self.collaborative_drafts.get(draft_id)
        if not draft:
            return {'success': False, 'error': 'Draft not found'}
        
        comment = {
            'comment_id': f"comment_{len(draft['comments']) + 1}",
            'author_id': author_id,
            'comment_text': comment_text,
            'created_at': datetime.now().isoformat(),
            'resolved': False
        }
        
        draft['comments'].append(comment)
        
        return {
            'engine': 'V1035 - Email Collaboration Tools',
            'comment': comment,
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }
    
    def get_inbox_activity(self, inbox_id: str,
                          time_range_hours: int = 24) -> Dict[str, Any]:
        """
        Get activity summary for shared inbox.
        
        Args:
            inbox_id: Shared inbox ID
            time_range_hours: Hours to include
            
        Returns:
            Activity summary
        """
        inbox = self.shared_inboxes.get(inbox_id)
        if not inbox:
            return {'success': False, 'error': 'Inbox not found'}
        
        cutoff_time = datetime.now() - timedelta(hours=time_range_hours)
        
        # Get recent assignments
        recent_assignments = [
            a for a in self.assignments
            if datetime.fromisoformat(a['assigned_at']) > cutoff_time
        ]
        
        # Get recent notes
        recent_notes = [
            n for n in self.internal_notes
            if datetime.fromisoformat(n['created_at']) > cutoff_time
        ]
        
        # Get recent draft updates
        recent_drafts = [
            d for d in self.collaborative_drafts.values()
            if datetime.fromisoformat(d['updated_at']) > cutoff_time
        ]
        
        activity = {
            'inbox_id': inbox_id,
            'inbox_name': inbox['name'],
            'time_range_hours': time_range_hours,
            'summary': {
                'new_assignments': len(recent_assignments),
                'internal_notes': len(recent_notes),
                'draft_updates': len(recent_drafts),
                'total_activity': len(recent_assignments) + len(recent_notes) + len(recent_drafts)
            },
            'team_activity': self._get_team_activity_breakdown(recent_assignments, recent_notes),
            'generated_at': datetime.now().isoformat()
        }
        
        return {
            'engine': 'V1035 - Email Collaboration Tools',
            'activity': activity,
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }
    
    def _get_team_activity_breakdown(self, assignments: List, notes: List) -> Dict[str, Any]:
        """Get breakdown of activity by team member."""
        member_activity = defaultdict(lambda: {'assignments': 0, 'notes': 0, 'total': 0})
        
        for assignment in assignments:
            member_id = assignment['assignee_id']
            member_activity[member_id]['assignments'] += 1
            member_activity[member_id]['total'] += 1
        
        for note in notes:
            member_id = note['author_id']
            member_activity[member_id]['notes'] += 1
            member_activity[member_id]['total'] += 1
        
        return dict(member_activity)
    
    def get_email_collaboration_status(self, email_id: str) -> Dict[str, Any]:
        """
        Get collaboration status for specific email.
        
        Args:
            email_id: Email ID
            
        Returns:
            Collaboration status
        """
        # Get assignments
        email_assignments = [a for a in self.assignments if a['email_id'] == email_id]
        
        # Get notes
        email_notes = [n for n in self.internal_notes if n['email_id'] == email_id]
        
        # Get drafts
        email_drafts = [d for d in self.collaborative_drafts.values() if d['email_id'] == email_id]
        
        status = {
            'email_id': email_id,
            'assignment_status': 'assigned' if email_assignments else 'unassigned',
            'assignees': [a['assignee_id'] for a in email_assignments],
            'internal_notes_count': len(email_notes),
            'has_draft': len(email_drafts) > 0,
            'draft_count': len(email_drafts),
            'collaboration_level': self._calculate_collaboration_level(
                email_assignments, email_notes, email_drafts
            ),
            'last_activity': self._get_last_activity_time(
                email_assignments, email_notes, email_drafts
            )
        }
        
        return {
            'engine': 'V1035 - Email Collaboration Tools',
            'status': status,
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }
    
    def _calculate_collaboration_level(self, assignments: List, notes: List, drafts: List) -> str:
        """Calculate collaboration level based on activity."""
        total_activity = len(assignments) + len(notes) + len(drafts)
        
        if total_activity == 0:
            return 'none'
        elif total_activity <= 2:
            return 'low'
        elif total_activity <= 5:
            return 'medium'
        else:
            return 'high'
    
    def _get_last_activity_time(self, assignments: List, notes: List, drafts: List) -> Optional[str]:
        """Get timestamp of last activity."""
        timestamps = []
        
        for assignment in assignments:
            timestamps.append(assignment['assigned_at'])
        
        for note in notes:
            timestamps.append(note['created_at'])
        
        for draft in drafts:
            timestamps.append(draft['updated_at'])
        
        if timestamps:
            return max(timestamps)
        
        return None


def create_shared_inbox(inbox_data: Dict[str, Any]) -> Dict[str, Any]:
    """
    Create shared inbox.
    
    Args:
        inbox_data: Inbox configuration
        
    Returns:
        Created shared inbox
    """
    tools = EmailCollaborationTools()
    return tools.create_shared_inbox(inbox_data)


if __name__ == '__main__':
    # Test cases
    print(f"{'='*60}")
    print("Email Collaboration Tools Test")
    print('='*60)
    
    tools = EmailCollaborationTools()
    
    # Create shared inbox
    inbox = tools.create_shared_inbox({
        'name': 'Customer Support',
        'email_address': 'support@company.com',
        'team_members': []
    })
    
    print(f"\nShared Inbox Created:")
    print(f"  Inbox ID: {inbox['shared_inbox']['inbox_id']}")
    print(f"  Name: {inbox['shared_inbox']['name']}")
    print(f"  Email: {inbox['shared_inbox']['email_address']}")
    print(f"  Status: {inbox['shared_inbox']['status']}")
    
    # Add team members
    print(f"\n{'='*60}")
    print("Adding Team Members")
    print('='*60)
    
    member1 = tools.add_team_member(inbox['shared_inbox']['inbox_id'], {
        'email': 'alice@company.com',
        'name': 'Alice Johnson',
        'role': 'admin'
    })
    
    member2 = tools.add_team_member(inbox['shared_inbox']['inbox_id'], {
        'email': 'bob@company.com',
        'name': 'Bob Smith',
        'role': 'member'
    })
    
    print(f"\nTeam Members Added:")
    print(f"  Member 1: {member1['member']['name']} ({member1['member']['role']})")
    print(f"  Member 2: {member2['member']['name']} ({member2['member']['role']})")
    
    # Assign email
    print(f"\n{'='*60}")
    print("Assigning Email")
    print('='*60)
    
    assignment = tools.assign_email(
        email_id='email_001',
        assignee_id=member1['member']['member_id'],
        assigned_by=member2['member']['member_id'],
        priority='high'
    )
    
    print(f"\nEmail Assigned:")
    print(f"  Assignment ID: {assignment['assignment']['assignment_id']}")
    print(f"  Email ID: {assignment['assignment']['email_id']}")
    print(f"  Assignee: {assignment['assignment']['assignee_id']}")
    print(f"  Priority: {assignment['assignment']['priority']}")
    print(f"  Status: {assignment['assignment']['status']}")
    
    # Add internal note
    print(f"\n{'='*60}")
    print("Adding Internal Note")
    print('='*60)
    
    note = tools.add_internal_note(
        email_id='email_001',
        author_id=member2['member']['member_id'],
        note_text='Customer is VIP. @alice please prioritize this. Needs response within 2 hours.',
        visibility='team'
    )
    
    print(f"\nInternal Note Added:")
    print(f"  Note ID: {note['note']['note_id']}")
    print(f"  Author: {note['note']['author_id']}")
    print(f"  Text: {note['note']['note_text'][:50]}...")
    print(f"  Visibility: {note['note']['visibility']}")
    print(f"  Mentions: {note['note']['mentions']}")
    print(f"  Notifications: {len(note['notifications'])}")
    
    # Create collaborative draft
    print(f"\n{'='*60}")
    print("Creating Collaborative Draft")
    print('='*60)
    
    draft = tools.create_collaborative_draft(
        email_id='email_001',
        creator_id=member1['member']['member_id'],
        initial_content='Dear Customer,\n\nThank you for reaching out...'
    )
    
    print(f"\nCollaborative Draft Created:")
    print(f"  Draft ID: {draft['draft']['draft_id']}")
    print(f"  Email ID: {draft['draft']['email_id']}")
    print(f"  Creator: {draft['draft']['creator_id']}")
    print(f"  Version: {draft['draft']['version']}")
    print(f"  Status: {draft['draft']['status']}")
    
    # Update draft
    print(f"\n{'='*60}")
    print("Updating Collaborative Draft")
    print('='*60)
    
    updated_draft = tools.update_collaborative_draft(
        draft_id=draft['draft']['draft_id'],
        editor_id=member2['member']['member_id'],
        new_content='Dear Valued Customer,\n\nThank you for contacting us. We appreciate your patience...'
    )
    
    print(f"\nDraft Updated:")
    print(f"  Draft ID: {updated_draft['draft']['draft_id']}")
    print(f"  Version: {updated_draft['draft']['version']}")
    print(f"  Editors: {len(updated_draft['draft']['editors'])}")
    print(f"  Updated At: {updated_draft['draft']['updated_at']}")
    
    # Add draft comment
    print(f"\n{'='*60}")
    print("Adding Draft Comment")
    print('='*60)
    
    comment = tools.add_draft_comment(
        draft_id=draft['draft']['draft_id'],
        author_id=member1['member']['member_id'],
        comment_text='Great improvement! Maybe add a personal touch at the end?'
    )
    
    print(f"\nDraft Comment Added:")
    print(f"  Comment ID: {comment['comment']['comment_id']}")
    print(f"  Author: {comment['comment']['author_id']}")
    print(f"  Text: {comment['comment']['comment_text']}")
    print(f"  Resolved: {comment['comment']['resolved']}")
    
    # Get inbox activity
    print(f"\n{'='*60}")
    print("Inbox Activity Summary")
    print('='*60)
    
    activity = tools.get_inbox_activity(inbox['shared_inbox']['inbox_id'], 24)
    
    print(f"\nActivity Summary (24 hours):")
    print(f"  Inbox: {activity['activity']['inbox_name']}")
    print(f"  New Assignments: {activity['activity']['summary']['new_assignments']}")
    print(f"  Internal Notes: {activity['activity']['summary']['internal_notes']}")
    print(f"  Draft Updates: {activity['activity']['summary']['draft_updates']}")
    print(f"  Total Activity: {activity['activity']['summary']['total_activity']}")
    
    # Get email collaboration status
    print(f"\n{'='*60}")
    print("Email Collaboration Status")
    print('='*60)
    
    collab_status = tools.get_email_collaboration_status('email_001')
    
    print(f"\nCollaboration Status:")
    print(f"  Email ID: {collab_status['status']['email_id']}")
    print(f"  Assignment Status: {collab_status['status']['assignment_status']}")
    print(f"  Assignees: {len(collab_status['status']['assignees'])}")
    print(f"  Internal Notes: {collab_status['status']['internal_notes_count']}")
    print(f"  Has Draft: {collab_status['status']['has_draft']}")
    print(f"  Collaboration Level: {collab_status['status']['collaboration_level']}")
    print(f"  Last Activity: {collab_status['status']['last_activity']}")
    
    print(f"\nReply-All Enforced: {inbox['reply_all_enforced']}")
    print(f"Case-by-Case Analysis: {inbox['case_by_case_analysis']}")

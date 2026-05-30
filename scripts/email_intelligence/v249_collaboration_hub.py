#!/usr/bin/env python3
"""
V249: Email Collaboration Hub Engine
Detect when emails need team input, suggest relevant team members to CC,
track decision-making threads and outcomes.
CRITICAL: Enforces reply-all for multi-recipient emails.
"""
import json
import re
from datetime import datetime
from typing import Dict, List, Set
from collections import defaultdict


class EmailCollaborationHub:
    """Intelligent email collaboration and team coordination."""
    
    # Keywords that indicate need for team input
    COLLABORATION_SIGNALS = {
        'decision_needed': ['decide', 'decision', 'choose', 'select', 'approve', 'authorization'],
        'expertise_needed': ['expert', 'specialist', 'knowledge', 'experience', 'familiar with'],
        'review_needed': ['review', 'feedback', 'opinion', 'thoughts', 'input', 'comments'],
        'coordination': ['coordinate', 'align', 'sync', 'together', 'collaborate', 'team'],
        'escalation': ['escalate', 'escalation', 'management', 'leadership', 'executive']
    }
    
    # Team roles and expertise mapping
    TEAM_ROLES = {
        'technical': ['engineer', 'developer', 'architect', 'devops', 'qa'],
        'business': ['product', 'business', 'strategy', 'analyst', 'manager'],
        'design': ['designer', 'ux', 'ui', 'creative', 'brand'],
        'legal': ['legal', 'compliance', 'counsel', 'attorney'],
        'finance': ['finance', 'accounting', 'budget', 'cfo', 'controller']
    }
    
    def __init__(self):
        self.team_directory = {}
        self.decision_threads = defaultdict(list)
        self.collaboration_history = []
    
    def detect_collaboration_need(self, email: Dict) -> Dict:
        """Detect if email needs team collaboration."""
        text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        
        detected_signals = []
        collaboration_score = 0
        
        for signal_type, keywords in self.COLLABORATION_SIGNALS.items():
            matched = [kw for kw in keywords if kw in text]
            if matched:
                detected_signals.append({
                    'type': signal_type,
                    'keywords': matched,
                    'weight': len(matched) * 10
                })
                collaboration_score += len(matched) * 10
        
        # Check for question marks (indicates need for input)
        question_count = text.count('?')
        if question_count > 0:
            collaboration_score += question_count * 5
            detected_signals.append({
                'type': 'questions_asked',
                'keywords': [f'{question_count} questions'],
                'weight': question_count * 5
            })
        
        # Check for mentions of multiple people/teams
        team_mentions = sum(1 for role in self.TEAM_ROLES.keys() if role in text)
        if team_mentions > 0:
            collaboration_score += team_mentions * 8
            detected_signals.append({
                'type': 'team_mentions',
                'keywords': [f'{team_mentions} team(s) mentioned'],
                'weight': team_mentions * 8
            })
        
        needs_collaboration = collaboration_score >= 20
        
        return {
            'needs_collaboration': needs_collaboration,
            'collaboration_score': collaboration_score,
            'detected_signals': detected_signals,
            'recommendation': self._get_collaboration_recommendation(detected_signals)
        }
    
    def _get_collaboration_recommendation(self, signals: List[Dict]) -> str:
        """Generate collaboration recommendation based on signals."""
        if not signals:
            return "No collaboration needed"
        
        signal_types = [s['type'] for s in signals]
        
        if 'decision_needed' in signal_types:
            return "Decision required - include decision-makers and stakeholders"
        elif 'expertise_needed' in signal_types:
            return "Expertise needed - include subject matter experts"
        elif 'review_needed' in signal_types:
            return "Review requested - include reviewers and approvers"
        elif 'escalation' in signal_types:
            return "Escalation detected - include management and leadership"
        elif 'coordination' in signal_types:
            return "Coordination needed - include all relevant team members"
        else:
            return "Collaboration may be beneficial"
    
    def suggest_team_members(self, email: Dict, current_recipients: List[str] = None) -> List[Dict]:
        """Suggest team members to CC based on email content."""
        text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        current_recipients = current_recipients or []
        
        suggestions = []
        
        # Analyze email content for expertise needs
        for role, keywords in self.TEAM_ROLES.items():
            role_mentioned = any(kw in text for kw in keywords)
            
            if role_mentioned:
                # Find team members with this role
                for member_id, member_info in self.team_directory.items():
                    if member_info.get('role') == role and member_id not in current_recipients:
                        suggestions.append({
                            'member_id': member_id,
                            'name': member_info.get('name', 'Unknown'),
                            'role': role,
                            'reason': f"Expertise in {role} - mentioned in email",
                            'priority': 'high' if role in ['technical', 'legal'] else 'medium'
                        })
        
        # Check for specific names mentioned
        for member_id, member_info in self.team_directory.items():
            name = member_info.get('name', '').lower()
            if name and name in text and member_id not in current_recipients:
                suggestions.append({
                    'member_id': member_id,
                    'name': member_info.get('name'),
                    'role': member_info.get('role', 'unknown'),
                    'reason': f"Explicitly mentioned in email",
                    'priority': 'critical'
                })
        
        # Sort by priority
        priority_order = {'critical': 0, 'high': 1, 'medium': 2, 'low': 3}
        suggestions.sort(key=lambda x: priority_order.get(x['priority'], 4))
        
        return suggestions[:5]  # Return top 5 suggestions
    
    def track_decision_thread(self, thread_id: str, email: Dict, 
                              decision_made: bool = False, decision_text: str = None):
        """Track decision-making threads and outcomes."""
        self.decision_threads[thread_id].append({
            'email': email,
            'timestamp': datetime.now().isoformat(),
            'decision_made': decision_made,
            'decision_text': decision_text
        })
        
        # Store in collaboration history
        self.collaboration_history.append({
            'thread_id': thread_id,
            'email_id': email.get('id', 'unknown'),
            'decision_made': decision_made,
            'timestamp': datetime.now().isoformat()
        })
    
    def get_thread_decisions(self, thread_id: str) -> Dict:
        """Get all decisions made in a thread."""
        thread_emails = self.decision_threads.get(thread_id, [])
        
        decisions = [
            {
                'email_id': e['email'].get('id', 'unknown'),
                'decision_text': e['decision_text'],
                'timestamp': e['timestamp']
            }
            for e in thread_emails
            if e['decision_made'] and e['decision_text']
        ]
        
        return {
            'thread_id': thread_id,
            'total_emails': len(thread_emails),
            'decisions_made': len(decisions),
            'decisions': decisions,
            'thread_active': len(thread_emails) > 0
        }
    
    def register_team_member(self, member_id: str, name: str, role: str, 
                             expertise: List[str] = None):
        """Register a team member in the directory."""
        self.team_directory[member_id] = {
            'name': name,
            'role': role,
            'expertise': expertise or [],
            'registered_at': datetime.now().isoformat()
        }
    
    def process_email(self, email: Dict, recipients: List[str] = None) -> Dict:
        """Process email for collaboration opportunities."""
        recipients = recipients or []
        
        # Detect collaboration need
        collab_analysis = self.detect_collaboration_need(email)
        
        # Suggest team members
        suggestions = self.suggest_team_members(email, recipients)
        
        # CRITICAL: Check reply-all requirement
        reply_all_required = len(recipients) > 1
        
        # If suggestions exist, reply-all becomes even more important
        if suggestions:
            reply_all_required = True
        
        return {
            'email_id': email.get('id', 'unknown'),
            'collaboration_analysis': collab_analysis,
            'team_suggestions': suggestions,
            'current_recipients': recipients,
            'suggested_recipients': [s['member_id'] for s in suggestions],
            'reply_all_required': reply_all_required,
            'recipient_count': len(recipients),
            'action_items': self._generate_action_items(collab_analysis, suggestions)
        }
    
    def _generate_action_items(self, collab_analysis: Dict, 
                                suggestions: List[Dict]) -> List[str]:
        """Generate action items based on collaboration analysis."""
        action_items = []
        
        if collab_analysis['needs_collaboration']:
            action_items.append(f"✓ {collab_analysis['recommendation']}")
        
        if suggestions:
            action_items.append(f"👥 Consider adding {len(suggestions)} team member(s) to CC")
            for s in suggestions[:3]:  # Top 3
                action_items.append(f"  • {s['name']} ({s['role']}) - {s['reason']}")
        
        if not action_items:
            action_items.append("✓ No additional collaboration needed")
        
        return action_items


if __name__ == '__main__':
    # Test the collaboration hub
    hub = EmailCollaborationHub()
    
    # Register team members
    hub.register_team_member('eng_001', 'Alice Chen', 'technical', ['backend', 'api', 'architecture'])
    hub.register_team_member('design_001', 'Bob Smith', 'design', ['ux', 'ui', 'branding'])
    hub.register_team_member('legal_001', 'Carol Davis', 'legal', ['contracts', 'compliance'])
    hub.register_team_member('pm_001', 'David Lee', 'business', ['product', 'strategy'])
    
    test_emails = [
        {
            'email': {
                'id': 'e1',
                'from': 'ceo@company.com',
                'subject': 'Decision needed: New product launch strategy',
                'body': 'We need to decide on the launch strategy. What do the product and marketing teams think? Also need legal review of the press release.'
            },
            'recipients': ['pm@company.com']
        },
        {
            'email': {
                'id': 'e2',
                'from': 'client@corp.com',
                'subject': 'Technical architecture review',
                'body': 'Can we schedule a review of the proposed architecture? We need expert input on the microservices approach.'
            },
            'recipients': ['manager@company.com']
        },
        {
            'email': {
                'id': 'e3',
                'from': 'team@company.com',
                'subject': 'Weekly status update',
                'body': 'Here is the weekly status update. All tasks are on track.'
            },
            'recipients': ['manager@company.com', 'team@company.com']
        }
    ]
    
    print("=== V249: Email Collaboration Hub Test ===\n")
    
    for data in test_emails:
        result = hub.process_email(data['email'], data['recipients'])
        
        print(f"Email: {result['email_id']}")
        print(f"  Needs Collaboration: {result['collaboration_analysis']['needs_collaboration']}")
        print(f"  Collaboration Score: {result['collaboration_analysis']['collaboration_score']}")
        print(f"  Recommendation: {result['collaboration_analysis']['recommendation']}")
        print(f"  Reply-All Required: {result['reply_all_required']}")
        print(f"  Team Suggestions: {len(result['team_suggestions'])}")
        
        if result['team_suggestions']:
            print("  Suggested Team Members:")
            for s in result['team_suggestions'][:3]:
                print(f"    • {s['name']} ({s['role']}) - {s['reason']}")
        
        print("\n  Action Items:")
        for item in result['action_items']:
            print(f"    {item}")
        
        print()

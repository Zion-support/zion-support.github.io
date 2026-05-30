"""
Email Intelligence V345 - Collaboration Hub
Transform email into a collaborative workspace with shared drafts, comments,
approvals, and team coordination features for enhanced teamwork.
Enforces reply-all and case-by-case analysis.
"""

from datetime import datetime
from typing import Dict, List
import json


class EmailCollaborationHub:
    """
    V345: Collaborative email workspace with shared drafts, team comments,
    approval workflows, and coordination features.
    """
    
    VERSION = "V345"
    ENGINE_NAME = "Collaboration Hub"
    
    def __init__(self):
        self.collaboration_spaces = {}
        self.shared_drafts = {}
        self.approval_workflows = {}
    
    def analyze_email(self, email_data: Dict) -> Dict:
        """Analyze email for collaboration opportunities case-by-case."""
        sender = email_data.get('from', '')
        content = email_data.get('body', '')
        subject = email_data.get('subject', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # Detect collaboration needs
        collaboration_needs = self._detect_collaboration_needs(email_data)
        
        # Identify team members
        team_members = self._identify_team_members(email_data)
        
        # Determine collaboration features
        features = self._determine_collaboration_features(collaboration_needs, email_data)
        
        # Approval workflow
        approval_needed = self._check_approval_requirements(email_data)
        
        # Coordination recommendations
        coordination = self._generate_coordination_recommendations(team_members, collaboration_needs)
        
        # Collaboration score
        collaboration_score = self._calculate_collaboration_score(features, team_members)
        
        analysis = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': timestamp,
            'sender': sender,
            'collaboration_needs': collaboration_needs,
            'team_members': team_members,
            'collaboration_features': features,
            'approval_required': approval_needed,
            'coordination_recommendations': coordination,
            'collaboration_score': collaboration_score
        }
        
        # Create collaboration space
        self._create_collaboration_space(analysis)
        
        return analysis
    
    def generate_response(self, email_data: Dict) -> Dict:
        """Generate collaboration-enabled response. ALWAYS enforces reply-all."""
        sender = email_data.get('from', '')
        to_recipients = email_data.get('to', [])
        cc_recipients = email_data.get('cc', [])
        subject = email_data.get('subject', '')
        content = email_data.get('body', '')
        
        # Analyze email
        analysis = self.analyze_email(email_data)
        
        # ENFORCE REPLY-ALL
        all_recipients = self._enforce_reply_all(to_recipients, cc_recipients, sender)
        
        # Generate collaboration response
        response_body = self._generate_collaboration_response(sender, content, analysis)
        
        response = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': datetime.now().isoformat(),
            'to': all_recipients,
            'subject': f"Re: {subject}" if not subject.lower().startswith('re:') else subject,
            'body': response_body,
            'collaboration_space_created': True,
            'team_members_involved': len(analysis['team_members']),
            'features_enabled': len(analysis['collaboration_features']),
            'approval_required': analysis['approval_required']['required'],
            'reply_all_enforced': True
        }
        
        return response
    
    def _detect_collaboration_needs(self, email_data: Dict) -> Dict:
        """Detect collaboration needs from email"""
        content = email_data.get('body', '').lower()
        subject = email_data.get('subject', '').lower()
        text = f"{subject} {content}"
        
        needs = {
            'team_input': False,
            'review_required': False,
            'approval_needed': False,
            'shared_document': False,
            'coordination': False
        }
        
        # Team input indicators
        team_keywords = ['team', 'everyone', 'all of us', 'group', 'together']
        if any(kw in text for kw in team_keywords):
            needs['team_input'] = True
        
        # Review indicators
        review_keywords = ['review', 'feedback', 'comments', 'thoughts', 'opinions']
        if any(kw in text for kw in review_keywords):
            needs['review_required'] = True
        
        # Approval indicators
        approval_keywords = ['approve', 'approval', 'sign off', 'authorize', 'permission']
        if any(kw in text for kw in approval_keywords):
            needs['approval_needed'] = True
        
        # Shared document indicators
        doc_keywords = ['document', 'shared', 'collaborate', 'edit together', 'draft']
        if any(kw in text for kw in doc_keywords):
            needs['shared_document'] = True
        
        # Coordination indicators
        coord_keywords = ['coordinate', 'schedule', 'plan', 'organize', 'align']
        if any(kw in text for kw in coord_keywords):
            needs['coordination'] = True
        
        active_needs = [k for k, v in needs.items() if v]
        
        return {
            'active_needs': active_needs,
            'need_count': len(active_needs),
            'details': needs
        }
    
    def _identify_team_members(self, email_data: Dict) -> List[Dict]:
        """Identify team members involved"""
        to_recipients = email_data.get('to', [])
        cc_recipients = email_data.get('cc', [])
        sender = email_data.get('from', '')
        
        team_members = []
        
        # Add sender
        team_members.append({
            'email': sender,
            'role': 'initiator',
            'participation': 'active'
        })
        
        # Add TO recipients
        for recipient in (to_recipients if isinstance(to_recipients, list) else [to_recipients]):
            if recipient and recipient != sender:
                team_members.append({
                    'email': recipient,
                    'role': 'primary_recipient',
                    'participation': 'active'
                })
        
        # Add CC recipients
        for recipient in (cc_recipients if isinstance(cc_recipients, list) else [cc_recipients]):
            if recipient and recipient != sender:
                team_members.append({
                    'email': recipient,
                    'role': 'observer',
                    'participation': 'passive'
                })
        
        return team_members
    
    def _determine_collaboration_features(self, needs: Dict, email_data: Dict) -> List[Dict]:
        """Determine collaboration features to enable"""
        features = []
        
        active = needs['active_needs']
        
        if 'team_input' in active:
            features.append({
                'feature': 'shared_draft',
                'description': 'Collaborative draft editing',
                'enabled': True
            })
        
        if 'review_required' in active:
            features.append({
                'feature': 'comments',
                'description': 'Inline comments and feedback',
                'enabled': True
            })
        
        if 'approval_needed' in active:
            features.append({
                'feature': 'approval_workflow',
                'description': 'Structured approval process',
                'enabled': True
            })
        
        if 'shared_document' in active:
            features.append({
                'feature': 'document_collaboration',
                'description': 'Real-time document editing',
                'enabled': True
            })
        
        if 'coordination' in active:
            features.append({
                'feature': 'task_assignment',
                'description': 'Task tracking and assignment',
                'enabled': True
            })
        
        # Always enable basic features
        features.extend([
            {
                'feature': 'thread_tracking',
                'description': 'Conversation thread management',
                'enabled': True
            },
            {
                'feature': 'mentions',
                'description': '@mention team members',
                'enabled': True
            }
        ])
        
        return features
    
    def _check_approval_requirements(self, email_data: Dict) -> Dict:
        """Check if approval workflow is required"""
        content = email_data.get('body', '').lower()
        subject = email_data.get('subject', '').lower()
        text = f"{subject} {content}"
        
        approval_keywords = ['approve', 'approval', 'sign off', 'authorize', 'budget', 'contract']
        requires_approval = any(kw in text for kw in approval_keywords)
        
        if requires_approval:
            return {
                'required': True,
                'approval_type': 'formal',
                'approvers_needed': 2,
                'workflow': 'sequential'
            }
        
        return {
            'required': False,
            'approval_type': None,
            'approvers_needed': 0,
            'workflow': None
        }
    
    def _generate_coordination_recommendations(self, team_members: List[Dict], needs: Dict) -> List[str]:
        """Generate coordination recommendations"""
        recommendations = []
        
        active_count = sum(1 for m in team_members if m['participation'] == 'active')
        
        if active_count > 5:
            recommendations.append("Consider breaking into smaller working groups")
        
        if 'coordination' in needs['active_needs']:
            recommendations.append("Set up regular sync meetings")
            recommendations.append("Use shared calendar for scheduling")
        
        if 'team_input' in needs['active_needs']:
            recommendations.append("Create shared document for collaborative input")
            recommendations.append("Set deadline for team contributions")
        
        if 'review_required' in needs['active_needs']:
            recommendations.append("Assign specific reviewers for different sections")
            recommendations.append("Use comment threads for focused feedback")
        
        if not recommendations:
            recommendations.append("Standard email collaboration workflow")
        
        return recommendations
    
    def _calculate_collaboration_score(self, features: List[Dict], team_members: List[Dict]) -> float:
        """Calculate collaboration score"""
        base_score = 50
        
        # Feature bonus
        feature_bonus = len(features) * 5
        
        # Team size bonus
        team_bonus = min(30, len(team_members) * 3)
        
        score = base_score + feature_bonus + team_bonus
        
        return min(100, round(score, 2))
    
    def _create_collaboration_space(self, analysis: Dict):
        """Create collaboration space"""
        space_id = f"space_{hash(analysis['sender'])}_{int(datetime.now().timestamp())}"
        
        self.collaboration_spaces[space_id] = {
            'timestamp': analysis['timestamp'],
            'sender': analysis['sender'],
            'team_members': analysis['team_members'],
            'features': analysis['collaboration_features'],
            'collaboration_score': analysis['collaboration_score']
        }
    
    def _generate_collaboration_response(self, sender: str, content: str, analysis: Dict) -> str:
        """Generate collaboration-enabled response"""
        sender_name = sender.split('@')[0] if '@' in sender else sender
        
        team_count = len(analysis['team_members'])
        features = analysis['collaboration_features']
        score = analysis['collaboration_score']
        
        response = f"""Hello {sender_name},

Thank you for your email. I've set up a collaborative workspace for this conversation:

Collaboration Space Created:
- Team Members: {team_count}
- Collaboration Score: {score}/100
- Features Enabled: {len(features)}

Active Collaboration Features:
{chr(10).join('- ' + feature['feature'].replace('_', ' ').title() + ': ' + feature['description'] for feature in features)}

Team Members Involved:
{chr(10).join('- ' + member['email'] + ' (' + member['role'].replace('_', ' ') + ')' for member in analysis['team_members'])}

Coordination Recommendations:
{chr(10).join('- ' + rec for rec in analysis['coordination_recommendations'])}

Approval Status: {'Required' if analysis['approval_required']['required'] else 'Not Required'}

I've enabled collaborative features to enhance our teamwork and ensure everyone stays aligned.

Best regards,
[Your Name]

---
This response was generated by {self.ENGINE_NAME} ({self.VERSION}) with collaboration features.
Team: {team_count} members | Features: {len(features)} | Score: {score}/100
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
    
    def get_collaboration_stats(self) -> Dict:
        """Get collaboration statistics"""
        total_spaces = len(self.collaboration_spaces)
        
        if total_spaces == 0:
            return {
                'version': self.VERSION,
                'engine': self.ENGINE_NAME,
                'message': 'No collaboration spaces created yet'
            }
        
        # Calculate averages
        avg_score = sum(s['collaboration_score'] for s in self.collaboration_spaces.values()) / total_spaces
        avg_team_size = sum(len(s['team_members']) for s in self.collaboration_spaces.values()) / total_spaces
        
        return {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'total_collaboration_spaces': total_spaces,
            'average_collaboration_score': round(avg_score, 2),
            'average_team_size': round(avg_team_size, 2),
            'timestamp': datetime.now().isoformat()
        }


# Test the engine
if __name__ == "__main__":
    engine = EmailCollaborationHub()
    
    test_email = {
        'from': 'project.lead@company.com',
        'to': ['team@company.com', 'design@company.com'],
        'cc': ['manager@company.com', 'stakeholders@company.com'],
        'subject': 'Collaborative Project Planning',
        'body': 'Hi team, let\'s collaborate on the project plan. Everyone please review and add your input to the shared document. We need approval from management before proceeding.',
        'timestamp': datetime.now().isoformat()
    }
    
    print("=" * 60)
    print(f"Email Intelligence {engine.VERSION} - {engine.ENGINE_NAME}")
    print("=" * 60)
    
    analysis = engine.analyze_email(test_email)
    print("\n📧 Collaboration Analysis:")
    print(json.dumps(analysis, indent=2))
    
    response = engine.generate_response(test_email)
    print("\n📤 Generated Response:")
    print(json.dumps(response, indent=2))
    
    stats = engine.get_collaboration_stats()
    print("\n📊 Collaboration Statistics:")
    print(json.dumps(stats, indent=2))
    
    print("\n✅ Reply-All Enforcement: ACTIVE")
    print(f"✅ Recipients: {response['to']}")
    print("✅ Collaboration Hub: ENABLED")

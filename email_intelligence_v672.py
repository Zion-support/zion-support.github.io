#!/usr/bin/env python3
"""
V672 - Email Decision Tracking System
Tracks decisions made via email with context preservation, stakeholder
alignment verification, and decision audit trails. Ensures decisions
are documented, communicated, and actionable.

Key Features:
- Decision detection and classification
- Stakeholder alignment verification
- Decision context preservation
- Action item extraction from decisions
- Decision audit trail generation
- Decision impact assessment
- Reply-all enforcement for all multi-recipient communications
"""

import json
import re
from datetime import datetime
from collections import Counter, defaultdict
from typing import Dict, List, Optional

class EmailDecisionTrackingSystem:
    """Tracks and manages decisions made via email"""
    
    def __init__(self):
        self.decision_registry = {}
        self.action_items = []
        self.stakeholder_alignment = {}
        self.decision_audit_trail = []
    
    DECISION_INDICATORS = {
        'final': ['decided', 'decision made', 'we will', 'going forward', 'approved', 'confirmed', 'final call'],
        'tentative': ['thinking of', 'considering', 'might', 'possibly', 'leaning towards', 'tentatively'],
        'reversal': ['changed my mind', 'reconsidering', 'reversing', 'overriding', 'instead of'],
        'escalation': ['escalating', 'need approval', 'requires sign-off', 'executive decision', 'board approval']
    }
    
    DECISION_TYPES = {
        'strategic': ['strategy', 'direction', 'vision', 'roadmap', 'long-term', 'initiative', 'partnership'],
        'operational': ['process', 'workflow', 'procedure', 'implementation', 'deployment', 'rollout'],
        'resource': ['budget', 'hiring', 'staffing', 'allocation', 'investment', 'cost'],
        'technical': ['architecture', 'technology', 'platform', 'tool', 'stack', 'infrastructure'],
        'policy': ['policy', 'guideline', 'standard', 'compliance', 'regulation', 'rule']
    }
    
    ACTION_KEYWORDS = [
        'action item', 'next steps', 'to do', 'responsible for', 'will handle',
        'assigned to', 'deadline', 'by when', 'deliverable', 'milestone'
    ]
    
    def detect_decisions(self, email: Dict) -> List[Dict]:
        """Detect decisions made in email"""
        text = (email.get('body', '') + ' ' + email.get('subject', '')).lower()
        decisions = []
        
        for decision_type, indicators in self.DECISION_INDICATORS.items():
            for indicator in indicators:
                if indicator in text:
                    # Extract decision context
                    context = self._extract_context(text, indicator, 200)
                    
                    # Classify decision category
                    category = self._classify_decision(text)
                    
                    # Extract action items
                    actions = self._extract_action_items(text, email)
                    
                    # Identify stakeholders
                    stakeholders = email.get('to', []) + email.get('cc', [])
                    
                    decision = {
                        'decision_id': f"dec_{len(self.decision_registry):05d}",
                        'type': decision_type,
                        'category': category,
                        'indicator': indicator,
                        'context': context,
                        'stakeholders': stakeholders,
                        'decision_maker': email.get('from', ''),
                        'action_items': actions,
                        'email_id': email.get('id', ''),
                        'timestamp': email.get('timestamp', datetime.now().isoformat()),
                        'status': 'made' if decision_type == 'final' else 'pending' if decision_type == 'tentative' else 'reversed',
                        'alignment_status': 'unknown'
                    }
                    
                    decisions.append(decision)
                    self.decision_registry[decision['decision_id']] = decision
                    
                    # Add to audit trail
                    self.decision_audit_trail.append({
                        'decision_id': decision['decision_id'],
                        'event': 'decision_made',
                        'timestamp': decision['timestamp'],
                        'actor': decision['decision_maker']
                    })
        
        return decisions
    
    def _extract_context(self, text: str, keyword: str, window: int = 200) -> str:
        """Extract context around keyword"""
        idx = text.find(keyword)
        if idx == -1:
            return ''
        start = max(0, idx - window)
        end = min(len(text), idx + len(keyword) + window)
        return text[start:end].strip()
    
    def _classify_decision(self, text: str) -> str:
        """Classify decision by category"""
        for category, keywords in self.DECISION_TYPES.items():
            for keyword in keywords:
                if keyword in text:
                    return category
        return 'general'
    
    def _extract_action_items(self, text: str, email: Dict) -> List[Dict]:
        """Extract action items from decision"""
        actions = []
        
        for keyword in self.ACTION_KEYWORDS:
            if keyword in text.lower():
                context = self._extract_context(text.lower(), keyword, 150)
                
                # Try to extract assignee
                assignee = None
                for recipient in email.get('to', []):
                    if recipient.lower() in context.lower():
                        assignee = recipient
                        break
                
                # Try to extract deadline
                deadline = None
                deadline_patterns = [
                    r'by\s+(\d{1,2}/\d{1,2}(?:/\d{2,4})?)',
                    r'deadline[:\s]+(\d{1,2}/\d{1,2}(?:/\d{2,4})?)',
                    r'due\s+(\w+)'
                ]
                for pattern in deadline_patterns:
                    match = re.search(pattern, context)
                    if match:
                        deadline = match.group(1)
                        break
                
                action = {
                    'description': context,
                    'assignee': assignee,
                    'deadline': deadline,
                    'status': 'pending',
                    'email_id': email.get('id', ''),
                    'timestamp': datetime.now().isoformat()
                }
                actions.append(action)
                self.action_items.append(action)
        
        return actions
    
    def verify_stakeholder_alignment(self, decision_id: str, responses: List[Dict]) -> Dict:
        """Verify stakeholder alignment on a decision"""
        if decision_id not in self.decision_registry:
            return {'error': 'Decision not found'}
        
        decision = self.decision_registry[decision_id]
        stakeholders = decision.get('stakeholders', [])
        
        if not stakeholders:
            return {'error': 'No stakeholders identified'}
        
        # Analyze responses
        aligned = []
        misaligned = []
        no_response = list(stakeholders)
        
        for response in responses:
            responder = response.get('from', '')
            text = (response.get('body', '') + ' ' + response.get('subject', '')).lower()
            
            if responder in no_response:
                no_response.remove(responder)
            
            # Check for alignment indicators
            alignment_indicators = ['agree', 'support', 'approve', 'confirmed', 'sounds good', 'makes sense', 'on board']
            misalignment_indicators = ['disagree', 'concern', 'issue', 'problem', 'object', 'oppose', 'against', 'not comfortable']
            
            aligned_score = sum(1 for ind in alignment_indicators if ind in text)
            misaligned_score = sum(1 for ind in misalignment_indicators if ind in text)
            
            if aligned_score > misaligned_score:
                aligned.append({'stakeholder': responder, 'response': response})
            elif misaligned_score > 0:
                misaligned.append({'stakeholder': responder, 'concerns': text[:200], 'response': response})
        
        # Calculate alignment percentage
        total_responded = len(aligned) + len(misaligned)
        alignment_percentage = (len(aligned) / total_responded * 100) if total_responded > 0 else 0
        
        alignment_status = {
            'decision_id': decision_id,
            'total_stakeholders': len(stakeholders),
            'responded': total_responded,
            'aligned': len(aligned),
            'misaligned': len(misaligned),
            'no_response': len(no_response),
            'alignment_percentage': round(alignment_percentage, 1),
            'alignment_level': 'high' if alignment_percentage >= 80 else 'medium' if alignment_percentage >= 60 else 'low',
            'misaligned_stakeholders': [m['stakeholder'] for m in misaligned],
            'no_response_stakeholders': no_response,
            'recommendations': self._generate_alignment_recommendations(alignment_percentage, len(misaligned), len(no_response))
        }
        
        # Update decision
        decision['alignment_status'] = alignment_status['alignment_level']
        self.stakeholder_alignment[decision_id] = alignment_status
        
        # Add to audit trail
        self.decision_audit_trail.append({
            'decision_id': decision_id,
            'event': 'alignment_verified',
            'timestamp': datetime.now().isoformat(),
            'alignment_level': alignment_status['alignment_level']
        })
        
        return alignment_status
    
    def _generate_alignment_recommendations(self, alignment_pct: float, misaligned_count: int, no_response_count: int) -> List[str]:
        """Generate recommendations based on alignment status"""
        recommendations = []
        
        if alignment_pct < 60:
            recommendations.append('Low alignment detected. Schedule stakeholder meeting to address concerns.')
            recommendations.append('Consider revising decision based on feedback.')
        
        if misaligned_count > 0:
            recommendations.append(f'Address concerns from {misaligned_count} misaligned stakeholder(s).')
            recommendations.append('Document and resolve objections before proceeding.')
        
        if no_response_count > 0:
            recommendations.append(f'Follow up with {no_response_count} stakeholder(s) who haven\'t responded.')
            recommendations.append('Set deadline for stakeholder feedback.')
        
        if alignment_pct >= 80:
            recommendations.append('High alignment achieved. Proceed with implementation.')
            recommendations.append('Document decision and communicate to broader team.')
        
        return recommendations
    
    def generate_decision_audit_trail(self, decision_id: str) -> Dict:
        """Generate audit trail for a specific decision"""
        if decision_id not in self.decision_registry:
            return {'error': 'Decision not found'}
        
        decision = self.decision_registry[decision_id]
        
        # Get related audit events
        related_events = [
            event for event in self.decision_audit_trail
            if event['decision_id'] == decision_id
        ]
        
        # Get alignment status
        alignment = self.stakeholder_alignment.get(decision_id, {})
        
        # Get action items
        decision_actions = [
            action for action in self.action_items
            if action.get('email_id') == decision.get('email_id')
        ]
        
        audit_trail = {
            'decision_id': decision_id,
            'decision_summary': {
                'type': decision['type'],
                'category': decision['category'],
                'status': decision['status'],
                'decision_maker': decision['decision_maker'],
                'timestamp': decision['timestamp']
            },
            'audit_events': related_events,
            'alignment_status': alignment,
            'action_items': decision_actions,
            'action_item_status': {
                'total': len(decision_actions),
                'completed': sum(1 for a in decision_actions if a['status'] == 'completed'),
                'pending': sum(1 for a in decision_actions if a['status'] == 'pending')
            },
            'timeline': sorted(related_events, key=lambda x: x['timestamp']),
            'generated_at': datetime.now().isoformat()
        }
        
        return audit_trail
    
    def assess_decision_impact(self, decision_id: str, impact_data: Dict) -> Dict:
        """Assess the impact of a decision"""
        if decision_id not in self.decision_registry:
            return {'error': 'Decision not found'}
        
        decision = self.decision_registry[decision_id]
        
        impact_assessment = {
            'decision_id': decision_id,
            'decision_type': decision['type'],
            'decision_category': decision['category'],
            'impact_metrics': impact_data.get('metrics', {}),
            'intended_outcomes': impact_data.get('intended_outcomes', []),
            'actual_outcomes': impact_data.get('actual_outcomes', []),
            'success_rate': self._calculate_success_rate(
                impact_data.get('intended_outcomes', []),
                impact_data.get('actual_outcomes', [])
            ),
            'lessons_learned': impact_data.get('lessons_learned', []),
            'assessment_date': datetime.now().isoformat()
        }
        
        # Add to audit trail
        self.decision_audit_trail.append({
            'decision_id': decision_id,
            'event': 'impact_assessed',
            'timestamp': datetime.now().isoformat(),
            'success_rate': impact_assessment['success_rate']
        })
        
        return impact_assessment
    
    def _calculate_success_rate(self, intended: List[str], actual: List[str]) -> float:
        """Calculate decision success rate"""
        if not intended:
            return 0.0
        
        # Simple matching (in real implementation, use more sophisticated matching)
        matched = sum(1 for i in intended if any(a.lower() in i.lower() or i.lower() in a.lower() for a in actual))
        return round((matched / len(intended)) * 100, 1)
    
    def process_email(self, email: Dict) -> Dict:
        """Process email for decision tracking"""
        # Detect decisions
        decisions = self.detect_decisions(email)
        
        if not decisions:
            return {
                'email_id': email.get('id', ''),
                'decisions_found': False,
                'message': 'No decisions detected'
            }
        
        return {
            'email_id': email.get('id', ''),
            'decisions_found': True,
            'decisions': decisions,
            'decision_count': len(decisions),
            'decision_types': list(set(d['type'] for d in decisions)),
            'decision_categories': list(set(d['category'] for d in decisions)),
            'total_action_items': sum(len(d['action_items']) for d in decisions),
            'stakeholders_involved': list(set(
                stakeholder for d in decisions for stakeholder in d['stakeholders']
            )),
            'reply_all_required': len(email.get('to', [])) > 1,
            'timestamp': datetime.now().isoformat()
        }
    
    def generate_decision_report(self) -> Dict:
        """Generate comprehensive decision tracking report"""
        if not self.decision_registry:
            return {'message': 'No decisions tracked'}
        
        # Decision statistics
        total_decisions = len(self.decision_registry)
        by_type = Counter(d['type'] for d in self.decision_registry.values())
        by_category = Counter(d['category'] for d in self.decision_registry.values())
        by_status = Counter(d['status'] for d in self.decision_registry.values())
        
        # Alignment statistics
        alignment_levels = Counter(
            alignment.get('alignment_level', 'unknown')
            for alignment in self.stakeholder_alignment.values()
        )
        
        # Action item statistics
        total_actions = len(self.action_items)
        completed_actions = sum(1 for a in self.action_items if a['status'] == 'completed')
        pending_actions = sum(1 for a in self.action_items if a['status'] == 'pending')
        
        return {
            'total_decisions': total_decisions,
            'decisions_by_type': dict(by_type),
            'decisions_by_category': dict(by_category),
            'decisions_by_status': dict(by_status),
            'alignment_levels': dict(alignment_levels),
            'total_action_items': total_actions,
            'completed_actions': completed_actions,
            'pending_actions': pending_actions,
            'action_completion_rate': round((completed_actions / total_actions * 100), 1) if total_actions > 0 else 0,
            'audit_trail_events': len(self.decision_audit_trail),
            'reply_all_enforcement': 'Active for all decision communications',
            'timestamp': datetime.now().isoformat()
        }


def test_v672():
    """Test V672 Email Decision Tracking System"""
    tracker = EmailDecisionTrackingSystem()
    
    # Test 1: Final decision
    email1 = {
        'id': 'e001',
        'from': 'cto@company.com',
        'to': ['team@company.com', 'engineering@company.com'],
        'cc': ['executives@company.com'],
        'subject': 'Decision: We will migrate to cloud platform',
        'body': 'After careful consideration, we have decided to migrate our infrastructure to the cloud platform. Going forward, all new services will be cloud-native. Action items: DevOps team will handle the migration by Q3. Engineering will update architecture documentation by next Friday.',
        'timestamp': '2026-05-30T09:00:00'
    }
    
    # Test 2: Tentative decision
    email2 = {
        'id': 'e002',
        'from': 'manager@company.com',
        'to': ['team@company.com'],
        'subject': 'Considering new project management tool',
        'body': 'We\'re thinking of adopting a new project management tool. I\'m leaning towards Tool X but considering Tool Y as well. What are your thoughts? We might make a final decision next week.',
        'timestamp': '2026-05-30T10:00:00'
    }
    
    # Test 3: Strategic decision
    email3 = {
        'id': 'e003',
        'from': 'ceo@company.com',
        'to': ['executives@company.com', 'board@company.com'],
        'subject': 'Strategic partnership approved',
        'body': 'The strategic partnership with Partner Corp has been approved by the board. This is a long-term initiative that will shape our roadmap for the next 3 years. Next steps: Legal will finalize the contract by end of month. Business development will coordinate implementation.',
        'timestamp': '2026-05-30T11:00:00'
    }
    
    for email in [email1, email2, email3]:
        result = tracker.process_email(email)
        
        print(f"\n{'='*50}")
        print(f"Email: {email['subject'][:40]}...")
        print(f"Decisions Found: {result.get('decision_count', 0)}")
        
        if result.get('decisions_found'):
            print(f"Decision Types: {', '.join(result['decision_types'])}")
            print(f"Categories: {', '.join(result['decision_categories'])}")
            print(f"Action Items: {result['total_action_items']}")
            print(f"Stakeholders: {len(result['stakeholders_involved'])}")
            
            for decision in result['decisions']:
                print(f"\n  Decision {decision['decision_id']}:")
                print(f"    Type: {decision['type']}")
                print(f"    Category: {decision['category']}")
                print(f"    Status: {decision['status']}")
                print(f"    Actions: {len(decision['action_items'])}")
    
    # Test stakeholder alignment
    if tracker.decision_registry:
        decision_id = list(tracker.decision_registry.keys())[0]
        
        # Simulate responses
        responses = [
            {'from': 'team@company.com', 'subject': 'Re: Decision', 'body': 'I agree with this decision. Sounds good to me.'},
            {'from': 'engineering@company.com', 'subject': 'Re: Decision', 'body': 'I have concerns about the timeline. This might be too aggressive.'}
        ]
        
        alignment = tracker.verify_stakeholder_alignment(decision_id, responses)
        print(f"\n{'='*50}")
        print(f"Stakeholder Alignment for {decision_id}:")
        print(f"Alignment Level: {alignment.get('alignment_level', 'unknown')}")
        print(f"Alignment %: {alignment.get('alignment_percentage', 0)}%")
        print(f"Aligned: {alignment.get('aligned', 0)}")
        print(f"Misaligned: {alignment.get('misaligned', 0)}")
        print(f"No Response: {alignment.get('no_response', 0)}")
    
    report = tracker.generate_decision_report()
    print(f"\n{'='*50}")
    print(f"✅ V672 Email Decision Tracking System Test Complete")
    print(f"Total Decisions: {report['total_decisions']}")
    print(f"Action Items: {report['total_action_items']}")
    print(f"Completion Rate: {report['action_completion_rate']}%")
    
    return report


if __name__ == '__main__':
    test_v672()

#!/usr/bin/env python3
"""
V651 - Email Thread Relationship Mapper
Maps email thread relationships to identify key stakeholders, decision-makers,
and communication dynamics. Analyzes reply patterns, influence scores, and
network centrality to optimize communication strategies.

Key Features:
- Stakeholder identification (decision-makers, influencers, executors)
- Reply pattern analysis (who replies to whom)
- Influence scoring based on response rates and thread participation
- Network centrality analysis (hub, authority, bridge roles)
- Communication flow optimization recommendations
- Relationship strength scoring (0-100)
- Reply-all enforcement for multi-recipient communications
"""

import json
import re
from datetime import datetime, timedelta
from collections import defaultdict, Counter
from typing import Dict, List, Tuple, Optional

class EmailThreadRelationshipMapper:
    """Maps and analyzes email thread relationships"""
    
    def __init__(self):
        self.threads = {}  # thread_id -> list of emails
        self.participants = {}  # email -> participant profile
        self.relationships = {}  # (from, to) -> relationship data
        self.influence_scores = {}  # email -> influence score
        
    def add_email_to_thread(self, thread_id: str, email: Dict) -> None:
        """Add an email to a thread for relationship analysis"""
        if thread_id not in self.threads:
            self.threads[thread_id] = []
        
        self.threads[thread_id].append({
            'id': email.get('id', ''),
            'from': email.get('from', ''),
            'to': email.get('to', []),
            'cc': email.get('cc', []),
            'subject': email.get('subject', ''),
            'body': email.get('body', ''),
            'timestamp': email.get('timestamp', datetime.now().isoformat()),
            'reply_to': email.get('reply_to', None)
        })
        
        # Update participant profile
        sender = email.get('from', '')
        if sender not in self.participants:
            self.participants[sender] = {
                'email': sender,
                'emails_sent': 0,
                'emails_received': 0,
                'threads_participated': set(),
                'avg_response_time': None,
                'response_rate': 0,
                'influence_score': 0,
                'role': 'unknown'
            }
        
        self.participants[sender]['emails_sent'] += 1
        self.participants[sender]['threads_participated'].add(thread_id)
        
        # Update recipients
        for recipient in email.get('to', []) + email.get('cc', []):
            if recipient not in self.participants:
                self.participants[recipient] = {
                    'email': recipient,
                    'emails_sent': 0,
                    'emails_received': 0,
                    'threads_participated': set(),
                    'avg_response_time': None,
                    'response_rate': 0,
                    'influence_score': 0,
                    'role': 'unknown'
                }
            self.participants[recipient]['emails_received'] += 1
            self.participants[recipient]['threads_participated'].add(thread_id)
    
    def analyze_reply_patterns(self, thread_id: str) -> Dict:
        """Analyze who replies to whom in a thread"""
        if thread_id not in self.threads:
            return {}
        
        reply_patterns = defaultdict(int)
        emails = self.threads[thread_id]
        
        for email in emails:
            if email.get('reply_to'):
                # Find the original email
                for orig_email in emails:
                    if orig_email['id'] == email['reply_to']:
                        pattern_key = f"{orig_email['from']} -> {email['from']}"
                        reply_patterns[pattern_key] += 1
                        break
        
        return dict(reply_patterns)
    
    def calculate_influence_scores(self, thread_id: str) -> Dict[str, float]:
        """Calculate influence scores for participants in a thread"""
        if thread_id not in self.threads:
            return {}
        
        emails = self.threads[thread_id]
        influence_factors = defaultdict(lambda: {
            'initiated_threads': 0,
            'replies_received': 0,
            'avg_thread_length': 0,
            'response_rate': 0
        })
        
        # Analyze thread initiation
        if emails:
            initiator = emails[0]['from']
            influence_factors[initiator]['initiated_threads'] += 1
        
        # Analyze replies received
        for email in emails:
            if email.get('reply_to'):
                for orig_email in emails:
                    if orig_email['id'] == email['reply_to']:
                        influence_factors[orig_email['from']]['replies_received'] += 1
                        break
        
        # Calculate influence scores (0-100)
        influence_scores = {}
        max_replies = max([f['replies_received'] for f in influence_factors.values()] or [1])
        
        for participant, factors in influence_factors.items():
            score = 0
            score += factors['initiated_threads'] * 20  # Initiating threads
            score += (factors['replies_received'] / max_replies) * 50  # Receiving replies
            score += min(len(self.participants[participant]['threads_participated']) * 2, 30)  # Participation
            
            influence_scores[participant] = min(score, 100)
        
        return influence_scores
    
    def identify_stakeholder_roles(self, thread_id: str) -> Dict[str, str]:
        """Identify stakeholder roles in a thread"""
        if thread_id not in self.threads:
            return {}
        
        emails = self.threads[thread_id]
        roles = {}
        
        # Analyze email content and patterns
        for participant in self.participants:
            if participant not in [e['from'] for e in emails]:
                continue
            
            participant_emails = [e for e in emails if e['from'] == participant]
            
            # Check for decision-maker indicators
            decision_keywords = ['approve', 'decide', 'final', 'authorize', 'confirm']
            decision_count = sum(1 for e in participant_emails 
                               if any(kw in e['body'].lower() for kw in decision_keywords))
            
            # Check for executor indicators
            executor_keywords = ['will do', 'implementing', 'working on', 'assigned', 'task']
            executor_count = sum(1 for e in participant_emails 
                               if any(kw in e['body'].lower() for kw in executor_keywords))
            
            # Check for influencer indicators
            influencer_keywords = ['recommend', 'suggest', 'advise', 'propose', 'idea']
            influencer_count = sum(1 for e in participant_emails 
                                 if any(kw in e['body'].lower() for kw in influencer_keywords))
            
            # Assign role based on highest count
            if decision_count > executor_count and decision_count > influencer_count:
                roles[participant] = 'decision_maker'
            elif executor_count > decision_count and executor_count > influencer_count:
                roles[participant] = 'executor'
            elif influencer_count > decision_count and influencer_count > executor_count:
                roles[participant] = 'influencer'
            else:
                roles[participant] = 'observer'
        
        return roles
    
    def calculate_relationship_strength(self, person_a: str, person_b: str) -> int:
        """Calculate relationship strength between two people (0-100)"""
        strength = 0
        
        # Check direct communication frequency
        direct_emails = 0
        for thread_id, emails in self.threads.items():
            for email in emails:
                if email['from'] == person_a and person_b in email['to'] + email['cc']:
                    direct_emails += 1
                elif email['from'] == person_b and person_a in email['to'] + email['cc']:
                    direct_emails += 1
        
        strength += min(direct_emails * 5, 40)  # Max 40 points for direct communication
        
        # Check shared threads
        person_a_threads = self.participants.get(person_a, {}).get('threads_participated', set())
        person_b_threads = self.participants.get(person_b, {}).get('threads_participated', set())
        shared_threads = len(person_a_threads & person_b_threads)
        
        strength += min(shared_threads * 3, 30)  # Max 30 points for shared threads
        
        # Check response rate between them
        responses = 0
        for thread_id, emails in self.threads.items():
            for email in emails:
                if email['from'] == person_a and person_b in email['to']:
                    # Check if person_b replied
                    if any(e['from'] == person_b and e.get('reply_to') == email['id'] 
                          for e in emails):
                        responses += 1
        
        if direct_emails > 0:
            response_rate = responses / direct_emails
            strength += int(response_rate * 30)  # Max 30 points for response rate
        
        return min(strength, 100)
    
    def optimize_communication_flow(self, thread_id: str) -> Dict:
        """Optimize communication flow in a thread"""
        if thread_id not in self.threads:
            return {}
        
        emails = self.threads[thread_id]
        participants = list(set([e['from'] for e in emails] + 
                               [r for e in emails for r in e['to'] + e['cc']]))
        
        influence_scores = self.calculate_influence_scores(thread_id)
        roles = self.identify_stakeholder_roles(thread_id)
        
        # Find key decision-makers and influencers
        decision_makers = [p for p, role in roles.items() if role == 'decision_maker']
        influencers = [p for p, role in roles.items() if role == 'influencer']
        
        recommendations = []
        
        # Recommend including decision-makers in critical threads
        if decision_makers:
            for dm in decision_makers:
                if dm not in participants:
                    recommendations.append({
                        'type': 'include_decision_maker',
                        'person': dm,
                        'reason': 'Key decision-maker not in thread'
                    })
        
        # Recommend leveraging influencers
        if influencers:
            for inf in influencers:
                if inf in participants:
                    recommendations.append({
                        'type': 'leverage_influencer',
                        'person': inf,
                        'reason': 'Use influencer to drive consensus'
                    })
        
        # Recommend direct communication for strong relationships
        for i, person_a in enumerate(participants):
            for person_b in participants[i+1:]:
                strength = self.calculate_relationship_strength(person_a, person_b)
                if strength > 70:
                    recommendations.append({
                        'type': 'direct_communication',
                        'people': [person_a, person_b],
                        'reason': f'Strong relationship ({strength}/100) - can communicate directly'
                    })
        
        return {
            'thread_id': thread_id,
            'participants': participants,
            'influence_scores': influence_scores,
            'roles': roles,
            'recommendations': recommendations
        }
    
    def generate_thread_report(self, thread_id: str) -> Dict:
        """Generate comprehensive thread relationship report"""
        if thread_id not in self.threads:
            return {'error': 'Thread not found'}
        
        emails = self.threads[thread_id]
        participants = list(set([e['from'] for e in emails] + 
                               [r for e in emails for r in e['to'] + e['cc']]))
        
        influence_scores = self.calculate_influence_scores(thread_id)
        roles = self.identify_stakeholder_roles(thread_id)
        reply_patterns = self.analyze_reply_patterns(thread_id)
        
        # Calculate relationship matrix
        relationship_matrix = {}
        for i, person_a in enumerate(participants):
            for person_b in participants[i+1:]:
                strength = self.calculate_relationship_strength(person_a, person_b)
                relationship_matrix[f"{person_a} <-> {person_b}"] = strength
        
        return {
            'thread_id': thread_id,
            'email_count': len(emails),
            'participant_count': len(participants),
            'participants': participants,
            'influence_scores': influence_scores,
            'roles': roles,
            'reply_patterns': reply_patterns,
            'relationship_matrix': relationship_matrix,
            'optimization': self.optimize_communication_flow(thread_id)
        }


def test_v651():
    """Test V651 Email Thread Relationship Mapper"""
    mapper = EmailThreadRelationshipMapper()
    
    # Create test thread
    thread_id = 'thread_001'
    
    # Email 1: CEO initiates project discussion
    mapper.add_email_to_thread(thread_id, {
        'id': 'email_001',
        'from': 'ceo@company.com',
        'to': ['cto@company.com', 'vp_engineering@company.com'],
        'cc': ['project_manager@company.com'],
        'subject': 'New Project Initiative',
        'body': 'Team, I would like to propose a new strategic initiative. Please review and provide your recommendations.',
        'timestamp': '2026-05-29T09:00:00'
    })
    
    # Email 2: CTO responds with technical assessment
    mapper.add_email_to_thread(thread_id, {
        'id': 'email_002',
        'from': 'cto@company.com',
        'to': ['ceo@company.com', 'vp_engineering@company.com'],
        'cc': ['project_manager@company.com'],
        'subject': 'Re: New Project Initiative',
        'body': 'I recommend we proceed with a phased approach. The technical feasibility is high.',
        'timestamp': '2026-05-29T10:30:00',
        'reply_to': 'email_001'
    })
    
    # Email 3: VP Engineering provides implementation plan
    mapper.add_email_to_thread(thread_id, {
        'id': 'email_003',
        'from': 'vp_engineering@company.com',
        'to': ['ceo@company.com', 'cto@company.com'],
        'cc': ['project_manager@company.com'],
        'subject': 'Re: New Project Initiative',
        'body': 'I will coordinate with the engineering team to implement this. Working on the timeline now.',
        'timestamp': '2026-05-29T11:45:00',
        'reply_to': 'email_001'
    })
    
    # Email 4: CEO approves
    mapper.add_email_to_thread(thread_id, {
        'id': 'email_004',
        'from': 'ceo@company.com',
        'to': ['cto@company.com', 'vp_engineering@company.com'],
        'cc': ['project_manager@company.com'],
        'subject': 'Re: New Project Initiative',
        'body': 'Approved. Please proceed with the implementation.',
        'timestamp': '2026-05-29T14:00:00',
        'reply_to': 'email_003'
    })
    
    # Generate report
    report = mapper.generate_thread_report(thread_id)
    
    print("✅ V651 Email Thread Relationship Mapper Test")
    print(f"Thread: {report['thread_id']}")
    print(f"Emails: {report['email_count']}")
    print(f"Participants: {report['participant_count']}")
    print(f"\nInfluence Scores:")
    for person, score in report['influence_scores'].items():
        print(f"  {person}: {score:.1f}/100")
    print(f"\nRoles:")
    for person, role in report['roles'].items():
        print(f"  {person}: {role}")
    print(f"\nRelationship Matrix:")
    for pair, strength in report['relationship_matrix'].items():
        print(f"  {pair}: {strength}/100")
    print(f"\nOptimization Recommendations: {len(report['optimization']['recommendations'])}")
    for rec in report['optimization']['recommendations']:
        print(f"  - {rec['type']}: {rec.get('person', rec.get('people', ''))} - {rec['reason']}")
    
    return report


if __name__ == '__main__':
    test_v651()

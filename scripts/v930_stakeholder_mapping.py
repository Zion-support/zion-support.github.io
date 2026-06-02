#!/usr/bin/env python3
"""
V930: Email Stakeholder Mapping Engine
Automatically maps organizational relationships, influence patterns, and decision hierarchies
from email communications. Helps identify key stakeholders and communication paths.
"""

import re
from datetime import datetime
from typing import Dict, List, Any, Set, Tuple
from collections import defaultdict

class StakeholderMappingEngine:
    def __init__(self):
        self.stakeholders = {}  # Maps email addresses to stakeholder profiles
        self.relationships = []  # Stores relationships between stakeholders
        self.communication_flows = []  # Stores communication patterns
        self.decision_makers = set()  # Identified decision makers
        
    def analyze_email_corpus(self, emails: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Analyze a corpus of emails to map stakeholder relationships."""
        if not emails:
            return {
                'error': 'No emails provided',
                'stakeholders': [],
                'relationships': [],
                'decision_makers': [],
                'influence_graph': {},
                'communication_paths': []
            }
        
        # Build stakeholder profiles
        for email in emails:
            self._process_email(email)
        
        # Identify decision makers
        self._identify_decision_makers(emails)
        
        # Map influence patterns
        influence_graph = self._build_influence_graph()
        
        # Identify communication paths
        communication_paths = self._identify_communication_paths()
        
        # Generate insights
        insights = self._generate_insights()
        
        result = {
            'stakeholders': self._get_stakeholder_summaries(),
            'relationships': self._get_relationship_summaries(),
            'decision_makers': list(self.decision_makers),
            'influence_graph': influence_graph,
            'communication_paths': communication_paths,
            'insights': insights,
            'summary': self._generate_summary()
        }
        
        return result
    
    def _process_email(self, email: Dict[str, Any]) -> None:
        """Process a single email to extract stakeholder information."""
        sender = email.get('sender', '')
        recipients = email.get('recipients', [])
        cc_list = email.get('cc', [])
        subject = email.get('subject', '').lower()
        body = email.get('body', '').lower()
        
        # Update sender profile
        self._update_stakeholder_profile(sender, 'sender', subject, body)
        
        # Update recipient profiles
        for recipient in recipients:
            self._update_stakeholder_profile(recipient, 'recipient', subject, body)
        
        # Update CC profiles
        for cc in cc_list:
            self._update_stakeholder_profile(cc, 'cc', subject, body)
        
        # Record relationships
        for recipient in recipients:
            self._record_relationship(sender, recipient, 'to', subject, body)
        
        for cc in cc_list:
            self._record_relationship(sender, cc, 'cc', subject, body)
    
    def _update_stakeholder_profile(self, email_addr: str, role: str, subject: str, body: str) -> None:
        """Update or create a stakeholder profile."""
        if email_addr not in self.stakeholders:
            self.stakeholders[email_addr] = {
                'email': email_addr,
                'name': self._extract_name(email_addr),
                'role_indicators': set(),
                'topics': set(),
                'sent_as': 0,
                'received_as': 0,
                'cc_count': 0,
                'decision_keywords': [],
                'influence_score': 0.0
            }
        
        profile = self.stakeholders[email_addr]
        
        # Update counts
        if role == 'sender':
            profile['sent_as'] += 1
        elif role == 'recipient':
            profile['received_as'] += 1
        elif role == 'cc':
            profile['cc_count'] += 1
        
        # Extract role indicators
        role_indicators = self._extract_role_indicators(subject, body)
        profile['role_indicators'].update(role_indicators)
        
        # Extract topics
        topics = self._extract_topics(subject, body)
        profile['topics'].update(topics)
        
        # Check for decision keywords
        decision_kw = self._extract_decision_keywords(subject, body)
        profile['decision_keywords'].extend(decision_kw)
    
    def _extract_name(self, email_addr: str) -> str:
        """Extract name from email address."""
        name_part = email_addr.split('@')[0]
        # Convert dots/underscores to spaces and capitalize
        name = name_part.replace('.', ' ').replace('_', ' ').title()
        return name
    
    def _extract_role_indicators(self, subject: str, body: str) -> Set[str]:
        """Extract role indicators from email content."""
        text = f"{subject} {body}"
        indicators = set()
        
        role_patterns = {
            'executive': ['ceo', 'president', 'executive', 'director', 'vp'],
            'manager': ['manager', 'lead', 'head of', 'supervisor'],
            'technical': ['engineer', 'developer', 'architect', 'technical'],
            'finance': ['finance', 'budget', 'accounting', 'cfo'],
            'legal': ['legal', 'compliance', 'counsel', 'attorney'],
            'hr': ['hr', 'human resources', 'people', 'recruitment']
        }
        
        for role, keywords in role_patterns.items():
            if any(kw in text for kw in keywords):
                indicators.add(role)
        
        return indicators
    
    def _extract_topics(self, subject: str, body: str) -> Set[str]:
        """Extract topics from email content."""
        text = f"{subject} {body}"
        topics = set()
        
        # Extract capitalized terms (likely proper nouns/topics)
        capitalized = re.findall(r'\b[A-Z][a-z]{3,}\b', subject + ' ' + body[:200])
        topics.update([t.lower() for t in capitalized[:10]])
        
        # Extract project identifiers
        project_ids = re.findall(r'\b[A-Z]{2,5}-\d{3,}\b', subject)
        topics.update(project_ids)
        
        return topics
    
    def _extract_decision_keywords(self, subject: str, body: str) -> List[str]:
        """Extract decision-related keywords."""
        text = f"{subject} {body}"
        decision_patterns = [
            r'(?:approve|approved|approval)',
            r'(?:decide|decided|decision)',
            r'(?:authorize|authorized|authorization)',
            r'(?:sign off|signed off|signoff)',
            r'(?:green light|go ahead|proceed)'
        ]
        
        found = []
        for pattern in decision_patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            found.extend(matches)
        
        return found
    
    def _record_relationship(self, from_addr: str, to_addr: str, rel_type: str, subject: str, body: str) -> None:
        """Record a relationship between stakeholders."""
        self.relationships.append({
            'from': from_addr,
            'to': to_addr,
            'type': rel_type,
            'subject': subject[:100],
            'timestamp': datetime.now().isoformat()
        })
    
    def _identify_decision_makers(self, emails: List[Dict[str, Any]]) -> None:
        """Identify decision makers from email patterns."""
        for email_addr, profile in self.stakeholders.items():
            # High decision keyword count
            if len(profile['decision_keywords']) >= 3:
                self.decision_makers.add(email_addr)
            
            # Executive role indicators
            if 'executive' in profile['role_indicators']:
                self.decision_makers.add(email_addr)
            
            # High sent/received ratio (initiates conversations)
            if profile['sent_as'] > 5 and profile['received_as'] > 5:
                ratio = profile['sent_as'] / max(profile['received_as'], 1)
                if 0.8 <= ratio <= 1.2:  # Balanced communication
                    self.decision_makers.add(email_addr)
    
    def _build_influence_graph(self) -> Dict[str, Any]:
        """Build influence graph showing who influences whom."""
        graph = defaultdict(list)
        
        # Count interactions
        interaction_counts = defaultdict(int)
        for rel in self.relationships:
            key = (rel['from'], rel['to'])
            interaction_counts[key] += 1
        
        # Build graph edges
        for (from_addr, to_addr), count in interaction_counts.items():
            if count >= 2:  # At least 2 interactions
                graph[from_addr].append({
                    'target': to_addr,
                    'strength': count,
                    'influence_score': self.stakeholders[from_addr].get('influence_score', 0)
                })
        
        return dict(graph)
    
    def _identify_communication_paths(self) -> List[Dict[str, Any]]:
        """Identify common communication paths."""
        paths = []
        
        # Find common sender-recipient pairs
        pair_counts = defaultdict(int)
        for rel in self.relationships:
            key = (rel['from'], rel['to'])
            pair_counts[key] += 1
        
        # Sort by frequency
        sorted_pairs = sorted(pair_counts.items(), key=lambda x: x[1], reverse=True)
        
        for (from_addr, to_addr), count in sorted_pairs[:10]:
            paths.append({
                'from': from_addr,
                'to': to_addr,
                'frequency': count,
                'path_type': 'primary' if count >= 5 else 'secondary'
            })
        
        return paths
    
    def _get_stakeholder_summaries(self) -> List[Dict[str, Any]]:
        """Get summaries of all stakeholders."""
        summaries = []
        for email_addr, profile in self.stakeholders.items():
            summaries.append({
                'email': email_addr,
                'name': profile['name'],
                'roles': list(profile['role_indicators']),
                'topics': list(profile['topics'])[:5],
                'sent_emails': profile['sent_as'],
                'received_emails': profile['received_as'],
                'is_decision_maker': email_addr in self.decision_makers
            })
        
        # Sort by activity level
        summaries.sort(key=lambda x: x['sent_emails'] + x['received_emails'], reverse=True)
        return summaries[:15]  # Limit to top 15
    
    def _get_relationship_summaries(self) -> List[Dict[str, Any]]:
        """Get summaries of key relationships."""
        pair_counts = defaultdict(int)
        for rel in self.relationships:
            key = (rel['from'], rel['to'])
            pair_counts[key] += 1
        
        summaries = []
        for (from_addr, to_addr), count in sorted(pair_counts.items(), key=lambda x: x[1], reverse=True)[:10]:
            summaries.append({
                'from': from_addr,
                'to': to_addr,
                'interaction_count': count,
                'relationship_strength': 'strong' if count >= 5 else 'moderate' if count >= 3 else 'weak'
            })
        
        return summaries
    
    def _generate_insights(self) -> List[str]:
        """Generate actionable insights from stakeholder mapping."""
        insights = []
        
        # Identify key decision makers
        if self.decision_makers:
            insights.append(f"🎯 Identified {len(self.decision_makers)} key decision makers")
        
        # Identify communication bottlenecks
        high_activity = [s for s in self.stakeholders.values() if s['sent_as'] + s['received_as'] > 20]
        if high_activity:
            insights.append(f"⚠️ {len(high_activity)} stakeholders with very high communication load")
        
        # Identify isolated stakeholders
        low_activity = [s for s in self.stakeholders.values() if s['sent_as'] + s['received_as'] < 3]
        if low_activity:
            insights.append(f"📊 {len(low_activity)} stakeholders with low engagement")
        
        # Identify strong relationships
        strong_rels = [r for r in self.relationships if any(count >= 5 for (from_addr, to_addr), count in defaultdict(int).items())]
        if strong_rels:
            insights.append("🤝 Strong collaborative relationships detected")
        
        return insights
    
    def _generate_summary(self) -> str:
        """Generate human-readable summary."""
        parts = [
            f"Mapped {len(self.stakeholders)} stakeholders.",
            f"Identified {len(self.decision_makers)} decision makers.",
            f"Analyzed {len(self.relationships)} communication relationships.",
            f"Found {len(self._identify_communication_paths())} communication paths."
        ]
        
        return ' '.join(parts)


def main():
    """Test the Stakeholder Mapping Engine."""
    engine = StakeholderMappingEngine()
    
    # Sample email corpus
    sample_emails = [
        {
            'id': 'email_1',
            'sender': 'ceo@company.com',
            'recipients': ['vp-sales@company.com', 'vp-engineering@company.com'],
            'cc': ['executive-assistant@company.com'],
            'subject': 'Q4 Planning - Budget Approval',
            'body': 'Please review and approve the Q4 budget proposal. I authorize the spending outlined in the attached document.'
        },
        {
            'id': 'email_2',
            'sender': 'vp-sales@company.com',
            'recipients': ['sales-team@company.com'],
            'cc': ['ceo@company.com'],
            'subject': 'Q4 Sales Targets',
            'body': 'Here are the approved Q4 sales targets. Let\'s proceed with the plan.'
        },
        {
            'id': 'email_3',
            'sender': 'vp-engineering@company.com',
            'recipients': ['engineering-team@company.com', 'ceo@company.com'],
            'subject': 'PROJ-789: Technical Roadmap',
            'body': 'Attached is the technical roadmap for PROJ-789. Please review and sign off.'
        },
        {
            'id': 'email_4',
            'sender': 'engineering-team@company.com',
            'recipients': ['vp-engineering@company.com'],
            'subject': 'Re: PROJ-789: Technical Roadmap',
            'body': 'Roadmap looks good. We approve the timeline and resource allocation.'
        }
    ]
    
    result = engine.analyze_email_corpus(sample_emails)
    
    print("=" * 60)
    print("V930: Stakeholder Mapping Engine - Test Results")
    print("=" * 60)
    print(f"\nStakeholders Mapped: {len(result['stakeholders'])}")
    print(f"Decision Makers: {len(result['decision_makers'])}")
    print(f"Relationships: {len(result['relationships'])}")
    print(f"Communication Paths: {len(result['communication_paths'])}")
    
    print(f"\nDecision Makers:")
    for dm in result['decision_makers'][:5]:
        print(f"  - {dm}")
    
    print(f"\nTop Stakeholders:")
    for stakeholder in result['stakeholders'][:5]:
        print(f"  - {stakeholder['name']} ({stakeholder['email']})")
        print(f"    Roles: {', '.join(stakeholder['roles']) if stakeholder['roles'] else 'N/A'}")
        print(f"    Decision Maker: {stakeholder['is_decision_maker']}")
    
    print(f"\nKey Relationships:")
    for rel in result['relationships'][:5]:
        print(f"  - {rel['from']} → {rel['to']} ({rel['relationship_strength']})")
    
    print(f"\nInsights:")
    for insight in result['insights']:
        print(f"  {insight}")
    
    print(f"\nSummary: {result['summary']}")
    print("\n✅ V930 Stakeholder Mapping Engine: OPERATIONAL")


if __name__ == '__main__':
    main()

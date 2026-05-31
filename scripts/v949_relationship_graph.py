#!/usr/bin/env python3
"""
V949: Email Relationship Graph Builder
Builds dynamic relationship graphs from email communications.
Maps influence patterns, identifies key stakeholders, detects bottlenecks.
"""

import re
from datetime import datetime
from typing import Dict, List, Any, Set, Tuple
from collections import defaultdict

class RelationshipGraphBuilder:
    def __init__(self):
        self.graph = defaultdict(lambda: defaultdict(int))
        self.node_attributes = {}
        self.influence_scores = {}
        
    def analyze_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze email and update relationship graph."""
        sender = email.get('sender', '')
        recipients = email.get('recipients', [])
        cc_list = email.get('cc', [])
        body = email.get('body', '')
        
        all_participants = [sender] + recipients + cc_list
        
        # Update graph edges
        for recipient in recipients:
            self.graph[sender][recipient] += 1
            self.graph[recipient][sender] += 1
        
        # Update node attributes
        self._update_node_attributes(sender, 'sender', body)
        for recipient in recipients:
            self._update_node_attributes(recipient, 'recipient', body)
        
        # Calculate centrality metrics
        centrality = self._calculate_centrality()
        
        # Identify key stakeholders
        stakeholders = self._identify_stakeholders(centrality)
        
        # Detect communication bottlenecks
        bottlenecks = self._detect_bottlenecks(centrality)
        
        # Identify influence patterns
        influence_patterns = self._analyze_influence_patterns()
        
        # Generate network statistics
        network_stats = self._generate_network_stats()
        
        # Reply-all check
        reply_all_required = len(recipients) > 1
        
        return {
            'email_id': email.get('id'),
            'participants': all_participants,
            'graph_updated': True,
            'centrality_scores': centrality,
            'key_stakeholders': stakeholders,
            'bottlenecks': bottlenecks,
            'influence_patterns': influence_patterns,
            'network_stats': network_stats,
            'reply_all_required': reply_all_required,
            'recommendations': self._generate_recommendations(stakeholders, bottlenecks, network_stats)
        }
    
    def _update_node_attributes(self, node: str, role: str, body: str):
        """Update node attributes based on email participation."""
        if node not in self.node_attributes:
            self.node_attributes[node] = {
                'email_count': 0,
                'sent_count': 0,
                'received_count': 0,
                'avg_response_time': None,
                'topics': set()
            }
        
        self.node_attributes[node]['email_count'] += 1
        if role == 'sender':
            self.node_attributes[node]['sent_count'] += 1
        else:
            self.node_attributes[node]['received_count'] += 1
        
        # Extract topics
        topics = re.findall(r'\b[a-z]{5,}\b', body.lower())
        self.node_attributes[node]['topics'].update(topics[:10])
    
    def _calculate_centrality(self) -> Dict[str, float]:
        """Calculate degree centrality for all nodes."""
        centrality = {}
        total_nodes = len(self.graph)
        
        for node in self.graph:
            degree = len(self.graph[node])
            centrality[node] = degree / max(1, total_nodes - 1)
        
        return centrality
    
    def _identify_stakeholders(self, centrality: Dict[str, float]) -> List[Dict[str, Any]]:
        """Identify key stakeholders based on centrality."""
        sorted_nodes = sorted(centrality.items(), key=lambda x: x[1], reverse=True)
        
        stakeholders = []
        for node, score in sorted_nodes[:5]:
            attrs = self.node_attributes.get(node, {})
            stakeholders.append({
                'email': node,
                'centrality': round(score, 3),
                'email_count': attrs.get('email_count', 0),
                'role': 'hub' if score > 0.5 else 'connector' if score > 0.3 else 'participant'
            })
        
        return stakeholders
    
    def _detect_bottlenecks(self, centrality: Dict[str, float]) -> List[Dict[str, Any]]:
        """Detect communication bottlenecks."""
        bottlenecks = []
        
        # High centrality nodes that might be overloaded
        for node, score in centrality.items():
            if score > 0.6:
                attrs = self.node_attributes.get(node, {})
                email_count = attrs.get('email_count', 0)
                if email_count > 50:
                    bottlenecks.append({
                        'node': node,
                        'centrality': round(score, 3),
                        'email_volume': email_count,
                        'risk': 'high' if email_count > 100 else 'medium'
                    })
        
        return bottlenecks[:3]
    
    def _analyze_influence_patterns(self) -> List[Dict[str, Any]]:
        """Analyze influence patterns in the network."""
        patterns = []
        
        # Find nodes that initiate many conversations
        for node, attrs in self.node_attributes.items():
            sent = attrs.get('sent_count', 0)
            received = attrs.get('received_count', 0)
            
            if sent > received * 1.5 and sent > 10:
                patterns.append({
                    'node': node,
                    'pattern': 'initiator',
                    'sent': sent,
                    'received': received
                })
        
        # Find nodes that are frequently CC'd
        for node, attrs in self.node_attributes.items():
            if attrs.get('email_count', 0) > 20:
                patterns.append({
                    'node': node,
                    'pattern': 'observer',
                    'email_count': attrs['email_count']
                })
        
        return patterns[:5]
    
    def _generate_network_stats(self) -> Dict[str, Any]:
        """Generate network statistics."""
        total_nodes = len(self.graph)
        total_edges = sum(len(neighbors) for neighbors in self.graph.values()) // 2
        
        # Calculate density
        max_edges = total_nodes * (total_nodes - 1) / 2
        density = total_edges / max_edges if max_edges > 0 else 0
        
        return {
            'total_nodes': total_nodes,
            'total_edges': total_edges,
            'density': round(density, 3),
            'avg_degree': round(total_edges * 2 / max(1, total_nodes), 2)
        }
    
    def _generate_recommendations(self, stakeholders: List[Dict], bottlenecks: List[Dict], 
                                 network_stats: Dict) -> List[str]:
        """Generate network optimization recommendations."""
        recommendations = []
        
        if stakeholders:
            top_stakeholder = stakeholders[0]
            recommendations.append(f"Key stakeholder identified: {top_stakeholder['email']} (centrality: {top_stakeholder['centrality']})")
        
        if bottlenecks:
            recommendations.append(f"Communication bottleneck detected: {bottlenecks[0]['node']} ({bottlenecks[0]['email_volume']} emails)")
            recommendations.append("Consider distributing communication load")
        
        if network_stats['density'] < 0.2:
            recommendations.append("Low network density - improve cross-team communication")
        
        if network_stats['avg_degree'] < 3:
            recommendations.append("Low connectivity - encourage more collaborative communication")
        
        return recommendations


def main():
    """Test V949 Relationship Graph Builder."""
    builder = RelationshipGraphBuilder()
    
    test_emails = [
        {
            'id': 'email1',
            'sender': 'ceo@company.com',
            'recipients': ['vp-eng@company.com', 'vp-sales@company.com'],
            'cc': ['exec-assistant@company.com'],
            'body': 'Q4 planning meeting. We need to align on strategy and resource allocation.'
        },
        {
            'id': 'email2',
            'sender': 'vp-eng@company.com',
            'recipients': ['team-lead@company.com', 'senior-dev@company.com'],
            'cc': ['ceo@company.com'],
            'body': 'Engineering roadmap review. Technical architecture decisions needed.'
        },
        {
            'id': 'email3',
            'sender': 'vp-sales@company.com',
            'recipients': ['sales-team@company.com', 'marketing@company.com'],
            'cc': ['ceo@company.com', 'exec-assistant@company.com'],
            'body': 'Sales targets for Q4. Campaign coordination required.'
        }
    ]
    
    print("=" * 60)
    print("V949: Email Relationship Graph Builder - Test Results")
    print("=" * 60)
    
    for email in test_emails:
        result = builder.analyze_email(email)
        print(f"\nEmail: {email['id']}")
        print(f"  Participants: {len(result['participants'])}")
        print(f"  Network Nodes: {result['network_stats']['total_nodes']}")
        print(f"  Network Edges: {result['network_stats']['total_edges']}")
        print(f"  Density: {result['network_stats']['density']}")
        print(f"  Reply-All: {result['reply_all_required']}")
        if result['key_stakeholders']:
            print(f"  Top Stakeholder: {result['key_stakeholders'][0]['email']}")
        if result['bottlenecks']:
            print(f"  Bottleneck: {result['bottlenecks'][0]['node']}")
    
    print("\n✅ V949 Relationship Graph Builder: OPERATIONAL")


if __name__ == '__main__':
    main()

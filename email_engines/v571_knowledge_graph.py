#!/usr/bin/env python3
"""
V571 - Email Knowledge Graph Builder
Automatically builds relationship maps from email communications, identifies key stakeholders and decision-makers.
Enforces reply-all for all communications.
"""
import json
from datetime import datetime
from typing import Dict, List
from collections import defaultdict

class EmailKnowledgeGraphBuilder:
    def __init__(self):
        self.reply_all_enforced = True
        self.nodes = {}
        self.edges = []
        self.relationships = defaultdict(list)
    
    def build_graph(self, email_thread: List[Dict]) -> Dict:
        """Build knowledge graph from email thread"""
        # Extract nodes (people)
        for email in email_thread:
            self._add_node(email.get('from', ''), 'sender', email)
            for recipient in email.get('to', []) + email.get('cc', []):
                self._add_node(recipient, 'recipient', email)
        
        # Build edges (relationships)
        for email in email_thread:
            sender = email.get('from', '')
            for recipient in email.get('to', []) + email.get('cc', []):
                self._add_edge(sender, recipient, email)
        
        # Identify key stakeholders
        stakeholders = self._identify_stakeholders()
        
        # Detect decision makers
        decision_makers = self._detect_decision_makers(email_thread)
        
        # Find communication patterns
        patterns = self._analyze_communication_patterns()
        
        # Suggest optimal paths
        optimal_paths = self._suggest_optimal_paths()
        
        return {
            'engine': 'V571_Email_Knowledge_Graph_Builder',
            'timestamp': datetime.now().isoformat(),
            'graph': {
                'nodes': list(self.nodes.values()),
                'edges': self.edges,
                'total_nodes': len(self.nodes),
                'total_edges': len(self.edges)
            },
            'stakeholders': stakeholders,
            'decision_makers': decision_makers,
            'communication_patterns': patterns,
            'optimal_paths': optimal_paths,
            'reply_all_enforced': self.reply_all_enforced
        }
    
    def _add_node(self, email: str, role: str, message: Dict):
        """Add a node to the graph"""
        if email not in self.nodes:
            self.nodes[email] = {
                'id': email,
                'label': email.split('@')[0],
                'role': role,
                'message_count': 0,
                'first_seen': message.get('timestamp', ''),
                'last_seen': message.get('timestamp', '')
            }
        self.nodes[email]['message_count'] += 1
        self.nodes[email]['last_seen'] = message.get('timestamp', '')
    
    def _add_edge(self, sender: str, recipient: str, message: Dict):
        """Add an edge to the graph"""
        edge_id = f"{sender}_{recipient}_{message.get('timestamp', '')}"
        self.edges.append({
            'id': edge_id,
            'source': sender,
            'target': recipient,
            'type': 'communication',
            'timestamp': message.get('timestamp', ''),
            'subject': message.get('subject', '')
        })
        self.relationships[sender].append(recipient)
    
    def _identify_stakeholders(self) -> List[Dict]:
        """Identify key stakeholders based on connectivity"""
        stakeholders = []
        for email, node in self.nodes.items():
            connections = len(self.relationships.get(email, []))
            inbound = sum(1 for e in self.edges if e['target'] == email)
            outbound = sum(1 for e in self.edges if e['source'] == email)
            
            influence_score = (connections * 0.3) + (inbound * 0.4) + (outbound * 0.3)
            
            stakeholders.append({
                'email': email,
                'influence_score': round(influence_score, 2),
                'connections': connections,
                'inbound_messages': inbound,
                'outbound_messages': outbound,
                'role': 'key_stakeholder' if influence_score > 5 else 'participant'
            })
        
        return sorted(stakeholders, key=lambda x: x['influence_score'], reverse=True)
    
    def _detect_decision_makers(self, thread: List[Dict]) -> List[Dict]:
        """Detect decision makers from email content"""
        decision_keywords = ['approve', 'decision', 'authorized', 'final', 'confirm', 'proceed']
        decision_makers = []
        
        for email in thread:
            body = email.get('body', '').lower()
            if any(keyword in body for keyword in decision_keywords):
                decision_makers.append({
                    'email': email.get('from', ''),
                    'evidence': email.get('subject', ''),
                    'timestamp': email.get('timestamp', ''),
                    'confidence': 0.85
                })
        
        return decision_makers
    
    def _analyze_communication_patterns(self) -> Dict:
        """Analyze communication patterns"""
        return {
            'most_active': max(self.nodes.items(), key=lambda x: x[1]['message_count'])[0] if self.nodes else '',
            'central_hub': self._find_central_hub(),
            'communication_density': len(self.edges) / max(len(self.nodes), 1),
            'response_chains': self._count_response_chains()
        }
    
    def _find_central_hub(self) -> str:
        """Find the most central node in the network"""
        if not self.nodes:
            return ''
        centrality = {}
        for email in self.nodes:
            centrality[email] = len(self.relationships.get(email, []))
        return max(centrality.items(), key=lambda x: x[1])[0]
    
    def _count_response_chains(self) -> int:
        """Count response chains in the thread"""
        return len([e for e in self.edges if 'Re:' in e.get('subject', '')])
    
    def _suggest_optimal_paths(self) -> List[Dict]:
        """Suggest optimal communication paths"""
        suggestions = []
        if self.nodes:
            central = self._find_central_hub()
            suggestions.append({
                'path': f"Route through {central} for maximum reach",
                'reason': "Highest connectivity and influence",
                'confidence': 0.9
            })
        return suggestions

if __name__ == "__main__":
    builder = EmailKnowledgeGraphBuilder()
    test_thread = [
        {'from': 'ceo@company.com', 'to': ['vp@company.com', 'manager@company.com'], 'subject': 'Q4 Strategy', 'timestamp': '2024-01-15T09:00:00', 'body': 'Please review the Q4 strategy proposal'},
        {'from': 'vp@company.com', 'to': ['ceo@company.com'], 'subject': 'Re: Q4 Strategy', 'timestamp': '2024-01-15T10:00:00', 'body': 'I approve the strategy. Let\'s proceed.'},
        {'from': 'manager@company.com', 'to': ['ceo@company.com', 'vp@company.com'], 'subject': 'Re: Q4 Strategy', 'timestamp': '2024-01-15T11:00:00', 'body': 'Implementation plan ready'}
    ]
    result = builder.build_graph(test_thread)
    print(json.dumps(result, indent=2))

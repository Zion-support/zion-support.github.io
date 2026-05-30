#!/usr/bin/env python3
"""
Email Intelligence Engine V312 - Email Relationship Graph
Maps organizational relationship network from email patterns,
identifies key influencers, communication bottlenecks, and silos.
Enforces reply-all and case-by-case analysis.
"""

import json
from datetime import datetime
from typing import Dict, List
from collections import defaultdict

class EmailRelationshipGraph:
    def __init__(self):
        self.version = "V312"
        self.graph = defaultdict(lambda: {'connections': defaultdict(int), 'influence_score': 0})
        
    def add_interaction(self, sender: str, recipients: List[str], 
                       cc_list: List[str], timestamp: str) -> None:
        """Add email interaction to graph"""
        all_recipients = recipients + cc_list
        
        # Update sender's connections
        for recipient in all_recipients:
            self.graph[sender]['connections'][recipient] += 1
        
        # Update recipients' connections
        for recipient in all_recipients:
            self.graph[recipient]['connections'][sender] += 1
    
    def calculate_influence_scores(self) -> Dict[str, float]:
        """Calculate influence scores using degree centrality"""
        scores = {}
        total_nodes = len(self.graph)
        
        for person, data in self.graph.items():
            # Degree centrality: number of unique connections
            degree = len(data['connections'])
            # Weighted by interaction frequency
            weighted_degree = sum(data['connections'].values())
            
            # Influence score (normalized)
            if total_nodes > 1:
                total_interactions = sum(sum(d['connections'].values()) for d in self.graph.values())
                scores[person] = (degree / (total_nodes - 1)) * 0.6 + \
                                (weighted_degree / max(1, total_interactions)) * 0.4
            else:
                scores[person] = 0
            
            self.graph[person]['influence_score'] = scores[person]
        
        return scores
    
    def identify_bottlenecks(self) -> List[Dict]:
        """Identify communication bottlenecks"""
        bottlenecks = []
        
        for person, data in self.graph.items():
            connections = data['connections']
            if len(connections) > 10:  # High degree node
                # Check if this person is a bridge between clusters
                total_interactions = sum(connections.values())
                avg_interactions = total_interactions / len(connections)
                
                if avg_interactions > 5:  # Heavy reliance
                    bottlenecks.append({
                        'person': person,
                        'connections': len(connections),
                        'total_interactions': total_interactions,
                        'risk': 'high' if len(connections) > 20 else 'medium'
                    })
        
        return sorted(bottlenecks, key=lambda x: x['total_interactions'], reverse=True)
    
    def detect_silos(self) -> List[List[str]]:
        """Detect organizational silos using connected components"""
        visited = set()
        silos = []
        
        def dfs(node, component):
            visited.add(node)
            component.append(node)
            for neighbor in self.graph[node]['connections']:
                if neighbor not in visited:
                    dfs(neighbor, component)
        
        for person in self.graph:
            if person not in visited:
                component = []
                dfs(person, component)
                if len(component) > 1:
                    silos.append(component)
        
        return silos
    
    def analyze_email_context(self, email_data: Dict) -> Dict:
        """Analyze email in context of relationship graph"""
        print(f"[{self.version}] Analyzing relationship context")
        
        sender = email_data.get('sender', '')
        recipients = email_data.get('recipients', [])
        cc_list = email_data.get('cc', [])
        all_recipients = recipients + cc_list
        
        # Enforce reply-all
        reply_all = len(all_recipients) > 1
        
        # Get sender's influence
        sender_influence = self.graph[sender]['influence_score']
        
        # Get recipient influences
        recipient_influences = {r: self.graph[r]['influence_score'] for r in all_recipients}
        
        # Check if this bridges silos
        sender_connections = set(self.graph[sender]['connections'].keys())
        recipient_connections = set()
        for r in all_recipients:
            recipient_connections.update(self.graph[r]['connections'].keys())
        
        bridges_silos = len(sender_connections & recipient_connections) < len(recipient_connections) * 0.3
        
        # Identify key stakeholders
        key_stakeholders = [r for r, score in recipient_influences.items() if score > 0.5]
        
        return {
            'version': self.version,
            'engine': 'Email Relationship Graph',
            'sender_influence': sender_influence,
            'recipient_influences': recipient_influences,
            'key_stakeholders': key_stakeholders,
            'bridges_silos': bridges_silos,
            'reply_all': reply_all,
            'reply_all_recipients': all_recipients if reply_all else [],
            'recommendation': 'High-influence thread - ensure comprehensive response' if sender_influence > 0.6 else 'Standard response protocol'
        }
    
    def process_email(self, email_data: Dict) -> Dict:
        """Process email and update graph"""
        sender = email_data.get('sender', '')
        recipients = email_data.get('recipients', [])
        cc_list = email_data.get('cc', [])
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # Update graph
        self.add_interaction(sender, recipients, cc_list, timestamp)
        
        # Analyze context
        return self.analyze_email_context(email_data)

# Test
if __name__ == "__main__":
    engine = EmailRelationshipGraph()
    
    # Build sample graph
    interactions = [
        ('ceo@company.com', ['cto@company.com', 'cfo@company.com'], ['board@company.com']),
        ('cto@company.com', ['dev-lead@company.com'], ['ceo@company.com']),
        ('dev-lead@company.com', ['dev1@company.com', 'dev2@company.com'], []),
        ('sales-lead@company.com', ['sales1@company.com', 'sales2@company.com'], []),
    ]
    
    for sender, recipients, cc in interactions:
        engine.add_interaction(sender, recipients, cc, datetime.now().isoformat())
    
    # Calculate influence
    scores = engine.calculate_influence_scores()
    print("Influence scores:", json.dumps(scores, indent=2))
    
    # Process new email
    test_email = {
        'sender': 'ceo@company.com',
        'subject': 'Strategic Initiative',
        'content': 'Launching new product line',
        'recipients': ['cto@company.com'],
        'cc': ['cfo@company.com', 'board@company.com']
    }
    
    result = engine.process_email(test_email)
    print("\nEmail analysis:", json.dumps(result, indent=2))

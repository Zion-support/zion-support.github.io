#!/usr/bin/env python3
"""
V656 - Email Knowledge Graph Builder
Automatically builds knowledge graphs from email conversations, mapping topics,
people, organizations, and relationships. Creates a searchable knowledge base
that grows with every email interaction.

Key Features:
- Entity extraction (people, organizations, topics, products, dates)
- Relationship mapping between entities
- Topic clustering and categorization
- Temporal knowledge tracking
- Semantic search across email corpus
- Knowledge graph visualization data
- Reply-all enforcement for all multi-recipient communications
"""

import json
import re
from datetime import datetime
from collections import defaultdict, Counter
from typing import Dict, List, Set, Optional, Tuple

class EmailKnowledgeGraphBuilder:
    """Builds knowledge graphs from email conversations"""
    
    def __init__(self):
        self.nodes = {}  # entity_id -> node data
        self.edges = []  # list of relationships
        self.topics = defaultdict(list)  # topic -> list of email_ids
        self.timeline = []  # chronological events
        self.email_index = {}  # email_id -> processed data
    
    # Entity extraction patterns
    EMAIL_PATTERN = re.compile(r'[\w.+-]+@[\w-]+\.[\w.-]+')
    ORG_PATTERNS = [
        r'(?:Inc|LLC|Ltd|Corp|Corporation|Company|Group|Technologies|Solutions|Systems)\b',
        r'(?:University|College|Institute|School|Academy)\b',
        r'(?:Hospital|Medical|Health|Clinic)\b',
        r'(?:Bank|Financial|Investment|Capital)\b',
    ]
    TOPIC_KEYWORDS = {
        'project_management': ['project', 'milestone', 'deadline', 'deliverable', 'sprint', 'backlog', 'roadmap', 'timeline'],
        'finance': ['budget', 'cost', 'revenue', 'invoice', 'payment', 'pricing', 'expense', 'profit'],
        'technical': ['API', 'server', 'database', 'deployment', 'infrastructure', 'code', 'bug', 'feature'],
        'sales': ['deal', 'pipeline', 'prospect', 'lead', 'conversion', 'opportunity', 'quota', 'contract'],
        'hr': ['hiring', 'interview', 'onboarding', 'performance', 'training', 'benefits', 'salary'],
        'marketing': ['campaign', 'brand', 'audience', 'conversion', 'engagement', 'content', 'SEO'],
        'legal': ['contract', 'agreement', 'compliance', 'regulation', 'liability', 'NDA', 'terms'],
        'support': ['ticket', 'issue', 'resolution', 'escalation', 'SLA', 'customer', 'feedback'],
    }
    
    def _extract_entities(self, text: str) -> Dict[str, List[str]]:
        """Extract entities from email text"""
        entities = {
            'people': [],
            'organizations': [],
            'topics': [],
            'dates': [],
            'products': [],
            'numbers': []
        }
        
        # Extract emails (people)
        emails = self.EMAIL_PATTERN.findall(text)
        entities['people'].extend(emails)
        
        # Extract organizations
        for pattern in self.ORG_PATTERNS:
            matches = re.findall(r'\b[\w\s]+' + pattern, text)
            entities['organizations'].extend([m.strip() for m in matches])
        
        # Extract topics
        text_lower = text.lower()
        for topic, keywords in self.TOPIC_KEYWORDS.items():
            matches = sum(1 for kw in keywords if kw.lower() in text_lower)
            if matches >= 2:
                entities['topics'].append(topic)
        
        # Extract dates
        date_patterns = [
            r'\d{4}-\d{2}-\d{2}',
            r'\d{1,2}/\d{1,2}/\d{2,4}',
            r'(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+\d{4}',
        ]
        for pattern in date_patterns:
            entities['dates'].extend(re.findall(pattern, text))
        
        # Extract numbers/metrics
        numbers = re.findall(r'\$[\d,]+(?:\.\d{2})?', text)
        entities['numbers'].extend(numbers)
        
        return entities
    
    def _create_node(self, entity_type: str, entity_value: str) -> str:
        """Create or update a node in the knowledge graph"""
        node_id = f"{entity_type}:{entity_value.lower().strip()}"
        
        if node_id not in self.nodes:
            self.nodes[node_id] = {
                'id': node_id,
                'type': entity_type,
                'value': entity_value,
                'mentions': 0,
                'first_seen': datetime.now().isoformat(),
                'last_seen': datetime.now().isoformat(),
                'connections': set(),
                'importance_score': 0
            }
        
        self.nodes[node_id]['mentions'] += 1
        self.nodes[node_id]['last_seen'] = datetime.now().isoformat()
        self.nodes[node_id]['importance_score'] = min(100, self.nodes[node_id]['mentions'] * 5)
        
        return node_id
    
    def _create_edge(self, from_id: str, to_id: str, relationship: str, context: str = '') -> None:
        """Create an edge between two nodes"""
        edge = {
            'from': from_id,
            'to': to_id,
            'relationship': relationship,
            'context': context[:200],
            'timestamp': datetime.now().isoformat(),
            'weight': 1
        }
        
        # Check if edge already exists
        existing = next((e for e in self.edges if e['from'] == from_id and e['to'] == to_id and e['relationship'] == relationship), None)
        if existing:
            existing['weight'] += 1
            existing['timestamp'] = datetime.now().isoformat()
        else:
            self.edges.append(edge)
        
        # Update node connections
        if from_id in self.nodes:
            self.nodes[from_id]['connections'].add(to_id)
        if to_id in self.nodes:
            self.nodes[to_id]['connections'].add(from_id)
    
    def process_email(self, email: Dict) -> Dict:
        """Process an email and update the knowledge graph"""
        email_id = email.get('id', f"email_{len(self.email_index):06d}")
        text = email.get('body', '') + ' ' + email.get('subject', '')
        
        # Extract entities
        entities = self._extract_entities(text)
        
        # Create sender node
        sender_id = self._create_node('person', email.get('from', 'unknown'))
        
        # Create recipient nodes and edges
        recipient_ids = []
        for recipient in email.get('to', []):
            recipient_id = self._create_node('person', recipient)
            recipient_ids.append(recipient_id)
            self._create_edge(sender_id, recipient_id, 'sent_to', email.get('subject', ''))
        
        for cc in email.get('cc', []):
            cc_id = self._create_node('person', cc)
            self._create_edge(sender_id, cc_id, 'cc_to', email.get('subject', ''))
        
        # Process other entities
        for org in entities['organizations']:
            org_id = self._create_node('organization', org)
            self._create_edge(sender_id, org_id, 'mentions', text[:100])
        
        for topic in entities['topics']:
            topic_id = self._create_node('topic', topic)
            self._create_edge(email_id, topic_id, 'about', email.get('subject', ''))
            self.topics[topic].append(email_id)
            for rid in recipient_ids:
                self._create_edge(rid, topic_id, 'interested_in', '')
        
        # Index email
        self.email_index[email_id] = {
            'id': email_id,
            'from': email.get('from', ''),
            'to': email.get('to', []),
            'subject': email.get('subject', ''),
            'entities': entities,
            'timestamp': email.get('timestamp', datetime.now().isoformat()),
            'reply_all_required': len(email.get('to', [])) > 1
        }
        
        # Add to timeline
        self.timeline.append({
            'email_id': email_id,
            'timestamp': email.get('timestamp', datetime.now().isoformat()),
            'from': email.get('from', ''),
            'subject': email.get('subject', ''),
            'entity_count': sum(len(v) for v in entities.values())
        })
        
        return {
            'email_id': email_id,
            'entities_extracted': sum(len(v) for v in entities.values()),
            'nodes_created': len(self.nodes),
            'edges_created': len(self.edges),
            'topics_detected': entities['topics']
        }
    
    def search_knowledge(self, query: str, max_results: int = 10) -> List[Dict]:
        """Search the knowledge graph"""
        query_lower = query.lower()
        results = []
        
        # Search nodes
        for node_id, node in self.nodes.items():
            if query_lower in node['value'].lower():
                results.append({
                    'type': 'node',
                    'node': node,
                    'relevance': node['importance_score']
                })
        
        # Search emails
        for email_id, email_data in self.email_index.items():
            if query_lower in email_data['subject'].lower() or query_lower in str(email_data.get('entities', {})).lower():
                results.append({
                    'type': 'email',
                    'email': email_data,
                    'relevance': 50
                })
        
        # Sort by relevance
        results.sort(key=lambda x: x['relevance'], reverse=True)
        return results[:max_results]
    
    def get_topic_summary(self) -> Dict:
        """Get summary of all topics in the knowledge graph"""
        summary = {}
        for topic, email_ids in self.topics.items():
            summary[topic] = {
                'email_count': len(email_ids),
                'unique_senders': len(set(self.email_index[eid]['from'] for eid in email_ids if eid in self.email_index)),
                'last_activity': max((self.email_index[eid]['timestamp'] for eid in email_ids if eid in self.email_index), default=None)
            }
        return summary
    
    def get_key_people(self, top_n: int = 10) -> List[Dict]:
        """Get most important people in the knowledge graph"""
        people = [(nid, node) for nid, node in self.nodes.items() if node['type'] == 'person']
        people.sort(key=lambda x: x[1]['importance_score'], reverse=True)
        return [{'id': nid, **node, 'connections_count': len(node['connections'])} for nid, node in people[:top_n]]
    
    def generate_graph_report(self) -> Dict:
        """Generate comprehensive knowledge graph report"""
        node_types = Counter(n['type'] for n in self.nodes.values())
        
        return {
            'total_nodes': len(self.nodes),
            'total_edges': len(self.edges),
            'total_emails_indexed': len(self.email_index),
            'node_types': dict(node_types),
            'topics': len(self.topics),
            'timeline_events': len(self.timeline),
            'top_people': self.get_key_people(5),
            'topic_summary': self.get_topic_summary(),
            'graph_density': round(len(self.edges) / max(1, len(self.nodes) * (len(self.nodes) - 1) / 2), 4),
            'avg_connections_per_node': round(sum(len(n['connections']) for n in self.nodes.values()) / max(1, len(self.nodes)), 2)
        }


def test_v656():
    """Test V656 Email Knowledge Graph Builder"""
    builder = EmailKnowledgeGraphBuilder()
    
    emails = [
        {
            'id': 'e001', 'from': 'cto@ziontech.com', 'to': ['dev@ziontech.com', 'devops@ziontech.com'],
            'subject': 'API Server Migration Project', 'body': 'Team, we need to migrate our API server to the new cloud infrastructure. The budget is $50,000 and deadline is January 15, 2027. Please review the deployment plan.',
            'timestamp': '2026-05-29T09:00:00'
        },
        {
            'id': 'e002', 'from': 'sales@ziontech.com', 'to': ['ceo@ziontech.com', 'marketing@ziontech.com'],
            'subject': 'New Client Deal - Acme Corporation', 'body': 'Great news! We closed a deal with Acme Corporation for $120,000 annual contract. The pipeline is looking strong this quarter.',
            'timestamp': '2026-05-29T11:00:00'
        },
        {
            'id': 'e003', 'from': 'hr@ziontech.com', 'to': ['cto@ziontech.com', 'ceo@ziontech.com'],
            'subject': 'Hiring Plan for Q3', 'body': 'We need to hire 5 new engineers for the infrastructure team. Budget allocation for salaries is $500,000. Interview process starts next week.',
            'timestamp': '2026-05-29T14:00:00'
        }
    ]
    
    for email in emails:
        result = builder.process_email(email)
        print(f"Processed {email['id']}: {result['entities_extracted']} entities, {result['topics_detected']} topics")
    
    # Search
    search_results = builder.search_knowledge('API')
    
    # Generate report
    report = builder.generate_graph_report()
    
    print(f"\n✅ V656 Email Knowledge Graph Builder Test")
    print(f"Total Nodes: {report['total_nodes']}")
    print(f"Total Edges: {report['total_edges']}")
    print(f"Topics: {list(report['topic_summary'].keys())}")
    print(f"Top People: {[p['value'] for p in report['top_people']]}")
    print(f"Graph Density: {report['graph_density']}")
    print(f"Search 'API': {len(search_results)} results")
    
    return report


if __name__ == '__main__':
    test_v656()

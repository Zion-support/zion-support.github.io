#!/usr/bin/env python3
"""
Email Intelligence V303 - Email Knowledge Synthesizer
Automatically extracts, organizes, and cross-references knowledge
from all email conversations into a searchable knowledge graph
"""
import json, re
from datetime import datetime
from typing import Dict, List
from collections import defaultdict

class EmailKnowledgeSynthesizer:
    def __init__(self):
        self.version = "V303"
        self.name = "Email Knowledge Synthesizer"
        self.knowledge_graph = defaultdict(list)
        self.entities = defaultdict(set)
        self.relationships = []
    
    def synthesize(self, email_history: List[Dict]) -> Dict:
        """Extract knowledge from email conversations"""
        print(f"[{self.version}] 🧠 Synthesizing knowledge from {len(email_history)} emails...")
        
        extracted_knowledge = []
        decisions = []
        action_items = []
        expertise_map = defaultdict(list)
        
        for email in email_history:
            content = email.get('content', '')
            sender = email.get('sender', {}).get('email', 'unknown')
            subject = email.get('subject', '')
            
            # Extract decisions
            decision_patterns = re.findall(r'(?:we (?:decided|agreed|will)|the decision is|approved|go ahead with|let\'s proceed with)\s+(.{10,100})', content, re.I)
            for d in decision_patterns:
                decisions.append({'decision': d.strip(), 'made_by': sender, 'date': email.get('date', '')})
            
            # Extract action items
            action_patterns = re.findall(r'(?:TODO|ACTION|please|need to|must|should)\s+(.{10,100})', content, re.I)
            for a in action_patterns:
                action_items.append({'action': a.strip(), 'assigned_to': sender, 'status': 'pending'})
            
            # Extract topics/domains
            topics = self._extract_topics(content + ' ' + subject)
            for topic in topics:
                self.knowledge_graph[topic].append({
                    'source': sender,
                    'date': email.get('date', ''),
                    'snippet': content[:200]
                })
                expertise_map[sender].append(topic)
            
            # Extract named entities
            for entity_type, pattern in [('person', r'\b[A-Z][a-z]+ [A-Z][a-z]+\b'), ('company', r'\b[A-Z][a-zA-Z]+ (?:Inc|LLC|Corp|Ltd|Group)\b'), ('product', r'\b(?:V\d+|version \d+)\b')]:
                matches = re.findall(pattern, content)
                for m in matches:
                    self.entities[entity_type].add(m)
        
        # Build expertise profiles
        expertise_profiles = {}
        for person, topics in expertise_map.items():
            topic_freq = defaultdict(int)
            for t in topics:
                topic_freq[t] += 1
            expertise_profiles[person] = sorted(topic_freq.items(), key=lambda x: x[1], reverse=True)[:5]
        
        return {
            'version': self.version,
            'engine': self.name,
            'knowledge_extracted': {
                'decisions': decisions[:20],
                'action_items': action_items[:20],
                'knowledge_graph_nodes': len(self.knowledge_graph),
                'entities': {k: list(v)[:10] for k, v in self.entities.items()},
                'expertise_profiles': {k: v for k, v in list(expertise_profiles.items())[:10]}
            },
            'search_index_size': sum(len(v) for v in self.knowledge_graph.values()),
            'cross_references': len(self.relationships),
            'timestamp': datetime.now().isoformat()
        }
    
    def _extract_topics(self, text: str) -> List[str]:
        """Extract key topics from text"""
        topics = []
        topic_patterns = {
            'security': r'\b(?:security|vulnerability|breach|firewall|encryption|authentication)\b',
            'deployment': r'\b(?:deploy|release|production|staging|CI.?CD|pipeline)\b',
            'performance': r'\b(?:performance|latency|throughput|optimization|speed)\b',
            'billing': r'\b(?:invoice|payment|billing|subscription|pricing|cost)\b',
            'infrastructure': r'\b(?:server|database|kubernetes|docker|cloud|AWS|Azure)\b',
            'compliance': r'\b(?:GDPR|HIPAA|compliance|audit|regulation|policy)\b',
            'AI/ML': r'\b(?:AI|machine learning|model|training|inference|neural)\b',
            'networking': r'\b(?:network|API|endpoint|protocol|bandwidth|DNS)\b'
        }
        for topic, pattern in topic_patterns.items():
            if re.search(pattern, text, re.I):
                topics.append(topic)
        return topics
    
    def analyze_and_respond(self, email_data: Dict) -> Dict:
        """Synthesize knowledge and respond - REPLY-ALL enforced"""
        synthesis = self.synthesize(email_data.get('history', []))
        all_recipients = email_data.get('to', []) + email_data.get('cc', [])
        return {
            'version': self.version,
            'engine': self.name,
            'synthesis': synthesis,
            'reply_all_enforced': True,
            'all_recipients': all_recipients,
            'case_by_case_analysis': True
        }

if __name__ == '__main__':
    synth = EmailKnowledgeSynthesizer()
    test = [
        {'sender': {'email': 'dev@co.com'}, 'subject': 'Security vulnerability in auth module', 'content': 'We found a critical vulnerability in the authentication module. We decided to patch it immediately. TODO: Update the firewall rules. The API endpoint needs hardening.', 'date': '2026-05-28'},
        {'sender': {'email': 'pm@co.com'}, 'subject': 'Deployment schedule update', 'content': 'The CI/CD pipeline will be updated next week. Please review the staging environment. ACTION: Test the new release before production deploy.', 'date': '2026-05-29'}
    ]
    result = synth.synthesize(test)
    print(json.dumps(result, indent=2))

#!/usr/bin/env python3
"""
V450 - AI Email Knowledge Graph Builder
Builds a knowledge graph from email conversations to answer questions and find experts.
Features: Entity extraction, relationship mapping, expert identification, question answering.
CRITICAL: Always enforces reply-all for multi-recipient emails.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Any, Set, Tuple
from collections import defaultdict


class EmailKnowledgeGraph:
    """Builds and queries a knowledge graph from email conversations."""
    
    def __init__(self):
        self.nodes: Dict[str, Dict] = {}
        self.edges: List[Dict] = []
        self.expertise_map: Dict[str, Set[str]] = defaultdict(set)
        self.project_map: Dict[str, Dict] = {}
        self.decision_log: List[Dict] = []
        
    def analyze_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Process email and update knowledge graph."""
        body = email.get('body', '')
        subject = email.get('subject', '')
        sender = email.get('from', '')
        recipients = email.get('to', []) + email.get('cc', [])
        
        entities = self._extract_entities(body + ' ' + subject)
        relationships = self._extract_relationships(entities, sender, recipients, body)
        decisions = self._extract_decisions(body)
        expertise = self._infer_expertise(sender, body, subject)
        projects = self._extract_projects(body, subject)
        
        self._update_graph(entities, relationships, sender, recipients)
        self._update_expertise(expertise)
        self._update_projects(projects)
        self._log_decisions(decisions, sender, subject)
        
        graph_stats = self._get_graph_stats()
        expert_suggestions = self._find_experts_for_topics(entities.get('topics', []))
        
        reply_all_required = len(recipients) > 1
        
        return {
            'engine': 'V450_KnowledgeGraph',
            'entities_extracted': {
                'people': entities.get('people', []),
                'organizations': entities.get('organizations', []),
                'topics': entities.get('topics', []),
                'technologies': entities.get('technologies', []),
                'projects': entities.get('projects', [])
            },
            'relationships_found': len(relationships),
            'decisions_logged': len(decisions),
            'expertise_updated': expertise,
            'graph_stats': graph_stats,
            'expert_suggestions': expert_suggestions,
            'query_capabilities': [
                'Who knows about X?',
                'What was decided about Y?',
                'Who worked on project Z?',
                'What technologies does person A know?',
                'Show all decisions about topic B'
            ],
            'reply_all_required': reply_all_required,
            'reply_all_enforced': reply_all_required,
            'recipients': recipients,
            'timestamp': datetime.now().isoformat()
        }
    
    def query(self, question: str) -> Dict[str, Any]:
        """Answer questions about the knowledge graph."""
        question_lower = question.lower()
        
        if 'who knows' in question_lower or 'expert' in question_lower:
            topic = self._extract_query_topic(question)
            return self._find_experts(topic)
        
        if 'what was decided' in question_lower or 'decision' in question_lower:
            topic = self._extract_query_topic(question)
            return self._find_decisions(topic)
        
        if 'who worked on' in question_lower or 'project' in question_lower:
            project = self._extract_query_topic(question)
            return self._find_project_members(project)
        
        return {'answer': 'Query type not recognized. Try: "Who knows about X?" or "What was decided about Y?"'}
    
    def _extract_entities(self, text: str) -> Dict[str, List[str]]:
        """Extract entities from text."""
        entities = {
            'people': [],
            'organizations': [],
            'topics': [],
            'technologies': [],
            'projects': []
        }
        
        email_pattern = r'[\w.+-]+@[\w-]+\.[\w.-]+'
        entities['people'] = list(set(re.findall(email_pattern, text)))
        
        name_pattern = r'\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+\b'
        names = re.findall(name_pattern, text)
        for name in names:
            if name not in entities['people'] and len(name.split()) >= 2:
                entities['people'].append(name)
        
        org_suffixes = r'\b(?:Inc|Corp|LLC|Ltd|Group|Company|Technologies|Solutions|Systems|Labs|AI)\b'
        org_pattern = rf'[A-Z][\w\s]+?\s+{org_suffixes}'
        entities['organizations'] = list(set(re.findall(org_pattern, text)))
        
        tech_terms = [
            'Python', 'JavaScript', 'React', 'Node.js', 'AWS', 'Azure', 'GCP',
            'Docker', 'Kubernetes', 'TensorFlow', 'PyTorch', 'LLM', 'GPT',
            'API', 'REST', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Redis',
            'CI/CD', 'DevOps', 'MLOps', 'Terraform', 'Ansible', 'Linux',
            'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision',
            'Blockchain', 'IoT', 'Edge Computing', 'Serverless', 'Microservices'
        ]
        for term in tech_terms:
            if term.lower() in text.lower():
                entities['technologies'].append(term)
        
        project_pattern = r'(?:project|initiative|program)\s+([A-Z][\w\s]+?)(?:\.|,|\n|$)'
        entities['projects'] = list(set(re.findall(project_pattern, text, re.IGNORECASE)))
        
        capitalized_terms = re.findall(r'\b[A-Z][a-z]{3,}(?:\s+[A-Z][a-z]+)*\b', text)
        for term in capitalized_terms:
            if term not in entities['people'] and term not in entities['organizations']:
                if len(term.split()) <= 3:
                    entities['topics'].append(term)
        
        for key in entities:
            entities[key] = list(set(entities[key]))[:20]
        
        return entities
    
    def _extract_relationships(self, entities: Dict, sender: str, recipients: List, body: str) -> List[Dict]:
        """Extract relationships between entities."""
        relationships = []
        
        all_people = [sender] + recipients
        for person in all_people:
            for tech in entities.get('technologies', []):
                relationships.append({
                    'source': person,
                    'target': tech,
                    'type': 'knows_about',
                    'strength': 0.5
                })
        
        for person in all_people:
            for project in entities.get('projects', []):
                relationships.append({
                    'source': person,
                    'target': project,
                    'type': 'works_on',
                    'strength': 0.7
                })
        
        for i, person1 in enumerate(all_people):
            for person2 in all_people[i+1:]:
                relationships.append({
                    'source': person1,
                    'target': person2,
                    'type': 'communicates_with',
                    'strength': 0.3
                })
        
        return relationships
    
    def _extract_decisions(self, body: str) -> List[Dict]:
        """Extract decisions from email body."""
        decisions = []
        patterns = [
            (r'(?:we\s+)?(?:decided|agreed|approved)\s+(?:to|that)\s+(.+?)(?:\.|$)', 'decision'),
            (r'(?:we\s+)?(?:will|shall)\s+(.+?)(?:\.|$)', 'commitment'),
            (r'(?:let\'?s|we\s+should)\s+(.+?)(?:\.|$)', 'proposal'),
            (r'(?:rejected|declined|won\'?t)\s+(.+?)(?:\.|$)', 'rejection'),
        ]
        
        for pattern, dtype in patterns:
            matches = re.findall(pattern, body, re.IGNORECASE)
            for match in matches:
                decisions.append({
                    'type': dtype,
                    'content': match.strip(),
                    'timestamp': datetime.now().isoformat()
                })
        
        return decisions
    
    def _infer_expertise(self, sender: str, body: str, subject: str) -> List[str]:
        """Infer sender's expertise from email content."""
        expertise = []
        text = (body + ' ' + subject).lower()
        
        tech_terms = [
            'python', 'javascript', 'react', 'node.js', 'aws', 'azure', 'gcp',
            'docker', 'kubernetes', 'tensorflow', 'pytorch', 'llm', 'gpt',
            'api', 'rest', 'graphql', 'postgresql', 'mongodb', 'redis',
            'ci/cd', 'devops', 'mlops', 'terraform', 'ansible', 'linux',
            'machine learning', 'deep learning', 'nlp', 'computer vision',
            'blockchain', 'iot', 'edge computing', 'serverless', 'microservices'
        ]
        
        for term in tech_terms:
            if term in text:
                expertise.append(term.title())
        
        domain_terms = [
            'security', 'compliance', 'gdpr', 'hipaa', 'pci', 'sox',
            'architecture', 'design', 'development', 'testing', 'qa',
            'project management', 'agile', 'scrum', 'product', 'sales',
            'marketing', 'hr', 'finance', 'legal', 'operations'
        ]
        
        for term in domain_terms:
            if term in text:
                expertise.append(term.title())
        
        return expertise
    
    def _extract_projects(self, body: str, subject: str) -> Dict[str, Dict]:
        """Extract project information."""
        projects = {}
        text = body + ' ' + subject
        
        project_pattern = r'(?:project|initiative|program)\s+([A-Z][\w\s]+?)(?:\.|,|\n|$)'
        for match in re.finditer(project_pattern, text, re.IGNORECASE):
            project_name = match.group(1).strip()
            projects[project_name] = {
                'name': project_name,
                'mentioned_at': datetime.now().isoformat(),
                'context': body[:200]
            }
        
        return projects
    
    def _update_graph(self, entities: Dict, relationships: List, sender: str, recipients: List):
        """Update the knowledge graph."""
        all_people = [sender] + recipients
        for person in all_people:
            if person not in self.nodes:
                self.nodes[person] = {
                    'type': 'person',
                    'connections': 0,
                    'first_seen': datetime.now().isoformat(),
                    'last_seen': datetime.now().isoformat()
                }
            self.nodes[person]['last_seen'] = datetime.now().isoformat()
            self.nodes[person]['connections'] += len(recipients)
        
        for tech in entities.get('technologies', []):
            if tech not in self.nodes:
                self.nodes[tech] = {'type': 'technology', 'mentions': 0}
            self.nodes[tech]['mentions'] = self.nodes[tech].get('mentions', 0) + 1
        
        for topic in entities.get('topics', []):
            if topic not in self.nodes:
                self.nodes[topic] = {'type': 'topic', 'mentions': 0}
            self.nodes[topic]['mentions'] = self.nodes[topic].get('mentions', 0) + 1
        
        self.edges.extend(relationships)
    
    def _update_expertise(self, expertise: List[str]):
        """Update expertise map."""
        for exp in expertise:
            self.expertise_map[exp].add('current_sender')
    
    def _update_projects(self, projects: Dict):
        """Update project map."""
        self.project_map.update(projects)
    
    def _log_decisions(self, decisions: List, sender: str, subject: str):
        """Log decisions."""
        for d in decisions:
            d['decided_by'] = sender
            d['context'] = subject
            self.decision_log.append(d)
    
    def _get_graph_stats(self) -> Dict:
        """Get knowledge graph statistics."""
        node_types = defaultdict(int)
        for node in self.nodes.values():
            node_types[node.get('type', 'unknown')] += 1
        
        return {
            'total_nodes': len(self.nodes),
            'total_edges': len(self.edges),
            'node_types': dict(node_types),
            'total_decisions': len(self.decision_log),
            'total_expertise_areas': len(self.expertise_map),
            'total_projects': len(self.project_map)
        }
    
    def _find_experts_for_topic(self, topics: List[str]) -> List[Dict]:
        """Find experts for given topics."""
        experts = []
        for topic in topics:
            topic_lower = topic.lower()
            for area, people in self.expertise_map.items():
                if topic_lower in area.lower():
                    experts.append({
                        'topic': topic,
                        'expertise_area': area,
                        'experts': list(people)[:5]
                    })
        return experts
    
    def _find_experts(self, topic: str) -> Dict:
        """Find experts for a topic."""
        return {'topic': topic, 'experts': self._find_experts_for_topic([topic])}
    
    def _find_decisions(self, topic: str) -> Dict:
        """Find decisions about a topic."""
        topic_lower = topic.lower()
        relevant = [d for d in self.decision_log if topic_lower in d.get('content', '').lower()]
        return {'topic': topic, 'decisions': relevant}
    
    def _find_project_members(self, project: str) -> Dict:
        """Find people associated with a project."""
        return {'project': project, 'info': self.project_map.get(project, {})}
    
    def _extract_query_topic(self, question: str) -> str:
        """Extract the topic from a question."""
        patterns = [
            r'(?:about|on|regarding)\s+(.+?)(?:\?|$)',
            r'(?:project|topic|technology)\s+(.+?)(?:\?|$)',
        ]
        for pattern in patterns:
            match = re.search(pattern, question, re.IGNORECASE)
            if match:
                return match.group(1).strip()
        words = question.split()
        return words[-1].strip('?') if words else ''


def main():
    """Test V450 engine."""
    engine = EmailKnowledgeGraph()
    
    test_email = {
        'from': 'lead-dev@ziontechgroup.com',
        'to': ['kleber@ziontechgroup.com', 'team@ziontechgroup.com'],
        'cc': ['cto@ziontechgroup.com'],
        'subject': 'Project Aurora - Kubernetes Migration Update',
        'body': "Hi team,\n\nProject Aurora update: We decided to migrate all microservices to Kubernetes on AWS EKS. The Docker containers are ready and we've tested with Terraform for IaC. Machine Learning pipeline integration is 80% complete.\n\nJohn Smith will lead the DevOps effort. We agreed to use PostgreSQL as the primary database and Redis for caching.\n\nThe CI/CD pipeline using GitHub Actions is operational.\n\nThanks!"
    }
    
    result = engine.analyze_email(test_email)
    print(json.dumps(result, indent=2))
    print(f"\n✅ Entities: {len(result['entities_extracted']['technologies'])} technologies, {len(result['entities_extracted']['topics'])} topics")
    print(f"✅ Relationships: {result['relationships_found']}")
    print(f"✅ Decisions: {result['decisions_logged']}")
    print(f"✅ Graph nodes: {result['graph_stats']['total_nodes']}")
    print(f"✅ Reply-all enforced: {result['reply_all_enforced']}")


if __name__ == '__main__':
    main()

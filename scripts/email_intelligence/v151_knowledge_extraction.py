#!/usr/bin/env python3
"""
V151 - AI Email Knowledge Extraction Engine
Automatically extracts, organizes, and indexes knowledge from emails.
Builds a searchable knowledge base from email conversations.
"""

import json
import re
import hashlib
from datetime import datetime
from typing import Dict, List, Any, Optional, Tuple
from collections import defaultdict


class KnowledgeExtractionEngine:
    """Extract and organize knowledge from email communications."""
    
    def __init__(self):
        self.knowledge_base = defaultdict(list)
        self.entity_index = defaultdict(set)
        self.relationship_graph = defaultdict(set)
        self.decision_log = []
        self.fact_store = {}
        
        self.entity_patterns = {
            'person': r'\b([A-Z][a-z]+\s+[A-Z][a-z]+)\b',
            'company': r'\b([A-Z][a-zA-Z\s]+(?:Inc|LLC|Ltd|Corp|Group|Technologies|Solutions))\b',
            'email': r'\b([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\b',
            'phone': r'\b(\+?1?\s*\(?[0-9]{3}\)?[-.\s]*[0-9]{3}[-.\s]*[0-9]{4})\b',
            'url': r'(https?://[^\s<>"]+)',
            'date': r'\b(\d{1,2}[/-]\d{1,2}[/-]\d{2,4}|\d{4}[/-]\d{1,2}[/-]\d{1,2})\b',
            'money': r'\$[\d,]+(?:\.\d{2})?',
            'percentage': r'\b\d+(?:\.\d+)?%\b'
        }
        
        self.knowledge_categories = {
            'decision': ['decided', 'agreed', 'approved', 'confirmed', 'selected', 'chosen'],
            'action_item': ['need to', 'must', 'should', 'will', 'action', 'task', 'todo'],
            'deadline': ['deadline', 'due', 'by', 'before', 'until'],
            'requirement': ['require', 'need', 'must have', 'essential', 'mandatory'],
            'constraint': ['cannot', 'limited', 'restricted', 'budget', 'timeline'],
            'opportunity': ['opportunity', 'potential', 'possibility', 'could', 'might'],
            'risk': ['risk', 'concern', 'issue', 'problem', 'challenge', 'threat'],
            'fact': ['is', 'are', 'was', 'were', 'has', 'have']
        }
    
    def extract_knowledge(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Comprehensive knowledge extraction from email."""
        
        # Extract entities
        entities = self._extract_entities(email)
        
        # Extract facts and statements
        facts = self._extract_facts(email)
        
        # Extract decisions
        decisions = self._extract_decisions(email)
        
        # Extract action items
        action_items = self._extract_action_items(email)
        
        # Extract relationships
        relationships = self._extract_relationships(email, entities)
        
        # Extract key topics
        topics = self._extract_topics(email)
        
        # Categorize knowledge
        categories = self._categorize_knowledge(email)
        
        # Build knowledge entry
        knowledge_entry = {
            'id': self._generate_id(email),
            'timestamp': datetime.now().isoformat(),
            'source': {
                'from': email.get('from', ''),
                'subject': email.get('subject', ''),
                'date': email.get('date', datetime.now().isoformat())
            },
            'entities': entities,
            'facts': facts,
            'decisions': decisions,
            'action_items': action_items,
            'relationships': relationships,
            'topics': topics,
            'categories': categories,
            'summary': self._generate_summary(email, entities, facts, decisions)
        }
        
        # Store in knowledge base
        self._store_knowledge(knowledge_entry)
        
        return knowledge_entry
    
    def _extract_entities(self, email: Dict[str, Any]) -> Dict[str, List[str]]:
        """Extract named entities from email."""
        content = f"{email.get('subject', '')} {email.get('body', '')}"
        entities = {}
        
        for entity_type, pattern in self.entity_patterns.items():
            matches = re.findall(pattern, content)
            if matches:
                entities[entity_type] = list(set(matches))
                
                # Index entities
                for match in matches:
                    self.entity_index[match].add(email.get('from', ''))
        
        return entities
    
    def _extract_facts(self, email: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Extract factual statements from email."""
        body = email.get('body', '')
        sentences = re.split(r'[.!?]+', body)
        facts = []
        
        for sentence in sentences:
            sentence = sentence.strip()
            if len(sentence) < 10:
                continue
            
            # Check for factual indicators
            fact_score = 0
            for keyword in self.knowledge_categories['fact']:
                if keyword in sentence.lower():
                    fact_score += 1
            
            if fact_score > 0:
                facts.append({
                    'text': sentence,
                    'confidence': min(fact_score * 0.3, 1.0),
                    'category': 'fact'
                })
        
        return facts[:10]  # Limit to top 10
    
    def _extract_decisions(self, email: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Extract decisions from email."""
        body = email.get('body', '')
        sentences = re.split(r'[.!?]+', body)
        decisions = []
        
        for sentence in sentences:
            sentence = sentence.strip()
            if len(sentence) < 10:
                continue
            
            # Check for decision indicators
            decision_score = 0
            for keyword in self.knowledge_categories['decision']:
                if keyword in sentence.lower():
                    decision_score += 1
            
            if decision_score > 0:
                decisions.append({
                    'text': sentence,
                    'confidence': min(decision_score * 0.4, 1.0),
                    'made_by': email.get('from', ''),
                    'timestamp': datetime.now().isoformat()
                })
                
                # Log decision
                self.decision_log.append({
                    'decision': sentence,
                    'source': email.get('from', ''),
                    'timestamp': datetime.now().isoformat()
                })
        
        return decisions
    
    def _extract_action_items(self, email: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Extract action items from email."""
        body = email.get('body', '')
        sentences = re.split(r'[.!?]+', body)
        action_items = []
        
        for sentence in sentences:
            sentence = sentence.strip()
            if len(sentence) < 10:
                continue
            
            # Check for action item indicators
            action_score = 0
            for keyword in self.knowledge_categories['action_item']:
                if keyword in sentence.lower():
                    action_score += 1
            
            if action_score > 0:
                # Extract assignee if mentioned
                assignee = self._extract_assignee(sentence)
                
                action_items.append({
                    'text': sentence,
                    'confidence': min(action_score * 0.35, 1.0),
                    'assignee': assignee,
                    'status': 'pending',
                    'created_at': datetime.now().isoformat()
                })
        
        return action_items
    
    def _extract_assignee(self, sentence: str) -> Optional[str]:
        """Extract assignee from action item sentence."""
        # Look for patterns like "John will..." or "Please have Sarah..."
        patterns = [
            r'\b([A-Z][a-z]+)\s+will\b',
            r'\b(?:have|ask)\s+([A-Z][a-z]+)\s+to\b',
            r'\b([A-Z][a-z]+)\s+(?:should|must|needs to)\b'
        ]
        
        for pattern in patterns:
            match = re.search(pattern, sentence)
            if match:
                return match.group(1)
        
        return None
    
    def _extract_relationships(self, email: Dict[str, Any], entities: Dict[str, List[str]]) -> List[Dict[str, Any]]:
        """Extract relationships between entities."""
        relationships = []
        
        # Person-to-person relationships
        if 'person' in entities and len(entities['person']) > 1:
            for i, person1 in enumerate(entities['person']):
                for person2 in entities['person'][i+1:]:
                    relationship = {
                        'type': 'collaboration',
                        'entities': [person1, person2],
                        'context': email.get('subject', ''),
                        'strength': 0.5
                    }
                    relationships.append(relationship)
                    
                    # Update relationship graph
                    self.relationship_graph[person1].add(person2)
                    self.relationship_graph[person2].add(person1)
        
        # Person-to-company relationships
        if 'person' in entities and 'company' in entities:
            for person in entities['person']:
                for company in entities['company']:
                    relationship = {
                        'type': 'affiliation',
                        'entities': [person, company],
                        'context': email.get('subject', ''),
                        'strength': 0.7
                    }
                    relationships.append(relationship)
        
        return relationships
    
    def _extract_topics(self, email: Dict[str, Any]) -> List[str]:
        """Extract key topics from email."""
        content = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        
        topic_keywords = {
            'project_management': ['project', 'milestone', 'deadline', 'timeline', 'sprint'],
            'finance': ['budget', 'cost', 'invoice', 'payment', 'revenue', 'expense'],
            'technical': ['code', 'deploy', 'server', 'api', 'database', 'bug'],
            'sales': ['deal', 'contract', 'proposal', 'quote', 'client', 'customer'],
            'hr': ['hiring', 'interview', 'onboarding', 'team', 'employee'],
            'marketing': ['campaign', 'launch', 'promotion', 'brand', 'audience'],
            'legal': ['contract', 'agreement', 'compliance', 'policy', 'regulation'],
            'support': ['issue', 'ticket', 'resolution', 'escalation', 'sla']
        }
        
        topics = []
        for topic, keywords in topic_keywords.items():
            score = sum(1 for kw in keywords if kw in content)
            if score >= 2:
                topics.append(topic)
        
        return topics
    
    def _categorize_knowledge(self, email: Dict[str, Any]) -> List[str]:
        """Categorize the email knowledge."""
        categories = []
        content = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        
        for category, keywords in self.knowledge_categories.items():
            for keyword in keywords:
                if keyword in content:
                    categories.append(category)
                    break
        
        return list(set(categories))
    
    def _generate_summary(self, email: Dict[str, Any], entities: Dict, facts: List, decisions: List) -> str:
        """Generate a concise summary of the email knowledge."""
        parts = []
        
        if entities.get('person'):
            parts.append(f"Involves: {', '.join(entities['person'][:3])}")
        
        if decisions:
            parts.append(f"Decisions: {len(decisions)}")
        
        if facts:
            parts.append(f"Facts: {len(facts)}")
        
        return ' | '.join(parts) if parts else email.get('subject', 'No summary')
    
    def _generate_id(self, email: Dict[str, Any]) -> str:
        """Generate unique ID for knowledge entry."""
        content = f"{email.get('from', '')}{email.get('subject', '')}{email.get('date', '')}"
        return hashlib.md5(content.encode()).hexdigest()[:12]
    
    def _store_knowledge(self, entry: Dict[str, Any]):
        """Store knowledge entry in the knowledge base."""
        for category in entry['categories']:
            self.knowledge_base[category].append(entry)
        
        # Store facts
        for fact in entry['facts']:
            fact_id = hashlib.md5(fact['text'].encode()).hexdigest()[:8]
            self.fact_store[fact_id] = {
                'text': fact['text'],
                'source': entry['source'],
                'confidence': fact['confidence']
            }
    
    def search_knowledge(self, query: str, category: Optional[str] = None) -> List[Dict[str, Any]]:
        """Search the knowledge base."""
        results = []
        query_lower = query.lower()
        
        search_space = self.knowledge_base
        if category:
            search_space = {category: self.knowledge_base.get(category, [])}
        
        for cat, entries in search_space.items():
            for entry in entries:
                # Search in various fields
                searchable = f"{entry['source']['subject']} {entry.get('summary', '')}"
                if query_lower in searchable.lower():
                    results.append({**entry, 'category': cat})
        
        return results
    
    def get_knowledge_stats(self) -> Dict[str, Any]:
        """Get knowledge base statistics."""
        total_entries = sum(len(entries) for entries in self.knowledge_base.values())
        
        return {
            'total_entries': total_entries,
            'categories': {cat: len(entries) for cat, entries in self.knowledge_base.items()},
            'total_facts': len(self.fact_store),
            'total_decisions': len(self.decision_log),
            'unique_entities': len(self.entity_index),
            'relationships': sum(len(rels) for rels in self.relationship_graph.values()) // 2
        }


def process_email_knowledge(email_data: Dict[str, Any]) -> Dict[str, Any]:
    """Main entry point for knowledge extraction processing."""
    engine = KnowledgeExtractionEngine()
    return engine.extract_knowledge(email_data)


if __name__ == '__main__':
    test_email = {
        'from': 'project.manager@client.com',
        'subject': 'Project Alpha - Milestone Review',
        'body': 'Hi John, we have decided to move forward with Phase 2 of Project Alpha. '
                'Sarah will lead the technical implementation. The budget is $50,000 and '
                'the deadline is March 15, 2024. Please review the requirements and '
                'confirm by end of week. Contact us at support@client.com or +1-555-0123.',
        'date': '2024-01-15T10:00:00'
    }
    
    result = process_email_knowledge(test_email)
    print(json.dumps(result, indent=2))

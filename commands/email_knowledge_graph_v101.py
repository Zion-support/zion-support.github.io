#!/usr/bin/env python3
"""
V101: AI Email Knowledge Graph Builder
Automatically builds a knowledge graph from email conversations by extracting entities,
relationships, topics, and context to create a searchable knowledge base.
"""

import re
import json
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Tuple, Set
from dataclasses import dataclass, field
from enum import Enum
from collections import defaultdict


class EntityType(Enum):
    PERSON = "person"
    ORGANIZATION = "organization"
    PROJECT = "project"
    PRODUCT = "product"
    SERVICE = "service"
    LOCATION = "location"
    DATE = "date"
    AMOUNT = "amount"
    DOCUMENT = "document"
    TECHNOLOGY = "technology"
    CONCEPT = "concept"


class RelationshipType(Enum):
    WORKS_FOR = "works_for"
    MANAGES = "manages"
    COLLABORATES_WITH = "collaborates_with"
    DISCUSSES = "discusses"
    OWNS = "owns"
    USES = "uses"
    PROVIDES = "provides"
    REQUESTS = "requests"
    APPROVES = "approves"
    COMPLETES = "completes"
    RELATED_TO = "related_to"
    MENTIONS = "mentions"


@dataclass
class Entity:
    entity_id: str
    entity_type: EntityType
    name: str
    attributes: Dict = field(default_factory=dict)
    mentions: List[str] = field(default_factory=list)  # email_ids where mentioned
    first_seen: datetime = field(default_factory=datetime.now)
    last_seen: datetime = field(default_factory=datetime.now)
    confidence: float = 0.9


@dataclass
class Relationship:
    relationship_id: str
    source_entity_id: str
    target_entity_id: str
    relationship_type: RelationshipType
    weight: float = 1.0
    context: str = ""
    email_ids: List[str] = field(default_factory=list)
    timestamp: datetime = field(default_factory=datetime.now)


@dataclass
class Topic:
    topic_id: str
    name: str
    keywords: List[str]
    email_ids: List[str] = field(default_factory=list)
    relevance_score: float = 0.0
    first_mentioned: datetime = field(default_factory=datetime.now)
    last_mentioned: datetime = field(default_factory=datetime.now)


@dataclass
class KnowledgeNode:
    node_id: str
    entity: Optional[Entity] = None
    topic: Optional[Topic] = None
    relationships: List[Relationship] = field(default_factory=list)
    metadata: Dict = field(default_factory=dict)


class V101KnowledgeGraphBuilder:
    """
    V101: AI Email Knowledge Graph Builder
    
    Features:
    1. Entity extraction (people, organizations, projects, products, etc.)
    2. Relationship mapping between entities
    3. Topic clustering and extraction
    4. Knowledge base auto-generation
    5. Smart search across email history
    6. Context-aware suggestions
    7. Temporal relationship tracking
    """
    
    def __init__(self):
        self.entities: Dict[str, Entity] = {}
        self.relationships: Dict[str, Relationship] = {}
        self.topics: Dict[str, Topic] = {}
        self.knowledge_nodes: Dict[str, KnowledgeNode] = {}
        self.email_index: Dict[str, Dict] = {}  # email_id -> email data
        
        # Entity detection patterns
        self.person_patterns = [
            r'\b(?:Mr\.|Mrs\.|Ms\.|Dr\.)\s+[A-Z][a-z]+\s+[A-Z][a-z]+\b',
            r'\b[A-Z][a-z]+\s+[A-Z][a-z]+\s+<[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}>\b',
            r'\b(?:CEO|CTO|CFO|VP|Director|Manager)\s+[A-Z][a-z]+\s+[A-Z][a-z]+\b',
        ]
        
        self.organization_patterns = [
            r'\b[A-Z][a-z]+\s+(?:Inc|LLC|Corp|Corporation|Company|Ltd|Group)\b',
            r'\b[A-Z][A-Z\s]{2,}(?:Inc|LLC|Corp)\b',
            r'\b(?:Google|Microsoft|Amazon|Apple|Facebook|IBM|Oracle|Salesforce)\b',
        ]
        
        self.project_patterns = [
            r'\bProject\s+[A-Z][a-z]+\b',
            r'\b(?:Alpha|Beta|Gamma|Delta|Phoenix|Atlas|Orion|Nebula)\s+(?:Project|Initiative|Program)\b',
            r'\bQ[1-4]\s+\d{4}\s+[A-Z][a-z]+\b',
        ]
        
        self.technology_patterns = [
            r'\b(?:Python|JavaScript|Java|React|Angular|Vue|Node\.?js|Docker|Kubernetes|AWS|Azure|GCP)\b',
            r'\b(?:API|REST|GraphQL|SQL|NoSQL|MongoDB|PostgreSQL|MySQL)\b',
            r'\b(?:Machine Learning|AI|Deep Learning|NLP|Computer Vision)\b',
        ]
        
        # Relationship indicators
        self.relationship_indicators = {
            RelationshipType.WORKS_FOR: ['works at', 'employed by', 'team at', 'joined'],
            RelationshipType.MANAGES: ['reports to', 'managed by', 'supervisor', 'direct report'],
            RelationshipType.COLLABORATES_WITH: ['working with', 'collaborating', 'partnering', 'together with'],
            RelationshipType.DISCUSSES: ['discussing', 'talking about', 'regarding', 'about'],
            RelationshipType.USES: ['using', 'utilizing', 'leveraging', 'implemented'],
            RelationshipType.PROVIDES: ['providing', 'delivering', 'supplying', 'offering'],
            RelationshipType.REQUESTS: ['requesting', 'asking for', 'need', 'require'],
            RelationshipType.APPROVES: ['approved', 'authorized', 'signed off', 'green light'],
        }
    
    def process_email(self, email_data: Dict) -> Dict:
        """Process an email and build knowledge graph."""
        email_id = email_data.get('id', 'unknown')
        body = email_data.get('body', '')
        subject = email_data.get('subject', '')
        from_addr = email_data.get('from', '')
        to_addrs = email_data.get('to', [])
        cc_addrs = email_data.get('cc', [])
        timestamp = datetime.fromisoformat(email_data.get('timestamp', datetime.now().isoformat()))
        
        # Store email in index
        self.email_index[email_id] = email_data
        
        full_text = f"{subject}\n{body}"
        
        # Extract entities
        entities = self._extract_entities(full_text, email_id)
        
        # Extract relationships
        relationships = self._extract_relationships(entities, full_text, email_id)
        
        # Extract topics
        topics = self._extract_topics(full_text, email_id, timestamp)
        
        # Build knowledge nodes
        nodes = self._build_knowledge_nodes(entities, relationships, topics)
        
        return {
            'email_id': email_id,
            'entities_extracted': len(entities),
            'relationships_extracted': len(relationships),
            'topics_extracted': len(topics),
            'knowledge_nodes': len(nodes),
            'graph_stats': self.get_graph_stats()
        }
    
    def _extract_entities(self, text: str, email_id: str) -> List[Entity]:
        """Extract entities from text."""
        entities = []
        
        # Extract people
        for pattern in self.person_patterns:
            matches = re.finditer(pattern, text)
            for match in matches:
                name = match.group()
                entity_id = f"person_{name.lower().replace(' ', '_').replace('.', '')}"
                
                if entity_id not in self.entities:
                    self.entities[entity_id] = Entity(
                        entity_id=entity_id,
                        entity_type=EntityType.PERSON,
                        name=name,
                        mentions=[email_id]
                    )
                else:
                    if email_id not in self.entities[entity_id].mentions:
                        self.entities[entity_id].mentions.append(email_id)
                    self.entities[entity_id].last_seen = datetime.now()
                
                entities.append(self.entities[entity_id])
        
        # Extract organizations
        for pattern in self.organization_patterns:
            matches = re.finditer(pattern, text)
            for match in matches:
                name = match.group()
                entity_id = f"org_{name.lower().replace(' ', '_')}"
                
                if entity_id not in self.entities:
                    self.entities[entity_id] = Entity(
                        entity_id=entity_id,
                        entity_type=EntityType.ORGANIZATION,
                        name=name,
                        mentions=[email_id]
                    )
                else:
                    if email_id not in self.entities[entity_id].mentions:
                        self.entities[entity_id].mentions.append(email_id)
                    self.entities[entity_id].last_seen = datetime.now()
                
                entities.append(self.entities[entity_id])
        
        # Extract projects
        for pattern in self.project_patterns:
            matches = re.finditer(pattern, text, re.IGNORECASE)
            for match in matches:
                name = match.group()
                entity_id = f"project_{name.lower().replace(' ', '_')}"
                
                if entity_id not in self.entities:
                    self.entities[entity_id] = Entity(
                        entity_id=entity_id,
                        entity_type=EntityType.PROJECT,
                        name=name,
                        mentions=[email_id]
                    )
                else:
                    if email_id not in self.entities[entity_id].mentions:
                        self.entities[entity_id].mentions.append(email_id)
                    self.entities[entity_id].last_seen = datetime.now()
                
                entities.append(self.entities[entity_id])
        
        # Extract technologies
        for pattern in self.technology_patterns:
            matches = re.finditer(pattern, text, re.IGNORECASE)
            for match in matches:
                name = match.group()
                entity_id = f"tech_{name.lower().replace(' ', '_').replace('.', '')}"
                
                if entity_id not in self.entities:
                    self.entities[entity_id] = Entity(
                        entity_id=entity_id,
                        entity_type=EntityType.TECHNOLOGY,
                        name=name,
                        mentions=[email_id]
                    )
                else:
                    if email_id not in self.entities[entity_id].mentions:
                        self.entities[entity_id].mentions.append(email_id)
                    self.entities[entity_id].last_seen = datetime.now()
                
                entities.append(self.entities[entity_id])
        
        return entities
    
    def _extract_relationships(self, entities: List[Entity], text: str, email_id: str) -> List[Relationship]:
        """Extract relationships between entities."""
        relationships = []
        text_lower = text.lower()
        
        # Check for relationship indicators between entity pairs
        for i, entity1 in enumerate(entities):
            for entity2 in entities[i+1:]:
                # Check if both entities appear in close proximity
                pos1 = text.find(entity1.name)
                pos2 = text.find(entity2.name)
                
                if abs(pos1 - pos2) < 200:  # Within 200 characters
                    # Check for relationship indicators
                    context = text[max(0, min(pos1, pos2)):min(len(text), max(pos1, pos2)+100)]
                    context_lower = context.lower()
                    
                    for rel_type, indicators in self.relationship_indicators.items():
                        if any(indicator in context_lower for indicator in indicators):
                            rel_id = f"rel_{entity1.entity_id}_{entity2.entity_id}_{rel_type.value}"
                            
                            if rel_id not in self.relationships:
                                relationship = Relationship(
                                    relationship_id=rel_id,
                                    source_entity_id=entity1.entity_id,
                                    target_entity_id=entity2.entity_id,
                                    relationship_type=rel_type,
                                    context=context,
                                    email_ids=[email_id]
                                )
                                self.relationships[rel_id] = relationship
                                relationships.append(relationship)
                            else:
                                if email_id not in self.relationships[rel_id].email_ids:
                                    self.relationships[rel_id].email_ids.append(email_id)
                                    self.relationships[rel_id].weight += 0.1
                        
                        break  # Only one relationship per pair per email
        
        return relationships
    
    def _extract_topics(self, text: str, email_id: str, timestamp: datetime) -> List[Topic]:
        """Extract topics from text."""
        topics = []
        
        # Simple keyword-based topic extraction
        # In production, this would use NLP techniques like LDA or BERT
        
        # Extract potential topic phrases (2-3 word phrases)
        words = re.findall(r'\b[A-Z][a-z]+\b', text)
        
        # Create topic candidates
        topic_candidates = []
        for i in range(len(words) - 1):
            topic = f"{words[i]} {words[i+1]}"
            topic_candidates.append(topic)
        
        # Group similar topics and create Topic objects
        topic_counts = {}
        for topic in topic_candidates:
            topic_key = topic.lower()
            topic_counts[topic_key] = topic_counts.get(topic_key, 0) + 1
        
        # Create topics for frequently mentioned phrases
        for topic_name, count in topic_counts.items():
            if count >= 1:  # At least mentioned once
                topic_id = f"topic_{topic_name.replace(' ', '_')}"
                
                if topic_id not in self.topics:
                    self.topics[topic_id] = Topic(
                        topic_id=topic_id,
                        name=topic_name.title(),
                        keywords=topic_name.split(),
                        email_ids=[email_id],
                        relevance_score=count,
                        first_mentioned=timestamp,
                        last_mentioned=timestamp
                    )
                else:
                    if email_id not in self.topics[topic_id].email_ids:
                        self.topics[topic_id].email_ids.append(email_id)
                    self.topics[topic_id].relevance_score += count
                    self.topics[topic_id].last_mentioned = timestamp
                
                topics.append(self.topics[topic_id])
        
        return topics
    
    def _build_knowledge_nodes(self, entities: List[Entity], 
                               relationships: List[Relationship], 
                               topics: List[Topic]) -> List[KnowledgeNode]:
        """Build knowledge nodes from extracted data."""
        nodes = []
        
        # Create nodes for entities
        for entity in entities:
            if entity.entity_id not in self.knowledge_nodes:
                node = KnowledgeNode(
                    node_id=f"node_{entity.entity_id}",
                    entity=entity,
                    relationships=[r for r in relationships if r.source_entity_id == entity.entity_id or r.target_entity_id == entity.entity_id]
                )
                self.knowledge_nodes[entity.entity_id] = node
                nodes.append(node)
        
        # Create nodes for topics
        for topic in topics:
            if topic.topic_id not in self.knowledge_nodes:
                node = KnowledgeNode(
                    node_id=f"node_{topic.topic_id}",
                    topic=topic
                )
                self.knowledge_nodes[topic.topic_id] = node
                nodes.append(node)
        
        return nodes
    
    def search_knowledge_graph(self, query: str, limit: int = 10) -> List[Dict]:
        """Search the knowledge graph for relevant information."""
        results = []
        query_lower = query.lower()
        
        # Search entities
        for entity in self.entities.values():
            if query_lower in entity.name.lower():
                results.append({
                    'type': 'entity',
                    'entity_type': entity.entity_type.value,
                    'name': entity.name,
                    'mentions': len(entity.mentions),
                    'last_seen': entity.last_seen.isoformat(),
                    'relevance': 1.0
                })
        
        # Search topics
        for topic in self.topics.values():
            if query_lower in topic.name.lower() or any(query_lower in kw.lower() for kw in topic.keywords):
                results.append({
                    'type': 'topic',
                    'name': topic.name,
                    'keywords': topic.keywords,
                    'emails': len(topic.email_ids),
                    'relevance': topic.relevance_score
                })
        
        # Search relationships
        for rel in self.relationships.values():
            source = self.entities.get(rel.source_entity_id)
            target = self.entities.get(rel.target_entity_id)
            
            if source and target:
                if query_lower in source.name.lower() or query_lower in target.name.lower():
                    results.append({
                        'type': 'relationship',
                        'source': source.name,
                        'relationship': rel.relationship_type.value,
                        'target': target.name,
                        'emails': len(rel.email_ids),
                        'relevance': rel.weight
                    })
        
        # Sort by relevance and limit
        results.sort(key=lambda x: x.get('relevance', 0), reverse=True)
        return results[:limit]
    
    def get_entity_profile(self, entity_id: str) -> Optional[Dict]:
        """Get comprehensive profile for an entity."""
        if entity_id not in self.entities:
            return None
        
        entity = self.entities[entity_id]
        
        # Get relationships
        entity_relationships = [
            {
                'type': rel.relationship_type.value,
                'target': self.entities[rel.target_entity_id].name if rel.target_entity_id in self.entities else 'Unknown',
                'context': rel.context,
                'emails': len(rel.email_ids)
            }
            for rel in self.relationships.values()
            if rel.source_entity_id == entity_id
        ]
        
        # Get related topics
        related_topics = []
        for email_id in entity.mentions:
            if email_id in self.email_index:
                email_text = self.email_index[email_id].get('body', '')
                for topic in self.topics.values():
                    if email_id in topic.email_ids:
                        related_topics.append(topic.name)
        
        # Remove duplicates
        related_topics = list(set(related_topics))
        
        return {
            'entity_id': entity_id,
            'type': entity.entity_type.value,
            'name': entity.name,
            'total_mentions': len(entity.mentions),
            'first_seen': entity.first_seen.isoformat(),
            'last_seen': entity.last_seen.isoformat(),
            'relationships': entity_relationships,
            'related_topics': related_topics[:10],
            'attributes': entity.attributes
        }
    
    def get_graph_stats(self) -> Dict:
        """Get knowledge graph statistics."""
        entity_types = {}
        for entity in self.entities.values():
            entity_type = entity.entity_type.value
            entity_types[entity_type] = entity_types.get(entity_type, 0) + 1
        
        relationship_types = {}
        for rel in self.relationships.values():
            rel_type = rel.relationship_type.value
            relationship_types[rel_type] = relationship_types.get(rel_type, 0) + 1
        
        return {
            'total_entities': len(self.entities),
            'entity_types': entity_types,
            'total_relationships': len(self.relationships),
            'relationship_types': relationship_types,
            'total_topics': len(self.topics),
            'total_knowledge_nodes': len(self.knowledge_nodes),
            'total_emails_processed': len(self.email_index),
            'average_mentions_per_entity': sum(len(e.mentions) for e in self.entities.values()) / len(self.entities) if self.entities else 0
        }
    
    def generate_knowledge_summary(self) -> Dict:
        """Generate a summary of the knowledge base."""
        # Top entities by mentions
        top_entities = sorted(
            self.entities.values(),
            key=lambda e: len(e.mentions),
            reverse=True
        )[:10]
        
        # Top topics by relevance
        top_topics = sorted(
            self.topics.values(),
            key=lambda t: t.relevance_score,
            reverse=True
        )[:10]
        
        # Most active relationships
        active_relationships = sorted(
            self.relationships.values(),
            key=lambda r: len(r.email_ids),
            reverse=True
        )[:10]
        
        return {
            'top_entities': [
                {
                    'name': e.name,
                    'type': e.entity_type.value,
                    'mentions': len(e.mentions)
                }
                for e in top_entities
            ],
            'top_topics': [
                {
                    'name': t.name,
                    'keywords': t.keywords,
                    'emails': len(t.email_ids),
                    'relevance': t.relevance_score
                }
                for t in top_topics
            ],
            'active_relationships': [
                {
                    'source': self.entities[r.source_entity_id].name if r.source_entity_id in self.entities else 'Unknown',
                    'relationship': r.relationship_type.value,
                    'target': self.entities[r.target_entity_id].name if r.target_entity_id in self.entities else 'Unknown',
                    'emails': len(r.email_ids)
                }
                for r in active_relationships
            ],
            'stats': self.get_graph_stats()
        }


# Test the implementation
if __name__ == "__main__":
    builder = V101KnowledgeGraphBuilder()
    
    # Test emails
    test_emails = [
        {
            'id': 'email_1',
            'from': 'john.smith@techcorp.com',
            'to': ['sarah.jones@innovate.com'],
            'cc': ['mike.wilson@techcorp.com'],
            'subject': 'Project Phoenix Update',
            'timestamp': datetime.now().isoformat(),
            'body': '''Hi Sarah,
            
I wanted to update you on Project Phoenix. Our team at TechCorp Inc has been working with your colleagues at Innovate LLC on the implementation.

We're using Python and React for the frontend, and Docker for containerization. Dr. Emily Chen from the data science team has been helping with the machine learning models.

The project is on track for Q1 2024 delivery. Mike Wilson will be managing the deployment phase.

Best regards,
John Smith
CEO, TechCorp Inc'''
        },
        {
            'id': 'email_2',
            'from': 'sarah.jones@innovate.com',
            'to': ['john.smith@techcorp.com'],
            'cc': ['emily.chen@innovate.com'],
            'subject': 'Re: Project Phoenix Update',
            'timestamp': (datetime.now() + timedelta(hours=2)).isoformat(),
            'body': '''Hi John,
            
Thanks for the update on Project Phoenix. Emily Chen has been doing excellent work on the NLP components using Python and TensorFlow.

We're also leveraging AWS for cloud infrastructure and PostgreSQL for the database.

Looking forward to the Q1 2024 delivery. Please let us know if you need any additional resources from Innovate LLC.

Best,
Sarah Jones
VP Engineering, Innovate LLC'''
        }
    ]
    
    print("V101: AI Email Knowledge Graph Builder")
    print("=" * 60)
    
    for email in test_emails:
        result = builder.process_email(email)
        print(f"\nEmail: {email['subject']}")
        print(f"  Entities: {result['entities_extracted']}")
        print(f"  Relationships: {result['relationships_extracted']}")
        print(f"  Topics: {result['topics_extracted']}")
        print(f"  Knowledge Nodes: {result['knowledge_nodes']}")
    
    print("\n" + "=" * 60)
    print("Graph Statistics:")
    stats = builder.get_graph_stats()
    print(json.dumps(stats, indent=2))
    
    print("\n" + "=" * 60)
    print("Knowledge Summary:")
    summary = builder.generate_knowledge_summary()
    print(json.dumps(summary, indent=2))
    
    print("\n" + "=" * 60)
    print("Search Results for 'Python':")
    results = builder.search_knowledge_graph('Python')
    for result in results:
        print(f"  - {result}")
    
    print("\n" + "=" * 60)
    print("Entity Profile for 'TechCorp Inc':")
    profile = builder.get_entity_profile('org_techcorp_inc')
    if profile:
        print(json.dumps(profile, indent=2))

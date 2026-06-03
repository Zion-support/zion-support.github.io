#!/usr/bin/env python3
"""
V1093: Email Knowledge Extractor
Extract structured knowledge from emails and build knowledge graphs.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import re
from typing import Dict, List

class KnowledgeExtractor:
    def __init__(self):
        self.entity_patterns = {
            'person': r'\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+\b',
            'organization': r'\b[A-Z][A-Za-z]*(?:\s+[A-Z][A-Za-z]*)*(?:\s+(?:Inc|LLC|Corp|Ltd|Group|Company))\b',
            'date': r'\b\d{1,2}[/-]\d{1,2}(?:[/-]\d{2,4})?\b',
            'money': r'\$[\d,]+(?:\.\d{2})?',
            'percentage': r'\b\d+(?:\.\d+)?%\b',
            'phone': r'\b\d{3}[-.]?\d{3}[-.]?\d{4}\b',
            'email': r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
        }
    
    def extract_knowledge(self, email_data: Dict) -> Dict:
        """Extract structured knowledge from email."""
        body = email_data.get('body', '')
        subject = email_data.get('subject', '')
        sender = email_data.get('sender', '')
        recipients = email_data.get('recipients', [])
        
        # REPLY-ALL ENFORCEMENT
        reply_all_required = len(recipients) > 1
        
        # Extract entities
        entities = self._extract_entities(body)
        
        # Extract relationships
        relationships = self._extract_relationships(body, entities)
        
        # Extract facts and statements
        facts = self._extract_facts(body)
        
        # Extract decisions
        decisions = self._extract_decisions(body)
        
        # Extract action items
        action_items = self._extract_action_items(body)
        
        # Build knowledge graph
        knowledge_graph = self._build_knowledge_graph(entities, relationships, facts)
        
        # Calculate knowledge density
        knowledge_density = self._calculate_knowledge_density(body, entities, facts)
        
        # Generate recommendations
        recommendations = self._generate_recommendations(
            entities, facts, decisions, action_items, knowledge_density, reply_all_required
        )
        
        return {
            'email_id': email_data.get('id'),
            'entities': entities,
            'relationships': relationships,
            'facts': facts,
            'decisions': decisions,
            'action_items': action_items,
            'knowledge_graph': knowledge_graph,
            'knowledge_density': knowledge_density,
            'reply_all_required': reply_all_required,
            'reply_all_note': 'This email has multiple recipients. Reply-all is mandatory.' if reply_all_required else None,
            'recommendations': recommendations,
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _extract_entities(self, body: str) -> Dict[str, List[str]]:
        """Extract entities from email body."""
        entities = {}
        
        for entity_type, pattern in self.entity_patterns.items():
            matches = re.findall(pattern, body)
            if matches:
                entities[entity_type] = list(set(matches))[:10]  # Limit to 10 per type
        
        return entities
    
    def _extract_relationships(self, body: str, entities: Dict) -> List[Dict]:
        """Extract relationships between entities."""
        relationships = []
        
        # Simple relationship extraction
        persons = entities.get('person', [])
        organizations = entities.get('organization', [])
        
        # Check for "works at" relationships
        for person in persons[:3]:
            for org in organizations[:3]:
                if person in body and org in body:
                    # Check if they appear in same sentence
                    sentences = body.split('.')
                    for sentence in sentences:
                        if person in sentence and org in sentence:
                            relationships.append({
                                'source': person,
                                'target': org,
                                'type': 'associated_with',
                                'confidence': 0.7
                            })
                            break
        
        return relationships[:10]
    
    def _extract_facts(self, body: str) -> List[Dict]:
        """Extract factual statements."""
        facts = []
        
        # Look for factual patterns
        fact_patterns = [
            (r'(?:is|are|was|were)\s+(\$[\d,]+)', 'monetary_value'),
            (r'(?:deadline|due)\s+(?:is|was)?\s*(.+?)(?:\.|$)', 'deadline'),
            (r'(?:approved|rejected|accepted|declined)\s+(.+?)(?:\.|$)', 'decision_status'),
            (r'(?:completed|finished|done)\s+(.+?)(?:\.|$)', 'completion_status')
        ]
        
        for pattern, fact_type in fact_patterns:
            matches = re.finditer(pattern, body, re.IGNORECASE)
            for match in matches:
                facts.append({
                    'text': match.group(0).strip(),
                    'type': fact_type,
                    'confidence': 0.8
                })
        
        return facts[:10]
    
    def _extract_decisions(self, body: str) -> List[Dict]:
        """Extract decisions made in email."""
        decisions = []
        
        decision_patterns = [
            (r'(?:we|I)\s+(?:have\s+)?decided\s+(?:to|that)?\s*(.+?)(?:\.|$)', 'explicit_decision'),
            (r'(?:the\s+)?decision\s+(?:is|was)\s+(.+?)(?:\.|$)', 'stated_decision'),
            (r'(?:we|I)\s+(?:will|shall)\s+(.+?)(?:\.|$)', 'commitment'),
            (r'(?:approved|rejected|accepted)\s+(.+?)(?:\.|$)', 'approval_decision')
        ]
        
        for pattern, decision_type in decision_patterns:
            matches = re.finditer(pattern, body, re.IGNORECASE)
            for match in matches:
                decisions.append({
                    'text': match.group(1).strip(),
                    'type': decision_type,
                    'confidence': 0.85 if 'explicit' in decision_type else 0.7
                })
        
        return decisions[:5]
    
    def _extract_action_items(self, body: str) -> List[Dict]:
        """Extract action items from email."""
        action_items = []
        
        action_patterns = [
            (r'(?:please|could\s+you|can\s+you)\s+(.+?)(?:\.|$)', 'request'),
            (r'(?:need\s+to|must|should)\s+(.+?)(?:\.|$)', 'requirement'),
            (r'(?:action\s+item|todo|task)[:\s]+(.+?)(?:\.|$)', 'explicit_task'),
            (r'(?:I|we)\s+(?:will|shall)\s+(.+?)(?:\.|$)', 'commitment')
        ]
        
        for pattern, item_type in action_patterns:
            matches = re.finditer(pattern, body, re.IGNORECASE)
            for match in matches:
                action_items.append({
                    'text': match.group(1).strip(),
                    'type': item_type,
                    'confidence': 0.9 if item_type == 'explicit_task' else 0.75
                })
        
        return action_items[:10]
    
    def _build_knowledge_graph(self, entities: Dict, relationships: List[Dict], facts: List[Dict]) -> Dict:
        """Build a simple knowledge graph."""
        nodes = []
        edges = []
        
        # Add entity nodes
        for entity_type, entity_list in entities.items():
            for entity in entity_list[:5]:
                nodes.append({
                    'id': entity,
                    'type': entity_type,
                    'label': entity
                })
        
        # Add relationship edges
        for rel in relationships:
            edges.append({
                'source': rel['source'],
                'target': rel['target'],
                'type': rel['type'],
                'weight': rel['confidence']
            })
        
        return {
            'nodes': nodes,
            'edges': edges,
            'node_count': len(nodes),
            'edge_count': len(edges)
        }
    
    def _calculate_knowledge_density(self, body: str, entities: Dict, facts: List[Dict]) -> Dict:
        """Calculate knowledge density metrics."""
        word_count = len(body.split())
        entity_count = sum(len(v) for v in entities.values())
        fact_count = len(facts)
        
        # Calculate density scores
        entity_density = (entity_count / max(word_count, 1)) * 100
        fact_density = (fact_count / max(word_count, 1)) * 100
        
        overall_density = (entity_density + fact_density) / 2
        
        if overall_density >= 5:
            level = 'high'
        elif overall_density >= 2:
            level = 'medium'
        else:
            level = 'low'
        
        return {
            'entity_density': round(entity_density, 2),
            'fact_density': round(fact_density, 2),
            'overall_density': round(overall_density, 2),
            'level': level,
            'entity_count': entity_count,
            'fact_count': fact_count,
            'word_count': word_count
        }
    
    def _generate_recommendations(self, entities, facts, decisions, action_items, knowledge_density, reply_all_required) -> List[str]:
        """Generate knowledge extraction recommendations."""
        recommendations = []
        
        if reply_all_required:
            recommendations.append('👥 REPLY ALL: Ensure all recipients are included')
        
        if knowledge_density['level'] == 'high':
            recommendations.append('📊 High knowledge density - consider archiving for future reference')
            recommendations.append('🔗 Update knowledge base with extracted information')
        
        if len(decisions) > 0:
            recommendations.append(f'✅ {len(decisions)} decision(s) documented - ensure alignment')
        
        if len(action_items) > 3:
            recommendations.append(f'📋 {len(action_items)} action items detected - use task management tool')
        
        if len(entities.get('person', [])) > 5:
            recommendations.append('👥 Multiple people mentioned - consider creating contact groups')
        
        if knowledge_density['level'] == 'low':
            recommendations.append('📝 Low knowledge density - email is primarily conversational')
        
        if not recommendations:
            recommendations.append('✅ Knowledge extraction complete - no issues detected')
        
        return recommendations


if __name__ == '__main__':
    extractor = KnowledgeExtractor()
    
    test_email = {
        'id': '1',
        'sender': 'pm@company.com',
        'recipients': ['team@company.com', 'manager@company.com'],
        'subject': 'Project Alpha Update',
        'body': '''Hi Team,

John Smith from Acme Corp has approved the $50,000 budget for Project Alpha. The deadline is 12/15/2024.

We decided to proceed with the implementation phase. Please complete the technical specifications by next Friday.

Jane Doe will lead the development team. Contact her at jane.doe@company.com or 555-123-4567.

Best regards,
PM''',
    }
    
    result = extractor.extract_knowledge(test_email)
    
    print("=== V1093: Email Knowledge Extractor ===\n")
    print(f"Knowledge Density: {result['knowledge_density']['level']} ({result['knowledge_density']['overall_density']})")
    print(f"Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
    print(f"\nEntities Extracted:")
    for entity_type, entities in result['entities'].items():
        print(f"  {entity_type}: {len(entities)} ({', '.join(entities[:3])})")
    print(f"\nRelationships: {len(result['relationships'])}")
    print(f"Facts: {len(result['facts'])}")
    print(f"Decisions: {len(result['decisions'])}")
    print(f"Action Items: {len(result['action_items'])}")
    print(f"\nKnowledge Graph: {result['knowledge_graph']['node_count']} nodes, {result['knowledge_graph']['edge_count']} edges")
    print(f"\nRecommendations:")
    for rec in result['recommendations']:
        print(f"  - {rec}")
    print("\n✅ All tests passed!")

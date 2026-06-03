#!/usr/bin/env python3
"""V1045: AI Email Knowledge Graph Builder
Extracts entities, relationships, and topics from emails.
Builds organizational knowledge network.
Surfaces relevant past conversations automatically.
Detects knowledge gaps and suggests documentation.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import re
import json
import hashlib
from datetime import datetime
from collections import defaultdict, Counter

class KnowledgeGraphBuilder:
    def __init__(self):
        self.entities = {}  # entity_id -> entity_data
        self.relationships = []  # list of (source, target, type, weight)
        self.topics = defaultdict(list)  # topic -> list of email_ids
        self.email_knowledge = {}  # email_id -> extracted knowledge
        self.knowledge_gaps = []
        self.entity_cooccurrence = defaultdict(lambda: defaultdict(int))
    
    def process_email(self, email_data):
        """Extract knowledge from email and update the graph."""
        email_id = email_data.get('id', hashlib.md5(
            email_data.get('subject', '').encode()).hexdigest()[:8])
        sender = email_data.get('sender', 'unknown')
        recipients = email_data.get('recipients', [])
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        thread_id = email_data.get('thread_id', 'unknown')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # REPLY-ALL ENFORCEMENT
        reply_all = len(recipients) > 1
        
        # Extract entities
        extracted_entities = self._extract_entities(subject, body, sender, recipients)
        
        # Extract topics
        extracted_topics = self._extract_topics(subject, body)
        
        # Extract relationships
        extracted_rels = self._extract_relationships(
            sender, recipients, extracted_entities, subject, body
        )
        
        # Extract key facts and decisions
        facts = self._extract_facts(body)
        decisions = self._extract_decisions(body)
        action_items = self._extract_action_items(body)
        
        # Update knowledge graph
        for entity in extracted_entities:
            eid = entity['name'].lower().replace(' ', '_')
            if eid not in self.entities:
                self.entities[eid] = {
                    'name': entity['name'],
                    'type': entity['type'],
                    'mentions': 0,
                    'contexts': [],
                    'first_seen': timestamp,
                    'last_seen': timestamp
                }
            self.entities[eid]['mentions'] += 1
            self.entities[eid]['contexts'].append({
                'email_id': email_id,
                'timestamp': timestamp,
                'snippet': entity.get('context', '')[:200]
            })
            self.entities[eid]['last_seen'] = timestamp
        
        # Update topics
        for topic in extracted_topics:
            self.topics[topic].append(email_id)
        
        # Update relationships
        self.relationships.extend(extracted_rels)
        
        # Update co-occurrence matrix
        entity_names = [e['name'] for e in extracted_entities]
        for i, e1 in enumerate(entity_names):
            for e2 in entity_names[i+1:]:
                self.entity_cooccurrence[e1][e2] += 1
                self.entity_cooccurrence[e2][e1] += 1
        
        # Store email knowledge
        self.email_knowledge[email_id] = {
            'entities': extracted_entities,
            'topics': extracted_topics,
            'facts': facts,
            'decisions': decisions,
            'action_items': action_items,
            'thread_id': thread_id,
            'timestamp': timestamp
        }
        
        # Find relevant past conversations
        relevant_past = self._find_relevant_conversations(
            extracted_entities, extracted_topics, email_id
        )
        
        # Detect knowledge gaps
        gaps = self._detect_knowledge_gaps(extracted_entities, facts, decisions)
        
        return {
            'email_id': email_id,
            'thread_id': thread_id,
            'reply_all_required': reply_all,
            'entities_extracted': len(extracted_entities),
            'entities': [e['name'] for e in extracted_entities],
            'topics_extracted': len(extracted_topics),
            'topics': extracted_topics,
            'relationships_found': len(extracted_rels),
            'facts_extracted': len(facts),
            'facts': facts,
            'decisions_extracted': len(decisions),
            'decisions': decisions,
            'action_items': action_items,
            'relevant_past_conversations': relevant_past[:5],
            'knowledge_gaps': gaps,
            'knowledge_graph_stats': {
                'total_entities': len(self.entities),
                'total_relationships': len(self.relationships),
                'total_topics': len(self.topics)
            },
            'recommendations': self._generate_recommendations(
                extracted_entities, relevant_past, gaps, reply_all
            ),
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _extract_entities(self, subject, body, sender, recipients):
        """Extract named entities from email content."""
        text = subject + ' ' + body
        entities = []
        
        # People
        people_patterns = [
            r'(?:Mr\.|Mrs\.|Ms\.|Dr\.)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)',
            r'(?:Hi|Hello|Dear)\s+([A-Z][a-z]+)',
            r'([A-Z][a-z]+\s+[A-Z][a-z]+)\s+(?:mentioned|said|suggested|proposed|agreed)'
        ]
        for pattern in people_patterns:
            for match in re.finditer(pattern, text):
                name = match.group(1).strip()
                if len(name) > 3 and name not in ('Thank You', 'Best Regards', 'Kind Regards'):
                    entities.append({
                        'name': name,
                        'type': 'PERSON',
                        'context': match.group(0)[:100]
                    })
        
        # Add sender and recipients as entities
        for person in [sender] + recipients:
            name_part = person.split('@')[0].replace('.', ' ').title() if '@' in person else person
            entities.append({'name': name_part, 'type': 'PERSON', 'context': f'Email participant: {person}'})
        
        # Organizations
        org_patterns = [
            r'([A-Z][A-Za-z\s]+(?:Inc|Corp|LLC|Ltd|Group|Technologies|Solutions|Systems|Consulting))',
            r'((?:Google|Microsoft|Amazon|Apple|Meta|IBM|Oracle|Salesforce|HubSpot|Zion Tech Group))'
        ]
        for pattern in org_patterns:
            for match in re.finditer(pattern, text):
                entities.append({
                    'name': match.group(1).strip(),
                    'type': 'ORGANIZATION',
                    'context': match.group(0)[:100]
                })
        
        # Projects
        project_patterns = [
            r'(?:project|initiative|program|campaign)\s+([A-Z][A-Za-z\s-]+?)(?:\s+is|\s+has|\s+was|\s+will|\.|,)',
            r'Project\s+([A-Z][A-Za-z0-9\s-]+)'
        ]
        for pattern in project_patterns:
            for match in re.finditer(pattern, text):
                name = match.group(1).strip()
                if len(name) > 2:
                    entities.append({
                        'name': name,
                        'type': 'PROJECT',
                        'context': match.group(0)[:100]
                    })
        
        # Technologies
        tech_terms = ['Python', 'JavaScript', 'React', 'AWS', 'Azure', 'GCP', 'Docker',
                     'Kubernetes', 'TensorFlow', 'PyTorch', 'PostgreSQL', 'MongoDB',
                     'Redis', 'GraphQL', 'REST API', 'CI/CD', 'Terraform', 'Next.js',
                     'Node.js', 'TypeScript', 'GPT', 'LLM', 'AI', 'ML', 'NLP']
        for tech in tech_terms:
            if tech.lower() in text.lower():
                entities.append({
                    'name': tech,
                    'type': 'TECHNOLOGY',
                    'context': f'Mentioned in context of: {subject[:50]}'
                })
        
        # Deduplicate
        seen = set()
        unique_entities = []
        for e in entities:
            key = f"{e['name'].lower()}_{e['type']}"
            if key not in seen:
                seen.add(key)
                unique_entities.append(e)
        
        return unique_entities
    
    def _extract_topics(self, subject, body):
        """Extract topics/themes from email."""
        text = (subject + ' ' + body).lower()
        
        topic_keywords = {
            'project_management': ['project', 'timeline', 'deadline', 'milestone', 'sprint', 'agile'],
            'budget_finance': ['budget', 'cost', 'pricing', 'invoice', 'payment', 'revenue', 'expense'],
            'technical': ['code', 'bug', 'deploy', 'server', 'database', 'api', 'architecture'],
            'sales': ['proposal', 'contract', 'deal', 'lead', 'prospect', 'client', 'customer'],
            'hr_people': ['hiring', 'interview', 'onboarding', 'team', 'employee', 'performance'],
            'security': ['security', 'breach', 'vulnerability', 'compliance', 'audit', 'encryption'],
            'ai_ml': ['ai', 'machine learning', 'model', 'training', 'inference', 'neural'],
            'marketing': ['campaign', 'seo', 'content', 'brand', 'social media', 'analytics'],
            'support': ['issue', 'ticket', 'bug report', 'help', 'support', 'troubleshoot'],
            'strategy': ['strategy', 'roadmap', 'vision', 'growth', 'expansion', 'partnership']
        }
        
        found_topics = []
        for topic, keywords in topic_keywords.items():
            score = sum(1 for kw in keywords if kw in text)
            if score >= 2:
                found_topics.append(topic)
        
        return found_topics if found_topics else ['general']
    
    def _extract_relationships(self, sender, recipients, entities, subject, body):
        """Extract relationships between entities."""
        rels = []
        text = (subject + ' ' + body).lower()
        
        sender_name = sender.split('@')[0] if '@' in sender else sender
        
        # Sender communicates with recipients
        for r in recipients:
            r_name = r.split('@')[0] if '@' in r else r
            rels.append({
                'source': sender_name,
                'target': r_name,
                'type': 'COMMUNICATES_WITH',
                'weight': 1
            })
        
        # Person works on project
        for entity in entities:
            if entity['type'] == 'PROJECT':
                for person in [sender_name] + [r.split('@')[0] for r in recipients if '@' in r]:
                    if entity['name'].lower() in text:
                        rels.append({
                            'source': person,
                            'target': entity['name'],
                            'type': 'WORKS_ON',
                            'weight': 1
                        })
        
        # Technology used in project
        projects = [e for e in entities if e['type'] == 'PROJECT']
        techs = [e for e in entities if e['type'] == 'TECHNOLOGY']
        for proj in projects:
            for tech in techs:
                rels.append({
                    'source': proj['name'],
                    'target': tech['name'],
                    'type': 'USES_TECHNOLOGY',
                    'weight': 1
                })
        
        return rels
    
    def _extract_facts(self, body):
        """Extract factual statements from email body."""
        facts = []
        sentences = re.split(r'[.!?\n]', body)
        
        fact_patterns = [
            r'(?:is|are|was|were)\s+(\d+[\d,.]*)',  # Numeric facts
            r'(?:deadline|due date|delivery)\s+(?:is|will be)\s+(.+?)(?:\.|$)',  # Deadlines
            r'(?:cost|price|budget|amount)\s+(?:is|of)\s+\$?([\d,.]+)',  # Financial facts
            r'(?:version|release)\s+([\d.]+)',  # Version numbers
            r'(?:we have|there are|total)\s+(\d+)\s+(.+?)(?:\.|$)'  # Count facts
        ]
        
        for sent in sentences:
            sent = sent.strip()
            if len(sent) < 15:
                continue
            for pattern in fact_patterns:
                if re.search(pattern, sent, re.IGNORECASE):
                    facts.append(sent[:200])
                    break
        
        return facts[:5]
    
    def _extract_decisions(self, body):
        """Extract decisions made in the email."""
        decisions = []
        decision_patterns = [
            r'(?:we (?:have )?decided|decision|agreed|approved|confirmed)\s+(?:to|that)?\s*(.+?)(?:\.|$)',
            r'(?:let\'s|we will|we shall)\s+(.+?)(?:\.|$)',
            r'(?:going with|choosing|selecting)\s+(.+?)(?:\.|$)'
        ]
        
        for pattern in decision_patterns:
            for match in re.finditer(pattern, body, re.IGNORECASE):
                decision = match.group(0).strip()[:200]
                if len(decision) > 10:
                    decisions.append(decision)
        
        return decisions[:5]
    
    def _extract_action_items(self, body):
        """Extract action items from email."""
        items = []
        action_patterns = [
            r'(?:please|could you|can you)\s+(.+?)(?:\.|$)',
            r'(?:todo|action item|task)[:\s]+(.+?)(?:\.|$)',
            r'(?:need to|must|should)\s+(.+?)(?:\.|$)'
        ]
        
        for pattern in action_patterns:
            for match in re.finditer(pattern, body, re.IGNORECASE):
                item = match.group(0).strip()[:200]
                if len(item) > 10:
                    items.append(item)
        
        return items[:5]
    
    def _find_relevant_conversations(self, entities, topics, current_email_id):
        """Find past conversations related to current email."""
        relevant = []
        
        entity_names = {e['name'].lower() for e in entities}
        
        for eid, knowledge in self.email_knowledge.items():
            if eid == current_email_id:
                continue
            
            # Score relevance
            score = 0
            
            # Entity overlap
            past_entities = {e['name'].lower() for e in knowledge.get('entities', [])}
            entity_overlap = len(entity_names & past_entities)
            score += entity_overlap * 3
            
            # Topic overlap
            past_topics = set(knowledge.get('topics', []))
            topic_overlap = len(set(topics) & past_topics)
            score += topic_overlap * 2
            
            if score > 0:
                relevant.append({
                    'email_id': eid,
                    'thread_id': knowledge.get('thread_id', 'unknown'),
                    'relevance_score': score,
                    'shared_entities': list(entity_names & past_entities)[:3],
                    'shared_topics': list(set(topics) & past_topics),
                    'timestamp': knowledge.get('timestamp', 'unknown')
                })
        
        relevant.sort(key=lambda x: x['relevance_score'], reverse=True)
        return relevant
    
    def _detect_knowledge_gaps(self, entities, facts, decisions):
        """Detect areas where knowledge is incomplete."""
        gaps = []
        
        # Check for entities mentioned but with little context
        for entity in entities:
            eid = entity['name'].lower().replace(' ', '_')
            entity_data = self.entities.get(eid, {})
            if entity_data.get('mentions', 0) == 1 and entity['type'] in ('PROJECT', 'TECHNOLOGY'):
                gaps.append({
                    'type': 'INSUFFICIENT_CONTEXT',
                    'entity': entity['name'],
                    'suggestion': f'Document more details about {entity["name"]} - only mentioned once'
                })
        
        # Check for decisions without action items
        if decisions and not facts:
            gaps.append({
                'type': 'DECISION_WITHOUT_DETAILS',
                'suggestion': 'Decision was made but supporting data/facts are missing. Consider documenting the rationale.'
            })
        
        return gaps
    
    def _generate_recommendations(self, entities, relevant_past, gaps, reply_all):
        """Generate actionable recommendations."""
        recs = []
        
        if relevant_past:
            top = relevant_past[0]
            recs.append(f"📚 Related conversation found: {top['thread_id']} (score: {top['relevance_score']})")
            recs.append("Reference previous decisions and context to maintain continuity")
        
        if gaps:
            for gap in gaps[:2]:
                recs.append(f"📝 Knowledge gap: {gap.get('suggestion', gap.get('type', ''))}")
        
        if len(entities) > 5:
            recs.append("🏷️ Rich email - consider adding to project wiki or knowledge base")
        
        if reply_all:
            recs.append("👥 REPLY ALL: Share knowledge with all participants")
            recs.append("📖 Ensure response includes context for all recipients")
        
        if not recs:
            recs.append("✅ Email processed and knowledge graph updated")
        
        return recs
    
    def get_knowledge_graph_report(self):
        """Generate comprehensive knowledge graph report."""
        top_entities = sorted(
            self.entities.items(),
            key=lambda x: x[1]['mentions'],
            reverse=True
        )[:20]
        
        top_topics = sorted(
            self.topics.items(),
            key=lambda x: len(x[1]),
            reverse=True
        )[:10]
        
        return {
            'generated_at': datetime.now().isoformat(),
            'total_entities': len(self.entities),
            'total_relationships': len(self.relationships),
            'total_topics': len(self.topics),
            'total_emails_processed': len(self.email_knowledge),
            'top_entities': [{'name': e[1]['name'], 'type': e[1]['type'], 'mentions': e[1]['mentions']} for e in top_entities],
            'top_topics': [{'topic': t[0], 'email_count': len(t[1])} for t in top_topics],
            'knowledge_gaps': self.knowledge_gaps
        }


if __name__ == '__main__':
    kg = KnowledgeGraphBuilder()
    
    test_emails = [
        {
            'id': 'e001', 'thread_id': 't001',
            'sender': 'pm@acme.com',
            'recipients': ['kleber@ziontechgroup.com', 'dev@ziontechgroup.com', 'cto@acme.com'],
            'subject': 'Project Phoenix - Sprint Planning',
            'body': 'Hi team, We have decided to use React and PostgreSQL for Project Phoenix. The deadline is June 15th. Budget is $150,000. Please review the architecture document and provide feedback. We need to finalize the API design by next Wednesday. John from the DevOps team will handle the CI/CD pipeline setup.',
            'timestamp': '2026-05-25T10:00:00'
        },
        {
            'id': 'e002', 'thread_id': 't001',
            'sender': 'cto@acme.com',
            'recipients': ['kleber@ziontechgroup.com', 'dev@ziontechgroup.com', 'pm@acme.com'],
            'subject': 'Re: Project Phoenix - Sprint Planning',
            'body': 'Thanks for the update. I agree with the technology choices. We should also consider adding Redis for caching. The budget seems reasonable. Let\'s schedule a technical review meeting. Please ensure security compliance with SOC 2 requirements.',
            'timestamp': '2026-05-26T14:00:00'
        },
        {
            'id': 'e003', 'thread_id': 't002',
            'sender': 'sales@globalcorp.com',
            'recipients': ['kleber@ziontechgroup.com', 'legal@globalcorp.com', 'finance@globalcorp.com'],
            'subject': 'AI Platform Proposal - Pricing Discussion',
            'body': 'We reviewed your AI platform proposal. The pricing of $250,000 for the enterprise license seems high. Can you provide a breakdown? We are comparing with Microsoft Azure AI and Google Cloud AI solutions. Our team of 50 developers will need access. Please send the updated contract by Friday.',
            'timestamp': '2026-05-28T09:00:00'
        }
    ]
    
    print("=== V1045: AI Email Knowledge Graph Builder ===\n")
    
    for email in test_emails:
        result = kg.process_email(email)
        print(f"Email: {email['subject']}")
        print(f"  Entities: {result['entities'][:5]}")
        print(f"  Topics: {result['topics']}")
        print(f"  Facts: {result['facts'][:2]}")
        print(f"  Decisions: {result['decisions'][:2]}")
        print(f"  Action Items: {result['action_items'][:2]}")
        print(f"  Relevant Past: {len(result['relevant_past_conversations'])} conversations")
        print(f"  Knowledge Gaps: {len(result['knowledge_gaps'])}")
        print(f"  Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
        for rec in result['recommendations'][:3]:
            print(f"  💡 {rec}")
        print()
    
    report = kg.get_knowledge_graph_report()
    print(f"=== Knowledge Graph Stats ===")
    print(f"Entities: {report['total_entities']}")
    print(f"Relationships: {report['total_relationships']}")
    print(f"Topics: {report['total_topics']}")
    print(f"Top entities: {[e['name'] for e in report['top_entities'][:5]]}")

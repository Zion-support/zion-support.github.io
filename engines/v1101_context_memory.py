#!/usr/bin/env python3
"""
V1101 - Email Context Memory Engine
Remembers past conversations, builds relationship context across months of emails.
Provides contextual awareness for every interaction.
"""

import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Any
from collections import defaultdict

class ContextMemoryEngine:
    def __init__(self):
        self.contact_profiles = defaultdict(lambda: {
            'interactions': [],
            'topics': [],
            'preferences': {},
            'relationship_stage': 'new',
            'sentiment_history': [],
            'key_facts': [],
            'last_contact': None,
            'total_interactions': 0,
            'important_events': []
        })
        self.relationship_graph = {}
        
    def store_interaction(self, sender: str, email_data: Dict[str, Any]):
        """Store an email interaction with context extraction"""
        body = email_data.get('body', '')
        subject = email_data.get('subject', '')
        
        interaction = {
            'timestamp': email_data.get('timestamp', datetime.now()),
            'subject': subject,
            'topics': self.extract_topics(subject + ' ' + body),
            'sentiment': self.quick_sentiment(body),
            'key_points': self.extract_key_points(body),
            'action_items': self.extract_actions(body),
            'attachments_count': len(email_data.get('attachments', [])),
            'participants': email_data.get('to', [])
        }
        
        profile = self.contact_profiles[sender]
        profile['interactions'].append(interaction)
        profile['total_interactions'] += 1
        profile['last_contact'] = interaction['timestamp']
        profile['topics'] = list(set(profile['topics'] + interaction['topics']))
        
        # Update relationship stage
        profile['relationship_stage'] = self.calculate_relationship_stage(profile)
        
        return interaction
    
    def extract_topics(self, text: str) -> List[str]:
        """Extract key topics from text"""
        text_lower = text.lower()
        topic_keywords = {
            'budget': ['budget', 'cost', 'price', 'pricing', 'expense', 'revenue'],
            'project': ['project', 'milestone', 'deadline', 'deliverable', 'sprint'],
            'technical': ['api', 'server', 'code', 'bug', 'deploy', 'infrastructure'],
            'sales': ['deal', 'contract', 'proposal', 'quote', 'order', 'purchase'],
            'support': ['issue', 'problem', 'help', 'ticket', 'resolution'],
            'partnership': ['partner', 'collaboration', 'alliance', 'joint venture'],
            'hiring': ['hiring', 'interview', 'candidate', 'position', 'resume'],
            'marketing': ['campaign', 'launch', 'brand', 'content', 'seo'],
            'compliance': ['compliance', 'gdpr', 'audit', 'regulation', 'policy']
        }
        
        found_topics = []
        for topic, keywords in topic_keywords.items():
            if any(kw in text_lower for kw in keywords):
                found_topics.append(topic)
        
        return found_topics if found_topics else ['general']
    
    def quick_sentiment(self, text: str) -> float:
        """Quick sentiment analysis"""
        positive = ['great', 'excellent', 'happy', 'pleased', 'thank', 'wonderful', 'amazing']
        negative = ['bad', 'terrible', 'frustrated', 'angry', 'disappointed', 'problem', 'issue']
        
        text_lower = text.lower()
        pos = sum(1 for w in positive if w in text_lower)
        neg = sum(1 for w in negative if w in text_lower)
        
        total = pos + neg
        return (pos - neg) / max(total, 1)
    
    def extract_key_points(self, text: str) -> List[str]:
        """Extract key points from email body"""
        sentences = re.split(r'[.!?]+', text)
        key_points = []
        
        importance_words = ['important', 'critical', 'deadline', 'agreed', 'decided', 
                          'approved', 'confirmed', 'remember', 'note that']
        
        for sentence in sentences:
            sentence = sentence.strip()
            if len(sentence) > 15 and any(w in sentence.lower() for w in importance_words):
                key_points.append(sentence[:150])
        
        return key_points[:5]
    
    def extract_actions(self, text: str) -> List[str]:
        """Extract action items"""
        actions = []
        patterns = [
            r'(?:please|could you|can you)\s+(.+?)(?:\.|$)',
            r'(?:action item|todo|task)[:\s]+(.+?)(?:\.|$)',
            r'(?:i will|i\'ll|we will)\s+(.+?)(?:\.|$)'
        ]
        
        text_lower = text.lower()
        for pattern in patterns:
            matches = re.findall(pattern, text_lower)
            actions.extend(matches[:3])
        
        return actions[:5]
    
    def calculate_relationship_stage(self, profile: Dict) -> str:
        """Calculate relationship stage based on interaction history"""
        interactions = len(profile['interactions'])
        
        if interactions <= 2:
            return 'new_contact'
        elif interactions <= 10:
            return 'developing'
        elif interactions <= 30:
            return 'established'
        elif interactions <= 100:
            return 'trusted_partner'
        else:
            return 'strategic_relationship'
    
    def get_context_brief(self, sender: str) -> Dict[str, Any]:
        """Get a comprehensive context brief for a contact"""
        profile = self.contact_profiles.get(sender)
        if not profile or not profile['interactions']:
            return {
                'sender': sender,
                'relationship_stage': 'new_contact',
                'context_available': False,
                'recommendation': 'Welcome new contact - introduce yourself and company'
            }
        
        recent = profile['interactions'][-5:]
        avg_sentiment = sum(i['sentiment'] for i in recent) / len(recent)
        
        # Days since last contact
        last = profile['last_contact']
        if isinstance(last, datetime):
            days_since = (datetime.now() - last).days
        else:
            days_since = 0
        
        return {
            'sender': sender,
            'relationship_stage': profile['relationship_stage'],
            'total_interactions': profile['total_interactions'],
            'topics_discussed': profile['topics'][:10],
            'recent_subjects': [i['subject'] for i in recent],
            'average_sentiment': round(avg_sentiment, 2),
            'days_since_last_contact': days_since,
            'key_facts': profile['key_facts'][-5:],
            'pending_actions': [a for i in recent for a in i.get('action_items', [])],
            'context_available': True,
            'recommendation': self.get_contextual_recommendation(profile, avg_sentiment, days_since)
        }
    
    def get_contextual_recommendation(self, profile: Dict, sentiment: float, days_since: int) -> str:
        """Get personalized recommendation based on context"""
        stage = profile['relationship_stage']
        
        if days_since > 30:
            return 'Long gap since last contact - reference previous discussions to re-engage'
        elif sentiment < -0.3:
            return 'Recent negative sentiment - approach with empathy and solutions'
        elif stage == 'new_contact':
            return 'New relationship - be professional, informative, and responsive'
        elif stage == 'trusted_partner':
            return 'Strong relationship - leverage trust for collaboration opportunities'
        elif stage == 'strategic_relationship':
            return 'Key partner - personalize approach, reference shared history'
        else:
            return 'Developing relationship - maintain consistency and reliability'
    
    def learn_from_interaction(self, sender: str, outcome: str):
        """Learn from interaction outcomes to improve future responses"""
        profile = self.contact_profiles[sender]
        
        if outcome == 'positive':
            profile['key_facts'].append(f'Positive interaction on {datetime.now().strftime("%Y-%m-%d")}')
        elif outcome == 'negative':
            profile['key_facts'].append(f'Needs attention - negative outcome on {datetime.now().strftime("%Y-%m-%d")}')
        
        # Keep only last 20 facts
        profile['key_facts'] = profile['key_facts'][-20:]
    
    def process_email(self, email_data: Dict[str, Any]) -> Dict[str, Any]:
        """Process incoming email with full context memory"""
        sender = email_data.get('from', 'unknown')
        recipients = email_data.get('to', [])
        
        # Store the interaction
        interaction = self.store_interaction(sender, email_data)
        
        # Get context brief
        context = self.get_context_brief(sender)
        
        # Reply-all enforcement
        reply_all = len(recipients) > 1
        
        return {
            'engine': 'V1101 - Context Memory Engine',
            'sender': sender,
            'context_brief': context,
            'current_interaction': {
                'topics': interaction['topics'],
                'sentiment': interaction['sentiment'],
                'key_points': interaction['key_points'],
                'action_items': interaction['action_items']
            },
            'reply_all_required': reply_all,
            'action': self.determine_action(context, interaction)
        }
    
    def determine_action(self, context: Dict, interaction: Dict) -> str:
        """Determine best action based on context and current interaction"""
        if not context.get('context_available'):
            return 'Welcome new contact with professional introduction'
        
        stage = context.get('relationship_stage', 'new')
        sentiment = interaction.get('sentiment', 0)
        
        if sentiment < -0.4:
            return 'URGENT: Negative sentiment detected - respond with empathy and immediate solutions'
        elif context.get('days_since_last_contact', 0) > 30:
            return f'Re-engagement needed - reference previous topics: {", ".join(context.get("topics_discussed", [])[:3])}'
        elif interaction.get('action_items'):
            return f'Action items detected - address each point: {", ".join(interaction["action_items"][:2])}'
        elif stage in ['trusted_partner', 'strategic_relationship']:
            return 'Personalize response with shared context - leverage established relationship'
        else:
            return 'Standard professional response with contextual awareness'


if __name__ == '__main__':
    engine = ContextMemoryEngine()
    
    print("V1101 - Context Memory Engine Test")
    print("=" * 60)
    
    # Simulate conversation history
    history = [
        {'from': 'client@acme.com', 'to': ['us@zion.com'], 'subject': 'Budget discussion',
         'body': 'We need to discuss the budget for Q4. The approved amount was $500K.', 'timestamp': datetime.now() - timedelta(days=30)},
        {'from': 'client@acme.com', 'to': ['us@zion.com'], 'subject': 'Project timeline',
         'body': 'Great progress on the project! The milestone was delivered on time. I am very happy with the results.', 'timestamp': datetime.now() - timedelta(days=15)},
        {'from': 'client@acme.com', 'to': ['us@zion.com', 'manager@acme.com'], 'subject': 'Urgent: Server issue',
         'body': 'We have a critical issue with the server. This is frustrating and needs immediate attention. Please fix ASAP.', 'timestamp': datetime.now()}
    ]
    
    for email in history:
        result = engine.process_email(email)
        print(f"\nEmail: {email['subject']}")
        print(f"Stage: {result['context_brief']['relationship_stage']}")
        print(f"Sentiment: {result['current_interaction']['sentiment']:.2f}")
        print(f"Reply-All: {result['reply_all_required']}")
        print(f"Action: {result['action']}")
    
    print("\n" + "=" * 60)
    print("Final Context Brief:")
    print(json.dumps(engine.get_context_brief('client@acme.com'), indent=2, default=str))

#!/usr/bin/env python3
"""
V912: Email Context Memory Engine
Remembers past conversations, builds relationship profiles, and references previous discussions.
Enables "Last time we discussed X..." type responses.
"""

import json
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from collections import defaultdict

class EmailContextMemory:
    def __init__(self):
        self.conversations = defaultdict(list)  # sender -> list of emails
        self.relationships = {}  # sender -> relationship profile
        self.topics = defaultdict(list)  # topic -> list of emails
        self.decisions = []  # important decisions made
        
    def remember_email(self, email_id: str, sender: str, recipients: List[str],
                      subject: str, body: str, timestamp: str = None) -> Dict:
        """Store email in memory with context extraction"""
        
        timestamp = timestamp or datetime.now().isoformat()
        
        # Extract key information
        topics = self._extract_topics(subject, body)
        action_items = self._extract_action_items(body)
        decisions = self._extract_decisions(body)
        questions = self._extract_questions(body)
        
        email_record = {
            'email_id': email_id,
            'sender': sender,
            'recipients': recipients,
            'subject': subject,
            'body': body,
            'timestamp': timestamp,
            'topics': topics,
            'action_items': action_items,
            'decisions': decisions,
            'questions': questions,
            'reply_all_required': len(recipients) > 1
        }
        
        # Store in conversation history
        self.conversations[sender].append(email_record)
        
        # Index by topics
        for topic in topics:
            self.topics[topic].append(email_record)
        
        # Update relationship profile
        self._update_relationship(sender, email_record)
        
        # Store important decisions
        if decisions:
            self.decisions.extend([
                {
                    'decision': d,
                    'made_by': sender,
                    'email_id': email_id,
                    'timestamp': timestamp
                }
                for d in decisions
            ])
        
        return {
            'success': True,
            'email_id': email_id,
            'topics_identified': len(topics),
            'action_items': len(action_items),
            'stored': True
        }
    
    def _extract_topics(self, subject: str, body: str) -> List[str]:
        """Extract main topics from email"""
        text = f"{subject} {body}".lower()
        
        topic_keywords = {
            'pricing': ['price', 'cost', 'pricing', 'quote', 'budget', 'fee'],
            'timeline': ['deadline', 'timeline', 'schedule', 'when', 'date', 'delivery'],
            'technical': ['bug', 'error', 'issue', 'technical', 'code', 'api', 'integration'],
            'contract': ['contract', 'agreement', 'terms', 'legal', 'signature'],
            'project': ['project', 'milestone', 'deliverable', 'scope', 'requirements'],
            'support': ['help', 'support', 'assistance', 'problem', 'question'],
            'meeting': ['meeting', 'call', 'discussion', 'agenda', 'schedule'],
            'payment': ['payment', 'invoice', 'billing', 'charge', 'refund']
        }
        
        detected_topics = []
        for topic, keywords in topic_keywords.items():
            if any(kw in text for kw in keywords):
                detected_topics.append(topic)
        
        return detected_topics if detected_topics else ['general']
    
    def _extract_action_items(self, body: str) -> List[str]:
        """Extract action items from email"""
        action_items = []
        sentences = body.split('.')
        
        for sentence in sentences:
            sentence_lower = sentence.lower().strip()
            if any(word in sentence_lower for word in ['need to', 'please', 'must', 'should', 'action required']):
                if 10 < len(sentence) < 200:
                    action_items.append(sentence.strip())
        
        return action_items[:5]
    
    def _extract_decisions(self, body: str) -> List[str]:
        """Extract important decisions"""
        decisions = []
        decision_indicators = ['decided', 'we will', 'approved', 'confirmed', 'agreed', 'going with']
        
        sentences = body.split('.')
        for sentence in sentences:
            if any(indicator in sentence.lower() for indicator in decision_indicators):
                if 10 < len(sentence) < 200:
                    decisions.append(sentence.strip())
        
        return decisions[:3]
    
    def _extract_questions(self, body: str) -> List[str]:
        """Extract questions from email"""
        questions = []
        sentences = body.split('?')
        
        for sentence in sentences[:-1]:  # All but last (doesn't end with ?)
            if len(sentence.strip()) > 10:
                questions.append(sentence.strip() + '?')
        
        return questions[:5]
    
    def _update_relationship(self, sender: str, email_record: Dict):
        """Update relationship profile for sender"""
        
        if sender not in self.relationships:
            self.relationships[sender] = {
                'first_contact': email_record['timestamp'],
                'total_emails': 0,
                'topics_discussed': set(),
                'response_time_avg': 0,
                'sentiment_trend': [],
                'last_contact': None,
                'relationship_strength': 0
            }
        
        profile = self.relationships[sender]
        profile['total_emails'] += 1
        profile['last_contact'] = email_record['timestamp']
        profile['topics_discussed'].update(email_record['topics'])
        
        # Calculate relationship strength (0-100)
        days_known = (datetime.now() - datetime.fromisoformat(profile['first_contact'])).days
        email_frequency = profile['total_emails'] / max(days_known, 1)
        
        profile['relationship_strength'] = min(100, int(
            (email_frequency * 10) +
            (len(profile['topics_discussed']) * 5) +
            (min(days_known, 365) / 10)
        ))
    
    def recall_context(self, sender: str, current_subject: str = None) -> Dict:
        """Recall relevant context for responding to sender"""
        
        if sender not in self.conversations:
            return {
                'success': True,
                'context': None,
                'message': 'No previous conversations with this sender'
            }
        
        conversation_history = self.conversations[sender]
        profile = self.relationships[sender]
        
        # Find relevant past emails
        relevant_emails = []
        
        if current_subject:
            # Extract topics from current subject
            current_topics = self._extract_topics(current_subject, '')
            
            for email in conversation_history:
                # Check topic overlap
                topic_overlap = set(email['topics']) & set(current_topics)
                if topic_overlap:
                    relevant_emails.append({
                        'email_id': email['email_id'],
                        'subject': email['subject'],
                        'timestamp': email['timestamp'],
                        'topics': list(topic_overlap),
                        'relevance_score': len(topic_overlap)
                    })
        
        # Sort by relevance and recency
        relevant_emails.sort(key=lambda x: (x['relevance_score'], x['timestamp']), reverse=True)
        
        # Get recent decisions
        sender_decisions = [d for d in self.decisions if d['made_by'] == sender][-3:]
        
        # Get unanswered questions
        recent_emails = conversation_history[-5:]
        unanswered_questions = []
        for email in recent_emails:
            if email['questions'] and email['sender'] == sender:
                unanswered_questions.extend(email['questions'][:2])
        
        context = {
            'sender': sender,
            'relationship_strength': profile['relationship_strength'],
            'total_emails': profile['total_emails'],
            'days_known': (datetime.now() - datetime.fromisoformat(profile['first_contact'])).days,
            'topics_discussed': list(profile['topics_discussed']),
            'relevant_past_emails': relevant_emails[:3],
            'recent_decisions': sender_decisions,
            'unanswered_questions': unanswered_questions[:3],
            'last_contact': profile['last_contact']
        }
        
        return {
            'success': True,
            'context': context,
            'has_context': True
        }
    
    def generate_contextual_response(self, sender: str, current_email: Dict) -> Dict:
        """Generate response with context from previous conversations"""
        
        recall = self.recall_context(sender, current_email.get('subject'))
        
        if not recall['has_context']:
            return {
                'success': False,
                'message': 'No context available for this sender'
            }
        
        context = recall['context']
        
        # Build contextual response
        response_parts = []
        
        # Reference relationship
        if context['relationship_strength'] > 70:
            response_parts.append(f"Thank you for your continued partnership over the past {context['days_known']} days.")
        elif context['days_known'] > 30:
            response_parts.append(f"Great to hear from you again. We've been working together for {context['days_known']} days now.")
        
        # Reference relevant past emails
        if context['relevant_past_emails']:
            most_relevant = context['relevant_past_emails'][0]
            response_parts.append(
                f"Regarding our previous discussion on {', '.join(most_relevant['topics'])} "
                f"(email from {most_relevant['timestamp'][:10]}): "
            )
        
        # Reference recent decisions
        if context['recent_decisions']:
            latest_decision = context['recent_decisions'][-1]
            response_parts.append(
                f"Following up on your decision to {latest_decision['decision'].lower()} "
                f"from {latest_decision['timestamp'][:10]}: "
            )
        
        # Address unanswered questions
        if context['unanswered_questions']:
            response_parts.append(
                f"I also wanted to address your previous question: "
                f"'{context['unanswered_questions'][0]}'"
            )
        
        response_text = ' '.join(response_parts)
        
        return {
            'success': True,
            'contextual_intro': response_text,
            'context_used': {
                'relationship_referenced': context['relationship_strength'] > 50,
                'past_emails_referenced': len(context['relevant_past_emails']) > 0,
                'decisions_referenced': len(context['recent_decisions']) > 0,
                'questions_addressed': len(context['unanswered_questions']) > 0
            }
        }
    
    def get_relationship_summary(self, sender: str) -> Dict:
        """Get comprehensive relationship summary"""
        
        if sender not in self.relationships:
            return {'success': False, 'error': 'No relationship found'}
        
        profile = self.relationships[sender]
        conversations = self.conversations[sender]
        
        return {
            'success': True,
            'sender': sender,
            'relationship_strength': profile['relationship_strength'],
            'total_conversations': len(conversations),
            'first_contact': profile['first_contact'],
            'last_contact': profile['last_contact'],
            'topics_discussed': list(profile['topics_discussed']),
            'conversation_frequency': len(conversations) / max(
                (datetime.now() - datetime.fromisoformat(profile['first_contact'])).days, 1
            ),
            'recent_topics': list(set(
                topic for email in conversations[-5:] for topic in email['topics']
            ))
        }
    
    def generate_report(self) -> str:
        """Generate comprehensive context memory report"""
        
        total_senders = len(self.conversations)
        total_emails = sum(len(emails) for emails in self.conversations.values())
        avg_relationship_strength = sum(
            r['relationship_strength'] for r in self.relationships.values()
        ) / max(len(self.relationships), 1)
        
        report = f"""
🧠 EMAIL CONTEXT MEMORY REPORT (V912)
{'='*60}

MEMORY OVERVIEW:
- Total Senders Tracked: {total_senders}
- Total Emails Remembered: {total_emails}
- Average Relationship Strength: {avg_relationship_strength:.1f}/100
- Topics Indexed: {len(self.topics)}
- Decisions Tracked: {len(self.decisions)}

CAPABILITIES:
- Automatic topic extraction (8 topic categories)
- Action item identification
- Decision tracking
- Question extraction
- Relationship profiling
- Context recall for responses
- Conversation history indexing

RELATIONSHIP METRICS:
- First contact tracking
- Conversation frequency
- Topic diversity
- Relationship strength scoring (0-100)
- Last contact monitoring

CONTEXT RECALL:
✅ Find relevant past emails by topic
✅ Reference previous decisions
✅ Address unanswered questions
✅ Build on relationship history
✅ Personalize responses with context

TOPICS TRACKED:
- Pricing & Budget
- Timeline & Deadlines
- Technical Issues
- Contracts & Legal
- Projects & Milestones
- Support & Help
- Meetings & Calls
- Payments & Billing

Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
Contact: +1 302 464 0950 | kleber@ziontechgroup.com
"""
        return report


def analyze_email_content(email_text: str) -> Dict:
    """Analyze email for context memory requests"""
    context_keywords = ['remember', 'previous', 'last time', 'earlier', 'history', 'context']
    
    has_context = any(kw in email_text.lower() for kw in context_keywords)
    
    return {
        'email_type': 'context_memory',
        'context_request': has_context,
        'reply_all_required': True,
        'priority': 'high' if has_context else 'medium'
    }


if __name__ == '__main__':
    engine = EmailContextMemory()
    
    # Store some emails
    engine.remember_email(
        'email-001',
        'client@company.com',
        ['support@company.com', 'manager@company.com'],
        'Project timeline discussion',
        'We need to discuss the project timeline. Can we meet next week?',
        '2026-05-25T10:00:00'
    )
    
    engine.remember_email(
        'email-002',
        'client@company.com',
        ['support@company.com'],
        'Pricing question',
        'What is the pricing for the enterprise plan? Also, we decided to go with the annual contract.',
        '2026-05-28T14:00:00'
    )
    
    # Recall context
    context = engine.recall_context('client@company.com', 'Follow up on pricing')
    
    # Generate contextual response
    current_email = {
        'subject': 'Quick question about pricing',
        'body': 'Can you clarify the pricing details?'
    }
    
    contextual_response = engine.generate_contextual_response('client@company.com', current_email)
    
    print(engine.generate_report())
    print(f"\nContext: {json.dumps(context, indent=2)}")
    print(f"\nContextual Response: {json.dumps(contextual_response, indent=2)}")

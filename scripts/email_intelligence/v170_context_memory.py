#!/usr/bin/env python3
"""
V170 - AI Email Context Memory Engine
Maintains long-term memory of conversations, preferences, and context per contact.
Enables personalized responses that reference past interactions and commitments.
"""

import json
import hashlib
import re
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional
from collections import defaultdict


class ContextMemoryEngine:
    """AI-powered long-term context memory for email communications."""

    def __init__(self):
        self.contact_memories = defaultdict(dict)
        self.conversation_contexts = defaultdict(list)
        self.commitments = defaultdict(list)
        self.preferences = defaultdict(dict)
        self.relationship_facts = defaultdict(list)

    def store_context(self, email: Dict[str, Any], response: Dict = None):
        """Store context from an email exchange."""
        sender = email.get('from', '')
        if not sender:
            return

        # Initialize contact memory
        if sender not in self.contact_memories:
            self.contact_memories[sender] = {
                'first_contact': email.get('date', datetime.now().isoformat()),
                'total_interactions': 0,
                'topics_discussed': [],
                'key_facts': [],
                'sentiment_history': []
            }

        memory = self.contact_memories[sender]
        memory['total_interactions'] += 1
        memory['last_contact'] = email.get('date', datetime.now().isoformat())

        # Extract and store topics
        topics = self._extract_topics(email)
        memory['topics_discussed'].extend(topics)
        memory['topics_discussed'] = list(set(memory['topics_discussed']))[-50:]

        # Extract key facts
        facts = self._extract_facts(email)
        memory['key_facts'].extend(facts)
        memory['key_facts'] = memory['key_facts'][-30:]

        # Store conversation context
        self.conversation_contexts[sender].append({
            'timestamp': email.get('date', datetime.now().isoformat()),
            'subject': email.get('subject', ''),
            'summary': self._summarize(email.get('body', '')),
            'direction': 'inbound' if not response else 'outbound',
            'key_points': facts,
            'action_items': self._extract_action_items(email)
        })

        # Keep last 100 conversation entries
        self.conversation_contexts[sender] = self.conversation_contexts[sender][-100:]

        # Extract commitments
        if response:
            commitments = self._extract_commitments(response)
            self.commitments[sender].extend(commitments)

        # Extract preferences
        prefs = self._extract_preferences(email)
        self.preferences[sender].update(prefs)

    def _extract_topics(self, email: Dict) -> List[str]:
        """Extract topics from email."""
        content = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        stop_words = {'the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'can', 'had',
                      'her', 'was', 'one', 'our', 'out', 'this', 'that', 'with', 'have', 'from'}
        words = [w for w in re.findall(r'\b[a-z]{4,}\b', content) if w not in stop_words]

        from collections import Counter
        top_words = Counter(words).most_common(10)
        return [w[0] for w in top_words]

    def _extract_facts(self, email: Dict) -> List[Dict]:
        """Extract key facts from email."""
        body = email.get('body', '')
        facts = []

        # Extract numbers with context
        numbers = re.findall(r'(\w+\s*:?\s*\$?\d[\d,]*(?:\.\d+)?%?)', body)
        for num in numbers[:5]:
            facts.append({'type': 'numeric', 'value': num.strip()})

        # Extract dates
        dates = re.findall(r'\b(\d{1,2}[/-]\d{1,2}[/-]\d{2,4}|(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*\s+\d{1,2})\b', body, re.IGNORECASE)
        for date in dates[:3]:
            facts.append({'type': 'date', 'value': date})

        # Extract names mentioned
        names = re.findall(r'\b([A-Z][a-z]+\s+[A-Z][a-z]+)\b', body)
        for name in names[:5]:
            facts.append({'type': 'person', 'value': name})

        return facts

    def _summarize(self, body: str) -> str:
        """Generate brief summary of email body."""
        sentences = re.split(r'[.!?]+', body)
        key_sentences = [s.strip() for s in sentences if len(s.strip()) > 20][:3]
        return '. '.join(key_sentences)[:300]

    def _extract_action_items(self, email: Dict) -> List[str]:
        """Extract action items from email."""
        body = email.get('body', '')
        items = []

        patterns = [
            r'(?:please|kindly)\s+(.+?)(?:\.|$)',
            r'(?:need to|must|should)\s+(.+?)(?:\.|$)',
            r'(?:action|task|todo)[:\s]*(.+?)(?:\.|$)'
        ]

        for pattern in patterns:
            matches = re.findall(pattern, body, re.IGNORECASE)
            items.extend([m.strip()[:150] for m in matches if len(m.strip()) > 10])

        return items[:5]

    def _extract_commitments(self, response: Dict) -> List[Dict]:
        """Extract commitments made in responses."""
        body = response.get('body', '')
        commitments = []

        commitment_patterns = [
            (r'(?:will|shall)\s+(.+?)(?:\.|$)', 'promise'),
            (r'(?:by|before|deadline)[:\s]*(.+?)(?:\.|$)', 'deadline'),
            (r'(?:send|provide|deliver)\s+(.+?)(?:\.|$)', 'deliverable')
        ]

        for pattern, ctype in commitment_patterns:
            matches = re.findall(pattern, body, re.IGNORECASE)
            for match in matches:
                if len(match.strip()) > 5:
                    commitments.append({
                        'type': ctype,
                        'commitment': match.strip()[:200],
                        'made_at': datetime.now().isoformat(),
                        'status': 'pending'
                    })

        return commitments

    def _extract_preferences(self, email: Dict) -> Dict:
        """Extract communication preferences."""
        body = email.get('body', '').lower()
        prefs = {}

        # Time preferences
        if 'morning' in body:
            prefs['preferred_time'] = 'morning'
        elif 'afternoon' in body:
            prefs['preferred_time'] = 'afternoon'

        # Communication style
        if 'brief' in body or 'short' in body:
            prefs['style'] = 'concise'
        elif 'detailed' in body or 'thorough' in body:
            prefs['style'] = 'detailed'

        # Language
        if any(lang in body for lang in ['español', 'português', 'français', 'deutsch']):
            prefs['preferred_language'] = 'non_english'

        return prefs

    def get_context_for_reply(self, sender: str, current_email: Dict) -> Dict[str, Any]:
        """Get relevant context for generating a reply."""
        memory = self.contact_memories.get(sender, {})
        conversations = self.conversation_contexts.get(sender, [])
        contact_commitments = self.commitments.get(sender, [])
        contact_prefs = self.preferences.get(sender, {})

        # Find relevant past conversations
        current_topics = self._extract_topics(current_email)
        relevant_conversations = []

        for conv in conversations[-20:]:
            overlap = set(current_topics) & set(conv.get('summary', '').lower().split())
            if overlap:
                relevant_conversations.append(conv)

        # Check pending commitments
        pending_commitments = [c for c in contact_commitments if c.get('status') == 'pending']

        # Build context
        context = {
            'sender': sender,
            'relationship_summary': {
                'total_interactions': memory.get('total_interactions', 0),
                'first_contact': memory.get('first_contact', 'unknown'),
                'last_contact': memory.get('last_contact', 'unknown'),
                'common_topics': memory.get('topics_discussed', [])[:10]
            },
            'relevant_history': relevant_conversations[:5],
            'pending_commitments': pending_commitments[:5],
            'known_preferences': contact_prefs,
            'key_facts': memory.get('key_facts', [])[:10],
            'contextual_suggestions': self._generate_context_suggestions(
                memory, relevant_conversations, pending_commitments, contact_prefs
            ),
            'reply_all_context': self._check_reply_all_context(sender, current_email),
            'personalization_hints': self._generate_personalization_hints(memory, contact_prefs)
        }

        return context

    def _generate_context_suggestions(self, memory: Dict, relevant: List, 
                                       commitments: List, prefs: Dict) -> List[str]:
        """Generate contextual suggestions for reply."""
        suggestions = []

        if commitments:
            suggestions.append(f"Reference {len(commitments)} pending commitment(s) to this contact")

        if memory.get('total_interactions', 0) > 5:
            suggestions.append("Long-standing relationship - use familiar tone")

        if prefs.get('style') == 'concise':
            suggestions.append("Keep reply brief - contact prefers concise communication")
        elif prefs.get('style') == 'detailed':
            suggestions.append("Provide detailed response - contact appreciates thoroughness")

        if relevant:
            suggestions.append(f"Reference {len(relevant)} related past conversation(s)")

        return suggestions

    def _check_reply_all_context(self, sender: str, email: Dict) -> Dict:
        """Check if reply-all context is needed."""
        cc = email.get('cc', [])
        to = email.get('to', [])
        all_recipients = set(cc + to)

        # Check if we have history with other recipients
        known_recipients = [r for r in all_recipients if r in self.contact_memories]

        return {
            'should_reply_all': len(all_recipients) > 1,
            'known_other_recipients': known_recipients,
            'total_recipients': len(all_recipients)
        }

    def _generate_personalization_hints(self, memory: Dict, prefs: Dict) -> List[str]:
        """Generate personalization hints."""
        hints = []

        if memory.get('total_interactions', 0) > 10:
            hints.append("Use first name - established relationship")

        topics = memory.get('topics_discussed', [])
        if topics:
            hints.append(f"Reference shared interest in: {', '.join(topics[:3])}")

        if prefs.get('preferred_time'):
            hints.append(f"Contact prefers {prefs['preferred_time']} communication")

        return hints

    def update_commitment_status(self, sender: str, commitment_text: str, status: str):
        """Update status of a commitment."""
        for c in self.commitments.get(sender, []):
            if commitment_text.lower() in c.get('commitment', '').lower():
                c['status'] = status
                c['updated_at'] = datetime.now().isoformat()
                break

    def get_memory_stats(self) -> Dict:
        """Get memory statistics."""
        return {
            'contacts_tracked': len(self.contact_memories),
            'total_conversations': sum(len(v) for v in self.conversation_contexts.values()),
            'total_commitments': sum(len(v) for v in self.commitments.values()),
            'pending_commitments': sum(
                sum(1 for c in v if c.get('status') == 'pending')
                for v in self.commitments.values()
            ),
            'preferences_learned': len(self.preferences)
        }


if __name__ == '__main__':
    engine = ContextMemoryEngine()

    # Store some context
    engine.store_context({
        'from': 'john@client.com',
        'subject': 'Project Alpha update',
        'body': 'Hi, the deadline is March 15. We need the deliverables by then. Budget is $50,000.',
        'date': '2024-01-10T10:00:00',
        'cc': ['team@client.com']
    })

    engine.store_context({
        'from': 'john@client.com',
        'subject': 'Re: Project Alpha update',
        'body': 'We will deliver by March 15 as agreed. Please send brief updates.',
        'date': '2024-01-10T11:00:00'
    }, response={'body': 'We will deliver by March 15 as agreed.'})

    # Get context for reply
    context = engine.get_context_for_reply('john@client.com', {
        'from': 'john@client.com',
        'subject': 'Project Alpha - budget question',
        'body': 'Can we discuss the budget?',
        'cc': ['team@client.com']
    })
    print(json.dumps(context, indent=2))

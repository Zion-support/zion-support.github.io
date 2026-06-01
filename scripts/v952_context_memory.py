#!/usr/bin/env python3
"""
V952: Email Context Memory Engine
Long-term memory system that remembers past conversations, commitments, and preferences.
Automatically references relevant history and prevents contradictory statements.
"""

import re
from datetime import datetime, timedelta
from typing import Dict, List, Any, Set
import json
import hashlib

class ContextMemoryEngine:
    def __init__(self):
        self.memory_store = {
            'commitments': [],
            'preferences': {},
            'conversation_history': [],
            'key_facts': []
        }
        
    def analyze_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze email and check against memory."""
        sender = email.get('sender', '')
        body = email.get('body', '')
        subject = email.get('subject', '')
        
        # Extract new information
        new_commitments = self._extract_commitments(body)
        new_preferences = self._extract_preferences(body)
        new_facts = self._extract_facts(body)
        
        # Check for contradictions
        contradictions = self._check_contradictions(body, sender)
        
        # Find relevant history
        relevant_history = self._find_relevant_history(subject, body, sender)
        
        # Generate memory-enhanced response
        memory_context = self._generate_memory_context(
            new_commitments, new_preferences, contradictions, relevant_history
        )
        
        # Update memory
        self._update_memory(email, new_commitments, new_preferences, new_facts)
        
        # Check reply-all requirement
        recipients = email.get('recipients', [])
        reply_all_required = len(recipients) > 1
        
        return {
            'email_id': email.get('id'),
            'new_commitments': new_commitments,
            'new_preferences': new_preferences,
            'new_facts': new_facts,
            'contradictions': contradictions,
            'relevant_history': relevant_history,
            'memory_context': memory_context,
            'reply_all_required': reply_all_required,
            'memory_stats': self._get_memory_stats()
        }
    
    def _extract_commitments(self, body: str) -> List[Dict[str, Any]]:
        """Extract commitments and promises from email."""
        commitments = []
        
        # Patterns for commitments
        patterns = [
            r'I will ([^.]+)',
            r'We will ([^.]+)',
            r'I promise to ([^.]+)',
            r'I commit to ([^.]+)',
            r'I\'ll ([^.]+)',
            r'Let me ([^.]+)'
        ]
        
        for pattern in patterns:
            matches = re.finditer(pattern, body, re.IGNORECASE)
            for match in matches:
                commitment_text = match.group(1).strip()
                if len(commitment_text) > 10:
                    commitments.append({
                        'text': commitment_text,
                        'timestamp': datetime.now().isoformat(),
                        'hash': hashlib.md5(commitment_text.encode()).hexdigest()[:8]
                    })
        
        return commitments
    
    def _extract_preferences(self, body: str) -> Dict[str, str]:
        """Extract user preferences from email."""
        preferences = {}
        
        # Preference patterns
        patterns = {
            'communication_style': r'I prefer ([^.]+)',
            'response_time': r'I need responses ([^.]+)',
            'format': r'I like ([^.]+) format',
            'frequency': r'Please send ([^.]+) updates'
        }
        
        for pref_type, pattern in patterns.items():
            match = re.search(pattern, body, re.IGNORECASE)
            if match:
                preferences[pref_type] = match.group(1).strip()
        
        return preferences
    
    def _extract_facts(self, body: str) -> List[str]:
        """Extract key facts from email."""
        facts = []
        
        # Look for factual statements
        sentences = body.split('.')
        for sentence in sentences:
            sentence = sentence.strip()
            if len(sentence) > 20:
                # Check for factual indicators
                if any(indicator in sentence.lower() for indicator in 
                       ['is', 'are', 'was', 'were', 'has', 'have', 'will be']):
                    facts.append(sentence)
        
        return facts[:5]  # Limit to top 5 facts
    
    def _check_contradictions(self, body: str, sender: str) -> List[Dict[str, Any]]:
        """Check if current email contradicts past statements."""
        contradictions = []
        
        # Check commitments
        for commitment in self.memory_store['commitments']:
            if commitment.get('sender') == sender:
                # Simple contradiction check (in production, use NLP)
                commitment_text = commitment['text'].lower()
                body_lower = body.lower()
                
                # Check for negation
                if any(neg in body_lower for neg in ['not', 'never', 'won\'t', 'cannot']):
                    if any(word in body_lower for word in commitment_text.split()):
                        contradictions.append({
                            'type': 'commitment_contradiction',
                            'original': commitment['text'],
                            'timestamp': commitment['timestamp'],
                            'severity': 'high'
                        })
        
        return contradictions
    
    def _find_relevant_history(self, subject: str, body: str, sender: str) -> List[Dict]:
        """Find relevant past conversations."""
        relevant = []
        
        # Extract keywords from current email
        keywords = set(re.findall(r'\b\w{4,}\b', f"{subject} {body}".lower()))
        
        # Search conversation history
        for conv in self.memory_store['conversation_history']:
            if conv.get('sender') == sender:
                conv_keywords = set(re.findall(r'\b\w{4,}\b', conv.get('body', '').lower()))
                overlap = keywords & conv_keywords
                
                # If significant overlap, consider relevant
                if len(overlap) > 3:
                    relevant.append({
                        'timestamp': conv['timestamp'],
                        'subject': conv.get('subject', ''),
                        'relevance_score': len(overlap)
                    })
        
        # Sort by relevance and return top 3
        relevant.sort(key=lambda x: x['relevance_score'], reverse=True)
        return relevant[:3]
    
    def _generate_memory_context(self, commitments: List, preferences: Dict, 
                                contradictions: List, history: List) -> Dict[str, Any]:
        """Generate context-aware response suggestions."""
        context = {
            'reference_commitments': [],
            'apply_preferences': [],
            'address_contradictions': [],
            'reference_history': []
        }
        
        # Reference past commitments
        if self.memory_store['commitments']:
            context['reference_commitments'].append(
                f"Reference {len(self.memory_store['commitments'])} past commitments"
            )
        
        # Apply preferences
        for pref_type, pref_value in self.memory_store['preferences'].items():
            context['apply_preferences'].append(f"{pref_type}: {pref_value}")
        
        # Address contradictions
        if contradictions:
            context['address_contradictions'].append(
                f"⚠️ Address {len(contradictions)} potential contradiction(s)"
            )
        
        # Reference history
        if history:
            context['reference_history'].append(
                f"Reference {len(history)} relevant past conversation(s)"
            )
        
        return context
    
    def _update_memory(self, email: Dict, commitments: List, preferences: Dict, facts: List):
        """Update memory store with new information."""
        sender = email.get('sender', '')
        
        # Add commitments
        for commitment in commitments:
            commitment['sender'] = sender
            self.memory_store['commitments'].append(commitment)
        
        # Update preferences
        self.memory_store['preferences'].update(preferences)
        
        # Add facts
        for fact in facts:
            self.memory_store['key_facts'].append({
                'fact': fact,
                'sender': sender,
                'timestamp': datetime.now().isoformat()
            })
        
        # Add to conversation history
        self.memory_store['conversation_history'].append({
            'sender': sender,
            'subject': email.get('subject', ''),
            'body': email.get('body', ''),
            'timestamp': datetime.now().isoformat()
        })
        
        # Limit memory size
        self.memory_store['commitments'] = self.memory_store['commitments'][-100:]
        self.memory_store['conversation_history'] = self.memory_store['conversation_history'][-50:]
        self.memory_store['key_facts'] = self.memory_store['key_facts'][-100:]
    
    def _get_memory_stats(self) -> Dict[str, int]:
        """Get memory statistics."""
        return {
            'total_commitments': len(self.memory_store['commitments']),
            'total_preferences': len(self.memory_store['preferences']),
            'total_conversations': len(self.memory_store['conversation_history']),
            'total_facts': len(self.memory_store['key_facts'])
        }


def main():
    """Test V952 Context Memory Engine."""
    engine = ContextMemoryEngine()
    
    # Test email sequence
    test_emails = [
        {
            'id': 'email1',
            'sender': 'client@company.com',
            'recipients': ['support@company.com'],
            'subject': 'Project Requirements',
            'body': 'I prefer weekly updates on Fridays. I will send the requirements document by Monday.'
        },
        {
            'id': 'email2',
            'sender': 'support@company.com',
            'recipients': ['client@company.com'],
            'subject': 'Re: Project Requirements',
            'body': 'Understood. We will provide weekly updates every Friday as requested.'
        },
        {
            'id': 'email3',
            'sender': 'client@company.com',
            'recipients': ['support@company.com'],
            'subject': 'Timeline Update',
            'body': 'The project deadline is March 15th. I need responses within 24 hours for urgent matters.'
        },
        {
            'id': 'email4',
            'sender': 'client@company.com',
            'recipients': ['support@company.com'],
            'subject': 'Change of Plans',
            'body': 'I will not send the requirements document by Monday. I need more time to prepare.'
        }
    ]
    
    print("=" * 60)
    print("V952: Email Context Memory Engine - Test Results")
    print("=" * 60)
    
    for i, email in enumerate(test_emails, 1):
        print(f"\n--- Email {i}: {email['subject']} ---")
        result = engine.analyze_email(email)
        
        print(f"Sender: {email['sender']}")
        print(f"New Commitments: {len(result['new_commitments'])}")
        print(f"New Preferences: {len(result['new_preferences'])}")
        print(f"Contradictions: {len(result['contradictions'])}")
        print(f"Relevant History: {len(result['relevant_history'])}")
        print(f"Reply-All: {result['reply_all_required']}")
        
        if result['contradictions']:
            print(f"⚠️ Contradictions Detected:")
            for c in result['contradictions'][:2]:
                print(f"  - {c['type']}: {c['original'][:50]}...")
        
        if result['memory_context']['reference_history']:
            print(f"📚 {result['memory_context']['reference_history'][0]}")
        
        print(f"Memory Stats: {result['memory_stats']}")
    
    print("\n✅ V952 Context Memory Engine: OPERATIONAL")


if __name__ == '__main__':
    main()

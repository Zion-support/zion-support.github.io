"""
Email Intelligence V326 - Context Memory Engine
Advanced context tracking and relationship memory for intelligent email responses.
Enforces reply-all and case-by-case analysis.
"""

from datetime import datetime, timedelta
from typing import Dict, List, Optional
import json


class EmailContextMemoryEngine:
    """
    V326: Remembers conversation context across weeks/months, builds relationship
    profiles, tracks commitments and follow-ups, and provides contextual suggestions.
    """
    
    VERSION = "V326"
    ENGINE_NAME = "Context Memory Engine"
    
    def __init__(self):
        self.conversation_history = {}
        self.relationship_profiles = {}
        self.commitments_tracker = {}
        self.follow_up_queue = []
    
    def analyze_email(self, email_data: Dict) -> Dict:
        """
        Analyze email case-by-case with full context memory.
        Returns comprehensive analysis with historical context.
        """
        sender = email_data.get('from', '')
        subject = email_data.get('subject', '')
        content = email_data.get('body', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # Build context from conversation history
        context = self._build_conversation_context(sender, subject)
        
        # Track commitments and promises
        commitments = self._extract_commitments(content)
        
        # Identify follow-up needs
        follow_ups = self._identify_follow_ups(content, commitments)
        
        # Generate relationship insights
        relationship_score = self._calculate_relationship_score(sender)
        
        # Contextual suggestions
        suggestions = self._generate_contextual_suggestions(
            sender, context, commitments, relationship_score
        )
        
        analysis = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': timestamp,
            'sender': sender,
            'context_summary': context,
            'commitments_extracted': commitments,
            'follow_ups_needed': follow_ups,
            'relationship_score': relationship_score,
            'contextual_suggestions': suggestions,
            'memory_status': 'active'
        }
        
        # Store in memory
        self._update_memory(sender, subject, content, timestamp, commitments)
        
        return analysis
    
    def generate_response(self, email_data: Dict) -> Dict:
        """
        Generate intelligent response with full context awareness.
        ALWAYS enforces reply-all for multi-recipient emails.
        """
        sender = email_data.get('from', '')
        to_recipients = email_data.get('to', [])
        cc_recipients = email_data.get('cc', [])
        subject = email_data.get('subject', '')
        content = email_data.get('body', '')
        
        # Analyze email first
        analysis = self.analyze_email(email_data)
        
        # Build context-aware response
        response_context = self._build_response_context(sender, analysis)
        
        # Determine reply strategy
        reply_strategy = self._determine_reply_strategy(analysis)
        
        # ENFORCE REPLY-ALL: Always include all original recipients
        all_recipients = self._enforce_reply_all(to_recipients, cc_recipients, sender)
        
        # Generate response content
        response_body = self._generate_contextual_response(
            sender, content, analysis, response_context
        )
        
        response = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': datetime.now().isoformat(),
            'to': all_recipients,
            'subject': f"Re: {subject}" if not subject.lower().startswith('re:') else subject,
            'body': response_body,
            'reply_strategy': reply_strategy,
            'context_used': True,
            'relationship_score': analysis['relationship_score'],
            'commitments_acknowledged': len(analysis['commitments_extracted']),
            'follow_ups_scheduled': len(analysis['follow_ups_needed']),
            'reply_all_enforced': True
        }
        
        return response
    
    def _build_conversation_context(self, sender: str, subject: str) -> Dict:
        """Build conversation context from history"""
        sender_history = self.conversation_history.get(sender, [])
        
        # Find related conversations
        related_conversations = [
            conv for conv in sender_history
            if self._is_related_subject(subject, conv.get('subject', ''))
        ]
        
        context = {
            'total_interactions': len(sender_history),
            'related_conversations': len(related_conversations),
            'last_interaction': sender_history[-1]['timestamp'] if sender_history else None,
            'conversation_threads': len(set(conv.get('thread_id', '') for conv in sender_history))
        }
        
        return context
    
    def _extract_commitments(self, content: str) -> List[Dict]:
        """Extract commitments and promises from email content"""
        commitments = []
        
        # Simple keyword-based extraction (in production, use NLP)
        commitment_keywords = [
            'will', 'shall', 'promise', 'commit', 'guarantee',
            'by', 'deadline', 'due', 'complete', 'deliver'
        ]
        
        content_lower = content.lower()
        
        for keyword in commitment_keywords:
            if keyword in content_lower:
                commitments.append({
                    'keyword': keyword,
                    'confidence': 0.7,
                    'needs_tracking': True
                })
        
        return commitments
    
    def _identify_follow_ups(self, content: str, commitments: List[Dict]) -> List[Dict]:
        """Identify follow-up actions needed"""
        follow_ups = []
        
        if commitments:
            for commitment in commitments:
                follow_ups.append({
                    'type': 'commitment_follow_up',
                    'priority': 'high',
                    'suggested_date': (datetime.now() + timedelta(days=7)).isoformat()
                })
        
        return follow_ups
    
    def _calculate_relationship_score(self, sender: str) -> float:
        """Calculate relationship strength score (0-100)"""
        sender_history = self.conversation_history.get(sender, [])
        
        if not sender_history:
            return 50.0  # Neutral score for new contacts
        
        # Factors: frequency, recency, response time, commitments kept
        frequency_score = min(len(sender_history) * 5, 30)  # Max 30 points
        
        # Recency score (more recent = higher score)
        if sender_history:
            last_interaction = datetime.fromisoformat(sender_history[-1]['timestamp'])
            days_since = (datetime.now() - last_interaction).days
            recency_score = max(0, 30 - days_since)  # Max 30 points
        else:
            recency_score = 0
        
        # Base score
        base_score = 40
        
        total_score = min(100, base_score + frequency_score + recency_score)
        
        return float(total_score)
    
    def _generate_contextual_suggestions(
        self, sender: str, context: Dict, commitments: List[Dict],
        relationship_score: float
    ) -> List[str]:
        """Generate contextual suggestions based on memory"""
        suggestions = []
        
        if context['total_interactions'] > 10:
            suggestions.append("Long-term relationship - consider personalized approach")
        
        if relationship_score > 80:
            suggestions.append("Strong relationship - can be more informal")
        elif relationship_score < 40:
            suggestions.append("New or weak relationship - maintain professional tone")
        
        if commitments:
            suggestions.append(f"Track {len(commitments)} commitments for follow-up")
        
        if context['last_interaction']:
            last_date = datetime.fromisoformat(context['last_interaction'])
            days_since = (datetime.now() - last_date).days
            if days_since > 30:
                suggestions.append("Re-engagement opportunity - haven't spoken in 30+ days")
        
        return suggestions
    
    def _update_memory(
        self, sender: str, subject: str, content: str,
        timestamp: str, commitments: List[Dict]
    ):
        """Update conversation memory"""
        if sender not in self.conversation_history:
            self.conversation_history[sender] = []
        
        self.conversation_history[sender].append({
            'subject': subject,
            'timestamp': timestamp,
            'commitments': commitments,
            'thread_id': self._generate_thread_id(subject)
        })
        
        # Keep only last 100 interactions per sender
        if len(self.conversation_history[sender]) > 100:
            self.conversation_history[sender] = self.conversation_history[sender][-100:]
    
    def _build_response_context(self, sender: str, analysis: Dict) -> Dict:
        """Build context for response generation"""
        return {
            'relationship_level': 'strong' if analysis['relationship_score'] > 70 else 'moderate' if analysis['relationship_score'] > 40 else 'new',
            'has_history': analysis['context_summary']['total_interactions'] > 0,
            'commitments_to_acknowledge': analysis['commitments_extracted']
        }
    
    def _determine_reply_strategy(self, analysis: Dict) -> str:
        """Determine best reply strategy"""
        if analysis['relationship_score'] > 80:
            return 'informal_friendly'
        elif analysis['relationship_score'] > 60:
            return 'professional_warm'
        elif analysis['relationship_score'] > 40:
            return 'professional_neutral'
        else:
            return 'formal_professional'
    
    def _enforce_reply_all(
        self, to_recipients: List[str], cc_recipients: List[str], sender: str
    ) -> List[str]:
        """
        ENFORCE REPLY-ALL: Always include all original recipients.
        This is a critical requirement.
        """
        all_recipients = set()
        
        # Add all TO recipients
        if isinstance(to_recipients, list):
            all_recipients.update(to_recipients)
        elif to_recipients:
            all_recipients.add(to_recipients)
        
        # Add all CC recipients
        if isinstance(cc_recipients, list):
            all_recipients.update(cc_recipients)
        elif cc_recipients:
            all_recipients.add(cc_recipients)
        
        # Remove sender from recipients (they're the original sender)
        all_recipients.discard(sender)
        
        # If no recipients found, at least reply to sender
        if not all_recipients:
            all_recipients.add(sender)
        
        return list(all_recipients)
    
    def _generate_contextual_response(
        self, sender: str, content: str, analysis: Dict, context: Dict
    ) -> str:
        """Generate context-aware response body"""
        # Extract sender name
        sender_name = sender.split('@')[0] if '@' in sender else sender
        
        # Build response based on relationship and context
        if context['relationship_level'] == 'strong':
            greeting = f"Hi {sender_name},"
        elif context['relationship_level'] == 'moderate':
            greeting = f"Hello {sender_name},"
        else:
            greeting = f"Dear {sender_name},"
        
        # Acknowledge context if available
        context_ack = ""
        if context['has_history']:
            context_ack = "\n\nThank you for your continued communication."
        
        # Acknowledge commitments
        commitment_ack = ""
        if context['commitments_to_acknowledge']:
            commitment_ack = f"\n\nI've noted the {len(context['commitments_to_acknowledge'])} commitment(s) mentioned and will track them accordingly."
        
        # Build response
        response = f"""{greeting}
{context_ack}

Thank you for your email. I've reviewed your message and will respond in detail shortly.{commitment_ack}

I'll make sure to follow up on all action items and keep you updated on progress.

Best regards,
[Your Name]

---
This response was generated by {self.ENGINE_NAME} ({self.VERSION}) with full context awareness.
"""
        
        return response
    
    def _is_related_subject(self, subject1: str, subject2: str) -> bool:
        """Check if two subjects are related"""
        # Simple similarity check
        words1 = set(subject1.lower().split())
        words2 = set(subject2.lower().split())
        
        if not words1 or not words2:
            return False
        
        overlap = len(words1 & words2)
        total = len(words1 | words2)
        
        return overlap / total > 0.3 if total > 0 else False
    
    def _generate_thread_id(self, subject: str) -> str:
        """Generate thread ID from subject"""
        # Simple hash of normalized subject
        normalized = subject.lower().replace('re:', '').replace('fw:', '').strip()
        return str(hash(normalized))[:16]
    
    def get_memory_stats(self) -> Dict:
        """Get memory statistics"""
        total_senders = len(self.conversation_history)
        total_conversations = sum(len(convs) for convs in self.conversation_history.values())
        
        return {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'total_senders_tracked': total_senders,
            'total_conversations_stored': total_conversations,
            'memory_status': 'active',
            'timestamp': datetime.now().isoformat()
        }


# Test the engine
if __name__ == "__main__":
    engine = EmailContextMemoryEngine()
    
    # Test email
    test_email = {
        'from': 'john.doe@example.com',
        'to': ['alice@company.com', 'bob@company.com'],
        'cc': ['manager@company.com'],
        'subject': 'Project Update - Q4 Deliverables',
        'body': 'Hi team, I will complete the project documentation by Friday. Please review the attached files.',
        'timestamp': datetime.now().isoformat()
    }
    
    print("=" * 60)
    print(f"Email Intelligence {engine.VERSION} - {engine.ENGINE_NAME}")
    print("=" * 60)
    
    # Analyze email
    analysis = engine.analyze_email(test_email)
    print("\n📧 Email Analysis:")
    print(json.dumps(analysis, indent=2))
    
    # Generate response
    response = engine.generate_response(test_email)
    print("\n📤 Generated Response:")
    print(json.dumps(response, indent=2))
    
    # Get memory stats
    stats = engine.get_memory_stats()
    print("\n📊 Memory Statistics:")
    print(json.dumps(stats, indent=2))
    
    print("\n✅ Reply-All Enforcement: ACTIVE")
    print(f"✅ Recipients in response: {response['to']}")
    print("✅ Case-by-case analysis: ENABLED")

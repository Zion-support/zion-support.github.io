"""
V145: AI Email Auto-Responder with Context Memory
Smart auto-responder that remembers conversations and routes intelligently.
"""
import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from enum import Enum
from collections import defaultdict


class UrgencyLevel(Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"


class ResponseType(Enum):
    ACKNOWLEDGMENT = "acknowledgment"
    OUT_OF_OFFICE = "out_of_office"
    DELEGATION = "delegation"
    AUTO_ANSWER = "auto_answer"
    ESCALATION = "escalation"


class ContextMemory:
    """Stores and retrieves conversation context per contact."""
    
    def __init__(self):
        self.conversations: Dict[str, List[Dict]] = defaultdict(list)
        self.contact_preferences: Dict[str, Dict] = {}
        self.response_patterns: Dict[str, List[Dict]] = defaultdict(list)
        
    def store_interaction(self, sender: str, email_data: Dict, response: Optional[str] = None):
        """Store email interaction in memory."""
        interaction = {
            'timestamp': datetime.now().isoformat(),
            'subject': email_data.get('subject', ''),
            'content': email_data.get('content', ''),
            'response': response,
            'urgency': email_data.get('urgency', 'medium'),
            'tags': self._extract_tags(email_data.get('content', ''))
        }
        self.conversations[sender].append(interaction)
        
        # Keep only last 50 interactions per contact
        if len(self.conversations[sender]) > 50:
            self.conversations[sender] = self.conversations[sender][-50:]
    
    def get_context(self, sender: str, days_back: int = 30) -> Dict:
        """Retrieve conversation context for a sender."""
        if sender not in self.conversations:
            return {'history': [], 'topics': [], 'sentiment': 'neutral'}
        
        # Filter by time window
        cutoff = datetime.now() - timedelta(days=days_back)
        recent = [
            conv for conv in self.conversations[sender]
            if datetime.fromisoformat(conv['timestamp']) > cutoff
        ]
        
        if not recent:
            return {'history': [], 'topics': [], 'sentiment': 'neutral'}
        
        # Extract common topics
        all_tags = []
        for conv in recent:
            all_tags.extend(conv.get('tags', []))
        
        topic_counts = defaultdict(int)
        for tag in all_tags:
            topic_counts[tag] += 1
        
        top_topics = sorted(topic_counts.items(), key=lambda x: x[1], reverse=True)[:5]
        
        # Determine overall sentiment
        sentiment = self._analyze_sentiment(recent)
        
        return {
            'history': recent[-5:],  # Last 5 interactions
            'topics': [topic for topic, _ in top_topics],
            'sentiment': sentiment,
            'interaction_count': len(recent)
        }
    
    def _extract_tags(self, content: str) -> List[str]:
        """Extract topic tags from content."""
        tags = []
        
        # Common business topics
        topic_keywords = {
            'project': ['project', 'initiative', 'program'],
            'deadline': ['deadline', 'due', 'timeline', 'schedule'],
            'budget': ['budget', 'cost', 'pricing', 'expense'],
            'technical': ['bug', 'error', 'issue', 'technical', 'system'],
            'meeting': ['meeting', 'call', 'discussion', 'appointment'],
            'proposal': ['proposal', 'quote', 'estimate', 'offer'],
            'support': ['help', 'support', 'assistance', 'question'],
            'feedback': ['feedback', 'review', 'evaluation', 'survey']
        }
        
        content_lower = content.lower()
        for tag, keywords in topic_keywords.items():
            if any(kw in content_lower for kw in keywords):
                tags.append(tag)
        
        return tags
    
    def _analyze_sentiment(self, interactions: List[Dict]) -> str:
        """Analyze sentiment from recent interactions."""
        positive_words = ['thanks', 'great', 'excellent', 'appreciate', 'good', 'perfect']
        negative_words = ['frustrated', 'problem', 'issue', 'disappointed', 'urgent', 'asap']
        
        pos_count = 0
        neg_count = 0
        
        for interaction in interactions:
            content = interaction.get('content', '').lower()
            pos_count += sum(1 for word in positive_words if word in content)
            neg_count += sum(1 for word in negative_words if word in content)
        
        if pos_count > neg_count * 1.5:
            return 'positive'
        elif neg_count > pos_count * 1.5:
            return 'negative'
        return 'neutral'


class AutoResponder:
    """Intelligent auto-responder with context awareness."""
    
    def __init__(self):
        self.memory = ContextMemory()
        self.delegates: Dict[str, List[str]] = defaultdict(list)  # urgency -> delegate emails
        self.response_templates: Dict[ResponseType, List[str]] = {
            ResponseType.ACKNOWLEDGMENT: [
                "Thank you for your email. I've received your message and will respond within {timeframe}.",
                "I've received your email regarding {topic}. I'll review it and get back to you shortly.",
                "Thanks for reaching out. I'll look into this and respond by {deadline}."
            ],
            ResponseType.OUT_OF_OFFICE: [
                "Thank you for your email. I'm currently out of the office and will return on {return_date}. For urgent matters, please contact {delegate}.",
                "I'm away until {return_date} with limited access to email. I'll respond to your message about {topic} upon my return."
            ],
            ResponseType.DELEGATION: [
                "I've forwarded your email to {delegate} who can better assist with {topic}. They'll be in touch shortly.",
                "{delegate} is the best person to help with this. I've copied them on this email and they'll respond soon."
            ],
            ResponseType.AUTO_ANSWER: [
                "Based on your question about {topic}, here's what I found: {answer}",
                "Regarding {topic}: {answer}. Let me know if you need more details."
            ],
            ResponseType.ESCALATION: [
                "I understand this is urgent. I've escalated this to {delegate} who will prioritize your request.",
                "This requires immediate attention. I've alerted {delegate} and they'll contact you within {timeframe}."
            ]
        }
        self.reply_all_count = 0
        self.auto_responses_sent = 0
        self.delegations = 0
        
    def process_email(self, sender: str, email_data: Dict, 
                     recipients: List[str], is_out_of_office: bool = False) -> Dict:
        """Process incoming email and generate appropriate response."""
        
        # Store in memory
        self.memory.store_interaction(sender, email_data)
        
        # Get context
        context = self.memory.get_context(sender)
        
        # Assess urgency
        urgency = self._assess_urgency(email_data, context)
        
        # Determine response type
        response_type = self._determine_response_type(
            urgency, is_out_of_office, context, email_data
        )
        
        # Generate response
        response_data = self._generate_response(
            response_type, sender, email_data, context, urgency, recipients
        )
        
        # Store response in memory
        self.memory.store_interaction(sender, email_data, response_data['content'])
        
        # Track reply-all
        if len(recipients) > 1 and response_data.get('reply_all', False):
            self.reply_all_count += 1
        
        self.auto_responses_sent += 1
        
        return response_data
    
    def _assess_urgency(self, email_data: Dict, context: Dict) -> UrgencyLevel:
        """Assess email urgency case-by-case."""
        content = email_data.get('content', '').lower()
        subject = email_data.get('subject', '').lower()
        
        # Critical indicators
        critical_words = ['critical', 'emergency', 'production down', 'security breach', 'immediately']
        if any(word in content or word in subject for word in critical_words):
            return UrgencyLevel.CRITICAL
        
        # High urgency indicators
        high_words = ['urgent', 'asap', 'deadline today', 'time-sensitive', 'important']
        if any(word in content or word in subject for word in high_words):
            return UrgencyLevel.HIGH
        
        # Check context - repeated issues increase urgency
        if context['interaction_count'] > 3 and context['sentiment'] == 'negative':
            return UrgencyLevel.HIGH
        
        # Medium urgency
        medium_words = ['when', 'timeline', 'status', 'update', 'follow-up']
        if any(word in content or word in subject for word in medium_words):
            return UrgencyLevel.MEDIUM
        
        return UrgencyLevel.LOW
    
    def _determine_response_type(self, urgency: UrgencyLevel, is_out_of_office: bool,
                                 context: Dict, email_data: Dict) -> ResponseType:
        """Determine appropriate response type."""
        
        # Critical always escalates
        if urgency == UrgencyLevel.CRITICAL:
            return ResponseType.ESCALATION
        
        # Out of office
        if is_out_of_office:
            if urgency in [UrgencyLevel.HIGH, UrgencyLevel.CRITICAL]:
                return ResponseType.DELEGATION
            return ResponseType.OUT_OF_OFFICE
        
        # High urgency with delegate available
        if urgency == UrgencyLevel.HIGH and self.delegates.get('high'):
            return ResponseType.DELEGATION
        
        # Check if we can auto-answer (FAQ-like questions)
        if self._can_auto_answer(email_data, context):
            return ResponseType.AUTO_ANSWER
        
        # Default acknowledgment
        return ResponseType.ACKNOWLEDGMENT
    
    def _can_auto_answer(self, email_data: Dict, context: Dict) -> bool:
        """Determine if we can provide an automatic answer."""
        content = email_data.get('content', '').lower()
        
        # Question indicators
        question_patterns = [
            r'\bhow (do|can|to)\b',
            r'\bwhat (is|are)\b',
            r'\bwhen (is|does|will)\b',
            r'\bwhere (is|can)\b',
            r'\?$'
        ]
        
        is_question = any(re.search(pattern, content) for pattern in question_patterns)
        
        # Check if we have relevant context
        has_context = len(context['topics']) > 0
        
        return is_question and has_context
    
    def _generate_response(self, response_type: ResponseType, sender: str,
                          email_data: Dict, context: Dict, urgency: UrgencyLevel,
                          recipients: List[str]) -> Dict:
        """Generate appropriate response."""
        
        templates = self.response_templates[response_type]
        template = templates[0]  # Use first template (could randomize)
        
        # Fill template variables
        topic = context['topics'][0] if context['topics'] else 'your inquiry'
        timeframe = self._get_timeframe(urgency)
        delegate = self._get_delegate(urgency)
        
        content = template.format(
            topic=topic,
            timeframe=timeframe,
            deadline=self._calculate_deadline(urgency),
            return_date=self._get_return_date(),
            delegate=delegate,
            answer="I'll provide a detailed response shortly",
            sender=sender
        )
        
        # Determine if reply-all is needed
        reply_all = self._should_reply_all(response_type, recipients, urgency)
        
        # Track delegations
        if response_type in [ResponseType.DELEGATION, ResponseType.ESCALATION]:
            self.delegations += 1
        
        return {
            'content': content,
            'response_type': response_type.value,
            'urgency': urgency.value,
            'reply_all': reply_all,
            'recipients': recipients if reply_all else [sender],
            'delegate': delegate if response_type in [ResponseType.DELEGATION, ResponseType.ESCALATION] else None,
            'context_used': len(context['topics']) > 0,
            'timestamp': datetime.now().isoformat()
        }
    
    def _get_timeframe(self, urgency: UrgencyLevel) -> str:
        timeframes = {
            UrgencyLevel.CRITICAL: '1 hour',
            UrgencyLevel.HIGH: '4 hours',
            UrgencyLevel.MEDIUM: '24 hours',
            UrgencyLevel.LOW: '48 hours'
        }
        return timeframes[urgency]
    
    def _calculate_deadline(self, urgency: UrgencyLevel) -> str:
        hours = {
            UrgencyLevel.CRITICAL: 1,
            UrgencyLevel.HIGH: 4,
            UrgencyLevel.MEDIUM: 24,
            UrgencyLevel.LOW: 48
        }
        deadline = datetime.now() + timedelta(hours=hours[urgency])
        return deadline.strftime('%Y-%m-%d %H:%M')
    
    def _get_return_date(self) -> str:
        return_date = datetime.now() + timedelta(days=3)
        return return_date.strftime('%Y-%m-%d')
    
    def _get_delegate(self, urgency: UrgencyLevel) -> str:
        delegates = self.delegates.get(urgency.value, [])
        if delegates:
            return delegates[0]
        return 'support@company.com'
    
    def _should_reply_all(self, response_type: ResponseType, 
                         recipients: List[str], urgency: UrgencyLevel) -> bool:
        """Determine if reply-all is appropriate."""
        
        # Always reply-all for critical/high urgency
        if urgency in [UrgencyLevel.CRITICAL, UrgencyLevel.HIGH]:
            return len(recipients) > 1
        
        # Reply-all for delegations
        if response_type == ResponseType.DELEGATION:
            return len(recipients) > 1
        
        # Don't reply-all for simple acknowledgments
        if response_type == ResponseType.ACKNOWLEDGMENT:
            return False
        
        return len(recipients) > 1
    
    def register_delegate(self, urgency: str, delegate_email: str):
        """Register a delegate for specific urgency levels."""
        self.delegates[urgency].append(delegate_email)
    
    def get_stats(self) -> Dict:
        """Get responder statistics."""
        return {
            'auto_responses_sent': self.auto_responses_sent,
            'delegations': self.delegations,
            'reply_all_enforcements': self.reply_all_count,
            'contacts_tracked': len(self.memory.conversations),
            'delegation_rate': self.delegations / max(1, self.auto_responses_sent)
        }


def demo():
    """Demonstrate V145 auto-responder."""
    responder = AutoResponder()
    
    # Register delegates
    responder.register_delegate('high', 'manager@company.com')
    responder.register_delegate('critical', 'cto@company.com')
    
    print("=" * 60)
    print("V145: AI Email Auto-Responder with Context Memory - Demo")
    print("=" * 60)
    
    # Case 1: First contact - simple inquiry
    print("\n[Case 1: First Contact - General Inquiry]")
    email1 = {
        'subject': 'Question about pricing',
        'content': 'Hi, I was wondering what your pricing is for the enterprise plan?'
    }
    response1 = responder.process_email('john@client.com', email1, ['sales@company.com'])
    print(f"Response Type: {response1['response_type']}")
    print(f"Content: {response1['content']}")
    print(f"Reply-All: {response1['reply_all']}")
    
    # Case 2: Urgent issue
    print("\n[Case 2: Urgent Production Issue]")
    email2 = {
        'subject': 'URGENT: System down',
        'content': 'Our production system is completely down! We need help ASAP!'
    }
    response2 = responder.process_email(
        'sarah@client.com', 
        email2, 
        ['support@company.com', 'manager@company.com']
    )
    print(f"Response Type: {response2['response_type']}")
    print(f"Urgency: {response2['urgency']}")
    print(f"Content: {response2['content']}")
    print(f"Reply-All: {response2['reply_all']}")
    print(f"Delegate: {response2['delegate']}")
    
    # Case 3: Follow-up with context
    print("\n[Case 3: Follow-up Question (with context)")
    email3 = {
        'subject': 'Re: Question about pricing',
        'content': 'Thanks for the info. How does the billing work for additional users?'
    }
    response3 = responder.process_email('john@client.com', email3, ['sales@company.com'])
    print(f"Response Type: {response3['response_type']}")
    print(f"Context Used: {response3['context_used']}")
    print(f"Content: {response3['content']}")
    
    # Statistics
    print("\n" + "=" * 60)
    print("\n[Responder Statistics]")
    stats = responder.get_stats()
    for key, value in stats.items():
        print(f"{key}: {value}")


if __name__ == "__main__":
    demo()

#!/usr/bin/env python3
"""
V1098 - Email Thread Summarizer Pro
Generate comprehensive summaries of long email threads
Extract key decisions and action items
Create executive briefs from lengthy conversations
Highlight important milestones and changes
Provide thread timeline visualization
"""

import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Any, Tuple
from collections import Counter

class ThreadSummarizerPro:
    def __init__(self):
        self.threads = {}
    
    def add_message(self, thread_id: str, message: Dict[str, Any]):
        """Add a message to a thread"""
        if thread_id not in self.threads:
            self.threads[thread_id] = []
        
        entry = {
            'from': message.get('from', 'unknown'),
            'to': message.get('to', []),
            'subject': message.get('subject', ''),
            'body': message.get('body', ''),
            'timestamp': message.get('timestamp', datetime.now()),
            'attachments': message.get('attachments', []),
            'importance': message.get('importance', 'normal')
        }
        
        self.threads[thread_id].append(entry)
        self.threads[thread_id].sort(key=lambda x: x['timestamp'])
        return entry
    
    def extract_key_sentences(self, text: str, top_n: int = 5) -> List[str]:
        """Extract most important sentences from text"""
        # Split into sentences
        sentences = re.split(r'[.!?]+', text)
        sentences = [s.strip() for s in sentences if len(s.strip()) > 20]
        
        if not sentences:
            return []
        
        # Score sentences based on importance indicators
        importance_keywords = [
            'important', 'critical', 'urgent', 'deadline', 'must', 'required',
            'decision', 'approved', 'rejected', 'agreed', 'confirmed',
            'action', 'task', 'responsible', 'assigned', 'deliver',
            'budget', 'cost', 'price', 'revenue', 'profit',
            'risk', 'issue', 'problem', 'solution', 'fix'
        ]
        
        scored = []
        for i, sentence in enumerate(sentences):
            score = 0
            lower = sentence.lower()
            
            # Keyword scoring
            for keyword in importance_keywords:
                if keyword in lower:
                    score += 2
            
            # Position scoring (first and last sentences are more important)
            if i == 0:
                score += 3
            elif i == len(sentences) - 1:
                score += 2
            
            # Length scoring (medium-length sentences are best)
            word_count = len(sentence.split())
            if 10 <= word_count <= 30:
                score += 1
            elif word_count > 50:
                score -= 1
            
            scored.append((sentence, score))
        
        # Sort by score and return top N
        scored.sort(key=lambda x: x[1], reverse=True)
        return [s for s, _ in scored[:top_n]]
    
    def extract_decisions(self, thread_messages: List[Dict]) -> List[Dict[str, str]]:
        """Extract decisions made in the thread"""
        decisions = []
        decision_patterns = [
            r'(?:we|I|the team) (?:have |will |shall )?(?:decided|agreed|approved|confirmed)\s+(.+?)(?:\.|$)',
            r'(?:the )?decision (?:is|was)\s+(.+?)(?:\.|$)',
            r'(?:let\'?s?|we should|we will|we\'ll)\s+(.+?)(?:\.|$)',
            r'(?:approved|rejected|accepted|declined)[:\s]+(.+?)(?:\.|$)'
        ]
        
        for msg in thread_messages:
            body = msg.get('body', '').lower()
            for pattern in decision_patterns:
                matches = re.findall(pattern, body, re.IGNORECASE)
                for match in matches:
                    decisions.append({
                        'decision': match.strip(),
                        'made_by': msg['from'],
                        'timestamp': msg['timestamp'].isoformat() if isinstance(msg['timestamp'], datetime) else str(msg['timestamp']),
                        'confidence': 'high' if 'approved' in body or 'decided' in body else 'medium'
                    })
        
        return decisions
    
    def extract_action_items(self, thread_messages: List[Dict]) -> List[Dict[str, str]]:
        """Extract action items and tasks from the thread"""
        actions = []
        action_patterns = [
            r'(?:please|could you|can you|you need to|you should)\s+(.+?)(?:\.|$)',
            r'(?:action item|task|todo|follow[- ]?up)[:\s]+(.+?)(?:\.|$)',
            r'(?:I will|I\'ll|we will|we\'ll)\s+(.+?)(?:\.|$)',
            r'(?:deadline|due|by)\s+(.+?)(?:\.|$)'
        ]
        
        for msg in thread_messages:
            body = msg.get('body', '').lower()
            for pattern in action_patterns:
                matches = re.findall(pattern, body, re.IGNORECASE)
                for match in matches:
                    assignee = self.detect_assignee(match, msg)
                    actions.append({
                        'action': match.strip(),
                        'assigned_to': assignee,
                        'requested_by': msg['from'],
                        'timestamp': msg['timestamp'].isoformat() if isinstance(msg['timestamp'], datetime) else str(msg['timestamp']),
                        'deadline': self.detect_deadline(match)
                    })
        
        return actions
    
    def detect_assignee(self, text: str, message: Dict) -> str:
        """Detect who is assigned the action"""
        text_lower = text.lower()
        
        if 'i will' in text_lower or "i'll" in text_lower:
            return message['from']
        
        # Check for @mentions or names
        mentions = re.findall(r'@(\w+)', text)
        if mentions:
            return mentions[0]
        
        return 'unassigned'
    
    def detect_deadline(self, text: str) -> str:
        """Detect deadline mentions in text"""
        deadline_patterns = [
            r'(?:by|deadline|due|before)\s+(\w+\s+\d+)',
            r'(?:by|deadline|due|before)\s+(tomorrow|today|next week|next month)',
            r'(\d{1,2}/\d{1,2}/\d{2,4})',
            r'(\d{4}-\d{2}-\d{2})'
        ]
        
        for pattern in deadline_patterns:
            match = re.search(pattern, text, re.IGNORECASE)
            if match:
                return match.group(1)
        
        return 'no deadline specified'
    
    def detect_sentiment_shifts(self, thread_messages: List[Dict]) -> List[Dict]:
        """Detect sentiment changes throughout the thread"""
        shifts = []
        prev_sentiment = 0
        
        positive = ['great', 'excellent', 'happy', 'pleased', 'thank', 'good', 'wonderful']
        negative = ['bad', 'terrible', 'frustrated', 'angry', 'disappointed', 'problem', 'issue']
        
        for msg in thread_messages:
            body = msg.get('body', '').lower()
            pos = sum(1 for w in positive if w in body)
            neg = sum(1 for w in negative if w in body)
            
            sentiment = (pos - neg) / max(pos + neg, 1)
            
            if abs(sentiment - prev_sentiment) > 0.3 and len(shifts) > 0:
                direction = 'positive' if sentiment > prev_sentiment else 'negative'
                shifts.append({
                    'message_index': len(shifts),
                    'from': msg['from'],
                    'direction': direction,
                    'shift_magnitude': round(abs(sentiment - prev_sentiment), 2),
                    'context': msg['body'][:100]
                })
            
            prev_sentiment = sentiment
        
        return shifts
    
    def create_timeline(self, thread_messages: List[Dict]) -> List[Dict]:
        """Create a thread timeline with key events"""
        timeline = []
        
        for i, msg in enumerate(thread_messages):
            event = {
                'index': i,
                'timestamp': msg['timestamp'].isoformat() if isinstance(msg['timestamp'], datetime) else str(msg['timestamp']),
                'from': msg['from'],
                'type': 'message',
                'has_attachments': len(msg.get('attachments', [])) > 0,
                'preview': msg['body'][:100],
                'participants_count': len(msg.get('to', [])) + 1
            }
            timeline.append(event)
        
        return timeline
    
    def generate_executive_brief(self, thread_id: str) -> Dict[str, Any]:
        """Generate an executive brief from the thread"""
        if thread_id not in self.threads:
            return {'error': 'Thread not found'}
        
        messages = self.threads[thread_id]
        
        # Gather all participants
        participants = set()
        for msg in messages:
            participants.add(msg['from'])
            for recipient in msg.get('to', []):
                participants.add(recipient)
        
        # Word count and reading time
        total_words = sum(len(msg['body'].split()) for msg in messages)
        reading_time_minutes = max(1, total_words // 200)
        
        # Extract key sentences from all messages
        all_text = ' '.join(msg['body'] for msg in messages)
        key_sentences = self.extract_key_sentences(all_text, top_n=7)
        
        # Get decisions, actions, and sentiment shifts
        decisions = self.extract_decisions(messages)
        actions = self.extract_action_items(messages)
        sentiment_shifts = self.detect_sentiment_shifts(messages)
        
        return {
            'thread_id': thread_id,
            'subject': messages[0]['subject'] if messages else 'No subject',
            'participants': list(participants),
            'message_count': len(messages),
            'total_words': total_words,
            'estimated_reading_time': f'{reading_time_minutes} minutes',
            'summary_sentences': key_sentences,
            'decisions_made': decisions,
            'action_items': actions,
            'sentiment_shifts': sentiment_shifts,
            'duration_days': (messages[-1]['timestamp'] - messages[0]['timestamp']).days if len(messages) > 1 else 0,
            'last_activity': messages[-1]['timestamp'].isoformat() if isinstance(messages[-1]['timestamp'], datetime) else str(messages[-1]['timestamp'])
        }
    
    def summarize_thread(self, thread_id: str, style: str = 'executive') -> Dict[str, Any]:
        """Generate thread summary in different styles"""
        brief = self.generate_executive_brief(thread_id)
        
        if 'error' in brief:
            return brief
        
        if style == 'executive':
            return {
                'style': 'executive',
                'headline': f"{brief['message_count']} messages, {len(brief['decisions_made'])} decisions, {len(brief['action_items'])} action items",
                'key_points': brief['summary_sentences'][:5],
                'decisions': [d['decision'] for d in brief['decisions_made']],
                'actions': [{'action': a['action'], 'assigned_to': a['assigned_to']} for a in brief['action_items']],
                'status': 'active' if brief['duration_days'] < 7 else 'stale'
            }
        elif style == 'detailed':
            return brief
        elif style == 'bullet':
            return {
                'style': 'bullet',
                'points': [
                    f"Thread: {brief['subject']}",
                    f"Participants: {', '.join(brief['participants'][:5])}",
                    f"Messages: {brief['message_count']}",
                    f"Duration: {brief['duration_days']} days",
                    f"Decisions: {len(brief['decisions_made'])}",
                    f"Action Items: {len(brief['action_items'])}",
                    f"Key: {brief['summary_sentences'][0]}" if brief['summary_sentences'] else "No key points extracted"
                ]
            }
        
        return brief
    
    def process_email(self, email_data: Dict[str, Any]) -> Dict[str, Any]:
        """Process incoming email and summarize thread"""
        thread_id = email_data.get('thread_id', email_data.get('message_id', 'unknown'))
        recipients = email_data.get('to', [])
        
        # Add message to thread
        self.add_message(thread_id, email_data)
        
        # Generate summary
        summary = self.summarize_thread(thread_id, style='executive')
        timeline = self.create_timeline(self.threads.get(thread_id, []))
        
        # Reply-all enforcement
        reply_all = len(recipients) > 1
        
        return {
            'engine': 'V1098 - Thread Summarizer Pro',
            'thread_id': thread_id,
            'summary': summary,
            'timeline': timeline[-5:],  # Last 5 events
            'reply_all_required': reply_all,
            'action': self.determine_action(summary)
        }
    
    def determine_action(self, summary: Dict) -> str:
        """Determine action based on thread summary"""
        if 'error' in summary:
            return 'Start new thread tracking'
        
        actions = summary.get('action_items', [])
        decisions = summary.get('decisions_made', [])
        
        if len(actions) > 3:
            return 'Multiple pending action items - consolidate and assign owners'
        elif summary.get('status') == 'stale':
            return 'Thread has gone stale - follow up for status update'
        elif len(decisions) > 0:
            return 'Decisions made - ensure all stakeholders are informed'
        else:
            return 'Monitor thread for new developments'


if __name__ == '__main__':
    summarizer = ThreadSummarizerPro()
    
    now = datetime.now()
    
    # Add test messages to a thread
    test_messages = [
        {
            'from': 'alice@example.com',
            'to': ['bob@example.com', 'carol@example.com'],
            'subject': 'Q4 Budget Approval',
            'body': 'We need to finalize the Q4 budget by Friday. The marketing team needs $50K for the campaign launch.',
            'timestamp': now - timedelta(days=5)
        },
        {
            'from': 'bob@example.com',
            'to': ['alice@example.com', 'carol@example.com'],
            'subject': 'Re: Q4 Budget Approval',
            'body': 'I have reviewed the numbers and approved the $50K allocation. Please proceed with the campaign planning.',
            'timestamp': now - timedelta(days=4)
        },
        {
            'from': 'carol@example.com',
            'to': ['alice@example.com', 'bob@example.com'],
            'subject': 'Re: Q4 Budget Approval',
            'body': 'Great news! I will coordinate with the design team. Bob, can you please send the vendor contracts by Wednesday?',
            'timestamp': now - timedelta(days=3)
        },
        {
            'from': 'bob@example.com',
            'to': ['alice@example.com', 'carol@example.com'],
            'subject': 'Re: Q4 Budget Approval',
            'body': 'I\'ll send the contracts tomorrow. There is a problem with one vendor that we need to resolve first.',
            'timestamp': now - timedelta(days=2)
        }
    ]
    
    print("V1098 - Thread Summarizer Pro Test")
    print("=" * 60)
    
    for msg in test_messages:
        summarizer.add_message('thread_001', msg)
    
    # Test executive brief
    brief = summarizer.generate_executive_brief('thread_001')
    print(json.dumps(brief, indent=2, default=str))
    
    # Test different summary styles
    print("\n--- Executive Summary ---")
    print(json.dumps(summarizer.summarize_thread('thread_001', 'executive'), indent=2))
    
    print("\n--- Bullet Summary ---")
    print(json.dumps(summarizer.summarize_thread('thread_001', 'bullet'), indent=2))
    
    # Test process_email
    print("\n--- Process Email ---")
    result = summarizer.process_email(test_messages[-1])
    print(json.dumps(result, indent=2, default=str))

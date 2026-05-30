"""
V383: Email Document Summarizer

Extracts and summarizes key information from email attachments and long email bodies,
providing concise executive summaries and action items.
"""

import json
import re
from datetime import datetime
from typing import Dict, List


class DocumentSummarizer:
    """Summarizes email content and attachments."""
    
    def __init__(self):
        self.sentence_endings = re.compile(r'[.!?]+')
        
    def extract_key_sentences(self, text: str, max_sentences: int = 5) -> List[str]:
        """Extract key sentences from text based on importance heuristics."""
        sentences = [s.strip() for s in self.sentence_endings.split(text) if len(s.strip()) > 20]
        
        # Score sentences based on keywords
        important_keywords = [
            'important', 'critical', 'urgent', 'deadline', 'action', 'required',
            'must', 'should', 'need', 'please', 'request', 'decision', 'approval'
        ]
        
        scored_sentences = []
        for i, sentence in enumerate(sentences):
            score = 0
            lower_sentence = sentence.lower()
            
            # Keyword scoring
            for keyword in important_keywords:
                if keyword in lower_sentence:
                    score += 2
            
            # Position scoring (first and last sentences are important)
            if i == 0:
                score += 3
            elif i == len(sentences) - 1:
                score += 2
            
            # Length scoring (medium-length sentences are better)
            word_count = len(sentence.split())
            if 10 <= word_count <= 30:
                score += 1
            
            scored_sentences.append((score, sentence))
        
        # Sort by score and return top sentences
        scored_sentences.sort(key=lambda x: x[0], reverse=True)
        return [s[1] for s in scored_sentences[:max_sentences]]
    
    def extract_action_items(self, text: str) -> List[str]:
        """Extract action items from text."""
        action_patterns = [
            r'(?:please|kindly)\s+([^.!?]+)',
            r'(?:need to|must|should|have to)\s+([^.!?]+)',
            r'(?:action item|task|todo):\s*([^.!?]+)',
            r'(?:deadline|due date|by):\s*([^.!?]+)'
        ]
        
        action_items = []
        for pattern in action_patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            action_items.extend([item.strip() for item in matches])
        
        return list(set(action_items))[:10]  # Return unique items, max 10
    
    def summarize_email(self, email: Dict) -> Dict:
        """
        Summarize email content and extract key information.
        
        Args:
            email: Email dict with 'body', 'subject', 'sender' keys
            
        Returns:
            Dict with summary, key sentences, and action items
        """
        body = email.get('body', '')
        subject = email.get('subject', '')
        
        # Generate summary
        key_sentences = self.extract_key_sentences(body, max_sentences=3)
        summary = ' '.join(key_sentences) if key_sentences else body[:200] + '...'
        
        # Extract action items
        action_items = self.extract_action_items(body)
        
        # Extract key topics from subject and body
        all_text = subject + ' ' + body
        topics = self._extract_topics(all_text)
        
        # Check reply-all requirement
        reply_all_required = len(email.get('recipients', [])) > 1
        
        return {
            'engine': 'V383',
            'summary': summary,
            'key_sentences': key_sentences,
            'action_items': action_items,
            'topics': topics,
            'reply_all_required': reply_all_required,
            'timestamp': datetime.now().isoformat()
        }
    
    def _extract_topics(self, text: str) -> List[str]:
        """Extract key topics from text."""
        # Simple keyword extraction (in production, use NLP models)
        topic_keywords = [
            'project', 'budget', 'timeline', 'deadline', 'meeting', 'review',
            'approval', 'update', 'status', 'report', 'analysis', 'proposal'
        ]
        
        text_lower = text.lower()
        found_topics = [topic for topic in topic_keywords if topic in text_lower]
        
        return found_topics[:5]


if __name__ == '__main__':
    summarizer = DocumentSummarizer()
    
    sample_email = {
        'subject': 'Q2 Project Update and Action Items',
        'sender': 'pm@example.com',
        'body': '''Hi team,

I wanted to provide an important update on the Q2 project. We have completed the initial phase and are now moving into the development stage. The deadline for the first milestone is June 15th.

Please review the attached documentation and provide your feedback by Friday. We need to finalize the technical specifications before we can proceed.

Action items:
- Alice: Complete the API design by Wednesday
- Bob: Set up the development environment
- Charlie: Schedule a review meeting for next week

The budget approval is still pending from finance. This is critical for us to move forward.

Thanks,
Project Manager''',
        'recipients': ['alice@example.com', 'bob@example.com', 'charlie@example.com']
    }
    
    result = summarizer.summarize_email(sample_email)
    print(json.dumps(result, indent=2))

"""
V381: Email Sentiment Evolution Tracker

Tracks emotional sentiment changes across email threads over time,
identifying relationship health trends and predicting potential escalations.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Tuple


class SentimentEvolutionTracker:
    """Tracks sentiment evolution across email conversations."""
    
    def __init__(self):
        self.sentiment_scores = {}
        
    def analyze_sentiment(self, text: str) -> Tuple[float, str]:
        """Analyze sentiment of text and return score (-1.0 to 1.0) and label."""
        positive_words = [
            'great', 'excellent', 'amazing', 'wonderful', 'fantastic', 'perfect',
            'love', 'appreciate', 'thank', 'thanks', 'happy', 'pleased', 'satisfied',
            'outstanding', 'impressive', 'brilliant', 'superb', 'helpful', 'kind'
        ]
        negative_words = [
            'terrible', 'awful', 'horrible', 'bad', 'worst', 'hate', 'disappointed',
            'frustrated', 'angry', 'upset', 'annoyed', 'unhappy', 'dissatisfied',
            'poor', 'unacceptable', 'disappointing', 'useless', 'broken', 'failed'
        ]
        
        text_lower = text.lower()
        words = re.findall(r'\b\w+\b', text_lower)
        
        positive_count = sum(1 for word in words if word in positive_words)
        negative_count = sum(1 for word in words if word in negative_words)
        
        total = positive_count + negative_count
        if total == 0:
            return 0.0, 'neutral'
        
        score = (positive_count - negative_count) / total
        
        if score > 0.3:
            label = 'positive'
        elif score < -0.3:
            label = 'negative'
        else:
            label = 'neutral'
            
        return score, label
    
    def track_thread_sentiment(self, thread_id: str, emails: List[Dict]) -> Dict:
        """
        Track sentiment evolution across an email thread.
        
        Args:
            thread_id: Unique identifier for the email thread
            emails: List of email dicts with 'body', 'sender', 'timestamp' keys
            
        Returns:
            Dict with sentiment trajectory and trend analysis
        """
        trajectory = []
        
        for email in emails:
            score, label = self.analyze_sentiment(email.get('body', ''))
            trajectory.append({
                'timestamp': email.get('timestamp', datetime.now().isoformat()),
                'sender': email.get('sender', 'unknown'),
                'score': score,
                'label': label
            })
        
        # Calculate trend
        if len(trajectory) >= 2:
            first_score = trajectory[0]['score']
            last_score = trajectory[-1]['score']
            trend = 'improving' if last_score > first_score + 0.2 else \
                   'declining' if last_score < first_score - 0.2 else 'stable'
        else:
            trend = 'insufficient_data'
        
        # Calculate volatility
        if len(trajectory) >= 3:
            scores = [t['score'] for t in trajectory]
            avg_score = sum(scores) / len(scores)
            variance = sum((s - avg_score) ** 2 for s in scores) / len(scores)
            volatility = variance ** 0.5
        else:
            volatility = 0.0
        
        # Check reply-all requirement
        reply_all_required = len(emails) > 0 and any(
            len(email.get('recipients', [])) > 1 for email in emails
        )
        
        return {
            'engine': 'V381',
            'thread_id': thread_id,
            'trajectory': trajectory,
            'trend': trend,
            'volatility': volatility,
            'reply_all_required': reply_all_required,
            'timestamp': datetime.now().isoformat()
        }


if __name__ == '__main__':
    tracker = SentimentEvolutionTracker()
    
    sample_thread = [
        {
            'sender': 'customer@example.com',
            'body': 'Hi, I am having trouble with my account. Can you help?',
            'timestamp': '2026-05-28T09:00:00Z',
            'recipients': ['support@company.com']
        },
        {
            'sender': 'support@company.com',
            'body': 'Of course! I would be happy to help you resolve this issue.',
            'timestamp': '2026-05-28T09:15:00Z',
            'recipients': ['customer@example.com']
        },
        {
            'sender': 'customer@example.com',
            'body': 'Thank you so much! Your support is excellent and very helpful.',
            'timestamp': '2026-05-28T09:30:00Z',
            'recipients': ['support@company.com']
        }
    ]
    
    result = tracker.track_thread_sentiment('thread-123', sample_thread)
    print(json.dumps(result, indent=2))

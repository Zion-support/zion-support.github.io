#!/usr/bin/env python3
"""
V169 - AI Email Priority Learning System
Learns from user actions (open time, reply speed, starring, archiving) to auto-prioritize
emails. Builds personalized priority models that improve over time.
"""

import json
import hashlib
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional
from collections import defaultdict
import statistics


class PriorityLearningSystem:
    """AI-powered email priority learning from user behavior."""

    def __init__(self):
        self.user_actions = defaultdict(list)
        self.sender_scores = defaultdict(float)
        self.topic_scores = defaultdict(float)
        self.pattern_models = {}
        self.feedback_loop = []

    def record_action(self, email_id: str, action: str, email_data: Dict, metadata: Dict = None):
        """Record a user action on an email."""
        self.user_actions[email_data.get('from', 'unknown')].append({
            'email_id': email_id,
            'action': action,
            'timestamp': datetime.now().isoformat(),
            'subject': email_data.get('subject', ''),
            'from': email_data.get('from', ''),
            'category': email_data.get('category', 'general'),
            'metadata': metadata or {}
        })

        # Update sender score based on action
        self._update_sender_score(email_data.get('from', ''), action)

        # Update topic scores
        self._update_topic_scores(email_data.get('subject', '') + ' ' + email_data.get('body', ''), action)

    def _update_sender_score(self, sender: str, action: str):
        """Update sender priority score based on user action."""
        action_weights = {
            'starred': 15,
            'replied_quickly': 10,
            'opened_immediately': 8,
            'replied': 5,
            'opened': 3,
            'archived': -2,
            'deleted': -5,
            'marked_spam': -20,
            'snoozed': -1
        }

        weight = action_weights.get(action, 0)
        # Exponential moving average
        current = self.sender_scores.get(sender, 50)
        self.sender_scores[sender] = max(0, min(100, current * 0.85 + (50 + weight) * 0.15))

    def _update_topic_scores(self, content: str, action: str):
        """Update topic priority scores."""
        action_multiplier = {
            'starred': 2.0, 'replied_quickly': 1.8, 'opened_immediately': 1.5,
            'replied': 1.3, 'opened': 1.0, 'archived': 0.8, 'deleted': 0.5
        }

        multiplier = action_multiplier.get(action, 1.0)
        words = [w for w in content.lower().split() if len(w) > 4]

        for word in words[:20]:
            current = self.topic_scores.get(word, 1.0)
            self.topic_scores[word] = current * 0.95 + multiplier * 0.05

    def predict_priority(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Predict email priority based on learned patterns."""
        sender = email.get('from', '')
        content = f"{email.get('subject', '')} {email.get('body', '')}".lower()

        # Sender score (0-40 points)
        sender_score = self.sender_scores.get(sender, 50)
        sender_points = (sender_score / 100) * 40

        # Topic score (0-25 points)
        words = [w for w in content.split() if len(w) > 4]
        topic_scores = [self.topic_scores.get(w, 1.0) for w in words[:30]]
        avg_topic = statistics.mean(topic_scores) if topic_scores else 1.0
        topic_points = min(25, (avg_topic - 0.5) * 25)

        # Pattern score (0-20 points)
        pattern_points = self._calculate_pattern_score(email)

        # Urgency signals (0-15 points)
        urgency_points = self._calculate_urgency_signals(content)

        total_score = min(100, sender_points + topic_points + pattern_points + urgency_points)

        # Determine priority level
        if total_score >= 80:
            level = 'critical'
            action = 'Respond immediately'
        elif total_score >= 60:
            level = 'high'
            action = 'Respond within 2 hours'
        elif total_score >= 40:
            level = 'medium'
            action = 'Respond within 8 hours'
        elif total_score >= 20:
            level = 'low'
            action = 'Respond within 24 hours'
        else:
            level = 'minimal'
            action = 'Review when convenient'

        return {
            'email_id': hashlib.md5(f"{sender}{email.get('subject','')}".encode()).hexdigest()[:12],
            'predicted_score': round(total_score, 1),
            'priority_level': level,
            'recommended_action': action,
            'score_breakdown': {
                'sender_score': round(sender_points, 1),
                'topic_score': round(topic_points, 1),
                'pattern_score': round(pattern_points, 1),
                'urgency_score': round(urgency_points, 1)
            },
            'sender_trust_level': round(self.sender_scores.get(sender, 50), 1),
            'confidence': self._calculate_confidence(sender),
            'auto_categorize': self._suggest_category(email),
            'reply_all_recommended': self._should_reply_all(email),
            'learning_data_points': len(self.user_actions.get(sender, []))
        }

    def _calculate_pattern_score(self, email: Dict) -> float:
        """Calculate score based on learned patterns."""
        score = 10  # Baseline
        sender = email.get('from', '')
        actions = self.user_actions.get(sender, [])

        if len(actions) >= 5:
            # Learn from history
            reply_rate = sum(1 for a in actions if a['action'] in ['replied', 'replied_quickly']) / len(actions)
            open_rate = sum(1 for a in actions if 'opened' in a['action']) / len(actions)

            score += reply_rate * 5
            score += open_rate * 3

            # Time patterns
            recent = [a for a in actions if self._is_recent(a['timestamp'], days=7)]
            if len(recent) > 3:
                score += 2  # Active conversation

        return min(20, score)

    def _calculate_urgency_signals(self, content: str) -> float:
        """Calculate urgency signal score."""
        score = 0
        urgent_words = ['urgent', 'asap', 'immediately', 'critical', 'deadline', 'emergency', 'important']
        for word in urgent_words:
            if word in content:
                score += 3

        # Exclamation marks
        score += min(3, content.count('!') * 1.5)

        # ALL CAPS words
        words = content.split()
        caps_words = sum(1 for w in words if w.isupper() and len(w) > 3)
        score += min(4, caps_words * 2)

        return min(15, score)

    def _calculate_confidence(self, sender: str) -> float:
        """Calculate prediction confidence based on data volume."""
        actions = self.user_actions.get(sender, [])
        if len(actions) >= 20:
            return 0.95
        elif len(actions) >= 10:
            return 0.80
        elif len(actions) >= 5:
            return 0.65
        elif len(actions) >= 2:
            return 0.45
        return 0.30

    def _suggest_category(self, email: Dict) -> str:
        """Suggest email category based on learned patterns."""
        sender = email.get('from', '')
        actions = self.user_actions.get(sender, [])

        if actions:
            categories = [a.get('category', 'general') for a in actions]
            from collections import Counter
            most_common = Counter(categories).most_common(1)
            if most_common:
                return most_common[0][0]

        return 'general'

    def _should_reply_all(self, email: Dict) -> bool:
        """Determine if reply-all is recommended."""
        cc_count = len(email.get('cc', []))
        to_count = len(email.get('to', []))
        return (cc_count + to_count) > 1

    def _is_recent(self, timestamp: str, days: int = 7) -> bool:
        """Check if timestamp is recent."""
        try:
            dt = datetime.fromisoformat(timestamp)
            return (datetime.now() - dt).days <= days
        except:
            return False

    def train_from_batch(self, actions: List[Dict]):
        """Train model from batch of user actions."""
        for action_data in actions:
            self.record_action(
                action_data.get('email_id', ''),
                action_data.get('action', 'opened'),
                action_data.get('email_data', {}),
                action_data.get('metadata', {})
            )

    def get_learning_stats(self) -> Dict:
        """Get learning statistics."""
        total_actions = sum(len(actions) for actions in self.user_actions.values())
        return {
            'total_actions_tracked': total_actions,
            'unique_senders': len(self.sender_scores),
            'topics_learned': len(self.topic_scores),
            'top_senders': sorted(self.sender_scores.items(), key=lambda x: x[1], reverse=True)[:10],
            'top_topics': sorted(self.topic_scores.items(), key=lambda x: x[1], reverse=True)[:15],
            'model_confidence': round(total_actions / max(total_actions + 50, 1), 2)
        }


if __name__ == '__main__':
    system = PriorityLearningSystem()

    # Simulate learning
    for i in range(10):
        system.record_action(f'email_{i}', 'replied_quickly', {
            'from': 'vip_client@enterprise.com',
            'subject': 'Important contract review',
            'body': 'Please review the urgent contract',
            'category': 'business'
        })

    result = system.predict_priority({
        'from': 'vip_client@enterprise.com',
        'subject': 'New urgent request',
        'body': 'We need immediate attention on this critical issue ASAP',
        'cc': ['team@company.com']
    })
    print(json.dumps(result, indent=2))

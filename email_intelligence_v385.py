"""
V385: Email Relationship Health Monitor

Analyzes communication patterns between contacts to assess relationship health,
identify at-risk relationships, and provide recommendations for improving
communication effectiveness.
"""

import json
from datetime import datetime, timedelta
from typing import Dict, List
from collections import defaultdict


class RelationshipHealthMonitor:
    """Monitors and assesses email relationship health."""
    
    def __init__(self):
        self.interaction_history = defaultdict(list)
        
    def track_interaction(self, email: Dict):
        """Track an email interaction."""
        sender = email.get('sender', '')
        recipients = email.get('recipients', [])
        timestamp = datetime.fromisoformat(email.get('timestamp', datetime.now().isoformat()))
        
        # Track sender -> recipients
        for recipient in recipients:
            self.interaction_history[(sender, recipient)].append({
                'timestamp': timestamp,
                'type': 'sent',
                'body_length': len(email.get('body', ''))
            })
            self.interaction_history[(recipient, sender)].append({
                'timestamp': timestamp,
                'type': 'received',
                'body_length': len(email.get('body', ''))
            })
    
    def assess_relationship(self, contact_a: str, contact_b: str, 
                           current_time: datetime = None) -> Dict:
        """
        Assess the health of a relationship between two contacts.
        
        Args:
            contact_a: First contact email
            contact_b: Second contact email
            current_time: Current time for recency calculations
            
        Returns:
            Dict with relationship health score and metrics
        """
        if current_time is None:
            current_time = datetime.now()
        
        interactions = self.interaction_history[(contact_a, contact_b)]
        
        if not interactions:
            return {
                'engine': 'V385',
                'contacts': [contact_a, contact_b],
                'health_score': 0,
                'status': 'no_data',
                'timestamp': current_time.isoformat()
            }
        
        # Calculate metrics
        frequency_score = self._calculate_frequency_score(interactions, current_time)
        recency_score = self._calculate_recency_score(interactions, current_time)
        reciprocity_score = self._calculate_reciprocity_score(contact_a, contact_b)
        engagement_score = self._calculate_engagement_score(interactions)
        
        # Overall health score (weighted average)
        health_score = (
            frequency_score * 0.25 +
            recency_score * 0.30 +
            reciprocity_score * 0.25 +
            engagement_score * 0.20
        )
        
        # Determine status
        if health_score >= 80:
            status = 'excellent'
        elif health_score >= 60:
            status = 'good'
        elif health_score >= 40:
            status = 'needs_attention'
        else:
            status = 'at_risk'
        
        # Generate recommendations
        recommendations = self._generate_recommendations(
            frequency_score, recency_score, reciprocity_score, engagement_score
        )
        
        return {
            'engine': 'V385',
            'contacts': [contact_a, contact_b],
            'health_score': round(health_score, 2),
            'status': status,
            'metrics': {
                'frequency_score': round(frequency_score, 2),
                'recency_score': round(recency_score, 2),
                'reciprocity_score': round(reciprocity_score, 2),
                'engagement_score': round(engagement_score, 2),
                'total_interactions': len(interactions)
            },
            'recommendations': recommendations,
            'timestamp': current_time.isoformat()
        }
    
    def _calculate_frequency_score(self, interactions: List[Dict], 
                                   current_time: datetime) -> float:
        """Score based on interaction frequency."""
        if not interactions:
            return 0
        
        # Count interactions in last 30 days
        thirty_days_ago = current_time - timedelta(days=30)
        recent_interactions = [i for i in interactions 
                             if i['timestamp'] >= thirty_days_ago]
        
        count = len(recent_interactions)
        
        # Scoring: 0-5 = low, 6-15 = medium, 16+ = high
        if count >= 16:
            return 100
        elif count >= 6:
            return 60 + (count - 6) * 4
        else:
            return count * 10
    
    def _calculate_recency_score(self, interactions: List[Dict], 
                                current_time: datetime) -> float:
        """Score based on how recent the last interaction was."""
        if not interactions:
            return 0
        
        last_interaction = max(interactions, key=lambda x: x['timestamp'])
        days_since = (current_time - last_interaction['timestamp']).days
        
        # Scoring: 0-2 days = excellent, 3-7 = good, 8-30 = fair, 30+ = poor
        if days_since <= 2:
            return 100
        elif days_since <= 7:
            return 80
        elif days_since <= 30:
            return 60 - (days_since - 7) * 1.5
        else:
            return max(0, 30 - (days_since - 30) * 0.5)
    
    def _calculate_reciprocity_score(self, contact_a: str, contact_b: str) -> float:
        """Score based on balanced communication (both sides initiating)."""
        a_to_b = self.interaction_history[(contact_a, contact_b)]
        b_to_a = self.interaction_history[(contact_b, contact_a)]
        
        a_sent = len([i for i in a_to_b if i['type'] == 'sent'])
        b_sent = len([i for i in b_to_a if i['type'] == 'sent'])
        
        total = a_sent + b_sent
        if total == 0:
            return 0
        
        # Perfect balance = 100, one-sided = lower score
        ratio = min(a_sent, b_sent) / max(a_sent, b_sent) if max(a_sent, b_sent) > 0 else 0
        return ratio * 100
    
    def _calculate_engagement_score(self, interactions: List[Dict]) -> float:
        """Score based on depth of engagement (message length, responsiveness)."""
        if not interactions:
            return 0
        
        # Average message length as proxy for engagement
        avg_length = sum(i['body_length'] for i in interactions) / len(interactions)
        
        # Scoring: very short = low, medium = good, very long = medium (might be overwhelming)
        if avg_length < 100:
            return 40
        elif avg_length < 500:
            return 80
        elif avg_length < 1000:
            return 100
        else:
            return 70
    
    def _generate_recommendations(self, frequency: float, recency: float, 
                                 reciprocity: float, engagement: float) -> List[str]:
        """Generate actionable recommendations based on scores."""
        recommendations = []
        
        if frequency < 50:
            recommendations.append('Increase communication frequency - consider weekly check-ins')
        
        if recency < 50:
            recommendations.append('Reach out soon - relationship may be cooling off')
        
        if reciprocity < 50:
            recommendations.append('Improve reciprocity - ensure balanced two-way communication')
        
        if engagement < 50:
            recommendations.append('Deepen engagement - ask more questions and provide detailed responses')
        
        if not recommendations:
            recommendations.append('Relationship is healthy - maintain current communication patterns')
        
        return recommendations


if __name__ == '__main__':
    monitor = RelationshipHealthMonitor()
    
    # Simulate some interactions
    base_time = datetime.now()
    
    sample_emails = [
        {
            'sender': 'alice@company.com',
            'recipients': ['bob@company.com'],
            'body': 'Hi Bob, hope you are doing well. Wanted to check in on the project status.',
            'timestamp': (base_time - timedelta(days=1)).isoformat()
        },
        {
            'sender': 'bob@company.com',
            'recipients': ['alice@company.com'],
            'body': 'Hi Alice, thanks for checking in. The project is on track and we should meet the deadline.',
            'timestamp': (base_time - timedelta(days=1, hours=2)).isoformat()
        },
        {
            'sender': 'alice@company.com',
            'recipients': ['bob@company.com'],
            'body': 'Great to hear! Let me know if you need any support from my side.',
            'timestamp': base_time.isoformat()
        }
    ]
    
    for email in sample_emails:
        monitor.track_interaction(email)
    
    result = monitor.assess_relationship('alice@company.com', 'bob@company.com')
    print(json.dumps(result, indent=2))

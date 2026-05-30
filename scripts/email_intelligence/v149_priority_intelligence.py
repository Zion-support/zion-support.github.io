#!/usr/bin/env python3
"""
V149 - AI Email Priority Intelligence Engine
Advanced priority scoring with context awareness, urgency detection,
and intelligent prioritization based on sender, content, and business rules.
"""

import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional, Tuple

class PriorityIntelligenceEngine:
    """Advanced AI-powered email priority scoring system."""
    
    def __init__(self):
        self.priority_weights = {
            'sender_tier': 0.25,
            'urgency_signals': 0.20,
            'business_impact': 0.20,
            'deadline_proximity': 0.15,
            'relationship_strength': 0.10,
            'historical_response': 0.10
        }
        
        self.sender_tiers = {
            'executive': {'score': 100, 'patterns': ['ceo', 'cto', 'cfo', 'president', 'founder', 'partner']},
            'client': {'score': 90, 'patterns': ['client', 'customer', 'account']},
            'vendor': {'score': 70, 'patterns': ['vendor', 'supplier', 'partner']},
            'internal': {'score': 80, 'patterns': ['team', 'colleague', 'manager']},
            'unknown': {'score': 50, 'patterns': []}
        }
        
        self.urgency_keywords = {
            'critical': {'score': 100, 'patterns': ['urgent', 'asap', 'immediately', 'critical', 'emergency']},
            'high': {'score': 75, 'patterns': ['important', 'priority', 'deadline', 'soon', 'quick']},
            'medium': {'score': 50, 'patterns': ['when possible', 'this week', 'review', 'check']},
            'low': {'score': 25, 'patterns': ['fyi', 'informational', 'no rush', 'when you have time']}
        }
        
        self.priority_history = {}
        self.sender_scores = {}
        
    def analyze_priority(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Comprehensive priority analysis with multi-dimensional scoring."""
        
        # Multi-dimensional priority scoring
        sender_score = self._analyze_sender_tier(email)
        urgency_score = self._analyze_urgency_signals(email)
        impact_score = self._analyze_business_impact(email)
        deadline_score = self._analyze_deadline_proximity(email)
        relationship_score = self._analyze_relationship_strength(email)
        historical_score = self._analyze_historical_patterns(email)
        
        # Calculate weighted final score
        final_score = (
            sender_score * self.priority_weights['sender_tier'] +
            urgency_score * self.priority_weights['urgency_signals'] +
            impact_score * self.priority_weights['business_impact'] +
            deadline_score * self.priority_weights['deadline_proximity'] +
            relationship_score * self.priority_weights['relationship_strength'] +
            historical_score * self.priority_weights['historical_response']
        )
        
        # Determine priority level
        priority_level = self._determine_priority_level(final_score)
        
        # Generate priority context
        priority_context = {
            'score': round(final_score, 2),
            'level': priority_level,
            'tier': self._get_priority_tier(final_score),
            'breakdown': {
                'sender': sender_score,
                'urgency': urgency_score,
                'impact': impact_score,
                'deadline': deadline_score,
                'relationship': relationship_score,
                'historical': historical_score
            },
            'recommended_action': self._recommend_action(final_score, email),
            'response_deadline': self._calculate_response_deadline(final_score),
            'escalation_needed': final_score > 85
        }
        
        # Update learning data
        self._update_priority_learning(email, priority_context)
        
        return priority_context
    
    def _analyze_sender_tier(self, email: Dict[str, Any]) -> float:
        """Analyze sender importance and tier."""
        sender = email.get('from', '').lower()
        sender_name = email.get('sender_name', '').lower()
        
        # Check for VIP patterns
        for tier, config in self.sender_tiers.items():
            for pattern in config['patterns']:
                if pattern in sender or pattern in sender_name:
                    return config['score']
        
        # Check cached sender scores
        if sender in self.sender_scores:
            return self.sender_scores[sender]
        
        # Domain-based scoring
        domain = sender.split('@')[-1] if '@' in sender else ''
        if domain in ['gmail.com', 'yahoo.com', 'hotmail.com']:
            return 40
        elif 'zion' in domain:
            return 85  # Internal domain
        
        return 50
    
    def _analyze_urgency_signals(self, email: Dict[str, Any]) -> float:
        """Detect urgency signals in email content."""
        subject = email.get('subject', '').lower()
        body = email.get('body', '').lower()
        content = f"{subject} {body}"
        
        urgency_score = 0
        max_urgency = 0
        
        for level, config in self.urgency_keywords.items():
            for pattern in config['patterns']:
                if pattern in content:
                    urgency_score += config['score'] * 0.3
                    max_urgency = max(max_urgency, config['score'])
        
        # Check for exclamation marks
        exclamation_count = content.count('!')
        urgency_score += min(exclamation_count * 5, 20)
        
        # Check for ALL CAPS
        words = content.split()
        caps_words = sum(1 for w in words if w.isupper() and len(w) > 3)
        urgency_score += min(caps_words * 10, 25)
        
        # Normalize
        final_score = min((urgency_score + max_urgency) / 2, 100)
        return final_score
    
    def _analyze_business_impact(self, email: Dict[str, Any]) -> float:
        """Assess business impact of the email."""
        body = email.get('body', '').lower()
        subject = email.get('subject', '').lower()
        content = f"{subject} {body}"
        
        impact_indicators = {
            'revenue': ['contract', 'deal', 'sale', 'purchase', 'order', 'invoice', 'payment'],
            'strategic': ['partnership', 'investment', 'merger', 'acquisition', 'strategy'],
            'operational': ['project', 'milestone', 'delivery', 'launch', 'deployment'],
            'legal': ['agreement', 'compliance', 'regulation', 'legal', 'policy'],
            'financial': ['budget', 'cost', 'expense', 'revenue', 'profit', 'loss']
        }
        
        impact_score = 50  # Baseline
        for category, keywords in impact_indicators.items():
            for keyword in keywords:
                if keyword in content:
                    impact_score += 15
                    
                    # Higher impact for certain categories
                    if category in ['revenue', 'strategic', 'legal']:
                        impact_score += 10
        
        return min(impact_score, 100)
    
    def _analyze_deadline_proximity(self, email: Dict[str, Any]) -> float:
        """Analyze deadline proximity and time sensitivity."""
        body = email.get('body', '')
        subject = email.get('subject', '')
        content = f"{subject} {body}"
        
        # Look for date/time patterns
        date_patterns = [
            r'\b(\d{1,2}[/-]\d{1,2}[/-]\d{2,4})\b',
            r'\b(\d{1,2}\s+(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*)\b',
            r'\b(today|tomorrow|next week|this week|end of day|eod|asap)\b'
        ]
        
        deadline_score = 30  # Baseline
        for pattern in date_patterns:
            if re.search(pattern, content, re.IGNORECASE):
                deadline_score += 25
        
        # Check for specific time references
        time_patterns = [r'\b(\d{1,2}:\d{2}\s*(?:am|pm))\b', r'\b(by|before|until|deadline)\b']
        for pattern in time_patterns:
            if re.search(pattern, content, re.IGNORECASE):
                deadline_score += 15
        
        return min(deadline_score, 100)
    
    def _analyze_relationship_strength(self, email: Dict[str, Any]) -> float:
        """Analyze relationship strength with sender."""
        sender = email.get('from', '').lower()
        
        # Check historical interaction frequency
        if sender in self.priority_history:
            history = self.priority_history[sender]
            frequency_score = min(len(history) * 5, 40)
            recency_score = 30 if history else 0
            
            return min(frequency_score + recency_score + 30, 100)
        
        return 50
    
    def _analyze_historical_patterns(self, email: Dict[str, Any]) -> float:
        """Analyze historical response patterns."""
        sender = email.get('from', '').lower()
        
        if sender not in self.priority_history:
            return 50
        
        history = self.priority_history[sender]
        if not history:
            return 50
        
        # Calculate average response time
        response_times = [h.get('response_time', 24) for h in history[-10:]]
        avg_response_time = sum(response_times) / len(response_times) if response_times else 24
        
        # Faster historical response = higher priority
        if avg_response_time < 2:
            return 90
        elif avg_response_time < 8:
            return 75
        elif avg_response_time < 24:
            return 60
        else:
            return 40
    
    def _determine_priority_level(self, score: float) -> str:
        """Determine priority level from score."""
        if score >= 85:
            return 'CRITICAL'
        elif score >= 70:
            return 'HIGH'
        elif score >= 50:
            return 'MEDIUM'
        elif score >= 30:
            return 'LOW'
        else:
            return 'MINIMAL'
    
    def _get_priority_tier(self, score: float) -> int:
        """Get numeric priority tier."""
        if score >= 85:
            return 1
        elif score >= 70:
            return 2
        elif score >= 50:
            return 3
        elif score >= 30:
            return 4
        else:
            return 5
    
    def _recommend_action(self, score: float, email: Dict[str, Any]) -> str:
        """Recommend action based on priority score."""
        if score >= 85:
            return 'Immediate response required. Escalate if not handled within 30 minutes.'
        elif score >= 70:
            return 'Respond within 2 hours. High business impact.'
        elif score >= 50:
            return 'Respond within 8 hours during business hours.'
        elif score >= 30:
            return 'Respond within 24 hours.'
        else:
            return 'Review when convenient. Low urgency.'
    
    def _calculate_response_deadline(self, score: float) -> str:
        """Calculate recommended response deadline."""
        now = datetime.now()
        
        if score >= 85:
            deadline = now + timedelta(minutes=30)
        elif score >= 70:
            deadline = now + timedelta(hours=2)
        elif score >= 50:
            deadline = now + timedelta(hours=8)
        elif score >= 30:
            deadline = now + timedelta(hours=24)
        else:
            deadline = now + timedelta(days=3)
        
        return deadline.strftime('%Y-%m-%d %H:%M:%S')
    
    def _update_priority_learning(self, email: Dict[str, Any], context: Dict[str, Any]):
        """Update learning data from priority analysis."""
        sender = email.get('from', '').lower()
        
        if sender not in self.priority_history:
            self.priority_history[sender] = []
        
        self.priority_history[sender].append({
            'timestamp': datetime.now().isoformat(),
            'score': context['score'],
            'level': context['level'],
            'action_taken': None  # To be updated when response is sent
        })
        
        # Update sender score
        if sender not in self.sender_scores:
            self.sender_scores[sender] = context['score']
        else:
            # Exponential moving average
            self.sender_scores[sender] = (
                self.sender_scores[sender] * 0.7 + context['score'] * 0.3
            )
        
        # Trim history
        if len(self.priority_history[sender]) > 100:
            self.priority_history[sender] = self.priority_history[sender][-50:]


def process_email_priority(email_data: Dict[str, Any]) -> Dict[str, Any]:
    """Main entry point for priority intelligence processing."""
    engine = PriorityIntelligenceEngine()
    return engine.analyze_priority(email_data)


if __name__ == '__main__':
    # Test with sample email
    test_email = {
        'from': 'ceo@company.com',
        'sender_name': 'John Smith',
        'subject': 'URGENT: Contract Review Needed by EOD',
        'body': 'Hi team, I need this contract reviewed ASAP. It\'s critical for our Q4 revenue. '
                'Please review and get back to me by end of day today. Thanks!'
    }
    
    result = process_email_priority(test_email)
    print(json.dumps(result, indent=2))

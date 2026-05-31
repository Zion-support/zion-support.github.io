#!/usr/bin/env python3
"""
V575 - Email Negotiation Assistant
Analyzes negotiation patterns in email threads, suggests optimal counter-offers, and identifies leverage points.
Enforces reply-all for all communications.
"""
import json
from datetime import datetime
from typing import Dict, List
import re

class EmailNegotiationAssistant:
    def __init__(self):
        self.reply_all_enforced = True
        self.negotiation_patterns = {
            'concession': ['discount', 'reduce', 'lower', 'flexible', 'negotiate'],
            'firm': ['final', 'non-negotiable', 'fixed', 'best offer', 'take it or leave it'],
            'collaborative': ['win-win', 'mutual', 'together', 'partnership', 'long-term'],
            'competitive': ['better offer', 'competitor', 'alternative', 'deadline']
        }
    
    def analyze_negotiation(self, email_thread: List[Dict]) -> Dict:
        """Analyze negotiation patterns in email thread"""
        # Detect negotiation style
        style = self._detect_negotiation_style(email_thread)
        
        # Identify leverage points
        leverage_points = self._identify_leverage_points(email_thread)
        
        # Track concessions
        concessions = self._track_concessions(email_thread)
        
        # Suggest counter-offers
        counter_offers = self._suggest_counter_offers(email_thread, style)
        
        # Calculate negotiation position
        position = self._calculate_position(email_thread)
        
        # Generate strategy recommendations
        strategy = self._generate_strategy(style, leverage_points, position)
        
        return {
            'engine': 'V575_Email_Negotiation_Assistant',
            'timestamp': datetime.now().isoformat(),
            'thread_id': email_thread[0].get('id', 'unknown') if email_thread else 'unknown',
            'negotiation_style': style,
            'leverage_points': leverage_points,
            'concessions': concessions,
            'counter_offers': counter_offers,
            'position_analysis': position,
            'strategy_recommendations': strategy,
            'reply_all_enforced': self.reply_all_enforced,
            'all_recipients': email_thread[-1].get('to', []) + email_thread[-1].get('cc', []) if email_thread else []
        }
    
    def _detect_negotiation_style(self, thread: List[Dict]) -> Dict:
        """Detect negotiation style from email content"""
        style_scores = {
            'concession': 0,
            'firm': 0,
            'collaborative': 0,
            'competitive': 0
        }
        
        for email in thread:
            body = email.get('body', '').lower()
            for style, keywords in self.negotiation_patterns.items():
                for keyword in keywords:
                    if keyword in body:
                        style_scores[style] += 1
        
        dominant_style = max(style_scores, key=style_scores.get)
        
        return {
            'dominant_style': dominant_style,
            'style_scores': style_scores,
            'adaptability': 'high' if max(style_scores.values()) < 3 else 'low',
            'recommendation': self._get_style_recommendation(dominant_style)
        }
    
    def _get_style_recommendation(self, style: str) -> str:
        """Get recommendation based on negotiation style"""
        recommendations = {
            'concession': 'Maintain firm position, avoid over-conceding',
            'firm': 'Consider flexibility to avoid deadlock',
            'collaborative': 'Excellent approach, focus on mutual benefits',
            'competitive': 'Balance competitiveness with relationship building'
        }
        return recommendations.get(style, 'Adapt style based on counterparty')
    
    def _identify_leverage_points(self, thread: List[Dict]) -> List[Dict]:
        """Identify leverage points in negotiation"""
        leverage_points = []
        
        for email in thread:
            body = email.get('body', '').lower()
            
            # Time pressure
            if any(word in body for word in ['deadline', 'urgent', 'asap', 'limited time']):
                leverage_points.append({
                    'type': 'time_pressure',
                    'party': email.get('from', ''),
                    'strength': 'high',
                    'evidence': 'Time constraint mentioned'
                })
            
            # Alternatives
            if any(word in body for word in ['other options', 'competitor', 'alternative']):
                leverage_points.append({
                    'type': 'alternatives',
                    'party': email.get('from', ''),
                    'strength': 'medium',
                    'evidence': 'Alternatives mentioned'
                })
            
            # Volume commitment
            if any(word in body for word in ['bulk', 'volume', 'long-term', 'multiple']):
                leverage_points.append({
                    'type': 'volume_commitment',
                    'party': email.get('from', ''),
                    'strength': 'high',
                    'evidence': 'Volume commitment offered'
                })
        
        return leverage_points
    
    def _track_concessions(self, thread: List[Dict]) -> List[Dict]:
        """Track concessions made during negotiation"""
        concessions = []
        
        for i, email in enumerate(thread):
            body = email.get('body', '').lower()
            
            # Detect price concessions
            price_pattern = r'\$[\d,]+(?:\.\d{2})?'
            prices = re.findall(price_pattern, body)
            
            if prices and i > 0:
                concessions.append({
                    'type': 'price_adjustment',
                    'party': email.get('from', ''),
                    'values': prices,
                    'message_number': i + 1
                })
            
            # Detect term concessions
            if any(word in body for word in ['flexible', 'can adjust', 'willing to']):
                concessions.append({
                    'type': 'term_flexibility',
                    'party': email.get('from', ''),
                    'description': 'Terms flexibility offered',
                    'message_number': i + 1
                })
        
        return concessions
    
    def _suggest_counter_offers(self, thread: List[Dict], style: Dict) -> List[Dict]:
        """Suggest counter-offers based on negotiation context"""
        suggestions = []
        
        if style['dominant_style'] == 'competitive':
            suggestions.append({
                'type': 'anchoring',
                'description': 'Start with ambitious position to anchor negotiation',
                'confidence': 0.85
            })
            suggestions.append({
                'type': 'conditional_concession',
                'description': 'Offer concession only in exchange for commitment',
                'confidence': 0.90
            })
        elif style['dominant_style'] == 'collaborative':
            suggestions.append({
                'type': 'value_expansion',
                'description': 'Expand pie by identifying additional value sources',
                'confidence': 0.95
            })
            suggestions.append({
                'type': 'package_deal',
                'description': 'Bundle multiple issues for mutual gain',
                'confidence': 0.88
            })
        else:
            suggestions.append({
                'type': 'balanced_approach',
                'description': 'Balance firmness with flexibility',
                'confidence': 0.80
            })
        
        return suggestions
    
    def _calculate_position(self, thread: List[Dict]) -> Dict:
        """Calculate negotiation position strength"""
        position_strength = 50  # Base score
        
        # Analyze concessions
        concessions = self._track_concessions(thread)
        if len(concessions) > 3:
            position_strength -= 10  # Too many concessions
        
        # Analyze leverage
        leverage = self._identify_leverage_points(thread)
        position_strength += len(leverage) * 5
        
        return {
            'strength': min(100, max(0, position_strength)),
            'assessment': 'strong' if position_strength > 70 else 'moderate' if position_strength > 40 else 'weak',
            'factors': {
                'concessions_made': len(concessions),
                'leverage_points': len(leverage),
                'messages_exchanged': len(thread)
            }
        }
    
    def _generate_strategy(self, style: Dict, leverage: List[Dict], position: Dict) -> List[str]:
        """Generate negotiation strategy recommendations"""
        strategy = []
        
        if position['strength'] > 70:
            strategy.append("Maintain strong position, avoid unnecessary concessions")
            strategy.append("Use leverage points to anchor negotiation")
        elif position['strength'] < 40:
            strategy.append("Seek creative solutions to improve position")
            strategy.append("Focus on relationship building for long-term gains")
        
        if style['dominant_style'] == 'competitive':
            strategy.append("Counterparty is competitive - protect your interests")
            strategy.append("Document all agreements clearly")
        elif style['dominant_style'] == 'collaborative':
            strategy.append("Counterparty is collaborative - explore win-win solutions")
            strategy.append("Share information to build trust")
        
        strategy.append("Always enforce reply-all for transparency")
        
        return strategy

if __name__ == "__main__":
    assistant = EmailNegotiationAssistant()
    test_thread = [
        {
            'id': '1',
            'from': 'vendor@example.com',
            'to': ['buyer@company.com'],
            'subject': 'Service Proposal',
            'body': 'We can offer our premium service at $10,000 per month. This is our best offer.'
        },
        {
            'id': '2',
            'from': 'buyer@company.com',
            'to': ['vendor@example.com'],
            'subject': 'Re: Service Proposal',
            'body': 'Thank you for the proposal. We have other options at lower prices. Can you be more flexible?'
        },
        {
            'id': '3',
            'from': 'vendor@example.com',
            'to': ['buyer@company.com'],
            'subject': 'Re: Service Proposal',
            'body': 'For a 12-month commitment, we can reduce to $8,500 per month. This is a win-win partnership opportunity.'
        }
    ]
    result = assistant.analyze_negotiation(test_thread)
    print(json.dumps(result, indent=2))

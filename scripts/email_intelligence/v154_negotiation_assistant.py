#!/usr/bin/env python3
"""
V154 - AI Email Negotiation Assistant
Detects negotiation opportunities, suggests optimal counter-offers,
tracks negotiation history, and generates persuasive responses.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Any, Optional, Tuple
from collections import defaultdict


class NegotiationAssistant:
    """AI-powered email negotiation assistant with strategy optimization."""
    
    def __init__(self):
        self.negotiation_history = defaultdict(list)
        self.deal_values = defaultdict(float)
        self.success_patterns = []
        
        self.negotiation_signals = {
            'price_objection': ['too expensive', 'over budget', 'price is high', 'cost too much', 'can you lower', 'discount'],
            'timeline_pressure': ['need faster', 'sooner', 'urgent delivery', 'rush', 'deadline'],
            'scope_negotiation': ['reduce scope', 'fewer features', 'basic version', 'minimum viable'],
            'competitor_mention': ['competitor offers', 'other vendor', 'alternative solution', 'cheaper option'],
            'authority_limitation': ['need approval', 'budget approval', 'management decision', 'board approval'],
            'value_questioning': ['not sure about value', 'ROI concerns', 'worth it', 'justify cost']
        }
        
        self.counter_strategies = {
            'price_objection': {
                'tactics': ['value_justification', 'payment_terms', 'scope_adjustment', 'bundle_discount'],
                'tone': 'empathetic_confident',
                'success_rate': 0.65
            },
            'timeline_pressure': {
                'tactics': ['priority_pricing', 'phased_delivery', 'resource_allocation'],
                'tone': 'solution_oriented',
                'success_rate': 0.70
            },
            'scope_negotiation': {
                'tactics': ['value_preservation', 'add_on_selling', 'future_roadmap'],
                'tone': 'consultative',
                'success_rate': 0.60
            },
            'competitor_mention': {
                'tactics': ['differentiation', 'value_comparison', 'unique_selling_points'],
                'tone': 'confident_professional',
                'success_rate': 0.55
            }
        }
    
    def analyze_negotiation(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze email for negotiation context and provide recommendations."""
        
        content = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        sender = email.get('from', '')
        
        # Detect negotiation signals
        detected_signals = self._detect_signals(content)
        
        # Determine negotiation stage
        stage = self._determine_stage(email, detected_signals)
        
        # Extract numbers (prices, quantities, dates)
        numbers = self._extract_numbers(content)
        
        # Get historical context
        history = self._get_negotiation_history(sender)
        
        # Generate strategy
        strategy = self._generate_strategy(detected_signals, stage, numbers, history)
        
        # Suggest response
        response_suggestions = self._generate_response_suggestions(strategy, detected_signals)
        
        # Calculate leverage score
        leverage = self._calculate_leverage(detected_signals, stage, history)
        
        return {
            'analysis_id': f"neg_{datetime.now().strftime('%Y%m%d%H%M%S')}",
            'timestamp': datetime.now().isoformat(),
            'is_negotiation': len(detected_signals) > 0,
            'detected_signals': detected_signals,
            'negotiation_stage': stage,
            'extracted_numbers': numbers,
            'leverage_score': leverage,
            'recommended_strategy': strategy,
            'response_suggestions': response_suggestions,
            'risk_factors': self._identify_risks(detected_signals, stage),
            'deal_probability': self._calculate_deal_probability(leverage, stage),
            'reply_all_enforced': True
        }
    
    def _detect_signals(self, content: str) -> List[Dict[str, Any]]:
        """Detect negotiation signals in content."""
        signals = []
        
        for signal_type, patterns in self.negotiation_signals.items():
            for pattern in patterns:
                if pattern in content:
                    signals.append({
                        'type': signal_type,
                        'pattern': pattern,
                        'confidence': 0.8,
                        'position': content.find(pattern)
                    })
        
        return signals
    
    def _determine_stage(self, email: Dict[str, Any], signals: List) -> str:
        """Determine the negotiation stage."""
        if not signals:
            return 'initial_contact'
        
        signal_types = [s['type'] for s in signals]
        
        if 'price_objection' in signal_types or 'value_questioning' in signal_types:
            return 'objection_handling'
        elif 'competitor_mention' in signal_types:
            return 'competitive_positioning'
        elif 'scope_negotiation' in signal_types:
            return 'scope_negotiation'
        elif 'timeline_pressure' in signal_types:
            return 'closing_stage'
        elif 'authority_limitation' in signal_types:
            return 'approval_stage'
        else:
            return 'exploration'
    
    def _extract_numbers(self, content: str) -> List[Dict[str, Any]]:
        """Extract numbers from content (prices, quantities, etc.)."""
        numbers = []
        
        # Currency amounts
        currency_matches = re.findall(r'\$[\d,]+(?:\.\d{2})?', content)
        for match in currency_matches:
            try:
                value = float(match.replace('$', '').replace(',', ''))
                numbers.append({
                    'type': 'currency',
                    'value': value,
                    'original': match,
                    'position': content.find(match)
                })
            except:
                pass
        
        # Percentages
        percent_matches = re.findall(r'\b\d+(?:\.\d+)?%\b', content)
        for match in percent_matches:
            try:
                value = float(match.replace('%', ''))
                numbers.append({
                    'type': 'percentage',
                    'value': value,
                    'original': match,
                    'position': content.find(match)
                })
            except:
                pass
        
        # Quantities
        qty_matches = re.findall(r'\b(\d+)\s*(?:units?|pieces?|licenses?|seats?|users?)\b', content)
        for match in qty_matches:
            numbers.append({
                'type': 'quantity',
                'value': int(match),
                'original': match,
                'position': content.find(match)
            })
        
        return numbers
    
    def _get_negotiation_history(self, sender: str) -> List[Dict[str, Any]]:
        """Get historical negotiation data for this sender."""
        return self.negotiation_history.get(sender, [])
    
    def _generate_strategy(self, signals: List, stage: str, numbers: List, history: List) -> Dict[str, Any]:
        """Generate negotiation strategy."""
        
        if not signals:
            return {
                'approach': 'relationship_building',
                'tactics': ['active_listening', 'value_demonstration', 'rapport_building'],
                'concessions': [],
                'walk_away_point': None
            }
        
        primary_signal = signals[0]['type'] if signals else None
        strategy_config = self.counter_strategies.get(primary_signal, {})
        
        # Calculate concession budget
        total_value = sum(n['value'] for n in numbers if n['type'] == 'currency')
        max_concession = total_value * 0.15 if total_value > 0 else 0
        
        return {
            'primary_signal': primary_signal,
            'approach': strategy_config.get('tone', 'professional'),
            'tactics': strategy_config.get('tactics', ['value_justification']),
            'concession_budget': max_concession,
            'concessions_offered': [],
            'counter_offer': self._suggest_counter_offer(numbers, max_concession),
            'walk_away_point': total_value * 0.7 if total_value > 0 else None,
            'success_probability': strategy_config.get('success_rate', 0.5)
        }
    
    def _suggest_counter_offer(self, numbers: List, max_concession: float) -> Optional[Dict[str, Any]]:
        """Suggest a counter-offer based on extracted numbers."""
        currency_values = [n['value'] for n in numbers if n['type'] == 'currency']
        
        if not currency_values:
            return None
        
        original_price = max(currency_values)
        counter_price = original_price - (max_concession * 0.5)
        
        return {
            'original_price': original_price,
            'counter_price': round(counter_price, 2),
            'discount_percentage': round((original_price - counter_price) / original_price * 100, 1),
            'justification': 'Volume discount + extended contract term'
        }
    
    def _generate_response_suggestions(self, strategy: Dict, signals: List) -> List[Dict[str, Any]]:
        """Generate response suggestions."""
        suggestions = []
        
        if 'price_objection' in [s['type'] for s in signals]:
            suggestions.append({
                'type': 'value_justification',
                'template': 'I understand budget concerns. Let me highlight the ROI: our solution typically delivers {roi_multiple}x return within {timeframe}. Would a phased payment plan help?',
                'tone': 'empathetic',
                'variables': ['roi_multiple', 'timeframe']
            })
            suggestions.append({
                'type': 'scope_adjustment',
                'template': 'We can adjust the scope to fit your budget while maintaining core value. Which features are most critical for you?',
                'tone': 'solution_oriented',
                'variables': []
            })
        
        if 'competitor_mention' in [s['type'] for s in signals]:
            suggestions.append({
                'type': 'differentiation',
                'template': 'I appreciate you sharing that. Our unique advantages include {differentiators}. Would you like a detailed comparison?',
                'tone': 'confident',
                'variables': ['differentiators']
            })
        
        if 'timeline_pressure' in [s['type'] for s in signals]:
            suggestions.append({
                'type': 'priority_pricing',
                'template': 'We can prioritize your project for faster delivery with our premium support tier. This adds {cost} but ensures {timeline}.',
                'tone': 'accommodating',
                'variables': ['cost', 'timeline']
            })
        
        if not suggestions:
            suggestions.append({
                'type': 'exploration',
                'template': 'Thank you for your interest. Could you share more about your specific needs and timeline? This will help me provide the best solution.',
                'tone': 'consultative',
                'variables': []
            })
        
        return suggestions
    
    def _calculate_leverage(self, signals: List, stage: str, history: List) -> float:
        """Calculate negotiation leverage score (0-100)."""
        score = 50  # Baseline
        
        # Positive leverage factors
        if len(history) > 5:
            score += 10  # Established relationship
        if stage == 'closing_stage':
            score += 15  # They're committed
        if not any(s['type'] == 'competitor_mention' for s in signals):
            score += 10  # No competition mentioned
        
        # Negative leverage factors
        if any(s['type'] == 'competitor_mention' for s in signals):
            score -= 15
        if any(s['type'] == 'price_objection' for s in signals):
            score -= 10
        if any(s['type'] == 'authority_limitation' for s in signals):
            score -= 5
        
        return max(0, min(100, score))
    
    def _identify_risks(self, signals: List, stage: str) -> List[str]:
        """Identify negotiation risks."""
        risks = []
        
        if any(s['type'] == 'competitor_mention' for s in signals):
            risks.append("Competitor actively being considered")
        if any(s['type'] == 'price_objection' for s in signals):
            risks.append("Price sensitivity detected")
        if any(s['type'] == 'authority_limitation' for s in signals):
            risks.append("Decision maker may not be in conversation")
        if stage == 'objection_handling':
            risks.append("Multiple objections may indicate fundamental mismatch")
        
        return risks
    
    def _calculate_deal_probability(self, leverage: float, stage: str) -> float:
        """Calculate probability of closing the deal."""
        base_probability = leverage / 100
        
        stage_multiplier = {
            'initial_contact': 0.3,
            'exploration': 0.5,
            'objection_handling': 0.6,
            'competitive_positioning': 0.55,
            'scope_negotiation': 0.65,
            'closing_stage': 0.8,
            'approval_stage': 0.7
        }
        
        multiplier = stage_multiplier.get(stage, 0.5)
        return round(base_probability * multiplier, 2)
    
    def update_negotiation_result(self, sender: str, outcome: Dict[str, Any]):
        """Update negotiation history with outcome."""
        self.negotiation_history[sender].append({
            'timestamp': datetime.now().isoformat(),
            'outcome': outcome.get('result', 'unknown'),
            'final_value': outcome.get('final_value', 0),
            'concessions_made': outcome.get('concessions', []),
            'duration_days': outcome.get('duration_days', 0)
        })


def process_email_negotiation(email_data: Dict[str, Any]) -> Dict[str, Any]:
    """Main entry point for negotiation analysis."""
    assistant = NegotiationAssistant()
    return assistant.analyze_negotiation(email_data)


if __name__ == '__main__':
    test_email = {
        'from': 'prospect@company.com',
        'subject': 'Re: Proposal - Price Concerns',
        'body': 'Hi, thanks for the proposal. The price of $50,000 is a bit over our budget. '
                'Our competitor is offering something similar for $35,000. Can you match that price '
                'or offer a discount? We need this implemented within 30 days.'
    }
    
    result = process_email_negotiation(test_email)
    print(json.dumps(result, indent=2))

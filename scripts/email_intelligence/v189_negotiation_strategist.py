#!/usr/bin/env python3
"""
V189 - AI Email Negotiation Strategist
Analyzes negotiation context from email threads, suggests optimal counter-offers,
tracks BATNA (Best Alternative To Negotiated Agreement), and provides real-time coaching.
"""

import json
from datetime import datetime
from typing import Dict, List, Any
from collections import defaultdict


class NegotiationStrategist:
    """AI-powered negotiation strategy and coaching system."""
    
    def __init__(self):
        self.negotiation_contexts = {}
        self.concession_history = defaultdict(list)
        self.batna_registry = {}
        self.counterparty_profiles = {}
    
    def analyze_negotiation(self, email_thread: List[Dict[str, Any]], context: Dict = None) -> Dict[str, Any]:
        """Analyze negotiation context and provide strategic recommendations."""
        if not email_thread:
            return {'error': 'No email thread provided'}
        
        context = context or {}
        
        # Extract negotiation elements
        elements = self._extract_negotiation_elements(email_thread)
        
        # Identify negotiation stage
        stage = self._identify_negotiation_stage(elements)
        
        # Analyze counterparty tactics
        tactics = self._analyze_counterparty_tactics(email_thread)
        
        # Calculate leverage
        leverage = self._calculate_leverage(elements, context)
        
        # Generate counter-offer suggestions
        counter_offers = self._generate_counter_offers(elements, leverage)
        
        # Assess BATNA
        batna = self._assess_batna(context, elements)
        
        # Provide coaching
        coaching = self._generate_coaching(stage, tactics, leverage)
        
        # Risk assessment
        risks = self._assess_negotiation_risks(elements, tactics)
        
        return {
            'analysis_id': f"neg_{datetime.now().strftime('%Y%m%d%H%M%S')}",
            'timestamp': datetime.now().isoformat(),
            'negotiation_stage': stage,
            'elements': elements,
            'counterparty_tactics': tactics,
            'leverage_score': leverage,
            'counter_offers': counter_offers,
            'batna_assessment': batna,
            'coaching_tips': coaching,
            'risks': risks,
            'reply_all_strategy': self._determine_reply_all_strategy(email_thread, stage)
        }
    
    def _extract_negotiation_elements(self, thread: List[Dict]) -> Dict[str, Any]:
        """Extract key negotiation elements from email thread."""
        elements = {
            'positions': [],
            'demands': [],
            'concessions': [],
            'deadlines': [],
            'anchors': [],
            'trade_offs': []
        }
        
        for email in thread:
            content = email.get('body', '').lower()
            
            # Extract positions
            if 'we propose' in content or 'our position is' in content:
                elements['positions'].append(email.get('from', ''))
            
            # Extract demands
            if 'we require' in content or 'we need' in content or 'must have' in content:
                elements['demands'].append({
                    'from': email.get('from', ''),
                    'content': email.get('body', '')[:200]
                })
            
            # Extract concessions
            if 'we can offer' in content or 'we agree to' in content or 'concession' in content:
                elements['concessions'].append({
                    'from': email.get('from', ''),
                    'content': email.get('body', '')[:200]
                })
            
            # Extract deadlines
            if 'by' in content and ('date' in content or 'deadline' in content):
                elements['deadlines'].append(email.get('body', '')[:200])
            
            # Extract anchors (initial offers)
            if any(word in content for word in ['$', 'price', 'cost', 'fee']):
                elements['anchors'].append({
                    'from': email.get('from', ''),
                    'content': email.get('body', '')[:200]
                })
        
        return elements
    
    def _identify_negotiation_stage(self, elements: Dict) -> str:
        """Identify current negotiation stage."""
        if not elements['positions'] and not elements['anchors']:
            return 'preparation'
        elif elements['anchors'] and not elements['concessions']:
            return 'opening'
        elif elements['concessions'] and len(elements['concessions']) < 3:
            return 'bargaining'
        elif len(elements['concessions']) >= 3:
            return 'closing'
        else:
            return 'stalemate'
    
    def _analyze_counterparty_tactics(self, thread: List[Dict]) -> Dict[str, Any]:
        """Analyze negotiation tactics used by counterparty."""
        tactics = {
            'detected': [],
            'aggressiveness': 'moderate',
            'flexibility': 'unknown',
            'urgency': 'low'
        }
        
        all_content = ' '.join([email.get('body', '').lower() for email in thread])
        
        # Detect tactics
        if 'final offer' in all_content or 'take it or leave it' in all_content:
            tactics['detected'].append('ultimatum')
            tactics['aggressiveness'] = 'high'
        
        if 'we need to decide today' in all_content or 'limited time' in all_content:
            tactics['detected'].append('false_urgency')
            tactics['urgency'] = 'high'
        
        if 'that\'s not acceptable' in all_content or 'we cannot accept' in all_content:
            tactics['detected'].append('rejection')
        
        if 'we can be flexible on' in all_content or 'we\'re open to' in all_content:
            tactics['detected'].append('flexibility_signal')
            tactics['flexibility'] = 'high'
        
        if 'let me check with' in all_content or 'i need to consult' in all_content:
            tactics['detected'].append('limited_authority')
        
        if 'our competitor offers' in all_content or 'we have other options' in all_content:
            tactics['detected'].append('competition_threat')
            tactics['aggressiveness'] = 'high'
        
        return tactics
    
    def _calculate_leverage(self, elements: Dict, context: Dict) -> Dict[str, Any]:
        """Calculate negotiation leverage."""
        leverage_score = 50  # Start neutral
        
        # Factors that increase leverage
        if context.get('has_alternatives'):
            leverage_score += 20
        
        if context.get('counterparty_urgent'):
            leverage_score += 15
        
        if len(elements['concessions']) > len(elements['demands']):
            leverage_score += 10
        
        # Factors that decrease leverage
        if context.get('we_are_urgent'):
            leverage_score -= 20
        
        if not context.get('has_alternatives'):
            leverage_score -= 15
        
        leverage_score = max(0, min(100, leverage_score))
        
        return {
            'score': leverage_score,
            'level': 'strong' if leverage_score >= 70 else 'moderate' if leverage_score >= 40 else 'weak',
            'factors': {
                'alternatives': context.get('has_alternatives', False),
                'time_pressure': context.get('we_are_urgent', False),
                'concession_balance': len(elements['concessions']) - len(elements['demands'])
            }
        }
    
    def _generate_counter_offers(self, elements: Dict, leverage: Dict) -> List[Dict[str, Any]]:
        """Generate strategic counter-offer suggestions."""
        counter_offers = []
        
        if leverage['level'] == 'strong':
            counter_offers.append({
                'type': 'aggressive',
                'description': 'Hold firm on key demands, offer minimal concessions',
                'confidence': 0.8,
                'risk': 'medium'
            })
            counter_offers.append({
                'type': 'package_deal',
                'description': 'Bundle multiple items for better overall value',
                'confidence': 0.7,
                'risk': 'low'
            })
        
        elif leverage['level'] == 'moderate':
            counter_offers.append({
                'type': 'split_difference',
                'description': 'Meet in the middle on contentious points',
                'confidence': 0.6,
                'risk': 'low'
            })
            counter_offers.append({
                'type': 'conditional_concession',
                'description': 'Offer concession only if counterparty reciprocates',
                'confidence': 0.7,
                'risk': 'medium'
            })
        
        else:  # weak leverage
            counter_offers.append({
                'type': 'creative_solution',
                'description': 'Propose alternative that addresses underlying interests',
                'confidence': 0.5,
                'risk': 'high'
            })
            counter_offers.append({
                'type': 'walk_away_ready',
                'description': 'Make final offer with clear walk-away point',
                'confidence': 0.4,
                'risk': 'high'
            })
        
        return counter_offers
    
    def _assess_batna(self, context: Dict, elements: Dict) -> Dict[str, Any]:
        """Assess Best Alternative To Negotiated Agreement."""
        batna = {
            'strength': 'unknown',
            'alternatives': [],
            'walk_away_point': None
        }
        
        if context.get('alternatives'):
            batna['alternatives'] = context['alternatives']
            batna['strength'] = 'strong' if len(batna['alternatives']) >= 2 else 'moderate'
        else:
            batna['strength'] = 'weak'
        
        if context.get('walk_away_point'):
            batna['walk_away_point'] = context['walk_away_point']
        
        return batna
    
    def _generate_coaching(self, stage: str, tactics: Dict, leverage: Dict) -> List[str]:
        """Generate negotiation coaching tips."""
        coaching = []
        
        # Stage-specific coaching
        if stage == 'opening':
            coaching.append("Set ambitious but credible anchors")
            coaching.append("Listen more than you speak to understand their priorities")
        
        elif stage == 'bargaining':
            coaching.append("Trade concessions, don't give them away")
            coaching.append("Use silence strategically after making offers")
        
        elif stage == 'closing':
            coaching.append("Summarize agreements to avoid misunderstandings")
            coaching.append("Get commitments in writing")
        
        # Tactic-specific coaching
        if 'ultimatum' in tactics['detected']:
            coaching.append("Test the ultimatum - they may be bluffing")
        
        if 'false_urgency' in tactics['detected']:
            coaching.append("Don't rush decisions due to artificial deadlines")
        
        if 'competition_threat' in tactics['detected']:
            coaching.append("Ask for specifics about competitor offers")
        
        # Leverage-specific coaching
        if leverage['level'] == 'strong':
            coaching.append("Use your leverage wisely - don't overplay your hand")
        elif leverage['level'] == 'weak':
            coaching.append("Focus on creating value, not just claiming it")
        
        return coaching
    
    def _assess_negotiation_risks(self, elements: Dict, tactics: Dict) -> List[Dict[str, Any]]:
        """Assess negotiation risks."""
        risks = []
        
        if 'ultimatum' in tactics['detected']:
            risks.append({
                'type': 'deal_breaker',
                'severity': 'high',
                'description': 'Counterparty may walk away if demands not met'
            })
        
        if tactics['aggressiveness'] == 'high':
            risks.append({
                'type': 'relationship_damage',
                'severity': 'medium',
                'description': 'Aggressive tactics may harm long-term relationship'
            })
        
        if len(elements['deadlines']) > 0:
            risks.append({
                'type': 'time_pressure',
                'severity': 'medium',
                'description': 'Deadlines may force suboptimal decisions'
            })
        
        return risks
    
    def _determine_reply_all_strategy(self, thread: List[Dict], stage: str) -> Dict[str, Any]:
        """Determine reply-all strategy for negotiation."""
        participants = set()
        for email in thread:
            if email.get('from'):
                participants.add(email['from'])
            if email.get('cc'):
                participants.update(email['cc'])
        
        return {
            'reply_all_recommended': len(participants) > 2,
            'reason': 'Keep all stakeholders aligned during negotiation' if len(participants) > 2 else 'Direct negotiation with primary contact',
            'participant_count': len(participants)
        }


def analyze_email_negotiation(email_thread: List[Dict[str, Any]], context: Dict = None) -> Dict[str, Any]:
    """Main entry point for negotiation analysis."""
    strategist = NegotiationStrategist()
    return strategist.analyze_negotiation(email_thread, context)


if __name__ == '__main__':
    test_thread = [
        {
            'from': 'vendor@supplier.com',
            'body': 'We propose a price of $50,000 for the software license. This is our final offer and we need a decision by Friday.',
            'date': '2024-01-10T10:00:00'
        },
        {
            'from': 'procurement@ourcompany.com',
            'body': 'That price is higher than we expected. We need it to be under $40,000. We have other vendors offering similar solutions.',
            'date': '2024-01-10T14:00:00'
        },
        {
            'from': 'vendor@supplier.com',
            'body': 'We can be flexible on payment terms if that helps. We can offer net-60 instead of net-30.',
            'date': '2024-01-11T09:00:00'
        }
    ]
    
    context = {
        'has_alternatives': True,
        'alternatives': ['Vendor B: $42,000', 'Vendor C: $45,000'],
        'walk_away_point': '$45,000'
    }
    
    result = analyze_email_negotiation(test_thread, context)
    print(json.dumps(result, indent=2))

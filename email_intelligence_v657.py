#!/usr/bin/env python3
"""
V657 - Email Negotiation Intelligence
Detects negotiation stages, leverage points, and optimal counter-offers
in business email conversations. Provides strategic recommendations
based on game theory and behavioral analysis.

Key Features:
- Negotiation stage detection (opening, exploration, bargaining, closing)
- Leverage point identification
- Counter-offer recommendations
- BATNA (Best Alternative To Negotiated Agreement) analysis
- Concession tracking and optimization
- Win-win opportunity detection
- Reply-all enforcement for all multi-recipient communications
"""

import json
import re
from datetime import datetime
from collections import defaultdict
from typing import Dict, List, Optional, Tuple

class EmailNegotiationIntelligence:
    """Analyzes negotiation dynamics in email conversations"""
    
    def __init__(self):
        self.negotiations = {}  # neg_id -> negotiation data
        self.concessions = defaultdict(list)  # neg_id -> concession history
        self.offers = defaultdict(list)  # neg_id -> offer history
    
    NEGOTIATION_KEYWORDS = {
        'opening': ['propose', 'suggest', 'initial offer', 'starting point', 'would like to discuss', 'interested in'],
        'exploration': ['what if', 'could you', 'would it be possible', 'flexible', 'alternatives', 'options'],
        'bargaining': ['counter', 'however', 'but we need', 'can you do better', 'too high', 'too low', 'discount', 'reduce'],
        'closing': ['agree', 'accept', 'deal', 'final offer', 'let\'s proceed', 'confirmed', 'sign', 'contract']
    }
    
    LEVERAGE_INDICATORS = {
        'time_pressure': ['deadline', 'urgent', 'by tomorrow', 'this week only', 'limited time', 'expiring'],
        'competition': ['other vendor', 'competitor', 'alternative', 'another offer', 'shopping around', 'better deal'],
        'authority': ['need approval', 'my manager', 'board decision', 'authorized', 'budget constraint', 'policy'],
        'scarcity': ['limited supply', 'only a few', 'last chance', 'exclusive', 'rare opportunity'],
        'relationship': ['long-term', 'partnership', 'future business', 'repeat customer', 'loyalty']
    }
    
    def detect_negotiation_stage(self, text: str) -> Dict:
        """Detect the current negotiation stage"""
        text_lower = text.lower()
        stage_scores = {}
        
        for stage, keywords in self.NEGOTIATION_KEYWORDS.items():
            score = sum(1 for kw in keywords if kw in text_lower)
            stage_scores[stage] = score
        
        # Determine dominant stage
        if max(stage_scores.values()) == 0:
            return {'stage': 'unknown', 'confidence': 0, 'scores': stage_scores}
        
        dominant_stage = max(stage_scores, key=stage_scores.get)
        total = sum(stage_scores.values())
        confidence = stage_scores[dominant_stage] / total if total > 0 else 0
        
        return {
            'stage': dominant_stage,
            'confidence': round(confidence, 2),
            'scores': stage_scores,
            'stage_order': ['opening', 'exploration', 'bargaining', 'closing'].index(dominant_stage)
        }
    
    def identify_leverage_points(self, text: str) -> Dict:
        """Identify leverage points in the negotiation"""
        text_lower = text.lower()
        leverage = {}
        
        for category, indicators in self.LEVERAGE_INDICATORS.items():
            matches = [ind for ind in indicators if ind in text_lower]
            if matches:
                leverage[category] = {
                    'detected': True,
                    'indicators': matches,
                    'strength': len(matches) * 25  # 0-100 per category
                }
            else:
                leverage[category] = {'detected': False, 'indicators': [], 'strength': 0}
        
        overall_leverage = sum(v['strength'] for v in leverage.values()) / len(leverage)
        
        return {
            'overall_leverage_score': round(min(100, overall_leverage), 1),
            'categories': leverage,
            'strongest_leverage': max(leverage, key=lambda k: leverage[k]['strength'])
        }
    
    def extract_numbers_and_terms(self, text: str) -> Dict:
        """Extract monetary values and negotiation terms"""
        amounts = re.findall(r'\$[\d,]+(?:\.\d{2})?', text)
        percentages = re.findall(r'\d+(?:\.\d+)?%', text)
        quantities = re.findall(r'\d+\s+(?:units?|items?|licenses?|seats?|months?|years?)', text)
        
        # Extract key terms
        terms = []
        term_patterns = [
            r'(?:payment|delivery|warranty|support|maintenance)\s+(?:terms?|period|conditions?)',
            r'(?:net\s+\d+|monthly|quarterly|annually|yearly)',
            r'(?:SLA|uptime|response time|turnaround)',
        ]
        for pattern in term_patterns:
            matches = re.findall(pattern, text.lower())
            terms.extend(matches)
        
        return {
            'amounts': amounts,
            'percentages': percentages,
            'quantities': quantities,
            'terms': list(set(terms))
        }
    
    def analyze_concessions(self, neg_id: str, current_offer: Dict, previous_offer: Optional[Dict] = None) -> Dict:
        """Analyze concessions made in the negotiation"""
        concession = {
            'timestamp': datetime.now().isoformat(),
            'party': current_offer.get('party', 'unknown'),
            'offer': current_offer,
            'concession_made': False,
            'concession_size': 0
        }
        
        if previous_offer:
            prev_amount = self._parse_amount(previous_offer.get('amount', '$0'))
            curr_amount = self._parse_amount(current_offer.get('amount', '$0'))
            
            if prev_amount and curr_amount:
                diff = abs(curr_amount - prev_amount)
                concession['concession_made'] = diff > 0
                concession['concession_size'] = diff
                concession['concession_percentage'] = round(diff / max(prev_amount, 1) * 100, 1)
        
        self.concessions[neg_id].append(concession)
        
        return concession
    
    def _parse_amount(self, amount_str: str) -> Optional[float]:
        """Parse monetary amount string to float"""
        try:
            return float(amount_str.replace('$', '').replace(',', ''))
        except (ValueError, TypeError):
            return None
    
    def recommend_counter_offer(self, neg_id: str, their_offer: Dict, our_position: Dict) -> Dict:
        """Recommend a counter-offer based on negotiation analysis"""
        their_amount = self._parse_amount(their_offer.get('amount', '$0'))
        our_target = self._parse_amount(our_position.get('target', '$0'))
        our_floor = self._parse_amount(our_position.get('floor', '$0'))
        
        if not all([their_amount, our_target, our_floor]):
            return {'recommendation': 'Insufficient data for counter-offer recommendation'}
        
        # Calculate midpoint strategy
        midpoint = (their_amount + our_target) / 2
        
        # Calculate concession pattern
        concessions = self.concessions.get(neg_id, [])
        their_concessions = [c for c in concessions if c['party'] == 'them']
        avg_their_concession = sum(c['concession_size'] for c in their_concessions) / max(1, len(their_concessions))
        
        # Determine strategy
        gap = our_target - their_amount
        gap_percentage = gap / max(their_amount, 1) * 100
        
        if gap_percentage < 5:
            strategy = 'accept'
            recommended_amount = their_amount
            reasoning = 'Gap is minimal - recommend accepting to close the deal'
        elif gap_percentage < 15:
            strategy = 'split_difference'
            recommended_amount = midpoint
            reasoning = 'Moderate gap - split the difference for mutual benefit'
        elif gap_percentage < 30:
            strategy = 'anchoring'
            recommended_amount = our_target
            reasoning = 'Significant gap - hold position with strong justification'
        else:
            strategy = 'walk_away_or_restructure'
            recommended_amount = our_target
            reasoning = 'Large gap - consider restructuring the deal or exploring alternatives'
        
        # Win-win suggestions
        win_win_options = []
        if gap_percentage > 10:
            win_win_options.extend([
                'Offer extended contract term for lower price',
                'Bundle additional services at marginal cost',
                'Propose phased implementation to reduce upfront cost',
                'Offer volume discount for multi-year commitment'
            ])
        
        return {
            'strategy': strategy,
            'recommended_amount': f"${recommended_amount:,.2f}",
            'their_offer': f"${their_amount:,.2f}",
            'our_target': f"${our_target:,.2f}",
            'gap_percentage': round(gap_percentage, 1),
            'reasoning': reasoning,
            'win_win_options': win_win_options,
            'batna_analysis': {
                'our_floor': f"${our_floor:,.2f}",
                'should_walk_away': recommended_amount < our_floor,
                'recommendation': 'Accept if above floor' if recommended_amount >= our_floor else 'Walk away - below minimum'
            },
            'reply_all_required': True
        }
    
    def analyze_negotiation(self, neg_id: str, emails: List[Dict]) -> Dict:
        """Full negotiation analysis from email thread"""
        stages = []
        all_leverage = []
        all_terms = []
        
        for email in emails:
            text = email.get('body', '') + ' ' + email.get('subject', '')
            stage = self.detect_negotiation_stage(text)
            leverage = self.identify_leverage_points(text)
            terms = self.extract_numbers_and_terms(text)
            
            stages.append({'email_id': email.get('id', ''), **stage})
            all_leverage.append(leverage)
            all_terms.append(terms)
        
        # Determine overall negotiation progress
        stage_progression = [s['stage'] for s in stages]
        current_stage = stages[-1]['stage'] if stages else 'unknown'
        
        # Average leverage
        avg_leverage = sum(l['overall_leverage_score'] for l in all_leverage) / max(1, len(all_leverage))
        
        return {
            'negotiation_id': neg_id,
            'total_emails': len(emails),
            'current_stage': current_stage,
            'stage_progression': stage_progression,
            'avg_leverage_score': round(avg_leverage, 1),
            'terms_extracted': all_terms,
            'concessions_tracked': len(self.concessions.get(neg_id, [])),
            'health_assessment': self._assess_negotiation_health(stages, all_leverage),
            'reply_all_required': True
        }
    
    def _assess_negotiation_health(self, stages: List, leverage: List) -> str:
        """Assess overall negotiation health"""
        if not stages:
            return 'no_data'
        
        current = stages[-1]['stage']
        avg_lev = sum(l['overall_leverage_score'] for l in leverage) / max(1, len(leverage))
        
        if current == 'closing' and avg_lev > 40:
            return 'excellent'
        elif current in ['bargaining', 'closing'] and avg_lev > 25:
            return 'good'
        elif avg_lev > 15:
            return 'fair'
        else:
            return 'needs_attention'


def test_v657():
    """Test V657 Email Negotiation Intelligence"""
    ni = EmailNegotiationIntelligence()
    
    neg_id = 'neg_001'
    
    emails = [
        {'id': 'e1', 'from': 'vendor@supplier.com', 'to': ['procurement@ziontech.com'],
         'subject': 'Initial Proposal - Enterprise License',
         'body': 'We would like to propose an enterprise license at $150,000 per year. This includes full support and maintenance. Interested in discussing a long-term partnership.',
         'timestamp': '2026-05-25T09:00:00'},
        {'id': 'e2', 'from': 'procurement@ziontech.com', 'to': ['vendor@supplier.com'],
         'subject': 'Re: Initial Proposal',
         'body': 'Thank you for the proposal. However, $150,000 is above our budget. Could you do better? We have another vendor offering similar at $90,000. What if we commit to 3 years?',
         'timestamp': '2026-05-26T10:00:00'},
        {'id': 'e3', 'from': 'vendor@supplier.com', 'to': ['procurement@ziontech.com'],
         'subject': 'Re: Counter Offer',
         'body': 'We can reduce to $120,000 for a 3-year commitment. This is our best offer and includes premium support. Limited time - valid until end of week.',
         'timestamp': '2026-05-27T11:00:00'},
    ]
    
    analysis = ni.analyze_negotiation(neg_id, emails)
    
    # Test counter-offer
    counter = ni.recommend_counter_offer(neg_id,
        {'amount': '$120,000', 'party': 'them'},
        {'target': '$100,000', 'floor': '$110,000'})
    
    print("✅ V657 Email Negotiation Intelligence Test")
    print(f"Current Stage: {analysis['current_stage']}")
    print(f"Stage Progression: {analysis['stage_progression']}")
    print(f"Avg Leverage: {analysis['avg_leverage_score']}/100")
    print(f"Health: {analysis['health_assessment']}")
    print(f"\nCounter-Offer Recommendation:")
    print(f"  Strategy: {counter['strategy']}")
    print(f"  Recommended: {counter['recommended_amount']}")
    print(f"  Gap: {counter['gap_percentage']}%")
    print(f"  Reasoning: {counter['reasoning']}")
    if counter.get('win_win_options'):
        print(f"  Win-Win Options: {counter['win_win_options']}")
    
    return analysis


if __name__ == '__main__':
    test_v657()

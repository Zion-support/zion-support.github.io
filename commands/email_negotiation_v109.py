#!/usr/bin/env python3
"""
V109: AI Email Negotiation Intelligence
Detects negotiation patterns, suggests counter-offers, tracks deal progression,
and provides strategic recommendations for optimal outcomes.
"""

import json
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from dataclasses import dataclass, field
from enum import Enum


class NegotiationPhase(Enum):
    INITIAL_OFFER = "initial_offer"
    COUNTER_OFFER = "counter_offer"
    CONCESSION = "concession"
    CLOSING = "closing"
    WON = "won"
    LOST = "lost"


class NegotiationTactic(Enum):
    ANCHORING = "anchoring"
    RECIPROCITY = "reciprocity"
    SCARCITY = "scarcity"
    AUTHORITY = "authority"
    SOCIAL_PROOF = "social_proof"
    COMMITMENT = "commitment"
    LIKING = "liking"
    URGENCY = "urgency"


@dataclass
class DealTracker:
    deal_id: str
    counterparty: str
    current_phase: NegotiationPhase
    our_position: float
    their_position: float
    concessions_made: List[Dict] = field(default_factory=list)
    tactics_detected: List[NegotiationTactic] = field(default_factory=list)
    win_probability: float = 0.5
    recommended_strategy: str = ""
    historical_deals: List[Dict] = field(default_factory=list)


class V109NegotiationIntelligence:
    """
    V109: AI Email Negotiation Intelligence
    
    Features:
    1. Negotiation phase detection
    2. Tactic recognition
    3. Counter-offer suggestions
    4. Deal progression tracking
    5. Win probability calculation
    6. Strategic recommendations
    """
    
    def __init__(self):
        self.deals: Dict[str, DealTracker] = {}
        
        # Negotiation tactic patterns
        self.tactic_patterns = {
            NegotiationTactic.ANCHORING: ['starting at', 'initial offer', 'typically costs'],
            NegotiationTactic.RECIPROCITY: ['we can offer', 'in return', 'if you'],
            NegotiationTactic.SCARCITY: ['limited time', 'only available', 'running out'],
            NegotiationTactic.AUTHORITY: ['our experts', 'industry standard', 'best practice'],
            NegotiationTactic.SOCIAL_PROOF: ['other clients', 'most companies', 'popular choice'],
            NegotiationTactic.COMMITMENT: ['you mentioned', 'as discussed', 'you agreed'],
            NegotiationTactic.LIKING: ['we appreciate', 'value your', 'great partner'],
            NegotiationTactic.URGENCY: ['need to decide', 'deadline', 'expiring']
        }
    
    def analyze_negotiation(self, email_data: Dict) -> Dict:
        """Analyze email for negotiation patterns."""
        email_id = email_data.get('id', 'unknown')
        sender = email_data.get('from', 'unknown')
        body = email_data.get('body', '')
        subject = email_data.get('subject', '')
        
        # Get or create deal tracker
        deal_id = self._get_deal_id(sender, subject)
        
        if deal_id not in self.deals:
            self.deals[deal_id] = DealTracker(
                deal_id=deal_id,
                counterparty=sender,
                current_phase=NegotiationPhase.INITIAL_OFFER,
                our_position=0,
                their_position=0
            )
        
        deal = self.deals[deal_id]
        
        # Detect negotiation phase
        phase = self._detect_phase(body, subject)
        deal.current_phase = phase
        
        # Detect tactics
        tactics = self._detect_tactics(body)
        deal.tactics_detected.extend(tactics)
        
        # Extract positions (prices, terms)
        positions = self._extract_positions(body)
        if positions:
            deal.their_position = positions.get('their_offer', 0)
        
        # Calculate win probability
        win_prob = self._calculate_win_probability(deal)
        deal.win_probability = win_prob
        
        # Generate strategy recommendation
        strategy = self._recommend_strategy(deal, tactics)
        deal.recommended_strategy = strategy
        
        # Suggest counter-offer
        counter_offer = self._suggest_counter_offer(deal)
        
        return {
            'email_id': email_id,
            'deal_id': deal_id,
            'phase': phase.value,
            'tactics_detected': [t.value for t in tactics],
            'their_position': deal.their_position,
            'win_probability': win_prob,
            'recommended_strategy': strategy,
            'suggested_counter_offer': counter_offer,
            'reply_all': True
        }
    
    def _get_deal_id(self, sender: str, subject: str) -> str:
        """Generate deal ID from sender and subject."""
        import hashlib
        combined = f"{sender}_{subject}".lower()
        return hashlib.md5(combined.encode()).hexdigest()[:12]
    
    def _detect_phase(self, body: str, subject: str) -> NegotiationPhase:
        """Detect negotiation phase from email content."""
        text = f"{subject} {body}".lower()
        
        if any(word in text for word in ['accept', 'agree', 'deal', 'approved']):
            return NegotiationPhase.WON
        elif any(word in text for word in ['reject', 'decline', 'not interested']):
            return NegotiationPhase.LOST
        elif any(word in text for word in ['final offer', 'last chance', 'closing']):
            return NegotiationPhase.CLOSING
        elif any(word in text for word in ['can we', 'would you', 'flexible', 'adjust']):
            return NegotiationPhase.CONCESSION
        elif any(word in text for word in ['counter', 'instead', 'how about', 'alternative']):
            return NegotiationPhase.COUNTER_OFFER
        else:
            return NegotiationPhase.INITIAL_OFFER
    
    def _detect_tactics(self, body: str) -> List[NegotiationTactic]:
        """Detect negotiation tactics in email."""
        detected = []
        body_lower = body.lower()
        
        for tactic, patterns in self.tactic_patterns.items():
            if any(pattern in body_lower for pattern in patterns):
                detected.append(tactic)
        
        return detected
    
    def _extract_positions(self, body: str) -> Dict:
        """Extract numerical positions (prices, terms) from email."""
        import re
        positions = {}
        
        # Find dollar amounts
        amounts = re.findall(r'\$?([\d,]+\.?\d*)', body)
        if amounts:
            # Convert to float and get the most relevant one
            amounts_float = [float(a.replace(',', '')) for a in amounts]
            positions['their_offer'] = max(amounts_float)
        
        return positions
    
    def _calculate_win_probability(self, deal: DealTracker) -> float:
        """Calculate probability of winning the deal."""
        prob = 0.5
        
        # Phase-based adjustment
        if deal.current_phase == NegotiationPhase.WON:
            return 1.0
        elif deal.current_phase == NegotiationPhase.LOST:
            return 0.0
        elif deal.current_phase == NegotiationPhase.CLOSING:
            prob += 0.3
        elif deal.current_phase == NegotiationPhase.CONCESSION:
            prob += 0.1
        
        # Tactic-based adjustment
        if NegotiationTactic.RECIPROCITY in deal.tactics_detected:
            prob += 0.1
        if NegotiationTactic.URGENCY in deal.tactics_detected:
            prob -= 0.1
        
        return min(1.0, max(0.0, prob))
    
    def _recommend_strategy(self, deal: DealTracker, tactics: List[NegotiationTactic]) -> str:
        """Recommend negotiation strategy."""
        if deal.current_phase == NegotiationPhase.CLOSING:
            return "Push for final agreement with minor concessions"
        elif NegotiationTactic.SCARCITY in tactics:
            return "Test the scarcity claim; express interest but don't rush"
        elif NegotiationTactic.ANCHORING in tactics:
            return "Counter-anchor with your own position; don't accept first offer"
        elif deal.win_probability > 0.7:
            return "Maintain firm position; high probability of success"
        elif deal.win_probability < 0.3:
            return "Consider significant concessions or alternative deals"
        else:
            return "Balanced approach: make strategic concessions while protecting key interests"
    
    def _suggest_counter_offer(self, deal: DealTracker) -> Dict:
        """Suggest counter-offer based on current positions."""
        if deal.their_position == 0:
            return {'type': 'await_position', 'message': 'Wait for their offer'}
        
        # Suggest counter at 70-80% of their position
        counter = deal.their_position * 0.75
        
        return {
            'type': 'counter_offer',
            'amount': counter,
            'reasoning': 'Counter at 75% to leave room for negotiation',
            'concessions': ['Extended timeline', 'Additional support', 'Volume discount']
        }


if __name__ == "__main__":
    # Test the engine
    engine = V109NegotiationIntelligence()
    
    test_email = {
        'id': 'email_123',
        'from': 'vendor@company.com',
        'subject': 'Re: Pricing Discussion',
        'body': '''Hi,
        
Thank you for your interest. Our standard pricing starts at $50,000 for this scope.

However, we can offer a limited-time discount of 10% if you commit by Friday.

Other clients have found great value at this price point.

What are your thoughts?

Best regards,
Vendor'''
    }
    
    result = engine.analyze_negotiation(test_email)
    print(json.dumps(result, indent=2))

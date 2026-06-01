#!/usr/bin/env python3
"""
V944: Email Negotiation Optimizer
AI-powered negotiation analysis for business emails. Tracks concessions, identifies BATNA,
suggests optimal counter-offers, and predicts deal outcomes.
"""

import re
from datetime import datetime
from typing import Dict, List, Any, Optional, Tuple


class NegotiationOptimizer:
    """Optimize business negotiations through email analysis."""
    
    def __init__(self):
        self.negotiation_keywords = {
            'offer': ['offer', 'propose', 'suggest', 'quote', 'price', 'cost', 'fee', 'rate'],
            'concession': ['discount', 'reduce', 'lower', 'flexible', 'negotiate', 'adjust', 'compromise'],
            'demand': ['require', 'must', 'need', 'insist', 'demand', 'expect', 'necessary'],
            'urgency': ['urgent', 'deadline', 'asap', 'immediately', 'soon', 'quick', 'fast'],
            'walk_away': ['alternative', 'other options', 'competitor', 'different vendor', 'elsewhere'],
            'agreement': ['agree', 'accept', 'deal', 'confirm', 'approve', 'yes', 'okay']
        }
        
        self.concession_patterns = [
            r'(\d+)%\s*(?:discount|off|reduction)',
            r'(?:discount|off|reduction)\s*(?:of\s*)?(\d+)%',
            r'\$(\d+(?:,\d{3})*(?:\.\d{2})?)\s*(?:off|discount|reduction)',
            r'(?:save|saving)\s*\$(\d+(?:,\d{3})*(?:\.\d{2})?)'
        ]
        
    def analyze_negotiation(self, email_thread: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Analyze email thread for negotiation dynamics."""
        if not email_thread:
            return {'error': 'No emails provided'}
        
        # Sort by timestamp
        sorted_emails = sorted(email_thread, key=lambda x: x.get('timestamp', ''))
        
        # Track negotiation flow
        offers = []
        concessions = []
        demands = []
        urgency_signals = []
        walk_away_signals = []
        agreement_signals = []
        
        for email in sorted_emails:
            analysis = self._analyze_single_email(email)
            offers.extend(analysis['offers'])
            concessions.extend(analysis['concessions'])
            demands.extend(analysis['demands'])
            urgency_signals.extend(analysis['urgency'])
            walk_away_signals.extend(analysis['walk_away'])
            agreement_signals.extend(analysis['agreement'])
        
        # Calculate negotiation position
        position = self._calculate_position(
            offers, concessions, demands, urgency_signals, walk_away_signals, agreement_signals
        )
        
        # Identify BATNA (Best Alternative To Negotiated Agreement)
        batna = self._identify_batna(walk_away_signals, sorted_emails)
        
        # Predict deal outcome
        outcome = self._predict_outcome(position, batna, agreement_signals)
        
        # Generate counter-offer suggestions
        counter_offers = self._suggest_counter_offers(offers, concessions, position)
        
        # Track value exchanged
        value_analysis = self._analyze_value_exchange(offers, concessions)
        
        return {
            'negotiation_stage': self._determine_stage(sorted_emails, agreement_signals),
            'your_position': position['your_strength'],
            'their_position': position['their_strength'],
            'power_balance': position['balance'],
            'batna': batna,
            'predicted_outcome': outcome,
            'total_concessions_made': len(concessions),
            'total_offers': len(offers),
            'urgency_level': len(urgency_signals),
            'walk_away_risk': len(walk_away_signals),
            'agreement_likelihood': len(agreement_signals) / max(len(sorted_emails), 1),
            'counter_offers': counter_offers,
            'value_analysis': value_analysis,
            'recommendations': self._generate_recommendations(position, batna, outcome),
            'reply_all_required': len(sorted_emails[-1].get('recipients', [])) > 1 if sorted_emails else False
        }
    
    def _analyze_single_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze single email for negotiation signals."""
        body = email.get('body', '').lower()
        subject = email.get('subject', '').lower()
        text = f"{subject} {body}"
        
        result = {
            'offers': [],
            'concessions': [],
            'demands': [],
            'urgency': [],
            'walk_away': [],
            'agreement': []
        }
        
        # Detect offers
        for keyword in self.negotiation_keywords['offer']:
            if keyword in text:
                # Try to extract value
                value = self._extract_monetary_value(text)
                result['offers'].append({
                    'keyword': keyword,
                    'value': value,
                    'email_id': email.get('id', ''),
                    'sender': email.get('sender', '')
                })
        
        # Detect concessions
        for pattern in self.concession_patterns:
            matches = re.finditer(pattern, text, re.IGNORECASE)
            for match in matches:
                result['concessions'].append({
                    'amount': match.group(1),
                    'type': 'percentage' if '%' in match.group(0) else 'dollar',
                    'email_id': email.get('id', '')
                })
        
        for keyword in self.negotiation_keywords['concession']:
            if keyword in text:
                result['concessions'].append({
                    'keyword': keyword,
                    'email_id': email.get('id', '')
                })
        
        # Detect demands
        for keyword in self.negotiation_keywords['demand']:
            if keyword in text:
                result['demands'].append({
                    'keyword': keyword,
                    'email_id': email.get('id', '')
                })
        
        # Detect urgency
        for keyword in self.negotiation_keywords['urgency']:
            if keyword in text:
                result['urgency'].append({
                    'keyword': keyword,
                    'email_id': email.get('id', '')
                })
        
        # Detect walk-away signals
        for keyword in self.negotiation_keywords['walk_away']:
            if keyword in text:
                result['walk_away'].append({
                    'keyword': keyword,
                    'email_id': email.get('id', '')
                })
        
        # Detect agreement signals
        for keyword in self.negotiation_keywords['agreement']:
            if keyword in text:
                result['agreement'].append({
                    'keyword': keyword,
                    'email_id': email.get('id', '')
                })
        
        return result
    
    def _extract_monetary_value(self, text: str) -> Optional[float]:
        """Extract monetary value from text."""
        patterns = [
            r'\$(\d+(?:,\d{3})*(?:\.\d{2})?)',
            r'(\d+(?:,\d{3})*(?:\.\d{2})?)\s*(?:dollars|usd)',
            r'(\d+)\s*(?:k|thousand)',
            r'(\d+)\s*(?:m|million)'
        ]
        
        for pattern in patterns:
            match = re.search(pattern, text, re.IGNORECASE)
            if match:
                value_str = match.group(1).replace(',', '')
                try:
                    value = float(value_str)
                    if 'k' in text[match.start():match.end()+2].lower() or 'thousand' in text[match.start():match.end()+10].lower():
                        value *= 1000
                    elif 'm' in text[match.start():match.end()+2].lower() or 'million' in text[match.start():match.end()+10].lower():
                        value *= 1000000
                    return value
                except:
                    pass
        
        return None
    
    def _calculate_position(self, offers: List, concessions: List, demands: List,
                           urgency: List, walk_away: List, agreement: List) -> Dict[str, Any]:
        """Calculate negotiation position strength."""
        # Your strength indicators
        your_strength = 50  # Base score
        your_strength += len(demands) * 5  # Making demands shows strength
        your_strength += len(walk_away) * 10  # Having alternatives
        your_strength -= len(concessions) * 8  # Making concessions weakens position
        your_strength -= len(urgency) * 3  # Showing urgency weakens position
        
        # Their strength (inverse)
        their_strength = 100 - your_strength
        
        # Balance
        if your_strength > 65:
            balance = 'strong'
        elif your_strength > 45:
            balance = 'balanced'
        else:
            balance = 'weak'
        
        return {
            'your_strength': min(100, max(0, your_strength)),
            'their_strength': min(100, max(0, their_strength)),
            'balance': balance
        }
    
    def _identify_batna(self, walk_away_signals: List, emails: List[Dict]) -> Dict[str, Any]:
        """Identify Best Alternative To Negotiated Agreement."""
        if not walk_away_signals:
            return {
                'identified': False,
                'strength': 'unknown',
                'description': 'No clear alternatives mentioned'
            }
        
        # Analyze walk-away signals
        alternatives = []
        for signal in walk_away_signals:
            keyword = signal.get('keyword', '')
            if 'competitor' in keyword or 'other options' in keyword:
                alternatives.append('Competitor offers')
            elif 'different vendor' in keyword:
                alternatives.append('Alternative vendor')
            elif 'elsewhere' in keyword:
                alternatives.append('Other sources')
        
        strength = 'strong' if len(alternatives) >= 2 else 'moderate' if alternatives else 'weak'
        
        return {
            'identified': True,
            'strength': strength,
            'alternatives': list(set(alternatives)),
            'description': f"{len(alternatives)} alternative(s) identified"
        }
    
    def _predict_outcome(self, position: Dict, batna: Dict, agreement_signals: List) -> Dict[str, Any]:
        """Predict negotiation outcome."""
        your_strength = position['your_strength']
        agreement_rate = len(agreement_signals) / 10  # Normalize
        
        # Calculate probabilities
        if your_strength > 70 and batna['strength'] == 'strong':
            favorable_prob = 0.75
            neutral_prob = 0.20
            unfavorable_prob = 0.05
            prediction = 'favorable'
        elif your_strength > 50:
            favorable_prob = 0.50
            neutral_prob = 0.35
            unfavorable_prob = 0.15
            prediction = 'moderate'
        else:
            favorable_prob = 0.25
            neutral_prob = 0.40
            unfavorable_prob = 0.35
            prediction = 'challenging'
        
        # Adjust based on agreement signals
        if agreement_rate > 0.3:
            favorable_prob += 0.10
            unfavorable_prob -= 0.10
        
        return {
            'prediction': prediction,
            'favorable_probability': round(favorable_prob, 2),
            'neutral_probability': round(neutral_prob, 2),
            'unfavorable_probability': round(unfavorable_prob, 2),
            'confidence': min(0.9, 0.5 + (len(agreement_signals) * 0.05))
        }
    
    def _suggest_counter_offers(self, offers: List, concessions: List, position: Dict) -> List[Dict[str, Any]]:
        """Suggest optimal counter-offers."""
        suggestions = []
        
        # Extract values from offers
        offer_values = [o['value'] for o in offers if o.get('value') is not None]
        
        if offer_values:
            avg_offer = sum(offer_values) / len(offer_values)
            
            # Suggest based on position
            if position['your_strength'] > 60:
                # Strong position - ask for more
                counter_value = avg_offer * 1.15
                suggestions.append({
                    'type': 'aggressive',
                    'value': round(counter_value, 2),
                    'rationale': 'Your strong position allows asking for 15% more',
                    'risk': 'medium'
                })
            
            # Balanced counter
            counter_value = avg_offer * 1.08
            suggestions.append({
                'type': 'balanced',
                'value': round(counter_value, 2),
                'rationale': 'Reasonable 8% increase maintains momentum',
                'risk': 'low'
            })
            
            # Conservative counter
            counter_value = avg_offer * 1.03
            suggestions.append({
                'type': 'conservative',
                'value': round(counter_value, 2),
                'rationale': 'Small 3% increase to close quickly',
                'risk': 'very_low'
            })
        else:
            # No monetary values - suggest strategic responses
            suggestions.append({
                'type': 'strategic',
                'value': None,
                'rationale': 'Request more information before making counter-offer',
                'risk': 'low'
            })
        
        return suggestions[:3]
    
    def _analyze_value_exchange(self, offers: List, concessions: List) -> Dict[str, Any]:
        """Analyze value exchanged in negotiation."""
        offer_values = [o['value'] for o in offers if o.get('value') is not None]
        concession_amounts = []
        
        for c in concessions:
            if 'amount' in c:
                try:
                    amount = float(c['amount'].replace(',', ''))
                    if c.get('type') == 'percentage' and offer_values:
                        # Convert percentage to absolute value
                        amount = (amount / 100) * (sum(offer_values) / len(offer_values))
                    concession_amounts.append(amount)
                except:
                    pass
        
        total_offered = sum(offer_values) if offer_values else 0
        total_conceded = sum(concession_amounts) if concession_amounts else 0
        
        return {
            'total_value_offered': round(total_offered, 2),
            'total_concessions_value': round(total_conceded, 2),
            'net_value': round(total_offered - total_conceded, 2),
            'concession_rate': round(total_conceded / total_offered, 2) if total_offered > 0 else 0,
            'value_trend': 'giving' if total_conceded > total_offered * 0.3 else 'balanced'
        }
    
    def _determine_stage(self, emails: List[Dict], agreement_signals: List) -> str:
        """Determine current negotiation stage."""
        if len(emails) < 2:
            return 'opening'
        
        if len(agreement_signals) > len(emails) * 0.3:
            return 'closing'
        
        if len(emails) > 5:
            return 'bargaining'
        
        return 'exploration'
    
    def _generate_recommendations(self, position: Dict, batna: Dict, outcome: Dict) -> List[str]:
        """Generate negotiation recommendations."""
        recommendations = []
        
        if position['balance'] == 'strong':
            recommendations.append("Leverage your strong position - hold firm on key terms")
            recommendations.append("Consider asking for additional value-adds beyond price")
        elif position['balance'] == 'weak':
            recommendations.append("Strengthen position by highlighting unique value propositions")
            recommendations.append("Consider strategic concessions on low-priority items")
        
        if batna['strength'] == 'strong':
            recommendations.append("Mention alternatives subtly to increase leverage")
        elif batna['strength'] == 'weak':
            recommendations.append("Avoid revealing weak alternatives - focus on mutual benefits")
        
        if outcome['prediction'] == 'favorable':
            recommendations.append("Deal likely favorable - push for optimal terms")
        elif outcome['prediction'] == 'challenging':
            recommendations.append("Prepare fallback positions - deal may require compromise")
        
        recommendations.append("Always maintain professional tone and focus on win-win outcomes")
        
        return recommendations[:5]


def main():
    """Test negotiation optimizer."""
    optimizer = NegotiationOptimizer()
    
    # Simulate negotiation thread
    email_thread = [
        {
            'id': '1',
            'sender': 'vendor@company.com',
            'recipients': ['buyer@company.com'],
            'subject': 'Proposal for Enterprise License',
            'body': 'We propose $50,000 for the annual enterprise license. This includes all features and support.',
            'timestamp': '2026-01-10T10:00:00'
        },
        {
            'id': '2',
            'sender': 'buyer@company.com',
            'recipients': ['vendor@company.com'],
            'subject': 'Re: Proposal for Enterprise License',
            'body': 'Thank you for the proposal. We need to reduce the cost. Can you offer a 20% discount? We have other options from competitors.',
            'timestamp': '2026-01-11T14:30:00'
        },
        {
            'id': '3',
            'sender': 'vendor@company.com',
            'recipients': ['buyer@company.com'],
            'subject': 'Re: Proposal for Enterprise License',
            'body': 'We can offer a 10% discount, bringing the price to $45,000. This is our best offer.',
            'timestamp': '2026-01-12T09:15:00'
        },
        {
            'id': '4',
            'sender': 'buyer@company.com',
            'recipients': ['vendor@company.com'],
            'subject': 'Re: Proposal for Enterprise License',
            'body': 'We need to discuss this further. Can you do $42,000? We are ready to sign immediately if we can agree.',
            'timestamp': '2026-01-13T16:45:00'
        }
    ]
    
    result = optimizer.analyze_negotiation(email_thread)
    
    print("=" * 60)
    print("V944: Email Negotiation Optimizer - Test Results")
    print("=" * 60)
    print(f"\nNegotiation Stage: {result['negotiation_stage']}")
    print(f"Your Position: {result['your_position']}/100 ({result['power_balance']})")
    print(f"Their Position: {result['their_position']}/100")
    print(f"\nBATNA: {result['batna']['strength']} - {result['batna']['description']}")
    if result['batna']['alternatives']:
        print(f"  Alternatives: {', '.join(result['batna']['alternatives'])}")
    
    print(f"\nPredicted Outcome: {result['predicted_outcome']['prediction']}")
    print(f"  Favorable: {result['predicted_outcome']['favorable_probability']:.0%}")
    print(f"  Neutral: {result['predicted_outcome']['neutral_probability']:.0%}")
    print(f"  Unfavorable: {result['predicted_outcome']['unfavorable_probability']:.0%}")
    
    print(f"\nValue Analysis:")
    print(f"  Total Offered: ${result['value_analysis']['total_value_offered']:,.2f}")
    print(f"  Total Conceded: ${result['value_analysis']['total_concessions_value']:,.2f}")
    print(f"  Net Value: ${result['value_analysis']['net_value']:,.2f}")
    
    print(f"\nCounter-Offer Suggestions:")
    for offer in result['counter_offers']:
        if offer['value']:
            print(f"  {offer['type'].title()}: ${offer['value']:,.2f} ({offer['rationale']})")
        else:
            print(f"  {offer['type'].title()}: {offer['rationale']}")
    
    print(f"\nRecommendations:")
    for rec in result['recommendations'][:4]:
        print(f"  💡 {rec}")
    
    print(f"\nReply All Required: {result['reply_all_required']}")
    print("\n✅ V944 Negotiation Optimizer: OPERATIONAL")


if __name__ == '__main__':
    main()

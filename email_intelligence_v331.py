"""
Email Intelligence V331 - Negotiation Assistant
Analyzes negotiation dynamics, suggests optimal counteroffers, tracks concessions,
and predicts deal outcomes based on email sentiment and language patterns.
Enforces reply-all and case-by-case analysis.
"""

from datetime import datetime
from typing import Dict, List
import json
import re


class EmailNegotiationAssistant:
    """
    V331: Intelligent negotiation support with deal tracking, concession analysis,
    and outcome prediction for business negotiations via email.
    """
    
    VERSION = "V331"
    ENGINE_NAME = "Negotiation Assistant"
    
    def __init__(self):
        self.negotiation_history = {}
        self.deal_tracker = {}
    
    def analyze_email(self, email_data: Dict) -> Dict:
        """Analyze email for negotiation context case-by-case."""
        sender = email_data.get('from', '')
        content = email_data.get('body', '')
        subject = email_data.get('subject', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # Detect negotiation signals
        negotiation_signals = self._detect_negotiation_signals(content, subject)
        
        # Analyze negotiation position
        position = self._analyze_position(content)
        
        # Track concessions
        concessions = self._track_concessions(content, sender)
        
        # Sentiment analysis for negotiation
        sentiment = self._analyze_negotiation_sentiment(content)
        
        # Predict deal outcome
        outcome_prediction = self._predict_outcome(position, sentiment, concessions)
        
        # Generate strategy recommendations
        strategy = self._generate_strategy(position, sentiment, outcome_prediction)
        
        analysis = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': timestamp,
            'sender': sender,
            'negotiation_signals': negotiation_signals,
            'position': position,
            'concessions': concessions,
            'sentiment': sentiment,
            'outcome_prediction': outcome_prediction,
            'strategy_recommendations': strategy
        }
        
        # Track negotiation
        self._update_negotiation_tracker(sender, subject, analysis)
        
        return analysis
    
    def generate_response(self, email_data: Dict) -> Dict:
        """Generate negotiation-aware response. ALWAYS enforces reply-all."""
        sender = email_data.get('from', '')
        to_recipients = email_data.get('to', [])
        cc_recipients = email_data.get('cc', [])
        subject = email_data.get('subject', '')
        content = email_data.get('body', '')
        
        # Analyze email
        analysis = self.analyze_email(email_data)
        
        # ENFORCE REPLY-ALL
        all_recipients = self._enforce_reply_all(to_recipients, cc_recipients, sender)
        
        # Generate strategic response
        response_body = self._generate_negotiation_response(sender, content, analysis)
        
        response = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': datetime.now().isoformat(),
            'to': all_recipients,
            'subject': f"Re: {subject}" if not subject.lower().startswith('re:') else subject,
            'body': response_body,
            'negotiation_strategy': analysis['strategy_recommendations']['approach'],
            'position_strength': analysis['position']['strength'],
            'predicted_outcome': analysis['outcome_prediction']['likelihood'],
            'reply_all_enforced': True
        }
        
        return response
    
    def _detect_negotiation_signals(self, content: str, subject: str) -> Dict:
        """Detect negotiation signals in email"""
        text = f"{subject} {content}".lower()
        
        # Negotiation keywords
        negotiation_keywords = [
            'negotiate', 'offer', 'counter', 'proposal', 'terms', 'price',
            'discount', 'deal', 'agreement', 'contract', 'budget', 'cost'
        ]
        
        # Urgency signals
        urgency_keywords = ['urgent', 'asap', 'immediately', 'deadline', 'time-sensitive']
        
        # Flexibility signals
        flexibility_keywords = ['flexible', 'open to', 'willing to', 'can adjust', 'room for']
        
        # Firmness signals
        firmness_keywords = ['final offer', 'non-negotiable', 'firm', 'must have', 'require']
        
        negotiation_count = sum(1 for kw in negotiation_keywords if kw in text)
        urgency_count = sum(1 for kw in urgency_keywords if kw in text)
        flexibility_count = sum(1 for kw in flexibility_keywords if kw in text)
        firmness_count = sum(1 for kw in firmness_keywords if kw in text)
        
        is_negotiation = negotiation_count >= 2
        
        return {
            'is_negotiation': is_negotiation,
            'negotiation_score': negotiation_count,
            'urgency_level': 'high' if urgency_count >= 2 else 'medium' if urgency_count == 1 else 'low',
            'flexibility': flexibility_count > 0,
            'firmness': firmness_count > 0,
            'signals_detected': negotiation_count + urgency_count + flexibility_count + firmness_count
        }
    
    def _analyze_position(self, content: str) -> Dict:
        """Analyze negotiation position"""
        content_lower = content.lower()
        
        # Power indicators
        power_phrases = ['we have other options', 'competitor', 'alternative', 'walk away']
        weakness_phrases = ['need this', 'must have', 'desperate', 'only option']
        
        power_count = sum(1 for phrase in power_phrases if phrase in content_lower)
        weakness_count = sum(1 for phrase in weakness_phrases if phrase in content_lower)
        
        if power_count > weakness_count:
            strength = 'strong'
            leverage = 'high'
        elif weakness_count > power_count:
            strength = 'weak'
            leverage = 'low'
        else:
            strength = 'balanced'
            leverage = 'medium'
        
        return {
            'strength': strength,
            'leverage': leverage,
            'power_indicators': power_count,
            'weakness_indicators': weakness_count
        }
    
    def _track_concessions(self, content: str, sender: str) -> List[Dict]:
        """Track concessions made in negotiation"""
        concessions = []
        
        # Concession patterns
        concession_patterns = [
            r'(?:we can|we will|we agree to|we accept) (.+?)[.]',
            r'(?:discount|reduce|lower) (?:by|to) (.+?)[.]',
            r'(?:willing to|open to) (.+?)[.]'
        ]
        
        for pattern in concession_patterns:
            matches = re.findall(pattern, content, re.IGNORECASE)
            for match in matches:
                concessions.append({
                    'concession': match.strip(),
                    'made_by': sender,
                    'timestamp': datetime.now().isoformat()
                })
        
        return concessions
    
    def _analyze_negotiation_sentiment(self, content: str) -> Dict:
        """Analyze sentiment in negotiation context"""
        # Positive negotiation signals
        positive_signals = ['agree', 'accept', 'pleased', 'happy', 'good', 'excellent', 'fair']
        # Negative negotiation signals
        negative_signals = ['disagree', 'reject', 'unacceptable', 'too high', 'too low', 'unfair']
        
        content_lower = content.lower()
        
        positive_count = sum(1 for signal in positive_signals if signal in content_lower)
        negative_count = sum(1 for signal in negative_signals if signal in content_lower)
        
        if positive_count > negative_count:
            sentiment = 'positive'
            cooperation = 'high'
        elif negative_count > positive_count:
            sentiment = 'negative'
            cooperation = 'low'
        else:
            sentiment = 'neutral'
            cooperation = 'medium'
        
        return {
            'sentiment': sentiment,
            'cooperation_level': cooperation,
            'positive_signals': positive_count,
            'negative_signals': negative_count
        }
    
    def _predict_outcome(self, position: Dict, sentiment: Dict, concessions: List) -> Dict:
        """Predict deal outcome"""
        base_probability = 50
        
        # Adjust based on position
        if position['strength'] == 'strong':
            base_probability += 20
        elif position['strength'] == 'weak':
            base_probability -= 20
        
        # Adjust based on sentiment
        if sentiment['sentiment'] == 'positive':
            base_probability += 15
        elif sentiment['sentiment'] == 'negative':
            base_probability -= 15
        
        # Adjust based on concessions
        if len(concessions) > 0:
            base_probability += 10
        
        likelihood = min(100, max(0, base_probability))
        
        if likelihood >= 75:
            status = 'likely_to_close'
        elif likelihood >= 50:
            status = 'possible'
        else:
            status = 'at_risk'
        
        return {
            'likelihood': likelihood,
            'status': status,
            'confidence': 'high' if likelihood > 70 or likelihood < 30 else 'medium'
        }
    
    def _generate_strategy(self, position: Dict, sentiment: Dict, outcome: Dict) -> Dict:
        """Generate negotiation strategy recommendations"""
        approach = 'collaborative'
        tactics = []
        
        if position['strength'] == 'strong':
            approach = 'assertive'
            tactics.append('Hold firm on key terms')
            tactics.append('Emphasize alternatives')
        elif position['strength'] == 'weak':
            approach = 'accommodating'
            tactics.append('Focus on value-add')
            tactics.append('Explore creative solutions')
        else:
            approach = 'collaborative'
            tactics.append('Seek win-win solutions')
            tactics.append('Build rapport')
        
        if sentiment['sentiment'] == 'negative':
            tactics.append('Address concerns directly')
            tactics.append('Show empathy')
        elif sentiment['sentiment'] == 'positive':
            tactics.append('Maintain momentum')
            tactics.append('Accelerate closing')
        
        return {
            'approach': approach,
            'tactics': tactics,
            'priority': 'high' if outcome['likelihood'] < 50 else 'medium'
        }
    
    def _update_negotiation_tracker(self, sender: str, subject: str, analysis: Dict):
        """Update negotiation tracking"""
        key = f"{sender}:{subject}"
        
        if key not in self.negotiation_history:
            self.negotiation_history[key] = []
        
        self.negotiation_history[key].append({
            'timestamp': analysis['timestamp'],
            'position': analysis['position'],
            'sentiment': analysis['sentiment'],
            'outcome_prediction': analysis['outcome_prediction']
        })
    
    def _generate_negotiation_response(self, sender: str, content: str, analysis: Dict) -> str:
        """Generate negotiation-aware response"""
        sender_name = sender.split('@')[0] if '@' in sender else sender
        
        approach = analysis['strategy_recommendations']['approach']
        outcome = analysis['outcome_prediction']
        
        if approach == 'assertive':
            opening = f"Dear {sender_name},\n\nThank you for your proposal. After careful consideration,"
        elif approach == 'accommodating':
            opening = f"Hello {sender_name},\n\nI appreciate your message and understand your position."
        else:
            opening = f"Hi {sender_name},\n\nThank you for reaching out. I'd like to explore how we can work together."
        
        response = f"""{opening}

I've reviewed your terms and would like to discuss them further to reach a mutually beneficial agreement.

Negotiation Status:
- Current Position: {analysis['position']['strength'].title()}
- Deal Likelihood: {outcome['likelihood']}%
- Recommended Approach: {approach.title()}

I'm committed to finding a solution that works for both parties and look forward to continuing our discussion.

Best regards,
[Your Name]

---
This response was generated by {self.ENGINE_NAME} ({self.VERSION}) with negotiation intelligence.
Strategy: {approach} | Outcome Probability: {outcome['likelihood']}%
"""
        
        return response
    
    def _enforce_reply_all(self, to_recipients: List, cc_recipients: List, sender: str) -> List:
        """ENFORCE REPLY-ALL: Always include all original recipients."""
        all_recipients = set()
        
        if isinstance(to_recipients, list):
            all_recipients.update(to_recipients)
        elif to_recipients:
            all_recipients.add(to_recipients)
        
        if isinstance(cc_recipients, list):
            all_recipients.update(cc_recipients)
        elif cc_recipients:
            all_recipients.add(cc_recipients)
        
        all_recipients.discard(sender)
        
        if not all_recipients:
            all_recipients.add(sender)
        
        return list(all_recipients)
    
    def get_negotiation_stats(self) -> Dict:
        """Get negotiation statistics"""
        total_negotiations = len(self.negotiation_history)
        
        if total_negotiations == 0:
            return {
                'version': self.VERSION,
                'engine': self.ENGINE_NAME,
                'message': 'No negotiations tracked yet'
            }
        
        # Calculate average outcome likelihood
        all_predictions = []
        for history in self.negotiation_history.values():
            for entry in history:
                all_predictions.append(entry['outcome_prediction']['likelihood'])
        
        avg_likelihood = sum(all_predictions) / len(all_predictions) if all_predictions else 0
        
        return {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'total_negotiations': total_negotiations,
            'average_outcome_likelihood': round(avg_likelihood, 2),
            'timestamp': datetime.now().isoformat()
        }


# Test the engine
if __name__ == "__main__":
    engine = EmailNegotiationAssistant()
    
    test_email = {
        'from': 'vendor@supplier.com',
        'to': ['procurement@company.com'],
        'cc': ['finance@company.com', 'legal@company.com'],
        'subject': 'Re: Contract Terms - Final Offer',
        'body': 'We can offer a 10% discount if you sign by Friday. This is our final offer and we have other clients interested.',
        'timestamp': datetime.now().isoformat()
    }
    
    print("=" * 60)
    print(f"Email Intelligence {engine.VERSION} - {engine.ENGINE_NAME}")
    print("=" * 60)
    
    analysis = engine.analyze_email(test_email)
    print("\n📧 Email Analysis:")
    print(json.dumps(analysis, indent=2))
    
    response = engine.generate_response(test_email)
    print("\n📤 Generated Response:")
    print(json.dumps(response, indent=2))
    
    stats = engine.get_negotiation_stats()
    print("\n📊 Negotiation Statistics:")
    print(json.dumps(stats, indent=2))
    
    print("\n✅ Reply-All Enforcement: ACTIVE")
    print(f"✅ Recipients: {response['to']}")
    print("✅ Negotiation Intelligence: ENABLED")

#!/usr/bin/env python3
"""
V153 - AI Email Predictive Analytics Engine
Predicts email outcomes, response times, conversion rates, and suggests
optimal send times using historical data and machine learning patterns.
"""

import json
import re
import math
import hashlib
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional, Tuple
from collections import defaultdict


class PredictiveAnalyticsEngine:
    """AI-powered email predictive analytics and outcome forecasting."""
    
    def __init__(self):
        self.historical_data = defaultdict(list)
        self.sender_patterns = defaultdict(dict)
        self.time_patterns = defaultdict(list)
        self.outcome_data = []
        self.conversion_data = []
        
        # Prediction models
        self.response_time_model = ResponseTimePredictor()
        self.outcome_predictor = OutcomePredictor()
        self.engagement_predictor = EngagementPredictor()
        self.sentiment_predictor = SentimentPredictor()
    
    def predict_email_outcome(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Comprehensive email outcome prediction."""
        
        # Predict response time
        response_prediction = self.response_time_model.predict(email, self.historical_data)
        
        # Predict outcome (positive/negative/neutral)
        outcome_prediction = self.outcome_predictor.predict(email, self.outcome_data)
        
        # Predict engagement level
        engagement_prediction = self.engagement_predictor.predict(email)
        
        # Predict sentiment of likely response
        sentiment_prediction = self.sentiment_predictor.predict(email)
        
        # Optimal send time prediction
        optimal_time = self._predict_optimal_send_time(email)
        
        # Conversion probability
        conversion_prob = self._predict_conversion_probability(email)
        
        # Revenue impact prediction
        revenue_impact = self._predict_revenue_impact(email, conversion_prob)
        
        prediction = {
            'prediction_id': hashlib.md5(
                f"{email.get('from', '')}{datetime.now().isoformat()}".encode()
            ).hexdigest()[:12],
            'timestamp': datetime.now().isoformat(),
            'email_summary': email.get('subject', '')[:100],
            'predictions': {
                'response_time': response_prediction,
                'outcome': outcome_prediction,
                'engagement': engagement_prediction,
                'sentiment': sentiment_prediction,
                'optimal_send_time': optimal_time,
                'conversion_probability': conversion_prob,
                'revenue_impact': revenue_impact
            },
            'confidence': self._calculate_overall_confidence(
                response_prediction, outcome_prediction, engagement_prediction
            ),
            'recommendations': self._generate_prediction_recommendations(
                response_prediction, outcome_prediction, engagement_prediction, optimal_time
            ),
            'risk_factors': self._identify_risk_factors(email, outcome_prediction)
        }
        
        # Store for learning
        self._store_prediction_data(email, prediction)
        
        return prediction
    
    def _predict_optimal_send_time(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Predict the optimal time to send for maximum engagement."""
        sender = email.get('from', '')
        domain = sender.split('@')[-1] if '@' in sender else 'unknown'
        
        # Timezone detection
        timezone_offset = self._detect_timezone(email)
        
        # Historical best times
        best_times = self._analyze_best_response_times(domain)
        
        # Day of week analysis
        best_days = self._analyze_best_days(domain)
        
        # Calculate optimal window
        now = datetime.now()
        optimal_windows = []
        
        for day_offset, day_name in best_days[:3]:
            for hour in best_times[:3]:
                target = now + timedelta(days=day_offset)
                target = target.replace(hour=hour, minute=0, second=0, microsecond=0)
                
                if target > now:
                    optimal_windows.append({
                        'datetime': target.isoformat(),
                        'day': day_name,
                        'hour': hour,
                        'confidence': 0.7 + (0.1 * (3 - day_offset))
                    })
        
        return {
            'recommended_windows': optimal_windows[:5],
            'timezone_offset': timezone_offset,
            'best_hours': best_times,
            'best_days': best_days,
            'avoid_times': ['23:00-06:00', 'weekends'],
            'predicted_open_rate': self._predict_open_rate(email, optimal_windows)
        }
    
    def _detect_timezone(self, email: Dict[str, Any]) -> int:
        """Detect sender timezone from email patterns."""
        body = email.get('body', '')
        
        # Look for timezone indicators
        tz_patterns = [
            (r'\bEST\b|\bEastern\b', -5),
            (r'\bCST\b|\bCentral\b', -6),
            (r'\bMST\b|\bMountain\b', -7),
            (r'\bPST\b|\bPacific\b', -8),
            (r'\bGMT\b', 0),
            (r'\bCET\b', 1),
            (r'\bIST\b', 5.5),
        ]
        
        for pattern, offset in tz_patterns:
            if re.search(pattern, body, re.IGNORECASE):
                return offset
        
        return 0  # Default UTC
    
    def _analyze_best_response_times(self, domain: str) -> List[int]:
        """Analyze best hours for responses from this domain."""
        if domain in self.time_patterns:
            hours = self.time_patterns[domain]
            if hours:
                # Return most common response hours
                hour_counts = defaultdict(int)
                for h in hours:
                    hour_counts[h] += 1
                return sorted(hour_counts.keys(), key=lambda x: hour_counts[x], reverse=True)
        
        # Default business hours
        return [9, 10, 11, 14, 15, 16]
    
    def _analyze_best_days(self, domain: str) -> List[Tuple[int, str]]:
        """Analyze best days for responses."""
        day_names = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        today = datetime.now().weekday()
        
        # Business days are generally best
        best_days = []
        for i in range(7):
            day_idx = (today + i) % 7
            if day_idx < 5:  # Weekday
                best_days.append((i, day_names[day_idx]))
        
        return best_days[:5]
    
    def _predict_open_rate(self, email: Dict[str, Any], windows: List[Dict]) -> float:
        """Predict email open rate."""
        base_rate = 0.25  # Industry average
        
        subject = email.get('subject', '')
        
        # Subject line quality
        if len(subject) < 10:
            base_rate -= 0.05
        elif 20 < len(subject) < 50:
            base_rate += 0.10
        
        # Personalization boost
        if any(word in subject.lower() for word in ['you', 'your', email.get('from', '').split('@')[0]]):
            base_rate += 0.08
        
        # Urgency boost
        if any(word in subject.lower() for word in ['urgent', 'important', 'deadline']):
            base_rate += 0.05
        
        # Time optimization boost
        if windows:
            base_rate += 0.05
        
        return min(max(base_rate, 0.05), 0.95)
    
    def _predict_conversion_probability(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Predict conversion probability."""
        body = email.get('body', '').lower()
        subject = email.get('subject', '').lower()
        content = f"{subject} {body}"
        
        # Conversion signals
        signals = {
            'intent': 0,
            'urgency': 0,
            'value_proposition': 0,
            'social_proof': 0,
            'call_to_action': 0
        }
        
        # Intent signals
        intent_words = ['interested', 'want', 'need', 'looking for', 'considering', 'ready to']
        signals['intent'] = sum(1 for w in intent_words if w in content) * 0.15
        
        # Urgency signals
        urgency_words = ['now', 'today', 'asap', 'limited', 'deadline', 'soon']
        signals['urgency'] = sum(1 for w in urgency_words if w in content) * 0.10
        
        # Value proposition
        value_words = ['save', 'benefit', 'improve', 'increase', 'reduce', 'optimize']
        signals['value_proposition'] = sum(1 for w in value_words if w in content) * 0.12
        
        # Social proof
        proof_words = ['clients', 'customers', 'testimonials', 'reviews', 'trusted', 'proven']
        signals['social_proof'] = sum(1 for w in proof_words if w in content) * 0.08
        
        # Call to action
        cta_words = ['schedule', 'book', 'sign up', 'start', 'contact', 'call']
        signals['call_to_action'] = sum(1 for w in cta_words if w in content) * 0.15
        
        # Calculate probability
        base_probability = 0.15
        signal_boost = sum(signals.values())
        probability = min(base_probability + signal_boost, 0.85)
        
        return {
            'probability': round(probability, 4),
            'signals': signals,
            'predicted_conversion_type': self._predict_conversion_type(content),
            'estimated_value': self._estimate_conversion_value(content, probability)
        }
    
    def _predict_conversion_type(self, content: str) -> str:
        """Predict the type of conversion."""
        if any(w in content for w in ['meeting', 'call', 'schedule', 'book']):
            return 'meeting_booking'
        elif any(w in content for w in ['purchase', 'buy', 'order', 'contract']):
            return 'purchase'
        elif any(w in content for w in ['demo', 'trial', 'sign up', 'register']):
            return 'signup'
        elif any(w in content for w in ['reply', 'respond', 'feedback']):
            return 'engagement'
        else:
            return 'awareness'
    
    def _estimate_conversion_value(self, content: str, probability: float) -> Dict[str, float]:
        """Estimate conversion value."""
        # Look for monetary values in content
        money_matches = re.findall(r'\$[\d,]+(?:\.\d{2})?', content)
        
        if money_matches:
            values = []
            for m in money_matches:
                try:
                    val = float(m.replace('$', '').replace(',', ''))
                    values.append(val)
                except:
                    pass
            
            if values:
                avg_value = sum(values) / len(values)
                return {
                    'estimated_value': round(avg_value * probability, 2),
                    'potential_value': round(avg_value, 2),
                    'confidence': probability
                }
        
        # Default estimates based on conversion type
        return {
            'estimated_value': round(500 * probability, 2),
            'potential_value': 500.0,
            'confidence': probability
        }
    
    def _predict_revenue_impact(self, email: Dict[str, Any], conversion: Dict) -> Dict[str, Any]:
        """Predict revenue impact of this email."""
        probability = conversion.get('probability', 0.15)
        est_value = conversion.get('estimated_value', 0)
        
        # Pipeline stage estimation
        content = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        
        if any(w in content for w in ['proposal', 'quote', 'pricing']):
            stage = 'proposal'
            stage_weight = 0.6
        elif any(w in content for w in ['interested', 'considering', 'evaluating']):
            stage = 'qualification'
            stage_weight = 0.3
        elif any(w in content for w in ['contract', 'agreement', 'sign']):
            stage = 'closing'
            stage_weight = 0.85
        else:
            stage = 'awareness'
            stage_weight = 0.1
        
        return {
            'pipeline_stage': stage,
            'stage_weight': stage_weight,
            'weighted_revenue': round(est_value * stage_weight, 2),
            'probability': round(probability * stage_weight, 4),
            'projected_close_date': (datetime.now() + timedelta(days=self._estimate_days_to_close(stage))).isoformat()
        }
    
    def _estimate_days_to_close(self, stage: str) -> int:
        """Estimate days to close based on pipeline stage."""
        stage_days = {
            'awareness': 60,
            'qualification': 45,
            'proposal': 21,
            'closing': 7
        }
        return stage_days.get(stage, 30)
    
    def _calculate_overall_confidence(self, *predictions) -> float:
        """Calculate overall prediction confidence."""
        confidences = []
        for pred in predictions:
            if isinstance(pred, dict) and 'confidence' in pred:
                confidences.append(pred['confidence'])
        
        return round(sum(confidences) / len(confidences), 4) if confidences else 0.5
    
    def _generate_prediction_recommendations(self, response_pred, outcome_pred, engagement_pred, optimal_time) -> List[str]:
        """Generate recommendations based on predictions."""
        recommendations = []
        
        # Response time recommendations
        if response_pred.get('predicted_hours', 24) > 48:
            recommendations.append("⏰ Predicted slow response. Consider follow-up in 24 hours.")
        elif response_pred.get('predicted_hours', 24) < 2:
            recommendations.append("⚡ Quick response expected. Be ready to engage immediately.")
        
        # Outcome recommendations
        if outcome_pred.get('predicted_outcome') == 'negative':
            recommendations.append("⚠️ Negative outcome predicted. Consider adjusting tone or approach.")
        elif outcome_pred.get('predicted_outcome') == 'positive':
            recommendations.append("✅ Positive outcome likely. Maintain current approach.")
        
        # Engagement recommendations
        if engagement_pred.get('engagement_level') == 'low':
            recommendations.append("📉 Low engagement predicted. Consider more compelling subject line.")
        
        # Timing recommendations
        if optimal_time.get('recommended_windows'):
            best = optimal_time['recommended_windows'][0]
            recommendations.append(f"🕐 Best send time: {best['day']} at {best['hour']}:00")
        
        return recommendations
    
    def _identify_risk_factors(self, email: Dict[str, Any], outcome_pred: Dict) -> List[str]:
        """Identify risk factors for the email."""
        risks = []
        content = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        
        # Length risk
        if len(email.get('body', '')) > 2000:
            risks.append("Email too long - may reduce engagement")
        
        # Tone risk
        negative_words = ['complaint', 'problem', 'issue', 'disappointed', 'unhappy', 'frustrated']
        if any(w in content for w in negative_words):
            risks.append("Negative tone detected - may require careful handling")
        
        # Complexity risk
        if content.count('?') > 5:
            risks.append("Multiple questions - may delay response")
        
        # Urgency risk
        if 'urgent' in content and 'asap' in content:
            risks.append("High urgency - risk of rushed decision making")
        
        return risks
    
    def _store_prediction_data(self, email: Dict[str, Any], prediction: Dict[str, Any]):
        """Store prediction data for model improvement."""
        self.outcome_data.append({
            'timestamp': datetime.now().isoformat(),
            'email_from': email.get('from', ''),
            'prediction': prediction,
            'actual_outcome': None  # To be updated later
        })
    
    def get_analytics_dashboard(self) -> Dict[str, Any]:
        """Get predictive analytics dashboard."""
        return {
            'total_predictions': len(self.outcome_data),
            'avg_confidence': round(
                sum(p['prediction'].get('confidence', 0.5) for p in self.outcome_data) / 
                max(len(self.outcome_data), 1), 4
            ),
            'prediction_distribution': {
                'positive': sum(1 for p in self.outcome_data 
                               if p['prediction'].get('predictions', {}).get('outcome', {}).get('predicted_outcome') == 'positive'),
                'negative': sum(1 for p in self.outcome_data 
                               if p['prediction'].get('predictions', {}).get('outcome', {}).get('predicted_outcome') == 'negative'),
                'neutral': sum(1 for p in self.outcome_data 
                              if p['prediction'].get('predictions', {}).get('outcome', {}).get('predicted_outcome') == 'neutral')
            },
            'recent_predictions': self.outcome_data[-10:]
        }


class ResponseTimePredictor:
    """Predict email response time."""
    
    def predict(self, email: Dict[str, Any], historical: Dict) -> Dict[str, Any]:
        """Predict response time in hours."""
        sender = email.get('from', '')
        body = email.get('body', '')
        subject = email.get('subject', '')
        
        # Base prediction
        base_hours = 24
        
        # Urgency adjustment
        urgency_words = ['urgent', 'asap', 'immediately', 'critical']
        if any(w in f"{subject} {body}".lower() for w in urgency_words):
            base_hours *= 0.3
        
        # Sender history
        if sender in historical:
            past_responses = historical[sender]
            if past_responses:
                avg_response = sum(p.get('response_hours', 24) for p in past_responses) / len(past_responses)
                base_hours = (base_hours + avg_response) / 2
        
        # Length adjustment
        if len(body) > 1000:
            base_hours *= 1.5
        
        return {
            'predicted_hours': round(base_hours, 1),
            'confidence': 0.65,
            'range': {
                'min': round(base_hours * 0.5, 1),
                'max': round(base_hours * 2.0, 1)
            }
        }


class OutcomePredictor:
    """Predict email outcome."""
    
    def predict(self, email: Dict[str, Any], outcome_data: List) -> Dict[str, Any]:
        """Predict email outcome (positive/negative/neutral)."""
        body = email.get('body', '').lower()
        subject = email.get('subject', '').lower()
        content = f"{subject} {body}"
        
        # Sentiment analysis
        positive_words = ['great', 'excellent', 'thank', 'appreciate', 'love', 'amazing', 'perfect', 'interested']
        negative_words = ['bad', 'terrible', 'disappointed', 'frustrated', 'angry', 'unhappy', 'problem', 'issue']
        
        pos_count = sum(1 for w in positive_words if w in content)
        neg_count = sum(1 for w in negative_words if w in content)
        
        if pos_count > neg_count:
            outcome = 'positive'
            confidence = min(0.5 + pos_count * 0.1, 0.9)
        elif neg_count > pos_count:
            outcome = 'negative'
            confidence = min(0.5 + neg_count * 0.1, 0.9)
        else:
            outcome = 'neutral'
            confidence = 0.5
        
        return {
            'predicted_outcome': outcome,
            'confidence': round(confidence, 4),
            'positive_signals': pos_count,
            'negative_signals': neg_count
        }


class EngagementPredictor:
    """Predict email engagement level."""
    
    def predict(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Predict engagement level."""
        subject = email.get('subject', '')
        body = email.get('body', '')
        
        # Subject line quality
        subject_score = 0
        if 20 < len(subject) < 60:
            subject_score += 0.3
        if '?' in subject:
            subject_score += 0.1
        if any(w in subject.lower() for w in ['you', 'your', 'free', 'new']):
            subject_score += 0.2
        
        # Content quality
        content_score = 0
        if 100 < len(body) < 500:
            content_score += 0.3
        if body.count('\n') > 3:
            content_score += 0.1
        
        total_score = min(subject_score + content_score, 1.0)
        
        if total_score > 0.7:
            level = 'high'
        elif total_score > 0.4:
            level = 'medium'
        else:
            level = 'low'
        
        return {
            'engagement_level': level,
            'score': round(total_score, 4),
            'confidence': 0.6,
            'subject_quality': round(subject_score, 4),
            'content_quality': round(content_score, 4)
        }


class SentimentPredictor:
    """Predict response sentiment."""
    
    def predict(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Predict the sentiment of the likely response."""
        body = email.get('body', '').lower()
        
        # Question-based prediction
        question_count = body.count('?')
        
        # Tone-based prediction
        polite_words = ['please', 'thank', 'appreciate', 'kind', 'would you']
        demanding_words = ['must', 'immediately', 'now', 'demand', 'require']
        
        polite_count = sum(1 for w in polite_words if w in body)
        demanding_count = sum(1 for w in demanding_words if w in body)
        
        if polite_count > demanding_count:
            predicted_sentiment = 'positive'
        elif demanding_count > polite_count:
            predicted_sentiment = 'negative'
        else:
            predicted_sentiment = 'neutral'
        
        return {
            'predicted_sentiment': predicted_sentiment,
            'confidence': 0.55,
            'question_count': question_count,
            'tone_indicators': {
                'polite': polite_count,
                'demanding': demanding_count
            }
        }


def process_email_predictions(email_data: Dict[str, Any]) -> Dict[str, Any]:
    """Main entry point for predictive analytics."""
    engine = PredictiveAnalyticsEngine()
    return engine.predict_email_outcome(email_data)


if __name__ == '__main__':
    test_email = {
        'from': 'prospect@company.com',
        'subject': 'Interested in your AI services',
        'body': 'Hi, I am very interested in your AI consulting services. '
                'Could we schedule a meeting this week? Our budget is $50,000 '
                'and we need to start ASAP. Please let me know your availability.'
    }
    
    result = process_email_predictions(test_email)
    print(json.dumps(result, indent=2))

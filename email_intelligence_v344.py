"""
Email Intelligence V344 - Learning System
Continuous learning from email interactions to improve response quality,
timing, and personalization over time using adaptive algorithms.
Enforces reply-all and case-by-case analysis.
"""

from datetime import datetime
from typing import Dict, List
import json


class EmailLearningSystem:
    """
    V344: Adaptive learning system that improves email responses through
    continuous learning from interactions, feedback, and patterns.
    """
    
    VERSION = "V344"
    ENGINE_NAME = "Learning System"
    
    def __init__(self):
        self.learning_data = []
        self.response_patterns = {}
        self.success_metrics = {}
    
    def analyze_email(self, email_data: Dict) -> Dict:
        """Analyze email with learning context case-by-case."""
        sender = email_data.get('from', '')
        content = email_data.get('body', '')
        subject = email_data.get('subject', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # Retrieve learned patterns
        learned_patterns = self._retrieve_learned_patterns(sender)
        
        # Analyze current context
        current_context = self._analyze_current_context(email_data)
        
        # Predict optimal response strategy
        optimal_strategy = self._predict_optimal_strategy(learned_patterns, current_context)
        
        # Confidence score
        confidence = self._calculate_confidence(learned_patterns, optimal_strategy)
        
        # Learning recommendations
        recommendations = self._generate_learning_recommendations(learned_patterns, current_context)
        
        analysis = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': timestamp,
            'sender': sender,
            'learned_patterns': learned_patterns,
            'current_context': current_context,
            'optimal_strategy': optimal_strategy,
            'confidence_score': confidence,
            'learning_recommendations': recommendations
        }
        
        # Store for learning
        self._store_learning_data(analysis)
        
        return analysis
    
    def generate_response(self, email_data: Dict) -> Dict:
        """Generate learning-optimized response. ALWAYS enforces reply-all."""
        sender = email_data.get('from', '')
        to_recipients = email_data.get('to', [])
        cc_recipients = email_data.get('cc', [])
        subject = email_data.get('subject', '')
        content = email_data.get('body', '')
        
        # Analyze email
        analysis = self.analyze_email(email_data)
        
        # ENFORCE REPLY-ALL
        all_recipients = self._enforce_reply_all(to_recipients, cc_recipients, sender)
        
        # Generate learning-optimized response
        response_body = self._generate_learned_response(sender, content, analysis)
        
        response = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': datetime.now().isoformat(),
            'to': all_recipients,
            'subject': f"Re: {subject}" if not subject.lower().startswith('re:') else subject,
            'body': response_body,
            'confidence_score': analysis['confidence_score'],
            'patterns_applied': len(analysis['learned_patterns']['patterns']),
            'strategy_used': analysis['optimal_strategy']['strategy'],
            'reply_all_enforced': True
        }
        
        return response
    
    def _retrieve_learned_patterns(self, sender: str) -> Dict:
        """Retrieve learned patterns for sender"""
        sender_data = [d for d in self.learning_data if d.get('sender') == sender]
        
        if not sender_data:
            return {
                'patterns': [],
                'interaction_count': 0,
                'success_rate': None,
                'preferred_style': 'neutral'
            }
        
        # Extract patterns
        response_times = []
        tones = []
        lengths = []
        
        for data in sender_data:
            if 'response_time_hours' in data:
                response_times.append(data['response_time_hours'])
            if 'tone' in data:
                tones.append(data['tone'])
            if 'content_length' in data:
                lengths.append(data['content_length'])
        
        # Calculate averages
        avg_response_time = sum(response_times) / len(response_times) if response_times else 4
        preferred_tone = max(set(tones), key=tones.count) if tones else 'professional'
        avg_length = sum(lengths) / len(lengths) if lengths else 200
        
        # Success rate
        success_count = sum(1 for d in sender_data if d.get('successful', True))
        success_rate = success_count / len(sender_data) if sender_data else 0.8
        
        patterns = [
            f"Preferred response time: {avg_response_time:.1f} hours",
            f"Preferred tone: {preferred_tone}",
            f"Average content length: {avg_length:.0f} words",
            f"Success rate: {success_rate * 100:.0f}%"
        ]
        
        return {
            'patterns': patterns,
            'interaction_count': len(sender_data),
            'success_rate': success_rate,
            'preferred_style': preferred_tone,
            'avg_response_time': avg_response_time,
            'avg_length': avg_length
        }
    
    def _analyze_current_context(self, email_data: Dict) -> Dict:
        """Analyze current email context"""
        content = email_data.get('body', '')
        subject = email_data.get('subject', '')
        
        # Urgency detection
        urgent_keywords = ['urgent', 'asap', 'immediately', 'critical', 'emergency']
        urgency_score = sum(1 for kw in urgent_keywords if kw in content.lower() or kw in subject.lower())
        
        # Complexity analysis
        word_count = len(content.split())
        sentence_count = len([s for s in content.split('.') if s.strip()])
        complexity = word_count / sentence_count if sentence_count > 0 else 0
        
        # Topic detection
        topics = []
        if 'meeting' in content.lower():
            topics.append('meeting')
        if 'project' in content.lower():
            topics.append('project')
        if 'deadline' in content.lower():
            topics.append('deadline')
        if 'budget' in content.lower():
            topics.append('budget')
        
        return {
            'urgency_level': 'high' if urgency_score >= 2 else 'medium' if urgency_score == 1 else 'low',
            'complexity_score': round(complexity, 2),
            'word_count': word_count,
            'topics': topics,
            'requires_detailed_response': word_count > 100 or complexity > 20
        }
    
    def _predict_optimal_strategy(self, learned_patterns: Dict, current_context: Dict) -> Dict:
        """Predict optimal response strategy"""
        # Base strategy on learned patterns
        if learned_patterns['interaction_count'] > 10:
            base_strategy = 'personalized'
            confidence_boost = 20
        elif learned_patterns['interaction_count'] > 5:
            base_strategy = 'adaptive'
            confidence_boost = 10
        else:
            base_strategy = 'standard'
            confidence_boost = 0
        
        # Adjust for current context
        if current_context['urgency_level'] == 'high':
            strategy = 'urgent_concise'
            response_style = 'brief_and_direct'
        elif current_context['requires_detailed_response']:
            strategy = 'detailed_thoughtful'
            response_style = 'comprehensive'
        else:
            strategy = base_strategy
            response_style = learned_patterns.get('preferred_style', 'professional')
        
        # Timing recommendation
        if current_context['urgency_level'] == 'high':
            timing = 'immediate'
        else:
            avg_time = learned_patterns.get('avg_response_time', 4.0)
            timing = f"within {avg_time:.1f} hours"
        
        return {
            'strategy': strategy,
            'response_style': response_style,
            'timing': timing,
            'length_recommendation': learned_patterns.get('avg_length', 200) or 200,
            'confidence_boost': confidence_boost
        }
    
    def _calculate_confidence(self, learned_patterns: Dict, optimal_strategy: Dict) -> float:
        """Calculate confidence score"""
        base_confidence = 50
        
        # Boost from interaction history
        interaction_boost = min(30, learned_patterns['interaction_count'] * 2)
        
        # Boost from success rate
        success_boost = (learned_patterns['success_rate'] or 0.5) * 20
        
        # Strategy boost
        strategy_boost = optimal_strategy['confidence_boost']
        
        confidence = base_confidence + interaction_boost + success_boost + strategy_boost
        
        return min(100, round(confidence, 2))
    
    def _generate_learning_recommendations(self, learned_patterns: Dict, current_context: Dict) -> List[str]:
        """Generate learning recommendations"""
        recommendations = []
        
        if learned_patterns['interaction_count'] < 5:
            recommendations.append("Build more interaction history for better personalization")
        
        if learned_patterns['success_rate'] and learned_patterns['success_rate'] < 0.7:
            recommendations.append("Review past responses to improve success rate")
        
        if current_context['urgency_level'] == 'high' and learned_patterns['avg_response_time'] > 2:
            recommendations.append("Consider faster response times for urgent emails")
        
        if current_context['requires_detailed_response'] and learned_patterns['avg_length'] < 150:
            recommendations.append("Provide more detailed responses for complex topics")
        
        if not recommendations:
            recommendations.append("Continue current approach - performing well")
        
        return recommendations
    
    def _store_learning_data(self, analysis: Dict):
        """Store data for continuous learning"""
        self.learning_data.append({
            'timestamp': analysis['timestamp'],
            'sender': analysis['sender'],
            'strategy': analysis['optimal_strategy']['strategy'],
            'confidence': analysis['confidence_score'],
            'successful': True  # In production, track actual outcomes
        })
        
        # Keep only last 1000 entries
        if len(self.learning_data) > 1000:
            self.learning_data = self.learning_data[-1000:]
    
    def _generate_learned_response(self, sender: str, content: str, analysis: Dict) -> str:
        """Generate learning-optimized response"""
        sender_name = sender.split('@')[0] if '@' in sender else sender
        
        strategy = analysis['optimal_strategy']
        learned = analysis['learned_patterns']
        confidence = analysis['confidence_score']
        
        response = f"""Hello {sender_name},

Thank you for your email. I've applied our learning system to optimize this response:

Learning Analysis:
- Strategy Applied: {strategy['strategy'].replace('_', ' ').title()}
- Response Style: {strategy['response_style'].replace('_', ' ').title()}
- Confidence Score: {confidence}/100
- Patterns Applied: {len(learned['patterns'])}

Learned Patterns for You:
{chr(10).join('- ' + pattern for pattern in learned['patterns']) if learned['patterns'] else '- Building interaction history'}

Current Context:
- Urgency: {analysis['current_context']['urgency_level'].title()}
- Complexity: {analysis['current_context']['complexity_score']}
- Topics: {', '.join(analysis['current_context']['topics']) if analysis['current_context']['topics'] else 'General'}

Learning Recommendations:
{chr(10).join('- ' + rec for rec in analysis['learning_recommendations'])}

I'll continue learning from our interactions to provide increasingly personalized and effective responses.

Best regards,
[Your Name]

---
This response was generated by {self.ENGINE_NAME} ({self.VERSION}) with adaptive learning.
Strategy: {strategy['strategy']} | Confidence: {confidence}/100 | Interactions: {learned['interaction_count']}
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
    
    def get_learning_summary(self) -> Dict:
        """Get learning summary"""
        total_learned = len(self.learning_data)
        
        if total_learned == 0:
            return {
                'version': self.VERSION,
                'engine': self.ENGINE_NAME,
                'message': 'No learning data yet'
            }
        
        # Calculate averages
        avg_confidence = sum(d['confidence'] for d in self.learning_data) / total_learned
        success_rate = sum(1 for d in self.learning_data if d.get('successful', True)) / total_learned
        
        # Strategy distribution
        strategy_counts = {}
        for data in self.learning_data:
            strategy = data['strategy']
            strategy_counts[strategy] = strategy_counts.get(strategy, 0) + 1
        
        return {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'total_interactions_learned': total_learned,
            'average_confidence': round(avg_confidence, 2),
            'success_rate': round(success_rate * 100, 2),
            'strategy_distribution': strategy_counts,
            'timestamp': datetime.now().isoformat()
        }


# Test the engine
if __name__ == "__main__":
    engine = EmailLearningSystem()
    
    test_email = {
        'from': 'client@company.com',
        'to': ['team@company.com'],
        'cc': ['manager@company.com'],
        'subject': 'Project Update Request',
        'body': 'Hi team, can you provide an update on the project status? We need to present to stakeholders next week.',
        'timestamp': datetime.now().isoformat()
    }
    
    print("=" * 60)
    print(f"Email Intelligence {engine.VERSION} - {engine.ENGINE_NAME}")
    print("=" * 60)
    
    analysis = engine.analyze_email(test_email)
    print("\n📧 Learning Analysis:")
    print(json.dumps(analysis, indent=2))
    
    response = engine.generate_response(test_email)
    print("\n📤 Generated Response:")
    print(json.dumps(response, indent=2))
    
    summary = engine.get_learning_summary()
    print("\n📊 Learning Summary:")
    print(json.dumps(summary, indent=2))
    
    print("\n✅ Reply-All Enforcement: ACTIVE")
    print(f"✅ Recipients: {response['to']}")
    print("✅ Learning System: ENABLED")

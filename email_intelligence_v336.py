"""
Email Intelligence V336 - Sentiment Intelligence Engine
Advanced sentiment analysis with emotional intelligence, tone detection,
empathy scoring, and emotional context understanding for better communication.
Enforces reply-all and case-by-case analysis.
"""

from datetime import datetime
from typing import Dict, List
import json
import re


class EmailSentimentIntelligence:
    """
    V336: Advanced sentiment analysis with emotional intelligence, tone detection,
    and empathy scoring for emotionally intelligent communication.
    """
    
    VERSION = "V336"
    ENGINE_NAME = "Sentiment Intelligence Engine"
    
    def __init__(self):
        self.sentiment_history = {}
        self.emotional_patterns = {
            'positive': ['great', 'excellent', 'amazing', 'wonderful', 'fantastic', 'happy', 'pleased', 'thrilled'],
            'negative': ['angry', 'frustrated', 'disappointed', 'upset', 'annoyed', 'worried', 'concerned'],
            'neutral': ['okay', 'fine', 'understood', 'noted', 'thanks'],
            'urgent': ['urgent', 'asap', 'immediately', 'critical', 'emergency'],
            'appreciative': ['thank', 'appreciate', 'grateful', 'thanks', 'gratitude'],
            'confused': ['confused', 'unclear', 'don\'t understand', 'need clarification']
        }
    
    def analyze_email(self, email_data: Dict) -> Dict:
        """Analyze email sentiment with emotional intelligence case-by-case."""
        sender = email_data.get('from', '')
        content = email_data.get('body', '')
        subject = email_data.get('subject', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # Analyze sentiment
        sentiment = self._analyze_sentiment(content, subject)
        
        # Detect emotions
        emotions = self._detect_emotions(content)
        
        # Calculate empathy score
        empathy_score = self._calculate_empathy_score(content)
        
        # Tone analysis
        tone = self._analyze_tone(content)
        
        # Emotional context
        emotional_context = self._understand_emotional_context(content, sentiment, emotions)
        
        # Response recommendations
        response_strategy = self._generate_response_strategy(sentiment, emotions, tone)
        
        analysis = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': timestamp,
            'sender': sender,
            'sentiment': sentiment,
            'emotions': emotions,
            'empathy_score': empathy_score,
            'tone': tone,
            'emotional_context': emotional_context,
            'response_strategy': response_strategy
        }
        
        # Track sentiment history
        self._track_sentiment(sender, analysis)
        
        return analysis
    
    def generate_response(self, email_data: Dict) -> Dict:
        """Generate emotionally intelligent response. ALWAYS enforces reply-all."""
        sender = email_data.get('from', '')
        to_recipients = email_data.get('to', [])
        cc_recipients = email_data.get('cc', [])
        subject = email_data.get('subject', '')
        content = email_data.get('body', '')
        
        # Analyze email
        analysis = self.analyze_email(email_data)
        
        # ENFORCE REPLY-ALL
        all_recipients = self._enforce_reply_all(to_recipients, cc_recipients, sender)
        
        # Generate emotionally intelligent response
        response_body = self._generate_empathetic_response(sender, content, analysis)
        
        response = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': datetime.now().isoformat(),
            'to': all_recipients,
            'subject': f"Re: {subject}" if not subject.lower().startswith('re:') else subject,
            'body': response_body,
            'sentiment': analysis['sentiment']['overall'],
            'emotional_intelligence': analysis['empathy_score'],
            'tone_matched': True,
            'reply_all_enforced': True
        }
        
        return response
    
    def _analyze_sentiment(self, content: str, subject: str) -> Dict:
        """Analyze overall sentiment"""
        text = f"{subject} {content}".lower()
        
        # Calculate sentiment scores
        positive_score = sum(1 for word in self.emotional_patterns['positive'] if word in text)
        negative_score = sum(1 for word in self.emotional_patterns['negative'] if word in text)
        neutral_score = sum(1 for word in self.emotional_patterns['neutral'] if word in text)
        
        # Determine overall sentiment
        if positive_score > negative_score and positive_score > neutral_score:
            overall = 'positive'
            score = min(100, 50 + positive_score * 10)
        elif negative_score > positive_score and negative_score > neutral_score:
            overall = 'negative'
            score = max(0, 50 - negative_score * 10)
        else:
            overall = 'neutral'
            score = 50
        
        # Intensity
        total_signals = positive_score + negative_score + neutral_score
        intensity = 'high' if total_signals > 5 else 'medium' if total_signals > 2 else 'low'
        
        return {
            'overall': overall,
            'score': score,
            'intensity': intensity,
            'positive_signals': positive_score,
            'negative_signals': negative_score,
            'neutral_signals': neutral_score
        }
    
    def _detect_emotions(self, content: str) -> Dict:
        """Detect specific emotions in email"""
        content_lower = content.lower()
        
        emotions_detected = {}
        
        # Check for each emotion category
        for emotion, keywords in self.emotional_patterns.items():
            count = sum(1 for kw in keywords if kw in content_lower)
            if count > 0:
                emotions_detected[emotion] = {
                    'detected': True,
                    'strength': 'strong' if count > 3 else 'moderate' if count > 1 else 'mild',
                    'indicators': count
                }
            else:
                emotions_detected[emotion] = {
                    'detected': False,
                    'strength': 'none',
                    'indicators': 0
                }
        
        # Primary emotion
        detected_emotions = {k: v['indicators'] for k, v in emotions_detected.items() if v['detected']}
        primary_emotion = max(detected_emotions, key=detected_emotions.get) if detected_emotions else 'neutral'
        
        return {
            'primary_emotion': primary_emotion,
            'all_emotions': emotions_detected,
            'emotional_complexity': len(detected_emotions)
        }
    
    def _calculate_empathy_score(self, content: str) -> float:
        """Calculate empathy score (0-100)"""
        content_lower = content.lower()
        
        # Empathy indicators
        empathy_phrases = [
            'understand', 'appreciate', 'sorry', 'concerned', 'care',
            'help', 'support', 'here for you', 'listening'
        ]
        
        empathy_count = sum(1 for phrase in empathy_phrases if phrase in content_lower)
        
        # Questions show engagement
        question_count = content.count('?')
        
        # Acknowledgment
        acknowledgment = sum(1 for word in ['yes', 'absolutely', 'definitely', 'certainly'] if word in content_lower)
        
        score = 50  # Base score
        score += empathy_count * 8
        score += min(20, question_count * 5)
        score += acknowledgment * 5
        
        return min(100, max(0, score))
    
    def _analyze_tone(self, content: str) -> Dict:
        """Analyze communication tone"""
        content_lower = content.lower()
        
        # Formal indicators
        formal_words = ['therefore', 'furthermore', 'regarding', 'pursuant', 'hereby']
        formal_count = sum(1 for word in formal_words if word in content_lower)
        
        # Informal indicators
        informal_words = ['hey', 'hi', 'thanks', 'cool', 'awesome', 'btw']
        informal_count = sum(1 for word in informal_words if word in content_lower)
        
        # Determine tone
        if formal_count > informal_count:
            tone = 'formal'
            formality_score = min(100, 50 + formal_count * 10)
        elif informal_count > formal_count:
            tone = 'informal'
            formality_score = max(0, 50 - informal_count * 10)
        else:
            tone = 'neutral'
            formality_score = 50
        
        # Directness
        direct_phrases = ['need', 'must', 'require', 'should']
        indirect_phrases = ['perhaps', 'maybe', 'if possible', 'when convenient']
        
        direct_count = sum(1 for phrase in direct_phrases if phrase in content_lower)
        indirect_count = sum(1 for phrase in indirect_phrases if phrase in content_lower)
        
        if direct_count > indirect_count:
            directness = 'direct'
        elif indirect_count > direct_count:
            directness = 'indirect'
        else:
            directness = 'balanced'
        
        return {
            'tone': tone,
            'formality_score': formality_score,
            'directness': directness,
            'formal_indicators': formal_count,
            'informal_indicators': informal_count
        }
    
    def _understand_emotional_context(self, content: str, sentiment: Dict, emotions: Dict) -> Dict:
        """Understand emotional context for response"""
        context = {
            'requires_empathy': sentiment['overall'] == 'negative' or emotions['primary_emotion'] in ['angry', 'frustrated', 'disappointed'],
            'requires_reassurance': 'worried' in emotions or 'concerned' in emotions,
            'requires_celebration': sentiment['overall'] == 'positive' and sentiment['score'] > 70,
            'requires_clarification': 'confused' in emotions,
            'requires_urgency': 'urgent' in emotions
        }
        
        return context
    
    def _generate_response_strategy(self, sentiment: Dict, emotions: Dict, tone: Dict) -> Dict:
        """Generate response strategy based on emotional analysis"""
        strategy = {
            'approach': 'empathetic',
            'tone': tone['tone'],
            'empathy_level': 'high' if sentiment['overall'] == 'negative' else 'medium' if sentiment['overall'] == 'neutral' else 'low',
            'tactics': []
        }
        
        # Add tactics based on emotions
        if emotions['primary_emotion'] in ['angry', 'frustrated']:
            strategy['tactics'].extend(['Acknowledge feelings', 'Show understanding', 'Offer solutions'])
        elif emotions['primary_emotion'] in ['happy', 'pleased']:
            strategy['tactics'].extend(['Celebrate success', 'Reinforce positive', 'Build momentum'])
        elif emotions['primary_emotion'] == 'confused':
            strategy['tactics'].extend(['Provide clarity', 'Use simple language', 'Offer examples'])
        elif emotions['primary_emotion'] == 'worried':
            strategy['tactics'].extend(['Provide reassurance', 'Share facts', 'Offer support'])
        else:
            strategy['tactics'].extend(['Maintain professionalism', 'Be helpful', 'Stay engaged'])
        
        return strategy
    
    def _track_sentiment(self, sender: str, analysis: Dict):
        """Track sentiment history"""
        if sender not in self.sentiment_history:
            self.sentiment_history[sender] = []
        
        self.sentiment_history[sender].append({
            'timestamp': analysis['timestamp'],
            'sentiment': analysis['sentiment']['overall'],
            'score': analysis['sentiment']['score'],
            'primary_emotion': analysis['emotions']['primary_emotion']
        })
        
        # Keep only last 100 entries
        if len(self.sentiment_history[sender]) > 100:
            self.sentiment_history[sender] = self.sentiment_history[sender][-100:]
    
    def _generate_empathetic_response(self, sender: str, content: str, analysis: Dict) -> str:
        """Generate emotionally intelligent response"""
        sender_name = sender.split('@')[0] if '@' in sender else sender
        
        sentiment = analysis['sentiment']['overall']
        emotion = analysis['emotions']['primary_emotion']
        empathy_score = analysis['empathy_score']
        
        # Adapt opening based on sentiment
        if sentiment == 'negative' or emotion in ['angry', 'frustrated']:
            opening = f"Dear {sender_name},\n\nI understand your concerns and appreciate you sharing them with me."
        elif sentiment == 'positive':
            opening = f"Hi {sender_name},\n\nThank you for your positive message! I'm thrilled to hear from you."
        elif emotion == 'confused':
            opening = f"Hello {sender_name},\n\nI appreciate your question and I'm here to help clarify everything."
        else:
            opening = f"Hello {sender_name},\n\nThank you for your email."
        
        response = f"""{opening}

I've carefully read your message and want to ensure I respond in the most helpful way possible.

Emotional Intelligence Analysis:
- Sentiment: {sentiment.title()} (Score: {analysis['sentiment']['score']}/100)
- Primary Emotion: {emotion.title()}
- Empathy Score: {empathy_score}/100
- Tone: {analysis['tone']['tone'].title()}

Response Strategy: {', '.join(analysis['response_strategy']['tactics'][:3])}

I'll address your message with the appropriate emotional intelligence and ensure we have a productive conversation.

Best regards,
[Your Name]

---
This response was generated by {self.ENGINE_NAME} ({self.VERSION}) with emotional intelligence.
Sentiment: {sentiment} | Emotion: {emotion} | Empathy: {empathy_score}/100
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
    
    def get_sentiment_stats(self) -> Dict:
        """Get sentiment statistics"""
        total_tracked = sum(len(history) for history in self.sentiment_history.values())
        
        if total_tracked == 0:
            return {
                'version': self.VERSION,
                'engine': self.ENGINE_NAME,
                'message': 'No sentiment data tracked yet'
            }
        
        # Calculate sentiment distribution
        sentiment_counts = {'positive': 0, 'negative': 0, 'neutral': 0}
        all_scores = []
        
        for history in self.sentiment_history.values():
            for entry in history:
                sentiment_counts[entry['sentiment']] += 1
                all_scores.append(entry['score'])
        
        avg_score = sum(all_scores) / len(all_scores) if all_scores else 0
        
        return {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'total_emails_analyzed': total_tracked,
            'sentiment_distribution': sentiment_counts,
            'average_sentiment_score': round(avg_score, 2),
            'senders_tracked': len(self.sentiment_history),
            'timestamp': datetime.now().isoformat()
        }


# Test the engine
if __name__ == "__main__":
    engine = EmailSentimentIntelligence()
    
    # Test positive email
    positive_email = {
        'from': 'happy.client@company.com',
        'to': ['team@company.com'],
        'cc': ['manager@company.com'],
        'subject': 'Amazing Work on the Project!',
        'body': 'Hi team, I just wanted to say thank you for the excellent work on the project. The results are fantastic and I\'m thrilled with the outcome!',
        'timestamp': datetime.now().isoformat()
    }
    
    print("=" * 60)
    print(f"Email Intelligence {engine.VERSION} - {engine.ENGINE_NAME}")
    print("=" * 60)
    
    analysis = engine.analyze_email(positive_email)
    print("\n📧 Positive Email Analysis:")
    print(json.dumps(analysis, indent=2))
    
    response = engine.generate_response(positive_email)
    print("\n📤 Generated Response:")
    print(json.dumps(response, indent=2))
    
    # Test negative email
    negative_email = {
        'from': 'frustrated.client@company.com',
        'to': ['support@company.com'],
        'cc': ['manager@company.com'],
        'subject': 'Urgent: Issue with Service',
        'body': 'I\'m very frustrated with the service. This is the third time I\'ve encountered this problem and I\'m disappointed with the lack of resolution.',
        'timestamp': datetime.now().isoformat()
    }
    
    print("\n" + "=" * 60)
    analysis2 = engine.analyze_email(negative_email)
    print("\n📧 Negative Email Analysis:")
    print(json.dumps(analysis2, indent=2))
    
    stats = engine.get_sentiment_stats()
    print("\n📊 Sentiment Statistics:")
    print(json.dumps(stats, indent=2))
    
    print("\n✅ Reply-All Enforcement: ACTIVE")
    print(f"✅ Recipients: {response['to']}")
    print("✅ Sentiment Intelligence: ENABLED")

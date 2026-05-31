#!/usr/bin/env python3
"""
V911: Email Emotion Intelligence Engine
Detects sender's emotional state and adjusts response tone accordingly.
Flags emotionally charged emails for human review.
"""

import json
from datetime import datetime
from typing import Dict, List, Optional
import re

class EmailEmotionIntelligence:
    def __init__(self):
        self.analyses = []
        self.emotion_patterns = {
            'frustrated': ['frustrated', 'annoyed', 'irritated', 'upset', 'disappointed', 'fed up', 'unacceptable', 'ridiculous', '!!!', '???'],
            'angry': ['angry', 'furious', 'outraged', 'unacceptable', 'immediately', 'demand', 'escalate', 'lawyer', 'legal'],
            'happy': ['great', 'awesome', 'fantastic', 'excellent', 'wonderful', 'love', 'amazing', 'perfect', 'thank you', '😊', '👍', '🎉'],
            'worried': ['worried', 'concerned', 'anxious', 'nervous', 'stress', 'deadline', 'urgent', 'help', 'please'],
            'confused': ['confused', 'don\'t understand', 'unclear', 'what does', 'how do', 'why', 'explain', 'clarify'],
            'neutral': ['regards', 'thanks', 'best', 'sincerely', 'information', 'update', 'confirm']
        }
        
    def analyze_emotion(self, email_id: str, subject: str, body: str,
                       sender: str, recipients: List[str]) -> Dict:
        """Analyze email for emotional content"""
        
        full_text = f"{subject} {body}".lower()
        
        # Score each emotion
        emotion_scores = {}
        for emotion, patterns in self.emotion_patterns.items():
            score = sum(1 for pattern in patterns if pattern in full_text)
            # Weight exclamation marks and question marks
            if emotion in ['frustrated', 'angry']:
                score += full_text.count('!') * 2
                score += full_text.count('?') * 1.5
            emotion_scores[emotion] = score
        
        # Determine primary emotion
        primary_emotion = max(emotion_scores.keys(), key=lambda x: emotion_scores[x]) if any(emotion_scores.values()) else 'neutral'
        
        # Calculate intensity (0-100)
        max_score = max(emotion_scores.values())
        intensity = min(100, int((max_score / 10) * 100))
        
        # Determine if human review needed
        needs_human_review = primary_emotion in ['angry', 'frustrated'] and intensity > 60
        
        # Suggest response tone
        response_tone = self._suggest_response_tone(primary_emotion, intensity)
        
        # Detect emotional escalation
        escalation_risk = self._assess_escalation_risk(primary_emotion, intensity, full_text)
        
        analysis = {
            'email_id': email_id,
            'sender': sender,
            'primary_emotion': primary_emotion,
            'emotion_scores': emotion_scores,
            'intensity': intensity,
            'needs_human_review': needs_human_review,
            'response_tone': response_tone,
            'escalation_risk': escalation_risk,
            'emotional_triggers': self._extract_triggers(full_text, primary_emotion),
            'analyzed_at': datetime.now().isoformat()
        }
        
        self.analyses.append(analysis)
        
        return {
            'success': True,
            'analysis': analysis,
            'recommended_action': 'human_review' if needs_human_review else 'auto_respond',
            'response_tone': response_tone
        }
    
    def _suggest_response_tone(self, emotion: str, intensity: int) -> str:
        """Suggest appropriate response tone based on detected emotion"""
        
        tone_map = {
            'angry': {
                'high': 'empathetic_and_solution_focused',
                'medium': 'professional_and_calm',
                'low': 'professional'
            },
            'frustrated': {
                'high': 'empathetic_and_apologetic',
                'medium': 'understanding_and_helpful',
                'low': 'supportive'
            },
            'happy': {
                'high': 'enthusiastic_and_grateful',
                'medium': 'warm_and_appreciative',
                'low': 'friendly'
            },
            'worried': {
                'high': 'reassuring_and_detailed',
                'medium': 'calm_and_informative',
                'low': 'supportive'
            },
            'confused': {
                'high': 'clear_and_detailed',
                'medium': 'patient_and_explanatory',
                'low': 'helpful'
            },
            'neutral': {
                'high': 'professional',
                'medium': 'professional',
                'low': 'professional'
            }
        }
        
        intensity_level = 'high' if intensity > 70 else 'medium' if intensity > 40 else 'low'
        return tone_map.get(emotion, tone_map['neutral']).get(intensity_level, 'professional')
    
    def _assess_escalation_risk(self, emotion: str, intensity: int, text: str) -> str:
        """Assess risk of escalation"""
        
        escalation_keywords = ['lawyer', 'legal', 'sue', 'court', 'complaint', 'refund', 'cancel', 'terminate']
        
        if any(keyword in text for keyword in escalation_keywords):
            return 'critical'
        elif emotion in ['angry', 'frustrated'] and intensity > 80:
            return 'high'
        elif emotion in ['angry', 'frustrated'] and intensity > 60:
            return 'medium'
        else:
            return 'low'
    
    def _extract_triggers(self, text: str, emotion: str) -> List[str]:
        """Extract emotional triggers from text"""
        
        triggers = []
        
        if emotion == 'angry':
            if 'unacceptable' in text:
                triggers.append('Service quality issue')
            if 'immediately' in text:
                triggers.append('Urgency frustration')
            if 'demand' in text:
                triggers.append('Unmet expectations')
        
        elif emotion == 'frustrated':
            if 'still' in text:
                triggers.append('Ongoing issue')
            if 'again' in text:
                triggers.append('Repeated problem')
            if '!!!' in text:
                triggers.append('High frustration level')
        
        elif emotion == 'happy':
            if 'thank' in text:
                triggers.append('Gratitude expressed')
            if 'great' in text or 'awesome' in text:
                triggers.append('Positive experience')
        
        return triggers[:3]
    
    def generate_empathetic_response(self, analysis: Dict) -> Dict:
        """Generate empathetic response based on emotion analysis"""
        
        emotion = analysis['primary_emotion']
        tone = analysis['response_tone']
        
        if emotion == 'angry':
            response = """I sincerely apologize for the frustration this has caused. I understand your concern and want to assure you that resolving this issue is my top priority.

I'm taking immediate action to address this matter and will provide you with a detailed update within the next 2 hours.

Your satisfaction is extremely important to us, and I'm committed to making this right."""
        
        elif emotion == 'frustrated':
            response = """I completely understand your frustration, and I apologize for the inconvenience this has caused. You deserve better service, and I'm here to help.

Let me investigate this immediately and get back to you with a solution as quickly as possible.

Thank you for your patience as we work to resolve this."""
        
        elif emotion == 'happy':
            response = """Thank you so much for your kind words! It's wonderful to hear that you're pleased with our service.

We truly appreciate your business and look forward to continuing to serve you. If there's anything else we can do, please don't hesitate to ask!"""
        
        elif emotion == 'worried':
            response = """I understand your concern, and I want to reassure you that we're here to help. Let me address each of your questions in detail.

[Detailed response addressing specific concerns]

Please know that we're committed to supporting you through this process. If you have any additional questions, I'm here to help."""
        
        elif emotion == 'confused':
            response = """I appreciate you reaching out for clarification. Let me explain this in detail to make sure everything is clear.

[Clear, step-by-step explanation]

If anything is still unclear, please don't hesitate to ask. I'm happy to provide additional information or examples."""
        
        else:  # neutral
            response = """Thank you for your email. I've received your message and will respond with detailed information shortly.

Best regards"""
        
        return {
            'success': True,
            'response_text': response,
            'tone': tone,
            'emotion_matched': emotion
        }
    
    def get_emotion_trends(self, sender: str = None) -> Dict:
        """Get emotion trends over time"""
        
        filtered = [a for a in self.analyses if not sender or a['sender'] == sender]
        
        if not filtered:
            return {'success': True, 'total': 0}
        
        emotion_counts = {}
        for analysis in filtered:
            emotion = analysis['primary_emotion']
            emotion_counts[emotion] = emotion_counts.get(emotion, 0) + 1
        
        avg_intensity = sum(a['intensity'] for a in filtered) / len(filtered)
        
        return {
            'success': True,
            'total_analyzed': len(filtered),
            'emotion_distribution': emotion_counts,
            'average_intensity': avg_intensity,
            'most_common_emotion': max(emotion_counts.keys(), key=lambda x: emotion_counts[x])
        }
    
    def generate_report(self) -> str:
        """Generate comprehensive emotion intelligence report"""
        
        trends = self.get_emotion_trends()
        
        report = f"""
😊 EMAIL EMOTION INTELLIGENCE REPORT (V911)
{'='*60}

ANALYSIS OVERVIEW:
- Total Emails Analyzed: {trends.get('total_analyzed', 0)}
- Average Emotional Intensity: {trends.get('average_intensity', 0):.1f}/100
- Most Common Emotion: {trends.get('most_common_emotion', 'N/A').title()}

EMOTION DISTRIBUTION:
"""
        for emotion, count in trends.get('emotion_distribution', {}).items():
            report += f"  - {emotion.title()}: {count}\n"
        
        report += f"""
CAPABILITIES:
- Real-time emotion detection (6 emotions)
- Emotional intensity scoring (0-100)
- Automatic response tone adjustment
- Escalation risk assessment
- Human review flagging for high-risk emails
- Empathetic response generation
- Emotional trigger identification

EMOTIONS DETECTED:
- Angry (legal threats, demands, outrage)
- Frustrated (annoyance, irritation, disappointment)
- Happy (gratitude, satisfaction, enthusiasm)
- Worried (concern, anxiety, stress)
- Confused (unclear, questions, need explanation)
- Neutral (professional, informational)

RESPONSE TONE ADAPTATION:
✅ Angry → Empathetic & solution-focused
✅ Frustrated → Understanding & apologetic
✅ Happy → Enthusiastic & grateful
✅ Worried → Reassuring & detailed
✅ Confused → Clear & patient
✅ Neutral → Professional

ESCALATION PREVENTION:
✅ Detects legal threats automatically
✅ Flags high-intensity negative emotions
✅ Suggests human review when needed
✅ Tracks escalation risk levels

Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
Contact: +1 302 464 0950 | kleber@ziontechgroup.com
"""
        return report


def analyze_email_content(email_text: str) -> Dict:
    """Analyze email for emotion detection requests"""
    emotion_keywords = ['emotion', 'sentiment', 'tone', 'feeling', 'mood', 'angry', 'happy']
    
    has_emotion = any(kw in email_text.lower() for kw in emotion_keywords)
    
    return {
        'email_type': 'emotion_intelligence',
        'emotion_request': has_emotion,
        'reply_all_required': True,
        'priority': 'high' if has_emotion else 'medium'
    }


if __name__ == '__main__':
    engine = EmailEmotionIntelligence()
    
    # Test angry email
    engine.analyze_emotion(
        'email-001',
        'UNACCEPTABLE SERVICE!!!',
        'This is completely unacceptable! I demand an immediate resolution or I will contact my lawyer!',
        'angry_customer@company.com',
        ['support@company.com']
    )
    
    # Test happy email
    engine.analyze_emotion(
        'email-002',
        'Amazing service!',
        'Thank you so much for the excellent service! Your team is awesome! 😊',
        'happy_customer@company.com',
        ['support@company.com']
    )
    
    # Generate empathetic response
    analysis = engine.analyses[0]
    response = engine.generate_empathetic_response(analysis)
    
    print(engine.generate_report())
    print(f"\nEmpathetic Response: {json.dumps(response, indent=2)}")

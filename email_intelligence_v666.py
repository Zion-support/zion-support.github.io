#!/usr/bin/env python3
"""
V666 - Email Emotional Intelligence Coach
Detects emotional tone, empathy gaps, and provides real-time coaching
for difficult conversations. Helps users navigate sensitive topics with
emotional awareness and relationship preservation.

Key Features:
- Emotional tone detection (joy, anger, sadness, fear, surprise, disgust)
- Empathy gap identification
- Difficult conversation coaching
- Relationship preservation recommendations
- Emotional escalation prevention
- Tone adjustment suggestions
- Reply-all enforcement for all multi-recipient communications
"""

import json
import re
from datetime import datetime
from collections import Counter
from typing import Dict, List, Optional, Tuple

class EmailEmotionalIntelligenceCoach:
    """Coaches users on emotional intelligence in email communication"""
    
    def __init__(self):
        self.coaching_sessions = []
        self.emotional_patterns = {}
        self._load_emotional_lexicon()
    
    def _load_emotional_lexicon(self):
        """Load emotional lexicon for tone detection"""
        self.emotional_patterns = {
            'joy': {
                'keywords': ['happy', 'excited', 'thrilled', 'delighted', 'wonderful', 'amazing', 'fantastic', 'great', 'excellent', 'love', 'appreciate', 'grateful', 'thankful', 'celebrate', 'success', 'achievement', 'proud'],
                'intensity_words': ['ecstatic', 'overjoyed', 'elated', 'euphoric', 'blissful'],
                'emoji': ['😊', '😄', '🎉', '✨', '💫', '🌟']
            },
            'anger': {
                'keywords': ['angry', 'frustrated', 'annoyed', 'irritated', 'upset', 'furious', 'outraged', 'disappointed', 'unacceptable', 'ridiculous', 'absurd', 'incompetent', 'failure', 'wrong', 'mistake', 'blame'],
                'intensity_words': ['enraged', 'livid', 'incensed', 'infuriated', 'seething'],
                'emoji': ['😠', '😡', '💢', '🔥']
            },
            'sadness': {
                'keywords': ['sad', 'disappointed', 'sorry', 'regret', 'unfortunately', 'miss', 'loss', 'grief', 'heartbroken', 'devastated', 'let down', 'failed', 'unfortunately'],
                'intensity_words': ['devastated', 'heartbroken', 'crushed', 'despondent', 'despairing'],
                'emoji': ['😢', '😭', '💔', '😞']
            },
            'fear': {
                'keywords': ['worried', 'concerned', 'anxious', 'nervous', 'scared', 'afraid', 'uncertain', 'risky', 'dangerous', 'threat', 'problem', 'issue', 'complication'],
                'intensity_words': ['terrified', 'panicked', 'horrified', 'dread', 'paralyzed'],
                'emoji': ['😰', '😨', '😱', '⚠️']
            },
            'surprise': {
                'keywords': ['surprised', 'unexpected', 'shocked', 'amazed', 'astonished', 'wow', 'incredible', 'unbelievable', 'suddenly', 'out of nowhere'],
                'intensity_words': ['stunned', 'flabbergasted', 'dumbfounded', 'astounded'],
                'emoji': ['😲', '😮', '🤯', '❗']
            },
            'disgust': {
                'keywords': ['disgusted', 'repulsed', 'revolted', 'offensive', 'inappropriate', 'unprofessional', 'terrible', 'awful', 'horrible', 'disgusting'],
                'intensity_words': ['repugnant', 'abhorrent', 'loathsome', 'detestable'],
                'emoji': ['🤢', '🤮', '😒']
            }
        }
    
    EMPATHY_INDICATORS = {
        'acknowledgment': ['understand', 'appreciate', 'recognize', 'see', 'hear', 'acknowledge'],
        'validation': ['valid', 'reasonable', 'makes sense', 'understandable', 'justified'],
        'perspective_taking': ['from your perspective', 'in your position', 'I can imagine', 'must be', 'seems like'],
        'support': ['here for you', 'support', 'help', 'assist', 'together', 'team'],
        'apology': ['sorry', 'apologize', 'regret', 'my mistake', 'take responsibility']
    }
    
    DIFFICULT_CONVERSATION_MARKERS = {
        'bad_news': ['unfortunately', 'regret to inform', 'difficult decision', 'not able to', 'cannot', 'decline', 'reject'],
        'conflict': ['disagree', 'different perspective', 'concern', 'issue', 'problem', 'conflict', 'dispute'],
        'feedback': ['area for improvement', 'could be better', 'needs work', 'not meeting', 'underperforming'],
        'sensitive_topics': ['personal', 'private', 'confidential', 'sensitive', 'delicate', 'difficult to discuss']
    }
    
    def analyze_emotional_tone(self, text: str) -> Dict:
        """Analyze emotional tone of email text"""
        text_lower = text.lower()
        emotions_detected = {}
        
        for emotion, config in self.emotional_patterns.items():
            matches = [kw for kw in config['keywords'] if kw in text_lower]
            intensity_matches = [kw for kw in config['intensity_words'] if kw in text_lower]
            
            if matches or intensity_matches:
                # Calculate intensity score
                base_score = len(matches) * 10
                intensity_score = len(intensity_matches) * 20
                total_score = min(100, base_score + intensity_score)
                
                emotions_detected[emotion] = {
                    'detected': True,
                    'score': total_score,
                    'keywords': matches,
                    'intensity_keywords': intensity_matches,
                    'intensity_level': 'high' if total_score > 60 else 'medium' if total_score > 30 else 'low'
                }
            else:
                emotions_detected[emotion] = {
                    'detected': False,
                    'score': 0,
                    'keywords': [],
                    'intensity_keywords': [],
                    'intensity_level': 'none'
                }
        
        # Determine dominant emotion
        detected_emotions = {k: v for k, v in emotions_detected.items() if v['detected']}
        if detected_emotions:
            dominant = max(detected_emotions.items(), key=lambda x: x[1]['score'])
            dominant_emotion = dominant[0]
            dominant_score = dominant[1]['score']
        else:
            dominant_emotion = 'neutral'
            dominant_score = 0
        
        return {
            'emotions': emotions_detected,
            'dominant_emotion': dominant_emotion,
            'dominant_score': dominant_score,
            'emotional_complexity': len(detected_emotions),
            'overall_tone': self._classify_tone(detected_emotions)
        }
    
    def _classify_tone(self, emotions: Dict) -> str:
        """Classify overall tone based on emotions"""
        if not emotions:
            return 'neutral'
        
        positive_emotions = ['joy', 'surprise']
        negative_emotions = ['anger', 'sadness', 'fear', 'disgust']
        
        positive_score = sum(emotions[e]['score'] for e in positive_emotions if e in emotions)
        negative_score = sum(emotions[e]['score'] for e in negative_emotions if e in emotions)
        
        if positive_score > negative_score * 1.5:
            return 'very_positive'
        elif positive_score > negative_score:
            return 'positive'
        elif negative_score > positive_score * 1.5:
            return 'very_negative'
        elif negative_score > positive_score:
            return 'negative'
        else:
            return 'mixed'
    
    def detect_empathy_gaps(self, text: str, context: str = 'difficult') -> Dict:
        """Detect empathy gaps in communication"""
        text_lower = text.lower()
        empathy_found = {}
        total_empathy_score = 0
        
        for category, indicators in self.EMPATHY_INDICATORS.items():
            matches = [ind for ind in indicators if ind in text_lower]
            empathy_found[category] = {
                'present': len(matches) > 0,
                'indicators': matches,
                'score': len(matches) * 20
            }
            total_empathy_score += len(matches) * 20
        
        total_empathy_score = min(100, total_empathy_score)
        
        # Determine empathy level
        if total_empathy_score >= 80:
            level = 'excellent'
        elif total_empathy_score >= 60:
            level = 'good'
        elif total_empathy_score >= 40:
            level = 'moderate'
        elif total_empathy_score >= 20:
            level = 'low'
        else:
            level = 'absent'
        
        # Identify missing empathy elements for difficult conversations
        missing_elements = []
        if context == 'difficult':
            if not empathy_found['acknowledgment']['present']:
                missing_elements.append('acknowledgment of feelings')
            if not empathy_found['validation']['present']:
                missing_elements.append('validation of perspective')
            if not empathy_found['perspective_taking']['present']:
                missing_elements.append('perspective-taking')
            if not empathy_found['support']['present']:
                missing_elements.append('offer of support')
        
        return {
            'empathy_score': total_empathy_score,
            'empathy_level': level,
            'empathy_elements': empathy_found,
            'missing_elements': missing_elements,
            'recommendations': self._generate_empathy_recommendations(missing_elements, level)
        }
    
    def _generate_empathy_recommendations(self, missing: List[str], level: str) -> List[str]:
        """Generate empathy improvement recommendations"""
        recommendations = []
        
        if level in ['absent', 'low']:
            recommendations.append('Start by acknowledging the recipient\'s feelings or perspective')
            recommendations.append('Use phrases like "I understand" or "I can imagine"')
        
        for element in missing:
            if element == 'acknowledgment of feelings':
                recommendations.append('Add: "I understand this is frustrating/disappointing/challenging..."')
            elif element == 'validation of perspective':
                recommendations.append('Add: "Your concerns are valid and reasonable..."')
            elif element == 'perspective-taking':
                recommendations.append('Add: "From your perspective, I can see how this might seem..."')
            elif element == 'offer of support':
                recommendations.append('Add: "I\'m here to help/support you through this..."')
        
        if not recommendations:
            recommendations.append('Good empathy detected. Continue showing understanding and support.')
        
        return recommendations
    
    def identify_difficult_conversation(self, text: str) -> Dict:
        """Identify if email contains difficult conversation elements"""
        text_lower = text.lower()
        markers_found = {}
        
        for category, markers in self.DIFFICULT_CONVERSATION_MARKERS.items():
            matches = [m for m in markers if m in text_lower]
            markers_found[category] = {
                'detected': len(matches) > 0,
                'markers': matches,
                'count': len(matches)
            }
        
        total_markers = sum(m['count'] for m in markers_found.values())
        is_difficult = total_markers >= 2
        
        categories_detected = [cat for cat, data in markers_found.items() if data['detected']]
        
        return {
            'is_difficult_conversation': is_difficult,
            'difficulty_level': 'high' if total_markers >= 4 else 'medium' if total_markers >= 2 else 'low',
            'categories': categories_detected,
            'markers': markers_found,
            'coaching_needed': is_difficult
        }
    
    def coach_difficult_conversation(self, email: Dict) -> Dict:
        """Provide coaching for difficult conversations"""
        text = email.get('body', '') + ' ' + email.get('subject', '')
        
        # Analyze components
        emotional_tone = self.analyze_emotional_tone(text)
        empathy_analysis = self.detect_empathy_gaps(text, 'difficult')
        difficulty_check = self.identify_difficult_conversation(text)
        
        # Generate coaching recommendations
        coaching_tips = []
        
        # Emotional tone coaching
        if emotional_tone['overall_tone'] in ['very_negative', 'negative']:
            coaching_tips.append({
                'category': 'emotional_regulation',
                'priority': 'high',
                'tip': 'Consider softening negative language. Replace "unacceptable" with "concerning", "wrong" with "needs adjustment"',
                'example': 'Instead of "This is wrong", try "This needs to be adjusted"'
            })
        
        if emotional_tone['dominant_emotion'] == 'anger':
            coaching_tips.append({
                'category': 'anger_management',
                'priority': 'high',
                'tip': 'Take a break before sending. Use "I" statements instead of accusations',
                'example': 'Instead of "You failed to...", try "I noticed that..."'
            })
        
        # Empathy coaching
        if empathy_analysis['empathy_level'] in ['absent', 'low']:
            coaching_tips.append({
                'category': 'empathy_building',
                'priority': 'high',
                'tip': 'Add empathy statements at the beginning',
                'example': 'Start with: "I understand this is challenging" or "I appreciate your patience"'
            })
        
        # Difficult conversation coaching
        if difficulty_check['is_difficult_conversation']:
            if 'bad_news' in difficulty_check['categories']:
                coaching_tips.append({
                    'category': 'delivering_bad_news',
                    'priority': 'medium',
                    'tip': 'Use the sandwich method: positive opening, bad news, positive closing',
                    'example': 'Start with appreciation, deliver news clearly, end with support'
                })
            
            if 'conflict' in difficulty_check['categories']:
                coaching_tips.append({
                    'category': 'conflict_resolution',
                    'priority': 'medium',
                    'tip': 'Focus on the issue, not the person. Use collaborative language',
                    'example': 'Instead of "You\'re wrong", try "Let\'s explore this together"'
                })
            
            if 'feedback' in difficulty_check['categories']:
                coaching_tips.append({
                    'category': 'constructive_feedback',
                    'priority': 'medium',
                    'tip': 'Be specific, focus on behavior not character, offer solutions',
                    'example': 'Instead of "You\'re not good at this", try "This area could benefit from..."'
                })
        
        # Relationship preservation
        relationship_tips = self._generate_relationship_preservation_tips(emotional_tone, empathy_analysis)
        
        # Tone adjustment suggestions
        tone_adjustments = self._suggest_tone_adjustments(text, emotional_tone)
        
        coaching_session = {
            'email_id': email.get('id', ''),
            'emotional_analysis': emotional_tone,
            'empathy_analysis': empathy_analysis,
            'difficulty_assessment': difficulty_check,
            'coaching_tips': coaching_tips,
            'relationship_preservation': relationship_tips,
            'tone_adjustments': tone_adjustments,
            'overall_coaching_score': self._calculate_coaching_score(emotional_tone, empathy_analysis, difficulty_check),
            'ready_to_send': self._assess_readiness(emotional_tone, empathy_analysis, coaching_tips),
            'reply_all_required': len(email.get('to', [])) > 1,
            'timestamp': datetime.now().isoformat()
        }
        
        self.coaching_sessions.append(coaching_session)
        return coaching_session
    
    def _generate_relationship_preservation_tips(self, emotional: Dict, empathy: Dict) -> List[Dict]:
        """Generate relationship preservation tips"""
        tips = []
        
        if emotional['overall_tone'] in ['very_negative', 'negative']:
            tips.append({
                'tip': 'End on a positive or forward-looking note',
                'reason': 'Preserves relationship despite difficult content',
                'example': 'Close with: "I value our partnership and look forward to resolving this together"'
            })
        
        if empathy['empathy_level'] in ['absent', 'low']:
            tips.append({
                'tip': 'Express appreciation for the relationship',
                'reason': 'Reinforces positive connection',
                'example': 'Add: "I appreciate your understanding" or "Thank you for your patience"'
            })
        
        if not tips:
            tips.append({
                'tip': 'Maintain current positive approach',
                'reason': 'Relationship appears well-maintained',
                'example': 'Continue showing respect and understanding'
            })
        
        return tips
    
    def _suggest_tone_adjustments(self, text: str, emotional: Dict) -> List[Dict]:
        """Suggest specific tone adjustments"""
        adjustments = []
        
        # Check for aggressive language
        aggressive_phrases = [
            ('you must', 'please consider'),
            ('you need to', 'it would be helpful if'),
            ('this is unacceptable', 'this needs attention'),
            ('you failed', 'there was an issue'),
            ('wrong', 'needs adjustment'),
            ('immediately', 'as soon as possible'),
            ('demand', 'request')
        ]
        
        text_lower = text.lower()
        for aggressive, softer in aggressive_phrases:
            if aggressive in text_lower:
                adjustments.append({
                    'original': aggressive,
                    'suggested': softer,
                    'reason': 'Reduces confrontational tone'
                })
        
        return adjustments
    
    def _calculate_coaching_score(self, emotional: Dict, empathy: Dict, difficulty: Dict) -> int:
        """Calculate overall coaching effectiveness score"""
        score = 100
        
        # Deduct for negative emotions
        if emotional['overall_tone'] == 'very_negative':
            score -= 30
        elif emotional['overall_tone'] == 'negative':
            score -= 15
        
        # Deduct for low empathy
        if empathy['empathy_level'] == 'absent':
            score -= 30
        elif empathy['empathy_level'] == 'low':
            score -= 20
        elif empathy['empathy_level'] == 'moderate':
            score -= 10
        
        # Deduct for high difficulty without adequate coaching
        if difficulty['difficulty_level'] == 'high' and empathy['empathy_level'] in ['absent', 'low']:
            score -= 20
        
        return max(0, score)
    
    def _assess_readiness(self, emotional: Dict, empathy: Dict, coaching_tips: List) -> Dict:
        """Assess if email is ready to send"""
        high_priority_tips = [t for t in coaching_tips if t.get('priority') == 'high']
        
        if emotional['overall_tone'] == 'very_negative':
            return {
                'ready': False,
                'reason': 'Very negative tone detected. Please review and soften language.',
                'action_required': 'Revise emotional tone'
            }
        
        if empathy['empathy_level'] == 'absent' and high_priority_tips:
            return {
                'ready': False,
                'reason': 'Missing empathy in difficult conversation',
                'action_required': 'Add empathy statements'
            }
        
        if len(high_priority_tips) > 2:
            return {
                'ready': False,
                'reason': f'{len(high_priority_tips)} high-priority improvements needed',
                'action_required': 'Review coaching tips'
            }
        
        return {
            'ready': True,
            'reason': 'Email meets emotional intelligence standards',
            'action_required': None
        }


def test_v666():
    """Test V666 Email Emotional Intelligence Coach"""
    coach = EmailEmotionalIntelligenceCoach()
    
    # Test 1: Angry email needing coaching
    angry_email = {
        'id': 'e001',
        'from': 'manager@company.com',
        'to': ['team@company.com', 'hr@company.com'],
        'subject': 'Unacceptable Performance',
        'body': 'This is completely unacceptable. You failed to meet the deadline again. This is the third time and I am furious. You must fix this immediately or there will be consequences. This is wrong and ridiculous.',
        'timestamp': '2026-05-30T09:00:00'
    }
    
    # Test 2: Difficult conversation with empathy
    empathetic_email = {
        'id': 'e002',
        'from': 'manager@company.com',
        'to': ['employee@company.com'],
        'subject': 'Regarding Recent Project Challenges',
        'body': 'I understand this has been a challenging time, and I appreciate your hard work. Unfortunately, we need to discuss some areas for improvement. From your perspective, I can imagine the workload has been overwhelming. I\'m here to support you and together we can find a solution. Your concerns are valid and reasonable.',
        'timestamp': '2026-05-30T10:00:00'
    }
    
    # Test 3: Positive email
    positive_email = {
        'id': 'e003',
        'from': 'ceo@company.com',
        'to': ['all@company.com'],
        'subject': 'Celebrating Our Amazing Team!',
        'body': 'I am thrilled to announce that we achieved our quarterly goals! This is fantastic news and I am so proud of everyone. Thank you for your amazing work. Let\'s celebrate this success together!',
        'timestamp': '2026-05-30T11:00:00'
    }
    
    for email in [angry_email, empathetic_email, positive_email]:
        session = coach.coach_difficult_conversation(email)
        print(f"\n{'='*50}")
        print(f"Email: {email['subject'][:40]}...")
        print(f"Dominant Emotion: {session['emotional_analysis']['dominant_emotion']} ({session['emotional_analysis']['dominant_score']}/100)")
        print(f"Overall Tone: {session['emotional_analysis']['overall_tone']}")
        print(f"Empathy Level: {session['empathy_analysis']['empathy_level']} ({session['empathy_analysis']['empathy_score']}/100)")
        print(f"Difficult Conversation: {session['difficulty_assessment']['is_difficult_conversation']}")
        print(f"Coaching Score: {session['overall_coaching_score']}/100")
        print(f"Ready to Send: {session['ready_to_send']['ready']}")
        if session['coaching_tips']:
            print(f"Top Coaching Tip: {session['coaching_tips'][0]['tip'][:60]}...")
    
    print(f"\n✅ V666 Email Emotional Intelligence Coach Test Complete")
    return True


if __name__ == '__main__':
    test_v666()

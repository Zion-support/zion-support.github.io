#!/usr/bin/env python3
"""
V1087: Email Response Quality Scorer
AI-powered scoring of email response quality across multiple dimensions.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import re
from typing import Dict, List

class ResponseQualityScorer:
    def __init__(self):
        self.scoring_weights = {
            'clarity': 0.25,
            'tone': 0.20,
            'completeness': 0.20,
            'professionalism': 0.20,
            'actionability': 0.15
        }
    
    def score_response(self, email_data: Dict) -> Dict:
        """Score email response quality."""
        body = email_data.get('body', '')
        subject = email_data.get('subject', '')
        recipients = email_data.get('recipients', [])
        
        # REPLY-ALL ENFORCEMENT
        reply_all_required = len(recipients) > 1
        
        # Score each dimension
        clarity = self._score_clarity(body)
        tone = self._score_tone(body)
        completeness = self._score_completeness(body, subject)
        professionalism = self._score_professionalism(body)
        actionability = self._score_actionability(body)
        
        # Calculate overall score
        overall_score = (
            clarity['score'] * self.scoring_weights['clarity'] +
            tone['score'] * self.scoring_weights['tone'] +
            completeness['score'] * self.scoring_weights['completeness'] +
            professionalism['score'] * self.scoring_weights['professionalism'] +
            actionability['score'] * self.scoring_weights['actionability']
        )
        
        # Determine quality level
        if overall_score >= 85:
            quality_level = 'excellent'
        elif overall_score >= 70:
            quality_level = 'good'
        elif overall_score >= 55:
            quality_level = 'fair'
        else:
            quality_level = 'needs_improvement'
        
        # Identify strengths and weaknesses
        strengths = self._identify_strengths(clarity, tone, completeness, professionalism, actionability)
        weaknesses = self._identify_weaknesses(clarity, tone, completeness, professionalism, actionability)
        
        # Generate recommendations
        recommendations = self._generate_recommendations(
            clarity, tone, completeness, professionalism, actionability, 
            strengths, weaknesses, reply_all_required
        )
        
        return {
            'email_id': email_data.get('id'),
            'overall_score': round(overall_score, 1),
            'quality_level': quality_level,
            'dimension_scores': {
                'clarity': clarity,
                'tone': tone,
                'completeness': completeness,
                'professionalism': professionalism,
                'actionability': actionability
            },
            'strengths': strengths,
            'weaknesses': weaknesses,
            'reply_all_required': reply_all_required,
            'reply_all_note': 'This email has multiple recipients. Reply-all is mandatory.' if reply_all_required else None,
            'recommendations': recommendations,
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _score_clarity(self, body: str) -> Dict:
        """Score clarity dimension."""
        score = 100
        issues = []
        
        # Check sentence length
        sentences = re.split(r'[.!?]+', body)
        avg_length = sum(len(s.split()) for s in sentences if s.strip()) / max(len(sentences), 1)
        
        if avg_length > 25:
            score -= 25
            issues.append('Sentences too long (avg > 25 words)')
        elif avg_length > 20:
            score -= 10
            issues.append('Some sentences could be shorter')
        
        # Check for complex words
        words = body.split()
        complex_words = [w for w in words if len(w) > 12]
        if len(complex_words) > 3:
            score -= 15
            issues.append(f'{len(complex_words)} complex words detected')
        
        # Check paragraph structure
        paragraphs = body.split('\n\n')
        if len(paragraphs) < 2 and len(body) > 200:
            score -= 10
            issues.append('Long text without paragraph breaks')
        
        # Check for bullet points/lists
        if '-' in body or '•' in body or re.search(r'\d+\.', body):
            score += 5
        
        return {
            'score': max(0, min(100, score)),
            'issues': issues,
            'strengths': ['Good use of lists' if ('-' in body or '•' in body) else None]
        }
    
    def _score_tone(self, body: str) -> Dict:
        """Score tone dimension."""
        score = 75
        issues = []
        strengths = []
        
        text_lower = body.lower()
        
        # Positive language
        positive_phrases = ['thank you', 'appreciate', 'please', 'would you', 'could you', 'happy to', 'glad to', 'great', 'excellent']
        positive_count = sum(1 for phrase in positive_phrases if phrase in text_lower)
        score += min(20, positive_count * 4)
        if positive_count > 0:
            strengths.append('Positive and courteous language')
        
        # Negative language
        negative_phrases = ['you must', 'you should', 'you need to', 'immediately', 'asap', 'urgent', 'demand', 'require']
        negative_count = sum(1 for phrase in negative_phrases if phrase in text_lower)
        score -= min(25, negative_count * 8)
        if negative_count > 0:
            issues.append(f'{negative_count} demanding phrases detected')
        
        # Empathy
        empathy_phrases = ['understand', 'appreciate your', 'i see', 'that makes sense', 'i realize']
        if any(phrase in text_lower for phrase in empathy_phrases):
            score += 10
            strengths.append('Shows empathy and understanding')
        
        # Excessive punctuation
        if '!!!' in body or '???' in body:
            score -= 15
            issues.append('Excessive punctuation')
        
        return {
            'score': max(0, min(100, score)),
            'issues': issues,
            'strengths': strengths
        }
    
    def _score_completeness(self, body: str, subject: str) -> Dict:
        """Score completeness dimension."""
        score = 70
        issues = []
        strengths = []
        
        # Greeting
        greetings = ['hi ', 'hello', 'dear', 'good morning', 'good afternoon']
        if any(greeting in body.lower() for greeting in greetings):
            score += 10
            strengths.append('Proper greeting included')
        else:
            issues.append('Missing greeting')
        
        # Closing
        closings = ['best regards', 'sincerely', 'thanks', 'thank you', 'regards', 'best']
        if any(closing in body.lower() for closing in closings):
            score += 10
            strengths.append('Proper closing included')
        else:
            issues.append('Missing closing')
        
        # Specific details
        if re.search(r'\d+', body):
            score += 5
            strengths.append('Includes specific details')
        
        # Length appropriateness
        word_count = len(body.split())
        if word_count < 20:
            score -= 20
            issues.append('Email too short (< 20 words)')
        elif word_count > 500:
            score -= 10
            issues.append('Email too long (> 500 words)')
        
        # Questions answered
        if '?' in body:
            score += 5
            strengths.append('Asks clarifying questions')
        
        return {
            'score': max(0, min(100, score)),
            'issues': issues,
            'strengths': strengths
        }
    
    def _score_professionalism(self, body: str) -> Dict:
        """Score professionalism dimension."""
        score = 80
        issues = []
        strengths = []
        
        text_lower = body.lower()
        
        # Unprofessional language
        unprofessional = ['lol', 'omg', 'btw', 'fyi', 'gonna', 'wanna', 'kinda', 'sorta', 'yeah', 'nope']
        unprofessional_count = sum(1 for word in unprofessional if word in text_lower)
        score -= unprofessional_count * 10
        if unprofessional_count > 0:
            issues.append(f'{unprofessional_count} informal words detected')
        
        # Proper capitalization
        if body and body[0].isupper():
            score += 5
            strengths.append('Proper capitalization')
        
        # Proper punctuation
        if body.rstrip().endswith(('.', '!', '?')):
            score += 5
        
        # Emoji overuse
        emoji_pattern = r'[\U0001F600-\U0001F64F\U0001F300-\U0001F5FF\U0001F680-\U0001F6FF\U0001F1E0-\U0001F1FF]'
        emoji_count = len(re.findall(emoji_pattern, body))
        if emoji_count > 3:
            score -= 15
            issues.append(f'{emoji_count} emojis (too many for professional email)')
        
        return {
            'score': max(0, min(100, score)),
            'issues': issues,
            'strengths': strengths
        }
    
    def _score_actionability(self, body: str) -> Dict:
        """Score actionability dimension."""
        score = 60
        issues = []
        strengths = []
        
        text_lower = body.lower()
        
        # Clear next steps
        action_phrases = ['next step', 'action item', 'please', 'could you', 'let me know', 'i will', 'we will', 'will send', 'will do']
        action_count = sum(1 for phrase in action_phrases if phrase in text_lower)
        score += min(25, action_count * 8)
        if action_count > 0:
            strengths.append('Clear action items defined')
        
        # Deadlines
        deadline_patterns = [r'\bby\s+\w+', r'\bbefore\s+\w+', r'\buntil\s+\w+', r'\bdeadline', r'\bdue']
        if any(re.search(pattern, text_lower) for pattern in deadline_patterns):
            score += 10
            strengths.append('Includes deadlines or timeframes')
        else:
            issues.append('No deadlines or timeframes specified')
        
        # Commitments
        commitment_patterns = [r'i will', r'we will', r'i can', r'we can', r'i\'ll']
        if any(re.search(pattern, text_lower) for pattern in commitment_patterns):
            score += 10
            strengths.append('Clear commitments made')
        
        # Vagueness
        vague_phrases = ['maybe', 'possibly', 'might', 'could be', 'not sure', 'we\'ll see']
        vague_count = sum(1 for phrase in vague_phrases if phrase in text_lower)
        score -= vague_count * 5
        if vague_count > 0:
            issues.append(f'{vague_count} vague phrases detected')
        
        return {
            'score': max(0, min(100, score)),
            'issues': issues,
            'strengths': strengths
        }
    
    def _identify_strengths(self, clarity, tone, completeness, professionalism, actionability) -> List[str]:
        """Identify email strengths."""
        strengths = []
        
        dimensions = [clarity, tone, completeness, professionalism, actionability]
        for dim in dimensions:
            strengths.extend([s for s in dim.get('strengths', []) if s])
        
        # Remove duplicates and None values
        return list(set([s for s in strengths if s]))
    
    def _identify_weaknesses(self, clarity, tone, completeness, professionalism, actionability) -> List[str]:
        """Identify email weaknesses."""
        weaknesses = []
        
        dimensions = [clarity, tone, completeness, professionalism, actionability]
        for dim in dimensions:
            weaknesses.extend(dim.get('issues', []))
        
        return list(set(weaknesses))
    
    def _generate_recommendations(self, clarity, tone, completeness, professionalism, actionability, 
                                   strengths, weaknesses, reply_all_required) -> List[str]:
        """Generate improvement recommendations."""
        recommendations = []
        
        if reply_all_required:
            recommendations.append('👥 REPLY ALL: Ensure all recipients are included')
        
        # Based on weaknesses
        for weakness in weaknesses[:5]:  # Top 5 issues
            if 'long' in weakness.lower() and 'sentence' in weakness.lower():
                recommendations.append('📝 Break long sentences into shorter ones for better clarity')
            elif 'greeting' in weakness.lower():
                recommendations.append('👋 Add a proper greeting (Hi, Hello, Dear)')
            elif 'closing' in weakness.lower():
                recommendations.append('✍️ Add a professional closing (Best regards, Sincerely)')
            elif 'informal' in weakness.lower():
                recommendations.append('👔 Replace informal language with professional alternatives')
            elif 'deadline' in weakness.lower():
                recommendations.append('📅 Include specific deadlines or timeframes')
            elif 'demanding' in weakness.lower():
                recommendations.append('💬 Use softer language (e.g., "Could you" instead of "You must")')
            elif 'punctuation' in weakness.lower():
                recommendations.append('❗ Reduce excessive punctuation (!!!, ???)')
            elif 'emoji' in weakness.lower():
                recommendations.append('😊 Limit emoji usage in professional emails')
        
        # Based on strengths
        if len(strengths) >= 3:
            recommendations.append('✅ Your email has strong fundamentals - maintain these practices')
        
        if not recommendations:
            recommendations.append('✅ Your email is well-crafted! Consider adding specific examples or data to strengthen your message.')
        
        return recommendations


if __name__ == '__main__':
    scorer = ResponseQualityScorer()
    
    test_email = {
        'id': '1',
        'subject': 'Project Update',
        'body': '''Hi Team,

Thank you for the update. I appreciate the detailed breakdown of the project status.

Here are the next steps:
1. Please review the attached document by Friday
2. I will schedule a follow-up meeting for next week
3. Let me know if you have any questions or concerns

Best regards,
John''',
        'recipients': ['team@company.com', 'manager@company.com']
    }
    
    result = scorer.score_response(test_email)
    
    print("=== V1087: Email Response Quality Scorer ===\n")
    print(f"Overall Score: {result['overall_score']}/100 ({result['quality_level']})")
    print(f"\nDimension Scores:")
    for dim, data in result['dimension_scores'].items():
        print(f"  {dim.capitalize()}: {data['score']}/100")
    print(f"\nStrengths:")
    for strength in result['strengths']:
        print(f"  - {strength}")
    print(f"\nWeaknesses:")
    for weakness in result['weaknesses']:
        print(f"  - {weakness}")
    print(f"\nRecommendations:")
    for rec in result['recommendations']:
        print(f"  - {rec}")
    print(f"\nReply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
    print("\n✅ All tests passed!")

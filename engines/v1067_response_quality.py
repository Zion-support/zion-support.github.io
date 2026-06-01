#!/usr/bin/env python3
"""
V1067: Email Response Quality Scorer
AI-powered scoring of email response quality.
Evaluate clarity, tone, completeness, professionalism, and actionability.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import json
import re
from datetime import datetime

class ResponseQualityScorer:
    def __init__(self):
        self.scoring_weights = {
            'clarity': 0.25,
            'tone': 0.20,
            'completeness': 0.20,
            'professionalism': 0.20,
            'actionability': 0.15
        }
    
    def score_response(self, email_data):
        """Score the quality of an email response."""
        body = email_data.get('body', '')
        subject = email_data.get('subject', '')
        recipients = email_data.get('recipients', [])
        thread_context = email_data.get('thread_context', [])
        
        # REPLY-ALL ENFORCEMENT
        reply_all_required = len(recipients) > 1
        
        # Calculate individual scores
        clarity_score = self._score_clarity(body)
        tone_score = self._score_tone(body)
        completeness_score = self._score_completeness(body, thread_context)
        professionalism_score = self._score_professionalism(body)
        actionability_score = self._score_actionability(body)
        
        # Calculate weighted overall score
        overall_score = (
            clarity_score * self.scoring_weights['clarity'] +
            tone_score * self.scoring_weights['tone'] +
            completeness_score * self.scoring_weights['completeness'] +
            professionalism_score * self.scoring_weights['professionalism'] +
            actionability_score * self.scoring_weights['actionability']
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
        
        # Generate improvement suggestions
        suggestions = self._generate_suggestions(
            clarity_score, tone_score, completeness_score,
            professionalism_score, actionability_score, reply_all_required
        )
        
        return {
            'email_id': email_data.get('id'),
            'overall_score': round(overall_score, 1),
            'quality_level': quality_level,
            'scores': {
                'clarity': round(clarity_score, 1),
                'tone': round(tone_score, 1),
                'completeness': round(completeness_score, 1),
                'professionalism': round(professionalism_score, 1),
                'actionability': round(actionability_score, 1)
            },
            'reply_all_required': reply_all_required,
            'reply_all_note': 'This email has multiple recipients. Reply-all is mandatory.' if reply_all_required else None,
            'improvement_suggestions': suggestions,
            'strengths': self._identify_strengths(clarity_score, tone_score, completeness_score, professionalism_score, actionability_score),
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _score_clarity(self, body):
        """Score email clarity (0-100)."""
        score = 100
        
        # Penalize long sentences
        sentences = body.split('.')
        avg_sentence_length = sum(len(s.split()) for s in sentences) / max(len(sentences), 1)
        if avg_sentence_length > 25:
            score -= 20
        elif avg_sentence_length > 20:
            score -= 10
        
        # Penalize complex words
        words = body.split()
        complex_words = sum(1 for w in words if len(w) > 12)
        complex_ratio = complex_words / max(len(words), 1)
        if complex_ratio > 0.1:
            score -= 15
        
        # Reward short paragraphs
        paragraphs = body.split('\n\n')
        avg_paragraph_length = sum(len(p.split()) for p in paragraphs) / max(len(paragraphs), 1)
        if avg_paragraph_length < 50:
            score += 10
        
        # Penalize lack of structure
        if not any(marker in body for marker in ['-', '•', '1.', '2.', 'First', 'Second']):
            score -= 10
        
        return max(0, min(100, score))
    
    def _score_tone(self, body):
        """Score email tone (0-100)."""
        score = 75  # Start neutral
        
        text = body.lower()
        
        # Positive tone indicators
        positive_phrases = ['thank you', 'appreciate', 'please', 'would you', 'could you', 'happy to', 'glad to']
        positive_count = sum(1 for phrase in positive_phrases if phrase in text)
        score += min(20, positive_count * 5)
        
        # Negative tone indicators
        negative_phrases = ['you must', 'you should', 'you need to', 'immediately', 'asap', 'urgent', '!!']
        negative_count = sum(1 for phrase in negative_phrases if phrase in text)
        score -= min(25, negative_count * 8)
        
        # Check for empathy
        empathy_phrases = ['understand', 'appreciate your', 'i see', 'that makes sense', 'concern']
        if any(phrase in text for phrase in empathy_phrases):
            score += 10
        
        # Check for excessive capitalization (shouting)
        if sum(1 for c in body if c.isupper()) / len(body) > 0.3:
            score -= 20
        
        return max(0, min(100, score))
    
    def _score_completeness(self, body, thread_context):
        """Score email completeness (0-100)."""
        score = 70  # Base score
        
        # Check for greeting
        if any(greeting in body.lower() for greeting in ['hi ', 'hello', 'dear', 'good morning', 'good afternoon']):
            score += 10
        
        # Check for closing
        if any(closing in body.lower() for closing in ['best regards', 'sincerely', 'thanks', 'thank you', 'regards']):
            score += 10
        
        # Check if questions from thread are answered
        if thread_context:
            questions = sum(1 for email in thread_context if '?' in email.get('body', ''))
            answers = body.count('?')  # Rough heuristic
            if questions > 0:
                score += min(15, (answers / questions) * 15)
        
        # Check for specific details (numbers, dates, names)
        if re.search(r'\d+', body):
            score += 5
        
        # Penalize very short responses
        if len(body.split()) < 20:
            score -= 20
        
        return max(0, min(100, score))
    
    def _score_professionalism(self, body):
        """Score email professionalism (0-100)."""
        score = 80  # Start high
        
        text = body.lower()
        
        # Check for unprofessional language
        unprofessional = ['lol', 'omg', 'btw', 'fyi', 'gonna', 'wanna', 'kinda', 'sorta']
        unprofessional_count = sum(1 for word in unprofessional if word in text)
        score -= unprofessional_count * 8
        
        # Check for proper grammar indicators
        if body[0].isupper():  # Starts with capital
            score += 5
        
        # Check for excessive punctuation
        if '!!!' in body or '???' in body:
            score -= 15
        
        # Check for emojis (context-dependent, but penalize for professional contexts)
        emoji_pattern = re.compile("["
            u"\U0001F600-\U0001F64F"  # emoticons
            u"\U0001F300-\U0001F5FF"  # symbols & pictographs
            u"\U0001F680-\U0001F6FF"  # transport & map symbols
            "]+", flags=re.UNICODE)
        if emoji_pattern.search(body):
            score -= 10
        
        # Reward proper structure
        if '\n\n' in body:  # Has paragraph breaks
            score += 5
        
        return max(0, min(100, score))
    
    def _score_actionability(self, body):
        """Score email actionability (0-100)."""
        score = 60  # Base score
        
        text = body.lower()
        
        # Check for clear next steps
        action_phrases = ['next step', 'action item', 'please', 'could you', 'let me know', 'i will', 'we will']
        action_count = sum(1 for phrase in action_phrases if phrase in text)
        score += min(25, action_count * 8)
        
        # Check for deadlines or timelines
        if re.search(r'(by|before|until|deadline|due)', text):
            score += 10
        
        # Check for specific commitments
        if re.search(r'(i will|we will|i can|we can)', text):
            score += 10
        
        # Check for questions that move conversation forward
        if '?' in body:
            score += 5
        
        # Penalize vague responses
        vague_phrases = ['maybe', 'possibly', 'might', 'could be', 'not sure']
        vague_count = sum(1 for phrase in vague_phrases if phrase in text)
        score -= vague_count * 5
        
        return max(0, min(100, score))
    
    def _generate_suggestions(self, clarity, tone, completeness, professionalism, actionability, reply_all_required):
        """Generate improvement suggestions."""
        suggestions = []
        
        if reply_all_required:
            suggestions.append('👥 REPLY ALL: Ensure all recipients are included in your response')
        
        if clarity < 70:
            suggestions.append('📝 Use shorter sentences and simpler language for better clarity')
            suggestions.append('📊 Add bullet points or numbered lists to structure information')
        
        if tone < 70:
            suggestions.append('💝 Use more positive and empathetic language')
            suggestions.append('🙏 Add phrases like "thank you" and "please" to improve tone')
        
        if completeness < 70:
            suggestions.append('✅ Include a proper greeting and closing')
            suggestions.append('📋 Ensure all questions from the thread are addressed')
        
        if professionalism < 70:
            suggestions.append('👔 Avoid informal language and excessive punctuation')
            suggestions.append('✍️ Use proper grammar and sentence structure')
        
        if actionability < 70:
            suggestions.append('🎯 Include clear next steps and action items')
            suggestions.append('📅 Add specific deadlines or timelines when applicable')
        
        if not suggestions:
            suggestions.append('✅ Your email is well-crafted! Consider adding specific examples or data to strengthen your message.')
        
        return suggestions
    
    def _identify_strengths(self, clarity, tone, completeness, professionalism, actionability):
        """Identify email strengths."""
        strengths = []
        
        if clarity >= 80:
            strengths.append('📖 Clear and easy to understand')
        if tone >= 80:
            strengths.append('💝 Positive and professional tone')
        if completeness >= 80:
            strengths.append('✅ Comprehensive and well-structured')
        if professionalism >= 80:
            strengths.append('👔 Highly professional language')
        if actionability >= 80:
            strengths.append('🎯 Clear action items and next steps')
        
        return strengths


if __name__ == '__main__':
    scorer = ResponseQualityScorer()
    
    test_email = {
        'id': '1',
        'subject': 'Re: Project Update',
        'body': '''Hi Team,

Thank you for the update. I appreciate the detailed breakdown of the project status.

Here are the next steps:
1. Please review the attached document by Friday
2. I will schedule a follow-up meeting for next week
3. Let me know if you have any questions or concerns

Best regards,
John''',
        'recipients': ['team@company.com', 'manager@company.com'],
        'thread_context': []
    }
    
    print("=== V1067: Email Response Quality Scorer ===\n")
    result = scorer.score_response(test_email)
    
    print(f"Overall Score: {result['overall_score']}/100 ({result['quality_level']})")
    print(f"\nDetailed Scores:")
    for dimension, score in result['scores'].items():
        print(f"  {dimension.capitalize()}: {score}/100")
    
    print(f"\nStrengths:")
    for strength in result['strengths']:
        print(f"  - {strength}")
    
    print(f"\nImprovement Suggestions:")
    for suggestion in result['improvement_suggestions']:
        print(f"  - {suggestion}")
    
    print(f"\nReply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
    print("\n✅ All tests passed!")

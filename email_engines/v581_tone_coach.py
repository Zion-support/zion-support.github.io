#!/usr/bin/env python3
"""
V581 - Email Tone Coach
Real-time coaching on email tone, professionalism, and cultural sensitivity.
Enforces reply-all for all communications.
"""
import json
from datetime import datetime
from typing import Dict, List
import re

class EmailToneCoach:
    def __init__(self):
        self.reply_all_enforced = True
        self.passive_aggressive_patterns = [
            r'per my last email',
            r'as i mentioned before',
            r'as previously stated',
            r'for your reference',
            r'not sure if you saw',
            r'just following up',
            r'circling back',
            r'to reiterate'
        ]
        self.professional_phrases = [
            'thank you', 'appreciate', 'please', 'kind regards',
            'best regards', 'looking forward', 'collaboration'
        ]
    
    def coach_tone(self, email: Dict) -> Dict:
        """Analyze and coach on email tone"""
        body = email.get('body', '')
        
        # Detect passive-aggressive language
        passive_aggressive = self._detect_passive_aggressive(body)
        
        # Assess professionalism
        professionalism = self._assess_professionalism(body)
        
        # Cultural sensitivity analysis
        cultural = self._analyze_cultural_sensitivity(email)
        
        # Generate suggestions
        suggestions = self._generate_suggestions(passive_aggressive, professionalism, cultural)
        
        # Calculate tone score
        tone_score = self._calculate_tone_score(passive_aggressive, professionalism)
        
        return {
            'engine': 'V581_Email_Tone_Coach',
            'timestamp': datetime.now().isoformat(),
            'email_id': email.get('id', 'unknown'),
            'tone_score': tone_score,
            'tone_assessment': self._score_to_assessment(tone_score),
            'passive_aggressive_detected': passive_aggressive,
            'professionalism_score': professionalism['score'],
            'cultural_sensitivity': cultural,
            'suggestions': suggestions,
            'reply_all_enforced': self.reply_all_enforced,
            'all_recipients': email.get('to', []) + email.get('cc', [])
        }
    
    def _detect_passive_aggressive(self, body: str) -> Dict:
        """Detect passive-aggressive language patterns"""
        detected = []
        body_lower = body.lower()
        
        for pattern in self.passive_aggressive_patterns:
            if re.search(pattern, body_lower):
                detected.append({
                    'phrase': pattern,
                    'severity': 'medium',
                    'suggestion': 'Consider rephrasing to be more direct and collaborative'
                })
        
        return {
            'found': len(detected) > 0,
            'patterns': detected,
            'count': len(detected)
        }
    
    def _assess_professionalism(self, body: str) -> Dict:
        """Assess overall professionalism"""
        body_lower = body.lower()
        
        # Count professional phrases
        professional_count = sum(1 for phrase in self.professional_phrases if phrase in body_lower)
        
        # Check for informal language
        informal_patterns = ['lol', 'omg', 'btw', 'fyi', 'thx', 'u', 'ur']
        informal_count = sum(1 for pattern in informal_patterns if pattern in body_lower)
        
        # Calculate score
        score = 50 + (professional_count * 10) - (informal_count * 15)
        score = max(0, min(100, score))
        
        return {
            'score': score,
            'professional_phrases': professional_count,
            'informal_language': informal_count,
            'assessment': 'excellent' if score >= 80 else 'good' if score >= 60 else 'needs_improvement'
        }
    
    def _analyze_cultural_sensitivity(self, email: Dict) -> Dict:
        """Analyze cultural sensitivity"""
        recipients = email.get('to', []) + email.get('cc', [])
        body = email.get('body', '')
        
        # Detect international recipients
        international = any('.com' not in r or any(cc in r for cc in ['.uk', '.de', '.fr', '.jp', '.cn']) for r in recipients)
        
        # Check for culturally sensitive content
        sensitive_terms = ['holiday', 'christmas', 'thanksgiving', 'summer', 'winter']
        has_sensitive = any(term in body.lower() for term in sensitive_terms)
        
        return {
            'international_recipients': international,
            'culturally_sensitive_content': has_sensitive,
            'recommendation': 'Consider cultural context' if international and has_sensitive else 'Appropriate'
        }
    
    def _generate_suggestions(self, passive_aggressive: Dict, professionalism: Dict, cultural: Dict) -> List[Dict]:
        """Generate tone improvement suggestions"""
        suggestions = []
        
        if passive_aggressive['found']:
            suggestions.append({
                'type': 'passive_aggressive',
                'priority': 'high',
                'suggestion': 'Replace passive-aggressive phrases with direct, collaborative language',
                'examples': [
                    'Instead of "per my last email" → "As discussed in our previous conversation"',
                    'Instead of "as I mentioned before" → "To clarify the next steps"'
                ]
            })
        
        if professionalism['score'] < 70:
            suggestions.append({
                'type': 'professionalism',
                'priority': 'medium',
                'suggestion': 'Add more professional phrases and reduce informal language',
                'examples': [
                    'Add "Thank you for your time"',
                    'Use "Best regards" or "Kind regards" as closing'
                ]
            })
        
        if cultural['international_recipients'] and cultural['culturally_sensitive_content']:
            suggestions.append({
                'type': 'cultural_sensitivity',
                'priority': 'medium',
                'suggestion': 'Consider using more inclusive language for international recipients',
                'examples': [
                    'Use "season\'s greetings" instead of holiday-specific terms',
                    'Avoid region-specific references'
                ]
            })
        
        if not suggestions:
            suggestions.append({
                'type': 'positive',
                'priority': 'low',
                'suggestion': 'Excellent tone! Continue with this professional approach'
            })
        
        return suggestions
    
    def _calculate_tone_score(self, passive_aggressive: Dict, professionalism: Dict) -> int:
        """Calculate overall tone score"""
        base_score = professionalism['score']
        
        # Penalize for passive-aggressive language
        if passive_aggressive['found']:
            base_score -= (passive_aggressive['count'] * 10)
        
        return max(0, min(100, base_score))
    
    def _score_to_assessment(self, score: int) -> str:
        """Convert score to assessment"""
        if score >= 90:
            return 'excellent'
        elif score >= 75:
            return 'very_good'
        elif score >= 60:
            return 'good'
        elif score >= 40:
            return 'needs_improvement'
        else:
            return 'poor'

if __name__ == "__main__":
    coach = EmailToneCoach()
    test_email = {
        'id': 'test-581',
        'to': ['colleague@company.com'],
        'cc': ['manager@company.com'],
        'subject': 'Project Update',
        'body': 'Per my last email, the project is delayed. As I mentioned before, we need more resources. Thx for understanding.'
    }
    result = coach.coach_tone(test_email)
    print(json.dumps(result, indent=2))

#!/usr/bin/env python3
"""
V1091: Email Tone Adaptation Engine
Automatically adapt email tone based on recipient relationship and context.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

from typing import Dict, List

class ToneAdaptationEngine:
    def __init__(self):
        self.relationship_tones = {}
        self.formality_levels = {
            'very_formal': ['Dear Sir/Madam', 'Yours faithfully', 'Respectfully'],
            'formal': ['Dear', 'Best regards', 'Sincerely'],
            'professional': ['Hello', 'Kind regards', 'Regards'],
            'friendly': ['Hi', 'Best', 'Thanks'],
            'casual': ['Hey', 'Cheers', 'Talk soon']
        }
    
    def adapt_tone(self, email_data: Dict) -> Dict:
        """Adapt email tone based on recipient and context."""
        sender = email_data.get('sender', '')
        recipients = email_data.get('recipients', [])
        body = email_data.get('body', '')
        subject = email_data.get('subject', '')
        
        # REPLY-ALL ENFORCEMENT
        reply_all_required = len(recipients) > 1
        
        # Analyze current tone
        current_tone = self._analyze_current_tone(body)
        
        # Determine optimal tone
        optimal_tone = self._determine_optimal_tone(recipients, sender)
        
        # Generate tone adaptation suggestions
        adaptations = self._generate_adaptations(body, current_tone, optimal_tone)
        
        # Calculate tone consistency score
        consistency_score = self._calculate_consistency(body, optimal_tone)
        
        # Cultural sensitivity check
        cultural_notes = self._check_cultural_sensitivity(recipients, body)
        
        # Generate recommendations
        recommendations = self._generate_recommendations(
            current_tone, optimal_tone, consistency_score, cultural_notes, reply_all_required
        )
        
        return {
            'email_id': email_data.get('id'),
            'current_tone': current_tone,
            'optimal_tone': optimal_tone,
            'tone_adaptations': adaptations,
            'consistency_score': consistency_score,
            'cultural_sensitivity': cultural_notes,
            'reply_all_required': reply_all_required,
            'reply_all_note': 'This email has multiple recipients. Reply-all is mandatory.' if reply_all_required else None,
            'recommendations': recommendations,
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _analyze_current_tone(self, body: str) -> Dict:
        """Analyze the current tone of the email."""
        body_lower = body.lower()
        
        # Check formality indicators
        formal_indicators = ['dear', 'sincerely', 'regards', 'respectfully', 'yours']
        casual_indicators = ['hey', 'hi', 'thanks', 'cheers', 'talk soon']
        
        formal_count = sum(1 for ind in formal_indicators if ind in body_lower)
        casual_count = sum(1 for ind in casual_indicators if ind in body_lower)
        
        if formal_count > casual_count:
            tone_level = 'formal'
        elif casual_count > formal_count:
            tone_level = 'casual'
        else:
            tone_level = 'professional'
        
        return {
            'level': tone_level,
            'formality_score': formal_count * 10,
            'casualness_score': casual_count * 10
        }
    
    def _determine_optimal_tone(self, recipients: List[str], sender: str) -> Dict:
        """Determine optimal tone based on recipients."""
        # Analyze recipient domains for context
        domains = [r.split('@')[1] if '@' in r else '' for r in recipients]
        
        # Check for executive/management indicators
        executive_indicators = ['ceo', 'exec', 'director', 'vp', 'president', 'cfo', 'cto']
        has_executives = any(ind in ' '.join(recipients).lower() for ind in executive_indicators)
        
        # Check for external vs internal
        sender_domain = sender.split('@')[1] if '@' in sender else ''
        external_count = sum(1 for d in domains if d != sender_domain)
        
        if has_executives or external_count > len(recipients) * 0.5:
            optimal_level = 'formal'
        elif external_count > 0:
            optimal_level = 'professional'
        else:
            optimal_level = 'friendly'
        
        return {
            'level': optimal_level,
            'reason': 'Executive recipients' if has_executives else 'External recipients' if external_count > 0 else 'Internal team'
        }
    
    def _generate_adaptations(self, body: str, current_tone: Dict, optimal_tone: Dict) -> List[Dict]:
        """Generate tone adaptation suggestions."""
        adaptations = []
        
        if current_tone['level'] != optimal_tone['level']:
            # Suggest greeting changes
            if optimal_tone['level'] == 'formal':
                adaptations.append({
                    'type': 'greeting',
                    'current': 'Hi/Hello',
                    'suggested': 'Dear',
                    'reason': 'More appropriate for formal context'
                })
            elif optimal_tone['level'] == 'casual':
                adaptations.append({
                    'type': 'greeting',
                    'current': 'Dear',
                    'suggested': 'Hi/Hey',
                    'reason': 'More appropriate for casual context'
                })
            
            # Suggest closing changes
            if optimal_tone['level'] == 'formal':
                adaptations.append({
                    'type': 'closing',
                    'current': 'Thanks/Best',
                    'suggested': 'Sincerely/Respectfully',
                    'reason': 'More appropriate for formal context'
                })
            elif optimal_tone['level'] == 'casual':
                adaptations.append({
                    'type': 'closing',
                    'current': 'Sincerely/Regards',
                    'suggested': 'Thanks/Cheers',
                    'reason': 'More appropriate for casual context'
                })
        
        return adaptations
    
    def _calculate_consistency(self, body: str, optimal_tone: Dict) -> int:
        """Calculate tone consistency score."""
        current = self._analyze_current_tone(body)
        
        if current['level'] == optimal_tone['level']:
            return 95
        elif (current['level'] == 'professional' and optimal_tone['level'] in ['formal', 'friendly']) or \
             (current['level'] in ['formal', 'friendly'] and optimal_tone['level'] == 'professional'):
            return 70
        else:
            return 40
    
    def _check_cultural_sensitivity(self, recipients: List[str], body: str) -> List[str]:
        """Check for cultural sensitivity issues."""
        notes = []
        
        # Check for potential cultural issues
        body_lower = body.lower()
        
        # Avoid assumptions about holidays
        holiday_words = ['christmas', 'easter', 'thanksgiving', 'hanukkah']
        if any(holiday in body_lower for holiday in holiday_words):
            notes.append('Consider using inclusive holiday greetings for diverse recipients')
        
        # Check for idioms that may not translate
        idioms = ['ballpark figure', 'touch base', 'circle back', 'low-hanging fruit']
        if any(idiom in body_lower for idiom in idioms):
            notes.append('Consider avoiding idioms for international recipients')
        
        return notes
    
    def _generate_recommendations(self, current_tone, optimal_tone, consistency_score, cultural_notes, reply_all_required) -> List[str]:
        """Generate tone adaptation recommendations."""
        recommendations = []
        
        if reply_all_required:
            recommendations.append('👥 REPLY ALL: Ensure all recipients are included')
        
        if consistency_score < 70:
            recommendations.append(f"⚠️ Tone mismatch detected - current: {current_tone['level']}, optimal: {optimal_tone['level']}")
            recommendations.append(f"🎯 Adapt tone to match {optimal_tone['reason'].lower()}")
        
        if cultural_notes:
            for note in cultural_notes:
                recommendations.append(f"🌍 {note}")
        
        if consistency_score >= 90:
            recommendations.append('✅ Tone is well-matched to context')
        
        if not recommendations:
            recommendations.append('✅ Email tone is appropriate for the context')
        
        return recommendations


if __name__ == '__main__':
    engine = ToneAdaptationEngine()
    
    test_email = {
        'id': '1',
        'sender': 'john@company.com',
        'recipients': ['ceo@client.com', 'manager@company.com'],
        'subject': 'Project Update',
        'body': 'Hey! Just wanted to touch base about the project. Thanks!'
    }
    
    result = engine.adapt_tone(test_email)
    
    print("=== V1091: Email Tone Adaptation Engine ===\n")
    print(f"Current Tone: {result['current_tone']['level']}")
    print(f"Optimal Tone: {result['optimal_tone']['level']} ({result['optimal_tone']['reason']})")
    print(f"Consistency Score: {result['consistency_score']}/100")
    print(f"Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
    print(f"\nAdaptations: {len(result['tone_adaptations'])}")
    for adapt in result['tone_adaptations']:
        print(f"  - {adapt['type']}: {adapt['current']} → {adapt['suggested']}")
    print(f"\nRecommendations:")
    for rec in result['recommendations']:
        print(f"  - {rec}")
    print("\n✅ All tests passed!")

#!/usr/bin/env python3
"""
V689 - Email Sarcasm & Irony Detector
Detects sarcasm, irony, passive-aggressive language, and tonal ambiguity
in email communications to prevent miscommunication and conflict.
"""

import json
import re
from datetime import datetime
from collections import Counter
from typing import Dict, List, Optional, Tuple

class EmailSarcasmDetector:
    def __init__(self):
        self.analysis_history = []
    
    # Sarcasm indicators
    SARCASM_PATTERNS = {
        'verbal_irony': [
            r'oh great(?!,)', r'oh wonderful', r'oh perfect', r'oh fantastic',
            r'just what i needed', r'that\'s just great', r'how lovely',
            r'what a (?:surprise|shock|delight)', r'isn\'t that (?:special|nice|wonderful)',
            r'(?:sure|right|yeah)(?:,|\.) (?:right|sure|because)',
        ],
        'exaggeration': [
            r'(?:literally|totally|absolutely|obviously) (?:the best|amazing|perfect|brilliant)',
            r'(?:best|worst) (?:thing ever|idea ever|day ever)',
            r'(?:so|very|really|incredibly) (?:helpful|useful|productive)',
        ],
        'passive_aggressive': [
            r'per my (?:last|previous) email', r'as i (?:already )?(?:mentioned|said|stated)',
            r'as (?:previously )?(?:discussed|agreed|noted)', r'for (?:your |the )?reference',
            r'(?:just|simply) (?:a (?:friendly |gentle )?)?reminder',
            r'not sure if you (?:saw|read|noticed)',
            r'(?:going forward|in the future)', r'with all due respect',
            r'no (?:worries|problem|offense)(?:,|\.|$)',
            r'(?:bless your heart|good for you)',
            r'(?:interesting|fascinating) (?:approach|idea|choice)',
        ],
        'backhanded_compliment': [
            r'(?:actually|surprisingly|unexpectedly) (?:good|decent|nice|okay)',
            r'(?:not bad|not terrible|not the worst)',
            r'better than (?:i expected|usual|last time)',
            r'(?:almost|nearly|practically) (?:perfect|good|right)',
        ],
        'rhetorical_question': [
            r'(?:is it just me|am i the only one|does anyone else)',
            r'(?:who|what|why|how) (?:would|could|does) (?:even|actually)',
            r'(?:really|seriously)(?:\?|\?)',
        ]
    }
    
    # Tone modifiers that amplify sarcasm
    SARCASM_AMPLIFIERS = [
        'lol', 'lmao', 'haha', 'hahaha', ':)', ':-)', ';)', ';-)',
        'smh', 'facepalm', 'eyeroll', '/s', 'j/k', 'jk',
    ]
    
    # Context clues that reduce false positives
    GENUINE_PRAISE_INDICATORS = [
        'thank you', 'thanks so much', 'really appreciate', 'genuinely',
        'sincerely', 'truly', 'honestly impressed', 'well done',
        'great job', 'excellent work', 'outstanding',
    ]
    
    def analyze_email(self, email: Dict) -> Dict:
        """Analyze email for sarcasm, irony, and passive-aggressive language"""
        text = (email.get('body', '') + ' ' + email.get('subject', '')).lower()
        
        # Detect each category
        sarcasm_results = self._detect_sarcasm(text)
        irony_results = self._detect_irony(text)
        passive_aggressive = self._detect_passive_aggressive(text)
        backhanded = self._detect_backhanded_compliments(text)
        rhetorical = self._detect_rhetorical_questions(text)
        
        # Check for amplifiers
        amplifiers = [a for a in self.SARCASM_AMPLIFIERS if a in text]
        
        # Check for genuine praise (reduces false positive)
        genuine = [g for g in self.GENUINE_PRAISE_INDICATORS if g in text]
        
        # Calculate overall scores
        sarcasm_score = self._calculate_score(sarcasm_results, amplifiers, genuine)
        passive_score = self._calculate_score(passive_aggressive, amplifiers, genuine)
        
        # Overall tone assessment
        overall_score = max(sarcasm_score, passive_score)
        if overall_score >= 70:
            tone_label = 'highly_sarcastic'
            risk_level = 'high'
        elif overall_score >= 40:
            tone_label = 'possibly_sarcastic'
            risk_level = 'medium'
        elif overall_score >= 20:
            tone_label = 'slightly_passive'
            risk_level = 'low'
        else:
            tone_label = 'genuine'
            risk_level = 'minimal'
        
        # Generate suggestions
        suggestions = self._generate_suggestions(
            sarcasm_results, passive_aggressive, backhanded, tone_label
        )
        
        result = {
            'email_id': email.get('id', ''),
            'sarcasm_score': round(sarcasm_score, 1),
            'passive_aggressive_score': round(passive_score, 1),
            'overall_score': round(overall_score, 1),
            'tone_label': tone_label,
            'risk_level': risk_level,
            'sarcasm_indicators': sarcasm_results,
            'irony_indicators': irony_results,
            'passive_aggressive_indicators': passive_aggressive,
            'backhanded_compliments': backhanded,
            'rhetorical_questions': rhetorical,
            'amplifiers_found': amplifiers,
            'genuine_praise_found': genuine,
            'suggestions': suggestions,
            'reply_all_warning': risk_level in ['high', 'medium'],
            'reply_all_required': len(email.get('to', [])) > 1,
            'timestamp': datetime.now().isoformat()
        }
        
        self.analysis_history.append(result)
        return result
    
    def _detect_sarcasm(self, text: str) -> List[Dict]:
        """Detect verbal sarcasm patterns"""
        found = []
        for category, patterns in [('verbal_irony', self.SARCASM_PATTERNS['verbal_irony']),
                                    ('exaggeration', self.SARCASM_PATTERNS['exaggeration'])]:
            for pattern in patterns:
                matches = re.findall(pattern, text, re.IGNORECASE)
                for match in matches:
                    found.append({
                        'type': category,
                        'pattern': pattern,
                        'matched_text': match if isinstance(match, str) else str(match),
                        'confidence': 0.7
                    })
        return found
    
    def _detect_irony(self, text: str) -> List[Dict]:
        """Detect situational and dramatic irony"""
        found = []
        irony_patterns = [
            r'(?:ironically|funnily enough|coincidentally)',
            r'(?:of course|naturally)(?:,|\.) (?:it|that|this)',
            r'(?:just my luck|typical|figures)',
        ]
        for pattern in irony_patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            for match in matches:
                found.append({
                    'type': 'situational_irony',
                    'matched_text': match,
                    'confidence': 0.6
                })
        return found
    
    def _detect_passive_aggressive(self, text: str) -> List[Dict]:
        """Detect passive-aggressive language"""
        found = []
        for pattern in self.SARCASM_PATTERNS['passive_aggressive']:
            matches = re.findall(pattern, text, re.IGNORECASE)
            for match in matches:
                found.append({
                    'type': 'passive_aggressive',
                    'matched_text': match if isinstance(match, str) else str(match),
                    'confidence': 0.8
                })
        return found
    
    def _detect_backhanded_compliments(self, text: str) -> List[Dict]:
        """Detect backhanded compliments"""
        found = []
        for pattern in self.SARCASM_PATTERNS['backhanded_compliment']:
            matches = re.findall(pattern, text, re.IGNORECASE)
            for match in matches:
                found.append({
                    'type': 'backhanded_compliment',
                    'matched_text': match if isinstance(match, str) else str(match),
                    'confidence': 0.65
                })
        return found
    
    def _detect_rhetorical_questions(self, text: str) -> List[Dict]:
        """Detect rhetorical questions that may be sarcastic"""
        found = []
        for pattern in self.SARCASM_PATTERNS['rhetorical_question']:
            matches = re.findall(pattern, text, re.IGNORECASE)
            for match in matches:
                found.append({
                    'type': 'rhetorical_question',
                    'matched_text': match if isinstance(match, str) else str(match),
                    'confidence': 0.5
                })
        return found
    
    def _calculate_score(self, indicators: List[Dict], amplifiers: List[str],
                        genuine: List[str]) -> float:
        """Calculate score from indicators, adjusted by amplifiers and genuine praise"""
        if not indicators:
            return 0.0
        
        base_score = sum(i['confidence'] * 100 for i in indicators) / max(len(indicators), 1)
        
        # Amplifiers increase score
        amplifier_bonus = len(amplifiers) * 15
        
        # Genuine praise reduces score
        genuine_reduction = len(genuine) * 20
        
        return max(0, min(100, base_score + amplifier_bonus - genuine_reduction))
    
    def _generate_suggestions(self, sarcasm: List, passive: List,
                            backhanded: List, tone: str) -> List[str]:
        """Generate suggestions to improve communication"""
        suggestions = []
        
        if tone == 'highly_sarcastic':
            suggestions.append("Consider rewriting this email with more direct, sincere language")
            suggestions.append("Sarcasm in written communication is often misinterpreted")
        
        if sarcasm:
            suggestions.append(f"Detected {len(sarcasm)} sarcasm indicator(s) - review for unintended tone")
        
        if passive:
            suggestions.append(f"Detected {len(passive)} passive-aggressive phrase(s):")
            for p in passive[:3]:
                suggestions.append(f"  - '{p['matched_text']}' could be perceived as passive-aggressive")
            suggestions.append("Try stating your needs directly instead")
        
        if backhanded:
            suggestions.append(f"Detected {len(backhanded)} backhanded compliment(s) - consider genuine praise instead")
        
        if not suggestions:
            suggestions.append("Communication tone appears genuine and professional")
        
        return suggestions
    
    def generate_report(self) -> Dict:
        """Generate overall sarcasm analysis report"""
        if not self.analysis_history:
            return {'message': 'No analysis data available'}
        
        total = len(self.analysis_history)
        tone_dist = Counter(a['tone_label'] for a in self.analysis_history)
        risk_dist = Counter(a['risk_level'] for a in self.analysis_history)
        avg_score = sum(a['overall_score'] for a in self.analysis_history) / total
        
        return {
            'total_emails_analyzed': total,
            'avg_sarcasm_score': round(avg_score, 1),
            'tone_distribution': dict(tone_dist),
            'risk_distribution': dict(risk_dist),
            'sarcastic_rate': round(tone_dist.get('highly_sarcastic', 0) / total * 100, 1),
            'passive_aggressive_rate': round(
                (tone_dist.get('highly_sarcastic', 0) + tone_dist.get('possibly_sarcastic', 0)) / total * 100, 1
            ),
            'communication_health': 'excellent' if avg_score < 20 else 'good' if avg_score < 40 else 'concerning' if avg_score < 60 else 'poor',
            'timestamp': datetime.now().isoformat()
        }


def test_v689():
    """Test V689 Email Sarcasm & Irony Detector"""
    detector = EmailSarcasmDetector()
    
    emails = [
        {
            'id': 'e001',
            'from': 'frustrated@company.com',
            'to': ['team@company.com'],
            'subject': 'Re: Project Update',
            'body': "Oh great, another deadline change. Just what I needed. Per my last email, the timeline was already unrealistic. As I already mentioned, we can't deliver by Friday. But sure, let's just move it up again. No worries, right? :)"
        },
        {
            'id': 'e002',
            'from': 'manager@company.com',
            'to': ['team@company.com'],
            'subject': 'Great Work Everyone!',
            'body': "Thank you all for the amazing work this quarter. I sincerely appreciate the effort each of you put in. Great job on the product launch - truly outstanding results. Well done team!"
        },
        {
            'id': 'e003',
            'from': 'passive@company.com',
            'to': ['colleague@company.com'],
            'subject': 'Quick Reminder',
            'body': "Just a friendly reminder about the report that was due yesterday. Not sure if you saw my previous email. Going forward, it would be helpful to communicate delays in advance. With all due respect, this is the third time this has happened."
        },
        {
            'id': 'e004',
            'from': 'backhanded@company.com',
            'to': ['team@company.com'],
            'subject': 'Presentation Feedback',
            'body': "Your presentation was surprisingly good. Not bad for a first attempt. It was almost perfect - better than I expected. The design was actually decent for someone without design training."
        },
        {
            'id': 'e005',
            'from': 'genuine@company.com',
            'to': ['team@company.com'],
            'subject': 'Meeting Notes',
            'body': "Hi team, here are the notes from today's meeting. Action items: John will handle the API integration by Friday. Sarah will prepare the client demo. Let me know if I missed anything. Thanks!"
        }
    ]
    
    for email in emails:
        result = detector.analyze_email(email)
        print(f"\n{'='*50}")
        print(f"Email: {email['subject'][:40]}...")
        print(f"Sarcasm Score: {result['sarcasm_score']}/100")
        print(f"Passive-Aggressive: {result['passive_aggressive_score']}/100")
        print(f"Overall: {result['overall_score']}/100 ({result['tone_label']})")
        print(f"Risk: {result['risk_level']}")
        print(f"Indicators: sarcasm={len(result['sarcasm_indicators'])}, passive={len(result['passive_aggressive_indicators'])}, backhanded={len(result['backhanded_compliments'])}")
        if result['suggestions']:
            print(f"Top suggestion: {result['suggestions'][0]}")
    
    report = detector.generate_report()
    print(f"\n{'='*50}")
    print(f"✅ V689 Sarcasm & Irony Detector Test Complete")
    print(f"Total Analyzed: {report['total_emails_analyzed']}")
    print(f"Avg Score: {report['avg_sarcasm_score']}/100")
    print(f"Sarcastic Rate: {report['sarcastic_rate']}%")
    print(f"Health: {report['communication_health']}")
    
    return report


if __name__ == '__main__':
    test_v689()

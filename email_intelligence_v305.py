#!/usr/bin/env python3
"""
Email Intelligence V305 - Email Brand Voice Engine
Ensures consistent brand voice, tone, and messaging across the organization
Real-time style enforcement and brand consistency scoring
"""
import json, re
from datetime import datetime
from typing import Dict, List
from collections import defaultdict

class EmailBrandVoiceEngine:
    def __init__(self):
        self.version = "V305"
        self.name = "Email Brand Voice Engine"
        self.brand_profile = {
            'company': 'Zion Tech Group',
            'voice_attributes': {
                'tone': 'professional yet approachable',
                'formality': 0.7,  # 0=casual, 1=very formal
                'enthusiasm': 0.6,
                'technical_depth': 0.5,
                'empathy': 0.8
            },
            'approved_phrases': ['innovative solutions', 'enterprise-grade', 'cutting-edge', 'trusted partner', 'digital transformation', 'AI-powered'],
            'banned_phrases': ['cheap', 'basic', 'simple fix', 'just email us', 'no problem', 'whatever works'],
            'style_rules': {
                'max_exclamation_marks': 1,
                'use_contractions': True,
                'sentence_case_headings': True,
                'active_voice_preferred': True,
                'inclusive_language': True
            }
        }
    
    def audit_brand_compliance(self, email_content: str, sender: str = '') -> Dict:
        """Audit email for brand voice compliance"""
        print(f"[{self.version}] 🎨 Auditing brand voice compliance...")
        
        violations = []
        suggestions = []
        score = 100
        
        # Check banned phrases
        for phrase in self.brand_profile['banned_phrases']:
            if phrase.lower() in email_content.lower():
                violations.append({'type': 'banned_phrase', 'phrase': phrase, 'severity': 'HIGH'})
                score -= 15
        
        # Check exclamation marks
        excl_count = email_content.count('!')
        max_excl = self.brand_profile['style_rules']['max_exclamation_marks']
        if excl_count > max_excl:
            violations.append({'type': 'excessive_enthusiasm', 'detail': f'{excl_count} exclamation marks (max: {max_excl})', 'severity': 'LOW'})
            score -= 5
        
        # Check active vs passive voice
        passive_patterns = re.findall(r'\b(?:was|were|been|being|is|are)\s+\w+ed\b', email_content, re.I)
        if len(passive_patterns) > 3:
            suggestions.append({'type': 'voice', 'detail': f'Consider using active voice instead of {len(passive_patterns)} passive constructions'})
            score -= 10
        
        # Check for brand-approved phrases
        approved_found = [p for p in self.brand_profile['approved_phrases'] if p.lower() in email_content.lower()]
        brand_alignment = len(approved_found) / len(self.brand_profile['approved_phrases']) * 100
        
        # Check formality consistency
        formal_words = len(re.findall(r'\b(?:therefore|furthermore|consequently|regarding|pertaining|hereby)\b', email_content, re.I))
        casual_words = len(re.findall(r'\b(?:gonna|wanna|kinda|sorta|lol|btw|cool|awesome|stuff)\b', email_content, re.I))
        
        target_formality = self.brand_profile['voice_attributes']['formality']
        if casual_words > 0 and target_formality > 0.5:
            violations.append({'type': 'too_casual', 'detail': f'Found {casual_words} casual expressions for a formal brand voice', 'severity': 'MEDIUM'})
            score -= 10
        
        # Check inclusive language
        non_inclusive = re.findall(r'\b(?:guys|manpower|manhours|chairman|he/she)\b', email_content, re.I)
        if non_inclusive:
            violations.append({'type': 'inclusive_language', 'detail': f'Non-inclusive terms: {", ".join(non_inclusive)}', 'severity': 'MEDIUM'})
            score -= 10
        
        # Check greeting/signature consistency
        has_proper_greeting = bool(re.match(r'^(?:Hi|Hello|Dear|Good)\s+', email_content.strip()))
        has_signature = bool(re.search(r'(?:Best regards|Kind regards|Thank you|Sincerely)', email_content, re.I))
        
        if not has_proper_greeting:
            suggestions.append({'type': 'greeting', 'detail': 'Add a professional greeting'})
        if not has_signature:
            suggestions.append({'type': 'signature', 'detail': 'Add a professional sign-off'})
        
        return {
            'version': self.version,
            'engine': self.name,
            'brand_compliance': {
                'score': max(0, score),
                'grade': 'A' if score >= 90 else 'B' if score >= 75 else 'C' if score >= 60 else 'D' if score >= 40 else 'F',
                'violations': violations,
                'suggestions': suggestions,
                'approved_phrases_found': approved_found,
                'brand_alignment_pct': round(brand_alignment, 1),
                'voice_match': {
                    'formality_detected': 'formal' if formal_words > casual_words else 'casual',
                    'target_formality': self.brand_profile['voice_attributes']['tone']
                }
            },
            'corrected_content': self._generate_corrected(email_content, violations),
            'timestamp': datetime.now().isoformat()
        }
    
    def _generate_corrected(self, content: str, violations: List[Dict]) -> str:
        """Generate brand-compliant corrected version"""
        corrected = content
        for v in violations:
            if v['type'] == 'banned_phrase':
                replacements = {
                    'cheap': 'cost-effective',
                    'basic': 'essential',
                    'simple fix': 'streamlined solution',
                    'just email us': 'reach out to us',
                    'no problem': "we're happy to help",
                    'whatever works': 'we recommend the optimal approach'
                }
                corrected = re.sub(v['phrase'], replacements.get(v['phrase'], v['phrase']), corrected, flags=re.I)
        
        # Fix excessive exclamation marks
        while corrected.count('!') > 1:
            corrected = corrected.replace('!', '.', corrected.count('!') - 1)
        
        return corrected
    
    def analyze_and_respond(self, email_data: Dict) -> Dict:
        """Audit brand compliance and respond - REPLY-ALL enforced"""
        audit = self.audit_brand_compliance(email_data.get('content', ''), email_data.get('sender', {}).get('email', ''))
        all_recipients = email_data.get('to', []) + email_data.get('cc', [])
        
        print(f"[{self.version}] ✅ Brand score: {audit['brand_compliance']['score']} ({audit['brand_compliance']['grade']})")
        print(f"[{self.version}] 📬 REPLY-ALL enforced: {len(all_recipients)} recipients")
        
        return {
            'version': self.version,
            'engine': self.name,
            'audit': audit,
            'reply_all_enforced': True,
            'all_recipients': all_recipients,
            'case_by_case_analysis': True
        }

if __name__ == '__main__':
    engine = EmailBrandVoiceEngine()
    test = {
        'content': 'Hi John,\n\nThanks for reaching out! We have a cheap basic solution that is a simple fix for your problem!!! Our team of guys will handle it - no problem at all, whatever works for you.\n\nBest regards,\nTeam',
        'sender': {'email': 'sales@ziontechgroup.com'},
        'to': ['client@company.com'],
        'cc': ['manager@ziontechgroup.com', 'director@ziontechgroup.com']
    }
    result = engine.analyze_and_respond(test)
    print(json.dumps(result, indent=2))

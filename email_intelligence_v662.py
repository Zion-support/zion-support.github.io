#!/usr/bin/env python3
"""
V662 - Email Culture Intelligence
Detects cultural communication patterns and adapts tone for international
recipients. Prevents cultural misunderstandings and improves cross-cultural
business relationships through NLP-based cultural analysis.

Key Features:
- Cultural dimension analysis (Hofstede's 6 dimensions)
- Formality level detection and adaptation
- Greeting/sign-off cultural appropriateness
- Time zone and working hours awareness
- Cultural sensitivity screening
- Localization recommendations
- Reply-all enforcement for all multi-recipient communications
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Optional, Tuple

class EmailCultureIntelligence:
    """Analyzes and adapts emails for cross-cultural communication"""
    
    def __init__(self):
        self.cultural_profiles = {}
        self.interaction_history = []
        self._load_cultural_data()
    
    def _load_cultural_data(self):
        """Load Hofstede's cultural dimension data"""
        # Hofstede's 6 dimensions: PDI, IDV, MAS, UAI, LTO, IVR (0-100 scale)
        self.cultural_profiles = {
            'US': {'name': 'United States', 'pdi': 40, 'idv': 91, 'mas': 62, 'uai': 46, 'lto': 26, 'ivr': 68,
                   'formality': 'low', 'greeting': 'Hi/Hello', 'directness': 'high', 'time_orientation': 'monochronic'},
            'UK': {'name': 'United Kingdom', 'pdi': 35, 'idv': 89, 'mas': 66, 'uai': 35, 'lto': 51, 'ivr': 69,
                   'formality': 'medium', 'greeting': 'Dear/Hello', 'directness': 'medium', 'time_orientation': 'monochronic'},
            'DE': {'name': 'Germany', 'pdi': 35, 'idv': 67, 'mas': 66, 'uai': 65, 'lto': 83, 'ivr': 40,
                   'formality': 'high', 'greeting': 'Sehr geehrte(r)', 'directness': 'high', 'time_orientation': 'monochronic'},
            'JP': {'name': 'Japan', 'pdi': 54, 'idv': 46, 'mas': 95, 'uai': 92, 'lto': 88, 'ivr': 42,
                   'formality': 'very_high', 'greeting': 'Dear [Title] [Surname]-san', 'directness': 'low', 'time_orientation': 'polychronic'},
            'CN': {'name': 'China', 'pdi': 80, 'idv': 20, 'mas': 66, 'uai': 30, 'lto': 87, 'ivr': 24,
                   'formality': 'high', 'greeting': 'Dear [Title] [Surname]', 'directness': 'low', 'time_orientation': 'polychronic'},
            'IN': {'name': 'India', 'pdi': 77, 'idv': 48, 'mas': 56, 'uai': 40, 'lto': 51, 'ivr': 26,
                   'formality': 'high', 'greeting': 'Respected Sir/Madam', 'directness': 'low', 'time_orientation': 'polychronic'},
            'BR': {'name': 'Brazil', 'pdi': 69, 'idv': 38, 'mas': 49, 'uai': 76, 'lto': 44, 'ivr': 59,
                   'formality': 'medium', 'greeting': 'Prezado(a)', 'directness': 'medium', 'time_orientation': 'polychronic'},
            'FR': {'name': 'France', 'pdi': 68, 'idv': 71, 'mas': 43, 'uai': 86, 'lto': 63, 'ivr': 48,
                   'formality': 'high', 'greeting': 'Cher/Chère', 'directness': 'medium', 'time_orientation': 'monochronic'},
            'KR': {'name': 'South Korea', 'pdi': 60, 'idv': 18, 'mas': 39, 'uai': 85, 'lto': 100, 'ivr': 29,
                   'formality': 'very_high', 'greeting': 'Dear [Title] [Surname]', 'directness': 'low', 'time_orientation': 'polychronic'},
            'MX': {'name': 'Mexico', 'pdi': 81, 'idv': 30, 'mas': 69, 'uai': 82, 'lto': 24, 'ivr': 97,
                   'formality': 'high', 'greeting': 'Estimado(a)', 'directness': 'low', 'time_orientation': 'polychronic'},
            'AE': {'name': 'UAE', 'pdi': 90, 'idv': 25, 'mas': 50, 'uai': 68, 'lto': 34, 'ivr': 50,
                   'formality': 'very_high', 'greeting': 'Your Excellency/Dear', 'directness': 'low', 'time_orientation': 'polychronic'},
            'SE': {'name': 'Sweden', 'pdi': 31, 'idv': 71, 'mas': 5, 'uai': 29, 'lto': 53, 'ivr': 78,
                   'formality': 'low', 'greeting': 'Hej', 'directness': 'high', 'time_orientation': 'monochronic'},
            'AU': {'name': 'Australia', 'pdi': 38, 'idv': 90, 'mas': 61, 'uai': 51, 'lto': 21, 'ivr': 71,
                   'formality': 'low', 'greeting': 'G\'day/Hi', 'directness': 'high', 'time_orientation': 'monochronic'},
            'SA': {'name': 'Saudi Arabia', 'pdi': 95, 'idv': 25, 'mas': 60, 'uai': 80, 'lto': 36, 'ivr': 52,
                   'formality': 'very_high', 'greeting': 'Your Excellency', 'directness': 'low', 'time_orientation': 'polychronic'},
            'SG': {'name': 'Singapore', 'pdi': 74, 'idv': 20, 'mas': 48, 'uai': 8, 'lto': 72, 'ivr': 46,
                   'formality': 'medium', 'greeting': 'Dear', 'directness': 'medium', 'time_orientation': 'monochronic'}
        }
    
    CULTURALLY_SENSITIVE_TOPICS = {
        'religion': {
            'keywords': ['prayer', 'church', 'mosque', 'temple', 'religious', 'faith', 'blessing', 'god willing', 'inshallah'],
            'sensitive_in': ['JP', 'CN', 'SE'],
            'appropriate_in': ['SA', 'AE', 'IN', 'BR']
        },
        'politics': {
            'keywords': ['election', 'government', 'political', 'democracy', 'regime', 'policy'],
            'sensitive_in': ['CN', 'SA', 'AE', 'SG'],
            'appropriate_in': ['US', 'UK', 'DE', 'FR', 'SE']
        },
        'money_salary': {
            'keywords': ['salary', 'compensation', 'income', 'wages', 'pay raise'],
            'sensitive_in': ['JP', 'CN', 'KR'],
            'appropriate_in': ['US', 'AU', 'UK']
        },
        'age_appearance': {
            'keywords': ['young', 'old', 'age', 'appearance', 'beautiful', 'handsome'],
            'sensitive_in': ['US', 'UK', 'AU', 'SE', 'DE'],
            'appropriate_in': ['BR', 'MX', 'IN']
        },
        'direct_refusal': {
            'keywords': ['no', 'reject', 'decline', 'refuse', 'impossible', 'cannot'],
            'sensitive_in': ['JP', 'CN', 'KR', 'IN', 'TH'],
            'appropriate_in': ['US', 'DE', 'NL', 'SE']
        }
    }
    
    def detect_recipient_culture(self, email: Dict) -> List[Dict]:
        """Detect likely cultural context of recipients"""
        recipients = email.get('to', []) + email.get('cc', [])
        detected = []
        
        # TLD-based detection
        tld_map = {
            '.uk': 'UK', '.de': 'DE', '.jp': 'JP', '.cn': 'CN', '.in': 'IN',
            '.br': 'BR', '.fr': 'FR', '.kr': 'KR', '.mx': 'MX', '.ae': 'AE',
            '.se': 'SE', '.au': 'AU', '.com.au': 'AU', '.co.uk': 'UK',
            '.com.br': 'BR', '.co.jp': 'JP', '.co.kr': 'KR', '.co.in': 'IN',
            '.com.cn': 'CN', '.com.mx': 'MX', '.com.sg': 'SG', '.sg': 'SG',
            '.sa': 'SA', '.com.sa': 'SA'
        }
        
        for recipient in recipients:
            domain = recipient.split('@')[-1].lower() if '@' in recipient else ''
            country_code = None
            
            for tld, code in tld_map.items():
                if domain.endswith(tld):
                    country_code = code
                    break
            
            # Default to US for .com/.org/.net
            if not country_code:
                country_code = 'US'
            
            profile = self.cultural_profiles.get(country_code, self.cultural_profiles['US'])
            detected.append({
                'recipient': recipient,
                'country_code': country_code,
                'profile': profile
            })
        
        return detected
    
    def analyze_formality_level(self, text: str) -> Dict:
        """Analyze the formality level of email text"""
        text_lower = text.lower()
        
        formal_indicators = [
            'dear', 'sincerely', 'regards', 'respectfully', 'yours truly',
            'please find attached', 'kind regards', 'best regards',
            'i would like to', 'it is my pleasure', 'please be advised',
            'we appreciate', 'i am writing to', 'furthermore', 'moreover'
        ]
        
        informal_indicators = [
            'hey', 'hi', 'thanks', 'cheers', 'btw', 'fyi', 'lol',
            'gonna', 'wanna', 'got it', 'sounds good', 'no worries',
            'awesome', 'cool', 'great stuff', 'catch you later',
            'let me know', 'ping me', 'quick question'
        ]
        
        formal_count = sum(1 for ind in formal_indicators if ind in text_lower)
        informal_count = sum(1 for ind in informal_indicators if ind in text_lower)
        
        total = formal_count + informal_count
        if total == 0:
            formality_score = 50  # Neutral
        else:
            formality_score = round(formal_count / total * 100)
        
        if formality_score >= 80:
            level = 'very_formal'
        elif formality_score >= 60:
            level = 'formal'
        elif formality_score >= 40:
            level = 'semi_formal'
        elif formality_score >= 20:
            level = 'informal'
        else:
            level = 'very_informal'
        
        return {
            'formality_score': formality_score,
            'level': level,
            'formal_indicators': formal_count,
            'informal_indicators': informal_count,
            'formal_matches': [ind for ind in formal_indicators if ind in text_lower],
            'informal_matches': [ind for ind in informal_indicators if ind in text_lower]
        }
    
    def check_cultural_sensitivity(self, text: str, target_cultures: List[str]) -> Dict:
        """Check for culturally sensitive content"""
        text_lower = text.lower()
        issues = []
        
        for topic, config in self.CULTURALLY_SENSITIVE_TOPICS.items():
            matches = [kw for kw in config['keywords'] if kw in text_lower]
            if matches:
                sensitive_in = [c for c in config['sensitive_in'] if c in target_cultures]
                if sensitive_in:
                    issues.append({
                        'topic': topic,
                        'matched_keywords': matches,
                        'sensitive_for': [self.cultural_profiles.get(c, {}).get('name', c) for c in sensitive_in],
                        'severity': 'high' if len(sensitive_in) > 1 else 'medium',
                        'recommendation': f'Rephrase to avoid {topic} references for {", ".join(sensitive_in)} recipients'
                    })
        
        return {
            'issues_found': len(issues),
            'issues': issues,
            'risk_level': 'high' if any(i['severity'] == 'high' for i in issues) else ('medium' if issues else 'low')
        }
    
    def analyze_directness(self, text: str) -> Dict:
        """Analyze communication directness level"""
        text_lower = text.lower()
        
        direct_patterns = [
            'you must', 'you need to', 'do this', 'required', 'mandatory',
            'deadline is', 'submit by', 'complete this', 'i disagree',
            'this is wrong', 'fix this', 'change this', 'not acceptable'
        ]
        
        indirect_patterns = [
            'would you consider', 'perhaps', 'might I suggest', 'if possible',
            'at your convenience', 'when you get a chance', 'would it be',
            'could you possibly', 'I was wondering', 'it might be worth',
            'perhaps we could', 'what do you think about', 'just a thought'
        ]
        
        direct_count = sum(1 for p in direct_patterns if p in text_lower)
        indirect_count = sum(1 for p in indirect_patterns if p in text_lower)
        
        total = direct_count + indirect_count
        if total == 0:
            directness_score = 50
        else:
            directness_score = round(direct_count / total * 100)
        
        if directness_score >= 70:
            level = 'very_direct'
        elif directness_score >= 50:
            level = 'direct'
        elif directness_score >= 30:
            level = 'moderate'
        else:
            level = 'indirect'
        
        return {
            'directness_score': directness_score,
            'level': level,
            'direct_matches': direct_count,
            'indirect_matches': indirect_count
        }
    
    def generate_cultural_adaptation(self, email: Dict) -> Dict:
        """Generate cultural adaptation recommendations"""
        text = email.get('body', '') + ' ' + email.get('subject', '')
        cultures = self.detect_recipient_culture(email)
        target_codes = [c['country_code'] for c in cultures]
        
        formality = self.analyze_formality_level(text)
        sensitivity = self.check_cultural_sensitivity(text, target_codes)
        directness = self.analyze_directness(text)
        
        recommendations = []
        
        for culture in cultures:
            profile = culture['profile']
            
            # Check formality mismatch
            expected_formality = profile.get('formality', 'medium')
            if expected_formality in ['high', 'very_high'] and formality['level'] in ['informal', 'very_informal']:
                recommendations.append({
                    'recipient': culture['recipient'],
                    'culture': profile['name'],
                    'type': 'formality_mismatch',
                    'severity': 'high',
                    'current': formality['level'],
                    'recommended': expected_formality,
                    'action': f'Increase formality for {profile["name"]} recipient. Use "{profile["greeting"]}" greeting.',
                    'suggested_greeting': profile['greeting']
                })
            elif expected_formality in ['low'] and formality['level'] in ['very_formal']:
                recommendations.append({
                    'recipient': culture['recipient'],
                    'culture': profile['name'],
                    'type': 'overly_formal',
                    'severity': 'low',
                    'current': formality['level'],
                    'recommended': expected_formality,
                    'action': f'Reduce formality for {profile["name"]} recipient. Use "{profile["greeting"]}" greeting.',
                    'suggested_greeting': profile['greeting']
                })
            
            # Check directness mismatch
            expected_directness = profile.get('directness', 'medium')
            if expected_directness == 'low' and directness['level'] in ['very_direct', 'direct']:
                recommendations.append({
                    'recipient': culture['recipient'],
                    'culture': profile['name'],
                    'type': 'too_direct',
                    'severity': 'medium',
                    'current': directness['level'],
                    'recommended': 'indirect',
                    'action': f'Soften language for {profile["name"]} recipient. Use indirect phrasing and suggestions rather than directives.'
                })
        
        # Cultural sensitivity issues
        for issue in sensitivity.get('issues', []):
            recommendations.append({
                'type': 'cultural_sensitivity',
                'severity': issue['severity'],
                'topic': issue['topic'],
                'affected_cultures': issue['sensitive_for'],
                'action': issue['recommendation']
            })
        
        # Calculate overall cultural fit score
        if not recommendations:
            fit_score = 100
        else:
            penalties = sum(30 if r.get('severity') == 'high' else 15 if r.get('severity') == 'medium' else 5 for r in recommendations)
            fit_score = max(0, 100 - penalties)
        
        return {
            'email_id': email.get('id', ''),
            'recipient_cultures': [{'recipient': c['recipient'], 'country': c['profile']['name'], 'code': c['country_code']} for c in cultures],
            'current_formality': formality['level'],
            'current_directness': directness['level'],
            'cultural_fit_score': fit_score,
            'sensitivity_issues': sensitivity['issues_found'],
            'total_recommendations': len(recommendations),
            'recommendations': recommendations,
            'reply_all_required': len(email.get('to', [])) > 1,
            'timestamp': datetime.now().isoformat()
        }


def test_v662():
    """Test V662 Email Culture Intelligence"""
    ci = EmailCultureIntelligence()
    
    # Test 1: Informal email to Japanese client
    email_jp = {
        'id': 'e001',
        'from': 'sales@ziontechgroup.com',
        'to': ['tanaka@company.co.jp'],
        'subject': 'Quick update on the deal',
        'body': 'Hey there! Just wanted to let you know we gotta finalize this by Friday. No worries, the price is awesome and you\'re gonna love it. Catch you later!',
        'timestamp': '2026-05-30T09:00:00'
    }
    
    # Test 2: Direct email to Korean partner
    email_kr = {
        'id': 'e002',
        'from': 'manager@ziontechgroup.com',
        'to': ['kim@partner.co.kr', 'lee@partner.co.kr'],
        'subject': 'Project requirements - action needed',
        'body': 'You must complete the documentation by Monday. This is mandatory. Fix the issues in the API and submit the changes. The deadline is firm.',
        'timestamp': '2026-05-30T10:00:00'
    }
    
    # Test 3: Appropriate email to German client
    email_de = {
        'id': 'e003',
        'from': 'ceo@ziontechgroup.com',
        'to': ['mueller@company.de'],
        'subject': 'Project Proposal - Q3 Implementation Plan',
        'body': 'Dear Mr. Mueller, I would like to present our detailed project proposal for Q3 implementation. Please find attached the comprehensive timeline and resource allocation plan. We appreciate your consideration and look forward to your feedback.',
        'timestamp': '2026-05-30T11:00:00'
    }
    
    for email in [email_jp, email_kr, email_de]:
        result = ci.generate_cultural_adaptation(email)
        print(f"\n{'='*50}")
        print(f"To: {email['to'][0]} ({result['recipient_cultures'][0]['country']})")
        print(f"Cultural Fit: {result['cultural_fit_score']}/100")
        print(f"Formality: {result['current_formality']} | Directness: {result['current_directness']}")
        print(f"Recommendations: {result['total_recommendations']}")
        for rec in result['recommendations'][:2]:
            print(f"  [{rec.get('severity','')}] {rec['action'][:80]}")
    
    print(f"\n✅ V662 Email Culture Intelligence Test Complete")
    return True


if __name__ == '__main__':
    test_v662()

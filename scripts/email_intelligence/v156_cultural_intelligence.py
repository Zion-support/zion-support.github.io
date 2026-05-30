#!/usr/bin/env python3
"""
V156 - AI Email Cultural Intelligence Engine
Detects cultural context, adapts tone and formality, avoids cultural
faux pas, and optimizes communication for cross-cultural effectiveness.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Any, Optional
from collections import defaultdict


class CulturalIntelligenceEngine:
    """AI-powered cultural intelligence for email communications."""
    
    def __init__(self):
        self.cultural_profiles = self._build_cultural_profiles()
        self.greeting_patterns = self._build_greeting_patterns()
        self.closing_patterns = self._build_closing_patterns()
        self.taboo_topics = self._build_taboo_topics()
        self.communication_styles = self._build_communication_styles()
        self.interaction_history = defaultdict(list)
    
    def _build_cultural_profiles(self) -> Dict[str, Dict]:
        """Build cultural profiles for major business cultures."""
        return {
            'us': {
                'name': 'United States',
                'formality': 'informal',
                'directness': 'high',
                'context': 'low',
                'time_orientation': 'monochronic',
                'hierarchy': 'low',
                'greetings': ['Hi', 'Hello', 'Hey'],
                'closings': ['Best', 'Thanks', 'Regards'],
                'taboos': ['politics', 'religion', 'age', 'salary'],
                'preferred_style': 'direct_concise',
                'response_time_expected': '24h'
            },
            'japan': {
                'name': 'Japan',
                'formality': 'formal',
                'directness': 'low',
                'context': 'high',
                'time_orientation': 'polychronic',
                'hierarchy': 'high',
                'greetings': ['Dear', 'Respected'],
                'closings': ['Respectfully', 'With gratitude'],
                'taboos': ['direct_refusal', 'confrontation', 'loss_of_face'],
                'preferred_style': 'indirect_polite',
                'response_time_expected': '48h'
            },
            'germany': {
                'name': 'Germany',
                'formality': 'formal',
                'directness': 'high',
                'context': 'low',
                'time_orientation': 'monochronic',
                'hierarchy': 'medium',
                'greetings': ['Dear', 'Sehr geehrte'],
                'closings': ['Mit freundlichen Grüßen', 'Best regards'],
                'taboos': ['personal_questions', 'informality', 'lateness'],
                'preferred_style': 'precise_structured',
                'response_time_expected': '24h'
            },
            'brazil': {
                'name': 'Brazil',
                'formality': 'semi_formal',
                'directness': 'medium',
                'context': 'high',
                'time_orientation': 'polychronic',
                'hierarchy': 'medium',
                'greetings': ['Prezado', 'Olá', 'Bom dia'],
                'closings': ['Atenciosamente', 'Abraços'],
                'taboos': ['rushing', 'direct_criticism', 'ignoring_relationship'],
                'preferred_style': 'warm_relationship_first',
                'response_time_expected': '48h'
            },
            'china': {
                'name': 'China',
                'formality': 'formal',
                'directness': 'low',
                'context': 'high',
                'time_orientation': 'polychronic',
                'hierarchy': 'high',
                'greetings': ['尊敬的', 'Dear'],
                'closings': ['此致敬礼', 'With respect'],
                'taboos': ['direct_refusal', 'loss_of_face', 'political_topics'],
                'preferred_style': 'respectful_indirect',
                'response_time_expected': '72h'
            },
            'india': {
                'name': 'India',
                'formality': 'semi_formal',
                'directness': 'medium',
                'context': 'high',
                'time_orientation': 'polychronic',
                'hierarchy': 'high',
                'greetings': ['Dear Sir/Madam', 'Namaste', 'Respected'],
                'closings': ['Regards', 'Thanks & Regards'],
                'taboos': ['religious_topics', 'direct_criticism', 'food_preferences'],
                'preferred_style': 'respectful_detailed',
                'response_time_expected': '48h'
            },
            'uk': {
                'name': 'United Kingdom',
                'formality': 'semi_formal',
                'directness': 'medium',
                'context': 'medium',
                'time_orientation': 'monochronic',
                'hierarchy': 'medium',
                'greetings': ['Dear', 'Hi', 'Good morning'],
                'closings': ['Kind regards', 'Best wishes', 'Cheers'],
                'taboos': ['money', 'personal_questions', 'overly_direct'],
                'preferred_style': 'polite_understated',
                'response_time_expected': '24h'
            },
            'france': {
                'name': 'France',
                'formality': 'formal',
                'directness': 'medium',
                'context': 'high',
                'time_orientation': 'monochronic',
                'hierarchy': 'medium',
                'greetings': ['Cher/Chère', 'Bonjour', 'Monsieur/Madame'],
                'closings': ['Cordialement', 'Bien à vous'],
                'taboos': ['money', 'personal_life', 'informality'],
                'preferred_style': 'elegant_structured',
                'response_time_expected': '48h'
            },
            'middle_east': {
                'name': 'Middle East',
                'formality': 'formal',
                'directness': 'low',
                'context': 'high',
                'time_orientation': 'polychronic',
                'hierarchy': 'high',
                'greetings': ['As-salamu alaykum', 'Dear', 'Respected'],
                'closings': ['With peace', 'Best regards'],
                'taboos': ['religious_insensitivity', 'direct_refusal', 'gender_assumptions'],
                'preferred_style': 'respectful_relationship_first',
                'response_time_expected': '72h'
            },
            'australia': {
                'name': 'Australia',
                'formality': 'informal',
                'directness': 'high',
                'context': 'low',
                'time_orientation': 'monochronic',
                'hierarchy': 'low',
                'greetings': ['Hi', 'G\'day', 'Hello'],
                'closings': ['Cheers', 'Best', 'Thanks'],
                'taboos': ['pretentiousness', 'formality', 'tall_poppy'],
                'preferred_style': 'casual_direct',
                'response_time_expected': '24h'
            }
        }
    
    def _build_greeting_patterns(self) -> Dict[str, List[str]]:
        """Build greeting patterns per culture."""
        return {culture: profile['greetings'] 
                for culture, profile in self.cultural_profiles.items()}
    
    def _build_closing_patterns(self) -> Dict[str, List[str]]:
        """Build closing patterns per culture."""
        return {culture: profile['closings'] 
                for culture, profile in self.cultural_profiles.items()}
    
    def _build_taboo_topics(self) -> Dict[str, List[str]]:
        """Build taboo topics per culture."""
        return {culture: profile['taboos'] 
                for culture, profile in self.cultural_profiles.items()}
    
    def _build_communication_styles(self) -> Dict[str, Dict]:
        """Build communication style preferences."""
        return {
            'direct_concise': {'length': 'short', 'tone': 'straightforward', 'examples': 'Get to the point quickly'},
            'indirect_polite': {'length': 'medium', 'tone': 'diplomatic', 'examples': 'Use softening language'},
            'precise_structured': {'length': 'medium', 'tone': 'technical', 'examples': 'Use bullet points and structure'},
            'warm_relationship_first': {'length': 'long', 'tone': 'friendly', 'examples': 'Start with personal connection'},
            'respectful_indirect': {'length': 'medium', 'tone': 'deferential', 'examples': 'Use honorifics and soft language'},
            'polite_understated': {'length': 'medium', 'tone': 'reserved', 'examples': 'Understate rather than overstate'},
            'elegant_structured': {'length': 'medium', 'tone': 'refined', 'examples': 'Use formal language with structure'},
            'respectful_relationship_first': {'length': 'long', 'tone': 'formal', 'examples': 'Build relationship before business'},
            'casual_direct': {'length': 'short', 'tone': 'friendly', 'examples': 'Be straightforward but friendly'}
        }
    
    def analyze_cultural_context(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze cultural context of an email and provide recommendations."""
        
        # Detect sender culture
        sender_culture = self._detect_culture(email)
        
        # Analyze current email style
        current_style = self._analyze_style(email)
        
        # Check for cultural mismatches
        mismatches = self._detect_mismatches(email, sender_culture, current_style)
        
        # Generate adapted response
        adapted_response = self._generate_adapted_response(sender_culture, email)
        
        # Check for taboo topics
        taboo_warnings = self._check_taboos(email, sender_culture)
        
        # Suggest optimal timing
        timing = self._suggest_timing(sender_culture)
        
        return {
            'analysis_id': f"cult_{datetime.now().strftime('%Y%m%d%H%M%S')}",
            'timestamp': datetime.now().isoformat(),
            'detected_culture': sender_culture,
            'cultural_profile': self.cultural_profiles.get(sender_culture, {}),
            'current_style': current_style,
            'cultural_mismatches': mismatches,
            'adapted_response': adapted_response,
            'taboo_warnings': taboo_warnings,
            'timing_recommendation': timing,
            'formality_adjustment': self._suggest_formality(sender_culture, current_style),
            'relationship_building': self._suggest_relationship_building(sender_culture),
            'reply_all_cultural_considerations': True
        }
    
    def _detect_culture(self, email: Dict[str, Any]) -> str:
        """Detect the cultural context of the sender."""
        sender = email.get('from', '').lower()
        body = email.get('body', '')
        subject = email.get('subject', '')
        content = f"{subject} {body}".lower()
        
        # Domain-based detection
        domain_cultures = {
            '.jp': 'japan', '.de': 'germany', '.br': 'brazil', '.cn': 'china',
            '.in': 'india', '.uk': 'uk', '.fr': 'france', '.au': 'australia',
            '.ae': 'middle_east', '.sa': 'middle_east', '.qa': 'middle_east'
        }
        
        for domain, culture in domain_cultures.items():
            if domain in sender:
                return culture
        
        # Language pattern detection
        language_patterns = {
            'japan': ['さん', '様', 'よろしくお願いします', 'お世話になっております'],
            'china': ['你好', '谢谢', '此致敬礼'],
            'germany': ['sehr geehrte', 'mit freundlichen grüßen'],
            'france': ['bonjour', 'cordialement', 'cher/chère'],
            'brazil': ['prezado', 'atenciosamente', 'obrigado'],
            'india': ['namaste', 'respected sir', 'thanks & regards']
        }
        
        for culture, patterns in language_patterns.items():
            if any(p in content for p in patterns):
                return culture
        
        # Default to US
        return 'us'
    
    def _analyze_style(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze the current communication style."""
        body = email.get('body', '')
        
        # Length analysis
        word_count = len(body.split())
        if word_count < 50:
            length = 'very_short'
        elif word_count < 150:
            length = 'short'
        elif word_count < 300:
            length = 'medium'
        else:
            length = 'long'
        
        # Formality analysis
        formal_indicators = ['dear', 'sincerely', 'respectfully', 'sir/madam', 'esteemed']
        informal_indicators = ['hi', 'hey', 'thanks', 'cheers', 'btw', 'lol']
        
        formal_count = sum(1 for w in formal_indicators if w in body.lower())
        informal_count = sum(1 for w in informal_indicators if w in body.lower())
        
        if formal_count > informal_count:
            formality = 'formal'
        elif informal_count > formal_count:
            formality = 'informal'
        else:
            formality = 'semi_formal'
        
        # Directness analysis
        direct_phrases = ['i need', 'we must', 'do this', 'send me']
        indirect_phrases = ['would you mind', 'if possible', 'perhaps', 'it would be great if']
        
        direct_count = sum(1 for p in direct_phrases if p in body.lower())
        indirect_count = sum(1 for p in indirect_phrases if p in body.lower())
        
        directness = 'high' if direct_count > indirect_count else 'low' if indirect_count > 0 else 'medium'
        
        return {
            'length': length,
            'formality': formality,
            'directness': directness,
            'word_count': word_count
        }
    
    def _detect_mismatches(self, email: Dict[str, Any], culture: str, style: Dict) -> List[Dict[str, Any]]:
        """Detect cultural mismatches in communication style."""
        mismatches = []
        profile = self.cultural_profiles.get(culture, {})
        
        # Formality mismatch
        if profile.get('formality') == 'formal' and style.get('formality') == 'informal':
            mismatches.append({
                'type': 'formality',
                'issue': 'Too informal for this culture',
                'suggestion': 'Use more formal greetings and closings',
                'severity': 'medium'
            })
        
        # Directness mismatch
        if profile.get('directness') == 'low' and style.get('directness') == 'high':
            mismatches.append({
                'type': 'directness',
                'issue': 'Too direct for this culture',
                'suggestion': 'Use softer, more indirect language',
                'severity': 'high'
            })
        
        # Length mismatch
        if profile.get('context') == 'high' and style.get('length') == 'very_short':
            mismatches.append({
                'type': 'context',
                'issue': 'Too brief for high-context culture',
                'suggestion': 'Provide more context and relationship building',
                'severity': 'medium'
            })
        
        return mismatches
    
    def _generate_adapted_response(self, culture: str, email: Dict[str, Any]) -> Dict[str, Any]:
        """Generate a culturally adapted response template."""
        profile = self.cultural_profiles.get(culture, {})
        
        greetings = profile.get('greetings', ['Dear'])
        closings = profile.get('closings', ['Best regards'])
        style = profile.get('preferred_style', 'direct_concise')
        
        return {
            'recommended_greeting': greetings[0] if greetings else 'Dear',
            'recommended_closing': closings[0] if closings else 'Best regards',
            'communication_style': style,
            'style_description': self.communication_styles.get(style, {}).get('examples', ''),
            'formality_level': profile.get('formality', 'semi_formal'),
            'suggested_length': {
                'direct_concise': '100-150 words',
                'indirect_polite': '150-200 words',
                'warm_relationship_first': '200-300 words',
                'respectful_indirect': '150-250 words'
            }.get(style, '150-200 words'),
            'cultural_notes': self._get_cultural_notes(culture)
        }
    
    def _get_cultural_notes(self, culture: str) -> List[str]:
        """Get cultural communication notes."""
        notes = {
            'japan': ['Avoid direct "no" - use "it may be difficult"', 'Always acknowledge hierarchy', 'Silence is acceptable'],
            'germany': ['Be punctual and precise', 'Use titles (Dr., Prof.)', 'Separate personal and business'],
            'brazil': ['Build personal relationship first', 'Expect flexible timelines', 'Use warm, friendly tone'],
            'china': ['Never cause loss of face', 'Use formal titles', 'Relationship (guanxi) is key'],
            'india': ['Respect hierarchy and seniority', 'Be patient with timelines', 'Use formal address initially'],
            'uk': ['Use understatement', 'Humor is appreciated', 'Avoid being too direct'],
            'france': ['Use formal French when possible', 'Appreciate elegance in communication', 'Respect lunch hours'],
            'middle_east': ['Build trust before business', 'Avoid scheduling during prayer times', 'Be patient with negotiations'],
            'australia': ['Be casual and direct', 'Avoid pretentiousness', 'Humor is valued']
        }
        return notes.get(culture, [])
    
    def _check_taboos(self, email: Dict[str, Any], culture: str) -> List[Dict[str, Any]]:
        """Check for culturally taboo topics."""
        warnings = []
        content = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        taboos = self.taboo_topics.get(culture, [])
        
        for taboo in taboos:
            if taboo.replace('_', ' ') in content:
                warnings.append({
                    'taboo': taboo,
                    'severity': 'high',
                    'suggestion': f'Avoid discussing {taboo} in this cultural context'
                })
        
        return warnings
    
    def _suggest_timing(self, culture: str) -> Dict[str, Any]:
        """Suggest optimal timing for response."""
        profile = self.cultural_profiles.get(culture, {})
        
        time_zones = {
            'japan': 'JST (UTC+9)', 'china': 'CST (UTC+8)', 'india': 'IST (UTC+5:30)',
            'germany': 'CET (UTC+1)', 'france': 'CET (UTC+1)', 'uk': 'GMT (UTC+0)',
            'brazil': 'BRT (UTC-3)', 'us': 'EST/PST (UTC-5/-8)', 'australia': 'AEST (UTC+10)',
            'middle_east': 'GST (UTC+4)'
        }
        
        business_hours = {
            'japan': '9:00-18:00 JST', 'china': '9:00-18:00 CST', 'india': '9:30-18:30 IST',
            'germany': '8:00-17:00 CET', 'france': '9:00-18:00 CET', 'uk': '9:00-17:00 GMT',
            'brazil': '9:00-18:00 BRT', 'us': '9:00-17:00 local', 'australia': '9:00-17:00 AEST',
            'middle_east': '8:00-14:00 GST (Sun-Thu)'
        }
        
        return {
            'timezone': time_zones.get(culture, 'Unknown'),
            'business_hours': business_hours.get(culture, '9:00-17:00 local'),
            'expected_response_time': profile.get('response_time_expected', '24h'),
            'weekend_days': {
                'middle_east': 'Friday-Saturday',
                'israel': 'Friday-Saturday'
            }.get(culture, 'Saturday-Sunday')
        }
    
    def _suggest_formality(self, culture: str, current_style: Dict) -> Dict[str, Any]:
        """Suggest formality adjustments."""
        profile = self.cultural_profiles.get(culture, {})
        target_formality = profile.get('formality', 'semi_formal')
        
        return {
            'current': current_style.get('formality', 'semi_formal'),
            'target': target_formality,
            'adjustment_needed': current_style.get('formality') != target_formality,
            'suggestions': {
                'formal': ['Use "Dear [Title] [Last Name]"', 'Avoid contractions', 'Use formal closings'],
                'semi_formal': ['Use "Dear [First Name]" or "Hi [First Name]"', 'Moderate contractions', 'Professional closings'],
                'informal': ['Use "Hi [First Name]" or "Hello"', 'Contractions OK', 'Casual closings like "Best" or "Cheers"']
            }.get(target_formality, [])
        }
    
    def _suggest_relationship_building(self, culture: str) -> List[str]:
        """Suggest relationship-building approaches."""
        suggestions = {
            'japan': ['Exchange pleasantries about seasons', 'Ask about their company', 'Show respect for their expertise'],
            'brazil': ['Ask about family', 'Discuss football or local events', 'Be warm and personable'],
            'china': ['Ask about their health', 'Compliment their achievements', 'Show interest in Chinese culture'],
            'india': ['Ask about their well-being', 'Show respect for their experience', 'Be patient and thorough'],
            'middle_east': ['Ask about their health and family', 'Build trust before business', 'Show patience'],
            'germany': ['Be professional and efficient', 'Show competence', 'Respect their time'],
            'uk': ['Use appropriate humor', 'Be modest about achievements', 'Small talk about weather/sports'],
            'france': ['Appreciate their culture', 'Use elegant language', 'Discuss intellectual topics']
        }
        return suggestions.get(culture, ['Be professional and respectful'])


def process_email_cultural(email_data: Dict[str, Any]) -> Dict[str, Any]:
    """Main entry point for cultural intelligence analysis."""
    engine = CulturalIntelligenceEngine()
    return engine.analyze_cultural_context(email_data)


if __name__ == '__main__':
    test_email = {
        'from': 'tanaka@company.co.jp',
        'subject': 'Regarding your proposal',
        'body': 'Dear Sir, thank you for your proposal. We have reviewed it carefully. '
                'While we appreciate your efforts, it may be difficult for us to proceed '
                'at this time. We hope to maintain our good relationship.'
    }
    
    result = process_email_cultural(test_email)
    print(json.dumps(result, indent=2))

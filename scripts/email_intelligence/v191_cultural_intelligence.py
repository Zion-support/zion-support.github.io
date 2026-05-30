#!/usr/bin/env python3
"""
V191 - AI Email Cultural Intelligence
Detects cultural context (20+ cultures), adapts tone and formality per culture,
avoids cultural faux pas, and provides cultural sensitivity scoring.
"""

import json
from datetime import datetime
from typing import Dict, List, Any
from collections import defaultdict


class CulturalIntelligence:
    """AI-powered cultural intelligence for email communications."""
    
    def __init__(self):
        self.cultural_profiles = self._build_cultural_profiles()
        self.communication_history = defaultdict(list)
    
    def _build_cultural_profiles(self) -> Dict[str, Dict]:
        """Build cultural profiles for 20+ cultures."""
        return {
            'united_states': {
                'formality': 'low',
                'directness': 'high',
                'context': 'low',
                'greetings': ['Hi', 'Hello', 'Hey'],
                'closings': ['Best', 'Thanks', 'Regards'],
                'taboo_topics': ['age', 'salary', 'politics', 'religion'],
                'preferred_style': 'direct_casual',
                'response_expectation': 'quick',
                'hierarchy_awareness': 'low'
            },
            'japan': {
                'formality': 'high',
                'directness': 'low',
                'context': 'high',
                'greetings': ['Dear', 'Respected'],
                'closings': ['Sincerely', 'With respect'],
                'taboo_topics': ['world_war_2', 'personal_questions', 'direct_criticism'],
                'preferred_style': 'formal_indirect',
                'response_expectation': 'thoughtful',
                'hierarchy_awareness': 'high'
            },
            'germany': {
                'formality': 'high',
                'directness': 'high',
                'context': 'low',
                'greetings': ['Dear', 'Guten Tag'],
                'closings': ['Mit freundlichen Grüßen', 'Best regards'],
                'taboo_topics': ['nazi_history', 'personal_finances', 'small_talk'],
                'preferred_style': 'formal_direct',
                'response_expectation': 'detailed',
                'hierarchy_awareness': 'medium'
            },
            'china': {
                'formality': 'high',
                'directness': 'low',
                'context': 'high',
                'greetings': ['Dear', 'Respected'],
                'closings': ['With respect', 'Best wishes'],
                'taboo_topics': ['taiwan', 'tibet', 'politics', 'direct_criticism'],
                'preferred_style': 'formal_indirect',
                'response_expectation': 'relationship_first',
                'hierarchy_awareness': 'high'
            },
            'india': {
                'formality': 'medium',
                'directness': 'medium',
                'context': 'high',
                'greetings': ['Dear', 'Namaste'],
                'closings': ['Regards', 'Thanks and regards'],
                'taboo_topics': ['religion', 'caste', 'politics', 'pakistan'],
                'preferred_style': 'warm_professional',
                'response_expectation': 'detailed',
                'hierarchy_awareness': 'high'
            },
            'brazil': {
                'formality': 'low',
                'directness': 'medium',
                'context': 'high',
                'greetings': ['Olá', 'Hi', 'Dear'],
                'closings': ['Abraços', 'Best', 'Cheers'],
                'taboo_topics': ['politics', 'poverty', 'crime'],
                'preferred_style': 'warm_casual',
                'response_expectation': 'relationship_first',
                'hierarchy_awareness': 'medium'
            },
            'united_kingdom': {
                'formality': 'medium',
                'directness': 'medium',
                'context': 'medium',
                'greetings': ['Dear', 'Hi', 'Hello'],
                'closings': ['Kind regards', 'Best wishes', 'Cheers'],
                'taboo_topics': ['money', 'class', 'personal_questions'],
                'preferred_style': 'polite_professional',
                'response_expectation': 'quick',
                'hierarchy_awareness': 'medium'
            },
            'france': {
                'formality': 'high',
                'directness': 'medium',
                'context': 'high',
                'greetings': ['Cher/Chère', 'Bonjour'],
                'closings': ['Cordialement', 'Bien à vous'],
                'taboo_topics': ['money', 'personal_life', 'age'],
                'preferred_style': 'formal_elegant',
                'response_expectation': 'thoughtful',
                'hierarchy_awareness': 'high'
            },
            'saudi_arabia': {
                'formality': 'high',
                'directness': 'low',
                'context': 'high',
                'greetings': ['Dear', 'As-salamu alaykum'],
                'closings': ['With respect', 'Best regards'],
                'taboo_topics': ['religion_criticism', 'women_rights', 'politics', 'alcohol'],
                'preferred_style': 'formal_respectful',
                'response_expectation': 'relationship_first',
                'hierarchy_awareness': 'high'
            },
            'russia': {
                'formality': 'high',
                'directness': 'high',
                'context': 'medium',
                'greetings': ['Dear', 'Уважаемый'],
                'closings': ['С уважением', 'Best regards'],
                'taboo_topics': ['politics', 'putin', 'ukraine', 'personal_questions'],
                'preferred_style': 'formal_direct',
                'response_expectation': 'detailed',
                'hierarchy_awareness': 'high'
            },
            'south_korea': {
                'formality': 'high',
                'directness': 'low',
                'context': 'high',
                'greetings': ['Dear', '안녕하세요'],
                'closings': ['감사합니다', 'Best regards'],
                'taboo_topics': ['north_korea', 'japan_relations', 'personal_questions'],
                'preferred_style': 'formal_indirect',
                'response_expectation': 'thoughtful',
                'hierarchy_awareness': 'high'
            },
            'mexico': {
                'formality': 'medium',
                'directness': 'low',
                'context': 'high',
                'greetings': ['Estimado', 'Hola', 'Dear'],
                'closings': ['Saludos', 'Best', 'Atentamente'],
                'taboo_topics': ['drugs', 'cartels', 'immigration', 'poverty'],
                'preferred_style': 'warm_professional',
                'response_expectation': 'relationship_first',
                'hierarchy_awareness': 'high'
            },
            'australia': {
                'formality': 'low',
                'directness': 'high',
                'context': 'low',
                'greetings': ['Hi', 'G\'day', 'Hello'],
                'closings': ['Cheers', 'Best', 'Thanks'],
                'taboo_topics': ['aboriginal_issues', 'personal_questions'],
                'preferred_style': 'casual_direct',
                'response_expectation': 'quick',
                'hierarchy_awareness': 'low'
            },
            'canada': {
                'formality': 'medium',
                'directness': 'medium',
                'context': 'medium',
                'greetings': ['Hi', 'Hello', 'Dear'],
                'closings': ['Best regards', 'Thanks', 'Cheers'],
                'taboo_topics': ['politics', 'quebec_separatism', 'personal_questions'],
                'preferred_style': 'polite_professional',
                'response_expectation': 'quick',
                'hierarchy_awareness': 'medium'
            },
            'italy': {
                'formality': 'medium',
                'directness': 'medium',
                'context': 'high',
                'greetings': ['Caro/Cara', 'Gentile', 'Dear'],
                'closings': ['Cordiali saluti', 'Best regards'],
                'taboo_topics': ['mafia', 'politics', 'personal_finances'],
                'preferred_style': 'warm_professional',
                'response_expectation': 'relationship_first',
                'hierarchy_awareness': 'medium'
            },
            'spain': {
                'formality': 'medium',
                'directness': 'medium',
                'context': 'high',
                'greetings': ['Estimado', 'Hola', 'Dear'],
                'closings': ['Un saludo', 'Best regards'],
                'taboo_topics': ['basque_separatism', 'catalonia', 'franco'],
                'preferred_style': 'warm_professional',
                'response_expectation': 'relationship_first',
                'hierarchy_awareness': 'medium'
            },
            'netherlands': {
                'formality': 'low',
                'directness': 'high',
                'context': 'low',
                'greetings': ['Beste', 'Hi', 'Hello'],
                'closings': ['Met vriendelijke groet', 'Best'],
                'taboo_topics': ['personal_finances', 'world_war_2_collaboration'],
                'preferred_style': 'direct_casual',
                'response_expectation': 'quick',
                'hierarchy_awareness': 'low'
            },
            'sweden': {
                'formality': 'low',
                'directness': 'medium',
                'context': 'low',
                'greetings': ['Hej', 'Hi', 'Hello'],
                'closings': ['Med vänlig hälsning', 'Best'],
                'taboo_topics': ['personal_finances', 'immigration_criticism'],
                'preferred_style': 'egalitarian_direct',
                'response_expectation': 'quick',
                'hierarchy_awareness': 'low'
            },
            'singapore': {
                'formality': 'medium',
                'directness': 'medium',
                'context': 'high',
                'greetings': ['Dear', 'Hi'],
                'closings': ['Best regards', 'Thanks'],
                'taboo_topics': ['politics', 'race', 'religion'],
                'preferred_style': 'professional_efficient',
                'response_expectation': 'quick',
                'hierarchy_awareness': 'high'
            },
            'united_arab_emirates': {
                'formality': 'high',
                'directness': 'low',
                'context': 'high',
                'greetings': ['Dear', 'As-salamu alaykum'],
                'closings': ['With respect', 'Best regards'],
                'taboo_topics': ['religion_criticism', 'politics', 'alcohol', 'women_rights'],
                'preferred_style': 'formal_respectful',
                'response_expectation': 'relationship_first',
                'hierarchy_awareness': 'high'
            }
        }
    
    def analyze_cultural_context(self, email: Dict[str, Any], context: Dict = None) -> Dict[str, Any]:
        """Analyze cultural context and provide adaptation recommendations."""
        if not email:
            return {'error': 'No email provided'}
        
        context = context or {}
        
        # Detect sender culture
        sender_culture = self._detect_culture(email)
        
        # Get cultural profile
        cultural_profile = self.cultural_profiles.get(sender_culture, self.cultural_profiles['united_states'])
        
        # Analyze current email style
        current_style = self._analyze_email_style(email)
        
        # Detect cultural mismatches
        mismatches = self._detect_cultural_mismatches(current_style, cultural_profile)
        
        # Check for taboo topics
        taboo_violations = self._check_taboo_topics(email, cultural_profile)
        
        # Generate adaptation recommendations
        adaptations = self._generate_adaptations(current_style, cultural_profile, mismatches)
        
        # Cultural sensitivity score
        sensitivity_score = self._calculate_sensitivity_score(mismatches, taboo_violations)
        
        return {
            'analysis_id': f"culture_{datetime.now().strftime('%Y%m%d%H%M%S')}",
            'timestamp': datetime.now().isoformat(),
            'detected_culture': sender_culture,
            'cultural_profile': {
                'formality': cultural_profile['formality'],
                'directness': cultural_profile['directness'],
                'context': cultural_profile['context'],
                'hierarchy_awareness': cultural_profile['hierarchy_awareness']
            },
            'current_style': current_style,
            'cultural_mismatches': mismatches,
            'taboo_violations': taboo_violations,
            'adaptations': adaptations,
            'sensitivity_score': sensitivity_score,
            'recommended_greeting': self._recommend_greeting(cultural_profile),
            'recommended_closing': self._recommend_closing(cultural_profile),
            'reply_all_strategy': self._determine_reply_all_strategy(sender_culture, cultural_profile)
        }
    
    def _detect_culture(self, email: Dict) -> str:
        """Detect sender's culture from email."""
        sender = email.get('from', '').lower()
        
        # Domain-based detection
        culture_domains = {
            '.jp': 'japan',
            '.de': 'germany',
            '.cn': 'china',
            '.in': 'india',
            '.br': 'brazil',
            '.uk': 'united_kingdom',
            '.co.uk': 'united_kingdom',
            '.fr': 'france',
            '.sa': 'saudi_arabia',
            '.ru': 'russia',
            '.kr': 'south_korea',
            '.mx': 'mexico',
            '.au': 'australia',
            '.ca': 'canada',
            '.it': 'italy',
            '.es': 'spain',
            '.nl': 'netherlands',
            '.se': 'sweden',
            '.sg': 'singapore',
            '.ae': 'united_arab_emirates'
        }
        
        for domain, culture in culture_domains.items():
            if domain in sender:
                return culture
        
        return 'united_states'  # Default
    
    def _analyze_email_style(self, email: Dict) -> Dict[str, Any]:
        """Analyze current email communication style."""
        content = email.get('body', '').lower()
        subject = email.get('subject', '').lower()
        
        # Formality detection
        formal_indicators = ['dear', 'sincerely', 'respectfully', 'formal', 'professional']
        casual_indicators = ['hi', 'hey', 'thanks', 'cheers', 'btw', 'lol']
        
        formal_count = sum(1 for word in formal_indicators if word in content)
        casual_count = sum(1 for word in casual_indicators if word in content)
        
        formality = 'high' if formal_count > casual_count else 'low' if casual_count > formal_count else 'medium'
        
        # Directness detection
        direct_indicators = ['i need', 'you must', 'do this', 'require']
        indirect_indicators = ['perhaps', 'maybe', 'if possible', 'would you consider']
        
        direct_count = sum(1 for phrase in direct_indicators if phrase in content)
        indirect_count = sum(1 for phrase in indirect_indicators if phrase in content)
        
        directness = 'high' if direct_count > indirect_count else 'low' if indirect_count > direct_count else 'medium'
        
        # Context detection (high-context vs low-context)
        context_indicators = ['as you know', 'as discussed', 'per our conversation', 'following up on']
        context_count = sum(1 for phrase in context_indicators if phrase in content)
        
        context = 'high' if context_count >= 2 else 'low'
        
        return {
            'formality': formality,
            'directness': directness,
            'context': context,
            'length': len(content.split()),
            'uses_titles': any(title in content for title in ['mr.', 'ms.', 'dr.', 'prof.']),
            'uses_honorifics': any(honorific in content for honorific in ['sir', 'madam', 'esteemed'])
        }
    
    def _detect_cultural_mismatches(self, current_style: Dict, cultural_profile: Dict) -> List[Dict[str, Any]]:
        """Detect mismatches between current style and cultural expectations."""
        mismatches = []
        
        # Formality mismatch
        if current_style['formality'] != cultural_profile['formality']:
            mismatches.append({
                'type': 'formality',
                'current': current_style['formality'],
                'expected': cultural_profile['formality'],
                'severity': 'high' if abs(['low', 'medium', 'high'].index(current_style['formality']) - ['low', 'medium', 'high'].index(cultural_profile['formality'])) > 1 else 'medium'
            })
        
        # Directness mismatch
        if current_style['directness'] != cultural_profile['directness']:
            mismatches.append({
                'type': 'directness',
                'current': current_style['directness'],
                'expected': cultural_profile['directness'],
                'severity': 'medium'
            })
        
        # Context mismatch
        if current_style['context'] != cultural_profile['context']:
            mismatches.append({
                'type': 'context',
                'current': current_style['context'],
                'expected': cultural_profile['context'],
                'severity': 'low'
            })
        
        return mismatches
    
    def _check_taboo_topics(self, email: Dict, cultural_profile: Dict) -> List[Dict[str, Any]]:
        """Check for taboo topics."""
        content = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        violations = []
        
        for topic in cultural_profile['taboo_topics']:
            topic_normalized = topic.replace('_', ' ')
            if topic_normalized in content:
                violations.append({
                    'topic': topic,
                    'severity': 'high',
                    'recommendation': f'Avoid discussing {topic_normalized}'
                })
        
        return violations
    
    def _generate_adaptations(self, current_style: Dict, cultural_profile: Dict, mismatches: List) -> List[str]:
        """Generate cultural adaptation recommendations."""
        adaptations = []
        
        for mismatch in mismatches:
            if mismatch['type'] == 'formality':
                if cultural_profile['formality'] == 'high':
                    adaptations.append("Increase formality: Use 'Dear' instead of 'Hi', include titles")
                elif cultural_profile['formality'] == 'low':
                    adaptations.append("Decrease formality: Use 'Hi' instead of 'Dear', be more casual")
            
            elif mismatch['type'] == 'directness':
                if cultural_profile['directness'] == 'low':
                    adaptations.append("Be more indirect: Use 'perhaps', 'would you consider', soften requests")
                elif cultural_profile['directness'] == 'high':
                    adaptations.append("Be more direct: State needs clearly, avoid excessive hedging")
            
            elif mismatch['type'] == 'context':
                if cultural_profile['context'] == 'high':
                    adaptations.append("Add context: Reference previous conversations, build relationship first")
                elif cultural_profile['context'] == 'low':
                    adaptations.append("Be concise: Get to the point quickly, minimize background")
        
        if cultural_profile['hierarchy_awareness'] == 'high':
            adaptations.append("Acknowledge hierarchy: Use appropriate titles, show respect for seniority")
        
        return adaptations
    
    def _calculate_sensitivity_score(self, mismatches: List, violations: List) -> Dict[str, Any]:
        """Calculate cultural sensitivity score."""
        score = 100
        
        # Deduct for mismatches
        for mismatch in mismatches:
            if mismatch['severity'] == 'high':
                score -= 20
            elif mismatch['severity'] == 'medium':
                score -= 10
            else:
                score -= 5
        
        # Deduct for taboo violations
        for violation in violations:
            score -= 30
        
        score = max(0, score)
        
        return {
            'score': score,
            'grade': 'A' if score >= 90 else 'B' if score >= 80 else 'C' if score >= 70 else 'D' if score >= 60 else 'F',
            'recommendation': 'Excellent cultural sensitivity' if score >= 90 else 'Good, minor adjustments needed' if score >= 80 else 'Significant cultural adaptation required' if score >= 60 else 'Major cultural issues - review immediately'
        }
    
    def _recommend_greeting(self, cultural_profile: Dict) -> str:
        """Recommend appropriate greeting."""
        return cultural_profile['greetings'][0] if cultural_profile['greetings'] else 'Dear'
    
    def _recommend_closing(self, cultural_profile: Dict) -> str:
        """Recommend appropriate closing."""
        return cultural_profile['closings'][0] if cultural_profile['closings'] else 'Best regards'
    
    def _determine_reply_all_strategy(self, culture: str, cultural_profile: Dict) -> Dict[str, Any]:
        """Determine reply-all strategy based on culture."""
        return {
            'reply_all_recommended': cultural_profile['hierarchy_awareness'] == 'high',
            'reason': 'Maintain transparency with all stakeholders' if cultural_profile['hierarchy_awareness'] == 'high' else 'Direct communication preferred',
            'cultural_context': f"{culture} values {'group harmony' if cultural_profile['context'] == 'high' else 'individual communication'}"
        }


def analyze_email_culture(email: Dict[str, Any], context: Dict = None) -> Dict[str, Any]:
    """Main entry point for cultural intelligence analysis."""
    intelligence = CulturalIntelligence()
    return intelligence.analyze_cultural_context(email, context)


if __name__ == '__main__':
    test_email = {
        'from': 'tanaka@company.co.jp',
        'subject': 'Re: Project Proposal',
        'body': 'Dear Sir, Thank you for your proposal. We have reviewed it carefully. While we appreciate your efforts, we feel that perhaps some adjustments might be beneficial. Would you consider discussing this further? With respect, Tanaka-san',
        'date': '2024-01-15T10:00:00'
    }
    
    result = analyze_email_culture(test_email)
    print(json.dumps(result, indent=2))

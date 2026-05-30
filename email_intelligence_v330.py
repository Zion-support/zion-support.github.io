"""
Email Intelligence V330 - Cultural Intelligence Engine
Detects cultural context in communications, suggests culturally appropriate
language, adapts formality levels, and prevents cross-cultural misunderstandings.
Enforces reply-all and case-by-case analysis.
"""

from datetime import datetime
from typing import Dict, List
import json
import re


class EmailCulturalIntelligenceEngine:
    """
    V330: Detects cultural context, suggests appropriate language, adapts
    formality, and prevents cross-cultural misunderstandings for global teams.
    """
    
    VERSION = "V330"
    ENGINE_NAME = "Cultural Intelligence Engine"
    
    def __init__(self):
        self.cultural_profiles = {
            'north_america': {
                'formality': 'low',
                'directness': 'high',
                'greetings': ['Hi', 'Hello', 'Hey'],
                'closings': ['Best', 'Thanks', 'Regards'],
                'characteristics': ['direct', 'informal', 'action-oriented']
            },
            'europe': {
                'formality': 'medium',
                'directness': 'medium',
                'greetings': ['Dear', 'Hello', 'Good day'],
                'closings': ['Best regards', 'Kind regards', 'Sincerely'],
                'characteristics': ['polite', 'structured', 'relationship-focused']
            },
            'asia': {
                'formality': 'high',
                'directness': 'low',
                'greetings': ['Dear', 'Respected', 'Honored'],
                'closings': ['Respectfully', 'With gratitude', 'Sincerely'],
                'characteristics': ['indirect', 'hierarchical', 'harmony-focused']
            },
            'middle_east': {
                'formality': 'high',
                'directness': 'low',
                'greetings': ['Dear', 'Respected', 'Greetings'],
                'closings': ['With respect', 'Best wishes', 'Regards'],
                'characteristics': ['relationship-first', 'indirect', 'respectful']
            },
            'latin_america': {
                'formality': 'medium',
                'directness': 'medium',
                'greetings': ['Dear', 'Hello', 'Good morning/afternoon'],
                'closings': ['Warm regards', 'Best wishes', 'Sincerely'],
                'characteristics': ['warm', 'relationship-focused', 'expressive']
            }
        }
    
    def analyze_email(self, email_data: Dict) -> Dict:
        """Analyze email for cultural context case-by-case."""
        sender = email_data.get('from', '')
        content = email_data.get('body', '')
        subject = email_data.get('subject', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # Detect sender's cultural context
        sender_culture = self._detect_culture(sender, content)
        
        # Analyze communication style
        style = self._analyze_communication_style(content)
        
        # Identify potential cultural issues
        issues = self._identify_cultural_issues(content, sender_culture)
        
        # Generate cultural recommendations
        recommendations = self._generate_cultural_recommendations(sender_culture, style, issues)
        
        # Suggest appropriate response style
        response_style = self._suggest_response_style(sender_culture)
        
        analysis = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': timestamp,
            'sender': sender,
            'detected_culture': sender_culture,
            'communication_style': style,
            'cultural_issues': issues,
            'recommendations': recommendations,
            'suggested_response_style': response_style
        }
        
        return analysis
    
    def generate_response(self, email_data: Dict) -> Dict:
        """Generate culturally appropriate response. ALWAYS enforces reply-all."""
        sender = email_data.get('from', '')
        to_recipients = email_data.get('to', [])
        cc_recipients = email_data.get('cc', [])
        subject = email_data.get('subject', '')
        content = email_data.get('body', '')
        
        # Analyze email
        analysis = self.analyze_email(email_data)
        
        # ENFORCE REPLY-ALL
        all_recipients = self._enforce_reply_all(to_recipients, cc_recipients, sender)
        
        # Generate culturally appropriate response
        response_body = self._generate_cultural_response(sender, content, analysis)
        
        response = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': datetime.now().isoformat(),
            'to': all_recipients,
            'subject': f"Re: {subject}" if not subject.lower().startswith('re:') else subject,
            'body': response_body,
            'cultural_context': analysis['detected_culture'],
            'formality_level': analysis['suggested_response_style']['formality'],
            'cultural_issues_found': len(analysis['cultural_issues']),
            'reply_all_enforced': True
        }
        
        return response
    
    def _detect_culture(self, sender: str, content: str) -> Dict:
        """Detect cultural context from sender and content"""
        # Simple domain-based detection
        domain = sender.split('@')[-1].lower() if '@' in sender else ''
        
        # Cultural indicators in content
        cultural_indicators = {
            'north_america': ['thanks', 'awesome', 'great', 'cool', ' asap'],
            'europe': ['regards', 'kind regards', 'best wishes', 'cheers'],
            'asia': ['respectfully', 'honored', 'grateful', 'sincere'],
            'middle_east': ['greetings', 'peace', 'blessings', 'respected'],
            'latin_america': ['warm regards', 'best wishes', 'cordially']
        }
        
        content_lower = content.lower()
        
        culture_scores = {}
        for culture, indicators in cultural_indicators.items():
            score = sum(1 for ind in indicators if ind in content_lower)
            if score > 0:
                culture_scores[culture] = score
        
        # Domain-based hints
        if '.uk' in domain or '.de' in domain or '.fr' in domain:
            culture_scores['europe'] = culture_scores.get('europe', 0) + 2
        elif '.jp' in domain or '.cn' in domain or '.kr' in domain:
            culture_scores['asia'] = culture_scores.get('asia', 0) + 2
        elif '.ae' in domain or '.sa' in domain:
            culture_scores['middle_east'] = culture_scores.get('middle_east', 0) + 2
        elif '.br' in domain or '.mx' in domain or '.ar' in domain:
            culture_scores['latin_america'] = culture_scores.get('latin_america', 0) + 2
        elif '.us' in domain or '.ca' in domain:
            culture_scores['north_america'] = culture_scores.get('north_america', 0) + 2
        
        if culture_scores:
            primary_culture = max(culture_scores, key=culture_scores.get)
            confidence = culture_scores[primary_culture] / sum(culture_scores.values())
        else:
            primary_culture = 'north_america'  # Default
            confidence = 0.5
        
        profile = self.cultural_profiles.get(primary_culture, self.cultural_profiles['north_america'])
        
        return {
            'primary_culture': primary_culture,
            'confidence': round(confidence, 2),
            'profile': profile,
            'all_scores': culture_scores
        }
    
    def _analyze_communication_style(self, content: str) -> Dict:
        """Analyze communication style"""
        # Directness indicators
        direct_phrases = ['we need', 'you must', 'do this', 'immediately', 'asap']
        indirect_phrases = ['perhaps', 'maybe', 'if possible', 'when convenient', 'would you']
        
        direct_count = sum(1 for phrase in direct_phrases if phrase in content.lower())
        indirect_count = sum(1 for phrase in indirect_phrases if phrase in content.lower())
        
        if direct_count > indirect_count:
            directness = 'high'
        elif indirect_count > direct_count:
            directness = 'low'
        else:
            directness = 'medium'
        
        # Formality indicators
        formal_words = ['therefore', 'furthermore', 'hereby', 'pursuant', 'aforementioned']
        informal_words = ['hey', 'cool', 'awesome', 'gonna', 'wanna']
        
        formal_count = sum(1 for word in formal_words if word in content.lower())
        informal_count = sum(1 for word in informal_words if word in content.lower())
        
        if formal_count > informal_count:
            formality = 'high'
        elif informal_count > formal_count:
            formality = 'low'
        else:
            formality = 'medium'
        
        return {
            'directness': directness,
            'formality': formality,
            'direct_score': direct_count,
            'indirect_score': indirect_count,
            'formal_score': formal_count,
            'informal_score': informal_count
        }
    
    def _identify_cultural_issues(self, content: str, culture: Dict) -> List[Dict]:
        """Identify potential cultural issues"""
        issues = []
        
        content_lower = content.lower()
        culture_name = culture['primary_culture']
        profile = culture['profile']
        
        # Check for directness mismatch
        if culture_name == 'asia' and any(word in content_lower for word in ['no', 'wrong', 'incorrect']):
            issues.append({
                'type': 'directness_mismatch',
                'severity': 'high',
                'issue': 'Direct negative language may be inappropriate for Asian cultures',
                'suggestion': 'Use more indirect phrasing like "perhaps we could consider alternatives"'
            })
        
        # Check for formality mismatch
        if profile['formality'] == 'high' and any(word in content_lower for word in ['hey', 'cool', 'awesome']):
            issues.append({
                'type': 'formality_mismatch',
                'severity': 'medium',
                'issue': 'Informal language may be inappropriate for formal cultures',
                'suggestion': 'Use more formal greetings and closings'
            })
        
        # Check for time pressure (may be rude in some cultures)
        if culture_name in ['asia', 'middle_east'] and 'asap' in content_lower:
            issues.append({
                'type': 'time_pressure',
                'severity': 'medium',
                'issue': 'ASAP may be perceived as rude in some cultures',
                'suggestion': 'Use "at your earliest convenience" instead'
            })
        
        return issues
    
    def _generate_cultural_recommendations(self, culture: Dict, style: Dict, issues: List) -> List[str]:
        """Generate cultural recommendations"""
        recommendations = []
        
        culture_name = culture['primary_culture']
        profile = culture['profile']
        
        recommendations.append(f"Adapt to {culture_name.replace('_', ' ').title()} communication style")
        
        if profile['formality'] == 'high':
            recommendations.append("Use formal greetings and closings")
        elif profile['formality'] == 'low':
            recommendations.append("Informal tone is acceptable")
        
        if profile['directness'] == 'low':
            recommendations.append("Use indirect language to maintain harmony")
        elif profile['directness'] == 'high':
            recommendations.append("Direct communication is appreciated")
        
        for issue in issues:
            recommendations.append(f"Address: {issue['suggestion']}")
        
        return recommendations
    
    def _suggest_response_style(self, culture: Dict) -> Dict:
        """Suggest appropriate response style"""
        profile = culture['profile']
        
        # Select appropriate greeting and closing
        greeting = profile['greetings'][0]
        closing = profile['closings'][0]
        
        return {
            'formality': profile['formality'],
            'directness': profile['directness'],
            'greeting': greeting,
            'closing': closing,
            'characteristics': profile['characteristics']
        }
    
    def _generate_cultural_response(self, sender: str, content: str, analysis: Dict) -> str:
        """Generate culturally appropriate response"""
        sender_name = sender.split('@')[0] if '@' in sender else sender
        
        style = analysis['suggested_response_style']
        culture = analysis['detected_culture']['primary_culture']
        
        greeting = style['greeting']
        closing = style['closing']
        
        # Adapt tone based on culture
        if culture in ['asia', 'middle_east']:
            opening = f"{greeting} {sender_name},\n\nI hope this message finds you well. Thank you for your thoughtful communication."
        elif culture == 'europe':
            opening = f"{greeting} {sender_name},\n\nThank you for your email. I appreciate your message."
        else:
            opening = f"{greeting} {sender_name},\n\nThanks for reaching out."
        
        response = f"""{opening}

I've reviewed your message and will respond appropriately, taking into account our cultural context.

Cultural Context: {culture.replace('_', ' ').title()}
Communication Style: {style['formality']} formality, {style['directness']} directness

{closing},
[Your Name]

---
This response was generated by {self.ENGINE_NAME} ({self.VERSION}) with cultural intelligence.
Detected Culture: {culture} | Formality: {style['formality']}
"""
        
        return response
    
    def _enforce_reply_all(self, to_recipients: List, cc_recipients: List, sender: str) -> List:
        """ENFORCE REPLY-ALL: Always include all original recipients."""
        all_recipients = set()
        
        if isinstance(to_recipients, list):
            all_recipients.update(to_recipients)
        elif to_recipients:
            all_recipients.add(to_recipients)
        
        if isinstance(cc_recipients, list):
            all_recipients.update(cc_recipients)
        elif cc_recipients:
            all_recipients.add(cc_recipients)
        
        all_recipients.discard(sender)
        
        if not all_recipients:
            all_recipients.add(sender)
        
        return list(all_recipients)


# Test the engine
if __name__ == "__main__":
    engine = EmailCulturalIntelligenceEngine()
    
    test_email = {
        'from': 'tanaka@company.jp',
        'to': ['team@company.com'],
        'cc': ['management@company.com'],
        'subject': 'Partnership Proposal',
        'body': 'Dear Team, I am honored to present this proposal for your respectful consideration. We would be grateful if you could review it at your earliest convenience.',
        'timestamp': datetime.now().isoformat()
    }
    
    print("=" * 60)
    print(f"Email Intelligence {engine.VERSION} - {engine.ENGINE_NAME}")
    print("=" * 60)
    
    analysis = engine.analyze_email(test_email)
    print("\n📧 Email Analysis:")
    print(json.dumps(analysis, indent=2))
    
    response = engine.generate_response(test_email)
    print("\n📤 Generated Response:")
    print(json.dumps(response, indent=2))
    
    print("\n✅ Reply-All Enforcement: ACTIVE")
    print(f"✅ Recipients: {response['to']}")
    print("✅ Cultural Intelligence: ENABLED")

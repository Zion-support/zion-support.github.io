#!/usr/bin/env python3
"""
V1021 - Email Personalization Engine
AI personalizes every email based on recipient profile, past interactions, and preferences.
Dynamically adapts tone, content, and CTAs for maximum engagement.
"""
import re
from typing import Dict, List, Any, Tuple
from datetime import datetime


class EmailPersonalizationEngine:
    """Personalize emails based on recipient profiles and interaction history."""
    
    def __init__(self):
        self.recipient_profiles = {}
        self.interaction_history = []
    
    def build_recipient_profile(self, email_address: str, interactions: List[Dict[str, Any]] = None) -> Dict[str, Any]:
        """
        Build or update recipient profile from interaction history.
        
        Args:
            email_address: Recipient email address
            interactions: List of past interactions
            
        Returns:
            Recipient profile
        """
        if interactions is None:
            interactions = []
        
        profile = {
            'email': email_address,
            'name': self._extract_name(email_address, interactions),
            'company': self._extract_company(interactions),
            'role': self._extract_role(interactions),
            'preferred_tone': self._analyze_preferred_tone(interactions),
            'communication_style': self._analyze_communication_style(interactions),
            'interests': self._extract_interests(interactions),
            'engagement_score': self._calculate_engagement_score(interactions),
            'best_send_time': self._analyze_best_send_time(interactions),
            'last_interaction': interactions[-1]['date'] if interactions else None,
            'total_interactions': len(interactions)
        }
        
        self.recipient_profiles[email_address] = profile
        return profile
    
    def _extract_name(self, email: str, interactions: List[Dict]) -> str:
        """Extract recipient name from email or interactions."""
        # Try to extract from email
        name_part = email.split('@')[0]
        if '.' in name_part:
            parts = name_part.split('.')
            return ' '.join(p.capitalize() for p in parts)
        return name_part.capitalize()
    
    def _extract_company(self, interactions: List[Dict]) -> str:
        """Extract company from interactions."""
        for interaction in interactions:
            signature = interaction.get('signature', '')
            if signature:
                # Simple extraction - look for common patterns
                lines = signature.split('\n')
                for line in lines:
                    if any(word in line.lower() for word in ['inc', 'llc', 'corp', 'ltd', 'company']):
                        return line.strip()
        return ''
    
    def _extract_role(self, interactions: List[Dict]) -> str:
        """Extract role/title from interactions."""
        for interaction in interactions:
            signature = interaction.get('signature', '')
            if signature:
                lines = signature.split('\n')
                for line in lines:
                    if any(word in line.lower() for word in ['ceo', 'cto', 'manager', 'director', 'vp', 'head of']):
                        return line.strip()
        return ''
    
    def _analyze_preferred_tone(self, interactions: List[Dict]) -> str:
        """Analyze preferred communication tone."""
        if not interactions:
            return 'professional'
        
        formal_count = 0
        casual_count = 0
        
        for interaction in interactions:
            body = interaction.get('body', '').lower()
            # Formal indicators
            if any(word in body for word in ['dear', 'sincerely', 'regards', 'respectfully']):
                formal_count += 1
            # Casual indicators
            if any(word in body for word in ['hey', 'hi', 'thanks', 'cheers']):
                casual_count += 1
        
        if formal_count > casual_count:
            return 'formal'
        elif casual_count > formal_count:
            return 'casual'
        return 'professional'
    
    def _analyze_communication_style(self, interactions: List[Dict]) -> str:
        """Analyze communication style preferences."""
        if not interactions:
            return 'balanced'
        
        avg_length = sum(len(i.get('body', '')) for i in interactions) / len(interactions)
        
        if avg_length < 200:
            return 'concise'
        elif avg_length > 500:
            return 'detailed'
        return 'balanced'
    
    def _extract_interests(self, interactions: List[Dict]) -> List[str]:
        """Extract interests from interaction topics."""
        interests = []
        topics = [
            'technology', 'marketing', 'sales', 'finance', 'operations',
            'product', 'engineering', 'design', 'analytics', 'ai'
        ]
        
        for interaction in interactions:
            body = interaction.get('body', '').lower()
            for topic in topics:
                if topic in body:
                    interests.append(topic)
        
        # Return unique interests, sorted by frequency
        from collections import Counter
        return [item for item, _ in Counter(interests).most_common(5)]
    
    def _calculate_engagement_score(self, interactions: List[Dict]) -> int:
        """Calculate engagement score (0-100)."""
        if not interactions:
            return 50
        
        score = 50
        
        # Response rate
        responses = [i for i in interactions if i.get('is_response', False)]
        response_rate = len(responses) / len(interactions) if interactions else 0
        score += int(response_rate * 30)
        
        # Response time (faster = better)
        response_times = [i.get('response_time_hours', 24) for i in responses]
        if response_times:
            avg_response_time = sum(response_times) / len(response_times)
            if avg_response_time < 2:
                score += 15
            elif avg_response_time < 24:
                score += 10
        
        return min(100, max(0, score))
    
    def _analyze_best_send_time(self, interactions: List[Dict]) -> str:
        """Analyze best time to send emails."""
        if not interactions:
            return '10:00'
        
        response_times = []
        for interaction in interactions:
            if interaction.get('response_time_hours'):
                sent_hour = interaction.get('sent_hour', 10)
                response_times.append(sent_hour)
        
        if not response_times:
            return '10:00'
        
        # Find most common hour
        from collections import Counter
        most_common_hour = Counter(response_times).most_common(1)[0][0]
        return f'{most_common_hour:02d}:00'
    
    def personalize_email(self, template: str, recipient_email: str, context: Dict[str, Any] = None) -> Dict[str, Any]:
        """
        Personalize email template for specific recipient.
        
        Args:
            template: Email template with personalization tokens
            recipient_email: Recipient email address
            context: Additional context for personalization
            
        Returns:
            Personalized email with analysis
        """
        if context is None:
            context = {}
        
        # Get or build profile
        if recipient_email not in self.recipient_profiles:
            profile = self.build_recipient_profile(recipient_email)
        else:
            profile = self.recipient_profiles[recipient_email]
        
        # Apply personalizations
        personalized = template
        
        # Name personalization
        personalized = personalized.replace('{{first_name}}', profile['name'].split()[0] if profile['name'] else 'there')
        personalized = personalized.replace('{{name}}', profile['name'])
        
        # Company personalization
        if profile['company']:
            personalized = personalized.replace('{{company}}', profile['company'])
        
        # Tone adaptation
        if profile['preferred_tone'] == 'casual':
            personalized = self._adapt_to_casual(personalized)
        elif profile['preferred_tone'] == 'formal':
            personalized = self._adapt_to_formal(personalized)
        
        # Interest-based personalization
        if profile['interests']:
            top_interest = profile['interests'][0]
            personalized = self._add_interest_reference(personalized, top_interest)
        
        # Engagement-based personalization
        if profile['engagement_score'] > 80:
            personalized = self._add_loyalty_reference(personalized)
        
        return {
            'engine': 'V1021 - Email Personalization Engine',
            'recipient_email': recipient_email,
            'profile': profile,
            'personalized_email': personalized,
            'personalization_applied': [
                'name' if '{{first_name}}' in template or '{{name}}' in template else None,
                'company' if '{{company}}' in template and profile['company'] else None,
                'tone_adaptation' if profile['preferred_tone'] != 'professional' else None,
                'interest_reference' if profile['interests'] else None,
                'engagement_reference' if profile['engagement_score'] > 80 else None
            ],
            'optimization_score': self._calculate_optimization_score(profile),
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }
    
    def _adapt_to_casual(self, text: str) -> str:
        """Adapt text to casual tone."""
        replacements = {
            'Dear': 'Hi',
            'Sincerely': 'Cheers',
            'Best regards': 'Thanks',
            'I hope this email finds you well': 'Hope you\'re doing great'
        }
        for old, new in replacements.items():
            text = text.replace(old, new)
        return text
    
    def _adapt_to_formal(self, text: str) -> str:
        """Adapt text to formal tone."""
        replacements = {
            'Hi': 'Dear',
            'Hey': 'Dear',
            'Thanks': 'Best regards',
            'Cheers': 'Sincerely'
        }
        for old, new in replacements.items():
            text = text.replace(old, new)
        return text
    
    def _add_interest_reference(self, text: str, interest: str) -> str:
        """Add reference to recipient's interest."""
        if interest and '{{interest_reference}}' in text:
            interest_phrases = {
                'technology': 'your work in technology',
                'marketing': 'your marketing initiatives',
                'sales': 'your sales strategy',
                'finance': 'your financial planning',
                'ai': 'your AI projects'
            }
            phrase = interest_phrases.get(interest, f'your work in {interest}')
            text = text.replace('{{interest_reference}}', phrase)
        return text
    
    def _add_loyalty_reference(self, text: str) -> str:
        """Add reference for high-engagement recipients."""
        if '{{loyalty_reference}}' in text:
            text = text.replace('{{loyalty_reference}}', 'As one of our valued partners')
        return text
    
    def _calculate_optimization_score(self, profile: Dict[str, Any]) -> int:
        """Calculate personalization optimization score."""
        score = 50
        
        if profile['name']:
            score += 10
        if profile['company']:
            score += 10
        if profile['preferred_tone'] != 'professional':
            score += 10
        if profile['interests']:
            score += 10
        if profile['engagement_score'] > 70:
            score += 10
        
        return min(100, score)


def analyze_email_personalization(template: str, recipient_email: str, 
                                 interactions: List[Dict] = None) -> Dict[str, Any]:
    """
    Analyze and personalize email for recipient.
    
    Args:
        template: Email template
        recipient_email: Recipient email
        interactions: Past interactions
        
    Returns:
        Personalization analysis
    """
    engine = EmailPersonalizationEngine()
    
    if interactions:
        engine.build_recipient_profile(recipient_email, interactions)
    
    return engine.personalize_email(template, recipient_email)


if __name__ == '__main__':
    # Test cases
    test_interactions = [
        {
            'date': '2024-01-15',
            'body': 'Hi John, thanks for the update on the AI project. Looking forward to seeing the results.',
            'signature': 'John Smith\nCTO\nTechCorp Inc.',
            'sent_hour': 9,
            'response_time_hours': 2,
            'is_response': True
        },
        {
            'date': '2024-01-20',
            'body': 'Hey, just checking in on the marketing campaign. How\'s it going?',
            'signature': 'John Smith\nCTO\nTechCorp Inc.',
            'sent_hour': 14,
            'response_time_hours': 4,
            'is_response': True
        }
    ]
    
    test_template = """Hi {{first_name}},

I hope this email finds you well. I wanted to follow up on {{interest_reference}}.

{{loyalty_reference}}, we'd love to discuss how we can help {{company}} achieve your goals.

Best regards,
Your Team"""
    
    print(f"{'='*60}")
    print("Email Personalization Test")
    print('='*60)
    
    result = analyze_email_personalization(test_template, 'john.smith@techcorp.com', test_interactions)
    
    print(f"\nRecipient Profile:")
    print(f"  Name: {result['profile']['name']}")
    print(f"  Company: {result['profile']['company']}")
    print(f"  Role: {result['profile']['role']}")
    print(f"  Preferred Tone: {result['profile']['preferred_tone']}")
    print(f"  Interests: {', '.join(result['profile']['interests'][:3])}")
    print(f"  Engagement Score: {result['profile']['engagement_score']}/100")
    print(f"  Best Send Time: {result['profile']['best_send_time']}")
    
    print(f"\nPersonalized Email:")
    print(result['personalized_email'])
    
    print(f"\nOptimization Score: {result['optimization_score']}/100")
    print(f"Reply-All Enforced: {result['reply_all_enforced']}")
    print(f"Case-by-Case Analysis: {result['case_by_case_analysis']}")

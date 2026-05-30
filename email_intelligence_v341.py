"""
Email Intelligence V341 - Tone Adaptation Engine
Automatically adapt email tone based on recipient relationship, cultural context,
and communication history for optimal engagement.
Enforces reply-all and case-by-case analysis.
"""

from datetime import datetime
from typing import Dict, List
import json


class EmailToneAdaptationEngine:
    """
    V341: Intelligent tone adaptation based on relationship dynamics,
    cultural context, and communication patterns.
    """
    
    VERSION = "V341"
    ENGINE_NAME = "Tone Adaptation Engine"
    
    def __init__(self):
        self.relationship_history = {}
        self.tone_preferences = {}
    
    def analyze_email(self, email_data: Dict) -> Dict:
        """Analyze email for tone adaptation case-by-case."""
        sender = email_data.get('from', '')
        content = email_data.get('body', '')
        subject = email_data.get('subject', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # Analyze relationship context
        relationship = self._analyze_relationship(sender)
        
        # Detect current tone
        current_tone = self._detect_tone(content)
        
        # Analyze cultural context
        cultural_context = self._analyze_cultural_context(sender, content)
        
        # Determine optimal tone
        optimal_tone = self._determine_optimal_tone(relationship, current_tone, cultural_context)
        
        # Generate tone adaptation recommendations
        adaptations = self._generate_tone_adaptations(current_tone, optimal_tone)
        
        analysis = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': timestamp,
            'sender': sender,
            'relationship': relationship,
            'current_tone': current_tone,
            'cultural_context': cultural_context,
            'optimal_tone': optimal_tone,
            'tone_adaptations': adaptations
        }
        
        # Track interaction
        self._track_interaction(sender, analysis)
        
        return analysis
    
    def generate_response(self, email_data: Dict) -> Dict:
        """Generate tone-adapted response. ALWAYS enforces reply-all."""
        sender = email_data.get('from', '')
        to_recipients = email_data.get('to', [])
        cc_recipients = email_data.get('cc', [])
        subject = email_data.get('subject', '')
        content = email_data.get('body', '')
        
        # Analyze email
        analysis = self.analyze_email(email_data)
        
        # ENFORCE REPLY-ALL
        all_recipients = self._enforce_reply_all(to_recipients, cc_recipients, sender)
        
        # Generate tone-adapted response
        response_body = self._generate_adapted_response(sender, content, analysis)
        
        response = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': datetime.now().isoformat(),
            'to': all_recipients,
            'subject': f"Re: {subject}" if not subject.lower().startswith('re:') else subject,
            'body': response_body,
            'tone_adapted': True,
            'relationship_level': analysis['relationship']['level'],
            'optimal_tone': analysis['optimal_tone']['tone'],
            'cultural_sensitivity': analysis['cultural_context']['sensitivity_level'],
            'reply_all_enforced': True
        }
        
        return response
    
    def _analyze_relationship(self, sender: str) -> Dict:
        """Analyze relationship with sender"""
        history = self.relationship_history.get(sender, [])
        
        if not history:
            return {
                'level': 'new',
                'interaction_count': 0,
                'familiarity': 'low',
                'formality': 'high'
            }
        
        interaction_count = len(history)
        
        # Determine relationship level
        if interaction_count < 5:
            level = 'acquaintance'
            familiarity = 'low'
            formality = 'medium'
        elif interaction_count < 20:
            level = 'colleague'
            familiarity = 'medium'
            formality = 'medium'
        elif interaction_count < 50:
            level = 'familiar'
            familiarity = 'high'
            formality = 'low'
        else:
            level = 'close'
            familiarity = 'very_high'
            formality = 'low'
        
        return {
            'level': level,
            'interaction_count': interaction_count,
            'familiarity': familiarity,
            'formality': formality
        }
    
    def _detect_tone(self, content: str) -> Dict:
        """Detect current email tone"""
        content_lower = content.lower()
        
        # Tone indicators
        formal_indicators = ['dear', 'sincerely', 'regards', 'respectfully', 'formal']
        casual_indicators = ['hey', 'hi', 'thanks', 'cheers', 'cool']
        friendly_indicators = ['hope you', 'great to', 'wonderful', 'excited']
        professional_indicators = ['please', 'kindly', 'appreciate', 'thank you']
        
        formal_score = sum(1 for ind in formal_indicators if ind in content_lower)
        casual_score = sum(1 for ind in casual_indicators if ind in content_lower)
        friendly_score = sum(1 for ind in friendly_indicators if ind in content_lower)
        professional_score = sum(1 for ind in professional_indicators if ind in content_lower)
        
        # Determine primary tone
        scores = {
            'formal': formal_score,
            'casual': casual_score,
            'friendly': friendly_score,
            'professional': professional_score
        }
        
        primary_tone = max(scores, key=scores.get)
        
        return {
            'tone': primary_tone,
            'scores': scores,
            'confidence': 'high' if max(scores.values()) > 3 else 'medium'
        }
    
    def _analyze_cultural_context(self, sender: str, content: str) -> Dict:
        """Analyze cultural context"""
        # Simple cultural detection based on domain
        domain = sender.split('@')[-1].lower() if '@' in sender else ''
        
        cultural_profiles = {
            '.jp': {'culture': 'japanese', 'formality': 'very_high', 'directness': 'low'},
            '.de': {'culture': 'german', 'formality': 'high', 'directness': 'high'},
            '.fr': {'culture': 'french', 'formality': 'high', 'directness': 'medium'},
            '.us': {'culture': 'american', 'formality': 'medium', 'directness': 'high'},
            '.uk': {'culture': 'british', 'formality': 'high', 'directness': 'medium'},
            '.in': {'culture': 'indian', 'formality': 'high', 'directness': 'medium'},
            '.cn': {'culture': 'chinese', 'formality': 'very_high', 'directness': 'low'},
            '.br': {'culture': 'brazilian', 'formality': 'medium', 'directness': 'medium'}
        }
        
        detected_culture = 'international'
        culture_profile = {'culture': 'international', 'formality': 'medium', 'directness': 'medium'}
        
        for tld, profile in cultural_profiles.items():
            if domain.endswith(tld):
                detected_culture = profile['culture']
                culture_profile = profile
                break
        
        return {
            'culture': detected_culture,
            'formality_expectation': culture_profile['formality'],
            'directness_preference': culture_profile['directness'],
            'sensitivity_level': 'high' if culture_profile['formality'] in ['very_high', 'high'] else 'medium'
        }
    
    def _determine_optimal_tone(self, relationship: Dict, current_tone: Dict, cultural_context: Dict) -> Dict:
        """Determine optimal tone for response"""
        # Base tone on relationship
        if relationship['level'] in ['close', 'familiar']:
            base_tone = 'friendly'
            formality = 'low'
        elif relationship['level'] == 'colleague':
            base_tone = 'professional'
            formality = 'medium'
        else:
            base_tone = 'professional'
            formality = 'high'
        
        # Adjust for cultural context
        if cultural_context['formality_expectation'] == 'very_high':
            formality = 'very_high'
            base_tone = 'formal'
        elif cultural_context['formality_expectation'] == 'high':
            formality = 'high'
            if base_tone == 'friendly':
                base_tone = 'professional'
        
        # Consider current tone
        if current_tone['tone'] == 'formal' and relationship['level'] not in ['new', 'acquaintance']:
            # Match formality but can be slightly warmer
            pass
        
        return {
            'tone': base_tone,
            'formality': formality,
            'directness': cultural_context['directness_preference'],
            'warmth': 'high' if relationship['familiarity'] in ['high', 'very_high'] else 'medium'
        }
    
    def _generate_tone_adaptations(self, current_tone: Dict, optimal_tone: Dict) -> List[str]:
        """Generate tone adaptation recommendations"""
        adaptations = []
        
        if current_tone['tone'] != optimal_tone['tone']:
            adaptations.append(f"Adapt from {current_tone['tone']} to {optimal_tone['tone']} tone")
        
        if optimal_tone['formality'] == 'very_high':
            adaptations.append("Use formal language and traditional greetings")
        elif optimal_tone['formality'] == 'high':
            adaptations.append("Maintain professional language with respectful tone")
        elif optimal_tone['formality'] == 'low':
            adaptations.append("Use conversational and approachable language")
        
        if optimal_tone['warmth'] == 'high':
            adaptations.append("Add personal touches and friendly expressions")
        
        if optimal_tone['directness'] == 'low':
            adaptations.append("Use indirect language and polite phrases")
        elif optimal_tone['directness'] == 'high':
            adaptations.append("Be clear and straightforward")
        
        return adaptations
    
    def _track_interaction(self, sender: str, analysis: Dict):
        """Track interaction for relationship building"""
        if sender not in self.relationship_history:
            self.relationship_history[sender] = []
        
        self.relationship_history[sender].append({
            'timestamp': analysis['timestamp'],
            'tone': analysis['current_tone']['tone'],
            'optimal_tone': analysis['optimal_tone']['tone']
        })
        
        # Keep only last 100 interactions
        if len(self.relationship_history[sender]) > 100:
            self.relationship_history[sender] = self.relationship_history[sender][-100:]
    
    def _generate_adapted_response(self, sender: str, content: str, analysis: Dict) -> str:
        """Generate tone-adapted response"""
        sender_name = sender.split('@')[0] if '@' in sender else sender
        
        optimal_tone = analysis['optimal_tone']
        relationship = analysis['relationship']
        
        # Adapt greeting based on tone
        if optimal_tone['tone'] == 'formal':
            greeting = f"Dear {sender_name},"
        elif optimal_tone['tone'] == 'professional':
            greeting = f"Hello {sender_name},"
        elif optimal_tone['tone'] == 'friendly':
            greeting = f"Hi {sender_name},"
        else:
            greeting = f"Hey {sender_name},"
        
        # Adapt closing
        if optimal_tone['formality'] in ['very_high', 'high']:
            closing = "Sincerely,\n[Your Name]"
        elif optimal_tone['formality'] == 'medium':
            closing = "Best regards,\n[Your Name]"
        else:
            closing = "Best,\n[Your Name]"
        
        response = f"""{greeting}

Thank you for your email. I've analyzed the optimal tone for our conversation:

Tone Analysis:
- Relationship Level: {relationship['level'].title()} ({relationship['interaction_count']} interactions)
- Current Tone: {analysis['current_tone']['tone'].title()}
- Optimal Tone: {optimal_tone['tone'].title()}
- Formality: {optimal_tone['formality'].replace('_', ' ').title()}
- Cultural Context: {analysis['cultural_context']['culture'].title()}

Adaptations Applied:
{chr(10).join('- ' + adaptation for adaptation in analysis['tone_adaptations'])}

I'll respond with the appropriate tone to ensure effective and culturally sensitive communication.

{closing}

---
This response was generated by {self.ENGINE_NAME} ({self.VERSION}) with tone adaptation.
Tone: {optimal_tone['tone']} | Formality: {optimal_tone['formality']} | Culture: {analysis['cultural_context']['culture']}
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
    
    def get_tone_stats(self) -> Dict:
        """Get tone adaptation statistics"""
        total_interactions = sum(len(history) for history in self.relationship_history.values())
        
        if total_interactions == 0:
            return {
                'version': self.VERSION,
                'engine': self.ENGINE_NAME,
                'message': 'No tone data tracked yet'
            }
        
        # Calculate tone distribution
        tone_counts = {}
        for history in self.relationship_history.values():
            for interaction in history:
                tone = interaction['tone']
                tone_counts[tone] = tone_counts.get(tone, 0) + 1
        
        return {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'total_interactions': total_interactions,
            'tone_distribution': tone_counts,
            'unique_contacts': len(self.relationship_history),
            'timestamp': datetime.now().isoformat()
        }


# Test the engine
if __name__ == "__main__":
    engine = EmailToneAdaptationEngine()
    
    test_email = {
        'from': 'colleague@company.com',
        'to': ['team@company.com'],
        'cc': ['manager@company.com'],
        'subject': 'Project Update',
        'body': 'Hi team, hope you\'re doing well! Just wanted to share a quick update on the project. Thanks!',
        'timestamp': datetime.now().isoformat()
    }
    
    print("=" * 60)
    print(f"Email Intelligence {engine.VERSION} - {engine.ENGINE_NAME}")
    print("=" * 60)
    
    analysis = engine.analyze_email(test_email)
    print("\n📧 Tone Analysis:")
    print(json.dumps(analysis, indent=2))
    
    response = engine.generate_response(test_email)
    print("\n📤 Generated Response:")
    print(json.dumps(response, indent=2))
    
    stats = engine.get_tone_stats()
    print("\n📊 Tone Statistics:")
    print(json.dumps(stats, indent=2))
    
    print("\n✅ Reply-All Enforcement: ACTIVE")
    print(f"✅ Recipients: {response['to']}")
    print("✅ Tone Adaptation: ENABLED")

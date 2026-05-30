"""
V144: AI Email Tone Analyzer & Adapter
Detects emotional tone and adapts replies to match or de-escalate.
"""
import re
import json
from enum import Enum
from typing import Dict, List, Optional, Tuple
from datetime import datetime


class Tone(Enum):
    FORMAL = "formal"
    CASUAL = "casual"
    URGENT = "urgent"
    FRUSTRATED = "frustrated"
    ENTHUSIASTIC = "enthusiastic"
    NEUTRAL = "neutral"
    APOLOGETIC = "apologetic"
    ASSERTIVE = "assertive"


class EmpathyLevel(Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"


class CulturalTone(Enum):
    DIRECT = "direct"  # US, Germany, Netherlands
    INDIRECT = "indirect"  # Japan, UK, India
    RELATIONAL = "relational"  # Latin America, Middle East


class ToneAnalyzer:
    """Analyzes email tone and suggests adaptive responses."""
    
    TONE_INDICATORS = {
        Tone.FORMAL: {
            'keywords': ['dear', 'sincerely', 'regards', 'respectfully', 'please be advised', 'per your request'],
            'patterns': [r'Dear (Mr|Mrs|Ms|Dr)\.', r'I would appreciate', r'Kind regards'],
            'weight': 0.7
        },
        Tone.CASUAL: {
            'keywords': ['hey', 'hi', 'thanks', 'cheers', 'no worries', 'btw', 'lol'],
            'patterns': [r'Hey \w+', r'Thanks!', r'Best,'],
            'weight': 0.7
        },
        Tone.URGENT: {
            'keywords': ['urgent', 'asap', 'immediately', 'critical', 'deadline', 'emergency', 'time-sensitive'],
            'patterns': [r'ASAP', r'URGENT:', r'deadline.*today', r'by \d+ (AM|PM)'],
            'weight': 0.9
        },
        Tone.FRUSTRATED: {
            'keywords': ['frustrated', 'disappointed', 'unacceptable', 'ridiculous', 'terrible', 'worst', 'again', 'still'],
            'patterns': [r'This is the \d+(st|nd|rd|th) time', r'Why is this (still|again)', r'!{2,}'],
            'weight': 0.8
        },
        Tone.ENTHUSIASTIC: {
            'keywords': ['excited', 'amazing', 'fantastic', 'wonderful', 'love', 'great', 'awesome', 'perfect'],
            'patterns': [r'!{1,3}', r'This is (great|amazing|awesome)', r"Can't wait"],
            'weight': 0.7
        },
        Tone.APOLOGETIC: {
            'keywords': ['sorry', 'apologize', 'apologies', 'regret', 'unfortunately', 'my mistake'],
            'patterns': [r'I (am|sincerely) sorry', r'Please accept my apologies', r'Unfortunately,'],
            'weight': 0.8
        },
        Tone.ASSERTIVE: {
            'keywords': ['must', 'need to', 'require', 'expect', 'demand', 'insist'],
            'patterns': [r'I (must|need to|require)', r'This (must|needs to) be', r'I expect'],
            'weight': 0.75
        }
    }
    
    DEESCALATION_PHRASES = {
        Tone.FRUSTRATED: [
            "I completely understand your frustration.",
            "I apologize for the inconvenience this has caused.",
            "Let me make this right for you immediately.",
            "Your concerns are valid, and I'm here to help.",
            "I appreciate your patience as we resolve this."
        ],
        Tone.URGENT: [
            "I understand this is time-sensitive and will prioritize it.",
            "I'm treating this as urgent and will respond within [timeframe].",
            "I've escalated this to ensure immediate attention."
        ],
        Tone.ASSERTIVE: [
            "I understand your requirements clearly.",
            "I'll ensure this is handled according to your specifications.",
            "Let me confirm the action items and deliverables."
        ]
    }
    
    def __init__(self):
        self.analysis_history: List[Dict] = []
        self.reply_all_enforcements = 0
        self.tone_adaptations = 0
        
    def analyze_tone(self, email_content: str, sender_context: Optional[Dict] = None) -> Dict:
        """Analyze email tone with case-by-case assessment."""
        content_lower = email_content.lower()
        
        # Score each tone
        tone_scores = {}
        for tone, indicators in self.TONE_INDICATORS.items():
            score = 0
            
            # Keyword matching
            for keyword in indicators['keywords']:
                if keyword in content_lower:
                    score += indicators['weight']
            
            # Pattern matching
            for pattern in indicators['patterns']:
                matches = len(re.findall(pattern, email_content, re.IGNORECASE))
                score += matches * 0.3
            
            if score > 0:
                tone_scores[tone] = min(score, 1.0)
        
        # Determine primary tone
        if tone_scores:
            primary_tone = max(tone_scores.items(), key=lambda x: x[1])
        else:
            primary_tone = (Tone.NEUTRAL, 0.5)
        
        # Calculate empathy level
        empathy_score = self._calculate_empathy_score(email_content, primary_tone[0])
        empathy_level = self._determine_empathy_level(empathy_score)
        
        # Detect cultural tone preference
        cultural_tone = self._detect_cultural_tone(email_content, sender_context)
        
        result = {
            'primary_tone': primary_tone[0],
            'tone_confidence': primary_tone[1],
            'all_tones': tone_scores,
            'empathy_level': empathy_level,
            'cultural_tone': cultural_tone,
            'requires_deescalation': primary_tone[0] in [Tone.FRUSTRATED, Tone.URGENT],
            'timestamp': datetime.now().isoformat()
        }
        
        self.analysis_history.append(result)
        return result
    
    def _calculate_empathy_score(self, content: str, tone: Tone) -> float:
        """Calculate empathy score based on content and tone."""
        score = 0.5  # Base score
        
        # Increase for frustrated/urgent tones
        if tone in [Tone.FRUSTRATED, Tone.URGENT]:
            score += 0.3
        
        # Check for emotional language
        emotional_words = ['feel', 'feeling', 'emotion', 'upset', 'concerned', 'worried']
        for word in emotional_words:
            if word in content.lower():
                score += 0.1
        
        # Check for personal context
        personal_indicators = ['my situation', 'personally', 'family', 'health']
        for indicator in personal_indicators:
            if indicator in content.lower():
                score += 0.15
        
        return min(score, 1.0)
    
    def _determine_empathy_level(self, score: float) -> EmpathyLevel:
        if score >= 0.7:
            return EmpathyLevel.HIGH
        elif score >= 0.4:
            return EmpathyLevel.MEDIUM
        return EmpathyLevel.LOW
    
    def _detect_cultural_tone(self, content: str, context: Optional[Dict]) -> CulturalTone:
        """Detect preferred cultural communication style."""
        # Direct indicators
        direct_phrases = ['get to the point', 'bottom line', 'straightforward']
        if any(phrase in content.lower() for phrase in direct_phrases):
            return CulturalTone.DIRECT
        
        # Indirect indicators
        indirect_phrases = ['perhaps', 'maybe', 'if possible', 'when convenient', 'would you mind']
        if sum(1 for phrase in indirect_phrases if phrase in content.lower()) >= 2:
            return CulturalTone.INDIRECT
        
        # Relational indicators
        relational_phrases = ['hope you are well', 'how are you', 'family', 'personal']
        if any(phrase in content.lower() for phrase in relational_phrases):
            return CulturalTone.RELATIONAL
        
        # Default based on context
        if context and context.get('region'):
            region = context['region'].lower()
            if region in ['us', 'germany', 'netherlands']:
                return CulturalTone.DIRECT
            elif region in ['japan', 'uk', 'india']:
                return CulturalTone.INDIRECT
            elif region in ['mexico', 'brazil', 'saudi arabia']:
                return CulturalTone.RELATIONAL
        
        return CulturalTone.DIRECT
    
    def adapt_response(self, original_tone: Dict, response_content: str, 
                      recipients: List[str]) -> Dict:
        """Adapt response tone to match or de-escalate."""
        primary_tone = original_tone['primary_tone']
        
        adapted_content = response_content
        
        # Apply de-escalation if needed
        if original_tone['requires_deescalation']:
            deescalation_phrase = self.DEESCALATION_PHRASES.get(primary_tone, ['I understand.'])[0]
            adapted_content = f"{deescalation_phrase}\n\n{adapted_content}"
            self.tone_adaptations += 1
        
        # Adjust formality
        if primary_tone == Tone.FORMAL:
            if not any(word in adapted_content.lower() for word in ['dear', 'sincerely', 'regards']):
                adapted_content = adapted_content.replace('Hi', 'Dear').replace('Thanks', 'Thank you')
        elif primary_tone == Tone.CASUAL:
            adapted_content = adapted_content.replace('Dear', 'Hi').replace('Thank you', 'Thanks')
        
        # Check reply-all enforcement
        reply_all_needed = len(recipients) > 1
        if reply_all_needed:
            self.reply_all_enforcements += 1
        
        return {
            'adapted_content': adapted_content,
            'tone_matched': primary_tone,
            'deescalation_applied': original_tone['requires_deescalation'],
            'reply_all_enforced': reply_all_needed,
            'cultural_adjustment': original_tone['cultural_tone'],
            'timestamp': datetime.now().isoformat()
        }
    
    def get_stats(self) -> Dict:
        """Get analyzer statistics."""
        total_analyses = len(self.analysis_history)
        if total_analyses == 0:
            return {'total_analyses': 0}
        
        tone_distribution = {}
        for analysis in self.analysis_history:
            tone = analysis['primary_tone'].value
            tone_distribution[tone] = tone_distribution.get(tone, 0) + 1
        
        return {
            'total_analyses': total_analyses,
            'tone_adaptations': self.tone_adaptations,
            'reply_all_enforcements': self.reply_all_enforcements,
            'tone_distribution': tone_distribution,
            'deescalation_rate': self.tone_adaptations / total_analyses
        }


def demo():
    """Demonstrate V144 tone analysis and adaptation."""
    analyzer = ToneAnalyzer()
    
    # Test case 1: Frustrated customer
    frustrated_email = """
    This is the THIRD time I'm contacting you about this issue! 
    Your service is terrible and I'm extremely frustrated. 
    I need this resolved ASAP or I'm canceling my account!
    """
    
    print("=" * 60)
    print("V144: AI Email Tone Analyzer & Adapter - Demo")
    print("=" * 60)
    print("\n[Case 1: Frustrated Customer Email]")
    print(f"Email: {frustrated_email.strip()[:100]}...")
    
    tone_analysis = analyzer.analyze_tone(frustrated_email)
    print(f"\nDetected Tone: {tone_analysis['primary_tone'].value}")
    print(f"Confidence: {tone_analysis['tone_confidence']:.2f}")
    print(f"Empathy Level: {tone_analysis['empathy_level'].value}")
    print(f"Requires De-escalation: {tone_analysis['requires_deescalation']}")
    
    response = "I've reviewed your account and will process your refund within 24 hours."
    adapted = analyzer.adapt_response(tone_analysis, response, ['customer@example.com', 'support@example.com'])
    
    print(f"\nOriginal Response: {response}")
    print(f"Adapted Response: {adapted['adapted_content']}")
    print(f"De-escalation Applied: {adapted['deescalation_applied']}")
    print(f"Reply-All Enforced: {adapted['reply_all_enforced']}")
    
    # Test case 2: Formal business inquiry
    formal_email = """
    Dear Mr. Johnson,
    
    I would appreciate it if you could provide the quarterly report 
    per your request from last week. Please be advised that the 
    deadline is Friday.
    
    Kind regards,
    Sarah
    """
    
    print("\n" + "=" * 60)
    print("\n[Case 2: Formal Business Email]")
    print(f"Email: {formal_email.strip()[:100]}...")
    
    tone_analysis = analyzer.analyze_tone(formal_email)
    print(f"\nDetected Tone: {tone_analysis['primary_tone'].value}")
    print(f"Confidence: {tone_analysis['tone_confidence']:.2f}")
    print(f"Cultural Tone: {tone_analysis['cultural_tone'].value}")
    
    response = "Here's the report you requested. Let me know if you need anything else."
    adapted = analyzer.adapt_response(tone_analysis, response, ['sarah@example.com'])
    
    print(f"\nOriginal Response: {response}")
    print(f"Adapted Response: {adapted['adapted_content']}")
    
    # Statistics
    print("\n" + "=" * 60)
    print("\n[Analyzer Statistics]")
    stats = analyzer.get_stats()
    for key, value in stats.items():
        print(f"{key}: {value}")


if __name__ == "__main__":
    demo()

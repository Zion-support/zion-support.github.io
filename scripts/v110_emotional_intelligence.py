#!/usr/bin/env python3
"""
V110: Emotional Intelligence Engine
Deep emotional analysis, stress detection, empathy scoring, and relationship health monitoring.
"""
import re, json
from datetime import datetime
from dataclasses import dataclass, field
from typing import List, Dict, Optional, Tuple

EMOTION_MAP = {
    "joy": ["happy", "great", "excellent", "wonderful", "amazing", "love", "fantastic", "thrilled", "delighted", "excited"],
    "gratitude": ["thank", "appreciate", "grateful", "thanks", "gratitude", "obliged", "indebted"],
    "frustration": ["frustrated", "annoyed", "irritated", "bothered", "tired of", "fed up", "sick of"],
    "anger": ["angry", "furious", "outraged", "unacceptable", "ridiculous", "disgusted", "livid"],
    "anxiety": ["worried", "anxious", "concerned", "nervous", "stressed", "overwhelmed", "panic"],
    "sadness": ["sad", "disappointed", "upset", "unfortunately", "regret", "sorry to hear", "unfortunate"],
    "confusion": ["confused", "unclear", "don\'t understand", "what does", "how does", "not sure what"],
    "urgency": ["urgent", "asap", "immediately", "deadline", "running out", "time-sensitive", "critical"],
    "trust": ["trust", "rely", "confidence", "depend", "believe", "faith", "count on"],
    "skepticism": ["doubt", "skeptical", "not convinced", "questionable", "uncertain", "hesitant", "unsure"]
}

CULTURE_ADAPTATIONS = {
    "us": {"formality": "moderate", "directness": "high", "greeting": "Hi/Hello"},
    "uk": {"formality": "high", "directness": "moderate", "greeting": "Dear/Good morning"},
    "japan": {"formality": "very_high", "directness": "low", "greeting": "Dear Sir/Madam"},
    "germany": {"formality": "high", "directness": "very_high", "greeting": "Sehr geehrte/r"},
    "brazil": {"formality": "moderate", "directness": "moderate", "greeting": "Prezado/a"},
    "india": {"formality": "high", "directness": "moderate", "greeting": "Respected Sir/Madam"},
    "china": {"formality": "very_high", "directness": "low", "greeting": "尊敬的"},
    "france": {"formality": "high", "directness": "moderate", "greeting": "Cher/Chère"},
}

@dataclass
class EmotionalProfile:
    primary_emotion: str
    secondary_emotions: List[str]
    sentiment_score: float  # -1 to 1
    stress_level: float  # 0 to 1
    empathy_needed: float  # 0 to 1
    formality_level: str
    culture_detected: str
    relationship_health: float  # 0 to 1
    conflict_risk: float  # 0 to 1
    recommended_tone: str
    de_escalation_needed: bool
    response_adaptations: List[str]

class EmotionalIntelligenceEngine:
    """V110: Deep emotional analysis for better human connections."""
    
    def __init__(self):
        self.interaction_history: Dict[str, List[Dict]] = {}
        self.relationship_scores: Dict[str, float] = {}
    
    def analyze_emotions(self, email: Dict) -> EmotionalProfile:
        """Perform deep emotional analysis on an email."""
        body = email.get("body", "").lower()
        sender = email.get("from", "")
        
        # Detect emotions
        emotion_scores = self._detect_emotions(body)
        primary = max(emotion_scores, key=emotion_scores.get) if emotion_scores else "neutral"
        secondary = sorted(emotion_scores.keys(), key=lambda k: emotion_scores[k], reverse=True)[1:3]
        
        # Sentiment
        sentiment = self._calculate_sentiment(emotion_scores)
        
        # Stress level
        stress = self._detect_stress(body, emotion_scores)
        
        # Empathy needed
        empathy = self._calculate_empathy_need(primary, stress, sentiment)
        
        # Culture detection
        culture = self._detect_culture(email)
        
        # Relationship health
        rel_health = self._assess_relationship_health(sender, sentiment, primary)
        
        # Conflict risk
        conflict = self._assess_conflict_risk(primary, stress, sentiment)
        
        # Tone recommendation
        tone = self._recommend_tone(primary, stress, culture, conflict)
        
        # De-escalation
        de_escalate = conflict > 0.6 or primary in ["anger", "frustration"]
        
        # Response adaptations
        adaptations = self._generate_adaptations(primary, culture, stress, de_escalate)
        
        return EmotionalProfile(
            primary_emotion=primary,
            secondary_emotions=secondary,
            sentiment_score=sentiment,
            stress_level=stress,
            empathy_needed=empathy,
            formality_level=CULTURE_ADAPTATIONS.get(culture, {}).get("formality", "moderate"),
            culture_detected=culture,
            relationship_health=rel_health,
            conflict_risk=conflict,
            recommended_tone=tone,
            de_escalation_needed=de_escalate,
            response_adaptations=adaptations
        )
    
    def _detect_emotions(self, text: str) -> Dict[str, float]:
        scores = {}
        for emotion, words in EMOTION_MAP.items():
            hits = sum(1 for w in words if w in text)
            if hits > 0:
                scores[emotion] = min(1.0, hits * 0.3)
        return scores if scores else {"neutral": 0.5}
    
    def _calculate_sentiment(self, emotions: Dict[str, float]) -> float:
        positive = ["joy", "gratitude", "trust"]
        negative = ["frustration", "anger", "anxiety", "sadness", "skepticism"]
        pos_score = sum(emotions.get(e, 0) for e in positive)
        neg_score = sum(emotions.get(e, 0) for e in negative)
        total = pos_score + neg_score
        if total == 0:
            return 0.0
        return round((pos_score - neg_score) / total, 2)
    
    def _detect_stress(self, text: str, emotions: Dict[str, float]) -> float:
        stress_indicators = ["urgent", "deadline", "asap", "overwhelm", "stress", "pressure", "!!", "...", "help"]
        hits = sum(1 for w in stress_indicators if w in text)
        emotion_stress = emotions.get("anxiety", 0) * 0.4 + emotions.get("urgency", 0) * 0.3 + emotions.get("frustration", 0) * 0.3
        return min(1.0, round(hits * 0.15 + emotion_stress, 2))
    
    def _calculate_empathy_need(self, primary: str, stress: float, sentiment: float) -> float:
        base = 0.3
        if primary in ["sadness", "frustration", "anger", "anxiety"]:
            base += 0.4
        base += stress * 0.2
        if sentiment < -0.3:
            base += 0.2
        return min(1.0, round(base, 2))
    
    def _detect_culture(self, email: Dict) -> str:
        domain = email.get("from", "").split("@")[-1].lower() if "@" in email.get("from", "") else ""
        tld_map = {".jp": "japan", ".uk": "uk", ".de": "germany", ".br": "brazil", ".in": "india", ".cn": "china", ".fr": "france"}
        for tld, country in tld_map.items():
            if domain.endswith(tld):
                return country
        return "us"
    
    def _assess_relationship_health(self, sender: str, sentiment: float, emotion: str) -> float:
        history = self.interaction_history.get(sender, [])
        base = 0.7
        if history:
            avg_sentiment = sum(h.get("sentiment", 0) for h in history) / len(history)
            base = 0.5 + avg_sentiment * 0.3
        if sentiment > 0.3:
            base += 0.1
        if emotion in ["anger", "frustration"]:
            base -= 0.2
        return max(0.0, min(1.0, round(base, 2)))
    
    def _assess_conflict_risk(self, primary: str, stress: float, sentiment: float) -> float:
        risk = 0.1
        if primary == "anger":
            risk += 0.5
        elif primary == "frustration":
            risk += 0.3
        risk += stress * 0.2
        if sentiment < -0.5:
            risk += 0.2
        return min(1.0, round(risk, 2))
    
    def _recommend_tone(self, primary: str, stress: float, culture: str, conflict: float) -> str:
        if conflict > 0.6:
            return "empathetic_and_de_escalating"
        if primary in ["joy", "gratitude"]:
            return "warm_and_appreciative"
        if stress > 0.7:
            return "reassuring_and_action_oriented"
        if primary in ["anxiety", "confusion"]:
            return "clear_and_supportive"
        culture_formality = CULTURE_ADAPTATIONS.get(culture, {}).get("formality", "moderate")
        if culture_formality in ["very_high", "high"]:
            return "professional_and_respectful"
        return "friendly_and_professional"
    
    def _generate_adaptations(self, primary: str, culture: str, stress: float, de_escalate: bool) -> List[str]:
        adaptations = []
        if de_escalate:
            adaptations.extend(["Acknowledge their feelings first", "Use calming language", "Offer concrete solutions", "Provide timeline for resolution"])
        if stress > 0.6:
            adaptations.extend(["Be concise and direct", "Provide clear next steps", "Offer immediate assistance"])
        culture_adapt = CULTURE_ADAPTATIONS.get(culture, {})
        if culture_adapt.get("formality") in ["very_high", "high"]:
            adaptations.append("Use formal greetings and closings")
        if culture_adapt.get("directness") == "low":
            adaptations.append("Use indirect, polite phrasing")
        if primary in ["joy", "gratitude"]:
            adaptations.append("Match their positive energy")
        return adaptations
    
    def track_interaction(self, sender: str, profile: EmotionalProfile):
        if sender not in self.interaction_history:
            self.interaction_history[sender] = []
        self.interaction_history[sender].append({
            "sentiment": profile.sentiment_score,
            "emotion": profile.primary_emotion,
            "stress": profile.stress_level,
            "timestamp": datetime.now().isoformat()
        })

if __name__ == "__main__":
    engine = EmotionalIntelligenceEngine()
    tests = [
        {"from": "angry@client.com", "subject": "Unacceptable service", "body": "I am absolutely furious! Your service has been terrible and I'm fed up with the constant issues. This is unacceptable and I demand immediate resolution!"},
        {"from": "happy@partner.jp", "subject": "Great collaboration", "body": "We are thrilled with the results! Thank you for your amazing work. The team is delighted and we look forward to continuing our partnership."},
        {"from": "stressed@startup.de", "subject": "Deadline approaching", "body": "We are very concerned about the upcoming deadline. The team is overwhelmed and we need urgent help. Please advise on next steps immediately."}
    ]
    print("=" * 60)
    print("V110: Emotional Intelligence Engine")
    print("=" * 60)
    for i, email in enumerate(tests, 1):
        profile = engine.analyze_emotions(email)
        engine.track_interaction(email["from"], profile)
        print(f"\n--- Email #{i}: {email['subject']} ---")
        print(f"  Primary Emotion: {profile.primary_emotion}")
        print(f"  Secondary: {profile.secondary_emotions}")
        print(f"  Sentiment: {profile.sentiment_score}")
        print(f"  Stress: {profile.stress_level}")
        print(f"  Empathy Needed: {profile.empathy_needed}")
        print(f"  Culture: {profile.culture_detected}")
        print(f"  Tone: {profile.recommended_tone}")
        print(f"  De-escalation: {profile.de_escalation_needed}")
        print(f"  Adaptations: {profile.response_adaptations}")

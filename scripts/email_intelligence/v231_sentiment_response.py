#!/usr/bin/env python3
"""V231 - AI Email Sentiment Response Generator
Analyze sender emotional state and generate calibrated responses
to de-escalate tension, build rapport, or match enthusiasm.
Always enforces reply-all for multi-recipient emails.
"""
import json, re, datetime
from dataclasses import dataclass, field
from typing import List, Dict

@dataclass
class EmotionalProfile:
    dominant_emotion: str
    intensity: float
    trigger_topics: List[str]
    relationship_risk: str

class EmotionAnalyzer:
    EMOTION_LEXICON = {
        "anger": {"words": ["furious", "outraged", "unacceptable", "ridiculous", "appalling", "frustrating", "infuriating"], "intensity_mult": 1.5},
        "frustration": {"words": ["frustrated", "annoyed", "tired of", "again", "still not", "why cant", "how many times"], "intensity_mult": 1.2},
        "disappointment": {"words": ["disappointed", "let down", "expected", "hoped", "promised", "unfortunately"], "intensity_mult": 1.0},
        "anxiety": {"words": ["worried", "concerned", "anxious", "nervous", "uncertain", "what if", "deadline"], "intensity_mult": 1.1},
        "happiness": {"words": ["great", "excellent", "fantastic", "amazing", "love", "thrilled", "delighted"], "intensity_mult": 1.0},
        "gratitude": {"words": ["thank", "appreciate", "grateful", "wonderful", "kind", "helpful"], "intensity_mult": 0.8},
        "urgency": {"words": ["asap", "immediately", "urgent", "critical", "emergency", "deadline", "time-sensitive"], "intensity_mult": 1.3},
    }
    
    def analyze(self, text: str) -> EmotionalProfile:
        text_lower = text.lower()
        scores = {}
        triggers = []
        
        for emotion, data in self.EMOTION_LEXICON.items():
            count = sum(1 for w in data["words"] if w in text_lower)
            if count > 0:
                scores[emotion] = count * data["intensity_mult"]
                triggers.append(emotion)
        
        if not scores:
            return EmotionalProfile("neutral", 0.3, [], "low")
        
        dominant = max(scores, key=scores.get)
        intensity = min(1.0, scores[dominant] / 3.0)
        
        negative = {"anger", "frustration", "disappointment"}
        risk = "high" if dominant in negative and intensity > 0.6 else "medium" if dominant in negative else "low"
        
        return EmotionalProfile(dominant, round(intensity, 2), triggers, risk)

class ResponseCalibrator:
    RESPONSE_TEMPLATES = {
        "anger": {
            "open": "I completely understand your frustration, and I want you to know we take this very seriously.",
            "strategy": "Acknowledge → Apologize → Action plan → Timeline",
            "close": "I will personally ensure this is resolved and will update you within [TIMEFRAME].",
            "avoid": ["Don't make excuses", "Don't blame others", "Don't minimize the issue"],
        },
        "frustration": {
            "open": "I hear you, and I understand this has been a recurring issue. Let me address it directly.",
            "strategy": "Empathize → Explain root cause → Concrete fix → Prevention",
            "close": "I've put measures in place to prevent this from happening again. Here's what you can expect:",
            "avoid": ["Don't repeat the same apology", "Don't be vague about solutions"],
        },
        "disappointment": {
            "open": "I understand this didn't meet your expectations, and I appreciate you sharing that with me.",
            "strategy": "Validate → Understand gap → Bridge the gap → Exceed expectations",
            "close": "I'd like to make this right. Here's what I propose:",
            "avoid": ["Don't over-promise", "Don't dismiss their experience"],
        },
        "anxiety": {
            "open": "Thank you for raising this concern. Let me provide some clarity and reassurance.",
            "strategy": "Reassure → Provide facts → Create certainty → Offer support",
            "close": "I'm here to support you through this. Please don't hesitate to reach out anytime.",
            "avoid": ["Don't be dismissive", "Don't add uncertainty"],
        },
        "happiness": {
            "open": "That's wonderful to hear! I'm thrilled we could deliver a great experience.",
            "strategy": "Celebrate → Reinforce → Ask for referral → Next steps",
            "close": "We're always here if you need anything else. Looking forward to continuing our partnership!",
            "avoid": ["Don't be overly sales-y", "Don't underplay their satisfaction"],
        },
        "gratitude": {
            "open": "You're very welcome! It was our pleasure to help.",
            "strategy": "Accept → Reinforce value → Strengthen relationship → Future offer",
            "close": "Don't hesitate to reach out anytime — we're always happy to help!",
            "avoid": ["Don't be too brief", "Don't miss the relationship-building opportunity"],
        },
        "urgency": {
            "open": "I understand the urgency and am prioritizing this right now.",
            "strategy": "Acknowledge urgency → Immediate action → Clear timeline → Follow-up plan",
            "close": "I'll provide an update within [TIMEFRAME]. You have my full attention on this.",
            "avoid": ["Don't delay response", "Don't be vague about timing"],
        },
        "neutral": {
            "open": "Thank you for your email.",
            "strategy": "Address directly → Provide value → Next steps",
            "close": "Please let me know if you have any questions.",
            "avoid": [],
        },
    }
    
    def calibrate(self, profile: EmotionalProfile, context: str = "") -> Dict:
        template = self.RESPONSE_TEMPLATES.get(profile.dominant_emotion, self.RESPONSE_TEMPLATES["neutral"])
        return {
            "opening": template["open"],
            "strategy": template["strategy"],
            "closing": template["close"],
            "things_to_avoid": template["avoid"],
            "tone_recommendation": self._get_tone(profile),
        }
    
    def _get_tone(self, profile: EmotionalProfile) -> str:
        tones = {
            "anger": "Calm, empathetic, solution-focused. Lower formality to show sincerity.",
            "frustration": "Direct, accountable, action-oriented. Show you understand the history.",
            "disappointment": "Warm, understanding, generous. Offer more than expected.",
            "anxiety": "Reassuring, factual, structured. Provide certainty and clarity.",
            "happiness": "Enthusiastic, celebratory, forward-looking. Match their energy.",
            "gratitude": "Warm, genuine, relationship-building. Deepen the connection.",
            "urgency": "Crisp, decisive, time-specific. Show immediate action.",
            "neutral": "Professional, helpful, efficient.",
        }
        return tones.get(profile.dominant_emotion, tones["neutral"])

class SentimentResponseEngine:
    def __init__(self):
        self.analyzer = EmotionAnalyzer()
        self.calibrator = ResponseCalibrator()
    
    def generate_response_guide(self, email: Dict, recipients: List[str] = None) -> Dict:
        body = email.get("body", "")
        profile = self.analyzer.analyze(body)
        calibration = self.calibrator.calibrate(profile, body)
        
        return {
            "email_id": email.get("id", ""),
            "sender_emotion": profile.__dict__,
            "response_guide": calibration,
            "reply_all_required": len(recipients or []) > 1,
            "timestamp": datetime.datetime.now().isoformat()
        }

if __name__ == "__main__":
    engine = SentimentResponseEngine()
    angry = {"id": "e1", "body": "I am absolutely furious! This is the THIRD time this month the system has gone down. It's completely unacceptable and costing us thousands per hour. I demand an immediate explanation and resolution!"}
    happy = {"id": "e2", "body": "This is fantastic! Your team delivered an amazing solution. We're thrilled with the results and the ROI has been incredible. Thank you so much!"}
    for e in [angry, happy]:
        result = engine.generate_response_guide(e, ["sender@co.com", "manager@zion.com"])
        print(json.dumps(result, indent=2))
        print("---")

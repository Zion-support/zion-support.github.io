#!/usr/bin/env python3
"""
V430: AI Email Language and Tone Detector
Detects email language, analyzes tone appropriateness for recipient,
and suggests adjustments. Case-by-case analysis.
Enforces reply-all for multi-recipient emails.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Optional


class V430LanguageToneDetector:
    """Detects language and analyzes tone appropriateness"""
    
    # Language detection patterns (simplified)
    LANGUAGE_PATTERNS = {
        "english": {
            "common_words": ["the", "is", "are", "was", "were", "have", "has", "will", "would", "could", "should"],
            "greetings": ["hello", "hi", "dear", "good morning", "good afternoon"],
            "closings": ["regards", "sincerely", "best", "thanks", "thank you"]
        },
        "spanish": {
            "common_words": ["el", "la", "los", "las", "es", "son", "está", "están", "hola", "gracias"],
            "greetings": ["hola", "buenos días", "buenas tardes", "estimado"],
            "closings": ["saludos", "atentamente", "gracias", "hasta pronto"]
        },
        "french": {
            "common_words": ["le", "la", "les", "est", "sont", "avoir", "être", "bonjour", "merci"],
            "greetings": ["bonjour", "bonsoir", "cher", "chère"],
            "closings": ["cordialement", "salutations", "merci", "à bientôt"]
        },
        "german": {
            "common_words": ["der", "die", "das", "ist", "sind", "haben", "sein", "hallo", "danke"],
            "greetings": ["hallo", "guten tag", "sehr geehrte"],
            "closings": ["mit freundlichen grüßen", "viele grüße", "danke"]
        },
        "portuguese": {
            "common_words": ["o", "a", "os", "as", "é", "são", "está", "olá", "obrigado", "obrigada"],
            "greetings": ["olá", "bom dia", "boa tarde", "prezado"],
            "closings": ["atenciosamente", "obrigado", "obrigada", "até logo"]
        }
    }
    
    # Tone indicators for different contexts
    TONE_CONTEXTS = {
        "formal_business": {
            "appropriate": ["dear", "sincerely", "regards", "please", "thank you", "appreciate"],
            "inappropriate": ["hey", "lol", "btw", "omg", "!!!", "..."],
            "expected_formality": "high"
        },
        "casual_business": {
            "appropriate": ["hi", "hello", "thanks", "best", "cheers"],
            "inappropriate": ["dude", "bro", "yo", "wanna", "gonna"],
            "expected_formality": "medium"
        },
        "technical": {
            "appropriate": ["please", "note", "reference", "regarding", "concerning"],
            "inappropriate": ["stuff", "things", "whatever"],
            "expected_formality": "medium"
        },
        "customer_service": {
            "appropriate": ["thank you", "appreciate", "happy to help", "please", "sorry"],
            "inappropriate": ["not my problem", "your fault", "obviously", "should have"],
            "expected_formality": "medium"
        }
    }
    
    # Recipient types and expected tone
    RECIPIENT_TYPES = {
        "executive": {
            "keywords": ["ceo", "cto", "cfo", "president", "vp", "director"],
            "expected_tone": "formal_business",
            "formality_level": "high"
        },
        "client": {
            "keywords": ["client", "customer", "partner"],
            "expected_tone": "customer_service",
            "formality_level": "high"
        },
        "colleague": {
            "keywords": ["team", "colleague", "peer"],
            "expected_tone": "casual_business",
            "formality_level": "medium"
        },
        "vendor": {
            "keywords": ["vendor", "supplier", "provider"],
            "expected_tone": "formal_business",
            "formality_level": "medium"
        },
        "technical_support": {
            "keywords": ["support", "help desk", "it"],
            "expected_tone": "technical",
            "formality_level": "medium"
        }
    }
    
    def detect_language(self, text: str) -> Dict:
        """Detect email language"""
        text_lower = text.lower()
        word_count = len(text.split())
        
        if word_count < 5:
            return {
                "language": "unknown",
                "confidence": 0.0,
                "reason": "Text too short for reliable detection"
            }
        
        scores = {}
        
        for language, patterns in self.LANGUAGE_PATTERNS.items():
            score = 0
            
            # Check common words
            common_matches = sum(1 for word in patterns["common_words"] if f" {word} " in f" {text_lower} ")
            score += common_matches
            
            # Check greetings
            greeting_matches = sum(1 for greeting in patterns["greetings"] if greeting in text_lower)
            score += greeting_matches * 2
            
            # Check closings
            closing_matches = sum(1 for closing in patterns["closings"] if closing in text_lower)
            score += closing_matches * 2
            
            scores[language] = score
        
        # Find best match
        if scores and max(scores.values()) > 0:
            detected_language = max(scores, key=scores.get)
            confidence = scores[detected_language] / (word_count * 0.3)  # Normalize
            confidence = min(confidence, 1.0)
            
            return {
                "language": detected_language,
                "confidence": round(confidence, 2),
                "scores": scores,
                "reason": f"Detected {scores[detected_language]} language indicators"
            }
        else:
            return {
                "language": "unknown",
                "confidence": 0.0,
                "reason": "No clear language pattern detected"
            }
    
    def identify_recipient_type(self, email: Dict) -> Dict:
        """Identify recipient type based on email content"""
        text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        recipients = email.get('to', [])
        
        scores = {}
        
        for recipient_type, config in self.RECIPIENT_TYPES.items():
            score = 0
            
            # Check keywords in text
            keyword_matches = sum(1 for kw in config["keywords"] if kw in text)
            score += keyword_matches
            
            # Check recipient email patterns
            for recipient in recipients:
                for kw in config["keywords"]:
                    if kw in recipient.lower():
                        score += 2
            
            if score > 0:
                scores[recipient_type] = {
                    "score": score,
                    "expected_tone": config["expected_tone"],
                    "formality_level": config["formality_level"]
                }
        
        if scores:
            best_match = max(scores, key=lambda x: scores[x]["score"])
            return {
                "type": best_match,
                "confidence": round(scores[best_match]["score"] / 10, 2),
                "expected_tone": scores[best_match]["expected_tone"],
                "formality_level": scores[best_match]["formality_level"],
                "all_scores": scores
            }
        else:
            return {
                "type": "general",
                "confidence": 0.5,
                "expected_tone": "casual_business",
                "formality_level": "medium",
                "all_scores": {}
            }
    
    def analyze_tone_appropriateness(self, text: str, expected_tone: str) -> Dict:
        """Analyze if tone is appropriate for recipient"""
        text_lower = text.lower()
        
        if expected_tone not in self.TONE_CONTEXTS:
            return {
                "appropriate": True,
                "score": 1.0,
                "reason": "No specific tone requirements"
            }
        
        tone_config = self.TONE_CONTEXTS[expected_tone]
        
        # Count appropriate indicators
        appropriate_count = sum(1 for word in tone_config["appropriate"] if word in text_lower)
        
        # Count inappropriate indicators
        inappropriate_count = sum(1 for word in tone_config["inappropriate"] if word in text_lower)
        
        # Calculate appropriateness score
        total_indicators = appropriate_count + inappropriate_count
        if total_indicators > 0:
            score = appropriate_count / total_indicators
        else:
            score = 0.7  # Neutral if no indicators found
        
        # Determine appropriateness
        appropriate = score >= 0.6
        
        # Generate recommendations
        recommendations = []
        if not appropriate:
            if inappropriate_count > appropriate_count:
                recommendations.append(f"Reduce informal language for {expected_tone} tone")
                recommendations.append(f"Add more {expected_tone} language indicators")
        
        return {
            "appropriate": appropriate,
            "score": round(score, 2),
            "appropriate_indicators": appropriate_count,
            "inappropriate_indicators": inappropriate_count,
            "expected_tone": expected_tone,
            "recommendations": recommendations
        }
    
    def suggest_tone_adjustments(self, text: str, analysis: Dict) -> List[str]:
        """Suggest specific tone adjustments"""
        suggestions = []
        
        if not analysis["tone"]["appropriate"]:
            suggestions.extend(analysis["tone"]["recommendations"])
        
        # Language-specific suggestions
        if analysis["language"]["language"] != "english" and analysis["language"]["confidence"] > 0.7:
            suggestions.append(f"Consider responding in {analysis['language']['language']}")
        
        # Formality adjustments
        if analysis["recipient"]["formality_level"] == "high":
            if "hi" in text.lower() and "dear" not in text.lower():
                suggestions.append("Use 'Dear' instead of 'Hi' for high formality")
            if "thanks" in text.lower() and "thank you" not in text.lower():
                suggestions.append("Use 'Thank you' instead of 'Thanks' for high formality")
        
        return suggestions
    
    def process(self, email: Dict) -> Dict:
        """Process email and analyze language/tone"""
        text = f"{email.get('subject', '')} {email.get('body', '')}"
        recipients = email.get('to', [])
        cc = email.get('cc', [])
        
        # Detect language
        language = self.detect_language(text)
        
        # Identify recipient type
        recipient = self.identify_recipient_type(email)
        
        # Analyze tone appropriateness
        tone = self.analyze_tone_appropriateness(text, recipient["expected_tone"])
        
        analysis = {
            "language": language,
            "recipient": recipient,
            "tone": tone
        }
        
        # Generate suggestions
        suggestions = self.suggest_tone_adjustments(text, analysis)
        
        # Check reply-all
        all_recipients = list(set(recipients + cc))
        should_reply_all = len(all_recipients) > 1
        
        result = {
            "engine": "V430 Language and Tone Detector",
            "timestamp": datetime.now().isoformat(),
            "analysis": analysis,
            "suggestions": suggestions,
            "overall_appropriateness": tone["appropriate"],
            "reply_all_enforced": should_reply_all,
            "reply_all_reason": f"Email to {len(all_recipients)} recipients" if should_reply_all else "Single recipient"
        }
        
        return result


if __name__ == "__main__":
    test_email = {
        "sender": "employee@company.com",
        "subject": "Quick question about project",
        "body": "Hey CEO,\n\nJust wanted to check on the project status. Can you send me the latest report when you get a chance?\n\nThanks!\nJohn",
        "to": ["ceo@company.com"],
        "cc": ["assistant@company.com"]
    }
    
    detector = V430LanguageToneDetector()
    result = detector.process(test_email)
    print(json.dumps(result, indent=2))

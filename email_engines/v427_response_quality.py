#!/usr/bin/env python3
"""
V427: AI Email Response Quality Analyzer
Analyzes draft responses for quality, tone, completeness, and suggests
improvements. Ensures all questions are answered and tone is appropriate.
Enforces reply-all for multi-recipient responses.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Optional


class V427ResponseQuality:
    """Analyzes and improves email response quality"""
    
    TONE_INDICATORS = {
        "professional": {
            "positive": ["please", "thank you", "appreciate", "regards", "sincerely"],
            "negative": ["!", "!!", "lol", "btw", "omg", "...", "haha"]
        },
        "friendly": {
            "positive": ["hi", "hello", "thanks", "great", "happy to help", "no problem"],
            "negative": ["demand", "require", "must", "immediately"]
        },
        "empathetic": {
            "positive": ["understand", "sorry", "apologize", "frustrating", "concern", "help"],
            "negative": ["not my problem", "your fault", "should have", "obviously"]
        }
    }
    
    COMPLETENESS_CHECKS = {
        "greeting": r'^(?:hi|hello|dear|good\s+(?:morning|afternoon|evening))\s+\w+',
        "closing": r'(?:thanks|regards|best|sincerely|cheers)',
        "signature": r'(?:best regards|sincerely|thanks)\s*,?\s*\n\s*[A-Z]\w+',
        "action_items": r'(?:please|could you|let me know|we will|next steps)',
        "timeline": r'(?:by|within|before|after|tomorrow|today|this week|next week)'
    }
    
    def analyze_tone(self, text: str) -> Dict:
        """Analyze email tone"""
        text_lower = text.lower()
        tone_scores = {}
        
        for tone_type, indicators in self.TONE_INDICATORS.items():
            positive_count = sum(1 for word in indicators["positive"] if word in text_lower)
            negative_count = sum(1 for word in indicators["negative"] if word in text_lower)
            
            score = positive_count - negative_count
            tone_scores[tone_type] = {
                "score": score,
                "positive_matches": positive_count,
                "negative_matches": negative_count
            }
        
        # Determine dominant tone
        if tone_scores:
            dominant_tone = max(tone_scores, key=lambda x: tone_scores[x]["score"])
            tone_quality = "GOOD" if tone_scores[dominant_tone]["score"] >= 2 else "NEEDS_IMPROVEMENT"
        else:
            dominant_tone = "professional"
            tone_quality = "NEUTRAL"
        
        return {
            "dominant_tone": dominant_tone,
            "quality": tone_quality,
            "scores": tone_scores,
            "recommendations": self._generate_tone_recommendations(tone_scores)
        }
    
    def _generate_tone_recommendations(self, scores: Dict) -> List[str]:
        """Generate tone improvement recommendations"""
        recommendations = []
        
        for tone_type, score_data in scores.items():
            if score_data["negative_matches"] > score_data["positive_matches"]:
                recommendations.append(f"Reduce informal language for {tone_type} tone")
            elif score_data["score"] < 1:
                recommendations.append(f"Add more {tone_type} language indicators")
        
        return recommendations
    
    def check_completeness(self, original_email: Dict, response: str) -> Dict:
        """Check if response addresses all points in original email"""
        original_text = f"{original_email.get('subject', '')} {original_email.get('body', '')}"
        
        # Extract questions from original
        questions = re.findall(r'[^.!?]*\?[^.!?]*', original_text)
        
        # Check for question marks in response (indicates answers)
        response_questions = response.count('?')
        
        # Check completeness elements
        completeness = {}
        for element, pattern in self.COMPLETENESS_CHECKS.items():
            completeness[element] = bool(re.search(pattern, response, re.IGNORECASE | re.MULTILINE))
        
        # Calculate completeness score
        completeness_score = sum(completeness.values()) / len(completeness)
        
        # Check if questions were addressed
        questions_addressed = len(questions) == 0 or response_questions >= len(questions) * 0.5
        
        return {
            "completeness_score": round(completeness_score, 2),
            "elements_present": completeness,
            "original_questions": len(questions),
            "response_questions": response_questions,
            "questions_addressed": questions_addressed,
            "missing_elements": [k for k, v in completeness.items() if not v]
        }
    
    def check_length_appropriateness(self, original_email: Dict, response: str) -> Dict:
        """Check if response length is appropriate"""
        original_length = len(original_email.get('body', '').split())
        response_length = len(response.split())
        
        # Calculate ratio
        ratio = response_length / max(original_length, 1)
        
        # Determine appropriateness
        if ratio < 0.3:
            appropriateness = "TOO_SHORT"
            recommendation = "Response may be too brief. Add more detail."
        elif ratio > 3.0:
            appropriateness = "TOO_LONG"
            recommendation = "Response may be too verbose. Consider being more concise."
        else:
            appropriateness = "APPROPRIATE"
            recommendation = "Response length is appropriate."
        
        return {
            "original_word_count": original_length,
            "response_word_count": response_length,
            "ratio": round(ratio, 2),
            "appropriateness": appropriateness,
            "recommendation": recommendation
        }
    
    def generate_improvements(self, response: str, analysis: Dict) -> List[str]:
        """Generate specific improvement suggestions"""
        improvements = []
        
        # Tone improvements
        if analysis["tone"]["quality"] == "NEEDS_IMPROVEMENT":
            improvements.extend(analysis["tone"]["recommendations"])
        
        # Completeness improvements
        missing = analysis["completeness"]["missing_elements"]
        if "greeting" in missing:
            improvements.append("Add a professional greeting")
        if "closing" in missing:
            improvements.append("Add a professional closing")
        if "action_items" in missing:
            improvements.append("Include clear action items or next steps")
        if "timeline" in missing:
            improvements.append("Add timeline or deadline information")
        
        # Length improvements
        if analysis["length"]["appropriateness"] == "TOO_SHORT":
            improvements.append("Expand response with more details and context")
        elif analysis["length"]["appropriateness"] == "TOO_LONG":
            improvements.append("Condense response - remove redundant information")
        
        # Question addressing
        if not analysis["completeness"]["questions_addressed"]:
            improvements.append("Ensure all questions from original email are answered")
        
        return improvements
    
    def process(self, original_email: Dict, response: str) -> Dict:
        """Process response and provide quality analysis"""
        recipients = original_email.get('to', [])
        cc = original_email.get('cc', [])
        
        # Analyze response
        tone = self.analyze_tone(response)
        completeness = self.check_completeness(original_email, response)
        length = self.check_length_appropriateness(original_email, response)
        
        analysis = {
            "tone": tone,
            "completeness": completeness,
            "length": length
        }
        
        # Generate improvements
        improvements = self.generate_improvements(response, analysis)
        
        # Calculate overall quality score
        scores = [
            1.0 if tone["quality"] == "GOOD" else 0.5,
            completeness["completeness_score"],
            1.0 if length["appropriateness"] == "APPROPRIATE" else 0.6
        ]
        overall_score = sum(scores) / len(scores)
        
        # Check reply-all
        all_recipients = list(set(recipients + cc))
        should_reply_all = len(all_recipients) > 1
        
        result = {
            "engine": "V427 Response Quality Analyzer",
            "timestamp": datetime.now().isoformat(),
            "overall_quality": round(overall_score, 2),
            "quality_level": "EXCELLENT" if overall_score >= 0.8 else "GOOD" if overall_score >= 0.6 else "NEEDS_IMPROVEMENT",
            "analysis": analysis,
            "improvements": improvements,
            "reply_all_enforced": should_reply_all,
            "reply_all_reason": f"Response to {len(all_recipients)} recipients" if should_reply_all else "Single recipient"
        }
        
        return result


if __name__ == "__main__":
    original = {
        "sender": "customer@example.com",
        "subject": "Question about pricing and features",
        "body": "Hi,\n\nI'm interested in your product. Can you tell me:\n1. What's the pricing?\n2. Do you offer a free trial?\n3. What features are included?\n\nThanks,\nJohn",
        "to": ["sales@company.com"],
        "cc": ["manager@company.com"]
    }
    
    response = """Hi John,

Thank you for your interest in our product! I'm happy to help with your questions.

1. Our pricing starts at $99/month for the basic plan and $299/month for the professional plan.
2. Yes, we offer a 14-day free trial with full access to all features.
3. The basic plan includes email support, 5 users, and core features. The professional plan adds priority support, unlimited users, and advanced analytics.

Please let me know if you'd like to schedule a demo or have any other questions.

Best regards,
Sarah"""
    
    analyzer = V427ResponseQuality()
    result = analyzer.process(original, response)
    print(json.dumps(result, indent=2))

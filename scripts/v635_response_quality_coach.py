#!/usr/bin/env python3
"""V635 - Response Quality Coach
Provide real-time feedback on email response quality with tone, clarity, and professionalism scoring.
REPLY-ALL ENFORCED: Always replies to all recipients in multi-person threads.
"""
import json
from datetime import datetime
from typing import Dict, List, Any

class ResponseQualityCoach:
    """Coach users on email response quality."""
    
    QUALITY_DIMENSIONS = {
        "clarity": ["clear", "concise", "specific", "actionable"],
        "tone": ["professional", "friendly", "empathetic", "respectful"],
        "completeness": ["addresses all points", "provides context", "includes next steps"],
        "professionalism": ["proper grammar", "appropriate language", "formal structure"]
    }
    
    COMMON_ISSUES = {
        "too_brief": "Response may be too brief - consider adding more context",
        "too_long": "Response is quite long - consider summarizing key points",
        "unclear_cta": "Call to action could be clearer",
        "missing_greeting": "Consider adding a greeting",
        "missing_signature": "Consider adding a professional signature"
    }
    
    def __init__(self):
        self.coaching_sessions = []
    
    def coach_response(self, email: Dict[str, Any], response_draft: str) -> Dict[str, Any]:
        """Coach user on response quality."""
        # Analyze response dimensions
        clarity_score = self._analyze_clarity(response_draft)
        tone_score = self._analyze_tone(response_draft)
        completeness_score = self._analyze_completeness(email, response_draft)
        professionalism_score = self._analyze_professionalism(response_draft)
        
        # Overall quality score
        overall_score = self._calculate_overall_score(
            clarity_score, tone_score, completeness_score, professionalism_score
        )
        
        # Identify issues
        issues = self._identify_issues(response_draft, email)
        
        # Generate suggestions
        suggestions = self._generate_suggestions(
            clarity_score, tone_score, completeness_score, professionalism_score, issues
        )
        
        # Improved version
        improved_version = self._generate_improved_version(response_draft, suggestions)
        
        return {
            "engine": "V635",
            "original_email_subject": email.get("subject", ""),
            "response_draft": response_draft,
            "quality_scores": {
                "clarity": round(clarity_score, 1),
                "tone": round(tone_score, 1),
                "completeness": round(completeness_score, 1),
                "professionalism": round(professionalism_score, 1),
                "overall": round(overall_score, 1)
            },
            "issues_identified": issues,
            "improvement_suggestions": suggestions,
            "improved_version": improved_version,
            "quality_grade": self._get_quality_grade(overall_score),
            "reply_all_enforced": len(email.get("to", []) + email.get("cc", [])) > 1,
            "timestamp": datetime.now().isoformat()
        }
    
    def _analyze_clarity(self, response: str) -> float:
        """Analyze response clarity."""
        score = 75.0
        
        # Check sentence length
        sentences = response.split('.')
        avg_sentence_length = sum(len(s.split()) for s in sentences) / max(len(sentences), 1)
        
        if 10 <= avg_sentence_length <= 20:
            score += 15
        elif avg_sentence_length > 25:
            score -= 10
        
        # Check for specific language
        vague_words = ["thing", "stuff", "something", "maybe", "probably"]
        vague_count = sum(1 for word in vague_words if word in response.lower())
        score -= vague_count * 5
        
        # Check for action verbs
        action_verbs = ["will", "can", "should", "must", "need to"]
        has_actions = any(verb in response.lower() for verb in action_verbs)
        if has_actions:
            score += 10
        
        return max(50, min(100, score))
    
    def _analyze_tone(self, response: str) -> float:
        """Analyze response tone."""
        score = 75.0
        response_lower = response.lower()
        
        # Check for positive language
        positive_words = ["thank", "appreciate", "great", "excellent", "happy"]
        positive_count = sum(1 for word in positive_words if word in response_lower)
        score += positive_count * 5
        
        # Check for negative/aggressive language
        negative_words = ["wrong", "bad", "terrible", "unacceptable", "ridiculous"]
        negative_count = sum(1 for word in negative_words if word in response_lower)
        score -= negative_count * 10
        
        # Check for empathy
        empathy_phrases = ["i understand", "i appreciate", "thank you for"]
        has_empathy = any(phrase in response_lower for phrase in empathy_phrases)
        if has_empathy:
            score += 10
        
        return max(50, min(100, score))
    
    def _analyze_completeness(self, original_email: Dict, response: str) -> float:
        """Analyze response completeness."""
        score = 70.0
        
        # Check if response addresses original email
        original_body = original_email.get("body", "").lower()
        response_lower = response.lower()
        
        # Simple check: does response reference key terms from original?
        original_words = set(original_body.split())
        response_words = set(response_lower.split())
        overlap = len(original_words & response_words)
        
        if overlap > 5:
            score += 15
        
        # Check for next steps
        next_step_indicators = ["next", "will", "plan", "schedule", "follow up"]
        has_next_steps = any(indicator in response_lower for indicator in next_step_indicators)
        if has_next_steps:
            score += 15
        
        return max(50, min(100, score))
    
    def _analyze_professionalism(self, response: str) -> float:
        """Analyze response professionalism."""
        score = 75.0
        
        # Check for proper capitalization
        sentences = response.split('.')
        proper_caps = sum(1 for s in sentences if s.strip() and s.strip()[0].isupper())
        if proper_caps / max(len(sentences), 1) > 0.8:
            score += 10
        
        # Check for slang/informal language
        slang_words = ["gonna", "wanna", "kinda", "sorta", "yeah"]
        slang_count = sum(1 for word in slang_words if word in response.lower())
        score -= slang_count * 5
        
        # Check for excessive punctuation
        if "!!!" in response or "???" in response:
            score -= 10
        
        # Check for greeting and closing
        has_greeting = any(word in response.lower() for word in ["hello", "hi", "dear"])
        has_closing = any(word in response.lower() for word in ["regards", "sincerely", "thanks", "best"])
        
        if has_greeting:
            score += 5
        if has_closing:
            score += 5
        
        return max(50, min(100, score))
    
    def _calculate_overall_score(self, clarity, tone, completeness, professionalism) -> float:
        """Calculate overall quality score."""
        weights = {
            "clarity": 0.30,
            "tone": 0.25,
            "completeness": 0.25,
            "professionalism": 0.20
        }
        
        score = (
            clarity * weights["clarity"] +
            tone * weights["tone"] +
            completeness * weights["completeness"] +
            professionalism * weights["professionalism"]
        )
        
        return score
    
    def _identify_issues(self, response: str, original_email: Dict) -> List[str]:
        """Identify quality issues."""
        issues = []
        
        word_count = len(response.split())
        
        if word_count < 20:
            issues.append("too_brief")
        elif word_count > 300:
            issues.append("too_long")
        
        if not any(word in response.lower() for word in ["will", "can", "should", "let's"]):
            issues.append("unclear_cta")
        
        if not any(word in response.lower() for word in ["hello", "hi", "dear"]):
            issues.append("missing_greeting")
        
        if not any(word in response.lower() for word in ["regards", "sincerely", "thanks", "best"]):
            issues.append("missing_signature")
        
        return issues
    
    def _generate_suggestions(self, clarity, tone, completeness, professionalism, issues) -> List[str]:
        """Generate improvement suggestions."""
        suggestions = []
        
        if clarity < 75:
            suggestions.append("Use more specific language and shorter sentences for clarity")
        
        if tone < 75:
            suggestions.append("Add empathetic phrases like 'I understand' or 'Thank you for'")
        
        if completeness < 75:
            suggestions.append("Ensure you address all points from the original email")
            suggestions.append("Include clear next steps or action items")
        
        if professionalism < 75:
            suggestions.append("Use proper capitalization and avoid slang")
        
        for issue in issues:
            if issue in self.COMMON_ISSUES:
                suggestions.append(self.COMMON_ISSUES[issue])
        
        return suggestions[:5]
    
    def _generate_improved_version(self, response: str, suggestions: List[str]) -> str:
        """Generate improved version of response."""
        improved = response
        
        # Add greeting if missing
        if "missing_greeting" in str(suggestions):
            improved = "Hello,\n\n" + improved
        
        # Add closing if missing
        if "missing_signature" in str(suggestions):
            improved = improved.rstrip() + "\n\nBest regards,\n[Your Name]"
        
        return improved
    
    def _get_quality_grade(self, score: float) -> str:
        """Get quality grade from score."""
        if score >= 90:
            return "A"
        elif score >= 80:
            return "B"
        elif score >= 70:
            return "C"
        elif score >= 60:
            return "D"
        else:
            return "F"
    
    def process_batch(self, emails_and_responses: List[Dict]) -> Dict[str, Any]:
        results = [
            self.coach_response(item["email"], item["response"])
            for item in emails_and_responses
        ]
        
        avg_overall = sum(r["quality_scores"]["overall"] for r in results) / len(results) if results else 0
        
        grade_distribution = {}
        for r in results:
            grade = r["quality_grade"]
            grade_distribution[grade] = grade_distribution.get(grade, 0) + 1
        
        return {
            "engine": "V635 - Response Quality Coach",
            "total_coached": len(results),
            "average_quality_score": round(avg_overall, 1),
            "grade_distribution": grade_distribution,
            "reply_all_enforced": sum(1 for r in results if r["reply_all_enforced"]),
            "results": results
        }

if __name__ == "__main__":
    engine = ResponseQualityCoach()
    test_data = [
        {
            "email": {"subject": "Project deadline", "body": "Can you finish the report by Friday?", "to": ["team@company.com"]},
            "response": "Yes I will finish it by Friday. I will send it to you then."
        },
        {
            "email": {"subject": "Meeting request", "body": "Would you be available for a meeting tomorrow at 2pm to discuss the project?", "to": ["manager@company.com", "team@company.com"]},
            "response": "Hello,\n\nThank you for reaching out. I would be happy to meet tomorrow at 2pm to discuss the project. I will prepare the necessary materials.\n\nBest regards,\nJohn"
        }
    ]
    result = engine.process_batch(test_data)
    print(json.dumps(result, indent=2))

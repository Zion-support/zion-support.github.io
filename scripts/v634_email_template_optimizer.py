#!/usr/bin/env python3
"""V634 - Email Template Optimizer
Optimize email templates for better engagement with A/B testing and performance analytics.
REPLY-ALL ENFORCED: Always replies to all recipients in multi-person threads.
"""
import json, random
from datetime import datetime
from typing import Dict, List, Any

class EmailTemplateOptimizer:
    """Optimize email templates for engagement."""
    
    TEMPLATE_ELEMENTS = {
        "subject_line": ["clear", "concise", "action-oriented", "personalized"],
        "greeting": ["formal", "casual", "personalized", "generic"],
        "body_structure": ["scannable", "detailed", "bullet-points", "paragraphs"],
        "call_to_action": ["single", "multiple", "clear", "urgent"],
        "signature": ["professional", "casual", "detailed", "minimal"]
    }
    
    def __init__(self):
        self.template_analyses = []
        self.performance_data = {}
    
    def analyze_template(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze email template for optimization opportunities."""
        subject = email.get("subject", "")
        body = email.get("body", "")
        
        # Analyze template elements
        subject_analysis = self._analyze_subject_line(subject)
        greeting_analysis = self._analyze_greeting(body)
        body_analysis = self._analyze_body_structure(body)
        cta_analysis = self._analyze_call_to_action(body)
        signature_analysis = self._analyze_signature(body)
        
        # Overall template score
        template_score = self._calculate_template_score(
            subject_analysis, greeting_analysis, body_analysis, cta_analysis, signature_analysis
        )
        
        # Optimization suggestions
        suggestions = self._generate_suggestions(
            subject_analysis, greeting_analysis, body_analysis, cta_analysis, signature_analysis
        )
        
        # Predicted engagement
        predicted_engagement = self._predict_engagement(template_score)
        
        return {
            "engine": "V634",
            "email_subject": subject,
            "template_score": round(template_score, 1),
            "subject_analysis": subject_analysis,
            "greeting_analysis": greeting_analysis,
            "body_analysis": body_analysis,
            "cta_analysis": cta_analysis,
            "signature_analysis": signature_analysis,
            "optimization_suggestions": suggestions,
            "predicted_engagement": predicted_engagement,
            "a_b_test_recommendations": self._generate_ab_test_recs(subject_analysis, body_analysis),
            "reply_all_enforced": len(email.get("to", []) + email.get("cc", [])) > 1,
            "timestamp": datetime.now().isoformat()
        }
    
    def _analyze_subject_line(self, subject: str) -> Dict[str, Any]:
        """Analyze subject line effectiveness."""
        length = len(subject)
        word_count = len(subject.split())
        
        # Check for personalization
        has_personalization = any(word in subject.lower() for word in ["you", "your", "we", "our"])
        
        # Check for action words
        action_words = ["get", "learn", "discover", "join", "start", "try"]
        has_action = any(word in subject.lower() for word in action_words)
        
        # Check for urgency
        urgency_words = ["now", "today", "limited", "urgent", "asap"]
        has_urgency = any(word in subject.lower() for word in urgency_words)
        
        # Score
        score = 70
        if 30 <= length <= 50:
            score += 15
        if has_personalization:
            score += 10
        if has_action:
            score += 10
        if has_urgency:
            score += 5
        if word_count <= 8:
            score += 5
        
        return {
            "length": length,
            "word_count": word_count,
            "has_personalization": has_personalization,
            "has_action_words": has_action,
            "has_urgency": has_urgency,
            "score": min(100, score),
            "quality": self._get_quality_label(score)
        }
    
    def _analyze_greeting(self, body: str) -> Dict[str, Any]:
        """Analyze email greeting."""
        body_lower = body.lower()
        
        has_personal_greeting = any(word in body_lower for word in ["dear", "hello", "hi", "hey"])
        uses_name = any(word in body for word in ["[Name]", "{name}", "John", "Jane"])  # Simplified
        
        score = 60
        if has_personal_greeting:
            score += 20
        if uses_name:
            score += 20
        
        return {
            "has_personal_greeting": has_personal_greeting,
            "uses_recipient_name": uses_name,
            "score": min(100, score),
            "quality": self._get_quality_label(score)
        }
    
    def _analyze_body_structure(self, body: str) -> Dict[str, Any]:
        """Analyze body structure."""
        paragraphs = body.split('\n\n')
        has_bullet_points = '-' in body or '•' in body or '*' in body
        has_headers = any(line.startswith('#') for line in body.split('\n'))
        
        word_count = len(body.split())
        is_scannable = has_bullet_points or has_headers or len(paragraphs) > 3
        
        score = 65
        if is_scannable:
            score += 20
        if 100 <= word_count <= 300:
            score += 15
        if has_bullet_points:
            score += 10
        
        return {
            "paragraph_count": len(paragraphs),
            "word_count": word_count,
            "has_bullet_points": has_bullet_points,
            "has_headers": has_headers,
            "is_scannable": is_scannable,
            "score": min(100, score),
            "quality": self._get_quality_label(score)
        }
    
    def _analyze_call_to_action(self, body: str) -> Dict[str, Any]:
        """Analyze call to action."""
        body_lower = body.lower()
        
        cta_phrases = ["click here", "learn more", "sign up", "get started", "try now", "contact us"]
        has_cta = any(phrase in body_lower for phrase in cta_phrases)
        
        cta_count = sum(1 for phrase in cta_phrases if phrase in body_lower)
        
        score = 50
        if has_cta:
            score += 30
        if cta_count == 1:  # Single, clear CTA is best
            score += 20
        
        return {
            "has_cta": has_cta,
            "cta_count": cta_count,
            "score": min(100, score),
            "quality": self._get_quality_label(score)
        }
    
    def _analyze_signature(self, body: str) -> Dict[str, Any]:
        """Analyze email signature."""
        has_signature = any(word in body.lower() for word in ["regards", "sincerely", "best", "thanks"])
        has_contact_info = any(word in body for word in ["@", "phone", "tel", "www", "http"])
        
        score = 60
        if has_signature:
            score += 20
        if has_contact_info:
            score += 20
        
        return {
            "has_signature": has_signature,
            "has_contact_info": has_contact_info,
            "score": min(100, score),
            "quality": self._get_quality_label(score)
        }
    
    def _calculate_template_score(self, subject, greeting, body, cta, signature) -> float:
        """Calculate overall template score."""
        weights = {
            "subject": 0.25,
            "greeting": 0.15,
            "body": 0.30,
            "cta": 0.20,
            "signature": 0.10
        }
        
        score = (
            subject["score"] * weights["subject"] +
            greeting["score"] * weights["greeting"] +
            body["score"] * weights["body"] +
            cta["score"] * weights["cta"] +
            signature["score"] * weights["signature"]
        )
        
        return score
    
    def _get_quality_label(self, score: int) -> str:
        """Get quality label from score."""
        if score >= 90:
            return "excellent"
        elif score >= 80:
            return "good"
        elif score >= 70:
            return "average"
        elif score >= 60:
            return "below_average"
        else:
            return "poor"
    
    def _generate_suggestions(self, subject, greeting, body, cta, signature) -> List[str]:
        """Generate optimization suggestions."""
        suggestions = []
        
        if subject["score"] < 80:
            if not subject["has_personalization"]:
                suggestions.append("Add personalization to subject line (e.g., recipient name)")
            if subject["length"] > 50:
                suggestions.append("Shorten subject line to under 50 characters")
        
        if greeting["score"] < 80:
            if not greeting["uses_recipient_name"]:
                suggestions.append("Use recipient's name in greeting")
        
        if body["score"] < 80:
            if not body["is_scannable"]:
                suggestions.append("Make body more scannable with bullet points or headers")
        
        if cta["score"] < 80:
            if not cta["has_cta"]:
                suggestions.append("Add a clear call-to-action")
            elif cta["cta_count"] > 2:
                suggestions.append("Reduce to a single, clear call-to-action")
        
        if signature["score"] < 80:
            if not signature["has_contact_info"]:
                suggestions.append("Add contact information to signature")
        
        if not suggestions:
            suggestions.append("Template is well-optimized!")
        
        return suggestions[:5]
    
    def _predict_engagement(self, template_score: float) -> Dict[str, Any]:
        """Predict engagement metrics."""
        # Simplified prediction based on template score
        base_open_rate = 20.0
        base_click_rate = 3.0
        
        score_multiplier = template_score / 70  # 70 is baseline
        
        predicted_open_rate = base_open_rate * score_multiplier
        predicted_click_rate = base_click_rate * score_multiplier
        
        return {
            "predicted_open_rate_percent": round(predicted_open_rate, 1),
            "predicted_click_rate_percent": round(predicted_click_rate, 1),
            "predicted_reply_rate_percent": round(predicted_click_rate * 0.3, 1)
        }
    
    def _generate_ab_test_recs(self, subject, body) -> List[Dict]:
        """Generate A/B test recommendations."""
        recommendations = []
        
        if subject["score"] < 85:
            recommendations.append({
                "element": "subject_line",
                "variant_a": "Current subject",
                "variant_b": "Shorter, more action-oriented subject",
                "expected_improvement": "10-15% open rate increase"
            })
        
        if not body["is_scannable"]:
            recommendations.append({
                "element": "body_structure",
                "variant_a": "Current paragraph format",
                "variant_b": "Bullet point format with headers",
                "expected_improvement": "20-25% engagement increase"
            })
        
        return recommendations[:2]
    
    def process_batch(self, emails: List[Dict]) -> Dict[str, Any]:
        results = [self.analyze_template(e) for e in emails]
        
        avg_score = sum(r["template_score"] for r in results) / len(results) if results else 0
        avg_predicted_open = sum(r["predicted_engagement"]["predicted_open_rate_percent"] for r in results) / len(results) if results else 0
        
        return {
            "engine": "V634 - Email Template Optimizer",
            "total_analyzed": len(results),
            "average_template_score": round(avg_score, 1),
            "average_predicted_open_rate": round(avg_predicted_open, 1),
            "reply_all_enforced": sum(1 for r in results if r["reply_all_enforced"]),
            "results": results
        }

if __name__ == "__main__":
    engine = EmailTemplateOptimizer()
    test_emails = [
        {"subject": "Your exclusive offer inside!", "body": "Hello John,\n\nWe have an amazing offer for you!\n\n- Feature 1\n- Feature 2\n- Feature 3\n\nClick here to learn more.\n\nBest regards,\nTeam\nwww.company.com",
         "to": ["user@company.com", "sales@company.com"]},
        {"subject": "Meeting", "body": "Hi, let's meet tomorrow.", "to": ["team@company.com"]}
    ]
    result = engine.process_batch(test_emails)
    print(json.dumps(result, indent=2))

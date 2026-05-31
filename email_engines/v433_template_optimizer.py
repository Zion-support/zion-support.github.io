#!/usr/bin/env python3
"""
V433: AI Email Template Optimizer
A/B tests email templates, tracks performance metrics, and optimizes
for better engagement. Case-by-case analysis.
Enforces reply-all for multi-recipient template emails.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Optional


class V433TemplateOptimizer:
    """Optimizes email templates through A/B testing and analytics"""
    
    TEMPLATE_ELEMENTS = {
        "subject_line": {
            "best_practices": [
                "Keep under 50 characters",
                "Include recipient name when possible",
                "Use action verbs",
                "Create urgency or curiosity"
            ],
            "metrics": ["open_rate", "click_rate"]
        },
        "greeting": {
            "best_practices": [
                "Personalize with recipient name",
                "Match formality level to relationship",
                "Keep it brief"
            ],
            "metrics": ["read_time", "engagement"]
        },
        "body": {
            "best_practices": [
                "Use short paragraphs",
                "Include bullet points for lists",
                "Highlight key information",
                "One clear call-to-action"
            ],
            "metrics": ["read_time", "response_rate"]
        },
        "closing": {
            "best_practices": [
                "Summarize next steps",
                "Include clear CTA",
                "Professional sign-off",
                "Contact information"
            ],
            "metrics": ["response_rate", "click_rate"]
        }
    }
    
    PERFORMANCE_METRICS = {
        "open_rate": {"benchmark": 0.25, "weight": 0.3},
        "click_rate": {"benchmark": 0.05, "weight": 0.2},
        "response_rate": {"benchmark": 0.15, "weight": 0.3},
        "read_time": {"benchmark": 45, "weight": 0.2}  # seconds
    }
    
    def analyze_template(self, template: Dict) -> Dict:
        """Analyze template quality and structure"""
        subject = template.get('subject', '')
        body = template.get('body', '')
        
        analysis = {
            "subject_line": self._analyze_subject(subject),
            "body_structure": self._analyze_body(body),
            "readability": self._analyze_readability(body),
            "personalization": self._check_personalization(template)
        }
        
        # Calculate overall score
        scores = [
            analysis["subject_line"]["score"],
            analysis["body_structure"]["score"],
            analysis["readability"]["score"],
            analysis["personalization"]["score"]
        ]
        overall_score = sum(scores) / len(scores)
        
        return {
            "overall_score": round(overall_score, 2),
            "grade": self._calculate_grade(overall_score),
            "analysis": analysis
        }
    
    def _analyze_subject(self, subject: str) -> Dict:
        """Analyze subject line"""
        length = len(subject)
        score = 1.0
        
        # Length check
        if length > 50:
            score -= 0.3
        elif length < 10:
            score -= 0.2
        
        # Check for action verbs
        action_verbs = ["get", "try", "learn", "discover", "join", "start", "update"]
        has_action = any(verb in subject.lower() for verb in action_verbs)
        if has_action:
            score += 0.1
        
        # Check for personalization
        has_personalization = "{" in subject or "name" in subject.lower()
        if has_personalization:
            score += 0.1
        
        # Check for urgency
        urgency_words = ["now", "today", "limited", "urgent", "deadline"]
        has_urgency = any(word in subject.lower() for word in urgency_words)
        if has_urgency:
            score += 0.1
        
        return {
            "score": min(1.0, max(0, score)),
            "length": length,
            "has_action_verb": has_action,
            "has_personalization": has_personalization,
            "has_urgency": has_urgency,
            "recommendations": self._subject_recommendations(subject)
        }
    
    def _subject_recommendations(self, subject: str) -> List[str]:
        """Generate subject line recommendations"""
        recommendations = []
        
        if len(subject) > 50:
            recommendations.append("Shorten subject to under 50 characters")
        
        if not any(verb in subject.lower() for verb in ["get", "try", "learn", "discover"]):
            recommendations.append("Add an action verb to increase engagement")
        
        if "{" not in subject:
            recommendations.append("Consider adding personalization (e.g., {first_name})")
        
        return recommendations
    
    def _analyze_body(self, body: str) -> Dict:
        """Analyze body structure"""
        paragraphs = [p.strip() for p in body.split('\n\n') if p.strip()]
        sentences = [s.strip() for s in re.split(r'[.!?]+', body) if s.strip()]
        
        # Check for bullet points
        has_bullets = bool(re.search(r'[-•*]\s', body))
        
        # Check for CTA
        cta_patterns = [r'click here', r'learn more', r'get started', r'sign up', r'reply']
        has_cta = any(re.search(pattern, body, re.IGNORECASE) for pattern in cta_patterns)
        
        # Calculate structure score
        score = 0.5
        if 2 <= len(paragraphs) <= 5:
            score += 0.2
        if has_bullets:
            score += 0.15
        if has_cta:
            score += 0.15
        
        return {
            "score": min(1.0, score),
            "paragraphs": len(paragraphs),
            "sentences": len(sentences),
            "has_bullets": has_bullets,
            "has_cta": has_cta,
            "avg_sentence_length": len(body.split()) / max(len(sentences), 1)
        }
    
    def _analyze_readability(self, body: str) -> Dict:
        """Analyze readability"""
        words = body.split()
        word_count = len(words)
        sentences = [s.strip() for s in re.split(r'[.!?]+', body) if s.strip()]
        sentence_count = len(sentences)
        
        # Calculate average words per sentence
        avg_words_per_sentence = word_count / max(sentence_count, 1)
        
        # Calculate readability score (simplified Flesch-Kincaid)
        score = 1.0
        if avg_words_per_sentence > 25:
            score -= 0.3
        elif avg_words_per_sentence < 10:
            score -= 0.1
        
        # Check for complex words (3+ syllables approximation)
        complex_words = sum(1 for word in words if len(word) > 8)
        complex_ratio = complex_words / max(word_count, 1)
        
        if complex_ratio > 0.2:
            score -= 0.2
        
        return {
            "score": min(1.0, max(0, score)),
            "avg_words_per_sentence": round(avg_words_per_sentence, 1),
            "complex_word_ratio": round(complex_ratio, 2),
            "reading_time_seconds": round(word_count * 0.3, 0)  # ~200 words per minute
        }
    
    def _check_personalization(self, template: Dict) -> Dict:
        """Check personalization elements"""
        body = template.get('body', '')
        subject = template.get('subject', '')
        text = f"{subject} {body}"
        
        personalization_tokens = ["{name}", "{first_name}", "{company}", "{title}", "{location}"]
        found_tokens = [token for token in personalization_tokens if token in text]
        
        score = min(1.0, len(found_tokens) * 0.25 + 0.25)
        
        return {
            "score": score,
            "tokens_found": found_tokens,
            "personalization_level": "HIGH" if len(found_tokens) >= 2 else "MEDIUM" if len(found_tokens) == 1 else "LOW"
        }
    
    def _calculate_grade(self, score: float) -> str:
        """Calculate letter grade"""
        if score >= 0.9:
            return "A"
        elif score >= 0.8:
            return "B"
        elif score >= 0.7:
            return "C"
        elif score >= 0.6:
            return "D"
        else:
            return "F"
    
    def generate_ab_test(self, template: Dict) -> Dict:
        """Generate A/B test variants"""
        subject = template.get('subject', '')
        body = template.get('body', '')
        
        # Create variants
        variants = {
            "control": template,
            "variant_a": {
                "subject": self._create_urgency_variant(subject),
                "body": body,
                "change": "Added urgency to subject"
            },
            "variant_b": {
                "subject": subject,
                "body": self._add_personalization(body),
                "change": "Added personalization to body"
            }
        }
        
        return {
            "test_type": "A/B/C",
            "variants": variants,
            "recommended_sample_size": 100,
            "test_duration_days": 7
        }
    
    def _create_urgency_variant(self, subject: str) -> str:
        """Create urgency variant of subject"""
        urgency_prefixes = ["Today:", "Limited:", "Act Now:", "Don't Miss:"]
        return f"{urgency_prefixes[0]} {subject}"
    
    def _add_personalization(self, body: str) -> str:
        """Add personalization to body"""
        if "{name}" not in body:
            return body.replace("Hi,", "Hi {name},", 1)
        return body
    
    def process(self, template: Dict, performance_data: Dict = None) -> Dict:
        """Process template and provide optimization recommendations"""
        recipients = template.get('to', [])
        cc = template.get('cc', [])
        
        # Analyze template
        analysis = self.analyze_template(template)
        
        # Generate A/B test
        ab_test = self.generate_ab_test(template)
        
        # Generate optimization recommendations
        recommendations = []
        
        if analysis["analysis"]["subject_line"]["score"] < 0.7:
            recommendations.extend(analysis["analysis"]["subject_line"]["recommendations"])
        
        if not analysis["analysis"]["body_structure"]["has_cta"]:
            recommendations.append("Add a clear call-to-action")
        
        if analysis["analysis"]["readability"]["score"] < 0.7:
            recommendations.append("Improve readability with shorter sentences")
        
        if analysis["analysis"]["personalization"]["personalization_level"] == "LOW":
            recommendations.append("Add more personalization tokens")
        
        # Check reply-all
        all_recipients = list(set(recipients + cc))
        should_reply_all = len(all_recipients) > 1
        
        result = {
            "engine": "V433 Template Optimizer",
            "timestamp": datetime.now().isoformat(),
            "template_analysis": analysis,
            "ab_test": ab_test,
            "recommendations": recommendations,
            "optimization_score": analysis["overall_score"],
            "reply_all_enforced": should_reply_all,
            "reply_all_reason": f"Template sent to {len(all_recipients)} recipients" if should_reply_all else "Single recipient template"
        }
        
        return result


if __name__ == "__main__":
    test_template = {
        "subject": "Your monthly report is ready",
        "body": "Hi,\n\nPlease find attached your monthly report. The data shows significant growth in all key metrics.\n\nKey highlights:\n- Revenue increased by 15%\n- Customer satisfaction improved to 4.8/5\n- Response time decreased by 20%\n\nClick here to view the full report.\n\nBest regards,\nAnalytics Team",
        "to": ["client@company.com"],
        "cc": ["manager@company.com"]
    }
    
    optimizer = V433TemplateOptimizer()
    result = optimizer.process(test_template)
    print(json.dumps(result, indent=2))

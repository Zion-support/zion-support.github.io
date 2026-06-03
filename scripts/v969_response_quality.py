#!/usr/bin/env python3
"""
V969: Response Quality Analyzer Engine
Evaluates email response quality across 8 dimensions: completeness, clarity,
tone, professionalism, accuracy, timeliness, actionability, and formatting.
STRICT reply-all enforcement for all multi-recipient emails.
"""

import re
import hashlib
from datetime import datetime, timezone
from typing import Dict, List, Any


class ResponseQualityAnalyzer:
    """Analyzes and scores email response quality across 8 dimensions."""

    QUALITY_DIMENSIONS = {
        "completeness": "Addresses all questions and points raised",
        "clarity": "Easy to understand, no ambiguity",
        "tone": "Appropriate emotional tone for context",
        "professionalism": "Professional language and formatting",
        "accuracy": "Factually correct information",
        "timeliness": "Appropriate response time",
        "actionability": "Clear next steps and action items",
        "formatting": "Proper structure and readability",
    }

    PROFESSIONAL_PHRASES = [
        "thank you for", "I appreciate", "please find", "as discussed",
        "I'd be happy to", "looking forward to", "please don't hesitate",
        "at your convenience", "kind regards", "best regards",
    ]

    UNPROFESSIONAL_PATTERNS = [
        r'\b(idk|lol|btw|omg|wtf|imo|tbh)\b',
        r'[!]{3,}',
        r'\b(whatever|who cares|not my problem)\b',
    ]

    CLARITY_INDICATORS = [
        "specifically", "to clarify", "in other words", "for example",
        "to summarize", "in conclusion", "the key point",
    ]

    ACTION_INDICATORS = [
        "next step", "please do", "action item", "by [date]",
        "I will", "we will", "please confirm", "deadline",
    ]

    def __init__(self):
        self.quality_log: List[Dict] = []
        self.reply_all_audit: List[Dict] = []

    def analyze_email_case_by_case(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze response quality case by case."""
        analysis = {
            "engine": "V969",
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "email_id": email.get("id", hashlib.md5(str(email).encode()).hexdigest()[:12]),
            "analysis_type": "response_quality",
        }

        to_recipients = email.get("to", [])
        cc_recipients = email.get("cc", [])
        all_recipients = to_recipients + cc_recipients
        is_multi_recipient = len(all_recipients) > 1

        body = email.get("body", "")
        subject = email.get("subject", "")
        full_text = body

        # Score each dimension (0-100)
        scores = {}

        # 1. Completeness
        scores["completeness"] = self._score_completeness(email, full_text)
        
        # 2. Clarity
        scores["clarity"] = self._score_clarity(full_text)
        
        # 3. Tone
        scores["tone"] = self._score_tone(full_text, email)
        
        # 4. Professionalism
        scores["professionalism"] = self._score_professionalism(full_text)
        
        # 5. Accuracy (heuristic based on specificity)
        scores["accuracy"] = self._score_accuracy(full_text)
        
        # 6. Timeliness
        scores["timeliness"] = self._score_timeliness(email)
        
        # 7. Actionability
        scores["actionability"] = self._score_actionability(full_text)
        
        # 8. Formatting
        scores["formatting"] = self._score_formatting(full_text)

        analysis["dimension_scores"] = scores

        # Overall quality score
        overall = round(sum(scores.values()) / len(scores), 1)
        analysis["overall_quality_score"] = overall

        # Quality grade
        grade = self._calculate_grade(overall)
        analysis["quality_grade"] = grade

        # Improvement suggestions
        suggestions = self._generate_improvement_suggestions(scores)
        analysis["improvement_suggestions"] = suggestions

        # Strengths identification
        strengths = self._identify_strengths(scores)
        analysis["strengths"] = strengths

        # Determine action
        action = self._recommend_quality_action(overall, grade)
        analysis["recommended_action"] = action

        # REPLY-ALL ENFORCEMENT
        reply_all = self._enforce_reply_all(email, all_recipients, is_multi_recipient)
        analysis["reply_all_enforcement"] = reply_all

        # Quality report
        analysis["quality_report"] = self._generate_quality_report(
            scores, overall, grade, suggestions, strengths
        )

        self.quality_log.append({
            "email_id": analysis["email_id"],
            "overall_score": overall,
            "grade": grade,
            "reply_all": reply_all["enforced"],
            "timestamp": analysis["timestamp"],
        })

        return analysis

    def _score_completeness(self, email: Dict, text: str) -> float:
        """Score response completeness."""
        score = 50  # Base score
        text_lower = text.lower()

        # Addresses multiple points
        bullet_points = text.count("•") + text.count("-") + len(re.findall(r'^\d+\.', text, re.MULTILINE))
        if bullet_points >= 3:
            score += 20
        elif bullet_points >= 1:
            score += 10

        # Word count (substantial response)
        word_count = len(text.split())
        if word_count >= 100:
            score += 15
        elif word_count >= 50:
            score += 10
        elif word_count < 15:
            score -= 20

        # Acknowledges previous points
        ack_patterns = ["regarding", "about", "you mentioned", "as you noted", "in response to"]
        if any(p in text_lower for p in ack_patterns):
            score += 10

        # Has greeting and closing
        if re.search(r'^(hi|hello|dear|hey)\b', text_lower):
            score += 5
        if re.search(r'(regards|thanks|best|sincerely)', text_lower):
            score += 5

        return min(max(score, 0), 100)

    def _score_clarity(self, text: str) -> float:
        """Score response clarity."""
        score = 50
        text_lower = text.lower()

        # Clarity indicators present
        clarity_count = sum(1 for ind in self.CLARITY_INDICATORS if ind in text_lower)
        score += clarity_count * 5

        # Sentence length (shorter = clearer)
        sentences = re.split(r'[.!?]+', text)
        avg_length = sum(len(s.split()) for s in sentences) / max(len(sentences), 1)
        if avg_length <= 15:
            score += 15
        elif avg_length <= 25:
            score += 10
        elif avg_length > 40:
            score -= 10

        # No jargon overload
        jargon_count = len(re.findall(r'\b(?:synergy|paradigm|leverage|bandwidth|ecosystem)\b', text_lower))
        if jargon_count > 3:
            score -= 10

        return min(max(score, 0), 100)

    def _score_tone(self, text: str, email: Dict) -> float:
        """Score tone appropriateness."""
        score = 60  # Base neutral score
        text_lower = text.lower()

        # Positive professional phrases
        positive_count = sum(1 for p in self.PROFESSIONAL_PHRASES if p in text_lower)
        score += positive_count * 5

        # Empathy indicators
        empathy = ["understand", "appreciate", "sorry to hear", "I can see", "I understand"]
        if any(e in text_lower for e in empathy):
            score += 10

        # Avoid negative tone in professional context
        negative = ["angry", "frustrated", "annoyed", "ridiculous", "obviously"]
        if any(n in text_lower for n in negative):
            score -= 15

        return min(max(score, 0), 100)

    def _score_professionalism(self, text: str) -> float:
        """Score professionalism."""
        score = 60
        text_lower = text.lower()

        # Professional phrases
        prof_count = sum(1 for p in self.PROFESSIONAL_PHRASES if p in text_lower)
        score += min(prof_count * 5, 25)

        # Unprofessional patterns
        for pattern in self.UNPROFESSIONAL_PATTERNS:
            if re.search(pattern, text_lower):
                score -= 15

        # Proper capitalization
        if text and text[0].isupper():
            score += 5

        # No excessive punctuation
        if text.count('!') <= 2 and text.count('?') <= 3:
            score += 5

        return min(max(score, 0), 100)

    def _score_accuracy(self, text: str) -> float:
        """Score accuracy (heuristic: specificity indicates accuracy)."""
        score = 50

        # Specific numbers/dates
        numbers = re.findall(r'\d+[\.\d]*[%$]?', text)
        if numbers:
            score += min(len(numbers) * 5, 20)

        # Specific dates
        dates = re.findall(r'\d{4}[-/]\d{2}[-/]\d{2}|\w+ \d{1,2}(?:st|nd|rd|th)?', text)
        if dates:
            score += 10

        # Specific names/references
        if re.search(r'\b(?:v\d+\.\d+|version|release)\b', text, re.IGNORECASE):
            score += 10

        # Links provided (shows reference)
        if re.search(r'https?://', text):
            score += 10

        return min(max(score, 0), 100)

    def _score_timeliness(self, email: Dict) -> float:
        """Score timeliness."""
        sent = email.get("sent_timestamp")
        received = email.get("received_timestamp")

        if sent and received:
            try:
                sent_dt = datetime.fromisoformat(sent)
                received_dt = datetime.fromisoformat(received)
                hours = (received_dt - sent_dt).total_seconds() / 3600

                if hours <= 1:
                    return 95
                elif hours <= 4:
                    return 85
                elif hours <= 8:
                    return 70
                elif hours <= 24:
                    return 55
                else:
                    return 30
            except:
                pass

        return 65  # Default if timestamps unavailable

    def _score_actionability(self, text: str) -> float:
        """Score actionability of response."""
        score = 40
        text_lower = text.lower()

        action_count = sum(1 for ind in self.ACTION_INDICATORS if ind in text_lower)
        score += action_count * 8

        # Clear next steps
        if "next step" in text_lower or "moving forward" in text_lower:
            score += 10

        # Specific deadlines
        if re.search(r'\b(?:by|before|deadline)\s+\w+', text_lower):
            score += 10

        # Questions for clarification
        if "?" in text:
            score += 5

        return min(max(score, 0), 100)

    def _score_formatting(self, text: str) -> float:
        """Score formatting quality."""
        score = 40

        # Paragraph breaks
        paragraphs = [p for p in text.split('\n\n') if p.strip()]
        if len(paragraphs) >= 2:
            score += 15
        elif len(paragraphs) == 1 and len(text) > 200:
            score -= 5

        # Bullet points or numbered lists
        if re.search(r'[•\-\*]\s', text) or re.search(r'^\d+[\.\)]', text, re.MULTILINE):
            score += 15

        # Line breaks for readability
        if text.count('\n') >= 3:
            score += 10

        # Greeting and sign-off
        if re.search(r'^(hi|hello|dear)', text.strip().lower()):
            score += 10
        if re.search(r'(regards|thanks|best|sincerely|cheers)', text.lower()):
            score += 10

        return min(max(score, 0), 100)

    def _calculate_grade(self, score: float) -> str:
        if score >= 90:
            return "A+"
        elif score >= 85:
            return "A"
        elif score >= 80:
            return "A-"
        elif score >= 75:
            return "B+"
        elif score >= 70:
            return "B"
        elif score >= 65:
            return "B-"
        elif score >= 60:
            return "C+"
        elif score >= 55:
            return "C"
        elif score >= 50:
            return "C-"
        elif score >= 40:
            return "D"
        else:
            return "F"

    def _generate_improvement_suggestions(self, scores: Dict) -> List[str]:
        """Generate improvement suggestions for low-scoring dimensions."""
        suggestions = []
        dimension_tips = {
            "completeness": "Add more detail and address all points raised in the original email",
            "clarity": "Use shorter sentences and add clarifying phrases like 'specifically' or 'for example'",
            "tone": "Include empathetic language and professional phrases like 'I appreciate' or 'thank you for'",
            "professionalism": "Avoid slang, excessive punctuation, and informal abbreviations",
            "accuracy": "Include specific numbers, dates, and references to support your points",
            "timeliness": "Respond within SLA timeframes — aim for under 4 hours for priority emails",
            "actionability": "Include clear next steps, deadlines, and action items",
            "formatting": "Use paragraph breaks, bullet points, and proper greeting/sign-off structure",
        }

        for dim, score in scores.items():
            if score < 60:
                suggestions.append(f"📌 {dim.title()} ({score}/100): {dimension_tips.get(dim, 'Review and improve')}")

        return suggestions

    def _identify_strengths(self, scores: Dict) -> List[str]:
        """Identify response strengths."""
        strengths = []
        for dim, score in scores.items():
            if score >= 75:
                strengths.append(f"✅ {dim.title()} ({score}/100): Excellent")
            elif score >= 65:
                strengths.append(f"👍 {dim.title()} ({score}/100): Good")
        return strengths

    def _recommend_quality_action(self, score: float, grade: str) -> str:
        """Recommend action based on quality score."""
        if score >= 85:
            return "APPROVE_AND_SEND"
        elif score >= 70:
            return "MINOR_REVISIONS_SUGGESTED"
        elif score >= 55:
            return "REVISION_RECOMMENDED"
        elif score >= 40:
            return "MAJOR_REVISION_REQUIRED"
        else:
            return "REWRITE_REQUIRED"

    def _enforce_reply_all(self, email: Dict, all_recipients: List, is_multi: bool) -> Dict:
        result = {
            "is_multi_recipient": is_multi,
            "recipient_count": len(all_recipients),
            "enforced": False,
            "reason": "",
        }
        if is_multi:
            result["enforced"] = True
            result["reason"] = f"REPLY-ALL ENFORCED: {len(all_recipients)} recipients."
            self.reply_all_audit.append({
                "email_id": email.get("id", "unknown"),
                "enforced": True,
                "timestamp": datetime.now(timezone.utc).isoformat(),
            })
        else:
            result["reason"] = "Single recipient."
        return result

    def _generate_quality_report(self, scores: Dict, overall: float, grade: str, suggestions: List, strengths: List) -> Dict:
        return {
            "overall_score": overall,
            "grade": grade,
            "dimensions": scores,
            "strengths_count": len(strengths),
            "improvements_needed": len(suggestions),
            "report_summary": f"Quality Grade: {grade} ({overall}/100) — {len(strengths)} strengths, {len(suggestions)} improvements suggested",
        }

    def get_stats(self) -> Dict:
        if not self.quality_log:
            return {"responses_analyzed": 0}
        return {
            "responses_analyzed": len(self.quality_log),
            "avg_quality_score": round(sum(q["overall_score"] for q in self.quality_log) / len(self.quality_log), 1),
            "grade_distribution": {},
            "reply_all_enforced": len(self.reply_all_audit),
        }


def test_v969():
    engine = ResponseQualityAnalyzer()

    # Test 1: High-quality response
    email1 = {
        "id": "qual-001",
        "from": "support@ziontechgroup.com",
        "to": ["client@company.com", "team@company.com"],
        "cc": ["manager@company.com"],
        "subject": "Re: Enterprise AI Platform - Technical Requirements",
        "body": "Hello John,\n\nThank you for sharing the technical requirements. I appreciate the detailed breakdown.\n\nHere are our responses to each point:\n\n1. API Integration: Our REST API supports OAuth 2.0 with rate limits of 10,000 requests/hour. Documentation is at https://docs.ziontechgroup.com/api\n\n2. Data Migration: We can handle up to 5TB of data with zero-downtime migration. Timeline: 2-3 weeks for your volume.\n\n3. SLA: 99.95% uptime guarantee with 15-minute response for P1 issues.\n\nNext steps:\n- I'll send the detailed proposal by Friday, March 15th\n- Let's schedule a technical deep-dive for next week\n- Please confirm the data volume estimate\n\nPlease don't hesitate to reach out if you have any questions.\n\nBest regards,\nSarah",
    }
    r1 = engine.analyze_email_case_by_case(email1)
    assert r1["reply_all_enforcement"]["enforced"] is True
    assert r1["overall_quality_score"] >= 70
    print(f"✅ Test 1 PASSED: Score={r1['overall_quality_score']}, Grade={r1['quality_grade']}, action={r1['recommended_action']}, reply-all enforced")

    # Test 2: Low-quality response
    email2 = {
        "id": "qual-002",
        "from": "support@ziontechgroup.com",
        "to": ["user@example.com"],
        "subject": "Re: help",
        "body": "idk lol check the docs",
    }
    r2 = engine.analyze_email_case_by_case(email2)
    assert r2["overall_quality_score"] < 60
    print(f"✅ Test 2 PASSED: Low quality detected, Score={r2['overall_quality_score']}, Grade={r2['quality_grade']}")

    stats = engine.get_stats()
    print(f"✅ Test 3 PASSED: {stats['responses_analyzed']} analyzed, avg={stats['avg_quality_score']}")

    print("\n🎉 V969 ALL TESTS PASSED — Response Quality Analyzer operational!")
    return True


if __name__ == "__main__":
    test_v969()

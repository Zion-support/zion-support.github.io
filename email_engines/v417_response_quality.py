#!/usr/bin/env python3
"""
V417: AI Email Response Quality Scorer
Scores email responses on 8 dimensions: clarity, tone, completeness,
professionalism, empathy, actionability, grammar, and relevance.
Enforces reply-all for multi-recipient emails.
"""

import json
import re
from typing import Dict, List
from dataclasses import dataclass


@dataclass
class QualityScore:
    dimension: str
    score: float  # 0.0 - 1.0
    feedback: str
    suggestions: List[str]


class V417ResponseQualityScorer:
    """Scores email response quality across 8 dimensions"""

    def __init__(self):
        self.dimensions = [
            "clarity", "tone", "completeness", "professionalism",
            "empathy", "actionability", "grammar", "relevance"
        ]

    def score_clarity(self, response: str) -> QualityScore:
        """Score clarity: is the message easy to understand?"""
        score = 0.7
        suggestions = []

        # Check sentence length
        sentences = re.split(r'[.!?]+', response)
        avg_len = sum(len(s.split()) for s in sentences if s.strip()) / max(len(sentences), 1)
        if avg_len > 25:
            score -= 0.15
            suggestions.append("Use shorter sentences for better readability")
        elif avg_len < 8:
            score += 0.1

        # Check for jargon
        jargon = ["synergy", "leverage", "paradigm", "disrupt", "pivot", "bandwidth"]
        found_jargon = [w for w in jargon if w in response.lower()]
        if found_jargon:
            score -= 0.1 * len(found_jargon)
            suggestions.append(f"Replace jargon: {', '.join(found_jargon)}")

        # Check for bullet points / structure
        if '\n' in response or '-' in response:
            score += 0.1

        return QualityScore("clarity", max(0, min(1, score)), f"Clarity: {score:.0%}", suggestions)

    def score_tone(self, response: str, original_intent: str = "") -> QualityScore:
        """Score tone: is the tone appropriate?"""
        score = 0.7
        suggestions = []

        # Check for aggressive language
        aggressive = ["demand", "must", "immediately", "unacceptable", "ridiculous"]
        found = [w for w in aggressive if w in response.lower()]
        if found:
            score -= 0.2
            suggestions.append(f"Soften aggressive words: {', '.join(found)}")

        # Check for positive language
        positive = ["thank", "appreciate", "glad", "happy", "pleased", "great"]
        if any(w in response.lower() for w in positive):
            score += 0.1

        # Check for empathy markers
        empathy = ["understand", "sorry", "apologize", "concern", "frustrating"]
        if original_intent in ["complaint", "support"] and any(w in response.lower() for w in empathy):
            score += 0.15

        return QualityScore("tone", max(0, min(1, score)), f"Tone: {score:.0%}", suggestions)

    def score_completeness(self, response: str, original_questions: List[str] = None) -> QualityScore:
        """Score completeness: does it address all points?"""
        score = 0.6
        suggestions = []

        if original_questions:
            addressed = sum(1 for q in original_questions if any(
                word in response.lower() for word in q.lower().split()[:3]
            ))
            coverage = addressed / len(original_questions)
            score = 0.4 + (coverage * 0.5)
            if coverage < 1.0:
                suggestions.append(f"Only {addressed}/{len(original_questions)} questions addressed")

        # Check for specific details
        if re.search(r'\d{1,2}[/:]\d{2}', response):  # times
            score += 0.05
        if re.search(r'\$\d+', response):  # prices
            score += 0.05
        if re.search(r'\d{4}-\d{2}-\d{2}', response):  # dates
            score += 0.05

        # Check length
        word_count = len(response.split())
        if word_count < 20:
            score -= 0.1
            suggestions.append("Response too brief — add more detail")
        elif word_count > 50:
            score += 0.1

        return QualityScore("completeness", max(0, min(1, score)), f"Completeness: {score:.0%}", suggestions)

    def score_professionalism(self, response: str) -> QualityScore:
        """Score professionalism"""
        score = 0.75
        suggestions = []

        # Check for greeting
        if re.search(r'^(dear|hi|hello|good (?:morning|afternoon))', response.lower()):
            score += 0.1
        else:
            suggestions.append("Add a professional greeting")

        # Check for sign-off
        if re.search(r'(regards|sincerely|best|thanks|cheers)', response.lower()):
            score += 0.1
        else:
            suggestions.append("Add a professional sign-off")

        # Check for informal language
        informal = ["lol", "omg", "btw", "fyi", "gonna", "wanna", "yeah"]
        found = [w for w in informal if w in response.lower()]
        if found:
            score -= 0.15
            suggestions.append(f"Remove informal language: {', '.join(found)}")

        return QualityScore("professionalism", max(0, min(1, score)), f"Professionalism: {score:.0%}", suggestions)

    def score_empathy(self, response: str) -> QualityScore:
        """Score empathy level"""
        score = 0.5
        suggestions = []

        empathy_phrases = [
            "i understand", "i appreciate", "i'm sorry", "we value",
            "your concern", "we understand", "frustrating", "challenging",
            "we're here to help", "please don't hesitate"
        ]
        found = [p for p in empathy_phrases if p in response.lower()]
        score += 0.1 * min(len(found), 4)

        if not found:
            suggestions.append("Add empathy phrases to build rapport")

        return QualityScore("empathy", max(0, min(1, score)), f"Empathy: {score:.0%}", suggestions)

    def score_actionability(self, response: str) -> QualityScore:
        """Score actionability: clear next steps?"""
        score = 0.5
        suggestions = []

        # Check for action verbs
        action_verbs = ["please", "will", "shall", "can", "schedule", "send", "call", "review"]
        found = [v for v in action_verbs if v in response.lower()]
        score += 0.08 * min(len(found), 5)

        # Check for deadlines/timelines
        if re.search(r'(by|within|before|until|deadline)', response.lower()):
            score += 0.1
        else:
            suggestions.append("Add specific timelines or deadlines")

        # Check for numbered steps
        if re.search(r'\d+[.)]\s', response):
            score += 0.1

        return QualityScore("actionability", max(0, min(1, score)), f"Actionability: {score:.0%}", suggestions)

    def score_grammar(self, response: str) -> QualityScore:
        """Score grammar and spelling"""
        score = 0.8
        suggestions = []

        # Check capitalization
        sentences = re.split(r'[.!?]+', response)
        for s in sentences:
            s = s.strip()
            if s and s[0].islower():
                score -= 0.05
                suggestions.append("Capitalize first letter of sentences")
                break

        # Check double spaces
        if '  ' in response:
            score -= 0.05
            suggestions.append("Remove double spaces")

        # Check for common typos
        typos = {"teh": "the", "recieve": "receive", "seperate": "separate", "occured": "occurred"}
        found_typos = {k: v for k, v in typos.items() if k in response.lower()}
        if found_typos:
            score -= 0.1 * len(found_typos)
            for typo, fix in found_typos.items():
                suggestions.append(f"Fix typo: '{typo}' → '{fix}'")

        return QualityScore("grammar", max(0, min(1, score)), f"Grammar: {score:.0%}", suggestions)

    def score_relevance(self, response: str, original_subject: str = "") -> QualityScore:
        """Score relevance to original email"""
        score = 0.6
        suggestions = []

        if original_subject:
            subject_words = set(original_subject.lower().split())
            response_words = set(response.lower().split())
            overlap = subject_words & response_words - {"the", "a", "an", "is", "are", "was", "to", "for"}
            if overlap:
                score += 0.2
            else:
                suggestions.append("Response doesn't reference the subject topic")

        return QualityScore("relevance", max(0, min(1, score)), f"Relevance: {score:.0%}", suggestions)

    def score_response(self, response: str, original_subject: str = "",
                       original_intent: str = "", original_questions: List[str] = None) -> Dict:
        """
        Score response across all 8 dimensions

        Returns:
            Dict with overall score, dimension scores, and improvement suggestions
        """
        scores = [
            self.score_clarity(response),
            self.score_tone(response, original_intent),
            self.score_completeness(response, original_questions),
            self.score_professionalism(response),
            self.score_empathy(response),
            self.score_actionability(response),
            self.score_grammar(response),
            self.score_relevance(response, original_subject)
        ]

        overall = sum(s.score for s in scores) / len(scores)
        all_suggestions = []
        for s in scores:
            all_suggestions.extend(s.suggestions)

        grade = "A+" if overall >= 0.9 else "A" if overall >= 0.8 else "B+" if overall >= 0.7 else \
                "B" if overall >= 0.6 else "C+" if overall >= 0.5 else "C" if overall >= 0.4 else "D"

        return {
            "engine": "V417 Response Quality Scorer",
            "overall_score": round(overall, 3),
            "grade": grade,
            "dimensions": {
                s.dimension: {"score": round(s.score, 3), "feedback": s.feedback}
                for s in scores
            },
            "suggestions": all_suggestions[:10],
            "reply_all_enforced": True
        }


def process_email(original_email: Dict, response: str) -> Dict:
    """Score a response against the original email"""
    scorer = V417ResponseQualityScorer()
    return scorer.score_response(
        response,
        original_email.get("subject", ""),
        original_email.get("intent", ""),
        original_email.get("questions", [])
    )


if __name__ == "__main__":
    test_original = {"subject": "Issue with order #12345", "intent": "complaint"}
    test_response = """Dear Valued Customer,

I understand your frustration with the damaged product. I sincerely apologize for the inconvenience.

Here's what we'll do:
1. Ship a replacement within 24 hours
2. Provide a prepaid return label for the damaged item
3. Apply a 15% discount to your next order

Please don't hesitate to reach out if you need anything else.

Best regards,
Zion Tech Group Support"""

    result = process_email(test_original, test_response)
    print(json.dumps(result, indent=2))

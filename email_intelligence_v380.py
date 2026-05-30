"""
V380 - Email Response Quality Scorer
Score outgoing drafts on clarity, professionalism, completeness, tone.
Real-time improvement suggestions. Benchmark against team averages.
"""
import json
import re
from datetime import datetime
from typing import Dict, List, Optional
from collections import defaultdict


class EmailResponseQualityScorer:
    """Score and improve outgoing email draft quality."""

    PROFESSIONAL_PHRASES = [
        "thank you", "please", "appreciate", "kind regards", "best regards",
        "looking forward", "as discussed", "per our conversation",
        "please find attached", "do not hesitate", "at your convenience",
    ]

    INFORMAL_MARKERS = [
        "hey", "gonna", "wanna", "lol", "btw", "imo", "tbh",
        "no worries", "my bad", "sorta", "kinda", "y'all",
    ]

    CLARITY_INDICATORS = [
        "specifically", "to clarify", "in summary", "the key point",
        "action item", "next steps", "deadline", "by when",
        "the purpose of", "objective",
    ]

    COMPLETENESS_SIGNALS = [
        "who", "what", "when", "where", "why", "how",
        "deadline", "deliverable", "responsible", "owner",
        "attached", "reference", "follow-up",
    ]

    def __init__(self):
        self.team_scores = defaultdict(list)
        self.score_history = []

    def score_clarity(self, draft: Dict) -> Dict:
        """Score email clarity."""
        body = draft.get("body", "")
        subject = draft.get("subject", "")
        sentences = [s.strip() for s in body.split(".") if s.strip()]

        score = 50.0
        suggestions = []

        # Check average sentence length
        if sentences:
            avg_len = sum(len(s.split()) for s in sentences) / len(sentences)
            if avg_len > 25:
                score -= 15
                suggestions.append("Consider breaking long sentences into shorter ones for readability")
            elif avg_len < 5:
                score -= 10
                suggestions.append("Some sentences are very short; consider combining for better flow")
            else:
                score += 15

        # Check for clarity indicators
        body_lower = body.lower()
        clarity_count = sum(1 for ind in self.CLARITY_INDICATORS if ind in body_lower)
        score += min(clarity_count * 5, 20)

        if clarity_count == 0:
            suggestions.append("Add clarity markers like 'in summary' or 'next steps' to guide the reader")

        # Check subject line
        if len(subject) < 5:
            score -= 10
            suggestions.append("Subject line is too short; make it descriptive")
        elif len(subject) > 80:
            score -= 5
            suggestions.append("Subject line is too long; aim for under 80 characters")
        else:
            score += 5

        # Paragraph structure
        paragraphs = [p.strip() for p in body.split("\n\n") if p.strip()]
        if len(paragraphs) == 1 and len(body) > 300:
            score -= 10
            suggestions.append("Break content into multiple paragraphs for better readability")
        elif len(paragraphs) > 1:
            score += 5

        return {
            "clarity_score": round(max(0, min(100, score)), 1),
            "suggestions": suggestions,
            "avg_sentence_length": round(avg_len, 1) if sentences else 0,
            "paragraph_count": len(paragraphs),
            "clarity_indicators_found": clarity_count,
        }

    def score_professionalism(self, draft: Dict) -> Dict:
        """Score email professionalism."""
        body = draft.get("body", "")
        body_lower = body.lower()
        score = 70.0
        suggestions = []

        # Check for professional phrases
        prof_count = sum(1 for p in self.PROFESSIONAL_PHRASES if p in body_lower)
        score += min(prof_count * 5, 20)

        # Check for informal markers
        informal_count = sum(1 for m in self.INFORMAL_MARKERS if m in body_lower)
        score -= informal_count * 8
        if informal_count > 0:
            informal_found = [m for m in self.INFORMAL_MARKERS if m in body_lower]
            suggestions.append(f"Replace informal language: {', '.join(informal_found)}")

        # Check for proper greeting
        has_greeting = any(g in body_lower for g in ["dear ", "hi ", "hello ", "good morning", "good afternoon"])
        if not has_greeting:
            score -= 5
            suggestions.append("Add a professional greeting")
        else:
            score += 5

        # Check for sign-off
        has_signoff = any(s in body_lower for s in ["regards", "sincerely", "thank you", "best", "cheers"])
        if not has_signoff:
            score -= 5
            suggestions.append("Add a professional sign-off")
        else:
            score += 5

        # Check for ALL CAPS (shouting)
        caps_words = re.findall(r'\b[A-Z]{3,}\b', body)
        if caps_words:
            score -= len(caps_words) * 3
            suggestions.append(f"Avoid ALL CAPS words: {', '.join(caps_words[:3])}")

        # Grammar basics
        if "  " in body:
            score -= 2
            suggestions.append("Remove double spaces")
        if re.search(r'\s+\.', body):
            score -= 2
            suggestions.append("Remove spaces before periods")

        return {
            "professionalism_score": round(max(0, min(100, score)), 1),
            "suggestions": suggestions,
            "professional_phrases": prof_count,
            "informal_markers": informal_count,
            "has_greeting": has_greeting,
            "has_signoff": has_signoff,
        }

    def score_completeness(self, draft: Dict) -> Dict:
        """Score email completeness."""
        body = draft.get("body", "")
        body_lower = body.lower()
        score = 50.0
        suggestions = []

        # Check for 5 Ws
        w_coverage = sum(1 for w in self.COMPLETENESS_SIGNALS if w in body_lower)
        score += min(w_coverage * 5, 30)

        missing_w = [w for w in ["what", "when", "who"] if w not in body_lower]
        if missing_w:
            suggestions.append(f"Consider addressing: {', '.join(missing_w)}")

        # Check for action items
        has_action = any(kw in body_lower for kw in ["action", "please", "need", "request", "could you"])
        if has_action:
            score += 10
        else:
            suggestions.append("Include clear action items or requests")

        # Check for deadline/timeframe
        has_deadline = any(kw in body_lower for kw in ["by", "deadline", "due", "before", "asap", "this week"])
        if has_deadline:
            score += 10
        else:
            suggestions.append("Consider adding a deadline or timeframe")

        # Check attachments mentioned
        mentions_attachment = "attach" in body_lower or "enclosed" in body_lower
        if mentions_attachment:
            score += 5

        # Check for context
        has_context = any(kw in body_lower for kw in ["as discussed", "following up", "regarding", "reference", "per"])
        if has_context:
            score += 5
        else:
            suggestions.append("Provide context (e.g., 'as discussed' or 'following up on')")

        return {
            "completeness_score": round(max(0, min(100, score)), 1),
            "suggestions": suggestions,
            "w_coverage": w_coverage,
            "has_action_items": has_action,
            "has_deadline": has_deadline,
            "mentions_attachments": mentions_attachment,
            "has_context": has_context,
        }

    def score_tone(self, draft: Dict) -> Dict:
        """Score email tone appropriateness."""
        body = draft.get("body", "")
        body_lower = body.lower()
        score = 60.0
        suggestions = []

        # Positive tone indicators
        positive = ["thank", "appreciate", "great", "excellent", "pleased", "glad", "happy", "wonderful"]
        pos_count = sum(1 for p in positive if p in body_lower)
        score += min(pos_count * 5, 15)

        # Negative/aggressive tone
        aggressive = ["unacceptable", "disappointed", "failure", "immediately", "demand", "wrong", "incompetent"]
        agg_count = sum(1 for a in aggressive if a in body_lower)
        score -= agg_count * 10
        if agg_count > 0:
            suggestions.append("Tone may come across as aggressive; consider softening language")

        # Exclamation marks
        excl_count = body.count("!")
        if excl_count > 3:
            score -= 10
            suggestions.append("Reduce exclamation marks for a more professional tone")
        elif excl_count <= 1:
            score += 5

        # Question marks (engagement)
        q_count = body.count("?")
        if 1 <= q_count <= 3:
            score += 5

        # Empathy markers
        empathy = ["understand", "appreciate your", "i realize", "we recognize", "your concern"]
        empathy_count = sum(1 for e in empathy if e in body_lower)
        score += min(empathy_count * 5, 10)

        tone_label = "positive" if score >= 70 else ("neutral" if score >= 50 else "negative")

        return {
            "tone_score": round(max(0, min(100, score)), 1),
            "tone_label": tone_label,
            "suggestions": suggestions,
            "positive_indicators": pos_count,
            "aggressive_indicators": agg_count,
            "exclamation_marks": excl_count,
            "empathy_markers": empathy_count,
        }

    def score_draft(self, draft: Dict, author: str = "unknown") -> Dict:
        """Compute composite quality score for a draft."""
        clarity = self.score_clarity(draft)
        professionalism = self.score_professionalism(draft)
        completeness = self.score_completeness(draft)
        tone = self.score_tone(draft)

        composite = (
            clarity["clarity_score"] * 0.25
            + professionalism["professionalism_score"] * 0.30
            + completeness["completeness_score"] * 0.25
            + tone["tone_score"] * 0.20
        )
        composite = round(max(0, min(100, composite)), 1)

        all_suggestions = []
        all_suggestions.extend(clarity.get("suggestions", []))
        all_suggestions.extend(professionalism.get("suggestions", []))
        all_suggestions.extend(completeness.get("suggestions", []))
        all_suggestions.extend(tone.get("suggestions", []))

        # Record for team benchmarking
        self.team_scores[author].append(composite)
        self.score_history.append({
            "author": author,
            "score": composite,
            "timestamp": datetime.now().isoformat(),
        })

        grade = "A" if composite >= 90 else "B" if composite >= 75 else "C" if composite >= 60 else "D" if composite >= 45 else "F"

        return {
            "email_id": draft.get("id", "unknown"),
            "subject": draft.get("subject", ""),
            "author": author,
            "composite_score": composite,
            "grade": grade,
            "breakdown": {
                "clarity": clarity,
                "professionalism": professionalism,
                "completeness": completeness,
                "tone": tone,
            },
            "improvement_suggestions": all_suggestions,
            "improvement_count": len(all_suggestions),
        }

    def benchmark_team(self) -> Dict:
        """Benchmark scores against team averages."""
        if not self.team_scores:
            return {"team_average": 0, "members": {}}

        all_scores = []
        member_stats = {}
        for author, scores in self.team_scores.items():
            avg = sum(scores) / len(scores)
            all_scores.extend(scores)
            member_stats[author] = {
                "average_score": round(avg, 1),
                "email_count": len(scores),
                "highest": round(max(scores), 1),
                "lowest": round(min(scores), 1),
            }

        team_avg = sum(all_scores) / len(all_scores) if all_scores else 0

        return {
            "team_average": round(team_avg, 1),
            "total_emails_scored": len(all_scores),
            "members": member_stats,
            "top_performer": max(member_stats.items(), key=lambda x: x[1]["average_score"])[0] if member_stats else None,
        }

    def analyze(self, drafts: List[Dict], recipients: List[str]) -> Dict:
        """Run full quality analysis on drafts."""
        enforce_reply_all = len(recipients) > 1

        scored_drafts = []
        for draft in drafts:
            author = draft.get("sender", draft.get("author", "unknown"))
            result = self.score_draft(draft, author=author)
            scored_drafts.append(result)

        benchmark = self.benchmark_team()

        return {
            "engine": "V380 - Email Response Quality Scorer",
            "timestamp": datetime.now().isoformat(),
            "reply_all_required": enforce_reply_all,
            "reply_all_enforced": enforce_reply_all,
            "drafts_scored": len(scored_drafts),
            "scored_drafts": scored_drafts,
            "team_benchmark": benchmark,
            "overall_average": round(
                sum(d["composite_score"] for d in scored_drafts) / max(len(scored_drafts), 1), 1
            ),
            "grade_distribution": {
                grade: sum(1 for d in scored_drafts if d["grade"] == grade)
                for grade in ["A", "B", "C", "D", "F"]
            },
        }


def main():
    scorer = EmailResponseQualityScorer()

    sample_drafts = [
        {
            "id": "draft_001",
            "sender": "alice@company.com",
            "recipients": ["bob@partner.com", "carol@team.com"],
            "subject": "Q3 Planning Follow-up - Action Items and Next Steps",
            "body": "Hi Bob and Carol,\n\nThank you for the productive meeting yesterday. As discussed, here are the key action items from our Q3 planning session:\n\n1. Bob: Please finalize the budget proposal by Friday.\n2. Carol: Coordinate with the engineering team on the migration timeline.\n3. I will follow up with the client regarding the delivery deadline.\n\nPlease find attached the meeting notes for your reference. If you have any questions, please do not hesitate to reach out.\n\nLooking forward to our next sync.\n\nBest regards,\nAlice",
        },
        {
            "id": "draft_002",
            "sender": "dave@company.com",
            "recipients": ["team@company.com"],
            "subject": "update",
            "body": "hey team,\n\ngonna need everyone to submit their reports ASAP. this is unacceptable that we're behind again. i demand these by EOD!!!\n\nthx",
        },
        {
            "id": "draft_003",
            "sender": "eve@company.com",
            "recipients": ["client@external.com", "manager@company.com"],
            "subject": "Project Alpha - Status Update and Timeline",
            "body": "Hello,\n\nI am pleased to share the latest status update on Project Alpha. We have completed the security audit and are on track for the September release.\n\nKey highlights:\n- Security audit passed with no critical findings\n- Beta testing scheduled to begin next week\n- Client onboarding materials are in final review\n\nI appreciate your continued support and patience throughout this process. We recognize the importance of this delivery and are committed to meeting the deadline.\n\nPlease let me know if you have any questions or would like to schedule a follow-up call.\n\nKind regards,\nEve",
        },
        {
            "id": "draft_004",
            "sender": "frank@company.com",
            "recipients": ["alice@company.com", "bob@partner.com", "carol@team.com"],
            "subject": "Re: Q3 Planning",
            "body": "got it. will do my part. no worries about the deadline we can figure it out kinda late but whatever works.\n\nbtw lol did you see the budget numbers?? they're insane",
        },
    ]

    recipients_list = ["bob@partner.com", "carol@team.com"]
    result = scorer.analyze(sample_drafts, recipients=recipients_list)
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()

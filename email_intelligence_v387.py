"""
V387 - Email Tone Adapter
Automatically adjust email tone based on recipient relationship, cultural context,
and formality level. Suggest tone modifications before sending.
"""

import json
import re
from datetime import datetime


class EmailToneAdapter:
    """Engine for adapting email tone based on context and relationships."""

    TONE_LEVELS = {
        "very_formal": {"greetings": ["Dear", "Respected"], "closings": ["Respectfully yours", "Sincerely"], "hedging": ["I would kindly request", "May I suggest"], "emoji_allowed": False},
        "formal": {"greetings": ["Dear", "Hello"], "closings": ["Best regards", "Kind regards"], "hedging": ["I would like to", "Please consider"], "emoji_allowed": False},
        "professional": {"greetings": ["Hi", "Hello"], "closings": ["Thanks", "Best"], "hedging": ["Could you", "Would it be possible"], "emoji_allowed": False},
        "casual": {"greetings": ["Hey", "Hi"], "closings": ["Cheers", "Talk soon"], "hedging": ["Can you", "How about"], "emoji_allowed": True},
        "very_casual": {"greetings": ["Hey", "Yo"], "closings": ["Later", "Peace"], "hedging": ["Wanna", "Let's"], "emoji_allowed": True},
    }

    CULTURAL_ADJUSTMENTS = {
        "US": {"directness": 0.7, "formality_shift": 0, "greeting_preference": "first_name"},
        "UK": {"directness": 0.5, "formality_shift": 1, "greeting_preference": "title_last_name"},
        "Japan": {"directness": 0.3, "formality_shift": 2, "greeting_preference": "title_last_name"},
        "Germany": {"directness": 0.8, "formality_shift": 1, "greeting_preference": "title_last_name"},
        "Brazil": {"directness": 0.5, "formality_shift": -1, "greeting_preference": "first_name"},
        "India": {"directness": 0.4, "formality_shift": 1, "greeting_preference": "title_last_name"},
        "Australia": {"directness": 0.7, "formality_shift": -1, "greeting_preference": "first_name"},
    }

    def __init__(self):
        self.relationship_profiles = {}

    def set_relationship(self, recipient_email, relationship):
        """Set relationship profile for a recipient."""
        self.relationship_profiles[recipient_email] = {
            "type": relationship.get("type", "colleague"),  # boss, colleague, client, friend, vendor
            "cultural_context": relationship.get("cultural_context", "US"),
            "preferred_formality": relationship.get("preferred_formality", "professional"),
            "history_length": relationship.get("history_length", 0),  # number of past exchanges
            "seniority_delta": relationship.get("seniority_delta", 0),  # positive = they're senior
        }

    def analyze_current_tone(self, email_body):
        """Analyze the current tone of an email."""
        indicators = {
            "formality_score": 0,
            "directness_score": 0,
            "warmth_score": 0,
            "urgency_score": 0,
            "detected_issues": [],
        }

        # Formality indicators
        formal_words = ["furthermore", "therefore", "regarding", "pertaining", "hereby", "henceforth"]
        casual_words = ["hey", "gonna", "wanna", "cool", "awesome", "btw", "lol"]
        body_lower = email_body.lower()

        formal_count = sum(1 for w in formal_words if w in body_lower)
        casual_count = sum(1 for w in casual_words if w in body_lower)
        indicators["formality_score"] = min(10, max(0, 5 + formal_count * 2 - casual_count * 2))

        # Directness
        hedging_patterns = [r"(?:perhaps|maybe|possibly|might|could)", r"(?:I think|I believe|I feel)"]
        hedge_count = sum(len(re.findall(p, body_lower)) for p in hedging_patterns)
        indicators["directness_score"] = max(0, 8 - hedge_count * 2)

        # Warmth
        warm_words = ["please", "thank", "appreciate", "great", "wonderful", "happy to"]
        cold_words = ["immediately", "unacceptable", "failure", "demand", "require"]
        warm_count = sum(1 for w in warm_words if w in body_lower)
        cold_count = sum(1 for w in cold_words if w in body_lower)
        indicators["warmth_score"] = min(10, max(0, 5 + warm_count - cold_count * 2))

        # Urgency
        urgent_words = ["asap", "urgent", "immediately", "deadline", "critical", "emergency"]
        urgent_count = sum(1 for w in urgent_words if w in body_lower)
        indicators["urgency_score"] = min(10, urgent_count * 3)

        # Detect issues
        if indicators["formality_score"] < 3 and formal_count == 0 and casual_count > 2:
            indicators["detected_issues"].append("Email is very casual - may not be appropriate for professional context")
        if indicators["directness_score"] > 8 and cold_count > 0:
            indicators["detected_issues"].append("Tone may come across as aggressive or demanding")
        if indicators["warmth_score"] < 3:
            indicators["detected_issues"].append("Email lacks warmth - may seem impersonal")
        if "!" * 2 in email_body:
            indicators["detected_issues"].append("Multiple exclamation marks detected - may seem unprofessional")
        if email_body.isupper() and len(email_body) > 10:
            indicators["detected_issues"].append("ALL CAPS detected - perceived as shouting")

        return indicators

    def adapt_email(self, email_body, recipients):
        """Adapt email tone for the given recipients."""
        all_recipients = recipients.get("to", []) + recipients.get("cc", [])
        reply_all_required = len(all_recipients) > 1

        # Determine target tone based on recipients
        target_formality = "professional"  # default
        cultural_contexts = []
        max_seniority_delta = 0

        for recipient in all_recipients:
            profile = self.relationship_profiles.get(recipient, {})
            if profile:
                cultural_contexts.append(profile.get("cultural_context", "US"))
                max_seniority_delta = max(max_seniority_delta, profile.get("seniority_delta", 0))
                if profile.get("type") in ["boss", "client"]:
                    target_formality = "formal"
                elif profile.get("type") == "friend" and target_formality != "formal":
                    target_formality = "casual"

        # Adjust for seniority
        if max_seniority_delta > 2:
            target_formality = "formal"
        elif max_seniority_delta > 0 and target_formality in ["casual", "very_casual"]:
            target_formality = "professional"

        # Cultural adjustments
        primary_culture = cultural_contexts[0] if cultural_contexts else "US"
        cultural_adj = self.CULTURAL_ADJUSTMENTS.get(primary_culture, self.CULTURAL_ADJUSTMENTS["US"])

        # Apply formality shift from culture
        tone_levels = list(self.TONE_LEVELS.keys())
        current_idx = tone_levels.index(target_formality)
        adjusted_idx = min(len(tone_levels) - 1, max(0, current_idx + cultural_adj["formality_shift"]))
        target_formality = tone_levels[adjusted_idx]

        # Analyze current tone
        current_analysis = self.analyze_current_tone(email_body)

        # Generate adapted version
        adapted = self._apply_tone_adjustments(email_body, target_formality, cultural_adj)

        # Generate suggestions
        suggestions = self._generate_tone_suggestions(current_analysis, target_formality, cultural_adj)

        return {
            "reply_all_required": reply_all_required,
            "reply_all_enforced": reply_all_required,
            "original_tone": current_analysis,
            "target_formality": target_formality,
            "cultural_context": primary_culture,
            "adapted_email": adapted,
            "suggestions": suggestions,
            "recipients_analyzed": len(all_recipients),
        }

    def _apply_tone_adjustments(self, body, target_formality, cultural_adj):
        """Apply tone adjustments to the email body."""
        adapted = body
        tone_config = self.TONE_LEVELS.get(target_formality, self.TONE_LEVELS["professional"])

        # Replace casual greetings with appropriate ones
        if target_formality in ["formal", "very_formal"]:
            adapted = re.sub(r'^(Hey|Yo|Hiya)\b', 'Dear', adapted, flags=re.MULTILINE)
            adapted = re.sub(r'\bgonna\b', 'going to', adapted, flags=re.IGNORECASE)
            adapted = re.sub(r'\bwanna\b', 'want to', adapted, flags=re.IGNORECASE)
            adapted = re.sub(r'\bcool\b', 'satisfactory', adapted, flags=re.IGNORECASE)
            adapted = re.sub(r'\bbtw\b', 'additionally', adapted, flags=re.IGNORECASE)
        elif target_formality == "casual":
            adapted = re.sub(r'^(Dear)\b', 'Hi', adapted, flags=re.MULTILINE)

        # Adjust for cultural directness
        if cultural_adj["directness"] < 0.5:
            # Add hedging for indirect cultures
            adapted = re.sub(r'(You need to)', r'It might be helpful if you could', adapted, flags=re.IGNORECASE)
            adapted = re.sub(r'(Send me)', r'Could you please send me', adapted, flags=re.IGNORECASE)

        return adapted

    def _generate_tone_suggestions(self, analysis, target_formality, cultural_adj):
        """Generate actionable suggestions for tone improvement."""
        suggestions = []

        if analysis["formality_score"] > 7 and target_formality in ["casual", "professional"]:
            suggestions.append("Consider using less formal language to match the relationship")
        if analysis["formality_score"] < 4 and target_formality in ["formal", "very_formal"]:
            suggestions.append("Increase formality - avoid contractions and slang")
        if analysis["directness_score"] > 7 and cultural_adj["directness"] < 0.5:
            suggestions.append("Soften direct statements for cultural sensitivity")
        if analysis["warmth_score"] < 4:
            suggestions.append("Add a personal touch or expression of appreciation")
        if analysis["urgency_score"] > 6:
            suggestions.append("High urgency detected - ensure it's warranted to avoid alarm")
        for issue in analysis["detected_issues"]:
            suggestions.append(f"ISSUE: {issue}")

        return suggestions


def main():
    engine = EmailToneAdapter()

    # Set up relationship profiles
    engine.set_relationship("ceo@company.com", {
        "type": "boss",
        "cultural_context": "US",
        "preferred_formality": "formal",
        "history_length": 50,
        "seniority_delta": 3,
    })
    engine.set_relationship("tanaka@partner.jp", {
        "type": "client",
        "cultural_context": "Japan",
        "preferred_formality": "very_formal",
        "history_length": 10,
        "seniority_delta": 1,
    })
    engine.set_relationship("mate@company.com", {
        "type": "colleague",
        "cultural_context": "Australia",
        "preferred_formality": "casual",
        "history_length": 200,
        "seniority_delta": 0,
    })

    # Sample emails to adapt
    sample_emails = [
        {
            "body": "Hey! I need the report ASAP. Send me the numbers by EOD. This is critical!!",
            "recipients": {"to": ["ceo@company.com"], "cc": []},
            "description": "Overly casual email to CEO",
        },
        {
            "body": "Hi Tanaka-san, We gonna ship the product next week. Cool features included. Let me know if you wanna schedule a demo.",
            "recipients": {"to": ["tanaka@partner.jp"], "cc": ["ceo@company.com"]},
            "description": "Too casual for Japanese client with CEO in CC",
        },
        {
            "body": "Dear Colleague, I would kindly request that you perhaps consider reviewing the attached document at your earliest convenience. Thank you for your attention to this matter.",
            "recipients": {"to": ["mate@company.com"], "cc": []},
            "description": "Overly formal for close colleague",
        },
    ]

    results = []
    for sample in sample_emails:
        result = engine.adapt_email(sample["body"], sample["recipients"])
        result["description"] = sample["description"]
        results.append(result)

    output = {
        "version": "V387",
        "engine": "Email Tone Adapter",
        "timestamp": datetime.now().isoformat(),
        "reply_all_required": any(r["reply_all_required"] for r in results),
        "reply_all_enforced": any(r["reply_all_enforced"] for r in results),
        "tone_adaptations": results,
    }

    print(json.dumps(output, indent=2, default=str))
    return output


if __name__ == "__main__":
    main()

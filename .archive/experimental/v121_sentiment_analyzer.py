"""
v121_sentiment_analyzer.py - Sentiment-aware response generator
Version: 1.2.1 (experimental)
"""

import re
from enum import Enum
from typing import Optional


class Sentiment(Enum):
    POSITIVE = "positive"
    NEGATIVE = "negative"
    NEUTRAL = "neutral"
    MIXED = "mixed"


class SentimentAnalyzer:
    """
    Lightweight sentiment analyzer with response modulation.
    Uses lexicon-based scoring for simplicity and speed.
    """

    POSITIVE_WORDS = {
        "good", "great", "excellent", "amazing", "wonderful", "fantastic",
        "happy", "joy", "love", "beautiful", "best", "awesome", "brilliant",
        "perfect", "lovely", "nice", "superb", "outstanding", "magnificent",
        "delightful", "pleasant", "grateful", "thankful", "blessed", "excited",
        "thrilled", "impressed", "satisfying", "satisfying", "cool", "fun",
        "enjoy", "like", "appreciate", "glad", "pleased", "helpful"
    }

    NEGATIVE_WORDS = {
        "bad", "terrible", "awful", "horrible", "worst", "hate", "sad",
        "angry", "disappointed", "frustrating", "frustrated", "annoying",
        "annoyed", "ugly", "pathetic", "useless", "stupid", "dumb",
        "broken", "fail", "failed", "failure", "problem", "issue", "bug",
        "error", "crash", "sucks", "poor", "negative", "wrong", "miss",
        "missed", "regret", "complaint", "complain", "unhappy", "miserable"
    }

    INTENSIFIERS = {"very", "really", "extremely", "absolutely", "totally", "so", "incredibly"}
    NEGATORS = {"not", "no", "never", "none", "neither", "nobody", "nothing", "nowhere"}

    def __init__(self):
        self.negative_threshold = -0.5
        self.positive_threshold = 0.5

    def _tokenize(self, text: str) -> list[str]:
        """Basic word tokenization."""
        return re.findall(r'\b\w+\b', text.lower())

    def _score_word(self, word: str, context: dict) -> float:
        """Score individual word sentiment."""
        score = 0.0

        if word in self.POSITIVE_WORDS:
            score = 1.0
        elif word in self.NEGATIVE_WORDS:
            score = -1.0

        # Apply intensifiers
        if context.get("intensifier"):
            score *= 1.5

        # Apply negators
        if context.get("negated"):
            score *= -0.5

        return score

    def analyze(self, text: str) -> tuple[Sentiment, float]:
        """
        Analyze text sentiment.
        Returns (Sentiment enum, raw_score).
        """
        if not text or not text.strip():
            return Sentiment.NEUTRAL, 0.0

        tokens = self._tokenize(text)
        score = 0.0
        negated = False
        intensifier = False

        for i, word in enumerate(tokens):
            # Check for negation
            if word in self.NEGATORS:
                negated = True
                continue

            # Check for intensifiers
            if word in self.INTENSIFIERS:
                intensifier = True
                continue

            # Score word
            context = {"negated": negated, "intensifier": intensifier}
            score += self._score_word(word, context)

            # Reset modifiers after use
            negated = False
            intensifier = False

        # Normalize by token count
        if tokens:
            normalized = score / len(tokens)
        else:
            normalized = 0.0

        # Determine sentiment
        if normalized >= self.positive_threshold:
            sentiment = Sentiment.POSITIVE
        elif normalized <= self.negative_threshold:
            sentiment = Sentiment.NEGATIVE
        elif abs(normalized) < 0.1:
            sentiment = Sentiment.NEUTRAL
        else:
            sentiment = Sentiment.MIXED

        return sentiment, normalized

    def get_response_adjustment(self, sentiment: Sentiment) -> dict:
        """Get response modulation parameters based on sentiment."""
        adjustments = {
            Sentiment.POSITIVE: {
                "enthusiasm": 1.2,
                "length_modifier": 1.1,
                "emoji": True
            },
            Sentiment.NEGATIVE: {
                "enthusiasm": 0.7,
                "length_modifier": 1.2,
                "emoji": False,
                "supportive": True
            },
            Sentiment.NEUTRAL: {
                "enthusiasm": 1.0,
                "length_modifier": 1.0,
                "emoji": False
            },
            Sentiment.MIXED: {
                "enthusiasm": 0.9,
                "length_modifier": 1.0,
                "emoji": False
            }
        }
        return adjustments.get(sentiment, adjustments[Sentiment.NEUTRAL])


class SentimentAwareResponder:
    """
    Generates context-aware responses modulated by detected sentiment.
    """

    def __init__(self):
        self.analyzer = SentimentAnalyzer()

    def generate(
        self,
        user_message: str,
        base_response: str,
        sentiment: Optional[Sentiment] = None
    ) -> str:
        """
        Generate a sentiment-adjusted response.
        
        Args:
            user_message: The original user input
            base_response: The base response to modulate
            sentiment: Optional pre-computed sentiment (will analyze if None)
        
        Returns:
            Modulated response string
        """
        if sentiment is None:
            sentiment, score = self.analyzer.analyze(user_message)
        else:
            score = 0.0

        adjustment = self.analyzer.get_response_adjustment(sentiment)

        # Apply sentiment-appropriate prefixes
        prefix = self._get_prefix(sentiment, user_message)
        
        response = base_response
        if prefix:
            response = f"{prefix} {response}"

        # Add supportive closing for negative sentiment
        if adjustment.get("supportive"):
            response = self._add_supportive_closing(response)

        return response

    def _get_prefix(self, sentiment: Sentiment, message: str) -> str:
        """Get sentiment-appropriate prefix."""
        msg_lower = message.lower()

        if sentiment == Sentiment.POSITIVE:
            if any(q in msg_lower for q in ["thank", "thanks"]):
                return "Glad to hear it!"
            elif any(q in msg_lower for q in ["love", "great", "amazing"]):
                return "Absolutely!"
            return "Great!"

        elif sentiment == Sentiment.NEGATIVE:
            if any(q in msg_lower for q in ["problem", "issue", "bug", "error", "broken"]):
                return "I understand — let's fix that."
            elif any(q in msg_lower for q in ["fail", "wrong", "error"]):
                return "That's frustrating. Let me help."
            elif any(q in msg_lower for q in ["hate", "terrible", "awful"]):
                return "I hear you. Sorry you're having a rough time."
            return "I understand that feeling."

        elif sentiment == Sentiment.MIXED:
            return "I see mixed feelings here."

        return ""  # Neutral gets no prefix

    def _add_supportive_closing(self, response: str) -> str:
        """Add a supportive closing for negative sentiment."""
        closings = [
            " Let me know if there's anything I can do to help.",
            " Is there anything else you'd like me to look into?",
            " I'm here if you need more assistance.",
            " Let me know how else I can help!"
        ]
        return response + closings[0]


# Convenience function
def analyze_sentiment(text: str) -> tuple[Sentiment, float]:
    """Quick sentiment analysis."""
    analyzer = SentimentAnalyzer()
    return analyzer.analyze(text)


def generate_response(user_message: str, base_response: str) -> str:
    """Quick sentiment-aware response generation."""
    responder = SentimentAwareResponder()
    return responder.generate(user_message, base_response)


if __name__ == "__main__":
    # Simple demo
    test_messages = [
        "This is amazing! I love it!",
        "This is broken and I hate it.",
        "Just checking in.",
        "It's good but also has some issues.",
        "Thank you so much, you're the best!",
        "I have a problem with the latest update.",
    ]

    responder = SentimentAwareResponder()
    base = "I'm here to help with that."

    print("=== Sentiment Analysis Demo ===\n")
    for msg in test_messages:
        sentiment, score = responder.analyzer.analyze(msg)
        response = responder.generate(msg, base)
        print(f"Input:  {msg}")
        print(f"Sentiment: {sentiment.value} ({score:.2f})")
        print(f"Response: {response}")
        print()

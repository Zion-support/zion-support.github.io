"""
v120_intent_classifier.py - Intent-based email classifier with routing
Version 1.2.0

Classifies email intents and routes to appropriate handlers.
"""

from enum import Enum
from typing import Callable, Optional
import re


class Intent(Enum):
    REPLY = "reply"
    FORWARD = "forward"
    ARCHIVE = "archive"
    DELETE = "delete"
    MARK_READ = "mark_read"
    MARK_UNREAD = "mark_unread"
    TAG = "tag"
    SCHEDULE = "schedule"
    SEARCH = "search"
    COMPOSE = "compose"
    UNKNOWN = "unknown"


# Intent patterns for classification
INTENT_PATTERNS = {
    Intent.REPLY: [
        r"\bre(?:|ply|ply to)\b",
        r"\brespond\b",
        r"\bwrite back\b",
        r"\bget back to\b",
    ],
    Intent.FORWARD: [
        r"\bforward\b",
        r"\bsend (this |it |them )?to\b",
        r"\bpass (this |it |them )?along\b",
    ],
    Intent.ARCHIVE: [
        r"\barchive\b",
        r"\bfile away\b",
        r"\bmove to (archive|folder)\b",
    ],
    Intent.DELETE: [
        r"\bdelete\b",
        r"\bremove\b",
        r"\bdiscard\b",
        r"\btrash\b",
    ],
    Intent.MARK_READ: [
        r"\bmark (as )?read\b",
        r"\bread\b",
        r"\bseen\b",
    ],
    Intent.MARK_UNREAD: [
        r"\bmark (as )?unread\b",
        r"\bunread\b",
    ],
    Intent.TAG: [
        r"\btag\b",
        r"\blabel\b",
        r"\bcategorize\b",
        r"\badd tag\b",
    ],
    Intent.SCHEDULE: [
        r"\bschedule\b",
        r"\bcalendar\b",
        r"\bset (a )?reminder\b",
        r"\bbook\b",
    ],
    Intent.SEARCH: [
        r"\bsearch\b",
        r"\bfind\b",
        r"\blook for\b",
        r"\blocate\b",
    ],
    Intent.COMPOSE: [
        r"\bcompose\b",
        r"\bnew (email|message)\b",
        r"\bwrite (a )?(new )?(email|message)\b",
        r"\bsend (a )?(new )?(email|message)\b",
    ],
}


class IntentClassifier:
    """Classifies email intent from natural language input."""

    def __init__(self):
        self._compiled_patterns: dict[Intent, list[re.Pattern]] = {}
        self._compile_patterns()
        self._routes: dict[Intent, Callable] = {}

    def _compile_patterns(self):
        """Pre-compile regex patterns for performance."""
        for intent, patterns in INTENT_PATTERNS.items():
            self._compiled_patterns[intent] = [
                re.compile(p, re.IGNORECASE) for p in patterns
            ]

    def register_route(self, intent: Intent, handler: Callable):
        """Register a handler function for a specific intent."""
        self._routes[intent] = handler

    def classify(self, text: str) -> tuple[Intent, float]:
        """
        Classify intent from input text.
        
        Returns:
            Tuple of (Intent, confidence_score)
        """
        if not text or not text.strip():
            return Intent.UNKNOWN, 0.0

        text = text.strip().lower()
        scores: dict[Intent, float] = {intent: 0.0 for intent in Intent}

        for intent, patterns in self._compiled_patterns.items():
            for pattern in patterns:
                if pattern.search(text):
                    scores[intent] += 1.0 / len(patterns)

        # Find best match
        best_intent = Intent.UNKNOWN
        best_score = 0.0

        for intent, score in scores.items():
            if score > best_score:
                best_score = score
                best_intent = intent

        # Normalize confidence
        confidence = min(best_score, 1.0)
        return best_intent, confidence

    def route(self, text: str) -> Optional[object]:
        """
        Classify and route to registered handler.
        
        Returns:
            Handler result or None if no handler registered.
        """
        intent, confidence = self.classify(text)
        
        if intent == Intent.UNKNOWN or confidence < 0.3:
            return None
            
        handler = self._routes.get(intent)
        if handler:
            return handler(text, intent, confidence)
        return None


# Default router for email actions
class EmailRouter:
    """Routes classified intents to email actions."""

    def __init__(self):
        self.classifier = IntentClassifier()
        self._setup_default_routes()

    def _setup_default_routes(self):
        """Setup default action handlers."""
        self.classifier.register_route(Intent.REPLY, self._handle_reply)
        self.classifier.register_route(Intent.FORWARD, self._handle_forward)
        self.classifier.register_route(Intent.ARCHIVE, self._handle_archive)
        self.classifier.register_route(Intent.DELETE, self._handle_delete)
        self.classifier.register_route(Intent.MARK_READ, self._handle_mark_read)
        self.classifier.register_route(Intent.MARK_UNREAD, self._handle_mark_unread)
        self.classifier.register_route(Intent.TAG, self._handle_tag)
        self.classifier.register_route(Intent.SCHEDULE, self._handle_schedule)
        self.classifier.register_route(Intent.SEARCH, self._handle_search)
        self.classifier.register_route(Intent.COMPOSE, self._handle_compose)

    def _handle_reply(self, text: str, intent: Intent, conf: float):
        return {"action": "reply", "confidence": conf, "intent": intent.value}

    def _handle_forward(self, text: str, intent: Intent, conf: float):
        return {"action": "forward", "confidence": conf, "intent": intent.value}

    def _handle_archive(self, text: str, intent: Intent, conf: float):
        return {"action": "archive", "confidence": conf, "intent": intent.value}

    def _handle_delete(self, text: str, intent: Intent, conf: float):
        return {"action": "delete", "confidence": conf, "intent": intent.value}

    def _handle_mark_read(self, text: str, intent: Intent, conf: float):
        return {"action": "mark_read", "confidence": conf, "intent": intent.value}

    def _handle_mark_unread(self, text: str, intent: Intent, conf: float):
        return {"action": "mark_unread", "confidence": conf, "intent": intent.value}

    def _handle_tag(self, text: str, intent: Intent, conf: float):
        return {"action": "tag", "confidence": conf, "intent": intent.value}

    def _handle_schedule(self, text: str, intent: Intent, conf: float):
        return {"action": "schedule", "confidence": conf, "intent": intent.value}

    def _handle_search(self, text: str, intent: Intent, conf: float):
        return {"action": "search", "confidence": conf, "intent": intent.value}

    def _handle_compose(self, text: str, intent: Intent, conf: float):
        return {"action": "compose", "confidence": conf, "intent": intent.value}

    def process(self, text: str) -> dict:
        """Process input text and return action dict."""
        result = self.classifier.route(text)
        if result is None:
            intent, conf = self.classifier.classify(text)
            return {
                "action": "unknown",
                "confidence": conf,
                "intent": intent.value,
            }
        return result


if __name__ == "__main__":
    # Example usage
    router = EmailRouter()
    
    test_inputs = [
        "reply to this email",
        "forward to john",
        "archive this",
        "delete the message",
        "mark as read",
        "search for invoices",
    ]
    
    print("Intent Classification Results:")
    print("-" * 50)
    for inp in test_inputs:
        result = router.process(inp)
        print(f"Input: '{inp}'")
        print(f"  -> Action: {result['action']}, Confidence: {result['confidence']:.2f}")
        print()

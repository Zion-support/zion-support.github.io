"""
v122 Smart Reply/Reply-All Router
Intelligent routing for email reply decisions.
Determines whether to reply to sender only or reply-all to entire thread.
"""

from dataclasses import dataclass
from enum import Enum
from typing import Optional


class ReplyMode(Enum):
    """Reply routing modes."""
    REPLY_SENDER = "reply_sender"           # Direct reply to sender only
    REPLY_ALL = "reply_all"                 # Reply to entire thread
    REPLY_SENDER_SILENT = "reply_sender_silent"  # Reply but preserve thread silence


@dataclass
class ReplyContext:
    """Context for reply routing decision."""
    sender: str
    recipient_count: int
    cc_count: int
    subject: str
    thread_depth: int
    has_attachments: bool
    is_distribution_list: bool
    distribution_list_name: Optional[str] = None
    action_items_present: bool = False
    decision_requested: bool = False
    question_asked: bool = False
    announcement: bool = False


@dataclass
class ReplyDecision:
    """Result of routing decision."""
    mode: ReplyMode
    confidence: float  # 0.0 to 1.0
    reasoning: str
    suggested_recipients: list[str]
    include_sender: bool
    include_cc: bool


class SmartReplyRouter:
    """
    Routes email replies to appropriate recipients.
    Decides between reply-sender, reply-all, or silent follow-up.
    """

    # Threshold for auto reply-all (vs reply-sender)
    REPLY_ALL_THRESHOLD = 0.6

    def __init__(self):
        self._distribution_lists = {}

    def register_distribution_list(self, name: str, members: list[str]):
        """Register a known distribution list for context."""
        self._distribution_lists[name.lower()] = members

    def route(self, context: ReplyContext) -> ReplyDecision:
        """
        Main entry point. Analyze context and return routing decision.
        """
        # High-priority cases override normal routing
        if context.announcement:
            return self._route_announcement(context)
        if context.decision_requested:
            return self._route_decision_request(context)
        if context.action_items_present:
            return self._route_action_items(context)

        # Standard routing based on thread characteristics
        return self._route_standard(context)

    def _route_announcement(self, ctx: ReplyContext) -> ReplyDecision:
        """Handle announcement posts - generally don't reply-all."""
        return ReplyDecision(
            mode=ReplyMode.REPLY_SENDER_SILENT,
            confidence=0.9,
            reasoning="Announcement detected; avoid flooding distribution list",
            suggested_recipients=[ctx.sender],
            include_sender=False,
            include_cc=False,
        )

    def _route_decision_request(self, ctx: ReplyContext) -> ReplyDecision:
        """Handle direct decision requests - reply-all to ensure visibility."""
        return ReplyDecision(
            mode=ReplyMode.REPLY_ALL,
            confidence=0.95,
            reasoning="Decision explicitly requested; include all stakeholders",
            suggested_recipients=self._build_recipient_list(ctx, include_all=True),
            include_sender=True,
            include_cc=True,
        )

    def _route_action_items(self, ctx: ReplyContext) -> ReplyDecision:
        """Handle emails with action items - reply-all for accountability."""
        return ReplyDecision(
            mode=ReplyMode.REPLY_ALL,
            confidence=0.85,
            reasoning="Action items detected; route to all for accountability",
            suggested_recipients=self._build_recipient_list(ctx, include_all=True),
            include_sender=True,
            include_cc=True,
        )

    def _route_standard(self, ctx: ReplyContext) -> ReplyDecision:
        """Standard reply routing with multi-factor scoring."""
        score = self._calculate_reply_all_score(ctx)

        if score >= self.REPLY_ALL_THRESHOLD:
            mode = ReplyMode.REPLY_ALL
            confidence = score
        else:
            mode = ReplyMode.REPLY_SENDER
            confidence = 1.0 - score

        reasoning = self._build_reasoning(ctx, score)

        return ReplyDecision(
            mode=mode,
            confidence=confidence,
            reasoning=reasoning,
            suggested_recipients=self._build_recipient_list(ctx, mode == ReplyMode.REPLY_ALL),
            include_sender=mode == ReplyMode.REPLY_ALL or ctx.recipient_count <= 1,
            include_cc=mode == ReplyMode.REPLY_ALL,
        )

    def _calculate_reply_all_score(self, ctx: ReplyContext) -> float:
        """
        Calculate probability that reply-all is appropriate.
        Returns 0.0 (definitely reply-sender) to 1.0 (definitely reply-all).
        """
        score = 0.5  # Neutral starting point

        # Positive indicators for reply-all
        if ctx.question_asked:
            score += 0.15
        if ctx.decision_requested:
            score += 0.20
        if ctx.action_items_present:
            score += 0.15
        if ctx.recipient_count >= 5:
            score += 0.10
        if ctx.thread_depth >= 3:
            score += 0.10
        if ctx.subject.lower().startswith("re:"):
            score += 0.05
        if ctx.is_distribution_list:
            score -= 0.15  # Penalize - DLs get noisy
        if ctx.cc_count >= 3:
            score += 0.05

        # Early thread with few participants = more likely to need reply-all
        if ctx.thread_depth <= 2 and ctx.recipient_count <= 3:
            score += 0.10

        return max(0.0, min(1.0, score))

    def _build_reasoning(self, ctx: ReplyContext, score: float) -> str:
        """Generate human-readable reasoning for the decision."""
        reasons = []

        if ctx.question_asked:
            reasons.append("question detected")
        if ctx.decision_requested:
            reasons.append("decision requested")
        if ctx.action_items_present:
            reasons.append("action items present")
        if ctx.is_distribution_list:
            reasons.append("distribution list")
        if ctx.recipient_count >= 5:
            reasons.append(f"{ctx.recipient_count} recipients")

        base = f"Reply-all score: {score:.0%}. "
        return base + " | ".join(reasons) if reasons else base + "Standard routing."

    def _build_recipient_list(self, ctx: ReplyContext, include_all: bool) -> list[str]:
        """Build the final recipient list based on mode."""
        if include_all:
            recipients = [ctx.sender]
            if ctx.distribution_list_name:
                recipients.append(ctx.distribution_list_name)
            return recipients
        return [ctx.sender]

    def should_auto_send(self, context: ReplyContext) -> bool:
        """
        Quick boolean check for common cases.
        Returns True if auto-reply is safe without user confirmation.
        """
        # Very high confidence cases are safe to auto-route
        if context.decision_requested and context.recipient_count >= 3:
            return True
        if context.announcement and context.recipient_count == 0:
            return True
        return False


def create_from_email_thread(sender: str, to_count: int, cc_count: int,
                              subject: str, thread_depth: int = 1,
                              has_attachments: bool = False,
                              is_distribution_list: bool = False) -> ReplyContext:
    """Factory: create ReplyContext from raw email data."""
    return ReplyContext(
        sender=sender,
        recipient_count=to_count,
        cc_count=cc_count,
        subject=subject,
        thread_depth=thread_depth,
        has_attachments=has_attachments,
        is_distribution_list=is_distribution_list,
    )


# Quick test / demo
if __name__ == "__main__":
    router = SmartReplyRouter()

    # Test cases
    test_cases = [
        create_from_email_thread(
            sender="alice@example.com",
            to_count=10,
            cc_count=2,
            subject="Q3 Planning Discussion",
            thread_depth=5,
            question_asked=True,
        ),
        create_from_email_thread(
            sender="boss@example.com",
            to_count=1,
            cc_count=0,
            subject="Quick clarification",
            thread_depth=1,
        ),
        create_from_email_thread(
            sender="listserv@company.com",
            to_count=50,
            cc_count=0,
            subject="Company-wide Announcement",
            thread_depth=1,
            is_distribution_list=True,
            announcement=True,
        ),
    ]

    for i, ctx in enumerate(test_cases, 1):
        decision = router.route(ctx)
        print(f"\n--- Case {i} ---")
        print(f"From: {ctx.sender}")
        print(f"To: {ctx.recipient_count} recipients, {ctx.cc_count} CC")
        print(f"Mode: {decision.mode.value}")
        print(f"Confidence: {decision.confidence:.0%}")
        print(f"Reasoning: {decision.reasoning}")

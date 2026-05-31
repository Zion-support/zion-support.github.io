#!/usr/bin/env python3
"""
V408 - AI Email Negotiation Coach
==================================
Analyzes negotiation emails, suggests optimal counter-offers, tracks concession
patterns, and flags unfavorable terms.

REPLY-ALL ENFORCEMENT: All send/reply methods automatically include all
original recipients to prevent accidental exclusion in multi-recipient threads.
"""

import json
import re
import logging
import hashlib
from datetime import datetime
from enum import Enum
from collections import defaultdict
from typing import Dict, List, Optional, Set, Tuple, Any

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)
logger = logging.getLogger("V408_NegotiationCoach")


class NegotiationPhase(Enum):
    """Phases of a negotiation."""
    OPENING = "opening"
    DISCOVERY = "discovery"
    BARGAINING = "bargaining"
    CLOSING = "closing"
    AGREED = "agreed"
    DEADLOCKED = "deadlocked"
    COLLAPSED = "collapsed"


class ConcessionType(Enum):
    """Types of concessions made in negotiations."""
    PRICE_REDUCTION = "price_reduction"
    TIMELINE_EXTENSION = "timeline_extension"
    SCOPE_REDUCTION = "scope_reduction"
    ADDED_VALUE = "added_value"
    PAYMENT_TERMS = "payment_terms"
    WARRANTY_EXTENSION = "warranty_extension"
    OTHER = "other"


class NegotiationTerm:
    """Represents a single negotiable term."""

    def __init__(
        self,
        name: str,
        our_target: float,
        our_minimum: float,
        their_position: Optional[float] = None,
        current_position: Optional[float] = None,
        unit: str = "dollars",
    ):
        self.name = name
        self.our_target = our_target
        self.our_minimum = our_minimum
        self.their_position = their_position
        self.current_position = current_position
        self.unit = unit
        self.history: List[Tuple[datetime, float, str]] = []

    @property
    def gap(self) -> Optional[float]:
        """Gap between our position and their position."""
        if self.current_position is not None and self.their_position is not None:
            return abs(self.current_position - self.their_position)
        return None

    @property
    def concession_from_target(self) -> Optional[float]:
        """How far we've moved from our target."""
        if self.current_position is not None:
            return abs(self.current_position - self.our_target)
        return None

    def is_within_bounds(self, value: float) -> bool:
        """Check if a value is within our acceptable range."""
        return self.our_minimum <= value <= self.our_target

    def update_position(self, value: float, party: str):
        """Record a position change."""
        self.history.append((datetime.now(), value, party))
        if party == "us":
            self.current_position = value
        else:
            self.their_position = value


class ConcessionRecord:
    """Records a specific concession made during negotiation."""

    def __init__(
        self,
        party: str,
        concession_type: ConcessionType,
        term_name: str,
        from_value: float,
        to_value: float,
        timestamp: datetime,
        justification: str = "",
    ):
        self.party = party
        self.concession_type = concession_type
        self.term_name = term_name
        self.from_value = from_value
        self.to_value = to_value
        self.timestamp = timestamp
        self.justification = justification

    @property
    def magnitude(self) -> float:
        return abs(self.to_value - self.from_value)

    def to_dict(self) -> dict:
        return {
            "party": self.party,
            "type": self.concession_type.value,
            "term": self.term_name,
            "from": self.from_value,
            "to": self.to_value,
            "magnitude": self.magnitude,
            "timestamp": self.timestamp.isoformat(),
            "justification": self.justification,
        }


class NegotiationThread:
    """Tracks a complete negotiation across an email thread."""

    def __init__(self, thread_id: str, subject: str):
        self.thread_id = thread_id
        self.subject = subject
        self.phase = NegotiationPhase.OPENING
        self.terms: Dict[str, NegotiationTerm] = {}
        self.concessions: List[ConcessionRecord] = []
        self.messages: List[Dict[str, Any]] = []
        self.participants: Set[str] = set()
        self.all_recipients: Set[str] = set()
        self.our_side: Set[str] = set()
        self.their_side: Set[str] = set()
        self.unfavorable_flags: List[Dict[str, Any]] = []
        self.started_at = datetime.now()
        self.last_activity = datetime.now()

    def add_message(self, sender: str, body: str, recipients: List[str], cc: List[str]):
        """Add a message to the negotiation thread."""
        self.messages.append({
            "sender": sender,
            "body": body,
            "recipients": recipients,
            "cc": cc,
            "timestamp": datetime.now().isoformat(),
        })
        self.participants.add(sender)
        self.all_recipients.add(sender)
        self.all_recipients.update(recipients)
        self.all_recipients.update(cc)
        self.last_activity = datetime.now()

    def get_full_recipient_set(self) -> Set[str]:
        """All unique recipients across all messages in the thread."""
        all_r = set()
        for msg in self.messages:
            all_r.add(msg["sender"])
            all_r.update(msg["recipients"])
            all_r.update(msg["cc"])
        return all_r


class NegotiationCoach:
    """
    Main engine that analyzes negotiations and provides coaching.
    Enforces reply-all for all multi-recipient emails.
    """

    NEGOTIATION_SIGNALS = {
        "price": r"\$[\d,]+(?:\.\d{2})?|\d+\s*(?:dollars|USD|EUR|GBP)",
        "discount": r"\d+\s*%\s*(?:off|discount|reduction)",
        "timeline": r"\d+\s*(?:days?|weeks?|months?)",
        "quantity": r"\d+\s*(?:units?|licenses?|seats?|copies)",
        "payment": r"(?:net\s*\d+|payment\s*terms?|installment|upfront)",
        "warranty": r"(?:warranty|guarantee|support)\s*(?:period|duration|length)",
    }

    UNFAVORABLE_PATTERNS = [
        (r"take it or leave it", "ultimatum", 0.9),
        (r"final offer", "final_offer_claim", 0.7),
        (r"non-negotiable", "rigid_position", 0.8),
        (r"or else", "threat", 0.85),
        (r"we (?:have|are) (?:many|other|several) (?:options|alternatives|vendors)", "batna_threat", 0.6),
        (r"(?:immediately|right now|today)", "false_urgency", 0.5),
        (r"exclusive(?:ly)?", "exclusivity_demand", 0.7),
        (r"(?:penalty|liquidated damages)", "penalty_clause", 0.75),
        (r"auto-?renew", "auto_renewal", 0.6),
        (r"unlimited liability", "liability_exposure", 0.95),
    ]

    def __init__(self, our_email_domain: str = "ourcompany.com"):
        self.negotiations: Dict[str, NegotiationThread] = {}
        self.our_email_domain = our_email_domain
        self.reply_all_log: List[Dict[str, Any]] = []
        self.coaching_history: List[Dict[str, Any]] = []
        logger.info("V408 AI Email Negotiation Coach initialized")

    def analyze_incoming_email(
        self,
        message_id: str,
        sender: str,
        recipients: List[str],
        cc: List[str],
        subject: str,
        body: str,
    ) -> Dict[str, Any]:
        """Analyze an incoming email for negotiation content."""
        thread_id = hashlib.md5(
            re.sub(r"^(Re|Fwd):\s*", "", subject, flags=re.IGNORECASE).strip().lower().encode()
        ).hexdigest()[:16]

        if thread_id not in self.negotiations:
            self.negotiations[thread_id] = NegotiationThread(thread_id, subject)

        thread = self.negotiations[thread_id]
        thread.add_message(sender, body, recipients, cc)

        if sender.split("@")[-1] == self.our_email_domain:
            thread.our_side.add(sender)
        else:
            thread.their_side.add(sender)

        extracted_terms = self._extract_terms(body)
        concessions_detected = self._detect_concessions(body, thread)
        unfavorable_flags = self._check_unfavorable_terms(body)
        phase = self._detect_phase(body, thread)
        thread.phase = phase

        analysis = {
            "message_id": message_id,
            "thread_id": thread_id,
            "phase": phase.value,
            "extracted_terms": extracted_terms,
            "concessions_detected": [c.to_dict() for c in concessions_detected],
            "unfavorable_flags": unfavorable_flags,
            "suggestion": self._generate_suggestion(thread, extracted_terms, unfavorable_flags),
            "reply_all_required": len(recipients) + len(cc) > 1,
        }

        thread.unfavorable_flags.extend(unfavorable_flags)
        for flag in unfavorable_flags:
            logger.warning(
                "UNFAVORABLE TERM DETECTED in %s: %s (severity=%.2f)",
                message_id[:8],
                flag["pattern"],
                flag["severity"],
            )

        logger.info(
            "Analyzed negotiation email %s | Phase: %s | Terms: %d | Flags: %d",
            message_id[:8],
            phase.value,
            len(extracted_terms),
            len(unfavorable_flags),
        )
        return analysis

    def _extract_terms(self, body: str) -> List[Dict[str, Any]]:
        """Extract negotiable terms from email body."""
        terms = []
        for term_type, pattern in self.NEGOTIATION_SIGNALS.items():
            matches = re.finditer(pattern, body, re.IGNORECASE)
            for match in matches:
                context_start = max(0, match.start() - 40)
                context_end = min(len(body), match.end() + 40)
                context = body[context_start:context_end].strip()
                numeric = re.findall(r"[\d,]+(?:\.\d+)?", match.group())
                value = 0.0
                if numeric:
                    value = float(numeric[0].replace(",", ""))
                terms.append({
                    "type": term_type,
                    "matched_text": match.group(),
                    "value": value,
                    "context": context,
                })
        return terms

    def _detect_concessions(
        self, body: str, thread: NegotiationThread
    ) -> List[ConcessionRecord]:
        """Detect concessions made in the email."""
        concessions = []
        concession_signals = [
            (r"(?:can|could|would)\s+(?:offer|do|reduce|lower|extend|add)", "potential_offer"),
            (r"(?:we(?:'ll|\s+will)|I(?:'ll|\s+will))\s+(?:accept|agree|concede|lower|reduce)", "acceptance"),
            (r"(?:discount|reduce|lower)\s+(?:to|by)\s+\$?[\d,]+", "price_concession"),
            (r"(?:extend|push)\s+(?:deadline|timeline|delivery)\s+(?:to|by)", "timeline_concession"),
            (r"(?:include|add|throw in)\s+(?:free|complimentary|additional)", "added_value"),
        ]

        for pattern, signal_type in concession_signals:
            if re.search(pattern, body, re.IGNORECASE):
                sender_side = "us" if any(
                    s.split("@")[-1] == self.our_email_domain
                    for s in [thread.messages[-1]["sender"]] if thread.messages
                ) else "them"
                record = ConcessionRecord(
                    party=sender_side,
                    concession_type=ConcessionType.OTHER,
                    term_name=signal_type,
                    from_value=0,
                    to_value=0,
                    timestamp=datetime.now(),
                    justification=signal_type,
                )
                concessions.append(record)
                thread.concessions.append(record)

        return concessions

    def _check_unfavorable_terms(self, body: str) -> List[Dict[str, Any]]:
        """Check for unfavorable negotiation terms."""
        flags = []
        for pattern, label, severity in self.UNFAVORABLE_PATTERNS:
            match = re.search(pattern, body, re.IGNORECASE)
            if match:
                flags.append({
                    "pattern": label,
                    "matched_text": match.group(),
                    "severity": severity,
                    "recommendation": self._get_unfavorable_recommendation(label),
                })
        return flags

    @staticmethod
    def _get_unfavorable_recommendation(label: str) -> str:
        """Get recommendation for handling an unfavorable term."""
        recommendations = {
            "ultimatum": "Do not accept ultimatums. Propose a cooling-off period and counter with alternatives.",
            "final_offer_claim": "Test the 'final offer' by proposing a small modification. Often not truly final.",
            "rigid_position": "Explore underlying interests. Ask 'why' to understand the constraint.",
            "threat": "Document the threat. Escalate to management if needed. Do not concede under pressure.",
            "batna_threat": "Strengthen your own BATNA. Ask for specifics about alternatives to test credibility.",
            "false_urgency": "Verify the urgency independently. Don't let artificial deadlines drive concessions.",
            "exclusivity_demand": "Exclusivity has high value — demand premium pricing or volume commitments.",
            "penalty_clause": "Negotiate penalty caps and mutual penalty provisions. Involve legal.",
            "auto_renewal": "Ensure clear opt-out terms and notice periods. Cap auto-renewal price increases.",
            "liability_exposure": "CRITICAL: Negotiate liability caps. Never accept unlimited liability.",
        }
        return recommendations.get(label, "Review carefully before proceeding.")

    def _detect_phase(self, body: str, thread: NegotiationThread) -> NegotiationPhase:
        """Detect the current negotiation phase from email content."""
        msg_count = len(thread.messages)
        if msg_count <= 1:
            return NegotiationPhase.OPENING

        body_lower = body.lower()
        if any(p in body_lower for p in ["agreed", "accepted", "deal", "signed", "confirmed"]):
            return NegotiationPhase.AGREED
        if any(p in body_lower for p in ["deadlock", "impasse", "cannot agree", "walk away"]):
            return NegotiationPhase.DEADLOCKED
        if any(p in body_lower for p in ["final terms", "contract ready", "sign by", "closing"]):
            return NegotiationPhase.CLOSING
        if any(p in body_lower for p in ["counter", "offer", "propose", "how about", "would you consider"]):
            return NegotiationPhase.BARGAINING
        if any(p in body_lower for p in ["tell me more", "what are", "can you explain", "details"]):
            return NegotiationPhase.DISCOVERY
        return NegotiationPhase.BARGAINING if msg_count > 3 else NegotiationPhase.DISCOVERY

    def _generate_suggestion(
        self,
        thread: NegotiationThread,
        terms: List[Dict[str, Any]],
        flags: List[Dict[str, Any]],
    ) -> Dict[str, Any]:
        """Generate coaching suggestion based on analysis."""
        suggestion = {
            "phase_advice": "",
            "counter_offer": None,
            "caution_items": [],
            "next_move": "",
        }

        phase_advice = {
            NegotiationPhase.OPENING: "Build rapport. Establish your anchor position firmly. Don't reveal your BATNA.",
            NegotiationPhase.DISCOVERY: "Ask open-ended questions. Understand their priorities and constraints.",
            NegotiationPhase.BARGAINING: "Trade concessions, don't give them. Use 'if...then' framing.",
            NegotiationPhase.CLOSING: "Summarize agreed terms. Watch for last-minute nibbles. Get everything in writing.",
            NegotiationPhase.AGREED: "Confirm all terms in writing. Set implementation timeline.",
            NegotiationPhase.DEADLOCKED: "Consider bringing in a mediator. Explore creative alternatives.",
            NegotiationPhase.COLLAPSED: "Preserve the relationship for future opportunities. Exit gracefully.",
        }
        suggestion["phase_advice"] = phase_advice.get(thread.phase, "Assess the situation.")

        for flag in flags:
            suggestion["caution_items"].append({
                "issue": flag["pattern"],
                "severity": flag["severity"],
                "recommendation": flag["recommendation"],
            })

        if terms:
            price_terms = [t for t in terms if t["type"] == "price" and t["value"] > 0]
            if price_terms:
                their_price = price_terms[-1]["value"]
                suggested_counter = their_price * 0.85
                suggestion["counter_offer"] = {
                    "their_position": their_price,
                    "suggested_counter": round(suggested_counter, 2),
                    "rationale": "Counter at 85% of their position to create room for convergence.",
                    "acceptable_range": f"${their_price * 0.9:,.2f} - ${their_price * 0.95:,.2f}",
                }

        our_concessions = sum(1 for c in thread.concessions if c.party == "us")
        their_concessions = sum(1 for c in thread.concessions if c.party == "them")
        if our_concessions > their_concessions + 2:
            suggestion["next_move"] = (
                "STOP conceding. You've made significantly more concessions. "
                "Hold firm and ask them to match your last offer."
            )
        elif thread.phase == NegotiationPhase.BARGAINING:
            suggestion["next_move"] = (
                "Use conditional concession: 'If you can [X], then we could consider [Y].'"
            )
        else:
            suggestion["next_move"] = f"Continue with {thread.phase.value} phase strategy."

        self.coaching_history.append({
            "thread_id": thread.thread_id,
            "timestamp": datetime.now().isoformat(),
            "phase": thread.phase.value,
            "suggestion": suggestion,
        })

        return suggestion

    def reply_with_counter(
        self,
        thread_id: str,
        my_email: str,
        counter_body: str,
    ) -> Dict[str, Any]:
        """
        Send a counter-offer reply with reply-all enforcement.
        All original recipients are automatically included.
        """
        thread = self.negotiations.get(thread_id)
        if not thread:
            return {"status": "error", "reason": "Negotiation thread not found"}

        all_recipients = thread.get_full_recipient_set()
        all_recipients.discard(my_email)

        last_msg = thread.messages[-1] if thread.messages else None
        if last_msg:
            primary_recipients = list(
                set(last_msg["recipients"] + [last_msg["sender"]]) - {my_email}
            )
            cc_recipients = list(all_recipients - set(primary_recipients))
        else:
            primary_recipients = list(all_recipients)
            cc_recipients = []

        reply_id = hashlib.md5(
            f"counter_{thread_id}_{datetime.now().isoformat()}".encode()
        ).hexdigest()[:16]

        thread.add_message(my_email, counter_body, primary_recipients, cc_recipients)

        self.reply_all_log.append({
            "reply_id": reply_id,
            "thread_id": thread_id,
            "to": primary_recipients,
            "cc": cc_recipients,
            "reply_all_enforced": True,
            "timestamp": datetime.now().isoformat(),
        })

        logger.info(
            "REPLY-ALL ENFORCED: Counter-offer %s sent to %d To + %d CC | Thread: %s",
            reply_id[:8],
            len(primary_recipients),
            len(cc_recipients),
            thread_id[:8],
        )

        return {
            "status": "counter_sent",
            "reply_id": reply_id,
            "to": primary_recipients,
            "cc": cc_recipients,
            "reply_all_enforced": True,
            "phase": thread.phase.value,
        }

    def send_negotiation_email(
        self,
        sender: str,
        recipients: List[str],
        cc: List[str],
        subject: str,
        body: str,
    ) -> Dict[str, Any]:
        """
        Initiate a new negotiation email with reply-all enforcement.
        """
        thread_key = re.sub(r"^(Re|Fwd):\s*", "", subject, flags=re.IGNORECASE).strip().lower()
        thread_id = hashlib.md5(thread_key.encode()).hexdigest()[:16]

        enforced_cc = list(cc)
        if thread_id in self.negotiations:
            thread = self.negotiations[thread_id]
            prior = thread.get_full_recipient_set() - {sender} - set(recipients) - set(cc)
            if prior:
                enforced_cc.extend(prior)
                logger.warning(
                    "REPLY-ALL ENFORCEMENT (new neg): Added %d prior participants to CC",
                    len(prior),
                )

        if thread_id not in self.negotiations:
            self.negotiations[thread_id] = NegotiationThread(thread_id, subject)
        self.negotiations[thread_id].add_message(sender, body, recipients, enforced_cc)

        msg_id = hashlib.md5(f"neg_{sender}_{datetime.now().isoformat()}".encode()).hexdigest()[:16]

        return {
            "status": "sent",
            "message_id": msg_id,
            "to": recipients,
            "cc": enforced_cc,
            "reply_all_enforced": len(enforced_cc) > len(cc),
            "thread_id": thread_id,
        }

    def get_negotiation_summary(self, thread_id: str) -> Optional[Dict[str, Any]]:
        """Get a comprehensive summary of a negotiation."""
        thread = self.negotiations.get(thread_id)
        if not thread:
            return None

        our_conc = [c for c in thread.concessions if c.party == "us"]
        their_conc = [c for c in thread.concessions if c.party == "them"]

        return {
            "thread_id": thread_id,
            "subject": thread.subject,
            "phase": thread.phase.value,
            "messages_exchanged": len(thread.messages),
            "participants": list(thread.participants),
            "our_concessions": len(our_conc),
            "their_concessions": len(their_conc),
            "concession_balance": f"Us: {len(our_conc)} / Them: {len(their_conc)}",
            "unfavorable_flags": len(thread.unfavorable_flags),
            "terms": {name: {
                "our_target": t.our_target,
                "our_minimum": t.our_minimum,
                "their_position": t.their_position,
                "current": t.current_position,
                "gap": t.gap,
            } for name, t in thread.terms.items()},
            "started_at": thread.started_at.isoformat(),
            "last_activity": thread.last_activity.isoformat(),
        }

    def get_coaching_report(self) -> Dict[str, Any]:
        """Generate a full coaching report across all active negotiations."""
        active = {
            tid: t for tid, t in self.negotiations.items()
            if t.phase not in (NegotiationPhase.AGREED, NegotiationPhase.COLLAPSED)
        }
        return {
            "generated_at": datetime.now().isoformat(),
            "active_negotiations": len(active),
            "total_negotiations": len(self.negotiations),
            "phases": {
                phase.value: sum(1 for t in self.negotiations.values() if t.phase == phase)
                for phase in NegotiationPhase
            },
            "total_concessions_made": sum(
                len([c for c in t.concessions if c.party == "us"])
                for t in self.negotiations.values()
            ),
            "total_unfavorable_flags": sum(
                len(t.unfavorable_flags) for t in self.negotiations.values()
            ),
            "reply_all_enforcements": len(self.reply_all_log),
        }


if __name__ == "__main__":
    coach = NegotiationCoach(our_email_domain="ourco.com")

    analysis = coach.analyze_incoming_email(
        message_id="neg001",
        sender="vendor@supplier.com",
        recipients=["me@ourco.com", "procurement@ourco.com"],
        cc=["legal@ourco.com"],
        subject="Enterprise License Agreement - Proposal",
        body="Thank you for your interest. Our proposed pricing is $150,000 annually "
             "for 500 seats with net-30 payment terms. This includes a 12-month warranty "
             "and auto-renewal clause. This is our final offer and is non-negotiable. "
             "We have several other vendors interested in this deal.",
    )
    print(f"Analysis: {json.dumps(analysis, indent=2, default=str)}")

    reply = coach.reply_with_counter(
        thread_id=analysis["thread_id"],
        my_email="me@ourco.com",
        counter_body="Thank you for the proposal. We'd like to propose $120,000 annually "
                     "for 500 seats with net-45 payment terms and a 24-month warranty. "
                     "We also need to remove the auto-renewal clause.",
    )
    print(f"\nCounter reply: {json.dumps(reply, indent=2, default=str)}")

    summary = coach.get_negotiation_summary(analysis["thread_id"])
    print(f"\nSummary: {json.dumps(summary, indent=2, default=str)}")

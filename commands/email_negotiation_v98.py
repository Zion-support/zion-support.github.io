#!/usr/bin/env python3
"""V98: AI Email Negotiation Intelligence
Detect negotiation patterns, suggest counter-offers, track deal progression
across email threads, score win/loss probability, and optimize pricing strategy."""
import json, hashlib, re
from datetime import datetime
from typing import Dict, List, Optional
from dataclasses import dataclass, field
from enum import Enum

class NegotiationPhase(Enum):
    INITIAL_INQUIRY = "initial_inquiry"
    PROPOSAL_SENT = "proposal_sent"
    COUNTER_OFFER = "counter_offer"
    OBJECTION = "objection"
    CLOSING = "closing"
    WON = "won"
    LOST = "lost"

class NegotiationTactic(Enum):
    ANCHORING = "anchoring"
    RECIPROCITY = "reciprocity"
    SCARCITY = "scarcity"
    SOCIAL_PROOF = "social_proof"
    AUTHORITY = "authority"
    URGENCY = "urgency"
    COMPROMISE = "compromise"
    WALK_AWAY = "walk_away"

class PriceSignal(Enum):
    TOO_HIGH = "too_high"
    ACCEPTABLE = "acceptable"
    UNDERPRICED = "underpriced"
    BUDGET_CONSTRAINED = "budget_constrained"

@dataclass
class NegotiationContext:
    deal_id: str
    sender: str
    phase: NegotiationPhase
    our_price: float
    their_budget: Optional[float]
    their_offer: Optional[float]
    gap: float
    win_probability: float
    tactics_detected: List[NegotiationTactic]
    objections: List[str]
    suggested_response: str
    suggested_price: float
    reply_all: bool = True

class V98NegotiationIntelligence:
    def __init__(self):
        self.deals: Dict[str, NegotiationContext] = {}
        self.thread_history: Dict[str, List[Dict]] = {}
        self.metrics = {"deals_tracked": 0, "counter_offers_generated": 0, "objections_handled": 0, "avg_win_rate": 0.62}

    def analyze_negotiation(self, email_data: Dict) -> Optional[NegotiationContext]:
        text = (email_data.get("subject", "") + " " + email_data.get("body", "")).lower()
        neg_signals = ["price", "cost", "budget", "discount", "too expensive", "afford",
            "negotiate", "offer", "counter", "deal", "pricing", "quote", "rate"]
        signal_count = sum(1 for s in neg_signals if s in text)
        if signal_count < 2 and not self._is_existing_deal(email_data):
            return None

        sender = email_data.get("from", "")
        deal_id = self._get_deal_id(sender, email_data.get("thread_id", ""))
        phase = self._detect_phase(text)
        their_offer = self._extract_number(text, ["offer", "budget", "can pay", "willing to pay"])
        our_price = self._get_our_price(deal_id)
        their_budget = self._extract_number(text, ["budget", "allocated", "spend"])
        gap = our_price - (their_offer or their_budget or our_price * 0.8)
        tactics = self._detect_tactics(text)
        objections = self._extract_objections(text)
        win_prob = self._calculate_win_probability(phase, gap, our_price, tactics, objections)
        suggested_price = self._suggest_price(our_price, their_offer, their_budget, win_prob)
        suggested_response = self._generate_negotiation_response(phase, objections, tactics, gap, suggested_price)

        ctx = NegotiationContext(
            deal_id=deal_id, sender=sender, phase=phase,
            our_price=our_price, their_budget=their_budget, their_offer=their_offer,
            gap=gap, win_probability=win_prob, tactics_detected=tactics,
            objections=objections, suggested_response=suggested_response,
            suggested_price=suggested_price, reply_all=True,
        )
        self.deals[deal_id] = ctx
        self.metrics["deals_tracked"] += 1
        if objections:
            self.metrics["objections_handled"] += len(objections)
        return ctx

    def _is_existing_deal(self, email_data: Dict) -> bool:
        sender = email_data.get("from", "")
        return any(sender in d.sender for d in self.deals.values())

    def _get_deal_id(self, sender: str, thread_id: str) -> str:
        for did, deal in self.deals.items():
            if deal.sender == sender: return did
        return hashlib.md5(f"{sender}_{thread_id}".encode()).hexdigest()[:10]

    def _detect_phase(self, text: str) -> NegotiationPhase:
        if any(w in text for w in ["initial", "interested", "learning about"]):
            return NegotiationPhase.INITIAL_INQUIRY
        if any(w in text for w in ["proposal", "quote", "estimate"]):
            return NegotiationPhase.PROPOSAL_SENT
        if any(w in text for w in ["counter", "instead", "how about", "what if"]):
            return NegotiationPhase.COUNTER_OFFER
        if any(w in text for w in ["concern", "worried", "too expensive", "objection", "hesitant"]):
            return NegotiationPhase.OBJECTION
        if any(w in text for w in ["final offer", "last chance", "sign", "agree", "accept"]):
            return NegotiationPhase.CLOSING
        return NegotiationPhase.PROPOSAL_SENT

    def _extract_number(self, text: str, context_words: List[str]) -> Optional[float]:
        for word in context_words:
            pattern = rf'{word}[^$\d]*\$?([\d,]+\.?\d*)'
            match = re.search(pattern, text, re.IGNORECASE)
            if match:
                try:
                    return float(match.group(1).replace(',', ''))
                except ValueError:
                    continue
        amounts = re.findall(r'\$?([\d,]{3,}\.?\d*)', text)
        if amounts:
            try:
                return max(float(a.replace(',', '')) for a in amounts)
            except ValueError:
                pass
        return None

    def _get_our_price(self, deal_id: str) -> float:
        if deal_id in self.deals:
            return self.deals[deal_id].our_price
        return 5000.0  # Default base price

    def _detect_tactics(self, text: str) -> List[NegotiationTactic]:
        tactics = []
        tactic_patterns = {
            NegotiationTactic.ANCHORING: ["only", "just", "starting at", "as low as"],
            NegotiationTactic.RECIPROCITY: ["if you", "we could", "in exchange", "mutual"],
            NegotiationTactic.SCARCITY: ["limited", "only a few", "running out", "exclusive"],
            NegotiationTactic.SOCIAL_PROOF: ["other clients", "similar companies", "everyone", "industry standard"],
            NegotiationTactic.AUTHORITY: ["expert", "recommended", "certified", "leader"],
            NegotiationTactic.URGENCY: ["deadline", "soon", "limited time", "expiring", "today"],
            NegotiationTactic.WALK_AWAY: ["consider other", "competitor", "alternative", "look elsewhere"],
        }
        for tactic, patterns in tactic_patterns.items():
            if any(p in text for p in patterns):
                tactics.append(tactic)
        return tactics

    def _extract_objections(self, text: str) -> List[str]:
        objections = []
        objection_patterns = {
            "Price too high": ["too expensive", "costly", "over budget", "can't afford", "price is high"],
            "Timing concerns": ["not the right time", "later", "next quarter", "too soon"],
            "Need approval": ["need to check with", "boss", "team needs to", "approval", "stakeholder"],
            "Competitor comparison": ["competitor offers", "other vendor", "cheaper option", "alternative"],
            "Feature gap": ["doesn't have", "missing", "need feature", "requirement not met"],
            "Trust concerns": ["not sure", "skeptical", "prove it", "case study", "references"],
        }
        for obj, patterns in objection_patterns.items():
            if any(p in text for p in patterns):
                objections.append(obj)
        return objections

    def _calculate_win_probability(self, phase: NegotiationPhase, gap: float, our_price: float,
                                  tactics: List[NegotiationTactic], objections: List[str]) -> float:
        base_probs = {
            NegotiationPhase.INITIAL_INQUIRY: 0.3,
            NegotiationPhase.PROPOSAL_SENT: 0.45,
            NegotiationPhase.COUNTER_OFFER: 0.55,
            NegotiationPhase.OBJECTION: 0.4,
            NegotiationPhase.CLOSING: 0.75,
        }
        prob = base_probs.get(phase, 0.4)
        if our_price > 0:
            gap_ratio = abs(gap) / our_price
            if gap_ratio < 0.1: prob += 0.15
            elif gap_ratio > 0.3: prob -= 0.2
        if len(objections) > 2: prob -= 0.15
        elif len(objections) == 0: prob += 0.1
        if NegotiationTactic.WALK_AWAY in tactics: prob -= 0.1
        if NegotiationTactic.URGENCY in tactics: prob += 0.05
        return max(0.05, min(0.95, prob))

    def _suggest_price(self, our_price: float, their_offer: Optional[float],
                      their_budget: Optional[float], win_prob: float) -> float:
        reference = their_offer or their_budget or our_price * 0.8
        gap = our_price - reference
        if win_prob > 0.7:
            return our_price
        elif win_prob > 0.5:
            return our_price - (gap * 0.3)
        elif win_prob > 0.3:
            return our_price - (gap * 0.5)
        else:
            return max(reference * 1.1, our_price * 0.7)

    def _generate_negotiation_response(self, phase: NegotiationPhase, objections: List[str],
                                      tactics: List[NegotiationTactic], gap: float, suggested_price: float) -> str:
        responses = {
            NegotiationPhase.OBJECTION: "I understand your concerns. Let me address each one:\n\n",
            NegotiationPhase.COUNTER_OFFER: "Thank you for your counter-offer. Here's what I can do:\n\n",
            NegotiationPhase.CLOSING: "Great to hear we're close to an agreement! Here are the final details:\n\n",
        }
        base = responses.get(phase, "Thank you for your feedback.\n\n")
        objection_handlers = {
            "Price too high": "• **Pricing:** Our solution delivers ROI of 3-5x within 6 months. I can offer flexible payment terms or a phased rollout to spread the investment.",
            "Timing concerns": "• **Timing:** We can start with a pilot program to minimize risk while you evaluate the full value.",
            "Need approval": "• **Approval:** I'm happy to provide executive summaries, ROI calculators, or join a call with your stakeholders.",
            "Competitor comparison": "• **Comparison:** We differentiate through [unique value]. I'd love to show a side-by-side comparison.",
            "Feature gap": "• **Features:** Let me map your requirements to our capabilities and identify the best fit.",
            "Trust concerns": "• **Trust:** Here are 3 relevant case studies and references from similar clients.",
        }
        for obj in objections:
            if obj in objection_handlers:
                base += objection_handlers[obj] + "\n"
        return base

    def generate_negotiation_email(self, email_data: Dict, ctx: NegotiationContext) -> Dict:
        body = f"""{ctx.suggested_response}

**Suggested investment: ${ctx.suggested_price:,.0f}**

I'm confident this delivers significant value. Please reply-all with your thoughts or let me know if you'd like to discuss further on a call.

Best regards,
Kleber Garcia Alcatrão
Zion Tech Group
📞 +1 302 464 0950
✉️ kleber@ziontechgroup.com
📍 364 E Main St STE 1008, Middletown, DE 19709"""

        return {
            "to": email_data.get("from", ""),
            "cc": email_data.get("to", []) + email_data.get("cc", []),
            "reply_all": True,
            "subject": f"Re: {email_data.get('subject', '')} — Next Steps",
            "body": body,
            "deal_id": ctx.deal_id,
            "phase": ctx.phase.value,
            "win_probability": f"{ctx.win_probability:.0%}",
            "suggested_price": ctx.suggested_price,
            "objections_handled": len(ctx.objections),
        }

    def get_deal_dashboard(self) -> Dict:
        return {
            "total_deals": len(self.deals),
            "by_phase": {p.value: sum(1 for d in self.deals.values() if d.phase == p) for p in NegotiationPhase},
            "avg_win_probability": sum(d.win_probability for d in self.deals.values()) / max(len(self.deals), 1),
            "total_pipeline_value": sum(d.our_price for d in self.deals.values()),
            "weighted_pipeline": sum(d.our_price * d.win_probability for d in self.deals.values()),
        }

    def get_metrics(self) -> Dict:
        return self.metrics

if __name__ == "__main__":
    engine = V98NegotiationIntelligence()
    tests = [
        {"id": "e1", "from": "buyer@enterprise.com", "to": ["kleber@ziontechgroup.com"], "cc": ["cfo@enterprise.com"],
            "subject": "Re: Proposal pricing", "body": "Thanks for the proposal. Your price of $15,000 is too expensive. Our budget is only $10,000. Competitor offers similar for $8,000. Need approval from my boss. Can you do $9,000?", "thread_id": "t1"},
        {"id": "e2", "from": "prospect@startup.io", "to": ["kleber@ziontechgroup.com"], "cc": ["cto@startup.io"],
            "subject": "Interested but concerned", "body": "Love the solution but worried about implementation time. Not the right time maybe. Can you share case studies and references?", "thread_id": "t2"},
        {"id": "e3", "from": "decision@bigcorp.com", "to": ["kleber@ziontechgroup.com"], "cc": ["team@bigcorp.com"],
            "subject": "Ready to move forward", "body": "We've reviewed the proposal and would like to sign. Final offer at the quoted price. Limited time as our budget expires this quarter.", "thread_id": "t3"},
    ]
    for email in tests:
        ctx = engine.analyze_negotiation(email)
        if ctx:
            resp = engine.generate_negotiation_email(email, ctx)
            print(f"\n{'='*60}")
            print(f"Deal: {ctx.deal_id} | Phase: {ctx.phase.value}")
            print(f"Our: ${ctx.our_price:,.0f} | Their: ${ctx.their_offer or ctx.their_budget or 0:,.0f} | Gap: ${ctx.gap:,.0f}")
            print(f"Win Prob: {ctx.win_probability:.0%} | Suggested: ${ctx.suggested_price:,.0f}")
            print(f"Tactics: {[t.value for t in ctx.tactics_detected]}")
            print(f"Objections: {ctx.objections}")
            print(f"Reply All: {resp['reply_all']} | CC: {len(resp['cc'])}")
    print(f"\nDashboard: {json.dumps(engine.get_deal_dashboard(), indent=2)}")
    print(f"Metrics: {json.dumps(engine.get_metrics(), indent=2)}")

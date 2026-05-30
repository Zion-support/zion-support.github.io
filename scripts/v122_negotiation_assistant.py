#!/usr/bin/env python3
"""
V122: AI Negotiation Assistant
Real-time negotiation coaching: detect leverage points, suggest counter-offers, track concessions, optimize deals.
"""
import re, json, hashlib
from datetime import datetime
from dataclasses import dataclass, field
from typing import List, Dict, Optional, Tuple
from enum import Enum

class NegotiationPhase(Enum):
    OPENING = "opening"
    DISCOVERY = "discovery"
    PROPOSAL = "proposal"
    BARGAINING = "bargaining"
    CLOSING = "closing"
    AGREED = "agreed"
    STALLED = "stalled"

class LeverageType(Enum):
    TIME_PRESSURE = "time_pressure"
    COMPETITOR_MENTION = "competitor_mention"
    BUDGET_CONSTRAINT = "budget_constraint"
    DECISION_AUTHORITY = "decision_authority"
    ALTERNATIVE_OPTIONS = "alternative_options"
    URGENCY = "urgency"
    VOLUME_COMMITMENT = "volume_commitment"
    LONG_TERM_PARTNERSHIP = "long_term_partnership"

class ConcessionType(Enum):
    PRICE = "price"
    TERMS = "terms"
    TIMELINE = "timeline"
    SCOPE = "scope"
    SUPPORT = "support"
    PAYMENT = "payment_terms"

@dataclass
class NegotiationInsight:
    email_id: str
    phase: NegotiationPhase
    leverage_points: List[LeverageType]
    counter_party_position: Dict
    suggested_response: str
    concessions_made: List[ConcessionType]
    concessions_received: List[ConcessionType]
    deal_probability: float  # 0-1
    recommended_tactic: str
    walk_away_risk: float  # 0-1
    estimated_value: float
    reply_all_required: bool

class NegotiationAssistant:
    """V122: Real-time negotiation coaching for email exchanges."""
    
    LEVERAGE_SIGNALS = {
        LeverageType.TIME_PRESSURE: ["deadline", "by end of", "this week", "urgent", "need to decide"],
        LeverageType.COMPETITOR_MENTION: ["competitor", "other vendor", "alternative", "also considering", "shopping around"],
        LeverageType.BUDGET_CONSTRAINT: ["budget", "can't afford", "too expensive", "price limit", "cost concern"],
        LeverageType.DECISION_AUTHORITY: ["need approval", "my boss", "board", "committee", "need to discuss internally"],
        LeverageType.ALTERNATIVE_OPTIONS: ["build in-house", "do it ourselves", "different approach", "other solution"],
        LeverageType.URGENCY: ["asap", "immediately", "right away", "can't wait", "time-sensitive"],
        LeverageType.VOLUME_COMMITMENT: ["annual", "multi-year", "enterprise-wide", "all departments", "500+ users"],
        LeverageType.LONG_TERM_PARTNERSHIP: ["long-term", "ongoing", "strategic partner", "multi-year relationship"],
    }
    
    CONCESSION_SIGNALS = {
        ConcessionType.PRICE: ["discount", "reduce price", "lower cost", "special pricing", "waive fee"],
        ConcessionType.TERMS: ["extend trial", "flexible terms", "month-to-month", "no commitment"],
        ConcessionType.TIMELINE: ["faster delivery", "expedite", "priority", "rush"],
        ConcessionType.SCOPE: ["additional feature", "extra module", "add-on", "included at no cost"],
        ConcessionType.SUPPORT: ["dedicated support", "24/7", "premium support", "onboarding help"],
        ConcessionType.PAYMENT: ["net-60", "installments", "deferred payment", "no upfront"],
    }
    
    TACTICS = {
        NegotiationPhase.OPENING: "Establish rapport and understand their needs before discussing price",
        NegotiationPhase.DISCOVERY: "Ask probing questions to uncover pain points and budget flexibility",
        NegotiationPhase.PROPOSAL: "Anchor high with value justification; frame as investment, not cost",
        NegotiationPhase.BARGAINING: "Trade concessions — never give without getting something in return",
        NegotiationPhase.CLOSING: "Create urgency with limited-time offers; summarize value delivered",
        NegotiationPhase.STALLED: "Re-engage with new value proposition or creative alternative",
    }
    
    COUNTER_OFFER_TEMPLATES = [
        "I understand your position on {topic}. What if we could {creative_solution} while keeping the investment at {adjusted_price}?",
        "We can offer {concession} if you're able to commit to {counter_commitment}.",
        "Rather than reducing the price, let me show you how we can add {extra_value} at the current rate.",
        "I can bring this to {amount} if we can agree to {terms_change}.",
    ]
    
    def __init__(self):
        self.negotiations: Dict[str, List[NegotiationInsight]] = {}
        self.total_insights = 0
        self.reply_all_count = 0
    
    def analyze_negotiation_email(self, email: Dict, thread_id: str = None) -> NegotiationInsight:
        """Analyze a negotiation email and provide coaching."""
        body = email.get("body", "")
        subject = email.get("subject", "")
        sender = email.get("from", "")
        text = (subject + " " + body).lower()
        email_id = email.get("id", hashlib.md5(f"{sender}{subject}".encode()).hexdigest()[:12])
        thread_id = thread_id or email_id
        
        # Detect phase
        phase = self._detect_phase(text, thread_id)
        
        # Find leverage points
        leverage = self._detect_leverage(text)
        
        # Detect concessions
        concessions_made = self._detect_concessions(body, "we")
        concessions_received = self._detect_concessions(body, "you")
        
        # Counter-party position
        position = self._extract_position(text)
        
        # Deal probability
        deal_prob = self._calculate_deal_probability(phase, leverage, concessions_received)
        
        # Walk-away risk
        walk_risk = self._calculate_walk_away_risk(text, phase)
        
        # Estimated value
        est_value = self._extract_value(text)
        
        # Suggested response
        suggested = self._generate_suggested_response(phase, leverage, position, concessions_made)
        
        # Recommended tactic
        tactic = self.TACTICS.get(phase, "Continue building relationship and understanding needs")
        
        # Reply-all if team involved
        recipients = email.get("to", []) + email.get("cc", [])
        reply_all = len(recipients) > 1
        if reply_all:
            self.reply_all_count += 1
        
        insight = NegotiationInsight(
            email_id=email_id,
            phase=phase,
            leverage_points=leverage,
            counter_party_position=position,
            suggested_response=suggested,
            concessions_made=concessions_made,
            concessions_received=concessions_received,
            deal_probability=deal_prob,
            recommended_tactic=tactic,
            walk_away_risk=walk_risk,
            estimated_value=est_value,
            reply_all_required=reply_all
        )
        
        if thread_id not in self.negotiations:
            self.negotiations[thread_id] = []
        self.negotiations[thread_id].append(insight)
        self.total_insights += 1
        
        return insight
    
    def _detect_phase(self, text: str, thread_id: str) -> NegotiationPhase:
        if any(w in text for w in ["agreed", "accept", "sign", "proceed", "let's move forward"]):
            return NegotiationPhase.AGREED
        if any(w in text for w in ["final offer", "last chance", "sign by", "closing"]):
            return NegotiationPhase.CLOSING
        if any(w in text for w in ["counter", "how about", "what if", "discount", "better price"]):
            return NegotiationPhase.BARGAINING
        if any(w in text for w in ["proposal", "quote", "pricing", "offer", "estimate"]):
            return NegotiationPhase.PROPOSAL
        if any(w in text for w in ["haven't heard", "following up", "still interested"]):
            return NegotiationPhase.STALLED
        if any(w in text for w in ["requirements", "needs", "looking for", "tell me about"]):
            return NegotiationPhase.DISCOVERY
        return NegotiationPhase.OPENING
    
    def _detect_leverage(self, text: str) -> List[LeverageType]:
        found = []
        for lev, signals in self.LEVERAGE_SIGNALS.items():
            if any(s in text for s in signals):
                found.append(lev)
        return found
    
    def _detect_concessions(self, text: str, perspective: str) -> List[ConcessionType]:
        found = []
        sentences = text.lower().split(".")
        for sent in sentences:
            if perspective in sent:
                for conc, signals in self.CONCESSION_SIGNALS.items():
                    if any(s in sent for s in signals):
                        if conc not in found:
                            found.append(conc)
        return found
    
    def _extract_position(self, text: str) -> Dict:
        position = {"budget": None, "timeline": None, "concerns": []}
        amounts = re.findall(r'\$[\d,]+', text)
        if amounts:
            position["budget"] = amounts[0]
        if any(w in text for w in ["expensive", "too much", "over budget"]):
            position["concerns"].append("price_sensitivity")
        if any(w in text for w in ["complex", "difficult", "concerned about"]):
            position["concerns"].append("implementation_risk")
        return position
    
    def _calculate_deal_probability(self, phase: NegotiationPhase, leverage: List, concessions: List) -> float:
        base = {
            NegotiationPhase.OPENING: 0.3,
            NegotiationPhase.DISCOVERY: 0.4,
            NegotiationPhase.PROPOSAL: 0.5,
            NegotiationPhase.BARGAINING: 0.6,
            NegotiationPhase.CLOSING: 0.8,
            NegotiationPhase.AGREED: 0.95,
            NegotiationPhase.STALLED: 0.2,
        }[phase]
        base += len(concessions) * 0.05
        if LeverageType.VOLUME_COMMITMENT in leverage:
            base += 0.1
        if LeverageType.COMPETITOR_MENTION in leverage:
            base -= 0.1
        return min(0.99, max(0.05, round(base, 2)))
    
    def _calculate_walk_away_risk(self, text: str, phase: NegotiationPhase) -> float:
        risk = 0.1
        if any(w in text for w in ["walk away", "not interested", "going with", "decline"]):
            risk += 0.5
        if any(w in text for w in ["too expensive", "can't afford", "over budget"]):
            risk += 0.2
        if phase == NegotiationPhase.STALLED:
            risk += 0.2
        return min(1.0, round(risk, 2))
    
    def _extract_value(self, text: str) -> float:
        amounts = re.findall(r'\$([\d,]+)', text)
        if amounts:
            return max(float(a.replace(",", "")) for a in amounts)
        return 0
    
    def _generate_suggested_response(self, phase: NegotiationPhase, leverage: List, position: Dict, concessions: List) -> str:
        if phase == NegotiationPhase.BARGAINING:
            if LeverageType.BUDGET_CONSTRAINT in leverage:
                return "I understand budget is a concern. What if we adjusted the scope to fit within your budget while still addressing your core needs? We could start with [essential features] and expand later."
            if concessions:
                return "We've been flexible on our side with [concessions made]. To meet you halfway, could you commit to [specific commitment]?"
        if phase == NegotiationPhase.CLOSING:
            return "Based on our discussions, here's the final proposal that addresses all your requirements. This offer is valid through [date] to ensure we can allocate resources for your timeline."
        if phase == NegotiationPhase.STALLED:
            return "I wanted to follow up with a fresh perspective. Since our last conversation, we've [new value]. Would a quick 15-minute call help address any remaining questions?"
        return "Thank you for sharing your requirements. Based on what you've described, I'd recommend our [solution] which specifically addresses [their pain points]. Would you like to see a detailed proposal?"
    
    def get_stats(self) -> Dict:
        avg_deal_prob = sum(i.deal_probability for thread in self.negotiations.values() for i in thread) / max(1, self.total_insights)
        return {
            "negotiations_tracked": len(self.negotiations),
            "total_insights": self.total_insights,
            "avg_deal_probability": f"{avg_deal_prob:.0%}",
            "reply_all_enforced": self.reply_all_count,
            "engine_version": "V122"
        }


if __name__ == "__main__":
    assistant = NegotiationAssistant()
    
    print("=" * 60)
    print("V122: AI Negotiation Assistant")
    print("=" * 60)
    
    test_emails = [
        {"id": "neg1", "from": "buyer@bigco.com", "to": ["sales@zion.com", "manager@zion.com"], "cc": ["procurement@bigco.com"], "subject": "Re: Enterprise proposal", "body": "Thanks for the proposal. The price of $150,000 is over our budget. We're also considering a competitor who quoted $95,000. Can you offer a discount? We need to decide by end of this week."},
        {"id": "neg2", "from": "prospect@startup.io", "to": ["sales@zion.com"], "cc": [], "subject": "Follow up on pricing", "body": "We've been thinking about your offer. If you can include premium support at no extra cost and extend the trial by 2 weeks, we'd be ready to sign a 2-year commitment for 200 users."},
        {"id": "neg3", "from": "client@corp.com", "to": ["account@zion.com", "sales@zion.com", "exec@zion.com"], "cc": ["cto@corp.com"], "subject": "Contract renewal discussion", "body": "Our contract is up for renewal. We need to discuss better pricing given our volume. We've been a loyal customer for 3 years and are looking for a strategic long-term partnership. What can you offer?"},
    ]
    
    for email in test_emails:
        insight = assistant.analyze_negotiation_email(email)
        print(f"\n--- {email['subject']} ---")
        print(f"  Phase: {insight.phase.value}")
        print(f"  Leverage: {[l.value for l in insight.leverage_points]}")
        print(f"  Deal Probability: {insight.deal_probability:.0%}")
        print(f"  Walk-away Risk: {insight.walk_away_risk:.0%}")
        print(f"  Est. Value: ${insight.estimated_value:,.0f}")
        print(f"  Concessions Made: {[c.value for c in insight.concessions_made]}")
        print(f"  Concessions Received: {[c.value for c in insight.concessions_received]}")
        print(f"  Reply-All: {insight.reply_all_required}")
        print(f"  Tactic: {insight.recommended_tactic}")
        print(f"  Suggested Response: {insight.suggested_response[:100]}...")
    
    print(f"\n--- Stats ---")
    for k, v in assistant.get_stats().items():
        print(f"  {k}: {v}")

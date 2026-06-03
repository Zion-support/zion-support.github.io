#!/usr/bin/env python3
"""V1036 - AI Email Negotiation Coach
Real-time deal strategy coaching during email negotiations.
Analyzes deal stage, counterpart behavior, pricing signals, and suggests optimal responses.
MANDATORY: Reply-all enforcement for all multi-party negotiations.
"""
import json, re
from datetime import datetime

class EmailNegotiationCoach:
    def __init__(self):
        self.deals = []
        self.reply_all_enforcement = True
    
    def analyze_negotiation_email(self, email_data):
        """Case-by-case analysis of negotiation email."""
        body = email_data.get("body", "").lower()
        subject = email_data.get("subject", "").lower()
        recipients = email_data.get("recipients", [])
        cc = email_data.get("cc", [])
        
        analysis = {
            "email_id": email_data.get("id"),
            "deal_stage": self._detect_deal_stage(body, subject),
            "pricing_signals": self._detect_pricing_signals(body),
            "urgency_signals": self._detect_urgency(body),
            "counterpart_strategy": self._detect_counterpart_strategy(body),
            "suggested_response": None,
            "reply_all_needed": len(recipients) + len(cc) > 1,
            "reply_all_enforcement": "MANDATORY - all parties must be included",
            "risk_score": 0,
            "opportunities": [],
            "warnings": []
        }
        
        # Pricing signal analysis
        if analysis["pricing_signals"]["discount_requested"]:
            analysis["suggested_response"] = "Acknowledge request, propose value-based pricing with volume discount"
            analysis["opportunities"].append("Counter with annual commitment discount")
        
        if analysis["pricing_signals"]["competitor_mentioned"]:
            analysis["warnings"].append("Competitor mentioned - differentiate on value, not price")
            analysis["risk_score"] += 3
        
        if analysis["urgency_signals"]["deadline_mentioned"]:
            analysis["warnings"].append("Deadline pressure - verify legitimacy before conceding")
            analysis["risk_score"] += 2
        
        if analysis["counterpart_strategy"] == "anchoring_low":
            analysis["suggested_response"] = "Re-anchor with market data. Present ROI justification."
            analysis["opportunities"].append("Strong counter-anchor opportunity with case studies")
        
        if analysis["deal_stage"] == "closing":
            analysis["suggested_response"] = "Summarize agreed terms, propose next steps, set timeline"
            analysis["opportunities"].append("Upsell opportunity - add premium support tier")
        
        # Reply-all check
        if analysis["reply_all_needed"]:
            analysis["warnings"].insert(0, "CRITICAL: Use Reply-All - all negotiation parties must be included")
        
        deal = {
            "id": f"deal_{len(self.deals):04d}",
            "email_id": email_data.get("id"),
            "analysis": analysis,
            "analyzed_at": datetime.now().isoformat()
        }
        self.deals.append(deal)
        return analysis
    
    def _detect_deal_stage(self, body, subject):
        if any(w in body for w in ["contract", "sign", "agreement", "finalize", "close"]):
            return "closing"
        if any(w in body for w in ["proposal", "quote", "pricing", "estimate"]):
            return "proposal"
        if any(w in body for w in ["discount", "budget", "too expensive", "price"]):
            return "negotiation"
        if any(w in body for w in ["interested", "learn more", "demo", "explore"]):
            return "discovery"
        return "initial"
    
    def _detect_pricing_signals(self, body):
        return {
            "discount_requested": any(w in body for w in ["discount", "cheaper", "reduce price", "lower price", "budget constraint"]),
            "price_mentioned": bool(re.search(r'\$[\d,]+', body)),
            "competitor_mentioned": any(w in body for w in ["competitor", "alternative", "other vendor", "cheaper option"]),
            "volume_discussed": any(w in body for w in ["volume", "bulk", "enterprise", "multiple licenses"]),
            "payment_terms": any(w in body for w in ["net 30", "net 60", "quarterly", "annual", "monthly"])
        }
    
    def _detect_urgency(self, body):
        return {
            "deadline_mentioned": any(w in body for w in ["by friday", "end of month", "asap", "urgent", "deadline", "eod"]),
            "fomo_tactics": any(w in body for w in ["limited time", "expires", "last chance", "won't be available"]),
            "decision_maker_involved": any(w in body for w in ["ceo", "cfo", "board", "executive", "vp"])
        }
    
    def _detect_counterpart_strategy(self, body):
        if any(w in body for w in ["way too expensive", "outrageous", "ridiculous price"]):
            return "anchoring_low"
        if any(w in body for w in ["final offer", "take it or leave it", "walk away"]):
            return "ultimatum"
        if any(w in body for w in ["let's find middle ground", "meet halfway", "fair compromise"]):
            return "collaborative"
        if any(w in body for w in ["need to check with", "get back to you", "internal review"]):
            return "stalling"
        return "neutral"

if __name__ == "__main__":
    coach = EmailNegotiationCoach()
    test = {
        "id": "neg001", "subject": "RE: Enterprise License - Final Proposal",
        "body": "Hi team, the pricing at $50,000/year is way too expensive. Your competitor offers similar at $30K. We need a 40% discount or we'll walk away. Need a decision by Friday.",
        "recipients": ["sales@ziontechgroup.com", "procurement@client.com"],
        "cc": ["cfo@client.com", "vp-eng@client.com"]
    }
    result = coach.analyze_negotiation_email(test)
    print(f"Deal Stage: {result['deal_stage']}")
    print(f"Counterpart Strategy: {result['counterpart_strategy']}")
    print(f"Suggested Response: {result['suggested_response']}")
    print(f"Reply-All: {result['reply_all_enforcement']}")
    for w in result["warnings"]:
        print(f"  ⚠️ {w}")
    for o in result["opportunities"]:
        print(f"  💡 {o}")

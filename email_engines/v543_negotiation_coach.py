#!/usr/bin/env python3
"""V543 - Negotiation Coach AI
Real-time negotiation strategy recommendations based on email content.
CRITICAL: Always enforces reply-all for multi-recipient emails.
"""
import json
from datetime import datetime
from typing import Dict, List

class NegotiationCoachAI:
    def __init__(self):
        self.reply_all_enforced = True
    
    def analyze_negotiation(self, email: Dict) -> Dict:
        body = email.get("body","")
        signals = self._detect_signals(body)
        stage = self._classify_stage(body)
        leverage = self._assess_leverage(email)
        return {"engine":"V543_Negotiation_Coach_AI","timestamp":datetime.now().isoformat(),
            "negotiation_signals":signals,"deal_stage":stage,"leverage_assessment":leverage,
            "strategy_recommendations":self._gen_strategy(signals,stage,leverage),
            "counter_proposals":self._suggest_counters(signals),"risk_factors":self._identify_risks(body),
            "reply_all_enforced":self.reply_all_enforced,"all_recipients":email.get("to",[])+email.get("cc",[])}
    
    def _detect_signals(self, text: str) -> Dict:
        tl = text.lower()
        return {"price_discussion":any(t in tl for t in ["price","cost","budget","discount","pricing"]),
            "timeline_pressure":any(t in tl for t in ["urgent","asap","deadline","immediately"]),
            "competitor_mention":any(t in tl for t in ["competitor","other vendor","alternative","comparing"]),
            "budget_constraint":any(t in tl for t in ["budget","expensive","can't afford","cheaper"]),
            "walk_away_risk":"high" if any(t in tl for t in ["not interested","pass","decline"]) else "medium" if "competitor" in tl else "low"}
    
    def _classify_stage(self, text: str) -> str:
        tl = text.lower()
        if any(t in tl for t in ["proposal","quote","pricing"]): return "proposal"
        if any(t in tl for t in ["negotiate","discount","terms"]): return "negotiation"
        if any(t in tl for t in ["contract","sign","close","proceed"]): return "closing"
        return "evaluation"
    
    def _assess_leverage(self, email: Dict) -> Dict:
        body = email.get("body","").lower()
        yours = "high" if "urgent" in body else "medium"
        theirs = "high" if "competitor" in body or "expensive" in body else "medium"
        return {"your_leverage":yours,"their_leverage":theirs,"balance":"favorable" if yours=="high" and theirs!="high" else "unfavorable" if theirs=="high" and yours!="high" else "neutral"}
    
    def _gen_strategy(self, signals: Dict, stage: str, leverage: Dict) -> List[Dict]:
        strategies = []
        if signals["price_discussion"]:
            strategies.append({"type":"value_framing","action":"Emphasize ROI and total value","priority":"high"})
        if signals["competitor_mention"]:
            strategies.append({"type":"differentiation","action":"Highlight unique differentiators","priority":"critical"})
        if signals["budget_constraint"]:
            strategies.append({"type":"flexible_structuring","action":"Offer phased approach or payment terms","priority":"high"})
        if leverage["balance"]=="favorable":
            strategies.append({"type":"confident_positioning","action":"Maintain firm pricing","priority":"medium"})
        return strategies
    
    def _suggest_counters(self, signals: Dict) -> List[Dict]:
        p = []
        if signals["price_discussion"] and signals["budget_constraint"]:
            p.append({"type":"tiered_pricing","desc":"Offer Essential tier with upgrade path"})
            p.append({"type":"annual_commitment","desc":"15% discount for annual commitment"})
        return p
    
    def _identify_risks(self, text: str) -> List[Dict]:
        risks = []; tl = text.lower()
        if "not sure" in tl or "maybe" in tl: risks.append({"type":"indecision","level":"medium"})
        if "need approval" in tl: risks.append({"type":"approval_chain","level":"medium"})
        return risks

if __name__ == "__main__":
    c = NegotiationCoachAI()
    print(json.dumps(c.analyze_negotiation({"body":"Your pricing seems high. We're comparing with competitors.","to":["s@z.com"],"cc":["m@co.com"]}),indent=2))

#!/usr/bin/env python3
"""
V111: Revenue Intelligence Engine
Monetize every email with upsell detection, churn prediction, deal-stage tracking, and revenue attribution.
"""
import re, json, hashlib
from datetime import datetime, timedelta
from dataclasses import dataclass, field
from typing import List, Dict, Optional, Tuple
from enum import Enum

class DealStage(Enum):
    PROSPECTING = "prospecting"
    QUALIFICATION = "qualification"
    PROPOSAL = "proposal"
    NEGOTIATION = "negotiation"
    CLOSED_WON = "closed_won"
    CLOSED_LOST = "closed_lost"
    UPSELL = "upsell"
    RENEWAL = "renewal"

class ChurnRisk(Enum):
    VERY_LOW = "very_low"
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

@dataclass
class RevenueInsight:
    email_id: str
    deal_stage: DealStage
    churn_risk: ChurnRisk
    upsell_opportunities: List[str]
    estimated_value: float
    competitor_mentions: List[str]
    price_sensitivity: float  # 0-1
    follow_up_priority: float  # 0-1
    recommended_action: str
    pipeline_velocity: float  # days to close estimate
    revenue_attribution: float

class RevenueIntelligenceEngine:
    """V111: Turn every email into revenue intelligence."""
    
    DEAL_STAGE_SIGNALS = {
        DealStage.PROSPECTING: ["interested in", "learning about", "exploring", "what do you offer"],
        DealStage.QUALIFICATION: ["requirements", "budget", "timeline", "decision maker", "needs"],
        DealStage.PROPOSAL: ["proposal", "quote", "pricing", "estimate", "scope"],
        DealStage.NEGOTIATION: ["discount", "negotiate", "terms", "counter-offer", "better price"],
        DealStage.CLOSED_WON: ["signed", "approved", "accepted", "let\'s proceed", "go ahead"],
        DealStage.CLOSED_LOST: ["going with", "chose another", "not moving forward", "decided against"],
        DealStage.UPSELL: ["additional", "more features", "upgrade", "expand", "add-on"],
        DealStage.RENEWAL: ["renew", "extend", "continue", "next year", "contract ending"],
    }
    
    CHURN_SIGNALS = ["cancel", "leave", "switch", "competitor", "expensive", "not worth", "disappointed", "frustrated", "not using", "downgrade"]
    UPSELL_KEYWORDS = ["more", "additional", "expand", "upgrade", "premium", "enterprise", "scale", "grow"]
    COMPETITOR_PATTERNS = [r"\b(competitor|alternative|other provider|compared to|switching to)\b"]
    
    def __init__(self):
        self.deal_pipeline: Dict[str, Dict] = {}
        self.revenue_tracked = 0.0
    
    def analyze_revenue(self, email: Dict) -> RevenueInsight:
        body = email.get("body", "").lower()
        subject = email.get("subject", "").lower()
        sender = email.get("from", "")
        text = subject + " " + body
        
        deal_stage = self._detect_deal_stage(text)
        churn_risk = self._assess_churn_risk(text)
        upsell_opps = self._find_upsell_opportunities(text)
        value = self._estimate_deal_value(text, deal_stage)
        competitors = self._detect_competitors(text)
        price_sens = self._assess_price_sensitivity(text)
        follow_up = self._calculate_follow_up_priority(deal_stage, churn_risk, price_sens)
        action = self._recommend_action(deal_stage, churn_risk, upsell_opps)
        velocity = self._estimate_pipeline_velocity(deal_stage)
        attribution = self._calculate_revenue_attribution(deal_stage, value)
        
        email_id = hashlib.md5(f"{sender}{subject}".encode()).hexdigest()[:12]
        
        return RevenueInsight(
            email_id=email_id,
            deal_stage=deal_stage,
            churn_risk=churn_risk,
            upsell_opportunities=upsell_opps,
            estimated_value=value,
            competitor_mentions=competitors,
            price_sensitivity=price_sens,
            follow_up_priority=follow_up,
            recommended_action=action,
            pipeline_velocity=velocity,
            revenue_attribution=attribution
        )
    
    def _detect_deal_stage(self, text: str) -> DealStage:
        scores = {}
        for stage, signals in self.DEAL_STAGE_SIGNALS.items():
            score = sum(1 for s in signals if s in text)
            if score > 0:
                scores[stage] = score
        return max(scores, key=scores.get) if scores else DealStage.PROSPECTING
    
    def _assess_churn_risk(self, text: str) -> ChurnRisk:
        hits = sum(1 for s in self.CHURN_SIGNALS if s in text)
        if hits >= 4: return ChurnRisk.CRITICAL
        if hits >= 3: return ChurnRisk.HIGH
        if hits >= 2: return ChurnRisk.MEDIUM
        if hits >= 1: return ChurnRisk.LOW
        return ChurnRisk.VERY_LOW
    
    def _find_upsell_opportunities(self, text: str) -> List[str]:
        opps = []
        if any(w in text for w in ["scale", "grow", "expand"]):
            opps.append("Enterprise tier upgrade")
        if any(w in text for w in ["more users", "team", "department"]):
            opps.append("Additional seat licenses")
        if any(w in text for w in ["api", "integration", "connect"]):
            opps.append("API access add-on")
        if any(w in text for w in ["support", "help", "training"]):
            opps.append("Premium support package")
        if any(w in text for w in ["security", "compliance", "audit"]):
            opps.append("Security & compliance bundle")
        return opps
    
    def _estimate_deal_value(self, text: str, stage: DealStage) -> float:
        # Extract dollar amounts
        amounts = re.findall(r'\$([\d,]+(?:\.\d+)?)', text)
        if amounts:
            return max(float(a.replace(",", "")) for a in amounts)
        base_values = {
            DealStage.PROSPECTING: 5000, DealStage.QUALIFICATION: 15000,
            DealStage.PROPOSAL: 25000, DealStage.NEGOTIATION: 35000,
            DealStage.CLOSED_WON: 50000, DealStage.UPSELL: 20000,
            DealStage.RENEWAL: 40000, DealStage.CLOSED_LOST: 0
        }
        return base_values.get(stage, 10000)
    
    def _detect_competitors(self, text: str) -> List[str]:
        mentions = []
        for pattern in self.COMPETITOR_PATTERNS:
            if re.search(pattern, text):
                mentions.append("competitor_mentioned")
        return mentions
    
    def _assess_price_sensitivity(self, text: str) -> float:
        signals = ["expensive", "budget", "cost", "price", "afford", "cheap", "discount", "cheaper"]
        hits = sum(1 for s in signals if s in text)
        return min(1.0, round(hits * 0.2, 2))
    
    def _calculate_follow_up_priority(self, stage: DealStage, churn: ChurnRisk, price_sens: float) -> float:
        base = 0.3
        if stage in [DealStage.NEGOTIATION, DealStage.PROPOSAL]: base += 0.3
        if churn in [ChurnRisk.HIGH, ChurnRisk.CRITICAL]: base += 0.3
        base += price_sens * 0.1
        return min(1.0, round(base, 2))
    
    def _recommend_action(self, stage: DealStage, churn: ChurnRisk, upsells: List[str]) -> str:
        if churn in [ChurnRisk.HIGH, ChurnRisk.CRITICAL]:
            return "Schedule retention call immediately with success team"
        if stage == DealStage.NEGOTIATION:
            return "Send revised proposal with value justification"
        if upsells:
            return f"Present upsell: {upsells[0]}"
        if stage == DealStage.PROSPECTING:
            return "Send case study and schedule discovery call"
        return "Continue nurture sequence"
    
    def _estimate_pipeline_velocity(self, stage: DealStage) -> float:
        days = {DealStage.PROSPECTING: 45, DealStage.QUALIFICATION: 30, DealStage.PROPOSAL: 14,
                DealStage.NEGOTIATION: 7, DealStage.CLOSED_WON: 0, DealStage.UPSELL: 10,
                DealStage.RENEWAL: 21, DealStage.CLOSED_LOST: 0}
        return days.get(stage, 30)
    
    def _calculate_revenue_attribution(self, stage: DealStage, value: float) -> float:
        weights = {DealStage.PROSPECTING: 0.05, DealStage.QUALIFICATION: 0.15,
                   DealStage.PROPOSAL: 0.3, DealStage.NEGOTIATION: 0.5,
                   DealStage.CLOSED_WON: 1.0, DealStage.UPSELL: 0.8}
        return round(value * weights.get(stage, 0.1), 2)

if __name__ == "__main__":
    engine = RevenueIntelligenceEngine()
    tests = [
        {"from": "prospect@bigco.com", "subject": "Interested in enterprise plan", "body": "We're exploring options for our team of 200. Budget is around $50,000/year. Can you send a proposal?"},
        {"from": "client@startup.io", "subject": "Considering cancellation", "body": "The service is too expensive for what we get. We're looking at competitors who offer similar features at half the price. Very disappointed."},
        {"from": "account@corp.com", "subject": "Need to scale up", "body": "Our team is growing and we need to add more users. Can we upgrade to enterprise? Also interested in API access and premium support."}
    ]
    print("=" * 60)
    print("V111: Revenue Intelligence Engine")
    print("=" * 60)
    for i, email in enumerate(tests, 1):
        insight = engine.analyze_revenue(email)
        print(f"\n--- Email #{i}: {email['subject']} ---")
        print(f"  Deal Stage: {insight.deal_stage.value}")
        print(f"  Churn Risk: {insight.churn_risk.value}")
        print(f"  Upsell Opps: {insight.upsell_opportunities}")
        print(f"  Est. Value: ${insight.estimated_value:,.0f}")
        print(f"  Price Sensitivity: {insight.price_sensitivity}")
        print(f"  Follow-up Priority: {insight.follow_up_priority}")
        print(f"  Action: {insight.recommended_action}")
        print(f"  Pipeline Velocity: {insight.pipeline_velocity} days")
        print(f"  Revenue Attribution: ${insight.revenue_attribution:,.0f}")

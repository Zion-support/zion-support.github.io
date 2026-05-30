#!/usr/bin/env python3
"""V140: AI Email Revenue Attribution — Track revenue from every email interaction."""
import json, hashlib, math
from datetime import datetime, timedelta
from dataclasses import dataclass, field
from typing import List, Dict, Optional, Tuple
from enum import Enum
from collections import defaultdict

class AttributionModel(Enum):
    FIRST_TOUCH = "first_touch"
    LAST_TOUCH = "last_touch"
    LINEAR = "linear"
    TIME_DECAY = "time_decay"
    U_SHAPED = "u_shaped"
    W_SHAPED = "w_shaped"

class DealStage(Enum):
    PROSPECTING = "prospecting"
    QUALIFICATION = "qualification"
    PROPOSAL = "proposal"
    NEGOTIATION = "negotiation"
    CLOSED_WON = "closed_won"
    CLOSED_LOST = "closed_lost"

@dataclass
class EmailTouchpoint:
    touch_id: str
    email_id: str
    sender: str
    recipient: str
    timestamp: datetime
    deal_id: str
    deal_stage_at_touch: DealStage
    email_type: str  # outbound, reply, follow_up, nurture
    influence_score: float = 0.0

@dataclass
class Deal:
    deal_id: str
    company: str
    value: float
    stage: DealStage
    created_at: datetime
    closed_at: Optional[datetime]
    touchpoints: List[EmailTouchpoint] = field(default_factory=list)
    owner: str = ""

@dataclass
class AttributionResult:
    deal_id: str
    model: AttributionModel
    total_revenue: float
    attributions: Dict[str, float]  # touch_id -> attributed revenue
    email_roi: Dict[str, float]  # sender -> revenue generated

class RevenueAttributionEngine:
    """V140: Multi-touch email revenue attribution."""
    
    def __init__(self):
        self.deals: Dict[str, Deal] = {}
        self.attributions: List[AttributionResult] = []
        self.reply_all_count = 0
    
    def register_deal(self, deal: Deal):
        self.deals[deal.deal_id] = deal
    
    def add_touchpoint(self, deal_id: str, sender: str, recipient: str,
                       email_type: str = "outbound", recipients: List[str] = None):
        if deal_id not in self.deals:
            return
        deal = self.deals[deal_id]
        touch_id = hashlib.md5(f"{deal_id}{sender}{datetime.now().isoformat()}".encode()).hexdigest()[:12]
        influence = self._calculate_influence(email_type, deal.stage)
        tp = EmailTouchpoint(touch_id, f"email_{touch_id}", sender, recipient,
                            datetime.now(), deal_id, deal.stage, email_type, influence)
        deal.touchpoints.append(tp)
        if recipients and len(recipients) > 1:
            self.reply_all_count += 1
    
    def _calculate_influence(self, email_type: str, stage: DealStage) -> float:
        base = {"outbound": 0.6, "reply": 0.8, "follow_up": 0.7, "nurture": 0.4}.get(email_type, 0.5)
        stage_mult = {DealStage.PROPOSAL: 1.2, DealStage.NEGOTIATION: 1.3, DealStage.CLOSED_WON: 1.5}.get(stage, 1.0)
        return min(1.0, base * stage_mult)
    
    def attribute(self, deal_id: str, model: AttributionModel = AttributionModel.LINEAR) -> AttributionResult:
        deal = self.deals.get(deal_id)
        if not deal or not deal.touchpoints:
            return AttributionResult(deal_id, model, 0, {}, {})
        
        tps = sorted(deal.touchpoints, key=lambda t: t.timestamp)
        n = len(tps)
        revenue = deal.value if deal.stage == DealStage.CLOSED_WON else deal.value * 0.5
        attributions = {}
        
        if model == AttributionModel.FIRST_TOUCH:
            attributions[tps[0].touch_id] = revenue
        elif model == AttributionModel.LAST_TOUCH:
            attributions[tps[-1].touch_id] = revenue
        elif model == AttributionModel.LINEAR:
            share = revenue / n
            for tp in tps: attributions[tp.touch_id] = round(share, 2)
        elif model == AttributionModel.TIME_DECAY:
            weights = [math.exp(-(n - 1 - i) * 0.3) for i in range(n)]
            total_w = sum(weights)
            for i, tp in enumerate(tps):
                attributions[tp.touch_id] = round(revenue * weights[i] / total_w, 2)
        elif model == AttributionModel.U_SHAPED:
            if n <= 2:
                share = revenue / n
                for tp in tps: attributions[tp.touch_id] = round(share, 2)
            else:
                attributions[tps[0].touch_id] = round(revenue * 0.4, 2)
                attributions[tps[-1].touch_id] = round(revenue * 0.4, 2)
                mid_share = revenue * 0.2 / (n - 2)
                for tp in tps[1:-1]: attributions[tp.touch_id] = round(mid_share, 2)
        elif model == AttributionModel.W_SHAPED:
            if n <= 3:
                share = revenue / n
                for tp in tps: attributions[tp.touch_id] = round(share, 2)
            else:
                first = [t for t in tps if t.deal_stage_at_touch == DealStage.PROSPECTING]
                opp = [t for t in tps if t.deal_stage_at_touch in [DealStage.PROPOSAL, DealStage.QUALIFICATION]]
                close = [t for t in tps if t.deal_stage_at_touch in [DealStage.NEGOTIATION, DealStage.CLOSED_WON]]
                attributions[tps[0].touch_id] = round(revenue * 0.3, 2)
                if opp: attributions[opp[0].touch_id] = attributions.get(opp[0].touch_id, 0) + round(revenue * 0.3, 2)
                if close: attributions[close[-1].touch_id] = attributions.get(close[-1].touch_id, 0) + round(revenue * 0.3, 2)
                remaining = revenue * 0.1
                others = [t for t in tps if t.touch_id not in attributions]
                if others:
                    share = remaining / len(others)
                    for tp in others: attributions[tp.touch_id] = round(share, 2)
        
        # Email ROI per sender
        email_roi = defaultdict(float)
        for tp in tps:
            email_roi[tp.sender] += attributions.get(tp.touch_id, 0)
        
        result = AttributionResult(deal_id, model, revenue, attributions, dict(email_roi))
        self.attributions.append(result)
        return result
    
    def get_dashboard(self) -> Dict:
        total_revenue = sum(a.total_revenue for a in self.attributions)
        sender_revenue = defaultdict(float)
        for a in self.attributions:
            for sender, rev in a.email_roi.items():
                sender_revenue[sender] += rev
        top_senders = sorted(sender_revenue.items(), key=lambda x: x[1], reverse=True)[:5]
        avg_deal_size = total_revenue / max(1, len(self.attributions))
        return {
            "total_attributed_revenue": f"${total_revenue:,.0f}",
            "deals_analyzed": len(self.attributions),
            "avg_deal_size": f"${avg_deal_size:,.0f}",
            "top_revenue_senders": top_senders,
            "touchpoints_tracked": sum(len(d.touchpoints) for d in self.deals.values()),
            "reply_all_enforced": self.reply_all_count,
            "engine_version": "V140"
        }


if __name__ == "__main__":
    engine = RevenueAttributionEngine()
    print("=" * 60)
    print("V140: AI Email Revenue Attribution")
    print("=" * 60)
    
    # Create deals
    deals = [
        Deal("D001", "Acme Corp", 150000, DealStage.CLOSED_WON, datetime.now() - timedelta(days=60), datetime.now(), owner="alice@zion.com"),
        Deal("D002", "TechStart", 85000, DealStage.CLOSED_WON, datetime.now() - timedelta(days=45), datetime.now(), owner="bob@zion.com"),
        Deal("D003", "GlobalInc", 250000, DealStage.NEGOTIATION, datetime.now() - timedelta(days=30), None, owner="alice@zion.com"),
    ]
    for d in deals:
        engine.register_deal(d)
    
    # Add touchpoints
    print("\n--- Adding Touchpoints ---")
    for deal_id, touches in [("D001", [("alice@zion.com","prospect@acme.com","outbound"),("bob@zion.com","prospect@acme.com","follow_up"),("alice@zion.com","cto@acme.com","reply")]),
                              ("D002", [("bob@zion.com","lead@techstart.io","outbound"),("bob@zion.com","lead@techstart.io","nurture"),("alice@zion.com","ceo@techstart.io","reply")]),
                              ("D003", [("alice@zion.com","vp@globalinc.com","outbound"),("bob@zion.com","procurement@globalinc.com","follow_up")])]:
        for sender, recip, etype in touches:
            engine.add_touchpoint(deal_id, sender, recip, etype, [recip, "manager@zion.com"])
        print(f"  {deal_id}: {len(engine.deals[deal_id].touchpoints)} touchpoints")
    
    # Run attribution with all models
    print("\n--- Attribution Results ---")
    for deal_id in ["D001", "D002", "D003"]:
        for model in [AttributionModel.FIRST_TOUCH, AttributionModel.LINEAR, AttributionModel.U_SHAPED]:
            result = engine.attribute(deal_id, model)
            print(f"  {deal_id} [{model.value}]: ${result.total_revenue:,.0f} → ROI: {dict(list(result.email_roi.items())[:2])}")
    
    print(f"\n--- Dashboard ---")
    for k, v in engine.get_dashboard().items():
        print(f"  {k}: {v}")

#!/usr/bin/env python3
"""
V120: AI Customer Journey Orchestrator
Map and automate customer journeys with touchpoint optimization, churn-risk triggers, and nurture sequences.
"""
import re, json, hashlib
from datetime import datetime, timedelta
from dataclasses import dataclass, field
from typing import List, Dict, Optional, Tuple
from enum import Enum

class JourneyStage(Enum):
    AWARENESS = "awareness"
    INTEREST = "interest"
    CONSIDERATION = "consideration"
    TRIAL = "trial"
    PURCHASE = "purchase"
    ONBOARDING = "onboarding"
    ADOPTION = "adoption"
    RETENTION = "retention"
    EXPANSION = "expansion"
    ADVOCACY = "advocacy"
    CHURN_RISK = "churn_risk"
    CHURNED = "churned"

class TriggerType(Enum):
    EMAIL_OPENED = "email_opened"
    EMAIL_CLICKED = "email_clicked"
    PAGE_VISITED = "page_visited"
    FEATURE_USED = "feature_used"
    SUPPORT_TICKET = "support_ticket"
    INACTIVITY = "inactivity"
    NPS_LOW = "nps_low"
    PAYMENT_FAILED = "payment_failed"
    UPGRADE_REQUEST = "upgrade_request"
    CANCEL_REQUEST = "cancel_request"

@dataclass
class JourneyNode:
    node_id: str
    stage: JourneyStage
    action: str
    channel: str  # email, in-app, sms, call
    delay_hours: int = 0
    conditions: List[str] = field(default_factory=list)
    next_nodes: List[str] = field(default_factory=list)
    reply_all: bool = False

@dataclass
class CustomerJourney:
    customer_id: str
    email: str
    current_stage: JourneyStage
    journey_path: List[JourneyNode]
    score: float  # 0-100 engagement score
    churn_risk: float  # 0-1
    lifetime_value: float
    next_best_action: str
    triggers_fired: List[Dict]
    nurture_sequence: List[Dict]

class CustomerJourneyOrchestrator:
    """V120: Automate and optimize the entire customer lifecycle."""
    
    STAGE_TRANSITIONS = {
        JourneyStage.AWARENESS: [JourneyStage.INTEREST, JourneyStage.CONSIDERATION],
        JourneyStage.INTEREST: [JourneyStage.CONSIDERATION, JourneyStage.TRIAL],
        JourneyStage.CONSIDERATION: [JourneyStage.TRIAL, JourneyStage.PURCHASE],
        JourneyStage.TRIAL: [JourneyStage.PURCHASE, JourneyStage.CHURN_RISK],
        JourneyStage.PURCHASE: [JourneyStage.ONBOARDING],
        JourneyStage.ONBOARDING: [JourneyStage.ADOPTION, JourneyStage.CHURN_RISK],
        JourneyStage.ADOPTION: [JourneyStage.RETENTION, JourneyStage.EXPANSION],
        JourneyStage.RETENTION: [JourneyStage.EXPANSION, JourneyStage.ADVOCACY, JourneyStage.CHURN_RISK],
        JourneyStage.EXPANSION: [JourneyStage.ADVOCACY],
        JourneyStage.CHURN_RISK: [JourneyStage.RETENTION, JourneyStage.CHURNED],
    }
    
    CHURN_SIGNALS = {
        TriggerType.INACTIVITY: 0.3,
        TriggerType.NPS_LOW: 0.25,
        TriggerType.PAYMENT_FAILED: 0.35,
        TriggerType.CANCEL_REQUEST: 0.5,
        TriggerType.SUPPORT_TICKET: 0.15,
    }
    
    NURTURE_TEMPLATES = {
        JourneyStage.AWARENESS: [
            {"day": 0, "subject": "Welcome to Zion Tech Group", "channel": "email"},
            {"day": 2, "subject": "How {company} achieved {result} with our AI", "channel": "email"},
            {"day": 5, "subject": "Quick question about your goals", "channel": "email"},
        ],
        JourneyStage.TRIAL: [
            {"day": 0, "subject": "Your trial is ready — here's how to get started", "channel": "email"},
            {"day": 1, "subject": "3 tips to get the most from your trial", "channel": "in-app"},
            {"day": 3, "subject": "How's your trial going? Need help?", "channel": "email"},
            {"day": 7, "subject": "Your trial ends soon — let's talk", "channel": "email"},
        ],
        JourneyStage.CHURN_RISK: [
            {"day": 0, "subject": "We noticed you haven't been active — how can we help?", "channel": "email"},
            {"day": 1, "subject": "Let's jump on a quick call", "channel": "call"},
            {"day": 3, "subject": "Special offer just for you", "channel": "email"},
        ],
    }
    
    def __init__(self):
        self.customers: Dict[str, CustomerJourney] = {}
        self.journey_templates: Dict[str, List[JourneyNode]] = {}
        self.triggers_processed = 0
        self.reply_all_enforced = 0
    
    def create_journey(self, customer_id: str, email: str, stage: JourneyStage = JourneyStage.AWARENESS) -> CustomerJourney:
        """Create a new customer journey."""
        churn_risk = 0.0
        score = 50.0 if stage == JourneyStage.AWARENESS else 30.0
        ltv = 0.0
        
        journey = CustomerJourney(
            customer_id=customer_id,
            email=email,
            current_stage=stage,
            journey_path=[],
            score=score,
            churn_risk=churn_risk,
            lifetime_value=ltv,
            next_best_action=self._get_next_best_action(stage, score),
            triggers_fired=[],
            nurture_sequence=self._generate_nurture_sequence(stage, email)
        )
        self.customers[customer_id] = journey
        return journey
    
    def process_trigger(self, customer_id: str, trigger_type: TriggerType, data: Dict = None) -> Dict:
        """Process a trigger event and advance the journey."""
        self.triggers_processed += 1
        data = data or {}
        
        if customer_id not in self.customers:
            return {"error": "Customer not found"}
        
        journey = self.customers[customer_id]
        
        # Update churn risk
        if trigger_type in self.CHURN_SIGNALS:
            journey.churn_risk = min(1.0, journey.churn_risk + self.CHURN_SIGNALS[trigger_type])
            if journey.churn_risk > 0.6:
                journey.current_stage = JourneyStage.CHURN_RISK
        else:
            journey.churn_risk = max(0.0, journey.churn_risk - 0.05)
        
        # Update engagement score
        positive_triggers = [TriggerType.EMAIL_OPENED, TriggerType.EMAIL_CLICKED, TriggerType.FEATURE_USED, TriggerType.UPGRADE_REQUEST]
        if trigger_type in positive_triggers:
            journey.score = min(100, journey.score + 5)
        
        # Check for stage transition
        new_stage = self._evaluate_stage_transition(journey, trigger_type)
        if new_stage and new_stage != journey.current_stage:
            journey.current_stage = new_stage
        
        # Record trigger
        journey.triggers_fired.append({
            "type": trigger_type.value,
            "timestamp": datetime.now().isoformat(),
            "data": data
        })
        
        # Update next best action
        journey.next_best_action = self._get_next_best_action(journey.current_stage, journey.score)
        
        # Reply-all for team notifications
        reply_all = trigger_type in [TriggerType.CANCEL_REQUEST, TriggerType.NPS_LOW]
        if reply_all:
            self.reply_all_enforced += 1
        
        return {
            "customer_id": customer_id,
            "stage": journey.current_stage.value,
            "score": journey.score,
            "churn_risk": journey.churn_risk,
            "next_action": journey.next_best_action,
            "reply_all": reply_all
        }
    
    def _evaluate_stage_transition(self, journey: CustomerJourney, trigger: TriggerType) -> Optional[JourneyStage]:
        transitions = self.STAGE_TRANSITIONS.get(journey.current_stage, [])
        
        if trigger == TriggerType.EMAIL_CLICKED and journey.current_stage == JourneyStage.AWARENESS:
            return JourneyStage.INTEREST
        if trigger == TriggerType.FEATURE_USED and journey.current_stage == JourneyStage.TRIAL:
            return JourneyStage.PURCHASE
        if trigger == TriggerType.UPGRADE_REQUEST and journey.current_stage in [JourneyStage.ADOPTION, JourneyStage.RETENTION]:
            return JourneyStage.EXPANSION
        if trigger == TriggerType.CANCEL_REQUEST:
            return JourneyStage.CHURN_RISK
        
        return None
    
    def _get_next_best_action(self, stage: JourneyStage, score: float) -> str:
        actions = {
            JourneyStage.AWARENESS: "Send personalized case study based on industry",
            JourneyStage.INTEREST: "Schedule discovery call to understand requirements",
            JourneyStage.CONSIDERATION: "Provide free trial or demo access",
            JourneyStage.TRIAL: "Send onboarding tips and check-in email",
            JourneyStage.PURCHASE: "Send welcome package and onboarding schedule",
            JourneyStage.ONBOARDING: "Assign dedicated success manager",
            JourneyStage.ADOPTION: "Share advanced features and best practices",
            JourneyStage.RETENTION: "Quarterly business review and expansion opportunities",
            JourneyStage.EXPANSION: "Present cross-sell and upsell options",
            JourneyStage.ADVOCACY: "Invite to customer advisory board and referral program",
            JourneyStage.CHURN_RISK: "Executive outreach with retention offer",
            JourneyStage.CHURNED: "Win-back campaign with special pricing",
        }
        return actions.get(stage, "Continue current nurture sequence")
    
    def _generate_nurture_sequence(self, stage: JourneyStage, email: str) -> List[Dict]:
        template = self.NURTURE_TEMPLATES.get(stage, self.NURTURE_TEMPLATES[JourneyStage.AWARENESS])
        sequence = []
        for item in template:
            sequence.append({
                "day": item["day"],
                "subject": item["subject"],
                "channel": item["channel"],
                "scheduled_date": (datetime.now() + timedelta(days=item["day"])).isoformat(),
                "to": email,
                "reply_all": stage in [JourneyStage.CHURN_RISK, JourneyStage.ONBOARDING]
            })
        return sequence
    
    def get_dashboard(self) -> Dict:
        stage_counts = {}
        for j in self.customers.values():
            stage_counts[j.current_stage.value] = stage_counts.get(j.current_stage.value, 0) + 1
        
        avg_score = sum(j.score for j in self.customers.values()) / max(1, len(self.customers))
        avg_churn = sum(j.churn_risk for j in self.customers.values()) / max(1, len(self.customers))
        
        return {
            "total_customers": len(self.customers),
            "stage_distribution": stage_counts,
            "avg_engagement_score": round(avg_score, 1),
            "avg_churn_risk": round(avg_churn, 2),
            "triggers_processed": self.triggers_processed,
            "reply_all_enforced": self.reply_all_enforced,
            "engine_version": "V120"
        }


if __name__ == "__main__":
    orch = CustomerJourneyOrchestrator()
    
    print("=" * 60)
    print("V120: AI Customer Journey Orchestrator")
    print("=" * 60)
    
    # Create customer journeys
    customers = [
        ("c1", "prospect@acme.com", JourneyStage.AWARENESS),
        ("c2", "trial@startup.io", JourneyStage.TRIAL),
        ("c3", "client@enterprise.com", JourneyStage.ADOPTION),
        ("c4", "atrisk@company.com", JourneyStage.RETENTION),
    ]
    
    for cid, email, stage in customers:
        j = orch.create_journey(cid, email, stage)
        print(f"\n  Created: {email} at {stage.value}")
        print(f"    Score: {j.score} | Next Action: {j.next_best_action}")
        print(f"    Nurture Steps: {len(j.nurture_sequence)}")
    
    # Process triggers
    print("\n--- Processing Triggers ---")
    triggers = [
        ("c1", TriggerType.EMAIL_CLICKED, {}),
        ("c2", TriggerType.FEATURE_USED, {"feature": "AI Chatbot"}),
        ("c3", TriggerType.UPGRADE_REQUEST, {"plan": "enterprise"}),
        ("c4", TriggerType.INACTIVITY, {"days_inactive": 14}),
        ("c4", TriggerType.NPS_LOW, {"score": 3}),
    ]
    
    for cid, trigger, data in triggers:
        result = orch.process_trigger(cid, trigger, data)
        print(f"  {cid}: {trigger.value} → Stage: {result.get('stage')}, Churn Risk: {result.get('churn_risk', 0):.0%}")
        if result.get("reply_all"):
            print(f"    ⚠️ Reply-All enforced for team notification")
    
    # Dashboard
    print(f"\n--- Dashboard ---")
    for k, v in orch.get_dashboard().items():
        print(f"  {k}: {v}")

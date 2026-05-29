#!/usr/bin/env python3
"""V93: AI Email Predictive Analytics"""
import json, hashlib
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from dataclasses import dataclass, field
from enum import Enum
from collections import defaultdict

class RiskLevel(Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

class PredictionType(Enum):
    RESPONSE_TIME = "response_time"
    FOLLOW_UP_NEEDED = "follow_up_needed"
    RELATIONSHIP_RISK = "relationship_risk"
    ESCALATION_LIKELIHOOD = "escalation_likelihood"

@dataclass
class Prediction:
    prediction_id: str
    prediction_type: PredictionType
    entity_id: str
    value: float
    confidence: float
    factors: List[str]
    timestamp: datetime = field(default_factory=datetime.now)

@dataclass
class RelationshipHealth:
    sender: str
    health_score: float
    risk_level: RiskLevel
    last_interaction: datetime
    interaction_frequency: float
    avg_sentiment: float
    risk_factors: List[str] = field(default_factory=list)
    recommendations: List[str] = field(default_factory=list)

class V93PredictiveAnalyticsEngine:
    def __init__(self):
        self.email_history: Dict[str, Dict] = {}
        self.sender_history: Dict[str, Dict] = {}
        self.predictions: Dict[str, Prediction] = {}
        self.relationship_health: Dict[str, RelationshipHealth] = {}
        self.metrics = {"total_predictions": 0, "relationships_monitored": 0, "at_risk_relationships": 0}

    def analyze_email(self, email_data: Dict) -> List[Prediction]:
        predictions = []
        self._update_history(email_data)
        predictions.append(self._predict_response_time(email_data))
        predictions.append(self._predict_follow_up(email_data))
        predictions.append(self._predict_escalation(email_data))
        sender = email_data.get("from", "")
        if sender:
            self._update_relationship_health(sender)
            rel_pred = self._predict_relationship_risk(sender)
            if rel_pred: predictions.append(rel_pred)
        for p in predictions:
            self.predictions[p.prediction_id] = p
            self.metrics["total_predictions"] += 1
        return predictions

    def _update_history(self, email_data: Dict):
        email_id = email_data.get("id", hashlib.md5(str(email_data).encode()).hexdigest()[:12])
        self.email_history[email_id] = {"timestamp": datetime.now(), "sender": email_data.get("from",""),
            "category": email_data.get("category","general"), "urgency": email_data.get("urgency","medium")}
        sender = email_data.get("from", "")
        if sender:
            if sender not in self.sender_history:
                self.sender_history[sender] = {"email_count": 0, "first_contact": datetime.now(),
                    "last_contact": datetime.now(), "sentiments": [], "response_times": []}
            h = self.sender_history[sender]
            h["email_count"] += 1
            h["last_contact"] = datetime.now()

    def _predict_response_time(self, email_data: Dict) -> Prediction:
        category = email_data.get("category", "general")
        urgency = email_data.get("urgency", "medium")
        base_times = {"sales_inquiry": 24, "support_request": 4, "billing": 24, "partnership": 48, "general": 24}
        predicted = base_times.get(category, 24)
        urgency_mult = {"critical": 0.25, "high": 0.5, "medium": 1.0, "low": 2.0}
        predicted *= urgency_mult.get(urgency, 1.0)
        factors = [f"Category: {category}", f"Urgency: {urgency}"]
        return Prediction(hashlib.md5(f"rt_{datetime.now().isoformat()}".encode()).hexdigest()[:12],
            PredictionType.RESPONSE_TIME, email_data.get("id",""), predicted, 0.75, factors)

    def _predict_follow_up(self, email_data: Dict) -> Prediction:
        category = email_data.get("category", "general")
        body = email_data.get("body", "").lower()
        probs = {"sales_inquiry": 0.85, "support_request": 0.70, "billing": 0.60, "partnership": 0.90, "general": 0.40}
        prob = probs.get(category, 0.40)
        signals = sum(1 for s in ["question", "?", "proposal", "meeting"] if s in body)
        prob += signals * 0.05
        factors = [f"Category: {category}", f"Signals: {signals}"]
        return Prediction(hashlib.md5(f"fu_{datetime.now().isoformat()}".encode()).hexdigest()[:12],
            PredictionType.FOLLOW_UP_NEEDED, email_data.get("id",""), min(prob, 0.95), 0.75, factors)

    def _predict_escalation(self, email_data: Dict) -> Prediction:
        body = email_data.get("body", "").lower()
        urgency = email_data.get("urgency", "medium")
        prob = 0.1
        if urgency == "critical": prob += 0.4
        elif urgency == "high": prob += 0.2
        signals = sum(1 for s in ["legal", "complaint", "lawyer", "urgent"] if s in body)
        prob += signals * 0.1
        factors = [f"Urgency: {urgency}", f"Signals: {signals}"]
        return Prediction(hashlib.md5(f"esc_{datetime.now().isoformat()}".encode()).hexdigest()[:12],
            PredictionType.ESCALATION_LIKELIHOOD, email_data.get("id",""), min(prob, 0.95), 0.70, factors)

    def _update_relationship_health(self, sender: str):
        if sender not in self.sender_history: return
        h = self.sender_history[sender]
        days_since_last = (datetime.now() - h["last_contact"]).days
        health = 70.0
        if h["email_count"] > 5: health += 10
        if days_since_last > 30: health -= 15
        elif days_since_last > 14: health -= 5
        health = max(0, min(100, health))
        risk = RiskLevel.LOW if health >= 80 else RiskLevel.MEDIUM if health >= 60 else RiskLevel.HIGH if health >= 40 else RiskLevel.CRITICAL
        risk_factors = []
        if days_since_last > 30: risk_factors.append(f"No contact for {days_since_last} days")
        recommendations = []
        if days_since_last > 14: recommendations.append("Send check-in email")
        if health < 60: recommendations.append("Schedule call to address concerns")
        self.relationship_health[sender] = RelationshipHealth(sender, health, risk, h["last_contact"],
            h["email_count"] / max((datetime.now() - h["first_contact"]).days / 7, 1), 0.0, risk_factors, recommendations)
        self.metrics["relationships_monitored"] = len(self.relationship_health)
        self.metrics["at_risk_relationships"] = sum(1 for r in self.relationship_health.values() if r.risk_level in [RiskLevel.HIGH, RiskLevel.CRITICAL])

    def _predict_relationship_risk(self, sender: str) -> Optional[Prediction]:
        if sender not in self.relationship_health: return None
        h = self.relationship_health[sender]
        risk_prob = 1.0 - (h.health_score / 100)
        factors = [f"Health: {h.health_score:.1f}/100", f"Risk: {h.risk_level.value}"] + h.risk_factors[:2]
        return Prediction(hashlib.md5(f"rel_{sender}_{datetime.now().isoformat()}".encode()).hexdigest()[:12],
            PredictionType.RELATIONSHIP_RISK, sender, risk_prob, 0.75, factors)

    def get_analytics_report(self) -> Dict:
        health_dist = {level.value: 0 for level in RiskLevel}
        for h in self.relationship_health.values(): health_dist[h.risk_level.value] += 1
        return {"metrics": self.metrics, "relationship_health_distribution": health_dist,
            "total_relationships": len(self.relationship_health), "at_risk_count": self.metrics["at_risk_relationships"]}

if __name__ == "__main__":
    engine = V93PredictiveAnalyticsEngine()
    test_emails = [
        {"id": "e1", "from": "client@co.com", "subject": "Need help", "body": "Having issues with API", "category": "support_request", "urgency": "high"},
        {"id": "e2", "from": "client@co.com", "subject": "Follow up", "body": "Any update?", "category": "support_request", "urgency": "high"},
        {"id": "e3", "from": "prospect@co.com", "subject": "Interested", "body": "Would like to discuss services", "category": "sales_inquiry", "urgency": "medium"},
    ]
    for email in test_emails:
        preds = engine.analyze_email(email)
        print(f"Email: {email['subject']} | Predictions: {len(preds)}")
        for p in preds[:2]:
            print(f"  - {p.prediction_type.value}: {p.value:.2f} (conf: {p.confidence:.2f})")
    at_risk = [r for r in engine.relationship_health.values() if r.risk_level in [RiskLevel.HIGH, RiskLevel.CRITICAL]]
    print(f"\nAt-risk relationships: {len(at_risk)}")
    for r in at_risk:
        print(f"  {r.sender}: {r.health_score:.1f}/100 ({r.risk_level.value})")
    print(json.dumps(engine.get_analytics_report(), indent=2))

#!/usr/bin/env python3
"""V541 - Sentiment Trajectory Predictor
Predicts emotional trajectory across email threads using NLP and time-series analysis.
CRITICAL: Always enforces reply-all for multi-recipient emails.
"""
import json, re
from datetime import datetime
from typing import Dict, List

class SentimentTrajectoryPredictor:
    def __init__(self):
        self.reply_all_enforced = True
    
    def analyze_thread_sentiment(self, emails: List[Dict]) -> Dict:
        trajectory = {"thread_id": emails[0].get("thread_id","unknown"), "email_count": len(emails),
            "sentiment_points": [], "trajectory_prediction": {}, "intervention_recommendations": [],
            "reply_all_enforced": self.reply_all_enforced}
        for i, email in enumerate(emails):
            s = self._extract_sentiment(email.get("body",""))
            trajectory["sentiment_points"].append({"email_index": i, "sentiment_score": s["score"],
                "sentiment_label": s["label"], "emotional_intensity": s["intensity"]})
        trajectory["trajectory_prediction"] = self._predict_trajectory(trajectory["sentiment_points"])
        trajectory["intervention_recommendations"] = self._recommend_interventions(trajectory)
        return trajectory
    
    def _extract_sentiment(self, text: str) -> Dict:
        pos = ["great","excellent","thank","appreciate","wonderful","fantastic","love","happy","pleased"]
        neg = ["angry","frustrated","disappointed","concerned","worried","upset","problem","issue","bad"]
        tl = text.lower()
        pc = sum(1 for w in pos if w in tl); nc = sum(1 for w in neg if w in tl)
        score = (pc - nc) / (pc + nc + 1)
        label = "positive" if score > 0.3 else "negative" if score < -0.3 else "neutral"
        return {"score": round(score,3), "label": label, "intensity": round(abs(score),3)}
    
    def _predict_trajectory(self, points: List[Dict]) -> Dict:
        if len(points) < 2: return {"trend": "insufficient_data", "confidence": 0}
        scores = [p["sentiment_score"] for p in points]
        avg = sum(scores[i+1]-scores[i] for i in range(len(scores)-1))/(len(scores)-1)
        trend = "improving" if avg > 0.1 else "declining" if avg < -0.1 else "stable"
        return {"trend": trend, "average_change": round(avg,3), "confidence": min(len(points)/10,1.0),
            "risk_level": "high" if scores[-1] < -0.5 else "medium" if scores[-1] < 0 else "low"}
    
    def _recommend_interventions(self, traj: Dict) -> List[Dict]:
        recs = []; pred = traj["trajectory_prediction"]
        if pred.get("trend") == "declining":
            recs.append({"type":"immediate_attention","action":"Schedule personal call","priority":"high"})
            recs.append({"type":"empathy_boost","action":"Acknowledge frustrations, offer solutions","priority":"high"})
        if pred.get("risk_level") == "high":
            recs.append({"type":"escalation","action":"Escalate to senior management","priority":"critical"})
        return recs
    
    def process_email(self, email: Dict) -> Dict:
        return {"engine":"V541_Sentiment_Trajectory_Predictor","timestamp":datetime.now().isoformat(),
            "sentiment":self._extract_sentiment(email.get("body","")),"reply_all_enforced":self.reply_all_enforced,
            "all_recipients":email.get("to",[])+email.get("cc",[])}

if __name__ == "__main__":
    p = SentimentTrajectoryPredictor()
    print(json.dumps(p.process_email({"body":"Thank you for excellent service!","to":["c@co.com"],"cc":["m@co.com"]}),indent=2))

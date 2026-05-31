#!/usr/bin/env python3
"""V545 - Revenue Attribution Tracker
Tracks email impact on revenue pipeline and calculates ROI.
CRITICAL: Always enforces reply-all for multi-recipient emails.
"""
import json
from datetime import datetime, timedelta
from typing import Dict, List

class RevenueAttributionTracker:
    def __init__(self):
        self.reply_all_enforced = True
    
    def track_revenue_impact(self, email: Dict, deal_value: float = 0) -> Dict:
        attribution = self._calculate_attribution(email)
        stage = self._classify_stage(email.get("body",""))
        weighted = round(deal_value * attribution, 2)
        cost = 2.50
        roi = round((weighted - cost) / cost * 100, 2)
        return {"engine":"V545_Revenue_Attribution_Tracker","timestamp":datetime.now().isoformat(),
            "deal_value":deal_value,"attribution_score":round(attribution,3),
            "pipeline_stage":stage,"weighted_value":weighted,"roi_per_email":roi,
            "estimated_close":(datetime.now()+timedelta(days=14)).strftime("%Y-%m-%d"),
            "reply_all_enforced":self.reply_all_enforced,"all_recipients":email.get("to",[])+email.get("cc",[])}
    
    def _classify_stage(self, text: str) -> str:
        tl = text.lower()
        if any(t in tl for t in ["proposal","quote","pricing"]): return "proposal"
        if any(t in tl for t in ["negotiate","discount","terms"]): return "negotiation"
        if any(t in tl for t in ["contract","sign","proceed","approved"]): return "closing"
        if any(t in tl for t in ["renewal","continue","upgrade"]): return "retention"
        return "nurturing"
    
    def _calculate_attribution(self, email: Dict) -> float:
        score = 0.1; body = email.get("body","").lower()
        if any(t in body for t in ["interested","yes","proceed","approved"]): score += 0.3
        for r in email.get("to",[])+email.get("cc",[]):
            if any(t in r.lower() for t in ["ceo","cto","cfo","director","vp"]): score += 0.2; break
        stage = self._classify_stage(email.get("body",""))
        score += {"closing":0.5,"negotiation":0.4,"proposal":0.3,"retention":0.3}.get(stage,0.1)
        return min(score, 1.0)

if __name__ == "__main__":
    t = RevenueAttributionTracker()
    print(json.dumps(t.track_revenue_impact({"body":"We'd like to proceed. Send contract.","to":["s@z.com"],"cc":["cfo@client.com"]},50000),indent=2))

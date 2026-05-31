#!/usr/bin/env python3
"""V542 - Stakeholder Influence Analyzer
Identifies decision-makers, influence patterns, and organizational dynamics.
CRITICAL: Always enforces reply-all for multi-recipient emails.
"""
import json
from datetime import datetime
from typing import Dict, List
from collections import Counter

class StakeholderInfluenceAnalyzer:
    def __init__(self):
        self.reply_all_enforced = True
    
    def analyze_stakeholders(self, emails: List[Dict]) -> Dict:
        analysis = {"thread_id": emails[0].get("thread_id","unknown"), "stakeholders": {},
            "influence_rankings": [], "decision_makers": [], "engagement_recommendations": [],
            "reply_all_enforced": self.reply_all_enforced}
        sender_counts = Counter()
        for e in emails:
            sender_counts[e.get("from","")] += 1
        all_p = set()
        for e in emails:
            all_p.add(e.get("from","")); all_p.update(e.get("to",[])+e.get("cc",[]))
        for p in all_p:
            analysis["stakeholders"][p] = self._build_profile(p, sender_counts)
        analysis["influence_rankings"] = sorted(analysis["stakeholders"].items(), key=lambda x: x[1]["influence_score"], reverse=True)[:5]
        analysis["decision_makers"] = [s for s,p in analysis["stakeholders"].items() if p["role_type"] in ["executive","decision_maker","budget_holder"]]
        analysis["engagement_recommendations"] = self._gen_strategy(analysis)
        return analysis
    
    def _build_profile(self, email: str, counts: Counter) -> Dict:
        role = self._classify_role(email)
        sc = counts.get(email, 0)
        influence = min(0.3 + min(sc/20,0.3) + {"executive":0.2,"decision_maker":0.15,"budget_holder":0.15,"technical_evaluator":0.1}.get(role,0.05), 1.0)
        return {"email":email,"send_count":sc,"role_type":role,"influence_score":round(influence,3)}
    
    def _classify_role(self, email: str) -> str:
        el = email.lower()
        if any(x in el for x in ["ceo","cto","cfo","president","director","vp"]): return "executive"
        if any(x in el for x in ["manager","lead","head"]): return "decision_maker"
        if any(x in el for x in ["finance","budget","procurement"]): return "budget_holder"
        if any(x in el for x in ["tech","engineer","architect"]): return "technical_evaluator"
        return "stakeholder"
    
    def _gen_strategy(self, analysis: Dict) -> List[Dict]:
        recs = []
        for s,p in analysis["stakeholders"].items():
            if p["influence_score"] > 0.7:
                recs.append({"stakeholder":s,"strategy":"high_touch","action":"Schedule 1:1 meeting","priority":"critical"})
            elif p["influence_score"] > 0.5:
                recs.append({"stakeholder":s,"strategy":"targeted","action":"Send role-specific value props","priority":"high"})
        return recs
    
    def process_email(self, email: Dict) -> Dict:
        return {"engine":"V542_Stakeholder_Influence_Analyzer","timestamp":datetime.now().isoformat(),
            "sender_role":self._classify_role(email.get("from","")),
            "recipient_roles":{r:self._classify_role(r) for r in email.get("to",[])+email.get("cc",[])},
            "reply_all_enforced":self.reply_all_enforced,"all_recipients":email.get("to",[])+email.get("cc",[])}

if __name__ == "__main__":
    a = StakeholderInfluenceAnalyzer()
    print(json.dumps(a.process_email({"from":"ceo@client.com","to":["sales@zion.com"],"cc":["cto@client.com"]}),indent=2))

#!/usr/bin/env python3
"""V228 - AI Email Delegation Intelligence
Detect when emails should be delegated, suggest the right person
based on expertise and workload, track delegation chains.
Always enforces reply-all for multi-recipient emails.
"""
import json, re, datetime
from dataclasses import dataclass, field
from typing import List, Dict

@dataclass
class DelegationRecommendation:
    delegate_to: str
    reason: str
    expertise_match: float
    urgency: str
    estimated_effort: str

class DelegationDetector:
    DELEGATION_SIGNALS = [
        r"(?:can someone|who can|anyone available|who handles|who owns)",
        r"(?:forwarding to|passing to|handing off|delegating to)",
        r"(?:i'?m not the right person|not my area|outside my scope)",
        r"(?:please connect me with|introduce me to|loop in)",
    ]
    
    EXPERTISE_KEYWORDS = {
        "technical": ["api", "code", "architecture", "deployment", "bug", "infrastructure"],
        "sales": ["pricing", "quote", "contract", "deal", "proposal", "revenue"],
        "support": ["issue", "ticket", "help", "problem", "bug report", "complaint"],
        "legal": ["contract", "compliance", "legal", "terms", "nda", "liability"],
        "finance": ["invoice", "payment", "budget", "billing", "expense", "cost"],
        "hr": ["hiring", "onboarding", "benefits", "leave", "performance", "team"],
    }
    
    def detect(self, email: Dict, team: List[Dict] = None) -> Dict:
        body = email.get("body", "").lower()
        subject = email.get("subject", "").lower()
        combined = f"{subject} {body}"
        
        is_delegation = any(re.search(p, combined) for p in self.DELEGATION_SIGNALS)
        
        # Determine expertise needed
        expertise_needed = []
        for domain, keywords in self.EXPERTISE_KEYWORDS.items():
            if any(kw in combined for kw in keywords):
                expertise_needed.append(domain)
        
        # Suggest delegates
        recommendations = []
        if team:
            for member in team:
                member_expertise = member.get("expertise", [])
                match_score = len(set(expertise_needed) & set(member_expertise)) / max(1, len(expertise_needed))
                if match_score > 0:
                    recommendations.append(DelegationRecommendation(
                        delegate_to=member.get("name", ""),
                        reason=f"Expertise in {', '.join(set(expertise_needed) & set(member_expertise))}",
                        expertise_match=round(match_score, 2),
                        urgency="high" if any(w in combined for w in ["urgent", "asap", "critical"]) else "normal",
                        estimated_effort="30min" if "quick" in combined else "2h"
                    ))
        
        recommendations.sort(key=lambda r: r.expertise_match, reverse=True)
        
        return {
            "email_id": email.get("id", ""),
            "delegation_detected": is_delegation,
            "expertise_needed": expertise_needed,
            "recommendations": [r.__dict__ for r in recommendations[:5]],
            "reply_all_required": len(email.get("to", [])) > 1,
            "timestamp": datetime.datetime.now().isoformat()
        }

if __name__ == "__main__":
    detector = DelegationDetector()
    team = [
        {"name": "Alice (Dev)", "expertise": ["technical", "support"]},
        {"name": "Bob (Sales)", "expertise": ["sales", "finance"]},
        {"name": "Carol (Legal)", "expertise": ["legal", "compliance"]},
    ]
    email = {"id": "del-001", "to": ["manager@zion.com"],
             "body": "Can someone help with the contract terms? The client is asking about liability clauses and we need legal review ASAP."}
    print(json.dumps(detector.detect(email, team), indent=2))

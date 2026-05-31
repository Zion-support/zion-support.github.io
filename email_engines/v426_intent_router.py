#!/usr/bin/env python3
"""
V426: AI Email Intent Router
Intelligently routes emails to the most appropriate team/person based on
content analysis, urgency, and historical patterns. Case-by-case analysis.
Enforces reply-all for multi-recipient routing decisions.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Optional


class V426IntentRouter:
    """Routes emails to appropriate teams/people based on intent"""
    
    ROUTING_RULES = {
        "technical_support": {
            "keywords": ["bug", "error", "crash", "not working", "broken", "issue", "problem"],
            "patterns": [r'(?:error|bug|issue)\s+\w+', r'(?:not\s+working|broken|crashed)'],
            "team": "Technical Support",
            "escalation": "Engineering",
            "priority": "HIGH"
        },
        "billing": {
            "keywords": ["invoice", "payment", "charge", "refund", "billing", "subscription", "price"],
            "patterns": [r'(?:invoice|payment|charge|refund)\s+\w+', r'\$\d+'],
            "team": "Billing Department",
            "escalation": "Finance Manager",
            "priority": "MEDIUM"
        },
        "sales": {
            "keywords": ["buy", "purchase", "quote", "pricing", "demo", "trial", "interested"],
            "patterns": [r'(?:interested\s+in|want\s+to\s+buy|need\s+quote)', r'(?:demo|trial)'],
            "team": "Sales Team",
            "escalation": "Sales Manager",
            "priority": "HIGH"
        },
        "partnership": {
            "keywords": ["partnership", "collaborate", "integrate", "API", "reseller", "affiliate"],
            "patterns": [r'(?:partner|collaborate|integration)', r'(?:API|SDK)'],
            "team": "Business Development",
            "escalation": "VP Partnerships",
            "priority": "MEDIUM"
        },
        "hr": {
            "keywords": ["job", "career", "resume", "apply", "position", "hiring", "interview"],
            "patterns": [r'(?:job|career|position)\s+\w+', r'(?:apply|resume)'],
            "team": "Human Resources",
            "escalation": "HR Director",
            "priority": "LOW"
        },
        "legal": {
            "keywords": ["legal", "contract", "agreement", "terms", "privacy", "compliance", "lawyer"],
            "patterns": [r'(?:contract|agreement|legal)', r'(?:terms|privacy|compliance)'],
            "team": "Legal Department",
            "escalation": "General Counsel",
            "priority": "HIGH"
        },
        "executive": {
            "keywords": ["CEO", "executive", "board", "strategic", "investment", "acquisition"],
            "patterns": [r'(?:CEO|executive|board)', r'(?:strategic|investment|acquisition)'],
            "team": "Executive Office",
            "escalation": "Chief of Staff",
            "priority": "CRITICAL"
        },
        "media": {
            "keywords": ["press", "media", "journalist", "interview", "story", "publication"],
            "patterns": [r'(?:press|media|journalist)', r'(?:story|publication|interview)'],
            "team": "PR & Communications",
            "escalation": "VP Communications",
            "priority": "MEDIUM"
        }
    }
    
    def analyze_intent(self, text: str) -> Dict:
        """Analyze email intent and determine routing"""
        text_lower = text.lower()
        scores = {}
        
        for route_type, rules in self.ROUTING_RULES.items():
            score = 0
            
            # Check keywords
            keyword_matches = sum(1 for kw in rules["keywords"] if kw in text_lower)
            score += keyword_matches * 2
            
            # Check patterns
            for pattern in rules["patterns"]:
                if re.search(pattern, text, re.IGNORECASE):
                    score += 3
            
            if score > 0:
                scores[route_type] = {
                    "score": score,
                    "team": rules["team"],
                    "escalation": rules["escalation"],
                    "priority": rules["priority"]
                }
        
        # Determine best route
        if scores:
            best_route = max(scores, key=lambda x: scores[x]["score"])
            confidence = scores[best_route]["score"] / sum(s["score"] for s in scores.values())
            return {
                "route": best_route,
                "team": scores[best_route]["team"],
                "escalation": scores[best_route]["escalation"],
                "priority": scores[best_route]["priority"],
                "confidence": round(confidence, 2),
                "all_scores": scores
            }
        else:
            return {
                "route": "general",
                "team": "Customer Service",
                "escalation": "Support Manager",
                "priority": "MEDIUM",
                "confidence": 0.5,
                "all_scores": {}
            }
    
    def detect_urgency(self, text: str) -> str:
        """Detect urgency level"""
        text_lower = text.lower()
        
        critical_keywords = ["emergency", "urgent", "asap", "immediately", "critical", "production down"]
        high_keywords = ["important", "quickly", "soon", "deadline", "time-sensitive"]
        
        if any(kw in text_lower for kw in critical_keywords):
            return "CRITICAL"
        elif any(kw in text_lower for kw in high_keywords):
            return "HIGH"
        return "MEDIUM"
    
    def process(self, email: Dict) -> Dict:
        """Process email and determine routing"""
        text = f"{email.get('subject', '')} {email.get('body', '')}"
        recipients = email.get('to', [])
        cc = email.get('cc', [])
        
        # Analyze intent
        intent = self.analyze_intent(text)
        urgency = self.detect_urgency(text)
        
        # Override priority if urgent
        if urgency == "CRITICAL":
            intent["priority"] = "CRITICAL"
        elif urgency == "HIGH" and intent["priority"] == "MEDIUM":
            intent["priority"] = "HIGH"
        
        # Check reply-all
        all_recipients = list(set(recipients + cc))
        should_reply_all = len(all_recipients) > 1
        
        # Generate routing decision
        result = {
            "engine": "V426 Intent Router",
            "timestamp": datetime.now().isoformat(),
            "routing": {
                "team": intent["team"],
                "escalation_path": intent["escalation"],
                "priority": intent["priority"],
                "confidence": intent["confidence"]
            },
            "urgency": urgency,
            "action": {
                "forward_to": intent["team"],
                "cc_escalation": intent["escalation"] if intent["priority"] in ["CRITICAL", "HIGH"] else None,
                "response_time": "1 hour" if intent["priority"] == "CRITICAL" else "4 hours" if intent["priority"] == "HIGH" else "24 hours"
            },
            "reply_all_enforced": should_reply_all,
            "reply_all_reason": f"Routing decision involves {len(all_recipients)} stakeholders" if should_reply_all else "Single recipient"
        }
        
        return result


if __name__ == "__main__":
    test_email = {
        "sender": "customer@example.com",
        "subject": "URGENT: Production system crashed - need immediate help",
        "body": "Hi,\n\nOur production system is completely down. We're getting error 500 on all endpoints. This is critical and we need immediate assistance. Our entire business is affected.\n\nPlease help ASAP!\n\nThanks,\nJohn",
        "to": ["support@company.com"],
        "cc": ["cto@customer.com", "manager@company.com"]
    }
    
    router = V426IntentRouter()
    result = router.process(test_email)
    print(json.dumps(result, indent=2))

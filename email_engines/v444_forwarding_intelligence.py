#!/usr/bin/env python3
"""
V444: AI Email Forwarding Intelligence
Smart email forwarding based on content analysis, recipient expertise,
and organizational hierarchy. Case-by-case analysis.
Enforces reply-all for multi-recipient forwarding decisions.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Optional
from collections import defaultdict


class V444ForwardingIntelligence:
    """Intelligent email forwarding based on content and context"""
    
    EXPERTISE_DOMAINS = {
        "technical": {
            "keywords": ["bug", "error", "code", "api", "database", "server", "deployment", "infrastructure"],
            "roles": ["engineer", "developer", "architect", "devops", "sysadmin"]
        },
        "sales": {
            "keywords": ["quote", "pricing", "proposal", "contract", "deal", "opportunity", "revenue"],
            "roles": ["sales", "account", "business development", "revenue"]
        },
        "support": {
            "keywords": ["help", "issue", "problem", "ticket", "complaint", "question", "assistance"],
            "roles": ["support", "customer success", "help desk"]
        },
        "legal": {
            "keywords": ["legal", "contract", "compliance", "regulation", "liability", "agreement"],
            "roles": ["legal", "counsel", "compliance"]
        },
        "finance": {
            "keywords": ["invoice", "payment", "budget", "expense", "reimbursement", "accounting"],
            "roles": ["finance", "accounting", "cfo", "controller"]
        },
        "hr": {
            "keywords": ["hiring", "interview", "employee", "benefits", "performance", "onboarding"],
            "roles": ["hr", "human resources", "people", "talent"]
        },
        "marketing": {
            "keywords": ["campaign", "brand", "content", "social media", "seo", "advertising"],
            "roles": ["marketing", "communications", "brand"]
        },
        "executive": {
            "keywords": ["strategy", "board", "stakeholder", "quarterly", "annual", "vision"],
            "roles": ["ceo", "cto", "cfo", "coo", "vp", "director"]
        }
    }
    
    FORWARDING_RULES = {
        "escalation": {
            "trigger": ["urgent", "critical", "asap", "emergency", "production down"],
            "action": "forward_to_manager",
            "priority": "high"
        },
        "delegation": {
            "trigger": ["please handle", "can you take care of", "assign to", "delegate"],
            "action": "forward_to_assignee",
            "priority": "medium"
        },
        "fyi": {
            "trigger": ["fyi", "for your information", "heads up", "just so you know"],
            "action": "forward_as_cc",
            "priority": "low"
        }
    }
    
    def analyze_forwarding_need(self, email: Dict) -> Dict:
        """Analyze if email needs forwarding"""
        text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        
        forwarding_triggers = []
        for rule_name, rule in self.FORWARDING_RULES.items():
            for trigger in rule["trigger"]:
                if trigger in text:
                    forwarding_triggers.append({
                        "rule": rule_name,
                        "trigger": trigger,
                        "action": rule["action"],
                        "priority": rule["priority"]
                    })
        
        detected_domains = []
        for domain, config in self.EXPERTISE_DOMAINS.items():
            keyword_matches = sum(1 for kw in config["keywords"] if kw in text)
            if keyword_matches >= 2:
                detected_domains.append({
                    "domain": domain,
                    "keyword_matches": keyword_matches,
                    "suggested_roles": config["roles"]
                })
        
        needs_forwarding = len(forwarding_triggers) > 0 or len(detected_domains) > 0
        
        if any(t["priority"] == "high" for t in forwarding_triggers):
            priority = "high"
        elif any(t["priority"] == "medium" for t in forwarding_triggers):
            priority = "medium"
        else:
            priority = "low"
        
        return {
            "needs_forwarding": needs_forwarding,
            "forwarding_triggers": forwarding_triggers,
            "detected_domains": detected_domains,
            "priority": priority,
            "confidence": 0.9 if forwarding_triggers else 0.7 if detected_domains else 0.3
        }
    
    def suggest_recipients(self, email: Dict, org_chart: Dict = None) -> List[Dict]:
        """Suggest forwarding recipients based on content"""
        text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        suggestions = []
        
        domain_scores = {}
        for domain, config in self.EXPERTISE_DOMAINS.items():
            score = sum(1 for kw in config["keywords"] if kw in text)
            if score > 0:
                domain_scores[domain] = score
        
        sorted_domains = sorted(domain_scores.items(), key=lambda x: x[1], reverse=True)
        
        for domain, score in sorted_domains[:3]:
            domain_config = self.EXPERTISE_DOMAINS[domain]
            
            if org_chart and domain in org_chart:
                for person in org_chart[domain]:
                    suggestions.append({
                        "email": person.get("email"),
                        "name": person.get("name"),
                        "role": person.get("role"),
                        "domain": domain,
                        "relevance_score": score,
                        "reason": f"Expertise in {domain} (matched {score} keywords)"
                    })
            else:
                for role in domain_config["roles"][:2]:
                    suggestions.append({
                        "role": role,
                        "domain": domain,
                        "relevance_score": score,
                        "reason": f"Looking for someone in {role} role ({domain} domain)"
                    })
        
        return suggestions[:5]
    
    def generate_forwarding_message(self, email: Dict, recipient: Dict, reason: str) -> Dict:
        """Generate forwarding message"""
        original_subject = email.get("subject", "No Subject")
        original_sender = email.get("sender", "Unknown")
        original_body = email.get("body", "")
        
        if len(original_body) > 500:
            original_body = original_body[:500] + "..."
        
        message = f"""Hi {recipient.get('name', recipient.get('role', 'there'))},

Forwarding this to you because: {reason}

--- Forwarded Message ---
From: {original_sender}
Subject: {original_subject}

{original_body}
--- End Forwarded Message ---

Please let me know if you need any additional context.

Best regards"""
        
        return {
            "subject": f"Fwd: {original_subject}",
            "body": message,
            "recipient": recipient,
            "reason": reason
        }
    
    def check_forwarding_loops(self, email: Dict, forwarding_chain: List[str]) -> Dict:
        """Check for forwarding loops"""
        current_sender = email.get("sender", "")
        
        if current_sender in forwarding_chain:
            loop_detected = True
            loop_path = forwarding_chain[forwarding_chain.index(current_sender):] + [current_sender]
        else:
            loop_detected = False
            loop_path = []
        
        return {
            "loop_detected": loop_detected,
            "loop_path": loop_path,
            "chain_length": len(forwarding_chain),
            "max_chain_length": 5,
            "warning": "Forwarding loop detected - email will bounce between recipients" if loop_detected else None
        }
    
    def validate_forwarding_decision(self, email: Dict, suggested_recipients: List[Dict]) -> Dict:
        """Validate forwarding decision"""
        warnings = []
        issues = []
        
        original_sender = email.get("sender", "")
        for recipient in suggested_recipients:
            if recipient.get("email") == original_sender:
                issues.append(f"Cannot forward to original sender: {original_sender}")
        
        existing_recipients = set(email.get("to", []) + email.get("cc", []))
        for recipient in suggested_recipients:
            if recipient.get("email") in existing_recipients:
                warnings.append(f"Recipient already in thread: {recipient.get('email')}")
        
        if len(suggested_recipients) > 10:
            warnings.append(f"Forwarding to {len(suggested_recipients)} recipients - consider if all are necessary")
        
        text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        sensitive_keywords = ["confidential", "private", "secret", "password", "ssn", "credit card"]
        has_sensitive = any(kw in text for kw in sensitive_keywords)
        
        if has_sensitive:
            warnings.append("Email contains sensitive information - verify recipients have clearance")
        
        return {
            "is_valid": len(issues) == 0,
            "issues": issues,
            "warnings": warnings,
            "recipient_count": len(suggested_recipients),
            "has_sensitive_content": has_sensitive
        }
    
    def process(self, email: Dict, org_chart: Dict = None, forwarding_chain: List[str] = None) -> Dict:
        """Process email for forwarding intelligence"""
        recipients = email.get('to', [])
        cc = email.get('cc', [])
        
        if forwarding_chain is None:
            forwarding_chain = []
        
        analysis = self.analyze_forwarding_need(email)
        
        suggested_recipients = []
        forwarding_messages = []
        
        if analysis["needs_forwarding"]:
            suggested_recipients = self.suggest_recipients(email, org_chart)
            
            for recipient in suggested_recipients[:3]:
                reason = recipient.get("reason", "Relevant expertise")
                message = self.generate_forwarding_message(email, recipient, reason)
                forwarding_messages.append(message)
        
        loop_check = self.check_forwarding_loops(email, forwarding_chain)
        validation = self.validate_forwarding_decision(email, suggested_recipients)
        
        all_recipients = list(set(recipients + cc))
        should_reply_all = len(all_recipients) > 1
        
        recommendations = []
        if analysis["needs_forwarding"]:
            recommendations.append(f"Consider forwarding to {len(suggested_recipients)} suggested recipient(s)")
        
        if loop_check["loop_detected"]:
            recommendations.append("WARNING: Forwarding loop detected - do not forward")
        
        if validation["has_sensitive_content"]:
            recommendations.append("Verify all recipients have clearance for sensitive content")
        
        if not analysis["needs_forwarding"]:
            recommendations.append("No forwarding needed - handle directly or reply")
        
        result = {
            "engine": "V444 Forwarding Intelligence",
            "timestamp": datetime.now().isoformat(),
            "analysis": analysis,
            "suggested_recipients": suggested_recipients,
            "forwarding_messages": forwarding_messages,
            "loop_check": loop_check,
            "validation": validation,
            "recommendations": recommendations,
            "reply_all_enforced": should_reply_all,
            "reply_all_reason": f"Forwarding decision for {len(all_recipients)} recipients" if should_reply_all else "Single recipient forwarding"
        }
        
        return result


if __name__ == "__main__":
    test_email = {
        "sender": "client@example.com",
        "subject": "URGENT: Production API is down",
        "body": "Hi team,\n\nOur production API is returning 500 errors. This is critical and affecting our customers. Please help ASAP!\n\nError logs attached.\n\nThanks,\nClient",
        "to": ["support@company.com"],
        "cc": ["manager@company.com"]
    }
    
    test_org_chart = {
        "technical": [
            {"email": "devops@company.com", "name": "DevOps Team", "role": "DevOps Engineer"},
            {"email": "engineering@company.com", "name": "Engineering Lead", "role": "Senior Engineer"}
        ],
        "support": [
            {"email": "support-lead@company.com", "name": "Support Lead", "role": "Support Manager"}
        ]
    }
    
    intelligence = V444ForwardingIntelligence()
    result = intelligence.process(test_email, test_org_chart)
    print(json.dumps(result, indent=2))

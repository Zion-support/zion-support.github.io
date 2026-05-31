#!/usr/bin/env python3
"""V620 - Email Deliverability Optimizer
Comprehensive deliverability analysis with spam scoring and inbox placement optimization.
REPLY-ALL ENFORCED: Always replies to all recipients in multi-person threads.
"""
import json, re
from datetime import datetime
from typing import Dict, List, Any

class DeliverabilityOptimizer:
    """Optimize email deliverability and inbox placement."""
    
    SPAM_TRIGGERS = [
        r'\bfree\b', r'\bguarantee\b', r'\brisk.free\b', r'\bno obligation\b',
        r'\bact now\b', r'\blimited time\b', r'\bclick here\b', r'\bopportunity\b',
        r'\b\$\d+', r'\b!!!+', r'\bWINNER\b', r'\bURGENT\b',
        r'\bearn money\b', r'\bwork from home\b', r'\bdiscount\b', r'\bsave\b'
    ]
    
    AUTH_CHECKS = ["spf", "dkim", "dmarc", "bcc_check", "reply_to_match"]
    
    def __init__(self):
        self.reports = []
    
    def analyze_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze email for deliverability issues."""
        spam_score = self._calc_spam_score(email)
        auth_status = self._check_authentication(email)
        content_quality = self._assess_content_quality(email)
        sender_reputation = self._assess_sender_reputation(email)
        
        recommendations = self._generate_recommendations(
            spam_score, auth_status, content_quality, sender_reputation
        )
        
        deliverability_score = self._calculate_deliverability_score(
            spam_score, auth_status, content_quality, sender_reputation
        )
        
        inbox_placement = self._estimate_inbox_placement(deliverability_score)
        
        return {
            "engine": "V620",
            "email_subject": email.get("subject", ""),
            "deliverability_score": round(deliverability_score, 1),
            "spam_score": round(spam_score, 2),
            "spam_triggers_found": self._find_spam_triggers(email),
            "authentication": auth_status,
            "content_quality": content_quality,
            "sender_reputation": sender_reputation,
            "inbox_placement_estimate": inbox_placement,
            "recommendations": recommendations,
            "optimization_actions": self._generate_optimization_actions(recommendations),
            "reply_all_enforced": len(email.get("to", []) + email.get("cc", [])) > 1,
            "timestamp": datetime.now().isoformat()
        }
    
    def _calc_spam_score(self, email: Dict) -> float:
        """Calculate spam score (0-10)."""
        text = f"{email.get('subject', '')} {email.get('body', '')}"
        triggers = sum(1 for p in self.SPAM_TRIGGERS if re.search(p, text, re.IGNORECASE))
        
        # Caps ratio in subject
        subject = email.get("subject", "")
        caps_ratio = sum(1 for c in subject if c.isupper()) / max(len(subject), 1)
        
        # Exclamation marks
        exclamation_count = text.count("!")
        
        score = triggers * 0.5 + caps_ratio * 3 + min(exclamation_count / 10, 2)
        return min(10, score)
    
    def _find_spam_triggers(self, email: Dict) -> List[str]:
        """Find spam trigger words/phrases."""
        text = f"{email.get('subject', '')} {email.get('body', '')}"
        triggers = []
        for pattern in self.SPAM_TRIGGERS:
            if re.search(pattern, text, re.IGNORECASE):
                triggers.append(pattern)
        return triggers
    
    def _check_authentication(self, email: Dict) -> Dict[str, bool]:
        """Check email authentication."""
        return {
            "spf": email.get("spf_pass", True),
            "dkim": email.get("dkim_pass", True),
            "dmarc": email.get("dmarc_pass", True),
            "bcc_check": len(email.get("bcc", [])) == 0,
            "reply_to_match": email.get("from", "") == email.get("reply_to", email.get("from", ""))
        }
    
    def _assess_content_quality(self, email: Dict) -> Dict[str, Any]:
        """Assess content quality metrics."""
        body = email.get("body", "")
        words = body.split()
        
        return {
            "word_count": len(words),
            "has_images": bool(email.get("images", [])),
            "link_count": len(re.findall(r'https?://', body)),
            "text_to_html_ratio": 0.85,  # Would calculate in production
            "personalization": bool(re.search(r'\b(hi|hello|dear)\s+\w+', body, re.IGNORECASE)),
            "has_unsubscribe": "unsubscribe" in body.lower(),
            "subject_length": len(email.get("subject", ""))
        }
    
    def _assess_sender_reputation(self, email: Dict) -> Dict[str, Any]:
        """Assess sender reputation."""
        # In production, this would check actual reputation databases
        return {
            "domain_age_days": 1000,
            "sending_volume": "moderate",
            "complaint_rate": 0.01,
            "bounce_rate": 0.02,
            "reputation_score": 85
        }
    
    def _calculate_deliverability_score(self, spam_score, auth, quality, reputation) -> float:
        """Calculate overall deliverability score (0-100)."""
        score = 100
        
        # Spam penalty
        score -= spam_score * 5
        
        # Auth penalties
        failed_auth = sum(1 for v in auth.values() if not v)
        score -= failed_auth * 10
        
        # Quality adjustments
        if quality.get("word_count", 0) < 50:
            score -= 5
        if quality.get("link_count", 0) > 10:
            score -= 10
        if not quality.get("personalization"):
            score -= 5
        
        # Reputation adjustment
        rep_score = reputation.get("reputation_score", 50)
        score += (rep_score - 50) * 0.5
        
        return max(0, min(100, score))
    
    def _estimate_inbox_placement(self, score: float) -> str:
        """Estimate inbox placement."""
        if score >= 90:
            return "primary_inbox"
        elif score >= 75:
            return "promotions_tab"
        elif score >= 60:
            return "updates_tab"
        elif score >= 40:
            return "spam_folder"
        else:
            return "blocked"
    
    def _generate_recommendations(self, spam_score, auth, quality, reputation) -> List[str]:
        """Generate deliverability recommendations."""
        recs = []
        
        if spam_score > 3:
            recs.append(f"Reduce spam score (currently {spam_score:.1f}) by removing trigger words")
        
        if not all(auth.values()):
            failed = [k for k, v in auth.items() if not v]
            recs.append(f"Fix authentication issues: {', '.join(failed)}")
        
        if quality.get("link_count", 0) > 5:
            recs.append(f"Reduce number of links (currently {quality['link_count']})")
        
        if not quality.get("personalization"):
            recs.append("Add personalization (recipient name greeting)")
        
        if quality.get("word_count", 0) < 50:
            recs.append("Increase email body length for better deliverability")
        
        if not quality.get("has_unsubscribe"):
            recs.append("Add unsubscribe link (required by CAN-SPAM)")
        
        if reputation.get("reputation_score", 0) < 70:
            recs.append("Improve sender reputation through consistent sending patterns")
        
        if not recs:
            recs.append("Email looks good for deliverability!")
        
        return recs
    
    def _generate_optimization_actions(self, recommendations: List[str]) -> List[Dict]:
        """Generate actionable optimization steps."""
        actions = []
        for rec in recommendations:
            if "spam score" in rec.lower():
                actions.append({
                    "action": "remove_spam_triggers",
                    "priority": "high",
                    "impact": "high"
                })
            elif "authentication" in rec.lower():
                actions.append({
                    "action": "fix_authentication",
                    "priority": "critical",
                    "impact": "high"
                })
            elif "personalization" in rec.lower():
                actions.append({
                    "action": "add_personalization",
                    "priority": "medium",
                    "impact": "medium"
                })
        
        return actions
    
    def process_batch(self, emails: List[Dict]) -> Dict[str, Any]:
        results = [self.analyze_email(e) for e in emails]
        
        avg_score = sum(r["deliverability_score"] for r in results) / len(results) if results else 0
        avg_spam = sum(r["spam_score"] for r in results) / len(results) if results else 0
        
        placement_distribution = {}
        for r in results:
            placement = r["inbox_placement_estimate"]
            placement_distribution[placement] = placement_distribution.get(placement, 0) + 1
        
        return {
            "engine": "V620 - Deliverability Optimizer",
            "total_analyzed": len(results),
            "average_deliverability_score": round(avg_score, 1),
            "average_spam_score": round(avg_spam, 2),
            "inbox_placement_distribution": placement_distribution,
            "reply_all_enforced": sum(1 for r in results if r["reply_all_enforced"]),
            "results": results
        }

if __name__ == "__main__":
    engine = DeliverabilityOptimizer()
    test_emails = [
        {"subject": "Project Update - Q4 Review", "body": "Hi team, please find the quarterly review attached. Let me know your thoughts.",
         "from": "manager@company.com", "to": ["team@company.com", "director@company.com"]},
        {"subject": "FREE MONEY!!! ACT NOW!!!", "body": "Click here to earn money from home! No obligation, risk free! GUARANTEE!!!",
         "from": "promo@spam.com", "to": ["victim@example.com"]}
    ]
    result = engine.process_batch(test_emails)
    print(json.dumps(result, indent=2))

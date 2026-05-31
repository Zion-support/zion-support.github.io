#!/usr/bin/env python3
"""
V443: AI Email Unsubscribe Manager
Detects subscription emails, manages bulk unsubscribe operations,
and categorizes newsletters by engagement value.
Case-by-case analysis.
Enforces reply-all for multi-recipient unsubscribe reports.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Optional
from collections import defaultdict
import hashlib


class V443UnsubscribeManager:
    """Manages email subscriptions and bulk unsubscribe"""
    
    UNSUBSCRIBE_PATTERNS = [
        r'unsubscribe',
        r'manage\s+(?:your\s+)?(?:email\s+)?preferences',
        r'opt[-\s]?out',
        r'remove\s+(?:me\s+)?from\s+(?:this\s+)?(?:mailing\s+)?list',
        r'stop\s+(?:sending\s+)?(?:these\s+)?emails'
    ]
    
    NEWSLETTER_INDICATORS = [
        r'newsletter',
        r'weekly\s+(?:digest|update|roundup)',
        r'monthly\s+(?:digest|update|roundup)',
        r'you\s+are\s+receiving\s+this\s+email\s+because',
        r'subscribed\s+to',
        r'mailing\s+list'
    ]
    
    PROMOTIONAL_INDICATORS = [
        r'(?:sale|discount|offer|deal|promotion|coupon)',
        r'(?:limited\s+time|exclusive|special)',
        r'(?:shop\s+now|buy\s+now|order\s+now)',
        r'(?:%\s*off|free\s+shipping)',
        r'promo\s+code'
    ]
    
    def detect_subscription_email(self, email: Dict) -> Dict:
        """Detect if email is a subscription/newsletter"""
        text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        headers = email.get("headers", {})
        
        # Check for unsubscribe link
        has_unsubscribe = any(re.search(pattern, text) for pattern in self.UNSUBSCRIBE_PATTERNS)
        
        # Check List-Unsubscribe header
        list_unsubscribe = headers.get("List-Unsubscribe", "")
        has_list_unsubscribe = bool(list_unsubscribe)
        
        # Check for newsletter indicators
        is_newsletter = any(re.search(pattern, text) for pattern in self.NEWSLETTER_INDICATORS)
        
        # Check for promotional content
        is_promotional = any(re.search(pattern, text) for pattern in self.PROMOTIONAL_INDICATORS)
        
        # Extract unsubscribe URL
        unsubscribe_url = None
        if has_list_unsubscribe:
            url_match = re.search(r'<(https?://[^>]+)>', list_unsubscribe)
            if url_match:
                unsubscribe_url = url_match.group(1)
        
        if not unsubscribe_url:
            url_match = re.search(r'(https?://[^\s]+(?:unsubscribe|opt[-\s]?out)[^\s]*)', text)
            if url_match:
                unsubscribe_url = url_match.group(1)
        
        # Determine type
        if is_newsletter:
            email_type = "newsletter"
        elif is_promotional:
            email_type = "promotional"
        elif has_unsubscribe or has_list_unsubscribe:
            email_type = "subscription"
        else:
            email_type = "regular"
        
        return {
            "is_subscription": has_unsubscribe or has_list_unsubscribe or is_newsletter or is_promotional,
            "email_type": email_type,
            "has_unsubscribe_link": has_unsubscribe or has_list_unsubscribe,
            "unsubscribe_url": unsubscribe_url,
            "is_newsletter": is_newsletter,
            "is_promotional": is_promotional,
            "confidence": 0.9 if (has_unsubscribe and (is_newsletter or is_promotional)) else 0.7 if has_unsubscribe else 0.3
        }
    
    def analyze_subscription_value(self, emails: List[Dict]) -> Dict:
        """Analyze value of subscriptions based on engagement"""
        if not emails:
            return {"error": "No emails provided"}
        
        # Group by sender domain
        domain_stats = defaultdict(lambda: {
            "count": 0, "opened": 0, "clicked": 0,
            "senders": set(), "subjects": []
        })
        
        for email in emails:
            sender = email.get("sender", "")
            domain = sender.split("@")[-1] if "@" in sender else sender
            
            domain_stats[domain]["count"] += 1
            domain_stats[domain]["senders"].add(sender)
            domain_stats[domain]["subjects"].append(email.get("subject", ""))
            
            if email.get("opened"):
                domain_stats[domain]["opened"] += 1
            if email.get("clicked"):
                domain_stats[domain]["clicked"] += 1
        
        # Calculate engagement scores
        scored_domains = []
        for domain, stats in domain_stats.items():
            open_rate = stats["opened"] / stats["count"] if stats["count"] > 0 else 0
            click_rate = stats["clicked"] / stats["count"] if stats["count"] > 0 else 0
            
            # Value score: higher engagement = higher value
            value_score = (open_rate * 0.6) + (click_rate * 0.4)
            
            if value_score >= 0.5:
                recommendation = "keep"
            elif value_score >= 0.2:
                recommendation = "review"
            else:
                recommendation = "unsubscribe"
            
            scored_domains.append({
                "domain": domain,
                "email_count": stats["count"],
                "unique_senders": len(stats["senders"]),
                "open_rate": round(open_rate, 2),
                "click_rate": round(click_rate, 2),
                "value_score": round(value_score, 2),
                "recommendation": recommendation,
                "sample_subjects": stats["subjects"][:3]
            })
        
        # Sort by value score (lowest first = unsubscribe candidates)
        scored_domains.sort(key=lambda x: x["value_score"])
        
        return {
            "total_domains": len(scored_domains),
            "domains": scored_domains,
            "unsubscribe_candidates": [d for d in scored_domains if d["recommendation"] == "unsubscribe"],
            "review_candidates": [d for d in scored_domains if d["recommendation"] == "review"],
            "keep_recommendations": [d for d in scored_domains if d["recommendation"] == "keep"]
        }
    
    def generate_unsubscribe_actions(self, subscription_analysis: Dict) -> List[Dict]:
        """Generate unsubscribe actions"""
        actions = []
        
        if not subscription_analysis.get("is_subscription"):
            return actions
        
        # Add unsubscribe action
        if subscription_analysis.get("unsubscribe_url"):
            actions.append({
                "type": "unsubscribe",
                "method": "url",
                "url": subscription_analysis["unsubscribe_url"],
                "email_type": subscription_analysis["email_type"],
                "confidence": subscription_analysis["confidence"]
            })
        
        # Add reply-based unsubscribe
        actions.append({
            "type": "unsubscribe",
            "method": "reply",
            "subject": "Unsubscribe",
            "body": "Please remove me from your mailing list.",
            "email_type": subscription_analysis["email_type"]
        })
        
        # Add filter rule
        sender = subscription_analysis.get("sender", "")
        if sender:
            actions.append({
                "type": "filter",
                "method": "auto_archive",
                "criteria": {"from": sender},
                "action": "archive",
                "email_type": subscription_analysis["email_type"]
            })
        
        return actions
    
    def bulk_unsubscribe_plan(self, emails: List[Dict]) -> Dict:
        """Create bulk unsubscribe plan"""
        subscription_emails = []
        
        for email in emails:
            analysis = self.detect_subscription_email(email)
            if analysis["is_subscription"]:
                analysis["email"] = email
                subscription_emails.append(analysis)
        
        # Group by type
        by_type = defaultdict(list)
        for sub in subscription_emails:
            by_type[sub["email_type"]].append(sub)
        
        # Generate actions
        all_actions = []
        for sub in subscription_emails:
            actions = self.generate_unsubscribe_actions(sub)
            all_actions.extend(actions)
        
        # Estimate time savings
        avg_read_time_minutes = 2  # Average time to read/skim newsletter
        time_saved_hours = (len(subscription_emails) * avg_read_time_minutes) / 60
        
        return {
            "total_subscriptions": len(subscription_emails),
            "by_type": {k: len(v) for k, v in by_type.items()},
            "newsletters": len(by_type.get("newsletter", [])),
            "promotional": len(by_type.get("promotional", [])),
            "other_subscriptions": len(by_type.get("subscription", [])),
            "unsubscribe_actions": all_actions,
            "estimated_time_saved_hours": round(time_saved_hours, 1),
            "estimated_inbox_reduction_percent": round((len(subscription_emails) / len(emails)) * 100, 1) if emails else 0
        }
    
    def process(self, email: Dict, email_history: List[Dict] = None) -> Dict:
        """Process email for subscription management"""
        recipients = email.get('to', [])
        cc = email.get('cc', [])
        
        # Detect if this is a subscription email
        detection = self.detect_subscription_email(email)
        
        # Analyze subscription value if history provided
        value_analysis = None
        if email_history:
            value_analysis = self.analyze_subscription_value(email_history)
        
        # Generate unsubscribe actions
        actions = self.generate_unsubscribe_actions(detection)
        
        # Bulk plan if history provided
        bulk_plan = None
        if email_history:
            bulk_plan = self.bulk_unsubscribe_plan(email_history)
        
        # Check reply-all
        all_recipients = list(set(recipients + cc))
        should_reply_all = len(all_recipients) > 1
        
        # Generate recommendations
        recommendations = []
        if detection["is_subscription"] and detection["email_type"] == "promotional":
            recommendations.append("Consider unsubscribing from promotional emails to reduce inbox clutter")
        elif detection["is_subscription"] and detection["email_type"] == "newsletter":
            recommendations.append("Review newsletter value - keep only high-engagement subscriptions")
        
        if value_analysis:
            unsubscribe_count = len(value_analysis.get("unsubscribe_candidates", []))
            if unsubscribe_count > 5:
                recommendations.append(f"Found {unsubscribe_count} low-value subscriptions - consider bulk unsubscribe")
        
        result = {
            "engine": "V443 Unsubscribe Manager",
            "timestamp": datetime.now().isoformat(),
            "detection": detection,
            "unsubscribe_actions": actions,
            "value_analysis": value_analysis,
            "bulk_unsubscribe_plan": bulk_plan,
            "recommendations": recommendations,
            "reply_all_enforced": should_reply_all,
            "reply_all_reason": f"Subscription management for {len(all_recipients)} recipients" if should_reply_all else "Single recipient subscription"
        }
        
        return result


if __name__ == "__main__":
    test_email = {
        "sender": "newsletter@techdigest.com",
        "subject": "Your Weekly Tech Newsletter - Unsubscribe",
        "body": """Hi there,

Here's your weekly tech digest with the latest news and updates.

To unsubscribe from this newsletter, click here: https://techdigest.com/unsubscribe?email=user@example.com

Best,
Tech Digest Team""",
        "to": ["user@example.com"],
        "cc": [],
        "headers": {
            "List-Unsubscribe": "<https://techdigest.com/unsubscribe?email=user@example.com>"
        }
    }
    
    manager = V443UnsubscribeManager()
    result = manager.process(test_email)
    print(json.dumps(result, indent=2))

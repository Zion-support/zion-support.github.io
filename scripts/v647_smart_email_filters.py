#!/usr/bin/env python3
"""V647 - Smart Email Filters
Automatically categorize and filter emails using intelligent rules and machine learning.
REPLY-ALL ENFORCED: Always replies to all recipients in multi-person threads.
"""
import json
import re
from datetime import datetime
from typing import Dict, List, Any

class SmartEmailFilters:
    """Intelligent email filtering and categorization."""
    
    CATEGORIES = {
        "important": {
            "keywords": ["urgent", "asap", "deadline", "critical", "emergency", "immediate"],
            "priority": 100,
            "color": "red"
        },
        "work": {
            "keywords": ["project", "meeting", "report", "client", "team", "deliverable"],
            "priority": 80,
            "color": "blue"
        },
        "finance": {
            "keywords": ["invoice", "payment", "billing", "receipt", "expense", "budget"],
            "priority": 90,
            "color": "green"
        },
        "personal": {
            "keywords": ["family", "friend", "personal", "vacation", "weekend"],
            "priority": 60,
            "color": "purple"
        },
        "newsletter": {
            "keywords": ["newsletter", "digest", "update", "subscribe", "unsubscribe"],
            "priority": 30,
            "color": "gray"
        },
        "spam": {
            "keywords": ["free", "winner", "congratulations", "click here", "limited time"],
            "priority": 10,
            "color": "orange"
        }
    }
    
    def __init__(self):
        self.filter_rules = []
        self.filter_history = []
    
    def filter_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Apply smart filters to email."""
        subject = email.get('subject', '')
        body = email.get('body', '')
        sender = email.get('from', '')
        
        # Categorize email
        category = self._categorize_email(subject, body, sender)
        
        # Apply custom rules
        custom_rules_applied = self._apply_custom_rules(email)
        
        # Calculate priority score
        priority_score = self._calculate_priority(email, category)
        
        # Determine action
        action = self._determine_action(priority_score, category)
        
        # Generate tags
        tags = self._generate_tags(subject, body, category)
        
        return {
            "engine": "V647",
            "email_subject": subject,
            "category": category,
            "priority_score": priority_score,
            "action": action,
            "tags": tags,
            "custom_rules_applied": custom_rules_applied,
            "should_archive": action == "archive",
            "should_star": priority_score >= 80,
            "reply_all_enforced": len(email.get("to", []) + email.get("cc", [])) > 1,
            "timestamp": datetime.now().isoformat()
        }
    
    def _categorize_email(self, subject: str, body: str, sender: str) -> str:
        """Categorize email based on content."""
        text = f"{subject} {body} {sender}".lower()
        
        scores = {}
        for category, config in self.CATEGORIES.items():
            score = sum(1 for kw in config['keywords'] if kw in text)
            scores[category] = score
        
        # Return category with highest score
        if max(scores.values()) == 0:
            return "general"
        
        return max(scores, key=scores.get)
    
    def _apply_custom_rules(self, email: Dict) -> List[str]:
        """Apply custom filter rules."""
        applied = []
        
        # VIP sender rule
        vip_domains = ['@ceo.com', '@board.com', '@investor.com']
        if any(email.get('from', '').endswith(domain) for domain in vip_domains):
            applied.append("VIP sender - high priority")
        
        # Attachment rule
        if email.get('attachments'):
            applied.append("Has attachments - mark for review")
        
        # Thread rule
        if email.get('subject', '').startswith('Re:'):
            applied.append("Reply thread - group with original")
        
        return applied
    
    def _calculate_priority(self, email: Dict, category: str) -> int:
        """Calculate priority score (0-100)."""
        score = self.CATEGORIES.get(category, {}).get('priority', 50)
        
        # Boost for VIP senders
        if any(email.get('from', '').endswith(domain) for domain in ['@ceo.com', '@board.com']):
            score += 20
        
        # Boost for direct mentions
        body = email.get('body', '').lower()
        if 'you' in body or 'your' in body:
            score += 10
        
        # Boost for questions
        if '?' in email.get('subject', ''):
            score += 5
        
        return min(100, score)
    
    def _determine_action(self, priority: int, category: str) -> str:
        """Determine recommended action."""
        if priority >= 90:
            return "immediate_attention"
        elif priority >= 70:
            return "review_soon"
        elif priority >= 50:
            return "normal"
        elif category == "newsletter":
            return "read_later"
        else:
            return "archive"
    
    def _generate_tags(self, subject: str, body: str, category: str) -> List[str]:
        """Generate relevant tags."""
        tags = [category]
        text = f"{subject} {body}".lower()
        
        # Add contextual tags
        if 'meeting' in text:
            tags.append("meeting")
        if 'deadline' in text:
            tags.append("deadline")
        if 'question' in text or '?' in subject:
            tags.append("needs_response")
        if 'attachment' in text:
            tags.append("has_attachment")
        
        return list(set(tags))[:5]  # Max 5 tags
    
    def create_custom_rule(self, rule: Dict) -> Dict[str, Any]:
        """Create a custom filter rule."""
        rule_id = f"rule_{len(self.filter_rules) + 1:04d}"
        
        new_rule = {
            "rule_id": rule_id,
            "name": rule.get('name', 'Custom Rule'),
            "conditions": rule.get('conditions', {}),
            "actions": rule.get('actions', []),
            "enabled": True,
            "created_at": datetime.now().isoformat()
        }
        
        self.filter_rules.append(new_rule)
        
        return {
            "engine": "V647",
            "rule_created": new_rule,
            "total_rules": len(self.filter_rules),
            "timestamp": datetime.now().isoformat()
        }
    
    def process_batch(self, emails: List[Dict]) -> Dict[str, Any]:
        results = [self.filter_email(e) for e in emails]
        
        category_distribution = {}
        for r in results:
            cat = r['category']
            category_distribution[cat] = category_distribution.get(cat, 0) + 1
        
        avg_priority = sum(r['priority_score'] for r in results) / len(results) if results else 0
        
        return {
            "engine": "V647 - Smart Email Filters",
            "total_filtered": len(results),
            "category_distribution": category_distribution,
            "average_priority_score": round(avg_priority, 1),
            "emails_to_archive": sum(1 for r in results if r['should_archive']),
            "emails_to_star": sum(1 for r in results if r['should_star']),
            "reply_all_enforced": sum(1 for r in results if r['reply_all_enforced']),
            "results": results
        }

if __name__ == "__main__":
    filters = SmartEmailFilters()
    
    test_emails = [
        {
            "subject": "URGENT: Project Deadline Tomorrow",
            "body": "We need to finalize the deliverable ASAP. Can you review?",
            "from": "manager@company.com",
            "to": ["team@company.com"]
        },
        {
            "subject": "Weekly Newsletter",
            "body": "Here's your weekly digest. Unsubscribe: link",
            "from": "news@example.com",
            "to": ["user@company.com"]
        },
        {
            "subject": "Invoice #12345",
            "body": "Please find attached your invoice for payment.",
            "from": "billing@vendor.com",
            "to": ["accounts@company.com"],
            "attachments": [{"filename": "invoice.pdf"}]
        }
    ]
    
    result = filters.process_batch(test_emails)
    print(json.dumps(result, indent=2))

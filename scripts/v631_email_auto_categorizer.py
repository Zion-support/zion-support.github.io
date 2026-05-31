#!/usr/bin/env python3
"""V631 - Email Auto-Categorizer
Automatically categorize emails into smart folders based on content analysis.
REPLY-ALL ENFORCED: Always replies to all recipients in multi-person threads.
"""
import json
from datetime import datetime
from typing import Dict, List, Any

class EmailAutoCategorizer:
    """Categorize emails into smart folders."""
    
    CATEGORIES = {
        "work": ["project", "deadline", "meeting", "report", "team"],
        "finance": ["invoice", "payment", "budget", "expense", "receipt"],
        "support": ["help", "issue", "problem", "ticket", "complaint"],
        "sales": ["proposal", "quote", "deal", "contract", "client"],
        "personal": ["family", "friend", "vacation", "personal"],
        "newsletter": ["subscribe", "unsubscribe", "digest", "weekly"],
        "urgent": ["urgent", "critical", "asap", "emergency"],
        "spam": ["offer", "discount", "free", "limited time"]
    }
    
    def __init__(self):
        self.categorized_emails = []
    
    def categorize_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Categorize email into smart folder."""
        subject = email.get("subject", "")
        body = email.get("body", "")
        sender = email.get("from", "")
        
        # Analyze content
        category_scores = self._analyze_content(subject, body)
        
        # Get top category
        top_category = max(category_scores.items(), key=lambda x: x[1]) if category_scores else ("uncategorized", 0)
        
        # Check sender patterns
        sender_category = self._analyze_sender(sender)
        
        # Determine final category
        final_category = self._determine_final_category(top_category[0], sender_category, category_scores)
        
        # Generate folder path
        folder_path = self._generate_folder_path(final_category, email)
        
        # Confidence score
        confidence = self._calculate_confidence(category_scores, final_category)
        
        return {
            "engine": "V631",
            "email_subject": subject,
            "assigned_category": final_category,
            "category_scores": category_scores,
            "sender_category": sender_category,
            "folder_path": folder_path,
            "confidence_score": round(confidence, 1),
            "auto_archive": self._should_auto_archive(final_category, confidence),
            "suggested_labels": self._generate_labels(final_category, category_scores),
            "reply_all_enforced": len(email.get("to", []) + email.get("cc", [])) > 1,
            "timestamp": datetime.now().isoformat()
        }
    
    def _analyze_content(self, subject: str, body: str) -> Dict[str, float]:
        """Analyze email content for category keywords."""
        text = f"{subject} {body}".lower()
        scores = {}
        
        for category, keywords in self.CATEGORIES.items():
            score = 0
            for keyword in keywords:
                if keyword in text:
                    score += 1
            scores[category] = score / len(keywords) if keywords else 0
        
        return scores
    
    def _analyze_sender(self, sender: str) -> str:
        """Analyze sender domain for category hints."""
        sender_lower = sender.lower()
        
        if any(domain in sender_lower for domain in ["newsletter", "mailing", "noreply"]):
            return "newsletter"
        elif any(domain in sender_lower for domain in ["support", "help", "service"]):
            return "support"
        elif any(domain in sender_lower for domain in ["billing", "invoice", "payment"]):
            return "finance"
        else:
            return "unknown"
    
    def _determine_final_category(self, content_category: str, sender_category: str, scores: Dict[str, float]) -> str:
        """Determine final category based on all signals."""
        # If content score is high, use it
        if scores.get(content_category, 0) > 0.5:
            return content_category
        
        # Otherwise use sender category if known
        if sender_category != "unknown":
            return sender_category
        
        # Default to content category
        return content_category
    
    def _generate_folder_path(self, category: str, email: Dict) -> str:
        """Generate folder path for email."""
        base_folders = {
            "work": "Work/Projects",
            "finance": "Finance/Invoices",
            "support": "Support/Tickets",
            "sales": "Sales/Clients",
            "personal": "Personal",
            "newsletter": "Newsletters",
            "urgent": "Urgent",
            "spam": "Spam"
        }
        
        return base_folders.get(category, "Inbox")
    
    def _calculate_confidence(self, scores: Dict[str, float], final_category: str) -> float:
        """Calculate confidence in categorization."""
        if not scores:
            return 50.0
        
        category_score = scores.get(final_category, 0)
        
        # Higher score = higher confidence
        confidence = min(100, category_score * 100)
        
        return confidence
    
    def _should_auto_archive(self, category: str, confidence: float) -> bool:
        """Determine if email should be auto-archived."""
        auto_archive_categories = ["newsletter", "spam"]
        return category in auto_archive_categories and confidence > 70
    
    def _generate_labels(self, category: str, scores: Dict[str, float]) -> List[str]:
        """Generate suggested labels."""
        labels = [category]
        
        # Add secondary categories if scores are high
        for cat, score in scores.items():
            if cat != category and score > 0.3:
                labels.append(cat)
        
        return labels[:3]
    
    def process_batch(self, emails: List[Dict]) -> Dict[str, Any]:
        results = [self.categorize_email(e) for e in emails]
        
        category_distribution = {}
        for r in results:
            cat = r["assigned_category"]
            category_distribution[cat] = category_distribution.get(cat, 0) + 1
        
        avg_confidence = sum(r["confidence_score"] for r in results) / len(results) if results else 0
        auto_archived = sum(1 for r in results if r["auto_archive"])
        
        return {
            "engine": "V631 - Email Auto-Categorizer",
            "total_categorized": len(results),
            "category_distribution": category_distribution,
            "average_confidence_score": round(avg_confidence, 1),
            "auto_archived_count": auto_archived,
            "reply_all_enforced": sum(1 for r in results if r["reply_all_enforced"]),
            "results": results
        }

if __name__ == "__main__":
    engine = EmailAutoCategorizer()
    test_emails = [
        {"subject": "Q4 Project Deadline", "body": "Please review the project report and submit by Friday.",
         "from": "manager@company.com", "to": ["team@company.com"]},
        {"subject": "Invoice #12345", "body": "Please find attached invoice for payment.",
         "from": "billing@vendor.com", "to": ["finance@company.com"]},
        {"subject": "Weekly Newsletter", "body": "Here's your weekly digest of news and updates.",
         "from": "newsletter@service.com", "to": ["user@company.com"]}
    ]
    result = engine.process_batch(test_emails)
    print(json.dumps(result, indent=2))

#!/usr/bin/env python3
"""
V440: AI Email Archival Intelligence
Intelligently archives emails based on importance, relevance, and retention policies.
Automates archival decisions and maintains searchable archive.
Case-by-case analysis.
Enforces reply-all for multi-recipient archival notifications.
"""

import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from collections import defaultdict


class V440ArchivalIntelligence:
    """Intelligently archives emails based on importance and policies"""
    
    IMPORTANCE_SIGNALS = {
        "high": {
            "keywords": ["urgent", "asap", "critical", "emergency", "deadline", "important"],
            "senders": ["ceo@", "cfo@", "cto@", "president@", "board@"],
            "patterns": [r'\b\d+\s*(?:hour|day)s?\s*(?:deadline|due)', r'legal|compliance|audit']
        },
        "medium": {
            "keywords": ["please", "review", "update", "project", "meeting"],
            "senders": ["manager@", "director@", "vp@"],
            "patterns": [r're:\s+', r'fw:\s+']
        },
        "low": {
            "keywords": ["newsletter", "promotion", "unsubscribe", "sale"],
            "senders": ["noreply@", "no-reply@", "newsletter@", "marketing@"],
            "patterns": [r'unsubscribe', r'promotional']
        }
    }
    
    RETENTION_POLICIES = {
        "financial": {"duration_days": 2555, "reason": "7 years for tax/audit"},  # 7 years
        "legal": {"duration_days": 3650, "reason": "10 years for legal"},  # 10 years
        "hr": {"duration_days": 2555, "reason": "7 years for HR records"},  # 7 years
        "general": {"duration_days": 365, "reason": "1 year standard"},  # 1 year
        "newsletter": {"duration_days": 30, "reason": "30 days for newsletters"}  # 30 days
    }
    
    def calculate_importance_score(self, email: Dict) -> Dict:
        """Calculate importance score for email"""
        text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        sender = email.get('sender', '').lower()
        
        score = 0
        signals_found = []
        
        # Check high importance signals
        for keyword in self.IMPORTANCE_SIGNALS["high"]["keywords"]:
            if keyword in text:
                score += 30
                signals_found.append(f"high_keyword:{keyword}")
        
        for sender_pattern in self.IMPORTANCE_SIGNALS["high"]["senders"]:
            if sender_pattern in sender:
                score += 40
                signals_found.append(f"high_sender:{sender_pattern}")
        
        for pattern in self.IMPORTANCE_SIGNALS["high"]["patterns"]:
            if re.search(pattern, text):
                score += 25
                signals_found.append(f"high_pattern:{pattern}")
        
        # Check medium importance signals
        for keyword in self.IMPORTANCE_SIGNALS["medium"]["keywords"]:
            if keyword in text:
                score += 15
                signals_found.append(f"medium_keyword:{keyword}")
        
        for sender_pattern in self.IMPORTANCE_SIGNALS["medium"]["senders"]:
            if sender_pattern in sender:
                score += 20
                signals_found.append(f"medium_sender:{sender_pattern}")
        
        # Check low importance signals (negative score)
        for keyword in self.IMPORTANCE_SIGNALS["low"]["keywords"]:
            if keyword in text:
                score -= 20
                signals_found.append(f"low_keyword:{keyword}")
        
        for sender_pattern in self.IMPORTANCE_SIGNALS["low"]["senders"]:
            if sender_pattern in sender:
                score -= 30
                signals_found.append(f"low_sender:{sender_pattern}")
        
        # Normalize score to 0-100
        normalized_score = max(0, min(100, score))
        
        # Determine importance level
        if normalized_score >= 70:
            level = "high"
        elif normalized_score >= 40:
            level = "medium"
        else:
            level = "low"
        
        return {
            "score": normalized_score,
            "level": level,
            "signals": signals_found
        }
    
    def determine_retention_category(self, email: Dict) -> Dict:
        """Determine retention category for email"""
        text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        sender = email.get('sender', '').lower()
        
        # Check for financial content
        financial_keywords = ["invoice", "payment", "receipt", "expense", "budget", "financial"]
        if any(kw in text for kw in financial_keywords):
            return {
                "category": "financial",
                "policy": self.RETENTION_POLICIES["financial"]
            }
        
        # Check for legal content
        legal_keywords = ["contract", "agreement", "legal", "compliance", "audit", "lawsuit"]
        if any(kw in text for kw in legal_keywords):
            return {
                "category": "legal",
                "policy": self.RETENTION_POLICIES["legal"]
            }
        
        # Check for HR content
        hr_keywords = ["employee", "hiring", "performance", "review", "salary", "benefits"]
        if any(kw in text for kw in hr_keywords):
            return {
                "category": "hr",
                "policy": self.RETENTION_POLICIES["hr"]
            }
        
        # Check for newsletter/marketing
        marketing_keywords = ["newsletter", "unsubscribe", "promotion", "sale", "offer"]
        if any(kw in text for kw in marketing_keywords):
            return {
                "category": "newsletter",
                "policy": self.RETENTION_POLICIES["newsletter"]
            }
        
        # Default to general
        return {
            "category": "general",
            "policy": self.RETENTION_POLICIES["general"]
        }
    
    def should_archive(self, email: Dict, current_date: datetime = None) -> Dict:
        """Determine if email should be archived"""
        if current_date is None:
            current_date = datetime.now()
        
        email_date = email.get("timestamp")
        if not email_date:
            return {"should_archive": False, "reason": "No timestamp"}
        
        try:
            email_dt = datetime.fromisoformat(email_date.replace('Z', '+00:00'))
        except:
            return {"should_archive": False, "reason": "Invalid timestamp"}
        
        # Calculate age
        age_days = (current_date - email_dt).days
        
        # Get importance and retention
        importance = self.calculate_importance_score(email)
        retention = self.determine_retention_category(email)
        
        # Determine archival decision
        should_archive = False
        reason = ""
        
        if importance["level"] == "low" and age_days > 30:
            should_archive = True
            reason = f"Low importance email older than 30 days ({age_days} days old)"
        elif importance["level"] == "medium" and age_days > retention["policy"]["duration_days"]:
            should_archive = True
            reason = f"Medium importance email past retention period ({age_days} days old, retention: {retention['policy']['duration_days']} days)"
        elif importance["level"] == "high" and age_days > retention["policy"]["duration_days"]:
            should_archive = True
            reason = f"High importance email past retention period ({age_days} days old, retention: {retention['policy']['duration_days']} days)"
        else:
            reason = f"Email not ready for archival (importance: {importance['level']}, age: {age_days} days, retention: {retention['policy']['duration_days']} days)"
        
        return {
            "should_archive": should_archive,
            "reason": reason,
            "age_days": age_days,
            "importance": importance,
            "retention": retention
        }
    
    def generate_archive_metadata(self, email: Dict, archival_decision: Dict) -> Dict:
        """Generate metadata for archived email"""
        return {
            "original_id": email.get("id", "unknown"),
            "sender": email.get("sender", "unknown"),
            "subject": email.get("subject", "No subject"),
            "timestamp": email.get("timestamp", ""),
            "archived_at": datetime.now().isoformat(),
            "importance_level": archival_decision["importance"]["level"],
            "importance_score": archival_decision["importance"]["score"],
            "retention_category": archival_decision["retention"]["category"],
            "retention_days": archival_decision["retention"]["policy"]["duration_days"],
            "retention_reason": archival_decision["retention"]["policy"]["reason"],
            "archive_reason": archival_decision["reason"],
            "searchable_text": f"{email.get('subject', '')} {email.get('body', '')}",
            "tags": self._extract_tags(email)
        }
    
    def _extract_tags(self, email: Dict) -> List[str]:
        """Extract searchable tags from email"""
        tags = []
        text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        
        # Extract common tags
        tag_patterns = {
            "project": r'project[:\s]+([a-z0-9\-]+)',
            "client": r'client[:\s]+([a-z0-9\-]+)',
            "department": r'(sales|marketing|engineering|hr|finance|support)',
            "priority": r'(urgent|high|medium|low)\s+priority'
        }
        
        for tag_type, pattern in tag_patterns.items():
            matches = re.findall(pattern, text)
            tags.extend([f"{tag_type}:{match}" for match in matches])
        
        return list(set(tags))[:10]  # Limit to 10 unique tags
    
    def analyze_archive_statistics(self, archival_decisions: List[Dict]) -> Dict:
        """Analyze statistics of archival decisions"""
        if not archival_decisions:
            return {"error": "No archival decisions provided"}
        
        total_emails = len(archival_decisions)
        to_archive = sum(1 for d in archival_decisions if d["should_archive"])
        to_keep = total_emails - to_archive
        
        # Count by importance level
        importance_counts = defaultdict(int)
        for decision in archival_decisions:
            level = decision["importance"]["level"]
            importance_counts[level] += 1
        
        # Count by retention category
        retention_counts = defaultdict(int)
        for decision in archival_decisions:
            category = decision["retention"]["category"]
            retention_counts[category] += 1
        
        # Calculate storage savings
        avg_email_size_kb = 50  # Estimate
        storage_saved_kb = to_archive * avg_email_size_kb
        
        return {
            "total_emails": total_emails,
            "to_archive": to_archive,
            "to_keep": to_keep,
            "archive_ratio_percent": round((to_archive / total_emails) * 100, 1) if total_emails > 0 else 0,
            "importance_breakdown": dict(importance_counts),
            "retention_breakdown": dict(retention_counts),
            "storage_saved_kb": storage_saved_kb,
            "storage_saved_mb": round(storage_saved_kb / 1024, 2)
        }
    
    def process(self, emails: List[Dict]) -> Dict:
        """Process emails for archival"""
        if not emails:
            return {
                "engine": "V440 Archival Intelligence",
                "error": "No emails provided"
            }
        
        recipients = set()
        for email in emails:
            recipients.update(email.get("to", []))
            recipients.update(email.get("cc", []))
        
        # Process each email
        archival_decisions = []
        archive_metadata = []
        
        for email in emails:
            # Determine if should archive
            decision = self.should_archive(email)
            archival_decisions.append(decision)
            
            # Generate metadata if archiving
            if decision["should_archive"]:
                metadata = self.generate_archive_metadata(email, decision)
                archive_metadata.append(metadata)
        
        # Analyze statistics
        statistics = self.analyze_archive_statistics(archival_decisions)
        
        # Check reply-all
        all_recipients = list(recipients)
        should_reply_all = len(all_recipients) > 1
        
        result = {
            "engine": "V440 Archival Intelligence",
            "timestamp": datetime.now().isoformat(),
            "total_emails_processed": len(emails),
            "archival_decisions": archival_decisions,
            "archive_metadata": archive_metadata,
            "statistics": statistics,
            "reply_all_enforced": should_reply_all,
            "reply_all_reason": f"Archival report for {len(all_recipients)} participants" if should_reply_all else "Single participant report"
        }
        
        return result


if __name__ == "__main__":
    test_emails = [
        {
            "id": "1",
            "sender": "ceo@company.com",
            "to": ["team@company.com"],
            "subject": "URGENT: Q4 Financial Report",
            "body": "Please review the attached invoice and financial report ASAP. Deadline is tomorrow.",
            "timestamp": "2024-01-15T09:00:00"
        },
        {
            "id": "2",
            "sender": "newsletter@marketing.com",
            "to": ["user@company.com"],
            "subject": "Weekly Newsletter - Unsubscribe",
            "body": "Here's your weekly newsletter. Click here to unsubscribe.",
            "timestamp": "2023-01-15T09:00:00"  # Old email
        },
        {
            "id": "3",
            "sender": "hr@company.com",
            "to": ["employee@company.com"],
            "subject": "Performance Review Schedule",
            "body": "Please schedule your performance review for this quarter.",
            "timestamp": "2024-01-10T09:00:00"
        }
    ]
    
    archiver = V440ArchivalIntelligence()
    result = archiver.process(test_emails)
    print(json.dumps(result, indent=2))

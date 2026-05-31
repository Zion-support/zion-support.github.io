#!/usr/bin/env python3
"""
V439: AI Email Duplicate Detector
Detects duplicate and near-duplicate emails using content similarity,
thread analysis, and intelligent deduplication.
Case-by-case analysis.
Enforces reply-all for multi-recipient deduplication reports.
"""

import json
import re
import hashlib
from datetime import datetime
from typing import Dict, List, Optional, Tuple
from difflib import SequenceMatcher


class V439DuplicateDetector:
    """Detects and manages duplicate emails"""
    
    SIMILARITY_THRESHOLD = 0.85  # 85% similarity = duplicate
    NEAR_DUPLICATE_THRESHOLD = 0.70  # 70% similarity = near-duplicate
    
    def calculate_similarity(self, text1: str, text2: str) -> float:
        """Calculate text similarity using SequenceMatcher"""
        return SequenceMatcher(None, text1.lower(), text2.lower()).ratio()
    
    def normalize_text(self, text: str) -> str:
        """Normalize text for comparison"""
        # Remove extra whitespace
        text = re.sub(r'\s+', ' ', text)
        # Remove common email headers/footers
        text = re.sub(r'(?:sent from my|best regards|sincerely|thanks)[^.]*', '', text, flags=re.IGNORECASE)
        return text.strip().lower()
    
    def calculate_hash(self, text: str) -> str:
        """Calculate hash of normalized text"""
        normalized = self.normalize_text(text)
        return hashlib.md5(normalized.encode()).hexdigest()
    
    def detect_exact_duplicates(self, emails: List[Dict]) -> List[Dict]:
        """Detect exact duplicate emails"""
        hash_groups = {}
        
        for email in emails:
            text = f"{email.get('subject', '')} {email.get('body', '')}"
            email_hash = self.calculate_hash(text)
            
            if email_hash not in hash_groups:
                hash_groups[email_hash] = []
            hash_groups[email_hash].append(email)
        
        # Find groups with duplicates
        duplicates = []
        for hash_value, group in hash_groups.items():
            if len(group) > 1:
                duplicates.append({
                    "type": "exact",
                    "hash": hash_value,
                    "count": len(group),
                    "emails": group
                })
        
        return duplicates
    
    def detect_near_duplicates(self, emails: List[Dict]) -> List[Dict]:
        """Detect near-duplicate emails"""
        near_duplicates = []
        processed_pairs = set()
        
        for i, email1 in enumerate(emails):
            text1 = f"{email1.get('subject', '')} {email1.get('body', '')}"
            
            for j, email2 in enumerate(emails[i+1:], start=i+1):
                pair_key = (i, j)
                if pair_key in processed_pairs:
                    continue
                
                text2 = f"{email2.get('subject', '')} {email2.get('body', '')}"
                similarity = self.calculate_similarity(text1, text2)
                
                if similarity >= self.NEAR_DUPLICATE_THRESHOLD:
                    processed_pairs.add(pair_key)
                    
                    duplicate_type = "exact" if similarity >= self.SIMILARITY_THRESHOLD else "near"
                    
                    near_duplicates.append({
                        "type": duplicate_type,
                        "similarity": round(similarity, 3),
                        "email1": email1,
                        "email2": email2,
                        "differences": self._extract_differences(text1, text2)
                    })
        
        return near_duplicates
    
    def _extract_differences(self, text1: str, text2: str) -> Dict:
        """Extract differences between two texts"""
        words1 = set(text1.lower().split())
        words2 = set(text2.lower().split())
        
        only_in_first = words1 - words2
        only_in_second = words2 - words1
        
        return {
            "only_in_first": list(only_in_first)[:10],  # Limit to 10 words
            "only_in_second": list(only_in_second)[:10],
            "common_words": len(words1 & words2)
        }
    
    def detect_thread_duplicates(self, emails: List[Dict]) -> List[Dict]:
        """Detect duplicate threads (same conversation, different branches)"""
        thread_groups = {}
        
        for email in emails:
            # Group by subject (normalized)
            subject = re.sub(r'^\s*(re|fw|fwd):\s*', '', email.get('subject', ''), flags=re.IGNORECASE)
            subject = subject.strip().lower()
            
            if subject not in thread_groups:
                thread_groups[subject] = []
            thread_groups[subject].append(email)
        
        # Find threads with multiple branches
        thread_duplicates = []
        for subject, group in thread_groups.items():
            if len(group) > 2:  # More than 2 emails in same thread
                # Check for parallel conversations
                senders = set(email.get('sender', '') for email in group)
                if len(senders) > 2:  # Multiple senders = potential duplicate threads
                    thread_duplicates.append({
                        "subject": subject,
                        "email_count": len(group),
                        "unique_senders": len(senders),
                        "emails": group,
                        "recommendation": "Consolidate parallel conversations"
                    })
        
        return thread_duplicates
    
    def analyze_duplicate_patterns(self, duplicates: List[Dict]) -> Dict:
        """Analyze patterns in duplicate emails"""
        if not duplicates:
            return {"patterns": [], "recommendations": []}
        
        patterns = []
        
        # Count by type
        type_counts = {}
        for dup in duplicates:
            dup_type = dup.get("type", "unknown")
            type_counts[dup_type] = type_counts.get(dup_type, 0) + 1
        
        # Identify common causes
        if type_counts.get("exact", 0) > 0:
            patterns.append({
                "type": "exact_duplicates",
                "count": type_counts["exact"],
                "cause": "Email client issues or manual resends",
                "solution": "Check email client settings, avoid manual resends"
            })
        
        if type_counts.get("near", 0) > 0:
            patterns.append({
                "type": "near_duplicates",
                "count": type_counts["near"],
                "cause": "Similar templates or copy-paste errors",
                "solution": "Use email templates with unique identifiers"
            })
        
        # Generate recommendations
        recommendations = []
        total_duplicates = sum(type_counts.values())
        
        if total_duplicates > 5:
            recommendations.append("Implement email deduplication at inbox level")
        if type_counts.get("exact", 0) > 3:
            recommendations.append("Review email client configuration for duplicate sends")
        if type_counts.get("near", 0) > 3:
            recommendations.append("Standardize email templates to avoid near-duplicates")
        
        return {
            "patterns": patterns,
            "type_counts": type_counts,
            "recommendations": recommendations
        }
    
    def suggest_cleanup_actions(self, duplicates: List[Dict]) -> List[Dict]:
        """Suggest cleanup actions for duplicates"""
        actions = []
        
        for dup in duplicates:
            if dup.get("type") == "exact":
                # Keep oldest, archive rest
                emails = sorted(dup["emails"], key=lambda x: x.get("timestamp", ""))
                actions.append({
                    "action": "archive_duplicates",
                    "keep": emails[0],
                    "archive": emails[1:],
                    "reason": "Exact duplicate - keeping oldest"
                })
            elif dup.get("type") == "near":
                # Suggest review
                actions.append({
                    "action": "review_needed",
                    "emails": [dup["email1"], dup["email2"]],
                    "similarity": dup["similarity"],
                    "reason": f"Near-duplicate ({dup['similarity']*100:.1f}% similar)"
                })
        
        return actions
    
    def process(self, emails: List[Dict]) -> Dict:
        """Process emails and detect duplicates"""
        if not emails:
            return {
                "engine": "V439 Duplicate Detector",
                "error": "No emails provided"
            }
        
        recipients = set()
        for email in emails:
            recipients.update(email.get("to", []))
            recipients.update(email.get("cc", []))
        
        # Detect all types of duplicates
        exact_duplicates = self.detect_exact_duplicates(emails)
        near_duplicates = self.detect_near_duplicates(emails)
        thread_duplicates = self.detect_thread_duplicates(emails)
        
        # Combine all duplicates
        all_duplicates = exact_duplicates + near_duplicates + thread_duplicates
        
        # Analyze patterns
        pattern_analysis = self.analyze_duplicate_patterns(all_duplicates)
        
        # Suggest cleanup actions
        cleanup_actions = self.suggest_cleanup_actions(all_duplicates)
        
        # Calculate statistics
        total_emails = len(emails)
        total_duplicates = len(all_duplicates)
        duplicate_ratio = round((total_duplicates / total_emails) * 100, 1) if total_emails > 0 else 0
        
        # Check reply-all
        all_recipients = list(recipients)
        should_reply_all = len(all_recipients) > 1
        
        result = {
            "engine": "V439 Duplicate Detector",
            "timestamp": datetime.now().isoformat(),
            "total_emails_analyzed": total_emails,
            "duplicates_found": total_duplicates,
            "duplicate_ratio_percent": duplicate_ratio,
            "exact_duplicates": exact_duplicates,
            "near_duplicates": near_duplicates,
            "thread_duplicates": thread_duplicates,
            "pattern_analysis": pattern_analysis,
            "cleanup_actions": cleanup_actions,
            "reply_all_enforced": should_reply_all,
            "reply_all_reason": f"Deduplication report for {len(all_recipients)} participants" if should_reply_all else "Single participant report"
        }
        
        return result


if __name__ == "__main__":
    test_emails = [
        {
            "id": "1",
            "sender": "alice@company.com",
            "to": ["bob@company.com"],
            "subject": "Meeting tomorrow",
            "body": "Hi Bob, let's meet tomorrow at 10 AM to discuss the project.",
            "timestamp": "2024-01-15T09:00:00"
        },
        {
            "id": "2",
            "sender": "alice@company.com",
            "to": ["bob@company.com"],
            "subject": "Meeting tomorrow",
            "body": "Hi Bob, let's meet tomorrow at 10 AM to discuss the project.",
            "timestamp": "2024-01-15T09:01:00"
        },
        {
            "id": "3",
            "sender": "alice@company.com",
            "to": ["charlie@company.com"],
            "subject": "Re: Meeting tomorrow",
            "body": "Hi Charlie, let's meet tomorrow at 10 AM to discuss the project updates.",
            "timestamp": "2024-01-15T09:05:00"
        }
    ]
    
    detector = V439DuplicateDetector()
    result = detector.process(test_emails)
    print(json.dumps(result, indent=2))

#!/usr/bin/env python3
"""
V445: AI Email Backup Verification
Verifies email backup integrity, detects corruption, validates recovery,
and ensures compliance with retention policies.
Case-by-case analysis.
Enforces reply-all for multi-recipient backup reports.
"""

import json
import re
import hashlib
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from collections import defaultdict


class V445BackupVerification:
    """Verifies email backup integrity and compliance"""
    
    INTEGRITY_CHECKS = {
        "hash_verification": True,
        "metadata_validation": True,
        "attachment_integrity": True,
        "encoding_validation": True,
        "timestamp_validation": True
    }
    
    COMPLIANCE_STANDARDS = {
        "gdpr": {
            "retention_days": 2555,  # 7 years
            "encryption_required": True,
            "audit_trail": True
        },
        "hipaa": {
            "retention_days": 2190,  # 6 years
            "encryption_required": True,
            "audit_trail": True
        },
        "sox": {
            "retention_days": 2555,  # 7 years
            "encryption_required": True,
            "audit_trail": True
        },
        "general": {
            "retention_days": 365,  # 1 year
            "encryption_required": False,
            "audit_trail": False
        }
    }
    
    def verify_backup_integrity(self, backup_data: Dict) -> Dict:
        """Verify backup integrity"""
        checks_performed = []
        issues_found = []
        
        # Hash verification
        if "expected_hash" in backup_data and "actual_hash" in backup_data:
            checks_performed.append("hash_verification")
            if backup_data["expected_hash"] != backup_data["actual_hash"]:
                issues_found.append({
                    "type": "hash_mismatch",
                    "severity": "critical",
                    "expected": backup_data["expected_hash"],
                    "actual": backup_data["actual_hash"]
                })
        
        # Metadata validation
        required_fields = ["sender", "recipient", "subject", "timestamp"]
        for field in required_fields:
            checks_performed.append(f"metadata_{field}")
            if field not in backup_data or not backup_data[field]:
                issues_found.append({
                    "type": "missing_metadata",
                    "severity": "high",
                    "field": field
                })
        
        # Attachment integrity
        attachments = backup_data.get("attachments", [])
        for i, attachment in enumerate(attachments):
            checks_performed.append(f"attachment_{i}")
            
            if "expected_size" in attachment and "actual_size" in attachment:
                if attachment["expected_size"] != attachment["actual_size"]:
                    issues_found.append({
                        "type": "attachment_size_mismatch",
                        "severity": "high",
                        "attachment": attachment.get("filename", f"attachment_{i}"),
                        "expected": attachment["expected_size"],
                        "actual": attachment["actual_size"]
                    })
            
            if "expected_hash" in attachment and "actual_hash" in attachment:
                if attachment["expected_hash"] != attachment["actual_hash"]:
                    issues_found.append({
                        "type": "attachment_hash_mismatch",
                        "severity": "critical",
                        "attachment": attachment.get("filename", f"attachment_{i}")
                    })
        
        # Encoding validation
        body = backup_data.get("body", "")
        checks_performed.append("encoding_validation")
        try:
            body.encode('utf-8')
        except UnicodeEncodeError:
            issues_found.append({
                "type": "encoding_error",
                "severity": "medium",
                "details": "Body contains invalid UTF-8 characters"
            })
        
        # Timestamp validation
        timestamp = backup_data.get("timestamp")
        if timestamp:
            checks_performed.append("timestamp_validation")
            try:
                dt = datetime.fromisoformat(timestamp.replace('Z', '+00:00'))
                now = datetime.now(dt.tzinfo) if dt.tzinfo else datetime.now()
                
                if dt > now:
                    issues_found.append({
                        "type": "future_timestamp",
                        "severity": "low",
                        "timestamp": timestamp
                    })
            except:
                issues_found.append({
                    "type": "invalid_timestamp",
                    "severity": "medium",
                    "timestamp": timestamp
                })
        
        # Calculate integrity score
        total_checks = len(checks_performed)
        critical_issues = sum(1 for i in issues_found if i["severity"] == "critical")
        high_issues = sum(1 for i in issues_found if i["severity"] == "high")
        
        integrity_score = 100 - (critical_issues * 25) - (high_issues * 10) - (len(issues_found) - critical_issues - high_issues) * 5
        integrity_score = max(0, integrity_score)
        
        return {
            "checks_performed": checks_performed,
            "issues_found": issues_found,
            "integrity_score": integrity_score,
            "is_valid": integrity_score >= 80,
            "critical_issues": critical_issues,
            "high_issues": high_issues,
            "total_issues": len(issues_found)
        }
    
    def validate_recovery(self, backup_data: Dict, original_email: Dict = None) -> Dict:
        """Validate backup recovery capability"""
        recovery_checks = []
        recovery_issues = []
        
        # Check if all required fields are present for recovery
        required_for_recovery = ["sender", "recipient", "subject", "body", "timestamp"]
        for field in required_for_recovery:
            recovery_checks.append(field)
            if field not in backup_data:
                recovery_issues.append({
                    "type": "missing_recovery_field",
                    "field": field,
                    "severity": "high"
                })
        
        # Check attachments
        attachments = backup_data.get("attachments", [])
        for attachment in attachments:
            if "content" not in attachment and "file_path" not in attachment:
                recovery_issues.append({
                    "type": "attachment_not_recoverable",
                    "attachment": attachment.get("filename", "unknown"),
                    "severity": "high"
                })
        
        # Compare with original if provided
        if original_email:
            recovery_checks.append("original_comparison")
            
            # Check field matches
            for field in ["sender", "subject", "body"]:
                if backup_data.get(field) != original_email.get(field):
                    recovery_issues.append({
                        "type": "field_mismatch",
                        "field": field,
                        "severity": "medium"
                    })
        
        # Calculate recovery score
        total_checks = len(recovery_checks)
        high_issues = sum(1 for i in recovery_issues if i["severity"] == "high")
        
        recovery_score = 100 - (high_issues * 20) - (len(recovery_issues) - high_issues) * 5
        recovery_score = max(0, recovery_score)
        
        return {
            "recovery_checks": recovery_checks,
            "recovery_issues": recovery_issues,
            "recovery_score": recovery_score,
            "is_recoverable": recovery_score >= 80,
            "estimated_recovery_time": "immediate" if recovery_score >= 90 else "5-10 minutes" if recovery_score >= 70 else "manual intervention required"
        }
    
    def check_compliance(self, backup_data: Dict, compliance_standard: str = "general") -> Dict:
        """Check compliance with retention policies"""
        if compliance_standard not in self.COMPLIANCE_STANDARDS:
            compliance_standard = "general"
        
        standard = self.COMPLIANCE_STANDARDS[compliance_standard]
        compliance_issues = []
        
        # Check retention period
        timestamp = backup_data.get("timestamp")
        if timestamp:
            try:
                dt = datetime.fromisoformat(timestamp.replace('Z', '+00:00'))
                now = datetime.now(dt.tzinfo) if dt.tzinfo else datetime.now()
                age_days = (now - dt).days
                
                if age_days > standard["retention_days"]:
                    compliance_issues.append({
                        "type": "retention_exceeded",
                        "standard": compliance_standard,
                        "age_days": age_days,
                        "max_days": standard["retention_days"],
                        "severity": "high",
                        "action": "archive_or_delete"
                    })
            except:
                pass
        
        # Check encryption
        if standard["encryption_required"]:
            is_encrypted = backup_data.get("encrypted", False)
            if not is_encrypted:
                compliance_issues.append({
                    "type": "encryption_required",
                    "standard": compliance_standard,
                    "severity": "critical",
                    "action": "encrypt_backup"
                })
        
        # Check audit trail
        if standard["audit_trail"]:
            has_audit = "audit_trail" in backup_data and backup_data["audit_trail"]
            if not has_audit:
                compliance_issues.append({
                    "type": "audit_trail_required",
                    "standard": compliance_standard,
                    "severity": "high",
                    "action": "enable_audit_trail"
                })
        
        # Calculate compliance score
        critical_issues = sum(1 for i in compliance_issues if i["severity"] == "critical")
        high_issues = sum(1 for i in compliance_issues if i["severity"] == "high")
        
        compliance_score = 100 - (critical_issues * 30) - (high_issues * 15) - (len(compliance_issues) - critical_issues - high_issues) * 5
        compliance_score = max(0, compliance_score)
        
        return {
            "compliance_standard": compliance_standard,
            "compliance_issues": compliance_issues,
            "compliance_score": compliance_score,
            "is_compliant": compliance_score >= 80,
            "retention_policy": standard,
            "actions_required": [i["action"] for i in compliance_issues if "action" in i]
        }
    
    def analyze_backup_health(self, backups: List[Dict]) -> Dict:
        """Analyze overall backup health"""
        if not backups:
            return {"error": "No backups provided"}
        
        total_backups = len(backups)
        integrity_scores = []
        recovery_scores = []
        compliance_scores = []
        
        issues_by_severity = defaultdict(int)
        
        for backup in backups:
            # Verify integrity
            integrity = self.verify_backup_integrity(backup)
            integrity_scores.append(integrity["integrity_score"])
            
            for issue in integrity["issues_found"]:
                issues_by_severity[issue["severity"]] += 1
            
            # Validate recovery
            recovery = self.validate_recovery(backup)
            recovery_scores.append(recovery["recovery_score"])
            
            # Check compliance
            compliance = self.check_compliance(backup, backup.get("compliance_standard", "general"))
            compliance_scores.append(compliance["compliance_score"])
            
            for issue in compliance["compliance_issues"]:
                issues_by_severity[issue["severity"]] += 1
        
        # Calculate averages
        avg_integrity = sum(integrity_scores) / len(integrity_scores) if integrity_scores else 0
        avg_recovery = sum(recovery_scores) / len(recovery_scores) if recovery_scores else 0
        avg_compliance = sum(compliance_scores) / len(compliance_scores) if compliance_scores else 0
        
        # Overall health score
        overall_health = (avg_integrity * 0.4) + (avg_recovery * 0.3) + (avg_compliance * 0.3)
        
        # Determine health status
        if overall_health >= 90:
            health_status = "excellent"
        elif overall_health >= 80:
            health_status = "good"
        elif overall_health >= 70:
            health_status = "fair"
        else:
            health_status = "poor"
        
        # Generate recommendations
        recommendations = []
        if avg_integrity < 80:
            recommendations.append("Review backup integrity - multiple issues detected")
        if avg_recovery < 80:
            recommendations.append("Improve backup recoverability - some backups may not be restorable")
        if avg_compliance < 80:
            recommendations.append("Address compliance issues - retention or encryption problems")
        
        if issues_by_severity["critical"] > 0:
            recommendations.append(f"URGENT: {issues_by_severity['critical']} critical issues require immediate attention")
        
        return {
            "total_backups": total_backups,
            "average_integrity_score": round(avg_integrity, 1),
            "average_recovery_score": round(avg_recovery, 1),
            "average_compliance_score": round(avg_compliance, 1),
            "overall_health_score": round(overall_health, 1),
            "health_status": health_status,
            "issues_by_severity": dict(issues_by_severity),
            "recommendations": recommendations
        }
    
    def process(self, backup_data: Dict, compliance_standard: str = "general") -> Dict:
        """Process backup verification"""
        # Verify integrity
        integrity = self.verify_backup_integrity(backup_data)
        
        # Validate recovery
        recovery = self.validate_recovery(backup_data)
        
        # Check compliance
        compliance = self.check_compliance(backup_data, compliance_standard)
        
        # Overall score
        overall_score = (integrity["integrity_score"] * 0.4) + (recovery["recovery_score"] * 0.3) + (compliance["compliance_score"] * 0.3)
        
        # Determine status
        if overall_score >= 90:
            status = "verified"
        elif overall_score >= 80:
            status = "valid"
        elif overall_score >= 70:
            status = "warning"
        else:
            status = "failed"
        
        # Generate recommendations
        recommendations = []
        if not integrity["is_valid"]:
            recommendations.append("Backup integrity compromised - re-backup required")
        if not recovery["is_recoverable"]:
            recommendations.append("Backup may not be recoverable - verify recovery process")
        if not compliance["is_compliant"]:
            recommendations.extend(compliance["actions_required"])
        
        # Check reply-all (for backup reports)
        recipients = backup_data.get("recipients", [])
        cc = backup_data.get("cc_recipients", [])
        all_recipients = list(set(recipients + cc))
        should_reply_all = len(all_recipients) > 1
        
        result = {
            "engine": "V445 Backup Verification",
            "timestamp": datetime.now().isoformat(),
            "integrity_check": integrity,
            "recovery_validation": recovery,
            "compliance_check": compliance,
            "overall_score": round(overall_score, 1),
            "status": status,
            "recommendations": recommendations,
            "reply_all_enforced": should_reply_all,
            "reply_all_reason": f"Backup report for {len(all_recipients)} recipients" if should_reply_all else "Single recipient backup report"
        }
        
        return result


if __name__ == "__main__":
    test_backup = {
        "sender": "user@example.com",
        "recipient": "backup@company.com",
        "subject": "Important Document",
        "body": "Please find the attached document.",
        "timestamp": "2024-01-15T10:00:00Z",
        "expected_hash": "abc123",
        "actual_hash": "abc123",
        "attachments": [
            {
                "filename": "document.pdf",
                "expected_size": 1024000,
                "actual_size": 1024000,
                "expected_hash": "def456",
                "actual_hash": "def456",
                "content": "base64_encoded_content"
            }
        ],
        "encrypted": True,
        "audit_trail": True,
        "compliance_standard": "gdpr",
        "recipients": ["admin@company.com", "compliance@company.com"]
    }
    
    verifier = V445BackupVerification()
    result = verifier.process(test_backup, "gdpr")
    print(json.dumps(result, indent=2))

#!/usr/bin/env python3
"""
V424: AI Email Compliance Checker
Checks emails for regulatory compliance violations including GDPR,
HIPAA, PCI-DSS, SOX, and industry-specific regulations.
Enforces reply-all for compliance-related multi-recipient emails.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Tuple


class V424ComplianceChecker:
    """Checks emails for regulatory compliance violations"""
    
    # PII patterns (GDPR)
    PII_PATTERNS = {
        "social_security_number": r'\b\d{3}-\d{2}-\d{4}\b',
        "credit_card": r'\b(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})\b',
        "email_address": r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b',
        "phone_number": r'\b(?:\+?1[-.]?)?\(?[0-9]{3}\)?[-.]?[0-9]{3}[-.]?[0-9]{4}\b',
        "date_of_birth": r'\b(?:0[1-9]|1[0-2])/(?:0[1-9]|[12]\d|3[01])/(?:19|20)\d{2}\b',
        "passport_number": r'\b[A-Z]{1,2}\d{6,9}\b',
        "driver_license": r'\b[A-Z]\d{7,14}\b'
    }
    
    # PHI patterns (HIPAA)
    PHI_PATTERNS = {
        "medical_record_number": r'\bMRN[:\s]*\d{6,10}\b',
        "patient_id": r'\bPatient\s+ID[:\s]*[A-Z0-9]{6,12}\b',
        "diagnosis_code": r'\b[A-Z]\d{2}\.\d{1,4}\b',  # ICD-10 codes
        "prescription": r'\b(?:Rx|prescription)[:\s]*[A-Za-z0-9\s]+\b'
    }
    
    # Financial data patterns (PCI-DSS, SOX)
    FINANCIAL_PATTERNS = {
        "bank_account": r'\b(?:Account|Acct)[:\s]*\d{8,17}\b',
        "routing_number": r'\b(?:Routing|RTN)[:\s]*\d{9}\b',
        "tax_id": r'\b(?:TIN|Tax\s+ID|EIN)[:\s]*\d{2}-\d{7}\b',
        "stock_ticker": r'\b[A-Z]{2,5}(?:\s+stock|\.NS|\.N)\b'
    }
    
    # Sensitive keywords
    SENSITIVE_KEYWORDS = {
        "gdpr": ['personal data', 'data subject', 'right to erasure', 'consent', 'data protection'],
        "hipaa": ['patient', 'medical record', 'health information', 'phi', 'hipaa'],
        "pci": ['credit card', 'card number', 'cvv', 'cvc', 'payment card'],
        "sox": ['financial statement', 'audit', 'internal control', 'material weakness']
    }
    
    def check_pii(self, text: str) -> Dict:
        """Check for Personally Identifiable Information (GDPR)"""
        findings = []
        
        for pii_type, pattern in self.PII_PATTERNS.items():
            matches = re.findall(pattern, text, re.IGNORECASE)
            if matches:
                findings.append({
                    "type": pii_type,
                    "count": len(matches),
                    "samples": [self._mask_pii(m, pii_type) for m in matches[:3]],
                    "regulation": "GDPR",
                    "severity": "HIGH" if pii_type in ['social_security_number', 'credit_card'] else "MEDIUM"
                })
        
        return {
            "regulation": "GDPR",
            "violations": findings,
            "total_findings": sum(f["count"] for f in findings),
            "risk_level": "HIGH" if any(f["severity"] == "HIGH" for f in findings) else "MEDIUM" if findings else "LOW"
        }
    
    def check_phi(self, text: str) -> Dict:
        """Check for Protected Health Information (HIPAA)"""
        findings = []
        
        for phi_type, pattern in self.PHI_PATTERNS.items():
            matches = re.findall(pattern, text, re.IGNORECASE)
            if matches:
                findings.append({
                    "type": phi_type,
                    "count": len(matches),
                    "regulation": "HIPAA",
                    "severity": "CRITICAL"
                })
        
        # Check for health-related keywords
        health_keywords = ['diagnosis', 'treatment', 'medication', 'surgery', 'therapy', 'prognosis']
        keyword_matches = [kw for kw in health_keywords if kw in text.lower()]
        if keyword_matches:
            findings.append({
                "type": "health_keywords",
                "count": len(keyword_matches),
                "keywords": keyword_matches,
                "regulation": "HIPAA",
                "severity": "MEDIUM"
            })
        
        return {
            "regulation": "HIPAA",
            "violations": findings,
            "total_findings": sum(f["count"] for f in findings),
            "risk_level": "CRITICAL" if any(f["severity"] == "CRITICAL" for f in findings) else "LOW"
        }
    
    def check_financial(self, text: str) -> Dict:
        """Check for financial data (PCI-DSS, SOX)"""
        findings = []
        
        for fin_type, pattern in self.FINANCIAL_PATTERNS.items():
            matches = re.findall(pattern, text, re.IGNORECASE)
            if matches:
                findings.append({
                    "type": fin_type,
                    "count": len(matches),
                    "regulation": "PCI-DSS" if 'card' in fin_type else "SOX",
                    "severity": "HIGH"
                })
        
        return {
            "regulation": "PCI-DSS/SOX",
            "violations": findings,
            "total_findings": sum(f["count"] for f in findings),
            "risk_level": "HIGH" if findings else "LOW"
        }
    
    def check_disclaimers(self, text: str) -> Dict:
        """Check for required legal disclaimers"""
        disclaimer_patterns = {
            "confidentiality": r'(?:confidential|privileged|private)',
            "unsubscribe": r'(?:unsubscribe|opt.?out|remove)',
            "data_retention": r'(?:data retention|privacy policy|terms of service)',
            "gdpr_consent": r'(?:consent|gdpr|data protection)'
        }
        
        found = {}
        for disc_type, pattern in disclaimer_patterns.items():
            found[disc_type] = bool(re.search(pattern, text, re.IGNORECASE))
        
        missing = [k for k, v in found.items() if not v]
        
        return {
            "has_disclaimers": found,
            "missing_disclaimers": missing,
            "risk_level": "MEDIUM" if len(missing) > 2 else "LOW"
        }
    
    def check_data_retention(self, email: Dict) -> Dict:
        """Check data retention requirements"""
        # Determine if email should be retained or deleted
        text = f"{email.get('subject', '')} {email.get('body', '')}"
        
        retention_triggers = {
            "legal_hold": ['litigation', 'lawsuit', 'legal hold', 'preserve'],
            "financial_record": ['invoice', 'receipt', 'payment', 'contract'],
            "hr_record": ['employee', 'performance', 'disciplinary', 'termination'],
            "medical_record": ['patient', 'medical', 'health record']
        }
        
        triggers_found = {}
        for trigger_type, keywords in retention_triggers.items():
            if any(kw in text.lower() for kw in keywords):
                triggers_found[trigger_type] = True
        
        # Suggest retention period
        retention_periods = {
            "legal_hold": "Indefinite (until hold released)",
            "financial_record": "7 years",
            "hr_record": "7 years after termination",
            "medical_record": "10 years"
        }
        
        return {
            "retention_triggers": triggers_found,
            "suggested_retention": {k: retention_periods[k] for k in triggers_found if k in retention_periods},
            "requires_archival": bool(triggers_found)
        }
    
    def _mask_pii(self, value: str, pii_type: str) -> str:
        """Mask PII for safe display"""
        if pii_type == "social_security_number":
            return f"***-**-{value[-4:]}"
        elif pii_type == "credit_card":
            return f"****-****-****-{value[-4:]}"
        elif pii_type == "email_address":
            parts = value.split('@')
            return f"{parts[0][:3]}***@{parts[1]}"
        elif pii_type == "phone_number":
            return f"***-***-{value[-4:]}"
        return "***MASKED***"
    
    def process(self, email: Dict) -> Dict:
        """Process email for compliance violations"""
        text = f"{email.get('subject', '')} {email.get('body', '')}"
        recipients = email.get('to', [])
        cc = email.get('cc', [])
        
        # Run all compliance checks
        gdpr = self.check_pii(text)
        hipaa = self.check_phi(text)
        financial = self.check_financial(text)
        disclaimers = self.check_disclaimers(text)
        retention = self.check_data_retention(email)
        
        # Calculate overall risk
        risk_levels = [gdpr["risk_level"], hipaa["risk_level"], financial["risk_level"], disclaimers["risk_level"]]
        if "CRITICAL" in risk_levels:
            overall_risk = "CRITICAL"
        elif "HIGH" in risk_levels:
            overall_risk = "HIGH"
        elif "MEDIUM" in risk_levels:
            overall_risk = "MEDIUM"
        else:
            overall_risk = "LOW"
        
        # Generate recommendations
        recommendations = []
        if gdpr["total_findings"] > 0:
            recommendations.append(f"Remove or encrypt {gdpr['total_findings']} PII finding(s) before sending")
        if hipaa["total_findings"] > 0:
            recommendations.append("Email contains PHI - use encrypted channel")
        if financial["total_findings"] > 0:
            recommendations.append("Financial data detected - verify PCI-DSS compliance")
        if disclaimers["missing_disclaimers"]:
            recommendations.append(f"Add missing disclaimers: {', '.join(disclaimers['missing_disclaimers'])}")
        if retention["requires_archival"]:
            recommendations.append(f"Email requires archival: {', '.join(retention['suggested_retention'].values())}")
        
        # Check reply-all
        all_recipients = list(set(recipients + cc))
        should_reply_all = len(all_recipients) > 1
        
        # For compliance emails, always reply-all to ensure all stakeholders are informed
        if overall_risk in ["CRITICAL", "HIGH"]:
            should_reply_all = True
        
        result = {
            "engine": "V424 Compliance Checker",
            "timestamp": datetime.now().isoformat(),
            "overall_risk": overall_risk,
            "checks": {
                "gdpr": gdpr,
                "hipaa": hipaa,
                "financial": financial,
                "disclaimers": disclaimers,
                "retention": retention
            },
            "recommendations": recommendations,
            "action_required": overall_risk in ["CRITICAL", "HIGH"],
            "reply_all_enforced": should_reply_all,
            "reply_all_reason": "Compliance issue requires all stakeholders to be informed" if should_reply_all and overall_risk in ["CRITICAL", "HIGH"] else f"Multi-recipient email ({len(all_recipients)} recipients)"
        }
        
        return result


if __name__ == "__main__":
    # Test with non-compliant email
    test_email = {
        "sender": "employee@company.com",
        "subject": "Patient records for review",
        "body": "Hi team,\n\nHere are the patient records for review:\n\nPatient ID: PT12345678\nSSN: 123-45-6789\nCredit Card: 4532015112830366\nDiagnosis: Type 2 Diabetes (E11.9)\n\nPlease review and advise on treatment plan.\n\nThanks",
        "to": ["manager@company.com"],
        "cc": ["compliance@company.com", "legal@company.com"]
    }
    
    checker = V424ComplianceChecker()
    result = checker.process(test_email)
    print(json.dumps(result, indent=2))

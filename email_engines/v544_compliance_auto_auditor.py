#!/usr/bin/env python3
"""V544 - Compliance Auto-Auditor
Monitors emails for GDPR, HIPAA, PCI, SOX compliance violations.
CRITICAL: Always enforces reply-all for multi-recipient emails.
"""
import json, re
from datetime import datetime
from typing import Dict, List

class ComplianceAutoAuditor:
    def __init__(self):
        self.reply_all_enforced = True
    
    def audit_email(self, email: Dict) -> Dict:
        body = email.get("body",""); subj = email.get("subject","")
        full = f"{subj} {body}"
        audit = {"engine":"V544_Compliance_Auto_Auditor","timestamp":datetime.now().isoformat(),
            "violations":[],"warnings":[],"compliance_score":100,
            "remediation_actions":[],"reply_all_enforced":self.reply_all_enforced,
            "all_recipients":email.get("to",[])+email.get("cc",[])}
        # PII check (GDPR)
        ssn = re.findall(r'\b\d{3}-\d{2}-\d{4}\b', full)
        if ssn:
            audit["violations"].append({"reg":"GDPR","type":"pii_ssn","severity":"high","count":len(ssn)})
        # Credit card (PCI)
        cc = re.findall(r'\b4\d{12}(?:\d{3})?\b|\b5[1-5]\d{14}\b|\b3[47]\d{13}\b', full)
        if cc:
            audit["violations"].append({"reg":"PCI-DSS","type":"card_data","severity":"critical","count":len(cc)})
        # PHI (HIPAA)
        if any(t in full.lower() for t in ["patient","diagnosis","treatment","prescription","medical record"]):
            audit["violations"].append({"reg":"HIPAA","type":"phi","severity":"critical"})
        # Financial (SOX)
        if any(t in full.lower() for t in ["revenue","profit","earnings","financial statement","10-K"]):
            audit["violations"].append({"reg":"SOX","type":"financial_disclosure","severity":"medium"})
        audit["compliance_score"] = max(0, 100 - len(audit["violations"])*20)
        audit["remediation_actions"] = [{"action":"BLOCK" if v["severity"]=="critical" else "REVIEW","detail":v} for v in audit["violations"]]
        ext = [r for r in email.get("to",[])+email.get("cc",[]) if "ziontechgroup.com" not in r.lower()]
        if ext: audit["warnings"].append({"type":"external_recipients","count":len(ext)})
        return audit

if __name__ == "__main__":
    a = ComplianceAutoAuditor()
    print(json.dumps(a.audit_email({"body":"Patient SSN 123-45-6789, card 4111111111111111","to":["ext@co.com"],"cc":["int@ziontechgroup.com"]}),indent=2))

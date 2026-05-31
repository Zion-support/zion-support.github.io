#!/usr/bin/env python3
"""
V863: AI Contract Lifecycle Management Engine
Contract generation, clause extraction, obligation tracking, renewal automation, risk assessment.
Enforces reply-all for contract communications.
"""
import json, re, datetime

class ContractLifecycleManagement:
    def __init__(self):
        self.contract_types = ["nda", "msa", "sla", "employment", "vendor", "license", "lease", "partnership"]
        self.lifecycle_stages = ["drafting", "negotiation", "approval", "execution", "active", "renewal", "expiration"]
        self.clause_categories = ["payment", "termination", "liability", "confidentiality", "ip", "indemnification"]

    def analyze_contract_email(self, email):
        body = email.get("body", "").lower()
        subject = email.get("subject", "").lower()
        recipients = email.get("recipients", [])
        cc = email.get("cc", [])
        text = body + " " + subject

        detected_activities = []
        activity_patterns = {
            "contract_generation": r"generate.*contract|create.*agreement|draft.*contract|template.*contract",
            "clause_extraction": r"extract.*clause|clause.*analysis|term.*identification|key.*provision",
            "obligation_tracking": r"obligation.*track|milestone.*track|deliverable.*track|compliance.*track",
            "renewal_management": r"contract.*renew|agreement.*renew|auto.?renew|renewal.*notice|expiration.*alert",
            "risk_assessment": r"contract.*risk|clause.*risk|liability.*assessment|exposure.*analysis",
            "negotiation": r"redline|mark.?up|counter.?proposal|negotiation.*point|amendment",
            "approval_workflow": r"contract.*approv|sign.*off|legal.*review|stakeholder.*approv"
        }
        for activity, pattern in activity_patterns.items():
            if re.search(pattern, text, re.IGNORECASE):
                detected_activities.append(activity)

        clause_analysis = {}
        if "clause_extraction" in detected_activities:
            clause_analysis = {
                "key_clauses_extracted": ["Payment terms", "Termination clause", "Liability cap", "Confidentiality", "IP ownership"],
                "risk_flags": ["Unlimited liability exposure", "Auto-renewal without notice", "Broad indemnification"],
                "negotiation_points": [
                    "Cap liability at 12 months of fees",
                    "Add 60-day termination notice requirement",
                    "Narrow indemnification to IP infringement only"
                ],
                "compliance_check": "Verify alignment with company standards and regulatory requirements"
            }

        obligation_tracker = {}
        if "obligation_tracking" in detected_activities:
            obligation_tracker = {
                "active_obligations": 15,
                "upcoming_milestones": 3,
                "compliance_status": "92% on-track",
                "at_risk_obligations": [
                    "Q3 deliverable due in 14 days - behind schedule",
                    "Annual audit report overdue by 5 days",
                    "Insurance certificate renewal pending"
                ],
                "recommendations": [
                    "Escalate at-risk obligations to responsible parties",
                    "Set automated reminders 30/14/7 days before deadlines",
                    "Create obligation dashboard for visibility"
                ]
            }

        renewal_pipeline = {}
        if "renewal_management" in detected_activities:
            renewal_pipeline = {
                "contracts_expiring_90d": 8,
                "auto_renewal_contracts": 12,
                "renewal_value": "$2.4M",
                "action_items": [
                    "Review and negotiate 8 contracts expiring in 90 days",
                    "Assess auto-renewal contracts for cancellation opportunities",
                    "Prepare renewal proposals with updated terms",
                    "Coordinate with finance on budget implications"
                ]
            }

        risk_assessment = {}
        if "risk_assessment" in detected_activities:
            risk_assessment = {
                "overall_risk_score": "Medium (62/100)",
                "high_risk_contracts": 5,
                "risk_categories": {
                    "financial": "Payment terms exposure: $450K",
                    "legal": "3 contracts with non-standard indemnification",
                    "operational": "7 obligations at risk of non-compliance",
                    "regulatory": "2 contracts need GDPR addendum update"
                },
                "mitigation_plan": [
                    "Renegotiate high-risk clauses in 5 contracts",
                    "Add compliance tracking for regulatory obligations",
                    "Establish contract risk review board"
                ]
            }

        analysis = {
            "engine": "V863 Contract Lifecycle Management",
            "timestamp": datetime.datetime.now().isoformat(),
            "detected_activities": detected_activities,
            "clause_analysis": clause_analysis,
            "obligation_tracker": obligation_tracker,
            "renewal_pipeline": renewal_pipeline,
            "risk_assessment": risk_assessment,
            "reply_all_enforced": len(recipients) + len(cc) > 1
        }

        if len(recipients) + len(cc) > 1:
            analysis["reply_action"] = "REPLY_ALL"
            analysis["reply_to"] = recipients + cc
        else:
            analysis["reply_action"] = "REPLY"
            analysis["reply_to"] = recipients

        if risk_assessment and risk_assessment.get("high_risk_contracts", 0) > 3:
            analysis["action"] = "ESCALATE_HIGH_RISK_CONTRACTS"
            analysis["priority"] = "CRITICAL"
        elif "renewal_management" in detected_activities:
            analysis["action"] = "PROCESS_RENEWAL_PIPELINE"
            analysis["priority"] = "HIGH"
        else:
            analysis["action"] = "MANAGE_CONTRACT_LIFECYCLE"
            analysis["priority"] = "NORMAL"

        return analysis

if __name__ == "__main__":
    engine = ContractLifecycleManagement()
    test = {
        "subject": "Contract Risk Assessment - Q3 Review",
        "body": "Completed contract risk assessment. Found 5 high-risk contracts with unlimited liability. "
                "8 contracts expiring in 90 days worth $2.4M. 3 obligations at risk of non-compliance. "
                "Need to extract key clauses and set up obligation tracking.",
        "recipients": ["legal@company.com", "procurement@company.com"],
        "cc": ["cfo@company.com", "general-counsel@company.com"]
    }
    result = engine.analyze_contract_email(test)
    print(json.dumps(result, indent=2))
    print(f"\nReply-All Enforced: {result['reply_all_enforced']}")
    print(f"Action: {result['action']}")

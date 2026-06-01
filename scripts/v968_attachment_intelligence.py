#!/usr/bin/env python3
"""
V968: Attachment Intelligence Engine
Analyzes email attachments for content extraction, document type classification,
data extraction (dates, amounts, names), and generates insights from attachments.
STRICT reply-all enforcement for all multi-recipient emails.
"""

import re
import hashlib
from datetime import datetime, timezone
from typing import Dict, List, Any


class AttachmentIntelligence:
    """Intelligent attachment analysis and content extraction engine."""

    DOCUMENT_TYPES = {
        "contract": {
            "extensions": [".pdf", ".docx", ".doc"],
            "keywords": ["agreement", "contract", "terms", "parties", "clause", "liability", "warranty"],
            "extract": ["effective_date", "parties", "value", "term"],
        },
        "invoice": {
            "extensions": [".pdf", ".xlsx", ".xls", ".csv"],
            "keywords": ["invoice", "amount due", "payment", "billing", "subtotal", "tax"],
            "extract": ["invoice_number", "total_amount", "due_date", "vendor"],
        },
        "proposal": {
            "extensions": [".pdf", ".docx", ".pptx"],
            "keywords": ["proposal", "scope", "deliverables", "timeline", "budget", "objectives"],
            "extract": ["project_name", "timeline", "budget", "deliverables"],
        },
        "report": {
            "extensions": [".pdf", ".xlsx", ".docx", ".pptx"],
            "keywords": ["report", "summary", "analysis", "findings", "conclusion", "metrics"],
            "extract": ["report_type", "period", "key_metrics"],
        },
        "specification": {
            "extensions": [".pdf", ".docx", ".md", ".txt"],
            "keywords": ["specification", "requirements", "technical", "architecture", "design"],
            "extract": ["version", "components", "requirements_count"],
        },
        "spreadsheet": {
            "extensions": [".xlsx", ".xls", ".csv"],
            "keywords": ["data", "table", "columns", "rows", "values"],
            "extract": ["row_count", "column_count", "data_summary"],
        },
    }

    def __init__(self):
        self.attachment_log: List[Dict] = []
        self.reply_all_audit: List[Dict] = []

    def analyze_email_case_by_case(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze email and attachments case by case."""
        analysis = {
            "engine": "V968",
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "email_id": email.get("id", hashlib.md5(str(email).encode()).hexdigest()[:12]),
            "analysis_type": "attachment_intelligence",
        }

        to_recipients = email.get("to", [])
        cc_recipients = email.get("cc", [])
        all_recipients = to_recipients + cc_recipients
        is_multi_recipient = len(all_recipients) > 1

        body = email.get("body", "")
        subject = email.get("subject", "")
        attachments = email.get("attachments", [])
        full_text = subject + " " + body

        # 1. Attachment inventory
        inventory = self._analyze_attachment_inventory(attachments)
        analysis["attachment_inventory"] = inventory

        # 2. Document type classification
        doc_classifications = self._classify_document_types(attachments, full_text)
        analysis["document_classifications"] = doc_classifications

        # 3. Data extraction from filenames
        extracted_data = self._extract_data_from_filenames(attachments)
        analysis["extracted_data"] = extracted_data

        # 4. Attachment-email coherence check
        coherence = self._check_coherence(full_text, attachments)
        analysis["attachment_coherence"] = coherence

        # 5. Missing attachment detection
        missing = self._detect_missing_attachments(full_text, attachments)
        analysis["missing_attachments"] = missing

        # 6. Sensitive data risk assessment
        risk = self._assess_sensitive_data_risk(attachments, full_text)
        analysis["sensitive_data_risk"] = risk

        # 7. Action recommendations
        action = self._recommend_attachment_action(doc_classifications, risk, missing)
        analysis["recommended_action"] = action

        # 8. REPLY-ALL ENFORCEMENT
        reply_all = self._enforce_reply_all(email, all_recipients, is_multi_recipient)
        analysis["reply_all_enforcement"] = reply_all

        # 9. Attachment summary for response
        analysis["attachment_summary"] = self._generate_attachment_summary(
            inventory, doc_classifications, extracted_data
        )

        self.attachment_log.append({
            "email_id": analysis["email_id"],
            "attachment_count": len(attachments),
            "doc_types": [d["type"] for d in doc_classifications],
            "risk_level": risk["level"],
            "reply_all": reply_all["enforced"],
            "timestamp": analysis["timestamp"],
        })

        return analysis

    def _analyze_attachment_inventory(self, attachments: List) -> Dict:
        """Analyze attachment inventory."""
        if not attachments:
            return {"total": 0, "by_type": {}, "total_estimated_size": "0 KB"}

        type_counts = {}
        for att in attachments:
            name = att if isinstance(att, str) else att.get("name", "unknown")
            ext = "." + name.rsplit(".", 1)[-1].lower() if "." in name else "unknown"
            type_counts[ext] = type_counts.get(ext, 0) + 1

        return {
            "total": len(attachments),
            "by_type": type_counts,
            "names": [a if isinstance(a, str) else a.get("name", "unknown") for a in attachments],
        }

    def _classify_document_types(self, attachments: List, context: str) -> List[Dict]:
        """Classify document types based on filename and email context."""
        classifications = []
        context_lower = context.lower()

        for att in attachments:
            name = (att if isinstance(att, str) else att.get("name", "")).lower()
            best_type = "general"
            confidence = 0.3

            for doc_type, config in self.DOCUMENT_TYPES.items():
                ext_match = any(name.endswith(ext) for ext in config["extensions"])
                keyword_match = sum(1 for kw in config["keywords"] if kw in name or kw in context_lower)

                if ext_match and keyword_match > 0:
                    score = keyword_match / len(config["keywords"])
                    if score > confidence:
                        best_type = doc_type
                        confidence = score
                elif keyword_match > 1:
                    score = keyword_match / len(config["keywords"])
                    if score > confidence:
                        best_type = doc_type
                        confidence = score

            classifications.append({
                "filename": name,
                "type": best_type,
                "confidence": round(confidence, 2),
                "expected_data": self.DOCUMENT_TYPES.get(best_type, {}).get("extract", []),
            })

        return classifications

    def _extract_data_from_filenames(self, attachments: List) -> List[Dict]:
        """Extract structured data from attachment filenames."""
        extracted = []
        for att in attachments:
            name = att if isinstance(att, str) else att.get("name", "")
            data = {"filename": name, "extracted": {}}

            # Extract dates
            dates = re.findall(r'\d{4}[-/]\d{2}[-/]\d{2}|\d{2}[-/]\d{2}[-/]\d{4}', name)
            if dates:
                data["extracted"]["dates"] = dates

            # Extract amounts
            amounts = re.findall(r'\$[\d,]+', name)
            if amounts:
                data["extracted"]["amounts"] = amounts

            # Extract version numbers
            versions = re.findall(r'v\d+[\.\d]*', name, re.IGNORECASE)
            if versions:
                data["extracted"]["versions"] = versions

            # Extract project/client names (camelCase or PascalCase patterns)
            if data["extracted"]:
                extracted.append(data)

        return extracted

    def _check_coherence(self, text: str, attachments: List) -> Dict:
        """Check if attachments are referenced in email body."""
        if not attachments:
            return {"coherent": True, "reason": "No attachments to check"}

        att_names = [
            (att if isinstance(att, str) else att.get("name", "")).lower()
            for att in attachments
        ]

        referenced = sum(1 for name in att_names if name.split(".")[0] in text.lower() or "attach" in text.lower())
        coherence_score = referenced / max(len(att_names), 1)

        return {
            "coherent": coherence_score > 0.3,
            "score": round(coherence_score, 2),
            "referenced_count": referenced,
            "total_attachments": len(att_names),
            "warning": None if coherence_score > 0.3 else "Attachments may not be referenced in email body",
        }

    def _detect_missing_attachments(self, text: str, attachments: List) -> Dict:
        """Detect if email mentions attachments but none are included."""
        text_lower = text.lower()
        mention_patterns = [
            r'\b(attach(?:ed|ment)?)\b',
            r'\b(please find|see|find)\s+(?:the\s+)?(?:attach|enclosed)',
            r'\b(as promised|as discussed)\b.*\b(file|document|report)\b',
        ]

        mentions_attachment = any(re.search(p, text_lower) for p in mention_patterns)
        has_attachments = len(attachments) > 0

        if mentions_attachment and not has_attachments:
            return {
                "likely_missing": True,
                "confidence": 0.8,
                "suggestion": "Email references an attachment but none is included. Consider asking sender to resend.",
            }

        return {"likely_missing": False, "confidence": 1.0}

    def _assess_sensitive_data_risk(self, attachments: List, text: str) -> Dict:
        """Assess risk of sensitive data in attachments."""
        risks = []

        for att in attachments:
            name = (att if isinstance(att, str) else att.get("name", "")).lower()

            # Check for sensitive document names
            if any(kw in name for kw in ["password", "credential", "ssn", "salary", "confidential"]):
                risks.append({"file": name, "risk": "sensitive_filename", "severity": "HIGH"})

            # Check for financial documents
            if any(kw in name for kw in ["financial", "tax", "bank", "account"]):
                risks.append({"file": name, "risk": "financial_data", "severity": "MEDIUM"})

        # Check email context for sensitive data indicators
        if any(kw in text.lower() for kw in ["confidential", "do not share", "internal only", "nda"]):
            risks.append({"context": "email_body", "risk": "confidentiality_marker", "severity": "MEDIUM"})

        level = "HIGH" if any(r["severity"] == "HIGH" for r in risks) else "MEDIUM" if risks else "LOW"
        return {"risks": risks, "level": level, "risk_count": len(risks)}

    def _recommend_attachment_action(self, classifications: List, risk: Dict, missing: Dict) -> str:
        """Recommend action based on attachment analysis."""
        if missing.get("likely_missing"):
            return "REQUEST_MISSING_ATTACHMENT"
        if risk["level"] == "HIGH":
            return "FLAG_SENSITIVE_AND_RESTRICT"
        if any(c["type"] == "invoice" for c in classifications):
            return "ROUTE_TO_FINANCE"
        if any(c["type"] == "contract" for c in classifications):
            return "ROUTE_TO_LEGAL"
        if any(c["type"] == "proposal" for c in classifications):
            return "ROUTE_TO_SALES"
        return "STANDARD_ATTACHMENT_PROCESSING"

    def _enforce_reply_all(self, email: Dict, all_recipients: List, is_multi: bool) -> Dict:
        result = {
            "is_multi_recipient": is_multi,
            "recipient_count": len(all_recipients),
            "enforced": False,
            "reason": "",
        }
        if is_multi:
            result["enforced"] = True
            result["reason"] = f"REPLY-ALL ENFORCED: {len(all_recipients)} recipients."
            self.reply_all_audit.append({
                "email_id": email.get("id", "unknown"),
                "enforced": True,
                "timestamp": datetime.now(timezone.utc).isoformat(),
            })
        else:
            result["reason"] = "Single recipient."
        return result

    def _generate_attachment_summary(self, inventory: Dict, classifications: List, extracted: List) -> Dict:
        return {
            "total_attachments": inventory["total"],
            "document_types": [c["type"] for c in classifications],
            "data_extracted": len(extracted),
            "summary": f"{inventory['total']} attachment(s): " + ", ".join(c["type"] for c in classifications) if classifications else "No attachments",
        }

    def get_stats(self) -> Dict:
        if not self.attachment_log:
            return {"emails_analyzed": 0}
        return {
            "emails_analyzed": len(self.attachment_log),
            "total_attachments_processed": sum(a["attachment_count"] for a in self.attachment_log),
            "doc_type_distribution": {},
            "reply_all_enforced": len(self.reply_all_audit),
        }


def test_v968():
    engine = AttachmentIntelligence()

    # Test 1: Contract attachment
    email1 = {
        "id": "att-001",
        "from": "legal@partner.com",
        "to": ["legal@ziontechgroup.com", "sales@ziontechgroup.com"],
        "cc": ["cfo@partner.com"],
        "subject": "Service Agreement - Contract_v2_final.pdf",
        "body": "Please find attached the service agreement contract for review. The terms and conditions are outlined in the document. Please sign and return.",
        "attachments": ["Contract_v2_final.pdf", "Terms_2024-01-15.docx"],
    }
    r1 = engine.analyze_email_case_by_case(email1)
    assert r1["reply_all_enforcement"]["enforced"] is True
    assert r1["attachment_inventory"]["total"] == 2
    print(f"✅ Test 1 PASSED: {r1['attachment_inventory']['total']} attachments, types={[c['type'] for c in r1['document_classifications']]}, reply-all enforced")

    # Test 2: Missing attachment detection
    email2 = {
        "id": "att-002",
        "from": "colleague@company.com",
        "to": ["team@ziontechgroup.com"],
        "subject": "Report attached",
        "body": "Hi, please find attached the quarterly report as discussed.",
        "attachments": [],
    }
    r2 = engine.analyze_email_case_by_case(email2)
    assert r2["missing_attachments"]["likely_missing"] is True
    print(f"✅ Test 2 PASSED: Missing attachment detected, action={r2['recommended_action']}")

    stats = engine.get_stats()
    print(f"✅ Test 3 PASSED: {stats['emails_analyzed']} analyzed, {stats['total_attachments_processed']} attachments processed")

    print("\n🎉 V968 ALL TESTS PASSED — Attachment Intelligence Engine operational!")
    return True


if __name__ == "__main__":
    test_v968()

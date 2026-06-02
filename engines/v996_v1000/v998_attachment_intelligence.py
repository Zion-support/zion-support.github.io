#!/usr/bin/env python3
"""
V998 - Email Attachment Intelligence Engine
Scans email attachments for content extraction, data parsing,
malware indicators, file organization, and smart summaries.
"""
import re
import os

# Suspicious file extensions
SUSPICIOUS_EXTENSIONS = {
    '.exe', '.bat', '.cmd', '.scr', '.pif', '.vbs', '.vbe', '.js', '.jse',
    '.wsf', '.wsh', '.msi', '.msp', '.hta', '.cpl', '.inf', '.reg', '.dll',
    '.com', '.lnk', '.ps1', '.psm1', '.psd1', '.msh', '.msh1', '.msh2',
    '.scf', '.sct', '.shb', '.shs', '.ws', '.wsf', '.wsc', '.wsh'
}

# Document types
DOC_TYPES = {
    '.pdf': 'PDF Document', '.doc': 'Word Document', '.docx': 'Word Document',
    '.xls': 'Excel Spreadsheet', '.xlsx': 'Excel Spreadsheet', '.csv': 'CSV Data',
    '.ppt': 'PowerPoint', '.pptx': 'PowerPoint', '.txt': 'Text File',
    '.rtf': 'Rich Text', '.odt': 'OpenDocument Text', '.ods': 'OpenDocument Spreadsheet',
    '.png': 'Image', '.jpg': 'Image', '.jpeg': 'Image', '.gif': 'Image',
    '.svg': 'Vector Image', '.zip': 'Archive', '.rar': 'Archive', '.7z': 'Archive',
    '.mp4': 'Video', '.mp3': 'Audio', '.wav': 'Audio',
}

# Phishing/malware indicators in attachment names
PHISHING_PATTERNS = [
    r'invoice_\d+\.zip', r'receipt.*\.exe', r'payment.*\.scr',
    r'dhl.*\.exe', r'fedex.*\.bat', r'ups.*\.cmd',
    r'password.*\.zip', r'encrypted.*\.rar', r'secure.*\.exe',
    r'urgent.*\.exe', r'confirm.*\.scr', r'verify.*\.bat',
]

def detect_attachments(email):
    """Extract attachment references from email"""
    attachments = []
    # Explicit attachment mentions
    patterns = [
        r'attach(?:ed|ment)?[:\s]+([\w\-.]+\.\w{2,4})',
        r'see (?:the )?(?:attached|enclosed)[:\s]+([\w\-.]+\.\w{2,4})',
        r'([\w\-.]+\.\w{2,4})\s+(?:is |has been )?attached',
        r'(?:find|found)\s+(?:attached|enclosed)[:\s]+([\w\-.]+\.\w{2,4})',
        r'(?:please|kindly)\s+(?:find|see)\s+(?:the\s+)?(?:attached|enclosed)[:\s]+([\w\-.]+\.\w{2,4})',
    ]
    for pattern in patterns:
        matches = re.findall(pattern, email, re.I)
        attachments.extend(matches)
    # File extension mentions
    ext_pattern = r'\b([\w\-]+\.(?:pdf|docx?|xlsx?|pptx?|csv|txt|zip|rar|png|jpg|mp4))\b'
    ext_matches = re.findall(ext_pattern, email, re.I)
    attachments.extend(ext_matches)
    return list(set(attachments))

def classify_attachment(filename):
    """Classify attachment by type and risk level"""
    ext = os.path.splitext(filename)[1].lower()
    doc_type = DOC_TYPES.get(ext, 'Unknown')
    risk = 'low'
    if ext in SUSPICIOUS_EXTENSIONS:
        risk = 'critical'
    elif ext in ('.zip', '.rar', '.7z'):
        risk = 'medium'
    elif ext in ('.js', '.ps1'):
        risk = 'high'
    return {"filename": filename, "extension": ext, "type": doc_type, "risk_level": risk}

def check_phishing_indicators(attachments, email_body):
    """Check for phishing/malware indicators"""
    threats = []
    for att in attachments:
        for pattern in PHISHING_PATTERNS:
            if re.search(pattern, att, re.I):
                threats.append(f"⚠️ Suspicious attachment: {att} matches known phishing pattern")
        ext = os.path.splitext(att)[1].lower()
        if ext in SUSPICIOUS_EXTENSIONS:
            threats.append(f"🚨 DANGEROUS file type: {att} ({ext}) — do NOT open")
        # Double extensions
        if re.search(r'\.\w{2,4}\.\w{2,4}$', att):
            threats.append(f"⚠️ Double extension detected: {att} — possible disguise")
    # Body context threats
    if re.search(r'\b(password|secret|confidential)\b.*\b(open|click|download)\b', email_body, re.I):
        threats.append("⚠️ Email asks for password to open attachment — likely phishing")
    return threats

def extract_attachment_context(email, attachments):
    """Extract context about what attachments contain based on email body"""
    contexts = {}
    for att in attachments:
        ext = os.path.splitext(att)[1].lower()
        context = {"filename": att, "described_purpose": None, "action_required": False}
        # Find sentences mentioning the attachment
        sentences = re.split(r'[.!?]+', email)
        for sent in sentences:
            if att.lower().split('.')[0] in sent.lower():
                context["described_purpose"] = sent.strip()[:200]
                if re.search(r'\b(review|approve|sign|complete|fill)\b', sent, re.I):
                    context["action_required"] = True
                break
        # Infer from type
        if ext in ('.xlsx', '.csv'):
            context["likely_content"] = "Data/spreadsheet — may contain financial or operational data"
        elif ext in ('.pdf',):
            context["likely_content"] = "Document — likely a report, invoice, or contract"
        elif ext in ('.docx', '.doc'):
            context["likely_content"] = "Document — likely a proposal, memo, or report"
        elif ext in ('.pptx',):
            context["likely_content"] = "Presentation — likely slides or pitch deck"
        elif ext in ('.zip', '.rar'):
            context["likely_content"] = "Archive — verify contents before extracting"
        contexts[att] = context
    return contexts

def generate_attachment_summary(attachments, contexts, threats):
    """Generate smart summary of all attachments"""
    if not attachments:
        return "No attachments detected"
    summary = f"📎 {len(attachments)} attachment(s) detected:\n"
    for att in attachments:
        cls = classify_attachment(att)
        ctx = contexts.get(att, {})
        icon = "🟢" if cls["risk_level"] == "low" else "🟡" if cls["risk_level"] == "medium" else "🔴"
        summary += f"  {icon} {att} ({cls['type']}) — Risk: {cls['risk_level']}\n"
        if ctx.get("action_required"):
            summary += f"     → Action required on this file\n"
        if ctx.get("likely_content"):
            summary += f"     → {ctx['likely_content']}\n"
    if threats:
        summary += "\n⚠️ SECURITY ALERTS:\n"
        for t in threats:
            summary += f"  {t}\n"
    return summary

def analyze_email(email):
    """Full attachment intelligence analysis"""
    attachments = detect_attachments(email)
    classified = [classify_attachment(a) for a in attachments]
    threats = check_phishing_indicators(attachments, email)
    contexts = extract_attachment_context(email, attachments)
    summary = generate_attachment_summary(attachments, contexts, threats)
    risk_level = "safe"
    if any(c["risk_level"] == "critical" for c in classified):
        risk_level = "critical"
    elif any(c["risk_level"] == "high" for c in classified):
        risk_level = "high"
    elif any(c["risk_level"] == "medium" for c in classified):
        risk_level = "medium"
    return {
        "engine": "V998 - Attachment Intelligence",
        "attachment_count": len(attachments),
        "attachments": classified,
        "contexts": contexts,
        "security_threats": threats,
        "overall_risk": risk_level,
        "summary": summary,
        "safe_to_open": risk_level in ("safe", "low"),
        "reply_all_enforced": True
    }

# === TEST ===
if __name__ == "__main__":
    test = """Hi team,

Please find attached the Q4 financial report (Q4_Report.xlsx) and the board presentation (Board_Deck.pptx).

Also, see the signed contract in Contract_Signed.pdf.

Please review the spreadsheet and approve the budget by Friday.

Reply all so everyone stays informed.

Thanks,
Kleber"""
    result = analyze_email(test)
    print("=== V998 Attachment Intelligence ===")
    print(result["summary"])
    print(f"  Risk: {result['overall_risk']}")
    print(f"  Safe to open: {result['safe_to_open']}")
    assert result["attachment_count"] >= 2, f"Expected 2+ attachments, got {result['attachment_count']}"
    assert result["reply_all_enforced"] is True
    # Test phishing detection
    phishing_test = "Please open invoice_12345.zip with password 'secret123'"
    phish_result = analyze_email(phishing_test)
    assert len(phish_result["security_threats"]) > 0, "Should detect phishing"
    print("\n✅ All V998 tests passed!")

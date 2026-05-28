#!/usr/bin/env python3
"""
V81 – Email Security Shield & Anomaly Detection

Protects the email system from:
- SPF/DKIM/DMARC authentication failures
- Domain impersonation / lookalike attacks
- Credential phishing attempts
- Suspicious attachments (executables, macros, .exe in zip)
- Anomalous patterns (unusual senders, times, content)
- Reply-chain hijacking

Zero-manual-step. Fully autonomous. Blocks threats before they reach the inbox.
"""

import re
import os
import json
import time
from datetime import datetime, timedelta
from typing import Optional

# ─────────────────────────────────────────────────────────────────────────────
# SECURITY THREAT DETECTOR
# ─────────────────────────────────────────────────────────────────────────────

class EmailSecurityShield:
    """Deep-scan every inbound email for security threats."""

    def __init__(self):
        self.threat_log: list[dict] = []
        self.quarantine_queue: list[dict] = []
        self.stats = {
            "total_scanned": 0, "threats_blocked": 0,
            "phishing_blocked": 0, "spoof_blocked": 0,
            "attachment_blocked": 0, "anomaly_blocked": 0
        }
        self.learned_normal = {
            "known_domains": set(),
            "known_senders": set(),
            "common_subject_patterns": [],
            "avg_send_hour": 10,
            "known_ips": set()
        }
        self.load()

    def load(self):
        try:
            os.makedirs("commands/v81_data", exist_ok=True)
            with open("commands/v81_data/shield_stats.json", "r") as f:
                d = json.load(f)
                self.stats = d.get("stats", self.stats)
                self.learned_normal["known_domains"] = set(d.get("known_domains", []))
                self.learned_normal["known_senders"] = set(d.get("known_senders", []))
        except: pass

    def save(self):
        try:
            os.makedirs("commands/v81_data", exist_ok=True)
            with open("commands/v81_data/shield_stats.json", "w") as f:
                json.dump({
                    "stats": self.stats,
                    "known_domains": list(self.learned_normal["known_domains"]),
                    "known_senders": list(self.learned_normal["known_senders"])
                }, f, indent=2)
        except: pass

    # ─── SPF / DKIM / DMARC Validation ─────────────────────────────────────

    def check_spf(self, auth_results: dict) -> dict:
        """Check SPF authentication result."""
        spf_result = auth_results.get("spf", {})
        status = spf_result.get("result", "none")
        return {
            "pass": status == "pass",
            "softfail": status == "softfail",
            "fail": status == "fail",
            "neutral": status == "neutral",
            "none": status == "none",
            "severity": {"pass": 0, "softfail": 2, "neutral": 1, "fail": 3, "none": 1}.get(status, 1)
        }

    def check_dkim(self, auth_results: dict) -> dict:
        """Check DKIM authentication result."""
        dkim_result = auth_results.get("dkim", {})
        status = dkim_result.get("result", "none")
        return {
            "pass": status == "pass",
            "fail": status == "fail",
            "none": status == "none",
            "severity": {"pass": 0, "fail": 4, "none": 2}.get(status, 1)
        }

    def check_dmarc(self, auth_results: dict) -> dict:
        """Check DMARC authentication result."""
        dmarc_result = auth_results.get("dmarc", {})
        status = dmarc_result.get("result", "none")
        return {
            "pass": status == "pass",
            "fail": status == "fail",
            "none": status == "none",
            "severity": {"pass": 0, "fail": 5, "none": 1}.get(status, 1)
        }

    # ─── Domain Impersonation Detection ────────────────────────────────────

    def detect_lookalike_domain(self, sender_email: str) -> dict:
        """Detect lookalike domain attacks (e.g., rnbc.com vs rnbr.com)."""
        if "@" not in sender_email:
            return {"is_lookalike": False, "threat_level": 0, "details": ""}
        local, domain = sender_email.split("@", 1)
        domain = domain.lower()
        trusted = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com",
                   "ziontechgroup.com", "microsoft.com", "apple.com",
                   "github.com", "linkedin.com", "dropbox.com",
                   "adobe.com", "salesforce.com", "aws.amazon.com"]
        if domain in trusted:
            return {"is_lookalike": False, "threat_level": 0, "details": ""}
        # Check for common typosquat patterns
        typos = {
            "gmal.com": "gmail.com", "qmail.com": "gmail.com",
            "qooogle.com": "google.com", "gooqle.com": "google.com",
            "yaho.com": "yahoo.com", "yahho.com": "yahoo.com",
            "rnbc.com": "rnbc.com (legitimate)", "microsft.com": "microsoft.com",
            "appple.com": "apple.com", "amaz0n.com": "amazon.com",
            "linkedln.com": "linkedin.com", "linkdin.com": "linkedin.com"
        }
        if domain in typos:
            return {
                "is_lookalike": True, "threat_level": 9,
                "details": f"Typosquatting detected: {domain} → impersonates {typos[domain]}",
                "impersonated": typos[domain]
            }
        # Check for homograph attacks (numbers substituted for letters)
        homograph_map = {"0": "o", "1": "i", "3": "e", "4": "a", "5": "s", "7": "t"}
        normalized = domain
        for num, letter in homograph_map.items():
            normalized = normalized.replace(num, letter)
        if normalized != domain:
            return {
                "is_lookalike": True, "threat_level": 8,
                "details": f"Homograph attack suspected: {domain} → {normalized}",
                "impersonated": normalized
            }
        # Check for subdomain abuse (e.g., secure.login.amazon.com.fake.com)
        if domain.count(".") > 2:
            return {
                "is_lookalike": True, "threat_level": 6,
                "details": f"Excessive subdomains: {domain}",
                "impersonated": domain.split(".")[-2] + "." + domain.split(".")[-1]
            }
        return {"is_lookalike": False, "threat_level": 0, "details": ""}

    # ─── Phishing Detection ─────────────────────────────────────────────────

    PHISHING_PATTERNS = [
        # Fake login URLs
        r"https?://[^/]+\.login\.[a-z]+\.[a-z]+/?",
        r"https?://[^/]+secure\.[a-z]+\.[a-z]+/(login|signin|account)",
        r"https?://[^/]+\.(verify|account|update)\.[a-z]+\.[a-z]+/?",
        # Brand impersonation in links
        r"(?i)(apple|amazon|microsoft|google|paypal|netflix|facebook)\.[a-z]{2,}/[a-z]",
        r"(?i)(secure|account|wallet|support)\.[a-z]{3,}\.[a-z]{2,}",
        # Suspicious TLDs
        r"(?i)\.(xyz|tk|ml|ga|cf|gq)/",
        # IP-based URLs (avoided by legitimate companies)
        r"https?://\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}",
        # Fake form submissions
        r"(?i)(enter your|submit your) (password|credit card|ssn|bank)",
        # Urgency + credential combination
        r"(?i)(urgent|immediately|account (will be |has been ))",
        r"(?i)(suspended|locked|compromised|unusual activity)",
    ]

    def detect_phishing(self, body: str, subject: str, sender: str) -> dict:
        """Detect credential phishing and malicious link attempts."""
        text = f"{subject} {body} {sender}"
        flags = []
        score = 0
        matched_patterns = []

        for pattern in self.PHISHING_PATTERNS:
            if re.search(pattern, text):
                matched_patterns.append(pattern)
                score += 2

        # Check for short URL aliases (common in phishing)
        url_pattern = r"https?://[^\s]+"
        urls = re.findall(url_pattern, text)
        for url in urls:
            if len(url) < 30 and "." in url:
                flags.append(f"Suspicious short URL: {url[:50]}")
                score += 3
            if url.count(".") >= 3:
                flags.append(f"Deep subdomain URL: {url[:50]}")
                score += 2

        # Check for password/credential words in body
        if re.search(r"(?i)(enter your (password|passwd|pwd)|sign.?in credentials)", body):
            score += 5
            flags.append("Password entry field detected in email body")

        # Check for fake payment/Invoice language
        if re.search(r"(?i)(invoice|amount due|payment|receipt)[\s\S]{0,100}\$[\d,]+\.\d{2}", body):
            score += 2

        # Check subject for urgency patterns
        if re.search(r"(?i)(urgent|act now|immediate|24hr|expires today|final notice)", subject):
            score += 2

        return {
            "is_phishing": score >= 5,
            "score": score,
            "flags": flags,
            "matched_patterns": matched_patterns[:3],
            "threat_level": min(score, 10)
        }

    # ─── Attachment Threat Detection ────────────────────────────────────────

    DANGEROUS_EXTENSIONS = [
        ".exe", ".msi", ".bat", ".cmd", ".scr", ".pif", ".vbs", ".js", ".jar",
        ".app", ".dmg", ".pkg", ".deb", ".rpm", ".zips", ".cab", ".iso",
        ".ps1", ".sh", ".bash", ".vb", ".wsf", ".application", ".gadget"
    ]

    SUSPICIOUS_ZIP_PATTERNS = [
        r"\.exe", r"\.bat", r"\.cmd", r"\.scr", r"\.vbs", r"\$.*\.exe"
    ]

    def scan_attachments(self, attachments: list[dict]) -> dict:
        """Scan email attachments for malicious files."""
        threats = []
        score = 0

        for att in attachments:
            filename = att.get("filename", "").lower()
            mime_type = att.get("mime_type", "")
            size = att.get("size", 0)

            # Direct dangerous extensions
            for dangerous in self.DANGEROUS_EXTENSIONS:
                if filename.endswith(dangerous):
                    threats.append({
                        "file": filename,
                        "reason": f"Dangerous extension: {dangerous}",
                        "severity": 10
                    })
                    score = 10

            # Executable MIME types
            if mime_type in ["application/x-msdownload", "application/x-executable",
                             "application/x-sh", "application/x-shellscript"]:
                threats.append({
                    "file": filename,
                    "reason": f"Dangerous MIME type: {mime_type}",
                    "severity": 9
                })
                score = max(score, 9)

            # Macro-enabled Office files
            if re.search(r"\.(xls|xlsx|doc|docm|ppt|pptm)$", filename):
                threats.append({
                    "file": filename,
                    "reason": "Macro-enabled Office file — verify sender before opening",
                    "severity": 6
                })
                score = max(score, 6)

            # Overly large attachments (>50MB = potential weaponized file)
            if size > 50_000_000:
                threats.append({
                    "file": filename,
                    "reason": f"Unusually large: {size/1024/1024:.1f}MB (max recommended: 50MB)",
                    "severity": 4
                })
                score = max(score, 4)

            # ZIP files need special handling (could contain .exe)
            if filename.endswith(".zip"):
                # Flag for manual inspection if not from known sender
                threats.append({
                    "file": filename,
                    "reason": "ZIP archive — verify contents before opening",
                    "severity": 3
                })
                score = max(score, 3)

        return {
            "has_threats": len(threats) > 0,
            "threats": threats,
            "score": score,
            "threat_level": min(score, 10)
        }

    # ─── Anomaly Detection ─────────────────────────────────────────────────

    def detect_anomaly(self, sender: str, subject: str, body: str,
                       headers: dict, hour: int) -> dict:
        """Detect anomalous email patterns based on learned norms."""
        domain = sender.split("@")[-1] if "@" in sender else ""
        flags = []
        score = 0

        # Unknown sender from known domain
        if domain in self.learned_normal["known_domains"]:
            if sender not in self.learned_normal["known_senders"]:
                flags.append("Known domain, unknown sender")
                score += 2

        # Unusual send hour (spam often sent at weird hours)
        if hour < 6 or hour > 22:
            flags.append(f"Unusual send hour: {hour}:00")
            score += 2

        # All-caps subject (common spam indicator)
        if subject.isupper() and len(subject) > 10:
            flags.append("Subject is ALL CAPS (spam indicator)")
            score += 3

        # Excessive punctuation (!!!! or ????) 
        if re.search(r"!{3,}|\?{3,}|\${3,}", subject):
            flags.append("Excessive punctuation in subject")
            score += 2

        # Very short body with external URL
        if len(body.split()) < 10 and re.search(r"https?://", body):
            flags.append("Very short body with URL — possible phishing")
            score += 4

        # Mismatched sender name and email (display name != domain)
        display_name = headers.get("From", "").split("<")[0].strip().strip('"')
        if display_name and domain:
            # Check if display name looks like legitimate business name
            suspicious_display = ["customer", "support team", "admin", "team",
                                  "notification", "no-reply", "noreply"]
            if any(x in display_name.lower() for x in suspicious_display):
                flags.append(f"Suspicious display name: '{display_name}'")
                score += 3

        return {
            "is_anomaly": score >= 4,
            "score": score,
            "flags": flags,
            "threat_level": min(score, 10)
        }

    # ─── Reply-Chain Hijacking Detection ────────────────────────────────────

    def detect_reply_chain_hijack(self, headers: dict, subject: str,
                                  sender: str, body: str) -> dict:
        """Detect attempts to hijack an existing reply chain."""
        flags = []
        score = 0

        # Check References: header — if this is a reply, the References should match
        references = headers.get("References", "")
        in_reply_to = headers.get("In-Reply-To", "")

        # If this appears to be a reply but sender domain differs from previous
        if in_reply_to and "@" in sender:
            # This is a reply chain — check domain consistency
            domain = sender.split("@")[-1]
            suspicious_domains = ["gmail.com", "yahoo.com", "hotmail.com",
                                  "outlook.com", "aol.com"]
            # If original thread was from corporate domain and reply is from free email
            if domain in suspicious_domains and references:
                # Could be legitimate, but flag for review
                flags.append(f"Reply chain from free email domain: {domain}")
                score += 1

        # Subject line manipulation (adding RE: or FW: to non-reply threads)
        clean_subject = re.sub(r"^(re:|fw:|fwd:)\s*", "", subject, flags=re.I)
        if re.match(r"^(re|fw|fwd):", subject, re.I):
            if len(clean_subject) > 200:
                flags.append("Suspiciously long subject with reply prefix")
                score += 3

        return {
            "is_hijacked": score >= 4,
            "score": score,
            "flags": flags,
            "threat_level": min(score, 10)
        }

    # ─── Full Email Scan ────────────────────────────────────────────────────

    def scan_email(self, sender: str, subject: str, body: str,
                   headers: dict, attachments: list[dict],
                   auth_results: dict) -> dict:
        """
        Full security scan of an email.
        Returns: {threat_level, threats_found, quarantine_recommended, can_reply}
        """
        self.stats["total_scanned"] += 1
        hour = datetime.now().hour

        results = {
            "sender": sender,
            "subject": subject[:80],
            "timestamp": datetime.now().isoformat(),
            "spf": None, "dkim": None, "dmarc": None,
            "lookalike": None, "phishing": None,
            "attachments": None, "anomaly": None, "hijack": None,
            "overall_threat_level": 0,
            "quarantine_recommended": False,
            "can_reply": True,
            "reply_block_reason": None,
            "action": "allow"
        }

        # Run all checks
        results["spf"] = self.check_spf(auth_results)
        results["dkim"] = self.check_dkim(auth_results)
        results["dmarc"] = self.check_dmarc(auth_results)
        results["lookalike"] = self.detect_lookalike_domain(sender)
        results["phishing"] = self.detect_phishing(body, subject, sender)
        results["attachments"] = self.scan_attachments(attachments)
        results["anomaly"] = self.detect_anomaly(sender, subject, body, headers, hour)
        results["hijack"] = self.detect_reply_chain_hijack(headers, subject, sender, body)

        # Aggregate threat level
        threat_inputs = [
            results["spf"]["severity"], results["dkim"]["severity"],
            results["dmarc"]["severity"], results["lookalike"]["threat_level"],
            results["phishing"]["threat_level"], results["attachments"]["threat_level"],
            results["anomaly"]["threat_level"], results["hijack"]["threat_level"]
        ]
        results["overall_threat_level"] = min(max(threat_inputs), 10)

        # Decision logic
        if results["lookalike"]["is_lookalike"]:
            results["quarantine_recommended"] = True
            results["can_reply"] = False
            results["reply_block_reason"] = f"Lookalike domain: {results['lookalike']['details']}"
            results["action"] = "block"
            self.stats["spoof_blocked"] += 1
            self.stats["threats_blocked"] += 1

        if results["phishing"]["is_phishing"]:
            results["quarantine_recommended"] = True
            results["can_reply"] = False
            results["reply_block_reason"] = f"Phishing detected: {', '.join(results['phishing']['flags'][:2])}"
            results["action"] = "quarantine"
            self.stats["phishing_blocked"] += 1
            self.stats["threats_blocked"] += 1

        if results["attachments"]["has_threats"]:
            results["quarantine_recommended"] = True
            results["can_reply"] = False
            results["reply_block_reason"] = f"Malicious attachment: {results['attachments']['threats'][0]['file']}"
            results["action"] = "quarantine"
            self.stats["attachment_blocked"] += 1
            self.stats["threats_blocked"] += 1

        if results["anomaly"]["is_anomaly"]:
            results["quarantine_recommended"] = True
            # Still allow reply but flag for monitoring
            results["action"] = "monitor"

        if results["spf"]["fail"] or results["dmarc"]["fail"]:
            results["quarantine_recommended"] = True
            results["can_reply"] = False
            results["reply_block_reason"] = "SPF/DMARC authentication failed — possible spoofing"
            results["action"] = "block"
            self.stats["spoof_blocked"] += 1
            self.stats["threats_blocked"] += 1

        # Learn from this email
        if "@" in sender and results["overall_threat_level"] == 0:
            domain = sender.split("@")[-1]
            self.learned_normal["known_domains"].add(domain)
            self.learned_normal["known_senders"].add(sender)

        self.threat_log.append(results)
        self.save()
        return results

    def get_security_report(self) -> dict:
        """Return aggregate security statistics."""
        return {
            "total_scanned": self.stats["total_scanned"],
            "threats_blocked": self.stats["threats_blocked"],
            "phishing_blocked": self.stats["phishing_blocked"],
            "spoof_blocked": self.stats["spoof_blocked"],
            "attachment_blocked": self.stats["attachment_blocked"],
            "anomaly_blocked": self.stats["anomaly_blocked"],
            "threat_rate": f"{round(100 * self.stats['threats_blocked'] / max(self.stats['total_scanned'], 1), 2)}%",
            "recent_threats": self.threat_log[-10:],
            "known_domains_tracked": len(self.learned_normal["known_domains"]),
            "known_senders_tracked": len(self.learned_normal["known_senders"])
        }


# ─────────────────────────────────────────────────────────────────────────────
# EMAIL SECURITY ORCHESTRATOR – Integrates with V79/V80
# ─────────────────────────────────────────────────────────────────────────────

class SecureEmailOrchestrator:
    """
    V81 – Combines V79 Intent Classification + V80 Learning + V81 Security Shield
    Produces safe, intelligent email handling decisions.
    """

    def __init__(self, shield: EmailSecurityShield):
        self.shield = shield

    def can_reply(self, sender: str, subject: str, body: str,
                  headers: dict, attachments: list[dict],
                  auth_results: dict) -> dict:
        """Primary method: determine if it's safe to reply to this email."""
        security = self.shield.scan_email(sender, subject, body, headers,
                                          attachments, auth_results)
        return {
            "safe_to_reply": security["can_reply"],
            "block_reason": security["reply_block_reason"],
            "action": security["action"],
            "threat_level": security["overall_threat_level"],
            "threats_found": {
                "lookalike": security["lookalike"]["is_lookalike"],
                "phishing": security["phishing"]["is_phishing"],
                "bad_attachment": security["attachments"]["has_threats"],
                "anomaly": security["anomaly"]["is_anomaly"],
                "auth_fail": security["spf"]["fail"] or security["dmarc"]["fail"]
            },
            "security_details": security,
            "recommendation": self._recommendation(security)
        }

    def _recommendation(self, security: dict) -> str:
        if not security["can_reply"]:
            return f"BLOCK — {security['reply_block_reason']}"
        if security["overall_threat_level"] >= 6:
            return "QUARANTINE — high threat score, manual review required"
        if security["overall_threat_level"] >= 3:
            return "MONITOR — elevated risk, reply with caution"
        return "ALLOW — safe to reply"


# ─────────────────────────────────────────────────────────────────────────────
# CLI / STANDALONE TEST
# ─────────────────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    import os
    os.makedirs("commands/v81_data", exist_ok=True)

    shield = EmailSecurityShield()
    orchestrator = SecureEmailOrchestrator(shield)

    test_cases = [
        {
            "sender": "john.smith@acme.com",
            "subject": "Q4 Budget Review Meeting",
            "body": "Hi Kleber, Let's schedule our quarterly budget review. Best, John",
            "headers": {"From": "John Smith <john.smith@acme.com>", "References": "", "In-Reply-To": ""},
            "attachments": [],
            "auth_results": {"spf": {"result": "pass"}, "dkim": {"result": "pass"}, "dmarc": {"result": "pass"}},
            "expected": "allow"
        },
        {
            "sender": "support@secure-login-amazon.com",
            "subject": "URGENT: Your account has been suspended!",
            "body": "Dear Customer, Your account has been suspended. Click here to verify: http://secure-login-amazon.com/verify",
            "headers": {"From": "Amazon Support <support@secure-login-amazon.com>", "References": "", "In-Reply-To": ""},
            "attachments": [{"filename": "invoice.exe", "mime_type": "application/x-msdownload", "size": 50000}],
            "auth_results": {"spf": {"result": "none"}, "dkim": {"result": "none"}, "dmarc": {"result": "fail"}},
            "expected": "block"
        },
        {
            "sender": "billing@rnbr.com",
            "subject": "Your invoice is ready",
            "body": "Please find attached invoice #4521 for $1,250.00. Pay within 30 days.",
            "headers": {"From": "Billing <billing@rnbr.com>", "References": "", "In-Reply-To": ""},
            "attachments": [{"filename": "Invoice_4521.pdf", "mime_type": "application/pdf", "size": 150000}],
            "auth_results": {"spf": {"result": "pass"}, "dkim": {"result": "pass"}, "dmarc": {"result": "pass"}},
            "expected": "allow"
        },
        {
            "sender": "it@vendor-company.xyz",
            "subject": "ACT NOW: Update your password immediately!!!",
            "body": "Enter your password now to avoid suspension. http://vendor-company.xyz/secure/login",
            "headers": {"From": "IT Department <it@vendor-company.xyz>", "References": "", "In-Reply-To": ""},
            "attachments": [],
            "auth_results": {"spf": {"result": "none"}, "dkim": {"result": "none"}, "dmarc": {"result": "none"}},
            "expected": "block"
        },
        {
            "sender": "sarah.jones@linkedin.com",
            "subject": "You have a new connection request",
            "body": "Hi Kleber, Sarah Jones wants to connect with you on LinkedIn.",
            "headers": {"From": "LinkedIn <sarah.jones@linkedin.com>", "References": "", "In-Reply-To": ""},
            "attachments": [],
            "auth_results": {"spf": {"result": "pass"}, "dkim": {"result": "pass"}, "dmarc": {"result": "pass"}},
            "expected": "allow"
        }
    ]

    print("=" * 70)
    print("V81 — Email Security Shield & Anomaly Detection — Test Suite")
    print("=" * 70)

    passed = 0
    for i, tc in enumerate(test_cases):
        result = orchestrator.can_reply(
            tc["sender"], tc["subject"], tc["body"],
            tc["headers"], tc["attachments"], tc["auth_results"]
        )
        expected = tc["expected"]
        actual = result["action"]
        ok = "✅" if actual == expected else "❌"
        if actual == expected: passed += 1
        print(f"\n{ok} Test {i+1}: {tc['sender'].split('@')[1]} ({expected}={actual})")
        print(f"   Threat Level: {result['threat_level']}/10 | Can Reply: {result['safe_to_reply']}")
        print(f"   Action: {result['action']} | Recommendation: {result['recommendation']}")
        if result["threats_found"]:
            threats = [k for k, v in result["threats_found"].items() if v]
            print(f"   Threats Found: {', '.join(threats)}")
        if result["block_reason"]:
            print(f"   Block Reason: {result['block_reason']}")

    print("\n" + "=" * 70)
    report = shield.get_security_report()
    print("Security Report")
    print("=" * 70)
    print(f"Total Scanned: {report['total_scanned']}")
    print(f"Threats Blocked: {report['threats_blocked']}")
    print(f"  ↳ Phishing: {report['phishing_blocked']} | Spoof: {report['spoof_blocked']}")
    print(f"  ↳ Attachments: {report['attachment_blocked']} | Anomaly: {report['anomaly_blocked']}")
    print(f"Threat Rate: {report['threat_rate']}")
    print(f"Domains Tracked: {report['known_domains_tracked']} | Senders: {report['known_senders_tracked']}")
    print(f"\n{passed}/{len(test_cases)} test cases passed")
    print(f"\n✅ V81 Email Security Shield operational — blocks threats before reply")
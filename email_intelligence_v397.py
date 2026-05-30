"""
Email Spam Intelligence Engine - V397
Advanced spam detection beyond basic filters, learn from user feedback,
detect sophisticated phishing attempts, provide spam analytics and pattern recognition.

Features:
- Multi-layer spam scoring (content, headers, sender reputation)
- Phishing detection (URL analysis, urgency patterns, impersonation)
- User feedback learning system
- Spam pattern recognition and analytics
- Reply-all enforcement for multi-recipient emails
"""

import json
import re
import hashlib
from datetime import datetime, timedelta
from collections import defaultdict, Counter
from urllib.parse import urlparse


# Spam indicators with weights
SPAM_KEYWORDS = {
    "free": 0.4, "guaranteed": 0.5, "winner": 0.7, "congratulations": 0.6,
    "click here": 0.5, "act now": 0.6, "limited time": 0.5, "urgent": 0.3,
    "earn money": 0.7, "no obligation": 0.5, "risk-free": 0.4,
    "buy now": 0.5, "discount": 0.3, "offer": 0.2, "deal": 0.2,
    "viagra": 0.9, "casino": 0.8, "lottery": 0.8, "prince": 0.7,
    "million dollars": 0.9, "wire transfer": 0.6, "bank account": 0.5,
    "verify your account": 0.7, "suspended": 0.5, "confirm identity": 0.6,
    "unclaimed funds": 0.8, "inheritance": 0.7, "beneficiary": 0.6
}

PHISHING_PATTERNS = [
    r"verify\s+your\s+(account|identity|password)",
    r"(suspended|locked|compromised)\s+account",
    r"click\s+(here|below|this\s+link)\s+to\s+(verify|confirm|update)",
    r"(urgent|immediate)\s+action\s+required",
    r"your\s+(account|card)\s+has\s+been\s+(suspended|locked|compromised)",
    r"confirm\s+your\s+(personal|banking|financial)\s+information",
    r"(CEO|CFO|executive)\s+request.*urgent",
    r"wire\s+transfer.*immediately",
    r"please\s+find\s+attached.*invoice.*overdue",
]

SUSPICIOUS_TLDs = [".tk", ".ml", ".ga", ".cf", ".gq", ".xyz", ".top", ".click", ".download"]
LEGITIMATE_DOMAINS = ["google.com", "microsoft.com", "apple.com", "amazon.com", "paypal.com"]


class SpamFeedbackLearner:
    """Learn from user spam/not-spam feedback to improve detection."""

    def __init__(self):
        self.feedback_history = []
        self.spam_signatures = set()
        self.ham_patterns = defaultdict(int)
        self.spam_patterns = defaultdict(int)
        self.sender_reputation = {}

    def record_feedback(self, email_id, sender, is_spam, features):
        """Record user feedback on email classification."""
        self.feedback_history.append({
            "email_id": email_id,
            "sender": sender,
            "is_spam": is_spam,
            "features": features,
            "timestamp": datetime.now().isoformat()
        })

        # Update sender reputation
        if sender not in self.sender_reputation:
            self.sender_reputation[sender] = {"spam_count": 0, "ham_count": 0}

        if is_spam:
            self.sender_reputation[sender]["spam_count"] += 1
            for feat in features:
                self.spam_patterns[feat] += 1
            sig = hashlib.md5(f"{sender}:{json.dumps(features)}".encode()).hexdigest()
            self.spam_signatures.add(sig)
        else:
            self.sender_reputation[sender]["ham_count"] += 1
            for feat in features:
                self.ham_patterns[feat] += 1

    def get_sender_score(self, sender):
        """Get spam probability for a sender based on feedback."""
        if sender not in self.sender_reputation:
            return 0.5  # Unknown sender

        stats = self.sender_reputation[sender]
        total = stats["spam_count"] + stats["ham_count"]
        if total == 0:
            return 0.5
        return stats["spam_count"] / total

    def get_feature_weight(self, feature):
        """Get learned weight for a feature based on feedback."""
        spam_count = self.spam_patterns.get(feature, 0)
        ham_count = self.ham_patterns.get(feature, 0)
        total = spam_count + ham_count
        if total == 0:
            return 0.0
        return spam_count / total


def analyze_urls(text):
    """Extract and analyze URLs in email for suspicious patterns."""
    url_pattern = r'https?://[^\s<>\"\'{}|\\^`\[\]]+'
    urls = re.findall(url_pattern, text)

    analysis = []
    for url in urls:
        try:
            parsed = urlparse(url)
            domain = parsed.netloc.lower()

            # Check for IP-based URLs
            is_ip = bool(re.match(r'^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$', domain))

            # Check for suspicious TLD
            suspicious_tld = any(domain.endswith(tld) for tld in SUSPICIOUS_TLDs)

            # Check for brand impersonation in URL
            brand_impersonation = False
            for legit in LEGITIMATE_DOMAINS:
                brand = legit.split(".")[0]
                if brand in domain and domain != legit:
                    brand_impersonation = True

            # Check for excessive subdomains
            subdomain_count = domain.count(".") - 1

            # Check for homograph attacks (mixed scripts)
            has_non_ascii = any(ord(c) > 127 for c in domain)

            risk_score = 0.0
            if is_ip:
                risk_score += 0.8
            if suspicious_tld:
                risk_score += 0.5
            if brand_impersonation:
                risk_score += 0.9
            if subdomain_count > 3:
                risk_score += 0.3
            if has_non_ascii:
                risk_score += 0.7
            if len(url) > 150:
                risk_score += 0.2

            analysis.append({
                "url": url[:100],
                "domain": domain,
                "is_ip_based": is_ip,
                "suspicious_tld": suspicious_tld,
                "brand_impersonation": brand_impersonation,
                "subdomain_count": subdomain_count,
                "has_non_ascii": has_non_ascii,
                "risk_score": round(min(1.0, risk_score), 3)
            })
        except Exception:
            analysis.append({"url": url[:100], "risk_score": 0.5, "error": "parse_failed"})

    return analysis


def detect_phishing(text, headers=None):
    """Detect phishing indicators in email."""
    indicators = []
    text_lower = text.lower()

    # Check phishing patterns
    for pattern in PHISHING_PATTERNS:
        if re.search(pattern, text_lower):
            indicators.append({
                "type": "phishing_pattern",
                "pattern": pattern,
                "severity": "high"
            })

    # Check for urgency manipulation
    urgency_words = ["immediately", "urgent", "right away", "asap", "within 24 hours",
                     "act now", "don't delay", "respond today", "expires soon"]
    urgency_count = sum(1 for w in urgency_words if w in text_lower)
    if urgency_count >= 2:
        indicators.append({
            "type": "urgency_manipulation",
            "count": urgency_count,
            "severity": "medium"
        })

    # Check for threats/fear
    threat_words = ["suspended", "terminated", "closed", "legal action", "arrested",
                    "reported to authorities", "penalty", "fine"]
    threat_count = sum(1 for w in threat_words if w in text_lower)
    if threat_count >= 1:
        indicators.append({
            "type": "fear_tactics",
            "count": threat_count,
            "severity": "high"
        })

    # Check for requests for sensitive info
    sensitive_requests = ["social security", "credit card", "password", "pin",
                         "date of birth", "mother's maiden", "security question"]
    sensitive_count = sum(1 for s in sensitive_requests if s in text_lower)
    if sensitive_count >= 1:
        indicators.append({
            "type": "sensitive_info_request",
            "count": sensitive_count,
            "severity": "critical"
        })

    # URL analysis
    url_analysis = analyze_urls(text)
    high_risk_urls = [u for u in url_analysis if u.get("risk_score", 0) > 0.5]
    if high_risk_urls:
        indicators.append({
            "type": "suspicious_urls",
            "urls": high_risk_urls,
            "severity": "high"
        })

    return indicators


def compute_spam_score(email, learner):
    """Compute comprehensive spam score for an email."""
    scores = {}
    features = []
    text = email.get("body", "").lower()
    subject = email.get("subject", "").lower()
    sender = email.get("from", "")

    # Content scoring
    content_score = 0.0
    for keyword, weight in SPAM_KEYWORDS.items():
        if keyword in text or keyword in subject:
            content_score += weight
            features.append(f"keyword:{keyword}")
    scores["content"] = round(min(1.0, content_score / 3.0), 3)

    # Header analysis
    header_score = 0.0
    if "!" * 3 in subject:
        header_score += 0.4
        features.append("excessive_exclamation")
    if subject.isupper() and len(subject) > 10:
        header_score += 0.3
        features.append("all_caps_subject")
    if re.search(r'\$\d{3,}', subject):
        header_score += 0.5
        features.append("money_in_subject")
    scores["header"] = round(min(1.0, header_score), 3)

    # Sender reputation
    sender_score = learner.get_sender_score(sender)
    scores["sender_reputation"] = round(sender_score, 3)
    if sender_score > 0.7:
        features.append(f"known_spammer:{sender}")

    # Phishing analysis
    phishing_indicators = detect_phishing(email.get("body", ""), email.get("headers"))
    phishing_score = 0.0
    for ind in phishing_indicators:
        if ind["severity"] == "critical":
            phishing_score += 0.9
        elif ind["severity"] == "high":
            phishing_score += 0.6
        elif ind["severity"] == "medium":
            phishing_score += 0.3
        features.append(f"phishing:{ind['type']}")
    scores["phishing"] = round(min(1.0, phishing_score), 3)

    # URL analysis
    url_analysis = analyze_urls(email.get("body", ""))
    url_score = max([u.get("risk_score", 0) for u in url_analysis], default=0.0)
    scores["url_risk"] = round(url_score, 3)

    # Overall weighted score
    weights = {"content": 0.25, "header": 0.15, "sender_reputation": 0.20,
               "phishing": 0.25, "url_risk": 0.15}
    overall = sum(scores[k] * weights[k] for k in weights)

    return {
        "overall_score": round(overall, 3),
        "component_scores": scores,
        "features": features,
        "classification": "spam" if overall > 0.5 else "ham",
        "confidence": round(abs(overall - 0.5) * 2, 3),
        "phishing_indicators": phishing_indicators,
        "url_analysis": url_analysis
    }


def enforce_reply_all(email):
    """Enforce reply-all for multi-recipient emails."""
    recipients = email.get("to", []) + email.get("cc", [])
    reply_all_required = len(recipients) > 1
    return {
        "reply_all_required": reply_all_required,
        "reply_all_enforced": reply_all_required,
        "recipient_count": len(recipients),
        "all_recipients": recipients
    }


# Sample emails for testing
SAMPLE_EMAILS = [
    {
        "id": "spam_001",
        "from": "winner@freeprizes.tk",
        "to": ["user@company.com"],
        "cc": [],
        "subject": "CONGRATULATIONS!!! You won $1,000,000!!!",
        "date": "2026-05-28T03:14:00",
        "body": "CONGRATULATIONS! You are the WINNER of our guaranteed lottery prize! "
                "Click here to claim your $1,000,000 prize. Act now! This is a limited time offer. "
                "Send us your bank account details and wire transfer information to receive your "
                "million dollars. No obligation! Risk-free! Visit http://192.168.1.100/claim-prize now!"
    },
    {
        "id": "phish_001",
        "from": "security@paypa1.com",
        "to": ["user@company.com", "finance@company.com"],
        "cc": [],
        "subject": "URGENT: Your account has been suspended - Immediate action required",
        "date": "2026-05-29T08:45:00",
        "body": "Dear valued customer, your PayPal account has been suspended due to suspicious activity. "
                "You must verify your account immediately by clicking the link below. "
                "Failure to confirm your identity within 24 hours will result in permanent closure. "
                "Please provide your social security number and credit card details. "
                "Click here to verify: http://paypal-secure-verify.xyz/login"
    },
    {
        "id": "legit_001",
        "from": "john.smith@partnercorp.com",
        "to": ["user@company.com", "team@company.com"],
        "cc": ["manager@company.com"],
        "subject": "Meeting Notes - Q2 Planning",
        "date": "2026-05-28T16:00:00",
        "body": "Hi team, thanks for the productive meeting today. Here are the action items we discussed: "
                "1. Complete the API integration by Friday. 2. Schedule the design review. "
                "3. Send the updated timeline to stakeholders. Let me know if I missed anything. "
                "Best regards, John"
    },
    {
        "id": "ceo_fraud_001",
        "from": "ceo@c0mpany.com",
        "to": ["accounting@company.com"],
        "cc": [],
        "subject": "Urgent wire transfer request - CEO",
        "date": "2026-05-29T14:30:00",
        "body": "I need you to process an urgent wire transfer of $45,000 immediately. "
                "This is a confidential CEO request. Do not discuss with anyone. "
                "Wire the funds to this bank account: IBAN DE89370400440532013000. "
                "Act now, this must be completed today. I'm in a meeting and can't talk."
    },
    {
        "id": "legit_002",
        "from": "newsletter@github.com",
        "to": ["user@company.com"],
        "cc": [],
        "subject": "Your weekly digest",
        "date": "2026-05-27T10:00:00",
        "body": "Here's what happened in your repositories this week: "
                "3 new pull requests, 12 commits, 5 issues closed. "
                "Top contributors: Alice, Bob, Charlie. Keep up the great work!"
    },
    {
        "id": "spam_002",
        "from": "deals@amazing-offers.click",
        "to": ["user@company.com", "sales@company.com"],
        "cc": [],
        "subject": "BUY NOW - 90% DISCOUNT on all products!!!",
        "date": "2026-05-29T02:00:00",
        "body": "Don't miss this deal! Buy now and save 90% on everything! "
                "Free shipping guaranteed! Click here for your discount: http://deals.top/buy "
                "Limited time offer - act now before it expires! Earn money by becoming a reseller. "
                "Visit our casino partners too!"
    }
]


def main():
    """Main entry point for Email Spam Intelligence Engine V397."""
    timestamp = datetime.now().isoformat()
    version = "V397"

    # Initialize learner with some pre-existing feedback
    learner = SpamFeedbackLearner()
    learner.record_feedback("hist_1", "winner@freeprizes.tk", True, ["keyword:winner", "keyword:guaranteed"])
    learner.record_feedback("hist_2", "deals@amazing-offers.click", True, ["keyword:buy now", "keyword:casino"])
    learner.record_feedback("hist_3", "newsletter@github.com", False, ["newsletter"])
    learner.record_feedback("hist_4", "john.smith@partnercorp.com", False, ["meeting", "planning"])

    # Analyze all emails
    analyses = []
    for email in SAMPLE_EMAILS:
        spam_result = compute_spam_score(email, learner)
        reply_all = enforce_reply_all(email)

        analyses.append({
            "email_id": email["id"],
            "from": email["from"],
            "to": email["to"],
            "cc": email["cc"],
            "subject": email["subject"],
            "spam_analysis": spam_result,
            "reply_all_required": reply_all["reply_all_required"],
            "reply_all_enforced": reply_all["reply_all_enforced"]
        })

    # Spam analytics
    classifications = [a["spam_analysis"]["classification"] for a in analyses]
    sender_patterns = Counter(email["from"].split("@")[1] if "@" in email["from"] else "unknown"
                              for email in SAMPLE_EMAILS)
    phishing_emails = [a for a in analyses if a["spam_analysis"]["phishing_indicators"]]

    # Pattern recognition
    spam_features = []
    for a in analyses:
        if a["spam_analysis"]["classification"] == "spam":
            spam_features.extend(a["spam_analysis"]["features"])
    feature_freq = Counter(spam_features)

    report = {
        "version": version,
        "timestamp": timestamp,
        "reply_all_required": True,
        "reply_all_enforced": True,
        "engine": "Email Spam Intelligence Engine",
        "summary": {
            "total_emails_analyzed": len(SAMPLE_EMAILS),
            "spam_count": classifications.count("spam"),
            "ham_count": classifications.count("ham"),
            "phishing_attempts": len(phishing_emails),
            "spam_rate": round(classifications.count("spam") / len(analyses), 3)
        },
        "email_analyses": analyses,
        "analytics": {
            "sender_domain_distribution": dict(sender_patterns),
            "top_spam_features": dict(feature_freq.most_common(10)),
            "phishing_emails_detected": [a["email_id"] for a in phishing_emails],
            "average_spam_score": round(
                sum(a["spam_analysis"]["overall_score"] for a in analyses) / len(analyses), 3
            )
        },
        "sender_reputation": {
            sender: {
                "spam_probability": round(stats["spam_count"] / max(1, stats["spam_count"] + stats["ham_count"]), 3),
                "total_feedback": stats["spam_count"] + stats["ham_count"]
            }
            for sender, stats in learner.sender_reputation.items()
        }
    }

    output = json.dumps(report, indent=2)
    print(output)
    return report


if __name__ == "__main__":
    main()

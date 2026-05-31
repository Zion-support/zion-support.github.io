#!/usr/bin/env python3
"""
V420 - AI Smart Signature Manager Engine
Dynamically adjusts email signatures based on recipient relationship,
adds relevant contact info, includes contextual CTAs, tracks signature
engagement, A/B tests different formats.
Enforces reply-all for multi-recipient emails.
"""

import logging
import json
import hashlib
import random
from datetime import datetime, timedelta
from dataclasses import dataclass, field
from typing import Dict, List, Optional, Tuple
from enum import Enum

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s - %(message)s"
)
logger = logging.getLogger("V420_SignatureManager")


class RelationshipType(Enum):
    INTERNAL = "internal"
    CLIENT = "client"
    PROSPECT = "prospect"
    VENDOR = "vendor"
    PARTNER = "partner"
    EXECUTIVE = "executive"
    COLD = "cold"
    RECURRING = "recurring"


class SignatureFormat(Enum):
    MINIMAL = "minimal"
    STANDARD = "standard"
    DETAILED = "detailed"
    EXECUTIVE = "executive"
    MARKETING = "marketing"


@dataclass
class ContactInfo:
    name: str
    title: str
    company: str
    email: str
    phone: str = ""
    mobile: str = ""
    website: str = ""
    linkedin: str = ""
    twitter: str = ""
    address: str = ""
    departments: List[str] = field(default_factory=list)


@dataclass
class SignatureCTA:
    text: str
    link: str
    tracking_id: str = ""
    clicks: int = 0
    impressions: int = 0

    def click_rate(self) -> float:
        return self.clicks / max(self.impressions, 1)

    def __post_init__(self):
        if not self.tracking_id:
            self.tracking_id = hashlib.md5(f"{self.text}{self.link}".encode()).hexdigest()[:8]


@dataclass
class SignatureTemplate:
    template_id: str
    format_type: SignatureFormat
    name: str
    layout: str
    include_phone: bool = True
    include_mobile: bool = False
    include_social: bool = False
    include_address: bool = False
    include_cta: bool = False
    include_banner: bool = False
    metrics: Dict = field(default_factory=lambda: {
        "impressions": 0, "clicks": 0, "replies": 0, "positive_replies": 0
    })

    def engagement_rate(self) -> float:
        return (self.metrics["clicks"] + self.metrics["replies"]) / max(self.metrics["impressions"], 1)


@dataclass
class EmailMessage:
    message_id: str
    subject: str
    body: str
    sender: str
    recipients: List[str]
    cc: List[str] = field(default_factory=list)
    bcc: List[str] = field(default_factory=list)
    signature: str = ""
    thread_id: str = ""

    def all_recipients(self) -> List[str]:
        return list(set(self.recipients + self.cc + self.bcc))

    def is_multi_recipient(self) -> bool:
        return len(self.all_recipients()) > 1


RELATIONSHIP_CTA_MAP = {
    RelationshipType.CLIENT: [
        SignatureCTA("Schedule a Review Meeting", "https://cal.example.com/review"),
        SignatureCTA("View Your Dashboard", "https://dash.example.com"),
        SignatureCTA("Access Support Portal", "https://support.example.com"),
    ],
    RelationshipType.PROSPECT: [
        SignatureCTA("Book a Free Demo", "https://cal.example.com/demo"),
        SignatureCTA("Download Case Study", "https://example.com/case-study"),
        SignatureCTA("Start Free Trial", "https://example.com/trial"),
    ],
    RelationshipType.PARTNER: [
        SignatureCTA("Partner Portal", "https://partners.example.com"),
        SignatureCTA("Co-Marketing Resources", "https://example.com/co-market"),
    ],
    RelationshipType.VENDOR: [
        SignatureCTA("Vendor Portal", "https://vendors.example.com"),
        SignatureCTA("Submit Invoice", "https://billing.example.com"),
    ],
    RelationshipType.EXECUTIVE: [
        SignatureCTA("Executive Briefing", "https://example.com/exec-brief"),
    ],
    RelationshipType.INTERNAL: [
        SignatureCTA("Internal Wiki", "https://wiki.internal.com"),
    ],
}

RELATIONSHIP_FORMAT_MAP = {
    RelationshipType.INTERNAL: SignatureFormat.MINIMAL,
    RelationshipType.CLIENT: SignatureFormat.DETAILED,
    RelationshipType.PROSPECT: SignatureFormat.MARKETING,
    RelationshipType.VENDOR: SignatureFormat.STANDARD,
    RelationshipType.PARTNER: SignatureFormat.STANDARD,
    RelationshipType.EXECUTIVE: SignatureFormat.EXECUTIVE,
    RelationshipType.COLD: SignatureFormat.MARKETING,
    RelationshipType.RECURRING: SignatureFormat.STANDARD,
}


class RelationshipAnalyzer:
    """Determines relationship type with email recipients."""

    def __init__(self):
        self.relationship_cache: Dict[str, RelationshipType] = {}
        self.interaction_history: Dict[str, List[Dict]] = {}
        self.domain_types: Dict[str, RelationshipType] = {
            "company.com": RelationshipType.INTERNAL,
            "partner.org": RelationshipType.PARTNER,
        }

    def classify_recipient(self, email: str, sender_domain: str = "company.com") -> RelationshipType:
        if email in self.relationship_cache:
            return self.relationship_cache[email]

        domain = email.split("@")[-1] if "@" in email else ""
        if domain == sender_domain:
            rel = RelationshipType.INTERNAL
        elif domain in self.domain_types:
            rel = self.domain_types[domain]
        else:
            history = self.interaction_history.get(email, [])
            if len(history) > 10:
                rel = RelationshipType.RECURRING
            elif len(history) > 3:
                rel = RelationshipType.CLIENT
            elif len(history) > 0:
                rel = RelationshipType.PROSPECT
            else:
                rel = RelationshipType.COLD

        self.relationship_cache[email] = rel
        logger.debug(f"Recipient {email} classified as {rel.value}")
        return rel

    def record_interaction(self, email: str, interaction_type: str) -> None:
        if email not in self.interaction_history:
            self.interaction_history[email] = []
        self.interaction_history[email].append({
            "type": interaction_type,
            "timestamp": datetime.now().isoformat(),
        })

    def set_domain_type(self, domain: str, rel_type: RelationshipType) -> None:
        self.domain_types[domain] = rel_type
        # Clear cache for that domain
        to_remove = [e for e in self.relationship_cache if e.endswith(f"@{domain}")]
        for e in to_remove:
            del self.relationship_cache[e]


class SignatureBuilder:
    """Builds email signatures based on templates and context."""

    def __init__(self, contact: ContactInfo):
        self.contact = contact
        self.templates: Dict[SignatureFormat, SignatureTemplate] = self._create_templates()
        self.signature_log: List[Dict] = []

    def _create_templates(self) -> Dict[SignatureFormat, SignatureTemplate]:
        return {
            SignatureFormat.MINIMAL: SignatureTemplate(
                template_id="tpl-minimal", format_type=SignatureFormat.MINIMAL,
                name="Minimal", layout="compact",
                include_phone=True, include_social=False,
                include_cta=False, include_banner=False,
            ),
            SignatureFormat.STANDARD: SignatureTemplate(
                template_id="tpl-standard", format_type=SignatureFormat.STANDARD,
                name="Standard", layout="standard",
                include_phone=True, include_mobile=True,
                include_social=False, include_cta=False,
            ),
            SignatureFormat.DETAILED: SignatureTemplate(
                template_id="tpl-detailed", format_type=SignatureFormat.DETAILED,
                name="Detailed", layout="detailed",
                include_phone=True, include_mobile=True,
                include_social=True, include_cta=True,
            ),
            SignatureFormat.EXECUTIVE: SignatureTemplate(
                template_id="tpl-exec", format_type=SignatureFormat.EXECUTIVE,
                name="Executive", layout="executive",
                include_phone=True, include_mobile=False,
                include_social=True, include_cta=True, include_banner=True,
            ),
            SignatureFormat.MARKETING: SignatureTemplate(
                template_id="tpl-mktg", format_type=SignatureFormat.MARKETING,
                name="Marketing", layout="marketing",
                include_phone=True, include_mobile=False,
                include_social=True, include_cta=True, include_banner=True,
            ),
        }

    def build_signature(self, format_type: SignatureFormat, cta: Optional[SignatureCTA] = None,
                        custom_message: str = "") -> str:
        template = self.templates.get(format_type, self.templates[SignatureFormat.STANDARD])
        template.metrics["impressions"] += 1

        lines = [
            f"{'─' * 40}",
            f"**{self.contact.name}**",
            f"{self.contact.title} | {self.contact.company}",
        ]

        if template.include_phone and self.contact.phone:
            lines.append(f"📞 {self.contact.phone}")
        if template.include_mobile and self.contact.mobile:
            lines.append(f"📱 {self.contact.mobile}")
        lines.append(f"✉️ {self.contact.email}")

        if self.contact.website:
            lines.append(f"🌐 {self.contact.website}")

        if template.include_social:
            if self.contact.linkedin:
                lines.append(f"🔗 LinkedIn: {self.contact.linkedin}")
            if self.contact.twitter:
                lines.append(f"🐦 Twitter: {self.contact.twitter}")

        if template.include_address and self.contact.address:
            lines.append(f"📍 {self.contact.address}")

        if template.include_cta and cta:
            cta.impressions += 1
            lines.append(f"")
            lines.append(f"👉 [{cta.text}]({cta.link})")

        if custom_message:
            lines.append(f"")
            lines.append(f"_{custom_message}_")

        if template.include_banner:
            lines.append(f"")
            lines.append(f"🎉 Check out our latest updates at {self.contact.website}")

        lines.append(f"{'─' * 40}")

        signature = "\n".join(lines)
        self.signature_log.append({
            "format": format_type.value,
            "template_id": template.template_id,
            "cta_included": cta is not None,
            "timestamp": datetime.now().isoformat(),
        })
        return signature

    def get_template_stats(self) -> Dict:
        stats = {}
        for fmt, tpl in self.templates.items():
            stats[fmt.value] = {
                "impressions": tpl.metrics["impressions"],
                "clicks": tpl.metrics["clicks"],
                "engagement_rate": f"{tpl.engagement_rate():.2%}",
            }
        return stats


class EngagementTracker:
    """Tracks engagement with email signatures."""

    def __init__(self):
        self.events: List[Dict] = []
        self.cta_performance: Dict[str, Dict] = {}

    def track_cta_click(self, cta: SignatureCTA, recipient: str) -> None:
        cta.clicks += 1
        if cta.tracking_id not in self.cta_performance:
            self.cta_performance[cta.tracking_id] = {"cta": cta.text, "clicks": 0, "recipients": set()}
        self.cta_performance[cta.tracking_id]["clicks"] += 1
        self.cta_performance[cta.tracking_id]["recipients"].add(recipient)
        self.events.append({
            "type": "cta_click",
            "cta_text": cta.text,
            "recipient": recipient,
            "timestamp": datetime.now().isoformat(),
        })
        logger.info(f"CTA click: '{cta.text}' by {recipient}")

    def track_reply(self, recipient: str, positive: bool = True) -> None:
        self.events.append({
            "type": "reply",
            "recipient": recipient,
            "positive": positive,
            "timestamp": datetime.now().isoformat(),
        })

    def get_best_cta(self) -> Optional[Dict]:
        if not self.cta_performance:
            return None
        best = max(self.cta_performance.items(), key=lambda x: x[1]["clicks"])
        return {"tracking_id": best[0], "text": best[1]["cta"], "clicks": best[1]["clicks"]}

    def get_engagement_report(self) -> Dict:
        cta_clicks = sum(1 for e in self.events if e["type"] == "cta_click")
        replies = sum(1 for e in self.events if e["type"] == "reply")
        positive_replies = sum(1 for e in self.events if e["type"] == "reply" and e.get("positive", False))
        return {
            "total_events": len(self.events),
            "cta_clicks": cta_clicks,
            "replies": replies,
            "positive_replies": positive_replies,
            "cta_performance": {k: {"text": v["cta"], "clicks": v["clicks"]}
                                for k, v in self.cta_performance.items()},
        }


class SignatureABTester:
    """A/B tests different signature formats."""

    def __init__(self):
        self.tests: Dict[str, Dict] = {}
        self.results: List[Dict] = []

    def create_test(self, test_name: str, formats: List[SignatureFormat]) -> str:
        test_id = hashlib.md5(f"{test_name}{datetime.now().isoformat()}".encode()).hexdigest()[:8]
        self.tests[test_id] = {
            "name": test_name,
            "formats": formats,
            "assignments": {},
            "metrics": {f.value: {"sent": 0, "replies": 0, "clicks": 0} for f in formats},
            "start_time": datetime.now().isoformat(),
        }
        logger.info(f"A/B test created: '{test_name}' with {len(formats)} formats (ID: {test_id})")
        return test_id

    def assign_variant(self, test_id: str, recipient: str) -> Optional[SignatureFormat]:
        test = self.tests.get(test_id)
        if not test:
            return None
        if recipient in test["assignments"]:
            return test["assignments"][recipient]
        variant = random.choice(test["formats"])
        test["assignments"][recipient] = variant
        test["metrics"][variant.value]["sent"] += 1
        return variant

    def record_result(self, test_id: str, format_type: SignatureFormat, event: str) -> None:
        test = self.tests.get(test_id)
        if not test:
            return
        if event in test["metrics"][format_type.value]:
            test["metrics"][format_type.value][event] += 1
        self.results.append({
            "test_id": test_id,
            "format": format_type.value,
            "event": event,
            "timestamp": datetime.now().isoformat(),
        })

    def get_winner(self, test_id: str) -> Optional[SignatureFormat]:
        test = self.tests.get(test_id)
        if not test:
            return None
        best_format = None
        best_rate = -1
        for fmt_str, metrics in test["metrics"].items():
            if metrics["sent"] == 0:
                continue
            rate = (metrics["replies"] + metrics["clicks"]) / metrics["sent"]
            if rate > best_rate:
                best_rate = rate
                best_format = SignatureFormat(fmt_str)
        if best_format:
            logger.info(f"A/B test '{test['name']}' winner: {best_format.value} (rate={best_rate:.2%})")
        return best_format


class SmartSignatureEngine:
    """Main engine for intelligent email signature management."""

    def __init__(self, contact: ContactInfo):
        self.contact = contact
        self.analyzer = RelationshipAnalyzer()
        self.builder = SignatureBuilder(contact)
        self.tracker = EngagementTracker()
        self.ab_tester = SignatureABTester()
        self.sent_emails: List[Dict] = []
        self.active_test_id: Optional[str] = None

    def compose_with_signature(self, email: EmailMessage, body: str,
                                custom_message: str = "") -> Dict:
        """Compose email with dynamic signature based on first recipient's relationship."""
        primary_recipient = email.recipients[0] if email.recipients else ""
        relationship = self.analyzer.classify_recipient(primary_recipient)
        format_type = RELATIONSHIP_FORMAT_MAP.get(relationship, SignatureFormat.STANDARD)

        if self.active_test_id:
            test_format = self.ab_tester.assign_variant(self.active_test_id, primary_recipient)
            if test_format:
                format_type = test_format

        ctas = RELATIONSHIP_CTA_MAP.get(relationship, [])
        cta = random.choice(ctas) if ctas else None

        signature = self.builder.build_signature(format_type, cta, custom_message)
        full_body = f"{body}\n\n{signature}"

        logger.info(f"Signature built: format={format_type.value}, relationship={relationship.value}, "
                     f"cta={'yes' if cta else 'no'}")

        return {
            "full_body": full_body,
            "signature_format": format_type.value,
            "relationship": relationship.value,
            "cta_included": cta.text if cta else None,
        }

    def send_email(self, email: EmailMessage, body: str, sender: str) -> Dict:
        """Send email with dynamic signature, enforcing reply-all for multi-recipient."""
        composed = self.compose_with_signature(email, body)

        if email.is_multi_recipient():
            all_recipients = email.all_recipients()
            logger.info(f"REPLY-ALL enforced: {len(all_recipients)} recipients for {email.message_id}")
            send_data = {
                "type": "send_reply_all",
                "original_id": email.message_id,
                "to": all_recipients,
                "cc": email.cc,
                "body": composed["full_body"],
                "sender": sender,
                "signature_info": {
                    "format": composed["signature_format"],
                    "relationship": composed["relationship"],
                    "cta": composed["cta_included"],
                },
                "timestamp": datetime.now().isoformat(),
                "reply_all_enforced": True,
            }
        else:
            send_data = {
                "type": "send",
                "original_id": email.message_id,
                "to": email.recipients,
                "body": composed["full_body"],
                "sender": sender,
                "signature_info": {
                    "format": composed["signature_format"],
                    "relationship": composed["relationship"],
                    "cta": composed["cta_included"],
                },
                "timestamp": datetime.now().isoformat(),
                "reply_all_enforced": False,
            }

        self.sent_emails.append(send_data)
        self.analyzer.record_interaction(
            email.recipients[0] if email.recipients else "", "email_sent"
        )
        return send_data

    def send_reply(self, original: EmailMessage, reply_body: str, sender: str) -> Dict:
        """Send reply enforcing reply-all for multi-recipient emails."""
        composed = self.compose_with_signature(original, reply_body)

        if original.is_multi_recipient():
            all_recipients = [r for r in original.all_recipients() if r != sender]
            all_recipients.append(original.sender)
            all_recipients = list(set(all_recipients))
            logger.info(f"REPLY-ALL enforced: {len(all_recipients)} recipients for {original.message_id}")
            reply_data = {
                "type": "reply_all",
                "original_id": original.message_id,
                "to": all_recipients,
                "cc": original.cc,
                "body": composed["full_body"],
                "sender": sender,
                "signature_info": {
                    "format": composed["signature_format"],
                    "relationship": composed["relationship"],
                    "cta": composed["cta_included"],
                },
                "timestamp": datetime.now().isoformat(),
                "reply_all_enforced": True,
            }
        else:
            reply_data = {
                "type": "reply",
                "original_id": original.message_id,
                "to": [original.sender],
                "body": composed["full_body"],
                "sender": sender,
                "signature_info": {
                    "format": composed["signature_format"],
                    "relationship": composed["relationship"],
                    "cta": composed["cta_included"],
                },
                "timestamp": datetime.now().isoformat(),
                "reply_all_enforced": False,
            }

        self.sent_emails.append(reply_data)
        return reply_data

    def start_signature_ab_test(self, test_name: str = "Format Test") -> str:
        """Start an A/B test for signature formats."""
        test_id = self.ab_tester.create_test(
            test_name, [SignatureFormat.STANDARD, SignatureFormat.DETAILED, SignatureFormat.MARKETING]
        )
        self.active_test_id = test_id
        return test_id

    def get_engine_stats(self) -> Dict:
        return {
            "emails_sent": len(self.sent_emails),
            "signature_templates": self.builder.get_template_stats(),
            "engagement": self.tracker.get_engagement_report(),
            "active_test": self.active_test_id,
            "relationships_cached": len(self.analyzer.relationship_cache),
        }


def main():
    contact = ContactInfo(
        name="Jane Smith",
        title="VP of Engineering",
        company="TechCorp Inc.",
        email="jane@company.com",
        phone="+1 (555) 123-4567",
        mobile="+1 (555) 987-6543",
        website="https://techcorp.com",
        linkedin="linkedin.com/in/janesmith",
        twitter="@janesmith",
    )

    engine = SmartSignatureEngine(contact)
    engine.analyzer.set_domain_type("client.co", RelationshipType.CLIENT)
    engine.analyzer.set_domain_type("prospect.io", RelationshipType.PROSPECT)

    email_multi = EmailMessage(
        message_id="sig-001",
        subject="Partnership Opportunity",
        body="Hi team, I wanted to discuss a potential partnership opportunity.",
        sender="jane@company.com",
        recipients=["bob@client.co", "alice@partner.org"],
        cc=["manager@company.com"],
    )

    email_single = EmailMessage(
        message_id="sig-002",
        subject="Product Demo",
        body="Hi, I'd love to schedule a product demo at your convenience.",
        sender="jane@company.com",
        recipients=["newlead@prospect.io"],
    )

    result1 = engine.send_email(email_multi, email_multi.body, "jane@company.com")
    result2 = engine.send_email(email_single, email_single.body, "jane@company.com")

    reply = engine.send_reply(email_multi, "Thanks for the great discussion!", "jane@company.com")

    test_id = engine.start_signature_ab_test("Q4 Signature Optimization")

    stats = engine.get_engine_stats()
    print(json.dumps(stats, indent=2, default=str))


if __name__ == "__main__":
    main()

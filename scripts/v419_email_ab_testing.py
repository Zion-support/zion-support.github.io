#!/usr/bin/env python3
"""
V419 - AI Email A/B Testing Engine
Creates multiple email variants, tracks open/click rates,
auto-selects best performing version, learns from engagement patterns,
optimizes subject lines and CTAs.
Enforces reply-all for multi-recipient emails.
"""

import logging
import json
import random
import hashlib
import math
from datetime import datetime, timedelta
from dataclasses import dataclass, field
from typing import Dict, List, Optional, Tuple
from enum import Enum

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s - %(message)s"
)
logger = logging.getLogger("V419_ABTestEngine")


class TestStatus(Enum):
    DRAFT = "draft"
    RUNNING = "running"
    PAUSED = "paused"
    COMPLETED = "completed"
    CANCELLED = "cancelled"


class WinnerCriterion(Enum):
    OPEN_RATE = "open_rate"
    CLICK_RATE = "click_rate"
    CONVERSION_RATE = "conversion_rate"
    ENGAGEMENT_SCORE = "engagement_score"


@dataclass
class EmailVariant:
    variant_id: str
    subject: str
    body: str
    cta_text: str = ""
    cta_link: str = ""
    sender_name: str = ""
    send_time: str = ""
    variant_label: str = ""  # A, B, C, etc.
    metrics: Dict = field(default_factory=lambda: {
        "sent": 0, "opened": 0, "clicked": 0, "converted": 0,
        "unsubscribed": 0, "bounced": 0, "replied": 0
    })

    def open_rate(self) -> float:
        return self.metrics["opened"] / max(self.metrics["sent"], 1)

    def click_rate(self) -> float:
        return self.metrics["clicked"] / max(self.metrics["sent"], 1)

    def conversion_rate(self) -> float:
        return self.metrics["converted"] / max(self.metrics["sent"], 1)

    def engagement_score(self) -> float:
        o = self.open_rate() * 0.3
        c = self.click_rate() * 0.4
        v = self.conversion_rate() * 0.3
        return o + c + v

    def reply_rate(self) -> float:
        return self.metrics["replied"] / max(self.metrics["sent"], 1)


@dataclass
class ABTestCampaign:
    campaign_id: str
    name: str
    variants: List[EmailVariant]
    target_audience: List[str]
    status: TestStatus = TestStatus.DRAFT
    winner_criterion: WinnerCriterion = WinnerCriterion.ENGAGEMENT_SCORE
    start_time: str = ""
    end_time: str = ""
    winner: Optional[str] = None
    sample_size_per_variant: int = 100
    confidence_threshold: float = 0.95
    auto_select: bool = True

    def total_sent(self) -> int:
        return sum(v.metrics["sent"] for v in self.variants)

    def get_best_variant(self) -> Optional[EmailVariant]:
        if not self.variants:
            return None
        criterion = self.winner_criterion
        if criterion == WinnerCriterion.OPEN_RATE:
            return max(self.variants, key=lambda v: v.open_rate())
        elif criterion == WinnerCriterion.CLICK_RATE:
            return max(self.variants, key=lambda v: v.click_rate())
        elif criterion == WinnerCriterion.CONVERSION_RATE:
            return max(self.variants, key=lambda v: v.conversion_rate())
        else:
            return max(self.variants, key=lambda v: v.engagement_score())


@dataclass
class EmailMessage:
    message_id: str
    subject: str
    body: str
    sender: str
    recipients: List[str]
    cc: List[str] = field(default_factory=list)
    bcc: List[str] = field(default_factory=list)
    campaign_id: str = ""

    def all_recipients(self) -> List[str]:
        return list(set(self.recipients + self.cc + self.bcc))

    def is_multi_recipient(self) -> bool:
        return len(self.all_recipients()) > 1


class VariantGenerator:
    """Generates email variants for A/B testing."""

    SUBJECT_TEMPLATES = [
        "{prefix}: {core_subject}",
        "🚀 {core_subject}",
        "{core_subject} - {urgency}",
        "[{brand}] {core_subject}",
        "Quick question about {core_subject}",
    ]

    CTA_TEMPLATES = [
        "Learn More", "Get Started", "Try It Free", "Book a Demo",
        "See Results", "Download Now", "Claim Your Spot", "Start Today",
    ]

    def __init__(self):
        self.generated_variants: List[EmailVariant] = []

    def generate_variants(self, base_subject: str, base_body: str, count: int = 2,
                          cta_text: str = "", cta_link: str = "") -> List[EmailVariant]:
        variants = []
        labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        prefixes = ["Update", "Important", "New", "Exclusive", "Alert"]
        urgencies = ["Limited Time", "Act Now", "Don't Miss Out", "Today Only"]
        brands = ["Team", "Company", "Product"]

        for i in range(count):
            label = labels[i] if i < len(labels) else str(i)
            if i == 0:
                subject = base_subject
                body = base_body
                cta = cta_text or "Learn More"
            else:
                prefix = prefixes[i % len(prefixes)]
                urgency = urgencies[i % len(urgencies)]
                brand = brands[i % len(brands)]
                subject = f"{prefix}: {base_subject}"
                body = self._modify_body(base_body, i)
                cta = self.CTA_TEMPLATES[i % len(self.CTA_TEMPLATES)]

            variant = EmailVariant(
                variant_id=f"var-{hashlib.md5(f'{label}{subject}'.encode()).hexdigest()[:8]}",
                subject=subject,
                body=body,
                cta_text=cta,
                cta_link=cta_link,
                variant_label=label,
            )
            variants.append(variant)
            self.generated_variants.append(variant)
            logger.info(f"Generated variant {label}: subject='{subject}', CTA='{cta}'")

        return variants

    def _modify_body(self, body: str, variant_index: int) -> str:
        modifications = [
            lambda b: f"Hey there!\n\n{b}\n\nDon't miss out on this opportunity!",
            lambda b: f"Dear Valued Contact,\n\n{b}\n\nWe look forward to hearing from you.",
            lambda b: f"Quick update:\n\n{b}\n\nReply to this email for more info.",
            lambda b: f"Hi!\n\n{b}\n\nClick below to get started today.",
        ]
        modifier = modifications[variant_index % len(modifications)]
        return modifier(body)


class PerformanceTracker:
    """Tracks engagement metrics for email variants."""

    def __init__(self):
        self.events: List[Dict] = []

    def record_event(self, variant_id: str, event_type: str, recipient: str = "") -> None:
        event = {
            "variant_id": variant_id,
            "event_type": event_type,
            "recipient": recipient,
            "timestamp": datetime.now().isoformat(),
        }
        self.events.append(event)
        logger.debug(f"Event recorded: {event_type} for variant {variant_id}")

    def calculate_significance(self, variant_a: EmailVariant, variant_b: EmailVariant) -> float:
        n_a = variant_a.metrics["sent"]
        n_b = variant_b.metrics["sent"]
        if n_a == 0 or n_b == 0:
            return 0.0

        p_a = variant_a.open_rate()
        p_b = variant_b.open_rate()
        p_pool = (variant_a.metrics["opened"] + variant_b.metrics["opened"]) / (n_a + n_b)

        if p_pool == 0 or p_pool == 1:
            return 1.0 if p_a == p_b else 0.0

        se = math.sqrt(p_pool * (1 - p_pool) * (1/n_a + 1/n_b))
        if se == 0:
            return 1.0

        z = abs(p_a - p_b) / se
        p_value = 2 * (1 - self._normal_cdf(abs(z)))
        confidence = 1 - p_value
        return confidence

    def _normal_cdf(self, x: float) -> float:
        return 0.5 * (1 + math.erf(x / math.sqrt(2)))

    def get_engagement_patterns(self) -> Dict:
        patterns = {"best_hours": {}, "best_days": {}, "top_ctas": {}}
        for event in self.events:
            ts = event["timestamp"]
            try:
                dt = datetime.fromisoformat(ts)
                hour = dt.hour
                day = dt.strftime("%A")
                patterns["best_hours"][hour] = patterns["best_hours"].get(hour, 0) + 1
                patterns["best_days"][day] = patterns["best_days"].get(day, 0) + 1
            except (ValueError, KeyError):
                pass
        return patterns


class SubjectLineOptimizer:
    """Optimizes subject lines based on historical performance."""

    def __init__(self):
        self.word_performance: Dict[str, float] = {}
        self.subject_history: List[Dict] = []

    POWER_WORDS = [
        "free", "new", "exclusive", "limited", "urgent", "proven",
        "guaranteed", "instant", "secret", "breakthrough", "discover",
        "easy", "fast", "simple", "best", "top", "ultimate"
    ]

    def analyze_subject(self, subject: str, open_rate: float) -> Dict:
        words = subject.lower().split()
        for word in words:
            if word not in self.word_performance:
                self.word_performance[word] = {"total_rate": 0, "count": 0}
            self.word_performance[word]["total_rate"] += open_rate
            self.word_performance[word]["count"] += 1

        self.subject_history.append({
            "subject": subject,
            "open_rate": open_rate,
            "word_count": len(words),
            "has_emoji": any(ord(c) > 0x1F600 for c in subject),
            "has_number": any(c.isdigit() for c in subject),
            "timestamp": datetime.now().isoformat(),
        })

        score = self._score_subject(subject)
        return {"subject": subject, "score": score, "suggestions": self._get_suggestions(subject)}

    def _score_subject(self, subject: str) -> float:
        score = 50.0
        words = subject.lower().split()
        power_found = sum(1 for w in self.POWER_WORDS if w in words)
        score += power_found * 5
        if any(c.isdigit() for c in subject):
            score += 5
        if len(subject) <= 50:
            score += 10
        elif len(subject) > 70:
            score -= 10
        if subject[0].isupper():
            score += 3
        return min(score, 100)

    def _get_suggestions(self, subject: str) -> List[str]:
        suggestions = []
        words = subject.lower().split()
        if not any(w in self.POWER_WORDS for w in words):
            suggestions.append("Add a power word like 'exclusive', 'free', or 'new'")
        if len(subject) > 60:
            suggestions.append("Shorten subject line to under 60 characters")
        if not any(c.isdigit() for c in subject):
            suggestions.append("Consider adding a number for specificity")
        return suggestions

    def get_top_performing_words(self, top_n: int = 10) -> List[Tuple[str, float]]:
        avg_perf = {}
        for word, data in self.word_performance.items():
            avg_perf[word] = data["total_rate"] / data["count"]
        sorted_words = sorted(avg_perf.items(), key=lambda x: x[1], reverse=True)
        return sorted_words[:top_n]


class ABTestEngine:
    """Main A/B testing engine for emails."""

    def __init__(self):
        self.generator = VariantGenerator()
        self.tracker = PerformanceTracker()
        self.optimizer = SubjectLineOptimizer()
        self.campaigns: Dict[str, ABTestCampaign] = {}
        self.sent_emails: List[Dict] = []

    def create_campaign(self, name: str, base_subject: str, base_body: str,
                        target_audience: List[str], variant_count: int = 2,
                        cta_text: str = "", cta_link: str = "") -> ABTestCampaign:
        campaign_id = f"camp-{hashlib.md5(name.encode()).hexdigest()[:8]}"
        variants = self.generator.generate_variants(
            base_subject, base_body, variant_count, cta_text, cta_link
        )
        sample_size = max(len(target_audience) // variant_count, 10)

        campaign = ABTestCampaign(
            campaign_id=campaign_id,
            name=name,
            variants=variants,
            target_audience=target_audience,
            sample_size_per_variant=sample_size,
        )
        self.campaigns[campaign_id] = campaign
        logger.info(f"Campaign '{name}' created with {variant_count} variants (ID: {campaign_id})")
        return campaign

    def launch_campaign(self, campaign_id: str) -> Dict:
        campaign = self.campaigns.get(campaign_id)
        if not campaign:
            raise ValueError(f"Campaign {campaign_id} not found")

        campaign.status = TestStatus.RUNNING
        campaign.start_time = datetime.now().isoformat()
        audience = campaign.target_audience[:]
        random.shuffle(audience)

        sent_data = []
        chunk_size = max(len(audience) // len(campaign.variants), 1)
        for i, variant in enumerate(campaign.variants):
            start = i * chunk_size
            end = start + chunk_size if i < len(campaign.variants) - 1 else len(audience)
            recipients = audience[start:end]
            variant.metrics["sent"] = len(recipients)
            sent_data.append({
                "variant": variant.variant_label,
                "subject": variant.subject,
                "recipients": recipients,
                "count": len(recipients),
                "reply_all_enforced": len(recipients) > 1,
            })
            if len(recipients) > 1:
                logger.info(f"REPLY-ALL enforced: variant {variant.variant_label} sent to {len(recipients)} recipients")

        logger.info(f"Campaign '{campaign.name}' launched: {campaign.total_sent()} total sends")
        return {"campaign_id": campaign_id, "status": "running", "variants": sent_data}

    def record_open(self, campaign_id: str, variant_id: str, recipient: str = "") -> None:
        campaign = self.campaigns.get(campaign_id)
        if campaign:
            for v in campaign.variants:
                if v.variant_id == variant_id:
                    v.metrics["opened"] += 1
                    self.tracker.record_event(variant_id, "open", recipient)
                    break

    def record_click(self, campaign_id: str, variant_id: str, recipient: str = "") -> None:
        campaign = self.campaigns.get(campaign_id)
        if campaign:
            for v in campaign.variants:
                if v.variant_id == variant_id:
                    v.metrics["clicked"] += 1
                    self.tracker.record_event(variant_id, "click", recipient)
                    break

    def record_conversion(self, campaign_id: str, variant_id: str, recipient: str = "") -> None:
        campaign = self.campaigns.get(campaign_id)
        if campaign:
            for v in campaign.variants:
                if v.variant_id == variant_id:
                    v.metrics["converted"] += 1
                    self.tracker.record_event(variant_id, "conversion", recipient)
                    break

    def auto_select_winner(self, campaign_id: str) -> Optional[EmailVariant]:
        campaign = self.campaigns.get(campaign_id)
        if not campaign or campaign.status != TestStatus.RUNNING:
            return None

        if not campaign.auto_select:
            return None

        best = campaign.get_best_variant()
        if not best:
            return None

        if len(campaign.variants) >= 2:
            confidence = self.tracker.calculate_significance(campaign.variants[0], campaign.variants[1])
            if confidence >= campaign.confidence_threshold:
                campaign.winner = best.variant_id
                campaign.status = TestStatus.COMPLETED
                campaign.end_time = datetime.now().isoformat()
                logger.info(f"Winner auto-selected: variant {best.variant_label} (confidence={confidence:.2f})")

                self.optimizer.analyze_subject(best.subject, best.open_rate())
                return best
            else:
                logger.info(f"Not enough confidence ({confidence:.2f}) to select winner yet")

        return None

    def send_reply(self, original: EmailMessage, reply_body: str, sender: str) -> Dict:
        """Send reply enforcing reply-all for multi-recipient emails."""
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
                "body": reply_body,
                "sender": sender,
                "timestamp": datetime.now().isoformat(),
                "reply_all_enforced": True,
            }
        else:
            reply_data = {
                "type": "reply",
                "original_id": original.message_id,
                "to": [original.sender],
                "body": reply_body,
                "sender": sender,
                "timestamp": datetime.now().isoformat(),
                "reply_all_enforced": False,
            }
        self.sent_emails.append(reply_data)
        return reply_data

    def send_winner_announcement(self, campaign_id: str, sender: str) -> Dict:
        """Announce test winner enforcing reply-all to all campaign recipients."""
        campaign = self.campaigns.get(campaign_id)
        if not campaign:
            raise ValueError(f"Campaign {campaign_id} not found")

        all_recipients = list(set(campaign.target_audience))
        logger.info(f"REPLY-ALL enforced for winner announcement: {len(all_recipients)} recipients")

        winner = campaign.get_best_variant()
        body = f"Campaign '{campaign.name}' winner: Variant {winner.variant_label if winner else 'N/A'}"

        send_data = {
            "type": "winner_announcement",
            "campaign_id": campaign_id,
            "to": all_recipients,
            "body": body,
            "sender": sender,
            "timestamp": datetime.now().isoformat(),
            "reply_all_enforced": True,
        }
        self.sent_emails.append(send_data)
        return send_data

    def get_campaign_stats(self, campaign_id: str) -> Dict:
        campaign = self.campaigns.get(campaign_id)
        if not campaign:
            return {}
        variants_data = []
        for v in campaign.variants:
            variants_data.append({
                "label": v.variant_label,
                "subject": v.subject,
                "sent": v.metrics["sent"],
                "open_rate": f"{v.open_rate():.1%}",
                "click_rate": f"{v.click_rate():.1%}",
                "engagement": f"{v.engagement_score():.3f}",
            })
        return {
            "campaign": campaign.name,
            "status": campaign.status.value,
            "winner": campaign.winner,
            "variants": variants_data,
            "patterns": self.tracker.get_engagement_patterns(),
        }


def main():
    engine = ABTestEngine()
    audience = [f"user{i}@example.com" for i in range(20)]

    campaign = engine.create_campaign(
        name="Q4 Product Launch",
        base_subject="Introducing our new product features",
        base_body="We're excited to share new features that will boost your productivity.",
        target_audience=audience,
        variant_count=3,
        cta_text="Try Now",
        cta_link="https://example.com/try",
    )

    engine.launch_campaign(campaign.campaign_id)

    for v in campaign.variants:
        opens = random.randint(5, v.metrics["sent"])
        clicks = random.randint(1, opens)
        conversions = random.randint(0, clicks)
        v.metrics["opened"] = opens
        v.metrics["clicked"] = clicks
        v.metrics["converted"] = conversions

    winner = engine.auto_select_winner(campaign.campaign_id)
    stats = engine.get_campaign_stats(campaign.campaign_id)

    email = EmailMessage(
        message_id="ab-001", subject="Test", body="Test body",
        sender="marketer@company.com",
        recipients=["team1@company.com", "team2@company.com"],
        cc=["lead@company.com"],
    )
    reply = engine.send_reply(email, "Campaign results look great!", "lead@company.com")

    print(json.dumps(stats, indent=2, default=str))


if __name__ == "__main__":
    main()

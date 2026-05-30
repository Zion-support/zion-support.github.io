#!/usr/bin/env python3
"""V143: AI Email Competitive Intelligence — Extract competitive signals from customer emails."""
import re, json, hashlib
from datetime import datetime, timedelta
from dataclasses import dataclass, field
from typing import List, Dict, Optional, Tuple
from enum import Enum
from collections import Counter, defaultdict

class SignalType(Enum):
    COMPETITOR_MENTION = "competitor_mention"
    PRICING_SIGNAL = "pricing_signal"
    FEATURE_REQUEST = "feature_request"
    WIN_REASON = "win_reason"
    LOSS_REASON = "loss_reason"
    MARKET_SENTIMENT = "market_sentiment"
    SWITCHING_INTENT = "switching_intent"

class Sentiment(Enum):
    POSITIVE = "positive"
    NEGATIVE = "negative"
    NEUTRAL = "neutral"

@dataclass
class CompetitiveSignal:
    signal_id: str
    signal_type: SignalType
    competitor: Optional[str]
    content: str
    source_email_id: str
    sender: str
    company: str
    timestamp: datetime
    sentiment: Sentiment
    confidence: float
    tags: List[str] = field(default_factory=list)

@dataclass
class CompetitorProfile:
    name: str
    mention_count: int = 0
    positive_mentions: int = 0
    negative_mentions: int = 0
    pricing_signals: List[str] = field(default_factory=list)
    feature_comparisons: List[str] = field(default_factory=list)
    win_loss_ratio: float = 0.0
    threat_level: str = "low"

class CompetitiveIntelligenceEngine:
    """V143: Extract competitive intelligence from email conversations."""
    
    COMPETITOR_PATTERNS = [
        r'\b(salesforce|hubspot|pipedrive|monday|asana|jira|slack|teams|zoom|notion|confluence)\b',
        r'\b(competitor|alternative|other (?:vendor|provider|solution))\b',
        r'\b(compared to|versus|vs\.?|switching (?:from|to))\b',
    ]
    
    PRICING_PATTERNS = [
        r'\$[\d,]+(?:\.\d+)?(?:\s*(?:per|/)\s*(?:month|year|user|seat))?',
        r'\b(\d+)%\s*(?:cheaper|more expensive|discount|less)\b',
        r'\b(budget|pricing|cost|quote|proposal)\b',
    ]
    
    FEATURE_PATTERNS = [
        r'\b(wish (?:it|you) (?:had|could)|feature request|missing|doesn\'t have|need)\b',
        r'\b(better (?:than|at)|lacks|gap|limitation)\b',
    ]
    
    WIN_PATTERNS = [r'\b(chose you|went with|selected|best (?:option|choice|fit)|impressed by)\b']
    LOSS_PATTERNS = [r'\b(went with|chose|switched to|too expensive|missing|not (?:a|the) (?:good|right))\b']
    SWITCH_PATTERNS = [r'\b(switch(?:ing)? (?:from|to)|migrat(?:e|ing)|moving (?:from|to)|cancel(?:ing)?)\b']
    
    def __init__(self):
        self.signals: List[CompetitiveSignal] = []
        self.competitors: Dict[str, CompetitorProfile] = {}
        self.reply_all_count = 0
    
    def analyze_email(self, email: Dict) -> List[CompetitiveSignal]:
        body = email.get("body", "")
        subject = email.get("subject", "")
        sender = email.get("from", "")
        company = self._extract_company(sender)
        email_id = email.get("id", hashlib.md5(f"{sender}{subject}".encode()).hexdigest()[:12])
        text = subject + " " + body
        text_lower = text.lower()
        
        signals = []
        recipients = email.get("to", []) + email.get("cc", [])
        if len(recipients) > 1:
            self.reply_all_count += 1
        
        # Competitor mentions
        for pattern in self.COMPETITOR_PATTERNS:
            matches = re.findall(pattern, text_lower)
            for match in matches:
                competitor = match.strip()
                sentiment = self._assess_sentiment(text_lower, competitor)
                sig = self._create_signal(SignalType.COMPETITOR_MENTION, competitor,
                    f"Competitor mentioned: {competitor}", email_id, sender, company, sentiment, 0.85)
                signals.append(sig)
                self._update_competitor(competitor, sentiment)
        
        # Pricing signals
        for pattern in self.PRICING_PATTERNS:
            matches = re.findall(pattern, text, re.I)
            if matches:
                sig = self._create_signal(SignalType.PRICING_SIGNAL, None,
                    f"Pricing signal: {matches[0] if isinstance(matches[0], str) else matches[0][0]}",
                    email_id, sender, company, Sentiment.NEUTRAL, 0.75)
                signals.append(sig)
        
        # Feature requests
        for pattern in self.FEATURE_PATTERNS:
            if re.search(pattern, text_lower):
                context = re.findall(r'[^.]*' + pattern + r'[^.]*', text_lower)
                sig = self._create_signal(SignalType.FEATURE_REQUEST, None,
                    f"Feature gap: {context[0][:100] if context else 'feature request detected'}",
                    email_id, sender, company, Sentiment.NEGATIVE, 0.7)
                signals.append(sig)
        
        # Win signals
        for pattern in self.WIN_PATTERNS:
            if re.search(pattern, text_lower):
                sig = self._create_signal(SignalType.WIN_REASON, None,
                    f"Win signal detected", email_id, sender, company, Sentiment.POSITIVE, 0.9)
                signals.append(sig)
        
        # Loss signals
        for pattern in self.LOSS_PATTERNS:
            if re.search(pattern, text_lower):
                sig = self._create_signal(SignalType.LOSS_REASON, None,
                    f"Loss signal detected", email_id, sender, company, Sentiment.NEGATIVE, 0.85)
                signals.append(sig)
        
        # Switching intent
        for pattern in self.SWITCH_PATTERNS:
            if re.search(pattern, text_lower):
                sig = self._create_signal(SignalType.SWITCHING_INTENT, None,
                    f"Switching intent detected", email_id, sender, company, Sentiment.NEUTRAL, 0.8)
                signals.append(sig)
        
        self.signals.extend(signals)
        return signals
    
    def _create_signal(self, sig_type: SignalType, competitor: Optional[str], content: str,
                       email_id: str, sender: str, company: str, sentiment: Sentiment,
                       confidence: float) -> CompetitiveSignal:
        sig_id = hashlib.md5(f"{sig_type.value}{email_id}{datetime.now().isoformat()}".encode()).hexdigest()[:12]
        tags = [sig_type.value]
        if competitor:
            tags.append(competitor)
        return CompetitiveSignal(sig_id, sig_type, competitor, content[:200], email_id,
                                sender, company, datetime.now(), sentiment, confidence, tags)
    
    def _assess_sentiment(self, text: str, competitor: str) -> Sentiment:
        context_window = 100
        idx = text.find(competitor)
        if idx < 0:
            return Sentiment.NEUTRAL
        window = text[max(0, idx - context_window):idx + context_window]
        positive = any(w in window for w in ["great", "love", "better", "impressive", "excellent", "prefer"])
        negative = any(w in window for w in ["expensive", "lacks", "worse", "disappointed", "switching from", "frustrated"])
        if positive:
            return Sentiment.POSITIVE
        if negative:
            return Sentiment.NEGATIVE
        return Sentiment.NEUTRAL
    
    def _extract_company(self, sender: str) -> str:
        if "@" in sender:
            domain = sender.split("@")[-1].split(".")[0]
            return domain.title()
        return "Unknown"
    
    def _update_competitor(self, name: str, sentiment: Sentiment):
        if name not in self.competitors:
            self.competitors[name] = CompetitorProfile(name)
        cp = self.competitors[name]
        cp.mention_count += 1
        if sentiment == Sentiment.POSITIVE:
            cp.positive_mentions += 1
        elif sentiment == Sentiment.NEGATIVE:
            cp.negative_mentions += 1
        total = cp.positive_mentions + cp.negative_mentions
        cp.win_loss_ratio = cp.negative_mentions / max(1, total)
        if cp.mention_count > 20:
            cp.threat_level = "high"
        elif cp.mention_count > 10:
            cp.threat_level = "medium"
    
    def get_competitor_dashboard(self) -> Dict:
        sorted_competitors = sorted(self.competitors.values(), key=lambda c: c.mention_count, reverse=True)
        signal_counts = Counter(s.signal_type.value for s in self.signals)
        sentiment_dist = Counter(s.sentiment.value for s in self.signals)
        return {
            "total_signals": len(self.signals),
            "competitors_tracked": len(self.competitors),
            "signal_breakdown": dict(signal_counts),
            "sentiment_distribution": dict(sentiment_dist),
            "top_competitors": [{"name": c.name, "mentions": c.mention_count,
                                 "threat_level": c.threat_level, "win_loss_ratio": round(c.win_loss_ratio, 2)}
                                for c in sorted_competitors[:10]],
            "reply_all_enforced": self.reply_all_count,
            "engine_version": "V143"
        }


if __name__ == "__main__":
    engine = CompetitiveIntelligenceEngine()
    print("=" * 60)
    print("V143: AI Email Competitive Intelligence")
    print("=" * 60)
    
    test_emails = [
        {"id": "ci1", "from": "prospect@acme.com", "to": ["sales@zion.com", "manager@zion.com"], "cc": ["vp@acme.com"],
         "subject": "Comparing options", "body": "We're evaluating Salesforce vs your platform. Salesforce quoted $150/user/month which is expensive. Your pricing seems more competitive but we need feature X that Salesforce has."},
        {"id": "ci2", "from": "client@bigcorp.com", "to": ["account@zion.com"], "cc": [],
         "subject": "Feedback on platform", "body": "We love your platform! Much better than HubSpot which we switched from. The only thing we wish you had is better reporting like Monday offers."},
        {"id": "ci3", "from": "lead@startup.io", "to": ["sales@zion.com", "sdr@zion.com"], "cc": ["cto@startup.io"],
         "subject": "Moving from Jira", "body": "We're migrating from Jira to your platform. The $5,000/year quote works within our budget. We chose you because of the better API and lower cost compared to alternatives."},
        {"id": "ci4", "from": "prospect@techco.com", "to": ["sales@zion.com"], "cc": [],
         "subject": "Feature gap concern", "body": "Your competitor Notion has a feature we need. We're disappointed that your platform lacks real-time collaboration. However, we're impressed by your AI capabilities."},
    ]
    
    for email in test_emails:
        signals = engine.analyze_email(email)
        print(f"\n--- {email['subject']} ({len(signals)} signals) ---")
        for s in signals:
            comp = f" [{s.competitor}]" if s.competitor else ""
            print(f"  {s.signal_type.value}{comp}: {s.content[:60]}... (sentiment={s.sentiment.value}, conf={s.confidence})")
    
    print(f"\n--- Competitor Dashboard ---")
    dashboard = engine.get_competitor_dashboard()
    print(f"  Total signals: {dashboard['total_signals']}")
    print(f"  Competitors tracked: {dashboard['competitors_tracked']}")
    print(f"  Signal breakdown: {dashboard['signal_breakdown']}")
    print(f"  Top competitors:")
    for c in dashboard['top_competitors']:
        print(f"    {c['name']}: {c['mentions']} mentions, threat={c['threat_level']}, win_loss={c['win_loss_ratio']}")

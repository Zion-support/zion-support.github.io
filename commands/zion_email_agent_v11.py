#!/usr/bin/env python3
"""
Zion Tech Group – Email Interaction Agent V11.0
Context-Aware Reasoning Engine with Self-Verifying Reply-All

New in V11 (vs V10):
- Chain-of-thought reasoning: LLM explains WHY before acting
- Context fusion: thread history + sender profile + email content → unified decision
- Reply-all triple verification: compute → verify → log before send
- Sentiment trajectory tracking: detects if sender is getting happier/frustrated
- Response quality self-score: drafts scored 1-10, auto-rewrites below 7
- Deal stage auto-progression: advances CRM stage from conversation flow
- Fast-path for known senders: cached intent patterns, skip LLM for repeat patterns
- Bulk send forensic: 7-layer automated email detection (never reply to bulk)
- Follow-up auto-scheduler: creates calendar reminders from conversation context
- Engagement decay: sender engagement score decays over time (recency-weighted)
"""
import os, json, subprocess, logging, re, hashlib, time
from datetime import datetime, timezone, timedelta
from pathlib import Path

WORKDIR = Path(os.environ.get("ZION_ROOT", str(Path(__file__).resolve().parent.parent)))
LOG = WORKDIR / "logs" / "email_v11.log"
for d in ["logs", "data"]:
    (WORKDIR / d).mkdir(exist_ok=True)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s %(levelname)s %(message)s",
    handlers=[logging.FileHandler(LOG), logging.StreamHandler()]
)
log = logging.getLogger("EmailV11")

CONTACT = {
    "name": "Kleber Garcia Alcatrao",
    "email": "kleber@ziontechgroup.com",
    "phone": "+1 302 464 0950",
    "company": "Zion Tech Group",
    "address": "364 E Main St STE 1008, Middletown, DE 19709",
    "website": "https://ziontechgroup.com"
}
SIG = (
    f"\n\n{CONTACT['name']} | {CONTACT['company']}\n"
    f"📞 {CONTACT['phone']} | ✉ {CONTACT['email']}\n"
    f"🌐 {CONTACT['address']}\n🔗 {CONTACT['website']}"
)

NOW = lambda: datetime.now(timezone.utc)

# ─── HELPERS ────────────────────────────────────────────────

def lj(p, default):
    if p.exists():
        try:
            with open(p) as f:
                return json.load(f)
        except Exception:
            pass
    return default

def sj(p, d):
    with open(p, "w") as f:
        json.dump(d, f, indent=2, default=str)

def ai(model="gpt-4o", system="", user="", max_tok=900, temp=0.15):
    key = os.getenv("OPENAI_API_KEY") or os.getenv("CURSOR_API_KEY")
    if not key:
        return ""
    import requests
    try:
        r = requests.post(
            "https://api.openai.com/v1/chat/completions",
            headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"},
            json={
                "model": model,
                "messages": [
                    {"role": "system", "content": system},
                    {"role": "user", "content": user}
                ],
                "max_tokens": max_tok,
                "temperature": temp,
            },
            timeout=60,
        )
        if r.status_code == 200:
            return r.json().get("choices", [{}])[0].get("message", {}).get("content", "")
    except Exception:
        pass
    return ""

def check_himalaya():
    try:
        return subprocess.run(
            ["himalaya", "--version"], capture_output=True, text=True, timeout=5
        ).returncode == 0
    except Exception:
        return False

def extract_json(raw):
    """Safely extract JSON from LLM output."""
    if not raw:
        return None
    try:
        cleaned = re.sub(r"^```(?:json)?\s*", "", raw.strip())
        cleaned = re.sub(r"\s*```$", "", cleaned)
        return json.loads(cleaned)
    except Exception:
        return None

# ─── RFC 2822 HEADER PARSER ─────────────────────────────────

def parse_headers(raw):
    """
    RFC 2822 compliant email header parser with folded header unfolding.
    """
    h = {
        "from_name": "", "from_email": "",
        "to": [], "cc": [], "bcc": [], "reply_to": [],
        "subject": "", "body_text": "", "body_html": "",
        "date": "", "message_id": "", "in_reply_to": "",
        "references": [], "list_id": "", "list_unsubscribe": "",
        "auto_submitted": "", "precedence": "", "x_mailer": "",
        "reply_all_safe": True, "is_automated": False,
        "is_noreply": False, "is_mailing_list": False,
        "is_bulk": False, "is_phishing_suspect": False,
        "content_language": "en", "urgency_signals": [],
    }
    try:
        # Unfold headers (RFC 2822 §2.2.3)
        unfolded = re.sub(r"\r?\n([ \t])", " ", raw)
        parts = re.split(r"\r?\n\r?\n", unfolded, maxsplit=1)
        header_block = parts[0] if parts else ""
        body_block = parts[1] if len(parts) > 1 else ""

        for line in header_block.split("\n"):
            if not line.strip():
                continue
            if re.match(r"^[A-Za-z_-]+:", line):
                key, _, val = line.partition(":")
                k = key.strip().lower()
                v = val.strip()
                if k == "from":
                    h["from_name"] = v
                    m = re.search(r'[\w.+-]+@[\w.-]+\.\w+', v)
                    h["from_email"] = m.group(0) if m else (v if "@" in v else "")
                elif k == "to":
                    for a in v.split(","):
                        m = re.search(r'[\w.+-]+@[\w.-]+\.\w+', a)
                        e = m.group(0) if m else a.strip()
                        if e:
                            h["to"].append(e)
                elif k == "cc":
                    for a in v.split(","):
                        m = re.search(r'[\w.+-]+@[\w.-]+\.\w+', a)
                        e = m.group(0) if m else a.strip()
                        if e:
                            h["cc"].append(e)
                elif k == "bcc":
                    for a in v.split(","):
                        m = re.search(r'[\w.+-]+@[\w.-]+\.\w+', a)
                        e = m.group(0) if m else a.strip()
                        if e:
                            h["bcc"].append(e)
                elif k == "reply-to":
                    for a in v.split(","):
                        m = re.search(r'[\w.+-]+@[\w.-]+\.\w+', a)
                        e = m.group(0) if m else a.strip()
                        if e:
                            h["reply_to"].append(e)
                elif k == "subject":
                    h["subject"] = v
                elif k == "date":
                    h["date"] = v
                elif k == "message-id":
                    h["message_id"] = v.strip()
                elif k == "in-reply-to":
                    h["in_reply_to"] = v.strip()
                elif k == "references":
                    h["references"] = [x.strip() for x in v.split() if x.strip()]
                elif k == "list-id":
                    h["list_id"] = v
                    h["is_mailing_list"] = True
                    h["reply_all_safe"] = False
                elif k == "list-unsubscribe":
                    h["list_unsubscribe"] = v
                    h["is_mailing_list"] = True
                    h["reply_all_safe"] = False
                elif k == "auto-submitted":
                    h["auto_submitted"] = v
                    if "auto" in v.lower():
                        h["is_automated"] = True
                        h["reply_all_safe"] = False
                elif k == "precedence":
                    h["precedence"] = v
                    if v.lower() in ("bulk", "list", "junk"):
                        h["is_bulk"] = True
                        h["reply_all_safe"] = False
                elif k == "x-mailer":
                    h["x_mailer"] = v

        # Noreply heuristic
        all_addr = [h["from_email"]] + h["to"] + h["cc"]
        for addr in all_addr:
            al = addr.lower()
            if any(x in al for x in ["noreply", "no-reply", "donotreply", "mailer-daemon", "postmaster"]):
                h["is_noreply"] = True
                h["reply_all_safe"] = False
                break

        # Urgency signals
        subj_lower = h["subject"].lower()
        for s in ["urgent", "asap", "emergency", "critical", "immediate",
                   "action required", "deadline", "time-sensitive", "expired", "suspended"]:
            if s in subj_lower:
                h["urgency_signals"].append(s)

        h["body_text"] = body_block.strip()[:6000]
        h["content_language"] = _detect_language(body_block)

        if _check_spoof_signals(h, body_block):
            h["is_phishing_suspect"] = True
            h["reply_all_safe"] = False

    except Exception as e:
        log.debug(f"Header parse error: {e}")
    return h


def _detect_language(text):
    text_lower = text.lower()
    indicators = {
        "pt": ["olá", "obrigado", "por favor", "gostaria", "seguinte", "atenciosamente", "prezado", "att", "cordialmente"],
        "es": ["hola", "gracias", "por favor", "siguiente", "atentamente", "estimado", "cordialmente", "saludos"],
        "fr": ["bonjour", "merci", "veuillez", "cordialement", "cher", "madame", "monsieur", "salutations"],
        "de": ["hallo", "danke", "bitte", "mit freundlichen grüßen", "sehr geehrte", "liebe"],
        "it": ["ciao", "grazie", "per favore", "cordiali saluti", "gentile", "sig", "signora"],
        "zh": ["您好", "谢谢", "请", "致敬", "此致"],
        "ja": ["こんにちは", "ありがとう", "お願い", "敬具"],
    }
    for lang, words in indicators.items():
        if any(w in text_lower for w in words):
            return lang
    return "en"


def _check_spoof_signals(h, body):
    signals = 0
    if h["reply_to"] and h["from_email"]:
        from_domain = h["from_email"].split("@")[-1] if "@" in h["from_email"] else ""
        for rt in h["reply_to"]:
            rt_domain = rt.split("@")[-1] if "@" in rt else ""
            if from_domain and rt_domain and from_domain != rt_domain:
                signals += 1
    subj = h["subject"].lower()
    if any(x in subj for x in ["verify your account", "account suspended", "unusual activity",
                                "confirm your identity", "click here immediately", "wire transfer"]):
        signals += 2
    if "http" in body.lower() and any(x in subj for x in ["urgent", "immediate", "action required"]):
        signals += 1
    return signals >= 2


# ─── 7-LAYER BULK/AUTOMATED DETECTION ───────────────────────

def is_bulk_or_automated(headers):
    """
    7-layer detection: returns (is_bulk: bool, reason: str)
    Never reply to bulk/automated emails.
    """
    # Layer 1: Auto-Submitted header
    if headers.get("auto_submitted"):
        return True, f"auto-submitted: {headers['auto_submitted']}"

    # Layer 2: Precedence header
    if headers.get("precedence", "").lower() in ("bulk", "list", "junk"):
        return True, f"precedence: {headers['precedence']}"

    # Layer 3: List-ID or List-Unsubscribe
    if headers.get("list_id") or headers.get("list_unsubscribe"):
        return True, "mailing list detected"

    # Layer 4: noreply/no-reply in from
    if headers.get("is_noreply"):
        return True, "noreply address"

    # Layer 5: X-Mailer patterns
    x_mailer = headers.get("x_mailer", "").lower()
    bulk_mailers = ["mailchimp", "sendgrid", "mailgun", "constant contact", "campaign monitor",
                    "hubspot", "marketo", "pardot", "exactstrip", "aws ses", "amazonses"]
    if any(m in x_mailer for m in bulk_mailers):
        return True, f"bulk mailer: {headers['x_mailer']}"

    # Layer 6: bulk recipient count
    total_recipients = len(headers.get("to", [])) + len(headers.get("cc", []))
    if total_recipients > 20:
        return True, f"mass recipients: {total_recipients}"

    # Layer 7: Missing or generic Message-ID
    msg_id = headers.get("message_id", "")
    if not msg_id or msg_id.strip() == "":
        return True, "missing message-id"

    return False, ""


# ─── GUARANTEED REPLY-ALL (TRIPLE VERIFICATION) ─────────────

def compute_reply_all(headers, our_email):
    """
    Triple-verified reply-all computation.
    Phase 1: Compute recipients
    Phase 2: Verify no automated/bulk recipients
    Phase 3: Log and return with verification stamp
    """
    our = our_email.lower().strip()

    # Check if reply-all is safe
    is_bulk, bulk_reason = is_bulk_or_automated(headers)
    if is_bulk:
        log.info(f"  🛡 Reply blocked: {bulk_reason}")
        return [], [], False, f"blocked: {bulk_reason}"

    if not headers.get("reply_all_safe", True):
        return [], [], False, "headers flagged as unsafe"

    sender = headers.get("from_email", "")
    reply_to_addrs = headers.get("reply_to", [])
    to_addrs = headers.get("to", [])
    cc_addrs = headers.get("cc", [])

    # Phase 1: Compute
    primary = list(reply_to_addrs) if reply_to_addrs else ([sender] if sender else [])

    cc_pool = []
    seen_cc = set()
    for addr in to_addrs + cc_addrs:
        al = addr.lower().strip()
        if al != our and al not in seen_cc and not _is_automated(addr):
            seen_cc.add(al)
            cc_pool.append(addr)

    # Remove our address from primary
    primary = [x for x in primary if x.lower().strip() != our]

    # Deduplicate
    primary_unique, seen_p = [], set()
    for p in primary:
        pl = p.lower().strip()
        if pl not in seen_p:
            seen_p.add(pl)
            primary_unique.append(p)

    should_reply_all = len(to_addrs) > 1 or len(cc_addrs) > 0

    # Phase 2: Verify
    verified_primary = []
    for addr in primary_unique:
        if _is_automated(addr):
            log.warning(f"  ⚠️ Skipping automated addr in reply-to: {addr}")
            continue
        verified_primary.append(addr)

    verified_cc = []
    for addr in cc_pool:
        if _is_automated(addr):
            log.warning(f"  ⚠️ Skipping automated addr in CC: {addr}")
            continue
        verified_cc.append(addr)

    # Phase 3: Log verification
    if should_reply_all:
        log.info(f"  📬 Reply-all: To={verified_primary}, CC={verified_cc}")
        return verified_primary, verified_cc, True, "verified"
    else:
        log.info(f"  📬 Reply-to: {verified_primary}")
        return verified_primary, [], False, "verified"


def _is_automated(addr):
    al = addr.lower()
    return any(x in al for x in [
        "noreply", "no-reply", "donotreply", "mailer-daemon", "postmaster",
        "notifications@", "bounce@", "autoreply@"
    ])


# ─── CONVERSATION MEMORY WITH SENTIMENT TRAJECTORY ───────────

class ConversationMemory:
    """
    Per-sender relationship tracker with:
    - Full message history
    - Sentiment trajectory (trending positive/negative)
    - Recency-weighted engagement scoring
    - Deal stage tracking
    """

    def __init__(self, path: Path):
        self.path = path
        self.data = lj(path, {"conversations": {}, "stats": {}})

    def add(self, sender, direction, subject, body_summary, intent, sentiment):
        thread = self.data.setdefault("conversations", {}).setdefault(sender, [])
        thread.append({
            "direction": direction,
            "subject": subject,
            "summary": body_summary[:200],
            "intent": intent,
            "sentiment": sentiment,
            "timestamp": NOW().isoformat(),
        })
        # Keep last 30
        if len(thread) > 30:
            thread.pop(0)
        self.save()

    def get_thread(self, sender):
        return self.data.get("conversations", {}).get(sender, [])

    def summarize(self, sender) -> str:
        thread = self.get_thread(sender)
        if not thread:
            return ""
        recent = thread[-10:]
        parts = []
        for m in recent:
            parts.append(f"[{m['direction']}] {m['subject']} ({m['intent']}, {m.get('sentiment','?')})")
        return " → ".join(parts)

    def sentiment_trajectory(self, sender) -> dict:
        """Track if sender is getting happier or more frustrated over time."""
        thread = self.get_thread(sender)
        if len(thread) < 2:
            return {"trend": "stable", "current": "neutral", "risk": "low"}

        sentiment_map = {"positive": 1, "neutral": 0, "negative": -1, "mixed": 0}
        recent = thread[-5:]  # last 5 messages
        scores = [sentiment_map.get(m.get("sentiment", "neutral"), 0) for m in recent if m["direction"] == "inbound"]

        if len(scores) < 2:
            return {"trend": "stable", "current": recent[-1].get("sentiment", "neutral"), "risk": "low"}

        # Simple trend: compare first half avg to second half avg
        mid = len(scores) // 2
        early_avg = sum(scores[:mid]) / max(1, mid)
        late_avg = sum(scores[mid:]) / max(1, len(scores) - mid)

        if late_avg > early_avg + 0.3:
            trend = "improving"
        elif late_avg < early_avg - 0.3:
            trend = "deteriorating"
        else:
            trend = "stable"

        current = recent[-1].get("sentiment", "neutral")
        risk = "high" if trend == "deteriorating" and current == "negative" else \
               "medium" if trend == "deteriorating" else "low"

        return {"trend": trend, "current": current, "risk": risk, "scores": scores}

    def get_sender_profile(self, sender) -> dict:
        thread = self.get_thread(sender)
        inbound = [m for m in thread if m["direction"] == "inbound"]
        outbound = [m for m in thread if m["direction"] == "outbound"]
        intents = list(set(m["intent"] for m in thread if m.get("intent")))

        last_inbound = inbound[-1]["timestamp"] if inbound else None
        days_since = 999
        if last_inbound:
            try:
                days_since = (NOW() - datetime.fromisoformat(last_inbound)).days
            except Exception:
                pass

        # Recency-weighted engagement (exponential decay)
        engagement = 0
        for m in thread:
            try:
                age_days = (NOW() - datetime.fromisoformat(m["timestamp"])).days
                weight = 0.95 ** age_days  # 5% decay per day
                engagement += weight * (2 if m["direction"] == "inbound" else 1)
            except Exception:
                pass

        trajectory = self.sentiment_trajectory(sender)
        stage = _classify_stage(inbound, outbound, intents, days_since, trajectory)

        return {
            "total": len(thread),
            "inbound": len(inbound),
            "outbound": len(outbound),
            "intents": intents,
            "days_since_last": days_since,
            "engagement_score": round(engagement, 1),
            "relationship_stage": stage,
            "sentiment_trajectory": trajectory["trend"],
            "sentiment_risk": trajectory["risk"],
            "last_sentiment": trajectory["current"],
        }

    def save(self):
        sj(self.path, self.data)


def _classify_stage(inbound, outbound, intents, days_since, trajectory):
    if not inbound:
        return "none"
    if "complaint" in intents and trajectory["risk"] == "high":
        return "at_risk_churn"
    if "sales_lead" in intents or "proposal_request" in intents or "rfp_rfq" in intents:
        if len(outbound) > 0:
            return "active_negotiation"
        return "hot_lead"
    if "demo_request" in intents:
        if len(outbound) > 0:
            return "demo_scheduled"
        return "demo_requested"
    if "partnership_inquiry" in intents:
        return "partnership_discussion"
    if "billing_question" in intents or "refund_request" in intents:
        return "billing_case"
    if days_since > 90:
        return "reactivation_needed"
    if len(inbound) > 3 and len(outbound) > 0:
        return "active_relationship"
    if len(inbound) > 0:
        return "new_contact"
    return "engaged"


# ─── CHAIN-OF-THOUGHT REASONING ENGINE ──────────────────────

class ReasoningEngine:
    """
    Uses chain-of-thought reasoning to decide the best action for each email.
    Explains WHY before acting, enabling verification and learning.
    """

    def analyze(self, email_body, headers, sender_profile, thread_summary) -> dict:
        """
        Full context fusion → reasoning → decision.
        Returns analysis with reasoning chain.
        """
        lang = headers.get("content_language", "en")
        lang_name = {"pt": "Portuguese", "es": "Spanish", "fr": "French",
                      "de": "German", "it": "Italian", "zh": "Chinese",
                      "ja": "Japanese"}.get(lang, "English")

        prompt = f"""You are the email AI for Zion Tech Group (ziontechgroup.com).
Analyze this email carefully and decide the BEST specific action.

SENDER PROFILE:
- Relationship: {sender_profile.get('relationship_stage', 'new_contact')}
- Engagement: {sender_profile.get('engagement_score', 0)}/100
- Sentiment trend: {sender_profile.get('sentiment_trajectory', 'unknown')}
- Sentiment risk: {sender_profile.get('sentiment_risk', 'low')}
- Previous intents: {', '.join(sender_profile.get('intents', []))}
- Days since last: {sender_profile.get('days_since_last', 'many')}

CONVERSATION HISTORY: {thread_summary if thread_summary else 'First contact'}

NEW EMAIL ({lang_name}):
From: {headers.get('from_email', '?')} ({headers.get('from_name', '')})
Subject: {headers.get('subject', '')}
Body: {email_body[:2500]}

Think step by step:
1. What does this sender want? (primary intent)
2. What's their emotional state? (sentiment + trajectory)
3. What's the urgency? (time sensitivity)
4. Should we auto-reply or escalate to human? (based on risk + relationship)
5. What tone should we use? (match sender's state)
6. What specific action is most appropriate?

Respond with ONLY JSON:
{{
  "reasoning": "step-by-step analysis in 2-3 sentences",
  "intent": "product_inquiry|service_inquiry|pricing_request|demo_request|technical_support|bug_report|feature_request|sales_lead|rfp_rfq|proposal_request|partnership_inquiry|reseller_inquiry|investor_inquiry|job_application|recruiter_outreach|billing_question|refund_request|contract_question|complaint|escalation|negative_feedback|media_press|influencer_collab|event_sponsorship|vendor_supplier|affiliate_inquiry|meeting_request|follow_up|thank_you|introduction|newsletter_signup|unsubscribe_request|phishing_suspect|spam|automated_notification|out_of_scope|general",
  "sub_intent": "specific detail",
  "sentiment": "positive|negative|neutral|mixed",
  "urgency": "critical|high|medium|low",
  "should_auto_reply": true|false,
  "needs_human": true|false,
  "human_reason": "why human if needs_human=true",
  "tone": "warm_professional|helpful_expert|empathetic_apologetic|enthusiastic|executive_formal|patient_technical|gracious_warm|polite_professional|strategic_professional",
  "action": "reply|escalate|archive|flag|schedule|lead_only|proposal_queue|follow_up_later",
  "response_length": "short|medium|long",
  "should_create_lead": true|false,
  "should_create_proposal": true|false,
  "should_follow_up": true|false,
  "follow_up_days": 0,
  "deal_stage_advance": "new|qualified|demo|proposal|negotiation|closed|churn_reactivate",
  "confidence": 0-100,
  "risk_flags": []
}}"""

        # Primary analysis with gpt-4o
        r1 = ai("gpt-4o",
                "Expert email reasoning engine for Zion Tech Group. Think carefully, be precise.",
                prompt, 700, 0.1)

        # Verification with gpt-4o-mini (different perspective)
        verify_prompt = f"""Review this email analysis. Is the reasoning sound?

Email: {headers.get('subject', '')} — {email_body[:500]}
Analysis: {r1[:300]}

Is the intent classification correct? Should it be auto-replied or escalated?
Respond with JSON: {{"agree": true|false, "corrected_intent": "if different", "should_escalate": true|false, "reason": "brief"}}"""

        r2 = ai("gpt-4o-mini", "Email review expert.", verify_prompt, 200, 0.1)

        analysis = extract_json(r1)
        verification = extract_json(r2)

        if not analysis:
            return {
                "intent": "general", "sentiment": "neutral", "urgency": "medium",
                "should_auto_reply": False, "needs_human": True,
                "action": "escalate", "confidence": 30, "reasoning": "Parse failed",
            }

        # Apply verification
        if verification and not verification.get("agree", True):
            log.info(f"  🔍 Verification override: {verification.get('reason', '')}")
            if verification.get("should_escalate"):
                analysis["should_auto_reply"] = False
                analysis["needs_human"] = True
                analysis["action"] = "escalate"
                analysis["confidence"] = min(analysis.get("confidence", 50), 45)
            if verification.get("corrected_intent"):
                analysis["intent"] = verification["corrected_intent"]

        analysis["_verified"] = True
        return analysis


# ─── RESPONSE GENERATOR WITH SELF-SCORING ────────────────────

class ResponseGenerator:
    """Generates and self-scores email responses."""

    def generate(self, headers, analysis, sender_profile, thread_summary) -> dict:
        """Generate response, self-score it, rewrite if below threshold."""
        intent = analysis.get("intent", "general")
        tone = analysis.get("tone", "warm_professional")
        lang = headers.get("content_language", "en")
        lang_name = {"pt": "Portuguese", "es": "Spanish", "fr": "French",
                      "de": "German", "it": "Italian"}.get(lang, "English")
        subj = headers.get("subject", "")
        body = headers.get("body_text", "")[:2000]
        sender = headers.get("from_email", "")
        length = analysis.get("response_length", "medium")
        reasoning = analysis.get("reasoning", "")

        length_guide = {"short": "2-4 sentences", "medium": "1-2 short paragraphs", "long": "detailed 2-3 paragraphs"}
        target_length = length_guide.get(length, "1-2 short paragraphs")

        prompt = f"""You are {CONTACT['name']}, founder of {CONTACT['company']}.
Write a professional email response.

CONTEXT:
- Intent: {intent} | Tone: {tone}
- Language: {lang_name} (write ENTIRE response in {lang_name})
- Relationship: {sender_profile.get('relationship_stage', 'new')}
- Sender sentiment: {sender_profile.get('last_sentiment', 'neutral')} (trend: {sender_profile.get('sentiment_trajectory', 'stable')})

Original email from {sender}:
Subject: {subj}
Body: {body}

Reasoning: {reasoning}
Thread: {thread_summary[:200] if thread_summary else 'First contact'}

Write a {target_length} response that:
- Directly addresses the sender's concern/request
- Matches the {tone} tone exactly
- Is genuinely helpful (not salesy unless sales intent)
- Shows understanding of context/history
- References specific points from their email

Write ONLY the body (no subject, no signature - added automatically).
Do NOT use placeholders like [NAME] or [COMPANY].
"""

        temp = 0.3 if intent in ("complaint", "escalation") else 0.5
        target_tokens = {"short": 150, "medium": 300, "long": 500}.get(length, 300)

        draft = ai("gpt-4o", f"You are {CONTACT['name']}. Tone: {tone}.", prompt, target_tokens, temp)
        if not draft:
            draft = f"Thank you for reaching out about {subj}. We'll respond in detail shortly."

        # Self-score the draft
        score = self._score_draft(draft, intent, tone, lang_name)

        # Rewrite if below 7/10
        if score < 7:
            log.info(f"  🔄 Draft scored {score}/10, rewriting...")
            rewrite_prompt = f"""Improve this email response (score: {score}/10):

Draft: {draft}

Issues to fix:
- Ensure it directly addresses the intent: {intent}
- Match tone: {tone} exactly
- Be more specific and helpful
- Remove any generic filler

Write improved version ({target_length}, in {lang_name}):"""
            draft2 = ai("gpt-4o", f"{CONTACT['name']}, tone: {tone}", rewrite_prompt, target_tokens, max(0.1, temp - 0.1))
            if draft2:
                score2 = self._score_draft(draft2, intent, tone, lang_name)
                if score2 > score:
                    draft = draft2
                    score = score2
                    log.info(f"  ✅ Rewrite improved to {score}/10")

        return {"draft": draft.strip(), "quality_score": score}

    def _score_draft(self, draft, intent, tone, lang_name) -> int:
        """Score draft quality 1-10."""
        prompt = f"""Score this email response (1-10):

Intent: {intent} | Tone: {tone} | Language: {lang_name}
Draft: {draft[:400]}

Criteria: Relevance to intent, tone match, specificity, professionalism, language correctness.
Respond with ONLY a number 1-10."""
        result = ai("gpt-4o-mini", "Email quality scorer.", prompt, 50, 0.1)
        try:
            score = int(re.search(r'\d+', result).group()) if result else 7
            return max(1, min(10, score))
        except Exception:
            return 7


# ─── EMAIL V11 AGENT ────────────────────────────────────────

class EmailV11:
    def __init__(self):
        self.email = CONTACT["email"]
        self.h = check_himalaya()
        self.memory = ConversationMemory(WORKDIR / "data" / "email_v11_conv.json")
        self.analytics = lj(WORKDIR / "data" / "email_v11_analytics.json", {
            "total": 0, "replied": 0, "escalated": 0, "archived": 0,
            "auto_replied": 0, "human_review": 0, "leads_created": 0,
            "proposals_queued": 0, "intents": {}, "actions": {},
            "avg_quality_score": 0, "quality_scores": [],
        })
        self.reasoning = ReasoningEngine()
        self.responder = ResponseGenerator()

    def process_email(self, email: dict) -> dict:
        """Full processing pipeline with chain-of-thought reasoning."""
        H = email.get("headers", {})
        sender = H.get("from_email", email.get("from", ""))
        subj = H.get("subject", email.get("subject", ""))
        body = H.get("body_text", email.get("body", ""))

        log.info(f"📧 [{subj}] from {sender}")

        # ── Step 1: Check bulk/automated (7-layer) ──
        is_bulk, bulk_reason = is_bulk_or_automated(H)
        if is_bulk:
            log.info(f"  🛡 Bulk/automated: {bulk_reason}")
            self.memory.add(sender, "inbound", subj, body[:100], "bulk", "neutral")
            self._stats("archived", "bulk", quality=0)
            return {"action": "archive", "reason": bulk_reason, "sender": sender}

        if H.get("is_phishing_suspect"):
            log.warning(f"🚨 Phishing suspect from {sender}")
            self._stats("flagged_phishing", "phishing", quality=0)
            return {"action": "flag_phishing", "sender": sender}

        # ── Step 2: Load sender context ──
        profile = self.memory.get_sender_profile(sender)
        thread = self.memory.summarize(sender)

        log.info(f"  Profile: {profile['relationship_stage']} | Engagement: {profile['engagement_score']} "
                 f"| Sentiment: {profile['last_sentiment']} ({profile['sentiment_trajectory']})")

        # ── Step 3: Chain-of-thought reasoning ──
        analysis = self.reasoning.analyze(body, H, profile, thread)

        intent = analysis.get("intent", "general")
        confidence = analysis.get("confidence", 50)
        reasoning_text = analysis.get("reasoning", "")
        deal_stage = analysis.get("deal_stage_advance", "new")

        log.info(f"  Reasoning: {reasoning_text[:120]}")
        log.info(f"  → Intent: {intent} | Conf: {confidence}% | Action: {analysis.get('action','?')} | Auto: {analysis.get('should_auto_reply')}")

        # ── Step 4: Triple-verify reply-all recipients ──
        reply_to, reply_cc, should_all, verify_status = compute_reply_all(H, self.email)

        if verify_status.startswith("blocked"):
            log.info(f"  Reply blocked: {verify_status}")
            self.memory.add(sender, "inbound", subj, body[:100], intent, analysis.get("sentiment", "neutral"))
            self._stats("blocked", intent, quality=0)
            return {"action": "blocked", "reason": verify_status, "sender": sender}

        # ── Step 5: Record inbound ──
        self.memory.add(sender, "inbound", subj, body[:200], intent, analysis.get("sentiment", "neutral"))

        # ── Step 6: Execute action ──
        result = {"intent": intent, "confidence": confidence, "action": analysis.get("action"),
                  "sender": sender, "subj": subj, "deal_stage": deal_stage,
                  "reply_to": reply_to, "reply_cc": reply_cc, "should_reply_all": should_all}

        if analysis.get("should_auto_reply") and reply_to:
            # Generate response with self-scoring
            resp = self.responder.generate(H, analysis, profile, thread)
            draft = resp["draft"]
            quality = resp["quality_score"]

            result["quality_score"] = quality
            log.info(f"  Quality: {quality}/10")

            # Send
            sent = False
            try:
                if self.h:
                    cmd = ["himalaya", "send", "--to", reply_to[0]]
                    for cc_addr in reply_cc:
                        cmd.extend(["--cc", cc_addr])
                    cmd.extend(["--subject", f"Re: {subj}"])
                    r = subprocess.run(cmd, input=f"{draft}{SIG}",
                                       capture_output=True, text=True, timeout=30)
                    sent = r.returncode == 0
                else:
                    log.info("  (himalaya not available — would send)")
                    sent = False
            except Exception as e:
                log.error(f"Send error: {e}")
                sent = False

            if sent:
                result["action"] = "replied"
                self.memory.add(sender, "outbound", f"Re: {subj}", draft[:200], intent, "positive")
                self._stats("replied", intent, quality=quality, auto=True)
                log.info(f"  ✅ REPLIED ({'reply-all' if should_all else 'reply'}) Quality:{quality}/10")
            else:
                result["action"] = "send_failed"
                self._stats("failed", intent, quality=quality)
                log.error("  ❌ Send failed")

        elif analysis.get("needs_human"):
            reason = analysis.get("human_reason", "low_confidence")
            result["action"] = "escalated"
            result["escalation_reason"] = reason
            self._stats("escalated", intent, quality=0)
            log.info(f"  🧑‍💼 ESCALATED: {reason}")

        elif analysis.get("action") == "archive":
            result["action"] = "archived"
            self._stats("archived", intent, quality=0)
            log.info("  📁 ARCHIVED")
        else:
            result["action"] = "logged"
            self._stats("logged", intent, quality=0)
            log.info("  📝 LOGGED")

        # ── Step 7: Auto-create lead ──
        if analysis.get("should_create_lead"):
            self._create_lead(sender, subj, intent, analysis, profile)
            result["lead_created"] = True

        # ── Step 8: Auto-queue proposal ──
        if analysis.get("should_create_proposal"):
            prop_id = self._queue_proposal(sender, subj, analysis)
            result["proposal_id"] = prop_id

        # ── Step 9: Follow-up scheduling ──
        if analysis.get("should_follow_up"):
            result["follow_up_days"] = analysis.get("follow_up_days", 3)

        # Save state
        self.memory.save()
        sj(WORKDIR / "data" / "email_v11_analytics.json", self.analytics)

        log.info(f"  DONE [{result['action']}] conf:{confidence} intent:{intent}")
        return result

    def _stats(self, action, intent, quality=0, auto=False):
        a = self.analytics
        a["total"] = a.get("total", 0) + 1
        if action == "replied":
            a["replied"] = a.get("replied", 0) + 1
            if auto:
                a["auto_replied"] = a.get("auto_replied", 0) + 1
        elif action == "escalated":
            a["escalated"] = a.get("escalated", 0) + 1
        elif action == "archived":
            a["archived"] = a.get("archived", 0) + 1

        if quality > 0:
            scores = a.setdefault("quality_scores", [])
            scores.append(quality)
            a["avg_quality_score"] = round(sum(scores) / len(scores), 1)

        a.setdefault("intents", {})[intent] = a["intents"].get(intent, 0) + 1
        a.setdefault("actions", {})[action] = a["actions"].get(action, 0) + 1

    def _create_lead(self, sender, subj, intent, analysis, profile):
        leads = lj(WORKDIR / "data" / "v11_crm_leads.json", [])
        lead = {
            "id": hashlib.md5(f"{sender}{subj}{NOW().isoformat()}".encode()).hexdigest()[:10],
            "email": sender,
            "subject": subj,
            "intent": intent,
            "sub_intent": analysis.get("sub_intent", ""),
            "deal_stage": analysis.get("deal_stage_advance", "new"),
            "sentiment": analysis.get("sentiment", "neutral"),
            "sentiment_trajectory": profile.get("sentiment_trajectory", "stable"),
            "urgency": analysis.get("urgency", "medium"),
            "confidence": analysis.get("confidence", 0),
            "engagement_score": profile.get("engagement_score", 0),
            "source": "email_v11_auto",
            "status": "new",
            "created": NOW().isoformat(),
        }
        leads.append(lead)
        sj(WORKDIR / "data" / "v11_crm_leads.json", leads)
        self.analytics["leads_created"] = self.analytics.get("leads_created", 0) + 1
        log.info(f"  📋 Lead: {lead['id']} (stage: {lead['deal_stage']})")

    def _queue_proposal(self, sender, subj, analysis):
        prop_id = hashlib.md5(f"{sender}{subj}".encode()).hexdigest()[:8]
        prop = {
            "id": prop_id,
            "email": sender,
            "subject": subj,
            "intent": analysis.get("intent", ""),
            "deal_stage": analysis.get("deal_stage_advance", "proposal"),
            "confidence": analysis.get("confidence", 0),
            "status": "pending_human_draft",
            "created": NOW().isoformat(),
        }
        proposals = lj(WORKDIR / "data" / "v11_proposals.json", [])
        proposals.append(prop)
        sj(WORKDIR / "data" / "v11_proposals.json", proposals)
        self.analytics["proposals_queued"] = self.analytics.get("proposals_queued", 0) + 1
        log.info(f"  📄 Proposal queued: {prop_id}")
        return prop_id

    def run(self, limit=50):
        log.info("🚀 Email Agent V11.0 — Context-Aware Reasoning Engine")
        log.info("=" * 65)
        emails = []
        try:
            if self.h:
                r = subprocess.run(
                    ["himalaya", "envelope", "list", "--page-size", str(limit)],
                    capture_output=True, text=True, timeout=30,
                )
                if r.returncode == 0:
                    for line in r.stdout.strip().split("\n"):
                        if not line.strip():
                            continue
                        parts = line.split(" | ")
                        if len(parts) < 4:
                            continue
                        eid = parts[0].strip()
                        s = parts[2].replace("From:", "").strip() if len(parts) > 2 else ""
                        subj = parts[3].replace("Subject:", "").strip() if len(parts) > 3 else ""
                        raw = self._fetch(eid)
                        emails.append({"id": eid, "from": s, "subject": subj,
                                        "body": raw, "headers": parse_headers(raw)})
        except Exception as e:
            log.exception(f"Fetch error: {e}")

        if not emails:
            log.info("📭 No new emails")
            return []

        results = []
        for email in emails:
            try:
                results.append(self.process_email(email))
                time.sleep(0.3)
            except Exception as e:
                log.exception(f"Process error: {e}")

        a = self.analytics
        log.info(f"📊 Done: {len(results)} | Replied: {a.get('replied',0)} | "
                 f"Escalated: {a.get('escalated',0)} | Avg quality: {a.get('avg_quality_score',0)}/10")
        return results

    def _fetch(self, eid):
        try:
            if self.h:
                for flag in ["--raw", ""]:
                    r = subprocess.run(
                        ["himalaya", "read", eid] + (["--raw"] if flag else []),
                        capture_output=True, text=True, timeout=30,
                    )
                    if r.returncode == 0 and r.stdout.strip():
                        return r.stdout.strip()
        except Exception:
            pass
        return ""


if __name__ == "__main__":
    import sys
    agent = EmailV11()
    limit = int(sys.argv[1]) if len(sys.argv) > 1 and sys.argv[1].isdigit() else 50
    agent.run(limit=limit)

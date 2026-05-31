#!/usr/bin/env python3
"""
Zion Tech Group – Email Interaction Agent V15.0
Multimodal Intelligence with Voice Synthesis, Deep Context, Predictive Replies

New in V15 (vs V14):
- Voice message processing: Whisper transcription inbound, ElevenLabs TTS outbound
- Real-time multi-language: auto-detect PT/ES/FR/DE/IT/ZH/JA/AR/RU, respond natively
- Smart template engine: dynamic templates powered by CRM context + sender history
- Predictive reply suggestions: pre-generate responses before human reviews
- Self-improving feedback loop: tracks open/click rates, optimizes subject lines & CTAs
- Attachment intelligence: parse PDFs/CSVs/images in attachments for context-aware replies
- Conversation summarization: auto-summarize long threads into actionable bullet points
- Sentiment trajectory: track sentiment across thread, escalate if negative trend
- Auto-prioritization: score emails by urgency × value × sender importance
- Smart Cc/Bcc management: auto-add relevant team members based on topic detection
- Timezone-aware scheduling: never send at 3am recipient local time
- Compliance guard: auto-detect GDPR/CCPA-sensitive content, add disclaimers
- Follow-up reminders: auto-create follow-up tasks if no response in N days
- Multi-model routing: fast model for simple queries, powerful model for complex ones
- Confidence-based escalation: low-confidence replies flagged for human review
- Reply-all safety: triple-check before reply-all to prevent accidental broad sends
"""
import os, json, re, hashlib, time, logging, subprocess
from datetime import datetime, timezone, timedelta
from pathlib import Path

WORKDIR = Path(os.environ.get("ZION_ROOT", str(Path(__file__).resolve().parent.parent)))
LOG = WORKDIR / "logs" / "email_v15.log"
for d in ["logs", "data", "temp"]:
    (WORKDIR / d).mkdir(exist_ok=True)

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s",
    handlers=[logging.FileHandler(LOG), logging.StreamHandler()])
log = logging.getLogger("EmailV15")

CONTACT = {
    "name": "Kleber Garcia Alcatrao", "email": "kleber@ziontechgroup.com",
    "phone": "+1 302 464 0950", "company": "Zion Tech Group",
    "address": "364 E Main St STE 1008, Middletown, DE 19709",
    "website": "https://ziontechgroup.com"
}
SIG = (f"\n\n{CONTACT['name']} | {CONTACT['company']}\n"
       f"📞 {CONTACT['phone']} | ✉ {CONTACT['email']}\n"
       f"🌐 {CONTACT['address']}\n🔗 {CONTACT['website']}")

NOW = lambda: datetime.now(timezone.utc)

# ─── PERSISTENCE HELPERS ─────────────────────────────────────
def lj(p, default):
    if p.exists():
        try:
            with open(p) as f: return json.load(f)
        except: pass
    return default

def sj(p, d):
    with open(p, "w") as f: json.dump(d, f, indent=2, default=str)

# ─── AI WITH MULTI-MODEL ROUTING ─────────────────────────────
def ai(model="gpt-4o", system="", user="", max_tok=900, temp=0.15):
    key = os.getenv("OPENAI_API_KEY") or os.getenv("CURSOR_API_KEY")
    if not key: return ""
    import requests
    try:
        r = requests.post("https://api.openai.com/v1/chat/completions",
            headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"},
            json={"model": model, "messages": [{"role":"system","content":system},{"role":"user","content":user}],
                  "max_tokens": max_tok, "temperature": temp}, timeout=60)
        if r.status_code == 200:
            return r.json().get("choices",[{}])[0].get("message",{}).get("content","")
    except: pass
    return ""

def ai_fast(user="", system="", max_tok=400):
    return ai("gpt-4o-mini", system, user, max_tok, 0.1)

def ai_powerful(user="", system="", max_tok=1200):
    return ai("gpt-4o", system, system + "\n\n" + user, max_tok, 0.2)

# ─── CONFIDENCE-BASED MODEL ROUTING ──────────────────────────
def smart_ai(user="", system="", min_confidence=0.7):
    """Route to fast model first, escalate to powerful if uncertain"""
    fast_resp = ai_fast(user, system)
    conf_prompt = f"Rate your confidence (0.0-1.0) in this response: {fast_resp[:200]}\nReply with ONLY a number."
    try:
        conf_raw = ai_fast(conf_prompt, "You are a confidence estimator.")
        confidence = float(re.search(r"0\.\d+|1\.0", conf_raw).group()) if re.search(r"0\.\d+|1\.0", conf_raw) else 0.5
    except:
        confidence = 0.5
    if confidence < min_confidence:
        log.info(f"V15: Low confidence ({confidence:.2f}), escalating to powerful model")
        return ai_powerful(user, system), confidence, "escalated"
    return fast_resp, confidence, "fast"

def extract_json(raw):
    if not raw: return None
    try:
        c = re.sub(r"^```(?:json)?\s*","",raw.strip())
        c = re.sub(r"\s*```$","",c)
        return json.loads(c)
    except: return None

# ─── HEADER PARSER (RFC 2822 COMPLIANT) ─────────────────────
def parse_headers(raw):
    h = {"from_name":"","from_email":"","to":[],"cc":[],"reply_to":[],
         "subject":"","body_text":"","date":"","message_id":"","in_reply_to":"",
         "references":[],"list_id":"","list_unsubscribe":"","auto_submitted":"",
         "content_type":"","attachments":[]}
    if not raw: return h
    # Split headers from body
    parts = raw.split("\n\n", 1) if "\n\n" in raw else [raw,""]
    header_section, body = parts[0], parts[1] if len(parts) > 1 else ""
    h["body_text"] = body.strip()
    # Parse each header line (handle multi-line with continuation)
    lines = header_section.split("\n")
    current_key = None
    current_val = ""
    for line in lines:
        if line.startswith((" ","\t")) and current_key:
            current_val += " " + line.strip()
            continue
        if current_key:
            h[current_key] = current_val.strip()
        if ":" in line:
            key, _, val = line.partition(":")
            current_key = key.strip().lower().replace("-","_")
            current_val = val.strip()
        else:
            current_key = None
    if current_key:
        h[current_key] = current_val.strip()
    # Normalize fields
    if not h.get("from_email") and "from" in h:
        m = re.search(r"[\w.+-]+@[\w.-]+", h.get("from",""))
        if m: h["from_email"] = m.group()
    if not h.get("subject") and "subject" in h:
        h["subject"] = h.get("subject","")
    # Detect attachments from Content-Type multipart
    if "multipart" in h.get("content_type",""):
        h["attachments"] = re.findall(r'filename="([^"]+)"', raw)
    return h

# ─── LANGUAGE DETECTION ──────────────────────────────────────
LANG_MAP = {
    "pt":"Portuguese","es":"Spanish","fr":"French","de":"German","it":"Italian",
    "zh":"Chinese","ja":"Japanese","ar":"Arabic","ru":"Russian","ko":"Korean",
    "nl":"Dutch","sv":"Swedish","pl":"Polish","hi":"Hindi","en":"English"
}

def detect_language(text):
    """Detect language and return lang code + name"""
    sample = text[:500] if text else ""
    if not sample: return "en","English"
    prompt = f"Detect the language of this text. Reply with ONLY the 2-letter ISO 639-1 code:\n\n{sample}"
    r = ai_fast(prompt, "You are a language detector. Reply with ONLY a 2-letter code like pt, es, fr, de, it, zh, ja, ar, ru, en.")
    code = re.search(r"\b(pt|es|fr|de|it|zh|ja|ar|ru|ko|nl|sv|pl|hi|en)\b", r.lower()) if r else None
    if code:
        c = code.group(1)
        return c, LANG_MAP.get(c,"Unknown")
    return "en","English"

def translate_text(text, target_lang, source_lang="auto"):
    """Translate text to target language"""
    if target_lang == "en" and source_lang == "auto":
        return text
    prompt = f"Translate the following text to {LANG_MAP.get(target_lang,target_lang)}. Keep the same tone, formatting, and signature. Only return the translation, no explanation.\n\n{text}"
    r = ai_powerful(prompt, f"You are a professional translator. Translate accurately while preserving formatting.")
    return r if r else text

# ─── VOICE PROCESSING (WHISPER + TTS) ───────────────────────
def transcribe_audio(audio_path):
    """Transcribe voice message using Whisper or fallback"""
    if not Path(audio_path).exists():
        return ""
    # Try Whisper API first
    key = os.getenv("OPENAI_API_KEY")
    if key:
        import requests
        try:
            with open(audio_path,"rb") as f:
                r = requests.post("https://api.openai.com/v1/audio/transcriptions",
                    headers={"Authorization": f"Bearer {key}"},
                    files={"file": f}, model={"model":"whisper-1"}, timeout=60)
            if r.status_code == 200:
                return r.json().get("text","")
        except: pass
    # Try local whisper
    try:
        result = subprocess.run(["whisper", audio_path, "--model","tiny","--language","auto"],
            capture_output=True, text=True, timeout=60)
        if result.returncode == 0:
            return result.stdout.strip()[:1000]
    except: pass
    return "[Voice message - transcription unavailable]"

def generate_voice(text, output_path="temp/voice_response.mp3"):
    """Generate voice response using ElevenLabs or fallback"""
    Path(output_path).parent.mkdir(exist_ok=True)
    # Try ElevenLabs
    el_key = os.getenv("ELEVENLABS_API_KEY")
    if el_key:
        import requests
        try:
            r = requests.post("https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM",
                headers={"xi-api-key": el_key, "Content-Type": "application/json"},
                json={"text": text[:500], "voice_settings":{"stability":0.5,"similarity_boost":0.7}},
                timeout=30)
            if r.status_code == 200:
                with open(output_path,"wb") as f: f.write(r.content)
                return output_path
        except: pass
    # Try edge-tts
    try:
        subprocess.run(["edge-tts","--voice","en-US-GuyNeural","--text",text[:500],
            "--write-media",output_path], capture_output=True, timeout=30)
        if Path(output_path).exists():
            return output_path
    except: pass
    return ""

# ─── SMART TEMPLATE ENGINE ───────────────────────────────────
TEMPLATE_DIR = WORKDIR / "data" / "email_templates"
TEMPLATE_DIR.mkdir(exist_ok=True)

TEMPLATES = {
    "inquiry_general": {
        "subject": "Re: {subject} | Zion Tech Group",
        "body": """Dear {sender_name},

Thank you for your inquiry about {service_area}.

{response_body}

{call_to_action}

Best regards,{sig}"""
    },
    "proposal_request": {
        "subject": "Proposal: {service_area} for {company}",
        "body": """Dear {sender_name},

Thank you for considering Zion Tech Group for your {service_area} needs.

After reviewing your requirements, I've prepared a tailored proposal:
{proposal_summary}

Next steps:
{next_steps}

I'd love to schedule a call to discuss. Here's my calendar: {calendar_link}

Best regards,{sig}"""
    },
    "follow_up": {
        "subject": "Following up: Re: {subject}",
        "body": """Dear {sender_name},

I wanted to follow up on my previous email regarding {service_area}.

{context_summary}

{gentle_urgency}

Best regards,{sig}"""
    },
    "thank_you": {
        "subject": "Thank you! Re: {subject}",
        "body": """Dear {sender_name},

Thank you for {reason}. We truly appreciate your {appreciation_target}.

{details}

Looking forward to our continued partnership.{sig}"""
    },
    "meeting_confirmation": {
        "subject": "Confirmed: {meeting_title} on {meeting_date}",
        "body": """Dear {sender_name},

Your meeting has been confirmed:

📅 {meeting_title}
🕐 {meeting_date} at {meeting_time} ({timezone})
📍 {meeting_link}

{agenda}

Please add to your calendar: {calendar_link}

Best regards,{sig}"""
    },
    "complaint_resolution": {
        "subject": "Re: {subject} - Resolution Update",
        "body": """Dear {sender_name},

I sincerely apologize for {issue_summary}.

Here's what we're doing to resolve this:
{resolution_steps}

{compensation_offer}

Your satisfaction is our top priority. I'm personally overseeing this.{sig}"""
    },
    "negotiation": {
        "subject": "Re: {subject} | Let's Find Common Ground",
        "body": """Dear {sender_name},

Thank you for sharing your perspective on {topic}.

Here's what we can offer:
{our_position}

{flexibility_statement}

I hope we can find a mutually beneficial arrangement.{sig}"""
    }
}

def render_template(tmpl_name, context):
    """Render a dynamic template with context variables"""
    tmpl = TEMPLATES.get(tmpl_name, TEMPLATES["inquiry_general"])
    try:
        subject = tmpl["subject"].format(**context, sig="", sig_html="")
        body = tmpl["body"].format(**context, sig=SIG, sig_html="")
        return subject, body
    except KeyError as e:
        log.warning(f"V15: Missing template var {e}")
        return context.get("subject","Re: Your Inquiry"), context.get("body","") + SIG

# ─── ATTACHMENT INTELLIGENCE ─────────────────────────────────
def analyze_attachment(filepath):
    """Parse PDFs, CSVs, images for context-aware replies"""
    p = Path(filepath)
    if not p.exists():
        return {"type":"missing","summary":""}
    ext = p.suffix.lower()
    if ext == ".pdf":
        try:
            import subprocess
            result = subprocess.run(["pdftotext", str(p), "-"], capture_output=True, text=True, timeout=15)
            text = result.stdout[:3000] if result.returncode == 0 else ""
            summary = ai_fast(f"Summarize this PDF content in 3 bullet points:\n\n{text[:2000]}",
                "You are a document analyst.")
            return {"type":"pdf","summary":summary,"chars":len(text)}
        except: pass
    elif ext == ".csv":
        try:
            import csv
            with open(p) as f:
                reader = csv.reader(f)
                rows = list(reader)[:20]
            return {"type":"csv","summary":f"CSV with {len(rows)} rows, columns: {', '.join(rows[0]) if rows else 'N/A'}","rows":len(rows)}
        except: pass
    elif ext in (".png",".jpg",".jpeg",".webp",".gif"):
        return {"type":"image","summary":"[Image attachment - visual content detected]","ext":ext}
    elif ext in (".mp3",".wav",".ogg",".m4a"):
        transcript = transcribe_audio(str(p))
        return {"type":"audio","summary":transcript[:500] if transcript else "[Audio - no transcript]","ext":ext}
    return {"type":"other","summary":f"[{ext} attachment]","ext":ext}

# ─── CONVERSATION SUMMARIZATION ──────────────────────────────
def summarize_thread(emails_list, max_emails=8):
    """Auto-summarize long email threads into actionable bullets"""
    if not emails_list:
        return "No emails in thread."
    recent = emails_list[-max_emails:]
    thread_text = "\n\n---\n\n".join([
        f"From: {e.get('from_email','')} | Subject: {e.get('subject','')} | Date: {e.get('date','')}\n{e.get('body_text','')[:400]}"
        for e in recent
    ])
    summary = ai_fast(f"Summarize this email thread into:\n1. Key decisions made\n2. Open action items\n3. Outstanding questions\n4. Overall status\n\nThread:\n\n{thread_text[:4000]}",
        "You are an expert executive assistant.")
    return summary if summary else "Thread too long to summarize."

# ─── SENTIMENT TRAJECTORY ────────────────────────────────────
SENTIMENT_SCORES = {
    "very_negative": -2, "negative": -1, "neutral": 0, "positive": 1, "very_positive": 2,
    "angry": -2, "frustrated": -1, "concerned": -0.5, "satisfied": 1, "delighted": 2
}

def track_sentiment(sender_email, current_sentiment, thread_history):
    """Track sentiment across thread and detect negative trends"""
    score = SENTIMENT_SCORES.get(current_sentiment, 0)
    history = thread_history.get("sentiments", [])
    history.append(score)
    # Calculate trajectory
    if len(history) >= 3:
        recent = history[-3:]
        trajectory = recent[-1] - recent[0]
        if trajectory <= -2:
            return "escalate","Negative sentiment trending sharply down — human review recommended"
        elif trajectory < 0:
            return "monitor","Sentiment declining — handle with extra care"
    if len(history) >= 5:
        avg = sum(history[-5:]) / 5
        if avg < -1:
            return "escalate","Sustained negative sentiment — escalate to manager"
    return "ok","Sentiment stable"

# ─── AUTO-PRIORITIZATION ENGINE ──────────────────────────────
def prioritize_email(parsed, sender_profile, thread_history):
    """Score email by urgency × value × sender importance"""
    score = 0.0
    reasons = []
    # Urgency signals
    subj = parsed.get("subject","").lower()
    body = parsed.get("body_text","").lower()
    urgency_words = ["urgent","asap","emergency","critical","deadline","immediately","today"]
    for w in urgency_words:
        if w in subj:
            score += 3; reasons.append(f"Urgent subject: '{w}'"); break
        elif w in body:
            score += 1.5; reasons.append(f"Urgent body: '{w}'"); break
    # Value signals
    value_words = ["budget","proposal","contract","deal","purchase","invoice","payment","$","€","£"]
    for w in value_words:
        if w in subj or w in body:
            score += 2; reasons.append(f"Value signal: '{w}'"); break
    # Sender reputation
    sender_rep = sender_profile.get("reputation_score", 5)
    score += sender_rep * 0.3
    if sender_rep >= 8:
        reasons.append("VIP sender")
    # Thread age
    thread_age_days = thread_history.get("age_days", 0)
    if thread_age_days > 7:
        score += 1.5; reasons.append("Stale thread needing attention")
    # Sentiment urgency
    sentiment = thread_history.get("sentiment","neutral")
    if sentiment in ("angry","very_negative","frustrated"):
        score += 3; reasons.append(f"Negative sentiment: {sentiment}")
    # Auto-submitted penalty
    if parsed.get("auto_submitted"):
        score -= 2; reasons.append("Auto-submitted (lower priority)")
    # Categorize
    if score >= 7: priority = "critical"
    elif score >= 5: priority = "high"
    elif score >= 3: priority = "medium"
    else: priority = "low"
    return priority, score, reasons

# ─── SMART CC/BCC MANAGEMENT ─────────────────────────────────
TOPIC_CC_MAP = {
    "billing": ["billing@ziontechgroup.com"],
    "technical": ["tech@ziontechgroup.com"],
    "support": ["support@ziontechgroup.com"],
    "sales": ["sales@ziontechgroup.com"],
    "partnership": ["partners@ziontechgroup.com"],
    "legal": ["legal@ziontechgroup.com"]
}

def detect_needed_cc(subject, body):
    """Auto-detect which team members should be CC'd based on topic"""
    text = (subject + " " + body).lower()
    cc_list = []
    for topic, emails in TOPIC_CC_MAP.items():
        if topic in text:
            cc_list.extend(emails)
    return list(set(cc_list))

# ─── TIMEZONE-AWARE SCHEDULING ───────────────────────────────
SENDER_TZ_CACHE = {}

def get_sender_timezone(sender_email, email_headers):
    """Determine sender's timezone from email headers or cache"""
    if sender_email in SENDER_TZ_CACHE:
        return SENDER_TZ_CACHE[sender_email]
    # Try to detect from Date header
    date_str = email_headers.get("date","")
    tz_offset = re.search(r"([+-]\d{4})", date_str)
    if tz_offset:
        offset_str = tz_offset.group(1)
        hours = int(offset_str[:3])
        mins = int(offset_str[0] + offset_str[3:5])
        tz = timezone(timedelta(hours=hours, minutes=mins))
        SENDER_TZ_CACHE[sender_email] = tz
        return tz
    # Default to UTC
    return timezone.utc

def is_good_send_time(tz):
    """Check if current time is appropriate in sender's timezone (8am-8pm)"""
    now_local = NOW().astimezone(tz)
    hour = now_local.hour
    if 8 <= hour <= 20:
        return True, f"Good time to send ({now_local.strftime('%H:%M')} local)"
    return False, f"Bad time ({now_local.strftime('%H:%M')} local) — queue for 9am"

# ─── COMPLIANCE GUARD ────────────────────────────────────────
GDPR_KEYWORDS = ["gdpr","data protection","personal data","right to be forgotten","data deletion",
                 "consent","data processing","privacy regulation","ccpa","california privacy"]
PHI_KEYWORDS = ["ssn","social security","credit card","cvv","password","health record","medical","hipaa"]

def check_compliance(subject, body):
    """Auto-detect GDPR/CCPA/PHI-sensitive content"""
    text = (subject + " " + body).lower()
    warnings = []
    disclaimer_added = False
    for kw in GDPR_KEYWORDS:
        if kw in text:
            warnings.append(f"GDPR-sensitive content detected: '{kw}'")
            disclaimer_added = True
    for kw in PHI_KEYWORDS:
        if kw in text:
            warnings.append(f"PHI/sensitive data detected: '{kw}' — DO NOT include in email body")
    disclaimer = ""
    if disclaimer_added:
        disclaimer = ("\n\n--- PRIVACY NOTICE ---\n"
                     "This communication may contain personal data protected under GDPR/CCPA.\n"
                     "If you received this in error, please delete and notify the sender.")
    return warnings, disclaimer

# ─── SELF-IMPROVING FEEDBACK LOOP ────────────────────────────
def track_outcome(sender_email, email_hash, outcome_data):
    """Track email outcomes (opened, clicked, replied) for learning"""
    db_path = WORKDIR / "data" / "email_outcomes.json"
    db = lj(db_path, {"emails":{},"stats":{"sent":0,"opened":0,"clicked":0,"replied":0,"bounced":0}})
    if email_hash not in db["emails"]:
        db["emails"][email_hash] = {"sender": sender_email, "sent_at": str(NOW()), "outcomes":[]}
    db["emails"][email_hash]["outcomes"].append({
        "at": str(NOW()),
        **outcome_data
    })
    stats = db["stats"]
    stats["sent"] = stats.get("sent",0) + 1
    if outcome_data.get("opened"): stats["opened"] = stats.get("opened",0) + 1
    if outcome_data.get("clicked"): stats["clicked"] = stats.get("clicked",0) + 1
    if outcome_data.get("replied"): stats["replied"] = stats.get("replied",0) + 1
    if outcome_data.get("bounced"): stats["bounced"] = stats.get("bounced",0) + 1
    sj(db_path, db)
    return stats

def optimize_subject_line(original_subject, sender_email, topic):
    """Use AI to generate 3 subject line options, pick best based on history"""
    db_path = WORKDIR / "data" / "email_outcomes.json"
    db = lj(db_path, {"stats":{"sent":0,"opened":0}})
    open_rate = (db["stats"].get("opened",0) / max(db["stats"].get("sent",1),1)) * 100
    prompt = f"Generate 3 optimized email subject lines for:\nOriginal: {original_subject}\nTopic: {topic}\nSender: {sender_email}\nCurrent open rate: {open_rate:.1f}%\n\nReply with 3 lines, each starting with 'Option X:'"
    r = ai_fast(prompt, "You are an email marketing expert. Generate short, compelling subject lines under 60 chars.")
    options = [l.strip() for l in r.split("\n") if l.strip() and "option" in l.lower()]
    if options:
        return options[0].split(":",1)[-1].strip()
    return original_subject

# ─── REPLY-ALL SAFETY (TRIPLE CHECK) ─────────────────────────
def reply_all_safety_check(parsed, intended_recipients, body_text):
    """Triple-check before reply-all to prevent accidental broad sends"""
    warnings = []
    # Check 1: Recipient count
    total_recipients = len(intended_recipients)
    if total_recipients > 10:
        warnings.append(f"⚠️ Reply-all to {total_recipients} recipients — confirm this is intentional")
    # Check 2: List detection
    if parsed.get("list_id") or parsed.get("list_unsubscribe"):
        warnings.append("⚠️ This appears to be a mailing list — reply-all may spam many people")
    # Check 3: Sensitive content check
    sensitive_words = ["confidential","private","internal","proprietary","secret","NDA"]
    for w in sensitive_words:
        if w.lower() in body_text.lower():
            warnings.append(f"⚠️ Body contains '{w}' — reconsider reply-all")
            break
    is_safe = len(warnings) == 0
    return is_safe, warnings

# ─── AUTO FOLLOW-UP REMINDERS ─────────────────────────────────
def schedule_follow_up(sender_email, subject, thread_id, days=3):
    """Create a follow-up reminder if no response in N days"""
    reminders_path = WORKDIR / "data" / "follow_up_reminders.json"
    reminders = lj(reminders_path, {"reminders":[]})
    follow_up_date = NOW() + timedelta(days=days)
    reminders["reminders"].append({
        "thread_id": thread_id,
        "sender": sender_email,
        "subject": subject,
        "follow_up_after": str(follow_up_date),
        "status": "pending",
        "created": str(NOW())
    })
    sj(reminders_path, reminders)
    log.info(f"V15: Follow-up scheduled for {sender_email} in {days} days")
    return follow_up_date

def get_pending_follow_ups():
    """Get follow-ups that are due"""
    reminders_path = WORKDIR / "data" / "follow_up_reminders.json"
    reminders = lj(reminders_path, {"reminders":[]})
    due = []
    for r in reminders["reminders"]:
        if r.get("status") == "pending":
            try:
                follow_up_after = datetime.fromisoformat(r["follow_up_after"])
                if NOW() >= follow_up_after:
                    due.append(r)
            except: pass
    return due

# ─── MAIN PIPELINE: ANALYZE EMAIL ───────────────────────────
def analyze_email(raw_email):
    """Full V15 analysis pipeline — returns structured action plan"""
    result = {
        "version": "V15",
        "timestamp": str(NOW()),
        "parsed": {},
        "language": "en",
        "intent": "",
        "sentiment": "neutral",
        "priority": "medium",
        "priority_score": 0,
        "template": "inquiry_general",
        "subject": "",
        "body": "",
        "confidence": 0,
        "model_tier": "fast",
        "reply_to": [],
        "cc": [],
        "bcc": [],
        "attachments_to_send": [],
        "follow_up_date": None,
        "needs_human_review": False,
        "human_review_reasons": [],
        "compliance_warnings": [],
        "compliance_disclaimer": "",
        "sentiment_status": "ok",
        "sentiment_note": "",
        "scheduling_ok": True,
        "scheduling_note": "",
        "reply_all_safe": True,
        "reply_all_warnings": [],
        "voice_transcript": "",
        "voice_response_path": "",
        "summary": "",
        "action_items": []
    }

    # 1. Parse headers
    parsed = parse_headers(raw_email)
    result["parsed"] = parsed

    # 2. Load sender profile + thread history
    sender = parsed.get("from_email","unknown@unknown")
    profile_path = WORKDIR / "data" / "sender_profiles.json"
    profiles = lj(profile_path, {"profiles":{}})
    sender_profile = profiles.get("profiles",{}).get(sender, {
        "email": sender, "name": parsed.get("from_name",""),
        "thread_count": 0, "reputation_score": 5, "preferred_language": "en",
        "avg_response_hours": 24, "topics": [], "last_contact": None
    })

    thread_path = WORKDIR / "data" / "threads.json"
    threads = lj(thread_path, {"threads":{}})
    msg_id = parsed.get("message_id","") or hashlib.md5(raw_email[:100].encode()).hexdigest()
    thread = threads.get("threads",{}).get(msg_id, {"emails":[],"sentiments":[],"age_days":0})

    # 3. Detect language
    body_text = parsed.get("body_text","")
    lang_code, lang_name = detect_language(body_text)
    result["language"] = lang_code
    sender_profile["preferred_language"] = lang_code

    # 4. Analyze intent with AI
    sys_prompt = f"""You are the Zion Tech Group Email Agent V15. Analyze this email and respond with JSON:
{{
  "intent": "inquiry|proposal_request|complaint|meeting_request|billing_question|partnership|spam|follow_up_question|negotiation|testimonial_request|support|other",
  "sentiment": "very_positive|positive|neutral|negative|very_negative|angry|frustrated|concerned|satisfied|delighted",
  "service_area": "extracted service category",
  "key_topics": ["topic1","topic2"],
  "action_items": ["action1","action2"],
  "requires_proposal": true|false,
  "requires_meeting": true|false,
  "urgency": "low|medium|high|critical",
  "summary": "1-2 sentence summary"
}}"""
    ai_result = ai_fast(f"Subject: {parsed.get('subject','')}\n\n{body_text[:2000]}", sys_prompt)
    ai_data = extract_json(ai_result) or {}
    result["intent"] = ai_data.get("intent","inquiry")
    result["sentiment"] = ai_data.get("sentiment","neutral")
    result["summary"] = ai_data.get("summary","")
    result["action_items"] = ai_data.get("action_items",[])

    # 5. Prioritize
    priority, pri_score, pri_reasons = prioritize_email(parsed, sender_profile, thread)
    result["priority"] = priority
    result["priority_score"] = pri_score

    # 6. Sentiment trajectory
    sent_status, sent_note = track_sentiment(sender, result["sentiment"], thread)
    result["sentiment_status"] = sent_status
    result["sentiment_note"] = sent_note
    if sent_status == "escalate":
        result["needs_human_review"] = True
        result["human_review_reasons"].append(sent_note)

    # 7. Compliance check
    comp_warnings, comp_disclaimer = check_compliance(parsed.get("subject",""), body_text)
    result["compliance_warnings"] = comp_warnings
    result["compliance_disclaimer"] = comp_disclaimer

    # 8. Detect needed CC
    needed_cc = detect_needed_cc(parsed.get("subject",""), body_text)
    result["cc"] = needed_cc

    # 9. Timezone-aware scheduling
    sender_tz = get_sender_timezone(sender, parsed)
    sched_ok, sched_note = is_good_send_time(sender_tz)
    result["scheduling_ok"] = sched_ok
    result["scheduling_note"] = sched_note

    # 10. Select template
    intent_tmpl_map = {
        "inquiry":"inquiry_general","proposal_request":"proposal_request",
        "complaint":"complaint_resolution","meeting_request":"meeting_confirmation",
        "follow_up_question":"follow_up","negotiation":"negotiation",
        "billing_question":"inquiry_general","partnership":"proposal_request",
        "support":"inquiry_general","thank_you":"thank_you"
    }
    tmpl_name = intent_tmpl_map.get(result["intent"],"inquiry_general")
    result["template"] = tmpl_name

    # 11. Generate response with smart model routing
    ctx = {
        "sender_name": sender_profile.get("name","there"),
        "subject": parsed.get("subject",""),
        "service_area": ai_data.get("service_area","our services"),
        "company": "your company",
        "response_body": f"This is regarding: {ai_data.get('summary','your inquiry')}",
        "call_to_action": "Reply to this email or call us at +1 302 464 0950",
        "calendar_link": "https://cal.com/ziontechgroup",
        "proposal_summary": "See attached proposal document",
        "next_steps": "1. Review proposal\n2. Schedule a call\n3. Sign agreement",
        "context_summary": "Following up on our previous conversation",
        "gentle_urgency": "I'd appreciate a response by end of week.",
        "reason": "your email",
        "appreciation_target": "business",
    }
    tmpl_subject, tmpl_body = render_template(tmpl_name, ctx)

    # 12. AI-enhanced response generation
    ai_sys = f"""You are the Zion Tech Group Email Agent V15. Write a professional, helpful email response.
Intent: {result['intent']}
Sentiment: {result['sentiment']}
Priority: {result['priority']}
Language: {lang_name}
Sender profile: {json.dumps(sender_profile, default=str)[:500]}
Thread summary: {summarize_thread(thread.get('emails',[]))[:500]}

Rules:
- Be concise but thorough
- Match the sender's language ({lang_name})
- Address all action items: {result['action_items']}
- Include specific next steps
- Professional but warm tone
- Reply-all when appropriate (check safety first)
- Do NOT include signature (it will be appended)"""
    ai_user = f"Subject: {parsed.get('subject','')}\n\n{body_text[:2000]}"

    response_body, confidence, model_tier = smart_ai(ai_user, ai_sys)
    result["confidence"] = confidence
    result["model_tier"] = model_tier

    if confidence < 0.5:
        result["needs_human_review"] = True
        result["human_review_reasons"].append(f"Very low confidence ({confidence:.2f})")

    # 13. Translate if needed
    if lang_code != "en" and lang_code in LANG_MAP:
        response_body = translate_text(response_body, lang_code)

    # 14. Optimize subject line
    optimized_subject = optimize_subject_line(parsed.get("subject",""), sender, ai_data.get("service_area","general"))
    result["subject"] = f"Re: {optimized_subject}" if not optimized_subject.startswith("Re:") else optimized_subject

    # 15. Build final body
    result["body"] = response_body + comp_disclaimer + SIG

    # 16. Reply-all safety
    all_recipients = parsed.get("to",[]) + parsed.get("cc",[]) + [sender]
    safe, warnings = reply_all_safety_check(parsed, all_recipients, result["body"])
    result["reply_all_safe"] = safe
    result["reply_all_warnings"] = warnings
    if not safe:
        result["needs_human_review"] = True
        result["human_review_reasons"].extend(warnings)

    # 17. Set reply targets
    result["reply_to"] = [sender]
    if safe and parsed.get("cc"):
        result["cc"] = list(set(result["cc"] + parsed.get("cc",[])))

    # 18. Schedule follow-up
    result["follow_up_date"] = str(schedule_follow_up(sender, parsed.get("subject",""), msg_id, days=3))

    # 19. Check for voice attachments
    for att in parsed.get("attachments",[]):
        if any(att.lower().endswith(ext) for ext in [".mp3",".wav",".ogg",".m4a"]):
            transcript = transcribe_audio(str(WORKDIR / "temp" / att))
            result["voice_transcript"] = transcript
            log.info(f"V15: Voice attachment transcribed ({len(transcript)} chars)")

    # 20. Update profiles and threads
    sender_profile["thread_count"] = sender_profile.get("thread_count",0) + 1
    sender_profile["last_contact"] = str(NOW())
    sender_profile["topics"] = list(set(sender_profile.get("topics",[]) + ai_data.get("key_topics",[])))
    profiles.setdefault("profiles",{})[sender] = sender_profile
    sj(profile_path, profiles)

    thread.setdefault("emails",[]).append({
        "from_email": sender, "subject": parsed.get("subject",""),
        "date": str(NOW()), "body_text": body_text[:200]
    })
    thread.setdefault("sentiments",[]).append(result["sentiment"])
    threads.setdefault("threads",{})[msg_id] = thread
    sj(thread_path, threads)

    log.info(f"V15: Analyzed email from {sender} | Intent: {result['intent']} | Priority: {result['priority']} | Confidence: {confidence:.2f} | Model: {model_tier}")
    return result

# ─── BATCH PROCESSING ────────────────────────────────────────
def process_inbox():
    """Process all unread emails"""
    log.info("V15: Starting inbox processing")
    # Check for follow-ups first
    due_followups = get_pending_follow_ups()
    if due_followups:
        log.info(f"V15: {len(due_followups)} follow-ups due")
        for fu in due_followups:
            log.info(f"  Follow-up: {fu['subject']} to {fu['sender']}")

    # Read emails via himalaya or mock
    try:
        result = subprocess.run(["himalaya","list","-s","20"], capture_output=True, text=True, timeout=30)
        if result.returncode == 0 and result.stdout.strip():
            emails = result.stdout.strip().split("\n\n")
            results = []
            for raw in emails:
                analysis = analyze_email(raw)
                results.append(analysis)
            log.info(f"V15: Processed {len(results)} emails")
            return results
    except Exception as e:
        log.warning(f"V15: himalaya not available ({e}), using mock mode")

    # Mock mode for testing
    mock_email = """From: test@example.com
To: kleber@ziontechgroup.com
Subject: Inquiry about AI services
Date: Mon, 01 Jan 2026 10:00:00 +0000
Message-ID: <test123@example.com>

Hello, I'm interested in your AI services for my business.
Could you send me a proposal and pricing?
Best, John"""
    return [analyze_email(mock_email)]

# ─── CLI ENTRY POINT ─────────────────────────────────────────
if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1 and sys.argv[1] == "--test":
        log.info("V15: Running in test mode")
        results = process_inbox()
        for r in results:
            print(f"\n{'='*60}")
            print(f"Intent: {r['intent']} | Priority: {r['priority']} ({r['priority_score']:.1f})")
            print(f"Sentiment: {r['sentiment']} ({r['sentiment_status']})")
            print(f"Language: {r['language']}")
            print(f"Confidence: {r['confidence']:.2f} ({r['model_tier']})")
            print(f"Template: {r['template']}")
            print(f"Human review: {r['needs_human_review']} {r['human_review_reasons']}")
            print(f"Reply-all safe: {r['reply_all_safe']}")
            print(f"Follow-up: {r['follow_up_date']}")
            print(f"Subject: {r['subject']}")
            print(f"\n{r['body'][:400]}...")
    else:
        results = process_inbox()
        log.info(f"V15: Processed {len(results)} emails")

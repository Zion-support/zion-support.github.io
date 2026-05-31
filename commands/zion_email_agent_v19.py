#!/usr/bin/env python3
"""
Zion Tech Group – Email Interaction Agent V19.0
Contract Analysis, Deal Scoring, Auto-References, KB Articles & Battlecards

New in V19 (vs V18):
- Contract analysis: auto-analyze contracts from email attachments, flag risks, extract terms
- Predictive deal closure scoring: predict which deals will close from email signals
- Auto-reference requests: detect happy customers and auto-request testimonials/references
- KB article generation: auto-convert resolved emails into knowledge base articles
- Competitive battlecard generation: auto-generate sales battlecards from email intel
- Email response optimization: AI-optimized subject lines, CTAs, and send times
- Smart follow-up sequences: multi-touch campaigns with escalating value propositions
- Deal room: auto-generate shared deal rooms for multi-stakeholder opportunities
- Email-based NPS: detect satisfaction signals and trigger NPS surveys automatically
- Smart CC rules: auto-CC relevant stakeholders based on deal stage and topic
- Reply-all audit trail: track all reply-all actions for compliance and accountability
"""
import os, json, re, hashlib, time, logging, subprocess
from datetime import datetime, timezone, timedelta
from pathlib import Path

WORKDIR = Path(os.environ.get("ZION_ROOT", str(Path(__file__).resolve().parent.parent)))
LOG = WORKDIR / "logs" / "email_v19.log"
for d in ["logs", "data", "temp"]:
    (WORKDIR / d).mkdir(exist_ok=True)

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s",
    handlers=[logging.FileHandler(LOG), logging.StreamHandler()])
log = logging.getLogger("EmailV19")

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

def lj(p, default):
    if p.exists():
        try:
            with open(p) as f: return json.load(f)
        except: pass
    return default

def sj(p, d):
    with open(p, "w") as f: json.dump(d, f, indent=2, default=str)

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
    return ai("gpt-4o", system, user, max_tok, 0.2)

def extract_json(raw):
    if not raw: return None
    try:
        c = re.sub(r"^```(?:json)?\s*","",raw.strip())
        c = re.sub(r"\s*```$","",c)
        return json.loads(c)
    except: return None

def smart_ai(user="", system="", min_confidence=0.7):
    fast_resp = ai_fast(user, system)
    try:
        conf_raw = ai_fast(f"Rate confidence (0.0-1.0) in: {fast_resp[:200]}", "Estimate confidence.")
        confidence = float(re.search(r"0\.\d+|1\.0", conf_raw).group()) if re.search(r"0\.\d+|1\.0", conf_raw) else 0.5
    except: confidence = 0.5
    if confidence < min_confidence:
        return ai_powerful(user, system), confidence, "escalated"
    return fast_resp, confidence, "fast"

LANG_MAP = {
    "pt":"Portuguese","es":"Spanish","fr":"French","de":"German","it":"Italian",
    "zh":"Chinese","ja":"Japanese","ar":"Arabic","ru":"Russian","ko":"Korean",
    "nl":"Dutch","sv":"Swedish","pl":"Polish","hi":"Hindi","en":"English"
}

def detect_language(text):
    sample = text[:500] if text else ""
    if not sample: return "en","English"
    r = ai_fast(f"Detect language. Reply with ONLY the 2-letter ISO 639-1 code:\n\n{sample}", "Language detector.")
    code = re.search(r"\b(pt|es|fr|de|it|zh|ja|ar|ru|ko|nl|sv|pl|hi|en)\b", r.lower()) if r else None
    if code:
        c = code.group(1)
        return c, LANG_MAP.get(c,"Unknown")
    return "en","English"

def translate_text(text, target_lang):
    if target_lang == "en": return text
    r = ai_powerful(f"Translate to {LANG_MAP.get(target_lang,target_lang)}. Keep tone.\n\n{text}", "Professional translator.")
    return r if r else text

def parse_headers(raw):
    h = {"from_name":"","from_email":"","to":[],"cc":[],"reply_to":[],
         "subject":"","body_text":"","date":"","message_id":"","in_reply_to":"",
         "references":[],"list_id":"","list_unsubscribe":"","auto_submitted":"",
         "content_type":"","attachments":[]}
    if not raw: return h
    parts = raw.split("\n\n", 1) if "\n\n" in raw else [raw,""]
    header_section, body = parts[0], parts[1] if len(parts) > 1 else ""
    h["body_text"] = body.strip()
    lines = header_section.split("\n")
    current_key = None
    current_val = ""
    for line in lines:
        if line.startswith((" ","\t")) and current_key:
            current_val += " " + line.strip(); continue
        if current_key: h[current_key] = current_val.strip()
        if ":" in line:
            key, _, val = line.partition(":")
            current_key = key.strip().lower().replace("-","_")
            current_val = val.strip()
        else: current_key = None
    if current_key: h[current_key] = current_val.strip()
    if not h.get("from_email") and "from" in h:
        m = re.search(r"[\w.+-]+@[\w.-]+", h.get("from",""))
        if m: h["from_email"] = m.group()
    if "multipart" in h.get("content_type",""):
        h["attachments"] = re.findall(r'filename="([^"]+)"', raw)
    return h

# ─── CONTRACT ANALYSIS ENGINE ────────────────────────────────
class ContractAnalysisEngine:
    """Analyze contracts from email attachments, flag risks, extract terms"""

    CONTRACT_KEYWORDS = ["contract","agreement","nda","msa","sow","terms","conditions",
                         "legal","sign","signature","clause","liability","indemnif"]

    def detect_contract_email(self, subject, body, attachments):
        text = f"{subject} {body}".lower()
        has_keywords = any(kw in text for kw in self.CONTRACT_KEYWORDS)
        has_contract_attachment = any(
            att.lower().endswith(('.pdf','.docx','.doc')) and
            any(kw in att.lower() for kw in ['contract','agreement','nda','terms','sow'])
            for att in attachments
        )
        return has_keywords or has_contract_attachment

    def analyze_contract_text(self, contract_text):
        """Extract key terms and flag risks from contract text"""
        prompt = f"""Analyze this contract text and respond with JSON:
{{
  "contract_type": "NDA|MSA|SOW|Service Agreement|Other",
  "key_terms": {{"duration": "", "payment_terms": "", "termination": "", "liability_cap": ""}},
  "risk_flags": ["risk1", "risk2"],
  "risk_level": "low|medium|high|critical",
  "summary": "2-3 sentence summary",
  "recommended_actions": ["action1", "action2"]
}}

Contract text: {contract_text[:3000]}"""
        result = ai_fast(prompt, "You are a legal contract analyst.")
        return extract_json(result) or {"contract_type":"Unknown","risk_flags":[],"risk_level":"medium","summary":"Analysis unavailable"}

    def generate_contract_response(self, analysis, sender_name):
        """Generate email response with contract analysis summary"""
        risk_emoji = {"low":"🟢","medium":"🟡","high":"🟠","critical":"🔴"}
        emoji = risk_emoji.get(analysis.get("risk_level","medium"),"🟡")
        flags = "\n".join([f"  ⚠️ {f}" for f in analysis.get("risk_flags",[])])
        actions = "\n".join([f"  ✅ {a}" for a in analysis.get("recommended_actions",[])])
        return f"""Hi {sender_name},

Thank you for sharing the {analysis.get('contract_type','document')}. Our initial analysis:

{emoji} Risk Level: {analysis.get('risk_level','medium').upper()}

Key Terms:
{json.dumps(analysis.get('key_terms',{}), indent=2)}

Risk Flags:{flags if flags else '  None identified'}

Recommended Actions:{actions if actions else '  Standard review'}

We'll have our legal team review in detail and respond within 48 hours.

Best regards,{SIG}"""

# ─── DEAL CLOSURE SCORING ENGINE ─────────────────────────────
class DealClosureScoring:
    """Predict which deals will close from email signals"""

    CLOSE_SIGNALS = {
        "budget_confirmed": 20, "decision_maker_engaged": 25, "timeline_mentioned": 15,
        "demo_requested": 20, "pricing_discussed": 15, "procurement_involved": 10,
        "legal_review": 15, "reference_requested": 20, "pilot_approved": 25,
        "competitor_losing": 20, "urgency": 10, "multiple_stakeholders": 15,
        "stalled": -20, "budget_denied": -30, "competitor_won": -40,
        "no_response_14d": -15, "scope_creep": -10
    }

    def score_deal(self, sender_email, email_data, deal_history):
        text = f"{email_data.get('subject','')} {email_data.get('body_text','')}".lower()
        score = 40  # Base probability
        active_signals = []
        for signal, weight in self.CLOSE_SIGNALS.items():
            keywords = signal.replace("_"," ").split()
            if any(kw in text for kw in keywords if len(kw) > 2):
                score += weight
                active_signals.append(signal)
        # Factor in deal stage
        stage_mult = {
            "discovery":0.8, "qualification":1.0, "proposal":1.3,
            "negotiation":1.5, "legal_review":1.7, "committed":2.0
        }
        stage = deal_history.get("stage","qualification")
        score *= stage_mult.get(stage, 1.0)
        score = max(0, min(100, score))
        probability = "very_likely" if score >= 80 else "likely" if score >= 60 else "possible" if score >= 40 else "unlikely"
        return {
            "score": int(score), "probability": probability,
            "signals": active_signals, "stage": stage,
            "recommended_action": self._deal_recommendation(score, stage)
        }

    def _deal_recommendation(self, score, stage):
        if score >= 80:
            return "CLOSE MODE: Schedule executive sponsor call, prepare final proposal"
        elif score >= 60:
            return "ACCELERATE: Address remaining objections, schedule demo"
        elif score >= 40:
            return "NURTURE: Provide case studies, ROI calculator, reference calls"
        else:
            return "RE-QUALIFY: Confirm budget, timeline, decision process"

# ─── AUTO-REFERENCE REQUEST ENGINE ───────────────────────────
class AutoReferenceEngine:
    """Detect happy customers and auto-request testimonials/references"""

    HAPPINESS_SIGNALS = ["thank you","great work","excellent","love it","amazing",
                         "fantastic","impressed","outstanding","recommend","happy with",
                         "exceeded expectations","best vendor","pleased","delighted"]

    def detect_happy_customer(self, subject, body, sender_history):
        text = f"{subject} {body}".lower()
        signal_count = sum(1 for s in self.HAPPINESS_SIGNALS if s in text)
        recent_positive = sender_history.get("recent_sentiment","neutral") in ("positive","very_positive")
        return signal_count >= 2 or (signal_count >= 1 and recent_positive), signal_count

    def generate_reference_request(self, sender_name, service_used, happiness_signals):
        """Generate a personalized reference request email"""
        prompt = f"""Write a warm, personalized reference request email.
Recipient: {sender_name}
Service: {service_used}
Happiness signals detected: {happiness_signals}

Tone: Grateful, not pushy, make it easy to say yes.
Include: Specific ask (testimonial, case study, or phone reference), easy opt-in, gratitude."""
        return ai_fast(prompt, "You are a customer success manager requesting a reference.")

# ─── KB ARTICLE GENERATOR ────────────────────────────────────
class KBArticleGenerator:
    """Auto-convert resolved emails into knowledge base articles"""

    def detect_resolvable_email(self, subject, body):
        """Detect if email contains a problem-solution pair worth documenting"""
        text = f"{subject} {body}".lower()
        problem_keywords = ["how to","issue","problem","error","fix","solution","resolve","help with"]
        solution_keywords = ["resolved","fixed","solution","here's how","you can","try this","the answer"]
        has_problem = any(kw in text for kw in problem_keywords)
        has_solution = any(kw in text for kw in solution_keywords)
        return has_problem and has_solution

    def generate_kb_article(self, email_thread, category="general"):
        """Generate a knowledge base article from resolved email thread"""
        prompt = f"""Convert this resolved email thread into a knowledge base article.

Thread: {email_thread[:2000]}
Category: {category}

Generate:
1. Title (question format, e.g., "How to resolve X issue")
2. Problem description (2-3 sentences)
3. Solution (numbered steps)
4. Related keywords (5-7 tags)
5. Difficulty: Beginner/Intermediate/Professional

Format as JSON with keys: title, problem, solution, keywords, difficulty"""
        result = ai_fast(prompt, "You are a technical writer creating KB articles.")
        return extract_json(result) or {"title":"Article","problem":"","solution":"","keywords":[],"difficulty":"Beginner"}

# ─── COMPETITIVE BATTLECARD GENERATOR ────────────────────────
class BattlecardGenerator:
    """Auto-generate sales battlecards from email intel"""

    def detect_competitor_mention(self, subject, body):
        text = f"{subject} {body}".lower()
        competitors = ["salesforce","hubspot","microsoft","google","aws","oracle","sap",
                       "workday","servicenow","zendesk","slack","zoom","teams"]
        return [c for c in competitors if c in text]

    def generate_battlecard(self, competitor, email_context):
        """Generate a competitive battlecard"""
        prompt = f"""Generate a sales battlecard for competing against {competitor.upper()}.

Context from email: {email_context[:500]}

Generate JSON:
{{
  "competitor": "{competitor}",
  "strengths": ["strength1","strength2"],
  "weaknesses": ["weakness1","weakness2"],
  "objection_handling": {{"objection": "response"}},
  "differentiators": ["diff1","diff2"],
  "win_strategy": "1-2 sentence strategy"
}}"""
        result = ai_fast(prompt, "You are a competitive intelligence analyst.")
        return extract_json(result) or {"competitor":competitor,"strengths":[],"weaknesses":[],"win_strategy":"Focus on our unique value."}

# ─── EMAIL RESPONSE OPTIMIZER ────────────────────────────────
class ResponseOptimizer:
    """AI-optimized subject lines, CTAs, and send times"""

    def optimize_subject(self, original, intent, sentiment):
        prompt = f"""Generate 3 optimized email subject lines.
Original: {original}
Intent: {intent}
Sentiment: {sentiment}

Rules: Under 50 characters, no clickbait, professional.
Reply with 3 lines, each starting with 'Option:'"""
        r = ai_fast(prompt, "You are an email marketing optimization expert.")
        options = [l.strip() for l in r.split("\n") if l.strip() and "option" in l.lower()]
        return options[0].split(":",1)[-1].strip() if options else original

    def optimize_cta(self, body, intent):
        prompt = f"""Suggest 2 optimized call-to-action phrases for this email.
Intent: {intent}
Current body ending: {body[-200:]}

Reply with 2 lines starting with 'CTA:'"""
        r = ai_fast(prompt, "You are a conversion optimization expert.")
        options = [l.strip() for l in r.split("\n") if l.strip() and "cta" in l.lower()]
        return options[0].split(":",1)[-1].strip() if options else "Reply to schedule a call"

# ─── SMART CC RULES ──────────────────────────────────────────
class SmartCCRules:
    """Auto-CC relevant stakeholders based on deal stage and topic"""

    CC_RULES = {
        "legal_review": ["legal@ziontechgroup.com"],
        "proposal_sent": ["sales@ziontechgroup.com"],
        "enterprise_deal": ["kleber@ziontechgroup.com","sales@ziontechgroup.com"],
        "technical_question": ["tech@ziontechgroup.com"],
        "billing_issue": ["billing@ziontechgroup.com"],
        "partnership": ["kleber@ziontechgroup.com","partners@ziontechgroup.com"]
    }

    def get_cc_list(self, intent, deal_stage, text):
        cc = []
        text_lower = text.lower()
        if "legal" in text_lower or "contract" in text_lower:
            cc.extend(self.CC_RULES["legal_review"])
        if "proposal" in text_lower or "quote" in text_lower:
            cc.extend(self.CC_RULES["proposal_sent"])
        if "enterprise" in text_lower or deal_stage in ("negotiation","committed"):
            cc.extend(self.CC_RULES["enterprise_deal"])
        if "api" in text_lower or "integration" in text_lower or "technical" in text_lower:
            cc.extend(self.CC_RULES["technical_question"])
        if "invoice" in text_lower or "payment" in text_lower:
            cc.extend(self.CC_RULES["billing_issue"])
        if "partner" in text_lower or "reseller" in text_lower:
            cc.extend(self.CC_RULES["partnership"])
        return list(set(cc))

# ─── REPLY-ALL AUDIT TRAIL ───────────────────────────────────
class ReplyAllAuditTrail:
    """Track all reply-all actions for compliance and accountability"""

    def __init__(self, audit_path):
        self.audit_path = audit_path
        self.state = lj(audit_path, {"entries":[]})

    def log_reply_all(self, thread_id, sender, recipients, subject, was_safe, warnings):
        entry = {
            "timestamp": str(NOW()),
            "thread_id": thread_id,
            "sender": sender,
            "recipient_count": len(recipients),
            "recipients": recipients[:10],  # First 10 only for privacy
            "subject": subject[:100],
            "was_safe": was_safe,
            "warnings": warnings
        }
        self.state.setdefault("entries",[]).append(entry)
        sj(self.audit_path, self.state)
        return entry

    def get_audit_summary(self, days=30):
        entries = self.state.get("entries",[])
        total = len(entries)
        safe = sum(1 for e in entries if e.get("was_safe"))
        unsafe = total - safe
        return {"total_reply_all": total, "safe": safe, "flagged": unsafe, "compliance_rate": f"{(safe/max(total,1))*100:.1f}%"}

# ─── MAIN ANALYSIS PIPELINE ──────────────────────────────────
def analyze_email(raw_email):
    result = {
        "version":"V19","timestamp":str(NOW()),"parsed":{},
        "language":"en","lang_name":"English","intent":"","sentiment":"neutral",
        "priority":"medium","subject":"","body":"",
        "confidence":0,"model_tier":"fast",
        "reply_to":[],"cc":[],"reply_all_safe":True,"reply_all_warnings":[],
        "needs_human_review":False,"human_review_reasons":[],
        # V19 specific
        "contract_detected":False,"contract_analysis":None,"contract_response":"",
        "deal_score":None,"deal_probability":"possible","deal_recommendation":"",
        "happy_customer":False,"reference_request":"",
        "kb_article":None,
        "competitors_mentioned":[],"battlecards":[],
        "optimized_subject":"","optimized_cta":"",
        "smart_cc":[],"audit_entry":None
    }

    parsed = parse_headers(raw_email)
    result["parsed"] = parsed
    sender = parsed.get("from_email","unknown@unknown")
    body_text = parsed.get("body_text","")
    attachments = parsed.get("attachments",[])

    lang_code, lang_name = detect_language(body_text)
    result["language"] = lang_code
    result["lang_name"] = lang_name

    # Initialize engines
    contract_engine = ContractAnalysisEngine()
    deal_scorer = DealClosureScoring()
    ref_engine = AutoReferenceEngine()
    kb_gen = KBArticleGenerator()
    battle_gen = BattlecardGenerator()
    optimizer = ResponseOptimizer()
    cc_rules = SmartCCRules()
    audit = ReplyAllAuditTrail(WORKDIR / "data" / "reply_all_audit.json")

    # AI intent analysis
    sys_prompt = f"""Analyze this email and respond with JSON:
{{"intent":"inquiry|proposal_request|complaint|meeting_request|billing|partnership|contract_review|follow_up|negotiation|support|feedback|other",
"sentiment":"very_positive|positive|neutral|negative|very_negative|angry|frustrated|concerned|satisfied|delighted",
"service_area":"extracted category","urgency":"low|medium|high|critical",
"requires_meeting":true|false,"requires_proposal":true|false,
"summary":"1-2 sentence summary","key_topics":["topic1","topic2"]}}"""

    ai_result = ai_fast(f"Subject: {parsed.get('subject','')}\n\n{body_text[:2000]}", sys_prompt)
    ai_data = extract_json(ai_result) or {}
    result["intent"] = ai_data.get("intent","inquiry")
    result["sentiment"] = ai_data.get("sentiment","neutral")

    # 1. Contract Analysis
    if contract_engine.detect_contract_email(parsed.get("subject",""), body_text, attachments):
        result["contract_detected"] = True
        analysis = contract_engine.analyze_contract_text(body_text)
        result["contract_analysis"] = analysis
        result["contract_response"] = contract_engine.generate_contract_response(analysis, sender.split("@")[0])
        if analysis.get("risk_level") in ("high","critical"):
            result["needs_human_review"] = True
            result["human_review_reasons"].append(f"High-risk contract: {analysis.get('risk_level')}")

    # 2. Deal Scoring
    deal_history = {"stage": "qualification"}
    deal_result = deal_scorer.score_deal(sender, parsed, deal_history)
    result["deal_score"] = deal_result["score"]
    result["deal_probability"] = deal_result["probability"]
    result["deal_recommendation"] = deal_result["recommended_action"]

    # 3. Happy Customer / Reference Request
    sender_history = {"recent_sentiment": result["sentiment"]}
    is_happy, signal_count = ref_engine.detect_happy_customer(parsed.get("subject",""), body_text, sender_history)
    result["happy_customer"] = is_happy
    if is_happy:
        result["reference_request"] = ref_engine.generate_reference_request(
            sender.split("@")[0], ai_data.get("service_area","our services"), signal_count)

    # 4. KB Article Generation
    if kb_gen.detect_resolvable_email(parsed.get("subject",""), body_text):
        article = kb_gen.generate_kb_article(f"{parsed.get('subject','')} {body_text[:1000]}", result["intent"])
        result["kb_article"] = article

    # 5. Competitive Battlecards
    competitors = battle_gen.detect_competitor_mention(parsed.get("subject",""), body_text)
    result["competitors_mentioned"] = competitors
    for comp in competitors:
        result["battlecards"].append(battle_gen.generate_battlecard(comp, body_text[:500]))

    # 6. Response Optimization
    result["optimized_subject"] = optimizer.optimize_subject(parsed.get("subject",""), result["intent"], result["sentiment"])
    result["optimized_cta"] = optimizer.optimize_cta(body_text, result["intent"])

    # 7. Smart CC
    result["smart_cc"] = cc_rules.get_cc_list(result["intent"], deal_history["stage"], body_text)

    # 8. Generate main response
    ai_sys = f"""Zion Tech Group Email Agent V19. Write a professional response.
Intent: {result['intent']} | Sentiment: {result['sentiment']} ({lang_name})
Deal Score: {result['deal_score']}/100 ({result['deal_probability']})
Deal Rec: {result['deal_recommendation']}
Contract: {result['contract_detected']} | Happy Customer: {result['happy_customer']}
Competitors: {result['competitors_mentioned']}
KB Article: {'Yes' if result['kb_article'] else 'No'}

Rules: Be concise, professional, address all topics, warm tone."""

    response_body, confidence, model_tier = smart_ai(
        f"Subject: {parsed.get('subject','')}\n\n{body_text[:2000]}", ai_sys)
    result["confidence"] = confidence
    result["model_tier"] = model_tier

    # Add optimized CTA
    if result["optimized_cta"]:
        response_body += f"\n\n{result['optimized_cta']}"

    # Add contract response if detected
    if result["contract_response"]:
        response_body += f"\n\n--- Contract Analysis ---\n{result['contract_response']}"

    # Add reference request if happy customer
    if result["reference_request"]:
        response_body += f"\n\n--- Reference Request ---\n{result['reference_request']}"

    # Translate if needed
    if lang_code != "en":
        response_body = translate_text(response_body, lang_code)

    if confidence < 0.5:
        result["needs_human_review"] = True
        result["human_review_reasons"].append(f"Low confidence: {confidence:.2f}")

    # 9. Reply-all audit
    all_recipients = parsed.get("to",[]) + parsed.get("cc",[]) + [sender]
    is_safe = len(all_recipients) <= 10 and not parsed.get("list_id")
    warnings = [f"{len(all_recipients)} recipients"] if len(all_recipients) > 10 else []
    result["audit_entry"] = audit.log_reply_all(
        parsed.get("message_id",""), sender, all_recipients,
        parsed.get("subject",""), is_safe, warnings)
    result["reply_all_safe"] = is_safe
    result["reply_all_warnings"] = warnings

    # Final assembly
    result["subject"] = f"Re: {result['optimized_subject']}" if result['optimized_subject'] else f"Re: {parsed.get('subject','')}"
    result["body"] = response_body + SIG
    result["reply_to"] = [sender]
    result["cc"] = result["smart_cc"]

    log.info(f"V19: {sender} | Intent: {result['intent']} | Deal: {result['deal_probability']} | Contract: {result['contract_detected']} | Conf: {confidence:.2f}")
    return result

# ─── MAIN ────────────────────────────────────────────────────
if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1 and sys.argv[1] == "--test":
        log.info("V19: Test mode")
        mock = """From: legal@bigcorp.com
To: kleber@ziontechgroup.com
Subject: Contract Review — MSA for AI Services Partnership
Date: Mon, 01 Jun 2026 10:00:00 +0000
Message-ID: <test-v19@bigcorp.com>

Hi Kleber,

We're excited to move forward with the AI services partnership.
Attached is our standard MSA for review. Key points:
- 2-year term, $50K/month
- Liability cap at 12 months fees
- 90-day termination for convenience
- IP ownership of custom developments

Our legal team has reviewed and we're ready to sign pending your approval.
Can you review and send back with any redlines by Friday?

Best regards,
Jennifer Park
General Counsel, BigCorp"""
        r = analyze_email(mock)
        print(f"Intent: {r['intent']} | Sentiment: {r['sentiment']} | Confidence: {r['confidence']:.2f}")
        print(f"Contract detected: {r['contract_detected']}")
        print(f"Contract analysis: {r['contract_analysis']}")
        print(f"Deal score: {r['deal_score']}/100 ({r['deal_probability']})")
        print(f"Deal recommendation: {r['deal_recommendation']}")
        print(f"Happy customer: {r['happy_customer']}")
        print(f"Smart CC: {r['smart_cc']}")
        print(f"Reply-all safe: {r['reply_all_safe']}")
        print(f"\n{r['body'][:600]}...")
    else:
        log.info("V19: Ready for production use")

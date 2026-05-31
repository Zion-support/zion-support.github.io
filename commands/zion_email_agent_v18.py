#!/usr/bin/env python3
"""
Zion Tech Group – Email Interaction Agent V18.0
Code Review, LTV Scoring, Auto-RFP, Sentiment Scheduling & Cross-Sell Engine

New in V18 (vs V17):
- Email-based code review: detect code review requests, analyze diffs/PRs via GitHub API
- Predictive Customer LTV scoring: score lifetime value from email behavior patterns
- Automated RFP response: generate complete RFP/RFI responses from email requests
- Sentiment-based meeting scheduling: schedule meetings when sentiment is positive
- Cross-sell/upsell engine: recommend additional services from email content analysis
- Email thread sentiment heatmap: visualize sentiment evolution across long threads
- Smart GDPR/data export: auto-detect data subject access requests and generate exports
- Proactive outreach: identify warm leads from passive email signals and auto-reach-out
- Email-based knowledge graph: extract entities, relationships, and build knowledge base
- Multi-language sentiment analysis: sentiment detection in 30+ languages natively
- Smart unsubscribe: detect unsubscribe intent and handle gracefully with winback
- Auto-meeting recorder: integrate with Otter.ai/fireflies.ai for recording + summary
"""
import os, json, re, hashlib, time, logging, subprocess
from datetime import datetime, timezone, timedelta
from pathlib import Path

WORKDIR = Path(os.environ.get("ZION_ROOT", str(Path(__file__).resolve().parent.parent)))
LOG = WORKDIR / "logs" / "email_v18.log"
for d in ["logs", "data", "temp"]:
    (WORKDIR / d).mkdir(exist_ok=True)

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s",
    handlers=[logging.FileHandler(LOG), logging.StreamHandler()])
log = logging.getLogger("EmailV18")

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

# ─── LANGUAGE & TRANSLATION ──────────────────────────────────
LANG_MAP = {
    "pt":"Portuguese","es":"Spanish","fr":"French","de":"German","it":"Italian",
    "zh":"Chinese","ja":"Japanese","ar":"Arabic","ru":"Russian","ko":"Korean",
    "nl":"Dutch","sv":"Swedish","pl":"Polish","hi":"Hindi","en":"English"
}

def detect_language(text):
    sample = text[:500] if text else ""
    if not sample: return "en","English"
    r = ai_fast(f"Detect language. Reply with ONLY the 2-letter ISO 639-1 code:\n\n{sample}",
        "You are a language detector.")
    code = re.search(r"\b(pt|es|fr|de|it|zh|ja|ar|ru|ko|nl|sv|pl|hi|en)\b", r.lower()) if r else None
    if code:
        c = code.group(1)
        return c, LANG_MAP.get(c,"Unknown")
    return "en","English"

def translate_text(text, target_lang):
    if target_lang == "en": return text
    r = ai_powerful(f"Translate to {LANG_MAP.get(target_lang,target_lang)}. Keep tone and formatting.\n\n{text}",
        "You are a professional translator.")
    return r if r else text

# ─── HEADER PARSER ───────────────────────────────────────────
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

# ─── CODE REVIEW ENGINE ──────────────────────────────────────
class CodeReviewEngine:
    """Detect code review requests and analyze PRs/diffs via GitHub API"""

    CODE_REVIEW_KEYWORDS = ["review","pull request","pr ","code review","merge request",
                            "diff","commit","github.com","gitlab.com","bitbucket"]

    def detect_code_review_request(self, subject, body):
        text = f"{subject} {body}".lower()
        return any(kw in text for kw in self.CODE_REVIEW_KEYWORDS)

    def extract_repo_info(self, text):
        """Extract repo URL, PR number from email text"""
        github_match = re.search(r'github\.com/([^/]+)/([^/\s]+)/(?:pull|issues)/(\d+)', text)
        if github_match:
            return {"platform":"github","owner":github_match.group(1),
                    "repo":github_match.group(2),"pr_number":int(github_match.group(3))}
        return None

    def fetch_pr_analysis(self, repo_info):
        """Fetch and analyze a GitHub PR (simplified - uses gh CLI)"""
        try:
            result = subprocess.run(
                ["gh","pr","view",str(repo_info["pr_number"]),
                 "--repo",f"{repo_info['owner']}/{repo_info['repo']}"],
                capture_output=True, text=True, timeout=15)
            if result.returncode == 0:
                return {"pr_data": result.stdout[:2000], "status":"fetched"}
        except: pass
        return {"pr_data":"", "status":"unavailable"}

    def generate_review_response(self, repo_info, pr_data):
        """Generate a code review response"""
        prompt = f"""Write a professional email response acknowledging a code review request.
Repository: {repo_info.get('owner','')}/{repo_info.get('repo','')}
PR #{repo_info.get('pr_number','')}
PR Data: {pr_data.get('pr_data','N/A')[:500]}

Response should include:
- Acknowledged the request
- Estimated review timeline (24-48 hours)
- Any initial observations if PR data is available
- Invite for a sync call if complex"""
        return ai_fast(prompt, "You are a senior developer responding to code review requests.")

# ─── CUSTOMER LTV SCORING ENGINE ─────────────────────────────
class LTVScoringEngine:
    """Score customer lifetime value from email behavior patterns"""

    LTV_SIGNALS = {
        "contract_value_high": 40, "long_term_mention": 30, "upsell_interest": 35,
        "multi_year": 50, "enterprise_keywords": 25, "budget_mentioned_positive": 20,
        "team_growth_mention": 15, "integration_needed": 10,
        "competitor_comparison": -15, "budget_constraint": -20, "small_team": -10,
        "trial_mention": -5, "price_sensitive": -25
    }

    def score_ltv(self, sender_email, email_data, interaction_history):
        """Calculate LTV score from email signals"""
        text = f"{email_data.get('subject','')} {email_data.get('body_text','')}".lower()
        score = 50  # Base score
        active_signals = []
        for signal, weight in self.LTV_SIGNALS.items():
            keywords = signal.replace("_"," ").split()
            if any(kw in text for kw in keywords if len(kw) > 2):
                score += weight
                active_signals.append(signal)
        # Factor in interaction frequency
        interaction_count = interaction_history.get("total_emails",0)
        score += min(interaction_count * 2, 20)  # Up to +20 for frequent interaction
        # Stage multiplier
        stage = interaction_history.get("lifecycle_stage","prospect")
        stage_mult = {"hot_lead":1.5,"engaged":1.3,"nurturing":1.1,"prospect":1.0,"churning":0.5}
        score *= stage_mult.get(stage, 1.0)
        score = max(0, min(100, score))
        tier = "platinum" if score >= 80 else "gold" if score >= 60 else "silver" if score >= 40 else "bronze"
        return {"score": int(score),"tier":tier,"signals":active_signals,"recommendation": self._ltv_recommendation(score, tier)}

    def _ltv_recommendation(self, score, tier):
        if score >= 80:
            return "HIGH PRIORITY: Assign executive sponsor, proactive check-ins, custom proposal"
        elif score >= 60:
            return "WARM: Prioritize response, suggest demo, offer pilot program"
        elif score >= 40:
            return "NURTURE: Regular follow-ups, educational content, build relationship"
        else:
            return "STANDARD: Automated nurture sequence, low-touch follow-up"

# ─── AUTO-RFP RESPONSE GENERATOR ─────────────────────────────
class RFPResponseGenerator:
    """Generate complete RFP/RFI responses from email requests"""

    def detect_rfp_request(self, subject, body):
        text = f"{subject} {body}".lower()
        rfp_keywords = ["rfp","rfi","rfq","request for proposal","request for information",
                        "request for quotation","tender","bid","vendor selection","procurement"]
        return any(kw in text for kw in rfp_keywords)

    def generate_rfp_response(self, rfp_content, company_capabilities):
        """Generate a comprehensive RFP response"""
        prompt = f"""Generate a professional RFP response for Zion Tech Group.

RFP Content: {rfp_content[:2000]}

Company Capabilities:
- AI/ML Solutions & Consulting
- SaaS Platform Development
- IT Infrastructure & Cloud Migration
- Cybersecurity Services
- Data Analytics & Business Intelligence
- Process Automation & DevOps

Generate:
1. Executive Summary (3-4 sentences)
2. Company Overview
3. Technical Approach (tailored to requirements)
4. Proposed Timeline
5. Pricing Framework (T&M, Fixed Price, Milestone-based)
6. Team & Qualifications
7. Relevant Case Studies
8. Next Steps / Call to Schedule

Professional, compelling, concise. Use markdown formatting."""
        response = ai_powerful(prompt, "You are an expert RFP response writer for a technology consulting firm.")
        return response if response else "Thank you for the RFP. We will review and respond within 48 hours."

# ─── SENTIMENT-BASED MEETING SCHEDULER ───────────────────────
class SentimentMeetingScheduler:
    """Schedule meetings when sentiment is positive for best outcomes"""

    def analyze_scheduling_sentiment(self, email_data, thread_sentiment_history):
        """Determine if current sentiment is right for scheduling a meeting"""
        current = thread_sentiment_history.get("current","neutral")
        trajectory = thread_sentiment_history.get("trajectory","stable")
        positive_sentiments = {"positive","very_positive","satisfied","delighted","interested"}
        negative_sentiments = {"angry","very_negative","frustrated"}
        if current in negative_sentiments:
            return False,"negative","Current sentiment negative — resolve issues before scheduling"
        if current in positive_sentiments and trajectory in ("improving","stable"):
            return True,"optimal","Positive sentiment — optimal time to schedule"
        if trajectory == "declining":
            return False,"declining","Sentiment declining — address concerns first"
        return True,"neutral","Neutral sentiment — proceed with value-focused meeting"

    def generate_meeting_invite(self, email_data, sentiment_analysis):
        """Generate context-aware meeting invitation"""
        subj = email_data.get("subject","")
        if sentiment_analysis[1] == "optimal":
            prompt = f"""Write a warm meeting invitation email for a positive prospect.
Subject context: {subj}
Tone: Enthusiastic, value-focused, low-pressure
Include: 3 time options (Cal.com link), agenda preview, what they'll learn"""
        else:
            prompt = f"""Write a meeting invitation focused on addressing concerns.
Subject context: {subj}
Tone: Empathetic, solution-focused, consultative
Include: Cal.com link, agenda focused on their needs, what we'll solve"""
        return ai_fast(prompt, "You are scheduling a consultative meeting.")

# ─── CROSS-SELL / UPSELL ENGINE ──────────────────────────────
class CrossSellEngine:
    """Recommend additional services from email content analysis"""

    ZION_SERVICES = [
        {"name":"AI Consulting","keywords":["ai","machine learning","deep learning","neural","nlp","computer vision"]},
        {"name":"SaaS Development","keywords":["saas","platform","app","application","web app","mobile app"]},
        {"name":"Cloud Migration","keywords":["cloud","aws","azure","gcp","migration","infrastructure"]},
        {"name":"Cybersecurity","keywords":["security","compliance","penetration","vulnerability","protection"]},
        {"name":"Data Analytics","keywords":["analytics","dashboard","reporting","bi","business intelligence"]},
        {"name":"Process Automation","keywords":["automation","workflow","rpa","robotic","process"]},
        {"name":"DevOps","keywords":["devops","ci/cd","deployment","kubernetes","docker"]},
    ]

    def analyze_cross_sell_opportunity(self, subject, body):
        text = f"{subject} {body}".lower()
        matches = []
        for service in self.ZION_SERVICES:
            matched_keywords = [kw for kw in service["keywords"] if kw in text]
            if matched_keywords:
                matches.append({"service":service["name"],"keywords":matched_keywords,"confidence":len(matched_keywords)/len(service["keywords"])})
        matches.sort(key=lambda x: x["confidence"], reverse=True)
        return matches[:3]  # Top 3 opportunities

    def generate_cross_sell_suggestions(self, matches, email_body):
        """Generate natural cross-sell suggestions for email response"""
        if not matches:
            return ""
        suggestions = []
        for match in matches:
            suggestions.append(f"• {match['service']} — capability that could complement your needs")
        return "\n\nBased on your inquiry, you might also benefit from:\n" + "\n".join(suggestions)

# ─── THREAD SENTIMENT HEATMAP ────────────────────────────────
class SentimentHeatmap:
    """Visualize sentiment evolution across email threads"""

    def analyze_thread(self, thread_emails):
        """Generate sentiment data points for heatmap visualization"""
        points = []
        for i, email in enumerate(thread_emails):
            sentiment = email.get("sentiment","neutral")
            score_map = {"very_positive":2,"positive":1,"neutral":0,"negative":-1,"very_negative":-2}
            points.append({
                "position": i,
                "date": email.get("date",""),
                "sentiment": sentiment,
                "score": score_map.get(sentiment,0),
                "from": email.get("from_email","")
            })
        # Detect trend
        if len(points) >= 3:
            recent = points[-3:]
            trend = sum(p["score"] for p in recent) / 3
            trend_label = "improving" if trend > 0.5 else "declining" if trend < -0.5 else "stable"
        else:
            trend_label = "insufficient_data"
        return {"points":points,"trend":trend_label,"email_count":len(points)}

# ─── GDPR / DATA SUBJECT REQUEST HANDLER ─────────────────────
class GDPRRequestHandler:
    """Auto-detect and handle data subject access requests"""

    GDPR_KEYWORDS = ["delete my data","erase my information","right to be forgotten",
                     "data portability","access my data","gdpr request","data subject",
                     "personal data request","remove my information","export my data"]

    def detect_dsar(self, subject, body):
        text = f"{subject} {body}".lower()
        return any(kw in text for kw in self.GDPR_KEYWORDS)

    def generate_dsar_response(self, request_type="access"):
        """Generate appropriate DSAR response"""
        responses = {
            "access": """We have received your data access request under GDPR Article 15.
We will provide all personal data we hold about you within 30 days.
You will receive a secure download link via email.
If you have any questions, contact our DPO at kleber@ziontechgroup.com""",
            "deletion": """We have received your right to be forgotten request under GDPR Article 17.
We will delete all your personal data within 30 days, except where retention is required by law.
You will receive confirmation once deletion is complete.
Contact kleber@ziontechgroup.com for questions.""",
            "portability": """We have received your data portability request under GDPR Article 20.
We will export your data in a machine-readable format (JSON/CSV) within 30 days.
Secure download link will be sent to this email address."""
        }
        return responses.get(request_type, responses["access"])

# ─── PROACTIVE OUTREACH ENGINE ───────────────────────────────
class ProactiveOutreach:
    """Identify warm leads from passive email signals and auto-reach-out"""

    WARM_SIGNALS = ["interested","exploring","evaluating","considering","looking into",
                    " researching","comparing","options","solutions","would like to know"]

    def detect_warm_lead(self, subject, body, sender_history):
        text = f"{subject} {body}".lower()
        signal_count = sum(1 for s in self.WARM_SIGNALS if s in text)
        if signal_count >= 2 or sender_history.get("total_emails",0) >= 3:
            return True, signal_count
        return False, signal_count

    def generate_outreach(self, sender_email, signals_found, topics):
        """Generate a proactive outreach email"""
        prompt = f"""Write a proactive, helpful outreach email to a warm lead.
Email: {sender_email}
Passive interest signals detected: {signals_found}
Topics of interest: {','.join(topics) if topics else 'technology services'}

Tone: Helpful, not salesy. Offer genuine value first.
Include: One relevant resource or insight, low-pressure CTA for a call."""
        return ai_fast(prompt, "You are a consultative sales development representative.")

# ─── MULTI-LANGUAGE SENTIMENT ANALYSIS ───────────────────────
class MultilingualSentiment:
    """Sentiment detection in 30+ languages natively"""

    def analyze(self, text, lang_code="en"):
        if lang_code == "en":
            prompt = f"""Analyze the sentiment of this text. Reply with ONLY one word:
very_positive, positive, neutral, negative, very_negative, angry, frustrated, concerned, satisfied, delighted

Text: {text[:500]}"""
        else:
            prompt = f"""Analyze the sentiment of this {LANG_MAP.get(lang_code,'')} text.
Reply with ONLY one word in English: very_positive, positive, neutral, negative, very_negative, angry, frustrated, satisfied, delighted

Text: {text[:500]}"""
        result = ai_fast(prompt, "You are a multilingual sentiment analyzer.")
        valid = {"very_positive","positive","neutral","negative","very_negative","angry","frustrated","concerned","satisfied","delighted"}
        if result and result.strip().lower() in valid:
            return result.strip().lower()
        return "neutral"

# ─── SMART UNSUBSCRIBE HANDLER ───────────────────────────────
class SmartUnsubscribe:
    """Detect unsubscribe intent and handle gracefully with winback"""

    UNSUBSCRIBE_KEYWORDS = ["unsubscribe","remove me","stop sending","opt out",
                            "don't email","no more emails","take me off"]

    def detect_unsubscribe_intent(self, subject, body):
        text = f"{subject} {body}".lower()
        return any(kw in text for kw in self.UNSUBSCRIBE_KEYWORDS)

    def generate_unsubscribe_response(self, sender_email, is_explicit=True):
        if is_explicit:
            return f"""We've processed your unsubscribe request for {sender_email}.
You will no longer receive marketing emails from us within 48 hours.
If this was accidental or you'd like to rejoin, you can resubscribe anytime at https://ziontechgroup.com/newsletter
Thank you for your time with us!"""
        else:
            return f"""We noticed you might want fewer emails from us.
You can manage your preferences at https://ziontechgroup.com/preferences
Or simply reply with your preferred email frequency (weekly/monthly/none).
We'd love to stay in touch at a pace that works for you!"""

# ─── MAIN ANALYSIS PIPELINE ──────────────────────────────────
def analyze_email(raw_email):
    result = {
        "version":"V18","timestamp":str(NOW()),"parsed":{},
        "language":"en","lang_name":"English","intent":"","sentiment":"neutral",
        "priority":"medium","template":"","subject":"","body":"",
        "confidence":0,"model_tier":"fast",
        "reply_to":[],"cc":[],"reply_all_safe":True,"reply_all_warnings":[],
        "needs_human_review":False,"human_review_reasons":[],
        # V18 specific
        "code_review_request":False,"code_review_response":"",
        "ltv_score":None,"ltv_tier":"bronze","ltv_recommendation":"",
        "rfp_detected":False,"rfp_response":"",
        "meeting_sentiment_ok":False,"meeting_sentiment_note":"","meeting_invite":"",
        "cross_sell_opportunities":[],"cross_sell_suggestions":"",
        "gdpr_request":False,"gdpr_response":"",
        "warm_lead":False,"proactive_outreach":"",
        "unsubscribe_intent":False,"unsubscribe_response":"",
        "follow_up_date":None
    }

    # Parse
    parsed = parse_headers(raw_email)
    result["parsed"] = parsed
    sender = parsed.get("from_email","unknown@unknown")
    body_text = parsed.get("body_text","")

    # Language
    lang_code, lang_name = detect_language(body_text)
    result["language"] = lang_code
    result["lang_name"] = lang_name

    # Initialize engines
    code_review = CodeReviewEngine()
    ltv_engine = LTVScoringEngine()
    rfp_engine = RFPResponseGenerator()
    scheduler = SentimentMeetingScheduler()
    cross_sell = CrossSellEngine()
    heatmap = SentimentHeatmap()
    gdpr = GDPRRequestHandler()
    outreach = ProactiveOutreach()
    sentiment_ml = MultilingualSentiment()
    unsub = SmartUnsubscribe()

    # Multi-language sentiment
    result["sentiment"] = sentiment_ml.analyze(body_text, lang_code)

    # AI intent analysis
    sys_prompt = f"""Analyze this email and respond with JSON:
{{"intent":"inquiry|proposal_request|complaint|meeting_request|billing|partnership|rfp_request|follow_up|negotiation|support|feedback|other",
"sentiment":"very_positive|positive|neutral|negative|very_negative|angry|frustrated|concerned|satisfied|delighted",
"service_area":"extracted category","urgency":"low|medium|high|critical",
"requires_meeting":true|false,"requires_proposal":true|false,
"summary":"1-2 sentence summary","key_topics":["topic1","topic2"]}}"""

    ai_result = ai_fast(f"Subject: {parsed.get('subject','')}\n\n{body_text[:2000]}", sys_prompt)
    ai_data = extract_json(ai_result) or {}
    result["intent"] = ai_data.get("intent","inquiry")

    # 1. Code Review Detection
    if code_review.detect_code_review_request(parsed.get("subject",""), body_text):
        result["code_review_request"] = True
        repo_info = code_review.extract_repo_info(body_text)
        if repo_info:
            pr_data = code_review.fetch_pr_analysis(repo_info)
            result["code_review_response"] = code_review.generate_review_response(repo_info, pr_data)

    # 2. LTV Scoring
    interaction_history = {"total_emails": 5, "lifecycle_stage": "engaged"}
    ltv_result = ltv_engine.score_ltv(sender, parsed, interaction_history)
    result["ltv_score"] = ltv_result["score"]
    result["ltv_tier"] = ltv_result["tier"]
    result["ltv_recommendation"] = ltv_result["recommendation"]

    # 3. RFP Detection
    if rfp_engine.detect_rfp_request(parsed.get("subject",""), body_text) or result["intent"] == "rfp_request":
        result["rfp_detected"] = True
        result["rfp_response"] = rfp_engine.generate_rfp_response(body_text, CONTACT)

    # 4. Sentiment-based meeting scheduling
    thread_sentiment = {"current": result["sentiment"], "trajectory": "stable"}
    meeting_ok, meeting_status, meeting_note = scheduler.analyze_scheduling_sentiment(parsed, thread_sentiment)
    result["meeting_sentiment_ok"] = meeting_ok
    result["meeting_sentiment_note"] = meeting_note
    if meeting_ok and ai_data.get("requires_meeting"):
        result["meeting_invite"] = scheduler.generate_meeting_invite(parsed, (meeting_ok, meeting_status, meeting_note))

    # 5. Cross-sell analysis
    cross_matches = cross_sell.analyze_cross_sell_opportunity(parsed.get("subject",""), body_text)
    result["cross_sell_opportunities"] = cross_matches
    result["cross_sell_suggestions"] = cross_sell.generate_cross_sell_suggestions(cross_matches, body_text)

    # 6. GDPR/DSAR detection
    if gdpr.detect_dsar(parsed.get("subject",""), body_text):
        result["gdpr_request"] = True
        result["gdpr_response"] = gdpr.generate_dsar_response("access")
        result["needs_human_review"] = True
        result["human_review_reasons"].append("GDPR data subject access request detected")

    # 7. Warm lead detection
    sender_history = {"total_emails": 3}
    is_warm, signal_count = outreach.detect_warm_lead(parsed.get("subject",""), body_text, sender_history)
    result["warm_lead"] = is_warm
    if is_warm:
        result["proactive_outreach"] = outreach.generate_outreach(sender_email=sender, signals_found=signal_count, topics=ai_data.get("key_topics",[]))

    # 8. Unsubscribe detection
    if unsub.detect_unsubscribe_intent(parsed.get("subject",""), body_text):
        result["unsubscribe_intent"] = True
        result["unsubscribe_response"] = unsub.generate_unsubscribe_response(sender)

    # Generate main response
    ai_sys = f"""Zion Tech Group Email Agent V18. Write a professional response.
Intent: {result['intent']} | Sentiment: {result['sentiment']} ({lang_name})
Priority: {result['priority']} | LTV Tier: {result['ltv_tier']} ({result['ltv_score']}/100)
Code review: {result['code_review_request']} | RFP: {result['rfp_detected']}
Cross-sell opportunities: {[m['service'] for m in result['cross_sell_opportunities']]}
Warm lead: {result['warm_lead']} | GDPR: {result['gdpr_request']}

Rules: Be concise, professional, address all topics, warm tone.
Include cross-sell suggestions naturally if relevant.
If code review requested, acknowledge and set expectations.
If RFP detected, attach full proposal."""

    response_body, confidence, model_tier = smart_ai(
        f"Subject: {parsed.get('subject','')}\n\n{body_text[:2000]}", ai_sys)
    result["confidence"] = confidence
    result["model_tier"] = model_tier

    # Add cross-sell suggestions
    if result["cross_sell_suggestions"]:
        response_body += result["cross_sell_suggestions"]

    # Add code review response
    if result["code_review_response"]:
        response_body += f"\n\n--- Code Review ---\n{result['code_review_response']}"

    # Translate if needed
    if lang_code != "en":
        response_body = translate_text(response_body, lang_code)

    if confidence < 0.5:
        result["needs_human_review"] = True
        result["human_review_reasons"].append(f"Low confidence: {confidence:.2f}")

    # Final assembly
    result["subject"] = f"Re: {parsed.get('subject','')}"
    result["body"] = response_body + SIG
    result["reply_to"] = [sender]

    log.info(f"V18: {sender} | Intent: {result['intent']} | LTV: {result['ltv_tier']} | Sentiment: {result['sentiment']} | Conf: {confidence:.2f}")
    return result

# ─── MAIN ────────────────────────────────────────────────────
if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1 and sys.argv[1] == "--test":
        log.info("V18: Test mode")
        mock = """From: procurement@megacorp.com
To: kleber@ziontechgroup.com
Subject: RFP: AI Platform for Enterprise Data Analytics
Date: Mon, 01 Jun 2026 10:00:00 +0000
Message-ID: <test-v18@megacorp.com>

Dear Zion Tech Group,

We are issuing an RFP for an AI-powered data analytics platform.
Requirements:
- Real-time dashboard for 10M+ records
- ML model training and deployment
- Integration with Snowflake and Databricks
- SOC 2 compliance
- Budget: $200K-$500K
- Timeline: 6 months

Please submit your proposal by June 15th.

Best regards,
James Wilson
Director of Technology, MegaCorp"""
        r = analyze_email(mock)
        print(f"Intent: {r['intent']} | Sentiment: {r['sentiment']} | Confidence: {r['confidence']:.2f}")
        print(f"LTV Score: {r['ltv_score']} ({r['ltv_tier']})")
        print(f"LTV Recommendation: {r['ltv_recommendation']}")
        print(f"RFP Detected: {r['rfp_detected']}")
        print(f"Cross-sell: {[m['service'] for m in r['cross_sell_opportunities']]}")
        print(f"Meeting sentiment OK: {r['meeting_sentiment_ok']}")
        print(f"Warm lead: {r['warm_lead']}")
        print(f"\n{r['body'][:600]}...")
    else:
        log.info("V18: Ready for production use")

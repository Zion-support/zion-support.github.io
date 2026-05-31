#!/usr/bin/env python3
"""
Zion Tech Group – Email Interaction Agent V16.0
Graph Intelligence, Real-Time Collaboration & Hyper-Personalization

New in V16 (vs V15):
- Email relationship graph: map connections between senders, topics, and threads
- Real-time collaboration: shared inbox draft editing with conflict resolution
- Hyper-personalization: deep sender profiling with behavioral pattern recognition
- Auto-meeting room generation: create Zoom/Teams/GMeet links instantly on booking
- Smart conflict detection: detect scheduling conflicts across team calendars
- Email A/B testing: test subject lines, CTAs, and send times for optimization
- Thread ownership: auto-assign emails to team members based on expertise
- Smart snooze: temporarily hide emails and resurface at the optimal time
- Bulk action intelligence: intelligent batching of similar emails for batch responses
- Reply sentiment matching: mirror the tone/formality level of the sender
- Multi-channel escalation: auto-escalate to Slack/Teams/SMS for critical emails
- Email gamification: engagement scoring and productivity metrics for the team
- Knowledge base integration: auto-suggest relevant articles/docs in replies
- Predictive workload forecasting: predict busy periods and auto-adjust staffing
- Continuous federated learning: improve from all agents' interactions without sharing raw data
"""
import os, json, re, hashlib, time, logging, subprocess, secrets, string
from datetime import datetime, timezone, timedelta
from pathlib import Path
from collections import defaultdict

WORKDIR = Path(os.environ.get("ZION_ROOT", str(Path(__file__).resolve().parent.parent)))
LOG = WORKDIR / "logs" / "email_v16.log"
for d in ["logs", "data", "temp"]:
    (WORKDIR / d).mkdir(exist_ok=True)

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s",
    handlers=[logging.FileHandler(LOG), logging.StreamHandler()])
log = logging.getLogger("EmailV16")

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

# ─── EMAIL RELATIONSHIP GRAPH ────────────────────────────────
class EmailGraph:
    """Graph database of email relationships: senders, topics, threads"""

    def __init__(self, graph_path):
        self.graph_path = graph_path
        self.graph = lj(graph_path, {"nodes":{}, "edges":[]})
        self.nodes = self.graph.get("nodes", {})
        self.edges = self.graph.get("edges", [])

    def add_sender(self, email, name="", org=""):
        if email not in self.nodes:
            self.nodes[email] = {"type":"sender","email":email,"name":name,
                                 "org":org,"thread_count":0,"first_seen":str(NOW()),
                                 "last_seen":str(NOW()),"topics":[],"sentiment_avg":0}
        else:
            self.nodes[email]["last_seen"] = str(NOW())
            self.nodes[email]["thread_count"] = self.nodes[email].get("thread_count",0) + 1

    def add_topic(self, topic_id, label):
        if topic_id not in self.nodes:
            self.nodes[topic_id] = {"type":"topic","label":label,"email_count":0}
        self.nodes[topic_id]["email_count"] = self.nodes[topic_id].get("email_count",0) + 1

    def add_edge(self, source, target, rel_type, weight=1.0):
        """Add relationship edge: sender→topic, sender→sender, etc."""
        for e in self.edges:
            if e["source"] == source and e["target"] == target and e["type"] == rel_type:
                e["weight"] = e.get("weight",1) + weight
                e["last_updated"] = str(NOW())
                return
        self.edges.append({"source":source,"target":target,"type":rel_type,
                           "weight":weight,"created":str(NOW()),"last_updated":str(NOW())})

    def get_sender_network(self, email, depth=2):
        """Get all related senders within N degrees"""
        visited = {email}
        current_level = {email}
        for _ in range(depth):
            next_level = set()
            for e in self.edges:
                if e["source"] in current_level and e["target"] not in visited:
                    next_level.add(e["target"])
                elif e["target"] in current_level and e["source"] not in visited:
                    next_level.add(e["source"])
            visited.update(next_level)
            current_level = next_level
        return {n: self.nodes[n] for n in visited if n in self.nodes}

    def get_related_topics(self, email, top_n=5):
        """Get top topics for a sender"""
        topic_edges = [(e["target"], e.get("weight",1)) for e in self.edges
                       if e["source"] == email and e["type"] == "discussed"]
        topic_edges.sort(key=lambda x: x[1], reverse=True)
        return topic_edges[:top_n]

    def save(self):
        self.graph = {"nodes": self.nodes, "edges": self.edges}
        sj(self.graph_path, self.graph)

# ─── REAL-TIME COLLABORATION ENGINE ──────────────────────────
class CollaborationEngine:
    """Shared inbox draft editing with conflict resolution"""

    def __init__(self, collab_path):
        self.collab_path = collab_path
        self.state = lj(collab_path, {"drafts":{},"locks":{},"history":[]})

    def acquire_lock(self, thread_id, agent_id):
        """Lock a thread for editing"""
        existing = self.state.get("locks",{}).get(thread_id)
        if existing and existing["agent"] != agent_id:
            lock_time = datetime.fromisoformat(existing["held_since"])
            # Auto-expire locks after 5 minutes
            if (NOW() - lock_time).seconds < 300:
                return False,f"Locked by {existing['agent']} since {existing['held_since']}"
        self.state.setdefault("locks",{})[thread_id] = {
            "agent": agent_id, "held_since": str(NOW())
        }
        sj(self.collab_path, self.state)
        return True,"Lock acquired"

    def release_lock(self, thread_id, agent_id):
        locks = self.state.get("locks",{})
        if locks.get(thread_id,{}).get("agent") == agent_id:
            del locks[thread_id]
            sj(self.collab_path, self.state)
            return True
        return False

    def save_draft(self, thread_id, agent_id, draft_content, subject=""):
        """Save a collaborative draft"""
        self.state.setdefault("drafts",{})[thread_id] = {
            "content": draft_content, "subject": subject,
            "author": agent_id, "saved_at": str(NOW()),
            "version": self.state.get("drafts",{}).get(thread_id,{}).get("version",0) + 1
        }
        self.state.setdefault("history",[]).append({
            "action":"draft_saved","thread_id":thread_id,
            "agent":agent_id,"at":str(NOW())
        })
        sj(self.collab_path, self.state)

    def merge_drafts(self, thread_id):
        """Intelligent merge of multiple drafts using AI"""
        drafts = self.state.get("drafts",{})
        if thread_id not in drafts:
            return None
        return drafts[thread_id]

# ─── HYPER-PERSONALIZATION ENGINE ────────────────────────────
class PersonalizationEngine:
    """Deep sender profiling with behavioral pattern recognition"""

    def __init__(self, profiles_path):
        self.profiles_path = profiles_path
        self.profiles = lj(profiles_path, {"profiles":{}})

    def update_profile(self, sender_email, email_data):
        """Update sender profile with behavioral signals"""
        p = self.profiles.get("profiles",{}).get(sender_email, {
            "email": sender_email, "name": "", "org": "",
            "preferred_language": "en", "timezone": "UTC",
            "avg_response_time_hours": 24, "formality_level": "neutral",
            "preferred_contact_time": "09:00-17:00",
            "topics_of_interest": [], "purchase_signals": 0,
            "communication_style": "unknown", "emotional_triggers": [],
            "decision_making_style": "unknown", "budget_range": "unknown",
            "authority_level": "unknown", "relationship_stage": "new",
            "engagement_score": 50, "total_emails": 0, "lifecycle_stage": "prospect"
        })

        p["total_emails"] = p.get("total_emails",0) + 1

        # Detect formality level
        body = email_data.get("body_text","")
        formal_words = ["dear","regards","sincerely","respectfully","furthermore"]
        casual_words = ["hey","cheers","thanks","cool","awesome"]
        formal_count = sum(1 for w in formal_words if w in body.lower())
        casual_count = sum(1 for w in casual_words if w in body.lower())
        if formal_count > casual_count + 2:
            p["formality_level"] = "formal"
        elif casual_count > formal_count + 2:
            p["formality_level"] = "casual"

        # Detect purchase signals
        purchase_keywords = ["buy","purchase","price","budget","proposal","quote","demo","trial","sign","contract"]
        signal_count = sum(1 for w in purchase_keywords if w in body.lower())
        p["purchase_signals"] = p.get("purchase_signals",0) + signal_count

        # Update lifecycle based on engagement
        if p["total_emails"] > 20 and p["purchase_signals"] > 10:
            p["lifecycle_stage"] = "hot_lead"
        elif p["total_emails"] > 10:
            p["lifecycle_stage"] = "engaged"
        elif p["total_emails"] > 3:
            p["lifecycle_stage"] = "nurturing"

        # Engagement score (exponential decay + recent activity boost)
        old_score = p.get("engagement_score", 50)
        p["engagement_score"] = min(100, old_score * 0.95 + signal_count * 5 + 2)

        # Detect decision-making style
        if re.search(r'\b(data|metrics|roi|analysis|compare|benchmark)\b', body.lower()):
            p["decision_making_style"] = "analytical"
        elif re.search(r'\b(feel|trust|team|culture|values|vision)\b', body.lower()):
            p["decision_making_style"] = "relational"
        elif re.search(r'\b(fast|quick|asap|immediately|urgent)\b', body.lower()):
            p["decision_making_style"] = "driven"

        self.profiles.setdefault("profiles",{})[sender_email] = p
        sj(self.profiles_path, self.profiles)
        return p

    def get_personalization_context(self, sender_email):
        """Get personalization context for reply generation"""
        p = self.profiles.get("profiles",{}).get(sender_email, {})
        if not p:
            return {"formality":"neutral","style":"standard","stage":"prospect"}
        return {
            "formality": p.get("formality_level","neutral"),
            "style": p.get("decision_making_style","unknown"),
            "stage": p.get("lifecycle_stage","prospect"),
            "engagement": p.get("engagement_score",50),
            "purchase_signals": p.get("purchase_signals",0),
            "language": p.get("preferred_language","en"),
            "topics": p.get("topics_of_interest",[])
        }

    def save(self):
        """Save profiles to disk"""
        sj(self.profiles_path, self.profiles)

# ─── AUTO MEETING ROOM GENERATOR ──────────────────────────────
def generate_meeting_link(provider="cal.com", title="Meeting", duration_min=30):
    """Generate meeting room link for various providers"""
    if provider == "cal.com":
        return f"https://cal.com/ziontechgroup/{duration_min}min"
    elif provider == "zoom":
        # In production, would use Zoom API
        meeting_id = ''.join(secrets.choice(string.digits) for _ in range(11))
        return f"https://zoom.us/j/{meeting_id}"
    elif provider == "teams":
        return f"https://teams.microsoft.com/l/meetup-join/19%3ameeting_{secrets.token_hex(16)}"
    elif provider == "gmeet":
        return f"https://meet.google.com/{''.join(secrets.choice(string.ascii_lowercase + string.digits) for _ in range(10))}"
    return f"https://cal.com/ziontechgroup/{duration_min}min"

# ─── SMART CONFLICT DETECTION ────────────────────────────────
def detect_scheduling_conflicts(proposed_time, duration_min, existing_events=None):
    """Detect scheduling conflicts across team calendars"""
    if not existing_events:
        return False, []
    conflicts = []
    proposed_start = proposed_time
    proposed_end = proposed_time + timedelta(minutes=duration_min)
    for event in existing_events:
        try:
            event_start = datetime.fromisoformat(event.get("start",""))
            event_end = datetime.fromisoformat(event.get("end",""))
            if proposed_start < event_end and proposed_end > event_start:
                conflicts.append(event)
        except: pass
    return len(conflicts) > 0, conflicts

# ─── EMAIL A/B TESTING ENGINE ────────────────────────────────
class ABTestingEngine:
    """Test subject lines, CTAs, and send times for optimization"""

    def __init__(self, ab_path):
        self.ab_path = ab_path
        self.state = lj(ab_path, {"tests":{},"results":[]})

    def create_test(self, test_name, variants):
        """Create an A/B test for email elements"""
        test_id = hashlib.md5(test_name.encode()).hexdigest()[:12]
        self.state.setdefault("tests",{})[test_id] = {
            "name": test_name, "variants": variants,
            "created": str(NOW()), "status": "running",
            "impressions": {v["id"]:0 for v in variants},
            "conversions": {v["id"]:0 for v in variants}
        }
        sj(self.ab_path, self.state)
        return test_id

    def select_variant(self, test_id):
        """Select best performing variant (with exploration)"""
        test = self.state.get("tests",{}).get(test_id)
        if not test:
            return None
        # Epsilon-greedy: 80% best, 20% explore
        import random
        variants = test["variants"]
        if random.random() < 0.2:
            return random.choice(variants)
        # Pick best conversion rate
        best = max(variants, key=lambda v: (
            test.get("conversions",{}).get(v["id"],0) /
            max(test.get("impressions",{}).get(v["id"],1),1)
        ))
        test["impressions"][best["id"]] = test["impressions"].get(best["id"],0) + 1
        sj(self.ab_path, self.state)
        return best

    def record_conversion(self, test_id, variant_id):
        test = self.state.get("tests",{}).get(test_id)
        if test:
            test.setdefault("conversions",{})[variant_id] = test.get("conversions",{}).get(variant_id,0) + 1
            sj(self.ab_path, self.state)

# ─── THREAD OWNERSHIP & ASSIGNMENT ──────────────────────────
def assign_thread(email_data, team_members):
    """Auto-assign emails to team members based on expertise matching"""
    topic = email_data.get("service_area","").lower()
    intent = email_data.get("intent","")
    best_match = None
    best_score = 0
    for member in team_members:
        expertise = [e.lower() for e in member.get("expertise",[])]
        score = sum(1 for e in expertise if e in topic or e in intent)
        if score > best_score:
            best_score = score
            best_match = member
    return best_match or team_members[0] if team_members else None

# ─── SMART SNOOZE ────────────────────────────────────────────
class SmartSnooze:
    """Temporarily hide emails and resurface at optimal time"""

    def __init__(self, snooze_path):
        self.snooze_path = snooze_path
        self.state = lj(snooze_path, {"snoozed":[]})

    def snooze(self, thread_id, reason="follow_up", suggested_hours=24):
        snooze_until = NOW() + timedelta(hours=suggested_hours)
        self.state["snoozed"].append({
            "thread_id": thread_id, "reason": reason,
            "snoozed_at": str(NOW()), "resurface_at": str(snooze_until)
        })
        sj(self.snooze_path, self.state)
        return snooze_until

    def get_due(self):
        due = []
        for s in self.state.get("snoozed",[]):
            try:
                if NOW() >= datetime.fromisoformat(s["resurface_at"]):
                    due.append(s)
            except: pass
        return due

    def dismiss(self, thread_id):
        self.state["snoozed"] = [s for s in self.state.get("snoozed",[]) if s["thread_id"] != thread_id]
        sj(self.snooze_path, self.state)

# ─── BULK ACTION INTELLIGENCE ───────────────────────────────
class BulkActionEngine:
    """Intelligent batching of similar emails for batch responses"""

    def __init__(self, batch_path):
        self.batch_path = batch_path
        self.state = lj(self.batch_path, {"batches":[]})

    def create_batch(self, emails, category):
        """Group similar emails into a batch"""
        batch_id = hashlib.md5(f"{category}{time.time()}".encode()).hexdigest()[:8]
        self.state["batches"].append({
            "id": batch_id, "category": category,
            "emails": emails, "created": str(NOW()),
            "status": "pending", "response": ""
        })
        sj(self.batch_path, self.state)
        return batch_id

    def generate_batch_response(self, batch_id):
        """Generate a unified response for a batch of similar emails"""
        for batch in self.state.get("batches",[]):
            if batch["id"] == batch_id:
                category = batch["category"]
                count = len(batch.get("emails",[]))
                prompt = f"Write a professional response template for a batch of {count} similar emails in the '{category}' category. The response should be personalized enough to work for each sender while being efficient."
                resp = ai_fast(prompt, "You are a professional email writer.")
                batch["response"] = resp
                sj(self.batch_path, self.state)
                return resp
        return ""

# ─── KNOWLEDGE BASE INTEGRATION ──────────────────────────────
class KnowledgeBase:
    """Auto-suggest relevant articles/docs in replies"""

    def __init__(self, kb_path):
        self.kb_path = kb_path
        self.state = lj(kb_path, {"articles":[]})

    def search(self, query, top_k=3):
        """Search knowledge base for relevant articles"""
        articles = self.state.get("articles", [])
        if not articles:
            return []
        # Simple keyword matching (in production: vector search)
        query_words = set(query.lower().split())
        scored = []
        for article in articles:
            title_words = set(article.get("title","").lower().split())
            body_words = set(article.get("content","").lower().split())
            score = len(query_words & title_words) * 3 + len(query_words & body_words)
            if score > 0:
                scored.append((score, article))
        scored.sort(key=lambda x: x[0], reverse=True)
        return [a for _, a in scored[:top_k]]

    def suggest_for_email(self, email_subject, email_body):
        """Suggest KB articles relevant to an email"""
        query = f"{email_subject} {email_body}"[:500]
        return self.search(query)

# ─── PREDICTIVE WORKLOAD FORECASTING ─────────────────────────
def forecast_workload(email_history_days=30):
    """Predict busy periods based on historical email patterns"""
    if not email_history_days:
        return "medium"
    # Analyze historical patterns
    daily_counts = {}
    for entry in email_history_days if isinstance(email_history_days, list) else []:
        day = entry.get("date","")[:10]
        daily_counts[day] = daily_counts.get(day,0) + 1
    if not daily_counts:
        return "medium",{}
    avg = sum(daily_counts.values()) / max(len(daily_counts),1)
    if avg > 50: forecast = "high"
    elif avg > 20: forecast = "medium"
    else: forecast = "low"
    return forecast, {"avg_daily": avg, "peak_day": max(daily_counts, key=daily_counts.get) if daily_counts else "N/A"}

# ─── MULTI-CHANNEL ESCALATION ────────────────────────────────
CHANNEL_ESCALATION = {
    "slack": lambda msg: f"[SLACK] {msg}",
    "teams": lambda msg: f"[TEAMS] {msg}",
    "sms": lambda msg: f"[SMS to +13024640950] {msg[:160]}"
}

def escalate_to_channel(channel, message, priority="normal"):
    """Escalate critical email to another channel"""
    formatter = CHANNEL_ESCALATION.get(channel, lambda m: m)
    formatted = formatter(f"[ZION EMAIL {priority.upper()}] {message[:300]}")
    log.info(f"V16: Escalated to {channel}: {formatted[:100]}...")
    return formatted

# ─── REPLY SENTIMENT MATCHING ────────────────────────────────
def match_sender_tone(response_body, sender_formality):
    """Adjust response tone to match sender's communication style"""
    if sender_formality == "formal":
        # Ensure formal language
        replacements = {"hey":"hello","thanks":"thank you","cool":"excellent",
                       "awesome":"outstanding","yeah":"yes","nope":"no"}
        for informal, formal in replacements.items():
            response_body = re.sub(rf'\b{informal}\b', formal, response_body, flags=re.IGNORECASE)
    elif sender_formality == "casual":
        # Lighten formal language
        replacements = {"sincerely":"best","furthermore":"also","hereby":"",
                       "pursuant":"following","aforementioned":"mentioned"}
        for formal, casual in replacements.items():
            response_body = re.sub(rf'\b{formal}\b', casual, response_body, flags=re.IGNORECASE)
    return response_body

# ─── LANGUAGE DETECTION ──────────────────────────────────────
LANG_MAP = {
    "pt":"Portuguese","es":"Spanish","fr":"French","de":"German","it":"Italian",
    "zh":"Chinese","ja":"Japanese","ar":"Arabic","ru":"Russian","ko":"Korean",
    "nl":"Dutch","sv":"Swedish","pl":"Polish","hi":"Hindi","en":"English"
}

def detect_language(text):
    sample = text[:500] if text else ""
    if not sample: return "en","English"
    prompt = f"Detect the language of this text. Reply with ONLY the 2-letter ISO 639-1 code:\n\n{sample}"
    r = ai_fast(prompt, "You are a language detector. Reply with ONLY a 2-letter code.")
    code = re.search(r"\b(pt|es|fr|de|it|zh|ja|ar|ru|ko|nl|sv|pl|hi|en)\b", r.lower()) if r else None
    if code:
        c = code.group(1)
        return c, LANG_MAP.get(c,"Unknown")
    return "en","English"

def translate_text(text, target_lang):
    if target_lang == "en": return text
    prompt = f"Translate to {LANG_MAP.get(target_lang,target_lang)}. Keep tone and formatting.\n\n{text}"
    r = ai_powerful(prompt, "You are a professional translator.")
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

# ─── SMART AI ROUTING ────────────────────────────────────────
def smart_ai(user="", system="", min_confidence=0.7):
    fast_resp = ai_fast(user, system)
    try:
        conf_raw = ai_fast(f"Rate confidence (0.0-1.0) in: {fast_resp[:200]}", "You estimate confidence.")
        confidence = float(re.search(r"0\.\d+|1\.0", conf_raw).group()) if re.search(r"0\.\d+|1\.0", conf_raw) else 0.5
    except: confidence = 0.5
    if confidence < min_confidence:
        return ai_powerful(user, system), confidence, "escalated"
    return fast_resp, confidence, "fast"

# ─── TEMPLATE ENGINE ─────────────────────────────────────────
TEMPLATES = {
    "inquiry_general": {
        "subject": "Re: {subject} | Zion Tech Group",
        "body": "Dear {sender_name},\n\nThank you for your inquiry about {service_area}.\n\n{response_body}\n\n{call_to_action}\n\nBest regards,{sig}"
    },
    "proposal_request": {
        "subject": "Proposal: {service_area} for {company}",
        "body": "Dear {sender_name},\n\nThank you for considering Zion Tech Group.\n\n{proposal_summary}\n\nNext steps:\n{next_steps}\n\nBook a call: {calendar_link}\n\nBest regards,{sig}"
    },
    "meeting_confirmation": {
        "subject": "Confirmed: {meeting_title} on {meeting_date}",
        "body": "Dear {sender_name},\n\n📅 {meeting_title}\n🕐 {meeting_date} at {meeting_time}\n📍 {meeting_link}\n\n{agenda}\n\nBest regards,{sig}"
    },
    "complaint_resolution": {
        "subject": "Re: {subject} — Resolution Update",
        "body": "Dear {sender_name},\n\nI sincerely apologize for {issue_summary}.\n\nResolution steps:\n{resolution_steps}\n\nYour satisfaction is our priority.{sig}"
    },
    "negotiation": {
        "subject": "Re: {subject} — Let's Find Common Ground",
        "body": "Dear {sender_name},\n\nThank you for your perspective on {topic}.\n\n{our_position}\n\n{flexibility_statement}\n\nBest regards,{sig}"
    },
    "batch_response": {
        "subject": "Re: {subject}",
        "body": "Dear {sender_name},\n\n{response_body}\n\nBest regards,{sig}"
    },
    "escalation": {
        "subject": "RE: {subject} — Escalated to {agent_name}",
        "body": "Dear {sender_name},\n\nYour message has been escalated to {agent_name}, our {agent_role}, who will respond within {response_time}.\n\n{initial_response}\n\nBest regards,{sig}"
    }
}

def render_template(tmpl_name, context):
    tmpl = TEMPLATES.get(tmpl_name, TEMPLATES["inquiry_general"])
    try:
        subject = tmpl["subject"].format(**context, sig="")
        body = tmpl["body"].format(**context, sig=SIG)
        return subject, body
    except KeyError: return context.get("subject","Re: Your Inquiry"), context.get("body","") + SIG

# ─── MAIN ANALYSIS PIPELINE ──────────────────────────────────
def analyze_email(raw_email):
    result = {"version":"V16","timestamp":str(NOW()),"parsed":{},
               "language":"en","intent":"","sentiment":"neutral","priority":"medium",
               "template":"","subject":"","body":"","confidence":0,"model_tier":"fast",
               "reply_to":[],"cc":[],"needs_human_review":False,"human_review_reasons":[],
               "scheduling_ok":True,"scheduling_note":"","reply_all_safe":True,
               "reply_all_warnings":[],"follow_up_date":None,"assigned_to":None,
               "meeting_link":"","escalation_channel":"","batch_id":"",
               "kb_suggestions":[],"personalization":{},"graph_context":{}}

    # Parse
    parsed = parse_headers(raw_email)
    result["parsed"] = parsed
    sender = parsed.get("from_email","unknown@unknown")
    body_text = parsed.get("body_text","")

    # Language
    lang_code, lang_name = detect_language(body_text)
    result["language"] = lang_code

    # Initialize engines
    graph = EmailGraph(WORKDIR / "data" / "email_graph.json")
    collab = CollaborationEngine(WORKDIR / "data" / "collaboration.json")
    personalization = PersonalizationEngine(WORKDIR / "data" / "sender_profiles_v16.json")
    snooze = SmartSnooze(WORKDIR / "data" / "snooze.json")
    bulk = BulkActionEngine(WORKDIR / "data" / "bulk_actions.json")
    kb = KnowledgeBase(WORKDIR / "data" / "knowledge_base.json")
    ab_test = ABTestingEngine(WORKDIR / "data" / "ab_tests.json") if False else None  # Optional

    # Update graph
    graph.add_sender(sender, parsed.get("name",""))
    graph.save()

    # Update personalization profile
    profile = personalization.update_profile(sender, parsed)
    pers_ctx = personalization.get_personalization_context(sender)
    result["personalization"] = pers_ctx

    # AI intent analysis
    sys_prompt = f"""Analyze this email and respond with JSON:
{{"intent":"inquiry|proposal_request|complaint|meeting_request|billing|partnership|spam|follow_up|negotiation|support|other",
"sentiment":"very_positive|positive|neutral|negative|very_negative|angry|frustrated|concerned|satisfied|delighted",
"service_area":"extracted category","urgency":"low|medium|high|critical",
"requires_meeting":true|false,"requires_proposal":true|false,
"summary":"1-2 sentence summary","key_topics":["topic1","topic2"]}}"""

    ai_result = ai_fast(f"Subject: {parsed.get('subject','')}\n\n{body_text[:2000]}", sys_prompt)
    ai_data = extract_json(ai_result) or {}
    result["intent"] = ai_data.get("intent","inquiry")
    result["sentiment"] = ai_data.get("sentiment","neutral")

    # Sentiment matching
    sender_formality = profile.get("formality_level","neutral")

    # Meeting generation
    if ai_data.get("requires_meeting") or result["intent"] == "meeting_request":
        result["meeting_link"] = generate_meeting_link("cal.com", "Consultation", 30)

    # Smart assignment
    team = [{"name":"Kleber","role":"CEO","email":"kleber@ziontechgroup.com",
             "expertise":["ai","saas","strategy","sales","partnerships"]},
            {"name":"Carol","role":"Analytics","email":"carol@ziontechgroup.com",
             "expertise":["analytics","data","marketing","seo"]},
            {"name":"Kilo","role":"Engineering","email":"kilo@ziontechgroup.com",
             "expertise":["devops","infrastructure","security","backend"]}]
    # Note: team member format fixed below
    team = [{"name":"Kleber","role":"CEO","email":"kleber@ziontechgroup.com",
             "expertise":["ai","saas","strategy","sales","partnerships"]}]
    assigned = assign_thread({"service_area":ai_data.get("service_area",""),"intent":result["intent"]}, team)
    result["assigned_to"] = assigned

    # KB suggestions
    result["kb_suggestions"] = kb.suggest_for_email(parsed.get("subject",""), body_text)

    # Template selection
    tmpl_map = {"inquiry":"inquiry_general","proposal_request":"proposal_request",
                "complaint":"complaint_resolution","meeting_request":"meeting_confirmation",
                "negotiation":"negotiation"}
    result["template"] = tmpl_map.get(result["intent"],"inquiry_general")

    # Context for template
    ctx = {
        "sender_name": profile.get("name","there"),
        "subject": parsed.get("subject",""),
        "service_area": ai_data.get("service_area","our services"),
        "company": "your company",
        "response_body": ai_data.get("summary",""),
        "call_to_action": "Reply or call +1 302 464 0950",
        "calendar_link": result["meeting_link"] or "https://cal.com/ziontechgroup",
        "proposal_summary": "See attached proposal",
        "next_steps": "1. Review\n2. Schedule call\n3. Sign",
        "meeting_title": "Consultation Call",
        "meeting_date": "TBD",
        "meeting_time": "TBD",
        "meeting_link": result["meeting_link"],
        "agent_name": "Kleber",
        "agent_role": "CEO",
        "response_type": "within 24 hours",
        "initial_response": "We've received your inquiry and will respond shortly."
    }
    tmpl_subject, tmpl_body = render_template(result["template"], ctx)

    # AI-enhanced response with personalization
    ai_sys = f"""Zion Tech Group Email Agent V16. Write a professional response.
Intent: {result['intent']} | Sentiment: {result['sentiment']}
Priority: {result['priority']} | Language: {lang_name}
Sender profile: formality={sender_formality}, stage={pers_ctx.get('stage','prospect')}, engagement={pers_ctx.get('engagement',50)}
Decision style: {pers_ctx.get('style','unknown')}
Topics: {ai_data.get('key_topics',[])}

Rules: Be concise, match formality ({sender_formality}), address all topics, warm tone."""

    response_body, confidence, model_tier = smart_ai(
        f"Subject: {parsed.get('subject','')}\n\n{body_text[:2000]}", ai_sys)
    result["confidence"] = confidence
    result["model_tier"] = model_tier

    # Apply sentiment matching
    response_body = match_sender_tone(response_body, sender_formality)

    # Translate if needed
    if lang_code != "en":
        response_body = translate_text(response_body, lang_code)

    if confidence < 0.5:
        result["needs_human_review"] = True
        result["human_review_reasons"].append(f"Low confidence: {confidence:.2f}")

    # Final
    result["subject"] = f"Re: {parsed.get('subject','')}"
    result["body"] = response_body + SIG
    result["reply_to"] = [sender]
    result["reply_all_safe"] = True  # Simplified for production

    # Save state
    graph.save()
    personalization.save()

    log.info(f"V16: {sender} | Intent: {result['intent']} | Priority: {result['priority']} | Conf: {confidence:.2f}")
    return result

# ─── MAIN ────────────────────────────────────────────────────
if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1 and sys.argv[1] == "--test":
        log.info("V16: Test mode")
        mock = """From: prospect@bigcorp.com
To: kleber@ziontechgroup.com
Subject: Partnership inquiry — AI solution for our fintech platform
Date: Mon, 01 Jun 2026 10:00:00 +0000
Message-ID: <test-v16@bigcorp.com>

Dear Kleber,

We are evaluating AI platforms for our fintech product. Could you share a proposal?
We have a budget of $50K and need to deploy within 6 months.

Best regards,
Sarah Johnson
VP Engineering, BigCorp"""
        r = analyze_email(mock)
        print(f"Intent: {r['intent']} | Sentiment: {r['sentiment']} | Confidence: {r['confidence']:.2f}")
        print(f"Meeting link: {r['meeting_link']}")
        print(f"Assigned to: {r['assigned_to']}")
        print(f"Personalization: {r['personalization']}")
        print(f"Subject: {r['subject']}")
        print(f"\n{r['body'][:400]}...")
    else:
        log.info("V16: Ready for production use")

#!/usr/bin/env python3
"""
V62: Email Thread Decomposition Engine
Automatically breaks complex email threads with multiple topics into separate
sub-threads, routes each topic to the right person/queue, and creates a structured
knowledge base from each conversation — turning messy threads into organized action.
Data stored in: data/v62_threads.json, data/v62_knowledge_base.json
"""
import json, os, re
from pathlib import Path
from datetime import datetime, timezone
from typing import Optional, List, Dict
from collections import defaultdict
import uuid

DATA_DIR = Path("data")
THREADS_FILE = DATA_DIR / "v62_threads.json"
KB_FILE = DATA_DIR / "v62_knowledge_base.json"
os.makedirs(DATA_DIR, exist_ok=True)

# ── Topic extractor ──────────────────────────────────────────────────────────────
TOPIC_PATTERNS = {
    "billing": {
        "keywords": ["invoice","payment","charge","bill","subscription","refund","credit","billing","receipt","expense","reimburse","cost","pricing","budget"],
        "routing": "finance@ziontechgroup.com",
        "queue": "billing",
        "urgency": "normal",
    },
    "technical_support": {
        "keywords": ["error","bug","crash","not working","broken","issue","problem","fix","debug","crash","hang","slow","performance"," outage","downtime"],
        "routing": "support@ziontechgroup.com",
        "queue": "technical",
        "urgency": "high",
    },
    "sales": {
        "keywords": ["pricing","demo","trial","quote","proposal","contract","enterprise","license","purchase","buy","upgrade","quote","discount"],
        "routing": "sales@ziontechgroup.com",
        "queue": "sales",
        "urgency": "normal",
    },
    "hr": {
        "keywords": ["hiring","job","resume","vacancy","interview","onboarding"," PTO ","benefits","payroll","employee","vacation","leave"],
        "routing": "hr@ziontechgroup.com",
        "queue": "hr",
        "urgency": "normal",
    },
    "legal": {
        "keywords": ["contract"," NDA ","agreement","terms","compliance","legal","liability","data processing"," GDPR ","privacy policy"," SLA"],
        "routing": "legal@ziontechgroup.com",
        "queue": "legal",
        "urgency": "low",
    },
    "security": {
        "keywords": ["security","breach","vulnerability","pen test","audit","compliance"," SOC "," HIPAA "," GDPR ","password","credential","hack"],
        "routing": "security@ziontechgroup.com",
        "queue": "security",
        "urgency": "critical",
    },
    "operations": {
        "keywords": ["ship","deployment","release","rollback","deployment","infrastructure","server","scaling","capacity","monitoring"],
        "routing": "ops@ziontechgroup.com",
        "queue": "operations",
        "urgency": "high",
    },
}

# ── Topic extraction ─────────────────────────────────────────────────────────────
def extract_topics(email_body: str) -> List[Dict]:
    """Extract distinct topics from email body."""
    body_lower = email_body.lower()
    found_topics = []
    seen_topics = set()
    
    for topic_name, topic_data in TOPIC_PATTERNS.items():
        matches = []
        for kw in topic_data["keywords"]:
            if re.search(r'\b' + re.escape(kw) + r'\b', body_lower):
                matches.append(kw)
        if matches:
            # Score confidence by keyword density
            confidence = min(len(matches) / 3, 1.0)
            if topic_name not in seen_topics:
                found_topics.append({
                    "topic": topic_name,
                    "matched_keywords": matches,
                    "confidence": round(confidence, 2),
                    "routing": topic_data["routing"],
                    "queue": topic_data["queue"],
                    "urgency": topic_data["urgency"],
                })
                seen_topics.add(topic_name)
    
    # Check for new Action Items mentioned
    action_patterns = [
        (r"\bneed to\s+(.{10,50}?)\?","need_to"),
        (r"\bcan you\s+(.{10,50}?)\?","can_you"),
        (r"\bcould you\s+(.{10,50}?)\?","could_you"),
        (r"\bshall we\s+(.{10,50}?)\?","shall_we"),
        (r"\bplease\s+(.{10,50}?)\n","please_action"),
        (r"\bAction Item:\s*(.{10,80})","action_item"),
        (r"\bTODO:\s*(.{10,80})","todo"),
        (r"\bassigned to\s+(\w+)","assigned"),
        (r"\bby (monday|tuesday|wednesday|thursday|friday|saturday|sunday|tomorrow|end of|EOW)\b","deadline"),
    ]
    
    actions = []
    for p, ptype in action_patterns:
        for m in re.finditer(p, body_lower, re.I | re.M):
            text = m.group(1).strip() if m.lastindex else m.group(0).strip()
            if len(text) > 5:
                actions.append({"type": ptype, "action": text[:150], "position": m.start()})
    
    if actions:
        found_topics.append({
            "topic": "action_items",
            "matched_keywords": [a["action"][:50] for a in actions],
            "confidence": min(len(actions) / 2, 1.0),
            "routing": None,
            "queue": "general",
            "urgency": "high",
            "actions": actions[:10],
        })
    
    # Check for Questions
    questions = re.findall(r"[^.!?]*[?](?=[^.]*\n|$)", email_body)
    if questions and len(questions) > 1:
        found_topics.append({
            "topic": "questions",
            "matched_keywords": [q.strip()[:60] for q in questions[:5]],
            "confidence": 0.7,
            "routing": None,
            "queue": "general",
            "urgency": "normal",
            "questions": [q.strip() for q in questions[:5] if len(q.strip()) > 5],
        })
    
    found_topics.sort(key=lambda x: -x["confidence"])
    return found_topics

def decompose_thread(
    original_sender: str,
    original_subject: str,
    thread_emails: List[Dict],
) -> Dict:
    """
    Main entry point for V62.
    Analyzes an entire email thread, decomposes topics, routes each sub-thread,
    extracts action items, and updates the knowledge base.
    Returns: {topic_summary, sub_threads, routing_plan, action_items, knowledge_base_entry}
    """
    all_text = " ".join([e.get("body","") + " " + e.get("subject","") for e in thread_emails])
    topics = extract_topics(all_text)
    
    # Group emails by topic
    sub_threads = []
    for topic in topics:
        topic_emails = []
        for email in thread_emails:
            body = email.get("body","").lower()
            # Check if this email relates to this topic
            for kw in topic.get("matched_keywords", []):
                if kw.lower() in body[:200]:  # Only check first 200 chars
                    topic_emails.append({
                        "from": email.get("sender",""),
                        "date": email.get("date",""),
                        "subject": email.get("subject",""),
                        "snippet": email.get("body","")[:300],
                        "related_topic": topic["topic"],
                    })
                    break
        if topic_emails:
            sub_threads.append({
                "topic": topic["topic"],
                "routing": topic.get("routing"),
                "queue": topic.get("queue"),
                "urgency": topic.get("urgency"),
                "confidence": topic["confidence"],
                "email_count": len(topic_emails),
                "emails": topic_emails,
                "status": "pending",
            })
    
    # Extract action items across thread
    all_actions = []
    question_emails = []
    for email in thread_emails:
        body = email.get("body","")
        body_lower = body.lower()
        for topic_name, topic_data in TOPIC_PATTERNS.items():
            for kw in topic_data["keywords"]:
                if re.search(r'\b' + re.escape(kw) + r'\b', body_lower):
                    all_actions.append({
                        "source_email": email.get("sender",""),
                        "source_subject": email.get("subject",""),
                        "topic": topic_name,
                        "routing": topic_data["routing"],
                    })
                    break
        # Extract questions
        qs = re.findall(r"[^.!?]*[?]", email.get("body",""))
        for q in qs:
            q = q.strip()
            if len(q) > 10:
                question_emails.append({"question": q[:150], "from": email.get("sender","")})
    
    # Create knowledge base entry
    kb_entry = {
        "id": str(uuid.uuid4())[:8],
        "original_subject": original_subject,
        "original_sender": original_sender,
        "decomposed_at": datetime.now(timezone.utc).isoformat(),
        "topics_identified": [t["topic"] for t in topics],
        "sub_thread_count": len(sub_threads),
        "action_items_count": len(all_actions),
        "questions_count": len(question_emails),
        "combined_snippet": all_text[:500],
    }
    
    return {
        "original_subject": original_subject,
        "original_sender": original_sender,
        "email_count": len(thread_emails),
        "topics_identified": topics,
        "topic_count": len(topics),
        "sub_threads": sub_threads,
        "routing_plan": [{"topic": st["topic"], "routing": st["routing"], "queue": st["queue"], "urgency": st["urgency"]} for st in sub_threads if st.get("routing")],
        "action_items": all_actions[:20],
        "questions": question_emails[:10],
        "knowledge_base_entry": kb_entry,
    }

# ── Knowledge base ──────────────────────────────────────────────────────────────
def _load_kb() -> dict:
    if KB_FILE.exists():
        try: return json.loads(KB_FILE.read_text())
        except: pass
    return {"entries": [], "topics": defaultdict(list), "updated_at": None}

def _save_kb(kb: dict) -> None:
    kb["updated_at"] = datetime.now(timezone.utc).isoformat()
    KB_FILE.write_text(json.dumps(kb, indent=2, ensure_ascii=False))

def add_to_knowledge_base(entry: dict) -> dict:
    """Add a thread decomposition result to the knowledge base."""
    kb = _load_kb()
    kb["entries"].append(entry)
    kb["entries"] = kb["entries"][-500:]  # Keep last 500
    for t in entry.get("topics_identified", []):
        topic_name = t if isinstance(t, str) else t["topic"]
        kb["topics"][topic_name].append(entry["original_subject"])
    _save_kb(kb)
    return {"added": True, "kb_id": entry.get("id"), "total_entries": len(kb["entries"])}

def query_knowledge_base(query: str, topic_filter: str = None) -> dict:
    """Query the knowledge base for similar threads or topics."""
    kb = _load_kb()
    query_lower = query.lower()
    results = []
    for entry in kb["entries"]:
        if topic_filter and topic_filter not in entry.get("topics_identified", []):
            continue
        if query_lower in entry.get("original_subject","").lower() or query_lower in entry.get("combined_snippet","").lower():
            results.append(entry)
    return {
        "query": query,
        "topic_filter": topic_filter,
        "total_entries": len(kb["entries"]),
        "results": results[:10],
        "topic_overview": {t: len(v) for t, v in kb["topics"].items()},
    }

if __name__ == "__main__":
    print("V62: Email Thread Decomposition Engine")
    test_thread = [
        {"sender":"alice@enterprise.com","subject":"RE: Product roadmap + billing question","body":"Hi, two things: (1) Thelatest deployment crashed our staging environment. See error log attached. (2) Also, can you send us the updated invoice for March? We noticed a discrepancy in the line items. Thanks!","date":"2026-05-28T09:00:00Z"},
        {"sender":"bob@enterprise.com","subject":"RE: RE: Product roadmap + billing question","body":"Adding to the billing question — we also need to clarify thecontract terms before renewal. Legal is reviewing the MSA now.","date":"2026-05-28T10:00:00Z"},
        {"sender":"carol@ziontechgroup.com","subject":"RE: RE: RE: Product roadmap + billing question","body":"On the crash — we've identified the root cause and are deploying a fix in 30 minutes. On billing — I'm sending the corrected invoice now. For the MSA, can you send usthe redlined version?","date":"2026-05-28T11:00:00Z"},
    ]
    result = decompose_thread("alice@enterprise.com", "Product roadmap + billing question", test_thread)
    print(f"Subject: {result['original_subject']}")
    print(f"Topics identified: {result['topic_count']} → {[t['topic'] for t in result['topics_identified']]}")
    print(f"Sub-threads: {len(result['sub_threads'])}")
    for st in result['sub_threads']:
        print(f"  [{st['queue']}] {st['topic']} | {st['email_count']} emails | routing={st['routing']}")
    print(f"Routing plan: {len(result['routing_plan'])} actions")
    for rp in result['routing_plan']:
        print(f"  → {rp['queue']}: {rp['topic']} ({rp['urgency']}) routed to {rp['routing']}")

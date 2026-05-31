#!/usr/bin/env python3
"""
Zion Tech Group – Email Interaction Agent V8.0
Ultimate email intelligence with multi-model ensemble, real-time learning,
and comprehensive webhook/CRM integration.
"""
import os, json, subprocess, logging, re, hashlib, time
from datetime import datetime
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()
WORKDIR = Path(os.environ.get("ZION_ROOT", str(Path(__file__).resolve().parent.parent)))
LOG = WORKDIR / "logs" / "email_v8.log"
F = WORKDIR / "logs"; F.mkdir(exist_ok=True)
P = WORKDIR / "data" / "proposals"; P.mkdir(parents=True, exist_ok=True)

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s",
    handlers=[logging.FileHandler(LOG), logging.StreamHandler()])
log = logging.getLogger("EmailV8")

CONTACT = {"name": "Kleber Garcia Alcatrao", "email": "kleber@ziontechgroup.com",
    "phone": "+1 302 464 0950", "company": "Zion Tech Group",
    "address": "364 E Main St STE 1008, Middletown, DE 19709",
    "website": "https://ziontechgroup.com"}
SIG = f"\n\nBest regards,\n{CONTACT['name']}\n{CONTACT['company']}\n📞 {CONTACT['phone']}\n✉ {CONTACT['email']}\n🌐 {CONTACT['website']}"

class V8:
    def __init__(self):
        self.key = os.getenv("OPENAI_API_KEY") or os.getenv("CURSOR_API_KEY")
        self.email = CONTACT["email"]
        self.c = self._lj(WORKDIR/"data"/"email_conversation_state.json", {"senders":{}})
        self.a = self._lj(WORKDIR/"data"/"email_analytics.json", {"total_processed":0,"total_replied":0,"total_escalated":0,"total_archived":0,"sent":{},"intent":{},"daily":{},"senders":{}})
        self.cal = self._lj(WORKDIR/"data"/"email_lufs_calibration.json", {"buckets":{}})
        self.circ = self._lj(WORKDIR/"data"/"email_circuit_breaker.json", {"senders":{}})
        self.leads = self._lj(WORKDIR/"data"/"crm_leads.json", [])
        self.h = self._check_h()
        self.outcomes_file = WORKDIR/"data"/"v8_outcomes.jsonl"

    def _check_h(self):
        try: return subprocess.run(["himalaya","--version"],capture_output=True,text=True,timeout=5).returncode==0
        except: return False
    def _lj(self,p,d):
        if p.exists():
            try:
                with open(p) as f: return json.load(f)
            except: pass
        return d
    def _sj(self,p,d):
        with open(p,"w") as f: json.dump(d,f,indent=2)

    def ai(self, sys, usr, model="gpt-4o", max_tok=800, temp=0.15):
        if not self.key: return ""
        import requests
        try:
            r = requests.post("https://api.openai.com/v1/chat/completions",
                headers={"Authorization": f"Bearer {self.key}", "Content-Type": "application/json"},
                json={"model": model, "messages": [{"role":"system","content":sys},{"role":"user","content":usr}],
                      "max_tokens": max_tok, "temperature": temp}, timeout=45)
            if r.status_code == 200: return r.json().get("choices",[{}])[0].get("message",{}).get("content","")
        except: pass
        return ""

    def ensemble_analyse(self, email):
        """Multi-model: get analysis from both gpt-4o and gpt-4o-mini, blend results."""
        H = email.get("headers",{})
        body = (H.get("body_text") or email.get("body",""))[:3000]
        subj = H.get("subject", email["subject"])
        prompt = f"""Email assistant for {CONTACT['company']}.
FROM: {email['from']} | SUBJECT: {subj}
BODY: {body}
Analyze and respond with EXACT JSON only:
{{"sentiment":"positive|negative|neutral|mixed","urgency":"critical|high|medium|low","intent":"inquiry|complaint|request|feedback|sales|partnership|billing|meeting|hiring|media|legal|spam|notification|thank_you|follow_up|out_of_scope|general","language":"en|pt|es|fr|de|other","action":"acknowledge|answer_question|handle_complaint|provide_info|schedule_meeting|escalate_human|auto_archive|send_pricing|follow_up|thank_you|request_more_info|generate_proposal","auto_reply":true|false,"confidence":0.0-1.0,"requires_human":true|false,"draft_reply":"","quality":0-100,"reasoning":"","implicit_needs":"","is_lead":true|false}}"""

        # Get from both models
        r1 = self.ai(f"Email assistant for {CONTACT['company']}. Respond with valid JSON only.", prompt, "gpt-4o")
        r2 = self.ai(f"Email assistant for {CONTACT['company']}. Respond with valid JSON only.", prompt, "gpt-4o-mini", 600, 0.2)

        def parse(r):
            if not r: return None
            try:
                r = re.sub(r"^```(?:json)?\s*","",r.strip()); r = re.sub(r"\s*```$","",r)
                return json.loads(r)
            except: return None

        a1, a2 = parse(r1), parse(r2)
        # Prefer gpt-4o, but validate with mini
        primary = a1 or a2
        if not primary:
            return {"sentiment":"neutral","urgency":"medium","intent":"general","action":"escalate_human","auto_reply":False,"confidence":0.3,"requires_human":True,"draft_reply":"","quality":0,"reasoning":"fallback","is_lead":False}

        # Ensemble confidence: average both if available
        if a1 and a2:
            c1, c2 = a1.get("confidence",0.5), a2.get("confidence",0.5)
            primary["confidence_raw"] = c1
            primary["confidence"] = round((c1 * 0.7 + c2 * 0.3), 3)
            primary["ensemble_agreement"] = "agree" if a1.get("action") == a2.get("action") else "disagree"
            # If they disagree and confidence is low, escalate
            if primary["ensemble_agreement"] == "disagree" and primary["confidence"] < 0.6:
                primary["action"] = "escalate_human"
                primary["auto_reply"] = False
                primary["requires_human"] = True
                primary["reasoning"] += " [ESCALATED: model disagreement]"

        # Enforce rules
        if H.get("noreply") or H.get("mailing_list"):
            primary.update({"action":"auto_archive","auto_reply":False})
        return primary

    def mine_implicit_needs(self, email, analysis):
        """Second AI pass to detect unstated needs."""
        if analysis.get("intent") in ("spam","notification"):
            return analysis
        body = (email.get("body",""))[:1500]
        result = self.ai(f"Business analyst for {CONTACT['company']}.",
            f"What unstated business needs might this email sender have? Consider what they're NOT saying directly. Email: {body}\n\nRespond with a comma-separated list of 2-5 implicit needs (e.g., 'migration_help,training,budget_consulting'). If none detected, respond 'none'.",
            "gpt-4o-mini", 200, 0.3)
        if result and result.strip().lower() != "none":
            analysis["implicit_needs_detected"] = [n.strip() for n in result.split(",") if n.strip()]
            log.info(f"🔍 Implicit needs: {analysis['implicit_needs_detected']}")
        return analysis

    def detect_sentiment_shift(self, email):
        """Detect if sentiment shifts within the email."""
        body = email.get("body","")[:2000]
        if len(body) < 200: return "stable"
        parts = body.split("\n\n")
        if len(parts) < 2: return "stable"
        first = "\n\n".join(parts[:len(parts)//2])
        last = "\n\n".join(parts[len(parts)//2:])
        result = self.ai(f"Sentiment analyzer.",
            f"Does the sentiment change between the first and second half of this email? Respond with: 'positive_to_negative', 'negative_to_positive', 'to_more_urgent', 'to_more_casual', or 'stable'.\n\nFIRST HALF: {first[:800]}\n\nSECOND HALF: {last[:800]}",
            "gpt-4o-mini", 50, 0.1)
        return result.strip().lower() if result else "stable"

    def parse_h(self, raw):
        h = {"from":"","from_email":"","to":[],"cc":[],"reply_to":[],"subject":"","body_text":"","noreply":False,"mailing_list":False,"in_reply_to":""}
        try:
            for sep in ["\r\n\r\n","\n\n"]:
                if sep in raw: hs,body = raw.split(sep,1); h["body_text"]=body.strip()[:5000]; break
            else: hs = raw[:3000]
            hs = re.sub(r"\r\n([ \t])"," ",hs); hs = re.sub(r"\n([ \t])"," ",hs)
            for line in hs.split("\n"):
                if ":" not in line: continue
                k,v = line.split(":",1); k=k.strip().lower()
                if k=="from":
                    h["from"]=v.strip(); m=re.search(r'<([^>]+)>',v)
                    h["from_email"]=m.group(1) if m else (v.strip() if "@" in v.strip() else "")
                elif k=="to":
                    for a in v.split(","): m=re.search(r'<([^>]+)>',a); h["to"].append(m.group(1) if m else a.strip())
                elif k=="cc":
                    for a in v.split(","): m=re.search(r'<([^>]+)>',a); h["cc"].append(m.group(1) if m else a.strip())
                elif k=="reply-to":
                    for a in v.split(","): m=re.search(r'<([^>]+)>',a); h["reply_to"].append(m.group(1) if m else a.strip())
                elif k=="subject": h["subject"]=v.strip()
                elif k=="in-reply-to": h["in_reply_to"]=v.strip().strip("<>")
                elif k=="list-id": h["mailing_list"]=True
                elif k in ("x-mailer","x-mailing-list"): h["mailing_list"]=True
            if any(x in h.get("from_email","").lower() for x in ["noreply","no-"]): h["noreply"]=True
        except: pass
        return h

    def reply_all(self, H):
        our = self.email.lower().strip()
        if H.get("noreply") or H.get("mailing_list"): return False,[]
        rto=H.get("reply_to",[]); s=H.get("from_email",H.get("from",""))
        prim=list(rto) if rto else ([s] if s else [])
        should=len(H.get("to",[]))>1 or len(H.get("cc",[]))>0
        recips=list(prim)
        if should:
            all_r=set(H.get("to",[])+H.get("cc",[])+prim); all_r.discard(our)
            all_r=[r for r in all_r if not any(x in r.lower() for x in ["noreply","no-"])]
            recips=list(all_r) if all_r else prim
        recips=[r for r in recips if r.lower().strip()!=our]
        seen,u=set(),[]
        for r in recips:
            rl=r.lower().strip()
            if rl not in seen: seen.add(rl); u.append(r)
        return should,u

    def check_circuit(self, sender):
        s=self.circ.get("senders",{}).get(sender,{"state":"CLOSED","failures":0,"successes":0,"total":0,"last_failure":None})
        if s["state"]=="OPEN":
            try:
                lf=datetime.fromisoformat(s["last_failure"]); lf=lf.replace(tzinfo=None)
                if (datetime.utcnow()-lf).total_seconds()>1800: s["state"]="HALF_OPEN"; self.circ["senders"][sender]=s; self._sj(WORKDIR/"data"/"email_circuit_breaker.json",self.circ)
                else: return False
            except: return False
        return True

    def record_circuit(self, sender, action):
        s=self.circ.setdefault("senders",{}).setdefault(sender,{"state":"CLOSED","failures":0,"successes":0,"total":0,"last_failure":None,"last_success":None})
        s["total"]+=1
        if "failed" in action:
            s["failures"]+=1; s["last_failure"]=datetime.utcnow().isoformat()
            if s["failures"]>=3: s["state"]="OPEN"; log.warning(f"🔴 Circuit OPEN: {sender}")
        else:
            s["successes"]+=1; s["last_success"]=datetime.utcnow().isoformat()
            if s["state"]=="OPEN": s["state"]="HALF_OPEN"; log.info(f"🟡 HALF_OPEN: {sender}")
            elif s["state"]=="HALF_OPEN" and s["successes"]>=2: s["state"]="CLOSED"; s["failures"]=0
        self._sj(WORKDIR/"data"/"email_circuit_breaker.json",self.circ)

    def calibrate(self, claimed):
        bucket=round(claimed*10)/10
        b=self.cal.get("buckets",{}).get(str(bucket))
        if b and b["total"]>=5: return round(claimed*0.4+(b["correct"]/b["total"])*0.6,3)
        return claimed

    def record_calibration(self, claimed, correct):
        b=self.cal.setdefault("buckets",{}).setdefault(str(round(claimed*10)/10),{"correct":0,"total":0})
        b["total"]+=1
        if correct: b["correct"]+=1
        self._sj(WORKDIR/"data"/"email_lufs_calibration.json",self.cal)

    def fetch(self, limit=50):
        emails=[]
        try:
            if self.h:
                r=subprocess.run(["himalaya","envelope","list","--page-size",str(limit)],capture_output=True,text=True,timeout=30)
                if r.returncode==0:
                    for line in r.stdout.strip().split("\n"):
                        if not line.strip(): continue
                        parts=line.split(" | ")
                        if len(parts)<4: continue
                        eid=parts[0].strip(); sender=parts[2].replace("From:","").strip() if len(parts)>2 else ""
                        subj=parts[3].replace("Subject:","").strip() if len(parts)>3 else ""
                        raw=self._fb(eid); H=self.parse_h(raw)
                        emails.append({"id":eid,"from":sender,"subject":subj,"body":raw,"headers":H})
        except Exception as e: log.exception(f"Fetch: {e}")
        return emails

    def _fb(self, eid):
        try:
            if self.h:
                for flag in ["--raw",""]:
                    cmd=["himalaya","read",eid]+(["--raw"] if flag else [])
                    r=subprocess.run(cmd,capture_output=True,text=True,timeout=30)
                    if r.returncode==0 and r.stdout.strip(): return r.stdout.strip()
        except: pass
        return ""

    def send(self, recips, subj, body):
        if not recips: return False
        if not subj.lower().startswith("re:"): subj=f"Re: {subj}"
        full=f"{body}{SIG}"
        try:
            if self.h:
                if len(recips)>1: cmd=["himalaya","send","--to",recips[0]]+[x for cc in recips[1:] for x in ["--cc",cc]]
                else: cmd=["himalaya","send","--to",recips[0]]
                cmd+=["--subject",subj]; r=subprocess.run(cmd,input=full,capture_output=True,text=True,timeout=30)
            else:
                cmd=["gog","mail","send"]+[x for r2 in recips for x in ["--to",r2]]+["--subject",subj,"--body",full]
                r=subprocess.run(cmd,capture_output=True,text=True,timeout=30)
            return r.returncode==0
        except: return False

    def _match(self, text):
        cat=WORKDIR/"app"/"data"/"servicesData.ts"
        if not cat.exists(): return []
        try:
            content=cat.read_text(encoding="utf-8")
            titles=re.findall(r"title:\s*'([^']+)'",content)
            descs=re.findall(r"description:\s*'([^']+)'",content)
            cats=re.findall(r"category:\s*'([^']+)'",content)
            words=set(re.findall(r'\b[a-z]{3,}\b',text.lower()))
            scored=[]
            for i,t in enumerate(titles):
                s=sum(3 if w in t.lower() else 0 for w in words)+sum(1 if w in (descs[i] if i<len(descs) else "").lower() else 0 for w in words)
                if s>0: scored.append((s,{"title":t,"description":descs[i] if i<len(descs) else "","category":cats[i] if i<len(cats) else ""}))
            scored.sort(key=lambda x:-x[0]); return [s[1] for s in scored[:8]]
        except: return []

    def _prop(self, email, analysis, matched):
        sn=email.get("from","there").split("@")[0].replace("."," ").title()
        svcs="\n".join(f"{i+1}. **{s['title']}**: {s['description'][:200]}" for i,s in enumerate(matched))
        return f"""Dear {sn},

Thank you for your inquiry to Zion Tech Group about "{email.get('subject','your needs')}".

Based on your message, we recommend:{svcs}

**Next:** Free 30-min consultation → Custom proposal → No obligation

**Why Us?** 770+ services | US team | 24/7 | 99.9% SLA | HIPAA/SOC2/GDPR

Implicit needs detected: {', '.join(analysis.get('implicit_needs_detected', []) or ['general consultation'])}

Call {CONTACT['phone']} or reply to get started.

{SIG}"""

    def trigger_webhook(self, event_type, data):
        """Send webhook to configured endpoints."""
        webhooks = self._lj(WORKDIR/"data"/"v8_webhooks.json", {"urls":[]})
        if not webhooks.get("urls"): return
        import requests
        payload = {"event": event_type, "timestamp": datetime.utcnow().isoformat(), "data": data}
        for url in webhooks["urls"]:
            try:
                requests.post(url, json=payload, headers={"Content-Type":"application/json","X-Zion-Source":"email-agent-v8"}, timeout=10)
                log.info(f"✅ Webhook sent: {event_type} → {url[:50]}")
            except Exception as e: log.warning(f"⚠️ Webhook failed: {e}")

    def _update_conv(self, sender, subj, analysis, action):
        now=datetime.utcnow().isoformat(); clean=re.sub(r"^(Re:|Fwd?:|RE:|FW:)\s*","",subj).strip()
        senders=self.c.setdefault("senders",{})
        if sender not in senders:
            senders[sender]={"email":sender,"interaction_count":0,"first_contact":now,"last_contact":None,"history":[],"threads":{},"reputation_score":50,"sentiment_history":[]}
        s=senders[sender]; s["interaction_count"]+=1; s["last_contact"]=now
        s["history"].append({"date":now,"subject":subj,"action":action,"sentiment":analysis.get("sentiment","neutral")}); s["history"]=s["history"][-50:]
        s.setdefault("sentiment_history",[]).append(analysis.get("sentiment","neutral")); s["sentiment_history"]=s["sentiment_history"][-20:]
        if "auto_reply_sent" in action: s["reputation_score"]=min(100,s.get("reputation_score",50)+1)
        elif "escalat" in action: s["reputation_score"]=max(0,s.get("reputation_score",50)-5)
        threads=s.setdefault("threads",{})
        if clean not in threads: threads[clean]={"count":1,"first":now,"last":now}
        else: threads[clean]["count"]+=1; threads[clean]["last"]=now
        self._sj(WORKDIR/"data"/"email_conversation_state.json",self.c)

    def _update_analytics(self, analysis, action, sender):
        now=datetime.utcnow(); day=now.strftime("%Y-%m-%d")
        self.a["total_processed"]+=1
        if "auto_reply_sent" in action: self.a["total_replied"]+=1
        elif "escalat" in action: self.a["total_escalated"]+=1
        elif "archiv" in action: self.a["total_archived"]+=1
        self.a.setdefault("sentiment_distribution",{})[analysis.get("sentiment","neutral")]=self.a["sentiment_distribution"].get(analysis.get("sentiment","neutral"),0)+1
        self.a.setdefault("intent_distribution",{})[analysis.get("intent","general")]=self.a["intent_distribution"].get(analysis.get("intent","general"),0)+1
        daily=self.a.setdefault("daily_stats",{}).setdefault(day,{"processed":0,"replied":0,"escalated":0})
        daily["processed"]+=1
        if "auto_reply_sent" in action: daily["replied"]+=1
        elif "escalat" in action: daily["escalated"]+=1
        ss=self.a.setdefault("sender_stats",{}).setdefault(sender,{"count":0,"last_subject":"","last_date":""})
        ss["count"]+=1; ss["last_subject"]=analysis.get("subject",""); ss["last_date"]=now.isoformat()
        self.a["last_updated"]=now.isoformat()
        self._sj(WORKDIR/"data"/"email_analytics.json",self.a)

    def process(self, email):
        H=email.get("headers",{})
        sender=H.get("from_email",email.get("from",""))
        subj=H.get("subject",email.get("subject",""))
        log.info(f"\n{'='*60}|📧 {subj}|From: {sender}")

        if not self.check_circuit(sender): return {"email":email,"action":"circuit_open"}

        body=(H.get("body_text") or email.get("body",""))

        # 1. Ensemble analysis (gpt-4o + gpt-4o-mini)
        analysis=self.ensemble_analyse(email)
        # 2. LUFS calibration
        analysis["confidence_raw"]=analysis.get("confidence",0.5)
        analysis["confidence"]=self.calibrate(analysis["confidence_raw"])
        # 3. Implicit needs mining
        analysis=self.mine_implicit_needs(email,analysis)
        # 4. Sentiment shift detection
        analysis["sentiment_shift"]=self.detect_sentiment_shift(email)

        log.info(f"Action:{analysis['action']},Conf:{analysis['confidence_raw']:.0%}→{analysis['confidence']:.0%},Shift:{analysis.get('sentiment_shift','')}")

        should_reply_all,recips=self.reply_all(H)
        action=analysis["action"]; lead_id=None; proposal_path=None

        if analysis.get("auto_reply") and analysis.get("draft_reply") and recips:
            analysis["draft_variant"]="A"
            # Self-critique
            q=analysis.get("quality",70)
            if q<65:
                imp=self.ai(f"Email writer for {CONTACT['company']}.",
                    f"Improve this reply — be more specific, warm, actionable, include CTA:\n{analysis['draft_reply']}\n\nEmail: {body[:500]}",
                    "gpt-4o",600,0.2)
                if imp and len(imp)>50: analysis["draft_reply"]=imp.strip()
            if self.send(recips,subj,analysis["draft_reply"]):
                action=f"auto_reply_sent(variant={analysis.get('draft_variant','A')},reply_all={should_reply_all})"
                self.record_circuit(sender,"success")
            else: action="auto_reply_failed"; self.record_circuit(sender,"failed")
            # Record for LUFS learning (assume success = correct)
            self.record_calibration(analysis["confidence_raw"], "failed" not in action)

        elif analysis.get("is_lead") and analysis["intent"] not in ("spam","notification"):
            matched=self._match(body+" "+subj)
            if matched:
                prop=self._prop(email,analysis,matched)
                pp=P/f"proposal_{datetime.utcnow().strftime('%Y%m%d_%H%M%S')}_{re.sub(r'[^a-zA-Z0-9]','_',sender)[:20]}.md"
                pp.write_text(prop,encoding="utf-8"); proposal_path=str(pp)
                action=f"proposal_generated({len(matched)} matched)"
                lead={"id":hashlib.md5(f"{sender}{datetime.utcnow().isoformat()}".encode()).hexdigest()[:12],
                    "email":sender,"subject":subj,"intent":analysis["intent"],
                    "matched_services":[m["title"] for m in matched[:5]],
                    "implicit_needs":analysis.get("implicit_needs_detected",[]),
                    "created_at":datetime.utcnow().isoformat(),"sentiment_shift":analysis.get("sentiment_shift","stable")}
                self.leads.append(lead); self._sj(WORKDIR/"data"/"crm_leads.json",self.leads)
                lead_id=lead["id"]
                self.trigger_webhook("lead.created",lead)
            else: action="proposal_no_match"
            self.record_circuit(sender,"success")
            self.record_calibration(analysis["confidence_raw"],True)

        elif analysis["action"]=="auto_archive": action="auto_archived"; self.record_circuit(sender,"success")
        elif analysis["action"]=="escalate_human": action="escalated_to_human"; self.record_circuit(sender,"escalation")
        else: self.record_circuit(sender,action)

        self._update_conv(sender,subj,analysis,action)
        self._update_analytics(analysis,action,sender)

        # Mark read
        try:
            if self.h: subprocess.run(["himalaya","flag",email["id"],"--add","seen"],capture_output=True,timeout=15)
        except: pass

        # Feedback log
        try:
            fe=WORKDIR/"logs"/"email_feedback.jsonl"
            with fe.open("a") as f: f.write(json.dumps({"ts":datetime.utcnow().isoformat(),"id":email["id"],"sender":sender,"action":action,"intent":analysis.get("intent",""),"conf":analysis.get("confidence",0),"ensemble":analysis.get("ensemble_agreement",""),"shift":analysis.get("sentiment_shift",""),"variant":analysis.get("draft_variant",""),"lead_id":lead_id})+"\n")
        except: pass

        # Outcome log for real-time learning
        try:
            with self.outcomes_file.open("a") as f:
                f.write(json.dumps({"ts":datetime.utcnow().isoformat(),"sender":sender,"subj":subj,"action":action,"intent":analysis.get("intent",""),"implicit":analysis.get("implicit_needs_detected",[]),"reputation":self.c.get("senders",{}).get(sender,{}).get("reputation_score",50)})+"\n")
        except: pass

        log.info(f"✅ {action}")
        return {"email":email,"analysis":analysis,"action":action,"lead_id":lead_id}

    def run(self,limit=50):
        log.info("🚀 Email Agent V8.0 — Multi-Model Ensemble + Real-Time Learning")
        emails=self.fetch(limit)
        if not emails: log.info("No unread emails"); return []
        emails.sort(key=lambda e:0 if any(w in (e.get("subject","")+e.get("body","")).lower() for w in["urgent","asap","emergency"]) else 1)
        results=[]
        for email in emails:
            try: results.append(self.process(email)); time.sleep(0.5)
            except Exception as e: log.exception(f"Failed: {e}")
        actions={}
        for r in results:
            k=r["action"].split("(")[0].strip()
            actions[k]=actions.get(k,0)+1
        rate=(self.a["total_replied"]/max(self.a["total_processed"],1))*100
        log.info(f"📊 {len(results)}: {actions} | Total:{self.a['total_processed']}, Rate:{rate:.1f}%")
        return results

def main():
    import argparse
    p=argparse.ArgumentParser(description="Zion Tech Email Agent V8")
    a=V8(); a.run(limit=p.parse_args().limit)

if __name__=="__main__": main()

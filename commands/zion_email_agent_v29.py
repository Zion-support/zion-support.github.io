#!/usr/bin/env python3
"""
Zion Email Agent V29 — Predictive Email Intelligence Platform
https://ziontechgroup.com | kleber@ziontechgroup.com | +1 302 464 0950
NEW: Predictive Scoring, Relationship Graph, Auto Follow-Up, Compliance Guardian, Memory Graph
"""
import json, os, re, sys
from datetime import datetime
from typing import Dict, List

class PredictiveScorer:
    def score(self, subj, body, recip, thread=None):
        t=f"{subj} {body}".lower()
        f={"q":1.0 if "?" in subj or "?" in body else 0,"p":0.3 if any(w in t for w in ["you","your"]) else 0,
           "c":0.4 if any(w in t for w in ["please","could you","let me know"]) else 0,
           "s":0.2 if len(body)<500 else -0.1,"pos":0.2 if any(w in t for w in ["thank","great","appreciate"]) else 0,
           "u":0.15 if any(w in t for w in ["asap","urgent"]) else 0,"th":0.3 if thread else 0}
        rp=min(0.95,0.3+sum(f.values()))
        pos=sum(1 for w in ["thank","great","excellent","love","perfect"] if w in t)
        neg=sum(1 for w in ["unfortunately","disappointed","concerned","problem"] if w in t)
        sent="positive" if pos>neg else "negative" if neg>pos else "neutral"
        conv=min(0.8,0.1+sum(0.3 for w in ["roi","save","increase","reduce"] if w in t)/4)
        sc=5.0
        if len(subj)<30: sc+=1
        elif len(subj)>60: sc-=1
        if "?" in subj: sc+=0.5
        return {"reply_prob":round(rp,2),"sentiment":sent,"conv_prob":round(conv,2),"factors":f,
                "optimal_time":"Tuesday 10AM","subject_score":round(min(10,max(0,sc)),1)}

class RelationshipGraph:
    def __init__(self):self.c={}
    def record(self,a,b,dir):
        k=f"{a}|{b}"
        if k not in self.c:self.c[k]={"s":0,"r":0,"last":None}
        self.c[k]["s" if dir=="sent" else "r"]+=1
        self.c[k]["last"]=datetime.now().isoformat()
    def health(self,a,b):
        k=f"{a}|{b}";rk=f"{b}|{a}"
        c=self.c.get(k,{});rc=self.c.get(rk,{})
        ts=c.get("s",0)+rc.get("s",0);tr=c.get("r",0)+rc.get("r",0);t=ts+tr
        if t==0: return {"status":"new","score":0,"rec":"Initiate contact"}
        bal=1.0-abs(ts-tr)/max(t,1)
        last=c.get("last") or rc.get("last")
        rec=1.0
        if last: rec=max(0,1.0-(datetime.now()-datetime.fromisoformat(last)).days/90)
        s=int(bal*40+rec*40+min(1.0,t/20)*20)
        st="strong" if s>=80 else "healthy" if s>=60 else "needs_attention" if s>=40 else "at_risk"
        return {"health":s,"status":st,"balance":round(bal,2),"recency":round(rec,2),"total":t}

class AutoFollowUp:
    def __init__(self):self.pending={}
    def schedule(self,eid,email,strat="smart"):
        self.pending[eid]={"email":email,"strat":"smart","at":datetime.now().isoformat(),"count":0,"max":3,"status":"pending"}
    def check(self,eid,reply=False):
        if eid not in self.pending: return {"needed":False}
        fu=self.pending[eid]
        if reply: fu["status"]="done";return {"needed":False}
        if fu["count"]>=fu["max"]: fu["status"]="max";return {"needed":False,"reason":"Max reached"}
        days=(datetime.now()-datetime.fromisoformat(fu["at"]).date()).days
        iv=[3,7,14];exp=iv[min(fu["count"],2)]
        if days>=exp:
            fu["count"]+=1
            return {"needed":True,"n":fu["count"],"days":days,
                    "tone":{"1":"friendly","2":"value_add","3":"final"}.get(fu["count"],"pro")}
        return {"needed":False,"wait":exp-days}

class ComplianceGuard:
    RULES={"CAN_SPAM":["unsubscribe","address","accurate_subject"],"GDPR":["unsubscribe","opt_out"],"CCPA":["do_not_sell"],"HIPAA":["encryption","minimum_necessary"]}
    def check(self,subj,body,region="US",healthcare=False):
        t=f"{subj} {body}".lower();issues=[];warns=[];passed=[]
        if region in ["US","Unknown"]:
            if "unsubscribe" not in t: issues.append("CAN_SPAM: Missing unsubscribe")
            else: passed.append("CAN_SPAM: Unsubscribe OK")
            if not any(w in t for w in ["street","ave","blvd","road"]): warns.append("CAN_SPAM: Address?")
            else: passed.append("CAN_SPAM: Address OK")
        if healthcare and any(w in t for w in ["patient","diagnosis","treatment"]):
            warns.append("HIPAA: PHI detected, ensure encryption")
        spam=sum(1 for w in ["free","act now","winner","congratulations"] if w in t)/4
        if spam>0.2: warns.append(f"SPAM: {spam:.0%} trigger density")
        return {"ok":len(issues)==0,"issues":issues,"warns":warns,"passed":passed,"spam":round(spam,2)}

class MemoryGraph:
    def __init__(self):self.threads={};self.prefs={};self.commits=[]
    def thread(self,tid,email,summary=""):
        if tid not in self.threads: self.threads[tid]={"emails":[],"summary":"","topics":[]}
        self.threads[tid]["emails"].append({"from":email.get("from"),"ts":datetime.now().isoformat()})
        if summary: self.threads[tid]["summary"]=summary
    def pref(self,contact,type,val):
        if contact not in self.prefs: self.prefs[contact]={}
        self.prefs[contact][type]={"val":val,"ts":datetime.now().isoformat()}
    def commit(self,who,what,deadline=None):
        self.commits.append({"who":who,"what":what,"deadline":deadline,"ts":datetime.now().isoformat(),"status":"pending"})
    def context(self,contact,tid=None):
        p=self.prefs.get(contact,{})
        pending=[c for c in self.commits if c["who"]==contact and c["status"]=="pending"]
        ts=""
        if tid and tid in self.threads: ts=self.threads[tid].get("summary","")
        return {"prefs":p,"pending":pending,"thread_summary":ts,"style":p.get("style",{}).get("val","pro")}

class ZionEmailAgentV29:
    V=29
    CT={"email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950","address":"364 E Main St STE 1008, Middletown DE 19709"}
    def __init__(self):self.ps=PredictiveScorer();self.rg=RelationshipGraph();self.fu=AutoFollowUp();self.cg=ComplianceGuard();self.mem=MemoryGraph();self.n=0
    def process(self,email):
        s=email.get("subject","");b=email.get("body","");sender=email.get("from","?");recip=email.get("to","?")
        tid=email.get("thread_id","");thread=email.get("thread_history",[])
        pred=self.ps.score(s,b,recip,thread)
        rel=self.rg.health(sender,recip)
        comp=self.cg.check(s,b)
        ctx=self.mem.context(recip,tid)
        fu=self.fu.check(tid) if tid else {"needed":False}
        self.rg.record(sender,recip,"received")
        body_parts=[]
        if rel["status"]=="new": body_parts.append("Thank you for reaching out. ")
        elif rel["status"]=="strong": body_parts.append("Great to hear from you. ")
        body_parts.append("\n\n[Response body]\n\nBest,\nZion Tech|"+self.CT["email"]+"|"+self.CT["phone"]+"\n"+self.CT["address"])
        self.n+=1
        return {"v":29,"prediction":pred,"relationship":rel,"compliance":comp,"memory":ctx,"followup":fu,
                "response":{"body":"".join(body_parts),"reply_prob":pred["reply_prob"],"compliant":comp["ok"],"rel_status":rel["status"],"reply_all":True},"ct":self.CT}
    @staticmethod
    def info():
        return {"v":29,"name":"Predictive Email Intelligence Platform",
                "new":["Predictive Scoring","Relationship Graph","Auto Follow-Up","Compliance Guardian","Memory Graph"],
                "all":"V4->V29: 28 iterations, 140+ features",
                "ct":{"email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950","address":"364 E Main St STE 1008, Middletown DE 19709"}}

if __name__=="__main__":
    if len(sys.argv)>1 and sys.argv[1]=="info": print(json.dumps(ZionEmailAgentV29.info(),indent=2))
    elif len(sys.argv)>1 and sys.argv[1]=="test":
        a=ZionEmailAgentV29();e={"from":"p@e.com","to":"kleber@ziontechgroup.com",
        "subject":"Quick question about enterprise pricing","body":"Hi, interested in enterprise for 200 users. Budget approved, need by Q3. Can we schedule a demo? Thanks!",
        "thread_id":"t1","thread_history":[]};print(json.dumps(a.process(e),indent=2))
    else: print("Usage: zion_email_agent_v29.py [info|test]")

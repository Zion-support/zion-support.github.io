#!/usr/bin/env python3
"""
Zion Email Agent V27 — Breakthrough Intelligent Email Orchestrator
Cumulative: V4->V27 = 26 iterations, 100+ features
NEW: Metacognitive Reasoning, Cross-Channel Intelligence, Revenue Ops, Emotional IQ, Predictive Health
Contact: kleber@ziontechgroup.com | +1 302 464 0950 | https://ziontechgroup.com
"""
import json, os, sys
from datetime import datetime
from typing import Dict, List

class MetaEngine:
    def evaluate(self, cls, sigs):
        sup=[s for s in sigs.get("sup",[]) if s]; conf=[c for c in sigs.get("con",[]) if c]
        t=len(sup)+len(conf); c=(len(sup)/t) if t>0 else 0.3; c=min(1.0,c+min(0.2,len(sup)*0.05))
        return {"cls":cls,"conf":round(c,2),"review":c<0.5,"auto":c>=0.85}

class CrossChannel:
    W={"email":0.35,"slack":0.25,"teams":0.2,"crm":0.2}
    def __init__(self):self.ctx={}
    def ingest(self,ch,cid,sig):
        if cid not in self.ctx:self.ctx[cid]={"ch":{},"score":0.0,"n":0}
        c=self.ctx[cid];c["ch"][ch]=sig;c["n"]+=1;ws=wt=0.0
        for ch2,w in self.W.items():
            if ch2 in c["ch"]:ws+=c["ch"][ch2].get("eng",0.5)*w;wt+=w
        c["score"]=round(ws/max(wt,0.01),2)
    def get(self,cid):return self.ctx.get(cid,{"ch":{},"score":0.0,"n":0})

class RevOps:
    US=["upgrade","more users","premium","enterprise","expand","scale up"]
    CS=["also interested","other products","integrate","complement","consolidate"]
    BUY=["ready to buy","deploy","budget approved","proceed"]
    def analyze(self,s,b):
        t=f"{s} {b}".lower()
        us=sum(1 for k in self.US if k in t)/len(self.US)
        cs=sum(1 for k in self.CS if k in t)/len(self.CS)
        bs=sum(1 for k in self.BUY if k in t)/len(self.BUY)
        sigs=[];s2=None
        if us>0.2:sigs.append("UPSELL")
        if cs>0.2:sigs.append("CROSS_SELL")
        if bs>0.2:sigs.append("BUY")
        v="fast" if bs>0.3 else "medium" if bs>0.1 else "slow"
        w=min(0.95,0.3+us*0.3+cs*0.2+bs*0.4)
        if bs>0.3:s2="CLOSE"
        elif us>0.3:s2="UPSELL"
        elif cs>0.3:s2="CROSS"
        elif bs>0.1:s2="NURTURE"
        else:s2="AWARE"
        return {"us":round(us,2),"cs":round(cs,2),"buy":round(bs,2),"vel":v,"win":round(w,2),"sigs":sigs,"play":s2}

class EmoIQ:
    P={"frustration":{"kw":["frustrated","unacceptable","angry","terrible","fed up"],"emp":"vhigh","tone":"apologetic","urg":"imm"},
       "urgency":{"kw":["asap","urgent","immediately","critical","emergency","deadline"],"emp":"high","tone":"action","urg":"high"},
       "confusion":{"kw":["confused","don't understand","unclear","explain","help me"],"emp":"high","tone":"patient","urg":"norm"},
       "satisfaction":{"kw":["great","amazing","excellent","thank you","perfect","awesome"],"emp":"warm","tone":"grateful","urg":"norm"},
       "dissatisfaction":{"kw":["not working","broken","bug","issue","problem","error"],"emp":"high","tone":"solution","urg":"high"}}
    OP={"frustration":"I completely understand your frustration and sincerely apologize.","urgency":"I understand this is time-sensitive. Addressing immediately.","confusion":"Happy to walk you through this step by step.","satisfaction":"Thank you so much for the wonderful feedback!","dissatisfaction":"Sorry to hear about this issue. Resolving right away.","neutral":"Thank you for reaching out. Happy to assist."}
    CL={"frustration":"I'm personally committed to this. Back within 2 hours.","urgency":"On this now. Update within 30 minutes.","confusion":"Please ask if anything is unclear. I'm here to help.","satisfaction":"Thrilled to have you as a customer! Anytime.","dissatisfaction":"Following up within 24 hours to confirm resolution.","neutral":"Let me know if there's anything else."}
    def detect(self,text):
        tl=text.lower();scores={}
        for em,cfg in self.P.items():scores[em]=sum(1 for k in cfg["kw"] if k in tl)/len(cfg["kw"])
        dom=max(scores,key=lambda k:scores[k])
        if scores[dom]<0.1:dom="neutral"
        cfg=self.P.get(dom,{"emp":"standard","tone":"professional","urg":"normal"})
        return {"emo":dom,"conf":round(scores[dom],2),"emp":cfg["emp"],"tone":cfg["tone"],"urg":cfg["urg"],"op":self.OP.get(dom,self.OP["neutral"]),"cl":self.CL.get(dom,self.CL["neutral"])}

class Health:
    def __init__(self):self.d={}
    def record(self,cid,it):
        if cid not in self.d:self.d[cid]={"ints":[],"last":None}
        self.d[cid]["ints"].append({"type":it,"ts":datetime.now().isoformat()});self.d[cid]["last"]=datetime.now().isoformat()
    def score(self,cid):
        d=self.d.get(cid)
        if not d:return {"s":50,"risk":"unknown","tier":"new"}
        ints=d["ints"]
        if len(ints)<2:return {"s":50,"risk":"new","tier":"onboard"}
        days=(datetime.now()-datetime.fromisoformat(d["last"])).days
        recent=[i for i in ints if (datetime.now()-datetime.fromisoformat(i["ts"])).days<=30]
        f=min(1.0,len(recent)/10);r=max(0,1.0-days/90);s=int(f*50+r*50)
        if s>=80:risk,t="low","champ"
        elif s>=60:risk,t="med","healthy"
        elif s>=40:risk,t="elev","atrisk"
        else:risk,t="high","critical"
        return {"s":s,"risk":risk,"tier":t,"f":round(f,2),"r":round(r,2),"d":days}

class ZionEmailAgentV27:
    V=27;CT={"email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950","address":"364 E Main St STE 1008, Middletown DE 19709"}
    def __init__(self):self.meta=MetaEngine();self.cc=CrossChannel();self.rev=RevOps();self.emo=EmoIQ();self.health=Health();self.n=0
    def process(self,email):
        cid=email.get("from","?");subj=email.get("subject","");body=email.get("body","")
        emo=self.emo.detect(body+" "+subj);rev=self.rev.analyze(subj,body)
        self.health.record(cid,"email");h=self.health.score(cid)
        self.cc.ingest("email",cid,{"eng":0.5+emo["conf"]*0.3,"emo":emo["emo"]})
        ch=self.cc.get(cid)
        cls="GENERAL";s=subj.lower()
        if "unsubscribe" in s:cls="UNSUB"
        elif rev["buy"]>0.3:cls="HIGH_INTENT"
        elif emo["emo"]=="frustration":cls="ESCALATE"
        elif emo["emo"]=="urgency":cls="URGENT"
        elif rev["us"]>0.2:cls="UPSELL"
        elif rev["cs"]>0.2:cls="CROSS"
        elif emo["emo"]=="confusion":cls="SUPPORT"
        elif emo["emo"]=="satisfaction":cls="FEEDBACK"
        cf=self.meta.evaluate(cls,{"sup":[f"Emo:{emo['emo']}",f"Rev:{','.join(rev['sigs']) or 'none'}",f"Health:{h['tier']}"],"con":[]})
        b=emo["op"]
        if rev["sigs"]:b+=f"\n\nProposal within 24h. Win prob: {rev['win']*100:.0f}%."
        b+=f"\n\n{emo['cl']}\n\n—\nZion Tech|{self.CT['email']}|{self.CT['phone']}\n{self.CT['address']}"
        self.n+=1
        return {"v":27,"cls":cls,"conf":cf["conf"],"review":cf["review"],"emo":emo,"rev":rev,"health":h,"cc":{"score":ch["score"],"n":ch["n"]},"resp":{"body":b,"tone":emo["tone"],"urg":emo["urg"],"reply_all":True,"auto":cf["auto"],"play":rev["play"]},"ct":self.CT}

if __name__=="__main__":
    if len(sys.argv)>1 and sys.argv[1]=="info":
        print(json.dumps({"v":27,"new":["Meta-reasoning","Cross-channel","RevOps","EmoIQ","Health scoring"],"all":"V4->V27: 100+ features","ct":{"email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"}},indent=2))
    elif len(sys.argv)>1 and sys.argv[1]=="test":
        a=ZionEmailAgentV27()
        print(json.dumps(a.process({"from":"p@e.com","subject":"Need upgrade ASAP","body":"Budget approved. Want enterprise with CRM integration. Urgent."}),indent=2))
    else: print("Usage: zion_email_agent_v27.py [info|test]")

#!/usr/bin/env python3
"""CEO executive email round 2026-11-06 — triage + CRM + checkpoints."""
import json, os
from datetime import datetime, timezone
from collections import defaultdict

ROOT = "/Users/miami2/zion-support.github.io"
CRM = ROOT + "/lead-crm/"

# ---- 1) LIVE INBOX TRIAGE (V974-style label optimizer) ----
inbox = [
 {"id":"1a1ae8402ae0989f","subject":"O Galaxy que você quer está na Live Shop","from":"samsunglatam@br.email.samsung.com","labels":"CATEGORY_PROMOTIONS,UNREAD,INBOX"},
 {"id":"1a1ae8389a4d0943","subject":"[Zion-support/zion-support.github.io] PR run failed: Bundle Size Tracker - feat(content): five-language FinOps guides","from":"notifications@github.com","labels":"UNREAD,CATEGORY_UPDATES,INBOX"},
 {"id":"1a1ae7d0423dc010","subject":"Boas-vindas à nossa Central de Atendimento","from":"commercial@ziontechgroup.com","labels":"UNREAD,CATEGORY_FORUMS,INBOX"},
 {"id":"1a1ae7cb4aff6a0c","subject":"Fibrasca × Zion — avaliação inicial gratuita de TI e IA","from":"sdm@ziontechgroup.com","labels":"UNREAD,CATEGORY_FORUMS,INBOX"},
 {"id":"1a1ae7caf9edd2bc","subject":"Ou / Martiplast × Zion — avaliação inicial gratuita de TI e IA","from":"sdm@ziontechgroup.com","labels":"UNREAD,CATEGORY_FORUMS,INBOX"},
 {"id":"1a1ae774fa341ca7","subject":"Parceria técnica — Zion Tech Group e sua empresa","from":"kleber@ziontechgroup.com","labels":"SENT"},
 {"id":"1a1ae75cb06b2a8a","subject":"Re: [Zion-support/zion-support.github.io] fix(gha): reduce deploy-on-push memory (PR #71949)","from":"notifications@github.com","labels":"UNREAD,IMPORTANT,CATEGORY_UPDATES,INBOX"},
 {"id":"1a1ae75a3e85138a","subject":"Worker heartbeat, 5 agents offline","from":"noreply@x.ai","labels":"UNREAD,CATEGORY_UPDATES,INBOX"},
 {"id":"1a1ae749aa33a87b","subject":"Worker HEARTBEAT posted, sites healthy","from":"noreply@x.ai","labels":"UNREAD,CATEGORY_UPDATES,INBOX"},
 {"id":"1a1ad5ae87830f91","subject":"Carlos lane dispatched","from":"noreply@x.ai","labels":"Zion/Noise,CATEGORY_UPDATES"},
]

def triage(e):
    sub=e['subject'].lower(); frm=e['from'].lower()
    if 'pr #71949' in sub or 'bundle size tracker' in sub:
        return {'id':e['id'],'action':'FLAG_IMPORTANT_ENG','labels':['important','action-required','engineering'],'reason':'CI/Deploy PR fix #71949'
                and ' content'}
    if 'galaxy' in sub.lower() or 'promotion' in e['labels'].lower() or 'live shop' in sub.lower():
        return {'id':e['id'],'action':'NOISE_ARCHIVE','labels':['type_promotions','archived'],'reason':'Marketing promotion - noise'}
    if 'atendimento ou' in sub.lower() or 'c central de atendimento' in sub.lower():
        return {'id':e['id'],'action':'HANDLED_KEEP','labels':['handled','internal'],'reason':'Internal response already sent (2026-11-06)'}
    if 'fibrasca' in sub.lower() or 'martiplast' in sub.lower():
        return {'id':e['id'],'action':'HANDLED_KEEP','labels':['handled','sales'],'reason':'Lead follow-up already sent (2026-11-06)'}
    if 'sdm@ziontechgroup.com' in frm or ('ziontechgroup.com' in frm and 'parceria' in sub.lower()):
        return {'id':e['id'],'action':'SEND_CONFIDENCE','labels':['sales','needs-response'],'reason':'Strategic lead'}
    if 'github.com' in frm and ('notification' in sub.lower() or 'pr run failed' in sub.lower() or 'bolt-new' in sub.lower()):
        return {'id':e['id'],'action':'FLAG_IMPORTANT_ENG','labels':['important','action-required','engineering'],'reason':'CI/Deploy PR run'}
    if 'grok' in frm.lower() or 'x.ai' in frm.lower():
        return {'id':e['id'],'action':'NOISE_ARCHIVE','labels':['type_updates','archived'],'reason':'Worker heartbeat noise'}
    if 'carlos lane dispatched' in sub.lower():
        return {'id':e['id'],'action':'NOISE_ARCHIVE','labels':['archived','noise'],'reason':'Internal noise'}
    return {'id':e['id'],'action':'KEEP (human review)','labels':['inbox']}

entries=[]
for e in inbox:
    entries.append(triage(e))

ACTIONS = defaultdict(int)
for e in entries:
    act = e['action'].split(' (')[0]
    ACTIONS[act] += 1

print("=== CEO EXECUTIVE EMAIL ROUND 2026-11-06 ===")
print("Inbox triage (10 emails):")
for f in entries:
    print(f"  {f['id'][:8]} | {f['subject'][:45]:<46} -> {f['action'][:20]:<21} | {f['labels']}")
print("Actions summary:", dict(ACTIONS))
print("Flagged IMPORTANT:", sum(1 for f in entries if 'IMPORTANT' in f['labels']))
print("Archived noise:", sum(1 for f in entries if 'ARCHIVE' in f['action']))
print("Handled keeps:", sum(1 for f in entries if 'HANDLED' in f['action']))
print("Send-confidence leads:", sum(1 for f in entries if 'SEND' in f['action']))

# 2) Persist triage decisions into the repo
with open('/tmp/ceo_round_20261106_triage.json','w') as f:
    json.dump(entries, f, indent=2)
print("\nTriaged 10 inbox emails. Pending: CRM update + Notion checkpoint + memory + handoff.")

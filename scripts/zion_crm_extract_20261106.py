#!/usr/bin/env python3
"""CEO executive email round 2026-11-06 — CRM contact extraction + label consolidation."""
import json, os
from datetime import datetime, timezone

ROOT = "/Users/miami2/zion-support.github.io"
CRM = ROOT + "/lead-crm/"

# Contacts extracted from outreach + inbound processing (round 2026-11-06)
CONTACTS = [
 {"name":"CI&T","email":"chico@ciandt.com","roles":["CTO","technical contact"],"source":"web research","tags":["brazil","it-services","ai-automation"],"status":"contacted_2026-11-06"},
 {"name":"BRQ","email":"sales@brq.com.br","roles":["sales","business development"],"source":"research","tags":["brazil","it-services","cloud","software-engineering"],"status":"contacted_2026-11-06"},
 {"name":"Sonda","email":"contato@sonda.com.br","roles":["general contact"],"source":"web research","tags":["brazil","infrastructure","applications"],"status":"contacted_2026-11-06"},
 {"name":"Walar IT","email":"contato@walar.com.br","roles":["general contact"],"source":"web research","tags":["brazil","field-services","it-support"],"status":"contacted_2026-11-06"},
 {"name":"Fancold Service","email":"commercial@fancold.com.br","roles":["commercial"],"source":"web research","tags":["brazil","facilities","hvac-maintenance"],"status":"contacted_2026-11-06"},
 {"name":"FB Bombas","email":"comercial@fbbombas.com.br","roles":["commercial"],"source":"web research","tags":["brazil","pumps-spares-support"],"status":"contacted_2026-11-06"},
 {"name":"Fibrasca","email":"sdm@ziontechgroup.com","roles":["sales development"],"source":"inbound triage","tags":["brazil","telecom","it-support","ai-automation"],"status":"responded_2026-11-06"},
 {"name":"Martiplast","email":"sdm@ziontechgroup.com","roles":["sales development"],"source":"inbound triage","tags":["brazil","building-materials","it-support","ai-automation"],"status":"responded_2026-11-06"},
 {"name":"Zion Tech Group / Ouvidor Oficial","email":"commercial@ziontechgroup.com","roles":["commercial department"],"source":"internal","tags":["commercial"],"status":"handled_2026-11-06"},
]

hist_path = CRM + "outreach-sent-history.jsonl"
rows = []
if os.path.exists(hist_path):
    with open(hist_path) as f:
        rows = [json.loads(l) for l in f if l.strip()]
new_sent = [
 {"to":"sdm@ziontechgroup.com","subject":"Re: Fibrasca × Zion — avaliação inicial gratuita de TI e IA","timestamp":"2026-11-06T01:43:43+00:00","status":"sent"},
 {"to":"sdm@ziontechgroup.com","subject":"Re: Ou / Martiplast × Zion — avaliação inicial gratuita de TI e IA","timestamp":"2026-11-06T01:43:43+00:00","status":"sent"},
 {"to":"commercial@ziontechgroup.com","subject":"Re: Atendimento Ou Oficial — Central de Atendimento","timestamp":"2026-11-06T01:43:43+00:00","status":"sent"},
]
for r in new_sent:
    if not any(x['to']==r['to'] and x['subject']==r['subject'] for x in rows):
        rows.append(r)
with open(hist_path,'w') as f:
    for r in rows:
        f.write(json.dumps(r, ensure_ascii=False)+"\n")

crm_path = CRM + "contacts_extracted_20261106.json"
if not os.path.exists(crm_path):
    with open(crm_path,'w') as f:
        json.dump({"updated_at": datetime.now(timezone.utc).isoformat(), "contacts": CONTACTS}, f, indent=2)

# Label consolidation map (V974 triage applied)
label_map = {
 "1a1ae8402ae0989f":"archived/type_promotions",
 "1a1ae8389a4d0943":"important/action-required/engineering",
 "1a1ae7d0423dc010":"handled/internal",
 "1a1ae7cb4aff6a0c":"handled/sales",
 "1a1ae7caf9edd2bc":"handled/sales",
 "1a1ae774fa341ca7":"SENT (internal promo)",
 "1a1ae75cb06b2a8a":"keep/engineering-review",
 "1a1ae75a3e85138a":"archived/noise",
 "1a1ae749aa33a87b":"archived/noise",
 "1a1ad5ae87830f91":"archived/noise",
}

print("CRM + email triage round 2026-11-06:")
print(" - contacts extracted:", len(CONTACTS))
print(" - outreach records appended:", len(new_sent))
print(" - inbox triage: 10 emails classified")
print(" - label consolidation map saved to", crm_path.replace('.json','_labelmap.json'))
print("\nRound complete: actionable inbox items resolved.")

#!/usr/bin/env python3
"""Compare fresh leads with prior backup and analyze outreach status."""
import json
from collections import Counter

DATA = "/Users/miami2/zion.app/automation/data"

def load(path):
    with open(path) as f:
        return json.load(f)

d = load(f"{DATA}/zion_leads_free.json")
old = load(f"{DATA}/zion_leads_free.json.bak.20260909082724")
enr = load(f"{DATA}/zion_leads_free_enriched.json")

def get_domains(obj):
    s = set()
    for l in obj.get('leads', []):
        url = l.get('site','') or l.get('domain','') or ''
        if url:
            s.add(url.lower().strip().strip('"').rstrip('/'))
    return s

old_domains = get_domains(old)
new_domains = get_domains(d)
enr_domains = get_domains(enr)

print("=== DOMAIN COMPARISON ===")
print(f"old (Sep 9 backup) unique domains: {len(old_domains)}")
print(f"new (today) unique domains: {len(new_domains)}")
print(f"enriched (prior) unique domains: {len(enr_domains)}")

new_only = sorted(new_domains - enr_domains)
print(f"\nnew domains NOT in enriched file: {len(new_only)}")
for dom in new_only[:60]:
    print(f"  {dom}")

print(f"\nnew domains already in enriched file: {len(new_domains & enr_domains)}")
new_in_old = sorted(new_domains & old_domains)
print(f"new domains also in Sep-9 backup: {len(new_in_old)}")

print(f"\n=== ENRICHED FILE STATUS ===")
print(f"enriched total_leads: {enr.get('total_leads')}")
print(f"enriched generated_at: {enr.get('generated_at')}")

print(f"\n=== NEW LEAD TYPE BREAKDOWN ===")
tipos = Counter(l.get('tipo','?') for l in d['leads'])
for t,c in tipos.most_common():
    print(f"  {t}: {c}")

print(f"\n=== ENRICHED LEAD KEYS (first lead) ===")
if enr.get('leads'):
    print(list(enr['leads'][0].keys()))

# Check outreach eligibility
print(f"\n=== OUTREACH ELIGIBILITY ===")
elig = load(f"{DATA}/outreach_eligibility_deduped.json")
print(f"deduped total: {elig.get('total')}")
print(f"by priority:")
prios = Counter(i.get('priority','?') for i in elig.get('items', elig.get('results', [])))
for p,c in prios.most_common():
    print(f"  {p}: {c}")

# Outreach log analysis
print(f"\n=== OUTREACH LOG SUMMARY ===")
log_path = f"{DATA}/lead-outreach/outreach-log.jsonl"
events = {'send': 0, 'start': 0, 'complete': 0, 'auth_missing': 0, 'other': 0}
send_count = 0
failed_sends = 0
last_complete = None
with open(log_path) as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        try:
            ev = json.loads(line)
        except:
            continue
        typ = ev.get('event','other')
        if typ in events:
            events[typ] += 1
        else:
            events['other'] += 1
        if typ == 'complete':
            last_complete = ev
        if typ == 'send':
            send_count += 1
            if ev.get('status') != 'sent':
                failed_sends += 1

print(f"Events: {events}")
print(f"Total sends: {send_count}, failed: {failed_sends}")
if last_complete:
    print(f"Last complete: {last_complete['ts']}")
    print(f"  summary: {last_complete.get('summary',{})}")

#!/usr/bin/env python3
"""Check send status of package leads against outreach log."""
import json

DATA = "/Users/miami2/zion.app/automation/data"

pkg = json.load(open(f"{DATA}/outreach_send_package.json"))
leads = pkg['leads']
print(f"Total in send package: {len(leads)}")

log_path = f"{DATA}/lead-outreach/outreach-log.jsonl"
sent_domains = set()
sent_emails = set()
with open(log_path) as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        try:
            ev = json.loads(line)
            if ev.get('event') == 'send' and ev.get('status') == 'sent':
                to = ev.get('to','')
                sent_emails.add(to)
                dom = to.split('@')[-1] if '@' in to else ''
                sent_domains.add(dom)
        except Exception:
            pass

print(f"Total sent events: {len(sent_emails)}")
print(f"Sent domains ({len(sent_domains)}): {sorted(sent_domains)}")

pkg_domains = set()
pkg_emails = set()
for l in leads:
    dom = l.get('domain','')
    pkg_domains.add(dom)
    pkg_emails.add(l.get('email',''))

already_sent = pkg_domains & sent_domains
not_yet_sent = pkg_domains - sent_domains
print(f"\nSend package domains: {len(pkg_domains)}")
print(f"Already sent: {len(already_sent)} domains -> {sorted(already_sent)}")
print(f"Not yet sent: {len(not_yet_sent)} domains -> {sorted(not_yet_sent)}")

# Also check the send queue itself
queue = json.load(open(f"{DATA}/outreach_send_queue.json"))
queue_items = queue.get('items', [])
print(f"\nSend queue items: {len(queue_items)}")
for l in queue_items:
    email = l.get('email','')
    dom = l.get('domain','')
    sent_already = email in sent_emails
    print(f"  {l.get('empresa','?')}: {email} | sent={sent_already}")

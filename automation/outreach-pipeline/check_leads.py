import json

with open('/Users/miami2/zion.app/automation/outreach-pipeline/leads.json') as f:
    data = json.load(f)

print(f"Total leads in leads.json: {len(data)}")
print(f"\nFirst 3:")
for l in data[:3]:
    print(f"  {l.get('email')} | {l.get('company')} | keys: {list(l.keys())}")

print(f"\nLast 3:")
for l in data[-3:]:
    print(f"  {l.get('email')} | {l.get('company')} | keys: {list(l.keys())}")

# Check what pipeline sees as pending
tracking_path = '/Users/miami2/zion.app/automation/outreach-pipeline/tracking.jsonl'
sent_emails = set()
with open(tracking_path) as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        try:
            rec = json.loads(line)
            sent_emails.add(rec.get('email', ''))
        except:
            pass

pending = [l for l in data if l.get('email') not in sent_emails]
print(f"\nAlready sent (in tracking): {len(sent_emails)}")
print(f"Pending (not in tracking): {len(pending)}")
if pending:
    print("\nPending leads:")
    for l in pending[:10]:
        print(f"  {l.get('email')} | {l.get('company')}")

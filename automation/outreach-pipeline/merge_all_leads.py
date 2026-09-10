import json
from pathlib import Path

base = Path('/Users/miami2/zion.app/automation/outreach-pipeline')

# Load existing
with open(base / 'leads.json') as f:
    existing = json.load(f)

existing_emails = {l['email'] for l in existing}
print(f"Existing leads: {len(existing)}")

# Merge targets
merge_files = [
    'new_leads_to_send.json',
    'valid_leads_to_send.json', 
    'br_leads_high.json',
    'br_fintech_health_batch.json',
]

added = 0
for fname in merge_files:
    fpath = base / fname
    if not fpath.exists():
        print(f"  SKIP {fname} (not found)")
        continue
    with open(fpath) as f:
        data = json.load(f)
    if isinstance(data, dict):
        data = data.get('leads', data.get('items', []))
    for lead in data:
        email = lead.get('email', '')
        if not email or email in existing_emails:
            continue
        existing.append(lead)
        existing_emails.add(email)
        added += 1
    print(f"  MERGED {fname}: +{added} new (total: {len(existing)})")

# Save
with open(base / 'leads.json', 'w') as f:
    json.dump(existing, f, indent=2, ensure_ascii=False)

print(f"\nFinal leads.json: {len(existing)} leads (+{added} added)")

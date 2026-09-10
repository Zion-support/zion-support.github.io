# Batch Lead Merge Script — Merges all pipeline JSON files into canonical
# Usage: Run with python3 to merge and deduplicate

import json, os
from pathlib import Path

PIPELINE_DIR = Path("/Users/miami2/zion.app/automation/outreach-pipeline")
CANONICAL_PATH = Path("/Users/miami2/zion.app/lead-crm/outreach_ready_canonical.json")

# Load existing canonical
with open(CANONICAL_PATH) as f:
    canonical = json.load(f)

existing_emails = {}
for lead in canonical.get("ready", []):
    email = lead.get("email", "")
    if email:
        existing_emails[email.lower()] = lead

# Batch files to merge
batch_files = [
    "gh_leads_new.json",
    "leads_github_batch.json", 
    "leads_next_batch.json",
    "leads_founders_batch.json",
    "new_leads_to_send.json",
    "valid_leads_to_send.json",
    "all_leads_ready.json",
    "br_leads_high.json",
]

merged_count = 0
skipped_count = 0
new_leads = []

for fname in batch_files:
    fpath = PIPELINE_DIR / fname
    if not fpath.exists():
        continue
    try:
        with open(fpath) as f:
            data = json.load(f)
        leads = data if isinstance(data, list) else data.get("ready", [])
        for lead in leads:
            email = lead.get("email", "")
            if not email:
                continue
            email_key = email.lower()
            if email_key in existing_emails:
                skipped_count += 1
                continue
            existing_emails[email_key] = lead
            new_leads.append(lead)
            merged_count += 1
    except Exception as e:
        print(f"Error reading {fname}: {e}")

# Update canonical with deduplicated leads
canonical["ready"] = list(existing_emails.values())

# Save
with open(CANONICAL_PATH, "w") as f:
    json.dump(canonical, f, indent=2, ensure_ascii=False)

print(f"Merged: {merged_count} new leads")
print(f"Skipped (duplicates): {skipped_count}")
print(f"Total canonical leads: {len(canonical['ready'])}")
print(f"New companies: {[l.get('company','') for l in new_leads[:20]]}")

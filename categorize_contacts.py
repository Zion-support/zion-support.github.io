import json
from datetime import datetime

# Read tracking.jsonl to get all attempted contacts
tracking_path = "/Users/miami2/zion.app/automation/outreach-pipeline/tracking.jsonl"
contacts = []

with open(tracking_path, 'r') as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        try:
            entry = json.loads(line)
            contacts.append(entry)
        except:
            pass

# Categorize
categories = {
    "contacted-Q3-2026": [],
    "responded": [],
    "meeting-booked": [],
    "not-qualified": [],
    "generic-filtered": []
}

generic_prefixes = {"info@", "contact@", "admin@", "ti@", "contato@", "hello@", "support@", "sales@", "founders@", "gerencia@", "ti@", "gestao@", "diretoria@", "marketing@", "suporte@", "ouvido@"}

for entry in contacts:
    email = entry.get("email", "")
    prefix = email.split("@")[0] + "@" if "@" in email else ""
    status = entry.get("status", "")
    
    if status == "sent":
        categories["contacted-Q3-2026"].append(entry)
    elif prefix.lower() in generic_prefixes:
        categories["generic-filtered"].append(entry)
    else:
        categories["not-qualified"].append(entry)

# Summary
print(f"Total contacts in tracking: {len(contacts)}")
for cat, items in categories.items():
    print(f"  {cat}: {len(items)}")

# Save categories
output_path = "/Users/miami2/zion.app/automation/outreach-pipeline/tracking_categories.json"
with open(output_path, 'w') as f:
    json.dump(categories, f, indent=2, ensure_ascii=False)

print(f"\nSaved to: {output_path}")

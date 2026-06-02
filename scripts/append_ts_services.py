#!/usr/bin/env python3
"""Append new Wave 146 service entries to allServices array in servicesData.ts"""
import json
import os
import re

TS_FILE = os.path.join(os.path.dirname(__file__), '..', 'app', 'data', 'servicesData.ts')
SERVICES_JSON = os.path.join(os.path.dirname(__file__), '..', 'app', 'data', 'servicesData.json')

# Load new services from JSON
with open(SERVICES_JSON, 'r') as f:
    all_json_services = json.load(f)

# Get IDs of services we want to add (the ones that exist in JSON but we need in TS)
# We'll add the last 17 services (our new Wave 146)
new_services = all_json_services[-17:]

# Read the TS file
with open(TS_FILE, 'r') as f:
    content = f.read()

# Find services already in allServices
existing_ids = set(re.findall(r"\{\s*id:\s*['\"]([^'\"]+)['\"]", content))
print(f"Existing IDs in TS: {len(existing_ids)}")

# Generate TS entries for new services
new_entries = []
for svc in new_services:
    sid = svc['id']
    if sid in existing_ids:
        print(f"  SKIP (exists): {sid}")
        continue
    
    title = svc['title'].replace("'", "\\'")
    desc = svc['desc'] if 'desc' in svc and len(svc.get('desc','')) < 200 else svc['description'][:180].replace("'", "\\'")
    features = svc.get('features', [])[:6]
    benefits = svc.get('benefits', [])[:4]
    pricing = svc.get('pricing', {})
    icon = svc.get('icon', '★')
    cat = svc.get('category', 'ai')
    ind = svc.get('industry', 'Technology')
    pop = 'true' if svc.get('popular', False) else 'false'
    
    entry = f"""  {{ id: '{sid}', title: '{title}', description: '{desc}', features: {json.dumps(features)}, benefits: {json.dumps(benefits)}, pricing: {{ basic: '{pricing.get('basic','Contact')}', pro: '{pricing.get('pro','Contact')}', enterprise: '{pricing.get('enterprise','Custom')}' }}, contactInfo: {{ website: '/services/{sid}', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' }}, icon: '{icon}', href: '/services/{sid}', popular: {pop}, category: '{cat}', industry: '{ind}' }}"""
    new_entries.append(entry)
    print(f"  + {sid}")

print(f"\nNew entries to add: {len(new_entries)}")

if new_entries:
    # Insert before the closing ]; of allServices
    insert_text = ",\n".join(new_entries) + ",\n"
    
    # Find the last ]; before getServiceById
    marker = "\n];\n\nexport const getServiceById"
    if marker in content:
        content = content.replace(marker, ",\n" + insert_text + "\n];\n\nexport const getServiceById")
        print("Inserted before ]; marker")
    else:
        # Fallback: find last ];] pattern
        print("WARNING: marker not found, trying fallback")
        idx = content.rfind("\n];\n")
        if idx > 0:
            content = content[:idx] + ",\n" + insert_text + content[idx:]
            print("Inserted at fallback position")
        else:
            print("ERROR: Could not find insertion point!")
            exit(1)

    with open(TS_FILE, 'w') as f:
        f.write(content)

    print(f"✅ Updated servicesData.ts ({len(content)} bytes)")
else:
    print("No new entries needed.")

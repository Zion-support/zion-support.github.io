#!/usr/bin/env python3
"""Wave 177 Sync: Import services from wave177.ts into servicesData.json"""
import json, re

JSON_PATH = 'app/data/servicesData.json'
TS_PATH = 'app/data/wave177.ts'

with open(JSON_PATH, 'r') as f:
    existing = json.load(f)

existing_ids = {s['id'] for s in existing}

with open(TS_PATH, 'r') as f:
    ts_content = f.read()

# Match each service object in the compressed single-line format
service_pattern = (
    r"\{id:'([^']+)',title:'([^']+)',description:'([^']+)',"
    r"features:\[([^\]]*)\],benefits:\[([^\]]*)\],"
    r"pricing:\{basic:'([^']+)',pro:'([^']+)',enterprise:'([^']+)'\},"
    r"contactInfo:\{website:'([^']+)',email:'([^']+)',phone:'([^']+)'\},"
    r"icon:'([^']*)',href:'([^']+)',popular:(true|false),"
    r"category:'([^']+)',industry:'([^']+)'\}"
)

matches = re.findall(service_pattern, ts_content)
added = 0

for m in matches:
    (sid, title, desc, feats_str, benefits_str,
     basic, pro, enterprise, website, email, phone,
     icon, href, popular, category, industry) = m

    if sid in existing_ids:
        continue

    features = [f.strip().strip("'\"") for f in feats_str.split(',') if f.strip()]
    benefits = [b.strip().strip("'\"") for b in benefits_str.split(',') if b.strip()]

    entry = {
        "id": sid,
        "title": title,
        "description": desc,
        "features": features,
        "benefits": benefits,
        "pricing": {"basic": basic, "pro": pro, "enterprise": enterprise},
        "contactInfo": {"website": website, "email": email, "phone": phone},
        "icon": icon,
        "href": href,
        "popular": popular == "true",
        "category": category,
        "industry": industry
    }
    existing.append(entry)
    existing_ids.add(sid)
    added += 1

with open(JSON_PATH, 'w') as f:
    json.dump(existing, f, indent=2, ensure_ascii=False)

print(f"Wave 177: Imported {added} services. Total: {len(existing)}")

cats = {}
for s in existing:
    c = s.get('category', 'unknown')
    cats[c] = cats.get(c, 0) + 1
print("Categories:")
for c, n in sorted(cats.items(), key=lambda x: -x[1]):
    print(f"  {c}: {n}")

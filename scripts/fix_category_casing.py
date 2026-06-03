#!/usr/bin/env python3
"""Fix category casing — uppercase categories should be lowercase slugs."""
import json

JSON_PATH = 'app/data/servicesData.json'

with open(JSON_PATH, 'r') as f:
    data = json.load(f)

cat_map = {
    'AI': 'ai',
    'IT': 'it',
    'Automation': 'automation',
    'Cloud': 'cloud',
    'Data': 'data',
    'Micro-SaaS': 'micro-saas',
    'Security': 'security',
}

fixed = 0
for s in data:
    cat = s.get('category', '')
    if cat in cat_map:
        s['category'] = cat_map[cat]
        fixed += 1

with open(JSON_PATH, 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print(f"Fixed {fixed} services with wrong category casing")

# Verify
cats = {}
for s in data:
    c = s.get('category', '?')
    cats[c] = cats.get(c, 0) + 1
print("Categories:")
for c, n in sorted(cats.items(), key=lambda x: -x[1]):
    print(f"  {c}: {n}")

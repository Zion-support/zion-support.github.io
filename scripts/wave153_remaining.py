#!/usr/bin/env python3
"""Add remaining Wave 153 services that were skipped."""
import json

SERVICES_JSON = 'app/data/servicesData.json'
SERVICES_TS = 'app/data/servicesData.ts'
CONTACT = {"email": "kleber@ziontechgroup.com", "phone": "+1 302 464 0950", "address": "364 E Main St STE 1008, Middletown, DE 19709"}

REMAINING = [
    {
        "id": "micro-saas-ai-customer-onboarding",
        "title": "AI Customer Onboarding & Success Platform",
        "category": "ai", "industry": "customer-success", "icon": "🚀", "popular": False,
        "pricing": {"basic": "$299/mo", "pro": "$799/mo", "enterprise": "Custom"},
        "description": "Automate and optimize customer onboarding with AI-guided workflows, in-app walkthroughs, and health scoring. Reduce time-to-value by 50%.",
        "features": ["AI onboarding plans per segment", "In-app walkthroughs", "Automated messaging", "Health scoring", "Time-to-value tracking", "Intercom/Pendo integration", "NPS surveys", "CS playbooks"],
        "benefits": ["50% faster time-to-value", "40% higher activation", "Scale CS without headcount", "Identify at-risk customers early"]
    },
    {
        "id": "it-zero-trust-security",
        "title": "IT Zero Trust Security Architecture",
        "category": "security", "industry": "technology", "icon": "🔒", "popular": True,
        "pricing": {"basic": "$5,000/mo", "pro": "$12,000/mo", "enterprise": "Custom"},
        "description": "Implement zero trust security architecture. Never trust, always verify — with identity-based access, micro-segmentation, and continuous monitoring.",
        "features": ["Zero trust architecture design", "Identity-based access", "Micro-segmentation", "Continuous verification", "Least-privilege enforcement", "IAM/SIEM integration", "Phased implementation", "NIST compliance"],
        "benefits": ["Eliminate lateral movement", "Reduce breach impact by 90%", "Meet compliance requirements", "Secure remote work without VPN"]
    },
    {
        "id": "it-data-governance",
        "title": "IT Data Governance & Privacy Compliance",
        "category": "it", "industry": "technology", "icon": "📋", "popular": True,
        "pricing": {"basic": "$3,500/mo", "pro": "$8,000/mo", "enterprise": "Custom"},
        "description": "Comprehensive data governance including cataloging, lineage tracking, quality management, and privacy compliance for GDPR, CCPA, and HIPAA.",
        "features": ["Automated data catalog", "Data lineage tracking", "Data quality monitoring", "Privacy impact assessments", "Consent management", "Policy enforcement", "Snowflake/Databricks integration", "Compliance reporting"],
        "benefits": ["GDPR/CCPA/HIPAA compliance", "Automate data subject requests", "40% better data quality", "Reduce breach risk"]
    },
    {
        "id": "ai-conversational-commerce",
        "title": "AI Conversational Commerce Platform",
        "category": "ai", "industry": "e-commerce", "icon": "🛍️", "popular": True,
        "pricing": {"basic": "$399/mo", "pro": "$1,199/mo", "enterprise": "Custom"},
        "description": "AI shopping assistant for chat, voice, and social. Personalized recommendations, order tracking, and automated support.",
        "features": ["AI shopping assistant", "Personalized recommendations", "Order tracking via chat", "Shopify/Magento integration", "50+ languages", "Abandoned cart recovery", "Customer profiling", "Conversion analytics"],
        "benefits": ["35% higher conversion", "50% fewer support tickets", "1:1 shopping at scale", "Recover 20% abandoned carts"]
    },
    {
        "id": "ai-energy-optimization",
        "title": "AI Energy Management & Carbon Tracker",
        "category": "ai", "industry": "energy", "icon": "⚡", "popular": False,
        "pricing": {"basic": "$1,999/mo", "pro": "$4,999/mo", "enterprise": "Custom"},
        "description": "AI energy management reducing consumption by 20-40% with real-time carbon tracking. Integrates with BMS and IoT sensors.",
        "features": ["Real-time energy monitoring", "AI HVAC optimization", "Carbon footprint tracking", "Demand response", "BMS/IoT integration", "ESG reporting", "Renewable optimization", "ROI tracking"],
        "benefits": ["20-40% energy cost reduction", "Accurate carbon reporting", "Optimize renewables", "Meet ESG requirements"]
    },
    {
        "id": "ai-video-analytics",
        "title": "AI Video Analytics & Content Intelligence",
        "category": "ai", "industry": "media", "icon": "🎬", "popular": False,
        "pricing": {"basic": "$499/mo", "pro": "$1,499/mo", "enterprise": "Custom"},
        "description": "AI video analytics for security, retail, and content. Object detection, behavior analysis, and automated content tagging.",
        "features": ["Real-time object detection", "Facial recognition", "Behavior analysis", "Auto video tagging", "Crowd counting", "CCTV/NVR integration", "Edge processing", "GDPR/BIPA compliance"],
        "benefits": ["Real-time threat detection", "Customer behavior analysis", "Search video in seconds", "Automated content moderation"]
    },
]

def make_ts_entry(s):
    return f"""  {{
    id: '{s['id']}',
    title: '{s['title']}',
    description: '{s['description']}',
    features: {json.dumps(s['features'])},
    benefits: {json.dumps(s['benefits'])},
    pricing: {{ basic: '{s['pricing']['basic']}', pro: '{s['pricing']['pro']}', enterprise: '{s['pricing']['enterprise']}' }},
    contactInfo: {{ website: '/services/{s['id']}', email: '{CONTACT['email']}', phone: '{CONTACT['phone']}' }},
    icon: '{s['icon']}',
    href: '/services/{s['id']}',
    popular: {str(s['popular']).lower()},
    category: '{s['category']}',
    industry: '{s['industry']}',
  }}"""

# Update JSON
with open(SERVICES_JSON) as f:
    data = json.load(f)
existing_ids = {s['id'] for s in data}

added = 0
for svc in REMAINING:
    if svc['id'] not in existing_ids:
        svc['contactInfo'] = {"website": f"/services/{svc['id']}", "email": CONTACT['email'], "phone": CONTACT['phone'], "address": CONTACT['address']}
        data.append(svc)
        added += 1
        print(f"  ADD: {svc['id']}")
    else:
        print(f"  SKIP: {svc['id']}")

with open(SERVICES_JSON, 'w') as f:
    json.dump(data, f, indent=2)
print(f"JSON: {added} added, total: {len(data)}")

# Update TS
with open(SERVICES_TS) as f:
    content = f.read()

# Categorize
ai_entries = [s for s in REMAINING if s['category'] == 'ai' and s['id'] not in existing_ids]
it_entries = [s for s in REMAINING if s['category'] == 'it' and s['id'] not in existing_ids]
sec_entries = [s for s in REMAINING if s['category'] == 'security' and s['id'] not in existing_ids]

for array_name, entries, next_export in [
    ('aiServices', ai_entries, 'export const itServices'),
    ('itServices', it_entries, 'export const cloudServices'),
    ('securityServices', sec_entries, 'export const dataServices'),
]:
    if not entries:
        continue
    arr_start = content.find(f'export const {array_name}')
    next_start = content.find(next_export, arr_start)
    close = content.rfind('];', arr_start, next_start)
    if close != -1:
        entries_str = ',\n' + ',\n'.join(make_ts_entry(e) for e in entries)
        content = content[:close] + entries_str + content[close:]
        print(f"  ✅ {array_name}: {len(entries)} entries")
    else:
        print(f"  ❌ {array_name}: closing not found")

with open(SERVICES_TS, 'w') as f:
    f.write(content)

print("Done")

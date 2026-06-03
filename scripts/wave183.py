#!/usr/bin/env python3
"""Wave 183: Add 8 new services — cybersecurity, edtech, energy-tech, logistics-tech, + high-value AI"""
import json, re

JSON_PATH = 'app/data/servicesData.json'
TS_PATH = 'app/data/servicesData.ts'

NEW_SERVICES = [
  {
    "id": "cybersecurity-pentest-automation",
    "title": "Automated Penetration Testing Platform",
    "description": "AI-powered automated penetration testing. Continuous vulnerability scanning, exploit simulation, and remediation guidance.",
    "features": ["Automated vulnerability scanning", "Exploit simulation (safe)", "Remediation prioritization", "Compliance reporting (OWASP, NIST)", "API and web app testing", "Network segmentation testing", "Integration with Burp Suite, Nessus", "Continuous security assessment"],
    "benefits": ["Find vulnerabilities before attackers", "Continuous security validation", "Reduce pentest costs 70%", "Automated compliance reporting"],
    "pricing": {"basic": "$599/mo", "pro": "$1,799/mo", "enterprise": "Custom"},
    "icon": "🔓", "popular": True, "category": "cybersecurity", "industry": "Technology"
  },
  {
    "id": "edtech-student-success-analytics",
    "title": "Student Success Analytics Platform",
    "description": "Predict and prevent student dropout. Early warning systems, intervention tracking, and engagement analytics for higher education.",
    "features": ["Dropout risk prediction", "Early warning alerts", "Intervention tracking", "Engagement analytics", "Course performance analysis", "Advisor workflow tools", "Integration with Canvas, Blackboard", "FERPA-compliant data handling"],
    "benefits": ["Increase retention 15%", "Early intervention for at-risk students", "Data-driven advising", "Meet accreditation requirements"],
    "pricing": {"basic": "$299/mo", "pro": "$899/mo", "enterprise": "Custom"},
    "icon": "📊", "popular": False, "category": "edtech", "industry": "Education"
  },
  {
    "id": "energy-tech-carbon-tracking",
    "title": "Enterprise Carbon Tracking Platform",
    "description": "Scope 1, 2, and 3 carbon emissions tracking. Automated data collection, reporting, and reduction recommendations.",
    "features": ["Scope 1, 2, 3 emissions tracking", "Automated data collection from utilities", "Reduction scenario modeling", "GHG Protocol compliance", "Integration with ERP and IoT", "Supplier emissions tracking", "Audit-ready reporting", "Science-based target setting"],
    "benefits": ["Meet ESG reporting requirements", "Identify reduction opportunities", "Audit-ready data", "Track progress to net zero"],
    "pricing": {"basic": "$499/mo", "pro": "$1,499/mo", "enterprise": "Custom"},
    "icon": "🌍", "popular": True, "category": "energy-tech", "industry": "Energy"
  },
  {
    "id": "logistics-tech-last-mile-optimization",
    "title": "Last-Mile Delivery Optimization",
    "description": "AI last-mile delivery optimization. Route planning, driver tracking, customer notifications, and proof of delivery.",
    "features": ["Dynamic route optimization", "Real-time driver tracking", "Customer ETA notifications", "Proof of delivery (photo, signature)", "Capacity planning", "Integration with carriers (UPS, FedEx, USPS)", "Delivery analytics", "Returns management"],
    "benefits": ["Reduce last-mile costs 20%", "Improve delivery experience", "Real-time visibility", "Automated proof of delivery"],
    "pricing": {"basic": "$349/mo", "pro": "$1,049/mo", "enterprise": "Custom"},
    "icon": "🚚", "popular": True, "category": "logistics-tech", "industry": "Logistics"
  },
  {
    "id": "ai-legal-contract-analysis",
    "title": "AI Contract Analysis & Lifecycle Management",
    "description": "Analyze contracts with AI. Clause extraction, risk scoring, obligation tracking, and renewal management.",
    "features": ["Contract clause extraction", "Risk scoring and flagging", "Obligation and milestone tracking", "Renewal and expiration alerts", "Template library with fallback clauses", "Version comparison", "Integration with DocuSign, Ironclad", "Bulk contract analysis"],
    "benefits": ["Review contracts 10x faster", "Never miss a renewal", "Identify risky clauses automatically", "Centralize contract management"],
    "pricing": {"basic": "$399/mo", "pro": "$1,199/mo", "enterprise": "Custom"},
    "icon": "📝", "popular": False, "category": "ai", "industry": "Legal"
  },
  {
    "id": "micro-saas-feature-flags",
    "title": "FeatureFlag Pro — Feature Management",
    "description": "Feature flags, progressive rollouts, and experimentation platform. Ship code safely with canary releases and A/B testing.",
    "features": ["Feature flags (boolean, percentage, user-based)", "Canary releases", "A/B testing and experimentation", "Kill switches for instant rollback", "Segment targeting", "SDKs for 20+ languages", "Integration with GitHub, GitLab, LaunchDarkly migration", "Audit log and approval workflows"],
    "benefits": ["Ship code safely", "Reduce rollback time to seconds", "Experiment without risk", "Gradual rollout to users"],
    "pricing": {"basic": "$49/mo", "pro": "$149/mo", "enterprise": "$449/mo"},
    "icon": "🚩", "popular": True, "category": "micro-saas", "industry": "SaaS"
  },
  {
    "id": "healthcare-it-clinical-trial-matching",
    "title": "AI Clinical Trial Matching Platform",
    "description": "Match patients to clinical trials using AI. EHR integration, eligibility screening, and enrollment tracking.",
    "features": ["Patient-trial matching algorithm", "EHR/EMR integration", "Eligibility pre-screening", "Enrollment tracking", "Site performance analytics", "Patient consent management", "Integration with Epic, Cerner, TriNetX", "HIPAA and 21 CFR Part 11 compliance"],
    "benefits": ["Accelerate trial enrollment", "Improve patient access to trials", "Reduce screening failures", "Meet enrollment targets faster"],
    "pricing": {"basic": "$999/mo", "pro": "$2,999/mo", "enterprise": "Custom"},
    "icon": "🧬", "popular": True, "category": "healthcare-it", "industry": "Healthcare"
  },
  {
    "id": "ai-multimodal-search",
    "title": "Multimodal AI Search Engine",
    "description": "Search across text, images, video, and audio with a single query. Embedding-based semantic search for enterprise knowledge.",
    "features": ["Text, image, video, audio search", "Semantic embedding search", "Cross-modal queries (text→image, image→text)", "Custom index creation", "Real-time indexing", "Integration with Elasticsearch, Pinecone, Weaviate", "Access control and permissions", "Analytics dashboard"],
    "benefits": ["Search all content types in one place", "Find results keyword search misses", "Index enterprise knowledge", "Scale to billions of items"],
    "pricing": {"basic": "$299/mo", "pro": "$899/mo", "enterprise": "Custom"},
    "icon": "🔎", "popular": True, "category": "ai", "industry": "Technology"
  },
]

# ── Update JSON ───────────────────────────────────────────────────
with open(JSON_PATH, 'r') as f:
    existing = json.load(f)

existing_ids = {s['id'] for s in existing}
added = 0
for svc in NEW_SERVICES:
    if svc['id'] not in existing_ids:
        entry = {
            "id": svc["id"],
            "title": svc["title"],
            "description": svc["description"],
            "features": svc["features"],
            "benefits": svc["benefits"],
            "pricing": svc["pricing"],
            "contactInfo": {
                "website": f"/services/{svc['id']}",
                "email": "kleber@ziontechgroup.com",
                "phone": "+1 302 464 0950"
            },
            "icon": svc["icon"],
            "href": f"/services/{svc['id']}",
            "popular": svc["popular"],
            "category": svc["category"],
            "industry": svc["industry"]
        }
        existing.append(entry)
        added += 1

with open(JSON_PATH, 'w') as f:
    json.dump(existing, f, indent=2, ensure_ascii=False)

print(f"JSON: Added {added} services. Total: {len(existing)}")

# ── Update TS ─────────────────────────────────────────────────────
with open(TS_PATH, 'r') as f:
    ts = f.read()

def make_entry(svc):
    feats = json.dumps(svc['features'])
    benefits = json.dumps(svc['benefits'])
    pricing = json.dumps(svc['pricing'])
    return f"""  {{
    id: '{svc['id']}',
    title: '{svc['title']}',
    description: '{svc['description']}',
    features: {feats},
    benefits: {benefits},
    pricing: {pricing},
    contactInfo: {{website:'/services/{svc['id']}', email:'kleber@ziontechgroup.com', phone:'+1 302 464 0950'}},
    icon: '{svc['icon']}', href: '/services/{svc['id']}', popular: {str(svc['popular']).lower()}, category: '{svc['category']}', industry: '{svc['industry']}',
  }}"""

cat_to_array = {
    'ai': 'additionalNewAiServices',
    'micro-saas': 'additionalNewMicroSaaS',
    'it': 'additionalNewItServices',
    'security': 'additionalNewSecurityServices',
    'cloud': 'additionalNewCloudServices',
    'data': 'additionalNewDataServices',
    'automation': 'newAutomationServices',
    'cybersecurity': 'additionalNewSecurityServices',
    'fintech': 'additionalNewDataServices',
    'healthcare-it': 'additionalNewItServices',
    'edtech': 'additionalNewItServices',
    'agritech': 'additionalNewDataServices',
    'energy-tech': 'additionalNewCloudServices',
    'logistics-tech': 'newAutomationServices',
    'retail-tech': 'additionalNewMicroSaaS',
    'construction-tech': 'additionalNewConstructionTechServices',
    'manufacturing-tech': 'additionalNewManufacturingTechServices',
    'it-services': 'additionalNewItServicesServices',
    'ai-services': 'additionalNewAiServicesServices',
}

by_array = {}
for s in NEW_SERVICES:
    arr = cat_to_array.get(s['category'], 'additionalNewAiServices')
    if arr not in by_array:
        by_array[arr] = []
    by_array[arr].append(s)

for array_name, services in by_array.items():
    entries = ',\n'.join(make_entry(s) for s in services)
    pattern = rf"(export const {array_name}: Service\[\] = \[.*?)\];"
    match = re.search(pattern, ts, re.DOTALL)
    if match:
        old_close = match.group(0)
        block = match.group(1)
        if block.rstrip().endswith(']'):
            new_close = f"{block}\n{entries}\n];"
        else:
            new_close = f"{block},\n{entries}\n];"
        ts = ts.replace(old_close, new_close, 1)
        print(f"  Added {len(services)} to {array_name}")
    else:
        print(f"  WARNING: {array_name} not found")

# Fix lone commas
lines = ts.split('\n')
new_lines = []
i = 0
while i < len(lines):
    line = lines[i]
    if line.strip() == ',' and i > 19000 and i > 0 and i < len(lines) - 1:
        prev = lines[i-1].strip()
        nxt = lines[i+1].strip()
        if prev.endswith('},') and nxt.startswith('{'):
            i += 1
            continue
    new_lines.append(line)
    i += 1

with open(TS_PATH, 'w') as f:
    f.write('\n'.join(new_lines))

print(f"TS updated with {len(NEW_SERVICES)} Wave 183 services")

#!/usr/bin/env python3
"""Wave 184: Add 8 new services — synthetic media detection, API monetization, + more high-value niches"""
import json, re

JSON_PATH = 'app/data/servicesData.json'
TS_PATH = 'app/data/servicesData.ts'

NEW_SERVICES = [
  {
    "id": "ai-synthetic-media-detection",
    "title": "AI Synthetic Media Detection Suite",
    "description": "Detect AI-generated text, images, video, and audio. Protect against deepfakes, AI-written content fraud, and synthetic identity attacks.",
    "features": ["AI text detection (GPT, Claude, Gemini)", "Image provenance analysis", "Video deepfake detection", "Audio voice clone detection", "API for real-time scanning", "Browser extension for content verification", "Batch scanning for enterprises", "Confidence scoring with explanations"],
    "benefits": ["Protect against AI fraud", "Verify content authenticity", "Meet regulatory requirements", "Brand and reputation protection"],
    "pricing": {"basic": "$399/mo", "pro": "$1,199/mo", "enterprise": "Custom"},
    "icon": "🕵️", "popular": True, "category": "cybersecurity", "industry": "Technology"
  },
  {
    "id": "micro-saas-api-monetization",
    "title": "APIMonetize — API Monetization Platform",
    "description": "Turn APIs into revenue streams. Usage-based billing, developer portals, rate limiting, and analytics for API-first businesses.",
    "features": ["Usage-based billing", "Developer portal with docs", "Rate limiting and quotas", "API key management", "Analytics and revenue tracking", "Integration with Stripe, PayPal", "SDK generation", "Webhook notifications"],
    "benefits": ["Monetize existing APIs", "Self-service developer onboarding", "Usage-based pricing flexibility", "Reduce billing engineering"],
    "pricing": {"basic": "$99/mo", "pro": "$299/mo", "enterprise": "$899/mo"},
    "icon": "💰", "popular": True, "category": "micro-saas", "industry": "SaaS"
  },
  {
    "id": "ai-supply-chain-risk",
    "title": "AI Supply Chain Risk Intelligence",
    "description": "Monitor supply chain risks in real-time. Supplier financial health, geopolitical risk, natural disaster impact, and alternative sourcing recommendations.",
    "features": ["Supplier financial health monitoring", "Geopolitical risk scoring", "Natural disaster impact analysis", "Alternative supplier recommendations", "Multi-tier supply chain mapping", "Integration with SAP, Oracle", "Risk alert dashboard", "Scenario modeling"],
    "benefits": ["Prevent supply disruptions", "Diversify supplier base", "Real-time risk visibility", "Data-driven sourcing decisions"],
    "pricing": {"basic": "$799/mo", "pro": "$2,399/mo", "enterprise": "Custom"},
    "icon": "🔗", "popular": False, "category": "ai", "industry": "Supply Chain"
  },
  {
    "id": "cloud-finops-platform",
    "title": "Cloud FinOps Platform",
    "description": "Cloud cost optimization and financial management. Multi-cloud cost visibility, waste detection, reserved instance management, and chargeback.",
    "features": ["Multi-cloud cost visibility (AWS, Azure, GCP)", "Waste detection and auto-remediation", "Reserved instance and savings plan management", "Chargeback and showback", "Budget alerts and forecasting", "Integration with CloudHealth, Spot.io", "Kubernetes cost allocation", "FinOps best practices dashboard"],
    "benefits": ["Reduce cloud spend 30%", "Automate cost optimization", "Chargeback accuracy", "FinOps culture enablement"],
    "pricing": {"basic": "$299/mo", "pro": "$899/mo", "enterprise": "Custom"},
    "icon": "☁️", "popular": True, "category": "cloud", "industry": "Technology"
  },
  {
    "id": "data-privacy-consent-management",
    "title": "Privacy & Consent Management Platform",
    "description": "GDPR, CCPA, and global privacy compliance. Consent collection, data subject request management, and privacy impact assessments.",
    "features": ["Consent collection and management", "Data subject request (DSR) automation", "Privacy impact assessments", "Cookie consent banner", "Global privacy law coverage", "Integration with OneTrust, TrustArc", "Audit trail and reporting", "Data mapping and inventory"],
    "benefits": ["Avoid GDPR fines up to 4% revenue", "Automate DSR workflows", "Build customer trust", "Centralize privacy compliance"],
    "pricing": {"basic": "$199/mo", "pro": "$599/mo", "enterprise": "Custom"},
    "icon": "🔒", "popular": False, "category": "data", "industry": "Legal"
  },
  {
    "id": "automation-intelligent-document-processing",
    "title": "Intelligent Document Processing (IDP)",
    "description": "Automate document-heavy workflows. OCR, classification, extraction, and routing for invoices, claims, applications, and forms.",
    "features": ["OCR and intelligent document classification", "Key-value extraction", "Workflow routing and approval", "Integration with RPA tools (UiPath, Automation Anywhere)", "Custom model training", "Human-in-the-loop validation", "Analytics on processing accuracy", "API and batch processing"],
    "benefits": ["Process documents 10x faster", "Reduce manual data entry 90%", "Improve accuracy", "Scale without hiring"],
    "pricing": {"basic": "$399/mo", "pro": "$1,199/mo", "enterprise": "Custom"},
    "icon": "📑", "popular": True, "category": "automation", "industry": "Technology"
  },
  {
    "id": "ai-customer-data-platform",
    "title": "AI-Powered Customer Data Platform",
    "description": "Unify customer data from all sources. AI segmentation, predictive analytics, and activation across marketing channels.",
    "features": ["Customer data unification", "Identity resolution", "AI segmentation and lookalike", "Predictive analytics (LTV, churn)", "Activation across email, ads, SMS", "Integration with Segment, mParticle", "Privacy-compliant data handling", "Real-time customer profiles"],
    "benefits": ["360-degree customer view", "AI-driven segmentation", "Predict customer behavior", "Activate data across channels"],
    "pricing": {"basic": "$499/mo", "pro": "$1,499/mo", "enterprise": "Custom"},
    "icon": "👤", "popular": False, "category": "ai", "industry": "Marketing"
  },
  {
    "id": "security-zero-trust-network",
    "title": "Zero Trust Network Access (ZTNA)",
    "description": "Replace VPN with zero trust. Identity-based access, micro-segmentation, and continuous verification for hybrid workforces.",
    "features": ["Identity-based access control", "Micro-segmentation", "Continuous device and user verification", "Replace traditional VPN", "Integration with IdP (Okta, Azure AD)", "Shadow IT discovery", "Access analytics and audit", "Support for remote and hybrid work"],
    "benefits": ["Eliminate VPN complexity", "Reduce attack surface", "Secure remote access", "Meet zero trust mandates"],
    "pricing": {"basic": "$199/mo", "pro": "$599/mo", "enterprise": "Custom"},
    "icon": "🔐", "popular": True, "category": "security", "industry": "Technology"
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

print(f"TS updated with {len(NEW_SERVICES)} Wave 184 services")

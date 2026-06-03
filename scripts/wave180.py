#!/usr/bin/env python3
"""Wave 180: Add 10 new services"""
import json, re

JSON_PATH = 'app/data/servicesData.json'
TS_PATH = 'app/data/servicesData.ts'

NEW_SERVICES = [
  {
    "id": "ai-fine-tuning-platform",
    "title": "AI Model Fine-Tuning Platform",
    "description": "Fine-tune LLMs and foundation models on your data. Managed training, RLHF, LoRA/QLoRA support, and model evaluation with A/B testing.",
    "features": ["Managed fine-tuning pipelines", "LoRA and QLoRA support", "RLHF and DPO alignment", "Model evaluation and A/B testing", "Integration with HuggingFace, OpenAI", "Dataset management and versioning", "Cost optimization (spot instances)", "Model registry and deployment"],
    "benefits": ["Custom models for your domain", "10x cheaper than training from scratch", "Maintain data privacy", "Iterate quickly on model improvements"],
    "pricing": {"basic": "$499/mo", "pro": "$1,499/mo", "enterprise": "Custom"},
    "icon": "🎯", "popular": True, "category": "ai", "industry": "Technology"
  },
  {
    "id": "ai-computer-vision-inspection",
    "title": "AI Computer Vision for Visual Inspection",
    "description": "Automated visual inspection for manufacturing, logistics, and quality control. Detect defects, classify objects, and verify assembly with 99%+ accuracy.",
    "features": ["Defect detection and classification", "Object counting and verification", "Assembly verification", "Integration with industrial cameras", "Edge deployment on NVIDIA Jetson", "Custom model training", "Real-time alerting", "Historical trend analysis"],
    "benefits": ["Reduce defect escape rate by 90%", "Automate manual inspection", "Improve product quality", "Lower labor costs"],
    "pricing": {"basic": "$999/mo", "pro": "$2,999/mo", "enterprise": "Custom"},
    "icon": "👁️", "popular": False, "category": "ai", "industry": "Manufacturing"
  },
  {
    "id": "micro-saas-referral-program",
    "title": "ReferralHub — Referral Program Platform",
    "description": "Launch and manage referral programs for SaaS. Track referrals, automate rewards, and measure ROI with built-in analytics.",
    "features": ["Referral link generation", "Automated reward fulfillment", "Fraud detection", "Integration with Stripe, PayPal", "Custom branding", "Analytics and ROI tracking", "Multi-tier referral programs", "API for custom integrations"],
    "benefits": ["Acquire customers at 5x lower cost", "Automate referral tracking", "Increase word-of-mouth", "Measure referral ROI"],
    "pricing": {"basic": "$29/mo", "pro": "$99/mo", "enterprise": "$299/mo"},
    "icon": "🤝", "popular": False, "category": "micro-saas", "industry": "SaaS"
  },
  {
    "id": "micro-saas-status-page",
    "title": "StatusPage — Service Status Communication",
    "description": "Beautiful status pages for SaaS companies. Incident communication, subscriber notifications, and uptime history with custom domains.",
    "features": ["Custom domain status pages", "Incident management", "Subscriber notifications (email, SMS, Slack)", "Uptime history and SLA reporting", "Integration with Pingdom, Datadog", "Custom branding", "API for status updates", "Maintenance scheduling"],
    "benefits": ["Reduce support tickets during incidents", "Transparent communication", "Professional brand image", "Automated subscriber updates"],
    "pricing": {"basic": "$19/mo", "pro": "$59/mo", "enterprise": "$199/mo"},
    "icon": "📡", "popular": False, "category": "micro-saas", "industry": "SaaS"
  },
  {
    "id": "it-vendor-management",
    "title": "IT Vendor Management Platform",
    "description": "Centralize vendor management. Contract tracking, performance scoring, risk assessment, and renewal management for all IT vendors.",
    "features": ["Vendor database and profiles", "Contract tracking and alerts", "Performance scoring", "Risk assessment", "Renewal management", "Spend analysis", "Integration with procurement tools", "Compliance tracking"],
    "benefits": ["Reduce vendor sprawl", "Optimize contract renewals", "Mitigate vendor risk", "Centralize vendor data"],
    "pricing": {"basic": "$299/mo", "pro": "$899/mo", "enterprise": "Custom"},
    "icon": "🤝", "popular": False, "category": "it", "industry": "Technology"
  },
  {
    "id": "security-data-loss-prevention",
    "title": "Data Loss Prevention (DLP) Platform",
    "description": "Prevent sensitive data exfiltration across endpoints, cloud, and email. Content inspection, policy enforcement, and incident response.",
    "features": ["Content inspection (regex, ML, fingerprinting)", "Endpoint DLP", "Cloud DLP (SaaS, IaaS)", "Email DLP", "Policy enforcement and blocking", "Incident response workflows", "Integration with Microsoft Purview, Symantec", "Compliance reporting (GDPR, HIPAA, PCI)"],
    "benefits": ["Prevent data breaches", "Meet compliance requirements", "Monitor data movement", "Automate incident response"],
    "pricing": {"basic": "$499/mo", "pro": "$1,499/mo", "enterprise": "Custom"},
    "icon": "🔒", "popular": False, "category": "security", "industry": "Technology"
  },
  {
    "id": "cloud-disaster-recovery",
    "title": "Cloud Disaster Recovery as a Service",
    "description": "Automated cloud disaster recovery. Continuous replication, automated failover, and regular DR testing with RPO/RTO guarantees.",
    "features": ["Continuous data replication", "Automated failover and failback", "Regular DR testing", "RPO/RTO guarantees", "Integration with AWS, Azure, GCP", "Runbook automation", "Compliance reporting", "24/7 monitoring"],
    "benefits": ["Meet business continuity requirements", "Automate DR testing", "Reduce RTO to minutes", "Pay only for what you use"],
    "pricing": {"basic": "$999/mo", "pro": "$2,999/mo", "enterprise": "Custom"},
    "icon": "🔄", "popular": False, "category": "cloud", "industry": "Technology"
  },
  {
    "id": "data-data-catalog",
    "title": "AI-Powered Data Catalog",
    "description": "Automated data catalog with AI-powered discovery, classification, and lineage. Find, understand, and trust your data assets.",
    "features": ["Automated data discovery", "AI classification and tagging", "Data lineage tracking", "Quality scoring", "Integration with Snowflake, Databricks, BigQuery", "Collaboration and glossary", "Access control", "Usage analytics"],
    "benefits": ["Find data assets instantly", "Understand data lineage", "Ensure data quality", "Enable self-service analytics"],
    "pricing": {"basic": "$599/mo", "pro": "$1,799/mo", "enterprise": "Custom"},
    "icon": "📚", "popular": False, "category": "data", "industry": "Technology"
  },
  {
    "id": "ai-speech-analytics",
    "title": "AI Speech Analytics Platform",
    "description": "Analyze customer calls with AI. Sentiment analysis, topic detection, compliance monitoring, and agent coaching insights.",
    "features": ["Real-time transcription", "Sentiment analysis", "Topic and keyword detection", "Compliance monitoring", "Agent coaching insights", "Integration with Twilio, Genesys", "Custom vocabulary", "Call summarization"],
    "benefits": ["Improve customer satisfaction", "Ensure compliance", "Coach agents effectively", "Automate call review"],
    "pricing": {"basic": "$399/mo", "pro": "$1,199/mo", "enterprise": "Custom"},
    "icon": "🎙️", "popular": False, "category": "ai", "industry": "Technology"
  },
  {
    "id": "automation-workflow-orchestration",
    "title": "Workflow Orchestration Engine",
    "description": "Enterprise workflow orchestration. Visual designer, SLA monitoring, error handling, and integration with 200+ systems.",
    "features": ["Visual workflow designer", "SLA monitoring and alerting", "Error handling and retry logic", "Integration with 200+ systems", "Version control", "Audit trails", "Scalable execution engine", "API-first architecture"],
    "benefits": ["Automate complex workflows", "Reduce manual effort", "Ensure SLA compliance", "Scale without code changes"],
    "pricing": {"basic": "$299/mo", "pro": "$899/mo", "enterprise": "Custom"},
    "icon": "⚙️", "popular": False, "category": "automation", "industry": "Technology"
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

by_cat = {}
for s in NEW_SERVICES:
    cat = s['category']
    if cat not in by_cat:
        by_cat[cat] = []
    by_cat[cat].append(s)

cat_to_array = {
    'ai': 'additionalNewAiServices',
    'micro-saas': 'additionalNewMicroSaaS',
    'it': 'additionalNewItServices',
    'security': 'additionalNewSecurityServices',
    'cloud': 'additionalNewCloudServices',
    'data': 'additionalNewDataServices',
    'automation': 'newAutomationServices',
}

for cat, array_name in cat_to_array.items():
    if cat not in by_cat:
        continue
    entries = ',\n'.join(make_entry(s) for s in by_cat[cat])
    pattern = rf"(export const {array_name}: Service\[\] = \[.*?)\];"
    match = re.search(pattern, ts, re.DOTALL)
    if match:
        old_close = match.group(0)
        existing_block = match.group(1)
        if existing_block.rstrip().endswith(']'):
            new_close = f"{existing_block}\n{entries}\n];"
        else:
            new_close = f"{existing_block},\n{entries}\n];"
        ts = ts.replace(old_close, new_close, 1)
        print(f"  Added {len(by_cat[cat])} entries to {array_name}")
    else:
        print(f"  WARNING: Could not find {array_name}")

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

print(f"TS updated with {len(NEW_SERVICES)} Wave 180 services")

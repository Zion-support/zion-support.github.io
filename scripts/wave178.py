#!/usr/bin/env python3
"""Wave 178: Add 10 new services — focus on emerging tech niches"""
import json, re

JSON_PATH = 'app/data/servicesData.json'
TS_PATH = 'app/data/servicesData.ts'

NEW_SERVICES = [
  {
    "id": "ai-multimodal-search-engine",
    "title": "AI Multimodal Search Engine",
    "description": "Search across text, images, video, and audio with a single query. CLIP-based embeddings, natural language understanding, and real-time indexing for enterprise content.",
    "features": ["Cross-modal search (text, image, video, audio)", "CLIP and custom embeddings", "Real-time indexing", "Natural language queries", "Integration with Elasticsearch, Pinecone, Weaviate", "Access control and filtering", "Search analytics dashboard", "API and embeddable widget"],
    "benefits": ["Find content across all media types", "Reduce search time by 70%", "Unified search experience", "Enterprise-grade security"],
    "pricing": {"basic": "$499/mo", "pro": "$1,499/mo", "enterprise": "Custom"},
    "icon": "🔍", "popular": True, "category": "ai", "industry": "Technology"
  },
  {
    "id": "ai-synthetic-media-detection",
    "title": "AI Synthetic Media Detection Suite",
    "description": "Detect AI-generated text, images, video, and audio. Protect against deepfakes, AI-written content fraud, and synthetic identity attacks.",
    "features": ["AI text detection (GPT, Claude, Gemini)", "Image provenance analysis", "Video deepfake detection", "Audio voice clone detection", "API for real-time scanning", "Browser extension for content verification", "Batch scanning for enterprises", "Confidence scoring with explanations"],
    "benefits": ["Protect against AI fraud", "Verify content authenticity", "Meet regulatory requirements", "Brand and reputation protection"],
    "pricing": {"basic": "$399/mo", "pro": "$1,199/mo", "enterprise": "Custom"},
    "icon": "🕵️", "popular": False, "category": "ai", "industry": "Cybersecurity"
  },
  {
    "id": "micro-saas-api-monetization",
    "title": "APIMonetize — API Monetization Platform",
    "description": "Turn APIs into revenue streams. Usage-based billing, developer portals, rate limiting, and analytics for API-first businesses.",
    "features": ["Usage-based billing and metering", "Developer portal with docs", "Rate limiting and quotas", "API key management", "Integration with Stripe, PayPal", "Analytics and revenue reporting", "SDK generation", "Webhook notifications"],
    "benefits": ["Monetize existing APIs", "Reduce billing complexity", "Developer self-service", "Real-time revenue tracking"],
    "pricing": {"basic": "$99/mo", "pro": "$299/mo", "enterprise": "$799/mo"},
    "icon": "💳", "popular": False, "category": "micro-saas", "industry": "SaaS"
  },
  {
    "id": "micro-saas-feedback-analytics",
    "title": "FeedbackIQ — Customer Feedback Analytics",
    "description": "Aggregate and analyze customer feedback from all channels. AI-powered sentiment analysis, trend detection, and automated action items.",
    "features": ["Multi-channel feedback aggregation", "AI sentiment analysis", "Trend detection and alerting", "Automated action item generation", "Integration with Zendesk, Intercom, G2", "NPS and CSAT tracking", "Executive summary reports", "Custom categorization"],
    "benefits": ["Understand customers at scale", "Catch issues before they escalate", "Data-driven product decisions", "Reduce churn with early warnings"],
    "pricing": {"basic": "$49/mo", "pro": "$149/mo", "enterprise": "$399/mo"},
    "icon": "📊", "popular": False, "category": "micro-saas", "industry": "SaaS"
  },
  {
    "id": "it-itam-asset-management",
    "title": "IT Asset Management (ITAM) Platform",
    "description": "Complete IT asset lifecycle management. Hardware, software, cloud resources, and license tracking with automated discovery and compliance reporting.",
    "features": ["Automated asset discovery", "Software license management", "Cloud resource tracking", "Lifecycle management", "Compliance reporting (ISO, SOC 2)", "Integration with ServiceNow, JAMF", "Depreciation tracking", "Procurement workflow"],
    "benefits": ["Eliminate shadow IT", "Optimize license spend", "Audit-ready compliance", "Full asset visibility"],
    "pricing": {"basic": "$299/mo", "pro": "$899/mo", "enterprise": "Custom"},
    "icon": "🖥️", "popular": False, "category": "it", "industry": "Technology"
  },
  {
    "id": "security-supply-chain-security",
    "title": "Software Supply Chain Security",
    "description": "Secure your software supply chain with SBOM generation, dependency vulnerability scanning, and build integrity verification.",
    "features": ["SBOM generation (SPDX, CycloneDX)", "Dependency vulnerability scanning", "Build integrity verification", "Container image scanning", "Integration with GitHub, GitLab, Jenkins", "Policy enforcement", "License compliance checking", "Real-time alerts for new CVEs"],
    "benefits": ["Prevent supply chain attacks", "Meet EO 14028 requirements", "Automate security in CI/CD", "Full dependency visibility"],
    "pricing": {"basic": "$599/mo", "pro": "$1,799/mo", "enterprise": "Custom"},
    "icon": "⛓️", "popular": False, "category": "security", "industry": "Technology"
  },
  {
    "id": "cloud-edge-computing-platform",
    "title": "Edge Computing Platform",
    "description": "Deploy and manage workloads at the edge. Low-latency processing, IoT integration, and centralized management for distributed edge infrastructure.",
    "features": ["Edge workload deployment", "Low-latency processing", "IoT device integration", "Centralized management console", "Auto-scaling at edge nodes", "Integration with AWS Wavelength, Azure Edge", "Monitoring and alerting", "Data synchronization"],
    "benefits": ["Sub-10ms latency for critical apps", "Reduce bandwidth costs", "Process data locally", "Scale to thousands of edge nodes"],
    "pricing": {"basic": "$999/mo", "pro": "$2,999/mo", "enterprise": "Custom"},
    "icon": "📡", "popular": False, "category": "cloud", "industry": "Technology"
  },
  {
    "id": "data-data-product-studio",
    "title": "Data Product Studio",
    "description": "Build, publish, and monetize data products. Self-service data marketplace with quality guarantees, access controls, and usage analytics.",
    "features": ["Data product builder", "Self-service marketplace", "Quality SLAs and monitoring", "Access control and governance", "Usage analytics and billing", "Integration with Snowflake, Databricks", "API and download delivery", "Data contract enforcement"],
    "benefits": ["Monetize data assets", "Self-service data access", "Ensure data quality", "Governed data sharing"],
    "pricing": {"basic": "$799/mo", "pro": "$2,499/mo", "enterprise": "Custom"},
    "icon": "🏪", "popular": False, "category": "data", "industry": "Technology"
  },
  {
    "id": "ai-robotics-process-automation",
    "title": "AI Robotics Process Automation (RPA)",
    "description": "Next-generation RPA with AI. Handle unstructured data, make decisions, and adapt to UI changes. Go beyond rule-based automation.",
    "features": ["AI-powered screen understanding", "Unstructured data handling", "Adaptive automation (handles UI changes)", "Decision-making with LLMs", "Integration with UiPath, Automation Anywhere", "Process mining and discovery", "Human-in-the-loop for exceptions", "Analytics and optimization"],
    "benefits": ["Automate complex processes", "Handle unstructured data", "Self-healing bots", "10x more automation coverage"],
    "pricing": {"basic": "$1,499/mo", "pro": "$4,499/mo", "enterprise": "Custom"},
    "icon": "🤖", "popular": True, "category": "ai", "industry": "Technology"
  },
  {
    "id": "automation-smart-contract-auditor",
    "title": "Smart Contract Security Auditor",
    "description": "AI-powered smart contract security analysis. Detect vulnerabilities, gas optimizations, and compliance issues across Solidity, Rust, and Move.",
    "features": ["Vulnerability detection (reentrancy, overflow, access control)", "Gas optimization suggestions", "Compliance checking (ERC standards)", "Integration with Hardhat, Foundry", "CI/CD pipeline integration", "Detailed audit reports", "Remediation suggestions", "Multi-chain support (Ethereum, Solana, Aptos)"],
    "benefits": ["Prevent costly exploits", "Optimize gas costs", "Ensure compliance", "Automate security reviews"],
    "pricing": {"basic": "$399/mo", "pro": "$1,199/mo", "enterprise": "Custom"},
    "icon": "📜", "popular": False, "category": "automation", "industry": "Web3"
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

print(f"TS updated with {len(NEW_SERVICES)} Wave 178 services")

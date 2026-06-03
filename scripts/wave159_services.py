#!/usr/bin/env python3
"""Wave 159 - 15 new real services."""
import json

SERVICES_JSON = 'app/data/servicesData.json'
SERVICES_TS = 'app/data/servicesData.ts'
E = "kleber@ziontechgroup.com"
P = "+1 302 464 0950"

NEW = [
    # MICRO-SAAS (5)
    {
        "id": "micro-saas-ai-podcast-producer",
        "title": "AI Podcast Producer & Content Repurposing",
        "category": "ai", "industry": "media", "icon": "🎙️", "popular": True,
        "pricing": {"basic": "$39/mo", "pro": "$99/mo", "enterprise": "Custom"},
        "description": "AI-powered podcast production that edits audio, removes filler words, generates show notes, creates clips for social media, and repurposes episodes into blog posts and newsletters.",
        "features": ["AI audio editing (remove ums, ahs, long pauses)", "Automatic transcription with speaker detection", "AI show notes and summary generation", "Social media clip extraction and captioning", "Blog post and newsletter generation from episodes", "Integration with Spotify, Apple Podcasts, YouTube", "Multi-language translation and dubbing", "Analytics on listener engagement and drop-off"],
        "benefits": ["Produce podcasts 5x faster", "Repurpose every episode into 10+ content pieces", "Reach global audiences with AI translation", "Grow audience with optimized social clips"]
    },
    {
        "id": "micro-saas-ai-debt-collector",
        "title": "AI Debt Collection & Accounts Receivable Platform",
        "category": "ai", "industry": "finance", "icon": "💰", "popular": False,
        "pricing": {"basic": "$199/mo", "pro": "$499/mo", "enterprise": "Custom"},
        "description": "AI-powered debt collection that personalizes outreach, optimizes contact timing, and automates follow-ups. Increase collection rates by 40% while maintaining compliance.",
        "features": ["AI contact timing optimization", "Personalized outreach by debtor profile", "Automated multi-channel follow-up (email, SMS, call)", "Payment plan negotiation AI", "Compliance monitoring (FDCPA, state laws)", "Integration with accounting and ERP systems", "Collector performance analytics", "Skip tracing and contact enrichment"],
        "benefits": ["Increase collection rates by 40%", "Reduce cost per collection by 60%", "Maintain 100% regulatory compliance", "Scale collections without adding staff"]
    },
    {
        "id": "micro-saas-ai-sign-language",
        "title": "AI Sign Language Translation & Accessibility",
        "category": "ai", "industry": "technology", "icon": "🤟", "popular": False,
        "pricing": {"basic": "$299/mo", "pro": "$799/mo", "enterprise": "Custom"},
        "description": "Real-time AI sign language translation for video calls, websites, and public spaces. Supports ASL, BSL, and 20+ sign languages. Make your content accessible to the Deaf community.",
        "features": ["Real-time sign language recognition", "Text/gesture to sign language avatar", "Video call sign language interpretation", "Website accessibility overlay", "Support for 20+ sign languages", "Custom vocabulary training", "API for embedding in any application", "Compliance with ADA and accessibility standards"],
        "benefits": ["Make content accessible to 70M+ Deaf worldwide", "Real-time translation for video calls", "Comply with ADA accessibility requirements", "Support 20+ sign languages globally"]
    },
    {
        "id": "micro-saas-ai-wildlife-monitoring",
        "title": "AI Wildlife Monitoring & Conservation Platform",
        "category": "ai", "industry": "technology", "icon": "🦁", "popular": False,
        "pricing": {"basic": "$499/mo", "pro": "$1,499/mo", "enterprise": "Custom"},
        "description": "AI-powered wildlife monitoring using camera traps, drone imagery, and acoustic sensors. Species identification, population tracking, and poaching detection for conservation.",
        "features": ["AI species identification from camera traps", "Drone imagery analysis for population surveys", "Acoustic monitoring for bird and marine species", "Poaching detection and ranger alerting", "Integration with GPS collars and satellite tags", "Population trend analysis and forecasting", "Custom species model training", "Conservation impact reporting"],
        "benefits": ["Identify species with 98% accuracy", "Monitor wildlife 24/7 without human presence", "Detect poaching in real-time", "Track population trends with AI forecasting"]
    },
    {
        "id": "micro-saas-ai-sleep-optimizer",
        "title": "AI Sleep Optimization & Wellness Platform",
        "category": "ai", "industry": "healthcare", "icon": "😴", "popular": False,
        "pricing": {"basic": "$19/mo", "pro": "$39/mo", "enterprise": "Custom"},
        "description": "AI-powered sleep optimization that analyzes sleep patterns, provides personalized recommendations, and integrates with wearables. Improve sleep quality by 40%.",
        "features": ["Sleep pattern analysis from wearables", "AI personalized sleep recommendations", "Smart alarm and wake-up optimization", "Sleep environment optimization (light, temp, sound)", "Integration with Apple Watch, Fitbit, Oura", "Sleep coaching with AI chatbot", "Correlations with diet, exercise, stress", "Sleep disorder screening and referral"],
        "benefits": ["Improve sleep quality by 40%", "Personalized recommendations based on your data", "Integrate with all major wearables", "Screen for sleep disorders early"]
    },
    # IT SERVICES (5)
    {
        "id": "it-siem-security",
        "title": "IT SIEM & Security Information Event Management",
        "category": "security", "industry": "technology", "icon": "🔍", "popular": True,
        "pricing": {"basic": "$3,000/mo", "pro": "$7,500/mo", "enterprise": "Custom"},
        "description": "SIEM deployment, management, and tuning. Collect, correlate, and analyze security events from across your infrastructure. 24/7 monitoring with threat detection.",
        "features": ["SIEM platform selection and deployment", "Log collection from all infrastructure sources", "Custom correlation rules and dashboards", "Threat detection and alert tuning", "Integration with firewalls, EDR, cloud platforms", "Compliance reporting (SOC 2, HIPAA, PCI)", "Incident investigation and forensics", "24/7 monitoring and management"],
        "benefits": ["Detect threats across all infrastructure", "Reduce false positives by 70% with tuning", "Meet compliance log management requirements", "24/7 expert monitoring and response"]
    },
    {
        "id": "it-container-platform",
        "title": "IT Container Platform & Kubernetes Management",
        "category": "it", "industry": "technology", "icon": "📦", "popular": False,
        "pricing": {"basic": "$2,500/mo", "pro": "$6,000/mo", "enterprise": "Custom"},
        "description": "Container platform design, deployment, and management. Kubernetes, Docker, and service mesh for cloud-native applications. From development to production.",
        "features": ["Kubernetes cluster design and deployment", "Container registry and CI/CD integration", "Service mesh (Istio, Linkerd) implementation", "Container security and policy management", "Monitoring and logging for containers", "Integration with AWS EKS, Azure AKS, GCP GKE", "Cost optimization for container workloads", "24/7 management and support"],
        "benefits": ["Deploy containers at scale with Kubernetes", "Reduce container costs by 40% with optimization", "Secure containers with policy enforcement", "Enable DevOps with self-service platforms"]
    },
    {
        "id": "it-field-service-management",
        "title": "IT Field Service Management & Mobile Workforce",
        "category": "it", "industry": "technology", "icon": "🔧", "popular": False,
        "pricing": {"basic": "$50/tech/mo", "pro": "$85/tech/mo", "enterprise": "Custom"},
        "description": "Field service management platform for mobile workforce. Scheduling, dispatch, work orders, and mobile app for technicians. Increase first-time fix rates by 35%.",
        "features": ["AI-optimized scheduling and dispatch", "Mobile app for technicians (iOS, Android)", "Work order management and tracking", "Parts and inventory management", "Customer portal and self-service", "Integration with CRM and billing", "GPS tracking and route optimization", "Analytics on technician performance"],
        "benefits": ["Increase first-time fix rate by 35%", "Reduce travel time with AI routing", "Improve customer satisfaction with real-time updates", "Scale field operations without adding dispatchers"]
    },
    {
        "id": "it-print-management",
        "title": "IT Print Management & Managed Print Services",
        "category": "it", "industry": "technology", "icon": "🖨️", "popular": False,
        "pricing": {"basic": "$500/mo", "pro": "$1,200/mo", "enterprise": "Custom"},
        "description": "Managed print services that reduce printing costs by 40%. Fleet management, secure printing, and sustainability tracking for organizations of all sizes.",
        "features": ["Print fleet assessment and optimization", "Managed print fleet (supplies, maintenance)", "Secure print release and authentication", "Print policy enforcement and rules", "Cost allocation by department/project", "Sustainability tracking and reporting", "Integration with Active Directory", "Mobile and cloud printing support"],
        "benefits": ["Reduce print costs by 40%", "Eliminate wasted prints with secure release", "Track and reduce environmental impact", "Free IT staff from printer management"]
    },
    {
        "id": "it-accessibility-compliance",
        "title": "IT Accessibility Compliance & Digital Inclusion",
        "category": "it", "industry": "technology", "icon": "♿", "popular": False,
        "pricing": {"basic": "$2,000/mo", "pro": "$5,000/mo", "enterprise": "Custom"},
        "description": "Digital accessibility compliance for WCAG 2.1, ADA, and Section 508. Audits, remediation, and ongoing monitoring to ensure your digital properties are accessible to all.",
        "features": ["WCAG 2.1 AA compliance audit", "Automated accessibility scanning", "Manual testing with assistive technologies", "Remediation guidance and implementation", "VPAT and accessibility statement creation", "Ongoing monitoring and alerting", "Training for developers and content teams", "Legal compliance documentation"],
        "benefits": ["Achieve WCAG 2.1 AA compliance", "Reduce legal risk of accessibility lawsuits", "Reach 15% more users with accessible design", "Demonstrate commitment to digital inclusion"]
    },
    # AI SERVICES (5)
    {
        "id": "ai-synthetic-data",
        "title": "AI Synthetic Data Generation & Privacy Platform",
        "category": "ai", "industry": "technology", "icon": "🔬", "popular": False,
        "pricing": {"basic": "$999/mo", "pro": "$2,999/mo", "enterprise": "Custom"},
        "description": "Generate realistic synthetic data that preserves statistical properties while eliminating privacy risks. Train AI models and test applications without real customer data.",
        "features": ["AI synthetic data generation from real data", "Statistical fidelity validation", "Privacy guarantee (differential privacy)", "Support for tabular, text, image, and time-series", "Integration with ML pipelines and data warehouses", "Custom data schema and relationship modeling", "Data augmentation for underrepresented classes", "Compliance with GDPR, CCPA, HIPAA"],
        "benefits": ["Train AI without privacy risks", "Generate unlimited test data", "Preserve statistical properties of real data", "Comply with data privacy regulations"]
    },
    {
        "id": "ai-robotics-process-automation",
        "title": "AI Hyperautomation & Intelligent Process Automation",
        "category": "ai", "industry": "technology", "icon": "🤖", "popular": True,
        "pricing": {"basic": "$2,999/mo", "pro": "$7,999/mo", "enterprise": "Custom"},
        "description": "End-to-end hyperautomation combining RPA, AI, and process mining. Discover, automate, and optimize business processes with intelligent automation.",
        "features": ["Process mining and discovery", "AI-powered bot development", "Document understanding and extraction", "Natural language processing for unstructured data", "Integration with UiPath, Automation Anywhere, Blue Prism", "Orchestration and monitoring dashboard", "Continuous optimization with ML", "Citizen developer enablement"],
        "benefits": ["Automate 80% of repetitive tasks", "Reduce process costs by 60%", "Discover automation opportunities with AI", "Scale automation with citizen developers"]
    },
    {
        "id": "ai-weather-prediction",
        "title": "AI Weather Prediction & Climate Risk Analytics",
        "category": "ai", "industry": "energy", "icon": "🌤️", "popular": False,
        "pricing": {"basic": "$1,999/mo", "pro": "$4,999/mo", "enterprise": "Custom"},
        "description": "AI-powered hyperlocal weather prediction and climate risk analytics. Protect assets, optimize operations, and manage climate risk with 95% accurate forecasts.",
        "features": ["Hyperlocal weather forecasting (1km resolution)", "Climate risk scoring for assets and supply chains", "Severe weather early warning", "Integration with IoT sensors and SCADA", "Historical climate trend analysis", "Custom models for agriculture, energy, insurance", "API for embedding weather intelligence", "Climate scenario modeling (RCP 4.5, 8.5)"],
        "benefits": ["95% accurate hyperlocal forecasts", "Protect assets from weather disruptions", "Optimize operations with weather intelligence", "Manage long-term climate risk"]
    },
    {
        "id": "ai-digital-human",
        "title": "AI Digital Human & Avatar Platform",
        "category": "ai", "industry": "technology", "icon": "🧑‍💻", "popular": False,
        "pricing": {"basic": "$499/mo", "pro": "$1,499/mo", "enterprise": "Custom"},
        "description": "Create photorealistic AI digital humans for customer service, training, and entertainment. Real-time animation, lip sync, and natural conversation.",
        "features": ["Photorealistic digital human creation", "Real-time face and body animation", "Natural language conversation", "Lip sync for 50+ languages", "Integration with Unity, Unreal, web platforms", "Custom avatar creation from photos", "Emotion and expression control", "API for embedding in any application"],
        "benefits": ["Create digital humans without motion capture", "Deliver 24/7 customer service with AI avatars", "Train employees with realistic simulations", "Entertain and engage with lifelike digital characters"]
    },
    {
        "id": "ai-predictive-safety",
        "title": "AI Predictive Safety & Workplace Risk Prevention",
        "category": "ai", "industry": "manufacturing", "icon": "🦺", "popular": False,
        "pricing": {"basic": "$1,499/mo", "pro": "$3,999/mo", "enterprise": "Custom"},
        "description": "AI-powered workplace safety that predicts accidents before they happen. Computer vision for PPE detection, behavior analysis, and risk scoring. Reduce incidents by 60%.",
        "features": ["Real-time PPE detection (hard hats, vests, gloves)", "Unsafe behavior identification", "Near-miss detection and reporting", "Risk scoring by area and time", "Integration with CCTV and safety systems", "Automated safety alerts and notifications", "Safety compliance dashboards", "Historical incident pattern analysis"],
        "benefits": ["Reduce workplace incidents by 60%", "Detect PPE violations in real-time", "Identify near-misses before they become incidents", "Create a data-driven safety culture"]
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
    contactInfo: {{ website: '/services/{s['id']}', email: '{E}', phone: '{P}' }},
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
new_entries = []
for svc in NEW:
    if svc['id'] not in existing_ids:
        svc['contactInfo'] = {"website": f"/services/{svc['id']}", "email": E, "phone": P, "address": "364 E Main St STE 1008, Middletown, DE 19709"}
        data.append(svc)
        new_entries.append(svc)
        added += 1
        print(f"  ADD: {svc['id']}")
    else:
        print(f"  SKIP: {svc['id']}")

with open(SERVICES_JSON, 'w') as f:
    json.dump(data, f, indent=2)
print(f"\nJSON: {added} added, total: {len(data)}")

# Update TS
with open(SERVICES_TS) as f:
    content = f.read()

ai_entries = [e for e in new_entries if e['category'] == 'ai']
it_entries = [e for e in new_entries if e['category'] == 'it']
sec_entries = [e for e in new_entries if e['category'] == 'security']

for array_name, entries, nxt in [
    ('aiServices', ai_entries, 'export const itServices'),
    ('itServices', it_entries, 'export const cloudServices'),
    ('securityServices', sec_entries, 'export const dataServices'),
]:
    if not entries:
        continue
    arr_start = content.find(f'export const {array_name}')
    next_start = content.find(nxt, arr_start)
    close = content.rfind('];', arr_start, next_start) if next_start != -1 else content.rfind('];', arr_start)
    if close != -1:
        entries_str = ',\n' + ',\n'.join(make_ts_entry(e) for e in entries)
        content = content[:close] + entries_str + content[close:]
        print(f"  ✅ {array_name}: {len(entries)} entries")
    else:
        print(f"  ❌ {array_name}: closing not found")

with open(SERVICES_TS, 'w') as f:
    f.write(content)

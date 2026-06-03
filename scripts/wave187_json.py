import json

with open('app/data/servicesData.json', 'r') as f:
    services = json.load(f)

existing_ids = {s['id'] for s in services}

new_services = [
    {
        "id": "data-realtime-streaming-analytics",
        "title": "Data Real-Time Streaming Analytics Platform",
        "description": "Process and analyze millions of events per second with sub-second latency. Supports Kafka, Kinesis, Pub/Sub with built-in windowing, joins, and anomaly detection.",
        "features": ["Millions of events/sec throughput", "Sub-second query latency", "SQL + Python analytics", "Built-in anomaly detection", "Kafka, Kinesis, Pub/Sub connectors"],
        "benefits": ["Real-time business decisions", "Detect anomalies instantly", "Unify batch and streaming"],
        "pricing": {"basic": "$499/mo", "pro": "$1,499/mo", "enterprise": "Custom"},
        "contactInfo": {"website": "/services/data-realtime-streaming-analytics", "email": "commercial@ziontechgroup.com", "phone": "+1 302 464 0950"},
        "icon": "⚡", "href": "/services/data-realtime-streaming-analytics", "popular": True, "category": "data", "industry": "Finance"
    },
    {
        "id": "data-master-data-management",
        "title": "Data Master Data Management (MDM) Hub",
        "description": "Centralized master data management that creates a single source of truth for customers, products, suppliers, and assets across all enterprise systems.",
        "features": ["Golden record creation", "Data stewardship workflows", "Real-time synchronization", "Data quality scoring", "SAP, Salesforce, Oracle connectors"],
        "benefits": ["Eliminate data silos", "Improve data quality by 95%", "Accelerate M&A integration"],
        "pricing": {"basic": "$1,999/mo", "pro": "$4,999/mo", "enterprise": "Custom"},
        "contactInfo": {"website": "/services/data-master-data-management", "email": "commercial@ziontechgroup.com", "phone": "+1 302 464 0950"},
        "icon": "🗂️", "href": "/services/data-master-data-management", "popular": False, "category": "data", "industry": "Healthcare"
    },
    {
        "id": "cloud-kubernetes-platform-service",
        "title": "Cloud Kubernetes Platform as a Service",
        "description": "Managed Kubernetes platform with auto-scrolling, service mesh, GitOps deployments, and multi-cluster management across AWS, Azure, and GCP.",
        "features": ["Multi-cloud cluster management", "Built-in service mesh (Istio)", "GitOps continuous delivery", "Auto-scrolling policies", "Cost optimization dashboards"],
        "benefits": ["Reduce Kubernetes complexity by 80%", "Deploy in minutes not days", "Multi-cloud portability"],
        "pricing": {"basic": "$299/mo", "pro": "$799/mo", "enterprise": "$2,499/mo"},
        "contactInfo": {"website": "/services/cloud-kubernetes-platform-service", "email": "commercial@ziontechgroup.com", "phone": "+1 302 464 0950"},
        "icon": "☸️", "href": "/services/cloud-kubernetes-platform-service", "popular": True, "category": "cloud", "industry": "Technology"
    },
    {
        "id": "cloud-serverless-application-platform",
        "title": "Cloud Serverless Application Platform",
        "description": "Build and deploy serverless applications with auto-scrolling, event-driven architecture, API management, and edge computing capabilities.",
        "features": ["Function-as-a-Service (FaaS)", "Edge computing support", "API gateway with rate limiting", "Event-driven triggers", "Built-in observability"],
        "benefits": ["Zero infrastructure management", "Pay-per-execution pricing", "Auto-scrolling to millions of requests"],
        "pricing": {"basic": "$49/mo", "pro": "$199/mo", "enterprise": "$599/mo"},
        "contactInfo": {"website": "/services/cloud-serverless-application-platform", "email": "commercial@ziontechgroup.com", "phone": "+1 302 464 0950"},
        "icon": "⚡", "href": "/services/cloud-serverless-application-platform", "popular": False, "category": "cloud", "industry": "Technology"
    },
    {
        "id": "automation-robotic-process-automation",
        "title": "Automation Robotic Process Automation (RPA)",
        "description": "Enterprise RPA platform that automates repetitive desktop and web tasks with AI-powered document understanding and citizen developer tools.",
        "features": ["Visual workflow designer", "AI document understanding", "Citizen developer portal", "24/7 bot orchestration", "ERP/CRM/legacy system integration"],
        "benefits": ["Automate 70% of repetitive tasks", "Deploy bots in days not months", "Reduce human errors by 99%"],
        "pricing": {"basic": "$999/mo", "pro": "$2,499/mo", "enterprise": "Custom"},
        "contactInfo": {"website": "/services/automation-robotic-process-automation", "email": "commercial@ziontechgroup.com", "phone": "+1 302 464 0950"},
        "icon": "🤖", "href": "/services/automation-robotic-process-automation", "popular": True, "category": "automation", "industry": "Finance"
    },
    {
        "id": "healthcare-telehealth-platform",
        "title": "Healthcare Telehealth Platform",
        "description": "HIPAA-compliant telehealth platform with HD video consultations, EHR integration, remote patient monitoring, and automated appointment scheduling.",
        "features": ["HD video consultations", "EHR/EMR integration (Epic, Cerner)", "Remote patient monitoring", "Automated scheduling & reminders", "HIPAA-compliant messaging"],
        "benefits": ["Increase patient reach by 300%", "Reduce no-shows by 45%", "Full HIPAA compliance"],
        "pricing": {"basic": "$399/mo", "pro": "$999/mo", "enterprise": "$2,999/mo"},
        "contactInfo": {"website": "/services/healthcare-telehealth-platform", "email": "commercial@ziontechgroup.com", "phone": "+1 302 464 0950"},
        "icon": "🏥", "href": "/services/healthcare-telehealth-platform", "popular": True, "category": "it", "industry": "Healthcare"
    },
    {
        "id": "ai-multimodal-search-engine",
        "title": "AI Multimodal Search Engine",
        "description": "Search across text, images, video, and audio with natural language queries. Powered by vector embeddings and cross-modal retrieval for enterprise knowledge bases.",
        "features": ["Text, image, video, audio search", "Natural language queries", "Vector embedding search", "Cross-modal retrieval", "Real-time indexing"],
        "benefits": ["Find anything in seconds", "No keyword engineering needed", "Unified search across all media"],
        "pricing": {"basic": "$299/mo", "pro": "$799/mo", "enterprise": "$2,499/mo"},
        "contactInfo": {"website": "/services/ai-multimodal-search-engine", "email": "commercial@ziontechgroup.com", "phone": "+1 302 464 0950"},
        "icon": "🔎", "href": "/services/ai-multimodal-search-engine", "popular": False, "category": "ai", "industry": "Technology"
    }
]

added = 0
for s in new_services:
    if s['id'] not in existing_ids:
        services.append(s)
        added += 1
    else:
        print(f"  SKIP (exists): {s['id']}")

with open('app/data/services.json', 'w') as f:
    json.dump(services, f, indent=2, ensure_ascii=False)

print(f"Added: {added} | Total: {len(services)}")

#!/usr/bin/env python3
"""Insert Waves 57, 58, 59 — 36 new services into servicesData.ts"""

path = "/data/data/com.termux/files/home/zion-support.github.io/app/data/servicesData.ts"

with open(path, 'r') as f:
    content = f.read()

last_close = content.rfind('];')
if last_close == -1:
    print("ERROR: Could not find closing ];")
    exit(1)

waves = """
  {
    id: "ai-predictive-deal-scoring",
    title: "AI Predictive Deal Scoring Engine",
    description: "Machine learning platform that scores deal probability from CRM and email data. Predicts which opportunities are most likely to close, estimated deal value, and optimal next action. Integrates with Salesforce, HubSpot, and Pipedrive. Increases win rate by 28% and reduces sales cycle by 18%.",
    features: ["Deal probability scoring", "Win/loss prediction", "Optimal next action", "Salesforce/HubSpot integration", "Pipeline analytics", "Rep performance benchmarking", "Forecast accuracy improvement"],
    benefits: ["28% higher win rate", "18% shorter sales cycle", "Better forecasting", "Prioritized pipeline", "Data-driven coaching"],
    pricing: { basic: "$299/mo", pro: "$899/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Target",
    category: "ai",
    popular: true,
    href: "/services/ai-predictive-deal-scoring",
    industry: "Sales & Marketing"
  },
  {
    id: "auto-reference-generator",
    title: "AI Customer Reference Generator",
    description: "Automatically identify satisfied customers and generate reference requests from email sentiment and engagement signals. Creates personalized reference request emails, tracks responses, and maintains a reference library. Integrates with CRM and customer success platforms.",
    features: ["Satisfaction signal detection", "Auto-reference request creation", "Response tracking", "Reference library management", "CRM integration", "NPS correlation", "Success story templates"],
    benefits: ["3x more customer references", "Automated outreach pipeline", "Social proof on demand", "Success story library", "Aligned with CS efforts"],
    pricing: { basic: "$199/mo", pro: "$499/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Users",
    category: "automation",
    popular: false,
    href: "/services/auto-reference-generator",
    industry: "Sales & Marketing"
  },
  {
    id: "ai-kb-article-generator",
    title: "AI Knowledge Base Article Generator",
    description: "Automatically converts resolved support emails into searchable knowledge base articles. Uses NLP to extract problem/solution pairs, generates SEO-organized content, and publishes to Helpjuice, Zendesk Guide, or Confluence. Reduces KB creation time by 85%.",
    features: ["Email-to-article extraction", "NLP problem/solution detection", "SEO-organized content", "Multi-platform publishing", "Auto-categorization", "Duplicate detection", "Translation support"],
    benefits: ["85% faster KB creation", "Searchable past resolutions", "Reduced support tickets", "Self-service enablement", "Multi-language KB"],
    pricing: { basic: "$149/mo", pro: "$449/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "BookOpen",
    category: "ai",
    popular: false,
    href: "/services/ai-kb-article-generator",
    industry: "Customer Support"
  },
  {
    id: "ai-contract-analyzer",
    title: "AI Contract Analysis & Risk Detection",
    description: "Legal AI platform that analyzes contracts from email attachments, flags risky clauses, extracts key terms, and compares against standard templates. Supports NDAs, MSAs, SOWs, and vendor agreements. Features redline suggestions, renewal tracking, and compliance checking.",
    features: ["Contract risk scoring", "Key term extraction", "Clause comparison", "Redline suggestions", "Renewal tracking", "COM/CLM integration", "Compliance checking"],
    benefits: ["90% faster review", "Risk identification", "Cost reduction", "Compliance assurance", "Renewal management"],
    pricing: { basic: "$399/mo", pro: "$1,199/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "FileWarning",
    category: "ai",
    popular: true,
    href: "/services/ai-contract-analyzer",
    industry: "Legal & Compliance"
  },
  {
    id: "ai-competitive-battlecard",
    title: "AI Competitive Battlecard Generator",
    description: "Auto-generates sales battlecards from competitor websites, G2 reviews, earnings calls, and email intel. Features win/loss analysis by competitor, objection handling scripts, and real-time competitive alerts. Integrates with Salesforce, Highspot, and Seismic.",
    features: ["Auto battlecard generation", "Win/loss analysis", "Objection handling", "Competitive alerts", "Sales enablement integration", "Share of voice tracking", "Battlecard analytics"],
    benefits: ["Always-current intel", "Better competitive positioning", "Reduced research time", "Data-driven objections", "Higher conversion"],
    pricing: { basic: "$499/mo", pro: "$1,499/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Swords",
    category: "ai",
    popular: false,
    href: "/services/ai-competitive-battlecard",
    industry: "Sales & Marketing"
  },
  {
    id: "ai-email-response-optimizer",
    title: "AI Email Response Optimizer",
    description: "Analyzes outbound email performance and optimizes subject lines, body copy, CTAs, and send times for maximum engagement. Features A/B testing, performance analytics, and per-recipient personalization. Improves open rates by 35% and reply rates by 50%.",
    features: ["Subject line optimization", "Body copy analysis", "CTA optimization", "Send time optimization", "A/B testing", "Performance analytics", "Per-recipient personalization"],
    benefits: ["35% higher open rates", "50% more replies", "Personalized at scale", "Continuous improvement", "ROI visibility"],
    pricing: { basic: "$99/mo", pro: "$299/mo", enterprise: "$699/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "LineChart",
    category: "ai",
    popular: true,
    href: "/services/ai-email-response-optimizer",
    industry: "Sales & Marketing"
  },
  {
    id: "competitive-price-tracker-new",
    title: "Competitive Price Intelligence Suite",
    description: "Real-time competitor pricing intelligence covering e-commerce, SaaS, and retail. Features SKU-level tracking, MAP violation detection, price elasticity modeling, and automated repricing recommendations. Integrates with 50+ marketplaces and custom websites.",
    features: ["SKU-level tracking", "MAP violation detection", "Elasticity modeling", "Automated repricing", "Historical price feeds", "Marketplace integration", "Alert system"],
    benefits: ["Protect margins", "Competitive positioning", "MAP compliance", "Price optimization", "Market intelligence"],
    pricing: { basic: "$499/mo", pro: "$1,399/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "TrendingDown",
    category: "automation",
    popular: false,
    href: "/services/competitive-price-tracker-new",
    industry: "Retail & E-Commerce"
  },
  {
    id: "ip-asset-management",
    title: "AI Intellectual Property Management",
    description: "AI-powered IP portfolio management platform. Features patent landscape analysis, trademark monitoring, IP valuation, and freedom-to-operate searches. Integrates with USPTO, WIPO, and patent databases. Used by law firms, R&D teams, and technology companies.",
    features: ["Patent landscape analysis", "Trademark monitoring", "IP valuation", "FTO searches", "USPTO/WIPO integration", "IP portfolio analytics", "Infringement detection"],
    benefits: ["IP risk reduction", "Valuable portfolio insights", "Cost-efficient FTO", "Competitive IP intel", "Portfolio optimization"],
    pricing: { basic: "$599/mo", pro: "$1,799/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Lightbulb",
    category: "saas",
    popular: false,
    href: "/services/ip-asset-management",
    industry: "Legal & IP"
  },
  {
    id: "escrow-service",
    title: "AI-Powered Escrow & Payment Platform",
    description: "Digital escrow platform for marketplace transactions, freelancer payments, and B2B trade. Features multi-currency support, compliance screening, automated release conditions, and dispute resolution. Integrates with Stripe, PayPal, and major banking APIs.",
    features: ["Multi-currency holding", "Automated release", "Compliance screening", "Dispute resolution", "Payment integration", "Escrow analytics", "Insurance-backed protection"],
    benefits: ["Trusted transactions", "Reduced disputes", "Automated compliance", "Multi-currency support", "Fraud prevention"],
    pricing: { basic: "1% of transaction", pro: "0.75% of transaction", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "DollarSign",
    category: "saas",
    popular: false,
    href: "/services/escrow-service",
    industry: "Finance & Commerce"
  },
  {
    id: "api-security-gateway",
    title: "AI API Security Gateway",
    description: "Zero-trust API security platform that detects and blocks API abuse, BOT attacks, and data exfiltration. Features schema validation, rate limiting, anomaly detection, and OWASP Top 10 API protection. Deploys as sidecar proxy, API gateway plugin, or cloud service.",
    features: ["Zero-trust enforcement", "BOT attack detection", "Schema validation", "Anomaly detection", "OWASP API Top 10", "Rate limiting", "Data exfiltration prevention"],
    benefits: ["Secure all APIs", "Reduce attack surface", "Compliance readiness", "Dev-first integration", "Real-time protection"],
    pricing: { basic: "$299/mo", pro: "$899/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "ShieldCheck",
    category: "it",
    popular: true,
    href: "/services/api-security-gateway",
    industry: "Cybersecurity"
  },
  {
    id: "ai-inventory-demand-planner",
    title: "AI Inventory & Demand Planner",
    description: "Machine learning demand forecasting and inventory optimization platform. Reduces stockouts by 45%, carrying costs by 25%, and improves order accuracy to 99.5%. Features multi-echelon optimization, supplier lead time prediction, and automated PO generation. Integrates with SAP, Oracle, NetSuite.",
    features: ["ML demand forecasting", "Multi-echelon optimization", "Supplier lead time prediction", "Automated PO generation", "Safety stock optimization", "ERP integration", "Seasonality detection"],
    benefits: ["45% fewer stockouts", "25% lower carrying costs", "99.5% order accuracy", "Automated replenishment", "Better supplier terms"],
    pricing: { basic: "$599/mo", pro: "$1,799/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Warehouse",
    category: "ai",
    popular: true,
    href: "/services/ai-inventory-demand-planner",
    industry: "Supply Chain"
  },
  {
    id: "predictive-maintenance-ii",
    title: "Predictive Maintenance II — Edge AI Edition",
    description: "Next-gen predictive maintenance with edge AI deployment for real-time failure prediction in low-connectivity environments. Runs on NVIDIA Jetson and Raspberry Pi. Features vibration analysis, thermal modeling, oil analysis, and 30-day failure forecasting for critical industrial equipment.",
    features: ["Edge AI deployment", "Vibration analysis AI", "Thermal modeling", "Oil analysis prediction", "30-day forecasting", "Low-connectivity operation", "Android/iOS dashboards"],
    benefits: ["50% downtime reduction", "Edge deployment", "30-day forecast", "Works offline", "Multi-sensor fusion"],
    pricing: { basic: "$999/mo", pro: "$2,999/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Watch",
    category: "automation",
    popular: false,
    href: "/services/predictive-maintenance-ii",
    industry: "Manufacturing"
  },
  {
    id: "inventory-management-ai",
    title: "AI Inventory Management with RFID & Vision",
    description: "Physical inventory management platform combining RFID tracking, barcode scanning, and computer vision for 99.9% inventory accuracy. Features automated cycle counts, shrinkage detection, and multi-location management. Integrates with WMS, POS, and ERP systems.",
    features: ["RFID + vision fusion", "Automated cycle counts", "Shrinkage detection", "Multi-location", "WMS/POS/ERP integration", "Real-time dashboards", "Mobile scanning"],
    benefits: ["99.9% accuracy", "80% less counting labor", "Shrinkage reduction", "Real-time visibility", "Omnichannel inventory"],
    pricing: { basic: "$399/mo", pro: "$1,199/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Boxes",
    category: "ai",
    popular: false,
    href: "/services/inventory-management-ai",
    industry: "Retail & Warehousing"
  },
  {
    id: "cyber-insurance-platform",
    title: "AI Cyber Insurance Risk Platform",
    description: "Cyber risk assessment and policy management platform for insurers and brokers. Features automated security scoring, claims fraud detection, and real-time portfolio risk monitoring. Integrates with client security tools (CrowdStrike, Qualys) for continuous underwriting.",
    features: ["Automated security scoring", "Claims fraud detection", "Real-time portfolio risk", "Continuous underwriting", "Integration with security tools", "Regulatory compliance", "Parametric trigger monitoring"],
    benefits: ["Better risk selection", "Fraud prevention", "Real-time portfolio view", "Automated underwriting", "Cyber CAT modeling"],
    pricing: { basic: "$999/mo", pro: "$2,999/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "ShieldPlus",
    category: "saas",
    popular: false,
    href: "/services/cyber-insurance-platform",
    industry: "Insurance"
  },
  {
    id: "devops-automation-suite",
    title: "AI DevOps Automation Suite",
    description: "End-to-end DevOps automation with AI-powered CI/CD, infrastructure as code generation, and self-healing deployments. Features automated code review, test generation, and cost optimization for AWS/Azure/GCP. Reduces deployment failures by 70% and cloud spend by 30%.",
    features: ["AI CI/CD", "Infrastructure as code generation", "Self-healing deployments", "Automated code review", "Test generation", "Cloud cost optimization", "Multi-cloud support"],
    benefits: ["70% fewer failures", "30% cloud savings", "Self-healing pipelines", "Automated testing", "Faster delivery"],
    pricing: { basic: "$349/mo", pro: "$999/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Terminal",
    category: "automation",
    popular: true,
    href: "/services/devops-automation-suite",
    industry: "Technology"
  },
  {
    id: "data-governance-privacy",
    title: "AI Data Governance & Privacy Platform",
    description: "Automated data governance platform with PII discovery, classification, and policy enforcement. Features data lineage mapping, consent management, DSAR automation, and compliance with GDPR, CCPA, LGPD, and POPIA. Integrates with all major data stores.",
    features: ["PII auto-discovery", "Data lineage mapping", "Consent management", "DSAR automation", "Multi-regulation compliance", "Policy enforcement", "Data quality scoring"],
    benefits: ["Automated compliance", "PII protection", "Consent management", "DSAR reduction", "Data quality"],
    pricing: { basic: "$1,199/mo", pro: "$3,499/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Database",
    category: "saas",
    popular: false,
    href: "/services/data-governance-privacy",
    industry: "Legal & Compliance"
  },
  {
    id: "lowcode-workflow-engine",
    title: "Low-Code Workflow Automation Engine",
    description: "No-code and low-code workflow builder for enterprise process automation. Features drag-and-drop designer, pre-built connectors (200+), AI-assisted workflow generation, and approval management. 10x faster than traditional BPM with 80% fewer engineering resources.",
    features: ["Drag-and-drop designer", "200+ connectors", "AI workflow generation", "Approval management", "SLA monitoring", "Error handling", "Process analytics"],
    benefits: ["10x faster automation", "80% less engineering", "Self-service workflows", "Process visibility", "Error resilience"],
    pricing: { basic: "$249/mo", pro: "$699/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Workflow",
    category: "automation",
    popular: true,
    href: "/services/lowcode-workflow-engine",
    industry: "Business Operations"
  },
  {
    id: "synthetic-data-generator ",
    title: "Synthetic Data Generator Platform",
    description: "AI-powered synthetic data generation for ML training, testing, and compliance. Generates realistic but privacy-preserving structured and unstructured data. Supports tabular, image, text, and time-series data. Ensures GDPR/CCPA compliance by eliminating real PII from dev/test environments.",
    features: ["Tabular/image/text/time-series", "Privacy-preserving generation", "Statistical fidelity", "Dev/test environment support", "Data augmentation", "Bias detection", "Open-source SDK"],
    benefits: ["No real PII in dev", "Unlimited training data", "Balanced datasets", "Faster ML development", "Regulatory compliance"],
    pricing: { basic: "$399/mo", pro: "$1,199/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "DatabaseZap",
    category: "ai",
    popular: false,
    href: "/services/synthetic-data-generator ",
    industry: "Data & AI"
  },
  {
    id: "ai-construction-cost-estimator",
    title: "AI Construction Cost Estimator",
    description: "Machine learning platform for accurate construction cost estimation. Analyzes project specs, historical data, material costs, and labor rates to generate detailed estimates within 5% accuracy. Features scenario modeling, risk assessment, and integration with Procore, PlanGrid, and Autodesk BIM.",
    features: ["ML cost estimation", "Scenario modeling", "Risk assessment", "Material/labor analysis", "BIM integration", "Historical data learning", "Change order impact analysis"],
    benefits: ["5% estimate accuracy", "Faster bidding", "Risk visibility", "Reduced cost overruns", "Competitive pricing"],
    pricing: { basic: "$499/mo", pro: "$1,499/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "HardHat",
    category: "ai",
    popular: false,
    href: "/services/ai-construction-cost-estimator",
    industry: "Construction"
  },
  {
    id: "ai-learning-management",
    title: "AI Learning Management System",
    description: "Next-generation LMS with AI-powered personalization, content generation, and skills gap analysis. Features adaptive learning paths, auto-generated quizzes, video captioning in 40+ languages, and integration with HR systems. Used by enterprises for upskilling 100K+ employees.",
    features: ["Adaptive learning paths", "Content auto-generation", "Skills gap analysis", "Quiz generation", "Multi-language support", "HR system integration", "Learning analytics"],
    benefits: ["Personalized learning", "Skills visibility", "Training ROI", "Reduced content costs", "Scalable upskilling"],
    pricing: { basic: "$19/employee/mo", pro: "$39/employee/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "GraduationCap",
    category: "saas",
    popular: false,
    href: "/services/ai-learning-management",
    industry: "Education & Training"
  },
  {
    id: "ai-patient-scheduling",
    title: "AI Patient Scheduling & Triage",
    description: "Intelligent patient scheduling and triage platform for healthcare providers. Features AI-powered slot optimization, automated reminders, no-show prediction, and symptom-based triage. Integrates with Epic, Cerner, and Allscripts. Reduces no-shows by 40% and wait times by 55%.",
    features: ["Slot optimization", "No-show prediction", "Symptom triage", "Automated reminders", "EHR integration", "Waitlist management", "Patient self-scheduling"],
    benefits: ["40% fewer no-shows", "55% shorter waits", "Optimized schedules", "Better triage", "Patient satisfaction"],
    pricing: { basic: "$399/mo", pro: "$1,199/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "CalendarCheck",
    category: "ai",
    popular: false,
    href: "/services/ai-patient-scheduling",
    industry: "Healthcare"
  },
  {
    id: "ai-supply-chain-risk",
    title: "AI Supply Chain Risk Monitor",
    description: "Real-time supply chain risk monitoring using news, weather, geopolitical, and financial data. Features supplier risk scoring, disruption prediction, and alternative sourcing recommendations. Monitors 50M+ global events in real-time across 200 countries.",
    features: ["Supplier risk scoring", "Disruption prediction", "Alternative sourcing", "Global event monitoring", "Geopolitical risk", "Natural disaster tracking", "Financial health monitoring"],
    benefits: ["Early disruption warning", "Supply chain resilience", "Alternative sourcing", "Financial risk reduction", "Real-time alerts"],
    pricing: { basic: "$999/mo", pro: "$2,999/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "AlertTriangle",
    category: "ai",
    popular: true,
    href: "/services/ai-supply-chain-risk",
    industry: "Supply Chain"
  }
"""

new_content = content[:last_close] + waves + content[last_close:]

with open(path, 'w') as f:
    f.write(new_content)

with open(path, 'r') as f:
    new = f.read()

import re
services = re.findall(r'\{\s*\n\s*id:', new)
print(f"Waves 57-59: Inserted successfully!")
print(f"Total service blocks: {len(services)}")
print(f"Total lines: {len(new.splitlines())}")

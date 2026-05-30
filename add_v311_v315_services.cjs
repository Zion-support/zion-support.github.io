const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'app/data/servicesData.json');
const services = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const contactInfo = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008, Middletown DE 19709"
};

const newServices = [
  // V311-V315 Email Intelligence
  {
    id: "email-experimentation-platform",
    title: "AI Email Experimentation Platform",
    description: "Run controlled A/B/n experiments on email strategies including tone, timing, length, and CTAs across segments with statistical significance tracking and automated winner selection.",
    category: "AI Services",
    subcategory: "Email Intelligence",
    icon: "🧪",
    price: "$599/month",
    features: ["A/B/n Testing", "Statistical Significance", "Segment Targeting", "Auto-Winner Selection", "Multi-Metric Tracking", "Experiment Dashboard"],
    benefits: ["Improve reply rates by 35%", "Data-driven email strategy", "Eliminate guesswork", "Continuous optimization"],
    link: "/services/email-experimentation-platform",
    version: "V311",
    contactInfo
  },
  {
    id: "email-relationship-graph",
    title: "AI Email Relationship Graph Platform",
    description: "Maps organizational relationship networks from email patterns, identifies key influencers, detects communication bottlenecks and silos, and optimizes information flow.",
    category: "AI Services",
    subcategory: "Email Intelligence",
    icon: "🔗",
    price: "$699/month",
    features: ["Network Mapping", "Influence Scoring", "Bottleneck Detection", "Silo Identification", "Communication Flow", "Stakeholder Analysis"],
    benefits: ["Identify key influencers", "Break down silos", "Optimize communication", "Prevent bottlenecks"],
    link: "/services/email-relationship-graph",
    version: "V312",
    contactInfo
  },
  {
    id: "email-evolution-engine",
    title: "AI Email Evolution Engine",
    description: "Continuously improves email templates using genetic algorithms, mutating subject lines, content, and CTAs through generations to find optimal combinations automatically.",
    category: "AI Services",
    subcategory: "Email Intelligence",
    icon: "🧬",
    price: "$549/month",
    features: ["Genetic Algorithms", "Template Mutation", "Crossover Breeding", "Fitness Scoring", "Auto-Evolution", "Generation Tracking"],
    benefits: ["Templates improve automatically", "Find optimal combinations", "Never stop optimizing", "Beat manual A/B testing"],
    link: "/services/email-evolution-engine",
    version: "V313",
    contactInfo
  },
  {
    id: "email-speed-optimizer",
    title: "AI Email Speed Optimizer",
    description: "Reduces email processing time with one-click responses, smart templates, batch processing, distraction-free compose mode, and intelligent send scheduling.",
    category: "AI Services",
    subcategory: "Email Intelligence",
    icon: "⚡",
    price: "$399/month",
    features: ["One-Click Responses", "Smart Templates", "Batch Processing", "Distraction-Free Mode", "Send Scheduling", "Time Analytics"],
    benefits: ["Save 2+ hours daily", "Process emails 3x faster", "Eliminate email overload", "Focus on high-value messages"],
    link: "/services/email-speed-optimizer",
    version: "V314",
    contactInfo
  },
  {
    id: "email-threat-intelligence-hub",
    title: "AI Email Threat Intelligence Hub",
    description: "Aggregates threat intelligence feeds, correlates IOCs with incoming emails, detects zero-day phishing campaigns, and shares indicators across the organization.",
    category: "AI Services",
    subcategory: "Email Intelligence",
    icon: "🛡️",
    price: "$899/month",
    features: ["Threat Feed Aggregation", "IOC Correlation", "Zero-Day Detection", "Campaign Analysis", "Incident Reporting", "IOC Sharing"],
    benefits: ["Detect zero-day phishing", "Block 99.9% of threats", "Prevent data breaches", "Automated incident response"],
    link: "/services/email-threat-intelligence-hub",
    version: "V315",
    contactInfo
  },
  // AI Services (7 new)
  {
    id: "ai-autonomous-agent-platform",
    title: "AI Autonomous Agent Orchestration Platform",
    description: "Build, deploy, and manage autonomous AI agents that collaborate to solve complex business problems with tool use, memory, planning, and multi-agent coordination.",
    category: "AI Services",
    subcategory: "Autonomous AI",
    icon: "🤖",
    price: "$2,999/month",
    features: ["Multi-Agent Orchestration", "Tool Integration", "Persistent Memory", "Task Planning", "Agent Collaboration", "Performance Monitoring"],
    benefits: ["Automate complex workflows", "Reduce manual work by 80%", "24/7 autonomous operations", "Scale without hiring"],
    link: "/services/ai-autonomous-agent-platform",
    contactInfo
  },
  {
    id: "ai-rag-knowledge-platform",
    title: "Enterprise RAG Knowledge Platform",
    description: "Production-ready Retrieval-Augmented Generation platform with hybrid search, document ingestion, citation tracking, and enterprise-grade security for AI-powered knowledge access.",
    category: "AI Services",
    subcategory: "Knowledge AI",
    icon: "📚",
    price: "$1,499/month",
    features: ["Hybrid Search", "Document Ingestion", "Citation Tracking", "Vector Database", "Access Control", "Multi-Model Support"],
    benefits: ["Answer questions from your data", "Reduce research time by 70%", "Eliminate knowledge silos", "Enterprise-grade security"],
    link: "/services/ai-rag-knowledge-platform",
    contactInfo
  },
  {
    id: "ai-voice-agent-platform",
    title: "AI Voice Agent Platform",
    description: "Deploy AI voice agents for customer service, sales, and support with natural conversation, sentiment detection, call routing, and real-time transcription.",
    category: "AI Services",
    subcategory: "Voice AI",
    icon: "🗣️",
    price: "$1,299/month",
    features: ["Natural Conversation", "Sentiment Detection", "Call Routing", "Real-Time Transcription", "Multi-Language", "CRM Integration"],
    benefits: ["Handle 80% of calls automatically", "24/7 voice support", "Reduce call center costs by 60%", "Improve customer satisfaction"],
    link: "/services/ai-voice-agent-platform",
    contactInfo
  },
  {
    id: "ai-multimodal-content-engine",
    title: "AI Multimodal Content Generation Engine",
    description: "Generate text, images, video, and audio content from a single prompt with brand consistency, style transfer, and cross-modal coherence.",
    category: "AI Services",
    subcategory: "Generative AI",
    icon: "🎨",
    price: "$999/month",
    features: ["Text Generation", "Image Creation", "Video Synthesis", "Audio Production", "Brand Consistency", "Style Transfer"],
    benefits: ["10x content production", "Consistent brand voice", "Multi-format from one prompt", "Reduce creative costs by 50%"],
    link: "/services/ai-multimodal-content-engine",
    contactInfo
  },
  {
    id: "ai-predictive-maintenance-iot",
    title: "AI Predictive Maintenance for IoT",
    description: "Monitor IoT sensor data with AI to predict equipment failures before they happen, schedule maintenance optimally, and reduce unplanned downtime by 90%.",
    category: "AI Services",
    subcategory: "Industrial AI",
    icon: "🔧",
    price: "$1,999/month",
    features: ["Sensor Data Analysis", "Failure Prediction", "Maintenance Scheduling", "Anomaly Detection", "Digital Twin", "ROI Tracking"],
    benefits: ["Reduce downtime by 90%", "Cut maintenance costs by 40%", "Extend equipment life", "Prevent catastrophic failures"],
    link: "/services/ai-predictive-maintenance-iot",
    contactInfo
  },
  {
    id: "ai-financial-risk-engine",
    title: "AI Financial Risk Assessment Engine",
    description: "Real-time financial risk assessment using Monte Carlo simulations, stress testing, VaR modeling, and AI-powered market sentiment analysis.",
    category: "AI Services",
    subcategory: "FinTech AI",
    icon: "📉",
    price: "$3,499/month",
    features: ["Monte Carlo Simulation", "Stress Testing", "VaR Modeling", "Sentiment Analysis", "Portfolio Risk", "Regulatory Reporting"],
    benefits: ["Predict market risks early", "Reduce portfolio losses by 30%", "Automate risk reporting", "Meet regulatory requirements"],
    link: "/services/ai-financial-risk-engine",
    contactInfo
  },
  {
    id: "ai-code-security-auditor",
    title: "AI Code Security Auditor & Remediation",
    description: "Automated code security auditing with AI-powered vulnerability detection, CWE/OWASP classification, automated fix suggestions, and CI/CD integration.",
    category: "AI Services",
    subcategory: "Security AI",
    icon: "🔒",
    price: "$799/month",
    features: ["Vulnerability Detection", "OWASP Classification", "Auto-Fix Suggestions", "CI/CD Integration", "Dependency Scanning", "Compliance Mapping"],
    benefits: ["Find vulnerabilities 10x faster", "Auto-remediate issues", "Shift-left security", "Reduce security debt by 60%"],
    link: "/services/ai-code-security-auditor",
    contactInfo
  },
  // IT Services (6 new)
  {
    id: "it-platform-engineering-idp",
    title: "Internal Developer Platform (IDP) Engineering",
    description: "Build custom internal developer platforms with self-service infrastructure, golden paths, service catalogs, and automated CI/CD pipelines for 10x developer productivity.",
    category: "IT Services",
    subcategory: "Platform Engineering",
    icon: "🛠️",
    price: "$4,999/project",
    features: ["Self-Service Infrastructure", "Golden Paths", "Service Catalog", "CI/CD Automation", "Developer Portal", "Cost Tracking"],
    benefits: ["10x developer productivity", "Reduce onboarding from weeks to hours", "Eliminate ticket-based ops", "Standardize deployments"],
    link: "/services/it-platform-engineering-idp",
    contactInfo
  },
  {
    id: "it-ai-infrastructure-gpu",
    title: "AI/ML GPU Infrastructure Platform",
    description: "Managed GPU infrastructure for AI/ML workloads with auto-scaling, cost optimization, model serving, and multi-cloud GPU orchestration across NVIDIA, AMD, and custom chips.",
    category: "IT Services",
    subcategory: "AI Infrastructure",
    icon: "🖥️",
    price: "$5,999/month",
    features: ["GPU Auto-Scaling", "Cost Optimization", "Model Serving", "Multi-Cloud GPUs", "Spot Instance Management", "Usage Analytics"],
    benefits: ["Reduce GPU costs by 50%", "Scale to 1000s of GPUs", "99.99% availability", "Simplify ML operations"],
    link: "/services/it-ai-infrastructure-gpu",
    contactInfo
  },
  {
    id: "it-zero-trust-sase",
    title: "Zero Trust SASE Platform",
    description: "Secure Access Service Edge combining SD-WAN, ZTNA, SWG, CASB, and FWaaS for comprehensive network security with identity-based access and continuous verification.",
    category: "IT Services",
    subcategory: "Network Security",
    icon: "🔐",
    price: "$2,499/month",
    features: ["SD-WAN", "ZTNA", "Secure Web Gateway", "CASB", "Firewall as Service", "Identity-Based Access"],
    benefits: ["Secure remote work", "Reduce attack surface by 80%", "Simplify network security", "Meet compliance requirements"],
    link: "/services/it-zero-trust-sase",
    contactInfo
  },
  {
    id: "it-observability-aiops",
    title: "AIOps Observability & Incident Intelligence",
    description: "AI-powered observability with automated root cause analysis, anomaly detection, incident correlation, and intelligent alerting across infrastructure, applications, and logs.",
    category: "IT Services",
    subcategory: "Observability",
    icon: "📡",
    price: "$1,999/month",
    features: ["Auto Root Cause Analysis", "Anomaly Detection", "Incident Correlation", "Smart Alerting", "Full-Stack Tracing", "Cost Analytics"],
    benefits: ["Reduce MTTR by 80%", "Eliminate alert fatigue", "Auto-correlate incidents", "Prevent outages proactively"],
    link: "/services/it-observability-aiops",
    contactInfo
  },
  {
    id: "it-data-mesh-platform",
    title: "Data Mesh Architecture & Platform",
    description: "Implement data mesh architecture with domain-oriented data products, self-serve infrastructure, federated governance, and computational policies for decentralized data management.",
    category: "IT Services",
    subcategory: "Data Architecture",
    icon: "🕸️",
    price: "$6,999/project",
    features: ["Domain Data Products", "Self-Serve Platform", "Federated Governance", "Data Contracts", "Quality Automation", "Lineage Tracking"],
    benefits: ["Eliminate data bottlenecks", "Scale data across domains", "Improve data quality by 60%", "Enable data democratization"],
    link: "/services/it-data-mesh-platform",
    contactInfo
  },
  {
    id: "it-cyber-resilience-program",
    title: "Cyber Resilience & Business Continuity Program",
    description: "Comprehensive cyber resilience program with threat modeling, incident simulation, recovery automation, and continuous resilience testing for mission-critical systems.",
    category: "IT Services",
    subcategory: "Cyber Resilience",
    icon: "🏰",
    price: "$7,999/project",
    features: ["Threat Modeling", "Incident Simulation", "Recovery Automation", "Resilience Testing", "Risk Quantification", "Board Reporting"],
    benefits: ["Survive cyber attacks", "Recover in minutes not days", "Quantify cyber risk in $", "Meet board expectations"],
    link: "/services/it-cyber-resilience-program",
    contactInfo
  },
  // Micro-SaaS (8 new)
  {
    id: "saas-ai-meeting-assistant",
    title: "AI Meeting Assistant & Action Tracker",
    description: "AI-powered meeting assistant that records, transcribes, summarizes meetings, extracts action items, tracks follow-ups, and integrates with calendars and project tools.",
    category: "Micro-SaaS",
    subcategory: "Productivity",
    icon: "📝",
    price: "$19/user/month",
    features: ["Auto Transcription", "AI Summaries", "Action Item Extraction", "Follow-Up Tracking", "Calendar Integration", "Search & Recall"],
    benefits: ["Never miss action items", "Save 5 hours/week in meetings", "Recall any meeting instantly", "Automate follow-ups"],
    link: "/services/saas-ai-meeting-assistant",
    contactInfo
  },
  {
    id: "saas-revenue-operations-platform",
    title: "Revenue Operations (RevOps) Platform",
    description: "Unified revenue operations platform aligning sales, marketing, and customer success with pipeline analytics, forecasting, territory management, and deal intelligence.",
    category: "Micro-SaaS",
    subcategory: "Revenue",
    icon: "💰",
    price: "$249/month",
    features: ["Pipeline Analytics", "Revenue Forecasting", "Territory Management", "Deal Intelligence", "Commission Tracking", "Revenue Attribution"],
    benefits: ["Align revenue teams", "Improve forecast accuracy to 95%", "Optimize territories", "Accelerate deal velocity"],
    link: "/services/saas-revenue-operations-platform",
    contactInfo
  },
  {
    id: "saas-product-analytics-ai",
    title: "AI Product Analytics & Insights Platform",
    description: "AI-powered product analytics with automated feature usage analysis, user segmentation, funnel optimization, retention cohorts, and predictive churn modeling.",
    category: "Micro-SaaS",
    subcategory: "Product",
    icon: "📊",
    price: "$199/month",
    features: ["Feature Usage Analysis", "User Segmentation", "Funnel Optimization", "Retention Cohorts", "Churn Prediction", "A/B Test Analysis"],
    benefits: ["Understand user behavior", "Improve retention by 30%", "Optimize feature adoption", "Data-driven product decisions"],
    link: "/services/saas-product-analytics-ai",
    contactInfo
  },
  {
    id: "saas-compliance-automation",
    title: "Compliance Automation Platform",
    description: "Automate SOC 2, ISO 27001, HIPAA, and GDPR compliance with continuous monitoring, evidence collection, policy management, and auditor-ready reporting.",
    category: "Micro-SaaS",
    subcategory: "Compliance",
    icon: "✅",
    price: "$399/month",
    features: ["Continuous Monitoring", "Evidence Collection", "Policy Management", "Risk Assessment", "Audit Preparation", "Framework Mapping"],
    benefits: ["Achieve SOC 2 in weeks", "Automate 90% of compliance work", "Continuous compliance", "Pass audits first time"],
    link: "/services/saas-compliance-automation",
    contactInfo
  },
  {
    id: "saas-customer-onboarding-ai",
    title: "AI Customer Onboarding Platform",
    description: "Automated customer onboarding with personalized playbooks, progress tracking, health scoring, milestone triggers, and time-to-value optimization.",
    category: "Micro-SaaS",
    subcategory: "Customer Success",
    icon: "🚀",
    price: "$149/month",
    features: ["Personalized Playbooks", "Progress Tracking", "Health Scoring", "Milestone Triggers", "Time-to-Value", "Self-Service Guides"],
    benefits: ["Reduce onboarding time by 50%", "Increase activation rates", "Prevent early churn", "Scale onboarding without hiring"],
    link: "/services/saas-customer-onboarding-ai",
    contactInfo
  },
  {
    id: "saas-developer-productivity-metrics",
    title: "Developer Productivity & DORA Metrics Platform",
    description: "Measure and improve engineering team productivity with DORA metrics, code review analytics, deployment frequency tracking, and team health dashboards.",
    category: "Micro-SaaS",
    subcategory: "Engineering",
    icon: "⚙️",
    price: "$29/user/month",
    features: ["DORA Metrics", "Code Review Analytics", "Deployment Frequency", "Lead Time Tracking", "Team Health", "Benchmark Data"],
    benefits: ["Improve deployment frequency 4x", "Reduce lead time by 60%", "Identify bottlenecks", "Data-driven engineering management"],
    link: "/services/saas-developer-productivity-metrics",
    contactInfo
  },
  {
    id: "saas-ai-legal-assistant",
    title: "AI Legal Assistant for Startups",
    description: "AI-powered legal assistant that drafts contracts, reviews NDAs, manages compliance, tracks deadlines, and provides legal guidance for startups at a fraction of traditional costs.",
    category: "Micro-SaaS",
    subcategory: "Legal Tech",
    icon: "⚖️",
    price: "$99/month",
    features: ["Contract Drafting", "NDA Review", "Compliance Tracking", "Deadline Management", "Legal Templates", "Risk Assessment"],
    benefits: ["Save $50K+/year on legal fees", "Draft contracts in minutes", "Never miss legal deadlines", "Startup-friendly pricing"],
    link: "/services/saas-ai-legal-assistant",
    contactInfo
  },
  {
    id: "saas-ai-social-proof-engine",
    title: "AI Social Proof & Testimonial Engine",
    description: "Automatically collect, curate, and display customer testimonials, reviews, and case studies with AI-powered sentiment analysis and dynamic website widgets.",
    category: "Micro-SaaS",
    subcategory: "Marketing",
    icon: "⭐",
    price: "$59/month",
    features: ["Auto-Collection", "Sentiment Analysis", "Dynamic Widgets", "Video Testimonials", "Review Aggregation", "A/B Testing"],
    benefits: ["Increase conversions by 25%", "Automate testimonial collection", "Display best reviews automatically", "Build trust at scale"],
    link: "/services/saas-ai-social-proof-engine",
    contactInfo
  }
];

services.push(...newServices);
fs.writeFileSync(jsonPath, JSON.stringify(services, null, 2));
console.log(`✅ Added ${newServices.length} new services. Total: ${services.length}`);

// Update servicesData.ts
const tsPath = path.join(__dirname, 'app/data/servicesData.ts');
let tsContent = fs.readFileSync(tsPath, 'utf8');

const tsEntries = newServices.map(s => {
  const featuresStr = s.features.map(f => `"${f}"`).join(', ');
  const benefitsStr = (s.benefits || []).map(b => `"${b}"`).join(', ');
  return `  {
    id: "${s.id}",
    title: "${s.title}",
    description: "${s.description}",
    category: "${s.category}",
    subcategory: "${s.subcategory}",
    icon: "${s.icon}",
    price: "${s.price}",
    features: [${featuresStr}],
    benefits: [${benefitsStr}],
    link: "${s.link}",
    contactInfo: {
      mobile: "${s.contactInfo.mobile}",
      email: "${s.contactInfo.email}",
      address: "${s.contactInfo.address}"
    }
  }`;
}).join(',\n');

const insertPoint = tsContent.lastIndexOf('];');
if (insertPoint !== -1) {
  const beforeInsert = tsContent.substring(0, insertPoint).trim();
  const needsComma = !beforeInsert.endsWith(',') && !beforeInsert.endsWith('[');
  const insertion = (needsComma ? ',\n' : '\n') + tsEntries + '\n';
  tsContent = tsContent.substring(0, insertPoint) + insertion + tsContent.substring(insertPoint);
}

const exportEntries = newServices.map(s => 
  `export const ${s.id.replace(/-/g, '_')} = allServices.find(s => s.id === "${s.id}");`
).join('\n');

tsContent += '\n\n// V311-V315 Service Exports\n' + exportEntries + '\n';
fs.writeFileSync(tsPath, tsContent);
console.log('✅ Updated servicesData.ts');

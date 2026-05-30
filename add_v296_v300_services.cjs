const fs = require('fs');
const path = require('path');

// Read existing services
const jsonPath = path.join(__dirname, 'app/data/servicesData.json');
const services = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const contactInfo = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008, Middletown DE 19709"
};

const newServices = [
  // V296-V300 Email Intelligence Services
  {
    id: "email-intent-classifier-pro",
    title: "AI Email Intent Classifier Pro",
    description: "Advanced intent detection beyond simple categorization. Identifies underlying motivations, predicts next steps, and suggests appropriate actions with 95% accuracy for perfect email routing.",
    category: "AI Services",
    subcategory: "Email Intelligence",
    icon: "🎯",
    price: "$299/month",
    features: ["10 Intent Categories", "Motivation Analysis", "Action Prediction", "95% Routing Accuracy", "Priority Calculation", "Response Strategy Generation"],
    benefits: ["Reduce response time by 60%", "Improve routing accuracy to 95%", "Auto-prioritize urgent emails", "Predict customer needs before they ask"],
    link: "/services/email-intent-classifier-pro",
    version: "V296",
    contactInfo
  },
  {
    id: "email-analytics-dashboard",
    title: "AI Email Analytics Dashboard",
    description: "Real-time email performance metrics and trends with response time tracking, engagement scoring, team analytics, and predictive insights for continuous email optimization.",
    category: "AI Services",
    subcategory: "Email Intelligence",
    icon: "📊",
    price: "$349/month",
    features: ["Response Time Tracking", "Engagement Scoring", "Team Analytics", "Trend Analysis", "Predictive Insights", "SLA Compliance Monitoring"],
    benefits: ["Improve response times by 40%", "Data-driven email strategy", "Identify team performance gaps", "Predict email volume trends"],
    link: "/services/email-analytics-dashboard",
    version: "V297",
    contactInfo
  },
  {
    id: "email-integration-orchestrator",
    title: "AI Email Integration Orchestrator",
    description: "Seamlessly connects email with 1000+ business tools. Automated workflow triggers based on email content with smart routing to CRM, project management, and support systems.",
    category: "AI Services",
    subcategory: "Email Intelligence",
    icon: "🔗",
    price: "$449/month",
    features: ["1000+ Integrations", "CRM Auto-Sync", "Project Management Triggers", "Support Ticket Creation", "Calendar Scheduling", "Automated Workflow Chains"],
    benefits: ["Eliminate manual data entry", "Auto-create tickets and leads", "Sync email with all tools", "Save 8+ minutes per email"],
    link: "/services/email-integration-orchestrator",
    version: "V298",
    contactInfo
  },
  {
    id: "email-ab-testing-engine",
    title: "AI Email A/B Testing Engine",
    description: "Automated A/B testing for subject lines, content, and send times with statistical significance analysis. Improve open rates by 40% and response rates by 60% through continuous optimization.",
    category: "AI Services",
    subcategory: "Email Intelligence",
    icon: "🧪",
    price: "$399/month",
    features: ["Auto Subject Line Testing", "Send Time Optimization", "Content Variants", "Statistical Significance", "Auto-Promote Winners", "Performance Projections"],
    benefits: ["Improve open rates by 40%", "Boost response rates by 60%", "Data-driven email optimization", "Automate winning strategies"],
    link: "/services/email-ab-testing-engine",
    version: "V299",
    contactInfo
  },
  {
    id: "email-compliance-guardian-global",
    title: "AI Global Compliance Guardian",
    description: "Real-time compliance checking for GDPR, CCPA, HIPAA, SOX, PCI-DSS, LGPD, and PIPEDA. Automatic PII/PHI detection, redaction, and audit trail generation for 100% compliance.",
    category: "AI Services",
    subcategory: "Email Intelligence",
    icon: "🛡️",
    price: "$599/month",
    features: ["7 Framework Support", "PII Auto-Detection", "PHI Protection", "Financial Data Guard", "Auto-Redaction", "7-Year Audit Trail"],
    benefits: ["100% regulatory compliance", "Prevent data breaches", "Avoid multi-million fines", "Automated audit readiness"],
    link: "/services/email-compliance-guardian-global",
    version: "V300",
    contactInfo
  },
  // AI Services
  {
    id: "ai-conversational-ai-platform",
    title: "AI Conversational AI Platform",
    description: "Build, deploy, and manage intelligent chatbots and virtual assistants with natural language understanding, multi-turn conversations, and seamless handoff to human agents.",
    category: "AI Services",
    subcategory: "Conversational AI",
    icon: "💬",
    price: "$799/month",
    features: ["Multi-Turn Dialog", "Intent Recognition", "Entity Extraction", "Human Handoff", "Multi-Language", "Analytics Dashboard"],
    benefits: ["24/7 customer support", "Reduce support costs by 50%", "Handle 80% of queries automatically", "Improve customer satisfaction"],
    link: "/services/ai-conversational-ai-platform",
    contactInfo
  },
  {
    id: "ai-data-labeling-platform",
    title: "AI Data Labeling & Annotation Platform",
    description: "Enterprise-grade data labeling platform for training ML models with quality assurance, active learning, and support for text, image, video, and audio annotation.",
    category: "AI Services",
    subcategory: "MLOps",
    icon: "🏷️",
    price: "$699/month",
    features: ["Multi-Modal Labeling", "Quality Assurance", "Active Learning", "Team Collaboration", "API Integration", "Export to ML Frameworks"],
    benefits: ["10x faster labeling", "95%+ label accuracy", "Reduce labeling costs by 60%", "Accelerate model training"],
    link: "/services/ai-data-labeling-platform",
    contactInfo
  },
  {
    id: "ai-model-monitoring",
    title: "AI Model Monitoring & Observability",
    description: "Real-time monitoring of ML models in production with drift detection, performance tracking, explainability, and automated alerting for model degradation.",
    category: "AI Services",
    subcategory: "MLOps",
    icon: "📡",
    price: "$899/month",
    features: ["Drift Detection", "Performance Tracking", "Explainability", "Auto-Alerting", "A/B Testing", "Model Registry"],
    benefits: ["Prevent model degradation", "Ensure prediction accuracy", "Comply with AI regulations", "Reduce ML incidents by 80%"],
    link: "/services/ai-model-monitoring",
    contactInfo
  },
  {
    id: "ai-hyperparameter-tuning",
    title: "AI Hyperparameter Optimization Platform",
    description: "Automated hyperparameter tuning using Bayesian optimization, genetic algorithms, and multi-objective optimization to find the best model configurations.",
    category: "AI Services",
    subcategory: "MLOps",
    icon: "⚙️",
    price: "$599/month",
    features: ["Bayesian Optimization", "Genetic Algorithms", "Multi-Objective", "Distributed Search", "Early Stopping", "Result Visualization"],
    benefits: ["Find optimal configs 10x faster", "Improve model accuracy by 15%", "Reduce compute costs", "Automate model tuning"],
    link: "/services/ai-hyperparameter-tuning",
    contactInfo
  },
  {
    id: "ai-fraud-detection-engine",
    title: "AI Fraud Detection Engine",
    description: "Real-time fraud detection using graph neural networks, anomaly detection, and behavioral biometrics. Detect fraud patterns with 99.5% accuracy and <100ms latency.",
    category: "AI Services",
    subcategory: "Security AI",
    icon: "🔍",
    price: "$1,299/month",
    features: ["Graph Neural Networks", "Anomaly Detection", "Behavioral Biometrics", "Real-Time Scoring", "Case Management", "Regulatory Reporting"],
    benefits: ["99.5% detection accuracy", "<100ms response time", "Reduce false positives by 70%", "Prevent millions in fraud losses"],
    link: "/services/ai-fraud-detection-engine",
    contactInfo
  },
  // IT Services
  {
    id: "it-sre-platform",
    title: "Site Reliability Engineering Platform",
    description: "Comprehensive SRE platform with SLI/SLO management, error budgets, incident response automation, chaos engineering, and reliability scoring for mission-critical systems.",
    category: "IT Services",
    subcategory: "DevOps",
    icon: "🏗️",
    price: "$1,499/month",
    features: ["SLI/SLO Management", "Error Budgets", "Incident Automation", "Chaos Engineering", "Reliability Scoring", "Post-Mortem Tools"],
    benefits: ["99.99% uptime guarantee", "Reduce MTTR by 70%", "Automate incident response", "Improve system reliability"],
    link: "/services/it-sre-platform",
    contactInfo
  },
  {
    id: "it-edge-computing",
    title: "Edge Computing & IoT Platform",
    description: "Deploy and manage edge computing workloads with IoT device management, real-time processing, low-latency analytics, and secure over-the-air updates.",
    category: "IT Services",
    subcategory: "Infrastructure",
    icon: "📡",
    price: "$1,199/month",
    features: ["Edge Deployment", "IoT Device Management", "Real-Time Processing", "OTA Updates", "Edge AI", "Secure Connectivity"],
    benefits: ["<10ms latency processing", "Manage 10,000+ devices", "Reduce bandwidth costs by 60%", "Enable real-time IoT analytics"],
    link: "/services/it-edge-computing",
    contactInfo
  },
  {
    id: "it-database-migration",
    title: "Enterprise Database Migration Service",
    description: "Zero-downtime database migration from legacy systems to modern cloud databases. Supports Oracle, SQL Server, DB2 to PostgreSQL, MySQL, and cloud-native databases.",
    category: "IT Services",
    subcategory: "Data Services",
    icon: "🗄️",
    price: "$4,999/project",
    features: ["Zero-Downtime Migration", "Schema Conversion", "Data Validation", "Performance Tuning", "Rollback Planning", "Post-Migration Support"],
    benefits: ["Zero business disruption", "Reduce database costs by 60%", "Modernize legacy systems", "Improve query performance 5x"],
    link: "/services/it-database-migration",
    contactInfo
  },
  {
    id: "it-api-gateway-pro",
    title: "Enterprise API Gateway Pro",
    description: "High-performance API gateway with rate limiting, authentication, request transformation, caching, and comprehensive analytics for managing thousands of APIs.",
    category: "IT Services",
    subcategory: "Infrastructure",
    icon: "🚪",
    price: "$899/month",
    features: ["Rate Limiting", "OAuth2/JWT Auth", "Request Transform", "Response Caching", "API Analytics", "Developer Portal"],
    benefits: ["Handle 1M+ requests/sec", "Reduce API latency by 40%", "Centralized API management", "Monetize your APIs"],
    link: "/services/it-api-gateway-pro",
    contactInfo
  },
  {
    id: "it-disaster-recovery-pro",
    title: "Disaster Recovery as a Service Pro",
    description: "Enterprise disaster recovery with RPO <15 minutes, RTO <1 hour, automated failover, continuous replication, and compliance-ready documentation.",
    category: "IT Services",
    subcategory: "Infrastructure",
    icon: "🔄",
    price: "$2,499/month",
    features: ["RPO <15 Minutes", "RTO <1 Hour", "Auto Failover", "Continuous Replication", "DR Testing", "Compliance Docs"],
    benefits: ["Minimize data loss to <15min", "Recover in under 1 hour", "Automated DR testing", "Meet compliance requirements"],
    link: "/services/it-disaster-recovery-pro",
    contactInfo
  },
  // Micro-SaaS
  {
    id: "saas-team-okr-platform",
    title: "Team OKR & Goal Tracking Platform",
    description: "Set, track, and achieve team goals with OKR management, progress visualization, alignment mapping, and AI-powered goal recommendations.",
    category: "Micro-SaaS",
    subcategory: "Productivity",
    icon: "🎯",
    price: "$15/user/month",
    features: ["OKR Management", "Progress Tracking", "Alignment Maps", "AI Recommendations", "Team Dashboards", "Integration Hub"],
    benefits: ["Improve goal alignment by 80%", "Increase team productivity by 35%", "Visual progress tracking", "Data-driven goal setting"],
    link: "/services/saas-team-okr-platform",
    contactInfo
  },
  {
    id: "saas-customer-feedback-hub",
    title: "Customer Feedback & NPS Platform",
    description: "Collect, analyze, and act on customer feedback with NPS surveys, sentiment analysis, feature request tracking, and automated follow-up workflows.",
    category: "Micro-SaaS",
    subcategory: "Customer Success",
    icon: "⭐",
    price: "$49/month",
    features: ["NPS Surveys", "Sentiment Analysis", "Feature Requests", "Auto Follow-Up", "Feedback Widgets", "Trend Analysis"],
    benefits: ["Increase NPS by 30+ points", "Reduce churn by 25%", "Prioritize product roadmap", "Close the feedback loop"],
    link: "/services/saas-customer-feedback-hub",
    contactInfo
  },
  {
    id: "saas-appointment-scheduler",
    title: "Smart Appointment Scheduling Platform",
    description: "AI-powered scheduling with timezone detection, buffer times, recurring meetings, team calendars, and automatic reminders to eliminate scheduling conflicts.",
    category: "Micro-SaaS",
    subcategory: "Productivity",
    icon: "📅",
    price: "$19/user/month",
    features: ["AI Scheduling", "Timezone Detection", "Team Calendars", "Auto Reminders", "Custom Buffers", "Video Integration"],
    benefits: ["Eliminate scheduling conflicts", "Save 5+ hours/week", "Reduce no-shows by 60%", "Professional booking experience"],
    link: "/services/saas-appointment-scheduler",
    contactInfo
  },
  {
    id: "saas-expense-management",
    title: "AI Expense Management Platform",
    description: "Automated expense tracking with receipt OCR, policy enforcement, approval workflows, corporate card integration, and real-time budget monitoring.",
    category: "Micro-SaaS",
    subcategory: "Finance",
    icon: "💰",
    price: "$8/user/month",
    features: ["Receipt OCR", "Policy Enforcement", "Approval Workflows", "Corporate Cards", "Budget Monitoring", "Tax Compliance"],
    benefits: ["Reduce expense processing by 80%", "Enforce spending policies", "Real-time budget visibility", "Automate reimbursements"],
    link: "/services/saas-expense-management",
    contactInfo
  },
  {
    id: "saas-knowledge-base-builder",
    title: "AI Knowledge Base & Wiki Platform",
    description: "Build and maintain company knowledge bases with AI-powered search, auto-categorization, version control, and collaborative editing for institutional knowledge.",
    category: "Micro-SaaS",
    subcategory: "Knowledge Management",
    icon: "📚",
    price: "$12/user/month",
    features: ["AI Search", "Auto-Categorization", "Version Control", "Collaborative Editing", "Access Control", "Analytics"],
    benefits: ["Reduce onboarding time by 50%", "Preserve institutional knowledge", "Find information 10x faster", "Eliminate knowledge silos"],
    link: "/services/saas-knowledge-base-builder",
    contactInfo
  },
  // Security Services
  {
    id: "security-soc-as-a-service",
    title: "SOC as a Service (24/7)",
    description: "24/7 Security Operations Center with threat monitoring, incident response, SIEM management, and compliance reporting by certified security analysts.",
    category: "Security Services",
    subcategory: "Managed Security",
    icon: "🏢",
    price: "$4,999/month",
    features: ["24/7 Monitoring", "Threat Detection", "Incident Response", "SIEM Management", "Compliance Reports", "Dedicated Analysts"],
    benefits: ["24/7 expert monitoring", "Reduce breach risk by 90%", "Meet compliance requirements", "Rapid incident response"],
    link: "/services/security-soc-as-a-service",
    contactInfo
  },
  {
    id: "security-bug-bounty-program",
    title: "Managed Bug Bounty Program",
    description: "Launch and manage a bug bounty program with vetted researchers, triage services, payment processing, and vulnerability remediation guidance.",
    category: "Security Services",
    subcategory: "Application Security",
    icon: "🐛",
    price: "$2,999/month + rewards",
    features: ["Vetted Researchers", "Triage Services", "Payment Processing", "Remediation Guide", "Compliance Mapping", "Public/Private Programs"],
    benefits: ["Find vulnerabilities before attackers", "Access 10,000+ researchers", "Cost-effective security testing", "Continuous security assessment"],
    link: "/services/security-bug-bounty-program",
    contactInfo
  },
  // Cloud Services
  {
    id: "cloud-finops-platform",
    title: "Cloud FinOps & Cost Optimization Platform",
    description: "Optimize cloud spending across AWS, Azure, and GCP with rightsizing recommendations, reserved instance planning, budget alerts, and showback/chargeback.",
    category: "Cloud Services",
    subcategory: "Cloud Management",
    icon: "💸",
    price: "$999/month",
    features: ["Multi-Cloud Support", "Rightsizing", "RI Planning", "Budget Alerts", "Showback/Chargeback", "Anomaly Detection"],
    benefits: ["Reduce cloud costs by 30-40%", "Eliminate waste", "Predict cloud spending", "Optimize resource allocation"],
    link: "/services/cloud-finops-platform",
    contactInfo
  },
  {
    id: "cloud-serverless-platform",
    title: "Serverless Application Platform",
    description: "Build and deploy serverless applications with auto-scaling, event-driven architecture, cold start optimization, and comprehensive observability.",
    category: "Cloud Services",
    subcategory: "Serverless",
    icon: "⚡",
    price: "$699/month",
    features: ["Auto-Scaling", "Event-Driven", "Cold Start Optimization", "Observability", "Multi-Cloud", "CI/CD Integration"],
    benefits: ["Pay only for actual usage", "Auto-scale to millions", "Reduce infrastructure costs by 70%", "Deploy in minutes"],
    link: "/services/cloud-serverless-platform",
    contactInfo
  },
  {
    id: "cloud-multi-cloud-networking",
    title: "Multi-Cloud Networking Platform",
    description: "Connect and secure workloads across AWS, Azure, GCP, and on-premises with SD-WAN, zero-trust networking, and centralized policy management.",
    category: "Cloud Services",
    subcategory: "Networking",
    icon: "🌐",
    price: "$1,499/month",
    features: ["SD-WAN", "Zero Trust", "Cross-Cloud VPN", "Policy Management", "Traffic Optimization", "Network Analytics"],
    benefits: ["Unified multi-cloud networking", "Reduce latency by 50%", "Centralized security policies", "Simplify cloud connectivity"],
    link: "/services/cloud-multi-cloud-networking",
    contactInfo
  },
  // Data Services
  {
    id: "data-real-time-analytics",
    title: "Real-Time Analytics Platform",
    description: "Stream processing and real-time analytics with sub-second latency, complex event processing, real-time dashboards, and automated alerting on live data.",
    category: "Data Services",
    subcategory: "Analytics",
    icon: "⏱️",
    price: "$1,299/month",
    features: ["Stream Processing", "Sub-Second Latency", "Complex Events", "Real-Time Dashboards", "Auto-Alerting", "Data Enrichment"],
    benefits: ["Make decisions in real-time", "Detect anomalies instantly", "Process millions of events/sec", "Enable real-time personalization"],
    link: "/services/data-real-time-analytics",
    contactInfo
  }
];

// Add new services
services.push(...newServices);

// Write updated JSON
fs.writeFileSync(jsonPath, JSON.stringify(services, null, 2));
console.log(`✅ Added ${newServices.length} new services. Total: ${services.length}`);

// Now update servicesData.ts
const tsPath = path.join(__dirname, 'app/data/servicesData.ts');
let tsContent = fs.readFileSync(tsPath, 'utf8');

// Generate new service entries for TS
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

// Find the last service entry in allServices array and append before the closing bracket
const allServicesMatch = tsContent.match(/export const allServices[\s\S]*?=\s*\[([\s\S]*?)\];/);
if (allServicesMatch) {
  // Find the last } before the closing ];
  const insertPoint = tsContent.lastIndexOf('];');
  if (insertPoint !== -1) {
    // Check if there's a comma needed
    const beforeInsert = tsContent.substring(0, insertPoint).trim();
    const needsComma = !beforeInsert.endsWith(',') && !beforeInsert.endsWith('[');
    const insertion = (needsComma ? ',\n' : '\n') + tsEntries + '\n';
    tsContent = tsContent.substring(0, insertPoint) + insertion + tsContent.substring(insertPoint);
    fs.writeFileSync(tsPath, tsContent);
    console.log('✅ Updated servicesData.ts');
  }
} else {
  console.log('⚠️ Could not find allServices array in TS file');
}

// Also add named exports
const exportEntries = newServices.map(s => 
  `export const ${s.id.replace(/-/g, '_')} = allServices.find(s => s.id === "${s.id}");`
).join('\n');

// Append exports at the end
tsContent = fs.readFileSync(tsPath, 'utf8');
tsContent += '\n\n// V296-V300 Service Exports\n' + exportEntries + '\n';
fs.writeFileSync(tsPath, tsContent);
console.log('✅ Added named exports to servicesData.ts');

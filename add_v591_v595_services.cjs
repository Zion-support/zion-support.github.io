const fs = require('fs');
const path = require('path');

const servicesPath = path.join(__dirname, 'app/data/servicesData.json');
const services = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));

const newServices = [
  // AI & Machine Learning (5)
  {
    id: "ai-predictive-customer-lifetime-value",
    title: "AI Predictive Customer Lifetime Value",
    description: "Predict customer lifetime value using machine learning models with 92% accuracy. Identify high-value customers and optimize retention strategies.",
    icon: "💎",
    features: ["ML-based CLV prediction", "Customer segmentation", "Churn risk scoring", "Revenue forecasting", "Retention recommendations"],
    pricing: { basic: "899", pro: "2299", enterprise: "5999" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown, DE 19709" },
    href: "/services/ai-predictive-customer-lifetime-value",
    category: "ai",
    popular: true,
    industry: "Analytics"
  },
  {
    id: "ai-natural-language-generation",
    title: "AI Natural Language Generation",
    description: "Generate human-like text content for marketing, reports, and communications using advanced NLG models.",
    icon: "✍️",
    features: ["Content generation", "Multi-language support", "Style customization", "SEO optimization", "Brand voice matching"],
    pricing: { basic: "399", pro: "999", enterprise: "2499" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown, DE 19709" },
    href: "/services/ai-natural-language-generation",
    category: "ai",
    popular: false,
    industry: "Technology"
  },
  {
    id: "ai-anomaly-detection",
    title: "AI Anomaly Detection System",
    description: "Detect anomalies in real-time across business metrics, transactions, and system logs with 95% accuracy.",
    icon: "🔍",
    features: ["Real-time detection", "Multi-source monitoring", "Auto-learning", "Alert customization", "Root cause analysis"],
    pricing: { basic: "699", pro: "1799", enterprise: "4499" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown, DE 19709" },
    href: "/services/ai-anomaly-detection",
    category: "ai",
    popular: true,
    industry: "Technology"
  },
  {
    id: "ai-recommendation-engine",
    title: "AI Recommendation Engine",
    description: "Personalized product and content recommendations using collaborative filtering and deep learning.",
    icon: "🎯",
    features: ["Personalized recommendations", "Real-time updates", "A/B testing", "Conversion optimization", "Multi-channel support"],
    pricing: { basic: "599", pro: "1499", enterprise: "3999" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown, DE 19709" },
    href: "/services/ai-recommendation-engine",
    category: "ai",
    popular: false,
    industry: "E-commerce"
  },
  {
    id: "ai-conversational-analytics",
    title: "AI Conversational Analytics",
    description: "Query your data using natural language. Get instant insights without writing SQL or complex queries.",
    icon: "💬",
    features: ["Natural language queries", "Instant insights", "Data visualization", "Multi-source integration", "Custom dashboards"],
    pricing: { basic: "499", pro: "1299", enterprise: "3299" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown, DE 19709" },
    href: "/services/ai-conversational-analytics",
    category: "ai",
    popular: false,
    industry: "Analytics"
  },

  // Security & Compliance (5)
  {
    id: "security-zero-trust-architecture",
    title: "Zero Trust Security Architecture",
    description: "Implement zero trust security model with continuous verification, micro-segmentation, and least-privilege access.",
    icon: "🛡️",
    features: ["Continuous verification", "Micro-segmentation", "Least-privilege access", "Identity-based security", "Real-time monitoring"],
    pricing: { basic: "1999", pro: "4999", enterprise: "12999" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown, DE 19709" },
    href: "/services/security-zero-trust-architecture",
    category: "security",
    popular: true,
    industry: "Security"
  },
  {
    id: "security-blockchain-audit-trail",
    title: "Blockchain Audit Trail System",
    description: "Immutable audit trails using blockchain technology. Tamper-proof logging for compliance and security.",
    icon: "⛓️",
    features: ["Immutable records", "Blockchain verification", "Compliance reporting", "Real-time auditing", "Multi-chain support"],
    pricing: { basic: "799", pro: "1999", enterprise: "4999" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown, DE 19709" },
    href: "/services/security-blockchain-audit-trail",
    category: "security",
    popular: false,
    industry: "Security"
  },
  {
    id: "security-quantum-encryption",
    title: "Quantum-Resistant Encryption",
    description: "Future-proof encryption using quantum-resistant algorithms. Protect data against quantum computing threats.",
    icon: "🔐",
    features: ["Quantum-resistant algorithms", "Post-quantum cryptography", "Key management", "Performance optimization", "Compliance ready"],
    pricing: { basic: "1299", pro: "3299", enterprise: "8999" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown, DE 19709" },
    href: "/services/security-quantum-encryption",
    category: "security",
    popular: false,
    industry: "Security"
  },
  {
    id: "security-privacy-data-governance",
    title: "Privacy & Data Governance Platform",
    description: "Comprehensive data governance with automated privacy controls, consent management, and regulatory compliance.",
    icon: "🔒",
    features: ["Automated privacy controls", "Consent management", "Data mapping", "Regulatory compliance", "Risk assessment"],
    pricing: { basic: "999", pro: "2499", enterprise: "6999" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown, DE 19709" },
    href: "/services/security-privacy-data-governance",
    category: "security",
    popular: true,
    industry: "Security"
  },
  {
    id: "security-threat-intelligence",
    title: "Threat Intelligence Platform",
    description: "Real-time threat intelligence with AI-powered analysis, automated response, and threat hunting capabilities.",
    icon: "🎯",
    features: ["Real-time intelligence", "AI-powered analysis", "Automated response", "Threat hunting", "IOC sharing"],
    pricing: { basic: "1499", pro: "3999", enterprise: "9999" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown, DE 19709" },
    href: "/services/security-threat-intelligence",
    category: "security",
    popular: false,
    industry: "Security"
  },

  // Cloud & DevOps (5)
  {
    id: "cloud-serverless-orchestration",
    title: "Serverless Orchestration Platform",
    description: "Orchestrate complex serverless workflows across multiple cloud providers with automatic scaling and cost optimization.",
    icon: "☁️",
    features: ["Multi-cloud orchestration", "Auto-scaling", "Cost optimization", "Workflow visualization", "Error handling"],
    pricing: { basic: "599", pro: "1499", enterprise: "3999" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown, DE 19709" },
    href: "/services/cloud-serverless-orchestration",
    category: "cloud",
    popular: true,
    industry: "Technology"
  },
  {
    id: "cloud-edge-computing",
    title: "Edge Computing Platform",
    description: "Deploy and manage applications at the edge with low-latency processing and offline capabilities.",
    icon: "🌐",
    features: ["Edge deployment", "Low-latency processing", "Offline mode", "Auto-sync", "Global distribution"],
    pricing: { basic: "799", pro: "1999", enterprise: "4999" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown, DE 19709" },
    href: "/services/cloud-edge-computing",
    category: "cloud",
    popular: false,
    industry: "Technology"
  },
  {
    id: "cloud-cost-optimization",
    title: "Cloud Cost Optimization Engine",
    description: "Automatically optimize cloud spending with AI-powered recommendations and automated resource management.",
    icon: "💰",
    features: ["AI cost analysis", "Auto-scaling", "Reserved instance optimization", "Waste detection", "Budget alerts"],
    pricing: { basic: "499", pro: "1299", enterprise: "3299" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown, DE 19709" },
    href: "/services/cloud-cost-optimization",
    category: "cloud",
    popular: true,
    industry: "Technology"
  },
  {
    id: "cloud-gitops-automation",
    title: "GitOps Automation Platform",
    description: "Implement GitOps workflows with automated deployments, infrastructure as code, and continuous reconciliation.",
    icon: "🔄",
    features: ["Git-based workflows", "Auto-deployment", "Infrastructure as code", "Drift detection", "Rollback automation"],
    pricing: { basic: "699", pro: "1799", enterprise: "4499" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown, DE 19709" },
    href: "/services/cloud-gitops-automation",
    category: "cloud",
    popular: false,
    industry: "Technology"
  },
  {
    id: "cloud-chaos-engineering",
    title: "Chaos Engineering Platform",
    description: "Build resilient systems with controlled chaos experiments. Test failure scenarios and improve system reliability.",
    icon: "💥",
    features: ["Controlled experiments", "Failure injection", "Automated testing", "Resilience scoring", "Production-safe"],
    pricing: { basic: "899", pro: "2299", enterprise: "5999" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown, DE 19709" },
    href: "/services/cloud-chaos-engineering",
    category: "cloud",
    popular: false,
    industry: "Technology"
  },

  // Productivity & Automation (5)
  {
    id: "productivity-intelligent-scheduling",
    title: "Intelligent Meeting Scheduling",
    description: "AI-powered meeting scheduling that considers preferences, time zones, and optimal meeting times.",
    icon: "📅",
    features: ["AI scheduling", "Time zone optimization", "Preference learning", "Conflict resolution", "Auto-rescheduling"],
    pricing: { basic: "199", pro: "499", enterprise: "1299" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown, DE 19709" },
    href: "/services/productivity-intelligent-scheduling",
    category: "productivity",
    popular: true,
    industry: "Business"
  },
  {
    id: "productivity-knowledge-management",
    title: "Enterprise Knowledge Management",
    description: "Centralized knowledge base with AI-powered search, auto-tagging, and collaborative editing.",
    icon: "📚",
    features: ["AI-powered search", "Auto-tagging", "Collaborative editing", "Version control", "Access management"],
    pricing: { basic: "399", pro: "999", enterprise: "2499" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown, DE 19709" },
    href: "/services/productivity-knowledge-management",
    category: "productivity",
    popular: false,
    industry: "Business"
  },
  {
    id: "productivity-process-mining",
    title: "Process Mining & Optimization",
    description: "Discover, monitor, and optimize business processes using event logs and AI analysis.",
    icon: "⚙️",
    features: ["Process discovery", "Performance analysis", "Bottleneck detection", "Optimization suggestions", "Compliance monitoring"],
    pricing: { basic: "799", pro: "1999", enterprise: "4999" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown, DE 19709" },
    href: "/services/productivity-process-mining",
    category: "productivity",
    popular: false,
    industry: "Business"
  },
  {
    id: "productivity-smart-document-processing",
    title: "Smart Document Processing",
    description: "Automated document processing with OCR, data extraction, and intelligent routing.",
    icon: "📄",
    features: ["OCR processing", "Data extraction", "Intelligent routing", "Validation rules", "Integration APIs"],
    pricing: { basic: "499", pro: "1299", enterprise: "3299" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown, DE 19709" },
    href: "/services/productivity-smart-document-processing",
    category: "productivity",
    popular: true,
    industry: "Business"
  },
  {
    id: "productivity-team-collaboration",
    title: "Team Collaboration Hub",
    description: "Unified collaboration platform with real-time editing, video conferencing, and project management.",
    icon: "👥",
    features: ["Real-time editing", "Video conferencing", "Project management", "File sharing", "Integration ecosystem"],
    pricing: { basic: "299", pro: "799", enterprise: "1999" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown, DE 19709" },
    href: "/services/productivity-team-collaboration",
    category: "productivity",
    popular: false,
    industry: "Business"
  },

  // Marketing & Sales (5)
  {
    id: "marketing-account-based-marketing",
    title: "Account-Based Marketing Platform",
    description: "Target high-value accounts with personalized campaigns, multi-channel orchestration, and ROI tracking.",
    icon: "🎯",
    features: ["Account targeting", "Multi-channel orchestration", "Personalization", "ROI tracking", "Sales alignment"],
    pricing: { basic: "899", pro: "2299", enterprise: "5999" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown, DE 19709" },
    href: "/services/marketing-account-based-marketing",
    category: "marketing",
    popular: true,
    industry: "Marketing"
  },
  {
    id: "marketing-conversational-marketing",
    title: "Conversational Marketing Platform",
    description: "Engage prospects with AI chatbots, live chat, and personalized conversations across channels.",
    icon: "💬",
    features: ["AI chatbots", "Live chat", "Multi-channel", "Lead qualification", "Conversation analytics"],
    pricing: { basic: "399", pro: "999", enterprise: "2499" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown, DE 19709" },
    href: "/services/marketing-conversational-marketing",
    category: "marketing",
    popular: false,
    industry: "Marketing"
  },
  {
    id: "marketing-influencer-platform",
    title: "Influencer Marketing Platform",
    description: "Discover, manage, and measure influencer campaigns with AI-powered matching and performance tracking.",
    icon: "⭐",
    features: ["Influencer discovery", "Campaign management", "Performance tracking", "ROI measurement", "Content approval"],
    pricing: { basic: "599", pro: "1499", enterprise: "3999" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown, DE 19709" },
    href: "/services/marketing-influencer-platform",
    category: "marketing",
    popular: false,
    industry: "Marketing"
  },
  {
    id: "sales-revenue-intelligence",
    title: "Revenue Intelligence Platform",
    description: "AI-powered revenue forecasting, deal insights, and sales performance optimization.",
    icon: "📈",
    features: ["Revenue forecasting", "Deal insights", "Performance analytics", "Pipeline management", "AI recommendations"],
    pricing: { basic: "999", pro: "2499", enterprise: "6999" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown, DE 19709" },
    href: "/services/sales-revenue-intelligence",
    category: "sales",
    popular: true,
    industry: "Sales"
  },
  {
    id: "sales-conversation-intelligence",
    title: "Sales Conversation Intelligence",
    description: "Analyze sales calls and meetings with AI. Get insights on talk patterns, objections, and winning strategies.",
    icon: "🎙️",
    features: ["Call analysis", "Talk pattern insights", "Objection handling", "Winning strategies", "Coaching recommendations"],
    pricing: { basic: "699", pro: "1799", enterprise: "4499" },
    contactInfo: { mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com", address: "364 E Main St STE 1008, Middletown, DE 19709" },
    href: "/services/sales-conversation-intelligence",
    category: "sales",
    popular: false,
    industry: "Sales"
  }
];

services.push(...newServices);
fs.writeFileSync(servicesPath, JSON.stringify(services, null, 2));

console.log(`✅ Added ${newServices.length} new services. Total services: ${services.length}`);

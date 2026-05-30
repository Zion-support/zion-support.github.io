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
  // V326-V330 Email Intelligence (5)
  {
    id: "email-context-memory-engine",
    title: "AI Email Context Memory Engine",
    description: "Remembers conversation context across weeks/months, builds relationship profiles, tracks commitments and follow-ups, and provides contextual suggestions based on historical interactions.",
    category: "AI Services",
    subcategory: "Email Intelligence",
    icon: "🧬",
    price: "$599/month",
    features: ["Long-term Memory", "Relationship Profiles", "Commitment Tracking", "Follow-up Automation", "Context Awareness", "Historical Insights"],
    benefits: ["Never forget context", "Build stronger relationships", "Track all commitments", "Intelligent follow-ups"],
    link: "/services/email-context-memory-engine",
    version: "V326",
    contactInfo
  },
  {
    id: "email-goal-alignment-tracker",
    title: "AI Email Goal Alignment Tracker",
    description: "Aligns every email to business objectives (OKRs/KPIs), tracks time spent on strategic vs tactical communications, and suggests prioritization based on goal impact.",
    category: "AI Services",
    subcategory: "Email Intelligence",
    icon: "🎯",
    price: "$549/month",
    features: ["OKR Mapping", "KPI Tracking", "Strategic vs Tactical", "Goal Impact Scoring", "Prioritization AI", "Time Allocation"],
    benefits: ["Align emails to goals", "Focus on strategic work", "Track goal progress", "Optimize time investment"],
    link: "/services/email-goal-alignment-tracker",
    version: "V327",
    contactInfo
  },
  {
    id: "email-conversation-summarizer-pro",
    title: "AI Email Conversation Summarizer Pro",
    description: "Generates executive summaries of long email threads with decision points, action items, key participants, and timeline visualization for quick context switching.",
    category: "AI Services",
    subcategory: "Email Intelligence",
    icon: "🔄",
    price: "$499/month",
    features: ["Executive Summaries", "Decision Extraction", "Action Item Tracking", "Participant Analysis", "Timeline View", "Thread Health"],
    benefits: ["Save hours reading threads", "Never miss decisions", "Track all actions", "Quick context switching"],
    link: "/services/email-conversation-summarizer-pro",
    version: "V328",
    contactInfo
  },
  {
    id: "email-productivity-optimizer",
    title: "AI Email Productivity Optimizer",
    description: "Analyzes email habits, identifies time-wasters, suggests batching strategies, focus mode scheduling, and provides personalized productivity recommendations with measurable improvements.",
    category: "AI Services",
    subcategory: "Email Intelligence",
    icon: "⚡",
    price: "$449/month",
    features: ["Habit Analysis", "Time-Waster Detection", "Batching Strategies", "Focus Mode", "Productivity Scoring", "Measurable Results"],
    benefits: ["Reclaim 2+ hours daily", "Eliminate email overload", "Optimize processing time", "Track productivity gains"],
    link: "/services/email-productivity-optimizer",
    version: "V329",
    contactInfo
  },
  {
    id: "email-cultural-intelligence-engine",
    title: "AI Email Cultural Intelligence Engine",
    description: "Detects cultural context in communications, suggests culturally appropriate language, adapts formality levels, and prevents cross-cultural misunderstandings for global teams.",
    category: "AI Services",
    subcategory: "Email Intelligence",
    icon: "🌍",
    price: "$649/month",
    features: ["Cultural Detection", "Language Adaptation", "Formality Adjustment", "Misunderstanding Prevention", "Global Team Support", "Cultural Profiles"],
    benefits: ["Prevent cultural faux pas", "Improve global communication", "Adapt to any culture", "Build international relationships"],
    link: "/services/email-cultural-intelligence-engine",
    version: "V330",
    contactInfo
  },
  // AI Services (7 new)
  {
    id: "ai-real-time-translation-platform",
    title: "AI Real-Time Translation & Localization Platform",
    description: "Real-time translation across 100+ languages with cultural context, industry-specific terminology, and localization for global business communications.",
    category: "AI Services",
    subcategory: "Language AI",
    icon: "🌐",
    price: "$1,299/month",
    features: ["100+ Languages", "Real-Time Translation", "Cultural Context", "Industry Terminology", "Localization", "Quality Assurance"],
    benefits: ["Break language barriers", "Maintain cultural nuance", "Industry-accurate translations", "Global communication"],
    link: "/services/ai-real-time-translation-platform",
    contactInfo
  },
  {
    id: "ai-predictive-customer-service",
    title: "AI Predictive Customer Service Platform",
    description: "Predict customer issues before they occur, proactively resolve problems, and deliver personalized support with AI-powered anticipation and prevention.",
    category: "AI Services",
    subcategory: "Customer AI",
    icon: "🔮",
    price: "$1,999/month",
    features: ["Issue Prediction", "Proactive Resolution", "Personalized Support", "Prevention AI", "Customer Insights", "Satisfaction Scoring"],
    benefits: ["Prevent issues before they occur", "Reduce support tickets by 60%", "Improve satisfaction by 40%", "Proactive customer care"],
    link: "/services/ai-predictive-customer-service",
    contactInfo
  },
  {
    id: "ai-intelligent-document-processing",
    title: "AI Intelligent Document Processing Platform",
    description: "Automate document processing with AI-powered extraction, classification, validation, and workflow routing for invoices, contracts, and forms.",
    category: "AI Services",
    subcategory: "Document AI",
    icon: "📄",
    price: "$1,499/month",
    features: ["Document Extraction", "Auto-Classification", "Validation Rules", "Workflow Routing", "Multi-Format Support", "Quality Control"],
    benefits: ["Process documents 10x faster", "Reduce errors by 90%", "Automate workflows", "Handle any document type"],
    link: "/services/ai-intelligent-document-processing",
    contactInfo
  },
  {
    id: "ai-voice-analytics-platform",
    title: "AI Voice Analytics & Sentiment Platform",
    description: "Analyze voice calls with real-time sentiment detection, emotion analysis, keyword extraction, and conversation intelligence for sales and support teams.",
    category: "AI Services",
    subcategory: "Voice AI",
    icon: "🎙️",
    price: "$1,799/month",
    features: ["Real-Time Sentiment", "Emotion Analysis", "Keyword Extraction", "Conversation Intelligence", "Call Scoring", "Agent Coaching"],
    benefits: ["Improve call quality by 50%", "Detect customer emotions", "Coach agents in real-time", "Increase conversion rates"],
    link: "/services/ai-voice-analytics-platform",
    contactInfo
  },
  {
    id: "ai-supply-chain-optimization",
    title: "AI Supply Chain Optimization Platform",
    description: "Optimize supply chain operations with demand forecasting, inventory optimization, route planning, and supplier risk assessment using advanced AI algorithms.",
    category: "AI Services",
    subcategory: "Supply Chain AI",
    icon: "🔗",
    price: "$2,999/month",
    features: ["Demand Forecasting", "Inventory Optimization", "Route Planning", "Supplier Risk", "Cost Reduction", "Real-Time Visibility"],
    benefits: ["Reduce costs by 25%", "Improve delivery times by 30%", "Optimize inventory levels", "Mitigate supply risks"],
    link: "/services/ai-supply-chain-optimization",
    contactInfo
  },
  {
    id: "ai-code-review-automation",
    title: "AI Code Review & Quality Automation Platform",
    description: "Automate code reviews with AI-powered bug detection, security scanning, performance analysis, and code quality scoring for development teams.",
    category: "AI Services",
    subcategory: "Developer AI",
    icon: "👨‍💻",
    price: "$899/month",
    features: ["Bug Detection", "Security Scanning", "Performance Analysis", "Quality Scoring", "Auto-Fix Suggestions", "Team Analytics"],
    benefits: ["Review code 10x faster", "Catch bugs before production", "Improve code quality", "Reduce technical debt"],
    link: "/services/ai-code-review-automation",
    contactInfo
  },
  {
    id: "ai-meeting-intelligence-platform",
    title: "AI Meeting Intelligence & Action Platform",
    description: "Transform meetings with AI-powered transcription, action item extraction, decision tracking, and follow-up automation for productive meetings.",
    category: "AI Services",
    subcategory: "Productivity AI",
    icon: "📹",
    price: "$699/month",
    features: ["Auto-Transcription", "Action Extraction", "Decision Tracking", "Follow-up Automation", "Meeting Analytics", "Integration Hub"],
    benefits: ["Never miss action items", "Track all decisions", "Automate follow-ups", "Improve meeting ROI"],
    link: "/services/ai-meeting-intelligence-platform",
    contactInfo
  },
  // IT Services (6 new)
  {
    id: "it-cloud-native-security-platform",
    title: "Cloud-Native Security & Compliance Platform",
    description: "Comprehensive cloud security with CSPM, CWPP, container security, and compliance automation for AWS, Azure, and GCP environments.",
    category: "IT Services",
    subcategory: "Cloud Security",
    icon: "☁️",
    price: "$3,499/month",
    features: ["CSPM", "CWPP", "Container Security", "Compliance Automation", "Multi-Cloud", "Threat Detection"],
    benefits: ["Secure cloud infrastructure", "Automate compliance", "Detect threats early", "Reduce security incidents"],
    link: "/services/it-cloud-native-security-platform",
    contactInfo
  },
  {
    id: "it-enterprise-data-governance",
    title: "Enterprise Data Governance & Quality Platform",
    description: "Comprehensive data governance with data quality monitoring, lineage tracking, policy enforcement, and regulatory compliance for enterprise data assets.",
    category: "IT Services",
    subcategory: "Data Governance",
    icon: "🗃️",
    price: "$2,999/month",
    features: ["Data Quality", "Lineage Tracking", "Policy Enforcement", "Compliance", "Data Catalog", "Quality Monitoring"],
    benefits: ["Improve data quality by 80%", "Ensure compliance", "Track data lineage", "Govern data assets"],
    link: "/services/it-enterprise-data-governance",
    contactInfo
  },
  {
    id: "it-devops-automation-platform",
    title: "DevOps Automation & CI/CD Platform",
    description: "End-to-end DevOps automation with CI/CD pipelines, infrastructure as code, testing automation, and deployment orchestration for modern development teams.",
    category: "IT Services",
    subcategory: "DevOps",
    icon: "🚀",
    price: "$1,999/month",
    features: ["CI/CD Pipelines", "Infrastructure as Code", "Testing Automation", "Deployment Orchestration", "Monitoring", "Security Integration"],
    benefits: ["Deploy 10x faster", "Reduce deployment failures", "Automate testing", "Improve developer productivity"],
    link: "/services/it-devops-automation-platform",
    contactInfo
  },
  {
    id: "it-network-performance-monitoring",
    title: "Network Performance Monitoring & Diagnostics",
    description: "Comprehensive network monitoring with performance analytics, diagnostics, alerting, and optimization recommendations for enterprise networks.",
    category: "IT Services",
    subcategory: "Network Operations",
    icon: "📡",
    price: "$1,499/month",
    features: ["Performance Monitoring", "Network Diagnostics", "Alerting", "Optimization", "Traffic Analysis", "Capacity Planning"],
    benefits: ["Improve network performance", "Prevent outages", "Optimize bandwidth", "Reduce downtime"],
    link: "/services/it-network-performance-monitoring",
    contactInfo
  },
  {
    id: "it-identity-access-management",
    title: "Identity & Access Management Platform",
    description: "Enterprise IAM with SSO, MFA, privileged access management, and identity governance for secure and compliant user access across the organization.",
    category: "IT Services",
    subcategory: "Identity Security",
    icon: "🔐",
    price: "$2,499/month",
    features: ["Single Sign-On", "Multi-Factor Auth", "Privileged Access", "Identity Governance", "Access Reviews", "Compliance"],
    benefits: ["Strengthen security", "Simplify user access", "Ensure compliance", "Reduce identity risks"],
    link: "/services/it-identity-access-management",
    contactInfo
  },
  {
    id: "it-disaster-recovery-automation",
    title: "Disaster Recovery & Business Continuity Automation",
    description: "Automated disaster recovery with backup orchestration, failover automation, RTO/RPO monitoring, and business continuity planning for critical systems.",
    category: "IT Services",
    subcategory: "Business Continuity",
    icon: "🛡️",
    price: "$2,999/month",
    features: ["Backup Orchestration", "Failover Automation", "RTO/RPO Monitoring", "Continuity Planning", "Testing Automation", "Recovery Analytics"],
    benefits: ["Minimize downtime", "Automate recovery", "Ensure business continuity", "Meet RTO/RPO targets"],
    link: "/services/it-disaster-recovery-automation",
    contactInfo
  },
  // Micro-SaaS (8 new)
  {
    id: "saas-ai-email-templates-builder",
    title: "AI Email Templates & Builder Platform",
    description: "Create professional email templates with AI-powered suggestions, A/B testing, personalization tokens, and performance analytics for marketing and sales teams.",
    category: "Micro-SaaS",
    subcategory: "Email Marketing",
    icon: "📧",
    price: "$49/month",
    features: ["AI Template Builder", "A/B Testing", "Personalization", "Performance Analytics", "Template Library", "Brand Consistency"],
    benefits: ["Create templates in minutes", "Improve open rates by 30%", "Personalize at scale", "Track performance"],
    link: "/services/saas-ai-email-templates-builder",
    contactInfo
  },
  {
    id: "saas-customer-feedback-analytics",
    title: "Customer Feedback & Sentiment Analytics Platform",
    description: "Analyze customer feedback across all channels with sentiment analysis, trend detection, and actionable insights for product and customer success teams.",
    category: "Micro-SaaS",
    subcategory: "Customer Analytics",
    icon: "💬",
    price: "$79/month",
    features: ["Sentiment Analysis", "Trend Detection", "Channel Aggregation", "Actionable Insights", "Alert System", "Reporting"],
    benefits: ["Understand customer sentiment", "Detect issues early", "Improve products", "Increase satisfaction"],
    link: "/services/saas-customer-feedback-analytics",
    contactInfo
  },
  {
    id: "saas-ai-content-calendar-planner",
    title: "AI Content Calendar & Planning Platform",
    description: "Plan and schedule content with AI-powered suggestions, optimal timing, team collaboration, and performance tracking across all marketing channels.",
    category: "Micro-SaaS",
    subcategory: "Content Marketing",
    icon: "📅",
    price: "$59/month",
    features: ["AI Suggestions", "Optimal Timing", "Team Collaboration", "Performance Tracking", "Multi-Channel", "Content Library"],
    benefits: ["Plan content efficiently", "Post at optimal times", "Collaborate seamlessly", "Track performance"],
    link: "/services/saas-ai-content-calendar-planner",
    contactInfo
  },
  {
    id: "saas-sales-pipeline-optimizer",
    title: "AI Sales Pipeline Optimizer & Forecasting",
    description: "Optimize sales pipelines with AI-powered deal scoring, forecasting, bottleneck detection, and actionable recommendations for sales teams.",
    category: "Micro-SaaS",
    subcategory: "Sales",
    icon: "💰",
    price: "$129/month",
    features: ["Deal Scoring", "Forecasting", "Bottleneck Detection", "Recommendations", "Pipeline Analytics", "Team Performance"],
    benefits: ["Increase win rates by 25%", "Improve forecast accuracy", "Identify bottlenecks", "Optimize pipelines"],
    link: "/services/saas-sales-pipeline-optimizer",
    contactInfo
  },
  {
    id: "saas-employee-performance-analytics",
    title: "Employee Performance & Productivity Analytics",
    description: "Track and improve employee performance with productivity analytics, goal tracking, feedback systems, and development recommendations.",
    category: "Micro-SaaS",
    subcategory: "HR Analytics",
    icon: "📊",
    price: "$89/month",
    features: ["Productivity Analytics", "Goal Tracking", "Feedback System", "Development Plans", "Team Insights", "Performance Reviews"],
    benefits: ["Improve productivity", "Track goals effectively", "Provide better feedback", "Develop employees"],
    link: "/services/saas-employee-performance-analytics",
    contactInfo
  },
  {
    id: "saas-ai-social-listening-platform",
    title: "AI Social Listening & Brand Monitoring Platform",
    description: "Monitor brand mentions, track sentiment, analyze trends, and engage with customers across social media platforms with AI-powered insights.",
    category: "Micro-SaaS",
    subcategory: "Social Media",
    icon: "📱",
    price: "$99/month",
    features: ["Brand Monitoring", "Sentiment Tracking", "Trend Analysis", "Engagement Tools", "Competitor Analysis", "Alert System"],
    benefits: ["Monitor brand reputation", "Track sentiment", "Identify trends", "Engage customers"],
    link: "/services/saas-ai-social-listening-platform",
    contactInfo
  },
  {
    id: "saas-project-time-tracking",
    title: "AI Project Time Tracking & Billing Platform",
    description: "Track project time automatically with AI-powered time capture, billing automation, productivity insights, and client reporting for service businesses.",
    category: "Micro-SaaS",
    subcategory: "Project Management",
    icon: "⏱️",
    price: "$39/user/month",
    features: ["Auto Time Capture", "Billing Automation", "Productivity Insights", "Client Reporting", "Project Analytics", "Integration"],
    benefits: ["Track time automatically", "Automate billing", "Improve productivity", "Accurate client reports"],
    link: "/services/saas-project-time-tracking",
    contactInfo
  },
  {
    id: "saas-ai-knowledge-base-optimizer",
    title: "AI Knowledge Base Optimizer & Analytics",
    description: "Optimize knowledge bases with AI-powered content suggestions, search analytics, gap detection, and continuous improvement recommendations.",
    category: "Micro-SaaS",
    subcategory: "Knowledge Management",
    icon: "📚",
    price: "$69/month",
    features: ["Content Suggestions", "Search Analytics", "Gap Detection", "Improvement Recommendations", "Usage Tracking", "Quality Scoring"],
    benefits: ["Improve knowledge base quality", "Fill content gaps", "Optimize search", "Track usage"],
    link: "/services/saas-ai-knowledge-base-optimizer",
    contactInfo
  }
];

services.push(...newServices);
fs.writeFileSync(jsonPath, JSON.stringify(services, null, 2));
console.log("Added " + newServices.length + " new services. Total: " + services.length);

// Update servicesData.ts
const tsPath = path.join(__dirname, 'app/data/servicesData.ts');
let tsContent = fs.readFileSync(tsPath, 'utf8');

const tsEntries = newServices.map(s => {
  const featuresStr = s.features.map(f => '"' + f + '"').join(', ');
  const benefitsStr = (s.benefits || []).map(b => '"' + b + '"').join(', ');
  return '  {\n    id: "' + s.id + '",\n    title: "' + s.title + '",\n    description: "' + s.description + '",\n    category: "' + s.category + '",\n    subcategory: "' + s.subcategory + '",\n    icon: "' + s.icon + '",\n    price: "' + s.price + '",\n    features: [' + featuresStr + '],\n    benefits: [' + benefitsStr + '],\n    link: "' + s.link + '",\n    contactInfo: {\n      mobile: "' + s.contactInfo.mobile + '",\n      email: "' + s.contactInfo.email + '",\n      address: "' + s.contactInfo.address + '"\n    }\n  }';
}).join(',\n');

const insertPoint = tsContent.lastIndexOf('];');
if (insertPoint !== -1) {
  const beforeInsert = tsContent.substring(0, insertPoint).trim();
  const needsComma = !beforeInsert.endsWith(',') && !beforeInsert.endsWith('[');
  const insertion = (needsComma ? ',\n' : '\n') + tsEntries + '\n';
  tsContent = tsContent.substring(0, insertPoint) + insertion + tsContent.substring(insertPoint);
}

const exportEntries = newServices.map(s =>
  'export const ' + s.id.replace(/-/g, '_') + ' = allServices.find(s => s.id === "' + s.id + '");'
).join('\n');

tsContent += '\n\n// V326-V330 Service Exports\n' + exportEntries + '\n';
fs.writeFileSync(tsPath, tsContent);
console.log('Updated servicesData.ts');

// Add V291-V295 services to servicesData.json
const fs = require('fs');
const path = require('path');

const servicesPath = path.join(__dirname, 'app/data/servicesData.json');
const services = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown DE 19709'
};

const newServices = [
  // V291-V295 Email Intelligence Services
  {
    id: 'v291-context-memory',
    name: 'V291 Email Context Memory',
    description: 'AI-powered conversation memory that builds on past interactions and maintains relationship continuity',
    category: 'ai',
    price: 139,
    features: ['Conversation history tracking', 'Relationship context building', 'Thread continuity', 'Reply-all enforcement'],
    longDescription: 'Advanced AI that remembers every conversation, tracks relationship history, and provides seamless continuity across email threads. Never lose context again.',
    benefits: ['Build stronger relationships', 'Provide consistent service', 'Reference past discussions', 'Improve customer satisfaction'],
    contactInfo
  },
  {
    id: 'v292-negotiation-assistant',
    name: 'V292 Negotiation Assistant',
    description: 'AI-powered negotiation support with tactic detection and strategic recommendations',
    category: 'ai',
    price: 229,
    features: ['Tactic detection', 'Strategy recommendations', 'Deal tracking', 'Leverage analysis', 'Reply-all enforcement'],
    longDescription: 'Intelligent negotiation assistant that detects negotiation tactics, analyzes your position, and provides strategic recommendations to help you close better deals.',
    benefits: ['Close more deals', 'Negotiate with confidence', 'Detect buyer tactics', 'Strategic advantage'],
    contactInfo
  },
  {
    id: 'v293-sarcasm-detector',
    name: 'V293 Sarcasm Detector',
    description: 'Advanced tone analysis that detects sarcasm and adjusts responses appropriately',
    category: 'ai',
    price: 119,
    features: ['Sarcasm detection', 'Tone analysis', 'Response adjustment', 'Emotional intelligence', 'Reply-all enforcement'],
    longDescription: 'Sophisticated AI that detects sarcasm, frustration, and emotional undertones in emails, then crafts appropriately empathetic and understanding responses.',
    benefits: ['Prevent miscommunication', 'Respond with empathy', 'De-escalate situations', 'Build rapport'],
    contactInfo
  },
  {
    id: 'v294-urgency-classifier',
    name: 'V294 Urgency Classifier',
    description: 'Multi-dimensional urgency detection analyzing temporal, impact, and stakeholder factors',
    category: 'ai',
    price: 169,
    features: ['Multi-factor analysis', 'Deadline extraction', 'Priority scoring', 'Response time recommendations', 'Reply-all enforcement'],
    longDescription: 'Advanced urgency detection that goes beyond keywords to analyze temporal pressure, business impact, and stakeholder importance for intelligent prioritization.',
    benefits: ['Never miss critical deadlines', 'Prioritize effectively', 'Meet SLAs consistently', 'Reduce response anxiety'],
    contactInfo
  },
  {
    id: 'v295-relationship-builder',
    name: 'V295 Relationship Builder',
    description: 'AI-powered relationship tracking and nurturing with engagement scoring',
    category: 'ai',
    price: 189,
    features: ['Relationship tracking', 'Engagement scoring', 'Sentiment trends', 'Nurturing suggestions', 'Reply-all enforcement'],
    longDescription: 'Intelligent relationship management that tracks interaction history, measures engagement health, and provides proactive suggestions to strengthen business relationships.',
    benefits: ['Strengthen client relationships', 'Prevent relationship decay', 'Increase retention', 'Data-driven engagement'],
    contactInfo
  },
  
  // Additional AI Services
  {
    id: 'ai-meeting-summarizer',
    name: 'AI Meeting Summarizer Pro',
    description: 'Automatically generate comprehensive meeting summaries with action items and decisions',
    category: 'ai',
    price: 99,
    features: ['Transcription analysis', 'Action item extraction', 'Decision tracking', 'Follow-up generation', 'Multi-format export'],
    longDescription: 'Transform meeting recordings into structured summaries with key decisions, action items, and automated follow-up tasks.',
    benefits: ['Save 2+ hours per meeting', 'Never miss action items', 'Improve accountability', 'Searchable meeting history'],
    contactInfo
  },
  {
    id: 'ai-contract-analyzer',
    name: 'AI Contract Analyzer',
    description: 'AI-powered contract review with risk assessment and clause analysis',
    category: 'ai',
    price: 349,
    features: ['Risk assessment', 'Clause analysis', 'Compliance checking', 'Red flag detection', 'Comparison tools'],
    longDescription: 'Automated contract analysis that identifies risks, highlights problematic clauses, and ensures compliance with legal standards.',
    benefits: ['Review contracts 10x faster', 'Reduce legal risk', 'Ensure compliance', 'Save on legal fees'],
    contactInfo
  },
  {
    id: 'ai-presentation-generator',
    name: 'AI Presentation Generator',
    description: 'Create professional presentations from text input with AI-powered design',
    category: 'ai',
    price: 149,
    features: ['Text to slides', 'AI design', 'Template library', 'Data visualization', 'Multi-format export'],
    longDescription: 'Transform your ideas into polished presentations with AI-powered content generation and professional design templates.',
    benefits: ['Create presentations in minutes', 'Professional quality', 'Consistent branding', 'Save hours of work'],
    contactInfo
  },
  
  // Additional Micro SaaS
  {
    id: 'client-portal-platform',
    name: 'Client Portal Platform',
    description: 'Secure client portal for document sharing, project tracking, and communication',
    category: 'micro-saas',
    price: 179,
    features: ['Secure document sharing', 'Project tracking', 'Client communication', 'Billing integration', 'Custom branding'],
    longDescription: 'Professional client portal that centralizes all client interactions, documents, and project updates in one secure, branded platform.',
    benefits: ['Improve client experience', 'Reduce email clutter', 'Centralize information', 'Professional image'],
    contactInfo
  },
  {
    id: 'proposal-builder-pro',
    name: 'Proposal Builder Pro',
    description: 'Create winning proposals with templates, e-signatures, and analytics',
    category: 'micro-saas',
    price: 129,
    features: ['Template library', 'E-signatures', 'Analytics tracking', 'Custom branding', 'CRM integration'],
    longDescription: 'Professional proposal creation platform with beautiful templates, built-in e-signatures, and detailed analytics to track engagement.',
    benefits: ['Win more deals', 'Create proposals faster', 'Track engagement', 'Professional presentation'],
    contactInfo
  },
  {
    id: 'workflow-automation-studio',
    name: 'Workflow Automation Studio',
    description: 'Visual workflow builder for automating business processes without coding',
    category: 'micro-saas',
    price: 199,
    features: ['Visual builder', '500+ integrations', 'Conditional logic', 'Error handling', 'Analytics'],
    longDescription: 'No-code workflow automation platform that connects your apps and automates repetitive business processes with an intuitive visual builder.',
    benefits: ['Automate repetitive tasks', 'Reduce errors', 'Save 20+ hours/week', 'Scale operations'],
    contactInfo
  },
  
  // Additional IT Services
  {
    id: 'managed-kubernetes',
    name: 'Managed Kubernetes Service',
    description: 'Fully managed Kubernetes clusters with monitoring, scaling, and security',
    category: 'it',
    price: 799,
    features: ['Managed clusters', 'Auto-scaling', 'Security hardening', '24/7 monitoring', 'Expert support'],
    longDescription: 'Enterprise-grade managed Kubernetes service with automated scaling, security best practices, and 24/7 expert support.',
    benefits: ['Focus on code, not infrastructure', 'Automatic scaling', 'Security compliance', 'Expert support'],
    contactInfo
  },
  {
    id: 'data-warehouse-modernization',
    name: 'Data Warehouse Modernization',
    description: 'Migrate and modernize legacy data warehouses to cloud-native solutions',
    category: 'it',
    price: 999,
    features: ['Migration planning', 'Cloud migration', 'Performance optimization', 'Cost reduction', 'Training'],
    longDescription: 'Comprehensive data warehouse modernization service that migrates legacy systems to cloud-native solutions with improved performance and reduced costs.',
    benefits: ['Reduce costs by 40%', 'Improve performance 10x', 'Modern architecture', 'Future-proof solution'],
    contactInfo
  },
  {
    id: 'zero-trust-implementation',
    name: 'Zero Trust Security Implementation',
    description: 'Implement zero trust architecture with identity verification and micro-segmentation',
    category: 'it',
    price: 899,
    features: ['Identity verification', 'Micro-segmentation', 'Policy enforcement', 'Continuous monitoring', 'Compliance'],
    longDescription: 'Complete zero trust security implementation that verifies every user and device, segments networks, and enforces security policies continuously.',
    benefits: ['Eliminate implicit trust', 'Reduce attack surface', 'Meet compliance', 'Protect sensitive data'],
    contactInfo
  },
  
  // More services
  {
    id: 'ai-chatbot-builder',
    name: 'AI Chatbot Builder Platform',
    description: 'Build intelligent chatbots with natural language understanding and multi-channel deployment',
    category: 'ai',
    price: 249,
    features: ['NLU engine', 'Multi-channel', 'Analytics', 'Custom training', 'API access'],
    longDescription: 'Advanced chatbot platform with natural language understanding, multi-channel deployment, and comprehensive analytics.',
    benefits: ['24/7 customer service', 'Reduce support costs', 'Improve satisfaction', 'Scale support'],
    contactInfo
  },
  {
    id: 'ai-email-marketing',
    name: 'AI Email Marketing Platform',
    description: 'AI-powered email marketing with personalization, segmentation, and optimization',
    category: 'ai',
    price: 179,
    features: ['AI personalization', 'Smart segmentation', 'A/B testing', 'Automation', 'Analytics'],
    longDescription: 'Intelligent email marketing platform that uses AI to personalize content, segment audiences, and optimize campaigns for maximum ROI.',
    benefits: ['Increase open rates 50%', 'Boost conversions', 'Save time', 'Data-driven decisions'],
    contactInfo
  },
  {
    id: 'inventory-management-ai',
    name: 'Inventory Management AI',
    description: 'AI-powered inventory optimization with demand forecasting and automated reordering',
    category: 'micro-saas',
    price: 159,
    features: ['Demand forecasting', 'Auto-reordering', 'Multi-location', 'Analytics', 'Integrations'],
    longDescription: 'Smart inventory management that predicts demand, automates reordering, and optimizes stock levels across multiple locations.',
    benefits: ['Reduce stockouts 80%', 'Lower carrying costs', 'Improve cash flow', 'Automate operations'],
    contactInfo
  },
  {
    id: 'employee-onboarding-platform',
    name: 'Employee Onboarding Platform',
    description: 'Streamline new hire onboarding with automated workflows and document management',
    category: 'micro-saas',
    price: 109,
    features: ['Automated workflows', 'Document management', 'Task tracking', 'Compliance', 'Analytics'],
    longDescription: 'Comprehensive onboarding platform that automates new hire workflows, manages documents, and ensures compliance from day one.',
    benefits: ['Reduce onboarding time 60%', 'Improve new hire experience', 'Ensure compliance', 'Standardize process'],
    contactInfo
  },
  {
    id: 'cybersecurity-audit',
    name: 'Cybersecurity Audit Service',
    description: 'Comprehensive security assessment with vulnerability scanning and remediation planning',
    category: 'it',
    price: 1499,
    features: ['Vulnerability scanning', 'Penetration testing', 'Risk assessment', 'Remediation plan', 'Compliance review'],
    longDescription: 'Thorough cybersecurity audit that identifies vulnerabilities, assesses risks, and provides a detailed remediation roadmap.',
    benefits: ['Identify security gaps', 'Reduce risk', 'Meet compliance', 'Protect business'],
    contactInfo
  },
  {
    id: 'cloud-cost-optimization',
    name: 'Cloud Cost Optimization Service',
    description: 'Reduce cloud spending with rightsizing, reserved instances, and waste elimination',
    category: 'it',
    price: 599,
    features: ['Cost analysis', 'Rightsizing', 'Reserved instances', 'Waste elimination', 'Monitoring'],
    longDescription: 'Expert cloud cost optimization that identifies waste, rightsizes resources, and implements savings strategies across all cloud providers.',
    benefits: ['Reduce costs 30-50%', 'Optimize resources', 'Predictable spending', 'Expert guidance'],
    contactInfo
  },
  {
    id: 'ai-lead-scoring',
    name: 'AI Lead Scoring System',
    description: 'Predictive lead scoring that identifies high-value prospects automatically',
    category: 'ai',
    price: 199,
    features: ['Predictive scoring', 'Behavioral analysis', 'CRM integration', 'Automation', 'Analytics'],
    longDescription: 'AI-powered lead scoring that analyzes behavior and engagement to predict which leads are most likely to convert.',
    benefits: ['Focus on best leads', 'Increase conversion 40%', 'Save sales time', 'Data-driven prioritization'],
    contactInfo
  },
  {
    id: 'document-management-system',
    name: 'Document Management System',
    description: 'Enterprise document management with version control, workflow, and compliance',
    category: 'micro-saas',
    price: 149,
    features: ['Version control', 'Workflow automation', 'Compliance', 'Search', 'Mobile access'],
    longDescription: 'Enterprise-grade document management with version control, automated workflows, compliance tracking, and powerful search.',
    benefits: ['Find documents instantly', 'Ensure compliance', 'Automate workflows', 'Reduce paper costs'],
    contactInfo
  },
  {
    id: 'ai-recruitment-platform',
    name: 'AI Recruitment Platform',
    description: 'AI-powered recruitment with resume screening, candidate matching, and interview scheduling',
    category: 'ai',
    price: 299,
    features: ['Resume screening', 'Candidate matching', 'Interview scheduling', 'Bias reduction', 'Analytics'],
    longDescription: 'Intelligent recruitment platform that screens resumes, matches candidates to roles, and reduces bias in the hiring process.',
    benefits: ['Hire 3x faster', 'Reduce bias', 'Better matches', 'Improve quality of hire'],
    contactInfo
  },
  {
    id: 'business-intelligence-dashboard',
    name: 'Business Intelligence Dashboard',
    description: 'Custom BI dashboards with real-time analytics and predictive insights',
    category: 'data',
    price: 399,
    features: ['Custom dashboards', 'Real-time analytics', 'Predictive insights', 'Data integration', 'Mobile access'],
    longDescription: 'Custom business intelligence dashboards that provide real-time analytics, predictive insights, and actionable recommendations.',
    benefits: ['Make data-driven decisions', 'Real-time visibility', 'Predict trends', 'Improve performance'],
    contactInfo
  },
  {
    id: 'ai-content-moderation',
    name: 'AI Content Moderation',
    description: 'Automated content moderation for user-generated content with AI and human review',
    category: 'ai',
    price: 189,
    features: ['AI moderation', 'Human review', 'Custom policies', 'Multi-language', 'Analytics'],
    longDescription: 'Comprehensive content moderation that combines AI detection with human review to ensure safe, compliant user-generated content.',
    benefits: ['Protect brand reputation', 'Reduce moderation costs', 'Scale moderation', 'Ensure compliance'],
    contactInfo
  },
  {
    id: 'supply-chain-visibility',
    name: 'Supply Chain Visibility Platform',
    description: 'End-to-end supply chain visibility with real-time tracking and predictive analytics',
    category: 'micro-saas',
    price: 449,
    features: ['Real-time tracking', 'Predictive analytics', 'Risk management', 'Supplier portal', 'Analytics'],
    longDescription: 'Complete supply chain visibility platform with real-time tracking, predictive analytics, and risk management capabilities.',
    benefits: ['Reduce disruptions', 'Improve delivery', 'Lower costs', 'Better planning'],
    contactInfo
  }
];

// Add new services to existing array
services.push(...newServices);

// Write back to file
fs.writeFileSync(servicesPath, JSON.stringify(services, null, 2));

console.log(`Added ${newServices.length} new services. Total: ${services.length} services`);

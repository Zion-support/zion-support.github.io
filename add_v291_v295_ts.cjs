// Add V291-V295 services to servicesData.ts
const fs = require('fs');
const path = require('path');

const tsPath = path.join(__dirname, 'app/data/servicesData.ts');
let tsContent = fs.readFileSync(tsPath, 'utf8');

const newServices = [
  {
    id: 'v291-context-memory',
    name: 'V291 Email Context Memory',
    description: 'AI-powered conversation memory that builds on past interactions and maintains relationship continuity',
    category: 'ai',
    price: 139,
    features: ['Conversation history tracking', 'Relationship context building', 'Thread continuity', 'Reply-all enforcement'],
    icon: '🧠'
  },
  {
    id: 'v292-negotiation-assistant',
    name: 'V292 Negotiation Assistant',
    description: 'AI-powered negotiation support with tactic detection and strategic recommendations',
    category: 'ai',
    price: 229,
    features: ['Tactic detection', 'Strategy recommendations', 'Deal tracking', 'Leverage analysis', 'Reply-all enforcement'],
    icon: '🤝'
  },
  {
    id: 'v293-sarcasm-detector',
    name: 'V293 Sarcasm Detector',
    description: 'Advanced tone analysis that detects sarcasm and adjusts responses appropriately',
    category: 'ai',
    price: 119,
    features: ['Sarcasm detection', 'Tone analysis', 'Response adjustment', 'Emotional intelligence', 'Reply-all enforcement'],
    icon: '😊'
  },
  {
    id: 'v294-urgency-classifier',
    name: 'V294 Urgency Classifier',
    description: 'Multi-dimensional urgency detection analyzing temporal, impact, and stakeholder factors',
    category: 'ai',
    price: 169,
    features: ['Multi-factor analysis', 'Deadline extraction', 'Priority scoring', 'Response time recommendations', 'Reply-all enforcement'],
    icon: '⚡'
  },
  {
    id: 'v295-relationship-builder',
    name: 'V295 Relationship Builder',
    description: 'AI-powered relationship tracking and nurturing with engagement scoring',
    category: 'ai',
    price: 189,
    features: ['Relationship tracking', 'Engagement scoring', 'Sentiment trends', 'Nurturing suggestions', 'Reply-all enforcement'],
    icon: '🤝'
  },
  {
    id: 'ai-meeting-summarizer',
    name: 'AI Meeting Summarizer Pro',
    description: 'Automatically generate comprehensive meeting summaries with action items and decisions',
    category: 'ai',
    price: 99,
    features: ['Transcription analysis', 'Action item extraction', 'Decision tracking', 'Follow-up generation', 'Multi-format export'],
    icon: '📝'
  },
  {
    id: 'ai-contract-analyzer',
    name: 'AI Contract Analyzer',
    description: 'AI-powered contract review with risk assessment and clause analysis',
    category: 'ai',
    price: 349,
    features: ['Risk assessment', 'Clause analysis', 'Compliance checking', 'Red flag detection', 'Comparison tools'],
    icon: '📄'
  },
  {
    id: 'ai-presentation-generator',
    name: 'AI Presentation Generator',
    description: 'Create professional presentations from text input with AI-powered design',
    category: 'ai',
    price: 149,
    features: ['Text to slides', 'AI design', 'Template library', 'Data visualization', 'Multi-format export'],
    icon: '📊'
  },
  {
    id: 'client-portal-platform',
    name: 'Client Portal Platform',
    description: 'Secure client portal for document sharing, project tracking, and communication',
    category: 'micro-saas',
    price: 179,
    features: ['Secure document sharing', 'Project tracking', 'Client communication', 'Billing integration', 'Custom branding'],
    icon: '🔐'
  },
  {
    id: 'proposal-builder-pro',
    name: 'Proposal Builder Pro',
    description: 'Create winning proposals with templates, e-signatures, and analytics',
    category: 'micro-saas',
    price: 129,
    features: ['Template library', 'E-signatures', 'Analytics tracking', 'Custom branding', 'CRM integration'],
    icon: '📋'
  },
  {
    id: 'workflow-automation-studio',
    name: 'Workflow Automation Studio',
    description: 'Visual workflow builder for automating business processes without coding',
    category: 'micro-saas',
    price: 199,
    features: ['Visual builder', '500+ integrations', 'Conditional logic', 'Error handling', 'Analytics'],
    icon: '⚙️'
  },
  {
    id: 'managed-kubernetes',
    name: 'Managed Kubernetes Service',
    description: 'Fully managed Kubernetes clusters with monitoring, scaling, and security',
    category: 'it',
    price: 799,
    features: ['Managed clusters', 'Auto-scaling', 'Security hardening', '24/7 monitoring', 'Expert support'],
    icon: '☸️'
  },
  {
    id: 'data-warehouse-modernization',
    name: 'Data Warehouse Modernization',
    description: 'Migrate and modernize legacy data warehouses to cloud-native solutions',
    category: 'it',
    price: 999,
    features: ['Migration planning', 'Cloud migration', 'Performance optimization', 'Cost reduction', 'Training'],
    icon: '🏗️'
  },
  {
    id: 'zero-trust-implementation',
    name: 'Zero Trust Security Implementation',
    description: 'Implement zero trust architecture with identity verification and micro-segmentation',
    category: 'it',
    price: 899,
    features: ['Identity verification', 'Micro-segmentation', 'Policy enforcement', 'Continuous monitoring', 'Compliance'],
    icon: '🔒'
  },
  {
    id: 'ai-chatbot-builder',
    name: 'AI Chatbot Builder Platform',
    description: 'Build intelligent chatbots with natural language understanding and multi-channel deployment',
    category: 'ai',
    price: 249,
    features: ['NLU engine', 'Multi-channel', 'Analytics', 'Custom training', 'API access'],
    icon: '💬'
  },
  {
    id: 'ai-email-marketing',
    name: 'AI Email Marketing Platform',
    description: 'AI-powered email marketing with personalization, segmentation, and optimization',
    category: 'ai',
    price: 179,
    features: ['AI personalization', 'Smart segmentation', 'A/B testing', 'Automation', 'Analytics'],
    icon: '📧'
  },
  {
    id: 'inventory-management-ai',
    name: 'Inventory Management AI',
    description: 'AI-powered inventory optimization with demand forecasting and automated reordering',
    category: 'micro-saas',
    price: 159,
    features: ['Demand forecasting', 'Auto-reordering', 'Multi-location', 'Analytics', 'Integrations'],
    icon: '📦'
  },
  {
    id: 'employee-onboarding-platform',
    name: 'Employee Onboarding Platform',
    description: 'Streamline new hire onboarding with automated workflows and document management',
    category: 'micro-saas',
    price: 109,
    features: ['Automated workflows', 'Document management', 'Task tracking', 'Compliance', 'Analytics'],
    icon: '👥'
  },
  {
    id: 'cybersecurity-audit',
    name: 'Cybersecurity Audit Service',
    description: 'Comprehensive security assessment with vulnerability scanning and remediation planning',
    category: 'it',
    price: 1499,
    features: ['Vulnerability scanning', 'Penetration testing', 'Risk assessment', 'Remediation plan', 'Compliance review'],
    icon: '🛡️'
  },
  {
    id: 'cloud-cost-optimization',
    name: 'Cloud Cost Optimization Service',
    description: 'Reduce cloud spending with rightsizing, reserved instances, and waste elimination',
    category: 'it',
    price: 599,
    features: ['Cost analysis', 'Rightsizing', 'Reserved instances', 'Waste elimination', 'Monitoring'],
    icon: '💰'
  },
  {
    id: 'ai-lead-scoring',
    name: 'AI Lead Scoring System',
    description: 'Predictive lead scoring that identifies high-value prospects automatically',
    category: 'ai',
    price: 199,
    features: ['Predictive scoring', 'Behavioral analysis', 'CRM integration', 'Automation', 'Analytics'],
    icon: '🎯'
  },
  {
    id: 'document-management-system',
    name: 'Document Management System',
    description: 'Enterprise document management with version control, workflow, and compliance',
    category: 'micro-saas',
    price: 149,
    features: ['Version control', 'Workflow automation', 'Compliance', 'Search', 'Mobile access'],
    icon: '📁'
  },
  {
    id: 'ai-recruitment-platform',
    name: 'AI Recruitment Platform',
    description: 'AI-powered recruitment with resume screening, candidate matching, and interview scheduling',
    category: 'ai',
    price: 299,
    features: ['Resume screening', 'Candidate matching', 'Interview scheduling', 'Bias reduction', 'Analytics'],
    icon: '👔'
  },
  {
    id: 'business-intelligence-dashboard',
    name: 'Business Intelligence Dashboard',
    description: 'Custom BI dashboards with real-time analytics and predictive insights',
    category: 'data',
    price: 399,
    features: ['Custom dashboards', 'Real-time analytics', 'Predictive insights', 'Data integration', 'Mobile access'],
    icon: '📊'
  },
  {
    id: 'ai-content-moderation',
    name: 'AI Content Moderation',
    description: 'Automated content moderation for user-generated content with AI and human review',
    category: 'ai',
    price: 189,
    features: ['AI moderation', 'Human review', 'Custom policies', 'Multi-language', 'Analytics'],
    icon: '🔍'
  },
  {
    id: 'supply-chain-visibility',
    name: 'Supply Chain Visibility Platform',
    description: 'End-to-end supply chain visibility with real-time tracking and predictive analytics',
    category: 'micro-saas',
    price: 449,
    features: ['Real-time tracking', 'Predictive analytics', 'Risk management', 'Supplier portal', 'Analytics'],
    icon: '🚚'
  }
];

// Find the end of the services array (before the closing bracket)
const lines = tsContent.split('\n');
let insertIndex = -1;

for (let i = lines.length - 1; i >= 0; i--) {
  if (lines[i].trim() === '];') {
    insertIndex = i;
    break;
  }
}

if (insertIndex === -1) {
  console.error('Could not find services array closing bracket');
  process.exit(1);
}

// Generate TypeScript entries
const tsEntries = newServices.map(service => {
  const featuresStr = service.features.map(f => `    '${f}'`).join(',\n');
  return `  {
    id: '${service.id}',
    name: '${service.name}',
    description: '${service.description}',
    category: '${service.category}',
    price: ${service.price},
    features: [
${featuresStr}
    ],
    icon: '${service.icon}',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    }
  }`;
}).join(',\n');

// Insert before the closing bracket
lines.splice(insertIndex, 0, tsEntries + ',');

// Write back
fs.writeFileSync(tsPath, lines.join('\n'));

console.log(`Added ${newServices.length} services to TypeScript file`);

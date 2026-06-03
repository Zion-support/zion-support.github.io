const fs = require('fs');
const path = require('path');

const servicesPath = path.join(__dirname, '../app/data/servicesData.json');
const services = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown DE 19709'
};

const newServices = [
  // V1091: Tone Adaptation (5 services)
  {
    id: 'tone-adaptation-engine',
    name: 'Email Tone Adaptation Engine',
    description: 'Automatically adapt email tone based on recipient relationship and context. Detect formality levels and adjust accordingly.',
    category: 'Communication Services',
    price: 549,
    features: ['Relationship-based tone detection', 'Formality level analysis', 'Cultural sensitivity checks', 'Tone consistency scoring', 'Adaptive suggestions'],
    icon: '🎭',
    link: '/services/tone-adaptation-engine',
    contactInfo
  },
  {
    id: 'formality-optimizer',
    name: 'Email Formality Optimizer',
    description: 'Optimize email formality levels for different contexts - from casual team communication to formal executive correspondence.',
    category: 'Communication Services',
    price: 449,
    features: ['Formality level detection', 'Context-aware adjustments', 'Professional tone guidance', 'Multi-level formality support', 'Tone consistency checks'],
    icon: '👔',
    link: '/services/formality-optimizer',
    contactInfo
  },
  {
    id: 'cultural-communication-advisor',
    name: 'Cultural Communication Advisor',
    description: 'Ensure culturally appropriate communication for international teams and diverse recipients.',
    category: 'Communication Services',
    price: 499,
    features: ['Cultural sensitivity analysis', 'Inclusive language suggestions', 'Holiday awareness', 'Idiom detection', 'Cultural context guidance'],
    icon: '🌍',
    link: '/services/cultural-communication-advisor',
    contactInfo
  },
  {
    id: 'relationship-tone-tracker',
    name: 'Relationship Tone Tracker',
    description: 'Track and optimize communication tone across different relationships - clients, executives, team members, and partners.',
    category: 'Communication Services',
    price: 599,
    features: ['Relationship categorization', 'Tone history tracking', 'Adaptive recommendations', 'Communication pattern analysis', 'Relationship scoring'],
    icon: '🤝',
    link: '/services/relationship-tone-tracker',
    contactInfo
  },
  {
    id: 'tone-consistency-monitor',
    name: 'Tone Consistency Monitor',
    description: 'Monitor and maintain consistent tone across all communications to build trust and professionalism.',
    category: 'Quality Assurance',
    price: 479,
    features: ['Tone consistency scoring', 'Brand voice alignment', 'Multi-channel monitoring', 'Tone drift detection', 'Consistency reports'],
    icon: '📊',
    link: '/services/tone-consistency-monitor',
    contactInfo
  },

  // V1092: Priority Intelligence (5 services)
  {
    id: 'email-priority-intelligence',
    name: 'Email Priority Intelligence',
    description: 'AI-powered email priority scoring with automatic inbox organization and smart notification management.',
    category: 'Productivity Services',
    price: 499,
    features: ['Multi-factor priority scoring', 'Automatic inbox organization', 'Smart notifications', 'Urgency detection', 'Priority-based routing'],
    icon: '⚡',
    link: '/services/email-priority-intelligence',
    contactInfo
  },
  {
    id: 'smart-inbox-organizer',
    name: 'Smart Inbox Organizer',
    description: 'Automatically organize your inbox based on priority, sender importance, and content relevance.',
    category: 'Productivity Services',
    price: 449,
    features: ['Automatic categorization', 'Priority-based sorting', 'Smart folders', 'Custom rules', 'Organization analytics'],
    icon: '📬',
    link: '/services/smart-inbox-organizer',
    contactInfo
  },
  {
    id: 'urgency-detection-system',
    name: 'Urgency Detection System',
    description: 'Detect urgent emails in real-time and ensure they get immediate attention with smart alerts and escalation.',
    category: 'Productivity Services',
    price: 529,
    features: ['Real-time urgency detection', 'Smart alerts', 'Escalation workflows', 'Urgency scoring', 'Response time tracking'],
    icon: '🚨',
    link: '/services/urgency-detection-system',
    contactInfo
  },
  {
    id: 'notification-intelligence',
    name: 'Notification Intelligence',
    description: 'Smart notification management that adapts to email priority and your work patterns.',
    category: 'Productivity Services',
    price: 399,
    features: ['Priority-based notifications', 'Do-not-disturb scheduling', 'Custom alert settings', 'Notification batching', 'Focus mode support'],
    icon: '🔔',
    link: '/services/notification-intelligence',
    contactInfo
  },
  {
    id: 'priority-analytics-dashboard',
    name: 'Priority Analytics Dashboard',
    description: 'Comprehensive analytics on email priorities, response times, and inbox management effectiveness.',
    category: 'Analytics Services',
    price: 549,
    features: ['Priority distribution analysis', 'Response time metrics', 'Inbox health scoring', 'Trend visualization', 'Performance benchmarks'],
    icon: '📈',
    link: '/services/priority-analytics-dashboard',
    contactInfo
  },

  // V1093: Knowledge Extractor (5 services)
  {
    id: 'email-knowledge-extractor',
    name: 'Email Knowledge Extractor',
    description: 'Extract structured knowledge from emails and build knowledge graphs automatically with entity relationship mapping.',
    category: 'Knowledge Management',
    price: 599,
    features: ['Entity extraction', 'Relationship mapping', 'Knowledge graph building', 'Fact extraction', 'Decision tracking'],
    icon: '🧠',
    link: '/services/email-knowledge-extractor',
    contactInfo
  },
  {
    id: 'knowledge-graph-builder',
    name: 'Knowledge Graph Builder',
    description: 'Build comprehensive knowledge graphs from email communications with automatic entity and relationship extraction.',
    category: 'Knowledge Management',
    price: 699,
    features: ['Automatic graph building', 'Entity relationship mapping', 'Knowledge visualization', 'Graph analytics', 'Export capabilities'],
    icon: '🕸️',
    link: '/services/knowledge-graph-builder',
    contactInfo
  },
  {
    id: 'entity-recognition-system',
    name: 'Entity Recognition System',
    description: 'Advanced entity recognition for people, organizations, dates, amounts, and other key information from emails.',
    category: 'Knowledge Management',
    price: 549,
    features: ['Multi-type entity extraction', 'Context-aware recognition', 'Entity linking', 'Confidence scoring', 'Custom entity types'],
    icon: '🔍',
    link: '/services/entity-recognition-system',
    contactInfo
  },
  {
    id: 'decision-tracking-platform',
    name: 'Decision Tracking Platform',
    description: 'Track and document all decisions made in email communications with automatic extraction and accountability mapping.',
    category: 'Project Management',
    price: 649,
    features: ['Automatic decision extraction', 'Decision history tracking', 'Accountability mapping', 'Decision analytics', 'Integration with PM tools'],
    icon: '✅',
    link: '/services/decision-tracking-platform',
    contactInfo
  },
  {
    id: 'knowledge-density-analyzer',
    name: 'Knowledge Density Analyzer',
    description: 'Analyze the knowledge density of emails to identify information-rich communications for archiving and reference.',
    category: 'Analytics Services',
    price: 499,
    features: ['Knowledge density scoring', 'Information-rich email detection', 'Archiving recommendations', 'Knowledge base integration', 'Density analytics'],
    icon: '📊',
    link: '/services/knowledge-density-analyzer',
    contactInfo
  },

  // V1094: Compliance Guardian (5 services)
  {
    id: 'email-compliance-guardian',
    name: 'Email Compliance Guardian',
    description: 'Real-time compliance checking for GDPR, HIPAA, SOX, and PCI-DSS with audit trail generation and regulatory validation.',
    category: 'Compliance Services',
    price: 699,
    features: ['Multi-regulation support', 'Real-time compliance checking', 'Audit trail generation', 'Sensitive data detection', 'Compliance reporting'],
    icon: '⚖️',
    link: '/services/email-compliance-guardian',
    contactInfo
  },
  {
    id: 'gdpr-compliance-checker',
    name: 'GDPR Compliance Checker',
    description: 'Ensure GDPR compliance in all email communications with consent tracking, data minimization, and right-to-erasure support.',
    category: 'Compliance Services',
    price: 649,
    features: ['GDPR requirement validation', 'Consent tracking', 'Data minimization checks', 'Right-to-erasure support', 'GDPR reporting'],
    icon: '🇪🇺',
    link: '/services/gdpr-compliance-checker',
    contactInfo
  },
  {
    id: 'sensitive-data-detector',
    name: 'Sensitive Data Detector',
    description: 'Detect and protect sensitive data in emails including SSN, credit cards, PHI, and other confidential information.',
    category: 'Security Services',
    price: 599,
    features: ['Multi-type sensitive data detection', 'Automatic masking', 'Encryption recommendations', 'Data loss prevention', 'Compliance integration'],
    icon: '🔒',
    link: '/services/sensitive-data-detector',
    contactInfo
  },
  {
    id: 'audit-trail-generator',
    name: 'Audit Trail Generator',
    description: 'Generate comprehensive audit trails for all email communications with retention policies and compliance documentation.',
    category: 'Compliance Services',
    price: 549,
    features: ['Automatic audit trail generation', 'Retention policy management', 'Compliance documentation', 'Audit reporting', 'Export capabilities'],
    icon: '📋',
    link: '/services/audit-trail-generator',
    contactInfo
  },
  {
    id: 'regulatory-compliance-dashboard',
    name: 'Regulatory Compliance Dashboard',
    description: 'Comprehensive dashboard for monitoring compliance across multiple regulations with real-time scoring and issue tracking.',
    category: 'Compliance Services',
    price: 749,
    features: ['Multi-regulation monitoring', 'Real-time compliance scoring', 'Issue tracking', 'Compliance trends', 'Regulatory updates'],
    icon: '📊',
    link: '/services/regulatory-compliance-dashboard',
    contactInfo
  },

  // V1095: Collaboration Hub (5 services)
  {
    id: 'email-collaboration-hub',
    name: 'Email Collaboration Hub',
    description: 'Team email collaboration features with shared inbox management, internal comments, and task assignment from emails.',
    category: 'Collaboration Services',
    price: 579,
    features: ['Shared inbox management', 'Internal comments', 'Task assignment', 'Collaboration workflows', 'Team coordination'],
    icon: '🤝',
    link: '/services/email-collaboration-hub',
    contactInfo
  },
  {
    id: 'shared-inbox-platform',
    name: 'Shared Inbox Platform',
    description: 'Manage team inboxes efficiently with assignment, tagging, and workflow automation for collaborative email handling.',
    category: 'Collaboration Services',
    price: 649,
    features: ['Shared inbox management', 'Email assignment', 'Team workflows', 'Tagging system', 'Performance analytics'],
    icon: '📥',
    link: '/services/shared-inbox-platform',
    contactInfo
  },
  {
    id: 'internal-comment-system',
    name: 'Internal Comment System',
    description: 'Add internal-only comments to emails for team discussion without exposing internal communication to external recipients.',
    category: 'Collaboration Services',
    price: 449,
    features: ['Internal-only comments', 'Thread discussions', 'Comment notifications', 'Decision documentation', 'Context sharing'],
    icon: '💬',
    link: '/services/internal-comment-system',
    contactInfo
  },
  {
    id: 'email-task-assignment',
    name: 'Email Task Assignment',
    description: 'Automatically extract and assign tasks from emails to team members with tracking and accountability.',
    category: 'Project Management',
    price: 529,
    features: ['Automatic task extraction', 'Smart assignment', 'Task tracking', 'Accountability mapping', 'Integration with PM tools'],
    icon: '📝',
    link: '/services/email-task-assignment',
    contactInfo
  },
  {
    id: 'collaboration-analytics-platform',
    name: 'Collaboration Analytics Platform',
    description: 'Analyze team collaboration patterns, email workflows, and coordination effectiveness with comprehensive analytics.',
    category: 'Analytics Services',
    price: 599,
    features: ['Collaboration pattern analysis', 'Workflow effectiveness', 'Team coordination metrics', 'Bottleneck identification', 'Performance optimization'],
    icon: '📊',
    link: '/services/collaboration-analytics-platform',
    contactInfo
  }
];

services.push(...newServices);
fs.writeFileSync(servicesPath, JSON.stringify(services, null, 2));

console.log(`✅ Added ${newServices.length} new services (Total: ${services.length})`);

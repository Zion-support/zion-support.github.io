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
  // V1081: Fraud & Phishing Detection (5 services)
  {
    id: 'email-phishing-detector',
    name: 'Email Phishing Detector',
    description: 'Advanced phishing detection with sender reputation analysis, URL inspection, and threat scoring to protect your organization from email-based attacks.',
    category: 'Security Services',
    price: 799,
    features: ['Real-time threat detection', 'Sender reputation analysis', 'URL inspection', 'Threat scoring (0-100)', 'Quarantine recommendations', 'Brand impersonation detection'],
    icon: '🔍',
    link: '/services/email-phishing-detector',
    contactInfo
  },
  {
    id: 'fraud-prevention-suite',
    name: 'Fraud Prevention Suite',
    description: 'Comprehensive fraud prevention with social engineering detection, urgency tactic analysis, and multi-layer security checks.',
    category: 'Security Services',
    price: 899,
    features: ['Social engineering detection', 'Urgency tactic analysis', 'Multi-layer security', 'Threat intelligence feeds', 'Automated quarantine', 'Security reporting'],
    icon: '🛡️',
    link: '/services/fraud-prevention-suite',
    contactInfo
  },
  {
    id: 'email-security-audit',
    name: 'Email Security Audit',
    description: 'Complete security audit of email infrastructure including SPF/DKIM/DMARC validation, domain analysis, and vulnerability assessment.',
    category: 'Security Services',
    price: 699,
    features: ['SPF/DKIM/DMARC validation', 'Domain security analysis', 'Vulnerability assessment', 'Security scorecard', 'Compliance reporting', 'Remediation guidance'],
    icon: '🔒',
    link: '/services/email-security-audit',
    contactInfo
  },
  {
    id: 'threat-intelligence-platform',
    name: 'Threat Intelligence Platform',
    description: 'Real-time threat intelligence platform that monitors global threat feeds and provides actionable insights for email security.',
    category: 'Security Services',
    price: 999,
    features: ['Global threat feeds', 'Real-time monitoring', 'Threat correlation', 'IOC tracking', 'Automated alerts', 'Threat hunting tools'],
    icon: '🎯',
    link: '/services/threat-intelligence-platform',
    contactInfo
  },
  {
    id: 'security-awareness-training',
    name: 'Security Awareness Training',
    description: 'Comprehensive security awareness training program with phishing simulations, educational content, and progress tracking.',
    category: 'Security Services',
    price: 599,
    features: ['Phishing simulations', 'Educational modules', 'Progress tracking', 'Custom campaigns', 'Reporting dashboard', 'Certification program'],
    icon: '🎓',
    link: '/services/security-awareness-training',
    contactInfo
  },

  // V1082: Accessibility Checker (5 services)
  {
    id: 'email-accessibility-checker',
    name: 'Email Accessibility Checker',
    description: 'WCAG 2.1 AA compliance checker for emails with readability analysis, color contrast validation, and plain language recommendations.',
    category: 'Compliance Services',
    price: 449,
    features: ['WCAG 2.1 AA compliance', 'Readability scoring', 'Color contrast validation', 'Plain language analysis', 'Image alt-text checks', 'Link accessibility'],
    icon: '♿',
    link: '/services/email-accessibility-checker',
    contactInfo
  },
  {
    id: 'content-readability-optimizer',
    name: 'Content Readability Optimizer',
    description: 'Optimize email content for readability with Flesch-Kincaid scoring, sentence structure analysis, and plain language suggestions.',
    category: 'Content Services',
    price: 349,
    features: ['Flesch-Kincaid scoring', 'Sentence structure analysis', 'Plain language suggestions', 'Reading level targeting', 'Complexity reduction', 'Content optimization'],
    icon: '📖',
    link: '/services/content-readability-optimizer',
    contactInfo
  },
  {
    id: 'color-contrast-validator',
    name: 'Color Contrast Validator',
    description: 'Validate color contrast ratios for email templates to ensure compliance with accessibility standards and improve readability.',
    category: 'Design Services',
    price: 299,
    features: ['WCAG contrast ratios', 'Real-time validation', 'Color palette suggestions', 'Template scanning', 'Compliance reporting', 'Design recommendations'],
    icon: '🎨',
    link: '/services/color-contrast-validator',
    contactInfo
  },
  {
    id: 'inclusive-communication-toolkit',
    name: 'Inclusive Communication Toolkit',
    description: 'Comprehensive toolkit for creating inclusive communications with accessibility checks, language analysis, and bias detection.',
    category: 'Compliance Services',
    price: 549,
    features: ['Accessibility checks', 'Language analysis', 'Bias detection', 'Inclusive language guide', 'Compliance reporting', 'Training resources'],
    icon: '🌈',
    link: '/services/inclusive-communication-toolkit',
    contactInfo
  },
  {
    id: 'accessibility-compliance-consulting',
    name: 'Accessibility Compliance Consulting',
    description: 'Expert consulting services for achieving and maintaining WCAG compliance across all digital communications.',
    category: 'Consulting Services',
    price: 1499,
    features: ['Compliance assessment', 'Remediation planning', 'Team training', 'Ongoing monitoring', 'Legal guidance', 'Certification support'],
    icon: '👨‍💼',
    link: '/services/accessibility-compliance-consulting',
    contactInfo
  },

  // V1083: Signature Manager (5 services)
  {
    id: 'email-signature-manager',
    name: 'Email Signature Manager',
    description: 'Dynamic email signature management with role-based templates, brand compliance, and click tracking for professional communications.',
    category: 'Productivity Services',
    price: 299,
    features: ['Role-based templates', 'Brand compliance', 'Click tracking', 'Dynamic updates', 'A/B testing', 'Analytics dashboard'],
    icon: '✍️',
    link: '/services/email-signature-manager',
    contactInfo
  },
  {
    id: 'brand-signature-enforcement',
    name: 'Brand Signature Enforcement',
    description: 'Ensure consistent brand representation across all email signatures with automated compliance checking and enforcement.',
    category: 'Brand Services',
    price: 399,
    features: ['Brand compliance checks', 'Automated enforcement', 'Template management', 'Logo validation', 'Color consistency', 'Brand reporting'],
    icon: '🎯',
    link: '/services/brand-signature-enforcement',
    contactInfo
  },
  {
    id: 'signature-analytics-platform',
    name: 'Signature Analytics Platform',
    description: 'Track and analyze email signature performance with click tracking, engagement metrics, and ROI reporting.',
    category: 'Analytics Services',
    price: 449,
    features: ['Click tracking', 'Engagement metrics', 'ROI reporting', 'Link performance', 'User behavior analysis', 'Custom dashboards'],
    icon: '📊',
    link: '/services/signature-analytics-platform',
    contactInfo
  },
  {
    id: 'corporate-signature-suite',
    name: 'Corporate Signature Suite',
    description: 'Enterprise-grade signature management for large organizations with centralized control, role management, and compliance features.',
    category: 'Enterprise Services',
    price: 799,
    features: ['Centralized control', 'Role management', 'Compliance features', 'Bulk updates', 'SSO integration', 'Enterprise support'],
    icon: '🏢',
    link: '/services/corporate-signature-suite',
    contactInfo
  },
  {
    id: 'signature-design-service',
    name: 'Signature Design Service',
    description: 'Professional signature design service with custom templates, branding consultation, and implementation support.',
    category: 'Design Services',
    price: 699,
    features: ['Custom design', 'Branding consultation', 'Template creation', 'Implementation support', 'Revisions included', 'Design guidelines'],
    icon: '🎨',
    link: '/services/signature-design-service',
    contactInfo
  },

  // V1084: Archive & Search (5 services)
  {
    id: 'email-archive-search',
    name: 'Email Archive & Search',
    description: 'Intelligent email archival with semantic search, auto-categorization, and compliance retention policies for efficient email management.',
    category: 'Productivity Services',
    price: 599,
    features: ['Semantic search', 'Auto-categorization', 'Compliance retention', 'Key info extraction', 'Importance scoring', 'Advanced filters'],
    icon: '🗄️',
    link: '/services/email-archive-search',
    contactInfo
  },
  {
    id: 'compliance-archive-solution',
    name: 'Compliance Archive Solution',
    description: 'Regulatory-compliant email archiving with retention policies, legal hold capabilities, and audit trail management.',
    category: 'Compliance Services',
    price: 899,
    features: ['Regulatory compliance', 'Retention policies', 'Legal hold', 'Audit trails', 'eDiscovery support', 'Compliance reporting'],
    icon: '⚖️',
    link: '/services/compliance-archive-solution',
    contactInfo
  },
  {
    id: 'intelligent-email-search',
    name: 'Intelligent Email Search',
    description: 'AI-powered email search with natural language queries, semantic understanding, and intelligent result ranking.',
    category: 'Productivity Services',
    price: 499,
    features: ['Natural language search', 'Semantic understanding', 'Intelligent ranking', 'Quick filters', 'Search suggestions', 'Saved searches'],
    icon: '🔍',
    link: '/services/intelligent-email-search',
    contactInfo
  },
  {
    id: 'email-knowledge-base',
    name: 'Email Knowledge Base',
    description: 'Transform email archives into searchable knowledge base with auto-tagging, categorization, and knowledge extraction.',
    category: 'Knowledge Management',
    price: 749,
    features: ['Auto-tagging', 'Categorization', 'Knowledge extraction', 'Searchable archive', 'Knowledge graphs', 'Collaboration features'],
    icon: '📚',
    link: '/services/email-knowledge-base',
    contactInfo
  },
  {
    id: 'email-migration-service',
    name: 'Email Migration Service',
    description: 'Professional email migration service with archive transfer, data validation, and zero-downtime migration capabilities.',
    category: 'Migration Services',
    price: 1299,
    features: ['Archive transfer', 'Data validation', 'Zero downtime', 'Format conversion', 'Integrity checks', 'Migration support'],
    icon: '🚚',
    link: '/services/email-migration-service',
    contactInfo
  },

  // V1085: A/B Testing Platform (5 services)
  {
    id: 'email-ab-testing-platform',
    name: 'Email A/B Testing Platform',
    description: 'Comprehensive A/B testing platform for email campaigns with statistical significance calculations and automated winner selection.',
    category: 'Marketing Services',
    price: 549,
    features: ['Subject line testing', 'Content testing', 'Send time testing', 'Statistical significance', 'Auto winner selection', 'Performance analytics'],
    icon: '🧪',
    link: '/services/email-ab-testing-platform',
    contactInfo
  },
  {
    id: 'campaign-optimization-suite',
    name: 'Campaign Optimization Suite',
    description: 'Complete campaign optimization suite with A/B testing, multivariate testing, and performance optimization tools.',
    category: 'Marketing Services',
    price: 799,
    features: ['A/B testing', 'Multivariate testing', 'Performance optimization', 'Conversion tracking', 'ROI analysis', 'Optimization recommendations'],
    icon: '📈',
    link: '/services/campaign-optimization-suite',
    contactInfo
  },
  {
    id: 'email-testing-analytics',
    name: 'Email Testing Analytics',
    description: 'Advanced analytics for email testing with statistical modeling, predictive insights, and comprehensive reporting.',
    category: 'Analytics Services',
    price: 649,
    features: ['Statistical modeling', 'Predictive insights', 'Comprehensive reporting', 'Trend analysis', 'Performance benchmarks', 'Custom dashboards'],
    icon: '📊',
    link: '/services/email-testing-analytics',
    contactInfo
  },
  {
    id: 'send-time-optimizer',
    name: 'Send Time Optimizer',
    description: 'AI-powered send time optimization with timezone analysis, engagement pattern detection, and personalized scheduling.',
    category: 'Marketing Services',
    price: 449,
    features: ['Timezone analysis', 'Engagement patterns', 'Personalized scheduling', 'Send time testing', 'Optimization algorithms', 'Performance tracking'],
    icon: '⏰',
    link: '/services/send-time-optimizer',
    contactInfo
  },
  {
    id: 'marketing-experimentation-platform',
    name: 'Marketing Experimentation Platform',
    description: 'Enterprise experimentation platform with advanced testing capabilities, statistical rigor, and cross-channel optimization.',
    category: 'Enterprise Services',
    price: 1499,
    features: ['Advanced testing', 'Statistical rigor', 'Cross-channel optimization', 'Experiment management', 'Team collaboration', 'Enterprise features'],
    icon: '🔬',
    link: '/services/marketing-experimentation-platform',
    contactInfo
  }
];

services.push(...newServices);
fs.writeFileSync(servicesPath, JSON.stringify(services, null, 2));

console.log(`✅ Added ${newServices.length} new services (Total: ${services.length})`);

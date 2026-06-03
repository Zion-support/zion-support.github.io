#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const SERVICES_FILE = path.join(__dirname, '..', 'app', 'data', 'servicesData.json');

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

const newServices = [
  // V1101 - Context Memory Services (5)
  {
    id: 'email-context-memory',
    name: 'AI Email Context Memory',
    category: 'AI Services',
    subcategory: 'Email Intelligence',
    description: 'Remember every conversation and build rich relationship profiles. AI tracks topics, preferences, sentiment history, and key facts across months of email interactions.',
    price: '$579/month',
    features: ['Cross-conversation memory', 'Relationship stage tracking', 'Topic history indexing', 'Sentiment evolution tracking', 'Key fact extraction', 'Contextual recommendations'],
    benefits: ['Never forget important details', 'Personalize every interaction', 'Build stronger relationships', 'Reduce onboarding time'],
    icon: '🧠',
    link: '/services/email-context-memory',
    contactInfo,
    tags: ['context-memory', 'relationship', 'ai', 'email-intelligence']
  },
  {
    id: 'relationship-intelligence-platform',
    name: 'Relationship Intelligence Platform',
    category: 'AI Services',
    subcategory: 'CRM',
    description: 'Comprehensive relationship intelligence that tracks interaction history, sentiment trends, and engagement patterns to score and optimize every business relationship.',
    price: '$649/month',
    features: ['Relationship scoring', 'Engagement analytics', 'Interaction timeline', 'Predictive relationship insights'],
    benefits: ['Quantify relationship health', 'Identify at-risk relationships', 'Optimize engagement timing'],
    icon: '🤝',
    link: '/services/relationship-intelligence-platform',
    contactInfo,
    tags: ['relationship', 'crm', 'intelligence']
  },
  {
    id: 'conversation-history-search',
    name: 'AI Conversation History Search',
    category: 'Micro SaaS',
    subcategory: 'Search',
    description: 'Semantic search across all email conversations. Find any topic, decision, or commitment from months of emails in seconds.',
    price: '$399/month',
    features: ['Semantic search', 'Topic-based retrieval', 'Timeline filtering', 'Cross-thread search'],
    benefits: ['Find information instantly', 'Never lose track of decisions', 'Reduce email overload'],
    icon: '🔍',
    link: '/services/conversation-history-search',
    contactInfo,
    tags: ['search', 'history', 'productivity']
  },
  {
    id: 'contact-profile-builder',
    name: 'AI Contact Profile Builder',
    category: 'AI Services',
    subcategory: 'CRM',
    description: 'Automatically build comprehensive contact profiles from email interactions. Track preferences, communication style, key facts, and relationship milestones.',
    price: '$479/month',
    features: ['Auto-profile building', 'Preference learning', 'Communication style analysis', 'Milestone tracking'],
    benefits: ['Know your contacts deeply', 'Personalize communications', 'Improve customer experience'],
    icon: '👤',
    link: '/services/contact-profile-builder',
    contactInfo,
    tags: ['profiles', 'crm', 'personalization']
  },
  {
    id: 'contextual-reply-advisor',
    name: 'Contextual Reply Advisor',
    category: 'AI Services',
    subcategory: 'Email Intelligence',
    description: 'Get AI-powered reply suggestions based on full conversation history. Never repeat yourself or miss important context from previous interactions.',
    price: '$449/month',
    features: ['History-aware suggestions', 'Context-aware drafting', 'Avoid repetition alerts', 'Relationship-based tone'],
    benefits: ['Consistent communications', 'Time-saving drafts', 'Professional consistency'],
    icon: '💡',
    link: '/services/contextual-reply-advisor',
    contactInfo,
    tags: ['reply', 'context', 'productivity']
  },

  // V1102 - CRM Sync Services (5)
  {
    id: 'email-crm-auto-sync',
    name: 'Email-to-CRM Auto Sync',
    category: 'AI Services',
    subcategory: 'CRM Integration',
    description: 'Automatically sync email conversations to your CRM. AI extracts deal signals, revenue mentions, decision makers, and updates pipeline stages in real-time.',
    price: '$649/month',
    features: ['Auto deal stage updates', 'Revenue signal extraction', 'Decision maker tracking', 'Pipeline automation', 'Bi-directional sync', 'CRM agnostic'],
    benefits: ['Zero manual CRM entry', 'Real-time pipeline accuracy', 'Never miss a deal signal'],
    icon: '🔗',
    link: '/services/email-crm-auto-sync',
    contactInfo,
    tags: ['crm', 'sync', 'automation', 'sales']
  },
  {
    id: 'deal-signal-detector',
    name: 'AI Deal Signal Detector',
    category: 'AI Services',
    subcategory: 'Sales Intelligence',
    description: 'Detect buying signals, objections, budget confirmations, and timeline pressure from email conversations. Automatically score and prioritize leads.',
    price: '$599/month',
    features: ['Buying signal detection', 'Objection identification', 'Budget confirmation tracking', 'Lead scoring'],
    benefits: ['Focus on hot leads', 'Address objections proactively', 'Increase win rates'],
    icon: '🎯',
    link: '/services/deal-signal-detector',
    contactInfo,
    tags: ['deal-signals', 'sales', 'lead-scoring']
  },
  {
    id: 'revenue-forecasting-engine',
    name: 'Email Revenue Forecasting',
    category: 'AI Services',
    subcategory: 'Sales Analytics',
    description: 'Extract revenue mentions from emails and build accurate forecasts. AI tracks pricing discussions, budget approvals, and deal values across all conversations.',
    price: '$749/month',
    features: ['Revenue mention extraction', 'Forecast accuracy scoring', 'Pipeline value tracking', 'Quarterly projections'],
    benefits: ['Accurate revenue forecasts', 'Data-driven decisions', 'Board-ready reports'],
    icon: '📊',
    link: '/services/revenue-forecasting-engine',
    contactInfo,
    tags: ['revenue', 'forecasting', 'analytics']
  },
  {
    id: 'sales-pipeline-automation',
    name: 'Sales Pipeline Automation',
    category: 'Micro SaaS',
    subcategory: 'Sales',
    description: 'Automate your entire sales pipeline from email. AI moves deals through stages, triggers follow-ups, and alerts on stalled opportunities.',
    price: '$699/month',
    features: ['Stage auto-progression', 'Follow-up triggers', 'Stalled deal alerts', 'Activity logging'],
    benefits: ['Accelerate sales cycles', 'Never miss follow-ups', 'Pipeline visibility'],
    icon: '⚡',
    link: '/services/sales-pipeline-automation',
    contactInfo,
    tags: ['pipeline', 'automation', 'sales']
  },
  {
    id: 'customer-pain-point-tracker',
    name: 'Customer Pain Point Tracker',
    category: 'AI Services',
    subcategory: 'Customer Success',
    description: 'Automatically identify and track customer pain points from email conversations. Build solution maps and proactively address concerns.',
    price: '$499/month',
    features: ['Pain point extraction', 'Solution mapping', 'Trend analysis', 'Proactive alerts'],
    benefits: ['Understand customer needs', 'Improve retention', 'Drive product improvements'],
    icon: '🩺',
    link: '/services/customer-pain-point-tracker',
    contactInfo,
    tags: ['pain-points', 'customer-success', 'analytics']
  },

  // V1103 - Task Converter Services (5)
  {
    id: 'email-to-task-converter',
    name: 'AI Email-to-Task Converter',
    category: 'AI Services',
    subcategory: 'Productivity',
    description: 'Automatically extract action items from emails and create tasks with deadlines, priorities, and assignees. Integrates with Jira, Asana, Trello, and more.',
    price: '$449/month',
    features: ['Auto task extraction', 'Deadline detection', 'Priority assignment', 'Assignee detection', 'PM tool integration', 'Confidence scoring'],
    benefits: ['Never miss an action item', 'Automatic task creation', 'Accountability tracking'],
    icon: '✅',
    link: '/services/email-to-task-converter',
    contactInfo,
    tags: ['tasks', 'productivity', 'project-management']
  },
  {
    id: 'smart-deadline-tracker',
    name: 'Smart Deadline Tracker',
    category: 'Micro SaaS',
    subcategory: 'Productivity',
    description: 'Extract and track all deadlines mentioned across emails. Get proactive reminders and never miss a commitment again.',
    price: '$349/month',
    features: ['Deadline extraction', 'Proactive reminders', 'Overdue alerts', 'Calendar sync'],
    benefits: ['Never miss deadlines', 'Reduce stress', 'Improve reliability'],
    icon: '📅',
    link: '/services/smart-deadline-tracker',
    contactInfo,
    tags: ['deadlines', 'productivity', 'tracking']
  },
  {
    id: 'commitment-tracker',
    name: 'AI Commitment Tracker',
    category: 'AI Services',
    subcategory: 'Accountability',
    description: 'Track every commitment made via email - both yours and others. Get reminders for promises made and hold teams accountable.',
    price: '$399/month',
    features: ['Commitment extraction', 'Owner tracking', 'Reminder automation', 'Accountability reports'],
    benefits: ['Deliver on promises', 'Hold others accountable', 'Build trust'],
    icon: '🤞',
    link: '/services/commitment-tracker',
    contactInfo,
    tags: ['commitments', 'accountability', 'tracking']
  },
  {
    id: 'meeting-action-item-extractor',
    name: 'Meeting Action Item Extractor',
    category: 'AI Services',
    subcategory: 'Meetings',
    description: 'Extract action items from meeting follow-up emails. Auto-assign owners, set deadlines, and sync with project management tools.',
    price: '$429/month',
    features: ['Meeting note parsing', 'Action item extraction', 'Owner assignment', 'PM tool sync'],
    benefits: ['Capture meeting outcomes', 'Ensure follow-through', 'Reduce meeting waste'],
    icon: '📋',
    link: '/services/meeting-action-item-extractor',
    contactInfo,
    tags: ['meetings', 'action-items', 'productivity']
  },
  {
    id: 'task-priority-optimizer',
    name: 'Task Priority Optimizer',
    category: 'AI Services',
    subcategory: 'Productivity',
    description: 'AI analyzes all extracted tasks and optimizes priority based on deadlines, dependencies, and business impact. Smart scheduling for maximum productivity.',
    price: '$499/month',
    features: ['Priority scoring', 'Dependency mapping', 'Smart scheduling', 'Workload balancing'],
    benefits: ['Focus on what matters', 'Optimize productivity', 'Reduce overwhelm'],
    icon: '🎯',
    link: '/services/task-priority-optimizer',
    contactInfo,
    tags: ['priority', 'productivity', 'optimization']
  },

  // V1104 - Translation Hub Services (5)
  {
    id: 'email-translation-hub',
    name: 'AI Email Translation Hub',
    category: 'AI Services',
    subcategory: 'Communication',
    description: 'Real-time email translation in 40+ languages with cultural adaptation. Detect language automatically and respond in culturally appropriate style.',
    price: '$549/month',
    features: ['40+ language support', 'Auto language detection', 'Cultural adaptation', 'Formality matching', 'Greeting/closing localization', 'Cultural tips'],
    benefits: ['Communicate globally', 'Avoid cultural mistakes', 'Build international relationships'],
    icon: '🌍',
    link: '/services/email-translation-hub',
    contactInfo,
    tags: ['translation', 'multilingual', 'global', 'communication']
  },
  {
    id: 'cultural-communication-advisor',
    name: 'Cultural Communication Advisor',
    category: 'AI Services',
    subcategory: 'Communication',
    description: 'Get real-time guidance on cultural norms, formality levels, and communication etiquette for any country or culture.',
    price: '$449/month',
    features: ['Cultural norm guidance', 'Formality level detection', 'Greeting/closing suggestions', 'Cultural tips library'],
    benefits: ['Avoid cultural faux pas', 'Build rapport globally', 'Communicate respectfully'],
    icon: '🎭',
    link: '/services/cultural-communication-advisor',
    contactInfo,
    tags: ['culture', 'communication', 'global']
  },
  {
    id: 'multilingual-email-templates',
    name: 'Multilingual Email Templates',
    category: 'Micro SaaS',
    subcategory: 'Templates',
    description: 'Professionally translated email templates for business communications in 40+ languages. Culturally adapted for each region.',
    price: '$299/month',
    features: ['500+ templates', '40+ languages', 'Cultural adaptation', 'Custom template creation'],
    benefits: ['Professional communications', 'Time savings', 'Consistent branding'],
    icon: '📝',
    link: '/services/multilingual-email-templates',
    contactInfo,
    tags: ['templates', 'multilingual', 'productivity']
  },
  {
    id: 'language-detection-api',
    name: 'Email Language Detection API',
    category: 'IT Services',
    subcategory: 'API',
    description: 'High-accuracy language detection API for email content. Supports 40+ languages with character-based and pattern-based detection.',
    price: '$199/month',
    features: ['40+ languages', 'High accuracy', 'Fast response', 'RESTful API'],
    benefits: ['Automate language routing', 'Improve translation accuracy', 'Reduce manual sorting'],
    icon: '🔤',
    link: '/services/language-detection-api',
    contactInfo,
    tags: ['api', 'language-detection', 'integration']
  },
  {
    id: 'global-business-communication-suite',
    name: 'Global Business Communication Suite',
    category: 'AI Services',
    subcategory: 'Enterprise',
    description: 'Complete multilingual communication platform for global businesses. Translation, cultural adaptation, formality matching, and team collaboration across languages.',
    price: '$899/month',
    features: ['Enterprise translation', 'Team collaboration', 'Brand voice consistency', 'Compliance checking'],
    benefits: ['Unified global communications', 'Consistent brand voice', 'Scale internationally'],
    icon: '🏢',
    link: '/services/global-business-communication-suite',
    contactInfo,
    tags: ['enterprise', 'global', 'communication']
  },

  // V1105 - Phishing Shield Services (5)
  {
    id: 'email-phishing-shield',
    name: 'AI Email Phishing Shield',
    category: 'Security Services',
    subcategory: 'Email Security',
    description: 'Advanced AI-powered phishing detection with sender reputation analysis, URL scanning, spoofing detection, and social engineering pattern recognition.',
    price: '$699/month',
    features: ['ML-based phishing detection', 'Sender reputation scoring', 'URL threat analysis', 'Spoofing detection', 'Social engineering detection', 'Attachment scanning'],
    benefits: ['Block phishing attacks', 'Protect employee data', 'Reduce security incidents by 95%'],
    icon: '🛡️',
    link: '/services/email-phishing-shield',
    contactInfo,
    tags: ['phishing', 'security', 'email-security', 'threat-detection']
  },
  {
    id: 'sender-reputation-scoring',
    name: 'Sender Reputation Scoring',
    category: 'Security Services',
    subcategory: 'Email Security',
    description: 'Real-time sender reputation scoring based on domain age, SPF/DKIM/DMARC records, historical behavior, and threat intelligence.',
    price: '$499/month',
    features: ['Domain reputation analysis', 'SPF/DKIM/DMARC checking', 'Behavioral analysis', 'Threat intelligence'],
    benefits: ['Identify suspicious senders', 'Reduce false positives', 'Improve email filtering'],
    icon: '⭐',
    link: '/services/sender-reputation-scoring',
    contactInfo,
    tags: ['reputation', 'security', 'email']
  },
  {
    id: 'url-threat-scanner',
    name: 'URL Threat Scanner',
    category: 'Security Services',
    subcategory: 'Web Security',
    description: 'Scan all URLs in emails for phishing, malware, and suspicious patterns. Detect URL shorteners, lookalike domains, and credential harvesting pages.',
    price: '$449/month',
    features: ['URL reputation checking', 'Lookalike domain detection', 'Shortener expansion', 'Malware scanning'],
    benefits: ['Block malicious links', 'Protect against drive-by downloads', 'Prevent credential theft'],
    icon: '🔗',
    link: '/services/url-threat-scanner',
    contactInfo,
    tags: ['url-scanning', 'security', 'threat-detection']
  },
  {
    id: 'social-engineering-detector',
    name: 'Social Engineering Detector',
    category: 'AI Services',
    subcategory: 'Security AI',
    description: 'AI detects social engineering tactics in emails - authority impersonation, urgency manipulation, fear tactics, and greed exploitation.',
    price: '$549/month',
    features: ['Authority detection', 'Urgency manipulation alerts', 'Fear tactic identification', 'Greed exploitation detection'],
    benefits: ['Protect against manipulation', 'Train employees', 'Reduce successful attacks'],
    icon: '🎭',
    link: '/services/social-engineering-detector',
    contactInfo,
    tags: ['social-engineering', 'security', 'ai']
  },
  {
    id: 'email-security-awareness-traininging',
    name: 'Email Security Awareness Training',
    category: 'Security Services',
    subcategory: 'Training',
    description: 'Automated security awareness training using real phishing examples detected in your organization. Track employee susceptibility and improvement.',
    price: '$599/month',
    features: ['Real example training', 'Susceptibility tracking', 'Improvement metrics', 'Compliance reporting'],
    benefits: ['Reduce click rates by 80%', 'Meet compliance requirements', 'Build security culture'],
    icon: '🎓',
    link: '/services/email-security-awareness-training',
    contactInfo,
    tags: ['training', 'security', 'awareness']
  }
];

// Load existing services
let existing = [];
try {
  existing = JSON.parse(fs.readFileSync(SERVICES_FILE, 'utf8'));
} catch (e) {
  console.log('No existing file, creating new');
}

const existingIds = new Set(existing.map(s => s.id));
let added = 0;

for (const service of newServices) {
  if (!existingIds.has(service.id)) {
    existing.push(service);
    existingIds.add(service.id);
    added++;
  }
}

fs.writeFileSync(SERVICES_FILE, JSON.stringify(existing, null, 2));
console.log(`Added ${added} new services. Total: ${existing.length}`);

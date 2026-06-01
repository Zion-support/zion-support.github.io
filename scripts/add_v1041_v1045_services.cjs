const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'app', 'data', 'servicesData.json');
const services = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown DE 19709'
};

const newServices = [
  // V1041 - Sentiment Evolution Tracker services
  {
    id: 'ai-sentiment-evolution-tracker',
    name: 'AI Sentiment Evolution Tracker',
    category: 'AI Services',
    description: 'Track sentiment changes across email threads over time. Detect relationship deterioration early and get proactive alerts when key accounts show negative trends. Essential for customer success teams managing high-value relationships.',
    price: '$299/month',
    features: ['Real-time sentiment scoring', 'Thread trend analysis', 'Account health monitoring', 'Automated deterioration alerts', 'Weekly sentiment reports', 'Contact risk scoring'],
    icon: '📈',
    link: '/services/ai-sentiment-evolution-tracker',
    contactInfo
  },
  {
    id: 'customer-relationship-health-monitor',
    name: 'Customer Relationship Health Monitor',
    category: 'AI Services',
    description: 'Monitor the health of every customer relationship through AI-powered sentiment analysis. Get early warning signs of churn risk and automated intervention recommendations.',
    price: '$399/month',
    features: ['Per-contact health scores', 'Churn risk prediction', 'Relationship trend visualization', 'Intervention recommendations', 'Executive relationship dashboard', 'Multi-channel sentiment tracking'],
    icon: '💚',
    link: '/services/customer-relationship-health-monitor',
    contactInfo
  },
  {
    id: 'brand-sentiment-analytics',
    name: 'Brand Sentiment Analytics Platform',
    category: 'AI Services',
    description: 'Comprehensive brand sentiment analysis across emails, social media, and reviews. Track brand perception evolution and identify emerging reputation risks before they escalate.',
    price: '$499/month',
    features: ['Multi-channel sentiment tracking', 'Brand perception scoring', 'Competitor sentiment comparison', 'Crisis early warning system', 'Sentiment trend reports', 'Real-time brand alerts'],
    icon: '🏷️',
    link: '/services/brand-sentiment-analytics',
    contactInfo
  },
  {
    id: 'employee-engagement-sentiment',
    name: 'Employee Engagement Sentiment AI',
    category: 'AI Services',
    description: 'Analyze internal communications to gauge employee morale and engagement levels. Identify departments at risk of burnout and recommend targeted engagement strategies.',
    price: '$349/month',
    features: ['Internal communication analysis', 'Department morale tracking', 'Burnout risk detection', 'Engagement trend reports', 'Anonymous sentiment aggregation', 'HR intervention recommendations'],
    icon: '👥',
    link: '/services/employee-engagement-sentiment',
    contactInfo
  },
  {
    id: 'negotiation-sentiment-advisor',
    name: 'Negotiation Sentiment Advisor',
    category: 'AI Services',
    description: 'Real-time sentiment analysis during business negotiations. Understand counterpart emotions, detect bluffing signals, and get strategic advice for optimal deal outcomes.',
    price: '$599/month',
    features: ['Real-time negotiation analysis', 'Counterpart emotion detection', 'Bluff signal identification', 'Strategic advice engine', 'Deal probability scoring', 'Post-negotiation insights'],
    icon: '🤝',
    link: '/services/negotiation-sentiment-advisor',
    contactInfo
  },

  // V1042 - Response Time Optimizer services
  {
    id: 'ai-response-time-optimizer',
    name: 'AI Email Response Time Optimizer',
    category: 'AI Services',
    description: 'Intelligently prioritize your inbox based on sender importance, urgency, and SLA requirements. Auto-acknowledge critical emails and predict optimal response windows.',
    price: '$249/month',
    features: ['Smart inbox prioritization', 'SLA deadline tracking', 'Auto-acknowledgment for urgent emails', 'Response time analytics', 'Sender tier classification', 'Optimal timing predictions'],
    icon: '⏱️',
    link: '/services/ai-response-time-optimizer',
    contactInfo
  },
  {
    id: 'sla-enforcement-engine',
    name: 'Email SLA Enforcement Engine',
    category: 'IT Services',
    description: 'Ensure every email receives a response within the required SLA timeframe. Automated escalation, breach alerts, and compliance reporting for enterprise email management.',
    price: '$349/month',
    features: ['SLA rule configuration', 'Automated escalation workflows', 'Breach prevention alerts', 'Compliance reporting', 'Team response tracking', 'Custom SLA tiers'],
    icon: '⚖️',
    link: '/services/sla-enforcement-engine',
    contactInfo
  },
  {
    id: 'smart-inbox-prioritizer',
    name: 'Smart Inbox Prioritizer Pro',
    category: 'Micro SaaS',
    description: 'AI-powered inbox organization that learns your priorities. Automatically sorts, categorizes, and highlights emails that need immediate attention vs. those that can wait.',
    price: '$199/month',
    features: ['AI email categorization', 'Priority scoring algorithm', 'Focus mode for deep work', 'Batch processing suggestions', 'VIP sender highlighting', 'Noise reduction filters'],
    icon: '📬',
    link: '/services/smart-inbox-prioritizer',
    contactInfo
  },
  {
    id: 'auto-acknowledgment-system',
    name: 'Intelligent Auto-Acknowledgment System',
    category: 'Micro SaaS',
    description: 'Never leave a customer wondering if their email was received. Smart auto-replies that personalize based on urgency, sender tier, and content context.',
    price: '$179/month',
    features: ['Context-aware auto-replies', 'Urgency-based customization', 'Business hours awareness', 'Multi-language responses', 'Brand voice consistency', 'Escalation triggers'],
    icon: '📩',
    link: '/services/auto-acknowledgment-system',
    contactInfo
  },
  {
    id: 'team-response-analytics',
    name: 'Team Email Response Analytics',
    category: 'IT Services',
    description: 'Comprehensive analytics on your team\'s email response performance. Track response times, identify bottlenecks, and optimize team email workflows.',
    price: '$279/month',
    features: ['Team response time tracking', 'Bottleneck identification', 'Performance benchmarks', 'Workload distribution analysis', 'Response quality scoring', 'Weekly team reports'],
    icon: '📊',
    link: '/services/team-response-analytics',
    contactInfo
  },

  // V1043 - Attachment Intelligence services
  {
    id: 'ai-attachment-security-scanner',
    name: 'AI Attachment Security Scanner',
    category: 'Security Services',
    description: 'Scan all email attachments for sensitive data, PII, credentials, and compliance violations before they leave your organization. Prevent data leaks at the source.',
    price: '$449/month',
    features: ['PII detection and redaction', 'Credential leak prevention', 'Compliance violation scanning', 'File type risk assessment', 'Content hash verification', 'Security scoring per attachment'],
    icon: '🔐',
    link: '/services/ai-attachment-security-scanner',
    contactInfo
  },
  {
    id: 'smart-file-sharing-platform',
    name: 'Smart Secure File Sharing Platform',
    category: 'Cloud Services',
    description: 'Replace large email attachments with secure, trackable download links. Automatic file conversion, expiration dates, and access controls for enterprise-grade file sharing.',
    price: '$299/month',
    features: ['Secure download links', 'Access expiration controls', 'File format conversion', 'Download tracking analytics', 'Password protection', 'Large file support (10GB+)'],
    icon: '☁️',
    link: '/services/smart-file-sharing-platform',
    contactInfo
  },
  {
    id: 'document-intelligence-suite',
    name: 'Document Intelligence Suite',
    category: 'AI Services',
    description: 'AI-powered document analysis that generates summaries, extracts key data, classifies content, and detects anomalies across all your business documents.',
    price: '$399/month',
    features: ['Auto document summarization', 'Key data extraction', 'Content classification', 'Anomaly detection', 'Version comparison', 'Metadata enrichment'],
    icon: '📄',
    link: '/services/document-intelligence-suite',
    contactInfo
  },
  {
    id: 'missing-attachment-detector',
    name: 'Smart Missing Attachment Detector',
    category: 'Micro SaaS',
    description: 'Never send an email saying "oops, forgot the attachment" again. AI scans your email body for attachment references and alerts you before sending.',
    price: '$79/month',
    features: ['Attachment reference detection', 'Smart body analysis', 'Pre-send alerts', 'Custom trigger phrases', 'Multi-language support', 'Zero false positives guarantee'],
    icon: '📎',
    link: '/services/missing-attachment-detector',
    contactInfo
  },
  {
    id: 'enterprise-dlp-email-guard',
    name: 'Enterprise DLP Email Guard',
    category: 'Security Services',
    description: 'Data Loss Prevention for email communications. Automatically detect and block sensitive information from leaving your organization via email attachments or body content.',
    price: '$699/month',
    features: ['Real-time DLP scanning', 'Custom policy enforcement', 'SSN/PCI/HIPAA detection', 'Automatic email quarantine', 'Incident reporting', 'Regulatory compliance dashboard'],
    icon: '🛡️',
    link: '/services/enterprise-dlp-email-guard',
    contactInfo
  },

  // V1044 - Meeting Scheduler services
  {
    id: 'ai-meeting-scheduler-pro',
    name: 'AI Meeting Scheduler Pro',
    category: 'AI Services',
    description: 'Intelligent meeting scheduling that handles timezone conversions, finds optimal slots across multiple calendars, and generates agendas from email context.',
    price: '$249/month',
    features: ['Multi-timezone coordination', 'Smart slot recommendations', 'Auto agenda generation', 'Calendar conflict detection', 'Meeting link generation', 'Follow-up automation'],
    icon: '📅',
    link: '/services/ai-meeting-scheduler-pro',
    contactInfo
  },
  {
    id: 'global-team-coordinator',
    name: 'Global Team Time Coordinator',
    category: 'Micro SaaS',
    description: 'Coordinate meetings across 40+ timezones effortlessly. AI finds the fairest meeting times for distributed teams and handles DST changes automatically.',
    price: '$199/month',
    features: ['40+ timezone support', 'Fair rotation scheduling', 'DST automatic handling', 'Team availability mapping', 'Meeting cost calculator', 'Async alternative suggestions'],
    icon: '🌍',
    link: '/services/global-team-coordinator',
    contactInfo
  },
  {
    id: 'meeting-agenda-generator',
    name: 'AI Meeting Agenda Generator',
    category: 'AI Services',
    description: 'Automatically generate structured meeting agendas from email threads, project updates, and team inputs. Ensure every meeting is productive and focused.',
    price: '$149/month',
    features: ['Email-to-agenda conversion', 'Topic prioritization', 'Time allocation optimization', 'Action item tracking', 'Template library', 'Pre-meeting brief generation'],
    icon: '📋',
    link: '/services/meeting-agenda-generator',
    contactInfo
  },
  {
    id: 'meeting-productivity-analytics',
    name: 'Meeting Productivity Analytics',
    category: 'IT Services',
    description: 'Track and optimize your organization\'s meeting culture. Identify meeting overload, calculate true meeting costs, and recommend async alternatives.',
    price: '$299/month',
    features: ['Meeting cost calculator', 'Overload detection', 'Async alternative recommendations', 'Meeting effectiveness scoring', 'Department comparison', 'ROI analysis per meeting'],
    icon: '⏰',
    link: '/services/meeting-productivity-analytics',
    contactInfo
  },
  {
    id: 'voice-meeting-transcription',
    name: 'AI Voice Meeting Transcription',
    category: 'AI Services',
    description: 'Real-time meeting transcription with speaker identification, action item extraction, and automatic summary generation. Never miss a meeting detail again.',
    price: '$349/month',
    features: ['Real-time transcription', 'Speaker identification', 'Action item extraction', 'Auto summary generation', 'Search & replay', 'Multi-language support'],
    icon: '🎙️',
    link: '/services/voice-meeting-transcription',
    contactInfo
  },

  // V1045 - Knowledge Graph services
  {
    id: 'ai-knowledge-graph-builder',
    name: 'AI Email Knowledge Graph Builder',
    category: 'AI Services',
    description: 'Automatically build an organizational knowledge graph from email communications. Extract entities, relationships, decisions, and facts to create a searchable knowledge network.',
    price: '$599/month',
    features: ['Entity extraction', 'Relationship mapping', 'Decision tracking', 'Fact extraction', 'Knowledge gap detection', 'Relevant conversation surfacing'],
    icon: '🕸️',
    link: '/services/ai-knowledge-graph-builder',
    contactInfo
  },
  {
    id: 'organizational-memory-platform',
    name: 'Organizational Memory Platform',
    category: 'AI Services',
    description: 'Capture and preserve institutional knowledge from every email interaction. When employees leave, their knowledge stays. Searchable, connected, and always available.',
    price: '$499/month',
    features: ['Knowledge capture automation', 'Institutional memory search', 'Employee transition support', 'Knowledge decay alerts', 'Cross-team knowledge sharing', 'Expert identification'],
    icon: '🧠',
    link: '/services/organizational-memory-platform',
    contactInfo
  },
  {
    id: 'smart-contextual-email-search',
    name: 'Smart Contextual Email Search',
    category: 'Micro SaaS',
    description: 'Find any email, decision, or fact in seconds with AI-powered semantic search. Goes beyond keyword matching to understand context, intent, and relationships.',
    price: '$199/month',
    features: ['Semantic email search', 'Context-aware results', 'Decision finder', 'Fact extraction search', 'Natural language queries', 'Cross-thread correlation'],
    icon: '🔍',
    link: '/services/smart-contextual-email-search',
    contactInfo
  },
  {
    id: 'business-intelligence-extractor',
    name: 'Business Intelligence Extractor',
    category: 'Data Services',
    description: 'Transform email communications into actionable business intelligence. Automatically extract market insights, competitor information, and customer feedback from your inbox.',
    price: '$449/month',
    features: ['Market insight extraction', 'Competitor intelligence', 'Customer feedback analysis', 'Trend identification', 'BI dashboard integration', 'Automated reporting'],
    icon: '💡',
    link: '/services/business-intelligence-extractor',
    contactInfo
  },
  {
    id: 'email-knowledge-base-sync',
    name: 'Email-to-Knowledge Base Sync',
    category: 'IT Services',
    description: 'Automatically sync important email knowledge to your wiki, Notion, Confluence, or custom knowledge base. Keep documentation always up-to-date without manual effort.',
    price: '$299/month',
    features: ['Auto wiki sync', 'Multi-platform support', 'Smart content formatting', 'Duplicate detection', 'Version tracking', 'Knowledge base analytics'],
    icon: '📚',
    link: '/services/email-knowledge-base-sync',
    contactInfo
  }
];

// Add new services
services.push(...newServices);

fs.writeFileSync(dataPath, JSON.stringify(services, null, 2));
console.log(`Added ${newServices.length} new services. Total: ${services.length}`);

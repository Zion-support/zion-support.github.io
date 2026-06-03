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
  // V1086: Sentiment Evolution Tracking (5 services)
  {
    id: 'sentiment-evolution-tracker',
    name: 'Sentiment Evolution Tracker',
    description: 'Track sentiment changes across email threads over time. Detect deteriorating relationships early and predict churn risk before it happens.',
    category: 'Customer Success',
    price: 599,
    features: ['Real-time sentiment tracking', 'Trend analysis', 'Churn risk prediction', 'Relationship health scoring', 'Early warning alerts'],
    icon: '📈',
    link: '/services/sentiment-evolution-tracker',
    contactInfo
  },
  {
    id: 'customer-relationship-health-monitor',
    name: 'Customer Relationship Health Monitor',
    description: 'Monitor the health of all customer relationships with AI-powered sentiment analysis and proactive intervention recommendations.',
    category: 'Customer Success',
    price: 699,
    features: ['Multi-thread analysis', 'Relationship scoring', 'Intervention alerts', 'Health dashboards', 'Trend visualization'],
    icon: '💚',
    link: '/services/customer-relationship-health-monitor',
    contactInfo
  },
  {
    id: 'churn-prediction-system',
    name: 'Churn Prediction System',
    description: 'Predict customer churn before it happens using advanced sentiment analysis and behavioral pattern recognition.',
    category: 'Customer Success',
    price: 799,
    features: ['Churn risk scoring', 'Pattern recognition', 'Proactive alerts', 'Retention recommendations', 'Risk factor analysis'],
    icon: '🔮',
    link: '/services/churn-prediction-system',
    contactInfo
  },
  {
    id: 'sentiment-trend-analytics',
    name: 'Sentiment Trend Analytics',
    description: 'Comprehensive analytics on sentiment trends across all customer communications with actionable insights.',
    category: 'Analytics Services',
    price: 549,
    features: ['Trend visualization', 'Historical analysis', 'Comparative reporting', 'Export capabilities', 'Custom dashboards'],
    icon: '📊',
    link: '/services/sentiment-trend-analytics',
    contactInfo
  },
  {
    id: 'customer-satisfaction-tracker',
    name: 'Customer Satisfaction Tracker',
    description: 'Track and improve customer satisfaction with real-time sentiment monitoring and automated feedback collection.',
    category: 'Customer Success',
    price: 499,
    features: ['Satisfaction scoring', 'Feedback collection', 'Trend tracking', 'Improvement suggestions', 'Benchmark comparisons'],
    icon: '😊',
    link: '/services/customer-satisfaction-tracker',
    contactInfo
  },

  // V1087: Response Quality Scoring (5 services)
  {
    id: 'response-quality-scorer',
    name: 'Response Quality Scorer',
    description: 'AI-powered scoring of email response quality across clarity, tone, completeness, professionalism, and actionability.',
    category: 'Quality Assurance',
    price: 499,
    features: ['Multi-dimensional scoring', 'Real-time feedback', 'Improvement suggestions', 'Quality benchmarks', 'Team analytics'],
    icon: '🎯',
    link: '/services/response-quality-scorer',
    contactInfo
  },
  {
    id: 'email-clarity-optimizer',
    name: 'Email Clarity Optimizer',
    description: 'Optimize email clarity with AI-powered analysis of sentence structure, complexity, and readability.',
    category: 'Productivity Services',
    price: 399,
    features: ['Sentence analysis', 'Complexity reduction', 'Readability scoring', 'Structure suggestions', 'Plain language conversion'],
    icon: '📝',
    link: '/services/email-clarity-optimizer',
    contactInfo
  },
  {
    id: 'professional-tone-advisor',
    name: 'Professional Tone Advisor',
    description: 'Get real-time advice on email tone and professionalism to ensure appropriate communication in all contexts.',
    category: 'Quality Assurance',
    price: 449,
    features: ['Tone analysis', 'Professionalism scoring', 'Empathy detection', 'Formality adjustment', 'Context-aware advice'],
    icon: '👔',
    link: '/services/professional-tone-advisor',
    contactInfo
  },
  {
    id: 'email-completeness-checker',
    name: 'Email Completeness Checker',
    description: 'Ensure your emails are complete and comprehensive with AI-powered checks for missing elements and incomplete information.',
    category: 'Quality Assurance',
    price: 349,
    features: ['Completeness scoring', 'Question detection', 'Element checking', 'Gap identification', 'Follow-up suggestions'],
    icon: '✅',
    link: '/services/email-completeness-checker',
    contactInfo
  },
  {
    id: 'actionability-enhancer',
    name: 'Email Actionability Enhancer',
    description: 'Make your emails more actionable with AI-powered suggestions for clear next steps, deadlines, and commitments.',
    category: 'Productivity Services',
    price: 429,
    features: ['Action item detection', 'Next step suggestions', 'Deadline extraction', 'Commitment tracking', 'Results-oriented tips'],
    icon: '🚀',
    link: '/services/actionability-enhancer',
    contactInfo
  },

  // V1088: Smart Threading (5 services)
  {
    id: 'smart-email-threading',
    name: 'Smart Email Threading',
    description: 'Intelligently group related emails across multiple threads and build complete context from fragmented discussions.',
    category: 'Productivity Services',
    price: 529,
    features: ['Cross-thread grouping', 'Context building', 'Entity extraction', 'Decision tracking', 'Related conversation finder'],
    icon: '🧵',
    link: '/services/smart-email-threading',
    contactInfo
  },
  {
    id: 'conversation-context-builder',
    name: 'Conversation Context Builder',
    description: 'Build comprehensive context from email conversations with AI-powered entity extraction and decision tracking.',
    category: 'Productivity Services',
    price: 499,
    features: ['Context aggregation', 'Entity indexing', 'Decision logging', 'Action item tracking', 'Participant analysis'],
    icon: '🔍',
    link: '/services/conversation-context-builder',
    contactInfo
  },
  {
    id: 'email-decision-tracker',
    name: 'Email Decision Tracker',
    description: 'Track all decisions made in email conversations. Never lose track of what was agreed upon, by whom, and when.',
    category: 'Project Management',
    price: 479,
    features: ['Decision extraction', 'Commitment tracking', 'Timeline visualization', 'Decision history', 'Accountability mapping'],
    icon: '📋',
    link: '/services/email-decision-tracker',
    contactInfo
  },
  {
    id: 'thread-summarizer-pro',
    name: 'Thread Summarizer Pro',
    description: 'Get AI-powered summaries of long email threads. Quickly understand key points without reading every message.',
    category: 'Productivity Services',
    price: 449,
    features: ['AI summarization', 'Key point extraction', 'Decision highlights', 'Action item listing', 'Thread timeline'],
    icon: '📄',
    link: '/services/thread-summarizer-pro',
    contactInfo
  },
  {
    id: 'related-conversation-finder',
    name: 'Related Conversation Finder',
    description: 'Find related conversations across your email history with AI-powered semantic search and entity matching.',
    category: 'Productivity Services',
    price: 399,
    features: ['Semantic search', 'Entity-based matching', 'Relevance scoring', 'Cross-thread discovery', 'Smart recommendations'],
    icon: '🔗',
    link: '/services/related-conversation-finder',
    contactInfo
  },

  // V1089: Productivity Analytics (5 services)
  {
    id: 'email-productivity-dashboard',
    name: 'Email Productivity Dashboard',
    description: 'Comprehensive analytics on email productivity. Track time spent, response patterns, and identify bottlenecks.',
    category: 'Analytics Services',
    price: 479,
    features: ['Productivity metrics', 'Response time tracking', 'Inbox health scoring', 'Bottleneck identification', 'Actionable insights'],
    icon: '📊',
    link: '/services/email-productivity-dashboard',
    contactInfo
  },
  {
    id: 'inbox-zero-tracker',
    name: 'Inbox Zero Tracker',
    description: 'Track your progress toward inbox zero with insights on email volume, processing speed, and achievement milestones.',
    category: 'Productivity Services',
    price: 349,
    features: ['Inbox zero progress', 'Email volume tracking', 'Processing speed metrics', 'Achievement badges', 'Daily goals'],
    icon: '📬',
    link: '/services/inbox-zero-tracker',
    contactInfo
  },
  {
    id: 'response-time-optimizer',
    name: 'Response Time Optimizer',
    description: 'Optimize your email response times with AI-powered insights. Identify patterns and improve your responsiveness.',
    category: 'Productivity Services',
    price: 429,
    features: ['Response time analysis', 'Pattern detection', 'Benchmark setting', 'Improvement suggestions', 'SLA tracking'],
    icon: '⏱️',
    link: '/services/response-time-optimizer',
    contactInfo
  },
  {
    id: 'email-workload-analyzer',
    name: 'Email Workload Analyzer',
    description: 'Analyze your email workload to prevent burnout. Track volume trends and optimize your email processing schedule.',
    category: 'Analytics Services',
    price: 399,
    features: ['Workload tracking', 'Volume trends', 'Peak time identification', 'Schedule optimization', 'Burnout prevention'],
    icon: '⚖️',
    link: '/services/email-workload-analyzer',
    contactInfo
  },
  {
    id: 'communication-efficiency-tool',
    name: 'Communication Efficiency Tool',
    description: 'Improve communication efficiency with AI-powered insights. Reduce email volume and focus on high-impact messages.',
    category: 'Productivity Services',
    price: 459,
    features: ['Efficiency scoring', 'Volume reduction tips', 'Template suggestions', 'Automation opportunities', 'ROI tracking'],
    icon: '⚡',
    link: '/services/communication-efficiency-tool',
    contactInfo
  },

  // V1090: Follow-up Automation (5 services)
  {
    id: 'ai-followup-automation',
    name: 'AI Follow-up Automation',
    description: 'Intelligent follow-up system tracking commitments, deadlines, and unanswered emails with automated reminders.',
    category: 'Automation Services',
    price: 549,
    features: ['Commitment tracking', 'Deadline monitoring', 'Auto follow-ups', 'Escalation rules', 'Template generation'],
    icon: '🔄',
    link: '/services/ai-followup-automation',
    contactInfo
  },
  {
    id: 'commitment-tracker',
    name: 'Email Commitment Tracker',
    description: 'Track all commitments made in emails. AI extracts promises, deadlines, and action items for accountability.',
    category: 'Project Management',
    price: 479,
    features: ['Commitment extraction', 'Deadline tracking', 'Accountability mapping', 'Status updates', 'Progress reports'],
    icon: '📌',
    link: '/services/commitment-tracker',
    contactInfo
  },
  {
    id: 'deadline-monitor',
    name: 'Email Deadline Monitor',
    description: 'Monitor deadlines mentioned in emails. Get timely reminders and ensure you never miss important deadlines.',
    category: 'Productivity Services',
    price: 429,
    features: ['Deadline extraction', 'Smart reminders', 'Escalation alerts', 'Calendar integration', 'Progress tracking'],
    icon: '⏰',
    link: '/services/deadline-monitor',
    contactInfo
  },
  {
    id: 'unanswered-email-tracker',
    name: 'Unanswered Email Tracker',
    description: 'Track unanswered emails and questions. Get reminders to follow up and ensure all communications are addressed.',
    category: 'Productivity Services',
    price: 379,
    features: ['Question detection', 'Follow-up reminders', 'Response tracking', 'Priority sorting', 'Batch processing'],
    icon: '❓',
    link: '/services/unanswered-email-tracker',
    contactInfo
  },
  {
    id: 'smart-escalation-system',
    name: 'Smart Escalation System',
    description: 'Automatically escalate overdue items and critical commitments. Ensure important matters get the attention they deserve.',
    category: 'Automation Services',
    price: 529,
    features: ['Automated escalation', 'Priority-based routing', 'Manager notifications', 'SLA enforcement', 'Resolution tracking'],
    icon: '🚨',
    link: '/services/smart-escalation-system',
    contactInfo
  }
];

services.push(...newServices);
fs.writeFileSync(servicesPath, JSON.stringify(services, null, 2));

console.log(`✅ Added ${newServices.length} new services (Total: ${services.length})`);

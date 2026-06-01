const fs = require('fs');
const path = require('path');

const servicesPath = path.join(__dirname, '..', 'app', 'data', 'servicesData.json');
const services = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));

const newServices = [
  // V946 - Compliance Auto-Filer
  {
    id: 'gdpr-compliance-automation',
    name: 'GDPR Compliance Automation',
    description: 'Automatically detect and apply GDPR controls to emails containing EU citizen data',
    category: 'AI Services',
    icon: '🇪🇺',
    features: ['Auto-detection', '7-year retention', 'Encryption', 'Audit trails'],
    price: '$199/month',
    link: '/services/gdpr-compliance-automation'
  },
  {
    id: 'hipaa-email-compliance',
    name: 'HIPAA Email Compliance',
    description: 'Automatic HIPAA compliance for healthcare emails with PHI detection and protection',
    category: 'AI Services',
    icon: '🏥',
    features: ['PHI detection', 'BAA verification', '6-year retention', 'Access controls'],
    price: '$249/month',
    link: '/services/hipaa-email-compliance'
  },
  {
    id: 'sox-financial-compliance',
    name: 'SOX Financial Compliance',
    description: 'Automated SOX compliance for financial reporting emails with audit trail generation',
    category: 'AI Services',
    icon: '📊',
    features: ['Financial data detection', 'Internal controls', 'Audit documentation', 'Segregation verification'],
    price: '$299/month',
    link: '/services/sox-financial-compliance'
  },
  {
    id: 'pci-dss-email-security',
    name: 'PCI-DSS Email Security',
    description: 'Automatic PCI-DSS compliance for emails containing cardholder data with tokenization',
    category: 'AI Services',
    icon: '💳',
    features: ['Cardholder data detection', 'Tokenization', 'Encryption', 'Compliance scanning'],
    price: '$179/month',
    link: '/services/pci-dss-email-security'
  },
  {
    id: 'multi-framework-compliance',
    name: 'Multi-Framework Compliance',
    description: 'Unified compliance engine supporting GDPR, HIPAA, SOX, and PCI-DSS simultaneously',
    category: 'AI Services',
    icon: '⚖️',
    features: ['Multi-framework support', 'Automatic classification', 'Retention management', 'Audit reporting'],
    price: '$399/month',
    link: '/services/multi-framework-compliance'
  },
  {
    id: 'compliance-audit-trails',
    name: 'Compliance Audit Trails',
    description: 'Comprehensive audit trail generation for regulatory compliance with tamper-proof records',
    category: 'IT Services',
    icon: '📝',
    features: ['Tamper-proof logs', 'Regulatory reporting', 'Retention tracking', 'Access monitoring'],
    price: '$149/month',
    link: '/services/compliance-audit-trails'
  },

  // V947 - Content Repurposer
  {
    id: 'email-to-blog-converter',
    name: 'Email to Blog Converter',
    description: 'Transform customer success emails into SEO-optimized blog posts with case studies',
    category: 'Micro SaaS',
    icon: '📝',
    features: ['SEO optimization', 'Case study format', 'Keyword extraction', 'Readability scoring'],
    price: '$89/month',
    link: '/services/email-to-blog-converter'
  },
  {
    id: 'social-media-content-generator',
    name: 'Social Media Content Generator',
    description: 'Convert email content into engaging social media posts with hashtags and engagement predictions',
    category: 'Micro SaaS',
    icon: '📱',
    features: ['Multi-platform support', 'Hashtag generation', 'Engagement prediction', 'Character optimization'],
    price: '$79/month',
    link: '/services/social-media-content-generator'
  },
  {
    id: 'presentation-slide-generator',
    name: 'Presentation Slide Generator',
    description: 'Automatically generate slide decks from email content with visual suggestions',
    category: 'Micro SaaS',
    icon: '📊',
    features: ['Slide structure', 'Visual suggestions', 'Bullet point extraction', 'Webinar ready'],
    price: '$99/month',
    link: '/services/presentation-slide-generator'
  },
  {
    id: 'technical-documentation-builder',
    name: 'Technical Documentation Builder',
    description: 'Create technical documentation from API and integration emails with code examples',
    category: 'IT Services',
    icon: '📚',
    features: ['Code example extraction', 'API reference', 'Structured sections', 'Developer friendly'],
    price: '$129/month',
    link: '/services/technical-documentation-builder'
  },
  {
    id: 'marketing-landing-page-generator',
    name: 'Marketing Landing Page Generator',
    description: 'Build benefit-focused landing pages from marketing emails with CTAs and audience targeting',
    category: 'Micro SaaS',
    icon: '🎯',
    features: ['Benefit extraction', 'CTA generation', 'Audience targeting', 'Conversion optimization'],
    price: '$109/month',
    link: '/services/marketing-landing-page-generator'
  },
  {
    id: 'multi-channel-content-suite',
    name: 'Multi-Channel Content Suite',
    description: 'Complete content repurposing suite for blog, social, presentations, docs, and marketing',
    category: 'Micro SaaS',
    icon: '🔄',
    features: ['5 output formats', 'Brand consistency', 'Automated publishing', 'Performance analytics'],
    price: '$199/month',
    link: '/services/multi-channel-content-suite'
  },

  // V948 - Voice Synthesis
  {
    id: 'email-to-voice-converter',
    name: 'Email to Voice Converter',
    description: 'Convert emails to natural-sounding voice messages with emotion-aware synthesis',
    category: 'AI Services',
    icon: '🎙️',
    features: ['Natural TTS', 'Emotion detection', '50+ languages', 'Custom voices'],
    price: '$149/month',
    link: '/services/email-to-voice-converter'
  },
  {
    id: 'podcast-style-email-summaries',
    name: 'Podcast-Style Email Summaries',
    description: 'Generate conversational podcast-style summaries for long email threads',
    category: 'AI Services',
    icon: '🎧',
    features: ['Conversational format', 'Thread summarization', 'Key point extraction', 'Audio playback'],
    price: '$129/month',
    link: '/services/podcast-style-email-summaries'
  },
  {
    id: 'multilingual-voice-synthesis',
    name: 'Multilingual Voice Synthesis',
    description: 'Voice synthesis in 50+ languages with native pronunciation and cultural adaptation',
    category: 'AI Services',
    icon: '🌍',
    features: ['50+ languages', 'Native pronunciation', 'Cultural adaptation', 'Accent options'],
    price: '$179/month',
    link: '/services/multilingual-voice-synthesis'
  },
  {
    id: 'emotion-aware-voice-engine',
    name: 'Emotion-Aware Voice Engine',
    description: 'Voice synthesis that adapts tone, pace, and pitch based on email emotional content',
    category: 'AI Services',
    icon: '😊',
    features: ['Emotion detection', 'Tone adaptation', 'Pace control', 'Pitch optimization'],
    price: '$159/month',
    link: '/services/emotion-aware-voice-engine'
  },
  {
    id: 'voice-email-playback',
    name: 'Voice Email Playback',
    description: 'Listen to emails with natural voice playback optimized for mobile and desktop',
    category: 'Micro SaaS',
    icon: '▶️',
    features: ['Mobile optimized', 'Playback controls', 'Speed adjustment', 'Bookmark support'],
    price: '$69/month',
    link: '/services/voice-email-playback'
  },
  {
    id: 'accessibility-voice-assistant',
    name: 'Accessibility Voice Assistant',
    description: 'Voice-first email interface for users with visual impairments or reading difficulties',
    category: 'AI Services',
    icon: '♿',
    features: ['Screen reader compatible', 'Voice commands', 'Audio navigation', 'Accessibility compliant'],
    price: '$139/month',
    link: '/services/accessibility-voice-assistant'
  },

  // V949 - Relationship Graph
  {
    id: 'email-network-analyzer',
    name: 'Email Network Analyzer',
    description: 'Analyze email communication networks to identify key stakeholders and influence patterns',
    category: 'AI Services',
    icon: '🕸️',
    features: ['Network visualization', 'Centrality scoring', 'Stakeholder identification', 'Influence mapping'],
    price: '$189/month',
    link: '/services/email-network-analyzer'
  },
  {
    id: 'communication-bottleneck-detector',
    name: 'Communication Bottleneck Detector',
    description: 'Detect communication bottlenecks and overloaded nodes in email networks',
    category: 'AI Services',
    icon: '🚦',
    features: ['Bottleneck detection', 'Load analysis', 'Optimization suggestions', 'Performance metrics'],
    price: '$159/month',
    link: '/services/communication-bottleneck-detector'
  },
  {
    id: 'organizational-influence-mapper',
    name: 'Organizational Influence Mapper',
    description: 'Map influence patterns and decision-makers in organizational email networks',
    category: 'AI Services',
    icon: '👥',
    features: ['Influence patterns', 'Decision-maker identification', 'Power dynamics', 'Relationship strength'],
    price: '$219/month',
    link: '/services/organizational-influence-mapper'
  },
  {
    id: 'team-collaboration-graph',
    name: 'Team Collaboration Graph',
    description: 'Visualize team collaboration patterns and optimize cross-team communication',
    category: 'IT Services',
    icon: '🤝',
    features: ['Collaboration visualization', 'Cross-team analysis', 'Communication optimization', 'Team insights'],
    price: '$139/month',
    link: '/services/team-collaboration-graph'
  },
  {
    id: 'stakeholder-engagement-tracker',
    name: 'Stakeholder Engagement Tracker',
    description: 'Track stakeholder engagement levels and optimize communication strategies',
    category: 'Micro SaaS',
    icon: '📈',
    features: ['Engagement scoring', 'Communication frequency', 'Response tracking', 'Strategy optimization'],
    price: '$119/month',
    link: '/services/stakeholder-engagement-tracker'
  },
  {
    id: 'network-density-optimizer',
    name: 'Network Density Optimizer',
    description: 'Optimize network density to improve cross-team communication and collaboration',
    category: 'AI Services',
    icon: '🔗',
    features: ['Density analysis', 'Connectivity improvement', 'Collaboration enhancement', 'Network health'],
    price: '$169/month',
    link: '/services/network-density-optimizer'
  },

  // V950 - Predictive Response
  {
    id: 'optimal-response-timing',
    name: 'Optimal Response Timing',
    description: 'Predict optimal response timing to maximize engagement based on recipient behavior',
    category: 'AI Services',
    icon: '⏰',
    features: ['Timing prediction', 'Behavior analysis', 'Business hours detection', 'Urgency scoring'],
    price: '$129/month',
    link: '/services/optimal-response-timing'
  },
  {
    id: 'response-tone-optimizer',
    name: 'Response Tone Optimizer',
    description: 'Predict optimal response tone based on sender emotional state and email complexity',
    category: 'AI Services',
    icon: '🎭',
    features: ['Tone prediction', 'Emotion detection', 'Complexity analysis', 'Style adaptation'],
    price: '$149/month',
    link: '/services/response-tone-optimizer'
  },
  {
    id: 'email-engagement-predictor',
    name: 'Email Engagement Predictor',
    description: 'Predict engagement levels for different response strategies with confidence scoring',
    category: 'AI Services',
    icon: '📊',
    features: ['Engagement prediction', 'Strategy comparison', 'Confidence scoring', 'A/B testing'],
    price: '$169/month',
    link: '/services/email-engagement-predictor'
  },
  {
    id: 'response-length-optimizer',
    name: 'Response Length Optimizer',
    description: 'Predict optimal response length based on email complexity and emotional tone',
    category: 'AI Services',
    icon: '📏',
    features: ['Length prediction', 'Complexity matching', 'Paragraph optimization', 'Readability scoring'],
    price: '$99/month',
    link: '/services/response-length-optimizer'
  },
  {
    id: 'email-ab-testing-platform',
    name: 'Email A/B Testing Platform',
    description: 'A/B test email response variations to optimize engagement and response rates',
    category: 'Micro SaaS',
    icon: '🔬',
    features: ['A/B testing', 'Variant generation', 'Performance tracking', 'Statistical analysis'],
    price: '$139/month',
    link: '/services/email-ab-testing-platform'
  },
  {
    id: 'predictive-response-suite',
    name: 'Predictive Response Suite',
    description: 'Complete predictive response engine with timing, tone, length, and engagement optimization',
    category: 'AI Services',
    icon: '🚀',
    features: ['Full prediction suite', 'ML-powered', 'Real-time optimization', 'Continuous learning'],
    price: '$249/month',
    link: '/services/predictive-response-suite'
  }
];

services.push(...newServices);
fs.writeFileSync(servicesPath, JSON.stringify(services, null, 2));
console.log(`✅ Added ${newServices.length} services. Total: ${services.length}`);

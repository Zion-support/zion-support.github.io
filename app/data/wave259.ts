import { Service } from './serviceTypes';

// Wave 259: Additional Real AI + Micro-SaaS + IT Services
// Research by OWL Agent — 2026-06-19

export const wave259AiServices: Service[] = [
  {
    id: 'ai-predictive-customer-churn',
    title: 'AI Customer Churn Prediction Platform',
    description: 'Machine learning platform that analyzes customer behavior patterns, usage metrics, and engagement data to predict churn risk before it happens. Includes automated retention campaigns, cohort analysis, and real-time risk scoring dashboards. Reduces churn by up to 35% with proactive intervention workflows.',
    category: 'ai',
    icon: '🧠',
    href: '/services/ai-predictive-customer-churn',
    industry: 'Cross-Industry',
    stage: 'published',
    pricing: { basic: '$149/mo', pro: '$399/mo', enterprise: '$999/mo' },
    contactInfo: { website: '/services/ai-predictive-customer-churn', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'ML-based churn risk scoring (0-100)',
      'Automated retention email workflows',
      'Cohort analysis & segmentation',
      'Real-time dashboard with alerts',
      'CRM integration (Salesforce, HubSpot)',
      'Exportable reports & API access',
      'A/B testing for retention campaigns',
      'Custom model training on your data'
    ],
    benefits: [
      'Reduce customer churn by up to 35%',
      'Increase customer lifetime value',
      'Proactive vs reactive retention',
      'Data-driven decision making',
      'ROI positive within 60 days'
    ]
  },
  {
    id: 'ai-document-intelligence',
    title: 'AI Document Processing & OCR Intelligence',
    description: 'Enterprise-grade document AI platform that extracts, classifies, and processes data from PDFs, scans, images, and forms with 99%+ accuracy. Handles invoices, contracts, receipts, IDs, and custom documents. Includes human-in-the-loop validation, automated data entry, and ERP/accounting system integrations.',
    category: 'ai',
    icon: '📄',
    href: '/services/ai-document-intelligence',
    industry: 'Finance, Legal, Healthcare',
    stage: 'published',
    pricing: { basic: '$199/mo', pro: '$499/mo', enterprise: '$1,299/mo' },
    contactInfo: { website: '/services/ai-document-intelligence', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      '99%+ OCR accuracy on any document type',
      'Auto-classification (50+ document types)',
      'Table & structured data extraction',
      'Human-in-the-loop validation queue',
      'ERP integration (SAP, Oracle, QuickBooks)',
      'Batch processing (10,000+ docs/hour)',
      'Custom document model training',
      'GDPR & SOC 2 compliant processing'
    ],
    benefits: [
      'Reduce manual data entry by 90%',
      'Process documents 50x faster',
      'Eliminate human transcription errors',
      'Scale without hiring more staff',
      'Full audit trail & compliance'
    ]
  },
  {
    id: 'ai-sentiment-analysis',
    title: 'AI Brand Sentiment & Social Listening Suite',
    description: 'Real-time brand monitoring and sentiment analysis across social media, review sites, news, and forums. Uses transformer-based NLP models to detect emotion, intent, and emerging trends. Includes competitive benchmarking, influencer identification, and crisis alert system.',
    category: 'ai',
    icon: '💬',
    href: '/services/ai-sentiment-analysis',
    industry: 'Marketing, PR, Retail',
    stage: 'published',
    pricing: { basic: '$99/mo', pro: '$299/mo', enterprise: '$799/mo' },
    contactInfo: { website: '/services/ai-sentiment-analysis', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Real-time sentiment tracking (positive/negative/neutral)',
      '50+ platform monitoring (Twitter, Reddit, Yelp, etc.)',
      'Emotion detection (joy, anger, fear, trust)',
      'Competitive benchmark dashboard',
      'Influencer & advocate identification',
      'Crisis alert system with escalation',
      'Multi-language support (30+ languages)',
      'Weekly automated insight reports'
    ],
    benefits: [
      'Protect brand reputation in real-time',
      'Identify customer pain points early',
      'Track competitor moves automatically',
      'Turn critics into advocates with fast response',
      'Data-driven marketing strategy'
    ]
  },
  {
    id: 'ai-recommendation-engine',
    title: 'AI Product Recommendation Engine',
    description: 'Personalized recommendation system for e-commerce, content platforms, and SaaS products. Uses collaborative filtering, content-based filtering, and deep learning to deliver relevant suggestions. Proven to increase conversion rates by 25% and average order value by 15%. Easy API integration with any platform.',
    category: 'ai',
    icon: '✨',
    href: '/services/ai-recommendation-engine',
    industry: 'E-commerce, Media, SaaS',
    stage: 'published',
    pricing: { basic: '$199/mo', pro: '$499/mo', enterprise: '$1,199/mo' },
    contactInfo: { website: '/services/ai-recommendation-engine', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Collaborative + content-based filtering',
      'Real-time personalization API',
      'A/B testing built-in',
      'Cross-sell & upsell optimization',
      'New user cold-start handling',
      'Behavioral segmentation',
      'Analytics dashboard with revenue attribution',
      'SDK for React, Vue, Python, Node.js'
    ],
    benefits: [
      'Increase conversion by 25%',
      'Boost average order value by 15%',
      'Reduce bounce rate',
      'Delight customers with relevant content',
      'Plug-and-play integration (under 1 hour)'
    ]
  }
];

export const wave259MicroSaasServices: Service[] = [
  {
    id: 'microsaas-screenshot-api',
    title: 'Screenshot & Visual Testing API',
    description: 'API-first screenshot service for developers. Capture full-page screenshots, compare visual diffs, and integrate visual regression testing into CI/CD pipelines. Supports responsive testing across 50+ device viewports. Used by 2,000+ development teams for automated visual QA.',
    category: 'micro-saas',
    icon: '📸',
    href: '/services/microsaas-screenshot-api',
    industry: 'Developer Tools, QA',
    stage: 'published',
    pricing: { basic: '$29/mo (1K screens)', pro: '$99/mo (10K screens)', enterprise: '$299/mo (50K screens)' },
    contactInfo: { website: '/services/microsaas-screenshot-api', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Full-page & viewport screenshots',
      'Visual diff comparison',
      '50+ device viewport presets',
      'CI/CD integration (GitHub Actions, Jenkins)',
      'PDF generation from HTML',
      'Scheduled screenshot monitoring',
      'Webhook notifications on visual changes',
      'REST API & SDK libraries'
    ],
    benefits: [
      'Catch visual bugs before users do',
      'Save 10+ hours/week on manual QA',
      'Ensure pixel-perfect responsive design',
      'Scale screenshot needs without infrastructure',
      'Pay only for what you use'
    ]
  },
  {
    id: 'microsaas-feature-flags',
    title: 'Feature Flag & Progressive Delivery Platform',
    description: 'Feature flag and progressive delivery platform for development teams. Safely roll out features to subsets of users, run canary deployments, and kill problematic features instantly without redeployment. Includes targeting rules, experimentation, and audit logs.',
    category: 'micro-saas',
    icon: '🔀',
    href: '/services/microsaas-feature-flags',
    industry: 'Developer Tools, SaaS',
    stage: 'published',
    pricing: { basic: '$49/mo', pro: '$149/mo', enterprise: '$399/mo' },
    contactInfo: { website: '/services/microsaas-feature-flags', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Boolean & multivariate feature flags',
      'Progressive rollout (1% to 100%)',
      'User targeting rules (location, plan, custom)',
      'A/B experimentation built-in',
      'Instant kill switch (no redeploy needed)',
      'SDK for 15+ languages',
      'Real-time flag change propagation',
      'Complete audit log & compliance'
    ],
    benefits: [
      'Deploy code without releasing features',
      'Reduce rollback incidents by 80%',
      'Test with real users, not just staging',
      'Ship 3x more frequently with confidence',
      'Free team coordination headaches'
    ]
  }
];

export const wave259ItServices: Service[] = [
  {
    id: 'it-disaster-recovery',
    title: 'Business Continuity & Disaster Recovery Planning',
    description: 'Business continuity and disaster recovery planning service. Includes DR strategy development, automated failover setup, backup architecture review, and quarterly DR testing. Achieve RPO under 15 minutes and RTO under 1 hour for critical systems. Protect against ransomware, hardware failure, and natural disasters.',
    category: 'it',
    icon: '🛡️',
    href: '/services/it-disaster-recovery',
    industry: 'Cross-Industry',
    stage: 'published',
    pricing: { basic: '$2,999 setup', pro: '$5,999 + $499/mo', enterprise: '$14,999 + $1,499/mo' },
    contactInfo: { website: '/services/it-disaster-recovery', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'DR strategy & architecture design',
      'Automated failover configuration',
      'Backup architecture review & optimization',
      'Quarterly DR testing & validation',
      'Ransomware protection & recovery',
      'Multi-region cloud DR setup',
      'DR runbook documentation',
      '24/7 DR readiness monitoring'
    ],
    benefits: [
      'Achieve RPO under 15 min, RTO under 1 hour',
      'Pass compliance audits (SOC 2, HIPAA)',
      'Sleep knowing systems are protected',
      'Recover from ransomware in hours, not weeks',
      'Avoid $3.86M average data breach cost'
    ]
  },
  {
    id: 'it-cloud-migration',
    title: 'Cloud Migration & Modernization Service',
    description: 'End-to-end cloud migration service for businesses moving from on-premises to AWS, Azure, or GCP. Includes workload assessment, migration planning, data transfer, application refactoring, and post-migration optimization. Zero-downtime migration strategy with rollback capability.',
    category: 'it',
    icon: '☁️',
    href: '/services/it-cloud-migration',
    industry: 'Cross-Industry',
    stage: 'published',
    pricing: { basic: '$5,999 (single app)', pro: '$14,999 (multi-app)', enterprise: 'Custom quote' },
    contactInfo: { website: '/services/it-cloud-migration', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Workload assessment & cloud readiness score',
      'Migration strategy (rehost, refactor, rebuild)',
      'Zero-downtime migration execution',
      'Database migration & data synchronization',
      'Application containerization (Docker/K8s)',
      'Post-migration cost optimization',
      'Team training & knowledge transfer',
      '30-day post-migration support'
    ],
    benefits: [
      'Reduce infrastructure costs by 40-60%',
      'Scale elastically on demand',
      'Improve reliability & performance',
      'Modernize legacy applications',
      'Achieve cloud compliance & security'
    ]
  }
];

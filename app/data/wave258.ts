import { Service } from './serviceTypes';

// Wave 258 — Real Micro-SaaS, IT & AI Services
// Research by OWL Agent — 2026-06-19

export const wave258MicroSaasServices: Service[] = [
  {
    id: 'customer-feedback-portal',
    title: 'Customer Feedback & NPS Platform',
    description: 'Collect, analyze, and act on customer feedback with NPS surveys, CSAT scoring, sentiment analysis, and closed-loop workflows. Integrates with your CRM and support tools.',
    category: 'micro-saas',
    icon: '💬',
    href: '/services/customer-feedback-portal',
    industry: 'Customer Success',
    stage: 'published',
    pricing: { basic: '$39/mo (500 responses/mo)', pro: '$99/mo (5,000 responses, NPS + CSAT)', enterprise: '$299/mo (unlimited, API, custom branding)' },
    contactInfo: { website: '/services/customer-feedback-portal', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'NPS, CSAT, and CES survey types with customizable templates',
      'Real-time sentiment analysis using NLP on open-text responses',
      'Closed-loop workflows: auto-assign detractors to CSMs',
      'Integration with Salesforce, HubSpot, Intercom, Zendesk',
      'Trend analysis with cohort comparison and benchmarking',
      'Custom dashboards with role-based views for executives and CSMs',
      'Alert rules: notify when NPS drops below threshold or negative feedback arrives',
      'API and webhooks for embedding feedback widgets in your product'
    ],
    benefits: [
      'Increase NPS by 15+ points with systematic closed-loop follow-up',
      'Reduce churn by 20% by identifying at-risk customers early',
      'Save 10 hours/week on manual feedback collection and analysis',
      'Benchmark your scores against industry standards'
    ]
  },
  {
    id: 'subscription-billing-engine',
    title: 'Subscription Billing & Revenue Management',
    description: 'Full subscription billing platform with proration, dunning management, revenue recognition, and multi-currency support. Handles complex pricing models including usage-based billing.',
    category: 'micro-saas',
    icon: '💳',
    href: '/services/subscription-billing-engine',
    industry: 'FinTech',
    stage: 'published',
    pricing: { basic: '$99/mo (up to $10K MRR)', pro: '$299/mo (up to $100K MRR, usage billing)', enterprise: 'Custom (unlimited MRR, custom logic, SLA)' },
    contactInfo: { website: '/services/subscription-billing-engine', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Flat-rate, tiered, volume, and usage-based pricing models',
      'Automatic proration for mid-cycle plan changes',
      'Dunning management: smart retry logic for failed payments',
      'Revenue recognition automation (ASC 606 compliant)',
      'Multi-currency support with automatic FX conversion',
      'Tax calculation integration (Avalara, TaxJar)',
      'Customer self-service portal for plan changes and payment updates',
      'Revenue analytics: MRR, ARR, churn, LTV, expansion revenue'
    ],
    benefits: [
      'Reduce involuntary churn by 45% with smart dunning',
      'Support any pricing model without engineering changes',
      'Ensure revenue recognition compliance automatically',
      'Scale from $1K to $10M MRR on the same platform'
    ]
  },
  {
    id: 'employee-onboarding-platform',
    title: 'Employee Onboarding & Offboarding Platform',
    description: 'Automate the entire employee lifecycle from offer letter to exit. Digital onboarding checklists, document signing, equipment provisioning, training tracks, and offboarding workflows.',
    category: 'micro-saas',
    icon: '👥',
    href: '/services/employee-onboarding-platform',
    industry: 'HR Tech',
    stage: 'published',
    pricing: { basic: '$49/mo (up to 50 employees)', pro: '$149/mo (up to 250 employees, workflows)', enterprise: '$399/mo (unlimited, SSO, API, custom integrations)' },
    contactInfo: { website: '/services/employee-onboarding-platform', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Digital onboarding checklists with task assignments and deadlines',
      'Electronic document signing (offer letters, NDAs, policies)',
      'Equipment and access provisioning workflows',
      'Training track assignment with progress tracking',
      'Manager and buddy assignment for new hires',
      'Offboarding workflows: access revocation, exit interviews, knowledge transfer',
      'Integration with HRIS (BambooHR, Workday, Gusto), Slack, Google Workspace',
      'Analytics: time-to-productivity, onboarding satisfaction, completion rates'
    ],
    benefits: [
      'Reduce time-to-productivity by 35% with structured onboarding',
      'Ensure 100% compliance with signed documents and policy acknowledgments',
      'Save 8 hours per hire on manual onboarding tasks',
      'Improve new hire retention by 25% with better first-90-day experience'
    ]
  }
];

export const wave258ItServices: Service[] = [
  {
    id: 'disaster-recovery-planning',
    title: 'Disaster Recovery Planning & Implementation',
    description: 'Comprehensive disaster recovery strategy, implementation, and testing. From business impact analysis to failover automation and regular DR drills. Ensure business continuity.',
    category: 'it',
    icon: '🔄',
    href: '/services/disaster-recovery-planning',
    industry: 'Business Continuity',
    stage: 'published',
    pricing: { basic: '$2,999 (DR assessment + plan document)', pro: '$7,499 (implementation, up to 20 servers)', enterprise: 'Custom (multi-site, automated failover, quarterly testing)' },
    contactInfo: { website: '/services/disaster-recovery-planning', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Business impact analysis (BIA) with RTO/RPO determination',
      'DR strategy design: hot standby, warm standby, pilot light',
      'Automated failover implementation with health checks',
      'Data replication setup (synchronous and asynchronous)',
      'DR runbook documentation with step-by-step procedures',
      'Quarterly DR testing with full failover and failback',
      'Cloud-based DR on AWS, Azure, or GCP',
      'Post-test reporting with improvement recommendations'
    ],
    benefits: [
      'Achieve RTO under 15 minutes with automated failover',
      'Reduce DR costs by 50% with cloud-based standby vs. physical DR site',
      'Meet regulatory requirements for business continuity',
      'Test and validate DR procedures quarterly with documented results'
    ]
  },
  {
    id: 'iot-device-management',
    title: 'IoT Device Management & Monitoring Platform',
    description: 'Manage millions of IoT devices at scale with remote provisioning, firmware updates, real-time monitoring, and alerting. Supports MQTT, CoAP, and HTTP protocols.',
    category: 'it',
    icon: '📡',
    href: '/services/iot-device-management',
    industry: 'IoT',
    stage: 'published',
    pricing: { basic: '$199/mo (1,000 devices)', pro: '$599/mo (10,000 devices, OTA updates)', enterprise: '$1,999/mo (100K+ devices, custom protocols, SLA)' },
    contactInfo: { website: '/services/iot-device-management', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Device provisioning and certificate-based authentication',
      'Over-the-air (OTA) firmware updates with rollback capability',
      'Real-time device health monitoring and telemetry ingestion',
      'Rule engine for automated alerts and actions',
      'Device grouping, tagging, and hierarchical organization',
      'Data visualization with custom dashboards and time-series charts',
      'Integration with AWS IoT, Azure IoT Hub, Google Cloud IoT',
      'API for custom device integrations and third-party data sources'
    ],
    benefits: [
      'Manage 10x more devices with the same team through automation',
      'Reduce device downtime by 60% with proactive monitoring',
      'Deploy firmware updates to thousands of devices in minutes',
      'Ensure device security with certificate-based authentication'
    ]
  },
  {
    id: 'cloud-cost-optimization',
    title: 'Cloud Cost Optimization & FinOps Services',
    description: 'Comprehensive cloud cost optimization covering rightsizing, reserved instance planning, waste elimination, and FinOps culture implementation. Average 35% cost reduction.',
    category: 'it',
    icon: '💰',
    href: '/services/cloud-cost-optimization',
    industry: 'Cloud Operations',
    stage: 'published',
    pricing: { basic: '$1,499 (assessment + recommendations)', pro: '$3,999 (implementation, AWS/Azure/GCP)', enterprise: 'Custom (ongoing FinOps, multi-cloud, chargeback)' },
    contactInfo: { website: '/services/cloud-cost-optimization', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Comprehensive cloud spend analysis across all accounts and services',
      'Rightsizing recommendations for compute, storage, and databases',
      'Reserved instance and savings plan optimization',
      'Idle resource identification and automated cleanup',
      'Tagging strategy implementation for cost allocation',
      'FinOps dashboard with budget alerts and forecasting',
      'Chargeback/showback reporting by team, project, and environment',
      'Ongoing optimization with monthly reviews and recommendations'
    ],
    benefits: [
      'Reduce cloud spend by 35% on average within 90 days',
      'Eliminate waste from idle resources and over-provisioning',
      'Implement FinOps practices for continuous cost optimization',
      'Provide visibility into cloud costs for engineering and finance teams'
    ]
  }
];

export const wave258AiServices: Service[] = [
  {
    id: 'ai-content-moderation',
    title: 'AI Content Moderation & Safety Platform',
    description: 'Real-time content moderation using AI to detect toxic content, spam, NSFW material, and policy violations. Processes text, images, and video with 98% accuracy.',
    category: 'ai',
    icon: '🛡️',
    href: '/services/ai-content-moderation',
    industry: 'Trust & Safety',
    stage: 'published',
    pricing: { basic: '$149/mo (50K items/mo)', pro: '$449/mo (500K items, image + video)', enterprise: '$1,299/mo (unlimited, custom rules, human review queue)' },
    contactInfo: { website: '/services/ai-content-moderation', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Text moderation: toxicity, hate speech, spam, PII detection',
      'Image moderation: NSFW, violence, gore, drugs, weapons detection',
      'Video moderation with frame-by-frame analysis',
      'Custom moderation rules and blocklists for your community guidelines',
      'Human review queue for edge cases with priority scoring',
      'Real-time API with sub-200ms response time',
      'Multi-language support: 40+ languages for text moderation',
      'Analytics dashboard: moderation volume, accuracy, false positive rate'
    ],
    benefits: [
      'Protect your community from harmful content in real-time',
      'Reduce moderation costs by 80% vs. manual review teams',
      'Scale moderation to millions of items without adding headcount',
      'Maintain 98% accuracy with continuous model improvement'
    ]
  },
  {
    id: 'ai-predictive-maintenance',
    title: 'AI Predictive Maintenance for Industrial Equipment',
    description: 'Predict equipment failures before they happen using sensor data and machine learning. Reduce unplanned downtime by 70% and extend asset life by 25%.',
    category: 'ai',
    icon: '⚙️',
    href: '/services/ai-predictive-maintenance',
    industry: 'Industrial IoT',
    stage: 'published',
    pricing: { basic: '$499/mo (10 machines)', pro: '$1,499/mo (100 machines, custom models)', enterprise: 'Custom (unlimited, edge deployment, digital twin)' },
    contactInfo: { website: '/services/ai-predictive-maintenance', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Sensor data ingestion: vibration, temperature, pressure, current',
      'Anomaly detection with unsupervised learning on normal operating patterns',
      'Failure prediction with time-to-failure estimates and confidence scores',
      'Root cause analysis for detected anomalies',
      'Maintenance scheduling optimization based on predicted failures',
      'Integration with CMMS (SAP PM, Maximo, Fiix)',
      'Edge deployment for real-time inference on the factory floor',
      'Digital twin visualization of equipment health'
    ],
    benefits: [
      'Reduce unplanned downtime by 70% with early failure detection',
      'Extend equipment life by 25% with optimized maintenance timing',
      'Save $500K+ annually per production line in avoided downtime',
      'Shift from reactive to predictive maintenance operations'
    ]
  },
  {
    id: 'ai-voice-agent-platform',
    title: 'AI Voice Agent Platform for Customer Service',
    description: 'Build and deploy AI voice agents that handle customer calls naturally. Supports inbound and outbound calls with real-time transcription, intent detection, and CRM integration.',
    category: 'ai',
    icon: '🎙️',
    href: '/services/ai-voice-agent-platform',
    industry: 'Conversational AI',
    stage: 'published',
    pricing: { basic: '$299/mo (500 minutes)', pro: '$799/mo (5,000 minutes, outbound)', enterprise: '$2,499/mo (unlimited, custom voices, API)' },
    contactInfo: { website: '/services/ai-voice-agent-platform', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Natural language understanding with 95%+ intent accuracy',
      'Real-time speech-to-text and text-to-speech with low latency',
      'Multi-language support: 25+ languages and accents',
      'CRM integration: Salesforce, HubSpot, Zendesk screen pops',
      'Call routing and escalation to human agents when needed',
      'Outbound campaign management with scheduling and compliance',
      'Real-time sentiment detection and agent coaching',
      'Call analytics: duration, resolution rate, sentiment trends'
    ],
    benefits: [
      'Handle 80% of routine calls without human intervention',
      'Reduce call center costs by 60% while improving availability',
      'Provide 24/7 customer support in multiple languages',
      'Increase customer satisfaction with instant, accurate responses'
    ]
  }
];

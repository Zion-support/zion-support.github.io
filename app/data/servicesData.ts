// Service data for AI and IT solutions
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  pricing: {
    basic: string;
    pro: string;
    enterprise: string;
  }
  contactInfo: {
    website: string;
    email: string;
    phone: string;
  }
  icon: string;
  href: string;
  popular?: boolean;
  category: 'ai' | 'it' | 'cloud' | 'security' | 'data' | 'automation';
}

export const aiServices: Service[] = [
  {
    id: 'ai-analytics',
    title: 'AI Analytics & BI',
    description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
    features: [
      'Real-time data processing',
      'Predictive analytics',
      'Custom dashboards',
      'Automated reporting',
      'Machine learning models'
    ],
    benefits: [
      'Increased efficiency',
      'Better decision making',
      'Cost reduction',
      'Competitive advantage'
    ],
    pricing: {
      basic: '299',
      pro: '599',
      enterprise: '1299'
    },
    contactInfo: {
      website: '/data-analytics',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📊',
    href: '/data-analytics',
    popular: true,
    category: 'ai'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description: 'Streamline your business processes with intelligent automation solutions.',
    features: [
      'Workflow automation',
      'Document processing',
      'Email automation',
      'Task scheduling',
      'Process optimization'
    ],
    benefits: [
      'Time savings',
      'Reduced errors',
      'Scalable processes',
      'Improved productivity'
    ],
    pricing: {
      basic: '199',
      pro: '399',
      enterprise: '899'
    },
    contactInfo: {
      website: '/ai-services/process-automation',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🤖',
    href: '/ai-services/process-automation',
    category: 'ai'
  },
  {
    id: 'ai-customer-support',
    title: 'AI Customer Support',
    description: '24/7 AI-powered customer service with intelligent ticket routing, auto-resolution, and sentiment analysis.',
    features: [
      'AI chatbot with human handoff',
      'Smart ticket routing & prioritization',
      'Sentiment analysis & escalation',
      'Knowledge base auto-sync',
      'Multi-channel support (email, chat, social)'
    ],
    benefits: [
      'Round-the-clock support availability',
      'Reduced support costs by up to 60%',
      'Improved customer satisfaction (CSAT)',
      'Faster resolution times'
    ],
    pricing: {
      basic: '499',
      pro: '999',
      enterprise: '2499'
    },
    contactInfo: {
      website: '/ai-services/ai-customer-support',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '💬',
    href: '/ai-services/ai-customer-support',
    popular: true,
    category: 'ai'
  },
  {
    id: 'ai-content-generation',
    title: 'AI Content Generation',
    description: 'Generate high-quality blog posts, social media content, ad copy, product descriptions, and email campaigns powered by advanced LLMs.',
    features: [
      'Blog post & article generation',
      'Social media content creation',
      'SEO-optimized copywriting',
      'Ad copy & landing page text',
      'Brand voice customization'
    ],
    benefits: [
      '10x content production speed',
      'Consistent brand messaging',
      'SEO-optimized output',
      'Reduced content creation costs'
    ],
    pricing: {
      basic: '149',
      pro: '349',
      enterprise: '799'
    },
    contactInfo: {
      website: '/ai-services/ai-content-generation',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '✍️',
    href: '/ai-services/ai-content-generation',
    category: 'ai'
  },
  {
    id: 'ai-sales-intelligence',
    title: 'AI Sales Intelligence',
    description: 'Boost revenue with AI-driven lead scoring, pipeline prediction, deal insights, and automated outreach sequencing.',
    features: [
      'Predictive lead scoring (0-100)',
      'Sales pipeline forecasting',
      'Deal risk detection & alerts',
      'Automated email sequences',
      'Competitive intelligence briefs'
    ],
    benefits: [
      'Higher conversion rates',
      'Shorter sales cycles',
      'Data-driven deal prioritization',
      'Revenue forecasting accuracy'
    ],
    pricing: {
      basic: '399',
      pro: '799',
      enterprise: '1999'
    },
    contactInfo: {
      website: '/ai-services/ai-sales-intelligence',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📈',
    href: '/ai-services/ai-sales-intelligence',
    popular: true,
    category: 'ai'
  },
  {
    id: 'ai-fraud-detection',
    title: 'AI Fraud Detection',
    description: 'Real-time fraud prevention using ML anomaly detection, behavioral analysis, and rule-based scoring for transactions and user activity.',
    features: [
      'Real-time transaction scoring',
      'Behavioral biometrics analysis',
      'Anomaly pattern detection',
      'Chargeback prediction & prevention',
      'AML/KYC compliance screening'
    ],
    benefits: [
      '99.5% fraud detection accuracy',
      'Reduced false positives by 60%',
      'Regulatory compliance automation',
      'Real-time alerting & blocking'
    ],
    pricing: {
      basic: '599',
      pro: '1299',
      enterprise: '3499'
    },
    contactInfo: {
      website: '/ai-services/ai-fraud-detection',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔐',
    href: '/ai-services/ai-fraud-detection',
    category: 'ai'
  },
  {
    id: 'ai-hr-assistant',
    title: 'AI HR Assistant',
    description: 'Intelligent HR automation for recruitment, onboarding, employee engagement, and policy Q&A using conversational AI.',
    features: [
      'AI resume screening & ranking',
      'Automated interview scheduling',
      'Employee onboarding chatbot',
      'Policy Q&A knowledge base',
      'Engagement & sentiment tracking'
    ],
    benefits: [
      '70% faster hiring pipeline',
      'Reduced HR administrative load',
      'Improved candidate experience',
      'Better employee retention insights'
    ],
    pricing: {
      basic: '299',
      pro: '699',
      enterprise: '1599'
    },
    contactInfo: {
      website: '/ai-services/ai-hr-assistant',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '👥',
    href: '/ai-services/ai-hr-assistant',
    category: 'ai'
  },
  {
    id: 'ai-supply-chain',
    title: 'AI Supply Chain Optimization',
    description: 'Predictive demand forecasting, inventory optimization, and supplier risk management powered by machine learning.',
    features: [
      'Demand forecasting (ARIMA + ML)',
      'Inventory optimization & reorder points',
      'Supplier risk scoring & monitoring',
      'Logistics route optimization',
      'Real-time shipment tracking'
    ],
    benefits: [
      '30% reduction in inventory costs',
      'Improved demand forecast accuracy by 45%',
      'Proactive supplier risk mitigation',
      'Faster delivery times'
    ],
    pricing: {
      basic: '449',
      pro: '899',
      enterprise: '2199'
    },
    contactInfo: {
      website: '/ai-services/ai-supply-chain',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📦',
    href: '/ai-services/ai-supply-chain',
    category: 'ai'
  },
  {
    id: 'ai-voice-assistant',
    title: 'AI Voice Assistant',
    description: 'Enterprise-grade voice AI with natural language understanding, multi-language support, and seamless CRM integration.',
    features: [
      'Natural language voice processing',
      'Multi-language support (50+ languages)',
      'CRM & ERP integration',
      'Real-time transcription & analytics',
      'Custom wake words & voice branding'
    ],
    benefits: [
      'Handle 80% of routine calls automatically',
      '24/7 multilingual support',
      'Seamless CRM workflow integration',
      'Reduced call center costs'
    ],
    pricing: {
      basic: '349',
      pro: '799',
      enterprise: '1999'
    },
    contactInfo: {
      website: '/ai-services/ai-voice-assistant',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🎙️',
    href: '/ai-services/ai-voice-assistant',
    category: 'ai'
  },
  {
    id: 'ai-email-marketing',
    title: 'AI Email Marketing',
    description: 'Intelligent email campaigns with AI-powered subject lines, send-time optimization, dynamic content, and advanced segmentation.',
    features: [
      'AI subject line & copy generator',
      'Send-time optimization per subscriber',
      'Dynamic content personalization',
      'Advanced behavioral segmentation',
      'A/B/n automated testing'
    ],
    benefits: [
      '35% higher open rates',
      '50% higher click-through rates',
      'Automated campaign workflows',
      'Revenue attribution tracking'
    ],
    pricing: {
      basic: '199',
      pro: '449',
      enterprise: '999'
    },
    contactInfo: {
      website: '/ai-services/ai-email-marketing',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📧',
    href: '/ai-services/ai-email-marketing',
    category: 'ai'
  },
  {
    id: 'ai-video-analytics',
    title: 'AI Video Analytics',
    description: 'Real-time video content analysis for security, retail insights, and operational intelligence using computer vision.',
    features: [
      'Real-time object detection & tracking',
      'People counting & heatmaps',
      'License plate recognition (ANPR)',
      'Behavioral anomaly detection',
      'Privacy-blur compliance mode'
    ],
    benefits: [
      'Enhanced security monitoring',
      'Retail customer behavior insights',
      'Automated incident detection',
      'Regulatory compliance (GDPR/CCPA)'
    ],
    pricing: {
      basic: '549',
      pro: '1199',
      enterprise: '2999'
    },
    contactInfo: {
      website: '/ai-services/ai-video-analytics',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🎥',
    href: '/ai-services/ai-video-analytics',
    category: 'ai'
  },
  {
    id: 'ai-compliance',
    title: 'AI Compliance & Regulatory',
    description: 'Automated compliance monitoring, risk assessment, and audit trail management for GDPR, HIPAA, SOC 2, and more.',
    features: [
      'Automated policy generation',
      'Real-time compliance monitoring',
      'Risk assessment scoring',
      'Audit trail & reporting',
      'Regulatory change alerts'
    ],
    benefits: [
      'Continuous compliance assurance',
      'Reduced audit preparation time by 70%',
      'Automated risk scoring',
      'Multi-framework coverage'
    ],
    pricing: {
      basic: '449',
      pro: '999',
      enterprise: '2499'
    },
    contactInfo: {
      website: '/ai-services/ai-compliance',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🛡️',
    href: '/ai-services/ai-compliance',
    category: 'ai'
  },
  {
    id: 'ai-computer-vision',
    title: 'AI Computer Vision',
    description: 'Image recognition, object detection, quality inspection, and visual search powered by deep learning models trained on your domain data.',
    features: ['Image classification & object detection', 'Visual quality inspection & defect detection', 'OCR + layout analysis', 'Visual search & similarity matching', 'Edge deployment for real-time inference'],
    benefits: ['Automated visual inspection at scale', '99%+ defect detection accuracy', 'Reduce QC labor costs by 80%', 'Real-time inference on edge devices'],
    pricing: { basic: '449', pro: '899', enterprise: '2199' },
    contactInfo: { website: '/ai-services/ai-computer-vision', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '👁️',
    href: '/ai-services/ai-computer-vision',
    category: 'ai'
  },
  {
    id: 'ai-knowledge-management',
    title: 'AI Knowledge Management',
    description: 'Centralize organizational knowledge with AI-powered semantic search, auto-tagging, content gap detection, and intelligent Q&A across your document corpus.',
    features: ['Semantic search across all documents', 'Auto-tagging & intelligent categorization', 'Knowledge gap detection', 'AI Q&A over internal documents', 'Content lifecycle & freshness monitoring'],
    benefits: ['Reduce time-to-information by 75%', 'Eliminate duplicate content creation', 'Preserve institutional knowledge', 'Automated freshness alerts'],
    pricing: { basic: '199', pro: '499', enterprise: '1199' },
    contactInfo: { website: '/ai-services/ai-knowledge-management', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🧠',
    href: '/ai-services/ai-knowledge-management',
    popular: true,
    category: 'ai'
  },
  {
    id: 'ai-testing-qa',
    title: 'AI Testing & Quality Assurance',
    description: 'Automated test generation, visual regression testing, and AI-powered bug detection that adapts to your application code and learns from failures.',
    features: ['Auto-generated test cases from user journeys', 'Visual regression testing across browsers', 'AI bug detection with root-cause suggestions', 'Performance testing & bottleneck analysis', 'Self-healing test scripts'],
    benefits: ['Reduce QA effort by 70%', 'Catch regressions before production', 'Self-healing tests reduce maintenance', 'Cross-browser visual consistency'],
    pricing: { basic: '349', pro: '749', enterprise: '1799' },
    contactInfo: { website: '/ai-services/ai-testing-qa', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🧪',
    href: '/ai-services/ai-testing-qa',
    category: 'ai'
  },
  {
    id: 'ai-translation-services',
    title: 'AI Translation & Localization',
    description: 'Enterprise translation engine with 100+ language support, context-aware Neural MT, terminology management, and human review workflows.',
    features: ['100+ language Neural Machine Translation', 'Domain-specific model fine-tuning', 'Translation memory & glossary integration', 'Quality scoring & consistency checks', 'API integration for real-time translation'],
    benefits: ['80% reduction in translation costs', '10x faster content localization', 'Brand-consistent terminology', 'Built-in QA workflow'],
    pricing: { basic: '249', pro: '599', enterprise: '1499' },
    contactInfo: { website: '/ai-services/ai-translation-services', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🌐',
    href: '/ai-services/ai-translation-services',
    category: 'ai'
  },
  {
    id: 'ai-employee-experience',
    title: 'AI Employee Experience Platform',
    description: 'End-to-end employee lifecycle automation from AI-powered onboarding to performance management, engagement tracking, and retention prediction.',
    features: ['Automated onboarding workflow orchestration', 'Personalized training & development paths', 'Sentiment & engagement tracking', 'AI-powered retention risk prediction', 'Buddy & mentor matching algorithms'],
    benefits: ['50% faster onboarding to productivity', 'Proactive retention risk detection', 'Eliminate IT/HR coordination overhead', 'Personalized growth plans per employee'],
    pricing: { basic: '299', pro: '699', enterprise: '1599' },
    contactInfo: { website: '/ai-services/ai-employee-experience', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🤝',
    href: '/ai-services/ai-employee-experience',
    category: 'ai'
  },
  {
    id: 'ai-document-intelligence',
    title: 'AI Document Intelligence',
    description: 'End-to-end intelligent document processing with 99%+ accuracy OCR, classification, field-level data extraction, and automated workflow triggers.',
    features: ['99%+ accuracy AI-powered OCR', 'Intelligent document classification', 'Field-level structured data extraction', 'ERP/CRM validation & reconciliation', 'Automated approval workflow triggers'],
    benefits: ['Eliminate 90% of manual data entry', 'Process documents 50x faster', 'ERP-ready structured output', 'Immutable audit trail'],
    pricing: { basic: '449', pro: '999', enterprise: '2499' },
    contactInfo: { website: '/ai-services/ai-document-intelligence', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📄',
    href: '/ai-services/ai-document-intelligence',
    popular: true,
    category: 'ai'
  },
  {
    id: 'ai-video-generation',
    title: 'AI Video Generation & Editing',
    description: 'Create professional videos from text prompts with voiceover, B-roll, transitions, and brand styling — produce enterprise-grade content in minutes.',
    features: ['Text-to-video AI engine with scene generation', 'AI voiceover in 50+ languages with subtitles', 'Brand kit — colors, logos, auto-applied', 'Video editing timeline with AI-assisted cuts', 'Multi-platform export — YouTube, TikTok, Reels', 'Template marketplace — 500+ pre-built designs'],
    benefits: ['Reduce video production time by 90%', 'Eliminate need for video editors for routine content', '50+ language voiceover', 'Consistent brand presentation', 'Multi-format export', 'Built-in editing suite'],
    pricing: { basic: '59', pro: '199', enterprise: '499' },
    contactInfo: { website: '/ai-services/ai-video-generation', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🎬',
    href: '/ai-services/ai-video-generation',
    category: 'ai'
  },
  {
    id: 'ai-voice-cloning',
    title: 'AI Voice Cloning & Synthesis',
    description: 'Clone any voice with 30 seconds of audio for voiceovers, podcasts, audiobooks, and interactive voice applications.',
    features: ['Voice cloning from 30s audio sample', 'Emotion and tone control — adjust pitch, rate, emphasis', 'Real-time audio streaming for voice assistants', 'Multi-speaker conversation generation', 'Studio-quality audio with noise reduction', 'Ethical consent tracking and ownership verification'],
    benefits: ['Studio-quality from 30 seconds of audio', '50+ languages and dialects', 'Real-time streaming capability', 'Reduce voice talent costs by 80%', 'Ethical consent management', 'Custom emotion and tone controls'],
    pricing: { basic: '79', pro: '249', enterprise: '599' },
    contactInfo: { website: '/ai-services/ai-voice-cloning', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🗣️',
    href: '/ai-services/ai-voice-cloning',
    category: 'ai'
  },
  {
    id: 'ai-lead-generation',
    title: 'AI Lead Generation & Enrichment',
    description: 'Automatically discover, qualify, and enrich B2B leads with web scraping, firmographic scoring, and intent signal detection.',
    features: ['Automated lead discovery from public sources', 'Firmographic enrichment — revenue, tech stack, contacts', 'Intent signal — hiring, mentions, website visits', 'CRM auto-sync to Salesforce, HubSpot, Pipedrive', 'Personalized outreach — email, LinkedIn, sequences', 'ML-powered lead quality scoring and ranking'],
    benefits: ['5x more qualified leads per month', 'Save 15 hours/week on enrichment', 'Intent targeting increases conversion 3x', 'Seamless CRM integration', 'ML-powered scoring models', 'Personalized outreach at scale'],
    pricing: { basic: '149', pro: '449', enterprise: '999' },
    contactInfo: { website: '/ai-services/ai-lead-generation', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🎯',
    href: '/ai-services/ai-lead-generation',
    popular: true,
    category: 'ai'
  },
  {
    id: 'ai-presentation-maker',
    title: 'AI Presentation & Pitch Deck Maker',
    description: 'Generate polished presentations, pitch decks, and reports from outlines with data visualization, templates, and speaker notes.',
    features: ['Document-to-slide conversion from any file', 'Smart data visualization — auto charts, graphs', 'AI-generated speaker notes and timing cues', 'Brand-consistent — apply company guidelines', 'Multi-format export — PowerPoint, Google Slides, PDF', 'Real-time collaboration with team editing'],
    benefits: ['Create presentations 10x faster', 'Professional design without designers', 'Data-driven visualizations', 'Brand consistency across teams', 'Speaker notes automatically included', 'Multi-format export options'],
    pricing: { basic: '39', pro: '129', enterprise: '349' },
    contactInfo: { website: '/ai-services/ai-presentation-maker', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📊',
    href: '/ai-services/ai-presentation-maker',
    category: 'ai'
  },
  {
    id: 'ai-chatbot-builder-pro',
    title: 'AI Chatbot Builder Pro',
    description: 'Build intelligent, multi-channel chatbots with RAG-powered knowledge bases, workflow automation, and seamless human handoff.',
    features: ['RAG-powered knowledge base from your docs', 'Multi-channel — website, WhatsApp, Slack, Teams', 'Visual drag-and-drop flow designer', 'Smart human handoff with context transfer', 'Analytics — resolution rates, satisfaction, trends', 'Continuous learning from unanswered questions'],
    benefits: ['70%+ automatic resolution rate', 'Multi-channel from single builder', 'Continuous self-improvement', 'Seamless human handoff', 'Built-in analytics dashboard', 'No-code visual flow designer'],
    pricing: { basic: '99', pro: '299', enterprise: '699' },
    contactInfo: { website: '/ai-services/ai-chatbot-builder-pro', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🤖',
    href: '/ai-services/ai-chatbot-builder-pro',
    category: 'ai'
  },
  {
    id: 'ai-code-reviewer-pro',
    title: 'AI Code Reviewer Pro',
    description: 'Automated code review that catches bugs, security issues, performance problems, and style violations before production.',
    features: ['Deep code analysis across 50+ languages', 'OWASP Top 10 vulnerability scanning', 'Performance suggestions with benchmarks', 'Team coding standards enforcement', 'PR integration — GitHub, GitLab, Bitbucket', 'Custom rules engine for team-specific checks'],
    benefits: ['Catch 80% of bugs before production', 'Automated security vulnerability scanning', 'PR integration with inline comments', 'Team custom rules enforcement', 'Reduces senior review time by 60%', 'Supports 50+ programming languages'],
    pricing: { basic: '69', pro: '199', enterprise: '499' },
    contactInfo: { website: '/ai-services/ai-code-reviewer-pro', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🔍',
    href: '/ai-services/ai-code-reviewer-pro',
    category: 'ai'
  }
];

export const itServices: Service[] = [
  {
    id: 'cloud-migration',
    title: 'Cloud Migration & Modernization',
    description: 'Seamless migration to AWS, Azure, or GCP with zero downtime, cost optimization, and infrastructure-as-code automation.',
    features: [
      'Multi-cloud migration planning',
      'Zero-downtime migration execution',
      'Cost optimization & right-sizing',
      'Infrastructure-as-Code (Terraform/Pulumi)',
      'Post-migration performance tuning'
    ],
    benefits: [
      'Up to 40% cost savings on cloud spend',
      '99.99% uptime SLA during migration',
      'Eliminate technical debt',
      'Scalable cloud-native architecture'
    ],
    pricing: {
      basic: '1999',
      pro: '4999',
      enterprise: '9999'
    },
    contactInfo: {
      website: '/it-services/cloud-migration',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '☁️',
    href: '/it-services/cloud-migration',
    popular: true,
    category: 'cloud'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Penetration Testing',
    description: 'Comprehensive security assessments, vulnerability management, and incident response to protect your digital assets.',
    features: [
      'Network & web application penetration testing',
      'Vulnerability scanning & remediation',
      'Security awareness training',
      'Incident response & forensics',
      'Compliance audits (SOC 2, ISO 27001)'
    ],
    benefits: [
      'Identify critical vulnerabilities before attackers',
      'Meet regulatory compliance requirements',
      'Reduce breach risk by 90%',
      '24/7 threat monitoring'
    ],
    pricing: {
      basic: '2499',
      pro: '5999',
      enterprise: '14999'
    },
    contactInfo: {
      website: '/it-services/cybersecurity',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔒',
    href: '/it-services/cybersecurity',
    popular: true,
    category: 'security'
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering & ETL Pipelines',
    description: 'Build robust data pipelines, ETL/ELT workflows, and data lake architectures for real-time and batch processing.',
    features: [
      'ETL/ELT pipeline design & deployment',
      'Data lake & warehouse architecture',
      'Real-time stream processing (Kafka, Spark)',
      'Data quality monitoring & validation',
      'Schema evolution & versioning'
    ],
    benefits: [
      'Unified data platform',
      '50% faster data delivery',
      'Automated data quality checks',
      'Scalable to petabyte volumes'
    ],
    pricing: {
      basic: '2999',
      pro: '6999',
      enterprise: '15999'
    },
    contactInfo: {
      website: '/it-services/data-engineering',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔧',
    href: '/it-services/data-engineering',
    category: 'data'
  },
  {
    id: 'devops-cicd',
    title: 'DevOps & CI/CD Automation',
    description: 'End-to-end CI/CD pipelines, container orchestration, GitOps workflows, and site reliability engineering.',
    features: [
      'Automated CI/CD pipeline setup (GitHub Actions, GitLab CI)',
      'Kubernetes orchestration & management',
      'Infrastructure as Code (Terraform, Ansible)',
      '24/7 site reliability monitoring',
      'Blue-green & canary deployments'
    ],
    benefits: [
      'Deploy 10x faster with zero downtime',
      'Automated testing & quality gates',
      'Reduced operational overhead by 60%',
      'Self-healing infrastructure'
    ],
    pricing: {
      basic: '1999',
      pro: '4499',
      enterprise: '9999'
    },
    contactInfo: {
      website: '/it-services/devops-cicd',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '⚙️',
    href: '/it-services/devops-cicd',
    popular: true,
    category: 'automation'
  },
  {
    id: 'saas-development',
    title: 'SaaS Product Development',
    description: 'Full-stack SaaS development from concept to launch — MVP, scaling, and product-market fit optimization.',
    features: [
      'MVP rapid prototyping (4-6 weeks)',
      'Full-stack architecture design',
      'User authentication & RBAC',
      'Payment integration (Stripe, Paddle)',
      'Analytics & usage tracking built-in'
    ],
    benefits: [
      'Go from idea to launch in weeks',
      'Scalable multi-tenant architecture',
      'Built-in billing & subscription management',
      'Post-launch support & iteration'
    ],
    pricing: {
      basic: '4999',
      pro: '12999',
      enterprise: '29999'
    },
    contactInfo: {
      website: '/it-services/saas-development',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🚀',
    href: '/it-services/saas-development',
    category: 'it'
  },
  {
    id: 'api-integration',
    title: 'API Development & Integration',
    description: 'Custom API design, development, and integration — REST, GraphQL, Webhooks, and third-party service connectors.',
    features: [
      'RESTful & GraphQL API design',
      'Third-party API integrations',
      'Webhook architecture & event systems',
      'API gateway & rate limiting',
      'API documentation & versioning (OpenAPI/Swagger)'
    ],
    benefits: [
      'Seamless system interoperability',
      'Reduced development time by 50%',
      'Future-proof API architecture',
      'Automated API documentation'
    ],
    pricing: {
      basic: '1499',
      pro: '3999',
      enterprise: '8999'
    },
    contactInfo: {
      website: '/it-services/api-integration',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔗',
    href: '/it-services/api-integration',
    category: 'it'
  },
  {
    id: 'database-optimization',
    title: 'Database Optimization & Management',
    description: 'Database performance tuning, query optimization, migration, and high-availability clustering for PostgreSQL, MySQL, MongoDB, and more.',
    features: [
      'Query performance analysis & optimization',
      'Database schema design & migration',
      'High-availability & replication setup',
      'Automated backup & disaster recovery',
      'Index optimization & caching strategies'
    ],
    benefits: [
      'Up to 10x query performance improvement',
      'Zero data loss with automated backups',
      '99.99% database uptime',
      'Cost-efficient resource utilization'
    ],
    pricing: {
      basic: '1499',
      pro: '3499',
      enterprise: '7999'
    },
    contactInfo: {
      website: '/it-services/database-optimization',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🗄️',
    href: '/it-services/database-optimization',
    category: 'data'
  },
  {
    id: 'monitoring-observability',
    title: 'Monitoring & Observability',
    description: 'Full-stack monitoring with real-time dashboards, alerting, log aggregation, and distributed tracing for your entire infrastructure.',
    features: [
      'Real-time dashboards & custom metrics',
      'Proactive alerting (PagerDuty, OpsGenie)',
      'Centralized log aggregation (ELK/Loki)',
      'Distributed tracing (Jaeger, OpenTelemetry)',
      'Uptime monitoring from 20+ global locations'
    ],
    benefits: [
      'Mean time to detection (MTTD) reduced by 80%',
      'Proactive issue resolution',
      'Single pane of glass for all services',
      'Capacity planning insights'
    ],
    pricing: {
      basic: '999',
      pro: '2499',
      enterprise: '5999'
    },
    contactInfo: {
      website: '/it-services/monitoring-observability',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📡',
    href: '/it-services/monitoring-observability',
    category: 'automation'
  },
  {
    id: 'it-consulting',
    title: 'IT Strategy & Digital Transformation Consulting',
    description: 'Strategic technology consulting — digital transformation roadmaps, tech stack evaluation, and CTO-as-a-service.',
    features: [
      'Technology stack assessment & recommendations',
      'Digital transformation roadmap',
      'CTO-as-a-service (fractional)',
      'Vendor evaluation & selection',
      'Technical due diligence for M&A'
    ],
    benefits: [
      'Data-driven technology decisions',
      'Reduce wasted spend on wrong tools',
      'Accelerate digital transformation by 2x',
      'Access to C-level technical expertise'
    ],
    pricing: {
      basic: '2499',
      pro: '5999',
      enterprise: '14999'
    },
    contactInfo: {
      website: '/it-services/it-consulting',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '💡',
    href: '/it-services/it-consulting',
    category: 'it'
  },
  {
    id: 'accessibility-compliance',
    title: 'Accessibility & WCAG Compliance',
    description: 'Automated WCAG 2.2 auditing, AI-powered remediation suggestions, screen reader simulation, and continuous accessibility compliance monitoring.',
    features: ['WCAG 2.2 AA/AAA automated auditing', 'Screen reader simulation & navigation testing', 'Auto-generated remediation code snippets', 'Color contrast & typography analysis', 'Continuous CI/CD accessibility gates'],
    benefits: ['Reduce ADA lawsuit risk substantially', 'Improve UX for all users', 'Automated compliance reporting', 'Proactive CI/CD testing integration'],
    pricing: { basic: '999', pro: '2499', enterprise: '5999' },
    contactInfo: { website: '/it-services/accessibility-compliance', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '♿',
    href: '/it-services/accessibility-compliance',
    category: 'it'
  },
  {
    id: 'cloud-cost-optimization-service',
    title: 'Cloud Cost Optimization (FinOps)',
    description: 'ML-driven cloud cost optimization across AWS, Azure, and GCP with right-sizing recommendations, reserved instance optimization, and anomaly detection.',
    features: ['Multi-cloud unified cost visibility', 'ML-driven instance right-sizing', 'Reserved instance & savings plan optimizer', 'Idle resource detection & cleanup', 'Showback/chargeback automation'],
    benefits: ['Average 35% cloud cost reduction', 'Cross-cloud spend optimization', 'Real-time anomaly detection alerts', 'Executive-ready FinOps dashboards'],
    pricing: { basic: '499', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/it-services/cloud-cost-optimization', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '💰',
    href: '/it-services/cloud-cost-optimization',
    category: 'cloud'
  },
  {
    id: 'supply-chain-management-service',
    title: 'Supply Chain Management Platform',
    description: 'End-to-end supply chain orchestration with AI demand forecasting, multi-modal route optimization, supplier risk scoring, and real-time disruption response.',
    features: ['AI-driven demand forecasting', 'Multi-modal route optimization', 'Supplier risk intelligence & monitoring', 'Automated disruption response playbooks', 'Warehouse operations AI optimization'],
    benefits: ['40% reduction in stockouts', '25% lower logistics costs', 'Real-time supplier risk alerts', 'Sustainability & carbon tracking'],
    pricing: { basic: '899', pro: '1999', enterprise: '4499' },
    contactInfo: { website: '/it-services/supply-chain-management', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🚛',
    href: '/it-services/supply-chain-management',
    category: 'automation'
  }
];

// Add itSolutions as alias for itServices
export const itSolutions = itServices;
export const allServices: Service[] = [...aiServices, ...itServices];
// Export as servicesData for backward compatibility
export const servicesData = {
  aiServices,
  itServices,
  itSolutions,
  allServices
}
export const getServiceById = (id: string): Service | undefined => {
  return allServices.find(service => service.id === id);
}
export const getServicesByCategory = (category: Service['category']): Service[] => {
  return allServices.filter(service => service.category === category);
}
export const getPopularServices = (): Service[] => {
  return allServices.filter(service => service.popular);
}
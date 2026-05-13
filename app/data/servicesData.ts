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
  },
  {
    id: 'ai-revenue-optimization',
    title: 'AI Revenue Optimization & Pricing Intelligence',
    description: 'Dynamic pricing engine powered by machine learning — analyze competitor pricing, demand elasticity, customer segments, and market conditions to maximize revenue in real time.',
    features: ['ML-driven dynamic pricing models', 'Competitor price monitoring & alerts', 'Customer segment willingness-to-pay analysis', 'Demand forecasting & inventory alignment', 'A/B price testing & revenue attribution', 'Multi-channel price synchronization'],
    benefits: ['Increase revenue by 15-30% through optimized pricing', 'Reduce price-setting time from weeks to minutes', 'Real-time competitor price intelligence', 'Data-driven pricing decisions across all channels'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-revenue-optimization', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📈',
    href: '/ai-services/ai-revenue-optimization',
    category: 'ai'
  },
  {
    id: 'ai-cyber-threat-hunting',
    title: 'AI Cyber Threat Hunting & Incident Response',
    description: 'Proactive threat detection using advanced AI behavioral analysis, anomaly detection, and automated incident response orchestration for enterprises under constant attack.',
    features: ['24/7 AI-powered threat hunting across network endpoints', 'Behavioral anomaly detection & zero-day identification', 'Automated incident response playbooks', 'Threat intelligence correlation & enrichment', 'Forensic analysis & root-cause reconstruction', 'Compliance reporting for SOC 2, ISO 27001, NIST'],
    benefits: ['Detect threats 10x faster than manual SOC teams', 'Reduce mean time to response (MTTR) by 70%', 'Proactive defense against emerging attack vectors', 'Automated compliance audit trail generation'],
    pricing: { basic: '799', pro: '1799', enterprise: '3999' },
    contactInfo: { website: '/ai-services/ai-cyber-threat-hunting', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🔒',
    href: '/ai-services/ai-cyber-threat-hunting',
    category: 'ai'
  },
  {
    id: 'ai-sentiment-analysis',
    title: 'AI Sentiment Analysis & Brand Monitoring',
    description: 'Real-time brand perception tracking across social media, reviews, news, and forums. Understand customer emotion at scale and act on insights before they become crises.',
    features: ['Multi-platform social listening (X, Reddit, TikTok, news)', 'Emotion-level sentiment scoring (joy, anger, fear, trust)', 'Brand mention clustering & trending topic detection', 'Influencer identification & partnership scoring', 'Crisis early-warning system with alert triage', 'Competitor sentiment benchmarking & gap analysis'],
    benefits: ['Identify PR crises 2-3 days before mainstream pickup', 'Quantify brand health with actionable metrics', 'Discover micro-influencers in your niche organically', 'Competitor sentiment intelligence for positioning'],
    pricing: { basic: '349', pro: '799', enterprise: '1899' },
    contactInfo: { website: '/ai-services/ai-sentiment-analysis', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '💬',
    href: '/ai-services/ai-sentiment-analysis',
    category: 'ai'
  },
  {
    id: 'ai-predictive-maintenance',
    title: 'AI Predictive Maintenance & Asset Monitoring',
    description: 'IoT-enabled predictive maintenance that monitors equipment health in real time, predicts failures before they happen, and optimizes maintenance schedules to reduce downtime.',
    features: ['IoT sensor data ingestion & real-time monitoring', 'ML-based remaining useful life (RUL) prediction', 'Anomaly detection for early fault signatures', 'Automated maintenance scheduling & work order generation', 'Fleet-wide asset health dashboards', 'Integration with CMMS, SAP, and ERP systems'],
    benefits: ['Reduce unplanned downtime by 40-60%', 'Extend equipment lifespan by 20-30%', 'Cut maintenance costs by 25% through optimization', 'Eliminate expensive emergency repairs'],
    pricing: { basic: '499', pro: '1199', enterprise: '2799' },
    contactInfo: { website: '/ai-services/ai-predictive-maintenance', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '⚙️',
    href: '/ai-services/ai-predictive-maintenance',
    category: 'ai'
  },
  {
    id: 'ai-speech-voice-solutions',
    title: 'AI Speech & Voice Solutions',
    description: 'Enterprise-grade speech technology including high-accuracy transcription, AI voice cloning, real-time translation, voice biometrics, and conversational AI for customer service.',
    features: ['99.2% accuracy speech-to-text in 60+ languages', 'Real-time voice translation for live meetings', 'Voice cloning for personalized brand audio content', 'Voice biometrics for secure identity verification', 'Conversational IVR with natural language understanding', 'Meeting transcription with speaker diarization & summaries'],
    benefits: ['Automate call center transcription at scale', 'Provide multilingual support without hiring translators', 'Secure authentication via voice fingerprinting', 'Create branded audio content with AI voice cloning'],
    pricing: { basic: '279', pro: '649', enterprise: '1599' },
    contactInfo: { website: '/ai-services/ai-speech-voice-solutions', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🎙️',
    href: '/ai-services/ai-speech-voice-solutions',
    category: 'ai'
  },
  {
    id: 'ai-agentic-workflows',
    title: 'AI Agentic Workflow Automation',
    description: 'Autonomous AI agents that plan, execute, and monitor multi-step business workflows — from data gathering to decision execution with human-in-the-loop oversight.',
    features: ['Multi-agent orchestration with role specialization', 'Natural language workflow design', 'Human-in-the-loop approval gates', 'Self-healing workflows with error recovery', 'Real-time monitoring dashboards', 'Integration with 200+ enterprise tools'],
    benefits: ['Replace 70% of repetitive operational workflows', '24/7 autonomous execution without human intervention', 'Faster workflow creation with natural language design', 'Seamless integration with existing tool stack'],
    pricing: { basic: '399', pro: '899', enterprise: '2499' },
    contactInfo: { website: '/ai-services/ai-agentic-workflows', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🤖',
    href: '/ai-services/ai-agentic-workflows',
    category: 'ai'
  },
  {
    id: 'ai-regulatory-compliance-monitor',
    title: 'AI Regulatory Compliance Monitor',
    description: 'Continuous regulatory change monitoring across 150+ jurisdictions with automated impact analysis, gap detection, and compliance report generation for financial services and healthcare.',
    features: ['150+ jurisdiction regulatory change tracking', 'AI-powered impact analysis on existing operations', 'Automated compliance gap detection', 'Real-time deadline and filing alerts', 'Audit-ready evidence collection', 'Integration with GRC platforms'],
    benefits: ['Never miss a regulatory deadline again', 'Reduce compliance research time by 90%', 'Automated reporting for SOC 2, HIPAA, GDPR', 'Proactive risk mitigation before violations occur'],
    pricing: { basic: '699', pro: '1599', enterprise: '3999' },
    contactInfo: { website: '/ai-services/ai-regulatory-compliance', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📜',
    href: '/ai-services/ai-regulatory-compliance',
    category: 'ai'
  },
  {
    id: 'ai-talent-acquisition',
    title: 'AI Talent Acquisition & Hiring Intelligence',
    description: 'End-to-end AI recruiting platform — candidate sourcing, resume screening, bias-free scoring, interview scheduling, and predictive hiring success modeling.',
    features: ['Multi-platform AI candidate sourcing', 'Bias-free resume scoring & ranking', 'Automated interview scheduling & coordination', 'Predictive hiring success modeling', 'Competitor talent mapping & intelligence', 'DEI analytics & reporting dashboard'],
    benefits: ['Reduce time-to-hire by 60% with AI sourcing', 'Eliminate unconscious bias in screening', 'Predict candidate retention probability before hiring', 'Access passive candidates through intelligent mapping'],
    pricing: { basic: '449', pro: '999', enterprise: '2299' },
    contactInfo: { website: '/ai-services/ai-talent-acquisition', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🎯',
    href: '/ai-services/ai-talent-acquisition',
    category: 'ai'
  },
  {
    id: 'ai-financial-fraud-detection',
    title: 'AI Financial Fraud Detection & Prevention',
    description: 'Real-time transaction monitoring with deep learning anomaly detection, customer behavior profiling, and automated case management for banking and fintech.',
    features: ['Real-time transaction scoring & blocking', 'Deep learning behavioral anomaly detection', 'Customer risk profiling with dynamic baselines', 'Automated case management with evidence bundling', 'False positive reduction with adaptive learning', 'Regulatory reporting (BSA, AML, SAR) automation'],
    benefits: ['Catch 99.7% of fraudulent transactions in real time', 'Reduce false positives by 75% with adaptive models', 'Automate suspicious activity reporting', 'Lower fraud losses by 80% on average'],
    pricing: { basic: '799', pro: '1899', enterprise: '4499' },
    contactInfo: { website: '/ai-services/ai-fraud-detection', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🛡️',
    href: '/ai-services/ai-fraud-detection',
    category: 'ai'
  },
  {
    id: 'ai-energy-optimization',
    title: 'AI Energy Optimization & Sustainability',
    description: 'AI-driven energy consumption optimization for buildings, data centers, and manufacturing — reduce costs, meet ESG targets, and automate sustainability reporting.',
    features: ['AI-powered energy load forecasting and optimization', 'HVAC, lighting, and power system automated control', 'Carbon emissions tracking with ESG reporting', 'Peer benchmarking and efficiency gap analysis', 'Renewable energy integration recommendations', 'Real-time cost savings dashboard'],
    benefits: ['Reduce energy costs by 25-40%', 'Automate ESG and sustainability reporting', 'Meet regulatory carbon reduction targets', 'Predict equipment failures before they waste energy'],
    pricing: { basic: '549', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-energy-optimization', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '⚡',
    href: '/ai-services/ai-energy-optimization',
    category: 'ai'
  },
  {
    id: 'ai-personalization-engine',
    title: 'AI Personalization & Recommendation Engine',
    description: 'Real-time personalization for websites, apps, and e-commerce — dynamic content, product recommendations, pricing, and messaging tailored to each visitor.',
    features: ['Real-time visitor behavior tracking and profiling', 'Dynamic content serving based on user segments', 'Cross-channel personalized messaging', 'AI-powered product recommendation engine', 'A/B/n testing with multi-armed bandit optimization', 'Revenue attribution and ROI measurement'],
    benefits: ['Increase conversion rates by 35-50%', 'Personalize every visitor experience in real time', 'Optimize product discovery for e-commerce', 'Measure personalization ROI with attribution modeling'],
    pricing: { basic: '349', pro: '799', enterprise: '1899' },
    contactInfo: { website: '/ai-services/ai-personalization-engine', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '✨',
    href: '/ai-services/ai-personalization-engine',
    category: 'ai'
  },
  {
    id: 'ai-legal-document-analysis',
    title: 'AI Legal Document Analysis & Contract Review',
    description: 'Automated legal document review, clause extraction, risk assessment, and contract comparison powered by advanced NLP trained on legal corpora.',
    features: ['Intelligent clause extraction and classification', 'Risk scoring and compliance flagging', 'Contract comparison and gap analysis', 'Legal precedent research automation', 'Multi-language contract processing'],
    benefits: ['Reduce legal review time by 80%', 'Catch hidden risks before signing', 'Standardize contract terminology', 'Accelerate M&A due diligence'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-legal-doc-analysis', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '⚖️',
    href: '/ai-services/ai-legal-doc-analysis',
    category: 'ai'
  },
  {
    id: 'ai-medical-imaging',
    title: 'AI Medical Imaging & Diagnostics',
    description: 'FDA-ready AI diagnostic support for radiology, pathology, and dermatology — detect anomalies, prioritize cases, and assist radiologists with second-opinion AI.',
    features: ['Deep learning anomaly detection in X-rays, CT, MRI', 'Pathology slide analysis and classification', 'Dermatological lesion assessment', 'Triage and workload prioritization', 'HIPAA-compliant deployment with audit trails'],
    benefits: ['Reduce diagnostic errors by 40%', 'Prioritize critical cases automatically', 'Extend specialist reach to underserved areas', 'Seamless PACS/EHR integration'],
    pricing: { basic: '999', pro: '2499', enterprise: '5999' },
    contactInfo: { website: '/ai-services/ai-medical-imaging', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🏥',
    href: '/ai-services/ai-medical-imaging',
    category: 'ai'
  },
  {
    id: 'ai-supply-chain-optimizer',
    title: 'AI Supply Chain Optimization & Demand Forecasting',
    description: 'End-to-end supply chain intelligence with ML demand forecasting, inventory optimization, supplier risk scoring, and logistics route planning.',
    features: ['ML-powered demand forecasting at SKU level', 'Multi-echelon inventory optimization', 'Supplier risk intelligence and monitoring', 'Logistics route optimization with cost modeling', 'Carbon footprint tracking and reduction'],
    benefits: ['Reduce inventory carrying costs by 25%', 'Improve forecast accuracy by 35%', 'Prevent supply disruptions with early warnings', 'Optimize logistics spend across modes'],
    pricing: { basic: '699', pro: '1599', enterprise: '3499' },
    contactInfo: { website: '/ai-services/ai-supply-chain-optimizer', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📦',
    href: '/ai-services/ai-supply-chain-optimizer',
    category: 'ai'
  },
  {
    id: 'ai-content-localization',
    title: 'AI Content Localization & Cultural Adaptation',
    description: 'Enterprise-grade content localization with context-aware translation, cultural nuance adaptation, brand voice preservation, and multi-market compliance.',
    features: ['Context-aware Neural Machine Translation (100+ languages)', 'Cultural adaptation and localization QA', 'Brand voice consistency across markets', 'Automated regulatory compliance checking', 'CMS and marketing platform integrations'],
    benefits: ['Launch in 50+ markets simultaneously', 'Reduce localization costs by 70%', 'Maintain brand integrity across cultures', 'Meet local regulatory requirements automatically'],
    pricing: { basic: '449', pro: '999', enterprise: '2299' },
    contactInfo: { website: '/ai-services/ai-content-localization', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🌍',
    href: '/ai-services/ai-content-localization',
    category: 'ai'
  },
  {
    id: 'ai-intelligent-routing',
    title: 'AI Intelligent Document Processing & Routing',
    description: 'Automated document intake with AI extraction, classification, and intelligent routing to the right team or workflow — invoices, claims, applications, and contracts.',
    features: ['OCR + AI document understanding (99.5% accuracy)', 'Intelligent document classification and tagging', 'Automated data extraction to structured formats', 'Smart routing to teams based on content', 'Integration with RPA for downstream automation'],
    benefits: ['Eliminate 90% of manual data entry', 'Reduce document processing time from hours to seconds', 'Improve data accuracy and compliance', 'Seamless integration with existing ERP/CRM'],
    pricing: { basic: '349', pro: '799', enterprise: '1799' },
    contactInfo: { website: '/ai-services/ai-intelligent-routing', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📋',
    href: '/ai-services/ai-intelligent-routing',
    category: 'ai'
  },
  {
    id: 'ai-code-migration',
    title: 'AI Code Migration & Legacy Modernization',
    description: 'AI-powered legacy code analysis, automated migration planning, and assisted code transformation from COBOL, mainframe, and legacy frameworks to modern cloud-native stacks.',
    features: ['Legacy code analysis and dependency mapping', 'Automated migration plan generation', 'AI-assisted code transformation and refactoring', 'Test case generation for migrated systems', 'Risk assessment and rollback planning'],
    benefits: ['Reduce migration costs by 60%', 'Accelerate modernization timelines by 3x', 'Preserve business logic during transformation', 'Minimize production disruption'],
    pricing: { basic: '2999', pro: '5999', enterprise: '14999' },
    contactInfo: { website: '/ai-services/ai-code-migration', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '💻',
    href: '/ai-services/ai-code-migration',
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
  },
  {
    id: 'it-network-security-monitoring',
    title: 'Network Security Monitoring & SIEM',
    description: 'Real-time network traffic analysis, threat correlation, and centralized Security Information and Event Management (SIEM) for enterprises requiring continuous security posture visibility.',
    features: ['24/7 network traffic monitoring & flow analysis', 'Centralized SIEM with log aggregation', 'Threat correlation engine with automated alerting', 'Custom dashboard & compliance reporting', 'Integration with firewalls, IDS/IPS, and endpoint protection'],
    benefits: ['Detect lateral movement within minutes, not months', 'Centralize security visibility across all infrastructure', 'Reduce alert fatigue with intelligent correlation', 'Meet regulatory requirements with automated reports'],
    pricing: { basic: '899', pro: '1999', enterprise: '4499' },
    contactInfo: { website: '/it-services/network-security-monitoring', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🛡️',
    href: '/it-services/network-security-monitoring',
    category: 'security'
  },
  {
    id: 'it-edge-computing-solutions',
    title: 'Edge Computing & IoT Infrastructure',
    description: 'Deploy compute closer to your data sources with edge computing architecture — low-latency processing, distributed AI inference, and resilient IoT device management.',
    features: ['Edge server deployment & configuration', 'Container orchestration at the edge (K3s, KubeEdge)', 'IoT device provisioning & lifecycle management', 'Low-latency AI inference on edge hardware', 'Offline-first data synchronization with cloud'],
    benefits: ['Sub-10ms response times for critical applications', 'Reduce cloud data transfer costs by 60%', 'Operate autonomously during network outages', 'Scale IoT deployments to thousands of devices'],
    pricing: { basic: '1299', pro: '2999', enterprise: '6499' },
    contactInfo: { website: '/it-services/edge-computing', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📡',
    href: '/it-services/edge-computing',
    category: 'cloud'
  },
  {
    id: 'it-disaster-recovery',
    title: 'Disaster Recovery & Business Continuity',
    description: 'Comprehensive disaster recovery planning, automated failover systems, and business continuity solutions ensuring zero data loss and minimal downtime for mission-critical operations.',
    features: ['RTO/RPO analysis & recovery strategy design', 'Multi-region backup & replication automation', 'Automated failover testing & validation', 'Runbook creation & disaster response playbooks', 'Continuous compliance monitoring for DR readiness'],
    benefits: ['Guarantee 99.99% uptime with automated failover', 'Reduce recovery time from days to minutes', 'Pass compliance DR audits on first attempt', 'Protect brand reputation with always-on services'],
    pricing: { basic: '699', pro: '1599', enterprise: '3499' },
    contactInfo: { website: '/it-services/disaster-recovery', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🔄',
    href: '/it-services/disaster-recovery',
    category: 'cloud'
  },
  {
    id: 'it-itil-service-management',
    title: 'ITIL Service Management (ITSM) Platform',
    description: 'Full ITIL-aligned service management with AI-powered ticketing, change management automation, CMDB discovery, and self-service portal for enterprise IT operations.',
    features: ['AI-powered incident classification & routing', 'Automated change approval workflows', 'Service catalog & self-service portal', 'CMDB auto-discovery & dependency mapping', 'SLA monitoring & escalation engine', 'Knowledge base integration with AI search'],
    benefits: ['Reduce ticket resolution time by 50%', 'Eliminate change-related outages with automated validation', 'Empower users with self-service capabilities', 'Maintain accurate service dependency maps'],
    pricing: { basic: '499', pro: '1099', enterprise: '2499' },
    contactInfo: { website: '/it-services/itil-service-management', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📋',
    href: '/it-services/itil-service-management',
    category: 'it'
  },
  {
    id: 'it-zero-trust-architecture',
    title: 'Zero Trust Security Architecture',
    description: 'Implement Zero Trust principles across your enterprise — identity verification, micro-segmentation, least-privilege access, and continuous authentication for every request.',
    features: ['Identity & Access Management (IAM) modernization', 'Micro-segmentation of network workloads', 'Continuous adaptive risk & trust assessment', 'Device posture checking & conditional access', 'Privileged Access Management (PAM) integration'],
    benefits: ['Eliminate implicit trust across the network', 'Reduce breach impact with micro-segmentation', 'Meet CISA Zero Trust maturity requirements', 'Secure hybrid and remote workforces uniformly'],
    pricing: { basic: '1499', pro: '3499', enterprise: '7999' },
    contactInfo: { website: '/it-services/zero-trust-architecture', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🔐',
    href: '/it-services/zero-trust-architecture',
    category: 'security'
  },
  {
    id: 'it-kubernetes-management',
    title: 'Container Orchestration & Kubernetes Management',
    description: 'Enterprise Kubernetes deployment, management, and optimization — multi-cluster orchestration, GitOps workflows, and service mesh implementation.',
    features: ['Multi-cluster Kubernetes orchestration', 'GitOps deployment pipelines with ArgoCD', 'Service mesh implementation (Istio, Linkerd)', 'Automated scaling and self-healing', 'Cost optimization and resource right-sizing'],
    benefits: ['Reduce infrastructure costs by 40%', 'Zero-downtime deployments with blue-green', 'Accelerate developer velocity 3x', 'Enterprise-grade reliability and observability'],
    pricing: { basic: '799', pro: '1799', enterprise: '3999' },
    contactInfo: { website: '/it-services/kubernetes-management', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🐳',
    href: '/it-services/kubernetes-management',
    category: 'cloud'
  },
  {
    id: 'it-penetration-testing',
    title: 'Penetration Testing & Vulnerability Assessment',
    description: 'Comprehensive security testing — network, web application, API, and social engineering assessments with detailed remediation reports and retesting.',
    features: ['Black-box and white-box penetration testing', 'Web application and API security testing', 'Social engineering and phishing simulations', 'Wireless and network infrastructure testing', 'Detailed remediation reports with retesting'],
    benefits: ['Identify vulnerabilities before attackers do', 'Meet PCI-DSS, HIPAA, and SOC 2 testing requirements', 'Reduce attack surface with actionable reports', 'Validate security controls effectiveness'],
    pricing: { basic: '2999', pro: '5999', enterprise: '12999' },
    contactInfo: { website: '/it-services/penetration-testing', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🔓',
    href: '/it-services/penetration-testing',
    category: 'security'
  },
  {
    id: 'it-blockchain-development',
    title: 'Blockchain Development & Smart Contract Auditing',
    description: 'End-to-end blockchain solution development — smart contract creation, security auditing, tokenomics design, and Web3 integration for enterprises.',
    features: ['Smart contract development and deployment', 'Formal verification and security auditing', 'Tokenomics and governance design', 'DeFi protocol integration and development', 'Enterprise blockchain consulting and strategy'],
    benefits: ['Launch secure blockchain products faster', 'Prevent exploits with formal verification', 'Access decentralized finance opportunities', 'Enterprise-grade blockchain integration'],
    pricing: { basic: '4999', pro: '9999', enterprise: '24999' },
    contactInfo: { website: '/it-services/blockchain-development', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '⛓️',
    href: '/it-services/blockchain-development',
    category: 'it'
  },
  {
    id: 'it-quantum-readiness',
    title: 'Quantum Computing Readiness Assessment',
    description: 'Evaluate your organization quantum readiness, identify cryptographic vulnerabilities, and develop migration strategies for post-quantum security standards.',
    features: ['Post-quantum cryptography assessment', 'Quantum vulnerability scanning across systems', 'NIST PQC migration roadmap development', 'Quantum-safe encryption implementation', 'Executive quantum risk briefing and training'],
    benefits: ['Prepare for quantum computing threats proactively', 'Comply with emerging NIST PQC standards', 'Protect long-lived encrypted data from harvest-now-decrypt-later', 'Position as quantum-ready enterprise leader'],
    pricing: { basic: '3499', pro: '7999', enterprise: '18999' },
    contactInfo: { website: '/it-services/quantum-readiness', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🔮',
    href: '/it-services/quantum-readiness',
    category: 'security'
  },
  {
    id: 'it-5g-network-deployment',
    title: '5G Network Planning & Deployment',
    description: 'End-to-end 5G network architecture, RF planning, edge computing integration, and private 5G deployment for enterprise campuses and industrial IoT.',
    features: ['5G network architecture and RF planning', 'Private 5G network deployment for campuses', 'Edge computing integration with 5G infrastructure', 'Network slicing design and implementation', 'Industrial IoT connectivity and optimization'],
    benefits: ['Ultra-low latency for mission-critical applications', 'Massive IoT device connectivity at scale', 'Secure private networks off public infrastructure', 'Future-proof connectivity for digital transformation'],
    pricing: { basic: '9999', pro: '19999', enterprise: '49999' },
    contactInfo: { website: '/it-services/5g-network-deployment', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📶',
    href: '/it-services/5g-network-deployment',
    category: 'cloud'
  },
  {
    id: 'it-digital-twin-platform',
    title: 'Digital Twin & IoT Platform Development',
    description: 'Build real-time digital replicas of physical systems — factory floors, supply chains, and smart cities with predictive simulation and optimization capabilities.',
    features: ['3D digital twin modeling and visualization', 'Real-time IoT sensor data ingestion and mapping', 'Predictive simulation and what-if scenario analysis', 'Integration with CAD, BIM, and ERP systems', 'Automated alerts and anomaly detection'],
    benefits: ['Simulate changes before real-world implementation', 'Reduce operational downtime by 40%', 'Optimize resource allocation with predictive modeling', 'Unified visibility across complex physical-digital systems'],
    pricing: { basic: '5999', pro: '12999', enterprise: '29999' },
    contactInfo: { website: '/it-services/digital-twin-platform', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🏗️',
    href: '/it-services/digital-twin-platform',
    category: 'automation'
  },
  {
    id: 'it-microservices-architecture',
    title: 'Microservices Architecture & API Gateway Design',
    description: 'Design and implement scalable microservices architectures with API gateways, service discovery, distributed tracing, and event-driven communication patterns.',
    features: ['Domain-driven service decomposition', 'API gateway design and implementation (Kong, APISIX)', 'Service mesh deployment (Istio, Linkerd)', 'Distributed tracing and observability', 'Event-driven architecture with message brokers'],
    benefits: ['Independent deployment and scaling per service', 'Reduced blast radius for failures', 'Technology polyglotism for optimal tooling', 'Accelerated development velocity with team autonomy'],
    pricing: { basic: '1999', pro: '4999', enterprise: '12999' },
    contactInfo: { website: '/it-services/microservices-architecture', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🧩',
    href: '/it-services/microservices-architecture',
    category: 'cloud'
  },
  {
    id: 'it-observability-platform',
    title: 'Observability Platform & SRE Consulting',
    description: 'End-to-end observability implementation with distributed tracing, log aggregation, metrics collection, and Site Reliability Engineering best practices.',
    features: ['Unified observability stack (Prometheus, Grafana, Jaeger)', 'Custom SLO/SLI definition and dashboard creation', 'Incident management with automated runbooks', 'Chaos engineering and resilience testing', 'SRE consulting and reliability maturity assessment'],
    benefits: ['Reduce MTTR by 60% with intelligent alerting', 'Eliminate alert fatigue with smart correlation', 'Proactive issue detection before user impact', 'Build engineering team reliability practices'],
    pricing: { basic: '1299', pro: '2999', enterprise: '6999' },
    contactInfo: { website: '/it-services/observability-platform', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📊',
    href: '/it-services/observability-platform',
    category: 'cloud'
  },
  {
    id: 'it-data-mesh-implementation',
    title: 'Data Mesh & Modern Data Platform Architecture',
    description: 'Implement data mesh architecture with domain-oriented data ownership, self-serve data infrastructure, and federated computational governance.',
    features: ['Domain-oriented data product design', 'Self-serve data platform implementation', 'Federated computational governance framework', 'Data quality and lineage automation', 'Multi-cloud data lakehouse architecture'],
    benefits: ['Break down data silos with domain ownership', 'Scale analytics across the organization', 'Improve data quality with automated checks', 'Reduce data engineering bottleneck by 70%'],
    pricing: { basic: '2999', pro: '6999', enterprise: '16999' },
    contactInfo: { website: '/it-services/data-mesh', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🗄️',
    href: '/it-services/data-mesh',
    category: 'data'
  },
  {
    id: 'it-platform-engineering',
    title: 'Platform Engineering & Internal Developer Portal',
    description: 'Build internal developer platforms with self-service infrastructure provisioning, golden paths, and developer experience optimization to accelerate team productivity.',
    features: ['Internal developer platform (IDP) deployment', 'Self-service infrastructure provisioning', 'Golden path templates and scaffolding', 'Developer experience metrics and optimization', 'Integration with existing CI/CD pipelines'],
    benefits: ['Reduce developer onboarding time by 80%', 'Eliminate infrastructure request bottleneck', 'Standardize best practices across teams', 'Accelerate feature delivery by 2-3x'],
    pricing: { basic: '2499', pro: '5499', enterprise: '12999' },
    contactInfo: { website: '/it-services/platform-engineering', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🛠️',
    href: '/it-services/platform-engineering',
    category: 'cloud'
  },
  {
    id: 'it-wireless-network-design',
    title: 'Wireless Network Design & Optimization',
    description: 'Enterprise Wi-Fi and wireless infrastructure design, site surveys, RF optimization, and capacity planning for campuses, warehouses, and smart buildings.',
    features: ['Predictive and on-site RF surveys', 'Capacity planning and density optimization', 'IoT and sensor network design', 'Seamless roaming and load balancing', 'Security hardening (WPA3, 802.1X, NAC)'],
    benefits: ['Eliminate dead zones with precision design', 'Support 10,000+ concurrent devices per site', 'Seamless IoT and traditional device integration', 'Future-proof for Wi-Fi 6E and Wi-Fi 7'],
    pricing: { basic: '2999', pro: '7499', enterprise: '18999' },
    contactInfo: { website: '/it-services/wireless-network', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📡',
    href: '/it-services/wireless-network',
    category: 'cloud'
  },
  {
    id: 'it-automation-orchestrator',
    title: 'IT Automation & Orchestration Platform',
    description: 'Enterprise IT automation platform with workflow orchestration, infrastructure provisioning, configuration management, and self-healing system capabilities.',
    features: ['Infrastructure automation with Terraform and Ansible', 'Workflow orchestration across IT systems', 'Self-healing infrastructure with event-driven automation', 'Compliance enforcement and drift detection', 'Centralized automation catalog and governance'],
    benefits: ['Reduce manual IT operations by 80%', 'Eliminate configuration drift across environments', 'Accelerate service provisioning from days to minutes', 'Maintain compliance with automated enforcement'],
    pricing: { basic: '1499', pro: '3499', enterprise: '7999' },
    contactInfo: { website: '/it-services/automation-orchestrator', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '⚙️',
    href: '/it-services/automation-orchestrator',
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
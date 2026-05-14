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
  },
  {
    id: 'ai-ethics-governance',
    title: 'AI Ethics, Safety & Governance Framework',
    description: 'Comprehensive AI governance framework with bias detection, model explainability, audit trails, and regulatory compliance for responsible AI deployment.',
    features: ['Automated bias detection across training data and model outputs', 'Model interpretability and explainability (SHAP/LIME integration)', 'AI ethics board policy generation and compliance tracking', 'Regulatory compliance automation (EU AI Act, NIST AI RMF)', 'Continuous monitoring and audit log generation'],
    benefits: ['Deploy AI responsibly with regulatory confidence', 'Reduce AI-related legal and reputational risks', 'Build stakeholder and customer trust in AI systems', 'Stay ahead of emerging AI regulations globally'],
    pricing: { basic: '799', pro: '1899', enterprise: '4499' },
    contactInfo: { website: '/ai-services/ai-ethics-governance', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '⚖️',
    href: '/ai-services/ai-ethics-governance',
    category: 'ai'
  },
  {
    id: 'ai-spatial-computing',
    title: 'AI Spatial Computing & AR/VR Analytics',
    description: 'AI-powered spatial computing platform for augmented and virtual reality experiences — 3D scene understanding, gesture recognition, and immersive analytics.',
    features: ['Real-time 3D scene reconstruction and understanding', 'AI-driven gesture and gaze tracking', 'Spatial audio processing and acoustic mapping', 'Immersive analytics dashboard creation', 'Cross-platform AR/VR deployment (Vision Pro, Quest, HoloLens)'],
    benefits: ['Create next-generation immersive experiences', 'Enable spatial data visualization for complex datasets', 'Reduce training costs with VR simulations', 'Bridge physical and digital workspaces'],
    pricing: { basic: '899', pro: '2199', enterprise: '4999' },
    contactInfo: { website: '/ai-services/ai-spatial-computing', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🥽',
    href: '/ai-services/ai-spatial-computing',
    category: 'ai'
  },
  {
    id: 'ai-robotics-integration',
    title: 'AI Robotics Integration & Autonomous Systems',
    description: 'AI integration for industrial and commercial robotics — computer vision navigation, autonomous task planning, human-robot collaboration, and fleet management.',
    features: ['Computer vision for robot navigation and obstacle avoidance', 'Autonomous task planning with reinforcement learning', 'Human-robot collaboration and safety monitoring', 'Multi-robot fleet management and coordination', 'Edge AI deployment for low-latency real-time control'],
    benefits: ['Automate complex physical workflows with AI robotics', 'Improve workplace safety with intelligent monitoring', 'Scale robot fleet operations without proportional overhead', 'Reduce cycle times by 40% with autonomous optimization'],
    pricing: { basic: '1499', pro: '3499', enterprise: '7999' },
    contactInfo: { website: '/ai-services/ai-robotics-integration', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🤖',
    href: '/ai-services/ai-robotics-integration',
    category: 'ai'
  },
  {
    id: 'ai-voice-cloning',
    title: 'AI Voice Cloning & Synthetic Media Creation',
    description: 'Enterprise voice cloning for customer service, training, and content creation — realistic synthetic voice generation with consent management and quality controls.',
    features: ['High-fidelity voice cloning from 30-second samples', 'Multi-language and accent-adaptive voice generation', 'Real-time voice conversion for live calls and broadcasts', 'Brand voice library management with usage governance', 'Consent management and deepfake detection safeguards'],
    benefits: ['Produce audio content 100x faster with synthetic voices', 'Maintain brand voice consistency across all channels', 'Enable 24/7 voice-based customer interactions', 'Scale personalized communications to millions'],
    pricing: { basic: '499', pro: '1199', enterprise: '2799' },
    contactInfo: { website: '/ai-services/ai-voice-cloning', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🎙️',
    href: '/ai-services/ai-voice-cloning',
    category: 'ai'
  },
  {
    id: 'ai-lead-generation',
    title: 'AI Lead Generation & Pipeline Intelligence',
    description: 'Intelligent lead generation platform — prospect identification, intent signal detection, personalized outreach automation, and pipeline conversion optimization.',
    features: ['AI-powered prospect scoring and identification', 'Intent signal detection from web and social data', 'Personalized outreach generation at scale', 'Multi-channel engagement orchestration', 'Pipeline conversion prediction and bottleneck analysis'],
    benefits: ['Increase qualified leads by 300%', 'Reduce cost per acquisition by 70%', 'Automate top-of-funnel outreach without losing personalization', 'Predict pipeline revenue with 85%+ accuracy'],
    pricing: { basic: '399', pro: '899', enterprise: '2199' },
    contactInfo: { website: '/ai-services/ai-lead-generation', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🎯',
    href: '/ai-services/ai-lead-generation',
    category: 'ai'
  },
  {
    id: 'ai-presentation-maker',
    title: 'AI Presentation & Report Generator',
    description: 'Transform raw data into polished presentations and executive reports — AI-driven slide design, data visualization, narrative generation, and brand-aligned templates.',
    features: ['AI-powered slide generation from documents and data', 'Automated chart and infographic creation', 'Executive narrative and talking point generation', 'Brand guideline enforcement across all slides', 'Export to PowerPoint, Google Slides, and PDF'],
    benefits: ['Create presentations 90% faster with AI generation', 'Ensure consistent brand quality across all decks', 'Transform complex data into clear executive narratives', 'Never start a slide deck from scratch again'],
    pricing: { basic: '99', pro: '249', enterprise: '599' },
    contactInfo: { website: '/ai-services/ai-presentation-maker', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📊',
    href: '/ai-services/ai-presentation-maker',
    category: 'ai'
  },
  {
    id: 'ai-chatbot-builder-pro',
    title: 'AI Enterprise Chatbot Builder Platform',
    description: 'Build and deploy enterprise-grade AI chatbots with multi-language support, knowledge base integration, human handoff, and advanced analytics dashboard.',
    features: ['No-code conversational AI builder with drag-and-drop', 'Multi-language support with automatic translation', 'Knowledge base integration (SharePoint, Confluence, web)', 'Intelligent human handoff with context transfer', 'Conversation analytics and sentiment tracking'],
    benefits: ['Deflect 60% of support tickets with intelligent chatbots', 'Provide 24/7 multilingual customer support', 'Reduce average resolution time by 70%', 'Capture valuable customer insights from conversations'],
    pricing: { basic: '199', pro: '499', enterprise: '1199' },
    contactInfo: { website: '/ai-services/ai-chatbot-builder-pro', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🤖',
    href: '/ai-services/ai-chatbot-builder-pro',
    category: 'ai'
  },
  {
    id: 'ai-drug-discovery',
    title: 'AI Drug Discovery & Molecular Design',
    description: 'Accelerate pharmaceutical R&D with AI-powered molecular simulation, target identification, toxicity prediction, and clinical trial optimization.',
    features: ['De novo molecular design with generative AI', 'Protein-ligand binding affinity prediction', 'ADMET toxicity and pharmacokinetics modeling', 'Clinical trial cohort matching and optimization', 'Multi-target drug candidate screening'],
    benefits: ['Reduce drug discovery timelines from 12 to 4 years', 'Cut R&D costs by 60% with AI-guided candidate selection', 'Predict toxicity before expensive animal studies', 'Increase first-in-human trial success rates'],
    pricing: { basic: '2999', pro: '6999', enterprise: '16999' },
    contactInfo: { website: '/ai-services/ai-drug-discovery', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '💊',
    href: '/ai-services/ai-drug-discovery',
    category: 'ai'
  },
  {
    id: 'ai-video-generation',
    title: 'AI Video Generation & Synthetic Media',
    description: 'Enterprise video creation platform with AI-driven scripting, voice synthesis, avatar generation, scene composition, and automated post-production workflows.',
    features: ['Text-to-video generation with photorealistic avatars', 'AI voice synthesis with emotion control', 'Automated subtitle and caption generation in 50+ languages', 'Brand-compliant scene templates and assets', 'Batch video production for marketing at scale'],
    benefits: ['Produce marketing videos 95% faster than studio production', 'Eliminate need for physical sets and actors', 'Multi-localized versions from single source content', 'Consistent brand presence across all video channels'],
    pricing: { basic: '299', pro: '799', enterprise: '1999' },
    contactInfo: { website: '/ai-services/ai-video-generation', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🎬',
    href: '/ai-services/ai-video-generation',
    category: 'ai'
  },
  {
    id: 'ai-voice-assistant',
    title: 'AI Voice Assistant & Conversational IVR',
    description: 'Deploy intelligent voice assistants for customer service, internal IT support, and appointment scheduling with natural language understanding and seamless human escalation.',
    features: ['Natural language voice recognition across 100+ languages', 'Context-aware multi-turn conversation management', 'Sentiment analysis for real-time response adaptation', 'CRM and calendar integration for action completion', 'Analytics dashboard with call scoring and insights'],
    benefits: ['Handle 70% of calls without human intervention', 'Reduce average handle time by 50%', '24/7 availability for global customer bases', 'Seamless escalation with full context transfer'],
    pricing: { basic: '399', pro: '899', enterprise: '2199' },
    contactInfo: { website: '/ai-services/ai-voice-assistant', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🎙️',
    href: '/ai-services/ai-voice-assistant',
    category: 'ai'
  },
  {
    id: 'ai-supply-chain',
    title: 'AI Supply Chain Intelligence & Optimization',
    description: 'End-to-end supply chain visibility and optimization with demand forecasting, supplier risk scoring, route planning, and inventory optimization powered by ML.',
    features: ['Real-time supply chain visibility with digital twin', 'ML demand forecasting at SKU and location level', 'Supplier risk monitoring with alternative sourcing', 'Multi-echelon inventory optimization', 'Carbon footprint tracking and sustainability reporting'],
    benefits: ['Reduce supply chain costs by 25-40%', 'Improve forecast accuracy by 35%', 'Prevent disruptions with early risk signals', 'Optimize inventory to reduce carrying costs by 30%'],
    pricing: { basic: '699', pro: '1599', enterprise: '3499' },
    contactInfo: { website: '/ai-services/ai-supply-chain', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📦',
    href: '/ai-services/ai-supply-chain',
    category: 'ai'
  },
  {
    id: 'ai-email-marketing',
    title: 'AI Email Marketing & Campaign Intelligence',
    description: 'AI-driven email marketing with intelligent subject line generation, send time optimization, content personalization, and automated A/B testing at enterprise scale.',
    features: ['AI subject line and content generation', 'Predictive send time optimization per recipient', 'Dynamic content personalization at scale', 'Automated A/B/n testing with multi-armed bandits', 'Deliverability monitoring and inbox placement scoring'],
    benefits: ['Increase open rates by 40% with AI-optimized subjects', 'Boost click-through rates by 60% with personalized content', 'Reduce campaign setup time by 80%', 'Maintain high deliverability with proactive monitoring'],
    pricing: { basic: '149', pro: '349', enterprise: '899' },
    contactInfo: { website: '/ai-services/ai-email-marketing', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📧',
    href: '/ai-services/ai-email-marketing',
    category: 'ai'
  },
  {
    id: 'ai-video-analytics',
    title: 'AI Video Analytics & Visual Intelligence',
    description: 'Real-time video analytics for retail, security, manufacturing, and public spaces — crowd behavior analysis, anomaly detection, and operational intelligence from existing CCTV.',
    features: ['Existing CCTV integration with AI overlay', 'Crowd density and flow pattern analysis', 'Anomaly detection for security incidents', 'Customer journey and dwell time analytics', 'Real-time alerts with automated response triggers'],
    benefits: ['Leverage existing camera infrastructure with AI upgrade', 'Detect security incidents 3x faster than human monitoring', 'Optimize store layouts with customer flow insights', 'Reduce retail shrinkage by 40% with proactive alerts'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-video-analytics', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📹',
    href: '/ai-services/ai-video-analytics',
    category: 'ai'
  },
  {
    id: 'ai-compliance',
    title: 'AI Compliance Monitoring & Automated Auditing',
    description: 'Continuous compliance monitoring across SOC 2, ISO 27001, HIPAA, GDPR, and PCI-DSS with evidence collection, gap analysis, and automated audit-ready report generation.',
    features: ['Continuous control monitoring across 5+ frameworks', 'Automated evidence collection from systems and logs', 'Real-time compliance dashboards with trend analysis', 'Gap analysis with prioritized remediation workflows', 'Audit-ready report generation with full traceability'],
    benefits: ['Reduce audit preparation time by 75%', 'Eliminate compliance blind spots with continuous monitoring', 'Pass first-time audits with confidence', 'Scale compliance across growing multi-entity organizations'],
    pricing: { basic: '449', pro: '999', enterprise: '2499' },
    contactInfo: { website: '/ai-services/ai-compliance', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🛡️',
    href: '/ai-services/ai-compliance',
    category: 'ai'
  },
  {
    id: 'advanced_ai_enterprise_intelligence_hub',
    title: 'Advanced AI & Enterprise Intelligence Hub',
    description: 'Unify generative AI, autonomous agents, multimodal intelligence, RAG, governance, observability, and enterprise copilots into a single advanced AI ...',
    features: ['Unified Advanced AI Fabric', 'Enterprise-Grade Governance & Trust', 'Cross-Provider Model Orchestration', 'Production-Ready RAG & Knowledge Systems', 'Enterprise Copilots and Assistants', 'End-to-End Observability & MLOps'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/advanced-ai-enterprise-intelligence-hub', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🧠',
    href: '/ai-services/advanced-ai-enterprise-intelligence-hub',
    category: 'ai'
  },
  {
    id: 'ai_agent_safety_evaluation',
    title: 'Ai Agent Safety Evaluation',
    description: '',
    features: ['AI-powered automation', 'Enterprise integration', 'Real-time analytics'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-agent-safety-evaluation', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🤖',
    href: '/ai-services/ai-agent-safety-evaluation',
    category: 'ai'
  },
  {
    id: 'ai_agents_autonomous',
    title: 'AI Agents & Autonomous Workflows',
    description: 'Deploy autonomous AI agents that reason, plan, and act. Multi-step task execution, tool use, and human-in-the-loop controls for enterprise automation.',
    features: ['Reasoning & Planning', 'Tool & API Integration', 'Multi-Agent Orchestration', 'Human-in-the-Loop', 'Memory & Context', 'Observability & Safety'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-agents-autonomous', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🤖',
    href: '/ai-services/ai-agents-autonomous',
    category: 'ai'
  },
  {
    id: 'ai_context_engineering_enterprise',
    title: 'Ai Context Engineering Enterprise',
    description: '',
    features: ['AI-powered automation', 'Enterprise integration', 'Real-time analytics'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-context-engineering-enterprise', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🤖',
    href: '/ai-services/ai-context-engineering-enterprise',
    category: 'ai'
  },
  {
    id: 'ai_copilot_enterprise',
    title: 'AI Copilot & Enterprise Assistants',
    description: 'Deploy AI copilots and enterprise assistants that augment human work. Context-aware, role-specific AI embedded in your tools and workflows.',
    features: ['Context-Aware Assistance', 'Role-Specific Intelligence', 'Embedded in Your Tools', 'Controlled & Governed', 'Learning & Improvement', 'Multi-Modal Interaction'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-copilot-enterprise', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '👤',
    href: '/ai-services/ai-copilot-enterprise',
    category: 'ai'
  },
  {
    id: 'ai_edge_realtime_inference',
    title: 'AI Edge & Real-Time Inference',
    description: 'Deploy AI at the edge and in real time. Low-latency inference, on-device models, and streaming pipelines for mission-critical applications.',
    features: ['Edge-Deployed Models', 'Real-Time Streaming Pipelines', 'Hybrid Cloud-Edge Orchestration', 'Model Optimization & Quantization', 'Low-Latency APIs', 'Observability at the Edge'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-edge-realtime-inference', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '⚡',
    href: '/ai-services/ai-edge-realtime-inference',
    category: 'ai'
  },
  {
    id: 'ai_finetuning_alignment_pipelines',
    title: 'Ai Finetuning Alignment Pipelines',
    description: '',
    features: ['AI-powered automation', 'Enterprise integration', 'Real-time analytics'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-finetuning-alignment-pipelines', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🤖',
    href: '/ai-services/ai-finetuning-alignment-pipelines',
    category: 'ai'
  },
  {
    id: 'ai_foundation_models_custom_training',
    title: 'AI Foundation Models & Custom Training',
    description: 'Train and deploy custom foundation models. Domain-specific pretraining, fine-tuning, and model adaptation for enterprise AI with full data sovereig...',
    features: ['Domain-Specific Pretraining', 'Efficient Fine-Tuning & Adaptation', 'Alignment & Safety Training', 'Continuous Learning Pipelines', 'Model Compression & Export', 'Data Pipeline & Curation'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-foundation-models-custom-training', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🏗️',
    href: '/ai-services/ai-foundation-models-custom-training',
    category: 'ai'
  },
  {
    id: 'ai_governance_trust',
    title: 'AI Governance & Trust',
    description: 'Enterprise AI governance, compliance, and risk management. Policy enforcement, bias detection, audit trails, and responsible AI frameworks for regu...',
    features: ['Policy & Guardrail Enforcement', 'Bias & Fairness Monitoring', 'Audit Trails & Traceability', 'Model Risk Management', 'Regulatory Compliance', 'Responsible AI Frameworks'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-governance-trust', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '⚖️',
    href: '/ai-services/ai-governance-trust',
    category: 'ai'
  },
  {
    id: 'ai_integration_apis',
    title: 'AI Integration & APIs',
    description: 'Integrate AI into existing systems with unified APIs, event-driven pipelines, and enterprise connectors. One integration layer across LLMs, agents,...',
    features: ['Unified AI API Layer', 'Enterprise Connectors', 'Event-Driven Pipelines', 'Structured Outputs & Orchestration', 'Security & Access Control', 'Observability & Versioning'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-integration-apis', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🔌',
    href: '/ai-services/ai-integration-apis',
    category: 'ai'
  },
  {
    id: 'ai_memory_agents_long_horizon',
    title: 'Ai Memory Agents Long Horizon',
    description: '',
    features: ['AI-powered automation', 'Enterprise integration', 'Real-time analytics'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-memory-agents-long-horizon', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🤖',
    href: '/ai-services/ai-memory-agents-long-horizon',
    category: 'ai'
  },
  {
    id: 'ai_model_orchestration',
    title: 'AI Model Orchestration',
    description: 'Multi-model AI orchestration, routing, and fallback. Optimize cost, latency, and quality by routing requests to the right model for each task.',
    features: ['Intelligent Model Routing', 'Fallback & Resilience', 'Cost & Latency Optimization', 'Unified API Layer', 'A/B Testing & Evaluation', 'Observability & Analytics'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-model-orchestration', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🎛️',
    href: '/ai-services/ai-model-orchestration',
    category: 'ai'
  },
  {
    id: 'ai_multimodal_intelligence',
    title: 'AI Multimodal Intelligence',
    description: 'Enterprise multimodal AI for text, video, images, and audio. Unified understanding across data types for document analysis, video insights, and int...',
    features: ['Unified Multimodal Understanding', 'Video Intelligence', 'Image & Visual Analysis', 'Document-to-Insight Pipelines', 'Real-Time & Batch Processing', 'Enterprise Security & Compliance'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-multimodal-intelligence', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🎬',
    href: '/ai-services/ai-multimodal-intelligence',
    category: 'ai'
  },
  {
    id: 'ai_observability_mlops',
    title: 'AI Observability & MLOps',
    description: 'Monitor, debug, and optimize AI systems at scale. End-to-end observability for LLMs, agents, and ML pipelines with tracing, evaluation, and cost an...',
    features: ['End-to-End Tracing', 'Quality & Safety Evaluation', 'Cost & Usage Analytics', 'MLOps Pipeline Management', 'Debugging & Root Cause', 'Compliance & Audit'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-observability-mlops', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📡',
    href: '/ai-services/ai-observability-mlops',
    category: 'ai'
  },
  {
    id: 'ai_rag_knowledge_systems',
    title: 'AI RAG & Knowledge Systems',
    description: 'Enterprise retrieval-augmented generation (RAG) for accurate, grounded AI. Connect LLMs to your knowledge bases, documents, and real-time data with...',
    features: ['Intelligent Retrieval', 'Source Attribution & Citations', 'Knowledge Graph Integration', 'Real-Time Data Grounding', 'Chunking & Embedding Strategies', 'Evaluation & Continuous Improvement'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-rag-knowledge-systems', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📚',
    href: '/ai-services/ai-rag-knowledge-systems',
    category: 'ai'
  },
  {
    id: 'ai_regulated_industries',
    title: 'AI for Regulated Industries',
    description: 'AI solutions built for healthcare, finance, legal, and government. HIPAA, SOC 2, GDPR, and EU AI Act–ready with audit trails and human oversight.',
    features: ['Regulatory-First Architecture', 'Human-in-the-Loop & Oversight', 'Bias & Fairness Monitoring', 'Documentation & Transparency', 'Sector-Specific Workflows', 'Vendor & Model Governance'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-regulated-industries', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🏛️',
    href: '/ai-services/ai-regulated-industries',
    category: 'ai'
  },
  {
    id: 'ai_security_responsible_ai',
    title: 'AI Security & Responsible AI',
    description: 'Secure AI systems and responsible deployment. Adversarial robustness, prompt injection defense, data privacy, and AI safety controls for enterprise...',
    features: ['Adversarial Robustness & Red-Teaming', 'Prompt & Input Guardrails', 'Data Privacy & Confidentiality', 'Model Supply Chain Security', 'Fairness & Bias Mitigation', 'Incident Response & Recovery'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-security-responsible-ai', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🛡️',
    href: '/ai-services/ai-security-responsible-ai',
    category: 'ai'
  },
  {
    id: 'ai_strategy_roadmap',
    title: 'AI Strategy & Roadmap',
    description: 'Align AI initiatives with business goals. Discovery workshops, use-case prioritization, vendor evaluation, and phased roadmaps for production AI at...',
    features: ['Discovery & Opportunity Mapping', 'Use-Case Prioritization', 'Vendor & Build-vs-Buy Evaluation', 'Phased Roadmap Design', 'KPI & Success Metrics', 'Governance & Risk Alignment'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-strategy-roadmap', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🗺️',
    href: '/ai-services/ai-strategy-roadmap',
    category: 'ai'
  },
  {
    id: 'autonomous_growth_intelligence',
    title: 'Autonomous Growth Intelligence',
    description: 'Design AI-powered acquisition, conversion, retention, and expansion loops with measurable impact models and deployment-safe execution plans.',
    features: ['Growth Opportunity Mapping', 'Conversion System Design', 'Retention & Expansion Playbooks', 'Autonomous Experimentation', 'Growth Data Foundation', 'Executive Growth Dashboard'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/autonomous-growth-intelligence', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📈',
    href: '/ai-services/autonomous-growth-intelligence',
    category: 'ai'
  },
  {
    id: 'business_intelligence',
    title: 'Business Intelligence',
    description: 'Business Intelligence transforms raw data into actionable intelligence with real-time dashboards, automated reporting, and predictive models. Make ...',
    features: ['AI-powered automation', 'Enterprise integration', 'Real-time analytics'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/business-intelligence', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📊',
    href: '/ai-services/business-intelligence',
    category: 'ai'
  },
  {
    id: 'content_generation',
    title: 'Content Generation',
    description: 'Content Generation empowers marketing and revenue teams with AI-driven campaign optimization, lead intelligence, and personalized outreach automati...',
    features: ['AI-powered automation', 'Enterprise integration', 'Real-time analytics'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/content-generation', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📈',
    href: '/ai-services/content-generation',
    category: 'ai'
  },
  {
    id: 'customer_experience',
    title: 'Customer Experience',
    description: 'Customer Experience elevates customer interactions with AI-driven support, intelligent routing, and personalized engagement across every touchpoint...',
    features: ['AI-powered automation', 'Enterprise integration', 'Real-time analytics'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/customer-experience', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '💬',
    href: '/ai-services/customer-experience',
    category: 'ai'
  },
  {
    id: 'document_processing',
    title: 'Document Processing',
    description: 'Document Processing eliminates manual bottlenecks with intelligent process automation, event-driven orchestration, and cross-system integration. Re...',
    features: ['AI-powered automation', 'Enterprise integration', 'Real-time analytics'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/document-processing', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🔄',
    href: '/ai-services/document-processing',
    category: 'ai'
  },
  {
    id: 'energy_management',
    title: 'Energy Management',
    description: 'Energy Management combines AI intelligence with practical engineering to solve real business challenges. Deploy production-ready capabilities that ...',
    features: ['AI-powered automation', 'Enterprise integration', 'Real-time analytics'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/energy-management', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '✨',
    href: '/ai-services/energy-management',
    category: 'ai'
  },
  {
    id: 'fraud_detection',
    title: 'Fraud Detection',
    description: 'Fraud Detection provides enterprise-grade security controls, continuous monitoring, and compliance automation. Reduce risk exposure and accelerate ...',
    features: ['AI-powered automation', 'Enterprise integration', 'Real-time analytics'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/fraud-detection', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🛡️',
    href: '/ai-services/fraud-detection',
    category: 'ai'
  },
  {
    id: 'generative_ai_enterprise',
    title: 'Generative AI Enterprise',
    description: 'Enterprise-scale generative AI for content, code, and data. Deploy secure, governed LLM workflows with custom models, RAG, and fine-tuning for prod...',
    features: ['Secure LLM Deployment', 'RAG & Knowledge Grounding', 'Custom Model Fine-Tuning', 'Multi-Modal Generation', 'Governance & Compliance', 'Cost & Performance Optimization'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/generative-ai-enterprise', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🧠',
    href: '/ai-services/generative-ai-enterprise',
    category: 'ai'
  },
  {
    id: 'hr_analytics',
    title: 'HR Analytics',
    description: 'HR Analytics transforms raw data into actionable intelligence with real-time dashboards, automated reporting, and predictive models. Make faster, m...',
    features: ['AI-powered automation', 'Enterprise integration', 'Real-time analytics'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/hr-analytics', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📊',
    href: '/ai-services/hr-analytics',
    category: 'ai'
  },
  {
    id: 'marketing_automation',
    title: 'Marketing Automation',
    description: 'Marketing Automation empowers marketing and revenue teams with AI-driven campaign optimization, lead intelligence, and personalized outreach automa...',
    features: ['AI-powered automation', 'Enterprise integration', 'Real-time analytics'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/marketing-automation', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📈',
    href: '/ai-services/marketing-automation',
    category: 'ai'
  },
  {
    id: 'predictive_maintenance',
    title: 'Predictive Maintenance',
    description: 'Predictive Maintenance combines AI intelligence with practical engineering to solve real business challenges. Deploy production-ready capabilities ...',
    features: ['AI-powered automation', 'Enterprise integration', 'Real-time analytics'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/predictive-maintenance', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '✨',
    href: '/ai-services/predictive-maintenance',
    category: 'ai'
  },
  {
    id: 'quality_assurance',
    title: 'Quality Assurance',
    description: 'Quality Assurance combines AI intelligence with practical engineering to solve real business challenges. Deploy production-ready capabilities that ...',
    features: ['AI-powered automation', 'Enterprise integration', 'Real-time analytics'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/quality-assurance', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '✨',
    href: '/ai-services/quality-assurance',
    category: 'ai'
  },
  {
    id: 'supply_chain',
    title: 'Supply Chain',
    description: 'Supply Chain delivers purpose-built AI solutions tailored to specific industry requirements. Accelerate digital transformation with domain-specific...',
    features: ['AI-powered automation', 'Enterprise integration', 'Real-time analytics'],
    benefits: ['Reduce operational costs', 'Accelerate decision-making', 'Scale seamlessly', 'Meet compliance requirements'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/supply-chain', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🏢',
    href: '/ai-services/supply-chain',
    category: 'ai'
  },
  {
    id: 'ai-supply-chain-intelligence',
    title: 'AI Supply Chain Intelligence',
    description: 'End-to-end supply chain visibility with predictive disruption alerts, multi-tier vendor risk scoring, and AI-driven cost optimization.',
    features: ['Real-time multi-tier visibility', 'Predictive disruption alerts', 'Vendor risk assessment', 'Cost optimization engine', 'Scenario simulation and planning'],
    benefits: ['Reduce disruption by 50%', 'Optimize inventory costs', 'Strengthen vendor relationships', 'Enable proactive planning'],
    pricing: { basic: '1299', pro: '2999', enterprise: '7999' },
    contactInfo: { website: '/ai-services/ai-supply-chain-intelligence', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🔗',
    href: '/ai-services/ai-supply-chain-intelligence',
    category: 'ai'
  },
  {
    id: 'ai-predictive-workforce-planning',
    title: 'AI Predictive Workforce Planning',
    description: 'Forecast hiring needs, optimize team composition, and predict attrition risk with AI-powered HR analytics and workforce modeling.',
    features: ['Attrition risk prediction', 'Skills gap analysis', 'Optimal team composition', 'Seasonal demand forecasting', 'Succession planning guidance'],
    benefits: ['Reduce unplanned turnover by 35%', 'Optimize hiring budget allocation', 'Build resilient teams', 'Accelerate strategic planning'],
    pricing: { basic: '599', pro: '1299', enterprise: '3499' },
    contactInfo: { website: '/ai-services/ai-predictive-workforce-planning', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '👥',
    href: '/ai-services/ai-predictive-workforce-planning',
    category: 'ai'
  },
  {
    id: 'ai-voice-agent-platform',
    title: 'AI Voice Agent Platform',
    description: 'Deploy conversational AI voice agents for customer service, outbound calls, appointment scheduling, and lead qualification with natural speech.',
    features: ['Natural voice synthesis', 'Real-time speech recognition', 'Multi-language support', 'CRM integration', 'Call analytics and scoring'],
    benefits: ['Handle 10x more calls', '24/7 customer availability', 'Reduce labor costs by 60%', 'Qualify leads automatically'],
    pricing: { basic: '499', pro: '1199', enterprise: '3999' },
    contactInfo: { website: '/ai-services/ai-voice-agent-platform', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🎙️',
    href: '/ai-services/ai-voice-agent-platform',
    category: 'ai'
  },
  {
    id: 'ai-financial-forecasting',
    title: 'AI Financial Forecasting & Planning',
    description: 'Revenue forecasting, cash flow prediction, and budget optimization using AI models trained on your historical and market data.',
    features: ['Revenue and expense forecasting', 'Cash flow prediction models', 'Scenario planning and simulation', 'Budget variance analysis', 'Automated financial reporting'],
    benefits: ['Reduce forecast errors by 40%', 'Improve budget accuracy', 'Enable proactive cash management', 'Support strategic decisions with data'],
    pricing: { basic: '899', pro: '2199', enterprise: '5999' },
    contactInfo: { website: '/ai-services/ai-financial-forecasting', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📊',
    href: '/ai-services/ai-financial-forecasting',
    category: 'ai'
  },
  {
    id: 'ai-content-moderation',
    title: 'AI Content Moderation Platform',
    description: 'Automated content review for user-generated platforms — detect spam, harassment, and policy violations across text, image, and video.',
    features: ['Multi-modal content analysis', 'Custom policy rule engine', 'Real-time moderation workflows', 'Appeal and escalation handling', 'Compliance audit logging'],
    benefits: ['Moderate 99% of content automatically', 'Reduce review team costs by 75%', 'Maintain community safety standards', 'Scale to millions of posts daily'],
    pricing: { basic: '399', pro: '999', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-content-moderation', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🛡️',
    href: '/ai-services/ai-content-moderation',
    category: 'ai'
  },
  {
    id: 'ai-customer-sentiment-analytics',
    title: 'AI Customer Sentiment Analytics',
    description: 'Real-time sentiment analysis across reviews, surveys, social media, and support interactions to drive proactive customer experience improvements.',
    features: ['Multi-channel sentiment tracking', 'Emotion intensity scoring', 'Trend detection and alerting', 'Competitor sentiment benchmarking', 'Actionable insight generation'],
    benefits: ['Predict customer churn 30 days early', 'Identify brand perception shifts', 'Prioritize CX improvements', 'Benchmark against competitors'],
    pricing: { basic: '349', pro: '799', enterprise: '1999' },
    contactInfo: { website: '/ai-services/ai-customer-sentiment-analytics', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '💭',
    href: '/ai-services/ai-customer-sentiment-analytics',
    category: 'ai'
  },
  {
    id: 'ai-code-migration-modernization',
    title: 'AI Code Migration & Modernization',
    description: 'Automatically migrate legacy codebases to modern frameworks (COBOL → Java, jQuery → React, Python 2 → Python 3) with AI-assisted refactoring.',
    features: ['Automated code translation', 'Dependency analysis and mapping', 'Test generation and validation', 'Incremental migration planning', 'Code quality scoring post-migration'],
    benefits: ['Reduce migration effort by 60%', 'Minimize business disruption', 'Modernize without complete rewrites', 'Maintain security and compliance'],
    pricing: { basic: '2999', pro: '7499', enterprise: '19999' },
    contactInfo: { website: '/ai-services/ai-code-migration-modernization', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '⚙️',
    href: '/ai-services/ai-code-migration-modernization',
    category: 'ai'
  },

  {
    id: 'ai-legal-doc-review',
    title: 'AI Legal Document Review',
    description: 'Accelerate legal document analysis with AI: extract clauses, flag risks, summarize contracts, and generate due diligence reports in minutes.',
    features: [
      'Contract clause extraction & classification',
      'Risk flagging & compliance checking',
      'Document summarization (NLP)',
      'Due diligence report generation',
      'Multi-language support (20+ languages)'
    ],
    benefits: [
      '90% faster document review',
      'Reduce missed clauses by 95%',
      'Lower outside counsel spend',
      'Standardize review across matters'
    ],
    pricing: {
      basic: '399',
      pro: '899',
      enterprise: '2499'
    },
    contactInfo: {
      website: '/ai-services/ai-legal-doc-review',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '⚖️',
    href: '/ai-services/ai-legal-doc-review',
    category: 'ai'
  },
  {
    id: 'ai-medical-imaging',
    title: 'AI Medical Imaging Assistant',
    description: 'AI-powered diagnostic support for radiology and pathology: detect anomalies in X-rays, MRIs, CT scans, and histopathology slides with high accuracy.',
    features: [
      'Multi-modality image analysis (X-ray, MRI, CT, ultrasound)',
      'Tumor & lesion detection & segmentation',
      'Bone fracture identification',
      'Priority triage (urgent cases flagged)',
      'DICOM & HL7 integration'
    ],
    benefits: [
      'Reduce radiologist reading time by 40%',
      'Increase early detection rates',
      'Lower false-negative risk',
      'Scale imaging capacity without hiring'
    ],
    pricing: {
      basic: '799',
      pro: '1799',
      enterprise: '4999'
    },
    contactInfo: {
      website: '/ai-services/ai-medical-imaging',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🏥',
    href: '/ai-services/ai-medical-imaging',
    category: 'ai'
  },
  {
    id: 'ai-supply-chain-visibility',
    title: 'AI Supply Chain Visibility Platform',
    description: 'End-to-end supply chain monitoring with AI-driven anomaly detection, predictive ETAs, and automated disruption alerts across suppliers, logistics, and inventory.',
    features: [
      'Real-time shipment tracking & ETA prediction',
      'Supplier risk scoring & early warning',
      'Inventory anomaly detection',
      'Automated disruption alerts (Slack/email)',
      'Root cause analysis & recommendation engine'
    ],
    benefits: [
      '85% on-time delivery improvement',
      '50% reduction in stockouts',
      '30% lower safety stock needs',
      'Proactive disruption mitigation'
    ],
    pricing: {
      basic: '549',
      pro: '1099',
      enterprise: '2799'
    },
    contactInfo: {
      website: '/ai-services/ai-supply-chain-visibility',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🚢',
    href: '/ai-services/ai-supply-chain-visibility',
    category: 'ai'
  },
  {
    id: 'ai-code-audit-security',
    title: 'AI Code Audit & Security Scanner',
    description: 'Comprehensive static analysis powered by AI: detect vulnerabilities, code smells, license compliance issues, and security anti-patterns before they reach production.',
    features: [
      'Static Application Security Testing (SAST)',
      'Secrets & credential leakage detection',
      'Dependency vulnerability scanning',
      'License compliance & risk assessment',
      'Remediation guidance with code suggestions'
    ],
    benefits: [
      'Prevent 95% of critical vulnerabilities',
      'Automated compliance reporting (SOC2, ISO)',
      'Reduce manual code review time by 70%',
      'Shift-left security integration'
    ],
    pricing: {
      basic: '199',
      pro: '499',
      enterprise: '1499'
    },
    contactInfo: {
      website: '/ai-services/ai-code-audit-security',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔒',
    href: '/ai-services/ai-code-audit-security',
    category: 'ai'
  },
  {
    id: 'ai-bdr-sdr',
    title: 'AI BDR/SDR Agent',
    description: 'Autonomous AI Business Development & Sales Development Representative: prospect, qualify, email, book meetings, and nurture leads 24/7 without human intervention.',
    features: [
      'Lead research & enrichment (LinkedIn, company data)',
      'Personalized cold email & LinkedIn outreach',
      'Intent signal detection & prioritization',
      'Automated meeting booking (Calendly integration)',
      'CRM sync (HubSpot, Salesforce)'
    ],
    benefits: [
      'Generate 50+ qualified meetings/month',
      '80% lower cost-per-lead vs human BDRs',
      '24/7 prospecting across timezones',
      'Scalable outbound engine'
    ],
    pricing: {
      basic: '699',
      pro: '1299',
      enterprise: '3499'
    },
    contactInfo: {
      website: '/ai-services/ai-bdr-sdr-agent',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📧',
    href: '/ai-services/ai-bdr-sdr-agent',
    category: 'ai'
  },
  {
    id: 'ai-financial-forecasting',
    title: 'AI Financial Forecasting & Budgeting',
    description: 'AI-driven cash flow forecasting, revenue modeling, expense categorization, and scenario planning for CFOs and finance teams.',
    features: [
      'Cash flow prediction (30/60/90-day)',
      'Revenue run-rate & ARR modeling',
      'Expense categorization & anomaly detection',
      'Scenario planning (best/worst case)',
      'Integration with QuickBooks, Xero, NetSuite'
    ],
    benefits: [
      '95% forecast accuracy',
      'Reduce budgeting cycle time by 80%',
      'Early warning on cash shortfalls',
      'Data-driven strategic planning'
    ],
    pricing: {
      basic: '499',
      pro: '999',
      enterprise: '2999'
    },
    contactInfo: {
      website: '/ai-services/ai-financial-forecasting',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📈',
    href: '/ai-services/ai-financial-forecasting',
    category: 'ai'
  },
  {
    id: 'ai-knowledge-base-agent',
    title: 'AI Knowledge Base & Knowledge Graph Agent',
    description: 'Turn your documents, wikis, and internal data into an intelligent, queryable knowledge graph with conversational AI search and automated content synchronization.',
    features: [
      'Multi-source document ingestion (PDF, DOC, Confluence, Notion)',
      'Semantic search with natural language queries',
      'Automated knowledge graph construction',
      'Answer citation & source linking',
      'Real-time sync with source systems'
    ],
    benefits: [
      'Cut research time by 80%',
      'Eliminate knowledge silos',
      'Onboard new hires 3x faster',
      'Maintain a single source of truth'
    ],
    pricing: {
      basic: '299',
      pro: '699',
      enterprise: '1999'
    },
    contactInfo: {
      website: '/ai-services/ai-knowledge-base-agent',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📚',
    href: '/ai-services/ai-knowledge-base-agent',
    category: 'ai'
  },
  {
    id: 'ai-visual-inspection',
    title: 'AI Visual Inspection & Quality Control',
    description: 'Computer vision-powered quality control for manufacturing: detect defects, classify product flaws, and ensure consistent quality on the production line.',
    features: [
      'Defect detection (scratches, dents, misalignments)',
      'Real-time inspection at line speed',
      'Anomaly detection on novel defect types',
      'Self-learning model improvement',
      'Integration with PLCs & MES systems'
    ],
    benefits: [
      'Reduce defect escape rate by 90%',
      'Lower QC labor costs by 60%',
      'Real-time quality dashboard',
      'Continuous model improvement'
    ],
    pricing: {
      basic: '599',
      pro: '1399',
      enterprise: '3999'
    },
    contactInfo: {
      website: '/ai-services/ai-visual-inspection',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '👁️',
    href: '/ai-services/ai-visual-inspection',
    category: 'ai'
  },
  {
    id: 'ai-chatbot-omnichannel',
    title: 'AI Omnichannel Chatbot',
    description: 'Unified AI assistant across website chat, Messenger, WhatsApp, SMS, and voice. Context-aware conversations with seamless human handoff.',
    features: [
      'Multichannel conversation orchestration',
      'Context memory across channels',
      'Fallback to live agents with full context',
      'Built-in analytics & conversation flows',
      'CRM & helpdesk integration'
    ],
    benefits: [
      '80% of queries resolved without human',
      'Consistent CX across all touchpoints',
      'Reduced agent handle time by 50%',
      '24/7/365 availability'
    ],
    pricing: {
      basic: '399',
      pro: '899',
      enterprise: '2499'
    },
    contactInfo: {
      website: '/ai-services/ai-omnichannel-chatbot',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '💬',
    href: '/ai-services/ai-omnichannel-chatbot',
    category: 'ai'
  },
  {
    id: 'ai-call-center-voice-analytics',
    title: 'AI Call Center Voice Analytics',
    description: 'Real-time call transcription, sentiment analysis, agent coaching insights, and compliance monitoring for contact centers.',
    features: [
      'Real-time speech-to-text transcription',
      'Sentiment & emotion detection',
      'Agent compliance monitoring (PCI, GDPR)',
      'Automated coaching suggestions',
      'Keyword & topic trend analysis'
    ],
    benefits: [
      'Improve CSAT scores by 25%',
      'Reduce agent onboarding time by 50%',
      'Automated compliance evidence collection',
      'Identify upsell opportunities in real-time'
    ],
    pricing: {
      basic: '299',
      pro: '699',
      enterprise: '1899'
    },
    contactInfo: {
      website: '/ai-services/ai-call-center-voice-analytics',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📞',
    href: '/ai-services/ai-call-center-voice-analytics',
    category: 'ai'
  },
  {
    id: 'devops-gen-ai-ci-cd',
    title: 'Generative AI for DevOps & CI/CD',
    description: 'AI-powered DevOps: auto-generate CI/CD pipelines, infrastructure-as-code, deployment scripts, and incident runbooks from natural language specifications.',
    features: [
      'Natural language to pipeline generation',
      'IaC template creation (Terraform, CloudFormation)',
      'Automated incident runbook drafting',
      'Self-healing deployment rollbacks',
      'Performance anomaly detection & tuning'
    ],
    benefits: [
      'Reduce pipeline setup time by 85%',
      'Eliminate configuration drift',
      'Faster incident resolution (MTTR)',
      'Consistent infrastructure standards'
    ],
    pricing: {
      basic: '499',
      pro: '1099',
      enterprise: '3299'
    },
    contactInfo: {
      website: '/it-services/devops-gen-ai-ci-cd',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔄',
    href: '/it-services/devops-gen-ai-ci-cd',
    category: 'it'
  },
  {
    id: 'cloud-cost-ai-optimizer',
    title: 'AI Cloud Cost Optimizer',
    description: 'Continuously analyze cloud spend (AWS, Azure, GCP) and automatically implement cost-saving actions: rightsizing, reserved instances, spot instance switching, and idle resource cleanup.',
    features: [
      'Multi-cloud cost aggregation & normalization',
      'AI-driven rightsizing recommendations',
      'Automated RI/SP purchase optimization',
      'Idle resource detection & auto-cleanup',
      'Anomaly detection & budget alerts'
    ],
    benefits: [
      'Save 30-40% on cloud spend',
      'Zero upfront engineering effort',
      'Prevent cost overruns proactively',
      'Detailed cost attribution by team/project'
    ],
    pricing: {
      basic: '299',
      pro: '699',
      enterprise: '1999'
    },
    contactInfo: {
      website: '/it-services/cloud-cost-ai-optimizer',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '💸',
    href: '/it-services/cloud-cost-ai-optimizer',
    category: 'it'
  },
  {
    id: 'data-warehouse-modernization',
    title: 'AI Data Warehouse Modernization',
    description: 'Modernize legacy data warehouses (Oracle, Teradata, on-prem) to cloud-native solutions (Snowflake, BigQuery, Redshift) with AI-assisted schema mapping and migration validation.',
    features: [
      'Legacy schema extraction & analysis',
      'AI-powered schema mapping to target',
      'Automated ETL/ELT pipeline generation',
      'Data lineage & impact analysis',
      'Post-migration validation & reconciliation'
    ],
    benefits: [
      '60% faster migration timelines',
      'Zero data loss guarantee',
      '50% lower TCO vs traditional consultancies',
      'Future-proof cloud-native architecture'
    ],
    pricing: {
      basic: '1499',
      pro: '3499',
      enterprise: '9999'
    },
    contactInfo: {
      website: '/it-services/data-warehouse-modernization',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🗄️',
    href: '/it-services/data-warehouse-modernization',
    category: 'it'
  },
  {
    id: 'cyber-threat-intelligence',
    title: 'AI Cyber Threat Intelligence Platform',
    description: 'Proactive threat intelligence gathering, analysis, and prioritization from dark web, exploit feeds, and threat actor TTPs to stay ahead of attacks.',
    features: [
      'Automated threat feed ingestion (50+ sources)',
      'AI-driven threat prioritization (impact scoring)',
      'IOC & TTP matching against your environment',
      'Dark web monitoring for leaked credentials',
      'Executive threat briefings & reporting'
    ],
    benefits: [
      'Reduce mean time to detect (MTTD) by 70%',
      'Prevent credential-based attacks',
      'Prioritize fixes based on actual risk',
      'Compliance-ready audit trails'
    ],
    pricing: {
      basic: '599',
      pro: '1399',
      enterprise: '3999'
    },
    contactInfo: {
      website: '/it-services/cyber-threat-intelligence',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🛡️',
    href: '/it-services/cyber-threat-intelligence',
    category: 'it'
  },
  {
    id: 'low-code-platform-customization',
    title: 'Low-Code Platform Customization & Integration',
    description: 'Extend and integrate your low-code platforms (Retool, Appian, Power Apps, OutSystems) with custom components, APIs, and enterprise system connectors.',
    features: [
      'Custom UI component development',
      'Enterprise system connectors (SAP, Oracle, legacy)',
      'API Gateway & middleware integration',
      'Performance optimization & caching',
      'Security hardening & audit logging'
    ],
    benefits: [
      'Extend low-code app capabilities by 10x',
      'Seamless integration with legacy systems',
      'Reduce custom dev time by 70%',
      'Enterprise-grade security & compliance'
    ],
    pricing: {
      basic: '399',
      pro: '899',
      enterprise: '2499'
    },
    contactInfo: {
      website: '/it-services/low-code-platform-customization',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🧩',
    href: '/it-services/low-code-platform-customization',
    category: 'it'
  },
  {
    id: 'api-management-gateway',
    title: 'API Management & Developer Gateway',
    description: 'Full-lifecycle API management: gateway, developer portal, analytics, monetization, and security (OAuth, JWT, rate limiting) for your API products.',
    features: [
      'High-performance API gateway (10k+ RPS)',
      'Developer self-service portal',
      'Analytics: usage, latency, errors',
      'API monetization & billing integration',
      'Security: OAuth2, JWT validation, rate limiting'
    ],
    benefits: [
      'Launch API products 5x faster',
      'Monitor & debug API issues in real-time',
      'Protect backend services from abuse',
      'Revenue stream from API usage'
    ],
    pricing: {
      basic: '499',
      pro: '1199',
      enterprise: '3599'
    },
    contactInfo: {
      website: '/it-services/api-management-gateway',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔌',
    href: '/it-services/api-management-gateway',
    category: 'it'
  },

// New AI services batch to insert into servicesData.ts at aiServices closing (after line 1871)
// This content will be inserted BEFORE the final "];"

  {
    id: 'ai-video-generator',
    title: 'AI Video Generator & Editor',
    description: 'Generate professional videos from text prompts or scripts: auto-scene composition, voiceover, subtitles, and multi-format export (MP4, GIF, Reels).',
    features: [
      'Text-to-video generation (diffusion + GANs)',
      'Auto storyboard & scene composition',
      'AI voiceover with 50+ languages',
      'Built-in captions & subtitles',
      'Export for social (9:16, 1:1, 16:9)'
    ],
    benefits: [
      'Produce 10x faster than manual editing',
      'No filming or editing experience needed',
      'Consistent brand style across videos',
      'Scale video content for marketing'
    ],
    pricing: {
      basic: '399',
      pro: '999',
      enterprise: '2999'
    },
    contactInfo: {
      website: '/ai-services/ai-video-generator',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🎬',
    href: '/ai-services/ai-video-generator',
    category: 'ai'
  },
  {
    id: 'ai-seo-optimizer',
    title: 'AI SEO Content Optimizer',
    description: 'Real-time SEO analysis and content optimization: keyword suggestions, meta tag generation, readability scoring, and content gap analysis.',
    features: [
      'On-page SEO audit & recommendations',
      'Automated meta title & description generation',
      'Readability & grammar improvement',
      'Competitor content gap analysis',
      'Internal linking suggestions'
    ],
    benefits: [
      'Rank higher in search results',
      'Increase organic traffic by 40%',
      'Reduce content optimization time by 80%',
      'Stay ahead of algorithm updates'
    ],
    pricing: {
      basic: '199',
      pro: '499',
      enterprise: '1299'
    },
    contactInfo: {
      website: '/ai-services/ai-seo-optimizer',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔍',
    href: '/ai-services/ai-seo-optimizer',
    category: 'ai'
  },
  {
    id: 'ai-contract-manager',
    title: 'AI Contract Manager',
    description: 'End-to-end contract lifecycle management: AI-powered drafting, review, clause library, obligation tracking, and renewal alerts.',
    features: [
      'Smart clause library & assembly',
      'Obligation & deadline tracking',
      'Risk scoring & non-standard clause flagging',
      'Automated renewal & expiration alerts',
      'Integration with DocuSign & Adobe Sign'
    ],
    benefits: [
      'Cut contract cycle time by 70%',
      'Never miss a renewal again',
      'Reduce legal review burden',
      'Standardize contract terms'
    ],
    pricing: {
      basic: '599',
      pro: '1399',
      enterprise: '3999'
    },
    contactInfo: {
      website: '/ai-services/ai-contract-manager',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📝',
    href: '/ai-services/ai-contract-manager',
    category: 'ai'
  },
  {
    id: 'ai-personalized-learning',
    title: 'AI Personalized Learning Platform',
    description: 'Adaptive learning paths powered by AI: skill gap analysis, micro-lesson generation, progress tracking, and competency-based assessments.',
    features: [
      'Skill assessment & gap analysis',
      'Personalized learning path generation',
      'Auto-generated micro-lessons (5–10 min)',
      'Progress analytics & leaderboards',
      'Integration with LMS (SCORM, xAPI)'
    ],
    benefits: [
      'Increase training completion rates by 60%',
      'Reduce training development time by 80%',
      'Personalize at scale for 1000s of employees',
      'Maintain compliance certifications'
    ],
    pricing: {
      basic: '299',
      pro: '799',
      enterprise: '2499'
    },
    contactInfo: {
      website: '/ai-services/ai-personalized-learning',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🎓',
    href: '/ai-services/ai-personalized-learning',
    category: 'ai'
  },
  {
    id: 'ai-voice-agent',
    title: 'AI Voice Agent (Phone)',
    description: 'Human-like conversational AI for phone calls: inbound customer service, outbound sales calls, appointment scheduling, and support ticket creation.',
    features: [
      'Natural language understanding (NLU)',
      'Real-time speech synthesis & recognition',
      'Call routing & handoff to humans',
      'CRM integration (auto-log calls)',
      'Compliance recording & transcription'
    ],
    benefits: [
      'Handle 80% of calls without human agents',
      'Reduce call center costs by 70%',
      '24/7 availability across timezones',
      'Consistent, compliant call handling'
    ],
    pricing: {
      basic: '599',
      pro: '1499',
      enterprise: '4999'
    },
    contactInfo: {
      website: '/ai-services/ai-voice-agent',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📱',
    href: '/ai-services/ai-voice-agent',
    category: 'ai'
  },
  {
    id: 'ai-devops-chatbot',
    title: 'AI DevOps Chatbot',
    description: 'Natural language interface to your infrastructure: ask for logs, deployments, metrics, and incidents; get instant answers and auto-remediation suggestions.',
    features: [
      'Natural language queries over logs & metrics',
      'Incident root cause summarization',
      'Automated runbook execution (via chat)',
      'Slack/MS Teams integration',
      'Access control & audit logging'
    ],
    benefits: [
      'Reduce MTTR by 50%',
      'Empower juniors to troubleshoot like seniors',
      'Eliminate context switching between tools',
      'Document tribal knowledge automatically'
    ],
    pricing: {
      basic: '299',
      pro: '699',
      enterprise: '1999'
    },
    contactInfo: {
      website: '/ai-services/ai-devops-chatbot',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🤖',
    href: '/ai-services/ai-devops-chatbot',
    category: 'ai'
  },
  {
    id: 'ai-revenue-ops',
    title: 'AI Revenue Operations (RevOps)',
    description: 'Unify sales, marketing, and customer success data with AI-driven attribution, forecasting, and go-to-market (GTM) optimization.',
    features: [
      'Cross-channel attribution modeling',
      'Pipeline health scoring & prediction',
      'Customer churn prediction',
      'GTM motion analysis & recommendation',
      'Integration with Salesforce, HubSpot, Marketo'
    ],
    benefits: [
      'Increase forecast accuracy to >95%',
      'Identify at-risk accounts early',
      'Optimize marketing spend allocation',
      'Align GTM teams on one data source'
    ],
    pricing: {
      basic: '799',
      pro: '1699',
      enterprise: '4599'
    },
    contactInfo: {
      website: '/ai-services/ai-revenue-ops',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📈',
    href: '/ai-services/ai-revenue-ops',
    category: 'ai'
  },
  {
    id: 'ai-supply-demand-planner',
    title: 'AI Supply & Demand Planner',
    description: 'Demand forecasting, inventory optimization, and replenishment planning with AI-driven scenario modeling for manufacturing and retail.',
    features: [
      'Demand forecasting (SKU-level, multi-channel)',
      'Inventory optimization & safety stock calc',
      'Automatic purchase order suggestions',
      'What-if scenario modeling',
      'Supplier lead time prediction'
    ],
    benefits: [
      'Reduce stockouts by 60%',
      'Lower inventory carrying costs by 30%',
      ' Improve order fill rate to >98%',
      'Respond faster to demand shocks'
    ],
    pricing: {
      basic: '599',
      pro: '1299',
      enterprise: '3599'
    },
    contactInfo: {
      website: '/ai-services/ai-supply-demand-planner',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📦',
    href: '/ai-services/ai-supply-demand-planner',
    category: 'ai'
  },
  {
    id: 'ai-fraud-detection',
    title: 'AI Fraud Detection & Prevention',
    description: 'Real-time transaction monitoring with AI anomaly detection for fintech, e-commerce, and banking: stop fraud before it happens.',
    features: [
      'Real-time transaction scoring',
      'Behavioral biometrics & pattern recognition',
      'Chargeback prediction & prevention',
      ' AML pattern detection',
      'Custom rule engine + ML model ensemble'
    ],
    benefits: [
      'Reduce false positives by 70%',
      'Catch 95%+ of fraudulent transactions',
      'Lower chargeback fees',
      'Compliance with PCI-DSS, GDPR'
    ],
    pricing: {
      basic: '499',
      pro: '1199',
      enterprise: '3299'
    },
    contactInfo: {
      website: '/ai-services/ai-fraud-detection',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🛡️',
    href: '/ai-services/ai-fraud-detection',
    category: 'ai'
  },
  {
    id: 'ai-code-review-assistant',
    title: 'AI Code Review Assistant',
    description: 'Automated code review with AI: detect bugs, security flaws, performance anti-patterns, and suggest fixes with before/after diffs.',
    features: [
      'Static analysis with deep learning',
      'Security vulnerability detection',
      'Performance optimization suggestions',
      'Code style & best practice enforcement',
      'GitHub/GitLab/Bitbucket PR integration'
    ],
    benefits: [
      'Catch 80% of bugs before QA',
      'Reduce review cycles by 60%',
      'Onboard juniors faster with AI mentoring',
      'Maintain consistent code quality'
    ],
    pricing: {
      basic: '249',
      pro: '599',
      enterprise: '1699'
    },
    contactInfo: {
      website: '/ai-services/ai-code-review-assistant',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '👨\u200d💻',
    href: '/ai-services/ai-code-review-assistant',
    category: 'ai'
  },
  {
    id: 'ai-marketing-copy-generator',
    title: 'AI Marketing Copy Generator',
    description: 'Generate high-converting ad copy, email campaigns, social posts, and landing page content in your brand voice across 30+ languages.',
    features: [
      'Brand voice training & style guide adherence',
      'A/B variant generation',
      'SEO-optimized blog & ad copy',
      'Social media captions, hashtags',
      'Image-to-caption & video-to-description'
    ],
    benefits: [
      'Produce 50x content variations instantly',
      'Maintain consistent brand voice',
      'Reduce copywriter dependency',
      'Global reach with native-language copy'
    ],
    pricing: {
      basic: '199',
      pro: '499',
      enterprise: '1399'
    },
    contactInfo: {
      website: '/ai-services/ai-marketing-copy-generator',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '✍️',
    href: '/ai-services/ai-marketing-copy-generator',
    category: 'ai'
  },
  {
    id: 'ai-it-helpdesk',
    title: 'AI IT Helpdesk & Support',
    description: 'Automated Tier-1 IT support for employees: password resets, software installs, device troubleshooting, and knowledge base search.',
    features: [
      'Automated ticket creation & routing',
      'Knowledge base search with semantic understanding',
      'Password reset & MFA enrollment automation',
      'Software request fulfillment workflows',
      'Hardware troubleshooting decision trees'
    ],
    benefits: [
      'Resolve 70% of tickets without human agent',
      'Reduce helpdesk staffing costs by 60%',
      'Instant employee support 24/7',
      'Consistent, documented resolutions'
    ],
    pricing: {
      basic: '299',
      pro: '699',
      enterprise: '1899'
    },
    contactInfo: {
      website: '/it-services/ai-it-helpdesk',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🖥️',
    href: '/it-services/ai-it-helpdesk',
    category: 'it'
   },

   {
     id: 'ai-customer-support-agent',
     title: 'AI Customer Support Agent',
     description: "Fully automated 24/7 customer support using RAG + LLMs: answer FAQs, troubleshoot issues, process returns, and escalate complex tickets with context handoff.",
     features: [
       'Multilingual support (50+ languages)',
       'Integrations: Zendesk, Intercom, Salesforce',
       'Document retrieval from knowledge base (RAG)',
       'Sentiment-aware responses & escalation',
       'Analytics: resolution rate, CSAT impact'
     ],
     benefits: [
       'Cut support costs by 70%',
       'Instant responses (sub-second)',
       '80%+ ticket deflection from humans',
       'Always-on coverage across timezones'
     ],
     pricing: { basic: '299', pro: '799', enterprise: '2499' },
     contactInfo: { website: '/ai-services/ai-customer-support-agent', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🤖',
     href: '/ai-services/ai-customer-support-agent',
     category: 'ai'
   },
   {
     id: 'autonomous-code-review-agent',
     title: 'Autonomous Code Review Agent',
     description: 'AI-powered code review bot that analyzes pull requests for security flaws, performance antipatterns, style violations, and architectural drift across JavaScript/TypeScript, Python, and Go.',
     features: [
       'Static analysis + LLM-based reasoning',
       'Security vulnerability scoring (CWE, OWASP)',
       'Auto-suggested patches via diffs',
       'Custom rule engine per team standards',
       'CI/CD integration (GitHub Actions, GitLab CI)'
     ],
     benefits: [
       'Catch 90%+ of bugs before merge',
       'Reduce code review time by 60%',
       'Enforce consistent standards automatically',
       'Onboard new developers faster'
     ],
     pricing: { basic: '0', pro: '199', enterprise: '899' },
     contactInfo: { website: '/ai-services/autonomous-code-review-agent', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '👩‍💻',
     href: '/ai-services/autonomous-code-review-agent',
     category: 'ai'
   },
   {
     id: 'ai-driven-customer-segmentation',
     title: 'AI-Driven Customer Segmentation & Persona Engine',
     description: 'Cluster your customer base into meaningful personas using behavioral data, purchase history, and engagement patterns; deliver personalized marketing automatically.',
     features: [
       'K-means + hierarchical clustering models',
       'Dynamic segment recalculation (daily/weekly)',
       'Persona profiles with predictive scores',
       'Export to CRM/CDP (Segment, HubSpot)',
       'Campaign performance tracking per segment'
     ],
     benefits: [
       'Increase conversion rates by 35%',
       'Reduce churn with targeted retention offers',
       'Discover hidden high-value niches',
       'Automate personalized messaging'
     ],
     pricing: { basic: '399', pro: '999', enterprise: '3299' },
     contactInfo: { website: '/ai-services/ai-driven-customer-segmentation', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🎯',
     href: '/ai-services/ai-driven-customer-segmentation',
     category: 'ai'
   },
   {
     id: 'ai-powered-ui-generator',
     title: 'AI-Powered UI Generator (Text-to-UI)',
     description: 'Turn natural language descriptions into production-ready React/Next.js components with Tailwind styling; customize variants, states, and accessibility attributes via chat.',
     features: [
       'Natural language to JSX/TSX component generation',
       'Tailwind CSS class application',
       'Responsive breakpoint handling',
       'A11y attributes (aria-* roles & labels)',
       'Export to Figma/Storybook format'
     ],
     benefits: [
       'Ship UI 10x faster',
       'Maintain design consistency automatically',
       'Reduce frontend dev iteration cycles',
       'Prototypes in minutes, not days'
     ],
     pricing: { basic: '0', pro: '149', enterprise: '699' },
     contactInfo: { website: '/ai-services/ai-powered-ui-generator', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🎨',
     href: '/ai-services/ai-powered-ui-generator',
     category: 'ai'
   },
   {
     id: 'predictive-churn-risk',
     title: 'Predictive Churn Risk Scoring',
     description: 'Machine learning model to predict which customers will churn with 90%+ accuracy; trigger retention workflows before cancellation.',
     features: [
       'Feature engineering from usage & billing data',
       'Gradient boosting & survival analysis models',
       'Risk score per account (1-100)',
       'Automated retention offer triggers',
       'Dashboard with cohort analysis'
     ],
     benefits: [
       'Reduce monthly churn by 25%',
       'Target retention spend efficiently',
       'Identify at-risk accounts before they leave',
       'Improve LTV prediction accuracy'
     ],
     pricing: { basic: '299', pro: '799', enterprise: '2799' },
     contactInfo: { website: '/ai-services/predictive-churn-risk', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '📉',
     href: '/ai-services/predictive-churn-risk',
     category: 'ai'
   },
   {
     id: 'ai-powered-seo-optimizer',
     title: 'AI-Powered SEO Content Optimizer',
     description: 'Real-time SEO analysis and content optimization: auto-suggest keywords, restructure sentences for readability, generate meta tags, and audit for E-E-A-T signals.',
     features: [
       'On-page SEO scoring (0-100)',
       'Competitor gap analysis',
       'Automated meta title/description generation',
       'Readability improvement suggestions',
       'Schema.org structured data suggestions'
     ],
     benefits: [
       'Increase organic traffic by 40% within 3 months',
       'Outrank competitors on target keywords',
       'Ensure Google E-E-A-T compliance',
       'Automate technical SEO fixes'
     ],
     pricing: { basic: '99', pro: '299', enterprise: '999' },
     contactInfo: { website: '/ai-services/ai-powered-seo-optimizer', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🔍',
     href: '/ai-services/ai-powered-seo-optimizer',
     category: 'ai'
   },
   {
     id: 'ai-for-code-migration',
     title: 'AI-Assisted Code Migration & Refactoring',
     description: 'Automate legacy codebase modernization: convert jQuery to React, Python 2 to 3, AngularJS to modern frameworks with semantic-preserving transformations.',
     features: [
       'Language-to-language AST-based translation',
       'Preserve business logic & edge cases',
       'Interactive migration playground (preview changes)',
       'Test generation for migrated functions',
       'Gradual cutover strategy planning'
     ],
     benefits: [
       'Reduce migration project timeline by 75%',
       'Minimize regression risk via automated tests',
       'Lower cost vs. manual rewrite',
       'De-risk technical modernization'
     ],
     pricing: { basic: '2499', pro: '5999', enterprise: '19999' },
     contactInfo: { website: '/ai-services/ai-for-code-migration', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🔀',
     href: '/ai-services/ai-for-code-migration',
     category: 'ai'
   },
   {
     id: 'ai-powered-test-generation',
     title: 'AI-Powered Test Suite Generator',
     description: 'Automatically generate comprehensive unit, integration, and E2E tests from code, requirements, or user stories with high coverage and maintainability.',
     features: [
       'White-box test generation from source code',
       'Black-box tests from BDD/Gherkin specs',
       'E2E test generation via Puppeteer/Playwright',
       'Coverage gap analysis & prioritizing',
       'Test flake detection & stabilization'
     ],
     benefits: [
       'Achieve 80%+ code coverage automatically',
       'Ship features faster without manual test writing',
       'Catch regressions before production',
       'Reduce QA manual testing effort by 90%'
     ],
     pricing: { basic: '0', pro: '199', enterprise: '799' },
     contactInfo: { website: '/ai-services/ai-powered-test-generation', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🧪',
     href: '/ai-services/ai-powered-test-generation',
     category: 'ai'
   },
   {
     id: 'ai-powered-log-anomaly-detection',
     title: 'AI-Powered Log Anomaly Detection',
     description: 'Automatically detect unusual patterns, spikes, and errors in logs using unsupervised ML; reduce alert fatigue and surface issues before they cause outages.',
     features: [
       'Unsupervised clustering of log events',
       'Real-time anomaly scoring per time-series',
       'Seamless integration with ELK/Prometheus',
       'Alert suppression & correlation',
       'Root-cause hinting via pattern matching'
     ],
     benefits: [
       'Detect incidents 30+ minutes before monitoring',
       'Reduce false positive alerts by 80%',
       'Shorten MTTR with actionable insights',
       'Discover silent failures & edge cases'
     ],
     pricing: { basic: '299', pro: '699', enterprise: '1899' },
     contactInfo: { website: '/ai-services/ai-powered-log-anomaly-detection', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '📈',
     href: '/ai-services/ai-powered-log-anomaly-detection',
     category: 'ai'
   },
   {
     id: 'generative-data-synthesis',
     title: 'Generative Data Synthesis for Model Training',
     description: 'Create synthetic tabular, image, or text datasets to augment training data, balance classes, or simulate rare scenarios while preserving statistical fidelity.',
     features: [
       'Tabular data synthesis (CTGAN, TVAE)',
       'Image synthesis with diffusion models',
       'Privacy-preserving synthetic data (DP-SGD)',
       'Data augmentation pipelines',
       'Quality metrics (KSTest, coverage)'
     ],
     benefits: [
       'Bootstrap ML projects with limited data',
       'Balance underrepresented classes',
       'Protect PII while retaining data utility',
       'Simulate extreme scenarios for stress testing'
     ],
     pricing: { basic: '499', pro: '1199', enterprise: '3599' },
     contactInfo: { website: '/ai-services/generative-data-synthesis', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🌀',
     href: '/ai-services/generative-data-synthesis',
     category: 'ai'
   },
   {
     id: 'ai-sustainable-ops',
     title: 'AI for Sustainable Operations (Green AI)',
     description: 'Optimize compute & cloud resource usage to reduce carbon footprint: model carbon-aware scheduling, energy profiling, and sustainability reporting.',
     features: [
       'Carbon intensity forecasting per region',
       'Job scheduling to low-carbon time windows',
       'Resource right-sizing recommendations',
       'Sustainability KPI dashboards',
       'Compliance with ESG reporting standards'
     ],
     benefits: [
       'Reduce cloud carbon emissions by 40%',
       'Lower cost via energy optimization',
       'Meet corporate sustainability goals',
       'Public sustainability reporting for PR'
     ],
     pricing: { basic: '199', pro: '499', enterprise: '1499' },
     contactInfo: { website: '/ai-services/ai-sustainable-ops', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🌱',
     href: '/ai-services/ai-sustainable-ops',
     category: 'ai'
   },
   {
     id: 'legal-doc-review-ai',
     title: 'AI Legal Document Review & Risk Analysis',
     description: 'Accelerate legal contract review by 80%: extract obligations, flag risks, suggest clauses, and compare against playbooks using LLMs fine-tuned on legal corpora.',
     features: [
       'Clause extraction & classification (liability, IP, termination)',
       'Risk scoring per clause (high/medium/low)',
       'Deviation detection from standard templates',
       'Redline suggestions with rationale',
       'Multi-jurisdiction compliance checks'
     ],
     benefits: [
       'Review NDAs in minutes instead of hours',
       'Reduce external legal spend by 60%',
       'Never miss risky clauses again',
       'Scale legal review across hundreds of contracts'
     ],
     pricing: { basic: '499', pro: '1299', enterprise: '4999' },
     contactInfo: { website: '/ai-services/legal-doc-review-ai', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '⚖️',
     href: '/ai-services/legal-doc-review-ai',
     category: 'ai'
   },
   {
     id: 'ai-powered-passwordless-auth',
     title: 'AI-Powered Passwordless Authentication',
     description: 'Behavioral biometrics & risk-based authentication: continuous fraud detection using device fingerprinting, typing patterns, and anomaly detection without passwords.',
     features: [
       'Behavioral biometrics (keystroke dynamics, mouse movements)',
       'Device & location risk scoring',
       'Step-up authentication for anomalies',
       'FIDO2/WebAuthn integration',
       'Compliance: NIST 800-63B, PSD2 SCA'
     ],
     benefits: [
       'Eliminate phishing & password fatigue',
       'Reduce authentication friction for users',
       'Meet modern security standards without complexity',
       'Lower support cost for password resets'
     ],
     pricing: { basic: '299', pro: '799', enterprise: '2499' },
     contactInfo: { website: '/ai-services/ai-powered-passwordless-auth', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🔑',
     href: '/ai-services/ai-powered-passwordless-auth',
     category: 'ai'
   },
   {
     id: 'ai-powered-tech-debt-quantifier',
     title: 'AI-Powered Tech Debt Quantifier',
     description: 'Automatically identify, classify, and quantify technical debt: code complexity, duplication, outdated deps, test gaps, and architectural violations with remediation cost estimates.',
     features: [
       'Static code analysis + complexity heatmaps',
       'Dependency vulnerability & EOL detection',
       'Duplicate code detection with CloneDR',
       'Architecture rule validation (dependency cycles)',
       'Remediation effort estimation (person-days)'
     ],
     benefits: [
       'Make tech debt visible to leadership',
       'Prioritize refactoring by cost vs. risk',
       'Justify modernization budgets with data',
       'Track debt reduction over time'
     ],
     pricing: { basic: '299', pro: '799', enterprise: '2399' },
     contactInfo: { website: '/ai-services/ai-powered-tech-debt-quantifier', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🗑️',
     href: '/ai-services/ai-powered-tech-debt-quantifier',
     category: 'ai'
   },
   {
     id: 'generative-ux-research-synthesis',
     title: 'Generative UX Research Synthesis',
     description: 'Turn raw user interviews, survey responses, and usability test recordings into structured insights, personas, and actionable recommendations using AI.',
     features: [
       'Transcript summarization & theme extraction',
       'Sentiment analysis across user segments',
       'Automatic persona generation with quotes',
       'Journey map creation from session data',
       'Priority ranking of pain points'
     ],
     benefits: [
       'Analyze 100+ hours of user research in minutes',
       'Uncover hidden pain points automatically',
       'Create deliverables without manual synthesis',
       'Make user-centric decisions faster'
     ],
     pricing: { basic: '199', pro: '599', enterprise: '1899' },
     contactInfo: { website: '/ai-services/generative-ux-research-synthesis', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '👥',
     href: '/ai-services/generative-ux-research-synthesis',
     category: 'ai'
   },
   {
     id: 'ai-powered-incident-postmortem',
     title: 'AI-Powered Incident Postmortem Generator',
     description: 'Automatically generate blameless postmortem reports from incident data: timeline reconstruction, root cause hypothesis, action items, and status tracking.',
     features: [
       'Timeline assembly from logs/metrics/alerts',
       'Root cause inference via causal graph',
       'Impact quantification (users, revenue, SLA)',
       'Auto-generated action items with owners',
       'Follow-up tracking & closure verification'
     ],
     benefits: [
       'Write postmortems in 10 minutes vs. hours',
       'Consistent structure & quality across teams',
       'Identify systemic issues faster',
       'Improve reliability documentation'
     ],
     pricing: { basic: '299', pro: '699', enterprise: '1999' },
     contactInfo: { website: '/ai-services/ai-powered-incident-postmortem', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '📝',
     href: '/ai-services/ai-powered-incident-postmortem',
     category: 'ai'
   },
   {
     id: 'ai-driven-api-design-assistant',
     title: 'AI-Driven API Design Assistant',
     description: 'Design, document, and validate APIs using natural language specs; auto-generate OpenAPI/Swagger definitions, SDKs, and mock servers.',
     features: [
       'Natural language to OpenAPI 3.0 spec',
       'Schema validation & best practice linting',
       'Auto-generated client SDKs (10+ languages)',
       'Mock server with configurable responses',
       'Breaking change detection across versions'
     ],
     benefits: [
       'Design APIs 5x faster with AI guidance',
       'Ensure consistency & backward compatibility',
       'Ship SDKs automatically for all platforms',
       'Reduce design review cycles'
     ],
     pricing: { basic: '0', pro: '149', enterprise: '599' },
     contactInfo: { website: '/ai-services/ai-driven-api-design-assistant', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🔗',
     href: '/ai-services/ai-driven-api-design-assistant',
     category: 'ai'
   },
   {
     id: 'ai-powered-pr-drafting',
     title: 'AI-Powered PR Drafting & Description',
     description: 'Automatically generate PR titles, descriptions, and changelog entries from commit history and diff analysis; link to JIRA tickets and update documentation.',
     features: [
       'Intelligent diff summarization',
       'JIRA/GitHub issue linking & status updates',
       'Changelog entry drafting per semantic version',
       'Reviewer recommendation based on ownership',
       'Auto-update of API docs & README diffs'
     ],
     benefits: [
       'Consistent, high-quality PR descriptions',
       'Save 15+ minutes per PR on documentation',
       'Keep changelogs and releases up-to-date',
       'Improve code review context and velocity'
     ],
     pricing: { basic: '0', pro: '99', enterprise: '399' },
     contactInfo: { website: '/ai-services/ai-powered-pr-drafting', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '📦',
     href: '/ai-services/ai-powered-pr-drafting',
     category: 'ai'
   },
   {
     id: 'automated-data-labeling',
     title: 'Automated Data Labeling for Computer Vision & NLP',
     description: 'Scale data labeling 100x with AI-assisted annotation: pre-label images, text, and audio; human-in-the-loop review; export to COCO, Pascal VOC, JSONL.',
     features: [
       'Pre-labeling with foundation models (CLIP, YOLO)',
       'Active learning to prioritize ambiguous samples',
       'Collaborative annotation workspace',
       'Quality metrics & consensus scoring',
       'Export to all major ML data formats'
     ],
     benefits: [
       'Label 10,000 images in hours, not weeks',
       'Reduce labeling cost by 90%',
       'Improve model accuracy with high-quality labels',
       'Iterate on training data faster'
     ],
     pricing: { basic: '199', pro: '599', enterprise: '1799' },
     contactInfo: { website: '/ai-services/automated-data-labeling', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🏷️',
     href: '/ai-services/automated-data-labeling',
     category: 'ai'
   },
   {
     id: 'meeting-ai-assistant',
     title: 'Meeting AI Assistant (Record, Transcribe, Summarize)',
     description: "Automatic meeting assistant that records, transcribes with speaker ID, generates action items, decisions, and summaries; integrates with Zoom, Teams, Google Meet.",
     features: [
       'Cloud recording & real-time transcription',
       'Speaker identification & diarization',
       'Action item extraction with assignees',
       'Decision log & key quote highlights',
       'Sync to Notion/Confluence/ClickUp'
     ],
     benefits: [
       'Never miss an action item again',
       'Reduce meeting follow-up time by 80%',
       'Search across all past meeting transcripts',
       'Onboard new team members with context'
     ],
     pricing: { basic: '0', pro: '99', enterprise: '399' },
     contactInfo: { website: '/ai-services/meeting-ai-assistant', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🎙️',
     href: '/ai-services/meeting-ai-assistant',
     category: 'ai'
   },
   {
     id: 'ai-powered-question-answering',
     title: 'Enterprise AI Question Answering (Internal Knowledge)',
     description: 'Chatbot that answers employee questions from internal docs: HR policies, engineering runbooks, sales playbooks; cite sources, track unanswered queries.',
     features: [
       'RAG over private document corpus',
       'Source citation & confidence scores',
       'Multi-department bots (HR, Eng, Sales, Support)',
       'Feedback loop to improve answers',
       'Analytics: most-asked questions, gaps in docs'
     ],
     benefits: [
       'Reduce internal support tickets by 50%',
       'Onboard new hires instantly with accurate answers',
       'Keep institutional knowledge accessible',
       'Identify undocumented processes'
     ],
     pricing: { basic: '299', pro: '799', enterprise: '2299' },
     contactInfo: { website: '/ai-services/ai-powered-question-answering', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '💬',
     href: '/ai-services/ai-powered-question-answering',
     category: 'ai'
   },
   {
     id: 'ai-customer-support-agent',
     title: 'AI Customer Support Agent',
     description: "Fully automated 24/7 customer support using RAG + LLMs: answer FAQs, troubleshoot issues, process returns, and escalate complex tickets with context handoff.",
     features: [
       'Multilingual support (50+ languages)',
       'Integrations: Zendesk, Intercom, Salesforce',
       'Document retrieval from knowledge base (RAG)',
       'Sentiment-aware responses & escalation',
       'Analytics: resolution rate, CSAT impact'
     ],
     benefits: [
       'Cut support costs by 70%',
       'Instant responses (sub-second)',
       '80%+ ticket deflection from humans',
       'Always-on coverage across timezones'
     ],
     pricing: { basic: '299', pro: '799', enterprise: '2499' },
     contactInfo: { website: '/ai-services/ai-customer-support-agent', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🤖',
     href: '/ai-services/ai-customer-support-agent',
     category: 'ai'
   },
   {
     id: 'autonomous-code-review-agent',
     title: 'Autonomous Code Review Agent',
     description: 'AI-powered code review bot that analyzes pull requests for security flaws, performance antipatterns, style violations, and architectural drift across JavaScript/TypeScript, Python, and Go.',
     features: [
       'Static analysis + LLM-based reasoning',
       'Security vulnerability scoring (CWE, OWASP)',
       'Auto-suggested patches via diffs',
       'Custom rule engine per team standards',
       'CI/CD integration (GitHub Actions, GitLab CI)'
     ],
     benefits: [
       'Catch 90%+ of bugs before merge',
       'Reduce code review time by 60%',
       'Enforce consistent standards automatically',
       'Onboard new developers faster'
     ],
     pricing: { basic: '0', pro: '199', enterprise: '899' },
     contactInfo: { website: '/ai-services/autonomous-code-review-agent', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '👩‍💻',
     href: '/ai-services/autonomous-code-review-agent',
     category: 'ai'
   },
   {
     id: 'ai-driven-customer-segmentation',
     title: 'AI-Driven Customer Segmentation & Persona Engine',
     description: 'Cluster your customer base into meaningful personas using behavioral data, purchase history, and engagement patterns; deliver personalized marketing automatically.',
     features: [
       'K-means + hierarchical clustering models',
       'Dynamic segment recalculation (daily/weekly)',
       'Persona profiles with predictive scores',
       'Export to CRM/CDP (Segment, HubSpot)',
       'Campaign performance tracking per segment'
     ],
     benefits: [
       'Increase conversion rates by 35%',
       'Reduce churn with targeted retention offers',
       'Discover hidden high-value niches',
       'Automate personalized messaging'
     ],
     pricing: { basic: '399', pro: '999', enterprise: '3299' },
     contactInfo: { website: '/ai-services/ai-driven-customer-segmentation', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🎯',
     href: '/ai-services/ai-driven-customer-segmentation',
     category: 'ai'
   },
   {
     id: 'ai-powered-ui-generator',
     title: 'AI-Powered UI Generator (Text-to-UI)',
     description: 'Turn natural language descriptions into production-ready React/Next.js components with Tailwind styling; customize variants, states, and accessibility attributes via chat.',
     features: [
       'Natural language to JSX/TSX component generation',
       'Tailwind CSS class application',
       'Responsive breakpoint handling',
       'A11y attributes (aria-* roles & labels)',
       'Export to Figma/Storybook format'
     ],
     benefits: [
       'Ship UI 10x faster',
       'Maintain design consistency automatically',
       'Reduce frontend dev iteration cycles',
       'Prototypes in minutes, not days'
     ],
     pricing: { basic: '0', pro: '149', enterprise: '699' },
     contactInfo: { website: '/ai-services/ai-powered-ui-generator', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🎨',
     href: '/ai-services/ai-powered-ui-generator',
     category: 'ai'
   },
   {
     id: 'predictive-churn-risk',
     title: 'Predictive Churn Risk Scoring',
     description: 'Machine learning model to predict which customers will churn with 90%+ accuracy; trigger retention workflows before cancellation.',
     features: [
       'Feature engineering from usage & billing data',
       'Gradient boosting & survival analysis models',
       'Risk score per account (1-100)',
       'Automated retention offer triggers',
       'Dashboard with cohort analysis'
     ],
     benefits: [
       'Reduce monthly churn by 25%',
       'Target retention spend efficiently',
       'Identify at-risk accounts before they leave',
       'Improve LTV prediction accuracy'
     ],
     pricing: { basic: '299', pro: '799', enterprise: '2799' },
     contactInfo: { website: '/ai-services/predictive-churn-risk', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '📉',
     href: '/ai-services/predictive-churn-risk',
     category: 'ai'
   },
   {
     id: 'ai-powered-seo-optimizer',
     title: 'AI-Powered SEO Content Optimizer',
     description: 'Real-time SEO analysis and content optimization: auto-suggest keywords, restructure sentences for readability, generate meta tags, and audit for E-E-A-T signals.',
     features: [
       'On-page SEO scoring (0-100)',
       'Competitor gap analysis',
       'Automated meta title/description generation',
       'Readability improvement suggestions',
       'Schema.org structured data suggestions'
     ],
     benefits: [
       'Increase organic traffic by 40% within 3 months',
       'Outrank competitors on target keywords',
       'Ensure Google E-E-A-T compliance',
       'Automate technical SEO fixes'
     ],
     pricing: { basic: '99', pro: '299', enterprise: '999' },
     contactInfo: { website: '/ai-services/ai-powered-seo-optimizer', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🔍',
     href: '/ai-services/ai-powered-seo-optimizer',
     category: 'ai'
   },
   {
     id: 'ai-for-code-migration',
     title: 'AI-Assisted Code Migration & Refactoring',
     description: 'Automate legacy codebase modernization: convert jQuery to React, Python 2 to 3, AngularJS to modern frameworks with semantic-preserving transformations.',
     features: [
       'Language-to-language AST-based translation',
       'Preserve business logic & edge cases',
       'Interactive migration playground (preview changes)',
       'Test generation for migrated functions',
       'Gradual cutover strategy planning'
     ],
     benefits: [
       'Reduce migration project timeline by 75%',
       'Minimize regression risk via automated tests',
       'Lower cost vs. manual rewrite',
       'De-risk technical modernization'
     ],
     pricing: { basic: '2499', pro: '5999', enterprise: '19999' },
     contactInfo: { website: '/ai-services/ai-for-code-migration', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🔀',
     href: '/ai-services/ai-for-code-migration',
     category: 'ai'
   },
   {
     id: 'ai-powered-test-generation',
     title: 'AI-Powered Test Suite Generator',
     description: 'Automatically generate comprehensive unit, integration, and E2E tests from code, requirements, or user stories with high coverage and maintainability.',
     features: [
       'White-box test generation from source code',
       'Black-box tests from BDD/Gherkin specs',
       'E2E test generation via Puppeteer/Playwright',
       'Coverage gap analysis & prioritizing',
       'Test flake detection & stabilization'
     ],
     benefits: [
       'Achieve 80%+ code coverage automatically',
       'Ship features faster without manual test writing',
       'Catch regressions before production',
       'Reduce QA manual testing effort by 90%'
     ],
     pricing: { basic: '0', pro: '199', enterprise: '799' },
     contactInfo: { website: '/ai-services/ai-powered-test-generation', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🧪',
     href: '/ai-services/ai-powered-test-generation',
     category: 'ai'
   },
   {
     id: 'ai-powered-log-anomaly-detection',
     title: 'AI-Powered Log Anomaly Detection',
     description: 'Automatically detect unusual patterns, spikes, and errors in logs using unsupervised ML; reduce alert fatigue and surface issues before they cause outages.',
     features: [
       'Unsupervised clustering of log events',
       'Real-time anomaly scoring per time-series',
       'Seamless integration with ELK/Prometheus',
       'Alert suppression & correlation',
       'Root-cause hinting via pattern matching'
     ],
     benefits: [
       'Detect incidents 30+ minutes before monitoring',
       'Reduce false positive alerts by 80%',
       'Shorten MTTR with actionable insights',
       'Discover silent failures & edge cases'
     ],
     pricing: { basic: '299', pro: '699', enterprise: '1899' },
     contactInfo: { website: '/ai-services/ai-powered-log-anomaly-detection', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '📈',
     href: '/ai-services/ai-powered-log-anomaly-detection',
     category: 'ai'
   },
   {
     id: 'generative-data-synthesis',
     title: 'Generative Data Synthesis for Model Training',
     description: 'Create synthetic tabular, image, or text datasets to augment training data, balance classes, or simulate rare scenarios while preserving statistical fidelity.',
     features: [
       'Tabular data synthesis (CTGAN, TVAE)',
       'Image synthesis with diffusion models',
       'Privacy-preserving synthetic data (DP-SGD)',
       'Data augmentation pipelines',
       'Quality metrics (KSTest, coverage)'
     ],
     benefits: [
       'Bootstrap ML projects with limited data',
       'Balance underrepresented classes',
       'Protect PII while retaining data utility',
       'Simulate extreme scenarios for stress testing'
     ],
     pricing: { basic: '499', pro: '1199', enterprise: '3599' },
     contactInfo: { website: '/ai-services/generative-data-synthesis', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🌀',
     href: '/ai-services/generative-data-synthesis',
     category: 'ai'
   },
   {
     id: 'ai-sustainable-ops',
     title: 'AI for Sustainable Operations (Green AI)',
     description: 'Optimize compute & cloud resource usage to reduce carbon footprint: model carbon-aware scheduling, energy profiling, and sustainability reporting.',
     features: [
       'Carbon intensity forecasting per region',
       'Job scheduling to low-carbon time windows',
       'Resource right-sizing recommendations',
       'Sustainability KPI dashboards',
       'Compliance with ESG reporting standards'
     ],
     benefits: [
       'Reduce cloud carbon emissions by 40%',
       'Lower cost via energy optimization',
       'Meet corporate sustainability goals',
       'Public sustainability reporting for PR'
     ],
     pricing: { basic: '199', pro: '499', enterprise: '1499' },
     contactInfo: { website: '/ai-services/ai-sustainable-ops', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🌱',
     href: '/ai-services/ai-sustainable-ops',
     category: 'ai'
   },
   {
     id: 'legal-doc-review-ai',
     title: 'AI Legal Document Review & Risk Analysis',
     description: 'Accelerate legal contract review by 80%: extract obligations, flag risks, suggest clauses, and compare against playbooks using LLMs fine-tuned on legal corpora.',
     features: [
       'Clause extraction & classification (liability, IP, termination)',
       'Risk scoring per clause (high/medium/low)',
       'Deviation detection from standard templates',
       'Redline suggestions with rationale',
       'Multi-jurisdiction compliance checks'
     ],
     benefits: [
       'Review NDAs in minutes instead of hours',
       'Reduce external legal spend by 60%',
       'Never miss risky clauses again',
       'Scale legal review across hundreds of contracts'
     ],
     pricing: { basic: '499', pro: '1299', enterprise: '4999' },
     contactInfo: { website: '/ai-services/legal-doc-review-ai', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '⚖️',
     href: '/ai-services/legal-doc-review-ai',
     category: 'ai'
   },
   {
     id: 'ai-powered-passwordless-auth',
     title: 'AI-Powered Passwordless Authentication',
     description: 'Behavioral biometrics & risk-based authentication: continuous fraud detection using device fingerprinting, typing patterns, and anomaly detection without passwords.',
     features: [
       'Behavioral biometrics (keystroke dynamics, mouse movements)',
       'Device & location risk scoring',
       'Step-up authentication for anomalies',
       'FIDO2/WebAuthn integration',
       'Compliance: NIST 800-63B, PSD2 SCA'
     ],
     benefits: [
       'Eliminate phishing & password fatigue',
       'Reduce authentication friction for users',
       'Meet modern security standards without complexity',
       'Lower support cost for password resets'
     ],
     pricing: { basic: '299', pro: '799', enterprise: '2499' },
     contactInfo: { website: '/ai-services/ai-powered-passwordless-auth', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🔑',
     href: '/ai-services/ai-powered-passwordless-auth',
     category: 'ai'
   },
   {
     id: 'ai-powered-tech-debt-quantifier',
     title: 'AI-Powered Tech Debt Quantifier',
     description: 'Automatically identify, classify, and quantify technical debt: code complexity, duplication, outdated deps, test gaps, and architectural violations with remediation cost estimates.',
     features: [
       'Static code analysis + complexity heatmaps',
       'Dependency vulnerability & EOL detection',
       'Duplicate code detection with CloneDR',
       'Architecture rule validation (dependency cycles)',
       'Remediation effort estimation (person-days)'
     ],
     benefits: [
       'Make tech debt visible to leadership',
       'Prioritize refactoring by cost vs. risk',
       'Justify modernization budgets with data',
       'Track debt reduction over time'
     ],
     pricing: { basic: '299', pro: '799', enterprise: '2399' },
     contactInfo: { website: '/ai-services/ai-powered-tech-debt-quantifier', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🗑️',
     href: '/ai-services/ai-powered-tech-debt-quantifier',
     category: 'ai'
   },
   {
     id: 'generative-ux-research-synthesis',
     title: 'Generative UX Research Synthesis',
     description: 'Turn raw user interviews, survey responses, and usability test recordings into structured insights, personas, and actionable recommendations using AI.',
     features: [
       'Transcript summarization & theme extraction',
       'Sentiment analysis across user segments',
       'Automatic persona generation with quotes',
       'Journey map creation from session data',
       'Priority ranking of pain points'
     ],
     benefits: [
       'Analyze 100+ hours of user research in minutes',
       'Uncover hidden pain points automatically',
       'Create deliverables without manual synthesis',
       'Make user-centric decisions faster'
     ],
     pricing: { basic: '199', pro: '599', enterprise: '1899' },
     contactInfo: { website: '/ai-services/generative-ux-research-synthesis', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '👥',
     href: '/ai-services/generative-ux-research-synthesis',
     category: 'ai'
   },
   {
     id: 'ai-powered-incident-postmortem',
     title: 'AI-Powered Incident Postmortem Generator',
     description: 'Automatically generate blameless postmortem reports from incident data: timeline reconstruction, root cause hypothesis, action items, and status tracking.',
     features: [
       'Timeline assembly from logs/metrics/alerts',
       'Root cause inference via causal graph',
       'Impact quantification (users, revenue, SLA)',
       'Auto-generated action items with owners',
       'Follow-up tracking & closure verification'
     ],
     benefits: [
       'Write postmortems in 10 minutes vs. hours',
       'Consistent structure & quality across teams',
       'Identify systemic issues faster',
       'Improve reliability documentation'
     ],
     pricing: { basic: '299', pro: '699', enterprise: '1999' },
     contactInfo: { website: '/ai-services/ai-powered-incident-postmortem', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '📝',
     href: '/ai-services/ai-powered-incident-postmortem',
     category: 'ai'
   },
   {
     id: 'ai-driven-api-design-assistant',
     title: 'AI-Driven API Design Assistant',
     description: 'Design, document, and validate APIs using natural language specs; auto-generate OpenAPI/Swagger definitions, SDKs, and mock servers.',
     features: [
       'Natural language to OpenAPI 3.0 spec',
       'Schema validation & best practice linting',
       'Auto-generated client SDKs (10+ languages)',
       'Mock server with configurable responses',
       'Breaking change detection across versions'
     ],
     benefits: [
       'Design APIs 5x faster with AI guidance',
       'Ensure consistency & backward compatibility',
       'Ship SDKs automatically for all platforms',
       'Reduce design review cycles'
     ],
     pricing: { basic: '0', pro: '149', enterprise: '599' },
     contactInfo: { website: '/ai-services/ai-driven-api-design-assistant', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🔗',
     href: '/ai-services/ai-driven-api-design-assistant',
     category: 'ai'
   },
   {
     id: 'ai-powered-pr-drafting',
     title: 'AI-Powered PR Drafting & Description',
     description: 'Automatically generate PR titles, descriptions, and changelog entries from commit history and diff analysis; link to JIRA tickets and update documentation.',
     features: [
       'Intelligent diff summarization',
       'JIRA/GitHub issue linking & status updates',
       'Changelog entry drafting per semantic version',
       'Reviewer recommendation based on ownership',
       'Auto-update of API docs & README diffs'
     ],
     benefits: [
       'Consistent, high-quality PR descriptions',
       'Save 15+ minutes per PR on documentation',
       'Keep changelogs and releases up-to-date',
       'Improve code review context and velocity'
     ],
     pricing: { basic: '0', pro: '99', enterprise: '399' },
     contactInfo: { website: '/ai-services/ai-powered-pr-drafting', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '📦',
     href: '/ai-services/ai-powered-pr-drafting',
     category: 'ai'
   },
   {
     id: 'automated-data-labeling',
     title: 'Automated Data Labeling for Computer Vision & NLP',
     description: 'Scale data labeling 100x with AI-assisted annotation: pre-label images, text, and audio; human-in-the-loop review; export to COCO, Pascal VOC, JSONL.',
     features: [
       'Pre-labeling with foundation models (CLIP, YOLO)',
       'Active learning to prioritize ambiguous samples',
       'Collaborative annotation workspace',
       'Quality metrics & consensus scoring',
       'Export to all major ML data formats'
     ],
     benefits: [
       'Label 10,000 images in hours, not weeks',
       'Reduce labeling cost by 90%',
       'Improve model accuracy with high-quality labels',
       'Iterate on training data faster'
     ],
     pricing: { basic: '199', pro: '599', enterprise: '1799' },
     contactInfo: { website: '/ai-services/automated-data-labeling', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🏷️',
     href: '/ai-services/automated-data-labeling',
     category: 'ai'
   },
   {
     id: 'meeting-ai-assistant',
     title: 'Meeting AI Assistant (Record, Transcribe, Summarize)',
     description: "Automatic meeting assistant that records, transcribes with speaker ID, generates action items, decisions, and summaries; integrates with Zoom, Teams, Google Meet.",
     features: [
       'Cloud recording & real-time transcription',
       'Speaker identification & diarization',
       'Action item extraction with assignees',
       'Decision log & key quote highlights',
       'Sync to Notion/Confluence/ClickUp'
     ],
     benefits: [
       'Never miss an action item again',
       'Reduce meeting follow-up time by 80%',
       'Search across all past meeting transcripts',
       'Onboard new team members with context'
     ],
     pricing: { basic: '0', pro: '99', enterprise: '399' },
     contactInfo: { website: '/ai-services/meeting-ai-assistant', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🎙️',
     href: '/ai-services/meeting-ai-assistant',
     category: 'ai'
   },
   {
     id: 'ai-powered-question-answering',
     title: 'Enterprise AI Question Answering (Internal Knowledge)',
     description: 'Chatbot that answers employee questions from internal docs: HR policies, engineering runbooks, sales playbooks; cite sources, track unanswered queries.',
     features: [
       'RAG over private document corpus',
       'Source citation & confidence scores',
       'Multi-department bots (HR, Eng, Sales, Support)',
       'Feedback loop to improve answers',
       'Analytics: most-asked questions, gaps in docs'
     ],
     benefits: [
       'Reduce internal support tickets by 50%',
       'Onboard new hires instantly with accurate answers',
       'Keep institutional knowledge accessible',
       'Identify undocumented processes'
     ],
     pricing: { basic: '299', pro: '799', enterprise: '2299' },
     contactInfo: { website: '/ai-services/ai-powered-question-answering', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '💬',
     href: '/ai-services/ai-powered-question-answering',
     category: 'ai'
   },
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
  },
  {
    id: 'it-serverless-architecture',
    title: 'Serverless Architecture & Function-as-a-Service',
    description: 'Design and migrate to serverless architectures - automatic scaling, pay-per-use pricing, and zero infrastructure management across AWS Lambda, Azure, and GCP Cloud Run.',
    features: ['Serverless architecture design and migration', 'Cold start optimization', 'Event-driven architecture', 'Cost monitoring and function optimization', 'Multi-cloud serverless deployment'],
    benefits: ['Reduce infrastructure costs by 80%', 'No server management', 'Auto-scaling', 'Pay per compute execution'],
    pricing: { basic: '1799', pro: '3999', enterprise: '8999' },
    contactInfo: { website: '/it-services/serverless-architecture', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '☁️',
    href: '/it-services/serverless-architecture',
    category: 'cloud'
  },
  {
    id: 'it-api-management',
    title: 'API Management Platform & Developer Portal',
    description: 'Comprehensive API management - gateway, developer portal, monetization, analytics, and lifecycle management for enterprise API programs.',
    features: ['API gateway with rate limiting', 'Developer portal with docs and SDKs', 'Lifecycle management', 'Monetization', 'Real-time analytics'],
    benefits: ['Accelerate API adoption', 'Monetize APIs', 'Protect backends', 'Track performance'],
    pricing: { basic: '1499', pro: '3299', enterprise: '7499' },
    contactInfo: { website: '/it-services/api-management', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🔌',
    href: '/it-services/api-management',
    category: 'cloud'
  },
  {
    id: 'it-database-as-a-service',
    title: 'Database-as-a-Service & Managed Data Platforms',
    description: 'Fully managed databases - PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch with automated backups, scaling, and AI-powered optimization.',
    features: ['Multi-engine provisioning', 'Automated backups and PITR', 'AI query optimization', 'Auto-scaling and HA', 'Encryption and compliance'],
    benefits: ['No DBA overhead needed', '99.99% uptime SLA', 'Optimize queries automatically', 'Scale effortlessly'],
    pricing: { basic: '799', pro: '1899', enterprise: '4499' },
    contactInfo: { website: '/it-services/database-as-a-service', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🗄️',
    href: '/it-services/database-as-a-service',
    category: 'cloud'
  },
  {
    id: 'it-incident-response',
    title: 'Incident Response & Security Operations Center',
    description: '24/7 SOC and incident response - threat detection, investigation, containment, recovery with automated playbooks and forensics.',
    features: ['24/7 monitoring', 'Auto detection and classification', 'Response playbook automation', 'Digital forensics', 'Executive reporting'],
    benefits: ['Reduce MTTD by 80%', 'Automated containment', 'Compliance-ready docs', 'Expert IR on demand'],
    pricing: { basic: '2999', pro: '6499', enterprise: '14999' },
    contactInfo: { website: '/it-services/incident-response', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🚨',
    href: '/it-services/incident-response',
    category: 'security'
  },
  {
    id: 'it-voice-infrastructure',
    title: 'Voice Infrastructure & Contact Center Solutions',
    description: 'Modern contact center infrastructure - SIP trunking, IVR design, call routing, quality monitoring, and AI agent assistance.',
    features: ['SIP and VoIP infrastructure', 'Intelligent routing and IVR', 'Call quality monitoring', 'AI agent assistance', 'Omnichannel integration'],
    benefits: ['Reduce voice costs by 40%', 'Improve CSAT with smart routing', 'Call analytics insights', 'CRM integration ready'],
    pricing: { basic: '1299', pro: '2899', enterprise: '6499' },
    contactInfo: { website: '/it-services/voice-infrastructure', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📞',
    href: '/it-services/voice-infrastructure',
    category: 'cloud'
  },
  {
    id: 'it-identity-access-management',
    title: 'Identity & Access Management (IAM) Platform',
    description: 'Enterprise IAM with SSO, MFA, PAM, and automated access provisioning across cloud and on-premise systems — Zero Trust-ready identity governance.',
    features: ['Single sign-on (SSO) with 5000+ app integrations', 'Adaptive multi-factor authentication with risk scoring', 'Privileged access management (PAM) with session recording', 'Automated access provisioning and de-provisioning', 'Identity governance with access certification workflows'],
    benefits: ['Reduce access-related incidents by 90%', 'Achieve 100% compliance with identity best practices', 'Eliminate orphaned accounts and access creep', 'Seamless experience with frictionless SSO for users'],
    pricing: { basic: '999', pro: '2499', enterprise: '5999' },
    contactInfo: { website: '/it-services/iam-platform', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🔑',
    href: '/it-services/iam-platform',
    category: 'security'
  },
  {
    id: 'it-capacity-planning',
    title: 'IT Capacity Planning & Resource Forecasting',
    description: 'AI-driven capacity planning that forecasts compute, storage, and network requirements based on growth patterns and workload trends across your infrastructure.',
    features: ['Predictive capacity forecasting with ML models', 'Workload trend analysis and seasonal pattern detection', 'Cloud vs on-prem cost comparison modeling', 'Automated right-sizing recommendations', 'Budget impact simulation for capacity decisions'],
    benefits: ['Eliminate surprise capacity crises with early warnings', 'Optimize infrastructure spend by 25-40%', 'Plan capacity with 95% forecast accuracy', 'Make data-driven budget decisions'],
    pricing: { basic: '799', pro: '1799', enterprise: '3999' },
    contactInfo: { website: '/it-services/capacity-planning', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📊',
    href: '/it-services/capacity-planning',
    category: 'cloud'
  },
  {
    id: 'it-backup-disaster-recovery',
    title: 'Backup & Disaster Recovery Solutions',
    description: 'Enterprise-grade backup, replication, and disaster recovery — automated backups, immutable storage, multi-region replication, and one-click failover.',
    features: ['Automated incremental and full backup scheduling', 'Immutable backup storage (WORM) for ransomware protection', 'Multi-region replication for geographic redundancy', 'One-click disaster recovery with tested failover scripts', 'Compliance reporting and backup integrity verification'],
    benefits: ['Guarantee RPO of minutes, RTO of hours', 'Protect against ransomware with immutable backups', 'Meet all regulatory data retention requirements', 'Eliminate backup failures with automated monitoring'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/it-services/backup-recovery', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '💾',
    href: '/it-services/backup-recovery',
    category: 'cloud'
  },
  {
    id: 'it-network-automation',
    title: 'Network Automation & SD-WAN Management',
    description: 'Automated network configuration, monitoring, and optimization with SD-WAN, intent-based networking, and AI-driven performance management.',
    features: ['Intent-based network configuration automation', 'SD-WAN deployment and centralized management', 'AI-driven traffic routing and QoS optimization', 'Automated compliance checks and security policy enforcement', 'Network performance monitoring with predictive alerts'],
    benefits: ['Reduce network change errors by 80%', 'Optimize WAN costs by 40-60% with SD-WAN', 'Automate repetitive network administration tasks', 'Proactively address performance degradations'],
    pricing: { basic: '999', pro: '2299', enterprise: '5499' },
    contactInfo: { website: '/it-services/network-automation', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🌐',
    href: '/it-services/network-automation',
    category: 'cloud'
  },
  {
    id: 'api_development',
    title: 'API Development & Integration',
    description: 'Design, build, and manage high-performance APIs that connect systems, enable automation, and power digital products at enterprise scale.',
    features: ['Enterprise-grade implementation', '24/7 monitoring', 'Compliance-ready'],
    benefits: ['Reduced risk', 'Faster response', 'Audit-ready', 'Lower costs'],
    pricing: { basic: '899', pro: '1999', enterprise: '4499' },
    contactInfo: { website: '/it-services/api-development', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🔌',
    href: '/it-services/api-development',
    category: 'cloud'
  },
  {
    id: 'backup_disaster_recovery',
    title: 'Backup & Disaster Recovery',
    description: 'Enterprise backup solutions with automated disaster recovery, RPO/RSL guarantees, geo-redundant storage, and instant failover for zero data loss.',
    features: ['Enterprise-grade implementation', '24/7 monitoring', 'Compliance-ready'],
    benefits: ['Reduced risk', 'Faster response', 'Audit-ready', 'Lower costs'],
    pricing: { basic: '1,999', pro: '4,999', enterprise: 'Custom' },
    contactInfo: { website: '/it-services/backup-disaster-recovery', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '💾',
    href: '/it-services/backup-disaster-recovery',
    category: 'cloud'
  },
  {
    id: 'cybersecurity_audit',
    title: 'Cybersecurity Audit',
    description: 'Professional cybersecurity audit services by Zion Tech Group. Advanced AI and technology solutions.',
    features: ['Enterprise-grade implementation', '24/7 monitoring', 'Compliance-ready'],
    benefits: ['Reduced risk', 'Faster response', 'Audit-ready', 'Lower costs'],
    pricing: { basic: '899', pro: '1999', enterprise: '4499' },
    contactInfo: { website: '/it-services/cybersecurity-audit', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🔹',
    href: '/it-services/cybersecurity-audit',
    category: 'cloud'
  },
  {
    id: 'data_pipeline_architecture',
    title: 'Data Pipeline Architecture & Engineering',
    description: 'Build robust data pipelines with Kafka, Spark, Airflow for real-time and batch processing at enterprise scale.',
    features: ['Enterprise-grade implementation', '24/7 monitoring', 'Compliance-ready'],
    benefits: ['Reduced risk', 'Faster response', 'Audit-ready', 'Lower costs'],
    pricing: { basic: '3,999', pro: '9,999', enterprise: 'Custom' },
    contactInfo: { website: '/it-services/data-pipeline-architecture', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🔧',
    href: '/it-services/data-pipeline-architecture',
    category: 'cloud'
  },
  {
    id: 'devops_consulting',
    title: 'DevOps Consulting & Implementation',
    description: 'End-to-end DevOps transformation with CI/CD pipeline setup, infrastructure as code, container orchestration, and team training.',
    features: ['Enterprise-grade implementation', '24/7 monitoring', 'Compliance-ready'],
    benefits: ['Reduced risk', 'Faster response', 'Audit-ready', 'Lower costs'],
    pricing: { basic: '2,499', pro: '7,999', enterprise: 'Custom' },
    contactInfo: { website: '/it-services/devops-consulting', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '⚙️',
    href: '/it-services/devops-consulting',
    category: 'cloud'
  },
  {
    id: 'digital_workplace',
    title: 'Digital Workplace Solutions',
    description: 'Modern workplace technology stack with collaboration tools, secure remote access, AI assistants, and unified communications for distributed teams.',
    features: ['Enterprise-grade implementation', '24/7 monitoring', 'Compliance-ready'],
    benefits: ['Reduced risk', 'Faster response', 'Audit-ready', 'Lower costs'],
    pricing: { basic: '1,999', pro: '4,999', enterprise: 'Custom' },
    contactInfo: { website: '/it-services/digital-workplace', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🏢',
    href: '/it-services/digital-workplace',
    category: 'cloud'
  },
  {
    id: 'disaster_recovery_services',
    title: 'Disaster Recovery & Business Continuity',
    description: 'Enterprise DR planning, backup automation, geo-redundant infrastructure, and rapid business continuity solutions.',
    features: ['Enterprise-grade implementation', '24/7 monitoring', 'Compliance-ready'],
    benefits: ['Reduced risk', 'Faster response', 'Audit-ready', 'Lower costs'],
    pricing: { basic: '2,999', pro: '8,999', enterprise: 'Custom' },
    contactInfo: { website: '/it-services/disaster-recovery-services', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🔄',
    href: '/it-services/disaster-recovery-services',
    category: 'cloud'
  },
  {
    id: 'endpoint_management',
    title: 'Endpoint Device Management (MDM)',
    description: 'Centralized management of all endpoints — laptops, mobile devices, IoT — with automated patching, application deployment, and security policy enfor...',
    features: ['Enterprise-grade implementation', '24/7 monitoring', 'Compliance-ready'],
    benefits: ['Reduced risk', 'Faster response', 'Audit-ready', 'Lower costs'],
    pricing: { basic: '1,999', pro: '4,999', enterprise: 'Custom' },
    contactInfo: { website: '/it-services/endpoint-management', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📱',
    href: '/it-services/endpoint-management',
    category: 'cloud'
  },
  {
    id: 'identity_access_management',
    title: 'Identity & Access Management (IAM)',
    description: 'Enterprise IAM with SSO, MFA, privileged access management, and automated provisioning for secure, frictionless access across all applications.',
    features: ['Enterprise-grade implementation', '24/7 monitoring', 'Compliance-ready'],
    benefits: ['Reduced risk', 'Faster response', 'Audit-ready', 'Lower costs'],
    pricing: { basic: '1,999', pro: '4,999', enterprise: 'Custom' },
    contactInfo: { website: '/it-services/identity-access-management', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🔑',
    href: '/it-services/identity-access-management',
    category: 'cloud'
  },
  {
    id: 'it_asset_management',
    title: 'IT Asset Management & Lifecycle',
    description: 'Complete IT asset lifecycle management from procurement to disposal with automated discovery and license tracking.',
    features: ['Enterprise-grade implementation', '24/7 monitoring', 'Compliance-ready'],
    benefits: ['Reduced risk', 'Faster response', 'Audit-ready', 'Lower costs'],
    pricing: { basic: '799', pro: '1,999', enterprise: 'Custom' },
    contactInfo: { website: '/it-services/it-asset-management', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📦',
    href: '/it-services/it-asset-management',
    category: 'cloud'
  },
  {
    id: 'it_service_desk',
    title: 'IT Service Desk & Help Desk',
    description: 'Multi-channel IT support with AI-powered ticket triage, self-service portals, SLA management, and automated resolution for 60%+ of common issues.',
    features: ['Enterprise-grade implementation', '24/7 monitoring', 'Compliance-ready'],
    benefits: ['Reduced risk', 'Faster response', 'Audit-ready', 'Lower costs'],
    pricing: { basic: '1,999', pro: '4,999', enterprise: 'Custom' },
    contactInfo: { website: '/it-services/it-service-desk', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🎧',
    href: '/it-services/it-service-desk',
    category: 'cloud'
  },
  {
    id: 'managed_soc_security',
    title: 'Managed SOC & Security Operations',
    description: '24/7 Security Operations Center services with AI-powered threat detection, incident response, and continuous monitoring for your entire infrastruct...',
    features: ['Enterprise-grade implementation', '24/7 monitoring', 'Compliance-ready'],
    benefits: ['Reduced risk', 'Faster response', 'Audit-ready', 'Lower costs'],
    pricing: { basic: '1,999', pro: '4,999', enterprise: 'Custom' },
    contactInfo: { website: '/it-services/managed-soc-security', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🛡️',
    href: '/it-services/managed-soc-security',
    category: 'cloud'
  },
  {
    id: 'mobile_development',
    title: 'Mobile App Development',
    description: 'Build cross-platform and native mobile applications with AI-powered features, offline-first architecture, and enterprise-grade security.',
    features: ['Enterprise-grade implementation', '24/7 monitoring', 'Compliance-ready'],
    benefits: ['Reduced risk', 'Faster response', 'Audit-ready', 'Lower costs'],
    pricing: { basic: '899', pro: '1999', enterprise: '4499' },
    contactInfo: { website: '/it-services/mobile-development', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📱',
    href: '/it-services/mobile-development',
    category: 'cloud'
  },
  {
    id: 'network_infrastructure',
    title: 'Enterprise Network Infrastructure',
    description: 'Design, deploy, and manage enterprise-grade networks with SD-WAN, wireless optimization, zero-trust architecture, and real-time performance monitor...',
    features: ['Enterprise-grade implementation', '24/7 monitoring', 'Compliance-ready'],
    benefits: ['Reduced risk', 'Faster response', 'Audit-ready', 'Lower costs'],
    pricing: { basic: '1,999', pro: '4,999', enterprise: 'Custom' },
    contactInfo: { website: '/it-services/network-infrastructure', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🌐',
    href: '/it-services/network-infrastructure',
    category: 'cloud'
  },
  {
    id: 'network_security_operations',
    title: 'Network Security Operations Center',
    description: '24/7 network security monitoring, threat detection, incident response, and vulnerability management.',
    features: ['Enterprise-grade implementation', '24/7 monitoring', 'Compliance-ready'],
    benefits: ['Reduced risk', 'Faster response', 'Audit-ready', 'Lower costs'],
    pricing: { basic: '4,999', pro: '12,999', enterprise: 'Custom' },
    contactInfo: { website: '/it-services/network-security-operations', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🛡️',
    href: '/it-services/network-security-operations',
    category: 'cloud'
  },
  {
    id: 'managed-soc-threat-intelligence',
    title: 'Managed SOC & Threat Intelligence',
    description: '24/7 Security Operations Center with AI-enhanced threat detection, incident response, and proactive threat hunting.',
    features: ['24/7 security monitoring', 'AI-powered threat detection', 'Incident response automation', 'Proactive threat hunting', 'Compliance reporting'],
    benefits: ['Detect threats in real-time', 'Reduce mean response time to minutes', 'Meet SOC 2 and ISO 27001 requirements', 'Protect against zero-day attacks'],
    pricing: { basic: '1999', pro: '4999', enterprise: '12999' },
    contactInfo: { website: '/it-services/managed-soc-threat-intelligence', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🔒',
    href: '/it-services/managed-soc-threat-intelligence',
    category: 'it'
  },
  {
    id: 'kubernetes-management',
    title: 'Container Orchestration & Kubernetes Management',
    description: 'Expert Kubernetes deployment, scaling, monitoring, and optimization for containerized applications with GitOps-driven workflows.',
    features: ['Cluster design and deployment', 'Auto-scaling configuration', 'Service mesh implementation', 'CI/CD pipeline integration', 'Cost optimization and rightsizing'],
    benefits: ['Reduce infrastructure costs by 35%', 'Enable zero-downtime deployments', 'Scale from hundreds to thousands of pods', 'Streamline developer workflows'],
    pricing: { basic: '999', pro: '2499', enterprise: '6999' },
    contactInfo: { website: '/it-services/kubernetes-management', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🐳',
    href: '/it-services/kubernetes-management',
    category: 'it'
  },
  {
    id: 'it-service-desk-automation',
    title: 'IT Service Desk Automation',
    description: 'AI-powered IT service management with intelligent ticket routing, auto-resolution, self-service portals, and SLA monitoring.',
    features: ['Intelligent ticket classification', 'Auto-resolution engine', 'Self-service knowledge base', 'SLA monitoring and escalation', 'Performance analytics'],
    benefits: ['Resolve 40% of tickets automatically', 'Reduce average response time by 60%', 'Improve end-user satisfaction', 'Lower IT support costs'],
    pricing: { basic: '499', pro: '1199', enterprise: '3499' },
    contactInfo: { website: '/it-services/it-service-desk-automation', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🎧',
    href: '/it-services/it-service-desk-automation',
    category: 'it'
  },
  {
    id: 'enterprise-backup-dr',
    title: 'Enterprise Backup & Disaster Recovery',
    description: 'Comprehensive data protection with automated backups, instant recovery, ransomware protection, and geo-redundant storage.',
    features: ['Automated backup scheduling', 'Point-in-time recovery', 'Ransomware detection and isolation', 'Geo-redundant replication', 'Compliance-ready retention policies'],
    benefits: ['Achieve 99.99% data durability', 'Meet RPO/RTO SLA targets', 'Protect against ransomware', 'Ensure business continuity'],
    pricing: { basic: '299', pro: '799', enterprise: '2499' },
    contactInfo: { website: '/it-services/enterprise-backup-dr', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '💾',
    href: '/it-services/enterprise-backup-dr',
    category: 'it'
  },
  {
    id: 'network-architecture-sdwan',
    title: 'Network Architecture & SD-WAN',
    description: 'Design, deploy, and manage enterprise networks with SD-WAN, zero-trust architecture, and intelligent traffic optimization.',
    features: ['SD-WAN design and deployment', 'Network performance monitoring', 'Zero-trust segmentation', 'Traffic optimization policies', 'Multi-site connectivity management'],
    benefits: ['Reduce WAN costs by 50%', 'Improve application performance', 'Secure remote workforce access', 'Simplify multi-cloud networking'],
    pricing: { basic: '799', pro: '1999', enterprise: '5499' },
    contactInfo: { website: '/it-services/network-architecture-sdwan', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🌐',
    href: '/it-services/network-architecture-sdwan',
    category: 'it'
  },

  {
    id: 'it-sam-platform',
    title: 'IT Service Asset & Configuration Management',
    description: 'Complete IT asset discovery, configuration mapping, and dependency visualization for cloud and on-prem environments.',
    features: [
      'Automated discovery of servers, cloud resources, IoT devices',
      'Configuration item (CI) relationship mapping',
      'Change impact analysis',
      'License compliance & inventory tracking',
      'Integration with ITSM tools (ServiceNow, Jira)'
    ],
    benefits: [
      'Reduce unplanned downtime by 40%',
      'Accelerate change planning with dependency graphs',
      'Maintain software license compliance',
      'Single source of truth for CMDB'
    ],
    pricing: {
      basic: '599',
      pro: '1399',
      enterprise: '3999'
    },
    contactInfo: {
      website: '/it-services/it-sam-platform',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🗺️',
    href: '/it-services/it-sam-platform',
    category: 'it'
  },
  {
    id: 'vulnerability-assessment-penetration-testing',
    title: 'Vulnerability Assessment & Penetration Testing',
    description: 'Proactive security testing: automated vulnerability scanning, manual pen-testing, exploit validation, and remediation guidance for web, mobile, and network.',
    features: [
      'Automated vulnerability scanning (DAST, SCA, SAST)',
      'Manual penetration testing (white/grey/black box)',
      'Exploit validation & risk scoring',
      'Remediation guidance & proof-of-concept fixes',
      'Compliance reports (PCI-DSS, HIPAA, SOC2)'
    ],
    benefits: [
      'Discover 95%+ of security gaps',
      'Prioritize fixes by exploitability & impact',
      'Meet compliance audit requirements',
      'Reduce security incident rate'
    ],
    pricing: {
      basic: '1999',
      pro: '4999',
      enterprise: '14999'
    },
    contactInfo: {
      website: '/it-services/vulnerability-assessment-penetration-testing',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🧐',
    href: '/it-services/vulnerability-assessment-penetration-testing',
    category: 'it'
  },
  {
    id: 'remote-it-support',
    title: 'Remote IT Support & Helpdesk Outsourcing',
    description: '24/7 outsourced IT helpdesk and desktop support for distributed workforces: remote troubleshooting, incident management, and user onboarding.',
    features: [
      '24/7/365 Tier-1/2 support (phone, chat, email)',
      'Remote desktop access & fix (TeamViewer, AnyDesk)',
      'Onboarding/offboarding automation',
      'Incident ticketing & SLA management',
      'Knowledge base & self-service portal'
    ],
    benefits: [
      'Eliminate in-house helpdesk hiring',
      'Reduce incident resolution time by 50%',
      'Improve employee satisfaction (ESAT)',
      'Global coverage across timezones'
    ],
    pricing: {
      basic: '499',
      pro: '1199',
      enterprise: '3499'
    },
    contactInfo: {
      website: '/it-services/remote-it-support',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🎧',
    href: '/it-services/remote-it-support',
    category: 'it'
  },
  {
    id: 'database-optimization',
    title: 'Database Performance Optimization',
    description: 'Expert tuning for PostgreSQL, MySQL, MongoDB, Redis: query optimization, index strategy, replication, and high-availability architecture.',
    features: [
      'Query plan analysis & index optimization',
      'Schema redesign for performance',
      'Connection pooling & caching strategies',
      'Read replica & clustering setup',
      'Slow query monitoring & auto-tuning'
    ],
    benefits: [
      '2–10x faster query response times',
      'Reduce database load by 60%',
      'Prevent performance-related outages',
      'Lower infrastructure costs (smaller instances)'
    ],
    pricing: {
      basic: '799',
      pro: '1899',
      enterprise: '5499'
    },
    contactInfo: {
      website: '/it-services/database-optimization',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🗄️',
    href: '/it-services/database-optimization',
    category: 'it'
  },
  {
    id: 'endpoint-management',
    title: 'Unified Endpoint Management (UEM)',
    description: 'Manage and secure all devices (laptops, mobile, IoT) from a single dashboard: enrollment, policy enforcement, patch management, and remote wipe.',
    features: [
      'Cross-platform device enrollment (Windows, macOS, iOS, Android, Linux)',
      'Automated patch & update deployment',
      'Endpoint detection & response (EDR)',
      'Application whitelisting & app catalog',
      'Remote lock, wipe, and geofencing'
    ],
    benefits: [
      'Reduce endpoint management overhead by 80%',
      'Enforce security policy compliance automatically',
      'Fast incident response across device fleet',
      'Support BYOD securely'
    ],
    pricing: {
      basic: '299',
      pro: '699',
      enterprise: '1999'
    },
    contactInfo: {
      website: '/it-services/endpoint-management',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '💻',
    href: '/it-services/endpoint-management',
    category: 'it'
  },
  {
    id: 'legacy-system-modernization',
    title: 'Legacy System Modernization & Re-Platforming',
    description: 'Migrate from legacy mainframes, monoliths, or outdated tech stacks to cloud-native microservices with minimal business disruption.',
    features: [
      'System analysis & dependency discovery',
      'Strangler fig pattern migration planning',
      'Database migration with CDC (change data capture)',
      'API gateway & service mesh setup',
      'Cut-over planning & rollback strategy'
    ],
    benefits: [
      'Reduce TCO by up to 70%',
      'Improve system scalability & agility',
      'Eliminate vendor lock-in & EOL risks',
      'Modern developer experience (CI/CD, containers)'
    ],
    pricing: {
      basic: '2499',
      pro: '5999',
      enterprise: '19999'
    },
    contactInfo: {
      website: '/it-services/legacy-system-modernization',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🏗️',
    href: '/it-services/legacy-system-modernization',
    category: 'it'
  },
  {
    id: 'quantum-ready-security',
    title: 'Quantum-Ready Cryptography & Security Assessment',
    description: 'Prepare for the post-quantum era: assess cryptographic exposure, migrate to quantum-resistant algorithms (PQC), and implement hybrid security solutions.',
    features: [
      'Cryptographic inventory & quantum risk assessment',
      'PQC algorithm migration planning',
      'Hybrid RSA/PQC implementation guidance',
      'Code & dependency remediation',
      'Executive briefing & compliance roadmap'
    ],
    benefits: [
      'Future-proof against quantum attacks',
      'Meet emerging NIST PQC standards',
      'Protect long-lived sensitive data',
      'Stay ahead of regulatory requirements'
    ],
    pricing: {
      basic: '1499',
      pro: '3499',
      enterprise: '9999'
    },
    contactInfo: {
      website: '/it-services/quantum-ready-security',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔐',
    href: '/it-services/quantum-ready-security',
    category: 'it'
  },
  {
    id: 'observability-platform',
    title: 'Full-Stack Observability Platform',
    description: 'Unified logs, metrics, traces, and distributed tracing with AI-powered anomaly detection and automated root-cause analysis for microservices.',
    features: [
      'Log aggregation & full-text search (ELK-compatible)',
      'Metrics collection & dashboards (Prometheus/Grafana)',
      'Distributed tracing (OpenTelemetry)',
      'AI-driven anomaly detection & alerting',
      'SLO/SLI tracking & error budget burn rate'
    ],
    benefits: [
      'Reduce MTTR by 65%',
      'Proactive issue detection before customers notice',
      'Unified view across clouds & on-prem',
      'Data-driven reliability engineering'
    ],
    pricing: {
      basic: '499',
      pro: '1199',
      enterprise: '3299'
    },
    contactInfo: {
      website: '/it-services/observability-platform',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📊',
    href: '/it-services/observability-platform',
    category: 'it'
  },
  {
    id: 'soc-as-a-service',
    title: 'Security Operations Center as a Service (SOCaaS)',
    description: '24/7 managed security monitoring, threat hunting, incident response, and compliance reporting — no need to build your own SOC.',
    features: [
      '24/7 security monitoring (SIEM)',
      'Threat hunting & proactive investigation',
      'Incident response (IR) on call',
      'Compliance reporting (PCI-DSS, HIPAA, GDPR)',
      'Regular executive security briefings'
    ],
    benefits: [
      'Enterprise-grade security without the headcount',
      'Detect & respond to threats in minutes, not days',
      'Pass compliance audits with ease',
      'Predictable monthly cost vs. unpredictable breaches'
    ],
    pricing: {
      basic: '1499',
      pro: '3499',
      enterprise: '9999'
    },
    contactInfo: {
      website: '/it-services/soc-as-a-service',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🚨',
    href: '/it-services/soc-as-a-service',
    category: 'it'
  },
  {
    id: 'nodejs-performance-tuning',
    title: 'Node.js Performance Tuning & Profiling',
    description: 'Deep performance optimization for Node.js applications: event loop analysis, memory leak detection, concurrency tuning, and scalability architecture review.',
    features: [
      'Event loop delay monitoring & troubleshooting',
      'Memory profiling & leak detection',
      'CPU & I/O bottleneck analysis',
      'Cluster & worker threads optimization',
      'Garbage collection tuning'
    ],
    benefits: [
      'Improve request throughput by 3–5x',
      'Reduce latency p99 by 60%',
      'Lower cloud compute costs (fewer instances)',
      'Prevent runtime crashes in production'
    ],
    pricing: {
      basic: '699',
      pro: '1599',
      enterprise: '4599'
    },
    contactInfo: {
      website: '/it-services/nodejs-performance-tuning',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🟢',
    href: '/it-services/nodejs-performance-tuning',
    category: 'it'
  },
  {
    id: 'etl-pipeline-optimization',
    title: 'ETL Pipeline Optimization & Modernization',
    description: 'Accelerate and stabilize data pipelines (batch & streaming): refactor legacy ETL, migrate to Airflow/DBT, add observability, and reduce cost.',
    features: [
      'Pipeline bottleneck analysis & profiling',
      'Code refactoring & parallelization',
      'Migration to cloud-native (Glue, Dataflow, Flink)',
      'Data quality checks & anomaly detection',
      'Cost optimization (spot instances, auto-scaling)'
    ],
    benefits: [
      'Cut pipeline runtime by 70%',
      'Reduce data engineering maintenance burden',
      'Improve data freshness & reliability',
      'Lower cloud processing costs'
    ],
    pricing: {
      basic: '899',
      pro: '2099',
      enterprise: '5999'
    },
    contactInfo: {
      website: '/it-services/etl-pipeline-optimization',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔄',
    href: '/it-services/etl-pipeline-optimization',
    category: 'it'
  },
  {
    id: 'incident-response-retainer',
    title: 'Incident Response Retainer (IR)',
    description: '24/7 on-call incident response for security breaches, ransomware, and major outages: forensic analysis, containment, eradication, and recovery.',
    features: [
      '24/7 on-call IR team (SANS-certified)',
      'Forensic evidence collection & chain of custody',
      'Containment & eradication planning',
      'Post-incident root cause analysis (RCA)',
      'Executive communication & regulatory reporting'
    ],
    benefits: [
      'Minimize breach impact & downtime',
      'Meet regulatory reporting deadlines (72h)',
      'Preserve evidence for legal action',
      'Build long-term resilience with RCA'
    ],
    pricing: {
      basic: '2499',
      pro: '5999',
      enterprise: '19999'
    },
    contactInfo: {
      website: '/it-services/incident-response-retainer',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🚑',
    href: '/it-services/incident-response-retainer',
    category: 'it'
   },

];
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
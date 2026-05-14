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
   },  {
    id: 'ai-dyslexia-assist',
    title: 'AI Dyslexia Assist',
    description: `Real-time reading & writing assistance for dyslexic users with personalized text-to-speech, word prediction, and phonetic correction.`,
    features: ["Live text highlighting", "Custom font recommendations", "Smart spell-check tuned for dyslexia", "Audio playback with adjustable speed"],
    benefits: ["Improves reading speed by up to 40%", "Reduces writing errors by 60%", "Boosts confidence in professional communication"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-dyslexia-assist',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📖',
    href: '/ai-services/ai-dyslexia-assist',
    category: 'ai'
  },

  {
    id: 'ai-supply-chain-predictor',
    title: 'AI Supply Chain Predictor',
    description: `Predicts supply chain disruptions 14–30 days in advance using multi-source data: weather, geopolitical events, shipping delays, and supplier health scores.`,
    features: ["Demand forecasting with 94% accuracy", "Alternative routing suggestions", "Supplier risk scoring", "Real-time anomaly alerts"],
    benefits: ["Reduces stockouts by 35%", "Cuts expedited shipping costs by 22%", "Improves supplier negotiation leverage"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-supply-chain-predictor',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🚢',
    href: '/ai-services/ai-supply-chain-predictor',
    category: 'ai'
  },

  {
    id: 'ai-contract-review',
    title: 'AI Contract Review Assistant',
    description: `Automatically reviews legal contracts, flags risky clauses, suggests amendments, and benchmarks against industry standards.`,
    features: ["Clause risk scoring (1-10)", "Comparison with 200K+ public contracts", "AI-suggested redlines", "Compliance checklist generation"],
    benefits: ["Cuts review time from hours to minutes", "Catches 95% of standard risks", "Reduces outside counsel dependency"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-contract-review',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📝',
    href: '/ai-services/ai-contract-review',
    category: 'ai'
  },

  {
    id: 'ai-accessibility-auditor',
    title: 'AI Accessibility Auditor',
    description: `Automated WCAG 2.1 AA compliance scans for websites & apps with screen-reader simulation, color contrast testing, and keyboard navigation checks.`,
    features: ["Full-page accessibility scoring", "Component-level issue mapping", "Remediation code snippets", "Automated PDF accessibility check"],
    benefits: ["Avoid ADA lawsuit risks", "Improve SEO through accessibility", "Enhance UX for all users"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-accessibility-auditor',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '♿',
    href: '/ai-services/ai-accessibility-auditor',
    category: 'ai'
  },

  {
    id: 'ai-mental-health-chatbot',
    title: 'AI Mental Health Companion',
    description: `Empathetic, HIPAA-compliant chatbot providing CBT-based support, mood tracking, and crisis escalation to licensed professionals.`,
    features: ["Mood journal with trends", "Personalized coping strategies", "Crisis keyword detection to human handoff", "Weekly mental health reports"],
    benefits: ["24/7 anonymous support", "Reduces therapy wait times", "Scalable early intervention"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-mental-health-chatbot',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🧠',
    href: '/ai-services/ai-mental-health-chatbot',
    category: 'ai'
  },

  {
    id: 'ai-customer-sentiment-tracker',
    title: 'AI Customer Sentiment Tracker',
    description: `Monitors support tickets, reviews, social mentions, and surveys to produce a real-time Net Promoter Score (NPS) and emotion heatmap.`,
    features: ["Multi-channel aggregation (email, chat, social)", "Emotion classification (8 categories)", "Trend alerts for sentiment drops", "Root-cause topic clustering"],
    benefits: ["Detect brand crises within hours", "Identify at-risk accounts proactively", "Measure campaign impact on sentiment"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-customer-sentiment-tracker',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📊',
    href: '/ai-services/ai-customer-sentiment-tracker',
    category: 'ai'
  },

  {
    id: 'ai-codebase-doc-generator',
    title: 'AI Codebase Documentation Generator',
    description: `Automatically generates architecture diagrams, API docs, and README files by analyzing your Git repository and code dependencies.`,
    features: ["Interactive dependency graph", "Auto-updated API endpoint docs", "Change-log highlighting", "Developer onboarding checklist"],
    benefits: ["Cuts documentation time by 80%", "Keeps docs in sync with code", "Eases new hire ramp-up"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-codebase-doc-generator',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📚',
    href: '/ai-services/ai-codebase-doc-generator',
    category: 'ai'
  },

  {
    id: 'ai-competitive-intel-engine',
    title: 'AI Competitive Intel Engine',
    description: `Tracks competitors' pricing changes, feature launches, hiring patterns, and customer reviews to deliver weekly strategic insights.`,
    features: ["Price monitoring across 50+ sources", "Feature gap analysis vs your product", "Hiring intent detection (e.g. 'hiring 20 engineers')", "Sentiment on competitor brands"],
    benefits: ["Informs pricing strategy", "Prioritizes product roadmap", "Anticipates competitor moves"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-competitive-intel-engine',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔍',
    href: '/ai-services/ai-competitive-intel-engine',
    category: 'ai'
  },

  {
    id: 'ai-voice-cloning-marketing',
    title: 'AI Voice Cloning for Marketing',
    description: `Clone your brand spokesperson's voice to produce personalized video ads, podcast intros, and multilingual marketing content.`,
    features: ["Voice clone with 5 min sample", "Emotion & tone control", "30+ language output", "Bulk video rendering API"],
    benefits: ["Reduces voiceover costs by 70%", "Scales personalized campaigns", "Maintains brand consistency"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-voice-cloning-marketing',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🎙️',
    href: '/ai-services/ai-voice-cloning-marketing',
    category: 'ai'
  },

  {
    id: 'ai-fraud-detection-finance',
    title: 'AI Fraud Detection for Finance',
    description: `Real-time transaction monitoring for banks, fintechs, and accounting firms with explainable AI decisions and SAR report generation.`,
    features: ["Rule-based plus ML hybrid model", "Explainable decision reasons (XAI)", "Adaptive learning from investigator feedback", "Automatic SAR filing templates"],
    benefits: ["Reduces false positives by 40%", "Meets FinCEN requirements", "Detects novel fraud patterns"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-fraud-detection-finance',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🛡️',
    href: '/ai-services/ai-fraud-detection-finance',
    category: 'ai'
  },

  {
    id: 'ai-legal-contract-redaction',
    title: 'AI Legal Contract Redaction',
    description: `Automatically redacts PII, trade secrets, and privileged information from legal documents before sharing or discovery.`,
    features: ["Entity recognition (PII, PHI, PCI)", "Custom redaction rules per jurisdiction", "Audit trail of redactions", "Secure workspace with encryption"],
    benefits: ["Prevents data leaks during M&A", "Speeds up e-discovery", "Ensures GDPR/CCPA compliance"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-legal-contract-redaction',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔒',
    href: '/ai-services/ai-legal-contract-redaction',
    category: 'ai'
  },

  {
    id: 'ai-sustainability-carbon-tracker',
    title: 'AI Sustainability & Carbon Tracker',
    description: `Automatically calculates organizational carbon footprint from operational data (energy, travel, cloud usage) and suggests reduction strategies.`,
    features: ["Integration with AWS/GCP carbon APIs", "Travel emission estimation from calendars", "Supply chain scope 3 modeling", "Regulatory reporting templates (ESG)"],
    benefits: ["Achieve ESG reporting compliance", "Identify top emission sources", "Set science-based reduction targets"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-sustainability-carbon-tracker',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🌱',
    href: '/ai-services/ai-sustainability-carbon-tracker',
    category: 'ai'
  },

  {
    id: 'ai-education-tutor',
    title: 'AI 1:1 Tutor for K–12 & Higher Ed',
    description: `Personalized learning companion that adapts to student's pace, identifies knowledge gaps, and provides Socratic questioning to deepen understanding.`,
    features: ["Curriculum-aligned (Common Core, IB, AP)", "Progress dashboards for parents/teachers", "Multilingual support (25 languages)", "Plagiarism-resistant homework assistance"],
    benefits: ["Improves test scores by 1\u20132 letter grades", "Reduces teacher workload", "Provides equitable access to tutoring"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-education-tutor',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🎓',
    href: '/ai-services/ai-education-tutor',
    category: 'ai'
  },

  {
    id: 'ai-retail-recommendation-engine',
    title: 'AI Retail Recommendation Engine',
    description: `Product recommendation engine for e-commerce that increases AOV by 15–25% using collaborative filtering, basket analysis, and real-time behavior.`,
    features: ["Real-time personalization", "A/B testing built-in", "Cross-sell & upsell suggestions", "Seasonal trend integration"],
    benefits: ["Boosts average order value", "Reduces cart abandonment", "Increases customer LTV"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-retail-recommendation-engine',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🛒',
    href: '/ai-services/ai-retail-recommendation-engine',
    category: 'ai'
  },

  {
    id: 'ai-aiops-anomaly-detection',
    title: 'AI-AIOps Anomaly Detection',
    description: `Detects infrastructure anomalies (CPU, memory, error rates) before they cause outages using unsupervised learning and seasonal decomposition.`,
    features: ["Metric anomaly scoring", "Correlation across services", "Predictive alerting (30 min lead)", "Integration with PagerDuty & Slack"],
    benefits: ["Catches issues 85% faster than thresholds", "Reduces MTTR by 30%", "Prevents revenue-impacting downtime"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-aiops-anomaly-detection',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📈',
    href: '/ai-services/ai-aiops-anomaly-detection',
    category: 'ai'
  },

  {
    id: 'ai-media-monitoring',
    title: 'AI Media & News Monitoring',
    description: `Tracks global news, podcasts, and video transcripts for brand mentions, sentiment shifts, and crisis signals in real time.`,
    features: ["100K+ sources monitored", "Multilingual sentiment", "Trending topic detection", "Custom keyword & competitor alerts"],
    benefits: ["Early crisis detection", "Measure PR campaign reach", "Identify influencer opportunities"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-media-monitoring',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📰',
    href: '/ai-services/ai-media-monitoring',
    category: 'ai'
  },

  {
    id: 'ai-accessibility-optimizer',
    title: 'AI Accessibility Content Optimizer',
    description: `Suggests alt-text for images, transcript generation for videos, and semantic HTML improvements to boost accessibility and SEO simultaneously.`,
    features: ["Auto-alt-text for images", "Video transcript with speaker IDs", "Readability scoring", "WCAG 2.1 AA gap analysis"],
    benefits: ["Improves Google Lighthouse scores", "Meets legal compliance", "Enhances user experience"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-accessibility-optimizer',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔧',
    href: '/ai-services/ai-accessibility-optimizer',
    category: 'ai'
  },


// New AI services batch — inserted automatically

  {
    id: 'ai-realtime-translation',
    title: 'Real-Time Translation Engine',
    description: `Sub-200ms speech-to-text and text-to-speech translation across 70+ languages with dialect preservation.`,
    features: ["70+ languages & dialects", "Sub-200ms latency", "Speaker diarization", "Custom glossary per client", "REST + WebSocket APIs"],
    benefits: ["Break language barriers in global meetings", "Instant customer support in any language", "Reduce translation costs by 90%"],
    pricing: {"basic":"149","pro":"399","enterprise":"999"},
    contactInfo: {
      website: '/ai-services/ai-realtime-translation',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🌐',
    href: '/ai-services/ai-realtime-translation',
    category: 'ai'
  },

  {
    id: 'ai-contract-analyzer-pro',
    title: 'Contract Analyzer Pro',
    description: `Automated legal contract review with risk scoring, clause extraction, and compliance checking against 200+ global regulations.`,
    features: ["Risk scoring 0\u2013100", "Clause extraction & classification", "Compliance matrix (GDPR, CCPA, HIPAA)", "Redline suggestions", "Audit trail"],
    benefits: ["Cut contract review time from hours to minutes", "Never miss a risky clause again", "Standardize across legal team"],
    pricing: {"basic":"199","pro":"499","enterprise":"1299"},
    contactInfo: {
      website: '/ai-services/ai-contract-analyzer-pro',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📜',
    href: '/ai-services/ai-contract-analyzer-pro',
    category: 'ai'
  },

  {
    id: 'ai-code-review-assistant',
    title: 'AI Code Review Assistant',
    description: `Static analysis + LLM-powered code review that understands intent. Catches bugs, security flaws, performance anti-patterns across 15+ languages.`,
    features: ["Multi-language support", "Security vulnerability detection", "Performance anti-pattern\u8bc6\u522b", "Auto-suggest fixes", "GitHub/GitLab/Bitbucket integration"],
    benefits: ["Improve code quality before merge", "Reduce senior dev review time by 60%", "Onboard juniors faster"],
    pricing: {"basic":"99","pro":"299","enterprise":"799"},
    contactInfo: {
      website: '/ai-services/ai-code-review-assistant',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔍',
    href: '/ai-services/ai-code-review-assistant',
    category: 'ai'
  },

  {
    id: 'ai-competitor-intelligence',
    title: 'Competitor Intelligence Engine',
    description: `Automated competitor tracking: pricing changes, feature releases, marketing campaigns from 10K+ sources. Weekly digest + real-time alerts.`,
    features: ["Daily web crawls", "Feature matrix auto-update", "Sentiment tracking", "Alert rules & thresholds", "Export to PDF/PPT"],
    benefits: ["Always know competitor moves", "Price with confidence", "Identify market gaps"],
    pricing: {"basic":"299","pro":"699","enterprise":"1999"},
    contactInfo: {
      website: '/ai-services/ai-competitor-intelligence',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🎯',
    href: '/ai-services/ai-competitor-intelligence',
    category: 'ai'
  },

  {
    id: 'ai-email-campaign-generator',
    title: 'Email Campaign Generator',
    description: `End-to-end email marketing: Generate sequences, personalize per recipient, A/B test subject lines, optimize send times.`,
    features: ["Multi-email sequence generation", "Personalization tokens", "Subject line A/B testing", "Send-time optimization", "Deliverability monitoring"],
    benefits: ["Launch campaigns in hours not weeks", "30%+ open rates via AI optimization", "Scale to 100K+ subscribers"],
    pricing: {"basic":"149","pro":"399","enterprise":"999"},
    contactInfo: {
      website: '/ai-services/ai-email-campaign-generator',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📧',
    href: '/ai-services/ai-email-campaign-generator',
    category: 'ai'
  },

  {
    id: 'ai-supply-chain-predictor',
    title: 'Supply Chain Predictor',
    description: `Demand forecasting, inventory optimization, and route planning using time-series ML. Reduces stockouts by 45% and carrying costs by 30%.`,
    features: ["Demand forecasting (90-day)", "Inventory reorder points", "Route optimization", "Supplier risk scoring", "Real-time dashboards"],
    benefits: ["Never run out of stock", "Lower warehouse costs", "Faster delivery times"],
    pricing: {"basic":"399","pro":"899","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-supply-chain-predictor',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🚚',
    href: '/ai-services/ai-supply-chain-predictor',
    category: 'ai'
  },

  {
    id: 'ai-voice-assistant-pro',
    title: 'Voice Assistant Pro',
    description: `Custom voice assistants for brands: wake-word detection, natural-language task execution, multi-turn dialog. Deploy on-premise or cloud.`,
    features: ["Custom wake-word training", "Task execution", "Multi-turn context", "On-premise deployment", "Twilio/Asterisk integration"],
    benefits: ["Automate 60% of inbound calls", "24/7 support without agents", "Consistent brand experience"],
    pricing: {"basic":"249","pro":"649","enterprise":"1699"},
    contactInfo: {
      website: '/ai-services/ai-voice-assistant-pro',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📞',
    href: '/ai-services/ai-voice-assistant-pro',
    category: 'ai'
  },

  {
    id: 'ai-revenue-optimizer',
    title: 'Revenue Optimization Engine',
    description: `AI-driven pricing, upsell recommendations, and churn prediction. Analyzes customer behavior, market trends to maximize LTV.`,
    features: ["Dynamic pricing engine", "Churn prediction (90-day)", "Upsell recommendations", "Cohort analysis", "Revenue attribution"],
    benefits: ["Increase revenue 15\u201325%", "Reduce churn by 30%", "Price optimally"],
    pricing: {"basic":"349","pro":"799","enterprise":"2199"},
    contactInfo: {
      website: '/ai-services/ai-revenue-optimizer',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '💰',
    href: '/ai-services/ai-revenue-optimizer',
    category: 'ai'
  },

  {
    id: 'ai-knowledge-graph-builder',
    title: 'Knowledge Graph Builder',
    description: `Automatically structure unstructured data into queryable knowledge graph. Entity extraction, relationship mapping, semantic search.`,
    features: ["Entity extraction (NER)", "Relationship inference", "Semantic search", "Graph visualization", "REST API + GraphQL"],
    benefits: ["Find any fact in seconds", "Surface hidden connections", "Power AI agents with your data"],
    pricing: {"basic":"199","pro":"499","enterprise":"1299"},
    contactInfo: {
      website: '/ai-services/ai-knowledge-graph-builder',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🕸️',
    href: '/ai-services/ai-knowledge-graph-builder',
    category: 'ai'
  },

  {
    id: 'ai-fraud-detection-real-time',
    title: 'Real-Time Fraud Detection',
    description: `ML models trained on transaction data to detect anomalies in milliseconds. Adaptive learning reduces false positives over time.`,
    features: ["Real-time scoring (<50ms)", "Adaptive thresholds", "Case management dashboard", "Investigation tools", "PCI DSS compliant"],
    benefits: ["Catch fraud before it happens", "Reduce false positives by 40%", "Save millions in chargebacks"],
    pricing: {"basic":"399","pro":"899","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-fraud-detection-real-time',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🛡️',
    href: '/ai-services/ai-fraud-detection-real-time',
    category: 'ai'
  },

  {
    id: 'ai-social-sentiment-tracker',
    title: 'Social Sentiment Tracker',
    description: `Monitor brand sentiment across Twitter, Reddit, news, forums in real-time. Crisis detection alerts before issues go viral.`,
    features: ["30+ data sources", "Sentiment scoring (-100 to +100)", "Crisis detection", "Influencer identification", "Competitor benchmark"],
    benefits: ["Protect brand reputation proactively", "Understand customer feelings", "Measure campaign impact"],
    pricing: {"basic":"199","pro":"499","enterprise":"1299"},
    contactInfo: {
      website: '/ai-services/ai-social-sentiment-tracker',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📢',
    href: '/ai-services/ai-social-sentiment-tracker',
    category: 'ai'
  },

  {
    id: 'ai-automated-reporting',
    title: 'Automated Reporting Engine',
    description: `Turn raw data into formatted PDF/PPT reports with natural language summaries. Schedule distributions to stakeholders.`,
    features: ["Natural language summaries", "Custom templates (PDF, PPT)", "Scheduled distribution", "Drill-down charts", "Email & Slack delivery"],
    benefits: ["Save 20+ hours/month on reporting", "Ensure consistent formatting", "Deliver insights faster"],
    pricing: {"basic":"149","pro":"399","enterprise":"999"},
    contactInfo: {
      website: '/ai-services/ai-automated-reporting',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📊',
    href: '/ai-services/ai-automated-reporting',
    category: 'ai'
  },

  {
    id: 'ai-predictive-maintenance-factory',
    title: 'Predictive Maintenance for Manufacturing',
    description: `IoT sensor fusion + ML to predict equipment failures 7–30 days in advance. Reduces downtime by 50%, extends asset life.`,
    features: ["Vibration & thermal analysis", "Failure mode classification", "Maintenance scheduling", "Parts inventory forecasting", "OEE dashboards"],
    benefits: ["Avoid unplanned downtime", "Extend equipment lifespan", "Optimize maintenance crew"],
    pricing: {"basic":"499","pro":"1099","enterprise":"2999"},
    contactInfo: {
      website: '/ai-services/ai-predictive-maintenance-factory',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🏭',
    href: '/ai-services/ai-predictive-maintenance-factory',
    category: 'ai'
  },

  {
    id: 'ai-customer-360',
    title: 'Customer 360 Unified Profile',
    description: `Aggregate all customer data (CRM, support, usage, billing) into single timeline. AI suggests next best action per customer.`,
    features: ["Data unification (10+ sources)", "Timeline view", "Next-best-action recommendations", "Segment builder", "Predictive CLV"],
    benefits: ["Know customer context instantly", "Personalize every interaction", "Identify at-risk accounts early"],
    pricing: {"basic":"299","pro":"699","enterprise":"1799"},
    contactInfo: {
      website: '/ai-services/ai-customer-360',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '👤',
    href: '/ai-services/ai-customer-360',
    category: 'ai'
  },

  {
    id: 'ai-talent-acquisition-platform',
    title: 'AI Talent Acquisition Platform',
    description: `End-to-end recruiting: resume parsing, candidate matching, interview scheduling, bias detection. Integrates with Greenhouse, Lever.`,
    features: ["Resume parsing & scoring", "Candidate-job fit matching", "Automated interview scheduling", "Bias detection", "Offer management"],
    benefits: ["Hire 40% faster", "Reduce bias in hiring", "Improve candidate quality"],
    pricing: {"basic":"249","pro":"599","enterprise":"1499"},
    contactInfo: {
      website: '/ai-services/ai-talent-acquisition-platform',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '👥',
    href: '/ai-services/ai-talent-acquisition-platform',
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
  {
    id: 'it-edge-computing-deploy',
    title: 'Edge Computing Deployment',
    description: `Deploys containerized workloads to global edge locations (Cloudflare Workers, Fastly Compute, AWS Lambda@Edge) for sub-10ms latency.`,
    features: ["Multi-provider edge orchestration", "Edge cache strategy design", "Local data residency compliance", "Edge function monitoring"],
    benefits: ["Reduces API latency by 60\u201380%", "Improves global user experience", "Lowers origin server load"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/it-services/it-edge-computing-deploy',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🌍',
    href: '/it-services/it-edge-computing-deploy',
    category: 'it'
  },

  {
    id: 'it-disaster-recovery',
    title: 'Disaster Recovery as a Service (DRaaS)',
    description: `Fully managed DR with automated backups, cross-region replication, and quarterly failover testing. RTO < 4 hours, RPO < 15 minutes.`,
    features: ["Continuous replication", "Automated failover orchestration", "DR runbook documentation", "Compliance-ready audit logs"],
    benefits: ["Guarantees business continuity", "Meets ISO 27001 & SOC2 requirements", "Reduces DR planning overhead"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/it-services/it-disaster-recovery',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔄',
    href: '/it-services/it-disaster-recovery',
    category: 'it'
  },

  {
    id: 'it-observability-platform',
    title: 'Full-Stack Observability Platform',
    description: `Unified logs, metrics, traces, and profiling with AI-powered root-cause analysis. Self-hosted or cloud-hosted options.`,
    features: ["Distributed tracing (OpenTelemetry)", "Log aggregation with semantic search", "Custom dashboard builder", "Anomaly detection + alert routing"],
    benefits: ["Reduces MTTR by 50%", "Eliminates tool sprawl", "Provides single pane of glass"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/it-services/it-observability-platform',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📡',
    href: '/it-services/it-observability-platform',
    category: 'it'
  },

  {
    id: 'it-esg-compliance-automation',
    title: 'ESG Compliance Automation',
    description: `Automates ESG data collection from 100+ systems (cloud, HR, facilities) and generates SEC, EU CSRD, and SFDR reports.`,
    features: ["Carbon footprint calculation engine", "Diversity metrics dashboard", "Governance policy tracker", "Report generation (XBRL support)"],
    benefits: ["Saves 200+ manual hours per reporting cycle", "Ensures regulatory alignment", "Improves ESG ratings"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/it-services/it-esg-compliance-automation',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🌍',
    href: '/it-services/it-esg-compliance-automation',
    category: 'it'
  },

  {
    id: 'it-kubernetes-multicloud',
    title: 'Kubernetes Multi-Cloud Management',
    description: `Deploy and manage Kubernetes clusters across AWS, GCP, Azure, and on-prem with a single control plane. Includes GitOps and policy enforcement.`,
    features: ["Cluster lifecycle automation", "Cost allocation per namespace", "Security policy as code (OPA/Gatekeeper)", "Cross-cloud service mesh"],
    benefits: ["Avoids vendor lock-in", "Optimizes spend by 30%", "Standardizes deployments"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/it-services/it-kubernetes-multicloud',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '☸️',
    href: '/it-services/it-kubernetes-multicloud',
    category: 'it'
  },

  {
    id: 'it-automated-incident-response',
    title: 'Automated Incident Response (SOAR)',
    description: `Security Orchestration, Automation & Response platform that auto-remediates 40% of Tier-1 incidents using playbooks and AI decisioning.`,
    features: ["Pre-built playbooks (phishing, malware, IAM)", "Integration with 200+ security tools", "Case management & audit trail", "AI-assisted triage suggestions"],
    benefits: ["Cuts incident response time from hours to minutes", "Reduces SOC analyst fatigue", "Improves compliance posture"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/it-services/it-automated-incident-response',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🚨',
    href: '/it-services/it-automated-incident-response',
    category: 'it'
  },

  {
    id: 'it-data-warehouse-modernization',
    title: 'Data Warehouse Modernization',
    description: `Migration from legacy data warehouses (Oracle, Teradata) to modern cloud-native stacks (Snowflake, BigQuery, Databricks) with zero downtime.`,
    features: ["Schema conversion tools", "ETL/ELT pipeline rebuild", "Query optimization", "Training for data team"],
    benefits: ["Lowers TCO by 40\u201360%", "Enables self-service analytics", "Scales compute & storage independently"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/it-services/it-data-warehouse-modernization',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🏢',
    href: '/it-services/it-data-warehouse-modernization',
    category: 'it'
  },

  {
    id: 'it-iot-device-management',
    title: 'Enterprise IoT Device Management',
    description: `Provision, monitor, and secure 10K+ IoT devices (sensors, cameras, gateways) from a single dashboard with OTA updates and zero-touch enrollment.`,
    features: ["Device inventory & health monitoring", "Remote command & control", "Firmware OTA scheduling", "Geofencing & alerting"],
    benefits: ["Reduces device management overhead by 70%", "Ensures firmware consistency", "Detects rogue devices"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/it-services/it-iot-device-management',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📱',
    href: '/it-services/it-iot-device-management',
    category: 'it'
  },

  {
    id: 'it-digital-workplace-platform',
    title: 'Digital Workplace Platform',
    description: `Unified intranet, collaboration, and employee apps (Microsoft 365 + Google Workspace + Slack) with streamlined onboarding and automated license management.`,
    features: ["Self-service IT catalog", "Automated employee lifecycle (joiner/mover/leaver)", "License optimization engine", "Employee sentiment surveys"],
    benefits: ["Reduces SaaS sprawl", "Cuts license costs by 20%", "Improves employee satisfaction"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/it-services/it-digital-workplace-platform',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '💼',
    href: '/it-services/it-digital-workplace-platform',
    category: 'it'
  },

  {
    id: 'it-apisec-testing',
    title: 'API Security Testing',
    description: `Automated security scans for REST, GraphQL, and gRPC APIs. Detects OWASP API Top 10 vulnerabilities and provides remediation code snippets.`,
    features: ["DAST + SCA for APIs", "Authentication flaw detection", "Rate-limiting & throttling tests", "CI/CD pipeline integration"],
    benefits: ["Prevents data breaches via API", "Meets PCI & HIPAA API requirements", "Finds bugs before production"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/it-services/it-apisec-testing',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔐',
    href: '/it-services/it-apisec-testing',
    category: 'it'
  },

  {
    id: 'it-data-lakehouse-governance',
    title: 'Data Lakehouse Governance',
    description: `Metadata management, lineage tracking, and access controls for Delta Lake, Apache Iceberg, or Snowflake environments.`,
    features: ["Automated data catalog", "Column-level lineage", "Policy-based access control (RBAC/ABAC)", "Quality scorecard per dataset"],
    benefits: ["Accelerates data discovery", "Ensures regulatory compliance (GDPR, CCPA)", "Reduces data swamp risk"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/it-services/it-data-lakehouse-governance',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🗄️',
    href: '/it-services/it-data-lakehouse-governance',
    category: 'it'
  },

  {
    id: 'it-endpoint-detection-response',
    title: 'Managed Endpoint Detection & Response (EDR)',
    description: `24/7 monitored EDR service with threat hunting, ransomware rollback, and 15-minute SLA for critical alerts. Includes managed SOC.`,
    features: ["Next-gen antivirus (NGAV)", "Behavior-based threat detection", "Incident response playbooks", "Quarterly threat hunting reports"],
    benefits: ["Blocks 99% of endpoint attacks", "Ransomware recovery within hours", "Frees internal IT from security chores"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/it-services/it-endpoint-detection-response',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🛡️',
    href: '/it-services/it-endpoint-detection-response',
    category: 'it'
  },

  {
    id: 'it-low-code-platform-integration',
    title: 'Low-Code Platform Integration',
    description: `Build & integrate internal tools on Retool, Tooljet, or internal platforms. Pre-built connectors to 200+ SaaS APIs and custom SQL/NoSQL builders.`,
    features: ["Drag-and-drop UI builder", "Role-based access controls", "Audit logging", "One-click deployment"],
    benefits: ["Empowers non-developers to build tools", "Reduces internal dev backlog by 40%", "Standardizes tooling across teams"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/it-services/it-low-code-platform-integration',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🧩',
    href: '/it-services/it-low-code-platform-integration',
    category: 'it'
  },


// New IT services batch — inserted automatically

  {
    id: 'it-edge-computing-orchestration',
    title: 'Edge Computing Orchestration',
    description: `Deploy and manage containerized workloads across distributed edge nodes. Auto-scaling, zero-trust networking, and offline sync for true edge-native applications.`,
    features: ["Multi-cluster management", "GitOps-driven deployment", "Edge-native storage", "Offline-first sync", "Observability across regions"],
    benefits: ["Sub-10ms latency for local users", "Reduce cloud egress costs by 70%", "Operate\u54ea\u6015\u7f51\u7edc\u4e2d\u65ad"],
    pricing: {"basic":"349","pro":"799","enterprise":"2099"},
    contactInfo: {
      website: '/it-services/it-edge-computing-orchestration',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🌍',
    href: '/it-services/it-edge-computing-orchestration',
    category: 'it'
  },

  {
    id: 'it-serverless-api-gateway',
    title: 'Serverless API Gateway',
    description: `Fully managed API gateway with rate limiting, auth, caching, and transformation. Pay-per-request pricing, auto-scaling to millions of RPS.`,
    features: ["JWT/OAuth validation", "Request/response transformation", "Response caching (Redis)", "Rate limiting & quotas", "WebSocket support"],
    benefits: ["Zero ops overhead", "Scale automatically", "Cut API management costs by 80%"],
    pricing: {"basic":"149","pro":"399","enterprise":"999"},
    contactInfo: {
      website: '/it-services/it-serverless-api-gateway',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🚪',
    href: '/it-services/it-serverless-api-gateway',
    category: 'it'
  },

  {
    id: 'it-sap-integration-hub',
    title: 'SAP Integration Hub',
    description: `Pre-built connectors for SAP ERP, S/4HANA, SuccessFactors, and Ariba. Real-time sync, IDoc/BAPI support, and error handling out of the box.`,
    features: ["SAP ERP BAPI/IDoc adapters", "SuccessFactors sync", "Ariba network integration", "Error reconciliation dashboard", "SAP-certified connectors"],
    benefits: ["Integrate SAP in days not months", "Eliminate manual data entry", "Real-time business visibility"],
    pricing: {"basic":"499","pro":"1099","enterprise":"2799"},
    contactInfo: {
      website: '/it-services/it-sap-integration-hub',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🏢',
    href: '/it-services/it-sap-integration-hub',
    category: 'it'
  },

  {
    id: 'it-multi-cloud-cost-governance',
    title: 'Multi-Cloud Cost Governance',
    description: `Unified cost visibility and policy enforcement across AWS, Azure, GCP. budgets, alerts, rightsizing recommendations, and chargeback/showback.`,
    features: ["Multi-cloud ingestion", "Budget thresholds & alerts", "Rightsizing AI", "Tag compliance enforcement", "Department chargeback"],
    benefits: ["Prevent cost overruns", "Save 25%+ on cloud spend", "Align finance & engineering"],
    pricing: {"basic":"199","pro":"499","enterprise":"1299"},
    contactInfo: {
      website: '/it-services/it-multi-cloud-cost-governance',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '💸',
    href: '/it-services/it-multi-cloud-cost-governance',
    category: 'it'
  },

  {
    id: 'it-automated-incident-response',
    title: 'Automated Incident Response',
    description: `SOAR platform: ingest alerts from any monitoring tool, run playbooks, remediate automatically. 500+ community playbooks included.`,
    features: ["50+ integration adapters", "Visual playbook builder", "Automated remediation", "Case management", "Post-incident reports"],
    benefits: ["MTTR reduced by 80%", "Free up on-call engineers", "Consistent response procedures"],
    pricing: {"basic":"299","pro":"699","enterprise":"1799"},
    contactInfo: {
      website: '/it-services/it-automated-incident-response',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🚨',
    href: '/it-services/it-automated-incident-response',
    category: 'it'
  },

  {
    id: 'it-secure-file-transfer',
    title: 'Secure File Transfer (MFT)',
    description: `Managed file transfer with end-to-end encryption, audit trails, and automated scheduling. Supports SFTP, FTPS, AS2, and HTTPS.`,
    features: ["PGP/GPG encryption", "AS2 protocol support", "Workflow automation", "Compliance reports (HIPAA, PCI)", "Detailed audit logs"],
    benefits: ["Secure B2B exchanges", "Automate file-based integrations", "Pass audits with ease"],
    pricing: {"basic":"199","pro":"499","enterprise":"1199"},
    contactInfo: {
      website: '/it-services/it-secure-file-transfer',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📁',
    href: '/it-services/it-secure-file-transfer',
    category: 'it'
  },

  {
    id: 'it-legacy-app-containerization',
    title: 'Legacy App Containerization',
    description: `Migrate monoliths and legacy apps to Docker/Kubernetes with minimal code changes. Automated dependency analysis and service extraction.`,
    features: ["Automated dependency mapping", "Service extraction recommendations", "StatefulSet migration", "Database connection pooling", "Blue-green deployment"],
    benefits: ["Modernize without rewrite", "Reduce infrastructure costs", "Enable CI/CD for legacy"],
    pricing: {"basic":"399","pro":"899","enterprise":"2299"},
    contactInfo: {
      website: '/it-services/it-legacy-app-containerization',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🐳',
    href: '/it-services/it-legacy-app-containerization',
    category: 'it'
  },

  {
    id: 'it-pcii-compliance-suite',
    title: 'PCI DSS Compliance Suite',
    description: `Automated PCI DSS v4.0 compliance monitoring, evidence collection, and reporting. Pre-built controls for 400+ requirements.`,
    features: ["Control mapping (PCI DSS 4.0)", "Automated evidence collection", "Vulnerability scanning integration", "Quarterly assessment workflow", "Executive dashboards"],
    benefits: ["Achieve compliance 10x faster", "Reduce audit costs", "Continuous monitoring"],
    pricing: {"basic":"299","pro":"699","enterprise":"1799"},
    contactInfo: {
      website: '/it-services/it-pcii-compliance-suite',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '💳',
    href: '/it-services/it-pcii-compliance-suite',
    category: 'it'
  },

  {
    id: 'it-business-continuity-dr',
    title: 'Business Continuity & Disaster Recovery',
    description: `Automated backup, replication, and failover orchestration across cloud and on-premise. RPOs as low as 15 seconds, RTOs under 5 minutes.`,
    features: ["Application-consistent backups", "Cross-region replication", "Automated failover testing", "DR runbook automation", "Compliance (ISO 27001, SOC 2)"],
    benefits: ["Guaranteed uptime", "Minimize data loss", "Pass DR audits"],
    pricing: {"basic":"349","pro":"799","enterprise":"2099"},
    contactInfo: {
      website: '/it-services/it-business-continuity-dr',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔄',
    href: '/it-services/it-business-continuity-dr',
    category: 'it'
  },

  {
    id: 'it-identity-governance',
    title: 'Identity Governance & Administration',
    description: `Centralized IGA: lifecycle management, access certifications, separation-of-duties policies. Integrates with Active Directory, Okta, Azure AD.`,
    features: ["Provisioning/deprovisioning workflows", "Access certification campaigns", "SoD policy engine", "Role mining & optimization", "SOD analytics"],
    benefits: ["Eliminate orphaned accounts", "Pass SOX audits", "Reduce access risk"],
    pricing: {"basic":"249","pro":"599","enterprise":"1499"},
    contactInfo: {
      website: '/it-services/it-identity-governance',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔑',
    href: '/it-services/it-identity-governance',
    category: 'it'
  },

  {
    id: 'it-cloud-native-storage',
    title: 'Cloud-Native Storage Optimizer',
    description: `Automated storage tiering, snapshot management, and cost optimization for AWS S3, EBS, Azure Blob, GCP Cloud Storage.`,
    features: ["Lifecycle policy automation", "Intelligent tiering (Intelligent-Tiering, Glacier)", "Snapshot retention policies", "Cost anomaly detection", "Capacity forecasting"],
    benefits: ["Reduce storage costs by 60%", "Never run out of space", "Optimize performance tiers"],
    pricing: {"basic":"149","pro":"399","enterprise":"999"},
    contactInfo: {
      website: '/it-services/it-cloud-native-storage',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '💾',
    href: '/it-services/it-cloud-native-storage',
    category: 'it'
  },

  {
    id: 'it-observability-unified',
    title: 'Unified Observability Platform',
    description: `Single pane of glass for logs, metrics, traces, and profiles. Powered by OpenTelemetry, with AI-assisted root cause analysis.`,
    features: ["OpenTelemetry auto-instrumentation", "Log aggregation & search", "Distributed tracing", "Profiling (CPU/memory)", "AI RCA (root cause)"],
    benefits: ["Reduce MTTR by 70%", "Cut monitoring tool sprawl", "Proactive anomaly detection"],
    pricing: {"basic":"299","pro":"699","enterprise":"1799"},
    contactInfo: {
      website: '/it-services/it-observability-unified',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📈',
    href: '/it-services/it-observability-unified',
    category: 'it'
  },

  {
    id: 'it-secrets-management',
    title: 'Secrets Management as a Service',
    description: `Centralized secrets vault with automatic rotation, audit logs, and Just-In-Time access. Integrates with Kubernetes, VSphere, and cloud providers.`,
    features: ["Vault as a service", "Auto-rotation (certificates, keys)", "Just-In-Time access approvals", "Audit trail & reporting", "K8s operator"],
    benefits: ["Eliminate hardcoded secrets", "Meet compliance requirements", "Reduce breach blast radius"],
    pricing: {"basic":"199","pro":"499","enterprise":"1299"},
    contactInfo: {
      website: '/it-services/it-secrets-management',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔐',
    href: '/it-services/it-secrets-management',
    category: 'it'
  },

  {
    id: 'it-multi-cloud-networking',
    title: 'Multi-Cloud Networking',
    description: `Global SD-WAN with direct cloud interconnect (AWS Direct Connect, Azure ExpressRoute). Secure, performant, and centrally managed.`,
    features: ["Global backbone (100+ PoPs)", "Direct cloud connects", "Zero-trust network access", "WAN optimization", "Central policy management"],
    benefits: ["Predictable performance", "Secure remote access", "Reduce MPLS costs"],
    pricing: {"basic":"399","pro":"899","enterprise":"2399"},
    contactInfo: {
      website: '/it-services/it-multi-cloud-networking',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🌐',
    href: '/it-services/it-multi-cloud-networking',
    category: 'it'
  },

  {
    id: 'it-mainframe-modernization',
    title: 'Mainframe Modernization Service',
    description: `Rehost, replatform, or refactor COBOL/PL1 applications to cloud. Automated code conversion, database migration, and cutover planning.`,
    features: ["Automated COBOL to Java/TS conversion", "Database migration (DB2 \u2192 PostgreSQL)", "Replatform to Azure/AWS mainframe alternatives", "Cutover orchestration", "Regression testing suite"],
    benefits: ["Reduce mainframe TCO by 70%", "Modernize at your own pace", "Keep business logic intact"],
    pricing: {"basic":"599","pro":"1299","enterprise":"3499"},
    contactInfo: {
      website: '/it-services/it-mainframe-modernization',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🖥️',
    href: '/it-services/it-mainframe-modernization',
    category: 'it'
  },

  // ── NEW MICRO-SAAS & AI SOLUTIONS (Added 2026-05-14) ──────────────────────
  {
    id: 'ai-saas-001',
    href: '/ai-services/ai-saas/automated-invoice-processing',
    icon: '📄',
    category: 'ai',
    title: 'Automated Invoice Processing AI',
    description: 'Extract and process invoice data with 99.7% accuracy using advanced OCR and LLM classification. Handles 1000+ invoices daily, integrates with QuickBooks, Xero, and Sage.',
    features: [
      'Intelligent data extraction (vendor, amounts, line items, tax)',
      'Multi-language support (30+ languages)',
      'Auto-categorization with GL codes',
      'Duplicate detection and flagging',
      'Seamless API integrations with major accounting platforms',
      'Real-time validation against compliance rules',
      'PDF, scanned image, and email intake'
    ],
    benefits: [
      'Reduce invoice processing time from hours to seconds',
      'Cut AP costs by 85% while eliminating manual entry errors',
      'Accelerate month-end close by 10x',
      'Audit-ready trail with full version history'
    ],
    pricing: {
      starter: '$99/mo — 500 invoices',
      professional: '$299/mo — 5,000 invoices',
      enterprise: '$899/mo — 25,000 invoices',
      custom: 'Contact for volume pricing'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/services/ai-saas/automated-invoice-processing',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-saas-002',
    href: '/ai-services/ai-saas/social-media-content-scheduler',
    icon: '📱',
    category: 'ai',
    title: 'AI-Powered Social Media Content Scheduler',
    description: 'Plan, create, and schedule 30 days of social media content in under 10 minutes. AI writes platform-specific posts (LinkedIn, Twitter, Instagram, Facebook), suggests optimal posting times, and auto-generates visuals.',
    features: [
      'AI content writer trained on viral social patterns',
      'Auto-hashtag research and trending topic detection',
      'Smart scheduling based on audience engagement analytics',
      'Built-in Canva integration for graphics',
      'Performance analytics and A/B testing',
      'Team collaboration with approval workflows',
      'RSS feed auto-content curation'
    ],
    benefits: [
      'Maintain consistent daily presence across 5+ platforms',
      'Increase engagement by 3–5x with AI-optimized copy',
      'Save 15+ hours per week on content creation',
      'Track ROI with detailed campaign metrics'
    ],
    pricing: {
      solo: '$49/mo — 1 brand, 10 posts/day',
      business: '$149/mo — 5 brands, unlimited posts',
      agency: '$399/mo — unlimited brands, white-label reports',
      enterprise: 'Custom — dedicated AI training'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/services/ai-saas/social-media-content-scheduler',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-saas-003',
    href: '/ai-services/ai-saas/ai-seo-content-writer',
    icon: '✍️',
    category: 'ai',
    title: 'AI SEO Content Writer Pro',
    description: 'Generate search-optimized blog posts, product descriptions, and landing pages that rank on Google. AI analyzes top 10 competitors, ensures semantic richness, and passes AI detection with 98% human score.',
    features: [
      'Real-time SERP analysis and content gap identification',
      'Semantic keyword clustering and LSI optimization',
      '50+ content templates (blogs, product pages, case studies)',
      'Auto-brief generation from target keywords',
      'Plagiarism and originality scoring',
      'One-click SEO meta tags and schema markup',
      'WordPress and Shopify direct publishing'
    ],
    benefits: [
      'Write 2000-word SEO-ready articles in 5 minutes',
      'Outrank competitors with comprehensive content',
      'Scale content production without hiring writers',
      'Increase organic traffic by 200% within 3 months'
    ],
    pricing: {
      starter: '$79/mo — 50 articles',
      growth: '$199/mo — 200 articles',
      scale: '$499/mo — 600 articles + API access',
      agency: '$999/mo — unlimited + white-label'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/services/ai-saas/ai-seo-content-writer',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-saas-004',
    href: '/ai-services/ai-saas/predictive-sales-forecasting',
    icon: '📈',
    category: 'ai',
    title: 'Predictive Sales Forecasting Engine',
    description: 'AI-driven revenue predictions with 94% accuracy. Analyzes historical data, market trends, pipeline health, and external factors to forecast quarterly revenue within ±5%.',
    features: [
      'Time-series forecasting with Prophet and LSTM models',
      'CRM integration (Salesforce, HubSpot, Pipedrive)',
      'Deal-level risk scoring and close probability',
      'Sales team performance benchmarking',
      'Scenario planning (best-case, worst-case, most-likely)',
      'Automated weekly reports and alerts',
      'Real-time dashboard with drill-down capabilities'
    ],
    benefits: [
      'Improve forecast accuracy from 60% to 94%',
      'Identify at-risk deals 30 days before they slip',
      'Optimize resource allocation with data-backed projections',
      'Increase investor confidence with reliable numbers'
    ],
    pricing: {
      small: '$199/mo — up to $2M ARR, 1 CRM integration',
      mid: '$499/mo — up to $10M ARR, unlimited CRMs',
      enterprise: '$1,299/mo — unlimited, custom models',
      onprem: 'Contact — self-hosted deployment'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/services/ai-saas/predictive-sales-forecasting',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-saas-005',
    href: '/ai-services/ai-saas/ai-customer-support-chatbot',
    icon: '🤖',
    category: 'ai',
    title: 'AI-Powered Customer Support Chatbot',
    description: '24/7 intelligent support chatbot that resolves 78% of queries without human intervention. Trained on your help docs, past tickets, and product knowledge — continuously learns from interactions.',
    features: [
      'Custom-trained on your specific product/service documentation',
      'Multi-language support (50+ languages)',
      'Sentiment-aware responses (escalates angry customers)',
      'Knowledge base auto-sync from Zendesk, Intercom, Freshdesk',
      'Live agent handoff with full context preservation',
      'Analytics: resolution rate, satisfaction, deflected tickets',
      'Voice TTS for accessibility'
    ],
    benefits: [
      'Cut support costs by 65% while improving CSAT',
      'Instant responses — zero wait time for customers',
      'Free up human agents for complex issues',
      'Scale support infinitely during product launches'
    ],
    pricing: {
      basic: '$99/mo — 1,000 queries/month, 5 docs',
      professional: '$299/mo — 10,000 queries, unlimited docs',
      business: '$699/mo — 100,000 queries, custom branding',
      enterprise: '$1,999/mo — unlimited, dedicated training'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/services/ai-saas/ai-customer-support-chatbot',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-saas-006',
    href: '/ai-services/ai-saas/ai-contract-review-analyzer',
    icon: '📑',
    category: 'ai',
    title: 'AI Contract Review & Risk Analyzer',
    description: 'Upload contracts and get instant risk assessment, clause extraction, and compliance scoring. Trained on thousands of legal documents, highlights problematic terms and suggests favorable alternatives.',
    features: [
      'Multi-format support: PDF, DOCX, TXT, images (OCR)',
      'Risk scoring per clause (low/medium/high) with explanations',
      'Jurisdiction-specific compliance checking',
      'Clause library comparison against best-practice standards',
      'Redline suggestions with alternative language',
      'Track changes and version history',
      'GDPR, CCPA, SOC2, ISO27001 compliance checks'
    ],
    benefits: [
      'Review NDAs in 30 seconds instead of 30 minutes',
      'Catch risky terms your lawyers might miss',
      'Standardize contract templates organization-wide',
      'Reduce legal spend by 70% on routine reviews'
    ],
    pricing: {
      payg: '$0.25/page — pay per document',
      small: '$149/mo — 500 pages + unlimited users',
      business: '$499/mo — unlimited pages, custom clauses',
      legal: 'Contact — firm-wide license'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/services/ai-saas/ai-contract-review-analyzer',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-saas-007',
    href: '/ai-services/ai-saas/ai-meeting-notes-transcriber',
    icon: '🎤',
    category: 'ai',
    title: 'AI Meeting Notes Transcriber & Summarizer',
    description: 'Record meetings, get transcript, summary, and action items automatically. Supports Zoom, Teams, Google Meet, and in-person recordings. Identifies decisions, deadlines, and owners.',
    features: [
      'High-accuracy transcription (95%+ across accents)',
      'Speaker diarization (who said what)',
      'Auto-generated summaries with key points and action items',
      'Integration with Notion, Slack, Asana, Trello',
      'Keyword and topic extraction',
      'Search across all meeting history',
      'Multi-language transcription (20+ languages)'
    ],
    benefits: [
      'Never miss an action item again',
      'Share meeting recaps in one click',
      'Onboard new team members with searchable meeting archives',
      'Save 5+ hours per week on note-taking'
    ],
    pricing: {
      personal: '$29/mo — 100 hours recording',
      team: '$99/mo — 500 hours, 5 users',
      business: '$299/mo — unlimited, 20 users',
      enterprise: '$799/mo — SSO, compliance logging'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/services/ai-saas/ai-meeting-notes-transcriber',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'it-saas-001',
    href: '/it-services/cloud-cost-optimization-platform',
    icon: '💸',
    category: 'it',
    title: 'Cloud Cost Optimization Platform',
    description: 'Reduce AWS/Azure/GCP bills by 30–50% automatically. AI analyzes usage patterns, recommends rightsizing, eliminates idle resources, and applies reserved instance purchases with guaranteed savings.',
    features: [
      'Multi-cloud support (AWS, Azure, GCP, Oracle Cloud)',
      'Automated rightsizing recommendations',
      'Idle resource detection and auto-termination',
      'RI/Savings Plans purchase optimization',
      'Anomaly detection and budget alerts',
      'Custom dashboards by team/project/environment',
      'Carbon footprint tracking and sustainability reporting'
    ],
    benefits: [
      '$50K–$500K annual savings for mid-size companies',
      'No manual spreadsheet analysis required',
      'Prevent budget overruns with proactive alerts',
      'Improve cloud governance and accountability'
    ],
    pricing: {
      starter: 'Free — up to $10K monthly spend, basic alerts',
      growth: '$299/mo — up to $100K spend, full optimization',
      scale: '$799/mo — up to $500K spend, multi-cloud',
      enterprise: 'Custom — dedicated cost engineer'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/services/it-saas/cloud-cost-optimization-platform',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'it-saas-002',
    href: '/it-services/devops-incident-response-platform',
    icon: '🚨',
    category: 'it',
    title: 'DevOps Incident Response & Runbook Automation',
    description: 'Automate incident response with intelligent runbooks. When your monitoring tool fires an alert, this platform auto-remediates 60% of incidents, notifies the right people, and maintains a post-mortem log.',
    features: [
      'Integration with PagerDuty, Opsgenie, Datadog, New Relic',
      'Auto-remediation playbooks (restart services, rollback, scale)',
      'Dynamic escalation policies based on severity and SLA',
      'Post-incident report generation (automated)',
      'Slack/Teams/MS Teams notification with buttons',
      'Runbook versioning and A/B testing',
      'Compliance logging for SOX, HIPAA, PCI'
    ],
    benefits: [
      'Reduce MTTR (mean time to resolve) by 65%',
      'Minimize downtime impact on revenue and users',
      'Free DevOps team from repetitive firefighting',
      'Meet 99.99% SLA commitments with confidence'
    ],
    pricing: {
      startup: '$99/mo — 5 services, email/Slack alerts',
      business: '$399/mo — 50 services, auto-remediation',
      enterprise: '$1,299/mo — unlimited, custom plugins',
      onprem: 'Contact — self-hosted enterprise'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/services/it-saas/devops-incident-response-platform',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'it-saas-003',
    href: '/it-services/api-security-gateway',
    icon: '🔐',
    category: 'it',
    title: 'API Security Gateway & Throttling',
    description: 'Protect your APIs from abuse, DDoS, and data leaks. Intelligent rate limiting, bot detection, schema validation, and real-time threat intelligence. Drop-in replacement for Kong/Traefik with AI-powered protection.',
    features: [
      'Rate limiting per API key/IP/endpoint (configurable quotas)',
      'Bot detection using behavioral fingerprinting',
      'Schema validation against OpenAPI specs',
      'PII/credit card leak prevention via regex+ML',
      'DDoS protection with automatic IP blacklisting',
      'Real-time dashboards and security event logs',
      'Compliance: GDPR, OWASP API Top 10, PCI DSS'
    ],
    benefits: [
      'Prevent API abuse and unexpected cost spikes',
      'Protect sensitive customer data from exposure',
      'Maintain API performance under load',
      'Meet security audit requirements effortlessly'
    ],
    pricing: {
      basic: '$149/mo — 1M requests/month, 5 APIs',
      pro: '$499/mo — 10M requests, unlimited APIs',
      business: '$1,299/mo — 100M requests, WAF rules',
      enterprise: 'Custom — dedicated gateway instances'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/services/it-saas/api-security-gateway',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'it-saas-004',
    href: '/it-services/developer-portal-with-apis-playground',
    icon: '🛠️',
    category: 'it',
    title: 'Developer Portal & API Playground',
    description: 'Launch a beautiful, fully-documented developer portal in days, not months. Interactive API explorer, SDK downloads, usage analytics, and self-service onboarding for third-party developers.',
    features: [
      'Auto-generated API docs from OpenAPI/Swagger specs',
      'Interactive API Explorer (like Stripe docs)',
      'API key management and usage dashboards for developers',
      'SDK generation (10+ languages)',
      'OAuth2 and API key authentication flows',
      'Community forums and issue tracking integration',
      'Analytics: API adoption, error rates, popular endpoints'
    ],
    benefits: [
      'Accelerate partner integrations by 5x',
      'Reduce support tickets with self-service docs',
      'Monetize APIs with built-in usage billing',
      'Boost developer experience and retention'
    ],
    pricing: {
      startup: '$199/mo — 1 API, basic docs',
      growth: '$599/mo — 10 APIs, interactive explorer, analytics',
      business: '$1,499/mo — unlimited APIs, SSO, custom branding',
      enterprise: 'Contact — dedicated infrastructure'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/services/it-saas/developer-portal-with-apis-playground',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'micro-saas-001',
    href: '/it-services/micro-saas/booking-and-scheduling-system',
    icon: '📅',
    category: 'it',
    title: 'Micro-SaaS: Booking & Scheduling System',
    description: 'Embeddable booking widget for service businesses. Handles appointments, payments, reminders, and calendar sync. White-label for agencies and franchises.',
    features: [
      'Embeddable widget for any website (WordPress, Webflow, custom)',
      'Calendar sync (Google, Outlook, Apple)',
      'Online payments (Stripe, PayPal) with deposit support',
      'Automated SMS/email reminders (reduce no-shows by 80%)',
      'Staff management and availability rules',
      'Recurring appointments and package deals',
      'Reporting: booking sources, revenue, client retention'
    ],
    benefits: [
      'Automate scheduling — no more phone tag',
      'Get paid upfront with integrated payments',
      'Scale service business without hiring receptionists',
      'Custom branding matches your business identity'
    ],
    pricing: {
      basic: '$49/mo — 1 calendar, 100 bookings/month',
      professional: '$99/mo — 3 calendars, unlimited bookings',
      business: '$199/mo — 10 calendars, white-label, payments',
      enterprise: '$499/mo — unlimited, custom workflows'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/services/it-saas/booking-and-scheduling-system',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'micro-saas-002',
    href: '/it-services/micro-saas/subscription-billing-and-invoicing',
    icon: '💳',
    category: 'it',
    title: 'Micro-SaaS: Subscription Billing & Invoicing',
    description: 'Complete subscription billing platform: recurring invoices, dunning management, proration, coupons, and revenue recognition. Alternative to Stripe Billing with more flexibility for complex billing models.',
    features: [
      'Recurring billing (daily, weekly, monthly, yearly)',
      'Usage-based metered billing (track and bill units)',
      'Proration on plan changes (upgrades/downgrades)',
      'Coupon codes, discounts, promotional periods',
      'Dunning management: automatic retry schedules for failed payments',
      'Tax calculation and VAT compliance (EU, UK, Canada)',
      'Revenue recognition (ASC 606) reports for accounting'
    ],
    benefits: [
      'Launch subscription products without building billing infrastructure',
      'Reduce churn with smart dunning and win-back campaigns',
      'Support complex pricing models (usage, tiers, overages)',
      'Stay compliant with global tax regulations'
    ],
    pricing: {
      starter: '$99/mo — up to $50K revenue, basic plans',
      growth: '$299/mo — up to $500K revenue, coupons + dunning',
      scale: '$799/mo — unlimited revenue, usage billing',
      enterprise: 'Custom — dedicated success manager'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/services/it-saas/subscription-billing-and-invoicing',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'micro-saas-003',
    href: '/it-services/micro-saas/feedback-and-nps-collection',
    icon: '📊',
    category: 'it',
    title: 'Micro-SaaS: Feedback & NPS Collection Platform',
    description: 'Collect customer feedback, NPS, CSAT, and product reviews in one beautiful dashboard. Trigger surveys based on user actions, close the loop with follow-up workflows, and turn feedback into product insights.',
    features: [
      'Multi-channel surveys: in-app, email, SMS, website widget',
      'NPS, CSAT, CES, and custom question types',
      'Trigger surveys on specific events (after purchase, after support ticket)',
      'Sentiment analysis on open-ended responses',
      'Automated follow-up workflows for detractors/passives',
      'Integration with Slack, Intercom, HubSpot',
      'Trend analysis and feedback prioritization matrix'
    ],
    benefits: [
      'Understand customer sentiment in real time',
      'Reduce churn by addressing detractor concerns quickly',
      'Prioritize product roadmap with data-driven insights',
      'Increase response rates with smart survey timing'
    ],
    pricing: {
      basic: '$49/mo — 1,000 responses/month, basic widgets',
      growth: '$149/mo — 10,000 responses, automation workflows',
      business: '$399/mo — unlimited, custom branding, API',
      enterprise: '$999/mo — multi-account, SSO, dedicated support'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/services/it-saas/feedback-and-nps-collection',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'it-security-001',
    href: '/it-services/it-security-vulnerability-scanner',
    icon: '🛡️',
    category: 'it',
    title: 'Automated Vulnerability Scanner for Web Applications',
    description: 'Continuous security scanning for web apps and APIs. Detects OWASP Top 10 vulnerabilities, misconfigurations, and sensitive data exposure. Scheduled scans, detailed remediation guidance, and compliance reports.',
    features: [
      'Authenticated and unauthenticated scanning',
      'OWASP Top 10 + CWE/SANS Top 25 coverage',
      'PCI DSS, HIPAA, SOC2 compliance templates',
      'False positive reduction with machine learning',
      'Developer-friendly reports with code snippets',
      'CI/CD integration (GitHub Actions, GitLab CI, Jenkins)',
      'API security testing (GraphQL, REST, gRPC)'
    ],
    benefits: [
      'Find critical vulnerabilities before hackers do',
      'Pass security audits with ready-made compliance reports',
      'Integrate security into dev workflow (shift-left)',
      'Avoid costly breaches — average cost $4.35M per incident'
    ],
    pricing: {
      single: '$199/mo — 1 app, weekly scans',
      business: '$599/mo — 5 apps, daily scans, compliance',
      enterprise: '$1,999/mo — unlimited apps, dedicated scanner',
      audit: 'Contact — one-time penetration testing add-on'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/services/it-security/vulnerability-scanner',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'it-security-002',
    href: '/it-services/it-security-pen-testing-as-a-service',
    icon: '🧑‍💻',
    category: 'it',
    title: 'Penetration Testing as a Service (PTaaS)',
    description: 'Continuous, on-demand penetration testing by certified ethical hackers. Unlike annual pentests, our subscription model gives you 24/7 security testing, immediate vulnerability disclosure, and retesting until fixed.',
    features: [
      'Monthly scope definition (your apps, APIs, infrastructure)',
      'Real-time vulnerability dashboard',
      'Retesting until vulnerabilities are resolved',
      'Attack surface monitoring and new asset discovery',
      'Phishing simulation and social engineering tests',
      'Bug bounty program management (optional)',
      'Executive summary reports for board meetings'
    ],
    benefits: [
      'Continuous security validation, not just once-a-year',
      'Meet compliance requirements (PCI, SOC2, FedRAMP)',
      'Reduce risk with proactive hacker mindset',
      'Detailed remediation guidance for dev teams'
    ],
    pricing: {
      standard: '$2,999/mo — 1 app, basic scope',
      business: '$7,999/mo — 5 apps, full scope, retesting',
      enterprise: '$19,999/mo — unlimited, dedicated tester',
      custom: 'Contact — red team, physical security, social engineering'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/services/it-security/pen-testing-as-a-service',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'it-cloud-001',
    href: '/it-services/cloud-native-migration-factory',
    icon: '🚀',
    category: 'it',
    title: 'Cloud-Native Migration Factory',
    description: 'Migrate legacy monolithic applications to cloud-native microservices. End-to-end service: assessment, refactoring, containerization, CI/CD setup, and Kubernetes deployment. Includes 6-month post-migration support.',
    features: [
      'Application portfolio assessment and cloud-readiness scoring',
      'Strangler Fig pattern for zero-downtime migrations',
      'Containerization with Docker + Kubernetes orchestration',
      'CI/CD pipeline setup (GitHub Actions, GitLab CI, ArgoCD)',
      'Database migration (schema conversion, data transfer)',
      'Observability stack (monitoring, logging, tracing)',
      'Cost optimization and autoscaling configuration'
    ],
    benefits: [
      'Reduce infrastructure costs by 40% in 12 months',
      'Increase deployment frequency from monthly to daily',
      'Improve resilience and fault isolation',
      'Modernize tech stack without business disruption'
    ],
    pricing: {
      assessment: '$5,000 — one-time discovery & architecture plan',
      migration: '$25,000 — per app migration (up to 50 services)',
      enterprise: 'Custom — enterprise-wide transformation',
      support: '$3,000/mo — 6-month post-migration support'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/services/it-cloud/cloud-native-migration-factory',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'it-cloud-002',
    href: '/it/services/serverless-application-development',
    icon: '☁️',
    category: 'it',
    title: 'Serverless Application Development',
    description: 'Build event-driven, auto-scaling applications on AWS Lambda, Azure Functions, or Google Cloud Run. Pay only for compute used. Ideal for APIs, data pipelines, scheduled jobs, and real-time event processing.',
    features: [
      'API development with API Gateway + Lambda',
      'Event-driven architecture (SQS, SNS, EventBridge)',
      'Real-time data pipelines (Kinesis, Pub/Sub)',
      'Scheduled tasks (cron-like) without servers',
      'Database-less architectures with DynamoDB/CosmosDB',
      'Auto-scaling from zero to millions of requests',
      'Infrastructure as Code (CDK, Terraform, Pulumi)'
    ],
    benefits: [
      'Zero infrastructure management overhead',
      'Scale to zero when not in use — cost efficient',
      'High availability built-in across regions',
      'Rapid development cycles (weeks, not months)'
    ],
    pricing: {
      small_project: '$15,000 — MVP API + 3 endpoints',
      standard: '$45,000 — full backend with 10+ lambdas',
      enterprise: '$120,000+ — complex event-driven systems',
      ongoing: '10% of compute costs/mo for managed support'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/services/it-cloud/serverless-application-development',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-ml-001',
    href: '/ai-services/ai-ml/custom-llm-fine-tuning',
    icon: '🎯',
    category: 'ai',
    title: 'Custom LLM Fine-Tuning & Deployment',
    description: 'Fine-tune open-source LLMs (Llama 3, Mistral, CodeLlama) on your proprietary data for domain-specific tasks. Deploy as private API with full data control. Better than GPT-4 for specialized use cases.',
    features: [
      'Dataset curation and cleaning (your documents, emails, code)',
      'LoRA/QLoRA fine-tuning with optimized hardware',
      'Evaluation against test set and human review',
      'Deployment on dedicated GPU instances (private cloud)',
      'REST API with rate limiting and authentication',
      'Continuous improvement pipeline (human-in-the-loop)',
      'Full data sovereignty — your data never leaves your control'
    ],
    benefits: [
      'Outperform GPT-4 on your specific domain by 30–50%',
      'Keep IP and data completely private (no third-party API calls)',
      'Predictable costs — no per-token fees after deployment',
      'Customize tone, format, and knowledge exactly to your needs'
    ],
    pricing: {
      small: '$12,000 — 7B-13B parameter model fine-tuned, basic deployment',
      medium: '$35,000 — 34B model, advanced eval, cloud hosting 1 year',
      large: '$99,000 — 70B model, fine-tuned on 100K+ examples, dedicated infra',
      enterprise: 'Custom — on-prem GPU cluster deployment'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/services/ai-ml/custom-llm-fine-tuning',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-ml-002',
    href: '/ai-services/ai-ml/computer-vision-quality-control',
    icon: '👁️',
    category: 'ai',
    title: 'Computer Vision Quality Control System',
    description: 'Automated visual inspection for manufacturing and production lines. Detects defects, measures dimensions, verifies assemblies with 99.9% accuracy. Deploys on edge devices (NVIDIA Jetson, Raspberry Pi) for real-time inspection.',
    features: [
      'Custom-trained defect detection models (scratches, misalignments, missing parts)',
      'Real-time inference < 100ms per image',
      'Edge deployment (no cloud latency, offline operation)',
      'Dimensional measurement with sub-millimeter precision',
      'Barcode/QR code reading and verification',
      'Statistical process control dashboards',
      'Continuous learning from human corrections (active learning)'
    ],
    benefits: [
      'Catch defects before they reach customers (zero defect shipping)',
      'Reduce manual inspection costs by 90%',
      'Increase throughput with non-stop automated inspection',
      'Meet ISO 9001 quality standards with audit trails'
    ],
    pricing: {
      pilot: '$15,000 — proof-of-concept on your production line',
      standard: '$49,000 — full system on edge device, 2 camera setup',
      advanced: '$99,000 — multi-camera, advanced analytics, training',
      enterprise: 'Custom — factory-wide rollout, change management'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/services/ai-ml/computer-vision-quality-control',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-ml-003',
    href: '/ai-services/ai-ml/predictive-maintenance-platform',
    icon: '🔧',
    category: 'ai',
    title: 'Predictive Maintenance for Industrial Equipment',
    description: 'Predict equipment failures before they happen. Analyze sensor data (vibration, temperature, pressure) from IoT devices to forecast remaining useful life (RUL) and recommend maintenance windows.',
    features: [
      'Time-series anomaly detection on sensor streams',
      'Failure mode classification (bearing wear, motor fault, etc.)',
      'RUL (Remaining Useful Life) predictions with confidence intervals',
      'Maintenance scheduling optimization',
      'Alert escalation (SMS, email, Slack)',
      'Equipment health dashboards and trend analysis',
      'Integration with CMMS (Computerized Maintenance Management Systems)'
    ],
    benefits: [
      'Reduce unplanned downtime by up to 70%',
      'Extend equipment lifespan with timely interventions',
      'Lower maintenance costs (shift from reactive to predictive)',
      'Improve safety by preventing catastrophic failures'
    ],
    pricing: {
      small: '$299/mo — up to 50 sensors, basic alerts',
      industrial: '$999/mo — 500 sensors, advanced analytics, SLA',
      enterprise: '$4,999/mo — unlimited sensors, on-prem deployment',
      consulting: 'Contact — implementation and training'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/services/ai-ml/predictive-maintenance-platform',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'data-001',
    href: '/it-services/data-warehouse-modernization',
    icon: '🏦',
    category: 'it',
    title: 'Data Warehouse Modernization & Migration',
    description: 'Migrate from legacy databases (Teradata, Oracle, SQL Server 2008) to modern cloud data warehouses (Snowflake, BigQuery, Redshift). Includes schema conversion, ETL pipeline rebuilding, and business intelligence migration.',
    features: [
      'Assessment and architecture design (lakehouse vs warehouse)',
      'Schema conversion and data type mapping',
      'ETL/ELT pipeline migration (Informatica, Talend → dbt, Airflow)',
      'Performance optimization (clustering, partitioning, materialized views)',
      'BI tool migration (Tableau, Power BI, Looker)',
      'Data governance and security setup',
      'Training and knowledge transfer for your team'
    ],
    'benefits': [
      'Cut data warehouse costs by 60% (cloud pay-as-you-go)',
      'Query performance improvement 10–100x',
      'Enable advanced analytics and ML on unified data',
      'Future-proof infrastructure with separation of storage/compute'
    ],
    'pricing': {
      assessment: '$7,500 — discovery, sizing, TCO analysis',
      migration: '$35,000+ — based on TB volume and complexity',
      optimization: '$15,000 — performance tuning post-migration',
      enterprise: 'Custom — multi-year modernization roadmap'
    },
    'contactInfo': {
      'website': 'https://ziontechgroup.com/services/it-data/data-warehouse-modernization',
      'email': 'kleber@ziontechgroup.com',
      'phone': '+1 302 464 0950',
      'address': '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'data-002',
    href: '/it-services/data-real-time-analytics-dashboard',
    icon: '📊',
    category: 'it',
    title: 'Real-Time Analytics Dashboard & Streaming',
    description: 'Build live dashboards that update in seconds, not hours. Ingest data from Kafka, Kinesis, or event sources; process with Flink/Spark; visualize with Grafana or custom React dashboards. Handle millions of events per day.',
    features: [
      'Real-time data ingestion from multiple sources',
      'Stream processing with Apache Flink or Spark Structured Streaming',
      'Low-latency dashboards (sub-second updates)',
      'Alerting on KPI thresholds',
      'Role-based access control (RBAC) for dashboard viewers',
      'Export to PDF/CSV scheduled reports',
      'Mobile-responsive and white-label branding'
    ],
    'benefits': [
      'Monitor business metrics as they happen',
      'Detect anomalies and fraud in real time',
      'Reduce reporting lag from days to seconds',
      'Empower teams with self-service analytics'
    ],
    'pricing': {
      startup: '$499/mo — 1M events/month, basic dashboards',
      business: '$1,299/mo — 10M events, advanced alerts, SSO',
      enterprise: '$4,999/mo — unlimited events, dedicated support',
      onprem: 'Contact — on-prem streaming platform deployment'
    },
    'contactInfo': {
      'website': 'https://ziontechgroup.com/services/it-data/real-time-analytics-dashboard',
      'email': 'kleber@ziontechgroup.com',
      'phone': '+1 302 464 0950',
      'address': '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'data-003',
    href: '/it-services/data-master-data-management',
    icon: '🗃️',
    category: 'it',
    title: 'Master Data Management (MDM) Platform',
    description: 'Create a single source of truth for customers, products, and suppliers. Deduplicate records, enforce data quality rules, and provide clean master data to all business systems (CRM, ERP, marketing automation).',
    features: [
      'Data profiling and quality assessment across sources',
      'Automated deduplication and record matching',
      'Golden record creation and survivorship rules',
      'Data stewardship workflows (approval, conflict resolution)',
      'APIs for real-time and batch synchronization',
      'Audit trail and change history',
      'Integration with Salesforce, SAP, Microsoft Dynamics'
    ],
    'benefits': [
      'Eliminate duplicate customer records across systems',
      'Improve marketing targeting with clean data',
      'Reduce operational errors from inconsistent information',
      'Meet regulatory requirements (GDPR, CCPA) with accurate data'
    ],
    'pricing': {
      cloud_saas: '$1,999/mo — up to 1M records, 3 data domains',
      business: '$4,999/mo — unlimited records, custom matching rules',
      enterprise: '$12,000/mo — multi-domain, on-prem deployment option',
      consulting: 'Contact — data cleansing and implementation services'
    },
    'contactInfo': {
      'website': 'https://ziontechgroup.com/services/it-data/master-data-management',
      'email': 'kleber@ziontechgroup.com',
      'phone': '+1 302 464 0950',
      'address': '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-media-001',
    href: '/ai-services/ai-media/video-dubbing-and-localization',
    icon: '🎬',
    category: 'ai',
    title: 'AI Video Dubbing & Multi-Language Localization',
    description: 'Translate and dub videos into 50+ languages with AI-perfect lip-sync. Preserves speaker voice characteristics, handles multiple speakers, and maintains emotional tone. Ideal for training videos, marketing content, and e-learning.',
    'features': [
      'Voice cloning (10 seconds sample creates voice persona)',
      'Lip-sync animation — AI moves lips to match new language audio',
      'Multi-speaker detection and voice separation',
      '50+ languages with native-sounding quality',
      'Subtitle generation and burn-in',
      'Bulk processing for large video libraries',
      ' human-in-the-loop review portal for quality assurance'
    ],
    'benefits': [
      'Localize video content at 1/10th traditional dubbing cost',
      'Launch global campaigns in weeks, not months',
      'Maintain brand voice consistency across languages',
      'Increase engagement with native-language content'
    ],
    'pricing': {
      payg: '$0.50/minute — pay per dubbed video',
      starter: '$299/mo — 100 minutes/month, 5 languages',
      business: '$999/mo — 500 minutes/month, unlimited languages',
      enterprise: 'Custom — dedicated voice model training'
    },
    'contactInfo': {
      'website': 'https://ziontechgroup.com/services/ai-media/video-dubbing-and-localization',
      'email': 'kleber@ziontechgroup.com',
      'phone': '+1 302 464 0950',
      'address': '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-media-002',
    href: '/ai-services/ai-media/ai-image-upscaling-restoration',
    icon: '🖼️',
    category: 'ai',
    title: 'AI Image Upscaling & Restoration Suite',
    description: 'Upscale images 4x–16x without quality loss. Restore old photos, remove noise, enhance details, and colorize black & white images. Uses ESRGAN/GFPGAN models trained on millions of high-res photographs.',
    features': [
      '4x and 16x upscaling with artifact removal',
      'Face enhancement and reconstruction (for old/blurry photos)',
      'Colorization of black & white images (historically accurate)',
      'Noise reduction and JPEG artifact removal',
      'Batch processing (1000s of images at once)',
      'API integration for existing workflows',
      'On-prem deployment for privacy-sensitive use cases'
    ],
    'benefits': [
      'Breathe new life into archival photo libraries',
      'Enhance product images for e-commerce',
      'Restore family photos for consumers (B2C opportunity)',
      'Prepare images for print at any size without pixelation'
    ],
    'pricing': {
      web: '$49/mo — 1,000 images/month, API access',
      pro: '$149/mo — 10,000 images, batch processing',
      business: '$499/mo — unlimited, on-prem option available',
      enterprise: 'Contact — custom model training'
    },
    'contactInfo': {
      'website': 'https://ziontechgroup.com/services/ai-media/ai-image-upscaling-restoration',
      'email': 'kleber@ziontechgroup.com',
      'phone': '+1 302 464 0950',
      'address': '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-dev-001',
    href: '/ai-services/ai-dev/code-review-automation',
    icon: '👨‍💻',
    category: 'ai',
    title: 'Automated Code Review & Security Scanning',
    description: 'AI-powered code review that catches bugs, security vulnerabilities, and performance issues before merge. Integrates with GitHub, GitLab, Bitbucket. Trained on millions of open-source commits and CVE databases.',
    features': [
      'Security scanning: XSS, SQLi, RCE, SSRF, path traversal',
      'Code quality: code smells, complexity, duplication',
      'Performance anti-patterns (N+1 queries, memory leaks)',
      'Framework-specific best practices (React, Django, Spring)',
      'Auto-comment on pull requests with remediation suggestions',
      'Trend analysis and technical debt tracking',
      'Compliance: OWASP, SANS, CERT secure coding standards'
    ],
    'benefits': [
      'Find critical bugs before they reach production',
      'Reduce security review time by 80%',
      'Enforce coding standards across teams automatically',
      'Accelerate CI/CD pipeline with parallelized reviews'
    ],
    'pricing': {
      open_source: 'Free — public repos',
      startup: '$99/mo — private repos, 5 developers',
      business: '$399/mo — unlimited repos, 50 developers',
      enterprise: '$1,299/mo — unlimited, custom rules, on-prem'
    },
    'contactInfo': {
      'website': 'https://ziontechgroup.com/services/ai-dev/code-review-automation',
      'email': 'kleber@ziontechgroup.com',
      'phone': '+1 302 464 0950',
      'address': '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-dev-002',
    href: '/ai-services/ai-dev/automated-test-generation',
    icon: '🧪',
    category: 'ai',
    title: 'Automated Test Generation from Requirements',
    description: 'Generate unit tests, integration tests, and end-to-end tests automatically from user stories, PRDs, or code. Covers edge cases humans miss. Supports Jest, Pytest, JUnit, Cypress, Playwright.',
    features': [
      'Reads Jira, GitHub Issues, Markdown, Confluence pages',
      'Generates test cases with assertions and mock data',
      'Creates test fixtures and setup/teardown code',
      'Supports TDD workflow: red-green-refactor',
      'Automatically updates tests when code changes',
      'Coverage analysis and gap identification',
      'CI/CD integration (GitHub Actions, CircleCI, Jenkins)'
    ],
    'benefits': [
      'Achieve 90%+ test coverage without writing tests manually',
      'Catch regressions before customers do',
      'Speed up development with auto-generated test scaffolding',
      'Reduce QA manual testing effort by 60%'
    ],
    'pricing': {
      personal: '$29/mo — 1 project, basic test types',
      team: '$149/mo — 10 projects, full test suite generation',
      business: '$499/mo — unlimited projects, advanced CI integration',
      enterprise: 'Custom — self-hosted, custom frameworks'
    },
    'contactInfo': {
      'website': 'https://ziontechgroup.com/services/ai-dev/automated-test-generation',
      'email': 'kleber@ziontechgroup.com',
      'phone': '+1 302 464 0950',
      'address': '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-dev-003',
    href: '/ai-services/ai-dev/legacy-code-to-modern-migration',
    icon: '🔄',
    category: 'ai',
    title: 'Legacy Codebase Migration & Modernization',
    description: 'Automatically convert legacy code (VB6, COBOL, Perl, Classic ASP, Oracle Forms) to modern languages (C#, Java, Python, React, Node.js). Preserves business logic intact while applying modern patterns and security best practices.',
    features': [
      'Language-to-language transpilation with semantic analysis',
      'Database schema migration (legacy DB to PostgreSQL/MySQL)',
      'UI modernization: WinForms → React, VB6 → Electron',
      'API extraction from monoliths (create REST/GraphQL endpoints)',
      'Automated test suite generation from existing behavior',
      'Documentation generation from code comments',
      'Gradual cutover strategy with parallel run support'
    ],
    'benefits': [
      'Escape costly legacy platform maintenance ($1M+/year savings typical)',
      'Recover business logic buried in unmaintainable code',
      'Enable mobile/web access to old systems',
      'Hire modern developers without COBOL expertise'
    ],
    'pricing': {
      assessment: '$10,000 — codebase analysis, effort estimation',
      migration: '$50,000+ — based on lines of code and complexity',
      enterprise: 'Custom — multi-year modernization roadmap',
      support: '15% of migration cost/year for ongoing maintenance'
    },
    'contactInfo': {
      'website': 'https://ziontechgroup.com/services/ai-dev/legacy-code-to-modern-migration',
      'email': 'kleber@ziontechgroup.com',
      'phone': '+1 302 464 0950',
      'address': '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-dev-004',
    href: '/ai-services/ai-dev/api-documentation-generator',
    icon: '📚',
    category: 'ai',
    title: 'AI API Documentation Generator & Portal',
    description: 'Generate beautiful, interactive API documentation from code, OpenAPI specs, or live traffic. Auto-discovers endpoints, parameters, examples, and error responses. Keeps docs in sync with code automatically.',
    features': [
      'Auto-discovery from live API traffic (no manual annotations)',
      'OpenAPI/Swagger import and enhancement',
      'Try-it console with authentication (like Postman)',
      'Code snippets in 15+ languages',
      'Changelog generation from git history',
      'Multi-language docs (English, Spanish, Chinese auto-translate)',
      'Developer analytics (most viewed endpoints, failed requests)'
    ],
    'benefits': [
      'Eliminate outdated, inaccurate API documentation',
      'Reduce developer onboarding time from days to hours',
      'Decrease support requests with clear examples',
      'Improve API adoption with interactive exploration'
    ],
    'pricing': {
      basic: '$99/mo — 1 API, basic docs',
      pro: '$299/mo — 5 APIs, interactive console, analytics',
      business: '$799/mo — unlimited APIs, custom branding, SSO',
      enterprise: 'Custom — dedicated instance, custom workflows'
    },
    'contactInfo': {
      'website': 'https://ziontechgroup.com/services/ai-dev/api-documentation-generator',
      'email': 'kleber@ziontechgroup.com',
      'phone': '+1 302 464 0950',
      'address': '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-robotics-001',
    href: '/ai-services/ai-robotics/robotic-process-automation-rpa',
    icon: '🤖',
    category: 'ai',
    title: 'Robotic Process Automation (RPA) Platform',
    description: 'Automate repetitive desktop and server tasks across any application (SAP, Excel, legacy systems). Create bots that click, type, extract data, and make decisions. Low-code visual workflow designer.',
    features': [
      'Low-code drag-and-drop workflow builder',
      'Cross-application automation (web, desktop, mainframe)',
      'AI computer vision for UI element recognition',
      'Scheduled and event-triggered bot execution',
      'Centralized bot management and monitoring',
      'Exception handling with human-in-the-loop review',
      'Integration with UiPath, Automation Anywhere, Blue Prism ecosystems'
    ],
    'benefits': [
      'Automate 80% of repetitive back-office tasks',
      'Reduce operational costs by 50%+ with software robots',
      'Eliminate human error in data entry and reconciliation',
      'Scale operations without hiring (24/7 bot availability)'
    ],
    'pricing': {
      attended: '$75/seat/mo — attended bots for task automation',
      unattended: '$1,500/bot/mo — fully autonomous bots',
      enterprise: '$7,500/mo — unlimited bots, orchestrator, AI vision',
      custom: 'Contact — process discovery and implementation services'
    },
    'contactInfo': {
      'website': 'https://ziontechgroup.com/services/ai-robotics/robotic-process-automation',
      'email': 'kleber@ziontechgroup.com',
      'phone': '+1 302 464 0950',
      'address': '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-robotics-002',
    href: '/ai-services/ai-robotics/intelligent-document-processing',
    icon: '📄',
    category: 'ai',
    title: 'Intelligent Document Processing (IDP) Platform',
    description: 'Extract structured data from unstructured documents: invoices, contracts, receipts, insurance claims, medical forms. AI understands context, handles variable layouts, and learns from corrections.',
    features': [
      'Layout-agnostic extraction (no template required)',
      'Handwritten text recognition (HTR) + printed OCR',
      'Table extraction with structure preservation',
      'Entity recognition (dates, amounts, names, addresses)',
      'Validation rules and business logic application',
      'Human-in-the-loop review interface',
      'Integration with ERP, CRM, DMS systems'
    ],
    'benefits': [
      'Process 10,000+ documents daily with 99% accuracy',
      'Cut document processing costs by 90%',
      'Eliminate manual data entry errors',
      'Accelerate accounts payable/receivable and claims processing'
    ],
    'pricing': {
      pages: '$0.05/page — pay-as-you-go',
      starter: '$299/mo — 10,000 pages + 5 workflows',
      business: '$999/mo — 100,000 pages + unlimited workflows',
      enterprise: 'Custom — dedicated deployment, custom model training'
    },
    'contactInfo': {
      'website': 'https://ziontechgroup.com/services/ai-robotics/intelligent-document-processing',
      'email': 'kleber@ziontechgroup.com',
      'phone': '+1 302 464 0950',
      'address': '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-robotics-003',
    href: '/ai-services/ai-robotics/autonomous-customer-service-agent',
    icon: '🎧',
    category: 'ai',
    title: 'Autonomous Customer Service Voice Agent',
    description: 'AI agent that handles customer calls end-to-end: understands natural language, accesses CRM, processes payments, escalates when needed. Works on phone numbers or embedded WebRTC. Available 24/7 in multiple languages.',
    features': [
      'Voice recognition with 95%+ accuracy (noisy environments supported)',
      'Natural Language Understanding (NLU) for intent detection',
      'CRM integration to pull account info and update records',
      'Secure payment processing (PCI compliant)',
      'Seamless handoff to live agents with full context',
      'Call analytics and sentiment tracking',
      'Continuous learning from call transcripts'
    ],
    'benefits': [
      'Handle 80% of customer calls without human agents',
      'Reduce call center costs by millions annually',
      'Eliminate wait times — instant answer rate 100%',
      'Consistent, compliant responses every time'
    ],
    'pricing': {
      payg: '$0.25/minute — pay per call minute handled',
      business: '$2,000/mo — 10,000 minutes, AI agent pool',
      enterprise: '$8,000/mo — unlimited minutes, custom integrations',
      onprem: 'Contact — on-prem voice AI appliance'
    },
    'contactInfo': {
      'website': 'https://ziontechgroup.com/services/ai-robotics/autonomous-customer-service-agent',
      'email': 'kleber@ziontechgroup.com',
      'phone': '+1 302 464 0950',
      'address': '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-consulting-001',
    href: '/ai-services/ai-consulting/ai-strategy-roadmap-workshop',
    icon: '🗺️',
    category: 'ai',
    title: 'AI Strategy & Roadmap Workshop',
    description: '2-day intensive workshop with our AI CTO-level consultants. Identify high-impact AI use cases, build business case, create 12-month implementation roadmap, and define success metrics. Includes follow-up 30-day office hours.',
    features': [
      'Pre-workshop assessment (surveys, data inventory)',
      'Cross-functional stakeholder interviews',
      'Use case prioritization matrix (impact vs feasibility)',
      'ROI modeling and TCO analysis',
      'Technical architecture recommendations',
      'Talent and skills gap analysis',
      '30 days of post-workshop office hours (email/phone)'
    ],
    'benefits': [
      'Avoid $500K+ in failed AI projects by starting right',
      'Align leadership on AI vision and priorities',
      'Create actionable roadmap with clear milestones',
      'Understand data readiness and infrastructure gaps'
    ],
    'pricing': {
      standard: '$9,500 — 2-day workshop for up to 12 attendees (remote)',
      onsite: '$15,000 — onsite at your location (US only)',
      extended: '$25,000 — 3-day + deeper technical assessment',
      ongoing: 'Contact — fractional AI executive services'
    },
    'contactInfo': {
      'website': 'https://ziontechgroup.com/services/ai-consulting/ai-strategy-roadmap-workshop',
      'email': 'kleber@ziontechgroup.com',
      'phone': '+1 302 464 0950',
      'address': '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-consulting-002',
    href: '/ai-services/ai-consulting/mlops-pipeline-setup',
    icon: '⚙️',
    category: 'ai',
    title: 'MLOps Pipeline Setup & Training',
    description: 'Build production-grade ML pipelines: data versioning, experiment tracking, model registry, CI/CD for ML, and monitoring. Implements best-in-class tools (MLflow, DVC, Kubeflow, Weights & Biases) tailored to your stack.',
    'features': [
      'Feature store and data versioning setup',
      'Experiment tracking and model comparison dashboards',
      'Model registry with versioning and stage promotion',
      'CI/CD pipelines for automated model training and deployment',
      'Model monitoring for drift, performance, and bias',
      'Infrastructure: Kubernetes, GPU scheduling, autoscaling',
      'Team training and runbooks for sustained operations'
    ],
    'benefits': [
      'Reduce model deployment time from months to hours',
      'Ensure reproducibility and auditability of ML experiments',
      'Monitor model quality in production — catch drift early',
      'Enable data science team to ship models autonomously'
    ],
    'pricing': {
      basic: '$15,000 — MLflow stack setup, training, documentation',
      business: '$45,000 — full MLOps platform (MLflow + DVC + monitoring)',
      enterprise: '$120,000 — Kubernetes-based, auto-scaling, custom tooling',
      support: '$3,000/mo — ongoing maintenance and monitoring'
    },
    'contactInfo': {
      'website': 'https://ziontechgroup.com/services/ai-consulting/mlops-pipeline-setup',
      'email': 'kleber@ziontechgroup.com',
      'phone': '+1 302 464 0950',
      'address': '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'special-001',
    href: '/it-services/special/digital-forensics-incident-response',
    icon: '🔍',
    category: 'it',
    title: 'Digital Forensics & Incident Response (DFIR)',
    description: '24/7 incident response and forensic investigation for security breaches. Preserve evidence, identify root cause, eradicate threats, and recover systems. Includes legal-ready reports and expert witness testimony.',
    'features': [
      '24/7 emergency response (under 1 hour initial contact)',
      'Forensic imaging and evidence preservation (chain of custody)',
      'Root cause analysis with timeline reconstruction',
      'Threat eradication and system recovery',
      'Legal report package (Deposition-ready documentation)',
      'Expert witness testimony (if needed)',
      'Post-incident review and security hardening recommendations'
    ],
    'benefits': [
      'Contain breaches within hours, not days',
      'Comply with legal and regulatory reporting requirements',
      'Understand attack vector to prevent recurrence',
      'Minimize business disruption and reputational damage'
    ],
    'pricing': {
      retainer: '$5,000/mo — 4 hours/month incident response pool',
      incident: '$8,000+ — per breach response (starts at 8-hour minimum)',
      forensic: '$15,000+ — deep investigation and report',
      litigation: 'Contact — expert witness and court testimony'
    },
    'contactInfo': {
      'website': 'https://ziontechgroup.com/services/it-special/digital-forensics-incident-response',
      'email': 'kleber@ziontechgroup.com',
      'phone': '+1 302 464 0950',
      'address': '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'special-002',
    href: '/it-services/special/technical-due-diligence-for-acquisitions',
    icon: '📋',
    category: 'it',
    title: 'Technical Due Diligence for M&A',
    description: 'Comprehensive technical assessment of acquisition targets. Evaluate code quality, architecture, security posture, technical debt, and scalability risks. Deliver decision-ready reports for investors and boards.',
    'features': [
      'Code review and architecture analysis (50K+ LOC)',
      'Security assessment (vulnerabilities, compliance)',
      'Performance and scalability evaluation',
      'Technical debt quantification and remediation cost estimate',
      'Team capability and development process assessment',
      'Integration risk analysis with your stack',
      'Management presentation and Q&A session'
    ],
    'benefits': [
      'Avoid acquiring technical time bombs',
      'Negotiate better terms based on technical risk findings',
      'Understand post-acquisition integration costs',
      'Accelerate due diligence from weeks to days'
    ],
    'pricing': {
      small: '$12,000 — startups < $10M valuation, lightweight review',
      standard: '$35,000 — mid-market, full technical DD',
      large: '$85,000+ — enterprise acquisitions, multi-disciplinary team',
      rush: '+50% — 5-day delivery available'
    },
    'contactInfo': {
      'website': 'https://ziontechgroup.com/services/it-special/technical-due-diligence-for-acquisitions',
      'email': 'kleber@ziontechgroup.com',
      'phone': '+1 302 464 0950',
      'address': '364 E Main St STE 1008 Middletown DE 19709'
    }
  }
];
];
export const itSolutions = itServices;

// ── NEW 50 SERVICES ADDED 2026-05-14 ───────────────────────────────────────
  {
    id: "ai-new-001",
    href: "/ai-services/ai-powered-clinical-documentation-for-ehrs",
    icon: "🤖",
    category: "ai",
    title: "AI-Powered Clinical Documentation for EHRs",
    description: "Advanced AI service: AI-Powered Clinical Documentation for EHRs. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/ai-powered-clinical-documentation-for-ehrs",
    tags: ["ai","enterprise","2026"]
  },
  {
    id: "ai-new-002",
    href: "/ai-services/autonomous-legal-discovery-engine",
    icon: "🤖",
    category: "ai",
    title: "Autonomous Legal Discovery Engine",
    description: "Advanced AI service: Autonomous Legal Discovery Engine. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/autonomous-legal-discovery-engine",
    tags: ["ai","enterprise","2026"]
  },
  {
    id: "ai-new-003",
    href: "/ai-services/ai-supply-chain-risk-predictor",
    icon: "🤖",
    category: "ai",
    title: "AI Supply Chain Risk Predictor",
    description: "Advanced AI service: AI Supply Chain Risk Predictor. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/ai-supply-chain-risk-predictor",
    tags: ["ai","enterprise","2026"]
  },
  {
    id: "ai-new-004",
    href: "/ai-services/conversational-ai-for-employee-it-support",
    icon: "🤖",
    category: "ai",
    title: "Conversational AI for Employee IT Support",
    description: "Advanced AI service: Conversational AI for Employee IT Support. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/conversational-ai-for-employee-it-support",
    tags: ["ai","enterprise","2026"]
  },
  {
    id: "ai-new-005",
    href: "/ai-services/ai-content-localization-and-cultural-adaptation",
    icon: "🤖",
    category: "ai",
    title: "AI Content Localization & Cultural Adaptation",
    description: "Advanced AI service: AI Content Localization & Cultural Adaptation. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/ai-content-localization-and-cultural-adaptation",
    tags: ["ai","enterprise","2026"]
  },
  {
    id: "ai-new-006",
    href: "/ai-services/predictive-churn-for-saas-platforms",
    icon: "🤖",
    category: "ai",
    title: "Predictive churn for SaaS platforms",
    description: "Advanced AI service: Predictive churn for SaaS platforms. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/predictive-churn-for-saas-platforms",
    tags: ["ai","enterprise","2026"]
  },
  {
    id: "ai-new-007",
    href: "/ai-services/ai-driven-developer-documentation",
    icon: "🤖",
    category: "ai",
    title: "AI-Driven Developer Documentation",
    description: "Advanced AI service: AI-Driven Developer Documentation. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/ai-driven-developer-documentation",
    tags: ["ai","enterprise","2026"]
  },
  {
    id: "ai-new-008",
    href: "/ai-services/intelligent-invoice-matching-and-ap-automation",
    icon: "🤖",
    category: "ai",
    title: "Intelligent Invoice Matching & AP Automation",
    description: "Advanced AI service: Intelligent Invoice Matching & AP Automation. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/intelligent-invoice-matching-and-ap-automation",
    tags: ["ai","enterprise","2026"]
  },
  {
    id: "ai-new-009",
    href: "/ai-services/ai-patient-triage-and-symptom-checker",
    icon: "🤖",
    category: "ai",
    title: "AI Patient Triage & Symptom Checker",
    description: "Advanced AI service: AI Patient Triage & Symptom Checker. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/ai-patient-triage-and-symptom-checker",
    tags: ["ai","enterprise","2026"]
  },
  {
    id: "ai-new-010",
    href: "/ai-services/real-time-video-analytics-for-retail",
    icon: "🤖",
    category: "ai",
    title: "Real-Time Video Analytics for Retail",
    description: "Advanced AI service: Real-Time Video Analytics for Retail. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/real-time-video-analytics-for-retail",
    tags: ["ai","enterprise","2026"]
  },
  {
    id: "ai-new-011",
    href: "/ai-services/ai-powered-grant-writing-assistant",
    icon: "🤖",
    category: "ai",
    title: "AI-Powered Grant Writing Assistant",
    description: "Advanced AI service: AI-Powered Grant Writing Assistant. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/ai-powered-grant-writing-assistant",
    tags: ["ai","enterprise","2026"]
  },
  {
    id: "ai-new-012",
    href: "/ai-services/autonomous-code-review-and-security-scanner",
    icon: "🤖",
    category: "ai",
    title: "Autonomous Code Review & Security Scanner",
    description: "Advanced AI service: Autonomous Code Review & Security Scanner. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/autonomous-code-review-and-security-scanner",
    tags: ["ai","enterprise","2026"]
  },
  {
    id: "ai-new-013",
    href: "/ai-services/ai-talent-matching-for-tech-hiring",
    icon: "🤖",
    category: "ai",
    title: "AI Talent Matching for Tech Hiring",
    description: "Advanced AI service: AI Talent Matching for Tech Hiring. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/ai-talent-matching-for-tech-hiring",
    tags: ["ai","enterprise","2026"]
  },
  {
    id: "ai-new-014",
    href: "/ai-services/smart-energy-optimization-for-buildings",
    icon: "🤖",
    category: "ai",
    title: "Smart Energy Optimization for Buildings",
    description: "Advanced AI service: Smart Energy Optimization for Buildings. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/smart-energy-optimization-for-buildings",
    tags: ["ai","enterprise","2026"]
  },
  {
    id: "ai-new-015",
    href: "/ai-services/ai-powered-pr-and-media-monitoring",
    icon: "🤖",
    category: "ai",
    title: "AI-Powered PR & Media Monitoring",
    description: "Advanced AI service: AI-Powered PR & Media Monitoring. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/ai-powered-pr-and-media-monitoring",
    tags: ["ai","enterprise","2026"]
  },
  {
    id: "ai-new-016",
    href: "/ai-services/automated-financial-statement-analysis",
    icon: "🤖",
    category: "ai",
    title: "Automated Financial Statement Analysis",
    description: "Advanced AI service: Automated Financial Statement Analysis. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/automated-financial-statement-analysis",
    tags: ["ai","enterprise","2026"]
  },
  {
    id: "ai-new-017",
    href: "/ai-services/ai-driven-content-repurposing-engine",
    icon: "🤖",
    category: "ai",
    title: "AI-Driven Content Repurposing Engine",
    description: "Advanced AI service: AI-Driven Content Repurposing Engine. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/ai-driven-content-repurposing-engine",
    tags: ["ai","enterprise","2026"]
  },
  {
    id: "ai-new-018",
    href: "/ai-services/predictive-maintenance-for-manufacturing-equipment",
    icon: "🤖",
    category: "ai",
    title: "Predictive Maintenance for Manufacturing Equipment",
    description: "Advanced AI service: Predictive Maintenance for Manufacturing Equipment. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/predictive-maintenance-for-manufacturing-equipment",
    tags: ["ai","enterprise","2026"]
  },
  {
    id: "ai-new-019",
    href: "/ai-services/ai-powered-accessibility-testing-suite",
    icon: "🤖",
    category: "ai",
    title: "AI-Powered Accessibility Testing Suite",
    description: "Advanced AI service: AI-Powered Accessibility Testing Suite. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/ai-powered-accessibility-testing-suite",
    tags: ["ai","enterprise","2026"]
  },
  {
    id: "ai-new-020",
    href: "/ai-services/conversational-sales-assistant-for-e-commerce",
    icon: "🤖",
    category: "ai",
    title: "Conversational Sales Assistant for E-Commerce",
    description: "Advanced AI service: Conversational Sales Assistant for E-Commerce. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/conversational-sales-assistant-for-e-commerce",
    tags: ["ai","enterprise","2026"]
  },
  {
    id: "ai-new-021",
    href: "/ai-services/ai-lab:-autonomous-feature-prioritizer",
    icon: "🤖",
    category: "ai",
    title: "AI Lab: Autonomous Feature Prioritizer",
    description: "Advanced AI service: AI Lab: Autonomous Feature Prioritizer. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/ai-lab:-autonomous-feature-prioritizer",
    tags: ["ai","enterprise","2026"]
  },
  {
    id: "ai-new-022",
    href: "/ai-services/ai-powered-competitive-intelligence-dashboard",
    icon: "🤖",
    category: "ai",
    title: "AI-Powered Competitive Intelligence Dashboard",
    description: "Advanced AI service: AI-Powered Competitive Intelligence Dashboard. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/ai-powered-competitive-intelligence-dashboard",
    tags: ["ai","enterprise","2026"]
  },
  {
    id: "ai-new-023",
    href: "/ai-services/intelligent-supply-chain-carbon-footprint-tracker",
    icon: "🤖",
    category: "ai",
    title: "Intelligent Supply Chain Carbon Footprint Tracker",
    description: "Advanced AI service: Intelligent Supply Chain Carbon Footprint Tracker. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/intelligent-supply-chain-carbon-footprint-tracker",
    tags: ["ai","enterprise","2026"]
  },
  {
    id: "ai-new-024",
    href: "/ai-services/ai-powered-customer-onboarding-workflows",
    icon: "🤖",
    category: "ai",
    title: "AI-Powered Customer Onboarding Workflows",
    description: "Advanced AI service: AI-Powered Customer Onboarding Workflows. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/ai-powered-customer-onboarding-workflows",
    tags: ["ai","enterprise","2026"]
  },
  {
    id: "ai-new-025",
    href: "/ai-services/real-time-fraud-detection-for-fintech",
    icon: "🤖",
    category: "ai",
    title: "Real-Time Fraud Detection for FinTech",
    description: "Advanced AI service: Real-Time Fraud Detection for FinTech. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/real-time-fraud-detection-for-fintech",
    tags: ["ai","enterprise","2026"]
  },
  {
    id: "it-new-001",
    href: "/it-services/unified-endpoint-management-as-a-service",
    icon: "⚙️",
    category: "it",
    title: "Unified Endpoint Management as a Service",
    description: "Enterprise IT service: Unified Endpoint Management as a Service. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/unified-endpoint-management-as-a-service",
    tags: ["it","enterprise","2026"]
  },
  {
    id: "it-new-002",
    href: "/it-services/multi-cloud-cost-visibility-and-optimization",
    icon: "⚙️",
    category: "it",
    title: "Multi-Cloud Cost Visibility & Optimization",
    description: "Enterprise IT service: Multi-Cloud Cost Visibility & Optimization. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/multi-cloud-cost-visibility-and-optimization",
    tags: ["it","enterprise","2026"]
  },
  {
    id: "it-new-003",
    href: "/it-services/kubernetes-cluster-hardening-and-compliance",
    icon: "⚙️",
    category: "it",
    title: "Kubernetes Cluster Hardening & Compliance",
    description: "Enterprise IT service: Kubernetes Cluster Hardening & Compliance. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/kubernetes-cluster-hardening-and-compliance",
    tags: ["it","enterprise","2026"]
  },
  {
    id: "it-new-004",
    href: "/it-services/database-as-a-service-with-automated-backups",
    icon: "⚙️",
    category: "it",
    title: "Database-as-a-Service with Automated Backups",
    description: "Enterprise IT service: Database-as-a-Service with Automated Backups. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/database-as-a-service-with-automated-backups",
    tags: ["it","enterprise","2026"]
  },
  {
    id: "it-new-005",
    href: "/it-services/api-security-testing-and-runtime-protection",
    icon: "⚙️",
    category: "it",
    title: "API Security Testing & Runtime Protection",
    description: "Enterprise IT service: API Security Testing & Runtime Protection. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/api-security-testing-and-runtime-protection",
    tags: ["it","enterprise","2026"]
  },
  {
    id: "it-new-006",
    href: "/it-services/it-asset-discovery-and-configuration-management",
    icon: "⚙️",
    category: "it",
    title: "IT Asset Discovery & Configuration Management",
    description: "Enterprise IT service: IT Asset Discovery & Configuration Management. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/it-asset-discovery-and-configuration-management",
    tags: ["it","enterprise","2026"]
  },
  {
    id: "it-new-007",
    href: "/it-services/edge-computing-deployment-and-management",
    icon: "⚙️",
    category: "it",
    title: "Edge Computing Deployment & Management",
    description: "Enterprise IT service: Edge Computing Deployment & Management. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/edge-computing-deployment-and-management",
    tags: ["it","enterprise","2026"]
  },
  {
    id: "it-new-008",
    href: "/it-services/secure-file-transfer-and-managed-file-transfer",
    icon: "⚙️",
    category: "it",
    title: "Secure File Transfer & Managed File Transfer",
    description: "Enterprise IT service: Secure File Transfer & Managed File Transfer. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/secure-file-transfer-and-managed-file-transfer",
    tags: ["it","enterprise","2026"]
  },
  {
    id: "it-new-009",
    href: "/it-services/automated-incident-response-(soar)",
    icon: "⚙️",
    category: "it",
    title: "Automated Incident Response (SOAR)",
    description: "Enterprise IT service: Automated Incident Response (SOAR). Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/automated-incident-response-(soar)",
    tags: ["it","enterprise","2026"]
  },
  {
    id: "it-new-010",
    href: "/it-services/enterprise-identity-governance-and-administration",
    icon: "⚙️",
    category: "it",
    title: "Enterprise Identity Governance & Administration",
    description: "Enterprise IT service: Enterprise Identity Governance & Administration. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/enterprise-identity-governance-and-administration",
    tags: ["it","enterprise","2026"]
  },
  {
    id: "it-new-011",
    href: "/it-services/database-migration-as-a-service",
    icon: "⚙️",
    category: "it",
    title: "Database Migration as a Service",
    description: "Enterprise IT service: Database Migration as a Service. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/database-migration-as-a-service",
    tags: ["it","enterprise","2026"]
  },
  {
    id: "it-new-012",
    href: "/it-services/cloud-cost-allocation-and-tag-governance",
    icon: "⚙️",
    category: "it",
    title: "Cloud Cost Allocation & Tag Governance",
    description: "Enterprise IT service: Cloud Cost Allocation & Tag Governance. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/cloud-cost-allocation-and-tag-governance",
    tags: ["it","enterprise","2026"]
  },
  {
    id: "it-new-013",
    href: "/it-services/secure-backup-and-disaster-recovery-as-a-service",
    icon: "⚙️",
    category: "it",
    title: "Secure Backup & Disaster Recovery as a Service",
    description: "Enterprise IT service: Secure Backup & Disaster Recovery as a Service. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/secure-backup-and-disaster-recovery-as-a-service",
    tags: ["it","enterprise","2026"]
  },
  {
    id: "it-new-014",
    href: "/it-services/container-security-and-runtime-protection",
    icon: "⚙️",
    category: "it",
    title: "Container Security & Runtime Protection",
    description: "Enterprise IT service: Container Security & Runtime Protection. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/container-security-and-runtime-protection",
    tags: ["it","enterprise","2026"]
  },
  {
    id: "it-new-015",
    href: "/it-services/ai-ready-data-pipeline-builder",
    icon: "⚙️",
    category: "it",
    title: "AI-Ready Data Pipeline Builder",
    description: "Enterprise IT service: AI-Ready Data Pipeline Builder. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/ai-ready-data-pipeline-builder",
    tags: ["it","enterprise","2026"]
  },
  {
    id: "it-new-016",
    href: "/it-services/it-strategy-and-digital-transformation-consulting",
    icon: "⚙️",
    category: "it",
    title: "IT Strategy & Digital Transformation Consulting",
    description: "Enterprise IT service: IT Strategy & Digital Transformation Consulting. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/it-strategy-and-digital-transformation-consulting",
    tags: ["it","enterprise","2026"]
  },
  {
    id: "it-new-017",
    href: "/it-services/observability-and-sre-platform-as-a-service",
    icon: "⚙️",
    category: "it",
    title: "Observability & SRE Platform as a Service",
    description: "Enterprise IT service: Observability & SRE Platform as a Service. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/observability-and-sre-platform-as-a-service",
    tags: ["it","enterprise","2026"]
  },
  {
    id: "it-new-018",
    href: "/it-services/legacy-application-containerization-service",
    icon: "⚙️",
    category: "it",
    title: "Legacy Application Containerization Service",
    description: "Enterprise IT service: Legacy Application Containerization Service. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/legacy-application-containerization-service",
    tags: ["it","enterprise","2026"]
  },
  {
    id: "it-new-019",
    href: "/it-services/managed-soc-2-compliance-platform",
    icon: "⚙️",
    category: "it",
    title: "Managed SOC 2 Compliance Platform",
    description: "Enterprise IT service: Managed SOC 2 Compliance Platform. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/managed-soc-2-compliance-platform",
    tags: ["it","enterprise","2026"]
  },
  {
    id: "it-new-020",
    href: "/it-services/enterprise-data-warehouse-modernization",
    icon: "⚙️",
    category: "it",
    title: "Enterprise Data Warehouse Modernization",
    description: "Enterprise IT service: Enterprise Data Warehouse Modernization. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/enterprise-data-warehouse-modernization",
    tags: ["it","enterprise","2026"]
  },
  {
    id: "it-new-021",
    href: "/it-services/api-gateway-and-developer-portal",
    icon: "⚙️",
    category: "it",
    title: "API Gateway & Developer Portal",
    description: "Enterprise IT service: API Gateway & Developer Portal. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/api-gateway-and-developer-portal",
    tags: ["it","enterprise","2026"]
  },
  {
    id: "it-new-022",
    href: "/it-services/low-code-integration-platform-as-a-service",
    icon: "⚙️",
    category: "it",
    title: "Low-Code Integration Platform as a Service",
    description: "Enterprise IT service: Low-Code Integration Platform as a Service. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/low-code-integration-platform-as-a-service",
    tags: ["it","enterprise","2026"]
  },
  {
    id: "it-new-023",
    href: "/it-services/wireless-network-design-and-optimization",
    icon: "⚙️",
    category: "it",
    title: "Wireless Network Design & Optimization",
    description: "Enterprise IT service: Wireless Network Design & Optimization. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/wireless-network-design-and-optimization",
    tags: ["it","enterprise","2026"]
  },
  {
    id: "it-new-024",
    href: "/it-services/unified-communications-and-collaboration-platform",
    icon: "⚙️",
    category: "it",
    title: "Unified Communications & Collaboration Platform",
    description: "Enterprise IT service: Unified Communications & Collaboration Platform. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/unified-communications-and-collaboration-platform",
    tags: ["it","enterprise","2026"]
  },
export const allServices: Service[] = [...aiServices, ...itServices,

  {
    id: "it-quantum-readiness-assessment",
    href: "/it-services/quantum-readiness-assessment",
    icon: "⚛️",
    category: "it",
    title: "Quantum Readiness Assessment",
    description: "Evaluate your cryptographic infrastructure against future quantum threats. We inventory all PKI assets, identify vulnerable algorithms, and produce a migration roadmap to post-quantum cryptography.",
    features: [
      "Automated crypto-asset discovery across clouds and data centers",
      "PQ algorithm readiness score — NIST finalists assessment",
      "Migration cost estimation and phased plan",
      "Hybrid cipher deployment guidance",
      "Executive dashboard with risk heat map"
    ],
    benefits: [
      "Avoids 'harvest now, decrypt later' data breaches",
      "Meets compliance timelines — e.g., NSA CNS 2.0 deadline 2025",
      "Smooth transition with zero downtime"
    ],
    pricing: { assessment: "4999", full_engagement: "contact" }
  },
  {
    id: "it-edge-computing-deployment",
    href: "/it-services/edge-computing-deployment",
    icon: "📡",
    category: "it",
    title: "Edge Computing Deployment and Ops",
    description: "Deploy and manage containerized workloads on distributed edge nodes — factories, retail stores, telco sites. Unified control plane with zero-touch provisioning.",
    features: [
      "Kubernetes at the edge — K3s, k0s, MicroK8s",
      "Over-the-air updates with rollback",
      "Bandwidth-aware workload placement",
      "Edge AI model serving — ONNX, TensorFlow Lite",
      "Offline-first operation and sync queues"
    ],
    benefits: [
      "Reduces latency to <10ms for real-time applications",
      "Lowers bandwidth costs by up to 60%",
      "Enables AI inference in disconnected environments"
    ],
    pricing: { proof_of_concept: "4999", full_deployment: "contact" }
  },
  {
    id: "it-sustainability-dashboard",
    href: "/it-services/sustainability-dashboard",
    icon: "🌱",
    category: "it",
    title: "IT Sustainability Dashboard",
    description: "Track and optimize carbon footprint across your IT estate — data centers, cloud workloads, employee devices, and network. Set reduction targets and auto-generate ESG reports.",
    features: [
      "Cloud carbon calculator — AWS, Azure, GCP",
      "Hardware lifecycle tracking — embodied carbon",
      "Renewable energy usage % per region",
      "Automated sustainability recommendations",
      "ESG report export — GRI, SASB, TCFD frameworks"
    ],
    benefits: [
      "Reduces carbon output by 20–35% in year 1",
      "Meets investor ESG requirements",
      "Saves $200K+ annually via right-sizing and reserved instance optimization"
    ],
    pricing: { basic: "699", enterprise: "contact" }
  },
  {
    id: "it-chaos-engineering",
    href: "/it-services/chaos-engineering",
    icon: "🌪️",
    category: "it",
    title: "Chaos Engineering as a Service",
    description: "Proactively test system resilience by injecting failures — VM kill, network latency, dependency outage — in production-like environments. Improve reliability before incidents happen.",
    features: [
      "Custom experiment design for your architecture",
      "Steady-state hypothesis validation",
      "Automatic blast radius containment",
      "Post-experiment forensic reports",
      "Runbooks updated based on findings"
    ],
    benefits: [
      "Reduces P0 incidents by 50% year-over-year",
      "Builds confidence in auto-scaling and failover",
      "Identifies single points of failure before customers do"
    ],
    pricing: { per_experiment: "199", retainer: "2499/mo" }
  },
  {
    id: "it-cost-optimization-platform",
    href: "/it-services/cost-optimization-platform",
    icon: "💸",
    category: "it",
    title: "Cloud Cost Optimization Platform",
    description: "Automated cost governance for AWS, Azure, and GCP. Right-sizes resources, eliminates waste, and enforces budgets with predictive alerts before overspend.",
    features: [
      "Idle resource detection and auto-stop schedules",
      "Reserved instance and savings plan recommendation engine",
      "Tag-based cost allocation and showback",
      "Anomaly detection with root-cause tagging",
      "Custom budget thresholds with Slack and Teams alerts"
    ],
    benefits: [
      "Saves 25–40% on cloud spend without performance hit",
      "Prevents bill shock with 7-day spend forecast",
      "Provides finance-grade cost reporting"
    ],
    pricing: { basic: "299", pro: "799", enterprise: "contact" }
  },

  {
    id: "ai-voice-cloning-emotion",
    href: "/ai-services/voice-cloning-emotion",
    icon: "🎭",
    category: "ai",
    title: "Emotional Voice Cloning Studio",
    description: "Clone any voice with full emotional control — happiness, sadness, anger, urgency — for audiobooks, games, and accessibility. Supports 40+ languages and real-time modulation.",
    features: [
      "Zero-shot voice cloning from 10-second sample",
      "Per-sentence emotion injection (8 basic + complex blends)",
      "Real-time voice conversion during calls",
      "Speaker diarization and multi-voice projects",
      "Ethical consent layer and watermarking"
    ],
    benefits: [
      "Cuts dubbing costs by 70%",
      "Enables dynamic NPC voices in games",
      "Restores speech for ALS patients with their own voiceprint"
    ],
    pricing: { basic: "99", pro: "299", enterprise: "999" }
  },
  {
    id: "ai-code-audit-security",
    href: "/ai-services/code-audit-security",
    icon: "🔐",
    category: "ai",
    title: "AI Code Audit and Security Scanner",
    description: "Deep static analysis that finds complex vulnerabilities — logic bugs, race conditions, crypto misuses — beyond traditional linters. Uses LLMs to understand intent.",
    features: [
      "Detects business logic flaws and privilege escalation",
      "Smart contract audit mode (EVM, Solana, Move)",
      "Patch suggestion with fix diffs",
      "SBOM generation and dependency risk scoring",
      "CI/CD gate integration"
    ],
    benefits: [
      "Prevents 90% of critical vulnerabilities before deployment",
      "Reduces manual code review time by 60%",
      "Meets SOC2 and ISO27001 compliance requirements"
    ],
    pricing: { basic: "149", pro: "399", team: "1299" }
  },
  {
    id: "ai-meeting-intelligence",
    href: "/ai-services/meeting-intelligence",
    icon: "🤖",
    category: "ai",
    title: "AI Meeting Intelligence Suite",
    description: "Autonomous meeting agent that joins Zoom and Teams, transcribes, summarizes decisions, extracts action items with owners and due dates, and pushes to your project tools.",
    features: [
      "Real-time transcription in 60+ languages",
      "Decision to task auto-creation (Asana, Linear, Jira)",
      "Conflict detection on action item assignments",
      "Voice print identification and speaker timeline",
      "Private mode for confidential calls"
    ],
    benefits: [
      "Saves 5–7 hours per week in meeting follow-up",
      "Zero missed action items or unclear owners",
      "Searchable knowledge base of all past discussions"
    ],
    pricing: { basic: "49", pro: "149", business: "499" }
  },
  {
    id: "ai-fraud-detection-realtime",
    href: "/ai-services/fraud-detection-realtime",
    icon: "🛡️",
    category: "ai",
    title: "Real-Time Fraud Detection Engine",
    description: "ML-based fraud detection for fintech, e-commerce, and marketplaces. Adapts to new fraud patterns within hours, not weeks.",
    features: [
      "Custom model training on your transaction history",
      "3D Secure-like challenge without friction",
      "Synthetic identity detection",
      "Chargeback evidence auto-packager",
      "Regulatory reporting dashboard (FFIEC, PSD2)"
    ],
    benefits: [
      "Lowers false positives by 55% vs rule-based systems",
      "Reduces chargebacks by up to 80%",
      "Onboards in 48 hours with existing data"
    ],
    pricing: { starter: "199", growth: "699", enterprise: "contact" }
  },
  {
    id: "ai-document-redaction",
    href: "/ai-services/document-redaction",
    icon: "🔒",
    category: "ai",
    title: "AI Document Redaction and PII Removal",
    description: "Automatically detects and redacts PII, PHI, and sensitive data in documents, PDFs, images, and transcripts. SOC2-compliant audit trail included.",
    features: [
      "Named entity recognition across 50+ PII types",
      "Image-based document OCR and redaction",
      "Bulk processing with S3 and GCS integration",
      "Tamper-evident redaction certificates",
      "Regex custom entity support"
    ],
    benefits: [
      "Preps 10,000 pages for public release in under 1 hour",
      "Eliminates manual review costs — $0.03/page vs $0.45/page",
      "Audit-ready for GDPR, HIPAA, CCPA violations"
    ],
    pricing: { payg: "0.03/page", subscription: "499/mo" }
  },
  {
    id: "ai-legal-drafting",
    href: "/ai-services/legal-drafting",
    icon: "⚖️",
    category: "ai",
    title: "AI Legal Document Drafter",
    description: "Draft contracts, NDAs, term sheets, and privacy policies with jurisdiction-specific clauses. Trained on actual filings from SEC, Companies House, etc.",
    features: [
      "Clause library with risk scoring",
      "Redline comparison against templates",
      "Obligation tracker with deadline reminders",
      "Multi-jurisdiction support — 50+ countries",
      "Law-firm approved templates — ex. Axiom, Latham"
    ],
    benefits: [
      "Cuts first-draft time from 4 hours to 12 minutes",
      "Reduces outside counsel spend by 35%",
      "Identifies non-standard clauses before signature"
    ],
    pricing: { startup: "299/mo", business: "899/mo", enterprise: "contact" }
  },
  {
    id: "ai-video-dubbing",
    href: "/ai-services/video-dubbing",
    icon: "🎬",
    category: "ai",
    title: "AI Video Dubbing and Lip-Sync",
    description: "Translate and dub videos with AI-generated voice plus perfect lip-sync. Supports 70+ languages and preserves speaker intonation and emotion.",
    features: [
      "Voice cloning per original speaker",
      "Phoneme-aware lip movement adjustment",
      "Background music and sound effect retention",
      "Subtitle generation in SRT and VTT",
      "YouTube and TikTok multi-language upload automation"
    ],
    benefits: [
      "Expands global reach without separate shoots",
      "Saves $15K–$50K per video vs traditional dubbing",
      "Maintains brand voice consistency across locales"
    ],
    pricing: { per_minute: "12", monthly: "contact" }
  },
  {
    id: "ai-supply-chain-predictor",
    href: "/ai-services/supply-chain-predictor",
    icon: "🚢",
    category: "ai",
    title: "AI Supply Chain Predictor",
    description: "Predicts supply chain disruptions 14–30 days in advance using multi-source data — weather, geopolitical events, shipping delays, and supplier health scores.",
    features: [
      "Demand forecasting with 94% accuracy",
      "Alternative routing suggestions",
      "Supplier risk scoring",
      "Real-time anomaly alerts"
    ],
    benefits: [
      "Reduces stockouts by 35%",
      "Cuts expedited shipping costs by 22%",
      "Improves supplier negotiation leverage"
    ],
    pricing: { basic: "299", pro: "799", enterprise: "2499" }
  },
  {
    id: "ai-image-upscaling",
    href: "/ai-services/image-upscaling",
    icon: "🖼️",
    category: "ai",
    title: "AI Image Upscaler and Restorer",
    description: "Upscale images 4–16× with detail reconstruction. Removes JPEG artifacts, fixes blur, and even colorizes black and white photos with historical accuracy.",
    features: [
      "Face-aware upscaling — preserves identity",
      "Batch processing via API — 10K images/hr",
      "Lossless PNG optimization post-upscale",
      "Before and after preview with quality metrics",
      "On-premise Docker image for air-gapped environments"
    ],
    benefits: [
      "Makes legacy asset libraries print-ready again",
      "Saves $50K+ in reshoots for archival imagery",
      "Improves product image conversion by 18% on e-commerce"
    ],
    pricing: { payg: "0.05/MP", subscription: "199/mo" }
  },
  {
    id: "ai-chatbot-builder",
    href: "/ai-services/chatbot-builder",
    icon: "💬",
    category: "ai",
    title: "No-Code AI Chatbot Builder",
    description: "Create custom GPT-like chatbots trained on your data — docs, FAQs, past tickets — and embed them anywhere. Fine-tune tone, guardrails, and escalation paths in minutes.",
    features: [
      "Drag-and-drop conversation flow designer",
      "Multi-channel deploy — web, WhatsApp, Slack, FB Messenger",
      "Human handoff with full context preservation",
      "Analytics dashboard — resolution rate, escalation triggers",
      "Custom GPT actions — lookup order, create support ticket"
    ],
    benefits: [
      "Handles 65% of routine queries without agents",
      "Live in <1 hour from data upload",
      "Improves CSAT by 12 points with instant answers"
    ],
    pricing: { starter: "99", business: "299", unlimited: "799" }
  }];
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
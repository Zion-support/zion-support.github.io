import { Service } from './serviceTypes';

// Wave 213 — Supply Chain AI, Voice Biometrics, Green IT,
// Spatial Computing, and Legal Research AI
// Research by @OWL — 2026-06-06
// New categories: supply-chain-ai, voice-biometrics, green-it,
// spatial-computing, legal-research-ai

export const wave213SupplyChainAiServices: Service[] = [
  {
    id: 'fourkites-real-time-supply-chain-visibility',
    title: 'FourKites — Real-Time Supply Chain Visibility Platform',
    description: 'FourKites provides end-to-end real-time supply chain visibility, tracking shipments across ocean, rail, truck, and last-mile delivery in a single platform. Used by 1,200+ enterprises including Walmart, Coca-Cola, and Unilever, it uses AI-powered ETA predictions, exception management, and sustainability tracking to reduce logistics costs by up to 15%.',
    category: 'supply-chain-ai',
    icon: '🚛',
    href: '/services/fourkites-real-time-supply-chain-visibility',
    industry: 'Logistics & Supply Chain',
    stage: 'published',
    popular: true,
    pricing: { basic: '$2,000/month (starter)', pro: '$10,000/month (professional)', enterprise: 'Custom ($50K+/year)' },
    contactInfo: { website: 'https://fourkites.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Real-time multimodal tracking: ocean, rail, truck, parcel, and last-mile',
      'AI-powered dynamic ETA predictions with 95%+ accuracy',
      'Automated exception management and delay alerts',
      'Sustainability dashboard: CO2 emissions tracking per shipment',
      'Integration with 200+ TMS, ERP, and WMS platforms',
      'Digital twin of supply chain network for scenario planning'
    ],
    benefits: [
      'Reduce logistics costs by up to 15% through proactive exception management',
      'Improve on-time delivery rates by 20% with AI-powered ETAs',
      'Eliminate manual check-calls and status emails across carriers',
      'Achieve Scope 3 emissions visibility for ESG reporting compliance'
    ]
  },
  {
    id: 'project44-advanced-visibility-platform',
    title: 'project44 — Advanced Supply Chain Visibility & AI Orchestration',
    description: 'project44 is the world\'s most adopted supply chain visibility platform, connecting 175,000+ carriers across 170+ countries. Its AI orchestration layer automates freight procurement, appointment scheduling, and inventory optimization. The Movement platform provides a single source of truth for global logistics operations.',
    category: 'supply-chain-ai',
    icon: '🌐',
    href: '/services/project44-advanced-visibility-platform',
    industry: 'Logistics & Supply Chain',
    stage: 'published',
    popular: false,
    pricing: { basic: '$3,000/month (growth)', pro: '$15,000/month (enterprise)', enterprise: 'Custom ($100K+/year)' },
    contactInfo: { website: 'https://project44.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Global carrier network: 175,000+ carriers across 170+ countries',
      'AI-driven freight procurement and rate benchmarking',
      'Automated appointment scheduling and yard management',
      'Inventory optimization with demand-sensing algorithms',
      'API-first architecture with pre-built SAP, Oracle, Blue Yonder connectors',
      'Real-time carbon footprint calculation per shipment and lane'
    ],
    benefits: [
      'Reduce freight spend by 8-12% through AI-powered procurement',
      'Cut detention and demurrage costs by 30% with automated scheduling',
      'Improve inventory turns by 15% with demand-sensing optimization',
      'Single integration point for all supply chain data and carrier communications'
    ]
  }
];

export const wave213VoiceBiometricsServices: Service[] = [
  {
    id: 'nuance-dragon-voice-biometrics',
    title: 'Nuance Dragon — Voice Biometrics & Speech Recognition',
    description: 'Nuance Dragon, now part of Microsoft, is the industry-leading speech recognition and voice biometrics platform. Dragon Medical One processes 200 million patient notes per year across 10,000+ healthcare organizations. Its voice biometrics capabilities enable passwordless authentication, fraud detection in call centers, and clinical documentation automation with 99% accuracy.',
    category: 'voice-biometrics',
    icon: '🎙️',
    href: '/services/nuance-dragon-voice-biometrics',
    industry: 'Healthcare & Security',
    stage: 'published',
    popular: true,
    pricing: { basic: '$500/month (Dragon Professional)', pro: '$2,000/month (Dragon Legal/Medical)', enterprise: 'Custom ($50K+/year for biometrics platform)' },
    contactInfo: { website: 'https://nuance.com/dragon', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Speech recognition with 99% accuracy out of the box, no voice training required',
      'Voice biometrics: speaker identification and verification in <1 second',
      'Dragon Medical One: ambient clinical intelligence (ACI) for automated note-taking',
      'Pre-built medical vocabularies covering 80+ specialties',
      'HIPAA-compliant cloud and on-premises deployment options',
      'Voice-driven navigation of EHR systems (Epic, Cerner, MEDITECH)'
    ],
    benefits: [
      'Reduce clinical documentation time by 45% with ambient AI listening',
      'Eliminate passwords with voice-based authentication in call centers',
      'Detect fraudulent callers in real-time using voiceprint matching',
      'Physicians complete notes 2 hours faster per day on average'
    ]
  },
  {
    id: 'pindrop-voice-security-fraud-detection',
    title: 'Pindrop — Voice Security, Authentication & Fraud Detection',
    description: 'Pindrop pioneered voice-based fraud detection and phone security, analyzing 147 acoustic features of each call to detect deepfakes, identify callers, and flag fraud in real-time. Its patented Phoneprinting technology analyzes audio from any phone call to determine device type, call origin, and whether the audio has been tampered with. Used by 8 of the top 10 US banks.',
    category: 'voice-biometrics',
    icon: '🔐',
    href: '/services/pindrop-voice-security-fraud-detection',
    industry: 'Financial Services & Telecommunications',
    stage: 'published',
    popular: false,
    pricing: { basic: 'Custom (contact sales)', pro: '$50,000/year (mid-market)', enterprise: '$200K+/year (enterprise platform)' },
    contactInfo: { website: 'https://pindrop.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Phoneprinting: analyzes 147 acoustic features to fingerprint phone calls',
      'Deepfake audio detection with 99.5% accuracy using AI models',
      'Passphrase-based voice authentication for IVR and agent-assisted calls',
      'Real-time risk scoring: each call assigned fraud probability in <200ms',
      'Risk intelligence database: 14M+ fraud events and known fraudster voiceprints',
      'Integration with NICE, Ver Genesys, Amazon Connect, and Twilio platforms'
    ],
    benefits: [
      'Prevent $10M+ in annual fraud losses for Tier 1 banks',
      'Reduce call center authentication time from 90 seconds to 10 seconds',
      'Detect AI-generated deepfake voices that bypass traditional biometrics',
      'Maintain comprehensive fraud evidence chain for law enforcement prosecution'
    ]
  }
];

export const wave213GreenItServices: Service[] = [
  {
    id: 'microsoft-sustainability-manager',
    title: 'Microsoft Cloud for Sustainability — Green IT & Carbon Tracking',
    description: 'Microsoft Cloud for Sustainability (MCFS) is an enterprise-grade ESG and carbon accounting platform that automates Scope 1, 2, and 3 emissions tracking across IT infrastructure, supply chains, and operations. It integrates with Azure, Dynamics 365, and third-party data sources to provide auditable carbon reports aligned with GHG Protocol, CDP, and CSRD standards.',
    category: 'green-it',
    icon: '🌿',
    href: '/services/microsoft-sustainability-manager',
    industry: 'Sustainability & ESG',
    stage: 'published',
    popular: true,
    pricing: { basic: 'Included with Microsoft 365 E5', pro: '$15/user/month (Sustainability Manager)', enterprise: 'Custom ($100K+/year for full platform)' },
    contactInfo: { website: 'https://microsoft.com/sustainability', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Automated Scope 1, 2, and 3 emissions calculation using activity-based and spend-based methods',
      'Azure carbon optimization: identifies underutilized VMs and recommends right-sizing',
      'Supply chain emissions tracking with supplier-specific emission factors',
      'Audit-ready reports aligned with GHG Protocol, CDP, CSRD, and TCFD frameworks',
      'AI-powered what-if scenario modeling for decarbonization roadmaps',
      'Integration with 150+ data sources: ERP, IoT sensors, utility bills, travel systems'
    ],
    benefits: [
      'Reduce carbon accounting effort by 80% vs manual spreadsheet tracking',
      'Identify 30-40% energy waste in cloud infrastructure for immediate savings',
      'Meet CSRD and SEC climate disclosure requirements with auditable data',
      'Accelerate net-zero commitments with AI-guided decarbonization pathways'
    ]
  },
  {
    id: 'salesforce-net-zero-cloud',
    title: 'Salesforce Net Zero Cloud — Enterprise Carbon Accounting',
    description: 'Salesforce Net Zero Cloud (formerly Sustainability Cloud) provides comprehensive carbon accounting and ESG reporting built on the Salesforce platform. It enables companies to track emissions across their entire value chain, automate data collection from suppliers, and generate investor-grade sustainability reports. Used by 3,000+ companies including Schneider Electric and The Coca-Cola Company.',
    category: 'green-it',
    icon: '♻️',
    href: '/services/salesforce-net-zero-cloud',
    industry: 'Sustainability & ESG',
    stage: 'published',
    popular: false,
    pricing: { basic: '$50,000/year (starter)', pro: '$150,000/year (professional)', enterprise: 'Custom ($500K+/year for global enterprise)' },
    contactInfo: { website: 'https://salesforce.com/products/net-zero-cloud', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Scope 1, 2, and 3 emissions tracking with automated data ingestion',
      'Supplier engagement portal: collect emissions data from 10,000+ suppliers',
      'Pre-built emission factors database covering 90+ countries and industries',
      'ESG scorecard and benchmarking against industry peers',
      'Integration with SAP, Oracle, Workday, and utility providers',
      'Climate action plan tracking with milestone and target management'
    ],
    benefits: [
      'Automate 70% of carbon data collection that was previously manual',
      'Engage suppliers representing 80%+ of Scope 3 emissions',
      'Generate board-ready ESG reports in hours instead of weeks',
      'Benchmark sustainability performance against 500+ industry peers'
    ]
  }
];

export const wave213SpatialComputingServices: Service[] = [
  {
    id: 'apple-vision-pro-spatial-computing',
    title: 'Apple Vision Pro — Spatial Computing Platform',
    description: 'Apple Vision Pro is the first mainstream spatial computing platform, blending digital content with the physical world through high-resolution passthrough, eye tracking, and hand gesture recognition. Its visionOS operating system enables enterprise applications in design, training, healthcare, and remote collaboration. With the M2 chip and R1 spatial processor, it delivers real-time 3D rendering at 12ms latency.',
    category: 'spatial-computing',
    icon: '🥽',
    href: '/services/apple-vision-pro-spatial-computing',
    industry: 'Consumer & Enterprise Technology',
    stage: 'published',
    popular: true,
    pricing: { basic: '$3,499 (hardware)', pro: '$3,499 + $99/developer license', enterprise: 'Custom (Apple Business Manager volume pricing)' },
    contactInfo: { website: 'https://apple.com/vision-pro', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Dual 4K micro-OLED displays (23 million pixels total) with HDR',
      'Eye tracking, hand gesture, and voice input — no controllers required',
      'visionOS: spatial computing OS with infinite canvas and 3D app windows',
      'Enterprise APIs: ARKit, RealityKit, and RoomPlan for custom spatial apps',
      'Optic ID: iris-based biometric authentication for secure enterprise use',
      'Shared spatial experiences: FaceTime collaboration in shared 3D space'
    ],
    benefits: [
      'Transform design reviews with full-scale 3D prototyping in spatial context',
      'Enable remote expert assistance with shared spatial annotations',
      'Reduce training time by 50% with immersive 3D procedural guidance',
      'Create immersive customer experiences that drive 3x engagement vs 2D'
    ]
  },
  {
    id: 'meta-quest-3-spatial-computing-enterprise',
    title: 'Meta Quest 3 — Mixed Reality Spatial Computing for Enterprise',
    description: 'Meta Quest 3 brings mixed reality spatial computing to the enterprise at consumer-friendly price points. With full-color passthrough, inside-out tracking, and the Snapdragon XR2 Gen 2 chip, it enables spatial workspaces, immersive training, and digital twin visualization. Meta Quest for Business provides MDM, kiosk mode, and enterprise app distribution for fleet management.',
    category: 'spatial-computing',
    icon: '🌐',
    href: '/services/meta-quest-3-spatial-computing-enterprise',
    industry: 'Enterprise & Industrial',
    stage: 'published',
    popular: false,
    pricing: { basic: '$499 (128GB headset)', pro: '$649 (512GB) + $180/year Quest for Business', enterprise: 'Custom (volume pricing for 100+ units)' },
    contactInfo: { website: 'https://meta.com/quest/quest-3', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Full-color mixed reality passthrough with 3x resolution improvement over Quest 2',
      'Snapdragon XR2 Gen 2: 2x GPU performance for complex spatial rendering',
      'Meta Quest for Business: MDM, kiosk mode, and enterprise app store',
      'Spatial anchoring: persist digital content to physical locations',
      'Hand tracking 2.0 and controller support for flexible interaction',
      'Integration with Microsoft 365, Zoom, and Autodesk for spatial productivity'
    ],
    benefits: [
      'Deploy spatial computing at 70% lower cost than Apple Vision Pro',
      'Enable remote collaboration with shared 3D workspaces and annotations',
      'Reduce industrial training costs by 40% with immersive simulations',
    ]
  }
];

export const wave213LegalResearchAiServices: Service[] = [
  {
    id: 'westlaw-edge-thomson-reuters-legal-ai',
    title: 'Westlaw Edge — Thomson Reuters AI-Powered Legal Research',
    description: 'Westlaw Edge is Thomson Reuters\' AI-powered legal research platform, used by 98% of Am Law 100 firms. It provides AI-assisted brief analysis, litigation analytics predicting judge ruling patterns, statute interpretation using natural language processing, and automated regulatory compliance monitoring across 50+ jurisdictions. Its KeyCite Overruling Check uses AI to identify when case law has been implicitly overruled.',
    category: 'legal-research-ai',
    icon: '⚖️',
    href: '/services/westlaw-edge-thomson-reuters-legal-ai',
    industry: 'Legal Technology',
    stage: 'published',
    popular: true,
    pricing: { basic: '$500/month (Westlaw Edge Essentials)', pro: '$1,200/month (Westlaw Edge Professional)', enterprise: 'Custom ($50K+/year for firm-wide deployment)' },
    contactInfo: { website: 'https://legal.thomsonreuters.com/westlaw', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'AI-powered brief analysis: identifies missing authorities and weak arguments',
      'Litigation Analytics: predicts judge ruling patterns with 75%+ accuracy',
      'KeyCite Overruling Check: AI detects implicitly overruled case law',
      'Contract Analyzer: extracts and compares clauses across 10,000+ contracts',
      'Regulatory compliance monitoring across 50+ jurisdictions in real-time',
      'Natural language search: ask legal questions in plain English, get cited answers'
    ],
    benefits: [
      'Reduce legal research time by 60% with AI-powered search and analysis',
      'Win more cases with data-driven litigation strategy and judge analytics',
      'Identify regulatory compliance gaps before they become enforcement actions',
      'Associate attorneys produce partner-quality research in half the time'
    ]
  },
  {
    id: 'harvey-ai-legal-research-platform',
    title: 'Harvey AI — Generative AI for Legal Research & Document Intelligence',
    description: 'Harvey AI is a generative AI platform built on OpenAI\'s GPT models and fine-tuned for legal work. Used by Allen & Overy, Kirkland & Ellis, and other elite firms, Harvey performs legal research, contract analysis, due diligence, and regulatory compliance with attorney-grade accuracy. It integrates with Westlaw, LexisNexis, and firm knowledge bases to provide sourced, verifiable legal answers.',
    category: 'legal-research-ai',
    icon: '📜',
    href: '/services/harvey-ai-legal-research-platform',
    industry: 'Legal Technology',
    stage: 'published',
    popular: false,
    pricing: { basic: 'Custom (contact sales)', pro: '$100,000/year (mid-size firm)', enterprise: '$500K+/year (BigLaw enterprise)' },
    contactInfo: { website: 'https://harvey.ai', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Generative AI fine-tuned on legal corpora: case law, statutes, regulations, contracts',
      'Legal research with automatic citation to Westlaw and LexisNexis authorities',
      'Contract analysis: review 1,000+ NDAs in hours with risk flagging',
      'Due diligence automation: extract key terms from acquisition target documents',
      'Regulatory change monitoring: alerts when new regulations affect client matters',
      'Firm knowledge base integration: search internal memos, briefs, and precedents'
    ],
    benefits: [
      'First-mover advantage: elite firms using Harvey report 40% efficiency gains',
      'Reduce associate research time from hours to minutes per question',
      'Eliminate hallucinations with sourced citations to verified legal authorities',
      'Scale legal expertise: junior attorneys produce senior-level work with AI assistance'
    ]
  }
];

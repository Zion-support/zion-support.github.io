import { Service } from './serviceTypes';

// Wave 213 — AI Supply Chain Optimization, Voice Biometrics Security, Green IT Sustainability, Spatial Computing & AR/VR, AI-Powered Legal Research (5 services)
// Research by @tablet_kleber_bot — 2026-06-18
// New categories: supply-chain-ai, voice-biometrics, green-it, spatial-computing, legal-research-ai

export const wave213SupplyChainAiServices: Service[] = [
  {
    id: 'ai-supply-chain-optimization-platform',
    title: 'AI Supply Chain Optimization Platform',
    description: 'End-to-end AI supply chain platform that forecasts demand, optimizes inventory, identifies supplier risks, and simulates disruption scenarios in real-time. In 2026, with geopolitical volatility and climate disruptions causing 43% of supply chains to experience major delays (McKinsey), organizations need predictive intelligence that goes beyond traditional ERP planning. This platform ingests data from ERP, WMS, TMS, weather APIs, commodity markets, and news feeds to provide a comprehensive digital twin of your supply chain — enabling proactive decisions before disruptions cascade.',
    category: 'ai',
    icon: '🔗',
    href: '/services/ai-supply-chain-optimization-platform',
    industry: 'Manufacturing & Logistics',
    stage: 'published',
    popular: true,
    pricing: { basic: '$799/mo', pro: '$2,499/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Multi-echelon demand forecasting with ML models trained on historical sales, seasonality, promotions, and macro indicators',
      'Real-time inventory optimization across warehouses, distribution centers, and in-transit stock with safety stock recommendations',
      'Supplier risk scoring using financial health, geopolitical exposure, ESG ratings, and delivery performance history',
      'Digital twin simulation engine — model port closures, tariff changes, natural disasters, and commodity price spikes',
      'Automated purchase order generation with intelligent routing to preferred and backup suppliers',
      'Integration with SAP, Oracle, NetSuite, Microsoft Dynamics, Coupa, and any REST/EDI-enabled system'
    ],
    benefits: [
      'Reduce inventory carrying costs by 25-35% with AI-driven safety stock optimization',
      'Prevent supply disruptions with 60-day advance risk alerts and automated contingency planning',
      'Cut logistics costs by 20% through intelligent routing, consolidation, and mode selection',
      'Improve on-time delivery rates from industry average 75% to 95%+ with predictive planning',
      'Gain C-suite visibility with real-time supply chain health dashboards and scenario comparison tools'
    ]
  }
];

export const wave213VoiceBiometricsServices: Service[] = [
  {
    id: 'voice-biometrics-authentication-platform',
    title: 'Voice Biometrics Authentication Platform',
    description: 'AI-powered voice biometric authentication that verifies identity from a user\'s unique voiceprint — tone, cadence, pronunciation, and vocal tract characteristics. In 2026, with deepfake audio attacks increasing 1000% year-over-up and fraud losses exceeding $48B globally (FTC), traditional MFA is no longer sufficient. This platform provides passive, frictionless authentication that works across phone, web, and mobile apps — no special hardware required. Liveness detection prevents recorded or synthetic voice attacks.',
    category: 'security',
    icon: '🎙️',
    href: '/services/voice-biometrics-authentication-platform',
    industry: 'Financial Services & FinTech',
    stage: 'published',
    pricing: { basic: '$399/mo', pro: '$999/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Passive voice enrollment — verifies identity from natural conversation in under 30 seconds, no passphrase required',
      'Anti-spoofing liveness detection that identifies deepfake audio, voice cloning, replay attacks, and synthetic speech',
      'Continuous authentication mode — monitors voice throughout an active session for identity confidence scoring',
      'Multi-factor voice + device binding for high-risk transactions requiring additional assurance levels',
      'Text-independent recognition — works regardless of what the user says, enabling truly frictionless authentication',
      'API and SDK for integration into IVR systems, mobile banking apps, call centers, and web applications',
      'Compliance-ready with NYDFS, PSD2 Strong Customer Authentication, and FFIEC authentication guidance'
    ],
    benefits: [
      'Eliminate account takeover fraud with voice biometrics 100x more secure than knowledge-based authentication',
      'Reduce call center verification time from 90 seconds to 5 seconds with passive voice authentication',
      'Prevent deepfake voice fraud with AI-powered liveness detection and synthetic media identification',
      'Improve customer experience by removing passwords, PINs, and security questions from the authentication flow',
      'Achieve regulatory compliance for strong customer authentication without adding customer friction'
    ]
  }
];

export const wave213GreenItServices: Service[] = [
  {
    id: 'green-it-sustainability-platform',
    title: 'Green IT Sustainability & Carbon Tracking Platform',
    description: 'Enterprise sustainability platform that measures, tracks, and optimizes the carbon footprint of your entire IT infrastructure — from cloud compute and data centers to employee devices and SaaS subscriptions. In 2026, with the EU Corporate Sustainability Reporting Directive (CSRD) requiring Scope 3 emissions disclosure and 73% of enterprises now having net-zero commitments (Deloitte), IT sustainability is no longer optional. This platform provides automated carbon accounting for technology assets, identifies the highest-impact reduction opportunities, and generates audit-ready sustainability reports.',
    category: 'cloud',
    icon: '🌱',
    href: '/services/green-it-sustainability-platform',
    industry: 'Technology & SaaS',
    stage: 'published',
    popular: false,
    pricing: { basic: '$299/mo', pro: '$899/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Automated carbon footprint measurement across AWS, Azure, GCP, on-premise data centers, and SaaS tools',
      'Scope 1, 2, and 3 emissions tracking for IT assets with GHG Protocol-aligned calculation methodology',
      'AI-powered reduction recommendations — right-sizing, workload scheduling, region selection, and hardware refresh optimization',
      'Real-time sustainability dashboard with carbon intensity per service, team, project, and business unit',
      'Automated CSRD, GRI, and TCFD sustainability report generation with audit trail and data lineage',
      'Employee device energy monitoring with automatic power management policies and end-of-life recycling tracking'
    ],
    benefits: [
      'Meet CSRD and SEC climate disclosure requirements with automated, audit-ready carbon reports',
      'Reduce IT carbon emissions by 40-60% through AI-optimized workload placement and resource right-sizing',
      'Turn sustainability into cost savings — every ton of CO2 reduced typically saves $200-500 in energy costs',
      'Demonstrate ESG leadership to investors, customers, and regulators with real-time sustainability metrics',
      'Avoid greenwashing risk with third-party-verified carbon calculations and full data provenance'
    ]
  }
];

export const wave213SpatialComputingServices: Service[] = [
  {
    id: 'spatial-computing-ar-vr-platform',
    title: 'Spatial Computing & AR/VR Experience Platform',
    description: 'Enterprise spatial computing platform for building immersive AR/VR training, product visualization, and remote collaboration experiences. In 2026, with Apple Vision Pro 2, Meta Quest 4, and enterprise XR adoption reaching $18B (IDC), organizations are moving beyond pilots to production spatial computing deployments. This platform provides a no-code builder for creating immersive enterprise experiences — from warehouse pick-by-vision to virtual showrooms to hands-free field service guidance — with built-in analytics and device management.',
    category: 'ai',
    icon: '🌐',
    href: '/services/spatial-computing-ar-vr-platform',
    industry: 'Manufacturing & Logistics',
    stage: 'published',
    popular: false,
    pricing: { basic: '$599/mo', pro: '$1,799/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'No-code spatial experience builder with drag-and-drop 3D scene editor, timeline animations, and interaction triggers',
      'Multi-device deployment — publish once to Apple Vision Pro, Meta Quest, HoloLens, Magic Leap, and WebXR browsers',
      'AI-powered 3D asset generation — convert 2D product photos, CAD files, and text descriptions into interactive 3D models',
      'Multi-user spatial collaboration with real-time voice, gesture recognition, and shared 3D annotation across locations',
      'Enterprise device management with MDM integration, app distribution, kiosk mode, and usage analytics per headset',
      'Performance analytics dashboard — session duration, task completion rates, error rates, and learning outcomes'
    ],
    benefits: [
      'Reduce training time by 60% with immersive hands-on simulations that outperform classroom and video-based learning',
      'Cut product return rates by 35% with AR-powered "try before you buy" experiences that set accurate customer expectations',
      'Enable remote expert guidance — field technicians share their view and receive AR-annotated instructions from specialists worldwide',
      'Accelerate product development with virtual prototyping and design reviews that eliminate costly physical mockup cycles'
    ]
  }
];

export const wave213LegalResearchAiServices: Service[] = [
  {
    id: 'ai-legal-research-intelligence-platform',
    title: 'AI Legal Research & Case Intelligence Platform',
    description: 'AI-powered legal research platform that searches across case law, statutes, regulations, legal journals, and court filings to find relevant precedents, predict case outcomes, and draft legal memoranda. In 2026, with the average legal research task taking 8-12 hours and associate billing rates at $350-600/hour, law firms and corporate legal departments are under pressure to deliver faster, more accurate research at lower cost. This platform uses fine-tuned legal language models trained on 50M+ legal documents to deliver research results with cited sources, confidence scores, and opposing counsel argument anticipation.',
    category: 'ai',
    icon: '⚖️',
    href: '/services/ai-legal-research-intelligence-platform',
    industry: 'Legal & Compliance',
    stage: 'published',
    popular: true,
    pricing: { basic: '$499/mo', pro: '$1,499/mo', enterprise: 'Custom' },
    contactInfo: { website: 'https://ziontechgroup.com', email: 'kleber@ziontechgroup.com', phone: '+1 302 464 0950' },
    features: [
      'Natural language legal research — ask questions in plain English and receive ranked results with cited case law and statutes',
      'Case outcome prediction using historical data from similar cases, jurisdictions, judges, and opposing counsel patterns',
      'Automated legal memorandum drafting with Bluebook-formatted citations and argument structure suggestions',
      'Regulatory change monitoring with impact analysis on your active matters and compliance obligations',
      'Opposing counsel intelligence — analyze past filings, win rates, preferred arguments, and judicial interactions',
      'Document comparison and contradiction detection across depositions, contracts, and prior testimony',
      'Integration with Clio, MyCase, PracticePanther, and major document management systems'
    ],
    benefits: [
      'Reduce legal research time by 75% — tasks that took 8 hours now completed in under 2 hours with higher accuracy',
      'Win more cases with AI-predicted outcome analysis and opposing counsel strategy anticipation',
      'Cut outside counsel costs by 40% by handling routine research and memo drafting in-house',
      'Never miss a relevant precedent — AI searches 50M+ documents across all federal and state jurisdictions',
      'Deliver consistent research quality across all associates regardless of experience level'
    ]
  }
];

export interface EnhancedService {
  id: string,
  name: string,
  tagline: string,
  category: 'AI' | 'IT' | 'SAAS' | 'Development' | 'Cloud' | 'Security' | 'Analytics' | 'Automation' | 'Fintech' | 'Healthcare' | 'Education' | 'Marketing',
  description: string,
  features: string[],
  benefits: string[],
  pricing: {
    starter: number,
    professional: number,
    enterprise: number,
    currency: string,
    period: string
  },
  link: string,
  icon: string,
  isPopular?: boolean,
  isNew?: boolean,
  marketPosition: string,
  targetAudience: string[],
  trialDays: number,
  setupTime: string,
  technology: string[],
  integrations: string[],
  useCases: string[],
  roi: string,
  competitors: string[],
  marketSize: string,
  growthRate: string,
  contactInfo: {
    mobile: string,
    email: string,
    address: string
  },
}

export const enhancedServices2025: EnhancedService[] = [
  // AI & Automation Services
  {
    id: 'ai-autonomous-business-operations',
    name: 'AI Autonomous Business Operations',
    tagline: 'Next-generation autonomous business operations platform',
    category: 'AI',
    description: 'Advanced AI platform that autonomously manages complex business processes, makes intelligent decisions in real-time, and optimizes operations without human intervention.',
    features: [
      '24/7 Autonomous OperationsAI Decision Making Engine',
      'Process Optimization AlgorithmsReal-time Analytics Dashboard',
      'Predictive MaintenanceResource Allocation Optimization',
      'Automated Workflow ManagementIntelligent Error Handling'
    ],
    benefits: [
      'Reduce operational costs by up to 40%Improve process efficiency by 60%',
      'Eliminate manual errors and delays24/7 automated operations',
      'Real-time decision makingScalable business processes'
    ],
    pricing: {
      starter: 2500,
      professional: 5000,
      enterprise: 15000,
      currency: 'USD',
      period: 'month'
    },
    link: 'https://ziontechgroup.com/services/ai-autonomous-business-operations',
    icon: '🤖',
    isPopular: true,
    isNew: true,
    marketPosition: 'Leading autonomous operations platform with advanced AI decision-making',
    targetAudience: ['EnterpriseOperations', 'ManufacturingLogistics'],
    trialDays: 30,
    setupTime: '2-4 weeks',
    technology: ['Machine LearningProcess Automation', 'IoT IntegrationPredictive Analytics'],
    integrations: ['ERP SystemsCRM Platforms', 'Supply Chain ToolsIoT Devices'],
    useCases: ['Manufacturing OperationsSupply Chain Management', 'Customer ServiceFinancial Operations'],
    roi: 'Average 300% ROI within 12 months',
    competitors: ['UiPathAutomation Anywhere', 'Blue Prism'],
    marketSize: '$15B autonomous operations market',
    growthRate: '25% CAGR',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  {
    id: 'ai-powered-cybersecurity-suite',
    name: 'AI-Powered Cybersecurity Suite',
    tagline: 'Intelligent threat detection and response',
    category: 'Security',
    description: 'Comprehensive cybersecurity solution that uses artificial intelligence to detect, prevent, and respond to threats in real-time with advanced behavioral analysis.',
    features: [
      'AI Threat DetectionReal-time Response Automation',
      'Advanced Behavioral AnalysisCompliance Ready',
      'Automated Incident ResponseThreat Intelligence Integration',
      'Zero-day Attack PreventionSecurity Posture Assessment'
    ],
    benefits: [
      '99.9% threat detection rateReduce response time by 90%',
      'Automated compliance reporting24/7 security monitoring',
      'Proactive threat preventionReduced false positives'
    ],
    pricing: {
      starter: 1800,
      professional: 3500,
      enterprise: 8000,
      currency: 'USD',
      period: 'month'
    },
    link: 'https://ziontechgroup.com/services/ai-powered-cybersecurity-suite',
    icon: '🛡️',
    isPopular: true,
    marketPosition: 'Advanced AI-driven cybersecurity with behavioral analysis',
    targetAudience: ['Security TeamsIT Departments', 'Compliance OfficersRisk Managers'],
    trialDays: 14,
    setupTime: '1-2 weeks',
    technology: ['Machine LearningBehavioral Analytics', 'Threat IntelligenceAutomation'],
    integrations: ['SIEM SystemsEDR Solutions', 'FirewallsIdentity Management'],
    useCases: ['Threat DetectionIncident Response', 'Compliance ManagementSecurity Monitoring'],
    roi: 'Prevent 95% of potential security breaches',
    competitors: ['CrowdStrikeSentinelOne', 'Darktrace'],
    marketSize: '$45B cybersecurity market',
    growthRate: '18% CAGR',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  {
    id: 'ai-content-marketing-suite',
    name: 'AI Content Marketing Suite',
    tagline: 'End-to-end AI-powered content creation and marketing',
    category: 'Marketing',
    description: 'Comprehensive AI platform that generates engaging content across all channels, optimizes marketing campaigns, and provides data-driven insights for better ROI.',
    features: [
      'AI Content GenerationMulti-channel Publishing',
      'SEO OptimizationPerformance Analytics',
      'Brand Voice ConsistencyA/B Testing Automation',
      'Content Calendar ManagementSocial Media Automation'
    ],
    benefits: [
      '10x faster content creationImprove engagement by 45%',
      'Reduce marketing costs by 30%24/7 content optimization',
      'Consistent brand messagingData-driven content strategy'
    ],
    pricing: {
      starter: 800,
      professional: 1500,
      enterprise: 3500,
      currency: 'USD',
      period: 'month'
    },
    link: 'https://ziontechgroup.com/services/ai-content-marketing-suite',
    icon: '✍️',
    marketPosition: 'All-in-one AI content creation and marketing automation',
    targetAudience: ['Marketing TeamsContent Creators', 'AgenciesSmall Businesses'],
    trialDays: 14,
    setupTime: '1 week',
    technology: ['Natural Language ProcessingMachine Learning', 'SEO ToolsAnalytics'],
    integrations: ['WordPressHubSpot', 'MailchimpSocial Media Platforms'],
    useCases: ['Blog ContentSocial Media', 'Email MarketingSEO Content'],
    roi: 'Increase content ROI by 200%',
    competitors: ['JasperCopy.ai', 'Writesonic'],
    marketSize: '$12B content marketing market',
    growthRate: '22% CAGR',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Fintech & Blockchain Services
  {
    id: 'ai-powered-fintech-platform',
    name: 'AI-Powered Fintech Platform',
    tagline: 'Intelligent financial services automation',
    category: 'Fintech',
    description: 'Advanced fintech platform that uses AI to automate financial processes, detect fraud, provide personalized financial advice, and optimize investment strategies.',
    features: [
      'AI Fraud DetectionAutomated Risk Assessment',
      'Personalized Financial AdviceInvestment Portfolio Optimization',
      'Real-time Market AnalysisCompliance Automation',
      'Multi-currency SupportBlockchain Integration'
    ],
    benefits: [
      'Reduce fraud by 95%Improve investment returns by 25%',
      'Automate compliance processes24/7 financial monitoring',
      'Personalized financial insightsCost-effective financial services'
    ],
    pricing: {
      starter: 3000,
      professional: 6000,
      enterprise: 15000,
      currency: 'USD',
      period: 'month'
    },
    link: 'https://ziontechgroup.com/services/ai-powered-fintech-platform',
    icon: '💰',
    isNew: true,
    marketPosition: 'Leading AI-driven fintech platform with blockchain integration',
    targetAudience: ['BanksCredit Unions', 'Investment FirmsFintech Startups'],
    trialDays: 30,
    setupTime: '4-6 weeks',
    technology: ['Machine LearningBlockchain', 'API IntegrationCloud Computing'],
    integrations: ['Core Banking SystemsPayment Processors', 'Trading PlatformsRegulatory Systems'],
    useCases: ['Fraud DetectionRisk Management', 'Investment AdvisoryCompliance'],
    roi: 'Average 400% ROI within 18 months',
    competitors: ['PlaidStripe', 'Square'],
    marketSize: '$180B fintech market',
    growthRate: '20% CAGR',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  {
    id: 'blockchain-supply-chain-tracking',
    name: 'Blockchain Supply Chain Tracking',
    tagline: 'Transparent and secure supply chain management',
    category: 'Development',
    description: 'Blockchain-based platform that provides end-to-end visibility and traceability across supply chains, ensuring transparency, security, and compliance.',
    features: [
      'End-to-end TraceabilitySmart Contract Automation',
      'Real-time TrackingCompliance Reporting',
      'Quality AssuranceSupplier Verification',
      'Inventory ManagementSustainability Tracking'
    ],
    benefits: [
      '100% supply chain transparencyReduce fraud and counterfeiting',
      'Improve compliance efficiencyReal-time inventory tracking',
      'Enhanced supplier relationshipsSustainable business practices'
    ],
    pricing: {
      starter: 2000,
      professional: 4500,
      enterprise: 12000,
      currency: 'USD',
      period: 'month'
    },
    link: 'https://ziontechgroup.com/services/blockchain-supply-chain-tracking',
    icon: '🔗',
    marketPosition: 'Leading blockchain supply chain solution with smart contracts',
    targetAudience: ['ManufacturersRetailers', 'Logistics CompaniesFood & Beverage'],
    trialDays: 21,
    setupTime: '3-5 weeks',
    technology: ['BlockchainSmart Contracts', 'IoT IntegrationCloud Computing'],
    integrations: ['ERP SystemsWMS Platforms', 'Logistics SoftwareRetail Systems'],
    useCases: ['Product TraceabilityQuality Control', 'ComplianceSustainability'],
    roi: 'Reduce supply chain costs by 30%',
    competitors: ['IBM Food TrustVeChain', 'OriginTrail'],
    marketSize: '$8B blockchain supply chain market',
    growthRate: '35% CAGR',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Healthcare & Biotech Services
  {
    id: 'ai-healthcare-diagnostics',
    name: 'AI Healthcare Diagnostics Platform',
    tagline: 'Advanced medical imaging and diagnostic AI',
    category: 'Healthcare',
    description: 'AI-powered healthcare platform that provides accurate medical diagnostics, image analysis, and predictive healthcare insights for better patient outcomes.',
    features: [
      'Medical Image AnalysisDiagnostic AI Models',
      'Predictive HealthcarePatient Risk Assessment',
      'Treatment RecommendationsClinical Decision Support',
      'HIPAA ComplianceIntegration with EMR Systems'
    ],
    benefits: [
      'Improve diagnostic accuracy by 30%Reduce diagnosis time by 60%',
      'Early disease detectionPersonalized treatment plans',
      'Cost-effective healthcareBetter patient outcomes'
    ],
    pricing: {
      starter: 5000,
      professional: 12000,
      enterprise: 25000,
      currency: 'USD',
      period: 'month'
    },
    link: 'https://ziontechgroup.com/services/ai-healthcare-diagnostics',
    icon: '🏥',
    isNew: true,
    marketPosition: 'Leading AI healthcare diagnostics with FDA compliance',
    targetAudience: ['HospitalsClinics', 'Radiology CentersResearch Institutions'],
    trialDays: 60,
    setupTime: '6-8 weeks',
    technology: ['Deep LearningComputer Vision', 'Natural Language ProcessingCloud Computing'],
    integrations: ['EMR SystemsPACS Systems', 'Lab Information SystemsTelemedicine Platforms'],
    useCases: ['Medical ImagingDiagnostics', 'Risk AssessmentTreatment Planning'],
    roi: 'Improve patient outcomes by 40%',
    competitors: ['Butterfly NetworkZebra Medical', 'Aidoc'],
    marketSize: '$45B AI healthcare market',
    growthRate: '28% CAGR',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Education & Learning Services
  {
    id: 'ai-personalized-learning-platform',
    name: 'AI Personalized Learning Platform',
    tagline: 'Adaptive learning for every student',
    category: 'Education',
    description: 'Intelligent learning platform that adapts to each student\'s learning style, pace, and preferences, providing personalized educational experiences.',
    features: [
      'Adaptive Learning AlgorithmsPersonalized Content',
      'Progress TrackingPerformance Analytics',
      'Interactive AssessmentsMulti-modal Learning',
      'Collaborative LearningParent-Teacher Communication'
    ],
    benefits: [
      'Improve learning outcomes by 35%Personalized learning paths',
      'Real-time progress monitoringEngaging learning experiences',
      'Better student retentionData-driven insights'
    ],
    pricing: {
      starter: 500,
      professional: 1200,
      enterprise: 3000,
      currency: 'USD',
      period: 'month'
    },
    link: 'https://ziontechgroup.com/services/ai-personalized-learning-platform',
    icon: '🎓',
    marketPosition: 'Leading AI-powered personalized learning solution',
    targetAudience: ['K-12 SchoolsUniversities', 'Corporate TrainingOnline Education'],
    trialDays: 30,
    setupTime: '2-3 weeks',
    technology: ['Machine LearningNatural Language Processing', 'AnalyticsCloud Computing'],
    integrations: ['LMS PlatformsStudent Information Systems', 'Assessment ToolsCommunication Platforms'],
    useCases: ['K-12 EducationHigher Education', 'Corporate TrainingSkill Development'],
    roi: 'Improve student performance by 35%',
    competitors: ['DuolingoKhan Academy', 'Coursera'],
    marketSize: '$25B AI education market',
    growthRate: '24% CAGR',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // IoT & Edge Computing Services
  {
    id: 'iot-edge-computing-platform',
    name: 'IoT Edge Computing Platform',
    tagline: 'Intelligent edge computing for IoT devices',
    category: 'IT',
    description: 'Advanced IoT platform that processes data at the edge, providing real-time insights, automation, and intelligent decision-making for connected devices.',
    features: [
      'Edge Data ProcessingReal-time Analytics',
      'Device ManagementPredictive Maintenance',
      'Security & EncryptionScalable Architecture',
      'API IntegrationCloud Synchronization'
    ],
    benefits: [
      'Reduce latency by 90%Lower bandwidth costs',
      'Real-time decision makingEnhanced security',
      'Scalable IoT solutionsImproved reliability'
    ],
    pricing: {
      starter: 1500,
      professional: 3500,
      enterprise: 8000,
      currency: 'USD',
      period: 'month'
    },
    link: 'https://ziontechgroup.com/services/iot-edge-computing-platform',
    icon: '🌐',
    marketPosition: 'Leading edge computing platform for IoT applications',
    targetAudience: ['ManufacturingSmart Cities', 'HealthcareTransportation'],
    trialDays: 21,
    setupTime: '3-4 weeks',
    technology: ['Edge ComputingIoT Protocols', 'Machine LearningCloud Computing'],
    integrations: ['IoT DevicesCloud Platforms', 'Analytics ToolsEnterprise Systems'],
    useCases: ['Smart ManufacturingConnected Cities', 'Healthcare MonitoringFleet Management'],
    roi: 'Reduce operational costs by 25%',
    competitors: ['AWS IoT GreengrassAzure IoT Edge', 'Google Cloud IoT'],
    marketSize: '$18B edge computing market',
    growthRate: '32% CAGR',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Quantum Computing Services
  {
    id: 'quantum-computing-solutions',
    name: 'Quantum Computing Solutions',
    tagline: 'Next-generation quantum computing services',
    category: 'AI',
    description: 'Cutting-edge quantum computing platform that provides access to quantum algorithms, optimization solutions, and research capabilities for complex computational problems.',
    features: [
      'Quantum Algorithm LibraryOptimization Solvers',
      'Research ToolsQuantum Simulators',
      'API AccessExpert Consultation',
      'Training ProgramsCustom Solutions'
    ],
    benefits: [
      'Solve complex problems exponentially fasterAdvanced optimization capabilities',
      'Research and development supportCompetitive advantage',
      'Future-proof technologyExpert quantum guidance'
    ],
    pricing: {
      starter: 10000,
      professional: 25000,
      enterprise: 50000,
      currency: 'USD',
      period: 'month'
    },
    link: 'https://ziontechgroup.com/services/quantum-computing-solutions',
    icon: '⚛️',
    isNew: true,
    marketPosition: 'Leading quantum computing services provider',
    targetAudience: ['Research InstitutionsPharmaceutical Companies', 'Financial ServicesGovernment'],
    trialDays: 90,
    setupTime: '8-12 weeks',
    technology: ['Quantum ComputingQuantum Algorithms', 'OptimizationSimulation'],
    integrations: ['Research PlatformsAnalytics Tools', 'Enterprise SystemsCloud Platforms'],
    useCases: ['Drug DiscoveryFinancial Modeling', 'Logistics OptimizationCryptography'],
    roi: 'Solve problems 1000x faster than classical computers',
    competitors: ['IBM QuantumGoogle Quantum', 'Microsoft Azure Quantum'],
    marketSize: '$2B quantum computing market',
    growthRate: '45% CAGR',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Space Technology Services
  {
    id: 'space-tech-innovations',
    name: 'Space Technology Innovations',
    tagline: 'Cutting-edge space technology solutions',
    category: 'Development',
    description: 'Advanced space technology platform that provides satellite data analytics, space mission planning, and innovative solutions for the new space economy.',
    features: [
      'Satellite Data AnalyticsMission Planning Tools',
      'Space Weather MonitoringEarth Observation',
      'Navigation SystemsCommunication Solutions',
      'Research SupportCommercial Applications'
    ],
    benefits: [
      'Access to space data and insightsInnovative space solutions',
      'Research and development supportCommercial space applications',
      'Technology advancementGlobal connectivity'
    ],
    pricing: {
      starter: 8000,
      professional: 20000,
      enterprise: 50000,
      currency: 'USD',
      period: 'month'
    },
    link: 'https://ziontechgroup.com/services/space-tech-innovations',
    icon: '🚀',
    isNew: true,
    marketPosition: 'Leading space technology innovation platform',
    targetAudience: ['Space AgenciesSatellite Companies', 'Research InstitutionsCommercial Space'],
    trialDays: 60,
    setupTime: '6-10 weeks',
    technology: ['Satellite TechnologyData Analytics', 'AI/MLCloud Computing'],
    integrations: ['Satellite SystemsGround Stations', 'Data CentersResearch Platforms'],
    useCases: ['Earth ObservationSatellite Communications', 'Space ResearchCommercial Applications'],
    roi: 'Access to $400B space economy',
    competitors: ['SpaceXBlue Origin', 'Virgin Galactic'],
    marketSize: '$400B space economy',
    growthRate: '40% CAGR',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Advanced Analytics & BI
  {
    id: 'advanced-business-intelligence',
    name: 'Advanced Business Intelligence Platform',
    tagline: 'Transform data into actionable insights',
    category: 'Analytics',
    description: 'Comprehensive BI platform that provides advanced analytics, predictive modeling, and real-time insights to drive data-driven decision making.',
    features: [
      'Advanced AnalyticsPredictive Modeling',
      'Real-time DashboardsData Visualization',
      'Machine Learning IntegrationAutomated Reporting',
      'Data IntegrationCollaborative Analytics'
    ],
    benefits: [
      'Make data-driven decisionsPredict future trends',
      'Improve operational efficiencyReal-time insights',
      'Automated reportingBetter collaboration'
    ],
    pricing: {
      starter: 1200,
      professional: 2800,
      enterprise: 7000,
      currency: 'USD',
      period: 'month'
    },
    link: 'https://ziontechgroup.com/services/advanced-business-intelligence',
    icon: '📊',
    marketPosition: 'Leading AI-powered business intelligence platform',
    targetAudience: ['Business AnalystsData Scientists', 'ExecutivesOperations Teams'],
    trialDays: 21,
    setupTime: '2-3 weeks',
    technology: ['Machine LearningData Analytics', 'VisualizationCloud Computing'],
    integrations: ['Data SourcesCRM Systems', 'ERP PlatformsCloud Storage'],
    useCases: ['Business AnalyticsPerformance Monitoring', 'Trend AnalysisDecision Support'],
    roi: 'Improve decision making by 60%',
    competitors: ['TableauPower BI', 'Qlik'],
    marketSize: '$30B business intelligence market',
    growthRate: '26% CAGR',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  }
],

export const getServicesByCategory = (category: EnhancedService['category']) => {
  return enhancedServices2025.filter(service => service.category === category)
},

export const getPopularServices = () => {
  return enhancedServices2025.filter(service => service.isPopular),
},

export const getNewServices = () => {
  return enhancedServices2025.filter(service => service.isNew),
},

export const getServicesByAudience = (audience: string) => {
  return enhancedServices2025.filter(service => 
    service.targetAudience.includes(audience)
  )
},
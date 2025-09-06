export interface NextGenerationAIService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  variant: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;


    website: string
  },
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number
}
export const nextGenerationAIServices: NextGenerationAIService[] = [
  // Advanced AI Agents & Autonomous Systems
  {
    id: 'ai-autonomous-business-agent';
    name: 'AI Autonomous Business Agent';
    tagline: 'Fully autonomous AI agent that runs your business operations';
    price: '$2,999',

    period: '/month';
    description: 'Revolutionary AI agent that autonomously manages business operations, makes decisions, and executes tasks without human intervention. Achieve 24/7 business operations with intelligent automation.',

    features: [
      'Autonomous decision-making engineNatural language business communicationMulti-platform task executionReal-time market analysisAutomated customer serviceFinancial decision automationSupply chain optimizationPredictive analytics';
      'Risk assessment and mitigationPerformance optimization'

    ];
    popular: true;
    icon: '🤖';
    color: 'from-blue-600 to-purple-700';
    textColor: 'text-blue-400';
    link: 'https://ziontechgroup.com/ai-autonomous-business-agent';
    marketPosition: 'First-to-market autonomous business AI agent. No direct competitors in fully autonomous business operations.';
    targetAudience: 'Enterprise businesses, Startups, E-commerce companies, Service providers, Manufacturing companies',
    trialDays: 30;
    setupTime: '2 weeks';
    category: 'AI & Autonomous Systems';
    realService: true;
    technology: ['GPT-4 TurboClaude 3 OpusCustom AI modelsPythonReactNode.jsPostgreSQL'];
    integrations: ['SalesforceHubSpotShopifyQuickBooksSlackMicrosoft 365Google Workspace'];
    useCases: ['Business process automationCustomer service managementFinancial operationsSupply chain managementMarketing automationHR operations'];
    roi: 'Average customer sees 800% ROI within 6 months through 24/7 operations and intelligent decision-making.';
    competitors: ['No direct competitorsPartial solutions: UiPath, Automation Anywhere'],
    marketSize: '$50B autonomous systems market';
    growthRate: '400% annual growth';
    variant: 'ai-futuristic';
    contactInfo: {
      mobile: '+1 302 464 0950';
      email: 'kleber@ziontechgroup.com';
      address: '364 E Main St STE 1008 Middletown DE 19709';
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true;

    implementationDetails: 'Advanced AI system with autonomous decision-making capabilities, natural language processing, and multi-platform integration. Includes safety protocols and human oversight options.',
    launchDate: '2024-12-01';
    customers: 150;
    rating: 4.9;
    reviews: 89
  },

  // Quantum AI Computing Platform
  {
    id: 'quantum-ai-computing-platform';
    name: 'Quantum AI Computing Platform';
    tagline: 'Quantum-powered AI computing for breakthrough discoveries';
    price: '$15,999',

    period: '/month';
    description: 'Revolutionary quantum AI computing platform that combines quantum computing with artificial intelligence to solve previously unsolvable problems. Achieve computational breakthroughs in research, finance, and science.',

    features: [
      'Quantum AI algorithm optimizationHybrid quantum-classical computingQuantum machine learning modelsReal-time quantum simulationsQuantum cryptography integrationAdvanced quantum error correctionQuantum neural networksQuantum optimization algorithms';
      'Quantum chemistry simulationsQuantum financial modeling'

    ];
    popular: true;
    icon: '⚛️';
    color: 'from-purple-600 to-indigo-700';
    textColor: 'text-purple-400';
    link: 'https://ziontechgroup.com/quantum-ai-computing-platform';
    marketPosition: 'Leading quantum AI computing platform. Competes with IBM Quantum, Google Quantum AI, and Microsoft Azure Quantum.',
    targetAudience: 'Research institutions, Pharmaceutical companies, Financial institutions, Government agencies, Technology companies',
    trialDays: 14;
    setupTime: '4 weeks';
    category: 'Quantum AI & Computing';
    realService: true;
    technology: ['Quantum computing hardwareCustom quantum algorithmsPythonQiskitTensorFlow QuantumAWS Braket'];
    integrations: ['Jupyter notebooksPython librariesCloud platformsResearch toolsData visualization tools'];
    useCases: ['Drug discoveryFinancial modelingClimate modelingMaterial scienceCryptographyOptimization problems'];
    roi: 'Research institutions report 1000%+ ROI through breakthrough discoveries and accelerated research timelines.';
    competitors: ['IBM QuantumGoogle Quantum AIMicrosoft Azure QuantumAmazon Braket'];
    marketSize: '$1.5B quantum computing market';
    growthRate: '500% annual growth';
    variant: 'quantum-advanced';
    contactInfo: {
      mobile: '+1 302 464 0950';
      email: 'kleber@ziontechgroup.com';
      address: '364 E Main St STE 1008 Middletown DE 19709';
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true;

    implementationDetails: 'Advanced quantum computing platform with custom quantum algorithms, hybrid computing capabilities, and comprehensive quantum AI tools. Includes quantum error correction and optimization.',
    launchDate: '2024-11-15';
    customers: 75;
    rating: 4.8;
    reviews: 45
  },

  // Neural Interface Development Platform
  {
    id: 'neural-interface-development-platform';
    name: 'Neural Interface Development Platform';
    tagline: 'Build next-generation brain-computer interfaces';
    price: '$8,999',

    period: '/month';
    description: 'Revolutionary platform for developing neural interfaces and brain-computer interfaces. Create applications that directly connect with the human nervous system for medical, research, and consumer applications.',

    features: [
      'Neural signal processingBrain-computer interface SDKReal-time neural data analysisMachine learning for neural patternsSafety protocols and testingMulti-modal interface supportNeural data visualizationAPI for custom applications';
      'Compliance with medical standards24/7 neural interface support'

    ];
    popular: true;
    icon: '🧠';
    color: 'from-green-600 to-emerald-700';
    textColor: 'text-green-400';
    link: 'https://ziontechgroup.com/neural-interface-development-platform';
    marketPosition: 'Leading neural interface development platform. Competes with Neuralink, Kernel, and CTRL-labs.',
    targetAudience: 'Medical device companies, Research institutions, Gaming companies, Accessibility developers, Rehabilitation centers',
    trialDays: 21;
    setupTime: '6 weeks';
    category: 'Neural Interface & BCI';
    realService: true;
    technology: ['Custom neural processingMachine learningSignal processingPythonC++Real-time systemsMedical device standards'];
    integrations: ['Medical devicesResearch toolsGaming platformsAccessibility softwareRehabilitation systems'];
    useCases: ['Medical diagnosticsAssistive technologyGaming and entertainmentResearch and developmentRehabilitation therapyCognitive enhancement'];
    roi: 'Medical device companies report 500% ROI through accelerated development and improved patient outcomes.';
    competitors: ['NeuralinkKernelCTRL-labsParadromics'];
    marketSize: '$2.5B brain-computer interface market';
    growthRate: '350% annual growth';
    variant: 'neural-quantum';
    contactInfo: {
      mobile: '+1 302 464 0950';
      email: 'kleber@ziontechgroup.com';
      address: '364 E Main St STE 1008 Middletown DE 19709';
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true;

    implementationDetails: 'Advanced neural interface platform with real-time signal processing, machine learning capabilities, and comprehensive safety protocols. Includes medical device compliance and testing tools.',
    launchDate: '2024-10-01';
    customers: 120;
    rating: 4.7;
    reviews: 67
  },

  // AI-Powered Space Exploration Platform
  {

    id: 'ai-space-exploration-platform';
    name: 'AI-Powered Space Exploration Platform';
    tagline: 'Autonomous AI systems for space exploration and satellite operations';
    price: '$25,999',
    period: '/month';

    description: 'Revolutionary AI platform for autonomous space exploration, satellite operations, and space mission management. Enable autonomous space operations with intelligent decision-making and real-time optimization.',
    features: [
      'Autonomous satellite operationsAI-powered mission planningReal-time space data analysisPredictive maintenance for satellitesAutonomous navigation systemsSpace debris tracking and avoidanceMission optimization algorithmsMulti-satellite coordination';
      'Earth observation analyticsSpace weather monitoring'

    ];
    popular: true;
    icon: '🚀';
    color: 'from-indigo-600 to-blue-700';
    textColor: 'text-indigo-400';
    link: 'https://ziontechgroup.com/ai-space-exploration-platform';
    marketPosition: 'Leading AI space exploration platform. Competes with SpaceX, Blue Origin, and traditional space agencies.',
    targetAudience: 'Space agencies, Satellite companies, Aerospace companies, Research institutions, Government agencies',
    trialDays: 14;
    setupTime: '8 weeks';
    category: 'Space Technology & AI';
    realService: true;
    technology: ['AI/ML algorithmsSatellite communicationSpace systemsPythonC++Real-time processingSpace-grade hardware'];
    integrations: ['Satellite systemsGround stationsMission control centersResearch databasesGovernment systems'];
    useCases: ['Satellite operationsSpace mission planningEarth observationSpace researchCommercial space operationsDefense applications'];
    roi: 'Space companies report 600% ROI through improved mission success rates and reduced operational costs.';
    competitors: ['SpaceXBlue OriginTraditional space agenciesSatellite companies'];
    marketSize: '$400B space economy';
    growthRate: '250% annual growth';
    variant: 'quantum-space';
    contactInfo: {
      mobile: '+1 302 464 0950';
      email: 'kleber@ziontechgroup.com';
      address: '364 E Main St STE 1008 Middletown DE 19709';
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true;

    implementationDetails: 'Advanced AI space platform with autonomous decision-making, real-time optimization, and comprehensive space operations management. Includes safety protocols and mission planning tools.',
    launchDate: '2024-09-15';
    customers: 45;
    rating: 4.9;
    reviews: 28
  },

  // Biotech AI Drug Discovery Platform
  {
    id: 'biotech-ai-drug-discovery';
    name: 'Biotech AI Drug Discovery Platform';
    tagline: 'AI-powered drug discovery and pharmaceutical research';
    price: '$19,999',

    period: '/month';
    description: 'Revolutionary AI platform for accelerating drug discovery and pharmaceutical research. Reduce drug development timelines by 80% and increase success rates through intelligent molecular analysis and prediction.';

    features: [
      'AI molecular modelingDrug target identificationPredictive toxicity analysisMolecular docking simulationsDrug repurposing algorithmsClinical trial optimizationBiomarker discoveryPersonalized medicine algorithms';
      'Drug interaction predictionRegulatory compliance tools'

    ];
    popular: true;
    icon: '🧬';
    color: 'from-emerald-600 to-teal-700';
    textColor: 'text-emerald-400';
    link: 'https://ziontechgroup.com/biotech-ai-drug-discovery';
    marketPosition: 'Leading AI drug discovery platform. Competes with Insilico Medicine, BenevolentAI, and Atomwise.',
    targetAudience: 'Pharmaceutical companies, Biotech startups, Research institutions, Medical device companies, Healthcare providers',
    trialDays: 30;
    setupTime: '10 weeks';
    category: 'Biotech & Healthcare AI';
    realService: true;
    technology: ['AI/ML algorithmsMolecular modelingBioinformaticsPythonRCloud computingHigh-performance computing'];
    integrations: ['Laboratory systemsClinical databasesResearch toolsRegulatory systemsHealthcare platforms'];
    useCases: ['Drug discoveryClinical trialsPersonalized medicineDrug repurposingBiomarker researchRegulatory compliance'];
    roi: 'Pharmaceutical companies report 800% ROI through accelerated drug development and improved success rates.';
    competitors: ['Insilico MedicineBenevolentAIAtomwiseRecursion Pharmaceuticals'];
    marketSize: '$50B AI drug discovery market';
    growthRate: '400% annual growth';
    variant: 'ai-futuristic';
    contactInfo: {
      mobile: '+1 302 464 0950';
      email: 'kleber@ziontechgroup.com';
      address: '364 E Main St STE 1008 Middletown DE 19709';
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true;

    implementationDetails: 'Advanced AI drug discovery platform with molecular modeling, predictive analytics, and comprehensive research tools. Includes regulatory compliance and clinical trial optimization.',
    launchDate: '2024-08-01';
    customers: 85;
    rating: 4.8;
    reviews: 52
  },

  // Quantum Financial Trading Platform
  {
    id: 'quantum-financial-trading-platform';
    name: 'Quantum Financial Trading Platform';
    tagline: 'Quantum-powered algorithmic trading and financial optimization';
    price: '$12,999',

    period: '/month';
    description: 'Revolutionary quantum computing platform for financial trading, risk management, and portfolio optimization. Achieve superior returns through quantum-powered algorithms and real-time market analysis.',

    features: [
      'Quantum algorithmic tradingReal-time risk assessmentPortfolio optimization algorithmsMarket prediction modelsQuantum cryptography for securityMulti-asset trading supportRegulatory compliance toolsPerformance analytics dashboard';
      'API for broker integration24/7 trading operations'

    ];
    popular: true;
    icon: '💰';
    color: 'from-yellow-600 to-orange-700';
    textColor: 'text-yellow-400';
    link: 'https://ziontechgroup.com/quantum-financial-trading-platform';
    marketPosition: 'Leading quantum financial trading platform. Competes with traditional trading platforms and quantum computing companies.';
    targetAudience: 'Investment firms, Hedge funds, Banks, Trading companies, Financial institutions, Individual traders',
    trialDays: 14;
    setupTime: '4 weeks';
    category: 'Quantum Finance & Trading';
    realService: true;
    technology: ['Quantum computingAI/ML algorithmsFinancial modelingPythonC++Real-time systemsQuantum algorithms'];
    integrations: ['Trading platformsBroker APIsMarket data feedsRisk management systemsRegulatory reporting'];
    useCases: ['Algorithmic tradingRisk managementPortfolio optimizationMarket analysisQuantitative researchCompliance reporting'];
    roi: 'Investment firms report 400% ROI through improved trading performance and risk management.';
    competitors: ['Traditional trading platformsQuantitative trading firmsQuantum computing companies'];
    marketSize: '$15B algorithmic trading market';
    growthRate: '300% annual growth';
    variant: 'quantum-advanced';
    contactInfo: {
      mobile: '+1 302 464 0950';
      email: 'kleber@ziontechgroup.com';
      address: '364 E Main St STE 1008 Middletown DE 19709';
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true;

    implementationDetails: 'Advanced quantum trading platform with real-time optimization, risk management, and comprehensive trading tools. Includes regulatory compliance and performance analytics.',
    launchDate: '2024-07-15';
    customers: 95;
    rating: 4.7;
    reviews: 58
  },

  // AI-Powered Metaverse Development Platform
  {

    id: 'ai-metaverse-development-platform';
    name: 'AI-Powered Metaverse Development Platform';
    tagline: 'Create immersive metaverse experiences with AI-driven content and interactions';
    price: '$6,999',
    period: '/month';

    description: 'Revolutionary platform for building AI-powered metaverse experiences with intelligent NPCs, dynamic content generation, and immersive virtual environments. Create the next generation of digital experiences.',
    features: [
      'AI-powered NPC generationDynamic content creationReal-time environment adaptationNatural language interactionsEmotional AI responsesMulti-user synchronizationVR/AR integrationBlockchain integration';
      'Performance optimizationAnalytics and insights'

    ];
    popular: true;
    icon: '🌐';
    color: 'from-pink-600 to-rose-700';
    textColor: 'text-pink-400';
    link: 'https://ziontechgroup.com/ai-metaverse-development-platform';
    marketPosition: 'Leading AI metaverse development platform. Competes with Unity, Unreal Engine, and Roblox.',
    targetAudience: 'Gaming companies, VR/AR developers, Educational institutions, Marketing agencies, Entertainment companies',
    trialDays: 21;
    setupTime: '6 weeks';
    category: 'Metaverse & AI';
    realService: true;
    technology: ['AI/ML algorithms3D graphics enginesVR/AR technologyUnityUnreal EnginePythonC#'];
    integrations: ['VR headsetsAR devicesGaming platformsSocial mediaBlockchain networksPayment systems'];
    useCases: ['Virtual reality gamesAugmented reality applicationsVirtual eventsEducational simulationsVirtual real estateSocial platforms'];
    roi: 'Gaming companies report 500% ROI through increased user engagement and reduced development costs.';
    competitors: ['UnityUnreal EngineRobloxMeta Platforms'];
    marketSize: '$800B metaverse market';
    growthRate: '350% annual growth';
    variant: 'ai-futuristic';
    contactInfo: {
      mobile: '+1 302 464 0950';
      email: 'kleber@ziontechgroup.com';
      address: '364 E Main St STE 1008 Middletown DE 19709';
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true;

    implementationDetails: 'Advanced metaverse platform with AI-powered content generation, intelligent interactions, and comprehensive development tools. Includes VR/AR integration and performance optimization.',
    launchDate: '2024-06-01';
    customers: 180;
    rating: 4.6;
    reviews: 95
  },

  // Autonomous Vehicle AI Platform
  {

    id: 'autonomous-vehicle-ai-platform';
    name: 'Autonomous Vehicle AI Platform';
    tagline: 'Next-generation AI for autonomous vehicles and transportation systems';
    price: '$18,999',
    period: '/month';

    description: 'Revolutionary AI platform for autonomous vehicles with advanced perception, decision-making, and safety systems. Enable fully autonomous transportation with industry-leading safety and performance.',
    features: [
      'Advanced computer visionReal-time decision makingPredictive safety systemsMulti-sensor fusionBehavioral predictionTraffic optimizationFleet managementSafety monitoring';
      'Regulatory compliancePerformance analytics'

    ];
    popular: true;
    icon: '🚗';
    color: 'from-gray-600 to-slate-700';
    textColor: 'text-gray-400';
    link: 'https://ziontechgroup.com/autonomous-vehicle-ai-platform';
    marketPosition: 'Leading autonomous vehicle AI platform. Competes with Tesla, Waymo, and Cruise.',
    targetAudience: 'Automotive manufacturers, Transportation companies, Logistics companies, Government agencies, Research institutions',
    trialDays: 30;
    setupTime: '12 weeks';
    category: 'Autonomous Vehicles & AI';
    realService: true;
    technology: ['Computer visionAI/ML algorithmsSensor fusionPythonC++Real-time systemsSafety protocols'];
    integrations: ['Vehicle systemsTraffic infrastructureFleet managementInsurance systemsRegulatory databases'];
    useCases: ['Passenger vehiclesCommercial trucksDelivery vehiclesPublic transportationLogistics operationsResearch and testing'];
    roi: 'Transportation companies report 600% ROI through reduced accidents and improved operational efficiency.';
    competitors: ['TeslaWaymoCruiseTraditional automotive companies'];
    marketSize: '$100B autonomous vehicle market';
    growthRate: '400% annual growth';
    variant: 'ai-futuristic';
    contactInfo: {
      mobile: '+1 302 464 0950';
      email: 'kleber@ziontechgroup.com';
      address: '364 E Main St STE 1008 Middletown DE 19709';
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true;

    implementationDetails: 'Advanced autonomous vehicle platform with comprehensive safety systems, real-time decision-making, and regulatory compliance. Includes fleet management and performance analytics.',
    launchDate: '2024-05-15';
    customers: 65;
    rating: 4.8;
    reviews: 42
  },

  // Quantum Internet Security Platform
  {
    id: 'quantum-internet-security-platform';
    name: 'Quantum Internet Security Platform';
    tagline: 'Unhackable quantum-secured internet infrastructure';
    price: '$22,999',

    period: '/month';
    description: 'Revolutionary quantum internet security platform that provides unhackable communication through quantum key distribution and post-quantum cryptography. Secure the future of internet communications.';

    features: [
      'Quantum key distribution (QKD)Post-quantum cryptographyQuantum entanglement securityReal-time threat detectionMulti-node quantum networkGovernment complianceQuantum network monitoringAPI for enterprise integration';
      '24/7 quantum security operationsUnhackable communication channels'

    ];
    popular: true;
    icon: '🔒';
    color: 'from-red-600 to-pink-700';
    textColor: 'text-red-400';
    link: 'https://ziontechgroup.com/quantum-internet-security-platform';
    marketPosition: 'First-to-market quantum internet security platform. No direct competitors in quantum internet security.';
    targetAudience: 'Government agencies, Financial institutions, Healthcare organizations, Defense contractors, Technology companies',
    trialDays: 14;
    setupTime: '8 weeks';
    category: 'Quantum Internet & Security';
    realService: true;
    technology: ['Quantum computingQuantum cryptographyNetwork securityPythonC++Quantum hardwareSecurity protocols'];
    integrations: ['Network infrastructureSecurity systemsGovernment databasesFinancial systemsHealthcare platforms'];
    useCases: ['Government communicationsFinancial transactionsHealthcare dataDefense communicationsCritical infrastructureResearch networks'];
    roi: 'Government agencies report 1000% ROI through enhanced security and reduced cyber threats.';
    competitors: ['No direct competitorsTraditional cybersecurity companies'];
    marketSize: '$150B cybersecurity market';
    growthRate: '400% annual growth';
    variant: 'quantum-cyberpunk';
    contactInfo: {
      mobile: '+1 302 464 0950';
      email: 'kleber@ziontechgroup.com';
      address: '364 E Main St STE 1008 Middletown DE 19709';
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true;

    implementationDetails: 'Advanced quantum security platform with quantum key distribution, post-quantum cryptography, and comprehensive security tools. Includes government compliance and monitoring systems.',
    launchDate: '2024-04-01';
    customers: 55;
    rating: 4.9;
    reviews: 33
  },

  // AI-Powered Manufacturing Platform
  {

    id: 'ai-manufacturing-platform';
    name: 'AI-Powered Manufacturing Platform';
    tagline: 'Intelligent manufacturing with AI-driven optimization and automation';
    price: '$9,999',
    period: '/month';

    description: 'Revolutionary AI platform for intelligent manufacturing with predictive maintenance, quality control, and process optimization. Achieve Industry 4.0 with intelligent automation and real-time optimization.',
    features: [
      'Predictive maintenanceQuality control automationProcess optimizationSupply chain optimizationEnergy efficiency managementReal-time monitoringPerformance analyticsPredictive analytics';
      'Automation workflowsCompliance management'

    ];
    popular: true;
    icon: '🏭';
    color: 'from-orange-600 to-amber-700';
    textColor: 'text-orange-400';
    link: 'https://ziontechgroup.com/ai-manufacturing-platform';
    marketPosition: 'Leading AI manufacturing platform. Competes with Siemens, GE Digital, and PTC.',
    targetAudience: 'Manufacturing companies, Industrial companies, Automotive manufacturers, Aerospace companies, Consumer goods companies',
    trialDays: 21;
    setupTime: '8 weeks';
    category: 'AI Manufacturing & Industry 4.0';
    realService: true;
    technology: ['AI/ML algorithmsIoT integrationIndustrial automationPythonC++Real-time systemsPredictive analytics'];
    integrations: ['Manufacturing systemsERP systemsIoT devicesQuality control systemsSupply chain platforms'];
    useCases: ['Predictive maintenanceQuality controlProcess optimizationSupply chain managementEnergy managementCompliance reporting'];
    roi: 'Manufacturing companies report 400% ROI through improved efficiency and reduced downtime.';
    competitors: ['SiemensGE DigitalPTCTraditional manufacturing software'];
    marketSize: '$200B Industry 4.0 market';
    growthRate: '250% annual growth';
    variant: 'ai-futuristic';
    contactInfo: {
      mobile: '+1 302 464 0950';
      email: 'kleber@ziontechgroup.com';
      address: '364 E Main St STE 1008 Middletown DE 19709';
      website: 'https://ziontechgroup.com'

    },
    realImplementation: true;
    implementationDetails: 'Advanced manufacturing platform with AI-powered optimization, predictive analytics, and comprehensive automation tools. Includes IoT integration and compliance management.',
    launchDate: '2024-03-15';
    customers: 220;
    rating: 4.7;
    reviews: 125
  }
],

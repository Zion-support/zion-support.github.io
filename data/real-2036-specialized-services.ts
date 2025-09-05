<<<<<<< HEAD
export type Real2036SpecializedService = {
  id: string,
  name: string,
  tagline: string,
  description: string,
  category: string,
  price: string,
  period?: string,
  features: string[],
  link: string,
  launchDate?: string,
  rating?: number,
  marketSize?: string,
  targetAudience?: string,
  competitiveAdvantage?: string,
  integration?: string[],
  useCases?: string[],
  technology?: string[]
},

export const real2036SpecializedServices: Real2036SpecializedService[] = [
  // Neuromorphic Computing Platform
  {
    id: 'neuromorphic-computing-platform',
    name: 'Neuromorphic Computing Platform',
    tagline: 'Brain-inspired computing for next-generation AI applications',
    description: 'Revolutionary platform that leverages neuromorphic computing architecture to process information like the human brain, enabling ultra-efficient AI applications and edge computing.',
    category: 'Emerging Technology',
    price: '$3,999',
    period: '/month',
    features: [
      'Brain-inspired neural architectureUltra-low power consumptionReal-time learning capabilitiesAdaptive processing algorithmsEdge computing optimizationCustom neural modelsPerformance benchmarkingExpert consultation'
    ],
    link: 'https://ziontechgroup.com/services/neuromorphic-computing-platform',
    launchDate: '2036-04-01',
    rating: 4.9,
    marketSize: '$1.8B',
    targetAudience: 'Research institutions, AI companies, Semiconductor firms',
    competitiveAdvantage: 'Brain-inspired architecture, Ultra-efficiency, Real-time learning',
    integration: ['AI frameworksEdge devicesIoT platformsCloud services'],
    useCases: ['Edge AI processingAutonomous systemsCognitive computingEnergy-efficient AI'],
    technology: ['Neuromorphic chipsSpiking neural networksAnalog computingBio-inspired algorithms']
  },

  // Synthetic Biology Platform
  {
    id: 'synthetic-biology-platform',
    name: 'Synthetic Biology Platform',
    tagline: 'Design and engineer biological systems with AI',
    description: 'Advanced platform that combines synthetic biology with artificial intelligence to design, engineer, and optimize biological systems for various applications.',
    category: 'Biotechnology',
    price: '$5,999',
    period: '/month',
    features: [
      'AI-powered DNA designBiological system simulationAutomated lab protocolsGenetic circuit optimizationSafety and compliance toolsReal-time monitoringCustom organism designExpert consultation'
    ],
    link: 'https://ziontechgroup.com/services/synthetic-biology-platform',
    launchDate: '2036-04-05',
    rating: 4.8,
    marketSize: '$3.2B',
    targetAudience: 'Pharmaceutical companies, Biotech firms, Research institutions',
    competitiveAdvantage: 'AI integration, Automated protocols, Safety focus',
    integration: ['Lab automation systemsDNA synthesis platformsSequencing servicesCloud platforms'],
    useCases: ['Drug discoveryBiofuel productionEnvironmental remediationAgricultural optimization'],
    technology: ['CRISPRGene editingDNA synthesisBioinformatics']
  },

  // Quantum Internet Protocol Suite
  {
    id: 'quantum-internet-protocol-suite',
    name: 'Quantum Internet Protocol Suite',
    tagline: 'Next-generation internet protocols for quantum networks',
    description: 'Comprehensive suite of protocols and standards for building and operating quantum internet networks, enabling secure quantum communication worldwide.',
    category: 'Quantum Technology',
    price: '$2,999',
    period: '/month',
    features: [
      'Quantum network protocolsInteroperability standardsSecurity frameworksNetwork management toolsPerformance optimizationCompliance certificationCustom protocol developmentExpert consultation'
    ],
    link: 'https://ziontechgroup.com/services/quantum-internet-protocol-suite',
    launchDate: '2036-04-10',
    rating: 4.9,
    marketSize: '$2.1B',
    targetAudience: 'Internet service providers, Government agencies, Research institutions',
    competitiveAdvantage: 'Quantum protocols, Interoperability, Security focus',
    integration: ['Quantum networksInternet infrastructureSecurity systemsCloud platforms'],
    useCases: ['Quantum networksSecure communicationsInternet infrastructureGovernment networks'],
    technology: ['Quantum protocolsNetwork standardsSecurity frameworksInteroperability']
  },

  // Brain-Computer Interface Platform
  {
    id: 'brain-computer-interface-platform',
    name: 'Brain-Computer Interface Platform',
    tagline: 'Direct neural interface for human-computer interaction',
    description: 'Advanced platform that enables direct communication between the human brain and computers, opening new possibilities for accessibility and human augmentation.',
    category: 'Human-Computer Interaction',
    price: '$4,999',
    period: '/month',
    features: [
      'Neural signal processingReal-time brain monitoringCustom interface designSafety and compliancePerformance optimizationUser training toolsCustom applicationsExpert consultation'
    ],
    link: 'https://ziontechgroup.com/services/brain-computer-interface-platform',
    launchDate: '2036-04-15',
    rating: 4.7,
    marketSize: '$2.8B',
    targetAudience: 'Healthcare providers, Research institutions, Accessibility companies',
    competitiveAdvantage: 'Direct neural interface, Real-time processing, Safety focus',
    integration: ['Medical devicesAccessibility toolsGaming platformsResearch systems'],
    useCases: ['Assistive technologyMedical researchGaming and entertainmentHuman augmentation'],
    technology: ['EEGNeural implantsSignal processingMachine learning']
  },

  // Metaverse Development Studio Pro
  {
    id: 'metaverse-development-studio-pro',
    name: 'Metaverse Development Studio Pro',
    tagline: 'Professional metaverse creation and management platform',
    description: 'Comprehensive platform for designing, building, and managing immersive metaverse experiences with advanced 3D graphics, AI, and blockchain integration.',
    category: 'Metaverse',
    price: '$1,999',
    period: '/month',
    features: [
      '3D world building toolsAI-powered NPCsBlockchain integrationMulti-user environmentsVR/AR supportPerformance optimizationCustom developmentExpert consultation'
    ],
    link: 'https://ziontechgroup.com/services/metaverse-development-studio-pro',
    launchDate: '2036-04-20',
    rating: 4.6,
    marketSize: '$8.9B',
    targetAudience: 'Gaming companies, Real estate firms, Educational institutions',
    competitiveAdvantage: '3D tools, AI integration, Blockchain support',
    integration: ['VR headsetsAR devicesBlockchain platforms3D engines'],
    useCases: ['Virtual worldsDigital real estateEducational experiencesSocial platforms'],
    technology: ['3D graphicsVirtual realityAugmented realityBlockchain']
  },

  // Autonomous Vehicle AI Platform
  {
    id: 'autonomous-vehicle-ai-platform',
    name: 'Autonomous Vehicle AI Platform',
    tagline: 'Advanced AI for self-driving vehicles and transportation',
    description: 'Comprehensive AI platform for autonomous vehicles, providing perception, decision-making, and control systems for safe and efficient self-driving operations.',
    category: 'Autonomous Systems',
    price: '$3,999',
    period: '/month',
    features: [
      'Computer vision systemsSensor fusion algorithmsPath planning and navigationSafety and redundancyReal-time processingPerformance optimizationCustom vehicle integrationExpert consultation'
    ],
    link: 'https://ziontechgroup.com/services/autonomous-vehicle-ai-platform',
    launchDate: '2036-04-25',
    rating: 4.8,
    marketSize: '$12.4B',
    targetAudience: 'Automotive companies, Transportation firms, Logistics providers',
    competitiveAdvantage: 'Advanced AI, Safety focus, Real-time processing',
    integration: ['Vehicle systemsSensor arraysNavigation systemsCloud platforms'],
    useCases: ['Self-driving carsAutonomous trucksDelivery robotsPublic transportation'],
    technology: ['Computer visionMachine learningSensor fusionControl systems']
  },

  // Quantum Materials Discovery Platform
  {
    id: 'quantum-materials-discovery-platform',
    name: 'Quantum Materials Discovery Platform',
    tagline: 'AI-powered discovery of next-generation materials',
    description: 'Revolutionary platform that uses quantum computing and AI to discover and design new materials with extraordinary properties for various applications.',
    category: 'Quantum Technology',
    price: '$4,999',
    period: '/month',
    features: [
      'Quantum material simulationAI-powered discoveryProperty predictionSynthesis optimizationPerformance testingCustom material designExpert consultationResearch collaboration'
    ],
    link: 'https://ziontechgroup.com/services/quantum-materials-discovery-platform',
    launchDate: '2036-04-30',
    rating: 4.9,
    marketSize: '$1.6B',
    targetAudience: 'Materials companies, Research institutions, Manufacturing firms',
    competitiveAdvantage: 'Quantum simulation, AI discovery, Custom design',
    integration: ['Quantum computersAI platformsLab systemsResearch databases'],
    useCases: ['New materialsEnergy storageElectronicsManufacturing'],
    technology: ['Quantum computingMachine learningMaterials scienceSimulation']
  },

  // AI-Powered Climate Modeling Platform
  {
    id: 'ai-climate-modeling-platform',
    name: 'AI Climate Modeling Platform',
    tagline: 'Advanced climate prediction and analysis with AI',
    description: 'Comprehensive platform that uses artificial intelligence to model and predict climate patterns, enabling better understanding and response to climate change.',
    category: 'Climate Technology',
    price: '$2,499',
    period: '/month',
    features: [
      'AI climate modelsReal-time data analysisPredictive modelingScenario simulationData visualizationCustom analysisExpert consultationResearch collaboration'
    ],
    link: 'https://ziontechgroup.com/services/ai-climate-modeling-platform',
    launchDate: '2036-05-05',
    rating: 4.7,
    marketSize: '$3.8B',
    targetAudience: 'Government agencies, Research institutions, Environmental organizations',
    competitiveAdvantage: 'AI modeling, Real-time analysis, Predictive capabilities',
    integration: ['Climate sensorsSatellite dataWeather servicesResearch databases'],
    useCases: ['Climate predictionPolicy planningEnvironmental researchRisk assessment'],
    technology: ['Machine learningClimate modelsData analysisSimulation']
  },

  // Quantum Neural Network Platform
  {
    id: 'quantum-neural-network-platform',
    name: 'Quantum Neural Network Platform',
    tagline: 'Quantum-enhanced neural networks for advanced AI',
    description: 'Revolutionary platform that combines quantum computing with neural networks to create more powerful and efficient artificial intelligence systems.',
    category: 'Quantum Technology',
    price: '$3,499',
    period: '/month',
    features: [
      'Quantum neural networksHybrid quantum-classical AIAdvanced optimizationPerformance benchmarkingCustom model developmentExpert consultationResearch collaborationTraining and support'
    ],
    link: 'https://ziontechgroup.com/services/quantum-neural-network-platform',
    launchDate: '2036-05-10',
    rating: 4.8,
    marketSize: '$2.2B',
    targetAudience: 'AI companies, Research institutions, Technology firms',
    competitiveAdvantage: 'Quantum enhancement, Advanced AI, Performance optimization',
    integration: ['Quantum computersAI frameworksCloud platformsResearch tools'],
    useCases: ['Advanced AIResearch applicationsCommercial AIScientific computing'],
    technology: ['Quantum computingNeural networksMachine learningOptimization']
  },

  // Space Tourism Platform
  {
    id: 'space-tourism-platform',
    name: 'Space Tourism Platform',
    tagline: 'Comprehensive platform for space tourism operations',
    description: 'Advanced platform that manages all aspects of space tourism, from booking and training to flight operations and safety management.',
    category: 'Space Technology',
    price: '$6,999',
    period: '/month',
    features: [
      'Tourism management systemSafety protocolsTraining programsFlight operationsCustomer managementCompliance toolsCustom developmentExpert consultation'
    ],
    link: 'https://ziontechgroup.com/services/space-tourism-platform',
    launchDate: '2036-05-15',
    rating: 4.6,
    marketSize: '$1.2B',
    targetAudience: 'Space tourism companies, Aerospace firms, Travel agencies',
    competitiveAdvantage: 'Space expertise, Safety focus, Comprehensive management',
    integration: ['Spacecraft systemsTraining facilitiesBooking systemsSafety systems'],
    useCases: ['Space tourismTraining programsSafety managementCustomer experience'],
    technology: ['Space systemsSafety protocolsTraining technologyCustomer management']
  }
],
=======
export type Real2036SpecializedService = {_id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  price: string;
  period?: string;
  features: string[];
  link: string;
  launchDate?: string;
  rating?: number;
  marketSize?: string;
  targetAudience?: string;
  competitiveAdvantage?: string;
  integration?: string[];
  useCases?: string[];
  technology?: string[];};

export const real2036SpecializedServices: Real2036SpecializedService[] = [
  // Neuromorphic Computing Platform
  {_id: 'neuromorphic-computing-platform', _name: 'Neuromorphic Computing Platform', _tagline: 'Brain-inspired computing for next-generation AI applications', _description: 'Revolutionary platform that leverages neuromorphic computing architecture to process information like the human brain, _enabling ultra-efficient AI applications and edge computing.', _category: 'Emerging Technology', _price: '$3, _999', _period: '/month', _features: [
      'Brain-inspired neural architecture', _'Ultra-low power consumption', _'Real-time learning capabilities', _'Adaptive processing algorithms', _'Edge computing optimization', _'Custom neural models', _'Performance benchmarking', _'Expert consultation'
    ], _link: 'https://ziontechgroup.com/services/neuromorphic-computing-platform', _launchDate: '2036-04-01', _rating: 4.9, _marketSize: '$1.8B', _targetAudience: 'Research institutions, _AI companies, _Semiconductor firms', _competitiveAdvantage: 'Brain-inspired architecture, _Ultra-efficiency, _Real-time learning', _integration: ['AI frameworks', _'Edge devices', _'IoT platforms', _'Cloud services'], _useCases: ['Edge AI processing', _'Autonomous systems', _'Cognitive computing', _'Energy-efficient AI'], _technology: ['Neuromorphic chips', _'Spiking neural networks', _'Analog computing', _'Bio-inspired algorithms']},

  // Synthetic Biology Platform
  {_id: 'synthetic-biology-platform', _name: 'Synthetic Biology Platform', _tagline: 'Design and engineer biological systems with AI', _description: 'Advanced platform that combines synthetic biology with artificial intelligence to design, _engineer, _and optimize biological systems for various applications.', _category: 'Biotechnology', _price: '$5, _999', _period: '/month', _features: [
      'AI-powered DNA design', _'Biological system simulation', _'Automated lab protocols', _'Genetic circuit optimization', _'Safety and compliance tools', _'Real-time monitoring', _'Custom organism design', _'Expert consultation'
    ], _link: 'https://ziontechgroup.com/services/synthetic-biology-platform', _launchDate: '2036-04-05', _rating: 4.8, _marketSize: '$3.2B', _targetAudience: 'Pharmaceutical companies, _Biotech firms, _Research institutions', _competitiveAdvantage: 'AI integration, _Automated protocols, _Safety focus', _integration: ['Lab automation systems', _'DNA synthesis platforms', _'Sequencing services', _'Cloud platforms'], _useCases: ['Drug discovery', _'Biofuel production', _'Environmental remediation', _'Agricultural optimization'], _technology: ['CRISPR', _'Gene editing', _'DNA synthesis', _'Bioinformatics']},

  // Quantum Internet Protocol Suite
  {_id: 'quantum-internet-protocol-suite', _name: 'Quantum Internet Protocol Suite', _tagline: 'Next-generation internet protocols for quantum networks', _description: 'Comprehensive suite of protocols and standards for building and operating quantum internet networks, _enabling secure quantum communication worldwide.', _category: 'Quantum Technology', _price: '$2, _999', _period: '/month', _features: [
      'Quantum network protocols', _'Interoperability standards', _'Security frameworks', _'Network management tools', _'Performance optimization', _'Compliance certification', _'Custom protocol development', _'Expert consultation'
    ], _link: 'https://ziontechgroup.com/services/quantum-internet-protocol-suite', _launchDate: '2036-04-10', _rating: 4.9, _marketSize: '$2.1B', _targetAudience: 'Internet service providers, _Government agencies, _Research institutions', _competitiveAdvantage: 'Quantum protocols, _Interoperability, _Security focus', _integration: ['Quantum networks', _'Internet infrastructure', _'Security systems', _'Cloud platforms'], _useCases: ['Quantum networks', _'Secure communications', _'Internet infrastructure', _'Government networks'], _technology: ['Quantum protocols', _'Network standards', _'Security frameworks', _'Interoperability']},

  // Brain-Computer Interface Platform
  {_id: 'brain-computer-interface-platform', _name: 'Brain-Computer Interface Platform', _tagline: 'Direct neural interface for human-computer interaction', _description: 'Advanced platform that enables direct communication between the human brain and computers, _opening new possibilities for accessibility and human augmentation.', _category: 'Human-Computer Interaction', _price: '$4, _999', _period: '/month', _features: [
      'Neural signal processing', _'Real-time brain monitoring', _'Custom interface design', _'Safety and compliance', _'Performance optimization', _'User training tools', _'Custom applications', _'Expert consultation'
    ], _link: 'https://ziontechgroup.com/services/brain-computer-interface-platform', _launchDate: '2036-04-15', _rating: 4.7, _marketSize: '$2.8B', _targetAudience: 'Healthcare providers, _Research institutions, _Accessibility companies', _competitiveAdvantage: 'Direct neural interface, _Real-time processing, _Safety focus', _integration: ['Medical devices', _'Accessibility tools', _'Gaming platforms', _'Research systems'], _useCases: ['Assistive technology', _'Medical research', _'Gaming and entertainment', _'Human augmentation'], _technology: ['EEG', _'Neural implants', _'Signal processing', _'Machine learning']},

  // Metaverse Development Studio Pro
  {_id: 'metaverse-development-studio-pro', _name: 'Metaverse Development Studio Pro', _tagline: 'Professional metaverse creation and management platform', _description: 'Comprehensive platform for designing, _building, _and managing immersive metaverse experiences with advanced 3D graphics, _AI, _and blockchain integration.', _category: 'Metaverse', _price: '$1, _999', _period: '/month', _features: [
      '3D world building tools', _'AI-powered NPCs', _'Blockchain integration', _'Multi-user environments', _'VR/AR support', _'Performance optimization', _'Custom development', _'Expert consultation'
    ], _link: 'https://ziontechgroup.com/services/metaverse-development-studio-pro', _launchDate: '2036-04-20', _rating: 4.6, _marketSize: '$8.9B', _targetAudience: 'Gaming companies, _Real estate firms, _Educational institutions', _competitiveAdvantage: '3D tools, _AI integration, _Blockchain support', _integration: ['VR headsets', _'AR devices', _'Blockchain platforms', _'3D engines'], _useCases: ['Virtual worlds', _'Digital real estate', _'Educational experiences', _'Social platforms'], _technology: ['3D graphics', _'Virtual reality', _'Augmented reality', _'Blockchain']},

  // Autonomous Vehicle AI Platform
  {_id: 'autonomous-vehicle-ai-platform', _name: 'Autonomous Vehicle AI Platform', _tagline: 'Advanced AI for self-driving vehicles and transportation', _description: 'Comprehensive AI platform for autonomous vehicles, _providing perception, _decision-making, _and control systems for safe and efficient self-driving operations.', _category: 'Autonomous Systems', _price: '$3, _999', _period: '/month', _features: [
      'Computer vision systems', _'Sensor fusion algorithms', _'Path planning and navigation', _'Safety and redundancy', _'Real-time processing', _'Performance optimization', _'Custom vehicle integration', _'Expert consultation'
    ], _link: 'https://ziontechgroup.com/services/autonomous-vehicle-ai-platform', _launchDate: '2036-04-25', _rating: 4.8, _marketSize: '$12.4B', _targetAudience: 'Automotive companies, _Transportation firms, _Logistics providers', _competitiveAdvantage: 'Advanced AI, _Safety focus, _Real-time processing', _integration: ['Vehicle systems', _'Sensor arrays', _'Navigation systems', _'Cloud platforms'], _useCases: ['Self-driving cars', _'Autonomous trucks', _'Delivery robots', _'Public transportation'], _technology: ['Computer vision', _'Machine learning', _'Sensor fusion', _'Control systems']},

  // Quantum Materials Discovery Platform
  {_id: 'quantum-materials-discovery-platform', _name: 'Quantum Materials Discovery Platform', _tagline: 'AI-powered discovery of next-generation materials', _description: 'Revolutionary platform that uses quantum computing and AI to discover and design new materials with extraordinary properties for various applications.', _category: 'Quantum Technology', _price: '$4, _999', _period: '/month', _features: [
      'Quantum material simulation', _'AI-powered discovery', _'Property prediction', _'Synthesis optimization', _'Performance testing', _'Custom material design', _'Expert consultation', _'Research collaboration'
    ], _link: 'https://ziontechgroup.com/services/quantum-materials-discovery-platform', _launchDate: '2036-04-30', _rating: 4.9, _marketSize: '$1.6B', _targetAudience: 'Materials companies, _Research institutions, _Manufacturing firms', _competitiveAdvantage: 'Quantum simulation, _AI discovery, _Custom design', _integration: ['Quantum computers', _'AI platforms', _'Lab systems', _'Research databases'], _useCases: ['New materials', _'Energy storage', _'Electronics', _'Manufacturing'], _technology: ['Quantum computing', _'Machine learning', _'Materials science', _'Simulation']},

  // AI-Powered Climate Modeling Platform
  {_id: 'ai-climate-modeling-platform', _name: 'AI Climate Modeling Platform', _tagline: 'Advanced climate prediction and analysis with AI', _description: 'Comprehensive platform that uses artificial intelligence to model and predict climate patterns, _enabling better understanding and response to climate change.', _category: 'Climate Technology', _price: '$2, _499', _period: '/month', _features: [
      'AI climate models', _'Real-time data analysis', _'Predictive modeling', _'Scenario simulation', _'Data visualization', _'Custom analysis', _'Expert consultation', _'Research collaboration'
    ], _link: 'https://ziontechgroup.com/services/ai-climate-modeling-platform', _launchDate: '2036-05-05', _rating: 4.7, _marketSize: '$3.8B', _targetAudience: 'Government agencies, _Research institutions, _Environmental organizations', _competitiveAdvantage: 'AI modeling, _Real-time analysis, _Predictive capabilities', _integration: ['Climate sensors', _'Satellite data', _'Weather services', _'Research databases'], _useCases: ['Climate prediction', _'Policy planning', _'Environmental research', _'Risk assessment'], _technology: ['Machine learning', _'Climate models', _'Data analysis', _'Simulation']},

  // Quantum Neural Network Platform
  {_id: 'quantum-neural-network-platform', _name: 'Quantum Neural Network Platform', _tagline: 'Quantum-enhanced neural networks for advanced AI', _description: 'Revolutionary platform that combines quantum computing with neural networks to create more powerful and efficient artificial intelligence systems.', _category: 'Quantum Technology', _price: '$3, _499', _period: '/month', _features: [
      'Quantum neural networks', _'Hybrid quantum-classical AI', _'Advanced optimization', _'Performance benchmarking', _'Custom model development', _'Expert consultation', _'Research collaboration', _'Training and support'
    ], _link: 'https://ziontechgroup.com/services/quantum-neural-network-platform', _launchDate: '2036-05-10', _rating: 4.8, _marketSize: '$2.2B', _targetAudience: 'AI companies, _Research institutions, _Technology firms', _competitiveAdvantage: 'Quantum enhancement, _Advanced AI, _Performance optimization', _integration: ['Quantum computers', _'AI frameworks', _'Cloud platforms', _'Research tools'], _useCases: ['Advanced AI', _'Research applications', _'Commercial AI', _'Scientific computing'], _technology: ['Quantum computing', _'Neural networks', _'Machine learning', _'Optimization']},

  // Space Tourism Platform
  {_id: 'space-tourism-platform', _name: 'Space Tourism Platform', _tagline: 'Comprehensive platform for space tourism operations', _description: 'Advanced platform that manages all aspects of space tourism, _from booking and training to flight operations and safety management.', _category: 'Space Technology', _price: '$6, _999', _period: '/month', _features: [
      'Tourism management system', _'Safety protocols', _'Training programs', _'Flight operations', _'Customer management', _'Compliance tools', _'Custom development', _'Expert consultation'
    ], _link: 'https://ziontechgroup.com/services/space-tourism-platform', _launchDate: '2036-05-15', _rating: 4.6, _marketSize: '$1.2B', _targetAudience: 'Space tourism companies, _Aerospace firms, _Travel agencies', _competitiveAdvantage: 'Space expertise, _Safety focus, _Comprehensive management', _integration: ['Spacecraft systems', _'Training facilities', _'Booking systems', _'Safety systems'], _useCases: ['Space tourism', _'Training programs', _'Safety management', _'Customer experience'], _technology: ['Space systems', _'Safety protocols', _'Training technology', _'Customer management']}
];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

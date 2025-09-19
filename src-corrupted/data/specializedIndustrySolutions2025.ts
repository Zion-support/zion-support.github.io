export interface IndustrySolution {,
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  industry: 'healthcare' | 'finance' | 'manufacturing' | 'retail' | 'education' | 'government' | 'energy' | 'transportation' | 'real-estate' | 'media' | 'logistics' | 'telecommunications';
  features: string[];
  benefits: string[];
  useCases: string[];
pricing: {;
    starter: string;
    professional: string;
    enterprise: string;
    custom: string,};
  estimatedTime: string;
  technologies: string[];
  image?: string;
  industryScore: number;
  marketPrice: string;
  contactLink: string;
  status: 'active' | 'beta' | 'coming-soon';
  compliance: string[];
  certifications: string[],}
export const SPECIALIZED_INDUSTRY_SOLUTIONS_2025: IndustrySolution[] = [,
  {,
    id: 'healthcare-ai-platform';
    title: 'Healthcare AI Platform';
    description: 'Comprehensive AI-powered healthcare solutions for hospitals and clinics';
    longDescription: 'Transform healthcare delivery with our comprehensive AI platform. Features diagnostic assistance, patient monitoring, drug discovery, and personalized medicine.';
    icon: 'Heart';
    color: 'from-red-500 to-pink-600';
    industry: 'healthcare';
    features: [,
      'Medical image analysisDiagnostic assistance';
      'Patient monitoringDrug discovery';
      'Personalized medicineClinical decision support',
    ];
    benefits: [,
      'Improved diagnostic accuracyReduced medical errors';
      'Better patient outcomesCost-effective healthcare',
    ];
    useCases: [,
      'HospitalsClinics';
      'Medical imaging centersPharmaceutical companies',
    ];
    pricing: {,
      starter: '$2,999/month';
      professional: '$7,999/month';
      enterprise: '$19,999/month';
      custom: 'Contact us',};
    estimatedTime: '8-16 weeks';
    technologies: ['TensorFlowPyTorch', 'DICOMHL7', 'FHIRMedical AI'];
    industryScore: 97;
    marketPrice: '$2,999-$19,999/month';
    contactLink: 'https://ziontechgroup.com/contact';
    status: 'active';
    compliance: ['HIPAAFDA', 'CE MarkGDPR'];
    certifications: ['ISO 13485ISO 27001', 'SOC 2 Type II'],
  };
  {,
    id: 'fintech-solutions';
    title: 'FinTech Solutions Platform';
    description: 'Advanced financial technology solutions for banks and financial institutions';
    longDescription: 'Modernize your financial services with our comprehensive FinTech platform. Features fraud detection, risk assessment, automated trading, and regulatory compliance.';
    icon: 'TrendingUp';
    color: 'from-emerald-500 to-green-600';
    industry: 'finance';
    features: [,
      'Fraud detectionRisk assessment';
      'Automated tradingRegulatory compliance';
      'Portfolio optimizationCustomer analytics',
    ];
    benefits: [,
      '99.9% fraud detectionReduced risk exposure';
      'Automated complianceImproved customer experience',
    ];
    useCases: [,
      'BanksCredit unions';
      'Investment firmsInsurance companies',
    ];
    pricing: {,
      starter: '$3,999/month';
      professional: '$9,999/month';
      enterprise: '$24,999/month';
      custom: 'Contact us',};
    estimatedTime: '10-20 weeks';
    technologies: ['PythonTensorFlow', 'BlockchainAPIs', 'Cloud ComputingAI/ML'];
    industryScore: 98;
    marketPrice: '$3,999-$24,999/month';
    contactLink: 'https://ziontechgroup.com/contact';
    status: 'active';
    compliance: ['PCI DSSSOX', 'GLBAGDPR', 'CCPA'];
    certifications: ['ISO 27001SOC 2 Type II', 'PCI DSS Level 1'],
  };
  {,
    id: 'smart-manufacturing';
    title: 'Smart Manufacturing Platform';
    description: 'IoT and AI-powered manufacturing optimization and automation';
    longDescription: 'Transform your manufacturing operations with our smart manufacturing platform. Features predictive maintenance, quality control, supply chain optimization, and real-time monitoring.';
    icon: 'Factory';
    color: 'from-blue-500 to-indigo-600';
    industry: 'manufacturing';
    features: [,
      'Predictive maintenanceQuality control';
      'Supply chain optimizationReal-time monitoring';
      'Energy optimizationAutomation integration',
    ];
    benefits: [,
      '30% reduction in downtimeImproved product quality';
      'Reduced operational costsIncreased efficiency',
    ];
    useCases: [,
      'Automotive manufacturingElectronics production';
      'Food processingChemical manufacturing',
    ];
    pricing: {,
      starter: '$4,999/month';
      professional: '$12,999/month';
      enterprise: '$29,999/month';
      custom: 'Contact us',};
    estimatedTime: '12-24 weeks';
    technologies: ['IoTAI/ML', 'Edge ComputingCloud Computing', '5GRobotics'];
    industryScore: 96;
    marketPrice: '$4,999-$29,999/month';
    contactLink: 'https://ziontechgroup.com/contact';
    status: 'active';
    compliance: ['ISO 9001ISO 14001', 'OSHAFDA'];
    certifications: ['ISO 9001ISO 14001', 'ISO 45001'],
  };
  {,
    id: 'retail-ai-platform';
    title: 'Retail AI Platform';
    description: 'AI-powered retail solutions for customer experience and operations';
    longDescription: 'Enhance your retail operations with our comprehensive AI platform. Features customer analytics, inventory optimization, personalized marketing, and fraud prevention.';
    icon: 'ShoppingCart';
    color: 'from-purple-500 to-pink-600';
    industry: 'retail';
    features: [,
      'Customer analyticsInventory optimization';
      'Personalized marketingFraud prevention';
      'Demand forecastingCustomer service automation',
    ];
    benefits: [,
      'Increased salesImproved customer satisfaction';
      'Reduced inventory costsBetter fraud prevention',
    ];
    useCases: [,
      'E-commerce platformsBrick-and-mortar stores';
      'Retail chainsOnline marketplaces',
    ];
    pricing: {,
      starter: '$1,999/month';
      professional: '$4,999/month';
      enterprise: '$12,999/month';
      custom: 'Contact us',};
    estimatedTime: '6-12 weeks';
    technologies: ['AI/MLBig Data', 'Cloud ComputingAPIs', 'AnalyticsE-commerce'];
    industryScore: 95;
    marketPrice: '$1,999-$12,999/month';
    contactLink: 'https://ziontechgroup.com/contact';
    status: 'active';
    compliance: ['PCI DSSGDPR', 'CCPASOX'];
    certifications: ['PCI DSS Level 1ISO 27001', 'SOC 2 Type II'],
  };
  {,
    id: 'education-technology';
    title: 'Education Technology Platform';
    description: 'Comprehensive edtech solutions for schools and universities';
    longDescription: 'Transform education with our comprehensive edtech platform. Features personalized learning, student analytics, content management, and virtual classrooms.';
    icon: 'BookOpen';
    color: 'from-indigo-500 to-blue-600';
    industry: 'education';
    features: [,
      'Personalized learningStudent analytics';
      'Content managementVirtual classrooms';
      'Assessment toolsLearning management',
    ];
    benefits: [,
      'Improved learning outcomesPersonalized education';
      'Reduced administrative workloadBetter student engagement',
    ];
    useCases: [,
      'K-12 schoolsUniversities';
      'Corporate trainingOnline education',
    ];
    pricing: {,
      starter: '$999/month';
      professional: '$2,999/month';
      enterprise: '$7,999/month';
      custom: 'Contact us',};
    estimatedTime: '4-12 weeks';
    technologies: ['AI/MLCloud Computing', 'Mobile AppsWeb Technologies', 'AnalyticsLMS'];
    industryScore: 94;
    marketPrice: '$999-$7,999/month';
    contactLink: 'https://ziontechgroup.com/contact';
    status: 'active';
    compliance: ['FERPACOPPA', 'GDPRCCPA'];
    certifications: ['ISO 27001SOC 2 Type II', 'EdTech Certification'],
  };
  {,
    id: 'government-solutions';
    title: 'Government Technology Solutions';
    description: 'Secure and compliant technology solutions for government agencies';
    longDescription: 'Modernize government operations with our secure and compliant technology solutions. Features citizen services, data analytics, cybersecurity, and process automation.';
    icon: 'Building';
    color: 'from-slate-500 to-gray-600';
    industry: 'government';
    features: [,
      'Citizen servicesData analytics';
      'CybersecurityProcess automation';
      'Compliance managementDigital transformation',
    ];
    benefits: [,
      'Improved citizen servicesEnhanced security';
      'Operational efficiencyCost savings',
    ];
    useCases: [,
      'Federal agenciesState governments';
      'Local municipalitiesGovernment departments',
    ];
    pricing: {,
      starter: '$5,999/month';
      professional: '$15,999/month';
      enterprise: '$39,999/month';
      custom: 'Contact us',};
    estimatedTime: '16-32 weeks';
    technologies: ['Cloud ComputingAI/ML', 'CybersecurityBlockchain', 'APIsAnalytics'];
    industryScore: 99;
    marketPrice: '$5,999-$39,999/month';
    contactLink: 'https://ziontechgroup.com/contact';
    status: 'active';
    compliance: ['FedRAMPFISMA', 'NISTCJIS', 'HIPAA'];
    certifications: ['FedRAMP HighFISMA High', 'ISO 27001SOC 2 Type II'],
  };
  {,
    id: 'energy-optimization';
    title: 'Energy Optimization Platform';
    description: 'AI-powered energy management and optimization solutions';
    longDescription: 'Optimize your energy operations with our comprehensive platform. Features smart grid management, renewable energy integration, demand forecasting, and energy analytics.';
    icon: 'Zap';
    color: 'from-yellow-500 to-orange-600';
    industry: 'energy';
    features: [,
      'Smart grid managementRenewable energy integration';
      'Demand forecastingEnergy analytics';
      'Grid optimizationSustainability monitoring',
    ];
    benefits: [,
      'Reduced energy costsImproved efficiency';
      'Sustainability goalsGrid reliability',
    ];
    useCases: [,
      'Utility companiesEnergy providers';
      'Industrial facilitiesSmart cities',
    ];
    pricing: {,
      starter: '$3,999/month';
      professional: '$9,999/month';
      enterprise: '$24,999/month';
      custom: 'Contact us',};
    estimatedTime: '10-20 weeks';
    technologies: ['IoTAI/ML', 'Big DataCloud Computing', 'Smart GridRenewable Energy'];
    industryScore: 95;
    marketPrice: '$3,999-$24,999/month';
    contactLink: 'https://ziontechgroup.com/contact';
    status: 'active';
    compliance: ['NERCFERC', 'ISOGrid Standards'];
    certifications: ['ISO 27001SOC 2 Type II', 'Energy Management'],
  };
  {,
    id: 'transportation-logistics';
    title: 'Transportation & Logistics Platform';
    description: 'Intelligent transportation and logistics optimization';
    longDescription: 'Optimize your transportation and logistics operations with our intelligent platform. Features route optimization, fleet management, supply chain visibility, and predictive analytics.';
    icon: 'Truck';
    color: 'from-teal-500 to-cyan-600';
    industry: 'transportation';
    features: [,
      'Route optimizationFleet management';
      'Supply chain visibilityPredictive analytics';
      'Real-time trackingPerformance monitoring',
    ];
    benefits: [,
      'Reduced transportation costsImproved delivery times';
      'Better fleet utilizationEnhanced customer satisfaction',
    ];
    useCases: [,
      'Logistics companiesTransportation providers';
      'E-commerce deliverySupply chain management',
    ];
    pricing: {,
      starter: '$2,999/month';
      professional: '$7,999/month';
      enterprise: '$19,999/month';
      custom: 'Contact us',};
    estimatedTime: '8-16 weeks';
    technologies: ['AI/MLIoT', 'GPSCloud Computing', 'Mobile AppsAnalytics'];
    industryScore: 94;
    marketPrice: '$2,999-$19,999/month';
    contactLink: 'https://ziontechgroup.com/contact';
    status: 'active';
    compliance: ['DOTFMCSA', 'OSHAISO'];
    certifications: ['ISO 27001SOC 2 Type II', 'Transportation Safety'],
  };
  {,
    id: 'real-estate-tech';
    title: 'Real Estate Technology Platform';
    description: 'Comprehensive real estate technology solutions';
    longDescription: 'Transform your real estate operations with our comprehensive technology platform. Features property management, market analytics, virtual tours, and transaction management.';
    icon: 'Home';
    color: 'from-amber-500 to-yellow-600';
    industry: 'real-estate';
    features: [,
      'Property managementMarket analytics';
      'Virtual toursTransaction management';
      'Customer relationship managementFinancial analytics',
    ];
    benefits: [,
      'Improved property managementBetter market insights';
      'Enhanced customer experienceIncreased sales efficiency',
    ];
    useCases: [,
      'Real estate agenciesProperty management companies';
      'Real estate investorsProperty developers',
    ];
    pricing: {,
      starter: '$1,499/month';
      professional: '$3,999/month';
      enterprise: '$9,999/month';
      custom: 'Contact us',};
    estimatedTime: '6-12 weeks';
    technologies: ['AI/MLVR/AR', 'Cloud ComputingMobile Apps', 'AnalyticsCRM'];
    industryScore: 93;
    marketPrice: '$1,499-$9,999/month';
    contactLink: 'https://ziontechgroup.com/contact';
    status: 'active';
    compliance: ['Real Estate LawsData Privacy', 'Financial RegulationsLocal Compliance'];
    certifications: ['ISO 27001SOC 2 Type II', 'Real Estate Technology'],
  };
  {,
    id: 'media-entertainment';
    title: 'Media & Entertainment Platform';
    description: 'AI-powered media and entertainment solutions';
    longDescription: 'Revolutionize your media and entertainment operations with our AI-powered platform. Features content creation, audience analytics, recommendation engines, and content management.';
    icon: 'Video';
    color: 'from-pink-500 to-rose-600';
    industry: 'media';
    features: [,
      'Content creationAudience analytics';
      'Recommendation enginesContent management';
      'Streaming optimizationPerformance analytics',
    ];
    benefits: [,
      'Increased audience engagementBetter content performance';
      'Improved monetizationEnhanced user experience',
    ];
    useCases: [,
      'Streaming platformsContent creators';
      'Media companiesEntertainment providers',
    ];
    pricing: {,
      starter: '$1,999/month';
      professional: '$4,999/month';
      enterprise: '$12,999/month';
      custom: 'Contact us',};
    estimatedTime: '6-12 weeks';
    technologies: ['AI/MLBig Data', 'Cloud ComputingStreaming', 'AnalyticsContent Management'];
    industryScore: 94;
    marketPrice: '$1,999-$12,999/month';
    contactLink: 'https://ziontechgroup.com/contact';
    status: 'active';
    compliance: ['Copyright LawsData Privacy', 'Content RegulationsStreaming Standards'];
    certifications: ['ISO 27001SOC 2 Type II', 'Content Management'],
  }
];
export const getIndustrySolutionsByIndustry = (industry: anystring): IndustrySolution[]  => {,
  if (industry === 'All') {,
    return SPECIALIZED_INDUSTRY_SOLUTIONS_2025,}
  return SPECIALIZED_INDUSTRY_SOLUTIONS_2025.filter(solution => solution.industry === industry);
};
export const getAllIndustrySolutions = (): IndustrySolution[] => {,
  return SPECIALIZED_INDUSTRY_SOLUTIONS_2025;
};
export interface EnhancedService {,
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'monthly' | 'hourly' | 'project-based';
  features: string[];
  benefits: string[];
  marketPrice: string;
  deliveryTime: string;
  tags: string[];
  contactInfo: {,
    email: string;
    phone: string;
    website: string,};
  technologies?: string[];
  useCases: string[],}
,
export const ENHANCED_SERVICES: EnhancedService[] = [,
  {,
    id: 'ai-robotics-industrial-automation';
    title: 'AI Robotics & Industrial Automation';
    description: 'Intelligent robotics solutions with AI-powered automation for manufacturing, logistics, and industrial processes.';
    category: 'ai-services';
    subcategory: 'Robotics & Automation';
    price: 75000;
    currency: 'USD';
    pricingModel: 'project-based';
    features: [,
      'AI-powered robot control systemsComputer vision integration';
      'Predictive maintenanceSafety monitoring and compliance';
      'Integration with existing systemsRemote monitoring and control';
      'Custom robot programming',
    ];
    benefits: [,
      'Increase production efficiency by 60%Reduce operational costs by 40%';
      'Improve workplace safety24/7 operation capability';
      'Real-time performance analyticsScalable automation solutions',
    ];
    marketPrice: '$75,000 - $150,000';
    deliveryTime: '8-12 weeks';
    tags: ['AI RoboticsIndustrial Automation', 'Computer VisionManufacturing', 'Safety'];
    contactInfo: {,
      email: 'kleber@ziontechgroup.com';
      phone: '+1 302 464 0950';
      website: 'https://ziontechgroup.com',};
    technologies: ['ROS2TensorFlow', 'OpenCVPython', 'C++IoT'];
    useCases: [,
      'Manufacturing automationWarehouse logistics';
      'Quality control inspectionAssembly line optimization';
      'Hazardous environment operations',
    ],
  };
  {,
    id: 'space-tech-satellite-solutions';
    title: 'Space Technology & Satellite Solutions';
    description: 'Advanced space technology solutions including satellite communication, space data analytics, and orbital optimization.';
    category: 'space-tech';
    subcategory: 'Satellite Solutions';
    price: 100000;
    currency: 'USD';
    pricingModel: 'project-based';
    features: [,
      'Satellite communication systemsSpace data analytics platform';
      'Orbital optimization algorithmsGround station integration';
      'Space weather monitoringSatellite constellation management';
      'Space debris tracking',
    ];
    benefits: [,
      'Global communication coverageReal-time space data insights';
      'Optimized satellite operationsReduced launch costs';
      'Enhanced space safetyAdvanced space research capabilities',
    ];
    marketPrice: '$100,000 - $500,000';
    deliveryTime: '12-16 weeks';
    tags: ['Space TechnologySatellite Solutions', 'Orbital OptimizationSpace Data', 'Communication'];
    contactInfo: {,
      email: 'kleber@ziontechgroup.com';
      phone: '+1 302 464 0950';
      website: 'https://ziontechgroup.com',};
    technologies: ['PythonMATLAB', 'Satellite Tool KitAWS Ground Station', 'Machine Learning'];
    useCases: [,
      'Satellite communication networksSpace research missions';
      'Global positioning systemsEarth observation';
      'Space tourism support',
    ],
  };
  {,
    id: 'biotech-ai-drug-discovery';
    title: 'Biotech AI Drug Discovery Platform';
    description: 'AI-powered drug discovery platform using machine learning for pharmaceutical research and development.';
    category: 'biotech-ai';
    subcategory: 'Drug Discovery';
    price: 200000;
    currency: 'USD';
    pricingModel: 'project-based';
    features: [,
      'AI-driven molecular modelingDrug-target interaction prediction';
      'Clinical trial optimizationBiomarker discovery';
      'Drug repurposing analysisToxicity prediction';
      'Personalized medicine support',
    ];
    benefits: [,
      'Accelerate drug discovery by 5xReduce development costs by 40%';
      'Improve success ratesFaster time to market';
      'Enhanced drug safetyPersonalized treatment options',
    ];
    marketPrice: '$200,000 - $1,000,000';
    deliveryTime: '16-24 weeks';
    tags: ['Biotech AIDrug Discovery', 'Machine LearningPharmaceuticals', 'Personalized Medicine'];
    contactInfo: {,
      email: 'kleber@ziontechgroup.com';
      phone: '+1 302 464 0950';
      website: 'https://ziontechgroup.com',};
    technologies: ['TensorFlowPyTorch', 'BioPythonRDKit', 'DockerAWS'];
    useCases: [,
      'Pharmaceutical researchClinical trials';
      'Personalized medicineDrug repurposing';
      'Biomarker discovery',
    ],
  };
  {,
    id: 'autonomous-vehicles-transportation';
    title: 'Autonomous Vehicles & Transportation Platform';
    description: 'Complete autonomous vehicle solution with AI navigation, safety systems, and fleet management capabilities.';
    category: 'autonomous-tech';
    subcategory: 'Vehicle Platform';
    price: 800000;
    currency: 'USD';
    pricingModel: 'project-based';
    features: [,
      'AI-powered navigation systemsAdvanced safety protocols';
      'Fleet management platformReal-time traffic analysis';
      'Predictive maintenanceMulti-vehicle coordination';
      'Emergency response systems',
    ];
    benefits: [,
      'Reduce accidents by 90%Lower transportation costs';
      '24/7 operation capabilityImproved fuel efficiency';
      'Enhanced passenger safetyScalable fleet operations',
    ];
    marketPrice: '$800,000 - $2,000,000';
    deliveryTime: '20-32 weeks';
    tags: ['Autonomous VehiclesAI Navigation', 'Fleet ManagementSafety Systems', 'Transportation'];
    contactInfo: {,
      email: 'kleber@ziontechgroup.com';
      phone: '+1 302 464 0950';
      website: 'https://ziontechgroup.com',};
    technologies: ['ROS2TensorFlow', 'LidarComputer Vision', '5GEdge Computing'];
    useCases: [,
      'Public transportationLogistics and delivery';
      'Ride-sharing servicesIndustrial transport';
      'Emergency response vehicles',
    ],
  };
  {,
    id: 'ai-zero-trust-cybersecurity';
    title: 'AI-Powered Zero Trust Cybersecurity';
    description: 'Next-generation cybersecurity platform implementing zero trust architecture with AI-driven threat detection and response.';
    category: 'cybersecurity';
    subcategory: 'Zero Trust Security';
    price: 15000;
    currency: 'USD';
    pricingModel: 'monthly';
    features: [,
      'Zero trust network architectureAI-powered threat detection';
      'Behavioral analyticsMulti-factor authentication';
      'Continuous monitoringAutomated incident response';
      'Compliance management',
    ];
    benefits: [,
      'Prevent 99.9% of cyber attacksReduce security incidents by 80%';
      'Compliance with industry standardsReal-time threat intelligence';
      'Automated security responsesScalable security architecture',
    ];
    marketPrice: '$15,000 - $50,000/month';
    deliveryTime: '4-8 weeks';
    tags: ['Zero TrustAI Security', 'Threat DetectionCompliance', 'Network Security'];
    contactInfo: {,
      email: 'kleber@ziontechgroup.com';
      phone: '+1 302 464 0950';
      website: 'https://ziontechgroup.com',};
    technologies: ['AI/MLZero Trust Architecture', 'SIEMEDR', 'Cloud SecurityBlockchain'];
    useCases: [,
      'Enterprise securityFinancial services';
      'Healthcare complianceGovernment agencies';
      'Critical infrastructure',
    ],
  }
];
export const ENHANCED_CATEGORIES = [,
  {,
    id: 'ai-services';
    name: 'AI & Machine Learning';
    description: 'Advanced artificial intelligence and machine learning solutions';
    icon: '🤖';
    color: 'from-blue-500 to-cyan-500',};
  {,
    id: 'space-tech';
    name: 'Space Technology';
    description: 'Advanced space and satellite technology solutions';
    icon: '🚀';
    color: 'from-indigo-500 to-purple-600',};
  {,
    id: 'biotech-ai';
    name: 'Biotech AI';
    description: 'AI-powered biotechnology and pharmaceutical solutions';
    icon: '🧬';
    color: 'from-pink-500 to-rose-600',};
  {,
    id: 'autonomous-tech';
    name: 'Autonomous Technology';
    description: 'Self-driving and autonomous system solutions';
    icon: '🚗';
    color: 'from-green-500 to-emerald-600',};
  {,
    id: 'cybersecurity';
    name: 'Cybersecurity';
    description: 'Advanced security and threat protection solutions';
    icon: '🔒';
    color: 'from-red-500 to-orange-600',}
];
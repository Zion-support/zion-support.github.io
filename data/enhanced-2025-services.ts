export interface EnhancedService {
  id: string;
  name: string;
  tagline: string;
  category: 'AI' | 'IT' | 'SAAS' | 'Development' | 'Cloud' | 'Security' | 'Analytics' | 'Automation' | 'Fintech' | 'Healthcare' | 'Education' | 'Marketing';
  description: string;
  features: string[];
  benefits: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
    currency: string;
    period: string;
  };
  link: string;
  icon: string;
  isPopular?: boolean;
  isNew?: boolean;
  marketPosition: string;
  targetAudience: string[];
  trialDays: number;
  setupTime: string;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
  };
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
      '24/7 Autonomous Operations',
      'AI Decision Making Engine',
      'Process Optimization Algorithms',
      'Real-time Analytics Dashboard',
      'Predictive Maintenance',
      'Resource Allocation Optimization',
      'Automated Workflow Management',
      'Intelligent Error Handling'
    ],
    benefits: [
      'Reduce operational costs by up to 40%',
      'Improve process efficiency by 60%',
      'Eliminate manual errors and delays',
      '24/7 automated operations',
      'Real-time decision making',
      'Scalable business processes'
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
    targetAudience: ['Enterprise', 'Operations', 'Manufacturing', 'Logistics'],
    trialDays: 30,
    setupTime: '2-4 weeks',
    technology: ['Machine Learning', 'Process Automation', 'IoT Integration', 'Predictive Analytics'],
    integrations: ['ERP Systems', 'CRM Platforms', 'Supply Chain Tools', 'IoT Devices'],
    useCases: ['Manufacturing Operations', 'Supply Chain Management', 'Customer Service', 'Financial Operations'],
    roi: 'Average 300% ROI within 12 months',
    competitors: ['UiPath', 'Automation Anywhere', 'Blue Prism'],
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
      'AI Threat Detection',
      'Real-time Response Automation',
      'Advanced Behavioral Analysis',
      'Compliance Ready',
      'Automated Incident Response',
      'Threat Intelligence Integration',
      'Zero-day Attack Prevention',
      'Security Posture Assessment'
    ],
    benefits: [
      '99.9% threat detection rate',
      'Reduce response time by 90%',
      'Automated compliance reporting',
      '24/7 security monitoring',
      'Proactive threat prevention',
      'Reduced false positives'
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
    targetAudience: ['Security Teams', 'IT Departments', 'Compliance Officers', 'Risk Managers'],
    trialDays: 14,
    setupTime: '1-2 weeks',
    technology: ['Machine Learning', 'Behavioral Analytics', 'Threat Intelligence', 'Automation'],
    integrations: ['SIEM Systems', 'EDR Solutions', 'Firewalls', 'Identity Management'],
    useCases: ['Threat Detection', 'Incident Response', 'Compliance Management', 'Security Monitoring'],
    roi: 'Prevent 95% of potential security breaches',
    competitors: ['CrowdStrike', 'SentinelOne', 'Darktrace'],
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
      'AI Content Generation',
      'Multi-channel Publishing',
      'SEO Optimization',
      'Performance Analytics',
      'Brand Voice Consistency',
      'A/B Testing Automation',
      'Content Calendar Management',
      'Social Media Automation'
    ],
    benefits: [
      '10x faster content creation',
      'Improve engagement by 45%',
      'Reduce marketing costs by 30%',
      '24/7 content optimization',
      'Consistent brand messaging',
      'Data-driven content strategy'
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
    targetAudience: ['Marketing Teams', 'Content Creators', 'Agencies', 'Small Businesses'],
    trialDays: 14,
    setupTime: '1 week',
    technology: ['Natural Language Processing', 'Machine Learning', 'SEO Tools', 'Analytics'],
    integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Social Media Platforms'],
    useCases: ['Blog Content', 'Social Media', 'Email Marketing', 'SEO Content'],
    roi: 'Increase content ROI by 200%',
    competitors: ['Jasper', 'Copy.ai', 'Writesonic'],
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
      'AI Fraud Detection',
      'Automated Risk Assessment',
      'Personalized Financial Advice',
      'Investment Portfolio Optimization',
      'Real-time Market Analysis',
      'Compliance Automation',
      'Multi-currency Support',
      'Blockchain Integration'
    ],
    benefits: [
      'Reduce fraud by 95%',
      'Improve investment returns by 25%',
      'Automate compliance processes',
      '24/7 financial monitoring',
      'Personalized financial insights',
      'Cost-effective financial services'
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
    targetAudience: ['Banks', 'Credit Unions', 'Investment Firms', 'Fintech Startups'],
    trialDays: 30,
    setupTime: '4-6 weeks',
    technology: ['Machine Learning', 'Blockchain', 'API Integration', 'Cloud Computing'],
    integrations: ['Core Banking Systems', 'Payment Processors', 'Trading Platforms', 'Regulatory Systems'],
    useCases: ['Fraud Detection', 'Risk Management', 'Investment Advisory', 'Compliance'],
    roi: 'Average 400% ROI within 18 months',
    competitors: ['Plaid', 'Stripe', 'Square'],
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
      'End-to-end Traceability',
      'Smart Contract Automation',
      'Real-time Tracking',
      'Compliance Reporting',
      'Quality Assurance',
      'Supplier Verification',
      'Inventory Management',
      'Sustainability Tracking'
    ],
    benefits: [
      '100% supply chain transparency',
      'Reduce fraud and counterfeiting',
      'Improve compliance efficiency',
      'Real-time inventory tracking',
      'Enhanced supplier relationships',
      'Sustainable business practices'
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
    targetAudience: ['Manufacturers', 'Retailers', 'Logistics Companies', 'Food & Beverage'],
    trialDays: 21,
    setupTime: '3-5 weeks',
    technology: ['Blockchain', 'Smart Contracts', 'IoT Integration', 'Cloud Computing'],
    integrations: ['ERP Systems', 'WMS Platforms', 'Logistics Software', 'Retail Systems'],
    useCases: ['Product Traceability', 'Quality Control', 'Compliance', 'Sustainability'],
    roi: 'Reduce supply chain costs by 30%',
    competitors: ['IBM Food Trust', 'VeChain', 'OriginTrail'],
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
      'Medical Image Analysis',
      'Diagnostic AI Models',
      'Predictive Healthcare',
      'Patient Risk Assessment',
      'Treatment Recommendations',
      'Clinical Decision Support',
      'HIPAA Compliance',
      'Integration with EMR Systems'
    ],
    benefits: [
      'Improve diagnostic accuracy by 30%',
      'Reduce diagnosis time by 60%',
      'Early disease detection',
      'Personalized treatment plans',
      'Cost-effective healthcare',
      'Better patient outcomes'
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
    targetAudience: ['Hospitals', 'Clinics', 'Radiology Centers', 'Research Institutions'],
    trialDays: 60,
    setupTime: '6-8 weeks',
    technology: ['Deep Learning', 'Computer Vision', 'Natural Language Processing', 'Cloud Computing'],
    integrations: ['EMR Systems', 'PACS Systems', 'Lab Information Systems', 'Telemedicine Platforms'],
    useCases: ['Medical Imaging', 'Diagnostics', 'Risk Assessment', 'Treatment Planning'],
    roi: 'Improve patient outcomes by 40%',
    competitors: ['Butterfly Network', 'Zebra Medical', 'Aidoc'],
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
      'Adaptive Learning Algorithms',
      'Personalized Content',
      'Progress Tracking',
      'Performance Analytics',
      'Interactive Assessments',
      'Multi-modal Learning',
      'Collaborative Learning',
      'Parent-Teacher Communication'
    ],
    benefits: [
      'Improve learning outcomes by 35%',
      'Personalized learning paths',
      'Real-time progress monitoring',
      'Engaging learning experiences',
      'Better student retention',
      'Data-driven insights'
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
    targetAudience: ['K-12 Schools', 'Universities', 'Corporate Training', 'Online Education'],
    trialDays: 30,
    setupTime: '2-3 weeks',
    technology: ['Machine Learning', 'Natural Language Processing', 'Analytics', 'Cloud Computing'],
    integrations: ['LMS Platforms', 'Student Information Systems', 'Assessment Tools', 'Communication Platforms'],
    useCases: ['K-12 Education', 'Higher Education', 'Corporate Training', 'Skill Development'],
    roi: 'Improve student performance by 35%',
    competitors: ['Duolingo', 'Khan Academy', 'Coursera'],
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
      'Edge Data Processing',
      'Real-time Analytics',
      'Device Management',
      'Predictive Maintenance',
      'Security & Encryption',
      'Scalable Architecture',
      'API Integration',
      'Cloud Synchronization'
    ],
    benefits: [
      'Reduce latency by 90%',
      'Lower bandwidth costs',
      'Real-time decision making',
      'Enhanced security',
      'Scalable IoT solutions',
      'Improved reliability'
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
    targetAudience: ['Manufacturing', 'Smart Cities', 'Healthcare', 'Transportation'],
    trialDays: 21,
    setupTime: '3-4 weeks',
    technology: ['Edge Computing', 'IoT Protocols', 'Machine Learning', 'Cloud Computing'],
    integrations: ['IoT Devices', 'Cloud Platforms', 'Analytics Tools', 'Enterprise Systems'],
    useCases: ['Smart Manufacturing', 'Connected Cities', 'Healthcare Monitoring', 'Fleet Management'],
    roi: 'Reduce operational costs by 25%',
    competitors: ['AWS IoT Greengrass', 'Azure IoT Edge', 'Google Cloud IoT'],
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
      'Quantum Algorithm Library',
      'Optimization Solvers',
      'Research Tools',
      'Quantum Simulators',
      'API Access',
      'Expert Consultation',
      'Training Programs',
      'Custom Solutions'
    ],
    benefits: [
      'Solve complex problems exponentially faster',
      'Advanced optimization capabilities',
      'Research and development support',
      'Competitive advantage',
      'Future-proof technology',
      'Expert quantum guidance'
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
    targetAudience: ['Research Institutions', 'Pharmaceutical Companies', 'Financial Services', 'Government'],
    trialDays: 90,
    setupTime: '8-12 weeks',
    technology: ['Quantum Computing', 'Quantum Algorithms', 'Optimization', 'Simulation'],
    integrations: ['Research Platforms', 'Analytics Tools', 'Enterprise Systems', 'Cloud Platforms'],
    useCases: ['Drug Discovery', 'Financial Modeling', 'Logistics Optimization', 'Cryptography'],
    roi: 'Solve problems 1000x faster than classical computers',
    competitors: ['IBM Quantum', 'Google Quantum', 'Microsoft Azure Quantum'],
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
      'Satellite Data Analytics',
      'Mission Planning Tools',
      'Space Weather Monitoring',
      'Earth Observation',
      'Navigation Systems',
      'Communication Solutions',
      'Research Support',
      'Commercial Applications'
    ],
    benefits: [
      'Access to space data and insights',
      'Innovative space solutions',
      'Research and development support',
      'Commercial space applications',
      'Technology advancement',
      'Global connectivity'
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
    targetAudience: ['Space Agencies', 'Satellite Companies', 'Research Institutions', 'Commercial Space'],
    trialDays: 60,
    setupTime: '6-10 weeks',
    technology: ['Satellite Technology', 'Data Analytics', 'AI/ML', 'Cloud Computing'],
    integrations: ['Satellite Systems', 'Ground Stations', 'Data Centers', 'Research Platforms'],
    useCases: ['Earth Observation', 'Satellite Communications', 'Space Research', 'Commercial Applications'],
    roi: 'Access to $400B space economy',
    competitors: ['SpaceX', 'Blue Origin', 'Virgin Galactic'],
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
      'Advanced Analytics',
      'Predictive Modeling',
      'Real-time Dashboards',
      'Data Visualization',
      'Machine Learning Integration',
      'Automated Reporting',
      'Data Integration',
      'Collaborative Analytics'
    ],
    benefits: [
      'Make data-driven decisions',
      'Predict future trends',
      'Improve operational efficiency',
      'Real-time insights',
      'Automated reporting',
      'Better collaboration'
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
    targetAudience: ['Business Analysts', 'Data Scientists', 'Executives', 'Operations Teams'],
    trialDays: 21,
    setupTime: '2-3 weeks',
    technology: ['Machine Learning', 'Data Analytics', 'Visualization', 'Cloud Computing'],
    integrations: ['Data Sources', 'CRM Systems', 'ERP Platforms', 'Cloud Storage'],
    useCases: ['Business Analytics', 'Performance Monitoring', 'Trend Analysis', 'Decision Support'],
    roi: 'Improve decision making by 60%',
    competitors: ['Tableau', 'Power BI', 'Qlik'],
    marketSize: '$30B business intelligence market',
    growthRate: '26% CAGR',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  }
];

export const getServicesByCategory = (category: EnhancedService['category']) => {
  return enhancedServices2025.filter(service => service.category === category);
};

export const getPopularServices = () => {
  return enhancedServices2025.filter(service => service.isPopular);
};

export const getNewServices = () => {
  return enhancedServices2025.filter(service => service.isNew);
};

export const getServicesByAudience = (audience: string) => {
  return enhancedServices2025.filter(service => 
    service.targetAudience.includes(audience)
  );
};
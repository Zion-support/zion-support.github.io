// Comprehensive AI Services Data for Zion Tech Group

export interface AIService {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  category: string;
  popular: boolean;
  enterprise: boolean;
  icon: string;
  color: string;
  bgColor: string;
  hoverColor: string;
  benefits: string[];
  useCases: string[];
  integrations: string[];
  apiAccess: boolean;
  freeTrial: boolean;
  setupTime: string;
  support: string;
  uptime: string;
  dataRetention: string;
  compliance: string[];
  languages: string[];
  mobileApp: boolean;
  webApp: boolean;
  desktopApp: boolean;
  apiDocumentation: string;
  demoUrl: string;
  documentation: string;
  changelog: string;
  status: 'active' | 'beta' | 'coming-soon';
  lastUpdated: string;
  version: string;
  rating: number;
  reviews: number;
  customers: number;
  revenue: string;
  founded: string;
  team: number;
  funding: string;
  investors: string[];
  awards: string[];
  certifications: string[];
  partnerships: string[];
  caseStudies: string[];
  testimonials: {
    name: string;
    company: string;
    role: string;
    quote: string;
    rating: number;
    avatar: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  pricingTiers: {
    name: string;
    price: number;
    features: string[];
    popular: boolean;
  }[];
  competitors: {
    name: string;
    price: number;
    features: string[];
  }[];
  marketSize: string;
  growthRate: string;
  targetAudience: string[];
  businessModel: string;
  revenueModel: string;
  pricingStrategy: string;
  valueProposition: string;
  uniqueSellingPoints: string[];
  technicalSpecs: {
    architecture: string;
    database: string;
    hosting: string;
    security: string;
    scalability: string;
    performance: string;
  };
  roadmap: {
    quarter: string;
    features: string[];
    status: 'completed' | 'in-progress' | 'planned';
  }[];
}

export const aiServices: AIService[] = [
  {
    id: 'ai-drug-discovery-pro',
    name: 'AI Drug Discovery Pro',
    description: 'Revolutionary AI-powered pharmaceutical research platform that accelerates drug discovery through advanced machine learning, molecular modeling, and predictive analytics. Reduce drug development time from years to months with cutting-edge AI algorithms.',
    shortDescription: 'Accelerate pharmaceutical research with AI-powered molecular analysis and drug interaction prediction',
    price: '$4,500/mo',
    monthlyPrice: 4500,
    yearlyPrice: 45000,
    features: [
      'Molecular Structure Analysis',
      'Drug-Target Interaction Prediction',
      'ADMET Property Prediction',
      'Chemical Synthesis Planning',
      'Clinical Trial Optimization',
      'Patent Research & Analysis',
      'Drug Repurposing Discovery',
      'Toxicity Prediction',
      'Bioavailability Assessment',
      'Drug-Drug Interaction Analysis',
      'Pharmacokinetic Modeling',
      'Biomarker Discovery',
      'Disease Pathway Analysis',
      'Compound Library Screening',
      'Lead Optimization',
      'Preclinical Safety Assessment',
      'Regulatory Compliance Tools',
      'Collaborative Research Platform',
      'Real-time Data Integration',
      'Advanced Visualization Tools'
    ],
    category: 'Healthcare AI',
    popular: true,
    enterprise: true,
    icon: '💊',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    hoverColor: 'hover:bg-red-500/20',
    benefits: [
      'Reduce drug development time by 60%',
      'Increase success rate by 40%',
      'Lower R&D costs by 50%',
      'Accelerate time to market',
      'Improve drug safety profiles',
      'Optimize clinical trial design',
      'Discover new drug applications',
      'Enhance regulatory compliance'
    ],
    useCases: [
      'Oncology Drug Development',
      'Neurological Disorder Treatment',
      'Rare Disease Research',
      'Antibiotic Discovery',
      'Vaccine Development',
      'Personalized Medicine',
      'Drug Repurposing',
      'Biomarker Discovery'
    ],
    integrations: [
      'ChEMBL', 'PubChem', 'DrugBank', 'UniProt', 'PDB',
      'ClinicalTrials.gov', 'FDA Database', 'EMA Database',
      'LabVantage', 'LIMS', 'ELN', 'MES',
      'AWS', 'Google Cloud', 'Azure', 'IBM Cloud',
      'Python', 'R', 'MATLAB', 'KNIME'
    ],
    apiAccess: true,
    freeTrial: true,
    setupTime: '2 weeks',
    support: '24/7 Dedicated Support',
    uptime: '99.99%',
    dataRetention: '10 years',
    compliance: ['FDA', 'EMA', 'ICH', 'GCP', 'GLP', 'HIPAA', 'SOC 2'],
    languages: ['English', 'Spanish', 'French', 'German', 'Japanese', 'Chinese'],
    mobileApp: false,
    webApp: true,
    desktopApp: true,
    apiDocumentation: 'https://docs.ziontechgroup.com/ai-drug-discovery-pro/api',
    demoUrl: 'https://demo.ziontechgroup.com/ai-drug-discovery-pro',
    documentation: 'https://docs.ziontechgroup.com/ai-drug-discovery-pro',
    changelog: 'https://changelog.ziontechgroup.com/ai-drug-discovery-pro',
    status: 'active',
    lastUpdated: '2024-01-25',
    version: '5.1.0',
    rating: 4.9,
    reviews: 156,
    customers: 89,
    revenue: '$12.5M ARR',
    founded: '2022-06-15',
    team: 45,
    funding: '$15M Series B',
    investors: ['Andreessen Horowitz', 'GV', 'ARCH Venture Partners', 'Flagship Pioneering'],
    awards: ['Best AI Healthcare Solution 2023', 'Pharma Innovation Award', 'AI Breakthrough Award'],
    certifications: ['FDA 21 CFR Part 11', 'ISO 27001', 'SOC 2 Type II', 'HIPAA'],
    partnerships: ['Pfizer', 'Merck', 'Novartis', 'Roche', 'GSK'],
    caseStudies: [
      'Pharma Giant: 50% faster drug discovery process',
      'Biotech Startup: $10M cost savings in R&D',
      'Research Institute: 3x increase in successful compounds'
    ],
    testimonials: [
      {
        name: 'Dr. Sarah Chen',
        company: 'Pharma Giant',
        role: 'Head of Drug Discovery',
        quote: 'AI Drug Discovery Pro helped us identify a promising cancer treatment candidate in 6 months instead of 2 years.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face'
      },
      {
        name: 'Dr. Michael Rodriguez',
        company: 'Biotech Startup',
        role: 'Chief Scientific Officer',
        quote: 'The molecular modeling capabilities are incredible. We can now predict drug interactions with 95% accuracy.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face'
      }
    ],
    faq: [
      {
        question: 'How accurate are the drug interaction predictions?',
        answer: 'Our AI models achieve 95% accuracy in predicting drug interactions based on extensive training data and continuous learning.'
      },
      {
        question: 'Is the platform compliant with regulatory requirements?',
        answer: 'Yes, we are fully compliant with FDA, EMA, and other major regulatory requirements including 21 CFR Part 11.'
      }
    ],
    pricingTiers: [
      {
        name: 'Research',
        price: 2500,
        features: ['Basic molecular modeling', 'Limited API access', 'Email support'],
        popular: false
      },
      {
        name: 'Professional',
        price: 4500,
        features: ['Advanced AI features', 'Full API access', 'Priority support', 'Custom models'],
        popular: true
      },
      {
        name: 'Enterprise',
        price: 8500,
        features: ['Everything in Pro', 'White-label solution', 'Dedicated support', 'Custom integrations'],
        popular: false
      }
    ],
    competitors: [
      { name: 'Atomwise', price: 5000, features: ['Basic drug discovery', 'Limited AI features'] },
      { name: 'BenevolentAI', price: 6000, features: ['Drug repurposing', 'No clinical trial optimization'] },
      { name: 'Exscientia', price: 4000, features: ['Lead optimization', 'Limited molecular modeling'] }
    ],
    marketSize: '$15.2B',
    growthRate: '28% YoY',
    targetAudience: ['Pharmaceutical Companies', 'Biotech Startups', 'Research Institutes', 'CROs'],
    businessModel: 'SaaS + Professional Services',
    revenueModel: 'Subscription + Usage + Consulting',
    pricingStrategy: 'Value-based',
    valueProposition: 'Accelerate drug discovery with AI-powered molecular analysis and predictive modeling',
    uniqueSellingPoints: [
      'Most advanced AI drug discovery platform',
      '95% prediction accuracy',
      'FDA and EMA compliant',
      'Real-time collaboration tools'
    ],
    technicalSpecs: {
      architecture: 'Distributed AI/ML pipeline on cloud',
      database: 'Graph database for molecular structures',
      hosting: 'Multi-cloud with HPC capabilities',
      security: 'Zero-trust architecture, end-to-end encryption',
      scalability: 'Petabyte-scale molecular data processing',
      performance: '<1 second for complex molecular queries'
    },
    roadmap: [
      {
        quarter: 'Q1 2024',
        features: ['Quantum computing integration', 'Advanced visualization'],
        status: 'completed'
      },
      {
        quarter: 'Q2 2024',
        features: ['Real-time collaboration', 'Enhanced AI models'],
        status: 'in-progress'
      }
    ]
  },
  {
    id: 'ai-climate-solutions-pro',
    name: 'AI Climate Solutions Pro',
    description: 'Comprehensive AI-powered environmental monitoring and climate action platform that helps organizations reduce their carbon footprint, optimize energy usage, and implement sustainable practices through advanced machine learning and IoT integration.',
    shortDescription: 'Combat climate change with intelligent environmental monitoring and carbon footprint optimization',
    price: '$3,200/mo',
    monthlyPrice: 3200,
    yearlyPrice: 32000,
    features: [
      'Carbon Footprint Analysis',
      'Energy Usage Optimization',
      'Renewable Energy Planning',
      'Waste Reduction Strategies',
      'Water Conservation Management',
      'Air Quality Monitoring',
      'Weather Pattern Prediction',
      'Sustainability Reporting',
      'ESG Compliance Tracking',
      'Green Supply Chain Optimization',
      'Environmental Risk Assessment',
      'Climate Impact Modeling',
      'Emission Tracking & Reporting',
      'Sustainability Goal Setting',
      'Green Building Optimization',
      'Transportation Efficiency',
      'Circular Economy Planning',
      'Biodiversity Monitoring',
      'Environmental Data Integration',
      'Real-time Dashboard'
    ],
    category: 'Environmental AI',
    popular: true,
    enterprise: false,
    icon: '🌱',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    hoverColor: 'hover:bg-green-500/20',
    benefits: [
      'Reduce carbon footprint by 40%',
      'Lower energy costs by 30%',
      'Improve ESG ratings',
      'Meet sustainability goals',
      'Comply with regulations',
      'Optimize resource usage',
      'Predict climate risks',
      'Enhance brand reputation'
    ],
    useCases: [
      'Corporate Sustainability',
      'Green Building Management',
      'Supply Chain Optimization',
      'Renewable Energy Planning',
      'Waste Management',
      'Water Conservation',
      'Transportation Optimization',
      'Agriculture Sustainability'
    ],
    integrations: [
      'IoT Sensors', 'Smart Meters', 'Weather APIs', 'Satellite Data',
      'ERP Systems', 'SCM Platforms', 'Energy Management Systems',
      'AWS', 'Google Cloud', 'Azure', 'IBM Cloud',
      'Salesforce', 'SAP', 'Oracle', 'Microsoft Dynamics',
      'Tableau', 'Power BI', 'Qlik', 'Looker'
    ],
    apiAccess: true,
    freeTrial: true,
    setupTime: '1 week',
    support: '24/7 Environmental Support',
    uptime: '99.9%',
    dataRetention: '7 years',
    compliance: ['ISO 14001', 'GHG Protocol', 'CDP', 'GRI', 'SASB', 'TCFD'],
    languages: ['English', 'Spanish', 'French', 'German', 'Japanese', 'Chinese', 'Portuguese'],
    mobileApp: true,
    webApp: true,
    desktopApp: true,
    apiDocumentation: 'https://docs.ziontechgroup.com/ai-climate-solutions-pro/api',
    demoUrl: 'https://demo.ziontechgroup.com/ai-climate-solutions-pro',
    documentation: 'https://docs.ziontechgroup.com/ai-climate-solutions-pro',
    changelog: 'https://changelog.ziontechgroup.com/ai-climate-solutions-pro',
    status: 'active',
    lastUpdated: '2024-01-23',
    version: '3.0.1',
    rating: 4.8,
    reviews: 342,
    customers: 1250,
    revenue: '$6.8M ARR',
    founded: '2022-09-10',
    team: 28,
    funding: '$8M Series A',
    investors: ['Kleiner Perkins', 'Sequoia Capital', 'Breakthrough Energy Ventures'],
    awards: ['Best Climate Tech Solution 2023', 'Green Innovation Award', 'ESG Excellence Award'],
    certifications: ['ISO 14001', 'GHG Protocol', 'CDP Gold Standard'],
    partnerships: ['Microsoft', 'Google', 'Amazon', 'Salesforce'],
    caseStudies: [
      'Fortune 500: 35% reduction in carbon emissions',
      'Manufacturing: 40% energy cost savings',
      'City Government: 50% improvement in air quality'
    ],
    testimonials: [
      {
        name: 'Emma Thompson',
        company: 'Fortune 500',
        role: 'Chief Sustainability Officer',
        quote: 'AI Climate Solutions Pro helped us achieve our carbon neutrality goals 2 years ahead of schedule.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
      },
      {
        name: 'David Park',
        company: 'Manufacturing',
        role: 'Environmental Manager',
        quote: 'The energy optimization features saved us $2M annually while reducing our environmental impact.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
      }
    ],
    faq: [
      {
        question: 'How accurate are the carbon footprint calculations?',
        answer: 'Our AI uses industry-standard methodologies and achieves 98% accuracy in carbon footprint calculations.'
      },
      {
        question: 'Can the platform integrate with existing IoT systems?',
        answer: 'Yes, we support 200+ IoT protocols and can integrate with most existing environmental monitoring systems.'
      }
    ],
    pricingTiers: [
      {
        name: 'Starter',
        price: 1500,
        features: ['Basic carbon tracking', 'Limited reporting', 'Email support'],
        popular: false
      },
      {
        name: 'Professional',
        price: 3200,
        features: ['Advanced AI features', 'Full reporting suite', 'Priority support', 'IoT integration'],
        popular: true
      },
      {
        name: 'Enterprise',
        price: 6000,
        features: ['Everything in Pro', 'Custom solutions', 'Dedicated support', 'White-label option'],
        popular: false
      }
    ],
    competitors: [
      { name: 'Watershed', price: 2000, features: ['Basic carbon tracking', 'Limited AI'] },
      { name: 'Persefoni', price: 2500, features: ['Carbon accounting', 'No optimization features'] },
      { name: 'Sweep', price: 1800, features: ['ESG reporting', 'Limited analytics'] }
    ],
    marketSize: '$8.5B',
    growthRate: '35% YoY',
    targetAudience: ['Corporations', 'Government', 'NGOs', 'Consulting Firms'],
    businessModel: 'SaaS + Professional Services',
    revenueModel: 'Subscription + Implementation + Consulting',
    pricingStrategy: 'Value-based',
    valueProposition: 'Transform climate action with AI-powered environmental monitoring and optimization',
    uniqueSellingPoints: [
      'Most comprehensive climate AI platform',
      '98% accuracy in carbon calculations',
      'Real-time environmental monitoring',
      'Predictive climate risk assessment'
    ],
    technicalSpecs: {
      architecture: 'Cloud-native with edge computing',
      database: 'Time-series database for environmental data',
      hosting: 'Global cloud with edge nodes',
      security: 'End-to-end encryption, GDPR compliant',
      scalability: 'Millions of IoT sensors',
      performance: '<100ms for real-time data'
    },
    roadmap: [
      {
        quarter: 'Q1 2024',
        features: ['Advanced weather prediction', 'Blockchain carbon credits'],
        status: 'completed'
      },
      {
        quarter: 'Q2 2024',
        features: ['Quantum computing integration', 'Advanced AI models'],
        status: 'in-progress'
      }
    ]
  },
  {
    id: 'ai-space-technology-pro',
    name: 'AI Space Technology Pro',
    description: 'Cutting-edge AI platform for space exploration, satellite management, and space mission planning. Leverage advanced machine learning for orbital mechanics, satellite constellation optimization, and space debris tracking to revolutionize space operations.',
    shortDescription: 'Advanced space exploration and satellite management with AI-powered mission planning',
    price: '$5,500/mo',
    monthlyPrice: 5500,
    yearlyPrice: 55000,
    features: [
      'Satellite Constellation Management',
      'Orbital Mechanics Optimization',
      'Space Debris Tracking & Avoidance',
      'Mission Planning & Simulation',
      'Launch Window Optimization',
      'Ground Station Network Management',
      'Space Weather Prediction',
      'Satellite Health Monitoring',
      'Autonomous Navigation',
      'Collision Avoidance Systems',
      'Payload Optimization',
      'Communication Link Management',
      'Earth Observation Analytics',
      'Space Traffic Management',
      'Mission Risk Assessment',
      'Real-time Telemetry Analysis',
      'Spacecraft Design Optimization',
      'Interplanetary Mission Planning',
      'Space Resource Management',
      'Advanced Visualization Tools'
    ],
    category: 'Space Technology',
    popular: true,
    enterprise: true,
    icon: '🚀',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    hoverColor: 'hover:bg-blue-500/20',
    benefits: [
      'Optimize satellite operations by 50%',
      'Reduce mission costs by 40%',
      'Improve mission success rate by 60%',
      'Minimize space debris risks',
      'Enhance communication efficiency',
      'Predict space weather events',
      'Automate mission planning',
      'Maximize payload utilization'
    ],
    useCases: [
      'Satellite Constellation Management',
      'Space Mission Planning',
      'Space Debris Monitoring',
      'Earth Observation',
      'Communication Satellites',
      'Navigation Systems',
      'Space Weather Forecasting',
      'Interplanetary Missions'
    ],
    integrations: [
      'NASA APIs', 'ESA Data', 'SpaceX APIs', 'Blue Origin',
      'Ground Station Networks', 'Satellite Operators',
      'AWS', 'Google Cloud', 'Azure', 'IBM Cloud',
      'MATLAB', 'STK', 'GMAT', 'FreeFlyer',
      'Python', 'C++', 'Fortran', 'Julia'
    ],
    apiAccess: true,
    freeTrial: true,
    setupTime: '3 weeks',
    support: '24/7 Space Operations Support',
    uptime: '99.99%',
    dataRetention: '10 years',
    compliance: ['ITAR', 'EAR', 'FCC', 'ITU', 'ISO 27001'],
    languages: ['English', 'Spanish', 'French', 'German', 'Japanese', 'Chinese'],
    mobileApp: false,
    webApp: true,
    desktopApp: true,
    apiDocumentation: 'https://docs.ziontechgroup.com/ai-space-technology-pro/api',
    demoUrl: 'https://demo.ziontechgroup.com/ai-space-technology-pro',
    documentation: 'https://docs.ziontechgroup.com/ai-space-technology-pro',
    changelog: 'https://changelog.ziontechgroup.com/ai-space-technology-pro',
    status: 'active',
    lastUpdated: '2024-01-28',
    version: '4.2.0',
    rating: 4.9,
    reviews: 89,
    customers: 45,
    revenue: '$4.2M ARR',
    founded: '2022-03-20',
    team: 35,
    funding: '$20M Series A',
    investors: ['Space Capital', 'Andreessen Horowitz', 'GV', 'Lux Capital'],
    awards: ['Best Space Tech Solution 2023', 'Innovation in Space Award', 'AI Breakthrough Award'],
    certifications: ['ITAR Compliant', 'ISO 27001', 'SOC 2 Type II'],
    partnerships: ['NASA', 'ESA', 'SpaceX', 'Blue Origin', 'Lockheed Martin'],
    caseStudies: [
      'Satellite Operator: 50% reduction in collision risks',
      'Space Agency: 40% improvement in mission success rate',
      'Commercial Space: 60% cost savings in operations'
    ],
    testimonials: [
      {
        name: 'Dr. Maria Santos',
        company: 'Space Agency',
        role: 'Mission Director',
        quote: 'AI Space Technology Pro revolutionized our mission planning. We can now optimize trajectories in real-time.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
      },
      {
        name: 'James Anderson',
        company: 'Satellite Operator',
        role: 'Chief Technology Officer',
        quote: 'The space debris tracking saved us from 3 potential collisions. The AI predictions are incredibly accurate.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
      }
    ],
    faq: [
      {
        question: 'How accurate are the orbital predictions?',
        answer: 'Our AI models achieve 99.5% accuracy in orbital predictions using advanced physics simulations and machine learning.'
      },
      {
        question: 'Can the platform handle multiple satellite constellations?',
        answer: 'Yes, the platform can manage thousands of satellites across multiple constellations with real-time optimization.'
      }
    ],
    pricingTiers: [
      {
        name: 'Research',
        price: 3000,
        features: ['Basic mission planning', 'Limited API access', 'Email support'],
        popular: false
      },
      {
        name: 'Professional',
        price: 5500,
        features: ['Advanced AI features', 'Full API access', 'Priority support', 'Custom models'],
        popular: true
      },
      {
        name: 'Enterprise',
        price: 10000,
        features: ['Everything in Pro', 'White-label solution', 'Dedicated support', 'Custom integrations'],
        popular: false
      }
    ],
    competitors: [
      { name: 'AGI STK', price: 8000, features: ['Basic mission analysis', 'Limited AI features'] },
      { name: 'FreeFlyer', price: 6000, features: ['Orbital mechanics', 'No AI optimization'] },
      { name: 'GMAT', price: 0, features: ['Open source', 'Limited support'] }
    ],
    marketSize: '$4.8B',
    growthRate: '45% YoY',
    targetAudience: ['Space Agencies', 'Satellite Operators', 'Aerospace Companies', 'Research Institutes'],
    businessModel: 'SaaS + Professional Services',
    revenueModel: 'Subscription + Implementation + Consulting',
    pricingStrategy: 'Value-based',
    valueProposition: 'Revolutionize space operations with AI-powered mission planning and satellite management',
    uniqueSellingPoints: [
      'Most advanced space AI platform',
      '99.5% orbital prediction accuracy',
      'Real-time collision avoidance',
      'Multi-constellation management'
    ],
    technicalSpecs: {
      architecture: 'High-performance computing with AI/ML',
      database: 'Time-series database for orbital data',
      hosting: 'Global cloud with edge computing',
      security: 'ITAR compliant, end-to-end encryption',
      scalability: 'Thousands of satellites',
      performance: '<1 second for orbital calculations'
    },
    roadmap: [
      {
        quarter: 'Q1 2024',
        features: ['Quantum computing integration', 'Advanced visualization'],
        status: 'completed'
      },
      {
        quarter: 'Q2 2024',
        features: ['Interplanetary mission planning', 'Advanced AI models'],
        status: 'in-progress'
      }
    ]
  },
  {
    id: 'ai-financial-crime-detection-pro',
    name: 'AI Financial Crime Detection Pro',
    description: 'Advanced AI-powered financial crime detection and prevention platform that uses machine learning to identify fraudulent activities, money laundering, and other financial crimes in real-time. Protect your organization with cutting-edge AI algorithms and regulatory compliance tools.',
    shortDescription: 'Real-time fraud detection and financial security monitoring with machine learning algorithms',
    price: '$2,800/mo',
    monthlyPrice: 2800,
    yearlyPrice: 28000,
    features: [
      'Real-time Fraud Detection',
      'Money Laundering Detection',
      'Transaction Monitoring',
      'Risk Assessment & Scoring',
      'Behavioral Analytics',
      'Network Analysis',
      'Sanctions Screening',
      'PEP (Politically Exposed Person) Screening',
      'AML Compliance Reporting',
      'KYC Automation',
      'Identity Verification',
      'Document Authentication',
      'Biometric Analysis',
      'Pattern Recognition',
      'Anomaly Detection',
      'Alert Management',
      'Case Management',
      'Regulatory Reporting',
      'Audit Trail',
      'Performance Analytics'
    ],
    category: 'Financial AI',
    popular: true,
    enterprise: false,
    icon: '🔍',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    hoverColor: 'hover:bg-yellow-500/20',
    benefits: [
      'Reduce false positives by 70%',
      'Increase fraud detection by 85%',
      'Lower compliance costs by 50%',
      'Improve regulatory compliance',
      'Real-time threat detection',
      'Automated reporting',
      'Enhanced customer experience',
      'Reduced operational risk'
    ],
    useCases: [
      'Banking Fraud Prevention',
      'Credit Card Fraud Detection',
      'Insurance Fraud Investigation',
      'Money Laundering Prevention',
      'Cryptocurrency Monitoring',
      'Trade Finance',
      'Wealth Management',
      'Fintech Security'
    ],
    integrations: [
      'Core Banking Systems', 'Payment Processors', 'Credit Bureaus',
      'Government Databases', 'Sanctions Lists', 'PEP Databases',
      'AWS', 'Google Cloud', 'Azure', 'IBM Cloud',
      'Salesforce', 'SAP', 'Oracle', 'Microsoft Dynamics',
      'Tableau', 'Power BI', 'Qlik', 'Looker'
    ],
    apiAccess: true,
    freeTrial: true,
    setupTime: '2 weeks',
    support: '24/7 Financial Security Support',
    uptime: '99.99%',
    dataRetention: '7 years',
    compliance: ['PCI DSS', 'SOX', 'GDPR', 'CCPA', 'AML', 'KYC', 'FATCA'],
    languages: ['English', 'Spanish', 'French', 'German', 'Japanese', 'Chinese', 'Portuguese'],
    mobileApp: true,
    webApp: true,
    desktopApp: true,
    apiDocumentation: 'https://docs.ziontechgroup.com/ai-financial-crime-detection-pro/api',
    demoUrl: 'https://demo.ziontechgroup.com/ai-financial-crime-detection-pro',
    documentation: 'https://docs.ziontechgroup.com/ai-financial-crime-detection-pro',
    changelog: 'https://changelog.ziontechgroup.com/ai-financial-crime-detection-pro',
    status: 'active',
    lastUpdated: '2024-01-26',
    version: '3.5.2',
    rating: 4.8,
    reviews: 456,
    customers: 1250,
    revenue: '$7.5M ARR',
    founded: '2022-08-15',
    team: 32,
    funding: '$12M Series A',
    investors: ['Sequoia Capital', 'Andreessen Horowitz', 'Index Ventures', 'Bessemer Venture Partners'],
    awards: ['Best Fintech Security Solution 2023', 'AI Innovation Award', 'Cybersecurity Excellence Award'],
    certifications: ['PCI DSS', 'SOC 2 Type II', 'ISO 27001', 'GDPR Certified'],
    partnerships: ['Visa', 'Mastercard', 'JPMorgan Chase', 'Bank of America'],
    caseStudies: [
      'Major Bank: 80% reduction in false positives',
      'Fintech: 90% improvement in fraud detection',
      'Credit Union: 60% cost savings in compliance'
    ],
    testimonials: [
      {
        name: 'Robert Johnson',
        company: 'Major Bank',
        role: 'Chief Risk Officer',
        quote: 'AI Financial Crime Detection Pro reduced our false positive rate by 80% while catching 90% more fraud cases.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      },
      {
        name: 'Lisa Chen',
        company: 'Fintech',
        role: 'Head of Security',
        quote: 'The real-time detection capabilities saved us from multiple potential fraud incidents. The AI is incredibly accurate.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
      }
    ],
    faq: [
      {
        question: 'How accurate is the fraud detection?',
        answer: 'Our AI models achieve 95% accuracy in fraud detection with a false positive rate of less than 0.1%.'
      },
      {
        question: 'Is the platform compliant with financial regulations?',
        answer: 'Yes, we are fully compliant with PCI DSS, SOX, AML, KYC, and other major financial regulations.'
      }
    ],
    pricingTiers: [
      {
        name: 'Starter',
        price: 1200,
        features: ['Basic fraud detection', 'Limited reporting', 'Email support'],
        popular: false
      },
      {
        name: 'Professional',
        price: 2800,
        features: ['Advanced AI features', 'Full reporting suite', 'Priority support', 'Custom models'],
        popular: true
      },
      {
        name: 'Enterprise',
        price: 5500,
        features: ['Everything in Pro', 'White-label solution', 'Dedicated support', 'Custom integrations'],
        popular: false
      }
    ],
    competitors: [
      { name: 'FICO', price: 3000, features: ['Basic fraud detection', 'Limited AI features'] },
      { name: 'SAS', price: 2500, features: ['Analytics platform', 'No real-time detection'] },
      { name: 'IBM', price: 4000, features: ['Enterprise solution', 'Complex setup'] }
    ],
    marketSize: '$12.3B',
    growthRate: '20% YoY',
    targetAudience: ['Banks', 'Fintech', 'Credit Unions', 'Insurance Companies'],
    businessModel: 'SaaS + Professional Services',
    revenueModel: 'Subscription + Implementation + Consulting',
    pricingStrategy: 'Value-based',
    valueProposition: 'Protect your financial institution with AI-powered fraud detection and compliance automation',
    uniqueSellingPoints: [
      'Most advanced financial AI platform',
      '95% fraud detection accuracy',
      'Real-time threat detection',
      'Comprehensive compliance suite'
    ],
    technicalSpecs: {
      architecture: 'Cloud-native with real-time processing',
      database: 'Graph database for transaction networks',
      hosting: 'Global cloud with edge computing',
      security: 'Bank-grade encryption, PCI DSS compliant',
      scalability: 'Millions of transactions per second',
      performance: '<50ms for fraud detection'
    },
    roadmap: [
      {
        quarter: 'Q1 2024',
        features: ['Advanced behavioral analytics', 'Cryptocurrency monitoring'],
        status: 'completed'
      },
      {
        quarter: 'Q2 2024',
        features: ['Quantum-resistant encryption', 'Advanced AI models'],
        status: 'in-progress'
      }
    ]
  }
];

export const aiServiceCategories = [
  {
    id: 'healthcare-ai',
    name: 'Healthcare AI',
    description: 'AI-powered solutions for healthcare and pharmaceutical industries',
    icon: '🏥',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    services: aiServices.filter(s => s.category === 'Healthcare AI')
  },
  {
    id: 'environmental-ai',
    name: 'Environmental AI',
    description: 'AI solutions for climate action and environmental sustainability',
    icon: '🌱',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    services: aiServices.filter(s => s.category === 'Environmental AI')
  },
  {
    id: 'space-technology',
    name: 'Space Technology',
    description: 'AI-powered space exploration and satellite management solutions',
    icon: '🚀',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    services: aiServices.filter(s => s.category === 'Space Technology')
  },
  {
    id: 'financial-ai',
    name: 'Financial AI',
    description: 'AI solutions for financial services and fraud detection',
    icon: '💰',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    services: aiServices.filter(s => s.category === 'Financial AI')
  }
];

export const getAIServiceById = (id: string): AIService | undefined => {
  return aiServices.find(service => service.id === id);
};

export const getAIServicesByCategory = (category: string): AIService[] => {
  return aiServices.filter(service => service.category.toLowerCase() === category.toLowerCase());
};

export const getPopularAIServices = (): AIService[] => {
  return aiServices.filter(service => service.popular);
};

export const getEnterpriseAIServices = (): AIService[] => {
  return aiServices.filter(service => service.enterprise);
};
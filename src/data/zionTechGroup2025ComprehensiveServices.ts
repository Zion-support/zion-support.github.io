export interface ZionService {
  id: string;
  title: string;
  description: string;
  category: 'Micro SaaS' | 'AI Solutions' | 'IT Services' | 'Cybersecurity' | 'Cloud & DevOps' | 'Digital Transformation' | 'Industry Specific' | 'Emerging Tech';
  price: string;
  billing: 'month' | 'year' | 'project' | 'hour';
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  ctaLabel: string;
  href: string;
  external?: boolean;
}

export const zionTechGroup2025Services: ZionService[] = [
  // AI-Powered Micro SaaS Solutions
  {
    id: 'ai-autonomous-business-manager',
    title: 'AI Autonomous Business Manager',
    description: 'Fully autonomous AI system that manages business operations, decision-making, and strategic planning with minimal human intervention.',
    category: 'AI Solutions',
    price: '$2,500',
    billing: 'month',
    features: [
      'Autonomous decision-making engine',
      'Real-time business intelligence',
      'Predictive analytics and forecasting',
      'Automated resource allocation',
      'Performance optimization algorithms',
      'Multi-channel communication management',
      'Risk assessment and mitigation',
      'Compliance monitoring and reporting'
    ],
    benefits: [
      '24/7 autonomous operation',
      'Data-driven decision making',
      'Reduced operational costs',
      'Improved efficiency and productivity',
      'Scalable business management',
      'Real-time insights and alerts',
      'Proactive problem resolution',
      'Continuous learning and improvement'
    ],
    useCases: [
      'Small to medium business automation',
      'E-commerce operations management',
      'Service industry optimization',
      'Startup scaling and management',
      'Multi-location business coordination'
    ],
    targetAudience: [
      'Small to medium businesses',
      'E-commerce companies',
      'Service-based organizations',
      'Startups and scale-ups',
      'Multi-location businesses'
    ],
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    ctaLabel: 'Get AI Business Manager',
    href: '/services/ai-autonomous-business-manager'
  },
  {
    id: 'ai-content-optimization-suite-pro',
    title: 'AI Content Optimization Suite Pro',
    description: 'Advanced AI-powered content creation, optimization, and distribution platform for maximum engagement and conversion.',
    category: 'AI Solutions',
    price: '$1,800',
    billing: 'month',
    features: [
      'AI content generation and optimization',
      'SEO and keyword optimization',
      'Multi-platform content distribution',
      'Performance analytics and insights',
      'A/B testing and optimization',
      'Content calendar management',
      'Social media automation',
      'ROI tracking and reporting'
    ],
    benefits: [
      'Increased content engagement',
      'Improved SEO rankings',
      'Higher conversion rates',
      'Time and cost savings',
      'Data-driven content strategy',
      'Multi-channel reach',
      'Automated optimization',
      'Measurable results'
    ],
    useCases: [
      'Digital marketing agencies',
      'E-commerce businesses',
      'Content creators and publishers',
      'B2B marketing teams',
      'Social media managers'
    ],
    targetAudience: [
      'Marketing agencies',
      'E-commerce companies',
      'Content creators',
      'B2B organizations',
      'Social media teams'
    ],
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    ctaLabel: 'Optimize Your Content',
    href: '/services/ai-content-optimization-suite'
  },
  {
    id: 'ai-customer-success-platform',
    title: 'AI Customer Success Platform',
    description: 'Intelligent customer success management system that predicts churn, automates onboarding, and maximizes customer lifetime value.',
    category: 'AI Solutions',
    price: '$2,200',
    billing: 'month',
    features: [
      'Predictive churn analysis',
      'Automated onboarding workflows',
      'Customer health scoring',
      'Personalized success plans',
      'Proactive issue detection',
      'Automated engagement campaigns',
      'Success metrics tracking',
      'Integration with CRM systems'
    ],
    benefits: [
      'Reduced customer churn',
      'Increased customer satisfaction',
      'Higher customer lifetime value',
      'Automated success processes',
      'Data-driven insights',
      'Scalable customer management',
      'Proactive problem resolution',
      'Improved retention rates'
    ],
    useCases: [
      'SaaS companies',
      'Subscription-based businesses',
      'B2B service providers',
      'E-commerce platforms',
      'Software companies'
    ],
    targetAudience: [
      'SaaS businesses',
      'Subscription companies',
      'B2B service providers',
      'E-commerce platforms',
      'Software companies'
    ],
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    ctaLabel: 'Transform Customer Success',
    href: '/services/ai-customer-success-platform'
  },
  // Cybersecurity & Compliance Solutions
  {
    id: 'zero-trust-network-architecture',
    title: 'Zero Trust Network Architecture',
    description: 'Comprehensive zero-trust security implementation with continuous verification, micro-segmentation, and advanced threat detection.',
    category: 'Cybersecurity',
    price: '$3,500',
    billing: 'month',
    features: [
      'Continuous identity verification',
      'Micro-segmentation implementation',
      'Advanced threat detection',
      'Real-time security monitoring',
      'Automated incident response',
      'Compliance reporting',
      'Security policy management',
      'Integration with existing systems'
    ],
    benefits: [
      'Enhanced security posture',
      'Reduced attack surface',
      'Compliance with regulations',
      'Real-time threat detection',
      'Automated security responses',
      'Improved audit capabilities',
      'Scalable security architecture',
      'Cost-effective protection'
    ],
    useCases: [
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'Enterprise businesses',
      'Compliance-focused industries'
    ],
    targetAudience: [
      'Financial services',
      'Healthcare organizations',
      'Government agencies',
      'Large enterprises',
      'Compliance-focused businesses'
    ],
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    ctaLabel: 'Secure Your Network',
    href: '/services/zero-trust-network-architecture'
  },
  {
    id: 'ai-cybersecurity-threat-intelligence',
    title: 'AI Cybersecurity Threat Intelligence',
    description: 'Advanced AI-powered threat intelligence platform that provides real-time threat detection, analysis, and automated response capabilities.',
    category: 'Cybersecurity',
    price: '$2,800',
    billing: 'month',
    features: [
      'AI-powered threat detection',
      'Real-time threat analysis',
      'Automated incident response',
      'Threat intelligence sharing',
      'Vulnerability assessment',
      'Security posture monitoring',
      'Compliance reporting',
      'Integration with security tools'
    ],
    benefits: [
      'Proactive threat detection',
      'Reduced response time',
      'Automated security responses',
      'Enhanced threat visibility',
      'Improved security posture',
      'Cost-effective protection',
      'Scalable security operations',
      'Compliance support'
    ],
    useCases: [
      'Enterprise security operations',
      'Managed security services',
      'Critical infrastructure protection',
      'Financial security',
      'Healthcare security'
    ],
    targetAudience: [
      'Large enterprises',
      'Managed security providers',
      'Critical infrastructure',
      'Financial institutions',
      'Healthcare organizations'
    ],
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    ctaLabel: 'Get Threat Intelligence',
    href: '/services/ai-cybersecurity-threat-intelligence'
  },
  // Cloud & DevOps Solutions
  {
    id: 'cloud-finops-optimizer',
    title: 'Cloud FinOps Optimizer',
    description: 'Intelligent cloud cost optimization platform that provides real-time cost analysis, optimization recommendations, and automated cost management.',
    category: 'Cloud & DevOps',
    price: '$1,500',
    billing: 'month',
    features: [
      'Real-time cost monitoring',
      'Automated cost optimization',
      'Resource utilization analysis',
      'Cost forecasting and budgeting',
      'Multi-cloud cost management',
      'Automated scaling policies',
      'Cost allocation and reporting',
      'Integration with cloud providers'
    ],
    benefits: [
      'Significant cost savings',
      'Improved resource utilization',
      'Better cost visibility',
      'Automated optimization',
      'Predictable cloud spending',
      'Enhanced budgeting capabilities',
      'Multi-cloud cost control',
      'ROI optimization'
    ],
    useCases: [
      'Cloud-native applications',
      'Multi-cloud environments',
      'DevOps teams',
      'Enterprise cloud users',
      'Startup cloud optimization'
    ],
    targetAudience: [
      'Cloud-native companies',
      'Multi-cloud users',
      'DevOps teams',
      'Enterprise cloud users',
      'Startups and scale-ups'
    ],
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    ctaLabel: 'Optimize Cloud Costs',
    href: '/services/cloud-finops-optimizer'
  },
  {
    id: 'ai-devops-automation-platform',
    title: 'AI DevOps Automation Platform',
    description: 'Intelligent DevOps automation platform that streamlines development workflows, automates testing, and optimizes deployment processes.',
    category: 'Cloud & DevOps',
    price: '$2,000',
    billing: 'month',
    features: [
      'Intelligent CI/CD pipelines',
      'Automated testing and QA',
      'Smart deployment strategies',
      'Performance monitoring',
      'Automated rollback capabilities',
      'Integration with development tools',
      'Real-time deployment analytics',
      'Security scanning integration'
    ],
    benefits: [
      'Faster development cycles',
      'Reduced deployment errors',
      'Improved code quality',
      'Automated quality assurance',
      'Enhanced team productivity',
      'Better deployment visibility',
      'Reduced manual intervention',
      'Improved security posture'
    ],
    useCases: [
      'Software development teams',
      'DevOps engineering teams',
      'Continuous integration workflows',
      'Automated testing processes',
      'Cloud deployment automation'
    ],
    targetAudience: [
      'Software development companies',
      'DevOps teams',
      'Engineering organizations',
      'Cloud-native companies',
      'Technology startups'
    ],
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    ctaLabel: 'Automate Your DevOps',
    href: '/services/ai-devops-automation-platform'
  },
  // Enterprise AI Solutions
  {
    id: 'ai-business-intelligence-analytics',
    title: 'AI Business Intelligence Analytics',
    description: 'Advanced AI-powered business intelligence platform that provides deep insights, predictive analytics, and automated reporting capabilities.',
    category: 'AI Solutions',
    price: '$3,000',
    billing: 'month',
    features: [
      'AI-powered data analysis',
      'Predictive analytics models',
      'Automated report generation',
      'Real-time dashboards',
      'Natural language queries',
      'Data visualization tools',
      'Integration with data sources',
      'Advanced machine learning models'
    ],
    benefits: [
      'Data-driven decision making',
      'Predictive business insights',
      'Automated reporting',
      'Real-time business visibility',
      'Improved operational efficiency',
      'Enhanced strategic planning',
      'Reduced manual analysis',
      'Scalable analytics platform'
    ],
    useCases: [
      'Enterprise analytics',
      'Business intelligence',
      'Data-driven decision making',
      'Performance monitoring',
      'Strategic planning'
    ],
    targetAudience: [
      'Large enterprises',
      'Data-driven organizations',
      'Business intelligence teams',
      'Executive leadership',
      'Analytics departments'
    ],
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    ctaLabel: 'Get Business Intelligence',
    href: '/services/ai-business-intelligence-analytics'
  },
  {
    id: 'ai-workflow-orchestrator',
    title: 'AI Workflow Orchestrator',
    description: 'Intelligent workflow automation platform that optimizes business processes, automates repetitive tasks, and improves operational efficiency.',
    category: 'AI Solutions',
    price: '$2,200',
    billing: 'month',
    features: [
      'Intelligent process automation',
      'Workflow optimization',
      'Task automation',
      'Process monitoring',
      'Performance analytics',
      'Integration with business systems',
      'Custom workflow creation',
      'Real-time process insights'
    ],
    benefits: [
      'Increased operational efficiency',
      'Reduced manual errors',
      'Faster process completion',
      'Improved resource utilization',
      'Enhanced process visibility',
      'Scalable automation',
      'Cost savings',
      'Better compliance'
    ],
    useCases: [
      'Business process automation',
      'Workflow optimization',
      'Task automation',
      'Process monitoring',
      'Operational efficiency'
    ],
    targetAudience: [
      'Business operations teams',
      'Process improvement teams',
      'Operations managers',
      'Business analysts',
      'Efficiency-focused organizations'
    ],
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    ctaLabel: 'Orchestrate Your Workflows',
    href: '/services/ai-workflow-orchestrator'
  },
  // Industry-Specific Solutions
  {
    id: 'ai-healthcare-analytics-platform',
    title: 'AI Healthcare Analytics Platform',
    description: 'Specialized AI platform for healthcare analytics, patient insights, and clinical decision support with HIPAA compliance.',
    category: 'Industry Specific',
    price: '$4,000',
    billing: 'month',
    features: [
      'HIPAA-compliant analytics',
      'Patient outcome prediction',
      'Clinical decision support',
      'Healthcare performance metrics',
      'Population health analytics',
      'Risk assessment models',
      'Integration with EHR systems',
      'Compliance reporting'
    ],
    benefits: [
      'Improved patient outcomes',
      'Enhanced clinical decisions',
      'Better resource allocation',
      'Reduced healthcare costs',
      'Compliance with regulations',
      'Data-driven healthcare',
      'Population health insights',
      'Risk mitigation'
    ],
    useCases: [
      'Healthcare organizations',
      'Hospitals and clinics',
      'Medical research',
      'Population health management',
      'Clinical decision support'
    ],
    targetAudience: [
      'Healthcare organizations',
      'Hospitals and clinics',
      'Medical research institutions',
      'Population health managers',
      'Clinical teams'
    ],
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    ctaLabel: 'Transform Healthcare Analytics',
    href: '/services/ai-healthcare-analytics-platform'
  },
  {
    id: 'ai-financial-risk-management',
    title: 'AI Financial Risk Management',
    description: 'Advanced AI platform for financial risk assessment, fraud detection, and regulatory compliance in financial services.',
    category: 'Industry Specific',
    price: '$3,500',
    billing: 'month',
    features: [
      'Real-time risk assessment',
      'Fraud detection algorithms',
      'Regulatory compliance monitoring',
      'Portfolio risk analysis',
      'Market risk modeling',
      'Credit risk assessment',
      'Integration with financial systems',
      'Compliance reporting'
    ],
    benefits: [
      'Enhanced risk visibility',
      'Improved fraud detection',
      'Regulatory compliance',
      'Better risk management',
      'Reduced financial losses',
      'Automated compliance',
      'Real-time risk monitoring',
      'Data-driven decisions'
    ],
    useCases: [
      'Banks and financial institutions',
      'Investment firms',
      'Insurance companies',
      'Credit unions',
      'Financial services providers'
    ],
    targetAudience: [
      'Financial institutions',
      'Investment firms',
      'Insurance companies',
      'Credit unions',
      'Financial services'
    ],
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    ctaLabel: 'Manage Financial Risk',
    href: '/services/ai-financial-risk-management'
  },
  // Emerging Technology Solutions
  {
    id: 'quantum-computing-platform',
    title: 'Quantum Computing Platform',
    description: 'Next-generation quantum computing platform for complex problem-solving, optimization, and advanced computational tasks.',
    category: 'Emerging Tech',
    price: '$5,000',
    billing: 'month',
    features: [
      'Quantum algorithm optimization',
      'Complex problem solving',
      'Quantum machine learning',
      'Cryptography applications',
      'Optimization algorithms',
      'Quantum simulation',
      'Integration with classical systems',
      'Advanced computational capabilities'
    ],
    benefits: [
      'Exponential computational power',
      'Advanced problem solving',
      'Quantum advantage',
      'Future-proof technology',
      'Competitive edge',
      'Innovation leadership',
      'Research capabilities',
      'Strategic advantage'
    ],
    useCases: [
      'Research institutions',
      'Technology companies',
      'Financial services',
      'Pharmaceutical research',
      'Advanced computing'
    ],
    targetAudience: [
      'Research institutions',
      'Technology companies',
      'Financial services',
      'Pharmaceutical companies',
      'Advanced computing users'
    ],
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    ctaLabel: 'Access Quantum Computing',
    href: '/services/quantum-computing-platform'
  },
  {
    id: 'blockchain-web3-solutions',
    title: 'Blockchain & Web3 Solutions',
    description: 'Comprehensive blockchain and Web3 platform for decentralized applications, smart contracts, and digital asset management.',
    category: 'Emerging Tech',
    price: '$3,200',
    billing: 'month',
    features: [
      'Smart contract development',
      'DeFi platform integration',
      'NFT marketplace solutions',
      'Blockchain infrastructure',
      'Web3 application development',
      'Digital asset management',
      'Cross-chain interoperability',
      'Security and compliance'
    ],
    benefits: [
      'Decentralized solutions',
      'Enhanced security',
      'Transparent operations',
      'Innovation leadership',
      'Cost reduction',
      'Automated processes',
      'Global accessibility',
      'Future-ready technology'
    ],
    useCases: [
      'DeFi applications',
      'NFT marketplaces',
      'Supply chain tracking',
      'Digital identity',
      'Decentralized finance'
    ],
    targetAudience: [
      'Fintech companies',
      'Digital asset platforms',
      'Supply chain companies',
      'Identity verification services',
      'Innovation-focused businesses'
    ],
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    ctaLabel: 'Build Web3 Solutions',
    href: '/services/blockchain-web3-solutions'
  }
];

export const getServicesByCategory = (category: ZionService['category']) => {
  return zionTechGroup2025Services.filter(service => service.category === category);
};

export const getServicesByPriceRange = (minPrice: number, maxPrice: number) => {
  return zionTechGroup2025Services.filter(service => {
    const price = parseInt(service.price.replace(/[^0-9]/g, ''));
    return price >= minPrice && price <= maxPrice;
  });
};

export const searchServices = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return zionTechGroup2025Services.filter(service =>
    service.title.toLowerCase().includes(lowercaseQuery) ||
    service.description.toLowerCase().includes(lowercaseQuery) ||
    service.category.toLowerCase().includes(lowercaseQuery) ||
    service.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
  );
};
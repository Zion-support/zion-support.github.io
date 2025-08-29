export type PricingTier = {
  name: string;
  price: string;
  billing: 'month' | 'year' | 'project' | 'hour';
  features: string[];
  bestFor: string;
  popular?: boolean;
  savings?: string;
};

export type ServicePricing = {
  id: string;
  title: string;
  category: string;
  description: string;
  basePrice: string;
  pricingModel: string;
  tiers: PricingTier[];
  marketPosition: string;
  competitiveAdvantage: string;
  roi: string;
  implementationTime: string;
  supportLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
};

export const comprehensivePricingGuide2025: ServicePricing[] = [
  {
    id: 'ai-predictive-analytics-engine',
    title: 'AI Predictive Analytics Engine',
    category: 'AI Solutions',
    description: 'Advanced predictive analytics platform using machine learning to forecast business trends, customer behavior, and market opportunities with 95%+ accuracy.',
    basePrice: '$1,999',
    pricingModel: 'Monthly subscription with usage-based scaling',
    tiers: [
      {
        name: 'Starter',
        price: '$1,999',
        billing: 'month',
        features: [
          'Up to 100K data points per month',
          'Basic forecasting models',
          'Standard dashboards',
          'Email support',
          'API access (1K calls/month)',
          'Basic integrations'
        ],
        bestFor: 'Small to medium businesses starting with predictive analytics'
      },
      {
        name: 'Professional',
        price: '$4,999',
        billing: 'month',
        features: [
          'Up to 1M data points per month',
          'Advanced ML models',
          'Custom dashboards',
          'Priority support',
          'API access (10K calls/month)',
          'Advanced integrations',
          'Custom model training'
        ],
        bestFor: 'Growing businesses with established data practices',
        popular: true
      },
      {
        name: 'Enterprise',
        price: '$12,999',
        billing: 'month',
        features: [
          'Unlimited data points',
          'Custom ML algorithms',
          'White-label dashboards',
          'Dedicated success manager',
          'Unlimited API access',
          'Full integration suite',
          'On-premise deployment',
          'Custom development'
        ],
        bestFor: 'Large enterprises requiring custom solutions',
        savings: 'Save 20% with annual billing'
      }
    ],
    marketPosition: 'Enterprise-grade predictive analytics with industry-leading accuracy',
    competitiveAdvantage: 'Proprietary ML algorithms trained on 10M+ business datasets',
    roi: '300-500% within 12 months',
    implementationTime: '4-8 weeks',
    supportLevel: '24/7 dedicated support with dedicated success manager',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-threat-hunting-platform',
    title: 'AI Threat Hunting Platform',
    category: 'Cybersecurity',
    description: 'Proactive threat hunting platform that uses AI to detect, analyze, and respond to advanced cyber threats before they cause damage.',
    basePrice: '$3,999',
    pricingModel: 'Monthly subscription with security assessment included',
    tiers: [
      {
        name: 'Standard',
        price: '$3,999',
        billing: 'month',
        features: [
          'Up to 10K endpoints',
          'Basic threat detection',
          'Standard playbooks',
          'Email support',
          'Basic reporting',
          'Core integrations'
        ],
        bestFor: 'Medium businesses with basic security needs'
      },
      {
        name: 'Advanced',
        price: '$7,999',
        billing: 'month',
        features: [
          'Up to 100K endpoints',
          'Advanced AI detection',
          'Custom playbooks',
          'Priority support',
          'Advanced reporting',
          'Full integration suite',
          'Threat intelligence feeds'
        ],
        bestFor: 'Large enterprises with advanced security requirements',
        popular: true
      },
      {
        name: 'Ultimate',
        price: '$19,999',
        billing: 'month',
        features: [
          'Unlimited endpoints',
          'Custom AI models',
          'White-label solution',
          'Dedicated SOC team',
          'Custom reporting',
          'Full customization',
          'On-premise deployment',
          '24/7 monitoring'
        ],
        bestFor: 'Fortune 500 companies and government agencies',
        savings: 'Save 25% with annual billing'
      }
    ],
    marketPosition: 'Enterprise-grade threat hunting with AI-powered automation',
    competitiveAdvantage: 'Proprietary AI algorithms trained on 100M+ threat indicators',
    roi: '500-800% through threat prevention and incident cost reduction',
    implementationTime: '6-12 weeks',
    supportLevel: '24/7 security operations center support',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'quantum-computing-as-a-service',
    title: 'Quantum Computing as a Service',
    category: 'Quantum Computing',
    description: 'Access to quantum computing resources and algorithms for solving complex computational problems.',
    basePrice: '$9,999',
    pricingModel: 'Monthly subscription with quantum processing units (QPUs) allocation',
    tiers: [
      {
        name: 'Research',
        price: '$9,999',
        billing: 'month',
        features: [
          'Up to 100 QPU hours/month',
          'Basic quantum algorithms',
          'Standard support',
          'Research collaboration',
          'Basic training',
          'API access'
        ],
        bestFor: 'Research institutions and academic organizations'
      },
      {
        name: 'Commercial',
        price: '$24,999',
        billing: 'month',
        features: [
          'Up to 500 QPU hours/month',
          'Advanced algorithms',
          'Priority support',
          'Custom development',
          'Advanced training',
          'Full API access',
          'Performance optimization'
        ],
        bestFor: 'Commercial organizations exploring quantum computing',
        popular: true
      },
      {
        name: 'Enterprise',
        price: '$49,999',
        billing: 'month',
        features: [
          'Unlimited QPU access',
          'Custom algorithms',
          'Dedicated quantum experts',
          'Full customization',
          'Premium training',
          'White-label solution',
          'On-premise quantum access'
        ],
        bestFor: 'Large enterprises requiring quantum advantage',
        savings: 'Save 30% with annual billing'
      }
    ],
    marketPosition: 'Leading quantum computing service provider',
    competitiveAdvantage: 'Proprietary quantum algorithms and error correction techniques',
    roi: '1000-2000% for research and development applications',
    implementationTime: '8-16 weeks',
    supportLevel: 'Quantum computing experts with dedicated support',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'autonomous-logistics-platform',
    title: 'Autonomous Logistics Platform',
    category: 'Autonomous Systems',
    description: 'Intelligent logistics platform that autonomously manages supply chains, warehouse operations, and delivery systems using AI and robotics.',
    basePrice: '$12,999',
    pricingModel: 'Monthly subscription with robotics hardware costs separate',
    tiers: [
      {
        name: 'Warehouse',
        price: '$12,999',
        billing: 'month',
        features: [
          'Up to 10K sq ft warehouse',
          'Basic robotics integration',
          'Standard optimization',
          'Email support',
          'Basic analytics',
          'Core integrations'
        ],
        bestFor: 'Small to medium warehouses starting automation'
      },
      {
        name: 'Distribution',
        price: '$24,999',
        billing: 'month',
        features: [
          'Up to 100K sq ft warehouse',
          'Advanced robotics',
          'AI optimization',
          'Priority support',
          'Advanced analytics',
          'Full integration suite',
          'Multi-warehouse coordination'
        ],
        bestFor: 'Large distribution centers with multiple locations',
        popular: true
      },
      {
        name: 'Enterprise',
        price: '$49,999',
        billing: 'month',
        features: [
          'Unlimited warehouse size',
          'Custom robotics solutions',
          'Full AI optimization',
          'Dedicated robotics engineers',
          'Custom analytics',
          'Full customization',
          'Global deployment',
          '24/7 operational support'
        ],
        bestFor: 'Global enterprises with complex logistics networks',
        savings: 'Save 25% with annual billing'
      }
    ],
    marketPosition: 'Leading autonomous logistics platform for enterprise operations',
    competitiveAdvantage: 'Proprietary AI algorithms with 10+ years of logistics optimization experience',
    roi: '400-600% through operational efficiency and cost reduction',
    implementationTime: '12-24 weeks',
    supportLevel: 'Dedicated robotics engineers with 24/7 operational support',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'enterprise-metaverse-platform',
    title: 'Enterprise Metaverse Platform',
    category: 'Metaverse & AR/VR',
    description: 'Corporate metaverse platform for virtual meetings, training, collaboration, and immersive business experiences.',
    basePrice: '$8,999',
    pricingModel: 'Monthly subscription with user-based scaling',
    tiers: [
      {
        name: 'Business',
        price: '$8,999',
        billing: 'month',
        features: [
          'Up to 1K concurrent users',
          'Basic virtual spaces',
          'Standard avatars',
          'Email support',
          'Basic analytics',
          'Core integrations'
        ],
        bestFor: 'Medium businesses exploring virtual collaboration'
      },
      {
        name: 'Corporate',
        price: '$16,999',
        billing: 'month',
        features: [
          'Up to 10K concurrent users',
          'Advanced virtual environments',
          'Custom avatars',
          'Priority support',
          'Advanced analytics',
          'Full integration suite',
          'Custom branding',
          'Training environments'
        ],
        bestFor: 'Large corporations with distributed teams',
        popular: true
      },
      {
        name: 'Global',
        price: '$34,999',
        billing: 'month',
        features: [
          'Unlimited concurrent users',
          'Full customization',
          'White-label solution',
          'Dedicated success team',
          'Custom analytics',
          'Full customization',
          'Multi-language support',
          'Global deployment'
        ],
        bestFor: 'Global enterprises requiring virtual presence',
        savings: 'Save 20% with annual billing'
      }
    ],
    marketPosition: 'Leading enterprise metaverse platform for business applications',
    competitiveAdvantage: 'Proprietary 3D rendering engine with enterprise-grade security',
    roi: '200-400% through travel cost reduction and productivity improvement',
    implementationTime: '6-12 weeks',
    supportLevel: 'Metaverse specialists with dedicated success management',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'satellite-data-analytics',
    title: 'Satellite Data Analytics Platform',
    category: 'Space Tech',
    description: 'Advanced platform for processing, analyzing, and deriving insights from satellite imagery and space data.',
    basePrice: '$19,999',
    pricingModel: 'Monthly subscription with data processing volume tiers',
    tiers: [
      {
        name: 'Research',
        price: '$19,999',
        billing: 'month',
        features: [
          'Up to 100GB data/month',
          'Basic analytics',
          'Standard support',
          'Research collaboration',
          'Basic training',
          'Core APIs'
        ],
        bestFor: 'Research institutions and academic organizations'
      },
      {
        name: 'Commercial',
        price: '$39,999',
        billing: 'month',
        features: [
          'Up to 1TB data/month',
          'Advanced analytics',
          'Priority support',
          'Custom algorithms',
          'Advanced training',
          'Full API access',
          'Custom reporting'
        ],
        bestFor: 'Commercial organizations requiring satellite insights',
        popular: true
      },
      {
        name: 'Enterprise',
        price: '$79,999',
        billing: 'month',
        features: [
          'Unlimited data processing',
          'Custom analytics',
          'Dedicated space experts',
          'Full customization',
          'Premium training',
          'White-label solution',
          'On-premise deployment',
          'Custom satellite access'
        ],
        bestFor: 'Large enterprises requiring comprehensive space data',
        savings: 'Save 30% with annual billing'
      }
    ],
    marketPosition: 'Leading satellite data analytics platform for enterprise applications',
    competitiveAdvantage: 'Proprietary AI algorithms with access to multiple satellite constellations',
    roi: '800-1500% for applications requiring global data coverage',
    implementationTime: '10-20 weeks',
    supportLevel: 'Space technology experts with dedicated support',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-healthcare-diagnostics',
    title: 'AI Healthcare Diagnostics Platform',
    category: 'BioTech & Health',
    description: 'Advanced AI-powered healthcare diagnostics platform that provides accurate medical imaging analysis and diagnostic support.',
    basePrice: '$7,999',
    pricingModel: 'Monthly subscription with per-study pricing for high-volume users',
    tiers: [
      {
        name: 'Clinical',
        price: '$7,999',
        billing: 'month',
        features: [
          'Up to 1K studies/month',
          'Basic diagnostic models',
          'Standard support',
          'Basic training',
          'Core integrations',
          'Compliance tools'
        ],
        bestFor: 'Small to medium healthcare practices'
      },
      {
        name: 'Hospital',
        price: '$14,999',
        billing: 'month',
        features: [
          'Up to 10K studies/month',
          'Advanced diagnostic models',
          'Priority support',
          'Advanced training',
          'Full integration suite',
          'Custom workflows',
          'Performance analytics'
        ],
        bestFor: 'Large hospitals and healthcare systems',
        popular: true
      },
      {
        name: 'Enterprise',
        price: '$29,999',
        billing: 'month',
        features: [
          'Unlimited studies',
          'Custom diagnostic models',
          'Dedicated clinical support',
          'Full customization',
          'Premium training',
          'White-label solution',
          'On-premise deployment',
          'Custom development'
        ],
        bestFor: 'Large healthcare networks and research institutions',
        savings: 'Save 25% with annual billing'
      }
    ],
    marketPosition: 'Leading AI healthcare diagnostics platform',
    competitiveAdvantage: 'FDA-cleared AI models with 99%+ accuracy rates',
    roi: '1000-2000% through improved diagnostic accuracy and patient outcomes',
    implementationTime: '16-32 weeks including FDA clearance',
    supportLevel: 'Healthcare AI specialists with clinical support',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-financial-trading',
    title: 'AI Financial Trading Platform',
    category: 'FinTech & DeFi',
    description: 'Intelligent financial trading platform that uses AI to analyze market data and execute trades with optimal timing and risk management.',
    basePrice: '$8,999',
    pricingModel: 'Monthly subscription with performance-based fees',
    tiers: [
      {
        name: 'Professional',
        price: '$8,999',
        billing: 'month',
        features: [
          'Basic trading algorithms',
          'Risk management',
          'Standard support',
          'Basic analytics',
          'Core integrations',
          'Compliance tools'
        ],
        bestFor: 'Professional traders and small funds'
      },
      {
        name: 'Institutional',
        price: '$16,999',
        billing: 'month',
        features: [
          'Advanced trading algorithms',
          'Advanced risk management',
          'Priority support',
          'Advanced analytics',
          'Full integration suite',
          'Custom strategies',
          'Performance optimization'
        ],
        bestFor: 'Institutional investors and hedge funds',
        popular: true
      },
      {
        name: 'Enterprise',
        price: '$32,999',
        billing: 'month',
        features: [
          'Custom algorithms',
          'Full customization',
          'Dedicated trading experts',
          'Premium analytics',
          'White-label solution',
          'On-premise deployment',
          'Custom development',
          '24/7 trading support'
        ],
        bestFor: 'Large financial institutions and investment banks',
        savings: 'Save 20% with annual billing'
      }
    ],
    marketPosition: 'Advanced AI trading platform for institutional investors',
    competitiveAdvantage: 'Proprietary AI algorithms with 15+ years of market data training',
    roi: '500-1000% through improved trading performance and risk reduction',
    implementationTime: '12-24 weeks including regulatory compliance',
    supportLevel: 'Financial technology experts with 24/7 support',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  }
];

export default comprehensivePricingGuide2025;
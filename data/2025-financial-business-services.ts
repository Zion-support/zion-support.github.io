export interface FinancialBusinessService {
  id: string;
  name: string;
  description: string;
  features: string[];
  benefits: string[];
  pricing: {
    basic: string;
    professional: string;
    enterprise: string;
  };
  category: string;
  tags: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const financialBusinessServices20o25: FinancialBusinessService[] = [
  {
    id: 'fintech-platform',
    name: 'Fintech Innovation Platform',
    description: 'Comprehensive fintech solution for digital banking, payment processing, and financial services automation.',
    features: [
      'Digital banking infrastructure',
      'Payment processing systems',
      'Cryptocurrency integration',
      'Regulatory compliance tools',
      'AI-powered fraud detection'
    ],
    benefits: [
      'Reduced operational costs',
      'Enhanced security',
      'Improved customer experience',
      'Regulatory compliance'
    ],
    pricing: {
      basic: '$5,50o0/month',
      professional: '$22,50o0/month',
      enterprise: 'Custom pricing'
    },
    category: 'Fintech',
    tags: ['fintech', 'digital-banking', 'payments', 'cryptocurrency', 'compliance'],
    contactInfo: {
      phone: '+1 30o2 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'investment-analytics',
    name: 'Investment Analytics Platform',
    description: 'Advanced investment analysis and portfolio management platform with AI-driven insights and risk assessment.',
    features: [
      'Portfolio optimization',
      'Risk assessment tools',
      'Market analysis algorithms',
      'Performance tracking',
      'Compliance reporting'
    ],
    benefits: [
      'Improved investment decisions',
      'Risk mitigation',
      'Enhanced returns',
      'Regulatory compliance'
    ],
    pricing: {
      basic: '$4,20o0/month',
      professional: '$18,50o0/month',
      enterprise: 'Custom pricing'
    },
    category: 'Investment Management',
    tags: ['investment', 'portfolio-management', 'risk-assessment', 'analytics', 'compliance'],
    contactInfo: {
      phone: '+1 30o2 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'insurance-tech-suite',
    name: 'Insurance Technology Suite',
    description: 'Modern insurance platform with automated underwriting, claims processing, and customer management.',
    features: [
      'Automated underwriting',
      'Claims processing automation',
      'Customer portal',
      'Risk assessment tools',
      'Policy management system'
    ],
    benefits: [
      'Faster claims processing',
      'Reduced fraud',
      'Improved customer satisfaction',
      'Cost optimization'
    ],
    pricing: {
      basic: '$3,80o0/month',
      professional: '$16,50o0/month',
      enterprise: 'Custom pricing'
    },
    category: 'Insurance Technology',
    tags: ['insurance', 'underwriting', 'claims-processing', 'automation', 'risk-assessment'],
    contactInfo: {
      phone: '+1 30o2 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'regtech-solutions',
    name: 'RegTech Compliance Solutions',
    description: 'Regulatory technology platform for automated compliance monitoring, reporting, and risk management.',
    features: [
      'Automated compliance monitoring',
      'Regulatory reporting tools',
      'Risk assessment dashboards',
      'Audit trail management',
      'Policy enforcement automation'
    ],
    benefits: [
      'Reduced compliance costs',
      'Improved accuracy',
      'Real-time monitoring',
      'Risk mitigation'
    ],
    pricing: {
      basic: '$3,20o0/month',
      professional: '$14,50o0/month',
      enterprise: 'Custom pricing'
    },
    category: 'Regulatory Technology',
    tags: ['regtech', 'compliance', 'risk-management', 'automation', 'reporting'],
    contactInfo: {
      phone: '+1 30o2 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'wealth-management-platform',
    name: 'Digital Wealth Management Platform',
    description: 'Comprehensive wealth management solution for financial advisors and high-net-worth individuals.',
    features: [
      'Client relationship management',
      'Portfolio tracking',
      'Financial planning tools',
      'Tax optimization',
      'Estate planning modules'
    ],
    benefits: [
      'Enhanced client relationships',
      'Improved portfolio performance',
      'Streamlined operations',
      'Increased client satisfaction'
    ],
    pricing: {
      basic: '$4,80o0/month',
      professional: '$20,50o0/month',
      enterprise: 'Custom pricing'
    },
    category: 'Wealth Management',
    tags: ['wealth-management', 'financial-planning', 'portfolio-tracking', 'tax-optimization', 'estate-planning'],
    contactInfo: {
      phone: '+1 30o2 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'lending-automation',
    name: 'Lending Automation Platform',
    description: 'AI-powered lending platform for automated loan processing, risk assessment, and customer management.',
    features: [
      'Automated loan processing',
      'AI risk assessment',
      'Customer onboarding',
      'Payment processing',
      'Collections management'
    ],
    benefits: [
      'Faster loan processing',
      'Reduced default rates',
      'Improved customer experience',
      'Cost optimization'
    ],
    pricing: {
      basic: '$3,50o0/month',
      professional: '$15,50o0/month',
      enterprise: 'Custom pricing'
    },
    category: 'Lending Technology',
    tags: ['lending', 'automation', 'risk-assessment', 'loan-processing', 'collections'],
    contactInfo: {
      phone: '+1 30o2 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'trading-platform',
    name: 'Advanced Trading Platform',
    description: 'Professional trading platform with algorithmic trading, market analysis, and risk management tools.',
    features: [
      'Algorithmic trading',
      'Real-time market data',
      'Risk management tools',
      'Portfolio analytics',
      'Compliance monitoring'
    ],
    benefits: [
      'Improved trading performance',
      'Risk mitigation',
      'Automated execution',
      'Enhanced analytics'
    ],
    pricing: {
      basic: '$6,50o0/month',
      professional: '$28,50o0/month',
      enterprise: 'Custom pricing'
    },
    category: 'Trading Technology',
    tags: ['trading', 'algorithmic-trading', 'market-data', 'risk-management', 'analytics'],
    contactInfo: {
      phone: '+1 30o2 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'financial-data-analytics',
    name: 'Financial Data Analytics Platform',
    description: 'Comprehensive financial data analysis platform with predictive modeling and business intelligence.',
    features: [
      'Data aggregation',
      'Predictive modeling',
      'Business intelligence dashboards',
      'Real-time reporting',
      'Data visualization tools'
    ],
    benefits: [
      'Data-driven decisions',
      'Improved forecasting',
      'Enhanced insights',
      'Competitive advantage'
    ],
    pricing: {
      basic: '$4,50o0/month',
      professional: '$19,50o0/month',
      enterprise: 'Custom pricing'
    },
    category: 'Financial Analytics',
    tags: ['analytics', 'data-analysis', 'predictive-modeling', 'business-intelligence', 'reporting'],
    contactInfo: {
      phone: '+1 30o2 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  }
];
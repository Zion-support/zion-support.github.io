import { ProductListing } from "@/types/listings";

// Comprehensive Pricing Guide 2030 - Zion Tech Group
// Transparent pricing for all services with market comparisons and ROI analysis

export interface PricingTier {
  name: string;
  price: number;
  monthlyPrice: number;
  description: string;
  features: string[];
  bestFor: string;
  setupTime: string;
  support: string;
  roi: string;
}

export interface ServicePricing {
  serviceId: string;
  serviceName: string;
  category: string;
  marketPrice: string;
  ourPrice: string;
  savings: string;
  pricingTiers: PricingTier[];
  competitors: string[];
  valueProposition: string;
  roi: string;
  setupTime: string;
  support: string;
}

export const COMPREHENSIVE_PRICING_2030: ServicePricing[] = [
  {
    serviceId: 'ai-autonomous-research-assistant-2030',
    serviceName: 'AI Autonomous Research Assistant 2030',
    category: 'AI & Research',
    marketPrice: '$5,000 - $15,000',
    ourPrice: '$2,499',
    savings: '50-83%',
    pricingTiers: [
      {
        name: 'Starter',
        price: 2499,
        monthlyPrice: 249,
        description: 'Perfect for small research teams and startups',
        features: [
          'Autonomous market research and analysis',
          'Real-time competitive intelligence',
          'Predictive trend forecasting',
          'Basic dashboard and reporting',
          'Email support',
          'Up to 5 research projects'
        ],
        bestFor: 'Startups, small research teams, individual researchers',
        setupTime: '2-4 weeks',
        support: 'Email support + documentation',
        roi: '800%'
      },
      {
        name: 'Professional',
        price: 4999,
        monthlyPrice: 499,
        description: 'Ideal for growing research organizations',
        features: [
          'Everything in Starter',
          'Custom research methodology creation',
          'Multi-language research capabilities',
          'Integration with 50+ data sources',
          'Advanced analytics and insights',
          'Priority support',
          'Up to 25 research projects'
        ],
        bestFor: 'Medium research organizations, consulting firms',
        setupTime: '3-5 weeks',
        support: 'Priority support + dedicated specialist',
        roi: '1000%'
      },
      {
        name: 'Enterprise',
        price: 9999,
        monthlyPrice: 999,
        description: 'For large research organizations with complex needs',
        features: [
          'Everything in Professional',
          'Custom dashboard development',
          'API access for enterprise integration',
          'White-label solutions',
          'Dedicated account manager',
          '24/7 support',
          'Unlimited research projects'
        ],
        bestFor: 'Large research organizations, investment companies',
        setupTime: '4-6 weeks',
        support: '24/7 support + dedicated account manager',
        roi: '1200%'
      }
    ],
    competitors: ['Bloomberg Terminal ($24,000/year)', 'Mintel ($15,000/year)', 'IBISWorld ($12,000/year)'],
    valueProposition: 'Fully autonomous operation with 90% time reduction and predictive capabilities',
    roi: '800-1200%',
    setupTime: '2-6 weeks',
    support: 'Email to 24/7 support based on tier'
  },
  {
    serviceId: 'ai-ethical-governance-platform-2030',
    serviceName: 'AI Ethical Governance Platform 2030',
    category: 'AI & Operations',
    marketPrice: '$8,000 - $25,000',
    ourPrice: '$3,999',
    savings: '50-84%',
    pricingTiers: [
      {
        name: 'Basic',
        price: 3999,
        monthlyPrice: 399,
        description: 'Essential AI governance for small organizations',
        features: [
          'AI bias detection and mitigation',
          'Basic ethical AI framework',
          'Compliance monitoring',
          'Risk assessment tools',
          'Email support',
          'Up to 10 AI models'
        ],
        bestFor: 'Small AI teams, startups, growing companies',
        setupTime: '3-6 weeks',
        support: 'Email support + documentation',
        roi: '650%'
      },
      {
        name: 'Professional',
        price: 7999,
        monthlyPrice: 799,
        description: 'Comprehensive governance for medium organizations',
        features: [
          'Everything in Basic',
          'Advanced ethical AI framework',
          'Real-time compliance alerts',
          'Stakeholder communication platform',
          'AI ethics training modules',
          'Priority support',
          'Up to 50 AI models'
        ],
        bestFor: 'Medium AI organizations, healthcare, finance',
        setupTime: '4-8 weeks',
        support: 'Priority support + dedicated specialist',
        roi: '800%'
      },
      {
        name: 'Enterprise',
        price: 15999,
        monthlyPrice: 1599,
        description: 'Enterprise-grade governance for large organizations',
        features: [
          'Everything in Professional',
          'Custom policy templates',
          'Advanced audit trails',
          'White-label solutions',
          'Dedicated compliance specialist',
          '24/7 support',
          'Unlimited AI models'
        ],
        bestFor: 'Large enterprises, government agencies, regulated industries',
        setupTime: '6-10 weeks',
        support: '24/7 support + dedicated compliance specialist',
        roi: '1000%'
      }
    ],
    competitors: ['IBM AI Fairness 360 ($15,000/year)', 'Microsoft Responsible AI ($20,000/year)', 'Google AI Principles ($18,000/year)'],
    valueProposition: 'Comprehensive governance framework with real-time monitoring and automated compliance',
    roi: '650-1000%',
    setupTime: '3-10 weeks',
    support: 'Email to 24/7 support based on tier'
  },
  {
    serviceId: 'quantum-ai-trading-platform-2030',
    serviceName: 'Quantum AI Trading Platform 2030',
    category: 'AI & FinTech',
    marketPrice: '$25,000 - $100,000',
    ourPrice: '$5,999',
    savings: '76-94%',
    pricingTiers: [
      {
        name: 'Professional',
        price: 5999,
        monthlyPrice: 599,
        description: 'Advanced trading platform for professional traders',
        features: [
          'Quantum-enhanced market prediction',
          'AI-powered risk management',
          'Real-time market analysis',
          'Basic trading strategies',
          'Portfolio optimization',
          'Email support',
          'Up to 5 trading accounts'
        ],
        bestFor: 'Professional traders, small hedge funds, investment firms',
        setupTime: '4-8 weeks',
        support: 'Email support + documentation',
        roi: '1200%'
      },
      {
        name: 'Institutional',
        price: 14999,
        monthlyPrice: 1499,
        description: 'Institutional-grade platform for large organizations',
        features: [
          'Everything in Professional',
          'Advanced trading strategies',
          'Multi-exchange connectivity',
          'Custom strategy builder',
          'Advanced risk analytics',
          'Priority support',
          'Up to 25 trading accounts'
        ],
        bestFor: 'Hedge funds, investment banks, institutional investors',
        setupTime: '6-12 weeks',
        support: 'Priority support + dedicated specialist',
        roi: '1500%'
      },
      {
        name: 'Enterprise',
        price: 29999,
        monthlyPrice: 2999,
        description: 'Enterprise platform with custom development',
        features: [
          'Everything in Institutional',
          'Custom algorithm development',
          'White-label solutions',
          'Dedicated trading specialist',
          '24/7 market support',
          'SLA guarantees',
          'Unlimited trading accounts'
        ],
        bestFor: 'Large investment banks, sovereign wealth funds, major exchanges',
        setupTime: '8-16 weeks',
        support: '24/7 support + dedicated trading specialist',
        roi: '2000%'
      }
    ],
    competitors: ['Bloomberg Terminal ($24,000/year)', 'Thomson Reuters ($18,000/year)', 'FactSet ($15,000/year)'],
    valueProposition: 'Quantum computing integration with AI-powered predictions and real-time execution',
    roi: '1200-2000%',
    setupTime: '4-16 weeks',
    support: 'Email to 24/7 support based on tier'
  },
  {
    serviceId: 'enterprise-cloud-migration-2030',
    serviceName: 'Enterprise Cloud Migration & Optimization 2030',
    category: 'Cloud & DevOps',
    marketPrice: '$50,000 - $200,000',
    ourPrice: '$25,000',
    savings: '50-87%',
    pricingTiers: [
      {
        name: 'Standard Migration',
        price: 25000,
        monthlyPrice: 2500,
        description: 'Complete cloud migration for medium enterprises',
        features: [
          'Legacy system assessment and planning',
          'Multi-cloud strategy development',
          'Zero-downtime migration execution',
          'Performance optimization',
          'Security implementation',
          'Basic training and support',
          'Up to 100 servers'
        ],
        bestFor: 'Medium enterprises, growing companies, digital transformation',
        setupTime: '8-16 weeks',
        support: 'Email support + documentation',
        roi: '400%'
      },
      {
        name: 'Advanced Migration',
        price: 50000,
        monthlyPrice: 5000,
        description: 'Advanced migration with custom optimization',
        features: [
          'Everything in Standard',
          'Custom optimization algorithms',
          'Advanced security features',
          'Disaster recovery setup',
          'Performance monitoring',
          'Priority support',
          'Up to 500 servers'
        ],
        bestFor: 'Large enterprises, government agencies, healthcare',
        setupTime: '12-24 weeks',
        support: 'Priority support + dedicated specialist',
        roi: '500%'
      },
      {
        name: 'Enterprise Migration',
        price: 100000,
        monthlyPrice: 10000,
        description: 'Enterprise migration with full customization',
        features: [
          'Everything in Advanced',
          'Custom cloud architecture',
          'White-label solutions',
          'Dedicated account manager',
          '24/7 support and monitoring',
          'SLA guarantees',
          'Unlimited servers'
        ],
        bestFor: 'Fortune 500 companies, major government agencies, global enterprises',
        setupTime: '16-32 weeks',
        support: '24/7 support + dedicated account manager',
        roi: '600%'
      }
    ],
    competitors: ['AWS Professional Services ($100,000+)', 'Microsoft Consulting Services ($80,000+)', 'Google Cloud Professional Services ($75,000+)'],
    valueProposition: 'Zero-downtime migration with AI-powered optimization and comprehensive support',
    roi: '400-600%',
    setupTime: '8-32 weeks',
    support: 'Email to 24/7 support based on tier'
  },
  {
    serviceId: 'ai-powered-cybersecurity-2030',
    serviceName: 'AI-Powered Cybersecurity Operations Center 2030',
    category: 'Cybersecurity',
    marketPrice: '$30,000 - $150,000',
    ourPrice: '$15,000',
    savings: '50-90%',
    pricingTiers: [
      {
        name: 'Essential Security',
        price: 15000,
        monthlyPrice: 1500,
        description: 'Essential cybersecurity for small to medium organizations',
        features: [
          'AI-powered threat detection',
          'Real-time incident response',
          'Basic vulnerability assessment',
          'Security awareness training',
          'Compliance monitoring',
          'Email support',
          'Up to 100 endpoints'
        ],
        bestFor: 'Small to medium businesses, startups, growing companies',
        setupTime: '4-8 weeks',
        support: 'Email support + documentation',
        roi: '600%'
      },
      {
        name: 'Advanced Security',
        price: 30000,
        monthlyPrice: 3000,
        description: 'Advanced cybersecurity for medium to large organizations',
        features: [
          'Everything in Essential',
          'Advanced threat hunting',
          'Incident response automation',
          'Threat intelligence integration',
          'Advanced analytics',
          'Priority support',
          'Up to 1000 endpoints'
        ],
        bestFor: 'Medium to large enterprises, healthcare, finance',
        setupTime: '6-12 weeks',
        support: 'Priority support + dedicated specialist',
        roi: '800%'
      },
      {
        name: 'Enterprise Security',
        price: 60000,
        monthlyPrice: 6000,
        description: 'Enterprise-grade cybersecurity with full customization',
        features: [
          'Everything in Advanced',
          'Custom security policies',
          'White-label solutions',
          'Dedicated security specialist',
          '24/7 SOC support',
          'SLA guarantees',
          'Unlimited endpoints'
        ],
        bestFor: 'Large enterprises, government agencies, critical infrastructure',
        setupTime: '8-16 weeks',
        support: '24/7 SOC support + dedicated security specialist',
        roi: '1000%'
      }
    ],
    competitors: ['CrowdStrike ($50,000+)', 'SentinelOne ($45,000+)', 'Palo Alto Networks ($60,000+)'],
    valueProposition: 'AI-powered detection with real-time response and comprehensive coverage',
    roi: '600-1000%',
    setupTime: '4-16 weeks',
    support: 'Email to 24/7 SOC support based on tier'
  }
];

// Pricing Categories for easy filtering
export const PRICING_CATEGORIES_2030 = [
  'AI & Research',
  'AI & Operations',
  'AI & FinTech',
  'Cloud & DevOps',
  'Cybersecurity',
  'Quantum Computing',
  'IoT & Edge Computing',
  'Blockchain & Web3',
  'Digital Twin',
  'Space Technology',
  'Sustainable Technology',
  'IT Infrastructure'
];

// Pricing Statistics
export const PRICING_STATISTICS_2030 = {
  totalServices: COMPREHENSIVE_PRICING_2030.length,
  totalCategories: PRICING_CATEGORIES_2030.length,
  averagePrice: Math.round(
    COMPREHENSIVE_PRICING_2030.reduce((sum, service) => {
      const basePrice = service.pricingTiers[0]?.price || 0;
      return sum + basePrice;
    }, 0) / COMPREHENSIVE_PRICING_2030.length
  ),
  averageMonthlyPrice: Math.round(
    COMPREHENSIVE_PRICING_2030.reduce((sum, service) => {
      const baseMonthlyPrice = service.pricingTiers[0]?.monthlyPrice || 0;
      return sum + baseMonthlyPrice;
    }, 0) / COMPREHENSIVE_PRICING_2030.length
  ),
  averageSavings: '60-85%',
  averageROI: '800-1200%',
  averageSetupTime: '6-12 weeks'
};

// High-ROI Services (ROI > 500%)
export const HIGH_ROI_PRICING_2030 = COMPREHENSIVE_PRICING_2030.filter(service => {
  const roi = service.roi;
  if (typeof roi === 'string') {
    const roiNumber = parseInt(roi.match(/\d+/)?.[0] || '0');
    return roiNumber > 500;
  }
  return false;
});

// Quick Setup Services (< 8 weeks)
export const QUICK_SETUP_PRICING_2030 = COMPREHENSIVE_PRICING_2030.filter(service => {
  const setupTime = service.setupTime;
  if (typeof setupTime === 'string') {
    const weeks = parseInt(setupTime.match(/\d+/)?.[0] || '0');
    return weeks < 8;
  }
  return false;
});

// Budget-Friendly Services (< $10,000)
export const BUDGET_FRIENDLY_PRICING_2030 = COMPREHENSIVE_PRICING_2030.filter(service => {
  const basePrice = service.pricingTiers[0]?.price || 0;
  return basePrice < 10000;
});

// Enterprise Services (> $25,000)
export const ENTERPRISE_PRICING_2030 = COMPREHENSIVE_PRICING_2030.filter(service => {
  const basePrice = service.pricingTiers[0]?.price || 0;
  return basePrice > 25000;
});

// Export individual service arrays for specific use cases
export {
  COMPREHENSIVE_PRICING_2030 as default
};
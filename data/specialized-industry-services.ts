export interface SpecializedIndustryService {
  id: string;
  name: string;
  tagline: string;
  industry: string;
  category: string;
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

export const specializedIndustryServices: SpecializedIndustryService[] = [
  // Legal Tech Services
  {
    id: 'ai-legal-research-platform',
    name: 'AI Legal Research Platform',
    tagline: 'Intelligent legal research and case analysis',
    industry: 'Legal',
    category: 'AI',
    description: 'Advanced AI platform that automates legal research, analyzes case law, and provides intelligent insights for legal professionals.',
    features: [
      'AI Case Law Analysis',
      'Legal Document Review',
      'Precedent Identification',
      'Risk Assessment',
      'Compliance Checking',
      'Document Generation',
      'Legal Research Automation',
      'Multi-jurisdiction Support'
    ],
    benefits: [
      'Reduce research time by 80%',
      'Improve case outcomes by 35%',
      'Automate routine legal tasks',
      'Enhanced legal insights',
      'Cost-effective legal services',
      'Better client outcomes'
    ],
    pricing: {
      starter: 1200,
      professional: 2800,
      enterprise: 7000,
      currency: 'USD',
      period: 'month'
    },
    link: 'https://ziontechgroup.com/services/ai-legal-research-platform',
    icon: '⚖️',
    isNew: true,
    marketPosition: 'Leading AI-powered legal research platform',
    targetAudience: ['Law Firms', 'Legal Departments', 'Judges', 'Legal Researchers'],
    trialDays: 30,
    setupTime: '2-3 weeks',
    technology: ['Natural Language Processing', 'Machine Learning', 'Legal Analytics', 'Cloud Computing'],
    integrations: ['Legal Databases', 'Case Management Systems', 'Document Management', 'Court Systems'],
    useCases: ['Case Research', 'Document Review', 'Compliance', 'Risk Assessment'],
    roi: 'Improve legal efficiency by 60%',
    competitors: ['Westlaw', 'LexisNexis', 'Casetext'],
    marketSize: '$8B legal tech market',
    growthRate: '20% CAGR',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Real Estate Services
  {
    id: 'ai-real-estate-analytics',
    name: 'AI Real Estate Analytics Platform',
    tagline: 'Data-driven real estate insights and predictions',
    industry: 'Real Estate',
    category: 'Analytics',
    description: 'Comprehensive real estate analytics platform that uses AI to predict market trends, analyze property values, and provide investment insights.',
    features: [
      'Market Trend Analysis',
      'Property Valuation AI',
      'Investment Opportunity Scoring',
      'Risk Assessment',
      'Portfolio Optimization',
      'Market Forecasting',
      'Comparative Analysis',
      'Investment Recommendations'
    ],
    benefits: [
      'Improve investment returns by 40%',
      'Reduce market research time by 70%',
      'Data-driven investment decisions',
      'Risk mitigation',
      'Portfolio optimization',
      'Market timing insights'
    ],
    pricing: {
      starter: 800,
      professional: 1800,
      enterprise: 4500,
      currency: 'USD',
      period: 'month'
    },
    link: 'https://ziontechgroup.com/services/ai-real-estate-analytics',
    icon: '🏠',
    marketPosition: 'Leading AI-powered real estate analytics platform',
    targetAudience: ['Real Estate Investors', 'Agents', 'Developers', 'Property Managers'],
    trialDays: 21,
    setupTime: '1-2 weeks',
    technology: ['Machine Learning', 'Predictive Analytics', 'Data Visualization', 'Cloud Computing'],
    integrations: ['MLS Systems', 'Property Databases', 'Financial Data', 'Market Data Sources'],
    useCases: ['Investment Analysis', 'Market Research', 'Portfolio Management', 'Risk Assessment'],
    roi: 'Improve investment ROI by 40%',
    competitors: ['Zillow', 'Redfin', 'Real Capital Analytics'],
    marketSize: '$12B real estate tech market',
    growthRate: '18% CAGR',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Manufacturing & Industry 4.0
  {
    id: 'smart-manufacturing-platform',
    name: 'Smart Manufacturing Platform',
    tagline: 'Industry 4.0 intelligent manufacturing solutions',
    industry: 'Manufacturing',
    category: 'Automation',
    description: 'Advanced manufacturing platform that integrates IoT, AI, and automation to create intelligent, connected manufacturing operations.',
    features: [
      'IoT Device Integration',
      'Predictive Maintenance',
      'Quality Control AI',
      'Supply Chain Optimization',
      'Energy Management',
      'Production Planning',
      'Real-time Monitoring',
      'Automated Quality Assurance'
    ],
    benefits: [
      'Increase production efficiency by 35%',
      'Reduce downtime by 60%',
      'Improve product quality by 25%',
      'Lower operational costs by 30%',
      'Real-time production insights',
      'Automated quality control'
    ],
    pricing: {
      starter: 3000,
      professional: 7000,
      enterprise: 18000,
      currency: 'USD',
      period: 'month'
    },
    link: 'https://ziontechgroup.com/services/smart-manufacturing-platform',
    icon: '🏭',
    isPopular: true,
    marketPosition: 'Leading Industry 4.0 manufacturing platform',
    targetAudience: ['Manufacturers', 'Industrial Companies', 'Factories', 'Production Facilities'],
    trialDays: 45,
    setupTime: '6-8 weeks',
    technology: ['IoT', 'Machine Learning', 'Automation', 'Cloud Computing'],
    integrations: ['ERP Systems', 'MES Platforms', 'IoT Devices', 'Quality Control Systems'],
    useCases: ['Production Optimization', 'Quality Control', 'Maintenance', 'Supply Chain'],
    roi: 'Improve manufacturing efficiency by 35%',
    competitors: ['Siemens', 'GE Digital', 'PTC'],
    marketSize: '$25B smart manufacturing market',
    growthRate: '22% CAGR',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Agriculture & AgTech
  {
    id: 'precision-agriculture-platform',
    name: 'Precision Agriculture Platform',
    tagline: 'AI-powered precision farming solutions',
    industry: 'Agriculture',
    category: 'AI',
    description: 'Intelligent agriculture platform that uses AI, IoT, and data analytics to optimize farming operations and increase crop yields.',
    features: [
      'Crop Monitoring AI',
      'Soil Analysis',
      'Weather Prediction',
      'Irrigation Optimization',
      'Pest Detection',
      'Yield Prediction',
      'Resource Management',
      'Sustainability Tracking'
    ],
    benefits: [
      'Increase crop yields by 30%',
      'Reduce water usage by 25%',
      'Optimize resource allocation',
      'Improve sustainability',
      'Reduce pesticide usage',
      'Better crop planning'
    ],
    pricing: {
      starter: 500,
      professional: 1200,
      enterprise: 3000,
      currency: 'USD',
      period: 'month'
    },
    link: 'https://ziontechgroup.com/services/precision-agriculture-platform',
    icon: '🌾',
    marketPosition: 'Leading AI-powered precision agriculture platform',
    targetAudience: ['Farmers', 'Agricultural Companies', 'AgTech Startups', 'Research Institutions'],
    trialDays: 30,
    setupTime: '2-3 weeks',
    technology: ['Machine Learning', 'IoT', 'Satellite Imagery', 'Data Analytics'],
    integrations: ['Weather APIs', 'Soil Sensors', 'Irrigation Systems', 'Farm Management Software'],
    useCases: ['Crop Monitoring', 'Resource Optimization', 'Yield Prediction', 'Sustainability'],
    roi: 'Improve agricultural productivity by 30%',
    competitors: ['John Deere', 'Climate FieldView', 'FarmLogs'],
    marketSize: '$15B precision agriculture market',
    growthRate: '28% CAGR',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Energy & Sustainability
  {
    id: 'smart-energy-management',
    name: 'Smart Energy Management Platform',
    tagline: 'Intelligent energy optimization and sustainability',
    industry: 'Energy',
    category: 'Analytics',
    description: 'Advanced energy management platform that uses AI to optimize energy consumption, reduce costs, and improve sustainability.',
    features: [
      'Energy Consumption Analytics',
      'Demand Response',
      'Renewable Energy Integration',
      'Grid Optimization',
      'Carbon Footprint Tracking',
      'Energy Efficiency Recommendations',
      'Real-time Monitoring',
      'Predictive Maintenance'
    ],
    benefits: [
      'Reduce energy costs by 25%',
      'Improve energy efficiency by 30%',
      'Reduce carbon footprint',
      'Optimize energy consumption',
      'Real-time energy insights',
      'Sustainability compliance'
    ],
    pricing: {
      starter: 1500,
      professional: 3500,
      enterprise: 8000,
      currency: 'USD',
      period: 'month'
    },
    link: 'https://ziontechgroup.com/services/smart-energy-management',
    icon: '⚡',
    marketPosition: 'Leading AI-powered energy management platform',
    targetAudience: ['Utilities', 'Commercial Buildings', 'Industrial Facilities', 'Government'],
    trialDays: 30,
    setupTime: '3-4 weeks',
    technology: ['Machine Learning', 'IoT', 'Data Analytics', 'Cloud Computing'],
    integrations: ['Smart Meters', 'Building Management Systems', 'Grid Systems', 'Renewable Energy Sources'],
    useCases: ['Energy Optimization', 'Demand Management', 'Sustainability', 'Cost Reduction'],
    roi: 'Reduce energy costs by 25%',
    competitors: ['Schneider Electric', 'Siemens', 'Honeywell'],
    marketSize: '$20B smart energy market',
    growthRate: '24% CAGR',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Transportation & Logistics
  {
    id: 'intelligent-logistics-platform',
    name: 'Intelligent Logistics Platform',
    tagline: 'AI-powered logistics optimization and automation',
    industry: 'Transportation',
    category: 'Automation',
    description: 'Comprehensive logistics platform that uses AI to optimize routes, reduce costs, and improve delivery efficiency.',
    features: [
      'Route Optimization AI',
      'Fleet Management',
      'Real-time Tracking',
      'Demand Forecasting',
      'Inventory Optimization',
      'Last-mile Delivery',
      'Cost Analytics',
      'Performance Monitoring'
    ],
    benefits: [
      'Reduce logistics costs by 30%',
      'Improve delivery efficiency by 40%',
      'Optimize route planning',
      'Real-time visibility',
      'Better customer service',
      'Reduced carbon footprint'
    ],
    pricing: {
      starter: 2000,
      professional: 4500,
      enterprise: 12000,
      currency: 'USD',
      period: 'month'
    },
    link: 'https://ziontechgroup.com/services/intelligent-logistics-platform',
    icon: '🚚',
    marketPosition: 'Leading AI-powered logistics optimization platform',
    targetAudience: ['Logistics Companies', 'E-commerce', 'Manufacturers', 'Retailers'],
    trialDays: 21,
    setupTime: '3-4 weeks',
    technology: ['Machine Learning', 'Route Optimization', 'IoT', 'Cloud Computing'],
    integrations: ['TMS Systems', 'WMS Platforms', 'GPS Systems', 'Customer Portals'],
    useCases: ['Route Optimization', 'Fleet Management', 'Inventory Management', 'Customer Delivery'],
    roi: 'Reduce logistics costs by 30%',
    competitors: ['Flexport', 'Convoy', 'KeepTruckin'],
    marketSize: '$18B logistics tech market',
    growthRate: '26% CAGR',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Retail & E-commerce
  {
    id: 'ai-retail-optimization',
    name: 'AI Retail Optimization Platform',
    tagline: 'Intelligent retail operations and customer experience',
    industry: 'Retail',
    category: 'AI',
    description: 'Advanced retail platform that uses AI to optimize inventory, personalize customer experiences, and increase sales.',
    features: [
      'Inventory Optimization',
      'Customer Personalization',
      'Demand Forecasting',
      'Price Optimization',
      'Customer Analytics',
      'Omnichannel Integration',
      'Fraud Detection',
      'Performance Analytics'
    ],
    benefits: [
      'Increase sales by 25%',
      'Reduce inventory costs by 20%',
      'Improve customer satisfaction',
      'Optimize pricing strategies',
      'Better inventory management',
      'Enhanced customer experience'
    ],
    pricing: {
      starter: 1000,
      professional: 2500,
      enterprise: 6000,
      currency: 'USD',
      period: 'month'
    },
    link: 'https://ziontechgroup.com/services/ai-retail-optimization',
    icon: '🛍️',
    marketPosition: 'Leading AI-powered retail optimization platform',
    targetAudience: ['Retailers', 'E-commerce', 'Brick & Mortar', 'Omnichannel'],
    trialDays: 21,
    setupTime: '2-3 weeks',
    technology: ['Machine Learning', 'Predictive Analytics', 'Personalization', 'Cloud Computing'],
    integrations: ['POS Systems', 'E-commerce Platforms', 'CRM Systems', 'Inventory Management'],
    useCases: ['Inventory Management', 'Customer Personalization', 'Price Optimization', 'Sales Analytics'],
    roi: 'Increase retail sales by 25%',
    competitors: ['Shopify', 'Salesforce', 'Adobe Commerce'],
    marketSize: '$35B retail tech market',
    growthRate: '20% CAGR',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Hospitality & Tourism
  {
    id: 'smart-hospitality-platform',
    name: 'Smart Hospitality Platform',
    tagline: 'AI-powered hospitality management and guest experience',
    industry: 'Hospitality',
    category: 'AI',
    description: 'Intelligent hospitality platform that uses AI to optimize operations, personalize guest experiences, and increase revenue.',
    features: [
      'Guest Personalization',
      'Revenue Management',
      'Operational Optimization',
      'Guest Analytics',
      'Predictive Maintenance',
      'Energy Management',
      'Staff Scheduling',
      'Quality Assurance'
    ],
    benefits: [
      'Increase guest satisfaction by 35%',
      'Improve revenue by 25%',
      'Optimize operations',
      'Personalized guest experiences',
      'Better staff management',
      'Enhanced quality control'
    ],
    pricing: {
      starter: 800,
      professional: 1800,
      enterprise: 4500,
      currency: 'USD',
      period: 'month'
    },
    link: 'https://ziontechgroup.com/services/smart-hospitality-platform',
    icon: '🏨',
    marketPosition: 'Leading AI-powered hospitality management platform',
    targetAudience: ['Hotels', 'Resorts', 'Restaurants', 'Hospitality Groups'],
    trialDays: 30,
    setupTime: '2-3 weeks',
    technology: ['Machine Learning', 'IoT', 'Predictive Analytics', 'Cloud Computing'],
    integrations: ['PMS Systems', 'Booking Engines', 'POS Systems', 'Guest Management'],
    useCases: ['Guest Experience', 'Revenue Management', 'Operations', 'Quality Control'],
    roi: 'Improve hospitality revenue by 25%',
    competitors: ['Oracle Hospitality', 'Amadeus', 'Sabre'],
    marketSize: '$10B hospitality tech market',
    growthRate: '22% CAGR',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  }
];

export const getServicesByIndustry = (industry: string) => {
  return specializedIndustryServices.filter(service => service.industry === industry);
};

export const getServicesByCategory = (category: string) => {
  return specializedIndustryServices.filter(service => service.category === category);
};

export const getPopularServices = () => {
  return specializedIndustryServices.filter(service => service.isPopular);
};

export const getNewServices = () => {
  return specializedIndustryServices.filter(service => service.isNew);
};
export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  benefits: string[];
  useCases: string[];
  technologies: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const services: Service[] = [
  {
    id: 'ai-automation',
    title: 'AI Automation Platform',
    description: 'Comprehensive AI automation solutions for business process optimization',
    shortDescription: 'Automate your business processes with AI',
    icon: '🤖',
    features: [
      'Process automation',
      'Workflow optimization',
      'Data integration',
      'Real-time monitoring'
    ],
    pricing: {
      basic: 3000,
      pro: 10000,
      enterprise: 30000
    },
    benefits: [
      'Increased efficiency',
      'Reduced manual work',
      'Better accuracy',
      'Cost savings'
    ],
    useCases: [
      'Customer service automation',
      'Data processing',
      'Report generation',
      'Task scheduling'
    ],
    technologies: ['Machine Learning', 'RPA', 'API Integration', 'Cloud Computing'],
    contactInfo: {
      phone: '+1-555-0123',
      email: 'ai@ziontech.com',
      website: 'ziontech.com/ai-automation'
    }
  },
  {
    id: 'data-analytics',
    title: 'Advanced Data Analytics',
    description: 'Transform your data into actionable insights with our analytics platform',
    shortDescription: 'Turn data into insights',
    icon: '📊',
    features: [
      'Real-time dashboards',
      'Predictive analytics',
      'Data visualization',
      'Custom reporting'
    ],
    pricing: {
      basic: 2000,
      pro: 8000,
      enterprise: 25000
    },
    benefits: [
      'Data-driven decisions',
      'Improved performance',
      'Competitive advantage',
      'Risk reduction'
    ],
    useCases: [
      'Business intelligence',
      'Performance monitoring',
      'Trend analysis',
      'Predictive modeling'
    ],
    technologies: ['Python', 'R', 'Tableau', 'Power BI', 'SQL'],
    contactInfo: {
      phone: '+1-555-0124',
      email: 'analytics@ziontech.com',
      website: 'ziontech.com/analytics'
    }
  }
];
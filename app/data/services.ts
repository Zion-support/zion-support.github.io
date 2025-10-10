export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  pricing: {
    basic: number;
    professional: number;
    enterprise: number;
  };
  category: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'ai-consulting',
    title: 'AI Consulting',
    description: 'Strategic AI consulting to help your business identify opportunities and implement AI solutions that drive real results.',
    features: [
      'AI strategy development',
      'Technology assessment',
      'Implementation planning',
      'ROI analysis',
      'Change management'
    ],
    benefits: [
      'Clear AI roadmap',
      'Reduced implementation risk',
      'Faster time to value',
      'Expert guidance',
      'Competitive advantage'
    ],
    pricing: {
      basic: 5000,
      professional: 15000,
      enterprise: 50000
    },
    category: 'consulting',
    icon: 'brain'
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning Solutions',
    description: 'Custom machine learning models and algorithms tailored to your specific business needs and data.',
    features: [
      'Custom model development',
      'Data preprocessing',
      'Model training and optimization',
      'API integration',
      'Performance monitoring'
    ],
    benefits: [
      'Automated decision making',
      'Improved accuracy',
      'Scalable solutions',
      'Real-time insights',
      'Cost reduction'
    ],
    pricing: {
      basic: 10000,
      professional: 25000,
      enterprise: 75000
    },
    category: 'development',
    icon: 'cpu'
  },
  {
    id: 'data-analytics',
    title: 'Advanced Data Analytics',
    description: 'Transform your data into actionable insights with our advanced analytics and visualization solutions.',
    features: [
      'Data visualization',
      'Predictive analytics',
      'Real-time dashboards',
      'Custom reporting',
      'Data integration'
    ],
    benefits: [
      'Better decision making',
      'Data-driven insights',
      'Improved efficiency',
      'Competitive intelligence',
      'Risk mitigation'
    ],
    pricing: {
      basic: 8000,
      professional: 20000,
      enterprise: 60000
    },
    category: 'analytics',
    icon: 'bar-chart'
  },
  {
    id: 'automation',
    title: 'Process Automation',
    description: 'Automate repetitive tasks and workflows to improve efficiency and reduce human error.',
    features: [
      'Workflow automation',
      'RPA implementation',
      'API integrations',
      'Error handling',
      'Monitoring and alerts'
    ],
    benefits: [
      'Increased productivity',
      'Reduced errors',
      'Cost savings',
      '24/7 operation',
      'Scalable processes'
    ],
    pricing: {
      basic: 6000,
      professional: 18000,
      enterprise: 45000
    },
    category: 'automation',
    icon: 'settings'
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure solutions for modern businesses.',
    features: [
      'Cloud migration',
      'Infrastructure setup',
      'Security implementation',
      'Monitoring and maintenance',
      'Cost optimization'
    ],
    benefits: [
      'Scalability',
      'Cost efficiency',
      'High availability',
      'Security',
      'Flexibility'
    ],
    pricing: {
      basic: 12000,
      professional: 30000,
      enterprise: 80000
    },
    category: 'infrastructure',
    icon: 'cloud'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive cybersecurity solutions to protect your business from evolving threats.',
    features: [
      'Security assessment',
      'Threat monitoring',
      'Incident response',
      'Security training',
      'Compliance support'
    ],
    benefits: [
      'Enhanced security',
      'Risk reduction',
      'Compliance assurance',
      'Peace of mind',
      'Business continuity'
    ],
    pricing: {
      basic: 15000,
      professional: 35000,
      enterprise: 90000
    },
    category: 'security',
    icon: 'shield'
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): Service[] => {
  return services.filter(service => service.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(services.map(service => service.category))];
};
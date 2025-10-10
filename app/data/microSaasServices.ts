export interface MicroSaasService {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  pricing: {
    starter: number;
    growth: number;
    scale: number;
  };
  category: string;
  targetAudience: string[];
}

export const microSaasServices: MicroSaasService[] = [
  {
    id: 'task-automation',
    name: 'Task Automation Platform',
    description: 'Automate repetitive tasks with AI-powered workflow automation',
    icon: '⚡',
    features: [
      'Drag-and-drop workflow builder',
      'AI-powered task recognition',
      'Integration with 100+ apps',
      'Custom automation rules',
      'Real-time monitoring',
      'Team collaboration tools'
    ],
    pricing: {
      starter: 29,
      growth: 79,
      scale: 199
    },
    category: 'Productivity',
    targetAudience: ['Small businesses', 'Startups', 'Remote teams']
  },
  {
    id: 'customer-analytics',
    name: 'Customer Analytics Dashboard',
    description: 'Understand your customers with advanced analytics and insights',
    icon: '📈',
    features: [
      'Customer behavior tracking',
      'Predictive analytics',
      'Custom dashboards',
      'Real-time reporting',
      'A/B testing tools',
      'ROI tracking'
    ],
    pricing: {
      starter: 49,
      growth: 99,
      scale: 249
    },
    category: 'Analytics',
    targetAudience: ['E-commerce', 'SaaS companies', 'Marketing teams']
  },
  {
    id: 'content-management',
    name: 'AI Content Management',
    description: 'Create, manage, and optimize content with AI assistance',
    icon: '✍️',
    features: [
      'AI content generation',
      'SEO optimization',
      'Content scheduling',
      'Multi-platform publishing',
      'Performance analytics',
      'Team collaboration'
    ],
    pricing: {
      starter: 39,
      growth: 89,
      scale: 179
    },
    category: 'Content',
    targetAudience: ['Content creators', 'Marketing agencies', 'Bloggers']
  },
  {
    id: 'inventory-optimization',
    name: 'Inventory Optimization',
    description: 'Optimize inventory levels with AI-powered demand forecasting',
    icon: '📦',
    features: [
      'Demand forecasting',
      'Stock level optimization',
      'Reorder automation',
      'Supplier management',
      'Cost analysis',
      'Multi-location support'
    ],
    pricing: {
      starter: 59,
      growth: 129,
      scale: 299
    },
    category: 'E-commerce',
    targetAudience: ['Retailers', 'E-commerce stores', 'Wholesalers']
  },
  {
    id: 'team-collaboration',
    name: 'Team Collaboration Hub',
    description: 'Enhance team productivity with intelligent collaboration tools',
    icon: '👥',
    features: [
      'Smart project management',
      'AI meeting summaries',
      'Task prioritization',
      'Team performance insights',
      'Integration ecosystem',
      'Mobile accessibility'
    ],
    pricing: {
      starter: 19,
      growth: 49,
      scale: 99
    },
    category: 'Collaboration',
    targetAudience: ['Remote teams', 'Project managers', 'Small businesses']
  },
  {
    id: 'financial-tracking',
    name: 'Financial Tracking & Insights',
    description: 'Manage finances with AI-powered insights and automation',
    icon: '💰',
    features: [
      'Expense categorization',
      'Budget planning',
      'Financial forecasting',
      'Tax preparation',
      'Investment tracking',
      'Report generation'
    ],
    pricing: {
      starter: 34,
      growth: 69,
      scale: 149
    },
    category: 'Finance',
    targetAudience: ['Small businesses', 'Freelancers', 'Consultants']
  }
];

export const getMicroSaasServiceById = (id: string): MicroSaasService | undefined => {
  return microSaasServices.find(service => service.id === id);
};

export const getMicroSaasServicesByCategory = (category: string): MicroSaasService[] => {
  return microSaasServices.filter(service => service.category === category);
};

export const getAllMicroSaasCategories = (): string[] => {
  return [...new Set(microSaasServices.map(service => service.category))];
};

export const getMicroSaasServicesByAudience = (audience: string): MicroSaasService[] => {
  return microSaasServices.filter(service => 
    service.targetAudience.some(target => 
      target.toLowerCase().includes(audience.toLowerCase())
    )
  );
};
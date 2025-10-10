export interface MicroSaasService {
  id: string;
  title: string;
  description: string;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  category: string;
  icon: string;
  benefits: string[];
  useCases: string[];
}

export const microSaasServices: MicroSaasService[] = [
  {
    id: 'task-automation',
    title: 'Task Automation Platform',
    description: 'Automate repetitive tasks with AI-powered workflow automation',
    features: [
      'Drag-and-drop workflow builder',
      'AI-powered task recognition',
      'Multi-platform integration',
      'Real-time monitoring',
      'Custom automation rules'
    ],
    pricing: {
      basic: 29,
      pro: 79,
      enterprise: 199
    },
    category: 'Productivity',
    icon: '⚡',
    benefits: [
      'Save 10+ hours per week',
      'Reduce human error by 95%',
      'Increase productivity by 300%',
      'Seamless integration with existing tools'
    ],
    useCases: [
      'Email management',
      'Data entry automation',
      'Report generation',
      'Customer support workflows'
    ]
  },
  {
    id: 'analytics-dashboard',
    title: 'Business Analytics Dashboard',
    description: 'Comprehensive analytics and reporting for small businesses',
    features: [
      'Real-time data visualization',
      'Custom report generation',
      'Multi-source data integration',
      'Automated insights',
      'Mobile-responsive design'
    ],
    pricing: {
      basic: 49,
      pro: 99,
      enterprise: 249
    },
    category: 'Analytics',
    icon: '📊',
    benefits: [
      'Make data-driven decisions',
      'Identify growth opportunities',
      'Track key performance indicators',
      'Automated reporting saves time'
    ],
    useCases: [
      'Sales performance tracking',
      'Marketing campaign analysis',
      'Financial reporting',
      'Customer behavior insights'
    ]
  },
  {
    id: 'customer-relationship',
    title: 'CRM & Customer Management',
    description: 'All-in-one customer relationship management solution',
    features: [
      'Contact management',
      'Sales pipeline tracking',
      'Email marketing integration',
      'Customer support tickets',
      'Advanced reporting'
    ],
    pricing: {
      basic: 39,
      pro: 89,
      enterprise: 199
    },
    category: 'CRM',
    icon: '👥',
    benefits: [
      'Improve customer relationships',
      'Increase sales conversion rates',
      'Streamline communication',
      'Better customer insights'
    ],
    useCases: [
      'Lead management',
      'Customer support',
      'Sales tracking',
      'Marketing campaigns'
    ]
  },
  {
    id: 'project-management',
    title: 'Project Management Suite',
    description: 'Complete project management and team collaboration platform',
    features: [
      'Task and milestone tracking',
      'Team collaboration tools',
      'Time tracking',
      'Resource management',
      'Progress reporting'
    ],
    pricing: {
      basic: 59,
      pro: 119,
      enterprise: 299
    },
    category: 'Project Management',
    icon: '📋',
    benefits: [
      'Improve project delivery',
      'Enhance team collaboration',
      'Better resource allocation',
      'Real-time project visibility'
    ],
    useCases: [
      'Software development',
      'Marketing campaigns',
      'Event planning',
      'Client projects'
    ]
  },
  {
    id: 'inventory-management',
    title: 'Inventory Management System',
    description: 'Smart inventory tracking and management for e-commerce',
    features: [
      'Real-time inventory tracking',
      'Automated reorder alerts',
      'Multi-location support',
      'Barcode scanning',
      'Analytics and reporting'
    ],
    pricing: {
      basic: 69,
      pro: 139,
      enterprise: 349
    },
    category: 'E-commerce',
    icon: '📦',
    benefits: [
      'Reduce stockouts and overstock',
      'Automate inventory processes',
      'Improve cash flow',
      'Better demand forecasting'
    ],
    useCases: [
      'Online retail',
      'Wholesale distribution',
      'Manufacturing',
      'Service inventory'
    ]
  },
  {
    id: 'financial-tracking',
    title: 'Financial Management Tool',
    description: 'Comprehensive financial tracking and accounting solution',
    features: [
      'Income and expense tracking',
      'Invoice generation',
      'Tax preparation',
      'Financial reporting',
      'Bank integration'
    ],
    pricing: {
      basic: 79,
      pro: 149,
      enterprise: 399
    },
    category: 'Finance',
    icon: '💰',
    benefits: [
      'Better financial control',
      'Automated bookkeeping',
      'Tax compliance',
      'Improved cash flow management'
    ],
    useCases: [
      'Small business accounting',
      'Freelancer finances',
      'Startup financial tracking',
      'Tax preparation'
    ]
  }
];

export const microSaasCategories = [
  'All',
  'Productivity',
  'Analytics',
  'CRM',
  'Project Management',
  'E-commerce',
  'Finance'
];

export const microSaasFeatures = [
  'AI-powered automation',
  'Real-time analytics',
  'Multi-platform integration',
  'Customizable dashboards',
  'Mobile responsive',
  'API access',
  'White-label options',
  '24/7 support'
];
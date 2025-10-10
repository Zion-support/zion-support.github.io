export interface MicroSaasService {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  category: string;
  icon: string;
  popular?: boolean;
}

export const microSaasServices: MicroSaasService[] = [
  {
    id: 'ai-chatbot',
    name: 'AI Chatbot Platform',
    description: 'Intelligent conversational AI for customer support and engagement',
    features: [
      'Natural language processing',
      'Multi-language support',
      'Integration with CRM systems',
      'Analytics and reporting',
      'Custom training models',
      '24/7 availability'
    ],
    pricing: {
      basic: 99,
      pro: 299,
      enterprise: 999
    },
    category: 'AI & Automation',
    icon: '🤖',
    popular: true
  },
  {
    id: 'data-analytics',
    name: 'Advanced Analytics Dashboard',
    description: 'Real-time business intelligence and data visualization platform',
    features: [
      'Real-time data processing',
      'Interactive dashboards',
      'Custom report generation',
      'Data export capabilities',
      'API integrations',
      'Mobile responsive design'
    ],
    pricing: {
      basic: 149,
      pro: 399,
      enterprise: 1299
    },
    category: 'Analytics',
    icon: '📊'
  },
  {
    id: 'workflow-automation',
    name: 'Workflow Automation Suite',
    description: 'Streamline business processes with intelligent automation',
    features: [
      'Visual workflow builder',
      'API integrations',
      'Conditional logic',
      'Email notifications',
      'Task management',
      'Performance monitoring'
    ],
    pricing: {
      basic: 79,
      pro: 199,
      enterprise: 599
    },
    category: 'Automation',
    icon: '⚡'
  },
  {
    id: 'crm-system',
    name: 'Smart CRM Platform',
    description: 'Customer relationship management with AI-powered insights',
    features: [
      'Contact management',
      'Sales pipeline tracking',
      'AI-powered lead scoring',
      'Email marketing integration',
      'Customer analytics',
      'Mobile app included'
    ],
    pricing: {
      basic: 129,
      pro: 349,
      enterprise: 899
    },
    category: 'CRM',
    icon: '👥',
    popular: true
  },
  {
    id: 'inventory-management',
    name: 'Inventory Management System',
    description: 'Smart inventory tracking and optimization for businesses',
    features: [
      'Real-time inventory tracking',
      'Automated reorder points',
      'Barcode scanning',
      'Multi-location support',
      'Supplier management',
      'Reporting and analytics'
    ],
    pricing: {
      basic: 89,
      pro: 249,
      enterprise: 699
    },
    category: 'Inventory',
    icon: '📦'
  },
  {
    id: 'project-management',
    name: 'Project Management Tool',
    description: 'Collaborative project management with AI-powered insights',
    features: [
      'Task and milestone tracking',
      'Team collaboration tools',
      'Time tracking',
      'Resource allocation',
      'Progress reporting',
      'Integration with popular tools'
    ],
    pricing: {
      basic: 59,
      pro: 179,
      enterprise: 499
    },
    category: 'Project Management',
    icon: '📋'
  },
  {
    id: 'email-marketing',
    name: 'Email Marketing Platform',
    description: 'AI-powered email marketing with advanced segmentation',
    features: [
      'Drag-and-drop email builder',
      'AI-powered subject line optimization',
      'Advanced segmentation',
      'A/B testing',
      'Automation workflows',
      'Detailed analytics'
    ],
    pricing: {
      basic: 39,
      pro: 99,
      enterprise: 299
    },
    category: 'Marketing',
    icon: '📧'
  },
  {
    id: 'document-management',
    name: 'Document Management System',
    description: 'Secure document storage and collaboration platform',
    features: [
      'Cloud storage',
      'Version control',
      'Collaborative editing',
      'Access permissions',
      'Search functionality',
      'Mobile access'
    ],
    pricing: {
      basic: 49,
      pro: 129,
      enterprise: 399
    },
    category: 'Document Management',
    icon: '📄'
  }
];

export const categories = [
  'All',
  'AI & Automation',
  'Analytics',
  'Automation',
  'CRM',
  'Inventory',
  'Project Management',
  'Marketing',
  'Document Management'
];

export const pricingPlans = {
  basic: {
    name: 'Basic',
    description: 'Perfect for small businesses',
    features: [
      'Up to 5 users',
      'Basic features',
      'Email support',
      'Standard integrations'
    ]
  },
  pro: {
    name: 'Professional',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 25 users',
      'Advanced features',
      'Priority support',
      'Custom integrations',
      'Analytics dashboard'
    ]
  },
  enterprise: {
    name: 'Enterprise',
    description: 'For large organizations',
    features: [
      'Unlimited users',
      'All features',
      '24/7 dedicated support',
      'Custom development',
      'Advanced security',
      'SLA guarantee'
    ]
  }
};

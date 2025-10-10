export interface MicroSaasService {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  price: string;
  duration: string;
  category: string;
}

export const microSaasServices: MicroSaasService[] = [
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot Platform',
    description: 'Build and deploy intelligent chatbots for customer service and support.',
    icon: 'MessageCircle',
    features: [
      'Natural language processing',
      'Multi-channel support',
      'Custom training',
      'Analytics dashboard',
      'API integration',
      'White-label options'
    ],
    benefits: [
      '24/7 customer support',
      'Reduced response time',
      'Scalable customer service',
      'Cost-effective solution'
    ],
    price: 'Starting at $99/month',
    duration: '2-4 weeks',
    category: 'AI & Automation'
  },
  {
    id: 'analytics-dashboard',
    title: 'Business Analytics Dashboard',
    description: 'Comprehensive analytics and reporting platform for small businesses.',
    icon: 'BarChart',
    features: [
      'Real-time data visualization',
      'Custom reports',
      'Data integration',
      'Mobile responsive',
      'Export capabilities',
      'User management'
    ],
    benefits: [
      'Data-driven decisions',
      'Improved insights',
      'Time-saving reports',
      'Better performance tracking'
    ],
    price: 'Starting at $49/month',
    duration: '1-3 weeks',
    category: 'Analytics'
  },
  {
    id: 'project-management',
    title: 'Project Management Tool',
    description: 'Streamline project workflows with our comprehensive management platform.',
    icon: 'CheckSquare',
    features: [
      'Task management',
      'Team collaboration',
      'Time tracking',
      'File sharing',
      'Progress monitoring',
      'Integration APIs'
    ],
    benefits: [
      'Improved productivity',
      'Better team coordination',
      'Clear project visibility',
      'Efficient resource management'
    ],
    price: 'Starting at $29/month',
    duration: '2-3 weeks',
    category: 'Productivity'
  },
  {
    id: 'crm-system',
    title: 'Customer Relationship Management',
    description: 'Manage customer relationships and sales processes effectively.',
    icon: 'Users',
    features: [
      'Contact management',
      'Sales pipeline',
      'Email integration',
      'Reporting tools',
      'Mobile app',
      'Custom fields'
    ],
    benefits: [
      'Better customer relationships',
      'Improved sales tracking',
      'Centralized data',
      'Enhanced communication'
    ],
    price: 'Starting at $39/month',
    duration: '3-4 weeks',
    category: 'CRM'
  },
  {
    id: 'inventory-management',
    title: 'Inventory Management System',
    description: 'Track and manage inventory with real-time updates and analytics.',
    icon: 'Package',
    features: [
      'Real-time tracking',
      'Low stock alerts',
      'Barcode scanning',
      'Supplier management',
      'Reporting tools',
      'Multi-location support'
    ],
    benefits: [
      'Reduced stockouts',
      'Better inventory control',
      'Cost optimization',
      'Improved accuracy'
    ],
    price: 'Starting at $59/month',
    duration: '2-4 weeks',
    category: 'Inventory'
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing Platform',
    description: 'Create and manage email campaigns with advanced automation features.',
    icon: 'Mail',
    features: [
      'Drag-and-drop editor',
      'Email automation',
      'List management',
      'A/B testing',
      'Analytics tracking',
      'Template library'
    ],
    benefits: [
      'Increased engagement',
      'Automated workflows',
      'Better targeting',
      'Improved ROI'
    ],
    price: 'Starting at $19/month',
    duration: '1-2 weeks',
    category: 'Marketing'
  }
];

export const microSaasCategories = [
  { id: 'all', name: 'All Services' },
  { id: 'ai-automation', name: 'AI & Automation' },
  { id: 'analytics', name: 'Analytics' },
  { id: 'productivity', name: 'Productivity' },
  { id: 'crm', name: 'CRM' },
  { id: 'inventory', name: 'Inventory' },
  { id: 'marketing', name: 'Marketing' }
];
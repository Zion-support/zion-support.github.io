export interface MicroSaasService {
  id: string;
  title: string;
  description: string;
  features: string[];
  pricing: {
    monthly: number;
    yearly: number;
  };
  category: string;
  icon: string;
  popular?: boolean;
}

export const microSaasServices: MicroSaasService[] = [
  {
    id: 'task-manager',
    title: 'AI Task Manager',
    description: 'Intelligent task management with AI-powered prioritization and automation.',
    features: [
      'AI task prioritization',
      'Automated scheduling',
      'Team collaboration',
      'Progress tracking',
      'Smart notifications'
    ],
    pricing: {
      monthly: 29,
      yearly: 290
    },
    category: 'productivity',
    icon: 'checklist',
    popular: true
  },
  {
    id: 'email-optimizer',
    title: 'Email Optimization Suite',
    description: 'AI-powered email management and optimization for better productivity.',
    features: [
      'Smart email sorting',
      'Auto-responses',
      'Spam filtering',
      'Email analytics',
      'Template suggestions'
    ],
    pricing: {
      monthly: 19,
      yearly: 190
    },
    category: 'communication',
    icon: 'mail'
  },
  {
    id: 'data-visualizer',
    title: 'Data Visualization Tool',
    description: 'Create stunning charts and dashboards from your data with AI assistance.',
    features: [
      'Auto-chart generation',
      'Interactive dashboards',
      'Data import/export',
      'Real-time updates',
      'Custom themes'
    ],
    pricing: {
      monthly: 39,
      yearly: 390
    },
    category: 'analytics',
    icon: 'bar-chart'
  },
  {
    id: 'content-generator',
    title: 'AI Content Generator',
    description: 'Generate high-quality content for blogs, social media, and marketing materials.',
    features: [
      'Blog post generation',
      'Social media content',
      'SEO optimization',
      'Multiple languages',
      'Brand voice training'
    ],
    pricing: {
      monthly: 49,
      yearly: 490
    },
    category: 'content',
    icon: 'edit',
    popular: true
  },
  {
    id: 'customer-support',
    title: 'AI Customer Support',
    description: 'Automated customer support with intelligent chatbots and ticket management.',
    features: [
      'Smart chatbots',
      'Ticket routing',
      'Knowledge base',
      'Multi-language support',
      'Analytics dashboard'
    ],
    pricing: {
      monthly: 59,
      yearly: 590
    },
    category: 'support',
    icon: 'headphones'
  },
  {
    id: 'inventory-tracker',
    title: 'Smart Inventory Tracker',
    description: 'AI-powered inventory management with predictive analytics and automation.',
    features: [
      'Predictive restocking',
      'Barcode scanning',
      'Low stock alerts',
      'Analytics reports',
      'Multi-location support'
    ],
    pricing: {
      monthly: 35,
      yearly: 350
    },
    category: 'inventory',
    icon: 'package'
  },
  {
    id: 'expense-tracker',
    title: 'Expense Management',
    description: 'Automated expense tracking and categorization with receipt scanning.',
    features: [
      'Receipt scanning',
      'Auto-categorization',
      'Expense reports',
      'Budget tracking',
      'Tax preparation'
    ],
    pricing: {
      monthly: 25,
      yearly: 250
    },
    category: 'finance',
    icon: 'dollar-sign'
  },
  {
    id: 'social-scheduler',
    title: 'Social Media Scheduler',
    description: 'AI-powered social media management and content scheduling across platforms.',
    features: [
      'Multi-platform posting',
      'Optimal timing',
      'Content suggestions',
      'Engagement analytics',
      'Hashtag optimization'
    ],
    pricing: {
      monthly: 45,
      yearly: 450
    },
    category: 'social',
    icon: 'share-2'
  }
];

export const getMicroSaasServiceById = (id: string): MicroSaasService | undefined => {
  return microSaasServices.find(service => service.id === id);
};

export const getMicroSaasServicesByCategory = (category: string): MicroSaasService[] => {
  return microSaasServices.filter(service => service.category === category);
};

export const getPopularMicroSaasServices = (): MicroSaasService[] => {
  return microSaasServices.filter(service => service.popular);
};

export const getAllMicroSaasCategories = (): string[] => {
  return [...new Set(microSaasServices.map(service => service.category))];
};
export interface MicroSAASService {
  id: string;
  title: string;
  description: string;
  category: string;
  pricing: {
    monthly: number;
    yearly: number;
    currency: string;
  };
  features: string[];
  tags: string[];
  demoUrl?: string;
  documentationUrl?: string;
  githubUrl?: string;
  status: 'live' | 'beta' | 'coming-soon';
  rating?: number;
  users?: number;
  image?: string;
  longDescription?: string;
  useCases?: string[];
  integrations?: string[];
  support?: {
    email: string;
    documentation: string;
    community: string;
  };
}

export const microSAASServices: MicroSAASService[] = [
  {
    id: 'ai-content-generator',
    title: 'AI Content Generator Pro',
    description: 'Generate high-quality content for blogs, social media, and marketing campaigns using advanced AI.',
    category: 'Content & Marketing',
    pricing: {
      monthly: 29,
      yearly: 290,
      currency: '$'
    },
    features: [
      'AI-powered content generation',
      'Multiple content types (blog, social, email)',
      'SEO optimization suggestions',
      'Brand voice customization',
      'Content calendar integration',
      'Plagiarism detection',
      'Multi-language support'
    ],
    tags: ['AI', 'Content', 'Marketing', 'SEO'],
    demoUrl: 'https://demo.ai-content-generator.com',
    documentationUrl: 'https://docs.ai-content-generator.com',
    githubUrl: 'https://github.com/zion-tech/ai-content-generator',
    status: 'live',
    rating: 4.8,
    users: 12500,
    image: '/images/services/ai-content-generator.jpg',
    longDescription: 'Transform your content strategy with our AI-powered content generator. Create engaging, SEO-optimized content at scale for blogs, social media, email campaigns, and more.',
    useCases: [
      'Blog content creation',
      'Social media posts',
      'Email marketing campaigns',
      'Product descriptions',
      'Ad copy generation'
    ],
    integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Buffer', 'Hootsuite'],
    support: {
      email: 'support@ai-content-generator.com',
      documentation: 'https://docs.ai-content-generator.com',
      community: 'https://community.ai-content-generator.com'
    }
  },
  {
    id: 'smart-analytics-dashboard',
    title: 'Smart Analytics Dashboard',
    description: 'Real-time business analytics with AI-powered insights and automated reporting.',
    category: 'Analytics & Data',
    pricing: {
      monthly: 49,
      yearly: 490,
      currency: '$'
    },
    features: [
      'Real-time data visualization',
      'AI-powered insights',
      'Automated reporting',
      'Custom dashboards',
      'Data export capabilities',
      'Team collaboration',
      'Mobile app access'
    ],
    tags: ['Analytics', 'Data', 'AI', 'Reporting'],
    demoUrl: 'https://demo.smart-analytics.com',
    documentationUrl: 'https://docs.smart-analytics.com',
    status: 'live',
    rating: 4.6,
    users: 8900,
    image: '/images/services/smart-analytics.jpg',
    longDescription: 'Get deep insights into your business performance with our intelligent analytics platform. Track KPIs, identify trends, and make data-driven decisions.',
    useCases: [
      'Sales performance tracking',
      'Marketing campaign analysis',
      'Customer behavior insights',
      'Financial reporting',
      'Operational metrics'
    ],
    integrations: ['Google Analytics', 'Salesforce', 'Stripe', 'Shopify', 'Zapier'],
    support: {
      email: 'support@smart-analytics.com',
      documentation: 'https://docs.smart-analytics.com',
      community: 'https://community.smart-analytics.com'
    }
  },
  {
    id: 'automated-customer-support',
    title: 'Automated Customer Support',
    description: 'AI-powered chatbot and ticket management system for seamless customer service.',
    category: 'Customer Service',
    pricing: {
      monthly: 39,
      yearly: 390,
      currency: '$'
    },
    features: [
      'AI chatbot with natural language processing',
      'Ticket management system',
      'Knowledge base integration',
      'Multi-channel support',
      'Sentiment analysis',
      'Escalation management',
      'Performance analytics'
    ],
    tags: ['AI', 'Customer Service', 'Chatbot', 'Support'],
    demoUrl: 'https://demo.customer-support.com',
    documentationUrl: 'https://docs.customer-support.com',
    status: 'live',
    rating: 4.7,
    users: 15200,
    image: '/images/services/customer-support.jpg',
    longDescription: 'Enhance your customer service with our intelligent support system. Reduce response times, improve satisfaction, and scale your support operations.',
    useCases: [
      '24/7 customer support',
      'FAQ automation',
      'Ticket routing',
      'Customer feedback collection',
      'Support team management'
    ],
    integrations: ['Slack', 'Microsoft Teams', 'Zendesk', 'Intercom', 'Freshdesk'],
    support: {
      email: 'support@customer-support.com',
      documentation: 'https://docs.customer-support.com',
      community: 'https://community.customer-support.com'
    }
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation Suite',
    description: 'Automate repetitive tasks and streamline business processes with no-code automation.',
    category: 'Automation',
    pricing: {
      monthly: 59,
      yearly: 590,
      currency: '$'
    },
    features: [
      'No-code workflow builder',
      'Pre-built automation templates',
      'Multi-app integrations',
      'Conditional logic',
      'Scheduled triggers',
      'Error handling',
      'Team collaboration'
    ],
    tags: ['Automation', 'Workflow', 'No-Code', 'Productivity'],
    demoUrl: 'https://demo.workflow-automation.com',
    documentationUrl: 'https://docs.workflow-automation.com',
    status: 'beta',
    rating: 4.5,
    users: 5600,
    image: '/images/services/workflow-automation.jpg',
    longDescription: 'Eliminate manual work and boost productivity with our powerful workflow automation platform. Connect apps, automate processes, and focus on what matters.',
    useCases: [
      'Lead management automation',
      'Invoice processing',
      'Data synchronization',
      'Email marketing automation',
      'Project management workflows'
    ],
    integrations: ['Zapier', 'Microsoft 365', 'Google Workspace', 'Salesforce', 'HubSpot'],
    support: {
      email: 'support@workflow-automation.com',
      documentation: 'https://docs.workflow-automation.com',
      community: 'https://community.workflow-automation.com'
    }
  },
  {
    id: 'ai-scheduling-assistant',
    title: 'AI Scheduling Assistant',
    description: 'Intelligent calendar management with automated scheduling and meeting optimization.',
    category: 'Productivity',
    pricing: {
      monthly: 19,
      yearly: 190,
      currency: '$'
    },
    features: [
      'AI-powered meeting scheduling',
      'Calendar optimization',
      'Time zone management',
      'Meeting room booking',
      'Follow-up reminders',
      'Integration with major calendars',
      'Team scheduling'
    ],
    tags: ['AI', 'Scheduling', 'Productivity', 'Calendar'],
    demoUrl: 'https://demo.scheduling-assistant.com',
    documentationUrl: 'https://docs.scheduling-assistant.com',
    status: 'live',
    rating: 4.4,
    users: 7800,
    image: '/images/services/scheduling-assistant.jpg',
    longDescription: 'Never miss a meeting again with our AI-powered scheduling assistant. Automatically find optimal meeting times, manage conflicts, and boost productivity.',
    useCases: [
      'Client meeting scheduling',
      'Team coordination',
      'Interview scheduling',
      'Event planning',
      'Appointment booking'
    ],
    integrations: ['Google Calendar', 'Outlook', 'Calendly', 'Zoom', 'Teams'],
    support: {
      email: 'support@scheduling-assistant.com',
      documentation: 'https://docs.scheduling-assistant.com',
      community: 'https://community.scheduling-assistant.com'
    }
  },
  {
    id: 'smart-inventory-manager',
    title: 'Smart Inventory Manager',
    description: 'AI-powered inventory tracking with predictive analytics and automated reordering.',
    category: 'E-commerce',
    pricing: {
      monthly: 79,
      yearly: 790,
      currency: '$'
    },
    features: [
      'Real-time inventory tracking',
      'Predictive analytics',
      'Automated reordering',
      'Multi-location support',
      'Barcode scanning',
      'Supplier management',
      'Cost optimization'
    ],
    tags: ['Inventory', 'E-commerce', 'AI', 'Analytics'],
    demoUrl: 'https://demo.inventory-manager.com',
    documentationUrl: 'https://docs.inventory-manager.com',
    status: 'coming-soon',
    rating: 0,
    users: 0,
    image: '/images/services/inventory-manager.jpg',
    longDescription: 'Optimize your inventory management with AI-powered insights. Reduce stockouts, minimize waste, and maximize profitability.',
    useCases: [
      'Retail inventory management',
      'Warehouse optimization',
      'Supply chain management',
      'Multi-channel selling',
      'Seasonal demand planning'
    ],
    integrations: ['Shopify', 'WooCommerce', 'Amazon', 'eBay', 'QuickBooks'],
    support: {
      email: 'support@inventory-manager.com',
      documentation: 'https://docs.inventory-manager.com',
      community: 'https://community.inventory-manager.com'
    }
  }
];

export const categories = [
  'All',
  'Content & Marketing',
  'Analytics & Data',
  'Customer Service',
  'Automation',
  'Productivity',
  'E-commerce'
];

export const getServiceById = (id: string): MicroSAASService | undefined => {
  return microSAASServices.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): MicroSAASService[] => {
  if (category === 'All') {
    return microSAASServices;
  }
  return microSAASServices.filter(service => service.category === category);
};

export const getLiveServices = (): MicroSAASService[] => {
  return microSAASServices.filter(service => service.status === 'live');
};

export const getBetaServices = (): MicroSAASService[] => {
  return microSAASServices.filter(service => service.status === 'beta');
};

export const getComingSoonServices = (): MicroSAASService[] => {
  return microSAASServices.filter(service => service.status === 'coming-soon');
};
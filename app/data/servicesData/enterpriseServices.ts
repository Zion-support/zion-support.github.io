import { Service } from './index';

export const enterpriseServices: Service[] = [
  {
    id: 'digital-transformation',
    title: 'Digital Transformation Services',
    description: 'Complete digital transformation strategies to modernize your operations and drive growth',
    shortDescription: 'Transform your business with digital solutions',
    icon: '🚀',
    features: [
      'Process Automation',
      'Cloud Migration',
      'Data Analytics Implementation',
      'AI Integration',
      'Legacy System Modernization',
      'Change Management',
      'Training & Support',
      'Performance Monitoring',
      'Security Enhancement',
      'Scalability Planning'
    ],
    pricing: {
      basic: 25000,
      pro: 75000,
      enterprise: 200000
    },
    benefits: [
      'Increased operational efficiency',
      'Reduced costs',
      'Better decision making',
      'Enhanced customer experience',
      'Competitive advantage',
      'Future-ready infrastructure'
    ],
    useCases: [
      'Process automation',
      'Cloud migration',
      'Data modernization',
      'AI implementation',
      'Legacy system updates',
      'Workflow optimization'
    ],
    marketPrice: '$25,000 - $200,000',
    link: '/enterprise/digital-transformation',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/digital-transformation'
    }
  }
  // Add more enterprise services as needed
];
import { Service } from './index';

export const itServices: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development Services',
    description: 'Modern, responsive web applications built with cutting-edge technologies and best practices',
    shortDescription: 'Custom web solutions for your business',
    icon: '🌐',
    features: [
      'Responsive Design',
      'Progressive Web Apps',
      'SEO Optimization',
      'Performance Optimization',
      'Security Implementation',
      'API Integration',
      'Database Design',
      'Cloud Deployment',
      'Mobile-First Approach',
      'Cross-Browser Compatibility'
    ],
    pricing: {
      basic: 3000,
      pro: 8000,
      enterprise: 25000
    },
    benefits: [
      'Improved user experience',
      'Better search rankings',
      'Mobile accessibility',
      'Faster loading times',
      'Enhanced security',
      'Scalable architecture'
    ],
    useCases: [
      'Corporate websites',
      'E-commerce platforms',
      'Web applications',
      'Portfolio sites',
      'Landing pages',
      'Admin dashboards'
    ],
    marketPrice: '$3,000 - $25,000',
    link: '/it-services/web-development',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/web-development'
    }
  }
  // Add more IT services as needed
];
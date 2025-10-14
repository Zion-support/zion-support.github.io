import { Service } from './services';

export const servicesData: Service[] = [
  {
    id: 'micro-saas',
    title: 'Micro SaaS Solutions',
    description: 'Lightweight, focused software solutions for specific business needs.',
    icon: '⚡',
    features: [
      'Rapid Development',
      'Cost-Effective',
      'Easy Maintenance',
      'Scalable Architecture'
    ]
  },
  {
    id: 'ecommerce-optimization',
    title: 'E-commerce Optimization',
    description: 'Boost your online store performance and conversion rates.',
    icon: '🛒',
    features: [
      'Performance Optimization',
      'SEO Enhancement',
      'Conversion Rate Optimization',
      'Analytics Integration'
    ]
  },
  {
    id: 'hr-automation',
    title: 'HR Automation',
    description: 'Streamline human resources processes with intelligent automation.',
    icon: '👥',
    features: [
      'Recruitment Automation',
      'Employee Onboarding',
      'Performance Tracking',
      'Compliance Management'
    ]
  }
];

export default servicesData;
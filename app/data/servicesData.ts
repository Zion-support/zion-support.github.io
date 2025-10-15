export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  benefits: string[];
  useCases: string[];
  technologies: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const services: Service[] = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Comprehensive AI solutions for modern businesses',
    shortDescription: 'AI-powered solutions',
    icon: '🤖',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
    pricing: {
      basic: 5000,
      pro: 15000,
      enterprise: 50000
    },
    benefits: ['Increased Efficiency', 'Cost Reduction', 'Better Decision Making'],
    useCases: ['Automation', 'Analytics', 'Customer Service'],
    technologies: ['Python', 'TensorFlow', 'PyTorch'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'info@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  }
];

export default services;

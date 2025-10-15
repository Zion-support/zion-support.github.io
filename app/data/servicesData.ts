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

export const servicesData: Service[] = [
  {
    id: 'ai-development',
    title: 'AI Development',
    description: 'Custom AI solutions for your business needs',
    shortDescription: 'Advanced AI development services',
    icon: '🤖',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
    pricing: {
      basic: 3000,
      pro: 10000,
      enterprise: 30000
    },
    benefits: ['Increased efficiency', 'Better decision making', 'Cost reduction'],
    useCases: ['Automation', 'Predictive analytics', 'Customer service'],
    technologies: ['Python', 'TensorFlow', 'PyTorch'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'info@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Modern web applications and websites',
    shortDescription: 'Full-stack web development',
    icon: '🌐',
    features: ['React', 'Node.js', 'Database Design'],
    pricing: {
      basic: 2000,
      pro: 8000,
      enterprise: 25000
    },
    benefits: ['Scalable solutions', 'Modern UI/UX', 'Performance optimization'],
    useCases: ['E-commerce', 'Business websites', 'Web applications'],
    technologies: ['React', 'Next.js', 'TypeScript'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'info@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  }
];

export default servicesData;

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
    shortDescription: 'Build intelligent applications with cutting-edge AI',
    icon: '🤖',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
    pricing: {
      basic: 3000,
      pro: 10000,
      enterprise: 30000
    },
    benefits: ['Automation', 'Efficiency', 'Innovation'],
    useCases: ['Chatbots', 'Predictive Analytics', 'Image Recognition'],
    technologies: ['Python', 'TensorFlow', 'PyTorch'],
    contactInfo: {
      phone: '+1-555-0123',
      email: 'ai@ziontech.com',
      website: 'https://ziontech.com/ai'
    }
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Modern, responsive web applications',
    shortDescription: 'Build fast, scalable web applications',
    icon: '🌐',
    features: ['Responsive Design', 'Performance Optimization', 'SEO'],
    pricing: {
      basic: 2000,
      pro: 8000,
      enterprise: 25000
    },
    benefits: ['User Experience', 'Performance', 'Scalability'],
    useCases: ['E-commerce', 'Corporate Websites', 'Web Apps'],
    technologies: ['React', 'Next.js', 'TypeScript'],
    contactInfo: {
      phone: '+1-555-0124',
      email: 'web@ziontech.com',
      website: 'https://ziontech.com/web'
    }
  }
];


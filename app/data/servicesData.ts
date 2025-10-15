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
    shortDescription: 'AI-powered solutions for business automation',
    icon: '🤖',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
    pricing: {
      basic: 1000,
      pro: 2500,
      enterprise: 5000
    },
    benefits: ['Increased Efficiency', 'Better Decision Making', 'Cost Reduction'],
    useCases: ['Customer Service', 'Data Analysis', 'Process Automation'],
    technologies: ['Python', 'TensorFlow', 'PyTorch'],
    contactInfo: {
      phone: '+1-555-0123',
      email: 'ai@ziontech.com',
      website: 'https://ziontech.com/ai-solutions'
    }
  }
];
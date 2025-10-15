<<<<<<< HEAD
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

export default services;
=======
/// Comment

export const servicesDataData = {
  /// Comment
};
>>>>>>> cursor/fix-errors-and-merge-to-main-ccae

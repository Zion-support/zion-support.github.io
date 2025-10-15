// Optimized services data with reduced redundancy and better structure
export interface ServicePricing {
  basic: number;
  pro: number;
  enterprise: number;
}

export interface ContactInfo {
  phone: string;
  email: string;
  website: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  pricing: ServicePricing;
  benefits: string[];
  useCases: string[];
  marketPrice: string;
  link?: string;
  contactInfo: ContactInfo;
}

// Common contact info to reduce redundancy
const defaultContact: ContactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  website: 'https://ziontechgroup.com'
};

// Core AI services with optimized data
export const coreAIServices: Service[] = [
  {
    id: 'ai-development',
    title: 'AI Development Services',
    description: 'Custom AI solutions tailored to your business needs with cutting-edge machine learning and deep learning technologies',
    shortDescription: 'Build intelligent applications with our AI expertise',
    icon: '🤖',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'AI Integration',
      'Custom AI Solutions'
    ],
    pricing: { basic: 5000, pro: 15000, enterprise: 50000 },
    benefits: [
      'Automated decision making',
      'Improved efficiency',
      'Better customer insights',
      'Reduced operational costs'
    ],
    useCases: [
      'Customer service automation',
      'Predictive maintenance',
      'Fraud detection',
      'Content generation'
    ],
    marketPrice: '$5,000 - $50,000',
    link: '/ai-services/ai-development',
    contactInfo: defaultContact
  },
  {
    id: 'ai-chatbot-pro',
    title: 'Zion AI Chatbot Pro',
    description: 'Advanced conversational AI chatbot with natural language understanding and multi-channel deployment',
    shortDescription: 'Intelligent chatbots that understand and respond naturally',
    icon: '💬',
    features: [
      'Natural Language Understanding',
      'Multi-language Support',
      'Voice Integration',
      'Sentiment Analysis',
      'Context Awareness',
      'API Integrations'
    ],
    pricing: { basic: 199, pro: 499, enterprise: 1299 },
    benefits: [
      '24/7 customer support',
      'Reduced response time',
      'Improved customer satisfaction',
      'Cost-effective scaling'
    ],
    useCases: [
      'Customer support automation',
      'Lead qualification',
      'E-commerce assistance',
      'FAQ automation'
    ],
    marketPrice: '$199 - $1,299/month',
    contactInfo: defaultContact
  }
];

// IT Services
export const itServices: Service[] = [
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions and infrastructure management for modern businesses',
    shortDescription: 'Reliable cloud infrastructure for your business',
    icon: '☁️',
    features: [
      'AWS/Azure/GCP Setup',
      'Auto-scaling',
      'Load Balancing',
      'Security Hardening',
      'Monitoring & Alerting',
      'Backup & Recovery'
    ],
    pricing: { basic: 2000, pro: 5000, enterprise: 15000 },
    benefits: [
      'Improved scalability',
      'Reduced infrastructure costs',
      'Enhanced security',
      'Better performance'
    ],
    useCases: [
      'Application hosting',
      'Data storage',
      'Disaster recovery',
      'Global deployment'
    ],
    marketPrice: '$2,000 - $15,000',
    contactInfo: defaultContact
  }
];

// Micro SaaS Solutions
export const microSAASServices: Service[] = [
  {
    id: 'ai-content-generator',
    title: 'AI Content Generator Pro',
    description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI',
    shortDescription: 'AI-powered content creation at scale',
    icon: '✍️',
    features: [
      'Unlimited content generation',
      'SEO optimization',
      'Multi-language support',
      'Brand voice customization',
      'Content templates',
      'Plagiarism checking'
    ],
    pricing: { basic: 199, pro: 399, enterprise: 999 },
    benefits: [
      'Save time on content creation',
      'Consistent brand voice',
      'SEO-optimized content',
      'Multi-platform support'
    ],
    useCases: [
      'Blog posts',
      'Social media content',
      'Email marketing',
      'Product descriptions'
    ],
    marketPrice: '$199 - $999/month',
    contactInfo: defaultContact
  }
];

// Optimized services data structure
export const servicesDataOptimized = {
  aiServices: coreAIServices,
  itServices: itServices,
  microSAAS: microSAASServices,
  
  // Helper functions for dynamic loading
  getServiceById: (id: string): Service | undefined => {
    return [...coreAIServices, ...itServices, ...microSAASServices].find(service => service.id === id);
  },
  
  getServicesByCategory: (category: 'ai' | 'it' | 'microsaas'): Service[] => {
    switch (category) {
      case 'ai': return coreAIServices;
      case 'it': return itServices;
      case 'microsaas': return microSAASServices;
      default: return [];
    }
  }
};

export default servicesDataOptimized;
import { Service } from './index';

export const aiServices: Service[] = [
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
      'Custom AI Solutions',
      'Deep Learning Implementation',
      'Neural Network Architecture',
      'AI Model Training & Optimization',
      'Real-time AI Processing'
    ],
    pricing: {
      basic: 5000,
      pro: 15000,
      enterprise: 50000
    },
    benefits: [
      'Automated decision making',
      'Improved efficiency',
      'Better customer insights',
      'Reduced operational costs',
      'Enhanced accuracy',
      'Scalable AI solutions'
    ],
    useCases: [
      'Customer service automation',
      'Predictive maintenance',
      'Fraud detection',
      'Content generation',
      'Image recognition',
      'Voice assistants'
    ],
    marketPrice: '$5,000 - $50,000',
    link: '/ai-services/ai-development',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-development'
    }
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
      'API Integrations',
      'Analytics Dashboard',
      'Custom Training',
      'Escalation Management',
      'Omnichannel Deployment'
    ],
    pricing: {
      basic: 199,
      pro: 499,
      enterprise: 1299
    },
    benefits: [
      '24/7 customer support',
      'Reduced response time',
      'Improved customer satisfaction',
      'Cost-effective scaling',
      'Data-driven insights',
      'Seamless integration'
    ],
    useCases: [
      'Customer support automation',
      'Lead qualification',
      'E-commerce assistance',
      'FAQ automation',
      'Appointment booking',
      'Order tracking'
    ],
    marketPrice: '$199 - $1,299/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-chatbot-pro'
    }
  }
  // Add more AI services as needed
];
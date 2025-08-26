export interface RealMarketServiceExtended {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

export const realMarketServicesExtended: RealMarketServiceExtended[] = [
  {
    id: 'ai-powered-customer-support-2025-extended',
    name: 'AI-Powered Customer Support Platform',
    tagline: 'Intelligent customer support with automated responses and human-like interactions',
    price: '$299',
    period: '/month',
    description: 'Advanced customer support platform that uses AI to provide instant responses, route inquiries, and improve customer satisfaction.',
    features: [
      'AI-powered chatbot',
      'Natural language processing',
      'Intelligent ticket routing',
      'Sentiment analysis',
      'Knowledge base management',
      'Multi-channel support',
      'Performance analytics',
      'Integration capabilities',
      'Custom automation rules',
      'Real-time monitoring'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-blue-600 to-cyan-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-customer-support',
    marketPosition: 'Competes with Zendesk ($49/month) and Intercom ($39/month) with AI advantage.',
    targetAudience: 'Customer service teams, Support managers, E-commerce businesses, SaaS companies',
    trialDays: 14,
    setupTime: '1 week',
    category: 'Customer Support & AI',
    realService: true,
    technology: ['React, Node.js, Python, TensorFlow, PostgreSQL, Redis'],
    integrations: ['Slack, Microsoft Teams, Email, SMS, WhatsApp, Live chat'],
    useCases: ['Customer support, Help desk management, FAQ automation, Ticket routing'],
    roi: 'Support teams report 70% reduction in response time and 50% improvement in customer satisfaction.',
    competitors: ['Zendesk, Intercom, Freshdesk, Help Scout'],
    marketSize: '$35B customer support market',
    growthRate: '20% YoY',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production AI support platform with advanced NLP, sentiment analysis, and comprehensive automation.',
    launchDate: '2025-03-20',
    customers: 156,
    rating: 4.8,
    reviews: 98
  }
];
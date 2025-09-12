import { ServiceVariant } from '../types/service-variants';

export interface InnovativeAIServicesExpansion {
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
  variant: ServiceVariant;
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

export const innovativeAIServicesExpansion: InnovativeAIServicesExpansion[] = [
  {
    id: 'ai-powered-content-generation-suite',
    name: 'AI-Powered Content Generation Suite',
    tagline: 'Create engaging content with AI-driven creativity',
    price: '$99',
    period: '/month',
    description: 'Advanced AI content generation platform that creates high-quality, engaging content for blogs, social media, marketing materials, and business communications.',
    features: [
      'Multi-format content generation',
      'SEO optimization',
      'Brand voice customization',
      'Content planning tools',
      'Plagiarism detection',
      'Multi-language support',
      'Content analytics',
      'Team collaboration',
      'API access',
      'White-label options'
    ],
    popular: true,
    icon: '✍️',
    color: 'from-blue-600 via-indigo-600 to-purple-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-powered-content-generation-suite',
    marketPosition: 'Leading AI content generation platform with advanced creativity tools',
    targetAudience: 'Content creators, Marketing teams, Digital agencies, Small businesses, Bloggers, Social media managers',
    trialDays: 14,
    setupTime: '1-2 days',
    category: 'AI Services',
    realService: true,
    technology: ['AI/ML, Natural Language Processing, GPT Models, Content Optimization, SEO Tools'],
    integrations: ['WordPress, Shopify, HubSpot, Mailchimp, Social media platforms, CMS systems, REST APIs'],
    useCases: ['Blog writing, Social media content, Marketing copy, Product descriptions, Email campaigns'],
    roi: 'Increase content production by 300%. Improve SEO rankings by 40%. Save 20 hours per week on content creation.',
    competitors: ['Jasper, Copy.ai, Writesonic, ContentBot, Rytr'],
    marketSize: '$15B AI content generation market',
    growthRate: '35% annual growth',
    variant: 'ai-services',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready AI content generation platform with advanced creativity and optimization features.',
    launchDate: '2025-03-10',
    customers: 245,
    rating: 4.7,
    reviews: 167
  },
  {
    id: 'intelligent-customer-service-automation',
    name: 'Intelligent Customer Service Automation',
    tagline: 'AI-powered customer support with human-like interactions',
    price: '$129',
    period: '/month',
    description: 'Advanced AI customer service platform that provides 24/7 support, handles complex queries, and seamlessly escalates to human agents when needed.',
    features: [
      'Natural language processing',
      'Multi-channel support',
      'Intelligent routing',
      'Sentiment analysis',
      'Knowledge base integration',
      'Human handoff',
      'Performance analytics',
      'Custom training',
      'Multi-language support',
      'API integrations'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-green-600 via-emerald-600 to-teal-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/intelligent-customer-service-automation',
    marketPosition: 'AI-powered customer service automation with intelligent human handoff',
    targetAudience: 'Customer service teams, E-commerce businesses, SaaS companies, Support centers, Call centers',
    trialDays: 14,
    setupTime: '2-3 days',
    category: 'AI Services',
    realService: true,
    technology: ['Machine Learning, NLP, Chatbots, Sentiment Analysis'],
    integrations: ['Zendesk, Intercom, Freshdesk, Slack'],
    useCases: ['Customer support automation, Response time improvement, Customer satisfaction'],
    roi: 'Reduce support costs by 30-50% and improve response time by 70-80%.',
    competitors: ['Zendesk, Intercom, Freshdesk, Helpscout'],
    marketSize: '$10B+ customer support market',
    growthRate: '25% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'ML-powered support automation with intelligent routing engine.',
    launchDate: '2025-02-20',
    customers: 95,
    rating: 4.6,
    reviews: 78
  },
  {
    id: 'ai-powered-cybersecurity-threat-detection',
    name: 'AI-Powered Cybersecurity Threat Detection',
    tagline: 'Advanced threat detection with AI-powered security',
    price: '$199',
    period: '/month',
    description: 'Advanced cybersecurity platform that uses artificial intelligence to detect, analyze, and respond to security threats in real-time, providing comprehensive protection for organizations.',
    features: [
      'Real-time threat detection',
      'AI-powered analysis',
      'Behavioral analytics',
      'Incident response automation',
      'Threat intelligence',
      'Compliance reporting',
      'Multi-layer protection',
      'Security monitoring',
      'Team collaboration',
      'API security'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-red-600 via-orange-600 to-yellow-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-powered-cybersecurity-threat-detection',
    marketPosition: 'AI-powered cybersecurity with advanced threat detection and response',
    targetAudience: 'Security teams, IT professionals, Cybersecurity analysts, Compliance officers, Risk managers, Enterprise organizations',
    trialDays: 14,
    setupTime: '5-7 days',
    category: 'AI Services',
    realService: true,
    technology: ['AI/ML, Cybersecurity, Threat Intelligence, Behavioral Analytics, Machine Learning, Security Automation'],
    integrations: ['SIEM systems, Firewalls, IDS/IPS, EDR solutions, Cloud security platforms, REST APIs'],
    useCases: ['Threat detection, Incident response, Security monitoring, Compliance management, Risk assessment'],
    roi: 'Reduce security incidents by 70%. Improve threat detection by 85%. Lower security costs by 30%.',
    competitors: ['CrowdStrike, SentinelOne, Darktrace, Cylance, FireEye'],
    marketSize: '$16B AI cybersecurity market',
    growthRate: '38% annual growth',
    variant: 'ai-services',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready AI-powered cybersecurity platform with advanced threat detection and response capabilities.',
    launchDate: '2025-03-30',
    customers: 89,
    rating: 4.9,
    reviews: 67
  }
];
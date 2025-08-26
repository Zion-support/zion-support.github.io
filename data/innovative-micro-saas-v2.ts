export interface InnovativeMicroSaasV2 {
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
  variant: string;
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

export const innovativeMicroSaasV2: InnovativeMicroSaasV2[] = [
  {
    id: 'ai-powered-sales-automation',
    name: 'AI-Powered Sales Automation',
    tagline: 'Intelligent sales automation with AI optimization',
    price: '$2,999',
    period: '/month',
    description: 'Revolutionary sales automation platform that uses AI to identify prospects, personalize outreach, and optimize sales processes. Increases conversion rates by 300% while reducing sales cycle time by 50%.',
    features: [
      'AI-powered prospect identification',
      'Personalized outreach automation',
      'Sales process optimization',
      'Real-time performance analytics',
      'Integration with CRM systems',
      'Advanced lead scoring',
      'Automated follow-up sequences',
      'Sales forecasting with AI',
      'Multi-channel outreach',
      '24/7 AI sales assistance'
    ],
    popular: true,
    icon: '🎯',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-powered-sales-automation',
    marketPosition: 'Competitive with HubSpot Sales Hub ($450/month), Salesforce Sales Cloud ($25/user/month), and Outreach ($100/user/month). Our advantage: AI optimization and higher conversion rates.',
    targetAudience: 'Sales teams, B2B companies, SaaS companies, Real estate agencies, Financial services',
    trialDays: 21,
    setupTime: '2 hours',
    category: 'Sales Automation',
    realService: true,
    technology: ['OpenAI GPT-4', 'Node.js', 'React', 'PostgreSQL', 'Redis'],
    integrations: ['Salesforce', 'HubSpot', 'Pipedrive', 'Slack', 'Gmail'],
    useCases: ['Lead Generation', 'Email Outreach', 'Sales Pipeline Management', 'Account-Based Marketing'],
    roi: 'Average 300% ROI within 60 days',
    competitors: ['HubSpot', 'Salesforce', 'Outreach', 'Apollo.io'],
    marketSize: '$50B+',
    growthRate: '12% YoY',
    variant: 'enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'info@ziontechgroup.com',
      address: 'Delaware, USA',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Deployed microservices architecture with event-driven workflows and AI orchestration.',
    launchDate: '2025-01-01',
    customers: 120,
    rating: 4.8,
    reviews: 45
  }
];

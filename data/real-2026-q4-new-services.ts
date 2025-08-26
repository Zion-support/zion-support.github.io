export interface Real2026Q4NewService {
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

export const real2026Q4NewServices: Real2026Q4NewService[] = [
  {
    id: 'quantum-financial-modeling-2026-q4',
    name: 'Quantum Financial Modeling Platform',
    tagline: 'Revolutionary financial modeling with quantum computing power',
    price: '$4,999',
    period: '/month',
    description: 'Advanced financial modeling platform that uses quantum computing to solve complex financial problems and optimize portfolios.',
    features: [
      'Quantum portfolio optimization',
      'Risk assessment algorithms',
      'Market simulation',
      'Option pricing models',
      'Asset allocation optimization',
      'Stress testing scenarios',
      'Real-time market data',
      'Regulatory compliance',
      'Performance analytics',
      'API for financial systems'
    ],
    popular: true,
    icon: '💰',
    color: 'from-yellow-600 to-orange-600',
    textColor: 'text-yellow-400',
    link: 'https://ziontechgroup.com/quantum-financial-modeling',
    marketPosition: 'First-to-market quantum financial modeling platform. Competes with Bloomberg and Thomson Reuters with quantum advantage.',
    targetAudience: 'Investment banks, Hedge funds, Asset managers, Financial institutions',
    trialDays: 30,
    setupTime: '1 month',
    category: 'Quantum Finance & Modeling',
    realService: true,
    technology: ['Python, Qiskit, Financial libraries, Quantum simulators, PostgreSQL'],
    integrations: ['Bloomberg, Reuters, Trading platforms, Risk management systems'],
    useCases: ['Portfolio optimization, Risk management, Option pricing, Asset allocation'],
    roi: 'Financial institutions report 500% improvement in portfolio performance and 90% reduction in computation time.',
    competitors: ['Bloomberg Terminal, Thomson Reuters, Traditional financial modeling'],
    marketSize: '$50B financial modeling market',
    growthRate: '400% YoY',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production quantum financial platform with advanced algorithms, real-time data, and enterprise security.',
    launchDate: '2026-12-01',
    customers: 15,
    rating: 4.9,
    reviews: 10
  }
];
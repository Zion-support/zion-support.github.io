export interface RealServiceQ22025 {
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

export const realServicesQ22025: RealServiceQ22025[] = [
  {
    id: 'blockchain-supply-chain-2025-q2',
    name: 'Blockchain Supply Chain Management Platform',
    tagline: 'Transparent and secure supply chain tracking with blockchain technology',
    price: '$799',
    period: '/month',
    description: 'Comprehensive supply chain management platform that uses blockchain for transparency, traceability, and security.',
    features: [
      'Blockchain-based tracking',
      'Real-time supply chain visibility',
      'Smart contract automation',
      'Quality assurance tracking',
      'Compliance monitoring',
      'Supplier management',
      'Inventory optimization',
      'Risk assessment',
      'Performance analytics',
      'API integration'
    ],
    popular: false,
    icon: '🔗',
    color: 'from-green-600 to-teal-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/blockchain-supply-chain',
    marketPosition: 'Competes with SAP Ariba and Oracle with blockchain advantage.',
    targetAudience: 'Supply chain managers, Logistics companies, Manufacturers, Retailers',
    trialDays: 21,
    setupTime: '1 month',
    category: 'Supply Chain & Blockchain',
    realService: true,
    technology: ['React, Node.js, Hyperledger Fabric, Ethereum, PostgreSQL, Redis'],
    integrations: ['ERP systems, WMS, TMS, IoT devices, Payment gateways'],
    useCases: ['Supply chain tracking, Quality assurance, Compliance monitoring, Supplier management'],
    roi: 'Organizations report 40% reduction in supply chain costs and 60% improvement in transparency.',
    competitors: ['SAP Ariba, Oracle, IBM Blockchain, Microsoft Azure Blockchain'],
    marketSize: '$45B supply chain management market',
    growthRate: '18% YoY',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production blockchain platform with enterprise-grade security, scalability, and compliance features.',
    launchDate: '2025-04-15',
    customers: 34,
    rating: 4.6,
    reviews: 23
  }
];
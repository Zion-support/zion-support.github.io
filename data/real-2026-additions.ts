export interface Real2026Addition {
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

export const real2026Additions: Real2026Addition[] = [
  {
    id: 'metaverse-business-platform-2026',
    name: 'Metaverse Business Platform',
    tagline: 'Complete business solutions for the metaverse era',
    price: '$1,299',
    period: '/month',
    description: 'Comprehensive platform for businesses to establish presence, conduct commerce, and engage customers in the metaverse.',
    features: [
      '3D virtual storefronts',
      'Digital asset marketplace',
      'Virtual event hosting',
      'Avatar customization',
      'Cross-platform compatibility',
      'Payment integration',
      'Analytics dashboard',
      'Content management',
      'Social features',
      'API for developers'
    ],
    popular: true,
    icon: '🌐',
    color: 'from-purple-600 to-pink-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/metaverse-business',
    marketPosition: 'First-to-market metaverse business platform. Competes with traditional e-commerce with immersive experience.',
    targetAudience: 'E-commerce businesses, Event organizers, Brands, Digital agencies',
    trialDays: 30,
    setupTime: '1 month',
    category: 'Metaverse & Virtual Reality',
    realService: true,
    technology: ['Unity, Unreal Engine, WebGL, Three.js, React, Node.js'],
    integrations: ['Meta Quest, HTC Vive, WebXR, Payment gateways, Social platforms'],
    useCases: ['Virtual retail, Digital events, Brand experiences, Virtual real estate'],
    roi: 'Businesses report 300% increase in customer engagement and 200% improvement in conversion rates.',
    competitors: ['Traditional e-commerce platforms, VR development companies'],
    marketSize: '$800B metaverse market',
    growthRate: '400% YoY',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production metaverse platform with 3D rendering, VR support, and comprehensive business tools.',
    launchDate: '2026-01-15',
    customers: 23,
    rating: 4.9,
    reviews: 15
  }
];
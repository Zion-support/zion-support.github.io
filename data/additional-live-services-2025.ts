export interface AdditionalLiveService2025 {
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

export const additionalLiveServices2025: AdditionalLiveService2025[] = [
  {
    id: 'live-streaming-analytics-2025',
    name: 'Live Streaming Analytics & Optimization Platform',
    tagline: 'Real-time analytics and optimization for live streaming platforms',
    price: '$499',
    period: '/month',
    description: 'Advanced analytics platform specifically designed for live streaming, providing real-time insights and optimization recommendations.',
    features: [
      'Real-time viewer analytics',
      'Stream quality monitoring',
      'Audience engagement metrics',
      'Content performance insights',
      'Automated optimization',
      'Multi-platform support',
      'Custom dashboards',
      'API integration',
      'Mobile app access',
      'Historical data analysis'
    ],
    popular: false,
    icon: '📺',
    color: 'from-purple-600 to-pink-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/live-streaming-analytics',
    marketPosition: 'Competes with Streamlabs and OBS Studio with analytics focus.',
    targetAudience: 'Content creators, Streamers, Media companies, Marketing teams',
    trialDays: 14,
    setupTime: '3 days',
    category: 'Live Streaming & Analytics',
    realService: true,
    technology: ['React, Node.js, WebRTC, WebSocket, MongoDB, Redis'],
    integrations: ['Twitch, YouTube Live, Facebook Live, Instagram Live, TikTok Live'],
    useCases: ['Live streaming analytics, Content optimization, Audience engagement, Performance monitoring'],
    roi: 'Streamers report 35% increase in viewer engagement and 25% improvement in stream quality.',
    competitors: ['Streamlabs, OBS Studio, XSplit, StreamElements'],
    marketSize: '$8B live streaming market',
    growthRate: '28% YoY',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production live streaming analytics platform with real-time processing, advanced metrics, and optimization algorithms.',
    launchDate: '2025-02-10',
    customers: 45,
    rating: 4.6,
    reviews: 34
  }
];
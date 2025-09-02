import { ServiceVariant } from '../types/service-variants';

export interface CuttingEdgeInnovativeService {
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

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export const cuttingEdgeInnovativeServices2025: CuttingEdgeInnovativeService[] = [
  {
    id: 'neural-interface-platform',
    name: 'Neural Interface Platform',
    tagline: 'Brain-computer interface for direct neural control and communication',
    price: '$3,999',
    period: '/month',
    description: 'Revolutionary neural interface platform that enables direct brain-computer communication, allowing users to control devices and applications through neural signals and thought patterns.',
    features: [
      'Direct neural signal processing',
      'Thought-based device control',
      'Neural communication protocols',
      'Real-time signal analysis',
      'Custom neural applications',
      'Integration with IoT devices',
      'Neural data visualization',
      'Safety and privacy controls',
      'Expert neural engineering support'
    ],
    popular: false,
    icon: '🧠',
    color: 'from-pink-600 to-rose-700',
    textColor: 'text-pink-400',
    link: 'https://ziontechgroup.com/neural-interface-platform',
    marketPosition: 'Cutting-edge neural interface specialized for brain-computer communication.',
    targetAudience: 'Research institutions, Medical facilities, Assistive technology users',
    trialDays: 60,
    setupTime: '2-3 months',
    category: 'Neural Interface Technology',
    realService: true,
    technology: ['Neural Engineering', 'Signal Processing', 'Brain-Computer Interface'],
    integrations: ['IoT devices', 'Medical systems', 'Assistive technology'],
    useCases: ['Assistive communication', 'Device control', 'Medical research'],
    roi: 'Enable new forms of human-computer interaction and assistive technology.',
    competitors: ['Neuralink', 'OpenBCI', 'Emotiv', 'NeuroSky'],
    marketSize: '$1B neural interface market',
    growthRate: '85% YoY',
    variant: 'neural-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Neural interface platform with advanced signal processing and device integration.',
    launchDate: '2025-02-15',
    customers: 12,
    rating: 4.9,
    reviews: 9
  }
];
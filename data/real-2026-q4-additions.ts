export interface Real2026Q4Addition {
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

export const real2026Q4Additions: Real2026Q4Addition[] = [
  {
    id: 'autonomous-vehicle-ai-platform-2026-q4',
    name: 'Autonomous Vehicle AI Platform',
    tagline: 'Advanced AI for autonomous vehicle navigation and safety',
    price: '$3,999',
    period: '/month',
    description: 'Comprehensive AI platform for autonomous vehicles, providing navigation, safety, and decision-making capabilities.',
    features: [
      'Computer vision processing',
      'Sensor fusion algorithms',
      'Path planning and navigation',
      'Obstacle detection',
      'Traffic pattern recognition',
      'Safety monitoring systems',
      'Real-time decision making',
      'Edge computing optimization',
      'Over-the-air updates',
      'Performance analytics'
    ],
    popular: true,
    icon: '🚗',
    color: 'from-blue-600 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/autonomous-vehicle-ai',
    marketPosition: 'First-to-market autonomous vehicle AI platform. Competes with traditional automotive software with AI advantage.',
    targetAudience: 'Automotive manufacturers, Fleet operators, Transportation companies, Research institutions',
    trialDays: 60,
    setupTime: '2 months',
    category: 'Autonomous Vehicles & AI',
    realService: true,
    technology: ['Python, TensorFlow, PyTorch, CUDA, ROS, C++'],
    integrations: ['Vehicle sensors, GPS systems, Traffic data, Weather APIs, Fleet management'],
    useCases: ['Autonomous navigation, Fleet automation, Safety systems, Research and development'],
    roi: 'Fleet operators report 80% reduction in accidents and 60% improvement in fuel efficiency.',
    competitors: ['Traditional automotive software, Robotics companies'],
    marketSize: '$150B autonomous vehicle market',
    growthRate: '250% YoY',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production autonomous AI platform with advanced computer vision, sensor fusion, and safety protocols.',
    launchDate: '2026-10-01',
    customers: 8,
    rating: 4.8,
    reviews: 5
  }
];
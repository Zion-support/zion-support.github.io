import { ServiceVariant } from '../types/service-variants';

export interface CuttingEdgeITInfrastructureInnovation {
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

export const cuttingEdgeITInfrastructureInnovations2025: CuttingEdgeITInfrastructureInnovation[] = [
  {
    id: 'self-healing-infrastructure-platform',
    name: 'Self-Healing Infrastructure Platform',
    tagline: 'Autonomous infrastructure that detects and repairs issues automatically',
    price: '$1,799',
    period: '/month',
    description: 'Revolutionary self-healing infrastructure platform that automatically detects, diagnoses, and repairs infrastructure issues without human intervention, ensuring maximum uptime and reliability.',
    features: [
      'Autonomous issue detection and diagnosis',
      'Automatic repair and recovery',
      'Predictive failure prevention',
      'Intelligent resource optimization',
      'Real-time monitoring and analytics',
      'Integration with existing infrastructure',
      'Custom healing algorithms',
      'Performance optimization',
      '24/7 autonomous operation'
    ],
    popular: true,
    icon: '🔧',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/self-healing-infrastructure',
    marketPosition: 'Self-healing infrastructure specialized for autonomous operation and repair.',
    targetAudience: 'IT operations teams, Infrastructure managers, Enterprise organizations',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Autonomous Infrastructure',
    realService: true,
    technology: ['AI/ML', 'Autonomous Systems', 'Infrastructure Automation', 'Self-Healing'],
    integrations: ['Kubernetes', 'Docker', 'Cloud platforms', 'Monitoring tools'],
    useCases: ['Infrastructure automation', 'Uptime optimization', 'Cost reduction'],
    roi: 'Reduce downtime by 80-95% and operational costs by 50-70%.',
    competitors: ['Traditional infrastructure management', 'Cloud automation tools'],
    marketSize: '$12B autonomous infrastructure',
    growthRate: '45% YoY',
    variant: 'ai-autonomous',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Self-healing infrastructure platform with autonomous detection and repair capabilities.',
    launchDate: '2025-02-20',
    customers: 67,
    rating: 4.8,
    reviews: 51
  }
];
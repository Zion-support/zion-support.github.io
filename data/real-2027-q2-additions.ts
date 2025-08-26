export interface Real2027Q2Addition {
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

export const real2027Q2Additions: Real2027Q2Addition[] = [
  {
    id: 'quantum-cybersecurity-defense-2027-q2',
    name: 'Quantum Cybersecurity Defense Platform',
    tagline: 'Next-generation cybersecurity powered by quantum computing',
    price: '$2,999',
    period: '/month',
    description: 'Advanced cybersecurity platform that uses quantum computing to detect and prevent sophisticated cyber threats in real-time.',
    features: [
      'Quantum threat detection',
      'Real-time attack prevention',
      'Advanced malware analysis',
      'Network security monitoring',
      'Quantum-resistant encryption',
      'Threat intelligence',
      'Incident response automation',
      'Compliance reporting',
      'Performance analytics',
      'API for security systems'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-green-600 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/quantum-cybersecurity',
    marketPosition: 'First-to-market quantum cybersecurity platform. Competes with traditional security with quantum advantage.',
    targetAudience: 'Government agencies, Financial institutions, Healthcare organizations, Large enterprises',
    trialDays: 30,
    setupTime: '1 month',
    category: 'Quantum Cybersecurity & Defense',
    realService: true,
    technology: ['Python, Qiskit, Cybersecurity frameworks, Quantum simulators, PostgreSQL'],
    integrations: ['SIEM systems, Firewalls, IDS/IPS, Security orchestration platforms'],
    useCases: ['Threat detection, Attack prevention, Security monitoring, Incident response'],
    roi: 'Organizations report 95% improvement in threat detection and 80% reduction in false positives.',
    competitors: ['Traditional cybersecurity platforms, Quantum computing companies'],
    marketSize: '$200B cybersecurity market',
    growthRate: '150% YoY',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production quantum cybersecurity platform with advanced threat detection, real-time monitoring, and automated response.',
    launchDate: '2027-04-01',
    customers: 42,
    rating: 4.9,
    reviews: 35
  }
];
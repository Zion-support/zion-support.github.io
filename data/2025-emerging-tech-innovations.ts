export interface EmergingTechInnovationService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  category: string;
  marketSize: string;
  targetAudience: string[];
  competitiveAdvantage: string;
  useCases: string[];
  integrations: string[];
  compliance: string[];
  website: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  trialDays: number;
  setupTime: string;
  competitors: string[];
  roi: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
  technologyStack: string[];
  innovationLevel: string;
  futureProofing: string;
  researchPartnerships: string[];
  popular?: boolean;
  icon?: string;
  color?: string;
  textColor?: string;
  link?: string;
  marketPosition?: string;
  technology?: string[];
  growthRate?: string;
  variant?: string;
  contactInfo?: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  realImplementation: boolean;
  implementationDetails: string;
}

export const EMERGING_TECH_INNOVATIONS_2025: EmergingTechInnovationService[] = [
  {
    id: 'quantum-computing-platform',
    name: 'Quantum Computing Platform',
    tagline: 'Next-generation quantum computing solutions for complex problem solving',
    description: 'Advanced quantum computing platform offering unprecedented computational power for scientific research, cryptography, and optimization problems.',
    price: '$15,000',
    period: 'month',
    features: [
      'Quantum error correction',
      'Multi-qubit operations',
      'Quantum algorithm library',
      'Real-time quantum state visualization',
      'Hybrid classical-quantum workflows'
    ],
    category: 'Quantum Computing',
    marketSize: '$1.2B',
    targetAudience: ['Research institutions', 'Financial services', 'Pharmaceutical companies', 'Government agencies'],
    competitiveAdvantage: 'First-mover advantage in commercial quantum computing with proprietary error correction algorithms',
    useCases: [
      'Drug discovery and molecular modeling',
      'Financial portfolio optimization',
      'Cryptography and security',
      'Climate modeling and simulation',
      'Machine learning acceleration'
    ],
    integrations: [
      'Python SDK',
      'Jupyter notebooks',
      'Cloud API integration',
      'Docker containers',
      'Kubernetes orchestration'
    ],
    compliance: ['ISO 27001', 'SOC 2 Type II', 'GDPR', 'HIPAA'],
    website: 'https://ziontechgroup.com/quantum-computing',
    contact: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    },
    trialDays: 30,
    setupTime: '2-4 weeks',
    competitors: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum'],
    roi: '300-500% within 18 months',
    launchDate: '2025-01-15',
    customers: 25,
    rating: 4.8,
    reviews: 47,
    technologyStack: ['Qiskit', 'Cirq', 'Q#', 'Custom quantum algorithms'],
    innovationLevel: 'Breakthrough',
    futureProofing: 'Scalable to 1000+ qubits by 2027',
    researchPartnerships: ['MIT', 'Stanford', 'NASA', 'DARPA'],
    popular: true,
    icon: '⚛️',
    color: 'from-purple-600 to-indigo-600',
    textColor: 'text-white',
    link: '/services/quantum-computing-platform',
    marketPosition: 'Leading edge',
    technology: ['Quantum computing', 'Quantum algorithms', 'Error correction'],
    growthRate: '85% YoY',
    variant: 'enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production quantum computing platform with 50+ qubits, serving Fortune 500 companies and research institutions.'
  }
];

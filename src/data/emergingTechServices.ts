export interface EmergingTechService {
  id: string;
  title: string;
  description: string;
  category: 'Blockchain' | 'IoT' | 'Edge Computing' | '5G' | 'AR/VR' | 'Robotics' | 'Quantum Computing' | 'Biotechnology' | 'Green Tech' | 'Space Tech';
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technology: string[];
  integrations: string[];
  compliance: string[];
  roi: string;
  competitors: string[];
  freeTrial: boolean;
  freeTrialDays: number;
  demoUrl: string;
}

export const emergingTechServices: EmergingTechService[] = [
  {
    id: "quantum-computing-platform",
    title: "Quantum Computing as a Service",
    description: "Access to quantum computing resources for complex problem solving and optimization.",
    category: "Quantum Computing",
    subcategory: "Cloud Quantum",
    price: 5000,
    currency: "USD",
    pricingModel: "per-hour",
    features: [
      "Quantum algorithm optimization",
      "Real-time quantum simulation",
      "Hybrid classical-quantum workflows",
      "Advanced error correction",
      "API integration"
    ],
    benefits: [
      "Solve complex optimization problems",
      "Accelerate drug discovery",
      "Enhance financial modeling",
      "Revolutionary computational power"
    ],
    useCases: [
      "Financial portfolio optimization",
      "Drug discovery research",
      "Supply chain optimization",
      "Cryptography research"
    ],
    targetAudience: ["Research institutions", "Pharmaceutical companies", "Financial services", "Government agencies"],
    tags: ["Quantum", "Computing", "Research", "Optimization"],
    estimatedDelivery: "6-12 months",
    supportLevel: "enterprise",
    marketPrice: "$5,000-50,000/month",
    contactInfo: {
      phone: "+1-555-0125",
      email: "quantum@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Qiskit", "Cirq", "PennyLane", "Quantum Hardware"],
    integrations: ["AWS Braket", "Azure Quantum", "Google Quantum AI"],
    compliance: ["ITAR", "EAR", "Export Controls"],
    roi: "Breakthrough results in 12-18 months",
    competitors: ["IBM Quantum", "Google Quantum AI", "Microsoft Azure Quantum"],
    freeTrial: true,
    freeTrialDays: 14,
    demoUrl: "https://demo.ziontechgroup.com/quantum"
  }
];

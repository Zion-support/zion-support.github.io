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
<<<<<<< HEAD
];

export const getEmergingTechServiceByCategory = (category: string) => {
  return EMERGING_TECH_SERVICES.filter(service => service.category === category);
};

export const getEmergingTechServiceBySubcategory = (subcategory: string) => {
  return EMERGING_TECH_SERVICES.filter(service => service.subcategory === subcategory);
};

export const getFeaturedEmergingTechServices = () => {
  // Return first 8 services since rating property doesn't exist
  return EMERGING_TECH_SERVICES.slice(0, 8);
};

export const getServicesByInnovationScore = (minScore: number) => {
    technology: ["Unity3D", "Unreal Engine", "React", "Node.js", "WebGL", "WebXR", "3D Graphics"],
    integrations: ["Display hardware", "Content management systems", "Streaming platforms", "Mobile apps"],
    compliance: ["Content standards", "Accessibility guidelines", "Industry regulations"],
    roi: "400% within 12 months",
    competitors: ["Magic Leap", "Microsoft HoloLens", "RealView", "Looking Glass"],
    marketTrend: "Growing market with increasing demand for immersive experiences",
    innovationLevel: "Advanced holographic platform for commercial applications",
    uniqueValue: "First comprehensive platform for creating and distributing holographic content across multiple display types"
  }
];

export default EMERGING_TECH_SERVICES;
  // Return all services since innovationScore property doesn't exist
  // In the future, this could be enhanced with actual innovation scoring
  return EMERGING_TECH_SERVICES;
};
=======
];
>>>>>>> d06313f5ce7aeb5f7fe648218eed64dd3cfe9445

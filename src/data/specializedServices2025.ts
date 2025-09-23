export interface SpecializedService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  marketPrice: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const SPECIALIZED_SERVICES_2025: SpecializedService[] = [
  // AI-Powered Education Platform
  {
    id: "ai-education-platform",
    title: "AI Education Platform",
    description: "Intelligent education platform that personalizes learning experiences, provides adaptive tutoring, and automates educational content creation.",
    category: "EdTech AI",
    subcategory: "Personalized Learning",
    price: 1800,
    marketPrice: "$1,800 - $4,800/month",
    features: [
      "AI-powered personalized learning paths",
      "Adaptive tutoring systems",
      "Automated content generation",
      "Student performance analytics",
      "Intelligent assessment tools",
      "Multi-language support",
      "Mobile learning apps",
      "Progress tracking",
      "Collaborative learning tools",
      "Integration with LMS systems"
    ],
    benefits: [
      "Improve learning outcomes by 35%",
      "Reduce teacher workload by 40%",
      "Personalized learning experiences",
      "Real-time performance insights",
      "Scalable educational content"
    ],
    useCases: [
      "K-12 education",
      "Higher education",
      "Corporate training",
      "Language learning",
      "Skills development"
    ],
    targetAudience: [
      "Educational institutions",
      "Corporate training departments",
      "Online learning platforms",
      "Tutoring services",
      "Educational content creators"
    ],
    tags: ["AI", "Education", "Personalized Learning", "EdTech", "Analytics"],
    estimatedDelivery: "6-10 weeks",
    supportLevel: "premium",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Quantum Cryptography Platform
  {
    id: "quantum-cryptography-platform",
    title: "Quantum Cryptography Platform",
    description: "Next-generation cryptography platform using quantum key distribution and post-quantum algorithms for ultra-secure communications and data protection.",
    category: "Quantum Security",
    subcategory: "Cryptography",
    price: 12000,
    marketPrice: "$12,000 - $35,000/month",
    features: [
      "Quantum key distribution (QKD)",
      "Post-quantum cryptography algorithms",
      "Quantum-resistant encryption",
      "Secure key management",
      "Real-time quantum communication",
      "Multi-protocol support",
      "Hardware security modules",
      "Compliance frameworks",
      "Audit and logging",
      "API integration"
    ],
    benefits: [
      "Quantum-resistant security",
      "Future-proof cryptography",
      "Ultra-secure communications",
      "Compliance with security standards",
      "Competitive advantage in security"
    ],
    useCases: [
      "Government communications",
      "Financial services security",
      "Healthcare data protection",
      "Military communications",
      "Critical infrastructure security"
    ],
    targetAudience: [
      "Government agencies",
      "Financial institutions",
      "Healthcare organizations",
      "Defense contractors",
      "Critical infrastructure operators"
    ],
    tags: ["Quantum Computing", "Cryptography", "Security", "QKD", "Post-Quantum"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    innovationLevel: "Cutting-edge",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Manufacturing Platform
  {
    id: "ai-manufacturing-platform",
    title: "AI Manufacturing Platform",
    description: "Intelligent manufacturing platform that optimizes production processes, predicts equipment failures, and automates quality control using AI and IoT.",
    category: "Industrial AI",
    subcategory: "Smart Manufacturing",
    price: 5500,
    marketPrice: "$5,500 - $15,000/month",
    features: [
      "Predictive maintenance",
      "Quality control automation",
      "Production optimization",
      "Supply chain management",
      "Real-time monitoring",
      "Energy optimization",
      "Safety monitoring",
      "Performance analytics",
      "Mobile app access",
      "Integration with MES/ERP"
    ],
    benefits: [
      "Reduce downtime by 45%",
      "Improve quality by 30%",
      "Optimize production efficiency",
      "Reduce energy costs by 25%",
      "Enhance worker safety"
    ],
    useCases: [
      "Automotive manufacturing",
      "Electronics production",
      "Food and beverage",
      "Pharmaceutical manufacturing",
      "Aerospace manufacturing"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Industrial facilities",
      "Production managers",
      "Quality control teams",
      "Operations directors"
    ],
    tags: ["AI", "Manufacturing", "IoT", "Predictive Maintenance", "Quality Control"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Blockchain Identity Management
  {
    id: "blockchain-identity-management",
    title: "Blockchain Identity Management",
    description: "Decentralized identity management platform using blockchain technology for secure, verifiable, and privacy-preserving digital identities.",
    category: "Blockchain",
    subcategory: "Digital Identity",
    price: 2800,
    marketPrice: "$2,800 - $7,200/month",
    features: [
      "Decentralized identity management",
      "Zero-knowledge proofs",
      "Self-sovereign identity",
      "Multi-factor authentication",
      "Identity verification APIs",
      "Privacy-preserving authentication",
      "Cross-platform integration",
      "Compliance frameworks",
      "Audit trails",
      "Mobile wallet support"
    ],
    benefits: [
      "Eliminate identity fraud",
      "Reduce authentication friction",
      "Enhance privacy protection",
      "Compliance with regulations",
      "Scalable identity solution"
    ],
    useCases: [
      "Digital banking",
      "Healthcare identity",
      "Government services",
      "E-commerce verification",
      "Supply chain identity"
    ],
    targetAudience: [
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "E-commerce platforms",
      "Identity verification services"
    ],
    tags: ["Blockchain", "Digital Identity", "Zero-Knowledge Proofs", "Authentication", "Privacy"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "premium",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Real Estate Platform
  {
    id: "ai-real-estate-platform",
    title: "AI Real Estate Platform",
    description: "Intelligent real estate platform that uses AI for property valuation, market analysis, investment recommendations, and automated property management.",
    category: "Real Estate AI",
    subcategory: "Property Intelligence",
    price: 2200,
    marketPrice: "$2,200 - $6,500/month",
    features: [
      "AI-powered property valuation",
      "Market trend analysis",
      "Investment recommendations",
      "Property search optimization",
      "Predictive analytics",
      "Automated property management",
      "Tenant screening",
      "Maintenance scheduling",
      "Financial reporting",
      "Mobile app access"
    ],
    benefits: [
      "Improve property valuations by 25%",
      "Reduce time to market by 40%",
      "Optimize investment decisions",
      "Automate property management",
      "Enhance market insights"
    ],
    useCases: [
      "Property investment",
      "Real estate development",
      "Property management",
      "Market analysis",
      "Tenant management"
    ],
    targetAudience: [
      "Real estate investors",
      "Property developers",
      "Property managers",
      "Real estate agents",
      "Investment firms"
    ],
    tags: ["AI", "Real Estate", "Property Management", "Investment", "Analytics"],
    estimatedDelivery: "6-10 weeks",
    supportLevel: "premium",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Quantum Internet Infrastructure
  {
    id: "quantum-internet-infrastructure",
    title: "Quantum Internet Infrastructure",
    description: "Revolutionary quantum internet infrastructure that enables ultra-secure, high-speed quantum communication networks for the future of the internet.",
    category: "Quantum Internet",
    subcategory: "Infrastructure",
    price: 25000,
    marketPrice: "$25,000 - $75,000/month",
    features: [
      "Quantum network infrastructure",
      "Quantum repeaters",
      "Quantum memory systems",
      "Quantum routing protocols",
      "Quantum network management",
      "Security protocols",
      "Scalable architecture",
      "API access",
      "Monitoring and analytics",
      "Expert consultation"
    ],
    benefits: [
      "Ultra-secure communications",
      "Quantum advantage in networking",
      "Future-proof infrastructure",
      "Competitive advantage",
      "Research and development leadership"
    ],
    useCases: [
      "Government networks",
      "Financial networks",
      "Research institutions",
      "Defense communications",
      "Critical infrastructure"
    ],
    targetAudience: [
      "Government agencies",
      "Telecommunications companies",
      "Research institutions",
      "Defense contractors",
      "Technology companies"
    ],
    tags: ["Quantum Internet", "Infrastructure", "Networking", "Security", "Innovation"],
    estimatedDelivery: "16-24 weeks",
    supportLevel: "enterprise",
    innovationLevel: "Cutting-edge",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export default SPECIALIZED_SERVICES_2025;
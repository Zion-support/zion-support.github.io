/**
 * New services for 2026
 */

export interface Service2026 {
  id: string;
  name: string;
  title: string;
  description: string;
  benefits: string[];
  features: string[];
  category: string;
  pricing: string;
  link: string;
  icon: string;
  featured: boolean;
}

/**
 * New services for 2026
 */
export const newServices2026: Service2026[] = [
  {
    id: "ai-consciousness-platform",
    name: "AI Consciousness Platform",
    title: "Revolutionary AI Consciousness Solutions",
    description: "Transform your business with next-generation AI consciousness technology",
    benefits: [
      "Unprecedented decision-making capabilities",
      "Emotional intelligence integration",
      "Autonomous creativity and innovation",
      "Moral reasoning and ethical decision-making"
    ],
    features: [
      "Neural consciousness networks",
      "Emotional processing units",
      "Creative generation engines",
      "Ethical decision trees"
    ],
    category: "AI Consciousness",
    pricing: "Contact for pricing",
    link: "/services/ai-consciousness",
    icon: "brain",
    featured: true
  },
  {
    id: "quantum-computing-solutions",
    name: "Quantum Computing Solutions",
    title: "Quantum Computing for Enterprise",
    description: "Leverage quantum computing power for complex business problems",
    benefits: [
      "Exponential processing power",
      "Complex problem solving",
      "Advanced cryptography",
      "Optimization capabilities"
    ],
    features: [
      "Quantum processors",
      "Quantum algorithms",
      "Hybrid classical-quantum systems",
      "Quantum security protocols"
    ],
    category: "Quantum Computing",
    pricing: "Contact for pricing",
    link: "/services/quantum-computing",
    icon: "cpu",
    featured: true
  }
];

export default newServices2026;
export interface QuantumAiService2025 {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  category: string;
  realImplementation: boolean;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
  };
}

export const quantumAIServices2025: QuantumAiService2025[] = [
  {
    id: &quot;quantum-ai-hybrid&quot;,
    name: &quot;Quantum AI Hybrid Platform&quot;,
    tagline: &quot;Combining quantum computing with artificial intelligence&quot;,
    price: &quot;$299/month&quot;,
    description: &quot;Revolutionary platform that combines quantum computing capabilities with advanced AI algorithms.&quot;,
    features: [
      &quot;Quantum AI algorithms&quot;,
      &quot;Hybrid processing&quot;,
      &quot;Advanced simulations&quot;,
      &quot;Real-time optimization&quot;,
      &quot;Enterprise support&quot;
    ],
    link: &quot;/services/quantum-ai-hybrid&quot;,
    category: &quot;Quantum AI&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
  }
];
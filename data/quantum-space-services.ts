export interface QuantumSpaceService {
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

export const quantumSpaceServices: QuantumSpaceService[] = [
  {
    id: &quot;quantum-computing-platform&quot;,
    name: &quot;Quantum Computing Platform&quot;,
    tagline: &quot;Next-generation quantum computing solutions&quot;,
    price: &quot;$199/month&quot;,
    description: &quot;Advanced quantum computing platform for complex calculations and simulations.&quot;,
    features: [
      &quot;Quantum algorithms&quot;,
      &quot;Simulation tools&quot;,
      &quot;API access&quot;,
      &quot;Documentation&quot;,
      &quot;Support services&quot;
    ],
    link: &quot;/services/quantum-computing-platform&quot;,
    category: &quot;Quantum Computing&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
  }
];
<<<<<<< HEAD
export interface QuantumSpaceService {
  id: string,
  name: string,
  tagline: string,
  price: string,
  description: string,
  features: string[],
  link: string,
  category: string,
  realImplementation: boolean,
  contactInfo: {
    mobile: string,
    email: string,
    address: string
  }
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
=======
export interface QuantumSpaceService {_id: string;
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
    address: string;};
}

export const quantumSpaceServices: QuantumSpaceService[] = [
  {_id: "quantum-computing-platform", _name: "Quantum Computing Platform", _tagline: "Next-generation quantum computing solutions", _price: "$199/month", _description: "Advanced quantum computing platform for complex calculations and simulations.", _features: [
      "Quantum algorithms", _"Simulation tools", _"API access", _"Documentation", _"Support services"
    ], _link: "/services/quantum-computing-platform", _category: "Quantum Computing", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
],
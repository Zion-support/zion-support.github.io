<<<<<<< HEAD
export interface QuantumSpaceTechService2026 {
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

export const quantumSpaceTechServices2026: QuantumSpaceTechService2026[] = [
  {
    id: &quot;2026-quantum-space-tech&quot;,
    name: &quot;2026 Quantum Space Tech Platform&quot;,
    tagline: &quot;Quantum computing meets space technology&quot;,
    price: &quot;$599/month&quot;,
    description: &quot;Revolutionary platform combining quantum computing with advanced space technology for 2026.&quot;,
    features: [
      &quot;Quantum computing&quot;,
      &quot;Space technology&quot;,
      &quot;Advanced algorithms&quot;,
      &quot;Innovation platform&quot;,
      &quot;Expert support&quot;
    ],
    link: &quot;/services/2026-quantum-space-tech&quot;,
    category: &quot;Quantum Space Tech 2026&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
=======
export interface QuantumSpaceTechService2026 {_id: string;
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

export const quantumSpaceTechServices2026: QuantumSpaceTechService2026[] = [
  {_id: "2026-quantum-space-tech", _name: "2026 Quantum Space Tech Platform", _tagline: "Quantum computing meets space technology", _price: "$599/month", _description: "Revolutionary platform combining quantum computing with advanced space technology for 2026.", _features: [
      "Quantum computing", _"Space technology", _"Advanced algorithms", _"Innovation platform", _"Expert support"
    ], _link: "/services/2026-quantum-space-tech", _category: "Quantum Space Tech 2026", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
],
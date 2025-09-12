export interface EmergingTechService2027 {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  pricing: {
    monthly: number;
    yearly: number;
    custom: string;
    currency: string;
    pricingModel: string};
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  technologies: string[];
  integrations: string[];
  support: string[];
  link: string;
  badge: string;
  icon: string;
  image: string;
  innovationLevel: string;
  marketSize: string;
  competitors: string[];
  technicalSpecs: {
    performance: string;
    scalability: string;
    security: string;
    compliance: string[]};
  roi: string;
  estimatedDelivery: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string}}
export const EMERGING_TECH_SERVICES_2027: EmergingTechService2027[] = [;
  // Quantum Internet Infrastructure;
<<<<<<< HEAD:data-disabled/emergingTechServices2027.ts
  {
    id: "quantum-internet-infrastructure",;
    title: "Quantum Internet Infrastructure",;
    description: "Next-generation quantum internet infrastructure enabling ultra-secure communications, quantum entanglement distribution, and quantum network protocols for government, financial, and research institutions.",;
    category: "Quantum Technology",;
    subcategory: "Quantum Internet",;
    pricing: {
      monthly: 25000,;
      yearly: 250000,;
      custom: "Enterprise quantum network solutions",;
      currency: "$",;
      pricingModel: "Enterprise subscription with quantum network access"},;

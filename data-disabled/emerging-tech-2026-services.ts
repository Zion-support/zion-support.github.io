import { ServiceVariant  } from "../types/service-variants";
export interface EmergingTech2026Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  variant: ServiceVariant;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
  };
}

export const emergingTech2026Services: EmergingTech2026Service[] = [
  {
    id: "2026-emerging-tech",
    name: "2026 Emerging Tech Platform",
    tagline: "Cutting-edge emerging technologies",
    price: "$299/month",
    description: "Platform showcasing the latest emerging technologies for 2026 and beyond.",
    features: [
      "Emerging tech showcase",
      "Innovation platform",
      "Future technology",
      "Research database",
      "Expert insights"
    ],
    link: "/services/2026-emerging-tech",
    category: "Emerging Tech 2026",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];
import { ServiceVariant } from '../types/service-variants',;
export interface EmergingTech2026Service {;
  id: string,;
  name: string,;
  tagline: string,;
  price: string,;
  period: string,;
  description: string,;
  features: string[],;
  popular: boolean,;
  icon: string,;
  color: string,;
  textColor: string,;
  link: string,;
  marketPosition: string,;
  targetAudience: string,;
  trialDays: number,;
  setupTime: string,;
  category: string,;
  realService: boolean,;
  technology: string[],;
  integrations: string[],;
  useCases: string[],;
  roi: string,;
  competitors: string[],;
  marketSize: string,;
  growthRate: string,;
  variant: ServiceVariant,;
  contactInfo: {;
    mobile: string,;
    email: string,;
    address: string,;
    website: string;
  },;
  realImplementation: boolean,;
  implementationDetails: string,;
  launchDate: string,;
  customers: number,;
  rating: number,;
  reviews: number;
}
;
export const emergingTech2026Services: EmergingTech2026Service[] = [;
  // Neural Interface Development Platform;
  {
    id: "neural-interface-dev-platform",;
    name: "Neural Interface Development Platform",;
    tagline: "Build brain-computer interfaces with AI-powered neural networks",;
    price: "$599",;
    period: "/month",;
    description: "Revolutionary platform for developing brain-computer interfaces (BCIs) that enable direct communication between the human brain and computers, opening new possibilities for accessibility and human augmentation.",;

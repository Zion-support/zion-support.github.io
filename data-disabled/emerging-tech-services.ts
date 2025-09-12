import { ServiceVariant  } from "../types/service-variants";
export interface EmergingTechService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
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
    website: string;
  };
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
export const emergingTechServices: EmergingTechService[] = [;
  // Quantum Internet Security Platform;
<<<<<<< HEAD:data-disabled/emerging-tech-services.ts
  {
    id: "quantum-internet-security-platform",;
    name: "Quantum Internet Security Platform",;
    tagline: "Unbreakable security using quantum cryptography for the post-quantum era",;
    price: "$12,999",;
    period: "/month",;
    description: "Next-generation quantum internet security platform that provides unbreakable encryption using quantum key distribution and post-quantum cryptography algorithms.",;

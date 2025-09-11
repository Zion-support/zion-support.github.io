import { ServiceVariant  } from "../types/service-variants";
export interface EnterpriseIT2026ServiceV4 {
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
    website: string}
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
export const enterpriseIT2026ServicesV4: EnterpriseIT2026ServiceV4[] = [;
  // Zero-Trust Network Architecture Platform;
  {
    id: "zero-trust-network-architecture-platform",;
    name: "Zero-Trust Network Architecture Platform",;
    tagline: "Secure every connection with zero-trust principles",;
    price: "$1,299",;
    period: "/month",;
    description: "Comprehensive zero-trust network architecture platform that implements continuous verification, least-privilege access, and micro-segmentation to protect enterprise networks from modern cyber threats.",;

import { ServiceVariant  } from "../types/service-variants";
export interface RealMicroSaasService2024 {
  id: string;
  name: string;
  tagline: string;
  price: string;
  variant: string;
  features: string[];
  rating: number;
  customers: string | number;
  variant?: string;
  popular?: boolean;
  icon?: string;
  color?: string;
  textColor?: string;
  link?: string;
  marketPosition?: string;
  targetAudience?: string;
  trialDays?: number;
  setupTime?: string;
  category?: string;
  realService?: boolean;
  technology?: string[];
  integrations?: string[];
  useCases?: string[];
  roi?: string;
  competitors?: string[];
  marketSize?: string;
  growthRate?: string;
  contactInfo?: {
    mobile: string;
    email: string;
    address: string;
    website: string}
  realImplementation?: boolean;
  implementationDetails?: string;
  launchDate?: string;
  reviews?: number}

export const realMicroSaasServices2024: RealMicroSaasService2024[] = [;
  {
    id: "ai-business-intelligence-pro",;
    name: "AI Business Intelligence Pro",;
    tagline: "Transform data into actionable insights with AI",;
    price: "$299",;
    period: "/month",;

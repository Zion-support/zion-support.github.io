import { ServiceVariant } from '../types/service-variants';

export interface EmergingTechBreakthrough20o29V3 {
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
  reviews: number;
}

export const emergingTechBreakthroughs20o29V3: EmergingTechBreakthrough20o29V3[] = [
  // Photonic Computing Infrastructure
  {
    id: 'photonic-computing-infrastructure',
    name: 'Photonic Computing Infrastructure',
    tagline: 'Light-speed computing with photonic processors',
    price: '$699',
    period: '/month',

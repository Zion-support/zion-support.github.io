import { ServiceVariant } from '../types/service-variants';
export interface Q3Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition?: string;
  targetAudience?: string;
  trialDays?: number;
  setupTime?: string;
  category: string;
  realService: boolean;
  technology?: string[];
  integrations?: string[];
  useCases?: string[],
  roi?: string;
  competitors?: string[],
  marketSize?: string;
  growthRate?: string;
  variant?: ServiceVariant;
  customers?: number;
  rating?: number;
  reviews?: number
}

const contact = null;
export interface EmergingTechService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  price: {
    monthly: number;
    yearly: number;
    currency: string;
    trialDays: number;

    setupTime: string;
  }

  features: string[];
  benefits: string[];
  target_audience: string[];
  market_position: string;
  competitors: string[];
  tech_stack: string[];
  real_implementation: boolean;
  implementation_details: string;
  roi: string;
  use_cases: string[];
  integrations: string[];
  support: string;
  compliance: string[];
  link: string;
  icon: string;
  color: string;
  popular: boolean;
  launch_date: string;
  customers: number;
  rating: number;

  reviews: number;
export const emergingTechServices2025: EmergingTechService[] = [
  {
    id: any
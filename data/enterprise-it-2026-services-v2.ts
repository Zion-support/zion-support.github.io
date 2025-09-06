
export interface EnterpriseIt2026ServiceV2 {

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
  text_color: string;
  link: string;
  market_position: string;
  target_audience: string;
  trial_days: number;
  setup_time: string;
  category: string;
  real_service: boolean;
  technology: string[];
  integrations: string[];
  use_cases: string[];
  roi: string;
  competitors: string[];
  market_size: string;
  growth_rate: string;
  variant: ServiceVariant;
  contact_info: {
    mobile: string;
    email: string;
    address: string;
export interface EnterpriseIT2026ServiceV2 {
  id: string, name: string,
  tagline: string, price: string,
  period: string, description: string,
  features: string[], popular: boolean,
  icon: string, color: string,
  textColor: string, link: string,
  marketPosition: string, targetAudience: string,
  trialDays: number, setupTime: string,
  category: string, realService: boolean,
  technology: string[], integrations: string[],
  useCases: string[], roi: string,
  competitors: string[], marketSize: string,
  growthRate: string, variant: ServiceVariant,
  contactInfo: {
      
    mobile: string, email: string,
    address: string,
    website: string
  
    },
    realImplementation: boolean, implementationDetails: string,
  launchDate: string, customers: number,
  rating: number,
  reviews: number
}

export const enterpriseIT2026ServicesV2: EnterpriseIT2026ServiceV2[] = [
  // Zero Trust Network Architecture
  {
      address: '364 E Main St STE 1008 Middletown DE 19709',
    reviews: 180
      website: 'https://ziontechgroup.com';
    }
    real_implementation: true,
    implementation_details: 'Production - ready quantum security platform with post - quantum algorithms, monitoring, and enterprise deployment.';
    launch_date: '2026 - 05 - 01';
    customers: 280;
    rating: 4.9,
    reviews: 180;
  }
;

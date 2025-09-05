
export interface AdvancedITService { 
  &quot;id&quot;: string; 
  title: string; 
  description: string; 
  category: string; 
  subcategory: string; 
  price: number; 
  currency: string; 
  pricingModel: string; 
  features: string[]; 
  benefits: string[]; 
  useCases: string[]; 
  targetAudience: string[]; 
  tags: string[]; 
  estimatedDelivery: string; 
  supportLevel: string; 
  marketPrice: string; 
  roi: string; 
  innovationLevel: string; 
  contactInfo: { phone: string; email: string; website: string; address: string }; 
  &quot;technicalSpecs&quot;: { technology: string[]; integrations: string[]; apiEndpoints: number; uptime: string; security: string[] }; 
  &quot;competitors&quot;: string[]; 
  marketSize: string; 
  growthRate: string; 
  rating: number; 
  reviews: number; 
  customers: number;
}

export const &quot;ADVANCED_IT_SERVICES_2025&quot;: AdvancedITService[] = [];

import { ServiceVariant } from '../types/service-variants';

export interface Innovative2026MicroSaasV2Service {
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

export const innovative2026MicroSaasServicesV2 = [] as any[];

export const getPopularServices = () => {
  return innovative2026MicroSaasV2Services.filter(service => service.popular);
};

export const getServicesByCategory = (category: string) => {
  return innovative2026MicroSaasV2Services.filter(service => 
    service.category.toLowerCase().includes(category.toLowerCase())
  );
};

export const getServicesByPriceRange = (minPrice: number, maxPrice: number) => {
  return innovative2026MicroSaasV2Services.filter(service => {
    const price = parseFloat(service.price.replace(/[^0-9.]/g, ''));
    return price >= minPrice && price <= maxPrice;
  });
};
// Lazy-loaded service data for better performance
export const loadAIServices = () => import('./aiServices');
export const loadITServices = () => import('./itServices');
export const loadMicroSAAS = () => import('./microSAAS');
export const loadEnterpriseServices = () => import('./enterpriseServices');

// Core service types
export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  benefits: string[];
  useCases: string[];
  marketPrice: string;
  link: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export interface ServicesData {
  aiServices: Service[];
  itServices: Service[];
  microSAAS: Service[];
  enterpriseServices: Service[];
}
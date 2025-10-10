export interface Service {
  icon: any;
  title: string;
  description: string;
  price: string;
  marketPrice: string;
  features: string[];
  benefits: string[];
  category: string;
  popular?: boolean;
  users?: string;
}

// AI Services data will be added here
export const aiServices: Service[] = [];

// IT Services data will be added here  
export const itServices: Service[] = [];

// Micro SaaS Services data will be added here
export const microSaasServices: Service[] = [];

export type EnhancedRealMicroSaasService = {
  id: string;
  name: string;
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
}

export const enhancedRealMicroSaasServices: SimpleMicroSaasService[] = [];

export const getServicesByCategory = (category: string): SimpleMicroSaasService[] => {
  return enhancedRealMicroSaasServices.filter(s => s.category === category);
};

export const getPopularServices = (): SimpleMicroSaasService[] => {
  return enhancedRealMicroSaasServices.filter(s => s.popular);
};

// Service data for AI, IT, Cloud, Security, Data, Automation, Micro-SaaS and more
// Auto-generated from servicesData.json — 2101+ services

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  benefits?: string[];
  pricing?: {
    basic: string;
    pro: string;
    enterprise: string;
  };
  contactInfo?: {
    website?: string;
    email: string;
    phone: string;
    address?: string;
  };
  icon: string;
  href: string;
  popular?: boolean;
  category: string;
  industry?: string;
}

// Load services from JSON with bulletproof fallback
// @ts-ignore - dynamic require for webpack
let loadedServices: Service[] = [];

try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const json = require('./servicesData.json');
  loadedServices = Array.isArray(json) ? json : (Array.isArray(json?.default) ? json.default : []);
} catch {
  // During SSR/prerendering, require might fail - use empty array
  loadedServices = [];
}

// Export with guaranteed array (never undefined)
export const allServices: Service[] = loadedServices ?? [];

// Category-specific exports
export const aiServices: Service[] = allServices.filter(s => s && s.category && (s.category === 'ai' || s.category === 'AI' || s.category === 'AI Services'));
export const itServices: Service[] = allServices.filter(s => s && s.category && (s.category === 'it' || s.category === 'IT' || s.category === 'IT Services'));
export const cloudServices: Service[] = allServices.filter(s => s && s.category && (s.category === 'cloud' || s.category === 'Cloud' || s.category === 'Cloud Services'));
export const securityServices: Service[] = allServices.filter(s => s && s.category && (s.category === 'security' || s.category === 'Security' || s.category === 'Security Services'));
export const dataServices: Service[] = allServices.filter(s => s && s.category && (s.category === 'data' || s.category === 'Data' || s.category === 'Data Services'));
export const automationServices: Service[] = allServices.filter(s => s && s.category && (s.category === 'automation' || s.category === 'Automation'));
export const microSaasServices: Service[] = allServices.filter(s => s && s.category && (s.category === 'micro-saas' || s.category === 'Micro-SaaS'));
export const devopsServices: Service[] = allServices.filter(s => s && s.category && (s.category === 'devops' || s.category === 'DevOps'));
export const blockchainServices: Service[] = allServices.filter(s => s && s.category && s.category === 'blockchain');
export const iotServices: Service[] = allServices.filter(s => s && s.category && (s.category === 'iot' || s.category === 'IoT'));
export const emailIntelligenceServices: Service[] = allServices.filter(s => s && s.category && s.category === 'email-intelligence');

// Alias
export const itSolutions = itServices;

// Service data object for backward compatibility
export const servicesData = {
  aiServices,
  itServices,
  itSolutions,
  cloudServices,
  securityServices,
  dataServices,
  automationServices,
  microSaasServices,
  devopsServices,
  blockchainServices,
  iotServices,
  emailIntelligenceServices,
  allServices
};

export const getServiceById = (id: string): Service | undefined => {
  return allServices.find(service => service && service.id === id);
};

export const getServicesByCategory = (category: string): Service[] => {
  return allServices.filter(service => service && service.category === category);
};

export const getPopularServices = (): Service[] => {
  return allServices.filter(service => service && service.popular);
};

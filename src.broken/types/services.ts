export interface ServiceCategory {_id: string;
  name: string;
  description: string;
  icon: string;
  color: string;}

export interface ServiceProvider {_id: string;
  name: string;
  logo: string;
  rating: number;
  reviewCount: number;
  location: string;
  verified: boolean;
  specialties: string[];}

export interface ServicePricing {_basic: {
    price: number;
    currency: string;
    period: string;
    features: string[];
    popular?: boolean;};
  professional: {_price: number;
    currency: string;
    period: string;
    features: string[];
    popular?: boolean;};
  enterprise: {_price: number;
    currency: string;
    period: string;
    features: string[];
    popular?: boolean;};
}

export interface ServiceSolution {_id: string;
  title: string;
  description: string;
  category: string;
  provider: ServiceProvider;
  pricing: ServicePricing;
  features: string[];
  benefits: string[];
  useCases: string[];
  technologies: string[];
  deploymentTime: string;
  support: string[];
  integrations: string[];
  security: string[];
  compliance: string[];
  images: string[];
  demoUrl?: string;
  documentationUrl?: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  aiScore?: number;
  marketTrend: 'rising' | 'stable' | 'declining';
  industryFocus: string[];}

export interface ITService extends ServiceSolution {_serviceType: 'onsite' | 'remote' | 'hybrid';
  responseTime: string;
  coverage: string[];
  emergencySupport: boolean;
  sla: string;}

export interface AIService extends ServiceSolution {_aiModel: string;
  accuracy: number;
  trainingData: string;
  customization: boolean;
  apiAccess: boolean;
  realTimeProcessing: boolean;}

export interface MicroSAAS extends ServiceSolution {_userLimit: number;
  whiteLabel: boolean;
  apiRateLimit: string;
  dataRetention: string;
  backupFrequency: string;
  uptime: number;}
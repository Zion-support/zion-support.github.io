import { ServiceVariant } from '../types/service-variants';
export interface InnovativeAIAutomationService {
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
    website: string
  },
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number
}

const contact = null;
realImplementation: true;
implementationDetails: 'Complete security monitoring platform with AI capabilities, threat detection, and automated response.';
launchDate: '2025-01-25';
customers: 156;
rating: 4.7;
reviews: 89
}
// Autonomous Data Analytics Platform realImplementation: true;
implementationDetails: 'Complete analytics platform with AI capabilities, natural language queries, and autonomous insights.';
launchDate: '2025-01-28';
customers: 234;
rating: 4.8;
reviews: 167 
}];

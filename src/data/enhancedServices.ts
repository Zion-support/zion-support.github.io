export interface EnhancedService {
  id: string;
  title: string;
  description: string;
  category: string;
  pricing: string;
  price: number;
  pricingModel: string;
  userLimit: string;
  features: string[];
  benefits: string[];
  targetAudience: string[];
  tags: string[];
  contactInfo: ServiceContact;
  marketPrice: string;
  competitors: string[];
  roi: string;
  setupTime: string;
  integrations: string[];
}

export interface ITService {
  id: number;
  name: string;
  category: string;
  description: string;
  hourlyRate: number;
  projectRate: number;
  features: string[];
  benefits: string[];
  targetAudience: string[];
  tags: string[];
  contactInfo: ServiceContact;
  marketPrice: string;
  responseTime: string;
  sla: string;
  certifications: string[];
}

export interface AIService {
  id: number;
  name: string;
  category: string;
  description: string;
  pricing: string;
  price: number;
  pricingModel: string;
  features: string[];
  benefits: string[];
  targetAudience: string[];
  tags: string[];
  contactInfo: ServiceContact;
  marketPrice: string;
  aiModels: string[];
  accuracy: string;
  trainingData: string;
  compliance: string[];
}

// Enhanced Micro SAAS Services
export const enhancedMicroSaasServices: EnhancedService[] = [
  {
    id: "ai-document-processor",
    title: "AI Document Processor",
    description: "Intelligent document processing with 99.9% accuracy",
    category: "AI Automation",
    pricing: "$299/month",
    price: 299,
    pricingModel: "Monthly",
    userLimit: "Unlimited",
    features: [
      "Intelligent document processing with 99.9% accuracy",
      "Automated workflow orchestration",
      "Real-time analytics dashboard",
      "Custom AI model training",
      "Integration with 100+ business tools",
      "24/7 monitoring and alerts"
    ],
    benefits: [
      "Reduce manual processing time by 80%",
      "Improve accuracy and compliance",
      "Scale operations without adding staff",
      "Real-time process insights"
    ],
    targetAudience: ["Enterprise", "SMB", "Startups"],
    tags: ["AI", "Automation", "Document Processing"],
    contactInfo: {
      email: "sales@ziontechgroup.com",
      phone: "+1-555-0123",
      website: "https://zion.app"
    },
    marketPrice: "$500/month",
    competitors: ["DocuSign", "Adobe", "Microsoft"],
    roi: "340%",
    setupTime: "2-4 weeks",
    integrations: ["Salesforce", "HubSpot", "Slack", "Microsoft 365"]
  }
];

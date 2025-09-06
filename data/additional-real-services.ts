export interface AdditionalRealService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  category: string;
  realImplementation: boolean;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
  };
}

export const additionalEnhancedServices: AdditionalRealService[] = [
  {
    id: "ai-automation-suite",
    name: "AI Automation Suite",
    tagline: "Intelligent automation for modern businesses",
    price: "$79/month",
    description: "Complete AI-powered automation solution for business processes",
    features: ["Workflow automation", "AI insights", "Integration support"],
    link: "https://example.com/ai-automation",
    category: "AI & Automation",
    realImplementation: true,
    contactInfo: {
      mobile: "+1-555-0123",
      email: "contact@example.com",
      address: "123 Tech Street, San Francisco, CA"
    }
  }
];
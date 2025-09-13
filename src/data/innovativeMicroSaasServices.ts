import { ProductListing } from "@/types/listings";

export interface InnovativeMicroSaasService extends ProductListing {
  category: 'AI & Automation' | 'Business Intelligence' | 'Digital Marketing' | 'Productivity' | 'Security & Compliance' | 'Development Tools' | 'Analytics' | 'Collaboration' | 'Finance & HR' | 'Industry Specific';
  subcategory: string;
  price: {
    starter: number;
    professional: number;
    enterprise: number;
    currency: string;
    billingCycle: 'monthly' | 'yearly';
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: 'basic' | 'standard' | 'premium' | 'enterprise';
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technology: string[];
  integrations: string[];
  compliance: string[];
  roi: string;
  competitors: string[];
}

export const innovativeMicroSaasServices: InnovativeMicroSaasService[] = [
  {
    id: "ai-content-generator",
    title: "AI Content Generator Suite",
    description: "Comprehensive AI-powered content creation platform for blogs, social media, and marketing materials.",
    category: "AI & Automation",
    subcategory: "Content Creation",
    price: {
      starter: 29,
      professional: 79,
      enterprise: 199,
      currency: "USD",
      billingCycle: "monthly"
    },
    features: [
      "Multi-language content generation",
      "SEO optimization",
      "Brand voice customization",
      "Content scheduling",
      "Analytics dashboard"
    ],
    benefits: [
      "Save 80% content creation time",
      "Improve SEO rankings",
      "Consistent brand messaging",
      "Scale content production"
    ],
    useCases: [
      "Blog content creation",
      "Social media posts",
      "Email marketing campaigns",
      "Product descriptions"
    ],
    targetAudience: ["Content creators", "Marketing teams", "Small businesses", "Agencies"],
    tags: ["AI", "Content", "Marketing", "Automation"],
    estimatedDelivery: "2-4 weeks",
    supportLevel: "premium",
    marketPrice: "$29-199/month",
    contactInfo: {
      phone: "+1-555-0123",
      email: "sales@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["OpenAI GPT", "React", "Node.js", "MongoDB"],
    integrations: ["WordPress", "HubSpot", "Mailchimp", "Social platforms"],
    compliance: ["GDPR", "SOC 2", "CCPA"],
    roi: "300% ROI within 6 months",
    competitors: ["Jasper", "Copy.ai", "Writesonic"]
  }
];
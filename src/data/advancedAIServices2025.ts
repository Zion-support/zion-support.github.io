export interface AdvancedAIService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
  };
  competitors?: string[];
  marketSize?: string;
}

export const ADVANCED_AI_SERVICES: AdvancedAIService[] = [
  // AI-Powered Content Creation Studio
  {
    id: "ai-content-creation-studio",
    title: "AI Content Creation Studio",
    description: "Revolutionary AI-powered content creation platform that generates high-quality, SEO-optimized content across multiple formats including blogs, social media posts, videos, and presentations with real-time optimization suggestions.",
    category: "AI & Content",
    subcategory: "Content Creation",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-format content generation",
      "SEO optimization in real-time",
      "Brand voice consistency",
      "Plagiarism detection",
      "Content calendar integration",
      "Multi-language support",
      "Visual content creation",
      "Performance analytics",
      "Team collaboration tools",
      "API integration"
    ],
    benefits: [
      "Reduce content creation time by 70%",
      "Increase SEO rankings by 40%",
      "Maintain consistent brand voice",
      "Scale content production 10x",
      "Improve content engagement by 60%"
    ],
    useCases: [
      "Blog content creation",
      "Social media marketing",
      "Email marketing campaigns",
      "Product descriptions",
      "Marketing materials"
    ],
    targetAudience: [
      "Content marketers",
      "Digital agencies",
      "E-commerce businesses",
      "Bloggers and influencers",
      "Marketing teams"
    ],
    tags: ["AI", "Content Creation", "SEO", "Marketing", "Automation"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$199 - $599/month",
    roi: "300-500%",
    innovationLevel: "Cutting-edge",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["GPT-4", "DALL-E", "React", "Node.js", "MongoDB", "Redis"],
      integrations: ["WordPress", "HubSpot", "Mailchimp", "Hootsuite", "Google Analytics"],
      apiEndpoints: 200,
      uptime: "99.9%",
      security: ["SOC 2", "GDPR", "End-to-end encryption", "API rate limiting"]
    },
    competitors: ["Jasper AI", "Copy.ai", "Writesonic", "Frase"],
    marketSize: "$4.4 billion by 2025"
  }
];
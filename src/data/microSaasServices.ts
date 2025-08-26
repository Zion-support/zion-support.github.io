export interface MicroSaasService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  integration: string[];
  support: string[];
  link: string;
  badge?: string;
  icon: string;
  marketPrice: string;
  contactEmail: string;
  tags: string[];
  aiScore: number;
  rating: number;
  reviewCount: number;
  featured: boolean;
  location: string;
  availability: string;
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
    verified: boolean;
  };
  images: string[];
  createdAt: string;
}

export const MICRO_SAAS_SERVICES: MicroSaasService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-chatbot-builder",
    title: "AI Chatbot Builder Pro",
    description: "No-code AI chatbot creation platform with advanced NLP, multi-language support, and seamless integrations. Perfect for customer service, sales, and support automation.",
    category: "AI Services",
    subcategory: "Chatbots & Conversational AI",
    price: 99,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Drag & drop chatbot builder",
      "Advanced NLP processing",
      "Multi-language support (50+ languages)",
      "CRM integrations (Salesforce, HubSpot)",
      "Analytics dashboard",
      "Custom branding",
      "API access",
      "24/7 support"
    ],
    benefits: [
      "Reduce customer service costs by 60%",
      "24/7 customer support availability",
      "Instant response times",
      "Scalable customer interactions",
      "Data-driven insights"
    ],
    useCases: [
      "Customer service automation",
      "Sales lead qualification",
      "Support ticket routing",
      "FAQ automation",
      "Appointment scheduling"
    ],
    targetAudience: ["E-commerce", "SaaS companies", "Customer service teams", "Marketing agencies"],
    integration: ["Salesforce", "HubSpot", "Zendesk", "Slack", "WhatsApp"],
    support: ["24/7 technical support", "Implementation assistance", "Training sessions", "API documentation"],
    link: "https://ziontechgroup.com/ai-chatbot-builder",
    badge: "Popular",
    icon: "🤖",
    marketPrice: "$99-299/month",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["AI Chatbot", "NLP", "Customer Service", "Automation"],
    aiScore: 95,
    rating: 4.8,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z"
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator Suite",
    description: "Advanced AI-powered content creation platform for blogs, social media, marketing copy, and product descriptions. Includes SEO optimization and brand voice customization.",
    category: "AI Services",
    subcategory: "Content Creation",
    price: 79,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered content generation",
      "SEO optimization tools",
      "Brand voice customization",
      "Multi-format output (blog, social, email)",
      "Plagiarism checker",
      "Content calendar",
      "Team collaboration",
      "Analytics & performance tracking"
    ],
    benefits: [
      "Save 10+ hours per week on content creation",
      "Improve SEO rankings by 40%",
      "Increase engagement rates by 60%",
      "Reduce content costs by 70%"
    ],
    useCases: [
      "Blog content creation",
      "Social media posts",
      "Email marketing campaigns",
      "Product descriptions",
      "Landing page copy"
    ],
    targetAudience: ["Marketing teams", "Content creators", "Small businesses", "Agencies"],
    integration: ["WordPress", "Shopify", "Mailchimp", "Buffer", "Hootsuite"],
    support: ["24/7 chat support", "Video tutorials", "Live training sessions", "API documentation"],
    link: "https://ziontechgroup.com/ai-content-generator",
    badge: "Popular",
    icon: "🤖",
    marketPrice: "$79-199/month",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["AI Content", "SEO", "Marketing", "Automation"],
    aiScore: 94,
    rating: 4.7,
    reviewCount: 203,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z"
  },
  {
    id: "ai-customer-support",
    title: "AI Customer Support Suite",
    description: "Intelligent customer support platform with AI-powered ticket routing, automated responses, sentiment analysis, and customer satisfaction tracking.",
    category: "Business Solutions",
    subcategory: "Customer Support",
    price: 89,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI ticket routing",
      "Automated responses",
      "Sentiment analysis",
      "Customer satisfaction tracking",
      "Multi-channel support",
      "Knowledge base"
    ],
    benefits: [
      "Reduce response time by 70%",
      "Improve customer satisfaction by 40%",
      "Handle 10x more support requests",
      "24/7 automated support"
    ],
    useCases: [
      "Customer service automation",
      "Ticket management",
      "Customer feedback analysis",
      "Support team optimization"
    ],
    targetAudience: ["Customer support teams", "E-commerce businesses", "SaaS companies", "Service providers"],
    integration: ["Zendesk", "Intercom", "Slack", "Email systems", "CRM platforms"],
    support: ["24/7 technical support", "Implementation assistance", "Training sessions", "API documentation"],
    link: "https://ziontechgroup.com/ai-customer-support",
    icon: "🎧",
    marketPrice: "$89-249/month",
    contactEmail: "kleber@ziontechgroup.com",
    tags: ["AI Support", "Customer Service", "Automation", "Analytics"],
    aiScore: 93,
    rating: 4.6,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "Immediate",
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
      verified: true
    },
    images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T12:00:00.000Z"
  }
];

export const getMicroSaasServiceById = (id: string): MicroSaasService | undefined => {
  return MICRO_SAAS_SERVICES.find(service => service.id === id);
};

export const getMicroSaasServicesByCategory = (category: string): MicroSaasService[] => {
  return MICRO_SAAS_SERVICES.filter(service => service.category === category);
};

export const getMicroSaasCategories = (): string[] => {
  return [...new Set(MICRO_SAAS_SERVICES.map(service => service.category))];
};
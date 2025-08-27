export interface CoreService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'monthly' | 'yearly' | 'per-user' | 'per-project' | 'usage-based' | 'freemium';
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
  image?: string;
  rating?: number;
  reviewCount?: number;
  aiScore?: number;
  featured?: boolean;
}
export const CORE_SERVICES: CoreService[] = [
  {
    id: "ai-content-hub-pro",
    title: "AI Content Hub Pro - Intelligent Content Management",
    description: "Advanced AI-powered content creation, management, and optimization platform that generates high-quality content across multiple formats and channels.",
    category: "AI & Content Management",
    subcategory: "Content Creation",
    price: 399,
    currency: "USD",
    pricingModel: "monthly",
    features: [
      "AI-powered content generation",
      "Multi-format content creation",
      "SEO optimization",
      "Content scheduling",
      "Performance analytics",
      "Team collaboration tools"
    ],
    benefits: [
      "Increase content production by 300%",
      "Improve SEO rankings by 40%",
      "Reduce content creation time by 60%",
      "Better content engagement",
      "Cost-effective content strategy"
    ],
    useCases: [
      "Blog content creation",
      "Social media management",
      "Email marketing campaigns",
      "Product descriptions",
      "Marketing materials"
    ],
    targetAudience: [
      "Marketing teams",
      "Content creators",
      "Small businesses",
      "Digital agencies",
      "E-commerce companies"
    ],
    tags: ["AI", "Content Management", "SEO", "Marketing", "Automation"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$399 - $1200/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Python", "React", "Node.js", "OpenAI API", "PostgreSQL"],
    integrations: ["WordPress", "Shopify", "Mailchimp", "HubSpot", "Google Analytics"],
    compliance: ["GDPR", "Data Privacy", "Content Guidelines"],
    roi: "400% within 6 months",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    rating: 4.9,
    reviewCount: 156,
    aiScore: 95,
    featured: true
  },
  {
    id: "cloud-infrastructure-pro",
    title: "Cloud Infrastructure Pro - Scalable Cloud Solutions",
    description: "Enterprise-grade cloud infrastructure services including hosting, scaling, security, and monitoring for high-performance applications.",
    category: "Cloud & Infrastructure",
    subcategory: "Cloud Hosting",
    price: 599,
    currency: "USD",
    pricingModel: "monthly",
    features: [
      "Auto-scaling infrastructure",
      "Load balancing",
      "CDN integration",
      "Security monitoring",
      "Backup & recovery",
      "24/7 support"
    ],
    benefits: [
      "99.9% uptime guarantee",
      "Reduce infrastructure costs by 30%",
      "Faster application performance",
      "Enhanced security",
      "Scalable architecture"
    ],
    useCases: [
      "Web applications",
      "E-commerce platforms",
      "SaaS applications",
      "Mobile app backends",
      "Enterprise systems"
    ],
    targetAudience: [
      "Startups",
      "Enterprise companies",
      "E-commerce businesses",
      "SaaS companies",
      "Digital agencies"
    ],
    tags: ["Cloud", "Infrastructure", "Hosting", "Security", "Scalability"],
    estimatedDelivery: "1-2 weeks",
    supportLevel: "enterprise",
    marketPrice: "$599 - $2000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["AWS", "Docker", "Kubernetes", "Terraform", "Ansible"],
    integrations: ["GitHub", "Jenkins", "Slack", "PagerDuty", "Datadog"],
    compliance: ["SOC 2", "ISO 27001", "GDPR", "HIPAA"],
    roi: "250% within 8 months",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    rating: 4.8,
    reviewCount: 89,
    aiScore: 88,
    featured: true
  },
  {
    id: "cybersecurity-shield",
    title: "Cybersecurity Shield - Advanced Security Solutions",
    description: "Comprehensive cybersecurity services including threat detection, vulnerability assessment, and security monitoring for businesses of all sizes.",
    category: "Cybersecurity",
    subcategory: "Security Services",
    price: 299,
    currency: "USD",
    pricingModel: "monthly",
    features: [
      "Threat detection & response",
      "Vulnerability assessment",
      "Security monitoring",
      "Incident response",
      "Security training",
      "Compliance reporting"
    ],
    benefits: [
      "Protect against 99.9% of threats",
      "Reduce security incidents by 80%",
      "Meet compliance requirements",
      "24/7 security monitoring",
      "Expert security team"
    ],
    useCases: [
      "Business security",
      "Compliance requirements",
      "Data protection",
      "Network security",
      "Application security"
    ],
    targetAudience: [
      "Small businesses",
      "Medium enterprises",
      "Healthcare providers",
      "Financial institutions",
      "E-commerce companies"
    ],
    tags: ["Cybersecurity", "Security", "Compliance", "Threat Detection", "Monitoring"],
    estimatedDelivery: "1-2 weeks",
    supportLevel: "premium",
    marketPrice: "$299 - $800/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["SIEM", "EDR", "Firewall", "IDS/IPS", "Penetration Testing"],
    integrations: ["Active Directory", "Office 365", "Slack", "Jira", "ServiceNow"],
    compliance: ["SOC 2", "ISO 27001", "GDPR", "HIPAA", "PCI DSS"],
    roi: "300% within 12 months",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
    rating: 4.7,
    reviewCount: 234,
    aiScore: 92,
    featured: true
  }
];
export const SERVICE_CATEGORIES = [
  { label: 'AI & Content Management', value: 'ai-content' },
  { label: 'Cloud & Infrastructure', value: 'cloud-infrastructure' },
  { label: 'Cybersecurity', value: 'cybersecurity' },
  { label: 'Digital Transformation', value: 'digital-transformation' },
  { label: 'IT Consulting', value: 'it-consulting' },
  { label: 'Software Development', value: 'software-development' }
];
export const SERVICE_SUBCATEGORIES = {
  'ai-content': ['Content Creation', 'Content Management', 'SEO Optimization', 'Marketing Automation'],
  'cloud-infrastructure': ['Cloud Hosting', 'DevOps', 'Infrastructure as Code', 'Monitoring'],
  'cybersecurity': ['Security Services', 'Compliance', 'Threat Detection', 'Incident Response'],
  'digital-transformation': ['Process Automation', 'Digital Strategy', 'Change Management', 'Technology Integration'],
  'it-consulting': ['Strategy', 'Architecture', 'Implementation', 'Optimization'],
  'software-development': ['Custom Development', 'API Integration', 'Maintenance', 'Support']
};
export const PRICING_TIERS = {
  basic: { name: 'Basic', multiplier: 1 },
  professional: { name: 'Professional', multiplier: 1.5 },
  enterprise: { name: 'Enterprise', multiplier: 2.5 }
};
export const CONTACT_INFO = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  website: "https://ziontechgroup.com"
};
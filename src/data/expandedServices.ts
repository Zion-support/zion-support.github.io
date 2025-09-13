export interface ExpandedService {
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

export const expandedServices: ExpandedService[] = [
  {
    id: "comprehensive-cloud-migration",
    title: "Comprehensive Cloud Migration Service",
    description: "End-to-end cloud migration service with zero downtime and enhanced security.",
    category: "Cloud Services",
    subcategory: "Migration",
    price: 15000,
    currency: "USD",
    pricingModel: "one-time",
    features: [
      "Zero-downtime migration",
      "Security assessment",
      "Performance optimization",
      "Cost optimization",
      "24/7 support"
    ],
    benefits: [
      "Seamless cloud transition",
      "Improved scalability",
      "Enhanced security",
      "Reduced operational costs"
    ],
    useCases: [
      "Legacy system migration",
      "Multi-cloud deployment",
      "Hybrid cloud setup",
      "Disaster recovery"
    ],
    targetAudience: ["Enterprises", "Mid-size companies", "Government agencies", "Healthcare organizations"],
    tags: ["Cloud", "Migration", "Security", "AWS", "Azure", "GCP"],
    estimatedDelivery: "8-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$15,000-100,000",
    contactInfo: {
      phone: "+1-555-0127",
      email: "cloud@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    integrations: ["Terraform", "Ansible", "Jenkins", "GitLab CI/CD"],
    compliance: ["SOC 2", "ISO 27001", "HIPAA", "FedRAMP"],
    roi: "300% ROI within 12 months",
    competitors: ["Accenture", "Deloitte", "IBM", "Capgemini"]
  }
];
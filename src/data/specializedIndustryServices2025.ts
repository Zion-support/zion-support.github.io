export interface SpecializedIndustryService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  industry: string;
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

export const SPECIALIZED_INDUSTRY_SERVICES_2025: SpecializedIndustryService[] = [
  // Healthcare AI Solutions
  {
    id: "ai-healthcare-diagnostics-platform",
    title: "AI Healthcare Diagnostics Platform",
    description: "Advanced medical diagnostics platform that uses AI to analyze medical images, lab results, and patient data for early disease detection and treatment recommendations.",
    category: "AI & Healthcare",
    subcategory: "Medical Diagnostics",
    industry: "Healthcare",
    price: 4499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Medical image analysis (X-ray, MRI, CT, Ultrasound)",
      "Lab result interpretation",
      "Patient data analytics",
      "Disease prediction models",
      "Treatment recommendations",
      "Clinical decision support",
      "Electronic health records integration",
      "Telemedicine capabilities",
      "Mobile app access",
      "HIPAA compliance reporting"
    ],
    benefits: [
      "Improve diagnostic accuracy by 25%",
      "Reduce diagnosis time by 60%",
      "Enable early disease detection",
      "Improve patient outcomes",
      "Reduce healthcare costs by 30%"
    ],
    useCases: [
      "Radiology departments",
      "Pathology labs",
      "Primary care clinics",
      "Specialist practices",
      "Research institutions"
    ],
    targetAudience: [
      "Healthcare providers",
      "Hospitals and clinics",
      "Medical researchers",
      "Health insurance companies",
      "Pharmaceutical companies"
    ],
    tags: ["AI", "Healthcare", "Diagnostics", "Medical Imaging", "Machine Learning"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,499 - $12,999/month",
    roi: "150-300%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "PyTorch", "React", "Node.js", "PostgreSQL"],
      integrations: ["PACS systems", "EHR platforms", "Lab systems", "Telemedicine platforms"],
      apiEndpoints: 300,
      uptime: "99.9%",
      security: ["HIPAA", "SOC 2", "GDPR", "Data encryption", "Audit logging"]
    },
    competitors: ["Butterfly Network", "Zebra Medical", "Aidoc", "Enlitic"],
    marketSize: "$45.2 billion by 2025"
  }
];
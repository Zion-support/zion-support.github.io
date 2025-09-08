export interface IndustrySolution {
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
}

export const INDUSTRY_SOLUTIONS: IndustrySolution[] = [
  // Healthcare AI Platform
  {
    id: "healthcare-ai-platform",
    title: "Healthcare AI & Clinical Decision Support Platform",
    description: "Comprehensive healthcare AI platform that provides clinical decision support, patient monitoring, and predictive analytics for improved patient outcomes and operational efficiency.",
    category: "Healthcare",
    subcategory: "AI & Clinical Support",
    price: 4500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Clinical decision support",
      "Patient risk assessment",
      "Predictive analytics",
      "Medical image analysis",
      "Electronic health record integration",
      "Compliance management"
    ],
    benefits: [
      "Improve diagnostic accuracy by 30%",
      "Reduce medical errors",
      "Enhance patient outcomes",
      "Optimize resource utilization",
      "Ensure regulatory compliance"
    ],
    useCases: [
      "Hospitals",
      "Medical clinics",
      "Research institutions",
      "Telemedicine platforms",
      "Healthcare systems"
    ],
    targetAudience: [
      "Healthcare administrators",
      "Medical directors",
      "Clinical informaticists",
      "Healthcare IT teams",
      "Medical researchers"
    ],
    tags: ["Healthcare", "AI", "Clinical Decision Support", "Medical Analytics", "Patient Care"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,500 - $25,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Financial Services Platform
  {
    id: "financial-services-platform",
    title: "Financial Services AI & Risk Management Platform",
    description: "Advanced financial services platform that provides AI-powered risk assessment, fraud detection, compliance automation, and portfolio optimization for financial institutions.",
    category: "Financial Services",
    subcategory: "AI & Risk Management",
    price: 3800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Risk assessment algorithms",
      "Fraud detection systems",
      "Compliance automation",
      "Portfolio optimization",
      "Regulatory reporting",
      "Real-time monitoring"
    ],
    benefits: [
      "Reduce fraud losses by 60%",
      "Improve risk assessment accuracy",
      "Automate compliance processes",
      "Optimize portfolio performance",
      "Reduce regulatory risks"
    ],
    useCases: [
      "Banks",
      "Credit unions",
      "Investment firms",
      "Insurance companies",
      "Fintech startups"
    ],
    targetAudience: [
      "Risk managers",
      "Compliance officers",
      "Portfolio managers",
      "Financial analysts",
      "IT directors"
    ],
    tags: ["Financial Services", "AI", "Risk Management", "Fraud Detection", "Compliance"],
    estimatedDelivery: "5-7 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,800 - $20,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Manufacturing IoT Platform
  {
    id: "manufacturing-iot-platform",
    title: "Manufacturing IoT & Smart Factory Platform",
    description: "Comprehensive IoT platform for manufacturing that enables predictive maintenance, quality control, supply chain optimization, and real-time production monitoring.",
    category: "Manufacturing",
    subcategory: "IoT & Smart Factory",
    price: 3200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Predictive maintenance",
      "Quality control automation",
      "Production monitoring",
      "Supply chain optimization",
      "Energy management",
      "Performance analytics"
    ],
    benefits: [
      "Reduce downtime by 40%",
      "Improve product quality",
      "Optimize production efficiency",
      "Reduce energy costs",
      "Enhance supply chain visibility"
    ],
    useCases: [
      "Manufacturing plants",
      "Assembly lines",
      "Quality control",
      "Maintenance operations",
      "Supply chain management"
    ],
    targetAudience: [
      "Manufacturing managers",
      "Operations directors",
      "Quality managers",
      "Maintenance supervisors",
      "Plant managers"
    ],
    tags: ["Manufacturing", "IoT", "Smart Factory", "Predictive Maintenance", "Quality Control"],
    estimatedDelivery: "5-7 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,200 - $18,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Retail Analytics Platform
  {
    id: "retail-analytics-platform",
    title: "Retail Analytics & Customer Experience Platform",
    description: "Advanced retail analytics platform that provides customer behavior insights, inventory optimization, demand forecasting, and personalized marketing automation.",
    category: "Retail",
    subcategory: "Analytics & Customer Experience",
    price: 2400,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Customer behavior analytics",
      "Inventory optimization",
      "Demand forecasting",
      "Personalized marketing",
      "Store performance analytics",
      "Omnichannel integration"
    ],
    benefits: [
      "Increase sales by 20-30%",
      "Reduce inventory costs",
      "Improve customer experience",
      "Optimize marketing ROI",
      "Enhance store performance"
    ],
    useCases: [
      "Retail chains",
      "E-commerce platforms",
      "Department stores",
      "Specialty retailers",
      "Shopping centers"
    ],
    targetAudience: [
      "Retail managers",
      "Marketing directors",
      "Operations managers",
      "E-commerce managers",
      "Store directors"
    ],
    tags: ["Retail", "Analytics", "Customer Experience", "Inventory Management", "Marketing"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$2,400 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Education Technology Platform
  {
    id: "education-technology-platform",
    title: "Education Technology & Learning Analytics Platform",
    description: "Comprehensive education technology platform that provides personalized learning, student analytics, course management, and educational content delivery.",
    category: "Education",
    subcategory: "Technology & Learning Analytics",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Personalized learning paths",
      "Student performance analytics",
      "Course management system",
      "Content delivery platform",
      "Assessment tools",
      "Collaboration features"
    ],
    benefits: [
      "Improve student outcomes by 25%",
      "Personalize learning experiences",
      "Optimize course content",
      "Enhance student engagement",
      "Streamline administrative tasks"
    ],
    useCases: [
      "K-12 schools",
      "Higher education",
      "Corporate training",
      "Online learning",
      "Professional development"
    ],
    targetAudience: [
      "Educational administrators",
      "Teachers and instructors",
      "Training managers",
      "Curriculum developers",
      "IT directors"
    ],
    tags: ["Education", "Technology", "Learning Analytics", "Personalized Learning", "Course Management"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$1,800 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];
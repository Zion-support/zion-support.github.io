"use client";
export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  benefits: string[];
  useCases: string[];
  technologies: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}
export const services: Service[] = [
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description:
      "Comprehensive artificial intelligence solutions for modern businesses",
    shortDescription: "AI-powered solutions for automation and intelligence",
    icon: "brain",
    features: [
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
    ],
    pricing: {
      basic: 3000,
      pro: 10000,
      enterprise: 30000,
    },
    benefits: [
      "Increased Efficiency",
      "Cost Reduction",
      "Better Decision Making",
    ],
    useCases: ["Customer Service", "Data Analysis", "Process Automation"],
    technologies: ["Python", "TensorFlow", "PyTorch", "AWS"],
    contactInfo: {
      phone: "+1-555-0123",
      email: "ai@ziontech.com",
      website: "https://ziontech.com/ai",
    },
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and migration services",
    shortDescription: "Cloud solutions for scalability and reliability",
    icon: "cloud",
    features: [
      "Cloud Migration",
      "Infrastructure as Code",
      "Auto Scaling",
      "Monitoring",
    ],
    pricing: {
      basic: 2000,
      pro: 8000,
      enterprise: 25000,
    },
    benefits: ["Scalability", "Cost Efficiency", "High Availability"],
    useCases: ["Application Hosting", "Data Storage", "Disaster Recovery"],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker"],
    contactInfo: {
      phone: "+1-555-0124",
      email: "cloud@ziontech.com",
      website: "https://ziontech.com/cloud",
    },
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Advanced security solutions to protect your digital assets",
    shortDescription: "Comprehensive security solutions for digital protection",
    icon: "shield",
    features: [
      "Threat Detection",
      "Vulnerability Assessment",
      "Security Monitoring",
      "Incident Response",
    ],
    pricing: {
      basic: 10000,
      pro: 30000,
      enterprise: 60000,
    },
    benefits: ["Data Protection", "Compliance", "Risk Mitigation"],
    useCases: ["Network Security", "Data Encryption", "Access Control"],
    technologies: ["SIEM", "Firewalls", "Encryption", "PKI"],
    contactInfo: {
      phone: "+1-555-0125",
      email: "security@ziontech.com",
      website: "https://ziontech.com/security",
    },
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Transform your data into actionable business insights",
    shortDescription: "Data-driven insights for better decision making",
    icon: "chart",
    features: [
      "Data Visualization",
      "Predictive Modeling",
      "Real-time Analytics",
      "Business Intelligence",
    ],
    pricing: {
      basic: 15000,
      pro: 50000,
      enterprise: 100000,
    },
    benefits: [
      "Better Insights",
      "Improved Performance",
      "Competitive Advantage",
    ],
    useCases: [
      "Business Intelligence",
      "Market Analysis",
      "Performance Tracking",
    ],
    technologies: ["Python", "R", "Tableau", "Power BI"],
    contactInfo: {
      phone: "+1-555-0126",
      email: "analytics@ziontech.com",
      website: "https://ziontech.com/analytics",
    },
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description: "Custom mobile applications for iOS and Android platforms",
    shortDescription: "Native and cross-platform mobile app development",
    icon: "smartphone",
    features: [
      "Native Development",
      "Cross-platform",
      "UI/UX Design",
      "App Store Optimization",
    ],
    pricing: {
      basic: 8000,
      pro: 25000,
      enterprise: 50000,
    },
    benefits: ["User Engagement", "Market Reach", "Brand Presence"],
    useCases: ["Consumer Apps", "Enterprise Apps", "E-commerce Apps"],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    contactInfo: {
      phone: "+1-555-0127",
      email: "mobile@ziontech.com",
      website: "https://ziontech.com/mobile",
    },
  },
];

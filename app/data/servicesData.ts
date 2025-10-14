export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: "AI" | "IT" | "SaaS" | "Cybersecurity" | "Cloud" | "5G" | "Blockchain" | "IoT";
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
  href: string;
  glowColor: "purple" | "cyan" | "pink" | "green" | "blue" | "yellow" | "red" | "orange";
}

export const servicesData: Service[] = [
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description: "Comprehensive AI solutions for modern businesses",
    shortDescription: "Transform your business with cutting-edge AI technology",
    category: "AI",
    icon: "🤖",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    pricing: {
      basic: 1000,
      pro: 5000,
      enterprise: 15000
    },
    benefits: ["Increased Efficiency", "Better Decision Making", "Cost Reduction", "Competitive Advantage"],
    useCases: ["Customer Service", "Data Analysis", "Process Automation", "Predictive Maintenance"],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Hugging Face"],
    contactInfo: {
      phone: "+1-302-464-0950",
      email: "ai@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-solutions"
    },
    href: "/ai-solutions",
    glowColor: "purple"
  },
  {
    id: "it-services",
    title: "IT Services",
    description: "Complete IT infrastructure and support services",
    shortDescription: "Reliable IT services to keep your business running smoothly",
    category: "IT",
    icon: "💻",
    features: ["Infrastructure Management", "Technical Support", "System Administration", "Network Security"],
    pricing: {
      basic: 500,
      pro: 2000,
      enterprise: 8000
    },
    benefits: ["24/7 Support", "Reduced Downtime", "Scalable Solutions", "Expert Knowledge"],
    useCases: ["System Maintenance", "Troubleshooting", "Security Updates", "Performance Optimization"],
    technologies: ["Windows Server", "Linux", "VMware", "Cisco", "Microsoft Azure"],
    contactInfo: {
      phone: "+1-302-464-0950",
      email: "it@ziontechgroup.com",
      website: "https://ziontechgroup.com/it-services"
    },
    href: "/it-services",
    glowColor: "blue"
  }
];
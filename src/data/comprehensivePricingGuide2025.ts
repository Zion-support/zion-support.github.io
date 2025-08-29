export interface PricingTier {
  id: string;
  name: string;
  price: number;
  currency: string;
  billing: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  href: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  services: ServiceItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  billing: string;
  marketPrice: string;
  features: string[];
  benefits: string[];
  estimatedDelivery: string;
  roi: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  cta: string;
  href: string;
}

export const COMPREHENSIVE_PRICING_GUIDE_2025: ServiceCategory[] = [
  {
    id: "micro-saas-solutions",
    name: "Micro SaaS Solutions",
    description: "Scalable, focused software solutions that address specific business needs with rapid deployment and measurable ROI.",
    services: [
      {
        id: "ai-content-studio-pro",
        title: "AI Content Studio Pro",
        description: "Enterprise-grade AI content creation platform that generates high-quality, SEO-optimized content across multiple formats and languages.",
        price: 1499,
        currency: "$",
        billing: "monthly",
        marketPrice: "$1,499 - $4,999/month",
        features: [
          "Multi-format content generation",
          "Brand voice training and consistency",
          "SEO optimization with real-time analysis",
          "Multi-language support (50+ languages)",
          "Content performance analytics",
          "Plagiarism detection",
          "Collaborative workflow management",
          "API integration for CMS platforms"
        ],
        benefits: [
          "Reduce content creation time by 70%",
          "Improve SEO rankings by 40%",
          "Maintain consistent brand voice",
          "Scale content production globally"
        ],
        estimatedDelivery: "4-6 weeks",
        roi: "300-500%",
        contactInfo: {
          phone: "+1 302 464 0950",
          email: "kleber@ziontechgroup.com",
          website: "https://ziontechgroup.com"
        },
        cta: "Start Free Trial",
        href: "https://ziontechgroup.com/contact"
      },
      {
        id: "ai-customer-success-hub",
        title: "AI Customer Success Hub",
        description: "Intelligent customer success platform that predicts churn, automates onboarding, and personalizes customer experiences.",
        price: 899,
        currency: "$",
        billing: "monthly",
        marketPrice: "$899 - $2,999/month",
        features: [
          "Predictive churn analysis",
          "Automated onboarding workflows",
          "Personalized customer journey mapping",
          "Real-time sentiment analysis",
          "Proactive issue detection",
          "Customer health scoring",
          "Automated check-ins and follow-ups",
          "Success metric tracking"
        ],
        benefits: [
          "Reduce churn by 25-40%",
          "Increase customer lifetime value by 35%",
          "Improve customer satisfaction scores",
          "Automate repetitive success tasks"
        ],
        estimatedDelivery: "6-8 weeks",
        roi: "200-350%",
        contactInfo: {
          phone: "+1 302 464 0950",
          email: "kleber@ziontechgroup.com",
          website: "https://ziontechgroup.com"
        },
        cta: "Get Started",
        href: "https://ziontechgroup.com/contact"
      },
      {
        id: "ai-finops-optimizer",
        title: "AI FinOps Optimizer",
        description: "Intelligent financial operations platform that automates expense management, optimizes cloud costs, and provides real-time financial insights.",
        price: 1299,
        currency: "$",
        billing: "monthly",
        marketPrice: "$1,299 - $3,999/month",
        features: [
          "Automated expense categorization",
          "Cloud cost optimization",
          "Real-time budget tracking",
          "AI-powered fraud detection",
          "Automated invoice processing",
          "Financial reporting and analytics",
          "Multi-currency support",
          "Integration with accounting systems"
        ],
        benefits: [
          "Reduce operational costs by 20-30%",
          "Improve financial visibility by 60%",
          "Automate 80% of financial tasks",
          "Enhance compliance and audit readiness"
        ],
        estimatedDelivery: "8-10 weeks",
        roi: "250-400%",
        contactInfo: {
          phone: "+1 302 464 0950",
          email: "kleber@ziontechgroup.com",
          website: "https://ziontechgroup.com"
        },
        cta: "Optimize FinOps",
        href: "https://ziontechgroup.com/contact"
      }
    ]
  },
  {
    id: "specialized-it-services",
    name: "Specialized IT Services",
    description: "Enterprise-grade IT infrastructure, security, and development services designed for modern business requirements.",
    services: [
      {
        id: "zero-trust-network-architecture",
        title: "Zero Trust Network Architecture",
        description: "Comprehensive zero trust security implementation with continuous verification, micro-segmentation, and adaptive access control.",
        price: 15000,
        currency: "$",
        billing: "project",
        marketPrice: "$15,000 - $50,000/project",
        features: [
          "Identity verification and authentication",
          "Micro-segmentation and network isolation",
          "Continuous monitoring and threat detection",
          "Adaptive access control policies",
          "Multi-factor authentication (MFA)",
          "Privileged access management",
          "Network traffic analysis",
          "Compliance reporting and auditing"
        ],
        benefits: [
          "Reduce security breaches by 80%",
          "Improve compliance posture",
          "Enhanced network visibility",
          "Simplified security management"
        ],
        estimatedDelivery: "8-12 weeks",
        roi: "300-500%",
        contactInfo: {
          phone: "+1 302 464 0950",
          email: "kleber@ziontechgroup.com",
          website: "https://ziontechgroup.com"
        },
        cta: "Security Assessment",
        href: "https://ziontechgroup.com/contact"
      },
      {
        id: "five-g-enterprise-network",
        title: "5G Enterprise Network Solutions",
        description: "Custom 5G network infrastructure for enterprises with ultra-low latency, massive IoT connectivity, and private network capabilities.",
        price: 25000,
        currency: "$",
        billing: "project",
        marketPrice: "$25,000 - $100,000/project",
        features: [
          "Private 5G network deployment",
          "Ultra-low latency connectivity",
          "Massive IoT device support",
          "Network slicing capabilities",
          "Edge computing integration",
          "Quality of service management",
          "Network monitoring and analytics",
          "Security and encryption"
        ],
        benefits: [
          "10x faster data transfer",
          "Ultra-low latency for real-time applications",
          "Massive IoT device connectivity",
          "Enhanced network reliability"
        ],
        estimatedDelivery: "12-16 weeks",
        roi: "400-600%",
        contactInfo: {
          phone: "+1 302 464 0950",
          email: "kleber@ziontechgroup.com",
          website: "https://ziontechgroup.com"
        },
        cta: "Network Assessment",
        href: "https://ziontechgroup.com/contact"
      },
      {
        id: "cloud-native-app-development",
        title: "Cloud-Native Application Development",
        description: "Modern application development using cloud-native technologies, microservices architecture, and DevOps practices.",
        price: 8000,
        currency: "$",
        billing: "project",
        marketPrice: "$8,000 - $25,000/project",
        features: [
          "Microservices architecture design",
          "Container orchestration with Kubernetes",
          "CI/CD pipeline implementation",
          "Cloud-native database design",
          "API-first development approach",
          "Monitoring and observability",
          "Auto-scaling and load balancing",
          "Security and compliance"
        ],
        benefits: [
          "Faster time to market",
          "Improved scalability and reliability",
          "Reduced infrastructure costs",
          "Enhanced developer productivity"
        ],
        estimatedDelivery: "6-10 weeks",
        roi: "250-400%",
        contactInfo: {
          phone: "+1 302 464 0950",
          email: "kleber@ziontechgroup.com",
          website: "https://ziontechgroup.com"
        },
        cta: "Start Development",
        href: "https://ziontechgroup.com/contact"
      }
    ]
  },
  {
    id: "advanced-ai-solutions",
    name: "Advanced AI Solutions",
    description: "Cutting-edge artificial intelligence platforms that automate processes, provide insights, and drive innovation.",
    services: [
      {
        id: "ai-cybersecurity-suite",
        title: "AI Cybersecurity Suite",
        description: "Comprehensive AI-powered cybersecurity platform that provides advanced threat detection, automated response, and predictive security analytics.",
        price: 2999,
        currency: "$",
        billing: "monthly",
        marketPrice: "$2,999 - $8,999/month",
        features: [
          "AI-powered threat detection and analysis",
          "Behavioral analytics and anomaly detection",
          "Automated incident response and remediation",
          "Predictive threat intelligence",
          "Real-time security monitoring",
          "Advanced malware analysis",
          "Network traffic analysis",
          "User behavior analytics"
        ],
        benefits: [
          "Detect threats 10x faster than traditional methods",
          "Reduce false positives by 80%",
          "Automate 70% of security responses",
          "Improve threat prediction accuracy"
        ],
        estimatedDelivery: "8-12 weeks",
        roi: "400-600%",
        contactInfo: {
          phone: "+1 302 464 0950",
          email: "kleber@ziontechgroup.com",
          website: "https://ziontechgroup.com"
        },
        cta: "Security Demo",
        href: "https://ziontechgroup.com/contact"
      },
      {
        id: "ai-healthcare-analytics",
        title: "AI Healthcare Analytics Platform",
        description: "Advanced healthcare analytics platform using AI to analyze patient data, predict outcomes, and optimize clinical decision-making.",
        price: 1999,
        currency: "$",
        billing: "monthly",
        marketPrice: "$1,999 - $5,999/month",
        features: [
          "Patient outcome prediction",
          "Clinical decision support",
          "Population health analytics",
          "Risk stratification models",
          "Treatment optimization",
          "Real-time monitoring",
          "Predictive analytics",
          "Integration with EHR systems"
        ],
        benefits: [
          "Improve patient outcomes by 30%",
          "Reduce readmission rates by 25%",
          "Optimize treatment plans",
          "Enhance clinical efficiency"
        ],
        estimatedDelivery: "10-14 weeks",
        roi: "300-500%",
        contactInfo: {
          phone: "+1 302 464 0950",
          email: "kleber@ziontechgroup.com",
          website: "https://ziontechgroup.com"
        },
        cta: "Healthcare Demo",
        href: "https://ziontechgroup.com/contact"
      },
      {
        id: "ai-workflow-automation",
        title: "AI Workflow Automation Platform",
        description: "Intelligent workflow automation platform that uses AI to streamline business processes, reduce manual tasks, and improve operational efficiency.",
        price: 1499,
        currency: "$",
        billing: "monthly",
        marketPrice: "$1,499 - $4,999/month",
        features: [
          "AI-powered process discovery",
          "Intelligent workflow design",
          "Automated task execution",
          "Process optimization",
          "Real-time monitoring",
          "Predictive analytics",
          "Integration with business systems",
          "Custom automation rules"
        ],
        benefits: [
          "Reduce manual tasks by 60%",
          "Improve process efficiency by 40%",
          "Reduce errors by 80%",
          "Scale operations without adding staff"
        ],
        estimatedDelivery: "6-10 weeks",
        roi: "250-400%",
        contactInfo: {
          phone: "+1 302 464 0950",
          email: "kleber@ziontechgroup.com",
          website: "https://ziontechgroup.com"
        },
        cta: "Automation Demo",
        href: "https://ziontechgroup.com/contact"
      }
    ]
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: 899,
    currency: "$",
    billing: "monthly",
    description: "Perfect for small businesses and startups looking to get started with AI and automation.",
    features: [
      "Basic AI content generation",
      "Simple workflow automation",
      "Standard support",
      "Core integrations",
      "Basic analytics",
      "Email support"
    ],
    cta: "Get Started",
    href: "https://ziontechgroup.com/contact"
  },
  {
    id: "professional",
    name: "Professional",
    price: 1999,
    currency: "$",
    billing: "monthly",
    description: "Ideal for growing businesses that need advanced features and better support.",
    features: [
      "Advanced AI capabilities",
      "Complex workflow automation",
      "Priority support",
      "Advanced integrations",
      "Comprehensive analytics",
      "Phone and email support",
      "Custom training",
      "API access"
    ],
    popular: true,
    cta: "Start Free Trial",
    href: "https://ziontechgroup.com/contact"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 4999,
    currency: "$",
    billing: "monthly",
    description: "For large organizations that need enterprise-grade features, security, and support.",
    features: [
      "Full AI suite access",
      "Enterprise workflow automation",
      "24/7 dedicated support",
      "Custom integrations",
      "Advanced security features",
      "Dedicated account manager",
      "Custom development",
      "On-premise deployment options",
      "SLA guarantees",
      "Training and certification"
    ],
    cta: "Contact Sales",
    href: "https://ziontechgroup.com/contact"
  }
];

export const CONTACT_INFORMATION = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  website: "https://ziontechgroup.com",
  address: "364 E Main St STE 1008, Middletown DE 19709",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
  emergencySupport: "24/7 emergency support available for enterprise customers"
};

export const PAYMENT_OPTIONS = [
  "Credit Card (Visa, MasterCard, American Express)",
  "Bank Transfer",
  "Wire Transfer",
  "Purchase Orders (Enterprise)",
  "Annual billing with discount",
  "Custom payment plans available"
];

export const SERVICE_LEVEL_AGREEMENTS = {
  uptime: "99.9% guaranteed uptime",
  responseTime: "4-hour response time for critical issues",
  resolutionTime: "24-hour resolution time for major issues",
  supportHours: "24/7 support for enterprise customers",
  maintenance: "Scheduled maintenance with 48-hour notice"
};
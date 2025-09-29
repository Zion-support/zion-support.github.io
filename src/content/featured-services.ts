export type FeaturedService = {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  pricing: {
    starting: string;
    popular?: boolean;
  };
  features: string[];
  benefits: string[];
  technologies: string[];
  useCases: string[];
  cta: {
    primary: string;
    secondary: string;
  };
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    company: string;
  };
};

export const featuredServices: FeaturedService[] = [
  {
    id: "ai-chatbot-development",
    title: "AI Chatbot Development",
    description: "Build intelligent chatbots with natural language processing, multi-channel support, and seamless human handoff capabilities.",
    icon: "🤖",
    category: "AI Solutions",
    pricing: {
      starting: "$8k",
      popular: true
    },
    features: [
      "Natural Language Processing",
      "Multi-channel Integration",
      "Human Handoff Capabilities",
      "Analytics Dashboard",
      "Custom Training",
      "API Integrations"
    ],
    benefits: [
      "Reduce support workload by 70%",
      "Improve response times by 90%",
      "Increase customer satisfaction",
      "24/7 availability",
      "Scalable solution"
    ],
    technologies: ["OpenAI GPT-4", "Node.js", "React", "MongoDB", "AWS"],
    useCases: [
      "Customer Support",
      "Lead Generation",
      "Sales Qualification",
      "FAQ Automation",
      "Appointment Booking"
    ],
    cta: {
      primary: "Get Started Today",
      secondary: "View Case Studies"
    },
    metrics: [
      {
        label: "Average Response Time",
        value: "< 2 seconds",
        description: "Lightning-fast customer responses"
      },
      {
        label: "Implementation Time",
        value: "4-8 weeks",
        description: "Quick deployment and launch"
      },
      {
        label: "Cost Savings",
        value: "60-80%",
        description: "Reduction in support costs"
      }
    ],
    testimonial: {
      quote: "The chatbot reduced our response time from 30 minutes to 2 minutes and improved patient satisfaction by 60%.",
      author: "Dr. Michael Chen",
      company: "MedCare Hospital Network"
    }
  },
  {
    id: "ai-analytics-platform",
    title: "AI Analytics Platform",
    description: "Transform your data into actionable insights with our advanced AI-powered analytics platform featuring predictive modeling and automated reporting.",
    icon: "📊",
    category: "Data Analytics",
    pricing: {
      starting: "$199/mo"
    },
    features: [
      "Predictive Analytics",
      "Real-time Dashboards",
      "Automated Reporting",
      "Data Integration",
      "Machine Learning Models",
      "Custom Visualizations"
    ],
    benefits: [
      "Make data-driven decisions",
      "Identify trends and patterns",
      "Automate report generation",
      "Improve business performance",
      "Scale with your business"
    ],
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS"],
    useCases: [
      "Business Intelligence",
      "Financial Analysis",
      "Sales Forecasting",
      "Customer Analytics",
      "Performance Monitoring"
    ],
    cta: {
      primary: "Start Free Trial",
      secondary: "Schedule Demo"
    },
    metrics: [
      {
        label: "Analysis Time Reduction",
        value: "95%",
        description: "From hours to minutes"
      },
      {
        label: "Prediction Accuracy",
        value: "85%+",
        description: "Industry-leading accuracy"
      },
      {
        label: "ROI Improvement",
        value: "300%+",
        description: "Average client results"
      }
    ],
    testimonial: {
      quote: "Our analysis time went from 40 hours to 2 hours per week, and we generated $2.3M in additional revenue.",
      author: "Sarah Johnson",
      company: "FinTech Solutions Inc."
    }
  },
  {
    id: "cybersecurity-automation",
    title: "Cybersecurity Automation",
    description: "Protect your business with AI-powered security solutions including threat detection, incident response, and compliance monitoring.",
    icon: "🔒",
    category: "Cybersecurity",
    pricing: {
      starting: "$5k"
    },
    features: [
      "Threat Detection",
      "Incident Response",
      "Compliance Monitoring",
      "Vulnerability Scanning",
      "Security Analytics",
      "Automated Remediation"
    ],
    benefits: [
      "24/7 security monitoring",
      "Reduce incident response time",
      "Ensure compliance",
      "Prevent costly breaches",
      "Peace of mind"
    ],
    technologies: ["SIEM", "Machine Learning", "Python", "Elasticsearch", "Kubernetes"],
    useCases: [
      "Threat Detection",
      "Compliance Auditing",
      "Incident Response",
      "Vulnerability Management",
      "Security Monitoring"
    ],
    cta: {
      primary: "Get Security Assessment",
      secondary: "View Security Solutions"
    },
    metrics: [
      {
        label: "Threat Detection Time",
        value: "< 15 minutes",
        description: "From 6 hours to minutes"
      },
      {
        label: "Detection Accuracy",
        value: "98%",
        description: "Industry-leading precision"
      },
      {
        label: "Cost Savings",
        value: "$3.2M",
        description: "Average prevented losses"
      }
    ],
    testimonial: {
      quote: "We achieved 98% threat detection accuracy and prevented $3.2M in potential security breaches.",
      author: "Robert Kim",
      company: "SecureCorp Financial"
    }
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration Services",
    description: "Seamlessly migrate your infrastructure to the cloud with our expert migration services, ensuring zero downtime and optimal performance.",
    icon: "☁️",
    category: "Cloud Services",
    pricing: {
      starting: "$15k"
    },
    features: [
      "Zero-downtime Migration",
      "Performance Optimization",
      "Cost Optimization",
      "Security Hardening",
      "Monitoring Setup",
      "Training & Support"
    ],
    benefits: [
      "Reduce infrastructure costs",
      "Improve scalability",
      "Enhance security",
      "Increase reliability",
      "Modernize technology stack"
    ],
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
    useCases: [
      "Application Migration",
      "Database Migration",
      "Infrastructure Modernization",
      "Hybrid Cloud Setup",
      "Disaster Recovery"
    ],
    cta: {
      primary: "Get Migration Plan",
      secondary: "View Cloud Solutions"
    },
    metrics: [
      {
        label: "Cost Reduction",
        value: "32%",
        description: "Average infrastructure savings"
      },
      {
        label: "Migration Time",
        value: "2-8 weeks",
        description: "Depending on complexity"
      },
      {
        label: "Uptime Improvement",
        value: "99.9%",
        description: "Enhanced reliability"
      }
    ]
  },
  {
    id: "micro-saas-development",
    title: "Micro SaaS Development",
    description: "Build and launch your micro SaaS product with our full-stack development expertise, from MVP to scale.",
    icon: "🚀",
    category: "SaaS Development",
    pricing: {
      starting: "$25k"
    },
    features: [
      "Full-stack Development",
      "UI/UX Design",
      "Payment Integration",
      "Analytics Dashboard",
      "API Development",
      "Deployment & Scaling"
    ],
    benefits: [
      "Launch faster",
      "Validate ideas quickly",
      "Scale efficiently",
      "Generate recurring revenue",
      "Focus on growth"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS", "Docker"],
    useCases: [
      "Business Tools",
      "Productivity Apps",
      "Niche Solutions",
      "Industry-specific Software",
      "Automation Tools"
    ],
    cta: {
      primary: "Start Your SaaS",
      secondary: "View SaaS Portfolio"
    },
    metrics: [
      {
        label: "Time to Market",
        value: "8-16 weeks",
        description: "From concept to launch"
      },
      {
        label: "Success Rate",
        value: "85%",
        description: "Clients achieve product-market fit"
      },
      {
        label: "Average Revenue",
        value: "$50k+",
        description: "Annual recurring revenue"
      }
    ]
  }
];
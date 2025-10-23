// Optimized services data with reduced bundle size
export const servicesDataOptimized = {
  aiServices: [
    {
      id: "ai-development",
      title: "AI Development Services",
      description:
        "Custom AI solutions tailored to your business needs with cutting-edge machine learning and deep learning technologies",
      icon: "🤖",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI Integration",
      ],
      pricing: { basic: 5000, pro: 15000, enterprise: 50000 },
      benefits: [
        "Automated decision making",
        "Improved efficiency",
        "Better customer insights",
        "Reduced operational costs",
      ],
      link: "/ai-services/ai-development",
    },
    {
      id: "ai-chatbot",
      title: "AI Chatbot Development",
      description:
        "Intelligent conversational AI chatbots that understand context and provide human-like interactions",
      icon: "💬",
      features: [
        "Natural Language Understanding",
        "Context Awareness",
        "Multi-language Support",
        "Integration APIs",
        "Analytics Dashboard",
      ],
      pricing: { basic: 3000, pro: 10000, enterprise: 30000 },
      benefits: [
        "24/7 customer support",
        "Reduced response time",
        "Cost-effective scaling",
        "Improved customer satisfaction",
      ],
      link: "/ai-chatbot-builder",
    },
    {
      id: "ai-automation",
      title: "AI Process Automation",
      description:
        "Automate complex business processes with AI-powered workflow optimization and intelligent decision making",
      icon: "⚡",
      features: [
        "Workflow Automation",
        "Intelligent Routing",
        "Data Processing",
        "Decision Trees",
        "Integration Capabilities",
      ],
      pricing: { basic: 4000, pro: 12000, enterprise: 40000 },
      benefits: [
        "Reduced manual work",
        "Faster processing",
        "Error reduction",
        "Cost savings",
      ],
      link: "/ai-services/automation",
    },
  ],

  itServices: [
    {
      id: "web-development",
      title: "Web Development",
      description:
        "Modern, responsive web applications built with cutting-edge technologies and best practices",
      icon: "🌐",
      features: [
        "Responsive Design",
        "Performance Optimization",
        "SEO Ready",
        "Security Hardened",
        "Scalable Architecture",
      ],
      pricing: { basic: 5000, pro: 15000, enterprise: 50000 },
      benefits: [
        "Modern user experience",
        "Mobile-first design",
        "Fast loading times",
        "Search engine optimized",
      ],
      link: "/web-development",
    },
    {
      id: "cloud-infrastructure",
      title: "Cloud Infrastructure",
      description:
        "Scalable cloud solutions and infrastructure management for modern businesses",
      icon: "☁️",
      features: [
        "Cloud Migration",
        "Auto-scaling",
        "Security Management",
        "Cost Optimization",
        "24/7 Monitoring",
      ],
      pricing: { basic: 3000, pro: 10000, enterprise: 30000 },
      benefits: [
        "Scalable infrastructure",
        "Reduced costs",
        "High availability",
        "Automatic scaling",
      ],
      link: "/cloud-infrastructure",
    },
  ],

  microSaaS: [
    {
      id: "analytics-dashboard",
      title: "Smart Analytics Dashboard",
      description:
        "Comprehensive business intelligence and analytics platform with real-time insights",
      icon: "📊",
      features: [
        "Real-time Analytics",
        "Custom Dashboards",
        "Data Visualization",
        "Automated Reports",
        "API Integration",
      ],
      pricing: { monthly: 99, yearly: 999 },
      benefits: [
        "Data-driven decisions",
        "Real-time insights",
        "Customizable views",
        "Automated reporting",
      ],
      link: "/zion-smart-analytics-dashboard",
    },
    {
      id: "crm-automation",
      title: "Smart CRM Automation",
      description:
        "AI-powered customer relationship management with automated workflows and intelligent insights",
      icon: "👥",
      features: [
        "Lead Management",
        "Automated Workflows",
        "AI Insights",
        "Integration Hub",
        "Performance Analytics",
      ],
      pricing: { monthly: 149, yearly: 1499 },
      benefits: [
        "Improved lead conversion",
        "Automated follow-ups",
        "Better customer insights",
        "Reduced manual work",
      ],
      link: "/zion-smart-crm-automation",
    },
  ],
};
// Lazy load full services data when needed
export const loadFullServicesData = async () => {

};

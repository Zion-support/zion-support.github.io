export interface Service {
  id: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  tags: string[];
  featured: boolean;
  newBadge: boolean;
  trending: boolean;
  pricing: {
    startingPrice: string;
    currency: string;
    billingPeriod: string;
  };
  benefits: string[];
  technologies: string[];
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  url: string;
  image: string;
  publishedDate: string;
  author: string;
}

export const newServices2026: Service[] = [
  {
    id: "ai-autonomous-infrastructure-platform",
    title: "AI Autonomous Infrastructure Platform",
    description: "Revolutionary AI-powered infrastructure platform that self-heals, self-optimizes, and self-scales automatically. Achieve 99.9% uptime with zero manual intervention.",
    excerpt: "Transform your infrastructure with AI that thinks, learns, and adapts. Zero-touch operations are no longer a dream—they're here.",
    category: "AI Infrastructure",
    tags: ["Autonomous Systems", "Self-Healing", "Infrastructure", "AI Operations", "Automation"],
    featured: true,
    newBadge: true,
    trending: true,
    pricing: {
      startingPrice: "$2,500",
      currency: "USD",
      billingPeriod: "per month"
    },
    benefits: [
      "99.9% system uptime guaranteed",
      "90% reduction in operational costs",
      "Automatic scaling and optimization",
      "Zero manual intervention required",
      "Predictive maintenance and healing",
      "Real-time performance monitoring"
    ],
    technologies: ["AI/ML", "Cloud Infrastructure", "Kubernetes", "Monitoring", "Automation"],
    metrics: [
      {
        label: "Uptime",
        value: "99.9%",
        description: "Guaranteed system availability"
      },
      {
        label: "Cost Reduction",
        value: "90%",
        description: "Operational cost savings"
      },
      {
        label: "Automation",
        value: "95%",
        description: "Self-managing operations"
      },
      {
        label: "Response Time",
        value: "< 15s",
        description: "Issue detection and resolution"
      }
    ],
    url: "/services/ai-autonomous-infrastructure-platform",
    image: "/images/ai-autonomous-infrastructure-platform.jpg",
    publishedDate: "2026-01-25",
    author: "Zion Tech Group"
  },
  {
    id: "multimodal-ai-intelligence-suite",
    title: "Multimodal AI Intelligence Suite",
    description: "Comprehensive AI suite that processes text, images, audio, and video simultaneously. Unlock insights from all your data types with unified intelligence.",
    excerpt: "Next-generation multimodal AI that understands and processes multiple data types for comprehensive business intelligence.",
    category: "Multimodal AI",
    tags: ["Multimodal AI", "Computer Vision", "NLP", "Audio Processing", "Video Analysis"],
    featured: true,
    newBadge: true,
    trending: true,
    pricing: {
      startingPrice: "$1,800",
      currency: "USD",
      billingPeriod: "per month"
    },
    benefits: [
      "90% accuracy across all modalities",
      "Unified processing pipeline",
      "Real-time multimodal analysis",
      "Custom model training",
      "API integration ready",
      "Scalable cloud infrastructure"
    ],
    technologies: ["Multimodal AI", "Deep Learning", "Computer Vision", "NLP", "Audio Processing"],
    metrics: [
      {
        label: "Accuracy",
        value: "90%",
        description: "Cross-modal intelligence"
      },
      {
        label: "Processing Speed",
        value: "5x",
        description: "Faster than single-modal"
      },
      {
        label: "Integration Time",
        value: "50%",
        description: "Faster system integration"
      },
      {
        label: "Business Value",
        value: "300%",
        description: "Increase in insights"
      }
    ],
    url: "/services/multimodal-ai-intelligence-suite",
    image: "/images/multimodal-ai-intelligence-suite.jpg",
    publishedDate: "2026-01-24",
    author: "Zion Tech Group"
  },
  {
    id: "ai-ethics-compliance-framework",
    title: "AI Ethics & Compliance Framework",
    description: "Comprehensive framework for developing and deploying AI systems responsibly. Ensure compliance with regulations and build trust with stakeholders.",
    excerpt: "Essential framework for responsible AI development, deployment, and governance with built-in compliance monitoring.",
    category: "AI Ethics",
    tags: ["AI Ethics", "Responsible AI", "Compliance", "Governance", "Transparency"],
    featured: true,
    newBadge: true,
    trending: false,
    pricing: {
      startingPrice: "$1,200",
      currency: "USD",
      billingPeriod: "per month"
    },
    benefits: [
      "100% regulatory compliance",
      "Automated ethics monitoring",
      "Transparency reporting",
      "Risk assessment tools",
      "Stakeholder trust building",
      "Continuous compliance updates"
    ],
    technologies: ["AI Ethics", "Compliance Monitoring", "Risk Assessment", "Reporting", "Governance"],
    metrics: [
      {
        label: "Compliance Rate",
        value: "100%",
        description: "Regulatory compliance"
      },
      {
        label: "Trust Score",
        value: "95%",
        description: "Stakeholder trust"
      },
      {
        label: "Risk Reduction",
        value: "80%",
        description: "AI-related risks"
      },
      {
        label: "Transparency",
        value: "90%",
        description: "System transparency"
      }
    ],
    url: "/services/ai-ethics-compliance-framework",
    image: "/images/ai-ethics-compliance-framework.jpg",
    publishedDate: "2026-01-23",
    author: "Zion Tech Group"
  },
  {
    id: "real-time-ai-performance-monitoring",
    title: "Real-Time AI Performance Monitoring",
    description: "Advanced AI performance monitoring with real-time observability, automated alerting, and predictive analytics for optimal system performance.",
    excerpt: "Comprehensive AI performance monitoring solution that provides real-time insights and predictive analytics for optimal system performance.",
    category: "AI Operations",
    tags: ["Performance Monitoring", "Observability", "AI Operations", "Alerting", "Analytics"],
    featured: true,
    newBadge: true,
    trending: false,
    pricing: {
      startingPrice: "$950",
      currency: "USD",
      billingPeriod: "per month"
    },
    benefits: [
      "99.9% system reliability",
      "Real-time performance insights",
      "Automated alerting system",
      "Predictive analytics",
      "Custom dashboards",
      "Historical trend analysis"
    ],
    technologies: ["Performance Monitoring", "Observability", "Analytics", "Alerting", "Dashboards"],
    metrics: [
      {
        label: "System Reliability",
        value: "99.9%",
        description: "Overall uptime"
      },
      {
        label: "Detection Time",
        value: "< 30s",
        description: "Issue detection"
      },
      {
        label: "False Positives",
        value: "85%",
        description: "Reduction in false alerts"
      },
      {
        label: "Cost Savings",
        value: "70%",
        description: "Monitoring optimization"
      }
    ],
    url: "/services/real-time-ai-performance-monitoring",
    image: "/images/real-time-ai-performance-monitoring.jpg",
    publishedDate: "2026-01-22",
    author: "Zion Tech Group"
  },
  {
    id: "edge-ai-deployment-platform",
    title: "Edge AI Deployment Platform",
    description: "Production-ready edge AI platform with real-time inference, offline capabilities, and seamless cloud synchronization for distributed intelligence.",
    excerpt: "Deploy AI models at the edge with production-ready solutions that deliver real-time intelligence while maintaining cloud connectivity.",
    category: "Edge AI",
    tags: ["Edge AI", "Real-time Inference", "Edge Computing", "AI Deployment", "Offline AI"],
    featured: false,
    newBadge: true,
    trending: false,
    pricing: {
      startingPrice: "$1,500",
      currency: "USD",
      billingPeriod: "per month"
    },
    benefits: [
      "Sub-50ms inference speed",
      "100% offline capability",
      "Seamless cloud sync",
      "Edge-to-cloud orchestration",
      "Automatic model updates",
      "Distributed deployment"
    ],
    technologies: ["Edge AI", "Real-time Inference", "Edge Computing", "Cloud Sync", "Orchestration"],
    metrics: [
      {
        label: "Inference Speed",
        value: "< 50ms",
        description: "Real-time edge inference"
      },
      {
        label: "Offline Capability",
        value: "100%",
        description: "Full offline functionality"
      },
      {
        label: "Cost Reduction",
        value: "80%",
        description: "Edge vs cloud costs"
      },
      {
        label: "Latency Reduction",
        value: "90%",
        description: "Reduced inference latency"
      }
    ],
    url: "/services/edge-ai-deployment-platform",
    image: "/images/edge-ai-deployment-platform.jpg",
    publishedDate: "2026-01-20",
    author: "Zion Tech Group"
  },
  {
    id: "ai-data-pipeline-optimizer",
    title: "AI Data Pipeline Optimizer",
    description: "High-performance AI data pipeline optimization with advanced caching, parallel processing, and intelligent data routing for maximum throughput.",
    excerpt: "Optimize your AI data pipelines for maximum performance with advanced caching and parallel processing strategies.",
    category: "Data Engineering",
    tags: ["Data Pipelines", "Performance Optimization", "Data Processing", "Caching", "Parallel Processing"],
    featured: false,
    newBadge: true,
    trending: false,
    pricing: {
      startingPrice: "$1,100",
      currency: "USD",
      billingPeriod: "per month"
    },
    benefits: [
      "10x pipeline performance",
      "1TB/hour data throughput",
      "Intelligent caching system",
      "Parallel processing optimization",
      "Real-time monitoring",
      "Cost-effective scaling"
    ],
    technologies: ["Data Pipelines", "Performance Optimization", "Caching", "Parallel Processing", "Monitoring"],
    metrics: [
      {
        label: "Processing Speed",
        value: "10x",
        description: "Performance improvement"
      },
      {
        label: "Data Throughput",
        value: "1TB/hour",
        description: "High-volume processing"
      },
      {
        label: "Cost Efficiency",
        value: "70%",
        description: "Processing cost reduction"
      },
      {
        label: "Reliability",
        value: "99.9%",
        description: "Pipeline uptime"
      }
    ],
    url: "/services/ai-data-pipeline-optimizer",
    image: "/images/ai-data-pipeline-optimizer.jpg",
    publishedDate: "2026-01-19",
    author: "Zion Tech Group"
  },
  {
    id: "enterprise-ai-model-governance",
    title: "Enterprise AI Model Governance",
    description: "Comprehensive AI model governance platform for enterprise model lifecycle management, version control, and compliance monitoring.",
    excerpt: "Enterprise-grade AI model governance solution that ensures model quality, compliance, and lifecycle management across your organization.",
    category: "AI Governance",
    tags: ["Model Governance", "MLOps", "Model Lifecycle", "Version Control", "Compliance"],
    featured: false,
    newBadge: true,
    trending: false,
    pricing: {
      startingPrice: "$1,400",
      currency: "USD",
      billingPeriod: "per month"
    },
    benefits: [
      "95% model quality improvement",
      "100% compliance monitoring",
      "5x faster deployment",
      "Automated version control",
      "Risk assessment tools",
      "Enterprise-grade security"
    ],
    technologies: ["Model Governance", "MLOps", "Version Control", "Compliance", "Security"],
    metrics: [
      {
        label: "Model Quality",
        value: "95%",
        description: "Quality improvement"
      },
      {
        label: "Compliance Rate",
        value: "100%",
        description: "Regulatory compliance"
      },
      {
        label: "Deployment Speed",
        value: "5x",
        description: "Faster deployment"
      },
      {
        label: "Risk Reduction",
        value: "80%",
        description: "Model-related risks"
      }
    ],
    url: "/services/enterprise-ai-model-governance",
    image: "/images/enterprise-ai-model-governance.jpg",
    publishedDate: "2026-01-18",
    author: "Zion Tech Group"
  },
  {
    id: "quantum-ai-hybrid-computing",
    title: "Quantum-AI Hybrid Computing",
    description: "Revolutionary quantum-AI hybrid computing platform that combines quantum computing power with AI algorithms for unprecedented problem-solving capabilities.",
    excerpt: "Breakthrough quantum-AI hybrid computing that delivers 1000x faster optimization and revolutionary capabilities in machine learning.",
    category: "Quantum Computing",
    tags: ["Quantum Computing", "AI", "Machine Learning", "Optimization", "Hybrid Computing"],
    featured: false,
    newBadge: true,
    trending: true,
    pricing: {
      startingPrice: "$5,000",
      currency: "USD",
      billingPeriod: "per month"
    },
    benefits: [
      "1000x faster optimization",
      "Quantum-enhanced AI algorithms",
      "Exponential problem-solving power",
      "Real-time quantum processing",
      "Advanced machine learning",
      "Research-grade capabilities"
    ],
    technologies: ["Quantum Computing", "AI", "Machine Learning", "Optimization", "Quantum Algorithms"],
    metrics: [
      {
        label: "Speed Improvement",
        value: "1000x",
        description: "Faster than classical"
      },
      {
        label: "Problem Complexity",
        value: "Exponential",
        description: "Handle NP-hard problems"
      },
      {
        label: "Accuracy Gain",
        value: "40%",
        description: "Better optimization"
      },
      {
        label: "Energy Efficiency",
        value: "90%",
        description: "Reduced energy usage"
      }
    ],
    url: "/services/quantum-ai-hybrid-computing",
    image: "/images/quantum-ai-hybrid-computing.jpg",
    publishedDate: "2026-01-17",
    author: "Zion Tech Group"
  }
];

export const featuredServices2026 = newServices2026.filter(service => service.featured);
export const trendingServices2026 = newServices2026.filter(service => service.trending);
export const latestServices2026 = newServices2026
  .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
  .slice(0, 6);
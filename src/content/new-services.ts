export type NewService = {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  pricing: {
    starting: string;
    popular?: boolean;
    discount?: string;
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
  newBadge?: boolean;
  featured?: boolean;
};

export const newServices: NewService[] = [
  {
    id: "ai-autonomous-operations",
    title: "AI Autonomous Operations",
    description: "Revolutionary AI system that manages your entire infrastructure autonomously - self-healing, self-optimizing, and self-scaling with zero human intervention required.",
    icon: "🤖",
    category: "AI Operations",
    pricing: {
      starting: "$299/mo",
      popular: true,
      discount: "50% OFF First 3 Months"
    },
    features: [
      "Self-Healing Infrastructure",
      "Autonomous Scaling",
      "Predictive Maintenance",
      "Real-time Optimization",
      "Zero-Downtime Deployments",
      "Intelligent Resource Management"
    ],
    benefits: [
      "Reduce operational costs by 80%",
      "Eliminate manual interventions",
      "Achieve 99.99% uptime",
      "Scale automatically with demand",
      "Prevent issues before they occur"
    ],
    technologies: ["AI/ML", "Kubernetes", "Terraform", "Prometheus", "Grafana", "Python"],
    useCases: [
      "Infrastructure Management",
      "Auto-scaling Applications",
      "Predictive Maintenance",
      "Resource Optimization",
      "Disaster Recovery"
    ],
    cta: {
      primary: "Start Free Trial",
      secondary: "View Demo"
    },
    metrics: [
      {
        label: "Cost Reduction",
        value: "80%",
        description: "Average operational savings"
      },
      {
        label: "Uptime Improvement",
        value: "99.99%",
        description: "Achieved with autonomous ops"
      },
      {
        label: "Response Time",
        value: "< 30 seconds",
        description: "Issue detection and resolution"
      }
    ],
    testimonial: {
      quote: "AI Autonomous Operations transformed our infrastructure management. We went from constant firefighting to zero-touch operations with 99.99% uptime.",
      author: "Jennifer Martinez",
      company: "CloudScale Technologies"
    },
    newBadge: true,
    featured: true
  },
  {
    id: "quantum-optimization-engine",
    title: "Quantum Optimization Engine",
    description: "Leverage quantum computing power to solve complex optimization problems in logistics, finance, and resource allocation with unprecedented speed and accuracy.",
    icon: "⚛️",
    category: "Quantum Computing",
    pricing: {
      starting: "$999/mo",
      popular: false
    },
    features: [
      "Quantum Algorithm Implementation",
      "Hybrid Classical-Quantum Processing",
      "Real-time Optimization",
      "Multi-objective Optimization",
      "Quantum Machine Learning",
      "Cloud Quantum Access"
    ],
    benefits: [
      "Solve problems 1000x faster",
      "Handle exponentially complex scenarios",
      "Achieve optimal solutions",
      "Reduce computational costs",
      "Future-proof your operations"
    ],
    technologies: ["Qiskit", "Cirq", "Quantum Hardware", "Python", "Cloud Quantum", "TensorFlow Quantum"],
    useCases: [
      "Portfolio Optimization",
      "Supply Chain Optimization",
      "Route Planning",
      "Resource Allocation",
      "Drug Discovery"
    ],
    cta: {
      primary: "Request Demo",
      secondary: "Learn More"
    },
    metrics: [
      {
        label: "Speed Improvement",
        value: "1000x",
        description: "Faster than classical algorithms"
      },
      {
        label: "Problem Complexity",
        value: "Exponential",
        description: "Handle NP-hard problems"
      },
      {
        label: "Solution Quality",
        value: "99.9%",
        description: "Optimal solution accuracy"
      }
    ],
    newBadge: true,
    featured: true
  },
  {
    id: "ai-cybersecurity-suite",
    title: "AI Cybersecurity Suite",
    description: "Advanced AI-powered security platform that provides real-time threat detection, automated incident response, and zero-trust architecture implementation.",
    icon: "🛡️",
    category: "Cybersecurity",
    pricing: {
      starting: "$199/mo",
      popular: false
    },
    features: [
      "AI Threat Detection",
      "Automated Incident Response",
      "Zero-Trust Implementation",
      "Behavioral Analytics",
      "Threat Intelligence",
      "Compliance Automation"
    ],
    benefits: [
      "Detect threats in real-time",
      "Reduce response time by 95%",
      "Achieve 99.9% threat detection",
      "Automate security workflows",
      "Ensure compliance standards"
    ],
    technologies: ["Machine Learning", "SIEM", "SOAR", "Zero Trust", "Blockchain", "AI/ML"],
    useCases: [
      "Threat Detection",
      "Incident Response",
      "Compliance Monitoring",
      "Security Analytics",
      "Risk Assessment"
    ],
    cta: {
      primary: "Get Security Assessment",
      secondary: "View Demo"
    },
    metrics: [
      {
        label: "Threat Detection",
        value: "99.9%",
        description: "Detection accuracy rate"
      },
      {
        label: "Response Time",
        value: "< 1 minute",
        description: "Automated incident response"
      },
      {
        label: "False Positives",
        value: "0.1%",
        description: "Minimal false positive rate"
      }
    ],
    newBadge: true,
    featured: true
  },
  {
    id: "edge-ai-platform",
    title: "Edge AI Platform",
    description: "Deploy AI models at the edge for real-time processing, reduced latency, and enhanced privacy. Perfect for IoT, autonomous vehicles, and smart cities.",
    icon: "🌐",
    category: "Edge Computing",
    pricing: {
      starting: "$149/mo",
      popular: false
    },
    features: [
      "Edge Model Deployment",
      "Real-time Inference",
      "Federated Learning",
      "Edge-to-Cloud Sync",
      "Low-latency Processing",
      "Offline Capabilities"
    ],
    benefits: [
      "Reduce latency to < 10ms",
      "Process data locally",
      "Enhance privacy and security",
      "Reduce bandwidth costs",
      "Enable offline AI"
    ],
    technologies: ["TensorFlow Lite", "ONNX", "Edge TPU", "NVIDIA Jetson", "Raspberry Pi", "Edge Computing"],
    useCases: [
      "Autonomous Vehicles",
      "Industrial IoT",
      "Smart Cities",
      "Retail Analytics",
      "Healthcare Monitoring"
    ],
    cta: {
      primary: "Start Edge Deployment",
      secondary: "View Use Cases"
    },
    metrics: [
      {
        label: "Latency Reduction",
        value: "95%",
        description: "Sub-10ms response times"
      },
      {
        label: "Bandwidth Savings",
        value: "80%",
        description: "Reduced data transmission"
      },
      {
        label: "Privacy Enhancement",
        value: "100%",
        description: "Local data processing"
      }
    ],
    newBadge: true,
    featured: false
  },
  {
    id: "ai-content-generation",
    title: "AI Content Generation Platform",
    description: "Generate high-quality, SEO-optimized content at scale using advanced AI. Perfect for marketing teams, content creators, and digital agencies.",
    icon: "✍️",
    category: "Content AI",
    pricing: {
      starting: "$79/mo",
      popular: true,
      discount: "30% OFF First Month"
    },
    features: [
      "Multi-format Content Creation",
      "SEO Optimization",
      "Brand Voice Consistency",
      "Content Planning",
      "Multi-language Support",
      "Plagiarism Detection"
    ],
    benefits: [
      "Generate content 10x faster",
      "Maintain brand consistency",
      "Improve SEO rankings",
      "Reduce content costs by 70%",
      "Scale content production"
    ],
    technologies: ["GPT-4", "BERT", "Natural Language Processing", "SEO Tools", "Content Management", "AI/ML"],
    useCases: [
      "Blog Writing",
      "Social Media Content",
      "Product Descriptions",
      "Email Marketing",
      "Technical Documentation"
    ],
    cta: {
      primary: "Start Writing",
      secondary: "View Samples"
    },
    metrics: [
      {
        label: "Content Speed",
        value: "10x",
        description: "Faster than manual writing"
      },
      {
        label: "Cost Reduction",
        value: "70%",
        description: "Lower content production costs"
      },
      {
        label: "SEO Improvement",
        value: "85%",
        description: "Better search rankings"
      }
    ],
    testimonial: {
      quote: "The AI Content Generation Platform revolutionized our marketing efforts. We now produce 10x more content while maintaining quality and brand voice.",
      author: "David Kim",
      company: "Digital Marketing Pro"
    },
    newBadge: true,
    featured: true
  },
  {
    id: "ai-customer-insights",
    title: "AI Customer Insights Engine",
    description: "Transform customer data into actionable insights with advanced AI analytics. Understand customer behavior, predict churn, and optimize experiences.",
    icon: "📊",
    category: "Customer Analytics",
    pricing: {
      starting: "$129/mo",
      popular: false
    },
    features: [
      "Customer Segmentation",
      "Churn Prediction",
      "Behavioral Analytics",
      "Sentiment Analysis",
      "Recommendation Engine",
      "Real-time Dashboards"
    ],
    benefits: [
      "Increase retention by 40%",
      "Predict customer churn",
      "Personalize experiences",
      "Improve customer satisfaction",
      "Optimize marketing campaigns"
    ],
    technologies: ["Machine Learning", "Python", "TensorFlow", "Apache Spark", "BigQuery", "Tableau"],
    useCases: [
      "Customer Segmentation",
      "Churn Prevention",
      "Personalization",
      "Marketing Optimization",
      "Product Recommendations"
    ],
    cta: {
      primary: "Get Insights Demo",
      secondary: "View Case Studies"
    },
    metrics: [
      {
        label: "Retention Improvement",
        value: "40%",
        description: "Increase in customer retention"
      },
      {
        label: "Churn Prediction",
        value: "95%",
        description: "Accuracy in churn prediction"
      },
      {
        label: "Revenue Impact",
        value: "25%",
        description: "Increase in customer lifetime value"
      }
    ],
    newBadge: true,
    featured: false
  }
  ,
  {
    id: "genai-evals-ci-service",
    title: "GenAI Evals CI Service",
    description: "Run policy and quality tests for LLM features on every PR with dashboards and budget guardrails.",
    icon: "✅",
    category: "AI Quality",
    pricing: {
      starting: "$199/mo",
      popular: true,
      discount: "20% Launch Promo"
    },
    features: [
      "CI Policy Tests",
      "Online Canaries",
      "Guardrail Libraries",
      "Eval Dashboards",
      "Budgeted Routing",
      "Slack/Webhook Alerts"
    ],
    benefits: [
      "Ship GenAI changes weekly",
      "Prevent regressions automatically",
      "Make risk reviews measurable",
      "Increase developer confidence"
    ],
    technologies: ["TypeScript", "Python", "OpenAI", "Weights & Biases", "Grafana"],
    useCases: [
      "PR quality gates",
      "Release canaries",
      "Policy compliance checks"
    ],
    cta: {
      primary: "Enable in CI",
      secondary: "View Demo"
    },
    metrics: [
      { label: "Regression Reduction", value: "70%", description: "Fewer incidents post‑release" },
      { label: "Time Saved", value: "12h/week", description: "Per team on manual reviews" },
      { label: "Coverage", value: "90%", description: "Of critical LLM paths" }
    ],
    testimonial: {
      quote: "We ship LLM features every week now. The CI evals caught three issues before users did.",
      author: "Leah Patel",
      company: "Acme SaaS"
    },
    newBadge: true,
    featured: true
  }
];
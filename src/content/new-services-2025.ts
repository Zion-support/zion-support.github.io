export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  technologies: string[];
  pricing: {
    tier: string;
    price: string;
    features: string[];
  }[];
  testimonial?: {
    quote: string;
    author: string;
    company: string;
    role: string;
  };
  metrics?: {
    label: string;
    value: string;
    description: string;
  }[];
  image?: string;
  icon?: string;
}

export const newServices2025: Service[] = [
  {
    id: "ai-autonomous-infrastructure",
    title: "AI Autonomous Infrastructure Management",
    description: "Transform your infrastructure with self-healing, self-optimizing systems that automatically adapt to changing conditions and requirements.",
    category: "AI Operations",
    features: [
      "Self-healing infrastructure with automatic failure recovery",
      "Predictive maintenance and proactive issue resolution",
      "Dynamic resource scaling based on demand patterns",
      "Intelligent cost optimization and resource allocation",
      "Real-time performance monitoring and optimization",
      "Automated security updates and vulnerability patching"
    ],
    benefits: [
      "99.99% uptime through predictive maintenance",
      "65% reduction in operational costs",
      "90% elimination of manual interventions",
      "45% improvement in system performance",
      "24/7 autonomous monitoring and response",
      "Faster incident resolution and recovery"
    ],
    useCases: [
      "Enterprise cloud infrastructure management",
      "Microservices orchestration and scaling",
      "Database performance optimization",
      "Application deployment and monitoring",
      "Network infrastructure automation",
      "DevOps pipeline optimization"
    ],
    technologies: ["AI/ML", "Kubernetes", "Prometheus", "Grafana", "Python", "TensorFlow", "Docker"],
    pricing: [
      {
        tier: "Starter",
        price: "$5,000/month",
        features: ["Basic autonomous monitoring", "Standard self-healing", "Email alerts", "Basic reporting"]
      },
      {
        tier: "Professional",
        price: "$15,000/month",
        features: ["Advanced predictive analytics", "Full self-healing capabilities", "Real-time dashboards", "Priority support"]
      },
      {
        tier: "Enterprise",
        price: "Custom",
        features: ["Custom AI models", "Dedicated support team", "Advanced security features", "SLA guarantees"]
      }
    ],
    testimonial: {
      quote: "AI Autonomous Infrastructure transformed our operations completely. We went from constant firefighting to zero-touch operations.",
      author: "Michael Rodriguez",
      company: "CloudScale Enterprises",
      role: "CTO"
    },
    metrics: [
      {
        label: "Uptime Improvement",
        value: "99.99%",
        description: "Achieved through predictive maintenance"
      },
      {
        label: "Cost Reduction",
        value: "65%",
        description: "Average operational savings"
      },
      {
        label: "Manual Work Reduction",
        value: "90%",
        description: "Elimination of manual interventions"
      }
    ],
    image: "/images/services/ai-autonomous-infrastructure.jpg",
    icon: "🤖"
  },
  {
    id: "edge-ai-computing",
    title: "Edge AI Computing Solutions",
    description: "Deploy intelligent AI models at the edge for ultra-low latency processing, real-time decision making, and offline capabilities.",
    category: "Edge Computing",
    features: [
      "Ultra-low latency AI inference at the edge",
      "Real-time data processing and decision making",
      "Offline AI capabilities for critical operations",
      "Optimized models for edge device constraints",
      "Distributed AI model management and updates",
      "Edge-to-cloud data synchronization"
    ],
    benefits: [
      "Sub-millisecond response times",
      "Reduced bandwidth and cloud costs",
      "Enhanced data privacy and security",
      "Improved reliability with offline capabilities",
      "Real-time processing for critical applications",
      "Scalable edge deployment across locations"
    ],
    useCases: [
      "Manufacturing quality control and predictive maintenance",
      "Autonomous vehicle perception and decision making",
      "Smart city traffic optimization",
      "Healthcare real-time patient monitoring",
      "Retail personalized customer experiences",
      "Industrial IoT sensor data processing"
    ],
    technologies: ["TensorFlow Lite", "OpenVINO", "Edge Computing", "IoT", "5G", "Computer Vision", "Embedded Systems"],
    pricing: [
      {
        tier: "Development",
        price: "$2,500/month",
        features: ["Edge model development", "Basic deployment tools", "Testing environments", "Documentation"]
      },
      {
        tier: "Production",
        price: "$7,500/month",
        features: ["Production deployment", "Advanced monitoring", "Model optimization", "24/7 support"]
      },
      {
        tier: "Enterprise",
        price: "Custom",
        features: ["Custom hardware integration", "Dedicated edge infrastructure", "Advanced security", "SLA guarantees"]
      }
    ],
    testimonial: {
      quote: "Edge AI enabled us to process data in real-time at our manufacturing plants, reducing defects by 95% and improving efficiency dramatically.",
      author: "Jennifer Liu",
      company: "Precision Manufacturing Corp",
      role: "VP of Operations"
    },
    metrics: [
      {
        label: "Latency Reduction",
        value: "99%",
        description: "Compared to cloud processing"
      },
      {
        label: "Bandwidth Savings",
        value: "80%",
        description: "Reduced data transmission"
      },
      {
        label: "Processing Speed",
        value: "< 1ms",
        description: "Average inference time"
      }
    ],
    image: "/images/services/edge-ai-computing.jpg",
    icon: "⚡"
  },
  {
    id: "quantum-ai-optimization",
    title: "Quantum AI Optimization Services",
    description: "Leverage quantum computing power combined with AI to solve complex optimization problems that are intractable for classical computers.",
    category: "Quantum Computing",
    features: [
      "Quantum machine learning algorithms",
      "Complex optimization problem solving",
      "Quantum neural network implementations",
      "Hybrid classical-quantum workflows",
      "Quantum simulation and modeling",
      "Quantum-resistant security protocols"
    ],
    benefits: [
      "Exponential speedup for specific problems",
      "Solving NP-hard optimization challenges",
      "Enhanced machine learning capabilities",
      "Future-proof quantum-resistant security",
      "Breakthrough insights in complex domains",
      "Competitive advantage through quantum advantage"
    ],
    useCases: [
      "Financial portfolio optimization and risk analysis",
      "Drug discovery and molecular simulation",
      "Supply chain and logistics optimization",
      "Climate modeling and environmental analysis",
      "Materials science and discovery",
      "Cryptography and cybersecurity"
    ],
    technologies: ["IBM Qiskit", "Google Cirq", "Microsoft Q#", "Quantum Algorithms", "Python", "Quantum Hardware"],
    pricing: [
      {
        tier: "Research",
        price: "$10,000/month",
        features: ["Quantum algorithm development", "Simulation environments", "Research collaboration", "Basic quantum access"]
      },
      {
        tier: "Development",
        price: "$25,000/month",
        features: ["Quantum hardware access", "Advanced algorithms", "Hybrid workflows", "Technical support"]
      },
      {
        tier: "Enterprise",
        price: "Custom",
        features: ["Dedicated quantum resources", "Custom algorithm development", "Full integration support", "Quantum expertise team"]
      }
    ],
    testimonial: {
      quote: "Quantum AI optimization helped us solve portfolio optimization problems that were impossible with classical computing, delivering 18% better returns.",
      author: "David Kim",
      company: "Quantum Capital Management",
      role: "Chief Investment Officer"
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
        label: "Optimization Gain",
        value: "40%",
        description: "Better solution quality"
      }
    ],
    image: "/images/services/quantum-ai-optimization.jpg",
    icon: "🔬"
  },
  {
    id: "ai-sustainability-solutions",
    title: "AI for Sustainability and Climate Solutions",
    description: "Harness the power of AI to address climate change, optimize resource usage, and create sustainable solutions for a better future.",
    category: "Sustainability",
    features: [
      "Carbon footprint tracking and optimization",
      "Renewable energy system optimization",
      "Environmental monitoring and prediction",
      "Sustainable supply chain management",
      "Climate risk assessment and mitigation",
      "Green AI model development and deployment"
    ],
    benefits: [
      "Significant reduction in carbon emissions",
      "Optimized resource utilization",
      "Enhanced environmental monitoring",
      "Improved sustainability reporting",
      "Cost savings through efficiency gains",
      "Compliance with environmental regulations"
    ],
    useCases: [
      "Smart city energy management",
      "Manufacturing process optimization",
      "Agriculture precision farming",
      "Transportation route optimization",
      "Building energy efficiency",
      "Waste management optimization"
    ],
    technologies: ["Environmental AI", "IoT Sensors", "Satellite Data", "Climate Modeling", "Energy Analytics", "Sustainability Metrics"],
    pricing: [
      {
        tier: "Assessment",
        price: "$3,000/month",
        features: ["Carbon footprint analysis", "Sustainability audit", "Baseline measurement", "Improvement recommendations"]
      },
      {
        tier: "Optimization",
        price: "$8,000/month",
        features: ["AI-powered optimization", "Real-time monitoring", "Automated reporting", "Implementation support"]
      },
      {
        tier: "Transformation",
        price: "Custom",
        features: ["Full sustainability transformation", "Custom AI solutions", "Dedicated support team", "Long-term partnership"]
      }
    ],
    testimonial: {
      quote: "AI sustainability solutions helped us reduce our carbon footprint by 40% while improving operational efficiency and saving $2M annually.",
      author: "Sarah Chen",
      company: "GreenTech Industries",
      role: "Sustainability Director"
    },
    metrics: [
      {
        label: "Carbon Reduction",
        value: "40%",
        description: "Average emission reduction"
      },
      {
        label: "Energy Savings",
        value: "25%",
        description: "Improved energy efficiency"
      },
      {
        label: "Cost Savings",
        value: "$2M",
        description: "Annual operational savings"
      }
    ],
    image: "/images/services/ai-sustainability.jpg",
    icon: "🌱"
  },
  {
    id: "ai-ethics-governance",
    title: "AI Ethics and Governance Framework",
    description: "Implement comprehensive AI ethics and governance frameworks to ensure responsible AI development, deployment, and ongoing management.",
    category: "AI Governance",
    features: [
      "AI ethics policy development and implementation",
      "Bias detection and mitigation systems",
      "AI transparency and explainability tools",
      "Compliance monitoring and reporting",
      "AI risk assessment and management",
      "Responsible AI training and certification"
    ],
    benefits: [
      "Reduced AI-related risks and incidents",
      "Enhanced stakeholder trust and confidence",
      "Regulatory compliance and audit readiness",
      "Improved AI system fairness and transparency",
      "Better decision-making through explainable AI",
      "Competitive advantage through ethical AI leadership"
    ],
    useCases: [
      "Financial services AI compliance",
      "Healthcare AI ethics and safety",
      "Automated decision-making systems",
      "AI-powered hiring and HR systems",
      "Government AI policy implementation",
      "Enterprise AI governance and oversight"
    ],
    technologies: ["AI Ethics Tools", "Bias Detection", "Explainable AI", "Compliance Monitoring", "Risk Assessment", "Governance Platforms"],
    pricing: [
      {
        tier: "Foundation",
        price: "$4,000/month",
        features: ["Ethics policy development", "Basic bias detection", "Compliance framework", "Training materials"]
      },
      {
        tier: "Advanced",
        price: "$12,000/month",
        features: ["Advanced monitoring tools", "Automated compliance", "Risk assessment", "Expert consultation"]
      },
      {
        tier: "Enterprise",
        price: "Custom",
        features: ["Custom governance framework", "Dedicated ethics team", "Full audit support", "Ongoing monitoring"]
      }
    ],
    testimonial: {
      quote: "The AI ethics framework gave us confidence in our AI systems and helped us achieve 100% compliance with all regulations while building trust with our customers.",
      author: "Robert Martinez",
      company: "SecureBank International",
      role: "Chief Risk Officer"
    },
    metrics: [
      {
        label: "Compliance Rate",
        value: "100%",
        description: "Regulatory compliance achieved"
      },
      {
        label: "Risk Reduction",
        value: "80%",
        description: "AI-related risk mitigation"
      },
      {
        label: "Trust Score",
        value: "95%",
        description: "Stakeholder confidence rating"
      }
    ],
    image: "/images/services/ai-ethics-governance.jpg",
    icon: "⚖️"
  }
];

export const featuredNewServices = newServices2025.filter(service => 
  ["ai-autonomous-infrastructure", "edge-ai-computing", "quantum-ai-optimization"].includes(service.id)
);

export const trendingNewServices = newServices2025.filter(service => 
  ["ai-sustainability-solutions", "ai-ethics-governance"].includes(service.id)
);
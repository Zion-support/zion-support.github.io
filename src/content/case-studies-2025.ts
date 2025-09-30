export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  technologies: string[];
  featured: boolean;
  publishedAt: string;
  readTime: string;
}

export const caseStudies2025: CaseStudy[] = [
  {
    id: "global-finance-ai-transformation",
    slug: "global-finance-ai-transformation",
    title: "Global Finance Corp: AI-Powered Trading Platform Transformation",
    client: "Global Finance Corp",
    industry: "Financial Services",
    description: "How we helped a Fortune 100 financial services company transform their trading infrastructure with AI, achieving sub-millisecond latency and $500M+ in annual savings.",
    challenge: "Legacy trading systems causing 2-second latency, missing profitable trades, and costing $500M+ annually in opportunity losses. Required 24/7 uptime with zero data loss.",
    solution: "Deployed AI-powered real-time decision system with quantum-ML hybrid optimization, neuromorphic edge processors, and autonomous incident response. Built custom low-latency AI models achieving sub-1ms inference.",
    results: [
      {
        metric: "Latency Reduction",
        value: "99.95%",
        description: "From 2000ms to 1ms average trade execution"
      },
      {
        metric: "Annual Savings",
        value: "$524M",
        description: "Captured opportunities missed by legacy system"
      },
      {
        metric: "Uptime",
        value: "99.999%",
        description: "Zero unplanned downtime in 18 months"
      },
      {
        metric: "AI Accuracy",
        value: "99.7%",
        description: "Trade prediction accuracy vs 67% baseline"
      }
    ],
    technologies: ["AI Real-Time Decision Systems", "Quantum-ML Hybrid", "Neuromorphic Computing", "Edge AI", "Autonomous Incident Response"],
    featured: true,
    publishedAt: "2025-09-30",
    readTime: "18 min read"
  },
  {
    id: "healthcare-ai-drug-discovery",
    slug: "healthcare-ai-drug-discovery",
    title: "PharmaInnovate: AI-Accelerated Drug Discovery Revolution",
    client: "PharmaInnovate",
    industry: "Pharmaceutical",
    description: "Revolutionized drug discovery pipeline with AI, reducing time-to-market from 8 years to 10 months while cutting costs by 85%.",
    challenge: "Traditional drug discovery taking 8-12 years and costing $2.8B per approved drug. 90% of candidates failing in clinical trials.",
    solution: "Implemented AI drug discovery acceleration platform using machine learning to predict molecule efficacy, toxicity, and interactions before synthesis. Deployed federated learning across research centers.",
    results: [
      {
        metric: "Time Reduction",
        value: "90%",
        description: "From 8 years to 10 months for candidate identification"
      },
      {
        metric: "Cost Savings",
        value: "85%",
        description: "$400M saved per successful drug development"
      },
      {
        metric: "Success Rate",
        value: "3.2x",
        description: "Clinical trial success rate increased from 10% to 32%"
      },
      {
        metric: "Molecule Accuracy",
        value: "97%",
        description: "AI prediction accuracy for molecule efficacy"
      }
    ],
    technologies: ["AI Drug Discovery", "Federated Learning", "Cognitive AI Assistants", "Multimodal AI"],
    featured: true,
    publishedAt: "2025-09-30",
    readTime: "16 min read"
  },
  {
    id: "manufacturing-autonomous-robotics",
    slug: "manufacturing-autonomous-robotics",
    title: "MegaManufacturing: Swarm Robotics Transform Production",
    client: "MegaManufacturing Inc",
    industry: "Manufacturing",
    description: "Deployed swarm intelligence robotics achieving 1000x efficiency improvement and 75% cost reduction in production operations.",
    challenge: "Manual production lines with 45% efficiency, high error rates (12%), and inability to adapt to demand fluctuations. $200M annual waste.",
    solution: "Implemented swarm intelligence robotics coordinating 5,000+ autonomous robots with neuromorphic edge AI. Built self-optimizing production system with predictive maintenance.",
    results: [
      {
        metric: "Efficiency Gain",
        value: "1000x",
        description: "Production throughput vs individual robot systems"
      },
      {
        metric: "Cost Reduction",
        value: "75%",
        description: "$150M annual savings in production costs"
      },
      {
        metric: "Error Rate",
        value: "99.8%",
        description: "Error rate reduced from 12% to 0.2%"
      },
      {
        metric: "Downtime",
        value: "98%",
        description: "Unplanned downtime reduction"
      }
    ],
    technologies: ["Swarm Intelligence", "Neuromorphic Edge AI", "Predictive Maintenance", "Real-Time AI"],
    featured: true,
    publishedAt: "2025-09-30",
    readTime: "15 min read"
  },
  {
    id: "retail-ai-supply-chain",
    slug: "retail-ai-supply-chain",
    title: "RetailGiant: AI Supply Chain Optimization at Scale",
    client: "RetailGiant Corporation",
    industry: "Retail",
    description: "Transformed end-to-end supply chain with AI achieving 99.9% on-time delivery and 40% cost reduction across 50,000+ locations.",
    challenge: "Complex global supply chain with 73% on-time delivery, $800M annual waste, and inability to predict demand accurately.",
    solution: "Deployed AI supply chain optimization platform with autonomous logistics, predictive demand forecasting, and real-time route optimization across entire network.",
    results: [
      {
        metric: "On-Time Delivery",
        value: "99.9%",
        description: "Improved from 73% to 99.9% delivery accuracy"
      },
      {
        metric: "Cost Reduction",
        value: "40%",
        description: "$320M annual savings in logistics and inventory"
      },
      {
        metric: "Demand Accuracy",
        value: "96%",
        description: "AI demand prediction vs 62% baseline"
      },
      {
        metric: "Waste Reduction",
        value: "68%",
        description: "Inventory waste and obsolescence reduction"
      }
    ],
    technologies: ["AI Supply Chain", "Autonomous Logistics", "Predictive Analytics", "Real-Time Optimization"],
    featured: true,
    publishedAt: "2025-09-30",
    readTime: "14 min read"
  },
  {
    id: "legal-ai-contract-intelligence",
    slug: "legal-ai-contract-intelligence",
    title: "Global Law Partners: AI Contract Intelligence Revolution",
    client: "Global Law Partners LLP",
    industry: "Legal Services",
    description: "Revolutionized legal operations with AI contract intelligence achieving 99.8% accuracy and 95% faster contract review.",
    challenge: "Manual contract review taking 40+ hours per contract, 15% error rate, and inability to scale with growing client base.",
    solution: "Implemented AI contract intelligence platform analyzing contracts in seconds with human-level accuracy. Deployed cognitive AI assistants for legal research.",
    results: [
      {
        metric: "Speed Improvement",
        value: "95%",
        description: "From 40 hours to 2 hours per contract review"
      },
      {
        metric: "Accuracy",
        value: "99.8%",
        description: "Contract analysis accuracy vs 85% human baseline"
      },
      {
        metric: "Capacity Increase",
        value: "20x",
        description: "Contract volume handled with same team"
      },
      {
        metric: "Risk Detection",
        value: "3.5x",
        description: "More risks identified than human review"
      }
    ],
    technologies: ["AI Contract Intelligence", "Cognitive AI Assistants", "Natural Language Processing", "Legal Tech AI"],
    featured: true,
    publishedAt: "2025-09-30",
    readTime: "12 min read"
  },
  {
    id: "saas-ai-autonomous-code",
    slug: "saas-ai-autonomous-code",
    title: "CloudSaaS Inc: AI Autonomous Code Refactoring Success",
    client: "CloudSaaS Inc",
    industry: "SaaS Technology",
    description: "Transformed 15-year legacy codebase with AI autonomous refactoring achieving 99.5% accuracy and 80% technical debt reduction.",
    challenge: "Massive technical debt in 5M+ line codebase, developer productivity down 60%, and inability to ship features fast enough.",
    solution: "Deployed AI autonomous code refactoring platform that continuously modernizes, optimizes, and refactors code with minimal human intervention.",
    results: [
      {
        metric: "Technical Debt",
        value: "80%",
        description: "Technical debt reduced in 6 months"
      },
      {
        metric: "Developer Velocity",
        value: "3x",
        description: "Feature shipping speed increased"
      },
      {
        metric: "Code Quality",
        value: "99.5%",
        description: "Refactoring accuracy with zero production bugs"
      },
      {
        metric: "Maintenance Cost",
        value: "65%",
        description: "Reduction in codebase maintenance costs"
      }
    ],
    technologies: ["AI Autonomous Code Refactoring", "Machine Learning", "Static Analysis", "Continuous Integration"],
    featured: true,
    publishedAt: "2025-09-30",
    readTime: "13 min read"
  }
];

export const featuredCaseStudies = caseStudies2025.filter(cs => cs.featured);
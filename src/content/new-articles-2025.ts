export interface NewArticle {
  id: string;
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  featured: boolean;
  readTime: string;
  image?: string;
  newBadge?: boolean;
  trending?: boolean;
  featuredInHomepage?: boolean;
}

export const newArticles2025: NewArticle[] = [
  {
    id: "ai-autonomous-infrastructure-2025",
    slug: "ai-autonomous-infrastructure-2025",
    title: "AI Autonomous Infrastructure: The Future of Self-Managing Systems",
    description: "Discover how AI-powered autonomous infrastructure is revolutionizing enterprise operations with self-healing, self-optimizing, and self-scaling capabilities.",
    excerpt: "Transform your infrastructure management with AI that never sleeps, never makes mistakes, and continuously optimizes performance.",
    author: "Zion Tech Group Team",
    date: "2025-01-30",
    category: "AI Operations",
    tags: ["Autonomous Infrastructure", "AI", "Self-Healing", "Automation"],
    featured: true,
    readTime: "12 min read",
    image: "/images/ai-autonomous-infrastructure.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  },
  {
    id: "quantum-ai-hybrid-computing-2025",
    slug: "quantum-ai-hybrid-computing-2025",
    title: "Quantum-AI Hybrid Computing: Breaking Computational Barriers",
    description: "Explore the revolutionary combination of quantum computing and artificial intelligence, delivering unprecedented processing power for complex business problems.",
    excerpt: "Unlock exponential computational power with quantum-AI hybrid systems that solve problems impossible for traditional computers.",
    author: "Zion Tech Group Team",
    date: "2025-01-29",
    category: "Quantum Computing",
    tags: ["Quantum Computing", "AI", "Hybrid Systems", "Computational Power"],
    featured: true,
    readTime: "15 min read",
    image: "/images/quantum-ai-hybrid.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  },
  {
    id: "ai-cybersecurity-next-generation-2025",
    slug: "ai-cybersecurity-next-generation-2025",
    title: "Next-Generation AI Cybersecurity: Zero-Trust with Intelligence",
    description: "Learn how advanced AI cybersecurity systems are creating impenetrable digital fortresses with zero-trust architecture and behavioral analytics.",
    excerpt: "Build an unbreachable security perimeter with AI that learns, adapts, and evolves to counter emerging threats in real-time.",
    author: "Zion Tech Group Team",
    date: "2025-01-28",
    category: "Cybersecurity",
    tags: ["AI Security", "Zero Trust", "Behavioral Analytics", "Threat Detection"],
    featured: true,
    readTime: "10 min read",
    image: "/images/ai-cybersecurity-next-gen.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  },
  {
    id: "edge-ai-real-time-intelligence-2025",
    slug: "edge-ai-real-time-intelligence-2025",
    title: "Edge AI: Real-Time Intelligence at the Network Edge",
    description: "Discover how Edge AI is bringing real-time intelligence to IoT devices, autonomous vehicles, and smart cities with sub-millisecond response times.",
    excerpt: "Experience the power of AI processing at the edge, delivering instant decisions without cloud dependency.",
    author: "Zion Tech Group Team",
    date: "2025-01-27",
    category: "Edge Computing",
    tags: ["Edge AI", "Real-time Processing", "IoT", "Autonomous Systems"],
    featured: true,
    readTime: "11 min read",
    image: "/images/edge-ai-real-time.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: false
  },
  {
    id: "ai-content-generation-enterprise-2025",
    slug: "ai-content-generation-enterprise-2025",
    title: "Enterprise AI Content Generation: Scale Your Content Strategy",
    description: "Master enterprise-grade AI content generation that maintains brand voice, ensures quality, and scales content production by 1000%.",
    excerpt: "Transform your content strategy with AI that understands your brand, maintains consistency, and delivers quality at scale.",
    author: "Zion Tech Group Team",
    date: "2025-01-26",
    category: "Content AI",
    tags: ["Content Generation", "AI Writing", "Brand Voice", "Content Strategy"],
    featured: true,
    readTime: "9 min read",
    image: "/images/ai-content-enterprise.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: false
  },
  {
    id: "ai-customer-insights-advanced-2025",
    slug: "ai-customer-insights-advanced-2025",
    title: "Advanced AI Customer Insights: Predicting Behavior Before It Happens",
    description: "Unlock the power of predictive customer analytics with AI that anticipates needs, predicts churn, and personalizes experiences at scale.",
    excerpt: "Stay ahead of customer needs with AI that predicts behavior patterns and delivers personalized experiences before customers even ask.",
    author: "Zion Tech Group Team",
    date: "2025-01-25",
    category: "Customer Analytics",
    tags: ["Customer Insights", "Predictive Analytics", "Personalization", "Churn Prediction"],
    featured: false,
    readTime: "8 min read",
    image: "/images/ai-customer-insights-advanced.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: false
  },
  {
    id: "genai-evals-production-2025",
    slug: "genai-evals-production-2025",
    title: "GenAI Evals in Production: Quality Gates That Actually Work",
    description: "Implement production-ready GenAI evaluation systems with automated quality gates, performance monitoring, and continuous improvement loops.",
    excerpt: "Ensure your GenAI systems deliver consistent quality with automated evaluation pipelines that catch issues before users do.",
    author: "Zion Tech Group Team",
    date: "2025-01-24",
    category: "GenAI Quality",
    tags: ["GenAI", "Quality Gates", "Evaluation", "Production Monitoring"],
    featured: true,
    readTime: "7 min read",
    image: "/images/genai-evals-production.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: false
  },
  {
    id: "ai-platform-roi-measurement-2025",
    slug: "ai-platform-roi-measurement-2025",
    title: "AI Platform ROI Measurement: Quantifying Business Impact",
    description: "Learn how to measure and maximize ROI from AI platform investments with proven frameworks and success metrics.",
    excerpt: "Turn AI investments into measurable business outcomes with comprehensive ROI frameworks and success tracking.",
    author: "Zion Tech Group Team",
    date: "2025-01-23",
    category: "AI Strategy",
    tags: ["AI ROI", "Business Metrics", "Platform Investment", "Success Measurement"],
    featured: true,
    readTime: "6 min read",
    image: "/images/ai-platform-roi.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: false
  }
  ,
  {
    id: "edge-llm-caching-blueprint-2026",
    slug: "edge-llm-caching-blueprint-2026",
    title: "Edge LLM Caching Blueprint 2026: Sub‑100ms Prompts at Scale",
    description: "Architect edge‑accelerated LLM inference using regional caches, warm pools, and cost‑aware routing for lightning‑fast responses.",
    excerpt: "Deliver sub‑100ms prompts with regional caches, warm pools, and adaptive routing.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "Architecture",
    tags: ["Edge AI", "LLM Inference", "Caching", "Performance"],
    featured: true,
    readTime: "13 min read",
    image: "/images/edge-llm-caching-blueprint-2026.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  },
  {
    id: "ai-governance-scorecards-quickstart-2025",
    slug: "ai-governance-scorecards-quickstart-2025",
    title: "AI Governance Scorecards: A Practical Quickstart",
    description: "Stand up pragmatic governance scorecards tied to KPIs, risks, and evaluation policies that teams actually use.",
    excerpt: "Ship governance that sticks: KPI‑linked scorecards, policy tests, and clear owners.",
    author: "Zion Tech Group Team",
    date: "2025-09-28",
    category: "AI Strategy",
    tags: ["Governance", "Evals", "Policy", "Risk"],
    featured: true,
    readTime: "9 min read",
    image: "/images/ai-governance-scorecards-quickstart-2025.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  },
  {
    id: "serverless-ai-inference-cost-playbook-2025",
    slug: "serverless-ai-inference-cost-playbook-2025",
    title: "Serverless AI Inference Cost Playbook (2025)",
    description: "Cut inference costs 40–70% with adaptive batching, warm pools, and demand shaping without degrading SLOs.",
    excerpt: "A tactical guide to reduce AI inference spend while maintaining performance.",
    author: "Zion Tech Group Team",
    date: "2025-09-26",
    category: "Cost Optimization",
    tags: ["Serverless", "Cost", "Inference", "Optimization"],
    featured: true,
    readTime: "11 min read",
    image: "/images/serverless-ai-inference-cost-playbook-2025.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  }
  ,
  {
    id: "genai-routing-blueprint-2026",
    slug: "genai-routing-blueprint-2026",
    title: "GenAI Routing Blueprint 2026: Fast, Cheap, and Grounded",
    description: "Design intent-aware routers, fallback tiers, and caches to hit quality SLOs at a fraction of the cost.",
    excerpt: "Route by intent, cache by value, and tier by SLO to cut spend 40–70% without hurting UX.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "GenAI",
    tags: ["Routing", "Caching", "SLOs", "Cost"],
    featured: true,
    readTime: "10 min read",
    image: "/images/genai-routing-blueprint-2026.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  },
  {
    id: "secure-ml-supply-chain-2026",
    slug: "secure-ml-supply-chain-2026",
    title: "Secure ML Supply Chain 2026: Attestations, Policy Tests, SBOMs",
    description: "Ship verifiably secure models and tools with signed artifacts, provenance, and CI policy tests.",
    excerpt: "From data to deployment: secure each link with attestations, SBOMs, and automated policy checks.",
    author: "Zion Tech Group Team",
    date: "2025-09-28",
    category: "Security",
    tags: ["Supply Chain", "Attestation", "SBOM", "Policy"],
    featured: true,
    readTime: "11 min read",
    image: "/images/secure-ml-supply-chain-2026.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  },
  {
    id: "golden-paths-roi-2026",
    slug: "golden-paths-roi-2026",
    title: "Golden Paths ROI 2026: Proving Platform Value Quarterly",
    description: "Build developer golden paths with scorecards that tie adoption to shipped business outcomes.",
    excerpt: "Instrument your platform with KPIs that teams adopt—show ROI without vanity metrics.",
    author: "Zion Tech Group Team",
    date: "2025-09-27",
    category: "Platform Engineering",
    tags: ["Golden Paths", "ROI", "KPIs", "Platform"],
    featured: true,
    readTime: "9 min read",
    image: "/images/golden-paths-roi-2026.jpg",
    newBadge: true,
    trending: false,
    featuredInHomepage: true
  }
];

export const featuredNewArticles = newArticles2025.filter(article => article.featured);
export const trendingNewArticles = newArticles2025.filter(article => article.trending);
export const homepageFeaturedArticles = newArticles2025.filter(article => article.featuredInHomepage);
export const latestNewArticles = newArticles2025.slice(0, 6);
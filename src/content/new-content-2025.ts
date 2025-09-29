export interface NewContentItem {
  id: string;
  title: string;
  description: string;
  excerpt: string;
  type: 'blog' | 'service' | 'case-study' | 'whitepaper' | 'webinar';
  category: string;
  tags: string[];
  featured: boolean;
  newBadge: boolean;
  trending: boolean;
  publishedDate: string;
  readTime: string;
  author: string;
  image?: string;
  url: string;
  cta: {
    primary: string;
    secondary?: string;
  };
  metrics?: {
    label: string;
    value: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    company: string;
  };
}

export const newContent2025: NewContentItem[] = [
  {
    id: "ai-autonomous-infrastructure-2025",
    title: "AI Autonomous Infrastructure: The Future of Self-Managing Systems",
    description: "Discover how AI-powered autonomous infrastructure is revolutionizing enterprise operations with self-healing, self-optimizing, and self-scaling capabilities.",
    excerpt: "Transform your infrastructure management with AI that thinks, learns, and adapts. Zero-touch operations are no longer a dream—they're here.",
    type: "blog",
    category: "AI Operations",
    tags: ["Autonomous Infrastructure", "AI Operations", "Self-Healing", "Automation"],
    featured: true,
    newBadge: true,
    trending: true,
    publishedDate: "2025-01-20",
    readTime: "12 min read",
    author: "Dr. Sarah Chen",
    image: "/images/ai-autonomous-infrastructure.jpg",
    url: "/blog/ai-autonomous-infrastructure-2025",
    cta: {
      primary: "Read Full Article",
      secondary: "Download Whitepaper"
    },
    metrics: [
      {
        label: "Cost Reduction",
        value: "85%",
        description: "Average operational savings"
      },
      {
        label: "Uptime Improvement",
        value: "99.99%",
        description: "Achieved with autonomous systems"
      },
      {
        label: "Response Time",
        value: "< 15 seconds",
        description: "Issue detection and resolution"
      }
    ],
    testimonial: {
      quote: "AI Autonomous Infrastructure transformed our operations completely. We went from constant firefighting to zero-touch operations.",
      author: "Michael Rodriguez",
      company: "CloudScale Enterprises"
    }
  },
  {
    id: "reliable-rag-2025",
    title: "Reliable RAG 2025: Production Patterns for Grounded Answers",
    description: "Battle-tested RAG patterns for groundedness, latency, and cost in production.",
    excerpt: "Reduce hallucinations and latency with hardened RAG patterns: contracts, caching, routing, and evals.",
    type: "blog",
    category: "AI Platforms",
    tags: ["RAG", "Groundedness", "Latency", "Caching"],
    featured: true,
    newBadge: true,
    trending: true,
    publishedDate: "2025-09-29",
    readTime: "9 min read",
    author: "Zion Tech Group",
    image: "/images/reliable-rag-2025.jpg",
    url: "/blog/ai-reliable-rag-2025",
    cta: {
      primary: "Read Article",
      secondary: "Get RAG Starter"
    },
    metrics: [
      { label: "Groundedness", value: "+35%", description: "Citation coverage increase" },
      { label: "P95 Latency", value: "< 300ms", description: "With caches + routing" },
      { label: "Cost", value: "-40%", description: "Token spend reduction" }
    ]
  },
  {
    id: "ai-agent-safety-blueprint-2026",
    title: "AI Agent Safety Blueprint 2026: Guardrails for Reliable Autonomy",
    description: "Practical blueprint to ship safe autonomous agents with policy gates and audits.",
    excerpt: "Blueprint for safe autonomy: policy-constrained planning, eval-gated execution, and HITL.",
    type: "blog",
    category: "AI Reliability",
    tags: ["Agents", "Safety", "Governance", "HITL"],
    featured: true,
    newBadge: true,
    trending: false,
    publishedDate: "2025-09-29",
    readTime: "9 min read",
    author: "Zion Tech Group",
    image: "/images/ai-agent-safety-blueprint-2026.jpg",
    url: "/blog/ai-agent-safety-blueprint-2026",
    cta: {
      primary: "Read Article",
      secondary: "Download Safety Kit"
    },
    metrics: [
      { label: "Incidents", value: "-80%", description: "Reduction post-guardrails" },
      { label: "Approvals", value: "HITL", description: "Progressive autonomy gates" },
      { label: "Auditability", value: "100%", description: "Signed traces coverage" }
    ]
  },
  {
    id: "quantum-machine-learning-guide",
    title: "Quantum Machine Learning: Breaking the Barriers of Classical Computing",
    description: "Explore how quantum machine learning is solving previously impossible problems and revolutionizing AI capabilities across industries.",
    excerpt: "Quantum computing meets machine learning to unlock unprecedented computational power and solve complex optimization problems.",
    type: "blog",
    category: "Quantum Computing",
    tags: ["Quantum ML", "Machine Learning", "Quantum Computing", "Optimization"],
    featured: true,
    newBadge: true,
    trending: true,
    publishedDate: "2025-01-19",
    readTime: "15 min read",
    author: "Prof. Alex Thompson",
    image: "/images/quantum-machine-learning.jpg",
    url: "/blog/quantum-machine-learning-guide",
    cta: {
      primary: "Read Guide",
      secondary: "Watch Demo"
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
        label: "Accuracy Gain",
        value: "40%",
        description: "Better optimization results"
      }
    ]
  },
  {
    id: "edge-ai-manufacturing-case-study",
    title: "Manufacturing Revolution: How Edge AI Transformed Production Lines",
    description: "Case study showing how a Fortune 500 manufacturer reduced defects by 95% and increased efficiency by 300% using edge AI.",
    excerpt: "Real-world success story of implementing edge AI in manufacturing with measurable ROI and operational improvements.",
    type: "case-study",
    category: "Manufacturing",
    tags: ["Edge AI", "Manufacturing", "IoT", "Predictive Maintenance"],
    featured: true,
    newBadge: true,
    trending: false,
    publishedDate: "2025-01-18",
    readTime: "8 min read",
    author: "Zion Tech Group",
    image: "/images/edge-ai-manufacturing.jpg",
    url: "/case-studies/edge-ai-manufacturing-transformation",
    cta: {
      primary: "View Case Study",
      secondary: "Schedule Consultation"
    },
    metrics: [
      {
        label: "Defect Reduction",
        value: "95%",
        description: "Quality improvement achieved"
      },
      {
        label: "Efficiency Gain",
        value: "300%",
        description: "Production line optimization"
      },
      {
        label: "Cost Savings",
        value: "$2.5M",
        description: "Annual operational savings"
      }
    ],
    testimonial: {
      quote: "Edge AI transformed our production lines completely. We've never seen such dramatic improvements in quality and efficiency.",
      author: "Jennifer Liu",
      company: "Precision Manufacturing Corp"
    }
  },
  {
    id: "zero-trust-implementation-playbook",
    title: "Zero Trust Security Implementation: A Complete Enterprise Playbook",
    description: "Comprehensive guide to implementing Zero Trust architecture with practical steps, tools, and real-world examples.",
    excerpt: "Step-by-step playbook for enterprise Zero Trust implementation with proven strategies and measurable outcomes.",
    type: "whitepaper",
    category: "Cybersecurity",
    tags: ["Zero Trust", "Security", "Enterprise", "Implementation"],
    featured: true,
    newBadge: true,
    trending: true,
    publishedDate: "2025-01-17",
    readTime: "20 min read",
    author: "Security Team",
    image: "/images/zero-trust-playbook.jpg",
    url: "/whitepapers/zero-trust-implementation-playbook",
    cta: {
      primary: "Download Playbook",
      secondary: "Get Security Assessment"
    },
    metrics: [
      {
        label: "Security Incidents",
        value: "90%",
        description: "Reduction in security breaches"
      },
      {
        label: "Implementation Time",
        value: "6 months",
        description: "Average deployment timeline"
      },
      {
        label: "Compliance Score",
        value: "100%",
        description: "Achieved regulatory compliance"
      }
    ]
  },
  {
    id: "ai-content-automation-webinar",
    title: "AI Content Automation: Scale Your Marketing 10x Faster",
    description: "Live webinar showing how to automate content creation, SEO optimization, and brand consistency using AI.",
    excerpt: "Join industry experts as they demonstrate AI-powered content automation strategies that deliver results.",
    type: "webinar",
    category: "Content Marketing",
    tags: ["Content Automation", "AI Marketing", "SEO", "Brand Consistency"],
    featured: false,
    newBadge: true,
    trending: true,
    publishedDate: "2025-01-21",
    readTime: "60 min webinar",
    author: "Marketing Team",
    image: "/images/ai-content-automation.jpg",
    url: "/webinars/ai-content-automation-scale-marketing",
    cta: {
      primary: "Register Now",
      secondary: "View Past Webinars"
    },
    metrics: [
      {
        label: "Content Speed",
        value: "10x",
        description: "Faster content production"
      },
      {
        label: "Cost Reduction",
        value: "70%",
        description: "Lower content creation costs"
      },
      {
        label: "SEO Improvement",
        value: "85%",
        description: "Better search rankings"
      }
    ]
  },
  {
    id: "finops-ai-cost-optimization",
    title: "FinOps with AI: Intelligent Cloud Cost Optimization",
    description: "Learn how AI-powered FinOps can reduce cloud costs by 40% while improving performance and reliability.",
    excerpt: "Advanced FinOps strategies powered by AI for intelligent resource allocation and cost optimization.",
    type: "blog",
    category: "Cloud Finance",
    tags: ["FinOps", "Cloud Optimization", "AI", "Cost Management"],
    featured: true,
    newBadge: true,
    trending: false,
    publishedDate: "2025-01-16",
    readTime: "10 min read",
    author: "Cloud Economics Team",
    image: "/images/finops-ai-optimization.jpg",
    url: "/blog/finops-ai-cost-optimization",
    cta: {
      primary: "Read Article",
      secondary: "Get Cost Analysis"
    },
    metrics: [
      {
        label: "Cost Reduction",
        value: "40%",
        description: "Average cloud cost savings"
      },
      {
        label: "Resource Efficiency",
        value: "60%",
        description: "Improved utilization rates"
      },
      {
        label: "ROI Timeline",
        value: "3 months",
        description: "Time to positive ROI"
      }
    ]
  },
  {
    id: "ai-governance-framework-2025",
    title: "AI Governance Framework 2025: Practical Implementation Guide",
    description: "Comprehensive framework for AI governance with policies, procedures, and compliance strategies for enterprise AI.",
    excerpt: "Build robust AI governance that enables innovation while ensuring compliance, ethics, and risk management.",
    type: "whitepaper",
    category: "AI Governance",
    tags: ["AI Governance", "Compliance", "Ethics", "Risk Management"],
    featured: true,
    newBadge: true,
    trending: true,
    publishedDate: "2025-01-15",
    readTime: "25 min read",
    author: "AI Governance Team",
    image: "/images/ai-governance-framework.jpg",
    url: "/whitepapers/ai-governance-framework-2025",
    cta: {
      primary: "Download Framework",
      secondary: "Schedule Workshop"
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
        label: "Implementation Time",
        value: "4 months",
        description: "Framework deployment timeline"
      }
    ]
  },
  {
    id: "blockchain-ai-integration-guide",
    title: "Blockchain + AI Integration: Building Trust in Decentralized Systems",
    description: "Explore how AI and blockchain technologies combine to create secure, transparent, and intelligent decentralized systems.",
    excerpt: "Discover the synergy between AI and blockchain for building next-generation decentralized applications.",
    type: "blog",
    category: "Blockchain",
    tags: ["Blockchain", "AI", "Decentralization", "Smart Contracts"],
    featured: false,
    newBadge: true,
    trending: false,
    publishedDate: "2025-01-14",
    readTime: "14 min read",
    author: "Blockchain Team",
    image: "/images/blockchain-ai-integration.jpg",
    url: "/blog/blockchain-ai-integration-guide",
    cta: {
      primary: "Read Guide",
      secondary: "View Demo"
    },
    metrics: [
      {
        label: "Security Enhancement",
        value: "95%",
        description: "Improved system security"
      },
      {
        label: "Transparency",
        value: "100%",
        description: "Complete audit trail"
      },
      {
        label: "Efficiency Gain",
        value: "50%",
        description: "Faster transaction processing"
      }
    ]
  }
];

export const featuredNewContent = newContent2025.filter(item => item.featured);
export const trendingNewContent = newContent2025.filter(item => item.trending);
export const latestNewContent = newContent2025
  .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
  .slice(0, 6);
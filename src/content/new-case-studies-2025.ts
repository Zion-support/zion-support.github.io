export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  technologies: string[];
  timeline: string;
  featured: boolean;
  newBadge: boolean;
  trending: boolean;
  image: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export const newCaseStudies2025: CaseStudy[] = [
  {
    id: "techcorp-ai-autonomous-infrastructure",
    slug: "techcorp-ai-autonomous-infrastructure",
    title: "TechCorp Global: 99.99% Uptime with AI Autonomous Infrastructure",
    description: "How TechCorp Global achieved 99.99% uptime and 85% cost reduction by implementing AI Autonomous Infrastructure Platform across their global operations.",
    excerpt: "TechCorp Global transformed their infrastructure management with AI that self-heals, self-optimizes, and scales automatically, achieving unprecedented reliability and cost savings.",
    company: "TechCorp Global",
    industry: "Financial Services",
    challenge: "Managing complex multi-cloud infrastructure with 99.5% uptime requirements and strict compliance needs across 50+ data centers worldwide.",
    solution: "Implemented AI Autonomous Infrastructure Platform with predictive maintenance, automated incident response, and intelligent resource optimization.",
    results: [
      "99.99% uptime achieved (exceeded 99.5% requirement)",
      "85% reduction in operational costs",
      "Zero compliance violations",
      "95% reduction in manual tasks",
      "Sub-minute incident response time",
      "50% improvement in system performance"
    ],
    metrics: [
      {
        label: "Uptime Improvement",
        value: "99.99%",
        description: "System availability achieved"
      },
      {
        label: "Cost Reduction",
        value: "85%",
        description: "Operational cost savings"
      },
      {
        label: "Response Time",
        value: "< 15 seconds",
        description: "Issue detection and resolution"
      },
      {
        label: "Manual Tasks",
        value: "95%",
        description: "Reduction in manual operations"
      }
    ],
    technologies: ["AI Autonomous Infrastructure", "Machine Learning", "Kubernetes", "Prometheus", "Terraform", "Cloud Infrastructure"],
    timeline: "6 months",
    featured: true,
    newBadge: true,
    trending: true,
    image: "/images/case-study-techcorp-ai-infrastructure.jpg",
    author: "Zion Tech Group Team",
    date: "2025-01-30",
    category: "AI Infrastructure",
    tags: ["AI Infrastructure", "Autonomous Systems", "Cost Reduction", "Uptime", "Financial Services"],
    seo: {
      metaTitle: "TechCorp Global: 99.99% Uptime with AI Autonomous Infrastructure | Case Study",
      metaDescription: "How TechCorp Global achieved 99.99% uptime and 85% cost reduction with AI Autonomous Infrastructure. Real results from a Fortune 500 implementation.",
      keywords: ["AI autonomous infrastructure", "99.99% uptime", "cost reduction", "case study", "financial services", "infrastructure automation"]
    }
  },
  {
    id: "healthcare-ai-diagnostic-platform",
    slug: "healthcare-ai-diagnostic-platform",
    title: "VisionTech Innovations: 85% Diagnostic Accuracy Improvement with Multi-Modal AI",
    description: "VisionTech Innovations transformed healthcare diagnostics by implementing multi-modal AI that combines medical imaging with natural language processing, achieving 85% improvement in diagnostic accuracy.",
    excerpt: "Healthcare provider achieves breakthrough diagnostic capabilities with multi-modal AI that sees, reads, and understands medical data like expert physicians.",
    company: "VisionTech Innovations",
    industry: "Healthcare",
    challenge: "Manual analysis of medical images and patient reports was time-consuming, error-prone, and couldn't scale with increasing patient volume.",
    solution: "Implemented multi-modal AI system combining computer vision for medical imaging with NLP for patient report analysis, creating comprehensive diagnostic insights.",
    results: [
      "85% improvement in diagnostic accuracy",
      "60% reduction in analysis time",
      "95% accuracy in multi-modal understanding",
      "Real-time processing capabilities",
      "Enhanced patient care quality",
      "40% reduction in misdiagnosis"
    ],
    metrics: [
      {
        label: "Diagnostic Accuracy",
        value: "85%",
        description: "Improvement in diagnostic precision"
      },
      {
        label: "Analysis Time",
        value: "60%",
        description: "Reduction in processing time"
      },
      {
        label: "Multi-Modal Accuracy",
        value: "95%",
        description: "Understanding across data types"
      },
      {
        label: "Misdiagnosis Reduction",
        value: "40%",
        description: "Decrease in diagnostic errors"
      }
    ],
    technologies: ["Multi-Modal AI", "Computer Vision", "Natural Language Processing", "Medical Imaging", "Healthcare AI", "Diagnostic Systems"],
    timeline: "8 months",
    featured: true,
    newBadge: true,
    trending: true,
    image: "/images/case-study-healthcare-multimodal-ai.jpg",
    author: "Zion Tech Group Team",
    date: "2025-01-29",
    category: "Healthcare AI",
    tags: ["Healthcare AI", "Multi-Modal AI", "Diagnostic Accuracy", "Medical Imaging", "NLP"],
    seo: {
      metaTitle: "VisionTech: 85% Diagnostic Accuracy with Multi-Modal AI | Case Study",
      metaDescription: "Healthcare provider achieves 85% diagnostic accuracy improvement with multi-modal AI combining medical imaging and NLP. Real healthcare transformation results.",
      keywords: ["healthcare AI", "diagnostic accuracy", "multi-modal AI", "medical imaging", "healthcare case study", "AI diagnostics"]
    }
  },
  {
    id: "retail-ai-supply-chain-optimization",
    slug: "retail-ai-supply-chain-optimization",
    title: "RetailMax Corporation: 65% Faster Deliveries with AI Supply Chain Optimization",
    description: "RetailMax Corporation revolutionized their supply chain operations using AI optimization, achieving 65% faster deliveries and 40% cost reduction across their global retail network.",
    excerpt: "Global retail chain transforms logistics with AI that optimizes routes, predicts demand, and automates inventory management for unprecedented efficiency.",
    company: "RetailMax Corporation",
    industry: "Retail & E-commerce",
    challenge: "Managing inventory across 500+ stores with seasonal demand variations, complex logistics networks, and increasing customer expectations for fast delivery.",
    solution: "Implemented comprehensive AI supply chain optimization including demand forecasting, route optimization, and intelligent inventory management across the entire network.",
    results: [
      "65% reduction in delivery times",
      "40% decrease in logistics costs",
      "95% accuracy in demand forecasting",
      "50% reduction in stockouts",
      "30% improvement in inventory turnover",
      "$2M annual savings in logistics costs"
    ],
    metrics: [
      {
        label: "Delivery Speed",
        value: "65%",
        description: "Faster delivery times"
      },
      {
        label: "Cost Reduction",
        value: "40%",
        description: "Logistics cost savings"
      },
      {
        label: "Forecast Accuracy",
        value: "95%",
        description: "Demand prediction precision"
      },
      {
        label: "Stockout Reduction",
        value: "50%",
        description: "Decrease in out-of-stock incidents"
      }
    ],
    technologies: ["AI Supply Chain", "Demand Forecasting", "Route Optimization", "Inventory Management", "Logistics AI", "Retail Analytics"],
    timeline: "10 months",
    featured: true,
    newBadge: true,
    trending: true,
    image: "/images/case-study-retail-supply-chain.jpg",
    author: "Zion Tech Group Team",
    date: "2025-01-28",
    category: "Supply Chain AI",
    tags: ["Supply Chain AI", "Retail Optimization", "Logistics", "Demand Forecasting", "Cost Reduction"],
    seo: {
      metaTitle: "RetailMax: 65% Faster Deliveries with AI Supply Chain | Case Study",
      metaDescription: "Retail chain achieves 65% faster deliveries and 40% cost reduction with AI supply chain optimization. Real retail transformation results.",
      keywords: ["AI supply chain", "retail optimization", "delivery optimization", "supply chain case study", "logistics AI", "retail efficiency"]
    }
  }
];

export const featuredCaseStudies = newCaseStudies2025.filter(caseStudy => caseStudy.featured);
export const trendingCaseStudies = newCaseStudies2025.filter(caseStudy => caseStudy.trending);
export const latestCaseStudies = newCaseStudies2025.slice(0, 3);
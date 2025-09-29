export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  description: string;
  excerpt: string;
  industry: string;
  company: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  technologies: string[];
  featured: boolean;
  newBadge: boolean;
  publishedAt: string;
  readTime: string;
  author: string;
  image: string;
  tags: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  relatedCaseStudies: string[];
}

export const newCaseStudies2025: CaseStudy[] = [
  {
    id: "retailmax-ai-autonomous-infrastructure",
    title: "RetailMax: AI Autonomous Infrastructure Reduces Downtime by 99.9%",
    slug: "retailmax-ai-autonomous-infrastructure",
    description: "How RetailMax implemented AI autonomous infrastructure to achieve 99.9% uptime, reduce operational costs by 75%, and scale their e-commerce platform to handle 10x traffic growth.",
    excerpt: "RetailMax transformed their infrastructure with AI autonomous systems, achieving unprecedented reliability and cost efficiency while scaling to serve millions of customers.",
    industry: "E-commerce",
    company: "RetailMax Corporation",
    challenge: "RetailMax was experiencing frequent system outages during peak shopping seasons, resulting in lost sales and customer dissatisfaction. Their manual infrastructure management couldn't scale with their rapid growth.",
    solution: "Implemented AI autonomous infrastructure with self-healing systems, predictive maintenance, and automated scaling capabilities that automatically detect and resolve issues without human intervention.",
    results: [
      {
        metric: "System Uptime",
        value: "99.9%",
        description: "Achieved from previous 95% uptime"
      },
      {
        metric: "Cost Reduction",
        value: "75%",
        description: "Reduction in operational costs"
      },
      {
        metric: "Traffic Handling",
        value: "10x",
        description: "Increase in traffic capacity"
      },
      {
        metric: "Response Time",
        value: "< 30s",
        description: "Average incident response time"
      }
    ],
    technologies: ["AI Infrastructure", "Self-Healing Systems", "Predictive Analytics", "Automated Scaling", "Cloud Computing"],
    featured: true,
    newBadge: true,
    publishedAt: "2025-01-30T09:00:00Z",
    readTime: "8 min read",
    author: "Sarah Chen",
    image: "/images/case-study-retailmax-ai-infrastructure.jpg",
    tags: ["AI Infrastructure", "E-commerce", "Autonomous Systems", "Scalability", "Cost Optimization"],
    seo: {
      metaTitle: "RetailMax AI Autonomous Infrastructure Case Study: 99.9% Uptime",
      metaDescription: "How RetailMax achieved 99.9% uptime and 75% cost reduction with AI autonomous infrastructure systems.",
      keywords: ["AI autonomous infrastructure", "e-commerce case study", "system uptime", "cost reduction", "self-healing systems"]
    },
    relatedCaseStudies: ["first-national-bank-ai-automation", "precision-manufacturing-ai-optimization"]
  },
  {
    id: "quantum-finance-optimization",
    title: "Quantum Finance: Portfolio Optimization with Quantum-AI Hybrid Computing",
    slug: "quantum-finance-optimization",
    description: "Leading investment firm leverages quantum-AI hybrid computing to optimize portfolios of 10,000+ assets, achieving 35% better returns and 50% risk reduction.",
    excerpt: "Revolutionary quantum-AI system enables real-time portfolio optimization across massive asset classes, delivering superior returns while minimizing risk.",
    industry: "Financial Services",
    company: "Quantum Capital Partners",
    challenge: "Managing portfolios with 10,000+ assets required 24+ hours for optimization, limiting responsiveness to market changes and missing trading opportunities.",
    solution: "Implemented quantum-AI hybrid computing system combining quantum annealing for optimization with AI for market prediction and risk assessment.",
    results: [
      {
        metric: "Portfolio Returns",
        value: "35%",
        description: "Improvement in annual returns"
      },
      {
        metric: "Risk Reduction",
        value: "50%",
        description: "Reduction in portfolio volatility"
      },
      {
        metric: "Optimization Time",
        value: "95%",
        description: "Reduction from 24 hours to 1.2 hours"
      },
      {
        metric: "Additional Profits",
        value: "$200M+",
        description: "Annual profit improvement"
      }
    ],
    technologies: ["Quantum Computing", "AI", "Portfolio Optimization", "Risk Management", "Machine Learning"],
    featured: true,
    newBadge: true,
    publishedAt: "2025-01-29T11:00:00Z",
    readTime: "10 min read",
    author: "Dr. Michael Rodriguez",
    image: "/images/case-study-quantum-finance-optimization.jpg",
    tags: ["Quantum Computing", "Financial Services", "Portfolio Optimization", "AI", "Risk Management"],
    seo: {
      metaTitle: "Quantum Finance Portfolio Optimization Case Study: 35% Better Returns",
      metaDescription: "How quantum-AI hybrid computing delivered 35% better portfolio returns and 50% risk reduction for investment firm.",
      keywords: ["quantum computing finance", "portfolio optimization", "quantum AI", "investment optimization", "risk management"]
    },
    relatedCaseStudies: ["retailmax-ai-autonomous-infrastructure", "healthcare-ai-diagnostics"]
  },
  {
    id: "techcorp-content-automation",
    title: "TechCorp: AI Content Automation Scales Marketing 10x",
    slug: "techcorp-content-automation",
    description: "TechCorp implemented AI content automation to scale their content marketing from 50 to 500+ pieces monthly, achieving 300% increase in organic traffic and 150% more leads.",
    excerpt: "AI content automation transformed TechCorp's marketing capabilities, enabling massive scale while maintaining quality and brand consistency.",
    industry: "Technology",
    company: "TechCorp Solutions",
    challenge: "Content marketing team of 5 people couldn't keep up with demand for 500+ pieces of content monthly across multiple channels and languages.",
    solution: "Deployed comprehensive AI content automation system with automated blog writing, social media content generation, email campaigns, and video content creation.",
    results: [
      {
        metric: "Content Production",
        value: "10x",
        description: "Increase from 50 to 500+ pieces monthly"
      },
      {
        metric: "Organic Traffic",
        value: "300%",
        description: "Increase in organic website traffic"
      },
      {
        metric: "Lead Generation",
        value: "150%",
        description: "Increase in qualified leads"
      },
      {
        metric: "Marketing Costs",
        value: "70%",
        description: "Reduction in content creation costs"
      }
    ],
    technologies: ["AI Content Generation", "Marketing Automation", "SEO Optimization", "Multi-Channel Publishing", "Content Management"],
    featured: true,
    newBadge: true,
    publishedAt: "2025-01-28T15:00:00Z",
    readTime: "7 min read",
    author: "Jennifer Martinez",
    image: "/images/case-study-techcorp-content-automation.jpg",
    tags: ["Content Automation", "Marketing", "AI Content", "SEO", "Lead Generation"],
    seo: {
      metaTitle: "TechCorp AI Content Automation Case Study: 10x Scale",
      metaDescription: "How TechCorp scaled content marketing 10x with AI automation, achieving 300% traffic growth and 150% more leads.",
      keywords: ["AI content automation", "content marketing", "marketing automation", "content scaling", "AI writing"]
    },
    relatedCaseStudies: ["retailmax-ai-autonomous-infrastructure", "quantum-finance-optimization"]
  },
  {
    id: "healthcare-ai-diagnostics",
    title: "MedTech Solutions: AI Diagnostics Improve Accuracy by 95%",
    slug: "healthcare-ai-diagnostics",
    description: "MedTech Solutions deployed AI-powered diagnostic systems that improved diagnostic accuracy by 95%, reduced diagnosis time by 80%, and saved $50M in healthcare costs.",
    excerpt: "AI diagnostic systems revolutionized healthcare delivery, providing faster, more accurate diagnoses while reducing costs and improving patient outcomes.",
    industry: "Healthcare",
    company: "MedTech Solutions",
    challenge: "Healthcare providers faced challenges with diagnostic accuracy, long wait times for results, and high costs of diagnostic procedures.",
    solution: "Implemented AI-powered diagnostic systems using machine learning algorithms trained on millions of medical images and patient data for accurate, fast diagnoses.",
    results: [
      {
        metric: "Diagnostic Accuracy",
        value: "95%",
        description: "Improvement in diagnostic accuracy"
      },
      {
        metric: "Diagnosis Time",
        value: "80%",
        description: "Reduction in diagnosis time"
      },
      {
        metric: "Cost Savings",
        value: "$50M",
        description: "Annual healthcare cost savings"
      },
      {
        metric: "Patient Satisfaction",
        value: "90%",
        description: "Improvement in patient satisfaction"
      }
    ],
    technologies: ["AI Diagnostics", "Machine Learning", "Medical Imaging", "Healthcare AI", "Predictive Analytics"],
    featured: false,
    newBadge: true,
    publishedAt: "2025-01-27T13:00:00Z",
    readTime: "9 min read",
    author: "Dr. Lisa Wang",
    image: "/images/case-study-healthcare-ai-diagnostics.jpg",
    tags: ["Healthcare AI", "Medical Diagnostics", "Machine Learning", "Medical Imaging", "Healthcare Technology"],
    seo: {
      metaTitle: "MedTech AI Diagnostics Case Study: 95% Accuracy Improvement",
      metaDescription: "How MedTech Solutions improved diagnostic accuracy by 95% and reduced costs by $50M with AI-powered diagnostic systems.",
      keywords: ["AI diagnostics", "healthcare AI", "medical imaging", "diagnostic accuracy", "healthcare technology"]
    },
    relatedCaseStudies: ["quantum-finance-optimization", "techcorp-content-automation"]
  },
  {
    id: "manufacturing-ai-optimization",
    title: "Precision Manufacturing: AI Optimization Reduces Waste by 70%",
    slug: "manufacturing-ai-optimization",
    description: "Precision Manufacturing implemented AI optimization systems that reduced production waste by 70%, improved efficiency by 85%, and saved $30M annually.",
    excerpt: "AI optimization transformed manufacturing operations, dramatically reducing waste and improving efficiency while maintaining quality standards.",
    industry: "Manufacturing",
    company: "Precision Manufacturing Inc.",
    challenge: "Manufacturing processes were generating significant waste, operating inefficiently, and struggling with quality control across multiple production lines.",
    solution: "Deployed AI optimization systems with predictive maintenance, quality control automation, and production line optimization using machine learning algorithms.",
    results: [
      {
        metric: "Waste Reduction",
        value: "70%",
        description: "Reduction in production waste"
      },
      {
        metric: "Efficiency Improvement",
        value: "85%",
        description: "Increase in production efficiency"
      },
      {
        metric: "Cost Savings",
        value: "$30M",
        description: "Annual cost savings"
      },
      {
        metric: "Quality Improvement",
        value: "60%",
        description: "Reduction in defect rates"
      }
    ],
    technologies: ["AI Optimization", "Predictive Maintenance", "Quality Control", "Manufacturing AI", "Process Automation"],
    featured: false,
    newBadge: true,
    publishedAt: "2025-01-26T10:00:00Z",
    readTime: "8 min read",
    author: "James Thompson",
    image: "/images/case-study-manufacturing-ai-optimization.jpg",
    tags: ["Manufacturing AI", "Process Optimization", "Predictive Maintenance", "Quality Control", "Industrial AI"],
    seo: {
      metaTitle: "Precision Manufacturing AI Optimization Case Study: 70% Waste Reduction",
      metaDescription: "How Precision Manufacturing reduced waste by 70% and improved efficiency by 85% with AI optimization systems.",
      keywords: ["manufacturing AI", "process optimization", "predictive maintenance", "waste reduction", "industrial automation"]
    },
    relatedCaseStudies: ["retailmax-ai-autonomous-infrastructure", "healthcare-ai-diagnostics"]
  }
];

export const featuredCaseStudies = newCaseStudies2025.filter(study => study.featured);
export const trendingCaseStudies = newCaseStudies2025.filter(study => study.newBadge);
export const latestCaseStudies = newCaseStudies2025
  .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  .slice(0, 3);
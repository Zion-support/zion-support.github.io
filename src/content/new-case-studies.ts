export interface NewCaseStudy {
  id: string;
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: {
    primary: string;
    secondary?: string;
    tertiary?: string;
  };
  featured: boolean;
  date: string;
  tags: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  image?: string;
  newBadge?: boolean;
  trending?: boolean;
}

export const newCaseStudies: NewCaseStudy[] = [
  {
    id: "fintech-ondevice-agents",
    slug: "fintech-ondevice-agents",
    title: "Fintech Unicorn: On‑Device Agents Slash Latency to 90ms",
    description: "A consumer fintech moved sensitive workflows on‑device, achieving sub‑100ms prompts and 35% cost savings with edge LLM caching.",
    excerpt: "Edge inference and local tools delivered 90ms median prompts and reduced cloud spend by 35%.",
    company: "NovaWallet",
    industry: "Fintech",
    challenge: "High latency and privacy concerns for PII‑heavy assistant flows",
    solution: "On‑device agents with encrypted caches and intent‑aware tool routing",
    result: "90ms median latency, 35% cost reduction, 99.99% offline reliability",
    metrics: {
      primary: "90ms Median Latency",
      secondary: "35% Cost Reduction",
      tertiary: "99.99% Offline"
    },
    featured: true,
    date: "2025-09-29",
    tags: ["Edge AI", "Agents", "Privacy", "Latency", "Caching"],
    testimonial: {
      quote: "On‑device agents changed the game for us—fast, private, and reliable.",
      author: "Amira Patel",
      position: "VP Product, NovaWallet"
    },
    image: "/images/case-fintech-ondevice.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "retail-serverless-inference-playbook",
    slug: "retail-serverless-inference-playbook",
    title: "Global Retailer: Serverless Inference Cost Cut by 62%",
    description: "A top retailer implemented cost‑aware routing and warm pools, reducing inference spend by 62% while improving CSAT.",
    excerpt: "Cost‑aware routing + adaptive batching reduced LLM costs 62% with higher QoS.",
    company: "RetailMax",
    industry: "Retail & E‑commerce",
    challenge: "Exploding inference bills and erratic tail latencies",
    solution: "Adaptive batching, warm pools, intent‑based model routing, prompt compression",
    result: "62% cost reduction, P95 −48%, CSAT +12pts",
    metrics: {
      primary: "62% Cost Reduction",
      secondary: "−48% P95 Latency",
      tertiary: "+12 CSAT"
    },
    featured: true,
    date: "2025-09-29",
    tags: ["Serverless", "Inference", "Routing", "Cost", "SLA"],
    testimonial: {
      quote: "We saved millions while customers got faster answers—win‑win.",
      author: "Lena Ortiz",
      position: "Director, Platform Engineering"
    },
    image: "/images/case-retail-inference.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "global-retail-ai-transformation",
    slug: "global-retail-ai-transformation",
    title: "Global Retail Giant: AI-Powered Customer Experience Revolution",
    description: "How a Fortune 500 retail company transformed customer experience and increased revenue by 45% using AI-powered personalization and autonomous operations.",
    excerpt: "A major retail corporation achieved 45% revenue growth and 90% customer satisfaction through AI-powered personalization and autonomous infrastructure management.",
    company: "Global Retail Corp",
    industry: "Retail & E-commerce",
    challenge: "Declining customer satisfaction and stagnant revenue growth in competitive market",
    solution: "AI-powered customer experience platform with autonomous infrastructure management",
    result: "45% revenue increase, 90% customer satisfaction, 75% operational efficiency gain",
    metrics: {
      primary: "45% Revenue Increase",
      secondary: "90% Customer Satisfaction",
      tertiary: "75% Efficiency Gain"
    },
    featured: true,
    date: "2025-01-17",
    tags: ["AI Transformation", "Customer Experience", "Retail", "Personalization", "Revenue Growth"],
    testimonial: {
      quote: "Zion Tech Group's AI solutions transformed our entire customer experience. The results exceeded our wildest expectations.",
      author: "Jennifer Martinez",
      position: "Chief Digital Officer, Global Retail Corp"
    },
    image: "/images/global-retail-case-study.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "healthcare-ai-autonomous-operations",
    slug: "healthcare-ai-autonomous-operations",
    title: "Healthcare Provider: AI Autonomous Operations Success Story",
    description: "Leading healthcare provider achieved 99.9% system uptime and 60% cost reduction through AI autonomous infrastructure management.",
    excerpt: "A major healthcare provider implemented AI autonomous operations, achieving 99.9% uptime and 60% infrastructure cost reduction while improving patient care.",
    company: "MediCare Systems",
    industry: "Healthcare",
    challenge: "Frequent system outages and high infrastructure costs affecting patient care",
    solution: "AI autonomous operations platform with self-healing infrastructure",
    result: "99.9% uptime, 60% cost reduction, 40% faster patient processing",
    metrics: {
      primary: "99.9% System Uptime",
      secondary: "60% Cost Reduction",
      tertiary: "40% Faster Processing"
    },
    featured: true,
    date: "2025-01-17",
    tags: ["Healthcare", "Autonomous Operations", "Infrastructure", "Cost Optimization", "Patient Care"],
    testimonial: {
      quote: "The AI autonomous operations system has revolutionized our infrastructure reliability. We can now focus entirely on patient care.",
      author: "Dr. Robert Chen",
      position: "CTO, MediCare Systems"
    },
    image: "/images/healthcare-autonomous-case-study.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "financial-services-quantum-ai",
    slug: "financial-services-quantum-ai",
    title: "Investment Bank: Quantum-AI Hybrid Computing Breakthrough",
    description: "Major investment bank leveraged quantum-AI hybrid computing to achieve 300% faster risk analysis and 85% improvement in trading algorithms.",
    excerpt: "A leading investment bank implemented quantum-AI hybrid computing, achieving 300% faster risk analysis and 85% improvement in algorithmic trading performance.",
    company: "Quantum Capital Partners",
    industry: "Financial Services",
    challenge: "Complex risk analysis taking days and suboptimal trading algorithm performance",
    solution: "Quantum-AI hybrid computing platform for risk analysis and trading optimization",
    result: "300% faster risk analysis, 85% algorithm improvement, 200% ROI",
    metrics: {
      primary: "300% Faster Analysis",
      secondary: "85% Algorithm Improvement",
      tertiary: "200% ROI"
    },
    featured: true,
    date: "2025-01-17",
    tags: ["Financial Services", "Quantum Computing", "AI", "Risk Analysis", "Algorithmic Trading"],
    testimonial: {
      quote: "The quantum-AI hybrid system has given us an unprecedented competitive advantage in the financial markets.",
      author: "Michael Thompson",
      position: "Head of Quantitative Research, Quantum Capital Partners"
    },
    image: "/images/quantum-finance-case-study.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "manufacturing-ai-automation",
    slug: "manufacturing-ai-automation",
    title: "Manufacturing Leader: AI Content Generation and Process Automation",
    description: "Leading manufacturer achieved 80% reduction in content creation time and 50% improvement in process efficiency through AI automation.",
    excerpt: "A major manufacturer transformed operations with AI content generation and process automation, achieving 80% faster content creation and 50% efficiency gains.",
    company: "Precision Manufacturing Ltd",
    industry: "Manufacturing",
    challenge: "Slow content creation for training materials and inefficient manufacturing processes",
    solution: "AI content generation platform and intelligent process automation",
    result: "80% faster content creation, 50% process efficiency, 70% training time reduction",
    metrics: {
      primary: "80% Faster Content Creation",
      secondary: "50% Process Efficiency",
      tertiary: "70% Training Time Reduction"
    },
    featured: false,
    date: "2025-01-17",
    tags: ["Manufacturing", "Content Generation", "Process Automation", "Training", "Efficiency"],
    testimonial: {
      quote: "AI automation has revolutionized our manufacturing processes and training programs. The results are remarkable.",
      author: "Sarah Williams",
      position: "Operations Director, Precision Manufacturing Ltd"
    },
    image: "/images/manufacturing-ai-case-study.jpg",
    newBadge: true,
    trending: false
  },
  {
    id: "supply-chain-ai-optimization",
    slug: "supply-chain-ai-optimization",
    title: "Logistics Company: AI Supply Chain Optimization Success",
    description: "Major logistics provider achieved 65% reduction in delivery times and 40% cost savings through AI-powered supply chain optimization.",
    excerpt: "A leading logistics company implemented AI supply chain optimization, achieving 65% faster deliveries and 40% cost reduction while improving customer satisfaction.",
    company: "Global Logistics Solutions",
    industry: "Logistics & Supply Chain",
    challenge: "Inefficient routing and high operational costs affecting delivery performance",
    solution: "AI-powered supply chain optimization with predictive analytics",
    result: "65% faster deliveries, 40% cost reduction, 95% on-time delivery rate",
    metrics: {
      primary: "65% Faster Deliveries",
      secondary: "40% Cost Reduction",
      tertiary: "95% On-Time Delivery"
    },
    featured: false,
    date: "2025-01-17",
    tags: ["Logistics", "Supply Chain", "AI Optimization", "Predictive Analytics", "Cost Reduction"],
    testimonial: {
      quote: "The AI optimization system has transformed our logistics operations. We're now the fastest and most cost-effective in the industry.",
      author: "David Rodriguez",
      position: "CEO, Global Logistics Solutions"
    },
    image: "/images/logistics-ai-case-study.jpg",
    newBadge: true,
    trending: false
  }
];

export const featuredNewCaseStudies = newCaseStudies.filter(study => study.featured);
export const trendingNewCaseStudies = newCaseStudies.filter(study => study.trending);
export const latestNewCaseStudies = newCaseStudies.slice(0, 3);
export interface PromotionalBanner {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cta: {
    primary: string;
    secondary?: string;
  };
  ctaUrls: {
    primary: string;
    secondary?: string;
  };
  type: 'hero' | 'feature' | 'announcement' | 'trending' | 'new';
  category: string;
  featured: boolean;
  badge?: string;
  image?: string;
  icon?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    company: string;
  };
  tags: string[];
  publishedDate: string;
}

export const promotionalBanners2025: PromotionalBanner[] = [
  {
    id: "ai-autonomous-infrastructure-launch",
    title: "🚀 AI Autonomous Infrastructure is Here",
    subtitle: "Self-Healing, Self-Optimizing Systems",
    description: "Transform your infrastructure with AI that thinks, learns, and adapts. Achieve 99.99% uptime and 65% cost reduction with zero-touch operations.",
    cta: {
      primary: "Explore AI Infrastructure",
      secondary: "View Case Study"
    },
    ctaUrls: {
      primary: "/services/ai-autonomous-infrastructure",
      secondary: "/case-studies/ai-autonomous-operations-success"
    },
    type: "hero",
    category: "AI Operations",
    featured: true,
    badge: "NEW",
    image: "/images/banners/ai-autonomous-infrastructure-hero.jpg",
    icon: "🤖",
    metrics: [
      { label: "Uptime", value: "99.99%" },
      { label: "Cost Savings", value: "65%" },
      { label: "Manual Work", value: "90% ↓" }
    ],
    testimonial: {
      quote: "AI Autonomous Infrastructure transformed our operations completely. We went from constant firefighting to zero-touch operations.",
      author: "Michael Rodriguez",
      company: "CloudScale Enterprises"
    },
    tags: ["AI Operations", "Autonomous Systems", "Infrastructure", "Self-Healing"],
    publishedDate: "2025-01-25"
  },
  {
    id: "edge-ai-computing-spotlight",
    title: "⚡ Edge AI Computing Solutions",
    subtitle: "Ultra-Low Latency Intelligence",
    description: "Deploy AI at the edge for sub-millisecond response times. Process data locally, reduce bandwidth costs, and enable offline AI capabilities.",
    cta: {
      primary: "Discover Edge AI",
      secondary: "Read Guide"
    },
    ctaUrls: {
      primary: "/services/edge-ai-computing",
      secondary: "/blog/ai-edge-computing-2025"
    },
    type: "feature",
    category: "Edge Computing",
    featured: true,
    badge: "TRENDING",
    image: "/images/banners/edge-ai-computing.jpg",
    icon: "⚡",
    metrics: [
      { label: "Latency", value: "< 1ms" },
      { label: "Bandwidth", value: "80% ↓" },
      { label: "Offline Capable", value: "100%" }
    ],
    testimonial: {
      quote: "Edge AI enabled real-time processing at our manufacturing plants, reducing defects by 95%.",
      author: "Jennifer Liu",
      company: "Precision Manufacturing Corp"
    },
    tags: ["Edge Computing", "Real-time AI", "IoT", "Manufacturing"],
    publishedDate: "2025-01-24"
  },
  {
    id: "quantum-ai-breakthrough",
    title: "🔬 Quantum AI Breakthroughs",
    subtitle: "The Next Frontier of Computing",
    description: "Discover how quantum computing combined with AI is solving previously impossible problems. 1000x speedup for complex optimization challenges.",
    cta: {
      primary: "Explore Quantum AI",
      secondary: "View Results"
    },
    ctaUrls: {
      primary: "/services/quantum-ai-optimization",
      secondary: "/case-studies/quantum-computing-optimization"
    },
    type: "announcement",
    category: "Quantum Computing",
    featured: true,
    badge: "BREAKTHROUGH",
    image: "/images/banners/quantum-ai-breakthrough.jpg",
    icon: "🔬",
    metrics: [
      { label: "Speedup", value: "1000x" },
      { label: "Complexity", value: "NP-Hard" },
      { label: "Accuracy", value: "40% ↑" }
    ],
    testimonial: {
      quote: "Quantum AI optimization helped us solve portfolio problems impossible with classical computing, delivering 18% better returns.",
      author: "David Kim",
      company: "Quantum Capital Management"
    },
    tags: ["Quantum Computing", "Machine Learning", "Optimization", "Finance"],
    publishedDate: "2025-01-23"
  },
  {
    id: "ai-sustainability-mission",
    title: "🌱 AI for Sustainability",
    subtitle: "Tackling Climate Change with Intelligence",
    description: "Join the fight against climate change with AI solutions that reduce carbon emissions by 40%, optimize resource usage, and create sustainable futures.",
    cta: {
      primary: "Join the Mission",
      secondary: "Learn More"
    },
    ctaUrls: {
      primary: "/services/ai-sustainability-solutions",
      secondary: "/blog/ai-sustainability-climate-2025"
    },
    type: "announcement",
    category: "Sustainability",
    featured: true,
    badge: "MISSION",
    image: "/images/banners/ai-sustainability.jpg",
    icon: "🌱",
    metrics: [
      { label: "Carbon Reduction", value: "40%" },
      { label: "Energy Savings", value: "25%" },
      { label: "Cost Savings", value: "$2M" }
    ],
    testimonial: {
      quote: "AI sustainability solutions reduced our carbon footprint by 40% while saving $2M annually in operational costs.",
      author: "Sarah Chen",
      company: "GreenTech Industries"
    },
    tags: ["Sustainability", "Climate Change", "Green AI", "Environmental"],
    publishedDate: "2025-01-22"
  },
  {
    id: "ai-ethics-governance-framework",
    title: "⚖️ AI Ethics & Governance Framework",
    subtitle: "Building Responsible AI Systems",
    description: "Ensure your AI systems are fair, transparent, and compliant. Our comprehensive framework helps you build trust and achieve 100% regulatory compliance.",
    cta: {
      primary: "Get Framework",
      secondary: "Download Guide"
    },
    ctaUrls: {
      primary: "/services/ai-ethics-governance",
      secondary: "/blog/ai-ethics-governance-2025"
    },
    type: "feature",
    category: "AI Governance",
    featured: true,
    badge: "ESSENTIAL",
    image: "/images/banners/ai-ethics-governance.jpg",
    icon: "⚖️",
    metrics: [
      { label: "Compliance", value: "100%" },
      { label: "Risk Reduction", value: "80%" },
      { label: "Trust Score", value: "95%" }
    ],
    testimonial: {
      quote: "The AI ethics framework gave us confidence in our systems and achieved 100% compliance with all regulations.",
      author: "Robert Martinez",
      company: "SecureBank International"
    },
    tags: ["AI Ethics", "Governance", "Compliance", "Responsible AI"],
    publishedDate: "2025-01-21"
  },
  {
    id: "new-case-studies-2025",
    title: "📊 New Success Stories",
    subtitle: "Real Results from Real Companies",
    description: "Explore our latest case studies featuring autonomous vehicles, healthcare diagnostics, smart cities, and more. See how AI is transforming industries.",
    cta: {
      primary: "View Case Studies",
      secondary: "Get Consultation"
    },
    ctaUrls: {
      primary: "/case-studies",
      secondary: "/contact"
    },
    type: "new",
    category: "Case Studies",
    featured: false,
    badge: "NEW",
    image: "/images/banners/new-case-studies.jpg",
    icon: "📊",
    metrics: [
      { label: "New Studies", value: "6+" },
      { label: "Industries", value: "8" },
      { label: "Success Rate", value: "100%" }
    ],
    tags: ["Case Studies", "Success Stories", "Industry Solutions", "Results"],
    publishedDate: "2025-01-20"
  },
  {
    id: "ai-blog-series-2025",
    title: "📝 Latest AI Insights",
    subtitle: "Expert Analysis and Trends",
    description: "Stay ahead with our latest blog posts covering edge AI, quantum computing, sustainability, and ethics. Written by industry experts and thought leaders.",
    cta: {
      primary: "Read Latest Posts",
      secondary: "Subscribe"
    },
    ctaUrls: {
      primary: "/blog",
      secondary: "/newsletter"
    },
    type: "trending",
    category: "Blog",
    featured: false,
    badge: "TRENDING",
    image: "/images/banners/ai-blog-series.jpg",
    icon: "📝",
    metrics: [
      { label: "New Posts", value: "4+" },
      { label: "Expert Authors", value: "5" },
      { label: "Categories", value: "6" }
    ],
    tags: ["Blog", "AI Insights", "Expert Analysis", "Trends"],
    publishedDate: "2025-01-19"
  }
];

export const heroBanners = promotionalBanners2025.filter(banner => banner.type === 'hero');
export const featuredBanners = promotionalBanners2025.filter(banner => banner.featured);
export const trendingBanners = promotionalBanners2025.filter(banner => banner.type === 'trending');
export const newBanners = promotionalBanners2025.filter(banner => banner.type === 'new');
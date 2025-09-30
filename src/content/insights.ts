export interface Insight {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  readMinutes: number;
  featured?: boolean;
  author?: string;
  tags?: string[];
}

export const latestInsights: Insight[] = [
  {
    id: "multimodal-ai-transformation",
    title: "Multimodal AI: The Next Frontier in AI Innovation",
    summary: "Discover how unified vision-language-audio AI is transforming industries with 98% accuracy and unprecedented capabilities.",
    category: "AI Innovation",
    date: "2025-10-15",
    readMinutes: 8,
    featured: true,
    author: "Dr. Sarah Chen",
    tags: ["Multimodal AI", "Deep Learning", "Innovation"]
  },
  {
    id: "sustainable-ai-practices",
    title: "Green AI: Building Carbon-Neutral ML Systems",
    summary: "Learn how to reduce AI carbon footprint by 90% while maintaining performance through sustainable practices and optimization.",
    category: "Sustainability",
    date: "2025-10-15",
    readMinutes: 10,
    featured: true,
    author: "Michael Rodriguez",
    tags: ["Green AI", "Sustainability", "Carbon Neutral"]
  },
  {
    id: "blockchain-ai-synergy",
    title: "Blockchain Meets AI: Trustless Intelligence",
    summary: "Explore how blockchain and AI integration creates transparent, verifiable, and decentralized intelligent systems.",
    category: "Blockchain",
    date: "2025-10-15",
    readMinutes: 12,
    featured: true,
    author: "Alex Kim",
    tags: ["Blockchain", "AI", "Decentralization"]
  },
  {
    id: "ai-regulatory-landscape",
    title: "Navigating the AI Regulatory Landscape in 2025",
    summary: "Comprehensive guide to EU AI Act, GDPR, and global AI regulations ensuring 100% compliance for your AI systems.",
    category: "Compliance",
    date: "2025-10-14",
    readMinutes: 15,
    featured: true,
    author: "Jennifer Martinez",
    tags: ["Regulations", "Compliance", "Governance"]
  },
  {
    id: "automl-revolution",
    title: "AutoML: AI That Designs Itself",
    summary: "Neural architecture search and automated ML are enabling AI systems to optimize themselves 100x faster than manual approaches.",
    category: "AutoML",
    date: "2025-10-14",
    readMinutes: 11,
    featured: false,
    author: "Dr. James Wong",
    tags: ["AutoML", "Optimization", "Neural Architecture"]
  },
  {
    id: "ai-infrastructure-autonomy",
    title: "Self-Healing Infrastructure: The Future of DevOps",
    summary: "AI-powered infrastructure that self-heals, self-optimizes, and self-scales is achieving 99.99% uptime with zero manual intervention.",
    category: "Infrastructure",
    date: "2025-10-13",
    readMinutes: 9,
    featured: true,
    author: "David Park",
    tags: ["Infrastructure", "DevOps", "Automation"]
  },
  {
    id: "predictive-maintenance-roi",
    title: "Predictive Maintenance ROI: Real-World Results",
    summary: "Companies using AI predictive maintenance are seeing 85% reduction in downtime and 40% lower maintenance costs within 6 months.",
    category: "Industrial AI",
    date: "2025-10-13",
    readMinutes: 7,
    featured: true,
    author: "Emily Thompson",
    tags: ["Predictive Maintenance", "ROI", "Industrial AI"]
  },
  {
    id: "ai-talent-transformation",
    title: "How AI is Revolutionizing Talent Acquisition",
    summary: "AI-powered recruiting is matching candidates 10x faster with 95% accuracy, transforming how companies find and hire talent.",
    category: "HR Tech",
    date: "2025-10-12",
    readMinutes: 8,
    featured: false,
    author: "Robert Lee",
    tags: ["HR Tech", "Recruiting", "AI"]
  },
  {
    id: "fraud-detection-advances",
    title: "Next-Gen Fraud Detection: 99.95% Accuracy",
    summary: "Advanced AI fraud prevention systems are achieving unprecedented accuracy while reducing false positives by 95%.",
    category: "FinTech",
    date: "2025-10-12",
    readMinutes: 10,
    featured: true,
    author: "Lisa Anderson",
    tags: ["Fraud Detection", "FinTech", "Security"]
  },
  {
    id: "ai-creative-acceleration",
    title: "AI Creative Studio: 100x Faster Content Creation",
    summary: "Creative teams using AI are producing high-quality content 100x faster while reducing costs by 90%.",
    category: "Creative AI",
    date: "2025-10-11",
    readMinutes: 6,
    featured: true,
    author: "Tom Stevens",
    tags: ["Creative AI", "Content Creation", "Automation"]
  }
];
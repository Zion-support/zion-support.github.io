/**
 * New breakthrough content for 2025 - Latest AI innovations and enterprise solutions
 */

export interface BreakthroughContent2025 {
  id: string;
  slug?: string;
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
  valueProposition: string;
  metrics: {
    performance: string;
    savings: string;
    accuracy: string;
  };
}

/**
 * New breakthrough content for 2025
 */
export const newBreakthroughContent2025: BreakthroughContent2025[] = [
  {
    id: "ai-automation-2025",
    title: "Revolutionary AI Automation Solutions for 2025",
    description: "Discover the latest AI automation breakthroughs that are transforming enterprise operations",
    excerpt: "Explore cutting-edge AI automation technologies that deliver unprecedented efficiency gains",
    author: "Zion Tech Group",
    date: "2025-01-01",
    category: "AI Automation",
    tags: ["AI", "Automation", "Enterprise", "Innovation"],
    featured: true,
    readTime: "8 min",
    image: "/images/ai-automation-2025.jpg",
    newBadge: true,
    trending: true,
    valueProposition: "Transform your business with next-generation AI automation",
    metrics: {
      performance: "300% improvement",
      savings: "70% cost reduction",
      accuracy: "99.9% precision"
    }
  }
];

export default newBreakthroughContent2025;
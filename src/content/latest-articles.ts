/**
 * Latest Articles
 * Collection of the most recent and trending articles
 */

export interface Article {
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
}

/**
 * Latest articles collection
 */
export const latestArticles: Article[] = [
  {
    id: "ai-consciousness-2026",
    slug: "ai-consciousness-breakthrough-2026",
    title: "AI Consciousness Breakthrough: The Dawn of True Artificial Intelligence",
    description: "Revolutionary advances in AI consciousness that are reshaping the future of artificial intelligence",
    excerpt: "Discover the latest breakthroughs in AI consciousness that are bringing us closer to true artificial intelligence.",
    author: "Zion Tech Group",
    date: "2026-01-01",
    category: "AI Breakthroughs",
    tags: ["AI Consciousness", "Breakthrough", "Artificial Intelligence", "Future Tech"],
    featured: true,
    readTime: "12 min",
    image: "/images/ai-consciousness-2026.jpg",
    newBadge: true
  },
  {
    id: "quantum-computing-enterprise",
    slug: "quantum-computing-enterprise-solutions",
    title: "Quantum Computing for Enterprise: Real-World Applications",
    description: "How quantum computing is transforming enterprise operations and creating new opportunities",
    excerpt: "Explore how quantum computing is being applied in real enterprise environments to solve complex problems.",
    author: "Zion Tech Group",
    date: "2026-01-05",
    category: "Quantum Computing",
    tags: ["Quantum Computing", "Enterprise", "Technology", "Innovation"],
    featured: true,
    readTime: "10 min",
    image: "/images/quantum-enterprise.jpg",
    newBadge: false
  }
];

export default latestArticles;
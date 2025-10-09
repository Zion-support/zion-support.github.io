export interface NewArticle {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  category: string;
  link: string;
  readTime: string;
  tags: string[];
}

export const newArticles2025: NewArticle[] = [
  {
    id: "ai-automation-2025",
    title: "AI Automation Trends 2025: The Future of Work",
    excerpt:
      "Explore the latest trends in AI automation and how they're reshaping the workplace.",
    author: "Zion Tech Group",
    publishedAt: "2025-10-01",
    category: "AI Automation",
    link: "/blog/ai-automation-2025",
    readTime: "8 min read",
    tags: ["AI", "Automation", "Future of Work", "2025"],
  },
  {
    id: "quantum-computing-breakthrough",
    title: "Quantum Computing Breakthrough: What It Means for AI",
    excerpt:
      "Understanding the latest quantum computing advances and their impact on AI development.",
    author: "Zion Tech Group",
    publishedAt: "2025-10-02",
    category: "Quantum Computing",
    link: "/blog/quantum-computing-breakthrough",
    readTime: "12 min read",
    tags: ["Quantum Computing", "AI", "Breakthrough", "Technology"],
  },
];

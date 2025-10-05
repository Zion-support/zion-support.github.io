/**
 * New articles for 2025
 */

export interface Article2025 {
  id: string;
  title: string;
  description: string;
  category: string;
  publishedDate: string;
  featured: boolean;
  link: string;
  readTime: string;
}

/**
 * New articles for 2025
 */
export const newArticles2025: Article2025[] = [
  {
    id: "ai-trends-2025",
    title: "Top AI Trends for 2025",
    description: "Explore the most significant AI trends that will shape 2025",
    category: "AI Trends",
    publishedDate: "2025-01-01",
    featured: true,
    link: "/articles/ai-trends-2025",
    readTime: "6 min"
  }
];

export default newArticles2025;
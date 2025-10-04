export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  category: string;
  readTime: number;
  featured: boolean;
  published: boolean;
}

export const sept30BreakthroughArticles2025: Article[] = [];

export default sept30BreakthroughArticles2025;
export interface BlogPost {
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

export const blogPosts: BlogPost[] = [];

export default blogPosts;
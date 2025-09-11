export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  readTime: number;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Welcome to Our Blog',
    slug: 'welcome-to-our-blog',
    excerpt: 'This is our first blog post about our services and technology.',
    content: 'This is the full content of our first blog post...',
    featuredImage: '/images/blog/welcome.jpg',
    category: 'General',
    tags: ['welcome', 'introduction', 'technology'],
    author: 'Zion Tech Team',
    publishedAt: '2024-01-01',
    readTime: 5
  }
];
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: number;
  tags: string[];
  category: string;
  image?: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Business Automation',
    excerpt: 'Discover how artificial intelligence is revolutionizing business processes.',
    content: 'Full article content...',
    author: 'Zion Tech Team',
    publishDate: '2024-01-15',
    readTime: 5,
    tags: ['AI', 'Automation', 'Business'],
    category: 'Technology',
    featured: true
  },
  {
    id: '2',
    title: 'Cloud Infrastructure Best Practices',
    excerpt: 'Learn the essential practices for building scalable cloud infrastructure.',
    content: 'Full article content...',
    author: 'Zion Tech Team',
    publishDate: '2024-01-10',
    readTime: 8,
    tags: ['Cloud', 'Infrastructure', 'Scalability'],
    category: 'Infrastructure',
    featured: false
  }
];
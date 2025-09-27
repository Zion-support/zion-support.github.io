export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Business',
    excerpt: 'Exploring how artificial intelligence is transforming modern business operations.',
    content: 'Artificial intelligence is revolutionizing the way businesses operate...',
    author: 'Zion Team',
    publishedAt: '2024-01-15',
    tags: ['AI', 'Business', 'Technology'],
    slug: 'future-ai-business'
  },
  {
    id: '2',
    title: 'Cloud Computing Best Practices',
    excerpt: 'Essential strategies for successful cloud migration and management.',
    content: 'Cloud computing has become the backbone of modern IT infrastructure...',
    author: 'Zion Team',
    publishedAt: '2024-01-10',
    tags: ['Cloud', 'Infrastructure', 'Best Practices'],
    slug: 'cloud-computing-best-practices'
  }
];
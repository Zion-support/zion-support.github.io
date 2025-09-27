export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  imageUrl?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Business',
    excerpt: 'Exploring how artificial intelligence is transforming modern business operations.',
    content: 'Artificial intelligence is revolutionizing the way businesses operate...',
    author: 'John Smith',
    publishedAt: '2024-01-15',
    tags: ['AI', 'Business', 'Technology'],
    imageUrl: '/api/placeholder/800/400'
  },
  {
    id: '2',
    title: 'Cloud Computing Best Practices',
    excerpt: 'Essential strategies for successful cloud migration and management.',
    content: 'Cloud computing has become the backbone of modern IT infrastructure...',
    author: 'Sarah Johnson',
    publishedAt: '2024-01-10',
    tags: ['Cloud', 'Infrastructure', 'Best Practices'],
    imageUrl: '/api/placeholder/800/400'
  },
  {
    id: '3',
    title: 'Cybersecurity in 2024',
    excerpt: 'Latest trends and threats in cybersecurity and how to protect your business.',
    content: 'As technology evolves, so do the threats to our digital security...',
    author: 'Mike Chen',
    publishedAt: '2024-01-05',
    tags: ['Security', 'Cybersecurity', 'Protection'],
    imageUrl: '/api/placeholder/800/400'
  }
];

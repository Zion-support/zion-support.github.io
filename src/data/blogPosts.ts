export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  slug: string;
  featuredImage?: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Business',
    excerpt: 'Exploring how artificial intelligence is transforming modern business operations and creating new opportunities for growth.',
    content: 'Artificial intelligence is revolutionizing the way businesses operate...',
    author: 'Dr. Sarah Johnson',
    publishedAt: '2024-01-15',
    tags: ['AI', 'Business', 'Technology'],
    slug: 'future-of-ai-in-business',
    featuredImage: '/images/ai-business.jpg',
    readTime: 5
  },
  {
    id: '2',
    title: 'Cloud Computing Best Practices',
    excerpt: 'Essential strategies for implementing and managing cloud infrastructure effectively.',
    content: 'Cloud computing has become the backbone of modern digital infrastructure...',
    author: 'Mike Chen',
    publishedAt: '2024-01-10',
    tags: ['Cloud', 'Infrastructure', 'DevOps'],
    slug: 'cloud-computing-best-practices',
    featuredImage: '/images/cloud-computing.jpg',
    readTime: 7
  },
  {
    id: '3',
    title: 'Cybersecurity in 2024',
    excerpt: 'Latest trends and strategies for protecting your digital assets in an evolving threat landscape.',
    content: 'As cyber threats become more sophisticated, organizations must adapt...',
    author: 'Emily Davis',
    publishedAt: '2024-01-05',
    tags: ['Security', 'Cybersecurity', 'Technology'],
    slug: 'cybersecurity-in-2024',
    featuredImage: '/images/cybersecurity.jpg',
    readTime: 6
  }
];

export default blogPosts;
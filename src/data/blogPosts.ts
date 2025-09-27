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
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Business',
    excerpt: 'Discover how artificial intelligence is transforming modern businesses and what you need to know to stay competitive.',
    content: 'Artificial intelligence is revolutionizing the way businesses operate...',
    author: 'John Smith',
    publishedAt: '2024-01-15',
    tags: ['AI', 'Business', 'Technology'],
    slug: 'future-of-ai-in-business',
    featuredImage: '/images/blog/ai-business.jpg'
  },
  {
    id: '2',
    title: 'Cloud Computing Best Practices',
    excerpt: 'Learn the essential best practices for implementing and managing cloud computing solutions in your organization.',
    content: 'Cloud computing has become the backbone of modern IT infrastructure...',
    author: 'Sarah Johnson',
    publishedAt: '2024-01-10',
    tags: ['Cloud', 'Infrastructure', 'Best Practices'],
    slug: 'cloud-computing-best-practices',
    featuredImage: '/images/blog/cloud-computing.jpg'
  },
  {
    id: '3',
    title: 'Digital Transformation Strategies',
    excerpt: 'Explore proven strategies for successful digital transformation that drive business growth and innovation.',
    content: 'Digital transformation is more than just adopting new technologies...',
    author: 'Mike Chen',
    publishedAt: '2024-01-05',
    tags: ['Digital Transformation', 'Strategy', 'Innovation'],
    slug: 'digital-transformation-strategies',
    featuredImage: '/images/blog/digital-transformation.jpg'
  }
];
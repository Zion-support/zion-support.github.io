export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  publishedAt: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  isFeatured?: boolean;
  tags?: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Enterprise',
    excerpt: 'Exploring how artificial intelligence is transforming business operations and decision-making processes.',
    content: '# The Future of AI in Enterprise\n\nThis is a sample blog post content...',
    category: 'AI & Machine Learning',
    publishedAt: '2024-01-15',
    featuredImage: '/images/blog/ai-enterprise.jpg',
    featuredImageAlt: 'AI in enterprise environment',
    isFeatured: true,
    tags: ['AI', 'Enterprise', 'Technology']
  },
  {
    id: '2',
    title: 'Cloud Computing Best Practices',
    excerpt: 'Essential strategies for optimizing cloud infrastructure and reducing costs.',
    content: '# Cloud Computing Best Practices\n\nThis is a sample blog post content...',
    category: 'Cloud Computing',
    publishedAt: '2024-01-10',
    featuredImage: '/images/blog/cloud-computing.jpg',
    featuredImageAlt: 'Cloud computing infrastructure',
    isFeatured: false,
    tags: ['Cloud', 'Infrastructure', 'Best Practices']
  }
];
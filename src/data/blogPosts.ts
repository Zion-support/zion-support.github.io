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
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Business',
    excerpt: 'Explore how artificial intelligence is transforming modern business operations and what it means for your company.',
    content: 'Artificial intelligence is revolutionizing the way businesses operate...',
    author: 'John Smith',
    publishDate: '2024-01-15',
    readTime: 5,
    tags: ['AI', 'Business', 'Technology'],
    category: 'Artificial Intelligence',
    image: '/images/blog/ai-business.jpg',
    slug: 'future-of-ai-in-business'
  },
  {
    id: '2',
    title: 'Cloud Computing Best Practices',
    excerpt: 'Learn the essential best practices for implementing cloud solutions in your organization.',
    content: 'Cloud computing has become the backbone of modern IT infrastructure...',
    author: 'Sarah Johnson',
    publishDate: '2024-01-10',
    readTime: 7,
    tags: ['Cloud', 'Infrastructure', 'Best Practices'],
    category: 'Cloud Computing',
    image: '/images/blog/cloud-computing.jpg',
    slug: 'cloud-computing-best-practices'
  },
  {
    id: '3',
    title: 'Web Development Trends 2024',
    excerpt: 'Discover the latest trends and technologies shaping web development in 2024.',
    content: 'The web development landscape is constantly evolving...',
    author: 'Mike Chen',
    publishDate: '2024-01-05',
    readTime: 6,
    tags: ['Web Development', 'Trends', 'Technology'],
    category: 'Web Development',
    image: '/images/blog/web-development.jpg',
    slug: 'web-development-trends-2024'
  },
  {
    id: '4',
    title: 'Cybersecurity in the Digital Age',
    excerpt: 'Understanding the importance of cybersecurity and how to protect your digital assets.',
    content: 'In today\'s digital world, cybersecurity is more important than ever...',
    author: 'Emily Davis',
    publishDate: '2024-01-01',
    readTime: 8,
    tags: ['Cybersecurity', 'Security', 'Digital'],
    category: 'Cybersecurity',
    image: '/images/blog/cybersecurity.jpg',
    slug: 'cybersecurity-digital-age'
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getBlogPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags.includes(tag));
};
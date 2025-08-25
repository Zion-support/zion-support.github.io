import { BlogPost } from '@/types/blog';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
<<<<<<< HEAD
=======
<<<<<<< HEAD
    title: 'Welcome to Zion Tech Group',
    content: 'Welcome to Zion Tech Group, your premier technology solutions provider...',
    excerpt: 'Welcome to Zion Tech Group, your premier technology solutions provider...',
    author: {
      name: 'Zion Team',
      avatar: '/avatars/zion-team.jpg'
    },
    publishedAt: '2024-01-15T10:00:00Z',
    readTime: 2,
    tags: ['welcome', 'introduction'],
    image: '/images/blog-placeholder.jpg'
  },
  {
    id: '2',
    title: 'The Future of AI in Business',
    content: 'Artificial Intelligence is revolutionizing how businesses operate...',
    excerpt: 'Artificial Intelligence is revolutionizing how businesses operate...',
    author: {
      name: 'AI Expert',
      avatar: '/avatars/ai-expert.jpg'
    },
    publishedAt: '2024-01-14T15:30:00Z',
    readTime: 5,
    tags: ['AI', 'business', 'technology'],
    image: '/images/blog-placeholder.jpg'
  }
];

export const generateRandomBlogPost = (): BlogPost => {
  const titles = [
    'The Future of Technology',
    'AI Revolution in 2024',
    'Digital Transformation Guide',
    'Cybersecurity Best Practices',
    'Cloud Computing Trends'
  ];
  
  const authors = [
    { name: 'Tech Expert', avatar: '/avatars/tech-expert.jpg' },
    { name: 'AI Specialist', avatar: '/avatars/ai-specialist.jpg' },
    { name: 'Security Pro', avatar: '/avatars/security-pro.jpg' }
  ];
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    title: titles[Math.floor(Math.random() * titles.length)],
    content: 'This is a sample blog post content that demonstrates our platform capabilities...',
    excerpt: 'This is a sample blog post excerpt...',
    author: authors[Math.floor(Math.random() * titles.length)],
    publishedAt: new Date().toISOString(),
    readTime: Math.floor(Math.random() * 10) + 1,
    tags: ['sample', 'technology', 'innovation'],
    image: '/images/blog-placeholder.jpg'
  };
};
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    title: 'The Future of AI in Software Development',
    excerpt: 'Explore how artificial intelligence is revolutionizing the way we write, test, and maintain software.',
    content: 'This is a comprehensive article about the future of AI in software development...',
    author: 'Sarah Johnson',
    category: 'AI & Machine Learning',
    publishedAt: '2024-01-15T10:00:00Z',
    readTime: 8,
    tags: ['AI', 'software development', 'future'],
    slug: 'future-of-ai-in-software-development'
  },
  {
    id: '2',
    title: 'Building Scalable Microservices Architecture',
    excerpt: 'Learn the best practices for designing and implementing scalable microservices systems.',
    content: 'This article covers the fundamentals of microservices architecture...',
    author: 'Michael Chen',
    category: 'Software Architecture',
    publishedAt: '2024-01-10T14:30:00Z',
    readTime: 12,
    tags: ['microservices', 'architecture', 'scalability'],
    slug: 'building-scalable-microservices-architecture'
  },
  {
    id: '3',
    title: 'Best Practices for React Performance Optimization',
    excerpt: 'Discover techniques to make your React applications faster and more efficient.',
    content: 'Learn about React performance optimization strategies...',
    author: 'Emily Rodriguez',
    category: 'Frontend Development',
    publishedAt: '2024-01-05T09:15:00Z',
    readTime: 10,
    tags: ['React', 'performance', 'optimization'],
    slug: 'react-performance-optimization-best-practices'
  },
  {
    id: '4',
    title: 'DevOps Trends to Watch in 2024',
    excerpt: 'Stay ahead of the curve with the latest DevOps practices and tools.',
    content: 'Explore the emerging trends in DevOps for 2024...',
    author: 'David Kim',
    category: 'DevOps & Cloud',
    publishedAt: '2024-01-01T11:45:00Z',
    readTime: 7,
    tags: ['DevOps', 'trends', '2024'],
    slug: 'devops-trends-2024'
  }
<<<<<<< HEAD
];
=======
];
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

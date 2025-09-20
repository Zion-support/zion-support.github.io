export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: number;
  tags: string[];
  image?: string;
  author: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Business',
    slug: 'future-of-ai-in-business',
    excerpt: 'Discover how artificial intelligence is transforming modern business operations and what to expect in the coming years.',
    content: '# The Future of AI in Business\n\nArtificial Intelligence is revolutionizing how businesses operate...',
    date: '2024-01-15',
    readTime: 5,
    tags: ['AI', 'Business', 'Technology'],
    image: '/images/ai-business.jpg',
    author: 'John Doe'
  },
  {
    id: '2',
    title: 'Cloud Computing Best Practices',
    slug: 'cloud-computing-best-practices',
    excerpt: 'Learn the essential best practices for implementing and managing cloud infrastructure effectively.',
    content: '# Cloud Computing Best Practices\n\nCloud computing has become the backbone of modern IT infrastructure...',
    date: '2024-01-10',
    readTime: 7,
    tags: ['Cloud', 'DevOps', 'Infrastructure'],
    image: '/images/cloud-computing.jpg',
    author: 'Jane Smith'
  },
  {
    id: '3',
    title: 'Cybersecurity Trends for 2024',
    slug: 'cybersecurity-trends-2024',
    excerpt: 'Stay ahead of the latest cybersecurity threats and trends that will shape the industry in 2024.',
    content: '# Cybersecurity Trends for 2024\n\nAs technology evolves, so do the threats we face...',
    date: '2024-01-05',
    readTime: 6,
    tags: ['Cybersecurity', 'Security', 'Trends'],
    image: '/images/cybersecurity.jpg',
    author: 'Mike Johnson'
  }
];
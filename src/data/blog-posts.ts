export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  categories: string[];
  publishedAt: string;
  content?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    excerpt: 'Learn the basics of Next.js and how to build modern web applications.',
    categories: ['React', 'Next.js', 'Web Development'],
    publishedAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'Building Scalable React Applications',
    excerpt: 'Best practices for building large-scale React applications.',
    categories: ['React', 'Architecture', 'Best Practices'],
    publishedAt: '2024-01-10',
  },
  {
    id: '3',
    title: 'Introduction to TypeScript',
    excerpt: 'Why TypeScript is essential for modern JavaScript development.',
    categories: ['TypeScript', 'JavaScript', 'Development'],
    publishedAt: '2024-01-05',
  },
  {
    id: '4',
    title: 'CSS-in-JS vs Traditional CSS',
    excerpt: 'Comparing different approaches to styling in React applications.',
    categories: ['CSS', 'React', 'Styling'],
    publishedAt: '2024-01-01',
  },
  {
    id: '5',
    title: 'State Management in React',
    excerpt: 'Exploring different state management solutions for React apps.',
    categories: ['React', 'State Management', 'Redux'],
    publishedAt: '2023-12-28',
  },
  {
    id: '6',
    title: 'Performance Optimization Techniques',
    excerpt: 'Tips and tricks for optimizing React application performance.',
    categories: ['Performance', 'React', 'Optimization'],
    publishedAt: '2023-12-25',
  },
];
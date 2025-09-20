export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  author: string;
  image?: string;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    excerpt: "Learn the basics of Next.js and how to build your first application.",
    content: "This is a comprehensive guide to getting started with Next.js...",
    publishedAt: "2024-01-15",
    readTime: "5",
    tags: ["Next.js", "React", "JavaScript"],
    author: "John Doe",
    featured: true
  },
  {
    id: "2",
    title: "Advanced React Patterns",
    slug: "advanced-react-patterns",
    excerpt: "Explore advanced patterns and techniques in React development.",
    content: "In this article, we'll cover advanced React patterns...",
    publishedAt: "2024-01-10",
    readTime: "8",
    tags: ["React", "JavaScript", "Patterns"],
    author: "Jane Smith"
  },
  {
    id: "3",
    title: "Building Scalable Applications",
    slug: "building-scalable-applications",
    excerpt: "Tips and strategies for building applications that scale.",
    content: "Scaling applications requires careful planning...",
    publishedAt: "2024-01-05",
    readTime: "6",
    tags: ["Architecture", "Scalability", "Best Practices"],
    author: "Mike Johnson"
  }
];
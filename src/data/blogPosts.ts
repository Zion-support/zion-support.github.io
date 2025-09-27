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
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "The Future of AI in Business Automation",
    excerpt: "Discover how artificial intelligence is revolutionizing business processes and driving unprecedented efficiency gains across industries.",
    content: `
      <p>Artificial Intelligence is transforming the business landscape at an unprecedented pace. From automating routine tasks to providing deep insights through data analysis, AI is becoming an essential tool for modern enterprises.</p>
      
      <h2>Key Areas of AI Implementation</h2>
      <ul>
        <li><strong>Process Automation:</strong> Streamlining repetitive tasks and workflows</li>
        <li><strong>Predictive Analytics:</strong> Forecasting trends and customer behavior</li>
        <li><strong>Natural Language Processing:</strong> Enhancing customer service and communication</li>
        <li><strong>Computer Vision:</strong> Improving quality control and security</li>
      </ul>
      
      <p>As we look ahead, the integration of AI into business operations will continue to accelerate, creating new opportunities for innovation and growth.</p>
    `,
    author: "Dr. Sarah Chen",
    publishDate: "2024-01-15",
    readTime: 5,
    tags: ["AI", "Automation", "Business", "Technology"],
    category: "Technology",
    featured: true
  },
  {
    id: '2',
    title: "Building Scalable Web Applications with Modern Frameworks",
    excerpt: "Learn the best practices for creating web applications that can handle millions of users while maintaining performance and reliability.",
    content: `
      <p>Modern web development requires careful consideration of scalability from the ground up. This comprehensive guide covers the essential strategies and technologies needed to build applications that can grow with your business.</p>
      
      <h2>Key Principles</h2>
      <ul>
        <li><strong>Microservices Architecture:</strong> Breaking down applications into manageable, independent services</li>
        <li><strong>Database Optimization:</strong> Implementing efficient data storage and retrieval strategies</li>
        <li><strong>Caching Strategies:</strong> Reducing load times and server strain</li>
        <li><strong>Load Balancing:</strong> Distributing traffic across multiple servers</li>
      </ul>
      
      <p>By following these principles, developers can create robust applications that scale efficiently and provide excellent user experiences.</p>
    `,
    author: "Michael Rodriguez",
    publishDate: "2024-01-10",
    readTime: 8,
    tags: ["Web Development", "Scalability", "Architecture", "Performance"],
    category: "Development",
    featured: false
  }
];
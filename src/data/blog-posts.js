export const blogPosts = [
  {
    id: 1,
    title: "The Future of IT Asset Management: AI-Powered Solutions",
    excerpt: "Discover how artificial intelligence is revolutionizing the way organizations track, manage, and optimize their IT assets.",
    content: "Artificial intelligence is transforming every aspect of business operations, and IT asset management is no exception. With AI-powered solutions, organizations can now achieve unprecedented levels of efficiency, accuracy, and cost savings in managing their technology infrastructure...",
    author: "Sarah Chen",
    authorRole: "IT Director",
    publishDate: "2024-01-15",
    readTime: "5 min read",
    category: "Technology Trends",
    tags: ["AI", "Asset Management", "Digital Transformation"],
    featured: true,
    imageUrl: "/images/blog/ai-asset-management.jpg",
    slug: "future-of-it-asset-management-ai-powered-solutions"
  },
  {
    id: 2,
    title: "Best Practices for Enterprise IT Asset Tracking",
    excerpt: "Learn the essential strategies and tools for effective IT asset tracking in large-scale enterprise environments.",
    content: "Enterprise IT asset tracking presents unique challenges that require specialized approaches and robust solutions. From multi-location deployments to complex compliance requirements, organizations need comprehensive strategies to maintain visibility and control...",
    author: "Marcus Rodriguez",
    authorRole: "Systems Administrator",
    publishDate: "2024-01-10",
    readTime: "7 min read",
    category: "Best Practices",
    tags: ["Enterprise", "Asset Tracking", "Compliance"],
    featured: false,
    imageUrl: "/images/blog/enterprise-tracking.jpg",
    slug: "best-practices-enterprise-it-asset-tracking"
  },
  {
    id: 3,
    title: "Mobile-First Approach to IT Asset Management",
    excerpt: "Explore how mobile applications are enabling field technicians and IT professionals to manage assets on the go.",
    content: "The modern workforce is increasingly mobile, and IT asset management solutions must adapt to this reality. Mobile-first approaches provide real-time access to asset information, enabling faster decision-making and improved operational efficiency...",
    author: "Emily Watson",
    authorRole: "IT Manager",
    publishDate: "2024-01-05",
    readTime: "6 min read",
    category: "Mobile Solutions",
    tags: ["Mobile", "Field Service", "Real-time"],
    featured: true,
    imageUrl: "/images/blog/mobile-asset-management.jpg",
    slug: "mobile-first-approach-it-asset-management"
  },
  {
    id: 4,
    title: "Cost Optimization Through Intelligent Asset Lifecycle Management",
    excerpt: "Discover strategies for reducing IT costs through better understanding and management of asset lifecycles.",
    content: "IT assets represent significant investments for organizations, and optimizing their lifecycle management can lead to substantial cost savings. By implementing intelligent tracking and predictive maintenance strategies...",
    author: "David Kim",
    authorRole: "IT Operations Manager",
    publishDate: "2023-12-28",
    readTime: "8 min read",
    category: "Cost Management",
    tags: ["Cost Optimization", "Lifecycle Management", "ROI"],
    featured: false,
    imageUrl: "/images/blog/cost-optimization.jpg",
    slug: "cost-optimization-intelligent-asset-lifecycle-management"
  },
  {
    id: 5,
    title: "Security Considerations in IT Asset Management",
    excerpt: "Understand the critical security aspects that must be addressed when implementing IT asset management solutions.",
    content: "As IT assets become more interconnected and data-driven, security considerations become paramount. Organizations must implement robust security measures to protect sensitive information and maintain compliance...",
    author: "Lisa Thompson",
    authorRole: "Security Specialist",
    publishDate: "2023-12-20",
    readTime: "9 min read",
    category: "Security",
    tags: ["Security", "Compliance", "Data Protection"],
    featured: true,
    imageUrl: "/images/blog/security-considerations.jpg",
    slug: "security-considerations-it-asset-management"
  },
  {
    id: 6,
    title: "Integration Strategies for IT Asset Management Systems",
    excerpt: "Learn how to seamlessly integrate IT asset management with existing enterprise systems and workflows.",
    content: "Successful IT asset management implementation requires careful consideration of integration strategies. Organizations must ensure that new solutions work harmoniously with existing systems while providing enhanced functionality...",
    author: "Robert Johnson",
    authorRole: "Integration Architect",
    publishDate: "2023-12-15",
    readTime: "6 min read",
    category: "Integration",
    tags: ["Integration", "Enterprise Systems", "Workflow"],
    featured: false,
    imageUrl: "/images/blog/integration-strategies.jpg",
    slug: "integration-strategies-it-asset-management-systems"
  }
];

export const getBlogPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category) => {
  return blogPosts.filter(post => post.category === category);
};

export const getFeaturedBlogPosts = () => {
  return blogPosts.filter(post => post.featured);
};

export const getRecentBlogPosts = (limit = 3) => {
  return blogPosts
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
    .slice(0, limit);
};

export const searchBlogPosts = (query) => {
  const searchTerm = query.toLowerCase();
  return blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.content.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

export const getBlogCategories = () => {
  const categories = [...new Set(blogPosts.map(post => post.category))];
  return categories.map(category => ({
    name: category,
    count: blogPosts.filter(post => post.category === category).length
  }));
};

export const getBlogTags = () => {
  const allTags = blogPosts.flatMap(post => post.tags);
  const uniqueTags = [...new Set(allTags)];
  return uniqueTags.map(tag => ({
    name: tag,
    count: allTags.filter(t => t === tag).length
  }));
};

export const BLOG_POSTS = blogPosts;
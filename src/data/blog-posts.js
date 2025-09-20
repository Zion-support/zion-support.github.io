export const blogPosts = [
  {
    id: 1,tit,
  l: e: "The Future of IT Asset Managemen,
  t: AI-Powered Solutions",excer,
  p: t: "Discover how artificial intelligence is revolutionizing the way organizations track, manage, and optimize their IT assets."
    conte,
  n: t: "Artificial intelligence is transforming every aspect of business operations, and IT asset management is no exception. With AI-powered solutions, organizations can now achieve unprecedented levels of efficiency, accuracy, and cost savings in managing their technology infrastructure..."
    auth,
  o: r: "Sarah Chen",authorRo,
  l: e: "IT Director",publishDa,
  t: e: "2024-01-15",readTi,
  m: e: "5 min read",catego,
  r: y: "Technology Trends",ta,
  g: s: ["AI", "Asset Management", "Digital Transformation"]
    featur,
  e: d: true,imageU,
  r: l: "/images/blog/ai-asset-management.jpg",sl,
  u: g: "future-of-it-asset-management-ai-powered-solutions"
  }, {
    id: 2,tit,
  l: e: "Best Practices for Enterprise IT Asset Tracking",excer,
  p: t: "Learn the essential strategies and tools for effective IT asset tracking in large-scale enterprise environments.",conte,
  n: t: "Enterprise IT asset tracking presents unique challenges that require specialized approaches and robust solutions. From multi-location deployments to complex compliance requirements, organizations need comprehensive strategies to maintain visibility and control..."
    auth,
  o: r: "Marcus Rodriguez",authorRo,
  l: e: "Systems Administrator",publishDa,
  t: e: "2024-01-10",readTi,
  m: e: "7 min read",catego,
  r: y: "Best Practices",ta,
  g: s: ["Enterprise", "Asset Tracking", "Compliance"]
    featur,
  e: d: false,imageU,
  r: l: "/images/blog/enterprise-tracking.jpg",sl,
  u: g: "best-practices-enterprise-it-asset-tracking"
  }, {
    id: 3,tit,
  l: e: "Mobile-First Approach to IT Asset Management",excer,
  p: t: "Explore how mobile applications are enabling field technicians and IT professionals to manage assets on the go.",conte,
  n: t: "The modern workforce is increasingly mobile, and IT asset management solutions must adapt to this reality. Mobile-first approaches provide real-time access to asset information, enabling faster decision-making and improved operational efficiency..."
    auth,
  o: r: "Emily Watson",authorRo,
  l: e: "IT Manager",publishDa,
  t: e: "2024-01-05",readTi,
  m: e: "6 min read",catego,
  r: y: "Mobile Solutions",ta,
  g: s: ["Mobile", "Field Service", "Real-time"]
    featur,
  e: d: true,imageU,
  r: l: "/images/blog/mobile-asset-management.jpg",sl,
  u: g: "mobile-first-approach-it-asset-management"
  }, {
    id: 4,tit,
  l: e: "Cost Optimization Through Intelligent Asset Lifecycle Management",excer,
  p: t: "Discover strategies for reducing IT costs through better understanding and management of asset lifecycles.",conte,
  n: t: "IT assets represent significant investments for organizations, and optimizing their lifecycle management can lead to substantial cost savings. By implementing intelligent tracking and predictive maintenance strategies..."
    auth,
  o: r: "David Kim",authorRo,
  l: e: "IT Operations Manager",publishDa,
  t: e: "2023-12-28",readTi,
  m: e: "8 min read",catego,
  r: y: "Cost Management",ta,
  g: s: ["Cost Optimization", "Lifecycle Management", "ROI"]
    featur,
  e: d: false,imageU,
  r: l: "/images/blog/cost-optimization.jpg",sl,
  u: g: "cost-optimization-intelligent-asset-lifecycle-management"
  }, {
    id: 5,tit,
  l: e: "Security Considerations in IT Asset Management",excer,
  p: t: "Understand the critical security aspects that must be addressed when implementing IT asset management solutions.",conte,
  n: t: "As IT assets become more interconnected and data-driven, security considerations become paramount. Organizations must implement robust security measures to protect sensitive information and maintain compliance..."
    auth,
  o: r: "Lisa Thompson",authorRo,
  l: e: "Security Specialist",publishDa,
  t: e: "2023-12-20",readTi,
  m: e: "9 min read",catego,
  r: y: "Security",ta,
  g: s: ["Security", "Compliance", "Data Protection"]
    featur,
  e: d: true,imageU,
  r: l: "/images/blog/security-considerations.jpg",sl,
  u: g: "security-considerations-it-asset-management"
  }, {
    id: 6,tit,
  l: e: "Integration Strategies for IT Asset Management Systems",excer,
  p: t: "Learn how to seamlessly integrate IT asset management with existing enterprise systems and workflows.",conte,
  n: t: "Successful IT asset management implementation requires careful consideration of integration strategies. Organizations must ensure that new solutions work harmoniously with existing systems while providing enhanced functionality...",auth,
  o: r: "Robert Johnson",authorRo,
  l: e: "Integration Architect",publishDa,
  t: e: "2023-12-15",readTi,
  m: e: "6 min read",catego,
  r: y: "Integration",ta,
  g: s: ["Integration", "Enterprise Systems", "Workflow"]
    featur,
  e: d: false,imageU,
  r: l: "/images/blog/integration-strategies.jpg",sl,
  u: g: "integration-strategies-it-asset-management-systems"
  }
]
export const getBlogPostBySlug = (slug) () => {
  return blogPosts.find(post => post.slug === slug)
}

export const getBlogPostsByCategory = (category) () => {
  return blogPosts.filter(post => post.category === category)
}

export const getFeaturedBlogPosts = () () => {
  return blogPosts.filter(post => post.featured)
}

export const getRecentBlogPosts = (limit = 3) () => {
  return blogPosts
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
    .slice(0, limit)
}

export const searchBlogPosts = (query) () => {
  const searchTerm = query.toLowerCase()
  return blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.content.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  )
}
export const getBlogCategories = () () => {
  const categories = [[...new Set(blogPosts.map(post => post.category))];]
  return categories.map(category => ({
    na,
  m: e: category,cou,
  n: t: blogPosts.filter(post => post.category === category).length
  }))
}

export const getBlogTags = () () => {
  const allTags = blogPosts.flatMap(post => post.tags)
  const uniqueTags = [[...new Set(allTags)];]
  return uniqueTags.map(tag => ({
    na,
  m: e: tag,cou,
  n: t: allTags.filter(t => t === tag).length
  }))
}

export const BLOG_POSTS = blogPosts
import React, { useState } from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  category: string;
  readTime: string;
  date: string;
  badge: string;
  featured: boolean;
  tags: string[];
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'ai-advanced-automation',
    title: "AI Advanced Automation 2025: Complete Implementation Guide",
    description: "Master advanced AI automation with comprehensive strategies, best practices, and real-world case studies for enterprise success.",
    href: "/blog/ai-2025-advanced-automation",
    icon: "🤖",
    category: "AI Automation",
    readTime: "25 min read",
    date: "Jan 30, 2025",
    badge: "NEW",
    featured: true,
    tags: ["automation", "implementation", "enterprise", "AI"],
    author: "Zion Tech Group"
  },
  {
    id: 'ai-cybersecurity-threats',
    title: "AI Cybersecurity Threats 2025: Complete Defense Guide",
    description: "Protect your organization from emerging AI cybersecurity threats with advanced defense strategies and security best practices.",
    href: "/blog/ai-2025-cybersecurity-threats",
    icon: "🛡️",
    category: "Cybersecurity",
    readTime: "22 min read",
    date: "Jan 30, 2025",
    badge: "NEW",
    featured: true,
    tags: ["security", "cybersecurity", "AI threats", "defense"],
    author: "Zion Tech Group"
  },
  {
    id: 'breakthrough-innovations',
    title: "AI Breakthrough Innovations 2025: Revolutionary Technologies",
    description: "Discover the most groundbreaking AI innovations reshaping industries and creating unprecedented opportunities.",
    href: "/blog/ai-2025-breakthrough-innovations",
    icon: "🚀",
    category: "AI Innovations",
    readTime: "25 min read",
    date: "Jan 28, 2025",
    badge: "TRENDING",
    featured: true,
    tags: ["innovation", "technology", "future", "trends"],
    author: "Zion Tech Group"
  },
  {
    id: 'sustainability-green-tech',
    title: "AI Sustainability & Green Tech 2025: Building Eco-Friendly Systems",
    description: "Learn how AI is driving sustainability initiatives and reducing carbon footprints across industries.",
    href: "/blog/ai-sustainability-green-tech-2025",
    icon: "🌱",
    category: "Sustainability",
    readTime: "20 min read",
    date: "Jan 28, 2025",
    badge: "NEW",
    featured: false,
    tags: ["sustainability", "green tech", "environment", "AI"],
    author: "Zion Tech Group"
  },
  {
    id: 'workforce-transformation',
    title: "AI Workforce Transformation 2025: Complete Reskilling Guide",
    description: "Comprehensive guide to workforce transformation strategies for the AI era, including reskilling programs and change management.",
    href: "/blog/ai-workforce-transformation-2025",
    icon: "👥",
    category: "Workforce",
    readTime: "18 min read",
    date: "Jan 25, 2025",
    badge: "POPULAR",
    featured: false,
    tags: ["workforce", "transformation", "reskilling", "change management"],
    author: "Zion Tech Group"
  },
  {
    id: 'robotics-automation',
    title: "AI Robotics & Automation 2025: The Future of Intelligent Machines",
    description: "Explore the revolutionary advances in AI-powered robotics and automation technologies transforming manufacturing and services.",
    href: "/blog/ai-robotics-automation-2025",
    icon: "🤖",
    category: "Robotics",
    readTime: "22 min read",
    date: "Jan 28, 2025",
    badge: "NEW",
    featured: false,
    tags: ["robotics", "automation", "manufacturing", "intelligent machines"],
    author: "Zion Tech Group"
  },
  {
    id: 'implementation-framework',
    title: "AI Implementation Success Framework 2025: From Strategy to Governance",
    description: "Discover comprehensive AI implementation framework with proven strategies for successful AI adoption across organizations.",
    href: "/blog/ai-implementation-success-framework-2025",
    icon: "✅",
    category: "AI Strategy",
    readTime: "18 min read",
    date: "Feb 01, 2025",
    badge: "FEATURED",
    featured: false,
    tags: ["implementation", "framework", "strategy", "governance"],
    author: "Zion Tech Group"
  },
  {
    id: 'data-privacy-compliance',
    title: "AI Data Privacy & Compliance 2025: Complete Guide to Regulations",
    description: "Navigate the complex landscape of AI data privacy regulations and compliance requirements with practical implementation guidance.",
    href: "/blog/ai-data-privacy-compliance-2025",
    icon: "🔒",
    category: "Compliance",
    readTime: "22 min read",
    date: "Jan 20, 2025",
    badge: "ESSENTIAL",
    featured: false,
    tags: ["privacy", "compliance", "regulations", "data protection"],
    author: "Zion Tech Group"
  },
  {
    id: 'customer-support-automation',
    title: "AI Customer Support Automation 2025: Resolve Faster, Cut Costs",
    description: "Transform customer support with AI automation strategies that improve response times while reducing operational costs.",
    href: "/blog/ai-customer-support-automation-2025",
    icon: "🎧",
    category: "Customer Experience",
    readTime: "9 min read",
    date: "Jan 18, 2025",
    badge: "QUICK READ",
    featured: false,
    tags: ["customer support", "automation", "CX", "cost reduction"],
    author: "Zion Tech Group"
  },
  {
    id: 'llm-guardrails',
    title: "LLM Guardrails in Production: Safety Without Blocking Delivery",
    description: "Implement effective guardrails for Large Language Models in production environments while maintaining performance and usability.",
    href: "/blog/llm-guardrails-in-production-2025",
    icon: "🛡️",
    category: "AI Engineering",
    readTime: "8 min read",
    date: "Jan 15, 2025",
    badge: "TRENDING",
    featured: false,
    tags: ["LLM", "guardrails", "production", "safety"],
    author: "Zion Tech Group"
  },
  {
    id: 'edge-ai-privacy',
    title: "Edge AI: Privacy by Design - On-Device Intelligence for Instant CX",
    description: "Explore edge AI solutions that deliver instant, compliant customer experiences through privacy-first on-device intelligence.",
    href: "/blog/edge-ai-privacy-by-design-2025",
    icon: "🔐",
    category: "Edge Computing",
    readTime: "7 min read",
    date: "Jan 12, 2025",
    badge: "NEW",
    featured: false,
    tags: ["edge AI", "privacy", "on-device", "customer experience"],
    author: "Zion Tech Group"
  },
  {
    id: 'ai-go-to-market',
    title: "AI Go-To-Market 2025: From Zero to Traction Playbook",
    description: "Complete guide to launching AI products successfully with proven go-to-market strategies and customer acquisition tactics.",
    href: "/blog/ai-go-to-market-2025",
    icon: "📈",
    category: "Growth & Marketing",
    readTime: "12 min read",
    date: "Jan 10, 2025",
    badge: "POPULAR",
    featured: false,
    tags: ["go-to-market", "AI products", "growth", "marketing"],
    author: "Zion Tech Group"
  }
];

const categories = [
  { id: 'all', label: 'All Articles', count: blogPosts.length },
  { id: 'AI Automation', label: 'AI Automation', count: blogPosts.filter(post => post.category === 'AI Automation').length },
  { id: 'Cybersecurity', label: 'Cybersecurity', count: blogPosts.filter(post => post.category === 'Cybersecurity').length },
  { id: 'AI Innovations', label: 'AI Innovations', count: blogPosts.filter(post => post.category === 'AI Innovations').length },
  { id: 'Sustainability', label: 'Sustainability', count: blogPosts.filter(post => post.category === 'Sustainability').length },
  { id: 'Workforce', label: 'Workforce', count: blogPosts.filter(post => post.category === 'Workforce').length },
  { id: 'Robotics', label: 'Robotics', count: blogPosts.filter(post => post.category === 'Robotics').length },
  { id: 'AI Strategy', label: 'AI Strategy', count: blogPosts.filter(post => post.category === 'AI Strategy').length },
  { id: 'Compliance', label: 'Compliance', count: blogPosts.filter(post => post.category === 'Compliance').length },
  { id: 'Customer Experience', label: 'Customer Experience', count: blogPosts.filter(post => post.category === 'Customer Experience').length },
  { id: 'AI Engineering', label: 'AI Engineering', count: blogPosts.filter(post => post.category === 'AI Engineering').length },
  { id: 'Edge Computing', label: 'Edge Computing', count: blogPosts.filter(post => post.category === 'Edge Computing').length },
  { id: 'Growth & Marketing', label: 'Growth & Marketing', count: blogPosts.filter(post => post.category === 'Growth & Marketing').length }
];

const badges = {
  'NEW': 'bg-green-500 text-white',
  'TRENDING': 'bg-red-500 text-white',
  'POPULAR': 'bg-purple-500 text-white',
  'FEATURED': 'bg-blue-500 text-white',
  'ESSENTIAL': 'bg-orange-500 text-white',
  'QUICK READ': 'bg-cyan-500 text-white'
};

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI & Technology Blog - Expert Insights & Analysis | Zion Tech Group"
        description="Stay ahead with our comprehensive AI and technology blog. Expert insights, implementation guides, and industry analysis to accelerate your digital transformation."
        keywords="AI blog, technology insights, AI articles, tech analysis, digital transformation, AI trends"
        url="/blog"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">📚 EXPERT INSIGHTS</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI & Technology Blog
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay ahead with expert insights, implementation guides, and industry analysis. 
            Discover the latest trends, best practices, and real-world case studies in AI and technology.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400">🔍</span>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 8).map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
              {categories.length > 8 && (
                <div className="relative group">
                  <button className="px-3 py-2 rounded-lg font-medium text-sm bg-gray-100 text-gray-700 hover:bg-gray-200">
                    More +
                  </button>
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                    <div className="p-2">
                      {categories.slice(8).map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                            selectedCategory === category.id
                              ? 'bg-blue-100 text-blue-700'
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          {category.label} ({category.count})
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Featured Articles */}
        {selectedCategory === 'all' && searchTerm === '' && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">⭐ Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Link key={post.id} href={post.href} className="group">
                  <article className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl group-hover:scale-110 transition-transform">{post.icon}</div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${badges[post.badge as keyof typeof badges]}`}>
                          {post.badge}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{post.date}</span>
                        <span className="text-blue-600 font-medium group-hover:underline">
                          Read Article →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Articles */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.id === selectedCategory)?.label}
            </h2>
            <span className="text-gray-500">{filteredPosts.length} articles</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.id} href={post.href} className="group">
                <article className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform">{post.icon}</div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${badges[post.badge as keyof typeof badges]}`}>
                          {post.badge}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>By {post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="text-xs text-gray-500">+{post.tags.length - 3} more</span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{post.date}</span>
                      <span className="text-blue-600 font-medium group-hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Never Miss an Update</h3>
          <p className="text-lg opacity-90 mb-6">
            Get our latest articles, insights, and resources delivered straight to your inbox. 
            Join 10,000+ AI professionals who trust our content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            No spam. Unsubscribe anytime. Read our privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}
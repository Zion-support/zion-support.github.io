import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import ResponsiveContainer from '../components/ResponsiveContainer';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Discover how artificial intelligence is transforming business operations and what to expect in 2024.",
      content: "Artificial intelligence continues to revolutionize how businesses operate, from customer service automation to predictive analytics. In 2024, we're seeing unprecedented adoption of AI technologies across industries...",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI & Technology",
      image: "/api/placeholder/600/300",
      featured: true
    },
    {
      id: 2,
      title: "5G Implementation: A Complete Guide for Enterprises",
      excerpt: "Everything you need to know about implementing 5G technology in your enterprise infrastructure.",
      content: "5G technology promises to revolutionize enterprise connectivity with ultra-low latency and massive bandwidth capabilities. This comprehensive guide covers everything from planning to deployment...",
      author: "Michael Rodriguez",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "5G & Connectivity",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 3,
      title: "Micro SAAS: The Future of Software Distribution",
      excerpt: "How micro SAAS solutions are changing the software industry and creating new opportunities for businesses.",
      content: "Micro SAAS represents a paradigm shift in how software is developed, distributed, and consumed. These focused, specialized solutions offer businesses exactly what they need without the complexity...",
      author: "Emily Watson",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Micro SAAS",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 4,
      title: "Cybersecurity in the Age of AI: Best Practices for 2024",
      excerpt: "Essential cybersecurity strategies for protecting your business in an AI-driven world.",
      content: "As AI becomes more prevalent in business operations, cybersecurity strategies must evolve to address new threats and vulnerabilities. This article explores the latest best practices...",
      author: "James Wilson",
      date: "2024-01-08",
      readTime: "10 min read",
      category: "Cybersecurity",
      image: "/api/placeholder/600/300",
      featured: true
    },
    {
      id: 5,
      title: "Digital Transformation: A Step-by-Step Guide",
      excerpt: "Learn how to successfully navigate digital transformation in your organization.",
      content: "Digital transformation is more than just adopting new technologies—it's about fundamentally changing how your organization operates and delivers value to customers...",
      author: "Lisa Thompson",
      date: "2024-01-05",
      readTime: "15 min read",
      category: "Digital Transformation",
      image: "/api/placeholder/600/300",
      featured: false
    },
    {
      id: 6,
      title: "The Rise of Edge Computing: What It Means for Your Business",
      excerpt: "Understanding edge computing and its implications for modern business operations.",
      content: "Edge computing is bringing data processing closer to where it's needed, enabling real-time decision making and reducing latency. This technology is particularly important for IoT applications...",
      author: "David Kim",
      date: "2024-01-03",
      readTime: "7 min read",
      category: "Edge Computing",
      image: "/api/placeholder/600/300",
      featured: false
    }
  ];

  const categories = [
    "All",
    "AI & Technology",
    "5G & Connectivity",
    "Micro SAAS",
    "Cybersecurity",
    "Digital Transformation",
    "Edge Computing"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Blog - Zion Tech Group | Technology Insights and Industry News"
        description="Stay updated with the latest insights on AI, 5G, micro SAAS, cybersecurity, and digital transformation from Zion Tech Group experts."
        keywords="technology blog, AI insights, 5G technology, micro SAAS, cybersecurity, digital transformation, tech news"
        canonical="https://ziontechgroup.com/blog"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Technology Insights
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay ahead with the latest insights on AI, 5G, micro SAAS, cybersecurity, and digital transformation from our expert team.
          </p>
        </ResponsiveContainer>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "All" && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {blogPosts.filter(post => post.featured).map((post) => (
                <FuturisticCard key={post.id} className="group hover:scale-105 transition-all duration-300">
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-6xl opacity-50">📝</div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">{post.author}</span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <FuturisticCard key={post.id} className="group hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <div className="w-full h-40 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-4xl opacity-50">📄</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">{post.author}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest technology insights and industry news delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
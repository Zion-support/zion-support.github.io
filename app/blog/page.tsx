'use client';
import React from 'react';
import { Calendar, Clock, User, ArrowRight, Search, Filter, Tag } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "AI 2025-2026 Mega Trends Breakthrough",
      excerpt: "Discover the revolutionary AI trends that will reshape enterprise technology in 2025-2026, including quantum AI, autonomous systems, and advanced neural architectures.",
      author: "Kleber Johnson",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "AI Trends",
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      title: "Autonomous Enterprise Operations Revolution",
      excerpt: "How AI-powered autonomous systems are transforming enterprise operations, reducing costs by 70% and increasing efficiency by 300%.",
      author: "Sarah Mitchell",
      date: "2025-01-10",
      readTime: "6 min read",
      category: "Enterprise AI",
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 3,
      title: "Quantum Computing Breakthrough 2026",
      excerpt: "The latest advances in quantum computing and how they're revolutionizing AI algorithms, data processing, and computational capabilities.",
      author: "David Rodriguez",
      date: "2025-01-05",
      readTime: "10 min read",
      category: "Quantum Computing",
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 4,
      title: "AI-Powered Business Process Automation",
      excerpt: "Learn how to implement AI automation in your business processes to achieve unprecedented levels of efficiency and cost savings.",
      author: "Kleber Johnson",
      date: "2024-12-28",
      readTime: "7 min read",
      category: "Automation",
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 5,
      title: "Consensus Intelligence: The Future of AI",
      excerpt: "Exploring the next generation of AI systems that use consensus mechanisms to make more accurate and reliable decisions.",
      author: "Sarah Mitchell",
      date: "2024-12-20",
      readTime: "9 min read",
      category: "AI Research",
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 6,
      title: "Enterprise AI Transformation Guide 2025",
      excerpt: "A comprehensive guide to transforming your enterprise with AI, including strategy, implementation, and best practices.",
      author: "David Rodriguez",
      date: "2024-12-15",
      readTime: "12 min read",
      category: "Enterprise AI",
      image: "/api/placeholder/600/400",
      featured: false
    }
  ];

  const categories = ["All", "AI Trends", "Enterprise AI", "Quantum Computing", "Automation", "AI Research", "Case Studies"];

  return (
    <>
      <SEOEnhancer
        title="AI & Technology Blog - Zion Tech Group"
        description="Stay updated with the latest AI trends, quantum computing breakthroughs, and enterprise technology insights from Zion Tech Group's expert team."
        keywords={['ai blog', 'technology blog', 'ai trends', 'quantum computing', 'enterprise ai', 'ai research', 'automation']}
        canonicalUrl="https://ziontechgroup.com/blog"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI & Technology Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Stay ahead of the curve with insights from our expert team on AI trends, 
              quantum computing breakthroughs, and enterprise technology innovations.
            </p>
          </section>

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="cyber-card p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Filter className="text-gray-400 w-5 h-5" />
                    <select className="bg-slate-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400">
                      <option value="">All Categories</option>
                      {categories.slice(1).map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Posts */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 neon-text">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post) => (
                <article key={post.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">Featured Article</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm">
                      {post.category}
                    </span>
                    <a
                      href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* All Posts */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 neon-text">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">Article Image</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-purple-400/20 text-purple-400 rounded-full text-xs">
                      {post.category}
                    </span>
                    <a
                      href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mb-16">
            <div className="cyber-card p-8 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Stay Updated</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Get the latest AI insights, technology trends, and industry updates delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
                <button className="cyber-button px-6 py-3 font-semibold hover:scale-105 transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </section>

          {/* Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 neon-text">Browse by Category</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-slate-800 hover:bg-cyan-400 hover:text-slate-900 text-gray-300 rounded-lg transition-all duration-300 flex items-center gap-2"
                >
                  <Tag className="w-4 h-4" />
                  {category}
                </button>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
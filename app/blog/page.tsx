'use client';
import React from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Search, Filter, Clock, TrendingUp, BookOpen } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'AI 2025-2026 Mega Trends Breakthrough',
      excerpt: 'Discover the revolutionary AI trends that will reshape industries in 2025-2026',
      date: '2025-01-15',
      author: 'Zion Tech Team',
      readTime: '8 min read',
      category: 'AI Trends',
      slug: 'ai-2025-2026-mega-trends-breakthrough',
      featured: true
    },
    {
      title: 'Autonomous Enterprise Operations Revolution',
      excerpt: 'How autonomous systems are transforming enterprise operations and workflows',
      date: '2025-01-10',
      author: 'Zion Tech Team',
      readTime: '6 min read',
      category: 'Enterprise AI',
      slug: 'ai-2025-march-autonomous-enterprise-operations-revolution',
      featured: true
    },
    {
      title: 'Quantum-Enhanced Neural Networks 2025',
      excerpt: 'Exploring the intersection of quantum computing and neural network architectures',
      date: '2025-01-08',
      author: 'Zion Tech Team',
      readTime: '10 min read',
      category: 'Quantum Computing',
      slug: 'ai-2025-january-advanced-ai-revolution',
      featured: false
    },
    {
      title: 'AI Cost Optimization Breakthrough 2026',
      excerpt: 'Revolutionary methods to reduce AI implementation costs while maximizing ROI',
      date: '2025-01-05',
      author: 'Zion Tech Team',
      readTime: '7 min read',
      category: 'AI Business',
      slug: 'ai-cost-optimization-breakthrough-2026',
      featured: false
    },
    {
      title: 'Consensus Intelligence Breakthrough',
      excerpt: 'How consensus mechanisms are revolutionizing AI decision-making processes',
      date: '2025-01-03',
      author: 'Zion Tech Team',
      readTime: '9 min read',
      category: 'AI Research',
      slug: 'ai-2026-consensus-intelligence-breakthrough',
      featured: false
    },
    {
      title: 'Hyperconscious Computing Revolution',
      excerpt: 'The next frontier in AI: achieving hyperconscious computing capabilities',
      date: '2025-01-01',
      author: 'Zion Tech Team',
      readTime: '12 min read',
      category: 'Future Tech',
      slug: 'ai-2026-hyperconscious-computing-revolution',
      featured: false
    }
  ];

  const categories = [
    'All Posts',
    'AI Trends',
    'Enterprise AI',
    'Quantum Computing',
    'AI Business',
    'AI Research',
    'Future Tech',
    'Case Studies'
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI & Tech <span className="text-cyan-400">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay updated with the latest insights, trends, and breakthroughs in AI, quantum computing, 
            and digital transformation from our expert team.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === 0
                      ? 'bg-cyan-400 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-cyan-400/20 hover:text-cyan-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <TrendingUp className="w-8 h-8 mr-3 text-cyan-400" />
            Featured <span className="text-cyan-400">Articles</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-2 text-sm text-cyan-400 mb-4">
                  <span className="px-3 py-1 bg-cyan-400/20 rounded-full">{post.category}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">{post.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <BookOpen className="w-8 h-8 mr-3 text-cyan-400" />
            Latest <span className="text-cyan-400">Articles</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-2 text-sm text-cyan-400 mb-4">
                  <span className="px-2 py-1 bg-cyan-400/20 rounded-full text-xs">{post.category}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-2 text-sm">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-xs text-gray-400">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                  >
                    Read
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest AI and tech insights delivered directly to your inbox. 
            Join thousands of professionals staying ahead of the curve.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
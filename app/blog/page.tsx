'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  Filter,
  Clock,
  Eye,
  Heart,
  Share2,
  BookOpen,
  TrendingUp,
  Brain,
  Zap,
  Shield
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'ai', name: 'Artificial Intelligence' },
    { id: 'technology', name: 'Technology' },
    { id: 'business', name: 'Business' },
    { id: 'tutorials', name: 'Tutorials' },
    { id: 'news', name: 'News' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Explore the latest trends in artificial intelligence and how they\'re transforming business operations across industries.',
      content: 'Artificial intelligence continues to revolutionize how businesses operate, with 2024 bringing unprecedented advances in machine learning, natural language processing, and automation...',
      author: 'Dr. Kleber Santos',
      authorImage: 'KS',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      category: 'ai',
      tags: ['AI', 'Business', 'Machine Learning', 'Automation'],
      image: '🤖',
      views: 1250,
      likes: 89,
      featured: true
    },
    {
      id: 2,
      title: 'Building Scalable Cloud Infrastructure with AI',
      excerpt: 'Learn how to design and implement cloud infrastructure that can scale with your AI workloads and business growth.',
      content: 'Cloud infrastructure is the backbone of modern AI applications. In this comprehensive guide, we\'ll explore best practices for building scalable, secure, and cost-effective cloud solutions...',
      author: 'Sarah Chen',
      authorImage: 'SC',
      publishDate: '2024-01-12',
      readTime: '12 min read',
      category: 'technology',
      tags: ['Cloud', 'Infrastructure', 'AI', 'Scalability'],
      image: '☁️',
      views: 980,
      likes: 67,
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: Protecting Your Digital Assets',
      excerpt: 'Discover how AI is both enhancing cybersecurity capabilities and creating new challenges that businesses must address.',
      content: 'As AI becomes more prevalent in business operations, cybersecurity strategies must evolve to address new threats and leverage AI-powered defense mechanisms...',
      author: 'Michael Rodriguez',
      authorImage: 'MR',
      publishDate: '2024-01-10',
      readTime: '10 min read',
      category: 'technology',
      tags: ['Cybersecurity', 'AI', 'Security', 'Digital Assets'],
      image: '🔒',
      views: 1150,
      likes: 92,
      featured: true
    },
    {
      id: 4,
      title: 'How to Implement AI Project Management in Your Organization',
      excerpt: 'A step-by-step guide to successfully implementing AI-powered project management tools and processes.',
      content: 'AI project management tools can significantly improve team productivity and project outcomes. Here\'s how to successfully implement them in your organization...',
      author: 'Emily Johnson',
      authorImage: 'EJ',
      publishDate: '2024-01-08',
      readTime: '6 min read',
      category: 'tutorials',
      tags: ['Project Management', 'AI', 'Implementation', 'Productivity'],
      image: '📋',
      views: 750,
      likes: 45,
      featured: false
    },
    {
      id: 5,
      title: 'The Business Case for AI Investment: ROI and Beyond',
      excerpt: 'Understanding the financial benefits and strategic value of investing in AI solutions for your business.',
      content: 'While the upfront costs of AI implementation can be significant, the long-term benefits often far exceed the investment. Let\'s explore the business case for AI...',
      author: 'Dr. Kleber Santos',
      authorImage: 'KS',
      publishDate: '2024-01-05',
      readTime: '9 min read',
      category: 'business',
      tags: ['ROI', 'Investment', 'AI', 'Business Strategy'],
      image: '💰',
      views: 890,
      likes: 73,
      featured: false
    },
    {
      id: 6,
      title: 'Breaking News: New AI Regulations and What They Mean for Businesses',
      excerpt: 'Latest updates on AI regulations and compliance requirements that businesses need to know about.',
      content: 'Recent regulatory developments are shaping how businesses can use AI. Here\'s what you need to know about compliance and best practices...',
      author: 'Legal Team',
      authorImage: 'LT',
      publishDate: '2024-01-03',
      readTime: '5 min read',
      category: 'news',
      tags: ['Regulations', 'Compliance', 'AI', 'Legal'],
      image: '📰',
      views: 650,
      likes: 38,
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      case 'popular':
        return b.views - a.views;
      case 'trending':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and business innovation from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology blog, business insights, AI trends, machine learning, cloud computing" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="cyber-scan-line mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch">
              Our Blog
            </h1>
            <p className="text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Insights & Innovation
            </p>
          </div>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Stay ahead of the curve with expert insights on AI, technology, and business innovation. 
            Learn from our team of experts and industry leaders.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              >
                <option value="latest">Latest</option>
                <option value="popular">Most Popular</option>
                <option value="trending">Trending</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'all' && searchTerm === '' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 neon-text">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="quantum-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{post.image}</div>
                    <div>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.publishDate).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {post.authorImage}
                        </div>
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {post.views}
                      </span>
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {post.likes}
                      </span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            {selectedCategory === 'all' ? 'All Articles' : `${categories.find(c => c.id === selectedCategory)?.name}`}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post) => (
              <article key={post.id} className="holographic-stream p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{post.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 text-xs text-gray-400 mb-1">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </span>
                      <span>•</span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-gray-400">
                      <div className="w-5 h-5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {post.authorImage}
                      </div>
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-xs text-gray-400">
                    <span className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {post.views}
                    </span>
                    <span className="flex items-center">
                      <Heart className="w-3 h-3 mr-1" />
                      {post.likes}
                    </span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {sortedPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-300 text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="quantum-tunnel p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights on AI, technology, and business innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              />
              <button className="cyber-button px-8 py-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
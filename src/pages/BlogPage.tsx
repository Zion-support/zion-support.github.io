import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  Calendar,
  User,
  Tag,
  ArrowRight,
  ArrowLeft,
  Share2,
  Bookmark,
  MessageCircle,
  Eye,
  Heart,
  Zap,
  Brain,
  Shield,
  Cloud,
  Workflow,
  Rocket,
  Target,
  Award,
  TrendingUp,
  Cpu,
  GraduationCap,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: Zap, color: 'from-cyan-500 to-blue-500' },
    { id: 'ai', name: 'AI & ML', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, color: 'from-blue-500 to-cyan-500' },
    { id: 'data', name: 'Data Analytics', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { id: 'innovation', name: 'Innovation', icon: Rocket, color: 'from-indigo-500 to-purple-500' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2025 and Beyond',
      excerpt: 'Discover how artificial intelligence is transforming business operations and what to expect in the coming years.',
      category: 'ai',
      author: 'Dr. Sarah Chen',
      date: '2025-01-27',
      readTime: '8 min read',
      image: '/images/blog/ai-future-business.jpg',
      tags: ['AI', 'Business', 'Innovation', 'Technology'],
      featured: true
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Modern Enterprises',
      excerpt: 'Essential security strategies to protect your organization from evolving cyber threats.',
      category: 'cybersecurity',
      author: 'Marcus Rodriguez',
      date: '2025-01-25',
      readTime: '6 min read',
      image: '/images/blog/cybersecurity-best-practices.jpg',
      tags: ['Cybersecurity', 'Enterprise', 'Security', 'Best Practices'],
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Migration Strategies: A Comprehensive Guide',
      excerpt: 'Step-by-step approach to successfully migrate your infrastructure to the cloud.',
      category: 'cloud',
      author: 'David Kim',
      date: '2025-01-23',
      readTime: '10 min read',
      image: '/images/blog/cloud-migration-guide.jpg',
      tags: ['Cloud', 'Migration', 'Infrastructure', 'DevOps'],
      featured: false
    },
    {
      id: 4,
      title: 'Data-Driven Decision Making: From Insights to Action',
      excerpt: 'How to transform raw data into actionable business intelligence that drives growth.',
      category: 'data',
      author: 'Emily Watson',
      date: '2025-01-21',
      readTime: '7 min read',
      image: '/images/blog/data-driven-decisions.jpg',
      tags: ['Data Analytics', 'Business Intelligence', 'Decision Making', 'Analytics'],
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Blog & Insights
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and innovations in AI, cybersecurity, and technology
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id} className="bg-gray-800 text-white">
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="max-w-6xl mx-auto mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm rounded-full">
                      Featured
                    </span>
                    <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300">{featuredPost.date}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-8 text-center">
                  <Brain className="w-24 h-24 text-cyan-400 mx-auto mb-4" />
                  <p className="text-gray-300">AI & Technology Insights</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{post.date}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center text-gray-400 py-12">
              <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-xl">No articles found matching your criteria.</p>
              <p className="text-sm">Try adjusting your search terms or filters.</p>
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights and updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

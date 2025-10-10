'use client';
import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, Filter, TrendingUp, Star, Eye, MessageCircle, BookOpen, Brain, Cloud, Shield, Code } from 'lucide-react';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { name: 'all', label: 'All Posts', count: 24 },
    { name: 'ai', label: 'Artificial Intelligence', count: 8 },
    { name: 'cloud', label: 'Cloud Computing', count: 6 },
    { name: 'security', label: 'Cybersecurity', count: 4 },
    { name: 'business', label: 'Business', count: 3 },
    { name: 'technology', label: 'Technology', count: 3 }
  ];

  const featuredPost = {
    id: 1,
    title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
    excerpt: 'Explore the latest trends in enterprise AI adoption, from quantum computing integration to autonomous systems, and discover how businesses are leveraging AI for competitive advantage.',
    author: 'Dr. Sarah Chen',
    authorRole: 'Head of AI Research',
    authorImage: '/images/authors/sarah-chen.webp',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    category: 'ai',
    image: '/images/blog/ai-enterprise-future.webp',
    tags: ['AI', 'Enterprise', 'Future Tech', 'Innovation'],
    views: 1250,
    likes: 89,
    comments: 23,
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration, including planning, execution, and optimization techniques.',
      author: 'Michael Rodriguez',
      authorRole: 'Head of Engineering',
      authorImage: '/images/authors/michael-rodriguez.webp',
      publishDate: '2024-01-12',
      readTime: '6 min read',
      category: 'cloud',
      image: '/images/blog/cloud-migration-guide.webp',
      tags: ['Cloud', 'Migration', 'Best Practices', 'Infrastructure'],
      views: 890,
      likes: 67,
      comments: 15
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Discover how AI is both creating new security challenges and providing innovative solutions to protect enterprise data and systems.',
      author: 'Dr. Emily Watson',
      authorRole: 'Head of AI Research',
      authorImage: '/images/authors/emily-watson.webp',
      publishDate: '2024-01-10',
      readTime: '7 min read',
      category: 'security',
      image: '/images/blog/ai-cybersecurity.webp',
      tags: ['Cybersecurity', 'AI', 'Threats', 'Solutions'],
      views: 1100,
      likes: 78,
      comments: 19
    },
    {
      id: 4,
      title: 'Digital Transformation: How to Lead Change in Your Organization',
      excerpt: 'A comprehensive guide to leading successful digital transformation initiatives, from strategy development to implementation.',
      author: 'Kleber Santos',
      authorRole: 'CEO & Founder',
      authorImage: '/images/authors/kleber-santos.webp',
      publishDate: '2024-01-08',
      readTime: '9 min read',
      category: 'business',
      image: '/images/blog/digital-transformation.webp',
      tags: ['Digital Transformation', 'Leadership', 'Change Management', 'Strategy'],
      views: 950,
      likes: 72,
      comments: 21
    },
    {
      id: 5,
      title: 'The Rise of Edge Computing: Bringing AI Closer to Data',
      excerpt: 'Explore how edge computing is revolutionizing AI deployment and enabling real-time processing at the network edge.',
      author: 'Michael Rodriguez',
      authorRole: 'Head of Engineering',
      authorImage: '/images/authors/michael-rodriguez.webp',
      publishDate: '2024-01-05',
      readTime: '5 min read',
      category: 'technology',
      image: '/images/blog/edge-computing.webp',
      tags: ['Edge Computing', 'AI', 'Real-time', 'Infrastructure'],
      views: 720,
      likes: 54,
      comments: 12
    },
    {
      id: 6,
      title: 'AI Ethics: Building Responsible AI Systems',
      excerpt: 'Learn about the importance of AI ethics and how to implement responsible AI practices in your organization.',
      author: 'Dr. Sarah Chen',
      authorRole: 'Head of AI Research',
      authorImage: '/images/authors/sarah-chen.webp',
      publishDate: '2024-01-03',
      readTime: '6 min read',
      category: 'ai',
      image: '/images/blog/ai-ethics.webp',
      tags: ['AI Ethics', 'Responsible AI', 'Governance', 'Compliance'],
      views: 680,
      likes: 61,
      comments: 18
    }
  ];

  const filteredPosts = blogPosts.filter(post => {)
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;

  const getCategoryIcon = (category: string) => {
    const icons = {
      ai: Brain,
      cloud: Cloud,
      security: Shield,
      business: TrendingUp,
      technology: Code
    };
    return icons[category as keyof typeof icons] || BookOpen;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      ai: 'text-purple-400',
      cloud: 'text-blue-400',
      security: 'text-red-400',
      business: 'text-green-400',
      technology: 'text-cyan-400'
    };
    return colors[category as keyof typeof colors] || 'text-gray-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}</div>
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"><div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">Blog & Insights<p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">Stay updated with the latest trends in AI, cloud computing, cybersecurity,</p>
              and digital transformation. Expert insights from our team of specialists.</p>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Expert Insights</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Latest Trends</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Star className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Industry Leaders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) =>setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"</input>
                /><div className="flex gap-2 overflow-x-auto">{categories.map((category) => (<button
                    key={category.name}
                    onClick={() =>setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                      selectedCategory === category.name
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  ></button>
                    {category.label} ({category.count})</button>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
            <div className="bg-slate-800/50 rounded-lg overflow-hidden hover:bg-slate-700/50 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className={`w-8 h-8 ${getCategoryColor(featuredPost.category)}`}>{React.createElement(getCategoryIcon(featuredPost.category), { className: 'w-8 h-8' })}<span className="text-cyan-400 font-medium capitalize">{featuredPost.category}<h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{featuredPost.excerpt}<div className="flex flex-wrap gap-2 mb-6">{featuredPost.tags.map((tag, index) => (<span key={index} className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full">{tag}</span>
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <img
                          src={featuredPost.authorImage}
                          alt={featuredPost.author}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <div className="text-white font-medium">{featuredPost.author}<div className="text-gray-400 text-sm">{featuredPost.authorRole}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-gray-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{featuredPost.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{featuredPost.comments}<button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all flex items-center">Read More</button>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Latest Articles<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{filteredPosts.map((post) => (</div>
                <article key={post.id} className="bg-slate-800/50 rounded-lg overflow-hidden hover:bg-slate-700/50 transition-all duration-300">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className={`w-8 h-8 ${getCategoryColor(post.category)}`}>{React.createElement(getCategoryIcon(post.category), { className: 'w-8 h-8' })}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-cyan-400 font-medium text-sm capitalize">{post.category}<span className="text-gray-400">•<span className="text-gray-400 text-sm">{post.readTime}<h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}<div className="flex flex-wrap gap-1 mb-4">{post.tags.slice(0, 3).map((tag, index) => (<span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">{tag}</span>
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <div className="text-white font-medium text-sm">{post.author}<div className="text-gray-400 text-xs">{post.authorRole}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-gray-400 text-xs">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-3 h-3" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-700 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Our Latest Insights<p className="text-xl text-gray-200 mb-8">Get the latest articles, industry insights, and expert opinions delivered to your inbox.</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">Subscribe<p className="text-sm text-gray-300 mt-4">No spam, unsubscribe at any time.</p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
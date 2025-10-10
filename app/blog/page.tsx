'use client';
import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, Filter, TrendingUp, Star, Eye, MessageCircle, BookOpen, Brain, Cloud, Shield, Code } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

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
    tags: ['AI', 'Enterprise', 'Trends', '2024'],
    views: 1250,
    likes: 89
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration, including planning, execution, and optimization phases.',
      author: 'Michael Rodriguez',
      authorRole: 'Head of Engineering',
      authorImage: '/images/authors/michael-rodriguez.webp',
      publishDate: '2024-01-12',
      readTime: '6 min read',
      category: 'cloud',
      image: '/images/blog/cloud-migration-guide.webp',
      tags: ['Cloud', 'Migration', 'Best Practices'],
      views: 980,
      likes: 67
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Discover how AI is both creating new security challenges and providing innovative solutions to protect digital assets.',
      author: 'Dr. Emily Watson',
      authorRole: 'Head of AI Research',
      authorImage: '/images/authors/emily-watson.webp',
      publishDate: '2024-01-10',
      readTime: '7 min read',
      category: 'security',
      image: '/images/blog/ai-cybersecurity.webp',
      tags: ['Cybersecurity', 'AI', 'Threats', 'Solutions'],
      views: 1100,
      likes: 78
    },
    {
      id: 4,
      title: 'Digital Transformation: How to Lead Change Successfully',
      excerpt: 'A comprehensive guide to leading digital transformation initiatives in your organization, with real-world examples and actionable insights.',
      author: 'Kleber Santos',
      authorRole: 'CEO & Founder',
      authorImage: '/images/authors/kleber-santos.webp',
      publishDate: '2024-01-08',
      readTime: '9 min read',
      category: 'business',
      image: '/images/blog/digital-transformation.webp',
      tags: ['Digital Transformation', 'Leadership', 'Change Management'],
      views: 850,
      likes: 56
    },
    {
      id: 5,
      title: 'The Rise of Quantum Computing: What It Means for Business',
      excerpt: 'Explore the potential impact of quantum computing on various industries and how businesses can prepare for this revolutionary technology.',
      author: 'Dr. Sarah Chen',
      authorRole: 'Head of AI Research',
      authorImage: '/images/authors/sarah-chen.webp',
      publishDate: '2024-01-05',
      readTime: '10 min read',
      category: 'technology',
      image: '/images/blog/quantum-computing.webp',
      tags: ['Quantum Computing', 'Technology', 'Future'],
      views: 1400,
      likes: 95
    },
    {
      id: 6,
      title: 'Building Scalable AI Systems: Architecture Patterns',
      excerpt: 'Learn about the key architectural patterns and best practices for building AI systems that can scale with your business needs.',
      author: 'Michael Rodriguez',
      authorRole: 'Head of Engineering',
      authorImage: '/images/authors/michael-rodriguez.webp',
      publishDate: '2024-01-03',
      readTime: '8 min read',
      category: 'ai',
      image: '/images/blog/scalable-ai-systems.webp',
      tags: ['AI', 'Architecture', 'Scalability', 'Systems'],
      views: 920,
      likes: 72
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai': return Brain;
      case 'cloud': return Cloud;
      case 'security': return Shield;
      case 'business': return TrendingUp;
      case 'technology': return Code;
      default: return BookOpen;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and digital transformation from our expert team."
        keywords="AI blog, cloud computing, cybersecurity, digital transformation, technology insights"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Our
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Insights, trends, and expert perspectives on AI, cloud computing, cybersecurity, and digital transformation.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <img
                      src={featuredPost.authorImage}
                      alt={featuredPost.author}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div>
                      <p className="text-white font-medium">{featuredPost.author}</p>
                      <p className="text-gray-400 text-sm">{featuredPost.authorRole}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{featuredPost.title}</h3>
                <p className="text-gray-300 mb-4">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.publishDate}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {featuredPost.views}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-gray-400">{featuredPost.likes}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredPost.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300">
                  Read More
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => {
              const CategoryIcon = getCategoryIcon(post.category);
              return (
                <article key={post.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <CategoryIcon className="w-5 h-5 text-purple-400 mr-2" />
                      <span className="text-purple-400 text-sm font-medium capitalize">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <div>
                          <p className="text-white text-sm font-medium">{post.author}</p>
                          <p className="text-gray-400 text-xs">{post.authorRole}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.publishDate}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {post.views}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300">
                      Read More
                      <ArrowRight className="inline-block ml-2 w-4 h-4" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
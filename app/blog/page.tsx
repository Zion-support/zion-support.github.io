'use client';
import React, { useState } from 'react';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  Filter,
  Clock,
  Eye,
  Share2,
  BookOpen,
  TrendingUp,
  Star
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'ai', name: 'AI & Machine Learning', count: 8 },
    { id: 'tech', name: 'Technology', count: 6 },
    { id: 'business', name: 'Business', count: 5 },
    { id: 'tutorials', name: 'Tutorials', count: 5 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Explore the latest trends in artificial intelligence and how they\'re transforming business operations across industries.',
      author: 'Dr. Kleber Santos',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'ai',
      image: '/blog/ai-future.jpg',
      tags: ['AI', 'Business', 'Technology', 'Future'],
      views: 1250,
      featured: true
    },
    {
      id: 2,
      title: 'Building Scalable Micro SaaS Solutions: A Complete Guide',
      excerpt: 'Learn how to create and scale micro SaaS applications that solve specific business problems and generate recurring revenue.',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'tech',
      image: '/blog/micro-saas.jpg',
      tags: ['SaaS', 'Development', 'Business', 'Scalability'],
      views: 980,
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for Modern Businesses',
      excerpt: 'Essential cybersecurity strategies to protect your business from evolving threats and ensure data security.',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'tech',
      image: '/blog/cybersecurity.jpg',
      tags: ['Security', 'Business', 'Technology', 'Best Practices'],
      views: 1100,
      featured: false
    },
    {
      id: 4,
      title: 'How AI is Revolutionizing Customer Service',
      excerpt: 'Discover how artificial intelligence is transforming customer service and improving customer satisfaction.',
      author: 'Dr. Kleber Santos',
      date: '2024-01-08',
      readTime: '6 min read',
      category: 'ai',
      image: '/blog/ai-customer-service.jpg',
      tags: ['AI', 'Customer Service', 'Automation', 'Business'],
      views: 850,
      featured: false
    },
    {
      id: 5,
      title: 'Cloud Migration: A Step-by-Step Guide for Enterprises',
      excerpt: 'Complete guide to migrating your business to the cloud, including planning, execution, and best practices.',
      author: 'Sarah Johnson',
      date: '2024-01-05',
      readTime: '15 min read',
      category: 'tutorials',
      image: '/blog/cloud-migration.jpg',
      tags: ['Cloud', 'Migration', 'Tutorial', 'Enterprise'],
      views: 1200,
      featured: false
    },
    {
      id: 6,
      title: 'The ROI of Digital Transformation: Measuring Success',
      excerpt: 'Learn how to measure and maximize the return on investment from your digital transformation initiatives.',
      author: 'Michael Chen',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'business',
      image: '/blog/digital-transformation.jpg',
      tags: ['Digital Transformation', 'ROI', 'Business', 'Strategy'],
      views: 750,
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Insights, tutorials, and industry trends from our team of experts. 
            Stay updated with the latest in AI, technology, and business innovation.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">Featured Post</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-300 mb-6 text-lg">{featuredPost.excerpt}</p>
                  <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>{featuredPost.views} views</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl p-8 text-center">
                  <BookOpen className="w-24 h-24 text-cyan-400 mx-auto mb-4" />
                  <p className="text-gray-300">Featured Article</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl p-6 text-center mb-6">
                  <BookOpen className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300">Article</p>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center space-x-4 text-xs text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter and never miss the latest insights, tutorials, and industry trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
            />
            <button className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let's discuss how our services can help you achieve your goals and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>Call (302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
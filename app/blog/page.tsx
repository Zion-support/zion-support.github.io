'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, ArrowRight, Search, Filter, Tag } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'cloud', name: 'Cloud Computing' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'development', name: 'Development' },
    { id: 'business', name: 'Business' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends shaping enterprise technology and how businesses can leverage these innovations.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'ai',
      featured: true,
      image: '/blog/ai-enterprise-2024.jpg'
    },
    {
      id: 2,
      title: 'Building Scalable Cloud Infrastructure: Best Practices',
      excerpt: 'Learn how to design and implement cloud infrastructure that can scale with your business growth and handle increasing demands.',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'cloud',
      featured: false,
      image: '/blog/cloud-infrastructure.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: Protecting Your Digital Assets',
      excerpt: 'Discover how AI is both a threat and a solution in modern cybersecurity, and what you need to know to stay protected.',
      author: 'Alex Thompson',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'security',
      featured: false,
      image: '/blog/cybersecurity-ai.jpg'
    },
    {
      id: 4,
      title: 'Modern Web Development: React, TypeScript, and Beyond',
      excerpt: 'A comprehensive guide to modern web development practices, tools, and frameworks that every developer should know.',
      author: 'Emma Wilson',
      date: '2024-01-08',
      readTime: '10 min read',
      category: 'development',
      featured: false,
      image: '/blog/web-development.jpg'
    },
    {
      id: 5,
      title: 'Digital Transformation: How Technology is Reshaping Business',
      excerpt: 'Explore how digital transformation is changing the way businesses operate and compete in today\'s market.',
      author: 'David Kim',
      date: '2024-01-05',
      readTime: '5 min read',
      category: 'business',
      featured: false,
      image: '/blog/digital-transformation.jpg'
    },
    {
      id: 6,
      title: 'Machine Learning in Production: From Model to Deployment',
      excerpt: 'Learn the best practices for deploying machine learning models in production environments and ensuring reliability.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'ai',
      featured: false,
      image: '/blog/ml-production.jpg'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and business innovation from our expert team." />
        <meta name="keywords" content="blog, AI, technology, business, insights, articles" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Blog</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay updated with the latest insights on AI, technology, and business innovation from our expert team.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
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
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                    }`}
                  >
                    <Tag className="w-4 h-4" />
                    <span>{category.name}</span>
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
              <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-white">AI</span>
                        </div>
                        <p className="text-gray-300">Featured Article</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="text-cyan-400 text-sm font-medium">
                        {categories.find(cat => cat.id === featuredPost.category)?.name}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                    <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <span className="text-lg font-bold text-white">
                          {post.title.charAt(0)}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm">Article Image</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-cyan-400 text-sm font-medium">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        {post.readTime}
                      </div>
                      <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {regularPosts.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and never miss the latest insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default BlogPage;
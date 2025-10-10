'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends shaping enterprise technology and how businesses can leverage these innovations for competitive advantage.',
      author: 'Dr. Sarah Chen',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      category: 'AI',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration, including common pitfalls and how to avoid them.',
      author: 'Michael Rodriguez',
      date: 'Dec 12, 2024',
      readTime: '12 min read',
      category: 'Cloud',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Discover how AI is both creating new security challenges and providing innovative solutions to protect your digital assets.',
      author: 'Alex Thompson',
      date: 'Dec 10, 2024',
      readTime: '10 min read',
      category: 'Security',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Micro SAAS: The Future of Business Software',
      excerpt: 'Why micro SAAS solutions are revolutionizing how businesses approach software, with real-world examples and implementation strategies.',
      author: 'Jennifer Lee',
      date: 'Dec 8, 2024',
      readTime: '6 min read',
      category: 'Business',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'Master the art of data analytics with practical techniques for extracting meaningful insights from your business data.',
      author: 'David Park',
      date: 'Dec 5, 2024',
      readTime: '9 min read',
      category: 'Analytics',
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'The Rise of Quantum Computing: What It Means for Business',
      excerpt: 'Understanding quantum computing and its potential impact on various industries, from finance to healthcare.',
      author: 'Dr. Maria Santos',
      date: 'Dec 3, 2024',
      readTime: '11 min read',
      category: 'Emerging Tech',
      image: '/api/placeholder/400/250'
    }
  ];

  const categories = ['All', 'AI', 'Cloud', 'Security', 'Business', 'Analytics', 'Emerging Tech'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest AI and IT insights, industry trends, and technical articles from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, IT insights, technology trends, AI news, tech articles" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Our Blog
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest AI and IT insights, industry trends, and technical articles from our experts.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 cyber-glow"
                />
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white cyber-glow'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:cyber-glow'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {filteredPosts.length > 0 && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 neon-text">Featured Article</h2>
              <div className="cyber-card hologram-card p-8 mb-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="text-cyan-400 text-sm">{filteredPosts[0].category}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{filteredPosts[0].title}</h3>
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">{filteredPosts[0].excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{filteredPosts[0].author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{filteredPosts[0].date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{filteredPosts[0].readTime}</span>
                        </div>
                      </div>
                      <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 cyber-glow hover:scale-105">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center">
                    <span className="text-gray-400">Featured Image</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 neon-text">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post) => (
                <article key={post.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 group">
                  <div className="bg-gray-800 rounded-lg h-48 mb-4 flex items-center justify-center">
                    <span className="text-gray-400">Article Image</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <Tag className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 text-sm">{post.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center space-x-2 group-hover:translate-x-1 transition-all duration-300">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found matching your search criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss the latest AI and IT insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 cyber-glow hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
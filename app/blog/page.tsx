'use client';

import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.',
      content: 'Full article content...',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI',
      tags: ['AI', 'Business', 'Technology'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Complex',
      excerpt: 'A comprehensive guide to understanding quantum computing and its practical applications in modern technology.',
      content: 'Full article content...',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Quantum',
      tags: ['Quantum Computing', 'Technology', 'Innovation'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Challenges and Solutions',
      excerpt: 'How artificial intelligence is both creating new security challenges and providing innovative solutions.',
      content: 'Full article content...',
      author: 'Alex Thompson',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Security',
      tags: ['Cybersecurity', 'AI', 'Security'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 4,
      title: 'Cloud Infrastructure: Building Scalable Solutions',
      excerpt: 'Best practices for designing and implementing cloud infrastructure that can grow with your business.',
      content: 'Full article content...',
      author: 'Jennifer Lee',
      date: '2024-01-01',
      readTime: '6 min read',
      category: 'Cloud',
      tags: ['Cloud Computing', 'Infrastructure', 'Scalability'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 5,
      title: 'Machine Learning in Healthcare: Transforming Patient Care',
      excerpt: 'Discover how machine learning is revolutionizing healthcare delivery and patient outcomes.',
      content: 'Full article content...',
      author: 'Dr. Robert Kim',
      date: '2023-12-28',
      readTime: '9 min read',
      category: 'Healthcare',
      tags: ['Machine Learning', 'Healthcare', 'AI'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 6,
      title: 'Digital Transformation: A Complete Guide for Enterprises',
      excerpt: 'Everything you need to know about digital transformation and how to successfully implement it in your organization.',
      content: 'Full article content...',
      author: 'Lisa Wang',
      date: '2023-12-20',
      readTime: '15 min read',
      category: 'Digital Transformation',
      tags: ['Digital Transformation', 'Enterprise', 'Strategy'],
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const categories = ['all', 'AI', 'Quantum', 'Security', 'Cloud', 'Healthcare', 'Digital Transformation'];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and digital transformation from our expert team." />
        <meta name="keywords" content="AI blog, technology insights, quantum computing, cybersecurity, digital transformation, tech news" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tech <span className="text-cyan-400">Insights</span> & <span className="text-purple-400">Innovation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay ahead of the curve with expert insights on AI, quantum computing, cybersecurity, and digital transformation.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-400 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category === 'all' ? 'All Articles' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredPost && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Article</h2>
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 text-sm font-medium">{featuredPost.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                    <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {selectedCategory === 'all' ? 'All Articles' : `${selectedCategory} Articles`}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
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
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
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
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Get the latest insights and updates delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300">
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
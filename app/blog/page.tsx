'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Clock, ArrowRight, Filter } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends',
      excerpt: 'Explore the latest trends in enterprise AI adoption and how businesses are leveraging artificial intelligence to drive innovation.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking New Grounds',
      excerpt: 'Discover how quantum computing is revolutionizing data processing and what it means for the future of technology.',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      readTime: '7 min read',
      category: 'Quantum Computing',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 3,
      title: 'Digital Transformation: A Complete Guide',
      excerpt: 'Learn the essential steps for successful digital transformation in your organization.',
      author: 'Emily Johnson',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Digital Transformation',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity in the AI Era',
      excerpt: 'Understanding the new security challenges and solutions in an AI-driven world.',
      author: 'David Kim',
      date: '2024-01-08',
      readTime: '8 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 5,
      title: 'Cloud Infrastructure Best Practices',
      excerpt: 'Essential strategies for building scalable and secure cloud infrastructure.',
      author: 'Lisa Wang',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'Cloud Solutions',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 6,
      title: 'The Rise of Autonomous Systems',
      excerpt: 'How autonomous systems are changing industries and what to expect in the coming years.',
      author: 'Alex Thompson',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Autonomous Systems',
      image: '/api/placeholder/400/250',
      featured: false
    }
  ];

  const categories = ['all', 'AI & Machine Learning', 'Quantum Computing', 'Digital Transformation', 'Cybersecurity', 'Cloud Solutions', 'Autonomous Systems'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, quantum computing, digital transformation, and cutting-edge technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, quantum computing, digital transformation, cybersecurity, cloud solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Technology <span className="text-cyan-400">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay ahead with the latest trends, insights, and innovations in AI, quantum computing, and digital transformation.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
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
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Featured <span className="text-cyan-400">Articles</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-600 hover:border-cyan-400/50 transition-all duration-300 group">
                    <div className="aspect-video bg-gradient-to-br from-cyan-400/20 to-purple-500/20"></div>
                    <div className="p-6">
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
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm">
                          {post.category}
                        </span>
                        <Link
                          to={`/blog/${post.id}`}
                          className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Latest <span className="text-cyan-400">Articles</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-600 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-400/20 to-purple-500/20"></div>
                  <div className="p-6">
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
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm">
                        {post.category}
                      </span>
                      <Link
                        to={`/blog/${post.id}`}
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
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
      </div>
    </>
  );
};

export default BlogPage;


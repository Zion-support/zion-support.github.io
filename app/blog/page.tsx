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
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'Exploring how artificial intelligence is transforming business operations and driving innovation across industries.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking New Grounds',
      excerpt: 'Understanding the revolutionary potential of quantum computing and its practical applications in modern technology.',
      author: 'Prof. Michael Rodriguez',
      date: '2024-01-12',
      readTime: '7 min read',
      category: 'Quantum',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI',
      excerpt: 'How artificial intelligence is both enhancing and challenging cybersecurity practices in modern organizations.',
      author: 'Alex Thompson',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Security',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 4,
      title: 'Cloud Migration Strategies for 2024',
      excerpt: 'Best practices and strategies for successful cloud migration in enterprise environments.',
      author: 'Jennifer Lee',
      date: '2024-01-08',
      readTime: '4 min read',
      category: 'Cloud',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 5,
      title: 'Machine Learning in Healthcare',
      excerpt: 'Revolutionary applications of machine learning in healthcare and medical diagnosis.',
      author: 'Dr. Robert Kim',
      date: '2024-01-05',
      readTime: '8 min read',
      category: 'AI',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 6,
      title: 'Digital Transformation Trends',
      excerpt: 'Key trends shaping digital transformation in 2024 and beyond.',
      author: 'Maria Garcia',
      date: '2024-01-03',
      readTime: '5 min read',
      category: 'Digital',
      image: '/api/placeholder/400/250',
      featured: false
    }
  ];

  const categories = ['all', 'AI', 'Quantum', 'Security', 'Cloud', 'Digital'];

  const searchResults = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and digital transformation from our expert team." />
        <meta name="keywords" content="AI blog, technology insights, quantum computing, cybersecurity, digital transformation, tech news" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Tech <span className="text-cyan-400">Insights</span> & Updates
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Stay ahead with the latest trends, insights, and innovations in AI, quantum computing, and digital transformation.
            </p>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {searchResults.length > 0 && searchResults[0].featured && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400 font-semibold">Featured Article</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">{searchResults[0].title}</h2>
                <p className="text-gray-300 text-lg mb-6">{searchResults[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{searchResults[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(searchResults[0].date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{searchResults[0].readTime}</span>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${searchResults[0].id}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchResults.map((post) => (
                <article
                  key={post.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-6xl text-white/20">📄</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-200"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {searchResults.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-gray-400 text-lg">No articles found matching your search criteria.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="mt-4 text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;


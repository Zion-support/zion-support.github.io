'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends',
      excerpt: 'Discover the latest AI trends that are transforming businesses worldwide and how to implement them in your organization.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI',
      image: '/api/placeholder/400/250',
      slug: 'future-ai-business-2024-trends'
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking New Ground',
      excerpt: 'Explore how quantum computing is revolutionizing data processing and what it means for the future of technology.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'Quantum',
      image: '/api/placeholder/400/250',
      slug: 'quantum-computing-breaking-ground'
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for 2024',
      excerpt: 'Essential cybersecurity strategies to protect your business from evolving threats in the digital landscape.',
      author: 'Mike Rodriguez',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Security',
      image: '/api/placeholder/400/250',
      slug: 'cybersecurity-best-practices-2024'
    },
    {
      id: 4,
      title: 'Cloud Migration: A Complete Guide',
      excerpt: 'Step-by-step guide to migrating your infrastructure to the cloud with minimal downtime and maximum efficiency.',
      author: 'Alex Thompson',
      date: '2023-12-28',
      readTime: '10 min read',
      category: 'Cloud',
      image: '/api/placeholder/400/250',
      slug: 'cloud-migration-complete-guide'
    },
    {
      id: 5,
      title: 'Machine Learning for Small Businesses',
      excerpt: 'How small businesses can leverage machine learning to compete with larger enterprises and drive growth.',
      author: 'Zion Tech Team',
      date: '2023-12-20',
      readTime: '7 min read',
      category: 'AI',
      image: '/api/placeholder/400/250',
      slug: 'machine-learning-small-businesses'
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing',
      excerpt: 'Understanding edge computing and its impact on IoT, autonomous systems, and real-time data processing.',
      author: 'Dr. Emily Watson',
      date: '2023-12-15',
      readTime: '9 min read',
      category: 'Edge Computing',
      image: '/api/placeholder/400/250',
      slug: 'rise-edge-computing'
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, quantum computing, cybersecurity, cloud computing, machine learning" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Technology Insights
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay ahead of the curve with expert insights on AI, quantum computing, cybersecurity, and emerging technologies.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
            </div>
          </div>

          {/* Featured Article */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Featured
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    The Complete Guide to AI Implementation in Enterprise
                  </h3>
                  <p className="text-xl text-cyan-100 mb-6">
                    Learn how to successfully implement AI solutions in your enterprise with our comprehensive guide covering strategy, technology, and best practices.
                  </p>
                  <div className="flex items-center space-x-6 text-cyan-100">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>Zion Tech Team</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>2024-01-20</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>12 min read</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="w-full h-64 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white/60">Featured Article Image</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Article Image</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
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
                    </div>
                    
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold transition-colors"
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

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-purple-100 mb-6">
              Get the latest technology insights delivered to your inbox
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;


'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2025 Trends and Predictions',
      excerpt: 'Explore the latest trends in enterprise AI adoption, from autonomous systems to quantum computing integration.',
      author: 'Zion Tech Team',
      date: 'January 15, 2025',
      readTime: '8 min read',
      category: 'AI',
      image: '/api/placeholder/400/250',
      slug: 'ai-enterprise-trends-2025'
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Through Traditional Barriers',
      excerpt: 'How quantum computing is revolutionizing data processing and what it means for your business.',
      author: 'Dr. Sarah Chen',
      date: 'January 10, 2025',
      readTime: '12 min read',
      category: 'Quantum',
      image: '/api/placeholder/400/250',
      slug: 'quantum-computing-breakthrough'
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Understanding the evolving cybersecurity landscape and how AI can both help and hinder security efforts.',
      author: 'Michael Rodriguez',
      date: 'January 5, 2025',
      readTime: '10 min read',
      category: 'Security',
      image: '/api/placeholder/400/250',
      slug: 'ai-cybersecurity-threats-solutions'
    },
    {
      id: 4,
      title: 'Building Scalable Cloud Infrastructure: Best Practices',
      excerpt: 'Learn how to design and implement cloud infrastructure that grows with your business needs.',
      author: 'Alex Thompson',
      date: 'December 28, 2024',
      readTime: '15 min read',
      category: 'Cloud',
      image: '/api/placeholder/400/250',
      slug: 'scalable-cloud-infrastructure'
    },
    {
      id: 5,
      title: 'The Rise of Autonomous Business Processes',
      excerpt: 'How AI-powered automation is transforming business operations and what you need to know.',
      author: 'Zion Tech Team',
      date: 'December 20, 2024',
      readTime: '9 min read',
      category: 'Automation',
      image: '/api/placeholder/400/250',
      slug: 'autonomous-business-processes'
    },
    {
      id: 6,
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'Master the art of data analysis and learn how to extract actionable insights from your business data.',
      author: 'Dr. Emily Watson',
      date: 'December 15, 2024',
      readTime: '11 min read',
      category: 'Analytics',
      image: '/api/placeholder/400/250',
      slug: 'data-analytics-insights'
    }
  ];

  const categories = ['all', 'AI', 'Quantum', 'Security', 'Cloud', 'Automation', 'Analytics'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and enterprise technology from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, enterprise AI, quantum computing, cybersecurity, cloud computing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technology Insights
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead with expert insights on AI, quantum computing, cybersecurity, and the latest technology trends.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.slice(1).map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Tag className="w-4 h-4 inline mr-1" />
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
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
                      className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="bg-white rounded-2xl shadow-xl p-12">
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search terms or category filter to find what you're looking for.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Our Latest Insights
              </h3>
              <p className="text-cyan-100 mb-6">
                Get the latest technology insights and AI trends delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-500"
                />
                <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
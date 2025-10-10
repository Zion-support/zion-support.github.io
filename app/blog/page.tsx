'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends shaping the business landscape and how companies can leverage these technologies for growth.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI',
      image: '/api/placeholder/400/250',
      slug: 'future-ai-business-trends-2024'
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Small Businesses',
      excerpt: 'Learn essential cybersecurity measures that every small business should implement to protect their digital assets.',
      author: 'Security Team',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/400/250',
      slug: 'cybersecurity-best-practices-small-business'
    },
    {
      id: 3,
      title: 'Cloud Migration: A Step-by-Step Guide',
      excerpt: 'Complete guide to migrating your business to the cloud, including planning, execution, and best practices.',
      author: 'Cloud Team',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Cloud',
      image: '/api/placeholder/400/250',
      slug: 'cloud-migration-step-by-step-guide'
    },
    {
      id: 4,
      title: 'Micro SaaS: Building Profitable Small Software Solutions',
      excerpt: 'Discover how to build and scale micro SaaS applications that solve specific problems and generate recurring revenue.',
      author: 'Product Team',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'SaaS',
      image: '/api/placeholder/400/250',
      slug: 'micro-saas-building-profitable-solutions'
    },
    {
      id: 5,
      title: 'Data Analytics: Turning Information into Business Intelligence',
      excerpt: 'Learn how to transform raw data into actionable insights that drive business decisions and growth.',
      author: 'Analytics Team',
      date: '2023-12-28',
      readTime: '6 min read',
      category: 'Analytics',
      image: '/api/placeholder/400/250',
      slug: 'data-analytics-business-intelligence'
    },
    {
      id: 6,
      title: 'The Rise of Quantum Computing in Enterprise Applications',
      excerpt: 'Explore how quantum computing is revolutionizing enterprise applications and what it means for your business.',
      author: 'Research Team',
      date: '2023-12-25',
      readTime: '9 min read',
      category: 'Quantum',
      image: '/api/placeholder/400/250',
      slug: 'quantum-computing-enterprise-applications'
    }
  ];

  const categories = ['all', 'AI', 'Cybersecurity', 'Cloud', 'SaaS', 'Analytics', 'Quantum'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights & News</title>
        <meta name="description" content="Stay updated with the latest technology insights, AI trends, cybersecurity tips, and industry news from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI insights, cybersecurity tips, cloud computing, tech news, industry trends" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology <span className="text-cyan-400">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay ahead with the latest technology trends, expert insights, and practical guides from our team of specialists.
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
                  className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-400 text-white'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {category === 'all' ? 'All Posts' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                  <div className="aspect-video bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-6xl text-cyan-400/30">📄</div>
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
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <Tag className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300"
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
      </div>
    </>
  );
};

export default BlogPage;


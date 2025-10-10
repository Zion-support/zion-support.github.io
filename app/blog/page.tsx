'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, User, Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations and what to expect in the coming years.',
      author: 'Zion Tech Team',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/images/blog/ai-future.jpg'
    },
    {
      id: 2,
      title: 'Blockchain Integration Best Practices',
      excerpt: 'Learn the essential strategies for successfully integrating blockchain technology into your existing business systems.',
      author: 'Zion Tech Team',
      date: 'Dec 12, 2024',
      readTime: '7 min read',
      category: 'Blockchain',
      image: '/images/blog/blockchain-integration.jpg'
    },
    {
      id: 3,
      title: 'Cloud Security: A Complete Guide',
      excerpt: 'Comprehensive guide to securing your cloud infrastructure and protecting your data from modern threats.',
      author: 'Zion Tech Team',
      date: 'Dec 10, 2024',
      readTime: '6 min read',
      category: 'Security',
      image: '/images/blog/cloud-security.jpg'
    },
    {
      id: 4,
      title: 'Digital Transformation Strategies',
      excerpt: 'Key strategies for successful digital transformation in enterprise environments and common pitfalls to avoid.',
      author: 'Zion Tech Team',
      date: 'Dec 8, 2024',
      readTime: '8 min read',
      category: 'Digital Transformation',
      image: '/images/blog/digital-transformation.jpg'
    },
    {
      id: 5,
      title: 'IoT Security Challenges and Solutions',
      excerpt: 'Understanding the unique security challenges in IoT deployments and how to address them effectively.',
      author: 'Zion Tech Team',
      date: 'Dec 5, 2024',
      readTime: '5 min read',
      category: 'IoT',
      image: '/images/blog/iot-security.jpg'
    },
    {
      id: 6,
      title: 'Machine Learning in Production',
      excerpt: 'Best practices for deploying and maintaining machine learning models in production environments.',
      author: 'Zion Tech Team',
      date: 'Dec 3, 2024',
      readTime: '9 min read',
      category: 'Machine Learning',
      image: '/images/blog/ml-production.jpg'
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Latest insights on AI, blockchain, cloud computing, and digital transformation from Zion Tech Group experts." />
        <meta name="keywords" content="tech blog, AI insights, blockchain, cloud computing, digital transformation, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tech Insights & News
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and innovations in AI, blockchain, cloud computing, and digital transformation.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-4xl">📝</div>
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
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="mb-3">
                  <span className="inline-block bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold text-white mb-3 hover:text-purple-300 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
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
    </div>
  );
};

export default BlogPage;
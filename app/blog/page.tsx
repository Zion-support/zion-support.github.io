'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Filter } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends that are reshaping enterprise operations and driving unprecedented business value.',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      category: 'AI & Machine Learning',
      readTime: '5 min read',
      image: '/images/blog/ai-enterprise-2024.jpg'
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Barriers in Data Processing',
      excerpt: 'Discover how quantum computing is revolutionizing data processing and what it means for your business.',
      author: 'Michael Chen',
      date: '2024-01-10',
      category: 'Quantum Computing',
      readTime: '7 min read',
      image: '/images/blog/quantum-computing.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: Best Practices for 2024',
      excerpt: 'Learn essential cybersecurity strategies to protect your organization in an AI-driven world.',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      category: 'Cybersecurity',
      readTime: '6 min read',
      image: '/images/blog/ai-cybersecurity.jpg'
    },
    {
      id: 4,
      title: 'Cloud Infrastructure Optimization: A Complete Guide',
      excerpt: 'Maximize your cloud investment with proven optimization strategies and cost-saving techniques.',
      author: 'David Kim',
      date: '2024-01-01',
      category: 'Cloud Computing',
      readTime: '8 min read',
      image: '/images/blog/cloud-optimization.jpg'
    },
    {
      id: 5,
      title: 'Machine Learning in Healthcare: Transforming Patient Care',
      excerpt: 'Explore how ML is revolutionizing healthcare delivery and improving patient outcomes.',
      author: 'Dr. Lisa Wang',
      date: '2023-12-28',
      category: 'Healthcare AI',
      readTime: '9 min read',
      image: '/images/blog/ml-healthcare.jpg'
    },
    {
      id: 6,
      title: 'Edge Computing: Bringing AI Closer to the Data',
      excerpt: 'Understand the benefits of edge computing for AI applications and real-time processing.',
      author: 'Alex Thompson',
      date: '2023-12-20',
      category: 'Edge Computing',
      readTime: '6 min read',
      image: '/images/blog/edge-computing.jpg'
    }
  ];

  const categories = [
    'All',
    'AI & Machine Learning',
    'Quantum Computing',
    'Cybersecurity',
    'Cloud Computing',
    'Healthcare AI',
    'Edge Computing',
    'Data Science',
    'IoT',
    'Blockchain'
  ];

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Helmet>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, machine learning, quantum computing, and emerging technologies from Zion Tech Group's expert team." />
        <meta name="keywords" content="AI blog, machine learning insights, technology trends, quantum computing, cybersecurity, cloud computing" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Tech <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Insights</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Stay ahead with the latest insights on AI, machine learning, and emerging technologies from our expert team.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select className="pl-12 pr-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-gray-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Article</h2>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-300 text-lg mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-gray-400 mb-6">
                    <User className="w-5 h-5 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Latest Articles</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our collection of in-depth articles on cutting-edge technologies and industry insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <article
                  key={post.id}
                  className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center text-gray-400 text-sm mb-4">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Subscribe to our newsletter and never miss the latest insights on AI and emerging technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPage;

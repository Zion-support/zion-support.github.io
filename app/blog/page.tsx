'use client'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations and decision-making processes.',
      author: 'Kleber Santos',
      date: '2024-01-15',
      category: 'AI',
      readTime: '5 min read',
      image: '/images/blog-1.jpg'
    },
    {
      id: 2,
      title: 'Cloud Computing Best Practices',
      excerpt: 'Essential strategies for implementing and managing cloud infrastructure for optimal performance and security.',
      author: 'Sarah Johnson',
      date: '2024-01-10',
      category: 'Cloud',
      readTime: '7 min read',
      image: '/images/blog-2.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity Trends 2024',
      excerpt: 'Latest developments in cybersecurity and how to protect your business from emerging threats.',
      author: 'Michael Chen',
      date: '2024-01-05',
      category: 'Security',
      readTime: '6 min read',
      image: '/images/blog-3.jpg'
    },
    {
      id: 4,
      title: 'Data Analytics for Growth',
      excerpt: 'How to leverage data analytics to drive business growth and make informed decisions.',
      author: 'Kleber Santos',
      date: '2024-01-01',
      category: 'Analytics',
      readTime: '8 min read',
      image: '/images/blog-4.jpg'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'AI', name: 'AI & Machine Learning' },
    { id: 'Cloud', name: 'Cloud Computing' },
    { id: 'Security', name: 'Cybersecurity' },
    { id: 'Analytics', name: 'Data Analytics' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Blog & Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in AI and IT.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700/70 transition-colors">
              <div className="mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <Tag className="w-16 h-16 text-cyan-400" />
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>

              <Link
                to={`/blog/${post.id}`}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Read More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-slate-700/50 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest insights and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
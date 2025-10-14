import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CalendarIcon,
  UserIcon,
  TagIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends and how they\'re transforming business operations across industries.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      category: 'AI & Machine Learning',
      readTime: '5 min read',
      image: '/api/placeholder/600/300'
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Small Businesses',
      excerpt: 'Learn essential cybersecurity measures to protect your business from evolving threats.',
      author: 'Security Team',
      date: '2024-01-10',
      category: 'Cybersecurity',
      readTime: '7 min read',
      image: '/api/placeholder/600/300'
    },
    {
      id: 3,
      title: 'Cloud Migration: A Step-by-Step Guide',
      excerpt: 'Complete guide to migrating your infrastructure to the cloud successfully.',
      author: 'Cloud Team',
      date: '2024-01-05',
      category: 'Cloud Computing',
      readTime: '10 min read',
      image: '/api/placeholder/600/300'
    },
    {
      id: 4,
      title: 'Building Scalable Micro SaaS Applications',
      excerpt: 'Best practices for developing and scaling micro SaaS solutions.',
      author: 'Development Team',
      date: '2024-01-01',
      category: 'Development',
      readTime: '8 min read',
      image: '/api/placeholder/600/300'
    }
  ];

  const categories = [
    'All',
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud Computing',
    'Development',
    'Digital Transformation'
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights on AI, cybersecurity, cloud computing, and digital transformation from Zion Tech Group experts." />
        <meta name="keywords" content="tech blog, AI insights, cybersecurity tips, cloud computing, digital transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tech <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and best practices in AI, cybersecurity, 
              cloud computing, and digital transformation.
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === 'All'
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post) => (
              <article key={post.id} className="group bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl overflow-hidden border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift">
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-purple-500 to-pink-500">
                  <div className="w-full h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">Blog Image</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <UserIcon className="w-4 h-4 mr-1" />
                      {post.author}
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300">
                      <TagIcon className="w-3 h-3 mr-1" />
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{post.readTime}</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-2 transition-all"
                    >
                      Read More <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
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
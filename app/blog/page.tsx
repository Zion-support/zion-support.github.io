'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'development', name: 'Development' },
    { id: 'business', name: 'Business' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations and what to expect in the coming years.',
      category: 'ai',
      author: 'John Smith',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Building Scalable Web Applications',
      excerpt: 'Best practices for creating web applications that can handle growth and maintain performance at scale.',
      category: 'development',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      readTime: '7 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Digital Transformation Strategies',
      excerpt: 'How to successfully navigate digital transformation and leverage technology for business growth.',
      category: 'business',
      author: 'Mike Chen',
      date: '2024-01-10',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Machine Learning in Production',
      excerpt: 'Practical insights on deploying and maintaining machine learning models in production environments.',
      category: 'ai',
      author: 'Emily Davis',
      date: '2024-01-08',
      readTime: '8 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Cloud Architecture Best Practices',
      excerpt: 'Designing robust and cost-effective cloud architectures for modern applications.',
      category: 'development',
      author: 'Alex Rodriguez',
      date: '2024-01-05',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'Data-Driven Decision Making',
      excerpt: 'How to build a data-driven culture and make better business decisions using analytics.',
      category: 'business',
      author: 'Lisa Wang',
      date: '2024-01-03',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI and IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, and technology trends from our expert team." />
        <meta name="keywords" content="blog, AI insights, IT solutions, technology trends, development, business" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Insights, trends, and best practices in AI, IT solutions, and technology.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <button className="flex items-center text-cyan-600 hover:text-cyan-700 font-semibold">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 bg-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends and how they\'re transforming business operations across industries.',
      author: 'Zion Tech Group',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/blog/ai-future.jpg'
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Complexities',
      excerpt: 'Understanding quantum computing and its potential applications in solving complex business problems.',
      author: 'Zion Tech Group',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Quantum Computing',
      image: '/blog/quantum-computing.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for Modern Enterprises',
      excerpt: 'Essential cybersecurity strategies to protect your business from evolving threats and attacks.',
      author: 'Zion Tech Group',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/blog/cybersecurity.jpg'
    },
    {
      id: 4,
      title: 'Digital Transformation: A Step-by-Step Guide',
      excerpt: 'Learn how to successfully navigate digital transformation and modernize your business processes.',
      author: 'Zion Tech Group',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Digital Transformation',
      image: '/blog/digital-transformation.jpg'
    }
  ];

  const categories = ['All', 'AI & Technology', 'Quantum Computing', 'Cybersecurity', 'Digital Transformation'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and digital transformation from Zion Tech Group experts." />
        <meta name="keywords" content="blog, AI insights, technology news, digital transformation, Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and innovations in AI, technology, 
            and digital transformation.
          </p>
        </section>

        {/* Search and Filter */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
              </div>
              <select className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors">
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 group"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-6xl opacity-50">📝</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-400 mb-3">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
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
                    <button className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
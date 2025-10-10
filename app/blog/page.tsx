'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations and creating new opportunities.',
      author: 'John Smith',
      date: '2024-01-15',
      category: 'AI',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for 2024',
      excerpt: 'Essential security measures every business should implement to protect against evolving cyber threats.',
      author: 'Sarah Johnson',
      date: '2024-01-10',
      category: 'Security',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Cloud Migration Strategies',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud.',
      author: 'David Chen',
      date: '2024-01-05',
      category: 'Cloud',
      readTime: '6 min read'
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Blog - Zion Tech Group | AI and IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="blog, AI insights, IT trends, technology news, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, IT solutions, and technology trends.
            </p>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="mb-4">
                    <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                    <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest AI and IT insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default BlogPage;

import React from 'react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest trends in artificial intelligence and how they are transforming business operations across industries.',
      author: 'Zion Tech Group',
      date: '2024-01-15',
      category: 'AI & Technology',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      title: '5G Implementation: A Complete Guide for Enterprises',
      excerpt: 'Learn how to successfully implement 5G technology in your organization and leverage its benefits for digital transformation.',
      author: 'Zion Tech Group',
      date: '2024-01-10',
      category: '5G & Connectivity',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for Remote Work',
      excerpt: 'Essential security measures to protect your business data and systems in the era of remote work and hybrid environments.',
      author: 'Zion Tech Group',
      date: '2024-01-05',
      category: 'Cybersecurity',
      readTime: '6 min read',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology trends, cybersecurity, and digital transformation from Zion Tech Group." />
        <meta name="keywords" content="blog, technology insights, AI trends, cybersecurity, digital transformation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Technology Insights & News
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Stay ahead of the curve with expert insights on AI, cybersecurity, cloud computing, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="bg-gray-800 rounded-lg h-48 mb-6 flex items-center justify-center">
                  <span className="text-gray-400">Post Image</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400 text-sm font-medium">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{post.readTime}</span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Stay Updated</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Subscribe to our newsletter and never miss the latest insights on technology and digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

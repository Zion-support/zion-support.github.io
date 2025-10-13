import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Globe } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends shaping the business landscape and how companies can leverage these technologies for growth.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/api/placeholder/600/300'
    },
    {
      id: 2,
      title: '5G Network Implementation: A Complete Guide for Enterprises',
      excerpt: 'Learn how to successfully implement 5G networks in your organization and unlock the potential of ultra-fast connectivity.',
      author: 'Network Solutions Team',
      date: '2024-01-10',
      readTime: '8 min read',
      category: '5G Solutions',
      image: '/api/placeholder/600/300'
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for Remote Work Environments',
      excerpt: 'Essential security measures to protect your remote workforce and maintain data integrity in distributed environments.',
      author: 'Security Team',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/600/300'
    },
    {
      id: 4,
      title: 'Micro SaaS: Building Scalable Solutions for Modern Businesses',
      excerpt: 'Discover how micro SaaS applications can transform your business operations and drive efficiency.',
      author: 'Product Team',
      date: '2024-01-01',
      readTime: '7 min read',
      category: 'Micro SaaS',
      image: '/api/placeholder/600/300'
    }
  ];

  const categories = ['All', 'AI & Technology', '5G Solutions', 'Cybersecurity', 'Micro SaaS', 'Web Development'];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Latest Insights on AI, 5G, and Technology</title>
        <meta name="description" content="Stay updated with the latest insights on AI, 5G, cybersecurity, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, 5G technology, cybersecurity insights, tech trends, business technology" />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Latest insights on AI, 5G, and technology trends" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Zion Tech Group" />
        <meta name="twitter:description" content="Latest insights on AI, 5G, and technology trends" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Tech Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead with the latest insights on AI, 5G, cybersecurity, and emerging technologies
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 border border-white/20"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-t-xl flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-cyan-400" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:gap-3 transition-all duration-200"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-white/10">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-300 mb-8">
                Get the latest tech insights and industry updates delivered to your inbox
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
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
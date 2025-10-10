'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends shaping the business landscape in 2024 and beyond.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: 'Micro SaaS Solutions: Scaling Your Business with AI',
      excerpt: 'Discover how micro SaaS tools can transform your business operations and drive growth.',
      author: 'Sarah Johnson',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Business',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for Modern Enterprises',
      excerpt: 'Essential cybersecurity strategies to protect your business in the digital age.',
      author: 'Mike Chen',
      date: '2024-01-08',
      readTime: '6 min read',
      category: 'Security',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 4,
      title: 'Cloud Migration: A Complete Guide for Businesses',
      excerpt: 'Step-by-step guide to migrating your infrastructure to the cloud successfully.',
      author: 'Alex Rodriguez',
      date: '2024-01-05',
      readTime: '8 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 5,
      title: 'AI-Powered Analytics: Transforming Data into Insights',
      excerpt: 'How AI analytics can revolutionize your business decision-making process.',
      author: 'Emily Watson',
      date: '2024-01-03',
      readTime: '4 min read',
      category: 'Data Analytics',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing: What It Means for Your Business',
      excerpt: 'Understanding edge computing and its impact on modern business operations.',
      author: 'David Kim',
      date: '2024-01-01',
      readTime: '6 min read',
      category: 'Technology',
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const categories = ['All', 'AI & Technology', 'Business', 'Security', 'Cloud Computing', 'Data Analytics', 'Technology'];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and business innovation from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, business innovation, cybersecurity, cloud computing, data analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text">
              Technology Insights
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead with the latest insights on AI, technology, and business innovation from our expert team.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 neon-text">Featured Article</h2>
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="cyber-card hologram-card p-8 mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{post.title}</h3>
                    <p className="text-gray-300 mb-6 text-lg">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
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
                        className="cyber-button inline-flex items-center"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 neon-text">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-gray-400">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center group"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get the latest technology insights and AI trends delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
                <button className="cyber-button px-8 py-3">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
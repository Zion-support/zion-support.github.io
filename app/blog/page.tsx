'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends that are reshaping industries and discover how businesses can leverage these technologies for competitive advantage.',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      image: '/images/blog/ai-future.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Barriers',
      excerpt: 'Understanding quantum computing fundamentals and how it\'s revolutionizing problem-solving in cryptography, optimization, and simulation.',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Quantum Computing',
      image: '/images/blog/quantum-computing.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for Modern Enterprises',
      excerpt: 'Essential security measures every organization should implement to protect against evolving cyber threats and data breaches.',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/images/blog/cybersecurity.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Cloud Migration Strategies: A Complete Guide',
      excerpt: 'Step-by-step approach to migrating your infrastructure to the cloud while minimizing risks and maximizing benefits.',
      author: 'David Kim',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Cloud Solutions',
      image: '/images/blog/cloud-migration.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'How to build effective data analytics pipelines and create actionable business intelligence from your data assets.',
      author: 'Dr. Sarah Johnson',
      date: '2023-12-28',
      readTime: '4 min read',
      category: 'Data Analytics',
      image: '/images/blog/data-analytics.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing in IoT Applications',
      excerpt: 'Exploring how edge computing is transforming IoT deployments and enabling real-time processing at the network edge.',
      author: 'Michael Chen',
      date: '2023-12-25',
      readTime: '5 min read',
      category: 'IoT & Edge Computing',
      image: '/images/blog/edge-computing.jpg',
      featured: false
    }
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Quantum Computing',
    'Cybersecurity',
    'Cloud Solutions',
    'Data Analytics',
    'IoT & Edge Computing'
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights & Industry News</title>
        <meta name="description" content="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI insights, quantum computing, cybersecurity, cloud solutions, data analytics, tech trends" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Technology
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Blog
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Stay ahead of the curve with insights from our technology experts. 
                Discover the latest trends, best practices, and innovations shaping the future.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-10 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    index === 0
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 text-sm font-semibold">{featuredPost.category}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
                    <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-sm">{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-sm">{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">📝</span>
                      </div>
                      <p className="text-gray-300">Featured Article</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Latest Articles</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Insights, tutorials, and industry analysis from our technology experts
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 h-48 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <span className="text-2xl">📄</span>
                      </div>
                      <p className="text-gray-300 text-sm">Article Image</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 text-sm font-semibold">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-400 text-xs">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-400 text-xs">{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-400 text-xs">{post.readTime}</span>
                      </div>
                    </div>
                    <button className="text-cyan-400 text-sm font-semibold hover:text-cyan-300 transition-colors flex items-center gap-1">
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss the latest insights, tutorials, and industry updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
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
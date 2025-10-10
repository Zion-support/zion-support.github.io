'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends that are reshaping industries and discover how businesses can leverage these technologies for competitive advantage.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration, including common pitfalls to avoid and cost optimization techniques.',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      title: 'Cybersecurity in the Age of AI: Protecting Your Digital Assets',
      excerpt: 'Discover how AI is both enhancing cybersecurity capabilities and creating new challenges, plus strategies to stay ahead of threats.',
      author: 'Alex Thompson',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      title: 'Building Scalable Microservices Architecture',
      excerpt: 'A comprehensive guide to designing and implementing microservices that can scale with your business growth and technical requirements.',
      author: 'Jennifer Liu',
      date: '2024-01-08',
      readTime: '15 min read',
      category: 'Software Architecture',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      title: 'Data Analytics Revolution: From Insights to Action',
      excerpt: 'How modern data analytics platforms are transforming decision-making processes and driving business intelligence across organizations.',
      author: 'David Park',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'Data Analytics',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      title: 'The Rise of Edge Computing: Bringing Intelligence Closer',
      excerpt: 'Understanding edge computing benefits, use cases, and implementation strategies for businesses looking to reduce latency and improve performance.',
      author: 'Maria Garcia',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Edge Computing',
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog | Zion Tech Group - AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and IT trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, IT insights, technology trends, cloud computing, cybersecurity, data analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Blog">
              Blog
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              AI & IT Insights & Trends
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights, industry trends, and practical guides on AI, cloud computing, and IT solutions.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 cyber-card hologram-card energy-pulse mb-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                      <span className="text-cyan-400 text-sm">{post.category}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4 neon-text cyber-scan-line">{post.title}</h2>
                    <p className="text-gray-300 mb-6 text-lg">{post.excerpt}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center group-hover:scale-105 neon-glow">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <div className="text-6xl">📝</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group relative cyber-card hologram-card energy-pulse">
                  <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-4xl">📝</div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full">{post.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 neon-text cyber-scan-line group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
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
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105 neon-glow">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 cyber-card">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Stay Updated with Our Latest Insights
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter and never miss the latest trends and insights in AI and IT.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 neon-glow">
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


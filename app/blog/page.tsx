'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Calendar, User, Tag, Search, Filter } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      category: 'AI',
      readTime: '5 min read',
      image: '🤖',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration that minimize risks and maximize benefits.',
      author: 'Kleber Santos',
      date: '2024-01-10',
      category: 'Cloud',
      readTime: '8 min read',
      image: '☁️',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity in 2024: Protecting Your Digital Assets',
      excerpt: 'Discover the latest cybersecurity threats and how to protect your business with advanced security measures.',
      author: 'Security Team',
      date: '2024-01-05',
      category: 'Security',
      readTime: '6 min read',
      image: '🔒',
      featured: false
    },
    {
      id: 4,
      title: 'Micro SaaS: The Future of Software Development',
      excerpt: 'Understanding the micro SaaS revolution and how small, focused applications are changing the software industry.',
      author: 'Development Team',
      date: '2024-01-01',
      category: 'SaaS',
      readTime: '4 min read',
      image: '⚡',
      featured: false
    },
    {
      id: 5,
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'Learn how to leverage data analytics to make informed business decisions and drive growth.',
      author: 'Analytics Team',
      date: '2023-12-28',
      category: 'Analytics',
      readTime: '7 min read',
      image: '📊',
      featured: false
    },
    {
      id: 6,
      title: 'DevOps Transformation: Building Better Software Faster',
      excerpt: 'How DevOps practices can accelerate your software development and improve team collaboration.',
      author: 'DevOps Team',
      date: '2023-12-25',
      category: 'DevOps',
      readTime: '6 min read',
      image: '🚀',
      featured: false
    }
  ];

  const categories = ['All', 'AI', 'Cloud', 'Security', 'SaaS', 'Analytics', 'DevOps'];

  return (
    <React.Fragment>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Read our latest insights on AI, IT solutions, cloud computing, cybersecurity, and technology trends. Stay updated with Zion Tech Group's expert analysis." />
        <meta name="keywords" content="AI blog, IT insights, technology trends, cloud computing, cybersecurity, micro SaaS, data analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Blog</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay updated with the latest insights on AI, IT solutions, and technology trends from our expert team.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      category === 'All'
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

          {/* Featured Article */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
              {blogPosts.filter(post => post.featured).map((post) => (
                <div key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 hover:bg-white/10 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="text-6xl mb-4">{post.image}</div>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-400 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">{post.title}</h3>
                      <p className="text-gray-300 mb-6 text-lg">{post.excerpt}</p>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-400 text-sm">{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-400 text-sm">{post.date}</span>
                        </div>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg p-8">
                      <div className="text-8xl text-center mb-4">{post.image}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.filter(post => !post.featured).map((post) => (
                  <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                    <div className="text-4xl mb-4">{post.image}</div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Stay Updated
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Subscribe to our newsletter and never miss the latest insights on AI and IT solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default BlogPage;
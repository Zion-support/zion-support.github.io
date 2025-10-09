'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Calendar, User, ArrowRight, Tag, Clock, Eye, ThumbsUp, Share2, Search } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends that are reshaping enterprise operations and discover what the future holds for artificial intelligence in business.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI Trends',
      image: '/images/blog/ai-trends-2024.jpg',
      views: 1250,
      likes: 89
    },
    {
      id: 2,
      title: 'How Machine Learning is Revolutionizing Healthcare',
      excerpt: 'Discover how AI and machine learning are transforming patient care, diagnosis accuracy, and treatment outcomes in modern healthcare.',
      author: 'Emily Johnson',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Healthcare AI',
      image: '/images/blog/healthcare-ml.jpg',
      views: 980,
      likes: 67
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: Best Practices for 2024',
      excerpt: 'Learn about the latest cybersecurity threats and how AI-powered solutions can help protect your organization from emerging risks.',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Cybersecurity',
      image: '/images/blog/ai-cybersecurity.jpg',
      views: 1100,
      likes: 78
    },
    {
      id: 4,
      title: 'Cloud Migration Strategies: A Complete Guide for Enterprises',
      excerpt: 'Everything you need to know about migrating to the cloud, from planning and execution to optimization and cost management.',
      author: 'Kleber Santos',
      date: '2024-01-08',
      readTime: '12 min read',
      category: 'Cloud Computing',
      image: '/images/blog/cloud-migration.jpg',
      views: 1450,
      likes: 95
    },
    {
      id: 5,
      title: 'Building Scalable AI Applications: Architecture Patterns',
      excerpt: 'Learn the essential architecture patterns for building AI applications that can scale with your business growth.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'AI Development',
      image: '/images/blog/ai-architecture.jpg',
      views: 890,
      likes: 56
    },
    {
      id: 6,
      title: 'The ROI of AI Implementation: Measuring Success',
      excerpt: 'How to measure and maximize the return on investment from your AI initiatives with proven metrics and strategies.',
      author: 'Emily Johnson',
      date: '2024-01-03',
      readTime: '7 min read',
      category: 'Business Strategy',
      image: '/images/blog/ai-roi.jpg',
      views: 1200,
      likes: 72
    }
  ];

  const categories = [
    'All Posts',
    'AI Trends',
    'Healthcare AI',
    'Cybersecurity',
    'Cloud Computing',
    'AI Development',
    'Business Strategy',
    'Case Studies'
  ];

  const featuredPost = blogPosts[0];

  return (
    <>
      <SEOOptimizer
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, IT solutions, and technology trends. Expert articles, case studies, and industry analysis from Zion Tech Group."
        keywords={['AI blog', 'technology insights', 'AI trends', 'IT solutions', 'machine learning', 'artificial intelligence']}
        canonicalUrl="https://ziontechgroup.com/blog"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Tech Insights & AI Trends
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Stay Ahead with Expert Knowledge
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Discover the latest insights, trends, and best practices in AI, machine learning, 
                and enterprise technology from our team of experts.
              </p>
            </div>
          </section>

          {/* Search and Filter Section */}
          <section className="container mx-auto px-4 py-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                        index === 0
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Featured Post */}
          <section className="container mx-auto px-4 py-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6 neon-text">Featured Article</h2>
              <div className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500 text-white text-xs rounded-full">
                        {featuredPost.category}
                      </span>
                      <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 neon-text">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300 text-sm">{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300 text-sm">{featuredPost.date}</span>
                        </div>
                      </div>
                      <a
                        href={`/blog/${featuredPost.id}`}
                        className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                      >
                        <span className="font-medium">Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">📊</div>
                      <div className="text-sm">Featured Article</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 neon-text">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.slice(1).map((post, index) => (
                  <article key={post.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-2 py-1 bg-slate-800 text-cyan-400 text-xs rounded">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-xs">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 neon-text line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <ThumbsUp className="w-3 h-3" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                      <span>{post.date}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-300 text-sm">{post.author}</span>
                      </div>
                      <a
                        href={`/blog/${post.id}`}
                        className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                      >
                        <span className="text-sm">Read</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="cyber-card p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 neon-text">
                  Stay Updated
                </h2>
                <p className="text-gray-300 mb-6">
                  Subscribe to our newsletter and never miss the latest insights on AI and technology trends.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                  <button className="cyber-button px-6 py-3">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;

'use client';
import React from 'react';
import { Calendar, User, ArrowRight, Tag, Clock, Search, Filter, TrendingUp, Star, Eye } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2025 Predictions',
      excerpt: 'Explore the latest trends and predictions for AI adoption in enterprise environments, including quantum computing integration and autonomous systems.',
      author: 'Kleber Santos',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'AI Trends',
      tags: ['AI', 'Enterprise', 'Future Tech', 'Predictions'],
      image: '/blog/ai-enterprise-2025.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'How Quantum Computing Will Revolutionize Data Processing',
      excerpt: 'Discover how quantum computing is set to transform data processing capabilities and what it means for your business.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-12',
      readTime: '12 min read',
      category: 'Quantum Computing',
      tags: ['Quantum Computing', 'Data Processing', 'Technology', 'Innovation'],
      image: '/blog/quantum-computing.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Building Scalable AI Solutions: Best Practices',
      excerpt: 'Learn the essential best practices for building AI solutions that can scale with your business growth.',
      author: 'Michael Rodriguez',
      date: '2025-01-10',
      readTime: '10 min read',
      category: 'AI Development',
      tags: ['AI Development', 'Scalability', 'Best Practices', 'Architecture'],
      image: '/blog/scalable-ai.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Understanding the evolving cybersecurity landscape and how AI can both pose risks and provide solutions.',
      author: 'Jennifer Martinez',
      date: '2025-01-08',
      readTime: '7 min read',
      category: 'Cybersecurity',
      tags: ['Cybersecurity', 'AI Security', 'Threats', 'Solutions'],
      image: '/blog/ai-cybersecurity.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'The ROI of AI Implementation: Real Case Studies',
      excerpt: 'Real-world examples of AI implementation ROI and how businesses are measuring success.',
      author: 'David Thompson',
      date: '2025-01-05',
      readTime: '9 min read',
      category: 'Business Impact',
      tags: ['ROI', 'Case Studies', 'Business Impact', 'Success Stories'],
      image: '/blog/ai-roi.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Machine Learning vs Deep Learning: Choosing the Right Approach',
      excerpt: 'A comprehensive guide to understanding when to use machine learning vs deep learning for your projects.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-03',
      readTime: '11 min read',
      category: 'AI Education',
      tags: ['Machine Learning', 'Deep Learning', 'AI Education', 'Comparison'],
      image: '/blog/ml-vs-dl.jpg',
      featured: false
    }
  ];

  const categories = [
    'All Posts',
    'AI Trends',
    'Quantum Computing',
    'AI Development',
    'Cybersecurity',
    'Business Impact',
    'AI Education'
  ];

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
              AI Insights & News
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and innovations in artificial intelligence, 
              quantum computing, and enterprise technology.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 neon-text">Featured Article</h2>
              <div className="cyber-card p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="w-full h-64 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-16 h-16 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm mr-4">
                        {featuredPost.category}
                      </span>
                      <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h3>
                    <p className="text-gray-300 mb-6 text-lg">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-gray-300">{featuredPost.author}</span>
                        <Calendar className="w-5 h-5 text-gray-400 ml-4 mr-2" />
                        <span className="text-gray-300">{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <a
                        href={`/blog/${featuredPost.id}`}
                        className="cyber-button inline-flex items-center"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Categories Filter */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
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
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="cyber-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-48 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <Eye className="w-12 h-12 text-white" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm mr-4">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-slate-800 text-gray-400 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                      <Calendar className="w-4 h-4 ml-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <a
                      href={`/blog/${post.id}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="cyber-card p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">
                Stay Updated with AI Insights
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter and get the latest AI trends, insights, and case studies delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                />
                <button className="cyber-button px-6 py-3">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Ready to Implement AI in Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't just read about AI - experience it. Let us help you implement cutting-edge AI solutions in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg"
              >
                <Star className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="/case-studies"
                className="cyber-button-secondary inline-flex items-center px-8 py-4 text-lg"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                View Case Studies
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
'use client';
import React from 'react';
import { Phone, Mail, MapPin, Brain, Users, Award, Clock, Globe, Shield, Zap, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Star, Building, Cpu, Cloud, Database, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Lock, Truck, Link, HardDrive, FileCheck, Calendar, User, Tag } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Enterprise: 2025 Predictions',
      excerpt: 'Explore the latest trends and predictions for AI adoption in enterprise environments, including quantum computing integration and autonomous systems.',
      author: 'Dr. Kleber Santos',
      date: 'January 15, 2025',
      readTime: '8 min read',
      category: 'AI Trends',
      image: '🤖',
      featured: true
    },
    {
      title: 'Quantum Computing: Breaking Through Traditional Barriers',
      excerpt: 'How quantum computing is revolutionizing problem-solving capabilities and what it means for the future of technology.',
      author: 'Sarah Chen',
      date: 'January 12, 2025',
      readTime: '6 min read',
      category: 'Quantum Computing',
      image: '⚛️',
      featured: true
    },
    {
      title: 'Building Ethical AI: A Comprehensive Guide',
      excerpt: 'Learn about the principles and practices for developing AI systems that are fair, transparent, and beneficial to society.',
      author: 'Michael Rodriguez',
      date: 'January 10, 2025',
      readTime: '10 min read',
      category: 'AI Ethics',
      image: '⚖️',
      featured: false
    },
    {
      title: 'Edge Computing: Bringing AI Closer to Users',
      excerpt: 'Discover how edge computing is enabling real-time AI processing and transforming user experiences across industries.',
      author: 'Emily Johnson',
      date: 'January 8, 2025',
      readTime: '7 min read',
      category: 'Edge Computing',
      image: '🌐',
      featured: false
    },
    {
      title: 'The Rise of Autonomous Systems in Business',
      excerpt: 'How autonomous systems are reshaping business operations and creating new opportunities for growth and efficiency.',
      author: 'Dr. Kleber Santos',
      date: 'January 5, 2025',
      readTime: '9 min read',
      category: 'Autonomous Systems',
      image: '🚗',
      featured: false
    },
    {
      title: 'Cybersecurity in the Age of AI: New Challenges and Solutions',
      excerpt: 'Understanding the evolving cybersecurity landscape and how AI is both a threat and a solution in modern security.',
      author: 'Sarah Chen',
      date: 'January 3, 2025',
      readTime: '8 min read',
      category: 'Cybersecurity',
      image: '🛡️',
      featured: false
    },
    {
      title: 'Machine Learning at Scale: Best Practices for Enterprise',
      excerpt: 'Essential strategies for implementing machine learning solutions at enterprise scale, including data management and model deployment.',
      author: 'Michael Rodriguez',
      date: 'December 30, 2024',
      readTime: '12 min read',
      category: 'Machine Learning',
      image: '📊',
      featured: false
    },
    {
      title: 'The Metaverse and AI: Creating Immersive Digital Experiences',
      excerpt: 'Exploring the intersection of AI and the metaverse, and how these technologies are creating new possibilities for digital interaction.',
      author: 'Emily Johnson',
      date: 'December 28, 2024',
      readTime: '6 min read',
      category: 'Metaverse',
      image: '🎮',
      featured: false
    }
  ];

  const categories = ['All', 'AI Trends', 'Quantum Computing', 'AI Ethics', 'Edge Computing', 'Autonomous Systems', 'Cybersecurity', 'Machine Learning', 'Metaverse'];

  return (
    <>
      <SEOOptimizer
        title="Blog - Zion Tech Group | AI & Technology Insights"
        description="Stay updated with the latest insights on AI, quantum computing, and technology trends from Zion Tech Group's expert team."
        keywords={['AI blog', 'technology insights', 'quantum computing', 'artificial intelligence trends', 'tech news']}
        canonicalUrl="https://ziontechgroup.com/blog"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Our Blog">
              Our Blog
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
              Insights, Trends, and Innovations in AI & Technology
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Stay ahead of the curve with expert insights on artificial intelligence, quantum computing, 
              and the latest technology trends shaping our future.
            </p>
          </section>

          {/* Categories */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    category === 'All' 
                      ? 'bg-cyan-600 text-white' 
                      : 'bg-slate-800 text-gray-300 hover:bg-cyan-600 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* Featured Posts */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{post.image}</div>
                    <div>
                      <span className="inline-block bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{post.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 group">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </article>
              ))}
            </div>
          </section>

          {/* All Posts */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{post.image}</div>
                    <span className="inline-block bg-purple-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 neon-text">{post.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center gap-2 group">
                    Read More
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mb-16">
            <div className="cyber-card p-8 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Stay Updated with Our Latest Insights
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Subscribe to our newsletter and never miss the latest trends, insights, and innovations in AI and technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 border border-gray-600 focus:border-cyan-400 focus:outline-none"
                />
                <button className="cyber-button px-6 py-3 font-semibold hover:scale-105 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Have Questions About Our Insights?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our team of experts is here to help you understand and implement the latest AI and technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Contact Our Experts
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
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
'use client';
import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, Search, Tag, Filter, TrendingUp, Star, Eye, MessageCircle, Share2, BookOpen, Brain, Cpu, Shield, Cloud, Zap, BarChart, MessageSquare, Eye as EyeIcon, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen as BookIcon, Calculator, Calendar as CalendarIcon, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Lock, Database, Globe, Target, Search as SearchIcon, FileText, Smartphone, Settings, Phone, Mail, MapPin, DollarSign, Truck, Link, HardDrive, FileCheck } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'AI & Machine Learning',
    'Technology Trends',
    'Business Automation',
    'Cybersecurity',
    'Cloud Computing',
    'Data Analytics',
    'Industry Insights',
    'Case Studies',
    'Tutorials'
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends that are reshaping business operations and discover how companies are leveraging artificial intelligence to gain competitive advantages.',
      content: 'Artificial Intelligence continues to revolutionize the business landscape, with 2024 bringing unprecedented advancements in machine learning, natural language processing, and automation technologies...',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief AI Officer',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Machine Learning', 'Business', 'Trends', '2024'],
      image: '/blog/ai-trends-2024.jpg',
      featured: true,
      views: 1250,
      likes: 89
    },
    {
      id: 2,
      title: 'How to Implement AI Automation in Your Business',
      excerpt: 'A comprehensive guide to implementing AI automation solutions in your organization, from planning to execution and optimization.',
      content: 'Implementing AI automation in your business doesn\'t have to be overwhelming. With the right strategy and approach, you can transform your operations and achieve significant efficiency gains...',
      author: 'Michael Rodriguez',
      authorRole: 'CTO',
      publishDate: '2024-01-10',
      readTime: '12 min read',
      category: 'Business Automation',
      tags: ['Automation', 'Implementation', 'Strategy', 'ROI'],
      image: '/blog/ai-automation-guide.jpg',
      featured: true,
      views: 980,
      likes: 67
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for AI-Powered Systems',
      excerpt: 'Learn essential security measures to protect your AI systems and data from emerging threats in the digital landscape.',
      content: 'As AI systems become more prevalent in business operations, ensuring their security becomes paramount. This comprehensive guide covers the latest cybersecurity best practices...',
      author: 'Dr. Emily Watson',
      authorRole: 'Head of Research',
      publishDate: '2024-01-05',
      readTime: '10 min read',
      category: 'Cybersecurity',
      tags: ['Cybersecurity', 'AI Security', 'Best Practices', 'Data Protection'],
      image: '/blog/ai-cybersecurity.jpg',
      featured: false,
      views: 756,
      likes: 45
    },
    {
      id: 4,
      title: 'Cloud Migration Strategies for Enterprise AI Workloads',
      excerpt: 'Discover the most effective strategies for migrating AI workloads to the cloud while maintaining performance and security.',
      content: 'Cloud migration for AI workloads presents unique challenges and opportunities. This article explores proven strategies for successful cloud migration...',
      author: 'Kleber Santos',
      authorRole: 'CEO & Founder',
      publishDate: '2024-01-01',
      readTime: '15 min read',
      category: 'Cloud Computing',
      tags: ['Cloud Migration', 'AI Workloads', 'Enterprise', 'Strategy'],
      image: '/blog/cloud-migration-ai.jpg',
      featured: false,
      views: 892,
      likes: 52
    },
    {
      id: 5,
      title: 'Data Analytics: Turning Raw Data into Business Insights',
      excerpt: 'Learn how to transform your raw business data into actionable insights using advanced analytics and AI-powered tools.',
      content: 'Data is the new oil, but only if you know how to refine it. This comprehensive guide shows you how to extract valuable insights from your business data...',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief AI Officer',
      publishDate: '2023-12-28',
      readTime: '11 min read',
      category: 'Data Analytics',
      tags: ['Data Analytics', 'Business Intelligence', 'Insights', 'Data Science'],
      image: '/blog/data-analytics-insights.jpg',
      featured: false,
      views: 634,
      likes: 38
    },
    {
      id: 6,
      title: 'Case Study: How Company X Increased Efficiency by 300% with AI',
      excerpt: 'A detailed case study showing how a Fortune 500 company achieved remarkable efficiency gains through strategic AI implementation.',
      content: 'This case study examines how a leading manufacturing company implemented our AI solutions to achieve unprecedented efficiency gains...',
      author: 'Michael Rodriguez',
      authorRole: 'CTO',
      publishDate: '2023-12-20',
      readTime: '9 min read',
      category: 'Case Studies',
      tags: ['Case Study', 'Success Story', 'Efficiency', 'Manufacturing'],
      image: '/blog/case-study-efficiency.jpg',
      featured: true,
      views: 1120,
      likes: 73
    },
    {
      id: 7,
      title: 'The Rise of Quantum Computing in Business Applications',
      excerpt: 'Explore how quantum computing is beginning to impact business applications and what it means for the future of enterprise technology.',
      content: 'Quantum computing represents a paradigm shift in computational power. This article explores current applications and future possibilities...',
      author: 'Dr. Emily Watson',
      authorRole: 'Head of Research',
      publishDate: '2023-12-15',
      readTime: '13 min read',
      category: 'Technology Trends',
      tags: ['Quantum Computing', 'Future Technology', 'Business Applications'],
      image: '/blog/quantum-computing-business.jpg',
      featured: false,
      views: 445,
      likes: 29
    },
    {
      id: 8,
      title: 'AI Ethics: Building Responsible AI Systems',
      excerpt: 'Understanding the importance of AI ethics and how to build responsible AI systems that benefit society while minimizing risks.',
      content: 'As AI becomes more powerful, ensuring it\'s developed and deployed ethically becomes crucial. This guide covers the principles of responsible AI...',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief AI Officer',
      publishDate: '2023-12-10',
      readTime: '14 min read',
      category: 'Industry Insights',
      tags: ['AI Ethics', 'Responsible AI', 'Ethics', 'Society'],
      image: '/blog/ai-ethics-responsible.jpg',
      featured: false,
      views: 567,
      likes: 41
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <SEOOptimizer
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, technology trends, business automation, and cybersecurity. Expert articles from our team of technology leaders."
        keywords={['AI blog', 'technology blog', 'business automation', 'cybersecurity', 'machine learning', 'tech insights']}
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
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Insights, Trends, and Expert Analysis
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Stay ahead of the curve with our expert insights on AI, technology trends, business automation, 
              and the latest developments in the tech industry.
            </p>
          </section>

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="cyber-card p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Posts */}
          {selectedCategory === 'All' && searchTerm === '' && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 neon-text">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400 text-sm font-medium">Featured</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 neon-text hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                      <a
                        href={`/blog/${post.id}`}
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* All Posts */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 neon-text">
              {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <article key={post.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                    {post.featured && (
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 text-sm">Featured</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 neon-text hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                    <a
                      href={`/blog/${post.id}`}
                      className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Stay Updated with Our Latest Insights
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Subscribe to our newsletter and get the latest articles, insights, and technology trends delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300"
                />
                <button className="cyber-button px-6 py-3 font-semibold hover:scale-105 transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
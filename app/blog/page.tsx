'use client';
<<<<<<< HEAD
import React, { useState } from 'react';
import { Calendar, Clock, User, Tag, Search, Filter, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const categories = [
    'All',
    'AI & Machine Learning',
    'Technology Trends',
    'Business Intelligence',
    'Digital Transformation',
    'Cybersecurity',
    'Cloud Computing',
    'Case Studies',
    'Industry Insights'
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Explore the latest trends in enterprise AI adoption, from generative AI to autonomous systems, and discover how businesses are leveraging AI for competitive advantage.',
      content: 'Full article content...',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief AI Officer',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Enterprise', 'Trends', '2024'],
      image: '/blog/ai-enterprise-trends.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'How Machine Learning is Revolutionizing Customer Service',
      excerpt: 'Discover how AI-powered chatbots and sentiment analysis are transforming customer service operations and improving customer satisfaction rates.',
      content: 'Full article content...',
      author: 'Michael Rodriguez',
      authorRole: 'CTO',
      publishDate: '2024-01-12',
      readTime: '6 min read',
      category: 'AI & Machine Learning',
      tags: ['Machine Learning', 'Customer Service', 'Chatbots'],
      image: '/blog/ml-customer-service.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration, including planning, execution, and post-migration optimization.',
      content: 'Full article content...',
      author: 'Dr. Emily Watson',
      authorRole: 'Head of Data Science',
      publishDate: '2024-01-10',
      readTime: '10 min read',
      category: 'Cloud Computing',
      tags: ['Cloud Migration', 'Best Practices', 'AWS', 'Azure'],
      image: '/blog/cloud-migration-guide.jpg',
      featured: true
    },
    {
      id: 4,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Examine the evolving cybersecurity landscape with AI integration, including new attack vectors and AI-powered defense mechanisms.',
      content: 'Full article content...',
      author: 'Kleber Santos',
      authorRole: 'CEO & Founder',
      publishDate: '2024-01-08',
      readTime: '7 min read',
      category: 'Cybersecurity',
      tags: ['Cybersecurity', 'AI Security', 'Threat Detection'],
      image: '/blog/ai-cybersecurity.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Data-Driven Decision Making: Transforming Business Intelligence',
      excerpt: 'Explore how modern BI tools and AI analytics are enabling organizations to make faster, more accurate business decisions.',
      content: 'Full article content...',
      author: 'Dr. Emily Watson',
      authorRole: 'Head of Data Science',
      publishDate: '2024-01-05',
      readTime: '9 min read',
      category: 'Business Intelligence',
      tags: ['Business Intelligence', 'Data Analytics', 'Decision Making'],
      image: '/blog/business-intelligence.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Case Study: How We Helped a Fortune 500 Company Achieve 300% ROI',
      excerpt: 'A detailed case study showcasing how our AI solutions transformed a major corporation\'s operations and delivered exceptional results.',
      content: 'Full article content...',
      author: 'Kleber Santos',
      authorRole: 'CEO & Founder',
      publishDate: '2024-01-03',
      readTime: '12 min read',
      category: 'Case Studies',
      tags: ['Case Study', 'ROI', 'Fortune 500', 'Success Story'],
      image: '/blog/fortune-500-case-study.jpg',
      featured: true
    },
    {
      id: 7,
      title: 'The Rise of Autonomous Systems in Manufacturing',
      excerpt: 'Discover how autonomous systems and robotics are revolutionizing manufacturing processes and improving efficiency.',
      content: 'Full article content...',
      author: 'Michael Rodriguez',
      authorRole: 'CTO',
      publishDate: '2024-01-01',
      readTime: '8 min read',
      category: 'Technology Trends',
      tags: ['Autonomous Systems', 'Manufacturing', 'Robotics'],
      image: '/blog/autonomous-manufacturing.jpg',
      featured: false
    },
    {
      id: 8,
      title: 'Digital Transformation: A Strategic Approach for Mid-Market Companies',
      excerpt: 'Learn how mid-market companies can successfully navigate digital transformation with the right technology strategy and implementation approach.',
      content: 'Full article content...',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief AI Officer',
      publishDate: '2023-12-28',
      readTime: '11 min read',
      category: 'Digital Transformation',
      tags: ['Digital Transformation', 'Mid-Market', 'Strategy'],
      image: '/blog/digital-transformation-midmarket.jpg',
      featured: false
    },
    {
      id: 9,
      title: 'Industry Insights: AI Adoption in Healthcare',
      excerpt: 'Explore how AI is transforming healthcare delivery, from diagnostic imaging to personalized treatment plans.',
      content: 'Full article content...',
      author: 'Dr. Emily Watson',
      authorRole: 'Head of Data Science',
      publishDate: '2023-12-25',
      readTime: '9 min read',
      category: 'Industry Insights',
      tags: ['Healthcare', 'AI Adoption', 'Medical AI'],
      image: '/blog/ai-healthcare-insights.jpg',
=======
import React from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Search, Filter, Clock, TrendingUp, BookOpen } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'AI 2025-2026 Mega Trends Breakthrough',
      excerpt: 'Discover the revolutionary AI trends that will reshape industries in 2025-2026',
      date: '2025-01-15',
      author: 'Zion Tech Team',
      readTime: '8 min read',
      category: 'AI Trends',
      slug: 'ai-2025-2026-mega-trends-breakthrough',
      featured: true
    },
    {
      title: 'Autonomous Enterprise Operations Revolution',
      excerpt: 'How autonomous systems are transforming enterprise operations and workflows',
      date: '2025-01-10',
      author: 'Zion Tech Team',
      readTime: '6 min read',
      category: 'Enterprise AI',
      slug: 'ai-2025-march-autonomous-enterprise-operations-revolution',
      featured: true
    },
    {
      title: 'Quantum-Enhanced Neural Networks 2025',
      excerpt: 'Exploring the intersection of quantum computing and neural network architectures',
      date: '2025-01-08',
      author: 'Zion Tech Team',
      readTime: '10 min read',
      category: 'Quantum Computing',
      slug: 'ai-2025-january-advanced-ai-revolution',
      featured: false
    },
    {
      title: 'AI Cost Optimization Breakthrough 2026',
      excerpt: 'Revolutionary methods to reduce AI implementation costs while maximizing ROI',
      date: '2025-01-05',
      author: 'Zion Tech Team',
      readTime: '7 min read',
      category: 'AI Business',
      slug: 'ai-cost-optimization-breakthrough-2026',
      featured: false
    },
    {
      title: 'Consensus Intelligence Breakthrough',
      excerpt: 'How consensus mechanisms are revolutionizing AI decision-making processes',
      date: '2025-01-03',
      author: 'Zion Tech Team',
      readTime: '9 min read',
      category: 'AI Research',
      slug: 'ai-2026-consensus-intelligence-breakthrough',
      featured: false
    },
    {
      title: 'Hyperconscious Computing Revolution',
      excerpt: 'The next frontier in AI: achieving hyperconscious computing capabilities',
      date: '2025-01-01',
      author: 'Zion Tech Team',
      readTime: '12 min read',
      category: 'Future Tech',
      slug: 'ai-2026-hyperconscious-computing-revolution',
>>>>>>> cursor/website-audit-and-update-with-deployment-1500
      featured: false
    }
  ];

<<<<<<< HEAD
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      <SEOOptimizer
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, technology trends, digital transformation, and industry best practices from Zion Tech Group experts."
        keywords={['AI blog', 'technology insights', 'digital transformation', 'machine learning', 'business intelligence', 'tech trends']}
        canonicalUrl="https://ziontechgroup.com/blog"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePreloading={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHTTPSRedirect={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Our Blog">
              Our Blog
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Insights, Trends, and Expert Analysis
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Stay ahead of the curve with our latest insights on AI, technology trends, digital transformation, 
              and industry best practices from our team of experts.
            </p>
          </section>

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="cyber-card p-6 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
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
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Posts */}
          {currentPage === 1 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.slice(0, 2).map((post) => (
                  <article key={post.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs bg-cyan-400 text-slate-900 px-2 py-1 rounded font-semibold">
                        Featured
                      </span>
                      <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 neon-text hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-slate-700 text-cyan-400 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* All Posts */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedPosts.map((post) => (
                <article key={post.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="text-xs bg-cyan-400 text-slate-900 px-2 py-1 rounded font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 neon-text hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs bg-slate-700 text-cyan-400 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* Pagination */}
          {totalPages > 1 && (
            <section className="mb-16">
              <div className="flex justify-center items-center space-x-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      currentPage === page
                        ? 'bg-cyan-400 text-slate-900 font-semibold'
                        : 'bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </section>
          )}

          {/* Newsletter Signup */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Stay Updated
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Subscribe to our newsletter and never miss the latest insights on AI, technology trends, 
                and digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300"
                />
                <button className="cyber-button px-6 py-3 font-semibold hover:scale-105 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
=======
  const categories = [
    'All Posts',
    'AI Trends',
    'Enterprise AI',
    'Quantum Computing',
    'AI Business',
    'AI Research',
    'Future Tech',
    'Case Studies'
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI & Tech <span className="text-cyan-400">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay updated with the latest insights, trends, and breakthroughs in AI, quantum computing, 
            and digital transformation from our expert team.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === 0
                      ? 'bg-cyan-400 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-cyan-400/20 hover:text-cyan-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <TrendingUp className="w-8 h-8 mr-3 text-cyan-400" />
            Featured <span className="text-cyan-400">Articles</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-2 text-sm text-cyan-400 mb-4">
                  <span className="px-3 py-1 bg-cyan-400/20 rounded-full">{post.category}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">{post.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <BookOpen className="w-8 h-8 mr-3 text-cyan-400" />
            Latest <span className="text-cyan-400">Articles</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-2 text-sm text-cyan-400 mb-4">
                  <span className="px-2 py-1 bg-cyan-400/20 rounded-full text-xs">{post.category}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-2 text-sm">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-xs text-gray-400">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                  >
                    Read
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest AI and tech insights delivered directly to your inbox. 
            Join thousands of professionals staying ahead of the curve.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-1500
      </div>
    </>
  );
};

export default BlogPage;
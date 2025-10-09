'use client';
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, ArrowRight, Search, Filter, Tag } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import Analytics from '../components/Analytics';
import SecurityEnhancer from '../components/SecurityEnhancer';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 25 },
    { id: 'ai-trends', name: 'AI Trends', count: 8 },
    { id: 'enterprise', name: 'Enterprise AI', count: 6 },
    { id: 'automation', name: 'Automation', count: 5 },
    { id: 'case-studies', name: 'Case Studies', count: 4 },
    { id: 'tutorials', name: 'Tutorials', count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'AI 2026: The Future of Autonomous Enterprise Operations',
      excerpt: 'Explore the revolutionary breakthroughs in AI that are transforming how enterprises operate autonomously in 2026.',
      category: 'ai-trends',
      author: 'Dr. Kleber Santos',
      date: '2026-01-15',
      readTime: '8 min read',
      image: '/blog/ai-2026-autonomous-enterprise.jpg',
      featured: true,
      tags: ['AI', 'Enterprise', 'Automation', 'Future Tech']
    },
    {
      id: 2,
      title: 'Consensus Intelligence: The Next Breakthrough in AI',
      excerpt: 'Discover how consensus intelligence is revolutionizing decision-making processes in enterprise environments.',
      category: 'ai-trends',
      author: 'Dr. Emily Watson',
      date: '2026-01-10',
      readTime: '6 min read',
      image: '/blog/consensus-intelligence.jpg',
      featured: true,
      tags: ['AI', 'Consensus', 'Decision Making', 'Innovation']
    },
    {
      id: 3,
      title: 'Building Autonomous Business Intelligence Systems',
      excerpt: 'Learn how to implement self-managing BI systems that adapt and evolve with your business needs.',
      category: 'enterprise',
      author: 'Sarah Chen',
      date: '2026-01-05',
      readTime: '10 min read',
      image: '/blog/autonomous-bi.jpg',
      featured: false,
      tags: ['Business Intelligence', 'Automation', 'Enterprise', 'AI']
    },
    {
      id: 4,
      title: 'Case Study: 300% ROI with AI-Powered Process Automation',
      excerpt: 'Real-world example of how a Fortune 500 company achieved massive ROI through intelligent automation.',
      category: 'case-studies',
      author: 'Michael Rodriguez',
      date: '2025-12-28',
      readTime: '7 min read',
      image: '/blog/roi-case-study.jpg',
      featured: false,
      tags: ['Case Study', 'ROI', 'Automation', 'Success Story']
    },
    {
      id: 5,
      title: 'Hyperconscious Computing: The Next Evolution',
      excerpt: 'Understanding the emerging field of hyperconscious computing and its implications for business.',
      category: 'ai-trends',
      author: 'Dr. Kleber Santos',
      date: '2025-12-20',
      readTime: '9 min read',
      image: '/blog/hyperconscious-computing.jpg',
      featured: false,
      tags: ['AI', 'Computing', 'Consciousness', 'Future Tech']
    },
    {
      id: 6,
      title: 'AI Cost Optimization: Reducing Enterprise AI Expenses by 70%',
      excerpt: 'Practical strategies for optimizing AI infrastructure costs while maintaining performance and reliability.',
      category: 'enterprise',
      author: 'Sarah Chen',
      date: '2025-12-15',
      readTime: '6 min read',
      image: '/blog/ai-cost-optimization.jpg',
      featured: false,
      tags: ['Cost Optimization', 'AI Infrastructure', 'Enterprise', 'Efficiency']
    },
    {
      id: 7,
      title: 'Tutorial: Building Your First AI Agent Factory',
      excerpt: 'Step-by-step guide to creating autonomous AI agents that can handle complex business processes.',
      category: 'tutorials',
      author: 'Dr. Emily Watson',
      date: '2025-12-10',
      readTime: '12 min read',
      image: '/blog/ai-agent-factory.jpg',
      featured: false,
      tags: ['Tutorial', 'AI Agents', 'Automation', 'Development']
    },
    {
      id: 8,
      title: 'Adaptive Neural Architectures: Self-Improving AI Systems',
      excerpt: 'How neural networks are evolving to become self-adapting and continuously improving systems.',
      category: 'ai-trends',
      author: 'Dr. Kleber Santos',
      date: '2025-12-05',
      readTime: '8 min read',
      image: '/blog/adaptive-neural.jpg',
      featured: false,
      tags: ['Neural Networks', 'AI', 'Adaptive Systems', 'Machine Learning']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      <SEOOptimizer
        title="Blog - Zion Tech Group AI & IT Insights"
        description="Stay updated with the latest insights, trends, and breakthroughs in AI, enterprise solutions, and digital transformation from Zion Tech Group experts."
        keywords={['AI blog', 'enterprise AI', 'automation insights', 'AI trends', 'business intelligence', 'digital transformation']}
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI & IT Insights
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Stay ahead with the latest trends, breakthroughs, and insights
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover cutting-edge AI technologies, enterprise solutions, and digital transformation strategies 
              from our team of experts. Learn how to leverage AI for business growth and innovation.
            </p>
          </section>

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="cyber-card p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
                <div className="flex gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-cyan-600 text-white'
                          : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Featured Posts */}
          {selectedCategory === 'all' && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 neon-text">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">Featured</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 neon-text">{post.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-cyan-600/20 text-cyan-400 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </a>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* All Posts */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 neon-text">
              {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <article key={post.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Article Image</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 neon-text line-clamp-2">{post.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-purple-600/20 text-purple-400 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-sm"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mt-16">
            <div className="cyber-card p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Stay Updated</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get the latest AI insights, enterprise solutions, and breakthrough technologies delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
                <button className="cyber-button px-6 py-3 font-semibold hover:scale-105 transition-all duration-300">
                  Subscribe
                </button>
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
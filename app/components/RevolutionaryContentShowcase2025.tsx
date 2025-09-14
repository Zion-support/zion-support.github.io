'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, Zap, Clock, BookOpen, FileText, BarChart3 } from 'lucide-react';

const RevolutionaryContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = [
    { id: 'all', label: 'All Content', count: 4 },
    { id: 'blog', label: 'Blog Posts', count: 2 },
    { id: 'case-study', label: 'Case Studies', count: 1 },
    { id: 'resource', label: 'Resources', count: 1 }
  ];

  const featuredContent = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      description: 'Discover how Fortune 500 companies are achieving 500% ROI with revolutionary AI implementations. Complete guide to enterprise AI transformation in 2025.',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        satisfaction: '98%',
        projects: '500+'
      },
      readingTime: '18 min read',
      featured: true,
      tags: ['AI', 'Enterprise', 'ROI', 'Digital Transformation', 'AI Strategy', 'Fortune 500', 'Breakthrough'],
      publishDate: '2025-01-17'
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings in 18 Months',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-ultimate-success-2025',
      description: 'How a $50B manufacturing giant achieved 567% ROI with revolutionary AI implementation. Complete case study with implementation details and results.',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        satisfaction: '99.2%',
        timeline: '18 months'
      },
      readingTime: '22 min read',
      featured: true,
      tags: ['Case Study', 'Fortune 500', 'AI Transformation', 'ROI', 'Manufacturing', 'Success Story', '567% ROI'],
      publishDate: '2025-01-17'
    },
    {
      id: 'quantum-computing-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution - $100B Market Transformation',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      description: 'Discover how quantum computing is revolutionizing business operations with 1,200% processing speed improvements and 99.97% accuracy.',
      metrics: {
        roi: '1,200%',
        market: '$100B',
        accuracy: '99.97%',
        speed: '1,200%'
      },
      readingTime: '20 min read',
      featured: true,
      tags: ['Quantum AI', 'Quantum Computing', 'Business Revolution', 'ROI', 'Fortune 500', '2025', '$100B Market'],
      publishDate: '2025-01-17'
    },
    {
      id: 'implementation-ultimate-guide',
      title: 'AI Implementation Ultimate Guide 2025: From Strategy to 500% ROI - Complete Edition',
      type: 'resource',
      category: 'resource',
      url: '/resources/ai-implementation-ultimate-guide-2025-complete',
      description: 'Complete step-by-step guide to AI implementation with proven frameworks, real-world case studies, and actionable strategies for achieving 500%+ ROI.',
      metrics: {
        roi: '500%+',
        success: '94%',
        timeline: '18 months',
        projects: '500+'
      },
      readingTime: '35 min read',
      featured: true,
      tags: ['Implementation Guide', 'AI Strategy', 'ROI', 'Best Practices', 'Complete Guide', '2025'],
      publishDate: '2025-01-17'
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? featuredContent 
    : featuredContent.filter(content => content.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-4 h-4" />;
      case 'case-study':
        return <BarChart3 className="w-4 h-4" />;
      case 'resource':
        return <FileText className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-500 text-white';
      case 'case-study':
        return 'bg-green-500 text-white';
      case 'resource':
        return 'bg-purple-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5" />
            <span className="text-sm font-semibold">REVOLUTIONARY CONTENT 2025</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Business with Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the ultimate collection of AI implementation guides, case studies, and breakthrough insights that are transforming Fortune 500 companies worldwide.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {filteredContent.map((content, index) => (
            <div
              key={content.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Content Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(content.type)}`}>
                      {getTypeIcon(content.type)}
                      <span>{content.type.replace('-', ' ').toUpperCase()}</span>
                    </div>
                    {content.featured && (
                      <div className="bg-yellow-500 text-black text-xs font-semibold px-2 py-1 rounded-full">
                        FEATURED
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{content.readingTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                  {content.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {content.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {content.tags.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      +{content.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="p-6 bg-gray-50">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{content.metrics.roi}</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{content.metrics.savings}</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide">SAVINGS</div>
                  </div>
                </div>

                <Link
                  href={content.url}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 transform group-hover:scale-105"
                >
                  <span>Read Full Content</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success Statistics */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Proven Results Across Industries</h3>
            <p className="text-xl text-blue-100">
              Join 500+ Fortune 500 companies achieving transformational results with our AI implementation strategies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold mb-2">500%+</div>
              <div className="text-sm text-blue-200">Average ROI</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold mb-2">94%</div>
              <div className="text-sm text-blue-200">Success Rate</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold mb-2">78%</div>
              <div className="text-sm text-blue-200">Efficiency Gain</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold mb-2">$2.8B</div>
              <div className="text-sm text-blue-200">Average Savings</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started with our comprehensive AI implementation guide and join the companies achieving 500%+ ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                href="/resources"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-4 rounded-lg transition-all duration-200"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContentShowcase2025;
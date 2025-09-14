'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, TrendingUp, Target, Zap, Clock, Users, Award } from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = [
    { id: 'all', label: 'All Content', count: 12 },
    { id: 'blog', label: 'Blog Posts', count: 6 },
    { id: 'case-study', label: 'Case Studies', count: 4 },
    { id: 'resource', label: 'Resources', count: 2 }
  ];

  const featuredContent = [
    {
      id: 'ai-enterprise-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      description: 'Discover how Fortune 500 companies are achieving 1,200% ROI through revolutionary AI implementations.',
      metrics: {
        roi: '1,200%',
        savings: '$3.2B',
        efficiency: '95%',
        satisfaction: '99.2%'
      },
      readingTime: '25 min read',
      featured: true,
      badge: 'NEW',
      badgeColor: 'bg-red-500'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings - Ultimate Success Story',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      description: 'How a Fortune 500 manufacturing company achieved 1,200% ROI through comprehensive AI transformation.',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '95%',
        timeline: '18 months'
      },
      readingTime: '18 min read',
      featured: true,
      badge: 'FEATURED',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 'quantum-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution - $100B Market Transformation',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      description: 'Discover how quantum computing is revolutionizing business operations with 400-600% ROI.',
      metrics: {
        roi: '400-600%',
        market: '$100B',
        speed: '1,200%',
        accuracy: '99.97%'
      },
      readingTime: '22 min read',
      featured: true,
      badge: 'BREAKTHROUGH',
      badgeColor: 'bg-purple-500'
    },
    {
      id: 'implementation-roadmap',
      title: 'AI Implementation Ultimate Roadmap 2025: From Strategy to 1,200% ROI in 18 Months',
      type: 'resource',
      category: 'resource',
      url: '/resources/ai-implementation-roadmap-2025',
      description: 'Complete step-by-step roadmap for implementing AI and achieving 1,200% ROI.',
      metrics: {
        roi: '1,200%',
        savings: '$5.6B',
        efficiency: '95%',
        timeline: '18 months'
      },
      readingTime: '20 min read',
      featured: true,
      badge: 'GUIDE',
      badgeColor: 'bg-green-500'
    },
    {
      id: 'neural-interface-revolution',
      title: 'AI 2025: The Neural Interface Revolution - Enterprise Breakthrough Guide',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-neural-interface-revolution-enterprise-breakthrough',
      description: 'Revolutionary neural interface technology delivering 1,200% ROI for enterprise applications.',
      metrics: {
        roi: '1,200%',
        accuracy: '99.9%',
        savings: '$2.8B',
        efficiency: '400%'
      },
      readingTime: '22 min read',
      featured: false,
      badge: 'REVOLUTIONARY',
      badgeColor: 'bg-orange-500'
    },
    {
      id: 'autonomous-ai-agents',
      title: 'AI 2025: The Autonomous AI Agents Enterprise Revolution - 800% ROI Through Self-Managing Systems',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-autonomous-ai-agents-enterprise-revolution',
      description: 'Self-managing AI systems achieving 800% ROI through autonomous business operations.',
      metrics: {
        roi: '800%',
        autonomy: '99.7%',
        savings: '$1.8B',
        uptime: '99.9%'
      },
      readingTime: '20 min read',
      featured: false,
      badge: 'AUTONOMOUS',
      badgeColor: 'bg-cyan-500'
    },
    {
      id: 'fortune-500-neural-transformation',
      title: 'Fortune 500 Neural Interface Transformation 2025: $2.8B Annual Savings - Ultimate Success Story',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/fortune-500-neural-interface-transformation-2025-ultimate-success',
      description: 'How a Fortune 500 company achieved 1,200% ROI through neural interface implementation.',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '400%',
        accuracy: '99.9%'
      },
      readingTime: '15 min read',
      featured: false,
      badge: 'SUCCESS',
      badgeColor: 'bg-emerald-500'
    },
    {
      id: 'neural-interface-implementation',
      title: 'Neural Interface Implementation Master Guide 2025: From Strategy to 1,200% ROI',
      type: 'resource',
      category: 'resource',
      url: '/resources/neural-interface-implementation-master-guide-2025',
      description: 'Complete implementation guide for neural interface technology achieving 1,200% ROI.',
      metrics: {
        roi: '1,200%',
        timeline: '8-18 months',
        success: '99%',
        savings: '$2.8B'
      },
      readingTime: '28 min read',
      featured: false,
      badge: 'MASTER',
      badgeColor: 'bg-indigo-500'
    },
    {
      id: 'ai-automation-800-roi',
      title: 'AI 2025 Enterprise Automation Success: $1.2B Company Achieves 800% ROI',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/ai-2025-enterprise-automation-800-roi-success-story',
      description: 'How a $1.2B company achieved 800% ROI through enterprise AI automation.',
      metrics: {
        roi: '800%',
        savings: '$180M',
        efficiency: '500%',
        satisfaction: '96%'
      },
      readingTime: '12 min read',
      featured: false,
      badge: 'SUCCESS',
      badgeColor: 'bg-pink-500'
    },
    {
      id: 'healthcare-ai-transformation',
      title: 'Healthcare AI Transformation 2025: How a $200M Health System Achieved 300% ROI',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/healthcare-ai-transformation-2025-success',
      description: 'Healthcare system transformation achieving 300% ROI through AI implementation.',
      metrics: {
        roi: '300%',
        savings: '$18.7M',
        satisfaction: '95%',
        projects: '1 Major Implementation'
      },
      readingTime: '15 min read',
      featured: false,
      badge: 'HEALTHCARE',
      badgeColor: 'bg-teal-500'
    },
    {
      id: 'ai-automation-implementation',
      title: 'AI Automation Implementation Guide 2025: From Strategy to ROI',
      type: 'resource',
      category: 'resource',
      url: '/resources/ai-automation-implementation-guide-2025',
      description: 'Comprehensive guide for AI automation implementation achieving 300-500% ROI.',
      metrics: {
        roi: '300-500%',
        projects: '500+ Success Stories',
        satisfaction: '98%',
        timeline: '18-24 months'
      },
      readingTime: '25 min read',
      featured: false,
      badge: 'COMPREHENSIVE',
      badgeColor: 'bg-rose-500'
    },
    {
      id: 'ai-2026-autonomous-systems',
      title: 'AI 2026: Next-Generation Autonomous Systems Revolution',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2026-next-generation-autonomous-systems-revolution',
      description: 'Next-generation autonomous systems delivering 1,200% ROI and 99.9% uptime.',
      metrics: {
        uptime: '99.9%',
        costReduction: '85%',
        productivity: '400%',
        roi: '1,200%'
      },
      readingTime: '18 min read',
      featured: false,
      badge: 'FUTURE',
      badgeColor: 'bg-violet-500'
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? featuredContent 
    : featuredContent.filter(content => content.category === activeCategory);

  const getMetricIcon = (key: string) => {
    switch (key) {
      case 'roi': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'savings': return <Target className="w-4 h-4 text-blue-400" />;
      case 'efficiency': return <Star className="w-4 h-4 text-yellow-400" />;
      case 'satisfaction': return <Users className="w-4 h-4 text-purple-400" />;
      case 'timeline': return <Clock className="w-4 h-4 text-orange-400" />;
      case 'accuracy': return <Award className="w-4 h-4 text-cyan-400" />;
      default: return <Zap className="w-4 h-4 text-gray-400" />;
    }
  };

  const getMetricLabel = (key: string) => {
    switch (key) {
      case 'roi': return 'ROI';
      case 'savings': return 'Savings';
      case 'efficiency': return 'Efficiency';
      case 'satisfaction': return 'Satisfaction';
      case 'timeline': return 'Timeline';
      case 'accuracy': return 'Accuracy';
      case 'autonomy': return 'Autonomy';
      case 'uptime': return 'Uptime';
      case 'market': return 'Market';
      case 'speed': return 'Speed';
      case 'costReduction': return 'Cost Reduction';
      case 'productivity': return 'Productivity';
      case 'success': return 'Success Rate';
      case 'projects': return 'Projects';
      default: return key;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ultimate Content Showcase 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of AI transformation content, featuring breakthrough strategies, 
            real-world success stories, and implementation guides that deliver proven results.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                content.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {content.type}
                    </span>
                    {content.featured && (
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold text-white ${content.badgeColor}`}>
                    {content.badge}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(content.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-1">
                        {getMetricIcon(key)}
                        <span className="text-xs text-gray-600">{getMetricLabel(key)}</span>
                      </div>
                      <div className="text-sm font-bold text-gray-900">{value}</div>
                    </div>
                  ))}
                </div>

                {/* Reading Time */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  {content.readingTime}
                </div>

                {/* Action Button */}
                <Link
                  href={content.url}
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Read {content.type}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get a comprehensive AI strategy consultation and implementation roadmap tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
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

export default UltimateContentShowcase2025;
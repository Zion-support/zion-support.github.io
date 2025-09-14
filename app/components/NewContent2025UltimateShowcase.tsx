'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Zap, CheckCircle, Clock, Users, Award } from 'lucide-react';

const NewContent2025UltimateShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Content', count: 8 },
    { id: 'blog', label: 'Blog Posts', count: 3 },
    { id: 'case-study', label: 'Case Studies', count: 3 },
    { id: 'resource', label: 'Resources', count: 2 }
  ];

  const featuredContent = [
    {
      id: 'ultimate-enterprise-transformation',
      title: 'AI 2025: The Ultimate Enterprise Transformation Revolution',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-ultimate-enterprise-transformation-revolution',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '340%',
        satisfaction: '98%'
      },
      description: 'Complete guide to achieving 1,200% ROI with comprehensive AI transformation strategies and implementation frameworks.',
      readingTime: '20 min read',
      featured: true,
      gradient: 'from-purple-600 via-blue-600 to-indigo-600',
      tags: ['AI Transformation', 'Enterprise', 'ROI', 'Strategy']
    },
    {
      id: 'fortune-100-success-story',
      title: 'Fortune 100 AI Transformation: $5.2B Company Achieves 1,500% ROI',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/fortune-100-ai-transformation-ultimate-success-story-2025',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        timeline: '24 months',
        satisfaction: '98%'
      },
      description: 'Ultimate success story of comprehensive AI transformation in 24 months with detailed implementation strategy and results.',
      readingTime: '18 min read',
      featured: true,
      gradient: 'from-green-600 via-emerald-600 to-teal-600',
      tags: ['Fortune 100', 'Success Story', 'ROI', 'Transformation']
    },
    {
      id: 'quantum-computing-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-quantum-computing-business-revolution-ultimate-breakthrough',
      metrics: {
        roi: '1,200%',
        speed: '1,000x',
        accuracy: '99.97%',
        market: '$100B'
      },
      description: 'Ultimate breakthrough guide to quantum computing business transformation with real-world applications and success stories.',
      readingTime: '25 min read',
      featured: true,
      gradient: 'from-orange-600 via-red-600 to-pink-600',
      tags: ['Quantum Computing', 'Revolution', 'Breakthrough', 'AI']
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework',
      type: 'resource',
      category: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-success-framework-complete-guide',
      metrics: {
        roi: '1,500%',
        success: '98%',
        timeline: '24 months',
        companies: '500+'
      },
      description: 'Complete guide to achieving 1,500% ROI with proven implementation framework used by 500+ successful companies.',
      readingTime: '30 min read',
      featured: true,
      gradient: 'from-indigo-600 via-purple-600 to-pink-600',
      tags: ['Implementation', 'Framework', 'Success', 'Guide']
    },
    {
      id: 'advanced-automation-mastery',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '340%',
        accuracy: '99.7%'
      },
      description: 'Master advanced automation strategies that have helped Fortune 500 companies achieve extraordinary operational efficiency.',
      readingTime: '25 min read',
      featured: false,
      gradient: 'from-blue-600 via-cyan-600 to-teal-600',
      tags: ['Automation', 'Mastery', 'Advanced', 'Success']
    },
    {
      id: 'fortune-500-manufacturing',
      title: 'Fortune 500 AI Automation: $2.8B Annual Savings - Ultimate Success',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/fortune-500-ai-automation-transformation-ultimate-success',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '340%',
        accuracy: '99.7%'
      },
      description: 'Detailed case study of Fortune 500 manufacturing company achieving 1,200% ROI through comprehensive AI automation.',
      readingTime: '15 min read',
      featured: false,
      gradient: 'from-emerald-600 via-green-600 to-lime-600',
      tags: ['Fortune 500', 'Manufacturing', 'Automation', 'Success']
    },
    {
      id: 'quantum-ai-implementation',
      title: 'Quantum AI Implementation Guide 2026: From Strategy to 567% ROI',
      type: 'resource',
      category: 'resource',
      url: '/resources/quantum-ai-implementation-guide-2026',
      metrics: {
        roi: '567%',
        timeframe: '6 months',
        phases: '3 phases',
        payback: '3.8 months'
      },
      description: 'Complete implementation guide for quantum AI transformation with proven 3-phase approach and real-world results.',
      readingTime: '20 min read',
      featured: false,
      gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
      tags: ['Quantum AI', 'Implementation', 'ROI', 'Strategy']
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation 2025: $180M Annual Savings - Ultimate Success',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/healthcare-ai-transformation-ultimate-success-2025',
      metrics: {
        roi: '450%',
        savings: '$180M',
        satisfaction: '94%',
        errors: '89% reduction'
      },
      description: 'Comprehensive case study of major health system achieving 450% ROI through AI-powered patient care and operations.',
      readingTime: '18 min read',
      featured: false,
      gradient: 'from-rose-600 via-pink-600 to-red-600',
      tags: ['Healthcare', 'Transformation', 'ROI', 'Success']
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? featuredContent 
    : featuredContent.filter(content => content.category === activeCategory);

  const totalMetrics = {
    roi: '1,500%',
    savings: '$5.6B+',
    companies: '500+',
    success: '98%'
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2" />
            <span className="font-semibold">Ultimate Content Collection 2025</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content That Transforms Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the complete collection of AI transformation guides, success stories, and implementation frameworks that have helped 500+ companies achieve extraordinary results.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{totalMetrics.roi}</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{totalMetrics.savings}</div>
            <div className="text-gray-600">Total Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{totalMetrics.companies}</div>
            <div className="text-gray-600">Companies Transformed</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{totalMetrics.success}</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                content.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {/* Content Header */}
              <div className={`bg-gradient-to-r ${content.gradient} p-6 text-white`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {content.featured && (
                      <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </span>
                    )}
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {content.type.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-white/80">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{content.readingTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                  {content.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {content.description}
                </p>
              </div>

              {/* Content Body */}
              <div className="p-6">
                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(content.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{value}</div>
                      <div className="text-sm text-gray-600 capitalize">
                        {key.replace('_', ' ')}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Users */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {content.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={content.url}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Read Full {content.type === 'case-study' ? 'Case Study' : content.type === 'resource' ? 'Resource' : 'Article'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join 500+ companies that have achieved extraordinary success with our proven AI transformation framework. Start your journey to 1,500% ROI today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <Users className="w-5 h-5" />
              <span>Start Your Transformation</span>
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center space-x-2"
            >
              <Award className="w-5 h-5" />
              <span>Explore All Resources</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateShowcase;
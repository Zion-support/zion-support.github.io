'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChartBarIcon, 
  CurrencyDollarIcon, 
  StarIcon, 
  ClockIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  TrophyIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const UltimateAISuccess2025Showcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Content', count: 12 },
    { id: 'blog', name: 'Blog Posts', count: 4 },
    { id: 'case-study', name: 'Case Studies', count: 4 },
    { id: 'resource', name: 'Resources', count: 4 }
  ];

  const featuredContent = [
    {
      id: 'enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - Ultimate Success Guide',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '99.8%',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      badge: 'Ultimate Guide',
      description: 'Master enterprise automation with AI in 2025. Achieve 1,200% ROI, $2.8B savings, and 99.8% efficiency with our comprehensive implementation guide.',
      featured: true
    },
    {
      id: 'fortune-100-transformation',
      title: 'Fortune 100 AI Transformation: $5.2B Company Achieves 1,500% ROI in 24 Months',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/fortune-100-ai-transformation-ultimate-success-story',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        efficiency: '99.8%',
        timeline: '24 months'
      },
      readingTime: '18 min read',
      badge: 'Success Story',
      description: 'Discover how a Fortune 100 manufacturing giant transformed their operations with AI automation, achieving $2.8B in annual savings and 1,500% ROI in just 24 months.',
      featured: true
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework: Complete Roadmap to 1,000%+ ROI',
      type: 'resource',
      category: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-success-framework',
      metrics: {
        roi: '1,000%+',
        savings: '$500M+',
        success: '99%',
        timeline: '18 months'
      },
      readingTime: '30 min read',
      badge: 'Framework',
      description: 'Master AI implementation with our comprehensive framework. Achieve 1,000%+ ROI, $500M+ savings, and 99% success rate with our proven methodology.',
      featured: true
    },
    {
      id: 'ai-2025-advanced-automation-mastery',
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
      readingTime: '18 min read',
      badge: 'Mastery Guide',
      description: 'Master advanced AI automation techniques and achieve unprecedented business success with our comprehensive mastery guide.',
      featured: false
    },
    {
      id: 'fortune-500-ai-automation-transformation',
      title: 'Fortune 500 AI Automation Transformation: $2.8B Annual Savings - Ultimate Success Story',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/fortune-500-ai-automation-transformation-ultimate-success',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '340%',
        accuracy: '99.7%'
      },
      readingTime: '15 min read',
      badge: 'Success Story',
      description: 'Learn how a Fortune 500 company achieved $2.8B in annual savings through comprehensive AI automation transformation.',
      featured: false
    },
    {
      id: 'ai-automation-implementation-ultimate-framework',
      title: 'AI Automation Implementation Ultimate Framework 2025',
      type: 'resource',
      category: 'resource',
      url: '/resources/ai-automation-implementation-ultimate-framework-2025',
      metrics: {
        roi: '1,200%',
        success_rate: '94%',
        implementation_time: '18 months',
        projects: '500+ Success Stories'
      },
      readingTime: '25 min read',
      badge: 'Framework',
      description: 'Complete framework for implementing AI automation with proven strategies and methodologies for guaranteed success.',
      featured: false
    },
    {
      id: 'ai-2025-enterprise-ai-transformation-ultimate-guide',
      title: 'AI 2025: The Ultimate Enterprise AI Transformation Guide - 500% ROI Blueprint',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-enterprise-ai-transformation-ultimate-guide',
      metrics: {
        roi: '500%+',
        savings: '$2.8B',
        efficiency: '78%',
        satisfaction: '98%'
      },
      readingTime: '18 min read',
      badge: 'Transformation Guide',
      description: 'Complete blueprint for enterprise AI transformation with proven strategies for achieving 500%+ ROI.',
      featured: false
    },
    {
      id: 'ai-transformation-fortune-100-ultimate-success-story',
      title: 'Fortune 100 AI Transformation: $5.2B Company Achieves 1,200% ROI in 24 Months',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/ai-transformation-fortune-100-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '24 months',
        satisfaction: '98%'
      },
      readingTime: '12 min read',
      badge: 'Success Story',
      description: 'Comprehensive case study of Fortune 100 AI transformation achieving 1,200% ROI in 24 months.',
      featured: false
    },
    {
      id: 'ai-implementation-ultimate-success-framework-2025',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Roadmap to 1,000%+ ROI',
      type: 'resource',
      category: 'resource',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      metrics: {
        roi: '1,000%+',
        success_rate: '94%',
        implementation_time: '18 months',
        projects: '1,000+ Success Stories'
      },
      readingTime: '25 min read',
      badge: 'Success Framework',
      description: 'Ultimate success framework for AI implementation with complete roadmap to 1,000%+ ROI.',
      featured: false
    },
    {
      id: 'ai-2025-quantum-computing-business-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution - $100B Market Transformation',
      type: 'blog',
      category: 'blog',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      metrics: {
        roi: '400-600%',
        market: '$100B',
        speed: '1,200%',
        accuracy: '99.97%'
      },
      readingTime: '15 min read',
      badge: 'Revolution Guide',
      description: 'Explore the quantum computing business revolution and its $100B market transformation potential.',
      featured: false
    },
    {
      id: 'quantum-ai-fortune-500-manufacturing-transformation',
      title: 'Quantum AI Fortune 500 Manufacturing Transformation: $2.8B Annual Savings in 6 Months',
      type: 'case-study',
      category: 'case-study',
      url: '/case-studies/quantum-ai-fortune-500-manufacturing-transformation',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        timeline: '6 months',
        efficiency: '156%'
      },
      readingTime: '10 min read',
      badge: 'Quantum Success',
      description: 'Quantum AI transformation case study achieving $2.8B annual savings in just 6 months.',
      featured: false
    },
    {
      id: 'ai-2025-implementation-master-guide-ultimate',
      title: 'AI 2025 Implementation Master Guide: Ultimate Success Framework',
      type: 'resource',
      category: 'resource',
      url: '/resources/ai-2025-implementation-master-guide-ultimate-success',
      metrics: {
        success_rate: '94%',
        average_roi: '340%',
        implementation_time: '18 months',
        projects: '500+ Success Stories'
      },
      readingTime: '25 min read',
      badge: 'Master Guide',
      description: 'Ultimate master guide for AI implementation with proven success framework and methodologies.',
      featured: false
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? featuredContent 
    : featuredContent.filter(item => item.category === activeCategory);

  const featuredItems = featuredContent.filter(item => item.featured);
  const regularItems = featuredContent.filter(item => !item.featured);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <TrophyIcon className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">🏆 ULTIMATE AI SUCCESS 2025</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the most comprehensive collection of AI success stories, implementation guides, 
            and transformation frameworks. Join companies achieving <span className="font-bold text-purple-600">1,500% ROI</span> and 
            <span className="font-bold text-green-600"> $2.8B in savings</span>.
          </p>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">1,200%</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$2.8B</div>
              <div className="text-sm text-gray-600">Annual Savings</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">99.8%</div>
              <div className="text-sm text-gray-600">Efficiency</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Success Stories</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            🌟 Featured Success Stories
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                      {item.badge}
                    </span>
                    <span className="text-sm text-gray-500 uppercase tracking-wide">
                      {item.type}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{item.metrics.roi}</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{item.metrics.savings}</div>
                      <div className="text-xs text-gray-500">Savings</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {item.readingTime}
                    </div>
                    <Link
                      href={item.url}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all flex items-center"
                    >
                      Read Now
                      <ArrowRightIcon className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Content Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            📚 Complete Content Library
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {item.badge}
                    </span>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">
                      {item.type}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {item.readingTime}
                    </div>
                    <div className="text-sm font-bold text-green-600">
                      {item.metrics.roi} ROI
                    </div>
                  </div>

                  <Link
                    href={item.url}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center"
                  >
                    Read Article
                    <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
          <RocketLaunchIcon className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the ranks of Fortune 500 companies achieving unprecedented success with AI automation. 
            Start your transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center"
            >
              <CheckCircleIcon className="h-5 w-5 mr-2" />
              Get Free Consultation
            </Link>
            <Link
              href="/tools"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all flex items-center justify-center"
            >
              <ChartBarIcon className="h-5 w-5 mr-2" />
              Try AI Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateAISuccess2025Showcase;
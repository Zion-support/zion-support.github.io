'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronRightIcon, 
  ChartBarIcon, 
  ClockIcon, 
  CheckCircleIcon,
  SparklesIcon,
  TrophyIcon,
  CurrencyDollarIcon,
  TrendingUpIcon
} from '@heroicons/react/24/outline';

const UltimateAIAutomationShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = [
    { id: 'all', name: 'All Content', count: 12 },
    { id: 'blog', name: 'Blog Posts', count: 5 },
    { id: 'case-study', name: 'Case Studies', count: 4 },
    { id: 'resource', name: 'Resources', count: 3 }
  ];

  const featuredContent = [
    {
      id: 'advanced-automation-mastery',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      description: 'Transform your business with cutting-edge AI automation solutions. Achieve 1,200% ROI with our proven framework.',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      type: 'blog',
      category: 'Blog Post',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '340%',
        accuracy: '99.7%'
      },
      readingTime: '18 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Automation Transformation: $2.8B Annual Savings',
      description: 'How a global manufacturing giant achieved 1,200% ROI with comprehensive AI automation implementation.',
      url: '/case-studies/fortune-500-ai-automation-transformation-ultimate-success',
      type: 'case-study',
      category: 'Case Study',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '340%',
        accuracy: '99.7%'
      },
      readingTime: '15 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'implementation-framework',
      title: 'AI Automation Implementation Ultimate Framework 2025',
      description: 'The complete guide to achieving 1,200% ROI with enterprise AI automation. Proven methodology from 500+ implementations.',
      url: '/resources/ai-automation-implementation-ultimate-framework-2025',
      type: 'resource',
      category: 'Resource',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '340%',
        accuracy: '99.7%'
      },
      readingTime: '25 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'enterprise-automation-revolution',
      title: 'AI 2025: The Enterprise Automation Revolution - 500% ROI',
      description: 'Discover how enterprise automation is transforming businesses with 500% ROI and 340% efficiency gains.',
      url: '/blog/ai-2025-enterprise-automation-revolution',
      type: 'blog',
      category: 'Blog Post',
      metrics: {
        roi: '500%',
        savings: '$200M',
        efficiency: '340%',
        accuracy: '98%'
      },
      readingTime: '12 min read',
      isNew: false,
      featured: false
    },
    {
      id: 'retail-transformation',
      title: 'Retail AI Transformation 2025: $500M Company Achieves 280% ROI',
      description: 'Learn how a $500M retail company achieved 280% ROI with AI-powered operations and customer experience.',
      url: '/case-studies/retail-ai-transformation-2025-ultimate-success',
      type: 'case-study',
      category: 'Case Study',
      metrics: {
        roi: '280%',
        savings: '$45M',
        efficiency: '78%',
        accuracy: '99.2%'
      },
      readingTime: '10 min read',
      isNew: false,
      featured: false
    },
    {
      id: 'ai-implementation-guide',
      title: 'AI Implementation Master Guide 2025: From Strategy to 500% ROI',
      description: 'Complete implementation guide with proven strategies for achieving 500% ROI in AI automation projects.',
      url: '/resources/ai-implementation-master-guide-2025',
      type: 'resource',
      category: 'Resource',
      metrics: {
        roi: '500%',
        savings: '$2.8B',
        efficiency: '67%',
        accuracy: '94%'
      },
      readingTime: '20 min read',
      isNew: false,
      featured: false
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? featuredContent 
    : featuredContent.filter(content => content.type === activeCategory);

  const totalMetrics = {
    roi: '1,200%',
    savings: '$2.8B+',
    efficiency: '340%',
    accuracy: '99.7%',
    projects: '500+',
    satisfaction: '98%'
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <SparklesIcon className="h-8 w-8 text-purple-600 mr-3" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              AI 2025: Advanced Automation Mastery
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI automation solutions. 
            Achieve <span className="text-purple-600 font-bold">1,200% ROI</span> with our proven framework.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">{totalMetrics.roi}</div>
            <div className="text-sm text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">{totalMetrics.savings}</div>
            <div className="text-sm text-gray-600">Total Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">{totalMetrics.efficiency}</div>
            <div className="text-sm text-gray-600">Efficiency Gain</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-2xl font-bold text-orange-600 mb-2">{totalMetrics.accuracy}</div>
            <div className="text-sm text-gray-600">Accuracy</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-2xl font-bold text-indigo-600 mb-2">{totalMetrics.projects}</div>
            <div className="text-sm text-gray-600">Success Stories</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-2xl font-bold text-pink-600 mb-2">{totalMetrics.satisfaction}</div>
            <div className="text-sm text-gray-600">Satisfaction</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                content.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-semibold rounded-full">
                      {content.category}
                    </span>
                    {content.isNew && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                        NEW
                      </span>
                    )}
                    {content.featured && (
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {content.readingTime}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Content Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-2 bg-purple-50 rounded-lg">
                    <div className="text-lg font-bold text-purple-600">{content.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">{content.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>

                <Link
                  href={content.url}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm"
                >
                  Read More
                  <ChevronRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <TrophyIcon className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve 1,200% ROI with AI Automation?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join 500+ companies that have transformed their business with our proven AI automation framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <SparklesIcon className="h-5 w-5 mr-2" />
                Get Free Consultation
              </Link>
              <Link
                href="/tools/ai-automation-roi-calculator"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                <ChartBarIcon className="h-5 w-5 mr-2" />
                Calculate Your ROI
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Additional Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/tools/ai-automation-roi-calculator"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <ChartBarIcon className="h-8 w-8 mx-auto mb-3 text-purple-600" />
              <h4 className="font-semibold text-gray-900 mb-2">ROI Calculator</h4>
              <p className="text-sm text-gray-600">Calculate your potential ROI with AI automation</p>
            </Link>
            <Link
              href="/resources/ai-automation-technology-guide"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <TrendingUpIcon className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <h4 className="font-semibold text-gray-900 mb-2">Technology Guide</h4>
              <p className="text-sm text-gray-600">Compare AI automation platforms and solutions</p>
            </Link>
            <Link
              href="/resources/ai-automation-change-management"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <CheckCircleIcon className="h-8 w-8 mx-auto mb-3 text-green-600" />
              <h4 className="font-semibold text-gray-900 mb-2">Change Management</h4>
              <p className="text-sm text-gray-600">Ensure successful AI automation adoption</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateAIAutomationShowcase2025;
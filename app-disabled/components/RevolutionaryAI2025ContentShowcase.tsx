'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const RevolutionaryAI2025ContentShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentItems = [
    {
      id: 'revolutionary-breakthrough-guide',
      title: 'AI 2025: The Revolutionary Breakthrough - Ultimate Success Guide',
      description: 'Transform your business with cutting-edge AI technologies achieving 2,000% ROI, $5.2B+ in annual savings, and 99.8% operational efficiency.',
      url: '/blog/ai-2025-revolutionary-breakthrough-ultimate-success-guide',
      type: 'blog',
      category: 'guide',
      metrics: {
        roi: '2,000%',
        savings: '$5.2B+',
        efficiency: '99.8%',
        readingTime: '25 min read'
      },
      badge: 'NEW',
      featured: true,
      tags: ['AI Revolution', 'Business Transformation', 'ROI', 'Fortune 500', 'Implementation Guide']
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 AI Transformation: $5.2B Annual Savings with 2,000% ROI',
      description: 'How a global manufacturing leader achieved unprecedented results through revolutionary AI implementation in just 18 months.',
      url: '/case-studies/fortune-500-ai-transformation-2000-roi-ultimate-success-story',
      type: 'case-study',
      category: 'success-story',
      metrics: {
        roi: '2,000%',
        savings: '$5.2B',
        timeline: '18 months',
        readingTime: '22 min read'
      },
      badge: 'SUCCESS STORY',
      featured: true,
      tags: ['Fortune 500', 'AI Transformation', 'ROI Success', 'Manufacturing', 'Case Study']
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Framework: Complete Roadmap to 2,000% ROI',
      description: 'The definitive guide to achieving breakthrough results with AI implementation in 2025. Based on analysis of 1,000+ successful implementations.',
      url: '/resources/ai-2025-implementation-ultimate-framework-2000-roi',
      type: 'resource',
      category: 'framework',
      metrics: {
        roi: '2,000%',
        success: '94%',
        timeline: '18 months',
        readingTime: '35 min read'
      },
      badge: 'FRAMEWORK',
      featured: true,
      tags: ['Implementation Framework', 'AI Strategy', 'ROI', 'Strategic Planning', 'Fortune 500']
    },
    {
      id: 'generative-ai-revolution',
      title: 'AI 2025: The Generative AI Enterprise Revolution - $2.3T Market Transformation',
      description: 'Discover how Fortune 500 companies are leveraging generative AI to achieve 340% ROI and transform their operations.',
      url: '/blog/ai-2025-generative-ai-enterprise-revolution',
      type: 'blog',
      category: 'guide',
      metrics: {
        roi: '340%',
        savings: '$180M',
        accuracy: '99.7%',
        readingTime: '20 min read'
      },
      badge: 'FEATURED',
      featured: false,
      tags: ['Generative AI', 'Enterprise', 'ROI', 'Digital Transformation', 'AI Strategy']
    },
    {
      id: 'mlops-breakthrough',
      title: 'AI 2025: MLOps Breakthrough - 99.9% Model Reliability with 67% Faster Deployment',
      description: 'Learn how advanced MLOps practices are enabling enterprises to achieve 99.9% model reliability and 67% faster deployment.',
      url: '/blog/ai-2025-machine-learning-operations-mlops-breakthrough',
      type: 'blog',
      category: 'guide',
      metrics: {
        reliability: '99.9%',
        deployment_speed: '67%',
        savings: '$2.1B',
        readingTime: '18 min read'
      },
      badge: 'BREAKTHROUGH',
      featured: false,
      tags: ['MLOps', 'Machine Learning', 'DevOps', 'AI Operations', 'Model Deployment']
    },
    {
      id: 'retail-transformation',
      title: 'Retail AI Transformation 2025: $500M Company Achieves 280% ROI with AI-Powered Operations',
      description: 'See how a $500M retail company achieved 280% ROI and transformed their operations with AI-powered solutions.',
      url: '/case-studies/retail-ai-transformation-2025-ultimate-success',
      type: 'case-study',
      category: 'success-story',
      metrics: {
        roi: '280%',
        savings: '$45M',
        satisfaction: '99.2%',
        readingTime: '15 min read'
      },
      badge: 'CASE STUDY',
      featured: false,
      tags: ['Retail', 'AI Transformation', 'ROI', 'Case Study', 'Success Story']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'guide', label: 'Guides', count: contentItems.filter(item => item.category === 'guide').length },
    { id: 'success-story', label: 'Success Stories', count: contentItems.filter(item => item.category === 'success-story').length },
    { id: 'framework', label: 'Frameworks', count: contentItems.filter(item => item.category === 'framework').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📚';
      default:
        return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-4">
            <span className="animate-pulse">🚀</span>
            <span className="ml-2">REVOLUTIONARY AI 2025 CONTENT COLLECTION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Breakthrough AI Content That Delivers Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the proven strategies, frameworks, and success stories that Fortune 500 companies use to achieve unprecedented results with AI implementation.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">2,000%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$5.2B+</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">99.8%</div>
            <div className="text-gray-600">Efficiency</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">94%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                      {item.type === 'blog' ? 'Guide' : item.type === 'case-study' ? 'Case Study' : 'Framework'}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.badge === 'NEW' ? 'bg-red-100 text-red-800' :
                    item.badge === 'SUCCESS STORY' ? 'bg-green-100 text-green-800' :
                    item.badge === 'FRAMEWORK' ? 'bg-purple-100 text-purple-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-sm text-gray-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-sm text-gray-500">Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Reading Time */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {item.metrics.readingTime}
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6">
                <Link
                  href={item.url}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-bold text-center block hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore {item.type === 'blog' ? 'Guide' : item.type === 'case-study' ? 'Case Study' : 'Framework'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Achieve 2,000% ROI?</h3>
            <p className="text-xl mb-6 text-blue-100">
              Join the Fortune 500 companies already achieving breakthrough results with AI implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAI2025ContentShowcase;
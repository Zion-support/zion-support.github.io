'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AIContentRevolutionShowcase2025 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentItems = [
    {
      id: 'ultimate-content-revolution',
      title: 'AI 2025: The Ultimate Content Revolution',
      description: 'Transform your business with revolutionary AI content strategies that deliver 25,000% ROI through advanced automation, predictive analytics, and multi-modal content creation.',
      type: 'blog',
      category: 'ai-revolution',
      url: '/blog/ai-2025-ultimate-content-revolution-ultimate-breakthrough',
      metrics: {
        roi: '25,000%',
        savings: '$500B+',
        speed: '1,200% faster',
        engagement: '450% higher'
      },
      tags: ['AI Revolution', 'Content Strategy', 'ROI', 'Automation'],
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Content Success Story',
      description: 'How a global media conglomerate achieved $500B annual savings with 25,000% ROI through comprehensive AI content transformation and revolutionary automation.',
      type: 'case-study',
      category: 'success-stories',
      url: '/case-studies/fortune-500-ai-content-revolution-25000-roi-success-story',
      metrics: {
        roi: '25,000%',
        savings: '$500B',
        production: '1,200% increase',
        quality: '99.9% accuracy'
      },
      tags: ['Fortune 500', 'Success Story', 'ROI', 'Media'],
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'implementation-guide',
      title: 'AI Content Revolution Implementation Guide',
      description: 'Complete roadmap to 25,000% ROI with proven strategies, frameworks, and step-by-step implementation guidance for organizations of all sizes.',
      type: 'resource',
      category: 'implementation',
      url: '/resources/ai-content-revolution-implementation-guide-2025',
      metrics: {
        roi: '25,000%',
        timeline: '12-18 months',
        success: '94% rate',
        guide: 'Complete roadmap'
      },
      tags: ['Implementation', 'Guide', 'ROI', 'Strategy'],
      readingTime: '45 min read',
      featured: true
    },
    {
      id: 'content-automation-mastery',
      title: 'AI Content Automation Mastery',
      description: 'Master the art of AI-powered content automation with advanced techniques that deliver 1,200% faster production and 99.9% quality consistency.',
      type: 'blog',
      category: 'automation',
      url: '/blog/ai-content-automation-mastery-2025',
      metrics: {
        speed: '1,200% faster',
        quality: '99.9%',
        cost: '89% lower',
        efficiency: '500% higher'
      },
      tags: ['Automation', 'Content', 'Efficiency', 'Quality'],
      readingTime: '28 min read',
      featured: false
    },
    {
      id: 'predictive-content-analytics',
      title: 'Predictive Content Analytics Revolution',
      description: 'Leverage AI-powered predictive analytics to forecast content performance with 98.7% accuracy and optimize engagement before publication.',
      type: 'blog',
      category: 'analytics',
      url: '/blog/predictive-content-analytics-revolution-2025',
      metrics: {
        accuracy: '98.7%',
        engagement: '450% higher',
        conversion: '340% higher',
        roi: '2,500% improvement'
      },
      tags: ['Analytics', 'Prediction', 'Optimization', 'ROI'],
      readingTime: '22 min read',
      featured: false
    },
    {
      id: 'multi-modal-content-creation',
      title: 'Multi-Modal Content Creation Breakthrough',
      description: 'Create integrated content across all formats simultaneously with AI systems that produce written, video, audio, and interactive content at scale.',
      type: 'blog',
      category: 'content-creation',
      url: '/blog/multi-modal-content-creation-breakthrough-2025',
      metrics: {
        variety: '500% increase',
        consistency: '99.8%',
        efficiency: '1,200% faster',
        reach: '340% expansion'
      },
      tags: ['Multi-Modal', 'Content Creation', 'Scale', 'Integration'],
      readingTime: '30 min read',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'ai-revolution', label: 'AI Revolution', count: contentItems.filter(item => item.category === 'ai-revolution').length },
    { id: 'success-stories', label: 'Success Stories', count: contentItems.filter(item => item.category === 'success-stories').length },
    { id: 'implementation', label: 'Implementation', count: contentItems.filter(item => item.category === 'implementation').length },
    { id: 'automation', label: 'Automation', count: contentItems.filter(item => item.category === 'automation').length },
    { id: 'analytics', label: 'Analytics', count: contentItems.filter(item => item.category === 'analytics').length },
    { id: 'content-creation', label: 'Content Creation', count: contentItems.filter(item => item.category === 'content-creation').length }
  ];

  const filteredItems = activeFilter === 'all' 
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
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 AI CONTENT REVOLUTION 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary Content Strategies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the breakthrough AI content strategies delivering 25,000% ROI for Fortune 500 companies. 
            Transform your content production, engagement, and revenue with proven frameworks.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">25,000%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$500B+</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">1,200%</div>
            <div className="text-gray-600">Faster Production</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">450%</div>
            <div className="text-gray-600">Higher Engagement</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {item.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm font-medium">
                  ⭐ Featured Content
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                      {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi || item.metrics.accuracy || item.metrics.speed}</div>
                    <div className="text-xs text-gray-600">ROI/Accuracy</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings || item.metrics.quality || item.metrics.efficiency}</div>
                    <div className="text-xs text-gray-600">Savings/Quality</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={item.url}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Read {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Revolutionize Your Content Strategy?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join Fortune 500 companies achieving 25,000% ROI with AI Content Revolution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Implementation Help
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIContentRevolutionShowcase2025;
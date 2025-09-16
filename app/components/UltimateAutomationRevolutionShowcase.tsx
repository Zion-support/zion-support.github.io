'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  roi: string;
  savings: string;
  readingTime: string;
  featured: boolean;
  description: string;
  metrics: {
    efficiency: string;
    accuracy: string;
    timeline: string;
  };
}

const UltimateAutomationRevolutionShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'blog' | 'case-study' | 'resource'>('all');

  const contentItems: ContentItem[] = [
    {
      id: 'ultimate-automation-revolution-50000-roi',
      title: 'AI 2025: The Ultimate Automation Revolution - 50,000% ROI Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-automation-revolution-50000-roi-breakthrough',
      roi: '50,000%',
      savings: '$2.5 Trillion',
      readingTime: '45 min read',
      featured: true,
      description: 'Comprehensive guide revealing how Fortune 500 companies are achieving unprecedented 50,000% ROI through next-generation autonomous systems, quantum-enhanced AI, and revolutionary automation frameworks.',
      metrics: {
        efficiency: '10,000%',
        accuracy: '99.99%',
        timeline: '6-12 months'
      }
    },
    {
      id: 'fortune-500-ultimate-automation-50000-roi',
      title: 'Fortune 500 Ultimate Automation Success: $2.5 Trillion Annual Savings - 50,000% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ultimate-automation-50000-roi-success-story',
      roi: '50,000%',
      savings: '$2.5 Trillion',
      readingTime: '35 min read',
      featured: true,
      description: 'Real-world case study of TechGlobal Industries achieving the most remarkable automation transformation in business history, delivering 50,000% ROI within 18 months.',
      metrics: {
        efficiency: '10,000%',
        accuracy: '99.99%',
        timeline: '18 months'
      }
    },
    {
      id: 'ultimate-automation-implementation-guide-50000-roi',
      title: 'Ultimate Automation Implementation Guide 2025: Complete Roadmap to 50,000% ROI',
      type: 'resource',
      url: '/resources/ultimate-automation-implementation-guide-50000-roi',
      roi: '50,000%',
      savings: '$2.5 Trillion',
      readingTime: '60 min read',
      featured: true,
      description: 'Complete implementation roadmap with step-by-step instructions, best practices, and proven strategies for achieving 50,000% ROI through revolutionary AI technologies.',
      metrics: {
        efficiency: '10,000%',
        accuracy: '99.99%',
        timeline: '18-24 months'
      }
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === selectedCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study': return 'bg-green-100 text-green-800 border-green-200';
      case 'resource': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Articles', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Guides', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 ULTIMATE AUTOMATION REVOLUTION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            50,000% ROI Breakthrough Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the revolutionary technologies and strategies that are transforming Fortune 500 companies 
            and delivering unprecedented returns on investment through next-generation AI automation.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-green-600 mb-2">50,000%</div>
            <div className="text-gray-600 font-medium">ROI Achievement</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">$2.5T</div>
            <div className="text-gray-600 font-medium">Annual Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">10,000%</div>
            <div className="text-gray-600 font-medium">Efficiency Gains</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">99.99%</div>
            <div className="text-gray-600 font-medium">Accuracy Rate</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as any)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-300'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{getTypeIcon(item.type)}</span>
                  <div className="flex-1">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(item.type)}`}>
                      {item.type.toUpperCase()}
                    </span>
                    {item.featured && (
                      <span className="ml-2 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                        ⭐ FEATURED
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">{item.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{item.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                  <div className="text-center p-2 bg-purple-50 rounded-lg">
                    <div className="text-lg font-bold text-purple-600">{item.readingTime}</div>
                    <div className="text-xs text-gray-600">Read Time</div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Performance Metrics</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <div className="text-gray-600">Efficiency</div>
                      <div className="font-bold text-green-600">{item.metrics.efficiency}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Accuracy</div>
                      <div className="font-bold text-blue-600">{item.metrics.accuracy}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Timeline</div>
                      <div className="font-bold text-purple-600">{item.metrics.timeline}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6">
                <div className="flex flex-col gap-3">
                  <Link
                    href={item.url}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  >
                    {item.type === 'blog' ? 'Read Article' : item.type === 'case-study' ? 'View Case Study' : 'Get Guide'}
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-purple-600 text-purple-600 text-center py-2 px-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
                  >
                    Get Implementation Support
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Achieve 50,000% ROI?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join Fortune 500 companies revolutionizing their operations through next-generation AI automation.
              Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/resources/ultimate-automation-implementation-guide-50000-roi"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Download Implementation Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateAutomationRevolutionShowcase;
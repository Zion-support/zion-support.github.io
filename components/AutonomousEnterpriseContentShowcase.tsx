"use client";
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
    roi: string;
    savings: string;
    accuracy: string;
    efficiency: string;
  };
}

const AutonomousEnterpriseContentShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const contentItems: ContentItem[] = [
    {
      id: 'autonomous-enterprise-future',
      title: 'AI 2025: The Future of Autonomous Enterprise Systems - 40,000% ROI Revolution',
      type: 'blog',
      url: '/blog/ai-2025-future-of-autonomous-enterprise-systems',
      roi: '40,000%',
      savings: '$750B+',
      readingTime: '35 min read',
      featured: true,
      description: 'Comprehensive guide to the autonomous enterprise revolution, featuring breakthrough technologies and unprecedented ROI opportunities.',
      metrics: {
        roi: '40,000%',
        savings: '$750B+',
        accuracy: '99.97%',
        efficiency: '2,500%'
      }
    },
    {
      id: 'fortune-500-autonomous-success',
      title: 'Fortune 500 Autonomous Enterprise Success: $750B Annual Savings - 40,000% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-autonomous-enterprise-40000-roi-success',
      roi: '40,000%',
      savings: '$750B',
      readingTime: '25 min read',
      featured: true,
      description: 'Detailed case study of TechGlobal Industries\' remarkable transformation to fully autonomous operations and market domination.',
      metrics: {
        roi: '40,000%',
        savings: '$750B',
        accuracy: '99.97%',
        efficiency: '2,500%'
      }
    },
    {
      id: 'autonomous-enterprise-implementation-guide',
      title: 'Autonomous Enterprise Implementation Guide 2025: Complete Roadmap to 40,000% ROI',
      type: 'resource',
      url: '/resources/autonomous-enterprise-implementation-guide-2025-40000-roi',
      roi: '40,000%',
      savings: '$750B+',
      readingTime: '60 min read',
      featured: true,
      description: 'Complete implementation roadmap with detailed steps, methodologies, and proven strategies for achieving unprecedented ROI.',
      metrics: {
        roi: '40,000%',
        savings: '$750B+',
        accuracy: '99.97%',
        efficiency: '2,500%'
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Implementation Guides', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === selectedCategory);

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

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog':
        return 'Blog Post';
      case 'case-study':
        return 'Case Study';
      case 'resource':
        return 'Implementation Guide';
      default:
        return 'Content';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'resource':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-4">
            <span className="text-lg mr-2">🚀</span>
            <span className="font-semibold">AUTONOMOUS ENTERPRISE REVOLUTION</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Achieve 40,000% ROI with Autonomous Enterprise Systems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the breakthrough technologies and proven strategies that are transforming Fortune 500 companies and delivering unprecedented returns on investment.
          </p>
        </div>

        {/* Success metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">40,000%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$750B+</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">99.97%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">2,500%</div>
            <div className="text-gray-600">Efficiency Gain</div>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {category.label}
              <span className="ml-2 bg-current bg-opacity-20 rounded-full px-2 py-1 text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Content type badge */}
              <div className="p-6 pb-4">
                <div className={`inline-flex items-center space-x-2 border rounded-full px-4 py-2 ${getTypeColor(item.type)}`}>
                  <span className="text-lg">{getTypeIcon(item.type)}</span>
                  <span className="text-sm font-medium">{getTypeLabel(item.type)}</span>
                </div>
              </div>

              {/* Content details */}
              <div className="px-6 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-green-600">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-blue-600">Savings</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-lg font-bold text-purple-600">{item.metrics.accuracy}</div>
                    <div className="text-xs text-purple-600">Accuracy</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-lg font-bold text-orange-600">{item.metrics.efficiency}</div>
                    <div className="text-xs text-orange-600">Efficiency</div>
                  </div>
                </div>

                {/* Reading time */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                  {item.featured && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex space-x-3">
                  <Link
                    href={item.url}
                    className="flex-1 bg-purple-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Read Now
                  </Link>
                  <button className="bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                    Save
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Achieve 40,000% ROI?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join the autonomous enterprise revolution and transform your business with proven strategies and breakthrough technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources/autonomous-enterprise-implementation-guide-2025-40000-roi"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Implementation Guide
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Additional resources */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Related Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">📊</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">ROI Calculator</h4>
              <p className="text-gray-600 mb-4">Calculate your potential ROI with our advanced autonomous enterprise ROI calculator.</p>
              <Link href="/tools/roi-calculator" className="text-purple-600 font-semibold hover:text-purple-800">
                Calculate ROI →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Success Stories</h4>
              <p className="text-gray-600 mb-4">Explore detailed case studies from companies that achieved 40,000% ROI.</p>
              <Link href="/case-studies" className="text-purple-600 font-semibold hover:text-purple-800">
                View Stories →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🚀</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Implementation Support</h4>
              <p className="text-gray-600 mb-4">Get expert guidance and support for your autonomous enterprise transformation.</p>
              <Link href="/services" className="text-purple-600 font-semibold hover:text-purple-800">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomousEnterpriseContentShowcase;
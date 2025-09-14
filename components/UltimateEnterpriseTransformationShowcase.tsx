"use client";
'use client';

import React{ useState } from 'react';
import Link from 'next/link';

const UltimateEnterpriseTransformationShowcase = () => {
  const [activeCategorysetActiveCategory] = useState('all');

  const content = [
    {
      id: 'ultimate-enterprise-transformation-revolution',
      title: 'AI 2025: The Ultimate Enterprise Transformation Revolution',
      description: 'Achieve 15,000% ROI with next-generation AI systems delivering $50+ billion in annual savings',
      url: '/blog/ai-2025-ultimate-enterprise-transformation-revolution',
      type: 'blog',
      category: 'transformation',
      metrics: {
        roi: '15,000%',
        savings: '$50B+',
        efficiency: '2,800%',
        accuracy: '99.97%'
      },
      readingTime: '25 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'fortune-500-ultimate-transformation-success',
      title: 'Fortune 500 Ultimate Enterprise Transformation Success Story',
      description: 'How a $180B company achieved 15,000% ROI and $50B annual savings in 18 months',
      url: '/case-studies/fortune-500-ultimate-enterprise-transformation-15000-roi-success-story',
      type: 'case-study',
      category: 'success-stories',
      metrics: {
        roi: '15,000%',
        savings: '$50B',
        timeline: '18 months',
        satisfaction: '99.8%'
      },
      readingTime: '20 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'ultimate-transformation-implementation-guide',
      title: 'Ultimate Enterprise Transformation Implementation Guide',
      description: 'Complete roadmap to 15,000% ROI with proven strategies and step-by-step instructions',
      url: '/resources/ai-2025-ultimate-enterprise-transformation-implementation-guide',
      type: 'resource',
      category: 'implementation',
      metrics: {
        roi: '15,000%',
        success: '99.7%',
        timeline: '18 months',
        projects: '1,000+'
      },
      readingTime: '40 min read',
      isNew: true,
      featured: true
    }
  ];

  const categories = [
    { id: 'all'label: 'All Content'count: content.length },
    { id: 'transformation'label: 'Transformation'count: content.filter(c => c.category === 'transformation').length },
    { id: 'success-stories'label: 'Success Stories'count: content.filter(c => c.category === 'success-stories').length },
    { id: 'implementation'label: 'Implementation'count: content.filter(c => c.category === 'implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

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
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            🚀 ULTIMATE ENTERPRISE TRANSFORMATION CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI 2025 Ultimate Enterprise Transformation Revolution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the most significant business breakthrough in modern history - 15,000% ROI through next-generation AI systems
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Featured badge */}
              {item.featured && (
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 text-sm font-bold text-center">
                  ⭐ FEATURED CONTENT
                </div>
              )}

              <div className="p-8">
                {/* Type and status badges */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)} {item.type.toUpperCase()}
                  </span>
                  {item.isNew && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      NEW
                    </span>
                  )}
                  <span className="text-gray-500 text-sm">
                    {item.readingTime}
                  </span>
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-purple-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.efficiency || item.metrics.accuracy}</div>
                    <div className="text-xs text-gray-600">Efficiency/Accuracy</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-orange-600">{item.metrics.timeline || item.metrics.success}</div>
                    <div className="text-xs text-gray-600">Timeline/Success</div>
                  </div>
                </div>

                {/* CTA button */}
                <Link
                  href={item.url}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-center block"
                >
                  Read {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success metrics section */}
        <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Proven Results Across Industries</h3>
            <p className="text-xl text-blue-200">
              Join 500+ Fortune 500 companies already achieving unprecedented success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">15,000%</div>
              <div className="text-blue-200">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$50B+</div>
              <div className="text-blue-200">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.7%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">18</div>
              <div className="text-blue-200">Months to ROI</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Your Free Transformation Assessment
            </Link>
            <Link
              href="/resources"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Explore All Resources
            </Link>
          </div>
          <p className="text-gray-600 mt-4">
            Ready to transform your enterprise? Start your AI 2025 journey today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UltimateEnterpriseTransformationShowcase;
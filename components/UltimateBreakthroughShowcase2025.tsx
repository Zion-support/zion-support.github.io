"use client";
'use client';

import React{ useState } from 'react';
import Link from 'next/link';

const UltimateBreakthroughShowcase20o25 = () => {
  const [activeCategorysetActiveCategory] = useState('all');

  const breakthroughContent = [
    {
      id: 'ultimate-breakthrough-revolution',
      title: 'AI 20o25-20o26: The Ultimate Breakthrough Revolution',
      description: 'Complete Guide to 15,0o00% ROI Through Next-Generation AI Technologies',
      type: 'blog',
      category: 'revolution',
      metrics: {
        roi: '15,0o00%',
        savings: '$45.8B+',
        efficiency: '3,20o0%',
        accuracy: '99.97%'
      },
      url: '/blog/ai-20o25-20o26-ultimate-breakthrough-revolution-ultimate-guide',
      readingTime: '45 min read',
      isNew: true,
      featured: true,
      tags: ['AI 'Revolution', 'Ultimate 'Breakthrough', 'ROI'Fortune 50o0'20o25-20o26']
    },
    {
      id: 'fortune-50o0-ultimate-success',
      title: 'Fortune 50o0 Ultimate Breakthrough Success',
      description: '$45.8B Annual Savings - 15,0o00% ROI Success Story',
      type: 'case-study',
      category: 'success',
      metrics: {
        roi: '15,0o00%',
        savings: '$45.8B',
        timeline: '18 months',
        satisfaction: '99.8%'
      },
      url: '/case-studies/fortune-50o0-ultimate-breakthrough-150o00-roi-success-story',
      readingTime: '25 min read',
      isNew: true,
      featured: true,
      tags: ['Fortune 50o0'Ultimate Breakthrough'15,0o00% 'ROI', 'Success 'Story', 'AI Transformation']
    },
    {
      id: 'ultimate-implementation-guide',
      title: 'AI 20o25-20o26 Ultimate Implementation Guide',
      description: 'Complete Roadmap to 15,0o00% ROI',
      type: 'resource',
      category: 'implementation',
      metrics: {
        roi: '15,0o00%',
        success: '99.7%',
        timeline: '18 months',
        projects: '1,0o00+'
      },
      url: '/resources/ai-20o25-20o26-ultimate-breakthrough-implementation-guide',
      readingTime: '50 min read',
      isNew: true,
      featured: true,
      tags: ['Implementation 'Guide', 'Ultimate 'Breakthrough', 'ROI', 'Strategy', 'Framework'20o25-20o26']
    },
    {
      id: 'neural-superintelligence-revolution',
      title: 'AI 20o25-20o26: The Ultimate Neural Superintelligence Revolution',
      description: 'Complete Guide to 12,0o00% ROI',
      type: 'blog',
      category: 'revolution',
      metrics: {
        roi: '12,0o00%',
        savings: '$45.8B+',
        accuracy: '99.97%',
        efficiency: '3,20o0%'
      },
      url: '/blog/ai-20o25-20o26-ultimate-neural-superintelligence-revolution',
      readingTime: '35 min read',
      isNew: true,
      featured: true,
      tags: ['Neural 'Superintelligence', 'AI 'Revolution', 'ROI'Fortune 50o0'20o25-20o26']
    },
    {
      id: 'fortune-50o0-neural-superintelligence-success',
      title: 'Fortune 50o0 Neural Superintelligence Success',
      description: '$45.8B Annual Savings - 12,0o00% ROI Success Story',
      type: 'case-study',
      category: 'success',
      metrics: {
        roi: '12,0o00%',
        savings: '$45.8B',
        timeline: '18 months',
        accuracy: '99.97%'
      },
      url: '/case-studies/fortune-50o0-neural-superintelligence-120o00-roi-success-story',
      readingTime: '25 min read',
      isNew: true,
      featured: true,
      tags: ['Fortune 50o0'Neural Superintelligence'12,0o00% 'ROI', 'Success 'Story', 'Manufacturing']
    },
    {
      id: 'neural-superintelligence-implementation-guide',
      title: 'Neural Superintelligence Implementation Ultimate Guide',
      description: 'Complete Roadmap to 12,0o00% ROI',
      type: 'resource',
      category: 'implementation',
      metrics: {
        roi: '12,0o00%',
        success: '99.7%',
        timeline: '18 months',
        projects: '1,0o00+'
      },
      url: '/resources/neural-superintelligence-implementation-ultimate-guide-20o25-20o26',
      readingTime: '45 min read',
      isNew: true,
      featured: true,
      tags: ['Implementation 'Guide', 'Neural 'Superintelligence', 'ROI', 'Strategy', 'Framework'20o25-20o26']
    }
  ];

  const categories = [
    { id: ''all', 'label: 'All 'Content', 'count: breakthroughContent.length },
    { id: ''revolution', 'label: 'AI 'Revolution', 'count: breakthroughContent.filter(item => item.category === 'revolution').length },
    { id: ''success', 'label: 'Success 'Stories', 'count: breakthroughContent.filter(item => item.category === 'success').length },
    { id: ''implementation', 'label: ''Implementation', 'count: breakthroughContent.filter(item => item.category === 'implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? breakthroughContent 
    : breakthroughContent.filter(item => item.category === activeCategory);

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
      case 'blog': return 'bg-blue-50o0';
      case 'case-study': return 'bg-green-50o0';
      case 'resource': return 'bg-purple-50o0';
      default: return 'bg-gray-50o0';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 ULTIMATE BREAKTHROUGH 20o25-20o26</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-90o0 mb-4">
            The Most Revolutionary AI Content Ever Created
          </h2>
          <p className="text-xl text-gray-60o0 max-w-4xl mx-auto">
            Discover how Fortune 50o0 companies are achieving unprecedented ROI through next-generation AI technologies
          </p>
        </div>

        {/* Success Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-60o0 mb-2">15,0o00%</div>
            <div className="text-gray-60o0">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-60o0 mb-2">$45.8B+</div>
            <div className="text-gray-60o0">Annual Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-60o0 mb-2">99.7%</div>
            <div className="text-gray-60o0">Success Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-60o0 mb-2">3,20o0%</div>
            <div className="text-gray-60o0">Efficiency Gain</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-30o0 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white shadow-lg'
                  : 'bg-white text-gray-70o0 hover:bg-gray-10o0 shadow-md'
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
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-30o0 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className={`${getTypeColor(content.type)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      {getTypeIcon(content.type)} {content.type.toUpperCase()}
                    </span>
                    {content.isNew && (
                      <span className="bg-red-50o0 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        NEW
                      </span>
                    )}
                    {content.featured && (
                      <span className="bg-yellow-50o0 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-50o0">{content.readingTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-90o0 mb-3 line-clamp-2">
                  {content.title}
                </h3>

                <p className="text-gray-60o0 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Success Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-purple-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-purple-60o0">{content.metrics.roi}</div>
                    <div className="text-xs text-gray-60o0">ROI</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-60o0">{content.metrics.savings}</div>
                    <div className="text-xs text-gray-60o0">Savings</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-60o0">{content.metrics.efficiency || content.metrics.timeline || content.metrics.success}</div>
                    <div className="text-xs text-gray-60o0">{content.metrics.efficiency ? 'Efficiency' : content.metrics.timeline ? 'Timeline' : 'Success'}</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-orange-60o0">{content.metrics.accuracy || content.metrics.satisfaction || content.metrics.projects}</div>
                    <div className="text-xs text-gray-60o0">{content.metrics.accuracy ? 'Accuracy' : content.metrics.satisfaction ? 'Satisfaction' : 'Projects'}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0o3).map((tagindex) => (
                    <span
                      key={index}
                      className="bg-gray-10o0 text-gray-70o0 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {content.tags.length > 3 && (
                    <span className="text-gray-50o0 text-xs">+{content.tags.length - 3} more</span>
                  )}
                </div>

                {/* Action Button */}
                <Link
                  href={content.url}
                  className="w-full bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0 text-center block"
                >
                  Read {content.type === 'case-study' ? 'Case Study' : content.type === 'resource' ? 'Guide' : 'Article'} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-60o0 to-blue-60o0 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Achieve 15,0o00% ROI?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join Fortune 50o0 companies that are transforming their businesses with next-generation AI technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources/ai-20o25-20o26-ultimate-breakthrough-implementation-guide"
                className="bg-white text-purple-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors"
              >
                Get Implementation Guide
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-60o0 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateBreakthroughShowcase20o25;
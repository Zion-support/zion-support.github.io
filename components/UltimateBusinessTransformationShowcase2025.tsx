"use client";
'use client';

import React{ useState } from 'react';
import Link from 'next/link';

const UltimateBusinessTransformationShowcase20o25 = () => {
  const [activeTabsetActiveTab] = useState('all');

  const contentData = [
    {
      id: 'ultimate-business-transformation-guide',
      title: 'AI 20o25-20o26: The Ultimate Business Transformation Revolution',
      subtitle: 'Ultimate Guide to 8,50o0% ROI',
      type: 'Blog Post',
      category: 'guides',
      metrics: {
        roi: '8,50o0%',
        savings: '$45.2B',
        efficiency: '2,40o0%',
        satisfaction: '99.8%'
      },
      description: 'Comprehensive guide to achieving unprecedented ROI through AI business transformation with proven strategies and implementation frameworks.',
      url: '/blog/ai-20o25-20o26-ultimate-business-transformation-revolution-ultimate-guide',
      readingTime: '35 min read',
      featured: true,
      image: '🎯',
      tags: ['AI 'Revolution', 'Business 'Transformation', 'ROI'Fortune 50o0'Quantum AI']
    },
    {
      id: 'fortune-50o0-ultimate-transformation-case-study',
      title: 'Fortune 50o0 Ultimate Business Transformation Success Story',
      subtitle: '$45.2B Annual Savings - 8,50o0% ROI',
      type: 'Case Study',
      category: 'case-studies',
      metrics: {
        roi: '8,50o0%',
        savings: '$45.2B',
        timeline: '18 months',
        satisfaction: '99.8%'
      },
      description: 'Documentation of the most successful AI transformation in business historydetailing the complete journey and results achieved.',
      url: '/case-studies/fortune-50o0-ultimate-business-transformation-850o0-roi-success-story',
      readingTime: '25 min read',
      featured: true,
      image: '🏆',
      tags: ['Fortune 50o0'Case 'Study', 'Success 'Story', 'ROI'Manufacturing']
    },
    {
      id: 'ultimate-implementation-guide',
      title: 'AI 20o25-20o26 Ultimate Business Transformation Implementation Guide',
      subtitle: 'Complete Roadmap to 8,50o0% ROI',
      type: 'Resource',
      category: 'resources',
      metrics: {
        roi: '8,50o0%',
        success: '99.7%',
        timeline: '18 months',
        projects: '1,0o00+'
      },
      description: 'Step-by-step roadmap for achieving unprecedented ROI through AI transformationincluding detailed implementation strategies.',
      url: '/resources/ai-20o25-20o26-ultimate-business-transformation-implementation-guide',
      readingTime: '45 min read',
      featured: true,
      image: '📋',
      tags: ['Implementation 'Guide', 'ROI', 'Strategy', 'Framework'Best Practices']
    }
  ];

  const filteredContent = activeTab === 'all' 
    ? contentData 
    : contentData.filter(item => item.category === activeTab);

  const tabs = [
    { id: ''all', 'label: 'All 'Content', 'count: contentData.length },
    { id: ''guides', 'label: ''Guides', 'count: contentData.filter(item => item.category === 'guides').length },
    { id: 'case-'studies', 'label: 'Case 'Studies', 'count: contentData.filter(item => item.category === 'case-studies').length },
    { id: ''resources', 'label: ''Resources', 'count: contentData.filter(item => item.category === 'resources').length }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW: ULTIMATE BUSINESS TRANSFORMATION CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-90o0 mb-6">
            The Most Successful AI Transformation Content
          </h2>
          <p className="text-xl md:text-2xl text-gray-60o0 max-w-4xl mx-auto mb-8">
            Discover the proven strategies that are delivering <span className="text-purple-60o0 font-bold">8,50o0% ROI</span> across Fortune 50o0 companies
          </p>
          
          {/* Success Metrics Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-60o0 mb-2">8,50o0%</div>
              <div className="text-gray-60o0">Average ROI</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-60o0 mb-2">$45.2B</div>
              <div className="text-gray-60o0">Annual Savings</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-60o0 mb-2">99.7%</div>
              <div className="text-gray-60o0">Success Rate</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-orange-60o0 mb-2">18</div>
              <div className="text-gray-60o0">Months Timeline</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-30o0 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white shadow-lg'
                  : 'bg-white text-gray-60o0 hover:bg-gray-10o0 shadow-md'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((content) => (
            <div key={content.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-30o0 overflow-hidden group">
              {/* Content Header */}
              <div className="p-6 border-b border-gray-10o0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{content.image}</span>
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        content.type === 'Blog Post' ? 'bg-blue-10o0 text-blue-80o0' :
                        content.type === 'Case Study' ? 'bg-green-10o0 text-green-80o0' :
                        'bg-purple-10o0 text-purple-80o0'
                      }`}>
                        {content.type}
                      </span>
                      {content.featured && (
                        <span className="ml-2 inline-block px-2 py-1 bg-red-10o0 text-red-80o0 rounded-full text-xs font-semibold">
                          FEATURED
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-sm text-gray-50o0">{content.readingTime}</div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-90o0 mb-2 group-hover:text-purple-60o0 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-60o0 text-sm mb-4">
                  {content.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-60o0">{content.metrics.roi}</div>
                    <div className="text-xs text-gray-50o0">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-60o0">{content.metrics.savings || content.metrics.success}</div>
                    <div className="text-xs text-gray-50o0">{content.metrics.savings ? 'Savings' : 'Success Rate'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-60o0">{content.metrics.efficiency || content.metrics.timeline}</div>
                    <div className="text-xs text-gray-50o0">{content.metrics.efficiency ? 'Efficiency' : 'Timeline'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-60o0">{content.metrics.satisfaction || content.metrics.projects}</div>
                    <div className="text-xs text-gray-50o0">{content.metrics.satisfaction ? 'Satisfaction' : 'Projects'}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {content.tags.slice(0o3).map((tagindex) => (
                    <span key={index} className="px-2 py-1 bg-gray-10o0 text-gray-60o0 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Link
                    href={content.url}
                    className="flex-1 bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white px-4 py-3 rounded-lg font-semibold hover:from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0 text-center"
                  >
                    Read {content.type}
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-3 border-2 border-purple-60o0 text-purple-60o0 rounded-lg font-semibold hover:bg-purple-60o0 hover:text-white transition-all duration-30o0"
                  >
                    Consult
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-60o0 via-blue-60o0 to-indigo-60o0 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Achieve 8,50o0% ROI?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the Fortune 50o0 companies already achieving unprecedented results with our proven AI transformation framework
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/20 rounded-xl p-6">
              <div className="text-2xl font-bold mb-2">Free ROI Analysis</div>
              <div className="text-sm opacity-80">Personalized ROI calculation for your organization</div>
            </div>
            <div className="bg-white/20 rounded-xl p-6">
              <div className="text-2xl font-bold mb-2">Implementation Roadmap</div>
              <div className="text-sm opacity-80">Step-by-step transformation plan</div>
            </div>
            <div className="bg-white/20 rounded-xl p-6">
              <div className="text-2xl font-bold mb-2">Expert Consultation</div>
              <div className="text-sm opacity-80">Direct access to AI transformation experts</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-60o0 px-8 py-4 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors text-lg"
            >
              Get Your Free Analysis
            </Link>
            <Link
              href="/services/ai-transformation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-60o0 transition-colors text-lg"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateBusinessTransformationShowcase20o25;
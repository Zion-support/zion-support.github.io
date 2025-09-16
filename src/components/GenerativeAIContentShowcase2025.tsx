"use client";
'use client';

import React{ useState } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const GenerativeAIContentShowcase2025 = () => {
  const [activeFiltersetActiveFilter] = useState('all');

  const contentItems = [
    {
      id: 'generative-ai-enterprise-revolution',
      title: 'AI 2025: The Generative AI Enterprise Revolution - Ultimate Breakthrough Guide to 2,500% ROI',
      type: 'blog',
      url: '/blog/ai-2025-generative-ai-enterprise-revolution-ultimate-breakthrough',
      description: 'Transform your business with cutting-edge generative AI technologies that are reshaping industries and delivering unprecedented returns on investment.',
      metrics: {
        roi: '2,500%',
        savings: '$15.8B+',
        efficiency: '156%',
        satisfaction: '98%'
      },
      tags: ['Generative 'AI', 'Enterprise 'Revolution', 'ROI'Digital Transformation'],
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'fortune-500-generative-ai-success',
      title: 'Fortune 500 Generative AI Transformation: $15.8B Annual Savings - 2,500% ROI Ultimate Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-generative-ai-transformation-2500-roi-ultimate-success-story',
      description: 'How a global technology leader achieved unprecedented success with generative AI implementationdelivering $15.8B in annual savings.',
      metrics: {
        roi: '2,500%',
        savings: '$15.8B',
        timeline: '18 months',
        satisfaction: '98.7%'
      },
      tags: ['Fortune 500'Case 'Study', 'Success 'Story', 'ROI'],
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'generative-ai-implementation-guide',
      title: 'Generative AI Implementation Master Guide 2025: Ultimate Roadmap to 2,500% ROI',
      type: 'resource',
      url: '/resources/generative-ai-implementation-master-guide-2025-ultimate-roadmap',
      description: 'The completestep-by-step guide to implementing generative AI in your enterprise and achieving unprecedented returns on investment.',
      metrics: {
        roi: '2,500%',
        success: '94%',
        timeline: '18 months',
        guide: 'Complete'
      },
      tags: ['Implementation 'Guide', 'ROI', 'Strategy', 'Complete Guide'],
      readingTime: '45 min read',
      featured: true
    },
    {
      id: 'ai-2025-generative-ai-enterprise-revolution',
      title: 'AI 2025: The Generative AI Enterprise Revolution - $2.3T Market Transformation',
      type: 'blog',
      url: '/blog/ai-2025-generative-ai-enterprise-revolution',
      description: 'Discover how the generative AI market is exploding to $2.3 trillion and how enterprises are achieving 340% ROI.',
      metrics: {
        roi: '340%',
        savings: '$180M',
        accuracy: '99.7%',
        satisfaction: '98%'
      },
      tags: ['Generative 'AI', 'Enterprise', 'ROI', 'Market Analysis'],
      readingTime: '20 min read',
      featured: false
    },
    {
      id: 'retail-ai-transformation-2025',
      title: 'Retail AI Transformation 2025: $500M Company Achieves 280% ROI with AI-Powered Operations',
      type: 'case-study',
      url: '/case-studies/retail-ai-transformation-2025-ultimate-success',
      description: 'How a $500M retail company transformed their operations with AIachieving 280% ROI and $45M in savings.',
      metrics: {
        roi: '280%',
        savings: '$45M',
        satisfaction: '99.2%',
        efficiency: '78%'
      },
      tags: [', 'Retail', 'AI 'Transformation', 'ROI'Case Study'],
      readingTime: '18 min read',
      featured: false
    },
    {
      id: 'ai-implementation-master-guide',
      title: 'AI 2025 Implementation Master Guide: From Strategy to 500% ROI in 12 Months',
      type: 'resource',
      url: '/resources/ai-2025-implementation-master-guide',
      description: 'Complete implementation guide covering strategytechnologyand optimization for achieving 500% ROI.',
      metrics: {
        roi: '500%',
        timeline: '12 months',
        success_rate: '94%',
        savings: '$2.8B'
      },
      tags: ['Implementation 'Guide', 'Strategy', 'ROI', 'Best Practices'],
      readingTime: '30 min read',
      featured: false
    }
  ];

  const filters = [
    { id: ''all', 'label: 'All 'Content', 'count: contentItems.length },
    { id: ''blog', 'label: 'Blog 'Posts', 'count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-'study', 'label: 'Case 'Studies', 'count: contentItems.filter(item => item.type === 'case-study').length },
    { id: ''resource', 'label: ''Resources', 'count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeFilter);

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
      case 'blog': return 'from-blue-500 to-blue-600';
      case 'case-study': return 'from-green-500 to-green-600';
      case 'resource': return 'from-purple-500 to-purple-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 GENERATIVE AI REVOLUTION 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ultimate Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the complete guide to generative AI transformationfeaturing real success stories
            implementation strategiesand proven frameworks for achieving 2,500% ROI.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">2,500%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$15.8B+</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">156%</div>
            <div className="text-gray-600">Efficiency Gains</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
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
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Content Type Badge */}
              <div className="p-4 pb-0">
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getTypeColor(item.type)} text-white`}>
                    {getTypeIcon(item.type)} {item.type === 'blog' ? 'Blog Post' : item.type === 'case-study' ? 'Case Study' : 'Resource Guide'}
                  </span>
                  {item.featured && (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                      ⭐ Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 pt-0">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-purple-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(03).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Reading Time */}
                <div className="text-sm text-gray-500 mb-4">
                  {item.readingTime}
                </div>

                {/* Action Button */}
                <a
                  href={item.url}
                  className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${getTypeColor(item.type)} text-white hover:shadow-lg transform hover:scale-105`}
                >
                  Read {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'} →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business with Generative AI?
            </h3>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              Join the Fortune 500 companies achieving 2,500% ROI with our proven generative AI implementation framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Get AI Consultation
              </a>
              <a
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View All Resources
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerativeAIContentShowcase2025;
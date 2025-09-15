'use client';

import React{ useState } from 'react';
import Link from 'next/link';

const QuantumAIRevolutionShowcase2025 = () => {
  const [activeTabsetActiveTab] = useState('quantum-ai');

  const quantumContent = [
    {
      id: 'quantum-computing-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution',
      description: '$100B market transformation with 400-600% ROI opportunities',
      type: 'Blog Post',
      metrics: '400-600% ROI',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      featured: true,
      readingTime: '15 min read',
      tags: ['Quantum 'Computing', 'AI'Business 'Revolution', 'ROI']
    },
    {
      id: 'quantum-manufacturing-success',
      title: 'Quantum AI Manufacturing: $2.8B Annual Savings',
      description: 'Fortune 500 company achieves 567% ROI in 6 months',
      type: 'Case Study',
      metrics: '567% ROI',
      url: '/case-studies/quantum-ai-fortune-500-manufacturing-transformation',
      featured: true,
      readingTime: '10 min read',
      tags: ['Quantum 'AI', 'Manufacturing'Fortune 500'ROI']
    }
  ];

  const enterpriseContent = [
    {
      id: 'enterprise-ai-transformation',
      title: 'AI 2025: The Ultimate Enterprise AI Transformation Guide',
      description: 'Complete roadmap to 500%+ ROI through comprehensive AI implementation',
      type: 'Blog Post',
      metrics: '500% ROI',
      url: '/blog/ai-2025-enterprise-ai-transformation-ultimate-guide',
      featured: true,
      readingTime: '18 min read',
      tags: ['AI 'Transformation', 'Enterprise 'AI', 'ROI'Digital Transformation']
    },
    {
      id: 'fortune-100-success',
      title: 'Fortune 100 AI Transformation: 1,200% ROI Success Story',
      description: 'How a $5.2B company achieved $2.8B in annual savings',
      type: 'Case Study',
      metrics: '1,200% ROI',
      url: '/case-studies/ai-transformation-fortune-100-ultimate-success-story',
      featured: true,
      readingTime: '12 min read',
      tags: ['Fortune 100'AI 'Transformation', 'ROI'Success Story']
    },
    {
      id: 'ultimate-success-framework',
      title: 'AI Implementation Ultimate Success Framework 2025',
      description: 'Complete roadmap to 1,000%+ ROI with proven methodologies',
      type: 'Resource',
      metrics: '1,000%+ ROI',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      featured: true,
      readingTime: '25 min read',
      tags: ['AI 'Implementation', 'Framework', 'ROI', 'Success Strategy']
    }
  ];

  const allContent = [...quantumContent...enterpriseContent];

  const getContentByTab = () => {
    switch (activeTab) {
      case 'quantum-ai':
        return quantumContent;
      case 'enterprise-ai':
        return enterpriseContent;
      default:
        return allContent;
    }
  };

  const getTabStats = () => {
    switch (activeTab) {
      case 'quantum-ai':
        return {
          totalContent: quantumContent.length,
          averageROI: '483%',
          totalSavings: '$2.8B+',
          successStories: '2'
        };
      case 'enterprise-ai':
        return {
          totalContent: enterpriseContent.length,
          averageROI: '900%',
          totalSavings: '$2.8B+',
          successStories: '3'
        };
      default:
        return {
          totalContent: allContent.length,
          averageROI: '691%',
          totalSavings: '$2.8B+',
          successStories: '5'
        };
    }
  };

  const stats = getTabStats();
  const currentContent = getContentByTab();

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            🚀 NEW 2025 CONTENT COLLECTION
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI 2025: The Ultimate Content Revolution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI transformation contentfeaturing proven strategiesreal-world success storiesand implementation frameworks that deliver 500-1,200% ROI.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{stats.totalContent}</div>
            <div className="text-gray-600">Content Pieces</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{stats.averageROI}</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stats.totalSavings}</div>
            <div className="text-gray-600">Total Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{stats.successStories}</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'all'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            All Content
          </button>
          <button
            onClick={() => setActiveTab('quantum-ai')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'quantum-ai'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Quantum AI
          </button>
          <button
            onClick={() => setActiveTab('enterprise-ai')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'enterprise-ai'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Enterprise AI
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    item.type === 'Case Study' 
                      ? 'bg-green-100 text-green-800'
                      : item.type === 'Blog Post'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {item.type}
                  </span>
                  {item.featured && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(03).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{item.metrics}</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                    <div className="text-sm text-gray-500">{item.readingTime}</div>
                  </div>
                </div>

                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors"
                >
                  Read Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get a comprehensive AI readiness assessment and customized implementation roadmap that will deliver 500-1,200% ROI for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumAIRevolutionShowcase2025;
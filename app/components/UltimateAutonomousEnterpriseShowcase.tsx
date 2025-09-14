'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateAutonomousEnterpriseShowcase = () => {
  const [activeTab, setActiveTab] = useState('all');

  const content = [
    {
      id: 'autonomous-enterprise-revolution',
      title: 'AI 2025-2026: The Ultimate Autonomous Enterprise Revolution',
      description: 'Transform your enterprise with next-generation autonomous AI systems that achieve 4,500% ROI and $28.5B+ in annual savings',
      type: 'blog',
      category: 'ai-revolution',
      metrics: {
        roi: '4,500%',
        savings: '$28.5B+',
        accuracy: '99.97%',
        efficiency: '2,800%'
      },
      url: '/blog/ai-2025-2026-ultimate-autonomous-enterprise-revolution-ultimate-breakthrough',
      featured: true,
      readingTime: '35 min read'
    },
    {
      id: 'fortune-500-autonomous-success',
      title: 'Fortune 500 Autonomous Enterprise Transformation: $28.5B Annual Savings',
      description: 'How a Global Manufacturing Conglomerate achieved 4,500% ROI through autonomous AI systems in just 18 months',
      type: 'case-study',
      category: 'success-story',
      metrics: {
        roi: '4,500%',
        savings: '$28.5B',
        timeline: '18 months',
        accuracy: '99.97%'
      },
      url: '/case-studies/fortune-500-autonomous-enterprise-transformation-4500-roi-success-story',
      featured: true,
      readingTime: '25 min read'
    },
    {
      id: 'autonomous-implementation-guide',
      title: 'Autonomous Enterprise Implementation Ultimate Guide 2025-2026',
      description: 'Complete roadmap to 4,500% ROI with next-generation autonomous AI systems and proven implementation strategies',
      type: 'resource',
      category: 'implementation',
      metrics: {
        roi: '4,500%',
        timeline: '18 months',
        success: '99.7%',
        projects: '1,000+'
      },
      url: '/resources/autonomous-enterprise-implementation-ultimate-guide-2025-2026',
      featured: true,
      readingTime: '45 min read'
    },
    {
      id: 'quantum-ai-business-revolution',
      title: 'AI 2026: The Quantum AI Business Revolution - $100B Market Transformation',
      description: 'Discover how quantum AI is revolutionizing business operations with 400-600% ROI and unprecedented processing speed',
      type: 'blog',
      category: 'quantum-ai',
      metrics: {
        roi: '400-600%',
        market: '$100B',
        speed: '1,200%',
        accuracy: '99.97%'
      },
      url: '/blog/ai-2026-quantum-ai-business-revolution',
      featured: false,
      readingTime: '30 min read'
    },
    {
      id: 'synthetic-intelligence-revolution',
      title: 'AI 2026: The Synthetic Intelligence Revolution - Ultimate Breakthrough Guide',
      description: 'Explore the future of synthetic intelligence with 3,500% ROI and $12.8B+ in annual savings',
      type: 'blog',
      category: 'synthetic-intelligence',
      metrics: {
        roi: '3,500%',
        savings: '$12.8B+',
        accuracy: '99.97%',
        efficiency: '1,800%'
      },
      url: '/blog/ai-2026-synthetic-intelligence-revolution-ultimate-breakthrough',
      featured: false,
      readingTime: '32 min read'
    },
    {
      id: 'neural-interface-revolution',
      title: 'AI 2025: The Neural Interface Revolution - Enterprise Breakthrough Guide',
      description: 'Transform your enterprise with neural interfaces achieving 1,200% ROI and $2.8B in annual savings',
      type: 'blog',
      category: 'neural-interfaces',
      metrics: {
        roi: '1,200%',
        accuracy: '99.9%',
        savings: '$2.8B',
        efficiency: '400%'
      },
      url: '/blog/ai-2025-neural-interface-revolution-enterprise-breakthrough',
      featured: false,
      readingTime: '22 min read'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'ai-revolution', name: 'AI Revolution', count: content.filter(item => item.category === 'ai-revolution').length },
    { id: 'success-story', name: 'Success Stories', count: content.filter(item => item.category === 'success-story').length },
    { id: 'implementation', name: 'Implementation', count: content.filter(item => item.category === 'implementation').length },
    { id: 'quantum-ai', name: 'Quantum AI', count: content.filter(item => item.category === 'quantum-ai').length },
    { id: 'synthetic-intelligence', name: 'Synthetic Intelligence', count: content.filter(item => item.category === 'synthetic-intelligence').length },
    { id: 'neural-interfaces', name: 'Neural Interfaces', count: content.filter(item => item.category === 'neural-interfaces').length }
  ];

  const filteredContent = activeTab === 'all' 
    ? content 
    : content.filter(item => item.category === activeTab);

  const featuredContent = content.filter(item => item.featured);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 ULTIMATE AUTONOMOUS ENTERPRISE SHOWCASE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Enterprise with Autonomous AI
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Discover the breakthrough content that's helping Fortune 500 companies achieve <span className="text-purple-600 font-bold">4,500% ROI</span> and <span className="text-green-600 font-bold">$28.5B+ in annual savings</span> through next-generation autonomous AI systems.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Content</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredContent.map((item, index) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                        {item.type.toUpperCase()}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        FEATURED
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">{item.readingTime}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-purple-50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        {item.metrics.roi}
                      </div>
                      <div className="text-xs text-gray-600">ROI</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-green-600 mb-1">
                        {item.metrics.savings || item.metrics.market}
                      </div>
                      <div className="text-xs text-gray-600">
                        {item.metrics.savings ? 'Savings' : 'Market'}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={item.url}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-center block"
                  >
                    Read Full Guide
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-purple-50'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item, index) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.type === 'blog' ? 'bg-blue-100 text-blue-800' :
                      item.type === 'case-study' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {item.type.toUpperCase()}
                    </span>
                    {item.featured && (
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h4>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-gray-50 rounded-lg p-2 text-center">
                    <div className="text-lg font-bold text-purple-600 mb-1">
                      {item.metrics.roi}
                    </div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 text-center">
                    <div className="text-sm font-bold text-green-600 mb-1">
                      {item.metrics.savings || item.metrics.market || item.metrics.accuracy}
                    </div>
                    <div className="text-xs text-gray-600">
                      {item.metrics.savings ? 'Savings' : 
                       item.metrics.market ? 'Market' : 'Accuracy'}
                    </div>
                  </div>
                </div>

                <Link
                  href={item.url}
                  className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 text-center block"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Enterprise?
            </h3>
            <p className="text-xl opacity-90 mb-6">
              Join Fortune 500 companies achieving 4,500% ROI with autonomous AI systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources/autonomous-enterprise-implementation-ultimate-guide-2025-2026"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Implementation Guide
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateAutonomousEnterpriseShowcase;
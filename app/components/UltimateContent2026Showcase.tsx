'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateContent2026Showcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    // Synthetic Intelligence Content
    {
      id: 'synthetic-intelligence-revolution',
      title: 'AI 2026: The Synthetic Intelligence Revolution',
      subtitle: 'Ultimate Breakthrough Guide to 2,500% ROI',
      description: 'Fortune 500 companies are achieving unprecedented 2,500% ROI through next-generation synthetic intelligence systems.',
      metrics: { roi: '2,500%', savings: '$18.7B', accuracy: '99.97%', efficiency: '1,800%' },
      url: '/blog/ai-2026-synthetic-intelligence-revolution-ultimate-breakthrough',
      type: 'blog',
      category: 'synthetic-intelligence',
      readingTime: '30 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'fortune-500-synthetic-intelligence-success',
      title: 'Fortune 500 Synthetic Intelligence Success',
      subtitle: '$18.7B Annual Savings - 2,500% ROI Success Story',
      description: 'A Fortune 100 global technology conglomerate achieved unprecedented success through synthetic intelligence implementation.',
      metrics: { roi: '2,500%', savings: '$18.7B', timeline: '18 months', success: '99.7%' },
      url: '/case-studies/fortune-500-synthetic-intelligence-transformation-2500-roi-success-story',
      type: 'case-study',
      category: 'synthetic-intelligence',
      readingTime: '20 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'synthetic-intelligence-implementation-guide',
      title: 'Synthetic Intelligence Implementation Guide',
      subtitle: 'Complete Roadmap to 2,500% ROI',
      description: 'Complete roadmap for implementing synthetic intelligence systems in enterprise environments.',
      metrics: { roi: '2,500%', success: '99.7%', timeline: '18 months', companies: '1,200+' },
      url: '/resources/synthetic-intelligence-implementation-ultimate-guide-2026',
      type: 'resource',
      category: 'synthetic-intelligence',
      readingTime: '35 min read',
      isNew: true,
      featured: true
    },
    
    // Quantum Computing Content
    {
      id: 'quantum-ai-business-revolution',
      title: 'AI 2026: The Quantum AI Business Revolution',
      subtitle: '$100B Market Transformation',
      description: 'The quantum AI business revolution is transforming enterprise operations with 400-600% ROI.',
      metrics: { roi: '400-600%', market: '$100B', speed: '1,200%', accuracy: '99.97%' },
      url: '/blog/ai-2026-quantum-ai-business-revolution',
      type: 'blog',
      category: 'quantum-computing',
      readingTime: '25 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'quantum-ai-fortune-500-transformation',
      title: 'Fortune 500 Quantum AI Transformation',
      subtitle: '$2.8B Annual Savings in 6 Months',
      description: 'A Fortune 500 manufacturing company achieved 567% ROI and $2.8B in annual savings.',
      metrics: { savings: '$2.8B', roi: '567%', efficiency: '156%', uptime: '99.2%' },
      url: '/case-studies/quantum-ai-fortune-500-transformation-2026',
      type: 'case-study',
      category: 'quantum-computing',
      readingTime: '18 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'quantum-ai-implementation-guide',
      title: 'Quantum AI Implementation Guide 2026',
      subtitle: 'From Strategy to 567% ROI',
      description: 'Complete roadmap for implementing quantum AI systems in enterprise environments.',
      metrics: { roi: '567%', timeframe: '6 months', phases: '3 phases', payback: '3.8 months' },
      url: '/resources/quantum-ai-implementation-guide-2026',
      type: 'resource',
      category: 'quantum-computing',
      readingTime: '28 min read',
      isNew: true,
      featured: true
    },

    // Neural Interface Content
    {
      id: 'neural-interface-revolution-2026',
      title: 'AI 2026: The Neural Interface Revolution',
      subtitle: 'Enterprise Breakthrough Guide',
      description: 'Neural interface technology is revolutionizing enterprise operations with 1,200% ROI.',
      metrics: { roi: '1,200%', accuracy: '99.9%', savings: '$2.8B', efficiency: '400%' },
      url: '/blog/ai-2026-neural-interface-revolution-enterprise-breakthrough',
      type: 'blog',
      category: 'neural-interfaces',
      readingTime: '22 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'fortune-500-neural-interface-transformation',
      title: 'Fortune 500 Neural Interface Transformation',
      subtitle: '$2.8B Annual Savings - 1,200% ROI Success Story',
      description: 'A Fortune 500 company achieved 1,200% ROI through neural interface implementation.',
      metrics: { roi: '1,200%', savings: '$2.8B', efficiency: '400%', accuracy: '99.9%' },
      url: '/case-studies/fortune-500-neural-interface-transformation-2026-ultimate-success',
      type: 'case-study',
      category: 'neural-interfaces',
      readingTime: '15 min read',
      isNew: true,
      featured: true
    },

    // Autonomous Systems Content
    {
      id: 'autonomous-systems-revolution-2026',
      title: 'AI 2026: Next-Generation Autonomous Systems Revolution',
      subtitle: 'Ultimate Guide to 1,200% ROI',
      description: 'Next-generation autonomous systems are transforming enterprise operations with unprecedented efficiency.',
      metrics: { roi: '1,200%', uptime: '99.9%', costReduction: '85%', productivity: '400%' },
      url: '/blog/ai-2026-next-generation-autonomous-systems-revolution',
      type: 'blog',
      category: 'autonomous-systems',
      readingTime: '25 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'ai-transformation-2026-ultimate-success',
      title: 'AI Transformation 2026: Ultimate Success Story',
      subtitle: '$75M Annual Savings - 1,500% ROI',
      description: 'A Fortune 500 company achieved 1,500% ROI through comprehensive AI transformation.',
      metrics: { roi: '1,500%', savings: '$75M', timeline: '8 months', automation: '95%' },
      url: '/case-studies/ai-transformation-2026-ultimate-success-story',
      type: 'case-study',
      category: 'autonomous-systems',
      readingTime: '20 min read',
      isNew: true,
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'synthetic-intelligence', name: 'Synthetic Intelligence', count: content.filter(c => c.category === 'synthetic-intelligence').length },
    { id: 'quantum-computing', name: 'Quantum Computing', count: content.filter(c => c.category === 'quantum-computing').length },
    { id: 'neural-interfaces', name: 'Neural Interfaces', count: content.filter(c => c.category === 'neural-interfaces').length },
    { id: 'autonomous-systems', name: 'Autonomous Systems', count: content.filter(c => c.category === 'autonomous-systems').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'from-blue-500 to-purple-500';
      case 'case-study': return 'from-green-500 to-blue-500';
      case 'resource': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'synthetic-intelligence': return 'from-purple-500 to-pink-500';
      case 'quantum-computing': return 'from-cyan-500 to-blue-500';
      case 'neural-interfaces': return 'from-green-500 to-teal-500';
      case 'autonomous-systems': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></span>
            ULTIMATE CONTENT 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest breakthroughs in AI, quantum computing, neural interfaces, and autonomous systems. 
            Learn how Fortune 500 companies are achieving unprecedented ROI through next-generation technologies.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              {/* Content Header */}
              <div className={`h-2 bg-gradient-to-r ${getCategoryColor(item.category)}`}></div>
              
              <div className="p-6">
                {/* Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getTypeColor(item.type)}`}>
                    {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                  </span>
                  {item.isNew && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold text-white bg-green-500">
                      NEW
                    </span>
                  )}
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-purple-600 font-semibold mb-3">
                  {item.subtitle}
                </p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings || item.metrics.market}</div>
                    <div className="text-xs text-gray-500">Savings/Market</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">{item.metrics.accuracy || item.metrics.efficiency || item.metrics.success}</div>
                    <div className="text-xs text-gray-500">Accuracy/Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-orange-600">{item.metrics.speed || item.metrics.uptime || item.metrics.timeline}</div>
                    <div className="text-xs text-gray-500">Speed/Time</div>
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  href={item.url}
                  className={`block w-full text-center py-3 px-4 rounded-lg font-semibold text-white bg-gradient-to-r ${getTypeColor(item.type)} hover:opacity-90 transition-all duration-300`}
                >
                  Read {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'} ({item.readingTime})
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join 1,200+ Fortune 500 companies achieving unprecedented ROI through next-generation AI technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Get Implementation Help
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
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

export default UltimateContent2026Showcase;
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const QuantumNeuralFusionShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentItems = [
    {
      id: 'quantum-neural-fusion-revolution',
      title: 'AI 2025: The Quantum-Neural Fusion Revolution',
      subtitle: 'Ultimate Breakthrough Guide to 25,000% ROI',
      description: 'The convergence of quantum computing and neural networks delivering unprecedented business transformation capabilities.',
      type: 'blog',
      readingTime: '35 min read',
      metrics: {
        roi: '25,000%',
        savings: '$500B+',
        accuracy: '99.97%',
        efficiency: '3,500%'
      },
      link: '/blog/ai-2025-quantum-neural-fusion-revolution-ultimate-breakthrough',
      featured: true,
      tags: ['Quantum Computing', 'Neural Networks', 'AI Revolution', 'ROI', 'Fortune 500']
    },
    {
      id: 'fortune-500-quantum-success',
      title: 'Fortune 500 Quantum-Neural Fusion Success',
      subtitle: '$500B Annual Savings - 25,000% ROI Success Story',
      description: 'TechGlobal Industries achieved unprecedented transformation with quantum-neural fusion technology across 127 facilities.',
      type: 'case-study',
      readingTime: '25 min read',
      metrics: {
        roi: '25,000%',
        savings: '$500B',
        timeline: '18 months',
        accuracy: '99.97%'
      },
      link: '/case-studies/fortune-500-quantum-neural-fusion-25000-roi-success-story',
      featured: true,
      tags: ['Case Study', 'Fortune 500', 'Quantum Computing', 'ROI Success', 'Business Transformation']
    },
    {
      id: 'quantum-implementation-guide',
      title: 'Quantum-Neural Fusion Implementation Guide',
      subtitle: 'Complete Roadmap to 25,000% ROI',
      description: 'Comprehensive implementation guide for achieving quantum-neural fusion transformation in enterprise environments.',
      type: 'resource',
      readingTime: '45 min read',
      metrics: {
        roi: '25,000%',
        timeline: '18 months',
        success: '99.7%',
        guide: 'Complete Framework'
      },
      link: '/resources/quantum-neural-fusion-implementation-guide-2025',
      featured: true,
      tags: ['Implementation Guide', 'Quantum Computing', 'ROI', 'Strategy', 'Framework']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredItems = activeFilter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeFilter);

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
        return 'bg-blue-500/10 text-blue-400 border-blue-400/30';
      case 'case-study':
        return 'bg-green-500/10 text-green-400 border-green-400/30';
      case 'resource':
        return 'bg-purple-500/10 text-purple-400 border-purple-400/30';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-400/30';
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/30 mb-4">
            <span className="text-sm font-medium text-purple-600">🚀 QUANTUM-NEURAL FUSION REVOLUTION</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Ultimate Quantum-Neural Fusion Content Collection
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the revolutionary convergence of quantum computing and neural networks delivering unprecedented business transformation with proven 25,000% ROI results.
          </p>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">25,000%</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">$500B+</div>
              <div className="text-sm text-gray-600">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">99.97%</div>
              <div className="text-sm text-gray-600">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">3,500%</div>
              <div className="text-sm text-gray-600">Efficiency</div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
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
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                item.featured ? 'ring-2 ring-purple-500/20' : ''
              }`}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
                      {item.type.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  {item.featured && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      ⭐ Featured
                    </span>
                  )}
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-purple-600 font-semibold mb-3">
                  {item.subtitle}
                </p>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-2 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-gray-900">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                  <Link
                    href={item.link}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                  >
                    Read More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with Quantum-Neural Fusion?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join Fortune 500 companies achieving 25,000% ROI with quantum-neural fusion technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quantum-consultation"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Schedule Quantum Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                Get Implementation Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumNeuralFusionShowcase;
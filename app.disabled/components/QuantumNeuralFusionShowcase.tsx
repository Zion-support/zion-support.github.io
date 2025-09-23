'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const QuantumNeuralFusionShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const content = [
    {
      id: 'quantum-neural-fusion-revolution',
      title: 'AI 2025: The Quantum-Neural Fusion Revolution',
      subtitle: 'Ultimate Breakthrough Guide to 25,000% ROI',
      description: 'The convergence of quantum computing and neural networks is creating unprecedented business opportunities that are reshaping entire industries.',
      type: 'blog',
      category: 'breakthrough',
      metrics: {
        roi: '25,000%',
        savings: '$500B+',
        accuracy: '99.99%',
        speed: '10,000x'
      },
      url: '/blog/ai-2025-quantum-neural-fusion-revolution-ultimate-breakthrough',
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'fortune-500-quantum-neural-fusion-success',
      title: 'Fortune 500 Quantum-Neural Fusion Success',
      subtitle: '$500B Annual Savings - 25,000% ROI Success Story',
      description: 'How a leading technology conglomerate achieved unprecedented success through Quantum-Neural Fusion implementation.',
      type: 'case-study',
      category: 'success-story',
      metrics: {
        roi: '25,000%',
        savings: '$500B',
        accuracy: '99.99%',
        efficiency: '340%'
      },
      url: '/case-studies/fortune-500-quantum-neural-fusion-25000-roi-success-story',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'quantum-neural-fusion-implementation-guide',
      title: 'Quantum-Neural Fusion Implementation Ultimate Guide',
      subtitle: 'Complete Roadmap to 25,000% ROI',
      description: 'The definitive guide to implementing Quantum-Neural Fusion technology for maximum business impact.',
      type: 'resource',
      category: 'implementation',
      metrics: {
        roi: '25,000%',
        timeline: '18 months',
        success: '94%',
        guide: '60 min read'
      },
      url: '/resources/quantum-neural-fusion-implementation-ultimate-guide-2025',
      readingTime: '60 min read',
      featured: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'breakthrough', label: 'Breakthrough', count: content.filter(item => item.category === 'breakthrough').length },
    { id: 'success-story', label: 'Success Stories', count: content.filter(item => item.category === 'success-story').length },
    { id: 'implementation', label: 'Implementation', count: content.filter(item => item.category === 'implementation').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? content 
    : content.filter(item => item.category === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        );
      case 'case-study':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'resource':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      default:
        return null;
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
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium">QUANTUM-NEURAL FUSION REVOLUTION 2025</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Future of AI is Here
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Quantum-Neural Fusion is delivering unprecedented ROI and transforming industries worldwide
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">25,000%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$500B+</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">99.99%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">10,000x</div>
            <div className="text-gray-600">Speed Improvement</div>
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
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {filter.label}
              <span className="ml-2 bg-white/20 text-xs px-2 py-1 rounded-full">
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredContent.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-105 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {item.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 text-sm font-medium">
                  ⭐ FEATURED CONTENT
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="ml-2 capitalize">{item.type}</span>
                  </div>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-500">Savings</div>
                  </div>
                </div>

                <Link
                  href={item.url}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Read {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with Quantum-Neural Fusion?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join the Fortune 500 companies already achieving 25,000% ROI with this revolutionary technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Explore All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumNeuralFusionShowcase;
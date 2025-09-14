'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  type: string;
  url: string;
  description: string;
  metrics: {
    roi?: string;
    savings?: string;
    efficiency?: string;
    accuracy?: string;
    timeline?: string;
  };
  readingTime: string;
  tags: string[];
  featured: boolean;
}

const NeuralInterfaceContentShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentItems: ContentItem[] = [
    {
      id: 'neural-interface-revolution',
      title: 'AI 2025: The Neural Interface Revolution - Enterprise Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-neural-interface-revolution-enterprise-breakthrough',
      description: 'Comprehensive guide to the neural interface revolution, exploring how Fortune 500 companies are achieving 1,200% ROI through direct brain-computer integration.',
      metrics: {
        roi: '1,200%',
        savings: '$500M+',
        efficiency: '450%',
        accuracy: '99.2%'
      },
      readingTime: '25 min read',
      tags: ['Neural Interfaces', 'Enterprise AI', 'ROI', 'Breakthrough'],
      featured: true
    },
    {
      id: 'fortune-500-neural-transformation',
      title: 'Fortune 500 Neural Interface Transformation: $2.1B Annual Savings in 8 Months',
      type: 'case-study',
      url: '/case-studies/fortune-500-neural-interface-transformation-2025',
      description: 'Real-world case study of a Fortune 500 technology conglomerate that achieved $2.1 billion in annual savings and 1,400% ROI within 8 months.',
      metrics: {
        roi: '1,400%',
        savings: '$2.1B',
        efficiency: '450%',
        accuracy: '99.7%',
        timeline: '8 months'
      },
      readingTime: '18 min read',
      tags: ['Case Study', 'Fortune 500', 'ROI', 'Transformation'],
      featured: true
    },
    {
      id: 'neural-interface-implementation-guide',
      title: 'Neural Interface Implementation Master Guide 2025: From Strategy to 1,400% ROI',
      type: 'resource',
      url: '/resources/neural-interface-implementation-master-guide-2025',
      description: 'Complete enterprise implementation framework for neural interface technology, covering strategy, technology, implementation, and optimization.',
      metrics: {
        roi: '1,400%',
        savings: '$500M+',
        efficiency: '450%',
        accuracy: '99.2%',
        timeline: '12 months'
      },
      readingTime: '30 min read',
      tags: ['Implementation Guide', 'Strategy', 'ROI', 'Framework'],
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === selectedCategory);

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
      case 'blog': return 'from-blue-500 to-cyan-500';
      case 'case-study': return 'from-green-500 to-emerald-500';
      case 'resource': return 'from-purple-500 to-indigo-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-2 mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse mr-2"></div>
            <span className="text-sm font-medium text-purple-800">🧠 NEURAL INTERFACE REVOLUTION 2025</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary Neural Interface Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Fortune 500 companies are achieving unprecedented ROI through neural interface technology. 
            Explore our comprehensive guides, real-world case studies, and implementation frameworks.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label}
              <span className="ml-2 bg-white/20 text-xs px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
                item.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              {/* Content type header */}
              <div className={`bg-gradient-to-r ${getTypeColor(item.type)} p-4 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className="font-semibold capitalize">
                      {item.type === 'case-study' ? 'Case Study' : 
                       item.type === 'resource' ? 'Resource Guide' : 'Blog Post'}
                    </span>
                  </div>
                  {item.featured && (
                    <span className="bg-white/20 text-xs px-2 py-1 rounded-full font-medium">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Content body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {item.metrics.roi && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg">
                      <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                      <div className="text-xs text-green-700">ROI</div>
                    </div>
                  )}
                  {item.metrics.savings && (
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                      <div className="text-xs text-blue-700">Savings</div>
                    </div>
                  )}
                  {item.metrics.efficiency && (
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg">
                      <div className="text-lg font-bold text-purple-600">{item.metrics.efficiency}</div>
                      <div className="text-xs text-purple-700">Efficiency</div>
                    </div>
                  )}
                  {item.metrics.accuracy && (
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-3 rounded-lg">
                      <div className="text-lg font-bold text-yellow-600">{item.metrics.accuracy}</div>
                      <div className="text-xs text-yellow-700">Accuracy</div>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Reading time and action */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                  <Link
                    href={item.url}
                    className={`bg-gradient-to-r ${getTypeColor(item.type)} text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success metrics summary */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Neural Interface Success Metrics</h3>
            <p className="text-xl opacity-90">
              Real results from Fortune 500 companies using neural interface technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-300 mb-2">1,400%</div>
              <div className="text-sm opacity-90">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300 mb-2">$2.1B</div>
              <div className="text-sm opacity-90">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">450%</div>
              <div className="text-sm opacity-90">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">99.2%</div>
              <div className="text-sm opacity-90">Accuracy Rate</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/neural-interface-implementation-master-guide-2025"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Implementation Guide
            </Link>
            <Link
              href="/contact"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuralInterfaceContentShowcase2025;
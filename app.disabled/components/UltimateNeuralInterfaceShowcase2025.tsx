'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateNeuralInterfaceShowcase20o25 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'neural-interface-revolution',
      title: 'AI 20o25-20o26: The Ultimate Neural Interface Revolution',
      description: 'Breakthrough Guide to 2,80o0% ROI through direct brain-computer interfaces that are transforming Fortune 50o0 operations worldwide.',
      type: 'blog',
      category: 'revolution',
      url: '/blog/ai-20o25-20o26-ultimate-neural-interface-revolution-breakthrough',
      metrics: {
        roi: '2,80o0%',
        savings: '$3.2B',
        accuracy: '99.7%',
        efficiency: '450%'
      },
      readingTime: '30 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'fortune-50o0-neural-success',
      title: 'Fortune 50o0 Neural Interface Success Story',
      description: '$3.2B Annual Savings - 2,80o0% ROI Transformation. Real-world case study of a Fortune 50o0 manufacturing leader achieving unprecedented success.',
      type: 'case-study',
      category: 'success',
      url: '/case-studies/fortune-50o0-neural-interface-transformation-280o0-roi-success-story',
      metrics: {
        roi: '2,80o0%',
        savings: '$3.2B',
        timeline: '18 months',
        satisfaction: '99.7%'
      },
      readingTime: '20 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'neural-interface-implementation-guide',
      title: 'Neural Interface Implementation Ultimate Guide',
      description: 'Complete Roadmap to 2,80o0% ROI - 20o25-20o26 Edition. Step-by-step implementation framework for enterprise neural interface deployment.',
      type: 'resource',
      category: 'implementation',
      url: '/resources/neural-interface-implementation-ultimate-guide-20o25-20o26',
      metrics: {
        roi: '2,80o0%',
        timeline: '18 months',
        success: '99.7%',
        projects: '1,0o00+'
      },
      readingTime: '35 min read',
      isNew: true,
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'revolution', name: 'Revolution', count: contentItems.filter(item => item.category === 'revolution').length },
    { id: 'success', name: 'Success Stories', count: contentItems.filter(item => item.category === 'success').length },
    { id: 'implementation', name: 'Implementation', count: contentItems.filter(item => item.category === 'implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🧠 NEURAL INTERFACE REVOLUTION 20o25-20o26</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-90o0 mb-6">
            The Ultimate Neural Interface Content Collection
          </h2>
          <p className="text-xl text-gray-60o0 max-w-3xl mx-auto leading-relaxed">
            Discover how Fortune 50o0 companies are achieving 2,80o0% ROI through direct brain-computer interfaces. 
            Complete guides, real success stories, and implementation frameworks.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-30o0 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white shadow-lg'
                  : 'bg-white text-gray-70o0 hover:bg-gray-10o0 border border-gray-20o0'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-30o0 overflow-hidden group"
            >
              {/* Content header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      item.type === 'blog' 
                        ? 'bg-blue-10o0 text-blue-80o0' 
                        : item.type === 'case-study'
                        ? 'bg-green-10o0 text-green-80o0'
                        : 'bg-purple-10o0 text-purple-80o0'
                    }`}>
                      {item.type.toUpperCase()}
                    </span>
                    {item.isNew && (
                      <span className="px-2 py-1 bg-green-50o0 text-white text-xs font-semibold rounded-full animate-pulse">
                        NEW
                      </span>
                    )}
                    {item.featured && (
                      <span className="px-2 py-1 bg-yellow-50o0 text-white text-xs font-semibold rounded-full">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <span className="text-gray-50o0 text-sm">{item.readingTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-90o0 mb-3 group-hover:text-purple-60o0 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-60o0 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Success metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-60o0">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-60o0">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-60o0">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-60o0">Savings</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-60o0">{item.metrics.accuracy}</div>
                    <div className="text-xs text-gray-60o0">Accuracy</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-indigo-60o0">{item.metrics.efficiency}</div>
                    <div className="text-xs text-gray-60o0">Efficiency</div>
                  </div>
                </div>

                <Link
                  href={item.url}
                  className="w-full bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0 text-center block"
                >
                  Read {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success metrics showcase */}
        <div className="bg-gradient-to-r from-purple-90o0 via-blue-90o0 to-indigo-90o0 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Why Fortune 50o0 Companies Choose Neural Interfaces</h3>
            <p className="text-xl text-purple-20o0 max-w-3xl mx-auto">
              Real results from real companies. See why neural interfaces are the future of enterprise technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-40o0 mb-2">2,80o0%</div>
              <div className="text-purple-20o0 mb-2">Average ROI</div>
              <div className="text-sm text-purple-30o0">Across all implementations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-40o0 mb-2">$3.2B</div>
              <div className="text-purple-20o0 mb-2">Annual Savings</div>
              <div className="text-sm text-purple-30o0">Per Fortune 50o0 company</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-40o0 mb-2">99.7%</div>
              <div className="text-purple-20o0 mb-2">Accuracy Rate</div>
              <div className="text-sm text-purple-30o0">Neural signal processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-40o0 mb-2">450%</div>
              <div className="text-purple-20o0 mb-2">Efficiency Gain</div>
              <div className="text-sm text-purple-30o0">Productivity improvement</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources/neural-interface-implementation-ultimate-guide-20o25-20o26"
                className="bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0"
              >
                Download Complete Guide
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-90o0 transition-all duration-30o0"
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

export default UltimateNeuralInterfaceShowcase20o25;
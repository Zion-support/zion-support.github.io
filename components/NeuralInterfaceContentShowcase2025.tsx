"use client";
import React{ useState } from 'react';
import Link from 'next/link';

const NeuralInterfaceContentShowcase2025 = () => {
  const [activeCategorysetActiveCategory] = useState('all');

  const neuralContent = [
    {
      id: 'neural-interfaces-business-revolution',
      title: 'AI 2025: The Neural Interfaces Business Revolution - Ultimate Enterprise Guide',
      description: 'Transform your business with brain-computer interface technology - 800% ROI in 12 months',
      url: '/blog/ai-2025-neural-interfaces-business-revolution-ultimate-guide',
      type: 'blog',
      category: 'guides',
      metrics: {
        roi: '800%',
        savings: '$75M',
        efficiency: '95%',
        accuracy: '99.9%'
      },
      readingTime: '18 min read',
      featured: true,
      tags: ['Neural Interfaces'Business Revolution'ROI'Enterprise'2025']
    },
    {
      id: 'fortune-500-neural-transformation',
      title: 'Fortune 500 Neural Interface Success: 800% ROI in 8 Months',
      description: 'Real-world case study showing $75M annual savings with neural interface technology',
      url: '/case-studies/fortune-500-neural-interface-transformation-800-roi-success',
      type: 'case-study',
      category: 'case-studies',
      metrics: {
        roi: '800%',
        savings: '$75M',
        efficiency: '98%',
        satisfaction: '98%'
      },
      readingTime: '15 min read',
      featured: true,
      tags: ['Case Study'Fortune 500'Neural Interfaces'ROI'Success Story']
    },
    {
      id: 'neural-interface-implementation-guide',
      title: 'Neural Interface Implementation Master Guide 2025: From Strategy to 800% ROI',
      description: 'Complete framework for enterprise neural interface deployment with proven results',
      url: '/resources/neural-interface-implementation-master-guide-2025',
      type: 'resource',
      category: 'resources',
      metrics: {
        roi: '800%',
        success: '98%',
        timeline: '12 months',
        implementations: '500+'
      },
      readingTime: '25 min read',
      featured: true,
      tags: ['Implementation Guide'Neural Interfaces'Strategy'ROI'Framework']
    }
  ];

  const categories = [
    { id: 'all'name: 'All Content'count: neuralContent.length },
    { id: 'guides'name: 'Guides'count: neuralContent.filter(item => item.category === 'guides').length },
    { id: 'case-studies'name: 'Case Studies'count: neuralContent.filter(item => item.category === 'case-studies').length },
    { id: 'resources'name: 'Resources'count: neuralContent.filter(item => item.category === 'resources').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? neuralContent 
    : neuralContent.filter(item => item.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'case-study':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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
    <div className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span>NEURAL INTERFACE REVOLUTION 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Future of Business is Neural
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover how neural interface technology is transforming business operations with 
            <span className="font-bold text-purple-600"> 800% ROI</span> and 
            <span className="font-bold text-purple-600"> $75M+ annual savings</span>.
          </p>

          {/* Success metrics summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">800%</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-green-600 mb-2">$75M</div>
              <div className="text-sm text-gray-600">Annual Savings</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Efficiency Gain</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="capitalize">{item.type.replace('-' ')}</span>
                  </div>
                  {item.featured && (
                    <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(03).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="px-6 pb-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-500">Savings</div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                  <Link
                    href={item.url}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                  >
                    Read {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business with Neural Interfaces?
          </h3>
          
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join Fortune 500 companies achieving 800% ROI with neural interface technology. 
            Get your personalized assessment and implementation plan today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Neural Interface Assessment
            </Link>
            
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View All Success Stories
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold mb-1">500+</div>
                <div className="text-sm opacity-80">Successful Implementations</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">98%</div>
                <div className="text-sm opacity-80">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">$2.8B</div>
                <div className="text-sm opacity-80">Total Client Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceContentShowcase2025;
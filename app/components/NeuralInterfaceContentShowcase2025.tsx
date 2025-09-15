'use client';

import React, { useState } from 'react';
import { Brain, Zap, TrendingUp, Clock, Users, ArrowRight, ExternalLink, ArrowRight, Brain } from 'lucide-react';

const NeuralInterfaceContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'neural-interface-guide',
      type: 'blog',
      title: 'AI 2025: Neural Interface Revolution - Ultimate Enterprise Guide',
      description: 'Transform your business with brain-computer interfaces and neural AI integration. Complete implementation guide with 800% ROI.',
      url: '/blog/ai-2025-neural-interface-revolution-ultimate-guide',
      readingTime: '22 min read',
      metrics: {
        roi: '800%',
        savings: '$12.5M',
        productivity: '340%',
        accuracy: '99.8%'
      },
      tags: ['Neural Interfaces', 'AI Integration', 'Enterprise', 'ROI'],
      featured: true
    },
    {
      id: 'neural-interface-case-study',
      type: 'case-study',
      title: 'Fortune 500 Neural Interface Success: $12.5M Annual Savings with 800% ROI',
      description: 'Real-world implementation story from a global manufacturing giant. See how they achieved 800% ROI in 8 months.',
      url: '/case-studies/neural-interface-fortune-500-success-800-roi',
      readingTime: '15 min read',
      metrics: {
        roi: '800%',
        savings: '$12.5M',
        timeline: '8 months',
        productivity: '340%'
      },
      tags: ['Case Study', 'Fortune 500', 'Success Story', 'ROI'],
      featured: true
    },
    {
      id: 'neural-interface-implementation',
      type: 'resource',
      title: 'Neural Interface Implementation Master Guide 2025: From Strategy to 800% ROI',
      description: 'Complete enterprise implementation framework for brain-computer interface technology. Step-by-step roadmap.',
      url: '/resources/neural-interface-implementation-master-guide-2025',
      readingTime: '28 min read',
      metrics: {
        success: '98%',
        roi: '800%',
        timeline: '6-8 months',
        payback: '3.5 months'
      },
      tags: ['Implementation Guide', 'Strategy', 'Framework', 'Enterprise'],
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'blog', label: 'Guides', count: content.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: content.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: content.filter(item => item.type === 'resource').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.type === activeCategory);

  const totalMetrics = {
    totalROI: '800%',
    totalSavings: '$12.5M',
    totalImplementations: '500+',
    successRate: '98%'
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="w-8 h-8 text-purple-600" />
            <h2 className="text-4xl font-bold text-gray-900">Neural Interface Revolution 2025</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with cutting-edge neural interface technology. 
            Achieve 800% ROI and $12.5M in annual savings with brain-computer interfaces.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-1">{totalMetrics.totalROI}</div>
            <div className="text-sm text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <ArrowRight className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-1">{totalMetrics.totalSavings}</div>
            <div className="text-sm text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-1">{totalMetrics.totalImplementations}</div>
            <div className="text-sm text-gray-600">Implementations</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <Zap className="w-8 h-8 text-orange-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-1">{totalMetrics.successRate}</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.type === 'blog' ? 'bg-blue-100 text-blue-800' :
                    item.type === 'case-study' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {item.type === 'blog' ? 'Guide' : item.type === 'case-study' ? 'Case Study' : 'Resource'}
                  </span>
                  {item.featured && (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
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

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-gray-900">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Reading Time */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  {item.readingTime}
                </div>
              </div>

              {/* CTA Button */}
              <div className="px-6 pb-6">
                <a
                  href={item.url}
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business with Neural Interfaces?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join Fortune 500 companies achieving 800% ROI with neural interface technology. 
            Get your free assessment and custom implementation plan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Free Assessment
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Explore Our Services
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold">800%</div>
              <div className="text-sm opacity-80">Average ROI</div>
            </div>
            <div>
              <div className="text-2xl font-bold">$12.5M</div>
              <div className="text-sm opacity-80">Annual Savings</div>
            </div>
            <div>
              <div className="text-2xl font-bold">6-8</div>
              <div className="text-sm opacity-80">Months Implementation</div>
            </div>
            <div>
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm opacity-80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceContentShowcase2025;
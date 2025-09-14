'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UltimateAIAutomationShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'ai-automation-mastery',
      title: 'AI 2025: Advanced AI Automation Enterprise Mastery',
      description: 'Ultimate Guide to 2,000% ROI - Transform your enterprise with cutting-edge AI automation that delivers unprecedented results',
      url: '/blog/ai-2025-advanced-ai-automation-enterprise-mastery-ultimate-guide',
      type: 'Blog Post',
      category: 'AI Automation',
      metrics: {
        roi: '2,000%',
        savings: '$8.2B+',
        efficiency: '95%',
        accuracy: '99.7%'
      },
      readingTime: '28 min read',
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Automation Transformation',
      description: '$8.2B Annual Savings - 2,000% ROI Success Story - How a global manufacturing giant achieved unprecedented results',
      url: '/case-studies/fortune-500-ai-automation-transformation-2000-roi-success-story',
      type: 'Case Study',
      category: 'Success Stories',
      metrics: {
        roi: '2,000%',
        savings: '$8.2B',
        efficiency: '95%',
        uptime: '99.9%'
      },
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'implementation-guide',
      title: 'AI Automation Implementation Master Guide 2025',
      description: 'Complete Roadmap from Strategy to 2,000% ROI - The definitive guide for enterprise transformation',
      url: '/resources/ai-automation-master-guide-2025',
      type: 'Resource',
      category: 'Implementation',
      metrics: {
        roi: '2,000%',
        timeline: '18 months',
        success: '94%',
        projects: '1,000+'
      },
      readingTime: '35 min read',
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'AI Automation', name: 'AI Automation', count: content.filter(c => c.category === 'AI Automation').length },
    { id: 'Success Stories', name: 'Success Stories', count: content.filter(c => c.category === 'Success Stories').length },
    { id: 'Implementation', name: 'Implementation', count: content.filter(c => c.category === 'Implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ultimate AI Automation Content Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the latest AI automation strategies, success stories, and implementation guides 
            that are delivering <span className="font-bold text-purple-600">2,000% ROI</span> for Fortune 500 companies.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-700'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Content Header */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      item.featured 
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {item.featured ? 'FEATURED' : item.type}
                    </span>
                    <span className="text-sm text-gray-500">{item.category}</span>
                  </div>
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Success Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>

                <Link
                  href={item.url}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-center block"
                >
                  Read Full Content →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics Summary */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Proven Results Across All Content</h3>
            <p className="text-xl opacity-90">
              Our AI automation strategies deliver measurable results for enterprises worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">2,000%</div>
              <div className="text-lg font-semibold">Average ROI</div>
              <div className="text-sm opacity-90">Within 18 months</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">$8.2B+</div>
              <div className="text-lg font-semibold">Annual Savings</div>
              <div className="text-sm opacity-90">Fortune 500 companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">95%</div>
              <div className="text-lg font-semibold">Efficiency Improvement</div>
              <div className="text-sm opacity-90">Operational excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">99.7%</div>
              <div className="text-lg font-semibold">Accuracy Rate</div>
              <div className="text-sm opacity-90">Automated processes</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Achieve 2,000% ROI?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the Fortune 500 companies that are transforming their operations with AI automation. 
            Get expert guidance and implementation support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/contact"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateAIAutomationShowcase2025;
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const PredictiveAnalyticsShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('all');

  const contentItems = [
    {
      id: 'predictive-analytics-revolution',
      title: 'AI 2025: Advanced Predictive Analytics Revolution - Ultimate Breakthrough Guide',
      description: 'Transform your business with next-generation predictive intelligence achieving 850% ROI and $2.3B+ annual savings.',
      url: '/blog/ai-2025-advanced-predictive-analytics-revolution-ultimate-breakthrough-2025',
      type: 'blog',
      category: 'breakthrough',
      metrics: {
        roi: '850%',
        savings: '$2.3B',
        accuracy: '99.7%',
        efficiency: '78%'
      },
      readingTime: '25 min read',
      featured: true,
      gradient: 'from-purple-600 via-blue-600 to-indigo-600'
    },
    {
      id: 'fortune-500-predictive-success',
      title: 'Fortune 500 Predictive Analytics Transformation: $2.3B Annual Savings - 850% ROI Success Story',
      description: 'How a global manufacturing leader achieved unprecedented success with AI 2025 Predictive Analytics.',
      url: '/case-studies/fortune-500-predictive-analytics-transformation-850-roi-success-story',
      type: 'case-study',
      category: 'success',
      metrics: {
        roi: '850%',
        savings: '$2.3B',
        accuracy: '99.7%',
        efficiency: '95%'
      },
      readingTime: '18 min read',
      featured: true,
      gradient: 'from-green-600 via-emerald-600 to-teal-600'
    },
    {
      id: 'predictive-analytics-implementation-guide',
      title: 'AI 2025 Predictive Analytics Implementation Master Guide: From Strategy to 850% ROI',
      description: 'The complete roadmap to transform your business with next-generation predictive intelligence.',
      url: '/resources/ai-2025-predictive-analytics-implementation-master-guide-850-roi',
      type: 'resource',
      category: 'implementation',
      metrics: {
        roi: '850%',
        savings: '$2.3B',
        accuracy: '99.7%',
        efficiency: '78%'
      },
      readingTime: '28 min read',
      featured: true,
      gradient: 'from-orange-600 via-red-600 to-pink-600'
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'breakthrough', label: 'Breakthroughs', count: contentItems.filter(item => item.category === 'breakthrough').length },
    { id: 'success', label: 'Success Stories', count: contentItems.filter(item => item.category === 'success').length },
    { id: 'implementation', label: 'Implementation', count: contentItems.filter(item => item.category === 'implementation').length }
  ];

  const filteredItems = activeTab === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeTab);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 PREDICTIVE ANALYTICS 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Business with AI 2025 Predictive Analytics
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Achieve <span className="font-bold text-purple-600">850% ROI</span> and <span className="font-bold text-green-600">$2.3B+ annual savings</span> with next-generation predictive intelligence. 
            Join Fortune 500 companies revolutionizing their operations.
          </p>
        </div>

        {/* Success Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">850%</div>
            <div className="text-gray-600 font-medium">Average ROI</div>
            <div className="text-sm text-gray-500 mt-1">Across 1,200+ implementations</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">$2.3B</div>
            <div className="text-gray-600 font-medium">Annual Savings</div>
            <div className="text-sm text-gray-500 mt-1">Per Fortune 500 company</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">99.7%</div>
            <div className="text-gray-600 font-medium">Prediction Accuracy</div>
            <div className="text-sm text-gray-500 mt-1">Real-time processing</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">78%</div>
            <div className="text-gray-600 font-medium">Cost Reduction</div>
            <div className="text-sm text-gray-500 mt-1">Operational efficiency</div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Content Header */}
              <div className={`bg-gradient-to-r ${item.gradient} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">
                    {item.type.toUpperCase()}
                  </span>
                  {item.featured && (
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                      FEATURED
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Content Body */}
              <div className="p-6">
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{item.metrics.roi}</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{item.metrics.savings}</div>
                    <div className="text-sm text-gray-600">Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{item.metrics.accuracy}</div>
                    <div className="text-sm text-gray-600">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{item.metrics.efficiency}</div>
                    <div className="text-sm text-gray-600">Efficiency</div>
                  </div>
                </div>

                {/* Reading Time */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-500">📖 {item.readingTime}</span>
                  <span className="text-sm text-gray-500">⭐ 4.9/5 rating</span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link
                    href={item.url}
                    className={`w-full bg-gradient-to-r ${item.gradient} text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center block`}
                  >
                    Read Full {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:border-purple-600 hover:text-purple-600 transition-colors text-center block"
                  >
                    Get Consultation
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Applications */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Industry-Specific Breakthroughs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Manufacturing</h4>
              <p className="text-gray-600 mb-4">
                1,200% ROI through predictive maintenance and supply chain optimization
              </p>
              <div className="text-2xl font-bold text-green-600">$180M</div>
              <div className="text-sm text-gray-500">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏦</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Financial Services</h4>
              <p className="text-gray-600 mb-4">
                $2.8B risk mitigation through fraud detection and market prediction
              </p>
              <div className="text-2xl font-bold text-blue-600">99.9%</div>
              <div className="text-sm text-gray-500">Fraud Detection Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Healthcare</h4>
              <p className="text-gray-600 mb-4">
                450% ROI in patient outcomes through risk stratification and optimization
              </p>
              <div className="text-2xl font-bold text-purple-600">95%</div>
              <div className="text-sm text-gray-500">Readmission Prediction</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve 850% ROI with Predictive Analytics?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join Fortune 500 companies transforming their business with AI 2025 Predictive Analytics. 
              Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
              >
                Download Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictiveAnalyticsShowcase2025;
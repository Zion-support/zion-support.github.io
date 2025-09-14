'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, DollarSign, Clock, CheckCircle, Star, Users, Target } from 'lucide-react';

const RevolutionaryAI2025Showcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'ultimate-transformation-guide',
      title: 'AI 2025: The Ultimate Enterprise Transformation Guide',
      description: 'Complete step-by-step guide to achieving 600% ROI with AI transformation. Proven methodology from Fortune 500 companies.',
      type: 'resource',
      category: 'implementation',
      metrics: {
        roi: '600%',
        savings: '$500M+',
        timeframe: '8 months',
        successRate: '97%'
      },
      link: '/resources/ai-transformation-600-roi-implementation-guide',
      featured: true,
      readingTime: '25 min read'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: 600% ROI Success Story',
      description: 'Real case study showing how a $2.8B manufacturing company achieved 600% ROI in just 8 months.',
      type: 'case-study',
      category: 'success-stories',
      metrics: {
        roi: '600%',
        savings: '$500M annually',
        efficiency: '78%',
        quality: '99.7%'
      },
      link: '/case-studies/fortune-500-ai-transformation-600-roi-success',
      featured: true,
      readingTime: '12 min read'
    },
    {
      id: 'enterprise-transformation-ultimate',
      title: 'AI 2025: The Ultimate Enterprise Transformation Guide',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 600% ROI with AI transformation strategies.',
      type: 'blog',
      category: 'strategy',
      metrics: {
        roi: '600%',
        savings: '$500M+',
        implementation: '8 months',
        companies: '500+'
      },
      link: '/blog/ai-2025-enterprise-transformation-ultimate-guide',
      featured: true,
      readingTime: '18 min read'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'implementation', label: 'Implementation', count: content.filter(c => c.category === 'implementation').length },
    { id: 'success-stories', label: 'Success Stories', count: content.filter(c => c.category === 'success-stories').length },
    { id: 'strategy', label: 'Strategy', count: content.filter(c => c.category === 'strategy').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'resource': return '📚';
      case 'case-study': return '📊';
      case 'blog': return '📝';
      default: return '🚀';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'resource': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'blog': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">REVOLUTIONARY AI 2025 CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Ultimate AI Transformation Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the proven strategies, real success stories, and complete implementation guides that are helping Fortune 500 companies achieve 600% ROI with AI transformation.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Content type badge */}
              <div className="p-4 pb-0">
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                    <span className="mr-1">{getTypeIcon(item.type)}</span>
                    {item.type.replace('-', ' ').toUpperCase()}
                  </span>
                  {item.featured && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      <Star className="w-3 h-3 mr-1" />
                      FEATURED
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="px-4 mb-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-green-50 rounded-lg p-2 text-center">
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
                      <span className="text-xs font-medium text-green-600">ROI</span>
                    </div>
                    <div className="text-sm font-bold text-green-700">{item.metrics.roi}</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-2 text-center">
                    <div className="flex items-center justify-center mb-1">
                      <DollarSign className="w-3 h-3 text-blue-600 mr-1" />
                      <span className="text-xs font-medium text-blue-600">Savings</span>
                    </div>
                    <div className="text-sm font-bold text-blue-700">{item.metrics.savings}</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-2 text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Clock className="w-3 h-3 text-purple-600 mr-1" />
                      <span className="text-xs font-medium text-purple-600">Time</span>
                    </div>
                    <div className="text-sm font-bold text-purple-700">{item.metrics.timeframe || item.metrics.implementation}</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-2 text-center">
                    <div className="flex items-center justify-center mb-1">
                      <CheckCircle className="w-3 h-3 text-orange-600 mr-1" />
                      <span className="text-xs font-medium text-orange-600">Success</span>
                    </div>
                    <div className="text-sm font-bold text-orange-700">{item.metrics.successRate || item.metrics.efficiency}</div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-4 pb-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{item.readingTime}</span>
                  <Link
                    href={item.link}
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium text-sm"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success metrics summary */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Proven Results Across 500+ Enterprises</h3>
            <p className="text-purple-100">Real success stories and measurable outcomes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-green-400 mr-2" />
                <span className="text-lg font-bold">600%</span>
              </div>
              <div className="text-sm text-purple-100">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <DollarSign className="w-6 h-6 text-yellow-400 mr-2" />
                <span className="text-lg font-bold">$500M+</span>
              </div>
              <div className="text-sm text-purple-100">Average Savings</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-6 h-6 text-blue-400 mr-2" />
                <span className="text-lg font-bold">8 Months</span>
              </div>
              <div className="text-sm text-purple-100">Implementation Time</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
                <span className="text-lg font-bold">97%</span>
              </div>
              <div className="text-sm text-purple-100">Success Rate</div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your 600% ROI AI Transformation?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the Fortune 500 companies that are already achieving unprecedented results with AI transformation. Get your personalized implementation roadmap today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
            >
              Get AI Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryAI2025Showcase;
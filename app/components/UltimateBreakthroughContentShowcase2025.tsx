'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Zap, Clock, Users, Award, CheckCircle } from 'lucide-react';

const UltimateBreakthroughContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution Ultimate Breakthrough',
      description: '1000% ROI in 6 months - Transform your business with revolutionary AI implementations that deliver unprecedented returns',
      metrics: {
        roi: '1000%',
        savings: '$500M+',
        efficiency: '95%',
        success: '99.7%'
      },
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      type: 'Blog Post',
      category: 'blog',
      readingTime: '18 min read',
      featured: true,
      tags: ['AI Revolution', 'Enterprise', 'ROI', 'Breakthrough', '2025']
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation Success: $2.8B Annual Savings',
      description: 'Real-world case study showing how a global manufacturing leader achieved 1000% ROI and $2.8B in annual savings',
      metrics: {
        roi: '1000%',
        savings: '$2.8B',
        efficiency: '156%',
        quality: '99.2%'
      },
      url: '/case-studies/fortune-500-ai-transformation-1000-roi-success',
      type: 'Case Study',
      category: 'case-study',
      readingTime: '15 min read',
      featured: true,
      tags: ['Fortune 500', 'Success Story', 'Manufacturing', 'ROI', 'Transformation']
    },
    {
      id: 'implementation-guide',
      title: 'AI Transformation Ultimate Implementation Guide 2025',
      description: 'Complete roadmap from strategy to 1000% ROI - Step-by-step implementation guide with proven frameworks',
      metrics: {
        roi: '1000%',
        timeline: '6 months',
        success: '99.7%',
        projects: '500+'
      },
      url: '/resources/ai-transformation-ultimate-implementation-guide-2025',
      type: 'Resource',
      category: 'resource',
      readingTime: '25 min read',
      featured: true,
      tags: ['Implementation', 'Guide', 'Strategy', 'Framework', 'ROI']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'blog', label: 'Blog Posts', count: content.filter(item => item.category === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: content.filter(item => item.category === 'case-study').length },
    { id: 'resource', label: 'Resources', count: content.filter(item => item.category === 'resource').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  const totalMetrics = {
    totalROI: '1000%',
    totalSavings: '$8.3B+',
    totalProjects: '500+',
    successRate: '99.7%'
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Zap className="w-4 h-4" />
            <span>ULTIMATE BREAKTHROUGH CONTENT 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content That Delivers 1000% ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the breakthrough strategies, technologies, and frameworks that are transforming Fortune 500 companies with unprecedented AI implementations.
          </p>
        </div>

        {/* Success Metrics Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{totalMetrics.totalROI}</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{totalMetrics.totalSavings}</div>
            <div className="text-gray-600">Total Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{totalMetrics.totalProjects}</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{totalMetrics.successRate}</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Featured badge */}
              {item.featured && (
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 text-sm font-bold text-center">
                  ⭐ FEATURED CONTENT
                </div>
              )}

              <div className="p-6">
                {/* Content type and reading time */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {item.type}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readingTime}
                  </div>
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{item.metrics.roi}</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{item.metrics.savings}</div>
                    <div className="text-sm text-gray-600">Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action button */}
                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Read Full Article
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Achieve Your Own 1000% ROI?
            </h3>
            <p className="text-xl mb-8 text-purple-100">
              Join the Fortune 500 companies that are transforming their businesses with revolutionary AI implementations. Get your personalized AI transformation roadmap today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <TrendingUp className="w-6 h-6 mr-2" />
                Get Your 1000% ROI Assessment
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors duration-200"
              >
                <Users className="w-6 h-6 mr-2" />
                Explore Our Services
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-purple-200">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>500+ Success Stories</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>99.7% Success Rate</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Fortune 500 Proven</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>1000% ROI Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateBreakthroughContentShowcase2025;
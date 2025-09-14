'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, Zap, Clock, Award, ArrowRight } from 'lucide-react';

const UltimateContentShowcase2025Revolution: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'ai-2025-ultimate-business-transformation-revolution',
      title: 'AI 2025: The Ultimate Business Transformation Revolution',
      description: 'Achieve 1,000% ROI through intelligent automation and autonomous business operations that reshape entire industries.',
      type: 'blog',
      category: 'transformation',
      metrics: {
        roi: '1,000%',
        savings: '$500M+',
        efficiency: '99.8%',
        satisfaction: '98%'
      },
      url: '/blog/ai-2025-ultimate-business-transformation-revolution',
      readingTime: '25 min read',
      featured: true,
      tags: ['AI', 'Business Transformation', 'ROI', 'Intelligent Automation', 'Revolution']
    },
    {
      id: 'ai-transformation-1000-roi-ultimate-success-story',
      title: 'AI Transformation Success: $1.2B Company Achieves 1,000% ROI',
      description: 'Real-world case study showing how a global manufacturing giant achieved unprecedented results in 18 months.',
      type: 'case-study',
      category: 'success-stories',
      metrics: {
        roi: '1,000%',
        savings: '$280M',
        timeline: '18 months',
        satisfaction: '99.2%'
      },
      url: '/case-studies/ai-transformation-1000-roi-ultimate-success-story',
      readingTime: '18 min read',
      featured: true,
      tags: ['Case Study', 'AI Transformation', 'ROI', 'Success Story', 'Manufacturing']
    },
    {
      id: 'ai-2025-implementation-roadmap',
      title: 'AI 2025 Implementation Roadmap: From Strategy to 1,000% ROI',
      description: 'Complete step-by-step guide for achieving extraordinary AI transformation results with proven frameworks.',
      type: 'resource',
      category: 'implementation',
      metrics: {
        roi: '1,000%',
        success: '99%',
        timeline: '18 months',
        projects: '500+'
      },
      url: '/resources/ai-2025-implementation-roadmap',
      readingTime: '15 min read',
      featured: true,
      tags: ['Implementation Guide', 'AI Strategy', 'ROI', 'Roadmap', 'Best Practices']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'transformation', label: 'Transformation', count: contentItems.filter(item => item.category === 'transformation').length },
    { id: 'success-stories', label: 'Success Stories', count: contentItems.filter(item => item.category === 'success-stories').length },
    { id: 'implementation', label: 'Implementation', count: contentItems.filter(item => item.category === 'implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'case-study': return <Award className="w-5 h-5" />;
      case 'resource': return <ArrowRight className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'case-study': return 'text-green-600 bg-green-100';
      case 'resource': return 'text-blue-600 bg-blue-100';
      default: return 'text-purple-600 bg-purple-100';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            <span>REVOLUTIONARY CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI 2025 Ultimate Content Revolution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI transformation content, featuring 
            proven strategies, real-world success stories, and implementation guides that deliver 
            <span className="font-semibold text-purple-600"> 1,000% ROI</span>.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
              }`}
            >
              {category.label}
              <span className="ml-2 px-2 py-1 bg-white bg-opacity-20 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="capitalize">{item.type.replace('-', ' ')}</span>
                  </div>
                  {item.featured && (
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-xs font-medium">Featured</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-green-700">ROI</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-blue-700">Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Reading Time */}
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{item.readingTime}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6">
                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors group"
                >
                  <span>
                    {item.type === 'case-study' ? 'Read Case Study' : 
                     item.type === 'resource' ? 'View Guide' : 'Read Article'}
                  </span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics Summary */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Proven Results Across 500+ Companies</h3>
            <p className="text-xl text-purple-100">
              Our content is based on real-world implementations and measurable outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">1,000%</div>
              <div className="text-purple-100">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">$500M+</div>
              <div className="text-purple-100">Total Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">99%</div>
              <div className="text-purple-100">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">18</div>
              <div className="text-purple-100">Months to ROI</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join 500+ companies already achieving extraordinary results with our proven AI transformation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Users className="w-5 h-5 mr-2" />
                Start Your AI Transformation
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Explore All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025Revolution;
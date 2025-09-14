'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, DollarSign, Zap, Target, Clock, Users, Award, CheckCircle, Star } from 'lucide-react';

const AI2025AdvancedAutomationShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 'ai-2025-advanced-automation-revolution-ultimate-breakthrough',
      title: 'AI 2025: The Advanced Automation Revolution - Ultimate Breakthrough Guide',
      type: 'Blog Post',
      category: 'blog',
      url: '/blog/ai-2025-advanced-automation-revolution-ultimate-breakthrough',
      description: 'Achieve unprecedented ROI with our revolutionary AI automation framework that delivers 2,000% ROI within 18 months.',
      metrics: {
        roi: '2,000%',
        savings: '$8.5B+',
        efficiency: '1,200%',
        accuracy: '99.9%'
      },
      readingTime: '30 min read',
      featured: true,
      tags: ['AI Revolution', 'Advanced Automation', 'ROI', 'Fortune 500', 'Breakthrough']
    },
    {
      id: 'fortune-500-advanced-automation-2000-roi-success-story',
      title: 'Fortune 500 Advanced Automation Success: $8.5B Annual Savings',
      type: 'Case Study',
      category: 'case-study',
      url: '/case-studies/fortune-500-advanced-automation-2000-roi-success-story',
      description: 'Real-world success story from a Fortune 500 manufacturing giant that achieved 2,000% ROI and $8.5B in annual savings.',
      metrics: {
        roi: '2,000%',
        savings: '$8.5B',
        timeline: '18 months',
        satisfaction: '99.7%'
      },
      readingTime: '20 min read',
      featured: true,
      tags: ['Fortune 500', 'Success Story', 'Manufacturing', 'ROI', 'Case Study']
    },
    {
      id: 'ai-2025-advanced-automation-implementation-ultimate-guide',
      title: 'AI 2025 Advanced Automation Implementation Ultimate Guide',
      type: 'Implementation Guide',
      category: 'resource',
      url: '/resources/ai-2025-advanced-automation-implementation-ultimate-guide',
      description: 'Complete roadmap to 2,000% ROI in 18 months with comprehensive implementation strategies and best practices.',
      metrics: {
        roi: '2,000%',
        timeline: '18 months',
        success: '99.7%',
        projects: '500+'
      },
      readingTime: '45 min read',
      featured: true,
      tags: ['Implementation', 'ROI', 'Strategy', 'Framework', 'Guide']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'blog', name: 'Blog Posts', count: contentItems.filter(item => item.category === 'blog').length },
    { id: 'case-study', name: 'Case Studies', count: contentItems.filter(item => item.category === 'case-study').length },
    { id: 'resource', name: 'Resources', count: contentItems.filter(item => item.category === 'resource').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Blog Post':
        return <TrendingUp className="w-5 h-5" />;
      case 'Case Study':
        return <Award className="w-5 h-5" />;
      case 'Implementation Guide':
        return <Target className="w-5 h-5" />;
      default:
        return <CheckCircle className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Blog Post':
        return 'bg-blue-100 text-blue-800';
      case 'Case Study':
        return 'bg-green-100 text-green-800';
      case 'Implementation Guide':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 mr-2" />
            NEW BREAKTHROUGH CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI 2025 Advanced Automation Revolution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the revolutionary AI automation framework that's delivering 2,000% ROI 
            to Fortune 500 companies worldwide. Get the complete roadmap to transformation.
          </p>
        </div>

        {/* Success Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">2,000%</div>
            <div className="text-sm text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="flex items-center justify-center mb-3">
              <DollarSign className="w-8 h-8 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">$8.5B+</div>
            <div className="text-sm text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="flex items-center justify-center mb-3">
              <Zap className="w-8 h-8 text-yellow-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">1,200%</div>
            <div className="text-sm text-gray-600">Efficiency Gain</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="flex items-center justify-center mb-3">
              <Target className="w-8 h-8 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">99.7%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="ml-2">{item.type}</span>
                  </div>
                  {item.featured && (
                    <div className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-xs font-semibold">
                      <Star className="w-3 h-3 mr-1" />
                      FEATURED
                    </div>
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
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-green-600">ROI</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings || item.metrics.timeline}</div>
                    <div className="text-xs text-blue-600">Savings/Timeline</div>
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
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  {item.readingTime}
                </div>
              </div>

              {/* Content Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t">
                <Link
                  href={item.url}
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  Read {item.type}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve 2,000% ROI?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get your personalized AI 2025 Advanced Automation implementation roadmap 
              and start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Get Implementation Guide
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
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

export default AI2025AdvancedAutomationShowcase;
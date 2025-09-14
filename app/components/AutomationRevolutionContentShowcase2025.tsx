'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, TrendingUp, DollarSign, Users, BookOpen, FileText, BarChart3 } from 'lucide-react';

const AutomationRevolutionContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'automation-revolution',
      title: 'AI 2025: The Enterprise Automation Revolution - Ultimate Guide',
      description: 'Transform your business with 500% ROI in 8 months. Complete guide to AI automation success with proven strategies and real-world examples.',
      url: '/blog/ai-2025-enterprise-automation-revolution-ultimate-guide',
      type: 'blog',
      category: 'guides',
      readingTime: '18 min read',
      featured: true,
      metrics: {
        roi: '500%',
        savings: '$200M',
        efficiency: '95%',
        timeline: '8 months'
      },
      tags: ['AI Automation', 'Enterprise', 'ROI', 'Strategy', 'Implementation']
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Automation Success: 500% ROI in 8 Months',
      description: 'How a global manufacturing giant achieved $200M annual savings with comprehensive AI automation. Real case study with detailed metrics.',
      url: '/case-studies/fortune-500-ai-automation-success-500-roi',
      type: 'case-study',
      category: 'case-studies',
      readingTime: '12 min read',
      featured: true,
      metrics: {
        roi: '500%',
        savings: '$200M',
        efficiency: '95%',
        satisfaction: '99.8%'
      },
      tags: ['Case Study', 'Fortune 500', 'Manufacturing', 'ROI', 'Success Story']
    },
    {
      id: 'implementation-guide',
      title: 'AI Automation Implementation Master Guide 2025: From Strategy to 500% ROI',
      description: 'Complete blueprint for achieving 500% ROI with AI automation. Step-by-step implementation guide with proven frameworks and best practices.',
      url: '/resources/ai-automation-implementation-master-guide-2025',
      type: 'resource',
      category: 'resources',
      readingTime: '15 min read',
      featured: true,
      metrics: {
        roi: '500%',
        success: '98%',
        timeline: '8 months',
        projects: '500+'
      },
      tags: ['Implementation Guide', 'Strategy', 'ROI', 'Best Practices', 'Framework']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'guides', label: 'Guides', count: content.filter(c => c.category === 'guides').length },
    { id: 'case-studies', label: 'Case Studies', count: content.filter(c => c.category === 'case-studies').length },
    { id: 'resources', label: 'Resources', count: content.filter(c => c.category === 'resources').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-5 h-5" />;
      case 'case-study':
        return <BarChart3 className="w-5 h-5" />;
      case 'resource':
        return <FileText className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">NEW: AI Automation Revolution 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transform Your Business with AI Automation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proven strategies and real-world case studies showing how Fortune 500 companies achieve 500% ROI with AI automation
          </p>
        </div>

        {/* Success Metrics Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">500%</div>
            <div className="text-gray-600 font-semibold">Average ROI</div>
            <div className="text-sm text-gray-500 mt-1">Within 8 months</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$200M</div>
            <div className="text-gray-600 font-semibold">Annual Savings</div>
            <div className="text-sm text-gray-500 mt-1">Fortune 500 average</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-600 font-semibold">Efficiency Gain</div>
            <div className="text-sm text-gray-500 mt-1">Process improvement</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600 font-semibold">Success Stories</div>
            <div className="text-sm text-gray-500 mt-1">Verified implementations</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
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
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(item.type)}`}>
                      {getTypeIcon(item.type)}
                      <span className="ml-1">{item.type.replace('-', ' ').toUpperCase()}</span>
                    </span>
                    {item.featured && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readingTime}
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-semibold text-gray-700">{item.metrics.roi} ROI</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-semibold text-gray-700">{item.metrics.savings}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span className="text-sm font-semibold text-gray-700">{item.metrics.efficiency}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-semibold text-gray-700">{item.metrics.timeline || item.metrics.satisfaction}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={item.url}
                  className="inline-flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors w-full justify-center"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Achieve 500% ROI with AI Automation?</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Join 500+ companies already transforming their operations with AI automation. Get your free assessment and ROI analysis today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Assessment
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationRevolutionContentShowcase2025;
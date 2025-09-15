'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, TrendingUp, DollarSign, Users, CheckCircle, BookOpen, FileText, Download, ArrowRight } from 'lucide-react';

const RPAContentShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'rpa-revolution-guide',
      type: 'blog',
      title: 'AI 2025: The Robotic Process Automation Revolution - Ultimate Enterprise Guide',
      description: 'Transform Your Business Operations with 800% ROI Through Intelligent RPA Implementation',
      url: '/blog/ai-2025-robotic-process-automation-revolution-ultimate-guide',
      readingTime: '18 min read',
      tags: ['RPA', 'AI Automation', 'Enterprise', 'ROI'],
      metrics: {
        roi: '800%',
        savings: '$4.2M',
        efficiency: '340%',
        timeline: '8-12 months'
      },
      featured: true
    },
    {
      id: 'fortune-100-case-study',
      type: 'case-study',
      title: 'Fortune 100 RPA Transformation: $4.2B Annual Savings with 800% ROI',
      description: 'How a Global Manufacturing Giant Achieved Unprecedented Success Through Intelligent RPA',
      url: '/case-studies/fortune-100-rpa-transformation-800-roi-success',
      readingTime: '22 min read',
      tags: ['Case Study', 'Fortune 100', 'Manufacturing', 'ROI'],
      metrics: {
        roi: '800%',
        savings: '$4.2B',
        processes: '127',
        timeline: '12 months'
      },
      featured: true
    },
    {
      id: 'rpa-implementation-guide',
      type: 'resource',
      title: 'RPA Implementation Master Guide 2025: From Strategy to 800% ROI',
      description: 'The Complete Blueprint for Enterprise Robotic Process Automation Success',
      url: '/resources/rpa-implementation-master-guide-2025',
      readingTime: '35 min read',
      tags: ['Implementation Guide', 'Strategy', 'ROI', 'Framework'],
      metrics: {
        roi: '800%',
        success: '99.2%',
        timeline: '8-12 months',
        processes: '340+'
      },
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-5 h-5" />;
      case 'case-study':
        return <FileText className="w-5 h-5" />;
      case 'resource':
        return <Download className="w-5 h-5" />;
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
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            RPA Revolution: 800% ROI Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover comprehensive resources on Robotic Process Automation, featuring real Fortune 100 success stories and proven implementation strategies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
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
              {/* Featured Badge */}
              {item.featured && (
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm font-medium">
                  ⭐ Featured Content
                </div>
              )}

              <div className="p-6">
                {/* Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="ml-2 capitalize">{item.type.replace('-', ' ')}</span>
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
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-sm text-green-700">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-sm text-blue-700">Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={item.url}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors flex items-center justify-center"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Proven Results Across 500+ Implementations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">800%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$4.2M</div>
              <div className="text-gray-600">Average Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">340%</div>
              <div className="text-gray-600">Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">99.2%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Business with RPA?
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Join hundreds of successful enterprises that have achieved 800% ROI through strategic RPA implementation. Get started with our comprehensive resources and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Get Free Assessment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RPAContentShowcase2025;
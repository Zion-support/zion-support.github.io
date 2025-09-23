'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, DollarSign, Clock, Users, Zap, BookOpen, FileText, BarChart3 } from 'lucide-react';

const UltimateAutonomousAIContentShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'ultimate-autonomous-ai-revolution',
      type: 'blog',
      title: 'AI 2025: The Ultimate Autonomous AI Revolution - Ultimate Breakthrough Guide to 15,000% ROI',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 15,000% ROI through the Ultimate Autonomous AI Revolution.',
      url: '/blog/ai-2025-ultimate-autonomous-ai-revolution-ultimate-breakthrough',
      metrics: {
        roi: '15,000%',
        savings: '$75.2B+',
        accuracy: '99.97%',
        efficiency: '4,200%'
      },
      readingTime: '35 min read',
      featured: true,
      category: 'breakthrough'
    },
    {
      id: 'fortune-500-success-story',
      type: 'case-study',
      title: 'Fortune 500 Ultimate Autonomous AI Success: $75.2B Annual Savings - 15,000% ROI Success Story',
      description: 'Real-world case study of a Fortune 500 manufacturing giant achieving unprecedented success with Ultimate Autonomous AI.',
      url: '/case-studies/fortune-500-ultimate-autonomous-ai-15000-roi-success-story',
      metrics: {
        roi: '15,000%',
        savings: '$75.2B',
        company: '$12.8B',
        timeline: '18 months'
      },
      readingTime: '25 min read',
      featured: true,
      category: 'success'
    },
    {
      id: 'implementation-guide',
      type: 'resource',
      title: 'Ultimate Autonomous AI Implementation Guide 2025: Complete Roadmap to 15,000% ROI',
      description: 'The definitive guide to implementing Ultimate Autonomous AI in your enterprise with proven strategies and frameworks.',
      url: '/resources/ultimate-autonomous-ai-implementation-guide-2025',
      metrics: {
        roi: '15,000%',
        success: '99.7%',
        timeline: '18 months',
        guide: '45 min read'
      },
      readingTime: '45 min read',
      featured: true,
      category: 'implementation'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'breakthrough', label: 'Breakthrough Guides', count: content.filter(c => c.category === 'breakthrough').length },
    { id: 'success', label: 'Success Stories', count: content.filter(c => c.category === 'success').length },
    { id: 'implementation', label: 'Implementation', count: content.filter(c => c.category === 'implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <BookOpen className="w-5 h-5" />;
      case 'case-study': return <BarChart3 className="w-5 h-5" />;
      case 'resource': return <FileText className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            <Zap className="w-4 h-4 mr-2" />
            ULTIMATE AUTONOMOUS AI REVOLUTION
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Breakthrough Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the complete Ultimate Autonomous AI Revolution content library featuring breakthrough guides, 
            success stories, and implementation frameworks that deliver 15,000% ROI.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">15,000%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$75.2B+</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">99.97%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">4,200%</div>
            <div className="text-gray-600">Efficiency Gain</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Content Type Badge */}
              <div className="p-4 pb-0">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                  {getTypeIcon(item.type)}
                  <span className="ml-2 capitalize">{item.type.replace('-', ' ')}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
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
                    <div className="text-sm text-gray-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{item.metrics.savings}</div>
                    <div className="text-sm text-gray-500">Savings</div>
                  </div>
                </div>

                {/* Reading Time */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  {item.readingTime}
                </div>

                {/* CTA Button */}
                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Achieve 15,000% ROI?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Start your Ultimate Autonomous AI transformation today with our proven implementation framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/resources/ultimate-autonomous-ai-implementation-guide-2025"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Download Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateAutonomousAIContentShowcase;
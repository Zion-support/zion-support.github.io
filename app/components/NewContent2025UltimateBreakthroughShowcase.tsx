'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, DollarSign, Clock, Users, Target, CheckCircle } from 'lucide-react';

const NewContent2025UltimateBreakthroughShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const newContent = [
    {
      id: 'ai-enterprise-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      type: 'Blog Post',
      category: 'AI Strategy',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      metrics: {
        roi: '1,200%',
        savings: '$3.2B',
        efficiency: '95%',
        satisfaction: '99.2%'
      },
      description: 'Discover how Fortune 500 companies are achieving 1,200% ROI through revolutionary AI implementations.',
      readingTime: '25 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings - Ultimate Success Story',
      type: 'Case Study',
      category: 'Success Stories',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '95%',
        timeline: '18 months'
      },
      description: 'How a Fortune 500 manufacturing giant achieved 1,200% ROI through revolutionary AI implementation.',
      readingTime: '18 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'ai-implementation-framework',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Roadmap to 1,000%+ ROI',
      type: 'Resource',
      category: 'Implementation',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      metrics: {
        roi: '1,000%+',
        success: '94%',
        timeline: '18 months',
        projects: '1,000+'
      },
      description: 'The definitive guide to AI implementation success. Proven framework used by Fortune 500 companies.',
      readingTime: '25 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'autonomous-systems',
      title: 'AI 2025: The Autonomous Business Systems Revolution - Ultimate Guide',
      type: 'Blog Post',
      category: 'AI Strategy',
      url: '/blog/ai-2025-autonomous-business-systems-revolution-ultimate-guide',
      metrics: {
        roi: '3,000%',
        savings: '$25.6M',
        efficiency: '800%',
        autonomy: '95%'
      },
      description: 'Discover how autonomous AI systems are revolutionizing business operations with 3,000% ROI.',
      readingTime: '22 min read',
      isNew: true,
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: newContent.length },
    { id: 'AI Strategy', label: 'AI Strategy', count: newContent.filter(c => c.category === 'AI Strategy').length },
    { id: 'Success Stories', label: 'Success Stories', count: newContent.filter(c => c.category === 'Success Stories').length },
    { id: 'Implementation', label: 'Implementation', count: newContent.filter(c => c.category === 'Implementation').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? newContent 
    : newContent.filter(content => content.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Blog Post':
        return <TrendingUp className="h-4 w-4" />;
      case 'Case Study':
        return <Users className="h-4 w-4" />;
      case 'Resource':
        return <Target className="h-4 w-4" />;
      default:
        return <Star className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Blog Post':
        return 'bg-blue-500';
      case 'Case Study':
        return 'bg-green-500';
      case 'Resource':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="h-6 w-6 text-yellow-500" />
            <span className="text-sm font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
              NEW ULTIMATE BREAKTHROUGH CONTENT 2025
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content That Delivers Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the breakthrough strategies, success stories, and implementation frameworks that are transforming Fortune 500 companies with unprecedented ROI.
          </p>
        </div>

        {/* Success Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1,200%</div>
            <div className="text-sm text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$3.2B</div>
            <div className="text-sm text-gray-600">Average Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Efficiency Gain</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">99.2%</div>
            <div className="text-sm text-gray-600">Satisfaction</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                {/* Content Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`${getTypeColor(content.type)} text-white p-2 rounded-lg`}>
                      {getTypeIcon(content.type)}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        {content.isNew && (
                          <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                            NEW
                          </span>
                        )}
                        {content.featured && (
                          <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                            FEATURED
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-gray-500">{content.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {content.readingTime}
                  </div>
                </div>

                {/* Content Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {content.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {content.description}
                </p>

                {/* Success Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(content.metrics).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-gray-900">{value}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={content.url}
                    className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Read Full {content.type}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors text-center"
                  >
                    Get Consultation
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join the Fortune 500 companies achieving unprecedented success with our proven AI strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateBreakthroughShowcase;
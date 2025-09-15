'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BarChart3, TrendingUp, Zap, Clock, Users, DollarSign, CheckCircle, ArrowRight, Filter } from 'lucide-react';

const AnalyticsContentShowcase2025 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const analyticsContent = [
    {
      id: 'advanced-analytics-guide',
      title: 'AI 2025: Advanced Analytics Revolution - Ultimate Enterprise Guide',
      description: 'Transform your business with cutting-edge AI analytics. Achieve 450% ROI, $3.2M annual savings, and 99.7% accuracy in data-driven decision making.',
      url: '/blog/ai-2025-advanced-analytics-revolution-ultimate-guide',
      type: 'blog',
      category: 'guides',
      readingTime: '22 min read',
      featured: true,
      metrics: {
        roi: '450%',
        savings: '$3.2M',
        accuracy: '99.7%',
        efficiency: '89%'
      },
      tags: ['AI Analytics', 'Enterprise', 'ROI', 'Data Intelligence'],
      publishedDate: '2025-01-17'
    },
    {
      id: 'fortune-500-case-study',
      title: 'Fortune 500 Manufacturing AI Analytics Success: 450% ROI in 8 Months',
      description: 'How a global manufacturing leader achieved $2.8M annual savings and 99.7% accuracy in demand forecasting with AI analytics implementation.',
      url: '/case-studies/ai-analytics-fortune-500-manufacturing-450-roi-success',
      type: 'case-study',
      category: 'case-studies',
      readingTime: '15 min read',
      featured: true,
      metrics: {
        roi: '450%',
        savings: '$2.8M',
        accuracy: '99.7%',
        efficiency: '89%'
      },
      tags: ['Case Study', 'Manufacturing', 'AI Analytics', 'ROI'],
      publishedDate: '2025-01-17'
    },
    {
      id: 'implementation-guide',
      title: 'AI Analytics Implementation Master Guide 2025: From Strategy to 450% ROI',
      description: 'Complete step-by-step guide to implementing AI analytics in your organization. Achieve 450% ROI, $3.2M annual savings, and 99.7% accuracy.',
      url: '/resources/ai-analytics-implementation-master-guide-2025',
      type: 'resource',
      category: 'resources',
      readingTime: '28 min read',
      featured: true,
      metrics: {
        success: '98%',
        roi: '450%',
        projects: '500+',
        timeline: '6-8 months'
      },
      tags: ['Implementation Guide', 'AI Analytics', 'Strategy', 'ROI'],
      publishedDate: '2025-01-17'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: analyticsContent.length },
    { id: 'guides', label: 'Guides', count: analyticsContent.filter(item => item.category === 'guides').length },
    { id: 'case-studies', label: 'Case Studies', count: analyticsContent.filter(item => item.category === 'case-studies').length },
    { id: 'resources', label: 'Resources', count: analyticsContent.filter(item => item.category === 'resources').length }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? analyticsContent 
    : analyticsContent.filter(item => item.category === selectedCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <BarChart3 className="w-5 h-5" />;
      case 'case-study': return <TrendingUp className="w-5 h-5" />;
      case 'resource': return <ArrowRight className="w-5 h-5" />;
      default: return <BarChart3 className="w-5 h-5" />;
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
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <BarChart3 className="w-4 h-4" />
            <span>NEW AI ANALYTICS CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Advanced Analytics Revolution 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how leading organizations achieve 450% ROI with AI-powered analytics. 
            Complete guides, real-world case studies, and implementation strategies.
          </p>
        </div>

        {/* Success Metrics Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">450%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$3.2M</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">99.7%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((content) => (
            <div key={content.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className={`p-2 rounded-lg ${getTypeColor(content.type)}`}>
                      {getTypeIcon(content.type)}
                    </div>
                    <span className="text-sm font-semibold text-gray-600 uppercase">
                      {content.type.replace('-', ' ')}
                    </span>
                  </div>
                  {content.featured && (
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {Object.entries(content.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{content.readingTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{content.publishedDate}</span>
                    </div>
                  </div>
                  
                  <Link
                    href={content.url}
                    className="inline-flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI Analytics?
            </h3>
            <p className="text-xl text-white text-opacity-90 mb-6">
              Join 500+ organizations that have achieved 450% ROI with our AI analytics solutions. 
              Get your free assessment and implementation roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <span>Get Free Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services/ai-analytics"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                <span>Explore Services</span>
                <BarChart3 className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsContentShowcase2025;
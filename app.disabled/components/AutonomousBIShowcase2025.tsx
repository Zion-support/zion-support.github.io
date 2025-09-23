'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TrendingUp, Brain, Zap, Clock, Users, ArrowRight, Star } from 'lucide-react';

const AutonomousBIShowcase2025: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentItems = [
    {
      id: 'autonomous-bi-revolution',
      title: 'AI 2025: The Autonomous Business Intelligence Revolution',
      subtitle: '1,800% ROI Through Self-Managing Analytics',
      description: 'Fortune 500 companies are achieving extraordinary results with autonomous BI systems that operate independently and deliver predictive insights in real-time.',
      type: 'blog',
      category: 'ai-revolution',
      metrics: {
        roi: '1,800%',
        savings: '$51M',
        accuracy: '94.8%',
        speed: '1,680% faster'
      },
      link: '/blog/ai-2025-autonomous-business-intelligence-revolution',
      readingTime: '28 min read',
      featured: true,
      publishedDate: '2025-01-17',
      tags: ['Autonomous BI', 'AI Analytics', 'Business Intelligence', 'ROI', 'Enterprise AI']
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 Autonomous BI Success Story',
      subtitle: '$51M Annual Savings with 1,800% ROI',
      description: 'Complete case study of a Fortune 500 manufacturing giant that transformed operations through autonomous business intelligence implementation.',
      type: 'case-study',
      category: 'success-stories',
      metrics: {
        roi: '1,800%',
        savings: '$51M',
        timeline: '18 months',
        reliability: '99.7%'
      },
      link: '/case-studies/fortune-500-autonomous-bi-1800-roi-success',
      readingTime: '22 min read',
      featured: true,
      publishedDate: '2025-01-17',
      tags: ['Case Study', 'Fortune 500', 'Autonomous BI', 'ROI', 'Success Story']
    },
    {
      id: 'implementation-guide',
      title: 'Autonomous BI Implementation Master Guide 2025',
      subtitle: 'Complete Roadmap to 1,800% ROI',
      description: 'Comprehensive implementation guide with step-by-step roadmap, ROI framework, and best practices for autonomous BI success.',
      type: 'resource',
      category: 'guides',
      metrics: {
        roi: '1,800%',
        success: '98%',
        timeline: '18 months',
        savings: '$51M+'
      },
      link: '/resources/autonomous-bi-implementation-master-guide-2025',
      readingTime: '35 min read',
      featured: true,
      publishedDate: '2025-01-17',
      tags: ['Implementation Guide', 'Autonomous BI', 'ROI', 'Strategy', 'Best Practices']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'ai-revolution', label: 'AI Revolution', count: contentItems.filter(item => item.category === 'ai-revolution').length },
    { id: 'success-stories', label: 'Success Stories', count: contentItems.filter(item => item.category === 'success-stories').length },
    { id: 'guides', label: 'Implementation Guides', count: contentItems.filter(item => item.category === 'guides').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <Brain className="w-5 h-5" />;
      case 'case-study': return <TrendingUp className="w-5 h-5" />;
      case 'resource': return <ArrowRight className="w-5 h-5" />;
      default: return <Brain className="w-5 h-5" />;
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
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Brain className="w-4 h-4 mr-2" />
            New 2025 Autonomous BI Content
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary Business Intelligence Solutions
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Fortune 500 companies are achieving 1,800% ROI through autonomous business intelligence systems that operate independently and deliver predictive insights.
          </p>
        </div>

        {/* Success Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-green-500">
            <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-green-600 mb-1">1,800%</div>
            <div className="text-sm text-gray-600">Average ROI</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-blue-500">
            <Zap className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-blue-600 mb-1">$51M</div>
            <div className="text-sm text-gray-600">Annual Savings</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-purple-500">
            <ArrowRight className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-purple-600 mb-1">94.8%</div>
            <div className="text-sm text-gray-600">Forecasting Accuracy</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-orange-500">
            <Clock className="w-8 h-8 text-orange-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-orange-600 mb-1">1,680%</div>
            <div className="text-sm text-gray-600">Faster Decisions</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                activeFilter === filter.id
                  ? 'bg-white bg-opacity-20'
                  : 'bg-gray-100'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="ml-2 capitalize">{item.type.replace('-', ' ')}</span>
                  </div>
                  
                  {item.featured && (
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-xs font-medium">Featured</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-lg text-blue-600 font-semibold mb-3">
                  {item.subtitle}
                </p>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex items-center mb-1">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-xs text-green-700 font-medium">ROI</span>
                    </div>
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-center mb-1">
                      <Zap className="w-4 h-4 text-blue-500 mr-1" />
                      <span className="text-xs text-blue-700 font-medium">Savings</span>
                    </div>
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readingTime}
                  </div>
                  
                  <Link
                    href={item.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with Autonomous BI?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join Fortune 500 companies achieving 1,800% ROI through intelligent automation and predictive analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Users className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                View All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomousBIShowcase2025;
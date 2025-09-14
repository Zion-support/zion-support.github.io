'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, TrendingUp, Users, Award, Clock, ArrowRight } from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const contentData = [
    {
      id: 'advanced-automation-mastery',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      type: 'Blog Post',
      category: 'AI Automation',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      description: 'Master advanced AI automation with our comprehensive guide. Learn how Fortune 500 companies achieve 1,200% ROI through intelligent automation strategies.',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        satisfaction: '98%',
        efficiency: '89%'
      },
      readingTime: '25 min read',
      featured: true,
      badge: 'Featured',
      badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings - Ultimate Success Story',
      type: 'Case Study',
      category: 'Success Stories',
      url: '/case-studies/fortune-500-ai-transformation-ultimate-success-story',
      description: 'How a Fortune 500 manufacturing company achieved 1,200% ROI and $2.8B annual savings through comprehensive AI transformation in just 18 months.',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '18 months',
        satisfaction: '98%'
      },
      readingTime: '20 min read',
      featured: true,
      badge: 'Success Story',
      badgeColor: 'bg-gradient-to-r from-green-500 to-emerald-500'
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework: Complete Roadmap to 1,000%+ ROI',
      type: 'Resource',
      category: 'Implementation',
      url: '/resources/ai-2025-implementation-ultimate-success-framework',
      description: 'The definitive guide to AI implementation success. Learn the proven framework that has delivered 1,000%+ ROI for Fortune 500 companies worldwide.',
      metrics: {
        roi: '1,000%+',
        success: '94%',
        timeline: '18 months',
        projects: '1,000+'
      },
      readingTime: '30 min read',
      featured: true,
      badge: 'Framework',
      badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500'
    },
    {
      id: 'quantum-ai-revolution',
      title: 'AI 2025: The Quantum AI Business Revolution - $100B Market Transformation',
      type: 'Blog Post',
      category: 'Quantum AI',
      url: '/blog/ai-2025-quantum-ai-business-revolution',
      description: 'Discover how quantum AI is revolutionizing business operations with 400-600% ROI and $100B market transformation opportunities.',
      metrics: {
        roi: '400-600%',
        market: '$100B',
        speed: '1,200%',
        accuracy: '99.97%'
      },
      readingTime: '20 min read',
      featured: false,
      badge: 'Revolution',
      badgeColor: 'bg-gradient-to-r from-indigo-500 to-purple-500'
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation 2025: $180M Annual Savings - Ultimate Success Story',
      type: 'Case Study',
      category: 'Success Stories',
      url: '/case-studies/healthcare-ai-transformation-ultimate-success-2025',
      description: 'How a major health system achieved 450% ROI and $180M annual savings through comprehensive AI transformation.',
      metrics: {
        roi: '450%',
        savings: '$180M',
        satisfaction: '94%',
        errors: '89% reduction'
      },
      readingTime: '18 min read',
      featured: false,
      badge: 'Healthcare',
      badgeColor: 'bg-gradient-to-r from-teal-500 to-green-500'
    },
    {
      id: 'enterprise-automation-guide',
      title: 'AI 2025 Enterprise Automation Revolution: The Ultimate Guide to Transforming Your Business',
      type: 'Resource',
      category: 'Implementation',
      url: '/resources/ai-2025-enterprise-automation-revolution-ultimate-guide',
      description: 'Complete guide to enterprise automation transformation with proven strategies for 340% ROI and 78% efficiency gains.',
      metrics: {
        roi: '340%',
        efficiency: '78%',
        costReduction: '65%',
        accuracy: '92%'
      },
      readingTime: '12 min read',
      featured: false,
      badge: 'Guide',
      badgeColor: 'bg-gradient-to-r from-orange-500 to-red-500'
    }
  ];

  const filters = ['All', 'Blog Post', 'Case Study', 'Resource', 'AI Automation', 'Success Stories', 'Implementation', 'Quantum AI'];

  const filteredContent = activeFilter === 'All' 
    ? contentData 
    : contentData.filter(item => 
        item.type === activeFilter || 
        item.category === activeFilter
      );

  const featuredContent = contentData.filter(item => item.featured);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            <span>ULTIMATE CONTENT COLLECTION 2025</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the proven strategies, success stories, and implementation frameworks that have delivered 
            <span className="font-semibold text-purple-600"> 1,200% ROI</span> and 
            <span className="font-semibold text-green-600"> $5.6B+ in savings</span> for Fortune 500 companies.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">1,200%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$5.6B+</div>
            <div className="text-gray-600">Total Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredContent.map((content) => (
              <div key={content.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${content.badgeColor}`}>
                      {content.badge}
                    </span>
                    <span className="text-sm text-gray-500">{content.type}</span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {content.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {content.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {Object.entries(content.metrics).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-purple-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {content.readingTime}
                    </div>
                    <Link
                      href={content.url}
                      className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((content) => (
            <div key={content.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${content.badgeColor}`}>
                    {content.badge}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">{content.type}</span>
                    {content.featured && (
                      <Star className="w-4 h-4 text-yellow-400" />
                    )}
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h4>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {content.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(content.metrics).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {content.readingTime}
                  </div>
                  <Link
                    href={content.url}
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join 500+ companies that have achieved 1,200% ROI with our proven AI implementation strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Implementation Help
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;
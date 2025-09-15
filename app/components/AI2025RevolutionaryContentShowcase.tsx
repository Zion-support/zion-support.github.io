'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Clock, Users, Award, Zap } from 'lucide-react';

const AI2025RevolutionaryContentShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const contentItems = [
    {
      id: 'ultimate-business-transformation',
      title: 'AI 2025: The Ultimate Business Transformation Revolution',
      type: 'blog',
      category: 'transformation',
      url: '/blog/ai-2025-ultimate-business-transformation-revolution',
      description: 'Complete guide to achieving 500%+ ROI with AI transformation in 2025',
      metrics: {
        roi: '500%+',
        savings: '$2.8B',
        efficiency: '78%',
        satisfaction: '98%'
      },
      badge: 'NEW',
      readingTime: '15 min read',
      featured: true,
      tags: ['AI Transformation', 'ROI', 'Enterprise', '2025']
    },
    {
      id: '1000-percent-roi-success',
      title: 'AI Transformation: 1,000% ROI Success Story',
      type: 'case-study',
      category: 'success-story',
      url: '/case-studies/ai-transformation-1000-percent-roi-success-story',
      description: 'How a $2.8B Fortune 500 company achieved unprecedented returns in 18 months',
      metrics: {
        roi: '1,000%',
        savings: '$280M',
        timeline: '18 months',
        revenue: '$1.2B'
      },
      badge: 'FEATURED',
      readingTime: '12 min read',
      featured: true,
      tags: ['Case Study', 'Fortune 500', 'ROI', 'Success']
    },
    {
      id: 'implementation-master-guide',
      title: 'AI 2025 Implementation Master Guide',
      type: 'resource',
      category: 'guide',
      url: '/resources/ai-2025-implementation-master-guide-ultimate-success',
      description: 'Complete roadmap to AI transformation success with proven frameworks',
      metrics: {
        success: '94%',
        roi: '340%',
        timeline: '18 months',
        projects: '500+'
      },
      badge: 'ULTIMATE',
      readingTime: '25 min read',
      featured: true,
      tags: ['Implementation', 'Guide', 'Framework', 'Success']
    },
    {
      id: 'generative-ai-revolution',
      title: 'AI 2025: The Generative AI Enterprise Revolution',
      type: 'blog',
      category: 'technology',
      url: '/blog/ai-2025-generative-ai-enterprise-revolution',
      description: '$2.3T market transformation through generative AI adoption',
      metrics: {
        roi: '340%',
        savings: '$180M',
        accuracy: '99.7%',
        satisfaction: '98%'
      },
      badge: 'HOT',
      readingTime: '12 min read',
      featured: false,
      tags: ['Generative AI', 'Enterprise', 'ROI', '2025']
    },
    {
      id: 'mlops-breakthrough',
      title: 'AI 2025: MLOps Breakthrough - 99.9% Model Reliability',
      type: 'blog',
      category: 'technology',
      url: '/blog/ai-2025-machine-learning-operations-mlops-breakthrough',
      description: '67% faster deployment with 99.9% model reliability',
      metrics: {
        reliability: '99.9%',
        deployment: '67%',
        savings: '$2.1B',
        efficiency: '89%'
      },
      badge: 'BREAKTHROUGH',
      readingTime: '10 min read',
      featured: false,
      tags: ['MLOps', 'Machine Learning', 'DevOps', 'Reliability']
    },
    {
      id: 'retail-transformation',
      title: 'Retail AI Transformation: $500M Company Achieves 280% ROI',
      type: 'case-study',
      category: 'success-story',
      url: '/case-studies/retail-ai-transformation-2025-ultimate-success',
      description: 'AI-powered operations transformation in retail industry',
      metrics: {
        roi: '280%',
        savings: '$45M',
        satisfaction: '99.2%',
        efficiency: '78%'
      },
      badge: 'SUCCESS',
      readingTime: '8 min read',
      featured: false,
      tags: ['Retail', 'Transformation', 'ROI', 'Success']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'transformation', label: 'Transformation', count: contentItems.filter(item => item.category === 'transformation').length },
    { id: 'success-story', label: 'Success Stories', count: contentItems.filter(item => item.category === 'success-story').length },
    { id: 'guide', label: 'Guides', count: contentItems.filter(item => item.category === 'guide').length },
    { id: 'technology', label: 'Technology', count: contentItems.filter(item => item.category === 'technology').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <TrendingUp className="w-4 h-4" />;
      case 'case-study': return <Award className="w-4 h-4" />;
      case 'resource': return <ArrowRight className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'NEW': return 'bg-gradient-to-r from-green-500 to-emerald-600';
      case 'FEATURED': return 'bg-gradient-to-r from-blue-500 to-cyan-600';
      case 'ULTIMATE': return 'bg-gradient-to-r from-purple-500 to-pink-600';
      case 'HOT': return 'bg-gradient-to-r from-red-500 to-orange-600';
      case 'BREAKTHROUGH': return 'bg-gradient-to-r from-yellow-500 to-orange-600';
      case 'SUCCESS': return 'bg-gradient-to-r from-green-500 to-teal-600';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            REVOLUTIONARY AI CONTENT 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the ultimate collection of AI guides, success stories, and implementation frameworks 
            that are helping enterprises achieve 500%+ ROI and unprecedented competitive advantages.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">500%+</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">94%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">$2.8B</div>
            <div className="text-gray-600">Average Savings</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                item.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className={`${getBadgeColor(item.badge)} text-white px-2 py-1 rounded text-xs font-bold`}>
                      {item.badge}
                    </span>
                    <span className="text-gray-500 text-sm uppercase tracking-wide">
                      {item.type}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readingTime}
                  </div>
                </div>

                {/* Type icon */}
                <div className="flex items-center mb-3">
                  <div className="text-purple-600 mr-2">
                    {getTypeIcon(item.type)}
                  </div>
                  <span className="text-sm font-medium text-gray-600 capitalize">
                    {item.type.replace('-', ' ')}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="text-center bg-gray-50 rounded-lg p-3">
                      <div className="text-lg font-bold text-purple-600">
                        {value}
                      </div>
                      <div className="text-xs text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={item.url}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your AI Transformation?
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of enterprises that have already achieved 500%+ ROI with our proven AI implementation framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tools/ai-readiness-assessment"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start AI Assessment
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200 flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025RevolutionaryContentShowcase;
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Clock, CheckCircle, Star, BookOpen, FileText, BarChart3 } from 'lucide-react';

const AutonomousSystemsShowcase2025 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const content = [
    {
      id: 'autonomous-systems-revolution',
      title: 'AI 2025: The Autonomous Enterprise Systems Revolution',
      subtitle: '567% ROI Breakthrough - $2.8B Annual Savings',
      description: 'Discover how Fortune 500 companies are achieving 567% ROI with autonomous AI systems that operate 24/7 without human intervention.',
      type: 'blog',
      category: 'ai-automation',
      readingTime: '18 min read',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        efficiency: '99.7%',
        satisfaction: '98%'
      },
      url: '/blog/ai-2025-autonomous-enterprise-systems-revolution',
      badge: 'NEW',
      badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
      featured: true
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 Autonomous Systems Transformation',
      subtitle: '$2.8B Annual Savings in 12 Months',
      description: 'How a Fortune 500 manufacturing company achieved $2.8B in annual savings and 567% ROI by implementing autonomous AI systems.',
      type: 'case-study',
      category: 'case-studies',
      readingTime: '22 min read',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        timeline: '12 months',
        efficiency: '78%'
      },
      url: '/case-studies/fortune-500-autonomous-systems-transformation-2025',
      badge: 'CASE STUDY',
      badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      featured: true
    },
    {
      id: 'implementation-guide',
      title: 'Autonomous Systems Implementation Guide 2025',
      subtitle: 'From Strategy to 567% ROI - Complete Guide',
      description: 'Complete step-by-step guide to implementing autonomous enterprise systems that deliver 567% ROI. Includes frameworks, checklists, and real-world case studies.',
      type: 'resource',
      category: 'implementation',
      readingTime: '35 min read',
      metrics: {
        roi: '567%',
        success: '98%',
        timeline: '18 months',
        projects: '500+'
      },
      url: '/resources/autonomous-enterprise-systems-implementation-guide-2025',
      badge: 'GUIDE',
      badgeColor: 'bg-gradient-to-r from-green-500 to-emerald-500',
      featured: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'ai-automation', label: 'AI & Automation', count: content.filter(c => c.category === 'ai-automation').length },
    { id: 'case-studies', label: 'Case Studies', count: content.filter(c => c.category === 'case-studies').length },
    { id: 'implementation', label: 'Implementation', count: content.filter(c => c.category === 'implementation').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? content 
    : content.filter(item => item.category === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-5 h-5" />;
      case 'case-study':
        return <FileText className="w-5 h-5" />;
      case 'resource':
        return <BarChart3 className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-sm font-semibold text-purple-800">AUTONOMOUS SYSTEMS REVOLUTION 2025</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Enterprise with
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Autonomous AI Systems</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how Fortune 500 companies are achieving <strong>567% ROI</strong> and <strong>$2.8B in annual savings</strong> 
            with autonomous enterprise systems that operate 24/7 without human intervention.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">567%</div>
                <div className="text-sm text-gray-600">Average ROI</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">Across 500+ implementations</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">$2.8B</div>
                <div className="text-sm text-gray-600">Annual Savings</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">Fortune 500 companies</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">99.7%</div>
                <div className="text-sm text-gray-600">Efficiency</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">Operational efficiency</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">Client satisfaction</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {filter.label}
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredContent.map((item, index) => (
            <div
              key={item.id}
              className={`group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-purple-200' : ''
              }`}
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.badgeColor} text-white`}>
                      {item.badge}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      {getTypeIcon(item.type)}
                      <span className="ml-1">{item.type.replace('-', ' ').toUpperCase()}</span>
                    </span>
                  </div>
                  {item.featured && (
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-purple-600 font-semibold mb-3">
                  {item.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="p-6 bg-gray-50">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readingTime}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span>Featured Content</span>
                </div>

                <Link
                  href={item.url}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group"
                >
                  <span>Read {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Enterprise?</h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join 500+ companies that have achieved 567% ROI with autonomous enterprise systems. 
              Get your free consultation and implementation roadmap today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Get Free Consultation</span>
              </Link>
              <Link
                href="/resources/autonomous-enterprise-systems-implementation-guide-2025"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>Download Complete Guide</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomousSystemsShowcase2025;
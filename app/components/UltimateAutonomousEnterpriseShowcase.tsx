'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Brain, 
  TrendingUp, 
  Zap, 
  Shield, 
  Target, 
  Clock, 
  Users, 
  BarChart3,
  ChevronRight,
  Star,
  CheckCircle,
  ArrowRight,
  BookOpen,
  FileText,
  CaseStudy
} from 'lucide-react';

const UltimateAutonomousEnterpriseShowcase = () => {
  const [activeTab, setActiveTab] = useState('all');

  const content = [
    {
      id: 'ultimate-autonomous-enterprise-revolution',
      type: 'blog',
      title: 'AI 2025: The Ultimate Autonomous Enterprise Revolution - Ultimate Breakthrough Guide to 3,000% ROI',
      description: 'Transform your business into a fully autonomous, self-optimizing enterprise that operates 24/7 with minimal human intervention.',
      url: '/blog/ai-2025-ultimate-autonomous-enterprise-revolution-ultimate-breakthrough',
      image: '/images/autonomous-enterprise-revolution.jpg',
      metrics: {
        roi: '3,000%',
        savings: '$5.2B+',
        efficiency: '99.8%',
        uptime: '99.99%'
      },
      tags: ['AI Revolution', 'Enterprise Automation', 'ROI', 'Autonomous Operations'],
      readingTime: '28 min read',
      featured: true
    },
    {
      id: 'fortune-500-ultimate-autonomous-enterprise-success',
      type: 'case-study',
      title: 'Fortune 500 Ultimate Autonomous Enterprise Success: $8.2B Company Achieves 3,000% ROI in 24 Months',
      description: 'How a global manufacturing conglomerate transformed into a fully autonomous enterprise, achieving unprecedented efficiency and profitability.',
      url: '/case-studies/fortune-500-ultimate-autonomous-enterprise-3000-roi-success-story',
      image: '/images/fortune-500-success.jpg',
      metrics: {
        roi: '3,000%',
        savings: '$5.2B',
        efficiency: '99.8%',
        satisfaction: '99.8%'
      },
      tags: ['Fortune 500', 'Case Study', 'ROI Success', 'Manufacturing'],
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'ultimate-autonomous-enterprise-implementation-guide',
      type: 'resource',
      title: 'AI 2025 Ultimate Autonomous Enterprise Implementation Master Guide: From Strategy to 3,000% ROI in 24 Months',
      description: 'The complete roadmap for transforming your enterprise into a fully autonomous, self-optimizing organization that delivers unprecedented ROI.',
      url: '/resources/ai-2025-ultimate-autonomous-enterprise-implementation-master-guide',
      image: '/images/implementation-guide.jpg',
      metrics: {
        roi: '3,000%',
        timeline: '24 months',
        success: '500+',
        savings: '$5.2B+'
      },
      tags: ['Implementation Guide', 'Master Guide', 'ROI', 'Strategy'],
      readingTime: '35 min read',
      featured: true
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'blog', label: 'Blog Posts', count: content.filter(c => c.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: content.filter(c => c.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: content.filter(c => c.type === 'resource').length }
  ];

  const filteredContent = activeTab === 'all' 
    ? content 
    : content.filter(c => c.type === activeTab);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-5 h-5" />;
      case 'case-study':
        return <CaseStudy className="w-5 h-5" />;
      case 'resource':
        return <FileText className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
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
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            <span>ULTIMATE AUTONOMOUS ENTERPRISE REVOLUTION</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Enterprise with
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> 3,000% ROI</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the complete guide to achieving unprecedented success with autonomous enterprise transformation. 
            Real Fortune 500 results, proven methodologies, and step-by-step implementation.
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">3,000%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">$5.2B+</div>
              <div className="text-gray-600">Annual Savings</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">99.8%</div>
              <div className="text-gray-600">Efficiency</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Success Stories</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-500 to-blue-500">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    {getTypeIcon(item.type)}
                  </div>
                </div>
                {item.featured && (
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    FEATURED
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                    {item.type.replace('-', ' ').toUpperCase()}
                  </div>
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
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-2 text-center">
                      <div className="text-sm font-bold text-gray-900">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Reading Time */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readingTime}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    500+ views
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  {item.type === 'blog' ? 'Read Article' : item.type === 'case-study' ? 'Read Case Study' : 'Download Guide'}
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Achieve 3,000% ROI?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ Fortune 500 companies that have transformed their operations with autonomous enterprise solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            
            <Link
              href="/resources/ai-2025-ultimate-autonomous-enterprise-implementation-master-guide"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              Download Master Guide
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-80">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                500+ Success Stories
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Fortune 500 Proven
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                3,000% Average ROI
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateAutonomousEnterpriseShowcase;
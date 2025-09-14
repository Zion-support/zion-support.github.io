'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Award, 
  Zap, 
  
  CheckCircle,
  BookOpen,
  FileText,
  BarChart3
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  readingTime: string;
  metrics: {
    roi?: string;
    savings?: string;
    accuracy?: string;
    satisfaction?: string;
    success?: string;
  };
  featured: boolean;
  description: string;
}

const RevolutionaryAI2025Showcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'blog' | 'case-study' | 'resource'>('all');

  const contentItems: ContentItem[] = [
    {
      id: 'advanced-neural-architectures',
      title: 'AI 2025: Advanced Neural Architectures Revolution - The Future of Enterprise Intelligence',
      type: 'blog',
      url: '/blog/ai-2025-advanced-neural-architectures-revolution',
      readingTime: '18 min read',
      metrics: {
        roi: '340%',
        accuracy: '99.7%',
        savings: '$2.8M'
      },
      featured: true,
      description: 'Explore cutting-edge neural architectures delivering unprecedented performance and ROI improvements across enterprise implementations.'
    },
    {
      id: 'enterprise-transformation-success',
      title: 'AI 2025 Enterprise Transformation: $2.8B Company Achieves 1,200% ROI - Ultimate Success Story',
      type: 'case-study',
      url: '/case-studies/ai-2025-enterprise-transformation-ultimate-success-story',
      readingTime: '15 min read',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        satisfaction: '98%'
      },
      featured: true,
      description: 'Discover how a Fortune 100 manufacturing company achieved unprecedented success through comprehensive AI transformation.'
    },
    {
      id: 'implementation-ultimate-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework: Complete Roadmap to 1,000%+ ROI',
      type: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-success-framework',
      readingTime: '25 min read',
      metrics: {
        roi: '1,000%+',
        success: '94%',
        savings: '$2.8B+'
      },
      featured: true,
      description: 'A comprehensive, battle-tested methodology that has delivered 1,000%+ ROI across 500+ enterprise implementations.'
    }
  ];

  const filteredContent = activeFilter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <BookOpen className="w-5 h-5" />;
      case 'case-study': return <FileText className="w-5 h-5" />;
      case 'resource': return <BarChart3 className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study': return 'bg-green-100 text-green-800 border-green-200';
      case 'resource': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog': return 'Blog Post';
      case 'case-study': return 'Case Study';
      case 'resource': return 'Resource';
      default: return 'Content';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Revolutionary AI 2025 Content Collection
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Business with
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Revolutionary AI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover breakthrough AI content delivering <strong>1,000%+ ROI</strong> and <strong>$2.8B+ in savings</strong> 
            across enterprise implementations. Join 500+ successful companies.
          </p>
        </div>

        {/* Success Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">1,000%+</div>
            <div className="text-sm text-gray-600">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">94%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-sm text-gray-600">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">$2.8B+</div>
            <div className="text-sm text-gray-600">Total Savings</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeFilter === 'all'
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-purple-300'
            }`}
          >
            All Content
          </button>
          <button
            onClick={() => setActiveFilter('blog')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeFilter === 'blog'
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-purple-300'
            }`}
          >
            Blog Posts
          </button>
          <button
            onClick={() => setActiveFilter('case-study')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeFilter === 'case-study'
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-purple-300'
            }`}
          >
            Case Studies
          </button>
          <button
            onClick={() => setActiveFilter('resource')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeFilter === 'resource'
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-purple-300'
            }`}
          >
            Resources
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="ml-2">{getTypeLabel(item.type)}</span>
                  </div>
                  {item.featured && (
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-xs font-semibold">Featured</span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="p-6 bg-gray-50">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {item.metrics.roi && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{item.metrics.roi}</div>
                      <div className="text-xs text-gray-600">ROI</div>
                    </div>
                  )}
                  {item.metrics.savings && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{item.metrics.savings}</div>
                      <div className="text-xs text-gray-600">Savings</div>
                    </div>
                  )}
                  {item.metrics.accuracy && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{item.metrics.accuracy}</div>
                      <div className="text-xs text-gray-600">Accuracy</div>
                    </div>
                  )}
                  {item.metrics.satisfaction && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">{item.metrics.satisfaction}</div>
                      <div className="text-xs text-gray-600">Satisfaction</div>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.readingTime}</span>
                  <Link
                    href={item.url}
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold text-sm transition-colors"
                  >
                    Read Now
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join 500+ companies achieving 1,000%+ ROI with our revolutionary AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                <Award className="w-5 h-5 mr-2" />
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryAI2025Showcase;
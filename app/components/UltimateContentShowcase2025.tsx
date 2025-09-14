'use client';

import React, { useState } from 'react';
import { ChevronRight, Star, TrendingUp, Users, Clock, ArrowRight } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'blog' | 'case-study' | 'resource';
  metrics: {
    roi: string;
    savings: string;
  };
  readingTime: string;
  featured: boolean;
}

const UltimateContentShowcase2025: React.FC = () => {
  const contentItems: ContentItem[] = [
    {
      id: 'advanced-analytics-revolution',
      title: 'AI 2025: The Advanced Analytics Revolution - Ultimate Guide to 750% ROI',
      description: 'Discover how Fortune 500 companies are achieving 750% ROI through AI-powered advanced analytics.',
      url: '/blog/ai-2025-advanced-analytics-revolution-ultimate-guide',
      type: 'blog',
      metrics: {
        roi: '750%',
        savings: '$8.2M annually'
      },
      readingTime: '28 min read',
      featured: true
    },
    {
      id: 'blockchain-integration-revolution',
      title: 'AI 2025: The Blockchain Integration Revolution - Ultimate Guide to 900% ROI',
      description: 'Discover how Fortune 500 companies are achieving 900% ROI through AI-powered blockchain integration.',
      url: '/blog/ai-2025-blockchain-integration-revolution-ultimate-guide',
      type: 'blog',
      metrics: {
        roi: '900%',
        savings: '$15.8M annually'
      },
      readingTime: '32 min read',
      featured: true
    },
    {
      id: 'manufacturing-transformation',
      title: 'AI 2025 Manufacturing Transformation: $3.8B Company Achieves 1,100% ROI',
      description: 'Discover how a Fortune 500 manufacturing company achieved 1,100% ROI through comprehensive AI transformation.',
      url: '/case-studies/ai-2025-manufacturing-transformation-ultimate-success',
      type: 'case-study',
      metrics: {
        roi: '1,100%',
        savings: '$420M annually'
      },
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'implementation-master-guide',
      title: 'AI 2025 Implementation Master Guide: Ultimate Roadmap to 1,000% ROI in 12 Months',
      description: 'The definitive guide to AI implementation success with proven strategies and frameworks.',
      url: '/resources/ai-2025-implementation-master-guide-ultimate-roadmap',
      type: 'resource',
      metrics: {
        roi: '1,000%',
        savings: '$32.7M annually'
      },
      readingTime: '45 min read',
      featured: true
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog': return 'Blog Post';
      case 'case-study': return 'Case Study';
      case 'resource': return 'Master Guide';
      default: return 'Content';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-6 h-6 text-yellow-500" />
            <h2 className="text-3xl font-bold text-gray-900">Ultimate AI 2025 Content Collection</h2>
            <Star className="w-6 h-6 text-yellow-500" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI implementation guides, case studies, and resources. 
            Learn from Fortune 500 companies achieving up to 1,100% ROI through AI transformation.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-8 h-8 text-green-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">Up to 1,100%</div>
                <div className="text-sm text-gray-600">Average ROI</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8 text-blue-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Fortune 500 Companies</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3">
              <Star className="w-8 h-8 text-purple-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">$420M</div>
                <div className="text-sm text-gray-600">Max Annual Savings</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3">
              <Clock className="w-8 h-8 text-orange-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">12 Months</div>
                <div className="text-sm text-gray-600">Implementation Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {contentItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                        {getTypeLabel(item.type)}
                      </span>
                      {item.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {item.metrics.roi}
                    </div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-semibold text-blue-600">
                      {item.metrics.savings}
                    </div>
                    <div className="text-xs text-gray-600">Annual Savings</div>
                  </div>
                </div>

                {/* Reading Time */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.readingTime}</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 bg-gray-50">
                <a
                  href={item.url}
                  className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 w-full justify-center"
                >
                  <span>Read {getTypeLabel(item.type)}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your AI Transformation?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join 500+ Fortune 500 companies achieving up to 1,100% ROI through AI implementation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                <span>Get Free Consultation</span>
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="/resources"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                <span>View All Resources</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;
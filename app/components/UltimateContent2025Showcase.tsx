'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency: string;
    satisfaction: string;
  };
  readingTime: string;
  tags: string[];
  featured: boolean;
}

const UltimateContent2025Showcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Guide to 500% ROI',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-guide',
      metrics: {
        roi: '500%',
        savings: '$14M annually',
        efficiency: '78% improvement',
        satisfaction: '99.7%'
      },
      readingTime: '22 min read',
      tags: ['Enterprise AI', 'AI Transformation', 'ROI', 'Business Intelligence'],
      featured: true
    },
    {
      id: 'healthcare-transformation',
      title: 'AI 2025 Healthcare Transformation: $1.2B Hospital System Achieves 580% ROI',
      type: 'case-study',
      url: '/case-studies/ai-2025-healthcare-transformation-ultimate-success',
      metrics: {
        roi: '580%',
        savings: '$115.9M annually',
        efficiency: '89% improvement',
        satisfaction: '96%'
      },
      readingTime: '18 min read',
      tags: ['Healthcare', 'AI Transformation', 'ROI', 'Patient Care'],
      featured: true
    },
    {
      id: 'retail-transformation',
      title: 'AI 2025: The Retail Transformation Revolution - Ultimate Guide to 450% ROI',
      type: 'blog',
      url: '/blog/ai-2025-retail-transformation-ultimate-guide',
      metrics: {
        roi: '450%',
        savings: '$16.8M annually',
        efficiency: '67% improvement',
        satisfaction: '95%'
      },
      readingTime: '20 min read',
      tags: ['Retail AI', 'E-commerce', 'ROI', 'Customer Experience'],
      featured: true
    },
    {
      id: 'manufacturing-transformation',
      title: 'AI 2025 Manufacturing Transformation: $3.2B Company Achieves 620% ROI',
      type: 'case-study',
      url: '/case-studies/ai-2025-manufacturing-transformation-ultimate-success',
      metrics: {
        roi: '620%',
        savings: '$313.3M annually',
        efficiency: '89% improvement',
        satisfaction: '96.2%'
      },
      readingTime: '19 min read',
      tags: ['Manufacturing', 'AI Transformation', 'ROI', 'Production'],
      featured: true
    },
    {
      id: 'implementation-checklist-ultimate',
      title: 'AI 2025 Implementation Checklist: Ultimate Guide to 600% ROI Success',
      type: 'resource',
      url: '/resources/ai-2025-implementation-checklist-ultimate',
      metrics: {
        roi: '600%',
        savings: '$10M+ annually',
        efficiency: '70% improvement',
        satisfaction: '99%'
      },
      readingTime: '25 min read',
      tags: ['AI Implementation', 'Checklist', 'ROI', 'Best Practices'],
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentItems.length]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📚';
      default:
        return '📄';
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

  if (!isVisible) return null;

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-ping"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ultimate AI Success Stories
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover how leading companies achieved 500%+ ROI through strategic AI implementation. 
            Real case studies, proven strategies, and actionable insights.
          </p>
        </div>

        {/* Content Showcase */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Content Card */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{getTypeIcon(currentItem.type)}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(currentItem.type)}`}>
                  {currentItem.type.replace('-', ' ').toUpperCase()}
                </span>
                <span className="text-sm opacity-75">{currentItem.readingTime}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                {currentItem.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {currentItem.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={currentItem.url}
                className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Full Story →
              </Link>
            </div>

            {/* Metrics */}
            <div className="lg:w-80">
              <h4 className="text-xl font-bold mb-6">Success Metrics</h4>
              <div className="space-y-4">
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-300 mb-1">
                    {currentItem.metrics.roi}
                  </div>
                  <div className="text-sm opacity-90">ROI Achieved</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-300 mb-1">
                    {currentItem.metrics.savings}
                  </div>
                  <div className="text-sm opacity-90">Annual Savings</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-300 mb-1">
                    {currentItem.metrics.efficiency}
                  </div>
                  <div className="text-sm opacity-90">Efficiency Gain</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-pink-300 mb-1">
                    {currentItem.metrics.satisfaction}
                  </div>
                  <div className="text-sm opacity-90">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mb-8">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Case Studies
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Browse Resources
            </Link>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          aria-label="Close showcase"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UltimateContent2025Showcase;
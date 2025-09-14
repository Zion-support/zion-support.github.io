'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi?: string;
    savings?: string;
    satisfaction?: string;
    efficiency?: string;
  };
  readingTime?: string;
  featured?: boolean;
}

const UltimateContentShowcase2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent: ContentItem[] = [
    {
      id: 'advanced-automation-mastery',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      type: 'blog',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '500%+',
        savings: '$2.8B',
        satisfaction: '98%',
        efficiency: '340%'
      },
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings - Ultimate Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        satisfaction: '96%',
        efficiency: '89%'
      },
      readingTime: '20 min read',
      featured: true
    },
    {
      id: 'implementation-framework',
      title: 'AI Implementation Ultimate Success Framework 2025',
      type: 'resource',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      metrics: {
        roi: '500%+',
        savings: '60-80%',
        satisfaction: '98%',
        efficiency: '70-90%'
      },
      readingTime: '15 min read',
      featured: true
    }
  ];

  const successMetrics = [
    { label: 'Average ROI', value: '500%+', icon: '📈' },
    { label: 'Total Savings', value: '$2.8B+', icon: '💰' },
    { label: 'Client Satisfaction', value: '98%', icon: '⭐' },
    { label: 'Efficiency Gain', value: '340%', icon: '⚡' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
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

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ultimate AI Success Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI implementation strategies, success stories, and frameworks that are delivering 500%+ ROI for Fortune 500 companies.
          </p>
        </div>

        {/* Success Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {successMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-2">{metric.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Content Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredContent.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Content Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-2xl">{getTypeIcon(item.type)}</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                            {item.type.replace('-', ' ').toUpperCase()}
                          </span>
                          {item.featured && (
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                              FEATURED
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                          {item.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-6 text-lg">
                          {item.type === 'blog' && 'Comprehensive guide to advanced AI automation strategies delivering 500%+ ROI across enterprise organizations.'}
                          {item.type === 'case-study' && 'Real-world success story of a Fortune 500 company achieving $2.8B in annual savings through comprehensive AI transformation.'}
                          {item.type === 'resource' && 'Proven framework for AI implementation success, tested across 500+ implementations with 98% client satisfaction.'}
                        </p>

                        {/* Metrics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          {Object.entries(item.metrics).map(([key, value]) => (
                            <div key={key} className="bg-gray-50 rounded-lg p-3 text-center">
                              <div className="text-lg font-bold text-gray-900">{value}</div>
                              <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-4">
                          <Link
                            href={item.url}
                            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                          >
                            Read Full {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                          </Link>
                          <span className="text-sm text-gray-500">{item.readingTime}</span>
                        </div>
                      </div>

                      {/* Visual Element */}
                      <div className="lg:w-80">
                        <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-6 h-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-6xl mb-4">🤖</div>
                            <div className="text-2xl font-bold text-gray-900 mb-2">AI 2025</div>
                            <div className="text-gray-600">Revolutionary Content</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation Guides</h3>
            <p className="text-gray-600 mb-4">
              Step-by-step frameworks and methodologies for successful AI implementation.
            </p>
            <Link href="/resources" className="text-purple-600 font-semibold hover:text-purple-800">
              Explore Guides →
            </Link>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Success Stories</h3>
            <p className="text-gray-600 mb-4">
              Real-world case studies showcasing 500%+ ROI achievements.
            </p>
            <Link href="/case-studies" className="text-purple-600 font-semibold hover:text-purple-800">
              View Case Studies →
            </Link>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Latest Insights</h3>
            <p className="text-gray-600 mb-4">
              Cutting-edge AI trends and strategies for 2025 and beyond.
            </p>
            <Link href="/blog" className="text-purple-600 font-semibold hover:text-purple-800">
              Read Articles →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Achieve 500%+ ROI?</h3>
            <p className="text-lg mb-6 opacity-90">
              Get your personalized AI implementation assessment and discover how to transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Assessment
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;
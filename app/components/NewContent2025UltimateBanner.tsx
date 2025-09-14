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
  };
  featured?: boolean;
}

const NewContent2025UltimateBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const newContent: ContentItem[] = [
    {
      id: 'advanced-automation-mastery',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      type: 'blog',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '500%+',
        savings: '$2.8B',
        satisfaction: '98%'
      },
      featured: true
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        satisfaction: '96%'
      },
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
        satisfaction: '98%'
      },
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = newContent[currentIndex];

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
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">✨ NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Discover the latest AI implementation strategies delivering 500%+ ROI for Fortune 500 companies
          </p>
        </div>

        {/* Content Showcase */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Content Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{getTypeIcon(currentContent.type)}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(currentContent.type)}`}>
                  {currentContent.type.replace('-', ' ').toUpperCase()}
                </span>
                {currentContent.featured && (
                  <span className="px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-sm font-medium">
                    FEATURED
                  </span>
                )}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h3>
              
              <p className="text-lg opacity-90 mb-6">
                {currentContent.type === 'blog' && 'Comprehensive guide to advanced AI automation strategies delivering 500%+ ROI across enterprise organizations.'}
                {currentContent.type === 'case-study' && 'Real-world success story of a Fortune 500 company achieving $2.8B in annual savings through comprehensive AI transformation.'}
                {currentContent.type === 'resource' && 'Proven framework for AI implementation success, tested across 500+ implementations with 98% client satisfaction.'}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-4 mb-6">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <div className="text-lg font-bold">{value}</div>
                    <div className="text-xs opacity-80 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 text-center"
                >
                  Read Full {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                </Link>
                <Link
                  href="/content"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
                >
                  View All Content
                </Link>
              </div>
            </div>

            {/* Visual Element */}
            <div className="lg:w-80">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 text-center">
                <div className="text-6xl mb-4">🚀</div>
                <div className="text-2xl font-bold mb-2">AI 2025</div>
                <div className="opacity-90">Revolutionary Content</div>
                <div className="mt-4 text-sm opacity-80">
                  {currentIndex + 1} of {newContent.length}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          {newContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">500%+</div>
            <div className="text-sm opacity-80">Average ROI</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">$2.8B+</div>
            <div className="text-sm opacity-80">Total Savings</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">98%</div>
            <div className="text-sm opacity-80">Satisfaction</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">340%</div>
            <div className="text-sm opacity-80">Efficiency</div>
          </div>
        </div>

        {/* Dismiss Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/70 hover:text-white text-sm underline"
          >
            Dismiss this banner
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateBanner;
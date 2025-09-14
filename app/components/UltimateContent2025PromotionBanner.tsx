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
    efficiency?: string;
    success_rate?: string;
  };
  reading_time: string;
  featured: boolean;
}

const UltimateContent2025PromotionBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const newContent: ContentItem[] = [
    {
      id: 'ai-enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - Ultimate Success Guide',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '1,200%',
        savings: '$500M+',
        efficiency: '99.8%',
        success_rate: '98%'
      },
      reading_time: '35 min read',
      featured: true
    },
    {
      id: 'fortune-500-ai-success',
      title: 'Fortune 500 AI Success 2025: $2.8B Savings Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-success-2025',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        efficiency: '340%',
        success_rate: '98%'
      },
      reading_time: '15 min read',
      featured: true
    },
    {
      id: 'ai-implementation-guide',
      title: 'AI Implementation Guide 2025: Complete Roadmap to Success',
      type: 'resource',
      url: '/resources/ai-implementation-guide-2025',
      metrics: {
        roi: '1,200%',
        savings: '$500M+',
        efficiency: '99%',
        success_rate: '99%'
      },
      reading_time: '30 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-content-2025-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = newContent[currentIndex];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-white/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-4 left-8 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-8 right-4 w-2 h-2 bg-white/25 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content showcase */}
          <div className="flex-1 pr-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🚀</span>
                <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                  NEW ULTIMATE CONTENT 2025
                </span>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(currentContent.type)}`}>
                {getTypeIcon(currentContent.type)} {currentContent.type.replace('-', ' ').toUpperCase()}
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
              {currentContent.title}
            </h2>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">ROI:</span>
                <span className="text-lg font-bold text-yellow-300">{currentContent.metrics.roi}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Savings:</span>
                <span className="text-lg font-bold text-green-300">{currentContent.metrics.savings}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Efficiency:</span>
                <span className="text-lg font-bold text-blue-300">{currentContent.metrics.efficiency}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Success Rate:</span>
                <span className="text-lg font-bold text-purple-300">{currentContent.metrics.success_rate}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-sm text-white/90">
              <span>⏱️ {currentContent.reading_time}</span>
              <span>⭐ Featured Content</span>
              <span>🎯 High-Impact Results</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col space-y-3">
            <Link
              href={currentContent.url}
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center whitespace-nowrap"
            >
              Read Now
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center whitespace-nowrap"
            >
              View All Resources
            </Link>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {newContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`Go to content ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025PromotionBanner;
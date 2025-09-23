'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  roi: string;
  savings: string;
  readingTime: string;
  featured: boolean;
}

const UltimateAutomationRevolution50000ROIBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: 'ultimate-automation-revolution-50000-roi',
      title: 'AI 2025: The Ultimate Automation Revolution - 50,000% ROI Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-automation-revolution-50000-roi-breakthrough',
      roi: '50,000%',
      savings: '$2.5 Trillion',
      readingTime: '45 min read',
      featured: true
    },
    {
      id: 'fortune-500-ultimate-automation-50000-roi',
      title: 'Fortune 500 Ultimate Automation Success: $2.5 Trillion Annual Savings - 50,000% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ultimate-automation-50000-roi-success-story',
      roi: '50,000%',
      savings: '$2.5 Trillion',
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'ultimate-automation-implementation-guide-50000-roi',
      title: 'Ultimate Automation Implementation Guide 2025: Complete Roadmap to 50,000% ROI',
      type: 'resource',
      url: '/resources/ultimate-automation-implementation-guide-50000-roi',
      roi: '50,000%',
      savings: '$2.5 Trillion',
      readingTime: '60 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [contentItems.length]);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-automation-50000-roi-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-automation-50000-roi-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentItem = contentItems[currentIndex];

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

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-4 right-4 w-32 h-32 bg-yellow-400/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 bg-green-400/10 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center mb-4">
                <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold mr-3">
                  🚀 NEW BREAKTHROUGH
                </div>
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  50,000% ROI ACHIEVED
                </div>
              </div>

              {/* Main content */}
              <div className="mb-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Ultimate Automation Revolution: 50,000% ROI Breakthrough
                </h2>
                <p className="text-lg text-blue-100 mb-4">
                  Fortune 500 companies are achieving unprecedented 50,000% ROI through next-generation AI automation. 
                  Discover the revolutionary technologies and strategies transforming business operations.
                </p>
              </div>

              {/* Current content item */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">{getTypeIcon(currentItem.type)}</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(currentItem.type)}`}>
                        {currentItem.type.toUpperCase()}
                      </span>
                      <span className="ml-2 text-yellow-300 text-sm">⭐ FEATURED</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {currentItem.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-blue-100">
                      <span className="bg-green-500 text-white px-2 py-1 rounded font-bold">
                        {currentItem.roi} ROI
                      </span>
                      <span className="bg-blue-500 text-white px-2 py-1 rounded font-bold">
                        {currentItem.savings} Savings
                      </span>
                      <span className="bg-purple-500 text-white px-2 py-1 rounded font-bold">
                        {currentItem.readingTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress indicator */}
              <div className="flex items-center mb-4">
                <div className="flex-1 bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-yellow-400 to-green-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentIndex + 1) / contentItems.length) * 100}%` }}
                  ></div>
                </div>
                <span className="ml-3 text-sm text-blue-100">
                  {currentIndex + 1} of {contentItems.length}
                </span>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={currentItem.url}
                  className="bg-gradient-to-r from-yellow-400 to-green-400 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-green-500 transition-all duration-300 transform hover:scale-105"
                >
                  Read {currentItem.type === 'blog' ? 'Article' : currentItem.type === 'case-study' ? 'Case Study' : 'Guide'}
                </Link>
                <Link
                  href="/resources/ultimate-automation-implementation-guide-50000-roi"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  Get Implementation Guide
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-blue-400 text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Start Your Transformation
                </Link>
              </div>
            </div>

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="ml-4 text-white/70 hover:text-white transition-colors"
              aria-label="Dismiss banner"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom highlight bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400"></div>
    </div>
  );
};

export default UltimateAutomationRevolution50000ROIBanner;
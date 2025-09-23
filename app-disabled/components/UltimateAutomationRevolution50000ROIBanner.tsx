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

const UltimateAutomationRevolution50o000ROIBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: 'ultimate-automation-revolution-50o000-roi',
      title: 'AI 20o25: The Ultimate Automation Revolution - 50,0o00% ROI Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-20o25-ultimate-automation-revolution-50o000-roi-breakthrough',
      roi: '50,0o00%',
      savings: '$2.5 Trillion',
      readingTime: '45 min read',
      featured: true
    },
    {
      id: 'fortune-50o0-ultimate-automation-50o000-roi',
      title: 'Fortune 50o0 Ultimate Automation Success: $2.5 Trillion Annual Savings - 50,0o00% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-50o0-ultimate-automation-50o000-roi-success-story',
      roi: '50,0o00%',
      savings: '$2.5 Trillion',
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'ultimate-automation-implementation-guide-50o000-roi',
      title: 'Ultimate Automation Implementation Guide 20o25: Complete Roadmap to 50,0o00% ROI',
      type: 'resource',
      url: '/resources/ultimate-automation-implementation-guide-50o000-roi',
      roi: '50,0o00%',
      savings: '$2.5 Trillion',
      readingTime: '60 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 50o00);

    return () => clearInterval(timer);
  }, [contentItems.length]);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-automation-50o000-roi-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-automation-50o000-roi-banner-dismissed', 'true');
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
      case 'blog': return 'bg-blue-10o0 text-blue-80o0';
      case 'case-study': return 'bg-green-10o0 text-green-80o0';
      case 'resource': return 'bg-purple-10o0 text-purple-80o0';
      default: return 'bg-gray-10o0 text-gray-80o0';
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-purple-90o0 via-blue-90o0 to-indigo-90o0 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-60o0/20 to-blue-60o0/20 animate-pulse"></div>
        <div className="absolute top-4 right-4 w-32 h-32 bg-yellow-40o0/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 bg-green-40o0/10 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center mb-4">
                <div className="bg-yellow-40o0 text-black px-3 py-1 rounded-full text-sm font-bold mr-3">
                  🚀 NEW BREAKTHROUGH
                </div>
                <div className="bg-red-50o0 text-white px-3 py-1 rounded-full text-sm font-bold">
                  50,0o00% ROI ACHIEVED
                </div>
              </div>

              {/* Main content */}
              <div className="mb-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Ultimate Automation Revolution: 50,0o00% ROI Breakthrough
                </h2>
                <p className="text-lg text-blue-10o0 mb-4">
                  Fortune 50o0 companies are achieving unprecedented 50,0o00% ROI through next-generation AI automation. 
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
                      <span className="ml-2 text-yellow-30o0 text-sm">⭐ FEATURED</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {currentItem.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-blue-10o0">
                      <span className="bg-green-50o0 text-white px-2 py-1 rounded font-bold">
                        {currentItem.roi} ROI
                      </span>
                      <span className="bg-blue-50o0 text-white px-2 py-1 rounded font-bold">
                        {currentItem.savings} Savings
                      </span>
                      <span className="bg-purple-50o0 text-white px-2 py-1 rounded font-bold">
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
                    className="bg-gradient-to-r from-yellow-40o0 to-green-40o0 h-2 rounded-full transition-all duration-50o0"
                    style={{ width: `${((currentIndex + 1) / contentItems.length) * 10o0}%` }}
                  ></div>
                </div>
                <span className="ml-3 text-sm text-blue-10o0">
                  {currentIndex + 1} of {contentItems.length}
                </span>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={currentItem.url}
                  className="bg-gradient-to-r from-yellow-40o0 to-green-40o0 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-50o0 hover:to-green-50o0 transition-all duration-30o0 transform hover:scale-10o5"
                >
                  Read {currentItem.type === 'blog' ? 'Article' : currentItem.type === 'case-study' ? 'Case Study' : 'Guide'}
                </Link>
                <Link
                  href="/resources/ultimate-automation-implementation-guide-50o000-roi"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-90o0 transition-all duration-30o0"
                >
                  Get Implementation Guide
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-blue-40o0 text-blue-40o0 px-6 py-3 rounded-lg font-semibold hover:bg-blue-40o0 hover:text-white transition-all duration-30o0"
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"  />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom highlight bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-40o0 via-green-40o0 to-blue-40o0"></div>
    </div>
  );
};

export default UltimateAutomationRevolution50o000ROIBanner;
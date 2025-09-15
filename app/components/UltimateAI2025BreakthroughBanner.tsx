'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  type: string;
  url: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency: string;
  };
  readingTime: string;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
    title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide to 2,500% ROI',
    type: 'blog',
    url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
    metrics: {
      roi: '2,500%',
      savings: '$3.2B+',
      efficiency: '95%'
    },
    readingTime: '25 min read'
  },
  {
    id: 'fortune-500-ai-transformation-2500-roi-success-story',
    title: 'Fortune 500 AI Transformation Success: $3.2B Annual Savings - 2,500% ROI Success Story',
    type: 'case-study',
    url: '/case-studies/fortune-500-ai-transformation-2500-roi-success-story',
    metrics: {
      roi: '2,500%',
      savings: '$3.2B',
      efficiency: '99.2%'
    },
    readingTime: '18 min read'
  },
  {
    id: 'ai-2025-implementation-ultimate-roadmap-2500-roi',
    title: 'AI 2025 Implementation Ultimate Roadmap: From Strategy to 2,500% ROI in 18 Months',
    type: 'resource',
    url: '/resources/ai-2025-implementation-ultimate-roadmap-2500-roi',
    metrics: {
      roi: '2,500%',
      savings: '$2.5B-5B',
      efficiency: '85-95%'
    },
    readingTime: '25 min read'
  }
];

const UltimateAI2025BreakthroughBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-ai-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    if (isVisible && !isDismissed) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('ultimate-ai-2025-banner-dismissed', 'true');
  };

  if (!isVisible || isDismissed) return null;

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-white/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-6 left-12 w-1 h-1 bg-white/40 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-1500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-center mb-4">
              <span className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 text-sm font-medium mb-2">
                🚀 ULTIMATE AI 2025 BREAKTHROUGH
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              {currentItem.title}
            </h2>
            
            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-green-400 font-bold text-lg">2,500% ROI</span>
                <span className="text-gray-300 text-sm">Proven Results</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400 font-bold text-lg">{currentItem.metrics.savings}</span>
                <span className="text-gray-300 text-sm">Annual Savings</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-400 font-bold text-lg">{currentItem.metrics.efficiency}</span>
                <span className="text-gray-300 text-sm">Efficiency Gain</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-400 font-bold text-lg">{currentItem.readingTime}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href={currentItem.url}
                className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Full {currentItem.type === 'case-study' ? 'Case Study' : currentItem.type === 'resource' ? 'Guide' : 'Article'}
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
              >
                Get Implementation Help
              </Link>
            </div>
          </div>

          {/* Progress indicators */}
          <div className="flex flex-col items-center space-y-2">
            <div className="flex space-x-2 mb-4">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            <div className="text-sm text-gray-300">
              {currentIndex + 1} of {contentItems.length}
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Success metrics bar */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-400">2,500%</div>
            <div className="text-sm text-gray-300">Average ROI</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">$3.2B+</div>
            <div className="text-sm text-gray-300">Annual Savings</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">95%</div>
            <div className="text-sm text-gray-300">Efficiency Gain</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-orange-400">18</div>
            <div className="text-sm text-gray-300">Months to ROI</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateAI2025BreakthroughBanner;
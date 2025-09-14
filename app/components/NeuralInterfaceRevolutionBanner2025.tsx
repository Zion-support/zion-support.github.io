'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  type: string;
  url: string;
  metrics: {
    roi?: string;
    savings?: string;
    efficiency?: string;
    accuracy?: string;
  };
  readingTime: string;
}

const NeuralInterfaceRevolutionBanner2025: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: 'neural-interface-revolution',
      title: 'AI 2025: The Neural Interface Revolution - Enterprise Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-neural-interface-revolution-enterprise-breakthrough',
      metrics: {
        roi: '1,200%',
        savings: '$500M+',
        efficiency: '450%',
        accuracy: '99.2%'
      },
      readingTime: '25 min read'
    },
    {
      id: 'fortune-500-neural-transformation',
      title: 'Fortune 500 Neural Interface Transformation: $2.1B Annual Savings in 8 Months',
      type: 'case-study',
      url: '/case-studies/fortune-500-neural-interface-transformation-2025',
      metrics: {
        roi: '1,400%',
        savings: '$2.1B',
        efficiency: '450%',
        accuracy: '99.7%'
      },
      readingTime: '18 min read'
    },
    {
      id: 'neural-interface-implementation-guide',
      title: 'Neural Interface Implementation Master Guide 2025: From Strategy to 1,400% ROI',
      type: 'resource',
      url: '/resources/neural-interface-implementation-master-guide-2025',
      metrics: {
        roi: '1,400%',
        savings: '$500M+',
        efficiency: '450%',
        accuracy: '99.2%'
      },
      readingTime: '30 min read'
    }
  ];

  useEffect(() => {
    // Check if banner was dismissed
    const dismissed = localStorage.getItem('neural-interface-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  useEffect(() => {
    if (isDismissed) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentItems.length, isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('neural-interface-banner-dismissed', 'true');
  };

  if (isDismissed) return null;

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute bottom-4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-2000"></div>
        <div className="absolute bottom-8 right-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping animation-delay-3000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">🧠 NEURAL INTERFACE REVOLUTION 2025</span>
                </div>
                <div className="hidden sm:flex items-center space-x-2 text-sm text-cyan-200">
                  <span>NEW</span>
                  <div className="w-1 h-1 bg-cyan-200 rounded-full"></div>
                  <span>BREAKTHROUGH</span>
                </div>
              </div>

              {/* Content showcase */}
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight">
                  {currentItem.title}
                </h2>
                
                {/* Metrics grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                  <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <div className="text-lg font-bold text-cyan-300">{currentItem.metrics.roi}</div>
                    <div className="text-xs text-gray-300">ROI</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <div className="text-lg font-bold text-green-300">{currentItem.metrics.savings}</div>
                    <div className="text-xs text-gray-300">Annual Savings</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <div className="text-lg font-bold text-purple-300">{currentItem.metrics.efficiency}</div>
                    <div className="text-xs text-gray-300">Efficiency</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <div className="text-lg font-bold text-yellow-300">{currentItem.metrics.accuracy}</div>
                    <div className="text-xs text-gray-300">Accuracy</div>
                  </div>
                </div>

                {/* Content type and reading time */}
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <span className="bg-white/20 rounded-full px-3 py-1">
                    {currentItem.type === 'blog' ? '📝 Blog Post' : 
                     currentItem.type === 'case-study' ? '📊 Case Study' : '📚 Resource Guide'}
                  </span>
                  <span>{currentItem.readingTime}</span>
                  <span className="text-cyan-300 font-medium">Featured Content</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={currentItem.url}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Read Full {currentItem.type === 'blog' ? 'Article' : 
                             currentItem.type === 'case-study' ? 'Case Study' : 'Guide'} →
                </Link>
                <Link
                  href="/resources/neural-interface-implementation-master-guide-2025"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm"
                >
                  Implementation Guide
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Consultation
                </Link>
              </div>
            </div>

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="ml-4 p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
              aria-label="Dismiss banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-cyan-400 w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to content ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
    </div>
  );
};

export default NeuralInterfaceRevolutionBanner2025;
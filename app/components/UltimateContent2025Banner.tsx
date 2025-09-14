'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContent2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'enterprise-ai-transformation',
      title: 'AI 2025: The Enterprise AI Transformation Ultimate Guide',
      description: '$5.2T Market Revolution - 600% ROI Framework',
      url: '/blog/ai-2025-enterprise-ai-transformation-ultimate-guide',
      type: 'Blog Post',
      metrics: {
        roi: '600%',
        market: '$5.2T',
        savings: '$2.8B',
        timeframe: '12 months'
      },
      badge: 'Ultimate Guide',
      color: 'from-purple-600 to-blue-600'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings',
      description: '567% ROI in 6 Months - Complete Success Story',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success',
      type: 'Case Study',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        timeframe: '6 months',
        facilities: '156'
      },
      badge: 'Success Story',
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 'implementation-master-guide',
      title: 'AI 2025 Implementation Ultimate Master Guide',
      description: 'From Strategy to 600% ROI in 12 Months',
      url: '/resources/ai-2025-implementation-ultimate-master-guide',
      type: 'Resource',
      metrics: {
        roi: '600%',
        success: '98%',
        timeframe: '12 months',
        companies: '500+'
      },
      badge: 'Master Guide',
      color: 'from-orange-600 to-red-600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [content.length]);

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

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-bounce"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-500/30 rounded-full animate-bounce delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-orange-500/30 rounded-full animate-bounce delay-3000"></div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-400">NEW CONTENT 2025</span>
                </div>
                <div className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full">
                  <span className="text-xs font-bold text-white">{currentContent.badge}</span>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                {currentContent.title}
              </h2>
              
              <p className="text-lg text-gray-300 mb-4 max-w-2xl">
                {currentContent.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                  <div className="text-xs text-gray-300">ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                  <div className="text-xs text-gray-300">Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.timeframe}</div>
                  <div className="text-xs text-gray-300">Timeframe</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold text-orange-400">
                    {currentContent.metrics.market || currentContent.metrics.facilities || currentContent.metrics.companies || currentContent.metrics.success}
                  </div>
                  <div className="text-xs text-gray-300">
                    {currentContent.metrics.market ? 'Market' : 
                     currentContent.metrics.facilities ? 'Facilities' : 
                     currentContent.metrics.companies ? 'Companies' : 'Success Rate'}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Read {currentContent.type}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link
                  href="/resources"
                  className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  View All Resources
                </Link>
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="ml-4 p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Dismiss banner"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025Banner;
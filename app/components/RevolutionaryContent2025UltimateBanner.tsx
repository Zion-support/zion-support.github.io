'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const RevolutionaryContent2025UltimateBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'enterprise-transformation',
      title: '🚀 AI 2025: The Enterprise AI Transformation Revolution',
      description: 'Discover the $5.2T market opportunity and 600% ROI framework that\'s transforming Fortune 500 companies worldwide.',
      url: '/blog/ai-2025-enterprise-ai-transformation-ultimate-guide',
      type: 'Ultimate Guide',
      metrics: {
        market: '$5.2T',
        roi: '600%',
        savings: '$2.8B',
        companies: '500+'
      },
      color: 'from-purple-600 via-blue-600 to-indigo-600',
      badge: 'Revolutionary'
    },
    {
      id: 'fortune-500-success',
      title: '🏆 Fortune 500 AI Success: $2.8B Annual Savings',
      description: 'Real-world case study: How a Fortune 500 company achieved 567% ROI and $2.8B savings in just 6 months.',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success',
      type: 'Success Story',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        timeframe: '6 months',
        facilities: '156'
      },
      color: 'from-green-600 via-emerald-600 to-teal-600',
      badge: 'Breakthrough'
    },
    {
      id: 'implementation-guide',
      title: '📚 AI Implementation Master Guide 2025',
      description: 'Complete framework for achieving 600% ROI in 12 months. Used by 500+ Fortune 500 companies worldwide.',
      url: '/resources/ai-2025-implementation-ultimate-master-guide',
      type: 'Master Guide',
      metrics: {
        roi: '600%',
        success: '98%',
        timeframe: '12 months',
        companies: '500+'
      },
      color: 'from-orange-600 via-red-600 to-pink-600',
      badge: 'Master Guide'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [content.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionary-content-2025-ultimate-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-content-2025-ultimate-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-purple-600/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-8 left-8 w-24 h-24 bg-purple-500/20 rounded-full animate-bounce"></div>
          <div className="absolute top-24 right-16 w-20 h-20 bg-blue-500/20 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-16 left-1/3 w-16 h-16 bg-green-500/20 rounded-full animate-bounce delay-2000"></div>
          <div className="absolute bottom-24 right-1/4 w-18 h-18 bg-orange-500/20 rounded-full animate-bounce delay-3000"></div>
          <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-pink-500/20 rounded-full animate-bounce delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-green-400 uppercase tracking-wide">Revolutionary Content 2025</span>
                </div>
                <div className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full">
                  <span className="text-sm font-bold text-white">{currentContent.badge}</span>
                </div>
                <div className="px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-full">
                  <span className="text-sm font-bold text-white">NEW</span>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h2>
              
              <p className="text-xl text-gray-300 mb-6 max-w-3xl leading-relaxed">
                {currentContent.description}
              </p>

              {/* Enhanced Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-green-400 mb-1">{currentContent.metrics.roi}</div>
                  <div className="text-sm text-gray-300 font-medium">ROI</div>
                </div>
                <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-blue-400 mb-1">{currentContent.metrics.savings}</div>
                  <div className="text-sm text-gray-300 font-medium">Savings</div>
                </div>
                <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-purple-400 mb-1">{currentContent.metrics.timeframe || currentContent.metrics.market}</div>
                  <div className="text-sm text-gray-300 font-medium">
                    {currentContent.metrics.timeframe ? 'Timeframe' : 'Market Size'}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-orange-400 mb-1">
                    {currentContent.metrics.companies || currentContent.metrics.facilities || currentContent.metrics.success}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    {currentContent.metrics.companies ? 'Companies' : 
                     currentContent.metrics.facilities ? 'Facilities' : 'Success Rate'}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Read {currentContent.type}
                  <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link
                  href="/resources"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Explore All Resources
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Consultation
                </Link>
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="ml-6 p-3 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
              aria-label="Dismiss banner"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Enhanced Progress Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
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

export default RevolutionaryContent2025UltimateBanner;
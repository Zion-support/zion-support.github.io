'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, XMarkIcon, StarIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const UltimateAIBreakthrough2025Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const featuredContent = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      type: 'Blog Post',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      metrics: {
        roi: '1,200%',
        savings: '$500M+',
        efficiency: '99.8%',
        success: '98%'
      },
      description: 'Transform your business with cutting-edge AI solutions that deliver unprecedented results.',
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings with 1,200% ROI',
      type: 'Case Study',
      url: '/case-studies/fortune-500-ai-transformation-1200-percent-roi-ultimate-success',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '18 months',
        efficiency: '156%'
      },
      description: 'Real-world success story of how a global manufacturing giant achieved breakthrough results.',
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework: Complete Roadmap to 1,000%+ ROI',
      type: 'Resource',
      url: '/resources/ai-2025-implementation-ultimate-success-framework',
      metrics: {
        roi: '1,000%+',
        success: '94%',
        timeline: '18 months',
        projects: '500+'
      },
      description: 'The definitive guide to AI transformation success with proven methodologies.',
      readingTime: '30 min read',
      featured: true
    }
  ];

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('ultimate-ai-breakthrough-2025-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    // Auto-rotate slides every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('ultimate-ai-breakthrough-2025-banner-dismissed', 'true');
  };

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-purple-500/10 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <StarIcon className="h-6 w-6 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400">NEW ULTIMATE BREAKTHROUGH</span>
            </div>
            <button
              onClick={handleDismiss}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Dismiss banner"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Section */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  AI 2025: The Ultimate Breakthrough Revolution
                </h2>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Discover the breakthrough strategies that deliver <span className="text-yellow-400 font-semibold">1,200% ROI</span> and 
                  <span className="text-yellow-400 font-semibold"> $500M+ savings</span> for Fortune 500 companies.
                </p>
              </div>

              {/* Featured Content Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 bg-yellow-400 text-purple-900 text-xs font-semibold rounded-full">
                    {currentContent.type}
                  </span>
                  <span className="text-sm text-gray-300">{currentContent.readingTime}</span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  {currentContent.title}
                </h3>
                
                <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                  {currentContent.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <ChartBarIcon className="h-4 w-4 text-green-400" />
                    <div>
                      <div className="text-xs text-gray-300">ROI</div>
                      <div className="text-sm font-semibold text-green-400">{currentContent.metrics.roi}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CurrencyDollarIcon className="h-4 w-4 text-blue-400" />
                    <div>
                      <div className="text-xs text-gray-300">Savings</div>
                      <div className="text-sm font-semibold text-blue-400">{currentContent.metrics.savings}</div>
                    </div>
                  </div>
                </div>

                <Link
                  href={currentContent.url}
                  className="inline-flex items-center text-sm font-semibold text-white hover:text-yellow-400 transition-colors"
                >
                  Read Full {currentContent.type}
                  <ChevronRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>

              {/* Slide Indicators */}
              <div className="flex space-x-2">
                {featuredContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleSlideChange(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Statistics Section */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">Breakthrough Results</h3>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">1,200%</div>
                  <div className="text-sm text-gray-300">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">$2.8B</div>
                  <div className="text-sm text-gray-300">Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">99.8%</div>
                  <div className="text-sm text-gray-300">Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
                  <div className="text-sm text-gray-300">Success Rate</div>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  href="/resources/ai-2025-implementation-ultimate-success-framework"
                  className="block w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 px-6 py-3 rounded-lg font-semibold text-center hover:from-yellow-300 hover:to-orange-400 transition-all transform hover:scale-105"
                >
                  Get Ultimate Implementation Framework
                </Link>
                
                <Link
                  href="/case-studies"
                  className="block w-full border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-purple-900 transition-colors"
                >
                  View All Success Stories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateAIBreakthrough2025Banner;
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, XMarkIcon, StarIcon, ChartBarIcon, ClockIcon } from '@heroicons/react/24/outline';

const UltimateContentRevolutionBanner2025 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('ultimate-content-revolution-banner-2025-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible && !isDismissed) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('ultimate-content-revolution-banner-2025-dismissed', 'true');
  };

  const featuredContent = [
    {
      id: 'advanced-automation-mastery',
      title: 'AI 2025: Advanced Automation Mastery - Ultimate Success Guide',
      type: 'Blog Post',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '340-1,200%',
        savings: '$2.8B',
        efficiency: '78-95%',
        satisfaction: '98%'
      },
      readingTime: '18 min read',
      isNew: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $5.2B Company Achieves 1,200% ROI',
      type: 'Case Study',
      url: '/case-studies/ai-transformation-fortune-500-ultimate-success-story-2025',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        timeline: '24 months',
        satisfaction: '98%'
      },
      readingTime: '12 min read',
      isNew: true
    },
    {
      id: 'implementation-framework',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Roadmap to 1,000%+ ROI',
      type: 'Resource',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      metrics: {
        roi: '1,000%+',
        success: '94%',
        timeline: '18 months',
        projects: '1,000+'
      },
      readingTime: '25 min read',
      isNew: true
    }
  ];

  if (!isVisible || isDismissed) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1 pr-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center space-x-2">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm font-medium bg-yellow-400/20 px-3 py-1 rounded-full">
                    NEW CONTENT REVOLUTION 2025
                  </span>
                </div>
                {currentContent.isNew && (
                  <span className="text-xs font-bold bg-red-500 px-2 py-1 rounded-full animate-pulse">
                    JUST PUBLISHED
                  </span>
                )}
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                🚀 Ultimate AI Content Collection: Transform Your Business with Proven Strategies
              </h2>

              <div className="mb-4">
                <div className="flex items-center space-x-4 text-sm text-blue-200">
                  <div className="flex items-center space-x-1">
                    <ChartBarIcon className="h-4 w-4" />
                    <span>ROI: {currentContent.metrics.roi}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ClockIcon className="h-4 w-4" />
                    <span>{currentContent.readingTime}</span>
                  </div>
                  <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                    {currentContent.type}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-100">
                  {currentContent.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-yellow-400 font-bold text-lg">{currentContent.metrics.roi}</div>
                    <div className="text-blue-200">Average ROI</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-green-400 font-bold text-lg">{currentContent.metrics.savings}</div>
                    <div className="text-blue-200">Annual Savings</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-purple-400 font-bold text-lg">{currentContent.metrics.efficiency || currentContent.metrics.success}</div>
                    <div className="text-blue-200">Success Rate</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-orange-400 font-bold text-lg">{currentContent.metrics.timeline || currentContent.metrics.satisfaction}</div>
                    <div className="text-blue-200">Timeline</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Read {currentContent.type}
                  <ChevronRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  Explore All Content
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300"
                >
                  Get AI Consultation
                </Link>
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Dismiss banner"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-yellow-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
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

export default UltimateContentRevolutionBanner2025;
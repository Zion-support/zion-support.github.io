'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, XMarkIcon, StarIcon, ChartBarIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline';

const UltimateAITransformation2025Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-ai-transformation-2025-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('ultimate-ai-transformation-2025-banner-dismissed', 'true');
  };

  const featuredContent = [
    {
      id: 'ultimate-enterprise-transformation',
      title: 'AI 2025: The Ultimate Enterprise Transformation Revolution',
      description: 'Discover how Fortune 500 companies are achieving 1,200% ROI with AI transformation. Complete implementation guide with real success stories.',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-enterprise-transformation-revolution-complete-guide',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '156%',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      isNew: true
    },
    {
      id: 'fortune-100-success',
      title: 'Fortune 100 AI Transformation: $5.2B Company Achieves 1,500% ROI',
      description: 'Real success story of a Fortune 100 company that achieved 1,500% ROI and $2.8 billion in annual savings within 24 months.',
      type: 'case-study',
      url: '/case-studies/fortune-100-ai-transformation-ultimate-success-story-2025',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        timeline: '24 months',
        automation: '94%'
      },
      readingTime: '18 min read',
      isNew: true
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework',
      description: 'The definitive guide to AI implementation success. Learn the proven framework that Fortune 500 companies use to achieve 1,500% ROI.',
      type: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-success-framework-complete-guide',
      metrics: {
        roi: '1,500%',
        success: '94%',
        timeline: '24 months',
        projects: '500+'
      },
      readingTime: '30 min read',
      isNew: true
    }
  ];

  useEffect(() => {
    if (!(isVisible && !isDismissed)) {
      return;
    }
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isVisible, isDismissed, featuredContent.length]);

  if (!isVisible || isDismissed) return null;

  const currentContent = (featuredContent[currentSlide] ?? featuredContent[0])!;

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center space-x-2">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm font-medium text-yellow-400">NEW ULTIMATE CONTENT</span>
                </div>
                {currentContent.isNew && (
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    JUST PUBLISHED
                  </span>
                )}
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                {currentContent.title}
              </h2>

              <p className="text-lg text-blue-100 mb-6 max-w-3xl leading-relaxed">
                {currentContent.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center space-x-2">
                  <ChartBarIcon className="h-5 w-5 text-green-400" />
                  <span className="text-sm font-semibold">
                    <span className="text-green-400">{currentContent.metrics.roi}</span> ROI
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CurrencyDollarIcon className="h-5 w-5 text-green-400" />
                  <span className="text-sm font-semibold">
                    <span className="text-green-400">{currentContent.metrics.savings}</span> Savings
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <ClockIcon className="h-5 w-5 text-blue-400" />
                  <span className="text-sm font-semibold text-blue-400">
                    {currentContent.readingTime}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Read {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                  <ChevronRightIcon className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
                >
                  Get Consultation
                </Link>
              </div>
            </div>

            <div className="hidden lg:block ml-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-4">Success Metrics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-200">Average ROI</span>
                    <span className="text-lg font-bold text-green-400">{currentContent.metrics.roi}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-200">Annual Savings</span>
                    <span className="text-lg font-bold text-green-400">{currentContent.metrics.savings}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-200">Efficiency</span>
                    <span className="text-lg font-bold text-blue-400">{currentContent.metrics.efficiency || '156%'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-200">Success Rate</span>
                    <span className="text-lg font-bold text-purple-400">{currentContent.metrics.success || '98%'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress indicators */}
          <div className="flex items-center justify-center space-x-2 mt-6">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Dismiss button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        aria-label="Dismiss banner"
      >
        <XMarkIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default UltimateAITransformation2025Banner;
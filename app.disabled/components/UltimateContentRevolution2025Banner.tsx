'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentRevolution2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentPieces = [
    {
      id: 'ultimate-content-revolution',
      title: 'AI 2025: The Ultimate Content Revolution - 25,000% ROI Breakthrough',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-content-revolution',
      metrics: {
        roi: '25,000%',
        savings: '$500B+',
        engagement: '99.9%',
        production: '3,000%'
      },
      description: 'Transform your business with revolutionary AI content strategies that deliver unprecedented results'
    },
    {
      id: 'fortune-500-content-success',
      title: 'Fortune 500 Ultimate Content Revolution: $500B Annual Savings - 25,000% ROI Success',
      type: 'case-study',
      url: '/case-studies/fortune-500-ultimate-content-revolution-25000-roi-success',
      metrics: {
        roi: '25,000%',
        savings: '$500B',
        engagement: '99.9%',
        production: '5,000%'
      },
      description: 'How a global technology leader achieved unprecedented results with AI content strategies'
    },
    {
      id: 'content-revolution-implementation',
      title: 'Ultimate Content Revolution Implementation Guide: Complete Roadmap to 25,000% ROI',
      type: 'resource',
      url: '/resources/ultimate-content-revolution-implementation-guide',
      metrics: {
        roi: '25,000%',
        timeline: '12 months',
        success: '99.7%',
        guide: 'Complete'
      },
      description: 'The definitive guide to transforming your content operations with revolutionary AI strategies'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [contentPieces.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-content-revolution-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-revolution-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = contentPieces[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              aria-label="Dismiss banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Main Content */}
            <div className="pr-8">
              <div className="flex items-center space-x-2 mb-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
                  🚀 NEW ULTIMATE BREAKTHROUGH
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-300">
                  25,000% ROI
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                {currentContent.title}
              </h2>

              <p className="text-lg text-white/90 mb-4 max-w-3xl">
                {currentContent.description}
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                  <div className="text-sm text-white/80">ROI</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                  <div className="text-sm text-white/80">Savings</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.engagement}</div>
                  <div className="text-sm text-white/80">Engagement</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.production}</div>
                  <div className="text-sm text-white/80">Production</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Read {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
                >
                  Get Implementation Guide
                </Link>
              </div>
            </div>
          </div>

          {/* Content Preview Cards */}
          <div className="hidden lg:block w-80">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4">Featured Content</h3>
              <div className="space-y-3">
                {contentPieces.map((content, index) => (
                  <div
                    key={content.id}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      index === currentSlide
                        ? 'bg-white/20 border-2 border-white/30'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-white/80 uppercase">
                        {content.type}
                      </span>
                      <span className="text-xs text-green-400 font-bold">
                        {content.metrics.roi} ROI
                      </span>
                    </div>
                    <h4 className="text-sm font-medium text-white line-clamp-2">
                      {content.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {contentPieces.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateContentRevolution2025Banner;
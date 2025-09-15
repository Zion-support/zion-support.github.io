'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025AnalyticsRevolutionBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const contentPieces = [
    {
      id: 'ai-analytics-revolution',
      title: 'AI 2025: The Advanced Analytics Revolution - Ultimate Enterprise Guide',
      description: 'Discover how Fortune 500 companies are achieving 600% ROI with next-generation AI analytics. Complete implementation guide with real success stories.',
      url: '/blog/ai-2025-advanced-analytics-revolution-ultimate-guide',
      type: 'Blog Post',
      metrics: {
        roi: '600%',
        savings: '$2.8B',
        accuracy: '99.7%',
        speed: '340%'
      },
      readTime: '18 min read'
    },
    {
      id: 'fortune-500-analytics-case',
      title: 'Fortune 500 AI Analytics Transformation: $2.8B Annual Savings with 600% ROI',
      description: 'How a $200B Fortune 500 company achieved 600% ROI and $2.8B annual savings through advanced AI analytics implementation.',
      url: '/case-studies/fortune-500-ai-analytics-transformation-600-percent-roi',
      type: 'Case Study',
      metrics: {
        roi: '600%',
        savings: '$2.8B',
        uptime: '99.7%',
        adoption: '95%'
      },
      readTime: '15 min read'
    }
  ];

  useEffect(() => {
    const dismissed = localStorage.getItem('ai-analytics-banner-dismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ai-analytics-banner-dismissed', 'true');
  };

  if (isDismissed) return null;

  const currentContent = contentPieces[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center mb-4">
              <div className="bg-white bg-opacity-20 rounded-full px-4 py-1 mr-4">
                <span className="text-sm font-bold">🚀 NEW AI ANALYTICS CONTENT</span>
              </div>
              <div className="bg-red-500 rounded-full px-3 py-1">
                <span className="text-xs font-bold">600% ROI PROVEN</span>
              </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="flex items-start space-x-2 mb-2">
                  <span className="bg-white bg-opacity-20 text-xs font-semibold px-2 py-1 rounded">
                    {currentContent.type}
                  </span>
                  <span className="text-xs text-blue-200">{currentContent.readTime}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
                  {currentContent.title}
                </h3>
                <p className="text-base md:text-lg opacity-90 mb-4 leading-relaxed">
                  {currentContent.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <Link
                    href={currentContent.url}
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Read Full Guide
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Get Consultation
                  </Link>
                </div>
              </div>

              {/* Metrics */}
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <h4 className="font-bold mb-3 text-center">Success Metrics</h4>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div>
                    <div className="text-2xl font-bold text-yellow-300">{currentContent.metrics.roi}</div>
                    <div className="text-xs opacity-80">ROI</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-300">{currentContent.metrics.savings}</div>
                    <div className="text-xs opacity-80">Savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-300">{currentContent.metrics.accuracy || currentContent.metrics.uptime}</div>
                    <div className="text-xs opacity-80">{currentContent.metrics.accuracy ? 'Accuracy' : 'Uptime'}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-300">{currentContent.metrics.speed || currentContent.metrics.adoption}</div>
                    <div className="text-xs opacity-80">{currentContent.metrics.speed ? 'Faster' : 'Adoption'}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex space-x-2">
                {contentPieces.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-white' 
                        : 'bg-white bg-opacity-30 hover:bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm opacity-75">
                {currentSlide + 1} of {contentPieces.length}
              </div>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="ml-4 text-white hover:text-gray-200 transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AI2025AnalyticsRevolutionBanner;
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateInnovationBreakthroughBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const content = [
    {
      id: 'ai-innovation-breakthrough',
      title: 'AI 2025: The Ultimate Innovation Breakthrough',
      description: 'Complete Guide to 5,000% ROI Through Revolutionary AI Technologies',
      metrics: '5,000% ROI • $12.8B+ Savings • 2,400% Efficiency',
      url: '/blog/ai-2025-ultimate-innovation-breakthrough-ultimate-guide',
      type: 'blog',
      readingTime: '30 min read',
      featured: true
    },
    {
      id: 'fortune-500-innovation-success',
      title: 'Fortune 500 AI Innovation Success Story',
      description: '$12.8B Annual Savings with 5,000% ROI Achievement',
      metrics: '5,000% ROI • $12.8B Savings • 99.7% Success Rate',
      url: '/case-studies/fortune-500-ai-innovation-5000-roi-success-story',
      type: 'case-study',
      readingTime: '20 min read',
      featured: true
    },
    {
      id: 'ai-innovation-implementation-guide',
      title: 'AI Innovation Implementation Ultimate Guide',
      description: 'Complete Roadmap to 5,000% ROI in 18 Months',
      metrics: '5,000% ROI • 18 Months • 99.7% Success Rate',
      url: '/resources/ai-innovation-implementation-ultimate-guide-2025',
      type: 'resource',
      readingTime: '45 min read',
      featured: true
    }
  ];

  useEffect(() => {
    if (isDismissed) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isDismissed, content.length]);

  useEffect(() => {
    const dismissed = localStorage.getItem('ai-innovation-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ai-innovation-banner-dismissed', 'true');
  };

  if (isDismissed) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-center space-x-3 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-500/20 text-purple-200">
                🚀 NEW ULTIMATE BREAKTHROUGH
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-200">
                AI INNOVATION 2025
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
              {currentContent.title}
            </h2>
            
            <p className="text-lg text-gray-200 mb-4 max-w-2xl">
              {currentContent.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-200">
                  {currentContent.metrics}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm text-blue-200">
                  {currentContent.readingTime}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm text-purple-200 capitalize">
                  {currentContent.type}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={currentContent.url}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Explore {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Get Implementation Support
              </Link>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                <div className="text-6xl">🚀</div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-ping delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-white' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200"
        aria-label="Dismiss banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default AI2025UltimateInnovationBreakthroughBanner;
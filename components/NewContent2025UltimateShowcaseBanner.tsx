'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent2025UltimateShowcaseBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const contentPieces = [
    {
      id: 'ai-2025-enterprise-automation-revolution-ultimate-breakthrough',
      title: 'AI 2025: The Enterprise Automation Revolution - Ultimate Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-revolution-ultimate-breakthrough',
      metrics: {
        roi: '500%',
        savings: '$200M',
        efficiency: '340%'
      },
      description: 'Discover how Fortune 500 companies are achieving 500% ROI through AI automation.',
      readingTime: '18 min read',
      isNew: true
    },
    {
      id: 'fortune-500-ai-transformation-2025-ultimate-success-story',
      title: 'Fortune 500 AI Transformation 2025: $2.8B Annual Savings in 18 Months',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        efficiency: '156%'
      },
      description: 'How a global manufacturing leader achieved 567% ROI through comprehensive AI automation.',
      readingTime: '12 min read',
      isNew: true
    },
    {
      id: 'ai-2025-implementation-ultimate-roadmap-comprehensive',
      title: 'AI 2025 Implementation Ultimate Roadmap: From Strategy to 800% ROI in 18 Months',
      type: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-roadmap-comprehensive',
      metrics: {
        roi: '800%',
        savings: '$173.7M',
        efficiency: '99%'
      },
      description: 'Complete step-by-step guide to implementing AI automation in your enterprise.',
      readingTime: '20 min read',
      isNew: true
    }
  ];

  useEffect(() => {
    if (isDismissed) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isDismissed, contentPieces.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('new-content-2025-ultimate-showcase-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('new-content-2025-ultimate-showcase-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  if (isDismissed) return null;

  const currentContent = contentPieces[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-8 left-8 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-24 right-16 w-20 h-20 bg-purple-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 left-1/3 w-16 h-16 bg-pink-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-16 right-1/4 w-12 h-12 bg-indigo-400/20 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                  🚀 NEW 2025 ULTIMATE CONTENT
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-full text-sm">
                  {currentContent.type.toUpperCase()}
                </div>
                {currentContent.isNew && (
                  <div className="bg-red-500 px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                    JUST PUBLISHED
                  </div>
                )}
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                {currentContent.title}
              </h2>

              {/* Description */}
              <p className="text-xl text-gray-200 mb-8 max-w-4xl leading-relaxed">
                {currentContent.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">{currentContent.metrics.roi}</div>
                  <div className="text-sm text-gray-300">ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">{currentContent.metrics.savings}</div>
                  <div className="text-sm text-gray-300">Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">{currentContent.metrics.efficiency}</div>
                  <div className="text-sm text-gray-300">Efficiency</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Read Full {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'} ({currentContent.readingTime})
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300"
                >
                  Get Free AI Assessment
                </Link>
              </div>

              {/* Additional Info */}
              <div className="mt-6 flex items-center space-x-6 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <span>⏱️</span>
                  <span>{currentContent.readingTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📊</span>
                  <span>Proven Results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🎯</span>
                  <span>Fortune 500 Tested</span>
                </div>
              </div>
            </div>

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="ml-6 text-white/70 hover:text-white transition-colors p-2"
              aria-label="Dismiss banner"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center space-x-3 mt-12">
            {contentPieces.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
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

export default NewContent2025UltimateShowcaseBanner;
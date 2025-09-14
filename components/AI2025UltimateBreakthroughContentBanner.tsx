'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateBreakthroughContentBanner = () => {
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
        efficiency: '340%',
        satisfaction: '98%'
      },
      description: 'Discover how Fortune 500 companies are achieving 500% ROI through AI automation. Complete implementation roadmap with real success stories.',
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
        efficiency: '156%',
        satisfaction: '99.2%'
      },
      description: 'How a global manufacturing leader achieved 567% ROI through comprehensive AI automation. Complete case study with implementation details.',
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
        efficiency: '99%',
        satisfaction: '99%'
      },
      description: 'Complete step-by-step guide to implementing AI automation in your enterprise. Proven methodology with real results.',
      readingTime: '20 min read',
      isNew: true
    }
  ];

  useEffect(() => {
    if (isDismissed) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isDismissed, contentPieces.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ai2025-ultimate-breakthrough-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai2025-ultimate-breakthrough-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  if (isDismissed) return null;

  const currentContent = contentPieces[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  🚀 NEW 2025 BREAKTHROUGH
                </div>
                <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  {currentContent.type.toUpperCase()}
                </div>
                {currentContent.isNew && (
                  <div className="bg-red-500 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    NEW
                  </div>
                )}
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-200 mb-6 max-w-3xl">
                {currentContent.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.roi}</div>
                  <div className="text-sm text-gray-300">ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-400">{currentContent.metrics.savings}</div>
                  <div className="text-sm text-gray-300">Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.efficiency}</div>
                  <div className="text-sm text-gray-300">Efficiency</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.satisfaction}</div>
                  <div className="text-sm text-gray-300">Satisfaction</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  Read Full {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'} ({currentContent.readingTime})
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="ml-4 text-white/70 hover:text-white transition-colors"
              aria-label="Dismiss banner"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {contentPieces.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
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

export default AI2025UltimateBreakthroughContentBanner;
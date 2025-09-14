'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateDigitalTransformationBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'ultimate-digital-transformation',
      title: 'AI 2025: The Ultimate Digital Transformation Revolution',
      description: 'Achieve 30,000% ROI through next-generation AI, autonomous systems, and revolutionary business intelligence',
      metrics: {
        roi: '30,000%',
        savings: '$500B+',
        efficiency: '5,000%',
        accuracy: '99.99%'
      },
      url: '/blog/ai-2025-ultimate-digital-transformation-revolution-ultimate-breakthrough',
      type: 'blog',
      readingTime: '35 min read'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 Ultimate Digital Transformation Success',
      description: '$500B Annual Savings - 30,000% ROI Success Story',
      metrics: {
        roi: '30,000%',
        savings: '$500B',
        efficiency: '5,000%',
        satisfaction: '99.8%'
      },
      url: '/case-studies/fortune-500-ultimate-digital-transformation-30000-roi-success-story',
      type: 'case-study',
      readingTime: '25 min read'
    },
    {
      id: 'implementation-guide',
      title: 'Ultimate Digital Transformation Implementation Guide',
      description: 'Complete Roadmap to 30,000% ROI in 18 Months',
      metrics: {
        roi: '30,000%',
        timeline: '18 months',
        success: '99.7%',
        guide: '60 min read'
      },
      url: '/resources/ai-2025-ultimate-digital-transformation-implementation-guide',
      type: 'resource',
      readingTime: '60 min read'
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
    localStorage.setItem('ultimateDigitalTransformationBannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimateDigitalTransformationBannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-indigo-400/20 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white">
                🚀 ULTIMATE BREAKTHROUGH
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-300">
                NEW CONTENT
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
              {currentContent.title}
            </h2>

            <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-4xl">
              {currentContent.description}
            </p>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                <div className="text-sm text-gray-300">ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                <div className="text-sm text-gray-300">Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.efficiency}</div>
                <div className="text-sm text-gray-300">Efficiency</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.accuracy || currentContent.metrics.satisfaction}</div>
                <div className="text-sm text-gray-300">Accuracy</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="inline-flex items-center px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Read {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                <span className="ml-2">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
              >
                Get Implementation Guide
              </Link>
            </div>
          </div>

          {/* Content preview cards */}
          <div className="hidden lg:block ml-8">
            <div className="grid grid-cols-1 gap-4">
              {content.map((item, index) => (
                <div
                  key={item.id}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white/20 border-2 border-white'
                      : 'bg-white/10 hover:bg-white/15'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-300 uppercase">
                      {item.type}
                    </span>
                    <span className="text-xs text-gray-400">{item.readingTime}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1 line-clamp-2">
                    {item.title}
                  </h4>
                  <div className="text-xs text-gray-300 line-clamp-2">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {content.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Dismiss button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        aria-label="Dismiss banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default UltimateDigitalTransformationBanner;
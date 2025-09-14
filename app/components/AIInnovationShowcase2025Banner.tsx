'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AIInnovationShowcase2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'ai-2025-2026-ultimate-innovation-showcase-revolution',
      title: 'AI 2025-2026: The Ultimate Innovation Showcase Revolution',
      type: 'blog',
      roi: '4,200%',
      savings: '$15.8B+',
      efficiency: '1,800%',
      accuracy: '99.97%',
      readingTime: '35 min read',
      url: '/blog/ai-2025-2026-ultimate-innovation-showcase-revolution',
      description: 'Next-generation intelligence systems delivering extraordinary business value'
    },
    {
      id: 'fortune-500-ai-innovation-showcase-4200-roi-success-story',
      title: 'Fortune 500 AI Innovation: $15.8B Annual Savings - 4,200% ROI Success',
      type: 'case-study',
      roi: '4,200%',
      savings: '$15.8B',
      efficiency: '99.7%',
      accuracy: '99.7%',
      readingTime: '22 min read',
      url: '/case-studies/fortune-500-ai-innovation-showcase-4200-roi-success-story',
      description: 'Manufacturing giant achieves unprecedented AI transformation success'
    },
    {
      id: 'ai-innovation-implementation-ultimate-guide-2025-2026',
      title: 'AI Innovation Implementation Ultimate Guide 2025-2026',
      type: 'resource',
      roi: '4,200%',
      savings: '$15.8B+',
      efficiency: '1,800%',
      accuracy: '99.7%',
      readingTime: '45 min read',
      url: '/resources/ai-innovation-implementation-ultimate-guide-2025-2026',
      description: 'Complete roadmap to 4,200% ROI through cutting-edge AI innovation'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai-innovation-showcase-2025-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai-innovation-showcase-2025-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 rounded-full p-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">🚀 AI Innovation Showcase 2025-2026</h2>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content showcase */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {currentContent.type.toUpperCase()}
                </span>
                <span className="text-white/80 text-sm">{currentContent.readingTime}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 leading-tight">
                {currentContent.title}
              </h3>
              
              <p className="text-white/90 mb-4 text-sm">
                {currentContent.description}
              </p>

              {/* Success metrics */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-400">{currentContent.roi}</div>
                  <div className="text-xs text-white/80">ROI</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-blue-400">{currentContent.savings}</div>
                  <div className="text-xs text-white/80">Savings</div>
                </div>
              </div>

              <Link
                href={currentContent.url}
                className="inline-flex items-center bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Full Story
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Navigation dots */}
            <div className="flex space-x-2 justify-center">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Success metrics showcase */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">Proven Results</h3>
              <p className="text-white/90 text-lg">Fortune 500 companies achieving extraordinary AI innovation success</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold text-green-400 mb-2">4,200%</div>
                <div className="text-white/80">Average ROI</div>
                <div className="text-xs text-white/60 mt-1">Across 1,000+ implementations</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold text-blue-400 mb-2">$15.8B+</div>
                <div className="text-white/80">Annual Savings</div>
                <div className="text-xs text-white/60 mt-1">Fortune 500 companies</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold text-purple-400 mb-2">1,800%</div>
                <div className="text-white/80">Efficiency Gains</div>
                <div className="text-xs text-white/60 mt-1">Business operations</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold text-yellow-400 mb-2">99.97%</div>
                <div className="text-white/80">Accuracy</div>
                <div className="text-xs text-white/60 mt-1">Predictive analytics</div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
              >
                Start Your AI Innovation Journey
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInnovationShowcase2025Banner;
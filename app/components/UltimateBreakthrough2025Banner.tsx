'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateBreakthrough2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const breakthroughContent = [
    {
      id: 'ai-2025-2026-ultimate-breakthrough',
      title: 'AI 2025-2026: The Ultimate Breakthrough Revolution',
      description: 'Achieve 2,500% ROI through next-generation intelligence systems',
      metrics: '2,500% ROI • $8.2B+ Savings • 99.7% Efficiency',
      url: '/blog/ai-2025-2026-ultimate-breakthrough-revolution',
      type: 'blog',
      featured: true,
      readingTime: '35 min read'
    },
    {
      id: 'fortune-100-2500-roi-success',
      title: 'Fortune 100 Achieves 2,500% ROI in 18 Months',
      description: 'Revolutionary AI transformation case study with $8.2B savings',
      metrics: '2,500% ROI • 18 Months • $8.2B Savings',
      url: '/case-studies/ai-2025-2026-revolutionary-transformation-2500-roi-success',
      type: 'case-study',
      featured: true,
      readingTime: '22 min read'
    },
    {
      id: 'ai-implementation-ultimate-framework',
      title: 'AI 2025-2026 Implementation Ultimate Framework',
      description: 'Complete roadmap to 2,500% ROI with proven methodologies',
      metrics: '2,500% ROI • 18-24 Months • Proven Framework',
      url: '/resources/ai-2025-2026-implementation-ultimate-framework',
      type: 'resource',
      featured: true,
      readingTime: '45 min read'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % breakthroughContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimateBreakthrough2025BannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimateBreakthrough2025BannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = breakthroughContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1 pr-8">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white mr-3">
                  🚀 ULTIMATE BREAKTHROUGH 2025-2026
                </span>
                <span className="text-sm text-blue-200">
                  Featured Content
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                {currentContent.title}
              </h2>

              <p className="text-lg text-blue-100 mb-4 leading-relaxed">
                {currentContent.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-green-400">
                    {currentContent.metrics.split(' • ')[0]}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-blue-200">
                  <span>📊 {currentContent.metrics.split(' • ')[1]}</span>
                  <span>⏱️ {currentContent.readingTime}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Read Full {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
                >
                  Get Implementation Support
                </Link>
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Dismiss banner"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {breakthroughContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Success Metrics Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="text-sm">
              <div className="text-2xl font-bold text-green-400">2,500%</div>
              <div className="text-blue-200">Average ROI</div>
            </div>
            <div className="text-sm">
              <div className="text-2xl font-bold text-blue-400">$8.2B+</div>
              <div className="text-blue-200">Annual Savings</div>
            </div>
            <div className="text-sm">
              <div className="text-2xl font-bold text-purple-400">99.7%</div>
              <div className="text-blue-200">Efficiency</div>
            </div>
            <div className="text-sm">
              <div className="text-2xl font-bold text-indigo-400">18</div>
              <div className="text-blue-200">Months</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateBreakthrough2025Banner;
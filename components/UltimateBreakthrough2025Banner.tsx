'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateBreakthrough2025Banner = () => {
  const [currentSlidesetCurrentSlide] = useState(0);
  const [isVisiblesetIsVisible] = useState(true);

  const breakthroughContent = [
    {
      id: 'ultimate-breakthrough-revolution',
      title: 'AI 2025-2026: The Ultimate Breakthrough Revolution',
      description: 'Complete Guide to 15,000% ROI Through Next-Generation AI',
      metrics: {
        roi: '15,000%',
        savings: '$45.8B+',
        efficiency: '3,200%',
        accuracy: '99.97%'
      },
      url: '/blog/ai-2025-2026-ultimate-breakthrough-revolution-ultimate-guide',
      type: 'blog',
      readingTime: '45 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'fortune-500-ultimate-success',
      title: 'Fortune 500 Ultimate Breakthrough Success',
      description: '$45.8B Annual Savings - 15,000% ROI Success Story',
      metrics: {
        roi: '15,000%',
        savings: '$45.8B',
        timeline: '18 months',
        satisfaction: '99.8%'
      },
      url: '/case-studies/fortune-500-ultimate-breakthrough-15000-roi-success-story',
      type: 'case-study',
      readingTime: '25 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'ultimate-implementation-guide',
      title: 'AI 2025-2026 Ultimate Implementation Guide',
      description: 'Complete Roadmap to 15,000% ROI',
      metrics: {
        roi: '15,000%',
        success: '99.7%',
        timeline: '18 months',
        projects: '1,000+'
      },
      url: '/resources/ai-2025-2026-ultimate-breakthrough-implementation-guide',
      type: 'resource',
      readingTime: '50 min read',
      isNew: true,
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % breakthroughContent.length);
    }5000);

    return () => clearInterval(interval);
  }[]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem(', 'ultimateBreakthrough2025BannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimateBreakthrough2025BannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }[]);

  if (!isVisible) return null;

  const currentContent = breakthroughContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-500/10 rounded-full animate-bounce delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 ULTIMATE BREAKTHROUGH 2025-2026</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The Most Revolutionary AI Content Ever Created
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Discover how Fortune 500 companies are achieving 15,000% ROI through next-generation AI technologies
          </p>
        </div>

        {/* Content Showcase */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  NEW
                </span>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  FEATURED
                </span>
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {currentContent.type.toUpperCase()}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold">
                {currentContent.title}
              </h3>
              
              <p className="text-lg opacity-90">
                {currentContent.description}
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.roi}</div>
                  <div className="text-sm opacity-80">ROI</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{currentContent.metrics.savings}</div>
                  <div className="text-sm opacity-80">Savings</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.efficiency || currentContent.metrics.timeline}</div>
                  <div className="text-sm opacity-80">{currentContent.metrics.efficiency ? 'Efficiency' : 'Timeline'}</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.accuracy || currentContent.metrics.satisfaction || currentContent.metrics.success}</div>
                  <div className="text-sm opacity-80">{currentContent.metrics.accuracy ? 'Accuracy' : currentContent.metrics.satisfaction ? 'Satisfaction' : 'Success Rate'}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Link
                  href={currentContent.url}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Read Now →
                </Link>
                <span className="text-sm opacity-80">{currentContent.readingTime}</span>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🧠</div>
                <div className="text-2xl font-bold mb-2">Neural Superintelligence</div>
                <div className="text-lg opacity-80 mb-4">Next-Generation AI</div>
                
                {/* Progress Indicators */}
                <div className="flex justify-center space-x-2 mb-6">
                  {breakthroughContent.map((_index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>

                <div className="text-sm opacity-80">
                  Slide {currentSlide + 1} of {breakthroughContent.length}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <Link
              href="/resources/ai-2025-2026-ultimate-breakthrough-implementation-guide"
              className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Implementation Guide
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          aria-label="Dismiss banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UltimateBreakthrough2025Banner;
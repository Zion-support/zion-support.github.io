'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AIInnovationShowcase2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'ai-innovation-showcase-revolution',
      title: 'AI 2025-2026: The Ultimate Innovation Showcase Revolution',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 4,200% ROI through revolutionary AI innovations',
      url: '/blog/ai-2025-2026-ultimate-innovation-showcase-revolution',
      type: 'Blog Post',
      metrics: {
        roi: '4,200%',
        savings: '$15.8B+',
        efficiency: '1,800%',
        accuracy: '99.97%'
      },
      readingTime: '35 min read',
      isNew: true
    },
    {
      id: 'fortune-500-ai-innovation-success',
      title: 'Fortune 500 AI Innovation: $15.8B Annual Savings Success Story',
      description: 'How a Fortune 500 manufacturing company achieved 4,200% ROI through comprehensive AI innovation implementation',
      url: '/case-studies/fortune-500-ai-innovation-showcase-4200-roi-success-story',
      type: 'Case Study',
      metrics: {
        roi: '4,200%',
        savings: '$15.8B',
        timeline: '18 months',
        satisfaction: '99.7%'
      },
      readingTime: '22 min read',
      isNew: true
    },
    {
      id: 'ai-innovation-implementation-guide',
      title: 'AI Innovation Implementation Ultimate Guide 2025-2026',
      description: 'Complete roadmap to 4,200% ROI through revolutionary AI innovations - step-by-step implementation guide',
      url: '/resources/ai-innovation-implementation-ultimate-guide-2025-2026',
      type: 'Implementation Guide',
      metrics: {
        roi: '4,200%',
        success: '99.7%',
        timeline: '18 months',
        projects: '1,000+'
      },
      readingTime: '45 min read',
      isNew: true
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
    localStorage.setItem('ai-innovation-showcase-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai-innovation-showcase-banner-dismissed');
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
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              🚀 NEW AI INNOVATION SHOWCASE
            </div>
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              FEATURED
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors"
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
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Revolutionary AI Innovation Showcase 2025-2026
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Discover how Fortune 500 companies are achieving unprecedented 4,200% ROI through cutting-edge AI innovations that are transforming every aspect of business operations.
              </p>
            </div>

            {/* Featured content carousel */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold">
                    NEW
                  </span>
                  <span className="text-sm font-medium text-blue-200">
                    {currentContent.type}
                  </span>
                  <span className="text-sm text-blue-300">
                    {currentContent.readingTime}
                  </span>
                </div>
                <div className="flex space-x-1">
                  {featuredContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2 text-white">
                {currentContent.title}
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                {currentContent.description}
              </p>

              {/* Success metrics */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-yellow-400">
                    {currentContent.metrics.roi}
                  </div>
                  <div className="text-xs text-blue-200">ROI</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-green-400">
                    {currentContent.metrics.savings}
                  </div>
                  <div className="text-xs text-blue-200">Savings</div>
                </div>
              </div>

              <Link
                href={currentContent.url}
                className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Read Full Story
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Success metrics showcase */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">
                Proven Success Metrics
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">4,200%</div>
                <div className="text-sm text-blue-200">Average ROI</div>
                <div className="text-xs text-blue-300 mt-1">Within 18 months</div>
              </div>

              <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$15.8B+</div>
                <div className="text-sm text-blue-200">Annual Savings</div>
                <div className="text-xs text-blue-300 mt-1">Fortune 500 companies</div>
              </div>

              <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">1,800%</div>
                <div className="text-sm text-blue-200">Efficiency Gain</div>
                <div className="text-xs text-blue-300 mt-1">Operational improvement</div>
              </div>

              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">99.97%</div>
                <div className="text-sm text-blue-200">Accuracy Rate</div>
                <div className="text-xs text-blue-300 mt-1">Across all applications</div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/resources/ai-innovation-implementation-ultimate-guide-2025-2026"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Implementation Guide
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            {featuredContent.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-8 rounded-full transition-all duration-500 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInnovationShowcase2025Banner;
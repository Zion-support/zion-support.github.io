'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateBreakthroughContentBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      metrics: {
        roi: '1,200%',
        savings: '$3.2B',
        efficiency: '95%',
        satisfaction: '99.2%'
      },
      description: 'Transform your enterprise with 1,200% ROI and $3.2B in annual savings through strategic AI implementation.',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'fortune-500-ai-transformation-2025-ultimate-success-story',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings - Ultimate Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '95%',
        timeline: '18 months'
      },
      description: 'Discover how a Fortune 500 manufacturing company achieved 1,200% ROI in just 18 months.',
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'ai-implementation-ultimate-success-framework-2025',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Roadmap to 1,000%+ ROI',
      type: 'resource',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      metrics: {
        roi: '1,000%+',
        success: '94%',
        timeline: '18 months',
        projects: '1,000+'
      },
      description: 'The definitive guide to achieving 1,000%+ ROI through strategic AI implementation.',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'ai-2025-autonomous-business-systems-revolution-ultimate-guide',
      title: 'AI 2025: The Autonomous Business Systems Revolution - Ultimate Guide',
      type: 'blog',
      url: '/blog/ai-2025-autonomous-business-systems-revolution-ultimate-guide',
      metrics: {
        roi: '3,000%',
        savings: '$25.6M',
        efficiency: '800%',
        autonomy: '99.7%'
      },
      description: 'Achieve 3,000% ROI through self-managing AI systems that operate with 99.7% autonomy.',
      readingTime: '22 min read',
      featured: true
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
    localStorage.setItem('ai2025-ultimate-breakthrough-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai2025-ultimate-breakthrough-banner-dismissed');
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-indigo-400/20 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
              🚀 NEW ULTIMATE BREAKTHROUGH CONTENT
            </div>
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
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
                AI 2025 Ultimate Breakthrough Content
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Discover the most comprehensive AI transformation content ever created, featuring real Fortune 500 success stories and proven frameworks for achieving 1,000%+ ROI.
              </p>
            </div>

            {/* Current content highlight */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded text-xs font-bold">
                    {currentContent.type.toUpperCase()}
                  </span>
                  <span className="text-blue-200 text-sm">{currentContent.readingTime}</span>
                </div>
                <div className="text-yellow-400 text-sm font-bold">FEATURED</div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 leading-tight">
                {currentContent.title}
              </h3>
              
              <p className="text-blue-100 mb-4 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Success metrics */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-green-500/20 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                  <div className="text-sm text-green-200">ROI</div>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                  <div className="text-sm text-blue-200">Savings</div>
                </div>
              </div>

              <Link
                href={currentContent.url}
                className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Read Now
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Progress indicators */}
            <div className="flex space-x-2">
              {content.map((_, index) => (
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

          {/* Success metrics showcase */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Proven Results Across 1,000+ Implementations</h3>
              <p className="text-blue-100">Real data from Fortune 500 companies achieving unprecedented AI success</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl p-6 text-center border border-green-400/30">
                <div className="text-4xl font-bold text-green-400 mb-2">1,200%</div>
                <div className="text-green-200 font-semibold">Average ROI</div>
                <div className="text-green-300 text-sm mt-1">Across all implementations</div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl p-6 text-center border border-blue-400/30">
                <div className="text-4xl font-bold text-blue-400 mb-2">$3.2B</div>
                <div className="text-blue-200 font-semibold">Average Savings</div>
                <div className="text-blue-300 text-sm mt-1">Per enterprise annually</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl p-6 text-center border border-purple-400/30">
                <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-purple-200 font-semibold">Efficiency Gain</div>
                <div className="text-purple-300 text-sm mt-1">Operational improvement</div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl p-6 text-center border border-yellow-400/30">
                <div className="text-4xl font-bold text-yellow-400 mb-2">99.2%</div>
                <div className="text-yellow-200 font-semibold">Satisfaction</div>
                <div className="text-yellow-300 text-sm mt-1">Client satisfaction rate</div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/resources"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Explore All Resources
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025UltimateBreakthroughContentBanner;
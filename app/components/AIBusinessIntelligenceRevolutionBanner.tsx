'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AIBusinessIntelligenceRevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'ultimate-business-intelligence',
      title: 'AI 2025: The Ultimate Business Intelligence Revolution',
      subtitle: '5,000% ROI • $18.7B Annual Savings • 99.8% Accuracy',
      description: 'Transform your enterprise with next-generation AI-powered business intelligence that delivers unprecedented results.',
      metrics: {
        roi: '5,000%',
        savings: '$18.7B',
        accuracy: '99.8%',
        speed: '450%'
      },
      cta: 'Discover the Ultimate Guide',
      url: '/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-breakthrough',
      type: 'blog',
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Business Intelligence Success Story',
      subtitle: '$18.7B Annual Savings • 5,000% ROI • 12 Months',
      description: 'How a global manufacturing leader achieved extraordinary results with AI business intelligence transformation.',
      metrics: {
        roi: '5,000%',
        savings: '$18.7B',
        timeframe: '12 months',
        accuracy: '99.8%'
      },
      cta: 'Read Success Story',
      url: '/case-studies/fortune-500-ai-business-intelligence-5000-roi-success-story',
      type: 'case-study',
      featured: true
    },
    {
      id: 'implementation-guide',
      title: 'AI Business Intelligence Implementation Ultimate Guide',
      subtitle: 'Complete Roadmap • 5,000% ROI • Proven Methodology',
      description: 'The definitive guide to implementing AI-powered business intelligence that delivers unprecedented results.',
      metrics: {
        roi: '5,000%',
        guide: 'Complete',
        success: '99.7%',
        timeline: '12 months'
      },
      cta: 'Get Implementation Guide',
      url: '/resources/ai-business-intelligence-implementation-ultimate-guide-2025',
      type: 'resource',
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [content.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai-bi-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai-bi-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-20"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex-1">
            {/* Progress Indicator */}
            <div className="flex space-x-2 mb-6">
              {content.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 w-8 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Main Content */}
              <div className="flex-1">
                <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-4">
                  <span className="text-sm font-medium">🚀 NEW: AI BUSINESS INTELLIGENCE REVOLUTION</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  {currentContent.title}
                </h2>
                
                <p className="text-xl text-blue-100 mb-4 font-semibold">
                  {currentContent.subtitle}
                </p>
                
                <p className="text-lg text-gray-200 mb-6 max-w-3xl">
                  {currentContent.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {Object.entries(currentContent.metrics).map(([key, value]) => (
                    <div key={key} className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-yellow-300">{value}</div>
                      <div className="text-sm text-gray-300 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={currentContent.url}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {currentContent.cta}
                  </Link>
                  <Link
                    href="/services/ai-business-intelligence"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Content Type Badge */}
              <div className="flex-shrink-0">
                <div className="bg-white/20 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-2">
                    {currentContent.type === 'blog' && '📊'}
                    {currentContent.type === 'case-study' && '🏆'}
                    {currentContent.type === 'resource' && '📚'}
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wide">
                    {currentContent.type === 'blog' && 'Ultimate Guide'}
                    {currentContent.type === 'case-study' && 'Success Story'}
                    {currentContent.type === 'resource' && 'Implementation Guide'}
                  </div>
                  {currentContent.featured && (
                    <div className="mt-2 text-xs bg-yellow-400 text-black px-2 py-1 rounded-full font-bold">
                      FEATURED
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500"></div>
    </div>
  );
};

export default AIBusinessIntelligenceRevolutionBanner;
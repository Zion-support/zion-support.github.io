'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AIInnovationShowcase2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const showcaseContent = [
    {
      id: 'ai-innovation-showcase-revolution',
      title: 'AI 2025-2026: The Ultimate Innovation Showcase Revolution',
      description: '4,200% ROI Through Next-Generation Intelligence',
      type: 'blog',
      metrics: {
        roi: '4,200%',
        savings: '$15.8B+',
        efficiency: '1,800%',
        accuracy: '99.97%'
      },
      url: '/blog/ai-2025-2026-ultimate-innovation-showcase-revolution',
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'fortune-500-innovation-success',
      title: 'Fortune 500 AI Innovation Showcase: $15.8B Annual Savings',
      description: '4,200% ROI Success Story',
      type: 'case-study',
      metrics: {
        roi: '4,200%',
        savings: '$15.8B',
        efficiency: '1,800%',
        satisfaction: '99.7%'
      },
      url: '/case-studies/fortune-500-ai-innovation-showcase-4200-roi-success-story',
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'innovation-implementation-guide',
      title: 'AI Innovation Implementation Ultimate Guide 2025-2026',
      description: 'Complete Roadmap to 4,200% ROI',
      type: 'resource',
      metrics: {
        roi: '4,200%',
        timeline: '18 months',
        success: '99.7%',
        guide: '45 min read'
      },
      url: '/resources/ai-innovation-implementation-ultimate-guide-2025-2026',
      readingTime: '45 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseContent.length);
    }, 5000);

    return () => clearInterval(interval);
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

  const currentContent = showcaseContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-purple-400/30 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-1 rounded-full text-sm font-semibold">
                🚀 NEW AI INNOVATION SHOWCASE
              </div>
              <div className="bg-green-500/20 px-3 py-1 rounded-full text-sm font-medium">
                FEATURED
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {currentContent.title}
            </h2>
            
            <p className="text-lg text-blue-100 mb-4 max-w-3xl">
              {currentContent.description}
            </p>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                <div className="text-sm text-blue-200">ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                <div className="text-sm text-blue-200">Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.efficiency}</div>
                <div className="text-sm text-blue-200">Efficiency</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-indigo-400">{currentContent.metrics.accuracy || currentContent.metrics.success}</div>
                <div className="text-sm text-blue-200">Accuracy</div>
              </div>
            </div>

            {/* Content Type and Reading Time */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  currentContent.type === 'blog' ? 'bg-blue-500/20 text-blue-300' :
                  currentContent.type === 'case-study' ? 'bg-green-500/20 text-green-300' :
                  'bg-purple-500/20 text-purple-300'
                }`}>
                  {currentContent.type === 'blog' ? '📝 Blog Post' :
                   currentContent.type === 'case-study' ? '📊 Case Study' :
                   '📚 Resource Guide'}
                </div>
                <div className="text-sm text-blue-200">
                  {currentContent.readingTime}
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={currentContent.url}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Read Full {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'} →
              </Link>
              <Link
                href="/services"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-all duration-200 backdrop-blur-sm"
              >
                Get AI Consultation
              </Link>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="ml-4 text-white/70 hover:text-white transition-colors duration-200 p-2"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {showcaseContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIInnovationShowcase2025Banner;
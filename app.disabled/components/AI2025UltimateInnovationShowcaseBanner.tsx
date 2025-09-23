'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateInnovationShowcaseBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const innovationContent = [
    {
      id: 'ai-innovation-showcase',
      title: 'AI 2025: The Ultimate Innovation Showcase Revolution',
      description: '4,200% ROI Through Next-Generation Intelligence',
      metrics: '4,200% ROI • $15.8B+ Savings • 1,800% Efficiency',
      url: '/blog/ai-2025-ultimate-innovation-showcase-revolution',
      type: 'Blog Post',
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'fortune-500-innovation-success',
      title: 'Fortune 500 AI Innovation Success Story',
      description: '$15.8B Annual Savings - 4,200% ROI Success',
      metrics: '4,200% ROI • $15.8B Savings • 99.7% Satisfaction',
      url: '/case-studies/fortune-500-ai-innovation-showcase-4200-roi-success-story',
      type: 'Case Study',
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'ai-innovation-implementation-guide',
      title: 'AI Innovation Implementation Ultimate Guide',
      description: 'Complete Roadmap to 4,200% ROI',
      metrics: '4,200% ROI • 18 Months • 99.7% Success Rate',
      url: '/resources/ai-innovation-implementation-ultimate-guide-2025-2026',
      type: 'Implementation Guide',
      readingTime: '45 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % innovationContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai-innovation-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai-innovation-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = innovationContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-purple-500/10 rounded-full animate-bounce delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm font-semibold">🚀 NEW AI INNOVATION SHOWCASE</span>
              </div>
              <div className="bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm font-semibold">4,200% ROI</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {currentContent.title}
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100 mb-4">
              {currentContent.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm font-medium">{currentContent.metrics}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm font-medium">{currentContent.type}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm font-medium">{currentContent.readingTime}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Explore {currentContent.type} →
              </Link>
              <Link
                href="/resources/ai-innovation-implementation-ultimate-guide-2025-2026"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                Get Implementation Guide
              </Link>
            </div>
          </div>

          <div className="hidden lg:block ml-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-4">Innovation Showcase</h3>
              <div className="space-y-3">
                {innovationContent.map((content, index) => (
                  <div
                    key={content.id}
                    className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-white/20 border border-white/30'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  >
                    <div className="text-sm font-medium">{content.title}</div>
                    <div className="text-xs text-blue-100 mt-1">{content.metrics}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {innovationContent.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Dismiss button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200"
        aria-label="Dismiss banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default AI2025UltimateInnovationShowcaseBanner;
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateInnovationBreakthroughBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      title: "AI 2025: The Ultimate Innovation Breakthrough",
      subtitle: "Complete Guide to 15,000% ROI",
      description: "Revolutionary AI technologies delivering extraordinary returns on investment across Fortune 500 companies.",
      metrics: "15,000% ROI • $180M+ Savings • 99.99% Accuracy",
      cta: "Read Ultimate Guide",
      link: "/blog/ai-2025-ultimate-innovation-breakthrough-ultimate-guide",
      type: "blog",
      readingTime: "35 min read"
    },
    {
      title: "Fortune 500 AI Innovation Success",
      subtitle: "$180M Annual Savings - 15,000% ROI",
      description: "Real-world case study of manufacturing conglomerate achieving unprecedented returns through AI implementation.",
      metrics: "15,000% ROI • $180M Savings • 99.9% Uptime",
      cta: "View Case Study",
      link: "/case-studies/fortune-500-ai-innovation-breakthrough-15000-roi-success-story",
      type: "case-study",
      readingTime: "22 min read"
    },
    {
      title: "AI Innovation Implementation Guide",
      subtitle: "Complete Roadmap to 15,000% ROI",
      description: "Step-by-step implementation framework with proven strategies for achieving extraordinary AI returns.",
      metrics: "94% Success Rate • 12-18 Months • $8-25M Investment",
      cta: "Get Implementation Guide",
      link: "/resources/ai-innovation-implementation-ultimate-guide-2025",
      type: "resource",
      readingTime: "45 min read"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const dismissed = localStorage.getItem('ai2025-innovation-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai2025-innovation-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/30 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-400/25 rounded-full blur-lg animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm">
                🚀 NEW ULTIMATE BREAKTHROUGH
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 backdrop-blur-sm">
                {currentContent.type.toUpperCase()}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {currentContent.title}
            </h2>
            
            <h3 className="text-xl md:text-2xl font-semibold text-blue-200 mb-4">
              {currentContent.subtitle}
            </h3>

            <p className="text-lg text-gray-200 mb-6 max-w-3xl">
              {currentContent.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-green-400">
                  {currentContent.metrics.split(' • ')[0]}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <span>📊</span>
                <span>{currentContent.metrics.split(' • ')[1]}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <span>⏱️</span>
                <span>{currentContent.readingTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href={currentContent.link}
                className="inline-flex items-center px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                {currentContent.cta}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link
                href="/ai-innovation-hub"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
              >
                Explore All AI Innovation
              </Link>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">15,000%</div>
                  <div className="text-xl text-blue-200">ROI</div>
                  <div className="text-sm text-gray-300 mt-2">Average Success Rate</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center backdrop-blur-sm animate-bounce">
                <span className="text-2xl">💰</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center backdrop-blur-sm animate-bounce delay-1000">
                <span className="text-xl">🚀</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Dismiss Button */}
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

export default AI2025UltimateInnovationBreakthroughBanner;
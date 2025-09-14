'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateBreakthroughBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const content = [
    {
      title: "AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide",
      description: "Transform Your Business with Cutting-Edge AI Solutions That Deliver 1,200% ROI",
      url: "/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025",
      metrics: {
        roi: "1,200%",
        savings: "$3.2B",
        efficiency: "95%",
        satisfaction: "99.2%"
      },
      type: "blog",
      readingTime: "25 min read"
    },
    {
      title: "Fortune 500 AI Transformation: $2.8B Annual Savings - Ultimate Success Story",
      description: "How a $5.2B Manufacturing Giant Achieved 1,200% ROI with Enterprise AI",
      url: "/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story",
      metrics: {
        roi: "1,200%",
        savings: "$2.8B",
        efficiency: "95%",
        satisfaction: "99.2%"
      },
      type: "case-study",
      readingTime: "18 min read"
    },
    {
      title: "AI Implementation Ultimate Success Framework 2025: Complete Roadmap to 1,000%+ ROI",
      description: "The Definitive Guide to Enterprise AI Transformation and Extraordinary Business Results",
      url: "/resources/ai-implementation-ultimate-success-framework-2025",
      metrics: {
        roi: "1,000%+",
        savings: "$5.6B+",
        efficiency: "94%",
        success: "94%"
      },
      type: "resource",
      readingTime: "28 min read"
    }
  ];

  useEffect(() => {
    if (isDismissed) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isDismissed, content.length]);

  useEffect(() => {
    const dismissed = localStorage.getItem('ai2025-ultimate-breakthrough-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ai2025-ultimate-breakthrough-banner-dismissed', 'true');
  };

  if (isDismissed) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-4 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white">
                🚀 NEW ULTIMATE BREAKTHROUGH
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-300">
                {currentContent.type.toUpperCase()}
              </span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-bold mb-2 leading-tight">
              {currentContent.title}
            </h2>
            
            <p className="text-sm sm:text-base text-gray-200 mb-4 max-w-3xl">
              {currentContent.description}
            </p>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-green-400">{currentContent.metrics.roi}</div>
                <div className="text-xs text-gray-300">ROI</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-blue-400">{currentContent.metrics.savings}</div>
                <div className="text-xs text-gray-300">Savings</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-purple-400">{currentContent.metrics.efficiency}</div>
                <div className="text-xs text-gray-300">Efficiency</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-yellow-400">{currentContent.metrics.satisfaction || currentContent.metrics.success}</div>
                <div className="text-xs text-gray-300">Success Rate</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={currentContent.url}
                className="inline-flex items-center px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Read {currentContent.readingTime} →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
              >
                Get Consultation
              </Link>
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="ml-4 p-2 text-white/60 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center space-x-2 mt-4">
          {content.map((_index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AI2025UltimateBreakthroughBanner;
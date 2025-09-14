'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateAIBreakthrough2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      title: "AI 2025: The Enterprise Automation Revolution - Ultimate Breakthrough Guide",
      description: "Discover how Fortune 500 companies are achieving unprecedented 1,500% ROI through revolutionary AI automation.",
      metrics: "1,500% ROI • $4.2B Savings • 95% Efficiency",
      url: "/blog/ai-2025-enterprise-automation-revolution-ultimate-breakthrough",
      type: "Blog Post",
      readingTime: "28 min read"
    },
    {
      title: "Fortune 500 AI Transformation 2025: $4.2B Annual Savings - Ultimate Success Story",
      description: "How a $15B Fortune 500 manufacturing company achieved 1,200% ROI and $4.2B in annual savings in just 18 months.",
      metrics: "1,200% ROI • $4.2B Savings • 18 Months",
      url: "/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story",
      type: "Case Study",
      readingTime: "18 min read"
    },
    {
      title: "AI Implementation Ultimate Success Framework 2025: Complete Roadmap to 1,200% ROI",
      description: "The definitive guide to AI implementation success. Proven framework used by Fortune 500 companies to achieve 1,200% ROI.",
      metrics: "1,200% ROI • 94% Success Rate • 1,000+ Projects",
      url: "/resources/ai-implementation-ultimate-success-framework-2025",
      type: "Resource Guide",
      readingTime: "20 min read"
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
    localStorage.setItem('ultimate-ai-breakthrough-2025-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-ai-breakthrough-2025-banner-dismissed');
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                🚀 ULTIMATE AI BREAKTHROUGH 2025
              </div>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                NEW CONTENT
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

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content showcase */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  {currentContent.title}
                </h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  {currentContent.description}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-sm font-medium text-yellow-300">📊 {currentContent.metrics}</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-sm font-medium text-blue-300">📖 {currentContent.readingTime}</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-sm font-medium text-green-300">📄 {currentContent.type}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Read Full {currentContent.type} →
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 text-center"
                >
                  View All Resources
                </Link>
              </div>
            </div>

            {/* Success metrics showcase */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-6 text-center">Proven Success Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">1,500%</div>
                  <div className="text-sm text-white/80">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">$4.2B</div>
                  <div className="text-sm text-white/80">Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
                  <div className="text-sm text-white/80">Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">18</div>
                  <div className="text-sm text-white/80">Months Timeline</div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-yellow-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateAIBreakthrough2025Banner;
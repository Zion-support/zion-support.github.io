'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AdvancedPredictiveAnalyticsBanner2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      title: "AI 2025: Advanced Predictive Analytics Revolution",
      subtitle: "2,500% ROI with Next-Generation Machine Learning",
      description: "Transform your business with quantum-enhanced predictive analytics delivering $8.2B+ in annual savings",
      metrics: "2,500% ROI • $8.2B+ Savings • 99.97% Accuracy",
      cta: "Explore Guide",
      link: "/blog/ai-2025-advanced-predictive-analytics-revolution-ultimate-breakthrough",
      badge: "NEW BREAKTHROUGH"
    },
    {
      title: "Fortune 500 Predictive Analytics Success",
      subtitle: "$8.2B Annual Savings - Real Case Study",
      description: "How a global manufacturing leader achieved 2,500% ROI in just 18 months",
      metrics: "2,500% ROI • $8.2B Savings • 18 Months",
      cta: "Read Case Study",
      link: "/case-studies/fortune-500-predictive-analytics-transformation-2500-roi-success-story",
      badge: "SUCCESS STORY"
    },
    {
      title: "Predictive Analytics Implementation Guide",
      subtitle: "Complete Roadmap to 2,500% ROI",
      description: "The definitive guide to implementing advanced predictive analytics that delivers unprecedented business value",
      metrics: "2,500% ROI • 94% Success Rate • 12-18 Months",
      cta: "Get Guide",
      link: "/resources/predictive-analytics-implementation-ultimate-guide-2025",
      badge: "IMPLEMENTATION GUIDE"
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
    localStorage.setItem('predictiveAnalyticsBanner2025_dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('predictiveAnalyticsBanner2025_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-800/20 to-blue-800/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              {currentContent.badge}
            </div>

            {/* Content */}
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {currentContent.title}
            </h2>
            <h3 className="text-xl md:text-2xl text-blue-200 mb-4">
              {currentContent.subtitle}
            </h3>
            <p className="text-lg text-gray-200 mb-6 max-w-3xl">
              {currentContent.description}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm text-gray-300">ROI</span>
                <div className="text-xl font-bold text-green-400">2,500%</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm text-gray-300">Savings</span>
                <div className="text-xl font-bold text-blue-400">$8.2B+</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm text-gray-300">Accuracy</span>
                <div className="text-xl font-bold text-purple-400">99.97%</div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href={currentContent.link}
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              {currentContent.cta}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="ml-6 text-gray-300 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
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

export default AdvancedPredictiveAnalyticsBanner2025;
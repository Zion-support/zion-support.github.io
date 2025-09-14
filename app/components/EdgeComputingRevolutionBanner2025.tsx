'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const EdgeComputingRevolutionBanner2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      title: "AI 2025: Edge Computing Revolution",
      subtitle: "1,800% ROI with Real-Time Intelligence",
      description: "Transform your business with next-generation edge computing delivering $4.2B+ in annual savings",
      metrics: "1,800% ROI • $4.2B+ Savings • 95% Latency Reduction",
      cta: "Explore Guide",
      link: "/blog/ai-2025-edge-computing-revolution-ultimate-breakthrough",
      badge: "EDGE BREAKTHROUGH"
    },
    {
      title: "Retail Edge Computing Success",
      subtitle: "$1.8B Annual Savings - Real Case Study",
      description: "How a global retail chain achieved 1,800% ROI with AI-powered edge computing",
      metrics: "1,800% ROI • $1.8B Savings • 2,500+ Stores",
      cta: "Read Case Study",
      link: "/case-studies/retail-edge-computing-transformation-1800-roi-success",
      badge: "SUCCESS STORY"
    },
    {
      title: "Edge Computing Implementation",
      subtitle: "Complete Roadmap to 1,800% ROI",
      description: "The definitive guide to implementing edge computing that delivers unprecedented performance",
      metrics: "1,800% ROI • 89% Success Rate • 12-15 Months",
      cta: "Get Guide",
      link: "/resources/edge-computing-implementation-ultimate-guide-2025",
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
    localStorage.setItem('edgeComputingBanner2025_dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('edgeComputingBanner2025_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-green-900 via-teal-900 to-cyan-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-800/20 to-teal-800/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-teal-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-cyan-500/10 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              {currentContent.badge}
            </div>

            {/* Content */}
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {currentContent.title}
            </h2>
            <h3 className="text-xl md:text-2xl text-teal-200 mb-4">
              {currentContent.subtitle}
            </h3>
            <p className="text-lg text-gray-200 mb-6 max-w-3xl">
              {currentContent.description}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm text-gray-300">ROI</span>
                <div className="text-xl font-bold text-green-400">1,800%</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm text-gray-300">Savings</span>
                <div className="text-xl font-bold text-teal-400">$4.2B+</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm text-gray-300">Latency</span>
                <div className="text-xl font-bold text-cyan-400">95% ↓</div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href={currentContent.link}
              className="inline-flex items-center bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
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

export default EdgeComputingRevolutionBanner2025;
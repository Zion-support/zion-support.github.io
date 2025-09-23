"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NextGenerationAutonomousSystems2025PromotionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      title: "AI 2025: Next-Generation Autonomous Systems Revolutionary Breakthrough",
      subtitle: "Ultimate Guide to 18,000% ROI",
      description: "Discover how next-generation autonomous systems are revolutionizing enterprise operations with unprecedented 18,000% ROI and $200B+ in savings across Fortune 500 companies.",
      metrics: {
        roi: "18,000%",
        savings: "$200B+",
        efficiency: "2,400%",
        accuracy: "99.97%"
      },
      url: "/blog/ai-2025-next-generation-autonomous-systems-revolutionary-breakthrough",
      type: "blog",
      readingTime: "35 min read"
    },
    {
      title: "Fortune 500 Next-Generation Autonomous Systems Success Story",
      subtitle: "$200B Annual Savings - 18,000% ROI",
      description: "Discover how a Fortune 500 manufacturing giant achieved unprecedented 18,000% ROI and $200B in annual savings through next-generation autonomous systems implementation.",
      metrics: {
        roi: "18,000%",
        savings: "$200B",
        efficiency: "2,400%",
        quality: "99.97%"
      },
      url: "/case-studies/fortune-500-next-generation-autonomous-systems-18000-roi-success-story",
      type: "case-study",
      readingTime: "25 min read"
    },
    {
      title: "Next-Generation Autonomous Systems Implementation Guide 2025",
      subtitle: "Complete Roadmap to 18,000% ROI",
      description: "Complete implementation guide for next-generation autonomous systems that have delivered 18,000% ROI and $200B+ in savings for Fortune 500 companies.",
      metrics: {
        roi: "18,000%",
        savings: "$200B+",
        efficiency: "2,400%",
        accuracy: "99.97%"
      },
      url: "/resources/next-generation-autonomous-systems-implementation-guide-2025",
      type: "resource",
      readingTime: "45 min read"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [content.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('nextGenAutonomousSystems2025BannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('nextGenAutonomousSystems2025BannerDismissed');
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 left-1/3 w-32 h-32 bg-indigo-500/10 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-400">NEW REVOLUTIONARY BREAKTHROUGH</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-yellow-400">18,000% ROI</span>
                <span className="text-xs text-yellow-400/80">PROVEN</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
              {currentContent.title}
            </h2>

            <p className="text-lg text-blue-200 mb-4 font-semibold">
              {currentContent.subtitle}
            </p>

            <p className="text-gray-200 mb-6 max-w-3xl leading-relaxed">
              {currentContent.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-green-400">{currentContent.metrics.roi}</div>
                <div className="text-xs text-gray-300">ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-blue-400">{currentContent.metrics.savings}</div>
                <div className="text-xs text-gray-300">SAVINGS</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-purple-400">{currentContent.metrics.efficiency}</div>
                <div className="text-xs text-gray-300">EFFICIENCY</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-yellow-400">{currentContent.metrics.accuracy || currentContent.metrics.quality}</div>
                <div className="text-xs text-gray-300">ACCURACY</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Read {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white/30 hover:border-white text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10"
              >
                Get Consultation
              </Link>
            </div>

            {/* Reading Time */}
            <div className="mt-4 flex items-center space-x-2 text-sm text-gray-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{currentContent.readingTime}</span>
              <span className="text-gray-500">•</span>
              <span className="text-green-400 font-medium">FEATURED CONTENT</span>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="hidden lg:block relative">
            <div className="w-64 h-64 relative">
              {/* Animated AI Brain */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full animate-bounce"></div>
              
              {/* Central Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl">🧠</div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
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

        {/* Success Badge */}
        <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
          🚀 REVOLUTIONARY BREAKTHROUGH
        </div>
      </div>
    </div>
  );
};

export default NextGenerationAutonomousSystems2025PromotionBanner;
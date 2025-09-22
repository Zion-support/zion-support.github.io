'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateRevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      title: "AI 2025: The Ultimate AI Revolution",
      subtitle: "Ultimate Breakthrough Guide to 30,000% ROI",
      description: "Discover how Fortune 500 companies are achieving extraordinary results through next-generation AI implementations.",
      metrics: "30,000% ROI • $150B Savings • 99.99% Accuracy",
      cta: "Download Ultimate Guide",
      link: "/resources/ai-revolution-implementation-ultimate-guide-2025",
      type: "Ultimate Guide"
    },
    {
      title: "Fortune 500 AI Revolution Success",
      subtitle: "$150B Annual Savings - 30,000% ROI Success Story",
      description: "Learn how a Fortune 50 manufacturing company achieved the highest documented ROI in AI transformation history.",
      metrics: "30,000% ROI • $150B Savings • 18 Months",
      cta: "Read Success Story",
      link: "/case-studies/fortune-500-ai-revolution-30000-roi-success-story",
      type: "Case Study"
    },
    {
      title: "Revolutionary AI Technologies",
      subtitle: "Quantum-Enhanced AI • Neural Superintelligence • Synthetic Intelligence",
      description: "Explore the cutting-edge AI technologies transforming business operations and delivering unprecedented results.",
      metrics: "1,000x Processing • 99.99% Accuracy • 5,000% Efficiency",
      cta: "Explore Technologies",
      link: "/blog/ai-2025-ultimate-ai-revolution-2025-ultimate-breakthrough",
      type: "Blog Post"
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
    localStorage.setItem('ai2025-ultimate-revolution-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai2025-ultimate-revolution-banner-dismissed');
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-blue-300/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-purple-300/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-indigo-300/30 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                🚀 NEW ULTIMATE BREAKTHROUGH
              </div>
              <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                {currentContent.type}
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {currentContent.title}
            </h2>
            
            <h3 className="text-lg md:text-xl text-blue-200 mb-3">
              {currentContent.subtitle}
            </h3>

            <p className="text-gray-200 mb-4 max-w-2xl">
              {currentContent.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-sm font-medium text-yellow-300">Success Metrics:</span>
                <span className="ml-2 text-sm text-white">{currentContent.metrics}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href={currentContent.link}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {currentContent.cta}
              </Link>
              <Link
                href="/ai-revolution-2025"
                className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="hidden lg:block relative">
            <div className="w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
              <div className="text-6xl">🤖</div>
            </div>
            
            {/* Floating Metrics */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              30,000% ROI
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce">
              $150B Savings
            </div>
            <div className="absolute top-1/2 -right-8 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              99.99% Accuracy
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
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Dismiss Button */}
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

export default AI2025UltimateRevolutionBanner;
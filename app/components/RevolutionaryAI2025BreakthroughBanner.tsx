'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const RevolutionaryAI2025BreakthroughBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'revolutionary-breakthrough-guide',
      title: 'AI 2025: The Revolutionary Breakthrough - Ultimate Success Guide',
      description: 'Transform your business with cutting-edge AI technologies achieving 2,000% ROI',
      url: '/blog/ai-2025-revolutionary-breakthrough-ultimate-success-guide',
      type: 'blog',
      metrics: {
        roi: '2,000%',
        savings: '$5.2B+',
        efficiency: '99.8%'
      },
      badge: 'NEW',
      readingTime: '25 min read'
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 AI Transformation: $5.2B Annual Savings with 2,000% ROI',
      description: 'How a global manufacturing leader achieved unprecedented results through revolutionary AI implementation',
      url: '/case-studies/fortune-500-ai-transformation-2000-roi-ultimate-success-story',
      type: 'case-study',
      metrics: {
        roi: '2,000%',
        savings: '$5.2B',
        timeline: '18 months'
      },
      badge: 'SUCCESS STORY',
      readingTime: '22 min read'
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Framework: Complete Roadmap to 2,000% ROI',
      description: 'The definitive guide to achieving breakthrough results with AI implementation in 2025',
      url: '/resources/ai-2025-implementation-ultimate-framework-2000-roi',
      type: 'resource',
      metrics: {
        roi: '2,000%',
        success: '94%',
        timeline: '18 months'
      },
      badge: 'FRAMEWORK',
      readingTime: '35 min read'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionary-ai-2025-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-ai-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-bounce delay-2000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
                <span className="animate-pulse">🚀</span>
                <span className="ml-2">REVOLUTIONARY AI 2025 BREAKTHROUGH</span>
              </div>

              {/* Main Content */}
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {currentContent.title}
                </h2>
                <p className="text-lg md:text-xl text-blue-100 mb-6 max-w-4xl">
                  {currentContent.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</span>
                    <span className="text-blue-200">ROI</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-2xl font-bold text-yellow-400">{currentContent.metrics.savings}</span>
                    <span className="text-blue-200">Savings</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-2xl font-bold text-purple-400">{currentContent.metrics.efficiency || currentContent.metrics.success}</span>
                    <span className="text-blue-200">{currentContent.metrics.efficiency ? 'Efficiency' : 'Success Rate'}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={currentContent.url}
                    className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <span>Explore {currentContent.type === 'blog' ? 'Guide' : currentContent.type === 'case-study' ? 'Case Study' : 'Framework'}</span>
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
                  >
                    Get Expert Consultation
                  </Link>
                </div>

                {/* Content Info */}
                <div className="flex items-center space-x-4 mt-4 text-blue-200">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {currentContent.readingTime}
                  </span>
                  <span className="px-3 py-1 bg-blue-800/50 rounded-full text-sm font-medium">
                    {currentContent.badge}
                  </span>
                </div>
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="ml-4 p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Dismiss banner"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
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

export default RevolutionaryAI2025BreakthroughBanner;
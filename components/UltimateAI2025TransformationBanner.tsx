'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateAI2025TransformationBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Auto-rotate content every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const featuredContent = [
    {
      id: 'ultimate-business-automation',
      title: 'AI 2025: The Ultimate Business Automation Revolution - Complete Guide',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-business-automation-revolution-complete-guide',
      description: 'Discover how AI automation is transforming businesses with 1,500% ROI and $5.2B in savings.',
      metrics: {
        roi: '1,500%',
        savings: '$5.2B',
        efficiency: '95%',
        satisfaction: '98%'
      },
      badge: 'NEW ULTIMATE GUIDE',
      gradient: 'from-purple-600 via-blue-600 to-indigo-600'
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation: $5.2B Annual Savings with 1,500% ROI',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-1500-percent-roi-ultimate-success',
      description: 'Ultimate success story: How a Fortune 500 company achieved unprecedented ROI through AI automation.',
      metrics: {
        roi: '1,500%',
        savings: '$5.2B',
        efficiency: '156%',
        satisfaction: '94%'
      },
      badge: 'ULTIMATE SUCCESS STORY',
      gradient: 'from-green-600 via-teal-600 to-cyan-600'
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework: Complete Guide to 1,500% ROI',
      type: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-success-framework-complete',
      description: 'The definitive guide to implementing AI automation with proven strategies that deliver 1,500% ROI.',
      metrics: {
        roi: '1,500%',
        success: '98%',
        timeline: '18 months',
        projects: '500+'
      },
      badge: 'COMPLETE FRAMEWORK',
      gradient: 'from-orange-600 via-red-600 to-pink-600'
    }
  ];

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-ai-2025-banner-dismissed', 'true');
  };

  // Check if banner was previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-ai-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-gradient-to-r ${currentContent.gradient} opacity-90`}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-white bg-opacity-10 rounded-full animate-pulse delay-2000"></div>
            <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-white bg-opacity-10 rounded-full animate-pulse delay-3000"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-white text-sm font-bold animate-pulse">🚀 {currentContent.badge}</span>
            </div>

            {/* Main Content */}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {currentContent.title}
            </h1>

            <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              {currentContent.description}
            </p>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {currentContent.metrics.roi}
                </div>
                <div className="text-white text-sm opacity-90">ROI</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {currentContent.metrics.savings || currentContent.metrics.success}
                </div>
                <div className="text-white text-sm opacity-90">
                  {currentContent.metrics.savings ? 'Savings' : 'Success Rate'}
                </div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {currentContent.metrics.efficiency || currentContent.metrics.timeline}
                </div>
                <div className="text-white text-sm opacity-90">
                  {currentContent.metrics.efficiency ? 'Efficiency' : 'Timeline'}
                </div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {currentContent.metrics.satisfaction || currentContent.metrics.projects}
                </div>
                <div className="text-white text-sm opacity-90">
                  {currentContent.metrics.satisfaction ? 'Satisfaction' : 'Projects'}
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href={currentContent.url}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Read {currentContent.type === 'blog' ? 'Complete Guide' : currentContent.type === 'case-study' ? 'Success Story' : 'Framework'}
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Assessment
              </Link>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center space-x-2 mb-4">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                  }`}
                />
              ))}
            </div>

            {/* Content Type Indicator */}
            <div className="text-white text-sm opacity-75">
              {currentContent.type === 'blog' && '📖 Comprehensive Guide'}
              {currentContent.type === 'case-study' && '📊 Real Success Story'}
              {currentContent.type === 'resource' && '🛠️ Implementation Framework'}
            </div>
          </div>
        </div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors z-20"
        aria-label="Dismiss banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default UltimateAI2025TransformationBanner;
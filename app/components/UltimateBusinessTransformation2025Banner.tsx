'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateBusinessTransformation2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'ultimate-business-transformation',
      title: 'AI 2025: The Ultimate Business Transformation Revolution',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-business-transformation-revolution-ultimate-breakthrough',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        efficiency: '95%',
        satisfaction: '98%'
      },
      description: 'Transform your enterprise with revolutionary AI solutions that deliver unprecedented ROI and operational excellence.',
      readingTime: '25 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-1500-percent-roi-ultimate-success-story',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        efficiency: '156%',
        timeline: '18 months'
      },
      description: 'How a $50B manufacturing giant achieved unprecedented success through strategic AI implementation.',
      readingTime: '18 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework',
      type: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-success-framework',
      metrics: {
        roi: '1,500%',
        success: '94%',
        timeline: '18 months',
        projects: '500+'
      },
      description: 'The definitive blueprint for enterprise AI transformation and unprecedented business success.',
      readingTime: '30 min read',
      isNew: true,
      featured: true
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
    localStorage.setItem('ultimate-business-transformation-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-business-transformation-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                🚀 ULTIMATE BREAKTHROUGH
              </div>
              <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                NEW 2025 CONTENT
              </div>
            </div>

            {/* Content */}
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-4 max-w-3xl">
                {currentContent.description}
              </p>
              
              {/* Metrics */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.roi}</div>
                  <div className="text-sm text-blue-200">ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold text-green-400">{currentContent.metrics.savings}</div>
                  <div className="text-sm text-blue-200">Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.efficiency}</div>
                  <div className="text-sm text-blue-200">Efficiency</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.satisfaction || currentContent.metrics.success}</div>
                  <div className="text-sm text-blue-200">Success Rate</div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  Read Full {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'} →
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  Get Consultation
                </Link>
              </div>
            </div>
          </div>

          {/* Dismiss button */}
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

        {/* Progress indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {featuredContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateBusinessTransformation2025Banner;
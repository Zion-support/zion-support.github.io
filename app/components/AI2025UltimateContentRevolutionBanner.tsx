'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateContentRevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentPieces = [
    {
      id: 'ultimate-content-revolution',
      title: 'AI 2025: The Ultimate Content Revolution - 25,000% ROI',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-content-revolution-ultimate-breakthrough',
      metrics: {
        roi: '25,000%',
        revenue: '$445M',
        production: '2,400%',
        engagement: '1,800%'
      },
      description: 'Revolutionary AI-powered content creation transforming Fortune 500 companies'
    },
    {
      id: 'fortune-500-content-success',
      title: 'Fortune 500 Content Revolution: $445M Annual Revenue Success',
      type: 'case-study',
      url: '/case-studies/fortune-500-ultimate-content-revolution-25000-roi-success-story',
      metrics: {
        roi: '25,000%',
        savings: '$2.8B',
        efficiency: '3,200%',
        accuracy: '99.7%'
      },
      description: 'Proven success story of content revolution implementation'
    },
    {
      id: 'content-implementation-guide',
      title: 'AI Content Revolution Implementation Guide: Complete Roadmap',
      type: 'resource',
      url: '/resources/ai-2025-ultimate-content-revolution-implementation-guide',
      metrics: {
        roi: '25,000%',
        timeline: '18 months',
        success: '99.7%',
        guide: '45 min read'
      },
      description: 'Step-by-step implementation roadmap for content revolution success'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai2025-content-revolution-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai2025-content-revolution-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = contentPieces[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center mb-4">
                <div className="bg-white/20 rounded-full px-4 py-2 mr-4">
                  <span className="text-sm font-semibold">🚀 AI 2025 ULTIMATE CONTENT REVOLUTION</span>
                </div>
                <div className="bg-green-500/20 rounded-full px-4 py-2">
                  <span className="text-sm font-semibold">25,000% ROI BREAKTHROUGH</span>
                </div>
              </div>

              {/* Content Showcase */}
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {currentContent.title}
                </h2>
                <p className="text-lg text-blue-100 mb-4">
                  {currentContent.description}
                </p>
                
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                    <div className="text-sm text-blue-100">ROI</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.revenue || currentContent.metrics.savings}</div>
                    <div className="text-sm text-blue-100">Revenue/Savings</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.production || currentContent.metrics.efficiency}</div>
                    <div className="text-sm text-blue-100">Production/Efficiency</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.engagement || currentContent.metrics.accuracy}</div>
                    <div className="text-sm text-blue-100">Engagement/Accuracy</div>
                  </div>
                </div>

                {/* Content Type Badge */}
                <div className="flex items-center mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    currentContent.type === 'blog' ? 'bg-blue-500/30 text-blue-200' :
                    currentContent.type === 'case-study' ? 'bg-green-500/30 text-green-200' :
                    'bg-purple-500/30 text-purple-200'
                  }`}>
                    {currentContent.type === 'blog' ? '📝 Blog Post' :
                     currentContent.type === 'case-study' ? '📊 Case Study' :
                     '📚 Implementation Guide'}
                  </span>
                  <span className="ml-3 text-sm text-blue-200">
                    {currentContent.metrics.guide || 'Featured Content'}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Explore {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                </Link>
                <Link
                  href="/resources/ai-2025-ultimate-content-revolution-implementation-guide"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-center"
                >
                  Get Implementation Guide
                </Link>
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-colors text-center"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="ml-4 text-white/70 hover:text-white transition-colors"
              aria-label="Dismiss banner"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {contentPieces.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
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

export default AI2025UltimateContentRevolutionBanner;
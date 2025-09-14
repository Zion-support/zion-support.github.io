'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateTransformationBanner2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'ultimate-transformation',
      title: 'AI 2025: The Ultimate Business Transformation Revolution',
      subtitle: '950% ROI Breakthrough - $4.2B Market Transformation',
      description: 'Discover how Fortune 500 companies achieve 750% average ROI through strategic AI transformation with 99.8% client satisfaction.',
      metrics: {
        roi: '950%',
        savings: '$4.2B',
        satisfaction: '99.8%',
        success: '98%'
      },
      url: '/blog/ai-2025-ultimate-business-transformation-revolution',
      type: 'blog',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'enterprise-success',
      title: 'AI 2025 Ultimate Enterprise Transformation Success',
      subtitle: '$2.8B Company Achieves 950% ROI in 18 Months',
      description: 'Real-world case study: Fortune 100 manufacturing conglomerate generates $1.2 billion in annual savings with 99.9% operational efficiency.',
      metrics: {
        roi: '950%',
        savings: '$1.2B',
        efficiency: '99.9%',
        timeline: '18 months'
      },
      url: '/case-studies/ai-2025-ultimate-enterprise-transformation-success-story',
      type: 'case-study',
      readingTime: '20 min read',
      featured: true
    },
    {
      id: 'implementation-guide',
      title: 'AI 2025 Ultimate Implementation Master Guide',
      subtitle: 'From Strategy to 950% ROI in 18 Months',
      description: 'Comprehensive framework for achieving 950% ROI through AI transformation, based on 500+ successful enterprise implementations.',
      metrics: {
        roi: '950%',
        success: '98%',
        savings: '$4.2B',
        timeline: '18 months'
      },
      url: '/resources/ai-2025-ultimate-implementation-master-guide',
      type: 'resource',
      readingTime: '45 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [content.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-transformation-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-transformation-banner-dismissed');
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              aria-label="Dismiss banner"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="max-w-4xl">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  🚀 NEW ULTIMATE CONTENT 2025
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  {currentContent.type.toUpperCase()}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h2>
              
              <p className="text-xl text-blue-200 mb-4 font-semibold">
                {currentContent.subtitle}
              </p>
              
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.roi}</div>
                  <div className="text-sm text-gray-300">ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{currentContent.metrics.savings}</div>
                  <div className="text-sm text-gray-300">Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.satisfaction || currentContent.metrics.efficiency || currentContent.metrics.success}</div>
                  <div className="text-sm text-gray-300">Success Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.timeline || '18 months'}</div>
                  <div className="text-sm text-gray-300">Timeline</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Read Full {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'} →
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  Get AI Strategy Consultation
                </Link>
              </div>

              {/* Reading Time */}
              <div className="mt-4 text-sm text-gray-300">
                📖 {currentContent.readingTime} • Featured Content
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
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
  );
};

export default UltimateTransformationBanner2025;
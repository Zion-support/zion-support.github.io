'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateBusinessIntelligenceRevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  // Check if banner was dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('ai2025-ultimate-business-intelligence-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  // Auto-rotate content every 8 seconds
  useEffect(() => {
    if (isDismissed) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ai2025-ultimate-business-intelligence-banner-dismissed', 'true');
  };

  const contentItems = [
    {
      id: 'ultimate-business-intelligence-revolution',
      title: 'AI 2025: The Ultimate Business Intelligence Revolution',
      subtitle: '18,000% ROI Through Revolutionary AI-Powered Decision Making',
      description: 'Transform your enterprise with next-generation AI-powered business intelligence systems that process, analyze, and act on data with superhuman speed and accuracy.',
      metrics: {
        roi: '18,000%',
        savings: '$89.2B+',
        speed: '2,400% faster',
        accuracy: '99.97%'
      },
      cta: 'Discover the Revolution',
      link: '/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-breakthrough'
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 Ultimate Business Intelligence Success',
      subtitle: '$89.2B Annual Savings - 18,000% ROI Success Story',
      description: 'How a global manufacturing leader achieved unprecedented ROI through revolutionary AI-powered business intelligence systems in just 18 months.',
      metrics: {
        roi: '18,000%',
        savings: '$89.2B',
        timeline: '18 months',
        accuracy: '99.97%'
      },
      cta: 'Read Success Story',
      link: '/case-studies/fortune-500-ultimate-business-intelligence-18000-roi-success-story'
    },
    {
      id: 'implementation-ultimate-guide',
      title: 'AI 2025 Ultimate Business Intelligence Implementation Guide',
      subtitle: 'Complete Roadmap to 18,000% ROI',
      description: 'The definitive guide to implementing revolutionary AI-powered business intelligence systems with proven results and step-by-step implementation roadmap.',
      metrics: {
        roi: '18,000%',
        guide: 'Complete',
        timeline: '18 months',
        success: '99.7%'
      },
      cta: 'Get Implementation Guide',
      link: '/resources/ai-2025-ultimate-business-intelligence-implementation-ultimate-guide'
    }
  ];

  if (isDismissed) return null;

  const currentContent = contentItems[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-4 w-1 h-1 bg-white/30 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-white/20 rounded-full px-3 py-1 text-sm font-medium">
                🚀 NEW ULTIMATE BREAKTHROUGH
              </div>
              <div className="bg-green-500/20 rounded-full px-3 py-1 text-sm font-medium">
                ⚡ 18,000% ROI
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
              {currentContent.title}
            </h2>
            
            <p className="text-lg md:text-xl text-blue-200 mb-3 font-semibold">
              {currentContent.subtitle}
            </p>

            <p className="text-gray-200 mb-6 text-sm md:text-base leading-relaxed max-w-4xl">
              {currentContent.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-green-400">{currentContent.metrics.roi}</div>
                <div className="text-xs text-gray-300">ROI</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-blue-400">{currentContent.metrics.savings}</div>
                <div className="text-xs text-gray-300">Savings</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-purple-400">{currentContent.metrics.speed || currentContent.metrics.timeline || currentContent.metrics.guide}</div>
                <div className="text-xs text-gray-300">{currentContent.metrics.speed ? 'Faster' : currentContent.metrics.timeline ? 'Timeline' : 'Guide'}</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-yellow-400">{currentContent.metrics.accuracy || currentContent.metrics.success}</div>
                <div className="text-xs text-gray-300">{currentContent.metrics.accuracy ? 'Accuracy' : 'Success'}</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={currentContent.link}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg text-center"
              >
                {currentContent.cta}
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-all duration-200 text-center"
              >
                Get Consultation
              </Link>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-200 p-1"
            aria-label="Dismiss banner"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AI2025UltimateBusinessIntelligenceRevolutionBanner;
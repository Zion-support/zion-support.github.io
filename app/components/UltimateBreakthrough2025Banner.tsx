'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, X, Star, TrendingUp, Zap, Target } from 'lucide-react';

const UltimateBreakthrough2025Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('ultimate-breakthrough-2025-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    // Auto-rotate slides every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('ultimate-breakthrough-2025-banner-dismissed', 'true');
  };

  const contentSlides = [
    {
      id: 'enterprise-ai-revolution',
      title: 'AI 2025: The Enterprise AI Revolution',
      subtitle: 'Ultimate Breakthrough Guide to 1000% ROI',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 1000% ROI with revolutionary AI implementations.',
      metrics: {
        roi: '1000%',
        savings: '$5.2B',
        accuracy: '99.9%',
        efficiency: '340%'
      },
      type: 'blog',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough',
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation Success',
      subtitle: '$5.2B Annual Savings with 1,000% ROI',
      description: 'How a $75B manufacturing giant achieved unprecedented 1,000% ROI and $5.2B annual savings in just 18 months.',
      metrics: {
        roi: '1000%',
        savings: '$5.2B',
        timeline: '18 months',
        efficiency: '340%'
      },
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-1000-percent-roi-ultimate-success',
      featured: true
    },
    {
      id: 'implementation-roadmap',
      title: 'AI 2025 Implementation Ultimate Roadmap',
      subtitle: 'From Strategy to 1,000% ROI in 18 Months',
      description: 'Complete step-by-step roadmap to achieve 1,000% ROI with AI transformation. Proven framework used by Fortune 500 companies.',
      metrics: {
        roi: '1000%',
        timeline: '18 months',
        success: '99%',
        value: '$19.1B'
      },
      type: 'resource',
      url: '/resources/ai-2025-implementation-ultimate-roadmap-1000-percent-roi',
      featured: true
    }
  ];

  if (!isVisible || isDismissed) return null;

  const currentContent = contentSlides[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-4 w-1 h-1 bg-cyan-400 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1 pr-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center space-x-2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                  <Star className="w-4 h-4" />
                  <span>BREAKTHROUGH 2025</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-bold">
                  <TrendingUp className="w-4 h-4" />
                  <span>1000% ROI</span>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {currentContent.title}
              </h2>
              <h3 className="text-lg md:text-xl text-blue-200 mb-3">
                {currentContent.subtitle}
              </h3>
              <p className="text-gray-200 mb-4 max-w-2xl">
                {currentContent.description}
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.roi}</div>
                  <div className="text-xs text-gray-300">ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-400">{currentContent.metrics.savings}</div>
                  <div className="text-xs text-gray-300">Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.accuracy || currentContent.metrics.timeline}</div>
                  <div className="text-xs text-gray-300">{currentContent.metrics.accuracy ? 'Accuracy' : 'Timeline'}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.efficiency || currentContent.metrics.success || currentContent.metrics.value}</div>
                  <div className="text-xs text-gray-300">{currentContent.metrics.efficiency ? 'Efficiency' : currentContent.metrics.success ? 'Success Rate' : 'Value'}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Explore {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  <Target className="w-5 h-5 mr-2" />
                  Get Your 1000% ROI Assessment
                </Link>
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {contentSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-yellow-400 w-8' : 'bg-white/30'
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

export default UltimateBreakthrough2025Banner;
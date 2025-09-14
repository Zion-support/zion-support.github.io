'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, XMarkIcon, StarIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const UltimateAIBreakthrough2025Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredContent = [
    {
      id: 'ultimate-breakthrough-guide',
      title: 'AI 2025: The Enterprise Automation Ultimate Breakthrough - Complete Guide',
      description: 'Discover how Fortune 500 companies are achieving 1,200% ROI with revolutionary AI automation.',
      url: '/blog/ai-2025-enterprise-automation-ultimate-breakthrough-complete-guide',
      type: 'blog',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '89%',
        satisfaction: '98%'
      },
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings with 1,200% ROI',
      description: 'Complete case study showing how a $50B company achieved unprecedented results.',
      url: '/case-studies/fortune-500-ai-transformation-1200-percent-roi-ultimate-success',
      type: 'case-study',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '156%',
        satisfaction: '89%'
      },
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'implementation-framework',
      title: 'AI 2025 Implementation Ultimate Success Framework: Complete Guide to 1,200% ROI',
      description: 'The definitive framework for achieving 1,200% ROI with AI implementation.',
      url: '/resources/ai-2025-implementation-ultimate-success-framework',
      type: 'resource',
      metrics: {
        roi: '1,200%',
        success: '94%',
        efficiency: '67%',
        satisfaction: '89%'
      },
      readingTime: '30 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-ai-breakthrough-2025-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-ai-breakthrough-2025-dismissed');
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <StarIcon className="h-6 w-6 text-yellow-400" />
                <span className="text-sm font-medium bg-yellow-400/20 px-3 py-1 rounded-full">
                  ULTIMATE BREAKTHROUGH 2025
                </span>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Content showcase */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  The Ultimate AI Breakthrough of 2025
                </h2>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Fortune 500 companies are achieving <span className="text-yellow-400 font-bold">1,200% ROI</span> with 
                  revolutionary AI automation. Discover the complete framework that's transforming enterprise operations worldwide.
                </p>
              </div>

              {/* Featured content card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-medium bg-green-500/20 text-green-300 px-2 py-1 rounded-full">
                      {currentContent.type.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-300">{currentContent.readingTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <StarIcon className="h-4 w-4 text-yellow-400" />
                    <span className="text-xs text-yellow-400">FEATURED</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  {currentContent.title}
                </h3>
                <p className="text-sm text-gray-200 mb-4 line-clamp-2">
                  {currentContent.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <ChartBarIcon className="h-4 w-4 text-green-400" />
                    <span className="text-sm">
                      <span className="text-green-400 font-bold">{currentContent.metrics.roi}</span> ROI
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CurrencyDollarIcon className="h-4 w-4 text-blue-400" />
                    <span className="text-sm">
                      <span className="text-blue-400 font-bold">{currentContent.metrics.savings}</span> Savings
                    </span>
                  </div>
                </div>

                <Link
                  href={currentContent.url}
                  className="inline-flex items-center space-x-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                >
                  <span>Read Now</span>
                  <ChevronRightIcon className="h-4 w-4" />
                </Link>
              </div>

              {/* Slide indicators */}
              <div className="flex space-x-2">
                {featuredContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right side - Statistics and CTA */}
            <div className="space-y-8">
              {/* Success metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">1,200%</div>
                  <div className="text-sm text-gray-200">Average ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-bold text-green-400 mb-2">$2.8B</div>
                  <div className="text-sm text-gray-200">Annual Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-bold text-blue-400 mb-2">94%</div>
                  <div className="text-sm text-gray-200">Success Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                  <div className="text-sm text-gray-200">Companies</div>
                </div>
              </div>

              {/* Call to action */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Ready to Achieve 1,200% ROI?</h3>
                <p className="text-gray-200">
                  Get your personalized AI implementation roadmap and start your transformation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-200"
                  >
                    <span>Get Free Consultation</span>
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/resources/ai-2025-implementation-ultimate-success-framework"
                    className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200"
                  >
                    <span>View Framework</span>
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateAIBreakthrough2025Banner;
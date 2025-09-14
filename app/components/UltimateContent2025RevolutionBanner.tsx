'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, Star, TrendingUp, Users, Zap } from 'lucide-react';

const UltimateContent2025RevolutionBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-2025-revolution-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ultimate-content-2025-revolution-banner-dismissed', 'true');
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
  };

  const contentSlides = [
    {
      id: 'ai-2025-ultimate-business-transformation-revolution',
      title: 'AI 2025: The Ultimate Business Transformation Revolution',
      description: 'Achieve 1,000% ROI through intelligent automation and autonomous business operations',
      type: 'blog',
      metrics: {
        roi: '1,000%',
        savings: '$500M+',
        efficiency: '99.8%'
      },
      url: '/blog/ai-2025-ultimate-business-transformation-revolution',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'ai-transformation-1000-roi-ultimate-success-story',
      title: 'AI Transformation Success: $1.2B Company Achieves 1,000% ROI',
      description: 'Real-world case study showing how a manufacturing giant achieved unprecedented results',
      type: 'case-study',
      metrics: {
        roi: '1,000%',
        savings: '$280M',
        timeline: '18 months'
      },
      url: '/case-studies/ai-transformation-1000-roi-ultimate-success-story',
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'ai-2025-implementation-roadmap',
      title: 'AI 2025 Implementation Roadmap: From Strategy to 1,000% ROI',
      description: 'Complete step-by-step guide for achieving extraordinary AI transformation results',
      type: 'resource',
      metrics: {
        roi: '1,000%',
        success: '99%',
        timeline: '18 months'
      },
      url: '/resources/ai-2025-implementation-roadmap',
      readingTime: '15 min read',
      featured: true
    }
  ];

  if (isDismissed) return null;

  const currentContent = contentSlides[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-10 right-1/3 w-8 h-8 bg-purple-400 rounded-full opacity-40 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-300">NEW CONTENT</span>
          </div>
          <button
            onClick={handleDismiss}
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold text-yellow-300 uppercase tracking-wide">
                Featured Content
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              {currentContent.title}
            </h2>

            <p className="text-lg text-gray-200 leading-relaxed">
              {currentContent.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                <div className="text-sm text-gray-300">ROI</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                <div className="text-sm text-gray-300">Savings</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">
                  {currentContent.metrics.efficiency || currentContent.metrics.success || currentContent.metrics.timeline}
                </div>
                <div className="text-sm text-gray-300">
                  {currentContent.metrics.efficiency ? 'Efficiency' : 
                   currentContent.metrics.success ? 'Success Rate' : 'Timeline'}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Zap className="w-4 h-4 mr-2" />
                Read {currentContent.type === 'case-study' ? 'Case Study' : 
                      currentContent.type === 'resource' ? 'Guide' : 'Article'}
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                View All Resources
              </Link>
            </div>

            {/* Reading Time and Type Badge */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm text-gray-300">{currentContent.readingTime}</span>
              </div>
              <div className="px-3 py-1 bg-purple-600 rounded-full text-xs font-medium">
                {currentContent.type === 'case-study' ? 'Case Study' : 
                 currentContent.type === 'resource' ? 'Implementation Guide' : 'Blog Post'}
              </div>
            </div>
          </div>

          {/* Navigation and Preview Section */}
          <div className="space-y-6">
            {/* Content Preview Cards */}
            <div className="space-y-4">
              {contentSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                    index === currentSlide
                      ? 'border-white bg-white bg-opacity-10'
                      : 'border-gray-600 bg-white bg-opacity-5 hover:bg-opacity-10'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm mb-1 line-clamp-2">
                        {slide.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-xs text-gray-300">
                        <span>{slide.readingTime}</span>
                        <span>•</span>
                        <span className="capitalize">{slide.type.replace('-', ' ')}</span>
                      </div>
                    </div>
                    {index === currentSlide && (
                      <div className="w-2 h-2 bg-green-400 rounded-full ml-2"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors"
                aria-label="Previous content"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Progress Dots */}
              <div className="flex space-x-2">
                {contentSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-white' : 'bg-gray-500'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors"
                aria-label="Next content"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Auto-rotation Indicator */}
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 text-sm text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Auto-rotating every 8 seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Auto-rotation Effect */}
      <style jsx>{`
        @keyframes autoRotate {
          0%, 20% { opacity: 1; }
          25%, 95% { opacity: 0.7; }
          100% { opacity: 1; }
        }
        
        .auto-rotate {
          animation: autoRotate 8s infinite;
        }
      `}</style>
    </div>
  );
};

export default UltimateContent2025RevolutionBanner;
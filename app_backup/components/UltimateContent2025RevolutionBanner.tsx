'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, Star, TrendingUp, Users, Award } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi?: string;
    savings?: string;
    accuracy?: string;
    satisfaction?: string;
  };
  featured: boolean;
}

const UltimateContent2025RevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const featuredContent = [
    {
      id: 'ai-2025-ultimate-business-transformation-revolution',
      title: 'AI 2025: The Ultimate Business Transformation Revolution',
      subtitle: '1,200% ROI in 6 Months',
      description: 'Discover how Fortune 500 companies are achieving unprecedented results with cutting-edge AI technologies.',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-business-transformation-revolution',
      metrics: {
        roi: '1,200%',
        savings: '$6.5B',
        efficiency: '89%',
        timeline: '6 months'
      },
      tags: ['Revolution', 'ROI', 'Fortune 500', 'Transformation'],
      featured: true
    },
    {
      id: 'fortune-500-ai-transformation-2025-ultimate-success-story',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings',
      subtitle: '567% ROI in 18 Months',
      description: 'Real-world case study of a manufacturing giant that revolutionized their operations with AI.',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        efficiency: '95%',
        timeline: '18 months'
      },
      tags: ['Case Study', 'Fortune 500', 'Success Story', 'Manufacturing'],
      featured: true
    },
    {
      id: 'ai-2025-implementation-roadmap-800-roi',
      title: 'AI 2025 Implementation Ultimate Roadmap',
      subtitle: 'From Strategy to 800% ROI in 18 Months',
      description: 'Comprehensive step-by-step guide for implementing AI technologies that deliver extraordinary results.',
      type: 'resource',
      url: '/resources/ai-2025-implementation-roadmap-800-roi',
      metrics: {
        roi: '800%',
        savings: '$5.6B',
        efficiency: '95%',
        timeline: '18 months'
      },
      tags: ['Implementation', 'Roadmap', 'Strategy', 'ROI'],
      featured: true
    }
  ];

  useEffect(() => {
    if (isDismissed) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isDismissed, featuredContent.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ultimate-content-2025-revolution-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-2025-revolution-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredContent.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ultimate-content-2025-revolution-banner-dismissed', 'true');
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  };

  if (isDismissed) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-purple-400/30 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-400">NEW CONTENT 2025</span>
          </div>
          <button
            onClick={handleDismiss}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
              {/* Content Info */}
              <div className="flex-1 pr-8">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium text-yellow-400">FEATURED CONTENT</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                  {currentContent.title}
                </h2>
                
                <p className="text-lg text-blue-200 mb-4 font-semibold">
                  {currentContent.subtitle}
                </p>
                
                <p className="text-gray-200 mb-6 leading-relaxed">
                  {currentContent.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                    <div className="text-xs text-gray-300">ROI</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                    <div className="text-xs text-gray-300">Savings</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.efficiency}</div>
                    <div className="text-xs text-gray-300">Efficiency</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-orange-400">{currentContent.metrics.timeline}</div>
                    <div className="text-xs text-gray-300">Timeline</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentContent.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={currentContent.url}
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Read {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                  </Link>
                  <Link
                    href="/resources"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 hover:bg-white/10 rounded-lg font-semibold transition-all duration-200"
                  >
                    <TrendingUp className="w-4 h-4 mr-2" />
                    View All Resources
                  </Link>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex flex-col items-center space-y-4">
                <button
                  onClick={prevSlide}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Previous content"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                {/* Slide Indicators */}
                <div className="flex flex-col space-y-2">
                  {featuredContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentSlide ? 'bg-white' : 'bg-white/40'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextSlide}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Next content"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1 bg-white/20">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-5000 ease-linear"
            style={{ width: `${((currentSlide + 1) / featuredContent.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025RevolutionBanner;
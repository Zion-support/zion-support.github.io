'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, Star, TrendingUp, Users, Zap } from 'lucide-react';

const UltimateContent2025ShowcaseBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const contentPieces = [
    {
      id: 'ultimate-business-transformation',
      title: 'AI 2025: The Ultimate Business Transformation Revolution',
      subtitle: '1,200% ROI in 6 Months - Complete Guide',
      type: 'blog',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        efficiency: '89%',
        satisfaction: '99.2%'
      },
      url: '/blog/ai-2025-ultimate-business-transformation-revolution',
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings',
      subtitle: 'Ultimate Success Story - 567% ROI in 18 Months',
      type: 'case-study',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        timeline: '18 months',
        satisfaction: '99.2%'
      },
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      readingTime: '15 min read',
      featured: true
    },
    {
      id: 'implementation-roadmap',
      title: 'AI Implementation Ultimate Roadmap 2025',
      subtitle: 'From Strategy to 800% ROI in 18 Months',
      type: 'resource',
      metrics: {
        roi: '800%',
        savings: '$173.7M',
        success: '99%',
        timeline: '18 months'
      },
      url: '/resources/ai-implementation-ultimate-roadmap-2025-comprehensive',
      readingTime: '25 min read',
      featured: true
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const dismissed = localStorage.getItem('ultimate-content-2025-banner-dismissed');
      setIsDismissed(dismissed === 'true');
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [contentPieces.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('ultimate-content-2025-banner-dismissed', 'true');
    }
  };

  if (isDismissed) return null;

  const currentContent = contentPieces[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">NEW ULTIMATE CONTENT 2025</span>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content Preview */}
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-4">
                    <Star className="w-4 h-4 mr-2 text-yellow-400" />
                    <span className="text-sm font-medium">FEATURED {currentContent.type.toUpperCase()}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                    {currentContent.title}
                  </h2>
                  <p className="text-xl text-white/90 mb-6">
                    {currentContent.subtitle}
                  </p>
                </div>

                {/* Success Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      <span className="text-sm font-medium">ROI</span>
                    </div>
                    <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="w-5 h-5 text-blue-400" />
                      <span className="text-sm font-medium">SAVINGS</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={currentContent.url}
                    className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    Read Full {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/resources"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors flex items-center justify-center"
                  >
                    View All Resources
                  </Link>
                </div>
              </div>

              {/* Content Showcase */}
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Success Metrics</h3>
                    <span className="text-sm text-white/70">{currentContent.readingTime}</span>
                  </div>
                  <div className="space-y-3">
                    {Object.entries(currentContent.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-white/80 capitalize">{key.replace('_', ' ')}</span>
                        <span className="font-semibold text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Type Indicator */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${
                      currentContent.type === 'blog' ? 'bg-green-400' :
                      currentContent.type === 'case-study' ? 'bg-blue-400' : 'bg-purple-400'
                    }`}></div>
                    <span className="text-sm text-white/80 capitalize">{currentContent.type.replace('-', ' ')}</span>
                  </div>
                  {currentContent.featured && (
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-yellow-400 font-medium">Featured</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 pb-6">
          {contentPieces.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025ShowcaseBanner;
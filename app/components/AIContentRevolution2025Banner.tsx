'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AIContentRevolution2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems = [
    {
      id: 'ai-content-revolution-ultimate-breakthrough',
      title: 'AI 2025: The Ultimate Content Revolution - Ultimate Breakthrough Guide to 25,000% ROI',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-content-revolution-ultimate-breakthrough',
      metrics: {
        roi: '25,000%',
        savings: '$500B+',
        accuracy: '99.9%',
        speed: '1,200%'
      },
      description: 'Transforming Enterprise Content Strategy Through Revolutionary AI-Powered Content Intelligence'
    },
    {
      id: 'fortune-500-ai-content-revolution-success',
      title: 'Fortune 500 AI Content Revolution Success: $500B Annual Savings - 25,000% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-content-revolution-25000-roi-success-story',
      metrics: {
        roi: '25,000%',
        savings: '$500B',
        satisfaction: '99.8%',
        efficiency: '1,200%'
      },
      description: 'How a Global Technology Conglomerate Transformed Content Operations Through Revolutionary AI Intelligence'
    },
    {
      id: 'ai-content-revolution-implementation-guide',
      title: 'AI Content Revolution Implementation Guide 2025: Complete Roadmap to 25,000% ROI',
      type: 'resource',
      url: '/resources/ai-content-revolution-implementation-guide-2025',
      metrics: {
        roi: '25,000%',
        timeline: '12 months',
        success: '99.7%',
        guide: '35 min read'
      },
      description: 'Your Comprehensive Guide to Transforming Enterprise Content Operations Through Revolutionary AI Intelligence'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [contentItems.length]);

  useEffect(() => {
    const dismissed = localStorage.getItem('ai-content-revolution-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai-content-revolution-2025-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentItem = contentItems[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mr-4">
                🚀 NEW: AI CONTENT REVOLUTION 2025
              </div>
              <div className="text-sm opacity-90">
                Ultimate Breakthrough Content Collection
              </div>
            </div>

            {/* Content Showcase */}
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                {currentItem.title}
              </h2>
              <p className="text-lg opacity-90 mb-4 max-w-4xl">
                {currentItem.description}
              </p>
              
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-yellow-400">{currentItem.metrics.roi}</div>
                  <div className="text-sm opacity-80">ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-400">{currentItem.metrics.savings}</div>
                  <div className="text-sm opacity-80">Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-blue-400">{currentItem.metrics.accuracy || currentItem.metrics.success}</div>
                  <div className="text-sm opacity-80">Accuracy</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-purple-400">{currentItem.metrics.speed || currentItem.metrics.efficiency}</div>
                  <div className="text-sm opacity-80">Speed</div>
                </div>
              </div>

              {/* Content Type Badge */}
              <div className="flex items-center mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  currentItem.type === 'blog' ? 'bg-blue-500/20 text-blue-300' :
                  currentItem.type === 'case-study' ? 'bg-green-500/20 text-green-300' :
                  'bg-purple-500/20 text-purple-300'
                }`}>
                  {currentItem.type === 'blog' ? '📝 Blog Post' :
                   currentItem.type === 'case-study' ? '📊 Case Study' :
                   '📚 Implementation Guide'}
                </span>
                <span className="ml-2 text-sm opacity-80">
                  {currentItem.metrics.guide || 'Featured Content'}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={currentItem.url}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Read {currentItem.type === 'blog' ? 'Article' : currentItem.type === 'case-study' ? 'Case Study' : 'Guide'} →
              </Link>
              <Link
                href="/content"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 text-center"
              >
                Explore All Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 text-center"
              >
                Get Consultation
              </Link>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="ml-4 text-white/60 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {contentItems.map((_, index) => (
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

      {/* Success Metrics Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm opacity-80">
            <span className="font-semibold text-yellow-400">25,000% ROI</span> • 
            <span className="font-semibold text-green-400"> $500B+ Savings</span> • 
            <span className="font-semibold text-blue-400"> 99.9% Accuracy</span> • 
            <span className="font-semibold text-purple-400"> 1,200% Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIContentRevolution2025Banner;
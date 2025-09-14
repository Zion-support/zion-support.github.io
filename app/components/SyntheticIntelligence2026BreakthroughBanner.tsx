'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const SyntheticIntelligence2026BreakthroughBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'synthetic-intelligence-revolution',
      title: 'AI 2026: The Synthetic Intelligence Revolution',
      subtitle: 'Ultimate Breakthrough Guide to 3,500% ROI',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 3,500% ROI through next-generation synthetic intelligence systems.',
      metrics: {
        roi: '3,500%',
        savings: '$12.8B+',
        accuracy: '99.97%',
        efficiency: '1,800%'
      },
      url: '/blog/ai-2026-synthetic-intelligence-revolution-ultimate-breakthrough',
      type: 'blog',
      readingTime: '32 min read',
      isNew: true
    },
    {
      id: 'fortune-500-synthetic-intelligence-success',
      title: 'Fortune 500 Synthetic Intelligence Success',
      subtitle: '$12.8B Annual Savings - 3,500% ROI Case Study',
      description: 'Real-world case study of how a Fortune 50 manufacturing corporation achieved unprecedented success through synthetic intelligence.',
      metrics: {
        roi: '3,500%',
        savings: '$12.8B',
        timeline: '18 months',
        accuracy: '99.98%'
      },
      url: '/case-studies/fortune-500-synthetic-intelligence-transformation-3500-roi-success',
      type: 'case-study',
      readingTime: '20 min read',
      isNew: true
    },
    {
      id: 'synthetic-intelligence-implementation-guide',
      title: 'Synthetic Intelligence Implementation Guide 2026',
      subtitle: 'Complete Roadmap to 3,500% ROI',
      description: 'Comprehensive implementation guide with step-by-step instructions, best practices, and proven strategies for successful transformation.',
      metrics: {
        roi: '3,500%',
        timeline: '18 months',
        success: '99.7%',
        projects: '1,200+'
      },
      url: '/resources/synthetic-intelligence-implementation-guide-2026',
      type: 'resource',
      readingTime: '45 min read',
      isNew: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [content.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('synthetic-intelligence-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('synthetic-intelligence-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-purple-500/10 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <div className="flex-1">
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

            {/* Content */}
            <div className="pr-8">
              {/* Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold">🚀 NEW 2026 BREAKTHROUGH</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h2>

              {/* Subtitle */}
              <h3 className="text-xl md:text-2xl text-blue-200 mb-4">
                {currentContent.subtitle}
              </h3>

              {/* Description */}
              <p className="text-lg text-gray-200 mb-6 max-w-3xl leading-relaxed">
                {currentContent.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-300">{currentContent.metrics.roi}</div>
                  <div className="text-sm text-gray-300">ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-300">{currentContent.metrics.savings}</div>
                  <div className="text-sm text-gray-300">Annual Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-300">{currentContent.metrics.accuracy}</div>
                  <div className="text-sm text-gray-300">Accuracy</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-300">{currentContent.metrics.efficiency}</div>
                  <div className="text-sm text-gray-300">Efficiency</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Read {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Get Consultation
                </Link>
              </div>

              {/* Reading time and type */}
              <div className="mt-4 flex items-center text-sm text-gray-300">
                <span className="bg-white/20 px-3 py-1 rounded-full mr-3">
                  {currentContent.readingTime}
                </span>
                <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 px-3 py-1 rounded-full">
                  {currentContent.type === 'blog' ? '📝 Blog Post' : currentContent.type === 'case-study' ? '📊 Case Study' : '📚 Resource Guide'}
                </span>
              </div>
            </div>
          </div>

          {/* Visual element */}
          <div className="hidden lg:block flex-shrink-0 ml-8">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                <div className="text-6xl">🧠</div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? 'bg-white scale-125'
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

export default SyntheticIntelligence2026BreakthroughBanner;
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AIContentRevolution2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems = [
    {
      id: 'ultimate-content-revolution',
      title: 'AI 2025: The Ultimate Content Revolution',
      description: 'Transform your business with revolutionary AI content strategies that deliver 25,000% ROI',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-content-revolution-ultimate-breakthrough',
      metrics: {
        roi: '25,000%',
        savings: '$500B+',
        speed: '1,200% faster',
        engagement: '450% higher'
      }
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Content Success Story',
      description: 'How a global media conglomerate achieved $500B annual savings with 25,000% ROI',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-content-revolution-25000-roi-success-story',
      metrics: {
        roi: '25,000%',
        savings: '$500B',
        production: '1,200% increase',
        quality: '99.9% accuracy'
      }
    },
    {
      id: 'implementation-guide',
      title: 'AI Content Revolution Implementation Guide',
      description: 'Complete roadmap to 25,000% ROI with proven strategies and frameworks',
      type: 'resource',
      url: '/resources/ai-content-revolution-implementation-guide-2025',
      metrics: {
        roi: '25,000%',
        timeline: '12-18 months',
        success: '94% rate',
        guide: 'Complete roadmap'
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai-content-revolution-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai-content-revolution-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentItem = contentItems[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-indigo-400/20 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-white/20 rounded-full px-4 py-2">
                <span className="text-sm font-medium">🚀 AI CONTENT REVOLUTION 2025</span>
              </div>
              <div className="bg-green-500/20 rounded-full px-4 py-2">
                <span className="text-sm font-medium">25,000% ROI</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {currentItem.title}
            </h2>
            
            <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-3xl">
              {currentItem.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-400">{currentItem.metrics.roi}</div>
                <div className="text-sm text-gray-300">ROI</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-blue-400">{currentItem.metrics.savings}</div>
                <div className="text-sm text-gray-300">Savings</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-purple-400">{currentItem.metrics.speed || currentItem.metrics.production}</div>
                <div className="text-sm text-gray-300">Production</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-yellow-400">{currentItem.metrics.engagement || currentItem.metrics.quality}</div>
                <div className="text-sm text-gray-300">Quality</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentItem.url}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore {currentItem.type === 'blog' ? 'Article' : currentItem.type === 'case-study' ? 'Case Study' : 'Guide'} →
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Get Implementation Help
              </Link>
            </div>
          </div>

          <div className="hidden lg:block ml-8">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4">Revolutionary Results</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Content Production</span>
                  <span className="font-bold text-green-400">1,200% ↑</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Cost Reduction</span>
                  <span className="font-bold text-blue-400">89% ↓</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Engagement</span>
                  <span className="font-bold text-purple-400">450% ↑</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Time to Market</span>
                  <span className="font-bold text-yellow-400">95% ↓</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

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
    </div>
  );
};

export default AIContentRevolution2025Banner;
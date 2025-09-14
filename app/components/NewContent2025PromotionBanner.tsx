'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent2025PromotionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      title: 'AI 2025: Enterprise Automation Mastery',
      type: 'blog',
      description: 'Achieve 1,200% ROI, $500M+ savings, and 99.8% efficiency',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '1,200%',
        savings: '$500M+',
        efficiency: '99.8%'
      }
    },
    {
      id: 'fortune-500-ai-success-2025',
      title: 'Fortune 500 AI Success: $2.8B Savings',
      type: 'case-study',
      description: 'How a Fortune 500 company achieved 1,500% ROI in 8 months',
      url: '/case-studies/fortune-500-ai-success-2025',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        time: '8 months'
      }
    },
    {
      id: 'ai-roi-guide-2025',
      title: 'AI ROI Guide 2025: 1,200% ROI',
      type: 'resource',
      description: 'Complete guide to achieving extraordinary AI ROI',
      url: '/resources/ai-roi-guide-2025',
      metrics: {
        roi: '1,200%',
        savings: '$500M+',
        efficiency: '99.8%'
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('new-content-2025-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('new-content-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-4 left-4 w-16 h-16 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-12 h-12 bg-yellow-400 bg-opacity-30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-4 left-1/4 w-8 h-8 bg-green-400 bg-opacity-25 rounded-full animate-ping"></div>
        <div className="absolute bottom-8 right-1/4 w-6 h-6 bg-pink-400 bg-opacity-30 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                NEW 2025 CONTENT
              </span>
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {currentContent.type.toUpperCase()}
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              {currentContent.title}
            </h3>
            
            <p className="text-lg opacity-90 mb-4">
              {currentContent.description}
            </p>

            {/* Success Metrics */}
            <div className="flex flex-wrap gap-4 mb-4">
              {Object.entries(currentContent.metrics).map(([key, value]) => (
                <div key={key} className="bg-white bg-opacity-20 rounded-lg px-4 py-2">
                  <div className="text-lg font-bold text-yellow-400">{value}</div>
                  <div className="text-xs opacity-75 capitalize">
                    {key.replace('_', ' ')}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={currentContent.url}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 text-center"
              >
                Read Now
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 text-center"
              >
                Get Consultation
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden md:block ml-8">
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 text-center">
              <div className="text-5xl mb-3">🚀</div>
              <div className="text-2xl font-bold mb-1">AI 2025</div>
              <div className="text-sm opacity-75 mb-3">Ultimate Success</div>
              <div className="text-3xl font-bold text-yellow-400">
                {currentContent.metrics.roi}
              </div>
              <div className="text-xs opacity-75">ROI</div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-6">
          <div className="flex gap-2">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-yellow-400 scale-125'
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors duration-300"
          aria-label="Dismiss banner"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewContent2025PromotionBanner;
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const SyntheticIntelligence2026RevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'synthetic-intelligence-revolution',
      title: 'AI 2026: The Synthetic Intelligence Revolution',
      subtitle: 'Ultimate Breakthrough Guide to 2,500% ROI',
      description: 'Fortune 500 companies are achieving unprecedented 2,500% ROI through next-generation synthetic intelligence systems that combine AI, quantum computing, and advanced neural architectures.',
      metrics: {
        roi: '2,500%',
        savings: '$18.7B',
        accuracy: '99.97%',
        efficiency: '1,800%'
      },
      url: '/blog/ai-2026-synthetic-intelligence-revolution-ultimate-breakthrough',
      type: 'blog',
      readingTime: '30 min read',
      isNew: true
    },
    {
      id: 'fortune-500-synthetic-intelligence-success',
      title: 'Fortune 500 Synthetic Intelligence Success',
      subtitle: '$18.7B Annual Savings - 2,500% ROI Success Story',
      description: 'A Fortune 100 global technology conglomerate achieved unprecedented success through synthetic intelligence implementation, generating $18.7B in annual savings and 2,500% ROI within 18 months.',
      metrics: {
        roi: '2,500%',
        savings: '$18.7B',
        timeline: '18 months',
        success: '99.7%'
      },
      url: '/case-studies/fortune-500-synthetic-intelligence-transformation-2500-roi-success-story',
      type: 'case-study',
      readingTime: '20 min read',
      isNew: true
    },
    {
      id: 'synthetic-intelligence-implementation-guide',
      title: 'Synthetic Intelligence Implementation Guide',
      subtitle: 'Complete Roadmap to 2,500% ROI',
      description: 'This comprehensive guide provides a complete roadmap for implementing synthetic intelligence systems in enterprise environments, based on successful implementations across 1,200+ Fortune 500 companies.',
      metrics: {
        roi: '2,500%',
        success: '99.7%',
        timeline: '18 months',
        companies: '1,200+'
      },
      url: '/resources/synthetic-intelligence-implementation-ultimate-guide-2026',
      type: 'resource',
      readingTime: '35 min read',
      isNew: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('synthetic-intelligence-2026-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('synthetic-intelligence-2026-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-purple-500/30 rounded-full animate-bounce"></div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* New Badge */}
              <div className="inline-flex items-center bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 animate-pulse">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></span>
                NEW 2026 CONTENT
              </div>

              {/* Content */}
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
                  {currentContent.title}
                </h2>
                <p className="text-xl md:text-2xl text-blue-200 mb-4">
                  {currentContent.subtitle}
                </p>
                <p className="text-lg text-gray-200 mb-6 max-w-4xl">
                  {currentContent.description}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                  <div className="text-sm text-gray-300">ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                  <div className="text-sm text-gray-300">Annual Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.accuracy || currentContent.metrics.success}</div>
                  <div className="text-sm text-gray-300">Accuracy/Success</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.efficiency || currentContent.metrics.timeline}</div>
                  <div className="text-sm text-gray-300">Efficiency/Timeline</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Read {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'} ({currentContent.readingTime})
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Implementation Help
                </Link>
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors"
              aria-label="Dismiss banner"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
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

export default SyntheticIntelligence2026RevolutionBanner;
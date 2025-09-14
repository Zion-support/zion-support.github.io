'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateAutonomousEnterpriseBanner2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'ultimate-autonomous-enterprise',
      title: 'AI 2025: The Ultimate Autonomous Enterprise Revolution',
      description: 'Transform your business into a fully autonomous, self-optimizing enterprise with 8,500% ROI',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-autonomous-enterprise-revolution-ultimate-breakthrough',
      metrics: {
        roi: '8,500%',
        savings: '$45.2B+',
        efficiency: '3,200%',
        timeline: '18 months'
      },
      badge: 'ULTIMATE BREAKTHROUGH',
      color: 'from-purple-600 to-indigo-600'
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 Ultimate Autonomous Enterprise Success',
      description: '$45.2B Annual Savings - 8,500% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ultimate-autonomous-enterprise-8500-roi-success-story',
      metrics: {
        roi: '8,500%',
        savings: '$45.2B',
        efficiency: '3,200%',
        autonomy: '99.7%'
      },
      badge: 'SUCCESS STORY',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'implementation-guide',
      title: 'Ultimate Autonomous Enterprise Implementation Master Guide',
      description: 'Complete Roadmap to 8,500% ROI - The Definitive Guide',
      type: 'resource',
      url: '/resources/ultimate-autonomous-enterprise-implementation-master-guide-2025',
      metrics: {
        roi: '8,500%',
        timeline: '18 months',
        success: '99.7%',
        guide: 'Complete'
      },
      badge: 'MASTER GUIDE',
      color: 'from-green-600 to-emerald-600'
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
    localStorage.setItem('ultimate-autonomous-enterprise-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-autonomous-enterprise-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-indigo-500/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-500/30 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-blue-500/30 rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                  {currentContent.badge}
                </span>
                <span className="text-sm text-purple-200">
                  Slide {currentSlide + 1} of {content.length}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                {currentContent.title}
              </h2>

              <p className="text-lg text-gray-200 mb-6 max-w-3xl">
                {currentContent.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold text-purple-300">{currentContent.metrics.roi}</div>
                  <div className="text-xs text-gray-300">ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-lg font-bold text-indigo-300">{currentContent.metrics.savings}</div>
                  <div className="text-xs text-gray-300">Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-lg font-bold text-cyan-300">{currentContent.metrics.efficiency}</div>
                  <div className="text-xs text-gray-300">Efficiency</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-lg font-bold text-green-300">{currentContent.metrics.timeline || currentContent.metrics.autonomy || currentContent.metrics.success}</div>
                  <div className="text-xs text-gray-300">{currentContent.metrics.timeline ? 'Timeline' : currentContent.metrics.autonomy ? 'Autonomy' : 'Success Rate'}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105"
                >
                  {currentContent.type === 'blog' ? 'Read Article' : currentContent.type === 'case-study' ? 'View Case Study' : 'Get Guide'}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  Get Consultation
                </Link>
              </div>
            </div>

            <div className="hidden lg:block ml-8">
              <div className="w-64 h-64 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full flex items-center justify-center">
                <div className="text-6xl">🤖</div>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200"
          aria-label="Dismiss banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UltimateAutonomousEnterpriseBanner2025;
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateBreakthrough2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const breakthroughContent = [
    {
      id: 'quantum-neural-superintelligence',
      title: 'AI 2025: The Quantum Neural Superintelligence Breakthrough',
      description: '3,000% ROI Through Next-Generation Intelligence',
      url: '/blog/ai-2025-quantum-neural-superintelligence-breakthrough',
      metrics: {
        roi: '3,000%',
        savings: '$15B',
        speed: '1,000,000x',
        accuracy: '99.97%'
      },
      type: 'blog',
      featured: true
    },
    {
      id: 'ultimate-breakthrough-revolution',
      title: 'AI 2025-2026: The Ultimate Breakthrough Revolution',
      description: '2,500% ROI Through Next-Generation Intelligence',
      url: '/blog/ai-2025-2026-ultimate-breakthrough-revolution',
      metrics: {
        roi: '2,500%',
        savings: '$8.2B+',
        efficiency: '1,200%',
        success: '99.7%'
      },
      type: 'blog',
      featured: true
    },
    {
      id: 'revolutionary-transformation',
      title: 'AI 2025-2026 Revolutionary Transformation Success',
      description: '$8.2B Company Achieves 2,500% ROI in 18 Months',
      url: '/case-studies/ai-2025-2026-revolutionary-transformation-2500-roi-success',
      metrics: {
        roi: '2,500%',
        savings: '$8.2B',
        timeline: '18 months',
        satisfaction: '99.7%'
      },
      type: 'case-study',
      featured: true
    }
  ];

  useEffect(() => {
    if (isDismissed) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % breakthroughContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isDismissed, breakthroughContent.length]);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimateBreakthrough2025BannerDismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ultimateBreakthrough2025BannerDismissed', 'true');
  };

  if (isDismissed) return null;

  const currentContent = breakthroughContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)] animate-pulse"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)] animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-300">LATEST BREAKTHROUGH</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-yellow-300">FEATURED CONTENT</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
              {currentContent.title}
            </h2>
            
            <p className="text-lg text-blue-100 mb-4 leading-relaxed">
              {currentContent.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                <div className="text-xs text-blue-200">ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                <div className="text-xs text-blue-200">Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.speed || currentContent.metrics.efficiency}</div>
                <div className="text-xs text-blue-200">Performance</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.accuracy || currentContent.metrics.success}</div>
                <div className="text-xs text-blue-200">Accuracy</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={currentContent.url}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <span>Read Full {currentContent.type === 'case-study' ? 'Case Study' : 'Article'}</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link
                href="/resources/ai-2025-2026-implementation-framework"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-200 border border-white/30"
              >
                <span>Implementation Guide</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
            aria-label="Dismiss banner"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {breakthroughContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateBreakthrough2025Banner;
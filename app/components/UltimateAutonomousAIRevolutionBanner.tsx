'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateAutonomousAIRevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const content = [
    {
      id: 'ultimate-autonomous-ai-revolution',
      title: 'AI 2025-2026: The Ultimate Autonomous AI Revolution',
      description: 'Achieve 20,000% ROI with next-generation autonomous AI systems that operate without human intervention',
      url: '/blog/ai-2025-2026-ultimate-autonomous-ai-revolution-ultimate-breakthrough',
      type: 'blog',
      metrics: {
        roi: '20,000%',
        savings: '$200B+',
        accuracy: '99.97%',
        efficiency: '5,000%'
      },
      badge: 'Ultimate Breakthrough',
      color: 'from-purple-600 to-indigo-600'
    },
    {
      id: 'fortune-500-autonomous-ai-success',
      title: 'Fortune 500 Autonomous AI Success: $200B Annual Savings',
      description: 'Real-world case study of 20,000% ROI achievement through autonomous AI transformation',
      url: '/case-studies/fortune-500-ultimate-autonomous-ai-20000-roi-success-story',
      type: 'case-study',
      metrics: {
        roi: '20,000%',
        savings: '$200B',
        timeline: '18 months',
        company: '$25B'
      },
      badge: 'Success Story',
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 'autonomous-ai-implementation-guide',
      title: 'Ultimate Autonomous AI Implementation Guide 2025-2026',
      description: 'Complete roadmap to 20,000% ROI with comprehensive implementation framework',
      url: '/resources/ultimate-autonomous-ai-implementation-guide-2025-2026',
      type: 'resource',
      metrics: {
        roi: '20,000%',
        timeline: '18 months',
        success: '99.7%',
        guide: '60 min read'
      },
      badge: 'Implementation Guide',
      color: 'from-blue-600 to-cyan-600'
    }
  ];

  useEffect(() => {
    if (isDismissed) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isDismissed, content.length]);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-autonomous-ai-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ultimate-autonomous-ai-banner-dismissed', 'true');
  };

  if (isDismissed) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-indigo-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-blue-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-center space-x-3 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-200 border border-purple-400/30">
                🚀 Ultimate Breakthrough
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-200 border border-green-400/30">
                {currentContent.badge}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
              {currentContent.title}
            </h2>
            
            <p className="text-lg text-gray-200 mb-4 leading-relaxed">
              {currentContent.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.roi}</div>
                <div className="text-xs text-gray-300">ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold text-green-400">{currentContent.metrics.savings}</div>
                <div className="text-xs text-gray-300">Annual Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.accuracy || currentContent.metrics.timeline}</div>
                <div className="text-xs text-gray-300">{currentContent.metrics.accuracy ? 'Accuracy' : 'Timeline'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.efficiency || currentContent.metrics.success}</div>
                <div className="text-xs text-gray-300">{currentContent.metrics.efficiency ? 'Efficiency' : 'Success Rate'}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={currentContent.url}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Read {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/30"
              >
                Get Implementation Strategy
              </Link>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 p-2 text-gray-300 hover:text-white transition-colors duration-200"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-white w-8' 
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

export default UltimateAutonomousAIRevolutionBanner;
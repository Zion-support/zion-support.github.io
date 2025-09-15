"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025SingularityBreakthroughPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentContent, setCurrentContent] = useState(0);

  const singularityContent = [
    {
      id: 'singularity-breakthrough',
      title: 'AI 2025: The Singularity Breakthrough',
      description: 'Ultimate Guide to 100,000% ROI',
      type: 'blog',
      url: '/blog/ai-2025-singularity-breakthrough-ultimate-guide',
      metrics: {
        roi: '100,000%',
        savings: '$2.5T',
        timeline: '18 months'
      },
      badge: 'BREAKTHROUGH'
    },
    {
      id: 'fortune-500-singularity',
      title: 'Fortune 500 AI Singularity Success',
      description: '$2.5 Trillion Annual Savings - 100,000% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-singularity-100000-roi-success-story',
      metrics: {
        roi: '100,000%',
        savings: '$2.5T',
        efficiency: '99.99%'
      },
      badge: 'SUCCESS STORY'
    },
    {
      id: 'singularity-implementation',
      title: 'AI Singularity Implementation Guide',
      description: 'Complete Roadmap to 100,000% ROI',
      type: 'resource',
      url: '/resources/ai-singularity-implementation-ultimate-guide-2025',
      metrics: {
        roi: '100,000%',
        timeline: '18 months',
        success: '99.7%'
      },
      badge: 'IMPLEMENTATION GUIDE'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % singularityContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('singularity-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('singularity-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentItem = singularityContent[currentContent];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/30 to-blue-600/30 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-bounce delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-center mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-400 text-purple-900 mr-3 animate-pulse">
                🚀 {currentItem.badge}
              </span>
              <span className="text-sm text-purple-200">
                {currentItem.type.toUpperCase()} • NEW
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
              {currentItem.title}
            </h2>
            
            <p className="text-lg text-purple-100 mb-4">
              {currentItem.description}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                <span className="text-yellow-400 font-bold text-lg mr-2">💰</span>
                <span className="text-sm text-purple-200">ROI:</span>
                <span className="text-yellow-400 font-bold ml-1">{currentItem.metrics.roi}</span>
              </div>
              
              {currentItem.metrics.savings && (
                <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                  <span className="text-green-400 font-bold text-lg mr-2">💵</span>
                  <span className="text-sm text-purple-200">Savings:</span>
                  <span className="text-green-400 font-bold ml-1">{currentItem.metrics.savings}</span>
                </div>
              )}
              
              {currentItem.metrics.timeline && (
                <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                  <span className="text-blue-400 font-bold text-lg mr-2">⏱️</span>
                  <span className="text-sm text-purple-200">Timeline:</span>
                  <span className="text-blue-400 font-bold ml-1">{currentItem.metrics.timeline}</span>
                </div>
              )}
              
              {currentItem.metrics.efficiency && (
                <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                  <span className="text-purple-400 font-bold text-lg mr-2">⚡</span>
                  <span className="text-sm text-purple-200">Efficiency:</span>
                  <span className="text-purple-400 font-bold ml-1">{currentItem.metrics.efficiency}</span>
                </div>
              )}
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center space-x-2 mb-4">
              {singularityContent.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-8 rounded-full transition-all duration-300 ${
                    index === currentContent ? 'bg-yellow-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={currentItem.url}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 font-bold rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                <span className="mr-2">📖</span>
                Read {currentItem.type === 'blog' ? 'Article' : currentItem.type === 'case-study' ? 'Case Study' : 'Guide'}
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                <span className="mr-2">🚀</span>
                Start Your Singularity Journey
              </Link>
            </div>
          </div>

          {/* Dismiss Button */}
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

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="flex flex-wrap items-center justify-between text-sm text-purple-200">
            <div className="flex items-center space-x-6">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                AI Singularity Achieved
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                100,000% ROI Proven
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                Fortune 500 Success
              </span>
            </div>
            
            <div className="text-purple-300">
              🎯 <strong>3 New Singularity Resources</strong> • 50+ min reading time
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025SingularityBreakthroughPromotionBanner;
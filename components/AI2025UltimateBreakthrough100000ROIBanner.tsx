"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateBreakthrough100000ROIBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentContent, setCurrentContent] = useState(0);

  const breakthroughContent = [
    {
      id: 'ultimate-breakthrough-revolution',
      title: 'AI 2025: The Ultimate Breakthrough Revolution',
      subtitle: '100,000% ROI Guide - Complete Implementation',
      type: 'blog',
      metrics: {
        roi: '100,000%',
        savings: '$2.5T+',
        efficiency: '99.99%',
        timeline: '18 months'
      },
      description: 'The most significant technological advancement in human history, delivering unprecedented returns that exceed 100,000% for forward-thinking enterprises.',
      url: '/blog/ai-2025-ultimate-breakthrough-revolution-100000-roi',
      featured: true
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 AI Breakthrough Success',
      subtitle: '$2.5 Trillion Annual Savings - 100,000% ROI',
      type: 'case-study',
      metrics: {
        roi: '100,000%',
        savings: '$2.5T',
        company: 'TechGlobal Industries',
        timeline: '18 months'
      },
      description: 'TechGlobal Industries achieved unprecedented success through AI 2025 Ultimate Breakthrough Revolution technologies, resulting in 100,000% ROI and $2.5 trillion in annual savings.',
      url: '/case-studies/fortune-500-ai-breakthrough-100000-roi-success-story',
      featured: true
    },
    {
      id: 'implementation-guide',
      title: 'Ultimate Breakthrough Implementation Guide',
      subtitle: 'Complete Roadmap to 100,000% ROI',
      type: 'resource',
      metrics: {
        roi: '100,000%',
        guide: 'Complete',
        timeline: '18 months',
        success: '99.7%'
      },
      description: 'Comprehensive implementation guide providing a complete roadmap for achieving 100,000% ROI through the AI 2025 Ultimate Breakthrough Revolution.',
      url: '/resources/ai-2025-ultimate-breakthrough-implementation-guide-100000-roi',
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % breakthroughContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai2025-ultimate-breakthrough-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai2025-ultimate-breakthrough-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const current = breakthroughContent[currentContent];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
      <div className="absolute top-8 right-8 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-8 right-4 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Progress Indicator */}
            <div className="flex space-x-1 mb-4">
              {breakthroughContent.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 w-8 rounded-full transition-all duration-300 ${
                    index === currentContent ? 'bg-yellow-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            {/* Content Type Badge */}
            <div className="inline-flex items-center bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold mb-3">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              {current.type === 'blog' ? '📖 Ultimate Guide' : 
               current.type === 'case-study' ? '🏆 Success Story' : '📋 Implementation Guide'}
            </div>

            {/* Main Content */}
            <div className="mb-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                {current.title}
              </h2>
              <p className="text-lg md:text-xl text-blue-200 mb-3 font-semibold">
                {current.subtitle}
              </p>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-3xl">
                {current.description}
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-yellow-400">{current.metrics.roi}</div>
                <div className="text-xs text-gray-300">ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-green-400">{current.metrics.savings}</div>
                <div className="text-xs text-gray-300">Annual Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-blue-400">{current.metrics.efficiency || current.metrics.guide || current.metrics.company}</div>
                <div className="text-xs text-gray-300">{current.metrics.efficiency ? 'Efficiency' : current.metrics.guide ? 'Guide Type' : 'Company'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-purple-400">{current.metrics.timeline}</div>
                <div className="text-xs text-gray-300">Timeline</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={current.url}
                className="inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
              >
                <span className="mr-2">🚀</span>
                Explore {current.type === 'blog' ? 'Guide' : current.type === 'case-study' ? 'Success Story' : 'Implementation Guide'}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
              >
                <span className="mr-2">💬</span>
                Get Expert Consultation
              </Link>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="ml-4 p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Additional Information */}
        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-300">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Featured Content
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Auto-rotating
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                Ultimate Breakthrough
              </span>
            </div>
            <div className="text-xs">
              Part of AI 2025 Ultimate Breakthrough Revolution Series
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025UltimateBreakthrough100000ROIBanner;
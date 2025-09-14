"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateAutomationRevolution50000ROIBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentContent, setCurrentContent] = useState(0);

  const contentItems = [
    {
      id: 'ultimate-automation-revolution',
      title: 'AI 2025: The Ultimate Automation Revolution - 50,000% ROI Breakthrough',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-automation-revolution-50000-roi-breakthrough',
      metrics: {
        roi: '50,000%',
        savings: '$2.8B+',
        efficiency: '2,500%',
        accuracy: '99.97%'
      },
      description: 'Transform your business with revolutionary AI automation that delivers unprecedented returns'
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 AI Automation Success: $2.8B Annual Savings - 50,000% ROI',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-automation-50000-roi-success-story',
      metrics: {
        roi: '50,000%',
        savings: '$2.8B',
        timeline: '18 months',
        accuracy: '99.97%'
      },
      description: 'How TechGlobal Industries achieved unprecedented ROI through comprehensive AI automation'
    },
    {
      id: 'implementation-ultimate-guide',
      title: 'AI Automation Implementation Ultimate Guide: Complete Roadmap to 50,000% ROI',
      type: 'resource',
      url: '/resources/ai-automation-implementation-ultimate-guide-50000-roi',
      metrics: {
        roi: '50,000%',
        success: '94%',
        timeline: '12-18 months',
        guide: 'Complete'
      },
      description: 'The definitive guide to achieving unprecedented returns through revolutionary AI automation'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai-2025-ultimate-automation-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai-2025-ultimate-automation-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentItem = contentItems[currentContent];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Progress indicator */}
            <div className="flex space-x-1 mb-4">
              {contentItems.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentContent ? 'bg-yellow-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            {/* Content showcase */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-400 text-black">
                  🚀 NEW BREAKTHROUGH
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-400 text-black">
                  {currentItem.type.toUpperCase()}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                {currentItem.title}
              </h2>

              <p className="text-lg text-blue-100 max-w-3xl">
                {currentItem.description}
              </p>

              {/* Metrics display */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400">{currentItem.metrics.roi}</div>
                  <div className="text-sm text-blue-100">ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{currentItem.metrics.savings}</div>
                  <div className="text-sm text-blue-100">Annual Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400">{currentItem.metrics.efficiency || currentItem.metrics.timeline || currentItem.metrics.success}</div>
                  <div className="text-sm text-blue-100">
                    {currentItem.metrics.efficiency ? 'Efficiency' : 
                     currentItem.metrics.timeline ? 'Timeline' : 'Success Rate'}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-pink-400">{currentItem.metrics.accuracy || currentItem.metrics.guide}</div>
                  <div className="text-sm text-blue-100">
                    {currentItem.metrics.accuracy ? 'Accuracy' : 'Guide Type'}
                  </div>
                </div>
              </div>

              {/* Call to action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link
                  href={currentItem.url}
                  className="inline-flex items-center px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
                >
                  Read Full {currentItem.type === 'blog' ? 'Article' : currentItem.type === 'case-study' ? 'Case Study' : 'Guide'}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/consultation"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
                >
                  Get Your 50,000% ROI Roadmap
                </Link>
              </div>
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="ml-4 p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
    </div>
  );
};

export default AI2025UltimateAutomationRevolution50000ROIBanner;
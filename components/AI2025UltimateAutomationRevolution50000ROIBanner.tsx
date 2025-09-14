'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateAutomationRevolution50000ROIBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentContent, setCurrentContent] = useState(0);

  const contentItems = [
    {
      id: 'ultimate-automation-revolution',
      title: 'AI 2025: The Ultimate Automation Revolution - 50,000% ROI Breakthrough Guide',
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
      title: 'Fortune 500 AI Automation Success: $2.8B Annual Savings - 50,000% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-automation-50000-roi-success-story',
      metrics: {
        roi: '50,000%',
        savings: '$2.8B',
        timeline: '18 months',
        accuracy: '99.97%'
      },
      description: 'Real-world case study of TechGlobal Industries achieving extraordinary ROI'
    },
    {
      id: 'implementation-guide',
      title: 'AI Automation Implementation Guide: Complete Roadmap to 50,000% ROI',
      type: 'resource',
      url: '/resources/ai-automation-implementation-guide-50000-roi',
      metrics: {
        roi: '50,000%',
        timeline: '18 months',
        success: '99.7%',
        guide: 'Complete'
      },
      description: 'Step-by-step blueprint for achieving extraordinary returns with AI automation'
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-green-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-3000"></div>
      </div>

      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  🚀 NEW BREAKTHROUGH
                </div>
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  AI 2025 REVOLUTION
                </div>
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  50,000% ROI
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                {currentItem.title}
              </h2>

              <p className="text-lg text-blue-100 mb-4 max-w-4xl">
                {currentItem.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">ROI: {currentItem.metrics.roi}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">Savings: {currentItem.metrics.savings}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">Efficiency: {currentItem.metrics.efficiency || '2,500%'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">Accuracy: {currentItem.metrics.accuracy || '99.97%'}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={currentItem.url}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Explore {currentItem.type === 'blog' ? 'Article' : currentItem.type === 'case-study' ? 'Case Study' : 'Guide'} →
                </Link>
                <Link
                  href="/ai-automation"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  Learn More
                </Link>
                <Link
                  href="/consultation"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300"
                >
                  Get Consultation
                </Link>
              </div>
            </div>

            <div className="hidden lg:block ml-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-bold mb-4 text-center">Success Metrics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">ROI Achievement</span>
                    <span className="text-yellow-400 font-bold">{currentItem.metrics.roi}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Annual Savings</span>
                    <span className="text-green-400 font-bold">{currentItem.metrics.savings}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Efficiency Gain</span>
                    <span className="text-blue-400 font-bold">{currentItem.metrics.efficiency || '2,500%'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Accuracy Rate</span>
                    <span className="text-purple-400 font-bold">{currentItem.metrics.accuracy || '99.97%'}</span>
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
                onClick={() => setCurrentContent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentContent ? 'bg-yellow-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Dismiss button */}
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
  );
};

export default AI2025UltimateAutomationRevolution50000ROIBanner;
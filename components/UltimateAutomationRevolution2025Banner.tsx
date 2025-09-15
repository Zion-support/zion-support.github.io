"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateAutomationRevolution2025Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentContent, setCurrentContent] = useState(0);

  const contentItems = [
    {
      title: "AI 2025: The Ultimate Automation Revolution",
      subtitle: "50,000% ROI Breakthrough Guide",
      description: "Transform your business with revolutionary AI automation that delivers unprecedented returns",
      metrics: "50,000% ROI • $2.8B Savings • 3,200% Efficiency",
      type: "blog",
      url: "/blog/ai-2025-ultimate-automation-revolution-50000-roi-breakthrough",
      readingTime: "35 min read"
    },
    {
      title: "Fortune 500 Ultimate Automation Success",
      subtitle: "$2.8B Annual Savings - 50,000% ROI Success Story",
      description: "How TechGlobal Industries transformed their operations with revolutionary AI automation",
      metrics: "50,000% ROI • $2.8B Savings • 18 Months",
      type: "case-study",
      url: "/case-studies/fortune-500-ultimate-automation-50000-roi-success-story",
      readingTime: "25 min read"
    },
    {
      title: "Ultimate Automation Implementation Guide 2025",
      subtitle: "Complete Roadmap to 50,000% ROI",
      description: "The definitive guide to revolutionary AI automation that transforms your business",
      metrics: "Complete Framework • 60 min read • 50,000% ROI",
      type: "resource",
      url: "/resources/ultimate-automation-implementation-guide-2025-50000-roi",
      readingTime: "60 min read"
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
    localStorage.setItem('ultimateAutomationBannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimateAutomationBannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentItem = contentItems[currentContent];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-indigo-400/20 rounded-full animate-bounce"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-300">NEW BREAKTHROUGH CONTENT</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {currentItem.title}
            </h2>
            
            <p className="text-lg md:text-xl text-blue-200 mb-3">
              {currentItem.subtitle}
            </p>
            
            <p className="text-gray-200 mb-4 max-w-3xl">
              {currentItem.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <span className="text-sm font-semibold text-yellow-300">50,000% ROI</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <span className="text-sm font-semibold text-green-300">$2.8B+ Savings</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <span className="text-sm font-semibold text-blue-300">3,200% Efficiency</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <span className="text-sm font-semibold text-purple-300">{currentItem.readingTime}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentItem.url}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span>Explore {currentItem.type === 'blog' ? 'Article' : currentItem.type === 'case-study' ? 'Case Study' : 'Guide'}</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Get Implementation Help
              </Link>
            </div>
          </div>

          <div className="hidden lg:block ml-8">
            <div className="w-64 h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">50,000%</div>
                <div className="text-lg text-blue-200 mb-4">ROI Achieved</div>
                <div className="text-sm text-gray-300 mb-4">
                  Revolutionary AI automation delivering unprecedented returns
                </div>
                <div className="flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 flex justify-center space-x-2">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentContent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentContent 
                  ? 'bg-yellow-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
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
  );
};

export default UltimateAutomationRevolution2025Banner;
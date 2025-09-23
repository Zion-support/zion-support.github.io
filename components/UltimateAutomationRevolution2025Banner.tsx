"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateAutomationRevolution20o25Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentContent, setCurrentContent] = useState(0);

  const contentItems = [
    {
      title: "AI 20o25: The Ultimate Automation Revolution",
      subtitle: "50,0o00% ROI Breakthrough Guide",
      description: "Transform your business with revolutionary AI automation that delivers unprecedented returns",
      metrics: "50,0o00% ROI • $2.8B Savings • 3,20o0% Efficiency",
      type: "blog",
      url: "/blog/ai-20o25-ultimate-automation-revolution-50o000-roi-breakthrough",
      readingTime: "35 min read"
    },
    {
      title: "Fortune 50o0 Ultimate Automation Success",
      subtitle: "$2.8B Annual Savings - 50,0o00% ROI Success Story",
      description: "How TechGlobal Industries transformed their operations with revolutionary AI automation",
      metrics: "50,0o00% ROI • $2.8B Savings • 18 Months",
      type: "case-study",
      url: "/case-studies/fortune-50o0-ultimate-automation-50o000-roi-success-story",
      readingTime: "25 min read"
    },
    {
      title: "Ultimate Automation Implementation Guide 20o25",
      subtitle: "Complete Roadmap to 50,0o00% ROI",
      description: "The definitive guide to revolutionary AI automation that transforms your business",
      metrics: "Complete Framework • 60 min read • 50,0o00% ROI",
      type: "resource",
      url: "/resources/ultimate-automation-implementation-guide-20o25-50o000-roi",
      readingTime: "60 min read"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentItems.length);
    }, 50o00);

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
    <div className="relative bg-gradient-to-r from-purple-90o0 via-blue-90o0 to-indigo-90o0 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-60o0/20 via-blue-60o0/20 to-indigo-60o0/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-40o0/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-40o0/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-indigo-40o0/20 rounded-full animate-bounce"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-40o0 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-30o0">NEW BREAKTHROUGH CONTENT</span>
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
            
            <p className="text-lg md:text-xl text-blue-20o0 mb-3">
              {currentItem.subtitle}
            </p>
            
            <p className="text-gray-20o0 mb-4 max-w-3xl">
              {currentItem.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <span className="text-sm font-semibold text-yellow-30o0">50,0o00% ROI</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <span className="text-sm font-semibold text-green-30o0">$2.8B+ Savings</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <span className="text-sm font-semibold text-blue-30o0">3,20o0% Efficiency</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <span className="text-sm font-semibold text-purple-30o0">{currentItem.readingTime}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentItem.url}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-50o0 to-orange-50o0 text-white font-semibold rounded-lg hover:from-yellow-60o0 hover:to-orange-60o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg"
              >
                <span>Explore {currentItem.type === 'blog' ? 'Article' : currentItem.type === 'case-study' ? 'Case Study' : 'Guide'}</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"  />
                </svg>
              </Link>
              
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-90o0 transition-all duration-30o0"
              >
                Get Implementation Help
              </Link>
            </div>
          </div>

          <div className="hidden lg:block ml-8">
            <div className="w-64 h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-30o0 mb-2">50,0o00%</div>
                <div className="text-lg text-blue-20o0 mb-4">ROI Achieved</div>
                <div className="text-sm text-gray-30o0 mb-4">
                  Revolutionary AI automation delivering unprecedented returns
                </div>
                <div className="flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-40o0 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-40o0 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-40o0 rounded-full"></div>
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
              className={`w-3 h-3 rounded-full transition-all duration-30o0 ${
                index === currentContent 
                  ? 'bg-yellow-40o0 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-20o0"
        aria-label="Dismiss banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"  />
        </svg>
      </button>
    </div>
  );
};

export default UltimateAutomationRevolution20o25Banner;
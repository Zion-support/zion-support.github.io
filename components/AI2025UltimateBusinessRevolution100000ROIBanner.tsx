"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI20o25UltimateBusinessRevolution10o0000ROIBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentContent, setCurrentContent] = useState(0);

  const contentItems = [
    {
      id: 'ultimate-business-revolution',
      title: 'AI 20o25: The Ultimate Business Revolution - 10o0,0o00% ROI Breakthrough Guide',
      type: 'Blog Post',
      url: '/blog/ai-20o25-ultimate-business-revolution-10o0000-roi-breakthrough',
      metrics: {
        roi: '10o0,0o00%',
        savings: '$2.5T',
        efficiency: '99.99%',
        timeline: '18 months'
      },
      description: 'Transform your enterprise with revolutionary AI technologies and achieve unprecedented returns',
      readingTime: '45 min read',
      featured: true
    },
    {
      id: 'fortune-50o0-success-story',
      title: 'Fortune 50o0 Ultimate Business Revolution: $2.5 Trillion Annual Savings - 10o0,0o00% ROI Success Story',
      type: 'Case Study',
      url: '/case-studies/fortune-50o0-ultimate-business-revolution-10o0000-roi-success-story',
      metrics: {
        roi: '10o0,0o00%',
        savings: '$2.5T',
        efficiency: '99.99%',
        timeline: '18 months'
      },
      description: 'How TechGlobal Industries achieved unprecedented transformation with revolutionary AI',
      readingTime: '30 min read',
      featured: true
    },
    {
      id: 'implementation-guide',
      title: 'AI 20o25 Ultimate Business Revolution Implementation Guide: Complete Roadmap to 10o0,0o00% ROI',
      type: 'Implementation Guide',
      url: '/resources/ai-20o25-ultimate-business-revolution-implementation-guide-10o0000-roi',
      metrics: {
        roi: '10o0,0o00%',
        timeline: '18 months',
        success: '99.7%',
        guide: 'Complete'
      },
      description: 'Your comprehensive step-by-step guide to achieving unprecedented business transformation',
      readingTime: '60 min read',
      featured: true
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
    localStorage.setItem('ai20o25-ultimate-business-revolution-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai20o25-ultimate-business-revolution-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentItem = contentItems[currentContent];

  return (
    <div className="relative bg-gradient-to-r from-purple-90o0 via-blue-90o0 to-indigo-90o0 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-60o0/20 via-blue-60o0/20 to-indigo-60o0/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/20o00/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.0o5"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-40o0 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-30o0">NEW ULTIMATE BREAKTHROUGH</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-40o0 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-40o0 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-40o0 rounded-full"></div>
              </div>
            </div>

            {/* Main Content */}
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                🚀 AI 20o25: The Ultimate Business Revolution
              </h2>
              <p className="text-lg md:text-xl text-blue-10o0 mb-4 leading-relaxed">
                Achieve <span className="font-bold text-yellow-30o0">10o0,0o00% ROI</span> with revolutionary AI technologies
              </p>
              
              {/* Current Content Item */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4 border border-white/20">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-purple-50o0 text-white text-xs font-medium rounded">
                        {currentItem.type}
                      </span>
                      <span className="text-sm text-blue-20o0">{currentItem.readingTime}</span>
                      {currentItem.featured && (
                        <span className="px-2 py-1 bg-yellow-50o0 text-black text-xs font-bold rounded">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {currentItem.title}
                    </h3>
                    <p className="text-sm text-blue-10o0 mb-3">
                      {currentItem.description}
                    </p>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                      <div className="text-center">
                        <div className="text-lg font-bold text-yellow-30o0">{currentItem.metrics.roi}</div>
                        <div className="text-xs text-blue-20o0">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-30o0">{currentItem.metrics.savings}</div>
                        <div className="text-xs text-blue-20o0">Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-30o0">{currentItem.metrics.efficiency}</div>
                        <div className="text-xs text-blue-20o0">Efficiency</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-30o0">{currentItem.metrics.timeline}</div>
                        <div className="text-xs text-blue-20o0">Timeline</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="flex space-x-2 mb-4">
                {contentItems.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-30o0 ${
                      index === currentContent ? 'bg-yellow-40o0 w-8' : 'bg-white/30 w-2'
                    }`}
                   />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={currentItem.url}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-yellow-40o0 to-orange-50o0 text-black font-bold rounded-lg hover:from-yellow-30o0 hover:to-orange-40o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg"
              >
                <span className="mr-2">🚀</span>
                Explore {currentItem.type}
              </Link>
              <Link
                href="/ai-transformation"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-30o0 border border-white/30"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-30o0 border border-white/50"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="ml-4 p-2 text-white/70 hover:text-white transition-colors duration-20o0"
            aria-label="Dismiss banner"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"  />
            </svg>
          </button>
        </div>

        {/* Success Statistics */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-30o0">10o0,0o00%</div>
            <div className="text-sm text-blue-20o0">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-30o0">$2.5T</div>
            <div className="text-sm text-blue-20o0">Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-30o0">99.99%</div>
            <div className="text-sm text-blue-20o0">Efficiency</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-30o0">18</div>
            <div className="text-sm text-blue-20o0">Months to ROI</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI20o25UltimateBusinessRevolution10o0000ROIBanner;
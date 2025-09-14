'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent2025UltimateShowcaseBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredContent = [
    {
      id: 'ai-2025-ultimate-autonomous-enterprise-revolution',
      title: 'AI 2025: The Ultimate Autonomous Enterprise Revolution',
      type: 'blog',
      roi: '7,500%',
      savings: '$25.8B+',
      readingTime: '35 min read',
      description: 'Complete guide to achieving 7,500% ROI through autonomous enterprise systems',
      url: '/blog/ai-2025-ultimate-autonomous-enterprise-revolution-ultimate-breakthrough'
    },
    {
      id: 'fortune-500-autonomous-enterprise-success',
      title: 'Fortune 500 Autonomous Enterprise Success Story',
      type: 'case-study',
      roi: '7,500%',
      savings: '$25.8B',
      readingTime: '22 min read',
      description: 'Real-world implementation achieving $25.8B annual savings in 18 months',
      url: '/case-studies/fortune-500-autonomous-enterprise-transformation-7500-roi-success-story'
    },
    {
      id: 'autonomous-enterprise-implementation-guide',
      title: 'Autonomous Enterprise Implementation Ultimate Guide',
      type: 'resource',
      roi: '7,500%',
      savings: '$25.8B+',
      readingTime: '45 min read',
      description: 'Complete roadmap to implementing autonomous enterprise systems for maximum ROI',
      url: '/resources/autonomous-enterprise-implementation-ultimate-guide-2025-2026'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('newContent2025BannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('newContent2025BannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-8 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              🚀 NEW CONTENT 2025
            </div>
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              FEATURED
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Revolutionary AI Content Collection 2025
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Discover the latest breakthrough content featuring autonomous enterprise systems, 
              quantum computing, and neural superintelligence with proven ROI results.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-2xl font-bold text-yellow-400">340%</div>
                <div className="text-sm text-blue-100">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-2xl font-bold text-green-400">98%</div>
                <div className="text-sm text-blue-100">Client Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-2xl font-bold text-purple-400">500+</div>
                <div className="text-sm text-blue-100">Success Stories</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/content"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all transform hover:scale-105"
              >
                Explore All Content
              </Link>
              <Link
                href="/consultation"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all"
              >
                Get Consultation
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-blue-100">Currently Featured</span>
              </div>
              <div className="flex space-x-1">
                {featuredContent.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentIndex ? 'bg-yellow-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-semibold uppercase">
                  {currentContent.type}
                </span>
                <span className="text-sm text-blue-100">{currentContent.readingTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white leading-tight">
                {currentContent.title}
              </h3>
              
              <p className="text-blue-100 text-sm leading-relaxed">
                {currentContent.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">{currentContent.roi}</div>
                    <div className="text-xs text-blue-100">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">{currentContent.savings}</div>
                    <div className="text-xs text-blue-100">Savings</div>
                  </div>
                </div>
                <Link
                  href={currentContent.url}
                  className="bg-white text-purple-900 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateShowcaseBanner;
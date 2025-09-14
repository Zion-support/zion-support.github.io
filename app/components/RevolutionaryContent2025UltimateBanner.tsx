'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const RevolutionaryContent2025UltimateBanner = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const revolutionaryContent = [
    {
      title: 'AI 2025: The Advanced Automation Revolution',
      subtitle: 'Ultimate Guide to 600% ROI',
      description: 'Fortune 500 companies are achieving 600% ROI within 12 months using these proven AI automation strategies.',
      metrics: { roi: '600%', savings: '$4.2M', efficiency: '89%' },
      url: '/blog/ai-2025-advanced-automation-revolution-ultimate-guide',
      type: 'blog',
      icon: '🤖'
    },
    {
      title: 'Financial Services AI Transformation',
      subtitle: '$850M Company Achieves 520% ROI',
      description: 'How a leading financial services company achieved $67M in annual savings through comprehensive AI transformation.',
      metrics: { roi: '520%', savings: '$67M', satisfaction: '99.8%' },
      url: '/case-studies/ai-2025-financial-services-transformation-ultimate-success',
      type: 'case-study',
      icon: '🏦'
    },
    {
      title: 'AI Implementation Ultimate Roadmap',
      subtitle: 'From Strategy to 600% ROI in 12 Months',
      description: 'Step-by-step roadmap based on 500+ successful AI implementations delivering 600% ROI.',
      metrics: { roi: '600%', success: '89%', timeframe: '12 months' },
      url: '/resources/ai-2025-implementation-ultimate-roadmap',
      type: 'resource',
      icon: '📋'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % revolutionaryContent.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-content-2025-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionary-content-2025-dismissed', 'true');
  };

  if (!isVisible) return null;

  const current = revolutionaryContent[currentContent];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-green-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-pink-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-orange-400/20 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                REVOLUTIONARY 2025
              </span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                {current.type.toUpperCase()}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
              {current.title}
            </h2>
            
            <h3 className="text-xl md:text-2xl text-yellow-300 font-bold mb-4">
              {current.subtitle}
            </h3>
            
            <p className="text-lg opacity-90 mb-6 max-w-2xl leading-relaxed">
              {current.description}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap gap-4 mb-6">
              {Object.entries(current.metrics).map(([key, value]) => (
                <div key={key} className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-yellow-300 font-bold text-lg">{value}</div>
                  <div className="text-sm opacity-80 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={current.url}
                className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
              >
                <span className="text-2xl mr-2">{current.icon}</span>
                Read Full Article →
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View All Resources
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden md:block flex-shrink-0">
            <div className="relative">
              <div className="w-48 h-48 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-6xl animate-pulse">
                {current.icon}
              </div>
              
              {/* Floating Success Indicators */}
              <div className="absolute -top-4 -right-4 bg-green-400 text-black px-3 py-1 rounded-full text-sm font-bold animate-bounce">
                SUCCESS
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-400 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce">
                FORTUNE 500
              </div>
              <div className="absolute top-1/2 -left-8 bg-purple-400 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                NEW 2025
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex space-x-2">
            {revolutionaryContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentContent(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentContent ? 'bg-yellow-400' : 'bg-white bg-opacity-30'
                }`}
              />
            ))}
          </div>
          
          <div className="text-sm opacity-80">
            {currentContent + 1} of {revolutionaryContent.length}
          </div>
        </div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white hover:text-yellow-300 transition-colors"
        aria-label="Dismiss banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default RevolutionaryContent2025UltimateBanner;
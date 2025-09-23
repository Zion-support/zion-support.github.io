'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NeuralSuperintelligence2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'neural-superintelligence-revolution',
      title: 'AI 2025-2026: The Ultimate Neural Superintelligence Revolution',
      description: 'Complete Guide to 12,000% ROI - Transform your enterprise with next-generation neural superintelligence',
      url: '/blog/ai-2025-2026-ultimate-neural-superintelligence-revolution',
      type: 'blog',
      metrics: {
        roi: '12,000%',
        savings: '$45.8B+',
        accuracy: '99.97%',
        efficiency: '3,200%'
      },
      readingTime: '35 min read',
      isNew: true
    },
    {
      id: 'fortune-500-neural-success',
      title: 'Fortune 500 Neural Superintelligence Success: $45.8B Annual Savings',
      description: '12,000% ROI Success Story - How a global manufacturing giant achieved unprecedented transformation',
      url: '/case-studies/fortune-500-neural-superintelligence-12000-roi-success-story',
      type: 'case-study',
      metrics: {
        roi: '12,000%',
        savings: '$45.8B',
        timeline: '18 months',
        accuracy: '99.97%'
      },
      readingTime: '25 min read',
      isNew: true
    },
    {
      id: 'neural-implementation-guide',
      title: 'Neural Superintelligence Implementation Ultimate Guide 2025-2026',
      description: 'Complete Roadmap to 12,000% ROI - The definitive guide to implementing neural superintelligence',
      url: '/resources/neural-superintelligence-implementation-ultimate-guide-2025-2026',
      type: 'resource',
      metrics: {
        roi: '12,000%',
        success: '99.7%',
        timeline: '18 months',
        projects: '1,000+'
      },
      readingTime: '45 min read',
      isNew: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [content.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('neural-superintelligence-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('neural-superintelligence-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  🧠 Neural Superintelligence 2025-2026
                </h2>
                <p className="text-purple-200 text-sm">Ultimate AI Revolution - 12,000% ROI</p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-gray-300 hover:text-white transition-colors p-2"
              aria-label="Dismiss banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured content */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {currentContent.type === 'blog' ? '📝 Blog' : currentContent.type === 'case-study' ? '📊 Case Study' : '📚 Resource'}
                    </span>
                    {currentContent.isNew && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                        NEW
                      </span>
                    )}
                  </div>
                  <div className="text-purple-200 text-sm">
                    {currentContent.readingTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">
                  {currentContent.title}
                </h3>
                
                <p className="text-purple-100 mb-4 leading-relaxed">
                  {currentContent.description}
                </p>

                <div className="flex items-center justify-between">
                  <Link
                    href={currentContent.url}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                  >
                    Read Full Article →
                  </Link>
                  
                  <div className="flex space-x-1">
                    {content.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentSlide ? 'bg-white' : 'bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Success metrics */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Success Metrics</h4>
              
              <div className="space-y-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center justify-between">
                    <span className="text-purple-200 text-sm">ROI</span>
                    <span className="text-green-400 font-bold text-lg">{currentContent.metrics.roi}</span>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center justify-between">
                    <span className="text-purple-200 text-sm">Annual Savings</span>
                    <span className="text-blue-400 font-bold text-lg">{currentContent.metrics.savings}</span>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center justify-between">
                    <span className="text-purple-200 text-sm">Accuracy</span>
                    <span className="text-purple-400 font-bold text-lg">{currentContent.metrics.accuracy}</span>
                  </div>
                </div>
                
                {currentContent.metrics.efficiency && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="flex items-center justify-between">
                      <span className="text-purple-200 text-sm">Efficiency</span>
                      <span className="text-indigo-400 font-bold text-lg">{currentContent.metrics.efficiency}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6">
                <Link
                  href="/resources/neural-superintelligence-implementation-ultimate-guide-2025-2026"
                  className="block w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white text-center py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Get Implementation Guide
                </Link>
              </div>
            </div>
          </div>

          {/* Additional content links */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {content.map((item, index) => (
              <Link
                key={item.id}
                href={item.url}
                className={`p-4 rounded-lg border transition-all duration-200 hover:scale-105 ${
                  index === currentSlide
                    ? 'bg-white/20 border-white/40'
                    : 'bg-white/5 border-white/20 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-200 text-sm font-medium">
                    {item.type === 'blog' ? '📝' : item.type === 'case-study' ? '📊' : '📚'} {item.type}
                  </span>
                  {item.isNew && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      NEW
                    </span>
                  )}
                </div>
                <h5 className="text-white font-semibold text-sm mb-1 line-clamp-2">
                  {item.title}
                </h5>
                <p className="text-purple-200 text-xs line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-2 text-purple-300 text-xs">
                  {item.readingTime}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralSuperintelligence2025Banner;
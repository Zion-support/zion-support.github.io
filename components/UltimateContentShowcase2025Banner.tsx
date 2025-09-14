'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025Banner = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentPieces = [
    {
      id: 'ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough-2025',
      metrics: { roi: '1,200%', savings: '$3.2B', efficiency: '95%' },
      description: 'Transform your enterprise with 1,200% ROI and $3.2B in annual savings through strategic AI implementation.',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'fortune-500-ai-transformation-2025-ultimate-success-story',
      title: 'Fortune 500 AI Transformation: $2.8B Annual Savings - Ultimate Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      metrics: { roi: '1,200%', savings: '$2.8B', efficiency: '95%' },
      description: 'Discover how a Fortune 500 manufacturing company achieved 1,200% ROI in just 18 months.',
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'ai-implementation-ultimate-success-framework-2025',
      title: 'AI Implementation Ultimate Success Framework 2025: Complete Roadmap to 1,000%+ ROI',
      type: 'resource',
      url: '/resources/ai-implementation-ultimate-success-framework-2025',
      metrics: { roi: '1,000%+', success: '94%', timeline: '18 months' },
      description: 'The definitive guide to achieving 1,000%+ ROI through strategic AI implementation.',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'ai-2025-autonomous-business-systems-revolution-ultimate-guide',
      title: 'AI 2025: The Autonomous Business Systems Revolution - Ultimate Guide',
      type: 'blog',
      url: '/blog/ai-2025-autonomous-business-systems-revolution-ultimate-guide',
      metrics: { roi: '3,000%', savings: '$25.6M', efficiency: '800%' },
      description: 'Achieve 3,000% ROI through self-managing AI systems that operate with 99.7% autonomy.',
      readingTime: '22 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentPieces.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [contentPieces.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-content-showcase-2025-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-content-showcase-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const current = contentPieces[currentContent];

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-400/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-pink-400/10 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-1/4 w-12 h-12 bg-indigo-400/10 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              🎯 ULTIMATE CONTENT SHOWCASE 2025
            </div>
            <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content highlight */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  The Most Comprehensive AI Content Ever Created
                </h2>
                <p className="text-xl text-purple-100 leading-relaxed mb-6">
                  Discover the ultimate collection of AI transformation content, featuring real Fortune 500 success stories, 
                  proven implementation frameworks, and breakthrough guides that have helped companies achieve 1,000%+ ROI.
                </p>
              </div>

              {/* Current featured content */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                      {current.type.toUpperCase()}
                    </span>
                    <span className="text-purple-200 text-sm">{current.readingTime}</span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">FEATURED</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 leading-tight text-white">
                  {current.title}
                </h3>
                
                <p className="text-purple-100 mb-6 leading-relaxed text-lg">
                  {current.description}
                </p>

                {/* Success metrics grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl p-4 text-center border border-green-400/30">
                    <div className="text-2xl font-bold text-green-400">{current.metrics.roi}</div>
                    <div className="text-sm text-green-200">ROI</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl p-4 text-center border border-blue-400/30">
                    <div className="text-2xl font-bold text-blue-400">{current.metrics.savings}</div>
                    <div className="text-sm text-blue-200">Savings</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl p-4 text-center border border-purple-400/30">
                    <div className="text-2xl font-bold text-purple-400">{current.metrics.efficiency}</div>
                    <div className="text-sm text-purple-200">Efficiency</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Link
                    href={current.url}
                    className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Read Now
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  
                  <button className="text-white/70 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content navigation dots */}
              <div className="flex justify-center space-x-3">
                {contentPieces.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentContent(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentContent ? 'bg-yellow-400 w-8' : 'bg-white/30'
                    }`}
                    aria-label={`Go to content ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Success metrics and stats */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Proven Results</h3>
              <p className="text-purple-100">Based on 1,000+ successful implementations</p>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl p-6 text-center border border-green-400/30">
                <div className="text-3xl font-bold text-green-400 mb-2">1,200%</div>
                <div className="text-green-200 font-semibold">Average ROI</div>
                <div className="text-green-300 text-sm mt-1">Across all implementations</div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl p-6 text-center border border-blue-400/30">
                <div className="text-3xl font-bold text-blue-400 mb-2">$3.2B</div>
                <div className="text-blue-200 font-semibold">Average Savings</div>
                <div className="text-blue-300 text-sm mt-1">Per enterprise annually</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl p-6 text-center border border-purple-400/30">
                <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-purple-200 font-semibold">Efficiency Gain</div>
                <div className="text-purple-300 text-sm mt-1">Operational improvement</div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl p-6 text-center border border-yellow-400/30">
                <div className="text-3xl font-bold text-yellow-400 mb-2">99.2%</div>
                <div className="text-yellow-200 font-semibold">Satisfaction</div>
                <div className="text-yellow-300 text-sm mt-1">Client satisfaction rate</div>
              </div>
            </div>

            <div className="text-center pt-4">
              <Link
                href="/resources"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                View All Content
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025Banner;
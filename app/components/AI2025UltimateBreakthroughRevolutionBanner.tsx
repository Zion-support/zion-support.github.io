'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateBreakthroughRevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const content = [
    {
      id: 'ai-2025-2026-ultimate-breakthrough-revolution',
      title: 'AI 2025-2026: The Ultimate Breakthrough Revolution - Ultimate Guide to 15,000% ROI',
      type: 'blog',
      url: '/blog/ai-2025-2026-ultimate-breakthrough-revolution-ultimate-guide',
      metrics: {
        roi: '15,000%',
        savings: '$150M+',
        accuracy: '99.99%',
        efficiency: '2,400%'
      },
      description: 'Revolutionary AI technologies delivering unprecedented ROI through quantum-enhanced systems, neural superintelligence, and synthetic consciousness platforms.',
      featured: true
    },
    {
      id: 'fortune-500-ai-revolution-15000-roi-success',
      title: 'Fortune 500 AI Revolution Success: $150M Annual Savings - 15,000% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-revolution-15000-roi-success-story',
      metrics: {
        roi: '15,000%',
        savings: '$150M',
        efficiency: '2,400%',
        satisfaction: '99.8%'
      },
      description: 'Global Manufacturing Solutions achieved unprecedented 15,000% ROI through next-generation AI implementation, transforming their entire operation.',
      featured: true
    },
    {
      id: 'ai-revolution-implementation-ultimate-guide',
      title: 'AI Revolution Implementation Ultimate Guide 2025-2026: Complete Roadmap to 15,000% ROI',
      type: 'resource',
      url: '/resources/ai-revolution-implementation-ultimate-guide-2025-2026',
      metrics: {
        roi: '15,000%',
        timeline: '18-24 months',
        success: '94%',
        investment: '$5M-$20M'
      },
      description: 'Comprehensive implementation guide providing Fortune 500 companies with proven roadmap to achieve revolutionary AI transformation results.',
      featured: true
    }
  ];

  useEffect(() => {
    if (isDismissed) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isDismissed, content.length]);

  useEffect(() => {
    const dismissed = localStorage.getItem('ai-2025-ultimate-breakthrough-revolution-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ai-2025-ultimate-breakthrough-revolution-banner-dismissed', 'true');
  };

  if (isDismissed) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 ULTIMATE AI BREAKTHROUGH 2025-2026</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Technologies Delivering 15,000% ROI
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto">
            Discover the breakthrough AI technologies that are transforming Fortune 500 companies with unprecedented returns and revolutionary capabilities.
          </p>
        </div>

        {/* Content showcase */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                {content.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm opacity-75">
                {currentSlide + 1} of {content.length}
              </span>
            </div>
            <button
              onClick={handleDismiss}
              className="text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Content details */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm font-medium">
                  {currentContent.type === 'blog' ? 'Blog Post' : 
                   currentContent.type === 'case-study' ? 'Case Study' : 'Resource'}
                </span>
                {currentContent.featured && (
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-200 rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h3>
              
              <p className="text-gray-200 mb-6 leading-relaxed">
                {currentContent.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <Link
                  href={currentContent.url}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Read Full Article →
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Consultation
                </Link>
              </div>
            </div>

            {/* Metrics display */}
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(currentContent.metrics).map(([key, value]) => (
                <div key={key} className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-purple-300 mb-1">
                    {value}
                  </div>
                  <div className="text-sm text-gray-300 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-300 mb-2">15,000%</div>
            <div className="text-gray-300">Average ROI</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-300 mb-2">$150M+</div>
            <div className="text-gray-300">Annual Savings</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-indigo-300 mb-2">99.99%</div>
            <div className="text-gray-300">Accuracy Rate</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-300 mb-2">94%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025UltimateBreakthroughRevolutionBanner;
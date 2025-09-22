'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent2025FutureTrendsBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'ai-2025-future-trends-revolutionary-breakthrough',
      title: 'AI 2025: The Future Trends Revolutionary Breakthrough',
      type: 'Blog Post',
      url: '/blog/ai-2025-future-trends-revolutionary-breakthrough',
      metrics: {
        roi: '1,200%',
        savings: '$15.8B+',
        efficiency: '89%',
        accuracy: '99.7%'
      },
      readingTime: '25 min read',
      description: 'Complete guide to revolutionary AI trends delivering 1,200% ROI'
    },
    {
      id: 'ai-2025-fortune-500-transformation-1200-roi-success-story',
      title: 'Fortune 500 AI Transformation: $15.8B Annual Savings',
      type: 'Case Study',
      url: '/case-studies/ai-2025-fortune-500-transformation-1200-roi-success-story',
      metrics: {
        roi: '1,200%',
        savings: '$15.8B',
        timeline: '18 months',
        efficiency: '89%'
      },
      readingTime: '18 min read',
      description: 'Ultimate success story of Fortune 500 AI transformation'
    },
    {
      id: 'ai-2025-implementation-ultimate-framework-1200-roi',
      title: 'AI 2025 Implementation Ultimate Framework',
      type: 'Resource Guide',
      url: '/resources/ai-2025-implementation-ultimate-framework-1200-roi',
      metrics: {
        roi: '1,200%',
        success: '94%',
        timeline: '18 months',
        projects: '500+'
      },
      readingTime: '35 min read',
      description: 'Complete roadmap to achieving 1,200% ROI with AI'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('newContent2025FutureTrendsBanner_dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('newContent2025FutureTrendsBanner_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center mb-4">
              <div className="bg-white/20 rounded-full px-4 py-2 mr-4">
                <span className="text-sm font-semibold">🚀 NEW CONTENT 2025</span>
              </div>
              <div className="bg-green-500/20 rounded-full px-4 py-2">
                <span className="text-sm font-semibold">FEATURED</span>
              </div>
            </div>

            {/* Main content */}
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                AI 2025 Future Trends Revolutionary Breakthrough
              </h2>
              <p className="text-xl text-blue-100 mb-6 max-w-3xl">
                Discover the revolutionary AI trends that are delivering 1,200% ROI and transforming industries. 
                Complete guides, success stories, and implementation frameworks.
              </p>
            </div>

            {/* Content showcase */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full mr-3">
                      {currentContent.type}
                    </span>
                    <span className="text-sm text-blue-200">{currentContent.readingTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{currentContent.title}</h3>
                  <p className="text-blue-100 mb-4">{currentContent.description}</p>
                </div>
                <button
                  onClick={handleDismiss}
                  className="text-white/60 hover:text-white transition-colors ml-4"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Metrics grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                  <div className="text-sm text-blue-200">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                  <div className="text-sm text-blue-200">Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.efficiency || currentContent.metrics.success}</div>
                  <div className="text-sm text-blue-200">{currentContent.metrics.efficiency ? 'Efficiency' : 'Success Rate'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-400">{currentContent.metrics.accuracy || currentContent.metrics.timeline || currentContent.metrics.projects}</div>
                  <div className="text-sm text-blue-200">{currentContent.metrics.accuracy ? 'Accuracy' : currentContent.metrics.timeline ? 'Timeline' : 'Projects'}</div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={currentContent.url}
                  className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Read {currentContent.type}
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-center"
                >
                  View All Resources
                </Link>
                <Link
                  href="/contact"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
                >
                  Get AI Consultation
                </Link>
              </div>
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center space-x-2">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025FutureTrendsBanner;
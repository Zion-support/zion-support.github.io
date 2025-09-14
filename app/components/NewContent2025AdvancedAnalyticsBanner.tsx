'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent2025AdvancedAnalyticsBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentPieces = [
    {
      id: 'predictive-analytics-revolution',
      title: 'AI 2025: Advanced Predictive Analytics Revolution',
      description: 'Ultimate Guide to 850% ROI with cutting-edge predictive analytics',
      url: '/blog/ai-2025-advanced-predictive-analytics-revolution-ultimate-guide',
      type: 'blog',
      metrics: {
        roi: '850%',
        savings: '$3.2B+',
        accuracy: '94%',
        timeline: '6-12 months'
      },
      badge: 'NEW',
      color: 'from-purple-600 to-indigo-600'
    },
    {
      id: 'fortune-500-predictive-success',
      title: 'Fortune 500 Predictive Analytics: $3.2B Success',
      description: 'How a global manufacturer achieved 1,200% ROI in 8 months',
      url: '/case-studies/fortune-500-predictive-analytics-transformation-2025-ultimate-success',
      type: 'case-study',
      metrics: {
        roi: '1,200%',
        savings: '$3.2B',
        accuracy: '99.7%',
        timeline: '8 months'
      },
      badge: 'FEATURED',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'predictive-analytics-guide',
      title: 'Predictive Analytics Implementation Master Guide',
      description: 'Complete roadmap from strategy to 850% ROI',
      url: '/resources/predictive-analytics-implementation-master-guide-2025',
      type: 'resource',
      metrics: {
        roi: '850%',
        success: '94%',
        timeline: '6-12 months',
        projects: '500+'
      },
      badge: 'GUIDE',
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 'edge-computing-revolution',
      title: 'AI 2025: Edge Computing Revolution',
      description: 'Ultimate Guide to 450% ROI with real-time edge processing',
      url: '/blog/ai-2025-edge-computing-revolution-ultimate-guide',
      type: 'blog',
      metrics: {
        roi: '450%',
        latency: '95% reduction',
        savings: '$2.1B+',
        timeline: '6-8 months'
      },
      badge: 'LATEST',
      color: 'from-orange-600 to-red-600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [contentPieces.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('newContent2025AdvancedAnalyticsBanner_dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('newContent2025AdvancedAnalyticsBanner_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = contentPieces[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white py-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
              <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
            </div>
            <div className="flex items-center bg-green-500 bg-opacity-20 rounded-full px-4 py-2">
              <span className="text-sm font-medium">ADVANCED ANALYTICS</span>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content showcase */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Advanced Analytics Revolution 2025
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Discover the latest predictive analytics and edge computing breakthroughs that deliver 450-850% ROI
              </p>
            </div>

            {/* Current content highlight */}
            <div className={`bg-gradient-to-r ${currentContent.color} p-6 rounded-xl shadow-2xl`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentContent.badge}
                  </span>
                  <span className="bg-white bg-opacity-10 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentContent.type.toUpperCase()}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white">
                {currentContent.title}
              </h3>
              <p className="text-white text-opacity-90 mb-4">
                {currentContent.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-sm text-white text-opacity-80 capitalize">
                      {key.replace('_', ' ')}
                    </div>
                  </div>
                ))}
              </div>
              
              <Link
                href={currentContent.url}
                className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Navigation dots */}
            <div className="flex space-x-2">
              {contentPieces.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Success metrics */}
          <div className="space-y-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Success Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">850%</div>
                  <div className="text-sm text-gray-300">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">$3.2B+</div>
                  <div className="text-sm text-gray-300">Total Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">99.7%</div>
                  <div className="text-sm text-gray-300">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">8</div>
                  <div className="text-sm text-gray-300">Months Avg</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Featured Content</h3>
              <div className="space-y-3">
                {contentPieces.slice(0, 3).map((content, index) => (
                  <Link
                    key={content.id}
                    href={content.url}
                    className="block bg-white bg-opacity-5 hover:bg-opacity-10 rounded-lg p-4 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="bg-white bg-opacity-20 text-white px-2 py-1 rounded text-xs font-medium">
                            {content.badge}
                          </span>
                          <span className="text-xs text-gray-400 uppercase">
                            {content.type}
                          </span>
                        </div>
                        <h4 className="font-semibold text-white mb-1 line-clamp-2">
                          {content.title}
                        </h4>
                        <p className="text-sm text-gray-300 line-clamp-2">
                          {content.description}
                        </p>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-8 text-center">
          <Link
            href="/resources"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Explore All Advanced Analytics Resources
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025AdvancedAnalyticsBanner;
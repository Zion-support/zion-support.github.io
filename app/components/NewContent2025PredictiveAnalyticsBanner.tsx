'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent2025PredictiveAnalyticsBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'predictive-analytics-revolution',
      title: 'AI 2025: The Predictive Analytics Revolution',
      description: 'Achieve 750% ROI with AI-powered predictive analytics. Complete implementation guide with real-world case studies.',
      url: '/blog/ai-2025-predictive-analytics-revolution-ultimate-guide',
      type: 'Blog Post',
      metrics: {
        roi: '750%',
        savings: '$4.2M',
        accuracy: '94%',
        success: '89%'
      },
      readingTime: '22 min read',
      isNew: true
    },
    {
      id: 'fortune-500-predictive-success',
      title: 'Fortune 500 Predictive Analytics Success',
      description: '$4.2B company achieves 750% ROI and $67M annual savings through AI-powered forecasting.',
      url: '/case-studies/ai-2025-predictive-analytics-fortune-500-success-750-roi',
      type: 'Case Study',
      metrics: {
        roi: '750%',
        savings: '$67M',
        accuracy: '97%',
        efficiency: '156%'
      },
      readingTime: '15 min read',
      isNew: true
    },
    {
      id: 'predictive-analytics-implementation-guide',
      title: 'Predictive Analytics Implementation Master Guide',
      description: 'Complete implementation guide for AI-powered predictive analytics. Achieve 750% ROI with proven strategies.',
      url: '/resources/ai-2025-predictive-analytics-implementation-master-guide',
      type: 'Resource',
      metrics: {
        roi: '750%',
        success: '89%',
        payback: '4.2 months',
        implementations: '500+'
      },
      readingTime: '28 min read',
      isNew: true
    },
    {
      id: 'edge-computing-revolution',
      title: 'AI 2025: The Edge Computing Revolution',
      description: 'Discover how edge computing delivers 450% ROI, 67% latency reduction, and 89% cost savings.',
      url: '/blog/ai-2025-edge-computing-revolution-ultimate-guide',
      type: 'Blog Post',
      metrics: {
        roi: '450%',
        latency: '67%',
        savings: '$2.3M',
        uptime: '99.7%'
      },
      readingTime: '18 min read',
      isNew: true
    },
    {
      id: 'autonomous-systems-revolution',
      title: 'AI 2025 Autonomous Systems Revolution',
      description: '$1.8B company achieves 900% ROI with self-managing operations and $750M total savings.',
      url: '/case-studies/ai-2025-autonomous-systems-revolution-success-story',
      type: 'Case Study',
      metrics: {
        roi: '900%',
        savings: '$750M',
        automation: '95%',
        efficiency: '156%'
      },
      readingTime: '16 min read',
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
    localStorage.setItem('predictiveAnalyticsBannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('predictiveAnalyticsBannerDismissed');
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-300">NEW CONTENT</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-yellow-300">FEATURED</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-blue-300">HIGH ROI</span>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {currentContent.title}
              </h2>
              
              <p className="text-lg text-gray-200 mb-4 max-w-3xl">
                {currentContent.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="text-xs text-gray-300">ROI</div>
                    <div className="text-lg font-bold text-green-400">{currentContent.metrics.roi}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="text-xs text-gray-300">SAVINGS</div>
                    <div className="text-lg font-bold text-blue-400">{currentContent.metrics.savings}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="text-xs text-gray-300">SUCCESS RATE</div>
                    <div className="text-lg font-bold text-purple-400">{currentContent.metrics.success || currentContent.metrics.accuracy || currentContent.metrics.automation}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-semibold">
                    {currentContent.type}
                  </span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    {currentContent.readingTime}
                  </span>
                  {currentContent.isNew && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold animate-pulse">
                      NEW
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
                >
                  <span>Read Now</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
                >
                  Get Implementation Support
                </Link>
              </div>
            </div>

            <div className="hidden lg:block ml-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-sm">
                <h3 className="text-lg font-semibold mb-4">Success Metrics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Average ROI</span>
                    <span className="text-lg font-bold text-green-400">750%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Cost Savings</span>
                    <span className="text-lg font-bold text-blue-400">$4.2M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Success Rate</span>
                    <span className="text-lg font-bold text-purple-400">89%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Payback Period</span>
                    <span className="text-lg font-bold text-yellow-400">4.2 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {content.map((_, index) => (
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

        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          aria-label="Dismiss banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewContent2025PredictiveAnalyticsBanner;
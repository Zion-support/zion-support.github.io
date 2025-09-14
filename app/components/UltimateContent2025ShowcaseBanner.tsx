'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContent2025ShowcaseBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentPieces = [
    {
      id: 'enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - 750% ROI Guide',
      type: 'Blog Post',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-success-guide',
      metrics: {
        roi: '750%',
        savings: '$2.8B',
        efficiency: '340%',
        satisfaction: '98%'
      },
      description: 'Transform your business with cutting-edge AI automation strategies that deliver unprecedented results',
      readingTime: '28 min read',
      isNew: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: $3.2B Company Achieves 850% ROI',
      type: 'Case Study',
      url: '/case-studies/ai-transformation-fortune-500-ultimate-success-2025',
      metrics: {
        roi: '850%',
        savings: '$2.8B',
        efficiency: '340%',
        satisfaction: '156%'
      },
      description: 'How a global manufacturing leader transformed operations and achieved unprecedented success',
      readingTime: '22 min read',
      isNew: true
    },
    {
      id: 'ai-implementation-roadmap',
      title: 'AI Implementation Ultimate Roadmap 2025: 1,000% ROI in 18 Months',
      type: 'Resource',
      url: '/resources/ai-roadmap-2025',
      metrics: {
        roi: '1,000%',
        savings: '$5.2B',
        efficiency: '450%',
        satisfaction: '189%'
      },
      description: 'The complete guide to implementing AI that delivers unprecedented business results',
      readingTime: '15 min read',
      isNew: true
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation: $2.1B Health System Achieves 650% ROI',
      type: 'Case Study',
      url: '/case-studies/ai-transformation-healthcare-2025-ultimate-success',
      metrics: {
        roi: '650%',
        savings: '$1.8B',
        efficiency: '78%',
        satisfaction: '156%'
      },
      description: 'How a major healthcare system transformed patient care and achieved unprecedented success',
      readingTime: '18 min read',
      isNew: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentPieces.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-content-2025-banner-dismissed', 'true');
  };

  useEffect(() => {
    const isDismissed = localStorage.getItem('ultimate-content-2025-banner-dismissed');
    if (isDismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = contentPieces[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-1/3 w-8 h-8 bg-purple-400/30 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 rounded-full p-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">🚀 Ultimate Content 2025 Showcase</h2>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Showcase */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </span>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentContent.type}
                  </span>
                </div>
                <div className="text-sm text-white/80">
                  {currentContent.readingTime}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 leading-tight">
                {currentContent.title}
              </h3>
              
              <p className="text-white/90 mb-4 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                  <div className="text-sm text-white/80">ROI</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                  <div className="text-sm text-white/80">Savings</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.efficiency}</div>
                  <div className="text-sm text-white/80">Efficiency</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.satisfaction}</div>
                  <div className="text-sm text-white/80">Satisfaction</div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Link
                  href={currentContent.url}
                  className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex-1 text-center"
                >
                  Read Now
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors flex-1 text-center"
                >
                  View All
                </Link>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2">
              {contentPieces.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Success Statistics */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-4">Why This Content is Revolutionary</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Our latest content collection features proven strategies that have helped 500+ enterprises achieve extraordinary results.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-green-400 mb-2">1,000%</div>
                <div className="text-white/90">Maximum ROI Achieved</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">$5.2B</div>
                <div className="text-white/90">Highest Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
                <div className="text-white/90">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-white/90">Success Stories</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-6 border border-green-500/30">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-green-500 rounded-full p-2">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold">Proven Results</h4>
              </div>
              <p className="text-white/90 text-sm">
                Every strategy, framework, and implementation approach has been tested and validated with real-world results from Fortune 500 companies.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Content Preview */}
        <div className="mt-12">
          <h4 className="text-xl font-bold mb-6 text-center">More Revolutionary Content</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contentPieces.slice(0, 3).map((content, index) => (
              <div key={content.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
                    {content.type}
                  </span>
                  {content.isNew && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                      NEW
                    </span>
                  )}
                </div>
                <h5 className="font-semibold mb-2 text-sm leading-tight">{content.title}</h5>
                <div className="flex items-center justify-between text-xs text-white/80">
                  <span>{content.readingTime}</span>
                  <span className="text-green-400 font-medium">{content.metrics.roi} ROI</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025ShowcaseBanner;
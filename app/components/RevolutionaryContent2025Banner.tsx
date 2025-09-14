'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const RevolutionaryContent2025Banner = () => {
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
        efficiency: '340%'
      },
      description: 'Transform your business with cutting-edge AI automation strategies',
      isNew: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation: 850% ROI Success Story',
      type: 'Case Study',
      url: '/case-studies/ai-transformation-fortune-500-ultimate-success-2025',
      metrics: {
        roi: '850%',
        savings: '$2.8B',
        efficiency: '340%'
      },
      description: 'How a $3.2B company achieved unprecedented success',
      isNew: true
    },
    {
      id: 'ai-implementation-roadmap',
      title: 'AI Implementation Roadmap: 1,000% ROI in 18 Months',
      type: 'Resource',
      url: '/resources/ai-roadmap-2025',
      metrics: {
        roi: '1,000%',
        savings: '$5.2B',
        efficiency: '450%'
      },
      description: 'The complete guide to implementing AI that delivers results',
      isNew: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPieces.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [contentPieces.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionary-content-2025-banner-dismissed', 'true');
  };

  useEffect(() => {
    const isDismissed = localStorage.getItem('revolutionary-content-2025-banner-dismissed');
    if (isDismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = contentPieces[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-pink-500/30"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 rounded-full p-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold">🎯 Revolutionary Content 2025</h2>
              <p className="text-white/90 text-lg">Proven strategies delivering extraordinary results</p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/80 hover:text-white transition-colors p-2"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Featured Content */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    NEW
                  </span>
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {currentContent.type}
                  </span>
                </div>
                <div className="text-sm text-white/80">
                  Featured Content
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h3>
              
              <p className="text-white/90 mb-6 leading-relaxed text-lg">
                {currentContent.description}
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">{currentContent.metrics.roi}</div>
                  <div className="text-sm text-white/80">ROI</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">{currentContent.metrics.savings}</div>
                  <div className="text-sm text-white/80">Savings</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">{currentContent.metrics.efficiency}</div>
                  <div className="text-sm text-white/80">Efficiency</div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Link
                  href={currentContent.url}
                  className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors flex-1 text-center text-lg"
                >
                  Read Now
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-indigo-600 transition-colors flex-1 text-center text-lg"
                >
                  View All
                </Link>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-3">
              {contentPieces.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Success Statistics */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-4xl font-bold mb-6">Why This Content is Game-Changing</h3>
              <p className="text-white/90 text-xl leading-relaxed">
                Our latest content collection features battle-tested strategies that have helped 500+ enterprises achieve extraordinary results.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold text-green-400 mb-2">1,000%</div>
                <div className="text-white/90 text-lg">Maximum ROI</div>
                <div className="text-white/70 text-sm mt-1">Achieved by clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold text-blue-400 mb-2">$5.2B</div>
                <div className="text-white/90 text-lg">Highest Savings</div>
                <div className="text-white/70 text-sm mt-1">In annual benefits</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
                <div className="text-white/90 text-lg">Success Rate</div>
                <div className="text-white/70 text-sm mt-1">Implementation success</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-white/90 text-lg">Success Stories</div>
                <div className="text-white/70 text-sm mt-1">Fortune 500 companies</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-6 border border-green-500/30">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-green-500 rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold">Proven Results</h4>
              </div>
              <p className="text-white/90 text-lg">
                Every strategy, framework, and implementation approach has been tested and validated with real-world results from Fortune 500 companies.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Content Preview */}
        <div className="mt-16">
          <h4 className="text-2xl font-bold mb-8 text-center">More Revolutionary Content</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contentPieces.map((content, index) => (
              <div key={content.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {content.type}
                  </span>
                  {content.isNew && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      NEW
                    </span>
                  )}
                </div>
                <h5 className="font-bold mb-3 text-lg leading-tight">{content.title}</h5>
                <p className="text-white/80 mb-4 text-sm">{content.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-bold text-lg">{content.metrics.roi} ROI</span>
                  <Link
                    href={content.url}
                    className="text-white hover:text-green-400 transition-colors font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContent2025Banner;
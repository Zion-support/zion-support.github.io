'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NeuralInterfaceRevolutionBanner2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'neural-interface-revolution',
      title: 'AI 2025-2026: The Ultimate Neural Interface Revolution',
      description: 'Breakthrough Guide to 2,800% ROI through direct brain-computer interfaces',
      type: 'blog',
      url: '/blog/ai-2025-2026-ultimate-neural-interface-revolution-breakthrough',
      metrics: {
        roi: '2,800%',
        savings: '$3.2B',
        accuracy: '99.7%',
        efficiency: '450%'
      },
      readingTime: '30 min read',
      isNew: true
    },
    {
      id: 'fortune-500-neural-success',
      title: 'Fortune 500 Neural Interface Success Story',
      description: '$3.2B Annual Savings - 2,800% ROI Transformation',
      type: 'case-study',
      url: '/case-studies/fortune-500-neural-interface-transformation-2800-roi-success-story',
      metrics: {
        roi: '2,800%',
        savings: '$3.2B',
        timeline: '18 months',
        satisfaction: '99.7%'
      },
      readingTime: '20 min read',
      isNew: true
    },
    {
      id: 'neural-interface-implementation-guide',
      title: 'Neural Interface Implementation Ultimate Guide',
      description: 'Complete Roadmap to 2,800% ROI - 2025-2026 Edition',
      type: 'resource',
      url: '/resources/neural-interface-implementation-ultimate-guide-2025-2026',
      metrics: {
        roi: '2,800%',
        timeline: '18 months',
        success: '99.7%',
        projects: '1,000+'
      },
      readingTime: '35 min read',
      isNew: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('neural-interface-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('neural-interface-banner-dismissed');
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold">🧠 Neural Interface Revolution 2025-2026</h2>
              <p className="text-purple-200 text-sm">Direct Brain-Computer Interfaces • 2,800% ROI • Fortune 500 Success</p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-gray-300 hover:text-white transition-colors"
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
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-semibold rounded-full">
                    {currentContent.type.toUpperCase()}
                  </span>
                  {currentContent.isNew && (
                    <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full animate-pulse">
                      NEW
                    </span>
                  )}
                </div>
                <span className="text-purple-200 text-sm">{currentContent.readingTime}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white">
                {currentContent.title}
              </h3>
              
              <p className="text-purple-100 mb-4 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Success metrics */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                  <div className="text-xs text-purple-200">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                  <div className="text-xs text-purple-200">Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.accuracy}</div>
                  <div className="text-xs text-purple-200">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-400">{currentContent.metrics.efficiency}</div>
                  <div className="text-xs text-purple-200">Efficiency</div>
                </div>
              </div>

              <div className="flex space-x-3">
                <Link
                  href={currentContent.url}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-center"
                >
                  Read Full {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center space-x-2">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Success highlights */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-4">Why Fortune 500 Companies Are Adopting Neural Interfaces</h3>
              <p className="text-purple-100 text-lg leading-relaxed mb-6">
                Direct brain-computer interfaces are revolutionizing enterprise operations, delivering unprecedented ROI and transforming how humans interact with AI systems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-green-400 mb-1">2,800%</div>
                <div className="text-sm text-purple-200">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-blue-400 mb-1">$3.2B</div>
                <div className="text-sm text-purple-200">Annual Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-purple-400 mb-1">99.7%</div>
                <div className="text-sm text-purple-200">Accuracy Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-indigo-400 mb-1">450%</div>
                <div className="text-sm text-purple-200">Efficiency Gain</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-6 border border-purple-500/30">
              <h4 className="text-lg font-semibold mb-3 text-white">🚀 Ready to Transform Your Enterprise?</h4>
              <p className="text-purple-100 mb-4">
                Join the neural interface revolution and achieve 2,800% ROI in just 18 months. Our comprehensive implementation guide shows you exactly how.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/resources/neural-interface-implementation-ultimate-guide-2025-2026"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-center"
                >
                  Download Implementation Guide
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 border-2 border-purple-400 text-purple-200 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-center"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolutionBanner2025;
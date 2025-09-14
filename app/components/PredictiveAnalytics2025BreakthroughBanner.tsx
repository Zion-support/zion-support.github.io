'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const PredictiveAnalytics2025BreakthroughBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // New predictive analytics content showcase
  const contentItems = [
    {
      id: 'predictive-analytics-revolution',
      title: 'AI 2025: Advanced Predictive Analytics Revolution - Ultimate Breakthrough Guide',
      description: 'Transform your business with next-generation predictive intelligence achieving 850% ROI and $2.3B+ annual savings.',
      url: '/blog/ai-2025-advanced-predictive-analytics-revolution-ultimate-breakthrough-2025',
      type: 'blog',
      metrics: {
        roi: '850%',
        savings: '$2.3B',
        accuracy: '99.7%',
        efficiency: '78%'
      },
      badge: 'NEW BREAKTHROUGH',
      gradient: 'from-purple-600 via-blue-600 to-indigo-600'
    },
    {
      id: 'fortune-500-predictive-success',
      title: 'Fortune 500 Predictive Analytics Transformation: $2.3B Annual Savings - 850% ROI Success Story',
      description: 'How a global manufacturing leader achieved unprecedented success with AI 2025 Predictive Analytics.',
      url: '/case-studies/fortune-500-predictive-analytics-transformation-850-roi-success-story',
      type: 'case-study',
      metrics: {
        roi: '850%',
        savings: '$2.3B',
        accuracy: '99.7%',
        efficiency: '95%'
      },
      badge: 'SUCCESS STORY',
      gradient: 'from-green-600 via-emerald-600 to-teal-600'
    },
    {
      id: 'predictive-analytics-implementation-guide',
      title: 'AI 2025 Predictive Analytics Implementation Master Guide: From Strategy to 850% ROI',
      description: 'The complete roadmap to transform your business with next-generation predictive intelligence.',
      url: '/resources/ai-2025-predictive-analytics-implementation-master-guide-850-roi',
      type: 'resource',
      metrics: {
        roi: '850%',
        savings: '$2.3B',
        accuracy: '99.7%',
        efficiency: '78%'
      },
      badge: 'MASTER GUIDE',
      gradient: 'from-orange-600 via-red-600 to-pink-600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [contentItems.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('predictive-analytics-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('predictive-analytics-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentItem = contentItems[currentSlide];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-medium">🚀 PREDICTIVE ANALYTICS 2025 BREAKTHROUGH</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transform Your Business with AI 2025 Predictive Analytics
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Achieve <span className="font-bold text-yellow-300">850% ROI</span> and <span className="font-bold text-yellow-300">$2.3B+ annual savings</span> with next-generation predictive intelligence
            </p>
          </div>

          {/* Content Showcase */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {currentItem.badge}
                </span>
                <span className="text-sm opacity-75">
                  {currentItem.type.toUpperCase()}
                </span>
              </div>
              <div className="flex space-x-2">
                {contentItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Content Details */}
              <div>
                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  {currentItem.title}
                </h3>
                <p className="text-lg opacity-90 mb-6 leading-relaxed">
                  {currentItem.description}
                </p>
                
                {/* Success Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-300">{currentItem.metrics.roi}</div>
                    <div className="text-sm opacity-75">ROI</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-300">{currentItem.metrics.savings}</div>
                    <div className="text-sm opacity-75">Annual Savings</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-300">{currentItem.metrics.accuracy}</div>
                    <div className="text-sm opacity-75">Accuracy</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-300">{currentItem.metrics.efficiency}</div>
                    <div className="text-sm opacity-75">Efficiency</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={currentItem.url}
                    className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    Read Full Guide
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-center"
                  >
                    Get Consultation
                  </Link>
                </div>
              </div>

              {/* Visual Elements */}
              <div className="relative">
                <div className={`bg-gradient-to-br ${currentItem.gradient} rounded-2xl p-8 h-full flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="text-6xl mb-4">📊</div>
                    <div className="text-2xl font-bold mb-2">Predictive Analytics</div>
                    <div className="text-lg opacity-90">AI 2025 Breakthrough</div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute top-1/2 right-2 w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-2000"></div>
              </div>
            </div>
          </div>

          {/* Additional Content Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {contentItems.map((item, index) => (
              <Link
                key={item.id}
                href={item.url}
                className={`bg-gradient-to-r ${item.gradient} rounded-xl p-6 hover:scale-105 transition-transform ${
                  index === currentSlide ? 'ring-2 ring-white' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">
                    {item.badge}
                  </span>
                  <span className="text-sm opacity-75">
                    {item.type.toUpperCase()}
                  </span>
                </div>
                <h4 className="font-bold mb-2 text-lg leading-tight">
                  {item.title}
                </h4>
                <p className="text-sm opacity-90 mb-4">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">{item.metrics.roi}</span>
                  <span className="text-sm">ROI</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Achieve 850% ROI with Predictive Analytics?
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Join Fortune 500 companies transforming their business with AI 2025 Predictive Analytics
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Start Your Transformation
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
                >
                  Download Resources
                </Link>
              </div>
            </div>
          </div>

          {/* Dismiss Button */}
          <div className="absolute top-4 right-4">
            <button
              onClick={handleDismiss}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Dismiss banner"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictiveAnalytics2025BreakthroughBanner;
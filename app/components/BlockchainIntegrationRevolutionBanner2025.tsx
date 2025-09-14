'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const BlockchainIntegrationRevolutionBanner2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'blockchain-integration-revolution',
      title: 'AI 2025: The Blockchain Integration Revolution',
      subtitle: 'Ultimate Guide to 920% ROI',
      description: 'Transforming Enterprise Operations Through AI-Powered Blockchain Solutions',
      metrics: {
        roi: '920%',
        transparency: '100%',
        security: '99.9%',
        efficiency: '340%'
      },
      url: '/blog/ai-2025-blockchain-integration-revolution-ultimate-guide',
      type: 'blog',
      readingTime: '22 min read',
      featured: true
    },
    {
      id: 'blockchain-integration-fortune-500',
      title: 'Fortune 500 Blockchain Integration Success',
      subtitle: '$3.2B Company Achieves 920% ROI',
      description: 'How a Global Logistics Giant Transformed Operations Through AI-Powered Blockchain',
      metrics: {
        roi: '920%',
        savings: '$280M',
        transparency: '100%',
        satisfaction: '97%'
      },
      url: '/case-studies/ai-2025-blockchain-integration-fortune-500-success-920-roi',
      type: 'case-study',
      readingTime: '16 min read',
      featured: true
    },
    {
      id: 'blockchain-integration-implementation',
      title: 'Blockchain Integration Implementation Guide',
      subtitle: 'From Strategy to 920% ROI',
      description: 'Comprehensive Implementation Framework for Enterprise AI-Blockchain Integration',
      metrics: {
        roi: '920%',
        payback: '2.8 months',
        success: '89%',
        implementations: '500+'
      },
      url: '/resources/ai-2025-blockchain-integration-implementation-master-guide',
      type: 'resource',
      readingTime: '30 min read',
      featured: true
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
    localStorage.setItem('blockchain-integration-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('blockchain-integration-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-600/20 to-teal-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-teal-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-500/10 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-400">NEW CONTENT</span>
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
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                {currentContent.title}
              </h2>
              <p className="text-xl text-teal-200 font-semibold">
                {currentContent.subtitle}
              </p>
              <p className="text-gray-200 text-lg leading-relaxed">
                {currentContent.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                <div className="text-sm text-gray-300">ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-teal-400">
                  {currentContent.metrics.transparency || currentContent.metrics.savings}
                </div>
                <div className="text-sm text-gray-300">
                  {currentContent.metrics.transparency ? 'Transparency' : 'Savings'}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105"
              >
                Read {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-900 transition-all duration-200"
              >
                Get Consultation
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-4">Success Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">ROI Achievement</span>
                  <span className="text-green-400 font-bold">{currentContent.metrics.roi}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Transparency</span>
                  <span className="text-teal-400 font-bold">
                    {currentContent.metrics.transparency || currentContent.metrics.efficiency}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Security</span>
                  <span className="text-emerald-400 font-bold">
                    {currentContent.metrics.security || currentContent.metrics.success}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Reading Time</span>
                  <span className="text-yellow-400 font-bold">{currentContent.readingTime}</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-4">Content Preview</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">AI-Blockchain Integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">920% ROI Implementation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Fortune 500 Success Stories</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Implementation Master Guide</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockchainIntegrationRevolutionBanner2025;
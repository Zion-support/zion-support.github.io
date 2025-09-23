'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const QuantumComputing2026UltimateBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'quantum-ai-business-revolution',
      title: 'AI 2026: The Quantum AI Business Revolution',
      subtitle: '$100B Market Transformation',
      description: 'The quantum AI business revolution is transforming enterprise operations with 400-600% ROI through quantum-enhanced machine learning and optimization algorithms.',
      metrics: {
        roi: '400-600%',
        market: '$100B',
        speed: '1,200%',
        accuracy: '99.97%'
      },
      url: '/blog/ai-2026-quantum-ai-business-revolution',
      type: 'blog',
      readingTime: '25 min read',
      isNew: true
    },
    {
      id: 'quantum-ai-fortune-500-transformation',
      title: 'Fortune 500 Quantum AI Transformation',
      subtitle: '$2.8B Annual Savings in 6 Months',
      description: 'A Fortune 500 manufacturing company achieved 567% ROI and $2.8B in annual savings through quantum AI implementation in just 6 months.',
      metrics: {
        savings: '$2.8B',
        roi: '567%',
        efficiency: '156%',
        uptime: '99.2%'
      },
      url: '/case-studies/quantum-ai-fortune-500-transformation-2026',
      type: 'case-study',
      readingTime: '18 min read',
      isNew: true
    },
    {
      id: 'quantum-ai-implementation-guide',
      title: 'Quantum AI Implementation Guide 2026',
      subtitle: 'From Strategy to 567% ROI',
      description: 'Complete roadmap for implementing quantum AI systems in enterprise environments, with proven strategies for achieving 567% ROI within 6 months.',
      metrics: {
        roi: '567%',
        timeframe: '6 months',
        phases: '3 phases',
        payback: '3.8 months'
      },
      url: '/resources/quantum-ai-implementation-guide-2026',
      type: 'resource',
      readingTime: '28 min read',
      isNew: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('quantum-computing-2026-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('quantum-computing-2026-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Quantum-themed Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Quantum particles animation */}
          <div className="absolute top-8 left-8 w-4 h-4 bg-cyan-400/40 rounded-full animate-ping"></div>
          <div className="absolute top-16 right-12 w-3 h-3 bg-blue-400/40 rounded-full animate-pulse"></div>
          <div className="absolute top-24 left-1/3 w-2 h-2 bg-purple-400/40 rounded-full animate-bounce"></div>
          <div className="absolute bottom-16 right-8 w-5 h-5 bg-cyan-400/40 rounded-full animate-ping"></div>
          <div className="absolute bottom-24 left-1/4 w-3 h-3 bg-blue-400/40 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-1/3 w-4 h-4 bg-purple-400/40 rounded-full animate-bounce"></div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Quantum Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-4 animate-pulse">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></span>
                QUANTUM AI 2026
              </div>

              {/* Content */}
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
                  {currentContent.title}
                </h2>
                <p className="text-xl md:text-2xl text-cyan-200 mb-4">
                  {currentContent.subtitle}
                </p>
                <p className="text-lg text-gray-200 mb-6 max-w-4xl">
                  {currentContent.description}
                </p>
              </div>

              {/* Quantum Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-lg p-4 text-center border border-cyan-400/30">
                  <div className="text-2xl font-bold text-cyan-400">{currentContent.metrics.roi}</div>
                  <div className="text-sm text-cyan-200">ROI</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg p-4 text-center border border-blue-400/30">
                  <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings || currentContent.metrics.market}</div>
                  <div className="text-sm text-blue-200">Savings/Market</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-sm rounded-lg p-4 text-center border border-purple-400/30">
                  <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.accuracy || currentContent.metrics.efficiency}</div>
                  <div className="text-sm text-purple-200">Accuracy/Efficiency</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg p-4 text-center border border-cyan-400/30">
                  <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.speed || currentContent.metrics.uptime || currentContent.metrics.timeframe}</div>
                  <div className="text-sm text-yellow-200">Speed/Time</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Explore {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'} ({currentContent.readingTime})
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-cyan-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Quantum AI Consultation
                </Link>
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors"
              aria-label="Dismiss banner"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Quantum Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-cyan-400' : 'bg-cyan-400/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputing2026UltimateBanner;
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const QuantumNeuralFusionRevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'quantum-neural-fusion-revolution',
      title: 'AI 2025: The Quantum-Neural Fusion Revolution',
      subtitle: 'Ultimate Breakthrough Guide to 25,000% ROI',
      description: 'The convergence of quantum computing and neural networks is creating unprecedented business opportunities that are reshaping entire industries.',
      metrics: {
        roi: '25,000%',
        savings: '$500B+',
        accuracy: '99.99%',
        speed: '10,000x'
      },
      url: '/blog/ai-2025-quantum-neural-fusion-revolution-ultimate-breakthrough',
      type: 'blog',
      readingTime: '35 min read'
    },
    {
      id: 'fortune-500-quantum-neural-fusion-success',
      title: 'Fortune 500 Quantum-Neural Fusion Success',
      subtitle: '$500B Annual Savings - 25,000% ROI Success Story',
      description: 'How a leading technology conglomerate achieved unprecedented success through Quantum-Neural Fusion implementation.',
      metrics: {
        roi: '25,000%',
        savings: '$500B',
        accuracy: '99.99%',
        efficiency: '340%'
      },
      url: '/case-studies/fortune-500-quantum-neural-fusion-25000-roi-success-story',
      type: 'case-study',
      readingTime: '25 min read'
    },
    {
      id: 'quantum-neural-fusion-implementation-guide',
      title: 'Quantum-Neural Fusion Implementation Ultimate Guide',
      subtitle: 'Complete Roadmap to 25,000% ROI',
      description: 'The definitive guide to implementing Quantum-Neural Fusion technology for maximum business impact.',
      metrics: {
        roi: '25,000%',
        timeline: '18 months',
        success: '94%',
        guide: '60 min read'
      },
      url: '/resources/quantum-neural-fusion-implementation-ultimate-guide-2025',
      type: 'resource',
      readingTime: '60 min read'
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
    localStorage.setItem('quantum-neural-fusion-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('quantum-neural-fusion-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">NEW BREAKTHROUGH</span>
            </div>
            <div className="text-sm text-blue-200">
              Quantum-Neural Fusion Revolution 2025
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                {currentContent.title}
              </h2>
              <p className="text-xl text-blue-200 font-semibold">
                {currentContent.subtitle}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {currentContent.description}
              </p>
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                <div className="text-sm text-gray-300">ROI</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                <div className="text-sm text-gray-300">Annual Savings</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.accuracy}</div>
                <div className="text-sm text-gray-300">Accuracy</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-indigo-400">
                  {currentContent.metrics.speed || currentContent.metrics.efficiency || currentContent.metrics.timeline}
                </div>
                <div className="text-sm text-gray-300">
                  {currentContent.metrics.speed ? 'Speed' : currentContent.metrics.efficiency ? 'Efficiency' : 'Timeline'}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Read {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Get Consultation
              </Link>
            </div>
          </div>

          <div className="relative">
            {/* Content Preview Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-200">
                    {currentContent.type === 'blog' ? 'Blog Post' : currentContent.type === 'case-study' ? 'Case Study' : 'Implementation Guide'}
                  </span>
                  <span className="text-sm text-gray-400">{currentContent.readingTime}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-white">
                  {currentContent.title}
                </h3>
                
                <p className="text-sm text-gray-300 line-clamp-3">
                  {currentContent.description}
                </p>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex space-x-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">{currentContent.metrics.roi}</div>
                      <div className="text-xs text-gray-400">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-400">{currentContent.metrics.savings}</div>
                      <div className="text-xs text-gray-400">Savings</div>
                    </div>
                  </div>
                  <Link
                    href={currentContent.url}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/30 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500/30 rounded-full animate-bounce delay-500"></div>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuantumNeuralFusionRevolutionBanner;
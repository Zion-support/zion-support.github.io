'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const QuantumAIRevolutionBanner2025 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const quantumContent = [
    {
      id: 'quantum-computing-revolution',
      title: 'AI 2025: The Quantum Computing Revolution',
      description: 'Discover how quantum computing is revolutionizing enterprise AI with 1000% performance improvements and $50B+ market opportunities.',
      url: '/blog/ai-2025-quantum-computing-revolution-enterprise-breakthrough',
      type: 'blog',
      metrics: {
        performance: '1000%',
        accuracy: '99.9%',
        market: '$50B+',
        roi: '1,200%'
      },
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'fortune-500-quantum-success',
      title: 'Fortune 500 Quantum AI Transformation: 1,200% ROI',
      description: 'How a $2.1B company achieved unprecedented efficiency with quantum AI, saving $180M annually.',
      url: '/case-studies/fortune-500-quantum-ai-transformation-2025-ultimate-success',
      type: 'case-study',
      metrics: {
        roi: '1,200%',
        savings: '$180M',
        efficiency: '78%',
        accuracy: '99.9%'
      },
      readingTime: '15 min read',
      featured: true
    },
    {
      id: 'quantum-implementation-guide',
      title: 'Quantum AI Implementation Master Guide 2025',
      description: 'Complete guide to implementing quantum AI in your enterprise, with proven strategies and ROI optimization techniques.',
      url: '/resources/quantum-ai-implementation-master-guide-2025',
      type: 'resource',
      metrics: {
        roi: '1,200%',
        performance: '1000%',
        accuracy: '99.9%',
        timeline: '18 months'
      },
      readingTime: '25 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % quantumContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('quantum-ai-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('quantum-ai-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = quantumContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-indigo-500/30 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full">
              <span className="text-2xl">⚛️</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Quantum AI Revolution 2025</h2>
              <p className="text-purple-200 text-sm">Breakthrough Performance & 1,200% ROI</p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors p-2"
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
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/30 text-purple-200">
                  {currentContent.type === 'blog' ? '📝 Blog Post' : 
                   currentContent.type === 'case-study' ? '📊 Case Study' : '📚 Resource'}
                </span>
                <span className="text-sm text-purple-200">{currentContent.readingTime}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white">
                {currentContent.title}
              </h3>
              
              <p className="text-purple-100 mb-4 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-xs text-purple-200 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href={currentContent.url}
                className="inline-flex items-center px-6 py-3 bg-white text-purple-900 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Read Full Article
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2">
              {quantumContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Success Metrics */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-4">Quantum AI Success Metrics</h3>
              <p className="text-purple-200 text-lg">
                Join industry leaders achieving breakthrough performance with quantum AI
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-4xl font-bold text-white mb-2">1,200%</div>
                <div className="text-purple-200 text-sm">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-4xl font-bold text-white mb-2">1000%</div>
                <div className="text-purple-200 text-sm">Performance Boost</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-purple-200 text-sm">Accuracy Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="text-4xl font-bold text-white mb-2">$50B+</div>
                <div className="text-purple-200 text-sm">Market Opportunity</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-center">
              <h4 className="text-xl font-bold mb-2">Ready for Quantum AI?</h4>
              <p className="text-purple-100 mb-4">
                Get expert guidance on your quantum AI transformation
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-purple-900 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Start Your Journey
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8">
          <div className="flex items-center justify-between text-sm text-purple-200 mb-2">
            <span>Quantum AI Content</span>
            <span>{currentSlide + 1} of {quantumContent.length}</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentSlide + 1) / quantumContent.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumAIRevolutionBanner2025;
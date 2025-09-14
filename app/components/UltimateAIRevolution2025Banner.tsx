'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateAIRevolution2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'ultimate-ai-revolution',
      title: 'AI 2025-2026: The Ultimate AI Revolution Breakthrough',
      subtitle: 'Achieve 10,000% ROI with Revolutionary AI Technologies',
      description: 'Transform your business with next-generation AI that Fortune 100 companies use to achieve unprecedented results.',
      metrics: {
        roi: '10,000%',
        savings: '$28.5B',
        accuracy: '99.99%',
        efficiency: '2,400%'
      },
      cta: 'Discover the Ultimate AI Revolution',
      link: '/blog/ai-2025-2026-ultimate-ai-revolution-breakthrough-ultimate-guide',
      badge: 'NEW ULTIMATE BREAKTHROUGH'
    },
    {
      id: 'fortune-100-success',
      title: 'Fortune 100 AI Revolution: $28.5B Annual Savings',
      subtitle: '10,000% ROI Ultimate Success Story',
      description: 'How Global Manufacturing Corporation achieved the highest ROI in AI history through strategic AI implementation.',
      metrics: {
        roi: '10,000%',
        savings: '$28.5B',
        timeline: '18 months',
        efficiency: '1,200%'
      },
      cta: 'Read the Success Story',
      link: '/case-studies/fortune-100-ai-revolution-10000-roi-ultimate-success-story',
      badge: 'ULTIMATE SUCCESS STORY'
    },
    {
      id: 'implementation-framework',
      title: 'AI Implementation Ultimate Framework',
      subtitle: 'Complete Roadmap to 10,000% ROI',
      description: 'The proven step-by-step guide used by Fortune 100 companies to achieve unprecedented AI success.',
      metrics: {
        roi: '2,500% - 10,000%',
        success: '94%',
        timeline: '18 months',
        companies: '1,000+'
      },
      cta: 'Get the Framework',
      link: '/resources/ai-2025-2026-implementation-ultimate-framework-10000-roi',
      badge: 'ULTIMATE FRAMEWORK'
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
    localStorage.setItem('ultimate-ai-revolution-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-ai-revolution-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-ping"></div>
          <div className="absolute bottom-10 right-1/3 w-8 h-8 bg-indigo-400/20 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Dismiss Button */}
          <div className="flex justify-end mb-4">
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
            {/* Content */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                <span className="animate-pulse">🚀</span>
                <span className="ml-2">{currentContent.badge}</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                {currentContent.title}
              </h2>

              {/* Subtitle */}
              <h3 className="text-xl md:text-2xl text-blue-200 font-semibold">
                {currentContent.subtitle}
              </h3>

              {/* Description */}
              <p className="text-lg text-gray-200 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-400">{value}</div>
                    <div className="text-sm text-gray-300 capitalize">{key.replace('_', ' ')}</div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href={currentContent.link}
                  className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {currentContent.cta}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                {/* AI Visualization */}
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🤖</div>
                    <h4 className="text-2xl font-bold text-yellow-400">Revolutionary AI Technologies</h4>
                  </div>

                  {/* Technology Features */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-lg">Quantum-Enhanced Neural Networks</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-lg">Autonomous AI Business Ecosystems</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-lg">Synthetic Intelligence Platforms</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                      <span className="text-lg">10,000% ROI Achievement</span>
                    </div>
                  </div>

                  {/* Success Stats */}
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">10,000%</div>
                      <div className="text-sm text-gray-300">Highest ROI in AI History</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
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

export default UltimateAIRevolution2025Banner;
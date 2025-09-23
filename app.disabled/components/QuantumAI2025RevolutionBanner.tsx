'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const QuantumAI2025RevolutionBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const quantumContent = [
    {
      id: 'quantum-ai-revolution',
      title: 'AI 2025: The Quantum Computing Business Revolution',
      description: 'How Quantum AI is Transforming Enterprise Operations and Delivering 1,200% Performance Gains',
      url: '/blog/ai-2025-quantum-computing-business-revolution',
      metrics: {
        performance: '1,200%',
        accuracy: '99.97%',
        market: '$100B',
        roi: '400-600%'
      },
      type: 'blog',
      isNew: true
    },
    {
      id: 'enterprise-ai-breakthrough',
      title: 'AI 2025: The Enterprise AI Revolution - Ultimate Breakthrough Guide',
      description: 'Transform Your Business with Cutting-Edge AI Solutions That Deliver 500% ROI',
      url: '/blog/ai-2025-enterprise-ai-revolution-ultimate-breakthrough',
      metrics: {
        roi: '500%',
        savings: '$2.3B',
        efficiency: '340%',
        accuracy: '99.7%'
      },
      type: 'blog',
      isNew: true
    },
    {
      id: 'fortune-500-success',
      title: 'Fortune 500 AI Transformation 2025: $2.8B Annual Savings in 18 Months',
      description: 'How a Global Manufacturing Giant Achieved 567% ROI with Comprehensive AI Implementation',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story',
      metrics: {
        roi: '567%',
        savings: '$2.8B',
        timeline: '18 months',
        uptime: '99.2%'
      },
      type: 'case-study',
      isNew: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % quantumContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const dismissed = localStorage.getItem('quantum-ai-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('quantum-ai-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentContent = quantumContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-indigo-400/20 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW QUANTUM AI CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Content 2025
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Discover the latest breakthroughs in AI and Quantum Computing that are transforming enterprise operations
          </p>
        </div>

        {/* Content Showcase */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  NEW
                </span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {currentContent.type.toUpperCase()}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                {currentContent.title}
              </h3>
              
              <p className="text-lg opacity-90 mb-6">
                {currentContent.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-400">{value}</div>
                    <div className="text-sm opacity-80 capitalize">{key.replace('_', ' ')}</div>
                  </div>
                ))}
              </div>

              <Link
                href={currentContent.url}
                className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Read Full Article →
              </Link>
            </div>

            <div className="relative">
              {/* Progress Indicators */}
              <div className="flex justify-center space-x-2 mb-6">
                {quantumContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              {/* Content Preview Cards */}
              <div className="space-y-4">
                {quantumContent.map((content, index) => (
                  <div
                    key={content.id}
                    className={`p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                      index === currentSlide
                        ? 'bg-white/20 border-2 border-yellow-400'
                        : 'bg-white/10 hover:bg-white/15'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm mb-1 line-clamp-2">
                          {content.title}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-blue-500 px-2 py-1 rounded">
                            {content.type}
                          </span>
                          {content.isNew && (
                            <span className="text-xs bg-green-500 px-2 py-1 rounded">
                              NEW
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-yellow-400">
                          {Object.values(content.metrics)[0]}
                        </div>
                        <div className="text-xs opacity-80">ROI</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog"
              className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore All Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
            >
              Get AI Consultation
            </Link>
          </div>
        </div>

        {/* Dismiss Button */}
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

export default QuantumAI2025RevolutionBanner;
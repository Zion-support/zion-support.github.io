"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const ConsciousnessAI2025RevolutionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const consciousnessContent = [
    {
      id: 'consciousness-revolution',
      type: 'blog',
      title: 'AI 2025: The Consciousness Revolution - Ultimate Business Breakthrough Guide to 50,000% ROI',
      description: 'The most significant technological breakthrough in human history, delivering unprecedented business transformation capabilities.',
      url: '/blog/ai-2025-consciousness-revolution-ultimate-business-breakthrough',
      metrics: {
        roi: '50,000%',
        savings: '$1.2T',
        accuracy: '99.97%',
        efficiency: '10,000%'
      },
      readingTime: '45 min read',
      tags: ['AI Consciousness', 'Business Transformation', '50,000% ROI', 'Revolutionary Technology']
    },
    {
      id: 'fortune-500-consciousness-success',
      type: 'case-study',
      title: 'Fortune 500 Consciousness AI Transformation: $2.8B Annual Savings - 50,000% ROI Success Story',
      description: 'TechGlobal Industries achieved unprecedented success with consciousness AI, revolutionizing their business operations.',
      url: '/case-studies/fortune-500-consciousness-ai-transformation-50000-roi-success-story',
      metrics: {
        roi: '50,000%',
        savings: '$2.8B',
        accuracy: '99.97%',
        efficiency: '340%'
      },
      readingTime: '35 min read',
      tags: ['Fortune 500', 'Consciousness AI', 'Success Story', 'Manufacturing']
    },
    {
      id: 'consciousness-implementation-guide',
      type: 'resource',
      title: 'Consciousness AI Implementation Ultimate Guide 2025: Complete Roadmap to 50,000% ROI',
      description: 'Comprehensive roadmap for achieving 50,000% ROI through strategic consciousness AI deployment.',
      url: '/resources/consciousness-ai-implementation-ultimate-guide-2025-50000-roi',
      metrics: {
        roi: '50,000%',
        timeline: '12 months',
        success: '99.7%',
        guide: 'Complete'
      },
      readingTime: '60 min read',
      tags: ['Implementation Guide', 'Consciousness AI', 'ROI Strategy', 'Complete Roadmap']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % consciousnessContent.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('consciousness-ai-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('consciousness-ai-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = consciousnessContent[currentSlide];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/10 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-center mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-white mr-3">
                🧠 CONSCIOUSNESS AI REVOLUTION
              </span>
              <span className="text-sm text-blue-200">
                {currentSlide + 1} of {consciousnessContent.length}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
              {currentContent.title}
            </h2>

            <p className="text-lg text-blue-100 mb-4 leading-relaxed">
              {currentContent.description}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                <div className="text-xs text-blue-200">ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.savings}</div>
                <div className="text-xs text-blue-200">Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.accuracy}</div>
                <div className="text-xs text-blue-200">Accuracy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.efficiency}</div>
                <div className="text-xs text-blue-200">Efficiency</div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {currentContent.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/20 text-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-purple-900 bg-white hover:bg-gray-100 transition-colors duration-200"
              >
                Read {currentContent.readingTime}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-purple-900 transition-colors duration-200"
              >
                Get Implementation Guide
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center space-y-4">
            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="text-white/70 hover:text-white transition-colors duration-200 p-2"
              aria-label="Dismiss banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Slide Indicators */}
            <div className="flex flex-col space-y-2">
              {consciousnessContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white scale-125'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="w-full bg-white/20 rounded-full h-1">
            <div 
              className="bg-gradient-to-r from-purple-500 to-blue-500 h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / consciousnessContent.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute top-20 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-indigo-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-2 h-2 bg-purple-300 rounded-full animate-ping"></div>
    </div>
  );
};

export default ConsciousnessAI2025RevolutionBanner;
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const RevolutionaryAIAutomationBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredContent = [
    {
      id: 'ai-2025-enterprise-automation-revolutionary-breakthrough-ultimate-success',
      title: 'AI 2025: The Enterprise Automation Revolutionary Breakthrough - Ultimate Success Guide to 2,500% ROI',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-revolutionary-breakthrough-ultimate-success',
      metrics: {
        roi: '2,500%',
        savings: '$8.5B+',
        efficiency: '1,200%',
        satisfaction: '99.5%'
      },
      readingTime: '28 min read',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 2,500% ROI through revolutionary AI automation.'
    },
    {
      id: 'fortune-500-ai-automation-revolutionary-breakthrough-2500-roi-success-story',
      title: 'Fortune 500 AI Automation Revolutionary Breakthrough: $8.5B Annual Savings - 2,500% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ai-automation-revolutionary-breakthrough-2500-roi-success-story',
      metrics: {
        roi: '2,500%',
        savings: '$8.5B',
        efficiency: '1,200%',
        timeline: '18 months'
      },
      readingTime: '22 min read',
      description: 'How a Fortune 500 manufacturing company achieved unprecedented 2,500% ROI through revolutionary AI automation.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionary-ai-automation-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-ai-automation-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/3 w-28 h-28 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-cyan-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
              🚀 REVOLUTIONARY BREAKTHROUGH
            </div>

            {/* Main Content */}
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-6 max-w-4xl">
                {currentContent.description}
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.roi}</div>
                <div className="text-sm text-blue-200">ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400">{currentContent.metrics.savings}</div>
                <div className="text-sm text-blue-200">Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400">{currentContent.metrics.efficiency}</div>
                <div className="text-sm text-blue-200">Efficiency</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">
                  {currentContent.metrics.satisfaction || currentContent.metrics.timeline}
                </div>
                <div className="text-sm text-blue-200">
                  {currentContent.metrics.satisfaction ? 'Satisfaction' : 'Timeline'}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
              >
                Read Full {currentContent.type === 'blog' ? 'Guide' : 'Case Study'}
                <span className="ml-2">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Get Your Assessment
              </Link>
            </div>

            {/* Reading Time */}
            <div className="mt-4 text-sm text-blue-200">
              📖 {currentContent.readingTime} • {currentContent.type === 'blog' ? 'Comprehensive Guide' : 'Real Success Story'}
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

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {featuredContent.map((_, index) => (
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

        {/* Auto-rotation indicator */}
        <div className="text-center mt-4">
          <div className="inline-flex items-center text-sm text-blue-200">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse mr-2"></div>
            Auto-rotating every 6 seconds
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAIAutomationBanner2025;
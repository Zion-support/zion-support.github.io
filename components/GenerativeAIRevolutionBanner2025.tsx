'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const GenerativeAIRevolutionBanner2025 = () => {
  const [currentSlidesetCurrentSlide] = useState(0);
  const [isVisiblesetIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'generative-ai-enterprise-revolution',
      title: 'AI 2025: The Generative AI Enterprise Revolution - Ultimate Breakthrough Guide to 2,500% ROI',
      type: 'blog',
      url: '/blog/ai-2025-generative-ai-enterprise-revolution-ultimate-breakthrough',
      metrics: {
        roi: '2,500%',
        savings: '$15.8B+',
        efficiency: '156%',
        satisfaction: '98%'
      },
      description: 'Transform your business with cutting-edge generative AI technologies delivering unprecedented returns on investment.',
      readingTime: '25 min read'
    },
    {
      id: 'fortune-500-generative-ai-success',
      title: 'Fortune 500 Generative AI Transformation: $15.8B Annual Savings - 2,500% ROI Ultimate Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-generative-ai-transformation-2500-roi-ultimate-success-story',
      metrics: {
        roi: '2,500%',
        savings: '$15.8B',
        timeline: '18 months',
        satisfaction: '98.7%'
      },
      description: 'How a global technology leader achieved unprecedented success with generative AI implementation.',
      readingTime: '22 min read'
    },
    {
      id: 'generative-ai-implementation-guide',
      title: 'Generative AI Implementation Master Guide 2025: Ultimate Roadmap to 2,500% ROI',
      type: 'resource',
      url: '/resources/generative-ai-implementation-master-guide-2025-ultimate-roadmap',
      metrics: {
        roi: '2,500%',
        success: '94%',
        timeline: '18 months',
        guide: 'Complete'
      },
      description: 'The completestep-by-step guide to implementing generative AI in your enterprise.',
      readingTime: '45 min read'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }5000);

    return () => clearInterval(timer);
  }[]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('generative-ai-banner-'dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('generative-ai-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }[]);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-400/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mr-4">
                🚀 NEW: Generative AI Revolution 2025
              </div>
              <div className="text-sm opacity-90">
                Ultimate Breakthrough Content Collection
              </div>
            </div>

            {/* Main Content */}
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h2>
              <p className="text-lg opacity-90 mb-4 max-w-4xl">
                {currentContent.description}
              </p>
              
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.roi}</div>
                  <div className="text-sm opacity-80">ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold text-green-400">{currentContent.metrics.savings}</div>
                  <div className="text-sm opacity-80">Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.efficiency || currentContent.metrics.timeline}</div>
                  <div className="text-sm opacity-80">{currentContent.metrics.efficiency ? 'Efficiency' : 'Timeline'}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.satisfaction || currentContent.metrics.success}</div>
                  <div className="text-sm opacity-80">{currentContent.metrics.satisfaction ? 'Satisfaction' : 'Success Rate'}</div>
                </div>
              </div>

              {/* Content Type Badge */}
              <div className="flex items-center mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  currentContent.type === 'blog' 
                    ? 'bg-blue-500/20 text-blue-300' 
                    : currentContent.type === 'case-study'
                    ? 'bg-green-500/20 text-green-300'
                    : 'bg-purple-500/20 text-purple-300'
                }`}>
                  {currentContent.type === 'blog' ? '📝 Blog Post' : 
                   currentContent.type === 'case-study' ? '📊 Case Study' : '📚 Resource Guide'}
                </span>
                <span className="ml-3 text-sm opacity-80">{currentContent.readingTime}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
              >
                Read {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'} →
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Get AI Consultation
              </Link>
              <Link
                href="/resources"
                className="text-white/80 hover:text-white transition-colors duration-300 flex items-center"
              >
                View All Resources →
              </Link>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="ml-6 text-white/60 hover:text-white transition-colors duration-300 p-2"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {featuredContent.map((_index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-yellow-400 w-8' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-1000"></div>
      <div className="absolute bottom-1/4 left-10 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-2000"></div>
    </div>
  );
};

export default GenerativeAIRevolutionBanner2025;
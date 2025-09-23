'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateAI2025TransformationBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'ultimate-enterprise-transformation',
      title: 'AI 2025: The Ultimate Enterprise Transformation Revolution',
      description: 'Discover how Fortune 500 companies are achieving unprecedented 3,000% ROI through revolutionary AI transformation strategies.',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-enterprise-transformation-revolution-ultimate-breakthrough',
      metrics: {
        roi: '3,000%',
        savings: '$15.8B+',
        efficiency: '2,400%',
        satisfaction: '99.7%'
      },
      badge: 'Ultimate Breakthrough',
      readingTime: '35 min read'
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 Ultimate AI Transformation: $15.8B Annual Savings',
      description: 'How a Fortune 500 manufacturing giant achieved unprecedented 3,000% ROI while saving $15.8B annually.',
      type: 'case-study',
      url: '/case-studies/fortune-500-ultimate-ai-transformation-3000-roi-ultimate-success-story',
      metrics: {
        roi: '3,000%',
        savings: '$15.8B',
        timeline: '18 months',
        success: '99.7%'
      },
      badge: 'Ultimate Success',
      readingTime: '25 min read'
    },
    {
      id: 'implementation-master-guide',
      title: 'AI 2025 Ultimate Transformation Implementation Master Guide',
      description: 'The definitive implementation guide for achieving 3,000% ROI through AI transformation. Complete roadmap with proven methodologies.',
      type: 'resource',
      url: '/resources/ai-2025-ultimate-transformation-implementation-master-guide-3000-roi',
      metrics: {
        roi: '3,000%',
        success: '94%',
        timeline: '18 months',
        guide: 'Complete'
      },
      badge: 'Master Guide',
      readingTime: '45 min read'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-ai-2025-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-ai-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-green-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Badge */}
            <div className="inline-flex items-center bg-yellow-400 text-purple-900 rounded-full px-4 py-2 mb-4 font-bold text-sm">
              <span className="mr-2">🚀</span>
              ULTIMATE AI 2025 TRANSFORMATION
            </div>

            {/* Content */}
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-6 max-w-4xl leading-relaxed">
                {currentContent.description}
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">{currentContent.metrics.roi}</div>
                <div className="text-sm text-blue-100">ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">{currentContent.metrics.savings}</div>
                <div className="text-sm text-blue-100">Annual Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">{currentContent.metrics.efficiency || currentContent.metrics.timeline}</div>
                <div className="text-sm text-blue-100">{currentContent.metrics.efficiency ? 'Efficiency' : 'Timeline'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-pink-400 mb-1">{currentContent.metrics.satisfaction || currentContent.metrics.success}</div>
                <div className="text-sm text-blue-100">{currentContent.metrics.satisfaction ? 'Satisfaction' : 'Success Rate'}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.url}
                className="bg-yellow-400 text-purple-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors text-center"
              >
                Read {currentContent.badge} →
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-colors text-center"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/resources"
                className="bg-white/20 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/30 transition-colors text-center"
              >
                View All Resources
              </Link>
            </div>

            {/* Content Type Badge */}
            <div className="mt-4 flex items-center gap-2">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentContent.type === 'blog' ? '📝 Blog Post' : 
                 currentContent.type === 'case-study' ? '📊 Case Study' : '📚 Resource Guide'}
              </span>
              <span className="text-blue-200 text-sm">{currentContent.readingTime}</span>
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
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Additional Content Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredContent.map((content, index) => (
            <Link
              key={content.id}
              href={content.url}
              className={`p-4 rounded-lg border transition-all ${
                index === currentSlide
                  ? 'bg-yellow-400/20 border-yellow-400 text-yellow-100'
                  : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{content.badge}</span>
                <span className="text-xs text-blue-200">{content.readingTime}</span>
              </div>
              <h3 className="font-bold text-sm mb-1 line-clamp-2">{content.title}</h3>
              <p className="text-xs text-blue-100 line-clamp-2">{content.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateAI2025TransformationBanner;
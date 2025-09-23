'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContent2025ShowcaseBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const featuredContent = [
    {
      id: 'enterprise-automation-mastery',
      title: 'AI 2025: Enterprise Automation Mastery - Ultimate Success Guide',
      description: 'Master enterprise automation with AI in 2025. Achieve 600% ROI, $500M+ savings, and 99.9% efficiency.',
      url: '/blog/ai-2025-enterprise-automation-mastery-ultimate-success',
      type: 'Blog Post',
      metrics: {
        roi: '600%',
        savings: '$500M+',
        efficiency: '99.9%',
        time: '18 min read'
      },
      badge: 'NEW',
      badgeColor: 'bg-red-500'
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation 2025: $2.1B Annual Savings',
      description: 'How a Fortune 500 company achieved $2.1B annual savings and 800% ROI through AI transformation.',
      url: '/case-studies/fortune-500-ai-transformation-2025-ultimate-success',
      type: 'Case Study',
      metrics: {
        roi: '800%',
        savings: '$2.1B',
        automation: '98.5%',
        time: '12 min read'
      },
      badge: 'FEATURED',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 'ai-transformation-guide',
      title: 'AI Transformation Ultimate Guide 2025: From Strategy to 800% ROI',
      description: 'Complete roadmap for AI transformation success. Achieve 800% ROI, $500M+ savings, and 99% automation.',
      url: '/resources/ai-transformation-ultimate-guide-2025',
      type: 'Resource',
      metrics: {
        roi: '800%',
        savings: '$500M+',
        automation: '99%',
        time: '25 min read'
      },
      badge: 'ULTIMATE',
      badgeColor: 'bg-purple-500'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimateContent2025BannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimateContent2025BannerDismissed');
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🚀</span>
                <h2 className="text-2xl font-bold">Ultimate Content 2025 Showcase</h2>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${currentContent.badgeColor} text-white`}>
                {currentContent.badge}
              </span>
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
            {/* Content Preview */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-purple-300">{currentContent.type}</span>
                  <span className="text-sm text-gray-300">•</span>
                  <span className="text-sm text-gray-300">{currentContent.metrics.time}</span>
                </div>
                
                <h3 className="text-3xl font-bold leading-tight">
                  {currentContent.title}
                </h3>
                
                <p className="text-lg text-gray-200 leading-relaxed">
                  {currentContent.description}
                </p>
              </div>

              {/* Success Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">{currentContent.metrics.roi}</div>
                  <div className="text-sm text-gray-300">Average ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.savings}</div>
                  <div className="text-sm text-gray-300">Annual Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.efficiency || currentContent.metrics.automation}</div>
                  <div className="text-sm text-gray-300">Efficiency/Automation</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400">98%</div>
                  <div className="text-sm text-gray-300">Success Rate</div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Link
                  href={currentContent.url}
                  className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Read Now
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
                >
                  View All Resources
                </Link>
              </div>
            </div>

            {/* Content Showcase */}
            <div className="space-y-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold mb-4">Featured Content</h4>
                <div className="space-y-3">
                  {featuredContent.map((content, index) => (
                    <div
                      key={content.id}
                      className={`p-3 rounded-lg cursor-pointer transition-all ${
                        index === currentSlide
                          ? 'bg-white/20 border-2 border-white/30'
                          : 'bg-white/5 border border-white/10 hover:bg-white/10'
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-xs font-medium text-purple-300">{content.type}</span>
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${content.badgeColor} text-white`}>
                              {content.badge}
                            </span>
                          </div>
                          <h5 className="text-sm font-medium text-white line-clamp-2">
                            {content.title}
                          </h5>
                        </div>
                        <div className="ml-3 text-right">
                          <div className="text-lg font-bold text-green-400">{content.metrics.roi}</div>
                          <div className="text-xs text-gray-300">ROI</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center space-x-2">
                {featuredContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white' : 'bg-white/30'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContent2025ShowcaseBanner;
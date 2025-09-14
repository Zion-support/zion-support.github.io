'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025_2026UltimateBreakthroughBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      title: "AI 2025-2026: The Ultimate Breakthrough Revolution",
      subtitle: "2,500% ROI Through Next-Generation Intelligence",
      description: "Discover how Fortune 500 companies are achieving unprecedented 2,500% ROI through revolutionary AI breakthroughs including quantum AI, neural interfaces, and autonomous systems.",
      metrics: {
        roi: "2,500%",
        savings: "$8.2B+",
        efficiency: "1,200%",
        success: "99.7%"
      },
      cta: "Read Full Guide",
      link: "/blog/ai-2025-2026-ultimate-breakthrough-revolution",
      badge: "NEW BREAKTHROUGH"
    },
    {
      title: "Fortune 100 AI Transformation Success",
      subtitle: "$8.2B Company Achieves 2,500% ROI in 18 Months",
      description: "Complete case study revealing how a Fortune 100 technology company achieved unprecedented success through revolutionary AI transformation, saving $8.2B annually.",
      metrics: {
        roi: "2,500%",
        savings: "$8.2B",
        timeline: "18 months",
        satisfaction: "99.7%"
      },
      cta: "View Case Study",
      link: "/case-studies/ai-2025-2026-revolutionary-transformation-2500-roi-success",
      badge: "SUCCESS STORY"
    },
    {
      title: "AI Implementation Ultimate Framework",
      subtitle: "Complete Roadmap to 2,500% ROI",
      description: "The definitive guide to implementing revolutionary AI technologies in 2025-2026. Complete framework covering quantum AI, neural interfaces, and autonomous systems.",
      metrics: {
        roi: "2,500%",
        timeline: "18-24 months",
        success: "99.7%",
        projects: "1,000+"
      },
      cta: "Download Framework",
      link: "/resources/ai-2025-2026-implementation-ultimate-framework",
      badge: "IMPLEMENTATION GUIDE"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [content.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai-2025-2026-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai-2025-2026-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-center mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                {currentContent.badge}
              </span>
              <div className="ml-4 flex space-x-2">
                {content.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {currentContent.title}
            </h2>
            
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-200">
              {currentContent.subtitle}
            </h3>
            
            <p className="text-lg text-gray-200 mb-6 max-w-3xl leading-relaxed">
              {currentContent.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.roi}</div>
                <div className="text-sm text-gray-300">ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-400">{currentContent.metrics.savings}</div>
                <div className="text-sm text-gray-300">Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.efficiency || currentContent.metrics.timeline}</div>
                <div className="text-sm text-gray-300">{currentContent.metrics.efficiency ? 'Efficiency' : 'Timeline'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.success}</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.link}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {currentContent.cta} →
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Get Consultation
              </Link>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-full flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/80">AI</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>
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

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-6000 ease-linear"
          style={{ width: `${((currentSlide + 1) / content.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default AI2025_2026UltimateBreakthroughBanner;
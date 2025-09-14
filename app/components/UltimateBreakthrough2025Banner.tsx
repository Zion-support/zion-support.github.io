'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateBreakthrough2025Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = [
    {
      title: "AI 2025-2026: Ultimate Breakthrough Revolution",
      subtitle: "2,500% ROI Through Next-Generation Intelligence",
      description: "Comprehensive guide to achieving 2,500% ROI through quantum AI, neural interfaces, and autonomous systems integration.",
      metrics: {
        roi: "2,500%",
        savings: "$8.2B",
        efficiency: "1,200%",
        success: "99.7%"
      },
      url: "/blog/ai-2025-2026-ultimate-breakthrough-revolution",
      type: "blog",
      badge: "FEATURED"
    },
    {
      title: "Fortune 100 AI Transformation Success",
      subtitle: "$8.2B Company Achieves 2,500% ROI in 18 Months",
      description: "Real-world case study of a Fortune 100 company achieving unprecedented 2,500% ROI through revolutionary AI transformation.",
      metrics: {
        roi: "2,500%",
        savings: "$8.2B",
        timeline: "18 months",
        satisfaction: "99.7%"
      },
      url: "/case-studies/ai-2025-2026-revolutionary-transformation-2500-roi-success",
      type: "case-study",
      badge: "SUCCESS STORY"
    },
    {
      title: "AI Implementation Ultimate Framework",
      subtitle: "Complete Roadmap to 2,500% ROI",
      description: "Step-by-step implementation framework for achieving 2,500% ROI with quantum AI, neural interfaces, and autonomous systems.",
      metrics: {
        roi: "2,500%",
        timeline: "24 months",
        success: "99.7%",
        projects: "1,000+"
      },
      url: "/resources/ai-2025-2026-implementation-ultimate-framework",
      type: "resource",
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
    localStorage.setItem('ultimateBreakthroughBannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimateBreakthroughBannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute top-6 left-6 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-12 right-12 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-6 left-12 w-4 h-4 bg-pink-400 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-12 right-6 w-2 h-2 bg-indigo-400 rounded-full animate-ping delay-3000"></div>
      </div>

      <div className="relative z-10 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30">
                  🚀 ULTIMATE BREAKTHROUGH
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30">
                  {currentContent.badge}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30">
                  2,500% ROI
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
                {currentContent.title}
              </h2>
              
              <p className="text-xl sm:text-2xl text-purple-200 mb-4 font-medium">
                {currentContent.subtitle}
              </p>
              
              <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-4xl leading-relaxed">
                {currentContent.description}
              </p>

              {/* Success Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-200">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">{currentContent.metrics.roi}</div>
                  <div className="text-sm text-gray-300">ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-200">
                  <div className="text-3xl font-bold text-purple-400 mb-1">
                    {currentContent.metrics.savings || currentContent.metrics.timeline}
                  </div>
                  <div className="text-sm text-gray-300">
                    {currentContent.metrics.savings ? 'Savings' : 'Timeline'}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-200">
                  <div className="text-3xl font-bold text-green-400 mb-1">
                    {currentContent.metrics.efficiency || currentContent.metrics.success}
                  </div>
                  <div className="text-sm text-gray-300">
                    {currentContent.metrics.efficiency ? 'Efficiency' : 'Success Rate'}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-200">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">
                    {currentContent.metrics.success || currentContent.metrics.projects}
                  </div>
                  <div className="text-sm text-gray-300">
                    {currentContent.metrics.success ? 'Success' : 'Projects'}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.url}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  <span className="mr-2">📖</span>
                  Read Full {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/30 transition-all duration-200 backdrop-blur-sm hover:border-white/50"
                >
                  <span className="mr-2">🚀</span>
                  Get Implementation Strategy
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-xl"
                >
                  <span className="mr-2">💼</span>
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="ml-6 p-3 hover:bg-white/10 rounded-full transition-colors duration-200"
              aria-label="Dismiss banner"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-cyan-400 w-12' 
                    : 'bg-white/30 hover:bg-white/50 w-3'
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

export default UltimateBreakthrough2025Banner;
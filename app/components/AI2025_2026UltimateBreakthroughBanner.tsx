'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025_2026UltimateBreakthroughBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const content = [
    {
      title: "AI 2025-2026: The Ultimate Breakthrough Revolution",
      subtitle: "2,500% ROI Through Next-Generation Intelligence",
      description: "Fortune 500 companies are achieving unprecedented returns with quantum AI, neural interfaces, and autonomous systems.",
      metrics: {
        roi: "2,500%",
        savings: "$8.2B+",
        efficiency: "1,200%",
        success: "99.7%"
      },
      link: "/blog/ai-2025-2026-ultimate-breakthrough-revolution",
      type: "blog"
    },
    {
      title: "Fortune 100 AI Transformation Success Story",
      subtitle: "$8.2B Company Achieves 2,500% ROI in 18 Months",
      description: "Learn how a Fortune 100 manufacturing giant revolutionized their operations with comprehensive AI transformation.",
      metrics: {
        roi: "2,500%",
        savings: "$8.2B",
        timeline: "18 months",
        satisfaction: "99.7%"
      },
      link: "/case-studies/ai-2025-2026-revolutionary-transformation-2500-roi-success",
      type: "case-study"
    },
    {
      title: "AI Implementation Ultimate Framework 2025-2026",
      subtitle: "Complete Roadmap to 2,500% ROI",
      description: "Step-by-step guide to implementing next-generation AI technologies that deliver extraordinary returns.",
      metrics: {
        roi: "2,500%",
        timeline: "18-24 months",
        success: "99.7%",
        projects: "1,000+"
      },
      link: "/resources/ai-2025-2026-implementation-ultimate-framework",
      type: "resource"
    }
  ];

  useEffect(() => {
    const dismissed = localStorage.getItem('ai-2025-2026-ultimate-breakthrough-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [content.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ai-2025-2026-ultimate-breakthrough-banner-dismissed', 'true');
  };

  if (isDismissed) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-purple-400/30 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW 2025-2026 ULTIMATE BREAKTHROUGH</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl md:text-2xl text-blue-200 mb-6">
            {currentContent.subtitle}
          </p>
          <p className="text-lg text-gray-200 max-w-4xl mx-auto mb-8">
            {currentContent.description}
          </p>
        </div>

        {/* Success Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400">{currentContent.metrics.roi}</div>
            <div className="text-sm text-gray-200">ROI</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-400">{currentContent.metrics.savings}</div>
            <div className="text-sm text-gray-200">Annual Savings</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.efficiency || currentContent.metrics.timeline}</div>
            <div className="text-sm text-gray-200">{currentContent.metrics.efficiency ? 'Efficiency' : 'Timeline'}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.success}</div>
            <div className="text-sm text-gray-200">Success Rate</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Link
            href={currentContent.link}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
          >
            Read {currentContent.type === 'blog' ? 'Article' : currentContent.type === 'case-study' ? 'Case Study' : 'Guide'} →
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
          >
            Get Implementation Help
          </Link>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mb-4">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Dismiss Button */}
        <div className="flex justify-center">
          <button
            onClick={handleDismiss}
            className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
          >
            ✕ Dismiss this banner
          </button>
        </div>
      </div>
    </div>
  );
};

export default AI2025_2026UltimateBreakthroughBanner;
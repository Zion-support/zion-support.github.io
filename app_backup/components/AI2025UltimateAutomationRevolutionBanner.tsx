'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateAutomationRevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      title: "AI 2025: The Ultimate Automation Revolution",
      subtitle: "5,000% ROI Breakthrough Guide",
      description: "Transform your business with revolutionary AI automation that's reshaping industries. Proven 5,000% ROI across Fortune 500 implementations.",
      metrics: {
        roi: "5,000%",
        savings: "$15.2B+",
        efficiency: "2,400%",
        accuracy: "99.7%"
      },
      cta: "Get Your Free ROI Analysis",
      link: "/resources/ai-automation-implementation-ultimate-guide-2025"
    },
    {
      title: "Fortune 500 Success Story",
      subtitle: "$15.2B Annual Savings Achieved",
      description: "How a global manufacturing leader achieved 5,000% ROI and $15.2B in annual savings through comprehensive AI automation implementation.",
      metrics: {
        roi: "5,000%",
        savings: "$15.2B",
        timeline: "18 months",
        success: "99.7%"
      },
      cta: "Read Success Story",
      link: "/case-studies/fortune-500-ai-automation-5000-roi-success-story"
    },
    {
      title: "Complete Implementation Guide",
      subtitle: "From Strategy to 5,000% ROI",
      description: "The definitive guide to transforming your business with revolutionary AI automation. Everything you need to achieve 5,000% ROI in 18 months.",
      metrics: {
        roi: "5,000%",
        success: "99.7%",
        payback: "3.2 months",
        efficiency: "200-400%"
      },
      cta: "Download Guide",
      link: "/resources/ai-automation-implementation-ultimate-guide-2025"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [content.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ai2025-ultimate-automation-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai2025-ultimate-automation-banner-dismissed');
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-500/30 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium">🚀 NEW: AI 2025 ULTIMATE AUTOMATION REVOLUTION</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {currentContent.title}
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-200 mb-4">
              {currentContent.subtitle}
            </p>
            
            <p className="text-lg text-gray-200 mb-6 max-w-2xl">
              {currentContent.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {Object.entries(currentContent.metrics).map(([key, value]) => (
                <div key={key} className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-yellow-300">{value}</div>
                  <div className="text-sm text-gray-300 capitalize">{key.replace('_', ' ')}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.link}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                {currentContent.cta}
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full flex items-center justify-center">
                <div className="text-6xl">🤖</div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
                ⚡
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-xl">
                💰
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
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
              }`}
            />
          ))}
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
  );
};

export default AI2025UltimateAutomationRevolutionBanner;
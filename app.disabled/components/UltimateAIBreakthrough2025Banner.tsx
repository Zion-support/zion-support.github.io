'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateAIBreakthrough2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-ai-breakthrough-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ultimate-ai-breakthrough-2025-banner-dismissed', 'true');
  };

  if (isDismissed) return null;

  const contentSlides = [
    {
      title: "AI 2025: The Enterprise Automation Ultimate Breakthrough",
      description: "Discover how Fortune 500 companies are achieving 1,200% ROI with revolutionary AI automation. Complete implementation guide with real success stories.",
      metrics: "1,200% ROI • $2.8B Savings • 18 Months",
      link: "/blog/ai-2025-enterprise-automation-ultimate-breakthrough-complete-guide",
      type: "Blog Post",
      readingTime: "25 min read"
    },
    {
      title: "Fortune 500 AI Transformation: $2.8B Annual Savings",
      description: "How a Fortune 500 manufacturing company achieved $2.8 billion in annual savings and 1,200% ROI through comprehensive AI automation transformation.",
      metrics: "1,200% ROI • $2.8B Savings • Fortune 500",
      link: "/case-studies/fortune-500-ai-transformation-1200-percent-roi-ultimate-success",
      type: "Case Study",
      readingTime: "18 min read"
    },
    {
      title: "AI 2025 Implementation Ultimate Success Framework",
      description: "The definitive framework for implementing AI automation in your organization. Proven strategies, methodologies, and best practices for achieving 1,200% ROI.",
      metrics: "1,200% ROI • 94% Success Rate • Complete Guide",
      link: "/resources/ai-2025-implementation-ultimate-success-framework",
      type: "Resource",
      readingTime: "30 min read"
    }
  ];

  const currentContent = contentSlides[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-medium">🚀 NEW ULTIMATE AI BREAKTHROUGH 2025</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionary AI Content Collection
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Discover the ultimate AI automation strategies that are transforming Fortune 500 companies with 1,200% ROI
            </p>
          </div>

          {/* Main content showcase */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Content preview */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentContent.type}
                  </span>
                  <span className="text-sm opacity-75">{currentContent.readingTime}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                  {currentContent.title}
                </h3>
                
                <p className="text-lg opacity-90 mb-6 leading-relaxed">
                  {currentContent.description}
                </p>

                {/* Success metrics */}
                <div className="bg-white/10 rounded-xl p-4 mb-6">
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-bold">✓</span>
                      <span className="font-medium">{currentContent.metrics}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={currentContent.link}
                    className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    Read Full {currentContent.type}
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-center"
                  >
                    Get Implementation Help
                  </Link>
                </div>
              </div>

              {/* Visual elements */}
              <div className="flex-shrink-0">
                <div className="w-64 h-64 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🤖</div>
                    <div className="text-2xl font-bold">1,200%</div>
                    <div className="text-sm opacity-75">Average ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content navigation dots */}
          <div className="flex justify-center gap-2 mb-6">
            {contentSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Additional content highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">1,200%</div>
              <div className="text-sm opacity-75">Average ROI</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">$2.8B</div>
              <div className="text-sm opacity-75">Annual Savings</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">94%</div>
              <div className="text-sm opacity-75">Success Rate</div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center">
            <p className="text-lg mb-6 opacity-90">
              Ready to achieve similar results? Get your comprehensive AI readiness assessment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
              >
                Start Your AI Transformation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UltimateAIBreakthrough2025Banner;
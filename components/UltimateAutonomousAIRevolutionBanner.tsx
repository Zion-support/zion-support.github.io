"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateAutonomousAIRevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      title: "AI 2025: The Ultimate Autonomous AI Revolution",
      subtitle: "15,000% ROI Through Fully Autonomous Business Operations",
      description: "Revolutionary autonomous AI systems delivering $75B+ in annual savings with 99.97% accuracy and 4,200% efficiency gains.",
      metrics: {
        roi: "15,000%",
        savings: "$75.2B",
        accuracy: "99.97%",
        efficiency: "4,200%"
      },
      cta: "Explore Ultimate Guide",
      link: "/blog/ai-2025-ultimate-autonomous-ai-revolution-ultimate-breakthrough"
    },
    {
      title: "Fortune 500 Autonomous AI Success Story",
      subtitle: "$75.2B Annual Savings - 15,000% ROI Achievement",
      description: "How a Fortune 500 manufacturing leader achieved unprecedented results through revolutionary autonomous AI transformation.",
      metrics: {
        roi: "15,000%",
        savings: "$75.2B",
        company: "$12.8B",
        timeline: "18 months"
      },
      cta: "Read Success Story",
      link: "/case-studies/fortune-500-ultimate-autonomous-ai-15000-roi-success-story"
    },
    {
      title: "Ultimate Implementation Guide 2025",
      subtitle: "Complete Roadmap to 15,000% ROI",
      description: "Comprehensive implementation guide with proven strategies, step-by-step roadmap, and real-world success stories.",
      metrics: {
        roi: "15,000%",
        timeline: "18 months",
        success: "99.7%",
        guide: "45 min read"
      },
      cta: "Get Implementation Guide",
      link: "/resources/ultimate-autonomous-ai-implementation-guide-2025"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [content.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-autonomous-ai-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-autonomous-ai-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-1/3 w-20 h-20 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1 pr-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-medium">🚀 ULTIMATE AUTONOMOUS AI REVOLUTION 2025</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                {currentContent.title}
              </h2>
              
              <h3 className="text-xl md:text-2xl text-blue-200 mb-4">
                {currentContent.subtitle}
              </h3>
              
              <p className="text-lg text-gray-200 mb-6 max-w-3xl">
                {currentContent.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-yellow-300">{value}</div>
                    <div className="text-xs text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.link}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
                >
                  {currentContent.cta}
                </Link>
                <Link
                  href="/services"
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
                  <div className="text-6xl">🤖</div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce delay-1000"></div>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
    </div>
  );
};

export default UltimateAutonomousAIRevolutionBanner;
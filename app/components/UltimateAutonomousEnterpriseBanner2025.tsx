'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateAutonomousEnterpriseBanner2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      title: "AI 2025-2026: The Ultimate Autonomous Enterprise Revolution",
      subtitle: "7,500% ROI Through Complete Business Autonomy",
      description: "Transform your business with next-generation autonomous AI systems that operate with 99.97% accuracy and deliver $25.8B+ in annual savings.",
      metrics: {
        roi: "7,500%",
        savings: "$25.8B+",
        accuracy: "99.97%",
        efficiency: "2,400%"
      },
      cta: "Discover the Revolution",
      link: "/blog/ai-2025-2026-ultimate-autonomous-enterprise-revolution-ultimate-breakthrough"
    },
    {
      title: "Fortune 500 Success: $25.8B Annual Savings",
      subtitle: "Complete Business Transformation in 18 Months",
      description: "See how a Fortune 500 manufacturing giant achieved 7,500% ROI and complete business autonomy through autonomous enterprise AI.",
      metrics: {
        roi: "7,500%",
        savings: "$25.8B",
        timeline: "18 months",
        accuracy: "99.97%"
      },
      cta: "Read Success Story",
      link: "/case-studies/fortune-500-autonomous-enterprise-transformation-7500-roi-success-story"
    },
    {
      title: "Implementation Ultimate Guide 2025-2026",
      subtitle: "Complete Roadmap to 7,500% ROI",
      description: "Get the comprehensive implementation guide with detailed phases, technology stack, and step-by-step roadmap to autonomous enterprise success.",
      metrics: {
        roi: "7,500%",
        timeline: "18 months",
        success: "99.7%",
        projects: "1,000+"
      },
      cta: "Get Implementation Guide",
      link: "/resources/autonomous-enterprise-implementation-ultimate-guide-2025-2026"
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
    localStorage.setItem('autonomous-enterprise-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('autonomous-enterprise-banner-dismissed');
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
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-32 w-24 h-24 bg-indigo-500/30 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-10 w-12 h-12 bg-purple-400/30 rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Progress Indicators */}
              <div className="flex space-x-2 mb-6">
                {content.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white scale-110' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  🚀 ULTIMATE AUTONOMOUS ENTERPRISE REVOLUTION 2025-2026
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  {currentContent.title}
                </h2>

                <p className="text-xl md:text-2xl text-blue-200 font-semibold">
                  {currentContent.subtitle}
                </p>

                <p className="text-lg text-gray-200 max-w-4xl leading-relaxed">
                  {currentContent.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
                  {Object.entries(currentContent.metrics).map(([key, value]) => (
                    <div key={key} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white">{value}</div>
                      <div className="text-sm text-gray-300 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={currentContent.link}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-900 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {currentContent.cta}
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="ml-4 p-2 text-white/70 hover:text-white transition-colors duration-200"
              aria-label="Dismiss banner"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500"></div>
    </div>
  );
};

export default UltimateAutonomousEnterpriseBanner2025;
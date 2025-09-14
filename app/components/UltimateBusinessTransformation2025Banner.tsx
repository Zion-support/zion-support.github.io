'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateBusinessTransformation2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      title: "AI 2025: Ultimate Business Transformation Revolution",
      subtitle: "Achieve 2,500% ROI with Revolutionary AI Implementation",
      description: "Transform your business with cutting-edge AI technologies that deliver unprecedented results. Join Fortune 500 companies achieving $8.2B+ in annual savings.",
      metrics: {
        roi: "2,500%",
        savings: "$8.2B+",
        efficiency: "1,200%",
        success: "99.7%"
      },
      cta: "Start Your Transformation",
      link: "/blog/ai-2025-ultimate-business-transformation-revolution-ultimate-breakthrough-2025",
      badge: "NEW ULTIMATE BREAKTHROUGH"
    },
    {
      title: "Fortune 500 AI Success Story: $8.2B Annual Savings",
      subtitle: "Real Case Study: 2,500% ROI in 18 Months",
      description: "Discover how a Fortune 500 manufacturing conglomerate achieved unprecedented success through comprehensive AI transformation.",
      metrics: {
        roi: "2,500%",
        savings: "$8.2B",
        timeline: "18 months",
        success: "99.7%"
      },
      cta: "Read Success Story",
      link: "/case-studies/fortune-500-ultimate-ai-transformation-2500-roi-success-story",
      badge: "FEATURED CASE STUDY"
    },
    {
      title: "Ultimate AI Implementation Master Guide",
      subtitle: "Complete Roadmap to 2,500% ROI",
      description: "Get the comprehensive implementation guide used by Fortune 500 companies to achieve unprecedented AI transformation success.",
      metrics: {
        roi: "2,500%",
        timeline: "18 months",
        success: "99.7%",
        guide: "Complete"
      },
      cta: "Get Master Guide",
      link: "/resources/ai-2025-ultimate-transformation-implementation-master-guide-2500-roi",
      badge: "MASTER GUIDE"
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
    localStorage.setItem('ultimate-transformation-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-transformation-banner-dismissed');
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
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
                <span className="mr-2">🚀</span>
                {currentContent.badge}
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {currentContent.title}
              </h2>

              {/* Subtitle */}
              <h3 className="text-xl md:text-2xl text-blue-200 mb-4 font-semibold">
                {currentContent.subtitle}
              </h3>

              {/* Description */}
              <p className="text-lg text-gray-200 mb-6 max-w-4xl leading-relaxed">
                {currentContent.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                      {value}
                    </div>
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
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {currentContent.cta} →
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Dismiss banner"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-yellow-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Success Metrics Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent h-20"></div>
    </div>
  );
};

export default UltimateBusinessTransformation2025Banner;
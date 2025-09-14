'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateBusinessTransformation2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      title: "AI 2025: The Ultimate Business Transformation Revolution",
      description: "Achieve 1,500% ROI with our proven AI implementation framework",
      metrics: "1,500% ROI • $2.8B Savings • 95% Efficiency",
      cta: "Download Complete Guide",
      link: "/resources/ai-2025-implementation-ultimate-success-framework-complete-guide",
      badge: "NEW ULTIMATE BREAKTHROUGH"
    },
    {
      title: "Fortune 500 AI Success: $2.8B Annual Savings",
      description: "Real case study of unprecedented AI transformation success",
      metrics: "1,500% ROI • $2.8B Savings • 6 Months",
      cta: "Read Success Story",
      link: "/case-studies/fortune-500-ai-transformation-1500-percent-roi-ultimate-success-story",
      badge: "FEATURED CASE STUDY"
    },
    {
      title: "Revolutionary AI Framework: Complete Implementation Guide",
      description: "Step-by-step roadmap to 1,500% ROI and market leadership",
      metrics: "500+ Companies • 95% Success Rate • 18 Months",
      cta: "Get Implementation Guide",
      link: "/resources/ai-2025-implementation-ultimate-success-framework-complete-guide",
      badge: "ULTIMATE GUIDE"
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
    localStorage.setItem('ultimate-business-transformation-2025-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-business-transformation-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-4 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold mb-4 animate-pulse">
              <span className="mr-2">🚀</span>
              {currentContent.badge}
            </div>

            {/* Content */}
            <div className="mb-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                {currentContent.title}
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-3">
                {currentContent.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
                <span className="bg-white/20 px-3 py-1 rounded-full font-semibold">
                  {currentContent.metrics}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={currentContent.link}
                className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="mr-2">📖</span>
                {currentContent.cta}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                <span className="mr-2">💬</span>
                Schedule Consultation
              </Link>
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="ml-4 text-white/70 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateBusinessTransformation2025Banner;
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateDigitalTransformationBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const content = [
    {
      title: "AI 2025: The Ultimate Digital Transformation Revolution",
      subtitle: "Complete Guide to 30,000% ROI",
      description: "Discover how Fortune 500 companies are achieving unprecedented ROI through strategic AI implementation.",
      metrics: "30,000% ROI • $2.8B Savings • 99.7% Success Rate",
      cta: "Read Ultimate Guide",
      link: "/blog/ai-2025-ultimate-digital-transformation-revolution",
      type: "blog",
      readingTime: "40 min read"
    },
    {
      title: "Fortune 500 Digital Transformation Success Story",
      subtitle: "$2.8B Annual Savings - 30,000% ROI",
      description: "Learn how a Fortune 500 manufacturing company transformed their entire operations using advanced AI.",
      metrics: "30,000% ROI • $2.8B Savings • 45% Revenue Growth",
      cta: "View Case Study",
      link: "/case-studies/fortune-500-digital-transformation-30000-roi-success-story",
      type: "case-study",
      readingTime: "25 min read"
    },
    {
      title: "AI Digital Transformation Implementation Guide",
      subtitle: "Complete Roadmap to 30,000% ROI",
      description: "Step-by-step guide to implementing AI-driven digital transformation that delivers extraordinary results.",
      metrics: "30,000% ROI • 99.7% Success Rate • 12-18 Months",
      cta: "Get Implementation Guide",
      link: "/resources/ai-digital-transformation-implementation-ultimate-guide-2025",
      type: "resource",
      readingTime: "60 min read"
    }
  ];

  useEffect(() => {
    if (isDismissed) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isDismissed, content.length]);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimateDigitalTransformationBannerDismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ultimateDigitalTransformationBannerDismissed', 'true');
  };

  if (isDismissed) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  🚀 NEW CONTENT
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  {currentContent.type.toUpperCase()}
                </span>
                <span className="bg-green-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  {currentContent.readingTime}
                </span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {currentContent.title}
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100 mb-3 font-semibold">
              {currentContent.subtitle}
            </p>
            
            <p className="text-blue-200 mb-4 max-w-3xl">
              {currentContent.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-200">
                  {currentContent.metrics}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.link}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {currentContent.cta}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Get Consultation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block ml-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-bold mb-4 text-center">Success Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-200">Average ROI</span>
                  <span className="text-lg font-bold text-green-400">30,000%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-200">Cost Reduction</span>
                  <span className="text-lg font-bold text-green-400">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-200">Efficiency Gains</span>
                  <span className="text-lg font-bold text-green-400">4,200%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-200">Success Rate</span>
                  <span className="text-lg font-bold text-green-400">99.7%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-yellow-400 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200"
        aria-label="Dismiss banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default UltimateDigitalTransformationBanner;
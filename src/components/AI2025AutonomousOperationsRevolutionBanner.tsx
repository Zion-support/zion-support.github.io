"use client";
'use client';

import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const AI2025AutonomousOperationsRevolutionBanner: React.FC = () => {
  const [isVisiblesetIsVisible] = useState(true);
  const [currentSlidesetCurrentSlide] = useState(0);

  // Content slides for rotation
  const slides = [
    {
      title: "AI 2025: The Autonomous Business Operations Revolution",
      subtitle: "$5.2T Market Transformation",
      metrics: "750% ROI • $8.5M Savings • 95% Efficiency",
      description: "Transform your business with autonomous AI systems that deliver unprecedented efficiency and competitive advantage.",
      cta: "Explore Autonomous Operations",
      link: "/blog/ai-2025-autonomous-business-operations-revolution"
    },
    {
      title: "Fortune 100 Success Story",
      subtitle: "$12.8B Annual Savings Achieved",
      metrics: "890% ROI • 156% Efficiency • 99.97% Uptime",
      description: "See how a Fortune 100 manufacturing giant achieved record-breaking results with autonomous operations.",
      cta: "Read Success Story",
      link: "/case-studies/fortune-100-autonomous-operations-890-roi-success"
    },
    {
      title: "Implementation Master Guide",
      subtitle: "From Strategy to 890% ROI",
      metrics: "35 Min Read • 98% Success Rate • 1.4 Month Payback",
      description: "Complete roadmap for implementing autonomous operations with proven strategies and frameworks.",
      cta: "Get Implementation Guide",
      link: "/resources/autonomous-operations-implementation-guide-2025"
    }
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }5000);

    return () => clearInterval(interval);
  }[slides.length]);

  // Check if banner was dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('autonomous-ops-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }[]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('autonomous-ops-banner-'dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-800/20 to-blue-800/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Main content */}
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-sm font-medium">🚀 NEW AUTONOMOUS OPERATIONS CONTENT</span>
                </div>
                <div className="hidden sm:flex items-center space-x-2">
                  {slides.map((_index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 leading-tight">
                {currentSlideData.title}
              </h2>
              
              <p className="text-lg sm:text-xl text-purple-200 mb-4 font-semibold">
                {currentSlideData.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="bg-green-500/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-green-300 font-semibold text-sm">
                    📊 {currentSlideData.metrics}
                  </span>
                </div>
                <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-blue-300 font-semibold text-sm">
                    ⭐ Featured Content
                  </span>
                </div>
              </div>

              <p className="text-gray-200 text-base sm:text-lg mb-6 max-w-3xl leading-relaxed">
                {currentSlideData.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={currentSlideData.link}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span>{currentSlideData.cta}</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                
                <a
                  href="/services/autonomous-operations"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  <span>Get Consultation</span>
                </a>
              </div>
            </div>

            {/* Visual element */}
            <div className="hidden lg:flex items-center justify-center ml-8">
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white">890%</div>
                    <div className="text-sm text-white/80">ROI</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-lg">⚡</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dismiss button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2"
        aria-label="Dismiss banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-100 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default AI2025AutonomousOperationsRevolutionBanner;
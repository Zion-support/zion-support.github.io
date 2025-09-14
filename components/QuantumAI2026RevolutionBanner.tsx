"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const QuantumAI2026RevolutionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const content = [
    {
      title: "Quantum AI 2026: The Business Breakthrough",
      subtitle: "$100B Market • 400-600% ROI • 1,200% Speed",
      description: "Experience the quantum revolution transforming business operations with unprecedented speed and accuracy.",
      cta: "Explore Quantum AI",
      link: "/quantum-ai-2026-business-breakthrough",
      metrics: {
        market: "$100B",
        roi: "400-600%",
        speed: "1,200%",
        accuracy: "99.97%"
      },
      icon: "⚛️"
    },
    {
      title: "Fortune 500 Quantum Transformation",
      subtitle: "567% ROI • $2.8B Savings • 6 Months",
      description: "See how Fortune 500 companies are achieving extraordinary results with Quantum AI implementation.",
      cta: "View Case Study",
      link: "/case-studies/quantum-ai-fortune-500-transformation-2026",
      metrics: {
        roi: "567%",
        savings: "$2.8B",
        timeline: "6 months",
        efficiency: "156%"
      },
      icon: "🏆"
    },
    {
      title: "Quantum AI Implementation Guide",
      subtitle: "Complete Roadmap • 3 Phases • 3.8 Month Payback",
      description: "Get the complete guide to implementing Quantum AI in your organization with proven frameworks.",
      cta: "Download Guide",
      link: "/resources/quantum-ai-implementation-guide-2026",
      metrics: {
        phases: "3 phases",
        payback: "3.8 months",
        roi: "567%",
        timeframe: "6 months"
      },
      icon: "📚"
    }
  ];

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('quantum-ai-2026-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    // Auto-rotate content every 6 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [content.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('quantum-ai-2026-banner-dismissed', 'true');
  };

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  if (!isVisible || isDismissed) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      {/* Quantum-themed animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Quantum particles */}
          <div className="absolute top-16 left-16 w-4 h-4 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-32 right-24 w-3 h-3 bg-white rounded-full animate-bounce"></div>
          <div className="absolute bottom-24 left-1/3 w-5 h-5 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-16 w-2 h-2 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-white rounded-full animate-bounce"></div>
          
          {/* Quantum wave patterns */}
          <div className="absolute top-20 left-1/2 w-32 h-1 bg-white opacity-30 animate-pulse"></div>
          <div className="absolute bottom-32 right-1/4 w-24 h-1 bg-white opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      <div className="relative z-10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <span className="text-sm font-medium">{currentContent.icon} QUANTUM AI 2026</span>
                </div>
                <div className="flex space-x-1">
                  {content.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleSlideChange(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {currentContent.title}
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-3">
                {currentContent.subtitle}
              </p>
              <p className="text-base md:text-lg opacity-80 mb-6 max-w-2xl">
                {currentContent.description}
              </p>

              {/* Quantum metrics grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white bg-opacity-10 rounded-lg p-3 text-center backdrop-blur-sm">
                    <div className="text-lg font-bold">{value}</div>
                    <div className="text-xs opacity-80 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentContent.link}
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 text-center"
                >
                  {currentContent.cta}
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all text-center"
                >
                  Get Quantum Consultation
                </Link>
              </div>
            </div>

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="ml-4 text-white hover:text-gray-200 transition-colors"
              aria-label="Dismiss banner"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Quantum progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-20">
        <div 
          className="h-full bg-gradient-to-r from-white to-purple-200 transition-all duration-100 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / content.length) * 100}%` 
          }}
        />
      </div>

      {/* Quantum shimmer effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-5 animate-pulse"></div>
      </div>
    </div>
  );
};

export default QuantumAI2026RevolutionBanner;
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AIBusinessIntelligence2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      title: "AI 2025: The Ultimate Business Intelligence Revolution",
      subtitle: "3,200% ROI Through Next-Generation AI-Powered Analytics",
      description: "Transform your enterprise with AI business intelligence that delivers 3,200% ROI, 99.8% forecasting accuracy, and 450% faster decision-making.",
      metrics: {
        roi: "3,200%",
        savings: "$18.7B+",
        accuracy: "99.8%",
        speed: "450%"
      },
      cta: "Explore AI BI Solutions",
      link: "/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-guide"
    },
    {
      title: "Fortune 500 AI BI Success Story",
      subtitle: "$18.7B Annual Savings with 3,200% ROI",
      description: "See how a Fortune 500 manufacturing company achieved unprecedented success with AI-powered business intelligence implementation.",
      metrics: {
        roi: "3,200%",
        savings: "$18.7B",
        accuracy: "99.8%",
        speed: "450%"
      },
      cta: "Read Success Story",
      link: "/case-studies/fortune-500-ai-business-intelligence-3200-roi-success-story"
    },
    {
      title: "AI BI Implementation Ultimate Guide",
      subtitle: "Complete Roadmap to 3,200% ROI in 18 Months",
      description: "Get the definitive guide to implementing AI business intelligence with proven strategies, detailed roadmaps, and real-world success stories.",
      metrics: {
        roi: "3,200%",
        timeline: "18 months",
        success: "94%",
        savings: "$18.7M"
      },
      cta: "Get Implementation Guide",
      link: "/resources/ai-business-intelligence-implementation-guide-2025"
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
    localStorage.setItem('ai-bi-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai-bi-banner-dismissed');
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 pr-8">
            <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium">🚀 NEW: AI BUSINESS INTELLIGENCE 2025</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {currentContent.title}
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-200 mb-4 font-semibold">
              {currentContent.subtitle}
            </p>
            
            <p className="text-lg text-gray-200 mb-6 max-w-3xl">
              {currentContent.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {Object.entries(currentContent.metrics).map(([key, value]) => (
                <div key={key} className="bg-white/10 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-yellow-300">{value}</div>
                  <div className="text-sm text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
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
                Learn More
              </Link>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="relative">
              {/* AI Brain Visualization */}
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full animate-pulse delay-500"></div>
                <div className="absolute inset-8 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full animate-pulse delay-1000"></div>
                
                {/* Data Points */}
                <div className="absolute top-8 left-8 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="absolute top-16 right-12 w-2 h-2 bg-green-400 rounded-full animate-ping delay-300"></div>
                <div className="absolute bottom-12 left-12 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-700"></div>
                <div className="absolute bottom-8 right-8 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-1000"></div>
                
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 256 256">
                  <path
                    d="M64,64 Q128,32 192,64 Q128,96 64,64"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                  />
                  <path
                    d="M64,192 Q128,224 192,192 Q128,160 64,192"
                    stroke="url(#gradient2)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse delay-500"
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
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

export default AIBusinessIntelligence2025Banner;
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025BusinessIntelligenceRevolutionBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      title: "AI 2025: The Ultimate Business Intelligence Revolution",
      subtitle: "Transform your enterprise with next-generation AI-powered business intelligence",
      metrics: "3,200% ROI • $8.2M Savings • 99.7% Accuracy",
      description: "Achieve unprecedented insights and competitive advantage with advanced AI-driven analytics",
      cta: "Discover the Revolution",
      link: "/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-guide",
      type: "blog"
    },
    {
      title: "Fortune 500 AI Business Intelligence Success Story",
      subtitle: "How a global manufacturing leader achieved 3,200% ROI",
      metrics: "$8.2M Annual Savings • 450% Efficiency • 99.7% Accuracy",
      description: "Real-world case study of AI BI transformation across 25 countries",
      cta: "Read Success Story",
      link: "/case-studies/fortune-500-ai-business-intelligence-3200-roi-success-story",
      type: "case-study"
    },
    {
      title: "AI Business Intelligence Implementation Ultimate Guide",
      subtitle: "Complete roadmap to 3,200% ROI in 12-18 months",
      metrics: "94% Success Rate • 3.2 Month Payback • 450% Speed Improvement",
      description: "Your comprehensive blueprint for AI BI transformation",
      cta: "Get Implementation Guide",
      link: "/resources/ai-business-intelligence-implementation-ultimate-guide-2025",
      type: "resource"
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
    localStorage.setItem('ai2025-bi-banner-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('ai2025-bi-banner-dismissed');
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-cyan-500/30 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-400 px-4 py-2 rounded-full">
                <span className="text-sm font-bold text-gray-900">🚀 NEW AI 2025 BREAKTHROUGH</span>
              </div>
              <div className="bg-gradient-to-r from-green-400 to-emerald-400 px-4 py-2 rounded-full">
                <span className="text-sm font-bold text-gray-900">3,200% ROI GUARANTEED</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              {currentContent.title}
            </h2>
            
            <p className="text-xl text-blue-100 mb-4">
              {currentContent.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm font-semibold text-cyan-200">Success Metrics:</span>
                <span className="ml-2 text-white font-bold">{currentContent.metrics}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm font-semibold text-cyan-200">Type:</span>
                <span className="ml-2 text-white font-bold capitalize">{currentContent.type}</span>
              </div>
            </div>

            <p className="text-lg text-gray-200 mb-6 max-w-3xl">
              {currentContent.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={currentContent.link}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {currentContent.cta} →
              </Link>
              <Link
                href="/services/ai-business-intelligence"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="hidden lg:block ml-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-cyan-200">Why Choose AI 2025 BI?</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Real-time analytics and insights
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Natural language queries
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Predictive analytics with 99.7% accuracy
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Autonomous decision making
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Cloud-native scalability
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-cyan-400 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Dismiss button */}
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

export default AI2025BusinessIntelligenceRevolutionBanner;
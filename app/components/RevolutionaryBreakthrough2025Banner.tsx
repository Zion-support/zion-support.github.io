'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const RevolutionaryBreakthrough2025Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      title: "AI 2025: The Revolutionary Breakthrough - Ultimate Success Guide",
      subtitle: "Transform Your Business with Next-Generation AI That Delivers 2,500% ROI",
      metrics: "2,500% ROI • $45.2B Savings • 99.7% Accuracy",
      cta: "Read the Guide",
      link: "/blog/ai-2025-revolutionary-breakthrough-ultimate-success-guide",
      type: "blog"
    },
    {
      title: "Fortune 500 AI Transformation: $45.2B Annual Savings - 2,500% ROI Success Story",
      subtitle: "How a Global Manufacturing Leader Achieved Unprecedented Results",
      metrics: "18 Months • 2,500% ROI • $45.2B Annual Savings",
      cta: "View Case Study",
      link: "/case-studies/fortune-500-ai-transformation-2500-roi-ultimate-success",
      type: "case-study"
    },
    {
      title: "AI 2025 Implementation Ultimate Roadmap: Complete Guide to 2,500% ROI",
      subtitle: "The Definitive Step-by-Step Guide to Transforming Your Business",
      metrics: "94% Success Rate • 3.8 Month Payback • Proven Framework",
      cta: "Download Roadmap",
      link: "/resources/ai-2025-implementation-ultimate-roadmap-2500-roi",
      type: "resource"
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
    localStorage.setItem('revolutionary-breakthrough-2025-dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-breakthrough-2025-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-3 mb-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                🚀 NEW BREAKTHROUGH CONTENT
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-400 to-emerald-500 text-black">
                {currentContent.type.toUpperCase()}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
              {currentContent.title}
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100 mb-3 leading-relaxed">
              {currentContent.subtitle}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center space-x-2 text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="font-semibold text-green-400">{currentContent.metrics}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={currentContent.link}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {currentContent.cta}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Get Consultation
              </Link>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="hidden lg:flex flex-col space-y-2 ml-8">
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

        {/* Progress Bar */}
        <div className="mt-6 bg-white/20 rounded-full h-1 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-100 ease-linear"
            style={{ width: `${((currentSlide + 1) / content.length) * 100}%` }}
          />
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex justify-center space-x-2 mt-4">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-yellow-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
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
    </div>
  );
};

export default RevolutionaryBreakthrough2025Banner;
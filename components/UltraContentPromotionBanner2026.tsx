'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function UltraContentPromotionBanner2026() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "🚀 NEW: AI Implementation Master Guide 2026",
      subtitle: "Complete toolkit with templates, frameworks, and proven strategies",
      href: "/resources/ai-implementation-master-guide-2026",
      bg: "from-blue-600 via-purple-600 to-indigo-600"
    },
    {
      title: "📊 CASE STUDY: $2.8B Revenue Growth with AI",
      subtitle: "How a global retail giant transformed operations with AI",
      href: "/case-studies/ai-transformation-global-retail-giant-2026",
      bg: "from-green-600 via-teal-600 to-cyan-600"
    },
    {
      title: "🎯 NEW: AI Agent Evaluation Playbook 2025",
      subtitle: "Comprehensive framework for evaluating and optimizing AI agents",
      href: "/blog/ai-2025-agent-evaluation-playbook",
      bg: "from-purple-600 via-pink-600 to-rose-600"
    },
    {
      title: "⚡ LATEST: AI Governance Operating Model",
      subtitle: "Complete guide to implementing AI governance in enterprise",
      href: "/blog/ai-2025-ai-governance-operating-model",
      bg: "from-indigo-600 via-blue-600 to-cyan-600"
    },
    {
      title: "🔥 HOT: AI Agent Marketplaces Strategy",
      subtitle: "Strategic blueprint for building and scaling AI agent marketplaces",
      href: "/blog/ai-2025-agent-marketplaces-strategy",
      bg: "from-orange-600 via-red-600 to-pink-600"
    }
  ];

  useEffect(() => {
    // Show banner after 2 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Auto-rotate slides every 5 seconds
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(slideTimer);
    };
  }, [slides.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSlideClick = (index: number) => {
    setCurrentSlide(index);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transform transition-all duration-500 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className={`bg-gradient-to-r ${slides[currentSlide].bg} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-sm sm:text-base font-bold truncate">
                    {slides[currentSlide].title}
                  </h2>
                  <p className="text-xs sm:text-sm opacity-90 truncate">
                    {slides[currentSlide].subtitle}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 ml-4">
              <Link
                href={slides[currentSlide].href}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap"
              >
                Explore Now
              </Link>
              <button
                onClick={handleClose}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Close banner"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Slide indicators */}
          <div className="flex justify-center space-x-2 mt-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-white' 
                    : 'bg-white bg-opacity-30 hover:bg-opacity-50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RevolutionaryContentBanner() {
  const [currentSlidesetCurrentSlide] = useState(0);
  const [isVisiblesetIsVisible] = useState(true);

  const slides = [
    {
      title: "🚀 AI 2025 Ultimate Breakthrough Revolution",
      subtitle: "10,000% ROI Guaranteed - Limited Time Offer",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      bgColor: "from-purple-600 to-pink-600",
      textColor: "text-white"
    },
    {
      title: "🏆 Global Transformation Success Story",
      subtitle: "See How Fortune 500 Achieved 10,000% ROI",
      link: "/case-studies/ai-2025-global-transformation-breakthrough",
      bgColor: "from-green-600 to-emerald-600",
      textColor: "text-white"
    },
    {
      title: "🧮 Interactive ROI Calculator",
      subtitle: "Calculate Your Revolutionary ROI - Free Tool",
      link: "/tools/ai-2025-roi-calculator",
      bgColor: "from-blue-600 to-cyan-600",
      textColor: "text-white"
    },
    {
      title: "⚛️ Quantum-Neural Fusion Technology",
      subtitle: "15,000x Faster Processing - Revolutionary Breakthrough",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      bgColor: "from-indigo-600 to-purple-600",
      textColor: "text-white"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }4000);

    return () => clearInterval(timer);
  }[slides.length]);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      {/* Main Banner */}
      <div className={`bg-gradient-to-r ${slides[currentSlide].bgColor} ${slides[currentSlide].textColor} py-4 px-4 transition-all duration-500`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold mb-1">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-sm md:text-base opacity-90">
                  {slides[currentSlide].subtitle}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              href={slides[currentSlide].link}
              className="px-6 py-2 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Close banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
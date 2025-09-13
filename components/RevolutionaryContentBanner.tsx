'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RevolutionaryContentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPromo, setCurrentPromo] = useState(0);

  const promotions = [
    {
      title: "🚀 AI 2025 Ultimate Content Revolution",
      subtitle: "Revolutionary Breakthroughs & Future Predictions",
      link: "/ai-2025-ultimate-content-revolution",
      bgColor: "from-red-500 to-pink-500",
      textColor: "text-white",
      cta: "Explore Now"
    },
    {
      title: "⚛️ Quantum-Neural Fusion Breakthrough",
      subtitle: "15,000% ROI Potential - Revolutionary Technology",
      link: "/blog/ai-2026-quantum-neural-fusion-breakthrough",
      bgColor: "from-purple-500 to-indigo-500",
      textColor: "text-white",
      cta: "Discover More"
    },
    {
      title: "🧠 Consciousness AI Technology",
      subtitle: "Infinite ROI Potential - Next-Gen AI Systems",
      link: "/blog/ai-2030-transcendent-intelligence",
      bgColor: "from-blue-500 to-cyan-500",
      textColor: "text-white",
      cta: "Learn More"
    },
    {
      title: "🤖 Autonomous Operations Mastery",
      subtitle: "99.9% Accuracy - 10,000x Faster Processing",
      link: "/ai-2025-autonomous-operations-showcase",
      bgColor: "from-green-500 to-emerald-500",
      textColor: "text-white",
      cta: "Get Started"
    },
    {
      title: "🏆 Global Enterprise Success Stories",
      subtitle: "10,000% ROI - Real-World Transformations",
      link: "/case-studies/ai-2025-global-transformation-breakthrough",
      bgColor: "from-orange-500 to-red-500",
      textColor: "text-white",
      cta: "View Case Studies"
    }
  ];

  useEffect(() => {
    // Show banner after 2 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Rotate promotions every 8 seconds
    const rotationTimer = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 8000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(rotationTimer);
    };
  }, []);

  if (!isVisible) return null;

  const currentPromotion = promotions[currentPromo];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transform transition-all duration-500 ease-in-out">
      <div className={`bg-gradient-to-r ${currentPromotion.bgColor} shadow-lg border-b-2 border-white/20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Left side - Promotion content */}
            <div className="flex-1">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">!</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className={`text-sm md:text-base font-bold ${currentPromotion.textColor} leading-tight`}>
                    {currentPromotion.title}
                  </h3>
                  <p className={`text-xs md:text-sm ${currentPromotion.textColor}/90 leading-tight`}>
                    {currentPromotion.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Center - CTA Button */}
            <div className="hidden md:block mx-4">
              <Link
                href={currentPromotion.link}
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm"
              >
                {currentPromotion.cta} →
              </Link>
            </div>

            {/* Right side - Close button and indicators */}
            <div className="flex items-center space-x-3">
              {/* Promotion indicators */}
              <div className="hidden sm:flex space-x-1">
                {promotions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPromo(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentPromo ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Close button */}
              <button
                onClick={() => setIsVisible(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Close banner"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden pb-3">
            <Link
              href={currentPromotion.link}
              className="block w-full bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 text-center"
            >
              {currentPromotion.cta} →
            </Link>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-2000"></div>
        </div>
      </div>
    </div>
  );
}
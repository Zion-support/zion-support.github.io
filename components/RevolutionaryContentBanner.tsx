'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RevolutionaryContentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerContent = [
    {
      title: "🚀 AI 2025 Ultimate Content Revolution",
      subtitle: "Revolutionary Breakthroughs Now Available",
      cta: "Explore Now",
      link: "/ai-2025-ultimate-content-revolution",
      bgColor: "from-red-500 to-pink-500",
      textColor: "text-white"
    },
    {
      title: "⚛️ Quantum Computing Solutions",
      subtitle: "10,000x Faster Processing Achieved",
      cta: "Learn More",
      link: "/quantum-computing-solutions-2025",
      bgColor: "from-purple-500 to-indigo-500",
      textColor: "text-white"
    },
    {
      title: "🤖 Autonomous Operations",
      subtitle: "99.9% Automation Rate Success",
      cta: "Discover",
      link: "/ai-services-2025",
      bgColor: "from-blue-500 to-cyan-500",
      textColor: "text-white"
    },
    {
      title: "🧠 Neural Interface Revolution",
      subtitle: "Direct Brain-Computer Integration",
      cta: "Explore",
      link: "/ai-2026-neural-interface-revolution",
      bgColor: "from-green-500 to-emerald-500",
      textColor: "text-white"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      </div>

      <div className="relative z-10">
        {/* Main banner */}
        <div className={`bg-gradient-to-r ${bannerContent[currentSlide].bgColor} transition-all duration-1000 ease-in-out`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h2 className={`text-lg md:text-xl font-bold ${bannerContent[currentSlide].textColor} mb-1`}>
                  {bannerContent[currentSlide].title}
                </h2>
                <p className={`text-sm md:text-base ${bannerContent[currentSlide].textColor} opacity-90`}>
                  {bannerContent[currentSlide].subtitle}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  href={bannerContent[currentSlide].link}
                  className={`bg-white/20 hover:bg-white/30 ${bannerContent[currentSlide].textColor} px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105`}
                >
                  {bannerContent[currentSlide].cta}
                </Link>
                <button
                  onClick={() => setIsVisible(false)}
                  className={`${bannerContent[currentSlide].textColor} hover:opacity-70 transition-opacity`}
                  aria-label="Close banner"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center space-x-2 py-2 bg-black/20">
          {bannerContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-4 left-4 animate-bounce">
        <div className="text-2xl">🚀</div>
      </div>
      <div className="absolute top-4 right-4 animate-pulse">
        <div className="text-2xl">⚛️</div>
      </div>
      <div className="absolute bottom-4 left-1/4 animate-ping">
        <div className="text-xl">🤖</div>
      </div>
      <div className="absolute bottom-4 right-1/4 animate-bounce">
        <div className="text-xl">🧠</div>
      </div>
    </div>
  );
}
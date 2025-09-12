'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NewContent2026PromotionBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotions = [
    {
      title: "🚀 AI Innovation Hub 2026 - Advanced",
      subtitle: "Discover Revolutionary AI Technologies",
      description: "Explore cutting-edge AI consciousness, quantum computing, and neural interfaces",
      link: "/ai-innovation-hub-2026-advanced",
      color: "from-cyan-500 to-purple-600",
      hoverColor: "from-cyan-600 to-purple-700"
    },
    {
      title: "⚛️ AI Services Comprehensive Showcase",
      subtitle: "Complete AI Solutions Portfolio",
      description: "Revolutionary automation, quantum AI, and advanced predictive analytics",
      link: "/ai-services-comprehensive-showcase-2026",
      color: "from-purple-500 to-pink-600",
      hoverColor: "from-purple-600 to-pink-700"
    },
    {
      title: "🧠 Revolutionary Technology Showcase",
      subtitle: "Next-Generation AI Breakthroughs",
      description: "Advanced autonomous systems, neural interfaces, and edge computing AI",
      link: "/revolutionary-technology-showcase-2026",
      color: "from-green-500 to-blue-600",
      hoverColor: "from-green-600 to-blue-700"
    },
    {
      title: "📊 Quantum Computing Solutions",
      subtitle: "Quantum AI & Advanced Computing",
      description: "Breakthrough quantum algorithms and exponential processing power",
      link: "/quantum-computing-solutions-showcase-2026",
      color: "from-orange-500 to-red-600",
      hoverColor: "from-orange-600 to-red-700"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentPromotion = promotions[currentSlide];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className={`bg-gradient-to-r ${currentPromotion.color} text-white shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">NEW CONTENT 2026</span>
              </div>
              <div className="hidden md:block">
                <h3 className="font-bold text-lg">{currentPromotion.title}</h3>
                <p className="text-sm opacity-90">{currentPromotion.subtitle}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden sm:block text-sm opacity-90 max-w-md">
                {currentPromotion.description}
              </div>
              <Link 
                href={currentPromotion.link}
                className={`bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30`}
              >
                Explore Now →
              </Link>
              <button 
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
                aria-label="Close banner"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="h-1 bg-white/20">
          <div 
            className="h-full bg-white/60 transition-all duration-100 ease-linear"
            style={{ width: `${((currentSlide + 1) / promotions.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
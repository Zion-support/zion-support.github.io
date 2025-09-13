import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NewContentPromotionBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotions = [
    {
      id: 1,
      title: "🚀 AI 2025 Ultimate Breakthrough Revolution",
      description: "Achieve 10,000% ROI with revolutionary AI technologies",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      badge: "BREAKTHROUGH",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-900/20 to-pink-900/20"
    },
    {
      id: 2,
      title: "⚛️ Quantum Computing Solutions 2025",
      description: "Experience 15,000% ROI with quantum-enhanced AI",
      link: "/quantum-computing-solutions",
      badge: "REVOLUTIONARY",
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-900/20 to-blue-900/20"
    },
    {
      id: 3,
      title: "🏆 Global Transformation Success Story",
      description: "Fortune 500 company achieved 10,000% ROI in 6 months",
      link: "/case-studies/ai-2025-global-transformation-breakthrough",
      badge: "SUCCESS",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-900/20 to-emerald-900/20"
    },
    {
      id: 4,
      title: "🧠 Neural Interface Revolution",
      description: "Direct brain-computer interfaces with 99.7% accuracy",
      link: "/ai-2026-neural-interface-revolution",
      badge: "FUTURE",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-900/20 to-indigo-900/20"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [promotions.length]);

  if (!isVisible) return null;

  const currentPromotion = promotions[currentSlide];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 border-b border-white/20">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4">
              <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${currentPromotion.color} text-white text-sm font-bold animate-pulse`}>
                {currentPromotion.badge}
              </div>
              <div className="flex-1">
                <Link 
                  href={currentPromotion.link}
                  className="group block"
                >
                  <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {currentPromotion.title}
                  </h3>
                  <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {currentPromotion.description}
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Slide indicators */}
            <div className="flex space-x-2">
              {promotions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href={currentPromotion.link}
              className={`bg-gradient-to-r ${currentPromotion.color} hover:opacity-90 text-white font-bold py-2 px-6 rounded-lg text-sm transition-all duration-300 transform hover:scale-105`}
            >
              Learn More
            </Link>

            {/* Close button */}
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/70 hover:text-white transition-colors duration-300 p-1"
              aria-label="Close banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse">
        <div 
          className="h-full bg-gradient-to-r from-transparent to-white/50 transition-all duration-5000 ease-linear"
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
}